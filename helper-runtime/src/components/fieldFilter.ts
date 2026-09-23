// @ts-nocheck
/**
 * Heuristics for AI-relevant textareas vs. identity / cover-letter fields.
 */

import { normalizeFieldLabel } from "../utils/fieldLabel.ts"
import { extractVisibleLabel } from "./labelExtraction.ts"

const AUTOCOMPLETE_TOKENS = new Set([
  "name",
  "honorific-prefix",
  "given-name",
  "additional-name",
  "family-name",
  "honorific-suffix",
  "nickname",
  "username",
  "new-password",
  "current-password",
  "one-time-code",
  "organization-title",
  "organization",
  "street-address",
  "address-line1",
  "address-line2",
  "address-line3",
  "address-level1",
  "address-level2",
  "address-level3",
  "address-level4",
  "country",
  "country-name",
  "postal-code",
  "cc-name",
  "cc-given-name",
  "cc-additional-name",
  "cc-family-name",
  "cc-number",
  "cc-exp",
  "cc-exp-month",
  "cc-exp-year",
  "cc-csc",
  "cc-type",
  "transaction-currency",
  "transaction-amount",
  "language",
  "bday",
  "bday-day",
  "bday-month",
  "bday-year",
  "sex",
  "tel",
  "tel-country-code",
  "tel-national",
  "tel-area-code",
  "tel-local",
  "tel-extension",
  "email",
  "impp",
  "url",
  "photo",
])

const IRRELEVANT_LABEL_PATTERNS = [
  /^(first|last|middle|full|given|family|preferred|legal|maiden)\s*name$/,
  /^name$/,
  /^nickname$/,
  /^pronouns?$/,
  /^e-?mail(\s*address)?$/,
  /^(phone|telephone|mobile|cell)(\s*number)?$/,
  /^fax(\s*number)?$/,
  /^(zip|postal)(\s*code)?$/,
  /^(city|state|country|province|region)$/,
  /^street(\s*address)?$/,
  /^address(\s*line)?\s*\d*$/,
  /^(apt\.?|apartment|suite|unit)$/,
  /^(linkedin|github|twitter|x|portfolio|website|personal\s*site|blog|url)(\s*(url|link|profile))?$/,
  /^password$/,
  /^confirm\s*password$/,
  /^(re-?type|repeat)\s*password$/,
  /^(date\s*of\s*birth|birthday|dob|birth\s*date)$/,
  /^(ssn|social\s*security(\s*number)?)$/,
  /^age$/,
  /^gender$/,
  /^(current\s*)?(job\s*)?title$/,
  /^(current\s*)?company$/,
  /^employer$/,
  /^school$/,
  /^degree$/,
  /^major$/,
  /^gpa$/,
  /^graduation(\s*date|\s*year)?$/,
  /^start\s*date$/,
  /^end\s*date$/,
  /^(desired\s*|expected\s*|current\s*)?salary$/,
  /^(desired\s*|expected\s*)?compensation$/,
]

const IRRELEVANT_ATTR_PATTERNS = [
  /(^|[_\-])(first|last|middle|full|given|family)[_\-]?name([_\-]|$)/,
  /(^|[_\-])name$/,
  /(^|[_\-])e?mail([_\-]|$)/,
  /(^|[_\-])(phone|mobile|cellphone|tel)([_\-]|$)/,
  /(^|[_\-])(zip|postcode|postal[_\-]?code)([_\-]|$)/,
  /(^|[_\-])(city|state|country)([_\-]|$)/,
  /(^|[_\-])(linkedin|github|website|portfolio|url)([_\-]|$)/,
  /(^|[_\-])password([_\-]|$)/,
  /(^|[_\-])(dob|birthday|birth[_\-]?date)([_\-]|$)/,
  /(^|[_\-])ssn([_\-]|$)/,
  /(^|[_\-])salary([_\-]|$)/,
]

const COVER_LETTER_LABEL = /\bcover\s+letter\b/
const COVER_LETTER_ATTR = /(^|[_\-])cover[_\-]+letter([_\-]|$)/

function toSnakeCaseAttr(value) {
  return value.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase()
}

export function isAiRelevantTextarea(signals) {
  if (signals.autocomplete) {
    const tokens = signals.autocomplete.toLowerCase().trim().split(/\s+/)
    for (const token of tokens) {
      if (AUTOCOMPLETE_TOKENS.has(token)) {
        return { relevant: false, reason: `autocomplete:${token}` }
      }
    }
  }

  const label = normalizeFieldLabel(signals.label).replace(/:/g, "")
  if (label) {
    for (const pattern of IRRELEVANT_LABEL_PATTERNS) {
      if (pattern.test(label)) {
        return { relevant: false, reason: `label:${pattern.source}` }
      }
    }
    return { relevant: true }
  }

  const name = (signals.name || "").toLowerCase()
  const id = (signals.id || "").toLowerCase()
  if (name || id) {
    for (const pattern of IRRELEVANT_ATTR_PATTERNS) {
      if (pattern.test(name) || pattern.test(id)) {
        return { relevant: false, reason: `attr:${pattern.source}` }
      }
    }
  }

  return { relevant: true }
}

export function readTextareaSignals(element) {
  return {
    label: extractVisibleLabel(element),
    autocomplete: element.getAttribute("autocomplete"),
    name: element.name || "",
    id: element.id || "",
  }
}

export function isCoverLetterTextarea(signals) {
  const label = normalizeFieldLabel(signals.label).replace(/:/g, "")
  if (label && COVER_LETTER_LABEL.test(label)) return true

  const name = toSnakeCaseAttr(signals.name)
  if (name && COVER_LETTER_ATTR.test(name)) return true

  const id = toSnakeCaseAttr(signals.id)
  return !!(id && COVER_LETTER_ATTR.test(id))
}
