#!/usr/bin/env bash
# ============================================================
# AzerothCore-OK —— 服务端多功能管理脚本（含 42 个模组）
# ------------------------------------------------------------
# 一行安装（服务器终端，需公网 IP、装好 Docker）：
#   curl -fsSL https://<你的Worker域名>/acok.sh | bash
#   （非交互运行时自动进入安装向导；本地 `bash acok.sh` 进入菜单）
#
# 功能菜单：
#   1 网络设置   2 安装向导   3 配置与维护   4 服务操作   5 凭据管理   q 退出
#
# 设计要点：
#   - 纯 bash + read，零外部依赖，单文件 curl|bash。
#   - 敏感/基础配置(SOAP 登录/密码/端口、DB 密码、对外地址)全部变量化：
#     值存于部署机持久化 .env / .soap_creds，重拉配置时由配置镜像注入同一真值，不冲、不泄露。
#   - 仅暴露 WORK_DIR 与少量凭据；./env/dist/etc、命名卷等内部路径不向用户暴露。
#   - 不改动 wrangler.toml 与构建流程。
#
# 可用环境变量（通常无需传）：
#   WORKER_BASE   本仓 Cloudflare Worker 域名（构建时烤进脚本；自定义域名可传 WORKER_BASE= 覆盖）
#   REALM_ADDRESS / IMAGE_NS / SOAP_LOGIN / SOAP_PASSWORD / DOCKER_DB_ROOT_PASSWORD / WORK_DIR
# ============================================================
set -o pipefail

WORK_DIR="${WORK_DIR:-/opt/azerothcore-ok}"
WORKER_BASE="${WORKER_BASE:-REPLACE_WORKER_BASE}"
HISTORY_DIR=""
PLAN="fresh"

# 持久化凭据（位于 WORK_DIR，chmod 600，不进仓库/不进公开 .env）
SOAP_CREDS="$WORK_DIR/.soap_creds"
DB_CREDS="$WORK_DIR/.db_creds"
SOAP_LOGIN=""; SOAP_PASSWORD=""; DB_PW=""; REALM_ADDRESS=""; IMAGE_NS=""
PROXY=""

# ---------- 输出与输入 ----------
c_info(){ printf '\033[36m[信息]\033[0m %s\n' "$*"; }
c_warn(){ printf '\033[33m[警告]\033[0m %s\n' "$*"; }
c_err() { printf '\033[31m[错误]\033[0m %s\n' "$*"; }
c_ok()  { printf '\033[32m[完成]\033[0m %s\n' "$*"; }

# 菜单模式：从 stdin 读取
ask(){ local p="$1" d="${2:-}" v=""; read -r -p "$p" v; printf '%s' "${v:-$d}"; }
ask_s(){ local p="$1" v=""; read -rs -p "$p" v; echo; printf '%s' "$v"; }

# 向导模式：从 /dev/tty 读取（curl|bash 时 stdin 是脚本本身，普通 read 会吃掉脚本内容）
ask_tty(){
  local p="$1" d="${2:-}" s="${3:-}" v=""
  if [ -c /dev/tty ]; then
    if [ -n "$s" ]; then read -rs -p "$p" v < /dev/tty 2>/dev/null; else read -r -p "$p" v < /dev/tty 2>/dev/null; fi
    [ -n "$s" ] && echo >/dev/tty 2>/dev/null
  fi
  printf '%s' "${v:-$d}"
}
maybe_back(){ [ "$1" = "b" ] || [ "$1" = "B" ]; }
confirm(){
  local p="$1" expect="${2:-YES}" a=""
  if [ -c /dev/tty ]; then read -r -p "$p " a < /dev/tty; else read -r -p "$p " a; fi
  [ "$a" = "$expect" ]
}
set_env(){
  # set_env KEY VALUE：写入/更新 $WORK_DIR/.env 的 KEY=VALUE（纯 bash，不依赖 sed/mktemp）
  local key="$1" val="$2" f="$WORK_DIR/.env" tmp
  if [ ! -f "$f" ]; then printf '%s=%s\n' "$key" "$val" > "$f"; return 0; fi
  tmp="$f.tmp.$$"
  while IFS= read -r line; do
    if [ "${line#"$key"=}" != "$line" ]; then printf '%s=%s\n' "$key" "$val" >> "$tmp"
    else printf '%s\n' "$line" >> "$tmp"; fi
  done < "$f"
  grep -q "^${key}=" "$tmp" || printf '%s=%s\n' "$key" "$val" >> "$tmp"
  mv "$tmp" "$f"
}
default_gm_pass(){ printf '%s%s' "$(hostname)" "$(date +%m%d)"; }

