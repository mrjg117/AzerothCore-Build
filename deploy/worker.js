// AzerothCore-OK —— Cloudflare Worker
// 职责：
//   1) 处理 /api/register：基础校验后调 worldserver 的 SOAP `account create` 建号
//      （SRP6 由核心自算，密码不落库明文）。
//   2) 其余请求回退给 Workers Static Assets（注册页 index.html + 补丁 patches/）。
//
// 频率限制：由 Cloudflare WAF（边缘 Rate Limiting 规则，匹配 /api/register）统一处理，
// 不在此处重复计数——请求一旦进 Worker 就已计入函数调用，内存 map 省不了额度，
// 且 WAF 在边缘直接挡，功能覆盖原内存 map（按 IP 限频 + 封禁时长）且零函数消耗。
//
// 部署：cd deploy && npx wrangler deploy
// 机密：wrangler secret put SOAP_PASSWORD
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

async function handleRegister(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }
  if (request.method !== 'POST') {
    return json({ ok: false, message: 'Method Not Allowed' }, 405);
  }

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

  const res = await soapAccountCreate(username, password, env);
  if (res === 'exists') return json({ ok: false, message: '账号已存在' }, 409);
  if (res === 'ok') return json({ ok: true, message: '注册成功，可直接登录游戏' });
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
