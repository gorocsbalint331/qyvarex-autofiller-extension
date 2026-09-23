// @ts-nocheck
/**
 * Workday signup password field with requirement checklist.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { CheckOutlined } from "@ant-design/icons"
import * as displaySvg from "../../assets/inline/images/display.svg.js"
import * as hideSvg from "../../assets/inline/images/hide.svg.js"
import { validateWorkdayPassword } from "../../utils/workday-signup-password.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

function requirementClassName(isMet, showErrors) {
  const base = "autofill-info-modal-signup-requirement"
  if (isMet) return `${base} is-passed`
  if (showErrors) return `${base} is-error`
  return base
}

export function WorkdaySignupPasswordField({
  inputRef,
  value,
  isVisible,
  showErrors,
  onChange,
  onFocus,
  onBlur,
  onKeyUp,
  onToggleVisible,
}) {
  const validation = validateWorkdayPassword(value)
  const toggleIcon = isVisible ? assetUrl(displaySvg) : assetUrl(hideSvg)

  return jsxs("div", {
    className: "autofill-info-modal-signup-password-section",
    children: [
      jsxs("div", {
        className: "autofill-info-modal-signup-password-field",
        children: [
          jsx("span", {
            className: "autofill-info-modal-label",
            children: "Password",
          }),
          jsxs("div", {
            className: "autofill-info-modal-signup-password-control",
            children: [
              jsx("input", {
                ref: inputRef,
                value,
                type: isVisible ? "text" : "password",
                name: "workday-signup-password",
                placeholder: "Enter the password",
                autoComplete: "new-password",
                className: "autofill-info-modal-signup-password-input",
                onInput: (event) => onChange(event.currentTarget.value),
                onChange: (event) => onChange(event.currentTarget.value),
                onFocus,
                onBlur,
                onKeyUp,
              }),
              jsx("button", {
                type: "button",
                "aria-label": isVisible ? "Hide password" : "Show password",
                className: "autofill-info-modal-signup-password-toggle",
                onClick: onToggleVisible,
                children: jsx("img", {
                  src: toggleIcon,
                  alt: "",
                  width: 16,
                  height: 16,
                }),
              }),
            ],
          }),
        ],
      }),
      jsx("div", {
        className: "autofill-info-modal-signup-requirements",
        children: validation.requirements.map((requirement) =>
          jsxs(
            "div",
            {
              className: requirementClassName(requirement.isMet, showErrors),
              children: [
                jsx("span", {
                  className: "autofill-info-modal-signup-requirement-mark",
                  children: requirement.isMet
                    ? jsx(CheckOutlined, {})
                    : null,
                }),
                jsx("span", {
                  className: "autofill-info-modal-signup-requirement-text",
                  children: requirement.label,
                }),
              ],
            },
            requirement.id,
          ),
        ),
      }),
    ],
  })
}
