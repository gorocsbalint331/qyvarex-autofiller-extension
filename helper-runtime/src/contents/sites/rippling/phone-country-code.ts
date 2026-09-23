// @ts-nocheck
/**
 * Rippling phone country code — readable TypeScript source of truth.
 */

import * as corePhoneCountryCode from "../../../core/phone-country-code.js"
function i(e) {
  return e.toLowerCase().replace(/\s+/g, " ").trim();
}
function a(e, t) {
  return t ? `${e} ${t.toUpperCase()}` : "";
}
function l(e, t, r) {
  return { search: e, dialCode: t, verify: r, searchNorm: i(e), dialCodeNorm: i(t), verifyNorm: r ? i(r) : void 0 };
}
function s(e) {
  return e && corePhoneCountryCode.resolvePhoneCountryCodeAnswer({ regular: e }, [...corePhoneCountryCode.PHONE_COUNTRY_CODE_ANSWER_LABELS, "phoneCountryCode", "phone_country_code"]) || "";
}
function u(e) {
  return "string" == typeof e ? e.trim() : "";
}
function c(e) {
  let t = corePhoneCountryCode.getDialCodeDigits(e), r = corePhoneCountryCode.normalizePhoneCountryText(corePhoneCountryCode.extractPhoneCountryName(e)) || (t ? "" : corePhoneCountryCode.normalizePhoneCountryText(e));
  if (r) {
    let n2 = corePhoneCountryCode.getCountryByIso2(corePhoneCountryCode.resolveIso2FromCountryName(r));
    return n2 ? t && n2.dialCode !== t ? null : { country: n2.name, dialCode: `+${n2.dialCode}`, iso2: n2.iso2 } : t ? { country: String(e).replace(/\+\s*\d{1,4}/, "").replace(/\s+/g, " ").trim(), dialCode: `+${t}`, iso2: "" } : null;
  }
  if (!t || "1" === t) return null;
  let n = corePhoneCountryCode.getPrimaryCountryByDialCode(t);
  return n ? { country: n.name, dialCode: `+${t}`, iso2: n.iso2 } : { country: String(e).trim(), dialCode: `+${t}`, iso2: "" };
}
function d(e) {
  let t = corePhoneCountryCode.resolveIso2FromCountryName(corePhoneCountryCode.normalizePhoneCountryText(e));
  if (!t) return null;
  let r = corePhoneCountryCode.getCountryByIso2(t);
  if (!r) return null;
  let n = `+${r.dialCode}`;
  return l(r.name, n, a(n, r.iso2));
}
function f(e) {
  let t = u(e.phoneCountryCode), r = t ? d(t) : null;
  if (r?.dialCode === "+1") return r;
  let n = d(u(e.country));
  return n?.dialCode === "+1" ? n : null;
}
function resolveRipplingPhoneCountryTarget(e, t = {}) {
  let r = s(e);
  if (r) {
    let e2 = c(r);
    return e2 ? l(e2.country, e2.dialCode, a(e2.dialCode, e2.iso2)) : "+1" === i(r) ? f(t) : null;
  }
  let n = u(t.phoneCountryCode);
  if (n) {
    let e2 = c(n);
    return e2 ? l(e2.country, e2.dialCode, a(e2.dialCode, e2.iso2)) : "+1" === i(n) ? f(t) : null;
  }
  return d(u(t.country));
}
function m(e) {
  let t = e.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim(), r = t.split(/\s+-\s+/);
  return r.length > 1 ? r.slice(1).join(" - ").trim() : t.replace(/\+\s*\d+\s*[A-Z]{0,3}/i, "").trim();
}
function getRipplingPhoneCodeOptionScore(e, t) {
  let r = i(e);
  if (!r.includes(t.dialCodeNorm)) return -1;
  let n = i(m(e));
  return n === t.searchNorm ? 500 : t.verifyNorm && r.includes(t.verifyNorm) ? 400 : -1;
}

export {
  getRipplingPhoneCodeOptionScore,
  resolveRipplingPhoneCountryTarget,
}
