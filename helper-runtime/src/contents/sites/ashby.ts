// @ts-nocheck
/**
 * Ashby ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and ashby/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "ashby"
 */

import * as coreDom from "../../core/dom.js"
import * as messaging from "@plasmohq/messaging"
import * as answerMethods from "../methods/answer.ts"
import * as dom from "../methods/dom.ts"
import * as ashbyAnswer from "./ashby/answer.ts"
import * as canonicalSearch from "./ashby/canonical-search.ts"
import * as locationOperation from "./ashby/location-operation.ts"
import * as operations from "./ashby/operations.ts"
import * as rules from "./ashby/rules.ts"
import { BaseFiller } from "./base-filler.js"
import * as profileLocation from "./profile-location-original-answer.ts"
import * as enums from "../../core/enums.js"
import * as phoneCountryCode from "../../core/phone-country-code.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as stringUtils from "../../utils/string.ts"

const EDUCATION_DEPENDENT_PREFIXES = [
  "school (",
  "graduation date (",
  "degree (",
  "discipline (",
  "major (",
  "gpa (",
]

const SUBMIT_SUCCESS_SELECTORS = [
  './/div[contains(@class, "application-form-success-container") and contains(translate(., "SUCCESS", "success"), "success")]',
]

export class Ashby extends BaseFiller {
  constructor() {
    super()
    this.submitDOMQuery =
      './/button[contains(@class, "ashby-application-form-submit-button")]'
    this.initialCoverLetterObserver = null
    this.currentRunCountry = ""
    this.scheduleInitialCoverLetterCheck()
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          operations.fillInputTextField(
            rule.$input,
            value,
            rule.label,
            phoneCountryCode.resolvePhoneCountryCodeAnswer(this.answer),
          ),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillCheckboxField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) => operations.fillSelectField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.MULTI_SELECT]: {
        handler: (rule, value) => operations.fillSelectField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.ASHBY_SEARCH]: {
        handler: async (rule, value) => {
          if (!locationOperation.isAshbyGeoLocationRule(rule)) {
            return operations.fillComboboxField(rule, value)
          }

          let regularAnswer = String(
            Array.isArray(value) ? (value[0] ?? "") : (value ?? ""),
          ).trim()
          let locationTypes = locationOperation.getAshbyGeoLocationTypes(rule)
          let original = profileLocation.getProfileLocationOriginalAnswer(
            this.answer,
            { locationTypes },
          )
          let originalAnswer = original.value || regularAnswer

          rule.$input.setAttribute?.(
            "data-jr-ashby-resolve-stage",
            "started",
          )
          console.info("[Ashby][GeoLocation] resolve-start", {
            label: rule.label,
            answerSource: original.value ? original.source : "regular",
            hasOriginalAnswer: !!originalAnswer,
            locationTypes,
          })

          if (!originalAnswer) {
            console.warn("[Ashby][GeoLocation] resolve-skipped", {
              label: rule.label,
              reason: "empty-original-answer",
            })
            throw Error("Ashby GeoLocation answer is empty")
          }

          let operation = locationOperation.buildAshbyLocationOperation({
            currentUrl: this.getCurrentPageUrl(),
            originalAnswer,
            locationTypes,
          })
          let resolveResponse = await messaging.sendToBackground({
            name: "resolveAutofillOperation",
            body: {
              operation,
              source: "ashby",
            },
          })

          rule.$input.setAttribute?.(
            "data-jr-ashby-resolve-action",
            resolveResponse?.result?.action ?? "missing",
          )
          console.info("[Ashby][GeoLocation] resolve-result", {
            label: rule.label,
            action: resolveResponse?.result?.action ?? "missing",
            selectedCount: resolveResponse?.result?.selected_values?.length ?? 0,
          })

          let resolvedValue =
            locationOperation.getAshbyResolvedLocationValue(resolveResponse)
          if (!resolvedValue) {
            rule.$input.setAttribute?.(
              "data-jr-ashby-resolve-stage",
              "empty-result",
            )
            throw Error("Ashby GeoLocation resolve returned empty")
          }

          await operations.fillResolvedLocationCombobox(rule, resolvedValue)
        },
        options: { expectArray: true },
      },
    }
  }

  getSiteName() {
    return "ashby"
  }

  getCurrentPageUrl() {
    return window.location.href
  }

  async runPreFillForm() {
    this.currentRunCountry = ""
    canonicalSearch.clearAshbyCanonicalSchoolCache()
    let info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
      .catch(() => null)
    this.currentRunCountry = String(info?.location?.country ?? "").trim()
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules() {
    return await rules.extractRules()
  }

  formatAnswer(answer) {
    return ashbyAnswer.formatAnswer(answer)
  }

  async getAutofillSnapshot() {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  getAdditionalAutofillSnapshotData() {
    let education = rules.getAshbyEducationSnapshot()
    return education.length > 0 ? { education } : {}
  }

  getAdditionalSubmitSnapshotData() {
    let education = rules.getAshbyEducationSnapshot()
    return education.length > 0 ? { education } : {}
  }

  getSubmitButtonSelector() {
    return this.submitDOMQuery
  }

  getSubmitSuccessSelectors() {
    return SUBMIT_SUCCESS_SELECTORS
  }

  scheduleInitialCoverLetterCheck() {
    if (typeof window === "undefined" || typeof document === "undefined") return

    let check = () => {
      this.checkCoverLetter()
    }
    let delaysMs = [500, 1500, 3000, 6000, 10000]
    delaysMs.forEach((ms) => {
      window.setTimeout(check, ms)
    })

    if (
      typeof MutationObserver !== "undefined" &&
      document.documentElement
    ) {
      this.initialCoverLetterObserver = new MutationObserver(check)
      this.initialCoverLetterObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
      })
      window.setTimeout(() => {
        this.initialCoverLetterObserver?.disconnect()
        this.initialCoverLetterObserver = null
      }, 10000)
    }
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()
    let formRules = this.prepareCoverLetterRules(await this.extractFormRules())
    let answers = await this.requestFormAnswers(formRules, forceRefetch)
    if (typeof answers === "string") return answers

    if (answers) this.answer = answers
    canonicalSearch.prefetchAshbySchoolCanonicalNames(this.answer?.education)

    let requiredRules = filterEducationDependentRules(
      formRules,
      this.answer.regular,
    )
    this.progressTracker.setFieldsRequiredStatus(requiredRules)

    let nonEducationRules = requiredRules.filter(
      (rule) => rule.type !== enums.FIELD_TYPE.EDUCATION,
    )
    let regularRules = nonEducationRules.filter(
      (rule) => !isAshbyMainCountryRule(rule),
    )

    await this.fillRegularFields(regularRules)
    await this.fillCountryField(nonEducationRules)
    await this.fillEducationHistory()
    await this.fillCoverLetterFields()
    await this.bindSubmitButtonTracking(requiredRules)
    await this.handleFileUploads()
    return await this.finalizeFillForm()
  }

  async fillCountryField(rulesList) {
    let countryRule = rulesList.find(isAshbyMainCountryRule)
    if (!countryRule) return

    if (!this.currentRunCountry) {
      this.progressTracker.updateMissedProgress(countryRule.label)
      return
    }

    let input = countryRule.$input
    if (
      input &&
      (input.type === "text" || input.tagName === "TEXTAREA")
    ) {
      this.taskQueue.add(async () => {
        let filled = await operations.fillAshbyCountryCombobox(
          input,
          this.currentRunCountry,
        )
        if (filled) {
          this.progressTracker.updateFilledProgress(countryRule.label)
        }
      })
      await this.taskQueue.run()
    }
  }

  async handleFileUploads() {
    if (this.disableUploadResume) {
      await operations.clearExistingResume(document)
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

    if (this.coverLetter?.coverLetterId) {
      let coverLetter = this.coverLetter
      this.taskQueue.add(async () => {
        await operations.uploadCoverLetter(
          coverLetter,
          this.progressTracker.updateFieldRequiredStatus,
          this.progressTracker.updateFilledProgress,
        )
      })
    }

    await this.taskQueue.run()
  }

  async fillEducationHistory() {
    let education = Array.isArray(this.answer?.education)
      ? this.answer.education
      : []
    if (education.length === 0) return

    await operations.syncEducationHistorySections(education.length)
    let educationRules = rules.getEducationRules()
    coreDom.setSectionResultFocusRules(
      enums.FIELD_TYPE.EDUCATION,
      educationRules,
    )
    let ops = answerMethods.getEducationOperations(
      educationRules,
      education,
      this.operationConfig,
      undefined,
      answerMethods.sectionProgressCallbacks(
        "Education History",
        this.progressTracker,
      ),
    )
    for (let op of ops) this.taskQueue.add(op)
    await this.taskQueue.run()
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(operations.getAshbyCoverLetterStatus())
  }

  submitApplication() {
    let submitButton = xpath.getFirstOrderedNode(this.submitDOMQuery)
    if (!submitButton) return

    submitButton?.click()
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.type !== "childList") continue
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            node.classList.contains(
              "ashby-application-form-success-container",
            )
          ) {
            window.top?.postMessage(
              stringUtils.cleanObject({
                type: enums.MESSAGE_EVENTS.agentSubmitClicked,
              }),
              { targetOrigin: "*" },
            )
          }
        })
      }
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  }
}

