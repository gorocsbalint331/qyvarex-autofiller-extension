// @ts-nocheck
/**
 * Amazon ATS phone value helpers (country source + dual-control national number).
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

export function resolveAmazonPhoneCountrySource(phoneValue, answer) {
  return phoneCountryCode.resolvePhoneCountrySource(phoneValue, answer)
}

export function resolveAmazonPhoneValue(phoneValue, countrySource) {
  return phoneCountryCode.resolveDualControlPhoneValue(phoneValue, countrySource)
}
