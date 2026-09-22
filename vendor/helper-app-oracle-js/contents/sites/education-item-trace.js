/**
 * Parcel module id: j7UGI
 * Resolved path: contents/sites/education-item-trace.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "EDUCATION_TRACE_KEY", () => o), n.export(r,
    "EDUCATION_TRACE_SCHEMA_VERSION", () => i), n.export(r, "createEducationTraceRunId", () => s), n
  .export(r, "buildProfileEducationTrace", () => u), n.export(r, "buildSubmitOnlyEducationTrace",
  () => c), n.export(r, "getEducationTraceFromRecord", () => d), n.export(r,
    "getEducationTraceRunIdFromRecords", () => f), n.export(r, "getEducationTraceForRow", () => h);
let o = "__jrEducationTrace",
  i = 1;

function a(e) {
  return "string" == typeof e && /^\d+$/.test(e.trim()) ? Number(e.trim()) : null
}

function l(e) {
  return !!e && "object" == typeof e && !Array.isArray(e)
}

function s() {
  try {
    let e = globalThis.crypto?.randomUUID?.();
    if (e) return `jr-edu-${e}`
  } catch {}
  return `jr-edu-${Date.now()}-${Math.random().toString(36).slice(2,10)}`
}

function u({
  runId: e,
  sourceIndex: t,
  snapshotIndex: r
}) {
  return {
    schemaVersion: i,
    runId: e,
    traceItemId: `${e}:item:${t}`,
    traceRowId: `${e}:row:${t}`,
    sourceIndex: t,
    snapshotIndex: r,
    origin: "profile",
    markerStatus: "ok"
  }
}

function c({
  runId: e,
  submitIndex: t
}) {
  return {
    schemaVersion: i,
    runId: e,
    traceItemId: null,
    traceRowId: `${e}:submit-only-row:${t}`,
    sourceIndex: null,
    snapshotIndex: t,
    origin: "submit_only",
    markerStatus: "missing_submit_marker"
  }
}

function d(e) {
  if (!l(e)) return null;
  let t = e[o];
  if (!l(t)) return null;
  let r = "string" == typeof t.runId ? t.runId : "",
    n = "string" == typeof t.traceRowId ? t.traceRowId : "",
    a = "number" == typeof t.snapshotIndex && Number.isInteger(t.snapshotIndex) && t
    .snapshotIndex >= 0 ? t.snapshotIndex : null;
  if (!r || !n || null === a) return null;
  let s = "number" == typeof t.sourceIndex && Number.isInteger(t.sourceIndex) && t.sourceIndex >=
    0 ? t.sourceIndex : null,
    u = "string" == typeof t.traceItemId && t.traceItemId ? t.traceItemId : null;
  return {
    schemaVersion: i,
    runId: r,
    traceItemId: u,
    traceRowId: n,
    sourceIndex: s,
    snapshotIndex: a,
    origin: "submit_only" === t.origin ? "submit_only" : "profile",
    markerStatus: "missing_submit_marker" === t.markerStatus ? "missing_submit_marker" : "ok"
  }
}

function f(e) {
  if (!Array.isArray(e)) return null;
  for (let t of e) {
    let e = d(t);
    if (e?.runId) return e.runId
  }
  return null
}

function p(e, t, r) {
  e.setAttribute(t.runId, r.runId), e.setAttribute(t.traceRowId, r.traceRowId), e.setAttribute(t
      .origin, r.origin), r.traceItemId ? e.setAttribute(t.traceItemId, r.traceItemId) : e
    .removeAttribute?.(t.traceItemId), "number" == typeof r.sourceIndex ? e.setAttribute(t
      .sourceIndex, String(r.sourceIndex)) : e.removeAttribute?.(t.sourceIndex)
}

function m(e, t, r) {
  let n = e.getAttribute(t.runId),
    o = e.getAttribute(t.traceItemId),
    l = e.getAttribute(t.traceRowId),
    s = a(e.getAttribute(t.sourceIndex));
  return n && o && l && null !== s ? {
    schemaVersion: i,
    runId: n,
    traceItemId: o,
    traceRowId: l,
    sourceIndex: s,
    snapshotIndex: r,
    origin: "profile",
    markerStatus: "ok"
  } : null
}

function h(e, t) {
  if (!t.includeEducationTrace && !t.markEducationRows) return null;
  if (t.markEducationRows) {
    if (!t.runId) return null;
    let r = u({
      runId: t.runId,
      sourceIndex: t.snapshotIndex,
      snapshotIndex: t.snapshotIndex
    });
    return p(e, t.attributes, r), t.includeEducationTrace ? r : null
  }
  let r = m(e, t.attributes, t.snapshotIndex);
  return r || !t.runId ? r : c({
    runId: t.runId,
    submitIndex: t.snapshotIndex
  })
}

