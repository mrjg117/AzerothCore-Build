#!/usr/bin/env bash
# 把 /confs 下的配置（按模组分子目录存放）扁平导出到 /out（部署机挂到 ./env/dist/etc）。
# 利用 __SOAP_PASSWORD__ 占位符在注入时由环境变量替换，避免秘密写死进镜像。
# AC 的 etc/ 是扁平目录，所有模块配置都和 worldserver.conf 同目录加载，
# 因此这里把子目录里的 *.conf 全部拍平到 /out。
set -e
# 安全：禁止弱默认密码。必须显式配置 SOAP_PASSWORD（与 Cloudflare Worker 端一致），
# 否则拒绝启动，避免部署方忘记设环境变量时世界服使用可猜测的密码。
if [ -z "${SOAP_PASSWORD:-}" ]; then
  echo "ERROR: 未设置 SOAP_PASSWORD。为安全起见拒绝使用弱默认密码，" >&2
  echo "       请在部署环境变量中显式配置 SOAP_PASSWORD（与 Cloudflare Worker 端的 SOAP_PASSWORD 一致）。" >&2
  exit 1
fi
mkdir -p /out
while IFS= read -r f; do
  [ -f "$f" ] || continue
  name=$(basename "$f")
  sed "s/__SOAP_PASSWORD__/$SOAP_PASSWORD/g" "$f" > "/out/$name"
done < <(find /confs -type f -name '*.conf')
echo "Injected configs into /out:"
ls -1 /out
