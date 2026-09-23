// @ts-nocheck
/**
 * HubSpot ATS filler — readable TypeScript source of truth.
 */

import * as dom from "../methods/dom.js"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./hubspot/operations.ts"
import * as rules from "./hubspot/rules.ts"

export class HubSpot extends BaseFiller {
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
      [enums.FIELD_TYPE.SEARCH]: (rule, value) =>
        operations.fillSearchField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIO]: (rule, value) =>
        operations.fillRadioField(rule, value),
    }
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  getSiteName() {
    return "hubspot"
  }

  hasUploadOnlyForm() {
    return (
      !!operations.getUploadSlotDom("resume").input ||
      operations.hasCoverLetterSlot()
    )
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(
      operations.hasCoverLetterSlot() ? "required" : "",
    )
  }

  async handleResumeUpload() {
    let resumeInput = operations.getUploadSlotDom("resume").input
    if (
      !this.disableUploadResume &&
      this.resumeInfo?.id &&
      resumeInput
    ) {
      this.taskQueue.add(async () => {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    } else if (resumeInput) {
      if (this.disableUploadResume) {
        await operations.removeUploadedFile("resume")
      }
      this.progressTracker.updateFieldRequiredStatus({
        label: "Resume/CV",
        required: true,
      })
      this.progressTracker.updateMissedProgress("Resume/CV")
    }
    await this.taskQueue.run()
  }

  async executeSiteSpecificSteps(answer) {
    if (operations.hasCoverLetterSlot()) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: true,
      })
    }

    if (
      this.coverLetter?.coverLetterId &&
      this.coverLetter.coverLetterName
    ) {
      this.taskQueue.add(async () => {
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
      })
      await this.taskQueue.run()
    } else if (operations.hasCoverLetterSlot()) {
      this.progressTracker.updateMissedProgress("Cover Letter")
    }

    await this.bindSubmitButtonTracking(answer)
  }

  getSubmitButtonSelector() {
    return '//button[@type="submit" and contains(normalize-space(.), "Submit Your Application")]'
  }

  async getAutofillSnapshot(_answer) {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    let submitButton = xpath.getFirstOrderedNode(
      this.getSubmitButtonSelector(),
    )
    if (submitButton && !submitButton.disabled) {
      submitButton.click()
    }
  }
}
