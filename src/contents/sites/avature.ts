// @ts-nocheck
/**
 * Avature ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and avature/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "avature"
 */

import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../methods/answer.ts"
import * as cancellation from "../methods/cancellation.ts"
import * as dom from "../methods/dom.ts"
import * as track from "../methods/track.ts"
import { BaseFiller } from "./base-filler.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as avatureAnswer from "./answer.ts"
import * as comboQuestions from "./combo-questions.ts"
import * as country from "./country.ts"
import * as operations from "./operations.ts"
import * as educationOperation from "./education-operation.ts"
import * as optionResolveRollout from "../shared/option-resolve-rollout.js"
import * as rule from "./rule.ts"
import * as submitButton from "./submit-button.ts"

const MAX_COMBO_REFILL_PASSES = 3

const educationInstitutionResolveHooks = {
  requestStep: async (body) =>
    await messaging.sendToBackground({
      name: "resolveAutofillClientSearchStep",
      body,
    }),
  captureCandidates: operations.captureAvatureInstitutionCandidates,
  closeCandidates: operations.closeAvatureSelect2Search,
  commitCandidate: operations.fillResolvedAvatureInstitutionField,
}

export class Avature extends BaseFiller {
  constructor() {
    super()
    this.rules = []
    this.avatureEducationResolveFailed = false
    this.avatureEducationResolvedFields = new WeakSet()
    this.avatureEducationFailedFields = new WeakSet()
    this.currentRunCountryCommitted = false
    this.formatAnswer = (answer) => avatureAnswer.formatAnswer(answer)
    this.hasComboQuestions = true
    this.comboQuestionSettleDelayMs = 300
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillInputTextField(rule.$input, value),
        options: { expectArray: false },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => operations.fillSelectField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.MULTI_SELECT]: {
        handler: (rule, value) =>
          operations.fillMultiSelectField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillCheckboxField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) =>
          operations.fillRadioGroupField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) =>
          operations.fillDateField(rule.$input, value),
        options: { expectArray: false },
      },
    }
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(
      operations.hasAvatureCoverLetterSlot() ? "required" : "",
    )
  }

  async runPreFillForm() {
    this.currentRunCountryCommitted = false
    const result = await country.runAvatureCountryPrefill({
      preFillForm: async () => {
        await rule.clearEduExp()
        this.avatureEducationResolveFailed = false
        this.avatureEducationResolvedFields = new WeakSet()
        this.avatureEducationFailedFields = new WeakSet()
      },
      fetchAutofillInfo: () =>
        autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo(),
      fillCountry: async (countryValue) => {
        const selects = country.getAvatureGeographicCountrySelects()
        if (selects.length !== 1) {
          console.warn("[Avature][Country] control-not-unique", {
            count: selects.length,
          })
          return false
        }
        return operations.fillAvatureGeographicCountryField(
          selects[0],
          countryValue,
          country.getAvatureCountryAliases(countryValue),
        )
      },
      waitForDependentFields: async () =>
        !operations.hasAvatureStateField() ||
        (await operations.waitForAvatureStateOptions([])),
    })
    this.currentRunCountryCommitted = result.committed
    if (result.committed && !result.dependentSettled) {
      console.warn("[Avature][Country] dependent-options-timeout", {
        dependent: "State/Province",
      })
    }
  }

  async extractFormRules() {
    const rules = await rule.extractRules()
    this.rules = rules
    return rules
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    let formRules = this.prepareCoverLetterRules(await this.extractFormRules())
    const { regularRules } = country.partitionAvatureCountryRules(formRules)

    this.progressTracker.setFieldsRequiredStatus(formRules)
    country.reconcileAvatureCountryProgress(
      formRules,
      this.currentRunCountryCommitted,
      {
        updateFilledProgress: this.progressTracker.updateFilledProgress,
        updateMissedProgress: this.progressTracker.updateMissedProgress,
      },
    )

    if (
      formRules.length === 0 &&
      !this.disableUploadResume &&
      operations.getAvatureResumeUploadDom().input
    ) {
      console.info("[Avature][ResumeUpload] resume-only-page")
      return await this.uploadResumeOnly()
    }

    const answersOrError = await this.fetchFormAnswers(
      regularRules,
      forceRefetch,
    )
    if (typeof answersOrError === "string") return answersOrError

    await this.handleResumeUpload()
    await this.fillRegularFields(regularRules)
    await this.fillEducationAndEmployment(formRules)
    await this.fillCoverLetterFields()

    const comboResult = await this.runComboQuestionAutofillIfNeeded(
      formRules,
      forceRefetch,
    )
    if (typeof comboResult === "string") return comboResult

    formRules = comboResult
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  async uploadResumeOnly() {
    this.progressTracker.setFieldsRequiredStatus([
      { label: "Resume/CV", required: true },
    ])
    try {
      const uploaded = await operations.uploadResume(
        this.resumeInfo,
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
      )
      if (!uploaded) {
        this.progressTracker.updateMissedProgress("Resume/CV")
        console.warn("[Avature][ResumeUpload] resume-only-upload-failed", {
          reason: "file-not-selected",
        })
      }
    } catch (error) {
      if (error instanceof cancellation.CancelledError) throw error
      this.progressTracker.updateMissedProgress("Resume/CV")
      console.error("[Avature][ResumeUpload] resume-only-upload-failed", {
        reason: error instanceof Error ? error.message : String(error),
      })
    }
    return await this.finalizeFillForm()
  }

  async fetchFormAnswers(rules, forceRefetch) {
    const result = await super.fetchFormAnswers(rules, forceRefetch)
    if (typeof result === "string") return result
    if (this.answer) {
      this.bindAvatureClickSubmitTelemetry()
      return
    }
    return "Failed to get answer"
  }

  getSiteName() {
    return "avature"
  }

  bindAvatureClickSubmitTelemetry() {
    const button = xpath.getFirstOrderedNodeSafe(
      submitButton.AVATURE_TRACKING_BUTTON_XPATH,
      document.body,
    )
    if (button) {
      track.bindSubmitButton(
        button.textContent || "Submit",
        this.progressTracker.fieldStatus,
        this.timeTrace,
      )
    }
  }

  async fillRegularFields(rules) {
    const ops = rules.flatMap((rule) =>
      answerMethods.getRegularOperations(
        [rule],
        avatureAnswer.getAvatureRegularRecordForRule(
          rule,
          rules,
          this.answer,
        ),
        this.operationConfig,
      ),
    )
    for (const op of ops) this.taskQueue.add(op)
    await this.taskQueue.run()

    const hasCountrySelect = rules.some(
      (rule) =>
        rule.type === enums.FIELD_TYPE.SELECT &&
        rule.$input?.classList?.contains("countryFieldSelect"),
    )
    if (hasCountrySelect) await operations.waitForAvatureStateOptions(rules)
  }

  async fillEducationAndEmployment(rules) {
    if (this.answer.workExperience?.length > 0) {
      await operations.fillEmploymentFields(
        rules,
        this.answer.workExperience,
        this.operationConfig,
        this.taskQueue,
        this.progressTracker.updateFilledProgress.bind(this.progressTracker),
        this.progressTracker.updateSectionResult,
      )
    }
    if (this.answer.education?.length > 0) {
      await operations.fillEducationFields(
        rules,
        this.answer.education,
        this.operationConfig,
        this.taskQueue,
        (label) => {
          if (this.avatureEducationResolveFailed) {
            this.progressTracker.updateMissedProgress("Education")
            return
          }
          this.progressTracker.updateFilledProgress(label)
        },
        async (rule, record, recordIndex) =>
          this.resolveAvatureEducationField(rule, record, recordIndex),
        this.progressTracker.updateSectionResult,
      )
    }
  }

  async resolveAvatureEducationField(rule, record, recordIndex) {
    const fieldType =
      educationOperation.classifyAvatureEducationClientSearchField(rule)
    const answerKeys = Object.keys(record).filter((key) =>
      /rawmajor|rawdegree|major|speciali|field of study|area of study|discipline|study/i.test(
        key,
      ),
    )
    const answerSourceKeys = answerKeys.filter((key) => {
      const value = record[key]
      return Array.isArray(value)
        ? value.some((item) => typeof item === "string" && item.trim().length > 0)
        : typeof value === "string" && value.trim().length > 0
    })
    const input = rule.$input

    console.info(
      "[Avature][Education] resolve-check",
      JSON.stringify({
        recordIndex,
        label: rule.label,
        ruleType: rule.type,
        fieldType,
        inputId: input?.id || null,
        multiple: input?.multiple === true,
        className: String(input?.className || ""),
        answerKeys,
        answerSourceKeys,
        regularAnswerKeys: Object.keys(this.answer.regular || {}).filter(
          (key) =>
            /rawmajor|rawdegree|major|speciali|field of study|area of study|discipline|study/i.test(
              key,
            ),
        ),
      }),
    )

    if (
      !optionResolveRollout.V119_OPTION_RESOLVE_ROLLOUT
        .avatureEducationInstitution ||
      !fieldType
    ) {
      return "continue"
    }

    if (!input) {
      this.avatureEducationResolveFailed = true
      return "handled"
    }

    if (
      this.avatureEducationResolvedFields.has(input) ||
      this.avatureEducationFailedFields.has(input)
    ) {
      return "handled"
    }

    const result =
      await educationOperation.resolveAvatureInstitutionClientSearch(
        input,
        record,
        rule.label,
        educationInstitutionResolveHooks,
        fieldType,
      )

    if (result.success && result.selected) {
      record[rule.label] = result.selected.text
      this.avatureEducationResolvedFields.add(input)
      console.info("[Avature][Education] client-search-committed", {
        recordIndex,
        fieldType,
        label: rule.label,
        roundCount: result.rounds.length,
      })
    } else {
      this.avatureEducationResolveFailed = true
      this.avatureEducationFailedFields.add(input)
      operations.clearAvatureInstitutionField(input)
      console.warn(
        "[Avature][Education] client-search-failed",
        JSON.stringify({
          recordIndex,
          fieldType,
          label: rule.label,
          reason: result.failureReason || "unknown-error",
          roundCount: result.rounds.length,
        }),
      )
    }
    return "handled"
  }

  getNewComboQuestionRules(previousRules, nextRules) {
    return comboQuestions
      .getNewAvatureComboRules(previousRules, nextRules)
      .filter((rule) => !country.isAvatureGeographicCountryRule(rule))
  }

  mergeComboQuestionAnswer(incoming) {
    this.answer = comboQuestions.mergeAvatureComboAnswer(this.answer, incoming)
  }

  async runComboQuestionAutofillIfNeeded(rules, forceRefetch) {
    let currentRules = rules
    try {
      for (let pass = 0; pass < MAX_COMBO_REFILL_PASSES; pass++) {
        const next = await super.runComboQuestionAutofillIfNeeded(
          currentRules,
          forceRefetch,
        )
        if (typeof next === "string") {
          console.warn("[Avature] skip combo refill:", next)
          break
        }
        if (next.length === currentRules.length) break
        currentRules = next
        this.rules = next
      }
      return currentRules
    } catch (error) {
      if (
        error instanceof cancellation.CancelledError ||
        error instanceof cancellation.SkippedError
      ) {
        throw error
      }
      console.warn(
        "[Avature] combo refill failed, continue normal flow:",
        error,
      )
      return currentRules
    }
  }

  async executeSiteSpecificSteps(rules) {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }

    const hasCoverLetter = operations.hasAvatureCoverLetterSlot()
    if (hasCoverLetter) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: true,
      })
    }
    if (
      hasCoverLetter &&
      this.coverLetter?.coverLetterId &&
      this.coverLetter?.coverLetterName
    ) {
      this.taskQueue.add(async () => {
        const uploaded = await operations.uploadCoverLetter(
          this.coverLetter,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded) this.progressTracker.updateMissedProgress("Cover Letter")
      })
    } else if (hasCoverLetter) {
      this.progressTracker.updateMissedProgress("Cover Letter")
    }

    this.taskQueue.add(
      async () =>
        await operations.fillAgreementField(
          this.rules,
          this.answer.regular || {},
        ),
    )
    await this.taskQueue.run()
    await this.bindSubmitButtonTracking(rules)
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(
      submitButton.AVATURE_FINAL_SUBMIT_BUTTON_XPATH,
      document.body,
    )
    if (button) button.click()
  }

  cancelAutoFill() {
    this.taskQueue.clear()
  }

  async getAutofillSnapshot() {
    return rule.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rule.getFormSnapshot()
  }

  getAdditionalAutofillSnapshotData() {
    return rule.getAdditionalFormSnapshotData()
  }

  getAdditionalSubmitSnapshotData() {
    return rule.getAdditionalFormSnapshotData()
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    return submitButton.getAvatureSubmitButtonFromEventTarget(target)
  }
}
