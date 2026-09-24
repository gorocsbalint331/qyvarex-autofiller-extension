// @ts-nocheck

import * as resolveTraceTracking from "../resolve-trace-tracking.js"

function getSelectedResolvedValue(resolution) {
  return (
    resolution?.result?.selected_values
      ?.find((value) => typeof value === "string" && value.trim())
      ?.trim() ?? ""
  )
}

export function getGreenhouseResolvedEducationValue(resolution) {
  return getSelectedResolvedValue(resolution)
}

function cloneOriginalAnswer(payload) {
  return payload
    ? {
        original_answer: String(payload.original_answer ?? ""),
      }
    : null
}

function buildEducationResolveTrace(records) {
  return Array.from({ length: records.length }, (_, recordIndex) => {
    const record = records[recordIndex]
    return {
      recordIndex,
      school: resolveTraceTracking.buildResolveTraceField(
        "school",
        record?.schoolPayload,
        record?.school,
      ),
      discipline: resolveTraceTracking.buildResolveTraceField(
        "discipline",
        record?.disciplinePayload,
        record?.discipline,
      ),
    }
  })
}

function buildEducationCommonPayload(records) {
  const schoolRecord = records.find((record) => record?.schoolPayload)
  const disciplineRecord = records.find(
    (record) => record?.disciplinePayload,
  )

  return {
    school: resolveTraceTracking.cloneAutofillOperationCommon(
      schoolRecord?.schoolPayload,
    ),
    discipline: resolveTraceTracking.cloneAutofillOperationCommon(
      disciplineRecord?.disciplinePayload,
    ),
  }
}

export function getGreenhouseResolveOperationPayload(resolution) {
  return resolveTraceTracking.cloneAutofillOperation(resolution?.operation)
}

export function buildGreenhouseResolveTrackingData(records) {
  if (!Array.isArray(records) || records.length === 0) {
    return {}
  }

  return {
    resolve: {
      education: Array.from({ length: records.length }, (_, recordIndex) => {
        const record = records[recordIndex]
        return {
          school: String(record?.school ?? ""),
          discipline: String(record?.discipline ?? ""),
        }
      }),
    },
    resolvePayload: {
      educationCommon: buildEducationCommonPayload(records),
      education: Array.from({ length: records.length }, (_, recordIndex) => {
        const record = records[recordIndex]
        return {
          school: cloneOriginalAnswer(record?.schoolPayload),
          discipline: cloneOriginalAnswer(record?.disciplinePayload),
        }
      }),
    },
    resolveTrace: {
      education: buildEducationResolveTrace(records),
    },
  }
}
