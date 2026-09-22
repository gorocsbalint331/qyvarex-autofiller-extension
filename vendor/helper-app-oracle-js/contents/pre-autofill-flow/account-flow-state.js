/**
 * Parcel module id: 8WOx2
 * Resolved path: contents/pre-autofill-flow/account-flow-state.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~store/autofillResult -> hCUzf  =>  _tilde_store/autofillResult.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PRE_AUTOFILL_ACCOUNT_SETUP_MISSING_STEPS_KEY", () => i), n
  .export(r, "PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY", () => a), n.export(r,
    "WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY", () => l), n.export(r,
    "WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT", () => s), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_SETUP_PROMPT_DELAY_MS", () => u), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_SETUP_PROGRESS_TITLE", () => c), n.export(r,
    "getPreAutofillAccountSetupMissingSteps", () => d), n.export(r, "debugPreAutofillAccountSetup",
    () => p), n.export(r, "createPreAutofillFlowSessionStore", () => g), n.export(r,
    "appendCompletedPreAutofillStep", () => b), n.export(r, "buildPreAutofillStepProgress", () =>
  v), n.export(r, "createPreAutofillStepProgressController", () => w), n.export(r,
    "createOneShotSessionStore", () => x), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_STANDARD_READY_CHECK_INTERVAL_MS", () => C), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_FLOW_FILLING_MODE", () => A), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_FLOW_SESSION_KEY", () => k), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_TRANSITION_SESSION_KEY", () => T), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_PENDING_SUBMIT_SESSION_KEY", () => F), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_FLOW_PROGRESS_TYPE", () => I), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT", () => j), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT", () => D), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_PASSWORD_WAIT_TIMEOUT_MS", () => P), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_TRANSITION_TTL_MS", () => _), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_PENDING_SUBMIT_TTL_MS", () => L), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_SUBMIT_REFRESH_DEBOUNCE_MS", () => R), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_STEP_LABELS", () => O), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS", () => M), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_REGISTRATION_FORM_STEPS", () => N), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_REGISTRATION_STEPS", () => $), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_SIGN_IN_FORM_STEPS", () => B), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_SIGN_IN_STEPS", () => q), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_RESET_PASSWORD_STEPS", () => U), n.export(r,
    "PRE_AUTOFILL_ACCOUNT_FLOW_STATES", () => Y), n.export(r, "preAutofillAccountFlowSession", () =>
    z), n.export(r, "preAutofillAccountTransitionSession", () => W), n.export(r,
    "preAutofillAccountPendingSubmitSession", () => G), n.export(r, "preAutofillAccountProgress",
  () => K), n.export(r, "buildPreAutofillAccountProgress", () => X), n.export(r,
    "getPreAutofillAccountFlowCtaText", () => J), n.export(r, "getPreAutofillAccountProgressTitle",
    () => Z);
var o = e("~store/autofillResult");
let i = "signupSetupMissingFields",
  a = "signupSubmitError",
  l = "workdayForgotPasswordSubmitMessage",
  s = "JobrightWorkdayForgotPasswordSubmitMessage",
  u = 300,
  c = "Paused: Action Needed!";

function d(e) {
  let t = e?.[i];
  return Array.isArray(t) ? t.filter(e => "string" == typeof e) : []
}

function f() {
  try {
    return window.localStorage?.getItem("JOBRIGHT_DEBUG_ACCOUNT_SETUP") === "1" || window
      .sessionStorage?.getItem("JOBRIGHT_DEBUG_ACCOUNT_SETUP") === "1"
  } catch {
    return !1
  }
}

function p(e, t, r) {
  if (!f()) return;
  let n = "ui" === e ? "[workday-account-setup-ui]" : "[workday-account-setup]";
  console.debug(n, t, {
    ...r,
    timestamp: Date.now()
  })
}

function m() {
  try {
    return window.sessionStorage
  } catch {
    return null
  }
}

function h(e, t) {
  if (!e || "object" != typeof e) return !1;
  let r = e;
  return t.includes(r.pageKind) && Array.isArray(r.completedSteps) && r.completedSteps.every(e =>
    "string" == typeof e) && ("string" == typeof r.currentStep || null === r.currentStep) && (
    "running" === r.status || "completed" === r.status) && "number" == typeof r.updatedAt
}

function g({
  storageKey: e,
  pageKinds: t
}) {
  function r() {
    let r = m();
    if (!r) return null;
    try {
      let n = r.getItem(e);
      if (!n) return null;
      let o = JSON.parse(n);
      return h(o, t) ? o : null
    } catch {
      return null
    }
  }

  function n() {
    return r()?.status === "running"
  }
  return {
    get: r,
    save: function(t) {
      let r = m();
      r && r.setItem(e, JSON.stringify({
        ...t,
        updatedAt: Date.now()
      }))
    },
    clear: function() {
      let t = m();
      t && t.removeItem(e)
    },
    hasRunning: n
  }
}

function b(e, t) {
  return e.includes(t) ? e : [...e, t]
}

function y(e) {
  return "string" == typeof e ? {
    label: e
  } : e
}

function v({
  steps: e,
  completedSteps: t = [],
  missingSteps: r = [],
  currentStep: n = null,
  userAutoFillResponse: o = {},
  type: i = "PRE_AUTOFILL_FLOW_STEP"
}) {
  let a = e.map(y),
    l = a.map(e => e.label),
    s = new Set(l),
    u = t.filter(e => s.has(e)),
    c = r.filter(e => s.has(e));
  return {
    filledFields: u,
    missingFields: c,
    fieldRequiredStatus: a.map(e => ({
      label: e.label,
      required: !0,
      options: [],
      type: i,
      metadata: e.metadata
    })),
    userAutoFillResponse: o,
    currentField: n && s.has(n) ? n : null
  }
}

function w({
  fillingMode: e,
  getSteps: t,
  progressType: r,
  getTitle: n,
  sessionStore: i
}) {
  function a({
    pageKind: e,
    steps: n,
    completedSteps: o = [],
    missingSteps: i = [],
    currentStep: a = null,
    userAutoFillResponse: l = {}
  }) {
    return v({
      steps: n ?? t(e),
      completedSteps: o,
      missingSteps: i,
      currentStep: a,
      userAutoFillResponse: l,
      type: r
    })
  }

  function l({
    pageKind: t,
    steps: r,
    completedSteps: l,
    missingSteps: s = [],
    currentStep: u,
    userAutoFillResponse: c = {},
    status: d = "running",
    persistSession: f = !0
  }) {
    let p = (0, o.useAutofillResultStore).getState();
    p.setFillingMode(e), p.setProgressTitle(n(t, d)), p.setAutoFillResult(a({
      pageKind: t,
      steps: r,
      completedSteps: l,
      missingSteps: s,
      currentStep: u,
      userAutoFillResponse: c
    })), f && i.save({
      pageKind: t,
      completedSteps: l,
      currentStep: u,
      status: d
    })
  }
  return {
    getSteps: t,
    getTitle: n,
    build: a,
    set: l
  }
}

function S() {
  try {
    return window.sessionStorage
  } catch {
    return null
  }
}

function E({
  value: e,
  validatePayload: t
}) {
  if (!e || "object" != typeof e) return !1;
  let r = e;
  return "number" == typeof r.createdAt && t(r.payload)
}

function x({
  storageKey: e,
  ttlMs: t,
  validatePayload: r
}) {
  function n() {
    let t = S();
    t && t.removeItem(e)
  }

  function o() {
    let o = S();
    if (!o) return null;
    try {
      let i = o.getItem(e);
      if (!i) return null;
      let a = JSON.parse(i);
      if (!E({
          value: a,
          validatePayload: r
        })) return n(), null;
      let l = Date.now() - a.createdAt;
      if (l > t) return console.debug("[pre-autofill-session]", "expired", {
        storageKey: e,
        ageMs: l,
        ttlMs: t,
        createdAt: a.createdAt
      }), n(), null;
      return a
    } catch {
      return n(), null
    }
  }

  function i() {
    let e = o();
    return e && n(), e
  }
  return {
    save: function(t) {
      let r = S();
      r && r.setItem(e, JSON.stringify({
        payload: t,
        createdAt: Date.now()
      }))
    },
    peek: o,
    consume: i,
    clear: n
  }
}
let C = 250,
  A = "signup_autofill_flow",
  k = "JOBRIGHT_SIGNUP_AUTOFILL_FLOW_SESSION",
  T = "JOBRIGHT_SIGNUP_AUTOFILL_FLOW_PENDING_SUBMIT",
  F = T,
  I = "SIGNUP_AUTOFILL_FLOW_STEP",
  j = "JobrightPreAutofillAccountCredentialsChanged",
  D = "JobrightPreAutofillAccountTransitionChanged",
  P = 3e5,
  _ = 1e4,
  L = _,
  R = 1e3,
  O = {
    clickApply: "Click Apply",
    clickContinueApplication: "Click Continue Application",
    selectedApplyManually: "Choose Apply Manually",
    emailAddress: "Enter Email Address",
    password: "Enter Password",
    signInWithEmail: "Sign in with email",
    verifyNewPassword: "Verify New Password",
    agreePrivacyNotice: "Agree to Privacy Notice",
    clickCreateAccount: "Click Create Account",
    clickSignIn: "Click Sign In",
    clickResetPassword: "Click Reset Password"
  },
  M = [O.clickApply, O.selectedApplyManually],
  N = [O.emailAddress, O.password, O.verifyNewPassword],
  $ = [...M, ...N],
  B = [O.emailAddress, O.password],
  q = [...B],
  U = [O.password, O.verifyNewPassword],
  H = {
    registration: {
      steps: $,
      progressTitle: "Creating account",
      ctaText: "Account Creation & Autofill"
    },
    sign_in: {
      steps: q,
      progressTitle: "Signing in",
      ctaText: "Sign In & Autofill"
    },
    forgot_password: {
      steps: [O.emailAddress],
      progressTitle: "Autofilling",
      ctaText: "Autofill"
    },
    reset_password: {
      steps: U,
      progressTitle: "Autofilling",
      ctaText: "Autofill"
    }
  },
  Y = Object.keys(H),
  z = g({
    storageKey: k,
    pageKinds: Y
  });

function V(e) {
  if (!e || "object" != typeof e) return !1;
  let t = e;
  return "string" == typeof t.flowId && Y.includes(t.intent) && "string" == typeof t.sourceUrl && (
      void 0 === t.targetUrl || "string" == typeof t.targetUrl) && "string" == typeof t
    .sourcePageKind && ("string" == typeof t.transitionStep || "string" == typeof t.submitStep) && (
      void 0 === t.transitionStep || "string" == typeof t.transitionStep) && (void 0 === t
      .submitStep || "string" == typeof t.submitStep) && (void 0 === t.completedSteps || Array
      .isArray(t.completedSteps) && t.completedSteps.every(e => "string" == typeof e)) && (
      void 0 === t.currentStep || "string" == typeof t.currentStep || null === t.currentStep)
}
let W = x({
    storageKey: T,
    ttlMs: _,
    validatePayload: V
  }),
  G = W,
  K = w({
    fillingMode: A,
    progressType: I,
    getSteps: Q,
    getTitle: Z,
    sessionStore: z
  });

function X(e) {
  return K.build(e)
}

function J(e) {
  return H[e].ctaText
}

function Q(e) {
  return H[e].steps
}

function Z(e, t = "running") {
  switch (t) {
    case "running":
      return H[e].progressTitle;
    case "completed":
      return "Completed"
  }
}

