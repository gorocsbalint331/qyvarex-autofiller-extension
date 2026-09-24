// @ts-nocheck
/**
 * Job recommendation card (logo, title, score, insider connections).
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { useRequest } from "ahooks"
import { Button, Flex, Typography } from "antd"
import { isNil } from "lodash-es"
import { sendToBackground } from "@plasmohq/messaging"
import { HOST_DOMAIN } from "../api/env-resolver.ts"
import { DETAIL_PATHNAME } from "../contents/shared/constants.ts"
import Image from "../ui/Image.ts"
import { formatPublishTimeDesc } from "./formatPublishTime.ts"
import InsiderConnections from "./InsiderConnections.ts"
import RoundedRingProgress from "./RoundedRingProgress.ts"

const FALLBACK_LOGO = `${HOST_DOMAIN}/newimages/public/img_none.svg`

export default function JobCard({
  data,
  onApply,
  hideActions,
  hideApplicantsCount,
  style,
}) {
  const { run: postApplyJob } = useRequest(
    () =>
      sendToBackground({
        name: "postApplyJob",
        body: {
          jobDetail: data,
        },
      }),
    {
      manual: true,
      onSuccess: () => {
        onApply()
      },
    },
  )

  function openDetails() {
    window.open(
      `${HOST_DOMAIN}${DETAIL_PATHNAME}/${data?.jobResult?.jobId}`,
      "_blank",
    )
  }

  return jsxs(Flex, {
    className: "job-card",
    vertical: true,
    style,
    children: [
      jsxs(Flex, {
        className: "job-card-first-row",
        gap: 8,
        justify: "space-between",
        children: [
          jsx(Image, {
            className: "job-card-company-logo",
            preview: false,
            width: 40,
            height: 40,
            src: data?.jobResult?.jdLogo || FALLBACK_LOGO,
            fallback: FALLBACK_LOGO,
          }),
          jsxs(Flex, {
            vertical: true,
            justify: "center",
            style: {
              marginRight: "auto",
              flex: "0 1 auto",
            },
            children: [
              jsx(Typography.Text, {
                className: "job-card-company-name",
                ellipsis: true,
                children:
                  data?.companyResult?.companyName ||
                  data?.jobResult?.userCompanyName,
              }),
              jsx(Typography.Text, {
                ellipsis: true,
                className: "job-card-company-desc",
                children: data?.companyResult?.companyCategories?.split(",")[0],
              }),
            ],
          }),
          jsx(Flex, {
            gap: 4,
            align: "center",
            children:
              !isNil(data?.displayScore) &&
              jsx(RoundedRingProgress, {
                progress: Math.round(data?.displayScore) / 100,
                width: 56,
                height: 32,
                strokeWidth: 2,
                gradient: ["#50FABE", "#A0FA96"],
                progressText: Math.round(data?.displayScore),
              }),
          }),
        ],
      }),
      jsxs(Flex, {
        className: "job-card-second-row",
        vertical: true,
        gap: 8,
        children: [
          jsx(Flex, {
            vertical: true,
            children: jsx("a", {
              href: `${HOST_DOMAIN}${DETAIL_PATHNAME}/${data?.jobResult?.jobId}`,
              target: "_blank",
              rel: "noreferrer",
              children: jsx(Typography.Title, {
                className: "job-card-job-title",
                ellipsis: {
                  rows: 3,
                  expandable: false,
                },
                children: data?.jobResult?.jobTitle,
              }),
            }),
          }),
          jsxs(Flex, {
            className: "job-detail-applicant-row",
            gap: 4,
            children: [
              jsxs(Typography.Text, {
                children: [
                  formatPublishTimeDesc(
                    data?.jobResult?.publishTimeDesc,
                    data?.jobResult?.repost,
                  ),
                  " ",
                ],
              }),
              !hideApplicantsCount &&
                jsxs(Typography.Text, {
                  className: "job-card-applicant-detail",
                  children: [
                    " \xb7 ",
                    " ",
                    data?.jobResult?.applicantsCount,
                    " applicants",
                  ],
                }),
            ],
          }),
        ],
      }),
      jsx(InsiderConnections, {
        socialConnections: data?.jobResult?.socialConnections,
        personalSocialConnections: data?.jobResult?.personalSocialConnections,
        jobId: data?.jobResult?.jobId,
      }),
      !hideActions &&
        jsx(Button, {
          className: "go-to-details-button",
          onClick: openDetails,
          children: "View details",
        }),
    ],
  })
}
