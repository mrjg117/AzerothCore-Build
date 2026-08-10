#!/usr/bin/env bash
# ============================================================
# 部署控制台（在部署机上运行）
# ------------------------------------------------------------
# 安装：从 Cloudflare Pages 复制下面这一行，粘贴到部署机终端运行
#   curl -fsSL <BASE_URL>/deploy-console.sh -o deploy-console.sh && bash deploy-console.sh <BASE_URL>
# 说明：
#   * 脚本会从 <BASE_URL>（即 Pages 站点）现拉部署所需的几个文件，
#     不进 git、不手动打包；官方编排文件也由 Pages 在构建时从上游现拉。
#   * 首次运行自动生成 .env（从 .env.example 拷），并交互填写关键项。
#   * 之后就是一个交互式菜单控制台，支持一键部署 / 更新配置 / 重下地图 /
#     启停 / 状态日志 / 下载补丁 等。
# ============================================================
[ -z "${1:-}" ] && { echo "用法: bash deploy-console.sh <Pages_BASE_URL>"; exit 1; }
BASE_URL="$1"
WORK_DIR="$PWD"

# 部署机需要的运行时文件（从 Pages 现拉，官方文件由 Pages 构建时已从上游拉好）
FILES=(docker-compose.yml docker-compose.override.yml .env.example inject-config.sh)

echo "==> 工作目录: $WORK_DIR"
echo "==> 来源: $BASE_URL"
echo "==> 自检：下载部署文件"
for f in "${FILES[@]}"; do
  if [ -f "$f" ]; then
    echo "    [已存在] $f"
  else
    echo "    [下载]   $f"
    curl -fsSL -o "$f" "$BASE_URL/$f" || { echo "下载 $f 失败"; exit 1; }
  fi
done

# .env 不存在则从模板生成
if [ ! -f .env ]; then
  cp .env.example .env
  echo "==> 已生成 .env（可菜单 [7] 填写，或直接编辑该文件）"
fi

# ---------- 交互填写 .env 关键项 ----------
edit_env() {
  local key="$1" prompt="$2" cur
  cur="$(grep -E "^${key}=" .env 2>/dev/null | tail -1 | cut -d= -f2-)"
  read -rp "  $prompt ${cur:+[当前:$cur]} : " val
  val="${val:-$cur}"
  if grep -qE "^${key}=" .env; then
    sed -i "s|^${key}=.*|${key}=${val}|" .env
  else
    printf '%s=%s\n' "$key" "$val" >> .env
  fi
  echo "    -> $key=$val"
}

configure() {
  echo "==> 交互填写 .env（回车保留当前值）"
  edit_env IMAGE_TAG           "镜像 tag（或留 latest）"
  edit_env TCR_NS              "TCR 命名空间"
  edit_env DOCKER_DB_ROOT_PASSWORD "数据库 root 密码"
  edit_env SOAP_PASSWORD       "注册服务 SOAP 密码（须与 worldserver 一致）"
  edit_env REALM_ADDRESS       "对外 realm 地址"
  echo "==> 已保存 .env"
}

dc() { docker compose "$@"; }

pause() { read -rp "按回车返回菜单..." _; }

while true; do
  clear
  echo "=================================================="
  echo "        AzerothCore 部署控制台"
  echo "        目录: $WORK_DIR"
  echo "=================================================="
  echo "  1) 一键部署        pull 全部镜像 + up -d"
  echo "  2) 更新配置        重拉 ac-extra-config + 注入 + 重启 worldserver"
  echo "  3) 重新下地图      重拉 ac-maps + 重建 client-data-init + 重启 worldserver"
  echo "  4) 启 / 停 / 重启  服务控制"
  echo "  5) 状态 / 日志     查看运行态与日志"
  echo "  6) 编辑 .env       交互填写关键项"
  echo "  7) 下载玩家补丁    批量下分卷并合并到本地 patches-client/"
  echo "  0) 退出"
  echo "--------------------------------------------------"
  read -rp "选择: " c
  case "$c" in
    1)
      echo "==> [1] 一键部署"
      dc pull
      dc up -d
      echo ""
      echo "提示：首次部署后需建一个 gmlevel=1 的 webreg 账号供注册页 SOAP 调用："
      echo "  dc exec ac-worldserver acore account create webreg <密码> 1"
      pause
      ;;
    2)
      echo "==> [2] 更新配置（重拉配置镜像 + 注入 + 重启 worldserver）"
      dc pull ac-extra-config
      bash inject-config.sh
      dc restart ac-worldserver
      pause
      ;;
    3)
      echo "==> [3] 重新下地图（重拉 ac-maps + 重建 client-data-init + 重启 worldserver）"
      dc pull ac-maps
      dc up -d --force-recreate ac-client-data-init
      dc restart ac-worldserver
      pause
      ;;
    4)
      while true; do
        echo "---- 服务控制 ----"
        echo "  a) 全部启动   b) 全部停止   c) 全部重启   d) 仅重启 worldserver   e) 返回"
        read -rp "  > " s
        case "$s" in
          a) dc up -d ;;
          b) dc down ;;
          c) dc restart ;;
          d) dc restart ac-worldserver ;;
          e) break ;;
          *) echo "  无效" ;;
        esac
      done
      ;;
    5)
      echo "==> 状态"
      dc ps
      echo ""
      echo "==> worldserver 最近 60 行日志"
      dc logs --tail=60 ac-worldserver 2>/dev/null || true
      pause
      ;;
    6) configure ;;
    7)
      echo "==> [7] 下载玩家补丁（分卷）"
      curl -fsSL -o download-patches.sh "$BASE_URL/download-patches.sh" \
        || { echo "下载 download-patches.sh 失败"; pause; continue; }
      bash download-patches.sh "$BASE_URL" patches-client
      pause
      ;;
    0) echo "退出。文件都在 $WORK_DIR，可随时再来：bash deploy-console.sh $BASE_URL"; exit 0 ;;
    *) echo "无效选择" ;;
  esac
done
