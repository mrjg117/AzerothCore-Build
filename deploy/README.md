# 部署包（deploy/）

本目录是 AzerothCore 服务器的**部署源**，由 Cloudflare Pages 直接托管（`index.html` 为下载/说明页）。
GitHub 只负责构建镜像并推送到 TCR / DockerHub，**分发走 CF Pages**（国内连 GitHub 不稳，下载从 CF 走）。

## 仓库里提交什么、构建时生成什么

**提交进仓库（源文件）：**
| 文件 | 说明 |
|---|---|
| `docker-compose.override.yml` | 官方钦定扩展点：换镜像地址 + 追加 `ac-web` 注册页 |
| `.env.example` | 部署变量样例，复制为 `.env` 后填写 |
| `inject-config.sh` | 部署机把自定义配置注入卷（拉 `ac-extra-config` 导出到 `env/dist/etc/`） |
| `index.html` | CF Pages 下载/说明页 |
| `README.md` | 本说明 |
| `build-pages.sh` | 构建脚本：现拉官方文件 + 现打两个压缩包 |
| `deploy-console.sh` | 部署机控制台：从 Pages 现拉文件 → 生成 `.env` → 交互式菜单（一键部署/更新配置/重下地图/重部署主页/启停/日志） |

**构建时现拉 / 现打（不进仓库，`.gitignore` 已忽略）：**
| 文件 | 来源 |
|---|---|
| `docker-compose.yml` | 官方，由 `build-pages.sh` 从上游拉取（原样使用，勿改） |
| `conf/dist/env.ac` | 官方，由 `build-pages.sh` 从上游拉取（编译器/路径；**DB 密码不在此**） |
| `patches/patches-client.zip` | 由 `scripts/make-client-archive.py` 现打（玩家客户端补丁） |
| `ac-deploy.zip` | 由 `build-pages.sh` 把上述配置打包成的整包 |
| `VERSION` | 当前镜像 tag，由 `build-pages.sh` 从 `.env.example` 导出 |

> 这样官方两份文件永远是最新、且不会因副本过期踩坑；补丁包也总是最新。

## Cloudflare Pages 配置

把本仓库连到 Cloudflare Pages，项目设置：
- **构建命令**：`bash deploy/build-pages.sh`
- **输出目录**：`deploy`
- **框架预设**：None

推送后 CF 自动执行 `build-pages.sh`：拉官方文件 → 打补丁包 → 打配置整包，`index.html` 即为下载/说明页。

本地预览同样可执行 `bash deploy/build-pages.sh`，结束后 `deploy/` 即为可直接托管的静态目录。

## 部署步骤（部署机，无 git）

**方式 A —— 控制台（推荐）**：在部署机粘贴运行一行，后续全在交互菜单里点：

```bash
curl -fsSL https://ac-deploy.pages.dev/deploy-console.sh -o deploy-console.sh \
  && bash deploy-console.sh https://ac-deploy.pages.dev
```

脚本会自动从 Pages 现拉 `docker-compose.yml` / `override.yml` / `.env.example` / `inject-config.sh`，
生成 `.env` 并让你交互填关键项，然后进入菜单：

- `1` 一键部署（pull 全部镜像 + up -d）
- `2` 更新配置（重拉 `ac-extra-config` + 注入 + 重启 worldserver）
- `3` 重新下地图（重拉 `ac-maps` + 重建 `ac-client-data-init` + 重启 worldserver）
- `4` 重新部署主页（重拉 `ac-web` + 重建）
- `5` 启/停/重启  `6` 状态/日志  `7` 编辑 `.env`

**方式 B —— 手动**：

```bash
# 1. 从 Pages 站点把 deploy/ 整目录下到部署机，进入该目录
#    （或本地跑过 build-pages.sh 后 scp 过去）

# 2. 生成 .env 并填写（至少改这几项）
cp .env.example .env
#   IMAGE_TAG      = latest（或 CI 构建出的具体 tag，build-core 已回写进 .env.example）
#   TCR_NS         = 你的 TCR 命名空间
#   DOCKER_DB_ROOT_PASSWORD = 必改！否则数据库密码回退默认 password
#   SOAP_PASSWORD  = 改掉占位，且需与 SOAP.Login=webreg 的密码一致
#   REALM_ADDRESS  = 玩家客户端填的对外 realm 地址

# 3. 拉镜像（关键：漏这步会在服务器本地触发编译整个 azerothcore）
docker compose pull

# 4. 注入自定义配置（core + 模块 conf）
bash inject-config.sh

# 5. 起服务：建库 → 导库（含 43 模组 SQL）→ 灌地图 → 起服
docker compose up -d
```

首次部署还需：
- 手动建一个 `gmlevel=1` 的 `webreg` 账号（密码与 `.env` 的 `SOAP_PASSWORD` 一致），供注册页 SOAP 调用。
- 改 realm 对外地址：`REALM_ADDRESS` 填好后，按需在 auth 库 `realmlist` 表改 `address`。

## 数据库密码在哪改（重要）

官方 `docker-compose.yml` 中 `ac-database` 的 `MYSQL_ROOT_PASSWORD` 取 `${DOCKER_DB_ROOT_PASSWORD:-password}`，
该变量由 **`.env` 提供**（docker compose 自动读取），**不在 `env.ac` 里**。`env.ac` 只含编译器/路径配置。
所以改密码只改 `.env` 的 `DOCKER_DB_ROOT_PASSWORD` 即可。
