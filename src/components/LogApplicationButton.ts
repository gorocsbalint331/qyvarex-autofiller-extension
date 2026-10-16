// @ts-nocheck
/**
 * Editable Google Sheet row for the job on this page, plus a button that
 * appends that row.
 */

import { useEffect, useRef, useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { sendToBackground } from "@plasmohq/messaging"
import { detectApplicationIdentity } from "../contents/shared/application-log-watcher.ts"
import { TAILOR_RESUME_ID_PREFIX } from "../contents/shared/constants.ts"
import { useAutofillInfoStore } from "../store/autofillInfo.ts"
import { useResumeStore } from "../store/resume.ts"
import { getResumeUploadFilename } from "../utils/resume-upload-filename.ts"

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
    if (control.closest?.("[id^='jobright'], plasmo-csui")) continue
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

function countryFromText(text) {
  if (text.length < 8 || text.length > 140 || !/,/.test(text)) return ""
  const chunks = text.split(/[·•|]/).map(clean).filter(Boolean)
  const place = chunks.find(
    (part) => /,/.test(part) && !/\b(full time|part time|contract|technology|posted)\b/i.test(part),
  )
  if (!place) return ""
  const last = place.split(",").map(clean).filter(Boolean).pop()
  if (last && last.length > 2 && last.length < 40 && !/\d/.test(last)) return last
  return ""
}

function jobLocationCountry() {
  const scopes = [
    document.querySelector("[role='dialog'], [aria-modal='true']"),
    document.querySelector("main"),
    document.body,
  ].filter(Boolean)
  for (const scope of scopes) {
    const nodes = scope.querySelectorAll("span, p, div, li")
    for (const node of nodes) {
      if (node.closest?.("[id^='jobright'], plasmo-csui")) continue
      if (node.children.length > 4) continue
      const found = countryFromText(clean(node.textContent))
      if (found) return found
    }
  }
  return ""
}

function selectedResumeName(resumeState, autofillInfo) {
  if (!resumeState.disableUploadResume) {
    const id = resumeState.lastUsedResume
    const entry = resumeState.resumeMap?.[id]
    if (entry?.resumeName || entry?.resumeNameWithSuffix) {
      const named = getResumeUploadFilename({
        selectedResume: entry,
        isTailorResume: String(id || "").startsWith(TAILOR_RESUME_ID_PREFIX),
        tailorResumeName: resumeState.tailorResumeName || "",
      })
      if (named && named !== "resume") return clean(named)
    }
  }
  const resumes = autofillInfo?.resumes || []
  const chosen =
    resumes.find((resume) => resume.id && resume.id === autofillInfo?.defaultResumeId) ||
    resumes.find((resume) => resume.isDefault) ||
    resumes[0]
  return clean(chosen?.displayName || chosen?.fileName)
}

function detectedDraft(currentTabJob, resumeName, profileCountry) {
  const scraped = detectApplicationIdentity(currentTabJob)
  return {
    ...EMPTY,
    title: scraped.title === "Untitled role" ? "" : scraped.title,
    company: scraped.company || "",
    link: scraped.link || window.location.href,
    cost: scraped.cost || "",
    country: detectedCountry() || clean(profileCountry) || jobLocationCountry(),
    resume: clean(resumeName),
    status: "applied",
    appliedDate: today(),
  }
}

export default function LogApplicationButton({
  currentTabJob,
  disabled = false,
  page = false,
}) {
  const href = window.location.href
  const resumeState = useResumeStore((state) => state)
  const autofillInfo = useAutofillInfoStore((state) => state.autofillInfo)
  const profileCountry = useAutofillInfoStore((state) => state.country)
  const fetchAutofillInfo = useAutofillInfoStore((state) => state.fetchAutofillInfo)
  const resumeName = selectedResumeName(resumeState, autofillInfo)
  const [open, setOpen] = useState(Boolean(page))
  const [draft, setDraft] = useState(() => detectedDraft(currentTabJob, resumeName, profileCountry))
  const [status, setStatus] = useState("idle")
  const [detail, setDetail] = useState("")
  const [connectUrl, setConnectUrl] = useState("")
  const edited = useRef(false)
  const seenHref = useRef("")

  useEffect(() => {
    fetchAutofillInfo?.().catch(() => {})
  }, [href])

  useEffect(() => {
    const next = detectedDraft(currentTabJob, resumeName, profileCountry)
    if (seenHref.current !== href) {
      seenHref.current = href
      edited.current = false
      setDraft(next)
      setStatus("idle")
      setDetail("")
      return
    }
    setDraft((current) => {
      const merged = { ...current }
      for (const key of Object.keys(next)) {
        if (!clean(merged[key]) && clean(next[key])) merged[key] = next[key]
      }
      return merged
    })
  }, [
    href,
    resumeName,
    profileCountry,
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
    setConnectUrl("")
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
      if (response?.sheetNotConnected) setConnectUrl(response.connectUrl || "")
      if (!response?.ok) {
        setStatus("error")
        setDetail(response?.message || "Could not log")
      } else if (response.sheetNotConnected) {
        setStatus("logged")
        setDetail("Saved to Qyvarex. Connect Google Sheets to also add it to your own sheet.")
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

  const summary = [draft.title, draft.company].filter(Boolean).join(" · ")
  const showForm = page || open
  return jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      width: "100%",
      marginTop: page ? 0 : 8,
      padding: 10,
      border: "1px solid #d1fae5",
      borderRadius: 12,
      background: "#f0fdf4",
      boxSizing: "border-box",
    },
    children: [
      page
        ? null
        : jsxs("button", {
        type: "button",
        onClick: () => setOpen((value) => !value),
        "aria-expanded": open,
        "aria-label": open ? "Hide Google Sheet details" : "Show Google Sheet details",
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          width: "100%",
          minHeight: 48,
          padding: "4px 2px",
          border: 0,
          background: "transparent",
          cursor: "pointer",
          textAlign: "left",
        },
        children: [
          jsx("span", {
            "aria-hidden": true,
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              flexShrink: 0,
              borderRadius: 10,
              background: "#12b76a",
              color: "#fff",
            },
            children: jsx("svg", {
              width: 20,
              height: 20,
              viewBox: "0 0 20 20",
              fill: "none",
              children: jsx("path", {
                d: "M4 3.5h8.5L16 7v9.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z M12.5 3.5V7H16 M5.5 10.5h9 M5.5 13.5h9",
                stroke: "currentColor",
                strokeWidth: 1.6,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          }),
          jsxs("span", {
            style: { display: "flex", flexDirection: "column", gap: 2, minWidth: 0, flex: 1 },
            children: [
              jsx("span", {
                style: {
                  font: "600 14px/18px Inter, -apple-system, sans-serif",
                  color: "#064e3b",
                },
                children: "Google Sheet",
              }),
              !open && summary
                ? jsx("span", {
                    style: {
                      font: "500 13px/18px Inter, -apple-system, sans-serif",
                      color: "#3f6212",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    },
                    children: summary,
                  })
                : null,
            ],
          }),
          jsx("span", {
            "aria-hidden": true,
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              flexShrink: 0,
              borderRadius: 999,
              background: "#fff",
              color: "#047857",
              border: "1px solid #a7f3d0",
            },
            children: jsx("svg", {
              width: 20,
              height: 20,
              viewBox: "0 0 20 20",
              fill: "none",
              style: {
                display: "block",
                transform: open ? "none" : "rotate(180deg)",
                transition: "transform .15s ease",
              },
              children: jsx("path", {
                d: "M5 7.5 10 12.5 15 7.5",
                stroke: "currentColor",
                strokeWidth: 2.2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          }),
        ],
      }),
      showForm
        ? jsxs("div", {
            style: { display: "flex", flexDirection: "column", gap: 10 },
            children: [
              ...FIELDS.map(([key, label]) =>
                jsxs(
                  "label",
                  {
                    style: { display: "flex", flexDirection: "column", gap: 4 },
                    children: [
                      jsx("span", {
                        style: {
                          font: "600 12px/16px Inter, -apple-system, sans-serif",
                          color: "#3f6212",
                        },
                        children: label,
                      }),
                      jsx("input", {
                        type: key === "appliedDate" ? "date" : "text",
                        value: draft[key],
                        disabled: busy,
                        onChange: (event) => updateField(key, event.target.value),
                        style: {
                          width: "100%",
                          boxSizing: "border-box",
                          border: "1px solid #bbf7d0",
                          borderRadius: 10,
                          padding: "9px 10px",
                          font: "400 13px/18px Inter, -apple-system, sans-serif",
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
                  borderRadius: 10,
                  minHeight: 42,
                  padding: "10px 14px",
                  background: busy ? "#94a3b8" : "#0b6e4f",
                  color: "#fff",
                  font: "600 14px/20px Inter, -apple-system, sans-serif",
                  cursor: busy ? "default" : "pointer",
                },
                children: buttonLabel,
              }),
              detail
                ? jsx("div", {
                    style: {
                      font: "500 13px/18px Inter, -apple-system, sans-serif",
                      color: status === "error" ? "#b91c1c" : "#0b6e4f",
                    },
                    children: detail,
                  })
                : null,
              connectUrl
                ? jsx("a", {
                    href: connectUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      font: "600 13px/18px Inter, -apple-system, sans-serif",
                      color: "#0b6e4f",
                      textDecoration: "underline",
                    },
                    children: "Connect Google Sheets",
                  })
                : null,
            ],
          })
        : null,
    ],
  })
}
