// @ts-nocheck
/**
 * Failure screen when external job analysis does not succeed.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Typography } from "antd"
import { useExternalJobStore } from "../../store/externalJob.ts"
import { BackHomeButton } from "./BackHomeButton.ts"
import { SadIcon } from "./ExternalJobIcon.ts"

export function ExternalJobFail({ backToInit, backToForm }) {
  const formValues = useExternalJobStore((state) => state.formValues)

  return jsxs(Flex, {
    vertical: true,
    className: "external-job-analyze-page",
    children: [
      jsx("div", {
        className: "external-job-analyze-header",
        children: jsx(BackHomeButton, { backFunction: backToInit }),
      }),
      jsx("div", {
        className: "external-job-analyze-body",
        children: jsxs(Flex, {
          vertical: true,
          align: "center",
          justify: "center",
          gap: 32,
          className: "external-job-fail-content",
          children: [
            jsxs(Flex, {
              vertical: true,
              align: "center",
              justify: "center",
              gap: 16,
              className: "external-job-fail-title-block",
              children: [
                jsx(SadIcon, {}),
                jsxs(Flex, {
                  vertical: true,
                  align: "center",
                  justify: "center",
                  gap: 4,
                  className: "external-job-fail-copy",
                  children: [
                    jsx(Typography.Text, {
                      className: "external-job-analyze-body-title",
                      children: "Failed to Analyze Job",
                    }),
                    jsxs(Typography.Text, {
                      className: "external-job-analyze-body-text",
                      children: [
                        "We couldn't analyze the",
                        " ",
                        jsx("strong", { children: formValues.jobTitle }),
                        " job posting at",
                        " ",
                        jsx("strong", { children: formValues.companyName }),
                        ", please try again later.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            jsx("button", {
              className: "external-job-fail-button",
              onClick: () => backToForm(),
              children: jsx(Typography.Text, {
                className: "external-job-fail-button-text",
                children: "Back",
              }),
            }),
          ],
        }),
      }),
    ],
  })
}

export default ExternalJobFail
