/**
 * Parcel module id: 6KKZk
 * Resolved path: src/contents/sites/myworkday/education-resolve-scheduler.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  return e.map(e => e ? {
    ...e,
    ...Array.isArray(e.operation) ? {
      operation: [...e.operation]
    } : {}
  } : e)
}
async function i({
  fallbackValue: e,
  startResolve: t,
  fillIndependentFields: r,
  checkpoint: n,
  fillEducation: o,
  onResolveSettled: i
}) {
  let a;
  let l = Date.now();
  try {
    a = Promise.resolve(t()).then(e => ({
      value: e,
      failed: !1,
      errorName: null
    }), t => ({
      value: e,
      failed: !0,
      errorName: t instanceof Error ? t.name : typeof t
    }))
  } catch (t) {
    a = Promise.resolve({
      value: e,
      failed: !0,
      errorName: t instanceof Error ? t.name : typeof t
    })
  }
  await r();
  let s = await a;
  n(), i?.({
    failed: s.failed,
    elapsedMs: Date.now() - l,
    errorName: s.errorName
  }), await o(s.value)
}
n.defineInteropFlag(r), n.export(r, "cloneWorkdayEducationRecords", () => o), n.export(r,
  "runDeferredWorkdayEducationResolve", () => i)

