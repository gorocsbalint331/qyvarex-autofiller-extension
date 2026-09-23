// @ts-nocheck
/**
 * Autofill info editor validation helpers.
 */

import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { AUTOFILL_INFO_DATE_FORMAT } from "./Editor/utils/date-format.ts"

dayjs.extend(customParseFormat)

const VALIDATED_SECTIONS = [
  "personal",
  "education",
  "workExperience",
  "equalEmployment",
]

function parseMonthIndex(value) {
  if (!value?.trim()) return null
  const parsed = dayjs(value, AUTOFILL_INFO_DATE_FORMAT, true)
  return parsed.isValid() ? 12 * parsed.year() + parsed.month() : null
}

function getTodayMonthIndex(today) {
  const parsed = today ? dayjs(today) : dayjs()
  const date = parsed.isValid() ? parsed : dayjs()
  return 12 * date.year() + date.month()
}

export function collectValidationErrors(data, options = {}) {
  const errors = new Set()
  const { personal, education, workExperience, equalEmployment } = data
  const todayMonthIndex = getTodayMonthIndex(options.today)

  const requiredPersonalFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
  ]
  for (const field of requiredPersonalFields) {
    if (!personal[field]?.trim()) errors.add(`personal.${field}`)
  }

  for (let index = 0; index < education.length; index++) {
    const item = education[index]
    if (!item.schoolName?.trim()) errors.add(`education.${index}.schoolName`)
    if (!item.accreditation?.trim()) {
      errors.add(`education.${index}.accreditation`)
    }

    const startMonth = parseMonthIndex(item.startDate)
    const endMonth = parseMonthIndex(item.endDate)

    if (item.isCurrent && startMonth !== null && startMonth > todayMonthIndex) {
      errors.add(`education.${index}.startDate`)
    }
    if (item.isCurrent && endMonth !== null && endMonth < todayMonthIndex) {
      errors.add(`education.${index}.endDate`)
    }
    if (
      startMonth !== null &&
      endMonth !== null &&
      endMonth < startMonth
    ) {
      errors.add(`education.${index}.endDate`)
    }
  }

  for (let index = 0; index < workExperience.length; index++) {
    if (!workExperience[index].companyName?.trim()) {
      errors.add(`workExperience.${index}.companyName`)
    }
    if (!workExperience[index].jobTitle?.trim()) {
      errors.add(`workExperience.${index}.jobTitle`)
    }
  }

  const requiredEqualEmploymentFields = [
    "workAuthorization",
    "sponsorshipStatus",
    "disability",
    "veteran",
    "gender",
    "lgbt",
    "hispanic",
    "ethnicity",
  ]
  for (const field of requiredEqualEmploymentFields) {
    if (!equalEmployment[field]?.trim()) {
      errors.add(`equalEmployment.${field}`)
    }
  }
  if (!equalEmployment.sexual?.length) {
    errors.add("equalEmployment.sexual")
  }

  return errors
}

export function getFirstErrorSection(errors) {
  for (const section of VALIDATED_SECTIONS) {
    if ([...errors].some((key) => key.startsWith(section))) return section
  }
  return null
}

export function getFirstErrorField(errors) {
  for (const section of VALIDATED_SECTIONS) {
    for (const key of errors) {
      if (key.startsWith(`${section}.`)) return key
    }
  }
  return null
}
