#!/usr/bin/env bash
# 把 /confs 下的配置（按模组分子目录存放）扁平导出到 /out（部署机挂到 ./env/dist/etc）。
# 通用占位符替换：配置中以 __NAME__ 包裹的键，注入时由同名环境变量 ENVIRON[NAME] 替换，
# 避免秘密/基础配置写死进镜像；重拉配置时关键值完全一致（值来自部署机持久化 .env，不随镜像变化）。
# AC 的 etc/ 是扁平目录，所有模块配置都和 worldserver.conf 同目录加载，故这里把子目录 *.conf 全部拍平到 /out。
set -e
# 安全：禁止弱默认密码。必须显式配置 SOAP_PASSWORD（与 Cloudflare Worker 端一致），否则拒绝启动。
if [ -z "${SOAP_PASSWORD:-}" ]; then
  echo "ERROR: 未设置 SOAP_PASSWORD。为安全起见拒绝使用弱默认密码，" >&2
  echo "       请在部署环境变量中显式配置 SOAP_PASSWORD（与 Cloudflare Worker 端的 SOAP_PASSWORD 一致）。" >&2
  exit 1
fi
mkdir -p /out
while IFS= read -r f; do
  [ -f "$f" ] || continue
  name=$(basename "$f")
  # 用 awk 做字面替换（按 __NAME__ 占位符切分 + 直接读 ENVIRON）：不做正则/转义解释，
  # 密码含 & / \ 等字符也不会损坏配置（规避 sed 的 & 替换陷阱与转义遗漏）。未设置的变量替换为空串。
  awk '
    {
      line = $0
      while (match(line, /__[A-Za-z0-9_]+__/)) {
        token = substr(line, RSTART, RLENGTH)
        vname = substr(token, 3, RLENGTH - 4)
        val = (vname in ENVIRON) ? ENVIRON[vname] : ""
        line = substr(line, 1, RSTART - 1) val substr(line, RSTART + RLENGTH)
      }
      print line
    }
  ' "$f" > "/out/$name"
done < <(find /confs -type f -name '*.conf')
echo "Injected configs into /out:"
ls -1 /out
