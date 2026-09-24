// @ts-nocheck
/**
 * Gusto ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and gusto/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "gusto"
 */

import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as gustoAnswer from "./gusto/answer.ts"
import * as operations from "./gusto/operations.ts"
import * as rules from "./gusto/rules.ts"

class Gusto extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, values) => {
        const value = values?.[0]
        if (value != null && value !== "") {
          return operations.fillInputTextField(rule.$input, String(value ?? ""))
        }
      },
      [enums.FIELD_TYPE.DATE]: {
        handler: () => {},
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, value) =>
        operations.fillCheckboxField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
    }
  }

  buildOperationConfig() {
    const config = super.buildOperationConfig()
    config[enums.FIELD_TYPE.DATE] = gustoAnswer.createDateFillHandler({
      fillInputTextField: operations.fillInputTextField,
      updateFilledProgress:
        this.progressTracker.updateFilledProgress.bind(this.progressTracker),
      updateMissedProgress:
        this.progressTracker.updateMissedProgress.bind(this.progressTracker),
    })
    return config
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    const requiredStatus = []
    for (const rule of formRules) {
      requiredStatus.push({
        label: rule.label,
        required: rule.required ?? null,
        options: rule.options,
        type: rule.type,
      })
    }
    this.progressTracker.setFieldsRequiredStatus(requiredStatus)
    await this.handleResumeUpload()

    const answers = await this.fetchFormAnswers(
      rules.buildGustoRequestRules(formRules),
      forceRefetch,
    )
    if (typeof answers === "string") return answers

    await this.fillRegularFields(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return this.finalizeFillForm()
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "gusto"
  }

  async checkCoverLetter() {
    const coverLetterInput = document.querySelector(
      "#job_applicant_cover_letter",
    )
    let status = ""
    if (coverLetterInput) {
      status = coverLetterInput.getAttribute("required")
        ? "required"
        : "optional"
    }
    dom.postCoverLetterStatus(status)
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      await operations.removeResume()
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.removeResume()
        const uploaded = await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded) {
          this.progressTracker.updateMissedProgress("Resume/CV")
        }
      })
    }
    await this.taskQueue.run()
  }

  async executeSiteSpecificSteps(formRules) {
    if (this.coverLetter?.coverLetterId) {
      this.taskQueue.add(async () => {
        const uploaded = await operations.uploadCoverLetter(
          this.coverLetter,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        if (!uploaded) {
          this.progressTracker.updateMissedProgress("Cover Letter")
        }
      })
    }
    await this.taskQueue.run()
    await super.executeSiteSpecificSteps(formRules)
  }

  async getAutofillSnapshot(_baseline) {
    return await rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  getSubmitButtonSelector() {
    return './/form[@id="job-applicant-form"]//input[@type="submit" and (@name="commit" or contains(@value, "Submit your application") or contains(@data-disable-with, "Submit your application"))] | .//form[@id="job-applicant-form"]//button[@type="submit" or contains(normalize-space(.), "Submit your application") or contains(normalize-space(.), "Apply")]'
  }

  submitApplication() {
    const selector = this.getSubmitButtonSelector()
    if (!selector) return
    const button = xpath.getFirstOrderedNodeSafe(selector)
    if (button && !button.disabled) button.click()
  }
}

export { Gusto }
