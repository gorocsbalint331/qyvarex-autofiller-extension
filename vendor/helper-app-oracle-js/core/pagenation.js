/**
 * Parcel module id: l1kUK
 * Resolved path: core/pagenation.js (oracle restore)
 * Dependencies:
 *   ./dom -> hLMJX  =>  _tilde_core/dom.js
 *   ./observer-scheduler -> 6ejQS  =>  _tilde_core/observer-scheduler.js
 *   ./xpath -> agE4u  =>  _tilde_core/xpath.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PAGINATION_AUTOFILL_START_DELAY_MS", () => s), n.export(r,
    "RIPPLEHIRE_ADVANCE_BUTTON_SELECTOR", () => u), n.export(r, "TALEO_CWS_V2_NEXT_BUTTON_SELECTOR",
    () => c), n.export(r, "TALEO_CLASSIC_SAVE_AND_CONTINUE_SELECTOR", () => d), n.export(r,
    "resolvePaginationAutofillStartDelay", () => f), n.export(r, "runHrmdirectPaginationCheck",
  () => p), n.export(r, "getTaleoStepState", () => b), n.export(r, "runTaleoPaginationCheck", () =>
    y), n.export(r, "getRipplehireStepState", () => v), n.export(r, "runRipplehirePaginationCheck",
    () => w), n.export(r, "shouldRegisterPaginationObserver", () => S), n.export(r,
    "SUCCESSFACTORS_PENDING_CONTINUE_AUTOFILL_KEY", () => E), n.export(r,
    "registerPaginationAdvanceCheck", () => F), n.export(r, "getPaginationAdvanceCheck", () => I), n
  .export(r, "markSuccessFactorsContinueAutofillPending", () => M), n.export(r,
    "ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_ID", () => B), n.export(r,
    "ADP_WORKFORCENOW_RECAPTCHA_CONTINUE_BUTTON_SELECTOR", () => q), n.export(r,
    "claimIcimsContinuationStep", () => U), n.export(r, "JACOBS_SAVE_BUTTON_SELECTOR", () => H), n
  .export(r, "JACOBS_NAV_BUTTON_SELECTOR", () => z), n.export(r, "JOBVITE_ADVANCE_BUTTON_SELECTOR",
    () => V), n.export(r, "DAYFORCE_ADVANCE_BUTTON_SELECTOR", () => W), n.export(r,
    "DAYFORCE_SUBMIT_BUTTON_SELECTOR", () => G), n.export(r,
    "SMARTRECRUITERS_ADVANCE_BUTTON_SELECTOR", () => K), n.export(r,
    "SMARTRECRUITERS_PREPARE_ADVANCE_SOURCE", () => X), n.export(r,
    "ADP_MYJOBS_ADVANCE_BUTTON_SELECTOR", () => J), n.export(r,
    "PAYCOMONLINE_ADVANCE_BUTTON_SELECTOR", () => Q), n.export(r, "JOBDIVA_ADVANCE_BUTTON_SELECTOR",
    () => Z), n.export(r, "isJobviteConsentAcceptButton", () => ee), n.export(r,
    "isDayforceContinueButton", () => et), n.export(r, "isAdpMyJobsAdvanceButton", () => er), n
  .export(r, "isAdpMyJobsContinueButton", () => en), n.export(r, "isPaycomOnlineAdvanceButton",
  () => eo), n.export(r, "isPaycomOnlineContinueButton", () => ei), n.export(r,
    "isSmartRecruitersAdvanceButton", () => ea), n.export(r, "isJobdivaAdvanceButton", () => el), n
  .export(r, "isSmartRecruitersTerminalStep", () => es), n.export(r,
    "runSmartRecruitersPaginationCheck", () => eu), n.export(r, "getSuccessFactorsStepState", () =>
    em), n.export(r, "runSuccessFactorsPaginationCheck", () => eh), n.export(r,
    "getAdpWorkforceNowStepKey", () => eU), n.export(r, "isMyWorkdayAutofillPageReady", () => eK), n
  .export(r, "getMyWorkdayStepState", () => tr), n.export(r, "getJacobsStepState", () => tn), n
  .export(r, "getDayforceUrlStepState", () => tl), n.export(r, "getDayforceStepState", () => tp), n
  .export(r, "saveOracleCloudPendingAutofillForCurrentStep", () => tw), n.export(r,
    "runMyWorkdayPaginationCheck", () => tC), n.export(r, "runIcimsPaginationCheck", () => tF), n
  .export(r, "runJacobsPaginationCheck", () => tI), n.export(r, "getWalmartStepState", () => tO), n
  .export(r, "runWalmartPaginationCheck", () => tM), n.export(r, "runDayforcePaginationCheck", () =>
    tN), n.export(r, "isPhenomTerminalStep", () => t$), n.export(r, "runPhenomPaginationCheck",
  () => tB), n.export(r, "getJobdivaStepState", () => tq), n.export(r,
    "getJobdivaModalStepSnapshot", () => tz), n.export(r, "getOracleCloudStepState", () => tW), n
  .export(r, "runOracleCloudPaginationCheck", () => tG), n.export(r, "isAdpMyJobsTerminalStep",
  () => tK), n.export(r, "isAdpMyJobsRestoredPendingAdvanceReady", () => tX), n.export(r,
    "runAdpMyJobsPaginationCheck", () => tJ), n.export(r, "isPaycomOnlineTerminalStep", () => tQ), n
  .export(r, "runPaycomOnlinePaginationCheck", () => tZ), n.export(r, "GOOGLE_STEP_CHANGE_EVENT",
  () => t2), n.export(r, "CISCO_STEP_CHANGE_EVENT", () => t1), n.export(r,
    "MYWORKDAY_STEP_CHANGE_EVENT", () => t3), n.export(r, "JACOBS_STEP_CHANGE_EVENT", () => t4), n
  .export(r, "WALMART_STEP_CHANGE_EVENT", () => t5), n.export(r, "ORACLE_CLOUD_CONTINUE_EVENT",
  () => t6), n.export(r, "OBSERVER_LIST", () => t8);
var o = e("./dom"),
  i = e("./observer-scheduler"),
  a = e("./xpath");
let l = {},
  s = 1e3,
  u = '#btn-submit-app[type="submit"]',
  c = 'a.oracletaleocwsv2-arrow-nav-next[aria-label="next"]',
  d = 'input[value="Save and Continue"]';

function f(e) {
  return s + (e ?? 0)
}

function p({
  cursor: e,
  state: t,
  handle: r,
  hasClickedAutoFill: n
}) {
  if (!t) return e;
  let o = {
    didInitialSync: !0,
    index: t.index
  };
  return e.didInitialSync && t.index > e.index && t.index <= t.total && n && r({
    delay: 1e3,
    page_number: t.index
  }), o
}

function m(e) {
  return (e || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function h(e) {
  let t = (e || "").match(/step-(\d+)/i),
    r = Number(t?.[1]);
  return Number.isInteger(r) && r > 0 ? r : null
}

function g({
  index: e,
  total: t,
  title: r
}) {
  return e >= t || /\b(review|submit|complete|confirmation|finish)\b/i.test(r)
}

function b(e = document) {
  let t = e.querySelector('.oracletaleocwsv2-step.oracletaleocwsv2-active[id^="step-"]'),
    r = t?.getAttribute("id") || t?.id || "",
    n = h(r),
    o = Number(e.querySelector(".oracletaleocwsv2-total-steps")?.textContent?.trim());
  if (!t || null === n || !Number.isInteger(o) || o < 1) return null;
  let i = m(t.querySelector(".oracletaleocwsv2-step-title .title")?.textContent || t.querySelector(
    'input[name="embeddedPageStepTitle"]')?.value || t.textContent);
  return {
    id: r,
    index: n,
    total: o,
    title: i,
    isTerminal: g({
      index: n,
      total: o,
      title: i
    })
  }
}

function y({
  cursor: e,
  state: t,
  handle: r,
  hasClickedAutoFill: n
}) {
  if (!t) return e;
  let o = {
    id: t.id,
    index: t.index,
    didInitialSync: !0
  };
  return e.didInitialSync && t.id !== e.id && !(t.index <= e.index) && n && r(t.isTerminal ? {
    clearOnly: !0,
    page_number: t.index,
    page_title: t.title
  } : {
    page_number: t.index,
    page_title: t.title
  }), o
}

function v(e = document) {
  let t = e.querySelector(u),
    r = (t?.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
  return "continue" === r ? "duplicate_check" : "submit application" === r ? "application_form" :
    null
}

function w({
  hasSeenContinue: e,
  hasPendingContinue: t = !1,
  state: r,
  handle: n,
  hasClickedAutoFill: o
}) {
  return "duplicate_check" === r || ("application_form" === r && (e || t) ? (o && n({
    clearOnly: !1,
    page_number: 2,
    page_title: "application_form"
  }), !1) : e)
}

function S({
  siteName: e,
  automaticallyTurnPage: t,
  hasObserver: r
}) {
  return r && ("Manually" !== t || "ripplehire" === e)
}
let E = "successfactors_pending_continue_autofill",
  x = 45e3,
  C = "adp_myjobs_pending_continue",
  A = 1e4,
  k = "ripplehire_pending_continue",
  T = 3e5;

function F(e, t) {
  l[e] = t
}

function I(e) {
  return l[e]
}

function j() {
  try {
    if ("undefined" == typeof sessionStorage) return null;
    return sessionStorage
  } catch {
    return null
  }
}

function D(e, t = Date.now()) {
  if (!e.formFingerprint) return;
  let r = j();
  if (r) try {
    r.setItem(C, JSON.stringify({
      formFingerprint: e.formFingerprint,
      startedAt: t
    }))
  } catch {}
}

function P(e = Date.now()) {
  let t = j();
  if (!t) return null;
  try {
    let r = JSON.parse(t.getItem(C) || "null");
    if (!r?.formFingerprint || !Number.isFinite(r.startedAt) || e - r.startedAt > A) return t
      .removeItem(C), null;
    return r
  } catch {
    return null
  }
}

function _() {
  let e = j();
  if (e) try {
    e.removeItem(C)
  } catch {}
}

function L(e = Date.now()) {
  let t = j();
  if (t) try {
    t.setItem(k, String(e))
  } catch {}
}

function R(e = Date.now()) {
  let t = j();
  if (!t) return !1;
  try {
    let r = t.getItem(k);
    if (!r) return !1;
    let n = Number(r);
    if (!Number.isFinite(n) || e - n > T) return t.removeItem(k), !1;
    return !0
  } catch {
    return !1
  }
}

function O() {
  let e = j();
  if (e) try {
    e.removeItem(k)
  } catch {}
}

function M(e = Date.now()) {
  let t = j();
  if (t) try {
    t.setItem(E, String(e))
  } catch (e) {
    console.error("[SuccessFactors] Failed to save pending continue:", e)
  }
}

function N(e = Date.now()) {
  let t = j();
  if (!t) return !1;
  try {
    let r = t.getItem(E);
    if (!r) return !1;
    let n = Number(r);
    if (!Number.isFinite(n) || e - n > x) return t.removeItem(E), !1;
    return !0
  } catch {
    return t.removeItem(E), !1
  }
}

function $() {
  let e = j();
  if (e) try {
    e.removeItem(E)
  } catch {}
}
let B = "recruitment_login_recaptcha",
  q = `#${B}`;

function U(e, t) {
  let r = "data-jobright-icims-continuation-claimed",
    n = e.getAttribute(r),
    o = JSON.stringify([t.index, t.title]);
  return "pending" === n ? (e.setAttribute(r, o), !0) : n === o
}
let H =
  'form.tpt_wizard button[name="save"][type="submit"], form.tpt_wizard button.saveButton[type="submit"]',
  Y =
  'form.tpt_wizard button[name="goto"][type="submit"], form.tpt_wizard button.gotoButton[type="submit"]',
  z = [H, Y].join(", "),
  V =
  '.jv-apply-form-actions button[ng-click*="nextStep"][type="button"]:not(.ng-hide), .jv-apply-form-actions button[type="submit"]:not(.ng-hide), div[ng-if="showAcceptReject"] button.jv-button-primary[type="submit"]:not(.ng-hide)',
  W = 'button[test-id="application-next-step"]',
  G = 'button[test-id="application-submit"]',
  K = 'spl-button[type="primary"], button[type="submit"]',
  X = "next-button-before-click",
  J =
  "sdf-button.wizard-next-step-btn, sdf-button.wizard-step-btn, .form-group.submit-button button.btn.btn-primary, button.btn.btn-primary[type='button'], button.btn.btn-primary[type='submit']",
  Q =
  "button:not([disabled]), input[type='button']:not([disabled]), input[type='submit']:not([disabled]), [role='button']:not([aria-disabled='true'])",
  Z =
  ".modal.show .modal-content button, .modal.show .modal-content [role='button'], body:has(.modal-content .job-app-main) .modal-content button, body:has(.modal-content .job-app-main) .modal-content [role='button'], body:not(:has(.modal-content .job-app-main)) .justify-content-end button.jd-btn, body:not(:has(.modal-content .job-app-main)) .justify-content-end button.btn.jd-btn";

function ee(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "").trim()
    .replace(/\s+/g, " ").toLowerCase();
  if ("i accept" !== t) return !1;
  let r = e.closest('div[ng-if="showAcceptReject"]'),
    n = !!r?.querySelector('input[name="policyIds"]');
  return !!r && n
}

function et(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "").trim()
    .replace(/\s+/g, " ").toLowerCase();
  return "next" === t || t.includes("continue")
}

function er(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "").trim()
    .replace(/\s+/g, " ").toLowerCase();
  return "continue" === t || "next" === t || "submit" === t || "apply" === t || t.includes(
    "continue") || t.includes("submit application")
}

function en(e) {
  if (!er(e)) return !1;
  let t = (e?.textContent || e?.getAttribute("value") || e?.getAttribute("aria-label") || "").trim()
    .replace(/\s+/g, " ").toLowerCase();
  return "continue" === t || "next" === t || t.includes("continue")
}

function eo(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "").trim()
    .replace(/\s+/g, " ").toLowerCase();
  return !(!t || "cancel" === t || "back" === t || "previous" === t || t.includes(
    "save for later") || t.includes("finish later")) && ("next" === t || "continue" === t ||
    "submit" === t || "apply" === t || t.includes("next") || t.includes("continue") || t.includes(
      "submit application") || t.includes("sign and submit"))
}

function ei(e) {
  if (!eo(e)) return !1;
  let t = (e?.textContent || e?.getAttribute("value") || e?.getAttribute("aria-label") || "").trim()
    .replace(/\s+/g, " ").toLowerCase();
  return "next" === t || "continue" === t || t.includes("continue")
}

function ea(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "").trim()
    .replace(/\s+/g, " ").toLowerCase();
  return "next" === t || "continue" === t || "submit" === t || "apply" === t || t.includes(
    "continue") || t.includes("submit")
}

function el(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "").trim()
    .replace(/\s+/g, " ").toLowerCase();
  return !!t && "back" !== t && "cancel" !== t && ("next" === t || "continue" === t || "submit" ===
    t || "apply" === t || "save" === t || t.includes("next") || t.includes("continue") || t
    .includes("submit"))
}

function es(e) {
  if (!e || e.isScreening) return !1;
  let t = e.title.trim().toLowerCase();
  return e.isTerminal || t.includes("review") || t.includes("submit") || t.includes(
    "confirmation") || t.includes("thank you")
}

function eu({
  currentIndex: e,
  getState: t,
  handle: r,
  hasClickedAutoFill: n
}) {
  let o = t();
  if (!o) return e;
  let i = e + 1;
  return n && !es(o) && r({
    delay: 1500,
    page_number: i,
    page_title: o.title || "smartrecruiters_next_page"
  }), i
}

function ec(e) {
  return (e || "").trim().replace(/\s+/g, " ").toLowerCase()
}

function ed(e) {
  return ec(e?.textContent)
}

function ef(e, t) {
  let r = e.querySelector(t);
  return ec(r?.value ?? r?.getAttribute("value"))
}

function ep(e) {
  let t = new Set,
    r = [],
    n = Array.from(e.querySelectorAll(".templateSectionTitle"));
  for (let e of n) {
    let n = ed(e);
    if (!(!n || t.has(n)) && (t.add(n), r.push(n), r.length >= 8)) break
  }
  return r.join("|")
}

function em({
  document: e,
  href: t = "undefined" == typeof window ? "" : window.location.href
} = {}) {
  let r = e ?? ("undefined" == typeof document ? null : document);
  if (!r) return null;
  if (r.querySelector(".profileUpperLayout")) return {
    key: "profile",
    title: "candidate_profile"
  };
  let n = ed(r.querySelector("#candidateProfileTitle") ?? r.querySelector("h1")),
    o = ep(r);
  if (r.querySelector("#questions")) return {
    key: ["questions", n || t, o].filter(Boolean).join(":"),
    title: o ? `questions ${o}` : "questions_eeo"
  };
  let i = ef(r, 'input[name="career_ns"], input#career_ns'),
    a = ef(r, 'input[name="career_job_req_id"], input#career_job_req_id'),
    l = r.querySelector("form#careerform"),
    s = o.split("|").includes("application form");
  if (l && ("job_application" === i || s)) {
    let e = [n, "application form"].filter(Boolean).join(" ");
    return {
      key: ["job_application", a || "unknown", n || t, o || "application form"].join(":"),
      title: e || "application form"
    }
  }
  return null
}

function eh({
  cursor: e,
  getState: t,
  handle: r,
  hasPendingContinueAutofill: n
}) {
  let o = t();
  if (!o) return e;
  if (!e.didInitialSync || !e.key) return {
    key: o.key,
    pageNumber: e.pageNumber || 1,
    didInitialSync: !0
  };
  if (o.key === e.key) return e;
  let i = e.pageNumber + 1;
  return n && r({
    delay: 2e3,
    page_number: i,
    page_title: o.title || "successfactors_next_page"
  }), {
    key: o.key,
    pageNumber: i,
    didInitialSync: !0
  }
}
let eg = 100,
  eb = '[data-automation-id="progressBar"]',
  ey = `${eb} [data-automation-id="progressBarActiveStep"]`,
  ev = `${ey} label:last-of-type`,
  ew = '[data-automation-id="applyFlowPage"], [data-automation-id="applyFlowMyExpPage"]',
  eS =
  'input:not([type="hidden"]):not([type="file"]):not([type="button"]):not([type="submit"]):not([type="reset"]), textarea, select, [role="combobox"], button[aria-haspopup="listbox"], [data-automation-id="selectedItemList"]',
  eE =
  'button[data-automation-id="add-button"], button[data-automation-id="select-files"], input[data-automation-id="file-upload-input-ref"][type="file"]',
  ex = 200,
  eC = 1200,
  eA = [800, 1600, 3e3, 6e3, 1e4, 14e3],
  ek = "ul.list--steps",
  eT = "li.list__item",
  eF = ".list__item__text__title",
  eI = "jobright_jacobs_pending_autofill",
  ej = 3e5,
  eD =
  'input:not([type="hidden"]):not([type="button"]):not([type="submit"]):not([type="reset"]), textarea, select, [role="combobox"], [aria-haspopup="listbox"], [aria-haspopup="menu"], button[aria-expanded][type="button"]',
  eP =
  'form, main, [role="main"], [data-testid*="application" i], [data-testid*="apply" i], [data-testid*="step" i], [class*="application" i], [class*="apply" i], [class*="step" i], [id*="application" i], [id*="apply" i]',
  e_ = /\b(review|submit|submission|confirmation|confirm|complete|completed|success|thank you)\b/i,
  eL = "\x1e",
  eR =
  'dialog[aria-modal="true"], [role="dialog"][aria-modal="true"], [role="dialog"], [class*="mvk-popup-dialog" i], [class*="mvk-modal" i]',
  eO =
  /\b(add|edit)\s+(work experience|employment|education|languages?)\b|company name.*role title|school or university.*degree|reading proficiency.*speaking proficiency/i;

function eM(e) {
  return (e || "").replace(/\s+/g, " ").trim()
}

function eN(e) {
  return eM(e).toLowerCase()
}
let e$ = "\x1e",
  eB = [
    '.mdf-segmented-wizard-header-item[aria-current="true"] .mdf-segmented-wizard-header-item-text',
    ".mdf-segmented-wizard-header-current-item .mdf-segmented-wizard-header-item-text"
  ];

function eq(e) {
  if (!e) return "";
  for (let t of eB) {
    let r = eM(e.querySelector(t)?.textContent);
    if (r) return r
  }
  return ""
}

function eU(e = {}) {
  let t = e.root ?? ("undefined" != typeof document ? document : void 0),
    r = "undefined" != typeof window ? window.location : void 0,
    n = e.pathname ?? r?.pathname ?? "",
    o = e.search ?? r?.search ?? "",
    i = e.hash ?? r?.hash ?? "",
    a = e.title ?? ("undefined" != typeof document ? document.title : ""),
    l = eM(t?.querySelector("h1")?.textContent),
    s = eq(t);
  return [n + o + i, eM(a), l, s].join(e$)
}

function eH(e) {
  if (!e) return !1;
  let t = e;
  if (t.hidden || "true" === e.getAttribute("aria-hidden")) return !1;
  if ("undefined" != typeof window && window.getComputedStyle) {
    let t = window.getComputedStyle(e);
    if ("none" === t.display || "hidden" === t.visibility) return !1
  }
  if ("function" == typeof t.getBoundingClientRect) {
    let e = t.getBoundingClientRect();
    if (0 === e.width && 0 === e.height) return !1
  }
  return !0
}

function eY(e) {
  return !(!eH(e) || e.closest(eb))
}

function ez(e) {
  return eN(e.body?.innerText || e.body?.textContent || e.innerText || e.textContent)
}

function eV(e, t) {
  return !t || !e || (t.title.includes("my experience") || t.title.includes("experience") || t.title
    .includes("education") ?
    /\b(work experience|education|resume\/cv|upload a file|websites?|linkedin|social network urls?)\b/
    .test(e) : !t.title.includes("my information") ||
    /\b(how did you hear|legal name|address|phone|country)\b/.test(e))
}

function eW(e, t) {
  let r = Array.from(e.querySelectorAll(ew) || []).filter(e => {
    let t = e.getAttribute?.("data-automation-id");
    return "function" == typeof e.querySelectorAll && ("applyFlowPage" === t ||
      "applyFlowMyExpPage" === t)
  });
  if (0 === r.length) return e;
  let n = r.filter(eH),
    o = n.length > 0 ? n : r,
    i = eN(t?.title);
  if (i) {
    let e = o.find(e => ez(e).includes(i));
    if (e) return e
  }
  return o[o.length - 1] || e
}

function eG(e, t) {
  try {
    console.debug(`[MyWorkday][autofill-debug] ${e} ${JSON.stringify(t)}`)
  } catch {}
}

function eK(e = document, t) {
  let r = eW(e, t),
    n = Array.from(r.querySelectorAll(eS)).some(eY),
    o = t?.title.includes("my experience") || t?.title.includes("experience") || t?.title.includes(
      "education"),
    i = o && Array.from(r.querySelectorAll(eE)).some(eY);
  return (!!n || !!i) && eV(ez(r), t)
}

function eX(e) {
  return !!(e && eH(e)) && eO.test(eM(e.textContent))
}

function eJ(e) {
  return Array.from(e.querySelectorAll(eR)).some(eX)
}

function eQ(e) {
  let t = e.closest?.(eR);
  return eX(t)
}

function eZ(e) {
  if (e.closest('[role="search"], [role="navigation"], header, footer, nav')) return !0;
  let t = e;
  return [t.type, e.getAttribute("aria-label"), e.getAttribute("placeholder"), e.getAttribute(
    "name"), e.id].map(eN).some(e => e.includes("search") || e.includes("keyword") || e.includes(
    "team"))
}

function e0(e, t) {
  if (!e.id) return "";
  let r = "undefined" != typeof CSS && CSS.escape ? CSS.escape(e.id) : e.id.replace(/["\\]/g,
      "\\$&"),
    n = t.querySelector(`label[for="${r}"]`);
  return eM(n?.textContent)
}

function e2(e) {
  let t = e.closest("label");
  if (t?.textContent) return eM(t.textContent);
  let r = e.closest(
      '[data-testid*="field" i], [data-testid*="question" i], [class*="field" i], [class*="question" i], .form-group, fieldset, div'
      ),
    n = r?.querySelector("label, legend, [data-testid*='label' i], [class*='label' i]");
  return eM(n?.textContent)
}

function e1(e, t) {
  return e0(e, t) || e2(e) || eM(e.getAttribute("aria-label")) || eM(e.getAttribute(
    "placeholder")) || eM(e.getAttribute("name")) || eM(e.id)
}
let e3 =
  'button[test-id="application-next-step"], [test-id="basic-layout"], [test-id*="application-step-questionnaire"], [test-id*="education-history"], [test-id*="work-history"], form[id*="personalInfo"]',
  e4 =
  '[test-id*="application-stepper"], [test-id*="application-steps"], [test-id*="application-progress"], .ant-steps',
  e5 = '.ant-steps-item, [role="listitem"]',
  e6 =
  '.ant-steps-item-active, .ant-steps-item-process, [aria-current="step"], [data-status="process"]',
  e8 = '.ant-steps-item-title, [class*="step-title"], [title]',
  e9 = [{
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
  }],
  e7 = "jobright_oraclecloud_pending_autofill",
  te = 3e5,
  tt = "button, [role='button']";

function tr(e = document) {
  let t = e.querySelector(ey);
  if (!t) return null;
  let [r, n] = (0, o.getElementIndex)(t);
  if (r < 0 || n <= 0) return null;
  let i = e.querySelector(ev) || t.querySelector("label:last-of-type"),
    a = (i?.textContent || t.textContent || "").trim().toLowerCase();
  return {
    index: r,
    total: n,
    title: a
  }
}

function tn(e = document) {
  let t = e => (e || "").replace(/\s+/g, " ").trim().toLowerCase(),
    r = e.querySelector(ek);
  if (!r) return null;
  let n = Array.from(r.querySelectorAll(eT));
  if (0 === n.length) return null;
  let o = e => {
      let r = e.querySelector(eF);
      return t(r?.textContent || e.textContent)
    },
    i = n.filter(e => e.classList.contains("list__item--current") || !!e.querySelector(
      'progress[aria-current="step"]')),
    a = i.find(e => o(e).includes("submit")) || i[i.length - 1];
  if (!a) return null;
  let l = n.indexOf(a);
  return l < 0 ? null : {
    index: l,
    total: n.length,
    title: o(a)
  }
}

function to(e) {
  return e.trim().toLowerCase().includes("submit")
}

function ti(e) {
  return (e || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function ta(e) {
  if (!e) return null;
  let t = Number(e);
  return !Number.isInteger(t) || t < 0 ? null : t
}

function tl(e = "undefined" != typeof window ? window.location.href : void 0) {
  let t;
  if (!e) return null;
  try {
    t = new URL(e)
  } catch {
    return null
  }
  let r = t.pathname.toLowerCase();
  if ("jobs.dayforcehcm.com" !== t.hostname || !r.includes("/candidateportal/jobs/") || !r.includes(
      "/apply")) return null;
  let n = ta(t.searchParams.get("step")),
    o = ta(t.searchParams.get("q"));
  if (null === n) return {
    index: 0,
    total: Number.MAX_SAFE_INTEGER,
    title: "manual application"
  };
  let i = 100 * n + (o ?? 0),
    a = null === o ? `step ${n}` : `step ${n} question ${o}`;
  return {
    index: i,
    total: Number.MAX_SAFE_INTEGER,
    title: a
  }
}

function ts(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = e;
  for (; t;) {
    if (t.hidden || "true" === t.getAttribute("aria-hidden")) return !1;
    let e = window.getComputedStyle?.(t);
    if (e?.display === "none" || e?.visibility === "hidden") return !1;
    if (t === document.body) break;
    t = t.parentElement
  }
  return !0
}

function tu(e) {
  let t = e.querySelector(e8) || e;
  return ti(t.getAttribute("title") || t.textContent)
}

function tc(e) {
  let t = e.querySelector(e4);
  if (!t || !ts(t)) return null;
  let r = Array.from(t.querySelectorAll(e5)).filter(ts);
  if (0 === r.length) return null;
  let n = r.find(e => e.matches(e6)) || r.find(e => !!e.querySelector(e6));
  if (!n) return null;
  let o = r.indexOf(n);
  return o < 0 ? null : {
    index: o,
    total: r.length,
    title: tu(n)
  }
}

function td(e) {
  for (let [t, r] of e9.entries()) {
    let n = e.querySelector(r.selector);
    if (ts(n)) return {
      index: t,
      total: e9.length,
      title: r.title
    }
  }
  return null
}

function tf(e) {
  let t = e.querySelector(G);
  return ts(t) ? {
    index: Number.MAX_SAFE_INTEGER - 1,
    total: Number.MAX_SAFE_INTEGER,
    title: "submit"
  } : null
}

function tp(e = document) {
  let t = tl(),
    r = tf(e);
  return r || t || (e.querySelector(e3) ? tc(e) || td(e) : null)
}

function tm(e) {
  let t = ti(e.title);
  return t.includes("review") || t.includes("submit") || t.includes("apply") || e.index >= e.total -
    1
}

function th() {
  if ("undefined" == typeof sessionStorage) return null;
  try {
    return JSON.parse(sessionStorage.getItem(eI) || "null")
  } catch {
    return null
  }
}

function tg(e) {
  if ("undefined" != typeof window && "undefined" != typeof sessionStorage) try {
    sessionStorage.setItem(eI, JSON.stringify({
      href: window.location.href,
      index: e.index,
      startedAt: Date.now()
    }))
  } catch {}
}

function tb(e) {
  if ("undefined" == typeof window) return !1;
  try {
    return new URL(e).origin === window.location.origin
  } catch {
    return !1
  }
}

function ty() {
  if ("undefined" == typeof sessionStorage) return null;
  try {
    return JSON.parse(sessionStorage.getItem(e7) || "null")
  } catch {
    return null
  }
}

function tv(e) {
  if ("undefined" != typeof window && "undefined" != typeof sessionStorage && e.isApplySection && !e
    .isTerminal) try {
    sessionStorage.setItem(e7, JSON.stringify({
      href: window.location.href,
      index: e.index,
      startedAt: Date.now()
    }))
  } catch {}
}

function tw() {
  let e = tW();
  return tv(e), e
}

function tS() {
  "undefined" != typeof sessionStorage && sessionStorage.removeItem(e7)
}

function tE(e) {
  if (!(e instanceof HTMLElement) || e.closest("#jobright-helper-id")) return !1;
  let t = (e.textContent || e.getAttribute("value") || e.getAttribute("aria-label") || "").trim()
    .toLowerCase(),
    r = e.getAttribute("data-automation-id");
  return "next" === t || "submit" === t || "apply" === t || t.includes("next") || t.includes(
    "submit") || "pageFooterNextButton" === r || "bottom-navigation-next-button" === r
}

function tx(e) {
  if (!(e instanceof HTMLElement) || e.closest(
      "#jobright-helper-id, #jobright-helper-plugin, plasmo-csui")) return !1;
  let t = eN(e.textContent || e.getAttribute("value") || e.getAttribute("aria-label")),
    r = e.getAttribute("data-automation-id");
  return "pageFooterNextButton" === r || "bottom-navigation-next-button" === r || "next" === t ||
    "continue" === t || "save and continue" === t || t.includes("save and continue")
}

function tC({
  currentIndex: e,
  getState: t = tr,
  handle: r,
  hasClickedAutoFill: n,
  isPageReady: o = () => !0,
  onStepChange: i
}) {
  let a = t();
  if (!a) return e;
  let l = a.index > e,
    s = a.index !== e,
    u = "review" === a.title || a.title.includes("review"),
    c = 1 === a.index || a.title.includes("my experience") || a.title.includes("experience") || a
    .title.includes("education");
  if (s && i?.(a), !l && s && n && r({
      clearOnly: !0,
      page_number: a.index,
      page_title: a.title
    }), l && u && n && r({
      clearOnly: !0,
      page_number: a.index,
      page_title: a.title
    }), l && a.index < a.total && n && !u) {
    if (!o(a)) return eG("pagination:page-not-ready", {
      currentIndex: e,
      nextIndex: a.index,
      title: a.title,
      total: a.total
    }), e;
    r({
      delay: c ? eC : ex,
      page_number: a.index,
      page_title: a.title
    })
  }
  return a.index
}

function tA(e) {
  let t = e.title.trim().toLowerCase();
  return t.includes("submit") || t.includes("review") || t.includes("complete") || t.includes(
    "confirmation") || t.includes("finish")
}

function tk(e) {
  let t = e.match(/\((\d+)\s*\/\s*(\d+)\)/);
  if (!t) return null;
  let r = Number(t[1]),
    n = Number(t[2]);
  return !Number.isInteger(r) || !Number.isInteger(n) || r < 1 || n < 1 || r > n ? null : {
    index: r,
    total: n
  }
}

function tT({
  currentIndex: e,
  currentTitle: t,
  state: r
}) {
  if (r.index > e) return !0;
  if (r.index !== e || !t) return !1;
  let n = tk(t),
    o = tk(r.title);
  return !!(n && o && n.total === o.total && o.index > n.index)
}

function tF({
  currentIndex: e,
  currentTitle: t,
  getState: r,
  handle: n,
  hasClickedAutoFill: o
}) {
  let i = r();
  if (!i) return e;
  let a = tT({
    currentIndex: e,
    currentTitle: t,
    state: i
  });
  return a && o && (tA(i) ? n({
    clearOnly: !0,
    page_number: i.index,
    page_title: i.title
  }) : i.continuationClaimed || n({
    delay: 1200,
    page_number: i.index,
    page_title: i.title
  })), i.index
}

function tI({
  currentIndex: e,
  getState: t = tn,
  handle: r,
  hasClickedAutoFill: n,
  onStepChange: o
}) {
  let i = t();
  if (!i) return e;
  let a = i.index > e,
    l = i.index !== e,
    s = to(i.title);
  return l && o?.(i), a && n && !s && r({
    delay: 200,
    page_number: i.index,
    page_title: i.title
  }), i.index
}

function tj(e, t) {
  return Array.from(e.querySelectorAll(t)).filter(eH).filter(e => !eQ(e)).map(e => eM(e
    .textContent)).filter(Boolean)
}

function tD(e) {
  let t = Array.from(e.querySelectorAll(eP)).filter(eH),
    r = t[0] ?? e;
  return (tj(r, "h1, h2, h3")[0] || tj(e, "h1, h2, h3")[0] || "").toLowerCase()
}

function tP(e) {
  return tj(e,
    '[role="progressbar"], [aria-current="step"], [class*="progress" i], [data-testid*="progress" i], [class*="stepper" i], [data-testid*="stepper" i]'
    ).map(e => e.toLowerCase()).filter((e, t, r) => r.indexOf(e) === t).slice(0, 3).join("|")
}

function t_(e) {
  return Array.from(e.querySelectorAll(eD)).filter(e => {
    let t = e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ||
      e instanceof HTMLSelectElement || e instanceof HTMLButtonElement ? e.disabled : "true" ===
      e.getAttribute("aria-disabled");
    return eH(e) && !t && !eQ(e) && !eZ(e)
  }).map(t => {
    let r = t,
      n = t instanceof HTMLInputElement ? r.type || "text" : t.getAttribute("role") || t
      .getAttribute("aria-haspopup") || t.tagName.toLowerCase(),
      o = e1(t, e).toLowerCase();
    return `${n}:${o}`
  }).filter(e => !!e.split(":")[1]).filter((e, t, r) => r.indexOf(e) === t).join("|")
}

function tL({
  controlsSignature: e,
  locationKey: t,
  progressSignature: r,
  title: n
}) {
  return n || r ? [t, n, r].join(eL) : [t, e].join(eL)
}

function tR(e) {
  if (e.navigationKey) return e.navigationKey;
  let [t, r, n, o] = e.key.split(eL);
  return "string" == typeof o ? tL({
    controlsSignature: o,
    locationKey: t,
    progressSignature: n,
    title: r
  }) : e.key
}

function tO(e = document) {
  let t = tD(e),
    r = tP(e),
    n = eJ(e),
    o = t || r ? "" : t_(e);
  if (!t && !r && !o) return null;
  let i = "undefined" != typeof window ?
    `${window.location.pathname}${window.location.search}${window.location.hash}` : "",
    a = `${t} ${r}`,
    l = tL({
      controlsSignature: o,
      locationKey: i,
      progressSignature: r,
      title: t
    });
  return {
    key: [i, t, r, o].join(eL),
    navigationKey: l,
    title: t || r || "walmart_application_step",
    isTerminal: e_.test(a),
    isTransient: n
  }
}

function tM({
  cursor: e,
  getState: t = tO,
  handle: r,
  hasClickedAutoFill: n,
  onStepChange: o,
  now: i = Date.now(),
  cooldownMs: a = 2500
}) {
  let l = t();
  if (!l) return e;
  if (!e.didInitialSync || "" === e.key) {
    let t = tR(l);
    return {
      key: l.key,
      navigationKey: t,
      pageNumber: Math.max(e.pageNumber, 1),
      didInitialSync: !0
    }
  }
  if (l.isTransient || l.key === e.key) return e;
  let s = tR(l),
    u = e.navigationKey ?? tR({
      ...l,
      key: e.key
    });
  if (s === u) return {
    ...e,
    key: l.key,
    navigationKey: s
  };
  o?.(l);
  let c = {
    key: l.key,
    navigationKey: s,
    pageNumber: e.pageNumber + 1,
    didInitialSync: !0,
    lastHandledAt: e.lastHandledAt
  };
  if (n) {
    if (e.lastHandledAt && i - e.lastHandledAt < a) return c;
    r(l.isTerminal ? {
      clearOnly: !0,
      page_number: c.pageNumber,
      page_title: l.title
    } : {
      delay: 1500,
      page_number: c.pageNumber,
      page_title: l.title
    }), c.lastHandledAt = i
  }
  return c
}

function tN({
  currentIndex: e,
  getState: t = tp,
  handle: r,
  hasClickedAutoFill: n
}) {
  let o = t();
  if (!o) return e;
  let i = o.index > e;
  return i && n && !tm(o) && r({
    delay: 800,
    page_number: o.index,
    page_title: o.title
  }), o.index
}

function t$(e) {
  let t = (e || "").toLowerCase();
  return t.includes("review") || t.includes("submit") || t.includes("summary")
}

function tB({
  currentIndex: e,
  state: t,
  handle: r,
  hasClickedAutoFill: n
}) {
  if (!t || t.step <= 0) return e;
  let o = t.step > e,
    i = t$(t.stepName);
  return i ? o ? (r({
    clearOnly: !0,
    page_number: t.step,
    page_title: t.stepName || `step_${t.step}`
  }), t.step) : e : o ? (n && r({
    delay: 1500,
    page_number: t.step,
    page_title: t.stepName || `step_${t.step}`
  }), t.step) : e
}

function tq(e = document) {
  let t = e.querySelector(".jd-reg-title");
  if (!t) return null;
  let r = (t.textContent || "").replace(/\s+/g, " ").trim(),
    n = r.match(/Step\s+(\d+)\s+of\s+(\d+)/i);
  if (!n) return null;
  let o = Number(n[1]),
    i = Number(n[2]);
  if (!Number.isFinite(o) || !Number.isFinite(i) || i <= 0) return null;
  let a = r.replace(/Step\s+\d+\s+of\s+\d+/i, "").replace(/\s+/g, " ").trim().toLowerCase();
  return {
    index: o,
    total: i,
    title: a
  }
}

function tU(e) {
  let t = "function" == typeof e.checkVisibility;
  if (t) return e.checkVisibility() ?? !1;
  let r = window.getComputedStyle(e);
  return "none" !== r.display && "hidden" !== r.visibility && e.getClientRects().length > 0
}

function tH(e) {
  let t = Array.from(e.querySelectorAll(".modal.show .modal-content")).filter(tU);
  if (t.length > 0) return t[t.length - 1];
  let r = Array.from(e.querySelectorAll(".modal-content .job-app-main")).map(e => e.closest(
    ".modal-content") || e).filter(tU);
  return r[r.length - 1] || null
}

function tY(e) {
  let t =
    ".jd-form-layout, label.jd-checkbox, .radio-buttons-div input[type='radio'], input:not([type='hidden']):not([type='button']):not([type='submit']):not([type='reset']), textarea, select";
  return Array.from(e.querySelectorAll(t)).some(tU)
}

function tz(e = document) {
  let t = tH(e);
  if (!t) return null;
  let r = (t.textContent || "").replace(/\s+/g, " ").trim();
  if (!r) return null;
  let n = (t.querySelector(".modal-title, h1, h2, h3, strong")?.textContent || r.slice(0, 80))
    .replace(/\s+/g, " ").trim().toLowerCase() || "jobdiva_modal_step",
    o = Array.from(t.querySelectorAll("input:not([type='hidden']), textarea, select")).filter(e =>
      e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ||
      e instanceof HTMLSelectElement).filter(tU).map(e => e.name || e.id || e.getAttribute(
      "type") || e.getAttribute("aria-label") || e.tagName).filter(Boolean).join("|");
  return {
    key: `modal:${n}:${o}`,
    title: n,
    hasFillableFields: tY(t)
  }
}

function tV(e = document) {
  let t = Array.from(e.querySelectorAll(
      'a[aria-current="step"], a[aria-current="page"], [aria-current="step"], [aria-current="page"], .oj-selected'
      )).find(e => {
      let t = e.textContent?.trim(),
        r = e.getAttribute("aria-label")?.trim();
      return !!(t || r)
    }),
    r = t?.getAttribute("aria-label") || t?.textContent || "",
    n = r.replace(/^\s*\d+\s*/, "").replace(/\s+/g, " ").trim().toLowerCase();
  if (n) return n;
  let o = "undefined" != typeof document ? document.title : "",
    i = e.querySelector("title")?.textContent || o,
    a = i.split(" - ")[0]?.trim().toLowerCase();
  return a || ""
}

