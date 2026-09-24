// @ts-nocheck
/**
 * Work experience form field-row and date-field configs.
 */

export const WORK_TEXT_FIELD_ROWS_BEFORE_DATES = [
  {
    fields: [
      {
        field: "companyName",
        label: "Company",
        placeholder: "Company Name",
        error: "Please enter company name",
      },
    ],
  },
  {
    fields: [
      {
        field: "jobTitle",
        label: "Job Title",
        placeholder: "Job Title",
        error: "Please enter job title",
      },
    ],
  },
  {
    layout: "row",
    fields: [
      {
        field: "city",
        label: "Location",
        placeholder: "Location",
        required: false,
      },
    ],
  },
]

export const WORK_TEXT_FIELD_ROWS_AFTER_DATES = [
  {
    fields: [
      {
        field: "summary",
        label: "Experience Summary",
        placeholder: "Experience Summary",
        required: false,
      },
    ],
  },
]

export const WORK_DATE_FIELD_CONFIGS = [
  {
    field: "startDate",
    label: "Start Date",
    picker: "start",
  },
  {
    field: "endDate",
    label: "End Date",
    picker: "end",
    checkboxText: "I currently work here",
  },
]
