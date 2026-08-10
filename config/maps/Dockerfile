# ac-maps — 社区预提取地图数据烤入镜像（替换官方 client-data 镜像）
#
# 数据源：github.com/wowgaming/client-data（AC 圈公认；build-maps.yml 下载其
#         Release 的 Data.zip，解压到本目录的 data/ 下再构建）。
#
# 契约（与官方 client-data target 对齐）：
#   官方 ac-client-data-init 服务把命名卷 ac-client-data 挂载到
#   /azerothcore/env/dist/data（读写），本镜像启动后把 /ac-maps-data 下的
#   数据 cp 进该卷，随后退出；ac-worldserver 再以 :ro 读同一卷。
#   故本 Dockerfile 只需把数据放到镜像内 /ac-maps-data/，cp 动作在 CMD 完成。

FROM alpine:3.20
RUN apk add --no-cache bash
COPY data/ /ac-maps-data/
CMD ["sh", "-c", "cp -r /ac-maps-data/. /azerothcore/env/dist/data/ && echo '[ac-maps] client data copied into volume'"]
