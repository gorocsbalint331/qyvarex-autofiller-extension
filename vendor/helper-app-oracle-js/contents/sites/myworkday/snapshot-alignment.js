/**
 * Parcel module id: 25NpF
 * Resolved path: contents/sites/myworkday/snapshot-alignment.js (oracle restore)
 * Dependencies:
 *   ../education-snapshot-tracking -> 5w47u  =>  _dotdot_/education-snapshot-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE", () => i), n
  .export(r, "MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY", () => a), n.export(r,
    "MYWORKDAY_EDUCATION_TRACE_ATTRIBUTES", () => l), n.export(r,
    "alignMyWorkdayEducationAnswerPairTrackingData", () => s);
var o = e("../education-snapshot-tracking");
let i = "data-jr-workday-education-snapshot-index",
  a = "__jrWorkdayEducationSnapshotIndex",
  l = {
    runId: "data-jr-workday-education-trace-run-id",
    traceItemId: "data-jr-workday-education-trace-item-id",
    traceRowId: "data-jr-workday-education-trace-row-id",
    sourceIndex: "data-jr-workday-education-trace-source-index",
    origin: "data-jr-workday-education-trace-origin"
  };

function s(e) {
  return (0, o.normalizeEducationSnapshotTrackingData)({
    trackingData: e,
    snapshotIndexKey: a
  })
}

