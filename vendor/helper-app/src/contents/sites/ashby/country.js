/**
 * Parcel module id: bdkMH
 * Resolved path: src/contents/sites/ashby/country.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveAshbyCountryOption", () => s), n.export(r,
  "fillAshbyCountryCombobox", () => b);
var o = e("~utils/delay");
let i = [
  ["us", "usa", "u s", "u s a", "united states", "united states of america"],
  ["ca", "canada"],
  ["uk", "gb", "great britain", "united kingdom"]
];

function a(e) {
  return String(e ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(
    /[^\p{L}\p{N}]+/gu, " ").replace(/\s+/g, " ").trim().toLowerCase()
}

function l(e) {
  let t = a(e);
  if (!t) return new Set;
  let r = i.find(e => e.includes(t));
  return new Set(r ?? [t])
}

function s(e, t) {
  let r = l(e);
  if (0 === r.size) return null;
  let n = t.filter(e => r.has(a(e.textContent ?? "")));
  return 1 === n.length ? n[0] : null
}

function u(e, t) {
  let r = Object.getPrototypeOf(e),
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : e.value = t, e.dispatchEvent(new Event("input", {
    bubbles: !0
  }))
}

function c(e) {
  e.dispatchEvent(new KeyboardEvent("keydown", {
    key: "Escape",
    bubbles: !0
  })), e.dispatchEvent(new KeyboardEvent("keyup", {
    key: "Escape",
    bubbles: !0
  }))
}
async function d(e, t) {
  e.focus(), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  })), e.value === t && (u(e, ""), await (0, o.delay)(50)), u(e, t), e.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: !0
    })), e.dispatchEvent(new KeyboardEvent("keyup", {
    bubbles: !0
  }))
}

function f(e) {
  if ("true" !== e.getAttribute("aria-expanded")) return null;
  let t = e.getAttribute("aria-controls"),
    r = t ? document.getElementById(t) : null;
  return r ? Array.from(r.querySelectorAll('[role="option"]')) : null
}
async function p(e, t) {
  let r = 12;
  for (let n = 0; n < r; n++) {
    let r = f(e);
    if (r) {
      let e = s(t, r);
      if (e) return e
    }
    await (0, o.delay)(100)
  }
  return null
}
async function m(e, t) {
  await d(e, t);
  let r = await p(e, t);
  if (!r) return !1;
  r.click(), await (0, o.delay)(200);
  let n = 6;
  for (let r = 0; r < n; r++) {
    let r = s(t, [{
      textContent: e.value
    }]);
    if (r && "true" !== e.getAttribute("aria-expanded")) return !0;
    await (0, o.delay)(100)
  }
  return !1
}

function h(e, t) {
  let r = s(t, [{
    textContent: e.value
  }]);
  return !!(r && "true" !== e.getAttribute("aria-expanded"))
}
async function g(e, t) {
  if (c(e), t) {
    if (h(e, t)) return;
    let r = await m(e, t);
    if (r) return;
    c(e), console.warn("[Ashby][Country] original option could not be reselected"), u(e, t), e
      .dispatchEvent(new Event("change", {
        bubbles: !0
      })), c(e), e.blur();
    return
  }
  u(e, ""), c(e), e.blur()
}
async function b(e, t) {
  let r = String(t ?? "").trim(),
    n = e.value;
  if (!r) return !1;
  let o = await m(e, r);
  return !!o || (await g(e, n), !1)
}

