// @ts-nocheck
/**
 * Normalize education snapshot tracking payloads on autofill answer-pair events.
 *
 * Strips site-specific snapshot-index keys, ensures submit-only rows carry
 * education traces, joins resolve/validation traces by sourceIndex, and
 * reports structure / marker issues for the education section.
 */

import {
  EDUCATION_TRACE_KEY,
  EDUCATION_TRACE_SCHEMA_VERSION,
  buildSubmitOnlyEducationTrace,
  getEducationTraceFromRecord,
} from "./education-item-trace.ts"

function isPlainObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value)
}

function readSnapshotIndex(record, snapshotIndexKey) {
  if (!isPlainObject(record)) return null
  const raw = record[snapshotIndexKey]
  if (typeof raw === "number" && Number.isInteger(raw) && raw >= 0) return raw
  if (typeof raw === "string" && /^\d+$/.test(raw.trim())) {
    return Number(raw.trim())
  }
  return null
}

function omitKey(record, key) {
  if (!isPlainObject(record)) return record
  const { [key]: _removed, ...rest } = record
  return rest
}

function stripSnapshotIndexFromEducation(data, snapshotIndexKey) {
  if (!data) return {}
  const next = { ...data }
  if (Array.isArray(next.education)) {
    next.education = next.education.map((row) =>
      omitKey(row, snapshotIndexKey),
    )
  }
  return next
}

function omitUndefined(record) {
  return Object.fromEntries(
    Object.entries(record).filter(([, value]) => value !== undefined),
  )
}

function findRunId(records) {
  for (const record of records) {
    const trace = getEducationTraceFromRecord(record)
    if (trace?.runId) return trace.runId
  }
  return null
}

function ensureSubmitEducationTrace(record, submitIndex, runId) {
  if (!isPlainObject(record)) return record
  const existing = getEducationTraceFromRecord(record)
  if (existing || !runId) return record
  return {
    ...record,
    [EDUCATION_TRACE_KEY]: buildSubmitOnlyEducationTrace({
      runId,
      submitIndex,
    }),
  }
}

function buildSourceIndexTraceMap(autofillEducation) {
  const map = new Map()
  autofillEducation.forEach((record, index) => {
    const trace = getEducationTraceFromRecord(record)
    const sourceIndex = trace?.sourceIndex ?? index
    if (trace) map.set(sourceIndex, trace)
  })
  return map
}

function resolveTraceRecordIndex(entry, fallbackIndex) {
  return isPlainObject(entry) &&
    typeof entry.recordIndex === "number" &&
    Number.isInteger(entry.recordIndex) &&
    entry.recordIndex >= 0
    ? entry.recordIndex
    : fallbackIndex
}

function attachTracesBySourceIndex(entries, sourceIndexTraceMap) {
  if (!Array.isArray(entries) || sourceIndexTraceMap.size === 0) return entries
  return entries.map((entry, index) => {
    if (!isPlainObject(entry)) return entry
    const sourceIndex = resolveTraceRecordIndex(entry, index)
    const trace = sourceIndexTraceMap.get(sourceIndex)
    return trace ? { ...entry, [EDUCATION_TRACE_KEY]: trace } : entry
  })
}

function attachTracesToExtraData(extraData, sourceIndexTraceMap) {
  const next = { ...(extraData ?? {}) }
  if (Array.isArray(next.resolveTrace?.education)) {
    next.resolveTrace = {
      ...next.resolveTrace,
      education: attachTracesBySourceIndex(
        next.resolveTrace.education,
        sourceIndexTraceMap,
      ),
    }
  }
  if (Array.isArray(next.validation?.education)) {
    next.validation = {
      ...next.validation,
      education: attachTracesBySourceIndex(
        next.validation.education,
        sourceIndexTraceMap,
      ),
    }
  }
  return next
}

function findDuplicateTraceIds(records, section, idKey) {
  const byId = new Map()
  records.forEach((record, index) => {
    const trace = getEducationTraceFromRecord(record)
    const id = trace?.[idKey]
    if (!id) return
    const indexes = byId.get(id) ?? []
    indexes.push(index)
    byId.set(id, indexes)
  })
  return Array.from(byId.entries())
    .filter(([, indexes]) => indexes.length > 1)
    .map(([id, indexes]) => ({
      issueType:
        idKey === "traceItemId"
          ? "duplicate_trace_item_id"
          : "duplicate_trace_row_id",
      [idKey]: id,
      indexes,
      section,
    }))
}

