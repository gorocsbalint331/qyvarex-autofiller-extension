// @ts-nocheck
/**
 * Eightfold ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and eightfold/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "eightfold"
 */

import * as answerMethods from "../methods/answer.js"
import * as dom from "../methods/dom.js"
import {
  BaseFiller,
  waitForComboQuestionsToSettle,
} from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as eightfoldAnswer from "./eightfold/answer.ts"
import * as operations from "./eightfold/operations.ts"
import * as formRules from "./eightfold/form-rules.ts"

const PHONE_COUNTRY_CODE_LABELS = new Set([
  "country code",
  "country phone code",
  "phone country code",
  "phone code",
  "phone country phone code",
])

const PHONE_NUMBER_LABELS = new Set([
  "number",
  "phone",
  "phone number",
  "phone phone number",
  "phone device type",
  "phone phone device type",
  "phone extension",
  "phone phone extension",
])

const DYNAMIC_FIELD_MAX_ROUNDS = 24
const DYNAMIC_MUTATION_WINDOW_MS = 2500
const DYNAMIC_SELECT_HYDRATION_ROUNDS = 4
const PENDING_HYDRATION_BREAK_AFTER = 1

export async function fillEightfoldPhoneCountryCodeWithProgress({
  label,
  source,
  fillCountryCode,
  updateFilled,
  updateMissed,
}) {
  const trimmed = source.trim()
  if (!trimmed) {
    updateMissed(label)
    return false
  }
  try {
    await fillCountryCode(trimmed)
    updateFilled(label)
    return true
  } catch {
    updateMissed(label)
    return false
  }
}

function getCurrentHref() {
  try {
    return window.location.href
  } catch {
    return ""
  }
}

function isEightfoldApplyPath(url) {
  try {
    const parsed = new URL(url)
    const pathname = parsed.pathname.replace(/\/+$/, "")
    return (
      pathname === "/careers/apply" ||
      /^\/careers\/apply\/[^/]+$/.test(pathname) ||
      /^\/careers\/job\/[^/]+\/apply$/.test(pathname) ||
      (pathname === "/careerhub/explore/jobs/apply" &&
        !!parsed.searchParams.get("pid"))
    )
  } catch {
    return false
  }
}

function hasEightfoldFormSurface(root) {
  if (root.querySelector("#careers-apply-form")) return true
  const fields = Array.from(root.querySelectorAll('[class*="field-"]'))
  return fields.some((field) => {
    const label = field.querySelector(
      'label[id*="_label"], legend[id*="_legend"]',
    )
    if (label) return true
    const controls = Array.from(
      field.querySelectorAll("input, textarea, select"),
    )
    return controls.some((control) => {
      if (control.tagName !== "INPUT") return true
      const type = (
        control.getAttribute("type") ||
        control.type ||
        "text"
      ).toLowerCase()
      return !["hidden", "file", "button", "submit"].includes(type)
    })
  })
}

export function isEightfoldApplicationFormPage(options = {}) {
  const url = options.url ?? getCurrentHref()
  if (isEightfoldApplyPath(url)) return true
  const root = options.root ?? document
  return hasEightfoldFormSurface(root)
}

function readSelectOrInputValue(rule) {
  if (!rule) return ""
  const input = rule.$input
  if (input instanceof HTMLInputElement) return (input.value || "").trim()
  if (input instanceof HTMLSelectElement) {
    const selected = input.selectedOptions?.[0]
    return (selected?.textContent || input.value || "").trim()
  }
  return ""
}

function normalizeCountryCompareKey(text) {
  const key = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
  if (
    ["us", "u s", "usa", "u s a", "united states", "united states of america"].includes(
      key,
    )
  ) {
    return "united states"
  }
  if (["gb", "uk", "u k", "great britain"].includes(key)) {
    return "united kingdom"
  }
  return key
}

function countriesMatch(left, right) {
  const a = normalizeCountryCompareKey(right)
  return a !== "" && normalizeCountryCompareKey(left) === a
}

function normalizeLooseText(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim()
}

function isMeaningfulSelectValue(text) {
  const key = normalizeLooseText(text)
  return !!key && key !== "select" && key !== "select one"
}

