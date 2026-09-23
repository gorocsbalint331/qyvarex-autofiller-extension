// @ts-nocheck
/**
 * Careers Toasttab ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and careers-toasttab/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "careerstoasttab"
 */

import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./careers-toasttab/operations.ts"
import * as rules from "./careers-toasttab/rules.ts"

class CareersToasttab extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => {
          const text = value?.[0]
          if (!text) return
          const input = rule.$input
          const isPhone =
            input.type === "tel" ||
            input.classList.contains("iti__tel-input") ||
            input.closest?.(".iti")
          return isPhone
            ? operations.fillPhoneField(input, String(text ?? ""))
            : dom.fillInputTextField(input, String(text ?? ""))
        },
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => operations.fillSelectField(rule, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => dom.fillCheckBoxesField(rule, value),
        options: {
          expectArray: true,
        },
      },
    }
  }

  getSiteName() {
    return "careerstoasttab"
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async getAutofillSnapshot(_rules) {
    return await rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  getSubmitButtonSelector() {
    return './/button[@type="submit" and @name="next_step" and (@data-call-to-action--form-target="submitButton" or starts-with(@id, "form_submit_"))]'
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(
      './/button[@type="submit"]',
    )
    if (button) button.click()
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

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    await this.handleResumeUpload()
    const answers = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof answers === "string") return answers

    await this.fillRegularFields(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return this.finalizeFillForm()
  }
}

export { CareersToasttab }
