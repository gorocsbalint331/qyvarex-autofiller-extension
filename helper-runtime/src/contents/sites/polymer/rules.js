/**
 * Parcel module id: i5Zyz
 * Resolved path: src/contents/sites/polymer/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/polymer/operations -> 75HQr  =>  src/contents/sites/polymer/operations.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", () => l), n.export(r, "getSubmitButton", () => s), n
  .export(r, "getFormSnapshot", () => u);
var o = e("~core/enums"),
  i = e("~utils/delay"),
  a = e("~contents/sites/polymer/operations");
async function l(e = !1) {
  let t = [],
    r = document.querySelector('div[id="apply"]');
  if (!r) return (console.warn("[Polymer getRules] Form not found"), e) ? t : (await (0, i.delay)(
    1500), await l(!0));
  let n = r.querySelectorAll('div[class*="FormInput"]');
  n.forEach(e => {
    let r = e.querySelector("label"),
      n = e.querySelector('input[type="text"]'),
      i = e.querySelector('[class*="RequiredLabel"]');
    if (r && n) {
      let e = r.textContent?.trim() || "",
        a = i?.textContent?.includes("required") || !1;
      t.push({
        type: o.FIELD_TYPE.TEXT,
        label: e,
        $input: n,
        $label: r.parentElement,
        required: a
      })
    }
  });
  let s = r.querySelectorAll('[data-testid="form-select-dropdown"]');
  for (let e of Array.from(s)) {
    let r = e.querySelector("label"),
      n = e.querySelector('[class*="form-select-ui__control"]'),
      l = e.querySelector('[class*="RequiredLabel"]');
    if (r && n) {
      let e = r.textContent?.trim() || "",
        s = l?.textContent?.includes("required") || !1,
        u = [];
      try {
        await (0, a.simulateUserClick)(n, !0), await (0, i.delay)(500);
        let e = document.querySelector(".form-select-ui__menu");
        if (e) {
          let t = e.querySelectorAll(".form-select-ui__option");
          u = Array.from(t).map(e => e.textContent?.trim() || "").filter(Boolean), await (0, a
            .simulateUserClick)(document.body), await (0, i.delay)(100)
        }
      } catch (t) {
        console.warn(`[Polymer getRules] Failed to get options for "${e}":`, t)
      }
      t.push({
        type: o.FIELD_TYPE.SELECT,
        label: e,
        $input: n,
        $label: r.parentElement,
        required: s,
        options: u
      })
    }
  }
  let u = r.querySelectorAll('[class*="FormTextarea"]');
  return (u.forEach(e => {
    let r = e.querySelector("label"),
      n = e.querySelector("textarea"),
      i = e.querySelector('[class*="RequiredLabel"]');
    if (r && n) {
      let e = r.textContent?.trim() || "",
        a = i?.textContent?.includes("required") || !1;
      t.push({
        type: o.FIELD_TYPE.TEXT,
        label: e,
        $input: n,
        $label: r.parentElement,
        required: a
      })
    }
  }), r.querySelectorAll('[class*="FormUploader"]'), 0 !== t.length || e) ? t : (await (0, i
    .delay)(1500), await l(!0))
}

function s() {
  let e = document.querySelector('[class*="ApplicationForm_Button"]');
  return e
}

function u() {
  let e = {},
    t = document.querySelector('div[id="apply"]') || document.querySelector("form");
  if (!t) return console.warn("[Polymer getFormSnapshot] Form not found"), e;
  let r = t.querySelectorAll('input[type="text"]');
  r.forEach(t => {
    let r = t,
      n = c(r);
    n && r.value && (e[n] = r.value)
  });
  let n = t.querySelectorAll("textarea");
  n.forEach(t => {
    let r = t,
      n = c(r);
    n && r.value && (e[n] = r.value)
  });
  let o = t.querySelectorAll('[data-testid="form-select-dropdown"]');
  o.forEach(t => {
    let r = t.querySelector("label")?.textContent?.trim().replace(/\(required\)/i, "").trim(),
      n = t.querySelector('input[type="hidden"]');
    if (r && n && n.value) {
      let o = t.querySelector(".form-select-ui__single-value"),
        i = o?.textContent?.trim() || n.value;
      e[r] = i
    }
  });
  let i = t.querySelectorAll('input[type="file"]');
  return i.forEach(t => {
    let r = t,
      n = c(r);
    if (n) {
      let t = r.files && r.files.length > 0;
      e[n] = t ? r.files[0].name : ""
    }
  }), e
}

function c(e) {
  if (e.id) {
    let t = document.querySelector(`label[for="${e.id}"]`);
    if (t) return t.textContent?.trim().replace(/\(required\)/i, "").trim() || ""
  }
  let t = e.closest('[class*="FormInput"], [class*="FormTextarea"], [class*="FormUploader"]');
  if (t) {
    let e = t.querySelector("label");
    if (e) return e.textContent?.trim().replace(/\(required\)/i, "").trim() || ""
  }
  return e.placeholder || e.name || ""
}

