// @ts-nocheck
/**
 * Recruiterflow ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and recruiterflow/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "recruiterflow"
 */

import * as answerMethods from "../methods/answer.ts"
import * as dom from "../methods/dom.ts"
import * as rulesMethods from "../methods/rules.ts"
import * as track from "../methods/track.ts"
import * as recruiterflowAnswer from "./recruiterflow/answer.ts"
import * as operations from "./recruiterflow/operations.ts"
import * as phoneCountryCode from "./recruiterflow/phone-country-code.ts"
import * as rules from "./recruiterflow/rules.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as coreDom from "../../core/dom.js"
import * as corePhoneCountryCode from "../../core/phone-country-code.js"
import * as delay from "../../utils/delay.js"
import * as fieldLabel from "../../utils/fieldLabel.js"

export class Recruiterflow extends BaseFiller {
  constructor() {
    super()
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: async (rule, value) => {
        await operations.fillInputTextField(rule.$input, value)
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: async (rule, value) => {
          await operations.fillCheckboxField(rule, value)
        },
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: async (rule, value) => {
          if (rule.$input.tagName.toLowerCase() === "select") {
            await operations.fillSelectField(rule.$input, value)
          } else {
            await operations.fillCustomSelect(rule, value)
          }
        },
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.MULTI_SELECT]: {
        handler: async (rule, value) => {
          await operations.fillCustomSelect(rule, value)
        },
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: async (rule, value) => {
          await operations.fillDatePicker(rule.$input, value)
        },
        options: { expectArray: false },
      },
    }
  }

  getSiteName() {
    return "recruiterflow"
  }

  async extractFormRules() {
    return await rules.getRules()
  }

  async getAutofillSnapshot(_formRules) {
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

  getSubmitButtonSelector() {
    return './/button[@id="submit-application-button"] | .//button[contains(@class, "submit-application-button")]'
  }

  submitApplication() {
    const button = document.querySelector(
      "button#submit-application-button, button.submit-application-button",
    )
    if (button) button.click()
  }

  formatAnswer(answer) {
    return recruiterflowAnswer.formatAnswer(answer)
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getRecruiterflowCoverLetterStatus())
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.waitPageClean)
    await this.taskQueue.run()
    this.taskQueue.add(operations.expandAllSections)
    await this.taskQueue.run()
  }

  async handleResumeUpload() {
    if (!this.disableUploadResume && this.resumeInfo) {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
      await this.taskQueue.run()
      await delay.delay(2e3)
    } else {
      this.progressTracker.updateMissedProgress("Resume/CV")
    }
  }

  async handleCoverLetterUpload() {
    const status = operations.getRecruiterflowCoverLetterStatus()
    if (status !== "required") return

    this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: true,
    })

    if (!this.coverLetter?.coverLetterId || !this.coverLetter.coverLetterName) {
      this.progressTracker.updateMissedProgress("Cover Letter")
      return
    }

    const uploaded = await operations.uploadCoverLetter(
      this.coverLetter,
      this.progressTracker.updateFieldRequiredStatus,
      this.progressTracker.updateFilledProgress,
    )
    if (!uploaded) this.progressTracker.updateMissedProgress("Cover Letter")
  }

  async getEducationAndEmploymentRules() {
    const eduRules = await rules.getEduRules()
    const expRules = await rules.getExpRules()
    return [...expRules, ...eduRules]
  }

  async fillEducationAndEmployment(_rules) {}

  async executeSiteSpecificSteps(formRules) {
    const eduRules = await rules.getEduRules()
    const expRules = await rules.getExpRules()
    coreDom.setSectionResultFocusRules("education", eduRules)
    coreDom.setSectionResultFocusRules("employment", expRules)
    console.info("[Recruiterflow][Experience] fill-plan", {
      domRowCount: expRules.length,
      answerRecordCount: this.answer.workExperience?.length ?? 0,
      recordFieldCounts: (this.answer.workExperience || []).map(
        (item) => Object.keys(item || {}).length,
      ),
    })

    const employmentOps = answerMethods.getEmploymentOperations(
      expRules,
      this.answer.workExperience,
      this.operationConfig,
      undefined,
      {
        onCompleted: () =>
          this.progressTracker.updateFilledProgress("Employment"),
        onSkipped: () =>
          this.progressTracker.updateMissedProgress("Employment"),
        onSectionResultChanged: this.progressTracker.updateSectionResult,
      },
    )
    const educationOps = answerMethods.getEducationOperations(
      eduRules,
      this.answer.education,
      this.operationConfig,
      undefined,
      {
        onCompleted: () =>
          this.progressTracker.updateFilledProgress("Education"),
        onSkipped: () =>
          this.progressTracker.updateMissedProgress("Education"),
        onSectionResultChanged: this.progressTracker.updateSectionResult,
      },
    )

    const regularRules = formRules.filter(
      (rule) =>
        !["phone", "phone number", "phone country code"].includes(
          fieldLabel.normalizeFieldLabel(rule.label),
        ),
    )
    const regularOps = answerMethods.getRegularOperations(
      regularRules,
      this.answer.regular,
      this.operationConfig,
    )
    const ops = [...regularOps, ...employmentOps, ...educationOps]
    for (const op of ops) this.taskQueue.add(op)

    await this.taskQueue.run()
    await this.handleCountrySelection(formRules)
    await this.handlePhoneNumber(formRules)
    this.taskQueue.add(async () => {
      await operations.blurPage()
    })
    await this.taskQueue.run()
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    const sectionRules = await this.getEducationAndEmploymentRules()
    const allRules = [...formRules, ...sectionRules]
    this.progressTracker.setFieldsRequiredStatus(allRules)

    this.taskQueue.add(operations.blurPage)
    await this.taskQueue.run()

    const answerRules = rulesMethods.filterRulesByLabel(allRules, [
      "Upload Resume",
      "Cover Letter",
      "Country Phone Code",
      "Date",
    ])
    const answers = await this.fetchFormAnswers(answerRules, forceRefetch)
    if (typeof answers === "string") return answers

    this.taskQueue.add(async () => {
      await operations.expandForm(this.answer)
    })
    await this.taskQueue.run()
    await delay.delay(500)
    await this.handleResumeUpload()
    await this.handleCoverLetterUpload()
    await this.executeSiteSpecificSteps(formRules)
    await this.bindSubmitButtonTracking(formRules)

    const submitText = rules.getSubmitButtonText()
    track.bindSubmitButton(
      submitText,
      this.progressTracker.fieldStatus,
      this.timeTrace,
    )
    return await this.finalizeFillForm()
  }

  async handlePhoneNumber(formRules = []) {
    const hasPhone = formRules.some((rule) =>
      ["phone", "phone number"].includes(
        fieldLabel.normalizeFieldLabel(rule.label),
      ),
    )
    const hasPhoneCountry = formRules.some(
      (rule) =>
        fieldLabel.normalizeFieldLabel(rule.label) === "phone country code",
    )

    try {
      const phoneAnswer =
        this.answer.regular?.Phone ||
        this.answer.regular?.phone ||
        this.answer.regular?.["Phone Number"]
      if (!phoneAnswer) {
        if (hasPhone) this.progressTracker.updateMissedProgress("Phone")
        if (hasPhoneCountry) {
          this.progressTracker.updateMissedProgress("Phone Country Code")
        }
        return
      }

      const regularPhoneCountry = this.getRegularPhoneCountryCode()
      const countrySource = this.getPhoneCountrySource()
      const result = await operations.fillPhoneNumber(
        corePhoneCountryCode.resolveDualControlPhoneValue(
          phoneAnswer,
          countrySource,
        ) || String(phoneAnswer),
        countrySource,
      )

      if (result.phoneFilled) {
        this.progressTracker.updateFilledProgress("Phone")
      } else {
        this.progressTracker.updateMissedProgress("Phone")
      }

      if (hasPhoneCountry || regularPhoneCountry) {
        if (result.phoneCountryFilled) {
          this.progressTracker.updateFilledProgress("Phone Country Code")
        } else {
          this.progressTracker.updateMissedProgress("Phone Country Code")
        }
      }
    } catch (_error) {
      if (hasPhone) this.progressTracker.updateMissedProgress("Phone")
      if (hasPhoneCountry) {
        this.progressTracker.updateMissedProgress("Phone Country Code")
      }
    }
  }

  async handleCountrySelection(formRules) {
    try {
      const country = this.getProfileCountry()
      const countryRule = this.getCountryRule(formRules)
      if (!countryRule) return
      const filled = await operations.fillReactSelect(country, countryRule)
      if (!filled) {
        this.progressTracker.updateMissedProgress("Country")
        return
      }
      this.progressTracker.updateFilledProgress("Country")
    } catch (_error) {
      this.progressTracker.updateMissedProgress("Country")
    }
  }

  getProfileCountry() {
    return (
      this.answer.profile_data?.country ||
      this.answer.profileData?.country ||
      this.answer.country ||
      this.answer.regular?.Country ||
      this.answer.regular?.country ||
      "United States"
    )
  }

  getPhoneCountrySource() {
    return (
      this.getRegularPhoneCountryCode() ||
      this.getProfilePhoneCountryCode() ||
      this.getProfileCountry()
    )
  }

  getProfilePhoneCountryCode() {
    return (
      phoneCountryCode.normalizePhoneCountryCodeSource(
        this.answer.profileData?.phoneCountryCode ??
          this.answer.profileData?.phone_country_code ??
          this.answer.profile_data?.phoneCountryCode ??
          this.answer.profile_data?.phone_country_code,
      ) || ""
    )
  }

  getRegularPhoneCountryCode() {
    const regular = this.answer.regular || {}
    const labels = [
      "Phone Country Code",
      "Country Phone Code",
      "Country Code",
      "phoneCountryCode",
      "phone_country_code",
    ]
    for (const label of labels) {
      const value = phoneCountryCode.normalizePhoneCountryCodeSource(
        regular[label],
      )
      if (value) return value
    }
    return ""
  }

  getCountryRule(formRules) {
    return formRules.find(
      (rule) => fieldLabel.normalizeFieldLabel(rule.label) === "country",
    )
  }
}
