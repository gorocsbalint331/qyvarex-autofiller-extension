// @ts-nocheck
/**
 * Careers Page answer helpers — constants and cover-letter formatting.
 */

import * as coverLetter from "../../methods/cover-letter.js"

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const APPLY_SUBMIT_BUTTON_XPATH =
  './/button[@type="submit" and (@id="submit-id-submit" or @name="submit" or contains(normalize-space(.), "Apply") or contains(@class, "btn-apply"))]'

export const END_DATE_LABEL_ALIASES = ["End Date", "ended_at", "End"]

export const EDUCATION_START_DATE_SELECTORS = [
  'input[name="started_at"]',
  "input.education_started_at",
  'input[placeholder*="Start Date"]',
]

export const EDUCATION_END_DATE_SELECTORS = [
  'input[name="ended_at"]',
  "input.education_ended_at",
  'input[placeholder*="End Date"]',
]

export const EDUCATION_PREFERRED_END_DATE_QUERY = [
  "input.education_ended_at",
  ...EDUCATION_END_DATE_SELECTORS,
].join(", ")

export const EXPERIENCE_START_DATE_SELECTORS = [
  'input[name="started_at"]',
  "input.experience_started_at",
  'input[placeholder*="Start Date"]',
]

export const EXPERIENCE_END_DATE_SELECTORS = [
  'input[name="ended_at"]',
  "input.experience_ended_at",
  'input[placeholder*="End Date"]',
]

export const EXPERIENCE_PREFERRED_END_DATE_QUERY = [
  "input.experience_ended_at",
  ...EXPERIENCE_END_DATE_SELECTORS,
].join(", ")

export function formatAnswer(answer, coverLetterText) {
  return coverLetter.applyCoverLetterTextToAnswer(answer, coverLetterText, [
    "Cover Letter",
    "Add cover letter",
  ])
}
