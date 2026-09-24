// @ts-nocheck
/**
 * MyWorkday — terms/agreements checkbox helpers.
 */

import * as enums from "../../../core/enums.js"
import * as rules from "./rules.ts"

function isWorkdayAgreementInput(input) {
  return (
    input.name === "acceptTermsAndAgreements" ||
    input.getAttribute?.("data-automation-id") === "agreementCheckbox"
  )
}

function getWorkdayAgreementState(rule) {
  return rule.type === enums.FIELD_TYPE.CHECKBOX &&
    "$checkboxs" in rule &&
    rule.$checkboxs.length === 1 &&
    isWorkdayAgreementInput(rule.$checkboxs[0])
    ? rule.$checkboxs.every(rules.isWorkdayInputSelected)
    : null
}

export { getWorkdayAgreementState, isWorkdayAgreementInput }
