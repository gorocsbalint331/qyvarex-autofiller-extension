// @ts-nocheck
/**
 * Zoho Recruit v2 ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and zohorecruit-v2/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "zohorecruit" (v2 WebToLeads flow)
 */

import * as cancellation from "../methods/cancellation.ts"
import * as answerMethods from "../methods/answer.ts"
import { BaseFiller } from "./base-filler.ts"
import * as zohoV2Answer from "./zohorecruit-v2/answer.ts"
import * as operations from "./zohorecruit-v2/operations.ts"
import * as zohoOperations from "./zohorecruit/operations.ts"
import * as rules from "./zohorecruit-v2/rules.ts"
import * as enums from "../../core/enums.js"
import * as trace from "../../utils/trace.js"

const SUBMIT_BUTTON_SELECTOR =
  './/button[@type="submit"] | .//input[@type="submit"]'

function hasWebToLeadsForm() {
  return !!document.querySelector("form[name*='WebToLeads']")
}

function normalizeFieldKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

function getRuleKeyVariants(rule) {
  return [rule?.label, rule?.name].map((value) =>
    normalizeFieldKey(value),
  )
}

function isAddressLocationKey(key) {
  return [
    "city",
    "ville",
    "country",
    "pays",
    "state",
    "province",
    "state/province",
    "etat",
    "etat/province",
    "zip",
    "zip code",
    "zip/postal code",
    "postal code",
    "code postal",
  ].includes(key)
}

function isAddressLocationRule(rule) {
  return getRuleKeyVariants(rule).some(isAddressLocationKey)
}

function isCityRule(rule) {
  return getRuleKeyVariants(rule).some((key) =>
    ["city", "ville"].includes(key),
  )
}

function findAnswerByLabels(labels, regularAnswer) {
  for (const label of labels) {
    try {
      return String(
        answerMethods.findValueInRecord(label, regularAnswer) || "",
      ).trim()
    } catch {
      continue
    }
  }
  return ""
}

function readInputValue(rule) {
  const input = rule?.$input
  return String(input?.value ?? "").trim()
}

async function tryFillAddressAutocomplete(
  formRules,
  regularAnswer,
  progressTracker,
) {
  const addressRules = formRules.filter(isAddressLocationRule)
  const cityRule = addressRules.find(isCityRule)
  const cityInput = cityRule?.$input
  if (!cityInput?.closest?.("lyte-autocomplete, lyte-dropdown")) {
    return false
  }
  const cityAnswer = findAnswerByLabels(
    ["City", "Ville"],
    regularAnswer,
  )
  if (!cityAnswer) return false
  const committed = await zohoOperations.selectZohoAutocompleteOption(
    cityRule,
    cityAnswer,
    [
      findAnswerByLabels(
        [
          "State/Province",
          "State",
          "Province",
          "État/Province",
          "Etat/Province",
        ],
        regularAnswer,
      ),
      findAnswerByLabels(["Country", "Pays"], regularAnswer),
      findAnswerByLabels(
        [
          "Zip/Postal Code",
          "Zip Code",
          "Postal Code",
          "ZIP",
          "Code postal",
        ],
        regularAnswer,
      ),
    ],
  )
  if (!committed) return false
  await new Promise((resolve) => setTimeout(resolve, 300))
  for (const rule of addressRules) {
    if (
      readInputValue(rule) &&
      !progressTracker.fieldStatus.filledFields.includes(rule.label)
    ) {
      progressTracker.updateFilledProgress(rule.label)
    }
  }
  return true
}

async function clickImInterestedButton() {
  const buttons = Array.from(
    document.querySelectorAll(
      "button.lyte-button, button[type='button']",
    ),
  )
  const button = buttons.find((candidate) => {
    const text = candidate.textContent
      ?.replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
    return text === "i'm interested" || text === "i am interested"
  })
  if (!button) return false
  button.scrollIntoView({ block: "center", inline: "center" })
  button.dispatchEvent(
    new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
  )
  button.dispatchEvent(
    new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
  )
  button.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true }),
  )
  return true
}

async function extractRulesAfterInterestClick() {
  let formRules = await rules.getRules()
  if (formRules.length > 0 || hasWebToLeadsForm()) return formRules
  const clicked = await clickImInterestedButton()
  if (!clicked) return formRules
  for (
    let attempt = 0;
    attempt < 10 &&
    (await new Promise((resolve) => setTimeout(resolve, 500)),
    !(
      (formRules = await rules.getRules()).length > 0 ||
      hasWebToLeadsForm()
    ));
    attempt++
  );
  return formRules
}

