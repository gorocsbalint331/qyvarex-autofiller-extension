// @ts-nocheck
/**
 * Paylocity — DOM fill operations (address, country, education, skills, uploads).
 */

import * as dayjs from "dayjs"
import * as inputUtils from "../../crawler/fill-utils/input.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as observer from "../../methods/observer.ts"
import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.ts"
import * as xpath from "../../../core/xpath.js"
import * as urlStore from "../../../store/url.js"
import * as delay from "../../../utils/delay.js"
import * as rules from "./rules.ts"
import * as profileStore from "../../../store/profile.js"
import * as dateHelpers from "./date.ts"

const dayjsDefault = { default: dayjs }

async function dispatchClickSequence(e, t = 30, r = 100) {
  e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window
  })), await delay.delay(t), e.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: true,
    cancelable: true,
    view: window
  })), await delay.delay(t), e.dispatchEvent(new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  })), await delay.delay(r);
}
async function dispatchMousedown(e, t = 100) {
  e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window
  })), await delay.delay(t);
}
let querySelectorWithRetry = async (e, t, r = 10, n = 100) => {
  let o2 = e.querySelector(t), i2 = 0;
  for (; !o2 && i2 < r; ) await delay.delay(n), o2 = e.querySelector(t), i2++;
  return o2;
}, PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS = 100, PERSONAL_ADDRESS_CONTROL_ORDER = [
  "public-site-address-address-1",
  "public-site-address-address-2",
  "public-site-address-city",
  "public-site-address-county",
  "public-site-address-us-state-select-wrapper",
  "public-site-address-us-state",
  "public-site-address-zip"
], PERSONAL_ADDRESS_TEXT_IDS = /* @__PURE__ */ new Set([
  "public-site-address-address-1",
  "public-site-address-address-2",
  "public-site-address-city",
  "public-site-address-county",
  "public-site-address-zip"
]), PERSONAL_ADDRESS_STATE_IDS = /* @__PURE__ */ new Set(["public-site-address-us-state-select-wrapper", "public-site-address-us-state"]);
function isPaylocityPersonalStateControlId(e) {
  return PERSONAL_ADDRESS_STATE_IDS.has(e);
}
function isPaylocityPersonalAddressInput(e) {
  return !!e && PERSONAL_ADDRESS_TEXT_IDS.has(e.id);
}
function getPaylocityPersonalAddressInputMode(e) {
  return "list" === e.getAttribute("aria-autocomplete") ? "list" : "text";
}
function getPersonalAddressControlId(e) {
  let t = e?.$input;
  return t && (t.id || t.querySelector("input")?.id) || "";
}
let PERSONAL_ADDRESS_LABEL_ALIASES = {
  "public-site-address-address-1": ["Address Line 1", "Address 1"],
  "public-site-address-address-2": ["Address Line 2", "Address 2"],
  "public-site-address-city": ["City", "Locality"],
  "public-site-address-county": ["County"],
  "public-site-address-us-state-select-wrapper": ["State", "Administrative Area", "Province"],
  "public-site-address-us-state": ["State", "Administrative Area", "Province"],
  "public-site-address-zip": ["Zip Code", "Zip", "Postal Code", "Postal"]
};
function getPersonalAddressAnswerValue(e, t) {
  let r = getPersonalAddressControlId(e), n = [e.label, ...PERSONAL_ADDRESS_LABEL_ALIASES[r] ?? []];
  for (let e10 of n) {
    let r2 = Object.keys(t).find((t2) => answerMethods.isMatched(e10, t2));
    if (!r2) continue;
    let n2 = t[r2];
    if (Array.isArray(n2)) {
      let e11 = n2.find((e12) => String(e12 ?? "").trim());
      if (void 0 !== e11) return e11;
      continue;
    }
    if (String(n2 ?? "").trim()) return n2;
  }
}
function getLivePersonalAddressRule(e) {
  let t = getPersonalAddressControlId(e), r = t && "undefined" != typeof document ? document.getElementById(t) : null;
  return r ? {
    ...e,
    $input: r
  } : e.$input && false !== e.$input.isConnected ? e : null;
}
function readPersonalAddressLiveValue(e) {
  let t = e.$input;
  return t ? t instanceof HTMLInputElement ? t.value.trim() : readSelectCommittedValue(t).value.trim() : "";
}
function isPersonalAddressValueMissing(e, t) {
  let r = t.trim();
  if (!r) return true;
  let n = getPersonalAddressControlId(e);
  return isPaylocityPersonalStateControlId(n) && /^(select|choose|please select|--)/i.test(r);
}
function findPersonalStateLiveControl(e) {
  if ("undefined" == typeof document) return null;
  let t = document.getElementById(e);
  return t ? e.endsWith("-select-wrapper") ? t : t.closest('[id*="-select-wrapper"]') || t : null;
}
function getOwnedListbox(e) {
  if ("undefined" == typeof document) return null;
  let t = e.querySelector("input, button"), r = e.getAttribute("aria-controls") || e.getAttribute("aria-owns") || t?.getAttribute(
    "aria-controls"
  ) || t?.getAttribute("aria-owns");
  return r ? document.getElementById(r) : null;
}
function getListboxOptions(e) {
  let t = Array.from(e.querySelectorAll("div[title]"));
  return t.length > 0 ? t : Array.from(e.querySelectorAll(
    "li[role='option'], li, div[role='option']"
  ));
}
async function waitUntilPersonalAddressReady(e) {
  if (e()) return true;
  let t = document.querySelector('[data-automation-id="public-site-address"]');
  if (!t) return false;
  let r = Date.now() + 1500;
  for (; Date.now() < r; )
    if (await waitForPaylocityPersonalAddressQuiet(t, {
      quietMs: 100,
      timeoutMs: Math.min(500, r - Date.now())
    }), e()) return true;
  return false;
}
async function fillPaylocityPersonalStateField(e, t, r = {}) {
  if (!isPaylocityPersonalStateControlId(e)) return false;
  let n = t.map((e10) => String(e10).trim()).filter(Boolean);
  if (0 === n.length) return false;
  let o2 = r.findLiveControl ?? findPersonalStateLiveControl, i2 = r.getOwnedListbox ?? getOwnedListbox, a2 = r.getOptions ?? getListboxOptions, l2 = r.readCommittedValue ?? ((e10) => readSelectCommittedValue(e10).value), s2 = r.waitForReady ?? waitUntilPersonalAddressReady, u2 = r.waitForCommitted ?? waitUntilPersonalAddressReady, c2 = r.openControl ?? (async (e10) => {
    let t2 = e10.querySelector("input, button") || e10;
    await dispatchClickSequence(t2, 50, 0);
  }), d2 = r.clickOption ?? (async (e10) => {
    e10.scrollIntoView({
      block: "center"
    }), await dispatchClickSequence(e10, 50, 0);
  }), f2 = o2(e);
  if (!f2) return false;
  if (isComparableTextMatch(l2(f2), n)) return true;
  await c2(f2);
  let p2 = () => {
    let t2 = o2(e);
    if (!t2) return null;
    let r2 = i2(t2);
    if (!r2) return null;
    let l3 = a2(r2).filter((e10) => isComparableTextMatch(e10.getAttribute?.("title")?.trim() || e10.textContent?.trim() || "", n));
    return 1 === l3.length ? l3[0] : null;
  }, m2 = await s2(() => !!p2()), h2 = m2 ? p2() : null;
  if (!h2) return console.warn("[Paylocity][PersonalAddress][State] fill failed", {
    controlId: e,
    reason: "owned_option_not_ready"
  }), false;
  await d2(h2);
  let g2 = await u2(() => {
    let t2 = o2(e);
    return !!(t2 && isComparableTextMatch(l2(t2), n));
  });
  return console.info("[Paylocity][PersonalAddress][State] committed readback", {
    controlId: e,
    committed: g2
  }), g2;
}
function getPaylocityMissingPersonalAddressRules(e, t, r = {}) {
  let n = r.getAnswerValue ?? getPersonalAddressAnswerValue, o2 = r.readLiveValue ?? readPersonalAddressLiveValue, i2 = r.getLiveRule ?? getLivePersonalAddressRule;
  return orderPaylocityPersonalAddressRules(e.filter(isPaylocityPersonalAddressRule)).filter((e10) => {
    let r2 = i2(e10);
    if (!r2) return false;
    let a2 = n(r2, t);
    return "" !== String(a2 ?? "").trim() && isPersonalAddressValueMissing(r2, o2(r2));
  });
}
async function reconcilePaylocityPersonalAddress(e) {
  let t = e.getLiveRule ?? getLivePersonalAddressRule, r = e.readLiveValue ?? readPersonalAddressLiveValue, n = {
    getAnswerValue: e.getAnswerValue,
    getLiveRule: t,
    readLiveValue: r
  }, o2 = [], i2 = [], a2 = async (n2) => {
    let a3 = t(n2);
    if (!a3) return false;
    let l3 = getPersonalAddressControlId(a3), s3 = e.getAnswerValue ?? getPersonalAddressAnswerValue, u3 = s3(a3, e.record);
    o2.push(l3), await e.fillRule(a3, u3);
    let c2 = t(n2), d2 = !!(c2 && !isPersonalAddressValueMissing(c2, r(c2)));
    return d2 && i2.push(l3), d2;
  }, l2 = getPaylocityMissingPersonalAddressRules(e.rules, e.record, n).find((e10) => "public-site-address-address-1" === getPersonalAddressControlId(e10));
  if (l2) {
    let r2 = t(l2), n2 = !!r2?.$input && "list" === getPaylocityPersonalAddressInputMode(r2.$input), o3 = await a2(l2);
    o3 && n2 && await e.waitForQuiet();
  }
  let s2 = new Set(o2);
  for (let t2 = 0; t2 < e.rules.length; t2++) {
    let t3 = getPaylocityMissingPersonalAddressRules(e.rules, e.record, n).find((e10) => {
      let t4 = getPersonalAddressControlId(e10);
      return "public-site-address-address-1" !== t4 && !s2.has(t4);
    });
    if (!t3) break;
    let r2 = getPersonalAddressControlId(t3);
    s2.add(r2), await a2(t3);
  }
  let u2 = getPaylocityMissingPersonalAddressRules(e.rules, e.record, n).map(getPersonalAddressControlId);
  return {
    attemptedControlIds: o2,
    filledControlIds: i2,
    missingControlIds: u2
  };
}
function isPaylocityPersonalAddressRule(e) {
  let t = getPersonalAddressControlId(e);
  return PERSONAL_ADDRESS_CONTROL_ORDER.includes(t);
}
function orderPaylocityPersonalAddressRules(e) {
  return e.map((e10, t) => ({
    rule: e10,
    originalIndex: t
  })).sort((e10, t) => {
    let r = PERSONAL_ADDRESS_CONTROL_ORDER.indexOf(getPersonalAddressControlId(e10.rule)), n = PERSONAL_ADDRESS_CONTROL_ORDER.indexOf(getPersonalAddressControlId(t.rule)), o2 = -1 === r ? Number.MAX_SAFE_INTEGER : r, i2 = -1 === n ? Number.MAX_SAFE_INTEGER : n;
    return o2 - i2 || e10.originalIndex - t.originalIndex;
  }).map(({
    rule: e10
  }) => e10);
}
function createPaylocitySingleFlight(e) {
  let t = null;
  return (...r) => {
    if (t) return console.info("[Paylocity] coalesced duplicate Autofill start"), t;
    let n = e(...r);
    t = n;
    let o2 = () => {
      t === n && (t = null);
    };
    return n.then(o2, o2), n;
  };
}
function waitForPaylocityPersonalAddressQuiet(e, t = {}) {
  let r = t.quietMs ?? 150, n = t.timeoutMs ?? 1500, o2 = t.observe ?? ((e10, t2) => {
    if ("function" != typeof MutationObserver) return () => {
    };
    let r2 = new MutationObserver(t2);
    return r2.observe(e10, {
      attributes: true,
      childList: true,
      subtree: true
    }), () => r2.disconnect();
  });
  return new Promise((t2) => {
    let i2, a2, l2 = false, s2 = () => {
    }, u2 = (e10) => {
      l2 || (l2 = true, clearTimeout(i2), clearTimeout(a2), s2(), t2(e10));
    }, c2 = () => {
      clearTimeout(i2), i2 = setTimeout(() => u2(true), r);
    };
    s2 = o2(e, c2), a2 = setTimeout(() => u2(false), n), c2();
  });
}
function normalizePersonalAddressOptionText(e) {
  return e.normalize("NFKD").replace(/\p{M}+/gu, "").replace(/[^\p{L}\p{N}]+/gu, " ").trim().replace(/\s+/g, " ").toLowerCase();
}
function isExactPersonalAddressOption(e, t) {
  let r = normalizePersonalAddressOptionText(getOptionDisplayText(e)), n = normalizePersonalAddressOptionText(t);
  return r === n || r.startsWith(`${n} `);
}
function findLivePersonalAddressInput(e) {
  let t = document.getElementById(e);
  return t instanceof HTMLInputElement && false !== t.isConnected ? t : null;
}
function getAutocompleteOptions(e) {
  let t = e.getAttribute("aria-controls"), r = t ? document.getElementById(t) : null;
  return r ? Array.from(r.querySelectorAll('[role="option"], li, .pcty-input-select__option')) : [];
}
function getOptionDisplayText(e) {
  return e.getAttribute("title")?.trim() || e.textContent?.trim() || "";
}
function setNativeInputValue(e, t) {
  e.focus();
  let r = Object.getPrototypeOf(e), n = Object.getOwnPropertyDescriptor(r, "value")?.set, o2 = e.value;
  n ? n.call(e, t) : e.value = t;
  let i2 = e._valueTracker;
  i2?.setValue?.(o2), e.dispatchEvent(new Event("input", {
    bubbles: true,
    cancelable: true
  }));
}
async function fillPaylocityPersonalAddressField(e, t, r = {}) {
  if (!isPaylocityPersonalAddressInput(e) || !t.trim()) return false;
  let n = r.findLiveInput ?? findLivePersonalAddressInput, o2 = r.wait ?? delay.delay, i2 = t.trim(), l2 = n(e.id);
  if (!l2) return false;
  let s2 = getPaylocityPersonalAddressInputMode(l2);
  if (console.info("[Paylocity][PersonalAddress] fill start", {
    controlId: l2.id,
    mode: s2,
    valueLength: i2.length
  }), "text" === s2) {
    let t2 = r.writeText ?? inputUtils.fillDefaultInputField;
    await t2(l2, i2), await o2(PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS);
    let u3 = n(e.id), c3 = u3?.value.trim() === i2;
    return console.info("[Paylocity][PersonalAddress] fill readback", {
      controlId: e.id,
      mode: s2,
      committed: c3
    }), c3;
  }
  let u2 = r.writeAutocompleteQuery ?? (async (e10, t2) => {
    setNativeInputValue(e10, t2);
  });
  await u2(l2, i2), await o2(PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS);
  let c2 = n(e.id);
  if (!c2 || "list" !== getPaylocityPersonalAddressInputMode(c2)) return console.warn("[Paylocity][PersonalAddress] fill failed", {
    controlId: e.id,
    mode: s2,
    reason: "autocomplete_input_replaced"
  }), false;
  let d2 = r.getAutocompleteOptions ?? getAutocompleteOptions, f2 = d2(c2).filter((e10) => isExactPersonalAddressOption(e10, i2));
  if (1 !== f2.length) return console.warn("[Paylocity][PersonalAddress] fill failed", {
    controlId: e.id,
    mode: s2,
    reason: "no_unique_exact_option",
    optionCount: f2.length
  }), false;
  let m2 = r.clickAutocompleteOption ?? (async (e10) => {
    await dispatchClickSequence(e10, 0, 0);
  });
  await m2(f2[0]), await o2(PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS);
  let h2 = n(e.id), g2 = h2?.value.trim() === i2;
  return console.info("[Paylocity][PersonalAddress] fill readback", {
    controlId: e.id,
    mode: s2,
    committed: g2
  }), g2;
}
function findSectionByLabelPredicate(e) {
  let t = Array.from(document.querySelectorAll("label")), r = t.find((t2) => e(t2.textContent?.trim().toLowerCase() || ""));
  return r?.closest(".section-wrapper");
}
function getCoverLetterUploadDom() {
  let e = findSectionByLabelPredicate((e10) => e10.includes("cover letter")) || document.getElementById("btn-coverLetter")?.closest(
    ".section-wrapper"
  ), t = e?.querySelector('input[type="file"]#btn-coverLetter') || document.querySelector(
    'input[type="file"]#btn-coverLetter'
  ), r = e?.querySelector('button[data-automation-id="btn-coverLetter"]') || document.querySelector(
    'button[data-automation-id="btn-coverLetter"]'
  ), n = e?.querySelector("tbody tr td span.color-blue") || null, o2 = (e?.querySelector("a.button.secondary.icon, button.button.secondary.icon") ?? e?.querySelector('[aria-label="Remove File"]')?.closest("a,button")) || null;
  return {
    section: e,
    input: t,
    triggerButton: r,
    uploadedFileName: n,
    removeButton: o2
  };
}
function findResumeFileInput() {
  let e = findSectionByLabelPredicate((e10) => e10.includes("resume") || e10.includes("curriculum vitae") || e10.includes("cv")), t = isVisibleElement(e) && e?.querySelector('input[type="file"]') || null;
  if (t) return t;
  let r = document.getElementById("forceUploadResumeModal");
  if (isVisibleElement(r)) {
    let e10 = r.querySelector(
      'input[type="file"]#btn-forceResume, input[type="file"][id*="resume" i]'
    );
    if (e10) return e10;
  }
  let n = Array.from(document.querySelectorAll(
    'input[type="file"]#btn-resume, input[type="file"][id*="resume" i]'
  )).find(isResumeInputInVisibleContainer);
  return n || Array.from(document.querySelectorAll('input[type="file"]:not(#btn-coverLetter)')).find((e10) => isResumeInputInVisibleContainer(e10) && looksLikeResumeInput(e10)) || null;
}
function isResumeInputInVisibleContainer(e) {
  let t = e.closest(".section-wrapper, #forceUploadResumeModal, .modal");
  return t ? isVisibleElement(t) : isElementDisplayed(e);
}
function looksLikeResumeInput(e) {
  let t = e.closest(".section-wrapper, #forceUploadResumeModal, .modal"), r = [e.id, e.name, e.getAttribute("data-automation-id"), t?.textContent].filter(Boolean).join(
    " "
  ).toLowerCase();
  return r.includes("resume") || r.includes("curriculum vitae") || /\bcv\b/.test(r);
}
function isVisibleElement(e) {
  return isElementDisplayed(e);
}
function isElementDisplayed(e) {
  if (!e || e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden")) return false;
  let t = e.ownerDocument?.defaultView || ("undefined" != typeof window ? window : null), r = t?.getComputedStyle?.(e);
  return (!r || "none" !== r.display && "hidden" !== r.visibility && "0" !== r.opacity) && ("function" != typeof e.getClientRects || e.getClientRects().length > 0);
}
function hasPaylocityCoverLetterSlot() {
  let {
    section: e,
    input: t,
    triggerButton: r
  } = getCoverLetterUploadDom();
  return !!e && !!t && !!r;
}
function hasPaylocityCoverLetterUploadCapability() {
  let e = getCoverLetterUploadDom();
  if (!e.section || !e.input || !e.triggerButton) return false;
  let t = !!e.uploadedFileName?.textContent?.trim();
  return !t || !!e.removeButton;
}
function hasUploadedPaylocityCoverLetter() {
  let {
    uploadedFileName: e,
    removeButton: t
  } = getCoverLetterUploadDom();
  return !!e?.textContent?.trim() && !!t;
}
async function getPaylocityCoverLetterStatus() {
  return await waitPageClean(), await observer.waitForCondition(() => hasPaylocityCoverLetterUploadCapability(), {
    timeout: 5e3,
    interval: 100,
    observeTarget: document.body
  }), hasPaylocityCoverLetterUploadCapability() ? "required" : "";
}
async function clearUploadedCoverLetter() {
  let {
    section: e,
    uploadedFileName: t,
    removeButton: r
  } = getCoverLetterUploadDom();
  return !t?.textContent?.trim() || !!r && (await dispatchClickSequence(r), await observer.waitForCondition(() => {
    let e10 = getCoverLetterUploadDom();
    return !e10.uploadedFileName?.textContent?.trim() && !e10.triggerButton?.disabled;
  }, {
    timeout: 4e3,
    interval: 100,
    observeTarget: e || document.body
  }));
}
function normalizePaylocityCountry(e) {
  if ("string" == typeof e) {
    let t = e.trim(), r = t.toLowerCase();
    return "ca" === r || "canada" === r ? "Canada" : "us" === r || "usa" === r || "united states" === r || "united states of america" === r ? "United States" : "uk" === r || "gb" === r || "gbr" === r || "great britain" === r || "united kingdom" === r ? "United Kingdom" : t;
  }
  return "";
}
function getCountryCandidateValues(e) {
  let t = normalizePaylocityCountry(e);
  return "Canada" === t ? ["Canada", "CANADA"] : "United States" === t ? [
    "United States",
    "United States of America",
    "USA",
    "UNITED STATES"
  ] : t ? [t] : [];
}
function findCountryControl() {
  let e = document.getElementById("public-site-address-country-select-wrapper");
  if (e) return e;
  let t = document.getElementById("public-site-address-country"), r = t?.closest('[id*="-select-wrapper"], .pcty-input-select-full-container, [role="combobox"]');
  return r || document.querySelector(
    '[id*="address-country"][id*="-select-wrapper"], [data-automation-id*="country"][id*="-select-wrapper"]'
  );
}
let COUNTRY_OPTION_POLL_ATTEMPTS = 20, COUNTRY_COMMIT_POLL_ATTEMPTS = 12, COUNTRY_POLL_INTERVAL_MS = 50, COUNTRY_OPEN_ATTEMPTS = 2, COUNTRY_RECOVERY_ATTEMPTS = 2;
function readCountryDisplayValue(e) {
  return e.querySelector(".input-select-input-single-value")?.textContent?.trim() || "";
}
function jsonPreview(e) {
  return JSON.stringify(e);
}
async function typeIntoCountrySearchInput(e, t) {
  let r = Object.getPrototypeOf(e), n = Object.getOwnPropertyDescriptor(r, "value")?.set, o2 = (t2, r2) => {
    n ? n.call(e, t2) : e.value = t2;
    let o3 = e._valueTracker;
    o3?.setValue?.(r2);
  };
  o2("", e.value), e.dispatchEvent("function" == typeof InputEvent ? new InputEvent("input", {
    bubbles: true,
    inputType: "deleteContentBackward",
    data: null
  }) : new Event("input", {
    bubbles: true
  }));
  let i2 = "";
  for (let r2 of t) {
    e.dispatchEvent("function" == typeof KeyboardEvent ? new KeyboardEvent("keydown", {
      key: r2,
      bubbles: true,
      cancelable: true
    }) : new Event("keydown", {
      bubbles: true,
      cancelable: true
    })), "function" == typeof InputEvent && e.dispatchEvent(new InputEvent("beforeinput", {
      data: r2,
      inputType: "insertText",
      bubbles: true,
      cancelable: true
    }));
    let t2 = `${i2}${r2}`;
    o2(t2, i2), e.dispatchEvent("function" == typeof InputEvent ? new InputEvent("input", {
      data: r2,
      inputType: "insertText",
      bubbles: true
    }) : new Event("input", {
      bubbles: true
    })), e.dispatchEvent("function" == typeof KeyboardEvent ? new KeyboardEvent("keyup", {
      key: r2,
      bubbles: true,
      cancelable: true
    }) : new Event("keyup", {
      bubbles: true,
      cancelable: true
    })), i2 = t2, await delay.delay(10);
  }
  e.dispatchEvent(new Event("change", {
    bubbles: true
  }));
}
function findExpandedListbox(e, t) {
  if ("true" !== e.getAttribute("aria-expanded")) return null;
  let r = t.getAttribute("aria-controls") || t.getAttribute("aria-owns") || e.getAttribute(
    "aria-controls"
  ) || e.getAttribute("aria-owns");
  if (r) {
    let e10 = document.getElementById(r);
    if (e10) return e10;
  }
  let n = (e.id || t.id || "").replace(/\./g, "-").replace(/-select-wrapper$/, "");
  if (n) {
    let e10 = document.querySelector(`[id*="${n}"][id*="dropdown-list-container"]`);
    if (e10) return e10;
  }
  return null;
}
function getCountrySearchContext(e) {
  let t = findCountryControl() || e, r = t.querySelector("input");
  return r && false !== r.isConnected ? {
    control: t,
    input: r,
    listbox: findExpandedListbox(t, r)
  } : null;
}
async function ensureCountrySearchAvailable(e, t) {
  let r = "missing_search_input";
  for (let t2 = 0; t2 < COUNTRY_OPEN_ATTEMPTS; t2++) {
    let t3 = getCountrySearchContext(e);
    if (!t3) {
      r = "missing_search_input", await delay.delay(COUNTRY_POLL_INTERVAL_MS);
      continue;
    }
    if (t3.listbox) return t3;
    "true" !== t3.control.getAttribute("aria-expanded") && await dispatchClickSequence(t3.input, 50, 100);
    for (let t4 = 0; t4 < COUNTRY_OPTION_POLL_ATTEMPTS; t4++) {
      let t5 = getCountrySearchContext(e);
      if (t5) {
        if (t5.listbox) return t5;
        if ("true" !== t5.control.getAttribute("aria-expanded")) {
          r = "not_expanded";
          break;
        }
        r = "missing_owned_listbox";
      } else r = "missing_search_input";
      await delay.delay(COUNTRY_POLL_INTERVAL_MS);
    }
  }
  return console.warn(`[Paylocity][Country] search unavailable phase=${t} reason=${r}`), null;
}
function getCountryOptionNodes(e) {
  let t = e.querySelector(".pcty-input-select__menu-list") || e, r = Array.from(t.querySelectorAll("div[title]"));
  return r.length > 0 ? r : Array.from(t.querySelectorAll(
    "li, [role='option'], .pcty-input-select__option"
  ));
}
function getCountryOptionText(e) {
  return e.getAttribute("title")?.trim() || e.textContent?.trim() || "";
}
function findUniqueCountryOption(e, t) {
  let r = e.filter((e10) => isComparableTextMatch(getCountryOptionText(e10), t));
  return 1 === r.length ? r[0] : null;
}
async function clearCountrySearch(e) {
  let t = findCountryControl() || e, r = t.querySelector("input");
  r && (await typeIntoCountrySearchInput(r, ""), "true" === t.getAttribute("aria-expanded") && await dispatchClickSequence(r), r.blur());
}
async function fillCountryFromCandidates(e, t) {
  let r = readCountryDisplayValue(e);
  if (isComparableTextMatch(r, t)) return console.info(
    `[Paylocity][Country] already committed currentValue=${ey(r)} candidateValues=${ey(t)}`
  ), true;
  let n = e.querySelector("input");
  if (!n) return console.warn(
    `[Paylocity][Country] fill failed reason=missing_search_input currentValue=${ey(r)} candidateValues=${ey(t)}`
  ), false;
  let o2 = await ensureCountrySearchAvailable(e, "initial");
  if (!o2) return console.warn(
    `[Paylocity][Country] fill failed reason=search_unavailable phase=initial currentValue=${ey(r)} candidateValues=${ey(t)}`
  ), false;
  (n = o2.input).focus(), await typeIntoCountrySearchInput(n, t[0]);
  let i2 = null, a2 = [], l2 = 0;
  for (let r2 = 0; r2 < COUNTRY_OPTION_POLL_ATTEMPTS; r2++) {
    let r3 = getCountrySearchContext(e), o3 = !r3 || "true" !== r3.control.getAttribute("aria-expanded"), s3 = !!(r3 && r3.input !== n);
    if (o3 || s3 || false === n.isConnected) {
      if (l2 >= COUNTRY_RECOVERY_ATTEMPTS || (l2++, console.info(
        `[Paylocity][Country] search recovery attempt=${l2} reason=${o3 ? "not_expanded" : s3 ? "input_replaced" : "input_disconnected"}`
      ), !(r3 = await ensureCountrySearchAvailable(e, "recovery")))) break;
      (n = r3.input).focus(), await typeIntoCountrySearchInput(n, t[0]);
    }
    let u2 = r3?.listbox;
    if (u2) {
      let e10 = getCountryOptionNodes(u2);
      if (a2 = e10.map(getCountryOptionText).filter(Boolean).slice(0, 20), i2 = findUniqueCountryOption(e10, t)) break;
    }
    await delay.delay(COUNTRY_POLL_INTERVAL_MS);
  }
  if (!i2) return console.warn(
    `[Paylocity][Country] fill failed reason=no_unique_exact_option searchTerm=${ey(t[0])} candidateValues=${ey(t)} mountedOptionValues=${ey(a2)}`
  ), await clearCountrySearch(e), false;
  i2.scrollIntoView({
    block: "center"
  }), await dispatchClickSequence(i2);
  let s2 = findCountryControl() || e;
  s2.querySelector("input")?.blur();
  for (let r2 = 0; r2 < COUNTRY_COMMIT_POLL_ATTEMPTS; r2++) {
    let r3 = findCountryControl() || e;
    if (isComparableTextMatch(readCountryDisplayValue(r3), t)) return console.info(
      `[Paylocity][Country] committed committedValue=${ey(eb(r3))} candidateValues=${ey(t)}`
    ), true;
    await delay.delay(COUNTRY_POLL_INTERVAL_MS);
  }
  return console.warn(
    `[Paylocity][Country] fill failed reason=commit_readback_mismatch committedValue=${ey(eb(ed() || e))} candidateValues=${ey(t)}`
  ), await clearCountrySearch(e), false;
}
async function waitForCountryCleared(e) {
  for (let t = 0; t < COUNTRY_COMMIT_POLL_ATTEMPTS; t++) {
    let t2 = findCountryControl() || e;
    if (!readCountryDisplayValue(t2)) return true;
    await delay.delay(COUNTRY_POLL_INTERVAL_MS);
  }
  return false;
}
async function restoreOrClearCountry(e, t) {
  if (t) return await fillCountryFromCandidates(e, [t]);
  await clearCountrySearch(e);
  let r = findCountryControl() || e;
  if (!readCountryDisplayValue(r)) return true;
  let n = r.querySelector(".css-b40bim") || r.querySelector("[aria-label='delete']")?.closest(
    "[tabindex]"
  );
  return !!n && (await dispatchClickSequence(n), await waitForCountryCleared(r));
}
async function fillCountryWithRollback(e, t) {
  let r = readCountryDisplayValue(e);
  if (await fillCountryFromCandidates(e, t)) return true;
  let n = findCountryControl() || e, o2 = readCountryDisplayValue(n), i2 = r ? isComparableTextMatch(o2, [r]) : !o2;
  if (i2) return await clearCountrySearch(n), false;
  let a2 = await restoreOrClearCountry(n, r);
  return a2 || console.warn("[Paylocity][Country] rollback failed", {
    reason: "not_restored"
  }), await clearCountrySearch(n), false;
}
async function fillCountry(e) {
  let t = getCountryCandidateValues(e);
  if (0 === t.length) return console.warn(
    "[Paylocity][Country] fill skipped reason=empty_source_country"
  ), false;
  let r = findCountryControl();
  return r ? (console.info(
    `[Paylocity][Country] fill start sourceCountry=${ey(eu(e))} candidateValues=${ey(t)} currentValue=${ey(eb(r))}`
  ), await fillCountryWithRollback(r, t)) : (console.warn(
    `[Paylocity][Country] fill failed reason=missing_country_control sourceCountry=${ey(eu(e))} candidateValues=${ey(t)}`
  ), false);
}
function normalizeComparableText(e) {
  return String(e ?? "").normalize("NFKD").replace(/\p{M}+/gu, "").replace(/[^\p{L}\p{N}]+/gu, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function isComparableTextMatch(e, t) {
  let r = normalizeComparableText(e);
  return "" !== r && t.some((e10) => normalizeComparableText(e10) === r);
}
function readSelectCommittedValue(e) {
  let t = Array.from(e.querySelectorAll(".input-select-input-single-value, .rw-input")).map((e10) => e10.textContent?.trim() || "").find(Boolean);
  if (t) return {
    source: "display",
    value: t
  };
  let r = e.querySelector("input")?.value?.trim();
  if (r) return {
    source: "input",
    value: r
  };
  let n = Array.from(e.querySelectorAll("button[aria-label]")).map((e10) => e10.getAttribute("aria-label")?.trim() || "").map((e10) => e10.match(/^(.+?)\s+Dismiss$/i)?.[1]?.trim() || "").find(Boolean);
  return n ? {
    source: "tag",
    value: n
  } : {
    source: "none",
    value: ""
  };
}
async function fillListboxSelectButtonField(e, t, r = false) {
  if (!e) return false;
  let n = readSelectCommittedValue(e), o2 = n.value, i2 = /^(select|choose|please select|--)/i.test(o2) || "" === o2;
  if (console.info("[Paylocity][Select] committed readback", {
    controlId: e.id || "unknown",
    stage: "before_fill",
    source: n.source,
    hasCommittedValue: !!o2,
    isPlaceholder: i2
  }), !i2 && t.length > 0) {
    let e10 = String(t[0]).trim();
    if (r ? isComparableTextMatch(o2, t) : answerMethods.isMatched(o2, e10)) return true;
  }
  let a2 = e.querySelector("input") || null, s2 = a2 || e;
  await dispatchClickSequence(s2, 50, 300);
  let u2 = null, c2 = e.getAttribute("aria-controls");
  if (c2 && (u2 = document.getElementById(c2)), !u2) {
    let t2 = e.getAttribute("aria-owns") || s2.getAttribute("aria-owns");
    t2 && (u2 = document.getElementById(t2));
  }
  if (!u2) {
    let t2 = e.id || s2.id || "";
    if (t2) {
      let e10 = t2.replace(/\./g, "-").replace(/-select-wrapper$/, ""), r2 = `[id*="${e10}"][id*="dropdown-list-container"]`, n2 = document.querySelector(r2);
      n2 && null !== n2.offsetParent && (u2 = n2);
    }
  }
  if (!u2) {
    let e10 = document.querySelectorAll(".rw-popup-container");
    e10.length > 0 && (u2 = e10[e10.length - 1]);
  }
  if (!u2) return await dispatchClickSequence(s2), false;
  let d2 = u2.querySelector(".pcty-input-select__menu-list") || u2, f2 = [], m2 = d2.querySelectorAll("div[title]");
  if (m2.length > 0) f2 = Array.from(m2);
  else {
    let t2 = e.getAttribute("aria-owns");
    if (t2) {
      let e10 = document.getElementById(t2);
      e10 && (f2 = Array.from(e10.querySelectorAll("li")));
    }
    0 === f2.length && (f2 = Array.from(d2.querySelectorAll("ul li, div[role='option']")));
  }
  let h2 = f2.map((e10) => e10.getAttribute("title")?.trim() || e10.textContent?.trim() || ""), g2 = -1;
  if (t.length > 0)
    for (let e10 of t) {
      let t2 = String(e10).trim();
      if (/^\d+$/.test(t2)) {
        let e11 = Number(t2);
        if (Number.isInteger(e11) && e11 >= 0 && e11 < h2.length) {
          g2 = e11;
          break;
        }
      }
      if (-1 !== (g2 = h2.findIndex((t3) => r ? isComparableTextMatch(t3, [e10]) : answerMethods.isMatched(t3, e10)))) break;
    }
  if (-1 === g2) return await dispatchClickSequence(s2), false;
  {
    let n2 = f2[g2];
    n2.scrollIntoView({
      block: "center"
    }), await delay.delay(50), await dispatchClickSequence(n2), await delay.delay(100);
    let o3 = readSelectCommittedValue(e), i3 = o3.value, a3 = !!(i3 && (r ? isComparableTextMatch(i3, t) : t.some((e10) => answerMethods.isMatched(i3, e10))));
    return console.info("[Paylocity][Select] committed readback", {
      controlId: e.id || "unknown",
      stage: "after_selection",
      source: o3.source,
      hasCommittedValue: !!i3,
      committed: a3
    }), a3;
  }
}
async function fillPaylocityEducationDegreeObtained(e, t) {
  if (!e) return false;
  let r = await querySelectorWithRetry(e, 'div[data-for*="Obtained"]');
  if (!r) return false;
  r.dispatchEvent(new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  })), await delay.delay(100);
  let n = await querySelectorWithRetry(e, 'ul[id*="educationHistory.degreeId"]');
  if (!n) return false;
  let o2 = Array.from(n.querySelectorAll("li"));
  if (0 === o2.length) return false;
  let i2 = (t ?? []).map((e10) => String(e10).trim()).filter(Boolean), a2 = null;
  for (let e10 of i2) {
    let t2 = o2.findIndex((t3) => answerMethods.isMatched(t3.textContent?.trim() || "", e10));
    if (-1 !== t2) {
      a2 = o2[t2];
      break;
    }
  }
  return !!a2 && (a2.click(), await delay.delay(100), true);
}
async function fillPaylocityEducationGraduationDate(e, t) {
  if (!e) return false;
  let r = await querySelectorWithRetry(e, 'input[id*="txt-educationHistory-graduationDate"]');
  return !!r && await fillPaylocityDateField(r, t);
}
async function fillSearchBoxInputField(e, t, r = false) {
  if (!e || !t || 0 === t.length) return;
  let n = t.map((e10) => String(e10).trim()).filter(Boolean);
  for (let t2 of n) {
    e.focus(), await delay.delay(50), e.value = t2, dom.triggerEvents(e, ["input", "change"]), await delay.delay(100);
    let n2 = document.querySelector('.rw-popup-container, [role="listbox"]');
    if (n2) {
      let r2 = Array.from(n2.querySelectorAll('li, [role="option"]')), o2 = r2.find((e10) => answerMethods.isMatched(e10.textContent?.trim() || "", t2));
      o2 ? await dispatchClickSequence(o2) : (e.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        keyCode: 13,
        bubbles: true
      })), await delay.delay(100));
    }
    if (!r) break;
  }
  e.blur(), await delay.delay(100);
}
async function fillListboxButtonField(e, t) {
  if (!e || !t || 0 === t.length) return;
  e.dispatchEvent(new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  })), await delay.delay(200);
  let r = document.querySelector('[role="listbox"]');
  if (!r) return;
  let n = Array.from(r.querySelectorAll('[role="option"]')), o2 = false;
  for (let e10 of t) {
    let t2 = n.find((t3) => answerMethods.isMatched(t3.textContent?.trim() || "", e10));
    if (t2) {
      await dispatchClickSequence(t2), o2 = true;
      break;
    }
  }
  await dispatchClickSequence(e);
}
async function uploadResume(e, t, r) {
  let n = findResumeFileInput();
  if (!n) return;
  let o2 = await answerMethods.fetchPdfAsBlob(e);
  o2 && (await dom.uploadFiles(n, o2, t, r), await delay.delay(500));
}
async function uploadCoverLetter(e, t, r) {
  let n = getCoverLetterUploadDom();
  if (!n.input || !n.triggerButton) return false;
  let o2 = await clearUploadedCoverLetter();
  if (!o2) return false;
  await dom.uploadFiles(
    n.input,
    await answerMethods.fetchCoverLetterPdfAsBlob(e),
    t,
    r,
    "Cover Letter"
  );
  let i2 = `${e.coverLetterName}.pdf`.toLowerCase();
  return await observer.waitForCondition(() => {
    let e10 = getCoverLetterUploadDom(), t2 = e10.uploadedFileName?.textContent?.trim().toLowerCase() || "";
    return t2.includes(i2) || !!t2 && !!e10.removeButton;
  }, {
    timeout: 5e3,
    interval: 100,
    observeTarget: n.section || document.body
  });
}
let SKILLS_COMMIT_ATTEMPTS = 2, SKILLS_READBACK_POLL_ATTEMPTS = 8, SKILLS_POLL_INTERVAL_MS = 50;
function normalizeSkillText(e) {
  return `${e ?? ""}`.trim().toLowerCase();
}
function getSkillsInput() {
  return document.getElementById("info.skills");
}
function getSkillsContainer(e) {
  return e.closest(".react-tagsinput");
}
function readCommittedSkills(e) {
  return Array.from(e.querySelectorAll(".react-tagsinput-tag")).map((e10) => {
    let t = e10.querySelector(".react-tagsinput-remove")?.textContent || "", r = e10.textContent || "";
    return t && r.endsWith(t) ? r.slice(0, -t.length).trim() : r.trim();
  }).filter(Boolean);
}
function setSkillsInputValue(e, t) {
  let r = e.ownerDocument?.defaultView?.HTMLInputElement?.prototype || ("undefined" != typeof HTMLInputElement ? HTMLInputElement.prototype : void 0), n = r ? Object.getOwnPropertyDescriptor(r, "value")?.set : void 0, o2 = e.value;
  n ? n.call(e, t) : e.value = t;
  let i2 = e._valueTracker;
  i2?.setValue?.(o2);
}
function commitSkillViaEnter(e, t) {
  e.focus(), e.dispatchEvent(new Event("focusin", {
    bubbles: true,
    composed: true
  })), setSkillsInputValue(e, t), e.dispatchEvent(new Event("input", {
    bubbles: true,
    composed: true
  })), e.dispatchEvent(new Event("change", {
    bubbles: true,
    composed: true
  }));
  let r = {
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    which: 13,
    bubbles: true,
    cancelable: true,
    composed: true
  };
  for (let t2 of ["keydown", "keypress", "keyup"]) e.dispatchEvent("function" == typeof KeyboardEvent ? new KeyboardEvent(t2, r) : new Event(t2, {
    bubbles: true,
    cancelable: true
  }));
}
async function waitForSkillCommitted(e) {
  let t = normalizeSkillText(e);
  for (let e10 = 0; e10 < SKILLS_READBACK_POLL_ATTEMPTS; e10 += 1) {
    let e11 = getSkillsInput(), r = e11 ? getSkillsContainer(e11) : null;
    if (r && readCommittedSkills(r).some((e12) => normalizeSkillText(e12) === t)) return true;
    await delay.delay(SKILLS_POLL_INTERVAL_MS);
  }
  return false;
}
async function fillSkills(e) {
  let t = Array.from(new Map((e ?? []).flatMap((e10) => `${e10 ?? ""}`.split(",")).map((e10) => e10.trim()).filter(Boolean).map((e10) => [normalizeSkillText(e10), e10])).values()), r = getSkillsInput(), n = r ? getSkillsContainer(r) : null;
  if (!r || !n) return console.warn("[Paylocity][Skills] fill failed", {
    reason: r ? "container_not_found" : "input_not_found",
    requestedCount: t.length
  }), false;
  if (0 === t.length) return console.info("[Paylocity][Skills] fill skipped", {
    reason: "empty_skill_list"
  }), false;
  console.info("[Paylocity][Skills] fill start", {
    requestedCount: t.length,
    existingCount: readCommittedSkills(n).length
  });
  let o2 = 0;
  for (let [e10, r2] of t.entries()) {
    let n2 = getSkillsInput(), i3 = n2 ? getSkillsContainer(n2) : null, a2 = !!i3 && readCommittedSkills(i3).some((e11) => normalizeSkillText(e11) === normalizeSkillText(r2));
    if (a2) {
      o2 += 1;
      continue;
    }
    let l2 = false;
    for (let n3 = 1; n3 <= SKILLS_COMMIT_ATTEMPTS; n3 += 1) {
      let i4 = getSkillsInput(), a3 = i4 ? getSkillsContainer(i4) : null;
      if (!i4 || !a3) {
        console.warn("[Paylocity][Skills] item failed", {
          reason: i4 ? "container_replaced" : "input_replaced",
          itemIndex: e10,
          requestedCount: t.length,
          attempt: n3
        });
        break;
      }
      if (a3.click(), commitSkillViaEnter(i4, r2), l2 = await waitForSkillCommitted(r2)) {
        o2 += 1;
        break;
      }
      setSkillsInputValue(i4, ""), i4.dispatchEvent(new Event("input", {
        bubbles: true,
        composed: true
      })), console.warn("[Paylocity][Skills] commit readback failed", {
        itemIndex: e10,
        requestedCount: t.length,
        attempt: n3
      });
    }
  }
  let i2 = o2 === t.length;
  return console.info("[Paylocity][Skills] fill complete", {
    requestedCount: t.length,
    committedCount: o2,
    missingCount: t.length - o2,
    complete: i2
  }), i2;
}
async function preclickAddButtons() {
  let e = xpath.getFirstOrderedNodeSafe(
    "//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddWorkHistory')]"
  ), t = e?.closest(".section-wrapper"), r = xpath.getFirstOrderedNodeSafe(
    "//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddEducation')]"
  ), n = r?.closest(".section-wrapper");
  if (t) {
    await deleteAllWorkHistorySections(), await delay.delay(100);
    let e10 = countWorkHistoryGroups();
    0 === e10 ? (await clickAddWorkHistory(), await delay.delay(150), e10 = countWorkHistoryGroups(), await observer.waitForCondition(isLoadingCleared, {
      timeout: 500,
      observeTarget: document.body
    })) : console.warn(`Failed to delete all employment sections, remaining: ${e10}`);
  }
  if (n) {
    let e10 = profileStore.useProfileStore.getState().userProfile?.profile?.education?.length || 0;
    await deleteAllEducationSections(), await delay.delay(100);
    let t2 = countEducationGroups();
    0 === t2 && e10 > 0 ? (await clickAddEducation(), await delay.delay(150), t2 = countEducationGroups(), await (0, observer.waitForCondition)(isLoadingCleared, {
      timeout: 500,
      observeTarget: document.body
    })) : t2 > e10 && console.warn(`Failed to delete all education sections, remaining: ${t2}`);
  }
}
async function deleteAllWorkHistorySections() {
  await deleteSectionsUntilGone(countWorkHistoryGroups, findDeleteWorkHistoryButton);
}
function findDeleteWorkHistoryButton() {
  return xpath.getFirstOrderedNodeSafe(
    "//button[contains(@data-automation-id, 'btn-delete-workhistory') or contains(@data-automationid, 'btn-delete-workhistory') or contains(normalize-space(.), 'Delete This Work History') or contains(normalize-space(.), 'Delete This Employment History')]"
  );
}
async function deleteAllEducationSections() {
  await deleteSectionsUntilGone(countEducationGroups, findDeleteEducationButton);
}
async function deleteSectionsUntilGone(e, t) {
  let r = e(), n = t();
  for (; n && r > 0; ) {
    n.click(), await observer.waitForCondition(() => e() < r, {
      timeout: 1e3,
      observeTarget: document.body
    });
    let o2 = e();
    if (o2 >= r) break;
    r = o2, n = t();
  }
}
function findDeleteEducationButton() {
  return xpath.getFirstOrderedNodeSafe(
    "//button[contains(@data-automation-id, 'btn-delete-educationhistory') or contains(normalize-space(.), 'Delete This Education History')]"
  );
}
async function clickAddWorkHistory() {
  let e = xpath.getFirstOrderedNodeSafe(
    "//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddWorkHistory')]"
  );
  e && (e.click(), await delay.delay(200));
}
async function clickAddEducation() {
  let e = xpath.getFirstOrderedNodeSafe(
    "//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddEducation')]"
  );
  e && (e.click(), await delay.delay(200));
}
function countWorkHistoryGroups() {
  return xpath.getOrderedNodesSafe("//div[contains(@class, 'work-history-group')]").length;
}
function countEducationGroups() {
  return xpath.getOrderedNodesSafe("//div[contains(@class, 'education-history-group')]").length;
}
async function expandFormFromProfile(e = {}) {
  let {
    expandEducation: t = true,
    expandEmployment: r = true
  } = e, n = profileStore.useProfileStore.getState().userProfile?.profile;
  n && (await expandSectionsToTargetCount({
    getCurrentCount: countEducationGroups,
    getTargetCount: () => n.education?.length || 0,
    addSection: clickAddEducation,
    enabled: t,
    settleDelay: 150,
    waitTimeout: 500
  }), await expandSectionsToTargetCount({
    getCurrentCount: countWorkHistoryGroups,
    getTargetCount: () => n.workExperience?.length || 0,
    addSection: clickAddWorkHistory,
    enabled: r,
    settleDelay: 150,
    waitTimeout: 500
  }));
}
async function expandForm(e) {
  await expandSectionsToTargetCount({
    getCurrentCount: countEducationGroups,
    getTargetCount: () => e.education?.length || 0,
    addSection: clickAddEducation,
    settleDelay: 200,
    waitTimeout: 1500
  }), await expandSectionsToTargetCount({
    getCurrentCount: countWorkHistoryGroups,
    getTargetCount: () => e.workExperience?.length || 0,
    addSection: clickAddWorkHistory,
    settleDelay: 200,
    waitTimeout: 1500
  });
}
async function expandSectionsToTargetCount({
  getCurrentCount: e,
  getTargetCount: t,
  addSection: r,
  enabled: n = true,
  settleDelay: o2,
  waitTimeout: i2
}) {
  if (!n) return;
  let a2 = t(), l2 = e();
  for (; l2 < a2; ) {
    await r(), await delay.delay(o2), await observer.waitForCondition(isLoadingCleared, {
      timeout: i2,
      observeTarget: document.body
    }), await delay.delay(100);
    let t2 = e();
    if (t2 === l2) break;
    l2 = t2;
  }
}
async function blurPage() {
  let e = document.querySelector("main") || document.body;
  e.dispatchEvent(new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  })), await delay.delay(100);
}
async function typeDigitsIntoDateInput(e, t, r = "") {
  let n = r;
  for (let r2 = 0; r2 < t.length; r2++) {
    let o2 = t[r2], i2 = o2.charCodeAt(0);
    e.dispatchEvent(new KeyboardEvent("keydown", {
      key: o2,
      keyCode: i2,
      code: `Digit${o2}`,
      bubbles: true,
      cancelable: true
    })), n += o2, e.value = n, e.dispatchEvent(new KeyboardEvent("keyup", {
      key: o2,
      keyCode: i2,
      code: `Digit${o2}`,
      bubbles: true,
      cancelable: true
    })), await delay.delay(200);
  }
}
async function fillAvailableToStartField(e, t) {
  if (!e) return;
  let r = dayjsDefault.default(t);
  if (!r.isValid()) return;
  let n = r.format("YYYY-MM-DD");
  e.click(), await delay.delay(200), e.focus(), await delay.delay(200), e.value = "", e.select(), await delay.delay(200), await typeDigitsIntoDateInput(e, n, ""), dom.triggerEvents(e, ["change"]), await delay.delay(200), e.blur(), await delay.delay(200), await blurPage();
}
async function fillPaylocityDateField(e, t) {
  if (e instanceof HTMLInputElement) {
    let r = dateHelpers.inferPaylocityDateFormat(e);
    if (!r) return console.warn("[Paylocity][Date] fill skipped: unsupported format", {
      controlId: e.id,
      controlType: e.getAttribute("type") || e.type || null,
      placeholder: e.getAttribute("placeholder") || e.placeholder || null
    }), false;
    let n = dateHelpers.formatPaylocityDateValue(t, r);
    if (!n) return console.warn("[Paylocity][Date] fill skipped: invalid source date", {
      controlId: e.id,
      dateFormat: r,
      source: dateHelpers.summarizePaylocityDateValue(t)
    }), false;
    console.info("[Paylocity][Date] fill start", {
      controlId: e.id,
      controlType: e.getAttribute("type") || e.type || null,
      placeholder: e.getAttribute("placeholder") || e.placeholder || null,
      dateFormat: r,
      source: dateHelpers.summarizePaylocityDateValue(t),
      target: dateHelpers.summarizePaylocityDateValue(n)
    }), await inputUtils.fillDefaultInputField(e, n), await delay.delay(50);
    let o2 = e.value?.trim() || "", i2 = o2 === n;
    return console.info("[Paylocity][Date] fill readback", {
      controlId: e.id,
      dateFormat: r,
      committed: i2,
      value: dateHelpers.summarizePaylocityDateValue(o2)
    }), i2;
  }
  return console.warn("[Paylocity][Date] fill skipped: target is not an input"), false;
}
function isLoadingCleared() {
  let e = document.querySelectorAll(
    '[data-automation-id*="loading"], .loading, .spinner, [aria-busy="true"]'
  );
  return 0 === e.length;
}
async function waitPageClean() {
  await observer.waitForCondition(isLoadingCleared, {
    timeout: 3e3,
    observeTarget: document.body
  }), await delay.delay(200);
}
function submitHandler(e, t = [], r) {
  let n = rules.getFormSnapshot(t), o2 = autofillAnswerPairTracking.buildFalconAutofillAnswerPairData(r), {
    education: i2,
    employment: a2,
    ...l2
  } = n, {
    education: s2,
    employment: u2,
    ...d2
  } = e;
  autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
    formUrl: urlStore.useUrlStore.getState().currentTabUrl,
    autofillSnapshot: d2,
    submitSnapshot: l2,
    additionalAutofillData: {
      education: s2,
      employment: u2
    },
    additionalSubmitData: {
      education: i2,
      employment: a2
    },
    ...o2 ? {
      extraData: {
        falcon: o2
      }
    } : {},
    source: "paylocity"
  });
}

