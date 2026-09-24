// @ts-nocheck
/**
 * Ant Design theme wrapper with Jobright primary color tokens.
 */

import { jsx as createJsx } from "react/jsx-runtime"
import { ConfigProvider } from "antd"

export const JOB_RIGHT_PRIMARY_COLOR = "#00F0A0"

export const ThemeProvider = ({ children }) =>
  createJsx(ConfigProvider, {
    theme: {
      token: {
        colorBgMask: "rgba(0, 0, 0, 0.8)",
        colorInfo: JOB_RIGHT_PRIMARY_COLOR,
        colorPrimary: JOB_RIGHT_PRIMARY_COLOR,
        colorText: "#000000",
        colorBgSpotlight: "#000000",
        fontFamily: "Inter",
      },
      components: {
        Modal: { borderRadiusLG: 24, boxShadow: "none" },
        Button: { defaultShadow: "none" },
        Slider: {
          handleLineWidth: 2,
          handleSize: 24,
          handleSizeHover: 24,
          handleActiveColor: "#000000",
          handleColor: "#000000",
          railSize: 8,
          railBg: "rgba(242, 244, 245, 0.60)",
          railHoverBg: "rgba(242, 244, 245, 0.60)",
          trackHoverBg: JOB_RIGHT_PRIMARY_COLOR,
          trackBg: JOB_RIGHT_PRIMARY_COLOR,
        },
        Select: {
          optionActiveBg: "rgba(0, 240, 160, 0.3)",
          optionSelectedBg: "rgba(0, 240, 160, 0.3)",
          optionFontSize: 13,
          optionLineHeight: "20px",
          optionPadding: "8px",
        },
        Form: {
          labelColor: "#000000",
          labelFontSize: 13,
          labelRequiredMarkColor: "#FF465A",
        },
        Input: {
          hoverBorderColor: "none",
          activeBorderColor: "none",
          activeShadow: "none",
        },
        Steps: { iconFontSize: 14 },
        Drawer: {
          colorBgTextActive: "#f2f4f5",
          colorBgTextHover: "#f2f4f5",
        },
        Checkbox: {
          controlInteractiveSize: 16,
          colorWhite: "#000",
          borderRadiusSM: 2.4,
          lineWidth: 1,
        },
        Rate: {
          starColor: "rgba(255, 183, 0, 1)",
          starHoverScale: "1",
          size: 24,
        },
      },
    },
    children,
  })
