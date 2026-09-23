// @ts-nocheck
/**
 * RippleHire skills operation — readable TypeScript source of truth.
 */

import * as cancellation from "../../methods/cancellation.ts"
function i(e) {
  return e.replace(/\s+/g, " ").trim().toLowerCase();
}
function normalizeRipplehireSkillItems(e) {
  let t = Array.isArray(e) ? e : "string" == typeof e ? e.split(",") : [], r = /* @__PURE__ */ new Set();
  return t.reduce((e2, t2) => {
    if ("string" != typeof t2) return e2;
    let n = t2.replace(/\s+/g, " ").trim(), o2 = i(n);
    return n && !r.has(o2) && (r.add(o2), e2.push(n)), e2;
  }, []);
}
function l(e, t, r) {
  return e.length > 0 && 0 === r.length ? "filled" : t.length ? "partial" : "missing";
}
function s(e, t) {
  return Number.isFinite(e) ? Math.max(0, Math.floor(e)) : t;
}
async function fillRipplehireSkillItems(e, t, r = {}) {
  let n = a(e), o2 = Math.min(20, s(r.maxItems, 20)), u2 = Math.min(2, Math.max(1, s(r.maxAttempts, 2))), c2 = (e2) => new Set(e2.map(i).filter(Boolean)), d2 = 0, f2 = async (e2) => {
    let o3 = /* @__PURE__ */ new Set();
    try {
      o3 = c2([...t.readCommittedItemsOnInterruption ? await t.readCommittedItemsOnInterruption() : await t.readCommittedItems()]);
    } catch {
    }
    let a2 = n.filter((e3) => o3.has(i(e3))), s2 = n.filter((e3) => !o3.has(i(e3))), u3 = { status: l(n, a2, s2), requestedItems: n, succeededItems: a2, failedItems: s2 };
    try {
      await r.onInterruptedResult?.(u3);
    } catch {
    }
    try {
      await t.clearTransientInput?.();
    } catch {
    }
    throw e2;
  }, p2 = async () => {
    try {
      return c2([...await t.readCommittedItems()]);
    } catch (e2) {
      return r.isInterruption?.(e2) && await f2(e2), d2 += 1, y("read-failed", { requestedCount: n.length, readFailureCount: d2 }), null;
    }
  }, m2 = await p2(), h2 = m2?.size ?? 0;
  y("fill-start", { requestedCount: n.length, initialCommittedCount: h2, maxItems: o2, capacityRemaining: m2 ? Math.max(0, o2 - m2.size) : o2 });
  let g2 = false;
  for (let e2 of n) {
    let a2 = i(e2);
    if (!m2?.has(a2)) {
      if (m2 && m2.size >= o2) {
        g2 || (y("capacity-reached", { requestedCount: n.length, committedCount: m2.size, maxItems: o2, capacityRemaining: 0 }), g2 = true);
        continue;
      }
      for (let n2 = 0; n2 < u2; n2 += 1) {
        try {
          await t.attemptExactItem(e2);
        } catch (e3) {
          r.isInterruption?.(e3) && await f2(e3);
        }
        if (m2 = await p2(), m2?.has(a2) || m2 && m2.size >= o2) break;
      }
    }
  }
  let b2 = await p2(), v2 = b2 ? n.filter((e2) => b2.has(i(e2))) : [], w = b2 ? n.filter((e2) => !b2.has(i(e2))) : [...n];
  return { status: l(n, v2, w), requestedItems: n, succeededItems: v2, failedItems: w };
}
function c(e, t) {
  let r = e.id ? t.getElementById(e.id) : null;
  return r?.tagName?.toLowerCase() === "input" ? r : null;
}
function d(e, t) {
  let r = c(e, t), n = r ? t.getElementById(`token-input-${r.id}`) : null;
  return n?.tagName?.toLowerCase() === "input" ? n : null;
}
function f(e, t) {
  let r = c(e, t), n = r?.closest(".form-group") ?? r?.parentElement;
  return n ? Array.from(n.querySelectorAll("li.token-input-token-facebook > p")).map((e2) => e2.textContent?.replace(/\s+/g, " ").trim() || "").filter(Boolean) : [];
}
function p(e) {
  e && (e.value = "", e.dispatchEvent(new Event("input", { bubbles: true })), e.dispatchEvent(new Event("change", { bubbles: true })));
}
function m(e) {
  let t = 65, r = { bubbles: true, cancelable: true, key: "a", code: "KeyA", keyCode: t, which: t }, n = "undefined" == typeof KeyboardEvent ? new Event(e, r) : new KeyboardEvent(e, r);
  for (let e2 of ["keyCode", "which"]) if (Number(n[e2]) !== t) try {
    Object.defineProperty(n, e2, { value: t });
  } catch {
  }
  return n;
}
function h(e, t) {
  for (let r of (e.focus(), p(e), e.value = t, e.dispatchEvent(new Event("input", { bubbles: true })), e.dispatchEvent(new Event("change", { bubbles: true })), ["keydown", "keyup"])) e.dispatchEvent(m(r));
}
function g(e) {
  let t = e.replace(/\s+/g, " ").trim();
  if (!t) return [];
  let r = [t], n = t.replace(/\s+skills?$/i, "").trim();
  return n.length >= 3 && i(n) !== i(t) && r.push(n), r;
}
function b(e) {
  for (let t = e; t; t = t.parentElement) {
    if (!t.isConnected || t.hidden) return false;
    let e2 = t.ownerDocument?.defaultView?.getComputedStyle?.(t), r = e2?.display ?? t.style.display, n = e2?.visibility ?? t.style.visibility;
    if ("none" === r || "hidden" === n || "collapse" === n) return false;
  }
  return true;
}
function y(e, t) {
  console.debug(`[RipplehireSkills] ${JSON.stringify({ reason: e, ...t })}`);
}
function createRipplehireSkillsDomAdapter(e, t = {}) {
  let r = t.root ?? document, n = t.wait ?? cancellation.cancellableDelay, a2 = Math.max(2e3, s(t.dropdownWaitMs, 2e3)), l2 = Math.max(1, s(t.pollIntervalMs, 50)), u2 = 0, c2 = 0, m2 = () => f(e, r), v2 = () => p(d(e, r)), w = async (t2) => {
    let o2 = ++c2, s2 = [], u3 = /* @__PURE__ */ new Set(), f2 = 0;
    for (let o3 of g(t2)) {
      let t3 = d(e, r);
      if (!t3 || i(o3).length < 3) break;
      f2 += 1;
      try {
        let e2 = Array.from(r.querySelectorAll(".token-input-dropdown-facebook")).filter(b), c3 = 1 === e2.length ? e2[0] : null, d2 = c3 ? i(c3.textContent || "") : "", f3 = 0 === e2.length;
        h(t3, o3);
        for (let t4 = 0; t4 <= a2; t4 += l2) {
          let t5 = Array.from(r.querySelectorAll(".token-input-dropdown-facebook")).filter(b);
          if (t5.length > 1) break;
          if (0 === t5.length) {
            f3 || (f3 = e2.length > 0), await n(l2);
            continue;
          }
          if (1 === t5.length) {
            let e3 = i(t5[0].textContent || "");
            if (!(f3 || (f3 = t5[0] !== c3 || e3 !== d2))) {
              await n(l2);
              continue;
            }
            let r2 = Array.from(t5[0].querySelectorAll("li")).map((e4) => e4.textContent?.replace(/\s+/g, " ").trim() || "").filter(Boolean);
            for (let e4 of r2) {
              let t6 = i(e4);
              !u3.has(t6) && s2.length < 25 && (u3.add(t6), s2.push(e4));
            }
            if (r2.length > 0) break;
          }
          await n(l2);
        }
      } finally {
        v2();
      }
      if (s2.length > 0) break;
    }
    return y("candidate-capture", { capture: o2, queryCount: f2, candidateCount: s2.length }), s2;
  };
  return { readCommittedItems: m2, readCommittedItemsOnInterruption: m2, captureCandidateItems: w, clearTransientInput: v2, async attemptExactItem(t2) {
    let o2 = ++u2, s2 = i(t2), c3 = d(e, r);
    if (!c3 || s2.length < 3) return p(c3), y(c3 ? "below-min-chars" : "missing-search", { attempt: o2 }), false;
    try {
      h(c3, t2);
      let e2 = false, u3 = false, d2 = 0;
      for (let t3 = 0; t3 <= a2; t3 += l2) {
        let t4 = Array.from(r.querySelectorAll(".token-input-dropdown-facebook")).filter(b);
        if (t4.length > 1) return y("ambiguous-dropdown", { attempt: o2, dropdownCount: t4.length }), false;
        if (1 === t4.length) {
          e2 = true;
          let r2 = Array.from(t4[0].querySelectorAll("li"));
          d2 = Math.max(d2, r2.length), 0 === r2.length && (u3 || (u3 = Array.from(t4[0].querySelectorAll("p")).some((e3) => i(e3.textContent || "").includes("searching"))));
          let a3 = r2.filter((e3) => i(e3.textContent || "") === s2);
          if (1 !== a3.length) {
            if (a3.length > 1) return y("ambiguous-exact", { attempt: o2, exactCount: a3.length }), false;
            await n(l2);
            continue;
          }
          try {
            a3[0].dispatchEvent("undefined" == typeof MouseEvent ? new Event("mousedown", { bubbles: true, cancelable: true }) : new MouseEvent("mousedown", { bubbles: true, cancelable: true, button: 0 }));
          } catch {
            a3[0].dispatchEvent(new Event("mousedown", { bubbles: true, cancelable: true }));
          }
          for (let e3 = 0; e3 < 10; e3 += 1) {
            let e4 = m2();
            if (e4.some((e5) => i(e5) === s2)) return y("committed", { attempt: o2, dropdownCount: 1, committedCount: e4.length }), true;
            await n(l2);
          }
          return y("not-committed", { attempt: o2, dropdownCount: 1 }), false;
        }
        await n(l2);
      }
      let f2 = u3 && 0 === d2 ? "loading-timeout" : e2 ? "no-exact-option" : "missing-dropdown";
      return y(f2, { attempt: o2, dropdownCount: e2 ? 1 : 0, observedOptionCount: d2, waitedMs: a2 }), false;
    } finally {
      v2();
    }
  } };
}

export {
  createRipplehireSkillsDomAdapter,
  fillRipplehireSkillItems,
  normalizeRipplehireSkillItems,
}
