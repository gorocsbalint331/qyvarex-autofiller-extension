/**
 * Parcel module id: 98qwB
 * Resolved path: contents/sites/zohorecruit-v2/operations.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  _tilde_contents/methods/section-results.js
 *   ~contents/sites/zohorecruit-v2/rules -> aNfWC  =>  _tilde_contents/sites/zohorecruit-v2/rules.js
 *   ~contents/sites/zohorecruit/section-results -> 1A34s  =>  _tilde_contents/sites/zohorecruit/section-results.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "preExpandForm", () => d), n.export(r, "expandForm", () => m), n
  .export(r, "addEducationSection", () => h), n.export(r, "addExperienceSection", () => g), n
  .export(r, "uploadResume", () => v), n.export(r, "addEducationRow", () => w), n.export(r,
    "addExperienceRow", () => S), n.export(r, "fillSelect", () => E), n.export(r, "fillEducation",
  () => x), n.export(r, "fillExperience", () => C);
var o = e("~contents/methods/answer"),
  i = e("~contents/methods/dom"),
  a = e("~contents/sites/zohorecruit-v2/rules"),
  l = e("~core/enums"),
  s = e("~utils/delay"),
  u = e("~contents/methods/section-results"),
  c = e("~contents/sites/zohorecruit/section-results");
async function d() {
  await f(), 0 === b() && (await h(), await (0, s.delay)(100)), await p(), 0 === y() && (
  await g(), await (0, s.delay)(100))
}
async function f() {
  let e = document.querySelectorAll('a[title="Delete Educational Details"]');
  for (let t of Array.from(e)) t.click(), await (0, s.delay)(100)
}
async function p() {
  let e = document.querySelectorAll('a[title="Delete Experience Details"]');
  for (let t of Array.from(e)) t.click(), await new Promise(e => setTimeout(e, 300))
}
async function m(e) {
  if (e.education.length >= 1)
    for (let t = 0; t < e.education.length; t++) await h();
  if (e.workExperience.length >= 1)
    for (let t = 0; t < e.workExperience.length; t++) await g()
}
async function h() {
  let e = document.querySelector('a[title="Add Educational Details"]');
  e && (e.click(), await (0, s.delay)(100))
}
async function g() {
  let e = document.querySelector('a[title="Add Experience Details"]');
  e && (e.click(), await (0, s.delay)(100))
}

function b() {
  let e = document.querySelector('.TD-twocol[data-l*="Educational"]');
  if (!e) return 0;
  let t = e.querySelectorAll('.innerElem[style*="display: none"]');
  if (t.length > 0) return t.length - 1;
  let r = e.querySelectorAll(".innerElem");
  return r.length
}

function y() {
  let e = document.querySelector('.TD-twocol[data-l*="Experience"]');
  if (!e) return 0;
  let t = e.querySelectorAll('.innerElem[style*="display: none"]');
  if (t.length > 0) return t.length - 1;
  let r = e.querySelectorAll(".innerElem");
  return r.length
}
async function v(e, t, r) {
  let n = document.querySelector('input[name*="Resume"][type="file"]'),
    a = document.getElementById("theFile_content(Resume)");
  if (a && a.children.length > 0) {
    r("Resume/CV"), t({
      label: "Resume/CV",
      required: !1
    });
    return
  }
  n && e && await (0, i.uploadFiles)(n, await (0, o.fetchPdfAsBlob)(e), t, r, "Resume/CV");
  let l = document.querySelector('input[name*="Cover Letter"][type="file"]');
  l && t({
    label: "Cover Letter",
    required: !1
  })
}
async function w() {
  let e = document.querySelector('a[title="Add Educational Details"]');
  e && (e.click(), await (0, s.delay)(100))
}
async function S() {
  let e = document.querySelector('a[title="Add Experience Details"]');
  e && (e.click(), await (0, s.delay)(100))
}
async function E(e, t) {
  if (!e || !t) return !1;
  let r = t.toString().trim(),
    n = Array.from(e.options),
    o = n.find(e => e.value === r || e.textContent?.trim() === r);
  return o ? (e.value = o.value, e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), await (0, s.delay)(100), e.value === o.value) : (console.info(
    "[ZohoRecruit-V2][section-field] dropdown-option-missing"), !1)
}
async function x(e, t, r = {}) {
  let n = await (0, a.getEduRules)(),
    i = (0, u.createSequentialSectionResultReporter)("education", r);
  for (let r = 0; r < e.length; r++) {
    let a = e[r],
      u = n[r];
    if (!u || !u.children) continue;
    let d = u.children,
      f = (0, c.createZohoRecordResult)("education", r, u, a, i),
      p = d.filter(e => e.type === l.FIELD_TYPE.TEXT),
      m = (0, o.getRegularOperations)(p, a, f.operationConfig(t));
    for (let e of m) await e(), await (0, s.delay)(100);
    let h = d.filter(e => e.type === l.FIELD_TYPE.SELECT);
    for (let e of h) {
      let t = a[e.name] || a[e.label];
      t && e.$input instanceof HTMLSelectElement && await f.run(e, t, () => E(e.$input, t))
    }
    if (a.isCurrent) {
      let e = d.find(e => e.label.toLowerCase().includes("currently pursuing"));
      e && e.$input && await f.run(e, !0, async () => {
        let t = e.$input;
        return t.click(), await (0, s.delay)(200), t instanceof HTMLInputElement && t
          .checked
      })
    }
  }
}
async function C(e, t, r = {}) {
  let n = await (0, a.getExpRules)(),
    i = (0, u.createSequentialSectionResultReporter)("employment", r);
  for (let r = 0; r < e.length; r++) {
    let a = e[r],
      u = n[r];
    if (!u || !u.children) continue;
    let d = u.children,
      f = (0, c.createZohoRecordResult)("employment", r, u, a, i),
      p = d.filter(e => e.type === l.FIELD_TYPE.TEXT),
      m = (0, o.getRegularOperations)(p, a, f.operationConfig(t));
    for (let e of m) await e(), await (0, s.delay)(100);
    let h = d.filter(e => e.type === l.FIELD_TYPE.SELECT);
    for (let e of h) {
      let t = a[e.name] || a[e.label];
      t && e.$input instanceof HTMLSelectElement && await f.run(e, t, () => E(e.$input, t))
    }
    if (a.isCurrent || a["End date"] && a["End date"].toLowerCase().includes("present")) {
      let e = d.find(e => e.label.toLowerCase().includes("currently work"));
      e && e.$input && await f.run(e, !0, async () => {
        let t = e.$input;
        return t.click(), await (0, s.delay)(200), t instanceof HTMLInputElement && t
          .checked
      })
    }
  }
}

