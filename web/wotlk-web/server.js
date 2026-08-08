'use strict';

// ============================================================
// AzerothCore 注册页
//  - 图形验证码（svg-captcha，无第三方依赖）
//  - 同 IP 注册冷却限频（防刷）
//  - 经 worldserver SOAP 接口 account create 写账号（SRP6 由核心算）
//  - 注册成功后展示客户端补丁（AddOn）下载区
// ============================================================

const express = require('express');
const svgCaptcha = require('svg-captcha');
const http = require('http');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

// ---- 配置（由 compose 注入环境变量）----
const PORT = parseInt(process.env.WEB_PORT || '8080', 10);
const SOAP_HOST = process.env.SOAP_HOST || 'worldserver';
const SOAP_PORT = parseInt(process.env.SOAP_PORT || '7878', 10);
const SOAP_LOGIN = process.env.SOAP_LOGIN || 'webreg';
const SOAP_PASSWORD = process.env.SOAP_PASSWORD || 'changeme';
const PATCHES_DIR = path.join(__dirname, 'static', 'patches');
const ARCHIVE_NAME = 'patches-client.zip'; // 按客户端路径层级打包的整包

// ---- 会话（内存；单实例足够。多实例请换外部存储）----
const sessions = new Map(); // sid -> { captcha, ts }
function newSid() { return crypto.randomBytes(16).toString('hex'); }

// ---- 限频 ----
const REG_COOLDOWN_MS = 60 * 1000; // 同 IP 60s 内只能注册 1 次
const ipLastReg = new Map(); // ip -> 上次成功/尝试时间戳

// ---- Cookie 工具（避免额外依赖）----
function getCookie(req, name) {
  const c = req.headers.cookie;
  if (!c) return undefined;
  const m = c.split(';').map(s => s.trim()).find(s => s.startsWith(name + '='));
  return m ? decodeURIComponent(m.split('=')[1]) : undefined;
}
function setCookie(res, name, val) {
  res.setHeader('Set-Cookie', `${name}=${val}; Path=/; HttpOnly; SameSite=Lax`);
}

function clientIp(req) {
  return String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '')
    .split(',')[0].trim();
}
// AzerothCore 账号命名约束（与核心一致）
function safeUser(u) { return /^[a-zA-Z0-9_]{3,16}$/.test(u); }

// ---- 验证码 ----
app.get('/captcha', (req, res) => {
  const cap = svgCaptcha.create({
    size: 5, noise: 2, ignoreChars: '0oO1ilI',
    color: true, background: '#eef2f7',
  });
  let sid = getCookie(req, 'sid');
  if (!sid || !sessions.has(sid)) {
    sid = newSid();
    setCookie(res, 'sid', sid);
  }
  sessions.set(sid, { captcha: cap.text.toLowerCase(), ts: Date.now() });
  res.type('svg');
  res.status(200).send(cap.data);
});

// ---- 注册页 ----
app.get('/', (req, res) => {
  res.type('html').send(pageHtml());
});

app.post('/register', (req, res) => {
  const ip = clientIp(req);
  const username = String(req.body.username || '').trim();
  const password = String(req.body.password || '');
  const confirm = String(req.body.confirm || '');
  const captchaInput = String(req.body.captcha || '').trim().toLowerCase();

  // 1) 验证码（服务端比对，用后即焚）
  const sid = getCookie(req, 'sid');
  const sess = sid && sessions.get(sid);
  if (!sess || !captchaInput || captchaInput !== sess.captcha) {
    return res.status(400).type('html').send(pageHtml('验证码错误，请重新输入'));
  }
  sessions.delete(sid);

  // 2) 输入校验（白名单 + 强度）
  if (!safeUser(username)) {
    return res.status(400).type('html').send(pageHtml('用户名需为 3-16 位字母/数字/下划线'));
  }
  if (password.length < 6) {
    return res.status(400).type('html').send(pageHtml('密码至少 6 位'));
  }
  if (password !== confirm) {
    return res.status(400).type('html').send(pageHtml('两次输入的密码不一致'));
  }

  // 3) IP 限频（防刷）
  const last = ipLastReg.get(ip) || 0;
  if (Date.now() - last < REG_COOLDOWN_MS) {
    return res.status(429).type('html').send(pageHtml('操作过于频繁，请稍后再试'));
  }
  ipLastReg.set(ip, Date.now());

  // 4) 经 SOAP 创建账号（SRP6 由 worldserver 计算）
  createAccountSoap(username, password, (err, out) => {
    if (err) {
      console.error('[SOAP] error:', err.message);
      return res.status(502).type('html').send(pageHtml('注册服务暂时不可用，请稍后重试'));
    }
    if (!out.success) {
      // 统一提示，不泄露账号是否存在
      return res.status(400).type('html').send(pageHtml('注册失败，请稍后重试或联系管理员'));
    }
    res.type('html').send(successHtml(username));
  });
});