function selectHasCommittedValue(rule, value) {
  if (!rule) return false
  if (!rule.options?.length) return isMeaningfulSelectValue(normalizeLooseText(value))
  const needle = normalizeLooseText(value)
  return (
    !!isMeaningfulSelectValue(needle) &&
    rule.options.some((option) => {
      if (!isMeaningfulSelectValue(option)) return false
      return needle === normalizeLooseText(option)
    })
  )
}

function ruleValuePasses(rule, predicate) {
  if (!rule) return false
  const value = readSelectOrInputValue(rule)
  return predicate(value)
}

function findAnswerValuesForRule(rule, regular) {
  if (!rule || !regular) return []
  try {
    const found = answerMethods.findValueInRecord(rule.label, regular)
    const list = Array.isArray(found) ? found : [found]
    return list
      .map((value) => String(value).trim())
      .filter((value) => value !== "")
  } catch {
    return []
  }
}

function normalizeYesNo(text) {
  const key = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
  if (!key) return ""
  if (key === "yes" || key.startsWith("yes ")) return "yes"
  if (key === "no" || key.startsWith("no ")) return "no"
  return ""
}

function readLiveFieldValue(rule) {
  if (!rule) return ""
  const input = rule.$input
  if (
    input instanceof HTMLInputElement ||
    input instanceof HTMLTextAreaElement
  ) {
    return input.value || input.textContent || ""
  }
  if (input instanceof HTMLSelectElement) {
    return input.selectedOptions?.[0]?.textContent || input.value || ""
  }
  if (rule.type === enums.FIELD_TYPE.RADIOGROUP) {
    const parent = rule.$radioParent
    const radios = Array.from(
      parent?.querySelectorAll('input[type="radio"]') || [],
    )
    const checked = radios.find((radio) => radio.checked)
    if (!checked) return ""
    const forLabel = checked.id
      ? document.querySelector(`label[for="${checked.id}"]`)
      : null
    return forLabel?.textContent?.trim() || checked.value || ""
  }
  return input?.textContent || ""
}

