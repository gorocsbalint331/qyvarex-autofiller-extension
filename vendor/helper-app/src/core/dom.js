/**
 * Parcel module id: hLMJX
 * Resolved path: src/core/dom.js
 * Dependencies:
 *   ./utils -> aTDh5  =>  src/core/utils.js
 *   ./xpath -> agE4u  =>  src/core/xpath.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "ORACLE_CLOUD_FIELD_FOCUS_TOP_OFFSET", () => l), n.export(r,
    "LEVER_FIELD_FOCUS_TOP_OFFSET", () => s), n.export(r, "SMARTRECRUITERS_FIELD_FOCUS_TOP_OFFSET",
    () => u), n.export(r, "RECRUITERFLOW_FIELD_FOCUS_TOP_OFFSET", () => c), n.export(r,
    "JOBSCORE_FIELD_FOCUS_TOP_OFFSET", () => d), n.export(r, "IBM_FIELD_FOCUS_TOP_OFFSET", () => f),
  n.export(r, "RIPPLING_FIELD_FOCUS_TOP_OFFSET", () => p), n.export(r,
    "QUALCOMM_FIELD_FOCUS_TOP_OFFSET", () => m), n.export(r,
    "RULE_DOM_FIELD_FOCUS_CONTEXT_TOP_OFFSET", () => h), n.export(r, "setFieldFocusRules", () => F),
  n.export(r, "clearFieldFocusRules", () => I), n.export(r, "setSectionResultFocusRules", () => j),
  n.export(r, "updateFieldFocusRule", () => D), n.export(r, "updateFieldFocusRuleTarget", () => P),
  n.export(r, "updateFileInputFieldFocusRule", () => L), n.export(r, "getElementIndex", () => O), n
  .export(r, "focusSectionResultRow", () => G), n.export(r, "focusFieldByRuleLabel", () => ed), n
  .export(r, "focusLabelElement", () => ef);
var o = e("./utils"),
  i = e("./xpath"),
  a = e("~utils/fieldLabel");
let l = 96,
  s = 110,
  u = 110,
  c = 110,
  d = 150,
  f = 110,
  p = 65,
  m = 220,
  h = 50,
  g = ".apply-flow-navigation-train",
  b = ".input-row",
  y = 1,
  v = ["$input", "$label", "$fieldRow", "$checkboxs", "$radioParent", "$radios"],
  w = ["oraclecloud.com", "oraclegovcloud.com"],
  S = ["ultipro.com", "ultipro.ca", "rec.pro.ukg.net"],
  E = {
    country: ["country"],
    addressline1: ["addressLine1"],
    zipcode: ["postalCode"],
    postalcode: ["postalCode"],
    zip: ["postalCode"],
    city: ["city"],
    state: ["region2"],
    province: ["region2"],
    county: ["region1"]
  },
  x = [{
    domains: ["jobs.lever.co", "jobs.eu.lever.co"],
    offset: s
  }, {
    domains: ["jobs.smartrecruiters.com"],
    offset: u
  }, {
    domains: ["recruiterflow.com"],
    offset: c
  }, {
    domains: ["jobscore.com"],
    offset: d
  }, {
    domains: ["careers.ibm.com"],
    offset: f
  }, {
    domains: ["ats.rippling.com", "rippling-ats.com"],
    offset: p
  }, {
    domains: ["careers.qualcomm.com", "jobs.qualcomm.com"],
    offset: m
  }, {
    domains: w,
    offset: l
  }],
  C = [],
  A = new Map,
  k = new Map;

function T(e) {
  if (!Array.isArray(e)) return [];
  let t = [];
  for (let r of e) r && "object" == typeof r && (t.push(r), t.push(...T(r.children)));
  return t
}

function F(e) {
  C = T(e)
}

function I() {
  C = [], A.clear(), k.clear()
}

function j(e, t) {
  k.set(e, t)
}

function D(e) {
  if (!e?.label) return;
  let t = (0, a.normalizeFieldLabel)(e.label);
  if (!t) return;
  let r = T([e]),
    n = new Set(r.map(e => (0, a.normalizeFieldLabel)(e.label ?? "")).filter(Boolean));
  C = [...C.filter(e => !n.has((0, a.normalizeFieldLabel)(e.label ?? ""))), ...r]
}

function P(e, t, r = {}) {
  if (!t) return;
  let n = r.$fieldRow ?? (H(t) ? null : _(t)),
    o = (0, a.normalizeFieldLabel)(e);
  o && A.set(o, {
    label: e,
    $input: t,
    ...r,
    ...n ? {
      $fieldRow: n
    } : {}
  })
}

function _(e) {
  let t = e.parentElement;
  for (; t && t.tagName?.toLowerCase() !== "body";) {
    if (H(t)) return t;
    t = t.parentElement
  }
  return null
}

function L(e, t) {
  P(e, t)
}

function R() {
  return "undefined" == typeof window ? "" : window.location?.hostname ?? ""
}

function O(e) {
  if (!e || !e.parentNode) return [-1, 0];
  let t = Array.from(e.parentNode.children),
    r = 0;
  for (; e = e.previousElementSibling;) r++;
  return [r, t.length]
}

function M() {
  let e = R();
  return e ? x.find(({
    domains: t
  }) => o.matchesAnyDomain(e, t))?.offset ?? 0 : 0
}

function N(e) {
  if (!e || "auto" === e) return 0;
  let t = Number.parseFloat(e);
  return Number.isFinite(t) ? t : 0
}

function $() {
  if ("undefined" == typeof document || "function" != typeof getComputedStyle) return 0;
  let e = document.documentElement,
    t = document.body;
  return Math.max(e ? N(getComputedStyle(e).scrollPaddingTop) : 0, t ? N(getComputedStyle(t)
    .scrollPaddingTop) : 0)
}

function B(e) {
  let t = e;
  return "function" == typeof t.closest && !!t.closest(g)
}

function q(e) {
  let t = e.tagName?.toLowerCase(),
    r = e.getAttribute?.("type")?.toLowerCase();
  return "input" === t && "hidden" === r
}

function U(e) {
  if ("function" != typeof e.getBoundingClientRect) return !1;
  let t = e.getBoundingClientRect();
  return 0 === t.width && 0 === t.height
}

function H(e) {
  let t = e;
  return t?.offsetParent !== null && !q(t) && !U(t)
}

function Y(e) {
  return !!(e && "object" == typeof e && "function" == typeof e.getBoundingClientRect)
}

function z(e) {
  let t = [];
  for (let r of v) {
    let n = e[r];
    if (Array.isArray(n)) {
      t.push(...n.filter(Y));
      continue
    }
    Y(n) && t.push(n)
  }
  return t
}

function V(e) {
  let t = z(e).find(e => !1 !== e.isConnected && H(e)) ?? null;
  if (t) return t;
  for (let t of e.children ?? []) {
    let e = V(t);
    if (e) return e
  }
  return null
}

function W(e) {
  let t = (0, a.normalizeFieldLabel)(e);
  if (!t) return null;
  let r = A.get(t),
    n = r ? V(r) : null;
  if (n) return n;
  let o = C.find(e => (0, a.normalizeFieldLabel)(e.label ?? "") === t);
  return o ? V(o) : null
}

function G(e, t, r) {
  if (!Number.isInteger(t) || t < 0) return;
  let n = k.get(e)?.[t],
    o = void 0 === r ? n : T(n?.children).find(e => (0, a.normalizeFieldLabel)(e.label ?? "") === (
      0, a.normalizeFieldLabel)(r)),
    i = void 0 !== r && o ? {
      ...o,
      $label: void 0
    } : o,
    l = i ? V(i) : null;
  console.debug("[Autofill][section-focus] navigation", {
    type: e,
    index: t,
    scope: void 0 === r ? "record" : "field",
    reason: n ? o ? l ? "target-found" : "target-unavailable" : "field-not-found" :
      "record-not-registered"
  }), l && eu(l, h)
}
let K = 3;

function X(e, t) {
  let r = e.childNodes;
  if (!r) return !1;
  for (let e = 0; e < r.length; e++) {
    let n = r[e];
    if (n.nodeType === K && (n.nodeValue ?? "").includes(t)) return !0
  }
  return !1
}

function J(e, t) {
  return X(e, t) || (e.getAttribute?.("value") ?? "").includes(t)
}

function Q(e) {
  return e.replace(/[*\s_-]+/g, "").replace(/[^a-z0-9]/gi, "").toLowerCase()
}

function Z(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function ee(e, t) {
  let r = t.trim().split(/\s+/).map(Z).join("\\s+");
  return !!r && RegExp(`(^|[^a-z0-9])${r}([^a-z0-9]|$)`, "i").test(e)
}

function et(e) {
  return E[Q(e)] ?? []
}

function er(e) {
  let t = e.getAttribute?.("aria-labelledby"),
    r = document?.getElementById?.bind(document);
  return t && r ? t.split(/\s+/).map(e => r(e)?.textContent ?? "").join(" ") : ""
}

function en(e, t, r) {
  let n = `${e.getAttribute?.("aria-label")??""} ${er(e)}`;
  if (ee(n, t)) return !0;
  let o = (e.getAttribute?.("name") ?? "").toLowerCase(),
    i = (e.getAttribute?.("id") ?? "").toLowerCase();
  return r.some(e => {
    let t = e.toLowerCase();
    return o === t || i === t || i.startsWith(`${t}-`) || i.includes(t)
  })
}

function eo(e) {
  let t = e.closest?.(b);
  return t && H(t) ? t : null
}

function ei(e) {
  if ("undefined" == typeof document) return null;
  let t = et(e);
  if (0 === t.length || "function" != typeof document.querySelectorAll) return null;
  let r = Array.from(document.querySelectorAll(
    'input[role="combobox"], [role="combobox"], input[name], select[name], textarea[name], [aria-label], [aria-labelledby]'
    ));
  for (let n of r)
    if (!B(n) && en(n, e, t) && H(n)) return eo(n) ?? n;
  return null
}

function ea(e) {
  return "PLASMO-CSUI" === e.tagName || e.classList?.contains?.("jr-edit-ai-host") === !0
}

function el(e) {
  if ("undefined" == typeof document || "function" != typeof document.createTreeWalker ||
    "undefined" == typeof NodeFilter) return null;
  let t = (r, n) => {
    let o = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT),
      i = () => o.nextNode();
    for (let r = i(); r; r = i())
      if (!ea(r)) {
        if (n && J(r, e) && H(r)) return r;
        if (r.shadowRoot) {
          let e = t(r.shadowRoot, !0);
          if (e) return e
        }
      } return null
  };
  return t(document, !1)
}

function es(e) {
  let t =
    `//*[contains(text(), ${(0,i.escapeXPath)(e)}) or contains(@value, ${(0,i.escapeXPath)(e)})]`,
    r = (0, o.matchesAnyDomain)(R(), w);
  if (r) {
    let t = ei(e);
    if (t) return t
  }
  let n = (0, i.getOrderedNodes)(t).find(e => {
    if (!H(e)) return !1;
    if (!r) return !0;
    let t = e;
    return !B(t)
  });
  return n || el(e)
}

function eu(e, t = 0) {
  if ((0, o.matchesAnyDomain)(R(), S)) {
    console.debug("[Autofill][field-focus] using element scroll container", {
      hostname: R()
    }), e.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    return
  }
  let r = Math.max(M(), $()) + t;
  if (r > 0 && "undefined" != typeof window && "function" == typeof window.scrollTo && "function" ==
    typeof e.getBoundingClientRect) {
    let t = e.getBoundingClientRect(),
      n = Math.abs(t.top - r) <= y;
    if (n) return;
    let o = Math.max((window.scrollY ?? window.pageYOffset ?? 0) + t.top - r, 0);
    window.scrollTo({
      top: o,
      behavior: "smooth"
    });
    return
  }
  e.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}

function ec(e) {
  let t = es(e);
  return !!t && (eu(t), !0)
}

function ed(e) {
  if (ec(e)) {
    (0, o.focusIframeLabel)(e);
    return
  }
  let t = W(e);
  t && eu(t, h), (0, o.focusIframeLabel)(e)
}

function ef(e) {
  ed(e)
}

