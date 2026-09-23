// @ts-nocheck
/**
 * RippleHire DOM fill operations — readable TypeScript source of truth.
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as inputUtils from "../../crawler/utils/input.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as delay from "../../../utils/delay.js"
import * as phoneCountryCode from "./phone-country-code.ts"
function normalizeRipplehireOptionText(e) {
  return String(e || "").replace(/\s+/g, " ").trim().toLowerCase();
}
function f(e) {
  return e.textContent?.trim() || e.getAttribute("label")?.trim() || e.value?.trim() || "";
}
function preselectExpectedSalaryCurrencyToUsd() {
  let e = document.querySelector("select#currencySymbol, select[name='currencySymbol']");
  if (!e) return false;
  let t = Array.from(e.options).find((e2) => "$ - usd" === d(f(e2)));
  return !!t && (e.value === t.value || (Array.from(e.options).forEach((e2) => {
    e2.selected = e2 === t;
  }), e.value = t.value, e.dispatchEvent(new Event("change", { bubbles: true })), e.dispatchEvent(new Event("input", { bubbles: true })), true));
}
function m(e) {
  let t = d(e);
  return !t || t.startsWith("enter ") || t.startsWith("type ") || "select" === t;
}
function h(e, t) {
  let r = t.map(d);
  return e.find((e2) => r.includes(d(e2))) || "";
}
function getRipplehireMultiselectCandidateValues({ value: e, availableValues: t = [] }) {
  let r = Array.isArray(e) ? e[0] : e, n = String(r || "").trim();
  if (!n) return [];
  let o2 = [n], i2 = h(t, o2);
  return i2 && !o2.includes(i2) && o2.push(i2), o2;
}
function shouldKeepRipplehireCountryValue({ currentCountry: e, country: t, availableValues: r = [] }) {
  if (!e) return false;
  let n = g({ value: t || "", availableValues: r });
  return 0 === n.length || !!h([e], n);
}
function y(e) {
  let t = e.querySelector("select");
  return t ? Array.from(t.options).map(f).filter((e2) => e2 && !m(e2)) : [];
}
function v(e) {
  return e.querySelector("label[for]")?.textContent?.replace(":", "").replace(/\s+/g, " ").trim() || "";
}
function w(e) {
  let t = e.querySelector("select");
  if (t) {
    let e2 = Array.from(t.selectedOptions).find((e3) => !m(f(e3) || e3.value)), r2 = e2 && f(e2) || t.value || "";
    if (r2 && !m(r2)) return r2;
  }
  let r = e.querySelector(".multiselect-selected-text")?.textContent?.trim();
  if (r && !m(r)) return r;
  let n = e.querySelector("input:not([type='hidden']), textarea"), o2 = n?.value?.trim() || "";
  return o2 && !m(o2) ? o2 : "";
}
function S(e, t, r) {
  let n = e.querySelector("select");
  if (n) {
    let e2 = d(t), r2 = Array.from(n.options).find((t2) => d(t2.value) === e2 || d(f(t2)) === e2);
    r2 && (n.value = r2.value, r2.selected = true, n.dispatchEvent(new Event("change", { bubbles: true })), n.dispatchEvent(new Event("input", { bubbles: true })));
  }
  let o2 = e.querySelector(".multiselect-selected-text");
  o2 && (o2.textContent = r);
  let i2 = e.querySelector(".multiselect.dropdown-toggle");
  i2?.setAttribute("title", r);
  let a2 = e.querySelector(".help-block");
  a2 && (a2.style.display = "none");
}
function E(e, t, r = t) {
  let n = d(t), o2 = d(r), i2 = e.querySelector(".multiselect-selected-text")?.textContent?.trim(), a2 = d(i2);
  if (a2 === n || a2 === o2) return true;
  let l2 = e.querySelector("select");
  return !!l2 && Array.from(l2.selectedOptions).some((e2) => {
    let t2 = [e2.value, f(e2)].map(d);
    return t2.includes(n) || t2.includes(o2);
  });
}
async function fillAutocomplete(e, t) {
  e.focus(), await delay.delay(100), e.value = t, e.dispatchEvent(new Event("input", { bubbles: true }));
  let r = null;
  for (let e2 = 0; e2 < 40 && !(r = document.querySelector(".pac-container .pac-item")); e2++) await delay.delay(150);
  r && (e.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", keyCode: 40, code: "ArrowDown", bubbles: true })), await delay.delay(200), e.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", keyCode: 13, code: "Enter", bubbles: true })), await delay.delay(500), e.dispatchEvent(new Event("change", { bubbles: true })), e.setAttribute("value", e.value || ""), e.blur());
}
async function fillMultiselect(e, t) {
  let r = e.querySelector("#multi-select") || e.querySelector(".multi-select");
  if (!r) return false;
  let n = g({ value: t, availableValues: y(e) });
  if (0 === n.length) return false;
  let o2 = async (t2) => {
    let r2 = e.querySelector("#multi-select") || e.querySelector(".multi-select");
    if (!r2) return false;
    let n2 = r2.querySelector(".multiselect.dropdown-toggle");
    if (!n2) return false;
    n2.scrollIntoView({ behavior: "smooth", block: "center" }), await delay.delay(150), "true" !== n2.getAttribute("aria-expanded") && (n2.click(), await delay.delay(400));
    let o3 = r2.querySelector(".singleselect-search");
    o3 && (o3.value = t2, o3.dispatchEvent(new Event("input", { bubbles: true })), o3.dispatchEvent(new Event("keyup", { bubbles: true })), await delay.delay(500));
    let i2 = r2.querySelectorAll(".multiselect-container li"), a2 = false;
    for (let e2 of i2) {
      let n3 = e2.querySelector("label.multiselect-option-text"), o4 = e2.querySelector('input[type="radio"]');
      if (!n3 || !o4 || "" === o4.value) continue;
      let i3 = n3.textContent?.replace(/\s+/g, " ").trim() || "", l2 = [i3, o4.value].map(d);
      if (l2.includes(d(t2))) {
        r2.querySelectorAll(".multiselect-container li.active").forEach((e3) => {
          e3.classList.remove("active");
        }), e2.classList.add("active"), o4.checked = true, o4.click(), o4.dispatchEvent(new Event("change", { bubbles: true }));
        let t3 = e2.querySelector("a");
        t3?.click(), n3.click(), S(r2, o4.value, i3), a2 = true;
        break;
      }
    }
    return !!a2 && (await delay.delay(200), E(r2, t2));
  };
  for (let e2 of n) {
    let t2 = await o2(e2);
    if (t2 || (await delay.delay(300), t2 = await o2(e2)), t2) return true;
  }
  return false;
}
async function fillCountryFromStateFallback(e) {
  let t = Array.from(document.querySelectorAll(".form-group:not(.hide)")).find((e2) => "country" === d(v(e2)));
  if (!t) return false;
  let r = w(t);
  return !!b({ currentCountry: r, country: e, availableValues: y(t) }) || await C(t, e || "");
}
async function fillInputTextField(e, t, r) {
  let n = e.$input;
  if (!n) return;
  let o2 = n.querySelector("#multi-select");
  if (o2) return await C(n, t);
  if (!t || "" === t.trim()) return;
  if (n.scrollIntoView({ behavior: "smooth", block: "center" }), await delay.delay(100), n.classList.contains("pac-target-input") && n instanceof HTMLInputElement) {
    await x(n, t);
    return;
  }
  e.label.includes("City") && (t = t.replace(/\s+/g, ""));
  let a2 = n.closest?.(".intl-tel-input")?.querySelector(".selected-flag");
  a2 ? t = phoneCountryCode.formatRipplehirePhoneValue(t, r) : e.label.toLowerCase().includes("phone") && 11 === t.length && t.startsWith("1") && (t = t.replace(/^1/, ""));
  let l2 = n.value?.length || 0;
  await inputUtils.fillDefaultInputField(n, t);
  let s2 = "emailAddr" === n.id || n.getAttribute?.("name") === "emailAddr" ? "email" : "phoneNo" === n.id || n.getAttribute?.("name") === "phoneNo" ? "phone" : null;
  if (!s2) return;
  let d2 = "phone" === s2 ? n.value.replace(/\D/g, "") === t.replace(/\D/g, "") : n.value.trim() === t.trim();
  return console.debug(`[RippleHire][contact-field] ${JSON.stringify({ field: s2, answerPresent: t.length > 0, answerLength: t.length, beforeLength: l2, afterLength: n.value?.length || 0, committed: d2 })}`), d2;
}
async function fillPhoneCountryCode(e, t) {
  if (e.label !== phoneCountryCode.RIPPLEHIRE_PHONE_COUNTRY_CODE_LABEL) return false;
  let r = (Array.isArray(t) ? t : [t]).find((e2) => String(e2 ?? "").trim()), n = String(r ?? "").trim();
  if (!n) return false;
  let o2 = e.$input, i2 = o2?.closest?.(".intl-tel-input"), a2 = i2?.querySelector(".selected-flag");
  if (!i2 || !a2) return false;
  let l2 = Array.from(i2.querySelectorAll("li.country")), s2 = phoneCountryCode.findRipplehirePhoneCountryOption(n, l2);
  if (!s2) return false;
  let d2 = () => {
    if (s2.classList?.contains("active")) return true;
    let e2 = phoneCountryCode.readRipplehirePhoneCountryCode(o2);
    return !!e2 && phoneCountryCode.findRipplehirePhoneCountryOption(e2, [s2]) === s2;
  };
  if (d2()) return true;
  let f2 = async () => (a2.scrollIntoView({ behavior: "smooth", block: "center" }), a2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), a2.click(), await delay.delay(100), s2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), s2.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true })), s2.click(), await delay.delay(100), d2());
  return !!await f2() || await f2();
}
async function fillSelectField(e, t) {
  if (!t || 0 === t.length) return;
  let r = t[0];
  e.label;
  let n = e.$input;
  if (!n) return;
  n.scrollIntoView({ behavior: "smooth", block: "center" }), await delay.delay(100);
  let o2 = Array.from(n.options), i2 = o2.find((e2) => e2.textContent.trim().toLowerCase() === r.toLowerCase() || e2.value.toLowerCase() === r.toLowerCase());
  i2 && (n.value = i2.value, n.dispatchEvent(new Event("change", { bubbles: true })), n.dispatchEvent(new Event("input", { bubbles: true })));
}
async function fillCheckboxField(e, t) {
  e.label;
  let r = e.$checkboxs || [];
  if (e.options, r.length) for (let e2 of (r[0] && (r[0].scrollIntoView({ behavior: "smooth", block: "center" }), await delay.delay(100)), t)) {
    let t2 = false;
    for (let n of r) {
      let r2 = n.closest("label");
      if (r2) {
        let i2 = r2.cloneNode(true), a2 = i2.querySelector('input[type="checkbox"]');
        a2 && a2.remove();
        let l2 = i2.textContent?.trim() || "";
        if (choiceMatch.isExactChoiceMatch(l2, e2)) {
          n.checked || n.click(), t2 = true;
          break;
        }
      }
    }
  }
}
async function fillRadioGroupField(e, t) {
  e.label;
  let r = t?.[0];
  if (!r) return;
  let n = e.$radioParent;
  if (!n) return;
  n.scrollIntoView({ behavior: "smooth", block: "center" }), await delay.delay(100);
  let i2 = Array.from(n.querySelectorAll('input[type="radio"]')), a2 = null;
  for (let e2 of i2) {
    if (e2.disabled) continue;
    let t2 = "", i3 = n.querySelector(`label[for="${e2.id}"]`);
    if (i3) t2 = i3.textContent?.trim() || "";
    else {
      let r2 = e2.closest("label");
      if (r2) {
        let e3 = r2.cloneNode(true), n2 = e3.querySelector('input[type="radio"]');
        n2 && n2.remove(), t2 = e3.textContent?.trim() || "";
      } else {
        let r3 = e2.nextElementSibling;
        r3 && "LABEL" === r3.tagName && (t2 = r3.textContent?.trim() || "");
      }
    }
    if (choiceMatch.isExactChoiceMatch(t2, r)) {
      a2 = e2;
      break;
    }
  }
  if (a2) {
    let e2 = n.querySelector(`label[for="${a2.id}"]`), t2 = e2 || a2.closest("label");
    !a2.checked && (a2.checked = true, a2.dispatchEvent(new Event("change", { bubbles: true })), a2.dispatchEvent(new Event("click", { bubbles: true })), a2.dispatchEvent(new Event("input", { bubbles: true })), t2 && (t2.click(), await delay.delay(50)));
  }
}
async function agreementCheckboxField() {
  let e = document.querySelectorAll('label.declaration input[type="checkbox"], input[type="checkbox"]#termscondition');
  for (let t of e) t.checked || (t.checked = true, t.dispatchEvent(new Event("change", { bubbles: true })), t.dispatchEvent(new Event("click", { bubbles: true })), t.dispatchEvent(new Event("input", { bubbles: true })), await delay.delay(50));
}
let P = "#openResume, .openResume", _ = '#resumeDrag, #myModal input[type="file"], input[type="file"][name="resume"]', L = "#resumeSumbmit";
function R() {
  return document.querySelector(_);
}
async function openRipplehireResumeUploadInput({ maxAttempts: e = 20, intervalMs: t = 100 } = {}) {
  let r = R();
  if (r) return r;
  let n = document.querySelector(P);
  if (!n) return null;
  n.click();
  for (let r2 = 0; r2 < e; r2 += 1) {
    let e2 = R();
    if (e2) return e2;
    await delay.delay(t);
  }
  return null;
}
let M = "#myModal", N = ".analyzing-files", $ = ".file-preview, .change-files", B = 1e4, q = 150;
function U(e) {
  let t = e.closest?.(M);
  return t ? "modal-parser" : "inline-direct";
}
function H() {
  let e = document.querySelector(M);
  return !e || !e.querySelector(N) && !!e.querySelector($);
}
async function waitForRipplehireResumeFileReady({ timeout: e = B, pollInterval: t = q } = {}) {
  let r = await observer.waitForCondition(H, { timeout: e, interval: t, observeTarget: document.body });
  return r || console.warn("[uploadResume] Timed out waiting for RippleHire resume file to finish analyzing"), r;
}
function confirmRipplehireResumeUpload() {
  let e = document.querySelector(L);
  return !!e && (e.click(), true);
}
let V = ["text", "email", "tel", "search", "url", "number", "date"], W = 800, G = 15e3, K = 200;
function X(e) {
  let t = e.tagName.toLowerCase();
  if ("textarea" === t || "select" === t) return true;
  if ("input" !== t) return false;
  let r = (e.getAttribute("type") || "text").toLowerCase();
  return V.includes(r);
}
function J() {
  return Array.from(document.querySelectorAll("input, textarea, select")).filter(X).map((e) => [e.tagName, e.id, e.getAttribute("name") || "", e.value || ""].join(":")).join("\n");
}
async function waitForRipplehireResumeParsingComplete({ stableMs: e = W, timeout: t = G, pollInterval: r = K } = {}) {
  let n = J(), o2 = Date.now(), i2 = false, a2 = await observer.waitForCondition(() => {
    let t2 = J();
    return t2 !== n ? (n = t2, o2 = Date.now(), i2 = true, false) : i2 && Date.now() - o2 >= e;
  }, { timeout: t, interval: r });
  return a2 || console.warn("[uploadResume] Timed out waiting for RippleHire resume parsing to settle"), a2;
}
async function uploadResume(e, t, r) {
  let n = await O();
  if (n) {
    let o2 = U(n);
    if (console.log("[RippleHire][resume-upload] flow-detected", { flow: o2, inputId: n.id || null }), await dom.uploadFiles(n, await answerMethods.fetchPdfAsBlob(e), t, r, "Resume/CV"), "inline-direct" === o2) {
      console.log("[RippleHire][resume-upload] parser-wait-skipped", { flow: o2, reason: "direct-upload-layout" });
      return;
    }
    let i2 = await Y(), s2 = z();
    if (console.log("[RippleHire][resume-upload] modal-confirm", { flow: o2, fileReady: i2, confirmed: s2 }), !s2) {
      console.warn("[RippleHire][resume-upload] parser-wait-skipped", { flow: o2, reason: "modal-submit-missing" });
      return;
    }
    let u2 = await Q();
    console.log("[RippleHire][resume-upload] parser-wait-complete", { flow: o2, parserSettled: u2 });
  }
}

export {
  findRipplehirePhoneCountryOption,
  formatRipplehirePhoneValue,
} from "./phone-country-code.ts"

export {
  agreementCheckboxField,
  confirmRipplehireResumeUpload,
  fillAutocomplete,
  fillCheckboxField,
  fillCountryFromStateFallback,
  fillInputTextField,
  fillMultiselect,
  fillPhoneCountryCode,
  fillRadioGroupField,
  fillSelectField,
  getRipplehireMultiselectCandidateValues,
  normalizeRipplehireOptionText,
  openRipplehireResumeUploadInput,
  preselectExpectedSalaryCurrencyToUsd,
  shouldKeepRipplehireCountryValue,
  uploadResume,
  waitForRipplehireResumeFileReady,
  waitForRipplehireResumeParsingComplete,
}
