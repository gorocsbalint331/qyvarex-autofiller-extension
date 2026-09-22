/**
 * Parcel module id: 7FMtF
 * Resolved path: src/contents/sites/workable/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/workable/phone-country-code -> 5lsEB  =>  src/contents/sites/workable/phone-country-code.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", () => s), n.export(r, "getEduRules", () => u), n
  .export(r, "getExpRules", () => c), n.export(r, "extractSingleCheckbox", () => b), n.export(r,
    "extractCheckbox", () => C), n.export(r, "getWorkableSalaryFieldType", () => k), n.export(r,
    "isWorkablePhoneInput", () => T), n.export(r, "expandWorkablePhoneRule", () => F), n.export(r,
    "getWorkableLabelMeta", () => I), n.export(r, "getWorkableCoverLetterStatus", () => j), n
  .export(r, "getTypingSteps", () => P), n.export(r, "getSubmitButtonText", () => _), n.export(r,
    "getWorkableSubmitButtonSelector", () => L), n.export(r, "getEducationRules", () => R), n
  .export(r, "getExperienceRules", () => O), n.export(r, "getLatestSavedEducationFocusRule", () =>
    $), n.export(r, "getLatestSavedExperienceFocusRule", () => B), n.export(r, "getFormSnapshot",
  () => q);
var o = e("~contents/sites/workable/phone-country-code"),
  i = e("~core/enums"),
  a = e("~core/xpath"),
  l = e("~utils/delay");
async function s() {
  let e = Array.from(document.querySelectorAll(
      "section[data-ui='section']>[data-ui='section-fields']")).flatMap(e => Array.from(e
      ?.children).filter(e => e instanceof HTMLElement)),
    t = [];
  for (let r of e) {
    if ("education" === r.dataset.ui) {
      let e = await d(r);
      e && t.push(...e);
      continue
    }
    if ("experience" === r.dataset.ui) {
      let e = await f(r);
      e && t.push(...e);
      continue
    }
    let e = await p(r);
    e && t.push(...F(e))
  }
  return t
}
async function u() {
  let e = Array.from(document.querySelectorAll(
      "section[data-ui='section']>[data-ui='section-fields']")).flatMap(e => Array.from(e
      ?.children).filter(e => e instanceof HTMLElement)),
    t = [];
  for (let r of e)
    if ("education" === r.dataset.ui) {
      let e = await d(r);
      e && t.push(...e)
    } return t
}
async function c() {
  let e = Array.from(document.querySelectorAll(
      "section[data-ui='section']>[data-ui='section-fields']")).flatMap(e => Array.from(e
      ?.children).filter(e => e instanceof HTMLElement)),
    t = [];
  for (let r of e)
    if ("experience" === r.dataset.ui) {
      let e = await f(r);
      e && t.push(...e)
    } return t
}
async function d(e) {
  if ("education" !== e.dataset.ui) return null;
  let t = Array.from(e.querySelectorAll("ul>li [data-ui='editor']")).filter(e =>
    e instanceof HTMLElement);
  if (!t?.length) return null;
  let r = [];
  for (let e of t) {
    let t = Array.from(e.children).filter(e => e instanceof HTMLElement),
      n = [];
    for (let e of t) {
      let t = await p(e);
      t && n.push(t)
    }
    n.length && r.push({
      type: i.FIELD_TYPE.EDUCATION,
      label: "education",
      children: n,
      options: [...n.map(e => ({
        type: e.type,
        label: e.label,
        options: e.options || []
      }))],
      $input: e,
      $label: e,
      required: !1
    })
  }
  return r
}
async function f(e) {
  if ("experience" !== e.dataset.ui) return null;
  let t = Array.from(e.querySelectorAll("ul>li [data-ui='editor']")).filter(e =>
    e instanceof HTMLElement);
  if (!t?.length) return null;
  let r = [];
  for (let e of t) {
    let t = Array.from(e.children).filter(e => e instanceof HTMLElement),
      n = [];
    for (let e of t) {
      let t = await p(e);
      t && n.push(t)
    }
    let o = y(e);
    o && n.push(o), n.length && r.push({
      type: i.FIELD_TYPE.EMPLOYMENT,
      label: "experience",
      children: n,
      options: [...n.map(e => ({
        type: e.type,
        label: e.label,
        options: e.options || []
      }))],
      $input: e,
      $label: e,
      required: !1
    })
  }
  return r
}
async function p(e) {
  return e instanceof HTMLElement && ("absolute" !== e.style.position || "1px" !== e.style
    .width || "hidden" !== e.style.overflow) ? C(e) || b(e) || await A(e) || D(e) : null
}

function m(e) {
  return (e || "").replace(/\s+/g, " ").replace(/^\*\s*/, "").trim()
}

