// @ts-nocheck
/**
 * Education item / row trace markers for autofill ↔ submit alignment.
 *
 * Attaches a stable runId + row/item ids onto education records and DOM rows
 * so snapshot tracking can join autofill, submit, resolveTrace, and validation.
 */

export const EDUCATION_TRACE_KEY = "__jrEducationTrace"
export const EDUCATION_TRACE_SCHEMA_VERSION = 1

function parseNonNegativeInt(value) {
  return typeof value === "string" && /^\d+$/.test(value.trim())
    ? Number(value.trim())
    : null
}

function isPlainObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value)
}

export function createEducationTraceRunId() {
  try {
    const uuid = globalThis.crypto?.randomUUID?.()
    if (uuid) return `jr-edu-${uuid}`
  } catch {
    // fall through
  }
  return `jr-edu-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

export function buildProfileEducationTrace({
  runId,
  sourceIndex,
  snapshotIndex,
}) {
  return {
    schemaVersion: EDUCATION_TRACE_SCHEMA_VERSION,
    runId,
    traceItemId: `${runId}:item:${sourceIndex}`,
    traceRowId: `${runId}:row:${sourceIndex}`,
    sourceIndex,
    snapshotIndex,
    origin: "profile",
    markerStatus: "ok",
  }
}

export function buildSubmitOnlyEducationTrace({ runId, submitIndex }) {
  return {
    schemaVersion: EDUCATION_TRACE_SCHEMA_VERSION,
    runId,
    traceItemId: null,
    traceRowId: `${runId}:submit-only-row:${submitIndex}`,
    sourceIndex: null,
    snapshotIndex: submitIndex,
    origin: "submit_only",
    markerStatus: "missing_submit_marker",
  }
}

export function getEducationTraceFromRecord(record) {
  if (!isPlainObject(record)) return null
  const raw = record[EDUCATION_TRACE_KEY]
  if (!isPlainObject(raw)) return null

  const runId = typeof raw.runId === "string" ? raw.runId : ""
  const traceRowId = typeof raw.traceRowId === "string" ? raw.traceRowId : ""
  const snapshotIndex =
    typeof raw.snapshotIndex === "number" &&
    Number.isInteger(raw.snapshotIndex) &&
    raw.snapshotIndex >= 0
      ? raw.snapshotIndex
      : null

  if (!runId || !traceRowId || snapshotIndex === null) return null

  const sourceIndex =
    typeof raw.sourceIndex === "number" &&
    Number.isInteger(raw.sourceIndex) &&
    raw.sourceIndex >= 0
      ? raw.sourceIndex
      : null
  const traceItemId =
    typeof raw.traceItemId === "string" && raw.traceItemId
      ? raw.traceItemId
      : null

  return {
    schemaVersion: EDUCATION_TRACE_SCHEMA_VERSION,
    runId,
    traceItemId,
    traceRowId,
    sourceIndex,
    snapshotIndex,
    origin: raw.origin === "submit_only" ? "submit_only" : "profile",
    markerStatus:
      raw.markerStatus === "missing_submit_marker"
        ? "missing_submit_marker"
        : "ok",
  }
}

export function getEducationTraceRunIdFromRecords(records) {
  if (!Array.isArray(records)) return null
  for (const record of records) {
    const trace = getEducationTraceFromRecord(record)
    if (trace?.runId) return trace.runId
  }
  return null
}

function writeEducationTraceAttributes(element, attributes, trace) {
  element.setAttribute(attributes.runId, trace.runId)
  element.setAttribute(attributes.traceRowId, trace.traceRowId)
  element.setAttribute(attributes.origin, trace.origin)
  if (trace.traceItemId) {
    element.setAttribute(attributes.traceItemId, trace.traceItemId)
  } else {
    element.removeAttribute?.(attributes.traceItemId)
  }
  if (typeof trace.sourceIndex === "number") {
    element.setAttribute(attributes.sourceIndex, String(trace.sourceIndex))
  } else {
    element.removeAttribute?.(attributes.sourceIndex)
  }
}

function readEducationTraceAttributes(element, attributes, snapshotIndex) {
  const runId = element.getAttribute(attributes.runId)
  const traceItemId = element.getAttribute(attributes.traceItemId)
  const traceRowId = element.getAttribute(attributes.traceRowId)
  const sourceIndex = parseNonNegativeInt(
    element.getAttribute(attributes.sourceIndex),
  )
  if (!(runId && traceItemId && traceRowId && sourceIndex !== null)) return null
  return {
    schemaVersion: EDUCATION_TRACE_SCHEMA_VERSION,
    runId,
    traceItemId,
    traceRowId,
    sourceIndex,
    snapshotIndex,
    origin: "profile",
    markerStatus: "ok",
  }
}

/**
 * Mark and/or read education-row trace data on a DOM node.
 * When `markEducationRows` is set, writes profile markers using `runId`.
 * Otherwise reads existing markers, or synthesizes a submit-only trace.
 */
export function getEducationTraceForRow(element, options) {
  if (!options.includeEducationTrace && !options.markEducationRows) return null

  if (options.markEducationRows) {
    if (!options.runId) return null
    const trace = buildProfileEducationTrace({
      runId: options.runId,
      sourceIndex: options.snapshotIndex,
      snapshotIndex: options.snapshotIndex,
    })
    writeEducationTraceAttributes(element, options.attributes, trace)
    return options.includeEducationTrace ? trace : null
  }

  const existing = readEducationTraceAttributes(
    element,
    options.attributes,
    options.snapshotIndex,
  )
  if (existing || !options.runId) return existing
  return buildSubmitOnlyEducationTrace({
    runId: options.runId,
    submitIndex: options.snapshotIndex,
  })
}
