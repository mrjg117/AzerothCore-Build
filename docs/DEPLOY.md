# 部署指南（全照搬官方 + 自托管轻量注册页）

本仓库的 `deploy/` 目录就是**完整部署包**，由 Cloudflare Pages 直接托管（`deploy/index.html` 为下载页）。
官方文件（`docker-compose.yml` / `conf/dist/env.ac`）以固定副本存于 `deploy/`（AC 更新时手动同步）。
GitHub Actions 只负责构建镜像并推送到 TCR / DockerHub；**分发走 CF Pages**（国内连 GitHub 不稳，下载从 CF 走）。

## 一、在部署机上

```bash
# 1. 从 Cloudflare Pages 下载 deploy/ 整目录，进入该目录
#    （也可直接 git clone 本仓库后取 deploy/ 子目录）

# 2. 填配置
cp .env.example .env && vi .env
#   设 IMAGE_TAG（或留 latest）/ TCR_NS / DOCKER_DB_ROOT_PASSWORD / SOAP_PASSWORD / REALM_ADDRESS / 端口
#   ⚠️ 数据库密码在 .env 的 DOCKER_DB_ROOT_PASSWORD（官方 compose 读取），不在 env.ac

# 3. 拉镜像（必须先 pull，否则 compose 会触发本地 build 整个 azerothcore）
docker compose pull

# 4. 注入自定义配置（ac-extra-config 把 confs 烤进 env/dist/etc，官方 cp -n 合并）
bash inject-config.sh

# 5. 官方原生启动（零修改，仅读 override 换镜像 + 追加 ac-web）
docker compose up -d

# 6. 建 SOAP 账号（注册页用它调 worldserver 执行 account create）
docker compose stop ac-worldserver
docker compose run --rm ac-worldserver worldserver <<'EOF'
account create webreg <SOAP_PASSWORD>
account set gmlevel webreg 1
EOF
docker compose up -d ac-worldserver

# 7. 设对外 realm 地址（玩家客户端填的地址）
#    用 conf/dist/env.ac 的数据库凭据连 acore_auth 执行：
#    UPDATE acore_auth.realmlist SET address='<REALM_ADDRESS>' WHERE id=1;
```

## 二、访问
- 游戏：客户端连 `<服务器IP>:3724`（auth）/ `8085`（world；realm 地址填 REALM_ADDRESS）
- 注册页：http://`<服务器IP>`:8080

## 三、维护
- **镜像双推 TCR + DockerHub**：override 默认走 TCR；想换 DockerHub 改 override 的 image 前缀即可。
- **加/换模组**：改 `config/modules.txt` → 重新跑 `build-core.yml` → 重新从 CF Pages 取部署包部署（镜像 tag 变了则更新 .env 的 IMAGE_TAG）。
- **改地图数据**：改 `config/maps/**` 或 `build-maps.yml` 的 `CLIENT_DATA_REF` → 重新跑 `build-maps.yml`（`ac-maps` 重新烤入，替换官方 client-data）。
- **改自定义配置**：改 `config/extra-config/confs/*` → 重新跑 `build-config.yml` → 重新 `bash deploy/inject-config.sh`。
- **改注册页 / 客户端补丁**：改 `web/wotlk-web/*` 或 `client-patches/*` → 重新跑 `build-web.yml`（补丁整包在镜像构建时现打）。
- **同步官方文件**：AC 更新后重新拉取 `deploy/docker-compose.yml` 与 `deploy/conf/dist/env.ac` 覆盖（见 `deploy/README.md`）。