function h(e) {
  let t = e?.getAttribute?.("aria-labelledby");
  return t ? t.split(/\s+/).map(e => document.getElementById(e)?.textContent || "").join(" ")
    .replace(/\s+/g, " ").trim() : ""
}

function g(e) {
  let t = h(e);
  if (t) return t;
  let r = "function" == typeof e.closest ? e.closest("[role='checkbox'], [role='radio']") : null;
  return h(r)
}

function b(e) {
  let t = Array.from(e.querySelectorAll("input[type='checkbox']"));
  if (1 !== t.length) return null;
  let r = t[0];
  if (r.closest("fieldset, [role='group'], [role='radiogroup'], [data-ui='experience']"))
  return null;
  let n = r.closest("label") || e.querySelector("label") || e,
    o = [r.getAttribute("aria-label"), g(r), r.labels?.[0]?.textContent ?? "", n.textContent, e
      .textContent
    ].map(m).find(Boolean);
  return o ? {
    type: i.FIELD_TYPE.CHECKBOX,
    label: o,
    required: r.required || "true" === r.getAttribute("aria-required") || /^\s*\*/.test(n
      .textContent || e.textContent || ""),
    $checkboxs: t,
    $input: r,
    options: [o],
    $label: n
  } : null
}

function y(e) {
  let t = (0, a.getFirstOrderedNode)(
    "//div[@role='checkbox' and @aria-labelledby='checkbox_label_current']", e);
  if (t) {
    let e = (0, a.getFirstOrderedNode)("following-sibling::span", t);
    if (!e) return null;
    let r = Array.from(t.querySelectorAll("input[type='checkbox']"));
    return {
      type: i.FIELD_TYPE.CHECKBOX,
      label: e.textContent?.trim(),
      required: !0,
      $checkboxs: r,
      $input: r[0],
      options: [e.textContent?.trim() || ""],
      $label: e
    }
  }
}

function v(e, t) {
  let r = e.parentElement;
  for (; r;) {
    if (r === t) return !0;
    r = r.parentElement
  }
  return !1
}

function w(e, t) {
  return Array.from(e.querySelectorAll("[id]")).find(e => e.id === t) || null
}

function S(e, t) {
  return (e.getAttribute("aria-labelledby") || "").split(/\s+/).map(e => w(t, e)).filter(t => !!t &&
    !v(t, e)).map(e => e.innerText || e.textContent || "").join(" ")
}

function E(e) {
  let t = e.querySelector("[data-radioLabel], span[id]");
  return (t?.innerText || t?.textContent || e.innerText || e.textContent || "").replace(/\s+/g, " ")
    .trim()
}

function x(e) {
  let t = e.closest("label")?.querySelector("span[id]");
  return (t?.innerText || t?.textContent || "").replace(/\s+/g, " ").trim()
}

function C(e) {
  let t = e.querySelector("fieldset[role='radiogroup'], div[role='radiogroup'], [role='group']");
  if (!t) return null;
  let r = (S(t, e) || Array.from(e.querySelectorAll("span[id]")).find(e => !v(e, t))?.textContent ||
    "").replace(/\s+/g, " ").replace(/^\*\s*/, "").trim();
  if (!r) return null;
  let n = [],
    o = [],
    a = Array.from(t.querySelectorAll("[role='radio'], [role='checkbox'], [data-ui='option']"));
  for (let e of a) {
    let t = e.querySelector("input[type='radio'], input[type='checkbox']"),
      r = "checkbox" === e.getAttribute("role") && t ? x(t) : E(e);
    t && r && (n.push(r), o.push(t))
  }
  if (!o.length) return null;
  let l = o.some(e => e.required || "true" === e.getAttribute("aria-required")) || "true" === t
    .getAttribute("aria-required") || /(^|\s)\*/.test(e.innerText || e.textContent || "");
  return {
    type: i.FIELD_TYPE.CHECKBOX,
    label: r,
    required: l,
    $checkboxs: o,
    options: n,
    $input: o[0],
    $label: t
  }
}
async function A(e) {
  let t = e.querySelector("div");
  if (!t) return null;
  let r = t.querySelector("span");
  if (!r) return null;
  let n = r.querySelector("span[id]"),
    o = n?.textContent?.trim() || r?.textContent?.trim();
  if (!o || "Country" === o) return null;
  let a = r?.textContent?.trim()?.startsWith("*") || !1;
  a && (o = o.replace("*", "").trim());
  let s = t.querySelector('div[data-input-type="select"]');
  if (!s) return null;
  let u = s.querySelector('input[type="text"]');
  if (!u) return null;
  u.click(), await (0, l.delay)(400);
  let c = s.innerText.trim(),
    d = c.split("\n").filter(e => "" !== e);
  if (document.dispatchEvent(new MouseEvent("mouseup", {
      bubbles: !0,
      cancelable: !0,
      view: window
    })), !d.length) return null;
  let f = Array.from(t.querySelectorAll("input"));
  if (!f?.length) return null;
  let p = f[f.length - 1];
  return p ? {
    type: i.FIELD_TYPE.SELECT,
    label: o,
    required: a,
    options: d,
    $input: p,
    $label: t
  } : null
}

