// @ts-nocheck
/**
 * ADP MyJobs ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and adp-myjobs/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "adp-myjobs"
 */

import * as answerMethods from "../methods/answer.ts"
import { BaseFiller } from "./base-filler.js"
import * as enums from "../../core/enums.js"
import * as phoneCountryCode from "../../core/phone-country-code.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as comboQuestions from "./combo-questions.ts"
import * as location from "./location.ts"
import * as operations from "./operations.ts"
import * as rules from "./rules.ts"

const COMBO_RESCAN_ATTEMPTS = 8

export function isAdpMyJobsTrackingButton(el) {
  if (!(el instanceof HTMLElement)) return false

  const disabled =
    el.disabled ||
    el.getAttribute("disabled") !== null ||
    el.getAttribute("aria-disabled") === "true"
  if (disabled) return false

  const text = (
    el.textContent ||
    el.getAttribute("value") ||
    el.getAttribute("aria-label") ||
    el.getAttribute("title") ||
    ""
  )
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()

  return (
    !!text &&
    (text === "continue" ||
      text === "next" ||
      text === "submit" ||
      text === "apply" ||
      text.includes("continue") ||
      text.includes("submit application"))
  )
}

function isContactLocationSelect(rule) {
  if (rule.type !== enums.FIELD_TYPE.SELECT) return false
  const dataName =
    rule.$input
      ?.closest?.("adp-form-group[data-name]")
      ?.getAttribute?.("data-name")
      ?.toLowerCase?.() || ""
  return dataName === "country" || dataName === "state"
}

