// @ts-nocheck
/**
 * Pagination / page-turn automation for ATS apply flows (filename historically misspelled "pagenation").
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/pagenation.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { getElementIndex } from "./dom.js";
import { createSingleFlightScheduler } from "./observer-scheduler.js";
import { getFirstOrderedNode } from "./xpath.js";

let paginationAdvanceChecks = {};
export const PAGINATION_AUTOFILL_START_DELAY_MS = 1e3;
export const RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR = '#btn-submit-app[type="submit"]';
export const TALEO_CWS_V2_NEXT_BUTTON_SELECTOR = 'a.oracletaleocwsv2-arrow-nav-next[aria-label="next"]';
export const TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR = 'input[value="Save and Continue"]';
export function resolvePaginationAutofillStartDelay(extraDelayMs) {
  return PAGINATION_AUTOFILL_START_DELAY_MS + (extraDelayMs ?? 0);
}
export function runHrmdirectPaginationCheck({
  cursor,
  state,
  handle,
  hasClickedAutoFill}) {
  if (!state) return cursor;
  let nextCursor = {
    didInitialSync: true,
    index: state.index
  };
  return cursor.didInitialSync && state.index > cursor.index && state.index <= state.total && hasClickedAutoFill && handle({
    delay: 1e3,
    page_number: state.index
  }), nextCursor;
}
function normalizeWhitespaceLower(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase();
}
function parseStepIndexFromId(id) {
  let stepIdMatch = (id || "").match(/step-(\d+)/i), stepIndex = Number(stepIdMatch?.[1]);
  return Number.isInteger(stepIndex) && stepIndex > 0 ? stepIndex : null;
}
function isTaleoTerminalStep({
  index,
  total,
  title}) {
  return index >= total || /\b(review|submit|complete|confirmation|finish)\b/i.test(title);
}
export function getTaleoStepState(root = document) {
  let activeStepEl = root.querySelector('.oracletaleocwsv2-step.oracletaleocwsv2-active[id^="step-"]'), stepId = activeStepEl?.getAttribute("id") || activeStepEl?.id || "", stepIndex = parseStepIndexFromId(stepId), totalSteps = Number(root.querySelector(".oracletaleocwsv2-total-steps")?.textContent?.trim());
  if (!activeStepEl || null === stepIndex || !Number.isInteger(totalSteps) || totalSteps < 1) return null;
  let stepTitle = normalizeWhitespaceLower(activeStepEl.querySelector(".oracletaleocwsv2-step-title .title")?.textContent || activeStepEl.querySelector(
    'input[name="embeddedPageStepTitle"]'
  )?.value || activeStepEl.textContent);
  return {
    id: stepId,
    index: stepIndex,
    total: totalSteps,
    title: stepTitle,
    isTerminal: isTaleoTerminalStep({
      index: stepIndex,
      total: totalSteps,
      title: stepTitle
    })
  };
}
export function runTaleoPaginationCheck({
  cursor,
  state,
  handle,
  hasClickedAutoFill}) {
  if (!state) return cursor;
  let nextCursor = {
    id: state.id,
    index: state.index,
    didInitialSync: true
  };
  return cursor.didInitialSync && state.id !== cursor.id && !(state.index <= cursor.index) && hasClickedAutoFill && handle(state.isTerminal ? {
    clearOnly: true,
    page_number: state.index,
    page_title: state.title
  } : {
    page_number: state.index,
    page_title: state.title
  }), nextCursor;
}
export function getRipplehireStepState(root = document) {
  let activeEl = root.querySelector(RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR), buttonLabel = (activeEl?.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
  return "continue" === buttonLabel ? "duplicate_check" : "submit application" === buttonLabel ? "application_form" : null;
}
export function runRipplehirePaginationCheck({
  hasSeenContinue,
  hasPendingContinue: hasPendingContinue = false,
  state,
  handle,
  hasClickedAutoFill}) {
  return "duplicate_check" === state || ("application_form" === state && (hasSeenContinue || hasPendingContinue) ? (hasClickedAutoFill && handle({
    clearOnly: false,
    page_number: 2,
    page_title: "application_form"
  }), false) : hasSeenContinue);
}
export function shouldRegisterPaginationObserver({
  siteName,
  automaticallyTurnPage,
  hasObserver}) {
  return hasObserver && ("Manually" !== automaticallyTurnPage || "ripplehire" === siteName);
}
export const SUCCESSFACTORS_PENDING_CONTINUE_AUTOFILL_KEY = "successfactors_pending_continue_autofill";
let SUCCESSFACTORS_PENDING_CONTINUE_TTL_MS = 45e3;
let ADP_MYJOBS_PENDING_CONTINUE_KEY = "adp_myjobs_pending_continue";
let ADP_MYJOBS_PENDING_CONTINUE_TTL_MS = 1e4;
let RIPPLEHIRE_PENDING_CONTINUE_KEY = "ripplehire_pending_continue";
let RIPPLEHIRE_PENDING_CONTINUE_TTL_MS = 3e5;
export function registerPaginationAdvanceCheck(siteName, checkFn) {
  paginationAdvanceChecks[siteName] = checkFn;
}
export function getPaginationAdvanceCheck(siteName) {
  return paginationAdvanceChecks[siteName];
}
function getSessionStorageSafe() {
  try {
    if ("undefined" == typeof sessionStorage) return null;
    return sessionStorage;
  } catch {
    return null;
  }
}
function saveAdpMyJobsPendingContinue(state, startedAt = Date.now()) {
  if (!state.formFingerprint) return;
  let storage = getSessionStorageSafe();
  if (storage) try {
    storage.setItem(ADP_MYJOBS_PENDING_CONTINUE_KEY, JSON.stringify({
      formFingerprint: state.formFingerprint,
      startedAt}));
  } catch {
  }
}
function loadAdpMyJobsPendingContinue(now = Date.now()) {
  let storage = getSessionStorageSafe();
  if (!storage) return null;
  try {
    let parsedValue = JSON.parse(storage.getItem(ADP_MYJOBS_PENDING_CONTINUE_KEY) || "null");
    if (!parsedValue?.formFingerprint || !Number.isFinite(parsedValue.startedAt) || now - parsedValue.startedAt > ADP_MYJOBS_PENDING_CONTINUE_TTL_MS) return storage.removeItem(ADP_MYJOBS_PENDING_CONTINUE_KEY), null;
    return parsedValue;
  } catch {
    return null;
  }
}
function clearAdpMyJobsPendingContinue() {
  let storage = getSessionStorageSafe();
  if (storage) try {
    storage.removeItem(ADP_MYJOBS_PENDING_CONTINUE_KEY);
  } catch {
  }
}
function saveRipplehirePendingContinue(now = Date.now()) {
  let storage = getSessionStorageSafe();
  if (storage) try {
    storage.setItem(RIPPLEHIRE_PENDING_CONTINUE_KEY, String(now));
  } catch {
  }
}
function hasRipplehirePendingContinue(now = Date.now()) {
  let storage = getSessionStorageSafe();
  if (!storage) return false;
  try {
    let storedRaw = storage.getItem(RIPPLEHIRE_PENDING_CONTINUE_KEY);
    if (!storedRaw) return false;
    let parsedNumber = Number(storedRaw);
    if (!Number.isFinite(parsedNumber) || now - parsedNumber > RIPPLEHIRE_PENDING_CONTINUE_TTL_MS) return storage.removeItem(RIPPLEHIRE_PENDING_CONTINUE_KEY), false;
    return true;
  } catch {
    return false;
  }
}
function clearRipplehirePendingContinue() {
  let storage = getSessionStorageSafe();
  if (storage) try {
    storage.removeItem(RIPPLEHIRE_PENDING_CONTINUE_KEY);
  } catch {
  }
}
export function markSuccessFactorsContinueAutofillPending(now = Date.now()) {
  let storage = getSessionStorageSafe();
  if (storage) try {
    storage.setItem(SUCCESSFACTORS_PENDING_CONTINUE_AUTOFILL_KEY, String(now));
  } catch (error) {
    console.error("[SuccessFactors] Failed to save pending continue:", error);
  }
}
function hasSuccessFactorsPendingContinue(now = Date.now()) {
  let storage = getSessionStorageSafe();
  if (!storage) return false;
  try {
    let storedRaw = storage.getItem(SUCCESSFACTORS_PENDING_CONTINUE_AUTOFILL_KEY);
    if (!storedRaw) return false;
    let parsedNumber = Number(storedRaw);
    if (!Number.isFinite(parsedNumber) || now - parsedNumber > SUCCESSFACTORS_PENDING_CONTINUE_TTL_MS) return storage.removeItem(SUCCESSFACTORS_PENDING_CONTINUE_AUTOFILL_KEY), false;
    return true;
  } catch {
    return storage.removeItem(SUCCESSFACTORS_PENDING_CONTINUE_AUTOFILL_KEY), false;
  }
}
function clearSuccessFactorsPendingContinue() {
  let storage = getSessionStorageSafe();
  if (storage) try {
    storage.removeItem(SUCCESSFACTORS_PENDING_CONTINUE_AUTOFILL_KEY);
  } catch {
  }
}
export const ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_ID = "recruitment_login_recaptcha";
export const ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_SELECTOR = `#${ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_ID}`;
export function claimIcimsContinuationStep(documentElement, stepState) {
  let attrName = "data-jobright-icims-continuation-claimed", attrValue = documentElement.getAttribute(attrName), serialized = JSON.stringify([stepState.index, stepState.title]);
  return "pending" === attrValue ? (documentElement.setAttribute(attrName, serialized), true) : attrValue === serialized;
}
export const JACOBS_SAVE_BUTTON_SELECTOR = 'form.tpt_wizard button[name="save"][type="submit"], form.tpt_wizard button.saveButton[type="submit"]';
let JACOBS_GOTO_BUTTON_SELECTOR = 'form.tpt_wizard button[name="goto"][type="submit"], form.tpt_wizard button.gotoButton[type="submit"]';
export const JACOBS_NAV_BUTTON_SELECTOR = [JACOBS_SAVE_BUTTON_SELECTOR, JACOBS_GOTO_BUTTON_SELECTOR].join(", ");
let JACOBS_ADVANCE_BUTTON_SELECTORS = JACOBS_NAV_BUTTON_SELECTOR;
export const JOBVITE_ADVANCE_BUTTON_SELECTOR = '.jv-apply-form-actions button[ng-click*="nextStep"][type="button"]:not(.ng-hide), .jv-apply-form-actions button[type="submit"]:not(.ng-hide), div[ng-if="showAcceptReject"] button.jv-button-primary[type="submit"]:not(.ng-hide)';
export const DAYFORCE_ADVANCE_BUTTON_SELECTOR = 'button[test-id="application-next-step"]';
export const DAYFORCE_SUBMIT_BUTTON_SELECTOR = 'button[test-id="application-submit"]';
export const SMARTRECRUITERS_ADVANCE_BUTTON_SELECTOR = 'spl-button[type="primary"], button[type="submit"]';
export const SMARTRECRUITERS_PREPARE_ADVANCE_SOURCE = "next-button-before-click";
export const ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR = "sdf-button.wizard-next-step-btn, sdf-button.wizard-step-btn, .form-group.submit-button button.btn.btn-primary, button.btn.btn-primary[type='button'], button.btn.btn-primary[type='submit']";
export const PAYCOMONLINE_ADVANCE_BUTTON_SELECTOR = "button:not([disabled]), input[type='button']:not([disabled]), input[type='submit']:not([disabled]), [role='button']:not([aria-disabled='true'])";
export const JOBDIVA_ADVANCE_BUTTON_SELECTOR = ".modal.show .modal-content button, .modal.show .modal-content [role='button'], body:has(.modal-content .job-app-main) .modal-content button, body:has(.modal-content .job-app-main) .modal-content [role='button'], body:not(:has(.modal-content .job-app-main)) .justify-content-end button.jd-btn, body:not(:has(.modal-content .job-app-main)) .justify-content-end button.btn.jd-btn";
export function isJobviteConsentAcceptButton(element) {
  if (!(element instanceof HTMLElement)) return false;
  let buttonLabel = (element.textContent || element.getAttribute("value") || element.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").toLowerCase();
  if ("i accept" !== buttonLabel) return false;
  let closestEl = element.closest('div[ng-if="showAcceptReject"]'), hasPolicyIds = !!closestEl?.querySelector('input[name="policyIds"]');
  return !!closestEl && hasPolicyIds;
}
export function isDayforceContinueButton(element) {
  if (!(element instanceof HTMLElement)) return false;
  let buttonLabel = (element.textContent || element.getAttribute("value") || element.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").toLowerCase();
  return "next" === buttonLabel || buttonLabel.includes("continue");
}
export function isAdpMyJobsAdvanceButton(element) {
  if (!(element instanceof HTMLElement)) return false;
  let buttonLabel = (element.textContent || element.getAttribute("value") || element.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").toLowerCase();
  return "continue" === buttonLabel || "next" === buttonLabel || "submit" === buttonLabel || "apply" === buttonLabel || buttonLabel.includes(
    "continue"
  ) || buttonLabel.includes("submit application");
}
export function isAdpMyJobsContinueButton(element) {
  if (!isAdpMyJobsAdvanceButton(element)) return false;
  let buttonLabel = (element?.textContent || element?.getAttribute("value") || element?.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").toLowerCase();
  return "continue" === buttonLabel || "next" === buttonLabel || buttonLabel.includes("continue");
}
export function isPaycomOnlineAdvanceButton(element) {
  if (!(element instanceof HTMLElement)) return false;
  let buttonLabel = (element.textContent || element.getAttribute("value") || element.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").toLowerCase();
  return !(!buttonLabel || "cancel" === buttonLabel || "back" === buttonLabel || "previous" === buttonLabel || buttonLabel.includes(
    "save for later"
  ) || buttonLabel.includes("finish later")) && ("next" === buttonLabel || "continue" === buttonLabel || "submit" === buttonLabel || "apply" === buttonLabel || buttonLabel.includes("next") || buttonLabel.includes("continue") || buttonLabel.includes(
    "submit application"
  ) || buttonLabel.includes("sign and submit"));
}
export function isPaycomOnlineContinueButton(element) {
  if (!isPaycomOnlineAdvanceButton(element)) return false;
  let buttonLabel = (element?.textContent || element?.getAttribute("value") || element?.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").toLowerCase();
  return "next" === buttonLabel || "continue" === buttonLabel || buttonLabel.includes("continue");
}
export function isSmartRecruitersAdvanceButton(element) {
  if (!(element instanceof HTMLElement)) return false;
  let buttonLabel = (element.textContent || element.getAttribute("value") || element.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").toLowerCase();
  return "next" === buttonLabel || "continue" === buttonLabel || "submit" === buttonLabel || "apply" === buttonLabel || buttonLabel.includes(
    "continue"
  ) || buttonLabel.includes("submit");
}
export function isJobdivaAdvanceButton(element) {
  if (!(element instanceof HTMLElement)) return false;
  let buttonLabel = (element.textContent || element.getAttribute("value") || element.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").toLowerCase();
  return !!buttonLabel && "back" !== buttonLabel && "cancel" !== buttonLabel && ("next" === buttonLabel || "continue" === buttonLabel || "submit" === buttonLabel || "apply" === buttonLabel || "save" === buttonLabel || buttonLabel.includes("next") || buttonLabel.includes("continue") || buttonLabel.includes("submit"));
}
export function isSmartRecruitersTerminalStep(stepState) {
  if (!stepState || stepState.isScreening) return false;
  let titleLower = stepState.title.trim().toLowerCase();
  return stepState.isTerminal || titleLower.includes("review") || titleLower.includes("submit") || titleLower.includes(
    "confirmation"
  ) || titleLower.includes("thank you");
}
export function runSmartRecruitersPaginationCheck({
  currentIndex,
  getState,
  handle,
  hasClickedAutoFill}) {
  let stepState = getState();
  if (!stepState) return currentIndex;
  let nextIndex = currentIndex + 1;
  return hasClickedAutoFill && !isSmartRecruitersTerminalStep(stepState) && handle({
    delay: 1500,
    page_number: nextIndex,
    page_title: stepState.title || "smartrecruiters_next_page"
  }), nextIndex;
}
function normalizeCompactText(value) {
  return (value || "").trim().replace(/\s+/g, " ").toLowerCase();
}
function normalizeElementText(element) {
  return normalizeCompactText(element?.textContent);
}
function getNormalizedInputValue(root, selector) {
  let activeEl = root.querySelector(selector);
  return normalizeCompactText(activeEl?.value ?? activeEl?.getAttribute("value"));
}
function collectTemplateSectionTitles(root) {
  let seenTitles = /* @__PURE__ */ new Set(), itemList = [], nodeList = Array.from(root.querySelectorAll(".templateSectionTitle"));
  for (let element of nodeList) {
    let normalizedText = normalizeElementText(element);
    if (!(!normalizedText || seenTitles.has(normalizedText)) && (seenTitles.add(normalizedText), itemList.push(normalizedText), itemList.length >= 8)) break;
  }
  return itemList.join("|");
}
export function getSuccessFactorsStepState({
  document,
  href: href = "undefined" == typeof window ? "" : window.location.href
} = {}) {
  let doc = document ?? ("undefined" == typeof document ? null : document);
  if (!doc) return null;
  if (doc.querySelector(".profileUpperLayout")) return {
    key: "profile",
    title: "candidate_profile"
  };
  let profileTitle = normalizeElementText(doc.querySelector("#candidateProfileTitle") ?? doc.querySelector("h1")), sectionTitles = collectTemplateSectionTitles(doc);
  if (doc.querySelector("#questions")) return {
    key: ["questions", profileTitle || href, sectionTitles].filter(Boolean).join(":"),
    title: sectionTitles ? `questions ${sectionTitles}` : "questions_eeo"
  };
  let careerNs = getNormalizedInputValue(doc, 'input[name="career_ns"], input#career_ns'), jobReqId = getNormalizedInputValue(doc, 'input[name="career_job_req_id"], input#career_job_req_id'), careerForm = doc.querySelector("form#careerform"), hasApplicationFormSection = sectionTitles.split("|").includes("application form");
  if (careerForm && ("job_application" === careerNs || hasApplicationFormSection)) {
    let title = [profileTitle, "application form"].filter(Boolean).join(" ");
    return {
      key: ["job_application", jobReqId || "unknown", profileTitle || href, sectionTitles || "application form"].join(":"),
      title: title || "application form"
    };
  }
  return null;
}
export function runSuccessFactorsPaginationCheck({
  cursor,
  getState,
  handle,
  hasPendingContinueAutofill}) {
  let stepState = getState();
  if (!stepState) return cursor;
  if (!cursor.didInitialSync || !cursor.key) return {
    key: stepState.key,
    pageNumber: cursor.pageNumber || 1,
    didInitialSync: true
  };
  if (stepState.key === cursor.key) return cursor;
  let nextPageNumber = cursor.pageNumber + 1;
  return hasPendingContinueAutofill && handle({
    delay: 2e3,
    page_number: nextPageNumber,
    page_title: stepState.title || "successfactors_next_page"
  }), {
    key: stepState.key,
    pageNumber: nextPageNumber,
    didInitialSync: true
  };
}
let ORACLE_CLOUD_APPLY_SECTION_BASE_INDEX = 100;
let MYWORKDAY_PROGRESS_BAR_SELECTOR = '[data-automation-id="progressBar"]';
let MYWORKDAY_PROGRESS_BAR_ACTIVE_STEP_SELECTOR = `${MYWORKDAY_PROGRESS_BAR_SELECTOR} [data-automation-id="progressBarActiveStep"]`;
let MYWORKDAY_PROGRESS_BAR_ACTIVE_LABEL_SELECTOR = `${MYWORKDAY_PROGRESS_BAR_ACTIVE_STEP_SELECTOR} label:last-of-type`;
let MYWORKDAY_APPLY_FLOW_PAGE_SELECTOR = '[data-automation-id="applyFlowPage"], [data-automation-id="applyFlowMyExpPage"]';
let MYWORKDAY_FILLABLE_CONTROL_SELECTOR = 'input:not([type="hidden"]):not([type="file"]):not([type="button"]):not([type="submit"]):not([type="reset"]), textarea, select, [role="combobox"], button[aria-haspopup="listbox"], [data-automation-id="selectedItemList"]';
let MYWORKDAY_EXPERIENCE_UPLOAD_SELECTOR = 'button[data-automation-id="add-button"], button[data-automation-id="select-files"], input[data-automation-id="file-upload-input-ref"][type="file"]';
let MYWORKDAY_DEFAULT_PAGE_DELAY_MS = 200;
let MYWORKDAY_EXPERIENCE_PAGE_DELAY_MS = 1200;
let MYWORKDAY_NEXT_BUTTON_RETRY_DELAYS_MS = [800, 1600, 3e3, 6e3, 1e4, 14e3];
let JACOBS_STEPS_LIST_SELECTOR = "ul.list--steps";
let JACOBS_STEP_ITEM_SELECTOR = "li.list__item";
let JACOBS_STEP_TITLE_SELECTOR = ".list__item__text__title";
let JACOBS_PENDING_AUTOFILL_KEY = "jobright_jacobs_pending_autofill";
let JACOBS_PENDING_AUTOFILL_TTL_MS = 3e5;
let WALMART_FILLABLE_CONTROL_SELECTOR = 'input:not([type="hidden"]):not([type="button"]):not([type="submit"]):not([type="reset"]), textarea, select, [role="combobox"], [aria-haspopup="listbox"], [aria-haspopup="menu"], button[aria-expanded][type="button"]';
let WALMART_APPLICATION_ROOT_SELECTOR = 'form, main, [role="main"], [data-testid*="application" i], [data-testid*="apply" i], [data-testid*="step" i], [class*="application" i], [class*="apply" i], [class*="step" i], [id*="application" i], [id*="apply" i]';
let WALMART_TERMINAL_TITLE_RE = /\b(review|submit|submission|confirmation|confirm|complete|completed|success|thank you)\b/i;
let WALMART_KEY_SEPARATOR = "";
let WALMART_MODAL_DIALOG_SELECTOR = 'dialog[aria-modal="true"], [role="dialog"][aria-modal="true"], [role="dialog"], [class*="mvk-popup-dialog" i], [class*="mvk-modal" i]';
let WALMART_TRANSIENT_MODAL_TEXT_RE = /\b(add|edit)\s+(work experience|employment|education|languages?)\b|company name.*role title|school or university.*degree|reading proficiency.*speaking proficiency/i;
function normalizeWhitespace(value) {
  return (value || "").replace(/\s+/g, " ").trim();
}
function normalizeWhitespaceToLower(value) {
  return normalizeWhitespace(value).toLowerCase();
}
let ADP_WFN_STEP_KEY_SEPARATOR = "";
let ADP_WFN_WIZARD_HEADER_SELECTORS = [
  '.mdf-segmented-wizard-header-item[aria-current="true"] .mdf-segmented-wizard-header-item-text',
  ".mdf-segmented-wizard-header-current-item .mdf-segmented-wizard-header-item-text"
];
function getAdpWorkforceNowWizardHeaderText(root) {
  if (!root) return "";
  for (let node of ADP_WFN_WIZARD_HEADER_SELECTORS) {
    let normalizedText = normalizeWhitespace(root.querySelector(node)?.textContent);
    if (normalizedText) return normalizedText;
  }
  return "";
}
export function getAdpWorkforceNowStepKey(options = {}) {
  let root = options.root ?? ("undefined" != typeof document ? document : void 0), location = "undefined" != typeof window ? window.location : void 0, pathname = options.pathname ?? location?.pathname ?? "", search = options.search ?? location?.search ?? "", hash = options.hash ?? location?.hash ?? "", pageTitle = options.title ?? ("undefined" != typeof document ? document.title : ""), h1Text = normalizeWhitespace(root?.querySelector("h1")?.textContent), wizardHeaderText = getAdpWorkforceNowWizardHeaderText(root);
  return [pathname + search + hash, normalizeWhitespace(pageTitle), h1Text, wizardHeaderText].join(ADP_WFN_STEP_KEY_SEPARATOR);
}
function isElementVisuallyPresent(element) {
  if (!element) return false;
  let node = element;
  if (node.hidden || "true" === element.getAttribute("aria-hidden")) return false;
  if ("undefined" != typeof window && window.getComputedStyle) {
    let computedStyles = window.getComputedStyle(element);
    if ("none" === computedStyles.display || "hidden" === computedStyles.visibility) return false;
  }
  if ("function" == typeof node.getBoundingClientRect) {
    let rect = node.getBoundingClientRect();
    if (0 === rect.width && 0 === rect.height) return false;
  }
  return true;
}
function isMyWorkdayFillableControl(element) {
  return !(!isElementVisuallyPresent(element) || element.closest(MYWORKDAY_PROGRESS_BAR_SELECTOR));
}
function getElementBodyTextLower(root) {
  return normalizeWhitespaceToLower(root.body?.innerText || root.body?.textContent || root.innerText || root.textContent);
}
function doesMyWorkdayContentMatchStep(bodyText, stepState) {
  return !stepState || !bodyText || (stepState.title.includes("my experience") || stepState.title.includes("experience") || stepState.title.includes("education") ? /\b(work experience|education|resume\/cv|upload a file|websites?|linkedin|social network urls?)\b/.test(bodyText) : !stepState.title.includes("my information") || /\b(how did you hear|legal name|address|phone|country)\b/.test(bodyText));
}
function resolveMyWorkdayApplyFlowRoot(root, stepState) {
  let filteredList = Array.from(root.querySelectorAll(MYWORKDAY_APPLY_FLOW_PAGE_SELECTOR) || []).filter((element) => {
    let automationId = element.getAttribute?.("data-automation-id");
    return "function" == typeof element.querySelectorAll && ("applyFlowPage" === automationId || "applyFlowMyExpPage" === automationId);
  });
  if (0 === filteredList.length) return root;
  let visiblePages = filteredList.filter(isElementVisuallyPresent), candidatePages = visiblePages.length > 0 ? visiblePages : filteredList, normalizedText = normalizeWhitespaceToLower(stepState?.title);
  if (normalizedText) {
    let element = candidatePages.find((childEl) => getElementBodyTextLower(childEl).includes(normalizedText));
    if (element) return element;
  }
  return candidatePages[candidatePages.length - 1] || root;
}
function debugMyWorkdayAutofill(message, payload) {
  try {
    console.debug(`[MyWorkday][autofill-debug] ${message} ${JSON.stringify(payload)}`);
  } catch {
  }
}
export function isMyWorkdayAutofillPageReady(root = document, stepState) {
  let resolvedKey = resolveMyWorkdayApplyFlowRoot(root, stepState), anyMatch = Array.from(resolvedKey.querySelectorAll(MYWORKDAY_FILLABLE_CONTROL_SELECTOR)).some(isMyWorkdayFillableControl), isExperienceStep = stepState?.title.includes("my experience") || stepState?.title.includes("experience") || stepState?.title.includes(
    "education"
  ), hasExperienceUpload = isExperienceStep && Array.from(resolvedKey.querySelectorAll(MYWORKDAY_EXPERIENCE_UPLOAD_SELECTOR)).some(isMyWorkdayFillableControl);
  return (!!anyMatch || !!hasExperienceUpload) && doesMyWorkdayContentMatchStep(getElementBodyTextLower(resolvedKey), stepState);
}
function isWalmartTransientModal(element) {
  return !!(element && isElementVisuallyPresent(element)) && WALMART_TRANSIENT_MODAL_TEXT_RE.test(normalizeWhitespace(element.textContent));
}
function hasWalmartTransientModal(root) {
  return Array.from(root.querySelectorAll(WALMART_MODAL_DIALOG_SELECTOR)).some(isWalmartTransientModal);
}
function isInsideWalmartTransientModal(element) {
  let node = element.closest?.(WALMART_MODAL_DIALOG_SELECTOR);
  return isWalmartTransientModal(node);
}
function isWalmartSearchLikeControl(element) {
  if (element.closest('[role="search"], [role="navigation"], header, footer, nav')) return true;
  let node = element;
  return [node.type, element.getAttribute("aria-label"), element.getAttribute("placeholder"), element.getAttribute(
    "name"
  ), element.id].map(normalizeWhitespaceToLower).some((element) => element.includes("search") || element.includes("keyword") || element.includes(
    "team"
  ));
}
function getLabelTextForControlId(element, root) {
  if (!element.id) return "";
  let escapedId = "undefined" != typeof CSS && CSS.escape ? CSS.escape(element.id) : element.id.replace(
    /["\\]/g,
    "\\$&"
  ), activeEl = root.querySelector(`label[for="${escapedId}"]`);
  return normalizeWhitespace(activeEl?.textContent);
}
function getClosestFieldLabelText(element) {
  let closestEl = element.closest("label");
  if (closestEl?.textContent) return normalizeWhitespace(closestEl.textContent);
  let closestEl2 = element.closest(
    '[data-testid*="field" i], [data-testid*="question" i], [class*="field" i], [class*="question" i], .form-group, fieldset, div'
  ), labelEl = closestEl2?.querySelector("label, legend, [data-testid*='label' i], [class*='label' i]");
  return normalizeWhitespace(labelEl?.textContent);
}
function getControlLabelText(element, root) {
  return getLabelTextForControlId(element, root) || getClosestFieldLabelText(element) || normalizeWhitespace(element.getAttribute("aria-label")) || normalizeWhitespace(element.getAttribute(
    "placeholder"
  )) || normalizeWhitespace(element.getAttribute("name")) || normalizeWhitespace(element.id);
}
let DAYFORCE_APPLICATION_PAGE_MARKER_SELECTOR = 'button[test-id="application-next-step"], [test-id="basic-layout"], [test-id*="application-step-questionnaire"], [test-id*="education-history"], [test-id*="work-history"], form[id*="personalInfo"]';
let DAYFORCE_STEPPER_SELECTOR = '[test-id*="application-stepper"], [test-id*="application-steps"], [test-id*="application-progress"], .ant-steps';
let DAYFORCE_STEP_ITEM_SELECTOR = '.ant-steps-item, [role="listitem"]';
let DAYFORCE_ACTIVE_STEP_SELECTOR = '.ant-steps-item-active, .ant-steps-item-process, [aria-current="step"], [data-status="process"]';
let DAYFORCE_STEP_TITLE_SELECTOR = '.ant-steps-item-title, [class*="step-title"], [title]';
let DAYFORCE_SECTION_MARKERS = [{
  selector: 'form[id*="personalInfo"], [test-id*="personal-info"], [test-id*="personal-information"]',
  title: "personal information"
}, {
  selector: '[test-id*="application-step-questionnaire"]',
  title: "questionnaire"
}, {
  selector: '[test-id*="education-history"], form[id*="educationHistory"]',
  title: "education history"
}, {
  selector: '[test-id*="work-history"], form[id*="workHistory"]',
  title: "work history"
}, {
  selector: '[test-id*="application-review"], [test-id*="review"], [test-id*="submit"]',
  title: "review"
}];
let ORACLE_CLOUD_PENDING_AUTOFILL_KEY = "jobright_oraclecloud_pending_autofill";
let ORACLE_CLOUD_PENDING_AUTOFILL_TTL_MS = 3e5;
let ORACLE_CLOUD_BUTTON_SELECTOR = "button, [role='button']";
export function getMyWorkdayStepState(root = document) {
  let activeEl = root.querySelector(MYWORKDAY_PROGRESS_BAR_ACTIVE_STEP_SELECTOR);
  if (!activeEl) return null;
  let [firstPart, secondPart] = getElementIndex(activeEl);
  if (firstPart < 0 || secondPart <= 0) return null;
  let activeLabelEl = root.querySelector(MYWORKDAY_PROGRESS_BAR_ACTIVE_LABEL_SELECTOR) || activeEl.querySelector("label:last-of-type"), stepTitle = (activeLabelEl?.textContent || activeEl.textContent || "").trim().toLowerCase();
  return {
    index: firstPart,
    total: secondPart,
    title: stepTitle
  };
}
export function getJacobsStepState(root = document) {
  let normalizeTitle = (element) => (element || "").replace(/\s+/g, " ").trim().toLowerCase(), stepsList = root.querySelector(JACOBS_STEPS_LIST_SELECTOR);
  if (!stepsList) return null;
  let stepItems = Array.from(stepsList.querySelectorAll(JACOBS_STEP_ITEM_SELECTOR));
  if (0 === stepItems.length) return null;
  let getStepTitle = (element) => {
    let titleEl = element.querySelector(JACOBS_STEP_TITLE_SELECTOR);
    return normalizeTitle(titleEl?.textContent || element.textContent);
  }, currentSteps = stepItems.filter((element) => element.classList.contains("list__item--current") || !!element.querySelector(
    'progress[aria-current="step"]'
  )), activeStep = currentSteps.find((element) => getStepTitle(element).includes("submit")) || currentSteps[currentSteps.length - 1];
  if (!activeStep) return null;
  let stepIndex = stepItems.indexOf(activeStep);
  return stepIndex < 0 ? null : {
    index: stepIndex,
    total: stepItems.length,
    title: getStepTitle(activeStep)
  };
}
function isJacobsSubmitStepTitle(title) {
  return title.trim().toLowerCase().includes("submit");
}
function normalizeDayforceText(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase();
}
function parseNonNegativeInteger(value) {
  if (!value) return null;
  let parsedNumber = Number(value);
  return !Number.isInteger(parsedNumber) || parsedNumber < 0 ? null : parsedNumber;
}
export function getDayforceUrlStepState(href = "undefined" != typeof window ? window.location.href : void 0) {
  let node;
  if (!href) return null;
  try {
    node = new URL(href);
  } catch {
    return null;
  }
  let pathnameLower = node.pathname.toLowerCase();
  if ("jobs.dayforcehcm.com" !== node.hostname || !pathnameLower.includes("/candidateportal/jobs/") || !pathnameLower.includes(
    "/apply"
  )) return null;
  let parsedValue = parseNonNegativeInteger(node.searchParams.get("step")), parsedValue2 = parseNonNegativeInteger(node.searchParams.get("q"));
  if (null === parsedValue) return {
    index: 0,
    total: Number.MAX_SAFE_INTEGER,
    title: "manual application"
  };
  let compositeIndex = 100 * parsedValue + (parsedValue2 ?? 0), stepTitle = null === parsedValue2 ? `step ${parsedValue}` : `step ${parsedValue} question ${parsedValue2}`;
  return {
    index: compositeIndex,
    total: Number.MAX_SAFE_INTEGER,
    title: stepTitle
  };
}
function isDayforceElementVisible(element) {
  if (!(element instanceof HTMLElement)) return false;
  let node = element;
  for (; node; ) {
    if (node.hidden || "true" === node.getAttribute("aria-hidden")) return false;
    let styles = window.getComputedStyle?.(node);
    if (styles?.display === "none" || styles?.visibility === "hidden") return false;
    if (node === document.body) break;
    node = node.parentElement;
  }
  return true;
}
function getDayforceStepTitle(stepElement) {
  let titleEl = stepElement.querySelector(DAYFORCE_STEP_TITLE_SELECTOR) || stepElement;
  return normalizeDayforceText(titleEl.getAttribute("title") || titleEl.textContent);
}
function getDayforceStepperState(root) {
  let activeEl = root.querySelector(DAYFORCE_STEPPER_SELECTOR);
  if (!activeEl || !isDayforceElementVisible(activeEl)) return null;
  let filteredList = Array.from(activeEl.querySelectorAll(DAYFORCE_STEP_ITEM_SELECTOR)).filter(isDayforceElementVisible);
  if (0 === filteredList.length) return null;
  let activeStepEl = filteredList.find((element) => element.matches(DAYFORCE_ACTIVE_STEP_SELECTOR)) || filteredList.find((element) => !!element.querySelector(DAYFORCE_ACTIVE_STEP_SELECTOR));
  if (!activeStepEl) return null;
  let foundIndex = filteredList.indexOf(activeStepEl);
  return foundIndex < 0 ? null : {
    index: foundIndex,
    total: filteredList.length,
    title: getDayforceStepTitle(activeStepEl)
  };
}
function getDayforceSectionMarkerState(root) {
  for (let [markerIndex, marker] of DAYFORCE_SECTION_MARKERS.entries()) {
    let activeEl = root.querySelector(marker.selector);
    if (isDayforceElementVisible(activeEl)) return {
      index: markerIndex,
      total: DAYFORCE_SECTION_MARKERS.length,
      title: marker.title
    };
  }
  return null;
}
function getDayforceSubmitStepState(root) {
  let activeEl = root.querySelector(DAYFORCE_SUBMIT_BUTTON_SELECTOR);
  return isDayforceElementVisible(activeEl) ? {
    index: Number.MAX_SAFE_INTEGER - 1,
    total: Number.MAX_SAFE_INTEGER,
    title: "submit"
  } : null;
}
export function getDayforceStepState(root = document) {
  let stepState = getDayforceUrlStepState(), submitStepState = getDayforceSubmitStepState(root);
  return submitStepState || stepState || (root.querySelector(DAYFORCE_APPLICATION_PAGE_MARKER_SELECTOR) ? getDayforceStepperState(root) || getDayforceSectionMarkerState(root) : null);
}
function isDayforceTerminalStep(stepState) {
  let normalizedText = normalizeDayforceText(stepState.title);
  return normalizedText.includes("review") || normalizedText.includes("submit") || normalizedText.includes("apply") || stepState.index >= stepState.total - 1;
}
function loadJacobsPendingAutofill() {
  if ("undefined" == typeof sessionStorage) return null;
  try {
    return JSON.parse(sessionStorage.getItem(JACOBS_PENDING_AUTOFILL_KEY) || "null");
  } catch {
    return null;
  }
}
function saveJacobsPendingAutofill(stepState) {
  if ("undefined" != typeof window && "undefined" != typeof sessionStorage) try {
    sessionStorage.setItem(JACOBS_PENDING_AUTOFILL_KEY, JSON.stringify({
      href: window.location.href,
      index: stepState.index,
      startedAt: Date.now()
    }));
  } catch {
  }
}
function isSameOriginHref(href) {
  if ("undefined" == typeof window) return false;
  try {
    return new URL(href).origin === window.location.origin;
  } catch {
    return false;
  }
}
function loadOracleCloudPendingAutofill() {
  if ("undefined" == typeof sessionStorage) return null;
  try {
    return JSON.parse(sessionStorage.getItem(ORACLE_CLOUD_PENDING_AUTOFILL_KEY) || "null");
  } catch {
    return null;
  }
}
function saveOracleCloudPendingAutofill(stepState) {
  if ("undefined" != typeof window && "undefined" != typeof sessionStorage && stepState.isApplySection && !stepState.isTerminal) try {
    sessionStorage.setItem(ORACLE_CLOUD_PENDING_AUTOFILL_KEY, JSON.stringify({
      href: window.location.href,
      index: stepState.index,
      startedAt: Date.now()
    }));
  } catch {
  }
}
export function saveOracleCloudPendingAutofillForCurrentStep() {
  let stepState = getOracleCloudStepState();
  return saveOracleCloudPendingAutofill(stepState), stepState;
}
function clearOracleCloudPendingAutofill() {
  "undefined" != typeof sessionStorage && sessionStorage.removeItem(ORACLE_CLOUD_PENDING_AUTOFILL_KEY);
}
function isOracleCloudAdvanceButton(element) {
  if (!(element instanceof HTMLElement) || element.closest("#jobright-helper-id")) return false;
  let buttonLabel = (element.textContent || element.getAttribute("value") || element.getAttribute("aria-label") || "").trim().toLowerCase(), attrValue = element.getAttribute("data-automation-id");
  return "next" === buttonLabel || "submit" === buttonLabel || "apply" === buttonLabel || buttonLabel.includes("next") || buttonLabel.includes(
    "submit"
  ) || "pageFooterNextButton" === attrValue || "bottom-navigation-next-button" === attrValue;
}
function isMyWorkdayContinueButton(element) {
  if (!(element instanceof HTMLElement) || element.closest(
    "#jobright-helper-id, #jobright-helper-plugin, plasmo-csui"
  )) return false;
  let normalizedText = normalizeWhitespaceToLower(element.textContent || element.getAttribute("value") || element.getAttribute("aria-label")), attrValue = element.getAttribute("data-automation-id");
  return "pageFooterNextButton" === attrValue || "bottom-navigation-next-button" === attrValue || "next" === normalizedText || "continue" === normalizedText || "save and continue" === normalizedText || normalizedText.includes("save and continue");
}
export function runMyWorkdayPaginationCheck({
  currentIndex,
  getState: getState = getMyWorkdayStepState,
  handle,
  hasClickedAutoFill,
  isPageReady: isPageReady = () => true,
  onStepChange}) {
  let stepState = getState();
  if (!stepState) return currentIndex;
  let isForwardStep = stepState.index > currentIndex, isEqual = stepState.index !== currentIndex, isReviewStep = "review" === stepState.title || stepState.title.includes("review"), isExperiencePage = 1 === stepState.index || stepState.title.includes("my experience") || stepState.title.includes("experience") || stepState.title.includes("education");
  if (isEqual && onStepChange?.(stepState), !isForwardStep && isEqual && hasClickedAutoFill && handle({
    clearOnly: true,
    page_number: stepState.index,
    page_title: stepState.title
  }), isForwardStep && isReviewStep && hasClickedAutoFill && handle({
    clearOnly: true,
    page_number: stepState.index,
    page_title: stepState.title
  }), isForwardStep && stepState.index < stepState.total && hasClickedAutoFill && !isReviewStep) {
    if (!isPageReady(stepState)) return debugMyWorkdayAutofill("pagination:page-not-ready", {
      currentIndex,
      nextIndex: stepState.index,
      title: stepState.title,
      total: stepState.total
    }), currentIndex;
    handle({
      delay: isExperiencePage ? MYWORKDAY_EXPERIENCE_PAGE_DELAY_MS : MYWORKDAY_DEFAULT_PAGE_DELAY_MS,
      page_number: stepState.index,
      page_title: stepState.title
    });
  }
  return stepState.index;
}
function isIcimsTerminalStep(stepState) {
  let titleLower = stepState.title.trim().toLowerCase();
  return titleLower.includes("submit") || titleLower.includes("review") || titleLower.includes("complete") || titleLower.includes(
    "confirmation"
  ) || titleLower.includes("finish");
}
function parseStepFractionFromTitle(title) {
  let regexMatch = title.match(/\((\d+)\s*\/\s*(\d+)\)/);
  if (!regexMatch) return null;
  let parsedNumber = Number(regexMatch[1]), parsedNumber2 = Number(regexMatch[2]);
  return !Number.isInteger(parsedNumber) || !Number.isInteger(parsedNumber2) || parsedNumber < 1 || parsedNumber2 < 1 || parsedNumber > parsedNumber2 ? null : {
    index: parsedNumber,
    total: parsedNumber2
  };
}
function isIcimsForwardStep({
  currentIndex,
  currentTitle,
  state}) {
  if (state.index > currentIndex) return true;
  if (state.index !== currentIndex || !currentTitle) return false;
  let parsedValue = parseStepFractionFromTitle(currentTitle), parsedValue2 = parseStepFractionFromTitle(state.title);
  return !!(parsedValue && parsedValue2 && parsedValue.total === parsedValue2.total && parsedValue2.index > parsedValue.index);
}
export function runIcimsPaginationCheck({
  currentIndex,
  currentTitle,
  getState,
  handle,
  hasClickedAutoFill}) {
  let stepState = getState();
  if (!stepState) return currentIndex;
  let isMatch = isIcimsForwardStep({
    currentIndex,
    currentTitle,
    state: stepState
  });
  return isMatch && hasClickedAutoFill && (isIcimsTerminalStep(stepState) ? handle({
    clearOnly: true,
    page_number: stepState.index,
    page_title: stepState.title
  }) : stepState.continuationClaimed || handle({
    delay: 1200,
    page_number: stepState.index,
    page_title: stepState.title
  })), stepState.index;
}
export function runJacobsPaginationCheck({
  currentIndex,
  getState: getState = getJacobsStepState,
  handle,
  hasClickedAutoFill,
  onStepChange}) {
  let stepState = getState();
  if (!stepState) return currentIndex;
  let isForwardStep = stepState.index > currentIndex, isEqual = stepState.index !== currentIndex, isMatch = isJacobsSubmitStepTitle(stepState.title);
  return isEqual && onStepChange?.(stepState), isForwardStep && hasClickedAutoFill && !isMatch && handle({
    delay: 200,
    page_number: stepState.index,
    page_title: stepState.title
  }), stepState.index;
}
function collectVisibleTexts(root, selector) {
  return Array.from(root.querySelectorAll(selector)).filter(isElementVisuallyPresent).filter((element) => !isInsideWalmartTransientModal(element)).map((element) => normalizeWhitespace(element.textContent)).filter(Boolean);
}
function getWalmartPageTitle(root) {
  let filteredList = Array.from(root.querySelectorAll(WALMART_APPLICATION_ROOT_SELECTOR)).filter(isElementVisuallyPresent), applicationRoot = filteredList[0] ?? root;
  return (collectVisibleTexts(applicationRoot, "h1, h2, h3")[0] || collectVisibleTexts(root, "h1, h2, h3")[0] || "").toLowerCase();
}
function getWalmartProgressSignature(root) {
  return collectVisibleTexts(
    root,
    '[role="progressbar"], [aria-current="step"], [class*="progress" i], [data-testid*="progress" i], [class*="stepper" i], [data-testid*="stepper" i]'
  ).map((element) => element.toLowerCase()).filter((element, node, value) => value.indexOf(element) === node).slice(0, 3).join("|");
}
function getWalmartControlsSignature(root) {
  return Array.from(root.querySelectorAll(WALMART_FILLABLE_CONTROL_SELECTOR)).filter((element) => {
    let isDisabled = element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement || element instanceof HTMLButtonElement ? element.disabled : "true" === element.getAttribute("aria-disabled");
    return isElementVisuallyPresent(element) && !isDisabled && !isInsideWalmartTransientModal(element) && !isWalmartSearchLikeControl(element);
  }).map((node) => {
    let controlEl = node, controlKind = node instanceof HTMLInputElement ? controlEl.type || "text" : node.getAttribute("role") || node.getAttribute("aria-haspopup") || node.tagName.toLowerCase(), controlLabel = getControlLabelText(node, root).toLowerCase();
    return `${controlKind}:${controlLabel}`;
  }).filter((element) => !!element.split(":")[1]).filter((element, node, value) => value.indexOf(element) === node).join("|");
}
function buildWalmartNavigationKey({
  controlsSignature,
  locationKey,
  progressSignature,
  title}) {
  return title || progressSignature ? [locationKey, title, progressSignature].join(WALMART_KEY_SEPARATOR) : [locationKey, controlsSignature].join(WALMART_KEY_SEPARATOR);
}
function resolveWalmartNavigationKey(stepState) {
  if (stepState.navigationKey) return stepState.navigationKey;
  let [firstPart, secondPart, secondPart2, secondPart3] = stepState.key.split(WALMART_KEY_SEPARATOR);
  return "string" == typeof secondPart3 ? buildWalmartNavigationKey({
    controlsSignature: secondPart3,
    locationKey: firstPart,
    progressSignature: secondPart2,
    title: secondPart
  }) : stepState.key;
}
export function getWalmartStepState(root = document) {
  let pageTitle = getWalmartPageTitle(root), signature = getWalmartProgressSignature(root), hasPending = hasWalmartTransientModal(root), controlsSignature = pageTitle || signature ? "" : getWalmartControlsSignature(root);
  if (!pageTitle && !signature && !controlsSignature) return null;
  let locationKey = "undefined" != typeof window ? `${window.location.pathname}${window.location.search}${window.location.hash}` : "", titleAndProgress = `${pageTitle} ${signature}`, resolvedKey = buildWalmartNavigationKey({
    controlsSignature: controlsSignature,
    locationKey: locationKey,
    progressSignature: signature,
    title: pageTitle
  });
  return {
    key: [locationKey, pageTitle, signature, controlsSignature].join(WALMART_KEY_SEPARATOR),
    navigationKey: resolvedKey,
    title: pageTitle || signature || "walmart_application_step",
    isTerminal: WALMART_TERMINAL_TITLE_RE.test(titleAndProgress),
    isTransient: hasPending
  };
}
export function runWalmartPaginationCheck({
  cursor,
  getState: getState = getWalmartStepState,
  handle,
  hasClickedAutoFill,
  onStepChange,
  now: now = Date.now(),
  cooldownMs: cooldownMs = 2500
}) {
  let collection = getState();
  if (!collection) return cursor;
  if (!cursor.didInitialSync || "" === cursor.key) {
    let resolvedKey = resolveWalmartNavigationKey(collection);
    return {
      key: collection.key,
      navigationKey: resolvedKey,
      pageNumber: Math.max(cursor.pageNumber, 1),
      didInitialSync: true
    };
  }
  if (collection.isTransient || collection.key === cursor.key) return cursor;
  let resolvedKey2 = resolveWalmartNavigationKey(collection), previousNavigationKey = cursor.navigationKey ?? resolveWalmartNavigationKey({
    ...collection,
    key: cursor.key
  });
  if (resolvedKey2 === previousNavigationKey) return {
    ...cursor,
    key: collection.key,
    navigationKey: resolvedKey2
  };
  onStepChange?.(collection);
  let stateObject = {
    key: collection.key,
    navigationKey: resolvedKey2,
    pageNumber: cursor.pageNumber + 1,
    didInitialSync: true,
    lastHandledAt: cursor.lastHandledAt
  };
  if (hasClickedAutoFill) {
    if (cursor.lastHandledAt && now - cursor.lastHandledAt < cooldownMs) return stateObject;
    handle(collection.isTerminal ? {
      clearOnly: true,
      page_number: stateObject.pageNumber,
      page_title: collection.title
    } : {
      delay: 1500,
      page_number: stateObject.pageNumber,
      page_title: collection.title
    }), stateObject.lastHandledAt = now;
  }
  return stateObject;
}
export function runDayforcePaginationCheck({
  currentIndex,
  getState: getState = getDayforceStepState,
  handle,
  hasClickedAutoFill}) {
  let stepState = getState();
  if (!stepState) return currentIndex;
  let isForwardStep = stepState.index > currentIndex;
  return isForwardStep && hasClickedAutoFill && !isDayforceTerminalStep(stepState) && handle({
    delay: 800,
    page_number: stepState.index,
    page_title: stepState.title
  }), stepState.index;
}
export function isPhenomTerminalStep(stepName) {
  let normalizedStepName = (stepName || "").toLowerCase();
  return normalizedStepName.includes("review") || normalizedStepName.includes("submit") || normalizedStepName.includes("summary");
}
export function runPhenomPaginationCheck({
  currentIndex,
  state,
  handle,
  hasClickedAutoFill}) {
  if (!state || state.step <= 0) return currentIndex;
  let isForwardStep = state.step > currentIndex, isMatch = isPhenomTerminalStep(state.stepName);
  return isMatch ? isForwardStep ? (handle({
    clearOnly: true,
    page_number: state.step,
    page_title: state.stepName || `step_${state.step}`
  }), state.step) : currentIndex : isForwardStep ? (hasClickedAutoFill && handle({
    delay: 1500,
    page_number: state.step,
    page_title: state.stepName || `step_${state.step}`
  }), state.step) : currentIndex;
}
export function getJobdivaStepState(root = document) {
  let activeEl = root.querySelector(".jd-reg-title");
  if (!activeEl) return null;
  let rawTitleText = (activeEl.textContent || "").replace(/\s+/g, " ").trim(), regexMatch = rawTitleText.match(/Step\s+(\d+)\s+of\s+(\d+)/i);
  if (!regexMatch) return null;
  let parsedNumber = Number(regexMatch[1]), parsedNumber2 = Number(regexMatch[2]);
  if (!Number.isFinite(parsedNumber) || !Number.isFinite(parsedNumber2) || parsedNumber2 <= 0) return null;
  let stepTitle = rawTitleText.replace(/Step\s+\d+\s+of\s+\d+/i, "").replace(/\s+/g, " ").trim().toLowerCase();
  return {
    index: parsedNumber,
    total: parsedNumber2,
    title: stepTitle
  };
}
function isJobdivaElementVisible(element) {
  let isEqual = "function" == typeof element.checkVisibility;
  if (isEqual) return element.checkVisibility() ?? false;
  let computedStyles = window.getComputedStyle(element);
  return "none" !== computedStyles.display && "hidden" !== computedStyles.visibility && element.getClientRects().length > 0;
}
function getJobdivaVisibleModalContent(root) {
  let filteredList = Array.from(root.querySelectorAll(".modal.show .modal-content")).filter(isJobdivaElementVisible);
  if (filteredList.length > 0) return filteredList[filteredList.length - 1];
  let filteredList2 = Array.from(root.querySelectorAll(".modal-content .job-app-main")).map((element) => element.closest(
    ".modal-content"
  ) || element).filter(isJobdivaElementVisible);
  return filteredList2[filteredList2.length - 1] || null;
}
function hasJobdivaFillableFields(root) {
  let selector = ".jd-form-layout, label.jd-checkbox, .radio-buttons-div input[type='radio'], input:not([type='hidden']):not([type='button']):not([type='submit']):not([type='reset']), textarea, select";
  return Array.from(root.querySelectorAll(selector)).some(isJobdivaElementVisible);
}
export function getJobdivaModalStepSnapshot(root = document) {
  let node = getJobdivaVisibleModalContent(root);
  if (!node) return null;
  let modalBodyText = (node.textContent || "").replace(/\s+/g, " ").trim();
  if (!modalBodyText) return null;
  let modalTitle = (node.querySelector(".modal-title, h1, h2, h3, strong")?.textContent || modalBodyText.slice(0, 80)).replace(/\s+/g, " ").trim().toLowerCase() || "jobdiva_modal_step", joinedText = Array.from(node.querySelectorAll("input:not([type='hidden']), textarea, select")).filter((element) => element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement).filter(isJobdivaElementVisible).map((element) => element.name || element.id || element.getAttribute(
    "type"
  ) || element.getAttribute("aria-label") || element.tagName).filter(Boolean).join("|");
  return {
    key: `modal:${modalTitle}:${joinedText}`,
    title: modalTitle,
    hasFillableFields: hasJobdivaFillableFields(node)
  };
}
function getOracleCloudSectionTitle(root = document) {
  let foundEl = Array.from(root.querySelectorAll(
    'a[aria-current="step"], a[aria-current="page"], [aria-current="step"], [aria-current="page"], .oj-selected'
  )).find((element) => {
    let nodeText = element.textContent?.trim(), ariaLabel = element.getAttribute("aria-label")?.trim();
    return !!(nodeText || ariaLabel);
  }), rawLabel = foundEl?.getAttribute("aria-label") || foundEl?.textContent || "", sectionTitle = rawLabel.replace(/^\s*\d+\s*/, "").replace(/\s+/g, " ").trim().toLowerCase();
  if (sectionTitle) return sectionTitle;
  let fallbackTitle = "undefined" != typeof document ? document.title : "", documentTitle = root.querySelector("title")?.textContent || fallbackTitle, primaryTitle = documentTitle.split(" - ")[0]?.trim().toLowerCase();
  return primaryTitle || "";
}
export function getOracleCloudStepState(options = {}) {
  let root = options.root ?? document, fallbackHref = "undefined" != typeof window ? window.location.href : "https://example.com/", href = options.href ?? fallbackHref, pageUrl = new URL(href, fallbackHref), pathname = pageUrl.pathname, identityHeading = Array.from(root.querySelectorAll("h1, h2, h3")).find((element) => element.textContent?.trim().toLowerCase() === "confirm your identity"), verifyButton = Array.from(root.querySelectorAll("button")).find((element) => element.textContent?.trim().toLowerCase() === "verify"), sendNewCodeEl = Array.from(root.querySelectorAll("a, button, div, span")).find((element) => element.textContent?.trim().toLowerCase() === "send new code"), filteredList = Array.from(root.querySelectorAll("input")).filter((element) => {
    let inputEl = element, parsedNumber = Number(inputEl.maxLength || 0);
    return "text" === inputEl.type && 1 === parsedNumber && !inputEl.disabled;
  });
  if (/\/job\/[^/]+\/?$/.test(pathname)) return {
    index: 0,
    title: "oraclecloud-job-detail",
    isApplySection: false,
    isTerminal: false
  };
  if (pathname.includes("/apply/email")) return {
    index: 1,
    title: "oraclecloud-email",
    isApplySection: false,
    isTerminal: false
  };
  if (identityHeading && verifyButton && sendNewCodeEl && filteredList.length >= 4) return {
    index: 2,
    title: "oraclecloud-verification",
    isApplySection: false,
    isTerminal: false
  };
  let regexMatch = pathname.match(/\/(?:job\/[^/]+|jobs\/preview\/[^/]+)\/apply\/section\/(\d+)/);
  if (regexMatch) {
    let sectionNumber = Number(regexMatch[1]), sectionTitle = getOracleCloudSectionTitle(root) || `oraclecloud-section-${sectionNumber}`;
    return {
      index: ORACLE_CLOUD_APPLY_SECTION_BASE_INDEX + sectionNumber,
      pageNumber: sectionNumber,
      title: sectionTitle,
      isApplySection: true,
      isTerminal: sectionTitle.includes("review") || sectionTitle.includes("submit")
    };
  }
  if (/\/job\/[^/]+\/apply(?:\/|$)/.test(pathname) && root.querySelector("apply-flow-block")) {
    let formTitle = getOracleCloudSectionTitle(root) || "oraclecloud-apply-form";
    return {
      index: ORACLE_CLOUD_APPLY_SECTION_BASE_INDEX,
      pageNumber: 1,
      title: formTitle,
      isApplySection: true,
      isTerminal: formTitle.includes("review") || formTitle.includes("submit")
    };
  }
  return {
    index: sitePaginationIndexes.oraclecloud || 0,
    title: "oraclecloud-unknown",
    isApplySection: false,
    isTerminal: false
  };
}
export function runOracleCloudPaginationCheck({
  currentIndex,
  getState: getState = getOracleCloudStepState,
  handle,
  hasClickedAutoFill,
  pendingIndex}) {
  let stepState = getState(), isForwardStep = stepState.index > currentIndex, advancedPastPending = "number" == typeof pendingIndex && stepState.index > pendingIndex;
  return stepState.index < currentIndex && !stepState.isApplySection || 0 === currentIndex && stepState.isApplySection && !advancedPastPending ? stepState.index : ((isForwardStep || advancedPastPending) && stepState.isApplySection && hasClickedAutoFill && !stepState.isTerminal && handle({
    delay: 1200,
    page_number: stepState.pageNumber,
    page_title: stepState.title
  }), isForwardStep || stepState.index < currentIndex ? stepState.index : currentIndex);
}
export function isAdpMyJobsTerminalStep(stepState) {
  if (!stepState) return false;
  let titleLower = stepState.title.trim().toLowerCase();
  return stepState.isTerminal || titleLower.includes("review") || titleLower.includes("submit") || titleLower.includes(
    "confirmation"
  ) || titleLower.includes("thank you");
}
export function isAdpMyJobsRestoredPendingAdvanceReady({
  previousFormFingerprint,
  currentFormFingerprint,
  currentFormFieldCount}) {
  return currentFormFieldCount > 0 && !!currentFormFingerprint && currentFormFingerprint !== previousFormFingerprint;
}
export function runAdpMyJobsPaginationCheck({
  currentIndex,
  getState,
  handle,
  hasClickedAutoFill,
  previousFormKey,
  previousKey}) {
  let stepState = getState();
  if (!stepState || previousKey && stepState.key === previousKey || previousFormKey && !stepState.formKey || previousFormKey && stepState.formKey && stepState.formKey === previousFormKey) return currentIndex;
  let nextIndex = currentIndex + 1;
  return hasClickedAutoFill && !isAdpMyJobsTerminalStep(stepState) && handle({
    delay: 1500,
    page_number: nextIndex,
    page_title: stepState.title || "adp_myjobs_next_page"
  }), nextIndex;
}
export function isPaycomOnlineTerminalStep(stepState) {
  if (!stepState) return false;
  let titleLower = stepState.title.trim().toLowerCase();
  return stepState.isTerminal || titleLower.includes("review") || titleLower.includes("submit") || titleLower.includes(
    "confirmation"
  ) || titleLower.includes("thank you");
}
export function runPaycomOnlinePaginationCheck({
  currentIndex,
  getState,
  handle,
  hasClickedAutoFill,
  previousFormKey,
  previousKey}) {
  let stepState = getState();
  if (!stepState || previousKey && stepState.key === previousKey || previousFormKey && !stepState.formKey || previousFormKey && stepState.formKey && stepState.formKey === previousFormKey) return currentIndex;
  let nextIndex = currentIndex + 1;
  return hasClickedAutoFill && !isPaycomOnlineTerminalStep(stepState) && handle({
    delay: 1500,
    page_number: nextIndex,
    page_title: stepState.title || "paycomonline_next_page"
  }), nextIndex;
}
let sitePaginationIndexes = {
  hrmdirect: 0,
  tesla: 0,
  jobdiva: 0,
  myworkday: 0,
  phenom: 0,
  adobe: 0,
  amazon: 0,
  apple: 0,
  adpRecruiting: 0,
  oraclecloud: 0,
  successfactors: 0,
  google: 0,
  jacobs: 0,
  icims: 0,
  cisco: 0,
  isolved: 0,
  adpWorkforceNow: 0,
  adpMyJobs: 0,
  brassring: 0,
  walmart: 0,
  jobvite: 0,
  dayforce: 0,
  paylocity: 0,
  smartrecruiters: 0,
  paycomonline: 0
};
export const GOOGLE_STEP_CHANGE_EVENT = "jobright-google-step-changed";
export const CISCO_STEP_CHANGE_EVENT = "jobright-cisco-step-changed";
export const MYWORKDAY_STEP_CHANGE_EVENT = "jobright-myworkday-step-changed";
export const JACOBS_STEP_CHANGE_EVENT = "jobright-jacobs-step-changed";
export const WALMART_STEP_CHANGE_EVENT = "jobright-walmart-step-changed";
export const ORACLE_CLOUD_CONTINUE_EVENT = "jobright-oraclecloud-continue";
export const OBSERVER_LIST = {
  taleo: function(handle, hasClickedAutoFill) {
    let mutationObserver, retryTimeoutId, pollIntervalId, onAdvanceClick;
    let cursorState = {
      id: "",
      index: 0,
      didInitialSync: false
    }, siteKey = "taleo", logTaleoStep = (message, stepInfo) => {
      console.debug(`[Taleo][pagination] ${message}`, {
        id: stepInfo?.id ?? "",
        index: stepInfo?.index ?? 0,
        total: stepInfo?.total ?? 0,
        title: stepInfo?.title ?? ""
      });
    }, checkTaleoStep = (source = "mutation") => {
      let stepState = getTaleoStepState(), previousCursor = cursorState;
      if (cursorState = runTaleoPaginationCheck({
        cursor: cursorState,
        state: stepState,
        handle,
        hasClickedAutoFill}), !stepState) {
        "mutation" !== source && "poll" !== source && logTaleoStep("step-unreadable");
        return;
      }
      if (!previousCursor.didInitialSync) {
        logTaleoStep("initial-sync", stepState);
        return;
      }
      if (stepState.id === previousCursor.id) {
        source.startsWith("next-button") && logTaleoStep("step-unchanged", stepState);
        return;
      }
      if (stepState.index <= previousCursor.index) {
        logTaleoStep("non-forward-step", stepState);
        return;
      }
      logTaleoStep(stepState.isTerminal ? "terminal-step" : "forward-step", stepState);
    };
    function startTaleoObserver() {
      let formEl = document.querySelector("form#TBE_theForm");
      if (!formEl) {
        retryTimeoutId = setTimeout(startTaleoObserver, 100);
        return;
      }
      registerPaginationAdvanceCheck(siteKey, checkTaleoStep), (mutationObserver = new MutationObserver(() => checkTaleoStep())).observe(formEl, {
        attributes: true,
        attributeFilter: ["aria-hidden", "class", "hidden", "style"],
        childList: true,
        subtree: true
      }), checkTaleoStep("initial"), pollIntervalId = setInterval(() => checkTaleoStep("poll"), 600), onAdvanceClick = (clickEvent) => {
        hasClickedAutoFill && clickEvent.target instanceof Element && clickEvent.target.closest(TALEO_CWS_V2_NEXT_BUTTON_SELECTOR) && (setTimeout(() => checkTaleoStep(
          "next-button-800"
        ), 800), setTimeout(() => checkTaleoStep("next-button-1600"), 1600));
      }, document.addEventListener("click", onAdvanceClick, true);
    }
    return [startTaleoObserver, () => {
      registerPaginationAdvanceCheck(siteKey, void 0), clearTimeout(retryTimeoutId), pollIntervalId && clearInterval(pollIntervalId), mutationObserver?.disconnect(), onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true);
    }];
  },
  ripplehire: function(handle, hasClickedAutoFill) {
    let mutationObserver;
    let hasSeenContinue = false, checkStep = () => {
      let stepState = getRipplehireStepState(), hasPending = hasRipplehirePendingContinue(), shouldClearPending = "application_form" === stepState && (hasSeenContinue || hasPending);
      hasSeenContinue = runRipplehirePaginationCheck({
        hasSeenContinue,
        hasPendingContinue: hasPending,
        state: stepState,
        handle,
        hasClickedAutoFill}), shouldClearPending && clearRipplehirePendingContinue();
    }, onAdvanceClick = (element) => {
      let eventTarget = element.target;
      if (!(eventTarget instanceof Element)) return;
      let advanceButton = eventTarget.closest(RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR) || (eventTarget.matches("form#savecandidate") ? eventTarget.querySelector(RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR) : null);
      advanceButton && "duplicate_check" === getRipplehireStepState(advanceButton.parentElement || document) && saveRipplehirePendingContinue();
    };
    return [function() {
      checkStep(), document.body && (document.addEventListener("click", onAdvanceClick, true), document.addEventListener("submit", onAdvanceClick, true), (mutationObserver = new MutationObserver(checkStep)).observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      }));
    }, () => {
      mutationObserver?.disconnect(), document.removeEventListener("click", onAdvanceClick, true), document.removeEventListener("submit", onAdvanceClick, true);
    }];
  },
  icims: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let didInitialSync = false, currentTitle = "", siteKey = "icims", collectDocuments = () => {
      let docs = [document];
      if (window.self !== window.top) return docs;
      for (let iframeEl of Array.from(document.querySelectorAll("iframe"))) try {
        let iframeDoc = iframeEl.contentDocument ?? iframeEl.contentWindow?.document;
        iframeDoc && docs.push(iframeDoc);
      } catch {
      }
      return docs;
    }, readIcimsStepState = () => {
      for (let doc of collectDocuments()) {
        let nodeList = Array.from(doc.querySelectorAll('li[id^="Step_"]'));
        if (0 === nodeList.length) continue;
        let currentIndex = nodeList.findIndex((childEl) => {
          let stepTitleAttr = childEl.getAttribute("title") ?? "", contentTitle = childEl.querySelector(".iCIMS_Steps_Content")?.getAttribute("title") ?? "";
          return childEl.classList.contains("iCIMS_Steps_Current") || /current step/i.test(stepTitleAttr) || /current step/i.test(contentTitle);
        });
        if (-1 === currentIndex) continue;
        let stepTitle = (doc.querySelector(".iCIMS_PageStepText")?.textContent || nodeList[currentIndex].querySelector(
          ".iCIMS_Steps_Content"
        )?.getAttribute("title") || nodeList[currentIndex].getAttribute("title") || "").replace(/\s+/g, " ").trim().toLowerCase(), stateObject = {
          index: currentIndex,
          total: nodeList.length,
          title: stepTitle
        };
        return stateObject.continuationClaimed = claimIcimsContinuationStep(doc.documentElement, stateObject), stateObject;
      }
      return null;
    }, checkIcimsStep = () => {
      let stepState = readIcimsStepState();
      if (!stepState) return;
      if (!didInitialSync) {
        didInitialSync = true, sitePaginationIndexes[siteKey] = stepState.index, currentTitle = stepState.title, console.debug(
          "[iCIMS pagination] initial-sync",
          {
            index: stepState.index,
            title: stepState.title,
            total: stepState.total
          }
        );
        return;
      }
      let previousIndex = sitePaginationIndexes[siteKey], previousTitle = currentTitle;
      sitePaginationIndexes[siteKey] = runIcimsPaginationCheck({
        currentIndex: previousIndex,
        currentTitle: previousTitle,
        getState: () => stepState,
        handle,
        hasClickedAutoFill}), currentTitle = stepState.title, (stepState.index !== previousIndex || stepState.title !== previousTitle) && console.debug(
        "[iCIMS pagination] state-change",
        {
          previousIndex: previousIndex,
          previousTitle: previousTitle,
          nextIndex: stepState.index,
          nextTitle: stepState.title,
          continuationClaimed: stepState.continuationClaimed,
          hasClickedAutoFill}
      );
    };
    return [function() {
      registerPaginationAdvanceCheck(siteKey, checkIcimsStep), checkIcimsStep(), pollIntervalId = setInterval(checkIcimsStep, 800);
    }, () => {
      registerPaginationAdvanceCheck(siteKey, void 0), pollIntervalId && clearInterval(pollIntervalId);
    }];
  },
  paylocity: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let didInitialSync = false, siteKey = "paylocity";
    function getPaylocityStepState() {
      let stepParagraph = Array.from(document.querySelectorAll("p")).find((childEl) => /Step\s+\d+\s+of\s+\d+/i.test(childEl.textContent || "")), stepText = stepParagraph?.textContent || "", regexMatch = stepText.match(/Step\s+(\d+)\s+of\s+(\d+)/i);
      if (!regexMatch) return null;
      let parsedNumber = Number(regexMatch[1]), parsedNumber2 = Number(regexMatch[2]);
      return Number.isFinite(parsedNumber) && Number.isFinite(parsedNumber2) ? {
        index: parsedNumber,
        total: parsedNumber2,
        title: stepText.trim().toLowerCase()
      } : null;
    }
    return [function() {
      pollIntervalId = setInterval(() => {
        let stepState = getPaylocityStepState();
        if (stepState) {
          if (!didInitialSync) {
            didInitialSync = true, sitePaginationIndexes[siteKey] = stepState.index;
            return;
          }
          stepState.index > sitePaginationIndexes[siteKey] && stepState.index < stepState.total && hasClickedAutoFill && handle({
            delay: 1500,
            page_number: stepState.index,
            page_title: stepState.title
          }), sitePaginationIndexes[siteKey] = stepState.index;
        }
      }, 800);
    }, () => pollIntervalId && clearInterval(pollIntervalId)];
  },
  hrmdirect: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let siteKey = "hrmdirect", stateObject = {
      didInitialSync: sitePaginationIndexes[siteKey] > 0,
      index: sitePaginationIndexes[siteKey]
    };
    return [function() {
      pollIntervalId = setInterval(() => {
        let activeEl = document.querySelector("ol.breadcrumb.form-progress-holder");
        if (!activeEl) return;
        let activeLiText = getFirstOrderedNode('.//li[contains(@class, "active")]', activeEl)?.textContent, pageToken = activeLiText?.split(" ")[1], pageIndex = pageToken ? Number(pageToken) : -1, count = activeEl.querySelectorAll("li").length, stepState = Number.isInteger(pageIndex) && pageIndex > 0 && count > 0 ? {
          index: pageIndex,
          total: count
        } : null, previousCursor = stateObject;
        stateObject = runHrmdirectPaginationCheck({
          cursor: stateObject,
          state: stepState,
          hasClickedAutoFill,
          handle: (payload) => {
            console.debug("[HRMDirect][pagination] scheduling page autofill", {
              fromPage: previousCursor.index,
              toPage: stepState?.index,
              totalPages: stepState?.total
            }), handle(payload);
          }
        }), sitePaginationIndexes[siteKey] = stateObject.index, !previousCursor.didInitialSync && stepState && console.debug(
          "[HRMDirect][pagination] initial page synchronized",
          {
            page: stepState.index,
            totalPages: stepState.total,
            hasClickedAutoFill}
        );
      }, 1e3);
    }, () => clearInterval(pollIntervalId)];
  },
  jobdiva: function(handle, hasClickedAutoFill) {
    let mutationObserver, retryTimeoutId, pollIntervalId, activeModalKey;
    let didInitialSync = false, siteKey = "jobdiva", indexByKey = /* @__PURE__ */ new Map(), highestIndex = sitePaginationIndexes[siteKey], advanceArmedUntil = 0, armAdvanceWindow = () => {
      advanceArmedUntil = Date.now() + 6e3;
    }, readJobdivaStep = () => {
      let element = getJobdivaStepState();
      if (element) return highestIndex = Math.max(highestIndex, element.index), activeModalKey = void 0, {
        ...element,
        key: `numbered:${element.index}:${element.title}`
      };
      let modalSnapshot = getJobdivaModalStepSnapshot();
      if (!modalSnapshot) return null;
      let knownIndex = indexByKey.get(modalSnapshot.key);
      if (knownIndex) return activeModalKey = modalSnapshot.key, {
        index: knownIndex,
        total: Number.MAX_SAFE_INTEGER,
        title: modalSnapshot.title,
        key: modalSnapshot.key,
        hasFillableFields: modalSnapshot.hasFillableFields
      };
      let isForwardStep = Date.now() <= advanceArmedUntil, needsBaselineIndex = !didInitialSync || !activeModalKey;
      if (!isForwardStep || needsBaselineIndex) {
        let baselineIndex = Math.max(sitePaginationIndexes[siteKey], highestIndex, 1);
        return indexByKey.set(modalSnapshot.key, baselineIndex), activeModalKey = modalSnapshot.key, highestIndex = Math.max(highestIndex, baselineIndex), {
          index: baselineIndex,
          total: Number.MAX_SAFE_INTEGER,
          title: modalSnapshot.title,
          key: modalSnapshot.key,
          hasFillableFields: modalSnapshot.hasFillableFields
        };
      }
      return highestIndex = Math.max(highestIndex + 1, sitePaginationIndexes[siteKey] + 1), indexByKey.set(modalSnapshot.key, highestIndex), activeModalKey = modalSnapshot.key, {
        index: highestIndex,
        total: Number.MAX_SAFE_INTEGER,
        title: modalSnapshot.title,
        key: modalSnapshot.key,
        hasFillableFields: modalSnapshot.hasFillableFields
      };
    }, checkStep = (source) => {
      source?.includes("next-button") && armAdvanceWindow();
      let stepState = readJobdivaStep();
      if (!stepState) return;
      let isForwardStep = stepState.index > sitePaginationIndexes[siteKey];
      if (!didInitialSync) {
        didInitialSync = true, sitePaginationIndexes[siteKey] = stepState.index;
        return;
      }
      isForwardStep && hasClickedAutoFill && handle({
        clearOnly: false === stepState.hasFillableFields,
        delay: 1200,
        page_number: stepState.index,
        page_title: stepState.title || `step_${stepState.index}`
      }), isForwardStep && (advanceArmedUntil = 0), sitePaginationIndexes[siteKey] = stepState.index;
    }, onAdvanceClick = (element) => {
      let eventTarget = element.target;
      if (!(eventTarget instanceof Element)) return;
      let closestEl = eventTarget.closest("button, [role='button']");
      isJobdivaAdvanceButton(closestEl) && armAdvanceWindow();
    };
    function startJobdivaObserver() {
      registerPaginationAdvanceCheck(siteKey, checkStep), document.addEventListener("click", onAdvanceClick, true);
      let element = document.querySelector(".jd-reg-title") || document.querySelector(
        ".modal-content .job-app-main"
      ) || document.body;
      element ? ((mutationObserver = new MutationObserver(() => checkStep())).observe(element, {
        childList: true,
        subtree: true,
        characterData: true
      }), checkStep(), pollIntervalId = setInterval(checkStep, 600)) : retryTimeoutId = setTimeout(startJobdivaObserver, 100);
    }
    return [startJobdivaObserver, () => {
      clearTimeout(retryTimeoutId), pollIntervalId && clearInterval(pollIntervalId), mutationObserver && mutationObserver.disconnect(), document.removeEventListener("click", onAdvanceClick, true), registerPaginationAdvanceCheck(siteKey, void 0);
    }];
  },
  tesla: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let siteKey = "tesla";
    return [function() {
      pollIntervalId = setInterval(() => {
        let stepEyebrow = getFirstOrderedNode(
          '//span[contains(@class, "ApplicationStepEyebrow")]'
        );
        if (!stepEyebrow) return;
        let [firstPart, secondPart] = stepEyebrow.textContent.replace(/[^\d]/g, " ").trim().split(/\s+/).map(
          Number
        );
        if (0 === sitePaginationIndexes[siteKey] && firstPart >= 1) {
          sitePaginationIndexes[siteKey] = firstPart;
          return;
        }
        firstPart > sitePaginationIndexes[siteKey] && firstPart <= secondPart && hasClickedAutoFill && (handle({
          delay: 1e3,
          page_number: firstPart
        }), sitePaginationIndexes[siteKey] = firstPart);
      }, 1e3);
    }, () => clearInterval(pollIntervalId)];
  },
  myworkday: function(handle, hasClickedAutoFill) {
    let mutationObserver, retryTimeoutId, pollIntervalId, checkMyWorkdayStep;
    let retryTimeoutIds = [], siteKey = "myworkday", scheduleNextButtonRetries = () => {
      retryTimeoutIds.forEach(clearTimeout), retryTimeoutIds.length = 0, MYWORKDAY_NEXT_BUTTON_RETRY_DELAYS_MS.forEach((element) => {
        retryTimeoutIds.push(setTimeout(() => {
          checkMyWorkdayStep?.();
        }, element));
      });
    }, onContinueClick = (element) => {
      if (!hasClickedAutoFill) return;
      let eventTarget = element.target;
      if (!(eventTarget instanceof Element)) return;
      let closestEl = eventTarget.closest(
        'button, [role="button"], input[type="button"], input[type="submit"]'
      );
      isMyWorkdayContinueButton(closestEl) && scheduleNextButtonRetries();
    };
    function startMyWorkdayObserver() {
      let activeEl = document.querySelector(MYWORKDAY_PROGRESS_BAR_SELECTOR);
      activeEl ? (checkMyWorkdayStep = () => {
        let previousIndex = sitePaginationIndexes[siteKey], stepState = getMyWorkdayStepState();
        sitePaginationIndexes[siteKey] = runMyWorkdayPaginationCheck({
          currentIndex: previousIndex,
          getState: () => stepState,
          handle,
          hasClickedAutoFill,
          isPageReady: (element) => isMyWorkdayAutofillPageReady(document, element),
          onStepChange: (element) => {
            window.dispatchEvent(new CustomEvent(MYWORKDAY_STEP_CHANGE_EVENT, {
              detail: {
                previousIndex: previousIndex,
                state: element
              }
            }));
          }
        });
      }, document.addEventListener("click", onContinueClick, true), registerPaginationAdvanceCheck(siteKey, () => checkMyWorkdayStep?.()), (mutationObserver = new MutationObserver(checkMyWorkdayStep)).observe(activeEl, {
        attributes: true,
        attributeFilter: ["aria-current", "aria-selected", "class", "data-automation-id"],
        childList: true,
        subtree: true
      }), checkMyWorkdayStep(), pollIntervalId = setInterval(checkMyWorkdayStep, 600)) : retryTimeoutId = setTimeout(startMyWorkdayObserver, 100);
    }
    return [startMyWorkdayObserver, () => {
      document.removeEventListener("click", onContinueClick, true), registerPaginationAdvanceCheck(siteKey, void 0), retryTimeoutIds.forEach(clearTimeout), retryTimeoutIds.length = 0, clearTimeout(retryTimeoutId), pollIntervalId && clearInterval(pollIntervalId), mutationObserver && mutationObserver.disconnect();
    }];
  },
  jobvite: function(handle, hasClickedAutoFill) {
    let onAdvanceClick;
    let siteKey = "jobvite", lastHandledAt = 0, cooldownMs = 2500;
    return [function() {
      onAdvanceClick = (value) => {
        let eventTarget = value.target;
        if (!(eventTarget instanceof HTMLElement)) return;
        let closestEl = eventTarget.closest(JOBVITE_ADVANCE_BUTTON_SELECTOR), buttonStyles = closestEl ? window.getComputedStyle(closestEl) : null;
        if (!closestEl || !hasClickedAutoFill || "submit" === closestEl.type && !isJobviteConsentAcceptButton(closestEl) || closestEl.classList.contains(
          "ng-hide"
        ) || buttonStyles?.display === "none" || buttonStyles?.visibility === "hidden") return;
        let now = Date.now();
        now - lastHandledAt < cooldownMs || (lastHandledAt = now, sitePaginationIndexes[siteKey] += 1, handle({
          delay: 1200,
          page_number: sitePaginationIndexes[siteKey],
          page_title: "jobvite_next_page"
        }));
      }, document.addEventListener("click", onAdvanceClick, true);
    }, () => {
      onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true);
    }];
  },
  dayforce: function(handle, hasClickedAutoFill) {
    let mutationObserver, retryTimeoutId, pollIntervalId, onAdvanceClick;
    let siteKey = "dayforce", didInitialSync = false, checkStep = () => {
      let stepState = getDayforceStepState();
      if (stepState) {
        if (!didInitialSync) {
          didInitialSync = true, sitePaginationIndexes[siteKey] = stepState.index;
          return;
        }
        sitePaginationIndexes[siteKey] = runDayforcePaginationCheck({
          currentIndex: sitePaginationIndexes[siteKey],
          getState: () => stepState,
          handle,
          hasClickedAutoFill});
      }
    };
    function startDayforceObserver() {
      let element = document.querySelector(DAYFORCE_STEPPER_SELECTOR) || document.querySelector(
        '[test-id="basic-layout"]'
      ) || document.body;
      if (!element) {
        retryTimeoutId = setTimeout(startDayforceObserver, 100);
        return;
      }
      registerPaginationAdvanceCheck(siteKey, checkStep), (mutationObserver = new MutationObserver(checkStep)).observe(element, {
        attributes: true,
        attributeFilter: [
          "aria-current",
          "aria-hidden",
          "class",
          "data-status",
          "hidden",
          "style",
          "test-id"
        ],
        childList: true,
        subtree: true
      }), checkStep(), pollIntervalId = setInterval(checkStep, 600), onAdvanceClick = (childEl) => {
        let eventTarget = childEl.target;
        if (!(eventTarget instanceof HTMLElement)) return;
        let closestEl = eventTarget.closest(DAYFORCE_ADVANCE_BUTTON_SELECTOR);
        closestEl && hasClickedAutoFill && isDayforceContinueButton(closestEl) && (setTimeout(checkStep, 800), setTimeout(checkStep, 1600));
      }, document.addEventListener("click", onAdvanceClick, true);
    }
    return [startDayforceObserver, () => {
      registerPaginationAdvanceCheck(siteKey, void 0), clearTimeout(retryTimeoutId), pollIntervalId && clearInterval(pollIntervalId), mutationObserver && mutationObserver.disconnect(), onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true);
    }];
  },
  smartrecruiters: function(handle, hasClickedAutoFill) {
    let pollIntervalId, onAdvanceClick;
    let didInitialSync = false, previousKey = "", pendingKey = "", pendingArmedAt = 0, lastAutofillAt = 0, siteKey = "smartrecruiters", cooldownMs = 2500, pendingWindowMs = 8e3, normalizeText = (element) => (element || "").replace(/\s+/g, " ").trim(), isVisible = (element) => {
      if (!(element instanceof HTMLElement)) return false;
      let computedStyles = window.getComputedStyle(element), clientRect = element.getBoundingClientRect();
      return clientRect.width > 0 && clientRect.height > 0 && "none" !== computedStyles.display && "hidden" !== computedStyles.visibility && "true" !== element.getAttribute("aria-hidden");
    }, readSmartRecruitersStep = () => {
      let element = document.querySelector("sr-apply") || document.querySelector("main") || document.body;
      if (!element) return null;
      let filteredList = Array.from(element.querySelectorAll('h1, h2, h3, legend, [role="heading"]')).filter(isVisible).map((childEl) => normalizeText(childEl.textContent)).filter(Boolean), fieldSignatures = Array.from(element.querySelectorAll(
        'input:not([type="hidden"]), textarea, select, spl-text-field, spl-select, spl-autocomplete, spl-date-field, spl-phone-field, spl-dropzone'
      )).filter(isVisible).map((childEl) => normalizeText(childEl.getAttribute("name") || childEl.getAttribute("data-sr-id") || childEl.getAttribute("id") || childEl.getAttribute("aria-label") || childEl.textContent)).filter(
        Boolean
      ).slice(0, 40), filteredList2 = Array.from(element.querySelectorAll(SMARTRECRUITERS_ADVANCE_BUTTON_SELECTOR)).filter((childEl) => isVisible(childEl) && isSmartRecruitersAdvanceButton(childEl)), isScreening = window.location.pathname.endsWith("/screening") || !!element.querySelector(
        "sr-screening-questions-form"
      ), isTerminal = !isScreening && filteredList2.some((childEl) => {
        let buttonLabel = normalizeText(childEl.textContent || childEl.getAttribute("value") || childEl.getAttribute(
          "aria-label"
        )).toLowerCase();
        return "submit" === buttonLabel || "apply" === buttonLabel || buttonLabel.includes("submit");
      }), headingTitle = filteredList[0] || document.title || "smartrecruiters_next_page", joinedText = [
        window.location.pathname,
        window.location.search,
        window.location.hash,
        document.title,
        filteredList.join("|"),
        fieldSignatures.join("|")
      ].join("");
      return {
        key: joinedText,
        title: headingTitle.toLowerCase(),
        isTerminal: isTerminal,
        isScreening: isScreening
      };
    }, runTransition = (source, stepSnapshot) => {
      let willStartAutofill = hasClickedAutoFill && !isSmartRecruitersTerminalStep(stepSnapshot);
      return console.info("[SmartRecruiters][Pagination] transition-detected", {
        source: source || "poll",
        pageKind: stepSnapshot.isScreening ? "screening" : stepSnapshot.isTerminal ? "terminal" : "form",
        hasClickedAutoFill,
        willStartAutofill: willStartAutofill
      }), runSmartRecruitersPaginationCheck({
        currentIndex: sitePaginationIndexes[siteKey],
        getState: () => stepSnapshot,
        handle,
        hasClickedAutoFill});
    }, findAdvanceFromEvent = (element) => {
      let eventPath = element.composedPath(), splButton = eventPath.find((childEl) => childEl instanceof HTMLElement && "spl-button" === childEl.tagName.toLowerCase() && isSmartRecruitersAdvanceButton(childEl));
      if (splButton) return splButton;
      let primaryButton = eventPath.find((childEl) => childEl instanceof HTMLElement && childEl.classList.contains(
        "c-spl-button--primary"
      ));
      return primaryButton && isSmartRecruitersAdvanceButton(primaryButton) ? primaryButton : null;
    }, checkSmartRecruitersStep = (element) => {
      let stepSnapshot = readSmartRecruitersStep();
      if (!stepSnapshot) return;
      if (!didInitialSync) {
        didInitialSync = true, previousKey = stepSnapshot.key, sitePaginationIndexes[siteKey] = 0;
        return;
      }
      if (element === SMARTRECRUITERS_PREPARE_ADVANCE_SOURCE) {
        pendingKey = previousKey || stepSnapshot.key, pendingArmedAt = Date.now();
        return;
      }
      let hasPendingAdvance = pendingKey && Date.now() - pendingArmedAt <= pendingWindowMs;
      if (!hasPendingAdvance) {
        if (pendingKey = "", stepSnapshot.key !== previousKey) {
          let previousKeySnapshot = previousKey;
          if (previousKey = stepSnapshot.key, element?.startsWith("next-button-") && previousKeySnapshot) {
            let now = Date.now();
            if (now - lastAutofillAt < cooldownMs) return;
            lastAutofillAt = now, sitePaginationIndexes[siteKey] = runTransition(element, stepSnapshot);
          }
        }
        return;
      }
      if (stepSnapshot.key === pendingKey) return;
      pendingKey = "", previousKey = stepSnapshot.key;
      let now = Date.now();
      now - lastAutofillAt < cooldownMs || (lastAutofillAt = now, sitePaginationIndexes[siteKey] = runTransition(element, stepSnapshot));
    };
    return [function() {
      onAdvanceClick = (element) => {
        if (!hasClickedAutoFill) return;
        let advanceButton = findAdvanceFromEvent(element);
        advanceButton?.isConnected && (pendingKey = previousKey || readSmartRecruitersStep()?.key || "", pendingArmedAt = Date.now(), setTimeout(checkSmartRecruitersStep, 800), setTimeout(checkSmartRecruitersStep, 1600));
      }, document.addEventListener("click", onAdvanceClick, true), checkSmartRecruitersStep(), pollIntervalId = setInterval(checkSmartRecruitersStep, 800), registerPaginationAdvanceCheck(siteKey, checkSmartRecruitersStep);
    }, () => {
      registerPaginationAdvanceCheck(siteKey, void 0), pollIntervalId && clearInterval(pollIntervalId), onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true);
    }];
  },
  jacobs: function(handle, hasClickedAutoFill) {
    let mutationObserver, retryTimeoutId, pollIntervalId, onAdvanceClick;
    let siteKey = "jacobs";
    function startJacobsObserver() {
      let activeEl = document.querySelector(JACOBS_STEPS_LIST_SELECTOR);
      if (activeEl) {
        let onAdvanceClick = () => {
          let previousIndex = sitePaginationIndexes[siteKey], stepState = getJacobsStepState(), loadedState = loadJacobsPendingAutofill(), pendingExpired = loadedState && Date.now() - loadedState.startedAt > JACOBS_PENDING_AUTOFILL_TTL_MS, isSameOrigin = (() => {
            if (!loadedState) return false;
            try {
              return new URL(loadedState.href).origin === window.location.origin;
            } catch {
              return false;
            }
          })();
          if (loadedState && stepState && !pendingExpired && isSameOrigin && stepState.index > loadedState.index && !isJacobsSubmitStepTitle(stepState.title)) {
            saveJacobsPendingAutofill(stepState), sitePaginationIndexes[siteKey] = stepState.index, handle({
              delay: 1200,
              page_number: stepState.index,
              page_title: stepState.title
            });
            return;
          }
          loadedState && (pendingExpired || !isSameOrigin || stepState && (stepState.index < loadedState.index || isJacobsSubmitStepTitle(stepState.title))) && sessionStorage.removeItem(JACOBS_PENDING_AUTOFILL_KEY), sitePaginationIndexes[siteKey] = runJacobsPaginationCheck({
            currentIndex: previousIndex,
            getState: () => stepState,
            handle,
            hasClickedAutoFill,
            onStepChange: (element) => {
              window.dispatchEvent(new CustomEvent(JACOBS_STEP_CHANGE_EVENT, {
                detail: {
                  previousIndex: previousIndex,
                  state: element
                }
              }));
            }
          });
        };
        onAdvanceClick = (element) => {
          let eventTarget = element.target, loadedState = loadJacobsPendingAutofill(), pendingStillValid = loadedState && Date.now() - loadedState.startedAt <= JACOBS_PENDING_AUTOFILL_TTL_MS;
          if (!hasClickedAutoFill && !pendingStillValid || !(eventTarget instanceof HTMLElement) || !eventTarget.closest(JACOBS_ADVANCE_BUTTON_SELECTORS)) return;
          let stepState = getJacobsStepState();
          stepState && !isJacobsSubmitStepTitle(stepState.title) && saveJacobsPendingAutofill(stepState);
        }, registerPaginationAdvanceCheck(siteKey, onAdvanceClick), document.addEventListener("click", onAdvanceClick, true), (mutationObserver = new MutationObserver(onAdvanceClick)).observe(activeEl, {
          attributes: true,
          attributeFilter: ["aria-current", "class"],
          childList: true,
          characterData: true,
          subtree: true
        }), onAdvanceClick(), pollIntervalId = setInterval(onAdvanceClick, 600);
      } else retryTimeoutId = setTimeout(startJacobsObserver, 100);
    }
    return [startJacobsObserver, () => {
      registerPaginationAdvanceCheck(siteKey, void 0), clearTimeout(retryTimeoutId), onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true), pollIntervalId && clearInterval(pollIntervalId), mutationObserver && mutationObserver.disconnect();
    }];
  },
  phenom: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let didInitialSync = false, siteKey = "phenom", readUrlStep = () => {
      let element = new URL(window.location.href), parsedNumber = Number(element.searchParams.get("step") || "0"), stepName = (element.searchParams.get("stepname") || "").toLowerCase();
      return {
        step: Number.isFinite(parsedNumber) ? parsedNumber : 0,
        stepName: stepName
      };
    }, readProgressStep = () => {
      let element = document.querySelector(".slick-list, .slick-track");
      if (!element) return null;
      let nodeList = Array.from(element.querySelectorAll('li[role="button"]'));
      if (0 === nodeList.length) return null;
      let currentStepEl = nodeList.find((childEl) => "step" === childEl.getAttribute("aria-current") || childEl.classList.contains(
        "progress-current"
      ) || childEl.classList.contains("slick-current") || childEl.classList.contains("active")) ?? null;
      if (!currentStepEl) return null;
      let foundIndex = nodeList.indexOf(currentStepEl);
      if (foundIndex < 0) return null;
      let progressStepName = currentStepEl.querySelector(".title")?.textContent?.trim().toLowerCase() || currentStepEl.getAttribute(
        "atm-value"
      )?.trim().toLowerCase() || currentStepEl.getAttribute("atm-id")?.trim().toLowerCase() || "";
      return {
        step: foundIndex + 1,
        stepName: progressStepName,
        totalLength: nodeList.length
      };
    };
    return [function() {
      pollIntervalId = setInterval(() => {
        let activeEl = document.querySelector("form.rjsf");
        if (!activeEl) return;
        let urlState = readUrlStep(), progressState = readProgressStep(), resolvedStep = (progressState?.step && progressState.step > 0 ? progressState.step : 0) || urlState.step, resolvedStepName = progressState?.stepName || urlState.stepName;
        if (!didInitialSync) {
          didInitialSync = true, sitePaginationIndexes[siteKey] = resolvedStep;
          return;
        }
        let previousIndex = sitePaginationIndexes[siteKey], isMatch = isPhenomTerminalStep(resolvedStepName);
        if (sitePaginationIndexes[siteKey] = runPhenomPaginationCheck({
          currentIndex: previousIndex,
          state: {
            step: resolvedStep,
            stepName: resolvedStepName
          },
          handle,
          hasClickedAutoFill}), !isMatch && resolvedStep > previousIndex && hasClickedAutoFill) {
          setTimeout(() => {
            document.dispatchEvent(new CustomEvent("CheckAgentCoverLetter"));
          }, 300), setTimeout(() => {
            document.dispatchEvent(new CustomEvent("CheckAgentCoverLetter"));
          }, 1200);
          return;
        }
      }, 800);
    }, () => {
      clearInterval(pollIntervalId);
    }];
  },
  adpWorkforceNow: function(handle, hasClickedAutoFill) {
    let pollIntervalId, onAdvanceClick;
    let siteKey = "adpWorkforceNow", previousKey = "", didInitialSync = false, lastAutofillAt = 0, cooldownMs = 2500, pendingKey = "", pendingArmedAt = 0, pendingWindowMs = 1e4, recaptchaIgnoreUntil = 0, recaptchaIgnoreMs = 5e3, nextFooterButtonId = "ja_sv_cw_next_footer_btn";
    function getAdpWfnStepKeyLocal() {
      return getAdpWorkforceNowStepKey();
    }
    function scheduleAdpWfnAutofill(pageTitle) {
      if (!hasClickedAutoFill) return;
      let now = Date.now();
      now - lastAutofillAt < cooldownMs || (lastAutofillAt = now, handle({
        delay: 1500,
        page_number: sitePaginationIndexes[siteKey] + 1,
        page_title: pageTitle
      }), sitePaginationIndexes[siteKey] += 1, previousKey = getAdpWfnStepKeyLocal());
    }
    function prepareAdpWfnAdvance(element) {
      if (!hasClickedAutoFill) return;
      let stepKey = getAdpWfnStepKeyLocal();
      didInitialSync || (previousKey = stepKey, didInitialSync = true), pendingKey = previousKey || stepKey, pendingArmedAt = Date.now(), setTimeout(() => checkAdpWfnStepChange(element), 800), setTimeout(
        () => checkAdpWfnStepChange(element),
        1600
      ), setTimeout(() => checkAdpWfnStepChange(element), 3e3);
    }
    function checkAdpWfnStepChange(element = "adp_wfn_step_key") {
      let stepKey = getAdpWfnStepKeyLocal();
      if (!didInitialSync) {
        previousKey = stepKey, didInitialSync = true;
        return;
      }
      if (Date.now() <= recaptchaIgnoreUntil) {
        previousKey = stepKey, pendingKey = "";
        return;
      }
      let hasPendingAdvance = pendingKey && Date.now() - pendingArmedAt <= pendingWindowMs;
      if (!hasPendingAdvance) {
        pendingKey = "", stepKey !== previousKey && (previousKey = stepKey);
        return;
      }
      stepKey !== pendingKey && (pendingKey = "", scheduleAdpWfnAutofill(element));
    }
    function findAdpWfnNextButton(element) {
      for (let pathEl of element.composedPath()) {
        if (!(pathEl instanceof HTMLElement) || pathEl.id !== nextFooterButtonId) continue;
        if (pathEl instanceof HTMLButtonElement) return pathEl;
        let childEl = pathEl.closest("button");
        return childEl instanceof HTMLButtonElement ? childEl : null;
      }
      return null;
    }
    function isAdpWfnRecaptchaContinueClick(element) {
      return element.composedPath().some((childEl) => childEl instanceof HTMLElement && childEl.id === ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_ID);
    }
    return [function() {
      onAdvanceClick = (element) => {
        if (!hasClickedAutoFill) return;
        if (isAdpWfnRecaptchaContinueClick(element)) {
          recaptchaIgnoreUntil = Date.now() + recaptchaIgnoreMs, previousKey = getAdpWfnStepKeyLocal(), pendingKey = "";
          return;
        }
        let nextButton = findAdpWfnNextButton(element);
        nextButton?.isConnected && nextButton.innerText?.trim() !== "Submit" && element.composedPath().includes(
          nextButton
        ) && prepareAdpWfnAdvance("adp_wfn_next_click");
      }, document.addEventListener("click", onAdvanceClick, true), pollIntervalId = setInterval(() => checkAdpWfnStepChange(), 1e3);
    }, () => {
      pollIntervalId && clearInterval(pollIntervalId), onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true);
    }];
  },
  adpMyJobs: function(handle, hasClickedAutoFill) {
    let pollIntervalId, onAdvanceClick;
    let didInitialSync = false, previousKey = "", lastState = null, pendingState = null, pendingArmedAt = 0, lastAutofillAt = 0, waitReason = "", siteKey = "adpMyJobs", cooldownMs = 2500, cooldownMs2 = 1e4, normalizeText = (element) => (element || "").replace(/\s+/g, " ").trim(), summarizeState = (element) => ({
      workflowComponent: element?.workflowComponent || "",
      formFieldCount: element?.formFieldCount || 0,
      isTerminal: !!element?.isTerminal,
      restoredPending: !!element?.isRestoredPending
    }), logWaiting = (element, currentState) => {
      element !== waitReason && (waitReason = element, console.info("[ADP MyJobs][Pagination] waiting for next page", {
        reason: element,
        pendingAgeMs: Date.now() - pendingArmedAt,
        previous: summarizeState(pendingState),
        current: summarizeState(currentState)
      }));
    }, isVisible = (element) => {
      if (!(element instanceof HTMLElement) || element.closest("#jobright-helper-id")) return false;
      let computedStyles = window.getComputedStyle(element), clientRect = element.getBoundingClientRect();
      return clientRect.width > 0 && clientRect.height > 0 && "none" !== computedStyles.display && "hidden" !== computedStyles.visibility && "true" !== element.getAttribute("aria-hidden");
    }, readStepTitle = () => {
      let element = Array.from(document.querySelectorAll(
        'button, [role="button"], li, a, [aria-current="step"]'
      )).find((childEl) => {
        if (!isVisible(childEl)) return false;
        let buttonLabel = normalizeText(childEl.textContent).toLowerCase();
        return buttonLabel.includes("step status current") || "step" === childEl.getAttribute(
          "aria-current"
        ) || childEl.classList.contains("current") || childEl.classList.contains(
          "active"
        );
      }), stepTitle = normalizeText(element?.textContent).replace(/^step status current\s*/i, "").replace(
        /^current\s*/i,
        ""
      );
      if (stepTitle) return stepTitle;
      let activeEl = document.querySelector(".page-content-container[aria-label]"), ariaLabel = normalizeText(activeEl?.getAttribute("aria-label"));
      if (ariaLabel) return ariaLabel;
      let foundEl = Array.from(document.querySelectorAll('h1, h2, h3, [role="heading"]')).filter(isVisible).map((childEl) => normalizeText(childEl.textContent)).find(Boolean);
      return foundEl || document.title || "adp_myjobs_step";
    }, readAdpMyJobsStep = () => {
      let element = readStepTitle(), workflowComponent = new URL(window.location.href).searchParams.get("workflowComponent") || "", fieldSignatures = Array.from(document.querySelectorAll(
        "adp-form-group[data-name], input:not([type='hidden']), textarea, select, sdf-select-simple, sdf-radio-group, sdf-checkbox"
      )).filter(isVisible).map((childEl) => normalizeText(childEl.getAttribute("data-name") || childEl.getAttribute("name") || childEl.getAttribute("id") || childEl.getAttribute("aria-label") || childEl.textContent)).filter(
        Boolean
      ).slice(0, 60), joinedText = fieldSignatures.join("|"), fingerprintHash = fieldSignatures.reduce((hash, signaturePart) => {
        let nextHash = hash;
        for (let char of signaturePart) nextHash = Math.imul(nextHash ^ char.charCodeAt(0), 16777619);
        return nextHash;
      }, 2166136261), filteredList = Array.from(document.querySelectorAll(ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR)).filter((childEl) => isVisible(childEl) && isAdpMyJobsAdvanceButton(childEl)), anyMatch = filteredList.some((childEl) => {
        let buttonLabel = normalizeText(childEl.textContent || childEl.getAttribute("value") || childEl.getAttribute(
          "aria-label"
        )).toLowerCase();
        return "submit" === buttonLabel || "apply" === buttonLabel || buttonLabel.includes("submit");
      });
      return {
        key: [
          window.location.pathname,
          window.location.search,
          window.location.hash,
          workflowComponent,
          document.title,
          element,
          joinedText
        ].join(""),
        formKey: joinedText,
        formFieldCount: fieldSignatures.length,
        formFingerprint: (fingerprintHash >>> 0).toString(16),
        workflowComponent: workflowComponent,
        title: element.toLowerCase(),
        isTerminal: anyMatch
      };
    }, findContinueFromEvent = (element) => {
      for (let pathEl of element.composedPath()) {
        if (!(pathEl instanceof HTMLElement)) continue;
        let childEl = pathEl.closest?.(ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR);
        if (childEl?.isConnected && isVisible(childEl) && isAdpMyJobsContinueButton(childEl)) return childEl;
      }
      return null;
    }, checkAdpMyJobsStep = () => {
      let stepState = readAdpMyJobsStep();
      if (!stepState) return;
      if (!didInitialSync) {
        didInitialSync = true, previousKey = stepState.key, lastState = stepState;
        let element = loadAdpMyJobsPendingContinue();
        element && (pendingState = {
          key: "",
          formFingerprint: element.formFingerprint,
          isRestoredPending: true,
          title: "",
          isTerminal: false
        }, pendingArmedAt = element.startedAt, console.info(
          "[ADP MyJobs][Pagination] pending Continue restored after observer remount",
          {
            pendingAgeMs: Date.now() - pendingArmedAt,
            previous: summarizeState(pendingState),
            current: summarizeState(stepState)
          }
        )), console.info("[ADP MyJobs][Pagination] initial state captured", {
          current: summarizeState(stepState)
        });
        return;
      }
      let hasPendingAdvance = pendingState && Date.now() - pendingArmedAt <= cooldownMs2;
      if (!hasPendingAdvance) {
        pendingState && console.warn("[ADP MyJobs][Pagination] pending advance expired", {
          pendingAgeMs: Date.now() - pendingArmedAt,
          previous: summarizeState(pendingState),
          current: summarizeState(stepState)
        }), pendingState = null, clearAdpMyJobsPendingContinue(), stepState.key !== previousKey && (console.info(
          "[ADP MyJobs][Pagination] state changed without captured Continue",
          {
            previous: summarizeState(lastState),
            current: summarizeState(stepState)
          }
        ), previousKey = stepState.key, lastState = stepState);
        return;
      }
      if (pendingState.isRestoredPending && !isAdpMyJobsRestoredPendingAdvanceReady({
        previousFormFingerprint: pendingState.formFingerprint || "",
        currentFormFingerprint: stepState.formFingerprint || "",
        currentFormFieldCount: stepState.formFieldCount || 0
      })) {
        logWaiting(stepState.formFieldCount ? "restored-page-form-unchanged" : "next-page-form-not-ready", stepState);
        return;
      }
      if (!pendingState.isRestoredPending && stepState.key === pendingState.key) {
        logWaiting("page-key-unchanged", stepState);
        return;
      }
      if (pendingState.formKey && !stepState.formKey && !pendingState.isRestoredPending) {
        logWaiting("next-page-form-not-ready", stepState);
        return;
      }
      if (!pendingState.isRestoredPending && pendingState.formKey && stepState.formKey && stepState.formKey === pendingState.formKey) {
        logWaiting("previous-page-form-still-rendered", stepState);
        return;
      }
      let previousPending = pendingState;
      pendingState = null, clearAdpMyJobsPendingContinue(), waitReason = "", previousKey = stepState.key, lastState = stepState;
      let now = Date.now();
      if (now - lastAutofillAt < cooldownMs) return;
      lastAutofillAt = now;
      let willStartAutofill = hasClickedAutoFill && !isAdpMyJobsTerminalStep(stepState);
      console.info("[ADP MyJobs][Pagination] page transition accepted", {
        previous: summarizeState(previousPending),
        current: summarizeState(stepState),
        willStartAutofill: willStartAutofill
      }), sitePaginationIndexes[siteKey] = runAdpMyJobsPaginationCheck({
        currentIndex: sitePaginationIndexes[siteKey],
        getState: () => stepState,
        handle,
        hasClickedAutoFill,
        previousFormKey: previousPending.formKey,
        previousKey: previousPending.key
      });
    };
    return [function() {
      onAdvanceClick = (element) => {
        if (!hasClickedAutoFill) return;
        let continueButton = findContinueFromEvent(element);
        continueButton && (pendingState = lastState || readAdpMyJobsStep()) && (pendingArmedAt = Date.now(), saveAdpMyJobsPendingContinue(pendingState, pendingArmedAt), waitReason = "", console.info(
          "[ADP MyJobs][Pagination] Continue captured",
          {
            source: element.isTrusted ? "native" : "programmatic",
            previous: summarizeState(pendingState)
          }
        ), setTimeout(checkAdpMyJobsStep, 800), setTimeout(checkAdpMyJobsStep, 1600), setTimeout(checkAdpMyJobsStep, 3e3));
      }, document.addEventListener("click", onAdvanceClick, true), console.info(
        "[ADP MyJobs][Pagination] observer registered",
        {
          hasClickedAutoFill}
      ), checkAdpMyJobsStep(), pollIntervalId = setInterval(checkAdpMyJobsStep, 800), registerPaginationAdvanceCheck(siteKey, checkAdpMyJobsStep);
    }, () => {
      registerPaginationAdvanceCheck(siteKey, void 0), pollIntervalId && clearInterval(pollIntervalId), onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true);
    }];
  },
  paycomonline: function(handle, hasClickedAutoFill) {
    let pollIntervalId, onAdvanceClick;
    let didInitialSync = false, previousKey = "", lastState = null, pendingState = null, pendingArmedAt = 0, lastAutofillAt = 0, siteKey = "paycomonline", cooldownMs = 2500, cooldownMs2 = 1e4, normalizeText = (element) => (element || "").replace(/\s+/g, " ").trim(), isVisible = (element) => {
      if (!(element instanceof HTMLElement) || element.closest("#jobright-helper-id") || element.hidden || "true" === element.getAttribute("aria-hidden")) return false;
      let computedStyles = window.getComputedStyle(element), clientRect = element.getBoundingClientRect();
      return clientRect.width > 0 && clientRect.height > 0 && "none" !== computedStyles.display && "hidden" !== computedStyles.visibility;
    }, getFormRoot = () => document.querySelector("[data-testid='application-form']") || document.querySelector("form") || document.querySelector("main") || document.body, readPaycomStep = () => {
      let element = getFormRoot();
      if (!element) return null;
      let filteredList = Array.from(element.querySelectorAll('h1, h2, h3, legend, [role="heading"]')).filter(isVisible).map((childEl) => normalizeText(childEl.textContent)).filter(Boolean), fieldSignatures = Array.from(element.querySelectorAll(
        "input:not([type='hidden']):not([type='button']):not([type='submit']):not([type='reset']), textarea, select, [role='radio'], [role='checkbox'], [aria-required='true'], label, legend"
      )).filter(isVisible).map((childEl) => normalizeText(childEl.getAttribute("data-testid") || childEl.getAttribute("name") || childEl.getAttribute("id") || childEl.getAttribute("aria-label") || childEl.getAttribute("value") || childEl.textContent)).filter(Boolean).slice(0, 80), bodySnippet = normalizeText(element.innerText || element.textContent).slice(0, 600), joinedText = [filteredList.join("|"), fieldSignatures.join("|"), bodySnippet].filter(Boolean).join("|"), filteredList2 = Array.from(element.querySelectorAll(PAYCOMONLINE_ADVANCE_BUTTON_SELECTOR)).filter((childEl) => isVisible(childEl) && isPaycomOnlineAdvanceButton(childEl)), anyMatch = filteredList2.some((childEl) => !isPaycomOnlineContinueButton(childEl)), headingTitle = filteredList[0] || normalizeText(document.title) || "paycomonline_next_page";
      return {
        key: [
          window.location.pathname,
          window.location.search,
          window.location.hash,
          document.title,
          joinedText
        ].join(""),
        formKey: joinedText,
        title: headingTitle.toLowerCase(),
        isTerminal: anyMatch
      };
    }, findAdvanceButton = (element) => {
      for (let pathEl of element.composedPath()) {
        if (!(pathEl instanceof HTMLElement)) continue;
        let childEl = pathEl.closest?.(PAYCOMONLINE_ADVANCE_BUTTON_SELECTOR);
        if (childEl?.isConnected && isVisible(childEl) && isPaycomOnlineContinueButton(childEl)) return childEl;
      }
      return null;
    }, checkPaycomStep = () => {
      let stepState = readPaycomStep();
      if (!stepState) return;
      if (!didInitialSync) {
        didInitialSync = true, previousKey = stepState.key, lastState = stepState;
        return;
      }
      let hasPendingAdvance = pendingState && Date.now() - pendingArmedAt <= cooldownMs2;
      if (!hasPendingAdvance) {
        pendingState = null, stepState.key !== previousKey && (previousKey = stepState.key, lastState = stepState);
        return;
      }
      if (stepState.key === pendingState.key || pendingState.formKey && !stepState.formKey || pendingState.formKey && stepState.formKey && stepState.formKey === pendingState.formKey) return;
      let previousPending = pendingState;
      pendingState = null, previousKey = stepState.key, lastState = stepState;
      let now = Date.now();
      now - lastAutofillAt < cooldownMs || (lastAutofillAt = now, sitePaginationIndexes[siteKey] = runPaycomOnlinePaginationCheck({
        currentIndex: sitePaginationIndexes[siteKey],
        getState: () => stepState,
        handle,
        hasClickedAutoFill,
        previousFormKey: previousPending.formKey,
        previousKey: previousPending.key
      }));
    };
    return [function() {
      onAdvanceClick = (element) => {
        if (!hasClickedAutoFill) return;
        let continueButton = findAdvanceButton(element);
        continueButton && (pendingState = lastState || readPaycomStep(), pendingArmedAt = Date.now(), setTimeout(checkPaycomStep, 800), setTimeout(checkPaycomStep, 1600), setTimeout(checkPaycomStep, 3e3));
      }, document.addEventListener("click", onAdvanceClick, true), checkPaycomStep(), pollIntervalId = setInterval(checkPaycomStep, 800), registerPaginationAdvanceCheck(siteKey, checkPaycomStep);
    }, () => {
      registerPaginationAdvanceCheck(siteKey, void 0), pollIntervalId && clearInterval(pollIntervalId), onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true);
    }];
  },
  adpRecruiting: function(handle, hasClickedAutoFill) {
    let pollIntervalId, onAdvanceClick;
    let siteKey = "adpRecruiting", previousKey = "", didInitialSync = false, lastAutofillAt = 0, cooldownMs = 2500;
    function getAdpRecruitingStepKey() {
      let element = document.querySelector(
        ".breadcrumbs .active, .bread-crumbs .active, .wizard .active, .dijitTabChecked"
      )?.textContent?.trim() ?? "", headingText = document.querySelector("h1")?.textContent?.trim() ?? "", pageTitle = document.title?.trim() ?? "";
      return window.location.pathname + window.location.search + window.location.hash + "" + pageTitle + "" + element + "" + headingText;
    }
    function isAdpRecruitingSubmitButton(element) {
      if (!(element instanceof Element)) return false;
      let closestEl = element.closest("button, input[type='submit'], input[type='button'], [role='button']");
      if (!closestEl) return false;
      let buttonLabel = (closestEl.textContent || closestEl.getAttribute("value") || closestEl.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim().toLowerCase();
      return buttonLabel.includes("submit application") || "submit" === buttonLabel;
    }
    function findAdpRecruitingAdvanceControl(element) {
      if (!(element instanceof Element)) return null;
      let closestEl = element.closest("div.appGo.center");
      if (closestEl instanceof HTMLElement) return closestEl;
      let closestEl2 = element.closest(
        '[data-dojo-attach-point="thePagerDualNext"], [data-dojo-attach-point="thePagerNext"]'
      );
      if (closestEl2 instanceof HTMLElement) return closestEl2;
      let closestEl3 = element.closest(".two.column");
      if (closestEl3) {
        let matchedEls = closestEl3.querySelectorAll("div.appGo.center");
        for (let i = matchedEls.length - 1; i >= 0; i--) {
          let goButton = matchedEls[i];
          if (goButton.contains(element)) return goButton;
        }
      }
      return null;
    }
    function isAdpRecruitingControlDisabled(element) {
      if ("true" === element.getAttribute("aria-disabled") || element.classList.contains("dijitDisabled") || element.parentElement?.classList.contains("dijitDisabled")) return true;
      let computedStyles = window.getComputedStyle(element);
      return "none" === computedStyles.display || "hidden" === computedStyles.visibility;
    }
    function scheduleAdpRecruitingAutofill(pageTitle) {
      if (!hasClickedAutoFill) return;
      let now = Date.now();
      now - lastAutofillAt < cooldownMs || (lastAutofillAt = now, handle({
        delay: 1500,
        page_number: sitePaginationIndexes[siteKey] + 1,
        page_title: pageTitle
      }), sitePaginationIndexes[siteKey] += 1, previousKey = getAdpRecruitingStepKey());
    }
    return [function() {
      onAdvanceClick = (element) => {
        if (!hasClickedAutoFill || isAdpRecruitingSubmitButton(element.target)) return;
        let advanceControl = findAdpRecruitingAdvanceControl(element.target);
        advanceControl?.isConnected && (isAdpRecruitingControlDisabled(advanceControl) || scheduleAdpRecruitingAutofill("adp_recruiting_next_click"));
      }, document.addEventListener("click", onAdvanceClick, true), pollIntervalId = setInterval(() => {
        let element = getAdpRecruitingStepKey();
        if (!didInitialSync) {
          previousKey = element, didInitialSync = true;
          return;
        }
        element !== previousKey && hasClickedAutoFill && scheduleAdpRecruitingAutofill("adp_recruiting_step_key");
      }, 1e3);
    }, () => {
      pollIntervalId && clearInterval(pollIntervalId), onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true);
    }];
  },
  brassring: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let siteKey = "brassring", didInitialSync = false, previousKey = "", lastHandledAt = 0, cooldownMs = 2500, normalizeText = (element) => (element || "").replace(/\s+/g, " ").trim(), isVisible = (element) => {
      if (!(element instanceof HTMLElement)) return false;
      let computedStyles = window.getComputedStyle(element);
      return "none" !== computedStyles.display && "hidden" !== computedStyles.visibility && "true" !== element.getAttribute(
        "aria-hidden"
      );
    }, getApplyRoot = () => document.querySelector("#applyFlow") || document.querySelector("#applyForm") || document.body, readHeadingTitle = (element) => {
      let foundEl = Array.from(element.querySelectorAll("h1, [role='heading']")).find((childEl) => {
        if (!isVisible(childEl)) return false;
        let headingText = normalizeText(childEl.textContent);
        return !!headingText && !/electronic combat solutions/i.test(headingText);
      });
      return normalizeText(foundEl?.textContent || document.title.split("(")[0]);
    }, readProgressPercent = (element) => {
      let bodyText = normalizeText(element.textContent), regexMatch = bodyText.match(/Percent of application completed\s*(\d+)%/i);
      if (regexMatch) return Number(regexMatch[1]);
      let foundEl = Array.from(element.querySelectorAll("[aria-valuenow], progress")).map((childEl) => {
        let valueAttr = childEl.getAttribute("aria-valuenow") || String(childEl.value || "");
        return valueAttr ? Number(valueAttr) : NaN;
      }).find((childEl) => Number.isFinite(childEl) && childEl >= 0);
      return Number.isFinite(foundEl) && foundEl || 0;
    }, readBrassringStep = () => {
      let element = getApplyRoot();
      if (!element) return null;
      let title = readHeadingTitle(element).toLowerCase(), percent = readProgressPercent(element), stepKey = `${percent}:${title}`, foundEl = Array.from(element.querySelectorAll(
        "button, input[type='button'], input[type='submit'], a"
      )).find((childEl) => {
        if (!isVisible(childEl)) return false;
        let buttonLabel = normalizeText(childEl.textContent || childEl.value).toLowerCase();
        return "submit" === buttonLabel || buttonLabel.includes("submit application");
      });
      return {
        key: stepKey,
        percent: percent,
        title: title,
        isTerminal: !!foundEl || title.includes("review") || title.includes("submit") || title.includes(
          "summary"
        )
      };
    };
    return [function() {
      pollIntervalId = setInterval(() => {
        let stepState = readBrassringStep();
        if (!stepState || !stepState.key) return;
        if (!didInitialSync) {
          didInitialSync = true, previousKey = stepState.key, sitePaginationIndexes[siteKey] = stepState.percent || 1;
          return;
        }
        if (stepState.key === previousKey) return;
        if (stepState.percent <= 0) {
          previousKey = stepState.key;
          return;
        }
        let percent = stepState.percent, isForwardStep = percent > sitePaginationIndexes[siteKey];
        if (!isForwardStep) {
          previousKey = stepState.key;
          return;
        }
        let computedValue = Date.now();
        hasClickedAutoFill && computedValue - lastHandledAt >= cooldownMs && (lastHandledAt = computedValue, handle({
          clearOnly: stepState.isTerminal,
          delay: stepState.isTerminal ? void 0 : 1200,
          page_number: percent,
          page_title: stepState.title || "brassring_next_page"
        })), previousKey = stepState.key, sitePaginationIndexes[siteKey] = percent;
      }, 800);
    }, () => {
      pollIntervalId && clearInterval(pollIntervalId);
    }];
  },
  oraclecloud: function(handle, hasClickedAutoFill) {
    let pollIntervalId, onAdvanceClick;
    let siteKey = "oraclecloud", checkOracleCloudStep = () => {
      let stepState = getOracleCloudStepState(), loadedState = loadOracleCloudPendingAutofill(), pendingExpired = loadedState && Date.now() - loadedState.startedAt > ORACLE_CLOUD_PENDING_AUTOFILL_TTL_MS, isSameOriginPending = !!loadedState && isSameOriginHref(loadedState.href), hasValidPending = !!(loadedState && !pendingExpired && isSameOriginPending), didInitialSync = false;
      if (sitePaginationIndexes[siteKey] = runOracleCloudPaginationCheck({
        currentIndex: sitePaginationIndexes[siteKey],
        getState: () => stepState,
        handle: (payload) => {
          hasValidPending && loadedState && stepState.index > loadedState.index && (didInitialSync = true), handle(payload);
        },
        hasClickedAutoFill: hasClickedAutoFill || hasValidPending,
        pendingIndex: hasValidPending ? loadedState?.index : void 0
      }), didInitialSync) {
        saveOracleCloudPendingAutofill(stepState);
        return;
      }
      loadedState && (pendingExpired || !isSameOriginPending || !stepState.isApplySection || stepState.isTerminal || stepState.index < loadedState.index) && clearOracleCloudPendingAutofill();
    };
    return [function() {
      onAdvanceClick = (element) => {
        let eventTarget = element.target, loadedState = loadOracleCloudPendingAutofill(), pendingStillValid = loadedState && Date.now() - loadedState.startedAt <= ORACLE_CLOUD_PENDING_AUTOFILL_TTL_MS;
        if (!hasClickedAutoFill && !pendingStillValid || !(eventTarget instanceof HTMLElement)) return;
        let closestEl = eventTarget.closest(ORACLE_CLOUD_BUTTON_SELECTOR);
        if (!isOracleCloudAdvanceButton(closestEl)) return;
        let stepState = getOracleCloudStepState();
        saveOracleCloudPendingAutofill(stepState);
      }, document.addEventListener("click", onAdvanceClick, true), checkOracleCloudStep(), pollIntervalId = setInterval(() => {
        checkOracleCloudStep();
      }, 800), registerPaginationAdvanceCheck(siteKey, checkOracleCloudStep);
    }, () => {
      registerPaginationAdvanceCheck(siteKey, void 0), onAdvanceClick && document.removeEventListener("click", onAdvanceClick, true), pollIntervalId && clearInterval(pollIntervalId);
    }];
  },
  adobe: function(handle, hasClickedAutoFill) {
    let mutationObserver, retryTimeoutId;
    let siteKey = "adobe";
    function startAdobeObserver() {
      let activeEl = document.querySelector(".progressbarlist"), activeEl2 = document.querySelector('li[role="button"].slick-current');
      if (activeEl && activeEl2) {
        let nodeList = Array.from(document.querySelectorAll('.progressbarlist li[role="button"]'));
        if (nodeList.length > 0 && 0 === sitePaginationIndexes[siteKey]) {
          let element = nodeList.indexOf(activeEl2);
          element >= 0 && (sitePaginationIndexes[siteKey] = element);
        }
        (mutationObserver = new MutationObserver(() => {
          let activeEl = document.querySelector('li[role="button"].slick-current');
          if (!activeEl) return;
          let nodeList = Array.from(document.querySelectorAll(
            '.progressbarlist li[role="button"]'
          )), foundIndex = nodeList.indexOf(activeEl), count = nodeList.length, stepTitle = activeEl.getAttribute("atm-value")?.toLowerCase() || activeEl.querySelector(".title")?.textContent?.trim().toLowerCase() || "";
          if (foundIndex >= 0 && foundIndex > sitePaginationIndexes[siteKey] && foundIndex < count && hasClickedAutoFill && "review" !== stepTitle && !stepTitle.includes(
            "review"
          )) {
            handle({
              delay: 1500,
              page_number: foundIndex + 1,
              page_title: stepTitle
            }), sitePaginationIndexes[siteKey] = foundIndex;
            return;
          }
          foundIndex >= 0 && sitePaginationIndexes[siteKey] < foundIndex && (sitePaginationIndexes[siteKey] = foundIndex);
        })).observe(activeEl, {
          attributes: true,
          attributeFilter: ["class"],
          childList: false,
          subtree: true
        });
      } else retryTimeoutId = setTimeout(startAdobeObserver, 100);
    }
    return [startAdobeObserver, () => {
      clearTimeout(retryTimeoutId), mutationObserver && mutationObserver.disconnect();
    }];
  },
  walmart: function(handle, hasClickedAutoFill) {
    let mutationObserver, scheduler, pollIntervalId, retryTimeoutId;
    let stateObject = {
      key: "",
      pageNumber: sitePaginationIndexes.walmart || 1,
      didInitialSync: false
    }, siteKey = "walmart", checkStep = () => {
      stateObject = runWalmartPaginationCheck({
        cursor: stateObject,
        handle,
        hasClickedAutoFill,
        onStepChange: (element) => {
          window.dispatchEvent(new CustomEvent(WALMART_STEP_CHANGE_EVENT, {
            detail: {
              state: element
            }
          }));
        }
      }), sitePaginationIndexes[siteKey] = stateObject.pageNumber;
    };
    function startWalmartObserver() {
      if (!document.body) {
        retryTimeoutId = setTimeout(startWalmartObserver, 100);
        return;
      }
      checkStep(), registerPaginationAdvanceCheck(siteKey, checkStep), scheduler = createSingleFlightScheduler({
        run: checkStep,
        schedule: (element) => setTimeout(element, 100),
        cancel: (element) => clearTimeout(element)
      }), (mutationObserver = new MutationObserver(scheduler.schedule)).observe(document.body, {
        attributes: true,
        attributeFilter: [
          "aria-current",
          "aria-expanded",
          "aria-hidden",
          "class",
          "data-testid",
          "disabled",
          "hidden"
        ],
        childList: true,
        subtree: true
      }), pollIntervalId = setInterval(checkStep, 600);
    }
    return [startWalmartObserver, () => {
      registerPaginationAdvanceCheck(siteKey, void 0), retryTimeoutId && clearTimeout(retryTimeoutId), pollIntervalId && clearInterval(pollIntervalId), mutationObserver && mutationObserver.disconnect(), scheduler?.cancel();
    }];
  },
  amazon: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let siteKey = "amazon";
    return [function() {
      pollIntervalId = setInterval(() => {
        let activeEl = document.querySelector("#my-progress-menu");
        if (!activeEl) return;
        let nodeList = Array.from(activeEl.querySelectorAll("li.form-list-item")), foundEl = nodeList.find((element) => element.classList.contains("active") || element.classList.contains(
          "next-form"
        ));
        if (!foundEl) return;
        let foundIndex = nodeList.indexOf(foundEl), count = nodeList.length, activeEl2 = foundEl.querySelector(".form-link.nav-link"), stepTitle = (activeEl2?.textContent?.trim() || "").toLowerCase();
        if (0 === sitePaginationIndexes[siteKey] && foundIndex >= 0) {
          sitePaginationIndexes[siteKey] = foundIndex;
          return;
        }
        foundIndex > sitePaginationIndexes[siteKey] && foundIndex < count && hasClickedAutoFill && !stepTitle.includes("review") && !stepTitle.includes("submit") ? (handle({
          delay: 1500,
          page_number: foundIndex + 1,
          page_title: stepTitle
        }), sitePaginationIndexes[siteKey] = foundIndex) : foundIndex > sitePaginationIndexes[siteKey] && (sitePaginationIndexes[siteKey] = foundIndex);
      }, 1e3);
    }, () => pollIntervalId ? clearInterval(pollIntervalId) : void 0];
  },
  apple: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let didInitialSync = false, siteKey = "apple";
    return [function() {
      pollIntervalId = setInterval(() => {
        let activeEl = document.querySelector("ol.apply-progress-steps");
        if (!activeEl) return;
        let nodeList = Array.from(activeEl.querySelectorAll("li.apply-progress-step"));
        if (0 === nodeList.length) return;
        let foundEl = nodeList.find((element) => "step" === element.getAttribute("aria-current"));
        if (!foundEl) return;
        let foundIndex = nodeList.indexOf(foundEl), count = nodeList.length, activeEl2 = foundEl.querySelector(".apply-progress-label span"), stepTitle = activeEl2?.textContent?.trim().toLowerCase() || "";
        if (!didInitialSync && foundIndex >= 0) {
          didInitialSync = true, sitePaginationIndexes[siteKey] = foundIndex;
          return;
        }
        if (foundIndex > sitePaginationIndexes[siteKey] && foundIndex < count - 1 && hasClickedAutoFill && !stepTitle.includes("review")) {
          handle({
            delay: 1500,
            page_number: foundIndex + 1,
            page_title: stepTitle
          }), sitePaginationIndexes[siteKey] = foundIndex;
          return;
        }
        sitePaginationIndexes[siteKey] < foundIndex && (sitePaginationIndexes[siteKey] = foundIndex);
      }, 1e3);
    }, () => {
      clearInterval(pollIntervalId);
    }];
  },
  google: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let lastFormsPage = 0, didInitialSync = false, didStepperSync = false, lastDispatchedIdx = -1, siteKey = "google", isGoogleForms = () => "docs.google.com" === window.location.hostname && window.location.pathname.startsWith("/forms/"), normalizeText = (element) => (element || "").replace(/\s+/g, " ").trim(), readStepperTab = () => {
      let element = Array.from(document.querySelectorAll(
        'div[role="tablist"][aria-label="Application stepper"] button[role="tab"][aria-selected="true"]'
      )).find((childEl) => {
        let clientRect = childEl.getBoundingClientRect();
        return clientRect.width > 0 && clientRect.height > 0;
      }) ?? null;
      if (!element) return {
        idx: -1,
        label: ""
      };
      let closestEl = element.closest('div[role="tablist"][aria-label="Application stepper"]'), tabButtons = closestEl ? Array.from(closestEl.querySelectorAll('button[role="tab"]')) : [], ariaLabel = element.getAttribute("aria-label")?.trim() || "", regexMatch = ariaLabel.match(/^Step\s*(\d+)\b/i), tabIndex = regexMatch ? Number(regexMatch[1]) - 1 : tabButtons.indexOf(element), tabLabel = normalizeText(element.querySelector("span.JjWAne")?.textContent || element.textContent || ariaLabel);
      return {
        idx: tabIndex,
        label: tabLabel.toLowerCase()
      };
    }, handleGoogleStep = (stepIndex, value) => {
      value.includes("review") ? handle({
        clearOnly: true,
        page_number: stepIndex,
        page_title: value
      }) : handle({
        delay: 1200,
        page_number: stepIndex,
        page_title: value
      });
    };
    return [function() {
      if (isGoogleForms()) {
        pollIntervalId = setInterval(() => {
          let activeEl = document.querySelector(".HZh16d"), progressText = (activeEl?.textContent ?? "").trim(), regexMatch = progressText.match(/\b(\d+)\s*(?:of|\/)\s*(\d+)/i), currentPage = regexMatch ? parseInt(regexMatch[1], 10) : progressText.match(/(\d+)/)?.[1] ? parseInt(progressText.match(
            /(\d+)/
          )[1], 10) : 0, totalPages = regexMatch ? parseInt(regexMatch[2], 10) : 0;
          if (!didInitialSync) {
            lastFormsPage = currentPage, didInitialSync = true;
            return;
          }
          let isLastPage = totalPages > 0 && currentPage >= totalPages;
          currentPage > lastFormsPage && hasClickedAutoFill && currentPage > 0 && !isLastPage ? (handle({
            delay: 1500,
            page_number: currentPage,
            page_title: `forms_page_${currentPage}`
          }), lastFormsPage = currentPage) : currentPage >= 0 && (lastFormsPage = currentPage);
        }, 800);
        return;
      }
      let checkGoogleStepper = () => {
        let {
          idx,
          label} = readStepperTab();
        if (!(idx < 0)) {
          if (didStepperSync) {
            if (idx > sitePaginationIndexes[siteKey] && hasClickedAutoFill) {
              let pageTitle = label || `step_${idx}`;
              handleGoogleStep(idx, pageTitle), sitePaginationIndexes[siteKey] = idx;
            } else idx >= 0 && (sitePaginationIndexes[siteKey] = idx);
          } else sitePaginationIndexes[siteKey] = idx, didStepperSync = true;
          idx !== lastDispatchedIdx && (lastDispatchedIdx = idx, window.dispatchEvent(new CustomEvent(GOOGLE_STEP_CHANGE_EVENT)));
        }
      };
      checkGoogleStepper(), pollIntervalId = setInterval(checkGoogleStepper, 500);
    }, () => {
      pollIntervalId && clearInterval(pollIntervalId);
    }];
  },
  cisco: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let siteKey = "cisco", lastDispatchedIndex = -1, readCiscoStep = () => {
      let element = new URL(window.location.href), parsedNumber = Number(element.searchParams.get("step") || "0"), stepName = (element.searchParams.get("stepname") || "").trim();
      return {
        index: Number.isFinite(parsedNumber) ? parsedNumber : 0,
        title: stepName || `step-${parsedNumber || 0}`
      };
    };
    return [function() {
      pollIntervalId = setInterval(() => {
        let {
          index,
          title} = readCiscoStep();
        if (!(index <= 0)) {
          if (0 === sitePaginationIndexes[siteKey]) {
            sitePaginationIndexes[siteKey] = index, lastDispatchedIndex = index;
            return;
          }
          if (index > sitePaginationIndexes[siteKey] && index <= 10 && hasClickedAutoFill) {
            handle({
              delay: 1200,
              page_number: index,
              page_title: title
            }), sitePaginationIndexes[siteKey] = index;
            return;
          }
          if (index < sitePaginationIndexes[siteKey] ? sitePaginationIndexes[siteKey] = index : index > sitePaginationIndexes[siteKey] && (sitePaginationIndexes[siteKey] = index), index !== lastDispatchedIndex) {
            let element = lastDispatchedIndex >= 0 && index < lastDispatchedIndex;
            lastDispatchedIndex = index, window.dispatchEvent(new CustomEvent(CISCO_STEP_CHANGE_EVENT)), element && setTimeout(() => {
              window.dispatchEvent(new CustomEvent(CISCO_STEP_CHANGE_EVENT));
            }, 400);
          }
        }
      }, 500);
    }, () => {
      clearInterval(pollIntervalId);
    }];
  },
  isolved: function(handle, hasClickedAutoFill) {
    let pollIntervalId;
    let didInitialSync = false, siteKey = "isolved";
    function getIsolvedStepState() {
      let element = Array.from(document.querySelectorAll("#steps .step")), foundEl = element.find((childEl) => childEl.classList.contains("current"));
      if (!foundEl || 0 === element.length) return {
        index: -1,
        total: 0,
        title: ""
      };
      let foundIndex = element.indexOf(foundEl), stepTitle = foundEl.textContent?.trim().toLowerCase() || "";
      return {
        index: foundIndex,
        total: element.length,
        title: stepTitle
      };
    }
    return [function() {
      pollIntervalId = setInterval(() => {
        let {
          index,
          total,
          title} = getIsolvedStepState();
        if (!(index < 0)) {
          if (!didInitialSync) {
            sitePaginationIndexes[siteKey] = index, didInitialSync = true;
            return;
          }
          index > sitePaginationIndexes[siteKey] && index < total && hasClickedAutoFill && !title.includes("review") && !title.includes("submit") ? (handle({
            delay: 1500,
            page_number: index + 1,
            page_title: title
          }), sitePaginationIndexes[siteKey] = index) : index > sitePaginationIndexes[siteKey] && (sitePaginationIndexes[siteKey] = index);
        }
      }, 1e3);
    }, () => {
      pollIntervalId && clearInterval(pollIntervalId);
    }];
  },
  successfactors: function(handle) {
    let pollIntervalId;
    let siteKey = "successfactors", storageKey = "successfactors_last_page_state", cursorFromLegacyKey = (rawKey) => "page_one" === rawKey ? {
      key: "profile",
      pageNumber: 1,
      didInitialSync: true
    } : "page_two" === rawKey ? {
      key: "questions",
      pageNumber: 2,
      didInitialSync: true
    } : {
      key: rawKey,
      pageNumber: sitePaginationIndexes[siteKey] || 1,
      didInitialSync: true
    }, readStoredCursor = () => {
      try {
        let storedRaw = sessionStorage.getItem(storageKey);
        if (!storedRaw) return {
          key: "",
          pageNumber: sitePaginationIndexes[siteKey] || 1,
          didInitialSync: false
        };
        try {
          let parsedValue = JSON.parse(storedRaw);
          if (parsedValue && "string" == typeof parsedValue.key && "number" == typeof parsedValue.pageNumber) return {
            key: parsedValue.key,
            pageNumber: parsedValue.pageNumber,
            didInitialSync: !!parsedValue.didInitialSync
          };
        } catch {
        }
        return cursorFromLegacyKey(storedRaw);
      } catch {
        return {
          key: "",
          pageNumber: sitePaginationIndexes[siteKey] || 1,
          didInitialSync: false
        };
      }
    }, writeStoredCursor = (cursor) => {
      try {
        sessionStorage.setItem(storageKey, JSON.stringify(cursor));
      } catch (error) {
        console.error("[SuccessFactors] Failed to save page state:", error);
      }
    };
    return [function() {
      let pollStep = () => {
        let cursor = readStoredCursor(), hasPending = hasSuccessFactorsPendingContinue(), updatedCursor = runSuccessFactorsPaginationCheck({
          cursor,
          getState: () => getSuccessFactorsStepState(),
          handle,
          hasPendingContinueAutofill: hasPending
        });
        if (updatedCursor.key !== cursor.key || updatedCursor.pageNumber !== cursor.pageNumber || updatedCursor.didInitialSync !== cursor.didInitialSync) {
          let advancedAfterInitialSync = cursor.didInitialSync && !!cursor.key && updatedCursor.key !== cursor.key;
          sitePaginationIndexes[siteKey] = updatedCursor.pageNumber, writeStoredCursor(updatedCursor), hasPending && advancedAfterInitialSync && clearSuccessFactorsPendingContinue();
        }
      };
      pollStep(), pollIntervalId = setInterval(pollStep, 1e3);
    }, () => {
      pollIntervalId && clearInterval(pollIntervalId);
    }];
  }
};
