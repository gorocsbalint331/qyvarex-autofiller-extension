// @ts-nocheck
/**
 * Keyboard-accessible "Autofill for Another Job" link control.
 */

import { jsx } from "react/jsx-runtime"
import { Typography } from "antd"
import clsx from "clsx"

export default function UpdateJobInfoLink({ disabled = false, onClick }) {
  function handleActivate() {
    if (disabled) return
    onClick()
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleActivate()
    }
  }

  return jsx("div", {
    className: clsx("update-job-info-link", {
      "update-job-info-link-disabled": disabled,
    }),
    onClick: handleActivate,
    onKeyDown: handleKeyDown,
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled,
    children: jsx(Typography.Text, {
      className: "update-job-info-link-text",
      children: "Autofill for Another Job",
    }),
  })
}
