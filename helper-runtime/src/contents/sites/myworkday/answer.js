/**
 * Parcel module id: eUq3l
 * Resolved path: src/contents/sites/myworkday/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~utils/lang -> f5rbp  =>  src/utils/lang.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "WORKDAY_DISABILITY_SELF_IDENTIFY_LABEL", () => m), n.export(r,
    "applyWorkdaySelfIdentifyAnswers", () => I), n.export(r, "normalizeStateValue", () => j), n
  .export(r, "getWorkdayCountryFillValue", () => $), n.export(r, "formatAnswer", () => eo);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("~constants"),
  l = e("~utils/lang"),
  s = e("~utils/string");
let u = ["State", "State/Province", "State / Province", "State/Territory", "State / Territory",
    "State/Region", "State / Region"
  ],
  c = ["Mobile", "Personal Mobile", "Home", "Cell"],
  d = new Set(["select one", "select", "please select", "none", "not selected"]),
  f = {
    canada: ["Canada", "CA"],
    ca: ["Canada", "CA"],
    "united states": ["United States of America", "United States", "USA", "US"],
    "united states of america": ["United States of America", "United States", "USA", "US"],
    us: ["United States of America", "United States", "USA", "US"],
    usa: ["United States of America", "United States", "USA", "US"],
    "united kingdom": ["United Kingdom", "UK", "GB"],
    uk: ["United Kingdom", "UK", "GB"],
    gb: ["United Kingdom", "UK", "GB"],
    india: ["India", "IN"],
    in: ["India", "IN"],
    china: ["China", "CN"],
    cn: ["China", "CN"]
  },
  p = new Set(u.map(S)),
  m = "Please check one of the boxes below:",
  h = [m, "Disability", "disability", "disabilityStatus"];

function g(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

function b(e) {
  return String(e ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim()
}

function y(e) {
  return b(e).replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function v(e, t) {
  let r = b(t);
  if (!/(?:\.{3}|\u2026)/.test(r)) return !1;
  let n = y(e),
    o = r.split(/\.{3}|\u2026/).map(y).filter(Boolean);
  if (!n || o.length < 2) return !1;
  let i = 0;
  for (let e of o) {
    let t = n.indexOf(e, i);
    if (-1 === t) return !1;
    i = t + e.length
  }
  return o.join("").length >= 20
}

function w(e, t = []) {
  let r = e.regular || {},
    n = Object.entries(r).filter(([e]) => /(?:\.{3}|\u2026)/.test(e));
  if (0 !== n.length && 0 !== t.length)
    for (let e of t) {
      let t = e?.label;
      if (!t || t in r) continue;
      let o = n.find(([e]) => v(t, e));
      o && (r[t] = o[1])
    }
}

function S(e) {
  return g(e)
}

function E(e) {
  return p.has(S(e))
}

function x(e) {
  let t = g(e);
  return "phonedevicetype" === t || t.includes("phone") && t.includes("device") && t.includes(
    "type")
}

function C(e) {
  let t = g(e);
  return t.includes("employee") && t.includes("id")
}

function A(e) {
  let t = g(e);
  return "addressline2" === t || "address2" === t || "streetaddress2" === t
}

function k(e) {
  let t = g(e);
  return "addressline1" === t || "address1" === t || "streetaddress1" === t || "streetaddress" === t
}

function T(e) {
  return g(e).includes("facebook")
}

function F(e) {
  for (let t of e) {
    if (Array.isArray(t)) {
      let e = t.find(e => !(0, l.isEmptyValue)(e));
      if (void 0 !== e) return e;
      continue
    }
    if (!(0, l.isEmptyValue)(t)) return t
  }
  return null
}

function I(e, t = {}) {
  e.regular = {
    ...e.regular || {}
  };
  let r = F([...h.map(t => e.regular[t]), t.autofillInfo?.employmentInfo?.disability, t.autofillInfo
      ?.disability
    ]),
    n = null == r ? null : String(r).trim();
  return n && (e.regular[m] = n), e
}

function j(e) {
  let t = Array.isArray(e) ? e.find(e => !(0, l.isEmptyValue)(e)) : e;
  if (null == t) return null;
  let r = String(t).trim();
  if (!r) return null;
  let n = r.replace(/\./g, "").toUpperCase();
  if (a.STATE_MAP[n]) return a.STATE_MAP[n];
  let o = r.toLowerCase();
  return Object.values(a.STATE_MAP).find(e => e.toLowerCase() === o) ?? null
}

function D(e) {
  let t = Array.isArray(e) ? e.find(e => !(0, l.isEmptyValue)(e)) : e;
  return (0, l.isEmptyValue)(t) ? null : String(t).trim()
}

function P(e) {
  if ((0, l.isEmptyValue)(e)) return !0;
  let t = D(e)?.toLowerCase();
  return !t || d.has(t)
}

function _(...e) {
  for (let t of e) {
    let e = D(t);
    if (e) return e
  }
  return null
}

function L(e) {
  let t = D(e)?.replace(/\./g, "").replace(/\s+/g, " ").trim().toLowerCase();
  return !!t && ("us" === t || "usa" === t || "united states" === t ||
    "united states of america" === t || "ca" === t || "canada" === t)
}

function R(e) {
  let t = e.trim().toLowerCase(),
    r = g(e);
  return "country phone code" === t || "phone country code" === t || "country/region phone code" ===
    t || r.includes("countryphonecode") || r.includes("phonecountrycode") || r.includes(
      "countryregionphonecode") || r.includes("country") && r.includes("phone") && r.includes(
      "code")
}

function O(e) {
  if (R(e)) return !1;
  let t = e.trim().toLowerCase(),
    r = g(e);
  return "country" === t || "country / territory" === t || "country/territory" === t ||
    "country / region" === t || "country/region" === t || "country" === r || "countryterritory" ===
    r || "countryregion" === r
}

function M(e) {
  let t = D(e)?.replace(/\./g, "").replace(/\s+/g, " ").trim().toLowerCase();
  return t || null
}

function N(e) {
  let t = M(e);
  return t ? f[t] ?? null : null
}

function $(e) {
  return N(e)?.[0] ?? D(e)
}

function B(e) {
  let t = D(e);
  if (!t) return !1;
  let r = t.match(/\+(\d{1,4})/)?.[1];
  if (r) return "1" === r;
  let n = t.replace(/\D/g, "");
  return n && n.length <= 4 ? "1" === n : L(t)
}

function q(e) {
  let t = D(e)?.toLowerCase();
  return !!(t && "select one" !== t)
}

function U(e) {
  let t = D(e);
  return !!t && (/(?:^|\s)\+\d{1,4}\b/.test(t) || /^\s*\d{1,4}\s*$/.test(t))
}

function H(e) {
  return Object.entries(e.regular || {}).some(([e, t]) => R(e) && q(t) || "countrycode" === g(e) &&
    U(t))
}

function Y(e) {
  let t = e.match(/^\s*\(\s*(\+\d{1,4})\s*\)\s*(.+)$/);
  if (!t) return null;
  let r = t[2].replace(/\D/g, "");
  return r ? `(${t[1]})${r}` : null
}

function z(e, t = {}) {
  let r = e.regular || {},
    n = Object.entries(r).filter(([e]) => R(e)).map(([, e]) => e).filter(q);
  if (n.length > 0) return n.some(B);
  let o = [t.country, e.country, t.autofillInfo?.location?.country, ...Object.entries(r).filter(([
    e]) => O(e)).map(([, e]) => e)];
  return o.some(L)
}

function V(e, t, r = {}) {
  let n = String(e ?? ""),
    o = Y(n);
  if (o && !H(t)) return o;
  let i = n.replace(/\D/g, "");
  return i && (/^\s*\+1/.test(n) && i.startsWith("1") || 11 === i.length && i.startsWith("1") && z(
    t, r)) ? i.slice(1) : i
}

function W(e) {
  let t = Object.keys(e.regular).filter(x);
  if (0 === t.length && !P(e.regular["Phone Number"])) {
    e.regular["Phone Device Type"] = c;
    return
  }
  for (let r of t) P(e.regular[r]) && (e.regular[r] = c)
}

function G(e, t = {}) {
  let r = e.regular || {},
    n = Object.entries(r).find(([e]) => O(e))?.[1],
    o = _(t.country, e.country, t.autofillInfo?.location?.country, n) ?? n,
    i = N(o);
  if (i)
    for (let e of Object.keys(r).filter(O))
      if (P(r[e])) r[e] = i;
      else {
        let t = N(r[e]);
        t && (r[e] = t)
      }
}

function K(e) {
  try {
    return new URL(e).hostname.replace(/^www\./, "").toLowerCase()
  } catch {
    return ""
  }
}

function X(e) {
  for (let t of Object.keys(e.regular).filter(T)) {
    let r = D(e.regular[t]);
    if (!r) continue;
    let n = K(r);
    !n || n.includes("facebook.com") || n.includes("fb.com") || (e.regular[t] = "")
  }
}

function J(e) {
  return D(e)?.replace(/[^a-zA-Z]/g, "").toLowerCase() ?? ""
}

function Q(e) {
  let t = _(e.regular["First Name"], e.regular["Given Name"]),
    r = _(e.regular["Last Name"], e.regular["Family Name"]),
    n = J([t, r].filter(Boolean).join(" "));
  if (n)
    for (let t of Object.keys(e.regular).filter(C)) J(e.regular[t]) === n && (e.regular[t] = "")
}

function Z(e) {
  let t = D(e);
  return !(!t || /\b(apt|apartment|suite|ste|unit|floor|fl|room|rm|#)\b/i.test(t)) && /^\d+\s+\S+/
    .test(t) &&
    /\b(st|street|ave|avenue|rd|road|blvd|boulevard|ln|lane|dr|drive|ct|court|way|pkwy|parkway)\b\.?$/i
    .test(t)
}

function ee(e) {
  return D(e)?.replace(/[.,]/g, "").replace(/\s+/g, " ").trim().toLowerCase() ?? ""
}

function et(e) {
  let t = Object.entries(e.regular).filter(([e]) => k(e)).map(([, e]) => ee(e)).filter(Boolean);
  if (0 !== t.length)
    for (let r of Object.keys(e.regular).filter(A)) {
      let n = ee(e.regular[r]);
      Z(e.regular[r]) && t.includes(n) && (e.regular[r] = "")
    }
}

function er(e, t) {
  let r = t ?? j(e.state),
    n = Object.keys(e.regular).filter(E);
  if (n.length > 0) {
    for (let t of n) {
      let n = e.regular[t],
        o = j(n);
      o ? e.regular[t] = o : (0, l.isEmptyValue)(n) && r && (e.regular[t] = r)
    }
    return
  }
  if (r)
    for (let t of u) e.regular[t] = r
}
let en =
  /^(Local\s+|Arabic\s+|Latin\s+|Western\s+)?(First Name|Last Name|Given Name(\(s\))?|Family Name|Surname)(\s*-\s*(Latin|Western|Arabic)(\s+Script)?)?$/i;

function eo(e, t = {}) {
  if (e.regular = {
      ...e.regular || {}
    }, t.autofillInfo, e.regular) {
    for (let r of (w(e, t.rules), Object.keys(e.regular))) en.test(r) && "string" == typeof e
      .regular[r] && (e.regular[r] = (0, s.toNameTitleCase)(e.regular[r]));
    e.regular["How Did You Hear About Us?"] = a.SOURCE_VALUES, e.regular[
        "How did you hear about us?"] = a.SOURCE_VALUES, "string" == typeof e.regular?.[
        "Phone Number"
      ] && e.regular["Phone Number"] && (e.regular["Phone Number"] = V(e.regular["Phone Number"], e,
        t)), (e.regular?.["Available to work"] === "" || e.regular?.["Available to work"]) && (e
        .regular["Available to work"] = (0, i.default)().format("MM/DD/YYYY")), er(e), W(e), G(e,
      t), X(e), Q(e), et(e), I(e, t), e.regular.Date = (0, i.default)().format("MM/DD/YYYY")
  }
  if (e.workExperience && e.workExperience.length > 0)
    for (let t of e.workExperience)
      for (let [e, r] of(t?.Start && (t.From = t.Start), t?.End && (t.To = t.End), t &&
          "isCurrent" in t && (t["I currently work here"] = t.isCurrent), Object.entries(t ?? {})))
        "string" == typeof r && (t[e] = r.replace(/[<>[\]{}"\\]/g, ""));
  if (e.education && e.education.length > 0)
    for (let t of e.education)
      for (let [e, r] of(t?.Start && (t.From = t.Start), t?.End && (t.To = t.End), t?.School && (t[
            "School or University"] = t.School), t?.Study && (t["Field of Study"] = t.Study), Object
          .entries(t ?? {}))) "string" == typeof r && (t[e] = r.replace(/[<>[\]{}"\\]/g, ""));
  return e
}

