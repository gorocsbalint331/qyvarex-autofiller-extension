// @ts-nocheck
/**
 * Uber Careers — form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js"

const getTarget = { default: getTargetOrTimeout?.default ?? getTargetOrTimeout }
let UBER_DATE_MONTH_DESCRIPTION =
  "Return only the month in MM format, from 01 to 12."
let UBER_DATE_YEAR_DESCRIPTION = "Return only the year in YYYY format."
let UBER_PHONE_CODE_DESCRIPTION =
  "Return the country name shown in the phone country selector, such as United States. Do not return only the dial code because multiple countries can share the same code."
function c(e) {
  return (e || "").replace(/\s+/g, " ").trim();
}
function findMainForm() {
  let e = Array.from(document.querySelectorAll("form"));
  if (0 === e.length) return null;
  let t = (e2) => {
    let t2 = e2.querySelectorAll('input[name]:not([type="file"]), textarea[name]').length, r2 = e2.querySelectorAll('input[role="combobox"]').length, n2 = e2.querySelectorAll('button[type="submit"]').length, o2 = Array.from(e2.querySelectorAll("button")).some((e3) => /submit application/i.test((e3.textContent || "").trim()));
    return t2 + r2 + 50 * n2 + (o2 ? 50 : 0);
  }, r = e[0], n = t(r);
  for (let o2 of e.slice(1)) {
    let e2 = t(o2);
    e2 > n && (r = o2, n = e2);
  }
  return r;
}
function f(e) {
  let t = e.closest('[data-baseweb="flex-grid-item"]');
  if (t) return t;
  let r = e.closest('[data-baseweb*="form"], [data-baseweb*="control"]');
  if (r) return r;
  let n = e.closest('[class*="form-control"], [class*="field"]');
  if (n) return n;
  let o2 = e.closest("span"), i2 = o2?.nextElementSibling;
  if (i2) return i2;
  let a2 = e.parentElement;
  return a2 && a2.querySelector('input, textarea, select, [role="combobox"], [role="radiogroup"]'), a2;
}
function p(e, t, r, n, o2, i2) {
  let a2 = e.id || "", l2 = t.getAttribute("for") || "", s2 = "start-date-month" === a2 || a2.includes("start") && a2.includes("month"), u2 = "end-date-month" === a2 || a2.includes("end") && a2.includes("month"), c2 = "start-date-month" === l2 || l2.includes("start") && l2.includes("month"), d2 = "end-date-month" === l2 || l2.includes("end") && l2.includes("month"), f2 = /start.*date/i.test(r), p2 = /end.*date/i.test(r);
  if (!s2 && !u2 && !c2 && !d2 && !f2 && !p2) return false;
  let m2 = s2 || c2 || f2 ? "start" : "end", h2 = n.querySelector(`input[name="${o2}.${i2}.${m2}Date.year"]`);
  if (!h2) return false;
  let g2 = A(h2, m2);
  return g2 === e;
}
function m(e, t) {
  let r = t.querySelector('[role="radiogroup"]');
  if (r) return r;
  let n = e.parentElement;
  if (n && (r = n.querySelector('[role="radiogroup"]'))) return r;
  let o2 = e.closest("span");
  if (o2) {
    let e2 = o2.nextElementSibling;
    if (e2 && (r = e2.querySelector('[role="radiogroup"]'))) return r;
  }
  let i2 = e.closest('[data-baseweb="block"]');
  return i2 && (r = i2.querySelector('[role="radiogroup"]')) ? r : null;
}
function h(e) {
  return e ? e.startsWith("experiences.") ? "Experience" : e.startsWith("educations.") ? "Education" : "" : "";
}
function g(e) {
  if (!e) return null;
  let t = e.match(/^(educations|experiences)\.(\d+)\./);
  if (!t) return null;
  let r = Number(t[2]);
  return Number.isFinite(r) ? r : null;
}
function b(e, t, r) {
  let n = c(t), o2 = g(r);
  return e && null !== o2 ? `${e} ${o2 + 1} ${n}` : e ? `${e} ${n}` : n;
}
function y(e) {
  return e.disabled || e.hasAttribute("disabled") || e.hasAttribute("readonly");
}
function v(e, t, r) {
  let n = h(r);
  return b(n, `${e} - ${t}`, r);
}
function w(e, t) {
  let r = e.left - t.left, n = e.top - t.top;
  return Math.hypot(r, n);
}
function S(e) {
  if (!e.isConnected) return false;
  let t = window.getComputedStyle(e);
  if ("none" === t.display || "hidden" === t.visibility) return false;
  let r = e.getBoundingClientRect();
  return r.width > 0 && r.height > 0;
}
function E(e, t, r) {
  let n = e.getBoundingClientRect(), o2 = Array.from(t.querySelectorAll(r)), i2 = o2.filter((e2) => {
    let t2 = e2;
    return !!S(t2) && (!(e2 instanceof HTMLInputElement || e2 instanceof HTMLTextAreaElement || e2 instanceof HTMLSelectElement) || !y(e2));
  });
  if (0 === i2.length) return null;
  let a2 = null;
  for (let e2 of i2) {
    let t2 = w(e2.getBoundingClientRect(), n);
    (!a2 || t2 < a2.score) && (a2 = { element: e2, score: t2 });
  }
  return a2?.element || null;
}
function x(e) {
  let t = e.closest('[data-baseweb="flex-grid-item"]') || e.closest('[data-baseweb="flex-grid"]') || e.closest('[data-baseweb="block"]') || e.closest("form") || document.body, r = Array.from(t.querySelectorAll('input[name$=".startDate.year"], input[name$=".endDate.year"]'));
  if (0 === r.length) return null;
  let n = e.getBoundingClientRect(), o2 = null;
  for (let e2 of r) {
    let t2 = w(e2.getBoundingClientRect(), n);
    (!o2 || t2 < o2.score) && (o2 = { element: e2, score: t2 });
  }
  return o2?.element || null;
}
function C(e, t) {
  let r = e.match(RegExp(`^${t}\\.(\\d+)\\.`));
  if (!r) return null;
  let n = Number(r[1]);
  return Number.isFinite(n) ? n : null;
}
function A(e, t) {
  let r = e.closest('[data-baseweb="block"]'), n = r || e.closest('[data-baseweb="flex-grid-item"]') || e.closest('[data-baseweb="flex-grid"]') || e.closest("form") || document.body, o2 = e.getBoundingClientRect(), i2 = e.name || "", a2 = i2.includes(".endDate.year"), l2 = i2.includes(".startDate.year"), s2 = "end" === t || a2, u2 = "start" === t || l2, c2 = "start" === t ? ['input[role="combobox"]#start-date-month', 'input[role="combobox"][id*="start"][id*="month"]'] : ['input[role="combobox"]#end-date-month', 'input[role="combobox"][id*="end"][id*="month"]'], d2 = [];
  for (let e2 of c2) {
    let t2 = Array.from(n.querySelectorAll(e2));
    if (t2.length > 0) {
      d2 = t2;
      break;
    }
  }
  if (0 === d2.length) {
    let e2 = Array.from(n.querySelectorAll('input[role="combobox"]'));
    for (let t2 of e2) {
      if (t2.closest('[data-baseweb="phone-input"]')) continue;
      let e3 = t2.getBoundingClientRect(), r2 = 50 > Math.abs(e3.top - o2.top) && 200 > Math.abs(e3.left - o2.left);
      if (!r2) continue;
      let n2 = e3.right < o2.left, i3 = s2 && a2 || u2 && l2;
      n2 && i3 && d2.push(t2);
    }
  }
  if (0 === d2.length) return null;
  let f2 = null;
  for (let e2 of d2) {
    let t2 = w(e2.getBoundingClientRect(), o2);
    (!f2 || t2 < f2.score) && (f2 = { element: e2, score: t2 });
  }
  return f2?.element || null;
}
function k(e) {
  return /^(Start|End) Date - Month$/i.test(e)
    ? UBER_DATE_MONTH_DESCRIPTION
    : /^(Start|End) Date - Year$/i.test(e)
      ? UBER_DATE_YEAR_DESCRIPTION
      : void 0;
}
function T(e) {
  let t = { "start date - month": 1, "start date - year": 2, "end date - month": 3, "end date - year": 4 };
  return t[e.toLowerCase()] ?? null;
}
function buildUberSectionOptions(e) {
  return e.map((e2, t) => ({ type: e2.type, label: e2.label, options: e2.options || [], description: e2.description || k(e2.label), __index: t })).sort((e2, t) => {
    let r = T(e2.label), n = T(t.label);
    return null !== r && null !== n ? r - n : e2.__index - t.__index;
  }).map(({ __index: e2, description: t, ...r }) => ({ ...r, ...t ? { description: t } : {} }));
}
function I(e, t, r) {
  let n = { type: r, label: t, required: "true" === e.getAttribute("aria-required"), $input: e, $label: e };
  return r === enums.FIELD_TYPE.SELECT ? n.options = [] : r === enums.FIELD_TYPE.CHECKBOX && (n.options = ["Yes", "No"], n.$checkboxs = [e]), n;
}
function j(e, t) {
  return I(e, t, enums.FIELD_TYPE.TEXT);
}
function D(e, t) {
  return I(e, t, enums.FIELD_TYPE.SELECT);
}
function P(e, t) {
  return I(e, t, enums.FIELD_TYPE.CHECKBOX);
}
function _(e) {
  let t = [];
  for (let r of e) {
    let e2 = r.options || [];
    for (let r2 of e2) {
      let e3 = t.find((e4) => e4.label === r2.label);
      e3 || t.push({ type: r2.type || "text", label: r2.label, options: r2.options || [], ...r2.description ? { description: r2.description } : {} });
    }
  }
  return t;
}
function L(e, t) {
  t?.label && (e.some((e2) => e2.label === t.label) || e.push(t));
}
function R(e, t) {
  let r = e === enums.FIELD_TYPE.EDUCATION, n = r ? [{ type: enums.FIELD_TYPE.TEXT, label: "School", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "Degree", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "Major", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "Start Date - Month", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "Start Date - Year", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "End Date - Month", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "End Date - Year", required: false }, { type: enums.FIELD_TYPE.CHECKBOX, label: "Current", required: false, options: ["Yes", "No"] }] : [{ type: enums.FIELD_TYPE.TEXT, label: "Company", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "Position", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "Description (optional)", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "Start Date - Month", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "Start Date - Year", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "End Date - Month", required: false }, { type: enums.FIELD_TYPE.TEXT, label: "End Date - Year", required: false }, { type: enums.FIELD_TYPE.CHECKBOX, label: "Current", required: false, options: ["Yes", "No"] }];
  return { type: e, label: t, required: false, options: [], children: n };
}
function O(e) {
  L(e, R(enums.FIELD_TYPE.EDUCATION, "Education")), L(e, R(enums.FIELD_TYPE.EDUCATION, "education")), L(e, R(enums.FIELD_TYPE.EMPLOYMENT, "Employment")), L(e, R(enums.FIELD_TYPE.EMPLOYMENT, "employment"));
}
function M(e) {
  let t = (t2) => Array.from(new Set(Array.from(e.querySelectorAll(`input[name^="${t2}."]`)).map((e2) => C(e2.name || "", t2)).filter((e2) => null !== e2))).sort((e2, t3) => e2 - t3);
  return { educationIndices: t("educations"), experienceIndices: t("experiences") };
}
async function N(e) {
  let t = M(e), r = 0, n = 4;
  await getTarget.default(() => {
    let o2 = M(e);
    return o2.educationIndices.join(",") === t.educationIndices.join(",") && o2.experienceIndices.join(",") === t.experienceIndices.join(",") ? r++ : r = 0, t = o2, r >= n || null;
  }, () => false, 30);
}
async function $(e) {
  let t = Array.from(e.querySelectorAll('label[data-baseweb="form-control-label"]')), r = "Do you reside in the United States?", n = t.find((e2) => (e2.textContent || "").trim() === r);
  if (n) {
    let t2 = n.closest('[data-baseweb="flex-grid-item"]') || n.closest('[data-baseweb="block"]') || n.parentElement, r2 = t2?.querySelector('[role="radiogroup"]');
    if (r2) {
      let t3 = Array.from(r2.querySelectorAll('input[type="radio"]')), n2 = t3.find((e2) => {
        let t4 = e2.closest('label[data-baseweb="radio"]'), r3 = (t4?.textContent || "").trim().toLowerCase();
        return "yes" === r3 || "yes" === e2.value.toLowerCase();
      });
      if (n2?.checked) {
        let t4 = e.querySelector('input[name="zipCode"]');
        !t4 && n2 && (n2.click(), await getTarget.default(() => {
          let t5 = e.querySelector('input[name="zipCode"]');
          return t5 || null;
        }, () => false, 30));
      } else n2 && !n2.checked && (n2.click(), await getTarget.default(() => {
        let t4 = e.querySelector('input[name="zipCode"]');
        return t4 || null;
      }, () => false, 30));
    }
  }
  let o2 = "Please check one of the boxes below", i2 = t.find((e2) => (e2.textContent || "").trim() === o2);
  if (i2) {
    let r2 = i2.closest('[data-baseweb="flex-grid-item"]') || i2.closest('[data-baseweb="block"]') || i2.parentElement, n2 = r2?.querySelector('[role="radiogroup"]');
    if (n2) {
      let r3 = Array.from(n2.querySelectorAll('input[type="radio"]')), o3 = r3.find((e2) => {
        let t2 = e2.closest('label[data-baseweb="radio"]'), r4 = (t2?.textContent || "").trim().toLowerCase(), n3 = (e2.value || "").trim().toLowerCase();
        return r4.includes("yes") && r4.includes("disability") || r4.includes("prefer not to say") || n3.includes("yes") && n3.includes("disability") || n3.includes("prefer");
      }), i3 = "Do you need to request accommodations during the recruiting process due to disability?";
      t.find((e2) => (e2.textContent || "").trim() === i3);
      let l2 = e.querySelector('input[name="disabilityAccomodation"]');
      l2 || !o3 || o3.checked || (o3.click(), await getTarget.default(() => {
        let t2 = e.querySelector('input[name="disabilityAccomodation"]');
        return t2 || null;
      }, () => false, 30));
    }
  }
}
function getUberPhoneCodeOptionText(e) {
  let t = Array.from(e.querySelectorAll("div")).map((e2) => c(e2.textContent || "")).filter(Boolean), r = t.find((e2) => !/^\+\d+$/.test(e2) && /[A-Za-z\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u4E00-\u9FFF]/.test(e2));
  if (r) return r;
  let n = c(e.textContent || "");
  return n.replace(/\+\d+\s*$/, "").trim() || n;
}
async function q(e, t = {}) {
  try {
    e.focus(), e.click();
    let r = await getTarget.default(() => {
      let t2 = e.getAttribute("aria-controls"), r2 = t2 ? document.getElementById(t2) : null;
      return r2 && "listbox" === r2.getAttribute("role") ? r2 : null;
    }, () => false, 2);
    if (r) return Array.from(r.querySelectorAll('[role="option"]')).map((e2) => t.phoneCodeOnly ? getUberPhoneCodeOptionText(e2) : c(e2.textContent || "")).filter(Boolean);
  } catch {
  } finally {
    try {
      e.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), e.blur();
    } catch {
    }
  }
  return [];
}
let U = 'input[name="mobileNumber"], input[type="tel"]:not([role="combobox"]), input[inputmode="tel"]:not([role="combobox"]), input[autocomplete*="tel"]:not([role="combobox"]), input[autocomplete="tel-national"]:not([role="combobox"])';
function H(e) {
  return /\bnumber\b/i.test(e) ? e.replace(/\bnumber\b/i, "code") : `${e} code`.replace(/\s+/g, " ").trim();
}
function Y(e, t) {
  let r = [e.querySelector('[data-baseweb="phone-input"]'), t.querySelector('[data-baseweb="phone-input"]')].filter(Boolean);
  return r.filter((e2, t2) => r.indexOf(e2) === t2);
}
function z(e, t) {
  for (let r of Y(e, t)) {
    let e2 = r.querySelector('input[role="combobox"]');
    if (e2 && !y(e2)) return e2;
  }
  return null;
}
function V(e, t) {
  let r = e.querySelector('input[name="mobileNumber"]');
  if (r && !y(r)) return r;
  let n = t.querySelector('input[name="mobileNumber"]');
  if (n && !y(n)) return n;
  let o2 = t.querySelectorAll('input[name*="mobile"], input[name*="phone"]');
  for (let e2 of Array.from(o2)) if (!y(e2) && "hidden" !== e2.type && "combobox" !== e2.getAttribute("role")) return e2;
  for (let r2 of Y(e, t)) {
    let e2 = r2.querySelectorAll(U);
    for (let t2 of Array.from(e2)) if ((!t2.name || "mobileNumber" === t2.name) && !y(t2)) return t2;
  }
  let i2 = E(e, e, U);
  if (i2 && !y(i2)) return i2;
  let a2 = t.querySelectorAll(U);
  for (let e2 of Array.from(a2)) if (!y(e2)) return e2;
  return null;
}
async function buildUberPhoneRules(e, t, r, n) {
  let i2 = [], a2 = z(t, r);
  if (a2) {
    let t2 = await q(a2, { phoneCodeOnly: true });
    i2.push({ type: enums.FIELD_TYPE.SELECT, label: H(e), required: true, options: t2, description: UBER_PHONE_CODE_DESCRIPTION, $input: a2, $label: n });
  }
  let l2 = V(t, r);
  return l2 && i2.push({ type: enums.FIELD_TYPE.TEXT, label: e, required: true, $input: l2, $label: n }), i2;
}
async function extractRules() {
  let e = [], t = findMainForm();
  if (!t) return e;
  await N(t), await $(t);
  let r = Array.from(t.querySelectorAll('label[data-baseweb="form-control-label"]'));
  for (let n2 of (0 === r.length && 0 === (r = Array.from(t.querySelectorAll('label:not([for=""])'))).length && (r = Array.from(t.querySelectorAll('label[class*="label"], label[class*="Label"]'))), r)) {
    let r2 = c(n2.textContent || "");
    if (!r2) continue;
    let i3 = r2.includes("*"), a3 = r2.replace(/\s*\*\s*$/, ""), l3 = f(n2);
    if (!l3) continue;
    let s3 = /^zip\s*code|zipcode|zip_code/i.test(a3);
    if (s3) ;
    else {
      let r3 = m(n2, l3);
      if (r3) {
        let i4 = Array.from(r3.querySelectorAll('input[type="radio"]'));
        if (0 === i4.length) continue;
        let l4 = i4.map((e2) => {
          let r4 = e2.closest('label[data-baseweb="radio"]');
          r4 || (r4 = e2.closest("label")), !r4 && e2.id && (r4 = t.querySelector(`label[for="${e2.id}"]`));
          let n3 = c(r4?.textContent || "") || c(e2.value || "");
          return n3;
        }).filter(Boolean);
        e.push({ type: enums.FIELD_TYPE.RADIOGROUP, label: a3, required: true, options: l4, $input: i4[0], $label: n2 });
        continue;
      }
    }
    let u3 = E(n2, l3, "textarea[name]");
    if (u3 && !y(u3)) {
      if (u3.name?.startsWith("educations.") || u3.name?.startsWith("experiences.")) continue;
      let t2 = h(u3.name);
      e.push({ type: enums.FIELD_TYPE.TEXT, label: b(t2, a3, u3.name), required: "true" === u3.getAttribute("aria-required") || i3, $input: u3, $label: n2 });
      continue;
    }
    if (/phone/i.test(a3)) {
      let r3 = await buildUberPhoneRules(a3, l3, t, n2);
      if (r3.length > 0) {
        e.push(...r3);
        continue;
      }
    }
    let d2 = null, p3 = n2.getAttribute("for");
    if (p3) {
      let e2 = n2.closest("form");
      e2 && (d2 = e2.querySelector(`input[role="combobox"]#${p3}`));
    }
    if ((!d2 || y(d2)) && (d2 = E(n2, l3, 'input[role="combobox"]')), d2 && !y(d2)) {
      if (/phone/i.test(a3)) {
        let e2 = d2.closest('[data-baseweb="phone-input"]');
        if (e2) continue;
      }
      let t2 = /^zip\s*code|zipcode|zip_code/i.test(a3) || /^zip\s*code|zipcode|zip_code/i.test(d2.name || "");
      if (t2) continue;
      let r3 = d2.id || "", s4 = d2.name || "", u4 = a3.toLowerCase(), c2 = "start-date-month" === r3 || r3.includes("start") && r3.includes("month"), f2 = "end-date-month" === r3 || r3.includes("end") && r3.includes("month");
      c2 || f2 || (c2 = s4.includes("startDate") && s4.includes("month"), f2 = s4.includes("endDate") && s4.includes("month")), c2 || f2 || (c2 = /start.*date.*month|month.*start.*date/i.test(u4), f2 = /end.*date.*month|month.*end.*date/i.test(u4));
      let p4 = x(d2), m2 = p4?.name || null;
      if (c2 || f2 || !m2 || (c2 = m2.includes("startDate"), f2 = m2.includes("endDate")), m2?.startsWith("educations.") || m2?.startsWith("experiences.")) continue;
      let g4 = E(n2, l3, 'input[name]:not([type="file"]), textarea[name]') || p4, y2 = g4?.name || m2, w3 = c2 || f2 ? v(c2 ? "Start Date" : "End Date", "Month", m2) : b(h(y2), a3, y2), S2 = await q(d2), C2 = l3.querySelector('[data-baseweb="form-control-caption"]');
      if (C2 || (C2 = l3.querySelector('[role="alert"]')), !C2) {
        let e2 = l3.parentElement;
        e2 && (C2 = e2.querySelector('[data-baseweb="form-control-caption"]'));
      }
      if (!C2 && !(C2 = l3.querySelector('[class*="error"], [class*="Error"], [class*="caption"], [class*="Caption"]'))) {
        let e2 = l3.parentElement;
        e2 && (C2 = e2.querySelector('[class*="error"], [class*="Error"]'));
      }
      let A2 = C2?.textContent?.includes("Required field") || C2?.textContent?.includes("required") || false, k2 = "true" === d2.getAttribute("aria-required") || "true" === d2.getAttribute("aria-invalid") || i3 || A2, T2 = /currently.*employed.*subsidiaries?/i.test(w3) || /subsidiaries?.*employed/i.test(w3);
      e.push({ type: enums.FIELD_TYPE.SELECT, label: w3, required: k2 || T2, options: S2, $input: d2, $label: n2 });
      continue;
    }
    let g3 = null, w2 = n2.getAttribute("for") || "";
    if (w2) {
      let e2 = document.getElementById(w2);
      e2 instanceof HTMLInputElement && (l3.contains(e2) || t.contains(e2)) && (g3 = e2);
    }
    if (g3 || (g3 = E(n2, l3, 'input:not([type="file"]):not([role="combobox"])')), g3 && !y(g3) && "combobox" !== g3.getAttribute("role")) {
      if (g3.name?.startsWith("educations.") || g3.name?.startsWith("experiences.") || "mobileNumber" === g3.name) continue;
      let t2 = /linkedInURL|githubURL|otherURL/i.test(g3.name || "");
      if (t2) continue;
      let r3 = h(g3.name), l4 = b(r3, a3, g3.name), s4 = (g3.name || g3.id || g3.getAttribute("aria-label") || g3.getAttribute("src/contents/sites/metacareers/autocomplete") || "").toLowerCase(), u4 = /first\s*name|last\s*name/i.test(l4);
      if (u4) {
        let e2 = /firstname|first\s*name|given-name|givenname|given/i.test(s4), t3 = /lastname|last\s*name|family-name|familyname|family|surname/i.test(s4);
        e2 && !t3 ? l4 = "First Name" : t3 && !e2 && (l4 = "Last Name");
      }
      let c2 = /first\s*name/i.test(l4), d3 = /last\s*name/i.test(l4), f2 = /^zip\s*code|zipcode|zip_code/i.test(l4) || /^zip\s*code|zipcode|zip_code/i.test(g3.name || ""), p4 = /linkedin|github|portfolio/i.test(l4);
      if (f2) {
        e.push({ type: enums.FIELD_TYPE.TEXT, label: l4, required: true, $input: g3, $label: n2 });
        continue;
      }
      let m2 = c2 || d3;
      e.push({ type: enums.FIELD_TYPE.TEXT, label: l4, required: m2 || "true" === g3.getAttribute("aria-required") && !p4 || i3 && !p4, $input: g3, $label: n2 });
      continue;
    }
  }
  let n = Array.from(t.querySelectorAll('input[name$=".startDate.year"], input[name$=".endDate.year"]'));
  for (let t2 of n) {
    if (y(t2) || t2.name?.startsWith("educations.") || t2.name?.startsWith("experiences.")) continue;
    let r2 = t2.name.includes(".startDate.year") ? "Start Date" : "End Date", n2 = v(r2, "Year", t2.name);
    e.push({ type: enums.FIELD_TYPE.TEXT, label: n2, required: "true" === t2.getAttribute("aria-required"), $input: t2, $label: t2 });
  }
  let i2 = Array.from(t.querySelectorAll('label[data-baseweb="checkbox"]'));
  for (let r2 of (0 === i2.length && 0 === (i2 = Array.from(t.querySelectorAll('label:has(input[type="checkbox"])'))).length && (i2 = Array.from(t.querySelectorAll('label[class*="checkbox"]'))), i2)) {
    let t2 = r2.querySelector('input[type="checkbox"]');
    if (!t2 || y(t2)) continue;
    let n2 = c(r2.textContent || "");
    if (!n2 || t2.name?.startsWith("educations.") || t2.name?.startsWith("experiences.")) continue;
    let i3 = h(t2.name);
    e.push({ type: enums.FIELD_TYPE.CHECKBOX, label: b(i3, n2, t2.name), required: "true" === t2.getAttribute("aria-required"), options: ["Yes", "No"], $checkboxs: [t2], $input: t2, $label: r2 });
  }
  try {
    let t2 = getEducationRules();
    t2.length > 0 ? e.push(...t2) : O(e);
  } catch (t2) {
    O(e);
  }
  try {
    let t2 = getEmploymentRules();
    t2.length > 0 ? e.push(...t2) : O(e);
  } catch (t2) {
    O(e);
  }
  for (let t2 of e) t2.type === enums.FIELD_TYPE.RADIOGROUP && (t2.required = true);
  let a2 = { linkedInURL: "LinkedIn", githubURL: "Github", otherURL: "Portfolio" };
  for (let [r2, n2] of Object.entries(a2)) {
    let i3 = t.querySelector(`input[name="${r2}"][type="url"]:not([type="file"]):not([role="combobox"])`);
    if (!i3 || y(i3)) continue;
    let a3 = e.some((e2) => {
      let t2 = e2.$input;
      return t2?.name === r2;
    });
    if (a3) continue;
    let l3 = null, s3 = i3.closest('[data-baseweb="form-control-container"]');
    if (s3) {
      let e2 = s3.previousElementSibling;
      e2 && (l3 = e2.querySelector?.('label[data-baseweb="form-control-label"]'));
    }
    if (!l3) {
      let e2 = i3.closest('[data-baseweb="block"], [data-baseweb="flex-grid-item"]');
      if (e2) {
        let t2 = Array.from(e2.querySelectorAll('label[data-baseweb="form-control-label"]')), r3 = null, n3 = 1 / 0;
        for (let e3 of t2) if (i3.compareDocumentPosition(e3) & Node.DOCUMENT_POSITION_PRECEDING) {
          let t3 = document.createRange();
          t3.setStartAfter(e3), t3.setEndBefore(i3);
          let o2 = t3.cloneContents().childNodes.length;
          o2 < n3 && (n3 = o2, r3 = e3);
        }
        r3 && (l3 = r3);
      }
    }
    !l3 && i3.id && (l3 = t.querySelector(`label[for="${i3.id}"]`));
    let u3 = n2;
    if (l3) {
      let e2 = l3.textContent?.trim() || l3.innerText?.trim();
      if (e2) {
        let t2 = e2.toLowerCase(), n3 = r2.toLowerCase(), o2 = n3.includes("linkedin") && t2.includes("linkedin"), i4 = n3.includes("github") && t2.includes("github"), a4 = (n3.includes("other") || n3.includes("portfolio")) && t2.includes("portfolio");
        (o2 || i4 || a4) && (u3 = e2);
      }
    }
    e.push({ type: enums.FIELD_TYPE.TEXT, label: u3, required: false, $input: i3, $label: l3 });
  }
  let l2 = t.querySelector('input[name="firstName"]'), s2 = t.querySelector('input[name="lastName"]'), u2 = (e2) => String(e2 ?? "").trim().replace(/\s*\*$/, ""), p2 = (e2) => /^first\s*name$/i.test(u2(e2)), g2 = (e2) => /^last\s*name$/i.test(u2(e2));
  if (l2?.isConnected && s2?.isConnected) {
    for (let t3 of e) {
      if (t3.type !== enums.FIELD_TYPE.TEXT) continue;
      let e2 = t3.label;
      p2(e2) ? (t3.$input = l2, t3.label = "First Name") : g2(e2) && (t3.$input = s2, t3.label = "Last Name");
    }
    let t2 = false, r2 = false, n2 = [];
    for (let i3 of e) {
      if (i3.type !== enums.FIELD_TYPE.TEXT) {
        n2.push(i3);
        continue;
      }
      let e2 = i3.label;
      if ("First Name" === e2) {
        if (t2) continue;
        t2 = true;
      } else if ("Last Name" === e2) {
        if (r2) continue;
        r2 = true;
      }
      n2.push(i3);
    }
    e.length = 0, e.push(...n2);
  }
  return e;
}
async function getFormSnapshot() {
  let e = {}, t = findMainForm();
  if (!t) return e;
  let r = Array.from(t.querySelectorAll('input[name]:not([type="file"]), textarea[name]'));
  for (let t2 of r) {
    if (y(t2)) continue;
    let r2 = t2.name || t2.name;
    if (r2.startsWith("educations.") || r2.startsWith("experiences.")) continue;
    let n2 = h(r2), o2 = t2.closest('[data-baseweb="flex-grid-item"]') || t2.closest('[data-baseweb="block"]') || t2.parentElement, i2 = o2?.querySelector('label[data-baseweb="form-control-label"]'), a2 = c(i2?.textContent || ""), l2 = a2;
    l2 || (l2 = r2.endsWith(".startDate.year") ? "Start Date - Year" : r2.endsWith(".endDate.year") ? "End Date - Year" : r2), e[l2 = b(n2, l2, r2)] = t2.value ?? "";
  }
  let n = Array.from(t.querySelectorAll('label[data-baseweb="checkbox"]'));
  for (let r2 of (0 === n.length && 0 === (n = Array.from(t.querySelectorAll('label:has(input[type="checkbox"])'))).length && (n = Array.from(t.querySelectorAll('label[class*="checkbox"]'))), n)) {
    let t2 = r2.querySelector('input[type="checkbox"]');
    if (!t2 || t2.name?.startsWith("educations.") || t2.name?.startsWith("experiences.")) continue;
    let n2 = c(r2.textContent || ""), o2 = h(t2.name), i2 = b(o2, n2 || t2.name, t2.name);
    e[i2] = t2.checked ? "Yes" : "No";
  }
  return e;
}
function X(e, t, r, n) {
  let i2 = {};
  for (let [o2, a3] of Object.entries(n)) {
    let n2 = e.querySelector(`${a3.selector}[name="${r}.${t}.${o2}"]`);
    n2 && ("checkbox" === n2.type ? i2[a3.key] = n2.checked ? "Yes" : "No" : i2[a3.key] = n2.value || "");
  }
  let a2 = e.querySelector(`input[name="${r}.${t}.startDate.year"]`), l2 = e.querySelector(`input[name="${r}.${t}.endDate.year"]`), s2 = a2 ? A(a2, "start") : null, u2 = l2 ? A(l2, "end") : null, c2 = (e2) => e2 ? "combobox" === e2.getAttribute("role") ? el(e2, enums.FIELD_TYPE.SELECT) : e2.value || "" : "", d2 = c2(s2), f2 = c2(u2);
  return (s2 || a2) && (i2.Start = `${d2 || ""}/${a2?.value || ""}`.replace(/^\/$/, "")), (u2 || l2) && (i2.End = `${f2 || ""}/${l2?.value || ""}`.replace(/^\/$/, "")), Object.keys(i2).length > 0 ? i2 : null;
}
function J(e, t) {
  return X(e, t, "educations", { schoolName: { selector: "input", key: "School" }, degree: { selector: "input", key: "Degree" }, fieldOfStudy: { selector: "input", key: "Major" }, isCurrent: { selector: 'input[type="checkbox"]', key: "Current" } });
}
function Q(e, t) {
  let r = e.querySelector(`textarea[name="experiences.${t}.description"], input[name="experiences.${t}.description"]`), n = X(e, t, "experiences", { companyName: { selector: "input", key: "Company" }, title: { selector: "input", key: "Position" }, isCurrent: { selector: 'input[type="checkbox"]', key: "Current" } });
  return r && n && (n.Description = r.value || ""), n;
}
function getEduAndEmploymentSnapshot() {
  let e = findMainForm();
  if (!e) return null;
  let { educationIndices: t, experienceIndices: r } = M(e), n = t.map((t2) => J(e, t2)).filter((e2) => !!e2), o2 = r.map((t2) => Q(e, t2)).filter((e2) => !!e2), i2 = {};
  return n.length > 0 && (i2.education = n), o2.length > 0 && (i2.employment = o2), Object.keys(i2).length > 0 ? i2 : null;
}
function ee(e, t, r) {
  let n = [], o2 = /* @__PURE__ */ new Set(), i2 = Array.from(e.querySelectorAll(`input[name^="${r}.${t}."], textarea[name^="${r}.${t}."]`));
  if (0 === i2.length) return n;
  let a2 = i2[0], l2 = a2.closest('[data-baseweb="block"]');
  function s2(t2) {
    let r2 = t2.closest('[data-baseweb="flex-grid-item"], [data-baseweb="block"], [data-baseweb="form-control-container"]');
    if (r2) {
      let e2 = r2.querySelector('label[data-baseweb="form-control-label"]');
      if (e2) return e2;
    }
    if (t2.id) {
      let r3 = e.querySelector(`label[for="${t2.id}"]`);
      if (r3) return r3;
    }
    if (l2) {
      let e2 = Array.from(l2.querySelectorAll('label[data-baseweb="form-control-label"]'));
      for (let r3 of e2) {
        let e3 = f(r3);
        if (e3 && e3.contains(t2)) return r3;
      }
    }
    return null;
  }
  function u2(e2, t2) {
    if (e2) {
      let t3 = c(e2.textContent || ""), r2 = t3.replace(/\s*\*\s*$/, "").trim();
      if (r2) return r2;
    }
    return t2.includes("schoolName") ? "School" : t2.includes("degree") ? "Degree" : t2.includes("fieldOfStudy") ? "Major (optional)" : t2.includes("companyName") ? "Company" : t2.includes("title") ? "Position" : t2.includes("description") ? "Description (optional)" : t2.includes("isCurrent") ? "Current" : "";
  }
  function d2(i3) {
    if (o2.has(i3) || y(i3) || i3.name?.includes("Date.year") || i3.name?.includes("Date.month")) return;
    let a3 = s2(i3), l3 = u2(a3, i3.name || "");
    if (l3) {
      if (i3 instanceof HTMLInputElement && "checkbox" === i3.type) n.push(P(i3, l3)), o2.add(i3);
      else if (i3 instanceof HTMLTextAreaElement) {
        let e2 = j(i3, l3);
        e2.required = "true" === i3.getAttribute("aria-required"), n.push(e2), o2.add(i3);
      } else if (i3 instanceof HTMLInputElement && "combobox" === i3.getAttribute("role")) {
        if (p(i3, a3, l3, e, r, t)) return;
      } else i3 instanceof HTMLInputElement && (n.push(j(i3, l3)), o2.add(i3));
    }
  }
  for (let e2 of i2) d2(e2);
  let m2 = (i3, a3) => {
    let l3 = e.querySelector(`input[name="${r}.${t}.${i3}Date.year"]`);
    if (!l3 || o2.has(l3)) return;
    let s3 = A(l3, i3), u3 = null, d3 = l3.closest('[data-baseweb="flex-grid-item"]');
    if (d3 && (u3 = d3.querySelector('label[data-baseweb="form-control-label"]')), !u3 && s3) {
      let e2 = s3.closest('[data-baseweb="flex-grid-item"]');
      e2 && (u3 = e2.querySelector('label[data-baseweb="form-control-label"]'));
    }
    let f2 = u3 ? c(u3.textContent || "").replace(/\s*\*\s*$/, "").trim() : a3;
    f2 = f2.replace(/\s*-\s*(Year|Month)\s*$/i, "").trim() || a3;
    let p2 = `${f2} - Year`, m3 = `${f2} - Month`;
    s3 && !o2.has(s3) && (n.push(D(s3, m3)), o2.add(s3)), n.push(j(l3, p2)), o2.add(l3);
  };
  return m2("start", "Start Date"), m2("end", "End Date"), n;
}
function et(e, t, r) {
  let n = findMainForm();
  if (!n) return [];
  let i2 = e === enums.FIELD_TYPE.EDUCATION ? M(n).educationIndices : M(n).experienceIndices, a2 = [];
  for (let o2 of i2) {
    let i3 = ee(n, o2, t);
    if (i3.length > 0) {
      let t2 = i3[0];
      a2.push({ type: e, label: r, children: i3, required: true, options: buildUberSectionOptions(i3), $input: t2?.$input || n });
    }
  }
  if (0 === a2.length) return a2;
  let l2 = a2.map((t2, n2) => ({ label: `${r} ${n2 + 1}`, type: e, children: t2.children || [], required: true, options: t2.options || [], $input: t2.$input })), s2 = _(l2), u2 = { type: e, label: r, children: l2, required: true, options: s2, $input: a2[0]?.$input || n };
  return [u2];
}
function getEducationRules() {
  return et(enums.FIELD_TYPE.EDUCATION, "educations", "Education");
}
function getEmploymentRules() {
  return et(enums.FIELD_TYPE.EMPLOYMENT, "experiences", "Employment");
}
function eo(e, t) {
  return [...e].sort((e2, r) => {
    let n = t[e2.label] || 999, o2 = t[r.label] || 999;
    return n - o2;
  });
}
function sortEducationFields(e) {
  return eo(e, { School: 1, Degree: 2, Major: 3, "Start Date - Month": 4, "Start Date - Year": 5, "End Date - Month": 6, "End Date - Year": 7, Current: 8 });
}
function sortEmploymentFields(e) {
  return eo(e, { Company: 1, Position: 2, "Description (optional)": 3, "Start Date - Month": 4, "Start Date - Year": 5, "End Date - Month": 6, "End Date - Year": 7, Current: 8 });
}
function el(e, t) {
  if (t === enums.FIELD_TYPE.TEXT) return (e.value || "").trim();
  if (t === enums.FIELD_TYPE.CHECKBOX) return e.checked ? "Yes" : "No";
  if (t === enums.FIELD_TYPE.SELECT) {
    let t2 = e;
    if ("SELECT" === t2.tagName) return t2.value || "";
    let r = t2;
    if ("combobox" === r.getAttribute("role")) {
      let e2 = r.getAttribute("aria-activedescendant");
      if (e2) {
        let t4 = document.getElementById(e2);
        if (t4) {
          let e3 = c(t4.textContent || "");
          if (e3) return e3;
        }
      }
      let t3 = r.getAttribute("aria-controls");
      if (t3) {
        let e3 = document.getElementById(t3);
        if (e3) {
          let t4 = e3.querySelector('[role="option"][aria-selected="true"]');
          if (t4) {
            let e4 = c(t4.textContent || "");
            if (e4) return e4;
          }
        }
      }
      let n = r.closest('[data-baseweb="select"]');
      if (n) {
        let e3 = n.querySelector("[value]");
        if (e3) {
          let t4 = e3.getAttribute("value") || c(e3.textContent || "");
          if (t4) return t4;
        }
      }
      return r.value || "";
    }
    return t2.value || "";
  }
  if (t === enums.FIELD_TYPE.RADIOGROUP) {
    let t2 = e.closest('[role="radiogroup"]');
    if (!t2) return "";
    let r = t2.querySelector('input[type="radio"]:checked');
    if (!r) return "";
    let n = r.closest('label[data-baseweb="radio"]');
    return n ? (n.textContent || "").trim() : r.value || "";
  }
  return "";
}
async function getFormSnapshotFromRules(e) {
  let t = {}, r = e.filter((e2) => {
    let t2 = e2.$input;
    return !!t2 && !!t2.isConnected;
  });
  for (let e2 of r) {
    if (e2.type === enums.FIELD_TYPE.EDUCATION || e2.type === enums.FIELD_TYPE.EMPLOYMENT) continue;
    let r2 = e2.$input;
    if (!r2 || e2.type !== enums.FIELD_TYPE.RADIOGROUP && (r2.disabled || r2.hasAttribute("disabled") || r2.hasAttribute("readonly"))) continue;
    let n2 = el(r2, e2.type);
    e2.label && null !== n2 && (t[e2.label] = n2);
  }
  let n = getEduAndEmploymentSnapshot();
  return n ? { ...t, ...n } : t;
}
async function getFormSnapshotWithEducationAndEmployment() {
  let e = await getFormSnapshot(), t = getEduAndEmploymentSnapshot();
  return t ? { ...e, ...t } : e;
}

export {
  UBER_DATE_MONTH_DESCRIPTION,
  UBER_DATE_YEAR_DESCRIPTION,
  UBER_PHONE_CODE_DESCRIPTION,
  buildUberPhoneRules,
  buildUberSectionOptions,
  extractRules,
  findMainForm,
  getEduAndEmploymentSnapshot,
  getEducationRules,
  getEmploymentRules,
  getFormSnapshot,
  getFormSnapshotFromRules,
  getFormSnapshotWithEducationAndEmployment,
  getUberPhoneCodeOptionText,
  sortEducationFields,
  sortEmploymentFields,
}
