// @ts-nocheck
/**
 * Freshteam ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and freshteam/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "freshteam"
 */

import * as track from "../methods/track.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./freshteam/operations.ts"
import * as rules from "./freshteam/rules.ts"

const SUBMIT_BUTTON_XPATH =
  '//input[@id="submit-button" and @type="submit"] | //input[@type="submit" and @value="Submit Application"] | //button[contains(@type, "submit")] | //button[contains(@class, "submit")]'

export class Freshteam extends BaseFiller {
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
      [enums.FIELD_TYPE.DATE]: {
        handler: (rule, value) =>
          operations.fillDateField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
    }
  }

  getSiteName() {
    return "freshteam"
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  checkCoverLetter() {
    operations.checkCoverLetter()
  }

  async doFillForm(forceRefresh = false) {
    await this.initializeFillForm()
    await rules.clearExistingEntries()
    let formRules = await this.extractFormRules()
    this.rules = formRules
    this.progressTracker.setFieldsRequiredStatus(formRules)
    let answers = await this.fetchFormAnswers(
      rules.buildFreshteamRequestRules(formRules),
      forceRefresh,
    )
    if (typeof answers === "string") return answers
    this.bindLegacySubmitStatus()
    await this.fillRegularFields(formRules)
    await this.fillStructuredSections()
    await this.handleResumeUpload()
    await this.handleFileCoverLetterUpload()
    await this.taskQueue.run()
    await this.bindSubmitButtonTracking(formRules)
    return this.finalizeFillForm()
  }

  bindLegacySubmitStatus() {
    this.legacySubmitStatusAbortController?.abort()
    this.legacySubmitStatusAbortController = new AbortController()
    let submitButton = xpath.getFirstOrderedNodeSafe(
      SUBMIT_BUTTON_XPATH,
      document.body,
    )
    if (submitButton) {
      track.bindSubmitButton(
        submitButton.textContent || "Submit",
        this.progressTracker.fieldStatus,
        this.timeTrace,
        this.legacySubmitStatusAbortController.signal,
      )
    }
  }

  async fillStructuredSections() {
    if (this.answer.education?.length > 0) {
      await operations.fillEducationFields(
        this.rules,
        this.answer.education,
        this.operationConfig,
        this.taskQueue,
        this.progressTracker.updateFilledProgress.bind(this.progressTracker),
        this.progressTracker,
      )
    }
    if (this.answer.workExperience?.length > 0) {
      await operations.fillEmploymentFields(
        this.rules,
        this.answer.workExperience,
        this.operationConfig,
        this.taskQueue,
        this.progressTracker.updateFilledProgress.bind(this.progressTracker),
        this.progressTracker,
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
    let coverLetterStatus = operations.getFreshteamCoverLetterStatus()
    if (coverLetterStatus) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: coverLetterStatus === "required",
      })
    }
    if (this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName) {
      this.taskQueue.add(async () => {
        let uploaded = await operations.uploadCoverLetter(
          this.coverLetter,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded && coverLetterStatus === "required") {
          this.progressTracker.updateMissedProgress("Cover Letter")
        }
      })
    } else if (coverLetterStatus === "required") {
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
    let submitButton = xpath.getFirstOrderedNodeSafe(
      SUBMIT_BUTTON_XPATH,
      document.body,
    )
    submitButton?.click()
  }
}
