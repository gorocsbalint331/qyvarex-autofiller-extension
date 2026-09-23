// @ts-nocheck
/**
 * MyWorkday — form-loss / empty-form error helpers.
 */

const WORKDAY_NO_FORM_FIELDS_ERROR_MESSAGE = "No form fields found"

function isWorkdayNoFormFieldsError(error) {
  return error instanceof Error && error.message === WORKDAY_NO_FORM_FIELDS_ERROR_MESSAGE
}

export {
  WORKDAY_NO_FORM_FIELDS_ERROR_MESSAGE,
  isWorkdayNoFormFieldsError,
}
