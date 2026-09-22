/**
 * Parcel module id: aNfWC
 * Resolved path: contents/sites/zohorecruit-v2/rules.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", () => i), n.export(r, "getEduRules", () => c), n
  .export(r, "getExpRules", () => d), n.export(r, "getEduAddButton", () => f), n.export(r,
    "getEduDeleteButtons", () => p), n.export(r, "getExpAddButton", () => m), n.export(r,
    "getExpDeleteButtons", () => h), n.export(r, "getAdditionalFormSnapshotData", () => b), n
  .export(r, "getFormSnapshot", () => y);
var o = e("~core/enums");
async function i() {
  let e = document.querySelector("form[name*='WebToLeads']");
  if (!e) return [];
  let t = [...a(e), ...l(e), ...s(e)];
  return t
}

function a(e) {
  let t = [],
    r = e.querySelectorAll("input[aria-label], textarea[aria-label]");
  r.forEach(e => {
    if (e.closest(".TD-twocol[data-l*='Educational']") || e.closest(
        ".TD-twocol[data-l*='Experience']")) return;
    let r = e.getAttribute("aria-label") || "";
    r && t.push({
      type: o.FIELD_TYPE.TEXT,
      label: r,
      name: r,
      $input: e,
      $label: null,
      required: "true" === e.getAttribute("aria-required")
    })
  });
  let n = e.querySelectorAll("select[aria-label]");
  return n.forEach(e => {
    if (e.closest(".TD-twocol[data-l*='Educational']") || e.closest(
        ".TD-twocol[data-l*='Experience']")) return;
    let r = e.getAttribute("aria-label") || "";
    r && t.push({
      type: o.FIELD_TYPE.SELECT,
      label: r,
      name: r,
      $input: e,
      $label: null,
      required: "true" === e.getAttribute("aria-required")
    })
  }), t
}

function l(e) {
  let t = e.querySelector(".TD-twocol[data-l*='Educational']");
  return t ? u(t, o.FIELD_TYPE.EDUCATION, "education") : []
}

function s(e) {
  let t = e.querySelector(".TD-twocol[data-l*='Experience']");
  return t ? u(t, o.FIELD_TYPE.EMPLOYMENT, "workExperience") : []
}

function u(e, t, r) {
  let n = [],
    i = e.querySelectorAll(".innerElem"),
    a = i.length > 0 ? Array.from(i) : [];
  if (0 === a.length) {
    let t = e.querySelector(".innerElem");
    t && a.push(t)
  }
  return a.forEach(e => {
    let i = [],
      a = e.querySelectorAll("input[aria-label], textarea[aria-label]");
    a.forEach(e => {
      let t = e.getAttribute("aria-label") || "";
      t && i.push({
        type: o.FIELD_TYPE.TEXT,
        label: t,
        name: t,
        $input: e,
        $label: null,
        required: !1
      })
    });
    let l = {
      "Start Month": e.querySelector("select[class*='from_month']"),
      "Start Year": e.querySelector("select[class*='from_year']"),
      "End Month": e.querySelector("select[class*='to_month']"),
      "End Year": e.querySelector("select[class*='to_year']")
    };
    Object.entries(l).forEach(([e, t]) => {
      t && i.push({
        type: o.FIELD_TYPE.SELECT,
        label: e,
        name: e,
        $input: t,
        $label: null,
        required: !1
      })
    }), i.length > 0 && n.push({
      type: t,
      label: r,
      $input: e,
      $label: e,
      required: !1,
      children: i,
      options: i.map(e => ({
        type: e.type,
        label: e.label,
        options: []
      }))
    })
  }), n
}
async function c() {
  let e = await i();
  return e.filter(e => e.type === o.FIELD_TYPE.EDUCATION)
}
async function d() {
  let e = await i();
  return e.filter(e => e.type === o.FIELD_TYPE.EMPLOYMENT)
}

function f() {
  return document.querySelector("a[title='Add Educational Details']")
}

function p() {
  return Array.from(document.querySelectorAll("a[title='Delete Educational Details']"))
}

function m() {
  return document.querySelector("a[title='Add Experience Details']")
}

function h() {
  return Array.from(document.querySelectorAll("a[title='Delete Experience Details']"))
}

function g(e) {
  let t = {},
    r = e;
  return r.children?.forEach(e => {
    t[e.label] = v(e.$input)
  }), t
}

function b(e) {
  let t = {};
  for (let r of e)(r.type === o.FIELD_TYPE.EDUCATION || r.type === o.FIELD_TYPE.EMPLOYMENT) && (t[r
    .type] || (t[r.type] = []), t[r.type].push(g(r)));
  return t
}
async function y(e) {
  let t = {};
  for (let r of e) {
    if (r.type === o.FIELD_TYPE.EDUCATION || r.type === o.FIELD_TYPE.EMPLOYMENT) continue;
    let e = r;
    t[r.label] = v(e.$input)
  }
  return t
}

function v(e) {
  return e && ("SELECT" === e.tagName || e instanceof HTMLInputElement ||
    e instanceof HTMLTextAreaElement) && e.value || ""
}

