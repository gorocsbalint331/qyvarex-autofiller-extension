// @ts-nocheck
/**
 * RippleHire form rules — readable TypeScript source of truth.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as phoneCountryCode from "./phone-country-code.ts"
let l = "Please return the expected salary amount as a number in USD. Do not include currency symbols, commas, or units.";
function extractRules() {
  let e = [], t = xpath.getOrderedNodesSafe('.//div[contains(@class, "form-group") and not(contains(@class, "hide"))]', document.body);
  for (let r of t) {
    let t2 = p(r);
    if (t2) for (let r2 of Array.isArray(t2) ? t2 : [t2]) e.push(...u(r2));
  }
  return e;
}
function getRipplehirePhoneRules(e) {
  if (e.type !== enums.FIELD_TYPE.TEXT) return [e];
  let t = e.$input, r = t?.closest?.(".intl-tel-input"), n = r?.querySelector(".selected-flag");
  if (!r || !n) return [e];
  let i2 = Array.from(r.querySelectorAll("li.country")).map(phoneCountryCode.parseRipplehirePhoneCountryOption).map(phoneCountryCode.formatRipplehirePhoneCountryOption).filter(Boolean).filter((e2, t2, r2) => r2.indexOf(e2) === t2), l2 = { ...e, description: phoneCountryCode.RIPPLEHIRE_PHONE_WITH_COUNTRY_CODE_DESCRIPTION }, s2 = { type: enums.FIELD_TYPE.SELECT, label: phoneCountryCode.RIPPLEHIRE_PHONE_COUNTRY_CODE_LABEL, required: e.required, options: i2, $input: t, $label: e.$label };
  return [l2, s2];
}
function c(e) {
  return Array.from(e.options).filter((e2) => e2.value && "blank" !== e2.value).map((e2) => e2.textContent?.trim() || "");
}
function deriveExperienceSelectSuffix(e) {
  let t = (e.options[0]?.textContent || "").toLowerCase(), r = `${e.id} ${e.name}`.toLowerCase();
  return /year/.test(t) || /year/.test(r) ? "Years" : /month/.test(t) || /month/.test(r) ? "Months" : "";
}
function buildExperienceSelectRules(e, t, r, n) {
  if (e.length < 2) return null;
  let [i2, ...a2] = e, l2 = a2.map(d);
  if (l2.some((e2) => !e2)) return null;
  let s2 = (e2, t2) => ({ type: enums.FIELD_TYPE.SELECT, label: t2, required: r, $input: e2, $label: n, options: c(e2) });
  return [s2(i2, t), ...a2.map((e2, r2) => s2(e2, `${t} (${l2[r2]})`))];
}
function getRule(e) {
  let t = xpath.getFirstOrderedNodeSafe(".//label[@for]", e), r = t?.textContent?.replace(":", "").trim() || "", n = e.classList.contains("required") || false, a2 = e.querySelector("input#secondarySkills[name=secondarySkills]"), s2 = e.querySelector("#token-input-secondarySkills"), u2 = e.querySelector("ul.token-input-list-facebook");
  if (a2 && s2 && u2) {
    let t2 = e.querySelector("label"), r2 = t2?.textContent?.replace(":", "").trim() || "Skills";
    return { type: enums.FIELD_TYPE.MULTI_SELECT, label: r2, required: n, $input: a2, $label: t2, options: [] };
  }
  if ("" === r.trim()) return null;
  if (w(r)) {
    let i2 = S(e);
    if (i2) return { type: enums.FIELD_TYPE.TEXT, label: r, required: n, description: l, $input: i2, $label: t };
  }
  let d2 = e.querySelector("#multi-select");
  if (d2) return { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $input: e, $label: t };
  let p2 = xpath.getOrderedNodesSafe(".//input[@type='radio']", e);
  if (p2.length > 0) {
    let a3 = p2.map((t2) => {
      let r2 = xpath.getFirstOrderedNodeSafe(`.//label[@for="${t2.id}"]`, e);
      return r2 && r2.textContent?.trim() || t2.value;
    });
    return { type: enums.FIELD_TYPE.RADIOGROUP, label: r, required: n, $input: p2[0], $label: t, $radioParent: e, options: a3 };
  }
  let m2 = xpath.getOrderedNodesSafe(".//select", e);
  if (m2.length > 0) {
    let e2 = f(m2, r, n, t);
    if (e2) return e2;
    let i2 = m2[0];
    return { type: enums.FIELD_TYPE.SELECT, label: r, required: n, $input: i2, $label: t, options: c(i2) };
  }
  let h2 = xpath.getOrderedNodesSafe(".//input[@type='checkbox']", e);
  if (h2.length > 0) {
    let a3 = h2.map((t2) => {
      let r2 = t2.id && xpath.getFirstOrderedNodeSafe(`.//label[@for="${t2.id}"]`, e);
      if (r2) return r2.textContent?.trim() || t2.value;
      let n2 = t2.closest("label");
      return n2 && n2.textContent?.replace(/\s+/g, " ").trim() || t2.value;
    });
    return a3[0].includes("I have clicked") ? null : { type: enums.FIELD_TYPE.CHECKBOX, label: r, required: n, $checkboxs: h2, $input: h2[0], $label: t, options: a3 };
  }
  let g2 = xpath.getFirstOrderedNodeSafe(".//textarea", e);
  if (g2) return { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $input: g2, $label: t };
  let b2 = xpath.getFirstOrderedNodeSafe(".//input[@type='text'] | .//input[@type='email'] | .//input[@type='tel']", e);
  return b2 ? { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $input: b2, $label: t } : null;
}
function m(e) {
  return (e || "").replace(/\s+/g, " ").trim();
}
function h(e, t) {
  if (t.id) {
    let r = e?.querySelector?.(`label[for="${t.id}"]`), n = m(r?.textContent);
    if (n) return n;
  }
  return m(t.value);
}
function g(e) {
  if (e.label === phoneCountryCode.RIPPLEHIRE_PHONE_COUNTRY_CODE_LABEL) return m(phoneCountryCode.readRipplehirePhoneCountryCode(e.$input));
  if (e.type === enums.FIELD_TYPE.SELECT) {
    let t2 = e.$input;
    return m(t2.selectedOptions?.[0]?.textContent || t2.value);
  }
  if (e.type === enums.FIELD_TYPE.RADIOGROUP) {
    let t2 = e.$radioParent?.querySelector('input[type="radio"]:checked');
    return t2 ? h(e.$radioParent, t2) : "";
  }
  if (e.type === enums.FIELD_TYPE.CHECKBOX) return (e.$checkboxs || []).map((t2, r2) => t2.checked ? m(e.options?.[r2]) || h(t2.closest(".form-group"), t2) : "").filter(Boolean).join(", ");
  if (e.type === enums.FIELD_TYPE.MULTI_SELECT) return b(e.$input);
  let t = e.$input;
  if ("string" == typeof t?.value) return m(t.value);
  let r = t?.querySelector?.(".multiselect-selected-text, button.multiselect")?.textContent;
  return m(r);
}
function getRipplehireCommittedTokenLabels(e) {
  let t = e.ownerDocument, r = "undefined" != typeof document ? document : null, n = t || r, o2 = e;
  if (n) {
    if (!e.id) return "";
    try {
      let t2 = Array.from(n.querySelectorAll("input")).filter((t3) => t3.id === e.id);
      if (1 !== t2.length) return "";
      o2 = t2[0];
    } catch {
      return "";
    }
  }
  let i2 = o2.closest?.(".form-group") || o2.parentElement, a2 = i2?.querySelectorAll?.("li.token-input-token-facebook > p");
  return a2 ? Array.from(a2).map((e2) => m(e2.textContent)).filter(Boolean).join(", ") : "";
}
function getFormSnapshotFromRules(e) {
  return Object.fromEntries(e.map((e2) => {
    try {
      return [e2.label, g(e2)];
    } catch (t) {
      return console.warn(`[RippleHire] Failed to read submit snapshot field: ${e2.label}`, t), [e2.label, ""];
    }
  }));
}
function getFormSnapshot(e) {
  try {
    return y(e || s());
  } catch (e2) {
    return console.warn("[RippleHire] Failed to capture submit snapshot", e2), {};
  }
}
function w(e) {
  let t = e.replace(/\s+/g, " ").trim().toLowerCase();
  return "expected salary" === t || "expected ctc" === t;
}
function S(e) {
  let t = e.querySelector("input#expectedCTC, input[name='expectedCTC']");
  return t || xpath.getFirstOrderedNodeSafe(".//input[@type='text'] | .//input[@type='email'] | .//input[@type='tel']", e);
}

export {
  buildExperienceSelectRules,
  deriveExperienceSelectSuffix,
  extractRules,
  getFormSnapshot,
  getFormSnapshotFromRules,
  getRipplehireCommittedTokenLabels,
  getRipplehirePhoneRules,
  getRule,
}
