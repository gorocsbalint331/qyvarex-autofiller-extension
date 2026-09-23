// @ts-nocheck
/**
 * Breezy ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and breezy/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "breezy"
 */

import * as answerMethods from "../methods/answer.js"
import * as dom from "../methods/dom.js"
import * as breezyAnswer from "./breezy/answer.js"
import * as operations from "./breezy/operations.js"
import * as rules from "./breezy/rules.js"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as urlStore from "../../store/url.js"
import { BaseFiller } from "./base-filler.js"
import * as breezyRules from "./breezy/rules.ts"

function isMarkedRequired(el) {
  return (
    !!el &&
    (el.classList.contains("required") ||
      el.getAttribute("data-required") === "true" ||
      el.getAttribute("aria-required") === "true" ||
      !!el.querySelector(".required, [data-required='true']"))
  )
}

function isSectionRequired(el) {
  let section = el.closest(".section")
  if (!section) return false
  let heading = section.querySelector(
    'h3, label, .section-header, [role="heading"]',
  )
  return isMarkedRequired(heading)
}

function isFieldGroupRequired(el) {
  let group =
    el.closest(".field, .form-group, .input, .textarea") ?? el.parentElement
  return isMarkedRequired(group)
}

function isCoverLetterRequired(textarea) {
  return (
    isSectionRequired(textarea) ||
    isFieldGroupRequired(textarea) ||
    textarea.required ||
    textarea.getAttribute("aria-required") === "true" ||
    isMarkedRequired(textarea)
  )
}

class Breezy extends BaseFiller {
  getSiteName() {
    return "breezy"
  }

  getElementRulesRequestUrl() {
    return this.breezyAutofillRequestUrl
  }

  async checkCoverLetter() {
    let textarea = rules.findCoverLetterTextarea()
    let status = ""
    if (textarea) {
      status = isCoverLetterRequired(textarea) ? "required" : "optional"
    }
    dom.postCoverLetterStatus(status)
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, value) =>
        operations.fillInputField(rule.$input, value),
      [enums.FIELD_TYPE.NUMBER]: (rule, value) =>
        operations.fillInputField(rule.$input, value),
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) =>
          operations.fillCheckboxField(rule.$checkboxs, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.RADIO]: (rule, value) =>
        operations.fillRadioField(rule.$input, value),
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          operations.fillSelectField(rule.$input, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.DATE]: (rule, value) =>
        operations.fillDateField(rule.$input, value),
    }
  }

  formatAnswer(answer) {
    return breezyAnswer.formatAnswer(answer)
  }

  async extractFormRules() {
    let formRules = await rules.getRules()
    rules.findAndRemoveRule(formRules, "Resume")
    return formRules
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume")
    } else {
      this.taskQueue.add(async () => {
        await operations.uploadResume(this.resumeInfo)
      })
      await this.taskQueue.run()
    }
  }

  async fillEducationAndEmployment(_formRules) {
    await operations.clickAddItemButton(
      document,
      breezyRules.hardCodeConfig[breezyRules.HARDCODE_KEY.education].addButton,
      this.answer.education.length - 1,
    )
    await operations.clickAddItemButton(
      document,
      breezyRules.hardCodeConfig[breezyRules.HARDCODE_KEY.workExperience]
        .addButton,
      this.answer.workExperience.length - 1,
    )

    if (this.answer.education.length > 0) {
      let educationRules = rules.processEduOrWorkExpRules(true) || []
      coreDom.setSectionResultFocusRules("education", educationRules)
      let ops = answerMethods.getEducationOperations(
        educationRules,
        this.answer.education,
        this.operationConfig,
        void 0,
        answerMethods.sectionProgressCallbacks(
          "Education",
          this.progressTracker,
        ),
      )
      for (let op of ops) this.taskQueue.add(op)
      await this.taskQueue.run()
    }

    if (this.answer.workExperience.length > 0) {
      let employmentRules = rules.processEduOrWorkExpRules(false) || []
      coreDom.setSectionResultFocusRules("employment", employmentRules)
      let ops = answerMethods.getEmploymentOperations(
        employmentRules,
        this.answer.workExperience,
        this.operationConfig,
        void 0,
        answerMethods.sectionProgressCallbacks(
          "Employment",
          this.progressTracker,
        ),
      )
      for (let op of ops) this.taskQueue.add(op)
      await this.taskQueue.run()
    }
  }

  async executeSiteSpecificSteps(formRules) {
    await this.bindSubmitButtonTracking(formRules)
    this.taskQueue.add(() => {
      operations.blurPage()
    })
    await this.taskQueue.run()
  }

  getSubmitButtonSelector() {
    return rules.getBreezySubmitButtonXpath()
  }

  async getAutofillSnapshot(formRules) {
    return operations.getSnapshot(formRules)
  }

  async getSubmitSnapshot() {
    let formRules = await this.extractFormRules()
    return operations.getSnapshot(formRules)
  }

  async doFillForm(forceRefetch = false) {
    this.breezyAutofillRequestUrl = void 0
    let stabilized = operations.stabilizeBreezyAngularLocation()
    this.breezyAutofillRequestUrl =
      stabilized?.preservedAutofillUrl ||
      urlStore.useUrlStore.getState().currentTabUrl ||
      void 0

    await this.initializeFillForm()
    await this.handleResumeUpload()
    await operations.ensureEducationAndWorkExperienceContainers()

    let formRules = this.prepareCoverLetterRules(await this.extractFormRules())
    this.progressTracker.setFieldsRequiredStatus(formRules)

    let answers = await this.fetchFormAnswers(formRules, forceRefetch)
    if (typeof answers === "string") return answers

    await this.fillRegularFields(formRules)
    await this.fillEducationAndEmployment(formRules)
    await this.fillCoverLetterFields()
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  submitApplication() {
    let submitButton = document.querySelector(
      'button[type="submit"], input[type="submit"]',
    )
    operations.submitObserver(submitButton)
    if (submitButton) submitButton.click()
  }
}

export { Breezy }
