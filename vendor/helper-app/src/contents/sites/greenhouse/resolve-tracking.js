/**
 * Parcel module id: 6Nc4c
 * Resolved path: src/contents/sites/greenhouse/resolve-tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/resolve-trace-tracking -> da2o3  =>  src/contents/sites/resolve-trace-tracking.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getGreenhouseResolvedEducationValue", () => a), n.export(r,
  "getGreenhouseResolveOperationPayload", () => c), n.export(r,
  "buildGreenhouseResolveTrackingData", () => d);
var o = e("~contents/sites/resolve-trace-tracking");

function i(e) {
  return e?.result?.selected_values?.find(e => "string" == typeof e && e.trim())?.trim() ?? ""
}

function a(e) {
  return i(e)
}

function l(e) {
  return e ? {
    original_answer: String(e.original_answer ?? "")
  } : null
}

function s(e) {
  return Array.from({
    length: e.length
  }, (t, r) => {
    let n = e[r];
    return {
      recordIndex: r,
      school: (0, o.buildResolveTraceField)("school", n?.schoolPayload, n?.school),
      discipline: (0, o.buildResolveTraceField)("discipline", n?.disciplinePayload, n
        ?.discipline)
    }
  })
}

function u(e) {
  let t = e.find(e => e?.schoolPayload),
    r = e.find(e => e?.disciplinePayload);
  return {
    school: (0, o.cloneAutofillOperationCommon)(t?.schoolPayload),
    discipline: (0, o.cloneAutofillOperationCommon)(r?.disciplinePayload)
  }
}

function c(e) {
  return (0, o.cloneAutofillOperation)(e?.operation)
}

function d(e) {
  return Array.isArray(e) && 0 !== e.length ? {
    resolve: {
      education: Array.from({
        length: e.length
      }, (t, r) => {
        let n = e[r];
        return {
          school: String(n?.school ?? ""),
          discipline: String(n?.discipline ?? "")
        }
      })
    },
    resolvePayload: {
      educationCommon: u(e),
      education: Array.from({
        length: e.length
      }, (t, r) => {
        let n = e[r];
        return {
          school: l(n?.schoolPayload),
          discipline: l(n?.disciplinePayload)
        }
      })
    },
    resolveTrace: {
      education: s(e)
    }
  } : {}
}

