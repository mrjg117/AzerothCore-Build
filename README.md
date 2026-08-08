# AzerothCore 构建（一切走官方）

把官方 AzerothCore 编译 + GitHub Actions 云端编译 + 腾讯云 TCR 存储 串起来。
核心原则：**编译逻辑全部官方，只有"在哪编"和"存哪"是你自定义的。**

## 架构

| 层 | 位置 | 是否官方 |
|---|---|---|
| 源码 + 构建配置（本仓库） | GitHub 仓库 | 你自己的（必须有，Actions 才能跑） |
| 编译执行 | GitHub Actions（runner） | 触发地，不影响产物 |
| 编译环境 | 官方 `azerothcore/ac:master` 镜像 | ✅ 官方 |
| CMake 旗标 | `clang` / `TOOLS_BUILD=all` / `SCRIPTS=static` / `MODULES=static` | ✅ 官方（与 wiki 逐字一致） |
| 模组布局 | `modules/` 下 43 个，由 `MODULES=static` 静态编入 | ✅ 官方 |
| 成品镜像 | 推送到腾讯云 TCR | 存储地，不影响产物 |
| playerbots.conf 等配置 | 运行时卷挂载，不烤进镜像、不锁 commit | 部署侧，按你调参 |

## 文件说明

- `Dockerfile` —— 多阶段：builder 用官方 `azerothcore/ac` 编译，runtime 用 debian 精简运行。
- `.github/workflows/build.yml` —— 推送时自动编译并推到 TCR。
- `modules.txt` —— 43 个模组 URL（编译期克隆进 `modules/`）。
- `docker-compose.yml` —— 本地从 TCR 拉镜像运行（authserver + worldserver + db）。
- `playerbots.conf.example` —— E5 弱 U 护栏示例，运行时挂载。

## 使用步骤

### 1. 推到你的 GitHub 仓库
把本目录内容放到仓库根目录（替换掉原来非官方的那套 ubuntu:22.04 + 手装依赖）。

### 2. 配置 GitHub Secrets
仓库 `Settings → Secrets → Actions` 加：
- `TCR_REGISTRY`：如 `ccr.ccs.tencentyun.com`
- `TCR_USERNAME`：腾讯云 TCR 登录名（以 TCR 控制台为准）
- `TCR_PASSWORD`：TCR 密码 / 临时令牌
- `TCR_NAMESPACE`：镜像命名空间
- `TCR_REPOSITORY`：镜像仓库名（如 `azerothcore`）

### 3. 触发构建
`git push` 到 main/master，或在 Actions 页点 `Run workflow`。
构建完镜像出现在你的 TCR 仓库（`latest` + `git sha` 两个 tag）。

### 4. 本地部署
```bash
# 设好镜像地址（或在 docker-compose.yml 里直接改 image 行）
export TCR_IMAGE=ccr.ccs.tencentyun.com/<ns>/azerothcore:latest

# 准备配置与数据
mkdir -p config data db
# 把 worldserver.conf / authserver.conf / playerbots.conf 放进 config/
# 提取客户端 maps/vmaps/mmaps/dbc 到 data/

docker compose up -d
```

## 取舍说明（项目已定）

- **不锁 commit**：编译期 `--depth 1` 拉最新源码与模组。优点=随时更新；风险=上游改动可能当日构建失败。如需可复现，把 `azerothcore/ac:master` 与 `modules.txt` 各 URL 换成具体 tag/sha。
- **playerbots.conf 运行时挂载**：rebuild 只更新代码/模组，不会动你的调参；改配置无需重新构建镜像。
- **客户端数据不进镜像**：maps/vmaps/mmaps/dbc 体积大且来自你的游戏客户端，按官方 `ac-client-data` 流程提取后挂载。

## 重要边界

- 本仓库只负责"编出官方核心 + 存到 TCR"。数据库初始化、客户端数据提取、conf 中 DB 连接等属于**部署侧**，需按 AzerothCore 官方 wiki 完成。
- `azerothcore/ac` 镜像为官方公开镜像，个人使用无授权/商标限制。
