// @ts-nocheck
/**
 * Autofill info date display helpers.
 */

import dayjs from "dayjs"

export const AUTOFILL_INFO_DATE_FORMAT = "MMM YYYY"

export function formatAutofillInfoDate(value) {
  if (!value) return ""
  const parsed = dayjs(value)
  return parsed.isValid() ? parsed.format(AUTOFILL_INFO_DATE_FORMAT) : value
}
