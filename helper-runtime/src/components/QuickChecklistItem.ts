// @ts-nocheck
/**
 * Onboarding checklist item with step number and GO / checked state.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Button, Flex, Typography } from "antd"
import * as confirmSvg from "../assets/inline/images/confirm.svg.js"
import Image from "../ui/Image.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function QuickChecklistItem({
  checked,
  stepNumber,
  title,
  onClick,
}) {
  return jsxs(Flex, {
    align: "center",
    justify: "space-between",
    className: "check-list-item",
    children: [
      jsxs(Flex, {
        className: "content",
        gap: 8,
        align: "center",
        children: [
          jsx("div", {
            className: "check-list-step",
            children: stepNumber,
          }),
          jsx(Typography.Text, {
            className: "check-list-item-title",
            children: title,
          }),
        ],
      }),
      checked
        ? jsx("div", {
            className: "check-list-item-status",
            children: jsx(Image, {
              preview: false,
              src: assetUrl(confirmSvg),
              height: 20,
              width: 20,
            }),
          })
        : jsx(Button, {
            className: "check-list-item-btn",
            onClick,
            children: "GO",
          }),
    ],
  })
}
