// @ts-nocheck
/**
 * Entry pill to start adding the current page as an external job.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Typography } from "antd"
import * as aistarSvg from "../../assets/inline/images/aistar_c.svg.js"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export function ExternalJobEntry({ entryFunction }) {
  return jsxs("div", {
    className: "external-job-entry-container",
    onClick: () => {
      entryFunction?.()
    },
    children: [
      jsxs("div", {
        className: "external-job-entry-pill-wrapper",
        children: [
          jsxs("div", {
            className: "external-job-entry-pill",
            children: [
              jsxs("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  jsx("path", {
                    d: "M8 2.5V13.5",
                    stroke: "black",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                  }),
                  jsx("path", {
                    d: "M13.5 8L2.5 8",
                    stroke: "black",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                  }),
                ],
              }),
              jsx(Typography.Text, {
                className: "external-job-entry-pill-text",
                children: "Add This job in one click",
              }),
            ],
          }),
          jsx("img", {
            className: "external-job-entry-aistar",
            src: assetUrl(aistarSvg),
            width: 20,
            height: 20,
            alt: "",
            draggable: false,
          }),
        ],
      }),
      jsx(Typography.Text, {
        className: "external-job-entry-text-hint",
        children: "See your match score and tailor your resume",
      }),
    ],
  })
}

export default ExternalJobEntry
