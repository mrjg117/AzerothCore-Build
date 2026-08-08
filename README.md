# AzerothCore 构建仓库

用官方 `azerothcore/ac` 镜像编译核心，GitHub Actions 编译，成品推腾讯云 TCR。其余各组件独立成镜像、独立构建。

## 功能组件

| 镜像 | 仓库名 | 功能 |
|---|---|---|
| 核心 | `wotlk-server` | 官方编译 AzerothCore 核心（含 43 个模组，`MODULES=static` 静态编入） |
| 地图 | `wotlk-maps` | 客户端数据经官方提取器生成 maps/vmaps/mmaps/dbc，单独打包 |
| 配置 | `wotlk-config` | 打包默认配置（worldserver/authserver/playerbots）供运行时挂载 |
| 补丁 | `wotlk-patches` | 打包 3 个客户端 AddOn（ItemAffixes / GuildLevels / BotInventoryMasterUI）供玩家下载 |
| 注册页 | `wotlk-web` | 图形验证码 + IP 限频防刷，经 worldserver SOAP 写账号，并提供补丁下载 |

## 文件说明

仓库按职责分四个目录，根目录只保留编排文件：

- `build/` —— 所有构建定义
  - `Dockerfile`（核心）/ `Dockerfile.maps`（地图）/ `Dockerfile.config`（配置）/ `Dockerfile.patches`（补丁）
  - `modules.txt` —— 43 个模组 URL
  - `tools/make-client-archive.py` —— 由 `client-patches/` 生成本地整包 zip
- `web/wotlk-web/` —— 注册页（Node/Express，图形验证码 + 限频 + SOAP 写库 + 补丁下载），对应 `build-web.yml`
- `client-patches/` —— 客户端补丁静态资源（**按模组分子目录**：`item-affixes` / `guild-levels` / `bot-inventory-master`），对应 `build/Dockerfile.patches`
- `config/` —— 配置源，**按模组分层**（详见 `config/README.md`），对应 `build/Dockerfile.config`
  - `core/` —— 核心配置：`worldserver.conf` / `authserver.conf`
  - `modules/<模组>/` —— 模组配置，一模组一目录（当前：`playerbots/`）
  - 构建时由组装阶段扁平合并进 `/azerothcore/etc/`，同名 conf 冲突会直接构建失败
- `.github/workflows/` —— 五个独立构建 workflow（`build.yml` / `build-maps.yml` / `build-config.yml` / `build-patches.yml` / `build-web.yml`）
- `docker-compose.yml` —— 拉取镜像运行（authserver + worldserver + db + web）
- `deploy.sh` —— 一键拉镜像 → 导出到 `./runtime/{data,config,patches}` → `docker compose up`

> **命名约定**
> 1. 客户端补丁目录叫 `client-patches/`（不是 `patches/`），为未来可能的
>    服务器补丁（`server-patches/`）预留清晰边界。
> 2. 按模组分的子目录统一用「仓库名去掉 `mod-` 前缀」作为键，
>    `client-patches/<模组>` 与 `config/modules/<模组>` 同名，便于交叉定位
>    某个模组到底改了哪些东西。
> 3. 运行时导出统一放 `./runtime/`，避免与源码目录（`config/`、
>    `client-patches/`）撞名。

## 使用

### 配置 GitHub Secrets
`Settings → Secrets → Actions` 添加：
- `TCR_REGISTRY`（如 `ccr.ccs.tencentyun.com`）
- `TCR_USERNAME`（个人版为腾讯云 APPID）
- `TCR_PASSWORD`
- `TCR_NAMESPACE`
- `CLIENT_DATA_URL`（地图镜像的客户端 Data 打包地址，tar.gz 内包含 `Data/`）

### 构建（各自独立触发）
- 核心：`git push` 到 main，或手动跑 `Build & Push (Tencent TCR)`
- 地图：手动跑 `Build & Push Maps`
- 配置：`config/` 变动自动跑，或手动跑 `Build & Push Config`
- 补丁：手动跑 `Build & Push Patches`
- 注册页：`web/wotlk-web/` 变动自动跑，或手动跑 `Build & Push Web`

### 本地部署
```bash
export REG=ccr.ccs.tencentyun.com NS=azerothcore
./deploy.sh up                 # 拉镜像 + 导出到 ./runtime/{data,config,patches} + 启动
./deploy.sh init-db            # 首次初始化数据库
./deploy.sh set-realm <IP/域名> # 设置玩家连接地址
./deploy.sh status / down
```
运行时改配置：编辑 `./runtime/config/*.conf` 重启 worldserver，无需重建镜像。
