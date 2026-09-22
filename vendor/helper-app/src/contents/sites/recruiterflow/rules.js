/**
 * Parcel module id: aHzuN
 * Resolved path: src/contents/sites/recruiterflow/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "RECRUITERFLOW_PHONE_COUNTRY_CODE_LABEL", () => l), n.export(r,
    "RECRUITERFLOW_PHONE_WITH_COUNTRY_CODE_DESCRIPTION", () => s), n.export(r, "getRules", () => u),
  n.export(r, "getRecruiterflowPhoneRules", () => d), n.export(r, "getFieldLabel", () => f), n
  .export(r, "getExpRules", () => g), n.export(r, "getEduRules", () => b), n.export(r,
    "getSubmitButtonText", () => E), n.export(r, "getAdditionalFormSnapshotData", () => F), n
  .export(r, "getFormSnapshot", () => j), n.export(r, "readRecruiterflowPhoneCountryCode", () => D);
var o = e("~core/enums"),
  i = e("~core/phone-country-code"),
  a = e("~utils/delay");
let l = "Phone Country Code",
  s = i.LOCAL_PHONE_DESCRIPTION;
async function u(e = !1) {
  let t = [];
  await w(), await S();
  let r = document.querySelector(".apply-to-job-form-inputs-container");
  if (r) {
    let e = [".experience-inputs-container", ".education-inputs-container"];
    t.push(...await c(r, e))
  }
  return 0 !== t.length || e ? t : (await (0, a.delay)(1500), await u(!0))
}
async function c(e, t = []) {
  let r = [],
    n = new Set,
    i = e => t.some(t => e.closest(t)),
    l = e.querySelectorAll('input[id*="react-select"][role="combobox"]');
  for (let e of Array.from(l)) {
    let t = e;
    if (n.has(t) || i(t)) continue;
    let l = f(t);
    if (!l) continue;
    let s = t.closest(".multi-select-input-wrapper"),
      u = t.closest(".single-select-input-wrapper"),
      c = s || u;
    if (c) {
      let e = c.querySelector(".form-label"),
        n = e ? y(e.textContent || "") : l,
        i = s ? o.FIELD_TYPE.MULTI_SELECT : o.FIELD_TYPE.SELECT,
        u = c.querySelector("input");
      u.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0
      })), await (0, a.delay)(300);
      let d = document.querySelector('div[role="listbox"][id*="-listbox"]'),
        f = [];
      if (d) {
        let e = d.querySelectorAll('div[role="option"]');
        f = Array.from(e).map(e => {
          let t = e.querySelector(".custom-single-select-option, .custom-multi-select-option")
            ?.textContent;
          return (t || e.textContent || "").trim()
        }).filter(e => "" !== e), u.dispatchEvent(new MouseEvent("click", {
          bubbles: !0
        })), await (0, a.delay)(100)
      }
      r.push({
        type: i,
        label: n,
        $input: t,
        $label: e || t,
        required: h(t),
        options: f
      })
    } else r.push({
      type: o.FIELD_TYPE.TEXT,
      label: l,
      $input: t,
      $label: t.closest(".common-input-wrapper") || t,
      required: h(t)
    });
    n.add(t)
  }
  let s = e.querySelectorAll(
    'input:not([type="hidden"]):not([type="file"]):not([type="checkbox"]):not([type="radio"])');
  s.forEach(e => {
    let t = e;
    if (n.has(t) || i(t) || t.id.includes("react-select")) return;
    let a = f(t);
    if (!a) return;
    let l = m(t),
      s = {
        type: l,
        label: a,
        $input: t,
        $label: t.closest(".common-input-wrapper") || t,
        required: h(t),
        ...l === o.FIELD_TYPE.DATE ? {
          description: "MM/DD/YYYY"
        } : {}
      };
    r.push(...d(s)), n.add(t)
  });
  let u = e.querySelectorAll("textarea");
  u.forEach(e => {
    let t = e;
    if (n.has(t) || i(t)) return;
    let a = f(t);
    a && (r.push({
      type: o.FIELD_TYPE.TEXT,
      label: a,
      $input: t,
      $label: t.closest(".common-input-wrapper") || t,
      required: h(t)
    }), n.add(t))
  });
  let c = e.querySelectorAll('input[type="checkbox"]');
  c.forEach(e => {
    let t = e;
    if (n.has(t) || i(t) || t.closest(".multi-select-input-wrapper")) return;
    let a = f(t);
    a && (r.push({
      type: o.FIELD_TYPE.CHECKBOX,
      label: a,
      $checkboxs: [t],
      $label: t.parentElement,
      required: h(t),
      options: [a]
    }), n.add(t))
  });
  let p = e.querySelectorAll(".yes-no-inputs");
  return p.forEach(e => {
    let t = e;
    if (i(t)) return;
    let a = t.querySelectorAll("button");
    if (0 === a.length || n.has(a[0])) return;
    let l = t.closest(".yes-no-input-wrapper");
    if (!l) return;
    let s = l.querySelector(".form-label"),
      u = s ? y(s.textContent || "") : "";
    if (!u) return;
    let c = t.querySelector(".yes-input"),
      d = t.querySelector(".no-input");
    c && d && (r.push({
      type: o.FIELD_TYPE.CHECKBOX,
      label: u,
      $checkboxs: [c, d],
      $label: s,
      required: h(l),
      options: ["Yes", "No"]
    }), a.forEach(e => n.add(e)))
  }), r
}

function d(e) {
  if (e.type !== o.FIELD_TYPE.TEXT) return [e];
  let t = e.$input,
    r = e.label.toLowerCase().includes("phone") || t?.type === "tel" || t?.name?.toLowerCase()
    .includes("phone");
  if (!t || !r) return [e];
  let n = t.closest(".iti"),
    i = n?.querySelector("button.iti__selected-country");
  if (!n || !i) return [e];
  let a = Array.from(n.querySelectorAll("li.iti__country[data-country-code]")).map(e => {
    let t = e.querySelector(".iti__country-name")?.textContent?.trim() || "",
      r = (e.getAttribute("data-dial-code") || e.querySelector(".iti__dial-code")
        ?.textContent || "").replace(/\D/g, "");
    return [t, r ? `+${r}` : ""].filter(Boolean).join(" ")
  }).filter(Boolean).filter((e, t, r) => r.indexOf(e) === t);
  return 0 === a.length ? [e] : [{
    ...e,
    description: s
  }, {
    type: o.FIELD_TYPE.SELECT,
    label: l,
    required: e.required,
    options: a,
    $input: t,
    $label: e.$label
  }]
}

function f(e) {
  if (e.closest(".additional-info-inputs-container")) {
    let t = e.closest(".text-area-input-wrapper, .text-input-wrapper, .multi-select-input-wrapper");
    if (t) {
      if (t.classList.contains("currency-range-select-number-input-wrapper") && "input" === e
        .tagName.toLowerCase()) {
        let t = e.getAttribute("placeholder");
        if (t && ("min" === t.toLowerCase() || "max" === t.toLowerCase()))
        return `${t} Compensation`
      }
      let r = t.querySelector(".form-label");
      if (r) return y(r.textContent || "")
    }
  }
  if ("textarea" === e.tagName.toLowerCase()) {
    let t = e.closest(".text-area-input-wrapper");
    if (t) {
      let e = t.querySelector(".form-label");
      if (e) return y(e.textContent || "")
    }
  }
  let t = p(e);
  if (t) return t;
  let r = e.getAttribute("placeholder");
  if (r && !r.toLowerCase().includes("select") && !r.toLowerCase().includes("enter") && !r
    .toLowerCase().includes("click")) return y(r);
  let n = e.closest(
    ".single-select-input-wrapper, .multi-select-input-wrapper, .currency-range-select-number-input-wrapper"
    );
  if (n) {
    if (n.classList.contains("currency-range-select-number-input-wrapper") && "input" === e.tagName
      .toLowerCase()) {
      let t = e.getAttribute("placeholder");
      if (t && ("min" === t.toLowerCase() || "max" === t.toLowerCase())) return `${t} Compensation`
    }
    let t = n.querySelector(".form-label");
    if (t) return y(t.textContent || "")
  }
  let o = e.closest(
    ".common-input-wrapper, .full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper, .text-input-wrapper, .text-area-input-wrapper, .yes-no-input-wrapper"
    );
  if (o) {
    let e = o.querySelector(".form-label");
    if (!e && o.parentElement) {
      let t = o.parentElement.closest(
        ".full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper, .yes-no-input-wrapper"
        );
      t && (e = t.querySelector(".form-label"))
    }
    if (e) return y(e.textContent || "")
  }
  if ("checkbox" === e.type) {
    let t = e.parentElement?.querySelector("label");
    if (t) return y(t.textContent || "")
  }
  let i = e.getAttribute("name");
  if (i) {
    let e = i.split("."),
      t = e[e.length - 1];
    return t.replace(/_/g, " ").replace(/-/g, " ").replace(/\b\w/g, e => e.toUpperCase())
  }
  return ""
}

function p(e) {
  if ("input" !== e.tagName.toLowerCase() || !e.id?.includes("react-select")) return "";
  let t = e.getAttribute("aria-describedby") || "",
    r = t.split(/\s+/).find(e => e.includes("placeholder"));
  if (!r) return "";
  let n = e.ownerDocument?.getElementById(r),
    o = y(n?.textContent || "");
  return !o || o.toLowerCase().includes("select") || o.toLowerCase().includes("enter") || o
    .toLowerCase().includes("click") ? "" : o
}

function m(e) {
  let t = e.tagName.toLowerCase(),
    r = e.type,
    n = e.classList;
  return n.contains("react-datepicker-ignore-onclickoutside") || e.closest(
      ".react-datepicker-wrapper") || v(e, "Date") ? o.FIELD_TYPE.DATE : "textarea" === t ? o
    .FIELD_TYPE.TEXT : "checkbox" === r ? o.FIELD_TYPE.CHECKBOX : o.FIELD_TYPE.TEXT
}

function h(e) {
  let t = e.closest(
    ".common-input-wrapper, .full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper, .text-input-wrapper, .text-area-input-wrapper, .single-select-input-wrapper, .multi-select-input-wrapper, .yes-no-input-wrapper"
    );
  if (t) {
    let e = t.parentElement?.closest(
        ".full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper"
        ) || t,
      r = e.querySelector(".form-label");
    if (r && r.querySelector(".required")) return !0
  }
  return !1
}
async function g() {
  let e = [],
    t = document.querySelectorAll(".experience-input-wrapper");
  for (let r of Array.from(t)) {
    let t = r,
      n = await c(t);
    n.length > 0 && e.push({
      type: o.FIELD_TYPE.EMPLOYMENT,
      label: "Employment",
      required: !0,
      children: n,
      options: n.map(e => ({
        type: e.type,
        label: e.label,
        ...e.options ? {
          options: e.options
        } : {}
      }))
    })
  }
  return e
}
async function b() {
  let e = [],
    t = document.querySelectorAll(".education-input-wrapper");
  for (let r of Array.from(t)) {
    let t = r,
      n = await c(t);
    n.length > 0 && e.push({
      type: o.FIELD_TYPE.EDUCATION,
      label: "Education",
      required: !0,
      children: n,
      options: n.map(e => ({
        type: e.type,
        label: e.label,
        ...e.options ? {
          options: e.options
        } : {}
      }))
    })
  }
  return e
}

function y(e) {
  return e.replace(/\*/g, "").replace(/\(optional\)/gi, "").replace(/\(required\)/gi, "").trim()
}

