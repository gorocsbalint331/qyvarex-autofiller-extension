// @ts-nocheck
/**
 * Lever ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and lever/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "lever"
 */

import * as answerMethods from "../methods/answer.js"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as leverAnswer from "./lever/answer.ts"
import * as operations from "./lever/operations.ts"
import * as rules from "./lever/rules.ts"

const SUBMIT_SUCCESS_SELECTORS = [
  './/h3[@data-qa="msg-submit-success" and contains(., "Application")]',
  './/*[contains(translate(., "APPLICATION RECEIVED", "application received"), "application received") or contains(translate(., "APPLICATION SUBMI", "application submi"), "application submi") or contains(translate(., "THANK YOU FOR SUBMIT", "thank you for submit"), "thank you for submit") or contains(translate(., "THANKS FOR SUBMIT", "thanks for submit"), "thanks for submit")]',
]

const AUTOCHECK_CHECKBOX_KEYWORDS = [
  "agree",
  "agreement",
  "accept",
  "authorize",
  "certify",
  "consent",
  "marketing",
  "privacy",
  "terms",
  "notice",
  "future job",
]

function normalizeKeywordText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function isAutocheckCheckboxRule(rule) {
  const count = rule.$checkboxs?.length ?? (rule.$input ? 1 : 0)
  if (count !== 1) return false

  const input = rule.$checkboxs?.[0] || rule.$input
  const haystack = [
    rule.label,
    ...(rule.options || []),
    input?.name,
    input?.id,
  ]
    .map(normalizeKeywordText)
    .join(" ")

  return AUTOCHECK_CHECKBOX_KEYWORDS.some((keyword) =>
    haystack.includes(keyword),
  )
}

export class Lever extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => {
          const text = value?.[0]
          if (!text) return
          if (
            rule.$input &&
            rule.$input.matches('input[data-qa="location-input"]')
          ) {
            return operations.handleLocationInput(rule, text)
          }
          return operations.fillInputTextField(
            rule.$input,
            String(text ?? ""),
          )
        },
        options: {
          expectArray: true,
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
        handler: (rule, value) =>
          operations.fillRadioGroupFiled(rule, value),
        options: {
          expectArray: true,
        },
      },
    }
  }

  getSiteName() {
    return "lever"
  }

  ensureAutocheckCheckboxAnswers(formRules) {
    if (
      !this.answer.regular ||
      typeof this.answer.regular !== "object" ||
      Array.isArray(this.answer.regular)
    ) {
      this.answer.regular = {}
    }

    const regular = this.answer.regular
    const hasAnswer = (label) =>
      Object.keys(regular).some((key) => answerMethods.isMatched(label, key))

    for (const rule of formRules) {
      if (
        rule.type === enums.FIELD_TYPE.CHECKBOX &&
        isAutocheckCheckboxRule(rule) &&
        !hasAnswer(rule.label)
      ) {
        regular[rule.label] = rule.options?.[0] || rule.label || "True"
      }
    }
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  formatAnswer(answer) {
    return leverAnswer.formatAnswer(answer)
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const answersOrError = await this.requestFormAnswers(
      formRules,
      forceRefetch,
    )
    if (typeof answersOrError === "string") return answersOrError

    if (answersOrError) this.answer = answersOrError
    this.ensureAutocheckCheckboxAnswers(formRules)
    await this.fillRegularFields(formRules)
    await this.bindSubmitButtonTracking(formRules)
    await this.handleResumeUpload()
    return await this.finalizeFillForm()
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

  getSubmitButtonSelector() {
    return './/button[contains(@id, "btn-submit")]'
  }

  getSubmitSuccessSelectors() {
    return SUBMIT_SUCCESS_SELECTORS
  }

  async getAutofillSnapshot(_formRules) {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNode('.//button[@id="btn-submit"]')
    if (button) button?.click()
  }
}
