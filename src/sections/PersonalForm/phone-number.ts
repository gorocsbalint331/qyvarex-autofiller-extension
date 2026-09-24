// @ts-nocheck
/**
 * Phone widget helpers for intl-tel-input in the personal form.
 */

import { resolvePhoneCountryIso2 } from "../../core/phone-country-code.ts"
import {
  normalizePhoneCountryCode,
  normalizePhoneCountryCodeWithName,
} from "../../utils/phone-country-code.ts"

const PHONE_DROPDOWN_PARENT_ID = "jobright-helper-root"

export const PHONE_DROPDOWN_MAX_HEIGHT = 220

export function createPhoneInputInitOptions({
  initialCountry,
  popupContainer,
}) {
  return {
    initialCountry,
    separateDialCode: true,
    formatOnDisplay: false,
    formatAsYouType: false,
    strictMode: false,
    nationalMode: true,
    countrySearch: true,
    validationNumberTypes: [
      "MOBILE",
      "FIXED_LINE",
      "FIXED_LINE_OR_MOBILE",
    ],
    containerClass: "autofill-info-modal-phone-control",
    ...(popupContainer ? { dropdownContainer: popupContainer } : {}),
  }
}

export function resolvePhoneDropdownHeight({
  searchHeight,
  countryListScrollHeight,
}) {
  const naturalHeight = searchHeight + countryListScrollHeight
  return Math.min(naturalHeight || PHONE_DROPDOWN_MAX_HEIGHT, PHONE_DROPDOWN_MAX_HEIGHT)
}

export function resolvePhoneDropdownPosition({
  inputRect,
  popupHeight,
  viewportWidth,
  viewportHeight,
}) {
  const gap = 3
  const edgePadding = 8
  const spaceAbove = inputRect.top
  const spaceBelow = viewportHeight - inputRect.bottom
  const openBelow = spaceBelow >= popupHeight || spaceBelow >= spaceAbove
  const top = openBelow
    ? inputRect.bottom + gap
    : Math.max(edgePadding, inputRect.top - popupHeight - gap)
  const maxLeft = Math.max(
    edgePadding,
    viewportWidth - inputRect.width - edgePadding,
  )
  return {
    top,
    left: Math.min(Math.max(inputRect.left, edgePadding), maxLeft),
    width: inputRect.width,
  }
}

export function resolvePhoneDropdownParent(root) {
  return root?.getElementById(PHONE_DROPDOWN_PARENT_ID) ?? undefined
}

export function isPhoneCountryDropdownClick(event) {
  for (const node of event.composedPath()) {
    if (node.classList?.contains("iti__dropdown-content")) return true
  }
  return false
}

export function composeIntlPhoneValue(phoneCountryCode, phone) {
  const trimmed = phone.trim()
  if (trimmed.startsWith("+")) return trimmed
  return `${normalizePhoneCountryCode(phoneCountryCode)}${trimmed}`
}

export function splitIntlPhoneValue(phoneValue, phoneCountryCode) {
  const trimmed = phoneValue.trim()
  const dialCode = normalizePhoneCountryCode(phoneCountryCode)
  return {
    phoneCountryCode: normalizePhoneCountryCodeWithName(phoneCountryCode),
    phone:
      dialCode && trimmed.startsWith(dialCode)
        ? trimmed.slice(dialCode.length)
        : trimmed,
  }
}

export function getPhoneWidgetSyncAction({
  initialCountry,
  phoneCountryCode,
  phone,
  lastUserValue,
}) {
  if (
    lastUserValue?.phoneCountryCode === phoneCountryCode &&
    lastUserValue.phone === phone
  ) {
    return { type: "none" }
  }

  const trimmedPhone = phone.trim()
  if (!trimmedPhone && !initialCountry) return { type: "clear" }

  if (trimmedPhone.startsWith("+") && !initialCountry) {
    return { type: "international", phoneNumber: trimmedPhone }
  }

  return {
    type: "national",
    countryIso2: initialCountry,
    phoneNumber: trimmedPhone.startsWith("+")
      ? splitIntlPhoneValue(trimmedPhone, phoneCountryCode).phone
      : trimmedPhone,
  }
}

export function applyPhoneWidgetSyncAction(instance, action) {
  switch (action.type) {
    case "none":
      break
    case "clear":
      instance.setNumber("")
      instance.setCountry("")
      break
    case "international":
      instance.setNumber(action.phoneNumber)
      break
    case "national":
      instance.setCountry(action.countryIso2)
      instance.setNumber(action.phoneNumber)
      instance.setCountry(action.countryIso2)
      break
  }
}

export function resolveInitialPhoneCountryIso2({
  country,
  phoneCountryCode,
  countryOptions,
  phoneCountries,
}) {
  if (!phoneCountryCode.trim()) return ""

  const countryKey = country.trim().toLowerCase()
  const addressCountryIso2 = countryOptions
    .find((option) => option.value.trim().toLowerCase() === countryKey)
    ?.code.toLowerCase()

  return resolvePhoneCountryIso2({
    answer: phoneCountryCode,
    addressCountryIso2,
    allowPriorityFallback: true,
    countries: phoneCountries.map((entry) => ({
      ...entry,
      priority: entry.priority ?? Number.MAX_SAFE_INTEGER,
    })),
  })
}
