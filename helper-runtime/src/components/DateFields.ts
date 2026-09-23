// @ts-nocheck
/**
 * Education / employment date pickers and shared validation helpers.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Checkbox, DatePicker, Flex } from "antd"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { AUTOFILL_INFO_DATE_FORMAT } from "./Editor/utils/date-format.ts"
import { fieldLabel } from "./FormField.ts"

dayjs.extend(customParseFormat)

export function EducationStartDatePicker({ value, onChange, disabledDate }) {
  const parsed = value
    ? dayjs(value, AUTOFILL_INFO_DATE_FORMAT, true)
    : null

  return jsx(DatePicker, {
    picker: "month",
    value: parsed?.isValid() ? parsed : null,
    format: AUTOFILL_INFO_DATE_FORMAT,
    placeholder: "Start Date",
    className: "autofill-info-modal-control",
    style: { width: "100%" },
    disabledDate,
    onChange: (next) =>
      onChange(next ? next.format(AUTOFILL_INFO_DATE_FORMAT) : ""),
  })
}

export function getEducationEndDatePickerModel({
  value,
  currentChecked,
  allowEndDateWithCurrent,
}) {
  const isPresent = value === "Present"
  const checked = currentChecked ?? isPresent
  return {
    checked,
    dateValue: isPresent ? "" : value,
    disabled: checked && !allowEndDateWithCurrent,
  }
}

function parseMonthValue(value) {
  if (!value || value === "Present") return null
  const parsed = dayjs(value, AUTOFILL_INFO_DATE_FORMAT, true)
  return parsed.isValid() ? parsed.startOf("month") : null
}

function startOfMonthToday(today) {
  const parsed = today ? dayjs(today) : dayjs()
  return (parsed.isValid() ? parsed : dayjs()).startOf("month")
}

function earlierMonth(a, b) {
  return a.isAfter(b, "month") ? b : a
}

function laterMonth(a, b) {
  return a.isAfter(b, "month") ? a : b
}

export function isEducationDatePickerDateDisabled({
  picker,
  candidate,
  startDate,
  endDate,
  isCurrent,
  today,
}) {
  if (!candidate?.isValid()) return false

  const month = candidate.startOf("month")
  const startMonth = parseMonthValue(startDate)
  const endMonth = parseMonthValue(endDate)
  const currentMonth = startOfMonthToday(today)

  if (picker === "start") {
    let maxMonth = endMonth
    if (isCurrent) {
      maxMonth = endMonth ? earlierMonth(currentMonth, endMonth) : currentMonth
    }
    return !!maxMonth && month.isAfter(maxMonth, "month")
  }

  let minMonth = startMonth
  if (isCurrent) {
    minMonth = startMonth ? laterMonth(startMonth, currentMonth) : currentMonth
  }
  return !!minMonth && month.isBefore(minMonth, "month")
}

function resolveEffectiveEndMonth({ endMonth, isCurrent, currentMonth }) {
  if (!isCurrent) return endMonth
  if (endMonth && endMonth.isBefore(currentMonth, "month")) return endMonth
  return currentMonth
}

export function getEducationDateFieldLiveError({
  field,
  startDate,
  endDate,
  isCurrent,
  today,
}) {
  const currentMonth = startOfMonthToday(today)
  const startMonth = parseMonthValue(startDate)
  const endMonth = parseMonthValue(endDate)

  if (
    field === "endDate" &&
    isCurrent &&
    endMonth?.isBefore(currentMonth, "month")
  ) {
    return "End date cannot be earlier than today"
  }

  const effectiveEnd = resolveEffectiveEndMonth({
    endMonth,
    isCurrent,
    currentMonth,
  })

  if (startMonth && effectiveEnd?.isBefore(startMonth, "month")) {
    return "End date cannot be earlier than start date"
  }
}

export function handleEducationEndDateCurrentToggle({
  checked,
  onChange,
  onCurrentChange,
}) {
  if (onCurrentChange) {
    onCurrentChange(checked)
    return
  }
  onChange(checked ? "Present" : "")
}

export function getDateFieldValidationError({
  errorPrefix,
  field,
  error,
  hasError,
}) {
  if (errorPrefix && error && hasError) {
    return hasError(`${errorPrefix}.${field}`) ? error : undefined
  }
}

export function getDateFieldErrorKeysToClear({
  errorPrefix,
  field,
  fields,
  clearAllDateErrorsOnChange,
}) {
  if (!errorPrefix) return []
  const keys = clearAllDateErrorsOnChange
    ? fields.map((item) => item.field)
    : [field]
  return keys.map((key) => `${errorPrefix}.${key}`)
}

export function EducationEndDatePicker({
  value,
  onChange,
  checkboxText = "I currently study here",
  currentChecked,
  onCurrentChange,
  allowEndDateWithCurrent,
  disabledDate,
}) {
  const model = getEducationEndDatePickerModel({
    value,
    currentChecked,
    allowEndDateWithCurrent,
  })
  const parsed = model.dateValue
    ? dayjs(model.dateValue, AUTOFILL_INFO_DATE_FORMAT, true)
    : null

  return jsxs(Flex, {
    vertical: true,
    gap: 4,
    children: [
      jsx(DatePicker, {
        picker: "month",
        value: parsed?.isValid() ? parsed : null,
        format: AUTOFILL_INFO_DATE_FORMAT,
        placeholder: "End Date",
        disabled: model.disabled,
        className: "autofill-info-modal-control",
        style: { width: "100%" },
        disabledDate,
        onChange: (next) =>
          onChange(next ? next.format(AUTOFILL_INFO_DATE_FORMAT) : ""),
      }),
      jsx(Checkbox, {
        checked: model.checked,
        onChange: (event) =>
          handleEducationEndDateCurrentToggle({
            checked: event.target.checked,
            onChange,
            onCurrentChange,
          }),
        children: checkboxText,
      }),
    ],
  })
}

export function renderDateFieldRow({
  fields,
  values,
  fieldDot,
  updateField,
  errorPrefix,
  hasError,
  clearError,
  currentChecked,
  onCurrentChange,
  allowEndDateWithCurrent,
  clearAllDateErrorsOnChange,
  constrainDateRange,
}) {
  function clearErrorsForField(field) {
    getDateFieldErrorKeysToClear({
      errorPrefix,
      field,
      fields,
      clearAllDateErrorsOnChange,
    }).forEach((key) => clearError?.(key))
  }

  return jsx(Flex, {
    gap: 8,
    children: fields.map((fieldConfig) => {
      const fieldKey = errorPrefix
        ? `${errorPrefix}.${fieldConfig.field}`
        : undefined
      const storedError = getDateFieldValidationError({
        errorPrefix,
        field: fieldConfig.field,
        error: fieldConfig.error,
        hasError,
      })
      const liveError = constrainDateRange
        ? getEducationDateFieldLiveError({
            field: fieldConfig.field,
            startDate: values.startDate,
            endDate: values.endDate,
            isCurrent: currentChecked,
          })
        : undefined
      const errorMessage = liveError ?? storedError

      return jsxs(
        Flex,
        {
          vertical: true,
          gap: 8,
          flex: 1,
          "data-autofill-info-field": fieldKey,
          children: [
            fieldLabel(fieldConfig.label, {
              required: false,
              showDot: fieldDot(fieldConfig.field),
            }),
            fieldConfig.picker === "start"
              ? jsx(EducationStartDatePicker, {
                  value: values[fieldConfig.field],
                  disabledDate: (candidate) =>
                    !!constrainDateRange &&
                    isEducationDatePickerDateDisabled({
                      picker: "start",
                      candidate,
                      startDate: values.startDate,
                      endDate: values.endDate,
                      isCurrent: currentChecked,
                    }),
                  onChange: (next) => {
                    updateField(fieldConfig.field, next)
                    clearErrorsForField(fieldConfig.field)
                  },
                })
              : jsx(EducationEndDatePicker, {
                  value: values[fieldConfig.field],
                  checkboxText: fieldConfig.checkboxText,
                  currentChecked,
                  onCurrentChange: onCurrentChange
                    ? (checked) => {
                        onCurrentChange(checked)
                        fields.forEach(({ field }) => clearErrorsForField(field))
                      }
                    : undefined,
                  allowEndDateWithCurrent,
                  disabledDate: (candidate) =>
                    !!constrainDateRange &&
                    isEducationDatePickerDateDisabled({
                      picker: "end",
                      candidate,
                      startDate: values.startDate,
                      endDate: values.endDate,
                      isCurrent: currentChecked,
                    }),
                  onChange: (next) => {
                    updateField(fieldConfig.field, next)
                    clearErrorsForField(fieldConfig.field)
                  },
                }),
            errorMessage &&
              jsx("span", {
                className: "autofill-info-modal-error",
                children: errorMessage,
              }),
          ],
        },
        fieldConfig.field,
      )
    }),
  })
}
