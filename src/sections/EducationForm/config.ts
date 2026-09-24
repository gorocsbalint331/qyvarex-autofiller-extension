// @ts-nocheck
/**
 * Education form field-row and date-field configs.
 */

export const EDUCATION_TEXT_FIELD_ROWS = [
  {
    fields: [
      {
        field: "schoolName",
        label: "School Name",
        placeholder: "School Name",
        error: "Please enter school name",
      },
    ],
  },
  {
    layout: "row",
    fields: [
      {
        field: "accreditation",
        label: "Accreditation",
        placeholder: "Accreditation",
        error: "Please enter accreditation",
      },
      {
        field: "gap",
        label: "GPA",
        placeholder: "GPA",
        required: false,
      },
    ],
  },
]

export const EDUCATION_DATE_FIELD_CONFIGS = [
  {
    field: "startDate",
    label: "Start Date",
    picker: "start",
    error: "Start date cannot be after the current month",
  },
  {
    field: "endDate",
    label: "End Date",
    picker: "end",
    error: "End date cannot be before start date or current month",
  },
]