# ---------- 环境检测 ----------
detect_distro(){
  if [ -f /etc/os-release ]; then . /etc/os-release; echo "${ID:-unknown}"; else echo unknown; fi
}
ensure_docker(){
  if command -v docker >/dev/null 2>&1; then return 0; fi
  c_info "未检测到 Docker，尝试安装..."
  local id; id="$(detect_distro)"
  case "$id" in
    ubuntu|debian|centos|rhel|fedora) curl -fsSL https://get.docker.com | sh ;;
    *) c_err "未知发行版 $id，请手动安装 Docker 后重试"; return 1 ;;
  esac
  command -v docker >/dev/null 2>&1 || { c_err "Docker 安装失败"; return 1; }
  c_ok "Docker 已安装"
}
find_history(){
  local cand="/opt/azerothcore-ok $HOME/azerothcore-ok /srv/azerothcore-ok /root/azerothcore-ok $(pwd)"
  for d in $cand; do
    [ -d "$d" ] || continue
    if [ -f "$d/.soap_creds" ] || ( [ -f "$d/.env" ] && grep -q '^IMAGE_NS=ghcr.io/mrjg117' "$d/.env" 2>/dev/null ); then
      HISTORY_DIR="$d"; return 0
    fi
  done
  return 1
}
load_creds(){
  local d="$1"
  [ -f "$d/.soap_creds" ] && {
    SOAP_LOGIN="$(grep '^SOAP_LOGIN=' "$d/.soap_creds" 2>/dev/null | cut -d= -f2-)"
    SOAP_PASSWORD="$(grep '^SOAP_PASSWORD=' "$d/.soap_creds" 2>/dev/null | cut -d= -f2-)"
  }
  [ -f "$d/.db_creds" ] && DB_PW="$(cat "$d/.db_creds" 2>/dev/null)"
  [ -f "$d/.env" ] && {
    [ -z "$REALM_ADDRESS" ] && REALM_ADDRESS="$(grep '^REALM_ADDRESS=' "$d/.env" 2>/dev/null | cut -d= -f2-)"
    [ -z "$IMAGE_NS" ] && IMAGE_NS="$(grep '^IMAGE_NS=' "$d/.env" 2>/dev/null | cut -d= -f2-)"
  }
}
save_creds(){
  mkdir -p "$WORK_DIR"
  [ -n "$SOAP_LOGIN" ] && printf 'SOAP_LOGIN=%s\nSOAP_PASSWORD=%s\n' "$SOAP_LOGIN" "$SOAP_PASSWORD" > "$SOAP_CREDS" && chmod 600 "$SOAP_CREDS"
  [ -n "$DB_PW" ] && printf '%s' "$DB_PW" > "$DB_CREDS" && chmod 600 "$DB_CREDS"
}
require_workdir(){
  if [ ! -d "$WORK_DIR" ] || [ ! -f "$WORK_DIR/docker-compose.yml" ]; then
    c_err "未找到部署目录 $WORK_DIR，请先运行『2 安装向导』"
    return 1
  fi
  cd "$WORK_DIR" || return 1
  return 0
}