function tW(e = {}) {
  let t = e.root ?? document,
    r = "undefined" != typeof window ? window.location.href : "https://example.com/",
    n = e.href ?? r,
    o = new URL(n, r),
    i = o.pathname,
    a = Array.from(t.querySelectorAll("h1, h2, h3")).find(e => e.textContent?.trim()
    .toLowerCase() === "confirm your identity"),
    l = Array.from(t.querySelectorAll("button")).find(e => e.textContent?.trim().toLowerCase() ===
      "verify"),
    s = Array.from(t.querySelectorAll("a, button, div, span")).find(e => e.textContent?.trim()
      .toLowerCase() === "send new code"),
    u = Array.from(t.querySelectorAll("input")).filter(e => {
      let t = e,
        r = Number(t.maxLength || 0);
      return "text" === t.type && 1 === r && !t.disabled
    });
  if (/\/job\/[^/]+\/?$/.test(i)) return {
    index: 0,
    title: "oraclecloud-job-detail",
    isApplySection: !1,
    isTerminal: !1
  };
  if (i.includes("/apply/email")) return {
    index: 1,
    title: "oraclecloud-email",
    isApplySection: !1,
    isTerminal: !1
  };
  if (a && l && s && u.length >= 4) return {
    index: 2,
    title: "oraclecloud-verification",
    isApplySection: !1,
    isTerminal: !1
  };
  let c = i.match(/\/(?:job\/[^/]+|jobs\/preview\/[^/]+)\/apply\/section\/(\d+)/);
  if (c) {
    let e = Number(c[1]),
      r = tV(t) || `oraclecloud-section-${e}`;
    return {
      index: eg + e,
      pageNumber: e,
      title: r,
      isApplySection: !0,
      isTerminal: r.includes("review") || r.includes("submit")
    }
  }
  if (/\/job\/[^/]+\/apply(?:\/|$)/.test(i) && t.querySelector("apply-flow-block")) {
    let e = tV(t) || "oraclecloud-apply-form";
    return {
      index: eg,
      pageNumber: 1,
      title: e,
      isApplySection: !0,
      isTerminal: e.includes("review") || e.includes("submit")
    }
  }
  return {
    index: t0.oraclecloud || 0,
    title: "oraclecloud-unknown",
    isApplySection: !1,
    isTerminal: !1
  }
}