function k(e) {
  let t = (e || "").toLowerCase();
  return /\b(salary|compensation|pay)\b/.test(t) ? /\b(range|minimum and maximum|min and max)\b/
    .test(t) ? i.FIELD_TYPE.TEXT : i.FIELD_TYPE.NUMBER : i.FIELD_TYPE.TEXT
}

function T(e) {
  if (!e) return !1;
  if ("tel" === (e.type || "").toLowerCase()) return !0;
  let t = (e.name || "").toLowerCase(),
    r = (e.id || "").toLowerCase();
  return !!(t.includes("phone") || r.includes("phone") || "function" == typeof e.closest && e
    .closest(".iti"))
}

function F(e) {
  if (e.type !== i.FIELD_TYPE.TEXT || !T(e.$input)) return [e];
  let t = (0, o.getWorkablePhoneCountryContainer)(e.$input),
    r = t?.querySelector("button.iti__selected-country, .iti__selected-flag[role='combobox']");
  if (!t || !r) return [e];
  let n = (0, o.getWorkablePhoneCountryOptions)(t);
  if (!n.length) return [e];
  let a = {
    ...e,
    description: o.WORKABLE_PHONE_WITH_COUNTRY_CODE_DESCRIPTION
  };
  return [a, {
    type: i.FIELD_TYPE.SELECT,
    label: o.WORKABLE_PHONE_COUNTRY_CODE_LABEL,
    required: e.required,
    options: n.map(o.formatWorkablePhoneCountryOption),
    $input: e.$input,
    $label: r
  }]
}

function I(e) {
  if (!e) return {
    labelText: null,
    required: !1
  };
  let t = e.querySelector("span");
  if (!t) return {
    labelText: null,
    required: !1
  };
  let r = t.querySelector("span[id]"),
    n = r?.textContent?.trim() || t?.textContent?.trim() || null;
  if (!n) return {
    labelText: null,
    required: !1
  };
  let o = t.textContent?.trim()?.startsWith("*") || !1;
  return o && (n = n.replace("*", "").trim()), {
    labelText: n = n.replace(/\s+/g, " ").trim(),
    required: o
  }
}

function j(e) {
  let t = e.querySelector('textarea[data-ui="cover_letter"], textarea#cover_letter');
  if (!t) return "";
  let {
    required: r
  } = I(t.closest("label"));
  return r ? "required" : "optional"
}

function D(e) {
  let t = e.querySelector("div>label");
  if (!t) return null;
  let {
    labelText: r,
    required: n
  } = I(t);
  if (!r) return null;
  if ("Date" === r) {
    let e = t.querySelector("span span[id]");
    if (e) {
      let t = (0, a.getFirstOrderedNode)('ancestor::section[@data-ui="section"]//h2', e);
      if (t && t.textContent?.trim() === "Details") return null
    }
  }
  let o = e.querySelector("input, textarea");
  return o ? {
    type: k(r),
    label: r,
    required: n,
    $input: o,
    $label: t
  } : null
}

function P(e) {
  let t = e ?? "",
    r = [];
  for (let e = 0; e < t.length; e++) r.push({
    char: t[e],
    valueSoFar: t.slice(0, e + 1)
  });
  return r
}

function _() {
  return "Submit application"
}

function L() {
  return `.//*[@data-ui="apply-button"] | .//button[contains(., "${_()}")]`
}

