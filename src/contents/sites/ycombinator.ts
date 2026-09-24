// @ts-nocheck
/**
 * YCombinator ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and ycombinator/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "ycombinator"
 */

import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as phoneCountryCode from "../../core/phone-country-code.js"
import * as operations from "./ycombinator/operations.ts"
import * as rules from "./ycombinator/rules.ts"
import * as submitTracking from "./ycombinator/submit-tracking.ts"

class YCombinator extends BaseFiller {
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

  getSiteName() {
    return "ycombinator"
  }

  async extractFormRules() {
    let formRules = await rules.extractRules()
    this.snapshotRules = formRules
    return formRules
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    let formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)

    let answers = await this.requestFormAnswers(formRules, forceRefetch)
    if (typeof answers === "string") return answers

    if (answers) this.answer = answers
    await this.fillRegularFields(formRules)
    await this.handleResumeUpload()
    await this.bindSubmitButtonTracking(formRules)
    return await this.finalizeFillForm()
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

  async getAutofillSnapshot(formRules) {
    this.snapshotRules = formRules
    return rules.getYCombinatorFormSnapshotFromRules(formRules)
  }

  async getSubmitSnapshot() {
    return rules.getYCombinatorFormSnapshotFromRules(this.snapshotRules)
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    return submitTracking.resolveYCombinatorSubmitButton(target)
  }

  submitApplication() {
    submitTracking.getYCombinatorSubmitButton()?.click()
  }

  cancelAutoFill() {
    this.taskQueue.clear()
  }

  constructor(...args) {
    super(...args)
    this.snapshotRules = []
  }
}

export { YCombinator }
