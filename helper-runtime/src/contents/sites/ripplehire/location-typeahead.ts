// @ts-nocheck
/**
 * RippleHire location typeahead — readable TypeScript source of truth.
 */

import * as cancellation from "../../methods/cancellation.js"
let i = "ul.typeahead.dropdown-menu[role=listbox]", a = ".pac-container", l = "#currentLocation[name=currentLocation].pac-target-input", s = ".no-results, [data-no-results=true]", u = ".loading, .typeahead-loading, [data-loading=true]", c = 25, d = 10, f = 3e3, p = 1e3, m = 100, h = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
function b(e) {
  return e instanceof cancellation.CancelledError || e instanceof cancellation.SkippedError;
}
function y(e) {
  return { status: e, candidates: [] };
}
function v(e) {
  return "string" == typeof e ? e.normalize("NFKC").replace(/\s+/g, " ").trim() : "";
}
function w(e) {
  return v(e).toLowerCase();
}
function S(e) {
  return w(e).split(",", 1)[0]?.trim() || "";
}
function E(e, t) {
  let r = S(t);
  return !!r && e.some((e2) => S(e2.text).startsWith(r));
}
function x(e, t) {
  let r = (h.get(e) || 0) + 1;
  return h.set(e, r), g.set(e, { generation: r, searchInput: t, ownedValues: /* @__PURE__ */ new Set() }), r;
}
function C(e) {
  h.set(e, (h.get(e) || 0) + 1), g.delete(e);
}
function A(e, t, r) {
  let n = g.get(e);
  n?.generation === t && n.ownedValues.add(r);
}
function k(e, t, r) {
  try {
    return h.get(e) === t && e.ownerDocument.activeElement === e && e.value === r;
  } catch {
    return false;
  }
}
function T(e) {
  return e.ownerDocument?.defaultView || null;
}
function F(e) {
  try {
    if (e.hidden || e.getAttribute?.("aria-hidden") === "true") return false;
    let t = e.ownerDocument?.defaultView, r = t?.getComputedStyle?.(e);
    if (r?.display === "none" || r?.visibility === "hidden" || r?.visibility === "collapse") return false;
    if ("function" == typeof e.getClientRects) return e.getClientRects().length > 0;
    return true;
  } catch {
    return false;
  }
}
function I(e) {
  try {
    return e.getAttribute?.("aria-disabled") === "true" || e.getAttribute?.("disabled") !== null || e.classList?.contains("disabled") === true || e.matches?.(":disabled") === true;
  } catch {
    return true;
  }
}
function j(e) {
  try {
    return e.isConnected && F(e) && !I(e);
  } catch {
    return false;
  }
}
function D(e) {
  try {
    if (e.matches(l)) return "pac";
    if (e.matches("#indiaLocation[name=indiaLocation]")) return "bootstrap";
  } catch {
  }
  return null;
}
function P(e, t) {
  let r = "pac" === t ? a : i;
  return Array.from(e.querySelectorAll(r));
}
function _(e, t) {
  let r = /* @__PURE__ */ new WeakMap();
  try {
    let n = e.defaultView?.MutationObserver;
    if (!n || !e.documentElement) return { version: () => 0, disconnect: () => void 0 };
    let o2 = new n((n2) => {
      let o3 = P(e, t);
      for (let e2 of n2) {
        let t2 = e2.target;
        for (let e3 of o3) (e3 === t2 || e3.contains(t2)) && r.set(e3, (r.get(e3) || 0) + 1);
      }
    });
    return o2.observe(e.documentElement, { attributes: true, childList: true, characterData: true, subtree: true }), { version: (e2) => r.get(e2) || 0, disconnect: () => o2.disconnect() };
  } catch {
    return { version: () => 0, disconnect: () => void 0 };
  }
}
function L(e, t) {
  if ("pac" === t) return Array.from(e.querySelectorAll?.(".pac-item") || []);
  let r = Array.from(e.querySelectorAll?.("li") || []);
  if (r.length > 0) return r;
  let n = Array.from(e.querySelectorAll?.("[role=option]") || []);
  return n.length > 0 ? n : Array.from(e.querySelectorAll?.("a, button") || []);
}
function R(e) {
  try {
    let t = v(e.querySelector?.(".pac-item-query")?.textContent);
    if (!t) return v(e.textContent);
    let r = [t];
    for (let t2 of Array.from(e.children || [])) {
      if (!t2.matches?.("span") || t2.matches?.(".pac-icon") || t2.matches?.(".pac-item-query")) continue;
      let e2 = v(t2.textContent);
      e2 && !r.includes(e2) && r.push(e2);
    }
    return r.join(", ");
  } catch {
    return "";
  }
}
function O(e) {
  try {
    return e.querySelector?.("a, button, [role=option]") || e;
  } catch {
    return e;
  }
}
function M(e, t) {
  return e.matches(t) ? e : e.querySelector(t);
}
function N(e) {
  let t = v(e);
  return /^(no results?|no matches?)( found| available)?[.!]?$/i.test(t);
}
function $(e, t) {
  let r = [];
  for (let n of L(e, t)) {
    let e2 = O(n), o2 = "string" == typeof n.textContent ? n.textContent : "", i2 = M(n, s), a2 = M(n, u), l2 = !!i2 && N(i2.textContent), c2 = !!a2;
    r.push({ element: n, clickTarget: e2, rawText: o2, text: "pac" === t ? R(n) : v(o2), isNoResultMarker: l2, isLoadingMarker: c2, eligible: F(n) && F(e2) && !I(n) && !I(e2) && !l2 && !c2 });
  }
  return r;
}
function B(e) {
  return e.filter((e2) => e2.eligible && !!e2.text);
}
function q(e, t) {
  let r = $(e, t), n = B(r), o2 = Array.from(e.querySelectorAll(s)), i2 = Array.from(e.querySelectorAll(u)), a2 = o2.some((e2) => F(e2) && N(e2.textContent)), l2 = e.getAttribute?.("aria-busy") === "true" || i2.some(F);
  return { allRows: r, rows: n, hasVisibleNoResultMarker: a2, loading: l2, fingerprint: JSON.stringify({ hidden: !F(e), hasVisibleNoResultMarker: a2, loading: l2, rows: r.map((e2) => [e2.rawText, e2.text, e2.eligible, e2.isNoResultMarker, e2.isLoadingMarker]) }) };
}
function U(e, t) {
  try {
    let r = T(e), n = r?.HTMLInputElement, o2 = n ? Object.getOwnPropertyDescriptor(n.prototype, "value")?.set : void 0;
    if ("function" != typeof o2) return false;
    return o2.call(e, t), e.value === t;
  } catch {
    return false;
  }
}
function H(e, t, r, n) {
  try {
    let o2 = T(e), i2 = o2?.[t] || o2?.Event;
    return i2 ? new i2(r, n) : null;
  } catch {
    return null;
  }
}
function Y(e, t) {
  try {
    if (e.focus(), e.ownerDocument.activeElement !== e) return false;
    let r = H(e, "KeyboardEvent", "keydown", { bubbles: true, key: t.at(-1) || "Unidentified" });
    if (r && e.dispatchEvent(r), !U(e, t)) return false;
    let n = H(e, "InputEvent", "input", { bubbles: true, composed: true, data: t, inputType: "insertText" });
    if (!n) return false;
    e.dispatchEvent(n);
    let o2 = H(e, "KeyboardEvent", "keyup", { bubbles: true, key: t.at(-1) || "Unidentified" });
    return o2 && e.dispatchEvent(o2), e.ownerDocument.activeElement === e;
  } catch {
    return false;
  }
}
async function z(e, t) {
  cancellation.checkpoint();
  let r = h.get(e), n = g.get(e), i2 = x(e, t);
  try {
    let a2 = e.ownerDocument;
    if (!a2 || "string" != typeof t) return { status: "failed" };
    let l2 = D(e);
    if (!l2) return { status: "failed" };
    let s2 = P(a2, l2).filter(F), u2 = new Map(s2.map((e2) => [e2, q(e2, l2).fingerprint])), c2 = n && n.generation === r && n.menu && s2.includes(n.menu) && n.menuFingerprint === u2.get(n.menu) ? n.menu : null, p2 = _(a2, l2);
    try {
      if (cancellation.checkpoint(), !Y(e, t) || (A(e, i2, t), cancellation.checkpoint(), !k(e, i2, t))) return { status: "failed" };
      let r2 = null, n2 = "", s3 = 0, h2 = 0, b2 = false, y2 = Date.now(), v2 = y2 + f, w2 = v2 + m;
      for (; Date.now() <= w2 + d && (cancellation.checkpoint(), !(!k(e, i2, t) || !b2 && Date.now() > v2)); ) {
        let f2 = P(a2, l2).filter(F);
        if (f2.length > 1) break;
        if (1 === f2.length) {
          h2 = 0;
          let a3 = f2[0], c3 = q(a3, l2), d2 = c3.fingerprint, y3 = p2.version(a3), v3 = u2.get(a3), S2 = void 0 === v3 || v3 !== d2 || y3 > 0;
          if (S2) {
            if (b2 = true, (a3 !== r2 || d2 !== n2) && (r2 = a3, n2 = d2, s3 = Date.now()), Date.now() - s3 >= m && !c3.loading) {
              if (c3.hasVisibleNoResultMarker && c3.rows.length > 0) return cancellation.checkpoint(), { status: "failed" };
              if (c3.rows.length > 0 && E(c3.rows, t) && k(e, i2, t)) {
                cancellation.checkpoint();
                let t2 = g.get(e);
                return t2?.generation === i2 && (t2.menu = a3, t2.menuFingerprint = c3.fingerprint), { status: "ready", menu: a3, rows: c3.rows, allRows: c3.allRows, generation: i2 };
              }
              if (c3.hasVisibleNoResultMarker && Date.now() >= w2 && k(e, i2, t)) return cancellation.checkpoint(), { status: "no-results" };
            }
          } else r2 = null, n2 = "", s3 = 0;
        } else {
          r2 = null, n2 = "", s3 = 0;
          let e2 = "bootstrap" === l2 && c2 && p2.version(c2) > 0 && !F(c2);
          if (e2) {
            if (b2 = true, h2 || (h2 = Date.now()), Date.now() - h2 >= m) return cancellation.checkpoint(), { status: "no-results" };
          } else h2 = 0;
        }
        await cancellation.cancellableDelay(d);
      }
    } finally {
      p2.disconnect();
    }
  } catch (e2) {
    if (b(e2)) throw e2;
  }
  return { status: "failed" };
}
function V(e, t) {
  try {
    let r = g.get(e), n = D(e);
    if (!n || !r?.menu || r.generation !== h.get(e) || r.searchInput !== t || !k(e, r.generation, t)) return null;
    let o2 = P(e.ownerDocument, n).filter(F);
    if (1 !== o2.length || o2[0] !== r.menu) return null;
    let i2 = q(r.menu, n);
    if (i2.fingerprint !== r.menuFingerprint || i2.loading || i2.hasVisibleNoResultMarker || 0 === i2.rows.length || !E(i2.rows, t)) return null;
    return { status: "ready", menu: r.menu, rows: i2.rows, allRows: i2.allRows, generation: r.generation };
  } catch {
    return null;
  }
}
async function captureRipplehireLocationCandidates(e, t) {
  cancellation.checkpoint();
  let r = await z(e, t);
  if (cancellation.checkpoint(), "ready" !== r.status) return y(r.status);
  let n = /* @__PURE__ */ new Set();
  for (let e2 of r.rows) {
    if (cancellation.checkpoint(), n.has(e2.text)) return y("failed");
    n.add(e2.text);
  }
  return cancellation.checkpoint(), { status: "ready", candidates: r.rows.slice(0, c).map((e2, t2) => ({ candidate_key: `candidate-${t2 + 1}`, value: e2.text, text: e2.text })) };
}
function G(e, t) {
  let r = [["PointerEvent", "pointerdown"], ["MouseEvent", "mousedown"], ["PointerEvent", "pointerup"], ["MouseEvent", "mouseup"], ["MouseEvent", "click"]];
  try {
    for (let [n, i2] of r) {
      cancellation.checkpoint();
      let r2 = H(e, n, i2, { bubbles: true, cancelable: true, composed: true, button: 0, buttons: i2.endsWith("down") ? 1 : 0 });
      if (!r2) return false;
      cancellation.checkpoint(), t.dispatchEvent(r2);
    }
    return true;
  } catch (e2) {
    if (b(e2)) throw e2;
    return false;
  }
}
function K(e, t) {
  let r = [...Array.from({ length: t + 1 }, () => ({ key: "ArrowDown", code: "ArrowDown", keyCode: 40 })), { key: "Enter", code: "Enter", keyCode: 13 }];
  try {
    for (let { key: t2, code: n, keyCode: i2 } of r) for (let r2 of ["keydown", "keypress", "keyup"]) {
      cancellation.checkpoint();
      let a2 = H(e, "KeyboardEvent", r2, { bubbles: true, cancelable: true, composed: true, key: t2, code: n, keyCode: i2, which: i2 });
      if (!a2) return false;
      try {
        Object.defineProperty(a2, "keyCode", { get: () => i2 }), Object.defineProperty(a2, "which", { get: () => i2 });
      } catch {
      }
      e.dispatchEvent(a2);
    }
    return true;
  } catch (e2) {
    if (b(e2)) throw e2;
    return false;
  }
}
async function commitRipplehireLocationCandidate(e, t, r) {
  cancellation.checkpoint();
  try {
    if ("string" != typeof t?.text || !t.text || t.value !== t.text) return false;
    let n = g.get(e);
    if (n && (n.generation !== h.get(e) || n.searchInput !== r || !k(e, n.generation, n.searchInput))) return false;
    let i2 = V(e, r) || await z(e, r);
    if (cancellation.checkpoint(), "ready" !== i2.status) return false;
    let a2 = i2.allRows.filter((e2) => e2.text === t.text);
    if (1 !== a2.length || !a2[0].eligible || !k(e, i2.generation, r) || (cancellation.checkpoint(), A(e, i2.generation, t.text), !G(e, a2[0].clickTarget))) return false;
    cancellation.checkpoint();
    let l2 = D(e);
    if (!l2) return false;
    let s2 = () => {
      let r2 = P(e.ownerDocument, l2).filter(F);
      return v(e.value) === v(t.text) && 0 === r2.length;
    };
    if ("pac" === l2 && !s2()) {
      let t2 = i2.rows.indexOf(a2[0]);
      if (t2 < 0) return false;
      for (let t3 of i2.rows) A(e, i2.generation, t3.text);
      if (!K(e, t2)) return false;
      cancellation.checkpoint();
    }
    let u2 = Date.now() + p;
    for (; Date.now() <= u2 && (cancellation.checkpoint(), j(e) && h.get(e) === i2.generation); ) {
      if (s2()) return cancellation.checkpoint(), j(e) && h.get(e) === i2.generation;
      await cancellation.cancellableDelay(d);
    }
  } catch (e2) {
    if (b(e2)) throw e2;
  }
  return false;
}
async function clearRipplehireLocationTemporaryValue(e, t = "", r) {
  let n = g.get(e), o2 = !n || n.generation === h.get(e) && n.ownedValues.has(e.value);
  if (C(e), r?.aborted || !o2 || !U(e, t) || r?.aborted) return;
  let i2 = H(e, "InputEvent", "input", { bubbles: true, composed: true, data: t, inputType: "insertReplacementText" });
  if (!i2 || r?.aborted || (e.dispatchEvent(i2), r?.aborted)) return;
  let a2 = H(e, "Event", "change", { bubbles: true, composed: true });
  if (!a2 || r?.aborted || (e.dispatchEvent(a2), r?.aborted)) return;
  let l2 = H(e, "KeyboardEvent", "keydown", { bubbles: true, key: "Escape" });
  if (l2 && !r?.aborted && e.dispatchEvent(l2), r?.aborted) return;
  let s2 = H(e, "KeyboardEvent", "keyup", { bubbles: true, key: "Escape" });
  s2 && !r?.aborted && e.dispatchEvent(s2), r?.aborted || e.blur();
}

export {
  captureRipplehireLocationCandidates,
  clearRipplehireLocationTemporaryValue,
  commitRipplehireLocationCandidate,
}
