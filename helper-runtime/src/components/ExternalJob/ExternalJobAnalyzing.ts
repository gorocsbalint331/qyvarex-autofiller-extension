// @ts-nocheck
/**
 * Analyzing-in-progress screen while an external job is imported.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Typography } from "antd"
import { HOST_DOMAIN } from "../../api/env-resolver.ts"
import { BackHomeButton } from "./BackHomeButton.ts"
import { AnalyzeStarIcon } from "./ExternalJobIcon.ts"

export function ExternalJobAnalyzing({ backToForm }) {
  return jsxs(Flex, {
    vertical: true,
    className: "external-job-analyze-page",
    children: [
      jsx("div", {
        className: "external-job-analyze-header",
        children: jsx(BackHomeButton, { backFunction: backToForm }),
      }),
      jsxs("div", {
        className: "external-job-analyze-body",
        children: [
          jsx(AnalyzeStarIcon, {}),
          jsxs("div", {
            className: "tailor-resume-loading-linear-progress",
            children: [
              jsx("span", {
                className: "tailor-resume-loading-linear-progress-first",
              }),
              jsx("span", {
                className: "tailor-resume-loading-linear-progress-second",
              }),
            ],
          }),
          jsxs(Flex, {
            vertical: true,
            align: "center",
            justify: "center",
            gap: 8,
            children: [
              jsx(Typography.Text, {
                className: "external-job-analyze-body-title",
                children: "Analyzing New Job...",
              }),
              jsxs(Typography.Text, {
                className: "external-job-analyze-body-text",
                children: [
                  "Takes about 10-20 seconds, you can stay on this page or go to",
                  " ",
                  jsx("a", {
                    href: `${HOST_DOMAIN}/jobs/external`,
                    rel: "noreferrer",
                    target: "_blank",
                    className: "external-job-analyze-body-text-link",
                    children: "External Job",
                  }),
                  " ",
                  "to view the results later.",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default ExternalJobAnalyzing
