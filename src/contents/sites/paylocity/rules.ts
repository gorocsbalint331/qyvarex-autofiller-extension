// @ts-nocheck
/**
 * Paylocity — form rule extraction (regular, education, employment, references).
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as operations from "./operations.ts"
import * as dateHelpers from "./date.ts"

let TEXT_INPUT_SELECTOR = 'input[type="text"], textarea', PAYLOCITY_GPA_DESCRIPTION = "Return GPA as numbers only, for example 3.88. Do not include a denominator such as /4.00.", PAYLOCITY_AVAILABLE_TO_START_DESCRIPTION = "Return the date in MM/DD/YYYY format.", SALARY_FIELD_LABELS = {
  "info.minimumDesiredSalary": "Minimum Desired Salary",
  "info.maximumDesiredSalary": "Maximum Desired Salary"
}, REFERENCES_SECTION_SELECTOR = "#pcty-wr-apply-references", REFERENCE_FIELD_DESCRIPTION = "This is a reference contact field. Use the applicant's professional or personal reference information; do not use the applicant's own personal info.", REFERENCE_FIELD_ORDER = ["name", "email", "phone", "referenceType", "yearsKnown"], REFERENCE_FIELD_LABELS = {
  name: "Name",
  email: "Email Address",
  phone: "Phone Number",
  referenceType: "Personal or Work Reference?",
  yearsKnown: "Years Known"
};
async function getRules(e = false) {
  await prefetchAllSelectOptions(), await delay.delay(300);
  let t = [], r = document.body, n = ["#pcty-wr-apply-education", "#pcty-wr-apply-workhistory", REFERENCES_SECTION_SELECTOR], o2 = extractRulesFromRoot(r, [], n);
  t.push(...o2);
  let i2 = getReferenceRules();
  t.push(...i2);
  let l2 = await getEduRules({
    maxGroups: 1
  });
  t.push(...l2);
  let s2 = await getExpRules({
    maxGroups: 1
  });
  return (t.push(...s2), 0 !== t.length || e) ? t : (await delay.delay(1e3), await getRules(true));
}
function getReferenceRules() {
  let e = document.querySelector(REFERENCES_SECTION_SELECTOR);
  if (!e || !isVisibleElement(e)) return [];
  let t = /* @__PURE__ */ new Map(), r = [
    ...queryTextInputs(e),
    ...Array.from(e.querySelectorAll('.rw-dropdownlist[role="combobox"]')),
    ...Array.from(e.querySelectorAll('[id*="-select-wrapper"]'))
  ];
  return r.forEach((e2) => {
    if (!isVisibleElement(e2)) return;
    let r2 = parseReferenceControlId(e2.id || "");
    if (!r2) return;
    let n = buildReferenceFieldRule(e2, r2.field, r2.index), o2 = t.get(r2.index) || /* @__PURE__ */ new Map();
    o2.set(r2.field, n), t.set(r2.index, o2);
  }), Array.from(t.entries()).sort(([e2], [t2]) => e2 - t2).flatMap(([, e2]) => REFERENCE_FIELD_ORDER.flatMap((t2) => e2.has(
    t2
  ) ? [e2.get(t2)] : []));
}
function parseReferenceControlId(e) {
  let t = e.match(/^references\.(name|email|phone|referenceType|yearsKnown)\.(\d+)$/);
  return t ? {
    field: t[1],
    index: Number(t[2])
  } : null;
}
function buildReferenceFieldRule(e, t, r) {
  let n = `Reference ${r + 1} ${REFERENCE_FIELD_LABELS[t]}`, i2 = "INPUT" === e.tagName || "TEXTAREA" === e.tagName;
  return i2 ? {
    type: enums.FIELD_TYPE.TEXT,
    label: n,
    $input: e,
    required: isRequiredField(e),
    description: REFERENCE_FIELD_DESCRIPTION
  } : {
    type: enums.FIELD_TYPE.SELECT,
    label: n,
    $input: e,
    $label: e,
    required: isRequiredField(e),
    options: getSelectOptionsForControl(e),
    description: REFERENCE_FIELD_DESCRIPTION
  };
}
function isVisibleElement(e) {
  let t = e.ownerDocument?.defaultView || ("undefined" != typeof window ? window : null);
  if (!t || "function" != typeof t.getComputedStyle) return true;
  let r = t.getComputedStyle(e);
  return "none" !== r.display && "hidden" !== r.visibility && ("function" != typeof e.getClientRects || e.getClientRects().length > 0);
}
function inferFieldType(e) {
  return SALARY_FIELD_LABELS[e.id] ? enums.FIELD_TYPE.NUMBER : e.classList.contains("rw-dropdownlist") || e.id?.includes(
    "-select-wrapper"
  ) || e.closest('[id*="-select-wrapper"]') ? enums.FIELD_TYPE.SELECT : "radiogroup" === e.getAttribute("role") || e.querySelector('input[type="radio"]') ? enums.FIELD_TYPE.CHECKBOX : dateHelpers.inferPaylocityDateFormat(e) ? enums.FIELD_TYPE.DATE : "TEXTAREA" === e.tagName || "INPUT" === e.tagName && "text" === e.type ? enums.FIELD_TYPE.TEXT : null;
}
function isRequiredField(e) {
  if (e.hasAttribute("required")) return true;
  let t = e.closest('.form-group, [data-automation-id*="-wrapper"]');
  if (t?.classList.contains("form-required")) return true;
  let r = e.id || e.getAttribute("id");
  if (r) {
    let e2 = document.querySelector(`label[for="${r}"]`);
    if (e2) {
      let t2 = e2.querySelector("span > em");
      if (t2 && t2.textContent?.trim().toLowerCase().includes("required")) return true;
    }
  }
  let n = e.closest("label") || t?.querySelector("label");
  if (n) {
    let e2 = n.querySelector("span > em");
    if (e2 && e2.textContent?.trim().toLowerCase().includes("required")) return true;
  }
  return false;
}
function resolveFieldLabel(e) {
  if (!e) return "";
  if (SALARY_FIELD_LABELS[e.id]) return SALARY_FIELD_LABELS[e.id];
  let t = e.getAttribute("data-for");
  if (t) return t;
  let r = e.id || e.getAttribute("id");
  if (r) {
    let e2 = document.querySelector(`label[for="${r}"]`);
    if (e2) {
      let t2 = e2.querySelector('[data-automation-id*="-label-span"]');
      if (t2) {
        let e3 = t2.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
          /\s*\(optional\)\s*/gi,
          ""
        ).trim() || "";
        return e3;
      }
      let r2 = e2.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
        /\s*\(optional\)\s*/gi,
        ""
      ).trim() || "";
      return r2;
    }
  }
  let n = e.previousElementSibling;
  for (; n; ) {
    if ("LABEL" === n.tagName) {
      let e2 = n.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
        /\s*\(optional\)\s*/gi,
        ""
      ).trim() || "";
      if (e2) return e2;
    }
    break;
  }
  let o2 = e.closest(".form-group");
  if (o2) {
    let e2 = o2.querySelector(":scope > label");
    if (e2) {
      let t2 = e2.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
        /\s*\(optional\)\s*/gi,
        ""
      ).trim() || "";
      return t2;
    }
  }
  let i2 = e.closest('[data-automation-id*="-wrapper"]'), a2 = i2?.previousElementSibling;
  if (a2?.tagName === "LABEL") {
    let e2 = a2.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
      /\s*\(optional\)\s*/gi,
      ""
    ).trim() || "";
    if (e2) return e2;
  }
  let l2 = e.closest("label");
  if (l2) {
    let e2 = l2.querySelector('[data-automation-id*="-label-span"]');
    if (e2) {
      let t3 = e2.textContent?.trim() || "";
      return t3;
    }
    let t2 = l2.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
      /\s*\(optional\)\s*/gi,
      ""
    ).trim() || "";
    return t2;
  }
  let s2 = e.parentElement?.querySelector("label");
  if (s2) {
    let e2 = s2.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
      /\s*\(optional\)\s*/gi,
      ""
    ).trim() || "";
    return e2;
  }
  let u2 = e.getAttribute("data-automation-id");
  if (u2) {
    if (u2.includes("startDate")) return "Start Date";
    if (u2.includes("endDate")) return "End Date";
    let e2 = u2.replace(/^info|^public-site-/, "").replace(/-/g, " ").replace(/([A-Z])/g, " $1").trim();
    return e2;
  }
  return "";
}
function extractRulesFromRoot(e, t = [], r = [], n = {}) {
  let i2 = [], a2 = /* @__PURE__ */ new Set(), l2 = (e2) => r.some((t2) => e2.closest(t2)), s2 = e.querySelectorAll('.rw-dropdownlist[role="combobox"]');
  s2.forEach((r2) => {
    let s3 = r2;
    if (t.includes(s3.id) || a2.has(s3) || l2(s3) || hasDuplicatePlainInputWithSameId(e, s3)) return;
    let u2 = resolveFieldLabel(s3);
    if (shouldSkipLabel(u2, n)) return;
    let c3 = getSelectOptionsForControl(s3);
    i2.push({
      type: enums.FIELD_TYPE.SELECT,
      label: u2,
      $input: s3,
      $label: s3,
      required: isRequiredField(s3),
      options: c3
    }), a2.add(s3);
  });
  let c2 = e.querySelectorAll('[id*="-select-wrapper"]');
  c2.forEach((e2) => {
    let r2 = e2, s3 = r2.querySelector('input[type="text"]');
    if (!s3 || t.includes(s3.id) || a2.has(s3) || l2(r2)) return;
    let u2 = resolveFieldLabel(s3);
    if (shouldSkipLabel(u2, n)) return;
    let c3 = getSelectOptionsForControl(r2);
    logStateResolverOptions(u2, s3.id, c3), i2.push({
      type: enums.FIELD_TYPE.SELECT,
      label: u2,
      $input: r2,
      $label: r2,
      required: isRequiredField(s3),
      options: c3
    }), a2.add(s3);
  });
  let d2 = e.querySelectorAll(TEXT_INPUT_SELECTOR);
  d2.forEach((e2) => {
    let r2 = e2;
    if (!r2.id || t.includes(r2.id) || a2.has(r2) || l2(r2) || r2.closest('[id*="-select-wrapper"]') || r2.closest(".rw-dropdownlist") || "info.skills" === r2.id || r2.closest(".react-tagsinput"))
      return;
    let s3 = r2.closest(".text-question");
    if (s3?.querySelector("p label") && s3.querySelector("textarea") === r2) return;
    let u2 = resolveFieldLabel(r2);
    if (shouldSkipLabel(u2, n)) return;
    let c3 = inferFieldType(r2);
    if (c3 === enums.FIELD_TYPE.TEXT || c3 === enums.FIELD_TYPE.NUMBER || c3 === enums.FIELD_TYPE.DATE) {
      let e3 = buildFieldDescription(u2, r2);
      i2.push({
        type: c3,
        label: u2,
        $input: r2,
        required: isRequiredField(r2),
        ...e3 ? {
          description: e3
        } : {}
      }), SALARY_FIELD_LABELS[r2.id] && console.info("[Paylocity][SalaryRange] extracted field", {
        id: r2.id,
        label: u2,
        type: c3
      }), a2.add(r2);
    }
  });
  let p2 = e.querySelectorAll(
    'input[type="checkbox"]:not([role="switch"]):not(.category-filter-handler)'
  );
  p2.forEach((r2) => {
    let n2 = r2;
    if (!n2.id || t.includes(n2.id) || a2.has(n2) || l2(n2) || n2.closest(".multi-question")) return;
    let s3 = resolveFieldLabel(n2);
    if (!s3 && n2.id) {
      let t2 = e.querySelector(`label[for="${n2.id.replace(/\./g, "\\.")}"]`);
      t2 && (s3 = t2.textContent?.trim() || "");
    }
    s3 && (i2.push({
      type: enums.FIELD_TYPE.CHECKBOX,
      label: s3,
      $label: n2.nextElementSibling || n2.parentElement,
      $checkboxs: [n2],
      required: isRequiredField(n2),
      options: []
    }), a2.add(n2));
  });
  let m2 = e.querySelector("#info\\.skills");
  !m2 || a2.has(m2) || l2(m2) || (i2.push({
    type: enums.FIELD_TYPE.MULTI_SELECT,
    label: "Skills",
    $input: m2,
    required: false,
    options: []
  }), a2.add(m2));
  let h2 = e.querySelectorAll('[role="radiogroup"]');
  h2.forEach((e2) => {
    let t2 = e2;
    if (a2.has(t2) || l2(t2)) return;
    let r2 = Array.from(t2.querySelectorAll('input[type="radio"]'));
    if (0 === r2.length) return;
    let n2 = t2.getAttribute("data-automation-id")?.replace(/^info\./, "").replace(
      /([A-Z])/g,
      " $1"
    ).trim() || "";
    if (!n2) return;
    let s3 = r2.map((e3) => e3.value).filter(Boolean);
    i2.push({
      type: enums.FIELD_TYPE.CHECKBOX,
      label: n2,
      $label: t2,
      $checkboxs: r2,
      required: false,
      options: s3
    }), a2.add(t2);
  });
  let g2 = e.querySelectorAll(".multi-question");
  g2.forEach((e2) => {
    if (l2(e2)) return;
    let t2 = e2.querySelector("p span.type-semibold");
    if (!t2) return;
    let r2 = Array.from(e2.querySelectorAll('input[type="radio"], input[type="checkbox"]'));
    if (0 === r2.length || r2.some((e3) => a2.has(e3))) return;
    let n2 = r2.map((t3) => {
      let r3 = e2.querySelector(`label[for="${t3.id}"]`);
      return r3?.textContent?.trim() || "";
    }).filter(Boolean);
    i2.push({
      type: enums.FIELD_TYPE.CHECKBOX,
      label: t2.textContent?.trim() || "",
      $checkboxs: r2,
      $label: t2,
      required: e2.textContent?.includes("(required)") || false,
      options: n2
    }), r2.forEach((e3) => a2.add(e3));
  });
  let b2 = e.querySelectorAll(".text-question");
  return b2.forEach((e2) => {
    if (l2(e2)) return;
    let t2 = e2.querySelector("p label"), r2 = e2.querySelector("textarea");
    if (!t2 || !r2 || a2.has(r2)) return;
    let n2 = t2.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
      /\s*\(optional\)\s*/gi,
      ""
    ).trim() || "";
    i2.push({
      type: enums.FIELD_TYPE.TEXT,
      label: n2,
      $input: r2,
      $label: t2,
      required: /\(\s*required\s*\)/i.test(e2.textContent || "")
    }), a2.add(r2);
  }), i2;
}
async function getEduRules(e = {}) {
  let t = [], r = document.querySelector("#pcty-wr-apply-education");
  if (!r) return t;
  let n = Array.from(r.querySelectorAll(".education-history-group")), i2 = "number" == typeof e.maxGroups ? n.slice(0, e.maxGroups) : n;
  for (let e2 = 0; e2 < i2.length; e2++) {
    let r2 = i2[e2];
    await ensureEducationGraduateFieldsVisible(r2, e2), await prefetchSelectOptionsInRoot(r2, true);
    let n2 = extractRulesFromRoot(r2, [], [], {
      includeCountry: true
    }), a2 = findEducationStateTextInput(r2);
    a2 && (removeChildRulesByInputId(n2, a2.id), upsertChildRule(n2, {
      type: enums.FIELD_TYPE.TEXT,
      label: "State/Province",
      $input: a2,
      $label: a2,
      required: isRequiredField(a2),
      $container: r2
    }), removeEducationStateSelectRules(n2));
    let l2 = r2.querySelector(`#educationHistory\\.degreeId\\.${e2}`);
    if (l2) {
      let e3 = getSelectOptionsForControl(l2);
      upsertChildRule(n2, {
        type: enums.FIELD_TYPE.SELECT,
        label: "Degree Obtained",
        $input: r2,
        $label: l2,
        required: false,
        options: e3,
        $container: r2
      });
    }
    let s2 = r2.querySelector(`#txt-educationHistory-graduationDate-${e2}`);
    if (s2) {
      let e3 = buildFieldDescription("Graduation Date", s2);
      upsertChildRule(n2, {
        type: enums.FIELD_TYPE.TEXT,
        label: "Graduation Date",
        $input: r2,
        $label: s2,
        required: false,
        ...e3 ? {
          description: e3
        } : {},
        $container: r2
      });
    }
    n2.length > 0 && t.push({
      type: enums.FIELD_TYPE.EDUCATION,
      label: "Education",
      required: true,
      children: n2,
      options: serializeChildrenForOptions(n2)
    });
  }
  return t;
}
async function ensureEducationGraduateFieldsVisible(e, t) {
  let r = e.querySelector(`#educationHistory\\.didYouGraduate\\.${t}`);
  if (!r) return;
  let n = r.querySelector(".rw-input")?.textContent?.trim();
  if ("Yes" === n) {
    console.info("[Paylocity][Education] conditional fields already visible", {
      controlId: r.id,
      isExpanded: isComboboxExpanded(r)
    }), await openDegreeCombobox(e, t);
    return;
  }
  let o2 = r.querySelector("input, button") || r;
  await operations.dispatchClickSequence(o2);
  let i2 = r.getAttribute("aria-owns");
  if (i2) {
    let n2 = document.getElementById(i2);
    if (n2) {
      let i3 = Array.from(n2.querySelectorAll('li[role="option"]')), s2 = i3.find((e2) => e2.textContent?.trim().toLowerCase() === "yes");
      if (s2) {
        await operations.dispatchClickSequence(s2, 50, 300);
        let n3 = isComboboxExpanded(r, o2);
        n3 && await operations.dispatchClickSequence(o2), console.info(
          "[Paylocity][Education] conditional graduate selection",
          {
            controlId: r.id,
            selectedYes: true,
            expandedAfterSelection: n3,
            closeAttempted: n3,
            isExpandedAfterHandling: isComboboxExpanded(r, o2)
          }
        ), await delay.delay(200), await openDegreeCombobox(e, t);
      }
    }
  }
}
function isComboboxExpanded(e, t) {
  let r = e.getAttribute("aria-expanded") || t?.getAttribute("aria-expanded");
  return "true" === r;
}
async function openDegreeCombobox(e, t) {
  let r = e.querySelector(`#educationHistory\\.degreeId\\.${t}`);
  if (!r) return;
  let n = r.querySelector("input, button") || r;
  await operations.dispatchClickSequence(n, 50, 300), await operations.dispatchClickSequence(n);
}
async function getExpRules(e = {}) {
  let t = [], r = document.querySelector("#pcty-wr-apply-workhistory");
  if (!r) return t;
  let n = Array.from(r.querySelectorAll(".work-history-group")), i2 = "number" == typeof e.maxGroups ? n.slice(0, e.maxGroups) : n;
  for (let e2 = 0; e2 < i2.length; e2++) {
    let r2 = i2[e2], n2 = extractRulesFromRoot(r2, [], [], {
      includeCountry: true
    });
    n2.length > 0 && t.push({
      type: enums.FIELD_TYPE.EMPLOYMENT,
      label: "Employment",
      required: true,
      children: n2,
      options: serializeChildrenForOptions(n2)
    });
  }
  return t;
}
let SELECT_OPTIONS_CACHE = /* @__PURE__ */ new Map();
async function prefetchAllSelectOptions() {
  await prefetchSelectOptionsInRoot(document);
}
async function prefetchSelectOptionsInRoot(e, t = false) {
  let r = [
    '[role="combobox"][data-for]',
    ".rw-dropdownlist",
    '[id*="select-wrapper"]',
    'button[aria-haspopup="listbox"]'
  ], n = /* @__PURE__ */ new Set();
  for (let o2 of (r.forEach((t2) => {
    e.querySelectorAll(t2).forEach((e2) => {
      n.add(e2);
    });
  }), n)) {
    if (o2.hasAttribute("disabled") || "true" === o2.getAttribute("aria-disabled")) continue;
    let e2 = o2.querySelector("input");
    if ("public-site-address-country-select-wrapper" === o2.id || e2?.id === "public-site-address-country" || isEducationStateSelectDuplicate(o2) || t && getSelectOptionsForControl(o2).length > 0) continue;
    let r2 = o2.id || o2.getAttribute("data-for") || "", n2 = o2.querySelector("input, button") || o2;
    await dispatchOpenCloseClicks(n2), await delay.delay(200);
    let i2 = collectSelectOptions(o2);
    i2.length > 0 && SELECT_OPTIONS_CACHE.set(r2, i2), await dispatchOpenCloseClicks(n2), await delay.delay(100);
  }
  await delay.delay(300);
}
async function dispatchOpenCloseClicks(e) {
  let t = ["mousedown", "mouseup", "click"];
  for (let r of t) e.dispatchEvent(new MouseEvent(r, {
    bubbles: true,
    cancelable: true,
    view: window
  })), await delay.delay(50);
}
function collectSelectOptions(e) {
  let t = /* @__PURE__ */ new Set(), r = e.id || e.getAttribute("data-for") || "", n = (e2) => {
    e2 && e2.querySelectorAll('li[role="option"], [role="option"]').forEach((e3) => {
      let r2 = e3.textContent?.trim();
      r2 && "--" !== r2 && t.add(r2);
    });
  };
  n(e);
  let o2 = e.getAttribute("aria-owns") || e.getAttribute("aria-controls");
  if (o2 && n(document.getElementById(o2)), e.id) {
    let t2 = e.id, r2 = [`${t2}__listbox`, `${t2}-listbox`, `${t2}_listbox`];
    r2.forEach((e2) => n(document.getElementById(e2)));
  }
  document.querySelectorAll('[role="listbox"]').forEach((e2) => {
    let t2 = e2.getAttribute("data-for") || e2.id;
    t2 && (r.includes(t2) || t2.includes(r)) && n(e2);
  });
  let i2 = r.replace(/-select-wrapper$/, "");
  return document.querySelectorAll('[id*="dropdown-list-container"]').forEach((e2) => {
    e2.id.includes(i2) && e2.querySelectorAll("div[title]").forEach((e3) => {
      let r2 = e3.getAttribute("title")?.trim();
      r2 && "--" !== r2 && t.add(r2);
    });
  }), Array.from(t);
}
function mergeOptionLists(e = [], t = []) {
  let r = /* @__PURE__ */ new Set();
  return [...e, ...t].forEach((e2) => {
    let t2 = e2?.trim();
    t2 && r.add(t2);
  }), Array.from(r);
}
function upsertChildRule(e, t) {
  let r = e.findIndex((e2) => e2.type === t.type && e2.label === t.label);
  if (-1 === r) {
    e.push(t);
    return;
  }
  let n = e[r], o2 = t;
  e[r] = {
    ...n,
    ...o2,
    options: mergeOptionLists(n.options, o2.options)
  };
}
function removeChildRulesByInputId(e, t) {
  for (let r = e.length - 1; r >= 0; r--) getRuleInputId(e[r]) === t && e.splice(r, 1);
}
function getRuleInputId(e) {
  let t = e.$input;
  return t?.id || "";
}
function findEducationStateTextInput(e) {
  return queryTextInputs(e).find((e2) => isEducationStateInputId(e2.id || "")) || null;
}
function isEducationStateInputId(e) {
  return /^educationHistory\.state\.\d+$/.test(e);
}
function removeEducationStateSelectRules(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    r.type === enums.FIELD_TYPE.SELECT && (isEducationStateInputId(getRuleInputId(r)) || "State" === r.label) && e.splice(t, 1);
  }
}
function shouldSkipLabel(e, t) {
  return !e || "Country" === e && !t.includeCountry;
}
function logStateResolverOptions(e, t, r) {
  /^State(?:\/Province)?$/i.test(e.trim()) && console.info(
    `[Paylocity][State] resolver options captured controlId=${t || "unknown"} optionCount=${r.length}`
  );
}
function isSelectLikeControl(e) {
  if (!isEducationStateSelectControl(e) || "INPUT" === e.tagName || "TEXTAREA" === e.tagName) return false;
  let t = e.getAttribute("data-for") || "";
  return e.classList.contains("rw-dropdownlist") || "combobox" === e.getAttribute("role") || e.id.includes("-select-wrapper") || "State" === t;
}
function isEducationStateSelectDuplicate(e) {
  if (!isSelectLikeControl(e)) return false;
  let t = e.closest(".education-history-group") || document.body;
  return hasDuplicatePlainInputWithSameId(t, e);
}
function isEducationStateSelectControl(e) {
  let t = e.id || "", r = e.getAttribute("aria-owns") || e.getAttribute("aria-controls") || "";
  return isEducationStateInputId(t) || /^educationHistory\.state\.\d+(__listbox|-listbox|_listbox)$/.test(r);
}
function hasDuplicatePlainInputWithSameId(e, t) {
  return !!t.id && queryTextInputs(e).some((e2) => e2.id === t.id && e2 !== t && !e2.closest(".rw-dropdownlist") && !e2.closest('[id*="-select-wrapper"]'));
}
function serializeChildrenForOptions(e) {
  return e.map((e2) => {
    let t = e2, r = {
      type: t.type,
      label: t.label
    };
    return t.options?.length && (r.options = t.options), t.description && (r.description = t.description), r;
  });
}
function buildFieldDescription(e, t) {
  let r = e.trim();
  if (/^Minimum Desired Salary$/i.test(r))
    return "Return the minimum desired salary as digits only, without currency symbols, commas, or units.";
  if (/^Maximum Desired Salary$/i.test(r))
    return "Return the maximum desired salary as digits only, without currency symbols, commas, or units.";
  if (/^GPA$/i.test(r)) return PAYLOCITY_GPA_DESCRIPTION;
  let n = t && dateHelpers.inferPaylocityDateFormat(t);
  return n ? (console.info("[Paylocity][Date] rule format inferred", {
    label: r,
    controlId: t.id,
    controlType: t.getAttribute("type") || t.type || null,
    placeholder: t.getAttribute("placeholder") || t.placeholder || null,
    dateFormat: n
  }), `Return the date in ${n} format.`) : /^Available to Start$/i.test(r) ? PAYLOCITY_AVAILABLE_TO_START_DESCRIPTION : void 0;
}
function getSelectOptionsForControl(e) {
  let t = e.id || e.getAttribute("data-for") || "";
  return SELECT_OPTIONS_CACHE.has(t) ? SELECT_OPTIONS_CACHE.get(t) : collectSelectOptions(e);
}
function getSubmitButtonText() {
  let e = xpath.getFirstOrderedNode(".//button[@id='btn-submit']");
  return e && e.textContent?.trim() || "";
}
function normalizeSnapshotScalar(e) {
  if (null == e) return "";
  if (Array.isArray(e)) return e.map(normalizeSnapshotScalar).filter(Boolean).join(", ");
  let t = String(e).trim();
  return "--" === t ? "" : t;
}
function normalizeSnapshotOption(e) {
  if ("string" == typeof e) return normalizeSnapshotScalar(e);
  if (e && "object" == typeof e) {
    let t = e;
    return normalizeSnapshotScalar(t.label ?? t.name ?? t.value);
  }
  return "";
}
function readNestedInputValue(e) {
  let t = e?.querySelector?.(
    'input:not([type="hidden"]):not([type="file"]):not([type="button"]):not([type="submit"]), textarea'
  );
  return normalizeSnapshotScalar(t?.value);
}
function readControlSnapshotValue(e) {
  if (!e) return "";
  let t = readRwInputDisplay(e);
  if (t) return t;
  let r = normalizeSnapshotScalar(e.value);
  if (r) return r;
  let n = readNestedInputValue(e);
  if (n) return n;
  let o2 = Array.from(e.selectedOptions || []).map((e2) => e2.textContent || e2.value).map(normalizeSnapshotScalar).filter(
    Boolean
  );
  return o2.length > 0 ? o2.join(", ") : normalizeSnapshotScalar(e.textContent);
}
function readCheckboxSnapshotValue(e) {
  let t = e, r = t.$checkboxs || (Array.isArray(t.$input) ? t.$input : t.$input ? [t.$input] : []), n = r.filter(Boolean), o2 = n.findIndex((e2) => {
    let t2 = e2.checked;
    return true === t2 || e2.getAttribute?.("aria-checked") === "true";
  });
  if (o2 < 0) return "";
  let i2 = normalizeSnapshotOption(t.options?.[o2]);
  if (i2) return i2;
  let a2 = readControlSnapshotValue(n[o2]);
  return a2 && "on" !== a2.toLowerCase() ? a2 : a2 || "true";
}
function readSkillsTags(e) {
  let t = e?.closest(".react-tagsinput");
  return t ? Array.from(t.querySelectorAll(".react-tagsinput-tag")).map((e2) => {
    let t2 = e2.querySelector(".react-tagsinput-remove")?.textContent || "", r = e2.textContent || "";
    return t2 && r.endsWith(t2) ? r.slice(0, -t2.length).trim() : r.trim();
  }).filter(Boolean) : [];
}
function readRuleSnapshotValue(e) {
  if (e.type === enums.FIELD_TYPE.CHECKBOX || e.type === enums.FIELD_TYPE.RADIO || e.type === enums.FIELD_TYPE.RADIOGROUP) return readCheckboxSnapshotValue(e);
  let t = e.$input;
  return "skills" === e.label.trim().toLowerCase() && t?.id === "info.skills" ? readSkillsTags(t) : readControlSnapshotValue(t);
}
function mergeRuleSnapshots(e, t = []) {
  t.forEach((t2) => {
    if (!t2?.label || t2.type === enums.FIELD_TYPE.EDUCATION || t2.type === enums.FIELD_TYPE.EMPLOYMENT || t2.type === enums.FIELD_TYPE.SECTION) return;
    let r = readRuleSnapshotValue(t2);
    (Array.isArray(r) ? r.length > 0 : !!r) && (e[t2.label] = r);
  });
}
function getFormSnapshot(e = []) {
  let t = {}, r = [
    "info.firstName",
    "info.lastName",
    "info.middleName",
    "info.preferredName",
    "info.email",
    "info.cellPhone",
    "info.phone",
    "info.linkedIn",
    "info.referredBy"
  ];
  r.forEach((e2) => {
    let r2 = document.getElementById(e2);
    if (r2 && r2.value) {
      let n2 = e2.split(".")[1];
      t[n2] = r2.value;
    }
  });
  let n = [
    "public-site-address-address-1",
    "public-site-address-address-2",
    "public-site-address-city",
    "public-site-address-county",
    "public-site-address-zip"
  ];
  n.forEach((e2) => {
    let r2 = document.getElementById(e2);
    r2 && r2.value && (t[e2.replace("public-site-address-", "")] = r2.value);
  });
  let o2 = document.querySelector("#pcty-wr-apply-workhistory");
  if (o2) {
    let e2 = o2.querySelectorAll(".work-history-group");
    t.employment = Array.from(e2).map((e3, t2) => {
      let r2 = {}, n2 = e3.querySelector(`#workHistory\\.companyName\\.${t2}`);
      n2 && (r2["Company Name"] = n2.value);
      let o3 = e3.querySelector(`#workHistory\\.position\\.${t2}`);
      return o3 && (r2.Position = o3.value), r2;
    });
  }
  let i2 = document.querySelector("#pcty-wr-apply-education");
  if (i2) {
    let e2 = i2.querySelectorAll(".education-history-group");
    t.education = Array.from(e2).map((e3, t2) => {
      let r2 = {}, n2 = e3.querySelector(`#educationHistory\\.name\\.${t2}`);
      n2 && (r2["School Name"] = n2.value);
      let o3 = e3.querySelector(`#educationHistory\\.areaOfStudy\\.${t2}`);
      o3 && (r2["Area of Study"] = o3.value);
      let i3 = e3.querySelector(`#educationHistory\\.country\\.${t2}`), a2 = readRwInputDisplay(i3);
      a2 && (r2.Country = a2);
      let l2 = e3.querySelector(`#educationHistory\\.city\\.${t2}`);
      l2?.value && (r2.City = l2.value);
      let s2 = e3.querySelector(`#educationHistory\\.state\\.${t2}`), u2 = findInputByIdInRoot(e3, `educationHistory.state.${t2}`) || s2, c2 = resolveFieldLabel(u2), d2 = readFlexibleControlValue(u2);
      return d2 && (r2[c2 || "State/Province"] = d2), r2;
    });
  }
  return mergeRuleSnapshots(t, e), t;
}
function readRwInputDisplay(e) {
  let t = e?.querySelector(".rw-input")?.textContent?.trim() || "";
  return "--" === t ? "" : t;
}
function readFlexibleControlValue(e) {
  return e ? e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? e.value?.trim() || "" : readRwInputDisplay(e) : "";
}
function findInputByIdInRoot(e, t) {
  return queryTextInputs(e).find((e2) => e2.id === t) || null;
}
function queryTextInputs(e) {
  return Array.from(e.querySelectorAll(TEXT_INPUT_SELECTOR));
}

export {
  PAYLOCITY_AVAILABLE_TO_START_DESCRIPTION,
  PAYLOCITY_GPA_DESCRIPTION,
  getEduRules,
  getExpRules,
  getFormSnapshot,
  getRules,
  getSubmitButtonText,
}
