/**
 * Parcel module id: Qx2Vt
 * Resolved path: src/contents/sites/icims/snapshot-alignment.js
 * Dependencies:
 *   ../education-snapshot-tracking -> 5w47u  =>  src/contents/sites/education-snapshot-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"ICIMS_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE",()=>i),n.export(r,"ICIMS_EDUCATION_SNAPSHOT_INDEX_KEY",()=>a),n.export(r,"ICIMS_EDUCATION_TRACE_ATTRIBUTES",()=>l),n.export(r,"alignIcimsEducationAnswerPairTrackingData",()=>s);var o=e("../education-snapshot-tracking");let i="data-jr-icims-education-snapshot-index",a="__jrIcimsEducationSnapshotIndex",l={runId:"data-jr-icims-education-trace-run-id",traceItemId:"data-jr-icims-education-trace-item-id",traceRowId:"data-jr-icims-education-trace-row-id",sourceIndex:"data-jr-icims-education-trace-source-index",origin:"data-jr-icims-education-trace-origin"};function s(e){return(0,o.normalizeEducationSnapshotTrackingData)({trackingData:e,snapshotIndexKey:a})}
