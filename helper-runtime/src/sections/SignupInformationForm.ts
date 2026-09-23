// @ts-nocheck
/**
 * Sign-up information section of the autofill info editor.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Divider, Flex, Input, Typography } from "antd"
import * as shieldSvg from "../assets/inline/images/shield.svg.js"
import { FormField } from "../components/FormField.ts"
import { WorkdaySignupPasswordField } from "./SignupInformationForm/WorkdaySignupPasswordField.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export function SignupInformationForm({
  registrationEmail,
  dotChecker,
  updateSignupRegistrationEmail,
  passwordFieldProps,
}) {
  return jsxs(Flex, {
    vertical: true,
    className: "autofill-info-modal-panel autofill-info-modal-signup-panel",
    children: [
      jsxs("div", {
        className: "autofill-info-modal-signup-header",
        children: [
          jsx(Typography.Text, {
            className: "autofill-info-modal-card-title",
            children: "Sign-up Information",
          }),
          jsxs(Typography.Text, {
            className: "autofill-info-modal-signup-description",
            children: [
              jsx("strong", { children: "Workday sites" }),
              " require an account to apply. Save your credentials here and we'll fill them in automatically.",
            ],
          }),
        ],
      }),
      jsx(Divider, { className: "autofill-info-modal-signup-divider" }),
      jsx(FormField, {
        label: "Registration Email",
        required: false,
        showDot: dotChecker.hasFieldDot(
          "signupInformation",
          "registrationEmail",
        ),
        children: jsx(Input, {
          value: registrationEmail,
          placeholder: "Enter the email",
          className: "autofill-info-modal-control",
          onFocus: () =>
            dotChecker.clearItemDot("signupInformation.registrationEmail"),
          onChange: (event) => {
            updateSignupRegistrationEmail(event.target.value)
          },
        }),
      }),
      jsx(WorkdaySignupPasswordField, { ...passwordFieldProps }),
      jsx(Divider, { className: "autofill-info-modal-signup-divider" }),
      jsxs("div", {
        className: "autofill-info-modal-signup-privacy",
        children: [
          jsx("span", {
            className: "autofill-info-modal-signup-privacy-icon",
            children: jsx("img", {
              src: assetUrl(shieldSvg),
              alt: "",
              width: 16,
              height: 16,
            }),
          }),
          jsxs("span", {
            className: "autofill-info-modal-signup-privacy-text",
            children: [
              "Your password is stored in",
              " ",
              jsx("strong", { children: "your browser's local storage" }),
              ". Jobright never saves or shares it with anyone.",
            ],
          }),
        ],
      }),
    ],
  })
}
