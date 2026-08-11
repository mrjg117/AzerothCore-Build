# AzerothCore-Build（全照搬官方）

基于官方 [`azerothcore/azerothcore-wotlk`](https://github.com/azerothcore/azerothcore-wotlk) 原生编排构建的 WotLK（3.3.5a）私服镜像源与部署包。

**核心原则：官方的东西一个字不改，只换两个端点，其余全部走"追加"。**

- 编译位置：官方 CI → **GitHub Actions**
- 镜像仓库：Docker Hub → **腾讯云 TCR + DockerHub 双推**
- 分发：部署包与玩家补丁 → **Cloudflare Pages**（国内连 GitHub 不稳，下载走 CF）
- 定制扩展点：官方钦定的 `deploy/docker-compose.override.yml` + 配置注入卷（`cp -n` 不覆盖）

## 架构

| 镜像 | 由谁构建 | 作用 |
|---|---|---|
| `ac-wotlk-worldserver` / `authserver` / `db-import` / `tools` | `build-core.yml` | 官方 4 个 server target（克隆官方 + 43 模组，`MODULES=static` 静态编入） |
| `ac-maps` | `build-maps.yml` | 社区地图源 `wowgaming/client-data@v20.0` 烤入，替换官方 `client-data`（部署机零提取） |
| `ac-extra-config` | `build-config.yml` | 自定义 `.conf` 注入镜像（按模组分子目录） |
| `ac-deploy`（Pages 产物） | `build-pages.sh` | 部署包静态站（含 `index.html` 下载页、配置、`patches/` 分卷补丁） |

CI 工作流（均在 Actions 跑）：
- `build-core.yml`：克隆官方 + 43 模组，构建 4 个 server target，推双仓库。
- `build-maps.yml`：下载社区地图源烤入 `ac-maps`，推双仓库。
- `build-config.yml`：构建 `ac-extra-config`，推双仓库。

## 目录结构

```
AzerothCore-Build/
├── .github/workflows/        CI：build-core / build-maps / build-config
├── client-patches/            玩家客户端补丁源（按模组分子目录）；Pages 构建时打成
│                              patches-client.zip 再分卷。MPQ 仅 zhCN 单份（仓库内保留），
│                              AddOn 由构建期从上游直拉，不落库
│   └── make-archive.py        把 client-patches/ 按 WoW 目录层级（Data/zhCN + Interface/AddOns）
│                              打成 patches-client.zip（被 build-pages.sh 调用）
├── config/
│   ├── modules.txt            43 个模组 Git 地址清单（编译期克隆进官方 modules/，去 -master 后缀）
│   ├── extra-config/          自定义配置注入镜像源（ac-extra-config）
│   │   ├── Dockerfile / docker-entrypoint.sh
│   │   └── confs/             各模组自定义 .conf（core / mod-playerbots / mod-item-affixes）
│   └── maps/                  ac-maps 镜像源（社区地图烤入）
├── deploy/                    完整部署包 = Cloudflare Pages 源
│   ├── index.html             Pages 主页：注册 + 补丁下载 + 一键部署 + 简介/说明
│   ├── docker-compose.override.yml   官方钦定唯一扩展点：仅换镜像地址
│   ├── .env.example           部署变量样例
│   ├── build-pages.sh         Pages 构建命令（现拉官方文件 + 现打补丁分卷 + 现打 ac-deploy.zip）
│   ├── deploy-console.sh      部署机交互控制台（拉文件 / 生成 .env / 菜单，配置注入已内联）
│   └── （以下为构建产物，不进库）docker-compose.yml / conf/dist/env.ac / ac-deploy.zip / VERSION / patches/*
```

> `deploy/docker-compose.yml` 与 `conf/dist/env.ac` 是官方文件，由 `build-pages.sh` 在构建时从上游 raw 现拉，不进库（保证最新、不副本过期）。

## 注册方案

账号注册**不在本仓库内实现**，由 **Cloudflare 侧**承接：Pages 表单（即 `deploy/index.html` 的注册区块）提交到 **Cloudflare Function**（`/api/register`），Function 做图形验证 / 限频 / 白名单后，调 `worldserver` 的 SOAP `account create` 建号（SRP6 由核心自算）。

本仓库只提供 worldserver 的 SOAP 通道（默认 `SOAP.IP=0.0.0.0`、Port 7878）。CF Function 落地时建议把 `SOAP.IP` 改绑 `127.0.0.1`（只让 Function 经 localhost 访问，不向公网开端口）。首次部署需手动建一个 `gmlevel=1` 的 `webreg` 账号（密码与 `.env` 的 `SOAP_PASSWORD` 一致）供 Function 调用。

## 部署指南（服务器端）

```bash
# 1. 从 Cloudflare Pages 下载 deploy/ 整目录，进入该目录
#    （或 git clone 本仓库后取 deploy/ 子目录）

# 2. 填配置
cp .env.example .env && vi .env
#   设 IMAGE_TAG（或留 latest）/ TCR_NS / DOCKER_DB_ROOT_PASSWORD / SOAP_PASSWORD / REALM_ADDRESS
#   ⚠️ 数据库密码在 .env 的 DOCKER_DB_ROOT_PASSWORD（官方 compose 读取），不在 env.ac

# 3. 拉镜像（必须先 pull，否则 compose 会触发本地 build 整个 azerothcore）
docker compose pull

# 4. 注入自定义配置（ac-extra-config 把 confs 烤进 env/dist/etc，官方 cp -n 合并）
#    部署控制台菜单 [2] 更新配置 即执行注入

# 5. 官方原生启动（零修改，仅读 override 换镜像）
docker compose up -d

# 6. 建 SOAP 账号（外部注册服务用它调 worldserver 执行 account create）
docker compose exec ac-worldserver acore account create webreg <SOAP_PASSWORD> 1
```

访问：
- 游戏：客户端连 `<服务器IP>:3724`（auth）/ `8085`（world；realm 地址填 REALM_ADDRESS）
- 注册：由 Cloudflare 侧承接（本仓库不含注册页后端代码，注册表单在 Pages 主页）

## 玩家补丁

补丁包含 **AddOns（界面/功能插件）+ zhCN MPQ（中文客户端补丁）**。

- **传输包约 3 MB**（MPQ 是未压缩/高冗余数据，zip 能压到这么小；远在 CF Pages 单文件 25 MiB 上限内）。
- 玩家机器解压后还原为 **约 48 MB 的 MPQ** 给客户端读取。
- 按需求**强制分卷**（方便"点一下下一堆"批量下载），每卷 ≤ 24 MiB。玩家在 Pages 主页**手动逐卷点下载**，按 `patches-manifest.txt` 顺序合并解压到客户端根目录。

## 维护

- **镜像双推 TCR + DockerHub**：override 默认走 TCR；想换 DockerHub 改 override 的 image 前缀即可。
- **加/换模组**：改 `config/modules.txt` → 重新跑 `build-core.yml` → 重新从 CF Pages 取部署包部署（镜像 tag 变了则更新 .env 的 IMAGE_TAG）。
- **改地图数据**：改 `config/maps/**` 或 `build-maps.yml` 的 `CLIENT_DATA_REF` → 重新跑 `build-maps.yml`。
- **改自定义配置**：改 `config/extra-config/confs/*` → 重新跑 `build-config.yml` → 部署控制台菜单 `[2] 更新配置` 注入。
- **改客户端补丁**：改 `client-patches/*` → 重新跑 Pages 构建（`build-pages.sh` 现打补丁包）。
- **同步官方文件**：AC 更新后 `build-pages.sh` 步骤①会自动从上游现拉 `docker-compose.yml` 与 `env.ac`。

## 快速上手

见 `deploy/index.html`（主页即注册页 + 补丁下载 + 一键部署 + 简介/说明），或按上方「部署指南」操作。完整构建/回归计划见工作区根的 `_重建计划_全照搬官方.md`。
