// @ts-nocheck
/**
 * Close (X) control used on external-job pages.
 */

import { jsx, jsxs } from "react/jsx-runtime"

export function BackHomeButton({ backFunction }) {
  return jsx("div", {
    onClick: backFunction,
    className: "external-job-back-home-button",
    children: jsxs("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        jsx("path", {
          d: "M9.75 2.25L2.25 9.75",
          stroke: "black",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        jsx("path", {
          d: "M2.25 2.25L9.75 9.75",
          stroke: "black",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  })
}

export default BackHomeButton