# ---------- 1 网络设置 ----------
net_menu(){
  while true; do
    echo; echo "=== 1 网络设置 ==="
    echo "1) 设置临时代理（仅本次会话）"
    echo "2) 选择 ghcr 镜像源（列表 / 测速 / 自定义）"
    echo "q) 返回主菜单"
    local c; c="$(ask '网络> ')"; case "$c" in
      1) set_proxy;;
      2) select_mirror;;
      q|Q) break;;
      *) c_warn "无效选择";;
    esac
  done
}
set_proxy(){
  local p; p="$(ask '输入代理地址(如 http://127.0.0.1:7890，留空取消): ')"
  if [ -n "$p" ]; then export http_proxy="$p" https_proxy="$p"; PROXY="$p"; c_ok "本次会话已设置代理 $p"; else unset http_proxy https_proxy; PROXY=""; c_info "已清除代理"; fi
}
select_mirror(){
  while true; do
    echo; echo "当前镜像源: ${IMAGE_NS:-ghcr.io/mrjg117}"
    echo "1) ghcr.io/mrjg117 (官方直连)"
    echo "2) ghcr.1ms.run/mrjg117 (1ms.run)"
    echo "3) ghcr.nju.edu.cn/mrjg117 (南京大学)"
    echo "4) ghcr.m.daocloud.io/mrjg117 (DaoCloud)"
    echo "5) 自定义镜像前缀"
    echo "t) 对 1-4 逐个测速"
    echo "q) 返回"
    local c; c="$(ask '镜像源> ')"; case "$c" in
      1) set_ns "ghcr.io/mrjg117";;
      2) set_ns "ghcr.1ms.run/mrjg117";;
      3) set_ns "ghcr.nju.edu.cn/mrjg117";;
      4) set_ns "ghcr.m.daocloud.io/mrjg117";;
      5) local v; v="$(ask '输入镜像前缀(如 ghcr.io/yourname): ')"; [ -n "$v" ] && set_ns "$v";;
      t|T) speed_test_all;;
      q|Q) break;;
      *) c_warn "无效选择";;
    esac
  done
}
set_ns(){
  IMAGE_NS="$1"
  c_ok "镜像源已设为 $IMAGE_NS"
  [ -f "$WORK_DIR/.env" ] && set_env IMAGE_NS "$IMAGE_NS"
}
speed_test_all(){
  c_info "逐个测速（拉取 ac-extra-config 小镜像；若已缓存则很快，非真实网速）..."
  for ns in ghcr.io/mrjg117 ghcr.1ms.run/mrjg117 ghcr.nju.edu.cn/mrjg117 ghcr.m.daocloud.io/mrjg117; do
    speed_test_one "$ns"
  done
}
speed_test_one(){
  local ns="$1" img="${1}/ac-extra-config:latest" start end dt
  start=$(date +%s.%N)
  if docker pull "$img" >/dev/null 2>&1; then
    end=$(date +%s.%N)
    dt=$(awk "BEGIN{printf \"%.1f\", $end-$start}")
    c_ok "$ns -> 用时 ${dt}s"
  else
    c_err "$ns -> 拉取失败（可能不可达或未公开）"
  fi
}

