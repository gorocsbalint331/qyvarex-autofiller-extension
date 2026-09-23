// @ts-nocheck
/**
 * Intuit ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and intuit/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "intuit"
 */

import * as answerMethods from "../methods/answer.js"
import * as dom from "../methods/dom.js"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as operations from "./intuit/operations.ts"
import * as rules from "./intuit/rules.ts"
import * as intuitAnswer from "./intuit/answer.ts"

export class Intuit extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.formatAnswer = intuitAnswer.formatAnswer
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) => {
        const first = value?.[0]
        if (first) return operations.fillInputTextField(rule.$input, String(first ?? ""))
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
      [enums.FIELD_TYPE.MULTI_SELECT]: (rule, value) =>
        operations.fillMultiselectField(rule, value),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, value) =>
        operations.fillRadioGroupFiled(rule, value),
    }
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async doFillForm(fromAgent = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    await this.handleResumeUpload()
    const answers = await this.fetchFormAnswers(formRules, fromAgent)
    if (typeof answers === "string") return answers
    await this.checkSpecificFields()
    await this.fillRegularFields(formRules)
    await this.executeSiteSpecificSteps(formRules)
    return this.finalizeFillForm()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "intuit"
  }

  async handleResumeUpload() {
    this.taskQueue.add(async () => {
      const methodButton = document.querySelector("#methodButton--file")
      if (!methodButton) return
      const fieldSetContainer = document.querySelector(
        "#methodButton--fileFieldSetContainer",
      )
      fieldSetContainer.style.display = ""
      const fileInput = document.querySelector(
        'input[type="file"][accept*=".pdf"]',
      )
      await dom.uploadFiles(
        fileInput,
        await answerMethods.fetchPdfAsBlob(this.resumeInfo),
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
        "Resume/CV",
      )
    })
    await this.taskQueue.run()
  }

  async checkSpecificFields() {
    return await operations.prefillRegularFields(this.answer)
  }

  getSubmitButtonSelector() {
    return '//*[@id="complete-questionsscreen-btn"]'
  }

  async getAutofillSnapshot() {
    const snapshot = await rules.getFormSnapshot()
    return snapshot
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  submitApplication() {
    const selector = '//*[@id="complete-questionsscreen-btn"]'
    const button = xpath.getFirstOrderedNode(selector)
    if (button) button?.click()
  }
}
