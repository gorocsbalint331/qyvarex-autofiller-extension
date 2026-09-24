// @ts-nocheck
/**
 * MyWorkday â€” account/sign-in/registration pre-autofill flow.
 */

import * as messaging from "@plasmohq/messaging";
import * as autofillSignupInformation from "../../../api/autofill-signup-information.js";
import * as accountFlow from "../../pre-autofill-flow/account-flow.ts";
import * as preAutofillDom from "../../pre-autofill-flow/dom.ts";
import * as preAutofillTracking from "../../pre-autofill-flow/tracking.ts";
import * as autofillResultStore from "../../../store/autofillResult.js";
import * as workdaySignupInfo from "../../../store/workday-signup-info.js";
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js";
const f = { default: getTargetOrTimeout?.default ?? getTargetOrTimeout };
function p(e, t) {
  return preAutofillDom.findVisiblePreAutofillElement(
    e,
    t,
    e.defaultView?.HTMLElement,
  );
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
  A =
    '[data-automation-id="alertMessage"][role="alert"], [data-automation-id="alertMessage"]',
  k = 80,
  T = "data-jr-workday-account-submit-tracking",
  F = "data-jr-workday-forgot-password-submit-tracking",
  I = "JOBRIGHT_DEBUG_WORKDAY_ACCOUNT_FLOW",
  j = "[MyWorkday sign-in-choice]",
  D = "[MyWorkday account-flow-detect]",
  P =
    '[data-automation-id="errorMessage"][role="alert"], [data-automation-id="errorMessage"]',
  _ = [
    {
      pattern: /verify your account|verification email|account verification/i,
      message:
        "Please check your inbox and verify your email address to continue.",
      messageType: "account_verification_required",
    },
    {
      pattern: /reset your password|forgot password|administrator request/i,
      message: "Please reset your password.",
      messageType: "password_reset_required",
    },
    {
      pattern: /wrong email address or password|account might be locked/i,
      message:
        "You may have registered with this email before. Please try your previous password, or reset it.",
      messageType: "invalid_credentials_or_locked",
    },
  ];
function L() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
function R(e, t) {
  return !e.getAttribute(T) && (e.setAttribute(T, t), true);
}
function O(e, t) {
  e.getAttribute(T) === t && e.removeAttribute(T);
}
function M(e, t) {
  return preAutofillDom.findVisiblePreAutofillElement(
    e,
    t,
    e.defaultView?.HTMLInputElement,
  );
}
function N(e, t) {
  return preAutofillDom.findVisiblePreAutofillElements(
    e,
    t,
    e.defaultView?.HTMLInputElement,
  );
}
function $(e) {
  return p(e, y);
}
function B(e) {
  return K(e, /^Apply Manually$/i);
}
function q(e) {
  let t = B(e);
  if (!t) return null;
  let r = t.href ?? t.closest?.("a[href]")?.href;
  return "string" == typeof r && r ? r : null;
}
function U(e) {
  return M(e, m);
}
function H(e) {
  return M(e, h);
}
function Y(e) {
  return N(e, g);
}
function z(e, t) {
  if (
    t.hidden ||
    t.getAttribute?.("aria-hidden") === "true" ||
    t.closest?.("[hidden], [aria-hidden='true']")
  )
    return false;
  if (preAutofillDom.isVisiblePreAutofillElement(t)) return true;
  let r = tH(e, t);
  if (r && preAutofillDom.isVisiblePreAutofillElement(r)) return true;
  let n = t.closest?.('[data-automation-id^="formField-"]'),
    o2 =
      e.defaultView?.HTMLElement ??
      ("undefined" != typeof HTMLElement ? HTMLElement : null);
  if (
    n &&
    (!o2 || n instanceof o2) &&
    preAutofillDom.isVisiblePreAutofillElement(n)
  )
    return true;
  let i2 = t.parentElement;
  return !!i2 && preAutofillDom.isVisiblePreAutofillElement(i2);
}
function V(e) {
  return Array.from(e.querySelectorAll(b)).find((t) => z(e, t)) ?? null;
}
function W(e) {
  return p(e, S);
}
function G(e) {
  return p(e, E);
}
function K(e, t) {
  if ("function" != typeof e.querySelectorAll) return null;
  let r = Array.from(e.querySelectorAll("button, a, [role='button']"));
  return (
    r.find((e10) => {
      let r2 = e10,
        n = r2.textContent?.replace(/\s+/g, " ").trim() ?? "",
        o2 =
          r2.getAttribute?.("aria-label")?.replace(/\s+/g, " ").trim() ??
          "";
      return (
        (t.test(n) || t.test(o2)) &&
        preAutofillDom.isVisiblePreAutofillElement(r2)
      );
    }) ?? null
  );
}
function X(e) {
  if (!e) return null;
  let t = e.getAttribute?.("data-automation-id") ?? "",
    r = e.getAttribute?.("aria-label") ?? "",
    n = e.getAttribute?.("id") ?? "",
    o2 = e.getAttribute?.("role") ?? "",
    i2 = e.textContent?.replace(/\s+/g, " ").trim() ?? "";
  return [
    t ? `automationId=${t}` : "",
    r ? `aria=${r}` : "",
    n ? `id=${n}` : "",
    o2 ? `role=${o2}` : "",
    i2 ? `text=${i2.slice(0, 120)}` : "",
    `visible=${preAutofillDom.isVisiblePreAutofillElement(e)}`,
  ]
    .filter(Boolean)
    .join(" | ");
}
function J(e) {
  return "function" != typeof e.querySelectorAll
    ? []
    : Array.from(e.querySelectorAll("button, a, [role='button']"))
        .slice(0, 12)
        .map((e10) => X(e10));
}
function Q() {
  if ("undefined" == typeof window) return false;
  try {
    return (
      window.localStorage?.getItem(I) === "1" ||
      window.sessionStorage?.getItem(I) === "1"
    );
  } catch {
    return false;
  }
}
function Z({ document: e, phase: t, target: r, url: n, aborted: o2 }) {
  if (!Q()) return;
  let i2 = p(e, w),
    a2 = K(e, /^Sign in with email$/i),
    l2 = G(e),
    s2 = es(e),
    u2 = U(e),
    c2 = H(e),
    d2 = K(e, /^Sign In$/i);
  console.info(j, t, {
    url: n,
    documentTitle: e.title,
    authTitle: eu(e),
    aborted: o2 ?? false,
    target: r ?? null,
    socialShell: ej(e),
    pendingLoginAuthDom: eD({
      document: e,
      url: n,
    }),
    hasSignInContent: null !== el(e),
    signInWithEmailAutomation: !!i2,
    signInWithEmailAutomationInfo: X(i2),
    signInWithEmailText: !!a2,
    signInWithEmailTextInfo: X(a2),
    nativeSubmit: !!l2,
    nativeSubmitInfo: X(l2),
    signInForm: !!s2,
    signInFormInfo: X(s2),
    emailInput: !!u2,
    emailInputInfo: X(u2),
    passwordInput: !!c2,
    passwordInputInfo: X(c2),
    visibleSignInButton: !!d2,
    visibleSignInButtonInfo: X(d2),
    buttons: J(e),
  });
}
function ee(e) {
  return p(e, w) ?? K(e, /^Sign in with email$/i);
}
function et(e) {
  return p(e, 'button[data-automation-id="createAccountSubmitButton"]');
}
function er(e) {
  return p(
    e,
    'button[data-automation-id="signInSubmitButton"], [data-automation-id="signInSubmitButton"]',
  );
}
function en(e) {
  return p(e, x);
}
function eo(e) {
  return p(e, C);
}
function ei({ document: e, state: t }) {
  return "registration" === t ? W(e) : "reset_password" === t ? eo(e) : G(e);
}
function ea(e) {
  return p(
    e,
    'input[data-automation-id="verifyPassword"], input[data-automation-id="createAccountCheckbox"]',
  );
}
function el(e) {
  return p(e, '[data-automation-id="signInContent"]');
}
function es(e) {
  return p(e, '[data-automation-id="signInForm"]');
}
function eu(e) {
  return (
    p(e, '#authViewTitle, [id="authViewTitle"]')
      ?.textContent?.replace(/\s+/g, " ")
      .trim() ?? ""
  );
}
function ec(e) {
  return null !== el(e);
}
function ed(e, t) {
  let r = eu(e);
  return ec(e) && (t.test(r) || t.test(el(e)?.textContent ?? ""));
}
function ef(e) {
  let t =
    el(e) ??
    p(e, '[data-automation-id="applyFlowMyInfoPage"]') ??
    p(
      e,
      '[data-automation-id="applyFlowPage"], [data-automation-id="applyFlowMyExpPage"], main, body',
    ) ??
    e.body ??
    e.documentElement;
  return t?.textContent?.replace(/\s+/g, " ").trim() ?? "";
}
function ep(e) {
  let t =
    [
      e.title,
      eu(e),
      ...preAutofillDom
        .findVisiblePreAutofillElements(
          e,
          "h1, h2, [role='heading']",
          e.defaultView?.HTMLElement,
        )
        .map((e10) => e10.textContent?.replace(/\s+/g, " ").trim() ?? ""),
    ]
      .filter(Boolean)
      .join(" ") ?? "";
  return /\bForgot Password\b/i.test(t);
}
function em(e) {
  let t = ef(e),
    r = /\bForgot Password\b/i.test(t) || ep(e),
    n = null !== U(e) && null === H(e) && null !== en(e);
  return r && n;
}
function eh(e) {
  let t =
    [
      e.title,
      eu(e),
      ...preAutofillDom
        .findVisiblePreAutofillElements(
          e,
          "h1, h2, h3, [role='heading']",
          e.defaultView?.HTMLElement,
        )
        .map((e10) => e10.textContent?.replace(/\s+/g, " ").trim() ?? ""),
    ]
      .filter(Boolean)
      .join(" ") ?? "";
  return /\bReset Password\b/i.test(t);
}
function eg(e) {
  if (!e) return false;
  let t = eX(e);
  return !!t && eY(t.pathname);
}
function eb({ document: e, url: t }) {
  let r = ef(e),
    n = /\bReset Password\b/i.test(r) || eh(e),
    o2 = null !== H(e) && Y(e).length > 0 && null === U(e) && null !== eo(e);
  return o2 && n && (eg(t) || /\bPassword Requirements\b/i.test(r));
}
function ey(e) {
  return e.replace(/\s+/g, " ").trim();
}
function ev(e) {
  return e.replace(/\s+/g, " ").trim();
}
function ew({ rawMessage: e, messageType: t }) {
  let r = ev(e);
  return {
    rawMessage: r,
    messageType: t,
    message:
      "reset_email_sent" === t
        ? "Check your email for password reset instructions."
        : "Password reset is temporarily unavailable. Please contact the administrator.",
  };
}
function eS(e) {
  let t = ey(e),
    r = _.find(({ pattern: e10 }) => e10.test(t));
  return {
    message: r?.message ?? t,
    rawMessage: t,
    messageType: r?.messageType,
  };
}
function eE(e) {
  let t = p(e, P),
    r = ey(t?.textContent ?? "");
  return r || null;
}
function ex(e) {
  return eC(e)[0] ?? null;
}
function eC(e) {
  let t = [],
    r = p(e, P),
    n = ev(r?.textContent ?? "");
  n &&
    t.push(
      ew({
        rawMessage: n,
        messageType: "reset_failed",
      }),
    );
  let o2 = p(e, A),
    i2 = ev(o2?.textContent ?? "");
  return (
    i2 &&
      t.push(
        ew({
          rawMessage: i2,
          messageType: "reset_email_sent",
        }),
      ),
    t
  );
}
async function eA({ document: e, signal: t }) {
  return f.default(
    () => ex(e),
    () => t?.aborted ?? false,
    80,
  );
}
async function ek({ document: e, signal: t }) {
  let r = await f.default(
    () => eE(e),
    () => t?.aborted ?? false,
    80,
  );
  return r ? eS(r) : null;
}
function eT(e) {
  let t = ef(e);
  return (
    /\bCreate Account\b/i.test(t) &&
    (/\bVerify New Password\b/i.test(t) || /\bPassword Requirements\b/i.test(t) || /\bAlready have an account\?\s*Sign In\b/i.test(t))
  );
}
function eF(e) {
  let t = ef(e);
  return (
    /\bSign In\b/i.test(t) &&
    /\bPassword\b/i.test(t) &&
    null !== p(e, 'input[data-automation-id="email"]') &&
    null !== p(e, 'input[data-automation-id="password"]')
  );
}
function eI(e) {
  let t = eu(e);
  return null !== el(e) && /^Sign In$/i.test(t) && null !== ee(e);
}
function ej(e) {
  let t = eu(e),
    r = el(e),
    n = r?.textContent?.replace(/\s+/g, " ").trim() ?? "";
  return (
    null !== r &&
    /^Sign In$/i.test(t) &&
    null === U(e) &&
    null === H(e) &&
    (/\bSign in with (?:Google|LinkedIn|Apple)\b/i.test(n) || /\bOR\b/i.test(n))
  );
}
function eD({ document: e, url: t }) {
  if (U(e) || H(e) || !t) return false;
  try {
    let e10 =
        "undefined" != typeof window
          ? window.location.href
          : "https://example.com",
      r = new URL(t, e10).pathname;
    return eU(r) || eH(r);
  } catch {
    return false;
  }
}
function eP(e) {
  if (ee(e)) return "sign_in_with_email";
  let t = null !== G(e) || null !== es(e) || (null !== U(e) && null !== H(e)),
    r = null !== K(e, /^Sign In$/i);
  return t && r ? "sign_in_form" : null;
}
function e_(e) {
  let t = eP(e);
  return (
    "sign_in_with_email" === t ||
    ("sign_in_form" === t && null === et(e) && null === ea(e) && !eT(e))
  );
}
function eL({ document: e, url: t }) {
  return (
    ej(e) ||
    eD({
      document: e,
      url: t,
    })
  );
}
function eR({ document: e, phasePrefix: t, signal: r, url: n }) {
  Z({
    document: e,
    phase: `${t}-enter`,
    url: n,
    aborted: r.aborted,
  });
  let o2 = eP(e);
  if (
    (Z({
      document: e,
      phase: `${t}-existing-target`,
      target: o2,
      url: n,
      aborted: r.aborted,
    }),
    o2)
  )
    return {
      target: o2,
      shouldWait: false,
    };
  if (r.aborted)
    return (
      Z({
        document: e,
        phase: `${t}-aborted`,
        url: n,
        aborted: true,
      }),
      {
        target: null,
        shouldWait: false,
      }
    );
  let i2 = eL({
    document: e,
    url: n,
  });
  return (
    i2 ||
      Z({
        document: e,
        phase: `${t}-skip-no-pending-choice`,
        url: n,
        aborted: r.aborted,
      }),
    {
      target: null,
      shouldWait: i2,
    }
  );
}
function eO({ document: e, phasePrefix: t, signal: r, url: n }) {
  let o2 = 0;
  return f
    .default(
      () => {
        o2 += 1;
        let i2 = eP(e);
        return (
          Z({
            document: e,
            phase: `${t}-poll-${o2}`,
            target: i2,
            url: n,
            aborted: r.aborted,
          }),
          i2
        );
      },
      () => {
        let o3 = r.aborted;
        return (
          o3 &&
            Z({
              document: e,
              phase: `${t}-poll-aborted`,
              url: n,
              aborted: o3,
            }),
          o3
        );
      },
      k,
    )
    .then(
      (o3) => (
        Z({
          document: e,
          phase: `${t}-poll-result`,
          target: o3,
          url: n,
          aborted: r.aborted,
        }),
        o3
      ),
    );
}
function eM(e) {
  return ed(e, /^Create Account$/i) || null !== et(e) || null !== ea(e) || eT(e);
}
function eN(e) {
  return eI(e) || null !== er(e) || eF(e) || e_(e);
}
function e$(e) {
  return $(e)?.textContent?.trim() ?? "";
}
function eB(e) {
  return /^Apply$/i.test(e$(e));
}
function eq(e) {
  return /^Continue Application$/i.test(e$(e));
}
function eU(e) {
  return /\/login(?:[/?#]|$)/i.test(e);
}
function eH(e) {
  return /\/userHome(?:[/?#]|$)/i.test(e);
}
function eY(e) {
  return /\/passwordreset(?:[/?#]|$)/i.test(e);
}
function ez(e) {
  return /\/apply\/applyManually(?:[/?#]|$)/i.test(e);
}
function eV(e) {
  return /\/apply(?:[/?#]|$)/i.test(e) && !ez(e);
}
function eW(e) {
  return /\/details\//i.test(e) || /\/job\//i.test(e);
}
function eG(e) {
  let t = e.replace(/\/+$/, "");
  return t || "/";
}
function eK(e) {
  return eG(e).replace(/^\/[a-z]{2}-[a-z]{2}(?=\/)/i, "");
}
function eX(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function eJ(e) {
  return e.searchParams.get("jr_id");
}
function eQ(e) {
  let t = e.searchParams.get("redirect");
  if (!t) return null;
  try {
    return eK(new URL(t, e.origin).pathname);
  } catch {
    return null;
  }
}
function eZ(e) {
  let t = eQ(e),
    r = t ?? eK(e.pathname),
    n = r.search(/\/apply(?:\/applyManually)?(?:\/|$)/i);
  return n >= 0 ? eG(r.slice(0, n)) : r;
}
function e0(e, t) {
  if (e.hostname.toLowerCase() !== t.hostname.toLowerCase()) return false;
  let r = eJ(e),
    n = eJ(t);
  return !r || !n || r === n;
}
function e2(e, t) {
  return !!e0(e, t) && eK(e.pathname) === eK(t.pathname);
}
function e1(e, t) {
  return !!e0(e, t) && eZ(e) === eZ(t);
}
function e3({ pending: e, currentUrl: t }) {
  let r = eX(e.sourceUrl),
    n = eX(t);
  if (!r || !n) return false;
  let o2 = e.targetUrl ? eX(e.targetUrl) : null;
  return (
    !!(
      (o2 && e2(o2, n)) ||
      ("reset_password" === e.intent &&
        e0(r, n) &&
        eY(r.pathname) &&
        eH(n.pathname))
    ) || e1(r, n)
  );
}
function e4({ document: e, url: t }) {
  return (
    !(
      e7({
        document: e,
        url: t,
      }) || eM(e)
    ) && eN(e)
  );
}
function e5({ document: e, url: t }) {
  return (
    !e7({
      document: e,
      url: t,
    }) && eM(e)
  );
}
let e6 = /\b(?:My Information|My Experience|Application Questions|Voluntary Disclosures|Self[-\s]?Identify|Review)\b/i,
  e8 =
    '[data-automation-id="sectionTitle"], [data-automation-id="pageTitle"], [data-automation-id="stepTitle"], [id="sectionTitle"], [id="pageTitle"], [id="stepTitle"]';
function e9(e) {
  return preAutofillDom
    .findVisiblePreAutofillElements(e, e8, e.defaultView?.HTMLElement)
    .map((e10) => e10.textContent?.replace(/\s+/g, " ").trim() ?? "")
    .filter(Boolean);
}
function e7({ document: e, url: t }) {
  return !!te(t) && e9(e).some((e10) => e6.test(e10));
}
function te(e) {
  if (!e) return false;
  let t = eX(e);
  return !!t && /\/apply(?:[/?#]|$)/i.test(t.pathname);
}
function tt(e) {
  return null !== p(e, 'div[data-automation-id^="formField-"]');
}
function tr(e) {
  return null !== p(e, v);
}
function tn({ document: e, url: t }) {
  return (
    !!e7({
      document: e,
      url: t,
    }) ||
    (!(eM(e) || eN(e) || B(e)) && (tr(e) || tt(e)))
  );
}
function to({
  document: e,
  url: t,
  applicationFormSignal: r,
  match: n,
  blockedBy: o2,
}) {
  if (!Q()) return;
  let i2 = eX(t),
    a2 = i2?.pathname ?? "";
  console.info(D, {
    url: t,
    pathname: a2,
    documentTitle: e.title,
    authTitle: eu(e),
    applicationStepTitleTexts: e9(e),
    loginPath: !!i2 && eU(a2),
    userHomePath: !!i2 && eH(a2),
    applyManuallyPath: !!i2 && ez(a2),
    applyStartPath: !!i2 && eV(a2),
    jobDetailPath: !!i2 && eW(a2),
    applicationFormSignal: r,
    applicationStepTitleSignal: e7({
      document: e,
      url: t,
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
    blockedBy: o2 ?? null,
    match: n
      ? {
          flowId: n.flowId,
          pageKind: n.pageKind,
          ctaText: n.ctaText,
        }
      : null,
  });
}
function ti({ document: e, parsedUrl: t }) {
  return eW(t.pathname) && !eU(t.pathname) && !ez(t.pathname) && eB(e);
}
function ta({ document: e, parsedUrl: t }) {
  return eW(t.pathname) && !eU(t.pathname) && !ez(t.pathname) && eq(e);
}
function tl({ document: e, parsedUrl: t }) {
  return eW(t.pathname) && eV(t.pathname) && null !== B(e);
}
let ts = [
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickApply,
      type: "click",
      run: tj,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually,
      type: "click",
      transition: {
        timing: "before",
        includeStep: true,
        currentStep: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
        getTargetUrl: ({ document: e }) => q(e),
      },
      run: tD,
    },
  ],
  tu = [
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually,
      type: "click",
      transition: {
        timing: "before",
        includeStep: true,
        currentStep: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
        getTargetUrl: ({ document: e }) => q(e),
      },
      run: tD,
    },
  ],
  tc = [
    {
      label:
        accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickContinueApplication,
      type: "click",
      transition: {
        timing: "before",
        includeStep: true,
        currentStep: null,
      },
      run: tj,
    },
  ],
  td = [
    {
      label: "Prepare Workday Account Form",
      type: "prepare",
      progress: false,
      run: tI,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
      type: "fill",
      progressGroup: "create_account",
      waitForCredential: "email",
      run: tM,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
      type: "fill",
      progressGroup: "create_account",
      waitForCredential: "password",
      run: t$,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.verifyNewPassword,
      type: "fill",
      progressGroup: "create_account",
      shouldRun: tq,
      run: tB,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.agreePrivacyNotice,
      type: "check",
      progressGroup: "create_account",
      shouldRun: tY,
      run: tz,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickCreateAccount,
      type: "track_submit",
      progress: false,
      run: tV,
    },
  ],
  tf = [
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.signInWithEmail,
      type: "click",
      shouldRun: tP,
      run: tR,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickCreateAccount,
      type: "click",
      shouldRun: t_,
      transition: {
        timing: "after",
        intent: "registration",
        includeStep: true,
        currentStep: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
      },
      run: tO,
    },
    {
      label: "Prepare Workday Account Form",
      type: "prepare",
      progress: false,
      shouldRun: tL,
      run: tI,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
      type: "fill",
      waitForCredential: "email",
      shouldRun: tL,
      run: tM,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
      type: "fill",
      waitForCredential: "password",
      shouldRun: tL,
      run: t$,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickSignIn,
      type: "track_submit",
      progress: false,
      shouldRun: tL,
      run: tV,
    },
  ],
  tp = [
    {
      label: "Prepare Workday Forgot Password Form",
      type: "prepare",
      progress: false,
      run: tI,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
      type: "fill",
      waitForCredential: "email",
      run: tN,
    },
    {
      label: "Track Reset Password",
      type: "track_submit",
      progress: false,
      submitSession: false,
      run: tF,
    },
  ],
  tm = [
    {
      label: "Prepare Workday Account Form",
      type: "prepare",
      progress: false,
      run: tI,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
      type: "fill",
      waitForCredential: "password",
      run: t$,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.verifyNewPassword,
      type: "fill",
      waitForCredential: "password",
      run: tB,
    },
    {
      label: accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickResetPassword,
      type: "track_submit",
      progress: false,
      run: tV,
    },
  ],
  th = {
    forgot_password: {
      state: "forgot_password",
      ctaText: "Autofill",
      progressTitle: null,
      detect: ({ document: e }) => em(e),
      steps: tp,
    },
  },
  tg = {
    reset_password: {
      state: "reset_password",
      ctaText: "Autofill",
      detect: ({ document: e, url: t }) =>
        eb({
          document: e,
          url: t,
        }),
      steps: tm,
    },
  },
  tb = {
    create_account: {
      state: "registration",
      detect: e5,
      steps: td,
    },
    sign_in: {
      state: "sign_in",
      detect: e4,
      steps: tf,
    },
    jd: {
      state: "registration",
      entry: true,
      excludeUrl: [/\/login(?:[/?#]|$)/i, /\/apply\/applyManually(?:[/?#]|$)/i],
      detect: ti,
      steps: ts,
    },
    apply_start: {
      state: "registration",
      entry: true,
      excludeUrl: [/\/login(?:[/?#]|$)/i, /\/apply\/applyManually(?:[/?#]|$)/i],
      detect: tl,
      steps: tu,
    },
    jd_continue_application: {
      state: "registration",
      ctaText: "Autofill",
      entry: true,
      progressTitle: null,
      completeEntryProgress: true,
      excludeUrl: [/\/login(?:[/?#]|$)/i, /\/apply\/applyManually(?:[/?#]|$)/i],
      detect: ta,
      steps: tc,
    },
  },
  ty = null;
async function tv() {
  let e = await messaging
    .sendToBackground({
      name: "getAutofillInfo",
      body: {
        forceRefresh: true,
      },
    })
    .catch(() => null);
  return autofillSignupInformation.resolveSignupRegistrationEmail(e);
}
async function tw() {
  let e = await workdaySignupInfo
    .getWorkdaySignupInformation()
    .catch(() => null);
  return e?.password ?? "";
}
async function tS() {
  return {
    email: await tv(),
    password: "",
  };
}
async function tE() {
  return {
    email: "",
    password: await tw(),
  };
}
function tx() {
  let e = autofillResultStore.useAutofillResultStore.getState(),
    t = e.autoFillResult;
  if (!t) return;
  let { [accountFlow.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY]: r, ...n } =
    t.userAutoFillResponse ?? {};
  e.setAutoFillResult({
    ...t,
    userAutoFillResponse: n,
  });
}
function tC(e) {
  let t = autofillResultStore.useAutofillResultStore.getState(),
    r = t.autoFillResult;
  if (!r) return;
  t.setAutoFillResult({
    ...r,
    userAutoFillResponse: {
      ...(r.userAutoFillResponse ?? {}),
      [accountFlow.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY]: e,
    },
    currentField: null,
  });
  let n = "undefined" != typeof window ? (window.location?.href ?? "") : "";
  (preAutofillTracking.sendWorkdayAccountFlowComplete({
    targetName: "myworkday",
    url: n,
    pending: {
      flowId: "workday_forgot_password_flow",
      intent: "forgot_password",
      sourceUrl: n,
      sourcePageKind: "forgot_password",
      transitionStep:
        accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickResetPassword,
      completedSteps: [
        accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
      ],
      currentStep: null,
    },
  }),
    "undefined" != typeof document &&
      document.dispatchEvent(
        new CustomEvent(
          accountFlow.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT,
        ),
      ));
}
let tA = null,
  tk = 0;
function tT(e) {
  return new Promise((t) => {
    if (e.aborted) {
      t();
      return;
    }
    let r = null,
      n = () => {
        (null !== r && clearTimeout(r),
          e.removeEventListener("abort", o2),
          t());
      },
      o2 = () => n();
    ((r = setTimeout(
      n,
      accountFlow.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_REFRESH_DELAY_MS,
    )),
      e.addEventListener("abort", o2, {
        once: true,
      }));
  });
}
function tF({ document: e, signal: t, onSubmit: r }) {
  (tA?.(), (tA = null));
  let n = en(e);
  if (!n || n.getAttribute(F)) return;
  n.setAttribute(F, "1");
  let o2 = () => {
      r();
      let n2 = ++tk;
      (tx(),
        tT(t)
          .then(() =>
            eA({
              document: e,
              signal: t,
            }),
          )
          .then((e10) => {
            e10 && !t.aborted && n2 === tk && tC(e10);
          }));
    },
    i2 = () => {
      (n.removeEventListener("click", o2, true),
        n.removeAttribute(F),
        t.removeEventListener("abort", i2),
        tA === i2 && (tA = null));
    };
  (n.addEventListener("click", o2, true),
    t.addEventListener("abort", i2, {
      once: true,
    }),
    (tA = i2));
}
function tI({ document: e }) {
  preAutofillDom.clearNativeInputValues([U(e), H(e), ...Y(e)]);
}
async function tj({ document: e, signal: t }) {
  return preAutofillDom.clickPreAutofillElement({
    document: e,
    signal: t,
    findElement: () => $(e),
  });
}
async function tD({ document: e, signal: t }) {
  return preAutofillDom.clickPreAutofillElement({
    document: e,
    signal: t,
    findElement: () => B(e),
  });
}
function tP({ document: e, url: t, signal: r }) {
  let n = eR({
    document: e,
    phasePrefix: "ui",
    signal: r,
    url: t,
  });
  return n.target ? "sign_in_with_email" === n.target : n.shouldWait;
}
function t_({ entrySession: e }) {
  return (
    !!e &&
    "registration" === e.pageKind &&
    e.completedSteps.includes(
      accountFlow.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually,
    )
  );
}
function tL(e) {
  return !t_(e);
}
async function tR({ document: e, signal: t, url: r }) {
  let n = eR({
      document: e,
      phasePrefix: "action",
      signal: t,
      url: r,
    }),
    o2 =
      n.target ??
      (n.shouldWait
        ? await eO({
            document: e,
            phasePrefix: "action",
            signal: t,
            url: r,
          })
        : null);
  return (
    "sign_in_form" === o2 ||
    ("sign_in_with_email" !== o2
      ? (Z({
          document: e,
          phase: "action-missing-choice-target",
          target: o2,
          url: r,
          aborted: t.aborted,
        }),
        false)
      : preAutofillDom.clickPreAutofillElement({
          document: e,
          signal: t,
          findElement: () => ee(e),
        }))
  );
}
async function tO({ document: e, signal: t }) {
  return preAutofillDom.clickPreAutofillElement({
    document: e,
    signal: t,
    findElement: () => p(e, 'button[data-automation-id="createAccountLink"]'),
  });
}
async function tM({ document: e, credentials: t, signal: r }) {
  return preAutofillDom.fillPreAutofillInput({
    document: e,
    signal: r,
    findInput: () => U(e),
    value: t.email,
  });
}
async function tN({ document: e, credentials: t, signal: r }) {
  return (
    !!t.email &&
    preAutofillDom.fillPreAutofillInput({
      document: e,
      signal: r,
      findInput: () => U(e),
      value: t.email,
    })
  );
}
async function t$({ document: e, credentials: t, signal: r }) {
  return preAutofillDom.fillPreAutofillInput({
    document: e,
    signal: r,
    findInput: () => H(e),
    value: t.password,
  });
}
async function tB({ document: e, credentials: t, signal: r }) {
  return preAutofillDom.fillPreAutofillInputs({
    document: e,
    signal: r,
    findInputs: () => Y(e),
    value: t.password,
  });
}
function tq({ document: e }) {
  return Y(e).length > 0;
}
function tU(e) {
  return e.checked || "true" === e.getAttribute("aria-checked");
}
function tH(e, t) {
  return t.id
    ? (Array.from(e.querySelectorAll("label")).find(
        (e10) => e10.htmlFor === t.id,
      ) ?? null)
    : null;
}
function tY({ document: e }) {
  return null !== V(e);
}
async function tz({ document: e, signal: t }) {
  let r = await preAutofillDom.waitForPreAutofillElement(
    e,
    () => V(e),
    void 0,
    t,
  );
  return (
    !t.aborted &&
    (!!(!r || tU(r)) || (r.click(), !!tU(r) || (tH(e, r)?.click(), tU(r))))
  );
}
function tV({ document: e, state: t, url: r, signal: n, onSubmit: o2 }) {
  (ty?.(), (ty = null));
  let i2 = ei({
    document: e,
    state: t,
  });
  if (!i2) return;
  let a2 = L();
  if (!R(i2, a2)) return;
  let l2 = () => {
      let e10 = o2();
      e10.didSubmit &&
        t1({
          currentUrl: r,
          pending: e10.pending,
        });
    },
    s2 = () => {
      (i2.removeEventListener("click", l2, true),
        O(i2, a2),
        n.removeEventListener("abort", s2),
        ty === s2 && (ty = null));
    };
  (i2.addEventListener("click", l2, true),
    n.addEventListener("abort", s2, {
      once: true,
    }),
    (ty = s2));
}
let tW = accountFlow.createPreAutofillAccountFlowAdapter({
  flowId: "workday_account_flow",
  rules: tb,
  getEmail: tv,
  getPassword: tw,
});
function tG({ getCredentials: e = tS } = {}) {
  return accountFlow.createPreAutofillAccountFlowAdapter({
    flowId: "workday_forgot_password_flow",
    rules: th,
    getCredentials: e,
  });
}
let tK = tG();
function tX({ getCredentials: e = tE } = {}) {
  return accountFlow.createPreAutofillAccountFlowAdapter({
    flowId: "workday_reset_password_flow",
    rules: tg,
    getCredentials: e,
  });
}
let tJ = tX(),
  tQ = {
    ...tW,
    detect(e) {
      let t = tn({
        document: e.document,
        url: e.url,
      });
      if (t)
        return (
          to({
            document: e.document,
            url: e.url,
            applicationFormSignal: t,
            match: null,
            blockedBy: "application_form_signal",
          }),
          null
        );
      let r = tW.detect(e);
      return (
        to({
          document: e.document,
          url: e.url,
          applicationFormSignal: t,
          match: r,
        }),
        r
      );
    },
  };
function tZ({ url: e, document: t }) {
  return tQ.detect({
    targetName: "myworkday",
    url: e,
    document: t,
  });
}
function t0({ document: e, url: t }) {
  return tn({
    document: e,
    url: t,
  });
}
function t2({ document: e, url: t }) {
  return tn({
    document: e,
    url: t,
  });
}
function t1({ currentUrl: e, pending: t }) {
  preAutofillTracking.sendWorkdayAccountFlowComplete({
    targetName: "myworkday",
    url: e,
    pending: t,
  });
}
export {
  T as WORKDAY_ACCOUNT_SUBMIT_TRACKING_ATTRIBUTE,
  g as WORKDAY_VERIFY_PASSWORD_INPUT_SELECTOR,
  t0 as canStartWorkdayStandardAutofillFromAccountFlow,
  O as clearWorkdayAccountSubmitTracking,
  tR as clickWorkdaySignInWithEmail,
  tG as createWorkdayForgotPasswordFlowAdapter,
  tX as createWorkdayResetPasswordFlowAdapter,
  tZ as detectWorkdayAccountFlowMatch,
  ek as detectWorkdayAccountSubmitError,
  eA as detectWorkdayForgotPasswordSubmitMessage,
  V as findWorkdayPrivacyNoticeCheckbox,
  G as findWorkdaySignInSubmitButton,
  ee as findWorkdaySignInWithEmailButton,
  Y as findWorkdayVerifyPasswordInputs,
  t2 as hasWorkdayStandardAutofillSignalFromAccountFlow,
  e3 as isWorkdayAccountTransitionUrlInScope,
  R as markWorkdayAccountSubmitTracking,
  tP as shouldOpenWorkdayEmailSignIn,
  tV as trackWorkdayAccountSubmit,
  tQ as workdayAccountFlowAdapter,
  tK as workdayForgotPasswordFlowAdapter,
  tJ as workdayResetPasswordFlowAdapter,
};
