/**
 * Parcel module id: 66cuE
 * Resolved path: src/components/FillProgress/progress-state.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/pre-autofill-flow/account-flow-state -> 8WOx2  =>  src/contents/pre-autofill-flow/account-flow-state.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "SIGNUP_CREATING_ACCOUNT_LABEL", () => a), n.export(r,
    "isValidFieldItemResult", () => s), n.export(r, "getFieldItemResult", () => u), n.export(r,
    "getFieldItemDisplayState", () => c), n.export(r, "getFieldItemProgressSummary", () => d), n
  .export(r, "getFieldItemResultGroups", () => f), n.export(r, "getSignupSetupCredentialField",
  () => m), n.export(r, "getSignupSetupStepLabel", () => h), n.export(r, "isSignupSetupStepMissing",
    () => g), n.export(r, "getSignupSetupExposureCredentialFields", () => b), n.export(r,
    "getSignupAccountSubmitMessage", () => w), n.export(r, "hasVisibleFillProgressResult", () => x),
  n.export(r, "getFillProgressCounts", () => C), n.export(r, "shouldShowFillProgressScanning", () =>
    A), n.export(r, "shouldShowFillProgressPercent", () => k), n.export(r, "getSignupStepStatus",
  () => T), n.export(r, "getSignupCreatingAccountStatus", () => F), n.export(r,
    "shouldShowSignupCreatingAccountGroup", () => I);
var o = e("~contents/pre-autofill-flow/account-flow-state"),
  i = e("~utils/fieldLabel");
let a = "Create Account";

function l(e) {
  return e.trim().toLowerCase()
}

function s(e) {
  if (!e || "object" != typeof e || Array.isArray(e)) return !1;
  let t = e;
  if ("filled" !== t.status && "partial" !== t.status && "missing" !== t.status) return !1;
  let r = [t.requestedItems, t.succeededItems, t.failedItems];
  if (!r.every(e => Array.isArray(e) && e.every(e => "string" == typeof e))) return !1;
  let [n, o, i] = r, a = n.map(l), s = o.map(l), u = i.map(l), c = new Set(a), d = new Set(s), f =
    new Set(u);
  if (a.some(e => !e) || c.size !== a.length || d.size !== s.length || f.size !== u.length) return !
    1;
  let p = e => [...e].every(e => c.has(e));
  if (!p(d) || !p(f) || [...d].some(e => f.has(e))) return !1;
  let m = new Set([...d, ...f]);
  if (m.size !== c.size || ![...c].every(e => m.has(e))) return !1;
  if ("filled" === t.status) return c.size > 0 && 0 === f.size && d.size === c.size;
  if ("partial" === t.status) {
    let e = 0 === f.size && d.size === c.size;
    return d.size > 0 && (f.size > 0 || e)
  }
  return 0 === d.size
}

function u(e, t) {
  if (!e || "object" != typeof e || Array.isArray(e)) return null;
  let r = (0, i.normalizeFieldLabel)(t);
  if (!r) return null;
  let n = Object.entries(e).find(([e]) => i.normalizeFieldLabel(e) === r)?.[1];
  return s(n) ? n : null
}

function c(e) {
  return s(e) ? e.status : null
}

function d(e) {
  return s(e) ? "partial" === e.status && 0 === e.failedItems.length ?
    `${e.succeededItems.length} added before autofill stopped` :
    `${e.succeededItems.length}/${e.requestedItems.length} added` : null
}

function f(e) {
  if (!s(e)) return [];
  let t = [];
  return e.succeededItems.length > 0 && t.push({
    title: "Added",
    status: "filled",
    items: e.succeededItems
  }), e.failedItems.length > 0 && t.push({
    title: "Not added",
    status: "missing",
    items: e.failedItems
  }), t
}

function p(e) {
  return "string" == typeof e ? {
    label: e
  } : e
}

function m(e) {
  return p(e).metadata?.signup?.setupCredential ?? null
}

function h(e) {
  let t = m(e);
  return t ? "email" === t ? "Set an email to continue" : "Set a password to continue" : null
}

function g({
  step: e,
  setupMissingSet: t
}) {
  let r = p(e);
  return !!(m(r) && t.has((0, i.normalizeFieldLabel)(r.label)))
}

function b({
  steps: e,
  setupMissingSet: t,
  trackedFields: r = new Set
}) {
  let n = [],
    o = new Set;
  for (let i of e) {
    if (!g({
        step: i,
        setupMissingSet: t
      })) continue;
    let e = m(i);
    !e || o.has(e) || r.has(e) || (o.add(e), n.push(e))
  }
  return n
}

function y(e) {
  return S(e, o.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY)
}

function v(e) {
  return S(e, o.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY)
}

function w(e) {
  return y(e) ?? v(e)
}

function S(e, t) {
  let r = e?.[t];
  if (!r || "object" != typeof r) return null;
  let n = r;
  return "string" == typeof n.message && n.message.trim() ? n.message.trim() : null
}

function E(e) {
  return Array.isArray(e) && e.length > 0
}

function x(e) {
  return !!e && (E(e.fieldRequiredStatus) || E(e.filledFields) || E(e.missingFields))
}

function C(e) {
  let t = (e?.fieldRequiredStatus || []).filter(e => !!e),
    r = t.filter(e => e.required),
    n = r.length > 0 || 0 === t.length,
    o = n ? r : t,
    a = (0, i.buildNormalizedFieldLabelSet)(e?.filledFields || []);
  return {
    totalFields: o.map(e => e.label || ""),
    filledFields: o.filter(e => a.has((0, i.normalizeFieldLabel)(e.label || ""))).map(e => e
      .label || ""),
    requiredOnly: n
  }
}

function A({
  isFilling: e,
  hasVisibleResult: t,
  fillingMode: r
}) {
  return !!e && !t && "signup_autofill_flow" !== r
}

function k({
  isScanning: e,
  isFilling: t,
  fillingMode: r
}) {
  return !e && !("signup_autofill_flow" === r && t)
}

function T({
  step: e,
  currentField: t,
  filledSet: r,
  missingSet: n,
  isFilling: o
}) {
  let a = (0, i.normalizeFieldLabel)(e);
  return r.has(a) ? "completed" : o && t === e ? "current" : n.has(a) ? "missing" : "pending"
}

function F({
  childSteps: e,
  currentField: t,
  filledFields: r = [],
  missingFields: n = [],
  isFilling: o
}) {
  let a = (0, i.buildNormalizedFieldLabelSet)(r),
    l = (0, i.buildNormalizedFieldLabelSet)(n),
    s = e.map(e => T({
      step: e,
      currentField: t,
      filledSet: a,
      missingSet: l,
      isFilling: o
    }));
  return 0 === s.length ? "pending" : s.every(e => "completed" === e) ? "completed" : o && s.some(
    e => "current" === e || "missing" === e || "completed" === e) ? "current" : s.some(e =>
    "missing" === e) ? "missing" : "pending"
}

function I(e) {
  return e.some(e => p(e).metadata?.signup?.progressGroup === "create_account")
}