function R() {
  let e = document.querySelector("div[data-ui='education']");
  if (!e) return [];
  let t = Array.from(e.querySelectorAll("ul > li")),
    r = [];
  return t.forEach(e => {
    let t = [],
      n = e.querySelectorAll("dl");
    if (n.forEach(e => {
        let r = e.querySelector("dt"),
          n = e.querySelector("dd");
        if (r && n) {
          let e = r.innerText.replace(":", "").trim();
          t.push({
            type: i.FIELD_TYPE.TEXT,
            label: e,
            $label: r,
            $input: n,
            required: !1
          })
        }
      }), 0 === t.length) {
      let r = e.querySelectorAll("[data-ui='editor'] .styles--36XiB, .field-wrapper");
      r.forEach(e => {
        let r = e.querySelector("label"),
          n = e.querySelector("input, textarea, select");
        r && n && t.push({
          type: i.FIELD_TYPE.TEXT,
          label: r.innerText.replace(":", "").trim(),
          $label: r,
          $input: n,
          required: !1
        })
      })
    }
    t.length > 0 && r.push({
      type: i.FIELD_TYPE.EDUCATION,
      label: "education",
      children: t,
      $input: e,
      required: !1,
      options: []
    })
  }), r
}

function O() {
  let e = document.querySelector("div[data-ui='experience'], section[data-ui='experience']");
  if (!e) return [];
  let t = Array.from(e.querySelectorAll("ul > li")),
    r = [];
  return t.forEach(e => {
    let t = [],
      n = e.querySelectorAll("dl");
    if (n.forEach(e => {
        let r = e.querySelector("dt"),
          n = e.querySelector("dd");
        if (r && n) {
          let e = r.innerText.trim();
          t.push({
            type: i.FIELD_TYPE.TEXT,
            label: e,
            $label: r,
            $input: n,
            required: !1
          })
        }
      }), 0 === t.length) {
      let r = e.querySelectorAll(".styles--36XiB, .field-wrapper");
      r.forEach(e => {
        let r = e.querySelector("label"),
          n = e.querySelector("input, textarea, select");
        r && n && t.push({
          type: i.FIELD_TYPE.TEXT,
          label: r.innerText.trim(),
          $label: r,
          $input: n,
          required: !1
        })
      })
    }
    t.length > 0 && r.push({
      type: i.FIELD_TYPE.EMPLOYMENT,
      label: "workExperience",
      children: t,
      $input: e,
      required: !1,
      options: []
    })
  }), r
}

function M(e) {
  return String(e || "").replace(/:/g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function N(e, t) {
  if (!t || !("children" in t)) return null;
  let r = e.find(e => {
    let t = "$input" in e ? e.$input : null;
    return !!(t && "function" == typeof t.querySelector && t.querySelector(
      "[data-ui='edit-section']"))
  });
  if (!r || !("children" in r) || !("$input" in r)) return null;
  let n = r.$input,
    o = r.children,
    i = t.children.map(e => {
      let t = o.find(t => M(t.label) === M(e.label)),
        r = t && "$input" in t ? t.$input : n,
        i = t && "$label" in t ? t.$label : n;
      return {
        type: e.type,
        label: e.label,
        required: e.required,
        $input: r,
        $label: i
      }
    });
  return {
    type: t.type,
    label: t.label,
    required: t.required,
    options: "options" in t ? t.options : [],
    $input: n,
    $label: n,
    children: i
  }
}

function $(e) {
  return N(R(), e)
}

function B(e) {
  return N(O(), e)
}
async function q(e) {
  let t = {};
  for (let r of e) r.type !== i.FIELD_TYPE.EDUCATION && r.type !== i.FIELD_TYPE.EMPLOYMENT &&
    "$input" in r && r.$input && (t[r.label] = U(r));
  let r = R();
  r.length > 0 && (t.education = r.map(e => {
    let t = {};
    return e.children.forEach(e => {
      t[e.label] = U(e)
    }), t
  }));
  let n = O();
  return n.length > 0 && (t.employment = n.map(e => {
    let t = {};
    return e.children.forEach(e => {
      t[e.label] = U(e)
    }), t
  })), t
}

function U(e) {
  let {
    $input: t,
    type: r,
    $checkboxs: n,
    options: a
  } = e;
  if (!t) return "";
  if (e.label === o.WORKABLE_PHONE_COUNTRY_CODE_LABEL) {
    let e = (0, o.getWorkablePhoneCountryContainer)(t);
    return e ? (0, o.readWorkableSelectedPhoneCountry)(e) : ""
  }
  if (r === i.FIELD_TYPE.CHECKBOX) {
    if (n && n.length > 0) {
      let e = n.map((e, t) => e.checked ? a?.[t] || "Checked" : null).filter(Boolean);
      return 1 === e.length ? e[0] : e
    }
    return t.checked || !1
  }
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ||
    t instanceof HTMLSelectElement) return t.value || "";
  let l = t.innerText?.trim() || t.textContent?.trim() || "";
  return l
}