# ---------- 2 安装向导 ----------
run_wizard(){
  ensure_docker || return 1
  local steps=(wz_history wz_env wz_creds wz_plan wz_deploy wz_maps)
  local wi=0 n=${#steps[@]}
  while [ $wi -lt $n ]; do
    if "${steps[$wi]}"; then wi=$((wi+1)); else wi=$((wi-1)); [ $wi -lt 0 ] && wi=0; fi
  done
}
wz_history(){
  echo; echo "--- ① 检测历史安装 ---"
  if find_history; then
    c_info "发现历史安装：$HISTORY_DIR"
    load_creds "$HISTORY_DIR"
    c_info "已载入历史凭据（后续步骤可覆盖）"
  else
    c_info "未发现历史安装，将执行全新安装"
    HISTORY_DIR=""
  fi
  return 0
}
wz_env(){
  echo; echo "--- ② 部署目录与外网地址（输入 b 返回上一步）---"
  local v
  v="$(ask_tty "部署目录 [$WORK_DIR]: " "${WORK_DIR:-/opt/azerothcore-ok}")"; if maybe_back "$v"; then return 1; fi; WORK_DIR="${v:-/opt/azerothcore-ok}"
  SOAP_CREDS="$WORK_DIR/.soap_creds"; DB_CREDS="$WORK_DIR/.db_creds"
  v="$(ask_tty "对外地址(域名或IP) [$REALM_ADDRESS]: " "${REALM_ADDRESS:-play.example.com}")"; if maybe_back "$v"; then return 1; fi; REALM_ADDRESS="${v:-play.example.com}"
  v="$(ask_tty "镜像命名空间 [$IMAGE_NS]: " "${IMAGE_NS:-ghcr.io/mrjg117}")"; if maybe_back "$v"; then return 1; fi; IMAGE_NS="${v:-ghcr.io/mrjg117}"
  return 0
}
wz_creds(){
  echo; echo "--- ③ 凭据（GM/注册账号 与 数据库，输入 b 返回）---"
  local v
  v="$(ask_tty "SOAP/GM 账号名 [$SOAP_LOGIN]: " "${SOAP_LOGIN:-acok}")"; if maybe_back "$v"; then return 1; fi; SOAP_LOGIN="${v:-acok}"
  v="$(ask_tty "SOAP/GM 密码(默认 <主机名><4位日期>，留空用默认): " "" -s)"; if maybe_back "$v"; then return 1; fi
  [ -z "$v" ] && v="$(default_gm_pass)"; SOAP_PASSWORD="$v"
  v="$(ask_tty "数据库 root 密码 [$DB_PW]: " "${DB_PW:-AcokDbRoot2026!}")"; if maybe_back "$v"; then return 1; fi; DB_PW="${v:-AcokDbRoot2026!}"
  c_warn "SOAP 密码须与 Cloudflare 后台 Variables & Secrets 的 SOAP_PASSWORD 一致，否则注册接口认证失败。"
  return 0
}
wz_plan(){
  echo; echo "--- ④ 部署方案 ---"
  if [ -n "$HISTORY_DIR" ]; then
    echo "检测到历史安装，可选："
    echo "  1) 原地更新（保留一切数据，仅拉最新镜像并重起）—— 推荐"
    echo "  2) 清理重装（销毁数据库与所有数据，全新开始，需确认）"
    local v; v="$(ask_tty "选择 [1]: " "1")"; if maybe_back "$v"; then return 1; fi
    case "$v" in
      2)
        if confirm "确认清理重装？将销毁玩家账号/角色等所有数据！输入 YES 继续:" "YES"; then PLAN="clean"; else PLAN="update"; fi ;;
      *) PLAN="update" ;;
    esac
  else
    PLAN="fresh"; c_info "全新安装"
  fi
  return 0
}
wz_deploy(){
  echo; echo "--- ⑤ 部署（拉取最新镜像并启动）---"
  mkdir -p "$WORK_DIR" && cd "$WORK_DIR" || { c_err "无法进入 $WORK_DIR"; return 1; }
  c_info "下载部署文件到 $WORK_DIR ..."
  curl -fsSL "$WORKER_BASE/docker-compose.override.yml" -o docker-compose.override.yml
  curl -fsSL "$WORKER_BASE/.env.example" -o .env
  curl -fsSL "$WORKER_BASE/docker-compose.yml" -o docker-compose.yml
  [ -n "$REALM_ADDRESS" ] && set_env REALM_ADDRESS "$REALM_ADDRESS"
  [ -n "$IMAGE_NS" ] && set_env IMAGE_NS "$IMAGE_NS"
  set_env SOAP_LOGIN "$SOAP_LOGIN"
  set_env SOAP_PASSWORD "$SOAP_PASSWORD"
  [ -n "$DB_PW" ] && set_env DOCKER_DB_ROOT_PASSWORD "$DB_PW"
  save_creds
  if [ "$PLAN" = "clean" ]; then
    c_warn "清理重装：备份凭据并销毁容器与数据卷..."
    local bk="$WORK_DIR.bak.$(date +%s)"; mkdir -p "$bk"; cp -a .env .soap_creds .db_creds "$bk"/ 2>/dev/null || true
    docker compose down -v || true
  fi
  pull_with_eta
  c_info "启动服务 (docker compose up -d) ... 首次启动数据库初始化约 1-3 分钟"
  docker compose up -d
  c_info "等待 worldserver 并创建 SOAP/GM 账号 $SOAP_LOGIN ..."
  for _k in $(seq 1 36); do docker compose exec -T ac-worldserver acore account list >/dev/null 2>&1 && break; sleep 5; done
  docker compose exec -T ac-worldserver acore account create "$SOAP_LOGIN" "$SOAP_PASSWORD" >/dev/null 2>&1 || true
  docker compose exec -T ac-worldserver acore account set gmlevel "$SOAP_LOGIN" 3 >/dev/null 2>&1 \
    && c_ok "账号 $SOAP_LOGIN 就绪(gmlevel 3)" \
    || c_warn "建号失败，请手动: docker compose exec ac-worldserver acore account create $SOAP_LOGIN <密码> 3"
  REALM="$REALM_ADDRESS"; REALM_SQL="${REALM//\'/\'\'}"
  c_info "写入 realm 对外地址 ($REALM) ..."
  for _k in $(seq 1 36); do docker compose exec -T ac-database mysql -uroot -p"$DB_PW" -e "SELECT 1" acore_auth >/dev/null 2>&1 && break; sleep 3; done
  docker compose exec -T ac-database mysql -uroot -p"$DB_PW" acore_auth -e "UPDATE realmlist SET address='$REALM_SQL' WHERE id=1;" >/dev/null 2>&1 \
    && c_ok "realm 地址已更新" \
    || c_warn "realmlist 未就绪，请手动: UPDATE acore_auth.realmlist SET address='$REALM' WHERE id=1;"
  c_ok "部署完成！"
  c_info "世界服端口 8085 / 3724；注册 SOAP 7878；玩家连接地址 $REALM"
  c_info "GM/注册账号: $SOAP_LOGIN   密码: $SOAP_PASSWORD"
  return 0
}
wz_maps(){
  echo; echo "--- ⑥ 地图数据 ---"
  if docker volume inspect ac-client-data >/dev/null 2>&1; then
    c_info "地图数据卷(ac-client-data)已存在"
  else
    c_warn "未检测到地图数据卷，是否现在拉取？(y/N)"
    if confirm "拉取地图? [y/N]: " "y"; then import_maps; else c_info "可稍后在『3 配置与维护 → 导入地图』中拉取"; fi
  fi
  return 0
}

