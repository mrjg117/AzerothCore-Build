#!/usr/bin/env bash
# ============================================================
# AzerothCore-OK —— 一键部署游戏服务端（含 43 个模组）
# ------------------------------------------------------------
# 一行运行（在你的服务器终端，需有公网 IP、装好 Docker）：
#   curl -fsSL https://raw.githubusercontent.com/mrjg117/AzerothCore-OK/main/server/deploy.sh | bash
#
# 它做了什么：
#   1) 没装 Docker 就尝试装（Ubuntu/Debian/CentOS）
#   2) 拉取部署文件到 $WORK_DIR（官方基础 compose + 我们的 override + .env + modules.txt）
#   3) 用环境变量覆盖 .env（没给就请你手动编辑 .env）
#   4) docker compose pull && up -d（务必先 pull，否则会在本机编译）
#
# 可用环境变量（不传则保持 .env.example 默认值，需你事后改）：
#   REALM_ADDRESS   对外地址（玩家连接 / 客户端 realmlist.wtf），如 play.example.com 或 1.2.3.4
#   TCR_NS          镜像命名空间（默认 ccr.ccs.tencentyun.com/acok）
#   SOAP_PASSWORD   注册 SOAP 密码（需与 Worker 的 SOAP_PASSWORD 一致）
#   WORK_DIR        部署目录（默认 /opt/azerothcore-ok）
# ============================================================
set -euo pipefail

WORK_DIR="${WORK_DIR:-/opt/azerothcore-ok}"
REPO_RAW="https://raw.githubusercontent.com/mrjg117/AzerothCore-OK/main"

# 0) 装 Docker
if ! command -v docker >/dev/null 2>&1; then
  echo "==> 未检测到 Docker，尝试安装（Ubuntu/Debian/CentOS）..."
  curl -fsSL https://get.docker.com | sh
fi
docker compose version >/dev/null 2>&1 || { echo "需要 docker compose 插件，请先安装后重试"; exit 1; }

# 1) 拉部署文件
mkdir -p "$WORK_DIR" && cd "$WORK_DIR"
echo "==> 下载部署文件到 $WORK_DIR"
curl -fsSL "$REPO_RAW/server/docker-compose.override.yml" -o docker-compose.override.yml
curl -fsSL "$REPO_RAW/server/.env.example"                 -o .env
curl -fsSL "$REPO_RAW/config/modules.txt"                 -o modules.txt
# 官方基础 compose（azerothcore-wotlk 原生编排，我们只覆盖镜像地址）
curl -fsSL "https://raw.githubusercontent.com/azerothcore/azerothcore-wotlk/master/docker-compose.yml" -o docker-compose.yml

# 2) 用环境变量覆盖 .env（没传就保持默认，请手动编辑）
[ -n "${REALM_ADDRESS:-}" ] && sed -i "s|^REALM_ADDRESS=.*|REALM_ADDRESS=$REALM_ADDRESS|" .env
[ -n "${TCR_NS:-}" ]        && sed -i "s|^TCR_NS=.*|TCR_NS=$TCR_NS|" .env
[ -n "${SOAP_PASSWORD:-}" ] && sed -i "s|^SOAP_PASSWORD=.*|SOAP_PASSWORD=$SOAP_PASSWORD|" .env
echo "    请确认 .env：DOCKER_DB_ROOT_PASSWORD / REALM_ADDRESS / SOAP_PASSWORD"

# 3) 起服（务必先 pull，否则会触发本机编译）
echo "==> docker compose pull ..."
docker compose pull
echo "==> docker compose up -d ..."
docker compose up -d
echo "==> 完成。世界服 8085 / 3724；注册 SOAP 7878。"
echo "    日志：docker compose logs -f ac-worldserver"
