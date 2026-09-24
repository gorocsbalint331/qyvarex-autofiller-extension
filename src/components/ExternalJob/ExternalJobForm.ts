// @ts-nocheck
/**
 * External job add form: scrape page → review fields → save.
 */

import { useEffect, useMemo, useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Form, Input, Typography } from "antd"
import CompanyAutoComplete from "../CompanyAutoComplete.ts"
import { scrapeJobPageData } from "../../core/jobPageScraper.ts"
import { checkSupportStatus } from "../../core/utils.ts"
import { useExternalJobStore } from "../../store/externalJob.ts"
import { useProfileStore } from "../../store/profile.ts"
import { isNounEng } from "../../utils.ts"
import { trackEvent } from "../../utils/trace.ts"
import { BackHomeButton } from "./BackHomeButton.ts"
import { AnalyzeStarIcon } from "./ExternalJobIcon.ts"

const SCRAPE_STATUS_COPY = {
  success: {
    bg: "#E6F9F1",
    text: "Job details are ready to review.",
  },
  partial: {
    bg: "#FFF7E6",
    text: "Some details were found. Please fill in the rest.",
  },
  error: {
    bg: "#FFF1F0",
    text: "No job details found on this page",
  },
}

const MIN_SCAN_DISPLAY_MS = 500

function ScrapeStatusToast({ status, visible }) {
  if (status === "none" || !visible) return null
  const { bg, text } = SCRAPE_STATUS_COPY[status]
  return jsx("div", {
    className: "scrape-status-toast",
    style: {
      background: bg,
      borderRadius: 8,
      padding: "8px 12px",
      marginTop: 12,
      textAlign: "center",
    },
    children: jsx(Typography.Text, {
      style: { fontSize: 13, lineHeight: "16px" },
      children: text,
    }),
  })
}

