/**
 * Parcel module id: aet9i
 * Resolved path: contents/sites/myworkday/education-operation.js (oracle restore)
 * Dependencies:
 *   ../../../core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/resolve-trace-tracking -> da2o3  =>  _tilde_contents/sites/resolve-trace-tracking.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "buildWorkdayEducationRuntimeValidationRetryRecord", () => a), n
  .export(r, "shouldResolveWorkdayEducationLabel", () => _), n.export(r,
    "getWorkdayEducationOriginalAnswerFromRecord", () => L), n.export(r,
    "buildWorkdayEducationOperation", () => R), n.export(r,
    "mergeWorkdayEducationOperationIntoRecord", () => O), n.export(r,
    "applyWorkdayEducationResolveResult", () => M), n.export(r,
    "buildWorkdayEducationResolveTrackingData", () => N), n.export(r,
    "buildWorkdayEducationRuntimeValidationTrackingData", () => q), n.export(r,
    "getWorkdayEducationRuntimeValidationLogEntries", () => U), n.export(r,
    "getUnresolvedWorkdayEducationRuntimeValidationLogEntries", () => H), n.export(r,
    "resolveWorkdayEducationRecord", () => Y), n.export(r,
    "resolveWorkdayEducationRecordsInParallel", () => z);
var o = e("~contents/sites/resolve-trace-tracking"),
  i = e("../../../core/enums");

function a({
  record: e,
  ruleLabel: t,
  attemptedCandidates: r
}) {
  let n = Array.from(new Set(r.map(e => String(e ?? "").trim()).filter(Boolean)));
  return t && 0 !== n.length ? {
    ...e,
    [t]: n
  } : {
    ...e
  }
}
let l = {
    school: "School",
    discipline: "Field of Study",
    degree: "Degree"
  },
  s = {
    school: new Set(["school"]),
    discipline: new Set(["fieldofstudy", "discipline"]),
    degree: new Set(["degree"])
  };

function u(e) {
  return String(e ?? "").trim().toLowerCase()
}

function c(e) {
  let t = u(e);
  return "field of study" === t ? "discipline" : "degree" === t ? "degree" : "school" === t ||
    "school or university" === t ? "school" : null
}

function d(e) {
  let t = u(e);
  return "field of study" === t ? "Field of Study" : "degree" === t ? "Degree" : "school" === t ?
    "School" : "school or university" === t ? "School or University" : e
}

function f(e) {
  return "string" == typeof e?.field_type && e.field_type.trim() ? u(e.field_type) : ""
}

function p(e, t) {
  return s[t].has(f(e))
}

function m(e, t) {
  let r = Array.isArray(e?.operation) ? e.operation : [];
  return r.find(e => p(e ?? {}, t)) ?? null
}

function h(e) {
  return e ? {
    original_answer: String(e.original_answer ?? "")
  } : null
}

function g(e) {
  return Array.from({
    length: e.length
  }, (t, r) => {
    let n = e[r] ?? {},
      i = m(n, "school"),
      a = m(n, "discipline"),
      l = m(n, "degree");
    return {
      recordIndex: r,
      school: (0, o.buildResolveTraceField)("school", i, y(n, "school")),
      discipline: (0, o.buildResolveTraceField)("discipline", a, y(n, "discipline")),
      degree: (0, o.buildResolveTraceField)("degree", l, y(n, "degree"))
    }
  })
}

function b(e) {
  let t = e.find(e => m(e ?? {}, "school")),
    r = e.find(e => m(e ?? {}, "discipline")),
    n = e.find(e => m(e ?? {}, "degree"));
  return {
    school: (0, o.cloneAutofillOperationCommon)(m(t ?? {}, "school")),
    discipline: (0, o.cloneAutofillOperationCommon)(m(r ?? {}, "discipline")),
    degree: (0, o.cloneAutofillOperationCommon)(m(n ?? {}, "degree"))
  }
}

function y(e, t) {
  return "school" === t ? S(e?.["School or University"]) || S(e?.School) : "degree" === t ? S(e
    ?.Degree) || S(e?.rawDegree) : S(e?.["Field of Study"]) || S(e?.Study)
}

function v(e) {
  let t = c(e.label);
  return !!t && ("school" === t ? e.type === i.FIELD_TYPE.SEARCH || e.type === i.FIELD_TYPE
    .MULTI_SELECT : "discipline" === t)
}

function w(e) {
  return e.selected_values.find(e => "string" == typeof e && e.trim()) ?? ""
}

function S(e) {
  return "string" == typeof e ? e.trim() : Array.isArray(e) ? e.find(e => "string" == typeof e && e
    .trim()) ?? "" : ""
}

function E(e) {
  let t = e.trim();
  if (!t) return !1;
  if (/^\d+$/.test(t)) return !0;
  try {
    let e = JSON.parse(t);
    if (Array.isArray(e) && e.length > 0) return e.every(e => "string" == typeof e && /^\d+$/.test(e
      .trim()))
  } catch {}
  return !1
}

function x(e) {
  return String(e ?? "").trim().toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "")
}

function C(e, t) {
  let r = S(t);
  if (!r) return;
  let n = x(r);
  !n || e.some(e => x(e) === n) || e.push(r)
}

function A(e, t) {
  let r = m(e, t),
    n = [];
  return r ? (C(n, y(e, t)), C(n, r.original_answer)) : (C(n, y(e, t)), "discipline" === t ? (C(n, e
    ?.rawDegree), C(n, e?.Study)) : "degree" === t ? (C(n, e?.rawDegree), C(n, e?.Degree)) : (C(
    n, e?.rawSchool), C(n, e?.School))), n
}

function k(e, t) {
  return e ? "discipline" === t ? S(e?.["Field of Study"]) || S(e?.Study) : "degree" === t ? S(e
    ?.Degree) : S(e?.["School or University"]) || S(e?.School) : ""
}

function T({
  record: e,
  snapshotRecord: t,
  fieldType: r
}) {
  let n = m(e ?? {}, r),
    o = A(e ?? {}, r),
    i = k(t, r),
    a = x(i),
    l = !!a && o.some(e => x(e) === a);
  return {
    status: o.length ? a ? l ? "matched" : "mismatched" : "empty" : "not_checked",
    sourceValue: n?.original_answer ?? o[0] ?? "",
    resolveValue: n ? y(e ?? {}, r) : "",
    committedValue: i,
    attemptedCandidates: o
  }
}

function F(e, t, r) {
  return e?.find(e => e.fieldType === t && e.index === r)
}

function I(e) {
  return "empty" === e ? "reset_after_empty" : "not_checked" === e ? "reset_after_not_checked" :
    "reset_after_mismatch"
}

function j(e, t) {
  return e && t ? {
    ...e,
    status: t.resetApplied ? I(t.initialStatus) : "matched" === e.status ? "retry_matched" : e
      .status,
    initialStatus: t.initialStatus,
    initialCommittedValue: t.initialCommittedValue,
    retryCount: t.retryCount,
    resetApplied: !0 === t.resetApplied
  } : e
}

function D({
  record: e,
  rule: t
}) {
  return !!P(t, "school") && (!!m(e ?? {}, "school") || (t?.children ?? []).some(e => "school" ===
    c(e.label) && v(e)))
}

function P(e, t) {
  return !e || (e.children ?? []).some(e => c(e.label) === t)
}

function _(e) {
  let t = c(e);
  return "discipline" === t
}

function L(e, t) {
  let r = c(t);
  if ("school" === r) {
    let t = S(e?.rawSchool);
    if (t) return t;
    let r = S(e?.["School or University"]);
    return r || S(e?.School)
  }
  if ("degree" === r) {
    let t = S(e?.rawDegree);
    return t || S(e?.Degree)
  }
  let n = S(e?.["Field of Study"]);
  if (n && !E(n)) return n;
  let o = S(e?.Study);
  if (o && !E(o)) return o;
  let i = S(e?.rawDegree);
  return i || ""
}

function R({
  apiBase: e,
  label: t,
  originalAnswer: r
}) {
  let n = c(t);
  if (!e || !e.trim()) throw Error(
    `Unable to build workday education operation for ${t}: apiBase is empty`);
  if (!n) throw Error(`Unable to build workday education operation for ${t}: unsupported label`);
  let o = {
      school: {
        question: "What school did you attend?",
        description: "Search and select your school.",
        searchRequestUrl: `${e}/schools`,
        searchParamDescription: "Search term for the school dropdown."
      },
      discipline: {
        question: "What was your field of study?",
        description: "Search and select your field of study.",
        searchRequestUrl: `${e}/values/educations/fieldsOfStudy`,
        searchParamDescription: "Search term for the field of study dropdown."
      },
      degree: {
        question: "What degree did you earn?",
        description: "Search and select your degree.",
        searchRequestUrl: `${e}/values/educations/degrees`,
        searchParamDescription: "Search term for the degree dropdown."
      }
    },
    {
      question: i,
      description: a,
      searchRequestUrl: l,
      searchParamDescription: s
    } = o[n];
  return {
    field_type: n,
    question: i,
    description: a,
    original_answer: r,
    search_request_schema: {
      url: l,
      allowed_methods: ["GET"],
      headers: {
        accept: "application/json"
      },
      params: [{
        name: "search",
        location: "query",
        description: s,
        default_value: "",
        isSearchParam: !0
      }]
    }
  }
}

function O(e, t, r) {
  let n = Array.isArray(e.operation) ? [...e.operation] : [],
    o = {
      ...e,
      operation: n
    },
    i = c(t) ?? ("school" === f(r) ? "school" : "degree" === f(r) ? "degree" : "discipline"),
    a = n.findIndex(e => p(e ?? {}, i));
  return a >= 0 ? n.splice(a, 1, r) : n.push(r), o
}

function M({
  record: e,
  label: t,
  operation: r,
  result: n
}) {
  if ("SELECT_OPTIONS" !== n.action) return e;
  let o = w(n);
  return o ? {
    ...O(e, t, r),
    [d(t)]: o
  } : e
}

function N(e) {
  return Array.isArray(e) && 0 !== e.length ? {
    resolve: {
      education: Array.from({
        length: e.length
      }, (t, r) => {
        let n = e[r],
          o = m(n ?? {}, "school"),
          i = m(n ?? {}, "discipline"),
          a = m(n ?? {}, "degree");
        return {
          school: o ? y(n ?? {}, "school") : "",
          discipline: i ? y(n ?? {}, "discipline") : "",
          degree: a ? y(n ?? {}, "degree") : ""
        }
      })
    },
    resolvePayload: {
      educationCommon: b(e),
      education: Array.from({
        length: e.length
      }, (t, r) => {
        let n = e[r];
        return {
          school: h(m(n ?? {}, "school")),
          discipline: h(m(n ?? {}, "discipline")),
          degree: h(m(n ?? {}, "degree"))
        }
      })
    },
    resolveTrace: {
      education: g(e)
    }
  } : {}
}

function $(e, t) {
  return t ? ["school", "discipline", "degree"].map(r => {
    let n = x(k(t, r));
    return n && A(e, r).some(e => x(e) === n) ? 1 : 0
  }).reduce((e, t) => e + t, 0) : 0
}

function B(e, t) {
  let r = new Set;
  return e.map((e, n) => {
    let o = -1,
      i = 0;
    for (let n = 0; n < t.length; n++) {
      if (r.has(n)) continue;
      let a = $(e ?? {}, t[n]);
      a > i && (i = a, o = n)
    }
    return -1 !== o ? (r.add(o), t[o]) : r.has(n) ? void 0 : (r.add(n), t[n])
  })
}

function q(e, t = [], r = [], n = []) {
  if (!Array.isArray(e) || 0 === e.length) return {};
  let o = B(e, t);
  return {
    validation: {
      education: Array.from({
        length: e.length
      }, (t, i) => {
        let a = e[i] ?? {},
          l = o[i],
          s = r[i];
        return {
          school: D({
            record: a,
            rule: s
          }) ? j(T({
            record: a,
            snapshotRecord: l,
            fieldType: "school"
          }), F(n, "school", i)) : null,
          discipline: P(s, "discipline") ? j(T({
            record: a,
            snapshotRecord: l,
            fieldType: "discipline"
          }), F(n, "discipline", i)) : null,
          degree: P(s, "degree") ? j(T({
            record: a,
            snapshotRecord: l,
            fieldType: "degree"
          }), F(n, "degree", i)) : null
        }
      })
    }
  }
}

function U(e) {
  let t = e?.validation?.education;
  return Array.isArray(t) ? t.flatMap((e, t) => ["school", "discipline", "degree"].map(r => {
    let n = e?.[r];
    return n?.status ? {
      index: t,
      fieldType: r,
      fieldLabel: l[r],
      level: "matched" === n.status || "retry_matched" === n.status ? "info" : "warn",
      status: n.status,
      committedValue: n.committedValue ?? "",
      attemptedCandidates: Array.isArray(n.attemptedCandidates) ? n.attemptedCandidates : []
    } : null
  }).filter(e => null !== e)) : []
}

function H(e) {
  return U(e).filter(e => "warn" === e.level && e.attemptedCandidates.length > 0)
}
async function Y({
  apiBase: e,
  rule: t,
  record: r,
  resolveOperation: n
}) {
  if (!v(t)) return r;
  let o = L(r, t.label);
  if (!o) return r;
  let i = R({
      apiBase: e,
      label: t.label,
      originalAnswer: o
    }),
    a = await n(i);
  return a ? M({
    record: r,
    label: t.label,
    operation: a.operation,
    result: a.result
  }) : r
}
async function z({
  apiBase: e,
  rules: t,
  records: r,
  resolveOperation: n
}) {
  let o = await Promise.all(r.map(async (r, o) => {
    if (!r) return r;
    let i = t[o]?.children ?? [],
      a = i.filter(e => v(e));
    if (0 === a.length) return r;
    let l = await Promise.all(a.map(async t => {
      let o = L(r, t.label);
      if (!o) return null;
      let i = R({
          apiBase: e,
          label: t.label,
          originalAnswer: o
        }),
        a = await n(i);
      return a ? {
        label: t.label,
        operation: a.operation,
        result: a.result
      } : null
    }));
    return l.reduce((e, t) => t ? M({
      record: e,
      label: t.label,
      operation: t.operation,
      result: t.result
    }) : e, r)
  }));
  return o.forEach((e, t) => {
    e && (r[t] = e)
  }), r
}

