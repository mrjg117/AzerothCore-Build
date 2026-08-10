# AzerothCore-Build（全照搬官方 · 自托管轻量注册页）

按官方 `azerothcore/azerothcore-wotlk` 原生编排构建的 WotLK 私服镜像源。

**原则：官方的东西一个字不改，只换两个端点，其余全部走"追加"。**
- 编译位置：官方 CI → **GitHub Actions**
- 镜像仓库：Docker Hub → **腾讯云 TCR + DockerHub 双推**
- 所有定制走官方钦定扩展点：`deploy/docker-compose.override.yml` + 配置注入卷（`cp -n` 不覆盖）

## 目录结构（各功能分别放文件夹）

| 路径 | 职责 |
|---|---|
| `config/modules.txt` | 43 个模组 Git 地址清单（编译期克隆进官方 `modules/`，由 `MODULES=static` 静态编入核心） |
| `.github/workflows/build-core.yml` | 克隆官方 + 43 模组，构建 4 个官方 server target（worldserver/authserver/db-import/tools；地图改由 build-maps 提供）推双仓库（部署包见 `deploy/`，由 Cloudflare Pages 分发） |
| `.github/workflows/build-maps.yml` | 下载社区地图源 `wowgaming/client-data@v20.0` 的 `Data.zip`，烤进独立 `ac-maps` 镜像推双仓库（替换官方 client-data） |
| `.github/workflows/build-config.yml` | 构建 `ac-extra-config`（配置注入）镜像推双仓库 |
| `.github/workflows/sync-addons.yml` | 定时把原仓库最新 `client_addon/` 刷回 `client-patches/` 并提交（保持离线兜底最新） |
| `web/wotlk-web/` | 最轻自研注册页（静态表单 + 单文件后端，调 worldserver SOAP `account create`）；构建上下文为仓库根，会把 `client-patches/` 烤进 `static/patches` 供下载 |
| `client-patches/` | 客户端补丁，按模组分子目录（MPQ 仅 `zhCN` 单份；AddOn 为离线兜底，构建时从原仓库拉最新覆盖）；`patches-client.zip` 不进仓库，由 Cloudflare Pages 构建时（build-pages.sh）现打 |
| `config/extra-config/` | 自定义配置注入镜像源（`confs/` 按模组分：worldserver / playerbots / mod_item_affixes） |
| `config/maps/` | `ac-maps` 镜像源（社区地图数据烤入，替换官方 client-data） |
| `deploy/` | **完整部署包**：官方 `docker-compose.yml` + `conf/dist/env.ac` 固定副本 + 我们的 `docker-compose.override.yml` / `.env.example` / `inject-config.sh` + `index.html` 下载页；由 Cloudflare Pages 托管分发 |
| `deploy/inject-config.sh` | 部署机把自定义配置注入卷 |
| `deploy/docker-compose.override.yml` | 官方 compose 唯一扩展点（仅换镜像地址；`ac-web` 已不再纳入部署，源码保留于 `web/wotlk-web/`） |
| `deploy/.env.example` | 部署变量样例（含 `DOCKER_DB_ROOT_PASSWORD` 等） |
| `docs/DEPLOY.md` | 部署步骤 |

## 注册页选型
> 注：`web/wotlk-web/`（ac-web）源码仍保留，但已不再作为部署组件；账号注册改由 Cloudflare 侧（Pages 静态表单 + Function 调 worldserver SOAP）完成，详见各部署文档。
最轻自研（静态表单 + 单文件后端调 SOAP），排除 WordPress(acore-cms) 与 WoWSimpleRegistration 整套 PHP 应用。
完整调研见工作区根目录的 `_官方注册页方案调研.md`。

## 完整构建/回归计划
见工作区根目录的 `_重建计划_全照搬官方.md`（含官方机制核实、双推/部署包决策、待决策点）。

## 快速上手
见 `docs/DEPLOY.md`：从 Cloudflare Pages 下载 `deploy/` 部署包 → 改 `.env` → `docker compose pull` → `bash deploy/inject-config.sh` → `docker compose up -d`。
