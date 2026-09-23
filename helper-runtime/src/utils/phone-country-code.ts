// @ts-nocheck
/**
 * Re-export phone country-code helpers from ~core for ~utils consumers.
 */

export {
  extractPhoneCountryName,
  formatPhoneCountryCode,
  normalizePhoneCountryCode,
  normalizePhoneCountryCodeWithName,
  withPhoneCountryCodeOption,
} from "../core/phone-country-code.js"
