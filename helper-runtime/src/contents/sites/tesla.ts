// @ts-nocheck
/**
 * Tesla ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and tesla/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "tesla"
 */

import * as answerMethods from "../methods/answer.js"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as phoneCountryCode from "../../core/phone-country-code.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./tesla/operations.ts"
import * as teslaDate from "./tesla/date.ts"
import * as rules from "./tesla/rules.ts"

export class Tesla extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.nextButtonHandler = null
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, values) => {
        const value = values?.[0]
        if (!value) return
        const country = this.answer?.country
        return operations.fillInputTextField(
          rule,
          String(value ?? ""),
          country,
          phoneCountryCode.resolvePhoneCountryCodeAnswer(this.answer),
        )
      },
      [enums.FIELD_TYPE.DATE]: (rule, values) => {
        const value = values?.[0]
        if (value) {
          return teslaDate.fillTeslaDateField(rule, String(value ?? ""))
        }
      },
      [enums.FIELD_TYPE.SELECT]: (rule, values) =>
        operations.fillSelectField(rule, values),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, values) =>
        operations.fillCheckboxField(rule, values),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, values) =>
        operations.fillRadioGroupFiled(rule, values),
    }
  }

  async doFillForm(forceRefetch = false) {
    try {
      await this.initializeFillForm()
      const formRules = await this.extractFormRules()
      this.progressTracker.setFieldsRequiredStatus(formRules)
      const answers = await this.fetchFormAnswers(formRules, forceRefetch)
      if (typeof answers === "string") return answers
      await this.handleResumeUpload()
      const operationsList = [
        ...answerMethods.getRegularOperations(
          formRules,
          this.answer.regular,
          this.operationConfig,
        ),
      ]
      for (const run of operationsList) {
        try {
          const result = run()
          if (result && typeof result.then === "function") await result
        } catch (error) {
          console.error("Operation execution error:", error)
        }
      }
      await operations.scrollTeslaEeoDisclosurePanel()
      return this.finalizeFillForm()
    } catch (error) {
      console.error("fillForm error:", error)
      this.taskQueue.clear()
      return this.finalizeFillForm()
    }
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "tesla"
  }

  async getAutofillSnapshot(_formRules) {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  async finalizeFillForm() {
    const autofillSnapshot = rules.getFormSnapshot()
    const nextButton = document.querySelector('button[name="next"]')
    if (nextButton && nextButton.name === "next") {
      if (this.nextButtonHandler) {
        nextButton.removeEventListener("click", this.nextButtonHandler)
      }
      this.nextButtonHandler = operations.submitHandler.bind(
        null,
        autofillSnapshot,
      )
      nextButton.addEventListener("click", this.nextButtonHandler)
    }
    return await super.finalizeFillForm()
  }

  submitApplication() {
    const xpathExpr = ".//button[@name='submit']"
    const button = xpath.getFirstOrderedNode(xpathExpr)
    if (button) button?.click()
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
      return
    }
    const input = document.querySelector(
      'input[type="file"][name="personal.resume"]',
    )
    if (!input) {
      console.warn("[Tesla] Resume input not found")
      this.progressTracker.updateMissedProgress("Resume/CV")
      return
    }
    await operations.uploadResume(
      this.resumeInfo,
      this.progressTracker.updateFieldRequiredStatus,
      this.progressTracker.updateFilledProgress,
    )
  }
}
