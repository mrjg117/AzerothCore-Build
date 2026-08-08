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

- `Dockerfile` / `.github/workflows/build.yml` —— 核心镜像构建
- `Dockerfile.maps` / `build-maps.yml` —— 地图镜像构建（需 `CLIENT_DATA_URL`）
- `Dockerfile.config` / `build-config.yml` —— 配置镜像构建
- `Dockerfile.patches` / `build-patches.yml` —— 补丁镜像构建
- `wotlk-web/` / `build-web.yml` —— 注册页构建
- `config-src/` —— 配置源：`worldserver.conf` / `authserver.conf` / `playerbots.conf`
- `modules.txt` —— 43 个模组 URL
- `docker-compose.yml` —— 拉取四镜像运行（authserver + worldserver + db + web）
- `deploy.sh` —— 一键拉镜像 → 导出 data/config/patches → `docker compose up`

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
- 配置：`config-src/` 变动自动跑，或手动跑 `Build & Push Config`
- 补丁：手动跑 `Build & Push Patches`
- 注册页：`wotlk-web/` 变动自动跑，或手动跑 `Build & Push Web`

### 本地部署
```bash
export REG=ccr.ccs.tencentyun.com NS=azerothcore
./deploy.sh up                 # 拉镜像 + 导出 data/config/patches + 启动
./deploy.sh init-db            # 首次初始化数据库
./deploy.sh set-realm <IP/域名> # 设置玩家连接地址
./deploy.sh status / down
```
运行时改配置：编辑 `./config/*.conf` 重启 worldserver，无需重建镜像。

## 备注
- 内部服务用 compose 服务名 `db` 通信；玩家连接地址由 `set-realm` 注入 `acore_auth.realmlist.address`，动态 IP 填 DDNS 域名即可。
- SOAP 端口 7878 仅 compose 内部可达，不映射公网。
- 首部署需在 worldserver 控制台建 SOAP 账号：`account create webreg <密码>` + `account set gmlevel webreg 1`，并将 `SOAP.Password` 与该密码一致。
- 客户端补丁：guild-levels 与 bot-inventory-master 仅含 AddOn；item-affixes 的 MPQ 需服务器管理员从客户端 `SpellItemEnchantment.dbc` 本地生成（见 `patches-readme.md`），生成后放入 `wotlk-patches` 镜像或另行托管供下载。
