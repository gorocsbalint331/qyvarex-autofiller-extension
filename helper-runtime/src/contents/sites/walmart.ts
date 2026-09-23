// @ts-nocheck
/**
 * Walmart Careers ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and walmart/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "walmart"
 */

import * as sectionResults from "../methods/section-results.js"
import * as answerMethods from "../methods/answer.js"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as walmartAnswer from "./walmart/answer.ts"
import * as composite from "./walmart/composite.ts"
import * as operations from "./walmart/operations.ts"
import * as rules from "./walmart/rules.ts"
import * as navigation from "./walmart/navigation.ts"

export {
  buildWalmartCompositeTemplateRule,
  getWalmartCompositeKindFromText,
} from "./walmart/composite.ts"

export {
  clickAdvanceButton,
  getCurrentAdvanceButton,
  getWalmartAdvanceButtonType,
  hasVisibleWalmartCompositeDialog,
  isWalmartAdvanceButtonCandidate,
} from "./walmart/navigation.ts"

class Walmart extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) =>
        operations.fillInputTextField(rule.$input, value),
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
    }
  }

  async runPreFillForm() {
    await operations.preFillForm()
  }

  async extractFormRules() {
    return [
      ...rules.extractRules(),
      ...composite.getWalmartCompositeTemplateRules(),
    ]
  }

  getNewComboQuestionRules(existingRules, nextRules) {
    return rules.getWalmartComboQuestionRules(existingRules, nextRules)
  }

  async fetchFormAnswers(formRules, forceRefetch) {
    if (0 === formRules.length) {
      this.answer = {
        education: [],
        workExperience: [],
        skills: [],
        regular: {},
      }
      return
    }
    const result = await super.fetchFormAnswers(formRules, forceRefetch)
    if ("string" == typeof result) return result
    this.answer = walmartAnswer.applyWalmartUrlFallbacks(
      this.answer,
      formRules,
      autofillInfo.useAutofillInfoStore.getState().autofillInfo,
    )
  }

  getSiteName() {
    return "walmart"
  }

  async handleResumeUpload() {
    const input = operations.getResumeInput()
    if (!input) return
    const required =
      input.required || "true" === input.getAttribute("aria-required")
    this.progressTracker.updateFieldRequiredStatus({
      label: "Resume/CV",
      required,
    })
    if (this.disableUploadResume) {
      await operations.removeResume()
      this.progressTracker.updateMissedProgress("Resume/CV")
      return
    }
    this.taskQueue.add(async () => {
      await operations.removeResume()
      await operations.uploadResume(
        this.resumeInfo,
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
      )
    })
    await this.taskQueue.run()
  }

  async fillEducationAndEmployment() {
    await this.fillWalmartCompositeRecords(
      "employment",
      this.answer?.workExperience ?? [],
    )
    await this.fillWalmartCompositeRecords(
      "education",
      this.answer?.education ?? [],
    )
  }

  async fillWalmartCompositeRecords(kind, records) {
    if (!Array.isArray(records) || 0 === records.length) return

    let filledCount = 0
    const sectionLabel = "employment" === kind ? "Employment" : "Education"
    const deduped = composite.dedupeWalmartCompositeRecords(kind, records)
    const reporter = sectionResults.createSequentialSectionResultReporter(
      kind,
      this.progressTracker,
      sectionLabel,
    )

    for (const [index, record] of deduped.entries()) {
      const dialog = await composite.openWalmartCompositeDialog(
        kind,
        record,
        index,
      )
      if (!dialog) break

      const dialogRule = composite.getWalmartCompositeDialogRule(kind, dialog)
      if (!dialogRule) break

      const ops =
        "employment" === kind
          ? answerMethods.getEmploymentOperations(
              [dialogRule],
              [record],
              this.operationConfig,
              void 0,
              reporter.forRecord(index, [dialogRule]),
            )
          : answerMethods.getEducationOperations(
              [dialogRule],
              [record],
              this.operationConfig,
              void 0,
              reporter.forRecord(index, [dialogRule]),
            )

      if (0 === ops.length) break
      for (const op of ops) this.taskQueue.add(op)
      await this.taskQueue.run()

      let saved = false
      try {
        saved = await composite.saveWalmartCompositeDialog(dialog)
      } finally {
        reporter.clearRecordFocus(index)
        if (!saved) reporter.markRecordMissed(index)
      }
      if (!saved) break
      filledCount += 1
    }

    if (filledCount > 0) {
      this.progressTracker.updateFilledProgress(sectionLabel)
    } else {
      this.progressTracker.updateMissedProgress(sectionLabel)
    }
  }

  async getAutofillSnapshot() {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  getAdditionalAutofillSnapshotData() {
    return composite.getWalmartAdditionalFormSnapshotData(this.answer)
  }

  getAdditionalSubmitSnapshotData() {
    return composite.getWalmartAdditionalFormSnapshotData(this.answer)
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    const button =
      "BUTTON" === target.tagName ? target : target.closest("button")
    if (!button) return null
    const text = button.textContent?.trim().toLowerCase() ?? ""
    const type = button.getAttribute("type")
    const isSubmit =
      "submit" === type ||
      text.includes("submit") ||
      text.includes("apply") ||
      text.includes("continue")
    return isSubmit ? button : null
  }

  submitApplication() {
    const button = Array.from(document.querySelectorAll("button")).find(
      (candidate) => {
        const text = candidate.textContent?.trim().toLowerCase() ?? ""
        return (
          !candidate.disabled &&
          ("submit" === candidate.type ||
            text.includes("submit") ||
            text.includes("apply") ||
            text.includes("continue"))
        )
      },
    )
    button?.click()
  }

  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.comboQuestionSettleDelayMs = 500
  }
}

export { Walmart }
