// @ts-nocheck
/**
 * Work experience section of the autofill info editor.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Flex, Typography } from "antd"
import { BulletPoints } from "../components/BulletPoints.ts"
import { renderDateFieldRow } from "../components/DateFields.ts"
import { DeleteConfirm } from "../components/DeleteConfirm.ts"
import { fieldLabel } from "../components/FormField.ts"
import { TextFieldRows } from "../components/TextFieldRows.ts"
import {
  WORK_DATE_FIELD_CONFIGS,
  WORK_TEXT_FIELD_ROWS_AFTER_DATES,
  WORK_TEXT_FIELD_ROWS_BEFORE_DATES,
} from "./WorkExperienceForm/config.ts"

export function WorkExperienceForm({
  workExperience,
  confirmingDeleteId,
  setConfirmingDeleteId,
  dotChecker,
  hasError,
  clearError,
  updateWorkField,
  updateWorkDescriptions,
  removeWork,
  addWork,
}) {
  return jsxs(Flex, {
    vertical: true,
    className: "autofill-info-modal-panel",
    children: [
      workExperience.map((item, index) => {
        const prefix = `workExperience.${index}`
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
                    children: ["Work Experience ", index + 1],
                  }),
                  workExperience.length > 1 &&
                    jsx(DeleteConfirm, {
                      isConfirming: confirmingDeleteId === item.id,
                      confirmText: "Are you sure to delete this experience?",
                      onRequestConfirm: () => setConfirmingDeleteId(item.id),
                      onConfirm: () => {
                        removeWork(item.id)
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
                    rows: WORK_TEXT_FIELD_ROWS_BEFORE_DATES,
                    values: item,
                    errorPrefix: `workExperience.${index}`,
                    fieldDot,
                    updateField: (field, value) =>
                      updateWorkField(item.id, field, value),
                    hasError,
                    clearError,
                  }),
                  renderDateFieldRow({
                    fields: WORK_DATE_FIELD_CONFIGS,
                    values: item,
                    fieldDot,
                    updateField: (field, value) =>
                      updateWorkField(item.id, field, value),
                  }),
                  jsx(TextFieldRows, {
                    rows: WORK_TEXT_FIELD_ROWS_AFTER_DATES,
                    values: item,
                    errorPrefix: `workExperience.${index}`,
                    fieldDot,
                    updateField: (field, value) =>
                      updateWorkField(item.id, field, value),
                    hasError,
                    clearError,
                  }),
                  jsxs(Flex, {
                    vertical: true,
                    gap: 8,
                    children: [
                      fieldLabel("Job Description", {
                        required: false,
                        showDot: fieldDot("jobDescription"),
                      }),
                      jsx(BulletPoints, {
                        descriptions: item.descriptions,
                        onChange: (descriptions) =>
                          updateWorkDescriptions(item.id, descriptions),
                      }),
                    ],
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
        onClick: addWork,
        children: "Add Work Experience",
      }),
    ],
  })
}
