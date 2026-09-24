// @ts-nocheck
/**
 * Ultipro / UKG — DOM fill operations (inputs, contact, resume, dialogs).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as observer from "../../methods/observer.ts"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as rules from "./rules.js"
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js"

const getTarget = { default: getTargetOrTimeout?.default ?? getTargetOrTimeout }
let m = [{ id: "Country", label: "Country" }, { id: "AddressLine1", label: "Address 1" }, { id: "AddressLine2", label: "Address 2" }, { id: "City", label: "City" }, { id: "State", label: "State / Province" }, { id: "PostalCode", label: "Zip / Postal Code" }], h = 6e4, g = 12e3, b = 5e3, y = 800, v = 100, w = 5e3, S = 5e3, E = 3e3, x = 500, C = 100, A = 5e3, k = 1e3;
function T(e) {
  return e.trim().replace(/\s+/g, " ").toLocaleLowerCase();
}
function F(e) {
  let t = e.trim();
  return t.length > 1 ? t.slice(0, -1) : t;
}
function I(e) {
  let t = e.closest(".twitter-typeahead")?.querySelector("[role='listbox']");
  return t ? Array.from(t.querySelectorAll(".tt-suggestion, [role='option']")).filter((e2) => {
    let t2 = e2.getBoundingClientRect?.();
    return !t2 || t2.width > 0 && t2.height > 0;
  }) : [];
}
async function fillUltiproTypeaheadField(e, t) {
  if (!e || !t.trim()) return false;
  e.focus(), e.click();
  let r = F(t), n = Object.getPrototypeOf(e), o2 = Object.getOwnPropertyDescriptor(n, "value")?.set;
  o2?.call(e, r), e.value = r;
  let i2 = { bubbles: true, cancelable: true };
  e.dispatchEvent(new KeyboardEvent("keydown", i2)), e.dispatchEvent(new KeyboardEvent("keyup", i2)), e.dispatchEvent(new Event("input", i2));
  let a2 = await observer.waitForCondition(() => I(e).length > 0, { timeout: k, observeTarget: e.closest(".twitter-typeahead") ?? void 0 });
  if (!a2) return console.warn("[Ultipro][DegreeTypeahead] no visible candidates after input"), false;
  let s2 = T(t), u2 = I(e).filter((e2) => T(e2.textContent || "") === s2);
  if (1 !== u2.length) return console.warn("[Ultipro][DegreeTypeahead] exact candidate was not unique", { matchCount: u2.length }), false;
  u2[0].click(), await delay.delay(50);
  let d2 = T(e.value) === s2;
  return console.info("[Ultipro][DegreeTypeahead] selection result", { committed: d2 }), d2;
}
async function fillInputTextField(e, t) {
  if (!e || !t) return false;
  if ("UKG-DATE-INPUT-TEXT" === e.tagName) return await _(e, t);
  let r = e;
  r.focus(), r.click(), await delay.delay(50);
  let n = Object.getPrototypeOf(r), o2 = Object.getOwnPropertyDescriptor(n, "value")?.set;
  o2?.call(r, t), r.value = t;
  let i2 = { bubbles: true, cancelable: true };
  return r.dispatchEvent(new KeyboardEvent("keydown", i2)), r.dispatchEvent(new KeyboardEvent("keyup", i2)), r.dispatchEvent(new Event("input", i2)), r.dispatchEvent(new Event("change", i2)), r.dispatchEvent(new Event("blur", i2)), await delay.delay(50), r.value.trim() === t.trim();
}
async function fillDateField(e, t) {
  return !!e && !!t && await _(e, t);
}
async function _(e, t) {
  let r = R(t);
  if (!r) return console.warn("Invalid date format:", t), false;
  let [n, o2, i2] = r.split("/"), a2 = `${i2}-${n}-${o2}`, l2 = e.closest('[data-automation="ukg-datepicker-input"]') || e.closest("ukg-input");
  l2 && (l2.value = a2, l2.setAttribute("value", a2)), e.value = a2, e.setAttribute("value", a2), await delay.delay(100);
  let s2 = (t2) => e.querySelector(`input[aria-label="${t2}"]`) || e.shadowRoot?.querySelector(`input[aria-label="${t2}"]`), u2 = s2("Month"), d2 = s2("Day"), f2 = s2("Year");
  return u2 && d2 && f2 ? (await L(u2, n), await delay.delay(100), await L(d2, o2), await delay.delay(100), await L(f2, i2), await delay.delay(100), u2.value === n && d2.value === o2 && f2.value === i2) : (console.warn("ukg-date-input-text: sub-inputs not found, value set via component property only"), true);
}
async function L(e, t) {
  e.focus(), e.click(), await delay.delay(50);
  let r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  r ? r.call(e, "") : e.value = "", e.dispatchEvent(new Event("input", { bubbles: true, composed: true })), await delay.delay(30), r ? r.call(e, t) : e.value = t, e.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, composed: true })), e.dispatchEvent(new Event("input", { bubbles: true, composed: true })), e.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true, composed: true })), e.dispatchEvent(new Event("change", { bubbles: true, composed: true })), e.dispatchEvent(new FocusEvent("blur", { bubbles: true, composed: true })), await delay.delay(80);
}
function R(e) {
  if (!e) return null;
  let t = e.trim(), r = { jan: "01", january: "01", feb: "02", february: "02", mar: "03", march: "03", apr: "04", april: "04", may: "05", jun: "06", june: "06", jul: "07", july: "07", aug: "08", august: "08", sep: "09", sept: "09", september: "09", oct: "10", october: "10", nov: "11", november: "11", dec: "12", december: "12" }, n = t.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (n) {
    let [, e2, t2, r2] = n;
    return `${t2}/${r2}/${e2}`;
  }
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t)) return t;
  let o2 = t.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (o2) {
    let [, e2, t2] = o2, n2 = r[e2.toLowerCase()];
    if (n2) return `${n2}/01/${t2}`;
  }
  return null;
}
async function fillSelectField(e, t) {
  return !!e && !!t && (!!await M(e, t) || (await delay.delay(600), !!await M(e, t) || (await delay.delay(600), await M(e, t))));
}
async function M(e, t) {
  if (!e || !t) return false;
  let r = async (t2) => {
    let r2 = Array.from(e.options).indexOf(t2);
    e.selectedIndex = r2;
    let n2 = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "selectedIndex")?.set;
    n2?.call(e, r2), e.dispatchEvent(new Event("input", { bubbles: true })), e.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(100);
  }, n = async () => {
    let n2 = t.trim().toLowerCase(), o2 = Array.from(e.options), i2 = o2.filter((e2) => !e2.disabled && "" !== e2.text.trim() && !/^choose|please select/i.test(e2.text.trim()));
    for (let e2 of i2) {
      let t2 = e2.text?.trim().toLowerCase(), o3 = e2.title?.trim().toLowerCase(), i3 = e2.value?.trim().toLowerCase();
      if (t2 === n2 || o3 === n2 || i3 === n2) return await r(e2), true;
    }
    return false;
  };
  return await n();
}
async function fillUltiproStateProvinceField(e, t, { timeoutMs: r = A, intervalMs: n = C, settleMs: o2 = x } = {}) {
  if (!e || !t) return false;
  let i2 = $().find((e2) => B(e2, t));
  if (!i2) {
    console.info("[Ultipro][State / Province] waiting for Country-dependent live options", { initialOptionCount: e.options.length });
    let o3 = document.querySelector("#OpportunityApply") ?? document.documentElement, a3 = await observer.waitForCondition(() => !!(i2 = $().find((e2) => B(e2, t))), { timeout: r, interval: n, observeTarget: o3 });
    if (!a3 || !i2) return console.warn("[Ultipro][State / Province] fill skipped; reason=dependent-options-not-ready", { timeoutMs: r }), false;
  }
  if (!await M(i2, t)) return false;
  o2 > 0 && await delay.delay(o2);
  let a2 = $().find((e2) => B(e2, t));
  if (!a2) return console.warn("[Ultipro][State / Province] fill skipped; reason=settled-control-not-ready"), false;
  let s2 = !q(a2, t), u2 = !s2 || await M(a2, t), d2 = u2 && q(a2, t);
  return console.info("[Ultipro][State / Province] live fill result", { replacedControl: a2 !== e, reattempted: s2, committed: d2 }), d2;
}
function $() {
  return Array.from(document.querySelectorAll("select#State")).filter(J);
}
function B(e, t) {
  return Array.from(e.options).some((e2) => U(e2, t));
}
function q(e, t) {
  return U(e.options[e.selectedIndex], t);
}
function U(e, t) {
  let r = t.trim().toLowerCase();
  if (!e || !r || e.disabled || !e.text.trim() || /^choose|please select/i.test(e.text.trim())) return false;
  let n = e.text.trim().toLowerCase(), i2 = e.title.trim().toLowerCase(), a2 = e.value.trim().toLowerCase();
  return choiceMatch.isExactChoiceMatch(n, r) || choiceMatch.isExactChoiceMatch(i2, r) || choiceMatch.isExactChoiceMatch(a2, r);
}
function H() {
  let e = Array.from(document.querySelectorAll('[data-automation="panel-title"]')).find((e2) => e2.textContent?.trim() === "Contact Information");
  return e?.closest("single-edit-panel") ?? null;
}
async function openUltiproContactInformationEditor() {
  let e = H();
  if (!e) return console.warn("[Ultipro][Contact Information] open failed; reason=panel-not-found"), false;
  if (1 === W().length) return true;
  let t = e.querySelector('button[data-automation="primary-action-button"][aria-label="Edit Contact Information"]');
  if (!t || !J(t) || t.disabled) return console.warn("[Ultipro][Contact Information] open failed; reason=edit-button-not-ready"), false;
  t.click();
  let r = await observer.waitForCondition(() => 1 === W().length, { timeout: w, interval: C, observeTarget: e });
  return console.info(`[Ultipro][Contact Information] open result; opened=${r}`), r;
}
async function cancelUltiproContactInformationEditor() {
  let e = H();
  if (!e) return false;
  if (0 === W().length) return true;
  let t = e.querySelector('button[data-automation="cancel-button"]');
  if (!t || !J(t)) return console.warn("[Ultipro][Contact Information] cancel failed; reason=cancel-button-not-ready"), false;
  t.click();
  let r = await observer.waitForCondition(() => 0 === W().length, { timeout: w, interval: C, observeTarget: e });
  return console.info(`[Ultipro][Contact Information] cancel result; cancelled=${r}`), r;
}
async function prefillUltiproCountry(e) {
  if (!e?.trim()) return false;
  let t = W();
  if (1 !== t.length && (console.info(`[Ultipro][Country] waiting for visible control; candidateCount=${t.length}`), await observer.waitForCondition(() => 1 === W().length, { timeout: S, interval: C, observeTarget: document.documentElement }), t = W()), 1 !== t.length) return console.warn(`[Ultipro][Country] prefill skipped; reason=visible-country-control-count; candidateCount=${t.length}`), false;
  let r = t[0], n = e.trim(), o2 = Z(r), i2 = o2.toLowerCase() === n.toLowerCase(), a2 = G(), s2 = i2 || await fillSelectField(r, n), u2 = Z(r), c2 = s2 && u2.toLowerCase() === n.toLowerCase();
  if (!c2) return console.warn("[Ultipro][Country] prefill failed", { requestedCountry: n, previousCountry: o2, committedCountry: u2 }), false;
  let d2 = await K(a2, !i2);
  return console.info("[Ultipro][Country] prefill committed", { requestedCountry: n, previousCountry: o2, dependentFieldsChanged: d2 }), true;
}
function W() {
  return Array.from(document.querySelectorAll("select#Country")).filter(J);
}
function G() {
  let e = Array.from(document.querySelectorAll("#CountryQuestions input,#CountryQuestions select,#CountryQuestions textarea,#ApplicationQuestions input,#ApplicationQuestions select,#ApplicationQuestions textarea,#Questions input,#Questions select,#Questions textarea,select#State option"));
  return e.map((e2) => e2 instanceof HTMLOptionElement ? `option:${e2.value}:${e2.textContent?.trim() ?? ""}` : [e2.tagName, e2.id, e2.getAttribute("name") ?? "", e2.getAttribute("type") ?? "", e2.getAttribute("data-automation") ?? ""].join(":")).join("|");
}
async function K(e, t) {
  let r = document.querySelector("#OpportunityApply") ?? document.documentElement, n = G() !== e;
  t && !n && (n = await observer.waitForCondition(() => G() !== e, { timeout: E, interval: C, observeTarget: r }));
  let o2 = G(), i2 = Date.now();
  return await observer.waitForCondition(() => {
    let e2 = G();
    return e2 !== o2 ? (n = true, o2 = e2, i2 = Date.now(), false) : Date.now() - i2 >= x;
  }, { timeout: E + x, interval: C, observeTarget: r }), n;
}
async function fillVisibleContactFieldsFromHiddenPrefill() {
  let e = [];
  for (let t of m) {
    let r = Array.from(document.querySelectorAll(`#${CSS.escape(t.id)}`)), n = r.find(J);
    if (!n || hasMeaningfulControlValue(n)) continue;
    let o2 = r.filter((e2) => e2 !== n && !J(e2)).map(Z).find((e2) => ee(e2));
    if (!o2) continue;
    let i2 = n instanceof HTMLSelectElement ? await fillSelectField(n, o2) : await fillInputTextField(n, o2);
    i2 && e.push(t.label);
  }
  return e;
}
function J(e) {
  let t = window.getComputedStyle(e), r = e.getBoundingClientRect();
  return "none" !== t.display && "hidden" !== t.visibility && r.width > 0 && r.height > 0;
}
function hasMeaningfulControlValue(e) {
  return ee(Z(e));
}
function Z(e) {
  if (e instanceof HTMLSelectElement) {
    let t = e;
    return t.options[t.selectedIndex]?.textContent?.trim() || "";
  }
  return (e.value || "").trim();
}
function ee(e) {
  return !!e && !/^choose|please select/i.test(e.trim());
}
function et(e) {
  if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement) || e.disabled) return false;
  if (e instanceof HTMLInputElement) {
    let t = (e.type || "text").toLowerCase();
    return ["text", "email", "tel", "search", "url", "number", "date"].includes(t);
  }
  return true;
}
let er = "#WorkExperienceSection ul.listtype > li.row, #WorkExperienceSection ul.listtype > li[data-automation='panel-list-item'], #EducationSection ul.listtype > li.row, #EducationSection ul.listtype > li[data-automation='panel-list-item'], #ResumeParsingUploader [data-automation='work-experience-item'], #ResumeParsingUploader [data-automation='education-panel']";
function getUltiproSavedExperienceRowsSignature() {
  return Array.from(document.querySelectorAll(er)).map((e, t) => ["row", t, e.querySelector("strong")?.textContent?.trim() || Array.from(e.querySelectorAll("input, textarea, select")).map((e2) => e2.value?.trim() || "").filter(Boolean).join("|") || e.textContent?.trim() || ""].join(":")).join("\n");
}
function eo() {
  return Array.from(document.querySelectorAll("#ResumeParsingUploader [data-automation='work-experience-item'], #ResumeParsingUploader [data-automation='education-panel']")).some((e) => !rules.isElementHidden(e));
}
function getUltiproResumeParserStateSignature() {
  let e = Array.from(document.querySelectorAll("input, textarea, select")).filter(et).map((e2) => ["field", e2.tagName, e2.id, e2.getAttribute("name") || "", e2.value || ""].join(":")), t = getUltiproSavedExperienceRowsSignature();
  return [...e, t].filter(Boolean).join("\n");
}
function ea() {
  let e = Array.from(document.querySelectorAll("[data-bind]")).filter((e2) => {
    let t = e2.getAttribute("data-bind") || "";
    return t.includes("isParsingResume") && t.includes("visible");
  });
  return e.find((e2) => !!e2.querySelector("#EducationSection") || !!e2.querySelector("#WorkExperienceSection")) ?? null;
}
function isUltiproResumeParsing() {
  let e = ea();
  return !(!e || eo()) && rules.isElementHidden(e);
}
async function waitForUltiproResumeParsingToFinish(e = {}) {
  let t;
  let r = e.timeoutMs ?? h, n = ea(), o2 = document.documentElement ?? n ?? void 0, i2 = e.intervalMs ?? v, a2 = void 0 !== e.initialSignature;
  if (!a2 && !n) return true;
  if (a2) {
    let r2 = await observer.waitForCondition(() => {
      let r3 = ea();
      return r3 && rules.isElementHidden(r3) ? (t = "parsing-state", true) : void 0 !== e.initialSavedRowsSignature && getUltiproSavedExperienceRowsSignature() !== e.initialSavedRowsSignature && (t = "saved-rows", true);
    }, { timeout: e.startTimeoutMs ?? g, interval: i2, observeTarget: o2 });
    if (!r2) return console.warn("[Ultipro] resume parser did not start before timeout; structured experience fill will be skipped", { hasParsingBinding: !!n }), false;
    console.log("[Ultipro] resume parser cycle started", { reason: t, hasParsingBinding: !!n });
  }
  let s2 = () => {
    if (eo()) return true;
    let e2 = ea();
    return !n || !!e2 && !rules.isElementHidden(e2);
  }, u2 = !!s2() || await observer.waitForCondition(s2, { timeout: r, interval: i2, observeTarget: o2 });
  if (!u2) return console.warn("[uploadResume] Timed out waiting for UKG isParsingResume() to clear"), false;
  if (a2) {
    let r2 = await waitForUltiproResumeParserFieldsToSettle(e.initialSignature, { stableMs: e.stableMs, intervalMs: i2 });
    if (!r2) return false;
    console.log("[Ultipro] resume parser cycle completed", { reason: t, hasParsingBinding: !!n });
  }
  return true;
}
async function waitForUltiproResumeParserFieldsToSettle(e, t = {}) {
  let r = t.changeTimeoutMs ?? g, n = t.stableMs ?? y, o2 = t.intervalMs ?? v, i2 = t.noChangeTimeoutMs ?? b, a2 = Date.now(), l2 = e, s2 = Date.now(), u2 = false;
  for (; Date.now() - a2 < r; ) {
    let e2 = getUltiproResumeParserStateSignature(), t2 = isUltiproResumeParsing();
    if (e2 !== l2) l2 = e2, s2 = Date.now(), u2 = true;
    else if (u2 && !t2 && Date.now() - s2 >= n) return true;
    else if (!u2 && !t2 && Date.now() - a2 >= i2) return true;
    await delay.delay(o2);
  }
  return console.warn("[uploadResume] Timed out waiting for Ultipro parser field rewrite"), false;
}
async function fillCheckboxField(e, t) {
  let r = Array.isArray(t) ? t[0] : t, n = String(r).trim().toLowerCase(), o2 = e.$checkboxs || [];
  if (0 === o2.length) {
    let t2 = e.$input;
    if (t2 && "checkbox" === t2.type) {
      let e2 = ["true", "yes", "1"].includes(n);
      await fillCheckbox(t2, e2);
    }
    return;
  }
  for (let e2 of o2) {
    let t2 = e2.value?.toLowerCase() || "", r2 = e2.nextElementSibling?.textContent?.trim().toLowerCase() || "";
    if (t2 === n || r2 === n) {
      e2.click(), await delay.delay(100);
      return;
    }
  }
  console.warn("No matching radio found for value:", r);
}
async function fillCheckbox(e, t) {
  e.checked !== t && (e.click(), await delay.delay(100));
}
async function fillMultiSelectField(e, t) {
  let r = e.$input;
  if (!r) return;
  let n = Array.isArray(t) ? t[0] : t;
  await fillSelectField(r, n), await delay.delay(200);
  let o2 = r.parentElement?.querySelector("div.checkbox label"), i2 = o2?.querySelector("span:not(.sr-only)"), a2 = i2?.textContent?.trim() || "";
  if (!a2) return;
  let l2 = r.parentElement?.querySelector("div.checkbox input[type='checkbox']");
  if (!l2) return;
  let s2 = r.options[r.selectedIndex]?.text?.trim().toLowerCase() || "", u2 = Array.isArray(t) ? t : [t], d2 = u2.some((e2) => s2 === String(e2).trim().toLowerCase());
  d2 || (await fillCheckbox(l2, true), await delay.delay(200));
}
let ep = "#ResumeParsingUploader input[type='file'], #section-header-resumeParsingUploader input[type='file'], [data-automation='resumeparsinguploader-container'] input[type='file']";
function getResumeUploadInput() {
  return document.querySelector(ep) || xpath.getFirstOrderedNode("//*[@id='ResumeParsingUploader' or @data-automation='resumeparsinguploader-container' or @id='section-header-resumeParsingUploader']//input[@type='file']");
}
function hasResumeUploadInput() {
  return !!getResumeUploadInput();
}
function hasSelectedUltiproResumeFile() {
  let e = getResumeUploadInput();
  return !!(e?.files?.length || e?.value);
}
async function uploadResume(e, t, r) {
  let n = getResumeUploadInput();
  if (!n) return console.warn("Resume input not found"), false;
  let o2 = getUltiproResumeParserStateSignature(), l2 = getUltiproSavedExperienceRowsSignature(), s2 = await answerMethods.fetchPdfAsBlob(e);
  return await dom.uploadFiles(n, s2, t, r, "Resume/CV"), await getTarget.default(() => document.querySelector(".upload-complete"), () => false, 5), await waitForUltiproResumeParsingToFinish({ initialSignature: o2, initialSavedRowsSignature: l2 });
}
async function fillSkills(e, t) {
  let r = e.map((e2) => String(e2 ?? "").trim()).filter((e2) => e2.length > 0);
  if (!r.length) return false;
  let n = document.querySelector("#CandidateSkills");
  if (!n) return false;
  let o2 = n.querySelector('button[data-automation="primary-action-button"]');
  if (!o2) return false;
  o2.click(), await delay.delay(300);
  let i2 = () => new Set(Array.from(n.querySelectorAll('div[data-automation="selected-item"] strong[data-automation="skill-label"]')).map((e2) => e2.textContent?.trim().toLowerCase() || "").filter(Boolean)), a2 = i2(), l2 = n.querySelector("input[type='text'][aria-label='Skills']");
  if (!l2) return console.warn("[Ultipro][Skills] scoped input unavailable", { requestedCount: r.length }), false;
  for (let e2 of (console.info("[Ultipro][Skills] fill started", { requestedCount: r.length, existingCount: a2.size, scopedInput: true }), r)) {
    let t2 = e2.toLowerCase();
    if (a2.has(t2)) continue;
    await fillInputTextField(l2, e2), await delay.delay(100);
    let r2 = l2.closest("div.form-inline")?.querySelector("button");
    r2?.click(), await delay.delay(100), a2 = i2();
  }
  let s2 = r.filter((e2) => !a2.has(e2.toLowerCase())).length;
  if (s2 > 0) return console.warn("[Ultipro][Skills] tag commit incomplete", { requestedCount: r.length, committedCount: r.length - s2, missingCount: s2 }), false;
  await delay.delay(200);
  let u2 = n.querySelector('button[data-automation="save-button"]');
  return u2 ? (u2.click(), t("Skills"), console.info("[Ultipro][Skills] fill completed", { requestedCount: r.length, committedCount: r.length }), await delay.delay(600), true) : (console.warn("[Ultipro][Skills] save button unavailable", { requestedCount: r.length }), false);
}
async function fillBehaviorsAndMotivations(e, t) {
  let r = ew(t);
  if (!r || 0 === r.length) return;
  let n = e.$input;
  if (!n) return;
  let i2 = () => {
    let e2 = n.querySelectorAll('ul.listtype > li[data-automation="selected-item"]');
    return Array.from(e2).map((e3) => (e3.querySelector("strong")?.textContent || e3.textContent || "").trim().toLowerCase()).filter(Boolean);
  }, a2 = i2(), l2 = r.map((e2) => e2.trim().toLowerCase()), s2 = a2.length === l2.length && l2.every((e2) => a2.includes(e2));
  if (s2) return;
  let u2 = n.querySelector('button[data-automation="primary-action-button"]');
  if (!u2) {
    console.warn(`Edit button not found for ${e.label}`);
    return;
  }
  u2.click(), await delay.delay(300);
  let d2 = Array.from(n.querySelectorAll('ul.listtype > li[data-automation="selected-item"]'));
  for (let e2 of d2) {
    let t2 = e2.querySelector('button[data-automation="item-remove-button"], button[aria-label*="emove" i], button.close, button[type="button"].btn-link');
    t2 && (t2.click(), await delay.delay(200));
  }
  let f2 = n.querySelector("select");
  if (!f2) {
    console.warn(`Select element not found for ${e.label}`);
    return;
  }
  for (let t2 of r) {
    await fillSelectField(f2, t2), await delay.delay(200);
    let r2 = f2.options[f2.selectedIndex]?.text?.trim() || "", i3 = choiceMatch.isExactChoiceMatch(r2, t2);
    if (!i3) {
      console.warn(`[${e.label}] \u5339\u914D\u5931\u8D25\uFF0C\u8DF3\u8FC7 "${t2}"\uFF08\u5F53\u524D\u9009\u4E2D "${r2}"\uFF09`);
      continue;
    }
    let a3 = n.querySelector('button[data-automation="item-add-button"]');
    a3 ? (a3.click(), await delay.delay(400)) : console.warn(`Add button not found for ${e.label}`);
  }
  let p2 = n.querySelector('button[data-automation="save-button"]');
  p2 ? p2.click() : console.warn(`Save button not found for ${e.label}`), await delay.delay(300);
}
function ew(e) {
  if (!e?.length) return [];
  let t = [];
  return (t = "object" == typeof e[0] && null !== e[0] && "label" in e[0] ? e.map((e2) => e2.label) : e).filter((e2) => e2 && "" !== e2.trim());
}
function eS(e, t) {
  let r = 'ul.listtype > li[data-automation="selected-item"], ul.listtype > li[data-automation="panel-list-item"], ul.listtype > li.row', n = e.querySelectorAll(r);
  return (n?.length ?? 0) === 0;
}
function eE(e, t) {
  if (null == t || "string" != typeof t) return "";
  let r = t.replace(/^license/i, ""), n = t.replace(/^link/i, "");
  return e[t] ?? e[r] ?? e[n] ?? ("Link Title" === n ? e.LinkTitle : void 0) ?? "";
}
function ex(e, t, r) {
  let n = e.filter((e2) => e2.type === enums.FIELD_TYPE.TEXT && e2.required);
  if (0 === n.length) return true;
  for (let e2 of n) {
    let n2 = e2.label, o2 = eE(t, n2), i2 = null != o2 ? String(o2).trim() : "";
    if (!i2) return console.warn(`${r}: \u7F3A\u5C11\u5FC5\u586B\u6570\u636E "${n2}"\uFF0C\u4E0D\u6253\u5F00\u5F39\u6846\uFF08\u5FC5\u586B\u9879\u5168\u90E8\u90FD\u6709\u624D\u6253\u5F00\uFF09`), false;
  }
  return true;
}
function eC(e) {
  let t = e.querySelector("div.form-group") ?? e, r = t.querySelector("label"), n = r?.textContent?.trim() ?? "";
  if (!n) {
    let e2 = t.querySelector("input, select, textarea, ukg-date-input-text"), r2 = e2?.getAttribute("aria-label")?.trim();
    r2 && (n = r2);
  }
  if (!n) return null;
  let o2 = r?.getAttribute("for") ?? "", i2 = null;
  return (o2 && (i2 = t.querySelector(`input#${CSS.escape(o2)}, textarea#${CSS.escape(o2)}`)), i2 || (i2 = t.querySelector("ukg-date-input-text")), i2 || (i2 = t.querySelector("input[type='text'], textarea")), i2) ? { labelText: n, input: i2 } : null;
}
function eA(e, t) {
  for (let r of e) r.type === enums.FIELD_TYPE.TEXT && r.label && t(r.label);
}
async function fillCertifications(e, t, r, n) {
  let o2 = "#LicensesAndCertificationsSection", i2 = "Certifications";
  if (!e || 0 === e.length) return;
  if (!t) {
    eA(e, n);
    return;
  }
  let a2 = document.querySelector(o2);
  if (!a2) {
    console.warn(`${i2} section not found: ${o2}`), eA(e, n);
    return;
  }
  let l2 = eS(a2, o2);
  if (!l2) {
    eA(e, r);
    return;
  }
  let d2 = ex(e, t, i2);
  if (!d2) {
    eA(e, n);
    return;
  }
  let f2 = a2.querySelector('button[data-automation="primary-action-button"]');
  if (!f2) {
    let e2 = o2.replace("#", "");
    f2 = xpath.getFirstOrderedNode(`//*[@id='${e2}']//button[@data-automation='primary-action-button']`);
  }
  if (!f2) {
    console.warn(`Add button not found for ${i2}\uFF0CsectionId=${o2}`), eA(e, n);
    return;
  }
  f2.click(), await delay.delay(300);
  let p2 = /* @__PURE__ */ new Map(), m2 = o2.replace("#", ""), h2 = "//*[@id='LicensesAndCertificationsSection']//div[contains(@class, 'col-md-16') or contains(@class, 'col-md-8')]", g2 = xpath.getOrderedNodes(h2);
  for (let e2 of g2) {
    let t2 = e2.closest("div.collapse");
    if (t2 && !t2.classList.contains("in")) continue;
    let r2 = eC(e2);
    if (!r2) continue;
    let { labelText: n2, input: o3 } = r2;
    p2.set(n2, o3), n2.toLowerCase().includes("license") || p2.set("license" + n2, o3);
  }
  let b2 = /* @__PURE__ */ new Set();
  for (let r2 of e) {
    if (r2.type !== enums.FIELD_TYPE.TEXT) continue;
    let e2 = r2.label, n2 = eE(t, e2), o3 = null != n2 ? String(n2).trim() : "";
    if (!o3) continue;
    let i3 = p2.get(e2);
    if (i3) {
      let t2 = await fillInputTextField(i3, o3);
      t2 && b2.add(e2), await delay.delay(100);
    }
  }
  let y2 = a2.querySelector('button[data-automation="save-button"]');
  y2 || (y2 = xpath.getFirstOrderedNode(`//*[@id='${m2}']//button[@data-automation='save-button']`)), y2 ? (y2.click(), await delay.delay(300), eA(e, (e2) => b2.has(e2) ? r(e2) : n(e2))) : (console.warn(`${i2}: \u672A\u627E\u5230\u4FDD\u5B58\u6309\u94AE\uFF0Cdata-automation='save-button'`), eA(e, n));
}
async function fillLicenses(e, t, r, n) {
  let o2 = "#CandidateLinkEdit", i2 = "Links";
  if (!e || 0 === e.length) return;
  if (!t) {
    eA(e, n);
    return;
  }
  let a2 = document.querySelector(o2);
  if (!a2) {
    console.warn(`${i2} section not found: ${o2}`), eA(e, n);
    return;
  }
  let l2 = eS(a2, o2);
  if (!l2) {
    eA(e, r);
    return;
  }
  let d2 = ex(e, t, i2);
  if (!d2) {
    eA(e, n);
    return;
  }
  let f2 = xpath.getFirstOrderedNode("//*[@id='CandidateLinkEdit']//button[@data-automation='primary-action-button' and not(contains(@style, 'display: none'))]");
  if (!f2) {
    console.warn(`Add button not found for ${i2}`), eA(e, n);
    return;
  }
  f2.click(), await delay.delay(300);
  let p2 = /* @__PURE__ */ new Map(), m2 = o2.replace("#", ""), h2 = "//*[@id='CandidateLinkEdit']//div[contains(@class, 'col-sm-14') or contains(@class, 'col-sm-10')]", g2 = xpath.getOrderedNodes(h2);
  for (let e2 of g2) {
    let t2 = eC(e2);
    if (!t2) continue;
    let { labelText: r2, input: n2 } = t2;
    p2.set(r2, n2), r2.toLowerCase().includes("link") || p2.set("link" + r2, n2);
  }
  let b2 = /* @__PURE__ */ new Set();
  for (let r2 of e) {
    if (r2.type !== enums.FIELD_TYPE.TEXT) continue;
    let e2 = r2.label, n2 = eE(t, e2), o3 = null != n2 ? String(n2).trim() : "";
    if (!o3) continue;
    let i3 = p2.get(e2);
    if (i3) {
      let t2 = await fillInputTextField(i3, o3);
      t2 && b2.add(e2), await delay.delay(100);
    }
  }
  let y2 = a2.querySelector('button[data-automation="save-button"]');
  y2 || (y2 = xpath.getFirstOrderedNode(`//*[@id='${m2}']//button[@data-automation='save-button']`)), y2 ? (y2.click(), await delay.delay(300), eA(e, (e2) => b2.has(e2) ? r(e2) : n(e2))) : (console.warn(`${i2}: \u672A\u627E\u5230\u4FDD\u5B58\u6309\u94AE\uFF0Cdata-automation='save-button'`), eA(e, n));
}
async function fillRace(e) {
  let t = document.querySelector('select#Race[name="Race"]');
  t && e && (await fillSelectField(t, e), await delay.delay(200));
}
async function addEducationSection(e) {
  let t = document.querySelector("#EducationSection");
  if (!t) return;
  let r = t.querySelector('collapsible-panel-button > button[data-automation="primary-action-button"]');
  if (r) for (let n = 0; n < e; n++) {
    r.click(), await delay.delay(300);
    let e2 = t.querySelector('button[data-automation="cancel-button"]');
    e2?.click(), await delay.delay(200);
  }
}
async function addEmploymentSection(e) {
  let t = document.querySelector("#WorkExperienceSection");
  if (!t) return;
  let r = t.querySelector('collapsible-panel-button > button[data-automation="primary-action-button"]');
  if (r) for (let n = 0; n < e; n++) {
    r.click(), await delay.delay(300);
    let e2 = t.querySelector('button[data-automation="cancel-button"]');
    e2?.click(), await delay.delay(200);
  }
}

export {
  addEducationSection,
  addEmploymentSection,
  cancelUltiproContactInformationEditor,
  fillBehaviorsAndMotivations,
  fillCertifications,
  fillCheckbox,
  fillCheckboxField,
  fillDateField,
  fillInputTextField,
  fillLicenses,
  fillMultiSelectField,
  fillRace,
  fillSelectField,
  fillSkills,
  fillUltiproStateProvinceField,
  fillUltiproTypeaheadField,
  fillVisibleContactFieldsFromHiddenPrefill,
  getResumeUploadInput,
  getUltiproResumeParserStateSignature,
  getUltiproSavedExperienceRowsSignature,
  hasMeaningfulControlValue,
  hasResumeUploadInput,
  hasSelectedUltiproResumeFile,
  isUltiproResumeParsing,
  openUltiproContactInformationEditor,
  prefillUltiproCountry,
  uploadResume,
  waitForUltiproResumeParserFieldsToSettle,
  waitForUltiproResumeParsingToFinish,
}
