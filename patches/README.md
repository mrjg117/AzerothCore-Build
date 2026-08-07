# 模组补丁目录

此目录用于存放模组的代码补丁和配置补丁。

## 目录结构

```
patches/
├── mod-playerbots/           # 模组名称（与 modules.txt 中的名称对应）
│   ├── fix-something.patch   # 代码补丁（.patch 或 .diff）
│   └── mod-playerbots.conf   # 配置覆盖
├── mod-transmog/
│   └── custom-config.conf
└── global/                   # 全局配置（不针对特定模组）
    └── worldserver.conf
```

## 代码补丁

代码补丁会在模组克隆后、编译前应用。

### 生成补丁

```bash
# 在模组目录中修改代码后
cd modules/mod-playerbots
git diff > ../../patches/mod-playerbots/fix-something.patch
```

### 应用规则

- 补丁文件格式：`.patch` 或 `.diff`
- 应用方式：`patch -p1 < patchfile`
- 应用时机：编译前
- 失败处理：补丁应用失败不会中断构建（`|| true`）

## 配置补丁

配置补丁会在编译后复制到服务器的 `etc/` 目录。

### 使用场景

- 覆盖模组的默认配置
- 修改服务器全局配置
- 自定义参数设置

### 应用规则

- 配置文件格式：`.conf`
- 应用时机：编译后
- 目标位置：`/azerothcore/env/dist/etc/`
- 覆盖方式：直接覆盖同名文件

## 示例

### 1. 修改 mod-playerbots 的 AI 行为

```bash
# 创建补丁目录
mkdir -p patches/mod-playerbots

# 修改代码后生成补丁
cd modules/mod-playerbots
# ... 修改代码 ...
git diff > ../../patches/mod-playerbots/ai-fix.patch
```

### 2. 覆盖模组配置

```bash
# 复制并修改配置文件
cp modules/mod-playerbots/mod-playerbots.conf.dist patches/mod-playerbots/mod-playerbots.conf
# 编辑 patches/mod-playerbots/mod-playerbots.conf
```

### 3. 全局配置覆盖

```bash
# 覆盖 worldserver.conf
cp env/dist/etc/worldserver.conf.dist patches/global/worldserver.conf
# 编辑 patches/global/worldserver.conf
```

## 注意事项

1. 补丁目录名称必须与 `modules.txt` 中的模组名称一致
2. 代码补丁使用 `patch -p1` 应用，确保补丁格式正确
3. 配置补丁会完全覆盖同名文件，不是合并
4. `global/` 目录用于不针对特定模组的全局配置
5. 修改补丁后需要重新触发构建才能生效