class ZohoRecruitV2 extends BaseFiller {
  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: async (rule, value) => {
          const input = rule.$input
          if (input) {
            input.value = value
            input.dispatchEvent(new Event("input", { bubbles: true }))
            input.dispatchEvent(
              new Event("change", { bubbles: true }),
            )
            input.dispatchEvent(new Event("blur", { bubbles: true }))
          }
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: async (rule, value) => {
          if (rule.$input instanceof HTMLSelectElement) {
            await operations.fillSelect(rule.$input, value)
          }
        },
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: async (rule, value) => {
          const input = rule.$input
          if (!input) return
          const checked =
            true === value || value === "true" || value === "Yes"
          if (input.checked !== checked) input.click()
        },
        options: {
          expectArray: false,
        },
      },
    }
  }

  async extractFormRules() {
    this.rules = await extractRulesAfterInterestClick()
    return this.rules
  }

  getSiteName() {
    return "zohorecruit"
  }

  formatAnswer(answer) {
    return zohoV2Answer.formatAnswer(answer, this.rules)
  }

  async doFillForm(skipFetch = false) {
    this.trackingAutofillSnapshot = null
    this.trackingAdditionalAutofillData = null
    await this.initializeFillForm()
    this.taskQueue.add(operations.preExpandForm)
    await this.taskQueue.run()
    const formRules = await this.extractFormRules()
    this.progressTracker.setFieldsRequiredStatus(formRules)
    const fetchResult = await this.fetchFormAnswers(
      formRules,
      skipFetch,
    )
    if (typeof fetchResult == "string") return fetchResult
    cancellation.checkpoint()
    this.taskQueue.add(async () => {
      await operations.expandForm(this.answer)
    })
    const addressFilled = await tryFillAddressAutocomplete(
      formRules,
      this.answer.regular,
      this.progressTracker,
    )
    const remainingRules = addressFilled
      ? formRules.filter((rule) => !isAddressLocationRule(rule))
      : formRules
    const regularOps = answerMethods.getRegularOperations(
      remainingRules,
      this.answer.regular,
      this.operationConfig,
    )
    for (const op of regularOps) this.taskQueue.add(op)
    await this.taskQueue.run()
    await this.handleResumeUpload()
    if (this.answer.education?.length > 0) {
      await operations.fillEducation(
        this.answer.education,
        this.operationConfig,
        this.progressTracker,
      )
    }
    if (this.answer.workExperience?.length > 0) {
      await operations.fillExperience(
        this.answer.workExperience,
        this.operationConfig,
        this.progressTracker,
      )
    }
    this.taskQueue.add(async () => {
      const fields = document.querySelectorAll(
        "input, textarea, select",
      )
      fields.forEach((field) =>
        field.dispatchEvent(new Event("blur")),
      )
    })
    await this.taskQueue.run()
    const finalizeResult = await this.finalizeFillForm()
    this.trackingAutofillSnapshot =
      await rules.getFormSnapshot(formRules)
    this.trackingAdditionalAutofillData =
      rules.getAdditionalFormSnapshotData(formRules)
    trace.trackEvent("zohorecruit_v2_form_autofill_answer", {
      formUrl: window.location.href,
      answer: {
        ...this.trackingAutofillSnapshot,
        ...this.trackingAdditionalAutofillData,
      },
    })
    await this.bindSubmitButtonTracking(formRules)
    return finalizeResult
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

  getSubmitButtonSelector() {
    return SUBMIT_BUTTON_SELECTOR
  }

  async getAutofillSnapshot(formRules) {
    this.rules = formRules
    if (!this.trackingAutofillSnapshot) {
      this.trackingAutofillSnapshot =
        await rules.getFormSnapshot(formRules)
    }
    return this.trackingAutofillSnapshot
  }

  async getSubmitSnapshot() {
    return await rules.getFormSnapshot(this.rules)
  }

  getAdditionalAutofillSnapshotData(formRules) {
    if (!this.trackingAdditionalAutofillData) {
      this.trackingAdditionalAutofillData =
        rules.getAdditionalFormSnapshotData(formRules)
    }
    return this.trackingAdditionalAutofillData
  }

  getAdditionalSubmitSnapshotData() {
    return rules.getAdditionalFormSnapshotData(this.rules)
  }

  normalizeAutofillAnswerPairTrackingData(data) {
    return {
      ...data,
      formUrl: window.location.href,
      source: "zohorecruit-v2",
      autofillSnapshot:
        this.trackingAutofillSnapshot ?? data.autofillSnapshot,
      additionalAutofillData:
        this.trackingAdditionalAutofillData ??
        data.additionalAutofillData,
    }
  }

  submitApplication() {
    const submit = document.querySelector('input[type="submit"]')
    if (submit) {
      submit.click()
    } else {
      console.error("[ZohoRecruit-V2] 未找到提交按钮")
    }
  }

  constructor(...args) {
    super(...args)
    this.rules = []
    this.trackingAutofillSnapshot = null
    this.trackingAdditionalAutofillData = null
  }
}

export { ZohoRecruitV2 }
