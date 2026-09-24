// @ts-nocheck
/**
 * PinpointHQ ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and pinpointhq/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "pinpointhq"
 */

import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import * as addressSearch from "./pinpointhq/address-search.ts"
import * as pinpointAnswer from "./pinpointhq/answer.ts"
import * as country from "./pinpointhq/country.ts"
import * as operations from "./pinpointhq/operations.ts"
import * as phoneCountryCode from "./pinpointhq/phone-country-code.ts"
import * as rules from "./pinpointhq/rules.ts"

const SUBMIT_BUTTON_XPATH =
  '//button[contains(@type, "submit")] | //button[contains(@class, "submit")]'

export class Pinpointhq extends BaseFiller {
  constructor(...args) {
    super(...args)
    this.countryPrefillResult = {
      country: null,
      countryCode: "",
      committed: false,
    }
    this.hasAddressCountryControl = false
    this.formatAnswer = pinpointAnswer.formatAnswer
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: async (rule, value) =>
          addressSearch.isPinpointAddressLine1Rule(rule) &&
          addressSearch.hasPinpointFindAddress()
            ? await addressSearch.fillPinpointAddressLine1Search({
                rule,
                value,
                currentUrl: window.location.href,
                addressContext: addressSearch.getPinpointAddressSearchContext(
                  this.answer,
                ),
              })
            : await operations.fillInputTextField(
                rule.$input,
                value,
                operations.resolvePinpointPhoneCountryCode(this.answer),
              ),
        options: { expectArray: false },
      },
      [enums.FIELD_TYPE.SELECT]: {
        handler: (rule, value) =>
          rule.label === phoneCountryCode.PINPOINT_PHONE_COUNTRY_CODE_LABEL
            ? operations.fillPhoneCountryCode(rule, value)
            : operations.fillSelectField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.CHECKBOX]: {
        handler: (rule, value) => operations.fillCheckboxField(rule, value),
        options: { expectArray: true },
      },
      [enums.FIELD_TYPE.RADIOGROUP]: {
        handler: (rule, value) => operations.fillRadioGroupField(rule, value),
        options: { expectArray: true },
      },
    }
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  async runPreFillForm() {
    this.hasAddressCountryControl =
      country.hasPinpointAddressCountryControl()
    if (!this.hasAddressCountryControl) {
      console.info(
        "[PinpointHQ][Country] pre-crawl-skipped reason=missing-address-country-control",
      )
      return
    }
    this.countryPrefillResult = await country.runPinpointCountryPrefill({
      fetchAutofillInfo: () =>
        autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo(),
      fillCountry: operations.prefillPinpointCountry,
    })
    console.info(
      `[PinpointHQ][Country] pre-crawl-result countryProvided=${!!this.countryPrefillResult.country} countryCode=${this.countryPrefillResult.countryCode || "none"} committed=${this.countryPrefillResult.committed}`,
    )
  }

  getPreExtractionAbortReason() {
    if (
      !this.hasAddressCountryControl ||
      this.countryPrefillResult.committed
    ) {
      return null
    }
    console.info(
      `[PinpointHQ][Country] pre-crawl-blocked reason=country-not-committed countryProvided=${!!this.countryPrefillResult.country}`,
    )
    return "Country from Autofill Information could not be set before address fields were read."
  }

  async fillRegularFields(formRules) {
    const countryRule = formRules.find(country.isMainPinpointCountryRule)
    if (countryRule) {
      const input = countryRule.$input
      if (input.value) {
        this.progressTracker.updateFilledProgress(countryRule.label)
      } else {
        this.progressTracker.updateMissedProgress(countryRule.label)
      }
    }
    await super.fillRegularFields(
      formRules.filter((rule) => rule !== countryRule),
    )
  }

  getSiteName() {
    return "pinpointhq"
  }

  async executeSiteSpecificSteps(formRules) {
    await operations.agreementCheckboxField()
    if (this.disableUploadResume) {
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
    await this.taskQueue.run()
    await this.bindSubmitButtonTracking(formRules)
  }

  getSubmitButtonSelector() {
    return SUBMIT_BUTTON_XPATH
  }

  async getAutofillSnapshot(_formRules) {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(
      SUBMIT_BUTTON_XPATH,
      document.body,
    )
    if (button) button.click()
  }
}
