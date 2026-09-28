// @ts-nocheck
/**
 * Manual "Log to Google Sheet" control — fallback for when the automatic
 * submit/thank-you detection doesn't fire.
 */

import { useEffect, useState } from "react"
import { jsx } from "react/jsx-runtime"
import { Typography } from "antd"
import clsx from "clsx"
import { sendToBackground } from "@plasmohq/messaging"
import { scrapeApplicationMeta } from "../contents/shared/application-log-watcher.ts"

const LABELS = {
  idle: "Log Application to Google Sheet",
  logging: "Logging to Google Sheet...",
  logged: "Logged to Google Sheet",
  duplicate: "Already logged today - click to log again",
  error: "Could not log to Google Sheet - retry",
}

export default function LogApplicationButton({ currentTabJob, disabled = false }) {
  const [status, setStatus] = useState("idle")
  const [detail, setDetail] = useState("")
  const href = window.location.href

  useEffect(() => {
    setStatus("idle")
    setDetail("")
  }, [href])

  async function handleActivate() {
    if (disabled || status === "logging") return
    const force = status === "duplicate" || status === "logged"
    setStatus("logging")
    setDetail("")
    try {
      const scraped = scrapeApplicationMeta()
      const response = await sendToBackground({
        name: "logApplication",
        body: {
          ...scraped,
          title: currentTabJob?.jobResult?.jobTitle || scraped.title,
          company: currentTabJob?.companyResult?.companyName || scraped.company,
          force,
        },
      })
      if (!response?.ok) {
        setStatus("error")
        setDetail(response?.message || "")
      } else if (response.duplicate) {
        setStatus("duplicate")
      } else {
        setStatus("logged")
        setDetail(response.tabName ? `Tab: ${response.tabName}` : "")
      }
    } catch (error) {
      setStatus("error")
      setDetail(error instanceof Error ? error.message : "")
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleActivate()
    }
  }

  const isDisabled = disabled || status === "logging"
  return jsx("div", {
    className: clsx("update-job-info-link", {
      "update-job-info-link-disabled": isDisabled,
    }),
    onClick: handleActivate,
    onKeyDown: handleKeyDown,
    role: "button",
    tabIndex: isDisabled ? -1 : 0,
    "aria-disabled": isDisabled,
    title: detail || undefined,
    children: jsx(Typography.Text, {
      className: "update-job-info-link-text",
      children: detail && status !== "idle" ? `${LABELS[status]} (${detail})` : LABELS[status],
    }),
  })
}
