// @ts-nocheck
/**
 * ByteDance ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and bytedance/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "bytedance"
 */

import * as answerMethods from "../methods/answer.js"
import { BaseFiller } from "./base-filler.js"
import * as bytedanceAnswer from "./bytedance/answer.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./bytedance/operations.ts"
import * as rules from "./bytedance/rules.ts"

export class ByteDance extends BaseFiller {
  constructor(...args) {
    super(...args)
    this._lastRules = []
    this._lastEducation = []
    this._lastEmployment = []
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, values) => {
        let value = values?.[0]
        if (!value) return
        let country = this.answer?.country
        if (rule.label?.trim().toLowerCase() === "mobile") {
          let areaCode = this.answer?.regular?.__mobileAreaCode || ""
          return operations.fillInputTextField(
            rule.$input,
            String(value ?? ""),
            areaCode,
            country,
          )
        }
        return operations.fillInputTextField(
          rule.$input,
          String(value ?? ""),
          undefined,
          country,
        )
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (_rule, _values) => {},
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: (rule, values) =>
        operations.fillSelectField(rule, values),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, values) =>
        operations.fillCheckboxField(rule, values),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, values) =>
        operations.fillRadioGroupFiled(rule, values),
    }
  }

  buildOperationConfig() {
    let config = super.buildOperationConfig()
    config[enums.FIELD_TYPE.DATE] = bytedanceAnswer.createDateFillHandler({
      fillInputTextField: operations.fillInputTextField,
      updateFilledProgress:
        this.progressTracker.updateFilledProgress.bind(this.progressTracker),
      updateMissedProgress:
        this.progressTracker.updateMissedProgress.bind(this.progressTracker),
    })
    return config
  }

  dedupeSectionRulesForBackend(formRules) {
    let seen = new Set()
    let result = []
    for (let rule of formRules) {
      if (
        rule.type === enums.FIELD_TYPE.EDUCATION ||
        rule.type === enums.FIELD_TYPE.EMPLOYMENT
      ) {
        let key = String(rule.type)
        if (seen.has(key)) continue
        seen.add(key)
      }
      result.push(rule)
    }
    return result
  }

  async doFillForm(skipCache = false) {
    await this.initializeFillForm()
    let formRules = await this.extractFormRules()
    let requiredStatus = []
    let seenSections = new Set()
    for (let rule of formRules) {
      let type = rule.type
      if (
        type === enums.FIELD_TYPE.EDUCATION ||
        type === enums.FIELD_TYPE.EMPLOYMENT
      ) {
        let key = String(type)
        if (seenSections.has(key)) continue
        seenSections.add(key)
      }
      requiredStatus.push({
        label: rule.label,
        required: rule.required ?? null,
        options: rule.options,
        type: rule.type,
      })
    }
    this.progressTracker.setFieldsRequiredStatus(requiredStatus)
    await this.handleResumeUpload()

    let backendRules = this.dedupeSectionRulesForBackend(formRules)
    let fetchResult = await this.fetchFormAnswers(backendRules, skipCache)
    if (typeof fetchResult === "string") return fetchResult

    this.answer = bytedanceAnswer.formatAnswer(this.answer)
    await this.fillRegularFields(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return this.finalizeFillForm()
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "bytedance"
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
    if (
      Array.isArray(this.answer?.education) &&
      this.answer.education.length > 0
    ) {
      await operations.addEducationSection(this.answer.education.length)
      let educationRules = rules.getEducationRules()
      coreDom.setSectionResultFocusRules(
        enums.FIELD_TYPE.EDUCATION,
        educationRules,
      )
      let educationOps = answerMethods.getEducationOperations(
        educationRules,
        this.answer.education,
        this.operationConfig,
        undefined,
        answerMethods.sectionProgressCallbacks(
          "Education",
          this.progressTracker,
        ),
      )
      for (let op of educationOps) this.taskQueue.add(op)
      await this.taskQueue.run()
    }

    if (
      Array.isArray(this.answer?.workExperience) &&
      this.answer.workExperience.length > 0
    ) {
      await operations.addEmploymentSection(this.answer.workExperience.length)
      let experienceRules = rules.getExperienceRules()
      coreDom.setSectionResultFocusRules(
        enums.FIELD_TYPE.EMPLOYMENT,
        experienceRules,
      )
      let sectionLabel = experienceRules?.[0]?.label || "Work Experience"
      let employmentOps = answerMethods.getEmploymentOperations(
        experienceRules,
        this.answer.workExperience,
        this.operationConfig,
        undefined,
        answerMethods.sectionProgressCallbacks(
          sectionLabel,
          this.progressTracker,
        ),
      )
      for (let op of employmentOps) this.taskQueue.add(op)
      await this.taskQueue.run()
    }
  }

  async executeSiteSpecificSteps(formRules) {
    await this.fillEducationAndEmployment(formRules)
    await operations.ensurePrivacyPolicyChecked()
    await super.executeSiteSpecificSteps(formRules)
  }

  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit") or contains(normalize-space(.), "Submit")]'
  }

  async getAutofillSnapshot(formRules) {
    this._lastRules = formRules
    let snapshot = await rules.getFormSnapshot(formRules)
    let { education, employment, ...regular } = snapshot
    this._lastEducation = Array.isArray(education) ? education : []
    this._lastEmployment = Array.isArray(employment) ? employment : []
    return regular
  }

  async getSubmitSnapshot() {
    let snapshot = await rules.getFormSnapshot(this._lastRules)
    let { education, employment, ...regular } = snapshot
    this._lastEducation = Array.isArray(education) ? education : []
    this._lastEmployment = Array.isArray(employment) ? employment : []
    return regular
  }

  getAdditionalAutofillSnapshotData(_formRules) {
    return {
      education: this._lastEducation,
      employment: this._lastEmployment,
    }
  }

  getAdditionalSubmitSnapshotData() {
    return {
      education: this._lastEducation,
      employment: this._lastEmployment,
    }
  }

  submitApplication() {
    let selector =
      './/button[@type="submit" or contains(@class, "submit")]'
    let button = xpath.getFirstOrderedNode(selector)
    if (button) button.click()
  }
}
