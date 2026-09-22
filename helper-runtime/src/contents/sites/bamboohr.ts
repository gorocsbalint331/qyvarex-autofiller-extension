// @ts-nocheck
/**
 * BambooHR ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and bamboohr/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "bamboohr"
 */

import * as answerMethods from "../methods/answer.js"
import { BaseFiller } from "./base-filler.js"
import * as bambooAnswer from "./answer.ts"
import * as operations from "./operations.ts"
import * as dom from "../methods/dom.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as delay from "../../utils/delay.js"
import * as rules from "./rules.ts"

class Bamboohr extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.countryRule = null
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => operations.fillInputField(rule.$input, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) =>
          operations.fillCustomCheckboxField(rule, value),
        options: {
          expectArray: true,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          operations.fillCustomSelectField(rule.$input, value),
        options: {
          expectArray: true,
        },
      },
    }
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    let formRules = []
    operations.injectStyle()
    try {
      formRules = await this.extractFormRules()
      const fetchResult = await this.fetchFormAnswers(formRules, forceRefetch)
      if (typeof fetchResult === "string") return fetchResult
    } finally {
      operations.removeStyle()
    }
    await this.fillRegularFields(formRules)
    await this.handleResumeUpload()
    await this.executeSiteSpecificSteps(formRules)
    return await this.finalizeFillForm()
  }

  async runPreFillForm() {
    await autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo()
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()

    const applyButton = Array.from(document.querySelectorAll("button")).find(
      (button) => button.textContent?.trim() === "Apply for This Job",
    )
    if (applyButton) applyButton.click()

    await this.waitForApplicationForm()

    if (autofillInfo.useAutofillInfoStore.getState().country) {
      await this.fillCountryField({
        allowFallback: false,
        refreshRule: true,
        useAnswer: false,
      })
    }
  }

  async extractFormRules() {
    const allRules = await rules.getRules()
    rules.findAndRemoveRule(allRules, "Resume")
    this.progressTracker.setFieldsRequiredStatus(allRules)
    const formRules = allRules.filter(
      (rule) => rule.type !== enums.FIELD_TYPE.BAMBOOHR_SPECIAL,
    )
    this.countryRule = rules.findAndRemoveRule(formRules, "Country")
    return formRules
  }

  getSiteName() {
    return "bamboohr"
  }

  formatAnswer(answer) {
    return bambooAnswer.formatAnswer(answer)
  }

  async getCountryRule(refreshRule, allowFallback = true) {
    if (!(!refreshRule && this.countryRule?.$input?.isConnected)) {
      this.countryRule = this.getLiveCountryRule()
      if (!this.countryRule && allowFallback) {
        this.countryRule = rules.findAndRemoveRule(
          await rules.getRules(),
          "Country",
        )
      }
    }
    return this.countryRule
  }

  async waitForApplicationForm() {
    for (let attempt = 0; attempt < 20; attempt++) {
      if (
        document.querySelector("#careerApplicationForm") ||
        document.querySelector("form#job-application-form")
      ) {
        return
      }
      await delay.delay(250)
    }
  }

  getLiveCountryRule() {
    const rows = Array.from(
      document.querySelectorAll(
        `#careerApplicationForm div.fab-FormRow,
        form#job-application-form .MuiFormControl-root`,
      ),
    )
    for (const row of rows) {
      const labelEl = row.querySelector("label")
      const label = labelEl?.textContent?.replaceAll("*", "").trim()
      if (label !== "Country") continue
      const input = row.querySelector(".fab-Select .fab-SelectToggle")
      if (!input) break
      return {
        type: enums.FIELD_TYPE.SELECT,
        label: "Country",
        required:
          labelEl.classList.contains("fab-Label--required") ||
          !!labelEl.querySelector(".MuiFormLabel-asterisk"),
        options: [],
        $input: input,
        $label: labelEl,
      }
    }
    return null
  }

  isCountrySelected(rule, country) {
    const selected = rule.$input
      .querySelector(".fab-SelectToggle__content")
      ?.textContent?.trim()
    return selected === country
  }

  async fillCountryField(options = {}) {
    const countryRule = await this.getCountryRule(
      !!options.refreshRule,
      options.allowFallback !== false,
    )
    if (!countryRule) return

    this.taskQueue.add(async () => {
      try {
        const targetCountry = bambooAnswer.getBamboohrCountryFillValue(
          options.useAnswer === false ? null : this.answer,
          autofillInfo.useAutofillInfoStore.getState().country,
        )
        const currentCountry = countryRule.$input
          .querySelector(".fab-SelectToggle__content")
          ?.textContent?.trim()

        console.debug("[BambooHR][Country] prefill-start", {
          currentCountry,
          targetCountry,
        })

        if (this.isCountrySelected(countryRule, targetCountry)) {
          console.debug("[BambooHR][Country] prefill-skip-already-selected")
          if (options.updateProgress !== false) {
            this.progressTracker.updateFilledProgress("Country")
          }
          return
        }

        await operations.fillCustomSelectField(countryRule.$input, [
          targetCountry,
        ])

        const selectedCountry = countryRule.$input
          .querySelector(".fab-SelectToggle__content")
          ?.textContent?.trim()
        console.debug("[BambooHR][Country] prefill-result", {
          committed: selectedCountry === targetCountry,
          selectedCountry,
          targetCountry,
        })

        if (options.updateProgress !== false) {
          this.progressTracker.updateFilledProgress("Country")
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error)
        if (options.updateProgress !== false) {
          this.progressTracker.updateMissedProgress("Country")
        }
      }
    })
    await this.taskQueue.run()
  }

  async fillRegularFields(formRules) {
    const veteranRule = rules.findAndRemoveRule(formRules, "Veteran Status")
    const operationsList = [
      ...answerMethods.getRegularOperations(
        formRules,
        this.answer.regular,
        this.operationConfig,
      ),
    ]

    if (veteranRule) {
      operationsList.push(async () => {
        const values = answerMethods.ensureArray(
          this.answer.regular["Veteran Status"],
        )
        const filled = await operations.fillVeteranField(veteranRule, values)
        if (filled) {
          this.progressTracker.updateFilledProgress("Veteran Status")
        } else {
          this.progressTracker.updateMissedProgress("Veteran Status")
        }
      })
    }

    for (const operation of operationsList) {
      this.taskQueue.add(operation)
    }
    await this.taskQueue.run()
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

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getBamboohrCoverLetterStatus())
  }

  async executeSiteSpecificSteps(formRules) {
    const coverLetterStatus = operations.getBamboohrCoverLetterStatus()
    if (coverLetterStatus) {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: false,
      })
      if (
        this.coverLetter?.coverLetterId &&
        this.coverLetter?.coverLetterName
      ) {
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
    }

    this.taskQueue.add(() => {
      operations.blurPage()
    })
    await this.taskQueue.run()
    await this.bindSubmitButtonTracking(formRules)
  }

  getSubmitButtonSelector() {
    return './/*[child::span[contains(text(), "Submit Application")]]'
  }

  async getAutofillSnapshot(_formRules) {
    return bambooAnswer.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return bambooAnswer.getFormSnapshot()
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(
      './/button[child::span[text()="Submit Application"]]',
    )
    operations.submitObserver(button)
    if (button) button.click()
  }
}

export { Bamboohr }
