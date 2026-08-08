# ============================================================
# AzerothCore 构建 —— 一切走官方
# ------------------------------------------------------------
# ・Builder 用官方 azerothcore/ac 镜像：工具链（clang/cmake/boost/mysql）
#   完全由官方提供，编出的核心与官方 ./acore.sh docker build 逐字一致。
# ・CMake 旗标与官方 wiki 对齐：
#     clang / TOOLS_BUILD=all / SCRIPTS=static / MODULES=static
# ・源码与 43 模组在编译期从官方仓库拉取（不锁 commit，遵循项目决策）。
# ・成品镜像由 .github/workflows/build.yml 推到腾讯云 TCR。
# ============================================================

# ---------- Stage 1: 官方编译环境 ----------
FROM azerothcore/ac:master AS builder

# 官方 ac 镜像已含完整工具链；仅补 git 用于拉取源码与模组
RUN apt-get update \
 && apt-get install -y --no-install-recommends git \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /src

# 拉取官方 AzerothCore 源码（azerothcore-wotlk = 官方主仓）
RUN git clone --depth 1 https://github.com/azerothcore/azerothcore-wotlk.git ac

# 拉取 43 个模组到 modules/（MODULES=static 会自动静态编入核心）
COPY build/modules.txt /src/ac/modules.txt
RUN cd /src/ac && while read -r line; do \
      case "$line" in \
        ''|\#*) continue ;; \
      esac; \
      name=$(basename "$line" .git); \
      git clone --depth 1 "$line" "modules/$name"; \
    done < modules.txt

# 官方 CMake 配置 + 编译（旗标与官方 wiki 逐字一致）
RUN cd /src/ac && mkdir -p build && cd build && \
    cmake ../ \
      -DCMAKE_C_COMPILER=clang \
      -DCMAKE_CXX_COMPILER=clang++ \
      -DTOOLS_BUILD=all \
      -DSCRIPTS=static \
      -DMODULES=static \
      -DWITH_WARNINGS=0 \
    && make -j "$(nproc)"

# ---------- Stage 2: 精简运行环境 ----------
# 与官方 azerothcore-wotlk 运行时同构（debian + 运行期库）
FROM debian:bookworm-slim AS runtime

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
      libmariadb3 libssl3 zlib1g libbz2-1.0 ca-certificates wget \
 && rm -rf /var/lib/apt/lists/*

# 复制编译产物：二进制 + 配置模板（.conf.dist）
COPY --from=builder /src/ac/build/bin /azerothcore/bin
COPY --from=builder /src/ac/build/etc /azerothcore/etc

WORKDIR /azerothcore

# 生成可读配置（从 .dist 复制；具体值由运行时挂载的 conf 覆盖，不烤进镜像）
RUN cp -n etc/worldserver.conf.dist etc/worldserver.conf 2>/dev/null || true; \
    cp -n etc/authserver.conf.dist etc/authserver.conf 2>/dev/null || true

# 默认启动 worldserver；authserver 与数据提取工具在 compose / 手动调用
CMD ["/azerothcore/bin/worldserver"]

# 注：若 worldserver 因缺少某个 .so 启动失败，二选一：
#   1) 在上面 apt-get 安装列表补对应库；
#   2) 将本 stage 基础镜像改为 FROM azerothcore/ac:master（自带全部依赖，体积更大）。
