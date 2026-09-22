/**
 * Parcel module id: 1wqHT
 * Resolved path: contents/sites/greenhouse/education-operation.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getEducationFieldKeyByLabel", () => s), n.export(r,
    "getEducationSearchTypeByLabel", () => u), n.export(r, "shouldResolveEducationLabel", () => c),
  n.export(r, "extractGreenhouseBoardToken", () => d), n.export(r, "extractEducationSearchTerm",
  () => f), n.export(r, "buildGreenhouseEducationOperation", () => g), n.export(r,
    "mergeEducationOperationIntoRecord", () => b), n.export(r,
    "getEducationOriginalAnswerFromRecord", () => S), n.export(r,
    "applyEducationResolveResultToRecord", () => E), n.export(r, "resolveEducationRecordForRule",
  () => x), n.export(r, "resolveEducationRecordChildrenInParallel", () => C), n.export(r,
    "createEducationRecordResolutionTaskMap", () => A), n.export(r,
    "applyPrefetchedEducationResolutionForLabel", () => k), n.export(r,
    "resolveEducationRecordsInParallel", () => T), n.export(r,
    "resolveEducationRecordsByKeysInParallel", () => F);
let o = {
  accept: "*/*",
  "accept-language": "en",
  origin: "https://job-boards.greenhouse.io",
  referer: "https://job-boards.greenhouse.io/",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
};

function i(e) {
  return String(e ?? "").trim().toLowerCase()
}

function a(e) {
  let t = i(e);
  return "school" === t ? "school" : "degree" === t ? "degree" : "discipline" === t ? "discipline" :
    null
}

function l(e) {
  return "string" == typeof e?.field_type && e.field_type.trim() ? i(e.field_type) : ""
}

function s(e) {
  let t = i(e);
  return "school" === t ? "School" : "degree" === t ? "Degree" : "discipline" === t ? "Discipline" :
    null
}

function u(e) {
  let t = i(e);
  return "school" === t ? "schools" : "degree" === t ? "degrees" : "discipline" === t ?
    "disciplines" : null
}

function c(e) {
  let t = i(e);
  return "school" === t || "discipline" === t
}

