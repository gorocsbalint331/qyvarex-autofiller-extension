/**
 * Parcel module id: g9Qd1
 * Resolved path: contents/sites/apple/country.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants/country -> 7z2Rw  =>  _tilde_constants/country.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "normalizeAppleCountry", () => m), n.export(r,
    "resolveAppleCountryDefinition", () => g), n.export(r, "resolveAppleCountryOption", () => y), n
  .export(r, "isMainAppleCountrySelect", () => S), n.export(r, "findMainAppleCountrySelect", () =>
    C), n.export(r, "isMainAppleCountryRule", () => A), n.export(r, "isAppleCountryDependentRule",
  () => F), n.export(r, "captureAppleDependentSnapshot", () => P), n.export(r,
    "waitForAppleCountryDependents", () => $), n.export(r, "prefillAppleCountry", () => W);
var o = e("~constants/country"),
  i = e("~utils/delay");
let a = {
    us: ["usa", "united states of america"],
    ca: [],
    gb: ["uk", "gbr", "great britain"]
  },
  l = (0, o.COUNTRY_OPTIONS).map(({
    code: e,
    label: t,
    value: r
  }) => ({
    code: e.toLowerCase(),
    label: t,
    value: r,
    aliases: a[e.toLowerCase()] ?? []
  })),
  s = 'select[name="Country/Region"]',
  u = "select[name], select[id], input[name], input[id], textarea[name], textarea[id]",
  c =
  /(^|[\s[\]_.:/-])(state|province|region|city|postal(?:code)?|zip(?:code)?)(?=$|[\s[\]_.:/-])/i,
  d = /(phone|mobile|citizen|nationality|work.?authorization|education|school)/i,
  f = new WeakMap,
  p = 1;

function m(e) {
  return String(e ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\p{P}\p{S}]+/gu,
    " ").replace(/\s+/g, " ").trim().toLowerCase()
}

function h(e) {
  return new Set([e.code, e.label, e.value, ...e.aliases].map(m).filter(Boolean))
}

function g(e) {
  let t = m(e);
  if (!t) return null;
  let r = l.filter(e => h(e).has(t));
  return 1 === r.length ? r[0] : null
}

function b(e) {
  let t = g(e);
  return t ? h(t) : new Set
}

function y(e, t) {
  let r = b(t);
  if (0 === r.size) return null;
  let n = Array.from(e).filter(e => {
    let t = m(e.text || e.textContent),
      n = m(e.value);
    return r.has(t) || r.has(n)
  });
  return 1 === n.length ? n[0] : null
}

function v(e, t) {
  let r = b(t);
  return 0 === r.size ? [] : Array.from(e).filter(e => {
    let t = m(e.text || e.textContent),
      n = m(e.value);
    return r.has(t) || r.has(n)
  })
}

function w(e) {
  let t = e.getAttribute("aria-label");
  if (t) return t;
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let e = r.split(/\s+/).map(e => document.getElementById(e)?.textContent ?? "").join(" ").trim();
    if (e) return e
  }
  let n = Array.from(e.labels ?? []).map(e => e.textContent ?? "").join(" ").trim();
  return n || (e.closest(".form-dropdown, .form-textbox")?.querySelector(
    ".form-dropdown-label, .form-textbox-label, label")?.textContent?.trim() ?? "")
}

function S(e) {
  if (!e || "SELECT" !== e.tagName) return !1;
  let t = e;
  return "Country/Region" === t.getAttribute("name") && "country region" === m(w(t))
}

function E(e) {
  let t = e.querySelector?.("#apply-profileInformation-form");
  return Array.from(e.querySelectorAll(s)).filter(e => S(e) && x(e) && (!t || t.contains(e)))
}

function x(e) {
  if (!1 === e.isConnected) return !1;
  let t = e;
  for (; t;) {
    let e = t;
    if (e.hidden || e.inert || null !== t.getAttribute("hidden") || "true" === t.getAttribute(
        "aria-hidden") || null !== t.getAttribute("inert")) return !1;
    let r = "undefined" != typeof window && "function" == typeof window.getComputedStyle ? window
      .getComputedStyle(t) : null;
    if (r?.display === "none" || r?.visibility === "hidden" || e.style?.display === "none" || e
      .style?.visibility === "hidden") return !1;
    t = t.parentElement
  }
  return !0
}

function C(e = document) {
  let t = E(e);
  return 1 === t.length ? t[0] : null
}

function A(e) {
  return S(e?.$input)
}

function k(e) {
  let t = e.getAttribute("name") ?? "",
    r = e.getAttribute("id") ?? "",
    n = e.closest?.("[data-address-type], [id*='address'], [class*='address']")?.getAttribute(
    "id") ?? "";
  return [e.tagName, t, r, n].join(":")
}

function T(e) {
  if (!e || "function" != typeof e.getAttribute) return !1;
  let t = [e.getAttribute("name") ?? "", e.getAttribute("id") ?? ""].join(" ");
  return !d.test(t) && c.test(t)
}

function F(e) {
  return T(e?.$input)
}

function I(e) {
  let t = f.get(e);
  if (t) return t;
  let r = p++;
  return f.set(e, r), r
}

function j(e) {
  return !(e.hidden || "true" === e.getAttribute("aria-hidden") || e.style?.display === "none" || e
    .style?.visibility === "hidden")
}

function D(e) {
  let t = e;
  if (t.getAttribute?.("data-country-no-dependents") === "true") return !0;
  let r = C(e);
  return !(r?.getAttribute("data-country-no-dependents") !== "true" && r?.closest?.(
      "form, [data-country-no-dependents]")?.getAttribute("data-country-no-dependents") !==
    "true")
}

function P(e = document) {
  let t = Array.from(e.querySelectorAll(u)).filter(T).map(e => {
    let t = e,
      r = "SELECT" === e.tagName ? Array.from(e.options).map(e => ({
        value: e.value,
        normalizedText: m(e.text || e.textContent),
        selected: e.selected
      })) : [];
    return {
      identity: k(e),
      nodeIdentity: I(e),
      tagName: e.tagName,
      visible: j(e),
      disabled: !!t.disabled,
      options: r
    }
  }).sort((e, t) => e.identity.localeCompare(t.identity));
  return {
    controls: t,
    noDependentTerminal: 0 === t.length && D(e)
  }
}

function _(e) {
  return JSON.stringify(e.controls.map(({
    identity: e,
    tagName: t,
    visible: r,
    disabled: n,
    options: o
  }) => ({
    identity: e,
    tagName: t,
    visible: r,
    disabled: n,
    options: o
  })))
}

function L(e) {
  return JSON.stringify(e.controls.map(({
    identity: e,
    tagName: t,
    visible: r,
    disabled: n,
    options: o
  }) => ({
    identity: e,
    tagName: t,
    visible: r,
    disabled: n,
    options: o.map(({
      value: e,
      normalizedText: t
    }) => ({
      value: e,
      normalizedText: t
    }))
  })))
}

function R(e) {
  return JSON.stringify(e)
}

function O(e, t) {
  return e.controls.length !== t.controls.length || t.controls.some((t, r) => t.nodeIdentity !== e
    .controls[r]?.nodeIdentity)
}

function M(e) {
  return JSON.stringify(e.options.map(({
    value: e,
    normalizedText: t
  }) => ({
    value: e,
    normalizedText: t
  })))
}

function N(e, t) {
  let r = e.controls.filter(e => "SELECT" === e.tagName);
  return 0 === r.length ? L(t) !== L(e) || O(e, t) : r.every(e => {
    let r = t.controls.filter(t => t.identity === e.identity);
    if (1 !== r.length) return !1;
    let n = r[0];
    return M(n) !== M(e)
  })
}
async function $(e, t, r = document, n = {}) {
  let o = Math.max(1, n.maxAttempts ?? 10),
    a = Math.max(0, n.pollMs ?? 50),
    l = _(e),
    s = null,
    u = 0;
  for (let c = 0; c < o; c++) {
    (c > 0 || a > 0) && await (0, i.delay)(a), n.checkpoint?.();
    let o = P(r),
      d = _(o),
      f = 0 === e.controls.length && 0 === o.controls.length && o.noDependentTerminal,
      p = f || o.controls.length > 0 && ("changed" === t ? N(e, o) : d === l);
    if (!p) {
      s = null, u = 0;
      continue
    }
    let m = R(o);
    if (m === s) {
      if (++u >= 1) return !0
    } else s = m, u = 0
  }
  return !1
}

function B(e, t) {
  let r = Array.from(e.options),
    n = y(r, t);
  if (!n) return !1;
  let o = r.indexOf(n);
  return o >= 0 && e.selectedIndex === o && e.value === r[o].value && r[o].selected
}

function q(e, t) {
  let r = Array.from(e.options);
  e.value = r[t].value, e.selectedIndex = t, r.forEach((e, r) => {
    e.selected = r === t
  }), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), e.dispatchEvent(new Event("input", {
    bubbles: !0
  }))
}

function U(e) {
  let t = e.options[e.selectedIndex];
  return t ? {
    value: t.value,
    normalizedText: m(t.text || t.textContent)
  } : null
}

function H(e, t) {
  let r = Array.from(e.options);
  if (t.value) {
    let e = r.reduce((e, r, n) => (r.value === t.value && e.push(n), e), []);
    if (1 === e.length) return e[0]
  }
  let n = r.reduce((e, r, n) => (m(r.text || r.textContent) === t.normalizedText && e.push(n), e),
  []);
  return 1 === n.length ? n[0] : -1
}

function Y(e, t) {
  let r = H(e, t);
  return !(r < 0) && e.selectedIndex === r && e.value === e.options[r].value && e.options[r]
    .selected
}
async function z(e, t, r, n, o, a) {
  if (!e) return !1;
  let l = C(t) ?? r,
    s = H(l, e);
  if (s < 0) return !1;
  q(l, s);
  let u = 0;
  for (let r = 0; r < n; r++) {
    (r > 0 || o > 0) && await (0, i.delay)(o), a?.();
    let l = C(t);
    if (l && Y(l, e)) {
      if (++u >= Math.min(2, n)) return !0
    } else u = 0
  }
  return !1
}

function V(e, t, r = {}) {
  return {
    discovery: e,
    committed: !1,
    dependentsSettled: !1,
    dependentBaseline: t,
    dependentExpectation: "current",
    changed: !1,
    ...r
  }
}
async function W(e, t = document, r = {}) {
  let n = E(t),
    o = 0 === n.length ? "missing" : 1 === n.length ? "unique" : "ambiguous",
    a = r.dependentBaseline ?? P(t),
    l = Math.max(1, r.maxAttempts ?? 10),
    s = Math.max(0, r.pollMs ?? 50);
  if ("unique" !== o) return console.warn("missing" === o ?
    "[Apple][Country] skipped: main geographic Country select is missing" :
    "[Apple][Country] skipped: main geographic Country select is ambiguous"), V(o, a);
  let u = n[0],
    c = g(e);
  if (!m(e)) return console.warn("[Apple][Country] skipped: fresh AFI country is empty"), V(o,
  a, {
    failureReason: "country-empty",
    dependentsSettled: await $(a, "current", t, {
      maxAttempts: l,
      pollMs: s,
      checkpoint: r.checkpoint
    })
  });
  if (!c) return console.warn("[Apple][Country] skipped: fresh AFI country is unresolved"), V(o,
    a, {
      failureReason: "country-unresolved",
      dependentsSettled: await $(a, "current", t, {
        maxAttempts: l,
        pollMs: s,
        checkpoint: r.checkpoint
      })
    });
  let d = Array.from(u.options),
    f = v(d, c.code);
  if (1 !== f.length) {
    let e = f.length > 1;
    return console.warn(e ? "[Apple][Country] skipped: live option match is ambiguous" :
      "[Apple][Country] skipped: no exact live option match"), V(o, a, {
      failureReason: e ? "option-ambiguous" : "option-unmatched",
      dependentsSettled: await $(a, "current", t, {
        maxAttempts: l,
        pollMs: s,
        checkpoint: r.checkpoint
      })
    })
  }
  let p = f[0];
  if (B(u, c.code)) return V(o, a, {
    committed: !0,
    dependentsSettled: await $(a, "current", t, {
      maxAttempts: l,
      pollMs: s,
      checkpoint: r.checkpoint
    })
  });
  let h = d.indexOf(p),
    b = U(u);
  if (h < 0 || !b) return V(o, a, {
    failureReason: "option-unmatched"
  });
  r.checkpoint?.(), q(u, h);
  let y = 0;
  for (let e = 0; e < l; e++) {
    (e > 0 || s > 0) && await (0, i.delay)(s), r.checkpoint?.();
    let n = C(t);
    if (n && B(n, c.code)) {
      if (++y >= Math.min(2, l)) return V(o, a, {
        committed: !0,
        changed: !0,
        dependentExpectation: "changed",
        dependentsSettled: await $(a, "changed", t, {
          maxAttempts: l,
          pollMs: s,
          checkpoint: r.checkpoint
        })
      })
    } else y = 0
  }
  r.checkpoint?.();
  let w = await z(b, t, u, l, s, r.checkpoint);
  if (!w) return console.warn(
    "[Apple][Country] failed: committed state did not stabilize; rollback failed"), V(o, a, {
    changed: !0,
    failureReason: "rollback-failed",
    rollbackSucceeded: !1
  });
  let S = await $(a, "rollback", t, {
    maxAttempts: l,
    pollMs: s,
    checkpoint: r.checkpoint
  });
  return console.warn(
    "[Apple][Country] failed: committed state did not stabilize; selection restored"), V(o, a, {
    changed: !0,
    dependentExpectation: "rollback",
    dependentsSettled: S,
    failureReason: "commit-rejected",
    rollbackSucceeded: !0
  })
}

