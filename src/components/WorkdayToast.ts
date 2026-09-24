// @ts-nocheck
/**
 * Workday stay-on-page toast shown in the helper header.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Typography } from "antd"
import * as workdayAlertSvg from "../assets/inline/images/workday_alert.svg.js"
import * as workdayCloseSvg from "../assets/inline/images/workday_close.svg.js"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function WorkdayToast({ onClose }) {
  return jsxs(Flex, {
    gap: 8,
    align: "flex-start",
    className: "workday-toast",
    children: [
      jsx("div", {
        className: "workday-toast-badge",
        children: jsx("img", {
          src: assetUrl(workdayAlertSvg),
          alt: "",
          width: 16,
          height: 16,
        }),
      }),
      jsx(Typography.Text, {
        className: "workday-toast-text",
        children:
          "Please stay on the Workday page while Autofill fills out the form.",
      }),
      jsx("span", {
        role: "button",
        tabIndex: 0,
        className: "workday-toast-close",
        onClick: onClose,
        children: jsx("img", {
          src: assetUrl(workdayCloseSvg),
          alt: "",
          width: 16,
          height: 16,
        }),
      }),
    ],
  })
}
