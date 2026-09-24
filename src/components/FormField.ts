// @ts-nocheck
/**
 * Labeled field wrapper for autofill info editor rows.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex } from "antd"

export function fieldLabel(label, options) {
  const { required = true, showDot = false } = options ?? {}
  return jsxs("span", {
    className: "autofill-info-modal-label",
    children: [
      required &&
        jsx("span", {
          className: "autofill-info-modal-label-required",
          children: "*",
        }),
      label,
      showDot && jsx("span", { className: "autofill-info-modal-nav-dot" }),
    ],
  })
}

export function FormField({
  label,
  required = true,
  showDot,
  error,
  fieldKey,
  className,
  children,
}) {
  return jsxs(Flex, {
    vertical: true,
    gap: 8,
    className,
    "data-autofill-info-field": fieldKey,
    children: [
      fieldLabel(label, { required, showDot }),
      children,
      error &&
        jsx("span", {
          className: "autofill-info-modal-error",
          children: error,
        }),
    ],
  })
}
