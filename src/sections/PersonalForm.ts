// @ts-nocheck
/**
 * Personal information section of the autofill info editor.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { AutoComplete, Input, Select } from "antd"
import * as dropDownSvg from "../assets/inline/images/drop_down.svg.js"
import { COUNTRY_OPTIONS } from "../constants/country.ts"
import { FormField } from "../components/FormField.ts"
import {
  AUTOFILL_INFO_POPUP_CLASS_NAME,
  PHONE_TYPE_OPTIONS,
} from "../forms/constants.ts"
import { AddressLineAutoComplete } from "./PersonalForm/AddressLineAutoComplete.ts"
import {
  PERSONAL_LAYOUT_CLASS_NAMES,
  PERSONAL_LINK_FIELD_CONFIGS,
} from "./PersonalForm/config.ts"
import { PhoneNumberField } from "./PersonalForm/PhoneNumberField.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export function PersonalForm({
  personal,
  regionOptions,
  cityOptions,
  popupContainer,
  dotChecker,
  hasError,
  clearError,
  updatePersonalField,
  handleCountryChange,
  handleCountryBlur,
  handleRegionChange,
  handleRegionBlur,
}) {
  const { hasDot, clearDot } = dotChecker.forSection("personal")
  const { colName, col2, col4, colPhone } = PERSONAL_LAYOUT_CLASS_NAMES

  const divider = (key) =>
    jsx("div", { className: "autofill-info-modal-personal-divider" }, key)

  const applyPersonalPatch = (patch) => {
    Object.entries(patch).forEach(([field, value]) => {
      updatePersonalField(field, value)
      clearError(`personal.${field}`)
    })
  }

  const renderTextField = (field, label, options) =>
    jsx(
      FormField,
      {
        label,
        required: options?.required ?? true,
        showDot: hasDot(field),
        error: hasError(`personal.${field}`) ? options?.error : undefined,
        fieldKey: `personal.${field}`,
        className: options?.className ?? col2,
        children: jsx(Input, {
          value: personal[field],
          placeholder: options?.placeholder ?? label,
          className: "autofill-info-modal-control",
          onFocus: () => clearDot(field),
          onBlur: options?.onBlur,
          onChange: (event) => {
            updatePersonalField(field, event.target.value)
            clearError(`personal.${field}`)
          },
        }),
      },
      field,
    )

  return jsxs("div", {
    className: "autofill-info-modal-personal-grid",
    children: [
      renderTextField("firstName", "First Name", {
        className: colName,
        placeholder: "Enter your first name",
        error: "Please enter your first name",
      }),
      renderTextField("middleName", "Middle Name", {
        required: false,
        className: colName,
        placeholder: "Enter your middle name",
      }),
      renderTextField("lastName", "Last Name", {
        className: colName,
        placeholder: "Enter your last name",
        error: "Please enter your last name",
      }),
      renderTextField("preferredFirstName", "Preferred First Name", {
        required: false,
        className: colName,
        placeholder: "Enter your preferred first name",
      }),
      renderTextField("preferredMiddleName", "Preferred Middle Name", {
        required: false,
        className: colName,
        placeholder: "Enter your preferred middle name",
      }),
      renderTextField("preferredLastName", "Preferred Last Name", {
        required: false,
        className: colName,
        placeholder: "Enter your preferred last name",
      }),
      divider("preferred-name-divider"),
      renderTextField("email", "Email Address", {
        className: col4,
        placeholder: "Enter your email address",
        error: "Please enter your email address",
      }),
      jsx(FormField, {
        label: "Phone Type",
        required: false,
        showDot: hasDot("phoneType"),
        className: colName,
        children: jsx(Select, {
          allowClear: false,
          defaultActiveFirstOption: false,
          value: personal.phoneType || undefined,
          placeholder: "Enter your phone type",
          suffixIcon: jsx("img", {
            src: assetUrl(dropDownSvg),
            alt: "",
            width: 16,
            height: 16,
          }),
          className: "autofill-info-modal-control",
          popupClassName: AUTOFILL_INFO_POPUP_CLASS_NAME,
          options: PHONE_TYPE_OPTIONS.map((option) => ({
            label: option,
            value: option,
          })),
          onFocus: () => clearDot("phoneType"),
          onChange: (value) => updatePersonalField("phoneType", value ?? ""),
        }),
      }),
      jsx(FormField, {
        label: "Phone",
        showDot: hasDot("phoneCountryCode") || hasDot("phone"),
        error: hasError("personal.phone")
          ? "Please enter your phone number"
          : undefined,
        fieldKey: "personal.phone",
        className: colPhone,
        children: jsx(PhoneNumberField, {
          country: personal.country,
          phoneCountryCode: personal.phoneCountryCode,
          phone: personal.phone,
          popupContainer,
          onFocus: () => {
            clearDot("phoneCountryCode")
            clearDot("phone")
          },
          onChange: (next) => {
            applyPersonalPatch(next)
            clearError("personal.phone")
          },
        }),
      }),
      divider("phone-divider"),
      jsx(FormField, {
        label: "Address Line",
        required: false,
        showDot: hasDot("addressLine"),
        className: col4,
        children: jsx(AddressLineAutoComplete, {
          value: personal.addressLine,
          personal,
          placeholder: "Enter your current address",
          className: "autofill-info-modal-control",
          popupClassName: AUTOFILL_INFO_POPUP_CLASS_NAME,
          onFocus: () => clearDot("addressLine"),
          onChange: (next) => {
            updatePersonalField("addressLine", next)
            clearError("personal.addressLine")
          },
          onResolvedAddress: applyPersonalPatch,
        }),
      }),
      jsx(FormField, {
        label: "Country",
        required: false,
        showDot: hasDot("country"),
        className: colName,
        children: jsx(AutoComplete, {
          allowClear: false,
          defaultActiveFirstOption: false,
          value: personal.country,
          placeholder: "Enter your current country",
          suffixIcon: jsx("img", {
            src: assetUrl(dropDownSvg),
            alt: "",
            width: 16,
            height: 16,
          }),
          className: "autofill-info-modal-control",
          popupClassName: AUTOFILL_INFO_POPUP_CLASS_NAME,
          options: COUNTRY_OPTIONS.map((option) => ({
            label: option.label,
            value: option.value,
          })),
          filterOption: (input, option) =>
            String(option?.label ?? "")
              .toLowerCase()
              .includes(input.toLowerCase()),
          onFocus: () => clearDot("country"),
          onChange: handleCountryChange,
          onBlur: handleCountryBlur,
        }),
      }),
      jsx(FormField, {
        label: "State/Province",
        required: false,
        showDot: hasDot("state"),
        className: colName,
        children: jsx(AutoComplete, {
          allowClear: false,
          defaultActiveFirstOption: false,
          value: personal.state,
          placeholder: "Enter your state",
          suffixIcon: jsx("img", {
            src: assetUrl(dropDownSvg),
            alt: "",
            width: 16,
            height: 16,
          }),
          className: "autofill-info-modal-control",
          popupClassName: AUTOFILL_INFO_POPUP_CLASS_NAME,
          options: regionOptions.map((region) => ({
            label: region.name,
            value: region.name,
          })),
          filterOption: (input, option) =>
            String(option?.label ?? "")
              .toLowerCase()
              .includes(input.toLowerCase()),
          onFocus: () => clearDot("state"),
          onChange: handleRegionChange,
          onBlur: handleRegionBlur,
        }),
      }),
      jsx(FormField, {
        label: "City",
        required: false,
        showDot: hasDot("city"),
        className: colName,
        children: jsx(AutoComplete, {
          allowClear: false,
          defaultActiveFirstOption: false,
          value: personal.city,
          placeholder: "Enter your current city",
          suffixIcon: jsx("img", {
            src: assetUrl(dropDownSvg),
            alt: "",
            width: 16,
            height: 16,
          }),
          className: "autofill-info-modal-control",
          popupClassName: AUTOFILL_INFO_POPUP_CLASS_NAME,
          options: cityOptions.map((city) => ({
            label: city,
            value: city,
          })),
          filterOption: (input, option) =>
            String(option?.label ?? "")
              .toLowerCase()
              .includes(input.toLowerCase()),
          onFocus: () => clearDot("city"),
          onChange: (next) => updatePersonalField("city", next),
        }),
      }),
      renderTextField("county", "County", {
        required: false,
        className: colName,
        placeholder: "Enter your county",
      }),
      renderTextField("postalCode", "Postal Code", {
        required: false,
        className: colName,
        placeholder: "Enter postal code for your address",
      }),
      divider("postal-code-divider"),
      ...PERSONAL_LINK_FIELD_CONFIGS.map(({ field, label, placeholder }) =>
        renderTextField(field, label, {
          required: false,
          className: col4,
          placeholder,
        }),
      ),
    ],
  })
}
