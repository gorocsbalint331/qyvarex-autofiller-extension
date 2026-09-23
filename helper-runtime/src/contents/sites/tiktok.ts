// @ts-nocheck
/**
 * TikTok Careers ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and tiktok/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "tiktok"
 */

import * as answerMethods from "../methods/answer.ts"
import { BaseFiller } from "./base-filler.ts"
import * as tiktokAnswer from "./tiktok/answer.ts"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./tiktok/operations.ts"
import * as rules from "./tiktok/rules.ts"

function normalizeLabelKey(value) {
  return String(value || "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
}

function hasRegularAnswer(regular, key) {
  return (
    !!regular &&
    Object.entries(regular).some(
      ([label, value]) =>
        normalizeLabelKey(label) === key &&
        (Array.isArray(value)
          ? value.some((item) => null != item && String(item).trim())
          : null != value && String(value).trim()),
    )
  )
}

function ruleMatchesKey(rule, key) {
  return normalizeLabelKey(rule.label) === key
}

function isTextRuleFilled(formRules, key) {
  const rule = formRules.find((item) => ruleMatchesKey(item, key))
  if (!rule?.$input) return false
  const value = rule.$input.value
  return "string" == typeof value && value.trim().length > 0
}

function isPhoneCountryCodeFilled(formRules, key) {
  const rule = formRules.find((item) => ruleMatchesKey(item, key))
  const udSelect = rule?.$input?.closest?.(".ud__select")
  if (udSelect) {
    return !!udSelect
      .querySelector(".ud__select__selector__selectItem")
      ?.textContent?.trim()
  }
  const phoneRoot = rule?.$input?.closest?.(".atsx-phone")
  return !!(
    phoneRoot
      ?.querySelector('[data-cy="selectedValue"] [data-cy-value]')
      ?.getAttribute("data-cy-value") ||
    phoneRoot?.querySelector('[data-cy="selectedValue"]')?.textContent?.trim()
  )
}

export class Tiktok extends BaseFiller {
  constructor(...args) {
    super(...args)
    this._lastRules = []
    this._lastEducation = []
    this._lastEmployment = []
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (text) return operations.fillInputTextField(rule.$input, String(text ?? ""))
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) => {},
        options: {
          expectArray: false,
        },
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
    config[enums.FIELD_TYPE.DATE] = tiktokAnswer.createDateFillHandler({
      fillInputTextField: operations.fillInputTextField,
      updateFilledProgress:
        this.progressTracker.updateFilledProgress.bind(this.progressTracker),
      updateMissedProgress:
        this.progressTracker.updateMissedProgress.bind(this.progressTracker),
    })
    return config
  }

  async doFillForm(skipCache = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    const normalCount = formRules.filter(
      (rule) =>
        rule.type !== enums.FIELD_TYPE.EDUCATION &&
        rule.type !== enums.FIELD_TYPE.EMPLOYMENT,
    ).length
    console.debug(
      `[tiktok][rules] fill request total=${formRules.length}, normal=${normalCount}, name=${formRules.some((rule) => ruleMatchesKey(rule, "name"))}, email=${formRules.some((rule) => ruleMatchesKey(rule, "email"))}, phoneCountryCode=${formRules.some((rule) => ruleMatchesKey(rule, "phonecountrycode"))}, mobile=${formRules.some((rule) => ruleMatchesKey(rule, "mobile"))}, education=${formRules.filter((rule) => rule.type === enums.FIELD_TYPE.EDUCATION).length}, employment=${formRules.filter((rule) => rule.type === enums.FIELD_TYPE.EMPLOYMENT).length}`,
    )
    const statusRules = []
    const seenSectionTypes = /* @__PURE__ */ new Set()
    for (const rule of formRules) {
      const fieldType = rule.type
      if (
        fieldType === enums.FIELD_TYPE.EDUCATION ||
        fieldType === enums.FIELD_TYPE.EMPLOYMENT
      ) {
        const typeKey = String(fieldType)
        if (seenSectionTypes.has(typeKey)) continue
        seenSectionTypes.add(typeKey)
      }
      statusRules.push({
        label: rule.label,
        required: rule.required ?? null,
        options: rule.options,
        type: rule.type,
      })
    }
    this.progressTracker.setFieldsRequiredStatus(statusRules)
    await this.handleResumeUpload()
    const answersOrError = await this.fetchFormAnswers(formRules, skipCache)
    if ("string" == typeof answersOrError) return answersOrError
    this.answer = tiktokAnswer.formatAnswer(this.answer)
    const regular = this.answer?.regular
    return (
      console.debug(
        `[tiktok][answers] regularKeys=${Object.keys(regular || {}).length}, name=${hasRegularAnswer(regular, "name")}, email=${hasRegularAnswer(regular, "email")}, phoneCountryCode=${hasRegularAnswer(regular, "phonecountrycode")}, mobile=${hasRegularAnswer(regular, "mobile")}, education=${this.answer?.education?.length || 0}, employment=${this.answer?.workExperience?.length || 0}`,
      ),
      await this.fillRegularFields(formRules),
      console.debug(
        `[tiktok][regular-fill] name=${isTextRuleFilled(formRules, "name")}, email=${isTextRuleFilled(formRules, "email")}, phoneCountryCode=${isPhoneCountryCodeFilled(formRules, "phonecountrycode")}, mobile=${isTextRuleFilled(formRules, "mobile")}`,
      ),
      await this.executeSiteSpecificSteps(formRules),
      this.finalizeFillForm()
    )
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "tiktok"
  }

  async handleResumeUpload() {
    this.disableUploadResume
      ? (await operations.removeResume(),
        this.progressTracker.updateMissedProgress("Resume/CV"))
      : this.taskQueue.add(async () => {
          await operations.removeResume()
          await operations.uploadResume(
            this.resumeInfo,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          )
        })
    await this.taskQueue.run()
  }

  async fillEducationAndEmployment(_formRules) {
    if (
      Array.isArray(this.answer?.education) &&
      this.answer.education.length > 0
    ) {
      await operations.addEducationSection(this.answer.education.length)
      const educationRules = rules.getEducationRules()
      coreDom.setSectionResultFocusRules(
        enums.FIELD_TYPE.EDUCATION,
        educationRules,
      )
      const educationOps = answerMethods.getEducationOperations(
        educationRules,
        this.answer.education,
        this.operationConfig,
        void 0,
        answerMethods.sectionProgressCallbacks(
          "Education",
          this.progressTracker,
        ),
      )
      for (const op of educationOps) this.taskQueue.add(op)
      await this.taskQueue.run()
    }
    if (
      Array.isArray(this.answer?.workExperience) &&
      this.answer.workExperience.length > 0
    ) {
      await operations.addEmploymentSection(this.answer.workExperience.length)
      const experienceRules = rules.getExperienceRules()
      coreDom.setSectionResultFocusRules(
        enums.FIELD_TYPE.EMPLOYMENT,
        experienceRules,
      )
      const sectionLabel = experienceRules?.[0]?.label || "Work Experience"
      const employmentOps = answerMethods.getEmploymentOperations(
        experienceRules,
        this.answer.workExperience,
        this.operationConfig,
        void 0,
        answerMethods.sectionProgressCallbacks(
          sectionLabel,
          this.progressTracker,
        ),
      )
      for (const op of employmentOps) this.taskQueue.add(op)
      await this.taskQueue.run()
    }
  }

  async executeSiteSpecificSteps(formRules) {
    await this.fillEducationAndEmployment(formRules)
    await operations.fillOthersConditionalFields(this.answer?.regular ?? {})
    await super.executeSiteSpecificSteps(formRules)
  }

  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit") or contains(normalize-space(.), "Submit")]'
  }

  async getAutofillSnapshot(formRules) {
    this._lastRules = formRules
    const snapshot = await rules.getFormSnapshot(formRules)
    const { education, employment, ...regularSnapshot } = snapshot
    this._lastEducation = Array.isArray(education) ? education : []
    this._lastEmployment = Array.isArray(employment) ? employment : []
    return regularSnapshot
  }

  async getSubmitSnapshot() {
    const snapshot = await rules.getFormSnapshot(this._lastRules)
    const { education, employment, ...regularSnapshot } = snapshot
    this._lastEducation = Array.isArray(education) ? education : []
    this._lastEmployment = Array.isArray(employment) ? employment : []
    return regularSnapshot
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
    const selector = './/button[@type="submit" or contains(@class, "submit")]'
    const button = xpath.getFirstOrderedNode(selector)
    button && button.click()
  }
}
