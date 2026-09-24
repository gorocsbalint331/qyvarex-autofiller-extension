// @ts-nocheck
/**
 * ADP WorkforceNow ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and adp-workforcenow/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "adp-workforcenow"
 */

import * as messaging from "@plasmohq/messaging"
import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.js"
import * as enums from "../../core/enums.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as delay from "../../utils/delay.js"
import * as address from "./address.ts"
import * as workforceAnswer from "./answer.ts"
import * as operations from "./operations.ts"
import * as rules from "./rules.ts"

function normalizeRuleLabel(rule) {
  return String(rule.label || "")
    .replace(/\s*\*\s*$/, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function isCountryRule(rule) {
  return normalizeRuleLabel(rule) === "country"
}

function isStateProvinceRule(rule) {
  return /(^|[\s/])(state|province|territory)($|[\s/])/.test(
    normalizeRuleLabel(rule),
  )
}

function isGooglePlacesAddressRule(rule) {
  const input = rule.$input
  return (
    normalizeRuleLabel(rule) === "address line 1" &&
    input instanceof HTMLInputElement &&
    input.classList.contains("pac-target-input")
  )
}

function firstAnswerText(value) {
  if (Array.isArray(value)) return value.map(firstAnswerText).find(Boolean) ?? ""
  if (typeof value === "string") return value.trim()
  if (typeof value === "number") return String(value)
  return ""
}

function buildAnswerSummary(formRules, regular) {
  return formRules.map((rule) => {
    const labelKey = normalizeRuleLabel(rule)
    const match = Object.entries(regular).find(
      ([key]) => normalizeRuleLabel({ label: key }) === labelKey,
    )
    const text = firstAnswerText(match?.[1])
    return {
      label: rule.label,
      type: rule.type,
      present: !!text,
      valueLength: text.length,
      answerLabelMatch: match
        ? match[0] === rule.label
          ? "exact"
          : "normalized"
        : "missing",
    }
  })
}

function errorName(error) {
  return error instanceof Error && error.name ? error.name : "unknown"
}

/** Ensure country selects run before state/province when both exist. */
function orderCountryBeforeState(formRules) {
  const countryIndex = formRules.findIndex(isCountryRule)
  const stateIndex = formRules.findIndex(isStateProvinceRule)
  if (countryIndex < 0 || stateIndex < 0 || countryIndex < stateIndex) {
    return formRules
  }
  const countries = formRules.filter(isCountryRule)
  const withoutCountries = formRules.filter((rule) => !isCountryRule(rule))
  const insertAt = withoutCountries.findIndex(isStateProvinceRule)
  return [
    ...withoutCountries.slice(0, insertAt),
    ...countries,
    ...withoutCountries.slice(insertAt),
  ]
}

class AdpWorkforceNow extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.formatAnswer = workforceAnswer.formatAnswer
    this.continueButtonHandler = null
    this.coverLetterCheckVersion = 0
    this.coverLetterAdvanceObserverBound = false
    this.currentRunCountry = ""
    this.currentRunCountryCommitted = false
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) =>
          workforceAnswer.isAdpWorkforceNowPhoneNumberLabel(rule.label)
            ? operations.fillAdpWorkforceNowPhoneInput(
                rule.$input,
                value,
                rule.label,
              )
            : operations.fillAdpWorkforceNowTextInput(
                rule.$input,
                value,
                rule.label,
              ),
        options: { expectArray: false },
      },
      [enums.FIELD_TYPE.NUMBER]: {
        handler: (rule, value) =>
          operations.fillAdpWorkforceNowTextInput(
            rule.$input,
            String(value ?? ""),
            rule.label,
          ),
        options: { expectArray: false },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => dom.fillCheckBoxesField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          workforceAnswer.isAdpWorkforceNowPhoneCountryCodeLabel(rule.label)
            ? operations.fillAdpWorkforceNowPhoneCountryCode(
                rule.$input,
                value,
                rule.label,
              )
            : operations.fillCustomSelectField(rule?.$input, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) => operations.fillRadioGroupField(rule, value),
        options: { expectArray: true },
      },
    }
  }

  async checkCoverLetter() {
    if (!this.coverLetterAdvanceObserverBound) {
      operations.bindCoverLetterAdvanceRecheckObserver(() => {
        void this.checkCoverLetter()
      })
      this.coverLetterAdvanceObserverBound = true
    }

    const version = ++this.coverLetterCheckVersion
    let sawAdvance = false

    for (let attempt = 0; attempt < 40; attempt++) {
      if (version !== this.coverLetterCheckVersion) return

      const advance = operations.getAdpWorkforceNowAdvanceButton()
      if (advance) sawAdvance = true

      if (sawAdvance) {
        const status = operations.getCoverLetterFieldStatus()
        if (status === "required") {
          if (version === this.coverLetterCheckVersion) {
            dom.postCoverLetterStatus(status)
          }
          return
        }
      }

      await delay.delay(sawAdvance ? 200 : 250)
    }

    if (version === this.coverLetterCheckVersion) {
      dom.postCoverLetterStatus("")
    }
  }

  async runPreFillForm() {
    await operations.preclickAddButtons()
    const info = await autofillInfo.useAutofillInfoStore
      .getState()
      .fetchAutofillInfo()
    this.currentRunCountry =
      typeof info?.location?.country === "string" ? info.location.country : ""
    this.currentRunCountryCommitted = await operations.prefillCountry(
      this.currentRunCountry,
    )
    console.info(
      "[AdpWorkforceNowCountryDebug] prefill-result",
      JSON.stringify({
        hasCountry: !!this.currentRunCountry,
        committed: this.currentRunCountryCommitted,
      }),
    )
    await operations.preselectDesiredSalaryControls()
  }

  async extractFormRules() {
    return await rules.getRules()
  }

  getSiteName() {
    return "adp-workforcenow"
  }

  async handleResumeUpload() {
    await this.uploadCurrentFileSlots()
  }

  async getAutofillSnapshot() {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  getSubmitButtonSelector() {
    return './/button[@id="ja_sv_cw_next_footer_btn" and normalize-space(.)="Submit"] | .//button[@type="submit" or contains(@class, "submit") or contains(normalize-space(.), "Submit")]'
  }

  async executeSiteSpecificSteps(formRules) {
    this.bindNextSnapshotHandler()
    await super.executeSiteSpecificSteps(formRules)
  }

  async doFillForm(forceRefetch = false) {
    await this.initializeFillForm()

    const orderedRules = orderCountryBeforeState(
      this.prepareCoverLetterRules(await this.extractFormRules()),
    )
    const { readyRules, deferredRaceRules } =
      rules.partitionAdpWorkforceNowVsidRaceRules(orderedRules)
    const hasVsidRaceDependency = rules.hasAdpWorkforceNowVsidRaceDependency()
    const withoutCountry = this.getRulesWithoutManualCountry(readyRules)

    this.logPhoneRules(withoutCountry)
    this.progressTracker.setFieldsRequiredStatus(readyRules)

    this.taskQueue.add(operations.fillDisabilityStatusIfPresent)
    await this.taskQueue.run()
    await this.handleResumeUpload()

    if (withoutCountry.length > 0) {
      const answerOrError = await this.fetchFormAnswers(
        withoutCountry,
        forceRefetch,
      )
      if (typeof answerOrError === "string") return answerOrError
      this.logPhoneAnswerResult()
      this.logRegularAnswerSummary(withoutCountry)
    } else {
      this.answer = workforceAnswer.formatAnswer({
        regular: {},
        education: [],
        workExperience: [],
        skills: [],
      })
    }

    const countryChanged = await this.fillCountryFields(readyRules)
    let fillRules = withoutCountry
    if (countryChanged) {
      fillRules = this.getRulesWithoutManualCountry(
        rules.partitionAdpWorkforceNowVsidRaceRules(
          orderCountryBeforeState(
            this.prepareCoverLetterRules(await this.extractFormRules()),
          ),
        ).readyRules,
      )
      console.info(
        "[AdpWorkforceNowDebug] rules-refreshed-after-country",
        JSON.stringify({
          originalRuleCount: withoutCountry.length,
          refreshedRuleCount: fillRules.length,
        }),
      )
    }

    await this.resolveGooglePlacesAddress(fillRules)
    await this.fillRegularFields(fillRules)
    await this.fillDeferredAdpWorkforceNowVsidRace(
      deferredRaceRules,
      hasVsidRaceDependency,
      forceRefetch,
    )
    await this.fillCoverLetterFields()
    await this.executeSiteSpecificSteps(readyRules)
    return this.finalizeFillForm()
  }

  submitApplication() {
    const button = operations.getAdpWorkforceNowAdvanceButton()
    if (!button?.isConnected) return
    const text = button.innerText?.trim() ?? ""
    const type = button.getAttribute("type")?.toLowerCase() ?? ""
    if (text === "Submit" || type === "submit") button.click()
  }

  async uploadCurrentFileSlots() {
    const resumeDom = operations.getResumeUploadDom()
    if (resumeDom.container) {
      if (this.disableUploadResume) {
        this.progressTracker.updateMissedProgress("Resume/CV")
      } else {
        this.taskQueue.add(async () => {
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
    }

    if (operations.getCoverLetterFieldStatus() === "required") {
      this.progressTracker.updateFieldRequiredStatus({
        label: "Cover Letter",
        required: true,
      })
      const payload = this.getCoverLetterFilePayload()
      if (payload) {
        this.taskQueue.add(async () => {
          const uploaded = await operations.uploadCoverLetter(
            payload,
            this.progressTracker.updateFieldRequiredStatus,
            this.progressTracker.updateFilledProgress,
          )
          if (!uploaded) {
            this.progressTracker.updateMissedProgress("Cover Letter")
          }
        })
      } else {
        this.progressTracker.updateMissedProgress("Cover Letter")
      }
    }

    await this.taskQueue.run()
  }

  getCoverLetterFilePayload() {
    return this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName
      ? {
          coverLetterId: this.coverLetter.coverLetterId,
          coverLetterName: this.coverLetter.coverLetterName,
          markdown: this.coverLetter.markdown,
          useLegacyDownload: this.coverLetter.useLegacyDownload,
        }
      : null
  }

  async fillCountryFields(formRules) {
    const countryRules = formRules.filter((rule) => {
      const input = rule.$input
      return isCountryRule(rule) && input instanceof HTMLElement
    })
    let anyFilledAfterPrefill = false

    for (const rule of countryRules) {
      const input = rule.$input
      this.taskQueue.add(async () => {
        if (this.currentRunCountryCommitted) {
          this.progressTracker.updateFilledProgress(rule.label)
          console.info(
            "[AdpWorkforceNowCountryDebug] progress",
            JSON.stringify({
              label: rule.label,
              outcome: "prefill-committed",
            }),
          )
          return
        }

        const filled = await operations.fillCountry(
          input,
          this.currentRunCountry,
        )
        console.info(
          "[AdpWorkforceNowCountryDebug] progress",
          JSON.stringify({
            label: rule.label,
            hasCountry: !!this.currentRunCountry,
            outcome: filled ? "filled-after-prefill" : "not-committed",
          }),
        )
        if (filled) {
          anyFilledAfterPrefill = true
          this.progressTracker.updateFilledProgress(rule.label)
        } else {
          this.progressTracker.updateMissedProgress(rule.label)
        }
      })
    }

    if (countryRules.length > 0) await this.taskQueue.run()
    return anyFilledAfterPrefill
  }

  getRulesWithoutManualCountry(formRules) {
    return formRules.filter((rule) => !isCountryRule(rule))
  }

  async waitForEnabledAdpWorkforceNowVsidRaceRule(waitForEthnicityTrigger) {
    const deadline = Date.now() + 1500
    let attempts = 0
    let lastRule = null
    let ethnicityTriggerObserved = !waitForEthnicityTrigger

    while (Date.now() <= deadline) {
      attempts += 1
      if (waitForEthnicityTrigger) {
        ethnicityTriggerObserved =
          rules.isAdpWorkforceNowVsidRaceRequiredAfterEthnicity()
      }
      if (!ethnicityTriggerObserved) {
        await delay.delay(100)
        continue
      }

      const liveRule = await rules.getEnabledAdpWorkforceNowVsidRaceRule()
      if (liveRule) {
        lastRule = liveRule
        if (liveRule.options?.length) {
          console.info("[AdpWorkforceNow][VSID Race] live rule ready", {
            attempts,
            optionCount: liveRule.options.length,
          })
          return liveRule
        }
      }
      await delay.delay(100)
    }

    console.info("[AdpWorkforceNow][VSID Race] live rule wait ended", {
      attempts,
      ethnicityTriggerObserved,
      raceControlEnabled: !!lastRule,
      optionCount: lastRule?.options?.length ?? 0,
    })
    return lastRule
  }

  async fillDeferredAdpWorkforceNowVsidRace(
    deferredRaceRules,
    hasVsidRaceDependency,
    forceRefetch,
  ) {
    if (!deferredRaceRules.length && !hasVsidRaceDependency) return

    console.info("[AdpWorkforceNow][VSID Race] defer dependent rule", {
      deferredRuleCount: deferredRaceRules.length,
      hasVsidRaceDependency,
      initialOptionCounts: deferredRaceRules.map(
        (rule) => rule.options?.length ?? 0,
      ),
    })

    const liveRule = await this.waitForEnabledAdpWorkforceNowVsidRaceRule(
      hasVsidRaceDependency,
    )
    if (!liveRule) {
      console.info(
        "[AdpWorkforceNow][VSID Race] not rendered after Ethnicity",
        { deferredRuleCount: deferredRaceRules.length },
      )
      return
    }

    this.progressTracker.updateFieldRequiredStatus(liveRule)
    if (!liveRule.options?.length) {
      console.warn(
        "[AdpWorkforceNow][VSID Race] enabled control has no options",
        { optionCount: 0 },
      )
      this.progressTracker.updateMissedProgress(liveRule.label)
      return
    }

    const answer = await this.requestFormAnswers([liveRule], forceRefetch, {
      updateTimeTrace: false,
    })
    if (!answer || typeof answer === "string") {
      console.warn(
        "[AdpWorkforceNow][VSID Race] answer request did not return a fillable result",
        { hasErrorCode: typeof answer === "string" },
      )
      this.progressTracker.updateMissedProgress(liveRule.label)
      return
    }

    this.answer.regular = {
      ...this.answer.regular,
      ...answer.regular,
    }
    this.answer.fillDataList = [
      ...(this.answer.fillDataList || []),
      ...(answer.fillDataList || []),
    ]

    const handler = this.operationConfig[liveRule.type]
    if (!handler) {
      console.warn(
        "[AdpWorkforceNow][VSID Race] no select operation configured",
      )
      this.progressTracker.updateMissedProgress(liveRule.label)
      return
    }

    const filled = await handler(liveRule, this.answer.regular)
    console.info("[AdpWorkforceNow][VSID Race] fill finished", {
      optionCount: liveRule.options.length,
      filled,
    })
  }

  logRegularAnswerSummary(formRules) {
    const summary = buildAnswerSummary(formRules, this.answer?.regular ?? {})
    console.info(
      "[AdpWorkforceNowDebug] answer-summary",
      JSON.stringify({
        totalFields: summary.length,
        answeredFields: summary.filter((item) => item.present).length,
        fields: summary,
      }),
    )
  }

  async resolveGooglePlacesAddress(formRules) {
    const addressRule = formRules.find(isGooglePlacesAddressRule)
    if (!addressRule) {
      console.info(
        "[AdpWorkforceNowAddressDebug] resolve",
        JSON.stringify({ outcome: "skipped-no-google-places-address-rule" }),
      )
      return
    }

    const sessionToken = address.createAdpAddressSessionToken()
    try {
      console.info(
        "[AdpWorkforceNowAddressDebug] resolve",
        JSON.stringify({
          outcome: "suggestions-requested",
          label: addressRule.label,
          sessionTokenLength: sessionToken.length,
        }),
      )

      const resolved = await address.resolveAdpWorkforceNowAddress({
        answer: this.answer,
        sessionToken,
        requestSuggestions: async (body) => {
          const result = await messaging.sendToBackground({
            name: "getAddressSuggestions",
            body,
          })
          console.info(
            "[AdpWorkforceNowAddressDebug] resolve",
            JSON.stringify({
              outcome: "suggestions-received",
              resultCount: Array.isArray(result) ? result.length : 0,
            }),
          )
          return result
        },
        resolveSuggestion: async (body) => {
          console.info(
            "[AdpWorkforceNowAddressDebug] resolve",
            JSON.stringify({
              outcome: "place-resolve-requested",
              placeIdLength: body.placeId.length,
            }),
          )
          const result = await messaging.sendToBackground({
            name: "resolveAddressSuggestion",
            body,
          })
          console.info(
            "[AdpWorkforceNowAddressDebug] resolve",
            JSON.stringify({
              outcome: "place-resolve-received",
              resolved:
                !!result &&
                typeof result === "object" &&
                result.resolved === true,
            }),
          )
          return result
        },
      })

      if (!resolved) {
        console.info(
          "[AdpWorkforceNowAddressDebug] resolve",
          JSON.stringify({ outcome: "no-unique-resolved-address" }),
        )
        return
      }

      this.answer.regular = address.applyResolvedAdpAddressToRegularAnswers(
        this.answer.regular,
        formRules.map((rule) => rule.label),
        resolved,
      )
      console.info(
        "[AdpWorkforceNowAddressDebug] resolve",
        JSON.stringify({
          outcome: "resolved-address-applied",
          hasCity: !!resolved.city,
          hasState: !!resolved.state,
          hasPostalCode: !!resolved.postalCode,
        }),
      )
    } catch (error) {
      console.warn(
        "[AdpWorkforceNowAddressDebug] resolve",
        JSON.stringify({
          outcome: "request-failed",
          errorName: errorName(error),
        }),
      )
    }
  }

  logPhoneRules(formRules) {
    const phoneRules = formRules
      .filter(
        (rule) =>
          workforceAnswer.isAdpWorkforceNowPhoneNumberLabel(rule.label) ||
          workforceAnswer.isAdpWorkforceNowPhoneCountryCodeLabel(rule.label),
      )
      .map((rule) => ({
        label: rule.label,
        type: rule.type,
        hasDescription: !!rule.description,
        optionCount: Array.isArray(rule.options) ? rule.options.length : 0,
      }))
    console.info(
      "[AdpWorkforceNowPhoneDebug] rules",
      JSON.stringify({ phoneRules }),
    )
  }

  logPhoneAnswerResult() {
    const regular = this.answer?.regular || {}
    const labels = [
      "Mobile Number",
      "Home Phone Number",
      workforceAnswer.getAdpWorkforceNowPhoneCountryCodeLabel("Mobile Number"),
      workforceAnswer.getAdpWorkforceNowPhoneCountryCodeLabel(
        "Home Phone Number",
      ),
    ].filter(Boolean)

    const fields = labels.map((label) => {
      const raw = regular[label]
      const text = Array.isArray(raw)
        ? String(raw.find((item) => String(item ?? "").trim()) ?? "").trim()
        : String(raw ?? "").trim()
      return {
        label,
        present: !!text,
        valueLength: text.length,
        digitsLength: text.replace(/\D/g, "").length,
        prefixOnly: /^\+\d{1,4}$/.test(text),
      }
    })

    console.info(
      "[AdpWorkforceNowPhoneDebug] answer",
      JSON.stringify({ fields }),
    )
  }

  bindNextSnapshotHandler() {
    const button = document.getElementById("ja_sv_cw_next_footer_btn")
    if (!button?.isConnected) return

    const text = button.innerText?.trim() ?? ""
    if (text === "Submit") return

    if (this.continueButtonHandler) {
      button.removeEventListener("click", this.continueButtonHandler)
    }

    const snapshot = rules.getFormSnapshot()
    this.continueButtonHandler = rules.submitHandler.bind(null, snapshot)
    button.addEventListener("click", this.continueButtonHandler)
  }
}

export { AdpWorkforceNow }
