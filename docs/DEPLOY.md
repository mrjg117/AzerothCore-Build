# 部署指南（全照搬官方 + 自托管轻量注册页）

本仓库**不存官方文件**。所有官方文件在 GitHub Actions 构建时从 pinned commit 抓取，
打包成「部署包」发到 GitHub Releases（每版一份）。部署机**免 git**，只取包 + 改 `.env` + `compose up`。

## 一、在部署机上

```bash
# 1. 取部署包（把 <VERSION> 换成 Release 的 deploy-<VERSION> tag，例如 20260810-abc1234）
curl -L -o ac-deploy.tar.gz \
  https://github.com/mrjg117/AzerothCore-Build/releases/download/deploy-<VERSION>/ac-deploy-<VERSION>.tar.gz
mkdir ac-deploy && tar -xzf ac-deploy.tar.gz -C ac-deploy && cd ac-deploy

# 2. 填配置
cp .env.example .env && vi .env          # 设 IMAGE_TAG / TCR_NS / SOAP_PASSWORD / REALM_ADDRESS / 端口
vi conf/dist/env.ac                       # 改数据库密码（DOCKER_DB_ROOT_PASSWORD / DOCKER_DB_PASSWORD 等）

# 3. 拉镜像（必须先 pull，否则 compose 会触发本地 build）
docker compose pull

# 4. 注入自定义配置（ac-extra-config 把 confs 烤进 env/dist/etc，官方 cp -n 合并）
bash scripts/inject-config.sh

# 5. 官方原生启动（零修改，仅读 override 换镜像 + 追加 ac-web）
docker compose up -d

# 6. 建 SOAP 账号（注册页用它调 worldserver 执行 account create）
#    先停 worldserver 避免端口冲突，用一次性容器执行命令后重启
docker compose stop ac-worldserver
docker compose run --rm ac-worldserver worldserver <<'EOF'
account create webreg <SOAP_PASSWORD>
account set gmlevel webreg 1
EOF
docker compose up -d ac-worldserver

# 7. 设对外 realm 地址（玩家客户端填的地址）
#    用包内 conf/dist/env.ac 的数据库凭据连 acore_auth 执行：
#    UPDATE acore_auth.realmlist SET address='<REALM_ADDRESS>' WHERE id=1;
```

## 二、访问
- 游戏：客户端连 `<服务器IP>:3724`（auth）/ `8085`（world；realm 地址填 REALM_ADDRESS）
- 注册页：http://`<服务器IP>`:8080

## 三、维护
- **镜像双推 TCR + DockerHub**：override 默认走 TCR；想换 DockerHub 改 override 的 image 前缀即可。
- **加/换模组**：改 `modules.txt` → 重新跑 `build-core.yml` → 重新取部署包部署。
- **改地图数据**：改 `config/maps/**` 或 `build-maps.yml` 的 `CLIENT_DATA_REF` → 重新跑 `build-maps.yml`（`ac-maps` 重新烤入，替换官方 client-data）。
- **改自定义配置**：改 `config/extra-config/confs/*` → 重新跑 `build-config.yml` → 重新 `inject-config.sh`。
- **改注册页 / 客户端补丁**：改 `web/wotlk-web/*` 或 `client-patches/*` → 重新跑 `build-web.yml`（补丁整包在镜像构建时现打）。
