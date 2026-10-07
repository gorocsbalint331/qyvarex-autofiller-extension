// @ts-nocheck
/**
 * Untypical careers (Eploy). The vacancy page has an Apply button that opens
 * the registration form in a frame.
 * Site id: "untypical"
 */

import * as answerMethods from "../methods/answer.ts"
import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as defaultOperations from "./default/operations.ts"
import * as operations from "./untypical/operations.ts"
import * as rules from "./untypical/rules.ts"

const FIXED_ANSWERS = [
  [/how did you hear/i, "Our Careers Website"],
  [/currently work for us/i, "No"],
  [/previously worked/i, "No"],
  [/job alerts/i, "No"],
  [/marketing emails/i, "No"],
  [/i agree/i, "Yes"],
  [/information i have provided is accurate/i, "Yes"],
]

export class Untypical extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (_rule, value) => defaultOperations.fillTextField(_rule.$input, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => defaultOperations.fillSelectField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => defaultOperations.fillCheckboxField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) => defaultOperations.fillRadioField(rule, value),
        options: { expectArray: true },
      },
    }
  }

  getSiteName() {
    return "untypical"
  }

  formatAnswer(answer) {
    const regular = answer?.regular
    if (!regular) return answer
    const emailKey = Object.keys(regular).find((key) => /^email address\b/i.test(key))
    const confirmKey = Object.keys(regular).find((key) => /confirm email/i.test(key))
    if (emailKey && confirmKey) regular[confirmKey] = regular[emailKey]
    for (const key of Object.keys(regular)) {
      for (const [pattern, value] of FIXED_ANSWERS) {
        if (pattern.test(key)) regular[key] = [value]
      }
    }
    return answer
  }

  async runPreFillForm() {
    this.applicationDocument = await operations.openApplicationForm()
  }

  async extractFormRules() {
    return rules.getRules(this.applicationDocument)
  }

  async uploadResume() {
    const doc = this.applicationDocument
    const button = operations.findUploadButton(doc)
    if (!button || this.disableUploadResume || !this.resumeInfo) return
    button.click()
    const popup = await operations.waitForUploadFrame()
    if (!popup) return
    const prepared = await answerMethods.fetchPdfAsBlob(this.resumeInfo)
    await dom.uploadFiles(
      popup.input,
      prepared,
      this.progressTracker.updateFieldRequiredStatus,
      this.progressTracker.updateFilledProgress,
      "Resume/CV",
    )
    operations.clickUploadSave(popup.frame)
  }

  async executeSiteSpecificSteps(formRules) {
    await operations.finishRegistrationChoices(this.applicationDocument)
    await this.uploadResume()
    await super.executeSiteSpecificSteps(formRules)
  }
}
