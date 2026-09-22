// @ts-nocheck
/**
 * Amazon ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and amazon/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "amazon"
 */

import * as answerMethods from "../methods/answer.js"
import { BaseFiller } from "./base-filler.js"
import * as enums from "../../core/enums.js"
import * as phoneCountryCode from "../../core/phone-country-code.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as operations from "./operations.ts"
import * as rules from "./rules.ts"

const SUBMIT_BUTTON_SELECTORS = [
  "button[data-direct-call-identifier]",
  "a#save-and-continue-form-button",
  "a.btn.btn-primary.mt-5",
  "button.btn.btn-primary",
  "div.form-group.submit-button button",
  "div.form-group.submit-button a",
]
const SUBMIT_BUTTON_SELECTOR = SUBMIT_BUTTON_SELECTORS.join(", ")
const ACTIVE_FORM_SELECTOR =
  ".application-content .question-form.active, .question-form.active"

function matchesAmazonSubmitSelector(el) {
  let clickable = el.closest?.("button, a")
  return (
    !!clickable &&
    SUBMIT_BUTTON_SELECTORS.some((selector) => clickable.matches(selector))
  )
}

function isSubmitButtonVisible(el) {
  if (
    el.disabled ||
    null != el.getAttribute("disabled") ||
    "true" === el.getAttribute("aria-disabled") ||
    "true" === el.getAttribute("aria-hidden") ||
    el.hidden
  )
    return false

  let style = el.ownerDocument?.defaultView?.getComputedStyle?.(el)
  if (style?.display === "none" || style?.visibility === "hidden") return false

  let rect = el.getBoundingClientRect?.()
  return !!(rect && rect.width > 0 && rect.height > 0)
}

function findAmazonSubmitButton() {
  let candidates = /* @__PURE__ */ new Set()
  let activeForms = Array.from(document.querySelectorAll(ACTIVE_FORM_SELECTOR))

  for (let form of activeForms)
    for (let button of Array.from(
      form.querySelectorAll(SUBMIT_BUTTON_SELECTOR),
    ))
      candidates.add(button)

  if (0 === candidates.size)
    for (let button of Array.from(
      document.querySelectorAll(SUBMIT_BUTTON_SELECTOR),
    ))
      candidates.add(button)

  let allButtons = Array.from(candidates)
  let visibleButtons = allButtons.filter(
    (button) =>
      !button.closest("#jobright-helper-id") && isSubmitButtonVisible(button),
  )

  let isContinueLike = (button) => {
    let text = (button.innerText || button.textContent || "")
      .trim()
      .toLowerCase()
    return (
      "save-and-continue-form-button" === button.getAttribute("id") ||
      "continue" === text ||
      text.includes("continue") ||
      "submit" === text ||
      text.includes("submit") ||
      "apply" === text ||
      text.includes("apply")
    )
  }

  return (
    visibleButtons.find(
      (button) =>
        button.closest("div.form-group.submit-button") && isContinueLike(button),
    ) ||
    visibleButtons.find(isContinueLike) ||
    visibleButtons[0] ||
    null
  )
}

class Amazon extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, values) => {
        let value = values?.[0]
        if (value)
          return operations.fillInputTextField(
            rule,
            value,
            phoneCountryCode.resolvePhoneCountryCodeAnswer(this.answer),
          )
      },
      [enums.FIELD_TYPE.SELECT]: (rule, values) =>
        operations.fillSelectField(rule, values),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, values) =>
        operations.fillRadioCheckField(rule, values),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, values) =>
        operations.fillRadioCheckField(rule, values),
    }
  }

  async doFillForm(forceRefetch = false) {
    try {
      await this.initializeFillForm()

      let [formRules] = await this.extractFormRulesWithSubmitButton()
      this.progressTracker.setFieldsRequiredStatus(formRules)

      let countryRules = formRules.filter((rule) =>
        operations.isMainAmazonCountrySelect(rule.$input),
      )
      let nonCountryRules = formRules.filter(
        (rule) => !operations.isMainAmazonCountrySelect(rule.$input),
      )

      for (let rule of countryRules)
        if (this.currentRunCountryCommitted)
          this.progressTracker.updateFilledProgress(rule.label)
        else this.progressTracker.updateMissedProgress(rule.label)

      let hasResumeUpload = formRules.some((rule) => rule._resumeUploadMarker)
      if (hasResumeUpload) {
        await operations.uploadResume(
          this.resumeInfo,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
        let withoutResume = formRules.filter(
          (rule) => !rule._resumeUploadMarker,
        )
        this.progressTracker.setFieldsRequiredStatus(withoutResume)
      }

      let answers = await this.fetchFormAnswers(nonCountryRules, forceRefetch)
      if ("string" == typeof answers) return answers

      this.formatUserInfo()

      let operationsList = [
        ...answerMethods.getRegularOperations(
          nonCountryRules,
          this.answer.regular,
          this.operationConfig,
        ),
      ]

      for (let runOperation of operationsList)
        try {
          let result = runOperation()
          if (result && "function" == typeof result.then) await result
        } catch (error) {
          console.warn("Operation execution error:", error)
        }

      let comboRules = await this.runComboQuestionAutofillIfNeeded(
        formRules,
        forceRefetch,
      )
      if ("string" == typeof comboRules) return comboRules

      formRules = comboRules
      operations.clickAmazonBlankAreaToCloseDropdowns()
      await this.executeSiteSpecificSteps(formRules)
      return this.finalizeFillForm()
    } catch (error) {
      console.warn("fillForm error:", error)
      this.taskQueue.clear()
      return this.finalizeFillForm()
    }
  }

  async extractFormRules() {
    let [formRules] = await rules.extractRules()
    return formRules
  }

  async runPreFillForm() {
    this.currentRunCountryCommitted = false
    let info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
    this.currentRunCountryCommitted = await operations.prefillAmazonCountry(
      info?.location?.country,
    )
  }

  async filterNewComboQuestionRules(newRules) {
    let filtered = []
    for (let rule of newRules) {
      if (operations.isMainAmazonCountrySelect(rule.$input)) {
        this.progressTracker.updateFieldRequiredStatus(rule)
        if (this.currentRunCountryCommitted)
          this.progressTracker.updateFilledProgress(rule.label)
        else this.progressTracker.updateMissedProgress(rule.label)
        continue
      }
      filtered.push(rule)
    }
    return filtered
  }

  async extractFormRulesWithSubmitButton() {
    return await rules.extractRules()
  }

  getSiteName() {
    return "amazon"
  }

  formatUserInfo() {
    this.answer.regular["How did you hear about this role?"] = "Other"
    this.answer.regular['If "Other" please specify'] = "jobright.ai"
    this.answer.regular["If 'Other' please specify"] = "jobright.ai"
  }

  async getAutofillSnapshot(_e) {
    return await rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot()
  }

  getSubmitTrackingDelegationRoot() {
    return document
  }

  resolveDelegatedSubmitButton(target) {
    let clickable = target.closest?.("button, a")
    return clickable && matchesAmazonSubmitSelector(clickable)
      ? clickable
      : null
  }

  submitApplication() {
    let button =
      findAmazonSubmitButton() ||
      xpath.getFirstOrderedNode(
        `//div[contains(concat(' ', normalize-space(@class), ' '), ' form-group ') and contains(concat(' ', normalize-space(@class), ' '), ' submit-button ')]//button[@type="button" and contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]`,
      )
    if (button) button?.click()
  }

  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.comboQuestionSettleDelayMs = 300
    this.currentRunCountryCommitted = false
  }
}

export { Amazon }
