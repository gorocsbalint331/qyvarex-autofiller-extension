// @ts-nocheck
/**
 * HRMDirect ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and hrmdirect/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "hrmdirect"
 */

import * as answerMethods from "../methods/answer.js"
import { BaseFiller } from "./base-filler.ts"
import * as methodsDom from "../methods/dom.js"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as delay from "../../utils/delay.js"
import * as hrmdirectAnswer from "./hrmdirect/answer.ts"
import * as country from "./hrmdirect/country.ts"
import * as operations from "./hrmdirect/operations.ts"
import * as rules from "./hrmdirect/rules.ts"
import * as submitTracking from "./hrmdirect/submit-tracking.ts"

export class Hrmdirect extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.resumeOnlyHandled = false
    this.currentRunCountryResult = {
      country: null,
      countryIso2: null,
      committed: false,
      dependentsSettled: false,
    }
    this.pendingSubmitTrackingContext = null
    this.formatAnswer = hrmdirectAnswer.formatAnswer
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (text) return operations.fillInputTextField(rule, String(text ?? ""))
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
      [enums.FIELD_TYPE.DATE]: (rule, value) =>
        operations.fillDateField(rule.$input, value),
    }
  }

  async runPreFillForm() {
    this.currentRunCountryResult = {
      country: null,
      countryIso2: null,
      committed: false,
      dependentsSettled: false,
    }
    this.currentRunCountryResult = await country.runHrmdirectCountryPrefill({
      reinitialize: operations.reinitializeEducationAndEmployment,
      fetchAutofillInfo: () =>
        autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo(),
      getStateProvinceControl: () => country.getHrmdirectStateProvinceControl(),
      prefillCountry: (value) => country.prefillHrmdirectCountry(value),
      waitForStateProvince: (iso2, control) =>
        country.waitForHrmdirectStateProvince(iso2, control),
    })
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  async checkCoverLetter() {
    methodsDom.postCoverLetterStatus(
      operations.getHrmdirectCoverLetterStatus(),
    )
  }

  async handleResumeUpload() {
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
    await this.taskQueue.run()
  }

  async fillEducationAndEmployment(formRules) {
    const educationRule = formRules.find(
      (rule) => rule.type === enums.FIELD_TYPE.EDUCATION,
    )
    const employmentRule = formRules.find(
      (rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT,
    )

    if (
      educationRule &&
      Array.isArray(this.answer?.education) &&
      this.answer.education.length > 0
    ) {
      await this.processEduOrEmpBlock(
        educationRule,
        this.answer.education,
        enums.FIELD_TYPE.EDUCATION,
        answerMethods.getEducationOperations,
        "Education",
      )
    }

    if (
      employmentRule &&
      Array.isArray(this.answer?.workExperience) &&
      this.answer.workExperience.length > 0
    ) {
      await this.processEduOrEmpBlock(
        employmentRule,
        this.answer.workExperience,
        enums.FIELD_TYPE.EMPLOYMENT,
        answerMethods.getEmploymentOperations,
        "Employment",
      )
    }
  }

  async processEduOrEmpBlock(
    rule,
    records,
    fieldType,
    getOperations,
    progressLabel,
  ) {
    const container = rule.$input?.parentElement?.parentElement
    if (!container) {
      console.warn(
        `[processEduOrEmpBlock] 无法获取 ${fieldType} 容器，跳过`,
      )
      return
    }

    const needed = records.length
    let sectionCount = operations.countEduOrExpSections(container)
    const toAdd = needed - sectionCount

    if (toAdd > 0) {
      for (let i = 0; i < toAdd; i++) {
        await operations.addEduOrExpSection(container)
        const nextCount = operations.countEduOrExpSections(container)
        if (nextCount === sectionCount) {
          console.warn(
            `[processEduOrEmpBlock] [${fieldType}] Block ${i + 1} addition failed (count not increased)`,
          )
        }
        sectionCount = nextCount
        if (i < toAdd - 1) await delay.delay(500)
      }
    }

    const sectionRules = await rules.extractEduOrEmpRules(container, fieldType)
    if (sectionRules.length === 0) {
      console.warn(
        `[processEduOrEmpBlock] [${fieldType}] 提取复合规则失败，长度为 0`,
      )
      return
    }

    coreDom.setSectionResultFocusRules(
      fieldType === enums.FIELD_TYPE.EDUCATION ? "education" : "employment",
      sectionRules,
    )

    const ops = getOperations(
      sectionRules,
      records,
      this.operationConfig,
      undefined,
      {
        onSectionResultChanged: this.progressTracker.updateSectionResult,
        onCompleted: () =>
          this.progressTracker.updateFilledProgress(progressLabel),
        onSkipped: () =>
          this.progressTracker.updateMissedProgress(progressLabel),
      },
    )

    if (ops.length > 0) {
      for (const op of ops) this.taskQueue.add(op)
      await this.taskQueue.run()
    } else {
      console.warn(`[processEduOrEmpBlock] [${fieldType}] No operations generated`)
    }
  }

  async doFillForm(isCombo = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    const {
      discovery,
      mainCountryRules,
      deferredDependentRules,
      regularRules,
    } = country.partitionHrmdirectCountryRules(
      formRules,
      this.currentRunCountryResult,
    )

    if (formRules.length === 0) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: true,
      })

      if (this.resumeOnlyHandled) {
        const persistedResume = operations.hasHrmdirectUploadedResume()
        console.info(
          "[HRMDirect][ResumeUpload] resume-only progress reconciliation",
          {
            persistedResume,
            disableUploadResume: this.disableUploadResume,
          },
        )
        if (!this.disableUploadResume && persistedResume) {
          this.progressTracker.updateFilledProgress("Resume/CV")
        } else {
          this.progressTracker.updateMissedProgress("Resume/CV")
        }
      } else {
        this.resumeOnlyHandled = true
        console.info("[HRMDirect][ResumeUpload] resume-only page", {
          rulesCount: formRules.length,
          disableUploadResume: this.disableUploadResume,
        })
        await this.handleResumeUpload()
        if (
          !this.progressTracker.fieldStatus.filledFields.includes("Resume/CV")
        ) {
          console.warn("[HRMDirect][ResumeUpload] resume-only upload missed", {
            disableUploadResume: this.disableUploadResume,
          })
          this.progressTracker.updateMissedProgress("Resume/CV")
        }
        await this.executeSiteSpecificSteps([])
      }

      return await this.finalizeFillForm()
    }

    this.progressTracker.setFieldsRequiredStatus(formRules)
    for (const rule of deferredDependentRules) {
      this.progressTracker.updateMissedProgress(rule.label)
    }

    if (discovery === "ambiguous") {
      country.reconcileHrmdirectCountryProgress(
        mainCountryRules,
        false,
        this.progressTracker,
      )
      await this.handleResumeUpload()
      await this.executeSiteSpecificSteps(formRules)
      return await this.finalizeFillForm()
    }

    if (regularRules.length > 0) {
      const answers = await this.fetchFormAnswers(regularRules, isCombo)
      if (typeof answers === "string") return answers
    }

    await this.handleResumeUpload()
    if (regularRules.length > 0) await this.fillRegularFields(regularRules)

    if (
      deferredDependentRules.length > 0 &&
      this.currentRunCountryResult.dependentCountryIso2
    ) {
      const settled = await country.waitForHrmdirectStateProvince(
        this.currentRunCountryResult.dependentCountryIso2,
        country.getHrmdirectStateProvinceControl(),
      )
      if (settled) {
        this.currentRunCountryResult.dependentsSettled = true
        const refreshedRules = await this.extractFormRules()
        const partition = country.partitionHrmdirectCountryRules(
          refreshedRules,
          { dependentsSettled: false },
        )
        if (
          partition.discovery === "stable" &&
          partition.deferredDependentRules.length > 0
        ) {
          const deferredAnswers = await this.requestFormAnswers(
            partition.deferredDependentRules,
            isCombo,
            { updateTimeTrace: false },
          )
          if (typeof deferredAnswers === "string") return deferredAnswers
          if (deferredAnswers) {
            this.mergeComboQuestionAnswer(
              deferredAnswers,
              partition.deferredDependentRules,
            )
          }
          await this.fillRegularFields(partition.deferredDependentRules)
        }
      }
    }

    await this.fillEducationAndEmployment(formRules)
    country.reconcileHrmdirectCountryProgress(
      mainCountryRules,
      this.currentRunCountryResult.committed &&
        this.currentRunCountryResult.dependentsSettled,
      this.progressTracker,
    )
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  getSiteName() {
    return "hrmdirect"
  }

  async getAutofillSnapshot() {
    return rules.getHrmdirectCurrentPageSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getHrmdirectCurrentPageSnapshot()
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    const button = submitTracking.resolveHrmdirectSubmitButton(target)
    if (!button) return null
    this.pendingSubmitTrackingContext = {
      pageScope: submitTracking.getHrmdirectPageScope(),
      submitAction: submitTracking.getHrmdirectSubmitAction(button),
    }
    return button
  }

  getSubmitTrackingScopeKey() {
    return submitTracking.getHrmdirectPageScope()
  }

  getAutofillAnswerPairExtraTrackingData() {
    const context = this.pendingSubmitTrackingContext
    if (!context) return {}
    return {
      pageScope: context.pageScope ?? "unknown",
      submitAction: context.submitAction,
    }
  }

  async executeSiteSpecificSteps(formRules) {
    if (operations.getHrmdirectCoverLetterStatus() === "required") {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: true,
      })
      if (
        this.coverLetter?.coverLetterId &&
        this.coverLetter?.coverLetterName
      ) {
        this.taskQueue.add(async () => {
          const uploaded = await operations.uploadCoverLetter(
            {
              coverLetterId: this.coverLetter.coverLetterId,
              coverLetterName: this.coverLetter.coverLetterName,
              markdown: this.coverLetter?.markdown,
              useLegacyDownload: this.coverLetter?.useLegacyDownload,
            },
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          )
          if (!uploaded) {
            this.progressTracker.updateMissedProgress("Cover Letter")
          }
        })
      } else {
        this.progressTracker.updateMissedProgress("Cover Letter")
      }
    }

    if (this.taskQueue.queue.length > 0) await this.taskQueue.run()

    ;["mousedown", "mouseup", "click"].forEach((type) => {
      document.dispatchEvent(
        new MouseEvent(type, {
          bubbles: true,
        }),
      )
    })

    await this.bindSubmitButtonTracking(formRules)
  }

  submitApplication() {
    submitTracking.getHrmdirectSubmitButton()?.click()
  }
}