function v(e, t) {
  let r = e.getAttribute("placeholder");
  return !!r && r.includes(t)
}
async function w() {
  let e = 5e3,
    t = Date.now();
  for (; Date.now() - t < e;) {
    if (document.querySelector(".apply-to-job-form-inputs-container")) {
      await (0, a.delay)(500);
      return
    }
    await (0, a.delay)(100)
  }
}
async function S() {
  let e = document.querySelectorAll(".input-section-container");
  for (let t of Array.from(e)) {
    let e = t.nextElementSibling;
    e && "none" === e.style.display && (t.click(), await (0, a.delay)(200))
  }
}

function E() {
  let e = document.querySelector(
    "button#submit-application-button, button.submit-application-button");
  return e && e.textContent?.trim() || ""
}
let x = ".experience-input-wrapper",
  C = ".education-input-wrapper",
  A = `${x}, ${C}`;

function k(e) {
  let t = (e.type || "text").toLowerCase();
  return "checkbox" === t || "radio" === t ? e.checked ? "Yes" : "No" : e.value || ""
}

function T(e) {
  return Array.from(document.querySelectorAll(e)).map(e => {
    let t = {};
    return e.querySelectorAll("input, textarea").forEach(e => {
      let r = e,
        n = (r.type || "text").toLowerCase();
      if ("hidden" === n || "file" === n) return;
      let o = f(r);
      if (!o) return;
      let i = k(r);
      i && (t[o] = i)
    }), t
  }).filter(e => Object.keys(e).length > 0)
}

