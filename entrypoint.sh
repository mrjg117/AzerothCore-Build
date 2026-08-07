#!/bin/bash
set -e

echo "Waiting for MySQL..."
for i in $(seq 1 60); do
    if mysqladmin ping -h db -u root -p"$MYSQL_ROOT_PASSWORD" --silent 2>/dev/null; then
        echo "MySQL is ready!"
        break
    fi
    echo "Waiting... ($i/60)"
    sleep 2
done

# 初始化数据库（仅首次运行）
if [ ! -f /azerothcore/env/dist/.initialized ]; then
    echo "Initializing database..."
    
    # 创建数据库
    mysql -h db -u root -p"$MYSQL_ROOT_PASSWORD" <<EOF
CREATE DATABASE IF NOT EXISTS acore_auth DEFAULT CHARACTER SET utf8mb4;
CREATE DATABASE IF NOT EXISTS acore_characters DEFAULT CHARACTER SET utf8mb4;
CREATE DATABASE IF NOT EXISTS acore_world DEFAULT CHARACTER SET utf8mb4;
EOF
    
    cd /azerothcore/env/dist
    
    # 1. 导入 AzerothCore 基础 SQL
    echo "Importing base SQL..."
    if [ -d "data/sql/base" ]; then
        for sql in data/sql/base/auth_*.sql; do
            [ -f "$sql" ] && mysql -h db -u root -p"$MYSQL_ROOT_PASSWORD" acore_auth < "$sql"
        done
        for sql in data/sql/base/characters_*.sql; do
            [ -f "$sql" ] && mysql -h db -u root -p"$MYSQL_ROOT_PASSWORD" acore_characters < "$sql"
        done
        for sql in data/sql/base/world_*.sql; do
            [ -f "$sql" ] && mysql -h db -u root -p"$MYSQL_ROOT_PASSWORD" acore_world < "$sql"
        done
    fi
    
    # 2. 导入模组 SQL
    echo "Importing module SQL..."
    for module_dir in /azerothcore/modules/*/; do
        if [ -d "$module_dir" ]; then
            module_name=$(basename "$module_dir")
            echo "  Processing module: $module_name"
            
            for sql in "$module_dir"data/sql/updates/world_*.sql \
                       "$module_dir"sql/updates/world_*.sql \
                       "$module_dir"data/sql/base/world_*.sql \
                       "$module_dir"sql/base/world_*.sql; do
                if [ -f "$sql" ]; then
                    echo "    Importing: $(basename $sql)"
                    mysql -h db -u root -p"$MYSQL_ROOT_PASSWORD" acore_world < "$sql" 2>/dev/null || true
                fi
            done
        fi
    done
    
    # 3. 应用用户自定义补丁 SQL
    echo "Applying custom patches..."
    if [ -d "sql/patches" ] && [ "$(ls -A sql/patches/*.sql 2>/dev/null)" ]; then
        for sql in sql/patches/*.sql; do
            echo "  Applying patch: $(basename $sql)"
            case "$(basename $sql)" in
                auth_*)
                    mysql -h db -u root -p"$MYSQL_ROOT_PASSWORD" acore_auth < "$sql" 2>/dev/null || true
                    ;;
                characters_*)
                    mysql -h db -u root -p"$MYSQL_ROOT_PASSWORD" acore_characters < "$sql" 2>/dev/null || true
                    ;;
                world_*)
                    mysql -h db -u root -p"$MYSQL_ROOT_PASSWORD" acore_world < "$sql" 2>/dev/null || true
                    ;;
                *)
                    mysql -h db -u root -p"$MYSQL_ROOT_PASSWORD" acore_world < "$sql" 2>/dev/null || true
                    ;;
            esac
        done
    fi
    
    touch /azerothcore/env/dist/.initialized
    echo "Initialization complete!"
fi

# 下载/同步地图数据（按优先级）
DATA_DIR="/azerothcore/env/dist/data"
if [ "${CLIENT_DATA_URL:-}" != "none" ]; then
    if [ ! -f "$DATA_DIR/.data_ready" ]; then
        mkdir -p "$DATA_DIR"
        DATA_READY=0
        
        # 优先级1: 本地挂载
        if [ -d "/data/maps" ] && [ "$(ls -A /data/maps 2>/dev/null)" ]; then
            echo "Using mounted map data..."
            cp -r /data/maps "$DATA_DIR/"
            cp -r /data/vmaps "$DATA_DIR/" 2>/dev/null || true
            cp -r /data/mmaps "$DATA_DIR/" 2>/dev/null || true
            cp -r /data/dbc "$DATA_DIR/" 2>/dev/null || true
            cp -r /data/cameras "$DATA_DIR/" 2>/dev/null || true
            DATA_READY=1
        fi
        
        # 优先级2: 网盘地址（多线程下载）
        if [ "$DATA_READY" -eq 0 ] && [ -n "${CLIENT_DATA_URL:-}" ]; then
            echo "Downloading map data from: $CLIENT_DATA_URL"
            echo "Using aria2c multi-threaded download..."
            aria2c -x 16 -s 16 -k 1M --continue=true -d /tmp -o client-data.7z "$CLIENT_DATA_URL"
            echo "Extracting..."
            7z x -o"$DATA_DIR" /tmp/client-data.7z -y
            rm -f /tmp/client-data.7z
            DATA_READY=1
        fi
        
        # 优先级3: 地图数据镜像
        if [ "$DATA_READY" -eq 0 ] && [ -n "${DATA_IMAGE:-}" ]; then
            echo "Pulling map data from image: $DATA_IMAGE"
            docker pull "$DATA_IMAGE"
            docker create --name temp-data "$DATA_IMAGE"
            docker cp temp-data:/data/. "$DATA_DIR/"
            docker rm temp-data
            DATA_READY=1
        fi
        
        # 优先级4: GitHub 下载
        if [ "$DATA_READY" -eq 0 ]; then
            echo "Downloading map data from GitHub (wowgaming/client-data)..."
            LATEST_URL=$(wget -qO- https://api.github.com/repos/wowgaming/client-data/releases/latest | grep "browser_download_url.*7z" | head -1 | cut -d '"' -f 4)
            if [ -n "$LATEST_URL" ]; then
                echo "  URL: $LATEST_URL"
                aria2c -x 16 -s 16 -k 1M --continue=true -d /tmp -o client-data.7z "$LATEST_URL"
                echo "Extracting..."
                7z x -o"$DATA_DIR" /tmp/client-data.7z -y
                rm -f /tmp/client-data.7z
                DATA_READY=1
            else
                echo "  WARNING: Could not find client data download URL. Skipping."
            fi
        fi
        
        if [ "$DATA_READY" -eq 1 ]; then
            touch "$DATA_DIR/.data_ready"
            echo "Map data ready!"
        fi
    fi
fi

# 配置数据库连接
cd /azerothcore/env/dist/etc
sed -i "s/127.0.0.1;3306;root;123456;acore_auth/db;3306;root;$MYSQL_ROOT_PASSWORD;acore_auth/" authserver.conf
sed -i "s/127.0.0.1;3306;root;123456;acore_auth/db;3306;root;$MYSQL_ROOT_PASSWORD;acore_auth/" worldserver.conf
sed -i "s/127.0.0.1;3306;root;123456;acore_characters/db;3306;root;$MYSQL_ROOT_PASSWORD;acore_characters/" worldserver.conf
sed -i "s/127.0.0.1;3306;root;123456;acore_world/db;3306;root;$MYSQL_ROOT_PASSWORD;acore_world/" worldserver.conf

# 配置服务器地址（如果设置了）
if [ -n "${SERVER_ADDRESS:-}" ]; then
    sed -i "s/BindIP = \"0.0.0.0\"/BindIP = \"${SERVER_ADDRESS}\"/" authserver.conf 2>/dev/null || true
fi

if [ -n "${SERVER_NAME:-}" ]; then
    sed -i "s/RealmName = .*/RealmName = \"${SERVER_NAME}\"/" worldserver.conf 2>/dev/null || true
fi

# 启动服务
cd /azerothcore/env/dist
echo "Starting authserver..."
./authserver &
AUTH_PID=$!

sleep 3

echo "Starting worldserver..."
./worldserver
