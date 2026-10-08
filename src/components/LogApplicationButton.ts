// @ts-nocheck
/**
 * Editable Google Sheet row for the job on this page, plus a button that
 * appends that row.
 */

import { useEffect, useRef, useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { sendToBackground } from "@plasmohq/messaging"
import { detectApplicationIdentity } from "../contents/shared/application-log-watcher.ts"
import { useResumeStore } from "../store/resume.ts"

const EMPTY = {
  country: "",
  resume: "",
  title: "",
  link: "",
  company: "",
  cost: "",
  status: "applied",
  profile: "",
  appliedDate: "",
}

const FIELDS = [
  ["title", "Title"],
  ["company", "Company"],
  ["link", "Link"],
  ["cost", "Cost"],
  ["country", "Country"],
  ["resume", "Resume"],
  ["profile", "Profile"],
  ["status", "Status"],
  ["appliedDate", "Applied date"],
]

function today() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const day = String(now.getDate()).padStart(2, "0")
  return `${now.getFullYear()}-${month}-${day}`
}

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim()
}

function controlLabel(control) {
  const explicit =
    control.id && document.querySelector(`label[for="${CSS.escape(control.id)}"]`)
  const raw =
    explicit?.textContent ||
    control.getAttribute("aria-label") ||
    control.closest("label")?.textContent ||
    ""
  return clean(raw).replace(/\*+$/g, "")
}

function detectedCountry() {
  const controls = document.querySelectorAll("input, select, textarea")
  for (const control of controls) {
    if (!(control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement)) {
      continue
    }
    if (control.disabled || /hidden|file|password|checkbox|radio/.test(control.type || "")) continue
    if (!/^country\b/i.test(controlLabel(control))) continue
    const value =
      control instanceof HTMLSelectElement
        ? control.selectedOptions?.[0]?.textContent || control.value
        : control.value
    const text = clean(value)
    if (text && !/^(select|choose|please)/i.test(text)) return text
  }
  return ""
}

function detectedDraft(currentTabJob, resumeName) {
  const scraped = detectApplicationIdentity(currentTabJob)
  return {
    ...EMPTY,
    title: scraped.title === "Untitled role" ? "" : scraped.title,
    company: scraped.company || "",
    link: scraped.link || window.location.href,
    cost: scraped.cost || "",
    country: detectedCountry(),
    resume: clean(resumeName),
    status: "applied",
    appliedDate: today(),
  }
}

export default function LogApplicationButton({ currentTabJob, disabled = false }) {
  const href = window.location.href
  const lastUsedResume = useResumeStore((state) => state.lastUsedResume)
  const resumeMap = useResumeStore((state) => state.resumeMap)
  const disableUploadResume = useResumeStore((state) => state.disableUploadResume)
  const resumeName = disableUploadResume
    ? ""
    : resumeMap?.[lastUsedResume]?.resumeName || ""
  const [draft, setDraft] = useState(() => detectedDraft(currentTabJob, resumeName))
  const [status, setStatus] = useState("idle")
  const [detail, setDetail] = useState("")
  const edited = useRef(false)

  useEffect(() => {
    edited.current = false
    setStatus("idle")
    setDetail("")
  }, [href])

  useEffect(() => {
    if (edited.current) return
    const next = detectedDraft(currentTabJob, resumeName)
    setDraft((current) => ({
      ...next,
      profile: current.profile || next.profile,
      country: next.country || current.country,
      resume: next.resume || current.resume,
    }))
  }, [
    href,
    resumeName,
    currentTabJob?.jobResult?.jobTitle,
    currentTabJob?.companyResult?.companyName,
  ])

  useEffect(() => {
    let cancelled = false
    sendToBackground({ name: "teamProfiles" })
      .then((response) => {
        if (cancelled) return
        const selected = response?.profiles?.find(
          (profile) => profile.id === response.selectedProfileId,
        )
        const label = clean(selected?.label)
        if (!label) return
        setDraft((current) => (current.profile ? current : { ...current, profile: label }))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [href])

  function updateField(key, value) {
    edited.current = true
    setDraft((current) => ({ ...current, [key]: value }))
    if (status === "logged" || status === "duplicate" || status === "error") {
      setStatus("idle")
      setDetail("")
    }
  }

  async function handleLog() {
    if (disabled || status === "logging") return
    const title = clean(draft.title)
    if (!title) {
      setStatus("error")
      setDetail("Title is required")
      return
    }
    const force = status === "duplicate"
    setStatus("logging")
    setDetail("")
    try {
      const response = await sendToBackground({
        name: "logApplication",
        body: {
          manual: true,
          force,
          title,
          company: clean(draft.company),
          link: clean(draft.link),
          cost: clean(draft.cost),
          country: clean(draft.country),
          resume: clean(draft.resume),
          other: clean(draft.profile),
          status: clean(draft.status) || "applied",
          appliedDate: clean(draft.appliedDate),
        },
      })
      if (!response?.ok) {
        setStatus("error")
        setDetail(response?.message || "Could not log")
      } else if (response.duplicate) {
        setStatus("duplicate")
        setDetail("Already logged today")
      } else {
        setStatus("logged")
        setDetail(response.tabName ? `Saved to ${response.tabName}` : "Saved")
      }
    } catch (error) {
      setStatus("error")
      setDetail(error instanceof Error ? error.message : "Could not log")
    }
  }

  const busy = disabled || status === "logging"
  const buttonLabel =
    status === "logging"
      ? "Logging..."
      : status === "duplicate"
        ? "Log again"
        : "Log to Google Sheet"

  return jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%",
      padding: "4px 0 8px",
    },
    children: [
      jsx("div", {
        style: {
          font: "600 12px/16px Inter, -apple-system, sans-serif",
          color: "#111827",
        },
        children: "Google Sheet",
      }),
      ...FIELDS.map(([key, label]) =>
        jsxs(
          "label",
          {
            style: { display: "flex", flexDirection: "column", gap: 2 },
            children: [
              jsx("span", {
                style: {
                  font: "600 11px/14px Inter, -apple-system, sans-serif",
                  color: "#64748b",
                },
                children: label,
              }),
              jsx("input", {
                value: draft[key],
                disabled: busy,
                onChange: (event) => updateField(key, event.target.value),
                style: {
                  width: "100%",
                  boxSizing: "border-box",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "6px 8px",
                  font: "400 12px/16px Inter, -apple-system, sans-serif",
                  color: "#111827",
                  background: busy ? "#f8fafc" : "#fff",
                },
              }),
            ],
          },
          key,
        ),
      ),
      jsx("button", {
        type: "button",
        disabled: busy,
        onClick: handleLog,
        style: {
          border: 0,
          borderRadius: 8,
          padding: "8px 12px",
          background: busy ? "#94a3b8" : "#0b6e4f",
          color: "#fff",
          font: "600 13px/18px Inter, -apple-system, sans-serif",
          cursor: busy ? "default" : "pointer",
        },
        children: buttonLabel,
      }),
      detail
        ? jsx("div", {
            style: {
              font: "500 12px/16px Inter, -apple-system, sans-serif",
              color: status === "error" ? "#b91c1c" : "#0b6e4f",
            },
            children: detail,
          })
        : null,
    ],
  })
}
