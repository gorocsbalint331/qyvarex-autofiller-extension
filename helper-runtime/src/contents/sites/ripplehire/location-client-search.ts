// @ts-nocheck
/**
 * RippleHire location client search — readable TypeScript source of truth.
 */

import * as autofillClientSearch from "../../../api/autofill-client-search.js"
import * as cancellation from "../../methods/cancellation.js"
import * as profileLocationOriginalAnswer from "../profile-location-original-answer.ts"
import * as enums from "../../../core/enums.js"
let s = 5, u = 25, c = 128, d = 256, f = 256, p = 512, m = 250;
function h(e, t) {
  try {
    e.onDiagnostic?.({ ...t });
  } catch {
  }
}
function g(e) {
  try {
    return Array.isArray(e) ? Math.min(u, Math.max(0, e.length)) : 0;
  } catch {
    return 0;
  }
}
function b(e) {
  return e instanceof cancellation.CancelledError || e instanceof cancellation.SkippedError;
}
function y(e) {
  if (e.hidden) return false;
  let t = e.checkVisibility;
  if ("function" == typeof t) try {
    return t.call(e);
  } catch {
    return false;
  }
  return null !== e.offsetParent || "function" == typeof e.getClientRects && e.getClientRects().length > 0;
}
function getRipplehireLocationClientSearchSurface(e) {
  return e.matches("#indiaLocation[name=indiaLocation]") ? "bootstrap-typeahead" : e.matches("#currentLocation[name=currentLocation].pac-target-input") ? "google-places" : null;
}
function isRipplehireLocationClientSearchRule(e) {
  try {
    if (e.type !== enums.FIELD_TYPE.TEXT || "City" !== e.label && "Current Location" !== e.label) return false;
    let t = e.$input;
    return true === t.isConnected && false === t.disabled && !t.matches(":disabled") && null !== v(t) && y(t);
  } catch {
    return false;
  }
}
function getRipplehireLocationOriginalAnswer(e, t) {
  let r = profileLocationOriginalAnswer.getProfileLocationOriginalAnswer(e);
  if (r.value) return r;
  if ("string" == typeof t) {
    let e2 = t.trim();
    if (e2) return { value: e2, source: "regular-answer" };
  }
  return { value: "", source: "missing" };
}
function E(e) {
  return e.normalize("NFKC").replace(/\s+/g, " ").trim().toLowerCase();
}
function x(e, t, r = true) {
  if ("object" != typeof e || null === e) return { ok: false };
  try {
    let n = Object.getOwnPropertyDescriptor(e, t);
    if (!n || r && true !== n.enumerable || !Object.prototype.hasOwnProperty.call(n, "value")) return { ok: false };
    return { ok: true, value: n.value };
  } catch {
    return { ok: false };
  }
}
function C(e, t, r) {
  let n = x(e, t);
  return n.ok && "string" == typeof n.value && n.value.trim() && !(n.value.length > r) ? n.value : null;
}
function A(e, t, r) {
  return C(e, t, r);
}
function k(e) {
  if ("object" != typeof e || null === e) return null;
  let t = A(e, "candidate_key", c), r = A(e, "value", f), n = A(e, "text", p);
  return t && r && n ? { candidate_key: t, value: r, text: n } : null;
}
function T(e, t) {
  try {
    if (!Array.isArray(e)) return { ok: false, reason: "invalid" };
  } catch {
    return { ok: false, reason: "invalid" };
  }
  let r = x(e, "length", false);
  if (!r.ok || "number" != typeof r.value || !Number.isSafeInteger(r.value) || r.value < 0) return { ok: false, reason: "invalid" };
  if (r.value > t) return { ok: false, reason: "too-long" };
  let n = [];
  for (let t2 = 0; t2 < r.value; t2 += 1) {
    let r2 = x(e, String(t2));
    if (!r2.ok) return { ok: false, reason: "invalid" };
    n.push(r2.value);
  }
  return { ok: true, candidates: n };
}
function F(e) {
  let t = x(e, "action");
  return t.ok && "string" == typeof t.value ? t.value : null;
}
function I(e) {
  let t = x(e, "selected_values");
  if (!t.ok) return null;
  let r = T(t.value, 1);
  if (!r.ok || 1 !== r.candidates.length) return null;
  let n = r.candidates[0];
  return "string" == typeof n && n.trim() ? n : null;
}
function j(e) {
  let t;
  if ("object" != typeof e || null === e) return { ok: false };
  try {
    t = Reflect.ownKeys(e);
  } catch {
    return { ok: false };
  }
  if (2 !== t.length || !t.includes("status") || !t.includes("candidates")) return { ok: false };
  let r = x(e, "status"), n = x(e, "candidates");
  return r.ok && n.ok && ("ready" === r.value || "no-results" === r.value || "failed" === r.value) ? { ok: true, status: r.value, candidates: n.value } : { ok: false };
}
function D(e) {
  return "options" in e ? { resolve_session_id: e.resolve_session_id, round_id: e.round_id, options: e.options.map((e2) => ({ ...e2 })) } : { source: e.source, field_type: e.field_type, question: e.question, original_answer: e.original_answer };
}
async function P(e, t, r) {
  await new Promise((n) => {
    let o2 = new AbortController(), i2 = false, a2 = () => {
      i2 || (i2 = true, clearTimeout(l2), n());
    }, l2 = setTimeout(() => {
      o2.abort(), a2();
    }, m);
    Promise.resolve().then(() => r(e, t, o2.signal)).catch(() => void 0).finally(a2);
  });
}
function _(e) {
  try {
    let t = e.value;
    return "string" == typeof t ? t : "";
  } catch {
    return "";
  }
}
async function resolveRipplehireLocationClientSearch(e, t, r) {
  let n = [], a2 = _(e), l2 = "string" == typeof t ? t.trim() : "", f2 = false, p2 = false, m2 = async () => {
    p2 && !f2 && (f2 = true, await P(e, a2, r.clearTemporaryValue));
  }, y2 = async (e2) => (h(r, { stage: "failed", roundCount: n.length, failureReason: e2 }), await m2(), { success: false, rounds: n, failureReason: e2 });
  if (!l2) return y2("missing-original-answer");
  let v2 = "", w2 = { source: "ripplehire", field_type: "location", question: autofillClientSearch.getAutofillClientSearchQuestion("location"), original_answer: l2 }, S2 = /* @__PURE__ */ new Set(), x2 = /* @__PURE__ */ new Set(), A2 = null, L2 = 0;
  for (; ; ) {
    let t2;
    try {
      cancellation.checkpoint();
    } catch (e2) {
      throw b(e2) && await m2(), e2;
    }
    try {
      cancellation.checkpoint(), h(r, { stage: "request", requestKind: 0 === n.length ? "start" : "continuation", roundCount: n.length }), t2 = await r.requestStep(D(w2)), cancellation.checkpoint();
    } catch (e2) {
      if (b(e2)) throw await m2(), e2;
      return y2("request-error");
    }
    let o2 = F(t2);
    if (!o2) return y2("invalid-response");
    if (h(r, { stage: "response", action: o2, roundCount: n.length }), "REQUEST_SEARCH" === o2) {
      let o3;
      if (n.length >= s) return y2("round-limit");
      let a3 = C(t2, "resolve_session_id", c), l3 = C(t2, "round_id", c), f3 = C(t2, "search_input", d);
      if (!a3 || !l3 || !f3) return y2("invalid-response");
      let F2 = E(f3);
      if (!F2) return y2("invalid-search-request");
      if (v2 && v2 !== a3) return y2("changed-resolve-session-id");
      if (S2.has(l3) || x2.has(F2)) return y2("repeated-search");
      v2 = a3;
      try {
        cancellation.checkpoint(), p2 = true, o3 = await r.captureCandidates(e, f3), cancellation.checkpoint();
      } catch (e2) {
        if (b(e2)) throw await m2(), e2;
        return y2("capture-error");
      }
      let I2 = j(o3);
      if (!I2.ok) return y2("invalid-capture-result");
      if (h(r, { stage: "capture", status: I2.status, roundCount: n.length, candidateCount: g(I2.candidates) }), "failed" === I2.status) return y2("capture-failed");
      let D2 = u - L2, P2 = T(I2.candidates, D2);
      if (false === P2.ok) return y2("too-long" === P2.reason ? "candidate-limit" : "invalid-candidates");
      if ("no-results" === I2.status && 0 !== P2.candidates.length) return y2("invalid-capture-result");
      let _2 = [], R = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
      for (let e2 of P2.candidates) {
        let t3 = k(e2);
        if (!t3) return y2("invalid-candidate");
        if (R.has(t3.candidate_key)) return y2("duplicate-candidate");
        let r2 = O.get(t3.text);
        if (void 0 !== r2 && r2 !== t3.value) return y2("duplicate-candidate");
        R.add(t3.candidate_key), O.set(t3.text, t3.value), _2.push(t3);
      }
      A2 = { round_id: l3, search_input: f3, options: _2 }, n.push(A2), S2.add(l3), x2.add(F2), L2 += _2.length, w2 = { resolve_session_id: v2, round_id: l3, options: _2.map((e2) => ({ ...e2 })) }, h(r, { stage: "continuation", requestKind: "continuation", roundCount: n.length, candidateCount: _2.length });
      continue;
    }
    if ("SELECT_OPTIONS" === o2) {
      let o3 = I(t2);
      if (!A2 || null === o3) return y2("invalid-selection");
      let a3 = A2.options.filter((e2) => e2.text === o3);
      if (h(r, { stage: "selection", roundCount: n.length, matchCount: a3.length }), 0 === a3.length || 1 !== new Set(a3.map((e2) => e2.value)).size) return y2("invalid-selection");
      let l3 = { ...a3[0] };
      try {
        cancellation.checkpoint();
        let t3 = await r.commitCandidate(e, l3, A2.search_input);
        if (cancellation.checkpoint(), h(r, { stage: "commit", roundCount: n.length, committed: t3 }), !t3) return y2("commit-failed");
      } catch (e2) {
        if (b(e2)) throw await m2(), e2;
        return y2("commit-error");
      }
      return cancellation.checkpoint(), { success: true, rounds: n, selected: l3 };
    }
    if ("RETURN_EMPTY" === o2) return y2("empty");
    if ("RETRYABLE_FAILURE" === o2) return y2("retryable-failure");
    return y2("invalid-response");
  }
}

export {
  getRipplehireLocationClientSearchSurface,
  getRipplehireLocationOriginalAnswer,
  isRipplehireLocationClientSearchRule,
  resolveRipplehireLocationClientSearch,
}