function d(e) {
  let t = new URL(e),
    r = t.searchParams.get("for");
  if (r) return r;
  let n = t.pathname.match(/\/embed\/([^/]+)\/jobs\//) || t.pathname.match(/^\/([^/]+)\/jobs\//);
  return n?.[1] ?? ""
}

function f(e) {
  let t = String(e ?? "").trim().replace(/^the\s+/i, "").replace(/[^\p{L}\p{N}'\s-]+/gu, " ")
    .replace(/\s+/g, " ").trim().toLowerCase();
  return t || ""
}

function p(e) {
  let t = i(e);
  return "school" === t ? "What school did you attend?" : "degree" === t ?
    "What degree did you earn?" : "discipline" === t ? "What was your discipline?" : e
}

function m(e) {
  let t = i(e);
  return "school" === t ? "Search and select your school." : "degree" === t ?
    "Search and select your degree." : "discipline" === t ? "Search and select your discipline." :
    `Search and select your ${t}.`
}

function h() {
  return ""
}

function g({
  currentUrl: e,
  label: t,
  originalAnswer: r
}) {
  let n = d(e),
    l = u(t),
    s = a(t);
  if (!n || !l || !s) throw Error(`Unable to build greenhouse education operation for ${t}`);
  return {
    field_type: s,
    question: p(t),
    description: m(t),
    original_answer: r,
    search_request_schema: {
      url: `https://boards.greenhouse.io/v1/boards/${n}/education/${l}`,
      allowed_methods: ["GET"],
      headers: {
        ...o
      },
      params: [{
        name: "term",
        location: "query",
        description: `Search term for the ${i(t)} dropdown.`,
        default_value: h(),
        isSearchParam: !0
      }, {
        name: "page",
        location: "query",
        description: "Pagination for the dropdown search results.",
        default_value: "1",
        isMetaParam: !0
      }]
    }
  }
}

function b(e, t, r) {
  let n = a(t) ?? i(t),
    o = Array.isArray(e.operation) ? [...e.operation] : [],
    s = {
      ...e,
      operation: o
    },
    u = o.findIndex(e => l(e ?? {}) === n);
  return u >= 0 ? o.splice(u, 1, r) : o.push(r), s
}

function y(e) {
  return e.selected_values.find(e => "string" == typeof e && e.trim()) ?? ""
}

function v(e) {
  return "string" == typeof e ? e.trim() : Array.isArray(e) ? e.find(e => "string" == typeof e && e
    .trim()) ?? "" : ""
}

function w(e, t) {
  let r = i(t);
  return "school" === r ? v(e?.rawSchool) : "degree" === r ? v(e?.rawDegree) : "discipline" === r ?
    v(e?.rawMajor) || v(e?.rawDegree) : ""
}

function S(e, t) {
  let r = w(e, t);
  if (r) return r;
  let n = s(t) ?? t,
    o = `${n} original answer`,
    i = e?.[o];
  if ("string" == typeof i && i.trim()) return i.trim();
  let a = e?.[n];
  return "string" == typeof a ? a.trim() : Array.isArray(a) ? a.find(e => "string" == typeof e && e
    .trim() && "other" !== e.trim().toLowerCase()) ?? "" : ""
}

function E({
  record: e,
  label: t,
  operation: r,
  result: n
}) {
  if ("SELECT_OPTIONS" !== n.action) return e;
  let o = y(n);
  if (!o) return e;
  let i = s(t) ?? t;
  return {
    ...b(e, t, r),
    [i]: o
  }
}
async function x({
  currentUrl: e,
  rule: t,
  record: r,
  resolveOperation: n
}) {
  if (!u(t.label) || !c(t.label)) return r;
  let o = S(r, t.label);
  if (!o) return r;
  let i = g({
      currentUrl: e,
      label: t.label,
      originalAnswer: o
    }),
    a = await n(i);
  return a ? E({
    record: r,
    label: t.label,
    operation: a.operation,
    result: a.result
  }) : r
}
async function C({
  currentUrl: e,
  rules: t,
  record: r,
  resolveOperation: n
}) {
  let o = t.filter(e => !!u(e.label) && c(e.label));
  if (0 === o.length) return r;
  let i = await Promise.all(o.map(async t => {
    let o = S(r, t.label);
    if (!o) return null;
    let i = g({
        currentUrl: e,
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
  return i.reduce((e, t) => t ? E({
    record: e,
    label: t.label,
    operation: t.operation,
    result: t.result
  }) : e, r)
}

function A({
  currentUrl: e,
  rules: t,
  records: r,
  resolveOperation: n
}) {
  let o = t.filter(e => !!u(e.label) && c(e.label));
  return r.map(t => {
    let r = {};
    return t && 0 !== o.length && o.forEach(o => {
      let i = S(t, o.label);
      if (!i) return;
      let a = g({
        currentUrl: e,
        label: o.label,
        originalAnswer: i
      });
      r[o.label] = (async () => {
        try {
          let e = await n(a);
          if (!e) return null;
          return {
            label: o.label,
            operation: e.operation,
            result: e.result
          }
        } catch (e) {
          return console.warn(
            `[Greenhouse][Education] Failed to resolve prefetched field "${o.label}":`,
            e), null
        }
      })()
    }), r
  })
}
async function k({
  record: e,
  label: t,
  prefetchedResolution: r
}) {
  if (!r) return e;
  let n = await r;
  return n ? E({
    record: e,
    label: n.label || t,
    operation: n.operation,
    result: n.result
  }) : e
}
async function T({
  currentUrl: e,
  rules: t,
  records: r,
  resolveOperation: n
}) {
  let o = await Promise.all(r.map(async (r, o) => {
    if (!r) return r;
    let i = t[o]?.children ?? [];
    return C({
      currentUrl: e,
      rules: i,
      record: r,
      resolveOperation: n
    })
  }));
  return o.forEach((e, t) => {
    e && (r[t] = e)
  }), r
}
async function F({
  currentUrl: e,
  records: t,
  rules: r,
  resolveOperation: n
}) {
  let o = r && r.length > 0 ? r : [{
      label: "School"
    }, {
      label: "Discipline"
    }],
    i = await Promise.all(t.map(async t => t ? C({
      currentUrl: e,
      rules: o,
      record: t,
      resolveOperation: n
    }) : t));
  return i.forEach((e, r) => {
    e && (t[r] = e)
  }), t
}