export function isAshbyMainCountryRule(rule) {
  let label = String(rule.label ?? "")
    .replace(/(?:\s*\*)+\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
  if (label !== "country") return false
  let input = rule.$input
  return !!input?.closest?.('[data-field-path="_systemfield_country"]')
}

function filterEducationDependentRules(formRules, regularAnswers) {
  return formRules.filter((rule) =>
    shouldIncludeEducationDependentRule(rule, regularAnswers),
  )
}

function shouldIncludeEducationDependentRule(rule, regularAnswers) {
  if (!isEducationDependentLabel(rule.label)) return true
  let schoolKey = extractParentheticalSchoolKey(rule.label)
  if (!schoolKey) return true
  let schoolAnswerKey = findSchoolAnswerKey(schoolKey, regularAnswers)
  return (
    !!schoolAnswerKey && hasNonEmptyAnswer(regularAnswers[schoolAnswerKey])
  )
}

function isEducationDependentLabel(label) {
  let lower = label.toLowerCase()
  return EDUCATION_DEPENDENT_PREFIXES.some((prefix) =>
    lower.startsWith(prefix),
  )
}

function extractParentheticalSchoolKey(label) {
  let match = label.match(/\(([^)]+)\)\s*$/)
  return match?.[1]?.trim().toLowerCase() || ""
}

function findSchoolAnswerKey(schoolKey, regularAnswers) {
  for (let key of Object.keys(regularAnswers || {})) {
    if (
      key.toLowerCase().startsWith("school (") &&
      extractParentheticalSchoolKey(key) === schoolKey
    ) {
      return key
    }
  }
  return ""
}

function hasNonEmptyAnswer(value) {
  return Array.isArray(value)
    ? value.some((item) => String(item ?? "").trim() !== "")
    : String(value ?? "").trim() !== ""
}
