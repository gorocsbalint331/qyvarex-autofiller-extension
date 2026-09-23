// @ts-nocheck
/**
 * Gem ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and gem/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "gem"
 */

import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as gemAnswer from "./gem/answer.ts"
import * as operations from "./gem/operations.ts"
import * as rules from "./gem/rules.ts"

export class Gem extends BaseFiller {
  async requestFormAnswers(formRules, requestId, options = {}) {
    return gemAnswer.requestGemAnswers(formRules, (mappedRules) =>
      super.requestFormAnswers(mappedRules, requestId, options),
    )
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, values) => {
        let value = values?.[0]
        if (!value) return
        let isFile = rule.$input.type === "file"
        return isFile
          ? Promise.resolve()
          : operations.fillInputTextField(rule.$input, String(value ?? ""))
      },
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, values) =>
        operations.fillRadioGroupFiled(rule, values),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, values) =>
        operations.fillCheckboxGroupField(rule, values),
      [enums.FIELD_TYPE.SELECT]: (rule, values) =>
        operations.fillSelectField(rule, values),
    }
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "gem"
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getGemCoverLetterStatus())
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

  async getAutofillSnapshot(_formRules) {
    return await rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  async executeSiteSpecificSteps(formRules) {
    let coverLetterStatus = operations.getGemCoverLetterStatus()
    if (coverLetterStatus) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: coverLetterStatus === "required",
      })
    }
    let coverLetter = this.coverLetter
    if (coverLetter?.coverLetterId && coverLetter.coverLetterName) {
      this.taskQueue.add(async () => {
        let uploaded = await operations.uploadCoverLetter(
          {
            coverLetterId: coverLetter.coverLetterId,
            coverLetterName: coverLetter.coverLetterName,
            markdown: coverLetter.markdown,
            useLegacyDownload: coverLetter.useLegacyDownload,
          },
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded && coverLetterStatus === "required") {
          this.progressTracker.updateMissedProgress("Cover Letter")
        }
      })
      await this.taskQueue.run()
    } else if (coverLetterStatus === "required") {
      this.progressTracker.updateMissedProgress("Cover Letter")
    }
    await this.bindSubmitButtonTracking(formRules)
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    let button =
      target.tagName === "BUTTON" ? target : target.closest("button")
    if (!button) return null
    let text = button.textContent?.trim() || ""
    let isSubmit =
      button.getAttribute("type") === "submit" ||
      text.includes("Apply and save") ||
      text.includes("Apply without saving") ||
      text === "Apply"
    return isSubmit ? button : null
  }

  submitApplication() {
    let buttons = Array.from(
      document.querySelectorAll('button[type="submit"]'),
    )
    if (buttons.length === 0) return
    let submitButton = buttons.find((button) =>
      button.textContent?.trim().includes("Apply and save"),
    )
    if (!submitButton) {
      submitButton = buttons.find((button) =>
        button.textContent?.trim().includes("Apply without saving"),
      )
    }
    if (!submitButton) {
      submitButton = buttons.find((button) =>
        button.textContent?.trim().includes("Apply"),
      )
    }
    if (!submitButton) submitButton = buttons[0]
    if (submitButton && !submitButton.disabled) submitButton.click()
  }
}
