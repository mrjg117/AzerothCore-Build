#!/usr/bin/env bash
# 把 /confs 下的配置（按模组分子目录存放）扁平导出到 /out（部署机挂到 ./env/dist/etc）。
# 利用 __SOAP_PASSWORD__ 占位符在注入时由环境变量替换，避免秘密写死进镜像。
# AC 的 etc/ 是扁平目录，所有模块配置都和 worldserver.conf 同目录加载，
# 因此这里把子目录里的 *.conf 全部拍平到 /out。
set -e
SOAP_PASSWORD="${SOAP_PASSWORD:-changeMeNow123!}"
mkdir -p /out
while IFS= read -r f; do
  [ -f "$f" ] || continue
  name=$(basename "$f")
  sed "s/__SOAP_PASSWORD__/$SOAP_PASSWORD/g" "$f" > "/out/$name"
done < <(find /confs -type f -name '*.conf')
echo "Injected configs into /out:"
ls -1 /out
