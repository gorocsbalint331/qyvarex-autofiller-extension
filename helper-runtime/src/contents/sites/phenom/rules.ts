// @ts-nocheck
/**
 * Phenom — form rule extraction, snapshots, and step detection.
 */

import * as enums from "../../../core/enums.js";
import * as coreUtils from "../../../core/utils.js";
let a = 'form.rjsf[data-ot-ignore="true"], form.rjsf', l = ".form-group.field", s = '#next, button#next, button[aria-label="Continue"], button[type="submit"], input[type="submit"]', u = "fieldset.field.field-array.field-array-of-object";
function c(e = window.location.href) {
  let t = coreUtils.removeEndStrings(e);
  try {
    let e2 = new URL(t);
    if (!e2.searchParams.has("step") && !e2.searchParams.has("stepname")) return t;
    return e2.searchParams.delete("step"), e2.searchParams.delete("stepname"), e2.toString();
  } catch {
    return t;
  }
}
function d(e) {
  if (!(e instanceof HTMLElement) || e.closest(".hidden,[hidden],[aria-hidden='true']")) return false;
  let t = window.getComputedStyle(e);
  return "none" !== t.display && "hidden" !== t.visibility && 0 !== Number(t.opacity || "1") && ("function" == typeof e.checkVisibility ? e.checkVisibility() : !!e.offsetParent || "fixed" === t.position);
}
function f(e) {
  if (!e) return "";
  let t = e.cloneNode(true);
  return t.querySelectorAll("input, .check, .checkmark, .required, [aria-hidden='true']").forEach((e2) => {
    e2.remove();
  }), t.textContent?.replace(/\s+/g, " ").replace(/\s*[:\uff1a]\s*$/, "").trim() || "";
}
function p({ directLabel: e, parentObjectLabel: t, parentObjectClasses: r }) {
  let n = r?.includes("skills") === true;
  return n && t ? t.replace(/\s*[:\uff1a]\s*$/, "").trim() : e.replace(/\s*[:\uff1a]\s*$/, "").trim();
}
function m(e) {
  let t = e.querySelector("label.control-label") || e.querySelector("legend"), r = f(t);
  if (r) {
    let t2 = e.closest(".form-group.field.field-object"), n2 = t2 && t2 !== e ? f(t2.querySelector("legend")) : "";
    return p({ directLabel: r, parentObjectLabel: n2, parentObjectClasses: t2 ? Array.from(t2.classList) : [] });
  }
  let n = e.querySelector(".checkbox label, .radio label, label");
  return f(n);
}
function h(e) {
  let t = e.querySelector("label.control-label, label");
  if (t?.querySelector(".required")) return true;
  let r = e.querySelector("input, textarea, select");
  return r?.required === true || r?.getAttribute("aria-required") === "true";
}
function g(e, t) {
  return e instanceof HTMLSelectElement && !e.disabled && (e.required || "true" === e.getAttribute("aria-required") || !!t.querySelector(".required") || !!t.querySelector(".error-detail, [role='alert'], .text-danger"));
}
function b(e) {
  let t = Array.from(e.querySelectorAll("select")).find((t2) => t2.closest(".form-group.field") === e);
  return !!t && g(t, e);
}
function y(e) {
  if (d(e)) return false;
  let t = Array.from(e.querySelectorAll("select")).find((t2) => t2.closest(".form-group.field") === e);
  if (!t) return false;
  let r = `${t.id || ""} ${t.name || ""}`.toLowerCase(), n = m(e).replace(/\*/g, "").toLowerCase();
  return r.includes("applicantsource") || "how did you hear about us?" === n || "how did you hear about us" === n;
}
function v(e, t = {}) {
  let { includeDisabled: r = false } = t;
  return Array.from(e.querySelectorAll(l)).filter((e2) => !y(e2)).filter((e2) => d(e2) || b(e2)).filter((e2) => w(e2)).filter((e2) => {
    let t2 = Array.from(e2.querySelectorAll("input, textarea, select")).filter((t3) => "hidden" !== t3.type && (r || !t3.disabled) && (d(t3) || t3 instanceof HTMLSelectElement && g(t3, e2)));
    return t2.length > 0;
  });
}
function w(e) {
  if (e.classList.contains("field-object")) return false;
  let t = Array.from(e.children).some((e2) => e2 instanceof HTMLElement && e2.matches(".form-group.field, fieldset.field.field-array.field-array-of-object"));
  if (t) return false;
  let r = Array.from(e.querySelectorAll(":scope .form-group.field")).some((t2) => t2 !== e);
  return !r;
}
function S(e) {
  let t = e.closest(u);
  if (!(t instanceof HTMLElement)) return null;
  let r = t.parentElement?.closest(u);
  return r instanceof HTMLElement ? r : t;
}
function E(e, t = {}) {
  let { includeDisabled: r = false } = t, n = Array.from(e.querySelectorAll("input, textarea, select")).filter((t2) => {
    if ("hidden" === t2.type || !r && t2.disabled || !d(t2) && !(t2 instanceof HTMLSelectElement && g(t2, e))) return false;
    let n2 = t2.closest(".form-group.field");
    return n2 === e;
  });
  return n[0] ?? null;
}
function x(e) {
  return Array.from(e.options).map((e2) => e2.textContent?.replace(/\s+/g, " ").trim() || "").filter(Boolean);
}
function C(e) {
  return new Promise((t) => setTimeout(t, e));
}
async function A(e) {
  let t = e.closest(".calendar-widget");
  for (let e2 = 0; e2 < 10; e2 += 1) {
    let e3 = t?.querySelector(".react-datepicker-popper") || document.querySelector(".react-datepicker-popper");
    if (e3 && d(e3)) return e3;
    await C(50);
  }
  return null;
}
function k(e) {
  e.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: "Escape" })), e.blur(), document.body.click();
}
function T(e) {
  let t = `${e.id || ""} ${e.name || ""}`;
  return /(?:educationData|experienceData)\[\d+\]\.fromTo\.(?:startDate|endDate)/i.test(t);
}
function F(e) {
  let t = String(e ?? "");
  if (t.trim()) {
    if (/\b(?:yyyy|yy)\s*-\s*(?:mm|m)\s*-\s*(?:dd|d)\b/i.test(t)) return "YYYY-MM-DD";
    if (/\b(?:yyyy|yy)\s*\/\s*(?:mm|m)\s*\/\s*(?:dd|d)\b/i.test(t)) return "YYYY/MM/DD";
    if (/\b(?:mm|m)\s*\/\s*(?:dd|d)\s*\/\s*(?:yyyy|yy)\b/i.test(t)) return "MM/DD/YYYY";
    if (/\b(?:mm|m)\s*\/\s*(?:yyyy|yy)\b/i.test(t) || /\b(?:month|mm)\s*[-/ ]+\s*(?:year|yyyy)\b/i.test(t)) return "MM/YYYY";
    if (/\b(?:yyyy|year)\b/i.test(t) && !/\b(?:mm|month|dd|day)\b/i.test(t)) return "YYYY";
  }
}
function I(e) {
  let t = [e.placeholder, e.getAttribute("aria-label"), e.getAttribute("title"), e.getAttribute("data-date-format"), e.getAttribute("data-format"), e.getAttribute("format")], r = e.id ? document.querySelector(`label[for="${CSS.escape(e.id)}"]`) : null;
  t.push(r?.textContent);
  let n = e.closest(".form-group.field, .calendar-widget");
  n && t.push(n.querySelector(".help-block, .description, .hint, .form-text, .text-muted, .control-label")?.textContent, n.textContent);
  let o2 = e.closest("fieldset[id]");
  if (o2) {
    let e2 = o2.querySelector("legend");
    t.push(e2?.textContent);
  }
  return t.filter((e2) => !!e2 && !!e2.trim());
}
function j(e) {
  for (let t of I(e)) {
    let e2 = F(t);
    if (e2) return e2;
  }
}
function D(e, t) {
  let r = j(e);
  if (t) {
    let e2 = !!t.querySelector(".react-datepicker__monthPicker") || !!t.querySelector(".react-datepicker__month-text"), n2 = !!t.querySelector(".range-select") || !!t.querySelector(".react-datepicker__year-select"), o2 = !!t.querySelector(".react-datepicker__year") || !!t.querySelector(".react-datepicker__year-text"), i2 = !!t.querySelector(".react-datepicker__day");
    return e2 && n2 && !i2 || e2 && !i2 ? "MM/YYYY" : i2 ? "MM/DD/YYYY" : (o2 || n2) && !e2 ? "YYYY" : r || "YYYY-MM-DD";
  }
  if (r) return r;
  let n = e.placeholder.trim().toLowerCase();
  return "date" === e.type || "yyyy-mm-dd" === n ? "YYYY-MM-DD" : T(e) ? "MM/DD/YYYY" : "YYYY-MM-DD";
}
async function P(e) {
  e.focus(), e.click();
  let t = await A(e), r = D(e, t);
  return k(e), await C(50), r;
}
function _(e) {
  return "date" === e.type || "yyyy-MM-dd" === e.placeholder || !!e.closest(".calendar-widget") || T(e);
}
function L(e) {
  return "combobox" === e.getAttribute("role") || "list" === e.getAttribute("aria-autocomplete") || "asyncTypeahead" === e.getAttribute("data-attribute") || "search" === e.type || !!e.closest(".async-typeahead-v3, .rbt");
}
function R(e, t, r) {
  let n = t.replace(/\s+/g, " ").trim().toLowerCase();
  return "careers.cisco.com" === e.trim().toLowerCase() && "educationData" === r && ["school", "school name", "school or university"].includes(n);
}
function O(e) {
  let t = e.id ? document.querySelector(`label[for="${CSS.escape(e.id)}"]`) : null;
  return f(t || e.closest("label") || e.parentElement);
}
function M(e) {
  let t = e.getAttribute("ischecked");
  if ("true" === t) return true;
  if ("false" === t) return false;
  let r = e.getAttribute("aria-checked");
  return "true" === r || "false" !== r && e.checked;
}
function N(e) {
  let t = Array.from(e.querySelectorAll('input[type="radio"]')).filter((t2) => d(t2) && t2.closest(".form-group.field") === e);
  if (0 === t.length) return null;
  let r = m(e);
  return { label: r, required: h(e), type: enums.FIELD_TYPE.RADIOGROUP, options: t.map((e2) => O(e2)).filter(Boolean), $label: e.querySelector("label.control-label, legend") || e, $input: t[0], $radioParent: e };
}
function $(e) {
  let t = Array.from(e.querySelectorAll('input[type="checkbox"]')).filter((t2) => d(t2) && t2.closest(".form-group.field") === e);
  if (0 === t.length) return null;
  let r = 1 === t.length ? ["Yes", "No"] : t.map((e2) => O(e2)).filter(Boolean);
  return { label: m(e), required: h(e), type: enums.FIELD_TYPE.CHECKBOX, options: r, $label: e.querySelector("label.control-label, legend") || e, $input: e.querySelector(".checkbox label, label") || e, $checkboxs: t };
}
function B(e) {
  let t = e.querySelector('.daterangepicker-checkbox input[type="checkbox"][id*="currentlyWorkHere"]');
  if (!t) return null;
  let r = t.closest(".daterangepicker-checkbox");
  if (!d(r || t)) return null;
  let n = (r?.querySelector(".checkboxText")?.textContent || r?.textContent || t.getAttribute("aria-label") || "I currently work here").replace(/\*/g, " ").replace(/\s+/g, " ").trim();
  return n ? { label: n, required: false, type: enums.FIELD_TYPE.CHECKBOX, options: ["Yes", "No"], $label: r || t, $input: r || t, $checkboxs: [t] } : null;
}
function q(e) {
  if (!e) return false;
  let t = e.getAttribute("ischecked");
  return "true" === t || "false" !== t && e.checked;
}
function U(e) {
  let t = E(e), r = t instanceof HTMLSelectElement ? t : null;
  return r && (d(r) || g(r, e)) ? { label: m(e), required: h(e), type: enums.FIELD_TYPE.SELECT, options: x(r), $label: e.querySelector("label.control-label, legend") || e, $input: r } : null;
}
async function H(e) {
  let t;
  let r = E(e), n = r instanceof HTMLTextAreaElement ? r : null;
  if (n && d(n)) return { label: m(e), required: h(e), type: enums.FIELD_TYPE.TEXT, $label: e.querySelector("label.control-label, legend") || e, $input: n };
  let i2 = r instanceof HTMLInputElement && "hidden" !== r.type && "radio" !== r.type && "checkbox" !== r.type ? r : null;
  if (!i2 || !d(i2)) return null;
  let a2 = m(e), l2 = enums.FIELD_TYPE.TEXT, s2 = L(i2), u2 = _(i2), c2 = R(window.location.hostname, a2, e.closest("fieldset#educationData")?.id);
  return u2 ? (l2 = enums.FIELD_TYPE.DATE, t = await P(i2)) : (s2 || c2) && (l2 = enums.FIELD_TYPE.SEARCH), { label: a2, required: h(e), type: l2, description: t, $label: e.querySelector("label.control-label, legend") || e, $input: i2 };
}
async function Y(e) {
  return N(e) || $(e) || U(e) || await H(e);
}
function z() {
  return document.querySelector(a);
}
function V(e) {
  let t = e === enums.FIELD_TYPE.EDUCATION ? "educationData" : "experienceData";
  return z()?.querySelector(`fieldset#${t}`) ?? null;
}
function W(e) {
  return "educationData" === e.id ? enums.FIELD_TYPE.EDUCATION : "experienceData" === e.id ? enums.FIELD_TYPE.EMPLOYMENT : null;
}
function G(e) {
  return Array.from(e.querySelectorAll(":scope > .row.array-item-list fieldset[id]")).filter((t) => {
    let r = e.id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return RegExp(`^${r}\\[\\d+\\]$`).test(t.id);
  });
}
function K(e) {
  return G(e)[0] ?? null;
}
function X(e) {
  for (let t of e) {
    let e2 = t.$input;
    if (e2 instanceof HTMLElement) return e2;
  }
}
function J(e) {
  return e?.replace(/\s+/g, " ").trim().toLowerCase() || "";
}
function Q() {
  let e = new URL(window.location.href), t = Number(e.searchParams.get("step") || "0");
  return { step: Number.isFinite(t) ? t : 0, stepName: J(e.searchParams.get("stepname") || ""), totalLength: 0 };
}
function Z(e = document) {
  let t = e.querySelector(".slick-list, .slick-track");
  if (!t) return null;
  let r = Array.from(t.querySelectorAll('li[role="button"]'));
  if (0 === r.length) return null;
  let n = r.find((e2) => "step" === e2.getAttribute("aria-current") || e2.classList.contains("progress-current") || e2.classList.contains("slick-current") || e2.classList.contains("active")) ?? null;
  if (!n) return null;
  let o2 = r.indexOf(n);
  if (o2 < 0) return null;
  let i2 = J(n.querySelector(".title")?.textContent || n.getAttribute("atm-value") || n.getAttribute("atm-id") || "");
  return { step: o2 + 1, stepName: i2, totalLength: r.length };
}
function ee() {
  let e = Z(), t = Q();
  return { step: e?.step && e.step > 0 ? e.step : t.step, stepName: e?.stepName || t.stepName, totalLength: e?.totalLength ?? t.totalLength };
}
function et(e = ee()) {
  let t = J(e.stepName);
  return e.step <= 1 || "personalinformation" === t || t.includes("personal") || t.includes("resume") || t.includes("user information") || t.includes("user info");
}
function er(e = document) {
  let t = ee(), r = J(t.stepName);
  return r.includes("review") || r.includes("submit") || !!e.querySelector(".summary-text, .summary-item, .summary-label, .summary-value");
}
async function en() {
  let e = z();
  if (!e || er(e)) return [];
  let t = [], r = Array.from(e.querySelectorAll(u)).filter((e2) => !e2.closest(`${u} ${u}`));
  for (let e2 of r) {
    let r2 = W(e2);
    if (!r2) continue;
    let n2 = await ei(e2, r2);
    n2 && t.push(n2);
  }
  let n = v(e);
  for (let e2 of n) {
    let r2 = S(e2);
    if (r2) {
      let t2 = W(r2);
      if (t2) continue;
      let n3 = K(r2);
      if (!n3 || !n3.contains(e2)) continue;
    }
    let n2 = await Y(e2);
    n2?.label && t.push(n2);
  }
  return t;
}
async function eo(e) {
  let t = v(e), r = [];
  for (let e2 of t) {
    let t2 = await Y(e2);
    t2?.label && r.push(t2);
  }
  let n = B(e);
  return n && !r.some((e2) => e2.type === enums.FIELD_TYPE.CHECKBOX && e2.label === n.label) && r.push(n), r;
}
async function ei(e, t) {
  let r = K(e);
  if (!r) return null;
  let n = await eo(r);
  if (0 === n.length) return null;
  let i2 = X(n);
  return { label: t === enums.FIELD_TYPE.EDUCATION ? "Education" : "Employment", required: true, type: t, ...i2 ? { $input: i2 } : {}, children: n, options: n.map((e2) => ({ label: e2.label, type: e2.type, ...Array.isArray(e2.options) && e2.options.length > 0 ? { options: e2.options } : {}, ...e2.description ? { description: e2.description } : {} })) };
}
async function ea(e) {
  let t = V(e);
  if (!t) return [];
  let r = [];
  for (let n of G(t)) {
    let t2 = await eo(n);
    if (0 === t2.length) continue;
    let i2 = X(t2);
    r.push({ label: e === enums.FIELD_TYPE.EDUCATION ? "Education" : "Employment", required: true, type: e, ...i2 ? { $input: i2 } : {}, children: t2, options: t2.map((e2) => ({ label: e2.label, type: e2.type, ...Array.isArray(e2.options) && e2.options.length > 0 ? { options: e2.options } : {}, ...e2.description ? { description: e2.description } : {} })) });
  }
  return r;
}
function el(e) {
  let t = m(e);
  if (!t) return null;
  let r = E(e, { includeDisabled: true }), n = r instanceof HTMLSelectElement ? r : null;
  if (n && (d(n) || g(n, e))) return { label: t, type: enums.FIELD_TYPE.SELECT, value: n.value, text: n.selectedOptions?.[0]?.textContent?.trim() || "" };
  let i2 = Array.from(e.querySelectorAll('input[type="radio"]')).filter((t2) => d(t2) && t2.closest(".form-group.field") === e);
  if (i2.length > 0) {
    let e2 = i2.find((e3) => e3.checked);
    return { label: t, type: enums.FIELD_TYPE.RADIOGROUP, value: e2?.value || "", text: e2 ? O(e2) : "" };
  }
  let a2 = Array.from(e.querySelectorAll('input[type="checkbox"]')).filter((t2) => d(t2) && t2.closest(".form-group.field") === e);
  if (a2.length > 0) return 1 === a2.length ? { label: t, type: enums.FIELD_TYPE.CHECKBOX, value: M(a2[0]) ? "Yes" : "No" } : { label: t, type: enums.FIELD_TYPE.CHECKBOX, value: a2.filter((e2) => M(e2)).map((e2) => O(e2)) };
  let l2 = r instanceof HTMLTextAreaElement ? r : null;
  if (l2 && d(l2)) return { label: t, type: enums.FIELD_TYPE.TEXT, value: l2.value };
  let s2 = r instanceof HTMLInputElement && "hidden" !== r.type && "radio" !== r.type && "checkbox" !== r.type ? r : null;
  return s2 && d(s2) ? { label: t, type: _(s2) ? enums.FIELD_TYPE.DATE : L(s2) ? enums.FIELD_TYPE.SEARCH : enums.FIELD_TYPE.TEXT, value: s2.value } : null;
}
function es() {
  let e = z(), t = !!e && er(e), r = e ? v(e, { includeDisabled: true }).filter((e2) => {
    let t2 = S(e2);
    if (!t2) return true;
    let r2 = W(t2);
    if (r2) return false;
    let n2 = K(t2);
    return !!n2 && n2.contains(e2);
  }).map((e2) => el(e2)).filter(Boolean) : [], n = e?.querySelector(s), i2 = ee(), a2 = em(enums.FIELD_TYPE.EDUCATION), l2 = em(enums.FIELD_TYPE.EMPLOYMENT);
  return { url: window.location.href, title: document.title, step: i2.step, stepName: i2.stepName, isTerminalPage: t, continueButtonText: n?.textContent?.trim() || n?.getAttribute("value") || "", fields: r, education: a2, employment: l2 };
}
function eu(e) {
  if (e.type === enums.FIELD_TYPE.SELECT && !String(e.value ?? "").trim()) return "";
  let t = "string" == typeof e.text ? e.text.trim() : "";
  if (t) return t;
  let r = e.value;
  return Array.isArray(r) ? r.map((e2) => String(e2 ?? "").trim()).filter(Boolean).join(", ") : "string" == typeof r ? r : null == r ? "" : String(r);
}
function ec(e) {
  let t = {};
  for (let r of e) {
    let e2 = "string" == typeof r?.label ? r.label.trim() : "";
    e2 && (t[e2] = eu(r));
  }
  return t;
}
function ed(e) {
  return v(e, { includeDisabled: true }).filter((e2) => {
    let t = S(e2);
    if (!t) return true;
    let r = W(t);
    if (r) return false;
    let n = K(t);
    return !!n && n.contains(e2);
  });
}
function ef(e) {
  let t = V(e);
  return t ? G(t).map((e2) => {
    let t2 = v(e2, { includeDisabled: true }).map((e3) => el(e3)), r = B(e2);
    if (r) {
      let e3 = r.$checkboxs?.[0];
      t2.push({ label: r.label, value: q(e3) ? "Yes" : "No" });
    }
    return ec(t2);
  }).filter((e2) => Object.keys(e2).length > 0) : [];
}
function ep() {
  let e = z();
  if (!e) return {};
  let t = { ...ec(ed(e).map((e2) => el(e2))) }, r = ef(enums.FIELD_TYPE.EDUCATION);
  r.length > 0 && (t.education = r);
  let n = ef(enums.FIELD_TYPE.EMPLOYMENT);
  return n.length > 0 && (t.employment = n), t;
}
function em(e) {
  let t = V(e);
  return t ? G(t).map((e2) => {
    let t2 = v(e2, { includeDisabled: true }).map((e3) => el(e3)).filter(Boolean), r = B(e2);
    if (r) {
      let e3 = r.$checkboxs?.[0];
      t2.push({ label: r.label, type: enums.FIELD_TYPE.CHECKBOX, value: q(e3) ? "Yes" : "No" });
    }
    return t2;
  }).filter((e2) => e2.length > 0) : [];
}
export {
  s as CONTINUE_BUTTON_SELECTOR,
  l as FIELD_CONTAINER_SELECTOR,
  a as FORM_SELECTOR,
  F as extractPhenomDateFormatFromText,
  en as extractRules,
  V as getArrayContainer,
  G as getCompositeItemFieldsets,
  ea as getCompositeRules,
  z as getFormRoot,
  es as getFormSnapshot,
  j as getPhenomDateDescriptionFromDom,
  c as getPhenomFillRequestUrl,
  p as getPreferredFieldLabel,
  ee as getStepInfo,
  ec as getTrackingFieldsSnapshot,
  ep as getTrackingFormSnapshot,
  D as inferDateFormatFromDatepicker,
  d as isActuallyVisible,
  et as isInitialApplicationStep,
  R as shouldTreatCiscoEducationSchoolAsSearch
};
