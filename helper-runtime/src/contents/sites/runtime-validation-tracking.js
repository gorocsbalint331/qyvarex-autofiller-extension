/**
 * Parcel module id: 8W2JT
 * Resolved path: src/contents/sites/runtime-validation-tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "RUNTIME_VALIDATION_DEVIATION_EVENT", () => i), n.export(r,
  "getRuntimeValidationDeviationRecords", () => s), n.export(r,
  "buildRuntimeValidationDeviationEventPayload", () => u), n.export(r,
  "sendRuntimeValidationDeviationEvent", () => c);
var o = e("~utils/trace");
let i = "autofill_dropdown_validation";

function a(e) {
  return !!e?.status && ("matched" !== e.status || Number(e.retryCount ?? 0) > 0 || !0 === e
    .resetApplied)
}

function l({
  fieldLabel: e,
  fieldType: t,
  index: r,
  section: n,
  validation: o
}) {
  return {
    section: n,
    ..."number" == typeof r ? {
      index: r
    } : {},
    fieldType: t,
    ...e ? {
      fieldLabel: e
    } : {},
    status: o.status,
    ...o.initialStatus ? {
      initialStatus: o.initialStatus
    } : {},
    ...void 0 !== o.initialCommittedValue ? {
      initialCommittedValue: o.initialCommittedValue
    } : {},
    ...void 0 !== o.retryCount ? {
      retryCount: o.retryCount
    } : {},
    ...void 0 !== o.resetApplied ? {
      resetApplied: o.resetApplied
    } : {},
    sourceValue: o.sourceValue ?? "",
    resolveValue: o.resolveValue ?? "",
    committedValue: o.committedValue ?? "",
    attemptedCandidates: Array.isArray(o.attemptedCandidates) ? o.attemptedCandidates : []
  }
}

function s(e) {
  let t = [],
    r = e?.validation?.education;
  Array.isArray(r) && r.forEach((e, r) => {
    ["school", "discipline"].forEach(n => {
      let o = e?.[n];
      a(o) && t.push(l({
        section: "education",
        index: r,
        fieldType: n,
        validation: o
      }))
    })
  });
  let n = e?.validation?.location;
  return a(n) && t.push(l({
    section: "location",
    fieldType: "location",
    fieldLabel: n.label,
    validation: n
  })), t
}

function u({
  formUrl: e,
  source: t,
  trackingData: r
}) {
  let n = s(r);
  return 0 === n.length ? null : {
    formUrl: e,
    source: t,
    validation: {
      deviationCount: n.length,
      deviations: n
    }
  }
}

function c(e, t = o.trackEvent) {
  let r = u(e);
  r && t(i, r)
}

