// @ts-nocheck
/**
 * Cisco Careers ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and cisco/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "cisco"
 */

import { BaseFiller } from "./base-filler.js"
import * as enums from "../../core/enums.js"
import * as ciscoAnswer from "./cisco/answer.ts"
import * as operations from "./cisco/operations.ts"
import * as rules from "./cisco/rules.ts"

export class Cisco extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.comboQuestionSettleDelayMs = 500
    this.continueButtonHandler = null
    this.formatAnswer = ciscoAnswer.formatAnswer
  }

  syncResumeTrackingField() {
    if (operations.isInitialStep() && operations.hasResumeInput()) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: true,
      })
    }
  }

  syncCoverLetterTrackingField() {
    if (operations.hasCoverLetterInput()) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: false,
      })
    }
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (text != null) {
          return operations.fillInputTextField(rule.$input, String(text))
        }
      },
      [enums.FIELD_TYPE.DATE]: (rule, value) => {
        const text = value?.[0]
        if (text != null) {
          return operations.fillDateField(
            rule.$input,
            String(text),
            rule.description,
          )
        }
      },
      [enums.FIELD_TYPE.SEARCH]: (rule, value) => {
        const text = value?.[0]
        if (text != null) {
          return operations.fillSearchField(rule.$input, String(text))
        }
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.EDUCATION]: () => Promise.resolve(),
      [enums.FIELD_TYPE.EMPLOYMENT]: () => Promise.resolve(),
    }
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "cisco"
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    await this.handleResumeUpload()
    await this.handleCoverLetterUpload()

    let formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    this.syncResumeTrackingField()
    this.syncCoverLetterTrackingField()

    if (formRules.length > 0) {
      const fetchResult = await this.fetchFormAnswers(formRules, forceRefetch)
      if (typeof fetchResult === "string") return fetchResult

      await this.fillRegularFields(formRules)
      await operations.preserveCiscoLegalNameFields(formRules, this.answer)

      const afterCombo = await this.runComboQuestionAutofillIfNeeded(
        formRules,
        forceRefetch,
      )
      if (typeof afterCombo === "string") return afterCombo
      formRules = afterCombo
    }

    await this.fillEducationAndEmployment(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  async handleResumeUpload() {
    if (!(operations.isInitialStep() && operations.hasResumeInput())) return

    if (this.disableUploadResume) {
      this.syncResumeTrackingField()
      this.progressTracker.updateMissedProgress("Resume/CV")
      return
    }

    this.taskQueue.add(async () => {
      const uploaded = await operations.uploadResume(
        this.resumeInfo,
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
      )
      if (!uploaded) this.progressTracker.updateMissedProgress("Resume/CV")
    })
    await this.taskQueue.run()
  }

  async handleCoverLetterUpload() {
    if (!operations.hasCoverLetterInput()) return

    this.syncCoverLetterTrackingField()
    if (
      !this.coverLetter?.coverLetterId ||
      !this.coverLetter?.coverLetterName
    ) {
      this.progressTracker.updateMissedProgress("Cover Letter")
      return
    }

    const coverLetter = this.coverLetter
    this.taskQueue.add(async () => {
      const uploaded = await operations.uploadCoverLetter(
        {
          coverLetterId: coverLetter.coverLetterId,
          coverLetterName: coverLetter.coverLetterName,
          markdown: coverLetter.markdown,
          useLegacyDownload: coverLetter.useLegacyDownload,
        },
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
      )
      if (!uploaded) this.progressTracker.updateMissedProgress("Cover Letter")
    })
    await this.taskQueue.run()
  }

  async executeSiteSpecificSteps(formRules) {
    const autofillSnapshot = rules.getFormSnapshot()
    const additionalAutofillData = rules.getAdditionalFormSnapshotData()
    const continueButton = operations.getContinueButton()

    if (
      continueButton &&
      operations.getAdvanceButtonType(continueButton) === "continue"
    ) {
      if (this.continueButtonHandler) {
        continueButton.removeEventListener("click", this.continueButtonHandler)
      }
      this.continueButtonHandler = operations.submitHandler.bind(
        null,
        autofillSnapshot,
        additionalAutofillData,
        this.answer,
        formRules,
      )
      continueButton.addEventListener("click", this.continueButtonHandler)
      return
    }

    await super.executeSiteSpecificSteps(formRules)
  }

  async fillRegularFields(formRules) {
    await super.fillRegularFields(rules.getCiscoRegularFillRules(formRules))
  }

  async fillEducationAndEmployment(formRules) {
    const hasEducation = formRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
    )
    const hasEmployment = formRules.some(
      (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
    )
    const educationContainer = rules.getArrayContainer(
      enums.FIELD_TYPE.EDUCATION,
    )
    const employmentContainer = rules.getArrayContainer(
      enums.FIELD_TYPE.EMPLOYMENT,
    )

    if (
      hasEducation &&
      educationContainer &&
      Array.isArray(this.answer?.education) &&
      this.answer.education.length > 0
    ) {
      await operations.processCompositeBlocks(
        this.answer.education,
        enums.FIELD_TYPE.EDUCATION,
        this.operationConfig,
        this.taskQueue,
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
        },
      )
      this.progressTracker.updateFilledProgress("Education")
    }

    if (
      hasEmployment &&
      employmentContainer &&
      Array.isArray(this.answer?.workExperience) &&
      this.answer.workExperience.length > 0
    ) {
      await operations.processCompositeBlocks(
        this.answer.workExperience,
        enums.FIELD_TYPE.EMPLOYMENT,
        this.operationConfig,
        this.taskQueue,
        {
          onSectionResultChanged: this.progressTracker.updateSectionResult,
        },
      )
      this.progressTracker.updateFilledProgress("Employment")
    }
  }

  async getAutofillSnapshot() {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  getAdditionalAutofillSnapshotData(_formRules) {
    return rules.getAdditionalFormSnapshotData()
  }

  getAdditionalSubmitSnapshotData() {
    return rules.getAdditionalFormSnapshotData()
  }

  submitApplication() {
    operations.getContinueButton()?.click()
  }
}
