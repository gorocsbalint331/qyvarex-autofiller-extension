// @ts-nocheck
/**
 * Okta ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and okta/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "okta"
 */

import * as dom from "../methods/dom.ts"
import * as track from "../methods/track.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as oktaAnswer from "./okta/answer.ts"
import * as operations from "./okta/operations.ts"
import * as rules from "./okta/rules.ts"

const SUBMIT_BUTTON_XPATH =
  '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]'

export class Okta extends BaseFiller {
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

  getSiteName() {
    return "okta"
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  formatAnswer(answer) {
    return oktaAnswer.formatAnswer(answer)
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getOktaCoverLetterStatus())
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
    this.progressTracker.updateFilledProgress("Country")
    await this.bindSubmitButtonTracking(formRules)
    return this.finalizeFillForm()
  }

  bindLegacySubmitStatus() {
    this.legacySubmitStatusAbortController?.abort()
    this.legacySubmitStatusAbortController = new AbortController()
    const button = xpath.getFirstOrderedNodeSafe(
      SUBMIT_BUTTON_XPATH,
      document.body,
    )
    if (button) {
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
      try {
        const uploaded = await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded) this.progressTracker.updateMissedProgress("Resume/CV")
      } catch (error) {
        console.error("Error uploading Okta resume:", error)
        this.progressTracker.updateMissedProgress("Resume/CV")
      }
    })
  }

  async handleFileCoverLetterUpload() {
    const status = operations.getOktaCoverLetterStatus()
    if (status === "required") {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: true,
        type: "file",
      })
    }
    if (
      status === "required" &&
      this.coverLetter?.coverLetterId &&
      this.coverLetter.coverLetterName
    ) {
      this.taskQueue.add(async () => {
        try {
          const uploaded = await operations.uploadCoverLetter(
            this.coverLetter,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          )
          if (!uploaded) {
            this.progressTracker.updateMissedProgress("Cover Letter")
          }
        } catch (error) {
          console.error("Error uploading Okta cover letter:", error)
          this.progressTracker.updateMissedProgress("Cover Letter")
        }
      })
    } else if (status === "required") {
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
