/**
 * Parcel module id: lfzZV
 * Resolved path: src/contents/pre-autofill-flow/registry.js
 * Dependencies:
 *   ./account-flow -> IgBHR  =>  src/contents/pre-autofill-flow/account-flow.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/myworkday/account-preflow -> hOSkB  =>  src/contents/sites/myworkday/account-preflow.js
 *   ~contents/sites/smartrecruiters/entry-preflow -> 6WEEz  =>  src/contents/sites/smartrecruiters/entry-preflow.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PRE_AUTOFILL_FLOW_REGISTRY", () => d), n.export(r,
  "canStartPreAutofillStandardAutofill", () => f), n.export(r,
  "hasPreAutofillStandardAutofillSignal", () => p), n.export(r,
  "isPreAutofillAccountTransitionInScope", () => m), n.export(r,
  "getPreAutofillStandardAutofillStartDelayMs", () => h), n.export(r,
  "getPreAutofillAccountTransitionCompleteHandler", () => g), n.export(r,
  "detectPreAutofillAccountSourcePageSubmitError", () => b), n.export(r,
  "shouldSuppressStandardAutofillForPreAutofillTransition", () => y);
var o = e("~contents/sites/myworkday/account-preflow"),
  i = e("~contents/sites/smartrecruiters/entry-preflow"),
  a = e("./account-flow");
let l = 1e3,
  s = {
    smartrecruiters: {
      adapters: [i.smartRecruitersEntryAdapter]
    },
    myworkday: {
      adapters: [o.workdayForgotPasswordFlowAdapter, o.workdayResetPasswordFlowAdapter, o
        .workdayAccountFlowAdapter
      ],
      accountTransition: {
        canStartStandardAutofill: o.canStartWorkdayStandardAutofillFromAccountFlow,
        hasStandardAutofillSignal: o.hasWorkdayStandardAutofillSignalFromAccountFlow,
        isTransitionInScope: ({
          pending: e,
          url: t
        }) => (0, o.isWorkdayAccountTransitionUrlInScope)({
          pending: e,
          currentUrl: t
        }),
        detectSourcePageSubmitError: o.detectWorkdayAccountSubmitError,
        standardAutofillStartDelayMs: l,
        suppressStandardAutofillUntilReady: !0
      }
    }
  };

function u(e) {
  return s[e] ?? null
}

function c(e) {
  return u(e)?.accountTransition ?? null
}
let d = Object.fromEntries(Object.entries(s).map(([e, t]) => [e, t.adapters]));

function f(e) {
  return c(e.targetName)?.canStartStandardAutofill?.(e) ?? !1
}

function p(e) {
  return c(e.targetName)?.hasStandardAutofillSignal?.(e) ?? f(e)
}

function m({
  targetName: e,
  url: t,
  pending: r
}) {
  let n = c(e)?.isTransitionInScope;
  return !n || n({
    pending: r,
    targetName: e,
    url: t
  })
}

function h({
  targetName: e
}) {
  return c(e)?.standardAutofillStartDelayMs ?? 0
}

function g(e) {
  return c(e)?.onTransitionComplete
}

function b(e) {
  let t = c(e.targetName)?.detectSourcePageSubmitError;
  return t ? t(e) : Promise.resolve(null)
}

function y({
  targetName: e,
  hasPendingAccountTransition: t = null !== (0, a.preAutofillAccountTransitionSession).peek(),
  canStartStandardAutofill: r = !1
}) {
  let n = c(e);
  return !!n?.suppressStandardAutofillUntilReady && t && !r
}

