// @ts-nocheck
/**
 * Borderless antd Button with black primary theme (ui package).
 */

import { jsx } from "react/jsx-runtime"
import { Button, ConfigProvider } from "antd"

export default function SimpleButton({ children, ...props }) {
  return jsx(ConfigProvider, {
    theme: {
      token: {
        colorPrimary: "#000000",
        boxShadow: "none",
        boxShadowSecondary: "none",
        boxShadowTertiary: "none",
      },
    },
    children: jsx(Button, {
      ...props,
      style: {
        border: "none",
        outline: "none",
        boxShadow: "none",
        transition: "none",
      },
      children,
    }),
  })
}
