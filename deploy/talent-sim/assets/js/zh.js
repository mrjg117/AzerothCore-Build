// 中文覆盖钩子（可选）。
// 当前名称/描述已通过 data.js 的 cn / cnDesc 字段中文化（源自 NFU Wow）。
// 若需逐条校正，可在此以英文原名为键覆盖，例如：
//   const ZH = { "Shockwave": { name: "震荡波", desc: ["..."] } };
// app.js 解析后会优先采用此处定义。
const ZH = {};
if (typeof module !== "undefined") module.exports = ZH;
