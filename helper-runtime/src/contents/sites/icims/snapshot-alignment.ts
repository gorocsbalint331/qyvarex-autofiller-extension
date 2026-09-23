// @ts-nocheck
/**
 * iCIMS education snapshot index alignment for answer-pair tracking.
 */

import * as educationSnapshotTracking from "../education-snapshot-tracking.js"

export const ICIMS_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE =
  "data-jr-icims-education-snapshot-index"

export const ICIMS_EDUCATION_SNAPSHOT_INDEX_KEY =
  "__jrIcimsEducationSnapshotIndex"

export const ICIMS_EDUCATION_TRACE_ATTRIBUTES = {
  runId: "data-jr-icims-education-trace-run-id",
  traceItemId: "data-jr-icims-education-trace-item-id",
  traceRowId: "data-jr-icims-education-trace-row-id",
  sourceIndex: "data-jr-icims-education-trace-source-index",
  origin: "data-jr-icims-education-trace-origin",
}

export function alignIcimsEducationAnswerPairTrackingData(trackingData) {
  return educationSnapshotTracking.normalizeEducationSnapshotTrackingData({
    trackingData,
    snapshotIndexKey: ICIMS_EDUCATION_SNAPSHOT_INDEX_KEY,
  })
}
