/**
 * Parcel module id: 3KzDR
 * Resolved path: api/autofill-client-search.js (oracle restore)
 * Dependencies:
 *   ./env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getAutofillClientSearchQuestion", () => a), n.export(r,
  "normalizeAutofillClientSearchStepRequest", () => k), n.export(r,
  "validateAutofillClientSearchStepResponse", () => F), n.export(r,
  "fetchAutofillClientSearchStep", () => I);
var o = e("./env-resolver");
let i = Object.freeze({
  school: "What school did you attend?",
  major: "What was your field of study?",
  degree: "What degree did you earn?",
  location: "What city do you live in?",
  company: "What company did you work for?"
});

function a(e) {
  return i[e]
}
let l = 512,
  s = 256,
  u = 256,
  c = 128,
  d = 25,
  f = 6e4,
  p = new Set(["REQUEST_INVALID", "MODEL_CALL_FAILED", "MODEL_RESPONSE_INVALID", "MODEL_RETRYABLE",
    "SESSION_STATE_INVALID", "SESSION_CONFLICT", "SESSION_STORE_FAILED", "INTERNAL_ERROR"
  ]),
  m = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
  h = ["source", "field_type", "question", "original_answer"],
  g = ["resolve_session_id", "round_id", "options"],
  b = ["candidate_key", "value", "text", "domain"];

function y(e) {
  return Error(`Invalid autofill client-search payload: ${e}`)
}

function v(e, t) {
  if ("object" != typeof e || null === e || Array.isArray(e) || Object.getPrototypeOf(e) !== Object
    .prototype && null !== Object.getPrototypeOf(e)) throw y(`${t} must be an object`)
}

function w(e, t, r, n = t) {
  let o = Reflect.ownKeys(e);
  for (let n of o) {
    if ("string" != typeof n) throw y(`${r} contains a symbol field`);
    if (!t.includes(n)) throw y(`${r} contains unknown field ${n}`);
    let o = Object.getOwnPropertyDescriptor(e, n);
    if (!o || !0 !== o.enumerable || !Object.prototype.hasOwnProperty.call(o, "value")) throw y(
      `${r}.${n} must be an enumerable data property`)
  }
  let i = n.find(e => !o.includes(e));
  if (i) throw y(`${r} is missing field ${i}`)
}

function S(e, t, r) {
  let n = Object.getOwnPropertyDescriptor(e, t);
  if (!n || !0 !== n.enumerable || !Object.prototype.hasOwnProperty.call(n, "value")) throw y(
    `${r} must be an enumerable data property`);
  return n.value
}

function E(e, t, r) {
  if ("string" != typeof e || 0 === e.trim().length || e.length > t) throw y(
    `${r} must be a non-empty string no longer than ${t}`);
  return e
}

function x(e) {
  return v(e, "option"), w(e, b, "option", ["candidate_key", "value", "text"]), {
    candidate_key: E(e.candidate_key, c, "option.candidate_key"),
    value: E(e.value, u, "option.value"),
    text: E(e.text, l, "option.text"),
    ...Object.hasOwn(e, "domain") ? {
      domain: E(e.domain, u, "option.domain")
    } : {}
  }
}

function C(e) {
  if (!Array.isArray(e)) throw y("request.options must be an array");
  if (e.length > d) throw y(`request.options cannot exceed ${d}`);
  let t = [],
    r = new Set;
  for (let n of e) {
    let e = x(n);
    if (r.has(e.candidate_key)) throw y("request.options contains a duplicate candidate_key");
    r.add(e.candidate_key), t.push(e)
  }
  return t
}

function A(e) {
  if ("icims" !== e.source && "phenom" !== e.source && "smartrecruiters" !== e.source &&
    "avature" !== e.source && "oraclecloud" !== e.source && "jacobs" !== e.source &&
    "ripplehire" !== e.source && "kula" !== e.source) throw y(
    "request.source must equal icims, phenom, smartrecruiters, avature, oraclecloud, jacobs, ripplehire, or kula"
    );
  if ("school" !== e.field_type && "major" !== e.field_type && "degree" !== e.field_type &&
    "location" !== e.field_type && "company" !== e.field_type) throw y(
    "request.field_type must equal school, major, degree, location, or company");
  if ("company" === e.field_type && "kula" !== e.source) throw y("company requires source kula");
  return {
    source: e.source,
    field_type: e.field_type,
    question: E(e.question, l, "request.question"),
    original_answer: E(e.original_answer, l, "request.original_answer")
  }
}

function k(e) {
  v(e, "request");
  let t = Reflect.ownKeys(e);
  return t.includes("source") ? (w(e, h, "request"), A(e)) : (w(e, g, "request"), {
    resolve_session_id: E(e.resolve_session_id, c, "request.resolve_session_id"),
    round_id: E(e.round_id, c, "request.round_id"),
    options: C(e.options)
  })
}

function T(e, t) {
  v(e, "response");
  let r = S(e, "action", "response.action");
  if ("REQUEST_SEARCH" === r) {
    w(e, ["action", "resolve_session_id", "round_id", "search_input", "reason"],
      "REQUEST_SEARCH response", ["action", "resolve_session_id", "round_id", "search_input"]);
    let r = E(e.resolve_session_id, c, "response.resolve_session_id"),
      n = E(e.round_id, c, "response.round_id");
    if ("round_id" in t && t.round_id === n) throw y("REQUEST_SEARCH must use a fresh round_id");
    let o = E(e.search_input, s, "response.search_input"),
      i = {
        action: "REQUEST_SEARCH",
        resolve_session_id: r,
        round_id: n,
        search_input: o
      };
    return Object.prototype.hasOwnProperty.call(e, "reason") && (i.reason = E(e.reason, l,
      "response.reason")), i
  }
  if ("SELECT_OPTIONS" === r) {
    if (!("options" in t)) throw y("SELECT_OPTIONS is not allowed on a start request");
    if (w(e, ["action", "selected_values", "round_id", "selected_candidate_key"],
        "SELECT_OPTIONS response", ["action", "selected_values"]), !Array.isArray(e
      .selected_values) || 1 !== e.selected_values.length) throw y(
      "SELECT_OPTIONS response.selected_values must contain exactly one item");
    let r = E(e.selected_values[0], l, "response.selected_values[0]");
    if (Object.hasOwn(e, "round_id") || Object.hasOwn(e, "selected_candidate_key")) {
      let n = E(e.round_id, c, "response.round_id"),
        o = E(e.selected_candidate_key, c, "response.selected_candidate_key"),
        i = t.options.filter(e => e.candidate_key === o && e.text === r);
      if (n !== t.round_id || 1 !== i.length) throw y(
        "SELECT_OPTIONS must reference current round and candidate identity");
      return {
        action: "SELECT_OPTIONS",
        selected_values: [i[0].text],
        round_id: n,
        selected_candidate_key: o
      }
    }
    let n = t.options.filter(e => e.text === r);
    if (0 === n.length) throw y("SELECT_OPTIONS must reference exact text from current options");
    if (1 !== new Set(n.map(e => e.value)).size) throw y(
      "SELECT_OPTIONS text must identify one canonical native value");
    return {
      action: "SELECT_OPTIONS",
      selected_values: [n[0].text]
    }
  }
  if ("RETURN_EMPTY" === r) {
    if (w(e, ["action"], "RETURN_EMPTY response"), !("options" in t) && "school" !== t.field_type)
      throw y("RETURN_EMPTY is not allowed on a start request");
    return {
      action: "RETURN_EMPTY"
    }
  }
  if ("RETRYABLE_FAILURE" === r) {
    w(e, ["action", "failure_code", "diagnostic_id", "retry_after_ms"],
      "RETRYABLE_FAILURE response", ["action"]);
    let t = Object.prototype.hasOwnProperty.call(e, "failure_code"),
      r = Object.prototype.hasOwnProperty.call(e, "diagnostic_id"),
      n = Object.prototype.hasOwnProperty.call(e, "retry_after_ms");
    if (!t && !r && !n) return {
      action: "RETRYABLE_FAILURE"
    };
    if (!t || !r) throw y(
      "RETRYABLE_FAILURE failure_code and diagnostic_id must be provided together");
    let o = S(e, "failure_code", "response.failure_code"),
      i = S(e, "diagnostic_id", "response.diagnostic_id");
    if ("string" != typeof o || !p.has(o)) throw y("RETRYABLE_FAILURE failure_code is unsupported");
    if ("string" != typeof i || !m.test(i)) throw y(
      "RETRYABLE_FAILURE diagnostic_id must be a canonical lowercase UUID");
    let a = {
      action: "RETRYABLE_FAILURE",
      failure_code: o,
      diagnostic_id: i
    };
    if (n) {
      let t = S(e, "retry_after_ms", "response.retry_after_ms");
      if ("number" != typeof t || !Number.isSafeInteger(t) || t < 0 || t > f) throw y(
        `RETRYABLE_FAILURE retry_after_ms must be an integer between 0 and ${f}`);
      a.retry_after_ms = t
    }
    return a
  }
  throw y("response.action is unsupported")
}

function F(e, t) {
  let r = k(t);
  return T(e, r)
}
async function I(e) {
  let t;
  let r = k(e),
    n = await fetch(`${o.API_DOMAIN}/swan/autofill/autofill-option-resolve/client-search-step`, {
      credentials: "include",
      method: "POST",
      headers: {
        accept: "*/*",
        "cache-control": "no-cache",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(r)
    });
  if (!n.ok) throw Error(
    `Failed to resolve autofill client-search step: ${n.status} ${n.statusText}`);
  try {
    t = await n.json()
  } catch {
    throw Error("Failed to parse autofill client-search response")
  }
  if (v(t, "Swan response"), !Object.prototype.hasOwnProperty.call(t, "success") || !0 !== t
    .success || !Object.prototype.hasOwnProperty.call(t, "result")) throw y(
    "Swan response does not contain a successful result");
  return F(t.result, r)
}

