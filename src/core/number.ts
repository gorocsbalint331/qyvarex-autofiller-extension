// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/number.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import { parsePhoneNumberFromString } from "libphonenumber-js/core"
import * as phoneMetadataModule from "libphonenumber-js/min/metadata"
import { getCountryByIso2 } from "./data.js"
import { resolveIso2FromCountryName } from "./match.js"
import {
  extractPhoneCountryName,
  getDialCodeDigits,
  normalizePhoneCountryText,
} from "./parse.js"
import { stripDialCodePrefix } from "./strip.js"
import { formatPhoneNumber } from "../utils/phone.ts"

const phoneMetadataInterop = { default: phoneMetadataModule?.default ?? phoneMetadataModule }
const EMPTY_PHONE_PARTS = {
  iso2: "",
  dialCode: "",
  national: "",
  e164: "",
  valid: false,
}

function resolveDialCodeAndIso2(countrySource) {
  let dialCodeDigits = getDialCodeDigits(countrySource)
  let normalizedCountryName =
    normalizePhoneCountryText(extractPhoneCountryName(countrySource)) ||
    (dialCodeDigits ? "" : normalizePhoneCountryText(countrySource))
  let iso2 = normalizedCountryName
    ? resolveIso2FromCountryName(normalizedCountryName)
    : ""
  if (dialCodeDigits) return { dialCode: dialCodeDigits, iso2 }
  let countryRecord = iso2 ? getCountryByIso2(iso2) : undefined
  return { dialCode: countryRecord?.dialCode || "", iso2 }
}

function toParsedPhoneParts(parsed) {
  let phone = parsed
  return phone?.nationalNumber &&
    phone.countryCallingCode &&
    ("function" != typeof phone.isValid || phone.isValid())
    ? {
        iso2: String(phone.country || "").toLowerCase(),
        dialCode: String(phone.countryCallingCode),
        national: String(phone.nationalNumber),
      }
    : null
}

let phoneMetadata = phoneMetadataInterop.default?.countries
  ? phoneMetadataInterop.default
  : (phoneMetadataInterop.default?.default ?? phoneMetadataInterop.default)

function tryParsePhoneParts(phoneValue, defaultIso2) {
  try {
    return toParsedPhoneParts(
      parsePhoneNumberFromString(
        phoneValue,
        defaultIso2 ? { defaultCountry: defaultIso2.toUpperCase() } : undefined,
        phoneMetadata,
      ),
    )
  } catch {
    return null
  }
}

function stripKnownDialCode(phoneValue, dialCode) {
  if (!dialCode) return formatPhoneNumber(phoneValue).phoneWithoutAreaCode
  let stripped = stripDialCodePrefix(phoneValue, `+${dialCode}`)
  if (stripped !== phoneValue) return stripped
  let digitsOnly = phoneValue.replace(/\D/g, "")
  return "1" === dialCode && 11 === digitsOnly.length && digitsOnly.startsWith("1")
    ? digitsOnly.slice(1)
    : stripped
}

export function decomposePhone(phoneValue, countrySource) {
  let trimmed = String(phoneValue ?? "").trim()
  if (!trimmed) return EMPTY_PHONE_PARTS
  let { dialCode, iso2 } = resolveDialCodeAndIso2(countrySource)
  let digitsOnly = trimmed.replace(/\D/g, "")
  let parseCandidates = [
    trimmed.startsWith("+") ? tryParsePhoneParts(trimmed) : null,
    digitsOnly ? tryParsePhoneParts(`+${digitsOnly}`) : null,
    iso2 ? tryParsePhoneParts(digitsOnly, iso2) : null,
  ].filter(Boolean)
  let matched =
    (dialCode ? parseCandidates.find((candidate) => candidate.dialCode === dialCode) : undefined) ??
    (dialCode ? undefined : parseCandidates[0])
  if (matched)
    return {
      iso2: matched.iso2,
      dialCode: matched.dialCode,
      national: matched.national,
      e164: `+${matched.dialCode}${matched.national}`,
      valid: true,
    }
  let national = stripKnownDialCode(trimmed, dialCode)
  return {
    iso2,
    dialCode,
    national,
    e164: dialCode ? `+${dialCode}${national.replace(/\D/g, "")}` : "",
    valid: false,
  }
}

export function stripPhoneCountryCodePrefix(phoneValue, countrySource) {
  let trimmed = String(phoneValue ?? "").trim()
  if (!trimmed) return ""
  let { dialCode } = resolveDialCodeAndIso2(countrySource)
  if (dialCode) return stripKnownDialCode(trimmed, dialCode) || trimmed
  if (trimmed.startsWith("+")) {
    let parsed = tryParsePhoneParts(trimmed)
    if (parsed) return stripKnownDialCode(trimmed, parsed.dialCode) || trimmed
  }
  return stripKnownDialCode(trimmed, "") || trimmed
}

export function toNationalPhoneValue(phoneValue, countrySource) {
  let trimmed = String(phoneValue ?? "").trim()
  return trimmed ? decomposePhone(trimmed, countrySource).national || trimmed : ""
}

export function resolveDualControlPhoneValue(phoneValue, countrySource, fallbackCountrySource) {
  let trimmed = String(phoneValue ?? "").trim()
  if (!trimmed) return ""
  let resolvedCountry = resolvePhoneCountrySource(
    trimmed,
    countrySource,
    fallbackCountrySource,
  )
  return (resolvedCountry && toNationalPhoneValue(trimmed, resolvedCountry)) || trimmed
}

export function toInternationalPhoneValue(phoneValue, countrySource) {
  let trimmed = String(phoneValue ?? "").trim()
  if (!trimmed) return ""
  let parts = decomposePhone(trimmed, countrySource)
  return parts.e164 || trimmed
}

export function resolvePhoneFieldValue(phoneValue, countrySource, fallbackCountrySource) {
  let trimmed = String(phoneValue ?? "").trim()
  if (!trimmed) return ""
  let resolvedCountry = resolvePhoneCountrySource(
    trimmed,
    countrySource,
    fallbackCountrySource,
  )
  if (String(countrySource ?? "").trim())
    return toNationalPhoneValue(trimmed, resolvedCountry) || trimmed
  let { dialCode, e164 } = decomposePhone(trimmed, resolvedCountry)
  return e164 && dialCode && "1" !== dialCode
    ? e164
    : toNationalPhoneValue(trimmed, resolvedCountry) || trimmed
}

export function resolvePhoneCountrySource(phoneValue, countrySource, fallbackCountrySource) {
  let trimmedCountry = String(countrySource ?? "").trim()
  if (trimmedCountry && getDialCodeDigits(trimmedCountry)) return trimmedCountry
  let trimmedPhone = String(phoneValue ?? "").trim()
  let looksInternational =
    trimmedPhone.startsWith("+") || /^\(\+\d{1,4}\)/.test(trimmedPhone)
  if (looksInternational) {
    let { dialCode, iso2 } = decomposePhone(trimmedPhone)
    if (dialCode) {
      let countryRecord = iso2 ? getCountryByIso2(iso2) : undefined
      return countryRecord?.name ? `+${dialCode} ${countryRecord.name}` : `+${dialCode}`
    }
  }
  let fallback = trimmedCountry || String(fallbackCountrySource ?? "").trim()
  return fallback && decomposePhone(phoneValue, fallback).valid ? fallback : ""
}
