// @ts-nocheck
/**
 * Rippling phone value — readable TypeScript source of truth.
 */

import * as corePhoneCountryCode from "../../../core/phone-country-code.js"

export function resolveRipplingNationalPhoneValue(rawPhone, answer) {
  return corePhoneCountryCode.resolveNationalPhoneValue(rawPhone, answer)
}