// ---- 补丁下载（注册成功后页面调用）----
// ・无 addon 参数：返回按客户端路径层级打包的整包（patches-client.zip），
//   解压到 WoW 客户端根目录即落到 Data/ 与 Interface/AddOns/。
// ・带 addon 参数：仅返回该 AddOn 的单包（沿用原 tar.gz 逻辑）。
app.get('/download', (req, res) => {
  const name = String(req.query.addon || '');
  if (!name) {
    const archive = path.join(PATCHES_DIR, ARCHIVE_NAME);
    if (!fs.existsSync(archive)) return res.status(404).end();
    res.setHeader('Content-Disposition', `attachment; filename="${ARCHIVE_NAME}"`);
    res.setHeader('Content-Type', 'application/zip');
    return fs.createReadStream(archive).pipe(res);
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(name)) return res.status(400).end();
  const found = collectAddons().find(a => a.name === name);
  if (!found) return res.status(404).end();
  try {
    const buf = execFileSync('tar', ['czf', '-', '-C', found.dir, '.']);
    res.setHeader('Content-Disposition', `attachment; filename="${name}.tar.gz"`);
    res.setHeader('Content-Type', 'application/gzip');
    res.end(buf);
  } catch (e) {
    res.status(500).end();
  }
});

// ---- SOAP: account create ----
function createAccountSoap(username, password, cb) {
  const cmd = `account create ${username} ${password}`;
  const xml =
`<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="urn:AC">
<SOAP-ENV:Header><ns1:auth><ns1:login>${SOAP_LOGIN}</ns1:login><ns1:password>${SOAP_PASSWORD}</ns1:password></ns1:auth></SOAP-ENV:Header>
<SOAP-ENV:Body><ns1:executeCommand><command>${cmd}</command></ns1:executeCommand></SOAP-ENV:Body>
</SOAP-ENV:Envelope>`;
  const body = Buffer.from(xml, 'utf8');
  const req = http.request({
    host: SOAP_HOST,
    port: SOAP_PORT,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Content-Length': body.length,
      'Authorization': 'Basic ' + Buffer.from(SOAP_LOGIN + ':' + SOAP_PASSWORD).toString('base64'),
    },
  }, (resp) => {
    let data = '';
    resp.on('data', (c) => data += c);
    resp.on('end', () => {
      const ok = /Account created/i.test(data);
      const exists = /already exists/i.test(data);
      if (exists) return cb(null, { success: false, exists: true });
      cb(null, { success: ok });
    });
  });
  req.on('error', (e) => cb(e));
  req.write(body);
  req.end();
}

// ---- 收集补丁 AddOn（与源码布局解耦）----
// client-patches/ 按模组分子目录（<module>/addon/<AddonName>/），
// 这里递归扫描所有含 .toc 的目录作为 AddOn 根，返回 [{name, dir}]。
function collectAddons() {
  const out = [];
  const seen = new Set();
  const walk = (dir) => {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
    catch { return; }
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const p = path.join(dir, e.name);
      let hasToc = false;
      try { hasToc = fs.readdirSync(p).some(f => f.toLowerCase().endsWith('.toc')); }
      catch { hasToc = false; }
      if (hasToc) {
        if (!seen.has(e.name)) { out.push({ name: e.name, dir: p }); seen.add(e.name); }
      } else {
        walk(p);
      }
    }
  };
  try { walk(PATCHES_DIR); } catch { /* ignore */ }
  return out;
}

