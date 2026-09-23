// @ts-nocheck
/**
 * Recruitee ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and recruitee/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "recruitee"
 */

import * as dom from "../methods/dom.ts"
import * as track from "../methods/track.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as recruiteeAnswer from "./recruitee/answer.ts"
import * as operations from "./recruitee/operations.ts"
import * as rules from "./recruitee/rules.ts"

const SUBMIT_BUTTON_XPATH =
  '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]'

export class Recruitee extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.rules = []
    this.legacySubmitStatusAbortController = null
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          rule.__recruiteePhoneField === "number"
            ? operations.fillRecruiteePhoneNumberField(rule, value)
            : operations.fillInputTextField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          rule.__recruiteePhoneField === "country"
            ? operations.fillRecruiteePhoneCountryField(rule, this.answer)
            : operations.fillSelectField(rule, value),
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

  getSiteName() {
    return "recruitee"
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  formatAnswer(answer) {
    return recruiteeAnswer.formatAnswer(answer, this.rules)
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(
      operations.hasCoverLetterSlot() ? "required" : "",
    )
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.rules = formRules
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const answers = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof answers === "string") return answers

    this.bindLegacySubmitStatus()
    await this.fillRegularFields(formRules)
    await operations.agreementCheckboxField()
    await this.handleResumeUpload()
    await this.handleFileCoverLetterUpload()
    await this.taskQueue.run()
    await this.bindSubmitButtonTracking(formRules)
    return this.finalizeFillForm()
  }

  bindLegacySubmitStatus() {
    const button = xpath.getFirstOrderedNodeSafe(
      SUBMIT_BUTTON_XPATH,
      document.body,
    )
    this.legacySubmitStatusAbortController?.abort()
    this.legacySubmitStatusAbortController = null
    if (button) {
      this.legacySubmitStatusAbortController = new AbortController()
      track.bindSubmitButton(
        button.textContent || "Submit",
        this.progressTracker.fieldStatus,
        this.timeTrace,
        this.legacySubmitStatusAbortController.signal,
      )
    }
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
      return
    }
    this.taskQueue.add(async () => {
      await operations.uploadResume(
        this.resumeInfo,
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
      )
    })
  }

  async handleFileCoverLetterUpload() {
    if (!operations.hasCoverLetterSlot()) return

    this.progressTracker.updateFieldRequiredStatus({
      label: "Cover Letter",
      required: true,
    })

    if (this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName) {
      this.taskQueue.add(async () => {
        const uploaded = await operations.uploadCoverLetter(
          this.coverLetter,
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

  getSubmitButtonSelector() {
    return SUBMIT_BUTTON_XPATH
  }

  async getAutofillSnapshot(formRules) {
    this.rules = formRules
    return rules.getFormSnapshot(formRules)
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot(this.rules)
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(
      SUBMIT_BUTTON_XPATH,
      document.body,
    )
    button?.click()
  }
}