class AdpMyJobs extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.comboQuestionSettleDelayMs = 800
    this.currentRunLocation = { country: "", state: "" }
    this.primaryPhoneCountryCodeCommitted = false
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, answers) => {
        if (
          !rules.shouldFillAdpMyJobsPhoneRule(
            rule,
            this.primaryPhoneCountryCodeCommitted,
          )
        ) {
          console.debug(
            "[ADP MyJobs][PhoneCountryCode] skipped phone write",
            { countryCodeCommitted: false },
          )
          return false
        }

        const raw = answers?.[0]
        if (!raw) {
          if (rule.description === phoneCountryCode.LOCAL_PHONE_DESCRIPTION) {
            console.debug(
              "[ADP MyJobs][PhoneCountryCode] missing phone answer",
            )
          }
          return false
        }

        const value =
          rule.description === phoneCountryCode.LOCAL_PHONE_DESCRIPTION
            ? phoneCountryCode.resolveNationalPhoneValue(raw, this.answer)
            : String(raw ?? "")

        return rule.description === phoneCountryCode.LOCAL_PHONE_DESCRIPTION
          ? operations.fillAdpMyJobsPhoneNumber(rule.$input, value)
          : operations.fillInputTextField(rule.$input, value)
      },

      [enums.FIELD_TYPE.DATE]: (rule, answers) => {
        if (answers && answers.length !== 0) {
          return operations.fillDateField(rule.$input, answers)
        }
      },

      [enums.FIELD_TYPE.SELECT]: async (rule, answers) => {
        if (rule.label === phoneCountryCode.PHONE_COUNTRY_CODE_LABEL) {
          const committed = await operations.fillAdpMyJobsPhoneCountryCode(
            rule,
            answers,
          )
          this.primaryPhoneCountryCodeCommitted = committed
          return committed
        }

        const locationAnswers = location.getAdpMyJobsCurrentLocationSelectValue(
          rule,
          answers,
          this.currentRunLocation,
        )
        if (locationAnswers !== undefined) {
          return operations.fillSelectField(rule, locationAnswers)
        }
      },

      [enums.FIELD_TYPE.CHECKBOX]: (rule, answers) =>
        operations.fillCheckboxField(rule, answers),

      [enums.FIELD_TYPE.RADIOGROUP]: (rule, answers) =>
        operations.fillRadioGroupFiled(rule, answers),
    }
  }

  async runPreFillForm() {
    this.currentRunLocation = { country: "", state: "" }
    const info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
    this.currentRunLocation = location.getAdpMyJobsAutofillLocation(info)
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  async fillRegularFields(allRules) {
    this.primaryPhoneCountryCodeCommitted = false
    const withoutLocation = allRules.filter((rule) => !isContactLocationSelect(rule))
    const ops = [
      ...answerMethods.getRegularOperations(
        withoutLocation,
        this.answer.regular,
        this.operationConfig,
      ),
    ]
    for (const op of ops) this.taskQueue.add(op)
    await this.taskQueue.run()
  }

  getSiteName() {
    return "adp-myjobs"
  }

  async handleResumeUpload() {
    if (!operations.hasAdpMyJobsResumeUploadUI()) return

    if (this.disableUploadResume) {
      await operations.removeResume()
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.removeResume()
        const uploaded = await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded) {
          this.progressTracker.updateFieldRequiredStatus({
            label: "Resume/CV",
            required: true,
          })
          this.progressTracker.updateMissedProgress("Resume/CV")
        }
      })
    }
    await this.taskQueue.run()
  }

  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit") or contains(text(), "Submit")]'
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    const button = target.closest("button, sdf-button, [role='button']")
    return button && isAdpMyJobsTrackingButton(button) ? button : null
  }

  async getAutofillSnapshot(_rules) {
    return await rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    let formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)

    if (
      formRules.length === 0 &&
      operations.hasAdpMyJobsResumeUploadUI()
    ) {
      console.info("[ADP MyJobs][ResumeUpload] resume-only-page", {
        rulesCount: formRules.length,
        disableUploadResume: this.disableUploadResume,
      })
      await this.handleResumeUpload()
      return this.finalizeFillForm()
    }

    const answerOrError = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof answerOrError === "string") return answerOrError

    const isEmploymentPage = !!document.querySelector(
      '.page-content-container[aria-label="Employment History"]',
    )
    if (isEmploymentPage) {
      const employerCount = this.answer?.workExperience?.length || 0
      if (employerCount > 0) {
        await operations.ensureEmploymentEmployerCount(employerCount)
      }
    }

    await this.handleResumeUpload()
    await this.fillRegularFields(formRules)

    const locationFilled =
      await operations.fillAutofillInfoContactLocationSelects(
        this.currentRunLocation,
      )
    if (locationFilled.country) {
      this.progressTracker.updateFilledProgress("Country")
    }
    if (locationFilled.state) {
      this.progressTracker.updateFilledProgress("State")
      this.progressTracker.updateFilledProgress("Province")
    }

    if (comboQuestions.shouldRunAdpMyJobsComboQuestionAutofill()) {
      for (let attempt = 0; attempt < COMBO_RESCAN_ATTEMPTS; attempt++) {
        const nextRules = await this.runComboQuestionAutofillIfNeeded(
          formRules,
          forceRefetch,
        )
        if (typeof nextRules === "string") return nextRules
        if (nextRules.length === formRules.length) break
        formRules = nextRules
      }
    }

    if (isEmploymentPage && (this.answer?.workExperience?.length || 0) > 0) {
      const employmentRules =
        await rules.extractEmploymentRulesForFillFromPage()
      const employmentOps = answerMethods.getEmploymentOperations(
        employmentRules,
        this.answer.workExperience,
        this.operationConfig,
        undefined,
        answerMethods.sectionProgressCallbacks(
          "Employment",
          this.progressTracker,
        ),
      )
      for (const op of employmentOps) this.taskQueue.add(op)
      await this.taskQueue.run()
    } else {
      await this.fillEducationAndEmployment(formRules)
    }

    await this.executeSiteSpecificSteps(formRules)
    return this.finalizeFillForm()
  }

  submitApplication() {
    const selector =
      './/button[@type="submit" or contains(@class, "submit")]'
    const button = xpath.getFirstOrderedNode(selector)
    if (button) button?.click()
  }
}

export { AdpMyJobs }