# ---------- 3 配置与维护 ----------
maintain_menu(){
  require_workdir || return 1
  while true; do
    echo; echo "=== 3 配置与维护 ==="
    echo "1) 导入地图（检测 + 重拉，约 1.2GiB）"
    echo "2) 导入配置（备份 ./env/dist/etc + 重跑 ac-extra-config，变量不冲关键配置）"
    echo "3) 重跑 db-import"
    echo "4) 完整重部署（拉最新镜像 + 重建，保留数据）"
    echo "q) 返回主菜单"
    local c; c="$(ask '维护> ')"; case "$c" in
      1) import_maps;;
      2) import_config;;
      3) rerun_db_import;;
      4) full_redeploy;;
      q|Q) break;;
      *) c_warn "无效选择";;
    esac
  done
}
import_maps(){
  c_info "拉取地图数据（ac-client-data-init，写入命名卷 ac-client-data，约 1.2GiB）..."
  docker compose up ac-client-data-init
  c_ok "地图数据已导入（卷 ac-client-data）"
}
import_config(){
  c_warn "重拉配置：仅 worldserver.conf / playerbots.conf / mod_item_affixes.conf 被覆盖重写；其余官方默认配置不受影响。"
  c_warn "关键配置(SOAP 等)由持久化 .env 变量注入，重拉后保持一致、不冲。"
  local bk="./env/dist/etc.bak.$(date +%s)"
  mkdir -p ./env/dist
  cp -a ./env/dist/etc "$bk" 2>/dev/null && c_ok "已备份到 $bk" || c_warn "备份失败（可能尚未生成配置）"
  docker compose rm -f ac-extra-config >/dev/null 2>&1 || true
  docker compose up ac-extra-config
  c_ok "配置已重拉。worldserver 需重启(4.2)或热重载(4.1)生效。"
}
rerun_db_import(){ c_info "重跑 db-import ..."; docker compose up ac-db-import; c_ok "完成"; }
full_redeploy(){ c_info "完整重部署：拉最新镜像并重建（保留数据卷）..."; pull_with_eta; docker compose up -d; c_ok "完成"; }