export {
  PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS,
  blurPage,
  createPaylocitySingleFlight,
  dispatchClickSequence,
  dispatchMousedown,
  expandForm,
  expandFormFromProfile,
  fillAvailableToStartField,
  fillCountry,
  fillListboxButtonField,
  fillListboxSelectButtonField,
  fillPaylocityDateField,
  fillPaylocityEducationDegreeObtained,
  fillPaylocityEducationGraduationDate,
  fillPaylocityPersonalAddressField,
  fillPaylocityPersonalStateField,
  fillSearchBoxInputField,
  fillSkills,
  getPaylocityCoverLetterStatus,
  getPaylocityMissingPersonalAddressRules,
  getPaylocityPersonalAddressInputMode,
  hasPaylocityCoverLetterSlot,
  hasPaylocityCoverLetterUploadCapability,
  hasUploadedPaylocityCoverLetter,
  isLoadingCleared,
  isPaylocityPersonalAddressInput,
  isPaylocityPersonalAddressRule,
  isPaylocityPersonalStateControlId,
  normalizePaylocityCountry,
  orderPaylocityPersonalAddressRules,
  preclickAddButtons,
  reconcilePaylocityPersonalAddress,
  submitHandler,
  uploadCoverLetter,
  uploadResume,
  waitForPaylocityPersonalAddressQuiet,
  waitPageClean,
}
