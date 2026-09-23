// @ts-nocheck
/**
 * External-job / unsupported-domain flow: entry, form, analyze, success, fail.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { useRequest } from "ahooks"
import { Flex, Typography } from "antd"
import { useEffect, useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"
import { HOST_DOMAIN } from "../api/env-resolver.ts"
import ExternalJobAnalyzing from "./ExternalJob/ExternalJobAnalyzing.ts"
import ExternalJobEntry from "./ExternalJob/ExternalJobEntry.ts"
import ExternalJobFail from "./ExternalJob/ExternalJobFail.ts"
import ExternalJobForm from "./ExternalJob/ExternalJobForm.ts"
import JobCard from "./JobCard.ts"
import ResumeSwitcher from "./ResumeSwitcher.ts"
import { JOB_RECOMMEND_LIST_PATHNAME } from "../contents/shared/constants.ts"
import { checkSupportDomainLevel } from "../core/utils.ts"
import { useExternalJobStore } from "../store/externalJob.ts"
import { isLinkedinDomain } from "../utils/checkLinkedin.ts"
import { extractJobIdFromUrl } from "../utils/job-id.ts"

function SearchJobsIcon() {
  return jsxs("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      jsx("circle", {
        cx: "7",
        cy: "7",
        r: "6.42",
        fill: "white",
        stroke: "black",
        strokeWidth: "1.16",
      }),
      jsx("path", {
        d: "M4 6.5C4 5.11929 5.11929 4 6.5 4",
        stroke: "black",
        strokeWidth: "1.16",
        strokeLinecap: "round",
      }),
      jsx("path", {
        d: "M12 12L12.7143 12.7143L14.5 14.5",
        stroke: "black",
        strokeWidth: "1.16",
        strokeLinecap: "round",
      }),
    ],
  })
}

function NotSupportedBanner() {
  const [requestSent, setRequestSent] = useState(false)
  const { run: submitRequest } = useRequest(
    () =>
      sendToBackground({
        name: "postAutofillFeedback",
        body: {
          url: window.location.href,
        },
      }),
    {
      manual: true,
      onSuccess: () => {
        setRequestSent(true)
      },
    },
  )

  return jsxs(Flex, {
    align: "center",
    justify: "space-between",
    className: "not-available-status-banner",
    children: [
      jsx(Typography.Text, {
        className: "not-available-status-banner-title",
        children: "Autofill Not Supported",
      }),
      requestSent
        ? jsx(Typography.Text, {
            className: "not-available-status-banner-action",
            children: "Request Sent!",
          })
        : jsx(Typography.Text, {
            className: "not-available-status-banner-action",
            onClick: () => submitRequest(),
            children: "Submit Request",
          }),
    ],
  })
}

export default function NotAvailableStatus() {
  const page = useExternalJobStore((state) => state.page)
  const setPage = useExternalJobStore((state) => state.setPage)
  const analyzeStatus = useExternalJobStore((state) => state.analyzeStatus)
  const setAndBroadcastAnalyzeStatus = useExternalJobStore(
    (state) => state.setAndBroadcastAnalyzeStatus,
  )
  const isAddingAnotherJob = useExternalJobStore(
    (state) => state.isAddingAnotherJob,
  )
  const setIsAddingAnotherJob = useExternalJobStore(
    (state) => state.setIsAddingAnotherJob,
  )
  const resetFormValues = useExternalJobStore((state) => state.resetFormValues)
  const jobInfo = useExternalJobStore((state) => state.jobInfo)
  const jobId = useExternalJobStore((state) => state.jobId)
  const setJobId = useExternalJobStore((state) => state.setJobId)
  const useExternalJobDetailRequest = useExternalJobStore(
    (state) => state.useExternalJobDetailRequest,
  )
  useExternalJobDetailRequest()

  const isLinkedin = isLinkedinDomain(window.top.location?.href)
  const showUnsupportedBanner = !isLinkedin && !checkSupportDomainLevel()

  useEffect(() => {
    if (jobId) return
    const extracted = extractJobIdFromUrl(window.location.href)
    if (extracted) setJobId(extracted)
  }, [jobId, setJobId])

  useEffect(() => {
    if (analyzeStatus === "loading") setPage("analyzing")
    else if (analyzeStatus === "success") setPage("analyze-success")
    else if (analyzeStatus === "error") setPage("analyze-failed")
  }, [analyzeStatus])

  useEffect(
    () => () => {
      setAndBroadcastAnalyzeStatus("idle")
    },
    [],
  )

  function jumpToInitPage() {
    setPage("init")
    setAndBroadcastAnalyzeStatus("idle")
    if (isAddingAnotherJob) setIsAddingAnotherJob(false)
  }

  function jumpToFormPage() {
    setAndBroadcastAnalyzeStatus("idle")
    setPage("form")
  }

  function jumpToSuccessPage() {
    setAndBroadcastAnalyzeStatus("success")
    setPage("analyze-success")
    if (isAddingAnotherJob) setIsAddingAnotherJob(false)
  }

  switch (page) {
    case "init":
      return jsxs(Flex, {
        vertical: true,
        className:
          "not-available-status-container not-available-status-container-init",
        children: [
          jsxs(Flex, {
            vertical: true,
            gap: 12,
            className:
              "not-available-status-body not-available-status-init-body",
            children: [
              showUnsupportedBanner && jsx(NotSupportedBanner, {}),
              jsx(ExternalJobEntry, {
                entryFunction: jumpToFormPage,
              }),
              jsx(ResumeSwitcher, {
                currentTabJob: jobInfo,
                onRequestAddJob: jumpToFormPage,
              }),
            ],
          }),
          jsxs("a", {
            className: "not-available-status-find-more-button",
            href: `${HOST_DOMAIN}${JOB_RECOMMEND_LIST_PATHNAME}`,
            target: "_blank",
            rel: "noreferrer",
            children: [
              jsx(SearchJobsIcon, {}),
              jsx("span", {
                children: "Find More Jobs on Jobright",
              }),
            ],
          }),
        ],
      })

    case "form":
      return jsx(ExternalJobForm, {
        jumpToInitPage,
        jumpToSuccessPage,
      })

    case "analyzing":
      return jsx(ExternalJobAnalyzing, {
        backToForm: jumpToFormPage,
      })

    case "analyze-success":
      return jsx(Flex, {
        vertical: true,
        className:
          "not-available-status-container external-job-success-page",
        children: jsxs(Flex, {
          vertical: true,
          gap: 12,
          className:
            "not-available-status-body external-job-success-body",
          children: [
            showUnsupportedBanner && jsx(NotSupportedBanner, {}),
            jsx(JobCard, {
              data: jobInfo,
              hideActions: true,
              hideApplicantsCount: true,
            }),
            jsx(ResumeSwitcher, {
              currentTabJob: jobInfo,
              onRequestAddJob: jumpToFormPage,
            }),
            jsx("button", {
              className: "external-job-another-job-link",
              onClick: () => {
                resetFormValues()
                if (jobInfo) setIsAddingAnotherJob(true)
                jumpToFormPage()
              },
              children: "Autofill for Another Job",
            }),
          ],
        }),
      })

    case "analyze-failed":
      return jsx(ExternalJobFail, {
        backToInit: jumpToInitPage,
        backToForm: jumpToFormPage,
      })

    default:
      return null
  }
}
