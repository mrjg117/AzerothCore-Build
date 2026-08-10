#!/usr/bin/env bash
# 把 /confs 下的配置导出到 /out（部署机挂到 ./env/dist/etc）。
# 利用 __SOAP_PASSWORD__ 占位符在注入时由环境变量替换，避免秘密写死进镜像。
set -e
SOAP_PASSWORD="${SOAP_PASSWORD:-changeMeNow123!}"
mkdir -p /out
for f in /confs/*; do
  [ -f "$f" ] || continue
  name=$(basename "$f")
  sed "s/__SOAP_PASSWORD__/$SOAP_PASSWORD/g" "$f" > "/out/$name"
done
echo "Injected configs into /out:"
ls -1 /out
