// AzerothCore-OK —— Cloudflare Worker
// 职责：
//   1) 处理 /api/register：做基础校验 + 可选 Turnstile 验证后，调 worldserver 的
//      SOAP `account create` 建号（SRP6 由核心自算，密码不落库明文）。
//   2) 其余请求回退给 Workers Static Assets（注册页 index.html + 补丁 patches/）。
//
// 部署：cd deploy && npx wrangler deploy
// 机密：wrangler secret put SOAP_PASSWORD  （另可选 TURNSTILE_SECRET）
// 变量：在 wrangler.toml 的 [vars] 填 WORLD_HOST / WORLD_PORT / SOAP_LOGIN

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

// 转义 XML 特殊字符，避免破坏 SOAP 信封 / 命令
function xmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 调 worldserver SOAP 执行 account create
async function soapAccountCreate(username, password, env) {
  const host = env.WORLD_HOST;
  const port = env.WORLD_PORT || '7878';
  const login = env.SOAP_LOGIN || 'webreg';
  const pass = env.SOAP_PASSWORD || '';
  if (!host) return '未配置 WORLD_HOST（Worker 不知道 worldserver 在哪）';

  const u = xmlEscape(username);
  const p = xmlEscape(password);
  const xml =
`<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
<SOAP-ENV:Body>
<commands xmlns="urn:AC">
<console>account create ${u} ${p} 1</console>
</commands>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`;

  const auth = 'Basic ' + btoa(login + ':' + pass);
  try {
    const r = await fetch(`http://${host}:${port}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': '"urn:AC#console"',
        'Authorization': auth
      },
      body: xml
    });
    const text = await r.text();
    if (/Account created/i.test(text)) return 'ok';
    if (/already exist/i.test(text)) return 'exists';
    return '注册失败：' + text.slice(0, 200);
  } catch (e) {
    return '无法连接服务端 SOAP：' + e.message;
  }
}

// 可选：Cloudflare Turnstile 图形验证
async function verifyTurnstile(token, env, request) {
  const ip = request.headers.get('CF-Connecting-IP') || '';
  const fd = new FormData();
  fd.append('secret', env.TURNSTILE_SECRET);
  fd.append('response', token);
  if (ip) fd.append('remoteip', ip);
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: fd
    });
    const j = await r.json();
    return !!j.success;
  } catch {
    return false;
  }
}

async function handleRegister(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }
  if (request.method !== 'POST') {
    return json({ ok: false, message: 'Method Not Allowed' }, 405);
  }

  // 轻量防刷：内核内存 map 按 IP，按天计数 + 重试计数；只防坏人，不求精确
  const ip = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || 'unknown';
  const rate = globalThis.__acRate || (globalThis.__acRate = new Map());
  const _now = Date.now();
  const _day = Math.floor(_now / 86400000);
  let e = rate.get(ip);
  if (!e || e.day !== _day) { e = { day: _day, reg: 0, tries: 0, blockUntil: 0 }; rate.set(ip, e); }
  if (_now < e.blockUntil) return json({ ok: false, message: '请求过于频繁，请稍后再试' }, 429);
  e.tries++;
  if (e.tries > 50) { e.blockUntil = _now + 86400000; return json({ ok: false, message: '请求过于频繁，请稍后再试' }, 429); }
  if (e.reg >= 10) return json({ ok: false, message: '今日注册次数已达上限，明天再来' }, 429);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: '请求体格式错误' }, 400);
  }

  const username = String(body.username || '').trim();
  const password = String(body.password || '');

  // 基础校验（与页面一致，后端再挡一层）
  if (!/^[A-Za-z0-9_]{3,32}$/.test(username)) {
    return json({ ok: false, message: '账号名需 3-32 位英文/数字/下划线' }, 400);
  }
  if (password.length < 6 || /\s/.test(password)) {
    return json({ ok: false, message: '密码至少 6 位且不能含空格' }, 400);
  }

  // 可选图形验证
  if (env.TURNSTILE_SECRET && body['cf-turnstile-response']) {
    const ok = await verifyTurnstile(body['cf-turnstile-response'], env, request);
    if (!ok) return json({ ok: false, message: '人机验证失败' }, 400);
  }

  const res = await soapAccountCreate(username, password, env);
  if (res === 'exists') return json({ ok: false, message: '账号已存在' }, 409);
  if (res === 'ok') { e.reg++; return json({ ok: true, message: '注册成功，可直接登录游戏' }); }
  return json({ ok: false, message: res || '注册服务暂时不可用' }, 502);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/register') {
      return handleRegister(request, env);
    }

    // 其余请求交给 Workers Static Assets（注册页 + 补丁）
    return env.ASSETS.fetch(request);
  }
};
