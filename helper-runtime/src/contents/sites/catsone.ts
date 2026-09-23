// @ts-nocheck
/**
 * Catsone ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and catsone/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "catsone"
 */

import { BaseFiller } from "./base-filler.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./catsone/operations.ts"
import * as rules from "./catsone/rules.ts"
import * as catsoneAnswer from "./catsone/answer.ts"
import * as dom from "../methods/dom.js"

const SUBMIT_BUTTON_XPATH =
  './/button[@type="submit"] | .//input[@type="submit"] | .//button[.//span[normalize-space()="Submit Application"]] | .//button[contains(@class, "submit")] | .//button[contains(normalize-space(.), "Submit")] | .//button[contains(normalize-space(.), "Apply")] | .//button[contains(normalize-space(.), "Send")] | .//input[contains(@value, "Submit")] | .//input[contains(@value, "Apply")]'

export class Catsone extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const text = value?.[0]
        if (text) return operations.fillInputTextField(rule.$input, String(text ?? ""))
      },
      [enums.FIELD_TYPE.DATE]: (rule, value) => {
        const text = value?.[0]
        if (text) return operations.fillDateField(rule.$input, String(text ?? ""))
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIO]: (rule, value) =>
        operations.fillRadioFiled(rule, value),
      [enums.FIELD_TYPE.MULTI_SELECT]: (rule, value) =>
        operations.fillMultiSelectField(rule, value),
    }
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    let formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    await this.handleResumeUpload()
    formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)

    const fetchResult = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof fetchResult === "string") return fetchResult

    this.answer = catsoneAnswer.formatAnswer(this.answer)
    await this.fillRegularFields(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return this.finalizeFillForm()
  }

  async executeSiteSpecificSteps(formRules) {
    const coverLetterStatus = operations.getCatsoneCoverLetterStatus()
    if (coverLetterStatus) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: coverLetterStatus === "required",
      })

      if (this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName) {
        const uploaded = await operations.uploadCoverLetter(
          {
            coverLetterId: this.coverLetter.coverLetterId,
            coverLetterName: this.coverLetter.coverLetterName,
            markdown: this.coverLetter.markdown,
            useLegacyDownload: this.coverLetter.useLegacyDownload,
          },
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded && coverLetterStatus === "required") {
          this.progressTracker.updateMissedProgress("Cover Letter")
        }
      } else if (coverLetterStatus === "required") {
        this.progressTracker.updateMissedProgress("Cover Letter")
      }
    }

    await this.bindSubmitButtonTracking(formRules)
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getCatsoneCoverLetterStatus())
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "catsone"
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

  getSubmitButtonSelector() {
    return SUBMIT_BUTTON_XPATH
  }

  async getAutofillSnapshot(_formRules) {
    return await rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNode(SUBMIT_BUTTON_XPATH)
    if (button) {
      button.click()
    } else {
      console.warn("[submitApplication] No submit button found")
    }
  }
}
