#!/usr/bin/env python3
# ============================================================
# make-archive.py
# ------------------------------------------------------------
# 由 client-patches/ 生成本地客户端安装用压缩包。
#
# 布局约定（数据/逻辑分离）：
#   client-patches/<模组名>/<WoW客户端根相对路径>/...
#     - 本地自定义补丁：作者直接把文件摆到「该落的 WoW 路径」下。
#     - 上游补丁：由 build.sh 按 addons.txt 克隆并摆到上述位置
#       （落位按 WoW 通用规则推导，特殊情形由列表第四列显式指定）。
#   本脚本不做任何「按扩展名/目录名识别」的判断，只做一件事：
#   去掉最外层的 <模组名>/ 前缀，把剩余路径原样写进 zip。
#   这样本地补丁与上游补丁走完全相同的打包路径，兼容一切补丁种类。
#
# 另外动态生成并写入 zip 根：
#   README-安装说明.txt   安装说明（含本包涵盖的模组列表）
#   启动器.bat            清缓存 + 写 realmlist.wtf(REALM_ADDRESS 注入) + 启动 Wow.exe
#   SOURCES.txt           溯源：每个包内文件 <- 哪个模组(client-patches/<模组>/<路径>)
#
# 输入（环境变量）：
#   PATCHES_DIR   扫描根目录，默认 <repo>/client-patches
#   ARCHIVE_OUT   输出 zip 路径，默认 <PATCHES_DIR>/patches-client.zip
#   REALM_ADDRESS 启动器写入的服务器地址，默认 play.example.com
# ============================================================
import os
import sys
import zipfile

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(SCRIPT_DIR)
DEFAULT_DIST = os.path.join(REPO, 'client-patches')

DIST = os.environ.get('PATCHES_DIR', DEFAULT_DIST)
OUT = os.environ.get('ARCHIVE_OUT', os.path.join(DIST, 'patches-client.zip'))


def norm(p: str) -> str:
    """统一为 zip 内使用的正斜杠路径。"""
    return p.replace('\\', '/')


def plan():
    """遍历 client-patches/，去掉 <模组名>/ 前缀，原样产出 (源文件, zip内路径, 模组名)。"""
    items = []
    if not os.path.isdir(DIST):
        return items
    for module in sorted(os.listdir(DIST)):
        mod_dir = os.path.join(DIST, module)
        if not os.path.isdir(mod_dir) or module.startswith('.'):
            continue
        for root, dirs, files in os.walk(mod_dir):
            # 跳过隐藏目录、.git 与 Python 缓存
            dirs[:] = [d for d in dirs
                       if not d.startswith('.') and d != '.git' and d != '__pycache__']
            for f in sorted(files):
                if f.startswith('.') or f.endswith('.pyc'):
                    continue
                full = os.path.join(root, f)
                rel = os.path.relpath(full, mod_dir)   # WoW 根相对路径
                in_zip = norm(rel)
                items.append((full, in_zip, module))
    return items


def build_readme(modules):
    lines = [
        "AzerothCore 客户端补丁安装说明",
        "================================",
        "1. 关闭游戏客户端。",
        "2. 将本压缩包解压到魔兽世界 3.3.5a (WotLK) 客户端【根目录】。",
        "   目录结构已按客户端路径打包，解压后会自动落到正确位置：",
        "     Data/<locale>/patch-*.mpq          （客户端 Data/ 下对应 locale）",
        "     Interface/AddOns/<插件名>/         （插件目录）",
        "     其它文件按原相对路径落位。",
        "3. 双击压缩包里的【启动器.bat】：自动清客户端缓存、写好服务器地址、启动游戏。",
        "   （服务器地址由运营方在打包时写入，玩家无需手动改 realmlist.wtf）",
        "4. 用注册页申请的账号登录即可。",
        "",
        "包含的模组（按模组分目录存放于 client-patches/）：",
    ]
    for m in sorted(set(modules)):
        lines.append("  - %s" % m)
    lines.append("")
    return "\n".join(lines)


def build_launcher(realm: str) -> str:
    """生成 Windows 启动器 .bat：清缓存 + 写 realmlist.wtf + 启动 Wow.exe。

    realm 来自构建期环境变量 REALM_ADDRESS（运营方在打包时填入服务器 IP/域名）。
    内容保持 ASCII，避免 GBK/UTF-8 编码问题。
    """
    r = realm.replace('"', '').strip() or 'play.example.com'
    return (
        "@echo off\r\n"
        "title AzerothCore-OK Launcher\r\n"
        "echo Clearing WoW cache...\r\n"
        "if exist Cache rmdir /s /q Cache\r\n"
        "if exist WTF\\Cache rmdir /s /q WTF\\Cache\r\n"
        "echo Setting realm address to " + r + " ...\r\n"
        "echo SET REALMLIST " + r + " > realmlist.wtf\r\n"
        "echo Launching WoW...\r\n"
        "start \"\" Wow.exe\r\n"
    )


def build_sources(items):
    lines = [
        "# 客户端补丁来源溯源",
        "# 包内路径  <-  client-patches/<模组>/<WoW根相对路径>",
        "",
    ]
    for _full, in_zip, module in sorted(items, key=lambda x: x[1]):
        lines.append("%s   <-  client-patches/%s/%s" % (in_zip, module, in_zip))
    return "\n".join(lines)


def main():
    items = plan()
    if not items:
        print('ERROR: 未找到任何可打包文件，请检查 client-patches/ 布局',
              file=sys.stderr)
        sys.exit(1)

    modules = [m for _f, _z, m in items]
    realm = os.environ.get('REALM_ADDRESS', 'play.example.com')

    total_src = 0
    with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('README-安装说明.txt', build_readme(modules))
        # 启动器：清缓存 + 写 realmlist.wtf（服务器地址由 REALM_ADDRESS 注入）
        z.writestr('启动器.bat', build_launcher(realm).encode('utf-8'))
        z.writestr('SOURCES.txt', build_sources(items))
        for src, dst, _m in items:
            z.write(src, dst)
            total_src += os.path.getsize(src)

    size = os.path.getsize(OUT)
    print('OK: 生成 %s' % OUT)
    print('  条目数: %d  |  源大小: %d KB  |  压缩包: %d KB'
          % (len(items), total_src // 1024, size // 1024))
    print('  ---- 路径映射 ----')
    for src, dst, m in items:
        print('  [%s] %s  ->  %s' % (m, os.path.relpath(src, DIST), dst))


if __name__ == '__main__':
    main()
