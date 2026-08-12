# AzerothCore-OK（全照搬官方）

基于官方 [`azerothcore/azerothcore-wotlk`](https://github.com/azerothcore/azerothcore-wotlk) 原生编排构建的 WotLK（3.3.5a）私服镜像源与**注册/补丁分发站**。

**核心原则：官方的东西一个字不改，只换两个端点，其余全部走"追加"。**

- 编译位置：官方 CI → **GitHub Actions**
- 镜像仓库：Docker Hub → **腾讯云 CCR + DockerHub 双推**
- 分发：玩家补丁 + 注册页 → **Cloudflare Worker（Static Assets）**
- 定制扩展点：官方钦定的 `docker-compose.override.yml`（本仓库在 `server/` 下发，acok.sh 拉取）+ 配置注入卷（`cp -n` 不覆盖）

## 架构

| 镜像 | 由谁构建 | 作用 |
|---|---|---|
| `ac-wotlk-worldserver` / `authserver` / `db-import` / `tools` | `build-core.yml` | 官方 4 个 server target（克隆官方 + 43 模组，`MODULES=static` 静态编入） |
| `ac-maps` | `build-maps.yml` | 社区地图源 `wowgaming/client-data@v20.0` 烤入，替换官方 `client-data`（部署机零提取） |
| `ac-extra-config` | `build-config.yml` | 自定义 `.conf` 注入镜像（按模组分子目录） |
| `azerothcore-ok`（Worker） | `build.sh` + `wrangler deploy` | Cloudflare Worker（Static Assets）：注册页 `index.html` + 补丁 `patches/` + `/api/register` 注册函数 |

CI 工作流（均在 Actions 跑；默认手动 `workflow_dispatch`，可按需开启定时/路径触发）：
- `build-core.yml`：手动打包（可选 日/周/月 定时）。克隆官方 + 43 模组，构建 4 个 server target，推 CCR(+DockerHub)。已挂 ccache 持久化。
- `build-maps.yml`：手动打包（可选 日/周/月 定时）。下载社区地图源烤入 `ac-maps`。
- `build-config.yml`：手动打包 + 监控 `config/**` 变更自动打包。构建 `ac-extra-config`。

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
│   ├── index.html             Worker 主页（即注册页）：账号注册 + 补丁下载 + 一键部署链接
│   ├── worker.js              Worker 脚本：处理 /api/register（SOAP 调 worldserver 建号）+ 回退静态资源（频率限制交给 Cloudflare WAF）
│   ├── wrangler.toml          Worker 配置（Static Assets 目录 + WORLD_HOST/启用/SOAP 变量）
│   ├── acok.sh              游戏服务端一行部署脚本（由 CF Worker 托管，页面"一键部署脚本"指向它）
│   └── （以下为构建产物，不进库）patches/*（patches-client.zip 或分卷 + patches-manifest.txt + 启动器.bat）
├── server/                    游戏服务端部署文件（被 acok.sh 拉取）
│   ├── docker-compose.override.yml  官方钦定扩展点：仅把镜像换成带 43 模组的 TCR 构建产物
│   └── .env.example           服务端部署变量样例（DOCKER_DB_ROOT_PASSWORD / REALM_ADDRESS / TCR_NS / SOAP_*）
```

> 本仓库不提供"服务器端一键部署整包 zip"。提供 `deploy/acok.sh` 一行部署脚本（由 CF Worker 托管），运营方 `curl ... | bash` 即可起服。注册页与补丁统一由 Cloudflare Worker 分发。

## 注册方案

注册由 Cloudflare Worker 调 worldserver SOAP 建号（密码不落库明文）。

### 托管形态：Worker（采用）
- **Worker + Static Assets（本项目采用）**：一个 Worker 既托管静态页（`index.html` 等）又处理 `/api/register`，`wrangler deploy` 一条命令部署，CORS 天然同源、配置最少。

### Worker 所需环境变量 / 机密（即你需要填的信息）
Worker 要调通 worldserver 的 SOAP，必须知道**后端（部署机）的可达地址**与**凭据**：

| 变量 | 类型 | 说明 | 来源 |
|---|---|---|---|
| `WORLD_HOST` | vars（明文） | 部署机（worldserver）的公网**域名或 IP**（Worker 据此连 SOAP） | **你填：部署机的域名或 IP** |
| `WORLD_PORT` | vars（明文） | SOAP 端口，固定 `7878` | 默认 |
| `SOAP_LOGIN` | vars（明文） | SOAP 账号，固定 `webreg` | 与 worldserver 一致 |
| `SOAP_PASSWORD` | **secret** | webreg 的密码 | `wrangler secret put SOAP_PASSWORD`，与 worldserver 一致 |

> 也就是说你**只需要提供部署机的域名或 IP**（Worker 据此连 `:7878` 的 SOAP），密码类用 `wrangler secret put` 注入即可。

worldserver 端需开启 SOAP（`SOAP.Enabled=1`、Port 7878、`Login=webreg`、`Password=<与 secret 一致>`、`IP=0.0.0.0`，部署时建议改绑 `127.0.0.1` 只让 Worker 经公网地址访问）。`webreg` 账号由 `acok.sh` 在首次起服时**自动创建**（gmlevel 3，密码与 `SOAP_PASSWORD` 一致），无需手动敲命令。

### 频率限制（Cloudflare WAF，本项目唯一防刷层）
注册接口 `/api/register` 的限流**只在 Cloudflare WAF 边缘做**，不消耗 Worker 函数额度，且功能覆盖原 Worker 内存 map（按 IP 限频 + 封禁时长）。在 Cloudflare 控制台「Security → WAF → Rate limiting rules」建一条规则：

| 项 | 填法 |
|---|---|
| 匹配条件 | `URI Path` 包含 `/api/register` |
| 阈值 | 例如 10 次 / 60 秒（按你口味调） |
| 动作 | **Block**，持续 1 小时（或 24 小时） |

> 该规则在请求进 Worker 之前于边缘执行，超限直接返回 429，**不调用 Worker、不扣函数额度**。Worker 代码本身只做参数校验 + SOAP 建号。

## 部署指南

### 一、Cloudflare Worker（注册页 + 补丁分发，本仓库主交付）
```bash
cd deploy
# 1. 构建补丁（AddOns 现拉 + MPQ 打包 + 分卷 + 清单）
bash build.sh        # 也可由 CI 在 push 时跑；产物在 deploy/patches/

# 2. 填 Worker 明文变量（wrangler.toml 的 [vars]：WORLD_HOST / WORLD_PORT / SOAP_LOGIN）
#    ⚠️ 密码是机密，用 secret 注入：
wrangler secret put SOAP_PASSWORD

# 3. 一行部署
npx wrangler deploy
#    玩家访问分配的 *.workers.dev 或你在 Cloudflare 控制台绑的自定义域名
```

### 二、游戏服务端（官方原生编排，deploy/acok.sh 一行部署）
服务端镜像仍由本仓库 CI 构建并推到 CCR/DockerHub；起服用官方 `docker-compose.yml` + 本仓 `server/docker-compose.override.yml`（仅换镜像地址）+ `server/.env.example`。运营方一行命令即可：
```bash
# 在你的服务器（有公网 IP、装好 Docker）终端运行：
curl -fsSL https://<你的Worker域名>/acok.sh | bash
# 脚本会：装 Docker → 拉官方 compose + 本仓 override/.env → pull && up -d → 自动建 webreg SOAP 账号 + 写入 realm 对外地址
# 可选用环境变量预填：REALM_ADDRESS / TCR_NS / SOAP_PASSWORD（否则手动编辑 .env）
```
也可手动分步（等价于脚本做的事）：
```bash
# 取官方 docker-compose.yml，加本仓 override 换镜像地址（官方钦定扩展点）
docker compose -f docker-compose.yml -f server/docker-compose.override.yml pull   # 必须先 pull，否则触发本地编译
docker compose -f docker-compose.yml -f server/docker-compose.override.yml up -d  # 零修改启动，自动建库/导库/起服
# 建 webreg 账号 + 写 realm 地址（脚本已自动做；手动时执行）：
docker compose exec ac-worldserver acore account create webreg <SOAP_PASSWORD>
docker compose exec ac-worldserver acore account set gmlevel webreg 3
docker compose exec ac-database mysql -uroot -p"$DOCKER_DB_ROOT_PASSWORD" acore_auth -e "UPDATE realmlist SET address='$REALM_ADDRESS' WHERE id=1;"
```
> 数据库密码在官方 compose 读取的 `.env` 的 `DOCKER_DB_ROOT_PASSWORD`。

访问：
- 游戏：客户端由补丁包 `启动器.bat`（打包时按 `REALM_ADDRESS` 写入）填 `realmlist.wtf` 连 `<REALM_ADDRESS>:3724`（auth）；`8085` 的 world 地址由 `acok.sh` 写入 `acore_auth.realmlist`。
- 注册：由 Cloudflare Worker 承接（本仓库 `deploy/worker.js` 提供 `/api/register`）

## 玩家补丁

补丁含 AddOns + zhCN MPQ（中文客户端补丁）。解压到 WoW 3.3.5a 客户端【根目录】即可；地图数据由服务端自带。

压缩包内含 `启动器.bat`：打包时通过 `REALM_ADDRESS` 写入服务器地址，玩家双击即自动清缓存、写好 `realmlist.wtf`、启动 `Wow.exe`。打包前设 `REALM_ADDRESS=你的域名或IP` 即可（默认占位 `play.example.com`）。

## 维护

- **镜像双推 CCR + DockerHub**：override 默认走 CCR；想换 DockerHub 改 override 的 image 前缀即可（override 在 `server/`，起服时由 acok.sh 拉取）。
- **加/换模组**：改 `config/modules.txt` → 手动跑 `build-core.yml`（CI 已挂 ccache 持久化，同模组集合下重编很快）。
- **改地图数据**：改 `config/maps/**` 或 `build-maps.yml` 的 `CLIENT_DATA_REF` → 重新跑 `build-maps.yml`。
- **改自定义配置**：改 `config/extra-config/confs/*` → 重新跑 `build-config.yml` → 服务端重新注入。
- **改客户端补丁**：改 `client-patches/*` 或 `client-patches/addons.txt` → 重新跑 `build.sh` / `wrangler deploy`。
- **同步官方文件**：AC 更新后重新跑对应 CI 工作流。

## 快速上手

见 `deploy/index.html`（主页即注册页 + 补丁下载 + 简介/说明），或按上方「部署指南」操作。
