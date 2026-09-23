// @ts-nocheck
/**
 * Jobvite — answer shaping (country, city, address, date).
 */

import * as dayjs from "dayjs"

const dayjsDefault = { default: dayjs }

function firstString(value) {
  return Array.isArray(value)
    ? String(value[0] ?? "").trim()
    : String(value ?? "").trim()
}

function normalizeCountry(value) {
  const lower = firstString(value).toLowerCase()
  if (!lower) return ""
  if (lower === "canada" || lower === "ca") return "Canada"
  if (lower === "uk" || lower === "united kingdom") return "United Kingdom"
  if (
    lower === "us" ||
    lower === "usa" ||
    lower === "united states" ||
    lower === "united states of america"
  ) {
    return "United States"
  }
  return firstString(value)
}

function cityOnly(value) {
  const text = firstString(value)
  if (!text) return ""
  return text.split(",")[0]?.trim() || text
}

function addressBeforeCity(address, city) {
  const text = firstString(address)
  if (!text) return ""
  const parts = text
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
  if (parts.length < 4 || !city) return text
  const cityIndex = parts.findIndex(
    (part) => part.toLowerCase() === city.toLowerCase(),
  )
  return cityIndex > 0 ? parts.slice(0, cityIndex).join(", ") : text
}

export function formatAnswer(answer) {
  const regular = answer.regular || {}
  const hasCountryKey = Object.keys(regular).some((key) =>
    /^country$/i.test(key),
  )
  const country =
    normalizeCountry(regular.Country) ||
    normalizeCountry(regular.country) ||
    normalizeCountry(answer.country) ||
    (hasCountryKey ? "United States" : "")

  if (hasCountryKey && country) {
    for (const key of Object.keys(regular)) {
      if (/^country$/i.test(key)) delete regular[key]
    }
    regular.Country = [country]
  }

  const city = cityOnly(regular.City)
  if (city) regular.City = city

  const address = addressBeforeCity(regular.Address, city)
  if (address) regular.Address = address

  regular.Date = dayjsDefault.default().format("YYYY-MM-DD")
  answer.regular = regular
  return answer
}

export function formatDate(value) {
  return dayjsDefault.default(value).format("YYYY-MM-DD")
}