export function ExternalJobForm({ jumpToInitPage, jumpToSuccessPage }) {
  const formValues = useExternalJobStore((state) => state.formValues)
  const addExternalJob = useExternalJobStore((state) => state.addExternalJob)
  const setFormValues = useExternalJobStore((state) => state.setFormValues)
  const isAddingAnotherJob = useExternalJobStore(
    (state) => state.isAddingAnotherJob,
  )
  const parsePageWithMarkdown = useExternalJobStore(
    (state) => state.parsePageWithMarkdown,
  )
  const scrapeFallbackStatus = useExternalJobStore(
    (state) => state.scrapeFallbackStatus,
  )
  const userStage = useProfileStore((state) => state.userStage)

  const [form] = Form.useForm()
  const [isScanning, setIsScanning] = useState(true)

  const scrapeToastStatus = useMemo(() => {
    if (scrapeFallbackStatus === "success") {
      const { jobTitle, companyName, jobDescription } = formValues
      const filledCount = [jobTitle, companyName, jobDescription].filter(
        Boolean,
      ).length
      if (filledCount === 3) return "success"
      if (filledCount > 0) return "partial"
      return "error"
    }
    if (scrapeFallbackStatus === "error") return "error"
    return "none"
  }, [scrapeFallbackStatus, formValues])

  const backFunction = isAddingAnotherJob ? jumpToSuccessPage : jumpToInitPage

  useEffect(() => {
    if (typeof window === "undefined") return

    const startedAt = Date.now()

    async function runInitialScrape() {
      const { formValues: current } = useExternalJobStore.getState()
      const { data, ruleMatched } = scrapeJobPageData()
      const updates = {}

      if (current.url === "") {
        updates.url = window.location.href
      }
      if (ruleMatched) {
        if (current.jobTitle === "" && data.jobTitle) {
          updates.jobTitle = data.jobTitle
        }
        if (current.companyName === "" && data.companyName) {
          updates.companyName = data.companyName
        }
        if (current.jobDescription === "" && data.jobDescription) {
          updates.jobDescription = data.jobDescription
        }
      }

      if (Object.keys(updates).length > 0) {
        setFormValues(updates)
      }

      const nextJobTitle = updates.jobTitle || current.jobTitle
      const nextCompanyName = updates.companyName || current.companyName
      const nextJobDescription =
        updates.jobDescription || current.jobDescription
      const missingFields =
        !nextJobTitle || !nextCompanyName || !nextJobDescription
      const needsAiScrape = !ruleMatched || missingFields

      if (needsAiScrape) {
        await parsePageWithMarkdown()
      }

      const after = useExternalJobStore.getState().formValues
      const hasAllFields =
        !!after.jobTitle && !!after.companyName && !!after.jobDescription

      if (hasAllFields) {
        trackEvent("autofill_external_job_source", {
          source_type: needsAiScrape ? "ai_scrape" : "frontend_scrape",
          user_id: userStage?.userId,
          current_url: window.location.href,
        })
      }

      const elapsed = Date.now() - startedAt
      const remaining = Math.max(0, MIN_SCAN_DISPLAY_MS - elapsed)
      if (remaining > 0) {
        await new Promise((resolve) => setTimeout(resolve, remaining))
      }
      setIsScanning(false)
    }

    runInitialScrape()
  }, [])

  useEffect(() => {
    if (isScanning) return
    form.setFieldsValue(useExternalJobStore.getState().formValues)
  }, [isScanning, form])

  useEffect(() => {
    trackEvent("autofill_external_form_viewed", {
      user_id: userStage?.userId,
      source: checkSupportStatus() ? "supported_page" : "unsupported_page",
      currentUrl: window.location.href,
    })
  }, [])

  if (isScanning) {
    return jsxs("section", {
      className: "external-job-scanning-page",
      children: [
        jsx("div", {
          className: "external-job-scanning-topbar",
          children: jsx(BackHomeButton, { backFunction }),
        }),
        jsxs("div", {
          className: "external-job-scanning-body",
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
              gap: 4,
              children: [
                jsx(Typography.Text, {
                  className: "external-job-scanning-title",
                  children: "AI is scanning this page",
                }),
                jsx(Typography.Text, {
                  className: "external-job-scanning-subtitle",
                  children:
                    "We're pulling the key job details from this page.",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  }

  return jsxs("section", {
    className: "external-job-form-page",
    children: [
      jsxs("div", {
        className: "external-job-form-topbar",
        children: [
          jsx(BackHomeButton, { backFunction }),
          jsx("h2", {
            className: "external-job-form-header-title",
            children: "Add a New Job for This Page",
          }),
        ],
      }),
      jsxs("div", {
        className: "external-job-form-body",
        children: [
          jsx(ScrapeStatusToast, {
            status: scrapeToastStatus,
            visible: scrapeToastStatus !== "none",
          }),
          jsxs(Form, {
            className: "external-job-form",
            form,
            layout: "vertical",
            initialValues: formValues,
            onValuesChange: (_changed, allValues) => {
              setFormValues(allValues)
            },
            onFinish: addExternalJob,
            children: [
              jsx(Form.Item, {
                name: "jobTitle",
                label: "Job Title",
                rules: [
                  {
                    required: true,
                    message: "Please enter the job title",
                    validateTrigger: "onBlur",
                  },
                ],
                children: jsx(Input, { placeholder: "Enter Job Title" }),
              }),
              jsx(Form.Item, {
                name: "url",
                label: "URL for Original Posting",
                rules: [
                  {
                    required: true,
                    message: "Please enter the URL for original posting",
                    validateTrigger: "onBlur",
                  },
                ],
                children: jsx(Input, { placeholder: "Enter URL" }),
              }),
              jsx(Form.Item, { hidden: true, name: "companyId" }),
              jsx(Form.Item, {
                name: "companyName",
                label: "Company Name",
                rules: [{ required: true, validateTrigger: "onBlur" }],
                children: jsx(CompanyAutoComplete, { form }),
              }),
              jsx(Form.Item, {
                name: "jobDescription",
                label: "Job Description",
                rules: [
                  { required: true, validateTrigger: "onBlur" },
                  {
                    validator: (_rule, value) =>
                      isNounEng(value)
                        ? Promise.reject(
                            new Error("Job description should be English."),
                          )
                        : Promise.resolve(),
                  },
                ],
                children: jsx(Input.TextArea, {
                  placeholder: "Please paste the complete job description...",
                  style: { padding: 12, resize: "none" },
                }),
              }),
            ],
          }),
        ],
      }),
      jsx("div", {
        className: "external-job-form-bottom",
        children: jsx("button", {
          type: "button",
          className: "external-job-form-submit-button",
          onClick: () => {
            form.submit()
            trackEvent("autofill_external_job_submitted", {
              user_id: userStage?.userId,
              source: checkSupportStatus()
                ? "supported_page"
                : "unsupported_page",
              currentUrl: window.location.href,
            })
          },
          children: jsx("span", {
            className: "external-job-form-submit-button-text-hint",
            children: "Save",
          }),
        }),
      }),
    ],
  })
}

export default ExternalJobForm
