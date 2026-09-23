// @ts-nocheck
/**
 * TrinetHire ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and trinethire/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "trinethire"
 */

import * as dom from "../methods/dom.js"
import * as track from "../methods/track.js"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as trinethireAnswer from "./trinethire/answer.ts"
import * as operations from "./trinethire/operations.ts"
import * as rules from "./trinethire/rules.ts"

const SUBMIT_BUTTON_SELECTOR =
  '//input[@id="apply_candidate" and @type="submit"] | //button[contains(@type, "submit")] | //button[contains(@class, "submit")]'

export class Trinethire extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.rules = []
    this.legacySubmitStatusAbortController = null
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

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getTrinethireCoverLetterStatus())
  }

  async doFillForm(skipCache = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.rules = formRules
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const answersOrError = await this.fetchFormAnswers(formRules, skipCache)
    return "string" == typeof answersOrError
      ? answersOrError
      : (this.bindLegacySubmitStatus(),
        await this.fillRegularFields(formRules),
        await this.handleResumeUpload(),
        await this.handleFileCoverLetterUpload(),
        await this.taskQueue.run(),
        await this.bindSubmitButtonTracking(formRules),
        await this.finalizeFillForm())
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  getSiteName() {
    return "trinethire"
  }

  formatAnswer(answer) {
    return trinethireAnswer.formatAnswer(answer)
  }

  bindLegacySubmitStatus() {
    this.legacySubmitStatusAbortController?.abort()
    this.legacySubmitStatusAbortController = new AbortController()
    const button = this.getSubmitButton()
    button &&
      track.bindSubmitButton(
        button.textContent || "Submit",
        this.progressTracker.fieldStatus,
        this.timeTrace,
        this.legacySubmitStatusAbortController.signal,
      )
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
    const status = operations.getTrinethireCoverLetterStatus()
    const required = "required" === status
    status &&
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required,
      })
    status &&
    this.coverLetter?.coverLetterId &&
    this.coverLetter.coverLetterName
      ? this.taskQueue.add(async () => {
          const uploaded = await operations.uploadCoverLetter(
            this.coverLetter,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          )
          !uploaded &&
            required &&
            this.progressTracker.updateMissedProgress("Cover Letter")
        })
      : required && this.progressTracker.updateMissedProgress("Cover Letter")
  }

  getSubmitButtonSelector() {
    return SUBMIT_BUTTON_SELECTOR
  }

  async getAutofillSnapshot(formRules) {
    return ((this.rules = formRules), rules.getFormSnapshot(formRules))
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot(this.rules)
  }

  submitApplication() {
    this.getSubmitButton()?.click()
  }

  getSubmitButton() {
    return xpath.getFirstOrderedNodeSafe(SUBMIT_BUTTON_SELECTOR, document.body)
  }
}
