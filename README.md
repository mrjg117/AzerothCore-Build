# AzerothCore 构建（一切走官方 · 四镜像分体）

把**官方 AzerothCore 编译** + **GitHub Actions 云端编译** + **腾讯云 TCR 存储** + **分体地图/配置/补丁镜像** + **一键部署** + **注册页** 串起来。

核心原则：
- **编译逻辑全部官方**：只有"在哪编""存哪""怎么搬运"是你自定义的。
- **四镜像分体构建**：核心 / 地图 / 配置 / 补丁各自独立成镜像、独立推 TCR、独立更新，互不耦合。
- **注册页独立容器**：图形验证码 + IP 限频防刷，经 worldserver SOAP 写账号，并提供客户端补丁下载。

## 架构

| 镜像 | 仓库名 | 构建源 | 何时重建 |
|---|---|---|---|
| 核心 | `wotlk-server` | `Dockerfile`（官方 `azerothcore/ac` 编译 43 模组） | push 代码/模组时 |
| 地图 | `wotlk-maps` | `Dockerfile.maps`（客户端数据→官方提取器→数据） | 手动 / `client-data` 变动 |
| 配置 | `wotlk-config` | `Dockerfile.config`（`config-src/` 配置） | 手动 / `config-src` 变动 |
| 补丁 | `wotlk-patches` | `Dockerfile.patches`（3 模组仓库的客户端 AddOn） | 手动 / 补丁变动 |
| 注册页 | `wotlk-web` | `wotlk-web/`（Node/Express） | 手动 / `wotlk-web/**` 变动 |

| 层 | 位置 | 是否官方 |
|---|---|---|
| 源码 + 构建配置（本仓库） | GitHub 仓库 | 你自己的 |
| 编译执行 | GitHub Actions（runner） | 触发地，不影响产物 |
| 编译环境 | 官方 `azerothcore/ac:master` | ✅ 官方 |
| CMake 旗标 | `clang` / `TOOLS_BUILD=all` / `SCRIPTS=static` / `MODULES=static` | ✅ 官方（与 wiki 逐字一致） |
| 模组布局 | `modules/` 下 43 个，由 `MODULES=static` 静态编入 | ✅ 官方 |
| 地图数据 | 客户端数据经官方提取器生成，单独镜像 | 提取流程官方，输入来自你的客户端 |
| 成品镜像 | 推送到腾讯云 TCR | 存储地，不影响产物 |
| 配置 / 补丁 | `config-src/` / 3 模组仓库打包成镜像，运行时挂载 | 你维护的默认值 / 上游仓库 |

## 文件说明

- `Dockerfile` / `.github/workflows/build.yml` —— 核心镜像（官方编译 + 推 `wotlk-server`）。
- `Dockerfile.maps` / `build-maps.yml` —— 地图镜像（推 `wotlk-maps`）。
- `Dockerfile.config` / `build-config.yml` —— 配置镜像（推 `wotlk-config`）。
- `Dockerfile.patches` / `build-patches.yml` —— 补丁镜像（推 `wotlk-patches`）。
- `wotlk-web/` / `build-web.yml` —— 注册页（推 `wotlk-web`）。
- `config-src/` —— 配置源（纳入版本库）：`worldserver.conf` / `authserver.conf` / `playerbots.conf`（E5 护栏）。
- `modules.txt` —— 43 个模组 URL（编译期克隆进 `modules/`）。
- `docker-compose.yml` —— 本地从 TCR 拉四镜像运行（authserver + worldserver + db + web）。
- `deploy.sh` —— 一键：拉四镜像 → 导出 maps/config/patches 到本地 `./data`、`/config`、`/patches` → `docker compose up`。

## 使用步骤

### 1. 配置 GitHub Secrets
仓库 `Settings → Secrets → Actions` 加：
- `TCR_REGISTRY`：如 `ccr.ccs.tencentyun.com`
- `TCR_USERNAME`：腾讯云登录名（以 TCR 控制台为准，个人版为 APPID）
- `TCR_PASSWORD`：TCR 密码 / 临时令牌
- `TCR_NAMESPACE`：镜像命名空间
- `CLIENT_DATA_URL`：（仅地图镜像需要）你的 WoW 客户端 `Data` 目录打包地址（tar.gz，内含 `Data/`）

### 2. 触发构建（四者独立）
- **核心**：`git push` 到 main/master，或 Actions 页 `Build & Push (Tencent TCR)` → 推 `wotlk-server`。
- **地图**：Actions 页 `Build & Push Maps` 手动跑（需 `CLIENT_DATA_URL` 已配）→ 推 `wotlk-maps`。
- **配置**：`config-src/` 有改动自动跑，或手动 `Build & Push Config` → 推 `wotlk-config`。
- **补丁**：Actions 页 `Build & Push Patches` 手动跑 → 推 `wotlk-patches`。
- **注册页**：`wotlk-web/` 有改动自动跑，或手动 `Build & Push Web` → 推 `wotlk-web`。

