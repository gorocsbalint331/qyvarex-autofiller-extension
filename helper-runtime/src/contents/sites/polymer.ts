// @ts-nocheck
/**
 * Polymer ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and polymer/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "polymer"
 */

import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.ts"
import * as polymerAnswer from "./polymer/answer.ts"
import * as operations from "./polymer/operations.ts"
import * as rules from "./polymer/rules.ts"
import * as enums from "../../core/enums.js"

export class Polymer extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillTextField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          operations.fillReactSelect(rule.$input, value),
        options: {
          expectArray: true,
        },
      },
    }
  }

  getSiteName() {
    return "polymer"
  }

  hasUploadOnlyForm() {
    return (
      !!operations.findUploaderInput("resume") ||
      !!operations.getPolymerCoverLetterStatus()
    )
  }

  async extractFormRules() {
    return rules.getRules()
  }

  formatAnswer(answer) {
    return polymerAnswer.formatAnswer(answer)
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getPolymerCoverLetterStatus())
  }

  async handleResumeUpload() {
    const resumeInput = operations.findUploaderInput("resume")
    if (!this.disableUploadResume && this.resumeInfo?.id && resumeInput) {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    } else if (resumeInput) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: resumeInput.required,
      })
      if (resumeInput.required) {
        this.progressTracker.updateMissedProgress("Resume/CV")
      }
    }

    const coverStatus = operations.getPolymerCoverLetterStatus()
    if (coverStatus) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: coverStatus === "required",
      })
    }

    const coverLetter = this.coverLetter
    if (
      coverStatus &&
      coverLetter?.coverLetterId &&
      coverLetter.coverLetterName
    ) {
      this.taskQueue.add(async () => {
        const uploaded = await operations.uploadCoverLetter(
          {
            coverLetterId: coverLetter.coverLetterId,
            coverLetterName: coverLetter.coverLetterName,
            markdown: coverLetter.markdown,
            useLegacyDownload: coverLetter.useLegacyDownload,
          },
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded && coverStatus === "required") {
          this.progressTracker.updateMissedProgress("Cover Letter")
        }
      })
    } else if (coverStatus === "required") {
      this.progressTracker.updateMissedProgress("Cover Letter")
    }

    await this.taskQueue.run()
  }

  getSubmitButtonSelector() {
    return './/button[contains(@class, "ApplicationForm_Button")]'
  }

  async getAutofillSnapshot(_formRules) {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    rules.getSubmitButton()?.click()
  }
}
