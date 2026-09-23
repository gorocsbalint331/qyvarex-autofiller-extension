// @ts-nocheck
/**
 * CareerPlug ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and careerplug/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "careerplug"
 */

import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as operations from "./careerplug/operations.ts"
import * as rules from "./careerplug/rules.ts"

class CareerPlug extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.hasUploadedCoverLetter = false
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillInputTextField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.COVER_LETTER]: {
        handler: (rule, value) =>
          operations.fillInputTextField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => operations.fillSelectField(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillCheckboxField(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) => operations.fillRadioGroupField(rule, value),
        options: {
          expectArray: true,
        },
      },
    }
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    const formRules = this.prepareCoverLetterRules(
      await this.extractFormRules(),
    )
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const answers = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof answers === "string") return answers

    await this.handleResumeUpload()
    await this.fillRegularFields(formRules)
    await this.fillCoverLetterFields()
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  getSiteName() {
    return "careerplug"
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

  async fillCoverLetterFields() {
    await super.fillCoverLetterFields()
    if (this.hasUploadedCoverLetter || !this.coverLetter?.coverLetterId) return

    const coverLetter = this.coverLetter
    this.hasUploadedCoverLetter = await operations.uploadCoverLetter(
      {
        coverLetterId: coverLetter.coverLetterId,
        coverLetterName: coverLetter.coverLetterName || "Cover Letter",
        markdown: coverLetter.markdown,
      },
      this.progressTracker.updateFieldRequiredStatus,
      this.progressTracker.updateFilledProgress,
    )
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getCareerPlugCoverLetterStatus())
  }

  async getAutofillSnapshot() {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  getSubmitButtonSelector() {
    return './/input[@type="submit"] | .//button[@type="submit"]'
  }

  submitApplication() {
    const button =
      document.querySelector('input[type="submit"]') ||
      document.querySelector('button[type="submit"]')
    button?.click()
  }
}

export { CareerPlug }
