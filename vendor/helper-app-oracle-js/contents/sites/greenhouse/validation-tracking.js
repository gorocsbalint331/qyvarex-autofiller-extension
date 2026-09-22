/**
 * Parcel module id: aVQsr
 * Resolved path: contents/sites/greenhouse/validation-tracking.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "buildGreenhouseRuntimeValidationTrackingData", () => v), n
  .export(r, "getGreenhouseRuntimeValidationLogEntries", () => S);
let o = {
  school: "School",
  discipline: "Discipline"
};

function i(e) {
  return "string" == typeof e ? e.trim() : Array.isArray(e) ? e.find(e => "string" == typeof e && e
    .trim()) ?? "" : ""
}

function a(e) {
  return String(e ?? "").trim().toLowerCase().replace(/&/g, " and ").replace(/[^\p{L}\p{N}]+/gu, "")
}

function l(e, t) {
  let r = i(t);
  if (!r) return;
  let n = a(r);
  !n || e.some(e => a(e) === n) || e.push(r)
}

function s(e) {
  return String(e ?? "").replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function u(e, t) {
  if (!e) return {
    found: !1,
    value: ""
  };
  if (Object.prototype.hasOwnProperty.call(e, t)) return {
    found: !0,
    value: i(e[t])
  };
  let r = s(t);
  for (let [t, n] of Object.entries(e))
    if (s(t) === r) return {
      found: !0,
      value: i(n)
    };
  return {
    found: !1,
    value: ""
  }
}

function c(e, t) {
  return "school" === t ? i(e?.school) : i(e?.discipline)
}

function d(e, t) {
  return "school" === t ? e?.schoolPayload : e?.disciplinePayload
}

function f({
  record: e,
  resolveRecord: t,
  fieldType: r
}) {
  let n = [],
    o = d(t, r);
  return l(n, c(t, r)), l(n, o?.original_answer), "school" === r ? (l(n, e?.rawSchool), l(n, e?.[
    "School original answer"
  ]), l(n, e?.School)) : (l(n, e?.rawMajor), l(n, e?.rawDegree), l(n, e?.[
    "Discipline original answer"
  ]), l(n, e?.Discipline)), n
}

function p({
  sourceValue: e,
  resolveValue: t,
  committedValue: r,
  attemptedCandidates: n
}) {
  let o = a(r),
    i = !!o && n.some(e => a(e) === o);
  return {
    status: n.length ? o ? i ? "matched" : "mismatched" : "empty" : "not_checked",
    sourceValue: e,
    resolveValue: t,
    committedValue: r,
    attemptedCandidates: n
  }
}

function m(e, t, r) {
  return e?.find(e => e.fieldType === t && ("location" === t || e.index === r))
}

function h(e) {
  return "empty" === e ? "reset_after_empty" : "not_checked" === e ? "reset_after_not_checked" :
    "reset_after_mismatch"
}

function g(e, t) {
  return e && t ? {
    ...e,
    status: t.resetApplied ? h(t.initialStatus) : "matched" === e.status ? "retry_matched" : e
      .status,
    initialStatus: t.initialStatus,
    initialCommittedValue: t.initialCommittedValue,
    retryCount: t.retryCount,
    resetApplied: !0 === t.resetApplied
  } : e
}

function b({
  record: e,
  snapshotRecord: t,
  resolveRecord: r,
  fieldType: n
}) {
  let i = o[n],
    a = u(t, i),
    l = c(r, n),
    s = d(r, n);
  if (!a.found && !l && !s) return null;
  let m = f({
    record: e,
    resolveRecord: r,
    fieldType: n
  });
  return p({
    sourceValue: s?.original_answer ?? m[0] ?? "",
    resolveValue: l,
    committedValue: a.value,
    attemptedCandidates: m
  })
}

function y({
  autofillSnapshot: e,
  location: t
}) {
  if (!t) return null;
  let r = [];
  for (let e of t.attemptedCandidates ?? []) l(r, e);
  l(r, t.resolveValue);
  let n = u(e, t.label);
  return {
    label: t.label,
    ...p({
      sourceValue: t.sourceValue,
      resolveValue: t.resolveValue ?? "",
      committedValue: n.value,
      attemptedCandidates: r
    })
  }
}

function v({
  educationRecords: e = [],
  educationSnapshotRecords: t = [],
  educationResolveRecords: r = [],
  autofillSnapshot: n,
  location: o,
  retryResults: i
}) {
  let a = {};
  Array.isArray(e) && e.length > 0 && (a.education = Array.from({
    length: e.length
  }, (n, o) => {
    let a = e[o] ?? {},
      l = t[o],
      s = r[o];
    return {
      school: g(b({
        record: a,
        snapshotRecord: l,
        resolveRecord: s,
        fieldType: "school"
      }), m(i, "school", o)),
      discipline: g(b({
        record: a,
        snapshotRecord: l,
        resolveRecord: s,
        fieldType: "discipline"
      }), m(i, "discipline", o))
    }
  }));
  let l = g(y({
    autofillSnapshot: n,
    location: o
  }), m(i, "location"));
  return l && (a.location = l), Object.keys(a).length > 0 ? {
    validation: a
  } : {}
}

function w(e, t, r, n) {
  return {
    ..."number" == typeof n ? {
      index: n
    } : {},
    fieldType: t,
    fieldLabel: r,
    level: "matched" === e.status || "retry_matched" === e.status ? "info" : "warn",
    status: e.status,
    committedValue: e.committedValue ?? "",
    attemptedCandidates: Array.isArray(e.attemptedCandidates) ? e.attemptedCandidates : []
  }
}

function S(e) {
  let t = [],
    r = e?.validation?.education;
  Array.isArray(r) && r.forEach((e, r) => {
    ["school", "discipline"].forEach(n => {
      let i = e?.[n];
      i?.status && t.push(w(i, n, o[n], r))
    })
  });
  let n = e?.validation?.location;
  return n?.status && t.push(w(n, "location", n.label || "Location")), t
}

