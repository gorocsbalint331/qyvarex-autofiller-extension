// @ts-nocheck
/**
 * Phenom — education school resolution (client-search + capture probe).
 */

import * as messaging from "@plasmohq/messaging";
import * as cancellation from "../../methods/cancellation.js";
import * as enums from "../../../core/enums.js";
import * as autofillClientSearch from "../../../api/autofill-client-search.js";
let s = Object.freeze({ prepare: 5e3, probe: 12e3, wait: 5e3, clear: 2e3, resolve: 6e4 }), u = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
class f extends Error {
  constructor() {
    super("Phenom Education attempt superseded"), this.name = "PhenomEducationAttemptSupersededError";
  }
}
class p extends Error {
  constructor(e) {
    super(`Phenom Education ${e} stage timed out`), this.stage = e, this.name = "PhenomEducationStageTimeoutError";
  }
}
function m(e) {
  d.get(e)?.abort();
  let t = (c.get(e) ?? 0) + 1, r = new AbortController();
  return c.set(e, t), d.set(e, r), u.delete(e), { version: t, controller: r };
}
function h(e, t) {
  d.get(e) === t && d.delete(e);
}
function g(e, t) {
  return c.get(e) === t;
}
function b(e, t) {
  let r = t?.[e];
  return "number" == typeof r && Number.isFinite(r) && r > 0 ? r : s[e];
}
function y(e, t, r, n, o2 = true) {
  o2 && cancellation.checkpoint();
  let a2 = new AbortController(), l2 = o2 ? cancellation.getCurrentCancelSignal() : null, s2 = o2 ? cancellation.getCurrentSkipSignal() : null;
  return new Promise((o3, u2) => {
    let c2, d2 = false, m2 = () => {
      void 0 !== c2 && clearTimeout(c2), l2?.removeEventListener("abort", g2), s2?.removeEventListener("abort", b2), n.removeEventListener("abort", y2);
    }, h2 = (e2) => {
      d2 || (d2 = true, m2(), e2());
    }, g2 = () => {
      a2.abort(), h2(() => u2(new cancellation.CancelledError()));
    }, b2 = () => {
      a2.abort(), h2(() => u2(new cancellation.SkippedError()));
    }, y2 = () => {
      a2.abort(), h2(() => u2(new f()));
    };
    c2 = setTimeout(() => {
      a2.abort(), h2(() => u2(new p(e)));
    }, t), l2?.addEventListener("abort", g2, { once: true }), s2?.addEventListener("abort", b2, { once: true }), n.addEventListener("abort", y2, { once: true }), n.aborted && y2(), Promise.resolve().then(() => {
      if (a2.signal.aborted) throw new f();
      return r(a2.signal);
    }).then((e2) => h2(() => o3(e2)), (e2) => h2(() => u2(e2)));
  });
}
function v(e) {
  if (!e || "object" != typeof e) return false;
  let t = e, r = t.result?.action;
  return !!t.operation && "object" == typeof t.operation && ("SELECT_OPTIONS" === r || "RETURN_EMPTY" === r || "RETRYABLE_FAILURE" === r) && Array.isArray(t.result?.selected_values);
}
function w(e) {
  return "string" == typeof e ? e.trim().replace(/\s+/g, " ").toLowerCase() : "";
}
function S(e) {
  let t = w(e);
  return "school" === t || "school name" === t || "schoolname" === t || "school or university" === t;
}
function E(e) {
  let t = Array.isArray(e) ? e : [e];
  for (let e2 of t) {
    if ("string" != typeof e2) continue;
    let t2 = e2.trim();
    if (t2) return t2;
  }
  return "";
}
function x(e) {
  return e && "object" == typeof e ? w(e.field_type) : "";
}
function C(e, t, r) {
  let n = { recordIndex: e, stage: t, action: "fallback", reason: r };
  console.warn(`[Phenom][Education] school resolution fallback record=${e} stage=${t} reason=${r}`, n);
}
function A(e, t) {
  console.info(`[Phenom][Education][ClientSearch] ${e} ${JSON.stringify(t)}`);
}
function k(e) {
  return e?.type === enums.FIELD_TYPE.SEARCH && S(e?.label);
}
function T(e, t) {
  if (!k(e) || !t || "object" != typeof t) return null;
  let r = Object.keys(t), n = w(e.label);
  return r.find((e2) => w(e2) === n) ?? r.find((e2) => S(e2)) ?? null;
}
function F(e, t) {
  let r = T(e, t);
  return r ? E(t.rawSchool) || E(t[`${r} original answer`]) || E(t[r]) : "";
}
function I(e, t, r) {
  u.delete(e);
  let n = T(e, t);
  if (!n || r?.result?.action !== "SELECT_OPTIONS" || !Array.isArray(r.result.selected_values)) return t;
  let o2 = r.result.selected_values.find((e2) => "string" == typeof e2 && e2.trim());
  if (!o2) return t;
  let i2 = Array.isArray(t.operation) ? [...t.operation] : [], a2 = i2.findIndex((e2) => "school" === x(e2));
  a2 >= 0 ? i2.splice(a2, 1, r.operation) : i2.push(r.operation);
  let l2 = { ...t, [n]: o2, operation: i2 };
  return u.set(e, o2), l2;
}
function j(e) {
  let t = u.get(e) ?? "";
  return u.delete(e), t;
}
function D(e) {
  return e.normalize("NFKC").trim().toLowerCase().replace(/\s+/gu, " ");
}
function P(e, t) {
  if (1 !== t.length) return null;
  let r = t[0];
  if ("string" != typeof r || !r.trim()) return null;
  let n = e.flatMap((e2) => e2.options).filter((e2) => e2.text === r);
  return 0 === n.length || 1 !== new Set(n.map((e2) => e2.value)).size ? null : n[0];
}
function _(e) {
  return "string" == typeof e && e.trim().length > 0;
}
async function L(e, t, r, n) {
  if (false === n.enabled) return u.delete(e), t;
  let o2 = T(e, t), a2 = F(e, t);
  if (!k(e) || !o2 || !a2) return u.delete(e), t;
  let s2 = m(e), c2 = e.$input, d2 = [], f2 = null, v2 = null;
  try {
    if (!c2) return t;
    for (let p2 = 0; p2 < 5; p2 += 1) {
      if (cancellation.checkpoint(), !g(e, s2.version)) return t;
      let m2 = v2 ? { resolve_session_id: f2, round_id: v2.round_id, options: v2.options } : { source: "phenom", field_type: "school", question: autofillClientSearch.getAutofillClientSearchQuestion("school"), original_answer: a2 };
      A("request", { recordIndex: r, roundIndex: p2, requestKind: v2 ? "options" : "initial", optionCount: v2?.options.length ?? 0 });
      let h2 = Date.now(), w2 = await y("resolve", b("resolve", n.stageTimeouts), () => n.requestStep(m2), s2.controller.signal);
      if (A("response", { recordIndex: r, roundIndex: p2, action: w2.action, elapsedMs: Date.now() - h2, hasResolveSessionId: "REQUEST_SEARCH" === w2.action && _(w2.resolve_session_id), hasRoundId: "REQUEST_SEARCH" === w2.action && "string" == typeof w2.round_id && w2.round_id.trim().length > 0, searchInputLength: "REQUEST_SEARCH" === w2.action ? w2.search_input.length : 0, selectedCount: "SELECT_OPTIONS" === w2.action ? w2.selected_values.length : 0 }), cancellation.checkpoint(), !g(e, s2.version)) return t;
      if ("REQUEST_SEARCH" === w2.action) {
        if (!_(w2.resolve_session_id)) return C(r, "client-search", "missing_resolve_session_id"), t;
        if (null !== f2 && w2.resolve_session_id !== f2) return C(r, "client-search", "changed_resolve_session_id"), t;
        f2 = w2.resolve_session_id;
        let o3 = D(w2.search_input);
        if (!o3 || !w2.round_id.trim() || d2.some((e2) => D(e2.search_input) === o3 || e2.round_id === w2.round_id)) return C(r, "client-search", "repeated_search"), t;
        let a3 = Date.now(), l2 = await y("probe", b("probe", n.stageTimeouts), () => n.captureCandidates(c2, w2.search_input), s2.controller.signal);
        if (A("candidate-capture-finish", { recordIndex: r, roundIndex: p2, status: l2.status, candidateCount: l2.candidates.length, elapsedMs: Date.now() - a3 }), cancellation.checkpoint(), !g(e, s2.version)) return t;
        if ("failed" === l2.status) return C(r, "client-search", "search_failed"), t;
        let u2 = l2.candidates.slice(0, 25);
        v2 = { round_id: w2.round_id, search_input: w2.search_input, options: u2 }, d2.push(v2);
        continue;
      }
      if ("SELECT_OPTIONS" === w2.action) {
        let a3 = P(d2, w2.selected_values);
        if (!a3) return C(r, "client-search", "invalid_selection"), t;
        let l2 = d2.find((e2) => e2.options.some((e3) => e3.text === a3.text && e3.value === a3.value)), f3 = await y("resolve", b("resolve", n.stageTimeouts), () => n.commitCandidate(c2, a3, l2?.search_input, a3.value), s2.controller.signal);
        if (cancellation.checkpoint(), !g(e, s2.version)) return t;
        if (!f3) return C(r, "client-search", "exact_commit_failed"), t;
        return u.set(e, a3.text), { ...t, [o2]: a3.text };
      }
      if ("RETURN_EMPTY" === w2.action || "RETRYABLE_FAILURE" === w2.action) return C(r, "client-search", "RETURN_EMPTY" === w2.action ? "empty" : "retryable_failure"), t;
    }
    return C(r, "client-search", "round_limit"), t;
  } catch (n2) {
    if (n2 instanceof cancellation.CancelledError || n2 instanceof cancellation.SkippedError) throw n2;
    if (!g(e, s2.version)) return t;
    return console.warn("[Phenom][Education][ClientSearch] stage-error " + JSON.stringify({ recordIndex: r, errorName: n2 instanceof Error ? n2.name : typeof n2, errorMessage: n2 instanceof Error ? n2.message : "unknown", timeoutStage: n2 instanceof p ? n2.stage : null, completedRoundCount: d2.length })), C(r, "client-search", "stage_failed"), t;
  } finally {
    h(e, s2.controller);
  }
}
async function R(e, t, r, n) {
  if (false === n.enabled) return u.delete(e), t;
  let o2 = m(e);
  try {
    return await O(e, t, r, n, o2);
  } finally {
    h(e, o2.controller);
  }
}
async function O(e, t, r, n, a2) {
  let l2 = a2.version;
  if (!k(e)) return t;
  let s2 = F(e, t);
  if (!s2) return t;
  let u2 = e.$input, c2 = n.sendToBackground ?? messaging.sendToBackground, d2 = "prepare", f2 = "";
  try {
    let o2, m2;
    let h2 = await y("prepare", b("prepare", n.stageTimeouts), () => c2({ name: "preparePhenomSchoolCapture", body: { expectedValue: s2 } }), a2.controller.signal);
    if (cancellation.checkpoint(), !g(e, l2)) return t;
    let w2 = "string" == typeof h2?.captureId ? h2.captureId : "";
    if (!w2.trim()) return C(r, d2, "invalid_capture_id"), t;
    let S2 = false, E2 = true;
    try {
      if (d2 = "probe", await y("probe", b("probe", n.stageTimeouts), (e2) => n.typeProbe(u2, s2, e2), a2.controller.signal), cancellation.checkpoint(), g(e, l2) || (E2 = false), d2 = "wait", E2) {
        let t2 = await y("wait", b("wait", n.stageTimeouts), () => c2({ name: "waitForPhenomSchoolCapture", body: { captureId: w2 } }), a2.controller.signal);
        cancellation.checkpoint(), S2 = (E2 = g(e, l2)) && t2?.ready === true;
      }
    } catch (e2) {
      f2 = d2, o2 = e2;
    } finally {
      if (E2 = g(e, l2)) try {
        d2 = "clear", await y("clear", b("clear", n.stageTimeouts), (t2) => {
          if (g(e, l2)) return n.clearProbe(u2, t2);
        }, a2.controller.signal, false);
      } catch (e2) {
        m2 = e2;
      }
      E2 = g(e, l2);
    }
    if (o2 instanceof cancellation.CancelledError || o2 instanceof cancellation.SkippedError) throw o2;
    if (m2 instanceof cancellation.CancelledError || m2 instanceof cancellation.SkippedError) throw m2;
    if (cancellation.checkpoint(), !E2) return t;
    if (o2) throw o2;
    if (m2) return C(r, "clear", m2 instanceof p ? "stage_timeout" : "clear_failed"), t;
    if (!S2) return C(r, "wait", "capture_not_ready"), t;
    d2 = "resolve";
    let x2 = await y("resolve", b("resolve", n.stageTimeouts), () => c2({ name: "resolveCapturedPhenomSchool", body: { captureId: w2 } }), a2.controller.signal);
    if (cancellation.checkpoint(), !g(e, l2) || null === x2) return t;
    if (!v(x2)) return C(r, "resolve", "malformed_resolution"), t;
    if (!g(e, l2)) return t;
    return I(e, t, x2);
  } catch (n2) {
    if (n2 instanceof cancellation.CancelledError || n2 instanceof cancellation.SkippedError) throw n2;
    if (!g(e, l2)) return t;
    return C(r, f2 || d2, n2 instanceof p ? "stage_timeout" : "stage_failed"), t;
  }
}
export {
  s as PHENOM_EDUCATION_STAGE_TIMEOUTS,
  I as applyPhenomSchoolResolution,
  E as getFirstNonblankPhenomSchoolValue,
  F as getPhenomSchoolOriginalAnswer,
  T as getPhenomSchoolRecordKey,
  k as isPhenomSchoolRule,
  L as resolvePhenomEducationClientSearchRecordForRule,
  R as resolvePhenomEducationRecordForRule,
  j as takeResolvedPhenomSchoolValue
};
