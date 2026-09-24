// @ts-nocheck
/**
 * MyWorkday — education snapshot index / trace alignment.
 */

import * as educationSnapshotTracking from "../education-snapshot-tracking.js"

const MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE =
  "data-jr-workday-education-snapshot-index"
const MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY =
  "__jrWorkdayEducationSnapshotIndex"
const MYWORKDAY_EDUCATION_TRACE_ATTRIBUTES = {
  runId: "data-jr-workday-education-trace-run-id",
  traceItemId: "data-jr-workday-education-trace-item-id",
  traceRowId: "data-jr-workday-education-trace-row-id",
  sourceIndex: "data-jr-workday-education-trace-source-index",
  origin: "data-jr-workday-education-trace-origin",
}

function alignMyWorkdayEducationAnswerPairTrackingData(trackingData) {
  return educationSnapshotTracking.normalizeEducationSnapshotTrackingData({
    trackingData,
    snapshotIndexKey: MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY,
  })
}

export {
  MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE,
  MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY,
  MYWORKDAY_EDUCATION_TRACE_ATTRIBUTES,
  alignMyWorkdayEducationAnswerPairTrackingData,
}
