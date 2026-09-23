// @ts-nocheck
/**
 * Zoho Recruit — per-record section result reporting for education/employment.
 */

import * as answerMethods from "../../methods/answer.js"
import * as cancellation from "../../methods/cancellation.js"

export function createZohoRecordResult(
  sectionType,
  recordIndex,
  sectionRule,
  recordAnswer,
  sequentialReporter,
) {
  const reporter = answerMethods.createSectionResultReporter(
    sectionType,
    sequentialReporter.forRecord(recordIndex, [sectionRule]),
  )
  const row = reporter.ensureRow(0, recordAnswer)
  const children =
    "children" in sectionRule && Array.isArray(sectionRule.children)
      ? sectionRule.children
      : []
  for (const child of children) {
    reporter.updateField(row, child.label, void 0, "missed")
  }
  reporter.emit()

  const normalizeAnswerValue = (value) => {
    if (null == value) return
    const trimmed = (
      Array.isArray(value) ? value.join(", ") : String(value)
    ).trim()
    return trimmed || void 0
  }

  async function run(rule, value, operation) {
    const normalized = normalizeAnswerValue(value)
    reporter.updateField(row, rule.label, normalized, "pending")
    reporter.emit()
    try {
      const result = await operation()
      const status = false !== result && normalized ? "filled" : "missed"
      reporter.updateField(row, rule.label, normalized, status)
      reporter.emit()
      console.info("[ZohoRecruit][section-result] field", {
        type: sectionType,
        index: recordIndex,
        label: rule.label,
        status,
      })
      return result
    } catch (error) {
      reporter.updateField(
        row,
        rule.label,
        normalized,
        error instanceof cancellation.SkippedError ? "skipped" : "missed",
      )
      reporter.emit()
      console.info("[ZohoRecruit][section-result] field-error", {
        type: sectionType,
        index: recordIndex,
        label: rule.label,
        reason:
          error instanceof cancellation.SkippedError
            ? "skipped"
            : "operation-error",
      })
      throw error
    }
  }

  return {
    run,
    operationConfig: (baseConfig) =>
      Object.fromEntries(
        Object.entries(baseConfig).map(([fieldType, handler]) => [
          fieldType,
          (rule, record, extras) => {
            let answerValue
            try {
              answerValue = answerMethods.findValueInRecord(
                rule.label,
                record,
              )
            } catch {
              // ignore missing answer
            }
            return run(rule, answerValue, () =>
              handler?.(rule, record, extras),
            )
          },
        ]),
      ),
  }
}
