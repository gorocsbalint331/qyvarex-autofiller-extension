// @ts-nocheck

import * as educationSnapshotTracking from "../education-snapshot-tracking.js"

export const GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE =
  "data-jr-education-snapshot-index"

export const GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_KEY =
  "__jrEducationSnapshotIndex"

export const GREENHOUSE_EDUCATION_TRACE_ATTRIBUTES = {
  runId: "data-jr-education-trace-run-id",
  traceItemId: "data-jr-education-trace-item-id",
  traceRowId: "data-jr-education-trace-row-id",
  sourceIndex: "data-jr-education-trace-source-index",
  origin: "data-jr-education-trace-origin",
}

export function alignGreenhouseEducationAnswerPairTrackingData(trackingData) {
  return educationSnapshotTracking.normalizeEducationSnapshotTrackingData({
    trackingData,
    snapshotIndexKey: GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_KEY,
  })
}
