// @ts-nocheck
/**
 * Preference section of the autofill info editor.
 */

import { Fragment } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Divider, Flex, Input, Typography } from "antd"
import { fieldLabel } from "../components/FormField.ts"
import { ADDITIONAL_APPLICATION_INFO_MAX_LENGTH } from "../forms/constants.ts"
import { PREFERENCE_FIELD_CONFIGS } from "./PreferenceForm/config.ts"

export function PreferenceForm({
  preference,
  dotChecker,
  updatePreferenceField,
}) {
  const { hasDot, clearDot } = dotChecker.forSection("preference")

  return jsxs(Flex, {
    vertical: true,
    className: "autofill-info-modal-panel autofill-info-modal-pref-panel",
    children: [
      ...PREFERENCE_FIELD_CONFIGS.map((fieldConfig, index) =>
        jsxs(
          Fragment,
          {
            children: [
              index > 0 &&
                jsx(Divider, {
                  className: "autofill-info-modal-equal-divider",
                }),
              jsxs(Flex, {
                align: "center",
                className: "autofill-info-modal-pref-row",
                children: [
                  fieldLabel(fieldConfig.label, {
                    required: false,
                    showDot: hasDot(fieldConfig.field),
                  }),
                  jsx(Input, {
                    value: preference[fieldConfig.field],
                    placeholder: fieldConfig.placeholder,
                    className: "autofill-info-modal-pref-input",
                    onFocus: () => clearDot(fieldConfig.field),
                    onChange: (event) =>
                      updatePreferenceField(
                        fieldConfig.field,
                        event.target.value,
                      ),
                  }),
                ],
              }),
            ],
          },
          fieldConfig.field,
        ),
      ),
      jsx(Divider, { className: "autofill-info-modal-equal-divider" }),
      jsxs(Flex, {
        vertical: true,
        gap: 8,
        className: "autofill-info-modal-additional-application-info",
        children: [
          fieldLabel("Anything else we should know?", {
            required: false,
            showDot: hasDot("additionalApplicationInfo"),
          }),
          jsx(Typography.Text, {
            className: "autofill-info-modal-additional-application-info-helper",
            children:
              "Add any details you want Jobright to consider when filling out applications.",
          }),
          jsx(Input.TextArea, {
            value: preference.additionalApplicationInfo,
            placeholder:
              "For example: work authorization, availability, salary expectations, relocation preferences, or anything you want us to mention in application answers.",
            maxLength: ADDITIONAL_APPLICATION_INFO_MAX_LENGTH,
            showCount: true,
            autoSize: { minRows: 5, maxRows: 8 },
            className:
              "autofill-info-modal-textarea autofill-info-modal-additional-application-info-textarea",
            onFocus: () => clearDot("additionalApplicationInfo"),
            onChange: (event) =>
              updatePreferenceField(
                "additionalApplicationInfo",
                event.target.value,
              ),
          }),
        ],
      }),
    ],
  })
}
