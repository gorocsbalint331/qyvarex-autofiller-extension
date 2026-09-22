/**
 * Parcel module id: fChu0
 * Resolved path: src/contents/pre-autofill-flow/dom.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e, t, r = HTMLElement) {
  let n = e.querySelector(t);
  return n instanceof r ? n : null
}

function i(e, t) {
  let r = Array.from(e.querySelectorAll("button, a, [role='button']")),
    n = r.find(e => t.test(e.textContent?.trim() ?? ""));
  return n instanceof HTMLElement ? n : null
}

function a(e, t) {
  return o(e, t, HTMLInputElement)
}

function l(e, t) {
  return t || (e.defaultView?.HTMLElement ? e.defaultView.HTMLElement : "undefined" !=
    typeof HTMLElement ? HTMLElement : null)
}

function s(e) {
  if (!e || e.hidden || e.getAttribute?.("aria-hidden") === "true" || e.closest?.(
      "[hidden], [aria-hidden='true']")) return !1;
  let t = e.ownerDocument?.defaultView,
    r = t?.getComputedStyle?.(e);
  return (!r || "none" !== r.display && "hidden" !== r.visibility && "0" !== r.opacity) && (
    "function" != typeof e.getClientRects || e.getClientRects().length > 0)
}

function u(e, t, r) {
  let n = l(e, r),
    o = "function" == typeof e.querySelectorAll ? Array.from(e.querySelectorAll(t)) : [e
      .querySelector(t)
    ].filter(Boolean);
  return o.filter(e => (!n || e instanceof n) && s(e)).map(e => e)
}

function c(e, t, r) {
  return u(e, t, r)[0] ?? null
}
async function d(e, t, r = 8e3, n) {
  if (n?.aborted) return null;
  let o = t();
  return o || new Promise(o => {
    let i = !1,
      a = e => {
        i || (i = !0, window.clearTimeout(l), s.disconnect(), o(e))
      },
      l = window.setTimeout(() => {
        a(null)
      }, r),
      s = new MutationObserver(() => {
        let e = t();
        e && a(e)
      });
    s.observe(e.documentElement, {
      childList: !0,
      subtree: !0
    }), n?.addEventListener("abort", () => a(null), {
      once: !0
    })
  })
}
async function f({
  document: e,
  findElement: t,
  signal: r
}) {
  let n = await d(e, t, void 0, r);
  return !r.aborted && !!n && (n.click(), !0)
}

function p(e, t) {
  let r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  r?.call(e, t), e.dispatchEvent(new Event("input", {
    bubbles: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0
  }))
}
async function m({
  document: e,
  findInput: t,
  value: r,
  signal: n
}) {
  let o = await d(e, t, void 0, n);
  return !n.aborted && !!o && !!r && (p(o, r), !0)
}
async function h({
  document: e,
  findInputs: t,
  value: r,
  signal: n
}) {
  if (!r) return !1;
  let o = await d(e, () => t()[0] ?? null, void 0, n);
  if (n.aborted || !o) return !1;
  let i = t();
  if (!i.length) return !1;
  for (let e of i) p(e, r);
  return !0
}

function g(e) {
  let t = new Set;
  for (let r of e) !r || t.has(r) || (t.add(r), p(r, ""))
}

function b(e, t) {
  return "" !== e.value || !!t && (p(e, t), !0)
}
n.defineInteropFlag(r), n.export(r, "findPreAutofillElement", () => o), n.export(r,
    "findPreAutofillButtonByText", () => i), n.export(r, "findPreAutofillInput", () => a), n.export(
    r, "isVisiblePreAutofillElement", () => s), n.export(r, "findVisiblePreAutofillElements", () =>
    u), n.export(r, "findVisiblePreAutofillElement", () => c), n.export(r,
    "waitForPreAutofillElement", () => d), n.export(r, "clickPreAutofillElement", () => f), n
  .export(r, "setNativeInputValue", () => p), n.export(r, "fillPreAutofillInput", () => m), n
  .export(r, "fillPreAutofillInputs", () => h), n.export(r, "clearNativeInputValues", () => g), n
  .export(r, "setNativeInputValueIfEmpty", () => b)

