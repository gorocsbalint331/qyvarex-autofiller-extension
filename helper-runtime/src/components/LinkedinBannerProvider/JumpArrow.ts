// @ts-nocheck
/**
 * Jump-out arrow icon for the LinkedIn banner footer.
 */

import { jsx, jsxs } from "react/jsx-runtime"

export default function JumpArrow({ darkMode }) {
  const stroke = darkMode ? "#dae0e4" : "#000000"
  return jsxs("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      jsx("path", {
        d: "M6 3.90625H13V10.9063",
        stroke,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      jsx("path", {
        d: "M3 13.9063L13 3.90625",
        stroke,
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  })
}
