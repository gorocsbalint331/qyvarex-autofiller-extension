/**
 * Parcel module id: 3L3xh
 * Resolved path: src/contents/pre-autofill-flow/tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getWorkdayAccountCtaStatus", () => w), n.export(r,
  "shouldTrackWorkdayAccountCtaExposure", () => S), n.export(r,
  "sendWorkdayAccountCreationCtaExposure", () => x), n.export(r,
  "sendWorkdayAccountCreationCtaClick", () => C), n.export(r, "sendWorkdayAccountFlowComplete",
() => A), n.export(r, "sendWorkdayAccountSubmitWarningExposure", () => k);
var o = e("~store/profile"),
  i = e("~utils/trace");
let a = "myworkday",
  l = "workday_account_flow",
  s = "workday_forgot_password_flow",
  u = "workday_reset_password_flow",
  c = "Account Creation & Autofill",
  d = "Sign In & Autofill",
  f = "sign up",
  p = "sign in",
  m = "forgot password",
  h = "reset password",
  g = new Set(["create_account", "jd", "apply_start", "jd_continue_application"]),
  b = new Set(["sign_in"]);

function y() {
  return o.useProfileStore.getState().userStage?.userId
}

function v(e) {
  return "intent" in e ? "registration" === e.intent ? f : "sign_in" === e.intent ? p :
    "forgot_password" === e.intent ? m : "reset_password" === e.intent ? h : null : e.flowId ===
    s || "forgot_password" === e.pageKind ? m : e.flowId === u || "reset_password" === e.pageKind ?
    h : b.has(e.pageKind) ? p : g.has(e.pageKind) ? f : e.ctaText === d ? p : e.ctaText === c ? f :
    null
}

function w({
  targetName: e,
  match: t
}) {
  return e !== a || t?.flowId !== l && t?.flowId !== s && t?.flowId !== u ? null : v(t)
}

function S({
  targetName: e,
  match: t,
  lastStatus: r,
  pending: n
}) {
  let o = w({
    targetName: e,
    match: t
  });
  if (!o) return {
    shouldTrack: !1,
    status: null
  };
  let i = n ? v(n) : null;
  return i === o ? {
    shouldTrack: !1,
    status: o
  } : {
    shouldTrack: r !== o,
    status: o
  }
}

function E({
  eventName: e,
  targetName: t,
  url: r,
  match: n,
  tracker: o = i.trackEvent
}) {
  let a = w({
    targetName: t,
    match: n
  });
  return !!a && (o(e, {
    website_url: r,
    uid: y(),
    status: a
  }), !0)
}

function x({
  targetName: e,
  url: t,
  match: r,
  tracker: n
}) {
  return E({
    eventName: "autofill_workday_cta_exposure",
    targetName: e,
    url: t,
    match: r,
    tracker: n
  })
}

function C({
  targetName: e,
  url: t,
  match: r,
  tracker: n
}) {
  return E({
    eventName: "autofill_workday_cta_click",
    targetName: e,
    url: t,
    match: r,
    tracker: n
  })
}

function A({
  targetName: e,
  url: t,
  pending: r,
  tracker: n = i.trackEvent
}) {
  if (e !== a || r.flowId !== l && r.flowId !== s && r.flowId !== u) return !1;
  let o = v(r);
  return !!o && (n("autofill_workday_flow_complete", {
    website_url: t,
    uid: y(),
    status: o
  }), !0)
}

function k({
  targetName: e,
  url: t,
  pending: r,
  submitError: n,
  tracker: o = i.trackEvent
}) {
  if (e !== a || r.flowId !== l && r.flowId !== s && r.flowId !== u || !n.messageType) return !1;
  let c = v(r);
  return !!c && (o("autofill_workday_submit_warning_exposure", {
    website_url: t,
    uid: y(),
    status: c,
    message_type: n.messageType
  }), !0)
}

