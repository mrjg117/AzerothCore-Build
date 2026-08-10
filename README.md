# AzerothCore-Build（全照搬官方 · 自托管轻量注册页）

按官方 `azerothcore/azerothcore-wotlk` 原生编排构建的 WotLK 私服镜像源。

**原则：官方的东西一个字不改，只换两个端点，其余全部走"追加"。**
- 编译位置：官方 CI → **GitHub Actions**
- 镜像仓库：Docker Hub → **腾讯云 TCR + DockerHub 双推**
- 所有定制走官方钦定扩展点：`docker-compose.override.yml` + 配置注入卷（`cp -n` 不覆盖）

## 目录结构（各功能分别放文件夹）

| 路径 | 职责 |
|---|---|
| `modules.txt` | 43 个模组 Git 地址清单（编译期克隆进官方 `modules/`，由 `MODULES=static` 静态编入核心） |
| `.github/workflows/build-core.yml` | 克隆官方 + 43 模组，构建 5 个官方 target 推双仓库，组装部署包发 Release |
| `.github/workflows/build-extras.yml` | 构建 `ac-web`（注册页）与 `ac-extra-config`（配置注入）推双仓库 |
| `web/wotlk-web/` | 最轻自研注册页（静态表单 + 单文件后端，调 worldserver SOAP `account create`）；构建上下文为仓库根，会把 `client-patches/` 烤进 `static/patches` 供下载 |
| `client-patches/` | 客户端补丁，按模组分子目录 |
| `config/extra-config/` | 自定义配置注入镜像源（`confs/` 按模组分：worldserver / playerbots / mod_item_affixes） |
| `scripts/assemble-deploy-bundle.sh` | 构建时把官方 `docker-compose.yml` + `env.ac` 与我们的配置打部署包 |
| `scripts/inject-config.sh` | 部署机把自定义配置注入卷 |
| `docker-compose.override.yml` | 官方 compose 唯一扩展点（换镜像地址 + 追加 `ac-web`） |
| `.env.example` | 部署变量样例 |
| `docs/DEPLOY.md` | 部署步骤 |

## 注册页选型
最轻自研（静态表单 + 单文件后端调 SOAP），排除 WordPress(acore-cms) 与 WoWSimpleRegistration 整套 PHP 应用。
完整调研见工作区根目录的 `_官方注册页方案调研.md`。

## 完整构建/回归计划
见工作区根目录的 `_重建计划_全照搬官方.md`（含官方机制核实、双推/部署包决策、待决策点）。

## 快速上手
见 `docs/DEPLOY.md`：取 GitHub Release 的部署包 → 改 `.env` → `docker compose pull` → `inject-config.sh` → `docker compose up -d`。
