#!/usr/bin/env python3
# ============================================================
# make-client-archive.py
# ------------------------------------------------------------
# 由 client-patches/（按模组分子目录存放）生成本地客户端安装用压缩包，
# 按 WoW 客户端【路径层级】打包。玩家把压缩包解压到 WoW 客户端
# 【根目录】即可，目录结构会自动落到正确位置：
#   Data/patch-Y.mpq, Data/patch-Z.mpq            -> 客户端 Data/
#   Data/enUS/patch-enUS-*.mpq                    -> 客户端 Data/enUS/
#   Interface/AddOns/<模组名>/...                 -> 客户端 Interface/AddOns/
#
# 扫描规则（与源码布局解耦，目录改名也不影响）：
#   - 任意 *.mpq                 -> Data/（路径中含 enUS 片段则落到 Data/enUS/）
#   - 任意含 *.toc 的目录        -> 视为一个 AddOn 根，整目录归入
#                                   Interface/AddOns/<该目录名>/
#
# 输出：client-patches/patches-client.zip
# 用法：python3 build/tools/make-client-archive.py
# ============================================================
import os
import sys
import zipfile

# 本文件位于 build/tools/，向上三级即仓库根
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DIST = os.path.join(REPO, 'client-patches')
OUT = os.path.join(DIST, 'patches-client.zip')


def norm(p: str) -> str:
    """统一为 zip 内使用的正斜杠路径。"""
    return p.replace('\\', '/')


def find_mpq_items():
    items = []
    for root, _dirs, files in os.walk(DIST):
        for fn in sorted(files):
            if not fn.lower().endswith('.mpq'):
                continue
            full = os.path.join(root, fn)
            rel = os.path.relpath(full, DIST)
            parts = rel.split(os.sep)
            if 'enUS' in parts:
                dst = norm(os.path.join('Data', 'enUS', fn))
            else:
                dst = norm(os.path.join('Data', fn))
            items.append((full, dst))
    return items


def find_addon_items():
    """扫描含 .toc 的目录作为 AddOn 根，整目录打入 Interface/AddOns/<名>/。"""
    items = []
    addon_roots = set()
    for root, _dirs, files in os.walk(DIST):
        for f in files:
            if f.lower().endswith('.toc'):
                addon_roots.add(root)
                break
    for ar in sorted(addon_roots):
        name = os.path.basename(ar)
        for r, _d, fs in os.walk(ar):
            for f in sorted(fs):
                full = os.path.join(r, f)
                rel = os.path.relpath(full, ar)
                dst = norm(os.path.join('Interface', 'AddOns', name, rel))
                items.append((full, dst))
    return items


def plan():
    return find_mpq_items() + find_addon_items()


def build_readme():
    return (
        "AzerothCore 客户端补丁安装说明\n"
        "================================\n"
        "1. 关闭游戏客户端。\n"
        "2. 将本压缩包解压到魔兽世界 3.3.5a (WotLK) 客户端【根目录】。\n"
        "   目录结构已按客户端路径打包，解压后会自动落到：\n"
        "     Data/patch-Y.mpq, Data/patch-Z.mpq          （客户端 Data/ 目录）\n"
        "     Data/enUS/patch-enUS-*.mpq                  （英文客户端 Data/enUS/）\n"
        "     Interface/AddOns/<模组名>/                   （插件目录）\n"
        "3. 启动游戏，用注册页申请的账号登录即可。\n"
        "\n"
        "包含的模组（源码按模组分目录存放于 client-patches/）：\n"
        "  - mod-item-affixes           （装备词缀；需 MPQ 补丁）\n"
        "  - mod-guild-levels           （公会等级；仅 AddOn）\n"
        "  - mod-bot-inventory-master   （机器人背包；仅 AddOn）\n"
        "\n"
        "若只需单独某个插件，可到注册成功页单独下载对应 AddOn。\n"
    )


def main():
    items = plan()
    if not items:
        print('ERROR: 未找到任何可打包文件，请检查 client-patches/ 布局',
              file=sys.stderr)
        sys.exit(1)

    total_src = 0
    with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('README-安装说明.txt', build_readme())
        for src, dst in items:
            z.write(src, dst)
            total_src += os.path.getsize(src)

    size = os.path.getsize(OUT)
    print(f'OK: 生成 {OUT}')
    print(f'  条目数: {len(items)}  |  源大小: {total_src // 1024} KB  '
          f'|  压缩包: {size // 1024} KB')
    print('  ---- 路径映射 ----')
    for src, dst in items:
        print(f'  {os.path.relpath(src, DIST)}  ->  {dst}')


if __name__ == '__main__':
    main()