# ---------- 4 服务操作 ----------
svc_menu(){
  require_workdir || return 1
  while true; do
    echo; echo "=== 4 服务操作 ==="
    echo "1) 热重载配置（.reload config）"
    echo "2) 重启 worldserver（智能：已停则启动）"
    echo "3) 停止服务"
    echo "4) 查看状态"
    echo "5) 查看日志（最近 200 行）"
    echo "q) 返回主菜单"
    local c; c="$(ask '服务> ')"; case "$c" in
      1) svc_reload;;
      2) svc_restart_world;;
      3) svc_stop;;
      4) svc_status;;
      5) svc_logs;;
      q|Q) break;;
      *) c_warn "无效选择";;
    esac
  done
}
svc_reload(){
  c_info "尝试热重载配置（.reload config）..."
  if docker compose exec -T ac-worldserver acore reload config >/dev/null 2>&1; then
    c_ok "已发送 reload config"
  else
    c_warn "自动 reload 失败；请手动进入 worldserver 控制台执行： .reload config"
  fi
}
svc_restart_world(){
  if docker compose ps ac-worldserver 2>/dev/null | grep -q 'running'; then
    c_info "worldserver 正在运行，重启..."; docker compose restart ac-worldserver
  else
    c_info "worldserver 未运行，启动..."; docker compose up -d ac-worldserver
  fi
  c_ok "完成"
}
svc_stop(){ c_warn "将停止全部服务（数据保留，可用 4.2 重新启动）..."; docker compose stop; c_ok "已停止"; }
svc_status(){ docker compose ps; }
svc_logs(){ docker compose logs --tail=200 ac-worldserver; c_info "实时日志: docker compose logs -f ac-worldserver"; }

