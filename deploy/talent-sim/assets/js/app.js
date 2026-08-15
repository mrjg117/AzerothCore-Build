/* 巫妖王之怒 3.3.5a 天赋模拟器 — 核心逻辑 */
(function () {
  "use strict";

  // ---------- 资源版本戳 ----------
  // 与 deploy/index.html、talent-sim/index.html 中加载脚本的 ?v= 保持一致。
  // 改了 app.js 逻辑或任何 assets/sprites/* 资源内容后，务必同步 bump 此版本号（否则用户长期命中旧缓存）。
  const ASSET_VER = "20260815b";
  function cacheBust(url) {
    if (!url) return url;
    return url + (url.indexOf("?") >= 0 ? "&" : "?") + "v=" + ASSET_VER;
  }

  const LS_BUILDS = "wotlk_builds_v1";
  const LS_GLYPHS = "wotlk_glyphs_v1";

  // 雕文槽解锁等级（WotLK 3.3.5a 官方规则）
  // 大雕文：15 / 30 / 80 级；小雕文：15 / 50 / 70 级
  const GLYPH_UNLOCK = { major: [15, 30, 80], minor: [15, 50, 70] };

  // ---------- 状态 ----------
  const state = {
    className: (function () {
    try {
      let v = localStorage.getItem("acok_sim_class");
      if (v) { try { v = JSON.parse(v); } catch(e) {} }
      if (v && CLASSES.find(c => c.name === v)) return v;
      return CLASSES[0].name;
    } catch (e) { return CLASSES[0].name; }
  })(),
    maxPoints: 71,
    level: 80,
    builds: loadJSON(LS_BUILDS, {}),   // { className: { treeName: { talentName: rank } } }
    glyphs: loadJSON(LS_GLYPHS, {}),      // { className: { major:[3], minor:[3] } }
  };

  // ---------- 工具 ----------
  function loadJSON(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } }
  function saveJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function classById(n) { return CLASSES.find(c => c.name === n); }
  function treeByName(c, treeName) { return c.trees.find(t => t.name === treeName); }
  function talentByName(t, n) { return t.talents.find(x => x.name === n); }
  function classTalent(cls, n) {
    for (const tr of cls.trees) { const x = talentByName(tr, n); if (x) return x; }
    return null;
  }
  function zhName(t) { return t.cn || t.name; }
  function zhDesc(t) {
    if (t.cnDesc && t.cnDesc.length === t.maxRank) return t.cnDesc;
    return t.desc || [];
  }

  function treePoints(clsName, treeName) {
    const b = (state.builds[clsName] && state.builds[clsName][treeName]) || {};
    let s = 0; for (const k in b) s += b[k]; return s;
  }
  // 某一天赋「下方各层(row < row)」已投入的累计点数 —— 用于层级门槛判定。
  // WotLK 规则：层级门槛 = 5 × row，即该层可点亮需其下所有层累计达到 req 点。
  function pointsBelowRow(clsName, treeName, row) {
    const c = classById(clsName);
    const tr = treeByName(c, treeName);
    const b = (state.builds[clsName] && state.builds[clsName][treeName]) || {};
    let s = 0;
    for (const t of tr.talents) if (t.row < row) s += (b[t.name] || 0);
    return s;
  }
  function classPoints(clsName) {
    const c = classById(clsName);
    return c.trees.reduce((a, t) => a + treePoints(clsName, t.name), 0);
  }

  // ---------- 规则引擎 ----------
  function canAdd(cls, tree, tal) {
    const b = (state.builds[cls.name] && state.builds[cls.name][tree.name]) || {};
    const r = b[tal.name] || 0;
    if (r >= tal.maxRank) return { ok: false, reason: "max" };
    if (pointsBelowRow(cls.name, tree.name, tal.row) < tal.req) return { ok: false, reason: "tier", need: tal.req };
    if (tal.prereq) {
      const prTal = classTalent(cls, tal.prereq);
      const prr = ((state.builds[cls.name] && state.builds[cls.name][tree.name] && state.builds[cls.name][tree.name][tal.prereq]) || 0);
      if (prTal && prTal.maxRank !== tal.prereqRank) tal.prereqRank = prTal.maxRank;
      if (prr < tal.prereqRank) return { ok: false, reason: "prereq", need: tal.prereq, needRank: tal.prereqRank };
    }
    if (classPoints(cls.name) >= state.maxPoints) return { ok: false, reason: "cap" };
    return { ok: true };
  }

  function addPoint(cls, tree, tal) {
    const chk = canAdd(cls, tree, tal);
    if (!chk.ok) { status(msgFor(chk, cls, tree, tal)); return; }
    if (!state.builds[cls.name]) state.builds[cls.name] = {};
    if (!state.builds[cls.name][tree.name]) state.builds[cls.name][tree.name] = {};
    const b = state.builds[cls.name][tree.name];
    b[tal.name] = (b[tal.name] || 0) + 1;
    afterChange();
  }

  function canRemove(cls, tree, tal) {
    const b = (state.builds[cls.name] && state.builds[cls.name][tree.name]) || {};
    const r = b[tal.name] || 0;
    if (r <= 0) return { ok: false };
    // 模拟移除 tal 这 1 点后，校验其余已点天赋的层级门槛是否仍满足：
    // 任一天赋 t2 下方层累计点数（tal 本身若在下层则减 1）须仍 ≥ t2.req。
    for (const t2 of tree.talents) {
      if (t2.name === tal.name) continue;
      const r2 = ((state.builds[cls.name][tree.name][t2.name]) || 0);
      if (r2 <= 0) continue;
      let below = pointsBelowRow(cls.name, tree.name, t2.row);
      if (tal.row < t2.row) below -= 1;
      if (below < t2.req) return { ok: false, reason: "tierDep", dep: t2 };
    }
    if (r === tal.maxRank) {
      for (const t2 of tree.talents) {
        if (t2.prereq === tal.name) {
          const r2 = ((state.builds[cls.name][tree.name][t2.name]) || 0);
          if (r2 > 0) return { ok: false, reason: "prereqDep", dep: t2 };
        }
      }
    }
    return { ok: true };
  }

  function removePoint(cls, tree, tal) {
    const chk = canRemove(cls, tree, tal);
    if (!chk.ok) { status(msgFor(chk, cls, tree, tal)); return; }
    const b = state.builds[cls.name][tree.name];
    b[tal.name] -= 1; if (b[tal.name] <= 0) delete b[tal.name];
    afterChange();
  }

  // 仅重置某一系（系列）天赋，不影响其他系与雕文
  function resetTree(cls, tree) {
    if (state.builds[cls.name] && state.builds[cls.name][tree.name]) {
      delete state.builds[cls.name][tree.name];
      saveJSON(LS_BUILDS, state.builds);
    }
    render();
    status("已重置「" + cls.cn + " · " + tree.cn + "」系列天赋");
  }

  function msgFor(chk, cls, tree, tal) {
    if (chk.reason === "max") return "「" + zhName(tal) + "」已达到最大等级";
    if (chk.reason === "tier") return "需要先在「" + tree.cn + "」投入 " + chk.need + " 点才能学习该层天赋";
    if (chk.reason === "prereq") return "需要「" + zhName(talentByName(tree, chk.need)) + "」达到 " + chk.needRank + " 点";
    if (chk.reason === "cap") return "天赋点已用完（剩余 0）";
    if (chk.reason === "tierDep") return "无法移除：会导致高层天赋所需点数不足";
    if (chk.reason === "prereqDep") return "无法移除：「" + zhName(chk.dep) + "」依赖该天赋满级";
    return "无法操作";
  }

  function afterChange() { saveJSON(LS_BUILDS, state.builds); render(); }

  // ---------- 渲染 ----------
  function render() {
    renderClassBar();
    renderTrees();
    renderPoints();
    renderGlyphs();
  }

  function renderClassBar() {
    const bar = document.getElementById("classBar");
    bar.innerHTML = "";
    CLASSES.forEach(c => {
      const b = document.createElement("div");
      b.className = "classbtn" + (c.name === state.className ? " active" : "");
      const img = document.createElement("img");
      img.src = c.icon; img.alt = c.cn; img.loading = "lazy";
      img.onerror = () => { img.style.display = "none"; };
      const span = document.createElement("span"); span.textContent = c.cn;
      b.appendChild(img); b.appendChild(span);
      b.onclick = () => { state.className = c.name; try { localStorage.setItem("acok_sim_class", c.name); } catch (e) {} render(); };
      bar.appendChild(b);
    });
  }

  function renderTrees() {
    const cls = classById(state.className);
    const layout = document.getElementById("layout");
    const glyphPanel = document.getElementById("glyphPanel");
    const cs = getComputedStyle(document.documentElement);
    const step = parseFloat(cs.getPropertyValue("--step")) || 58;
    const padX = parseFloat(cs.getPropertyValue("--pad-x")) || 18;
    const padY = parseFloat(cs.getPropertyValue("--pad-y")) || 18;
    let maxC = 0, maxR = 0;
    cls.trees.forEach(t => t.talents.forEach(ta => { maxC = Math.max(maxC, ta.col); maxR = Math.max(maxR, ta.row); }));
    const bodyW = (maxC + 1) * step + 2 * padX;
    const bodyH = (maxR + 1) * step + 2 * padY;
    // 仅移除「旧职业残留」的树（data-tree 不属于当前职业）；当前职业的树保留 DOM，
    // 走增量更新（updateTreeState），避免加点/移除时整树重建导致的闪烁。
    layout.querySelectorAll(".tree").forEach(el => {
      if (!cls.trees.find(t => t.name === el.dataset.tree)) el.remove();
    });
    cls.trees.forEach(tree => {
      let panel = null;
      const existing = layout.querySelectorAll(".tree");
      for (const el of existing) { if (el.dataset.tree === tree.name) { panel = el; break; } }
      if (!panel) {
        panel = buildTreePanel(cls, tree, step, padX, padY, bodyW, bodyH);
        layout.insertBefore(panel, glyphPanel);
      } else {
        updateTreeState(cls, tree, panel);
      }
    });
    // 固定雕文页/布局高度 = 理论树高度（head 约 42px + bodyH），不依赖 offsetHeight。
    // 避免在集成页离屏构建时 offsetHeight=0 把 --tree-h 压成 0px 导致天赋树/雕文栏空白。
    document.documentElement.style.setProperty("--tree-h", (bodyH + 42) + "px");
  }

  // 构建单棵天赋树的 DOM（首次进入某职业或切职业时调用一次；之后仅增量更新，不重建）
  function buildTreePanel(cls, tree, step, padX, padY, bodyW, bodyH) {
    const panel = document.createElement("section");
    panel.className = "tree";
    panel.dataset.tree = tree.name;
    const bg = document.createElement("img");
    bg.className = "tree-bg"; bg.src = cacheBust(tree.bg); bg.alt = ""; bg.loading = "eager";
    bg.onerror = () => { bg.style.display = "none"; };
    panel.appendChild(bg);

    const head = document.createElement("div");
    head.className = "tree-head";
    const nameEl = document.createElement("span");
    nameEl.className = "tree-name"; nameEl.textContent = tree.cn;
    const right = document.createElement("div");
    right.className = "tree-head-right";
    const pts = document.createElement("span");
    pts.className = "tree-pts"; pts.innerHTML = "已投入 <b>" + treePoints(cls.name, tree.name) + "</b> 点";
    const rbtn = document.createElement("button");
    rbtn.className = "tree-reset"; rbtn.type = "button"; rbtn.textContent = "重置";
    rbtn.title = "仅清空「" + tree.cn + "」系列天赋";
    rbtn.onclick = (e) => { e.stopPropagation(); resetTree(cls, tree); };
    right.appendChild(pts); right.appendChild(rbtn);
    head.appendChild(nameEl); head.appendChild(right);
    panel.appendChild(head);

    const body = document.createElement("div");
    body.className = "tree-body";
    body.style.width = bodyW + "px";
    body.style.height = bodyH + "px";
    body.style.padding = padY + "px " + padX + "px";
    tree.talents.forEach(tal => body.appendChild(renderTalent(cls, tree, tal)));
    drawPrereqLines(cls, tree, body);
    panel.appendChild(body);
    return panel;
  }

  // 增量更新已存在的树：仅刷新点数文案、各天赋状态 class/rank 徽章与前置连线，不重建 DOM（防闪烁）
  function updateTreeState(cls, tree, panel) {
    const pts = panel.querySelector(".tree-pts");
    if (pts) pts.innerHTML = "已投入 <b>" + treePoints(cls.name, tree.name) + "</b> 点";
    const body = panel.querySelector(".tree-body");
    if (!body) return;
    body.querySelectorAll(".talent").forEach(el => {
      const tal = talentByName(tree, el.dataset.tal);
      if (!tal) return;
      const r = ((state.builds[cls.name] && state.builds[cls.name][tree.name] && state.builds[cls.name][tree.name][tal.name]) || 0);
      const can = canAdd(cls, tree, tal).ok;
      el.className = "talent" + (r > 0 ? " spent" : "") + (r >= tal.maxRank ? " maxed" : "") + (r === 0 && !can ? " locked" : (r === 0 && can ? " avail" : ""));
      let rank = el.querySelector(".rank");
      if (r > 0) {
        if (!rank) { rank = document.createElement("span"); rank.className = "rank"; el.appendChild(rank); }
        rank.textContent = r + "/" + tal.maxRank;
      } else if (rank) {
        rank.remove();
      }
    });
    drawPrereqLines(cls, tree, body);
  }

  function renderTalent(cls, tree, tal) {
    const r = ((state.builds[cls.name] && state.builds[cls.name][tree.name] && state.builds[cls.name][tree.name][tal.name]) || 0);
    const can = canAdd(cls, tree, tal).ok;
    const el = document.createElement("div");
    el.className = "talent" + (r > 0 ? " spent" : "") + (r >= tal.maxRank ? " maxed" : "") + (r === 0 && !can ? " locked" : (r === 0 && can ? " avail" : ""));
    el.setAttribute("data-tal", tal.name);
    const cs = getComputedStyle(document.documentElement);
    const step = parseFloat(cs.getPropertyValue("--step")) || 58;
    const padX = parseFloat(cs.getPropertyValue("--pad-x")) || 18;
    const padY = parseFloat(cs.getPropertyValue("--pad-y")) || 18;
    el.style.left = (padX + (tal.col + 0.5) * step) + "px";
    el.style.top = (padY + (tal.row + 0.5) * step) + "px";
    // 上层天赋浮在下层之上，避免 rank 徽章（3/5 点数）被下层图标遮挡
    el.style.zIndex = String(100 - tal.row);

    const icon = document.createElement("div");
    icon.className = "icon"; icon.alt = zhName(tal); icon.setAttribute("role", "img");
    icon.style.backgroundImage = "url('" + cacheBust(tree.sprite) + "')";
    icon.style.backgroundPosition = (-(tal.col) * 48) + "px " + (-(tal.row) * 48) + "px";
    icon.style.backgroundRepeat = "no-repeat";
    el.appendChild(icon);

    if (r > 0) {
      const rank = document.createElement("span");
      rank.className = "rank"; rank.textContent = r + "/" + tal.maxRank;
      el.appendChild(rank);
    }

    el.addEventListener("click", () => addPoint(cls, tree, tal));
    el.addEventListener("contextmenu", e => { e.preventDefault(); removePoint(cls, tree, tal); });
    el.addEventListener("mouseenter", e => showTip(e, cls, tree, tal, r));
    el.addEventListener("mousemove", moveTip);
    el.addEventListener("mouseleave", hideTip);
    return el;
  }

  // 前置天赋连线：在每个 tree-body 内叠加 SVG，从 prereq 天赋中心连到依赖它的天赋中心
  function drawPrereqLines(cls, tree, body) {
    try {
      const old = body.querySelector(".prereq-svg");
      if (old) old.remove();
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "prereq-svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      const cs = getComputedStyle(document.documentElement);
      const step = parseFloat(cs.getPropertyValue("--step")) || 58;
      const padX = parseFloat(cs.getPropertyValue("--pad-x")) || 18;
      const padY = parseFloat(cs.getPropertyValue("--pad-y")) || 18;
      const b = (state.builds[cls.name] && state.builds[cls.name][tree.name]) || {};
      tree.talents.forEach(tal => {
        if (!tal.prereq) return;
        const pr = talentByName(tree, tal.prereq);
        if (!pr) return;
        const x1 = padX + (pr.col + 0.5) * step, y1 = padY + (pr.row + 0.5) * step;
        const x2 = padX + (tal.col + 0.5) * step, y2 = padY + (tal.row + 0.5) * step;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1.toFixed(1)); line.setAttribute("y1", y1.toFixed(1));
        line.setAttribute("x2", x2.toFixed(1)); line.setAttribute("y2", y2.toFixed(1));
        line.setAttribute("class", "prereq-line");
        if ((b[tal.prereq] || 0) >= (tal.prereqRank || pr.maxRank)) line.classList.add("satisfied");
        svg.appendChild(line);
      });
      body.appendChild(svg);
    } catch (e) { console.error("[acok] drawPrereqLines failed:", e); }
  }

  function renderPoints() {
    const used = classPoints(state.className);
    const left = state.maxPoints - used;
    document.getElementById("usedPts").textContent = used;
    document.getElementById("maxPtsLbl").textContent = state.maxPoints;
    const leftEl = document.getElementById("leftPts");
    leftEl.textContent = left;
    leftEl.style.color = left < 0 ? "var(--red)" : "var(--green)";
  }

  // ---------- 雕文 ----------
  // 全局仅维护一个选项浮层；展开新浮层前先关闭旧的，避免叠层
  let activePop = null;
  function closePop() { if (activePop) { activePop.remove(); activePop = null; }
    document.querySelectorAll(".glyph-slot.active").forEach(s => s.classList.remove("active")); }

  function ensureGlyphs(clsName) {
    if (!state.glyphs[clsName]) state.glyphs[clsName] = { major: [null, null, null], minor: [null, null, null] };
    const g = state.glyphs[clsName];
    if (!g.major) g.major = [null, null, null];
    if (!g.minor) g.minor = [null, null, null];
    return g;
  }
  function takenInType(clsName, type, exceptIdx) {
    const g = state.glyphs[clsName] || {};
    const arr = (g[type] || []);
    const s = new Set();
    arr.forEach((v, i) => { if (v && i !== exceptIdx) s.add(v); });
    return s;
  }

  // 估算描述「中文字当量」行数（与 CSS 框宽 243px / 12px 字号一致）：>3 行则标记 small 缩字体完整显示
  function renderGlyphs() {
    closePop();
    const panel = document.getElementById("glyphPanel");
    panel.innerHTML = "";
    const cls = classById(state.className);
    const data = (typeof GLYPHS !== "undefined" && GLYPHS[cls.name]) || { major: [], minor: [] };
    const g = ensureGlyphs(cls.name);
    const lv = state.level;

    // 两组：大型雕文 / 小型雕文；解锁等级标在标题行；每组 3 个「展示+触发」一体大框
    [["major", "大型雕文"], ["minor", "小型雕文"]].forEach(([type, label]) => {
      const grp = document.createElement("div");
      grp.className = "glyph-group";
      grp.innerHTML = '<div class="ghead"><h3>' + label + '</h3><span class="ghint">解锁：' +
        GLYPH_UNLOCK[type].map(l => l + " 级").join(" / ") + '</span></div>';
      const pool = data[type] || [];
      for (let i = 0; i < 3; i++) {
        const needLv = GLYPH_UNLOCK[type][i];
        const slot = document.createElement("div");
        slot.className = "glyph-slot";
        if (lv < needLv) {
          slot.classList.add("locked");
          const lk = document.createElement("div");
          lk.className = "glock";
          lk.textContent = "未解锁 · 需 Lv." + needLv;
          slot.appendChild(lk);
        } else {
          // 框本身即展示区：第 1 行 = 雕文名，下 4 行 = 描述；所有雕文框统一样式，不做激活/长文特殊处理
          const nm = document.createElement("div");
          nm.className = "gname";
          const ds = document.createElement("div");
          ds.className = "gdesc";
          const cur = g[type][i];
          if (cur) {
            const cnm = (typeof GLYPH_CN !== "undefined" && GLYPH_CN[cur]) ? GLYPH_CN[cur] : cur;
            const cds = (typeof GLYPH_DESC !== "undefined" && GLYPH_DESC[cur]) ? GLYPH_DESC[cur] : "";
            nm.textContent = cnm;
            ds.textContent = cds;
          } else {
            nm.textContent = "— 未选择 —";
            ds.textContent = "点击此框选择雕文";
          }
          slot.appendChild(nm); slot.appendChild(ds);
          slot.onclick = (e) => { e.stopPropagation(); openGlyphPop(slot, panel, type, i, cls, pool, g); };
        }
        grp.appendChild(slot);
      }
      panel.appendChild(grp);
    });
  }

  // 展开选项浮层：列出本类型全部雕文（每项 = 第1行名 + 下3行描述）。
  // 不论点哪个槽，浮层都钉在「雕文栏」同一位置、同一尺寸（正好覆盖整块雕文栏），无半透明遮罩；
  // 选项超出则浮层内部滚动。
  function openGlyphPop(slot, panel, type, i, cls, pool, g) {
    closePop();
    // 浮层锚定到雕文面板本身：所有槽点开都在同一处、同尺寸覆盖雕文栏
    const pr = panel.getBoundingClientRect();
    const pop = document.createElement("div");
    pop.className = "glyph-pop";
    pop.hidden = false;
    pop.style.left = pr.left + "px";
    pop.style.top = pr.top + "px";
    pop.style.width = pr.width + "px";
    pop.style.height = pr.height + "px";
    pop.style.transform = "none";

    const taken = takenInType(cls.name, type, i);
    const clear = document.createElement("button");
    clear.type = "button"; clear.className = "glyph-opt clear";
    clear.innerHTML = '<div class="go-name">— 未选择 —</div>';
    clear.onclick = () => { g[type][i] = null; saveJSON(LS_GLYPHS, state.glyphs); closePop(); renderGlyphs(); };
    pop.appendChild(clear);

    pool.forEach(name => {
      if (taken.has(name)) return; // 已被同组其它槽占用则不在本槽出现，避免重复选择
      const cn = (typeof GLYPH_CN !== "undefined" && GLYPH_CN[name]) ? GLYPH_CN[name] : name;
      const cd = (typeof GLYPH_DESC !== "undefined" && GLYPH_DESC[name]) ? GLYPH_DESC[name] : "";
      const opt = document.createElement("button");
      opt.type = "button"; opt.className = "glyph-opt" + (name === g[type][i] ? " chosen" : "");
      opt.innerHTML = '<div class="go-name">' + cn + '</div>' + (cd ? '<div class="go-desc">' + cd + '</div>' : '');
      opt.onclick = () => { g[type][i] = name; saveJSON(LS_GLYPHS, state.glyphs); closePop(); renderGlyphs(); };
      pop.appendChild(opt);
    });

    document.body.appendChild(pop);
    activePop = pop;
    slot.classList.add("active");
  }

  // ---------- Tooltip ----------
  const tip = document.getElementById("tooltip");
  function showTip(e, cls, tree, tal, r) {
    const d = zhDesc(tal);
    let html = '<h4>' + zhName(tal) + '</h4>';
    html += '<div class="t-rank">等级 ' + r + ' / ' + tal.maxRank + '</div>';
    if (r > 0 && d[r - 1]) html += '<div class="t-desc">' + d[r - 1] + '</div>';
    if (r < tal.maxRank && d[r]) html += '<div class="t-next">下一等级（' + (r + 1) + '）：' + d[r] + '</div>';
    if (r === 0 && d[0]) html += '<div class="t-desc">' + d[0] + '</div>';
    let req = [];
    if (tal.req > 0) req.push("需要「" + tree.cn + "」" + tal.req + " 点");
    if (tal.prereq) req.push("需要「" + zhName(classTalent(cls, tal.prereq)) + "」" + tal.prereqRank + " 点");
    if (req.length) html += '<div class="t-req">需求：' + req.join("；") + '</div>';
    tip.innerHTML = html; tip.hidden = false; moveTip(e);
  }
  function moveTip(e) {
    const pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
    let x = e.clientX + pad, y = e.clientY + pad;
    if (x + w > innerWidth) x = e.clientX - w - pad;
    if (y + h > innerHeight) y = e.clientY - h - pad;
    tip.style.left = x + "px"; tip.style.top = y + "px";
  }
  function hideTip() { tip.hidden = true; }

  function placeholderSVG(ch) {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">' +
      '<rect width="48" height="48" rx="6" fill="#2a2f3a"/>' +
      '<text x="24" y="31" font-size="22" fill="#e8c372" text-anchor="middle" font-family="sans-serif">' +
      ch + '</text></svg>';
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  // ---------- 顶部控件 ----------
  function setupControls() {
    const lvl = document.getElementById("levelSel");
    for (let L = 10; L <= 80; L++) { const o = document.createElement("option"); o.value = L; o.textContent = L; lvl.appendChild(o); }
    lvl.value = "80";
    lvl.addEventListener("change", () => {
      const L = +lvl.value;
      state.level = L;
      state.maxPoints = L >= 10 ? Math.min(L - 9, 71) : 0;
      document.getElementById("maxPts").value = state.maxPoints;
      renderPoints();
      renderGlyphs();
    });
    const mp = document.getElementById("maxPts");
    mp.addEventListener("change", () => {
      let v = parseInt(mp.value, 10); if (isNaN(v) || v < 0) v = 0; if (v > 200) v = 200;
      state.maxPoints = v; mp.value = v; renderPoints();
    });

    document.getElementById("resetBtn").onclick = () => {
      delete state.builds[state.className];
      delete state.glyphs[state.className];
      saveJSON(LS_BUILDS, state.builds);
      saveJSON(LS_GLYPHS, state.glyphs);
      render(); status("已重置「" + classById(state.className).cn + "」天赋与雕文");
    };
    document.getElementById("shareBtn").onclick = shareBuild;
  }

  function shareBuild() {
    const c = classById(state.className);
    const obj = { c: c.name, b: state.builds[c.name] || {}, g: state.glyphs[c.name] || { major: [null, null, null], minor: [null, null, null] } };
    const code = btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
    const url = location.origin + location.pathname + "?build=" + code;
    copyToClipboard(url);
    status("分享链接已复制到剪贴板（含天赋与雕文）");
  }
  function copyToClipboard(t) {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t);
    else { const ta = document.createElement("textarea"); ta.value = t; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
  }

  // ---------- 状态提示（固定空位，不挤压布局） ----------
  let stTimer = null;
  function status(msg) {
    const banner = document.getElementById("statusBanner");
    banner.innerHTML = '<div class="msg">' + msg + '</div>';
    clearTimeout(stTimer);
    stTimer = setTimeout(() => { banner.innerHTML = ""; }, 2800);
  }

  // ---------- 启动：解析分享链接 ----------
  function applyShared() {
    const params = new URLSearchParams(location.search);
    let code = params.get("build");
    if (!code && location.hash.startsWith("#build=")) code = location.hash.slice(7);
    if (!code) return;
    let obj; try { obj = JSON.parse(decodeURIComponent(escape(atob(code)))); } catch (e) { return; }
    if (obj && obj.c && classById(obj.c)) {
      state.className = obj.c;
      state.builds[obj.c] = obj.b || {};
      if (obj.g) state.glyphs[obj.c] = obj.g;
      saveJSON(LS_BUILDS, state.builds);
      saveJSON(LS_GLYPHS, state.glyphs);
      status("已载入分享的天赋方案");
    }
  }

  // ---------- init ----------
  applyShared();
  setupControls();
  render();
  // 点击浮层与槽位之外任意处关闭选项面板（槽位点击已 stopPropagation，不会误关）
  document.addEventListener("click", (e) => {
    if (activePop && !e.target.closest(".glyph-pop") && !e.target.closest(".glyph-slot")) closePop();
  });
})();