// 兼容旧调用名
function listAddons() { return collectAddons().map(a => a.name); }

// ---- HTML ----
function pageHtml(err) {
  const errMsg = err ? `<p class="err">${escapeHtml(err)}</p>` : '';
  return `<!doctype html><html lang="zh"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>注册账号</title><style>
body{font-family:system-ui,-apple-system,"Microsoft YaHei",sans-serif;background:#0f172a;color:#e2e8f0;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0}
.card{background:#1e293b;padding:32px 28px;border-radius:12px;width:360px;box-shadow:0 10px 30px rgba(0,0,0,.4)}
h1{font-size:20px;margin:0 0 18px;text-align:center}
label{display:block;font-size:13px;margin:12px 0 4px;color:#94a3b8}
input[type=text],input[type=password]{width:100%;padding:10px;border:1px solid #334155;border-radius:6px;background:#0f172a;color:#e2e8f0;box-sizing:border-box}
.cap{display:flex;gap:8px;align-items:center}
.cap img{cursor:pointer;border-radius:6px;background:#fff;height:40px}
button{width:100%;margin-top:18px;padding:11px;background:#2563eb;color:#fff;border:0;border-radius:6px;font-size:15px;cursor:pointer}
button:hover{background:#1d4ed8}
.err{color:#f87171;font-size:13px;text-align:center;margin:10px 0 0}
.hint{font-size:12px;color:#64748b;text-align:center;margin-top:14px}
</style></head><body><div class="card">
<h1>创建游戏账号</h1>${errMsg}
<form method="post" action="/register">
<label>用户名</label><input type="text" name="username" autocomplete="off" maxlength="16" required>
<label>密码</label><input type="password" name="password" autocomplete="off" required>
<label>确认密码</label><input type="password" name="confirm" autocomplete="off" required>
<label>验证码</label>
<div class="cap"><input type="text" name="captcha" maxlength="5" autocomplete="off" required style="flex:1">
<img src="/captcha?r=${Date.now()}" onclick="this.src='/captcha?r='+Date.now()" title="点击刷新"></div>
<button type="submit">注册</button>
</form>
<p class="hint">注册即同意服务器规则</p>
</div></body></html>`;
}

function successHtml(user) {
  const addons = listAddons();
  const addonLinks = addons.length
    ? `<p class="small">或仅单独下载某个插件：</p><ul>${addons.map(n => `<li><a href="/download?addon=${encodeURIComponent(n)}">${escapeHtml(n)}（仅该插件）</a></li>`).join('')}</ul>`
    : '';
  return `<!doctype html><html lang="zh"><head><meta charset="utf-8">
<title>注册成功</title><style>
body{font-family:system-ui,-apple-system,"Microsoft YaHei",sans-serif;background:#0f172a;color:#e2e8f0;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0}
.card{background:#1e293b;padding:32px 28px;border-radius:12px;width:440px;box-shadow:0 10px 30px rgba(0,0,0,.4)}
h1{font-size:20px;margin:0 0 10px;color:#4ade80}
.big{display:block;text-align:center;background:#2563eb;color:#fff;padding:14px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600}
.big:hover{background:#1d4ed8}
.small{font-size:12px;color:#94a3b8;margin:16px 0 6px}
ul{margin:6px 0 0;padding-left:20px;line-height:1.9}
a{color:#60a5fa}
.note{font-size:12px;color:#64748b;margin-top:16px}
code{background:#0f172a;padding:2px 6px;border-radius:4px}
</style></head><body><div class="card">
<h1>账号 ${escapeHtml(user)} 创建成功！</h1>
<p>下载客户端补丁（已按 WoW 客户端目录层级打包，解压到客户端根目录即用）：</p>
<a class="big" href="/download">⬇ 下载全部补丁 patches-client.zip</a>
<p class="note">解压后会自动落到 <code>Data/</code>（MPQ 补丁）与 <code>Interface/AddOns/</code>（插件）。</p>
${addonLinks}
<p class="note">用刚注册的账号启动游戏客户端即可进入。</p>
</div></body></html>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

app.listen(PORT, () => {
  console.log(`[web] registration server on :${PORT}  (SOAP -> ${SOAP_HOST}:${SOAP_PORT})`);
});
