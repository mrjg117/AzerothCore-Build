#!/usr/bin/env bash
# 在官方 clone 目录内运行：把官方 docker-compose.yml + env.ac 与我们的配置文件
# 打成一个部署包，发到 GitHub Releases。部署机免 git，只 curl 包。
set -euo pipefail

VERSION="${1:?usage: assemble-deploy-bundle.sh <VERSION> <REPO_PATH>}"
REPO="${2:?usage: assemble-deploy-bundle.sh <VERSION> <REPO_PATH>}"

OUT="$(mktemp -d)"
# 官方文件（cwd = 官方 clone）
cp docker-compose.yml "$OUT/docker-compose.yml"
mkdir -p "$OUT/conf/dist"
cp conf/dist/env.ac "$OUT/conf/dist/env.ac"
# 我们的文件
cp "$REPO/docker-compose.override.yml" "$OUT/docker-compose.override.yml"
cp "$REPO/.env.example" "$OUT/.env.example"
cp "$REPO/scripts/inject-config.sh" "$OUT/inject-config.sh"
echo "$VERSION" > "$OUT/VERSION"

( cd "$OUT" && tar -czf "$REPO/ac-deploy-$VERSION.tar.gz" . )
echo "Bundle created: $REPO/ac-deploy-$VERSION.tar.gz"
