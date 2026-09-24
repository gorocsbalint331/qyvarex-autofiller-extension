// @ts-nocheck
/**
 * Personio ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and personio/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "personio"
 */

import * as dom from "../methods/dom.ts"
import * as track from "../methods/track.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as phoneCountryCode from "../../core/phone-country-code.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./personio/operations.ts"
import * as rules from "./personio/rules.ts"

const SUBMIT_BUTTON_SELECTOR =
  'button.career-submit-application-btn[type="submit"]'

export class Personio extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillInputTextField(
            rule,
            value,
            phoneCountryCode.resolvePhoneCountryCodeAnswer(this.answer),
          ),
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
    dom.postCoverLetterStatus(operations.getPersonioCoverLetterStatus())
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const answers = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof answers === "string") return answers

    this.bindSubmitStatusTracking()
    await this.fillRegularFields(formRules)
    await this.handleDocumentUploads()
    await this.bindSubmitButtonTracking(formRules)
    return await this.finalizeFillForm()
  }

  bindSubmitStatusTracking() {
    const button = xpath.getFirstOrderedNodeSafe(
      '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]',
      document.body,
    )
    if (button) {
      track.bindSubmitButton(
        button.textContent || "Submit",
        this.progressTracker.fieldStatus,
        this.timeTrace,
      )
    }
  }

  async handleDocumentUploads() {
    const coverLetterStatus = operations.getPersonioCoverLetterStatus()
    if (coverLetterStatus) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: coverLetterStatus === "required",
        type: "file",
      })
    }

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

    const coverLetterPayload = this.getCoverLetterFilePayload()
    if (coverLetterStatus && coverLetterPayload) {
      this.taskQueue.add(async () => {
        try {
          await operations.uploadCoverLetter(
            coverLetterPayload,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
            coverLetterStatus === "required"
              ? this.progressTracker.updateMissedProgress
              : () => {},
            coverLetterStatus === "required",
          )
        } catch (error) {
          console.error("Error uploading Personio cover letter:", error)
          if (coverLetterStatus === "required") {
            this.progressTracker.updateMissedProgress("Cover Letter")
          }
        }
      })
    } else if (coverLetterStatus === "required") {
      this.progressTracker.updateMissedProgress("Cover Letter")
    }

    await this.taskQueue.run()
  }

  getCoverLetterFilePayload() {
    const coverLetter = this.coverLetter
    return coverLetter?.coverLetterId && coverLetter.coverLetterName
      ? {
          coverLetterId: coverLetter.coverLetterId,
          coverLetterName: coverLetter.coverLetterName,
          markdown: coverLetter.markdown,
          useLegacyDownload: coverLetter.useLegacyDownload,
        }
      : null
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  getSiteName() {
    return "personio"
  }

  async getAutofillSnapshot() {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    const button = this.getSubmitButton()
    if (button) button.click()
  }

  getSubmitButton() {
    return (
      document.querySelector(SUBMIT_BUTTON_SELECTOR) ||
      xpath.getFirstOrderedNodeSafe(
        '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]',
        document.body,
      )
    )
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    const button = target.closest("button")
    if (!(button instanceof HTMLButtonElement)) return null
    if (button.matches(SUBMIT_BUTTON_SELECTOR)) return button
    if (this.getSubmitButton() === button) return button
    return null
  }
}