function tG({
  currentIndex: e,
  getState: t = tW,
  handle: r,
  hasClickedAutoFill: n,
  pendingIndex: o
}) {
  let i = t(),
    a = i.index > e,
    l = "number" == typeof o && i.index > o;
  return i.index < e && !i.isApplySection || 0 === e && i.isApplySection && !l ? i.index : ((a ||
    l) && i.isApplySection && n && !i.isTerminal && r({
      delay: 1200,
      page_number: i.pageNumber,
      page_title: i.title
    }), a || i.index < e ? i.index : e)
}

function tK(e) {
  if (!e) return !1;
  let t = e.title.trim().toLowerCase();
  return e.isTerminal || t.includes("review") || t.includes("submit") || t.includes(
    "confirmation") || t.includes("thank you")
}

function tX({
  previousFormFingerprint: e,
  currentFormFingerprint: t,
  currentFormFieldCount: r
}) {
  return r > 0 && !!t && t !== e
}

function tJ({
  currentIndex: e,
  getState: t,
  handle: r,
  hasClickedAutoFill: n,
  previousFormKey: o,
  previousKey: i
}) {
  let a = t();
  if (!a || i && a.key === i || o && !a.formKey || o && a.formKey && a.formKey === o) return e;
  let l = e + 1;
  return n && !tK(a) && r({
    delay: 1500,
    page_number: l,
    page_title: a.title || "adp_myjobs_next_page"
  }), l
}

