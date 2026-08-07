FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# 安装依赖
RUN apt-get update && apt-get install -y \
    git \
    clang \
    cmake \
    make \
    libmysqlclient-dev \
    libssl-dev \
    libbz2-dev \
    libreadline-dev \
    libncurses-dev \
    libboost-all-dev \
    mysql-client \
    p7zip-full \
    wget \
    patch \
    aria2 \
    && rm -rf /var/lib/apt/lists/*

# 克隆 AzerothCore
WORKDIR /azerothcore
RUN git clone --depth 1 --branch master https://github.com/azerothcore/azerothcore-wotlk.git .

# 克隆模组
COPY modules.txt /tmp/modules.txt
RUN while IFS= read -r module; do \
    if [ -n "$module" ] && [[ ! "$module" =~ ^# ]]; then \
    echo "Cloning $module..."; \
    git clone --depth 1 "$module" modules/$(basename "$module" .git); \
    fi \
    done < /tmp/modules.txt

# 复制补丁目录
COPY patches/ /tmp/patches/

# 应用代码补丁（编译前）
RUN echo "Applying code patches..." && \
    for module_dir in /tmp/patches/*/; do \
        module_name=$(basename "$module_dir"); \
        if [ "$module_name" != "global" ] && [ -d "/azerothcore/modules/$module_name" ]; then \
            echo "Patching module: $module_name"; \
            for patch_file in "$module_dir"*.patch "$module_dir"*.diff; do \
                if [ -f "$patch_file" ]; then \
                    echo "  Applying: $(basename $patch_file)"; \
                    cd "/azerothcore/modules/$module_name" && patch -p1 < "$patch_file" || true; \
                fi \
            done; \
        fi; \
    done

# 编译
RUN mkdir build && cd build && \
    cmake ../ \
    -DCMAKE_INSTALL_PREFIX=/azerothcore/env/dist \
    -DCMAKE_C_COMPILER=clang \
    -DCMAKE_CXX_COMPILER=clang++ \
    -DWITH_WARNINGS=0 \
    -DTOOLS_BUILD=all \
    -DSCRIPTS=static \
    -DMODULES=static && \
    make -j$(nproc) && \
    make install

# 设置工作目录
WORKDIR /azerothcore/env/dist

# 复制配置文件
RUN cp etc/authserver.conf.dist etc/authserver.conf && \
    cp etc/worldserver.conf.dist etc/worldserver.conf

# 应用配置补丁（编译后）
RUN echo "Applying config patches..." && \
    for module_dir in /tmp/patches/*/; do \
        module_name=$(basename "$module_dir"); \
        if [ "$module_name" != "global" ] && [ -d "/azerothcore/modules/$module_name" ]; then \
            for conf_file in "$module_dir"*.conf; do \
                if [ -f "$conf_file" ]; then \
                    echo "  Copying config: $(basename $conf_file)"; \
                    cp "$conf_file" etc/; \
                fi \
            done; \
        fi; \
    done && \
    for conf_file in /tmp/patches/global/*.conf; do \
        if [ -f "$conf_file" ]; then \
            echo "  Copying global config: $(basename $conf_file)"; \
            cp "$conf_file" etc/; \
        fi \
    done

# 清理补丁临时文件
RUN rm -rf /tmp/patches

# 暴露端口
EXPOSE 3724 8085 8086

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
