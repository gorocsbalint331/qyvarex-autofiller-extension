// @ts-nocheck
/**
 * Selectable option chips for autofill info modals.
 */

import { jsx } from "react/jsx-runtime"
import { Flex } from "antd"

export function OptionGroup({ options, value, onChange }) {
  return jsx(Flex, {
    gap: 8,
    align: "center",
    justify: "center",
    wrap: "wrap",
    children: options.map((option) =>
      jsx(
        "div",
        {
          className: `autofill-info-modal-option-btn${
            value === option ? " is-selected" : ""
          }`,
          onClick: () => onChange(option),
          children: option,
        },
        option,
      ),
    ),
  })
}
