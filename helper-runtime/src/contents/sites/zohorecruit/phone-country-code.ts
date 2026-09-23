// @ts-nocheck
/**
 * Zoho Recruit — phone country code matching and dial formatting.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

export function normalizePhoneCountry(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[()]/g, " ")
    .replace(/\s*\+\s*(\d+)/g, "+$1")
    .replace(/\s+/g, " ")
    .trim()
}

export function findZohoPhoneCountryOption(options, query, addressCountry) {
  if (!normalizePhoneCountry(query)) return null
  const match = phoneCountryCode.findPhoneCountryOption(
    query,
    options.map((option) =>
      phoneCountryCode.parsePhoneCountryOptionLabel(
        option.textContent || "",
        option,
      ),
    ),
    {
      addressCountry: addressCountry || "",
      allowPrimaryDialFallback: true,
    },
  )
  return match?.element ?? null
}

export function extractDialCode(value) {
  return String(value ?? "").match(/\+(\d+)/)?.[1] || ""
}

export function formatZohoPhoneNumber(phone, dialCode) {
  const national = phoneCountryCode.toNationalPhoneValue(
    phone,
    dialCode ? `+${dialCode}` : "",
  )
  return (
    national.replace(/\D/g, "") || String(phone ?? "").replace(/\D/g, "")
  )
}
