# 构建上下文 = 仓库根目录（需要 COPY client-patches 烤进静态目录）
FROM node:18-alpine
WORKDIR /app
COPY web/wotlk-web/package*.json ./
RUN npm install --omit=dev
COPY web/wotlk-web/ ./
# 客户端补丁按模组分子目录，烤进静态目录供注册成功页下载
COPY client-patches ./static/patches
EXPOSE 8080
CMD ["node", "server.js"]