function F() {
  return {
    education: T(C),
    employment: T(x)
  }
}

function I(e, t, r) {
  if (void 0 === e[t]) return t;
  let n = r.name || r.id;
  return n ? `${t} (${n})` : t
}

function j() {
  let e = {},
    t = document.querySelectorAll("input, textarea");
  t.forEach(t => {
    let r = t;
    if (r.closest?.(A)) return;
    let n = k(r);
    if (!r.name || !n) return;
    let o = f(r) || r.name;
    e[I(e, o, r)] = n
  });
  let r = document.querySelector('input#user-phone, input[name="personal_info.phone"]');
  r?.value && (e.Phone = r.value);
  let n = r ? D(r) : "";
  return n && (e[l] = n), e
}

function D(e) {
  let t = e.closest(".iti");
  if (!t) return "";
  let r = t.querySelector("li.iti__country.iti__active[data-country-code]") || t.querySelector(
    'li.iti__country[aria-selected="true"][data-country-code]');
  if (r) {
    let e = r.querySelector(".iti__country-name")?.textContent?.trim() || "",
      t = (r.getAttribute("data-dial-code") || r.querySelector(".iti__dial-code")?.textContent ||
        "").replace(/\D/g, "");
    return [e, t ? `+${t}` : ""].filter(Boolean).join(" ")
  }
  let n = t.querySelector("button.iti__selected-country"),
    o = n?.getAttribute("title")?.trim() || "",
    i = o.match(/\+\s*(\d{1,4})/)?.[1] || "",
    a = o.replace(/\s*:?\s*\+\s*\d{1,4}\s*$/, "").trim(),
    l = n?.querySelector(".iti__selected-dial-code")?.textContent?.trim() || "",
    s = l || (i ? `+${i}` : "");
  return [a, s].filter(Boolean).join(" ")
}

