// @ts-nocheck
/**
 * MyWorkday — sync section progress rows from DOM snapshot answers.
 */

import * as snapshotAlignment from "./snapshot-alignment.ts"

function normalizeLabelKey(label) {
  return label.replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function lookupAnswerValue(record, label) {
  if (Object.prototype.hasOwnProperty.call(record, label)) {
    return {
      found: true,
      value: record[label],
    }
  }
  const normalized = normalizeLabelKey(label)
  for (const [key, value] of Object.entries(record)) {
    if (normalizeLabelKey(key) === normalized) {
      return {
        found: true,
        value,
      }
    }
  }
  return {
    found: false,
    value: undefined,
  }
}

function coerceFieldValue(value) {
  return typeof value === "string"
    ? value.trim() || undefined
    : typeof value === "number"
      ? String(value)
      : undefined
}

function syncMyWorkdaySectionResult(sectionResult, snapshotRows) {
  if (!Array.isArray(snapshotRows)) return sectionResult

  const rowsByIndex = new Map()
  for (const [index, row] of snapshotRows.entries()) {
    if (!row || typeof row !== "object") continue
    const record = row
    const snapshotIndex =
      record[snapshotAlignment.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY]
    const resolvedIndex =
      typeof snapshotIndex === "number" &&
      Number.isInteger(snapshotIndex) &&
      snapshotIndex >= 0
        ? snapshotIndex
        : sectionResult.type === "employment"
          ? index
          : undefined
    if (resolvedIndex !== undefined) rowsByIndex.set(resolvedIndex, record)
  }

  let changed = false
  const nextRows = sectionResult.rows.map((row) => {
    const snapshotRecord = rowsByIndex.get(row.index)
    if (!snapshotRecord) return row

    const nextFields = row.fields.map((field) => {
      const lookup = lookupAnswerValue(snapshotRecord, field.label)
      const nextValue = lookup.found
        ? coerceFieldValue(lookup.value)
        : undefined
      if (nextValue && nextValue !== field.value) {
        changed = true
        return {
          ...field,
          value: nextValue,
        }
      }
      return field
    })

    return nextFields === row.fields
      ? row
      : {
          ...row,
          fields: nextFields,
        }
  })

  return changed
    ? {
        ...sectionResult,
        rows: nextRows,
      }
    : sectionResult
}

export { syncMyWorkdaySectionResult }
