// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/autofill-progress-protocol.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
export const AUTOFILL_PROGRESS_PROTOCOL_VERSION = 2
let sessionIdCounter = 0

export function createAutofillProgressSessionId() {
  return (sessionIdCounter += 1), `autofill-${Date.now()}-${sessionIdCounter}`
}

export function isAutofillProgressMessage(message) {
  if (!message || "object" != typeof message) return false
  let payload = message
  return (
    payload.version === AUTOFILL_PROGRESS_PROTOCOL_VERSION &&
    ("snapshot" === payload.kind || "patch" === payload.kind) &&
    "string" == typeof payload.sessionId
  )
}

function normalizeFieldLabel(label) {
  return label.replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function cloneItemResult(itemResult) {
  return {
    status: itemResult.status,
    requestedItems: [...itemResult.requestedItems],
    succeededItems: [...itemResult.succeededItems],
    failedItems: [...itemResult.failedItems],
  }
}

function cloneSectionResults(sectionResults) {
  return sectionResults.map((section) => ({
    type: section.type,
    label: section.label,
    rows: section.rows.map((row) => ({
      index: row.index,
      ...(row.title
        ? {
            title: row.title,
          }
        : {}),
      ...(row.subtitle
        ? {
            subtitle: row.subtitle,
          }
        : {}),
      status: row.status,
      fields: row.fields.map((field) => ({
        label: field.label,
        ...(field.value
          ? {
              value: field.value,
            }
          : {}),
        status: field.status,
      })),
    })),
  }))
}

function cloneProgressData(data) {
  return {
    filledFields: [...(data.filledFields ?? [])],
    missingFields: [...(data.missingFields ?? [])],
    fieldRequiredStatus: (data.fieldRequiredStatus ?? []).map((field) => ({
      label: field.label,
      required: field.required,
    })),
    fieldItemResults: Object.fromEntries(
      Object.entries(data.fieldItemResults ?? {}).map(([key, itemResult]) => [
        key,
        cloneItemResult(itemResult),
      ]),
    ),
    ...(data.sectionResults
      ? {
          sectionResults: cloneSectionResults(data.sectionResults),
        }
      : {}),
    currentField: data.currentField ?? null,
    userAutoFillResponse: data.userAutoFillResponse ?? {},
  }
}

function isLegacyProgressData(value) {
  if (!value || "object" != typeof value) return false
  let data = value
  return (
    Array.isArray(data.filledFields) &&
    Array.isArray(data.missingFields) &&
    Array.isArray(data.fieldRequiredStatus)
  )
}

export function applyAutofillProgressMessage(state, message) {
  if (!isAutofillProgressMessage(message))
    return isLegacyProgressData(message)
      ? {
          sessionId: null,
          data: cloneProgressData(message),
        }
      : state
  if ("snapshot" === message.kind)
    return {
      sessionId: message.sessionId,
      data: cloneProgressData(message.data),
    }
  if (!state.data || state.sessionId !== message.sessionId) return state
  let nextData = state.data
  if (
    "sectionResults" in message &&
    (nextData = {
      ...nextData,
      ...(message.sectionResults
        ? {
            sectionResults: cloneSectionResults(message.sectionResults),
          }
        : {
            sectionResults: undefined,
          }),
    }),
    "currentField" in message &&
      (nextData = {
        ...nextData,
        currentField: message.currentField ?? null,
      }),
    message.fieldResult
  ) {
    let { fieldResult } = message
    let normalizedLabel = normalizeFieldLabel(fieldResult.label)
    let withoutLabel = (labels) =>
      labels.filter((label) => normalizeFieldLabel(label) !== normalizedLabel)
    let nextFilled = withoutLabel(nextData.filledFields)
    let nextMissing = withoutLabel(nextData.missingFields)
    let nextFieldItemResults = fieldResult.itemResult
      ? {
          ...nextData.fieldItemResults,
          [normalizedLabel]: cloneItemResult(fieldResult.itemResult),
        }
      : nextData.fieldItemResults
    nextData = {
      ...nextData,
      filledFields:
        "filled" === fieldResult.status
          ? [...nextFilled, fieldResult.label]
          : nextFilled,
      missingFields:
        "missing" === fieldResult.status
          ? [...nextMissing, fieldResult.label]
          : nextMissing,
      fieldItemResults: nextFieldItemResults,
    }
  }
  if (message.requiredField) {
    let normalizedLabel = normalizeFieldLabel(message.requiredField.label)
    let existingIndex = nextData.fieldRequiredStatus.findIndex(
      (field) => normalizeFieldLabel(field.label) === normalizedLabel,
    )
    let nextRequiredStatus =
      -1 === existingIndex
        ? [...nextData.fieldRequiredStatus, message.requiredField]
        : nextData.fieldRequiredStatus.map((field, index) =>
            index === existingIndex
              ? {
                  ...field,
                  required: message.requiredField.required,
                }
              : field,
          )
    nextData = {
      ...nextData,
      fieldRequiredStatus: nextRequiredStatus,
    }
  }
  return nextData === state.data
    ? state
    : {
        ...state,
        data: nextData,
      }
}
