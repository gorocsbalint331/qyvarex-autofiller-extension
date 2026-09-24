// @ts-nocheck
/**
 * Text input rows for autofill info editor sections.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Input } from "antd"
import { fieldLabel } from "./FormField.ts"

export function TextFieldRows({
  rows,
  values,
  errorPrefix,
  fieldDot,
  updateField,
  hasError,
  clearError,
}) {
  function renderField(fieldConfig, flex) {
    const fieldKey = `${errorPrefix}.${fieldConfig.field}`
    return jsxs(
      Flex,
      {
        vertical: true,
        gap: 8,
        flex,
        "data-autofill-info-field": fieldKey,
        children: [
          fieldLabel(fieldConfig.label, {
            required: fieldConfig.required,
            showDot: fieldDot(fieldConfig.field),
          }),
          jsx(Input, {
            value: values[fieldConfig.field],
            placeholder: fieldConfig.placeholder,
            className: "autofill-info-modal-control",
            onChange: (event) => {
              updateField(fieldConfig.field, event.target.value)
              if (fieldConfig.error) clearError(fieldKey)
            },
          }),
          fieldConfig.error &&
            hasError(fieldKey) &&
            jsx("span", {
              className: "autofill-info-modal-error",
              children: fieldConfig.error,
            }),
        ],
      },
      fieldConfig.field,
    )
  }

  return rows.map((row) => {
    const key = row.fields.map(({ field }) => field).join("-")
    if (row.layout === "row") {
      return jsx(
        Flex,
        {
          gap: 8,
          children: row.fields.map((fieldConfig) => renderField(fieldConfig, 1)),
        },
        key,
      )
    }
    return renderField(row.fields[0])
  })
}