# ---------- 5 凭据管理 ----------
creds_menu(){
  require_workdir || return 1
  while true; do
    echo; echo "=== 5 凭据管理 ==="
    echo "1) 改 SOAP_LOGIN / 注册·GM 账号名"
    echo "2) 改 SOAP_PASSWORD / 注册·GM 密码"
    echo "3) 改数据库 root 密码"
    echo "4) 查找历史安装位置"
    echo "5) 账号管理（新建普通 / 新建 GM 带等级 / 改 GM 等级）"
    echo "q) 返回主菜单"
    local c; c="$(ask '凭据> ')"; case "$c" in
      1) change_soap_login;;
      2) change_soap_pass;;
      3) change_db_pass;;
      4) find_history_menu;;
      5) account_mgmt;;
      q|Q) break;;
      *) c_warn "无效选择";;
    esac
  done
}
change_soap_login(){
  local v; v="$(ask '新 SOAP/GM 账号名: ')"; [ -z "$v" ] && return
  SOAP_LOGIN="$v"
  set_env SOAP_LOGIN "$SOAP_LOGIN"
  printf 'SOAP_LOGIN=%s\nSOAP_PASSWORD=%s\n' "$SOAP_LOGIN" "$SOAP_PASSWORD" > "$SOAP_CREDS" && chmod 600 "$SOAP_CREDS"
  c_ok "已更新。需重拉配置(3.2)+重启worldserver(4.2)生效；Cloudflare 后台 SOAP_LOGIN 也须同步。"
}
change_soap_pass(){
  local v; v="$(ask_s '新 SOAP/GM 密码: ')"; [ -z "$v" ] && return
  SOAP_PASSWORD="$v"
  set_env SOAP_PASSWORD "$SOAP_PASSWORD"
  printf 'SOAP_LOGIN=%s\nSOAP_PASSWORD=%s\n' "$SOAP_LOGIN" "$SOAP_PASSWORD" > "$SOAP_CREDS" && chmod 600 "$SOAP_CREDS"
  c_ok "已更新本地。需重拉配置(3.2)+重启(4.2)；Cloudflare 后台 SOAP_PASSWORD 须设为同一值，注册接口才通过。"
}
change_db_pass(){
  local v; v="$(ask_s '新数据库 root 密码: ')"; [ -z "$v" ] && return
  DB_PW="$v"
  set_env DOCKER_DB_ROOT_PASSWORD "$DB_PW"
  printf '%s' "$DB_PW" > "$DB_CREDS" && chmod 600 "$DB_CREDS"
  c_ok "已更新 .env。需重启数据库服务生效（docker compose restart ac-database）。"
}
find_history_menu(){
  if find_history; then c_ok "历史安装位于: $HISTORY_DIR"; else c_warn "未发现历史安装"; fi
}
account_mgmt(){
  while true; do
    echo; echo "=== 5.5 账号管理 ==="
    echo "a) 新建普通账号"
    echo "b) 新建 GM 账号（带等级）"
    echo "c) 修改某账号 GM 等级"
    echo "q) 返回"
    local c n p l
    c="$(ask '账号> ')"; case "$c" in
      a)
        n="$(ask '账号名: ')"; p="$(ask_s '密码: ')"
        docker compose exec -T ac-worldserver acore account create "$n" "$p" && c_ok "已建" || c_err "失败"
        ;;
      b)
        n="$(ask '账号名: ')"; p="$(ask_s '密码: ')"; l="$(ask 'GM 等级(1-3): ')"
        docker compose exec -T ac-worldserver acore account create "$n" "$p"
        docker compose exec -T ac-worldserver acore account set gmlevel "$n" "$l" && c_ok "已建 GM($l)" || c_err "失败"
        ;;
      c)
        n="$(ask '账号名: ')"; l="$(ask '新 GM 等级(1-3): ')"
        docker compose exec -T ac-worldserver acore account set gmlevel "$n" "$l" && c_ok "已改($l)" || c_err "失败"
        ;;
      q|Q) break;;
      *) c_warn "无效选择";;
    esac
  done
}

# ---------- 公共：拉取（带进度/ETA） ----------
pull_with_eta(){
  local start end
  start=$(date +%s)
  c_info "开始拉取镜像（docker 原生进度含实时 ETA）..."
  docker compose pull
  end=$(date +%s)
  c_ok "拉取完成，用时 $((end-start)) 秒"
}

# ---------- 主菜单 ----------
show_main(){
  echo; echo "========== AzerothCore-OK 管理菜单 =========="
  echo " 1) 网络设置    2) 安装向导    3) 配置与维护"
  echo " 4) 服务操作    5) 凭据管理    q) 退出"
  echo " 部署目录: $WORK_DIR"
}
menu_loop(){
  while true; do
    show_main
    local c; c="$(ask '请选择: ')"; case "$c" in
      1) net_menu;;
      2) run_wizard;;
      3) maintain_menu;;
      4) svc_menu;;
      5) creds_menu;;
      q|Q|quit|exit) c_info "再见"; break;;
      *) c_warn "无效选择";;
    esac
  done
}

main(){
  if [ -z "$WORKER_BASE" ] || echo "$WORKER_BASE" | grep -q "REPLACE_WORKER_BASE"; then
    c_err "WORKER_BASE 仍是占位符：请在 deploy/wrangler.toml 的 [vars] 把 WORKER_BASE 改成真实 Worker 地址后重新构建部署。"
    exit 1
  fi
  if [ -t 0 ] || [ -t 1 ]; then
    # 交互运行（本地 bash acok.sh 或 curl|bash 在终端）：先探测历史安装以便后续操作定位 WORK_DIR
    find_history && WORK_DIR="${HISTORY_DIR:-$WORK_DIR}" && load_creds "$WORK_DIR" || true
    menu_loop
  else
    c_info "检测到非交互运行（无终端），直接进入安装向导..."
    run_wizard
  fi
}

if [ "${BASH_SOURCE[0]}" = "$0" ] || [ -z "${BASH_SOURCE[0]}" ]; then
  main "$@"
fi
