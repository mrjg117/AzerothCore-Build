# AzerothCore-OK（全照搬官方）

基于官方 [`azerothcore/azerothcore-wotlk`](https://github.com/azerothcore/azerothcore-wotlk) 原生编排构建的 WotLK（3.3.5a）私服镜像源与**注册/补丁分发站**。

**核心原则：官方的东西一个字不改，只换两个端点，其余全部走"追加"。**

- 编译位置：官方 CI → **GitHub Actions**
- 镜像仓库：Docker Hub → **腾讯云 TCR + DockerHub 双推**
- 分发：玩家补丁 + 注册页 → **Cloudflare Worker（Static Assets）**
- 定制扩展点：官方钦定的 `docker-compose.override.yml`（本仓库不再分发，基于官方 compose 自行维护）+ 配置注入卷（`cp -n` 不覆盖）

## 架构

| 镜像 | 由谁构建 | 作用 |
|---|---|---|
| `ac-wotlk-worldserver` / `authserver` / `db-import` / `tools` | `build-core.yml` | 官方 4 个 server target（克隆官方 + 43 模组，`MODULES=static` 静态编入） |
| `ac-maps` | `build-maps.yml` | 社区地图源 `wowgaming/client-data@v20.0` 烤入，替换官方 `client-data`（部署机零提取） |
| `ac-extra-config` | `build-config.yml` | 自定义 `.conf` 注入镜像（按模组分子目录） |
| `azerothcore-ok`（Worker） | `build.sh` + `wrangler deploy` | Cloudflare Worker（Static Assets）：注册页 `index.html` + 补丁 `patches/` + `/api/register` 注册函数 |

CI 工作流（均在 Actions 跑）：
- `build-core.yml`：克隆官方 + 43 模组，构建 4 个 server target，推双仓库。
- `build-maps.yml`：下载社区地图源烤入 `ac-maps`，推双仓库。
- `build-config.yml`：构建 `ac-extra-config`，推双仓库。

## 目录结构

```
AzerothCore-OK/
├── .github/workflows/        CI：build-core / build-maps / build-config
├── client-patches/            玩家客户端补丁源（按模组分子目录）；构建时打成
│                              patches-client.zip 再分卷。MPQ 仅 zhCN 单份（仓库内保留），
│                              AddOn 由构建期按 addons.txt 列表从上游直拉，不落库
│   ├── addons.txt             AddOn 上游清单（<模组名><空白><git 地址>），build.sh 按列表现拉
│   └── make-archive.py        把 client-patches/ 按 WoW 目录层级（Data/zhCN + Interface/AddOns）
│                              打成 patches-client.zip（被 build.sh 调用）
├── config/
│   ├── modules.txt            43 个模组 Git 地址清单（编译期克隆进官方 modules/，去 -master 后缀）
│   ├── extra-config/          自定义配置注入镜像源（ac-extra-config）
│   │   ├── Dockerfile / docker-entrypoint.sh
│   │   └── confs/             各模组自定义 .conf（core / mod-playerbots / mod-item-affixes）
│   └── maps/                  ac-maps 镜像源（社区地图烤入）
├── deploy/                    Cloudflare Worker 源（本仓库的部署单元）
│   ├── index.html             Worker 主页：注册 + 补丁下载 + 一键部署链接（即注册页）
│   ├── worker.js              Worker 脚本：处理 /api/register（SOAP 调 worldserver 建号）+ 回退静态资源
│   ├── wrangler.toml          Worker 配置（Static Assets 目录 + WORLD_HOST/PORT/SOAP 变量）
│   └── （以下为构建产物，不进库）patches/*（patches-client.zip 或分卷 + patches-manifest.txt + 启动器.bat）
├── server/                    游戏服务端一键部署（给服务器运营方）
│   ├── deploy.sh              一行部署脚本：装 Docker、拉官方 compose + 本仓 override/.env/modules.txt、起服
│   ├── docker-compose.override.yml  官方钦定扩展点：仅把镜像换成带 43 模组的 TCR 构建产物
│   └── .env.example           服务端部署变量样例（DOCKER_DB_ROOT_PASSWORD / REALM_ADDRESS / TCR_NS / SOAP_*）
```

> 本仓库**不再提供"服务器端一键部署整包 zip"**（已放弃 `ac-deploy.zip` 与服务端控制台）——但提供 `server/deploy.sh` 一行部署脚本，运营方直接 `curl ... | bash` 即可起服。注册页与补丁统一由 Cloudflare Worker 分发。

## 注册方案

账号注册由 **Cloudflare Worker** 承接：页面表单（`deploy/index.html` 的注册区块）提交到 Worker 的 **`/api/register`**，Worker 做基础校验 + 可选图形验证 / 限频 / 白名单后，调 `worldserver` 的 SOAP `account create` 建号（SRP6 由核心自算，密码不落库明文）。

### 托管形态：Worker（采用）
- **Worker + Static Assets（本项目采用）**：一个 Worker 既托管静态页（`index.html` 等）又处理 `/api/register`，`wrangler deploy` 一条命令部署，CORS 天然同源、配置最少。CF 正在把 Pages 能力收敛到 Workers，静态资源免费额度与函数调用消耗两者基本一致，直接上 Worker 最省事、也最面向未来。
- 之前考虑过的 **Pages + Function** 形态已不再采用（部署统一为 Worker 单一形态）。

### Worker 所需环境变量 / 机密（即你需要填的信息）
Worker 要调通 worldserver 的 SOAP，必须知道**后端（部署机）的可达地址**与**凭据**：

| 变量 | 类型 | 说明 | 来源 |
|---|---|---|---|
| `WORLD_HOST` | vars（明文） | 部署机（worldserver）的公网**域名或 IP**（Worker 据此连 SOAP） | **你填：部署机的域名或 IP** |
| `WORLD_PORT` | vars（明文） | SOAP 端口，固定 `7878` | 默认 |
| `SOAP_LOGIN` | vars（明文） | SOAP 账号，固定 `webreg` | 与 worldserver 一致 |
| `SOAP_PASSWORD` | **secret** | webreg 的密码 | `wrangler secret put SOAP_PASSWORD`，与 worldserver 一致 |
| `TURNSTILE_SECRET`（可选） | secret | Cloudflare Turnstile 图形验证密钥；填了才开启验证 | 按需 |
| `ALLOWED_ORIGIN`（可选） | vars | 允许的页面来源，做 CORS 校验 | 你的 Worker 域名 |

> 也就是说你**只需要提供部署机的域名或 IP**（Worker 据此连 `:7878` 的 SOAP），密码类用 `wrangler secret put` 注入即可。

worldserver 端需开启 SOAP（`SOAP.Enabled=1`、Port 7878、`Login=webreg`、`Password=<与 secret 一致>`、`IP=0.0.0.0`，部署时建议改绑 `127.0.0.1` 只让 Worker 经公网地址访问）。首次部署需手动建一个 `gmlevel=1` 的 `webreg` 账号（密码与 `SOAP_PASSWORD` 一致）供 Worker 调用。

## 部署指南

### 一、Cloudflare Worker（注册页 + 补丁分发，本仓库主交付）
```bash
cd deploy
# 1. 构建补丁（AddOns 现拉 + MPQ 打包 + 分卷 + 清单）
bash build.sh        # 也可由 CI 在 push 时跑；产物在 deploy/patches/

# 2. 填 Worker 明文变量（wrangler.toml 的 [vars]：WORLD_HOST / WORLD_PORT / SOAP_LOGIN）
#    ⚠️ 密码是机密，用 secret 注入：
wrangler secret put SOAP_PASSWORD
#    （可选）开启图形验证：
wrangler secret put TURNSTILE_SECRET

# 3. 一行部署
npx wrangler deploy
#    玩家访问分配的 *.workers.dev 或你在 Cloudflare 控制台绑的自定义域名
```

### 二、游戏服务端（官方原生编排，server/deploy.sh 一行部署）
服务端镜像仍由本仓库 CI 构建并推到 TCR/DockerHub；起服用官方 `docker-compose.yml` + 本仓 `server/docker-compose.override.yml`（仅换镜像地址）+ `server/.env.example`。运营方一行命令即可：
```bash
# 在你的服务器（有公网 IP、装好 Docker）终端运行：
curl -fsSL https://raw.githubusercontent.com/mrjg117/AzerothCore-OK/main/server/deploy.sh | bash
# 脚本会：装 Docker → 拉官方 compose + 本仓 override/.env/modules.txt → docker compose pull && up -d
# 可选用环境变量预填：REALM_ADDRESS / TCR_NS / SOAP_PASSWORD（否则手动编辑 .env）
```
也可手动分步（等价于脚本做的事）：
```bash
# 取官方 docker-compose.yml，加本仓 override 换镜像地址（官方钦定扩展点）
docker compose -f docker-compose.yml -f server/docker-compose.override.yml pull   # 必须先 pull，否则触发本地编译
docker compose -f docker-compose.yml -f server/docker-compose.override.yml up -d  # 零修改启动，自动建库/导库/起服
docker compose exec ac-worldserver acore account create webreg <SOAP_PASSWORD> 1
```
> 数据库密码在官方 compose 读取的 `.env` 的 `DOCKER_DB_ROOT_PASSWORD`，不在 `env.ac`。

访问：
- 游戏：客户端连 `<服务器IP>:3724`（auth）/ `8085`（world；realm 地址填 `REALM_ADDRESS`）
- 注册：由 Cloudflare Worker 承接（本仓库 `deploy/worker.js` 提供 `/api/register`）

## 玩家补丁

补丁包含 **AddOns（界面/功能插件）+ zhCN MPQ（中文客户端补丁）**。

- **传输包约 3 MB**（MPQ 是未压缩/高冗余数据，zip 能压到这么小；远低于 Cloudflare 单文件 25 MiB 上限）。
- 玩家机器解压后还原为 **约 48 MB 的 MPQ** 给客户端读取。
- 按需求**强制分卷**（方便"点一下下一堆"批量下载），每卷 ≤ 24 MiB。玩家在页面**手动逐卷点下载**，按 `patches-manifest.txt` 顺序合并解压到客户端根目录；也可点「下载全部」由 JS 把分卷合并成单个 zip。
- 压缩包内含 **`启动器.bat`**：运营方在打包时通过 `REALM_ADDRESS`（或 `WORLD_HOST`）写入服务器地址，玩家双击即自动清客户端缓存、写好 `realmlist.wtf`、启动 `Wow.exe`，无需手动改地址。默认占位 `play.example.com`，`build.sh` 前设 `REALM_ADDRESS=你的域名或IP` 即可注入。

## 维护

- **镜像双推 TCR + DockerHub**：override 默认走 TCR；想换 DockerHub 改 override 的 image 前缀即可（override 已不再随本仓库分发，请基于官方 compose 自行维护）。
- **加/换模组**：改 `config/modules.txt` → 重新跑 `build-core.yml` → 镜像 tag 变了则更新服务端 `.env` 的 `IMAGE_TAG`。
- **改地图数据**：改 `config/maps/**` 或 `build-maps.yml` 的 `CLIENT_DATA_REF` → 重新跑 `build-maps.yml`。
- **改自定义配置**：改 `config/extra-config/confs/*` → 重新跑 `build-config.yml` → 服务端重新注入。
- **改客户端补丁**：改 `client-patches/*` 或 `client-patches/addons.txt` → 重新跑 `build.sh` / `wrangler deploy`。
- **同步官方文件**：AC 更新后重新跑对应 CI 工作流。

## 快速上手

见 `deploy/index.html`（主页即注册页 + 补丁下载 + 简介/说明），或按上方「部署指南」操作。完整构建/回归计划见工作区根的 `_重建计划_全照搬官方.md`。
