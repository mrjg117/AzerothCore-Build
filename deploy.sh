#!/usr/bin/env bash
# ============================================================
# 一键部署脚本（本地）
# ------------------------------------------------------------
# 流程：拉取三镜像 → 从 map/config 镜像导出到本地 ./data、./config
#       → docker compose up。
# 镜像地址从环境变量读取（REG / NS），或放到本目录 .env 里。
# 默认：ccr.ccs.tencentyun.com / azerothcore
# ============================================================
set -e

[ -f .env ] && source .env
REG="${REG:-ccr.ccs.tencentyun.com}"
NS="${NS:-azerothcore}"
SERVER="$REG/$NS/wotlk-server"
MAPS="$REG/$NS/wotlk-maps"
CFG="$REG/$NS/wotlk-config"

cmd="${1:-up}"

pull_all() {
  echo "== 拉取镜像 =="
  docker pull "$SERVER"
  docker pull "$MAPS"
  docker pull "$CFG"
}

populate() {
  mkdir -p data config
  echo "== 从地图镜像导出数据到 ./data =="
  docker create --name _acore_maps "$MAPS" >/dev/null
  docker cp _acore_maps:/data/. ./data
  docker rm _acore_maps >/dev/null
  echo "== 从配置镜像导出配置到 ./config =="
  docker create --name _acore_cfg "$CFG" >/dev/null
  docker cp _acore_cfg:/azerothcore/etc/. ./config
  docker rm _acore_cfg >/dev/null
  echo "导出完成："; ls data config
}

init_db() {
  echo "== 初始化数据库（首次，需联网拉取 TDB）=="
  docker compose up -d db
  echo "等待 db 健康..."
  docker compose exec -T db bash -c 'until mysqladmin ping -h127.0.0.1 -uroot -pacore --silent; do sleep 2; done'
  echo "启动 worldserver 一次以建库/应用 SQL..."
  docker compose run --rm worldserver true 2>/dev/null || true
  echo "如 world 库缺少 TDB 内容，请按 AzerothCore 官方 wiki 导入 TDB。"
}

case "$cmd" in
  pull)     pull_all ;;
  populate) populate ;;
  init-db)  init_db ;;
  up)
    pull_all
    populate
    docker compose up -d
    echo "== 部署完成。查看状态： ./deploy.sh status =="
    ;;
  down)     docker compose down ;;
  status)   docker compose ps ;;
  *)
    echo "用法: $0 [up|down|pull|populate|init-db|status]"
    echo "  up       一键拉镜像+导出+启动（默认）"
    echo "  init-db  首次初始化数据库"
    echo "  down     停止"
    echo "  status   状态"
    exit 1
    ;;
esac
