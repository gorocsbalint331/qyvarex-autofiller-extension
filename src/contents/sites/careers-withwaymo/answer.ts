// @ts-nocheck
/**
 * Careers With Waymo — answer shaping and label helpers.
 */

import * as phoneCountryCode from "../../../core/phone-country-code.js"

export const PHONE_AREA_CODE_KEY = "__phoneAreaCode"

const MONTH_ABBREVIATIONS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
]

function cleanLabelText(text) {
  return text
    .replace(/\(\s*required\s*\)/gi, "")
    .replace(/\s+/g, " ")
    .replace(/\*/g, "")
    .trim()
}

export function getVisibleLabelText(element) {
  if (!(element instanceof Element)) return ""

  const adaLabel = element.querySelector(".ada-label-text")
  if (adaLabel) return cleanLabelText(adaLabel.textContent || "")

  const clone = element.cloneNode(true)
  for (const node of Array.from(
    clone.querySelectorAll(".ada-unique-content, .question-label-required"),
  )) {
    node.remove()
  }
  return cleanLabelText(clone.textContent || "")
}

export function getChoiceText(input, root = document) {
  if (input.id) {
    const label = root.querySelector(`label[for="${CSS.escape(input.id)}"]`)
    const fromFor = getVisibleLabelText(label)
    if (fromFor) return fromFor
  }

  const fromClosest = getVisibleLabelText(input.closest("label"))
  if (fromClosest) return fromClosest

  const parentText = input.parentElement?.textContent?.trim()
  return parentText || input.value?.trim() || ""
}

function isPhoneFieldLabel(label) {
  const normalized = label.trim().toLowerCase()
  return (
    !!/\b(phone|mobile|tel)\b/.test(normalized) &&
    !/\b(prefix|country|extension|ext)\b/.test(normalized)
  )
}

function expandEducationEndDate(item) {
  const rawEnd =
    item.End ??
    item["End date"] ??
    item["End Date"] ??
    item["Graduation date"] ??
    item["Graduation Date"]
  if (typeof rawEnd !== "string" || !rawEnd.trim()) return

  const normalized = rawEnd.trim().replace(/[/.]/g, "-")
  let month = ""
  let year = ""

  const monthYear = normalized.match(/^([A-Za-z]{3,9})\s+(\d{4})$/)
  const yearMonth = normalized.match(/^(\d{4})-(\d{1,2})$/)
  const monthDashYear = normalized.match(/^(\d{1,2})-(\d{4})$/)

  if (monthYear) {
    month = String(
      MONTH_ABBREVIATIONS.indexOf(monthYear[1].slice(0, 3).toLowerCase()) + 1,
    )
    year = monthYear[2]
  } else if (yearMonth) {
    month = String(Number(yearMonth[2]))
    year = yearMonth[1]
  } else if (monthDashYear) {
    month = String(Number(monthDashYear[1]))
    year = monthDashYear[2]
  } else if (/^\d{4}$/.test(normalized)) {
    year = normalized
  }

  if (month && month !== "0") item["End date month"] = month
  if (year) item["End date year"] = year
}

export function formatAnswer(answer) {
  if (answer?.regular) {
    const countryCode = phoneCountryCode.resolvePhoneCountryCodeAnswer(answer)
    for (const key of Object.keys(answer.regular)) {
      if (!isPhoneFieldLabel(key)) continue

      const raw = answer.regular[key]
      const value = Array.isArray(raw) ? raw[0] : raw
      if (typeof value !== "string" || !value.trim()) continue

      const { dialCode, national } = phoneCountryCode.decomposePhone(
        value,
        countryCode,
      )
      answer.regular[key] = national || value
      if (dialCode) answer.regular[PHONE_AREA_CODE_KEY] = `+${dialCode}`
    }
  }

  if (Array.isArray(answer.education)) {
    for (const item of answer.education) {
      if (item && typeof item === "object" && !Array.isArray(item)) {
        expandEducationEndDate(item)
      }
    }
  }

  return answer
}
