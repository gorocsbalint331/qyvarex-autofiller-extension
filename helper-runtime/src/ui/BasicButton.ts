// @ts-nocheck
/**
 * Thin antd Button with black primary theme (ui package).
 */

import { jsx } from "react/jsx-runtime"
import { Button, ConfigProvider } from "antd"

export default function BasicButton({ children, ...props }) {
  return jsx(ConfigProvider, {
    theme: {
      token: {
        colorPrimary: "#000000",
      },
    },
    children: jsx(Button, {
      ...props,
      style: { transition: "none" },
      children,
    }),
  })
}
