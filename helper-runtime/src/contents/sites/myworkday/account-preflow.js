/**
 * Parcel module id: hOSkB
 * Resolved path: src/contents/sites/myworkday/account-preflow.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~api/autofill-signup-information -> 52vOt  =>  src/api/autofill-signup-information.js
 *   ~contents/pre-autofill-flow/account-flow -> IgBHR  =>  src/contents/pre-autofill-flow/account-flow.js
 *   ~contents/pre-autofill-flow/dom -> fChu0  =>  src/contents/pre-autofill-flow/dom.js
 *   ~contents/pre-autofill-flow/tracking -> 3L3xh  =>  src/contents/pre-autofill-flow/tracking.js
 *   ~store/autofillResult -> hCUzf  =>  src/store/autofillResult.js
 *   ~store/workday-signup-info -> jjbI7  =>  src/store/workday-signup-info.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "WORKDAY_VERIFY_PASSWORD_INPUT_SELECTOR", () => g), n.export(r,
    "WORKDAY_ACCOUNT_SUBMIT_TRACKING_ATTRIBUTE", () => T), n.export(r,
    "markWorkdayAccountSubmitTracking", () => R), n.export(r, "clearWorkdayAccountSubmitTracking",
  () => O), n.export(r, "findWorkdayVerifyPasswordInputs", () => Y), n.export(r,
    "findWorkdayPrivacyNoticeCheckbox", () => V), n.export(r, "findWorkdaySignInSubmitButton", () =>
    G), n.export(r, "findWorkdaySignInWithEmailButton", () => ee), n.export(r,
    "detectWorkdayForgotPasswordSubmitMessage", () => eA), n.export(r,
    "detectWorkdayAccountSubmitError", () => ek), n.export(r,
    "isWorkdayAccountTransitionUrlInScope", () => e3), n.export(r, "shouldOpenWorkdayEmailSignIn",
  () => tP), n.export(r, "clickWorkdaySignInWithEmail", () => tR), n.export(r,
    "trackWorkdayAccountSubmit", () => tV), n.export(r, "createWorkdayForgotPasswordFlowAdapter",
  () => tG), n.export(r, "workdayForgotPasswordFlowAdapter", () => tK), n.export(r,
    "createWorkdayResetPasswordFlowAdapter", () => tX), n.export(r,
    "workdayResetPasswordFlowAdapter", () => tJ), n.export(r, "workdayAccountFlowAdapter", () =>
  tQ), n.export(r, "detectWorkdayAccountFlowMatch", () => tZ), n.export(r,
    "canStartWorkdayStandardAutofillFromAccountFlow", () => t0), n.export(r,
    "hasWorkdayStandardAutofillSignalFromAccountFlow", () => t2);
var o = e("@plasmohq/messaging"),
  i = e("~api/autofill-signup-information"),
  a = e("~contents/pre-autofill-flow/account-flow"),
  l = e("~contents/pre-autofill-flow/dom"),
  s = e("~contents/pre-autofill-flow/tracking"),
  u = e("~store/autofillResult"),
  c = e("~store/workday-signup-info"),
  d = e("~utils/getTargetOrTimeout"),
  f = n.interopDefault(d);

function p(e, t) {
  return (0, l.findVisiblePreAutofillElement)(e, t, e.defaultView?.HTMLElement)
}
let m = 'input[data-automation-id="email"]',
  h = 'input[data-automation-id="password"]',
  g =
  'input[data-automation-id="verifyPassword"], input[data-automation-id="confirmPassword"], input[data-automation-id="verifyNewPassword"]',
  b = 'input[data-automation-id="createAccountCheckbox"]',
  y =
  '[data-automation-id="adventureButton"][role="button"], [data-automation-id="continueButton"][role="button"]',
  v =
  'button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"]',
  w =
  'button[data-automation-id="SignInWithEmailButton"], [data-automation-id="SignInWithEmailButton"]',
  S =
  '[data-automation-id="click_filter"][aria-label="Create Account"], button[data-automation-id="createAccountSubmitButton"]',
  E =
  '[data-automation-id="click_filter"][aria-label="Sign In"], [data-automation-id="noCaptchaWrapper"] [data-automation-id="click_filter"][aria-label="Submit"], button[data-automation-id="signInSubmitButton"], [data-automation-id="signInSubmitButton"]',
  x =
  '[data-automation-id="click_filter"][aria-label="Reset Password"], button[data-automation-id="resetPasswordButton"], [data-automation-id="resetPasswordButton"]',
  C =
  '[data-automation-id="click_filter"][aria-label="Submit"], button[data-automation-id="resetPasswordButton"], [data-automation-id="resetPasswordButton"]',
  A = '[data-automation-id="alertMessage"][role="alert"], [data-automation-id="alertMessage"]',
  k = 80,
  T = "data-jr-workday-account-submit-tracking",
  F = "data-jr-workday-forgot-password-submit-tracking",
  I = "JOBRIGHT_DEBUG_WORKDAY_ACCOUNT_FLOW",
  j = "[MyWorkday sign-in-choice]",
  D = "[MyWorkday account-flow-detect]",
  P = '[data-automation-id="errorMessage"][role="alert"], [data-automation-id="errorMessage"]',
  _ = [{
    pattern: /verify your account|verification email|account verification/i,
    message: "Please check your inbox and verify your email address to continue.",
    messageType: "account_verification_required"
  }, {
    pattern: /reset your password|forgot password|administrator request/i,
    message: "Please reset your password.",
    messageType: "password_reset_required"
  }, {
    pattern: /wrong email address or password|account might be locked/i,
    message: "You may have registered with this email before. Please try your previous password, or reset it.",
    messageType: "invalid_credentials_or_locked"
  }];

function L() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function R(e, t) {
  return !e.getAttribute(T) && (e.setAttribute(T, t), !0)
}

function O(e, t) {
  e.getAttribute(T) === t && e.removeAttribute(T)
}

function M(e, t) {
  return (0, l.findVisiblePreAutofillElement)(e, t, e.defaultView?.HTMLInputElement)
}

function N(e, t) {
  return (0, l.findVisiblePreAutofillElements)(e, t, e.defaultView?.HTMLInputElement)
}

function $(e) {
  return p(e, y)
}

function B(e) {
  return K(e, /^Apply Manually$/i)
}

function q(e) {
  let t = B(e);
  if (!t) return null;
  let r = t.href ?? t.closest?.("a[href]")?.href;
  return "string" == typeof r && r ? r : null
}

function U(e) {
  return M(e, m)
}

function H(e) {
  return M(e, h)
}

function Y(e) {
  return N(e, g)
}

function z(e, t) {
  if (t.hidden || t.getAttribute?.("aria-hidden") === "true" || t.closest?.(
      "[hidden], [aria-hidden='true']")) return !1;
  if ((0, l.isVisiblePreAutofillElement)(t)) return !0;
  let r = tH(e, t);
  if (r && (0, l.isVisiblePreAutofillElement)(r)) return !0;
  let n = t.closest?.('[data-automation-id^="formField-"]'),
    o = e.defaultView?.HTMLElement ?? ("undefined" != typeof HTMLElement ? HTMLElement : null);
  if (n && (!o || n instanceof o) && (0, l.isVisiblePreAutofillElement)(n)) return !0;
  let i = t.parentElement;
  return !!i && (0, l.isVisiblePreAutofillElement)(i)
}

function V(e) {
  return Array.from(e.querySelectorAll(b)).find(t => z(e, t)) ?? null
}

function W(e) {
  return p(e, S)
}

function G(e) {
  return p(e, E)
}

function K(e, t) {
  if ("function" != typeof e.querySelectorAll) return null;
  let r = Array.from(e.querySelectorAll("button, a, [role='button']"));
  return r.find(e => {
    let r = e,
      n = r.textContent?.replace(/\s+/g, " ").trim() ?? "",
      o = r.getAttribute?.("aria-label")?.replace(/\s+/g, " ").trim() ?? "";
    return (t.test(n) || t.test(o)) && (0, l.isVisiblePreAutofillElement)(r)
  }) ?? null
}

function X(e) {
  if (!e) return null;
  let t = e.getAttribute?.("data-automation-id") ?? "",
    r = e.getAttribute?.("aria-label") ?? "",
    n = e.getAttribute?.("id") ?? "",
    o = e.getAttribute?.("role") ?? "",
    i = e.textContent?.replace(/\s+/g, " ").trim() ?? "";
  return [t ? `automationId=${t}` : "", r ? `aria=${r}` : "", n ? `id=${n}` : "", o ? `role=${o}` :
    "", i ? `text=${i.slice(0,120)}` : "", `visible=${(0,l.isVisiblePreAutofillElement)(e)}`
  ].filter(Boolean).join(" | ")
}

function J(e) {
  return "function" != typeof e.querySelectorAll ? [] : Array.from(e.querySelectorAll(
    "button, a, [role='button']")).slice(0, 12).map(e => X(e))
}

function Q() {
  if ("undefined" == typeof window) return !1;
  try {
    return window.localStorage?.getItem(I) === "1" || window.sessionStorage?.getItem(I) === "1"
  } catch {
    return !1
  }
}

function Z({
  document: e,
  phase: t,
  target: r,
  url: n,
  aborted: o
}) {
  if (!Q()) return;
  let i = p(e, w),
    a = K(e, /^Sign in with email$/i),
    l = G(e),
    s = es(e),
    u = U(e),
    c = H(e),
    d = K(e, /^Sign In$/i);
  console.info(j, t, {
    url: n,
    documentTitle: e.title,
    authTitle: eu(e),
    aborted: o ?? !1,
    target: r ?? null,
    socialShell: ej(e),
    pendingLoginAuthDom: eD({
      document: e,
      url: n
    }),
    hasSignInContent: null !== el(e),
    signInWithEmailAutomation: !!i,
    signInWithEmailAutomationInfo: X(i),
    signInWithEmailText: !!a,
    signInWithEmailTextInfo: X(a),
    nativeSubmit: !!l,
    nativeSubmitInfo: X(l),
    signInForm: !!s,
    signInFormInfo: X(s),
    emailInput: !!u,
    emailInputInfo: X(u),
    passwordInput: !!c,
    passwordInputInfo: X(c),
    visibleSignInButton: !!d,
    visibleSignInButtonInfo: X(d),
    buttons: J(e)
  })
}

function ee(e) {
  return p(e, w) ?? K(e, /^Sign in with email$/i)
}

function et(e) {
  return p(e, 'button[data-automation-id="createAccountSubmitButton"]')
}

function er(e) {
  return p(e,
    'button[data-automation-id="signInSubmitButton"], [data-automation-id="signInSubmitButton"]')
}

function en(e) {
  return p(e, x)
}

function eo(e) {
  return p(e, C)
}

function ei({
  document: e,
  state: t
}) {
  return "registration" === t ? W(e) : "reset_password" === t ? eo(e) : G(e)
}

function ea(e) {
  return p(e,
    'input[data-automation-id="verifyPassword"], input[data-automation-id="createAccountCheckbox"]'
    )
}

function el(e) {
  return p(e, '[data-automation-id="signInContent"]')
}

function es(e) {
  return p(e, '[data-automation-id="signInForm"]')
}

function eu(e) {
  return p(e, '#authViewTitle, [id="authViewTitle"]')?.textContent?.replace(/\s+/g, " ").trim() ??
    ""
}

function ec(e) {
  return null !== el(e)
}

function ed(e, t) {
  let r = eu(e);
  return ec(e) && (t.test(r) || t.test(el(e)?.textContent ?? ""))
}

function ef(e) {
  let t = el(e) ?? p(e, '[data-automation-id="applyFlowMyInfoPage"]') ?? p(e,
      '[data-automation-id="applyFlowPage"], [data-automation-id="applyFlowMyExpPage"], main, body'
      ) ?? e.body ?? e.documentElement;
  return t?.textContent?.replace(/\s+/g, " ").trim() ?? ""
}

function ep(e) {
  let t = [e.title, eu(e), ...(0, l.findVisiblePreAutofillElements)(e, "h1, h2, [role='heading']", e
    .defaultView?.HTMLElement).map(e => e.textContent?.replace(/\s+/g, " ").trim() ?? "")].filter(
    Boolean).join(" ") ?? "";
  return /\bForgot Password\b/i.test(t)
}

function em(e) {
  let t = ef(e),
    r = /\bForgot Password\b/i.test(t) || ep(e),
    n = null !== U(e) && null === H(e) && null !== en(e);
  return r && n
}

function eh(e) {
  let t = [e.title, eu(e), ...(0, l.findVisiblePreAutofillElements)(e,
    "h1, h2, h3, [role='heading']", e.defaultView?.HTMLElement).map(e => e.textContent?.replace(
    /\s+/g, " ").trim() ?? "")].filter(Boolean).join(" ") ?? "";
  return /\bReset Password\b/i.test(t)
}

function eg(e) {
  if (!e) return !1;
  let t = eX(e);
  return !!t && eY(t.pathname)
}

function eb({
  document: e,
  url: t
}) {
  let r = ef(e),
    n = /\bReset Password\b/i.test(r) || eh(e),
    o = null !== H(e) && Y(e).length > 0 && null === U(e) && null !== eo(e);
  return o && n && (eg(t) || /\bPassword Requirements\b/i.test(r))
}

function ey(e) {
  return e.replace(/\s+/g, " ").trim()
}

function ev(e) {
  return e.replace(/\s+/g, " ").trim()
}

function ew({
  rawMessage: e,
  messageType: t
}) {
  let r = ev(e);
  return {
    rawMessage: r,
    messageType: t,
    message: "reset_email_sent" === t ? "Check your email for password reset instructions." :
      "Password reset is temporarily unavailable. Please contact the administrator."
  }
}

function eS(e) {
  let t = ey(e),
    r = _.find(({
      pattern: e
    }) => e.test(t));
  return {
    message: r?.message ?? t,
    rawMessage: t,
    messageType: r?.messageType
  }
}

function eE(e) {
  let t = p(e, P),
    r = ey(t?.textContent ?? "");
  return r || null
}

function ex(e) {
  return eC(e)[0] ?? null
}

function eC(e) {
  let t = [],
    r = p(e, P),
    n = ev(r?.textContent ?? "");
  n && t.push(ew({
    rawMessage: n,
    messageType: "reset_failed"
  }));
  let o = p(e, A),
    i = ev(o?.textContent ?? "");
  return i && t.push(ew({
    rawMessage: i,
    messageType: "reset_email_sent"
  })), t
}
async function eA({
  document: e,
  signal: t
}) {
  return (0, f.default)(() => ex(e), () => t?.aborted ?? !1, 80)
}
async function ek({
  document: e,
  signal: t
}) {
  let r = await (0, f.default)(() => eE(e), () => t?.aborted ?? !1, 80);
  return r ? eS(r) : null
}

function eT(e) {
  let t = ef(e);
  return /\bCreate Account\b/i.test(t) && (/\bVerify New Password\b/i.test(t) ||
    /\bPassword Requirements\b/i.test(t) || /\bAlready have an account\?\s*Sign In\b/i.test(t))
}

function eF(e) {
  let t = ef(e);
  return /\bSign In\b/i.test(t) && /\bPassword\b/i.test(t) && null !== p(e,
    'input[data-automation-id="email"]') && null !== p(e, 'input[data-automation-id="password"]')
}

function eI(e) {
  let t = eu(e);
  return null !== el(e) && /^Sign In$/i.test(t) && null !== ee(e)
}

function ej(e) {
  let t = eu(e),
    r = el(e),
    n = r?.textContent?.replace(/\s+/g, " ").trim() ?? "";
  return null !== r && /^Sign In$/i.test(t) && null === U(e) && null === H(e) && (
    /\bSign in with (?:Google|LinkedIn|Apple)\b/i.test(n) || /\bOR\b/i.test(n))
}

function eD({
  document: e,
  url: t
}) {
  if (U(e) || H(e) || !t) return !1;
  try {
    let e = "undefined" != typeof window ? window.location.href : "https://example.com",
      r = new URL(t, e).pathname;
    return eU(r) || eH(r)
  } catch {
    return !1
  }
}

function eP(e) {
  if (ee(e)) return "sign_in_with_email";
  let t = null !== G(e) || null !== es(e) || null !== U(e) && null !== H(e),
    r = null !== K(e, /^Sign In$/i);
  return t && r ? "sign_in_form" : null
}

function e_(e) {
  let t = eP(e);
  return "sign_in_with_email" === t || "sign_in_form" === t && null === et(e) && null === ea(e) && !
    eT(e)
}

function eL({
  document: e,
  url: t
}) {
  return ej(e) || eD({
    document: e,
    url: t
  })
}

function eR({
  document: e,
  phasePrefix: t,
  signal: r,
  url: n
}) {
  Z({
    document: e,
    phase: `${t}-enter`,
    url: n,
    aborted: r.aborted
  });
  let o = eP(e);
  if (Z({
      document: e,
      phase: `${t}-existing-target`,
      target: o,
      url: n,
      aborted: r.aborted
    }), o) return {
    target: o,
    shouldWait: !1
  };
  if (r.aborted) return Z({
    document: e,
    phase: `${t}-aborted`,
    url: n,
    aborted: !0
  }), {
    target: null,
    shouldWait: !1
  };
  let i = eL({
    document: e,
    url: n
  });
  return i || Z({
    document: e,
    phase: `${t}-skip-no-pending-choice`,
    url: n,
    aborted: r.aborted
  }), {
    target: null,
    shouldWait: i
  }
}

function eO({
  document: e,
  phasePrefix: t,
  signal: r,
  url: n
}) {
  let o = 0;
  return (0, f.default)(() => {
    o += 1;
    let i = eP(e);
    return Z({
      document: e,
      phase: `${t}-poll-${o}`,
      target: i,
      url: n,
      aborted: r.aborted
    }), i
  }, () => {
    let o = r.aborted;
    return o && Z({
      document: e,
      phase: `${t}-poll-aborted`,
      url: n,
      aborted: o
    }), o
  }, k).then(o => (Z({
    document: e,
    phase: `${t}-poll-result`,
    target: o,
    url: n,
    aborted: r.aborted
  }), o))
}

function eM(e) {
  return ed(e, /^Create Account$/i) || null !== et(e) || null !== ea(e) || eT(e)
}

function eN(e) {
  return eI(e) || null !== er(e) || eF(e) || e_(e)
}

function e$(e) {
  return $(e)?.textContent?.trim() ?? ""
}

function eB(e) {
  return /^Apply$/i.test(e$(e))
}

function eq(e) {
  return /^Continue Application$/i.test(e$(e))
}

function eU(e) {
  return /\/login(?:[/?#]|$)/i.test(e)
}

function eH(e) {
  return /\/userHome(?:[/?#]|$)/i.test(e)
}

function eY(e) {
  return /\/passwordreset(?:[/?#]|$)/i.test(e)
}

function ez(e) {
  return /\/apply\/applyManually(?:[/?#]|$)/i.test(e)
}

function eV(e) {
  return /\/apply(?:[/?#]|$)/i.test(e) && !ez(e)
}

function eW(e) {
  return /\/details\//i.test(e) || /\/job\//i.test(e)
}

function eG(e) {
  let t = e.replace(/\/+$/, "");
  return t || "/"
}

function eK(e) {
  return eG(e).replace(/^\/[a-z]{2}-[a-z]{2}(?=\/)/i, "")
}

function eX(e) {
  try {
    return new URL(e)
  } catch {
    return null
  }
}

function eJ(e) {
  return e.searchParams.get("jr_id")
}

function eQ(e) {
  let t = e.searchParams.get("redirect");
  if (!t) return null;
  try {
    return eK(new URL(t, e.origin).pathname)
  } catch {
    return null
  }
}

function eZ(e) {
  let t = eQ(e),
    r = t ?? eK(e.pathname),
    n = r.search(/\/apply(?:\/applyManually)?(?:\/|$)/i);
  return n >= 0 ? eG(r.slice(0, n)) : r
}

function e0(e, t) {
  if (e.hostname.toLowerCase() !== t.hostname.toLowerCase()) return !1;
  let r = eJ(e),
    n = eJ(t);
  return !r || !n || r === n
}

function e2(e, t) {
  return !!e0(e, t) && eK(e.pathname) === eK(t.pathname)
}

function e1(e, t) {
  return !!e0(e, t) && eZ(e) === eZ(t)
}

function e3({
  pending: e,
  currentUrl: t
}) {
  let r = eX(e.sourceUrl),
    n = eX(t);
  if (!r || !n) return !1;
  let o = e.targetUrl ? eX(e.targetUrl) : null;
  return !!(o && e2(o, n) || "reset_password" === e.intent && e0(r, n) && eY(r.pathname) && eH(n
    .pathname)) || e1(r, n)
}

function e4({
  document: e,
  url: t
}) {
  return !(e7({
    document: e,
    url: t
  }) || eM(e)) && eN(e)
}

function e5({
  document: e,
  url: t
}) {
  return !e7({
    document: e,
    url: t
  }) && eM(e)
}
let e6 =
  /\b(?:My Information|My Experience|Application Questions|Voluntary Disclosures|Self[-\s]?Identify|Review)\b/i,
  e8 =
  '[data-automation-id="sectionTitle"], [data-automation-id="pageTitle"], [data-automation-id="stepTitle"], [id="sectionTitle"], [id="pageTitle"], [id="stepTitle"]';

function e9(e) {
  return (0, l.findVisiblePreAutofillElements)(e, e8, e.defaultView?.HTMLElement).map(e => e
    .textContent?.replace(/\s+/g, " ").trim() ?? "").filter(Boolean)
}

function e7({
  document: e,
  url: t
}) {
  return !!te(t) && e9(e).some(e => e6.test(e))
}

function te(e) {
  if (!e) return !1;
  let t = eX(e);
  return !!t && /\/apply(?:[/?#]|$)/i.test(t.pathname)
}

function tt(e) {
  return null !== p(e, 'div[data-automation-id^="formField-"]')
}

function tr(e) {
  return null !== p(e, v)
}

function tn({
  document: e,
  url: t
}) {
  return !!e7({
    document: e,
    url: t
  }) || !(eM(e) || eN(e) || B(e)) && (tr(e) || tt(e))
}

function to({
  document: e,
  url: t,
  applicationFormSignal: r,
  match: n,
  blockedBy: o
}) {
  if (!Q()) return;
  let i = eX(t),
    a = i?.pathname ?? "";
  console.info(D, {
    url: t,
    pathname: a,
    documentTitle: e.title,
    authTitle: eu(e),
    applicationStepTitleTexts: e9(e),
    loginPath: !!i && eU(a),
    userHomePath: !!i && eH(a),
    applyManuallyPath: !!i && ez(a),
    applyStartPath: !!i && eV(a),
    jobDetailPath: !!i && eW(a),
    applicationFormSignal: r,
    applicationStepTitleSignal: e7({
      document: e,
      url: t
    }),
    applicationNavigationSignal: tr(e),
    applicationFormFieldSignal: tt(e),
    createAccountSignal: eM(e),
    signInSignal: eN(e),
    signInChoiceTarget: eP(e),
    signInContent: !!el(e),
    signInForm: !!es(e),
    emailInput: !!U(e),
    passwordInput: !!H(e),
    signInSubmit: !!G(e),
    visibleSignInButton: !!K(e, /^Sign In$/i),
    signInWithEmailButton: !!ee(e),
    blockedBy: o ?? null,
    match: n ? {
      flowId: n.flowId,
      pageKind: n.pageKind,
      ctaText: n.ctaText
    } : null
  })
}

function ti({
  document: e,
  parsedUrl: t
}) {
  return eW(t.pathname) && !eU(t.pathname) && !ez(t.pathname) && eB(e)
}

function ta({
  document: e,
  parsedUrl: t
}) {
  return eW(t.pathname) && !eU(t.pathname) && !ez(t.pathname) && eq(e)
}

function tl({
  document: e,
  parsedUrl: t
}) {
  return eW(t.pathname) && eV(t.pathname) && null !== B(e)
}
let ts = [{
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickApply,
    type: "click",
    run: tj
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually,
    type: "click",
    transition: {
      timing: "before",
      includeStep: !0,
      currentStep: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
      getTargetUrl: ({
        document: e
      }) => q(e)
    },
    run: tD
  }],
  tu = [{
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually,
    type: "click",
    transition: {
      timing: "before",
      includeStep: !0,
      currentStep: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
      getTargetUrl: ({
        document: e
      }) => q(e)
    },
    run: tD
  }],
  tc = [{
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickContinueApplication,
    type: "click",
    transition: {
      timing: "before",
      includeStep: !0,
      currentStep: null
    },
    run: tj
  }],
  td = [{
    label: "Prepare Workday Account Form",
    type: "prepare",
    progress: !1,
    run: tI
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
    type: "fill",
    progressGroup: "create_account",
    waitForCredential: "email",
    run: tM
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
    type: "fill",
    progressGroup: "create_account",
    waitForCredential: "password",
    run: t$
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.verifyNewPassword,
    type: "fill",
    progressGroup: "create_account",
    shouldRun: tq,
    run: tB
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.agreePrivacyNotice,
    type: "check",
    progressGroup: "create_account",
    shouldRun: tY,
    run: tz
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickCreateAccount,
    type: "track_submit",
    progress: !1,
    run: tV
  }],
  tf = [{
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.signInWithEmail,
    type: "click",
    shouldRun: tP,
    run: tR
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickCreateAccount,
    type: "click",
    shouldRun: t_,
    transition: {
      timing: "after",
      intent: "registration",
      includeStep: !0,
      currentStep: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress
    },
    run: tO
  }, {
    label: "Prepare Workday Account Form",
    type: "prepare",
    progress: !1,
    shouldRun: tL,
    run: tI
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
    type: "fill",
    waitForCredential: "email",
    shouldRun: tL,
    run: tM
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
    type: "fill",
    waitForCredential: "password",
    shouldRun: tL,
    run: t$
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickSignIn,
    type: "track_submit",
    progress: !1,
    shouldRun: tL,
    run: tV
  }],
  tp = [{
    label: "Prepare Workday Forgot Password Form",
    type: "prepare",
    progress: !1,
    run: tI
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
    type: "fill",
    waitForCredential: "email",
    run: tN
  }, {
    label: "Track Reset Password",
    type: "track_submit",
    progress: !1,
    submitSession: !1,
    run: tF
  }],
  tm = [{
    label: "Prepare Workday Account Form",
    type: "prepare",
    progress: !1,
    run: tI
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
    type: "fill",
    waitForCredential: "password",
    run: t$
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.verifyNewPassword,
    type: "fill",
    waitForCredential: "password",
    run: tB
  }, {
    label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickResetPassword,
    type: "track_submit",
    progress: !1,
    run: tV
  }],
  th = {
    forgot_password: {
      state: "forgot_password",
      ctaText: "Autofill",
      progressTitle: null,
      detect: ({
        document: e
      }) => em(e),
      steps: tp
    }
  },
  tg = {
    reset_password: {
      state: "reset_password",
      ctaText: "Autofill",
      detect: ({
        document: e,
        url: t
      }) => eb({
        document: e,
        url: t
      }),
      steps: tm
    }
  },
  tb = {
    create_account: {
      state: "registration",
      detect: e5,
      steps: td
    },
    sign_in: {
      state: "sign_in",
      detect: e4,
      steps: tf
    },
    jd: {
      state: "registration",
      entry: !0,
      excludeUrl: [/\/login(?:[/?#]|$)/i, /\/apply\/applyManually(?:[/?#]|$)/i],
      detect: ti,
      steps: ts
    },
    apply_start: {
      state: "registration",
      entry: !0,
      excludeUrl: [/\/login(?:[/?#]|$)/i, /\/apply\/applyManually(?:[/?#]|$)/i],
      detect: tl,
      steps: tu
    },
    jd_continue_application: {
      state: "registration",
      ctaText: "Autofill",
      entry: !0,
      progressTitle: null,
      completeEntryProgress: !0,
      excludeUrl: [/\/login(?:[/?#]|$)/i, /\/apply\/applyManually(?:[/?#]|$)/i],
      detect: ta,
      steps: tc
    }
  },
  ty = null;
async function tv() {
  let e = await (0, o.sendToBackground)({
    name: "getAutofillInfo",
    body: {
      forceRefresh: !0
    }
  }).catch(() => null);
  return (0, i.resolveSignupRegistrationEmail)(e)
}
async function tw() {
  let e = await (0, c.getWorkdaySignupInformation)().catch(() => null);
  return e?.password ?? ""
}
async function tS() {
  return {
    email: await tv(),
    password: ""
  }
}
async function tE() {
  return {
    email: "",
    password: await tw()
  }
}

function tx() {
  let e = (0, u.useAutofillResultStore).getState(),
    t = e.autoFillResult;
  if (!t) return;
  let {
    [a.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY]: r, ...n
  } = t.userAutoFillResponse ?? {};
  e.setAutoFillResult({
    ...t,
    userAutoFillResponse: n
  })
}

function tC(e) {
  let t = (0, u.useAutofillResultStore).getState(),
    r = t.autoFillResult;
  if (!r) return;
  t.setAutoFillResult({
    ...r,
    userAutoFillResponse: {
      ...r.userAutoFillResponse ?? {},
      [a.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY]: e
    },
    currentField: null
  });
  let n = "undefined" != typeof window ? window.location?.href ?? "" : "";
  (0, s.sendWorkdayAccountFlowComplete)({
    targetName: "myworkday",
    url: n,
    pending: {
      flowId: "workday_forgot_password_flow",
      intent: "forgot_password",
      sourceUrl: n,
      sourcePageKind: "forgot_password",
      transitionStep: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickResetPassword,
      completedSteps: [a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress],
      currentStep: null
    }
  }), "undefined" != typeof document && document.dispatchEvent(new CustomEvent(a
    .WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT))
}
let tA = null,
  tk = 0;

function tT(e) {
  return new Promise(t => {
    if (e.aborted) {
      t();
      return
    }
    let r = null,
      n = () => {
        null !== r && clearTimeout(r), e.removeEventListener("abort", o), t()
      },
      o = () => n();
    r = setTimeout(n, a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_REFRESH_DELAY_MS), e.addEventListener(
      "abort", o, {
        once: !0
      })
  })
}

function tF({
  document: e,
  signal: t,
  onSubmit: r
}) {
  tA?.(), tA = null;
  let n = en(e);
  if (!n || n.getAttribute(F)) return;
  n.setAttribute(F, "1");
  let o = () => {
      r();
      let n = ++tk;
      tx(), tT(t).then(() => eA({
        document: e,
        signal: t
      })).then(e => {
        e && !t.aborted && n === tk && tC(e)
      })
    },
    i = () => {
      n.removeEventListener("click", o, !0), n.removeAttribute(F), t.removeEventListener("abort",
        i), tA === i && (tA = null)
    };
  n.addEventListener("click", o, !0), t.addEventListener("abort", i, {
    once: !0
  }), tA = i
}

function tI({
  document: e
}) {
  (0, l.clearNativeInputValues)([U(e), H(e), ...Y(e)])
}
async function tj({
  document: e,
  signal: t
}) {
  return (0, l.clickPreAutofillElement)({
    document: e,
    signal: t,
    findElement: () => $(e)
  })
}
async function tD({
  document: e,
  signal: t
}) {
  return (0, l.clickPreAutofillElement)({
    document: e,
    signal: t,
    findElement: () => B(e)
  })
}

function tP({
  document: e,
  url: t,
  signal: r
}) {
  let n = eR({
    document: e,
    phasePrefix: "ui",
    signal: r,
    url: t
  });
  return n.target ? "sign_in_with_email" === n.target : n.shouldWait
}

function t_({
  entrySession: e
}) {
  return !!e && "registration" === e.pageKind && e.completedSteps.includes(a
    .PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually)
}

function tL(e) {
  return !t_(e)
}
async function tR({
  document: e,
  signal: t,
  url: r
}) {
  let n = eR({
      document: e,
      phasePrefix: "action",
      signal: t,
      url: r
    }),
    o = n.target ?? (n.shouldWait ? await eO({
      document: e,
      phasePrefix: "action",
      signal: t,
      url: r
    }) : null);
  return "sign_in_form" === o || ("sign_in_with_email" !== o ? (Z({
    document: e,
    phase: "action-missing-choice-target",
    target: o,
    url: r,
    aborted: t.aborted
  }), !1) : (0, l.clickPreAutofillElement)({
    document: e,
    signal: t,
    findElement: () => ee(e)
  }))
}
async function tO({
  document: e,
  signal: t
}) {
  return (0, l.clickPreAutofillElement)({
    document: e,
    signal: t,
    findElement: () => p(e, 'button[data-automation-id="createAccountLink"]')
  })
}
async function tM({
  document: e,
  credentials: t,
  signal: r
}) {
  return (0, l.fillPreAutofillInput)({
    document: e,
    signal: r,
    findInput: () => U(e),
    value: t.email
  })
}
async function tN({
  document: e,
  credentials: t,
  signal: r
}) {
  return !!t.email && (0, l.fillPreAutofillInput)({
    document: e,
    signal: r,
    findInput: () => U(e),
    value: t.email
  })
}
async function t$({
  document: e,
  credentials: t,
  signal: r
}) {
  return (0, l.fillPreAutofillInput)({
    document: e,
    signal: r,
    findInput: () => H(e),
    value: t.password
  })
}
async function tB({
  document: e,
  credentials: t,
  signal: r
}) {
  return (0, l.fillPreAutofillInputs)({
    document: e,
    signal: r,
    findInputs: () => Y(e),
    value: t.password
  })
}

function tq({
  document: e
}) {
  return Y(e).length > 0
}

function tU(e) {
  return e.checked || "true" === e.getAttribute("aria-checked")
}

function tH(e, t) {
  return t.id ? Array.from(e.querySelectorAll("label")).find(e => e.htmlFor === t.id) ?? null : null
}

function tY({
  document: e
}) {
  return null !== V(e)
}
async function tz({
  document: e,
  signal: t
}) {
  let r = await (0, l.waitForPreAutofillElement)(e, () => V(e), void 0, t);
  return !t.aborted && (!!(!r || tU(r)) || (r.click(), !!tU(r) || (tH(e, r)?.click(), tU(r))))
}

function tV({
  document: e,
  state: t,
  url: r,
  signal: n,
  onSubmit: o
}) {
  ty?.(), ty = null;
  let i = ei({
    document: e,
    state: t
  });
  if (!i) return;
  let a = L();
  if (!R(i, a)) return;
  let l = () => {
      let e = o();
      e.didSubmit && t1({
        currentUrl: r,
        pending: e.pending
      })
    },
    s = () => {
      i.removeEventListener("click", l, !0), O(i, a), n.removeEventListener("abort", s), ty === s &&
        (ty = null)
    };
  i.addEventListener("click", l, !0), n.addEventListener("abort", s, {
    once: !0
  }), ty = s
}
let tW = (0, a.createPreAutofillAccountFlowAdapter)({
  flowId: "workday_account_flow",
  rules: tb,
  getEmail: tv,
  getPassword: tw
});

function tG({
  getCredentials: e = tS
} = {}) {
  return (0, a.createPreAutofillAccountFlowAdapter)({
    flowId: "workday_forgot_password_flow",
    rules: th,
    getCredentials: e
  })
}
let tK = tG();

function tX({
  getCredentials: e = tE
} = {}) {
  return (0, a.createPreAutofillAccountFlowAdapter)({
    flowId: "workday_reset_password_flow",
    rules: tg,
    getCredentials: e
  })
}
let tJ = tX(),
  tQ = {
    ...tW,
    detect(e) {
      let t = tn({
        document: e.document,
        url: e.url
      });
      if (t) return to({
        document: e.document,
        url: e.url,
        applicationFormSignal: t,
        match: null,
        blockedBy: "application_form_signal"
      }), null;
      let r = tW.detect(e);
      return to({
        document: e.document,
        url: e.url,
        applicationFormSignal: t,
        match: r
      }), r
    }
  };

function tZ({
  url: e,
  document: t
}) {
  return tQ.detect({
    targetName: "myworkday",
    url: e,
    document: t
  })
}

function t0({
  document: e,
  url: t
}) {
  return tn({
    document: e,
    url: t
  })
}

function t2({
  document: e,
  url: t
}) {
  return tn({
    document: e,
    url: t
  })
}

function t1({
  currentUrl: e,
  pending: t
}) {
  (0, s.sendWorkdayAccountFlowComplete)({
    targetName: "myworkday",
    url: e,
    pending: t
  })
}

