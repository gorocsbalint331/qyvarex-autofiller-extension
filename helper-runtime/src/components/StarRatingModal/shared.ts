// @ts-nocheck
/**
 * Shared styles and close icon for rating / confirm modals.
 */

import { jsx } from "react/jsx-runtime"

export const RATING_MODAL_STYLES = {
  content: {
    padding: 0,
    borderRadius: "0 24px 24px 24px",
    overflow: "hidden",
  },
  body: {
    padding: "0 24px 24px 24px",
  },
  close: {
    top: 8,
    right: 8,
    color: "#000",
  },
}

export const PRIMARY_BUTTON_STYLE = {
  flex: 1,
  height: 44,
  borderRadius: 8,
  backgroundColor: "#00F0A0",
  borderColor: "#00F0A0",
  color: "#000",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 14,
  boxShadow: "none",
}

export const DEFAULT_BUTTON_STYLE = {
  flex: 1,
  height: 44,
  borderRadius: 8,
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: 14,
}

export const TITLE_STYLE = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 20,
  lineHeight: "24px",
  textAlign: "center",
  color: "#000",
}

export const BODY_TEXT_STYLE = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "20px",
  textAlign: "center",
  color: "#000",
}

export function CloseIcon() {
  return jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: jsx("path", {
      d: "M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5",
      stroke: "#000",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  })
}
