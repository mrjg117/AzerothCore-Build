# 部署包（deploy/）

本目录是 AzerothCore 服务器的**完整部署包**，由 Cloudflare Pages 直接托管（`index.html` 为下载/说明页）。
GitHub 只负责构建镜像并推送到 TCR / DockerHub，**分发走 CF Pages**（国内连 GitHub 不稳，下载从 CF 走）。

## 目录内容

| 文件 | 来源 | 说明 |
|---|---|---|
| `docker-compose.yml` | 官方（固定副本） | 官方编排，原样使用，勿改 |
| `docker-compose.override.yml` | 本项目 | 官方钦定扩展点：换镜像地址 + 追加 `ac-web` 注册页 |
| `.env.example` | 本项目 | 部署变量样例，复制为 `.env` 后填写 |
| `conf/dist/env.ac` | 官方（固定副本） | 官方环境模板（编译器/路径；**DB 密码不在此**） |
| `inject-config.sh` | 本项目 | 部署机把自定义配置注入卷（拉 `ac-extra-config` 导出到 `env/dist/etc/`） |
| `index.html` | 本项目 | CF Pages 下载/说明页 |

> 官方两份文件是固定副本，AC 更新时需手动同步（见末尾「同步官方文件」）。

## 部署步骤

```bash
# 1. 进入本目录
cd deploy

# 2. 生成 .env 并填写（至少改这几项）
cp .env.example .env
#   IMAGE_TAG      = latest（或 CI 构建出的具体 tag）
#   TCR_NS         = 你的 TCR 命名空间
#   DOCKER_DB_ROOT_PASSWORD = 必改！否则数据库密码回退默认 password
#   SOAP_PASSWORD  = 改掉占位，且需与下方 worldserver SOAP.Password 一致
#   REALM_ADDRESS  = 玩家客户端填的对外 realm 地址

# 3. 拉镜像（关键：漏这步会在服务器本地触发编译整个 azerothcore）
docker compose pull

# 4. 注入自定义配置（worldserver.conf 等）
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

## Cloudflare Pages 配置

把本仓库连到 Cloudflare Pages，项目设置：
- **构建目录 / 根目录**：`deploy`（即本目录）
- **构建命令**：留空
- **输出目录**：`.`（deploy 本身，含 index.html）

推送后 CF Pages 自动发布，`index.html` 即为下载/说明页，部署文件均可直接下载。

## 同步官方文件

AC 更新后，重新拉取官方两份文件覆盖本目录的副本即可：

```bash
# 在仓库根执行（需能访问 GitHub）
curl -fsSL https://raw.githubusercontent.com/azerothcore/azerothcore-wotlk/master/docker-compose.yml -o deploy/docker-compose.yml
curl -fsSL https://raw.githubusercontent.com/azerothcore/azerothcore-wotlk/master/conf/dist/env.ac -o deploy/conf/dist/env.ac
git add deploy && git commit -m "chore: sync official docker-compose.yml / env.ac"
```
