// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/phone-country-code.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
export {
  INTERNATIONAL_PHONE_DESCRIPTION,
  LOCAL_PHONE_DESCRIPTION,
  PHONE_COUNTRY_CODE_ANSWER_LABELS,
  PHONE_COUNTRY_CODE_DESCRIPTION,
  PHONE_COUNTRY_CODE_LABEL,
  resolvePhoneAnswerText,
  resolvePhoneCountryCodeAnswer,
} from "./phone-country-code/answer.ts"
export {
  getCountryByIso2,
  getPrimaryCountryByDialCode,
  isSharedDialCode,
  SHARED_DIAL_CODES,
} from "./data.js"
export {
  dedupePhoneCountryOptions,
  findPhoneCountryOption,
  findPhoneCountryOptionElement,
  formatPhoneCountryOptionLabel,
  parsePhoneCountryOptionLabel,
  resolveIso2FromCountryName,
} from "./match.js"
export { resolveNationalPhoneValue } from "./national-value.js"
export {
  decomposePhone,
  resolveDualControlPhoneValue,
  resolvePhoneCountrySource,
  resolvePhoneFieldValue,
  stripPhoneCountryCodePrefix,
  toInternationalPhoneValue,
  toNationalPhoneValue,
} from "./number.js"
export {
  extractPhoneCountryName,
  formatPhoneCountryCode,
  getDialCodeDigits,
  normalizePhoneCountryCode,
  normalizePhoneCountryCodeWithName,
  normalizePhoneCountryText,
  withPhoneCountryCodeOption,
} from "./parse.js"
export { resolvePhoneCountryIso2 } from "./resolve.js"
export { stripDialCodePrefix } from "./strip.js"
