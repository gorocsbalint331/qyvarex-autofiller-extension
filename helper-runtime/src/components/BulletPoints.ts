// @ts-nocheck
/**
 * Editable bullet-point list for autofill info modals.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Input } from "antd"
import * as closeMiniSvg from "../assets/inline/images/close_mini.svg.js"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export function BulletPoints({ descriptions, onChange }) {
  return jsxs("div", {
    className: "autofill-info-modal-bullet-points",
    children: [
      descriptions.map((text, index) =>
        jsxs(
          "div",
          {
            className: "autofill-info-modal-bullet-row",
            children: [
              jsx(Input, {
                value: text,
                placeholder: `Bullet point ${index + 1}`,
                className: "autofill-info-modal-bullet-input",
                onChange: (event) => {
                  const next = [...descriptions]
                  next[index] = event.target.value
                  onChange(next)
                },
              }),
              jsx(Button, {
                className: "autofill-info-modal-bullet-delete",
                icon: jsx("img", {
                  src: assetUrl(closeMiniSvg),
                  alt: "delete",
                  width: 12,
                  height: 12,
                }),
                onClick: () => {
                  onChange(descriptions.filter((_, i) => i !== index))
                },
              }),
            ],
          },
          index,
        ),
      ),
      jsx(Button, {
        className: "autofill-info-modal-add",
        icon: jsx(PlusOutlined, {}),
        onClick: () => onChange([...descriptions, ""]),
        children: "Add Bullet Point",
      }),
    ],
  })
}
