// @ts-nocheck
/**
 * Equal employment section of the autofill info editor.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Divider, Flex, Select } from "antd"
import * as dropDownSvg from "../assets/inline/images/drop_down.svg.js"
import { fieldLabel } from "../components/FormField.ts"
import { OptionGroup } from "../components/OptionGroup.ts"
import {
  AUTOFILL_INFO_POPUP_CLASS_NAME,
  PRONOUNS_OPTIONS,
} from "../forms/constants.ts"
import {
  EQUAL_EMPLOYMENT_OPTION_SECTIONS,
  EQUAL_EMPLOYMENT_SELECT_SECTIONS,
} from "./EqualEmploymentForm/config.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export function EqualEmploymentForm({
  equalEmployment,
  pronouns,
  dotChecker,
  hasError,
  clearError,
  updateEqualEmploymentField,
  updatePronouns,
}) {
  const { hasDot, clearDot } = dotChecker.forSection("equalEmployment")
  const nodes = []

  const renderSelectSection = (section) => {
    const fieldKey = `equalEmployment.${section.field}`
    return jsxs(
      Flex,
      {
        vertical: true,
        gap: 12,
        align: "center",
        className: "autofill-info-modal-equal-section",
        "data-autofill-info-field": fieldKey,
        children: [
          fieldLabel(section.label, { showDot: hasDot(section.field) }),
          jsx(Select, {
            allowClear: false,
            defaultActiveFirstOption: false,
            mode: section.mode,
            maxTagCount: section.maxTagCount,
            value:
              section.mode === "multiple"
                ? equalEmployment[section.field]
                : equalEmployment[section.field] || undefined,
            placeholder: "Select",
            showSearch: section.showSearch,
            suffixIcon: jsx("img", {
              src: assetUrl(dropDownSvg),
              alt: "",
              width: 16,
              height: 16,
            }),
            className:
              "autofill-info-modal-control autofill-info-modal-equal-select",
            popupClassName: AUTOFILL_INFO_POPUP_CLASS_NAME,
            options: section.options.map((option) => ({
              label: option,
              value: option,
            })),
            onFocus: () => clearDot(section.field),
            onChange: (value) => {
              updateEqualEmploymentField(section.field, value)
              clearError(fieldKey)
            },
          }),
          hasError(fieldKey) &&
            jsx("span", {
              className: "autofill-info-modal-error",
              children: "Please select an option",
            }),
        ],
      },
      section.field,
    )
  }

  for (const section of EQUAL_EMPLOYMENT_OPTION_SECTIONS) {
    if (nodes.length > 0) {
      nodes.push(
        jsx(
          Divider,
          { className: "autofill-info-modal-equal-divider" },
          `div-${section.field}`,
        ),
      )
    }
    nodes.push(
      jsxs(
        Flex,
        {
          vertical: true,
          gap: 12,
          align: "center",
          className: "autofill-info-modal-equal-section",
          "data-autofill-info-field": `equalEmployment.${section.field}`,
          children: [
            fieldLabel(section.label, { showDot: hasDot(section.field) }),
            jsx(OptionGroup, {
              options: section.options,
              value: equalEmployment[section.field],
              onChange: (value) => {
                clearDot(section.field)
                updateEqualEmploymentField(section.field, value)
                clearError(`equalEmployment.${section.field}`)
              },
            }),
            hasError(`equalEmployment.${section.field}`) &&
              jsx("span", {
                className: "autofill-info-modal-error",
                children: "Please select an option",
              }),
          ],
        },
        section.field,
      ),
    )
  }

  for (const section of EQUAL_EMPLOYMENT_SELECT_SECTIONS) {
    nodes.push(
      jsx(
        Divider,
        { className: "autofill-info-modal-equal-divider" },
        `div-${section.field}`,
      ),
    )
    nodes.push(renderSelectSection(section))
  }

  return jsxs(Flex, {
    vertical: true,
    className: "autofill-info-modal-panel autofill-info-modal-equal-panel",
    children: [
      nodes,
      jsx(Divider, { className: "autofill-info-modal-equal-divider" }),
      jsxs(Flex, {
        vertical: true,
        gap: 12,
        align: "center",
        className: "autofill-info-modal-equal-section",
        children: [
          fieldLabel("What Are Your Pronouns?", {
            required: false,
            showDot: hasDot("pronouns"),
          }),
          jsx(Select, {
            allowClear: false,
            defaultActiveFirstOption: false,
            value: pronouns || undefined,
            suffixIcon: jsx("img", {
              src: assetUrl(dropDownSvg),
              alt: "",
              width: 16,
              height: 16,
            }),
            className:
              "autofill-info-modal-control autofill-info-modal-equal-select",
            popupClassName: AUTOFILL_INFO_POPUP_CLASS_NAME,
            options: PRONOUNS_OPTIONS.map((option) => ({
              label: option,
              value: option,
            })),
            onFocus: () => clearDot("pronouns"),
            onChange: (value) => updatePronouns(value ?? ""),
          }),
        ],
      }),
    ],
  })
}
