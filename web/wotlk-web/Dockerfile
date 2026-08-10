# 构建上下文 = 仓库根目录（需要 COPY client-patches 与 scripts 烤进镜像）
FROM node:18-alpine

# 补丁整包在构建时现场打包，需要 python3（仅用标准库，无需 pip 安装依赖）
RUN apk add --no-cache python3 bash

WORKDIR /app

COPY web/wotlk-web/package*.json ./
RUN npm install --omit=dev

COPY web/wotlk-web/ ./

# 客户端补丁按模组分子目录，烤进静态目录（既作整包打包源，也供单 AddOn 下载）
COPY client-patches ./static/patches

# 打包脚本
COPY scripts ./scripts

# 现场把 client-patches 按 WoW 客户端路径层级打成 patches-client.zip（仓库不存该 zip）
# 扫描 /app/static/patches，输出 /app/static/patches/patches-client.zip，注册成功页直接提供下载
RUN PATCHES_DIR=/app/static/patches python3 /app/scripts/make-client-archive.py

EXPOSE 8080
CMD ["node", "server.js"]
