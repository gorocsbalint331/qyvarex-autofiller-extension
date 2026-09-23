// @ts-nocheck
/**
 * Sequential education / employment section result reporter for autofill progress.
 */

import { setSectionResultFocusRules } from "../../core/dom.ts"

function collectDomNodes(rules) {
  const nodes = new Set()
  for (const rule of rules) {
    if ("children" in rule && Array.isArray(rule.children)) {
      for (const child of collectDomNodes(rule.children)) nodes.add(child)
    } else {
      for (const [key, value] of Object.entries(rule)) {
        if (key.startsWith("$") && key !== "$label") {
          for (const node of Array.isArray(value) ? value : [value]) {
            if (node && typeof node === "object") nodes.add(node)
          }
        }
      }
    }
  }
  return nodes
}

export function createSequentialSectionResultReporter(type, callbacks, labelOverride) {
  const rowsByIndex = new Map()
  const focusRules = []
  let label =
    labelOverride ?? (type === "education" ? "Education" : "Employment")

  function publish() {
    callbacks.updateSectionResult?.({
      type,
      label,
      rows: [...rowsByIndex.values()]
        .sort((a, b) => a.index - b.index)
        .map((row) => ({
          ...row,
          fields: row.fields.map((field) => ({ ...field })),
        })),
    })
  }

  return {
    setRecordFocus(index, rule) {
      if (!Number.isInteger(index) || index < 0) return
      focusRules[index] = rule
      setSectionResultFocusRules(type, focusRules.slice())
    },

    clearRecordFocus(index) {
      if (!Number.isInteger(index) || index < 0) return
      delete focusRules[index]
      setSectionResultFocusRules(type, focusRules.slice())
    },

    markRecordMissed(index) {
      const row = rowsByIndex.get(index)
      if (!row) return
      rowsByIndex.set(index, {
        ...row,
        status: row.status === "skipped" ? "skipped" : "missed",
        fields: row.fields.map((field) => ({
          ...field,
          status: field.status === "skipped" ? "skipped" : "missed",
        })),
      })
      publish()
    },

    forRecord(startIndex, records) {
      if (!Number.isInteger(startIndex) || startIndex < 0) return {}

      const recordNodes = collectDomNodes(records)
      focusRules.forEach((rule, index) => {
        const outsideRange = !(index >= startIndex && index < startIndex + records.length)
        if (outsideRange && [...collectDomNodes([rule])].some((node) => recordNodes.has(node))) {
          delete focusRules[index]
        }
      })

      records.forEach((record, offset) => {
        focusRules[startIndex + offset] = record
      })
      setSectionResultFocusRules(type, focusRules.slice())

      return {
        onSectionResultChanged(sectionResult) {
          if (sectionResult.type !== type) return
          for (const row of sectionResult.rows) {
            if (!Number.isInteger(row.index) || row.index < 0) continue
            const absoluteIndex = startIndex + row.index
            rowsByIndex.set(absoluteIndex, {
              ...row,
              index: absoluteIndex,
              fields: row.fields.map((field) => ({ ...field })),
            })
          }
          label = labelOverride ?? sectionResult.label
          publish()
        },
      }
    },
  }
}
