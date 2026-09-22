// @ts-nocheck
/**
 * BrassRing DOM fill operations (inputs, selects, autocomplete, uploads, composites).
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as dayjs from "dayjs"
import * as messaging from "@plasmohq/messaging"
import * as filler from "../../shared/filler.js"
import * as answerMethods from "../../methods/answer.js"
import * as cancellation from "../../methods/cancellation.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as delay from "../../../utils/delay.js"

const dayjsDefault = { default: dayjs }
const IMMERSIVE_TRANSLATE_SELECTOR = ".immersive-translate-target-wrapper, [data-immersive-translate-translation-element-mark]"
const FIELD_CONTAIN_SELECTOR = ".fieldcontain"
const ATTACHMENT_CATEGORY_SELECTOR = "#AttachementCatagory"
const LETTER_OF_RECOMMENDATION_LABEL = "Letter of Recommendation"
const SECTION_CONFIG = { education: { addSelector: "#addEdu, a[aria-label*='Education history']", listSelector: "ul.educationList, ul[class*='educationList'], ul[aria-label^='Education history']", removeClickToken: "addRemoveEducation", updateClickToken: "updateEducation", doneContainerSelector: ".eduButtonContainer", maxCount: 3 }, experience: { addSelector: "#addExp, a[aria-label*='Work experience']", listSelector: "ul.experienceList, ul[class*='experienceList'], ul[aria-label^='Work experience'], ul[aria-label^='Experience']", removeClickToken: "addRemoveExperience", updateClickToken: "updateExperience", doneContainerSelector: ".expButtonContainer, .experienceButtonContainer", maxCount: 7 } }
function normalizeChoiceText(e) {
  return e.replace(/\s+/g, " ").replace(/[^\p{L}\p{N}\s+#.-]/gu, "").trim().toLowerCase();
}
function getCleanText(e) {
  if (!e) return "";
  let t = e.cloneNode(true);
  return t.querySelectorAll(IMMERSIVE_TRANSLATE_SELECTOR).forEach((e10) => e10.remove()), (t.textContent || "").replace(/\s+/g, " ").trim();
}
function splitAnswerValues(e) {
  let t = Array.isArray(e) ? e : [e];
  return t.flatMap((e10) => String(e10 ?? "").split(/[\n,;]/)).map((e10) => e10.trim()).filter(Boolean);
}
const DEGREE_OPTION_HINTS = [{ pattern: /\b(juris\s+doctor|j\s*d)\b/, optionLabels: ["Juris Doctor"] }, { pattern: /\bprofessional\s+doctorate\b/, optionLabels: ["Professional Doctorate"] }, { pattern: /\b(ph\s*d|phd|doctorate|doctoral|doctor)\b/, optionLabels: ["Doctorate awarded"] }, { pattern: /\b(masters?|m\s*s|m\s*sc|msc|m\s*a|mba|m\s*b\s*a|m\s*eng|meng|m\s*se|mse)\b/, optionLabels: ["Master's degree"] }, { pattern: /\b(bachelors?|b\s*s|b\s*a|b\s*sc|bsc|b\s*eng|beng)\b/, optionLabels: ["Bachelor's degree"] }, { pattern: /\b(associates?|a\s*s|a\s*a)\b/, optionLabels: ["Associate's degree"] }, { pattern: /\bhigh\s+school\b/, optionLabels: ["High School"] }, { pattern: /\bpost\s+graduate\s+certificate\b/, optionLabels: ["Post Graduate Certificate"] }, { pattern: /\b(no\s+degree|none|no\s+final\s+certificate)\b/, optionLabels: ["No final certificate"] }, { pattern: /\b(certificate|certification|cert)\b/, optionLabels: ["Certificate"] }, { pattern: /\bdiploma\b/, optionLabels: ["Diploma"] }];
function normalizeDegreeText(e) {
  return normalizeChoiceText(String(e ?? "")).replace(/[./_-]+/g, " ").replace(/\s+/g, " ").trim();
}
function isDegreeRule(e) {
  return "degree" === normalizeChoiceText(String(e?.label ?? ""));
}
function getRuleOptionLabels(e) {
  return Array.isArray(e.options) ? e.options.map((e10) => "string" == typeof e10 ? e10 : e10 && "object" == typeof e10 && "label" in e10 && "string" == typeof e10.label ? e10.label : "").map((e10) => e10.trim()).filter(Boolean) : [];
}
function findExactOptionLabel(e, t) {
  let r = getRuleOptionLabels(e);
  if (0 === r.length) return null;
  for (let e10 of t) {
    let t10 = normalizeDegreeText(e10), n = r.find((e11) => normalizeDegreeText(e11) === t10);
    if (n) return n;
  }
  return null;
}
function degreeHintLabels(e) {
  let t = normalizeDegreeText(e);
  if (!t) return [];
  let r = DEGREE_OPTION_HINTS.find(({ pattern: e10 }) => e10.test(t));
  return r?.optionLabels || [];
}
function pushUniqueLabel(e, t) {
  let r = normalizeDegreeText(t);
  r && (e.some((e10) => normalizeDegreeText(e10) === r) || e.push(t));
}
export function buildBrassringFieldFillCandidates(e, t) {
  let r = splitAnswerValues(t);
  if (!isDegreeRule(e)) return r;
  let n = [];
  for (let t10 of r) {
    let r2 = degreeHintLabels(t10);
    0 !== r2.length && pushUniqueLabel(n, findExactOptionLabel(e, r2) || r2[0]);
  }
  for (let e10 of r) pushUniqueLabel(n, e10);
  return n;
}
function setNativeInputValue(e, t) {
  let r = e instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : e.value = t;
}
function parseLooseDateParts(e) {
  let t = e.trim(), r = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"], n = (e10) => {
    let t10 = e10.toLowerCase().replace(/\.$/, "").slice(0, 3), n2 = r.indexOf(t10);
    return n2 >= 0 ? n2 + 1 : 0;
  }, o2 = t.match(/^((?:19|20)\d{2})[-/.](0?[1-9]|1[0-2])(?:[-/.](0?[1-9]|[12]\d|3[01]))?$/);
  if (o2) return { year: Number(o2[1]), month: Number(o2[2]), day: Number(o2[3] || 1) };
  let i2 = t.match(/^(0?[1-9]|1[0-2])[-/.](?:(0?[1-9]|[12]\d|3[01])[-/.])?((?:19|20)\d{2})$/);
  if (i2) return { year: Number(i2[3]), month: Number(i2[1]), day: Number(i2[2] || 1) };
  let a2 = t.match(/^([A-Za-z]+)\.?\s+(?:(0?[1-9]|[12]\d|3[01]),?\s+)?((?:19|20)\d{2})$/);
  if (a2) {
    let e10 = n(a2[1]);
    if (e10 > 0) return { year: Number(a2[3]), month: e10, day: Number(a2[2] || 1) };
  }
  return null;
}
export function normalizeBrassringDateValueForInput(e, t) {
  if (!(e instanceof HTMLInputElement)) return t;
  let r = String(t ?? "").trim();
  if (!r) return r;
  let n = (e10) => e10.trim().replace(/m+/gi, (e11) => "M".repeat(e11.length)).replace(/d+/gi, (e11) => "D".repeat(e11.length)).replace(/y+/gi, (e11) => 2 === e11.length ? "YY" : "YYYY"), o2 = e.placeholder?.trim() || "", i2 = n(o2), l2 = !!i2 && i2.includes("M") && i2.includes("D") && i2.includes("Y"), s2 = !!i2 && /^[MY\s./-]+$/.test(i2) && i2.includes("M") && i2.includes("Y"), u2 = e.classList.contains("monthyear") || e.classList.contains("monthYear") || e.classList.contains("endmonthYear") || e.classList.contains("startmonthYear") || e.hasAttribute("custom-month-picker") || /year\/month|month\/year/i.test(e.getAttribute("aria-label") || e.getAttribute("name") || e.id || "") || s2;
  if (l2) {
    let e10 = parseLooseDateParts(r);
    return e10 ? dayjsDefault.default(`${e10.year}-${String(e10.month).padStart(2, "0")}-${String(e10.day).padStart(2, "0")}`).format(i2) : r;
  }
  if (!u2) return r;
  let c2 = dayjsDefault.default(r, [i2, "YYYY-MM-DD", "YYYY-M-D", "YYYY/M/D", "YYYY/MM/DD", "YYYY-MM", "YYYY-M", "YYYY/MM", "YYYY/M", "M/YYYY", "MM/YYYY", "M-YYYY", "MM-YYYY", "M.YYYY", "MM.YYYY", "MMM-YYYY", "MMMM-YYYY", "MMM YYYY", "MMMM YYYY", "MMM/YYYY", "MMMM/YYYY"].filter(Boolean), true);
  return c2.isValid() ? i2 ? c2.format(i2) : /[A-Za-z]/.test(r) ? c2.format("MMM-YYYY") : c2.format("M/YYYY") : r;
}
function getBackingSelectFromSearchInput(e) {
  let t = e.id?.endsWith("-input") ? e.id.slice(0, -6) : "";
  return t ? document.getElementById(t) : null;
}
function getOptionDisplayText(e) {
  return getCleanText(e) || e.label || e.value;
}
function isMeaningfulSelectOption(e) {
  let t = getOptionDisplayText(e).trim().toLowerCase();
  return !!(t && e.value.trim() && !["choose...", "select", "select one", "- select -", "-- select --"].includes(t));
}
function stripLeadingOptionNumber(e) {
  return e.replace(/^\d+(?:\.\d+)?\.?\s+/, "").trim();
}
function isChoiceTextMatch(e, t) {
  return choiceMatch.isExactChoiceMatch(e, t) || choiceMatch.isExactChoiceMatch(stripLeadingOptionNumber(e), stripLeadingOptionNumber(t));
}
function optionMatchesAnswers(e, t) {
  let r = t.map(normalizeChoiceText).filter(Boolean), n = normalizeChoiceText(getOptionDisplayText(e)), o2 = normalizeChoiceText(e.value);
  return r.some((e10) => !!e10 && (isChoiceTextMatch(n, e10) || isChoiceTextMatch(o2, e10)));
}
function findMatchingOption(e, t) {
  return Array.from(e.options).find((e10) => optionMatchesAnswers(e10, t)) || null;
}
function findOptionByExactLabel(e, t) {
  let r = normalizeChoiceText(t);
  return r && Array.from(e.options).find((e10) => normalizeChoiceText(getOptionDisplayText(e10)) === r) || null;
}
function isBinaryYesNoSelect(e) {
  let t = Array.from(e.options).filter(isMeaningfulSelectOption).map((e10) => normalizeChoiceText(getOptionDisplayText(e10)));
  return 2 === t.length && t.includes("yes") && t.includes("no");
}
function resolveLiveSelect(e) {
  if (e.id) {
    let t = document.getElementById(e.id);
    if (t instanceof HTMLSelectElement) return t;
  }
  if (e.name && "function" == typeof document.getElementsByName) {
    let t = Array.from(document.getElementsByName(e.name)).find((e10) => e10 instanceof HTMLSelectElement);
    if (t) return t;
  }
  return e;
}
function readSelectSnapshot(e) {
  let t = resolveLiveSelect(e), r = Array.from(t.options).find((e10) => e10.selected);
  return { id: t.id, name: t.name, value: t.value, isConnected: t.isConnected, selectedText: r ? getOptionDisplayText(r) : "", buttonText: t.id ? getCleanText(document.getElementById(`${t.id}-button_text`)) : "" };
}
function logBrassring(e, t) {
  console.info(`[BrassRingAutofill] ${e} ${JSON.stringify(t)}`);
}
async function waitForMatchingOption(e, t, r = 1500) {
  let n = findMatchingOption(e, t);
  if (n) return n;
  try {
    await observer.waitForCondition(() => {
      let r2 = findMatchingOption(e, t);
      return !!(r2 && !e.disabled);
    }, { timeout: r, interval: 100, observeTarget: document.body });
  } catch {
    return null;
  }
  return findMatchingOption(e, t);
}
function getSoleMeaningfulOption(e) {
  let t = Array.from(e.options).filter(isMeaningfulSelectOption);
  return 1 === t.length ? t[0] : null;
}
function isCountryRegionRule(e) {
  return /^country(?:\/region)?$/i.test(e.label.replace(/\s+/g, " ").trim());
}
function isStateProvinceLabelText(e) {
  let t = e.replace(/\s+/g, " ").trim().toLowerCase();
  return "state" === t || "province" === t || "state/province" === t || "state province" === t || "state/region/province" === t || "state region province" === t || "state/region/province/county" === t || "state region province county" === t || "current state" === t || "current province" === t || "current state/province" === t || "current state province" === t;
}
function shouldForceSoleCountryOption(e, t) {
  return e.required && isCountryRegionRule(e) && !!getSoleMeaningfulOption(t);
}
function getJQuery() {
  return window.jQuery || window.$;
}
function getFieldContainLabel(e) {
  return getCleanText(e.querySelector("label.ListView, label[id$='-label'], label"));
}
function getVisibleStateProvinceFields() {
  return Array.from(document.querySelectorAll(FIELD_CONTAIN_SELECTOR)).filter((e) => isElementVisible(e)).filter((e) => isStateProvinceLabelText(getFieldContainLabel(e)));
}
function getFieldControl(e) {
  let t = e.querySelector("input.ui-search-widget, input.ui-autocomplete-input, input[name^='visible-input-']");
  return t || e.querySelector("select");
}
function normalizeControlNameToken(e) {
  return e.replace(/^visible-input-/i, "").replace(/(^|[_-])(current|country|region|state|province)(?=([_-]|$))/gi, "$1").replace(/[_-]{2,}/g, "_").replace(/^[_-]+|[_-]+$/g, "").toLowerCase();
}
function getFieldControlNameTokens(e) {
  let t = getFieldControl(e), r = t instanceof HTMLInputElement ? getBackingSelectFromSearchInput(t) : t instanceof HTMLSelectElement ? t : null, n = [t?.id, t?.getAttribute("name") || "", r?.id || "", r?.getAttribute("name") || ""].filter(Boolean);
  return Array.from(new Set(n.map(normalizeControlNameToken).filter((e10) => e10.length > 0)));
}
export function findDependentStateProvinceField(e) {
  let t = getVisibleStateProvinceFields();
  if (0 === t.length) return null;
  let r = getFieldControlNameTokens(e);
  if (r.length > 0) {
    let e10 = t.find((e11) => {
      let t10 = getFieldControlNameTokens(e11);
      return t10.some((e12) => r.includes(e12));
    });
    if (e10) return e10;
  }
  let n = Array.from(document.querySelectorAll(FIELD_CONTAIN_SELECTOR)).filter((e10) => isElementVisible(e10)), o2 = n.indexOf(e);
  if (o2 >= 0) {
    let e10 = n.slice(o2 + 1).find((e11) => isStateProvinceLabelText(getFieldContainLabel(e11)));
    if (e10) return e10;
  }
  return t[0] || null;
}
function getRuleFieldContain(e) {
  let t = e.$input;
  return t instanceof HTMLElement ? t.closest(FIELD_CONTAIN_SELECTOR) : null;
}
async function waitForDependentStateAfterCountry(e) {
  if (!isCountryRegionRule(e)) return;
  let t = getRuleFieldContain(e);
  try {
    await observer.waitForCondition(() => {
      let e10 = t ? findDependentStateProvinceField(t) : getVisibleStateProvinceFields()[0] || null;
      if (!e10) return true;
      let r = getFieldControl(e10);
      if (!r || r.disabled) return false;
      if (r instanceof HTMLSelectElement) return getSelectOptions(r).length > 0;
      let n = getBackingSelectFromSearchInput(r);
      return n ? !n.disabled && getSelectOptions(n).length > 0 : !r.disabled;
    }, { timeout: 2000, interval: 100, observeTarget: document.body });
  } catch {
  }
  await delay.delay(200);
}
function triggerInputChange(e) {
  dom.triggerEvents(e, ["input", "change"]);
}
function clickCentered(e) {
  e.scrollIntoView({ block: "center", inline: "nearest" }), dom.triggerEvents(e, ["mousedown", "mouseup", "click"]);
}
function getSelectOptions(select) {
  return Array.from(select.options)
}
function isElementVisible(e) {
  if (!(e instanceof HTMLElement)) return false;
  let t = e;
  for (; t && t !== document.body; ) {
    let e10 = window.getComputedStyle(t);
    if ("none" === e10.display || "hidden" === e10.visibility || "true" === t.getAttribute("aria-hidden")) return false;
    t = t.parentElement;
  }
  return true;
}
export function getAutocompleteListboxId(e) {
  return e.getAttribute("aria-owns") || e.getAttribute("aria-controls") || (e.id ? `${e.id}_listbox` : "");
}
function getAutocompleteListbox(e) {
  let t = getAutocompleteListboxId(e);
  if (t) {
    let e10 = document.getElementById(t);
    if (e10) return e10;
  }
  return document.querySelector(".ui-autocomplete.ui-front, ul.ui-autocomplete, [role='listbox']");
}
function getAutocompleteOptionNodes(e) {
  let t = getAutocompleteListbox(e);
  if (!t) return [];
  let r = Array.from(t.querySelectorAll("li.ui-menu-item, .ui-menu-item-wrapper, [role='option'], li")), n = /* @__PURE__ */ new Set(), o2 = [];
  for (let e10 of r) {
    let t10 = e10.querySelector(".ui-menu-item-wrapper") || e10, r2 = getCleanText(t10);
    !r2 || n.has(t10) || (n.add(t10), o2.push(t10));
  }
  return o2;
}
export function findAutocompleteToggle(e) {
  return e.closest(FIELD_CONTAIN_SELECTOR)?.querySelector(".ui-icon-triangle-1-s, [ng-click*='blanketSearch']") || null;
}
async function waitForAutocompleteOptions(e, t, r = []) {
  let n = r.map(normalizeChoiceText).filter(Boolean);
  try {
    return await observer.waitForCondition(() => {
      let t10 = getAutocompleteOptionNodes(e);
      return 0 !== t10.length && (0 === n.length || t10.some((e10) => {
        let t11 = normalizeChoiceText(getCleanText(e10));
        return n.some((e11) => isChoiceTextMatch(t11, e11) || choiceMatch.isExactChoiceMatch(t11, e11) || choiceMatch.isExactChoiceMatch(e11, t11));
      }));
    }, { timeout: t, interval: 100, observeTarget: document.body }), true;
  } catch {
    return false;
  }
}
async function waitForAutocompleteListbox(e, t) {
  try {
    return await observer.waitForCondition(() => {
      let t10 = getAutocompleteListbox(e);
      return !!(t10 && isElementVisible(t10));
    }, { timeout: t, interval: 100, observeTarget: document.body }), true;
  } catch {
    return false;
  }
}
function typeAutocompleteQuery(e, t) {
  e.focus(), setNativeInputValue(e, ""), triggerInputChange(e), setNativeInputValue(e, t), e.dispatchEvent(new Event("input", { bubbles: true, composed: true })), e.dispatchEvent(new KeyboardEvent("keydown", { key: t.slice(-1) || "ArrowDown", bubbles: true })), e.dispatchEvent(new KeyboardEvent("keyup", { key: t.slice(-1) || "ArrowDown", bubbles: true })), e.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
}
async function openAndSearchAutocomplete(e, t) {
  e.focus(), e.dispatchEvent(new FocusEvent("focusin", { bubbles: true })), await delay.delay(50), typeAutocompleteQuery(e, t), await delay.delay(50);
  let r = window.jQuery || window.$, n = getBackingSelectFromSearchInput(e);
  try {
    r?.fn?.autocomplete && r(e).autocomplete("search", t);
  } catch {
  }
  if (n && await waitForMatchingOption(n, [t], 1200), await waitForAutocompleteListbox(e, 1200), await waitForAutocompleteOptions(e, 2500, [t])) return true;
  let o2 = findAutocompleteToggle(e);
  if (!o2) return false;
  clickCentered(o2), await delay.delay(150), e.focus(), typeAutocompleteQuery(e, t), await delay.delay(50);
  try {
    r?.fn?.autocomplete && r(e).autocomplete("search", t);
  } catch {
  }
  if (n && await waitForMatchingOption(n, [t], 1200), await waitForAutocompleteListbox(e, 1200), await waitForAutocompleteOptions(e, 1500, [t])) return true;
  try {
    r?.fn?.autocomplete && r(e).autocomplete("search", "");
  } catch {
  }
  return await waitForAutocompleteListbox(e, 1200), await waitForAutocompleteOptions(e, 1500, [t]);
}
async function selectAutocompleteAnswer(e, t, r = {}) {
  let { allowFirstFallback: n = true, allowSubstringMatch: i2 = true } = r;
  for (let r2 of t) {
    let t10 = await openAndSearchAutocomplete(e, r2);
    if (!t10) continue;
    let a2 = getAutocompleteOptionNodes(e);
    if (0 === a2.length) continue;
    let l2 = normalizeChoiceText(r2), s2 = a2.find((e10) => normalizeChoiceText(getCleanText(e10)) === l2) || (i2 ? a2.find((e10) => {
      let t11 = normalizeChoiceText(getCleanText(e10));
      return choiceMatch.isExactChoiceMatch(t11, l2);
    }) : null) || (n ? a2[0] : null);
    if (!s2) {
      closeAutocomplete(e);
      continue;
    }
    return clickCentered(s2), await delay.delay(250), true;
  }
  return e.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), e.blur(), false;
}
function closeAutocomplete(e) {
  let t = getJQuery();
  try {
    t?.fn?.autocomplete && t(e).autocomplete("close");
  } catch {
  }
  e.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), e.dispatchEvent(new KeyboardEvent("keyup", { key: "Escape", bubbles: true })), e.blur();
}
function getSelectmenuButton(e) {
  return e.id ? document.getElementById(`${e.id}-button`) : null;
}
function getSelectmenuPanel(e) {
  let t = getSelectmenuButton(e), r = t?.getAttribute("aria-owns") || t?.getAttribute("aria-controls") || (e.id ? `${e.id}-menu` : "");
  return r ? document.getElementById(r) : null;
}
function getSelectmenuOptionNodes(e) {
  let t = getSelectmenuPanel(e);
  if (!t) return [];
  let r = Array.from(t.querySelectorAll("li.ui-menu-item, .ui-menu-item-wrapper, [role='option'], li")), n = /* @__PURE__ */ new Set(), o2 = [];
  for (let e10 of r) {
    let t10 = e10.querySelector(".ui-menu-item-wrapper") || e10, r2 = getCleanText(t10);
    !r2 || n.has(t10) || (n.add(t10), o2.push(t10));
  }
  return o2;
}
function selectmenuOptionMatches(e, t, r) {
  let n = t.value, o2 = t.getAttribute("aria-label") || "", i2 = [getOptionDisplayText(t), n, o2, ...r].map(normalizeChoiceText).filter(Boolean), a2 = normalizeChoiceText(getCleanText(e));
  return i2.some((e10) => a2 === e10);
}
function refreshSelectmenu(e) {
  let t = getJQuery();
  try {
    t?.fn?.selectmenu && t(e).selectmenu("refresh");
  } catch {
  }
}
function commitNativeSelectOption(e, t) {
  e.focus(), t.selected = true, e.value = t.value, triggerInputChange(e);
  let r = getJQuery();
  try {
    r?.(e).trigger?.("change");
  } catch {
  }
  refreshSelectmenu(e), e.blur();
}
function closeSelectmenu(e) {
  let t = getSelectmenuButton(e), r = getJQuery();
  try {
    r?.fn?.selectmenu && r(e).selectmenu("close");
  } catch {
  }
  t?.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), t?.dispatchEvent(new KeyboardEvent("keyup", { key: "Escape", bubbles: true })), t?.blur();
}
async function clickSelectmenuOption(e, t, r) {
  let n = getSelectmenuButton(e);
  if (!n) return false;
  let o2 = isBinaryYesNoSelect(e) && r.some((e10) => /^(yes|no)$/i.test(e10));
  clickCentered(n), await observer.waitForCondition(() => getSelectmenuOptionNodes(e).length > 0, { timeout: 1500, interval: 100, observeTarget: document.body });
  let i2 = getSelectmenuOptionNodes(e).find((e10) => selectmenuOptionMatches(e10, t, r));
  return i2 ? (clickCentered(i2), await delay.delay(250), o2 && logBrassring("binary-select-menu-click-readback", { select: readSelectSnapshot(e), match: { value: t.value, text: getOptionDisplayText(t) }, targetConnected: i2.isConnected }), e.value !== t.value ? commitNativeSelectOption(e, t) : refreshSelectmenu(e), closeSelectmenu(e), o2 && logBrassring("binary-select-native-readback", { select: readSelectSnapshot(e), match: { value: t.value, text: getOptionDisplayText(t) } }), true) : (o2 && logBrassring("binary-select-menu-target-missing", { select: readSelectSnapshot(e), match: { value: t.value, text: getOptionDisplayText(t) }, menuOptions: getSelectmenuOptionNodes(e).map(getCleanText) }), closeSelectmenu(e), false);
}
async function fillNativeOrSelectmenu(e, t) {
  let r = findMatchingOption(e, t);
  if (!r) return false;
  let n = await clickSelectmenuOption(e, r, t);
  return !!n || (commitNativeSelectOption(e, r), await delay.delay(150), true);
}
function getRuleSelectElement(e) {
  return e.$input instanceof HTMLSelectElement ? e.$input : e.$input instanceof HTMLInputElement ? getBackingSelectFromSearchInput(e.$input) : null;
}
function findUniqueSelectByLabel(e) {
  let t = normalizeChoiceText(String(e.label || ""));
  if (!t || "function" != typeof document.querySelectorAll) return null;
  let r = Array.from(document.querySelectorAll(FIELD_CONTAIN_SELECTOR)).filter((e10) => normalizeChoiceText(getFieldContainLabel(e10)) === t).flatMap((e10) => Array.from(e10.querySelectorAll("select")).filter((e11) => !e11.disabled));
  return 1 === r.length ? r[0] : null;
}
function resolveSelectForRule(e) {
  let t = findUniqueSelectByLabel(e);
  if (t) return t;
  let r = getRuleSelectElement(e);
  return r ? resolveLiveSelect(r) : null;
}
function ruleOptionsIncludeAnswers(e, t) {
  return !!Array.isArray(e.options) && e.options.some((e10) => t.some((t10) => isChoiceTextMatch(String(e10 || ""), t10)));
}
function answersLookBinary(e) {
  return e.some((e10) => /^(yes|no)$/i.test(e10.trim()));
}
function ruleLooksBinary(e) {
  if (!Array.isArray(e.options)) return false;
  let t = e.options.map((e10) => normalizeChoiceText(String(e10 || ""))).filter(Boolean);
  return 2 === t.length && t.includes("yes") && t.includes("no");
}
async function waitForSelectMatch(e, t, r = 1500) {
  let n = resolveSelectForRule(e), o2 = answersLookBinary(t) || ruleLooksBinary(e);
  if (o2) {
    let r2 = e.$input;
    logBrassring("binary-select-live-resolve", { label: e.label, candidates: t, extractedOptions: Array.isArray(e.options) ? e.options : [], ruleInput: r2 instanceof HTMLElement ? { tagName: r2.tagName, id: r2.id, name: r2.getAttribute("name") || "", isConnected: r2.isConnected } : null, resolved: n ? readSelectSnapshot(n) : null });
  }
  return n && findMatchingOption(n, t) || !ruleOptionsIncludeAnswers(e, t) && !answersLookBinary(t) || await observer.waitForCondition(() => {
    let r2 = resolveSelectForRule(e);
    return !!r2 && (n = r2, !!(!r2.disabled && findMatchingOption(r2, t)));
  }, { timeout: r, interval: 50, observeTarget: document.body }), n;
}
function commitSearchBackingSelect(e, t, r) {
  let n = findMatchingOption(t, r);
  return !!n && (commitNativeSelectOption(t, n), setNativeInputValue(e, getOptionDisplayText(n)), triggerInputChange(e), true);
}
function searchInputMatchesOption(e, t, r) {
  let n = normalizeChoiceText(e.value), i2 = normalizeChoiceText(getOptionDisplayText(t)), a2 = [getOptionDisplayText(t), t.value, ...r].map(normalizeChoiceText).filter(Boolean);
  return !!n && a2.some((e10) => isChoiceTextMatch(n, e10) || isChoiceTextMatch(e10, n) || choiceMatch.isExactChoiceMatch(n, e10) || choiceMatch.isExactChoiceMatch(e10, n) || n === i2);
}
function getCommittedAutocompleteOption(e, t, r) {
  let n = findMatchingOption(t, r);
  return n && t.value === n.value && searchInputMatchesOption(e, n, r) ? n : null;
}
export function hasCommittedAutocompleteSelection(e, t, r) {
  return !!getCommittedAutocompleteOption(e, t, r);
}
async function waitForCommittedAutocomplete(e, t, r, n = 800) {
  let o2 = getCommittedAutocompleteOption(e, t, r);
  if (o2) return o2;
  try {
    await observer.waitForCondition(() => !!getCommittedAutocompleteOption(e, t, r), { timeout: n, interval: 50, observeTarget: document.body });
  } catch {
    return null;
  }
  return getCommittedAutocompleteOption(e, t, r);
}
function setSearchInputDisplay(e, t) {
  setNativeInputValue(e, t), triggerInputChange(e), e.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
}
async function fillSearchViaNativeSelect(e, t, r, n = 2000) {
  let o2 = await waitForMatchingOption(t, r, n);
  return !!o2 && (commitNativeSelectOption(t, o2), e.focus(), setSearchInputDisplay(e, getOptionDisplayText(o2)), e.blur(), true);
}
export async function fillInputTextField(e, t) {
  let r = normalizeBrassringDateValueForInput(e, t);
  e.focus(), e.dispatchEvent(new FocusEvent("focusin", { bubbles: true })), await delay.delay(50), setNativeInputValue(e, ""), triggerInputChange(e), await delay.delay(50), setNativeInputValue(e, r), e.dispatchEvent(new Event("input", { bubbles: true, composed: true })), e.dispatchEvent(new Event("change", { bubbles: true, composed: true })), await delay.delay(100), e.dispatchEvent(new FocusEvent("focusout", { bubbles: true })), e.blur();
}
export async function fillSelectField(e, t) {
  let r = buildBrassringFieldFillCandidates(e, t);
  if (0 === r.length) return;
  let n = e.$input, o2 = await waitForSelectMatch(e, r), i2 = !!(o2 && isBinaryYesNoSelect(o2) && (r.some((e10) => /^(yes|no)$/i.test(e10)) || ruleLooksBinary(e)));
  if (i2 && o2) {
    let t10 = findMatchingOption(o2, r);
    logBrassring("binary-select-fill-start", { label: e.label, candidates: r, match: t10 ? { value: t10.value, text: getOptionDisplayText(t10) } : null, select: readSelectSnapshot(o2) });
  }
  if (n instanceof HTMLInputElement) {
    let t10 = await selectAutocompleteAnswer(n, r, { allowFirstFallback: false });
    if (t10) {
      if (o2) {
        let t11 = await waitForCommittedAutocomplete(n, o2, r);
        if (!t11 && commitSearchBackingSelect(n, o2, r) && (t11 = await waitForCommittedAutocomplete(n, o2, r)), !t11) {
          let e10 = await fillNativeOrSelectmenu(o2, r);
          if (e10) {
            let e11 = findMatchingOption(o2, r);
            e11 && (setNativeInputValue(n, getOptionDisplayText(e11)), triggerInputChange(n), t11 = await waitForCommittedAutocomplete(n, o2, r));
          }
        }
        if (!t11) throw new filler.FillError(`(Select) Option click did not commit for "${e.label}"`);
      }
      closeAutocomplete(n), await waitForDependentStateAfterCountry(e);
      return;
    }
    if (o2) {
      let t11 = await fillNativeOrSelectmenu(o2, r);
      if (t11) {
        let t12 = findMatchingOption(o2, r);
        t12 && (setNativeInputValue(n, getOptionDisplayText(t12)), triggerInputChange(n)), closeAutocomplete(n), await waitForDependentStateAfterCountry(e);
        return;
      }
    }
  }
  if (o2) {
    let t10 = await fillNativeOrSelectmenu(o2, r);
    if (t10) {
      i2 && logBrassring("binary-select-fill-readback", { label: e.label, candidates: r, select: readSelectSnapshot(o2) }), await waitForDependentStateAfterCountry(e);
      return;
    }
  }
  if (i2 && o2 && logBrassring("binary-select-fill-no-match", { label: e.label, candidates: r, select: readSelectSnapshot(o2) }), o2 && shouldForceSoleCountryOption(e, o2)) {
    let t10 = getSoleMeaningfulOption(o2);
    if (t10) {
      commitNativeSelectOption(o2, t10), n instanceof HTMLInputElement && (setNativeInputValue(n, r[0] || getOptionDisplayText(t10)), triggerInputChange(n)), await waitForDependentStateAfterCountry(e);
      return;
    }
  }
  throw new filler.FillError(`(Select) Option not found for "${e.label}"`);
}
export async function fillSearchField(e, t) {
  let r = buildBrassringFieldFillCandidates(e, t);
  if (0 === r.length) return;
  let n = e.$input, o2 = getBackingSelectFromSearchInput(n), i2 = await selectAutocompleteAnswer(n, r, { allowFirstFallback: false });
  if (i2) {
    if (!o2) throw new filler.FillError(`(Search) Missing backing select for "${e.label}"`);
    let t10 = await waitForCommittedAutocomplete(n, o2, r);
    if (!t10 && commitSearchBackingSelect(n, o2, r) && (t10 = await waitForCommittedAutocomplete(n, o2, r)), !t10) {
      let e10 = await fillSearchViaNativeSelect(n, o2, r);
      e10 && (t10 = await waitForCommittedAutocomplete(n, o2, r));
    }
    if (!t10) throw new filler.FillError(`(Search) Option click did not commit for "${e.label}"`);
    closeAutocomplete(n), await waitForDependentStateAfterCountry(e);
    return;
  }
  if (o2) {
    let t10 = await fillSearchViaNativeSelect(n, o2, r);
    if (t10) {
      let t11 = await waitForCommittedAutocomplete(n, o2, r);
      if (!t11) throw new filler.FillError(`(Search) Select fallback did not commit for "${e.label}"`);
      closeAutocomplete(n), await waitForDependentStateAfterCountry(e);
      return;
    }
  }
  throw new filler.FillError(`(Search) Option not found for "${e.label}"`);
}
function getSelectionListTexts(e) {
  return Array.from(e.querySelectorAll(".selectionList li, [id$='_selection-list'] li")).map(getCleanText).filter(Boolean);
}
function findMultiselectAddButton(e) {
  return e.closest(FIELD_CONTAIN_SELECTOR)?.querySelector("a.addbutton, button.addbutton, [ng-click*='addButtonClickHandler']") || null;
}
async function addMultiselectOption(e, t, r, n, o2) {
  let i2 = getOptionDisplayText(r);
  e.focus(), setNativeInputValue(e, i2), triggerInputChange(e), r.selected = true, t.dispatchEvent(new Event("change", { bubbles: true }));
  let a2 = getJQuery();
  try {
    a2?.(t).trigger?.("change");
  } catch {
  }
  if (!n) return true;
  if (clickCentered(n), !o2) return await delay.delay(100), true;
  try {
    await observer.waitForCondition(() => getSelectionListTexts(o2).some((e10) => answerMethods.isMatched(e10, i2)), { timeout: 600, interval: 50, observeTarget: o2 });
  } catch {
    return false;
  }
  return true;
}
export async function fillMultiselectField(e, t) {
  let r = splitAnswerValues(t).slice(0, 20);
  if (0 === r.length) return;
  let n = e.$input, o2 = getRuleSelectElement(e);
  if (n instanceof HTMLSelectElement) {
    let e10 = r.map(normalizeChoiceText), t10 = new Set(e10);
    for (let e11 of Array.from(n.options)) e11.selected = t10.has(normalizeChoiceText(getOptionDisplayText(e11)));
    console.info(`[BrassRingAutofill] skills-native-select ${JSON.stringify({ candidateCount: r.length, selectedCount: Array.from(n.options).filter((e11) => e11.selected).length })}`), triggerInputChange(n), await delay.delay(150);
    return;
  }
  if (!(n instanceof HTMLInputElement)) return;
  let i2 = n.closest(FIELD_CONTAIN_SELECTOR), a2 = findMultiselectAddButton(n);
  for (let e10 of r) {
    let t10 = !!i2 && getSelectionListTexts(i2).some((t11) => answerMethods.isMatched(t11, e10));
    if (t10) continue;
    let r2 = o2 ? findOptionByExactLabel(o2, e10) : null;
    if (r2) {
      let e11 = await addMultiselectOption(n, o2, r2, a2, i2);
      if (e11) continue;
    }
    let l2 = await selectAutocompleteAnswer(n, [e10], { allowFirstFallback: false, allowSubstringMatch: false });
    !l2 && r2 && (setNativeInputValue(n, getOptionDisplayText(r2)), triggerInputChange(n), r2.selected = true, o2?.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(100)), l2 || r2 || (setNativeInputValue(n, e10), triggerInputChange(n)), a2 && (clickCentered(a2), await delay.delay(300)), console.info(`[BrassRingAutofill] skills-candidate-result ${JSON.stringify({ candidate: e10, result: l2 || r2 ? "exact-match-add" : "raw-add", addButtonFound: !!a2 })}`);
  }
  closeAutocomplete(n);
}
function getControlAssociatedLabel(e) {
  let t = e.id ? document.querySelector(`label[for="${e.id}"]`) : null;
  return getCleanText(t) || getCleanText(e.closest("label")) || getCleanText(e.nextElementSibling) || e.value;
}
function isTruthyCheckboxAnswer(e) {
  let t = normalizeChoiceText(e);
  return ["yes", "true", "checked", "agree", "i agree"].some((e10) => choiceMatch.isExactChoiceMatch(t, e10));
}
function isFalsyCheckboxAnswer(e) {
  let t = normalizeChoiceText(e);
  return ["no", "false", "unchecked", "not checked"].some((e10) => choiceMatch.isExactChoiceMatch(t, e10));
}
function findCheckboxByLabel(e, t) {
  return e.find((e10) => [getControlAssociatedLabel(e10), e10.value].some((e11) => isChoiceTextMatch(e11, t)));
}
function resolveYesNoRadio(e, t) {
  let r = findCheckboxByLabel(e, "Yes"), n = findCheckboxByLabel(e, "No");
  if (!r || !n) return;
  let i2 = t.some((e10) => ["yes", "true", "y", "1"].some((t10) => choiceMatch.isExactChoiceMatch(e10, t10))), a2 = t.some((e10) => ["no", "false", "n", "0"].some((t10) => choiceMatch.isExactChoiceMatch(e10, t10)));
  if (i2 !== a2) return i2 ? r : n;
}
function getCheckboxClickTargets(e) {
  let t = [e], r = (e10) => {
    e10 instanceof HTMLElement && !t.includes(e10) && t.push(e10);
  }, n = e.id ? document.querySelector(`label[for="${e.id}"]`) : null, o2 = e.closest("label"), i2 = e.closest(".ui-checkbox, .checkbox, li"), a2 = i2?.querySelector(".pseudocheckbox, [role='checkbox']") || e.parentElement?.querySelector(".pseudocheckbox, [role='checkbox']"), l2 = e.nextElementSibling, s2 = e.previousElementSibling, u2 = e.closest(".fieldcontain")?.querySelector("label");
  return [n, o2, a2, l2, s2, u2].forEach(r), t;
}
function getRadioClickTargets(e) {
  let t = [], r = (e10) => {
    e10 instanceof HTMLElement && !t.includes(e10) && t.push(e10);
  }, n = e.closest(".ui-radio"), o2 = n?.querySelector(".pseudoradio, [role='radio']") || e.parentElement?.querySelector(".pseudoradio, [role='radio']"), i2 = e.id ? document.querySelector(`label[for="${e.id}"]`) : null, a2 = Array.from(e.labels || []);
  return a2.forEach(r), r(i2), r(n?.querySelector("label")), r(o2), r(e.nextElementSibling), r(n), r(e), t;
}
async function ensureRadioChecked(e) {
  if (!e.checked) {
    for (let t of (e.scrollIntoView({ block: "center", inline: "nearest" }), e.focus(), getRadioClickTargets(e))) if (clickCentered(t), t.click(), await delay.delay(150), e.checked) {
      triggerInputChange(e);
      return;
    }
  }
}
async function setCheckboxChecked(e, t) {
  if (e.checked !== t) {
    for (let r of (e.scrollIntoView({ block: "center", inline: "nearest" }), e.focus(), getCheckboxClickTargets(e))) if (r.click(), await delay.delay(150), e.checked === t) {
      triggerInputChange(e);
      return;
    }
    e.checked = t, e.dispatchEvent(new Event("input", { bubbles: true, composed: true })), e.dispatchEvent(new Event("change", { bubbles: true, composed: true })), await delay.delay(100);
  }
}
export async function fillRadioGroupField(e, t) {
  let r = splitAnswerValues(t);
  if (0 === r.length) return false;
  let n = Array.from(e.$radioParent.querySelectorAll("input[type='radio']"));
  if (0 === n.length) return false;
  let o2 = n.find((e10) => {
    let t10 = getControlAssociatedLabel(e10), n2 = e10.value;
    return r.some((e11) => isChoiceTextMatch(t10, e11) || isChoiceTextMatch(n2, e11));
  });
  return o2 || (o2 = resolveYesNoRadio(n, r)), !!o2 && (o2.checked || await ensureRadioChecked(o2), o2.checked);
}
export async function fillCheckboxField(e, t) {
  let r = splitAnswerValues(t);
  if (0 === r.length) return false;
  let n = e.$checkboxs;
  if (0 === n.length) return false;
  if (1 === n.length) {
    let t10 = r.some((t11) => isTruthyCheckboxAnswer(t11) || answerMethods.isMatched(e.label, t11) || choiceMatch.isExactChoiceMatch(normalizeChoiceText(t11), normalizeChoiceText(e.label))), i3 = r.some(isFalsyCheckboxAnswer);
    return (!!t10 || !!i3) && (await setCheckboxChecked(n[0], t10), n[0].checked === t10);
  }
  let i2 = false;
  for (let e10 of n) {
    let t10 = getControlAssociatedLabel(e10), n2 = r.some((e11) => isChoiceTextMatch(t10, e11));
    n2 && (i2 = true), n2 && !e10.checked && await setCheckboxChecked(e10, true);
  }
  return i2;
}
export const BRASSRING_RESUME_LABEL = "R\xE9sum\xE9/CV"
const RESUME_SNAPSHOT_LABEL = "Resume/CV"
const RESUME_PARSER_SURFACE_SELECTOR = "[data-resume-parser-status], [data-parser-status], #resumewidget [role='status'], #resumewidget [aria-live], [id*='resume'][id*='pars'], [class*='resume'][class*='pars'], .ImportProfile [role='status'], .ImportProfile [aria-live]"
const RESUME_PARSER_TIMEOUT_MS = 12000
const RESUME_PARSER_INTERVAL_MS = 100
const RESUME_PARSER_QUIET_MS = 800
const RESUME_PARSER_NO_PARSER_GRACE_MS = 750
const SCALAR_INPUT_TYPES = /* @__PURE__ */ new Set(["text", "email", "tel", "search", "url", "number", "date"])
const runtimeElementIds = /* @__PURE__ */ new WeakMap()
let runtimeElementIdSeq = 0
function hashSignature(e) {
  let t = 2166136261;
  for (let r = 0; r < e.length; r++) t ^= e.charCodeAt(r), t = Math.imul(t, 16777619);
  return `${e.length}:${(t >>> 0).toString(16)}`;
}
function stableElementKey(e, t) {
  let r = [e.id, e.getAttribute("data-record-id"), e.getAttribute("data-id")].filter(Boolean).join("|");
  if (r) return `${e.tagName}:${r}`;
  let n = runtimeElementIds.get(e);
  return n || (n = ++runtimeElementIdSeq, runtimeElementIds.set(e, n)), `${e.tagName}:runtime-${n}:index-${t}`;
}
function isScalarFillControl(e) {
  if (!isElementVisible(e) || e.hidden) return false;
  let t = e.tagName.toLowerCase();
  if ("textarea" === t || "select" === t) return true;
  if ("input" !== t) return false;
  let r = (e.type || "text").toLowerCase();
  return SCALAR_INPUT_TYPES.has(r);
}
function captureScalarControls() {
  let e = Array.from(document.querySelectorAll("input, textarea, select")).filter(isScalarFillControl), t = e.map((e10, t10) => {
    let r = (e10.tagName.toLowerCase(), e10.value);
    return `${stableElementKey(e10, t10)}=${String(r ?? "")}`;
  });
  return { signature: hashSignature(t.join("\n")), count: e.length };
}
function captureStructuredRows() {
  let e = ["education", "experience"].flatMap((e10) => getSectionListElements(e10).filter((e11) => !sectionRowIsEditable(e11)).map((t10) => ({ kind: e10, row: t10 }))), t = e.map(({ kind: e10, row: t10 }, r) => `${e10}:${stableElementKey(t10, r)}`);
  return { signature: hashSignature(t.join("\n")), count: e.length };
}
function captureParserSurface() {
  let e = Array.from(document.querySelectorAll(RESUME_PARSER_SURFACE_SELECTOR)).filter(isElementVisible), t = "none", r = e.map((e10, r2) => {
    let n = stableElementKey(e10, r2), o2 = normalizeUploadText([e10.getAttribute("data-resume-parser-status"), e10.getAttribute("data-parser-status"), e10.getAttribute("aria-label"), e10.textContent].filter(Boolean).join(" ")), i2 = /(?:success|complete|completed|ready|imported|processed)/i.test(o2) ? "success" : /(?:parsing|processing|extracting|reading|importing|building)[\s\S]*(?:resume|cv|profile)|(?:resume|cv|profile)[\s\S]*(?:parsing|processing|extracting|reading|importing|building)/i.test(o2) ? "active" : "none";
    return "active" === i2 ? t = "active" : "success" === i2 && "none" === t && (t = "success"), `${n}:${i2}`;
  });
  return { signature: hashSignature(r.join("\n")), count: e.length, status: t };
}
export function captureBrassringResumeParserBaseline() {
  let e = captureScalarControls(), t = captureStructuredRows(), r = captureParserSurface();
  return { scalarSignature: e.signature, scalarControlCount: e.count, structuredSignature: t.signature, structuredRowCount: t.count, parserSurfaceSignature: r.signature, parserSurfaceCount: r.count, parserStatus: r.status, capturedAt: Date.now() };
}
function logResumeParserResult(e) {
  console.info(`[BrassRingAutofill] resume-parser ${JSON.stringify({ stage: "resume-parser-wait-complete", parserDetected: e.parserDetected, parserReady: e.parserReady, elapsedMs: e.elapsedMs, scalarControlCount: e.scalarControlCount, structuredRowCount: e.structuredRowCount, reason: e.reason })}`);
}
export async function waitForBrassringResumeParsingComplete(e, t = {}) {
  let r = t.timeoutMs ?? RESUME_PARSER_TIMEOUT_MS, n = t.intervalMs ?? RESUME_PARSER_INTERVAL_MS, o2 = t.quietMs ?? RESUME_PARSER_QUIET_MS, i2 = t.noParserGraceMs ?? RESUME_PARSER_NO_PARSER_GRACE_MS, a2 = Date.now(), l2 = e, s2 = "none" !== e.parserStatus, u2 = false, c2 = a2;
  for (; Date.now() - a2 < r; ) {
    let t10 = captureBrassringResumeParserBaseline(), r2 = Date.now(), d3 = t10.scalarSignature !== l2.scalarSignature, f3 = t10.structuredSignature !== l2.structuredSignature, m2 = t10.parserSurfaceSignature !== l2.parserSurfaceSignature || t10.parserStatus !== l2.parserStatus, h2 = t10.scalarSignature !== e.scalarSignature || t10.structuredSignature !== e.structuredSignature, g2 = "none" !== t10.parserStatus, b2 = g2 && t10.parserSurfaceCount > 0 && t10.parserSurfaceSignature !== e.parserSurfaceSignature, y2 = g2 && (t10.parserStatus !== e.parserStatus || 0 === e.parserSurfaceCount && t10.parserSurfaceCount > 0 || b2);
    if (g2 && (s2 = true), (h2 || b2 || y2) && (u2 = true, s2 = true), (d3 || f3 || m2) && (c2 = r2), u2 && "active" !== t10.parserStatus && r2 - c2 >= o2) {
      let e10 = { parserDetected: true, parserReady: true, elapsedMs: r2 - a2, reason: "parser-quiet", scalarControlCount: t10.scalarControlCount, structuredRowCount: t10.structuredRowCount };
      return logResumeParserResult(e10), e10;
    }
    if (!s2 && !u2 && r2 - a2 >= i2) {
      let e10 = { parserDetected: false, parserReady: true, elapsedMs: r2 - a2, reason: "no-parser-surface", scalarControlCount: t10.scalarControlCount, structuredRowCount: t10.structuredRowCount };
      return logResumeParserResult(e10), e10;
    }
    l2 = t10, await delay.delay(Math.max(1, n));
  }
  let d2 = captureBrassringResumeParserBaseline(), f2 = { parserDetected: s2, parserReady: false, elapsedMs: Date.now() - a2, reason: "parser-timeout", scalarControlCount: d2.scalarControlCount, structuredRowCount: d2.structuredRowCount };
  return logResumeParserResult(f2), f2;
}
function normalizeUploadText(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function queryFileInputs(e) {
  return Array.from(e.querySelectorAll("input[type='file']"));
}
function collectFileInputsIncludingFrames() {
  let e = queryFileInputs(document);
  for (let t of Array.from(document.querySelectorAll("iframe"))) try {
    let r = t.contentDocument || t.contentWindow?.document;
    if (!r) continue;
    e.push(...th(r));
  } catch {
  }
  return e;
}
function profileBuilderCalledFrom(e) {
  return "resume" === e ? "resume" : "coverletter";
}
function isProfileBuilderFrame(e, t) {
  let r = e.src || e.getAttribute("src") || "";
  if (!r) return false;
  try {
    let e10 = new URL(r, window.location.href);
    return /\/TGNewUI\/Profile\/Home\/ProfileBuilder$/i.test(e10.pathname) && (e10.searchParams.get("calledFrom") || "").toLowerCase() === profileBuilderCalledFrom(t);
  } catch {
    return false;
  }
}
function findProfileBuilderFrame(e) {
  return Array.from(document.querySelectorAll("iframe")).find((t) => isElementVisible(t) && isProfileBuilderFrame(t, e)) || null;
}
async function waitForProfileBuilderFrame(e) {
  let t = findProfileBuilderFrame(e);
  if (t) return t;
  try {
    await observer.waitForCondition(() => !!findProfileBuilderFrame(e), { timeout: 3000, interval: 100, observeTarget: document.body });
  } catch {
    return null;
  }
  return findProfileBuilderFrame(e);
}
function getFileInputIdentityText(e) {
  return normalizeUploadText([e.id, e.name, e.getAttribute("aria-label"), e.getAttribute("title")].filter(Boolean).join(" "));
}
function getFileInputContextText(e) {
  return normalizeUploadText(getCleanText(e.closest(".fieldcontain, .question, .upload, div")));
}
function textLooksLikeResume(e) {
  return (e.includes("resume") || e.includes("cv")) && !e.includes("cover letter");
}
function textLooksLikeCoverLetter(e) {
  return e.includes("cover letter");
}
function getImportProfileHeadingText(e) {
  return normalizeUploadText([e.getAttribute("aria-label"), getCleanText(e.querySelector("h1, h2, h3, h4, h5, h6"))].filter(Boolean).join(" "));
}
function importProfileMatchesKind(e, t) {
  let r = getImportProfileHeadingText(e);
  return "resume" === t ? textLooksLikeResume(r) : textLooksLikeCoverLetter(r);
}
function getImportProfileRoots() {
  return Array.from(document.querySelectorAll(".ImportProfile[role='main'], .ImportProfile.encompassingDiv, [role='main'][aria-label]")).filter(isElementVisible);
}
export function findVisibleUploadDialogInput(e) {
  for (let t of getImportProfileRoots()) {
    if (!importProfileMatchesKind(t, e)) continue;
    let r = Array.from(t.querySelectorAll("input[type='file']")).find((e10) => !e10.disabled);
    if (r) return r;
  }
  return null;
}
function fileInputMatchesKind(e, t) {
  let r = getFileInputIdentityText(e), n = getFileInputContextText(e), o2 = `${r} ${n}`;
  return "resume" === t ? textLooksLikeResume(o2) : textLooksLikeCoverLetter(o2);
}
function getResumeWidget() {
  return document.querySelector("#resumewidget.resumesection");
}
function getCoverLetterWidget() {
  return document.querySelector("#clwidget.coverlettersection");
}
function getAttachmentWidget() {
  return document.querySelector("#attachmentWidget.attachmentsWidget");
}
function getAttachmentCategorySelect() {
  return document.querySelector(ATTACHMENT_CATEGORY_SELECTOR);
}
function getAttachmentWidgetRoot() {
  return getAttachmentCategorySelect()?.closest("#attachmentWidget") || getAttachmentWidget();
}
function getLetterOfRecommendationWidget() {
  let e = getAttachmentWidgetRoot();
  if (!e) return null;
  let t = Array.from(e.querySelectorAll(".ui-widget"));
  return t.find((e10) => {
    let t10 = e10.querySelector("h1, h2, h3, h4, h5, h6");
    return normalizeChoiceText(getCleanText(t10)) === normalizeChoiceText(LETTER_OF_RECOMMENDATION_LABEL);
  }) || null;
}
function findLetterOfRecommendationOption(e) {
  return Array.from(e.options).find((e10) => optionMatchesAnswers(e10, [LETTER_OF_RECOMMENDATION_LABEL])) || null;
}
function hasLetterOfRecommendationCategory() {
  let e = getAttachmentCategorySelect();
  return !!(e && findLetterOfRecommendationOption(e));
}
async function selectLetterOfRecommendationCategory() {
  let e = getAttachmentCategorySelect();
  if (!e) return false;
  let t = findLetterOfRecommendationOption(e);
  if (!t) return false;
  if (e.value === t.value) return true;
  try {
    let r = await clickSelectmenuOption(e, t, [LETTER_OF_RECOMMENDATION_LABEL]);
    if (r) return true;
  } catch {
  }
  return commitNativeSelectOption(e, t), await delay.delay(250), true;
}
function getAddUploadLink(e) {
  if ("resume" === e) {
    let e10 = getResumeWidget()?.querySelector("#AddResumeLink");
    return e10 && isElementVisible(e10) ? e10 : null;
  }
  if ("coverLetter" === e) {
    let e10 = getCoverLetterWidget()?.querySelector("#AddCLLink");
    return e10 || (hasLetterOfRecommendationCategory() ? document.getElementById("AttachementCatagory-button") : null);
  }
  return null;
}
function getUploadSectionRoot(e) {
  return "resume" === e ? getResumeWidget() : "coverLetter" === e ? hasLetterOfRecommendationCategory() && getAttachmentWidgetRoot() || getCoverLetterWidget() : null;
}
function findExistingFileInput(e) {
  let t = findVisibleUploadDialogInput(e);
  if (t) return t;
  let r = getUploadSectionRoot(e), n = Array.from(r?.querySelectorAll("input[type='file']") || []), o2 = n.find((t10) => fileInputMatchesKind(t10, e)) || n[0];
  if (o2) return o2;
  let i2 = collectFileInputsIncludingFrames(), a2 = "resume" === e && 1 === i2.length && i2[0]?.ownerDocument === document ? i2[0] : null;
  return i2.find((t10) => fileInputMatchesKind(t10, e)) || a2;
}
async function openUploadAndFindInput(e) {
  let t = new Set(collectFileInputsIncludingFrames());
  if ("coverLetter" === e && hasLetterOfRecommendationCategory()) {
    let e10 = await selectLetterOfRecommendationCategory();
    if (e10) try {
      await observer.waitForCondition(() => collectFileInputsIncludingFrames().some((e12) => !t.has(e12)), { timeout: 2500, interval: 100, observeTarget: document.body });
      let e11 = collectFileInputsIncludingFrames().find((e12) => !t.has(e12)) || null;
      if (e11) return e11;
    } catch {
    }
  }
  if (findProfileBuilderFrame(e)) return null;
  let r = getAddUploadLink(e);
  if (!r) return null;
  let n = (e10) => {
    let t10 = e10.target;
    t10 instanceof HTMLInputElement && "file" === t10.type && e10.preventDefault();
  };
  document.addEventListener("click", n, true);
  try {
    clickCentered(r), await observer.waitForCondition(() => !!findVisibleUploadDialogInput(e) || collectFileInputsIncludingFrames().some((r2) => !t.has(r2) || fileInputMatchesKind(r2, e)), { timeout: 2000, interval: 100, observeTarget: document.body });
  } finally {
    document.removeEventListener("click", n, true);
  }
  return findVisibleUploadDialogInput(e) || collectFileInputsIncludingFrames().find((r2) => !t.has(r2) || fileInputMatchesKind(r2, e)) || null;
}
async function resolveUploadFileInput(e) {
  return findExistingFileInput(e) || await openUploadAndFindInput(e);
}
export function hasCoverLetterUploadSlot() {
  return !!(getCoverLetterWidget()?.querySelector("#CoverLetterHeading") && getAddUploadLink("coverLetter") || hasLetterOfRecommendationCategory());
}
function hasResumeHeading() {
  return !!getResumeWidget()?.querySelector("#ResumeHeading");
}
export function getResumeUploadState() {
  let e = hasResumeHeading(), t = !!getAddUploadLink("resume"), r = isUploadPresent("resume");
  return { hasSection: e, canUpload: t, uploaded: r };
}
export function hasResumeUploadSlot() {
  let e = getResumeUploadState();
  return e.hasSection && (e.canUpload || e.uploaded);
}
export function isCoverLetterRequired() {
  return hasCoverLetterUploadSlot();
}
function compactUploadText(e) {
  return normalizeUploadText(e).replace(/\s+/g, "");
}
function looksLikeUploadedFileName(e, t) {
  let r = compactUploadText(e);
  return !(!r || /no(resume\/cv|coverletter)selected/.test(r)) && (t ? r.includes(compactUploadText(t)) : /\.(pdf|docx?|txt|rtf|html?|mhtml?)\b/i.test(e));
}
function extractFileNameFromText(e) {
  return e.match(/[^<>:"|?*\\/]+?\.(?:pdf|docx?|txt|rtf|html?|mhtml?)\b/i)?.[0] || "";
}
function resolveAriaLabelledByText(e) {
  return (e.getAttribute("aria-labelledby") || "").split(/\s+/).map((t) => e.ownerDocument.getElementById(t)).map(getCleanText).filter(Boolean).join(" ");
}
function findDeleteUploadButton(e) {
  let t = Array.from(e.querySelectorAll("button, a, [role='button'], input[type='button']"));
  return t.find((e10) => {
    if (!isElementVisible(e10)) return false;
    let t10 = normalizeUploadText([getCleanText(e10), resolveAriaLabelledByText(e10), e10.getAttribute("aria-label"), e10.getAttribute("aria-labelledby"), e10.getAttribute("title"), e10.getAttribute("ng-click"), e10.getAttribute("data-ng-click"), e10.id, e10.className].filter(Boolean).join(" "));
    return t10.includes("delete") || t10.includes("remove") || t10.includes("trash") || t10.includes("dettachresumecoverletter");
  }) || null;
}
function readLetterRecommendationUpload(e) {
  let t = getLetterOfRecommendationWidget();
  if (!t) return { uploadedValue: null, fileName: "", deleteButton: null };
  let r = Array.from(t.querySelectorAll(".fileHolder"));
  for (let t10 of r) {
    let r2 = t10.querySelector(".textHolder") || null, n = getCleanText(r2), o2 = findDeleteUploadButton(t10);
    if (looksLikeUploadedFileName(n, e) && o2) return { uploadedValue: r2, fileName: n, deleteButton: o2 };
  }
  return { uploadedValue: null, fileName: "", deleteButton: null };
}
function readUploadState(e, t) {
  if ("coverLetter" === e && hasLetterOfRecommendationCategory()) return readLetterRecommendationUpload(t);
  let r = getUploadSectionRoot(e);
  if (!r) return { uploadedValue: null, fileName: "", deleteButton: null };
  let n = [r, ...Array.from(r.querySelectorAll("span, div, a, p, li, td"))].filter(isElementVisible), o2 = n.find((e10) => looksLikeUploadedFileName(getCleanText(e10), t)) || null, i2 = o2 ? getCleanText(o2) : "", a2 = findDeleteUploadButton(r);
  return { uploadedValue: o2, fileName: i2, deleteButton: a2 };
}
function isUploadPresent(e, t) {
  let r = readUploadState(e, t);
  return !!(r.uploadedValue && r.fileName && r.deleteButton);
}
function getUploadedFileName(e) {
  if ("coverLetter" === e && hasLetterOfRecommendationCategory()) {
    let e10 = readLetterRecommendationUpload();
    return e10.fileName ? extractFileNameFromText(e10.fileName) || e10.fileName : "";
  }
  let t = getUploadSectionRoot(e);
  if (!t) return "";
  let r = Array.from(t.querySelectorAll(".fileHolder .textHolder, .fileHolder span, span.textHolder, [class*='fileName'], [class*='filename'], span, a")).filter(isElementVisible), n = r.find((e10) => looksLikeUploadedFileName(getCleanText(e10)));
  return n ? extractFileNameFromText(getCleanText(n)) || getCleanText(n) : "";
}
export function getUploadSnapshotValues() {
  let e = {};
  return isUploadPresent("resume") && (e[RESUME_SNAPSHOT_LABEL] = getUploadedFileName("resume")), isUploadPresent("coverLetter") && (e["Cover Letter"] = getUploadedFileName("coverLetter")), e;
}
async function clearExistingUpload(e) {
  let t = readUploadState(e);
  t.uploadedValue && t.deleteButton && (clickCentered(t.deleteButton), await observer.waitForCondition(() => !isUploadPresent(e), { timeout: 2500, interval: 100, observeTarget: document.body }));
}
function dispatchFileInputEvents(e) {
  let t = e.ownerDocument.defaultView || window;
  e.dispatchEvent(new t.Event("input", { bubbles: true, cancelable: false })), e.dispatchEvent(new t.Event("change", { bubbles: true, cancelable: false }));
}
function bytesToBase64(e) {
  let t = globalThis.Buffer;
  if (t?.from) return t.from(e).toString("base64");
  let r = "", n = 32768;
  for (let t10 = 0; t10 < e.length; t10 += n) {
    let o2 = e.subarray(t10, t10 + n);
    r += String.fromCharCode(...o2);
  }
  return btoa(r);
}
async function buildProfileBuilderUploadBody(e, t) {
  let r = new Uint8Array(await t.arrayBuffer());
  return { kind: e, fileName: t.name, fileType: t.type, lastModified: t.lastModified, base64: bytesToBase64(r) };
}
function logUploadException(e) {
  console.error(`[BrassRingAutofill] upload-result ${JSON.stringify({ stage: e, uploaded: false, reason: "exception" })}`);
}
function emptyUploadResult() {
  return { uploaded: false, parserDetected: false, parserReady: false };
}
async function uploadViaProfileBuilder(e, t, r, n, o2, i2 = true) {
  try {
    if (!t || !await waitForProfileBuilderFrame(e)) return false;
    let a2 = await messaging.sendToBackground({ name: "uploadBrassringProfileBuilderFile", body: await buildProfileBuilderUploadBody(e, t) });
    if (!a2?.success) return false;
    let s2 = await observer.waitForCondition(() => isUploadPresent(e, t.name), { timeout: 8000, interval: 150, observeTarget: document.body });
    if (!s2) return false;
    return r({ label: o2, required: i2 }), n(o2), await delay.delay(500), true;
  } catch {
    return logUploadException(`upload-${e}-profile-builder`), false;
  }
}
async function uploadViaDirectFileInput(e, t, r, n, o2, i2, a2 = true) {
  try {
    if (!t.files) return false;
    let l2 = r.files[0]?.name || "";
    t.files = r.files, dispatchFileInputEvents(t);
    let s2 = await observer.waitForCondition(() => isUploadPresent(e, l2), { timeout: 6000, interval: 150, observeTarget: document.body });
    if (!s2) return false;
    return n({ label: i2, required: a2 }), o2(i2), await delay.delay(500), true;
  } catch {
    return logUploadException(`upload-${e}-direct`), false;
  }
}
export async function uploadResume(e, t, r) {
  try {
    if (await clearExistingUpload("resume"), !e) return emptyUploadResult();
    let n = await answerMethods.fetchPdfAsBlob(e), o2 = n.files[0], i2 = await resolveUploadFileInput("resume"), a2 = captureBrassringResumeParserBaseline(), l2 = i2 ? await uploadViaDirectFileInput("resume", i2, n, t, r, BRASSRING_RESUME_LABEL) : await uploadViaProfileBuilder("resume", o2, t, r, BRASSRING_RESUME_LABEL);
    if (!l2) return emptyUploadResult();
    let s2 = await waitForBrassringResumeParsingComplete(a2);
    return { uploaded: true, parserDetected: s2.parserDetected, parserReady: s2.parserReady };
  } catch (e10) {
    if (e10 instanceof cancellation.CancelledError || e10 instanceof cancellation.SkippedError) throw e10;
    return logUploadException("upload-resume-orchestration"), emptyUploadResult();
  }
}
export async function uploadCoverLetter(e, t, r) {
  if (await clearExistingUpload("coverLetter"), !e?.coverLetterId) return false;
  let n = await answerMethods.fetchCoverLetterPdfAsBlob(e), o2 = n.files[0], i2 = await resolveUploadFileInput("coverLetter");
  return i2 ? await uploadViaDirectFileInput("coverLetter", i2, n, t, r, "Cover Letter", isCoverLetterRequired()) : await uploadViaProfileBuilder("coverLetter", o2, t, r, "Cover Letter", isCoverLetterRequired());
}
function getSectionListElements(e) {
  return Array.from(document.querySelectorAll(SECTION_CONFIG[e].listSelector));
}
function getSectionAddControl(e) {
  return document.querySelector(SECTION_CONFIG[e].addSelector);
}
function getSectionRemoveControls(e) {
  let t = SECTION_CONFIG[e].removeClickToken;
  return Array.from(document.querySelectorAll(`a[ng-click*='${t}'][ng-click*='remove'], button[ng-click*='${t}'][ng-click*='remove']`));
}
function sectionRowIsEditable(e) {
  return Array.from(e.querySelectorAll("input:not([type='hidden']):not([type='button']):not([type='submit']), textarea, select")).some((e10) => !!isElementVisible(e10) && !e10.disabled && !!e10.closest(FIELD_CONTAIN_SELECTOR));
}
function getSectionUpdateControl(e, t) {
  let r = getSectionListElements(e)[t];
  if (!r) return null;
  let n = SECTION_CONFIG[e].updateClickToken, o2 = r.closest(".widgetinner") || r.parentElement, i2 = Array.from((o2 || document).querySelectorAll("a, button"));
  return i2.find((e10) => {
    if (!isElementVisible(e10)) return false;
    let t10 = normalizeChoiceText([getCleanText(e10), e10.id, e10.getAttribute("aria-label"), e10.getAttribute("ng-click"), e10.getAttribute("data-ng-click")].filter(Boolean).join(" "));
    return t10.includes("update") && t10.includes(n.toLowerCase());
  }) || i2.find((e10) => {
    if (!isElementVisible(e10)) return false;
    let t10 = normalizeChoiceText([getCleanText(e10), e10.id, e10.getAttribute("aria-label"), e10.getAttribute("ng-click"), e10.getAttribute("data-ng-click")].filter(Boolean).join(" "));
    return t10.startsWith("update") || t10.includes(n.toLowerCase());
  }) || null;
}
function findRemoveConfirmButton() {
  let e = Array.from(document.querySelectorAll(".ngdialog-content, .profileWarningDialog")).filter(isElementVisible);
  for (let t of e) {
    let e10 = normalizeChoiceText(getCleanText(t));
    if (!e10.includes("are you sure") || !e10.includes("remove")) continue;
    let r = Array.from(t.querySelectorAll("button, a, [role='button']")).find((e11) => {
      if (!isElementVisible(e11)) return false;
      let t10 = normalizeChoiceText([getCleanText(e11), e11.getAttribute("aria-label"), e11.getAttribute("ng-click"), e11.getAttribute("data-ng-click")].filter(Boolean).join(" "));
      return t10.includes("yes remove it") || t10.includes("removeprofiledata");
    });
    if (r) return r;
  }
  return null;
}
function confirmRemoveDialog() {
  let e = findRemoveConfirmButton();
  return !!e && (clickCentered(e), true);
}
async function waitForSectionRowRemoved(e, t) {
  let r = 0;
  return await observer.waitForCondition(() => {
    if (getSectionListElements(e).length < t) return true;
    let n = Date.now();
    return n - r > 150 && confirmRemoveDialog() && (r = n), false;
  }, { timeout: 3500, interval: 50, observeTarget: document.body });
}
async function addSectionRow(e) {
  let t = getSectionAddControl(e);
  if (!t) return false;
  let r = getSectionListElements(e).length;
  return clickCentered(t), await observer.waitForCondition(() => getSectionListElements(e).length > r, { timeout: 2500, interval: 100, observeTarget: document.body }), await delay.delay(300), getSectionListElements(e).length > r;
}
async function removeLastSectionRow(e) {
  let t = getSectionRemoveControls(e), r = t[t.length - 1];
  if (!r) return false;
  let n = getSectionListElements(e).length;
  return clickCentered(r), await waitForSectionRowRemoved(e, n), await delay.delay(300), getSectionListElements(e).length < n;
}
export async function openSectionForEdit(e, t) {
  let r = getSectionListElements(e)[t];
  if (!r) return false;
  if (sectionRowIsEditable(r)) return true;
  let n = getSectionUpdateControl(e, t);
  if (!n) return false;
  clickCentered(n), await observer.waitForCondition(() => {
    let r2 = getSectionListElements(e)[t];
    return !!(r2 && sectionRowIsEditable(r2));
  }, { timeout: 2500, interval: 100, observeTarget: document.body }), await delay.delay(200);
  let o2 = getSectionListElements(e)[t];
  return !!(o2 && sectionRowIsEditable(o2));
}
export async function ensureSectionCount(e, t) {
  let r = Math.max(0, Math.min(t, SECTION_CONFIG[e].maxCount));
  for (; getSectionListElements(e).length > r; ) {
    let t10 = await removeLastSectionRow(e);
    if (!t10) break;
  }
  for (; getSectionListElements(e).length < r; ) {
    let t10 = await addSectionRow(e);
    if (!t10) break;
  }
  return getSectionListElements(e).length;
}
export async function waitForCompositeSectionRows(e, t = 5000) {
  let r = () => ({ educationCount: getSectionListElements("education").length, employmentCount: getSectionListElements("experience").length }), n = r(), o2 = e.educationCount > 0 && 0 === n.educationCount, i2 = e.employmentCount > 0 && 0 === n.employmentCount;
  (o2 || i2) && await observer.waitForCondition(() => {
    let e10 = r();
    return (!o2 || e10.educationCount > 0) && (!i2 || e10.employmentCount > 0);
  }, { timeout: t, interval: 100, observeTarget: document.body, observerInit: { childList: true, subtree: true } });
  let a2 = r();
  return console.info("[BrassRingAutofill] composite-hydration", { profileEducationCount: e.educationCount, profileEmploymentCount: e.employmentCount, initialEducationCount: n.educationCount, initialEmploymentCount: n.employmentCount, finalEducationCount: a2.educationCount, finalEmploymentCount: a2.employmentCount }), a2;
}
export async function seedEmptyCompositeSections(e) {
  let t = false;
  for (let [r, n] of [["education", e.educationCount], ["experience", e.employmentCount]]) {
    let e10 = getSectionListElements(r).length;
    if (n <= 0 || e10 > 0) continue;
    let o2 = await addSectionRow(r);
    console.info("[BrassRingAutofill] composite-seed", { kind: r, sourceCount: n, beforeCount: e10, afterCount: getSectionListElements(r).length, added: o2 }), t = t || o2;
  }
  return t;
}
function getSectionDoneButton(e, t) {
  let r = SECTION_CONFIG[e], n = Array.from(document.querySelectorAll(r.doneContainerSelector)), o2 = n[t]?.querySelector("button.primaryButton, button[ng-click*='save'], input[type='button']");
  if (o2) return o2;
  let i2 = getSectionListElements(e), a2 = i2[t], l2 = a2?.parentElement?.querySelector("button.primaryButton, button[ng-click*='save'], input[type='button']");
  return l2 || Array.from(document.querySelectorAll("button, input[type='button']")).filter((e10) => /done/i.test(getCleanText(e10) || e10.value || ""))[t] || null;
}
export async function saveSection(e, t) {
  let r = getSectionDoneButton(e, t);
  r && (clickCentered(r), await delay.delay(500));
}
export async function preFillForm() {
  await observer.waitForCondition(() => document.querySelectorAll(FIELD_CONTAIN_SELECTOR).length > 0, { timeout: 3000, interval: 100, observeTarget: document.body });
}
function findSubmitLikeButton() {
  let e = Array.from(document.querySelectorAll("button, input[type='button'], input[type='submit'], a"));
  return e.find((e10) => {
    let t = getCleanText(e10) || e10.value || "";
    return /^(submit|submit application|apply|continue|next|save and continue)$/i.test(t.trim());
  }) || null;
}
export function submitApplication() {
  let e = findSubmitLikeButton();
  e && clickCentered(e);
}
