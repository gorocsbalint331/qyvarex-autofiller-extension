// @ts-nocheck
/**
 * Taleo — form rule extraction and snapshot helpers.
 */

import * as executor from "../../crawler/utils/executor.js"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as utils from "../../../utils.js"
import * as operations from "./operations.ts"
import * as sectionOptions from "./section-options.ts"
function c(e) {
  return e.replace(/[\u00a0\u200b-\u200d\ufeff]/g, " ").replace(/[\n\r\u21b5]+/g, " ").replace(/\s+/g, " ").replace(/\s*\.\s*required$/i, "").replace(/\s*required$/i, "").trim();
}
function d(e) {
  return e.replace(/[\u00a0\u200b-\u200d\ufeff]/g, " ").replace(/[\n\r\u21b5]+/g, " ").replace(/\s+/g, " ").trim();
}
function f(e, t) {
  let r = e, n = t?.textContent || "", o2 = t?.getAttribute("title") || "", i2 = !!t?.querySelector("img.mandatory-img") || /mandatory/i.test(o2) || /\brequired\b/i.test(n);
  return !!r.required || "true" === r.getAttribute("aria-required") || i2;
}
function p(e) {
  let t = xpath.getFirstOrderedNode("./ancestor::fieldset[1]", e);
  return t ? t.querySelector("legend label") || t.querySelector("legend") : null;
}
function m(e) {
  let t = p(e);
  return !!t && f(e, t);
}
function h(e, t) {
  let r = e.id || "", n = e.getAttribute("name") || "";
  return !!("Select a language" === t && (r.includes("eSignatureBlock-selectOneMenu_language") || n.includes("eSignatureBlock-selectOneMenu_language")));
}
function g(e) {
  let t = e.closest(".oracletaleocwsv2-form-group-full");
  if (!t) return "";
  let r = t.querySelector(".oracletaleocwsv2-text-above-field-label");
  return c(r?.textContent || "");
}
function b(e) {
  return "SPAN" === e.tagName && e.classList.contains("input-date-time");
}
function y(e) {
  let t = [e.id, e.getAttribute("name") || "", e.getAttribute("data-id") || "", ...Array.from(e.querySelectorAll("[id], [name]")).flatMap((e2) => [e2.id || "", e2.getAttribute("name") || ""])].join(" ");
  return /EndDate/i.test(t) ? "end" : /BeginDate/i.test(t) ? "begin" : /graduationDate/i.test(t) ? "graduation" : /startDate/i.test(t) ? "start" : null;
}
function v(e, t) {
  let r = c(e).toLowerCase();
  return "end" === t ? /\bend(\s+date)?\b/.test(r) || r.includes("date to") : "begin" === t ? /\b(begin|start)(\s+date)?\b/.test(r) || r.includes("date from") : "graduation" === t ? r.includes("graduation") : /\bstart(\s+date)?\b/.test(r);
}
function w(e) {
  return Array.from(e.querySelectorAll("label, span.entity-label")).filter((e2) => e2 instanceof HTMLElement && !_(e2) && !utils.isEmpty(c(e2.textContent || "")));
}
function S(e, t, r) {
  let n = w(t);
  if (0 === n.length) return null;
  let o2 = null === r ? n : n.filter((e2) => v(e2.textContent || "", r)), i2 = o2.length > 0 ? o2 : n, a2 = i2.filter((t2) => {
    let r2 = t2.compareDocumentPosition(e);
    return !!(r2 & Node.DOCUMENT_POSITION_FOLLOWING);
  });
  if (a2.length > 0) return a2[a2.length - 1];
  let l2 = i2.filter((t2) => {
    let r2 = t2.compareDocumentPosition(e);
    return !!(r2 & Node.DOCUMENT_POSITION_PRECEDING);
  });
  return l2.length > 0 ? l2[0] : null;
}
function E(e) {
  let t = y(e), r = Array.from(new Set([e.parentElement, e.closest("td"), e.closest("fieldset")].filter((e2) => e2 instanceof HTMLElement)));
  for (let n of r) {
    let r2 = S(e, n, t);
    if (r2) return r2;
  }
  return xpath.getFirstOrderedNode('./ancestor::td[1]//*[self::label or (self::span and contains(@class, "entity-label"))][1]', e) || xpath.getFirstOrderedNode('./ancestor::fieldset[1]//*[self::label or (self::span and contains(@class, "entity-label"))][1]', e);
}
function x(e) {
  let t = e.querySelector(".input-date-time-text") || e.querySelector('[id$=".display"]') || e, r = c(t.textContent || "");
  return r && "not specified" !== r.toLowerCase() ? r : "";
}
function C(e) {
  if (!b(e)) return null;
  let t = E(e), r = c(t?.textContent || "");
  return utils.isEmpty(r) ? null : { type: enums.FIELD_TYPE.DATE, label: r, required: f(e, t), $label: t, $input: e };
}
function A(e, t) {
  let r = Array.from(t.querySelectorAll("span.input-date-time")).filter((e2) => e2 instanceof HTMLElement);
  for (let t2 of r) {
    let r2 = E(t2), n = c(r2?.textContent || ""), o2 = y(t2);
    if (!o2 && !/\b(begin|start|end|graduation)(\s+date)?\b/i.test(n) && !/\bdate\s+(from|to)\b/i.test(n)) continue;
    let i2 = C(t2);
    i2 && (e.some((e2) => F(e2) === F(i2)) || e.push(i2));
  }
}
function k(e) {
  let t = e.getAttribute("placeholder")?.trim();
  if (t && /[MDY]/i.test(t)) return t;
}
function T(e) {
  if (!(e instanceof HTMLInputElement)) return false;
  let t = (e.getAttribute("type") || "").toLowerCase(), r = e.getAttribute("placeholder")?.trim() || "";
  return "date" === t || e.classList.contains("oracletaleocwsv2-datepicker-trigger") || /[MDY]\s*\/\s*[MDY]\s*\/\s*[Y]{2,4}/i.test(r);
}
function F(e) {
  let t = "options" in e && Array.isArray(e.options) ? [...e.options].filter((e2) => "string" == typeof e2).map(d).join("|") : "";
  return `${e.type}::${c(e.label)}::${t}`;
}
function I(e) {
  return `${e.type}::${c(e.label)}`;
}
function j(e, t) {
  let r = Array.from(/* @__PURE__ */ new Set([...e.options || [], ...t.options || []])), n = Array.from(/* @__PURE__ */ new Set([...e.$checkboxs || [], ...t.$checkboxs || []]));
  e.options = r, e.$checkboxs = n, e.required = e.required || t.required;
}
function D(e, t) {
  if (!t) return;
  if (t.type === enums.FIELD_TYPE.CHECKBOX) {
    let r2 = e.find((e2) => e2.type === enums.FIELD_TYPE.CHECKBOX && I(e2) === I(t));
    if (r2) {
      j(r2, t);
      return;
    }
  }
  let r = F(t), n = e.some((e2) => F(e2) === r);
  n || e.push(t);
}
function P(e) {
  return operations.TALEO_HARDCODE_CONFIG[e];
}
function _(e) {
  if (!(e instanceof HTMLElement)) return false;
  let t = e.getAttribute("style") || "", r = e instanceof HTMLInputElement ? e.type.toLowerCase() : "";
  return "hidden" === r || /display\s*:\s*none/i.test(t) || e.classList.contains("hide");
}
function L(e) {
  if (!(e instanceof HTMLElement) || _(e)) return false;
  let t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return t.width > 0 && t.height > 0 && "none" !== r.display && "hidden" !== r.visibility;
}
function R(e) {
  if (!(e instanceof HTMLElement)) return false;
  let t = e;
  for (; t; ) {
    if (t.hidden || _(t)) return false;
    let e2 = window.getComputedStyle(t);
    if ("none" === e2.display || "hidden" === e2.visibility || "true" === t.getAttribute("aria-hidden")) return false;
    t = t.parentElement;
  }
  return true;
}
function O(e, t = {}) {
  let r = e.getAttribute("type") || "checkbox", n = e.getAttribute("name") || "", o2 = [];
  if (n && (o2 = Array.from(document.querySelectorAll(`input[type="${r}"]`)).filter((e2) => e2 instanceof HTMLInputElement).filter((e2) => e2.getAttribute("name") === n && (!!t.allowHidden || R(e2)))), 0 === o2.length) {
    let r2 = e.getAttribute("id");
    if (!r2) return [];
    o2 = Array.from(document.querySelectorAll(`input[id="${r2}"]`)).filter((e2) => e2 instanceof HTMLInputElement).filter((e2) => !!t.allowHidden || R(e2));
  }
  return o2;
}
function M(e, t) {
  let r = "education" === t ? "oracletaleocwsv2-dynamic-content-education" : "oracletaleocwsv2-dynamic-content-work";
  return !!e.closest(`div.${r}`);
}
function N(e, t) {
  return e instanceof HTMLElement && (e.getAttribute("data-type") === t || !!M(e, t) && !!e.querySelector("input, textarea, select, a.save-edit-trigger, button.save-edit-trigger"));
}
function $(e) {
  return "work" === e ? ".//div[contains(@class, 'well') and .//input[contains(@name, 'WORK_HISTORY_')] and .//a[contains(@class, 'save-edit-trigger') and @aria-label='Save']]" : ".//div[contains(@class, 'well') and (.//input[contains(@name, 'EDUCATION_')] or .//input[contains(@name, 'education_')] or .//select[contains(@name, 'education_')]) and .//a[contains(@class, 'save-edit-trigger') and @aria-label='Save']]";
}
function B(e) {
  return `.//div[@data-type='${e}']`;
}
function q(e, t, r) {
  let n = xpath.getOrderedNodes(e.snapshot[t], document);
  if (2 !== t) return n;
  let o2 = xpath.getOrderedNodes($(r), document), i2 = xpath.getOrderedNodes(B(r), document);
  return Array.from(/* @__PURE__ */ new Set([...n, ...o2, ...i2]));
}
function U() {
  let e = Array.from(document.querySelectorAll("table.tablelist")).filter(L), t = xpath.getOrderedNodes("//div[contains(@id, 'step-') and contains(@class, '-active')]", document).filter(L);
  return 0 === t.length && (t = Array.from(document.querySelectorAll("form")).filter(L)), { sections: t = Array.from(/* @__PURE__ */ new Set([...t, ...e])), usingTableListScope: false };
}
function getCwsV2CoverLetterTextarea(e = {}) {
  let { requireVisible: t = true } = e, r = document.querySelectorAll("h2");
  for (let e2 of r) {
    if (e2.textContent?.trim().toLowerCase() !== "cover letter") continue;
    let r2 = e2.nextElementSibling;
    for (; r2 && "H1" !== r2.tagName && "H2" !== r2.tagName; ) {
      let e3 = r2.matches("textarea") ? r2 : r2.querySelector("textarea");
      if (e3 && (!t || R(e3))) return e3;
      r2 = r2.nextElementSibling;
    }
  }
  return null;
}
function getTaleoTypeIndex() {
  for (let e of Object.keys(operations.TALEO_HARDCODE_CONFIG)) {
    let t = P(e);
    for (let e2 = 0; e2 < t.container.length; e2++) {
      let r = xpath.getFirstOrderedNode(t.container[e2]);
      if (r) return e2;
    }
  }
  return 0;
}
async function z(e, t, r) {
  if (r <= 0) return;
  let n = null;
  for (let r2 = 0; r2 < 10; r2++) {
    let r3 = xpath.getFirstOrderedNode(t, e);
    if (r3 && "disabled" !== r3.getAttribute("disabled")) {
      n = r3;
      break;
    }
    await executor.delay(200);
  }
  if (n) {
    for (let e2 = 0; e2 < r; e2++) n.click(), await executor.delay(800);
    await executor.delay(500);
  }
}
async function V({ typeIndex: e }) {
  let t = P("education"), r = xpath.getFirstOrderedNode(t.container[e]);
  if (r) {
    let n2 = xpath.getOrderedNodes(t.snapshot[e], r);
    0 === n2.length && (await z(r, t.addButton[e], 2 === e ? 1 : 0), await executor.delay(2 === e ? 800 : 200));
  }
  let n = P("workExperience"), i2 = xpath.getFirstOrderedNode(n.container[e]);
  if (i2) {
    let t2 = xpath.getOrderedNodes(n.snapshot[e], i2);
    0 === t2.length && (await z(i2, n.addButton[e], 2 === e ? 1 : 0), await executor.delay(2 === e ? 800 : 200));
  }
}
function handleDuplicateHardcodeItemLabel(e) {
  let t = {};
  for (let r of e) {
    if (!t[r.label]) {
      t[r.label] = r;
      continue;
    }
    let e2 = t[r.label];
    if (e2.label.toLowerCase().includes("date") || e2.$input && e2.$input.getAttribute("name")?.includes("date")) {
      let t2 = true;
      e2.$input && e2.$input.getAttribute("name") && e2.$input.getAttribute("name")?.includes("month") ? t2 = true : e2.options && e2.options.length > 0 && e2.options.includes("January") && (t2 = true), t2 ? (e2.label = e2.label + " Month", r.label = r.label + " Year") : (e2.label = e2.label + " Year", r.label = r.label + " Month");
    }
  }
}
async function extractRules({ typeIndex: e }) {
  await V({ typeIndex: e });
  let { sections: t } = U(), r = [], n = null, o2 = null, l2 = P("education"), s2 = xpath.getFirstOrderedNode(l2.container[e]);
  s2 && (n = xpath.getFirstOrderedNode(l2.addButton[e], s2));
  let c2 = P("workExperience"), d2 = xpath.getFirstOrderedNode(c2.container[e]);
  d2 && (o2 = xpath.getFirstOrderedNode(c2.addButton[e], d2));
  let f2 = o2 ? o2.getBoundingClientRect().width : 0, p2 = n ? n.getBoundingClientRect().width : 0, m2 = 2 === e && R(n), h2 = 2 === e && R(o2), g2 = q(l2, e, "education"), b2 = [...g2].filter((t2) => 2 === e && N(t2, "education") || !!t2.querySelector("table") || "education" === t2.getAttribute("data-type")), y2 = q(c2, e, "work"), v2 = [...y2].filter((t2) => 2 === e && N(t2, "work") || !!t2.querySelector("table") || "work" === t2.getAttribute("data-type")), w2 = [...b2, ...v2], S2 = "Candidate eSignature Date", E2 = false;
  for (let n2 of t) {
    let t2 = xpath.getOrderedNodes(".//input | .//textarea | .//select", n2);
    for (let n3 of t2) {
      if (w2.some((e2) => e2.contains(n3))) continue;
      let t3 = await extractInput(n3, { typeIndex: e });
      if (t3) {
        if (t3.label === S2) {
          if (E2) continue;
          E2 = true;
        }
        D(r, t3);
      }
    }
  }
  if (0 === r.length && !p2 && !f2) {
    let t2 = xpath.getOrderedNodes("//span[contains(@id, 'mastercontentpanel') and contains(@class, 'mastercontentpanel')]", document);
    for (let n2 of t2) {
      let t3 = xpath.getOrderedNodes(".//input | .//textarea | .//select", n2);
      for (let n3 of t3) {
        let t4 = await extractInput(n3, { typeIndex: e });
        t4?.label.includes("Work Experience") || D(r, t4);
      }
    }
  }
  if (2 === e) {
    let e2 = getCwsV2CoverLetterTextarea();
    if (e2 && !r.some((t2) => "$input" in t2 && t2.$input === e2)) {
      let t2 = Array.from(document.querySelectorAll("h2")).find((e3) => e3.textContent?.trim().toLowerCase() === "cover letter");
      D(r, { type: enums.FIELD_TYPE.TEXT, label: "Cover Letter", required: false, $label: t2 ?? e2, $input: e2 });
    }
  }
  for (let t2 of b2) {
    let n2 = [], o3 = xpath.getOrderedNodes(1 === e ? ".//input[not(@type='submit') and not(@type='hidden')] | .//textarea | .//select | .//span[contains(@class, 'input-date-time')]" : ".//input[not(@type='submit') and not(@type='hidden')] | .//textarea | .//select", t2), l3 = m2 && M(t2, "education") ? { allowHidden: true, allowDisabled: true, typeIndex: e } : { typeIndex: e };
    for (let e2 of o3) {
      let t3 = await extractInput(e2, l3);
      t3 && (n2.some((e3) => F(e3) === F(t3)) || n2.push(t3));
    }
    1 === e && A(n2, t2), handleDuplicateHardcodeItemLabel(n2), 0 !== n2.length && r.push({ type: enums.FIELD_TYPE.EDUCATION, label: "Education", required: true, options: sectionOptions.mapChildrenToOptions(n2), children: n2 });
  }
  for (let t2 of v2) {
    let n2 = [], o3 = xpath.getOrderedNodes(1 === e ? ".//input[not(@type='submit') and not(@type='hidden')] | .//textarea | .//select | .//span[contains(@class, 'input-date-time')]" : ".//input[not(@type='submit') and not(@type='hidden')] | .//textarea | .//select", t2), l3 = h2 && M(t2, "work") ? { allowHidden: true, allowDisabled: true, typeIndex: e } : { typeIndex: e };
    for (let e2 of o3) {
      let t3 = await extractInput(e2, l3);
      !(!t3 || t3.label.includes("Work Experience")) && (n2.some((e3) => F(e3) === F(t3)) || n2.push(t3));
    }
    1 === e && A(n2, t2), handleDuplicateHardcodeItemLabel(n2), 0 !== n2.length && r.push({ type: enums.FIELD_TYPE.EMPLOYMENT, label: "Employment", required: true, options: sectionOptions.mapChildrenToOptions(n2), children: n2 });
  }
  let x2 = [document];
  for (let e2 of x2) {
    let t2 = xpath.getOrderedNodes(".//div[contains(@test-id, 'application-step-questionnaire')]", e2);
    for (let e3 of t2) {
      let t3 = xpath.getOrderedNodes(".//input | .//textarea | .//select", e3);
      for (let e4 of t3) {
        let t4 = await extractInput(e4);
        D(r, t4);
      }
    }
  }
  let C2 = xpath.getFirstOrderedNode(".//button[@test-id='application-next-step']"), k2 = xpath.getFirstOrderedNode(".//input[@value='Save and Continue']"), T2 = xpath.getFirstOrderedNode(".//input[@value='Submit']"), I2 = C2 ? C2.textContent?.trim() : k2 ? "Save and Continue" : T2 ? "Submit" : "";
  return [r.filter((e2) => !e2?.label.includes("Work Experience")).reduce((e2, t2) => (D(e2, t2), e2), []), I2];
}
async function extractInput(e, t = {}) {
  if (!t.allowHidden && !R(e)) return null;
  if (1 === t.typeIndex && b(e)) return C(e);
  let r = xpath.getFirstOrderedNode('./ancestor::div[contains(@class,"form-group")]//label', e), n = document.querySelector(`[for="${e.id}"]`), s2 = xpath.getFirstOrderedNode("./ancestor::td[1]//label", e);
  if ("SELECT" === e.tagName && e.getAttribute("name")?.toLowerCase().includes("disability") && ((r = document.createElement("label")).textContent = "Disability", r.setAttribute("for", e.id)), "hidden" === e.getAttribute("type") || xpath.getFirstOrderedNode('./ancestor::div[contains(@class, "tds-form-item")]/ancestor::div[contains(@class, "HiddenFields")]', e) || "readonly" === e.getAttribute("readonly") || !t.allowDisabled && e.hasAttribute("disabled")) return null;
  if ("agreeCheckbox" === e.id && "checkbox" === e.getAttribute("type")) {
    let t2 = xpath.getFirstOrderedNode("./ancestor::div[contains(@class, 'submit-information')]//h3", e), r2 = t2?.textContent?.trim() || "";
    return { type: enums.FIELD_TYPE.CHECKBOX, label: r2, required: true, $label: t2, options: ["I Agree to the Candidate Acknowledgement"], $checkboxs: [e] };
  }
  if (!r && !n && !s2) return null;
  let u2 = r?.textContent?.trim() || n?.innerText?.trim() || s2?.innerText?.trim() || "";
  u2 = c(u2);
  let p2 = g(e);
  p2 && ["select one", "please select", "yes/no"].includes(u2.trim().toLowerCase()) && (u2 = p2);
  let y2 = r || n || s2;
  if (h(e, u2)) return null;
  y2.getAttribute("for")?.includes("BeginDate") ? u2 = "BeginDate " + u2 : y2.getAttribute("for")?.includes("EndDate") ? u2 = "EndDate " + u2 : y2.getAttribute("for")?.includes("graduationDate") && !u2.includes("Projected") ? u2 = "Graduation Date " + u2 : y2.getAttribute("for")?.includes("startDate") && (u2 = "StartDate " + u2);
  let v2 = f(e, y2) || m(e);
  if (utils.isEmpty(u2)) return null;
  let w2 = [];
  if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName) {
    if ("file" === e.getAttribute("type")) return null;
    let r2 = ["checkbox", "radio"].includes(e.getAttribute("type") || "") ? enums.FIELD_TYPE.CHECKBOX : T(e) ? enums.FIELD_TYPE.DATE : enums.FIELD_TYPE.TEXT;
    if (r2 === enums.FIELD_TYPE.CHECKBOX) {
      let r3 = xpath.getFirstOrderedNode("./ancestor::fieldset[1]", e);
      if (r3) {
        let t2 = Array.from(r3.querySelectorAll(`input[type="${e.getAttribute("type") || "checkbox"}"]`));
        if (t2[0] !== e) return null;
        let n4 = r3.querySelector("legend"), o2 = c(xpath.getExactText(n4?.textContent || "")), s4 = t2, u3 = s4.reduce((e2, t3) => {
          let r4 = document.querySelector(`[for="${t3.id}"]`), n5 = d(r4?.textContent || "");
          return utils.isEmpty(n5) || e2.push(n5), e2;
        }, []);
        return { type: enums.FIELD_TYPE.CHECKBOX, label: o2, required: !!v2, $label: n4, options: u3, $checkboxs: s4 };
      }
      let n3 = O(e, t);
      return n3[0] !== e || 0 === (w2 = n3.reduce((e2, t2) => {
        let r4 = document.querySelector(`[for="${t2.id}"]`), n4 = d(r4?.textContent || "");
        return utils.isEmpty(n4) || e2.push(n4), e2;
      }, [])).length ? null : { type: enums.FIELD_TYPE.CHECKBOX, label: u2, required: !!v2, $label: y2, options: w2, $checkboxs: n3 };
    }
    if ("combobox" === e.role) {
      let t2 = document.createEvent("MouseEvents");
      t2.initEvent("mousedown", true, true), e.dispatchEvent(t2), await executor.delay(100);
      let r3 = e.id + "_list", n3 = document.querySelector(`#${r3}`), a2 = Array.from(n3?.children || []);
      return w2 = a2.reduce((e2, t3) => {
        let r4 = t3.textContent?.trim();
        return utils.isEmpty(r4) || e2.push(r4), e2;
      }, []), e.blur(), await executor.delay(200), { type: w2.length > 0 && "State/Province" !== u2 ? enums.FIELD_TYPE.DROPDOWN : enums.FIELD_TYPE.TEXT, label: u2, required: !!v2, $input: e, $label: y2, options: w2 };
    }
    let n2 = { label: u2, required: !!v2, $label: y2, $input: e };
    if (r2 === enums.FIELD_TYPE.DATE) {
      let t2 = { ...n2, type: enums.FIELD_TYPE.DATE, ...k(e) ? { description: k(e) } : {} };
      return t2;
    }
    let s3 = { ...n2, type: enums.FIELD_TYPE.TEXT };
    return s3;
  }
  if ("SELECT" === e.tagName) {
    let t2 = xpath.getOrderedNodes("./option", e);
    w2 = t2.reduce((e2, t3) => {
      let r3 = t3.textContent?.trim();
      return !utils.isEmpty(r3) && t3.getAttribute("value") && e2.push(r3), e2;
    }, []);
    let r2 = { type: enums.FIELD_TYPE.SELECT, label: u2, required: !!v2, $input: e, $label: y2, options: w2 };
    return r2;
  }
  return null;
}
function X(e) {
  let t = e;
  if (!t.id) return "";
  let r = document.querySelector(`[for="${t.id}"]`);
  return r?.innerText?.trim() || "";
}
function J(e) {
  if (e.type === enums.FIELD_TYPE.SECTION || e.type === enums.FIELD_TYPE.EDUCATION || e.type === enums.FIELD_TYPE.EMPLOYMENT) {
    let t = {};
    for (let r of e.children) t[r.label] = J(r);
    return t;
  }
  if (e.type === enums.FIELD_TYPE.CHECKBOX) return e.$checkboxs.filter((e2) => e2.checked).map(X).filter(Boolean);
  if (e.type === enums.FIELD_TYPE.DATE) {
    let t = e.$input;
    return b(t) ? x(t) : "value" in t ? t.value ?? t.textContent?.trim() ?? "" : t.textContent?.trim() ?? "";
  }
  if (e.type === enums.FIELD_TYPE.SELECT) {
    let t = e.$input;
    return t.selectedOptions?.[0]?.textContent?.trim() || t.value || "";
  }
  if (e.type === enums.FIELD_TYPE.DROPDOWN) {
    let t = e.$input;
    return t.value || t.getAttribute("value") || t.textContent?.trim() || "";
  }
  if ("$input" in e && e.$input) {
    let t = e.$input;
    return t.value ?? t.textContent?.trim() ?? "";
  }
  return "";
}
async function getFormSnapshot(e) {
  let t = {}, r = [], n = [];
  for (let o2 of e) {
    if (o2.type === enums.FIELD_TYPE.EDUCATION) {
      r.push(J(o2));
      continue;
    }
    if (o2.type === enums.FIELD_TYPE.EMPLOYMENT) {
      n.push(J(o2));
      continue;
    }
    t[o2.label] = J(o2);
  }
  return { ...t, education: r, employment: n };
}

export {
  extractInput,
  extractRules,
  getCwsV2CoverLetterTextarea,
  getFormSnapshot,
  getTaleoTypeIndex,
  handleDuplicateHardcodeItemLabel,
}
