// @ts-nocheck
/**
 * SuccessFactors — form rule extraction and snapshot helpers.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as registrationCredentials from "./registration-credentials.ts"
let s = ".RCMFormField.rcmFormElement, .RCMFormField.rcmFormQuestionElement", u = "ui5-date-picker-xweb-calendar-widget", c = "div.container-fluid", d = "div.rcmFormSection.row", f = { [enums.FIELD_TYPE.EMPLOYMENT]: "Employment", [enums.FIELD_TYPE.EDUCATION]: "Education" };
function p(e) {
  return (e || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function m(e) {
  let t = e.querySelector(u);
  if (!t) return null;
  let r = t.shadowRoot?.querySelector("ui5-datetime-input-xweb-calendar-widget, ui5-input-xweb-calendar-widget"), n = r?.shadowRoot?.querySelector("input"), o2 = t.shadowRoot?.querySelector("input");
  return n || o2 || t;
}
function h(e) {
  let t = p(e);
  return t.includes("education") || t.includes("educational background");
}
function g(e) {
  let t = p(e);
  return t.includes("employ") || t.includes("experience") || t.includes("work history");
}
function b(e) {
  let t = p(e);
  return t.includes("course") || t.includes("workshop") || t.includes("seminar") || t.includes("certification") || t.includes("license") || t.includes("language skill");
}
function y() {
  let e = Array.from(document.querySelectorAll(c));
  return e.find((e2) => e2.querySelector(d)) || document.querySelector("form#careerform") || document.querySelector(c);
}
function v(e) {
  return Array.from(e.querySelectorAll(d));
}
function w(e) {
  return e.map((e2) => {
    let t = e2.querySelector(".rcmFormSectionTopBar")?.textContent || e2.querySelector("h2")?.textContent || e2.id || "";
    return t.replace(/\s+/g, " ").trim();
  }).filter(Boolean);
}
function S(e, t, r, n = r.length > 0) {
  return { type: e, label: t, required: n, children: r, options: r.map((e2) => ({ type: e2.type, label: e2.label, ...e2.options?.length ? { options: e2.options } : {} })) };
}
function E(e) {
  let t = f[e.type];
  return t ? { ...e, label: t } : e;
}
function prepareSuccessFactorsRulesForAnswer(e) {
  let t = [], r = false, n = false;
  for (let i2 of e) i2.type === enums.FIELD_TYPE.EMPLOYMENT ? r || (t.push(E(i2)), r = true) : i2.type === enums.FIELD_TYPE.EDUCATION ? n || (t.push(E(i2)), n = true) : t.push(i2);
  return t;
}
function C(e) {
  return e.type === enums.FIELD_TYPE.SECTION && b(e.label);
}
function A(e) {
  return (e || "").replace(/\u00a0/g, " ").replace(/\*/g, " ").replace(/\s*:\s*$/g, "").replace(/\s+/g, " ").trim();
}
function k(e) {
  if (!e || e.classList.contains("displayNone")) return false;
  let t = window.getComputedStyle(e);
  return "none" !== t.display && "hidden" !== t.visibility;
}
function T(e) {
  if (!e.classList.contains("attachmentField") && !e.querySelector(".attachmentComponentInput")) return null;
  let t = A(e.querySelector(".rcmFormFieldLabel")?.textContent), r = e.querySelector('[id$="_attachDownloadLabel"]'), n = r?.querySelector("a");
  if (!r || !k(r)) return "";
  let o2 = A(n?.textContent || r.textContent);
  if (!o2) return "";
  let i2 = "Upload a Resume", a2 = "Attach a Cover Letter";
  return "Resume / CV" === t && o2 === i2 || "Cover Letter" === t && o2 === a2 ? "" : o2;
}
async function extractRules() {
  let e = [], t = document.querySelector('div[class="profileUpperLayout"]');
  if (t) {
    let r = xpath.getOrderedNodesSafe(".//input", t), n = r;
    for (let t2 of n) {
      let r2 = await j(t2);
      r2 && e.push(r2);
    }
    let o2 = document.querySelector('div[class="profileLowerLayout yui-gd"]');
    if (o2) {
      let t2 = await $(o2);
      e.push(...t2);
    }
  } else {
    let t2 = document.querySelectorAll('table[role="presentation"], table#fieldsContainer'), r = y(), n = r ? v(r) : [], i2 = r;
    if (i2) {
      let t3 = n;
      console.info("[SuccessFactors][extractRules] type3 layout", JSON.stringify({ sectionCount: t3.length, sectionLabels: w(t3) }));
      let r2 = document.querySelector('a[role="button"][class="expandCollapseTxt"]');
      for (let n2 of (r2 && r2.click(), t3)) {
        let t4 = await D(n2);
        if (t4) {
          if (Array.isArray(t4)) e.push(...t4);
          else if (t4.type !== enums.FIELD_TYPE.SECTION || C(t4)) e.push(t4);
          else for (let r3 of t4.children) e.push(r3);
        }
      }
      console.info("[SuccessFactors][extractRules] type3 result", JSON.stringify({ ruleCount: e.length, ruleLabels: e.map((e2) => e2.label) }));
    }
    if (t2.length > 0) {
      let r2 = await I(t2);
      e.push(...r2);
      let n2 = document.querySelector('ol[id="questions"][class="questionsSection"]');
      if (n2) {
        let t3 = await R(n2);
        e.push(...t3);
      }
      console.info("[SuccessFactors][extractRules] legacy table result", JSON.stringify({ tableCount: t2.length, ruleCount: r2.length }));
    }
    i2 || 0 !== t2.length || console.info("[SuccessFactors][extractRules] no supported layout", JSON.stringify({ tableCount: t2.length, hasProfileUpperLayout: false, hasType3Container: false }));
  }
  return registrationCredentials.excludeSuccessFactorsRegistrationEmailRules(registrationCredentials.excludeSuccessFactorsRegistrationPasswordRules(e));
}
async function I(e) {
  let t = [], r = 0;
  for (let n of e) {
    if (n.querySelector(d)) {
      r++;
      continue;
    }
    let e2 = n.querySelectorAll("tr");
    for (let r2 of e2) {
      let e3 = await L(r2);
      e3 && t.push(e3);
    }
  }
  return console.info("[SuccessFactors][extractRules] legacy table scan", JSON.stringify({ tableCount: e.length, skippedType3Tables: r, ruleCount: t.length })), t;
}
async function j(e) {
  try {
    let t = null;
    t = e.querySelector("label");
    let r = e.previousElementSibling;
    for (; r; ) {
      if ("LABEL" === r.tagName) {
        t = r;
        break;
      }
      r = r.previousElementSibling;
    }
    if (!t) {
      let r2 = e.parentElement;
      for (; r2 && "candidate_profile" !== r2.id; ) {
        let e2 = r2.querySelector("label");
        if (e2) {
          t = e2;
          break;
        }
        r2 = r2.parentElement;
      }
    }
    if (!t) {
      let r2 = e.parentElement;
      for (; r2 && "candidate_profile" !== r2.id; ) {
        let e2 = r2.previousElementSibling;
        for (; e2; ) {
          if ("LABEL" === e2.tagName) {
            t = e2;
            break;
          }
          let r3 = e2.querySelector("label");
          if (r3) {
            t = r3;
            break;
          }
          e2 = e2.previousElementSibling;
        }
        if (t) break;
        r2 = r2.parentElement;
      }
    }
    if (!t) return null;
    let n = t.textContent?.trim() || "";
    if (!n) return null;
    n.startsWith("*") && (n = n.substring(1).trim());
    let i2 = t.querySelector('span[class*="required"]'), l2 = !!i2, s2 = e.querySelector('[role="radiogroup"]');
    if (s2) {
      let e2 = Array.from(s2.querySelectorAll(".radioLabel, label")).map((e3) => e3.textContent?.trim() || "").filter(Boolean);
      return { type: enums.FIELD_TYPE.RADIOGROUP, label: n, required: l2, options: e2, $radioParent: s2 };
    }
    let u2 = null;
    if (!(u2 = "INPUT" === e.tagName ? e : e.querySelector("input")) || "hidden" === u2.getAttribute("type")) {
      let t2 = m(e);
      if (t2) return { type: enums.FIELD_TYPE.TEXT, label: n, required: l2, $input: t2 };
    }
    if (!u2) return null;
    let c2 = (u2.getAttribute("type") || "text").toUpperCase(), d2 = u2.getAttribute("role") || "";
    if ("CHECKBOX" === c2) return { type: enums.FIELD_TYPE.CHECKBOX, label: n, required: l2, $input: u2 };
    if ("TEXT" === c2 && "combobox" === d2) {
      let e2 = u2.getAttribute("aria-owns") || "";
      if (!e2) return null;
      u2.click();
      let t2 = null, r2 = 0, i3 = 6;
      for (; !t2 && r2 < i3; ) await delay.delay(500), r2++, (t2 = document.getElementById(e2)) || (t2 = document.querySelector(`[id="${e2}"]`)), t2 || (t2 = document.querySelector(`[aria-owns="${e2}"]`));
      if (!t2) return { type: enums.FIELD_TYPE.SELECT, label: n, required: l2, $input: u2, options: [] };
      let s3 = await O(e2);
      return u2.blur(), await delay.delay(200), { type: enums.FIELD_TYPE.SELECT, label: n, required: l2, $input: u2, options: s3 };
    }
    if ("TEXT" === c2) return { type: enums.FIELD_TYPE.TEXT, label: n, required: l2, $input: u2 };
    return null;
  } catch (e2) {
    return console.error("[extractFieldRule] Error:", e2), null;
  }
}
async function D(e) {
  try {
    let t = xpath.getFirstOrderedNodeSafe('.//button[contains(@class, "rcmFormSectionTopBar")]', e), r = enums.FIELD_TYPE.TEXT, n = "";
    if (t && (n = t.textContent?.trim() || "", r = M(n)), r === enums.FIELD_TYPE.EDUCATION) {
      let t2 = await P(e, enums.FIELD_TYPE.EDUCATION, n);
      return t2.length ? t2 : [S(enums.FIELD_TYPE.EDUCATION, n, [], false)];
    }
    if (r !== enums.FIELD_TYPE.EMPLOYMENT) return await _(e, n);
    {
      let t2 = await P(e, enums.FIELD_TYPE.EMPLOYMENT, n);
      return t2.length ? t2 : [S(enums.FIELD_TYPE.EMPLOYMENT, n, [], false)];
    }
  } catch (e2) {
    return console.error("[extractFieldRuleType1] Error extracting field rule:", e2), null;
  }
}
async function P(e, t, r) {
  let n = [], i2 = r?.trim() || (t === enums.FIELD_TYPE.EDUCATION ? "Education" : "Experience"), a2 = e.querySelectorAll('div[class="row"]');
  for (let e2 of a2) {
    let r2 = [], o2 = e2.querySelectorAll(s);
    for (let e3 of o2) {
      let t2 = await j(e3);
      t2 && r2.push(t2);
    }
    r2.length > 0 && n.push(S(t, i2, r2, true));
  }
  return n;
}
async function _(e, t = "") {
  let r = [], n = e.querySelectorAll(s);
  for (let e2 of n) {
    let t2 = await j(e2);
    t2 && r.push(t2);
  }
  return r.length > 0 ? S(enums.FIELD_TYPE.SECTION, b(t) ? t : "General", r, false) : b(t) ? S(enums.FIELD_TYPE.SECTION, t, [], false) : null;
}
async function L(e) {
  try {
    let t = e.children;
    if (t.length < 2) return null;
    let r = t[0], n = r.querySelector("label");
    if (!n) return console.warn("[extractFieldRuleFromTableRow3] Label not found in first child"), null;
    let i2 = n.textContent?.trim().toLowerCase() || "", l2 = i2.replace(/\s+/g, " ").trim();
    if ("resume" === l2 || "resume/cv" === l2 || "resume / cv" === l2 || "coverletter" === l2 || "cover letter" === l2) return null;
    let s2 = "Required" === n.getAttribute("title"), u2 = t[1], c2 = null, d2 = u2.querySelector('ul[role="radiogroup"]');
    if (d2) {
      let e2 = [], t2 = d2.querySelectorAll("li");
      return t2.forEach((t3) => {
        let r2 = t3.querySelector("label");
        if (r2) {
          let t4 = r2.textContent?.trim();
          t4 && e2.push(t4);
        }
      }), { type: enums.FIELD_TYPE.RADIOGROUP, label: i2, required: s2, options: e2, $radioParent: d2 };
    }
    let f2 = u2.querySelector("select");
    if (f2) {
      let e2 = [], t2 = f2.querySelectorAll("option");
      return t2.forEach((t3) => {
        let r2 = t3.textContent?.trim() || t3.getAttribute("value") || "";
        r2 && e2.push(r2);
      }), { type: enums.FIELD_TYPE.SELECT, label: i2, required: s2, $input: f2, options: e2 };
    }
    if ((c2 = u2.querySelector("input")) || (c2 = u2.querySelector("textarea")), !c2 || "hidden" === c2.getAttribute("type")) {
      let e2 = m(u2);
      if (e2) return { type: enums.FIELD_TYPE.TEXT, label: i2, required: s2, $input: e2 };
      c2 && "hidden" === c2.getAttribute("type") && (c2 = c2.nextElementSibling);
    }
    if (!c2) return console.warn("[extractFieldRuleFromTableRowEnhanced] Input element not found in second child for:", i2), null;
    let p2 = (c2.getAttribute("type") || "text").toUpperCase(), h2 = c2.getAttribute("role") || c2.getAttribute("type") || "";
    if ("CHECKBOX" === p2) return { type: enums.FIELD_TYPE.CHECKBOX, label: i2, required: s2, $input: c2 };
    if ("TEXT" === p2 && "combobox" === h2) {
      let e2 = c2.getAttribute("aria-owns") || "";
      if (!e2) return null;
      c2.click();
      let t2 = null, r2 = 0, n2 = 6;
      for (; !t2 && r2 < n2; ) await delay.delay(500), r2++, (t2 = document.getElementById(e2)) || (t2 = document.querySelector(`[id="${e2}"]`)), t2 || (t2 = document.querySelector(`[aria-owns="${e2}"]`));
      if (!t2) return { type: enums.FIELD_TYPE.SELECT, label: i2, required: s2, $input: c2, options: [] };
      let l3 = await O(e2);
      return c2.blur(), await delay.delay(200), { type: enums.FIELD_TYPE.SELECT, label: i2, required: s2, $input: c2, options: l3 };
    }
    if ("TEXT" === p2) return { type: enums.FIELD_TYPE.TEXT, label: i2, required: s2, $input: c2 };
    return null;
  } catch (e2) {
    return console.error("[extractFieldRuleFromTableRowEnhanced] Error:", e2), null;
  }
}
async function R(e) {
  let t = [], r = e.querySelectorAll("li");
  for (let e2 of r) try {
    let r2 = e2.querySelector('span[class="questionFieldLabel"]');
    if (!r2) {
      console.warn("[extractRulesFromQuestionSelection] Label not found in item");
      continue;
    }
    let n = r2.textContent?.trim() || "";
    if (!n) {
      console.warn("[extractRulesFromQuestionSelection] Empty label text");
      continue;
    }
    let i2 = null !== r2.querySelector('span[class="required"]') || n.includes("*");
    n.startsWith("*") && (n = n.substring(1).trim());
    let a2 = e2.querySelectorAll('div[class="checkbox_column"]'), l2 = e2.querySelector('div[class="checkbox_column_wrapper "]');
    if (a2.length > 0 && l2) {
      let e3 = [];
      for (let t2 of a2) {
        let r3 = t2.querySelector("label")?.textContent?.trim();
        r3 && e3.push(r3);
      }
      t.push({ type: enums.FIELD_TYPE.RADIOGROUP, label: n, required: i2, options: e3, $radioParent: l2 });
      continue;
    }
    let s2 = e2.querySelector("textarea");
    if (s2) {
      t.push({ type: enums.FIELD_TYPE.TEXT, label: n, required: i2, $input: s2 });
      continue;
    }
    let u2 = Array.from(e2.querySelectorAll("input")).find((e3) => "hidden" !== e3.getAttribute("type"));
    if (u2) {
      t.push({ type: enums.FIELD_TYPE.TEXT, label: n, required: i2, $input: u2 });
      continue;
    }
    console.warn("[extractRulesFromQuestionSelection] No radio/textarea/input found for:", n);
  } catch (e3) {
    console.error("[extractRulesFromQuestionSelection] Error processing item:", e3);
  }
  return t;
}
async function O(e) {
  let t = [], r = "";
  if ("string" == typeof e ? r = e : e instanceof HTMLElement && (r = e.id || ""), !r) return t;
  let n = [], o2 = 0, l2 = 6;
  for (; 0 === n.length && o2 < l2; ) {
    let e2 = `//ul[@id="${r}"][@role="listbox"]`;
    0 === (n = xpath.getOrderedNodesSafe(e2, document)).length && (await delay.delay(500), o2++);
  }
  if (0 === n.length) return t;
  let s2 = n[0], u2 = s2.querySelectorAll("li");
  for (let e2 of u2) {
    let r2 = e2.querySelector("a");
    if (r2) {
      let e3 = r2.textContent?.trim();
      e3 && t.push(e3);
    }
  }
  return t;
}
function M(e) {
  let t = p(e);
  return h(t) ? enums.FIELD_TYPE.EDUCATION : g(t) ? enums.FIELD_TYPE.EMPLOYMENT : (t.includes("certification") || t.includes("license") || t.includes("language") || t.includes("relocate") || t.includes("information"), enums.FIELD_TYPE.SECTION);
}
async function N(e) {
  try {
    let t = e.querySelectorAll("td"), r = t[0], n = r.textContent?.trim() || "";
    if (!n) return null;
    n.startsWith("*") && (n = n.substring(1).trim());
    let i2 = r.querySelector('span[class="required"]'), l2 = !!i2, s2 = t[1], u2 = null;
    if ((u2 = s2.querySelector("input")) || (u2 = s2.querySelector("textarea")), !u2) {
      let e2 = m(s2);
      if (e2) return { type: enums.FIELD_TYPE.TEXT, label: n, required: l2, $input: e2 };
    }
    if (!u2) return console.warn("[extractFieldRuleFromTableRow] Input element not found in second td for:", n), null;
    let c2 = (u2.getAttribute("type") || "text").toUpperCase(), d2 = u2.getAttribute("role") || "";
    if ("CHECKBOX" === c2) return { type: enums.FIELD_TYPE.CHECKBOX, label: n, required: l2, $input: u2 };
    if ("TEXT" === c2 && "combobox" === d2) {
      let e2 = u2.getAttribute("aria-owns") || "";
      if (!e2) return null;
      u2.click();
      let t2 = null, r2 = 0, i3 = 6;
      for (; !t2 && r2 < i3; ) await delay.delay(500), r2++, (t2 = document.getElementById(e2)) || (t2 = document.querySelector(`[id="${e2}"]`)), t2 || (t2 = document.querySelector(`[aria-owns="${e2}"]`));
      if (!t2) return { type: enums.FIELD_TYPE.SELECT, label: n, required: l2, $input: u2, options: [] };
      let s3 = await O(e2);
      return u2.blur(), await delay.delay(200), { type: enums.FIELD_TYPE.SELECT, label: n, required: l2, $input: u2, options: s3 };
    }
    if ("TEXT" === c2) return { type: enums.FIELD_TYPE.TEXT, label: n, required: l2, $input: u2 };
    return null;
  } catch (e2) {
    return console.warn("[extractFieldRuleFromTableRow] Error:", e2), null;
  }
}
async function $(e) {
  let t = [], r = e.querySelectorAll('div[class="sfCollapse fd-panel fd-panel--compact"]');
  for (let e2 of r) {
    let r2 = e2.getAttribute("aria-label") || "", n = e2.querySelectorAll('table[role="presentation"][class="axial"]');
    for (let e3 of n) {
      let n2 = e3.querySelectorAll("tr"), o2 = [];
      for (let e4 of n2) {
        let t2 = await N(e4);
        t2 && o2.push(t2);
      }
      if (o2.length > 0) {
        if (r2.toLowerCase().includes("more information")) t.push(...o2);
        else {
          let e4 = M(r2), n3 = { label: r2, required: true, type: e4, children: o2, options: o2.map((e5) => ({ type: e5.type, label: e5.label, ...e5.options?.length ? { options: e5.options } : {} })) };
          t.push(n3);
        }
      }
    }
  }
  return t;
}
function B(e) {
  let t = {}, r = e.querySelectorAll('div[class="sfCollapse fd-panel fd-panel--compact"]');
  for (let e2 of r) {
    let r2 = e2.getAttribute("aria-label") || "", n = r2.toLowerCase();
    h(n) ? t.education = Y(e2) : g(n) && (t.employment = Y(e2));
  }
  return t;
}
function q(e) {
  let t = {}, r = v(e);
  for (let e2 of r) {
    let r2 = e2.querySelector('button[class*="rcmFormSectionTopBar"]');
    if (!r2) continue;
    let n = r2.textContent?.trim().toLowerCase() || "", o2 = [], i2 = e2.querySelectorAll('div[class="row"]');
    for (let e3 of i2) {
      let t2 = {}, r3 = e3.querySelectorAll(s);
      for (let e4 of r3) {
        let r4 = e4.querySelector("label");
        if (!r4) continue;
        let n2 = r4.textContent?.trim() || "";
        if (n2.startsWith("*") && (n2 = n2.substring(1).trim()), !n2) continue;
        let o3 = e4.querySelector('[role="radiogroup"]');
        if (o3) {
          let e5 = o3.querySelector('[role="radio"][aria-checked="true"]'), r5 = e5?.closest(".globalRadio");
          t2[n2] = r5?.querySelector(".radioLabel")?.textContent?.trim() || "";
          continue;
        }
        let i3 = e4.querySelector("input, textarea, select");
        if (!i3) continue;
        let a2 = "";
        i3 instanceof HTMLInputElement && "checkbox" === i3.type ? a2 = i3.checked : (HTMLSelectElement, a2 = i3.value || ""), t2[n2] = a2;
      }
      Object.keys(t2).length > 0 && o2.push(t2);
    }
    h(n) ? t.education = o2 : g(n) && (t.employment = o2);
  }
  return t;
}
function getAdditionalFormSnapshotData() {
  let e = document.querySelector('div[class="profileUpperLayout"]'), t = document.querySelector('div[class="profileLowerLayout yui-gd"]');
  if (e && t) return B(t);
  let r = y();
  return r ? q(r) : {};
}
function getFormSnapshot() {
  let e = {}, t = registrationCredentials.getSuccessFactorsRegistrationPasswordInputs(), r = document.querySelector('div[class="profileUpperLayout"]'), n = document.querySelector('div[class="profileLowerLayout yui-gd"]');
  if (r && n) {
    let o3 = r.querySelectorAll("label");
    for (let r2 of o3) {
      let n2 = r2.textContent?.trim() || "";
      if (!n2) continue;
      let o4 = r2.parentElement;
      if (!o4) continue;
      let i4 = o4.nextElementSibling;
      if (!i4) continue;
      let a3 = i4.querySelector("input");
      if (a3) {
        if (t.has(a3)) continue;
        e[n2] = "checkbox" === a3.type ? a3.checked : a3.value || "";
      }
    }
    let i3 = r.querySelectorAll(".RCMFormField.attachmentField");
    for (let t2 of i3) {
      let r2 = A(t2.querySelector(".rcmFormFieldLabel")?.textContent);
      r2 && (e[r2] = T(t2) ?? "");
    }
    let a2 = n.querySelectorAll('div[class="sfCollapse fd-panel fd-panel--compact"]');
    for (let t2 of a2) {
      let r2 = t2.getAttribute("aria-label") || "", n2 = r2.toLowerCase();
      !(n2.includes("education") || n2.includes("work experience") || n2.includes("employment")) && r2 && (e[r2] = Y(t2));
    }
    return e;
  }
  let o2 = document.querySelectorAll('table[role="presentation"], table#fieldsContainer');
  if (o2.length > 0) {
    for (let r3 of o2) {
      let n2 = r3.querySelectorAll("tr");
      for (let r4 of n2) {
        let n3 = r4.children;
        if (n3.length < 2) continue;
        let o3 = n3[0], i3 = o3.querySelector("label");
        if (!i3) continue;
        let a2 = i3.textContent?.trim() || "";
        if (a2.startsWith("*") && (a2 = a2.substring(1).trim()), !a2) continue;
        let l2 = n3[1], s2 = T(l2);
        if (null !== s2) {
          e[a2] = s2;
          continue;
        }
        let u2 = "", c2 = l2.querySelector('ul[role="radiogroup"]');
        if (c2) {
          let e2 = c2.querySelector('input[type="radio"]:checked');
          if (e2) {
            let t2 = e2.nextElementSibling;
            u2 = t2?.textContent?.trim() || "";
          }
        } else {
          let e2 = l2.querySelector("ui5-date-picker-xweb-calendar-widget");
          if (e2?.shadowRoot) {
            let t2 = e2.shadowRoot.querySelector("ui5-input-xweb-calendar-widget");
            if (t2?.shadowRoot) {
              let e3 = t2.shadowRoot.querySelector("input");
              e3 && (u2 = e3.value || "");
            }
          } else {
            let e3 = l2.querySelector("input, textarea");
            if (e3) {
              if (t.has(e3)) continue;
              u2 = "checkbox" === e3.type ? e3.checked : e3.value || "";
            }
          }
        }
        e[a2] = u2;
      }
    }
    let r2 = document.querySelector('ol[id="questions"][class="questionsSection"]');
    if (r2) {
      let t2 = r2.querySelectorAll("li");
      for (let r3 of t2) {
        let t3 = r3.querySelector('span[class="questionFieldLabel"]');
        if (!t3) continue;
        let n2 = t3.textContent?.trim() || "";
        if (n2.startsWith("*") && (n2 = n2.substring(1).trim()), !n2) continue;
        let o3 = r3.querySelectorAll('div[class="checkbox_column"]'), i3 = r3.querySelector('div[class="checkbox_column_wrapper "]');
        if (o3.length > 0 && i3) {
          let t4 = r3.querySelector('input[type="radio"]:checked');
          if (t4) {
            let r4 = t4.closest('div[class="checkbox_column"]'), o4 = r4?.querySelector("label") ?? t4.nextElementSibling;
            e[n2] = o4?.textContent?.trim() || "";
          }
          continue;
        }
        let a2 = r3.querySelector("textarea");
        if (a2) {
          e[n2] = a2.value || "";
          continue;
        }
        let l2 = Array.from(r3.querySelectorAll("input")).find((e2) => "hidden" !== e2.getAttribute("type"));
        l2 && (e[n2] = "checkbox" === l2.type ? l2.checked : l2.value || "");
      }
    }
    return e;
  }
  let i2 = y();
  if (i2) {
    let t2 = v(i2);
    for (let r2 of t2) {
      let t3 = r2.querySelector('button[class*="rcmFormSectionTopBar"]');
      if (t3) {
        let e2 = t3.textContent?.trim().toLowerCase() || "";
        if (e2.includes("education") || e2.includes("employ") || e2.includes("experience")) continue;
      }
      let n2 = r2.querySelectorAll(".RCMFormField");
      for (let t4 of n2) {
        let r3 = t4.querySelector("label");
        if (!r3) continue;
        let n3 = r3.textContent?.trim() || "";
        if (n3.startsWith("*") && (n3 = n3.substring(1).trim()), !n3) continue;
        let o3 = T(t4);
        if (null !== o3) {
          e[n3] = o3;
          continue;
        }
        let i3 = t4.querySelector('[role="radiogroup"]');
        if (i3) {
          let t5 = i3.querySelector('[role="radio"][aria-checked="true"]'), r4 = t5?.closest(".globalRadio");
          e[n3] = r4?.querySelector(".radioLabel")?.textContent?.trim() || "";
          continue;
        }
        let a2 = t4.querySelector("input, textarea, select");
        if (!a2) continue;
        let l2 = "";
        a2 instanceof HTMLInputElement && "checkbox" === a2.type ? l2 = a2.checked : (HTMLSelectElement, l2 = a2.value || ""), e[n3] = l2;
      }
    }
  }
  return e;
}
function Y(e) {
  let t = [], r = e.querySelectorAll('table[role="presentation"]');
  for (let e2 of r) {
    let r2 = {}, n = e2.querySelectorAll("tr");
    for (let e3 of n) {
      let t2 = e3.querySelectorAll("td");
      if (t2.length < 2) continue;
      let n2 = t2[0], o2 = n2.textContent?.trim() || "";
      if (o2.startsWith("*") && (o2 = o2.substring(1).trim()), !o2) continue;
      let i2 = t2[1], a2 = "", l2 = i2.querySelector("ui5-date-picker-xweb-calendar-widget");
      if (l2?.shadowRoot) {
        let e4 = l2.shadowRoot.querySelector("ui5-input-xweb-calendar-widget");
        if (e4?.shadowRoot) {
          let t3 = e4.shadowRoot.querySelector("input");
          t3 && (a2 = t3.value || "");
        }
      } else {
        let e4 = i2.querySelector("input, textarea");
        e4 && (a2 = "checkbox" === e4.type ? e4.checked : e4.value || "");
      }
      if (!a2) {
        let e4 = i2.querySelector("[title]");
        e4 && (a2 = e4.getAttribute("title") || "");
      }
      r2[o2] = a2;
    }
    Object.keys(r2).length > 0 && t.push(r2);
  }
  return t;
}

export {
  extractRules,
  getAdditionalFormSnapshotData,
  getFormSnapshot,
  prepareSuccessFactorsRulesForAnswer,
}
