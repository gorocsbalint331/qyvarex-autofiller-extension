/**
 * Logs submitted applications to the hub Google Sheet: a submit click on a job
 * form arms the tab, and a later "application received" page (same document
 * or after navigation) confirms it.
 */

import { sendToBackground } from "@plasmohq/messaging"

import { scrapeGenericJobData } from "~core/genericJobScraper"
import { extractSalaryRange } from "~lib/salary"

const SUBMIT_LABEL_RE =
  /^(submit|apply|send application|submit application|submit my application|finish|complete application)\b|\b(submit application|apply now|send application)\b/i
const SUCCESS_RE =
  /thank(s| you) for (applying|your application|submitting)|application (has been |was )?(successfully )?(received|submitted|sent|completed?)|we('ve| have) received your application|successfully (applied|submitted)|your application (is on its way|has been sent)|you('ve| have) (successfully )?applied/i
const SUCCESS_URL_RE = /thank|success|confirmation|submitted|application-complete/i
const PLATFORM_NAME_RE =
  /^(ashby|bamboohr|breezy hr|greenhouse|icims|jobvite|lever|linkedin|recruitee|smartrecruiters|taleo|workable|workday|careers?|jobs?|job details|apply)$/i
const TITLE_SELECTORS = [
  '[data-automation-id="jobPostingHeader"]',
  ".posting-headline h2",
  '[data-testid="job-title"]',
  ".app-title",
  ".job-title",
  "h1"
]

const WATCH_AFTER_SUBMIT_MS = 60_000
const WATCH_AFTER_LOAD_MS = 15_000
const CHECK_THROTTLE_MS = 500

function cleanText(text: string | null | undefined) {
  return (text || "").replace(/\s+/g, " ").trim()
}

function pageText() {
  return document.body?.innerText || ""
}

function successPhrases(text: string): Set<string> {
  const global = new RegExp(SUCCESS_RE.source, "gi")
  return new Set([...text.matchAll(global)].map((m) => m[0].toLowerCase()))
}

function scrapeTitle(): string {
  for (const selector of TITLE_SELECTORS) {
    const el = document.querySelector<HTMLElement>(selector)
    const text = cleanText(el?.innerText)
    if (el && !el.closest('[id^="jobright"], plasmo-csui') && text.length >= 3 && text.length <= 200) {
      return text
    }
  }
  return cleanText(scrapeGenericJobData().jobTitle)
}

function scrapeCompany(title: string): string {
  const siteName = cleanText(
    document.querySelector<HTMLMetaElement>('meta[property="og:site_name"]')?.content
  )
  if (siteName && !PLATFORM_NAME_RE.test(siteName)) return siteName
  const heading =
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content ||
    document.title
  const part = heading
    .split(/\s+[-–—|·•]\s+|\s+at\s+/i)
    .map(cleanText)
    .find((p) => p && p.toLowerCase() !== title.toLowerCase() && !PLATFORM_NAME_RE.test(p))
  return part || cleanText(scrapeGenericJobData().companyName)
}

function scrapeSalaryText(): string {
  const range = extractSalaryRange(pageText())
  if (!range) return ""
  return [`${range.min}-${range.max}`, range.currency, range.period === "year" ? "" : `per ${range.period}`]
    .filter(Boolean)
    .join(" ")
}

export function scrapeApplicationMeta() {
  const title = scrapeTitle()
  return {
    title: title || "Untitled role",
    company: scrapeCompany(title),
    link: window.location.href,
    cost: scrapeSalaryText()
  }
}

function showToast(message: string) {
  if (!document.body) return
  const host = document.createElement("div")
  host.style.cssText = "all: initial; position: fixed; z-index: 2147483647; right: 16px; bottom: 16px;"
  const shadow = host.attachShadow({ mode: "closed" })
  const toast = document.createElement("div")
  toast.textContent = message
  toast.style.cssText =
    "font: 500 13px/18px Inter, -apple-system, sans-serif; color: #fff; background: #111827; padding: 10px 14px; border-radius: 10px; box-shadow: 0 6px 24px rgba(0,0,0,.2);"
  shadow.appendChild(toast)
  document.body.appendChild(host)
  window.setTimeout(() => host.remove(), 4000)
}

async function confirmSubmission() {
  try {
    const result = await sendToBackground({ name: "confirmApplicationLog" })
    if (result?.ok && !result.duplicate) {
      showToast(`Logged to Google Sheet${result.tabName ? ` (${result.tabName})` : ""}`)
    } else if (result?.ok === false && result.message && result.message !== "not_armed") {
      console.warn("[qyvarex] application log failed", result.message)
      showToast(`Could not log to Google Sheet: ${result.message}`)
    }
  } catch (error) {
    console.warn("[qyvarex] application log failed", error)
  }
}

/** Watch for a success message that wasn't on the page when watching started. */
function watchForSuccess(durationMs: number, baseline: Set<string>, startHref: string) {
  const until = Date.now() + durationMs
  let lastCheck = 0
  let done = false
  let observer: MutationObserver | null = null
  let timer: number | undefined

  const stop = () => {
    done = true
    observer?.disconnect()
    window.clearTimeout(timer)
  }
  const check = () => {
    if (done) return
    if (Date.now() > until) return stop()
    const now = Date.now()
    if (now - lastCheck < CHECK_THROTTLE_MS) {
      window.clearTimeout(timer)
      timer = window.setTimeout(check, CHECK_THROTTLE_MS)
      return
    }
    lastCheck = now
    const fresh = [...successPhrases(pageText())].some((p) => !baseline.has(p))
    const movedToSuccessUrl =
      window.location.href !== startHref && SUCCESS_URL_RE.test(window.location.pathname)
    if (fresh || movedToSuccessUrl) {
      stop()
      void confirmSubmission()
    }
  }

  observer = new MutationObserver(check)
  observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true })
  check()
  window.setTimeout(check, 2000)
  window.setTimeout(stop, durationMs)
}

/**
 * @param isApplicationPage whether this frame is a job application page
 *   (submit clicks elsewhere are ignored).
 */
export function startApplicationLogWatcher(isApplicationPage: () => boolean) {
  if ((globalThis as any).__qyvarexApplicationLogWatcher) return
  ;(globalThis as any).__qyvarexApplicationLogWatcher = true

  // Arrived on a new document (e.g. /thanks) after submitting on the previous one.
  watchForSuccess(WATCH_AFTER_LOAD_MS, new Set(), "")

  document.addEventListener(
    "click",
    (event) => {
      if ((globalThis as any).__qyvarexFilling) return
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('[id^="jobright"], plasmo-csui')) return
      const button = target.closest('button, [role="button"], input[type="submit"], a')
      if (!button) return
      const label = cleanText(
        button.textContent || button.getAttribute("aria-label") || button.getAttribute("value")
      )
      if (!label || label.length > 60 || !SUBMIT_LABEL_RE.test(label)) return
      // "Apply for this job" links open the form; only real submits arm.
      if (button.tagName === "A" && !/submit/i.test(label)) return
      if (!isApplicationPage()) return

      void sendToBackground({
        name: "armApplicationLog",
        body: scrapeApplicationMeta()
      }).catch(() => {})
      watchForSuccess(WATCH_AFTER_SUBMIT_MS, successPhrases(pageText()), window.location.href)
    },
    true
  )
}