### 3. 本地一键部署
```bash
# 镜像地址（也可写进本目录 .env：REG=... NS=... SOAP_PASSWORD=... REALM_ADDRESS=...）
export REG=ccr.ccs.tencentyun.com NS=azerothcore

# 一键：拉四镜像 + 导出 data/config/patches + 启动
./deploy.sh up

# 首次初始化数据库（需联网拉 TDB 世界库）
./deploy.sh init-db

# 设置玩家连接地址（公网IP / 域名 / DDNS，仅对外下发用）
./deploy.sh set-realm <你的公网IP或域名>

# 查看状态 / 停止
./deploy.sh status
./deploy.sh down
```
部署后：`./data`（地图，只读）、`./config`（配置，只读）、`./patches`（补丁，只读）由镜像内容填充。
运行时改配置：直接编辑 `./config/*.conf`，重启 worldserver 生效，**无需重建任何镜像**。

## IP / 网络处理（关键）

三层地址逻辑分清，换机器/换网段都不用改代码：

| 项 | 处理方式 | 谁负责 |
|---|---|---|
| 内部服务间通信 | `worldserver.conf` / `authserver.conf` 的 DB Host 写 compose 服务名 **`db`**（Docker 网络 DNS 解析，不写死 IP） | 已固化在 `config-src/` |
| 端口暴露 | `docker-compose.yml` 映射 `3724`(auth) / `8085`(world) / `8080`(web) / `3306`(db) | `docker-compose.yml` |
| 玩家连接地址 | `acore_auth.realmlist.address`，由 `deploy.sh set-realm <地址>` 注入（读 `.env` 的 `REALM_ADDRESS`） | `deploy.sh` |

- **动态 IP / 公网部署**：填 DDNS 域名到 `REALM_ADDRESS`（如 `wow.example.com`），不用改任何代码。
- **SOAP 端口 7878 不映射到宿主机**，仅 compose 内部网络可达（注册页容器 `web` 同网络访问 `worldserver:7878`），外部不可直连。

## 注册页（wotlk-web）

- 访问 `http://<本机IP>:8080`，图形验证码（svg-captcha，无第三方依赖）+ 同 IP 60s 注册冷却，防机器人刷号。
- 注册提交后，经 **worldserver SOAP 接口** `account create` 写账号——**SRP6 由核心自己算**，保证账号一定可登录；注册页不碰密码学、不直接写 SQL。
- 注册成功页直接提供 3 个客户端补丁（AddOn）下载：ItemAffixes / GuildLevels / BotInventoryMasterUI，玩家解压到 `Interface/AddOns/` 即可。

**首次部署需做一次**（属部署侧，非镜像内）：
1. 创建 SOAP 管理账号（gmlevel=1，仅用于 `account create`）：
   ```
   account create webreg <密码>
   account set gmlevel webreg 1
   ```
2. 将 `./config/worldserver.conf` 的 `SOAP.Password` 与该密码设为一致（默认占位 `CHANGE_ME_webreg_soap`，务必改）。
3. 在 `.env` 设 `SOAP_PASSWORD=<同一密码>`，供 `web` 容器连 SOAP。

> 补丁事实更正：经 GitHub API 核实，上述 3 个模组仓库**均只提供客户端 AddOn，未提供 DBC / MPQ 现成文件**。之前飞书表「客户端补丁」栏勾选的 DBC/MPQ 与实际仓库不符，以仓库为准。`wotlk-patches` 镜像已预留 `dbc/` `mpq/` 空目录，你若有对应文件放入后重建即可。

## 取舍说明（项目已定）

- **不锁 commit**：编译期 `--depth 1` 拉最新源码与模组。优点=随时更新；风险=上游改动可能当日构建失败。
- **四镜像分体**：地图/配置/补丁不随核心重建，更新解耦、镜像更小、部署更快。
- **配置运行时挂载**：rebuild 只更新代码/模组，不会动调参；改配置无需重建镜像。
- **地图不进核心镜像**：官方核心不带地图，必须客户端提取；单独镜像便于复用、按需更新。
- **注册写库走 SOAP**：账号由官方核心算 SRP6，安全性与可登录性最优。

## 重要边界 / 已知不确定点

- **地图提取命令/产物目录随客户端版本可能微调**：`Dockerfile.maps` 用的是 AC 标准提取流程。若你客户端版本产物目录名不同，按实际改 `COPY` 列表。这一步需要你的客户端 `Data`，**无法在此环境验证**，首次跑请核对产物。
- **DB 初始化**：`deploy.sh init-db` 会启动 worldserver 建库/应用 SQL，但 world 库内容（TDB）通常需按 AzerothCore 官方 wiki 另行导入；首次部署请预留这一步。
- **SOAP 管理账号需首次手动建**（见上「注册页」节），属部署侧动作。
- **本仓库只负责"编出官方核心 + 地图/配置/补丁镜像 + 注册页 + 存到 TCR + 一键拉起"**。客户端数据提取输入、DB 初始化的 TDB 导入属部署侧，需按官方 wiki 完成。
- `azerothcore/ac` 镜像为官方公开镜像，个人使用无授权/商标限制。
