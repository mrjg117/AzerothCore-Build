# AzerothCore 构建（一切走官方 · 三镜像分体）

把**官方 AzerothCore 编译** + **GitHub Actions 云端编译** + **腾讯云 TCR 存储** + **分体地图/配置镜像** + **一键部署** 串起来。

核心原则：
- **编译逻辑全部官方**：只有"在哪编""存哪""怎么搬运"是你自定义的。
- **三镜像分体构建**：核心 / 地图 / 配置各自独立成镜像、独立推 TCR、独立更新，互不耦合。

## 架构

| 镜像 | 仓库名 | 构建源 | 何时重建 |
|---|---|---|---|
| 核心 | `wotlk-server` | `Dockerfile`（官方 `azerothcore/ac` 编译 43 模组） | push 代码/模组时 |
| 地图 | `wotlk-maps` | `Dockerfile.maps`（客户端数据→官方提取器→数据） | 手动 / `client-data` 变动 |
| 配置 | `wotlk-config` | `Dockerfile.config`（`config-src/` 配置） | 手动 / `config-src` 变动 |

| 层 | 位置 | 是否官方 |
|---|---|---|
| 源码 + 构建配置（本仓库） | GitHub 仓库 | 你自己的 |
| 编译执行 | GitHub Actions（runner） | 触发地，不影响产物 |
| 编译环境 | 官方 `azerothcore/ac:master` | ✅ 官方 |
| CMake 旗标 | `clang` / `TOOLS_BUILD=all` / `SCRIPTS=static` / `MODULES=static` | ✅ 官方（与 wiki 逐字一致） |
| 模组布局 | `modules/` 下 43 个，由 `MODULES=static` 静态编入 | ✅ 官方 |
| 地图数据 | 客户端数据经官方提取器生成，单独镜像 | 提取流程官方，输入来自你的客户端 |
| 成品镜像 | 推送到腾讯云 TCR | 存储地，不影响产物 |
| 配置 | `config-src/` 打包成镜像，运行时挂载 | 你维护的默认值 |

**为什么分三镜像**：地图数据体积大、随客户端版本变；配置要随你调参频繁改。两者都不该和核心一起重建——核心重建只动代码/模组，地图与配置各走各的流水线、各存各的 tag。

## 文件说明

- `Dockerfile` / `.github/workflows/build.yml` —— 核心镜像（官方编译 + 推 `wotlk-server`）。
- `Dockerfile.maps` / `.github/workflows/build-maps.yml` —— 地图镜像（独立推 `wotlk-maps`）。
- `Dockerfile.config` / `.github/workflows/build-config.yml` —— 配置镜像（独立推 `wotlk-config`）。
- `config-src/` —— 配置源（纳入版本库）：`worldserver.conf` / `authserver.conf` / `playerbots.conf`（E5 护栏）。
- `modules.txt` —— 43 个模组 URL（编译期克隆进 `modules/`）。
- `docker-compose.yml` —— 本地从 TCR 拉三镜像运行（authserver + worldserver + db）。
- `deploy.sh` —— 一键：拉三镜像 → 导出 maps/config 到本地 `./data`、`./config` → `docker compose up`。

## 使用步骤

### 1. 配置 GitHub Secrets
仓库 `Settings → Secrets → Actions` 加：
- `TCR_REGISTRY`：如 `ccr.ccs.tencentyun.com`
- `TCR_USERNAME`：腾讯云登录名（以 TCR 控制台为准，个人版为 APPID）
- `TCR_PASSWORD`：TCR 密码 / 临时令牌
- `TCR_NAMESPACE`：镜像命名空间
- `CLIENT_DATA_URL`：（仅地图镜像需要）你的 WoW 客户端 `Data` 目录打包地址（tar.gz，内含 `Data/`）

### 2. 触发构建（三者独立）
- **核心**：`git push` 到 main/master，或 Actions 页 `Build & Push (Tencent TCR)` → 推 `wotlk-server`。
- **地图**：Actions 页 `Build & Push Maps` 手动跑（需 `CLIENT_DATA_URL` 已配）→ 推 `wotlk-maps`。
- **配置**：`config-src/` 有改动自动跑，或手动 `Build & Push Config` → 推 `wotlk-config`。

### 3. 本地一键部署
```bash
# 镜像地址（也可写进本目录 .env：REG=... NS=...）
export REG=ccr.ccs.tencentyun.com NS=azerothcore

# 一键：拉三镜像 + 导出 data/config + 启动
./deploy.sh up

# 首次初始化数据库（需联网拉 TDB 世界库）
./deploy.sh init-db

# 查看状态 / 停止
./deploy.sh status
./deploy.sh down
```
部署后：`./data`（地图，只读挂载）、`./config`（配置，只读挂载）由镜像内容填充。
运行时改配置：直接编辑 `./config/*.conf`，重启 worldserver 生效，**无需重建任何镜像**。

## 取舍说明（项目已定）

- **不锁 commit**：编译期 `--depth 1` 拉最新源码与模组。优点=随时更新；风险=上游改动可能当日构建失败。
- **三镜像分体**：地图/配置不随核心重建，更新解耦、镜像更小、部署更快。
- **配置运行时挂载**：rebuild 只更新代码/模组，不会动调参；改配置无需重建镜像。
- **地图不进核心镜像**：官方核心不带地图，必须客户端提取；单独镜像便于复用、按需更新。

## 重要边界 / 已知不确定点

- **地图提取命令/产物目录随客户端版本可能微调**：`Dockerfile.maps` 用的是 AC 标准提取流程（map-extractor → vmap-extractor → vmap4assembler → mmap-generator）。若你客户端版本产物目录名不同，按实际改 `COPY` 列表。这一步需要你的客户端 `Data`，**无法在此环境验证**，首次跑请核对产物。
- **DB 初始化**：`deploy.sh init-db` 会启动 worldserver 建库/应用 SQL，但 world 库内容（TDB）通常需按 AzerothCore 官方 wiki 另行导入；首次部署请预留这一步。
- **本仓库只负责"编出官方核心 + 地图/配置镜像 + 存到 TCR + 一键拉起"**。客户端数据提取输入、DB 初始化的 TDB 导入属部署侧，需按官方 wiki 完成。
- `azerothcore/ac` 镜像为官方公开镜像，个人使用无授权/商标限制。
