#!/usr/bin/env bash
# ============================================================
# 一键部署脚本（本地）
# ------------------------------------------------------------
# 流程：拉取四镜像 → 从 map/config/patches 镜像导出到本地
#       ./runtime/data、./runtime/config、./runtime/patches → docker compose up。
# 注：运行时导出统一放在 ./runtime/ 下，避免与仓库源码目录（config/、
#     client-patches/ 等）撞名被误覆盖。
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
PATCHES="$REG/$NS/wotlk-patches"
WEB="$REG/$NS/wotlk-web"
REALM_ADDRESS="${REALM_ADDRESS:-}"

cmd="${1:-up}"

pull_all() {
  echo "== 拉取镜像 =="
  docker pull "$SERVER"
  docker pull "$MAPS"
  docker pull "$CFG"
  docker pull "$PATCHES"
  docker pull "$WEB"
}

populate() {
  mkdir -p runtime/config runtime/data runtime/patches
  echo "== 从地图镜像导出数据到 ./runtime/data =="
  docker create --name _acore_maps "$MAPS" >/dev/null
  docker cp _acore_maps:/data/. ./runtime/data
  docker rm _acore_maps >/dev/null
  echo "== 从配置镜像导出配置到 ./runtime/config =="
  docker create --name _acore_cfg "$CFG" >/dev/null
  docker cp _acore_cfg:/azerothcore/etc/. ./runtime/config
  docker rm _acore_cfg >/dev/null
  echo "== 从补丁镜像导出补丁到 ./runtime/patches =="
  docker create --name _acore_patch "$PATCHES" >/dev/null
  docker cp _acore_patch:/patches/. ./runtime/patches
  docker rm _acore_patch >/dev/null
  echo "导出完成："; ls runtime/config runtime/data runtime/patches
}

set_realm() {
  local addr="${1:-$REALM_ADDRESS}"
  if [ -z "$addr" ]; then
    echo "⚠️  REALM_ADDRESS 未设置，玩家将无法从外部连接。"
    echo "   在 .env 写入 REALM_ADDRESS=<你的公网IP或域名>，再 ./deploy.sh set-realm <地址>"
    return 0
  fi
  echo "== 设置 realm 对外地址为 $addr =="
  for i in $(seq 1 30); do
    if docker compose exec -T db mysql -uroot -pacore acore_auth -e "UPDATE realmlist SET address='$addr' WHERE id=1;" 2>/dev/null; then
      echo "✔ realm 地址已更新"
      return 0
    fi
    sleep 2
  done
  echo "✘ 更新 realm 地址失败（realmlist 表可能尚未创建，请稍后 ./deploy.sh set-realm $addr）"
}

init_db() {
  echo "== 初始化数据库（首次，需联网拉取 TDB）=="
  docker compose up -d db
  echo "等待 db 健康..."
  docker compose exec -T db bash -c 'until mysqladmin ping -h127.0.0.1 -uroot -pacore --silent; do sleep 2; done'
  echo "启动 worldserver 一次以建库/应用 SQL..."
  docker compose run --rm worldserver true 2>/dev/null || true
  echo "如 world 库缺少 TDB 内容，请按 AzerothCore 官方 wiki 导入 TDB。"
  echo ""
  echo "【需手动做一次】创建 SOAP 管理账号（注册页用它写库）："
  echo "  1) 进入 worldserver 控制台（或游戏内 GM）："
  echo "     account create webreg <与 worldserver.conf SOAP.Password 一致>"
  echo "     account set gmlevel webreg 1"
  echo "  2) 确保 ./runtime/config/worldserver.conf 的 SOAP.Password 与此处密码相同。"
}

case "$cmd" in
  pull)     pull_all ;;
  populate) populate ;;
  init-db)  init_db ;;
  set-realm) set_realm "${2:-}" ;;
  up)
    pull_all
    populate
    docker compose up -d
    echo "== 等待服务启动，设置 realm 地址 =="
    set_realm
    echo "== 部署完成 =="
    echo "   注册页:  http://<本机IP>:8080"
    echo "   状态:    ./deploy.sh status"
    ;;
  down)     docker compose down ;;
  status)   docker compose ps ;;
  *)
    echo "用法: $0 [up|down|pull|populate|init-db|set-realm <地址>|status]"
    echo "  up          一键拉镜像+导出+启动（默认）"
    echo "  init-db     首次初始化数据库"
    echo "  set-realm   设置 realm 对外地址（玩家连接用，填公网IP/域名/DDNS）"
    echo "  down        停止"
    echo "  status      状态"
    exit 1
    ;;
esac
