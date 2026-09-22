/**
 * Parcel module id: ewjev
 * Resolved path: contents/sites/greenhouse/snapshot-alignment.js (oracle restore)
 * Dependencies:
 *   ../education-snapshot-tracking -> 5w47u  =>  _dotdot_/education-snapshot-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE", () => i), n
  .export(r, "GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_KEY", () => a), n.export(r,
    "GREENHOUSE_EDUCATION_TRACE_ATTRIBUTES", () => l), n.export(r,
    "alignGreenhouseEducationAnswerPairTrackingData", () => s);
var o = e("../education-snapshot-tracking");
let i = "data-jr-education-snapshot-index",
  a = "__jrEducationSnapshotIndex",
  l = {
    runId: "data-jr-education-trace-run-id",
    traceItemId: "data-jr-education-trace-item-id",
    traceRowId: "data-jr-education-trace-row-id",
    sourceIndex: "data-jr-education-trace-source-index",
    origin: "data-jr-education-trace-origin"
  };

function s(e) {
  return (0, o.normalizeEducationSnapshotTrackingData)({
    trackingData: e,
    snapshotIndexKey: a
  })
}

