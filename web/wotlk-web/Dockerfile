# 构建上下文 = 仓库根目录
FROM node:18-alpine

WORKDIR /app

COPY web/wotlk-web/package*.json ./
RUN npm install --omit=dev

# 仅拷注册页源码（注册页不再打包/提供客户端补丁；
# 玩家补丁改由 Cloudflare Pages 分卷分发，见 deploy/download-patches.sh）
COPY web/wotlk-web/ ./

EXPOSE 8080
CMD ["node", "server.js"]
