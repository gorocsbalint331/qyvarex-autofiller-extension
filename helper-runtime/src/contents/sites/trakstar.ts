// @ts-nocheck
/**
 * Trakstar ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and trakstar/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "trakstar"
 */

import { BaseFiller } from "./base-filler.ts"
import * as dom from "../methods/dom.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as delay from "../../utils/delay.js"
import * as operations from "./trakstar/operations.ts"
import * as rules from "./trakstar/rules.ts"

const isVisiblyInteractable = (el) => {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  if (rect.width <= 0 || rect.height <= 0) return false
  let node = el
  for (; node; ) {
    const style = window.getComputedStyle(node)
    if ("none" === style.display || "hidden" === style.visibility) return false
    node = node.parentElement
  }
  return true
}

export class Trakstar extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillInputTextField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIO]: (rule, value) =>
        operations.fillRadioField(rule, value),
    }
  }

  async runPreFillForm() {
    const form = document.querySelector("form#job_application_form")
    if (!form) return
    const firstField = form.querySelector(
      'input:not([type="hidden"]), textarea, select',
    )
    if (isVisiblyInteractable(firstField)) return
    const applyButton =
      document.querySelector(
        ".js-apply-for-job, #div_apply_to_job a.btn-apply, a.btn-apply",
      ) ||
      Array.from(
        document.querySelectorAll("button, a, input[type='button']"),
      ).find((el) => {
        const text = el.textContent || el.getAttribute("value") || ""
        return /apply/i.test(text) && !/indeed/i.test(text)
      })
    applyButton?.click()
    await delay.delay(500)
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  getSiteName() {
    return "trakstar"
  }

  hasUploadOnlyForm() {
    return !!operations.getResumeInput() || !!operations.getCoverLetterInput()
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getCoverLetterStatus())
  }

  async handleResumeUpload() {
    const resumeInput = operations.getResumeInput()
    !this.disableUploadResume && this.resumeInfo?.id && resumeInput
      ? this.taskQueue.add(async () => {
          await operations.uploadResume(
            this.resumeInfo,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          )
        })
      : resumeInput &&
        (this.progressTracker.updateFieldRequiredStatus({
          label: "Resume/CV",
          required: resumeInput.required,
        }),
        resumeInput.required &&
          this.progressTracker.updateMissedProgress("Resume/CV"))
    await this.taskQueue.run()
    const coverLetterInput = operations.getCoverLetterInput()
    coverLetterInput &&
      (this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName
        ? (this.taskQueue.add(async () => {
            await operations.uploadCoverLetter(
              {
                coverLetterId: this.coverLetter.coverLetterId,
                coverLetterName: this.coverLetter.coverLetterName,
                markdown: this.coverLetter.markdown,
                useLegacyDownload: this.coverLetter.useLegacyDownload,
              },
              this.progressTracker.updateFieldRequiredStatus,
              this.progressTracker.updateFilledProgress,
            )
          }),
          await this.taskQueue.run())
        : coverLetterInput.required &&
          (this.progressTracker.updateFieldRequiredStatus({
            label: "Cover Letter",
            required: true,
          }),
          this.progressTracker.updateMissedProgress("Cover Letter")))
  }

  getSubmitButtonSelector() {
    return '//form[@id="job_application_form"]//input[@type="submit"] | //form[@id="job_application_form"]//button[@type="submit"]'
  }

  async getAutofillSnapshot(_formRules) {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(this.getSubmitButtonSelector())
    button && !button.disabled && button.click()
  }
}