function tQ(e) {
  if (!e) return !1;
  let t = e.title.trim().toLowerCase();
  return e.isTerminal || t.includes("review") || t.includes("submit") || t.includes(
    "confirmation") || t.includes("thank you")
}

function tZ({
  currentIndex: e,
  getState: t,
  handle: r,
  hasClickedAutoFill: n,
  previousFormKey: o,
  previousKey: i
}) {
  let a = t();
  if (!a || i && a.key === i || o && !a.formKey || o && a.formKey && a.formKey === o) return e;
  let l = e + 1;
  return n && !tQ(a) && r({
    delay: 1500,
    page_number: l,
    page_title: a.title || "paycomonline_next_page"
  }), l
}
let t0 = {
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
  },
  t2 = "jobright-google-step-changed",
  t1 = "jobright-cisco-step-changed",
  t3 = "jobright-myworkday-step-changed",
  t4 = "jobright-jacobs-step-changed",
  t5 = "jobright-walmart-step-changed",
  t6 = "jobright-oraclecloud-continue",
  t8 = {
    taleo: function(e, t) {
      let r, n, o, i;
      let a = {
          id: "",
          index: 0,
          didInitialSync: !1
        },
        l = "taleo",
        s = (e, t) => {
          console.debug(`[Taleo][pagination] ${e}`, {
            id: t?.id ?? "",
            index: t?.index ?? 0,
            total: t?.total ?? 0,
            title: t?.title ?? ""
          })
        },
        u = (r = "mutation") => {
          let n = b(),
            o = a;
          if (a = y({
              cursor: a,
              state: n,
              handle: e,
              hasClickedAutoFill: t
            }), !n) {
            "mutation" !== r && "poll" !== r && s("step-unreadable");
            return
          }
          if (!o.didInitialSync) {
            s("initial-sync", n);
            return
          }
          if (n.id === o.id) {
            r.startsWith("next-button") && s("step-unchanged", n);
            return
          }
          if (n.index <= o.index) {
            s("non-forward-step", n);
            return
          }
          s(n.isTerminal ? "terminal-step" : "forward-step", n)
        };

      function d() {
        let e = document.querySelector("form#TBE_theForm");
        if (!e) {
          n = setTimeout(d, 100);
          return
        }
        F(l, u), (r = new MutationObserver(() => u())).observe(e, {
          attributes: !0,
          attributeFilter: ["aria-hidden", "class", "hidden", "style"],
          childList: !0,
          subtree: !0
        }), u("initial"), o = setInterval(() => u("poll"), 600), i = e => {
          t && e.target instanceof Element && e.target.closest(c) && (setTimeout(() => u(
            "next-button-800"), 800), setTimeout(() => u("next-button-1600"), 1600))
        }, document.addEventListener("click", i, !0)
      }
      return [d, () => {
        F(l, void 0), clearTimeout(n), o && clearInterval(o), r?.disconnect(), i && document
          .removeEventListener("click", i, !0)
      }]
    },
    ripplehire: function(e, t) {
      let r;
      let n = !1,
        o = () => {
          let r = v(),
            o = R(),
            i = "application_form" === r && (n || o);
          n = w({
            hasSeenContinue: n,
            hasPendingContinue: o,
            state: r,
            handle: e,
            hasClickedAutoFill: t
          }), i && O()
        },
        i = e => {
          let t = e.target;
          if (!(t instanceof Element)) return;
          let r = t.closest(u) || (t.matches("form#savecandidate") ? t.querySelector(u) : null);
          r && "duplicate_check" === v(r.parentElement || document) && L()
        };
      return [function() {
        o(), document.body && (document.addEventListener("click", i, !0), document
          .addEventListener("submit", i, !0), (r = new MutationObserver(o)).observe(document
            .body, {
              childList: !0,
              subtree: !0,
              characterData: !0
            }))
      }, () => {
        r?.disconnect(), document.removeEventListener("click", i, !0), document
          .removeEventListener("submit", i, !0)
      }]
    },
    icims: function(e, t) {
      let r;
      let n = !1,
        o = "",
        i = "icims",
        a = () => {
          let e = [document];
          if (window.self !== window.top) return e;
          for (let t of Array.from(document.querySelectorAll("iframe"))) try {
            let r = t.contentDocument ?? t.contentWindow?.document;
            r && e.push(r)
          } catch {}
          return e
        },
        l = () => {
          for (let e of a()) {
            let t = Array.from(e.querySelectorAll('li[id^="Step_"]'));
            if (0 === t.length) continue;
            let r = t.findIndex(e => {
              let t = e.getAttribute("title") ?? "",
                r = e.querySelector(".iCIMS_Steps_Content")?.getAttribute("title") ?? "";
              return e.classList.contains("iCIMS_Steps_Current") || /current step/i.test(t) ||
                /current step/i.test(r)
            });
            if (-1 === r) continue;
            let n = (e.querySelector(".iCIMS_PageStepText")?.textContent || t[r].querySelector(
                  ".iCIMS_Steps_Content")?.getAttribute("title") || t[r].getAttribute("title") ||
                "").replace(/\s+/g, " ").trim().toLowerCase(),
              o = {
                index: r,
                total: t.length,
                title: n
              };
            return o.continuationClaimed = U(e.documentElement, o), o
          }
          return null
        },
        s = () => {
          let r = l();
          if (!r) return;
          if (!n) {
            n = !0, t0[i] = r.index, o = r.title, console.debug(
            "[iCIMS pagination] initial-sync", {
              index: r.index,
              title: r.title,
              total: r.total
            });
            return
          }
          let a = t0[i],
            s = o;
          t0[i] = tF({
            currentIndex: a,
            currentTitle: s,
            getState: () => r,
            handle: e,
            hasClickedAutoFill: t
          }), o = r.title, (r.index !== a || r.title !== s) && console.debug(
            "[iCIMS pagination] state-change", {
              previousIndex: a,
              previousTitle: s,
              nextIndex: r.index,
              nextTitle: r.title,
              continuationClaimed: r.continuationClaimed,
              hasClickedAutoFill: t
            })
        };
      return [function() {
        F(i, s), s(), r = setInterval(s, 800)
      }, () => {
        F(i, void 0), r && clearInterval(r)
      }]
    },
    paylocity: function(e, t) {
      let r;
      let n = !1,
        o = "paylocity";

      function i() {
        let e = Array.from(document.querySelectorAll("p")).find(e => /Step\s+\d+\s+of\s+\d+/i
            .test(e.textContent || "")),
          t = e?.textContent || "",
          r = t.match(/Step\s+(\d+)\s+of\s+(\d+)/i);
        if (!r) return null;
        let n = Number(r[1]),
          o = Number(r[2]);
        return Number.isFinite(n) && Number.isFinite(o) ? {
          index: n,
          total: o,
          title: t.trim().toLowerCase()
        } : null
      }
      return [function() {
        r = setInterval(() => {
          let r = i();
          if (r) {
            if (!n) {
              n = !0, t0[o] = r.index;
              return
            }
            r.index > t0[o] && r.index < r.total && t && e({
              delay: 1500,
              page_number: r.index,
              page_title: r.title
            }), t0[o] = r.index
          }
        }, 800)
      }, () => r && clearInterval(r)]
    },
    hrmdirect: function(e, t) {
      let r;
      let n = "hrmdirect",
        o = {
          didInitialSync: t0[n] > 0,
          index: t0[n]
        };
      return [function() {
        r = setInterval(() => {
          let r = document.querySelector("ol.breadcrumb.form-progress-holder");
          if (!r) return;
          let i = a.getFirstOrderedNode('.//li[contains(@class, "active")]', r)
            ?.textContent,
            l = i?.split(" ")[1],
            s = l ? Number(l) : -1,
            u = r.querySelectorAll("li").length,
            c = Number.isInteger(s) && s > 0 && u > 0 ? {
              index: s,
              total: u
            } : null,
            d = o;
          o = p({
            cursor: o,
            state: c,
            hasClickedAutoFill: t,
            handle: t => {
              console.debug("[HRMDirect][pagination] scheduling page autofill", {
                fromPage: d.index,
                toPage: c?.index,
                totalPages: c?.total
              }), e(t)
            }
          }), t0[n] = o.index, !d.didInitialSync && c && console.debug(
            "[HRMDirect][pagination] initial page synchronized", {
              page: c.index,
              totalPages: c.total,
              hasClickedAutoFill: t
            })
        }, 1e3)
      }, () => clearInterval(r)]
    },
    jobdiva: function(e, t) {
      let r, n, o, i;
      let a = !1,
        l = "jobdiva",
        s = new Map,
        u = t0[l],
        c = 0,
        d = () => {
          c = Date.now() + 6e3
        },
        f = () => {
          let e = tq();
          if (e) return u = Math.max(u, e.index), i = void 0, {
            ...e,
            key: `numbered:${e.index}:${e.title}`
          };
          let t = tz();
          if (!t) return null;
          let r = s.get(t.key);
          if (r) return i = t.key, {
            index: r,
            total: Number.MAX_SAFE_INTEGER,
            title: t.title,
            key: t.key,
            hasFillableFields: t.hasFillableFields
          };
          let n = Date.now() <= c,
            o = !a || !i;
          if (!n || o) {
            let e = Math.max(t0[l], u, 1);
            return s.set(t.key, e), i = t.key, u = Math.max(u, e), {
              index: e,
              total: Number.MAX_SAFE_INTEGER,
              title: t.title,
              key: t.key,
              hasFillableFields: t.hasFillableFields
            }
          }
          return u = Math.max(u + 1, t0[l] + 1), s.set(t.key, u), i = t.key, {
            index: u,
            total: Number.MAX_SAFE_INTEGER,
            title: t.title,
            key: t.key,
            hasFillableFields: t.hasFillableFields
          }
        },
        p = r => {
          r?.includes("next-button") && d();
          let n = f();
          if (!n) return;
          let o = n.index > t0[l];
          if (!a) {
            a = !0, t0[l] = n.index;
            return
          }
          o && t && e({
            clearOnly: !1 === n.hasFillableFields,
            delay: 1200,
            page_number: n.index,
            page_title: n.title || `step_${n.index}`
          }), o && (c = 0), t0[l] = n.index
        },
        m = e => {
          let t = e.target;
          if (!(t instanceof Element)) return;
          let r = t.closest("button, [role='button']");
          el(r) && d()
        };

      function h() {
        F(l, p), document.addEventListener("click", m, !0);
        let e = document.querySelector(".jd-reg-title") || document.querySelector(
          ".modal-content .job-app-main") || document.body;
        e ? ((r = new MutationObserver(() => p())).observe(e, {
          childList: !0,
          subtree: !0,
          characterData: !0
        }), p(), o = setInterval(p, 600)) : n = setTimeout(h, 100)
      }
      return [h, () => {
        clearTimeout(n), o && clearInterval(o), r && r.disconnect(), document
          .removeEventListener("click", m, !0), F(l, void 0)
      }]
    },
    tesla: function(e, t) {
      let r;
      let n = "tesla";
      return [function() {
        r = setInterval(() => {
          let r = (0, a.getFirstOrderedNode)(
            '//span[contains(@class, "ApplicationStepEyebrow")]');
          if (!r) return;
          let [o, i] = r.textContent.replace(/[^\d]/g, " ").trim().split(/\s+/).map(
            Number);
          if (0 === t0[n] && o >= 1) {
            t0[n] = o;
            return
          }
          o > t0[n] && o <= i && t && (e({
            delay: 1e3,
            page_number: o
          }), t0[n] = o)
        }, 1e3)
      }, () => clearInterval(r)]
    },
    myworkday: function(e, t) {
      let r, n, o, i;
      let a = [],
        l = "myworkday",
        s = () => {
          a.forEach(clearTimeout), a.length = 0, eA.forEach(e => {
            a.push(setTimeout(() => {
              i?.()
            }, e))
          })
        },
        u = e => {
          if (!t) return;
          let r = e.target;
          if (!(r instanceof Element)) return;
          let n = r.closest(
          'button, [role="button"], input[type="button"], input[type="submit"]');
          tx(n) && s()
        };

      function c() {
        let a = document.querySelector(eb);
        a ? (i = () => {
          let r = t0[l],
            n = tr();
          t0[l] = tC({
            currentIndex: r,
            getState: () => n,
            handle: e,
            hasClickedAutoFill: t,
            isPageReady: e => eK(document, e),
            onStepChange: e => {
              window.dispatchEvent(new CustomEvent(t3, {
                detail: {
                  previousIndex: r,
                  state: e
                }
              }))
            }
          })
        }, document.addEventListener("click", u, !0), F(l, () => i?.()), (r =
          new MutationObserver(i)).observe(a, {
          attributes: !0,
          attributeFilter: ["aria-current", "aria-selected", "class", "data-automation-id"],
          childList: !0,
          subtree: !0
        }), i(), o = setInterval(i, 600)) : n = setTimeout(c, 100)
      }
      return [c, () => {
        document.removeEventListener("click", u, !0), F(l, void 0), a.forEach(clearTimeout), a
          .length = 0, clearTimeout(n), o && clearInterval(o), r && r.disconnect()
      }]
    },
    jobvite: function(e, t) {
      let r;
      let n = "jobvite",
        o = 0,
        i = 2500;
      return [function() {
        r = r => {
          let a = r.target;
          if (!(a instanceof HTMLElement)) return;
          let l = a.closest(V),
            s = l ? window.getComputedStyle(l) : null;
          if (!l || !t || "submit" === l.type && !ee(l) || l.classList.contains(
            "ng-hide") || s?.display === "none" || s?.visibility === "hidden") return;
          let u = Date.now();
          u - o < i || (o = u, t0[n] += 1, e({
            delay: 1200,
            page_number: t0[n],
            page_title: "jobvite_next_page"
          }))
        }, document.addEventListener("click", r, !0)
      }, () => {
        r && document.removeEventListener("click", r, !0)
      }]
    },
    dayforce: function(e, t) {
      let r, n, o, i;
      let a = "dayforce",
        l = !1,
        s = () => {
          let r = tp();
          if (r) {
            if (!l) {
              l = !0, t0[a] = r.index;
              return
            }
            t0[a] = tN({
              currentIndex: t0[a],
              getState: () => r,
              handle: e,
              hasClickedAutoFill: t
            })
          }
        };

      function u() {
        let e = document.querySelector(e4) || document.querySelector(
          '[test-id="basic-layout"]') || document.body;
        if (!e) {
          n = setTimeout(u, 100);
          return
        }
        F(a, s), (r = new MutationObserver(s)).observe(e, {
          attributes: !0,
          attributeFilter: ["aria-current", "aria-hidden", "class", "data-status", "hidden",
            "style", "test-id"
          ],
          childList: !0,
          subtree: !0
        }), s(), o = setInterval(s, 600), i = e => {
          let r = e.target;
          if (!(r instanceof HTMLElement)) return;
          let n = r.closest(W);
          n && t && et(n) && (setTimeout(s, 800), setTimeout(s, 1600))
        }, document.addEventListener("click", i, !0)
      }
      return [u, () => {
        F(a, void 0), clearTimeout(n), o && clearInterval(o), r && r.disconnect(), i &&
          document.removeEventListener("click", i, !0)
      }]
    },
    smartrecruiters: function(e, t) {
      let r, n;
      let o = !1,
        i = "",
        a = "",
        l = 0,
        s = 0,
        u = "smartrecruiters",
        c = 2500,
        d = 8e3,
        f = e => (e || "").replace(/\s+/g, " ").trim(),
        p = e => {
          if (!(e instanceof HTMLElement)) return !1;
          let t = window.getComputedStyle(e),
            r = e.getBoundingClientRect();
          return r.width > 0 && r.height > 0 && "none" !== t.display && "hidden" !== t
            .visibility && "true" !== e.getAttribute("aria-hidden")
        },
        m = () => {
          let e = document.querySelector("sr-apply") || document.querySelector("main") || document
            .body;
          if (!e) return null;
          let t = Array.from(e.querySelectorAll('h1, h2, h3, legend, [role="heading"]')).filter(p)
            .map(e => f(e.textContent)).filter(Boolean),
            r = Array.from(e.querySelectorAll(
              'input:not([type="hidden"]), textarea, select, spl-text-field, spl-select, spl-autocomplete, spl-date-field, spl-phone-field, spl-dropzone'
              )).filter(p).map(e => f(e.getAttribute("name") || e.getAttribute("data-sr-id") || e
              .getAttribute("id") || e.getAttribute("aria-label") || e.textContent)).filter(
              Boolean).slice(0, 40),
            n = Array.from(e.querySelectorAll(K)).filter(e => p(e) && ea(e)),
            o = window.location.pathname.endsWith("/screening") || !!e.querySelector(
              "sr-screening-questions-form"),
            i = !o && n.some(e => {
              let t = f(e.textContent || e.getAttribute("value") || e.getAttribute(
                "aria-label")).toLowerCase();
              return "submit" === t || "apply" === t || t.includes("submit")
            }),
            a = t[0] || document.title || "smartrecruiters_next_page",
            l = [window.location.pathname, window.location.search, window.location.hash, document
              .title, t.join("|"), r.join("|")
            ].join("\x1e");
          return {
            key: l,
            title: a.toLowerCase(),
            isTerminal: i,
            isScreening: o
          }
        },
        h = (r, n) => {
          let o = t && !es(n);
          return console.info("[SmartRecruiters][Pagination] transition-detected", {
            source: r || "poll",
            pageKind: n.isScreening ? "screening" : n.isTerminal ? "terminal" : "form",
            hasClickedAutoFill: t,
            willStartAutofill: o
          }), eu({
            currentIndex: t0[u],
            getState: () => n,
            handle: e,
            hasClickedAutoFill: t
          })
        },
        g = e => {
          let t = e.composedPath(),
            r = t.find(e => e instanceof HTMLElement && "spl-button" === e.tagName
            .toLowerCase() && ea(e));
          if (r) return r;
          let n = t.find(e => e instanceof HTMLElement && e.classList.contains(
            "c-spl-button--primary"));
          return n && ea(n) ? n : null
        },
        b = e => {
          let t = m();
          if (!t) return;
          if (!o) {
            o = !0, i = t.key, t0[u] = 0;
            return
          }
          if (e === X) {
            a = i || t.key, l = Date.now();
            return
          }
          let r = a && Date.now() - l <= d;
          if (!r) {
            if (a = "", t.key !== i) {
              let r = i;
              if (i = t.key, e?.startsWith("next-button-") && r) {
                let r = Date.now();
                if (r - s < c) return;
                s = r, t0[u] = h(e, t)
              }
            }
            return
          }
          if (t.key === a) return;
          a = "", i = t.key;
          let n = Date.now();
          n - s < c || (s = n, t0[u] = h(e, t))
        };
      return [function() {
        n = e => {
          if (!t) return;
          let r = g(e);
          r?.isConnected && (a = i || m()?.key || "", l = Date.now(), setTimeout(b, 800),
            setTimeout(b, 1600))
        }, document.addEventListener("click", n, !0), b(), r = setInterval(b, 800), F(u, b)
      }, () => {
        F(u, void 0), r && clearInterval(r), n && document.removeEventListener("click", n, !0)
      }]
    },
    jacobs: function(e, t) {
      let r, n, o, i;
      let a = "jacobs";

      function l() {
        let s = document.querySelector(ek);
        if (s) {
          let n = () => {
            let r = t0[a],
              n = tn(),
              o = th(),
              i = o && Date.now() - o.startedAt > ej,
              l = (() => {
                if (!o) return !1;
                try {
                  return new URL(o.href).origin === window.location.origin
                } catch {
                  return !1
                }
              })();
            if (o && n && !i && l && n.index > o.index && !to(n.title)) {
              tg(n), t0[a] = n.index, e({
                delay: 1200,
                page_number: n.index,
                page_title: n.title
              });
              return
            }
            o && (i || !l || n && (n.index < o.index || to(n.title))) && sessionStorage
              .removeItem(eI), t0[a] = tI({
                currentIndex: r,
                getState: () => n,
                handle: e,
                hasClickedAutoFill: t,
                onStepChange: e => {
                  window.dispatchEvent(new CustomEvent(t4, {
                    detail: {
                      previousIndex: r,
                      state: e
                    }
                  }))
                }
              })
          };
          i = e => {
              let r = e.target,
                n = th(),
                o = n && Date.now() - n.startedAt <= ej;
              if (!t && !o || !(r instanceof HTMLElement) || !r.closest(z)) return;
              let i = tn();
              i && !to(i.title) && tg(i)
            }, F(a, n), document.addEventListener("click", i, !0), (r = new MutationObserver(n))
            .observe(s, {
              attributes: !0,
              attributeFilter: ["aria-current", "class"],
              childList: !0,
              characterData: !0,
              subtree: !0
            }), n(), o = setInterval(n, 600)
        } else n = setTimeout(l, 100)
      }
      return [l, () => {
        F(a, void 0), clearTimeout(n), i && document.removeEventListener("click", i, !0), o &&
          clearInterval(o), r && r.disconnect()
      }]
    },
    phenom: function(e, t) {
      let r;
      let n = !1,
        o = "phenom",
        i = () => {
          let e = new URL(window.location.href),
            t = Number(e.searchParams.get("step") || "0"),
            r = (e.searchParams.get("stepname") || "").toLowerCase();
          return {
            step: Number.isFinite(t) ? t : 0,
            stepName: r
          }
        },
        a = () => {
          let e = document.querySelector(".slick-list, .slick-track");
          if (!e) return null;
          let t = Array.from(e.querySelectorAll('li[role="button"]'));
          if (0 === t.length) return null;
          let r = t.find(e => "step" === e.getAttribute("aria-current") || e.classList.contains(
              "progress-current") || e.classList.contains("slick-current") || e.classList
            .contains("active")) ?? null;
          if (!r) return null;
          let n = t.indexOf(r);
          if (n < 0) return null;
          let o = r.querySelector(".title")?.textContent?.trim().toLowerCase() || r.getAttribute(
              "atm-value")?.trim().toLowerCase() || r.getAttribute("atm-id")?.trim()
          .toLowerCase() || "";
          return {
            step: n + 1,
            stepName: o,
            totalLength: t.length
          }
        };
      return [function() {
        r = setInterval(() => {
          let r = document.querySelector("form.rjsf");
          if (!r) return;
          let l = i(),
            s = a(),
            u = (s?.step && s.step > 0 ? s.step : 0) || l.step,
            c = s?.stepName || l.stepName;
          if (!n) {
            n = !0, t0[o] = u;
            return
          }
          let d = t0[o],
            f = t$(c);
          if (t0[o] = tB({
              currentIndex: d,
              state: {
                step: u,
                stepName: c
              },
              handle: e,
              hasClickedAutoFill: t
            }), !f && u > d && t) {
            setTimeout(() => {
              document.dispatchEvent(new CustomEvent("CheckAgentCoverLetter"))
            }, 300), setTimeout(() => {
              document.dispatchEvent(new CustomEvent("CheckAgentCoverLetter"))
            }, 1200);
            return
          }
        }, 800)
      }, () => {
        clearInterval(r)
      }]
    },
    adpWorkforceNow: function(e, t) {
      let r, n;
      let o = "adpWorkforceNow",
        i = "",
        a = !1,
        l = 0,
        s = 2500,
        u = "",
        c = 0,
        d = 1e4,
        f = 0,
        p = 5e3,
        m = "ja_sv_cw_next_footer_btn";

      function h() {
        return eU()
      }

      function g(r) {
        if (!t) return;
        let n = Date.now();
        n - l < s || (l = n, e({
          delay: 1500,
          page_number: t0[o] + 1,
          page_title: r
        }), t0[o] += 1, i = h())
      }

      function b(e) {
        if (!t) return;
        let r = h();
        a || (i = r, a = !0), u = i || r, c = Date.now(), setTimeout(() => y(e), 800), setTimeout(
          () => y(e), 1600), setTimeout(() => y(e), 3e3)
      }

      function y(e = "adp_wfn_step_key") {
        let t = h();
        if (!a) {
          i = t, a = !0;
          return
        }
        if (Date.now() <= f) {
          i = t, u = "";
          return
        }
        let r = u && Date.now() - c <= d;
        if (!r) {
          u = "", t !== i && (i = t);
          return
        }
        t !== u && (u = "", g(e))
      }

      function v(e) {
        for (let t of e.composedPath()) {
          if (!(t instanceof HTMLElement) || t.id !== m) continue;
          if (t instanceof HTMLButtonElement) return t;
          let e = t.closest("button");
          return e instanceof HTMLButtonElement ? e : null
        }
        return null
      }

      function w(e) {
        return e.composedPath().some(e => e instanceof HTMLElement && e.id === B)
      }
      return [function() {
        n = e => {
          if (!t) return;
          if (w(e)) {
            f = Date.now() + p, i = h(), u = "";
            return
          }
          let r = v(e);
          r?.isConnected && r.innerText?.trim() !== "Submit" && e.composedPath().includes(
            r) && b("adp_wfn_next_click")
        }, document.addEventListener("click", n, !0), r = setInterval(() => y(), 1e3)
      }, () => {
        r && clearInterval(r), n && document.removeEventListener("click", n, !0)
      }]
    },
    adpMyJobs: function(e, t) {
      let r, n;
      let o = !1,
        i = "",
        a = null,
        l = null,
        s = 0,
        u = 0,
        c = "",
        d = "adpMyJobs",
        f = 2500,
        p = 1e4,
        m = e => (e || "").replace(/\s+/g, " ").trim(),
        h = e => ({
          workflowComponent: e?.workflowComponent || "",
          formFieldCount: e?.formFieldCount || 0,
          isTerminal: !!e?.isTerminal,
          restoredPending: !!e?.isRestoredPending
        }),
        g = (e, t) => {
          e !== c && (c = e, console.info("[ADP MyJobs][Pagination] waiting for next page", {
            reason: e,
            pendingAgeMs: Date.now() - s,
            previous: h(l),
            current: h(t)
          }))
        },
        b = e => {
          if (!(e instanceof HTMLElement) || e.closest("#jobright-helper-id")) return !1;
          let t = window.getComputedStyle(e),
            r = e.getBoundingClientRect();
          return r.width > 0 && r.height > 0 && "none" !== t.display && "hidden" !== t
            .visibility && "true" !== e.getAttribute("aria-hidden")
        },
        y = () => {
          let e = Array.from(document.querySelectorAll(
              'button, [role="button"], li, a, [aria-current="step"]')).find(e => {
              if (!b(e)) return !1;
              let t = m(e.textContent).toLowerCase();
              return t.includes("step status current") || "step" === e.getAttribute(
                "aria-current") || e.classList.contains("current") || e.classList.contains(
                "active")
            }),
            t = m(e?.textContent).replace(/^step status current\s*/i, "").replace(/^current\s*/i,
              "");
          if (t) return t;
          let r = document.querySelector(".page-content-container[aria-label]"),
            n = m(r?.getAttribute("aria-label"));
          if (n) return n;
          let o = Array.from(document.querySelectorAll('h1, h2, h3, [role="heading"]')).filter(b)
            .map(e => m(e.textContent)).find(Boolean);
          return o || document.title || "adp_myjobs_step"
        },
        v = () => {
          let e = y(),
            t = new URL(window.location.href).searchParams.get("workflowComponent") || "",
            r = Array.from(document.querySelectorAll(
              "adp-form-group[data-name], input:not([type='hidden']), textarea, select, sdf-select-simple, sdf-radio-group, sdf-checkbox"
              )).filter(b).map(e => m(e.getAttribute("data-name") || e.getAttribute("name") || e
              .getAttribute("id") || e.getAttribute("aria-label") || e.textContent)).filter(
              Boolean).slice(0, 60),
            n = r.join("|"),
            o = r.reduce((e, t) => {
              let r = e;
              for (let e of t) r = Math.imul(r ^ e.charCodeAt(0), 16777619);
              return r
            }, 2166136261),
            i = Array.from(document.querySelectorAll(J)).filter(e => b(e) && er(e)),
            a = i.some(e => {
              let t = m(e.textContent || e.getAttribute("value") || e.getAttribute(
                "aria-label")).toLowerCase();
              return "submit" === t || "apply" === t || t.includes("submit")
            });
          return {
            key: [window.location.pathname, window.location.search, window.location.hash, t,
              document.title, e, n
            ].join("\x1e"),
            formKey: n,
            formFieldCount: r.length,
            formFingerprint: (o >>> 0).toString(16),
            workflowComponent: t,
            title: e.toLowerCase(),
            isTerminal: a
          }
        },
        w = e => {
          for (let t of e.composedPath()) {
            if (!(t instanceof HTMLElement)) continue;
            let e = t.closest?.(J);
            if (e?.isConnected && b(e) && en(e)) return e
          }
          return null
        },
        S = () => {
          let r = v();
          if (!r) return;
          if (!o) {
            o = !0, i = r.key, a = r;
            let e = P();
            e && (l = {
              key: "",
              formFingerprint: e.formFingerprint,
              isRestoredPending: !0,
              title: "",
              isTerminal: !1
            }, s = e.startedAt, console.info(
              "[ADP MyJobs][Pagination] pending Continue restored after observer remount", {
                pendingAgeMs: Date.now() - s,
                previous: h(l),
                current: h(r)
              })), console.info("[ADP MyJobs][Pagination] initial state captured", {
              current: h(r)
            });
            return
          }
          let n = l && Date.now() - s <= p;
          if (!n) {
            l && console.warn("[ADP MyJobs][Pagination] pending advance expired", {
              pendingAgeMs: Date.now() - s,
              previous: h(l),
              current: h(r)
            }), l = null, _(), r.key !== i && (console.info(
              "[ADP MyJobs][Pagination] state changed without captured Continue", {
                previous: h(a),
                current: h(r)
              }), i = r.key, a = r);
            return
          }
          if (l.isRestoredPending && !tX({
              previousFormFingerprint: l.formFingerprint || "",
              currentFormFingerprint: r.formFingerprint || "",
              currentFormFieldCount: r.formFieldCount || 0
            })) {
            g(r.formFieldCount ? "restored-page-form-unchanged" : "next-page-form-not-ready", r);
            return
          }
          if (!l.isRestoredPending && r.key === l.key) {
            g("page-key-unchanged", r);
            return
          }
          if (l.formKey && !r.formKey && !l.isRestoredPending) {
            g("next-page-form-not-ready", r);
            return
          }
          if (!l.isRestoredPending && l.formKey && r.formKey && r.formKey === l.formKey) {
            g("previous-page-form-still-rendered", r);
            return
          }
          let m = l;
          l = null, _(), c = "", i = r.key, a = r;
          let b = Date.now();
          if (b - u < f) return;
          u = b;
          let y = t && !tK(r);
          console.info("[ADP MyJobs][Pagination] page transition accepted", {
            previous: h(m),
            current: h(r),
            willStartAutofill: y
          }), t0[d] = tJ({
            currentIndex: t0[d],
            getState: () => r,
            handle: e,
            hasClickedAutoFill: t,
            previousFormKey: m.formKey,
            previousKey: m.key
          })
        };
      return [function() {
        n = e => {
          if (!t) return;
          let r = w(e);
          r && (l = a || v()) && (s = Date.now(), D(l, s), c = "", console.info(
            "[ADP MyJobs][Pagination] Continue captured", {
              source: e.isTrusted ? "native" : "programmatic",
              previous: h(l)
            }), setTimeout(S, 800), setTimeout(S, 1600), setTimeout(S, 3e3))
        }, document.addEventListener("click", n, !0), console.info(
          "[ADP MyJobs][Pagination] observer registered", {
            hasClickedAutoFill: t
          }), S(), r = setInterval(S, 800), F(d, S)
      }, () => {
        F(d, void 0), r && clearInterval(r), n && document.removeEventListener("click", n, !0)
      }]
    },
    paycomonline: function(e, t) {
      let r, n;
      let o = !1,
        i = "",
        a = null,
        l = null,
        s = 0,
        u = 0,
        c = "paycomonline",
        d = 2500,
        f = 1e4,
        p = e => (e || "").replace(/\s+/g, " ").trim(),
        m = e => {
          if (!(e instanceof HTMLElement) || e.closest("#jobright-helper-id") || e.hidden ||
            "true" === e.getAttribute("aria-hidden")) return !1;
          let t = window.getComputedStyle(e),
            r = e.getBoundingClientRect();
          return r.width > 0 && r.height > 0 && "none" !== t.display && "hidden" !== t.visibility
        },
        h = () => document.querySelector("[data-testid='application-form']") || document
        .querySelector("form") || document.querySelector("main") || document.body,
        g = () => {
          let e = h();
          if (!e) return null;
          let t = Array.from(e.querySelectorAll('h1, h2, h3, legend, [role="heading"]')).filter(m)
            .map(e => p(e.textContent)).filter(Boolean),
            r = Array.from(e.querySelectorAll(
              "input:not([type='hidden']):not([type='button']):not([type='submit']):not([type='reset']), textarea, select, [role='radio'], [role='checkbox'], [aria-required='true'], label, legend"
              )).filter(m).map(e => p(e.getAttribute("data-testid") || e.getAttribute("name") || e
              .getAttribute("id") || e.getAttribute("aria-label") || e.getAttribute("value") ||
              e.textContent)).filter(Boolean).slice(0, 80),
            n = p(e.innerText || e.textContent).slice(0, 600),
            o = [t.join("|"), r.join("|"), n].filter(Boolean).join("|"),
            i = Array.from(e.querySelectorAll(Q)).filter(e => m(e) && eo(e)),
            a = i.some(e => !ei(e)),
            l = t[0] || p(document.title) || "paycomonline_next_page";
          return {
            key: [window.location.pathname, window.location.search, window.location.hash, document
              .title, o
            ].join("\x1e"),
            formKey: o,
            title: l.toLowerCase(),
            isTerminal: a
          }
        },
        b = e => {
          for (let t of e.composedPath()) {
            if (!(t instanceof HTMLElement)) continue;
            let e = t.closest?.(Q);
            if (e?.isConnected && m(e) && ei(e)) return e
          }
          return null
        },
        y = () => {
          let r = g();
          if (!r) return;
          if (!o) {
            o = !0, i = r.key, a = r;
            return
          }
          let n = l && Date.now() - s <= f;
          if (!n) {
            l = null, r.key !== i && (i = r.key, a = r);
            return
          }
          if (r.key === l.key || l.formKey && !r.formKey || l.formKey && r.formKey && r
            .formKey === l.formKey) return;
          let p = l;
          l = null, i = r.key, a = r;
          let m = Date.now();
          m - u < d || (u = m, t0[c] = tZ({
            currentIndex: t0[c],
            getState: () => r,
            handle: e,
            hasClickedAutoFill: t,
            previousFormKey: p.formKey,
            previousKey: p.key
          }))
        };
      return [function() {
        n = e => {
          if (!t) return;
          let r = b(e);
          r && (l = a || g(), s = Date.now(), setTimeout(y, 800), setTimeout(y, 1600),
            setTimeout(y, 3e3))
        }, document.addEventListener("click", n, !0), y(), r = setInterval(y, 800), F(c, y)
      }, () => {
        F(c, void 0), r && clearInterval(r), n && document.removeEventListener("click", n, !0)
      }]
    },
    adpRecruiting: function(e, t) {
      let r, n;
      let o = "adpRecruiting",
        i = "",
        a = !1,
        l = 0,
        s = 2500;

      function u() {
        let e = document.querySelector(
            ".breadcrumbs .active, .bread-crumbs .active, .wizard .active, .dijitTabChecked")
          ?.textContent?.trim() ?? "",
          t = document.querySelector("h1")?.textContent?.trim() ?? "",
          r = document.title?.trim() ?? "";
        return window.location.pathname + window.location.search + window.location.hash + "\x1e" +
          r + "\x1e" + e + "\x1e" + t
      }

      function c(e) {
        if (!(e instanceof Element)) return !1;
        let t = e.closest("button, input[type='submit'], input[type='button'], [role='button']");
        if (!t) return !1;
        let r = (t.textContent || t.getAttribute("value") || t.getAttribute("aria-label") || "")
          .replace(/\s+/g, " ").trim().toLowerCase();
        return r.includes("submit application") || "submit" === r
      }

      function d(e) {
        if (!(e instanceof Element)) return null;
        let t = e.closest("div.appGo.center");
        if (t instanceof HTMLElement) return t;
        let r = e.closest(
          '[data-dojo-attach-point="thePagerDualNext"], [data-dojo-attach-point="thePagerNext"]'
          );
        if (r instanceof HTMLElement) return r;
        let n = e.closest(".two.column");
        if (n) {
          let t = n.querySelectorAll("div.appGo.center");
          for (let r = t.length - 1; r >= 0; r--) {
            let n = t[r];
            if (n.contains(e)) return n
          }
        }
        return null
      }

      function f(e) {
        if ("true" === e.getAttribute("aria-disabled") || e.classList.contains("dijitDisabled") ||
          e.parentElement?.classList.contains("dijitDisabled")) return !0;
        let t = window.getComputedStyle(e);
        return "none" === t.display || "hidden" === t.visibility
      }

      function p(r) {
        if (!t) return;
        let n = Date.now();
        n - l < s || (l = n, e({
          delay: 1500,
          page_number: t0[o] + 1,
          page_title: r
        }), t0[o] += 1, i = u())
      }
      return [function() {
        n = e => {
          if (!t || c(e.target)) return;
          let r = d(e.target);
          r?.isConnected && (f(r) || p("adp_recruiting_next_click"))
        }, document.addEventListener("click", n, !0), r = setInterval(() => {
          let e = u();
          if (!a) {
            i = e, a = !0;
            return
          }
          e !== i && t && p("adp_recruiting_step_key")
        }, 1e3)
      }, () => {
        r && clearInterval(r), n && document.removeEventListener("click", n, !0)
      }]
    },
    brassring: function(e, t) {
      let r;
      let n = "brassring",
        o = !1,
        i = "",
        a = 0,
        l = 2500,
        s = e => (e || "").replace(/\s+/g, " ").trim(),
        u = e => {
          if (!(e instanceof HTMLElement)) return !1;
          let t = window.getComputedStyle(e);
          return "none" !== t.display && "hidden" !== t.visibility && "true" !== e.getAttribute(
            "aria-hidden")
        },
        c = () => document.querySelector("#applyFlow") || document.querySelector("#applyForm") ||
        document.body,
        d = e => {
          let t = Array.from(e.querySelectorAll("h1, [role='heading']")).find(e => {
            if (!u(e)) return !1;
            let t = s(e.textContent);
            return !!t && !/electronic combat solutions/i.test(t)
          });
          return s(t?.textContent || document.title.split("(")[0])
        },
        f = e => {
          let t = s(e.textContent),
            r = t.match(/Percent of application completed\s*(\d+)%/i);
          if (r) return Number(r[1]);
          let n = Array.from(e.querySelectorAll("[aria-valuenow], progress")).map(e => {
            let t = e.getAttribute("aria-valuenow") || String(e.value || "");
            return t ? Number(t) : NaN
          }).find(e => Number.isFinite(e) && e >= 0);
          return Number.isFinite(n) && n || 0
        },
        p = () => {
          let e = c();
          if (!e) return null;
          let t = d(e).toLowerCase(),
            r = f(e),
            n = `${r}:${t}`,
            o = Array.from(e.querySelectorAll(
              "button, input[type='button'], input[type='submit'], a")).find(e => {
              if (!u(e)) return !1;
              let t = s(e.textContent || e.value).toLowerCase();
              return "submit" === t || t.includes("submit application")
            });
          return {
            key: n,
            percent: r,
            title: t,
            isTerminal: !!o || t.includes("review") || t.includes("submit") || t.includes(
              "summary")
          }
        };
      return [function() {
        r = setInterval(() => {
          let r = p();
          if (!r || !r.key) return;
          if (!o) {
            o = !0, i = r.key, t0[n] = r.percent || 1;
            return
          }
          if (r.key === i) return;
          if (r.percent <= 0) {
            i = r.key;
            return
          }
          let s = r.percent,
            u = s > t0[n];
          if (!u) {
            i = r.key;
            return
          }
          let c = Date.now();
          t && c - a >= l && (a = c, e({
            clearOnly: r.isTerminal,
            delay: r.isTerminal ? void 0 : 1200,
            page_number: s,
            page_title: r.title || "brassring_next_page"
          })), i = r.key, t0[n] = s
        }, 800)
      }, () => {
        r && clearInterval(r)
      }]
    },
    oraclecloud: function(e, t) {
      let r, n;
      let o = "oraclecloud",
        i = () => {
          let r = tW(),
            n = ty(),
            i = n && Date.now() - n.startedAt > te,
            a = !!n && tb(n.href),
            l = !!(n && !i && a),
            s = !1;
          if (t0[o] = tG({
              currentIndex: t0[o],
              getState: () => r,
              handle: t => {
                l && n && r.index > n.index && (s = !0), e(t)
              },
              hasClickedAutoFill: t || l,
              pendingIndex: l ? n?.index : void 0
            }), s) {
            tv(r);
            return
          }
          n && (i || !a || !r.isApplySection || r.isTerminal || r.index < n.index) && tS()
        };
      return [function() {
        n = e => {
          let r = e.target,
            n = ty(),
            o = n && Date.now() - n.startedAt <= te;
          if (!t && !o || !(r instanceof HTMLElement)) return;
          let i = r.closest(tt);
          if (!tE(i)) return;
          let a = tW();
          tv(a)
        }, document.addEventListener("click", n, !0), i(), r = setInterval(() => {
          i()
        }, 800), F(o, i)
      }, () => {
        F(o, void 0), n && document.removeEventListener("click", n, !0), r && clearInterval(r)
      }]
    },
    adobe: function(e, t) {
      let r, n;
      let o = "adobe";

      function i() {
        let a = document.querySelector(".progressbarlist"),
          l = document.querySelector('li[role="button"].slick-current');
        if (a && l) {
          let n = Array.from(document.querySelectorAll('.progressbarlist li[role="button"]'));
          if (n.length > 0 && 0 === t0[o]) {
            let e = n.indexOf(l);
            e >= 0 && (t0[o] = e)
          }(r = new MutationObserver(() => {
            let r = document.querySelector('li[role="button"].slick-current');
            if (!r) return;
            let n = Array.from(document.querySelectorAll(
                '.progressbarlist li[role="button"]')),
              i = n.indexOf(r),
              a = n.length,
              l = r.getAttribute("atm-value")?.toLowerCase() || r.querySelector(".title")
              ?.textContent?.trim().toLowerCase() || "";
            if (i >= 0 && i > t0[o] && i < a && t && "review" !== l && !l.includes(
              "review")) {
              e({
                delay: 1500,
                page_number: i + 1,
                page_title: l
              }), t0[o] = i;
              return
            }
            i >= 0 && t0[o] < i && (t0[o] = i)
          })).observe(a, {
            attributes: !0,
            attributeFilter: ["class"],
            childList: !1,
            subtree: !0
          })
        } else n = setTimeout(i, 100)
      }
      return [i, () => {
        clearTimeout(n), r && r.disconnect()
      }]
    },
    walmart: function(e, t) {
      let r, n, o, a;
      let l = {
          key: "",
          pageNumber: t0.walmart || 1,
          didInitialSync: !1
        },
        s = "walmart",
        u = () => {
          l = tM({
            cursor: l,
            handle: e,
            hasClickedAutoFill: t,
            onStepChange: e => {
              window.dispatchEvent(new CustomEvent(t5, {
                detail: {
                  state: e
                }
              }))
            }
          }), t0[s] = l.pageNumber
        };

      function c() {
        if (!document.body) {
          a = setTimeout(c, 100);
          return
        }
        u(), F(s, u), n = (0, i.createSingleFlightScheduler)({
          run: u,
          schedule: e => setTimeout(e, 100),
          cancel: e => clearTimeout(e)
        }), (r = new MutationObserver(n.schedule)).observe(document.body, {
          attributes: !0,
          attributeFilter: ["aria-current", "aria-expanded", "aria-hidden", "class",
            "data-testid", "disabled", "hidden"
          ],
          childList: !0,
          subtree: !0
        }), o = setInterval(u, 600)
      }
      return [c, () => {
        F(s, void 0), a && clearTimeout(a), o && clearInterval(o), r && r.disconnect(), n
          ?.cancel()
      }]
    },
    amazon: function(e, t) {
      let r;
      let n = "amazon";
      return [function() {
        r = setInterval(() => {
          let r = document.querySelector("#my-progress-menu");
          if (!r) return;
          let o = Array.from(r.querySelectorAll("li.form-list-item")),
            i = o.find(e => e.classList.contains("active") || e.classList.contains(
              "next-form"));
          if (!i) return;
          let a = o.indexOf(i),
            l = o.length,
            s = i.querySelector(".form-link.nav-link"),
            u = (s?.textContent?.trim() || "").toLowerCase();
          if (0 === t0[n] && a >= 0) {
            t0[n] = a;
            return
          }
          a > t0[n] && a < l && t && !u.includes("review") && !u.includes("submit") ? (e({
            delay: 1500,
            page_number: a + 1,
            page_title: u
          }), t0[n] = a) : a > t0[n] && (t0[n] = a)
        }, 1e3)
      }, () => r ? clearInterval(r) : void 0]
    },
    apple: function(e, t) {
      let r;
      let n = !1,
        o = "apple";
      return [function() {
        r = setInterval(() => {
          let r = document.querySelector("ol.apply-progress-steps");
          if (!r) return;
          let i = Array.from(r.querySelectorAll("li.apply-progress-step"));
          if (0 === i.length) return;
          let a = i.find(e => "step" === e.getAttribute("aria-current"));
          if (!a) return;
          let l = i.indexOf(a),
            s = i.length,
            u = a.querySelector(".apply-progress-label span"),
            c = u?.textContent?.trim().toLowerCase() || "";
          if (!n && l >= 0) {
            n = !0, t0[o] = l;
            return
          }
          if (l > t0[o] && l < s - 1 && t && !c.includes("review")) {
            e({
              delay: 1500,
              page_number: l + 1,
              page_title: c
            }), t0[o] = l;
            return
          }
          t0[o] < l && (t0[o] = l)
        }, 1e3)
      }, () => {
        clearInterval(r)
      }]
    },
    google: function(e, t) {
      let r;
      let n = 0,
        o = !1,
        i = !1,
        a = -1,
        l = "google",
        s = () => "docs.google.com" === window.location.hostname && window.location.pathname
        .startsWith("/forms/"),
        u = e => (e || "").replace(/\s+/g, " ").trim(),
        c = () => {
          let e = Array.from(document.querySelectorAll(
            'div[role="tablist"][aria-label="Application stepper"] button[role="tab"][aria-selected="true"]'
            )).find(e => {
            let t = e.getBoundingClientRect();
            return t.width > 0 && t.height > 0
          }) ?? null;
          if (!e) return {
            idx: -1,
            label: ""
          };
          let t = e.closest('div[role="tablist"][aria-label="Application stepper"]'),
            r = t ? Array.from(t.querySelectorAll('button[role="tab"]')) : [],
            n = e.getAttribute("aria-label")?.trim() || "",
            o = n.match(/^Step\s*(\d+)\b/i),
            i = o ? Number(o[1]) - 1 : r.indexOf(e),
            a = u(e.querySelector("span.JjWAne")?.textContent || e.textContent || n);
          return {
            idx: i,
            label: a.toLowerCase()
          }
        },
        d = (t, r) => {
          r.includes("review") ? e({
            clearOnly: !0,
            page_number: t,
            page_title: r
          }) : e({
            delay: 1200,
            page_number: t,
            page_title: r
          })
        };
      return [function() {
        if (s()) {
          r = setInterval(() => {
            let r = document.querySelector(".HZh16d"),
              i = (r?.textContent ?? "").trim(),
              a = i.match(/\b(\d+)\s*(?:of|\/)\s*(\d+)/i),
              l = a ? parseInt(a[1], 10) : i.match(/(\d+)/)?.[1] ? parseInt(i.match(
                /(\d+)/)[1], 10) : 0,
              s = a ? parseInt(a[2], 10) : 0;
            if (!o) {
              n = l, o = !0;
              return
            }
            let u = s > 0 && l >= s;
            l > n && t && l > 0 && !u ? (e({
              delay: 1500,
              page_number: l,
              page_title: `forms_page_${l}`
            }), n = l) : l >= 0 && (n = l)
          }, 800);
          return
        }
        let u = () => {
          let {
            idx: e,
            label: r
          } = c();
          if (!(e < 0)) {
            if (i) {
              if (e > t0[l] && t) {
                let t = r || `step_${e}`;
                d(e, t), t0[l] = e
              } else e >= 0 && (t0[l] = e)
            } else t0[l] = e, i = !0;
            e !== a && (a = e, window.dispatchEvent(new CustomEvent(t2)))
          }
        };
        u(), r = setInterval(u, 500)
      }, () => {
        r && clearInterval(r)
      }]
    },
    cisco: function(e, t) {
      let r;
      let n = "cisco",
        o = -1,
        i = () => {
          let e = new URL(window.location.href),
            t = Number(e.searchParams.get("step") || "0"),
            r = (e.searchParams.get("stepname") || "").trim();
          return {
            index: Number.isFinite(t) ? t : 0,
            title: r || `step-${t||0}`
          }
        };
      return [function() {
        r = setInterval(() => {
          let {
            index: r,
            title: a
          } = i();
          if (!(r <= 0)) {
            if (0 === t0[n]) {
              t0[n] = r, o = r;
              return
            }
            if (r > t0[n] && r <= 10 && t) {
              e({
                delay: 1200,
                page_number: r,
                page_title: a
              }), t0[n] = r;
              return
            }
            if (r < t0[n] ? t0[n] = r : r > t0[n] && (t0[n] = r), r !== o) {
              let e = o >= 0 && r < o;
              o = r, window.dispatchEvent(new CustomEvent(t1)), e && setTimeout(() => {
                window.dispatchEvent(new CustomEvent(t1))
              }, 400)
            }
          }
        }, 500)
      }, () => {
        clearInterval(r)
      }]
    },
    isolved: function(e, t) {
      let r;
      let n = !1,
        o = "isolved";

      function i() {
        let e = Array.from(document.querySelectorAll("#steps .step")),
          t = e.find(e => e.classList.contains("current"));
        if (!t || 0 === e.length) return {
          index: -1,
          total: 0,
          title: ""
        };
        let r = e.indexOf(t),
          n = t.textContent?.trim().toLowerCase() || "";
        return {
          index: r,
          total: e.length,
          title: n
        }
      }
      return [function() {
        r = setInterval(() => {
          let {
            index: r,
            total: a,
            title: l
          } = i();
          if (!(r < 0)) {
            if (!n) {
              t0[o] = r, n = !0;
              return
            }
            r > t0[o] && r < a && t && !l.includes("review") && !l.includes("submit") ? (
              e({
                delay: 1500,
                page_number: r + 1,
                page_title: l
              }), t0[o] = r) : r > t0[o] && (t0[o] = r)
          }
        }, 1e3)
      }, () => {
        r && clearInterval(r)
      }]
    },
    successfactors: function(e) {
      let t;
      let r = "successfactors",
        n = "successfactors_last_page_state",
        o = e => "page_one" === e ? {
          key: "profile",
          pageNumber: 1,
          didInitialSync: !0
        } : "page_two" === e ? {
          key: "questions",
          pageNumber: 2,
          didInitialSync: !0
        } : {
          key: e,
          pageNumber: t0[r] || 1,
          didInitialSync: !0
        },
        i = () => {
          try {
            let e = sessionStorage.getItem(n);
            if (!e) return {
              key: "",
              pageNumber: t0[r] || 1,
              didInitialSync: !1
            };
            try {
              let t = JSON.parse(e);
              if (t && "string" == typeof t.key && "number" == typeof t.pageNumber) return {
                key: t.key,
                pageNumber: t.pageNumber,
                didInitialSync: !!t.didInitialSync
              }
            } catch {}
            return o(e)
          } catch {
            return {
              key: "",
              pageNumber: t0[r] || 1,
              didInitialSync: !1
            }
          }
        },
        a = e => {
          try {
            sessionStorage.setItem(n, JSON.stringify(e))
          } catch (e) {
            console.error("[SuccessFactors] Failed to save page state:", e)
          }
        };
      return [function() {
        let n = () => {
          let t = i(),
            n = N(),
            o = eh({
              cursor: t,
              getState: () => em(),
              handle: e,
              hasPendingContinueAutofill: n
            });
          if (o.key !== t.key || o.pageNumber !== t.pageNumber || o.didInitialSync !== t
            .didInitialSync) {
            let e = t.didInitialSync && !!t.key && o.key !== t.key;
            t0[r] = o.pageNumber, a(o), n && e && $()
          }
        };
        n(), t = setInterval(n, 1e3)
      }, () => {
        t && clearInterval(t)
      }]
    }
  }

