// @ts-nocheck
/**
 * Uber Careers ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and uber/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "uber"
 */

import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./uber/operations.ts"
import * as rules from "./uber/rules.ts"
import * as uberAnswer from "./uber/answer.ts"

class Uber extends BaseFiller {
  constructor() {
    super()
    this.lastRules = []

    const originalUpdateFilled = this.progressTracker.updateFilledProgress
    this.progressTracker.updateFilledProgress = (label) => {
      if (
        !this.progressTracker.fieldStatus.filledFields.includes(label)
      ) {
        originalUpdateFilled.call(this.progressTracker, label)
      }
    }
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: async (rule, value) => {
        const first = value?.[0]
        return (
          first != null &&
          (await operations.fillInputTextField(
            rule.$input,
            String(first ?? ""),
            rule,
          ))
        )
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
    }
  }

  buildOperationConfig() {
    const config = super.buildOperationConfig()
    const textHandler = config[enums.FIELD_TYPE.TEXT]
    if (textHandler) {
      config[enums.FIELD_TYPE.TEXT] = async (rule, answer, track = true) => {
        if (operations.isLinkField(rule.label)) {
          const handler = operations.createLinksFieldOperationHandler(
            this.progressTracker.updateFilledProgress.bind(
              this.progressTracker,
            ),
            this.progressTracker.updateMissedProgress.bind(
              this.progressTracker,
            ),
          )
          return handler(rule, answer, track)
        }
        if (operations.isDescriptionField(rule.label)) {
          const handler = operations.createDescriptionFieldOperationHandler(
            this.progressTracker.updateFilledProgress.bind(
              this.progressTracker,
            ),
            this.progressTracker.updateMissedProgress.bind(
              this.progressTracker,
            ),
          )
          return handler(rule, answer, track)
        }
        return textHandler(rule, answer, track)
      }
    }
    return config
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "uber"
  }

  async fillRegularFields(formRules) {
    const connected = formRules.filter((rule) => {
      const input = rule.$input
      if (!input) return false

      const isLink = operations.isLinkField(rule.label)
      if (isLink) {
        if (input.isConnected) return true
        const form = rules.findMainForm()
        if (form && input.name) {
          const live = form.querySelector(`input[name="${input.name}"]`)
          if (
            live &&
            (live === input ||
              (live.name === input.name &&
                live.type === input.type &&
                live.id === input.id))
          ) {
            return true
          }
        }
        return false
      }
      return !!input.isConnected
    })
    return await super.fillRegularFields(connected)
  }

  async executeSiteSpecificSteps(formRules) {
    await operations.fillConditionalAccommodationsQuestion(this.answer)
    await super.executeSiteSpecificSteps(formRules)
  }

  async doFillForm(isRefill = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.lastRules = formRules

    const connectedRules = formRules.filter((rule) => {
      const input = rule.$input
      return !!input && !!input.isConnected
    })
    for (const rule of connectedRules) {
      if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
        rule.required = true
      }
    }

    const requiredStatus = connectedRules.map((rule) => ({
      label: rule.label,
      required: rule.required === true,
      type:
        rule.type === enums.FIELD_TYPE.RADIOGROUP
          ? "radio"
          : rule.type === enums.FIELD_TYPE.CHECKBOX
            ? "checkbox"
            : rule.type === enums.FIELD_TYPE.SELECT
              ? "select"
              : rule.type === enums.FIELD_TYPE.TEXT
                ? "text"
                : undefined,
      options: rule.options,
    }))
    this.progressTracker.setFieldsRequiredStatus(requiredStatus)

    const answersOrError = await this.fetchFormAnswers(formRules, isRefill)
    if (typeof answersOrError === "string") return answersOrError

    try {
      this.answer = uberAnswer.formatAnswer(this.answer)
    } catch {
      /* ignore */
    }

    try {
      const hasWork =
        Array.isArray(this.answer?.workExperience) &&
        this.answer.workExperience.length > 0
      if (!hasWork) {
        const built = uberAnswer.buildEmploymentRecordsFromRegular(
          this.answer?.regular,
        )
        if (built.length > 0) {
          this.answer.workExperience = built
          this.answer = uberAnswer.formatAnswer(this.answer)
        }
      }
    } catch {
      /* ignore */
    }

    try {
      const hasEdu =
        Array.isArray(this.answer?.education) &&
        this.answer.education.length > 0
      if (!hasEdu) {
        const built = uberAnswer.buildEducationRecordsFromRegular(
          this.answer?.regular,
        )
        if (built.length > 0) {
          this.answer.education = built
          this.answer = uberAnswer.formatAnswer(this.answer)
        }
      }
    } catch {
      /* ignore */
    }

    await this.handleResumeUpload()

    try {
      await this.fillRegularFields(formRules)
    } catch {
      /* ignore */
    }

    try {
      await operations.fillEducationAndEmploymentSections(
        this.answer,
        this.taskQueue,
        this.operationConfig,
        rules.getEducationRules,
        rules.getEmploymentRules,
        rules.sortEducationFields,
        rules.sortEmploymentFields,
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
          onEducationCompleted: () =>
            this.progressTracker.updateFilledProgress("Education"),
          onEmploymentCompleted: () =>
            this.progressTracker.updateFilledProgress("Employment"),
        },
      )
    } catch {
      /* ignore */
    }

    try {
      await this.executeSiteSpecificSteps(connectedRules)
    } catch {
      /* ignore */
    }

    try {
      await operations.reapplyFirstLastNameFromRecord(
        rules.findMainForm(),
        this.answer?.regular,
      )
    } catch {
      /* ignore */
    }

    operations.checkConditionalAccommodationsRequirement(this.progressTracker)
    operations.validateRequiredRadioGroups(this.progressTracker)
    return this.finalizeFillForm()
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      await operations.removeResume()
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.removeResume()
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }
    await this.taskQueue.run()
  }

  async fillEducationAndEmployment(_formRules) {
    /* education/employment filled in doFillForm via operations */
  }

  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(normalize-space(.), "Submit application")]'
  }

  async getAutofillSnapshot(formRules) {
    this.lastRules = formRules
    return await rules.getFormSnapshotFromRules(formRules)
  }

  async getSubmitSnapshot() {
    return this.lastRules.length > 0
      ? await rules.getFormSnapshotFromRules(this.lastRules)
      : await rules.getFormSnapshotWithEducationAndEmployment()
  }

  submitApplication() {
    const selector = this.getSubmitButtonSelector()
    const button = xpath.getFirstOrderedNode(selector)
    button?.click()
  }

  async initializeFillForm() {
    await super.initializeFillForm()
    window.uberScrollToField = operations.scrollToField
  }
}

export { Uber }
