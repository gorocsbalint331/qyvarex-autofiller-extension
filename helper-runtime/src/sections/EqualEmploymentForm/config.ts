// @ts-nocheck
/**
 * Equal employment option-group and select-section configs.
 */

import {
  ETHNICITY_OPTIONS,
  GENDER_OPTIONS,
  SEXUAL_ORIENTATION_OPTIONS,
  YES_NO_OPTIONS,
} from "../../forms/constants.ts"

export const EQUAL_EMPLOYMENT_OPTION_SECTIONS = [
  {
    label: "Are you authorized to work in the US?",
    field: "workAuthorization",
    options: ["Yes", "No"],
  },
  {
    label:
      "Will you now or in the future require sponsorship for employment visa status?",
    field: "sponsorshipStatus",
    options: ["Yes", "No"],
  },
  {
    label: "Do you have a disability?",
    field: "disability",
    options: YES_NO_OPTIONS,
  },
  {
    label: "Are you a veteran?",
    field: "veteran",
    options: YES_NO_OPTIONS,
  },
  {
    label: "What is your gender?",
    field: "gender",
    options: GENDER_OPTIONS,
  },
  {
    label: "Do you identify as LGBTQ+?",
    field: "lgbt",
    options: YES_NO_OPTIONS,
  },
  {
    label: "Are you Hispanic/Latino?",
    field: "hispanic",
    options: YES_NO_OPTIONS,
  },
]

export const EQUAL_EMPLOYMENT_SELECT_SECTIONS = [
  {
    label: "How would you identify your race?",
    field: "ethnicity",
    options: ETHNICITY_OPTIONS,
    showSearch: true,
  },
  {
    label:
      "How would you describe your sexual orientation? (mark all that apply)",
    field: "sexual",
    options: SEXUAL_ORIENTATION_OPTIONS,
    mode: "multiple",
    maxTagCount: 2,
  },
]
