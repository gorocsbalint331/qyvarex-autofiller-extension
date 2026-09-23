// @ts-nocheck
/**
 * JobScore — answer formatting and field helpers.
 */

import * as coverLetter from "../../methods/cover-letter.js"

export function formatAnswer(answer, coverLetterText) {
  return coverLetter.applyCoverLetterTextToAnswer(answer, coverLetterText, [
    "Cover Letter",
    "Cover Letter:",
  ])
}

export const STATE_PROVINCE_ABBR_TO_FULL = {
  al: "Alabama",
  ak: "Alaska",
  az: "Arizona",
  ar: "Arkansas",
  ca: "California",
  co: "Colorado",
  ct: "Connecticut",
  de: "Delaware",
  fl: "Florida",
  ga: "Georgia",
  hi: "Hawaii",
  id: "Idaho",
  il: "Illinois",
  in: "Indiana",
  ia: "Iowa",
  ks: "Kansas",
  ky: "Kentucky",
  la: "Louisiana",
  me: "Maine",
  md: "Maryland",
  ma: "Massachusetts",
  mi: "Michigan",
  mn: "Minnesota",
  ms: "Mississippi",
  mo: "Missouri",
  mt: "Montana",
  ne: "Nebraska",
  nv: "Nevada",
  nh: "New Hampshire",
  nj: "New Jersey",
  nm: "New Mexico",
  ny: "New York",
  nc: "North Carolina",
  nd: "North Dakota",
  oh: "Ohio",
  ok: "Oklahoma",
  or: "Oregon",
  pa: "Pennsylvania",
  ri: "Rhode Island",
  sc: "South Carolina",
  sd: "South Dakota",
  tn: "Tennessee",
  tx: "Texas",
  ut: "Utah",
  vt: "Vermont",
  va: "Virginia",
  wa: "Washington",
  wv: "West Virginia",
  wi: "Wisconsin",
  wy: "Wyoming",
  dc: "District of Columbia",
  ab: "Alberta",
  bc: "British Columbia",
  mb: "Manitoba",
  nb: "New Brunswick",
  nl: "Newfoundland and Labrador",
  ns: "Nova Scotia",
  nt: "Northwest Territories",
  nu: "Nunavut",
  on: "Ontario",
  pe: "Prince Edward Island",
  qc: "Quebec",
  sk: "Saskatchewan",
  yt: "Yukon",
}

export const DEGREE_MAPPING = (() => {
  const entries = [
    [
      ["bachelor's degree", "bachelor", "bachelors", "bachelor of laws"],
      "Bachelors",
    ],
    [["master's degree", "master", "masters"], "Masters"],
    [["phd", "doctorate", "doctor of philosophy"], "PhD"],
    [["associate's degree", "associate", "associates"], "Associates"],
    [["some high school"], "Some High School"],
    [["some college"], "Some College"],
    [["some post graduate", "some postgraduate"], "Some Post Graduate"],
    [["high school"], "High School"],
    [["certification", "certificate"], "Certification"],
    [["vocational"], "Vocational"],
    [["professional", "md", "jd"], "Professional (MD, JD, etc.)"],
    [["postdoctorate", "post doctorate"], "Postdoctorate"],
  ]
  return Object.fromEntries(
    entries.flatMap(([aliases, value]) =>
      aliases.map((alias) => [alias, value]),
    ),
  )
})()

export function resolveDegreeValue(value) {
  const normalized = value.toLowerCase().trim()
  const exact = DEGREE_MAPPING[normalized]
  if (exact) return exact
  for (const [alias, mapped] of Object.entries(DEGREE_MAPPING)) {
    if (normalized.includes(alias) || alias.includes(normalized)) return mapped
  }
  return value
}

export function isDateSelectField(element, nameText, labelText) {
  if (
    element.name === "position_start_date" ||
    element.name === "position_end_date"
  ) {
    return true
  }
  const looksLikeDate =
    nameText.includes("start") ||
    nameText.includes("end") ||
    nameText.includes("year") ||
    nameText.includes("graduation")
  const looksLikeEducation =
    element.closest(".js-area-container.education") !== null ||
    labelText.includes("education") ||
    labelText.includes("degree")
  return !!(looksLikeDate && looksLikeEducation)
}

export function getStateProvinceCandidates(value) {
  const trimmed = value.trim()
  if (!trimmed) return []
  const lower = trimmed.toLowerCase()
  const candidates = new Set([trimmed])
  const fromAbbr = STATE_PROVINCE_ABBR_TO_FULL[lower]
  if (fromAbbr) {
    candidates.add(fromAbbr)
    candidates.add(lower)
    candidates.add(fromAbbr.toLowerCase())
  }
  for (const [abbr, full] of Object.entries(STATE_PROVINCE_ABBR_TO_FULL)) {
    if (full.toLowerCase() === lower) {
      candidates.add(full)
      candidates.add(abbr)
      break
    }
  }
  return Array.from(candidates)
}

const COMPENSATION_RANGE_RE =
  /[\d,.\$kK]+\s*[-~\u2013\u2014toTO]\s*[\d,.\$kK]+/i

export function cleanCompensationValue(value, label) {
  if (value == null) return ""
  let text = String(value).trim()
  if (!text) return ""

  const isRangeLabel =
    label != null && (label ?? "").trim().toLowerCase().includes("range")
  const looksLikeRange = COMPENSATION_RANGE_RE.test(text)
  if (isRangeLabel || looksLikeRange) return text

  const rangeCapture =
    /([\d,.\$kK]+)\s*[-~\u2013\u2014toTO]\s*[\d,.\$kK]+/i
  const rangeMatch = text.match(rangeCapture)
  if (rangeMatch) text = rangeMatch[1].trim()

  text = text
    .replace(/\$/g, "")
    .replace(/\u20ac/g, "")
    .replace(/\u00a3/g, "")
    .replace(/,/g, "")
    .replace(/\s/g, "")
    .replace(/[^\d.kK]/g, "")

  const kiloMatch = text.match(/^([\d.]+)[kK]$/i)
  if (kiloMatch) {
    const amount = parseFloat(kiloMatch[1])
    if (!isNaN(amount)) text = String(Math.round(1000 * amount))
  } else {
    const parsed = parseFloat(text)
    if (isNaN(parsed)) {
      const digits = text.replace(/[^\d]/g, "")
      if (!digits) return ""
      text = digits
    } else {
      text = String(Math.round(parsed))
    }
  }

  const digitsOnly = text.replace(/[^\d]/g, "")
  return digitsOnly || ""
}

export function isCompensationField(label) {
  const text = (label ?? "").trim().toLowerCase()
  return (
    text.includes("desired compensation") ||
    text.includes("salary are you seeking") ||
    text.includes("desired base salary") ||
    text.includes("desired salary range") ||
    (text.includes("compensation") &&
      (text.includes("desired") || text.includes("expected")))
  )
}