export class Eightfold extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.hasComboQuestions = true
    this.comboQuestionMaxRounds = 4
    this.comboQuestionSettleDelayMs = 600
    this.comboQuestionQuietPeriodMs = 200
    this.comboQuestionSettleMaxWaitMs = 1600
    this.isResumeUploadConfirmed = true
    this.hasPendingDynamicSelectHydration = false
  }

  async refreshPhoneCountrySources() {
    const info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
    return {
      autofillCountry:
        typeof info?.location?.country === "string"
          ? info.location.country
          : "",
      phoneCountrySources: {
        phoneCountryCode: info?.phoneCountryCode,
        country: info?.location?.country,
      },
    }
  }

  formatAnswer(answer) {
    return eightfoldAnswer.formatAnswer(answer)
  }

  async filterNewComboQuestionRules(rules) {
    return rules.length === 0
      ? rules
      : formRules.filterAlreadyCommittedEightfoldRules(
          rules,
          this.progressTracker.fieldStatus.filledFields,
          await formRules.getFormSnapshot(),
        )
  }

  requestFormAnswers(rules, forceRefresh, options = {}) {
    return super.requestFormAnswers(
      formRules.prepareEightfoldAnswerRequestRules(rules),
      forceRefresh,
      options,
    )
  }

  shouldSkipConditionalRule(rule) {
    const conditional = rule.__eightfoldConditional
    if (!conditional) return false
    const parentValue =
      readLiveFieldValue(conditional.parentRule) ||
      findAnswerValuesForRule(conditional.parentRule, this.answer?.regular)[0] ||
      ""
    const yesNo = normalizeYesNo(parentValue)
    return !!yesNo && yesNo !== conditional.condition
  }

  async waitForDynamicFieldsToSettle() {
    await waitForComboQuestionsToSettle(this.comboQuestionSettleDelayMs)
  }

  async waitForDynamicFieldMutation(timeoutMs) {
    return (
      !(timeoutMs <= 0) &&
      typeof MutationObserver === "function" &&
      !!document.body &&
      (await new Promise((resolve) => {
        let settled = false
        const finish = (changed) => {
          if (settled) return
          settled = true
          observer.disconnect()
          clearTimeout(timer)
          resolve(changed)
        }
        const observer = new MutationObserver(() => finish(true))
        const timer = setTimeout(() => finish(false), timeoutMs)
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
        })
      }))
    )
  }

  async fillNewlyRevealedFields(
    knownRules,
    forceRefresh,
    phoneCountrySources = {},
    shouldSkip = () => false,
  ) {
    this.hasPendingDynamicSelectHydration = false
    const extracted = await this.extractFormRules({
      shouldHydrateSelectOptions: () => false,
    })
    let newRules = this.getNewComboQuestionRules(knownRules, extracted)
    if (newRules.length === 0) return knownRules
    const hydratedInputs = new Set()
    const hydratedLabels = new Set()
    let pendingSelects = newRules.filter((rule) => !shouldSkip(rule))
    let discovered = newRules
    for (let round = 0; round < DYNAMIC_SELECT_HYDRATION_ROUNDS; round++) {
      const inputsThisRound = new Set()
      const labelsThisRound = new Set()
      for (const rule of pendingSelects) {
        if (rule.$input) {
          inputsThisRound.add(rule.$input)
          hydratedInputs.add(rule.$input)
        }
        const label = operations.normalizeEightfoldFieldLabel(rule.label)
        labelsThisRound.add(label)
        hydratedLabels.add(label)
      }
      const refreshed = await this.extractFormRules({
        shouldHydrateSelectOptions: (label, input) =>
          (!!input && inputsThisRound.has(input)) ||
          labelsThisRound.has(
            operations.normalizeEightfoldFieldLabel(label),
          ),
      })
      discovered = this.getNewComboQuestionRules(knownRules, refreshed)
      pendingSelects = discovered.filter(
        (rule) =>
          !shouldSkip(rule) &&
          rule.type === enums.FIELD_TYPE.SELECT &&
          (rule.$input
            ? !hydratedInputs.has(rule.$input)
            : !hydratedLabels.has(
                operations.normalizeEightfoldFieldLabel(rule.label),
              )),
      )
      if (pendingSelects.length === 0) break
    }
    this.hasPendingDynamicSelectHydration = pendingSelects.length > 0
    discovered = discovered.filter(
      (rule) =>
        !!shouldSkip(rule) ||
        rule.type !== enums.FIELD_TYPE.SELECT ||
        (rule.$input
          ? hydratedInputs.has(rule.$input)
          : hydratedLabels.has(
              operations.normalizeEightfoldFieldLabel(rule.label),
            )),
    )
    const skipped = discovered.filter(shouldSkip)
    const fillable = discovered.filter((rule) => !shouldSkip(rule))
    for (const rule of skipped) {
      this.progressTracker.updateFieldRequiredStatus(rule)
      this.progressTracker.updateMissedProgress(rule.label)
    }
    for (const rule of fillable) {
      this.progressTracker.updateFieldRequiredStatus(rule)
    }
    if (fillable.length === 0) return [...knownRules, ...discovered]
    const answers = await this.requestFormAnswers(fillable, forceRefresh, {
      updateTimeTrace: false,
    })
    if (typeof answers === "string") return answers
    if (answers) this.mergeComboQuestionAnswer(answers, fillable)
    const countryCodeRules = fillable.filter((rule) =>
      PHONE_COUNTRY_CODE_LABELS.has(
        operations.normalizeEightfoldFieldLabel(rule.label),
      ),
    )
    const phoneRules = fillable.filter((rule) =>
      PHONE_NUMBER_LABELS.has(
        operations.normalizeEightfoldFieldLabel(rule.label),
      ),
    )
    const regularRules = fillable.filter((rule) => {
      const label = operations.normalizeEightfoldFieldLabel(rule.label)
      return (
        !PHONE_COUNTRY_CODE_LABELS.has(label) &&
        !PHONE_NUMBER_LABELS.has(label)
      )
    })
    if (regularRules.length > 0) await this.fillRegularFields(regularRules)
    await this.fillPhoneCountryCodeRules(countryCodeRules, phoneCountrySources)
    if (phoneRules.length > 0) await this.fillRegularFields(phoneRules)
    return [...knownRules, ...discovered]
  }

  async fillPhoneCountryCodeRules(rules, phoneCountrySources) {
    if (rules.length === 0) return
    this.taskQueue.add(async () => {
      for (const rule of rules) {
        if (rule.type !== enums.FIELD_TYPE.SELECT) {
          this.progressTracker.updateMissedProgress(rule.label)
          continue
        }
        const input = rule.$input
        if (
          !(input instanceof HTMLInputElement) ||
          input.getAttribute("role") !== "combobox"
        ) {
          this.progressTracker.updateMissedProgress(rule.label)
          continue
        }
        const source = eightfoldAnswer.getEightfoldPhoneCountryCodeSource(
          rule,
          this.answer,
          phoneCountrySources,
        )
        await fillEightfoldPhoneCountryCodeWithProgress({
          label: rule.label,
          source,
          fillCountryCode: async (value) =>
            await operations.fillCountryCodeCombobox(input, value),
          updateFilled: (label) =>
            this.progressTracker.updateFilledProgress(label),
          updateMissed: (label) =>
            this.progressTracker.updateMissedProgress(label),
        })
      }
    })
    await this.taskQueue.run()
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: (rule, values) => {
        if (this.shouldSkipConditionalRule(rule)) return false
        const value = values?.[0]
        if (!value) return
        const label = String(rule?.label ?? "")
        return operations.fillInputTextField(
          formRules.getEightfoldLiveTextInputByLabel(label) || rule.$input,
          String(value ?? ""),
          label,
        )
      },
      [enums.FIELD_TYPE.SELECT]: (rule, values) =>
        !this.shouldSkipConditionalRule(rule) &&
        operations.fillSelectField(rule, values),
      [enums.FIELD_TYPE.CHECKBOX]: (rule, values) =>
        !this.shouldSkipConditionalRule(rule) &&
        operations.fillCheckboxField(rule, values),
      [enums.FIELD_TYPE.RADIOGROUP]: (rule, values) =>
        !this.shouldSkipConditionalRule(rule) &&
        operations.fillRadioGroupFiled(rule, values),
    }
  }

  async doFillForm(forceRefresh = false) {
    if (!isEightfoldApplicationFormPage()) {
      this.progressTracker.clear()
      this.taskQueue.clear()
      return this.progressTracker.generateFinalProgress()
    }
    if (await this.initializeFillForm(), !isEightfoldApplicationFormPage()) {
      return this.progressTracker.generateFinalProgress()
    }
    const { autofillCountry, phoneCountrySources } =
      await this.refreshPhoneCountrySources()
    await this.handleResumeUpload()
    if (!this.isResumeUploadConfirmed) {
      console.warn(
        "[Eightfold][Resume] upload completion was not confirmed; continuing field autofill",
      )
    }
    if (!isEightfoldApplicationFormPage()) {
      return this.progressTracker.generateFinalProgress()
    }
    console.info("[Eightfold][Country] applying after resume upload")
    const countryPrefillCommitted =
      await operations.preFillCountry(autofillCountry)
    if (countryPrefillCommitted) {
      await operations.waitForCountryDependentFieldsToSettle()
    }
    let formRulesList = await this.extractFormRules()
    let countryRule = formRulesList.find((rule) =>
      operations.isEightfoldCountryLabel(rule.label),
    )
    let countryCommitted = ruleValuePasses(countryRule, (value) =>
      countriesMatch(value, autofillCountry),
    )
    if (
      !countryCommitted &&
      countryRule &&
      countryRule.type === enums.FIELD_TYPE.SELECT &&
      autofillCountry.trim()
    ) {
      console.info(
        "[Eightfold][Country] retrying before dependent rule extraction",
      )
      try {
        await operations.fillSelectField(countryRule, [], autofillCountry)
        await operations.waitForCountryDependentFieldsToSettle()
        formRulesList = await this.extractFormRules()
        console.info("[Eightfold][Country] dependent rules refreshed", {
          dependentRules: formRulesList
            .filter((rule) =>
              [
                "state",
                "state province",
                "province",
                "region",
              ].includes(operations.normalizeEightfoldFieldLabel(rule.label)),
            )
            .map((rule) => ({
              label: rule.label,
              type: rule.type,
              optionCount:
                rule.type === enums.FIELD_TYPE.SELECT &&
                Array.isArray(rule.options)
                  ? rule.options.length
                  : 0,
            })),
        })
        countryRule = formRulesList.find((rule) =>
          operations.isEightfoldCountryLabel(rule.label),
        )
        countryCommitted = ruleValuePasses(countryRule, (value) =>
          countriesMatch(value, autofillCountry),
        )
      } catch (error) {
        console.warn("[Eightfold][Country] retry failed", {
          reason:
            error instanceof Error && error.name
              ? error.name
              : "unknown_error",
        })
        countryCommitted = false
      }
    }
    this.progressTracker.setFieldsRequiredStatus(formRulesList)
    const genderRule = formRulesList.find(
      (rule) =>
        operations.normalizeEightfoldFieldLabel(rule.label) === "gender",
    )
    const countryLabel = countryRule?.label || "Country"
    if (countryCommitted) {
      this.progressTracker.updateFilledProgress(countryLabel)
    } else {
      this.progressTracker.updateMissedProgress(countryLabel)
    }
    const shouldSkipLabel = operations.isMicrosoftEightfoldHost()
      ? (label) => operations.isUnfillableMicrosoftLabel(label)
      : () => false
    formRulesList
      .filter((rule) => shouldSkipLabel(rule.label))
      .forEach((rule) =>
        this.progressTracker.updateMissedProgress(rule.label),
      )
    let knownRules = formRulesList
    const answerRules = formRulesList.filter(
      (rule) =>
        !operations.isEightfoldCountryLabel(rule.label) &&
        !shouldSkipLabel(rule.label),
    )
    const answers = await this.fetchFormAnswers(answerRules, forceRefresh)
    if (typeof answers === "string") return answers
    const regularRules = formRulesList.filter((rule) => {
      const label = operations.normalizeEightfoldFieldLabel(rule.label)
      return (
        !operations.isEightfoldCountryLabel(rule.label) &&
        !PHONE_NUMBER_LABELS.has(label) &&
        !PHONE_COUNTRY_CODE_LABELS.has(label) &&
        !shouldSkipLabel(rule.label)
      )
    })
    await this.fillRegularFields(regularRules)
    const phoneCountryCodeRules = formRulesList.filter((rule) =>
      PHONE_COUNTRY_CODE_LABELS.has(
        operations.normalizeEightfoldFieldLabel(rule.label),
      ),
    )
    await this.fillPhoneCountryCodeRules(
      phoneCountryCodeRules,
      phoneCountrySources,
    )
    const phoneRules = formRulesList.filter((rule) =>
      PHONE_NUMBER_LABELS.has(
        operations.normalizeEightfoldFieldLabel(rule.label),
      ),
    )
    if (phoneRules.length > 0) await this.fillRegularFields(phoneRules)
    if (genderRule && genderRule.type === enums.FIELD_TYPE.SELECT) {
      const alreadyFilled = selectHasCommittedValue(
        genderRule,
        readSelectOrInputValue(genderRule),
      )
      if (!alreadyFilled) {
        const genderAnswers = findAnswerValuesForRule(
          genderRule,
          this.answer?.regular,
        )
        if (genderAnswers.length > 0) {
          this.taskQueue.add(async () => {
            try {
              await operations.fillSelectField(genderRule, genderAnswers)
              const committed = selectHasCommittedValue(
                genderRule,
                readSelectOrInputValue(genderRule),
              )
              if (committed) {
                this.progressTracker.updateFilledProgress("Gender")
              } else {
                this.progressTracker.updateMissedProgress("Gender")
              }
            } catch {
              this.progressTracker.updateMissedProgress("Gender")
            }
          })
          await this.taskQueue.run()
        } else {
          this.progressTracker.updateMissedProgress("Gender")
        }
      }
    }
    let mutationDeadline = Date.now() + DYNAMIC_MUTATION_WINDOW_MS
    let waitForMutation = false
    let pendingHydrationStreak = 0
    for (let round = 0; round < DYNAMIC_FIELD_MAX_ROUNDS; round++) {
      if (waitForMutation) {
        const remaining = mutationDeadline - Date.now()
        if (remaining <= 0 || !(await this.waitForDynamicFieldMutation(remaining))) {
          break
        }
      }
      await this.waitForDynamicFieldsToSettle()
      const nextKnown = await this.fillNewlyRevealedFields(
        knownRules,
        forceRefresh,
        phoneCountrySources,
        (rule) => shouldSkipLabel(rule.label),
      )
      if (typeof nextKnown === "string") return nextKnown
      if (nextKnown.length === knownRules.length) {
        if (this.hasPendingDynamicSelectHydration) {
          if (pendingHydrationStreak >= PENDING_HYDRATION_BREAK_AFTER) break
          pendingHydrationStreak += 1
          waitForMutation = false
        } else {
          pendingHydrationStreak = 0
          waitForMutation = true
        }
        continue
      }
      knownRules = nextKnown
      mutationDeadline = Date.now() + DYNAMIC_MUTATION_WINDOW_MS
      waitForMutation = false
      pendingHydrationStreak = 0
    }
    await this.executeSiteSpecificSteps(knownRules)
    return this.finalizeFillForm()
  }

  async runPreFillForm() {
    this.taskQueue.add(operations.preFillForm)
    await this.taskQueue.run()
  }

  async extractFormRules(options = {}) {
    return isEightfoldApplicationFormPage()
      ? await formRules.extractRules(options)
      : []
  }

  getSiteName() {
    return "eightfold"
  }

  async handleResumeUpload() {
    if (!isEightfoldApplicationFormPage()) return
    this.isResumeUploadConfirmed = true
    let attemptedUpload = false
    if (this.disableUploadResume) {
      await operations.removeResume()
      this.progressTracker.updateMissedProgress("Resume/CV")
    } else {
      this.taskQueue.add(async () => {
        await operations.removeResume()
        const fileInput = document.querySelector(
          'input[type="file"][accept*=".pdf"]',
        )
        if (!fileInput) return
        attemptedUpload = true
        const files = await answerMethods.fetchPdfAsBlob(this.resumeInfo)
        if (operations.isMicrosoftEightfoldHost() && fileInput.files) {
          fileInput.files = files.files
          fileInput.dispatchEvent(
            new Event("input", { bubbles: true, cancelable: false }),
          )
          fileInput.dispatchEvent(
            new Event("change", { bubbles: true, cancelable: false }),
          )
          this.progressTracker.updateFieldRequiredStatus({
            label: "Resume/CV",
            required: true,
          })
          this.progressTracker.updateFilledProgress("Resume/CV")
        } else {
          await dom.uploadFiles(
            fileInput,
            files,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
            "Resume/CV",
          )
        }
        await this.handleDataPrivacyAgreement()
      })
    }
    await this.taskQueue.run()
    if (attemptedUpload) {
      this.isResumeUploadConfirmed = await operations.waitForUploadComplete()
      if (!this.isResumeUploadConfirmed) {
        this.progressTracker.updateMissedProgress("Resume/CV")
      }
    }
  }

  getSubmitButtonSelector() {
    return './/button[@type="submit" or contains(@class, "submit") or contains(text(), "Submit")]'
  }

  async getAutofillSnapshot() {
    return await formRules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return await formRules.getFormSnapshot()
  }

  submitApplication() {
    const selector =
      './/button[@type="submit" or contains(@class, "submit")]'
    const button = xpath.getFirstOrderedNode(selector)
    if (button) button?.click()
  }

  async handleDataPrivacyAgreement() {
    const button = formRules.getDataPrivacyAgreementButton()
    if (
      button &&
      !(
        button.offsetParent === null ||
        button.disabled ||
        button.hasAttribute("disabled")
      )
    ) {
      try {
        await operations.agreeDataPrivacyAgreement(button)
      } catch {
        // ignore agreement click failures
      }
    }
  }
}
