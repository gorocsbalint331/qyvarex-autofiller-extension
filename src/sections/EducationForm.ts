// @ts-nocheck
/**
 * Education section of the autofill info editor.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Flex, Typography } from "antd"
import { renderDateFieldRow } from "../components/DateFields.ts"
import { DeleteConfirm } from "../components/DeleteConfirm.ts"
import { TextFieldRows } from "../components/TextFieldRows.ts"
import {
  EDUCATION_DATE_FIELD_CONFIGS,
  EDUCATION_TEXT_FIELD_ROWS,
} from "./EducationForm/config.ts"

export function EducationForm({
  education,
  confirmingDeleteId,
  setConfirmingDeleteId,
  dotChecker,
  hasError,
  clearError,
  updateEducationField,
  removeEducation,
  addEducation,
}) {
  return jsxs(Flex, {
    vertical: true,
    className: "autofill-info-modal-panel",
    children: [
      education.map((item, index) => {
        const prefix = `education.${index}`
        const fieldDot = (field) => dotChecker.hasFieldDot(prefix, field)

        return jsxs(
          "div",
          {
            className: "autofill-info-modal-card",
            onFocusCapture: () => dotChecker.clearPrefixDots(prefix),
            children: [
              jsxs(Flex, {
                align: "center",
                gap: 12,
                className: "autofill-info-modal-card-header",
                children: [
                  jsxs(Typography.Text, {
                    className: "autofill-info-modal-card-title",
                    children: ["Education ", index + 1],
                  }),
                  education.length > 1 &&
                    jsx(DeleteConfirm, {
                      isConfirming: confirmingDeleteId === item.id,
                      confirmText: "Are you sure to delete this education?",
                      onRequestConfirm: () => setConfirmingDeleteId(item.id),
                      onConfirm: () => {
                        removeEducation(item.id)
                        setConfirmingDeleteId(null)
                      },
                      onCancel: () => setConfirmingDeleteId(null),
                    }),
                ],
              }),
              jsxs(Flex, {
                vertical: true,
                gap: 16,
                className: "autofill-info-modal-field-group",
                children: [
                  jsx(TextFieldRows, {
                    rows: EDUCATION_TEXT_FIELD_ROWS,
                    values: item,
                    errorPrefix: `education.${index}`,
                    fieldDot,
                    updateField: (field, value) =>
                      updateEducationField(item.id, field, value),
                    hasError,
                    clearError,
                  }),
                  renderDateFieldRow({
                    fields: EDUCATION_DATE_FIELD_CONFIGS,
                    values: item,
                    fieldDot,
                    errorPrefix: `education.${index}`,
                    hasError,
                    clearError,
                    updateField: (field, value) =>
                      updateEducationField(item.id, field, value),
                    currentChecked: item.isCurrent,
                    onCurrentChange: (checked) =>
                      updateEducationField(item.id, "isCurrent", checked),
                    allowEndDateWithCurrent: true,
                    clearAllDateErrorsOnChange: true,
                    constrainDateRange: true,
                  }),
                ],
              }),
            ],
          },
          item.id,
        )
      }),
      jsx(Button, {
        className: "autofill-info-modal-add",
        icon: jsx(PlusOutlined, {}),
        onClick: addEducation,
        children: "Add Education",
      }),
    ],
  })
}