function buildEducationTraceSummary({
  autofillEducation,
  extraData,
  runId,
  submitEducation,
}) {
  if (!runId) return null

  const itemLinksByKey = new Map()
  const markerIssues = []

  const upsertLink = (trace, presentIn) => {
    const key = trace.traceItemId ?? trace.traceRowId
    const existing = itemLinksByKey.get(key)
    if (existing) {
      if (!existing.presentIn.includes(presentIn)) {
        existing.presentIn.push(presentIn)
      }
      return existing
    }
    const link = omitUndefined({
      traceItemId: trace.traceItemId,
      traceRowId: trace.traceRowId,
      sourceIndex: trace.sourceIndex,
      origin: trace.origin,
      presentIn: [presentIn],
      markerStatus: trace.markerStatus,
    })
    itemLinksByKey.set(key, link)
    return link
  }

  const collectSection = (records, section, indexKey) => {
    records.forEach((record, index) => {
      const trace = getEducationTraceFromRecord(record)
      if (!trace) return
      if (trace.runId !== runId) {
        markerIssues.push({
          issueType: "run_id_mismatch",
          section,
          index,
          expectedRunId: runId,
          actualRunId: trace.runId,
        })
      }
      const link = upsertLink(trace, section)
      if (link[indexKey] === undefined) link[indexKey] = index
    })
  }

  collectSection(autofillEducation, "autofill", "autofillIndex")
  collectSection(submitEducation, "submit", "submitIndex")
  collectSection(
    Array.isArray(extraData.resolveTrace?.education)
      ? extraData.resolveTrace.education
      : [],
    "resolveTrace",
    "resolveIndex",
  )
  collectSection(
    Array.isArray(extraData.validation?.education)
      ? extraData.validation.education
      : [],
    "validation",
    "validationIndex",
  )

  markerIssues.push(
    ...findDuplicateTraceIds(autofillEducation, "autofill", "traceItemId"),
    ...findDuplicateTraceIds(autofillEducation, "autofill", "traceRowId"),
    ...findDuplicateTraceIds(submitEducation, "submit", "traceItemId"),
    ...findDuplicateTraceIds(submitEducation, "submit", "traceRowId"),
  )

  submitEducation.forEach((record, index) => {
    const trace = getEducationTraceFromRecord(record)
    if (trace?.markerStatus === "missing_submit_marker") {
      markerIssues.push({
        issueType: "missing_submit_marker",
        submitIndex: index,
      })
    }
  })

  return {
    schemaVersion: EDUCATION_TRACE_SCHEMA_VERSION,
    runId,
    itemLinks: Array.from(itemLinksByKey.values()),
    markerIssues,
  }
}

function hasDuplicateNumbers(values) {
  const numbers = values.filter((value) => typeof value === "number")
  return new Set(numbers).size !== numbers.length
}

function analyzeEducationSnapshotStructure({
  autofillCount,
  submitCount,
  submitSnapshotIndexes,
}) {
  const hasInvalidIndexes = submitSnapshotIndexes.some(
    (index) => index === null || index >= autofillCount,
  )
  const hasDuplicateIndexes = hasDuplicateNumbers(submitSnapshotIndexes)
  const addedRows = submitCount > autofillCount
  const deletedRows = submitCount < autofillCount
  const reorderedOrReplaced =
    !hasInvalidIndexes &&
    !hasDuplicateIndexes &&
    submitCount === autofillCount &&
    submitSnapshotIndexes.some((index, position) => index !== position)

  const changeTypes = [
    addedRows ? "added_rows" : null,
    deletedRows ? "deleted_rows" : null,
    hasInvalidIndexes ? "invalid_snapshot_indexes" : null,
    hasDuplicateIndexes ? "duplicate_snapshot_indexes" : null,
    reorderedOrReplaced ? "reordered_or_replaced_rows" : null,
  ].filter(Boolean)

  const structureChanged = changeTypes.length > 0
  return {
    autofillCount,
    submitCount,
    submitSnapshotIndexes,
    structureChanged,
    analysisSkipped: structureChanged,
    changeTypes,
  }
}

export function normalizeEducationSnapshotTrackingData({
  trackingData,
  snapshotIndexKey,
}) {
  const additionalAutofillData = stripSnapshotIndexFromEducation(
    trackingData.additionalAutofillData,
    snapshotIndexKey,
  )
  let additionalSubmitData = stripSnapshotIndexFromEducation(
    trackingData.additionalSubmitData,
    snapshotIndexKey,
  )

  const rawAutofillEducation = trackingData.additionalAutofillData?.education
  const rawSubmitEducation = trackingData.additionalSubmitData?.education

  if (!Array.isArray(rawAutofillEducation) && !Array.isArray(rawSubmitEducation)) {
    return {
      ...trackingData,
      additionalAutofillData,
      additionalSubmitData,
    }
  }

  const autofillEducation = Array.isArray(rawAutofillEducation)
    ? rawAutofillEducation
    : []
  const submitEducationRaw = Array.isArray(rawSubmitEducation)
    ? rawSubmitEducation
    : []
  const runId =
    findRunId(autofillEducation) ?? findRunId(submitEducationRaw)

  const submitEducation = submitEducationRaw.map((record, index) =>
    ensureSubmitEducationTrace(record, index, runId),
  )

  if (Array.isArray(rawSubmitEducation)) {
    additionalSubmitData.education = (
      Array.isArray(additionalSubmitData.education)
        ? additionalSubmitData.education
        : []
    ).map((record, index) =>
      ensureSubmitEducationTrace(record, index, runId),
    )
  }

  const sourceIndexTraceMap = buildSourceIndexTraceMap(autofillEducation)
  const extraData = attachTracesToExtraData(
    trackingData.extraData,
    sourceIndexTraceMap,
  )
  const educationSnapshot = analyzeEducationSnapshotStructure({
    autofillCount: autofillEducation.length,
    submitCount: submitEducation.length,
    submitSnapshotIndexes: submitEducation.map((record) =>
      readSnapshotIndex(record, snapshotIndexKey),
    ),
  })
  const educationTrace = buildEducationTraceSummary({
    autofillEducation,
    extraData,
    runId,
    submitEducation,
  })

  return {
    ...trackingData,
    additionalAutofillData,
    additionalSubmitData: Array.isArray(rawSubmitEducation)
      ? additionalSubmitData
      : { ...additionalSubmitData, education: [] },
    extraData: {
      ...extraData,
      educationSnapshot,
      ...(educationTrace ? { educationTrace } : {}),
    },
  }
}
