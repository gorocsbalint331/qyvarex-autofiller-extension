// @ts-nocheck
/**
 * Ultipro / UKG — form rule extraction and snapshots.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
let ULTIPRO_DESCRIPTION_FIELD_HINT =
  "Return this description in English. Keep it within 2000 characters and do not exceed 2000 characters."
let l = "Level of Education / Degree"
let s = "degreeOptions"
function u(e) {
  let t = e.getAttribute("data-bind") || "", r = t.match(/\btypeahead\s*:\s*\{[\s\S]*?\bsource\s*:\s*(?:[\w$]+(?:\[[^\]]+\])?\.)*([A-Za-z_$][\w$]*)/);
  return r?.[1] || "";
}
function extractUltiproTypeaheadOptions(e, t = document.scripts) {
  if (u(e) !== s) return [];
  let r = RegExp(`\\isUltiproReviewCopyLayout(?:var|let|const)\\s+${s}\\s*=\\s*(\\[[\\s\\S]*?\\])\\s*;`);
  for (let e2 of t) {
    let t2 = e2.textContent || "", n = t2.match(r)?.[1];
    if (n) try {
      let e3 = JSON.parse(n);
      return Array.from(new Set(e3.map((e4) => "string" == typeof e4?.Name ? e4.Name.trim() : "").filter(Boolean)));
    } catch {
      console.warn("[Ultipro][DegreeTypeahead] could not parse static options");
      break;
    }
  }
  return [];
}
function d(e, t) {
  return e === l && "combobox" === t.getAttribute("role") && "list" === t.getAttribute("aria-autocomplete") && u(t) === s;
}
async function extractRules(e = {}) {
  let t = [], r = [], n = [], o2 = [];
  try {
    await e.beforeContactInformationExtraction?.();
    let i3 = await p();
    t.push(...i3), r = await M(), n = await R(), o2 = await O(), console.info(`[Ultipro][Questions] captured before Contact Information cancel; contact=${i3.length}; country=${r.length}; general=${n.length}; application=${o2.length}`);
  } finally {
    await e.afterQuestionExtraction?.();
  }
  let i2 = await x();
  t.push(...i2);
  let a2 = await C();
  t.push(...a2);
  let l2 = await I();
  t.push(...l2);
  let s2 = await D();
  t.push(...s2);
  let u2 = await P();
  t.push(...u2);
  let c2 = await _();
  t.push(...c2);
  let d2 = await L();
  return t.push(...d2), t.push(...n), t.push(...o2), t.push(...r), t;
}
async function p() {
  let e = [], t = ["WorkExperienceSection", "EducationSection", "CandidateSkills", "CandidateBehaviors", "CandidateMotivations", "LicensesAndCertificationsSection", "CandidateLinkEdit", "Questions", "ApplicationQuestions", "CountryQuestions"], r = t.map((e2) => `not(ancestor::*[@id='${e2}'])`).join(" and "), n = xpath.getOrderedNodes(`//div[
(contains(@class, 'col-md-24') and @data-bind='configurableVisibility: $parent.willingToRelocateConfig')
or ((contains(@class, 'col-md-8') or contains(@class, 'col-md-16')) and ${r})
]`);
  for (let t2 of n) {
    if (isElementHidden(t2)) continue;
    let r2 = t2.querySelectorAll("input, select, textarea");
    if (0 === r2.length) continue;
    let n2 = Array.from(r2).some((e2) => T(e2));
    if (n2) {
      let r3 = m(t2);
      r3 && e.push(r3);
    }
  }
  return e;
}
function m(e) {
  if (isElementHidden(e)) return null;
  let t = e.querySelector("label");
  if (!t) return null;
  let r = t.textContent?.trim() || "";
  if (!r) return null;
  let n = t.classList.contains("required"), i2 = t.getAttribute("for") || "", a2 = F(e, i2 ? `select#${CSS.escape(i2)}` : "select");
  if (a2) {
    let e2 = Array.from(a2.querySelectorAll("option")).slice(1).map((e3) => e3.textContent?.trim()).filter((e3) => !!e3);
    return { type: enums.FIELD_TYPE.SELECT, label: r, required: n, $label: t, options: e2, $input: a2 };
  }
  let l2 = F(e, i2 ? `input[type='checkbox']#${CSS.escape(i2)}` : "input[type='checkbox']");
  if (l2) return { type: enums.FIELD_TYPE.CHECKBOX, label: r, required: n, $label: t, $input: l2 };
  let s2 = F(e, i2 ? `input#${CSS.escape(i2)}, textarea#${CSS.escape(i2)}` : "input[type='text'], textarea");
  return s2 ? { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $label: t, $input: s2 } : null;
}
let h = { education: ["#EducationSection", "[data-automation='education-section']"], employment: ["#WorkExperienceSection", "[data-automation='work-experience-section']"] };
function getUltiproVisibleSection(e) {
  for (let t of h[e]) {
    let e2 = Array.from(document.querySelectorAll(t)).find((e3) => !isElementHidden(e3));
    if (e2) return e2;
  }
  return null;
}
function isUltiproReviewCopyLayout(e) {
  return !e.querySelector("ul.listtype");
}
function getUltiproSectionEditors(e) {
  let t = Array.from(e.querySelectorAll('ul.listtype > li[data-automation="panel-list-item"]'));
  if (t.length > 0) return t;
  let r = Array.from(e.querySelectorAll("[data-automation='work-experience-item'], [data-automation='education-panel'], [data-automation='panel-list-item']")).filter((t2) => t2 !== e).map((e2) => e2.closest("[data-automation='panel-list-item']") ?? e2);
  return Array.from(new Set(r));
}
function getUltiproSectionEditor(e, t = []) {
  let r = getUltiproSectionEditors(e);
  return t.length > 0 ? r.find((e2) => !t.includes(e2)) ?? null : r[0] ?? null;
}
function w(e) {
  return e.querySelector("button[data-automation='primary-action-button']");
}
async function S(e, t, r) {
  let n = (e2) => e2.filter((e3) => !isElementHidden(e3)).map(A).filter((e3) => !!e3);
  if (isUltiproReviewCopyLayout(e)) return n(Array.from(e.querySelectorAll("div.form-group")).filter((e2) => !e2.querySelector("div.form-group")));
  t.click(), await new Promise((e2) => setTimeout(e2, 200));
  let o2 = n(xpath.getOrderedNodes(r)), a2 = e.querySelector("button[data-automation='cancel-button']");
  return a2 && (a2.click(), await new Promise((e2) => setTimeout(e2, 200))), o2;
}
async function E(e, t, r, n) {
  let o2 = getUltiproVisibleSection(e);
  if (!o2) return [];
  let i2 = w(o2);
  if (!i2) return [];
  let a2 = await S(o2, i2, n), l2 = { label: t, type: r, required: true, $input: i2, children: a2, options: a2.map((e2) => {
    let t2 = { type: e2.type, label: e2.label };
    return e2.options && e2.options.length > 0 && (t2.options = e2.options), e2.description && (t2.description = e2.description), t2;
  }) };
  return [l2];
}
function x() {
  return E("employment", "Employment", enums.FIELD_TYPE.EMPLOYMENT, "//*[@id='WorkExperienceSection']//*[@data-automation='work-experience-item']//div[contains(@class, 'col-md-12') or contains(@class, 'col-md-24')][not(ancestor::div[contains(@class, 'collapse') and @aria-expanded='false'])]");
}
function C() {
  return E("education", "Education", enums.FIELD_TYPE.EDUCATION, "//*[@data-automation='education-panel']//div[contains(@class, 'col-md-12') or contains(@class, 'col-md-24')]");
}
function extractExpAndEduRuleFromElement(e) {
  let t = e.querySelector("label");
  if (!t) return null;
  let r = t.textContent?.trim() || "";
  if (!r) return null;
  let n = t.classList.contains("required"), i2 = e.querySelector("select"), l2 = e.querySelector("input[type='text']");
  if (i2 && l2 && ("To" === r || "From" === r)) {
    let i3 = "Month Year(YYYY)";
    return { type: enums.FIELD_TYPE.DATE, label: r, required: n, $label: t, $input: e, description: i3 };
  }
  if (i2 && !i2.disabled) {
    let e2 = Array.from(i2.querySelectorAll("option")).slice(1).map((e3) => e3.textContent?.trim()).filter((e3) => !!e3);
    return { type: enums.FIELD_TYPE.SELECT, label: r, required: n, $label: t, options: e2, $input: i2 };
  }
  let s2 = e.querySelector("ukg-date-input-text");
  if (s2) return { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $label: t, $input: s2 };
  let u2 = e.querySelector("input[type='text'], textarea");
  if (u2 && !u2.readOnly && !u2.disabled) {
    if ("INPUT" === u2.tagName && d(r, u2)) {
      let e3 = extractUltiproTypeaheadOptions(u2);
      return e3.length > 0 ? console.info("[Ultipro][DegreeTypeahead] captured static candidates", { optionCount: e3.length }) : console.warn("[Ultipro][DegreeTypeahead] static candidate catalog was unavailable"), { type: enums.FIELD_TYPE.SELECT, label: r, required: n, $label: t, $input: u2, options: e3, optionsMode: "complete" };
    }
    let e2 = "Description" === r ? ULTIPRO_DESCRIPTION_FIELD_HINT : void 0;
    return { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $label: t, $input: u2, ...e2 ? { description: e2 } : {} };
  }
  return null;
}
function isElementHidden(e) {
  if ("none" === e.style.display || e.classList.contains("collapse") && !e.classList.contains("in")) return true;
  let t = e.closest("[style*='display: none'], .collapse:not(.in)");
  return !!t;
}
function T(e) {
  if (isElementHidden(e)) return false;
  if (e instanceof HTMLInputElement && ("checkbox" === e.type || "radio" === e.type)) return !e.disabled;
  let t = e, r = e.hasAttribute("readonly") && ("readonly" === e.getAttribute("readonly") || "true" === e.getAttribute("readonly"));
  return !r && !t.disabled;
}
function F(e, t) {
  return Array.from(e.querySelectorAll(t)).find((e2) => T(e2)) ?? null;
}
async function I() {
  let e = document.querySelector("#CandidateSkills");
  if (!e) return [];
  let t = e.querySelector("div[class='panel-heading']"), r = e.querySelector("button[data-automation='primary-action-button']");
  if (!r) return [];
  let n = e.querySelector("input");
  if (!n) return [];
  let i2 = { label: "Skills", type: enums.FIELD_TYPE.TEXT, required: false, $label: t, $input: n };
  return [i2];
}
async function j(e, t) {
  let r = false, n = e.querySelector("select");
  n || !t || t.disabled || (t.click(), r = true, await new Promise((e2) => setTimeout(e2, 300)), n = e.querySelector("select"));
  let o2 = n ? Array.from(n.querySelectorAll("option")).map((e2) => e2.textContent?.trim()).filter((e2) => !!e2) : [];
  if (r) {
    let t2 = e.querySelector("button[data-automation='cancel-button']");
    t2 && (t2.click(), await new Promise((e2) => setTimeout(e2, 300)));
  }
  return o2;
}
async function D() {
  let e = document.querySelector("#CandidateBehaviors");
  if (!e) return [];
  let t = e.querySelector("button[data-automation='primary-action-button']");
  if (!t) return [];
  let r = e.querySelector("div[class='panel-heading']"), n = await j(e, t), i2 = { label: "Behaviors", type: enums.FIELD_TYPE.MULTI_SELECT, required: false, $label: r, $input: e, options: n };
  return [i2];
}
async function P() {
  let e = document.querySelector("#CandidateMotivations");
  if (!e) return [];
  let t = e.querySelector("button[data-automation='primary-action-button']");
  if (!t) return [];
  let r = e.querySelector("div[class='panel-heading']"), n = await j(e, t), i2 = { label: "Motivations", type: enums.FIELD_TYPE.MULTI_SELECT, required: false, $input: e, $label: r, options: n };
  return [i2];
}
async function _() {
  let e = document.querySelector("#LicensesAndCertificationsSection");
  if (!e || isElementHidden(e)) return [];
  let t = xpath.getFirstOrderedNode("//*[@id='LicensesAndCertificationsSection']//button[@data-automation='primary-action-button']");
  if (!t) return [];
  t.click(), await new Promise((e2) => setTimeout(e2, 300));
  let r = xpath.getOrderedNodes("//*[@id='LicensesAndCertificationsSection']//div[contains(@class, 'col-md-16') or contains(@class, 'col-md-8')]"), n = [];
  for (let e2 of r) {
    let t2 = e2.closest("div.collapse");
    if (!t2 || t2.classList.contains("in")) {
      if (e2.querySelector("div.form-group")) {
        let t3 = e2.querySelector("div.form-group");
        if (t3) {
          let e3 = $(t3);
          e3.label && !e3.label.includes("License") && (e3.label = "license" + e3.label), e3 && (e3.__ultiproDialogSection = "certifications", n.push(e3));
        }
      } else {
        let t3 = $(e2);
        t3 && (t3.__ultiproDialogSection = "certifications", n.push(t3));
      }
    }
  }
  let o2 = xpath.getFirstOrderedNode("//*[@id='LicensesAndCertificationsSection']//button[@data-automation='cancel-button']");
  return o2 && (o2.click(), await new Promise((e2) => setTimeout(e2, 200))), n;
}
async function L() {
  let e = document.querySelector("#CandidateLinkEdit");
  if (!e || isElementHidden(e)) return [];
  let t = xpath.getFirstOrderedNode("//*[@id='CandidateLinkEdit']//button[@data-automation='primary-action-button' and not(contains(@style, 'display: none'))]");
  if (!t) return [];
  t.click(), await new Promise((e2) => setTimeout(e2, 300));
  let r = xpath.getOrderedNodes("//*[@id='CandidateLinkEdit']//div[contains(@class, 'col-sm-14') or contains(@class, 'col-sm-10')]"), n = [];
  for (let e2 of r) {
    let t2 = $(e2);
    t2?.label && !t2.label.includes("Link") && (t2.label = "link" + t2.label), t2 && (t2.__ultiproDialogSection = "links", n.push(t2));
  }
  let o2 = xpath.getFirstOrderedNode("//*[@id='CandidateLinkEdit']//button[@data-automation='cancel-button']");
  return o2 && (o2.click(), await new Promise((e2) => setTimeout(e2, 200))), n;
}
async function R() {
  let e = [], t = xpath.getOrderedNodes("//*[@id='Questions']//div[contains(@class, 'form-group')]");
  for (let r2 of t) {
    if (q(r2) || r2.querySelector("div.form-group")) continue;
    let t2 = $(r2);
    t2 && e.push(t2);
  }
  let r = xpath.getOrderedNodes('//*[@id="Questions"]//div[@data-bind and contains(@data-bind, "visible:")]//*[contains(@class, "form-group")]');
  for (let t2 of r) {
    if (q(t2)) continue;
    let r2 = $(t2);
    if (r2) {
      let t3 = e.find((e2) => e2.label === r2.label);
      t3 || e.push(r2);
    }
  }
  let n = xpath.getOrderedNodes('//*[@id="Questions"]//div[@role="radiogroup" and @aria-labelledby="EmployeeReferral"]');
  for (let t2 of n) {
    if (q(t2)) continue;
    let r2 = $(t2);
    if (r2) {
      let t3 = e.find((e2) => e2.label === r2.label);
      t3 || e.push(r2);
    }
  }
  return e;
}
async function O() {
  let e = [], t = xpath.getOrderedNodes("//*[@id='ApplicationQuestions']//div[contains(@class, 'form-group')]");
  for (let r of t) {
    if (q(r) || r.querySelector("div.form-group")) continue;
    let t2 = $(r);
    t2 && e.push(t2);
  }
  return e;
}
async function M() {
  let e = [], t = xpath.getOrderedNodes("//*[@id='CountryQuestions']//div[contains(@class, 'form-group')]");
  for (let r2 of t) {
    if (q(r2)) continue;
    let t2 = $(r2);
    t2 && e.push(t2);
  }
  let r = N();
  return r && e.push(r), e;
}
function N() {
  let e = document.querySelector('select[data-automation="country-questions-race"]');
  if (!e) return null;
  let t = e.getAttribute("id"), r = t ? document.querySelector(`label[for="${t}"]`) : null, n = B(e);
  return { type: enums.FIELD_TYPE.SELECT, label: "Race", required: true, $label: r, options: n, $input: e };
}
function $(e) {
  let t = e.querySelector("label"), r = "", n = false;
  if (t && (r = t.textContent?.trim() || "", t.classList.contains("required") && (n = true)), !r) {
    let t2 = e.querySelector("input, select, textarea");
    if (t2) {
      let e2 = t2.getAttribute("aria-label")?.trim();
      e2 && (r = e2);
    }
  }
  if (!r) return null;
  let i2 = t?.getAttribute("for") || "", a2 = null;
  if (i2 && (a2 = e.querySelector(`select#${CSS.escape(i2)}`)), a2 || (a2 = e.querySelector("select")), a2 && !a2.disabled) {
    let i3 = B(a2), l3 = e.querySelector("div.checkbox");
    if (l3) {
      let e2 = l3.querySelector("label"), s3 = e2?.querySelector("span:not(.sr-only)");
      if (s3) {
        let e3 = s3.textContent?.replace(/\s+/g, " ").trim() || "";
        if (e3) return i3.push(e3), { type: enums.FIELD_TYPE.MULTI_SELECT, label: r, required: n, $label: t, options: i3, $input: a2 };
      }
    }
    return { type: enums.FIELD_TYPE.SELECT, label: r, required: n, $label: t, options: i3, $input: a2 };
  }
  let l2 = e.querySelector('[role="radiogroup"]');
  if (l2 || "radiogroup" !== e.getAttribute("role") || (l2 = e), l2) {
    let e2 = Array.from(l2.querySelectorAll('input[type="radio"]'));
    if (e2.length > 0) {
      let i3 = [];
      for (let t2 of e2) {
        let e3 = t2.closest("label") || t2.parentElement?.querySelector("label");
        if (e3) {
          let r2 = e3.textContent?.trim() || t2.value;
          r2 && i3.push(r2);
        } else {
          let e4 = t2.nextElementSibling;
          if (e4 && "SPAN" === e4.tagName) {
            let t3 = e4.textContent?.trim();
            t3 && i3.push(t3);
          }
        }
      }
      return { type: enums.FIELD_TYPE.CHECKBOX, label: r, required: n, $label: t, options: i3, $checkboxs: e2 };
    }
  }
  let s2 = Array.from(e.querySelectorAll("label.radio, div[role='radiogroup'] > div > label"));
  if (s2.length > 0) {
    let e2 = s2.map((e3) => e3.textContent?.trim()).filter((e3) => !!e3), i3 = s2.map((e3) => e3.querySelector("input[type='radio']")).filter((e3) => !!e3);
    if (i3.length > 0) return { type: enums.FIELD_TYPE.CHECKBOX, label: r, required: n, $label: t, options: e2, $checkboxs: i3 };
  }
  let u2 = e.querySelector("ukg-date-input-text");
  if (u2) return { type: enums.FIELD_TYPE.DATE, label: r, required: n, $label: t, $input: u2 };
  let c2 = null;
  return (i2 && (c2 = e.querySelector(`input#${CSS.escape(i2)}, textarea#${CSS.escape(i2)}`)), c2 || (c2 = e.querySelector("input[type='text'], textarea")), c2 && !c2.readOnly) ? { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $label: t, $input: c2 } : null;
}
function B(e) {
  let t = Array.from(e.querySelectorAll("option"));
  return t.slice(1).map((e2) => e2.textContent?.trim()).filter((e2) => !!e2);
}
function q(e) {
  if ("none" === e.style.display || e.classList.contains("collapse") && !e.classList.contains("in")) return true;
  let t = e.closest("[style*='display: none'], .collapse:not(.in)");
  return !!t;
}
let U = 200;
function H(e) {
  if (isElementHidden(e)) return null;
  let t = e.querySelector("label");
  if (!t) return null;
  let r = t.textContent?.trim() || "";
  if (!r) return null;
  let n = t.getAttribute("for") || "", o2 = "", i2 = F(e, n ? `select#${CSS.escape(n)}` : "select");
  if (i2) return { label: r, value: o2 = i2.options[i2.selectedIndex]?.textContent?.trim() || "" };
  let a2 = F(e, n ? `input[type='checkbox']#${CSS.escape(n)}` : "input[type='checkbox']");
  if (a2) return { label: r, value: o2 = a2.checked ? "Yes" : "No" };
  let l2 = F(e, n ? `input#${CSS.escape(n)}, textarea#${CSS.escape(n)}` : "input[type='text'], textarea");
  if (l2) {
    if ("TEXTAREA" === l2.tagName) o2 = l2.value || "";
    else {
      let e2 = l2;
      e2.type, o2 = e2.value || "";
    }
    return { label: r, value: o2 };
  }
  let s2 = e.querySelector("ukg-date-input-text");
  if (s2) {
    let e2 = s2.querySelector('input[aria-label="Month"]'), t2 = s2.querySelector('input[aria-label="Day"]'), n2 = s2.querySelector('input[aria-label="Year"]');
    return e2 && t2 && n2 && (o2 = [e2.value, t2.value, n2.value].filter(Boolean).join("/") || ""), { label: r, value: o2 };
  }
  return null;
}
function Y(e) {
  let t = e.querySelector("label"), r = t?.textContent?.trim() || "";
  if (!r) {
    let t2 = e.querySelector("input, select, textarea");
    r = t2?.getAttribute("aria-label")?.trim() || "";
  }
  if (!r) return null;
  let n = t?.getAttribute("for") || "", o2 = "", i2 = (n ? e.querySelector(`select#${CSS.escape(n)}`) : null) || e.querySelector("select");
  if (i2 && !i2.disabled) {
    let t2 = i2.options[i2.selectedIndex];
    o2 = t2?.textContent?.trim() || "";
    let n2 = !t2?.value || /choose/i.test(o2);
    if (n2 || !o2) {
      let t3 = e.querySelector('div.checkbox input[type="checkbox"]:checked');
      if (t3) {
        let r2 = t3.closest("label") || (t3.id ? e.querySelector(`label[for="${t3.id}"]`) : null), n3 = r2?.querySelector("span:not(.sr-only)"), i3 = (n3?.textContent || r2?.textContent || "").replace(/\s+/g, " ").trim();
        i3 && (o2 = i3);
      }
    }
    return { label: r, value: o2 };
  }
  let a2 = e.querySelector('[role="radiogroup"]') || ("radiogroup" === e.getAttribute("role") ? e : null);
  if (a2) {
    let e2 = a2.querySelector('input[type="radio"]:checked');
    return e2 && (o2 = eo(e2)), { label: r, value: o2 };
  }
  let l2 = e.querySelectorAll('input[type="radio"]');
  if (l2.length > 0) {
    let e2 = Array.from(l2).find((e3) => e3.checked);
    return e2 && (o2 = eo(e2)), { label: r, value: o2 };
  }
  let s2 = e.querySelector("ukg-date-input-text");
  if (s2) {
    let e2 = (e3) => {
      let t3 = `input[aria-label="${e3}"]`;
      return s2.querySelector(t3) || s2.shadowRoot?.querySelector(t3);
    }, t2 = e2("Month"), n2 = e2("Day"), i3 = e2("Year");
    if (t2?.value && n2?.value && i3?.value && (o2 = `${t2.value}/${n2.value}/${i3.value}`), !o2) {
      let e3 = s2.value || s2.getAttribute("value") || "";
      if (e3) {
        let t3 = e3.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        o2 = t3 ? `${t3[2]}/${t3[3]}/${t3[1]}` : e3;
      }
    }
    return { label: r, value: o2 };
  }
  let u2 = n ? e.querySelector(`input#${CSS.escape(n)}, textarea#${CSS.escape(n)}`) : e.querySelector("input[type='text'], textarea");
  return u2 && !u2.readOnly ? (u2.tagName, o2 = u2.value, { label: r, value: o2?.trim() || "" }) : null;
}
function z() {
  let e = {}, t = ["WorkExperienceSection", "EducationSection", "CandidateSkills", "CandidateBehaviors", "CandidateMotivations", "LicensesAndCertificationsSection", "CandidateLinkEdit", "Questions", "ApplicationQuestions", "CountryQuestions"], r = t.map((e2) => `not(ancestor::*[@id='${e2}'])`).join(" and "), n = xpath.getOrderedNodes(`//div[
      (contains(@class, 'col-md-24') and @data-bind='configurableVisibility: $parent.willingToRelocateConfig')
      or ((contains(@class, 'col-md-8') or contains(@class, 'col-md-16')) and ${r})
    ]`);
  for (let t2 of n) {
    if (isElementHidden(t2)) continue;
    let r2 = t2.querySelectorAll("input, select, textarea");
    if (0 === r2.length) continue;
    let n2 = H(t2);
    n2 && (e[n2.label] = n2.value);
  }
  return e;
}
function V(e) {
  let t = {}, r = e.querySelectorAll("div.form-group");
  for (let e2 of r) {
    if (e2.closest("div.collapse:not(.in)")) continue;
    let r2 = e2.querySelector("label"), n = r2?.textContent?.trim() || "";
    if (!n || "Month" === n || "Year (YYYY)" === n) continue;
    if ("From" === n || "To" === n) {
      let r3 = e2.querySelector("select"), o3 = e2.querySelector("input[placeholder='YYYY'], input[maxlength='4']"), i2 = r3?.options[r3.selectedIndex]?.textContent?.trim() || "", a2 = o3?.value?.trim() || "";
      t[n] = [i2, a2].filter(Boolean).join(" ");
      continue;
    }
    let o2 = Y(e2);
    o2 && (t[o2.label] = o2.value);
  }
  return t;
}
let W = 400, G = 300;
async function K() {
  let e = document.querySelector("#WorkExperienceSection");
  if (!e) return [];
  let t = e.querySelector("ul.listtype");
  if (!t) return [];
  let r = Array.from(t.querySelectorAll("li.row, li[data-automation='panel-list-item']")), n = [];
  for (let e2 of r) {
    let t2 = e2.querySelector("button[data-automation='edit-button']");
    if (!t2 || t2.disabled) continue;
    t2.click(), await new Promise((e3) => setTimeout(e3, W));
    let r2 = e2.querySelector("[data-automation='work-experience-item']");
    if (r2) {
      let e3 = V(r2), t3 = Object.values(e3).every((e4) => !String(e4).trim());
      t3 || n.push(e3);
    }
    let o2 = e2.querySelector("button[data-automation='cancel-button']");
    o2 && (o2.click(), await new Promise((e3) => setTimeout(e3, G)));
  }
  return n;
}
async function X() {
  let e = document.querySelector("#EducationSection");
  if (!e) return [];
  let t = e.querySelector("ul.listtype");
  if (!t) return [];
  let r = Array.from(t.querySelectorAll("li.row, li[data-automation='panel-list-item']")), n = [];
  for (let e2 of r) {
    let t2 = e2.querySelector("button[data-automation='edit-button']");
    if (!t2 || t2.disabled) continue;
    t2.click(), await new Promise((e3) => setTimeout(e3, W));
    let r2 = e2.querySelector("[data-automation='work-experience-item'], [data-automation='education-panel']") || e2, o2 = V(r2), i2 = Object.values(o2).every((e3) => !String(e3).trim());
    i2 || n.push(o2);
    let a2 = e2.querySelector("button[data-automation='cancel-button']");
    a2 && (a2.click(), await new Promise((e3) => setTimeout(e3, G)));
  }
  return n;
}
async function J(e) {
  let t = document.querySelector(`#${e}`);
  if (!t) return "";
  let r = () => {
    let e2 = [], r2 = t.querySelectorAll("ul li span div strong, [data-automation='selected-item'] strong[data-automation='skill-label'], ul.listtype > li[data-automation='selected-item'] strong, ul.listtype > li[data-automation='selected-item']");
    if (r2.forEach((t2) => {
      let r3 = (t2.textContent || t2.innerText || "").trim();
      (r3 = (r3 = r3.replace(/\s*[\r\n]+\s*/g, ", ")).split(",").map((e3) => e3.trim()).filter((e3) => "not specified" !== e3.toLowerCase()).join(", ")) && e2.push(r3);
    }), e2.length) return [...new Set(e2)];
    let n2 = t.querySelectorAll("ul li strong, ul li span");
    return n2.forEach((t2) => {
      let r3 = (t2.textContent || "").trim();
      (r3 = (r3 = r3.replace(/\s*[\r\n]+\s*/g, ", ")).split(",").map((e3) => e3.trim()).filter((e3) => "not specified" !== e3.toLowerCase()).join(", ")) && e2.push(r3);
    }), [...new Set(e2)];
  }, n = r();
  if (n.length > 0) return n.join(", ");
  let o2 = t.querySelector("button[data-automation='primary-action-button']");
  if (o2) {
    o2.click(), await new Promise((e3) => setTimeout(e3, 300)), n = r();
    let e2 = t.querySelector("button[data-automation='cancel-button']");
    e2 && (e2.click(), await new Promise((e3) => setTimeout(e3, U)));
  }
  return n.join(", ");
}
async function Q() {
  let e = document.querySelector("#LicensesAndCertificationsSection");
  if (!e) return null;
  let t = e.querySelector("ul");
  if (!t) return null;
  let r = Array.from(t.querySelectorAll("li.row, li[data-automation='panel-list-item'], li")), n = [];
  for (let e2 of r) {
    let t2 = e2.querySelector("button[data-automation='edit-button']") || e2.querySelector("div.presence-section-header-label.clickable-header") || e2.querySelector("strong");
    if (!t2 || t2 instanceof HTMLButtonElement && t2.disabled) continue;
    t2.click(), await new Promise((e3) => setTimeout(e3, W));
    let r2 = {}, o2 = e2.querySelectorAll("div.form-group");
    for (let e3 of o2) {
      if (q(e3) || e3.querySelector("div.form-group")) continue;
      let t3 = Y(e3);
      if (t3) {
        let e4 = t3.label.includes("License") ? t3.label : "license" + t3.label;
        r2[e4] = t3.value;
      }
    }
    let i2 = Object.values(r2).every((e3) => !String(e3).trim());
    i2 || n.push(r2);
    let a2 = e2.querySelector("button[data-automation='cancel-button']");
    a2 && (a2.click(), await new Promise((e3) => setTimeout(e3, G)));
  }
  return n.length ? n : null;
}
async function Z() {
  let e = document.querySelector("#CandidateLinkEdit");
  if (!e) return null;
  let t = xpath.getFirstOrderedNode("//*[@id='CandidateLinkEdit']//button[@data-automation='primary-action-button' and not(contains(@style, 'display: none'))]");
  if (!t) return null;
  t.click(), await new Promise((e2) => setTimeout(e2, 300));
  let r = xpath.getOrderedNodes("//*[@id='CandidateLinkEdit']//div[contains(@class, 'col-sm-14') or contains(@class, 'col-sm-10')]"), n = {};
  for (let e2 of r) {
    let t2 = Y(e2);
    if (t2) {
      let e3 = t2.label.includes("Link") ? t2.label : "link" + t2.label;
      n[e3] = t2.value;
    }
  }
  let o2 = xpath.getFirstOrderedNode("//*[@id='CandidateLinkEdit']//button[@data-automation='cancel-button']");
  o2 && (o2.click(), await new Promise((e2) => setTimeout(e2, U)));
  let a2 = Object.values(n).every((e2) => !String(e2).trim());
  return a2 && Object.keys(n).length > 0 ? null : Object.keys(n).length ? n : null;
}
function ee() {
  let e = {}, t = xpath.getOrderedNodes("//*[@id='Questions']//div[contains(@class, 'form-group')]");
  for (let r2 of t) {
    if (q(r2) || r2.querySelector("div.form-group")) continue;
    let t2 = Y(r2);
    t2 && (e[t2.label] = t2.value);
  }
  let r = xpath.getOrderedNodes('//*[@id="Questions"]//div[@data-bind and contains(@data-bind, "visible:")]//*[contains(@class, "form-group")]');
  for (let t2 of r) {
    if (q(t2)) continue;
    let r2 = Y(t2);
    r2 && void 0 === e[r2.label] && (e[r2.label] = r2.value);
  }
  let n = xpath.getOrderedNodes('//*[@id="Questions"]//div[@role="radiogroup" and @aria-labelledby="EmployeeReferral"]');
  for (let t2 of n) {
    if (q(t2)) continue;
    let r2 = Y(t2);
    r2 && void 0 === e[r2.label] && (e[r2.label] = r2.value);
  }
  return e;
}
function et() {
  let e = {}, t = xpath.getOrderedNodes("//*[@id='ApplicationQuestions']//div[contains(@class, 'form-group')]");
  for (let r of t) {
    if (q(r) || r.querySelector("div.form-group")) continue;
    let t2 = Y(r);
    t2 && (e[t2.label] = t2.value);
  }
  return e;
}
function er() {
  let e = {}, t = xpath.getOrderedNodes("//*[@id='CountryQuestions']//div[contains(@class, 'form-group')]");
  for (let r2 of t) {
    if (q(r2)) continue;
    let t2 = Y(r2);
    t2 && (e[t2.label] = t2.value);
  }
  let r = document.querySelector('select[data-automation="country-questions-race"]');
  if (r) {
    let t2 = document.querySelector(`label[for="${r.id}"]`)?.textContent?.trim() || "Race", n = r.options[r.selectedIndex]?.textContent?.trim() || "";
    e[t2] = n;
  }
  return e;
}
async function getFormSnapshot() {
  let e = {};
  Object.assign(e, z());
  let t = await K();
  t.length && (e.employment = t);
  let r = await X();
  r.length && (e.education = r);
  let n = await J("CandidateSkills");
  n && (e.Skills = n);
  let o2 = await J("CandidateBehaviors");
  o2 && (e.Behaviors = o2);
  let i2 = await J("CandidateMotivations");
  i2 && (e.Motivations = i2);
  let a2 = await Q();
  a2 && (e.licensesAndCertifications = a2);
  let l2 = await Z();
  return l2 && (e.links = l2), Object.assign(e, ee()), Object.assign(e, et()), Object.assign(e, er()), e;
}
function eo(e) {
  let t = e.closest("label");
  if (t) return Array.from(t.childNodes).filter((e2) => e2.nodeType === Node.TEXT_NODE || "INPUT" !== e2.tagName).map((e2) => e2.textContent?.trim()).filter(Boolean).join(" ").trim();
  if (e.id) {
    let t2 = document.querySelector(`label[for="${e.id}"]`);
    if (t2) return t2.textContent?.trim() || "";
  }
  let r = e.nextElementSibling;
  return r && r.textContent?.trim() ? r.textContent.trim() : e.value || "";
}

export {
  ULTIPRO_DESCRIPTION_FIELD_HINT,
  extractExpAndEduRuleFromElement,
  extractRules,
  extractUltiproTypeaheadOptions,
  getFormSnapshot,
  getUltiproSectionEditor,
  getUltiproSectionEditors,
  getUltiproVisibleSection,
  isElementHidden,
  isUltiproReviewCopyLayout,
}
