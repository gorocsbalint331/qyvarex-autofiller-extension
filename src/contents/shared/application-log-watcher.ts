/**
 * Logs submitted applications to the hub Google Sheet: a submit click on a job
 * form arms the tab, and a later "application received" page (same document
 * or after navigation) confirms it.
 */

import { sendToBackground } from "@plasmohq/messaging"

import { scrapeGenericJobData } from "~core/genericJobScraper"
import { companyBesideTitle } from "~lib/job-context"
import { extractSalaryRange, formatSalaryRangeLabel } from "~lib/salary"

const SUBMIT_LABEL_RE =
  /^(submit|apply|send application|submit application|submit my application|finish|complete application|enviar solicitud|enviar candidatura)\b|\b(submit application|apply now|send application|enviar solicitud|bewerben|bewerbung absenden)\b/i
const SUCCESS_RE =
  /thank(s| you) for (applying|your application|submitting)|application (has been |was )?(successfully )?(received|submitted|sent|completed?)|we('ve| have) received your application|successfully (applied|submitted)|your application (is on its way|has been sent)|you('ve| have) successfully applied|vielen dank für (?:deine|ihre) bewerbung|bewerbung (?:wurde|ist) (?:erfolgreich )?(?:eingereicht|gesendet|abgeschickt|übermittelt)|deine bewerbung ist (?:unterwegs|eingegangen)/i
const EMAIL_CONFIRM_RE =
  /check your (?:e-?mail|inbox)|verify your (?:e-?mail|email address)|confirmation (?:e-?mail|email)|we(?:'ve| have) sent (?:you )?an? (?:e-?mail|email)|te hemos enviado|revisa tu correo|confirma tu (?:correo|e-?mail)|correo de confirmaci[oó]n/i
const FAILURE_RE =
  /couldn'?t submit|could not submit|cannot submit|can'?t submit|unable to submit|was not submitted|not been submitted|limiting applications|you cannot submit|did not go through|error submitting/i
const SUCCESS_URL_RE = /thank|success|confirmation|submitted|application-complete/i
const PLATFORM_NAME_RE =
  /^(ashby|bamboohr|breezy hr|comeet|greenhouse|icims|jobvite|lever|linkedin|pinpoint(?:hq)?|recruitee|smartrecruiters|spark hire(?: recruit(?: jobs)?)?|taleo|workable|workday|careers?|jobs?|job details|apply|application|new application)$/i
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

function emailConfirmPhrases(text: string): string[] {
  return [...text.matchAll(new RegExp(EMAIL_CONFIRM_RE.source, "gi"))].map((match) =>
    match[0].toLowerCase()
  )
}

function isGenericTitle(text: string) {
  return PLATFORM_NAME_RE.test(text)
}

function companyFromHost(): string {
  const host = location.hostname.toLowerCase()
  const pinpoint = host.match(/^([a-z0-9-]+)\.pinpointhq\.com$/)
  if (!pinpoint || pinpoint[1] === "www" || pinpoint[1] === "app") return ""
  return pinpoint[1]
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function scrapeTitle(): string {
  for (const selector of TITLE_SELECTORS) {
    for (const el of document.querySelectorAll<HTMLElement>(selector)) {
      const text = cleanText(el.innerText)
      if (el.closest('[id^="jobright"], plasmo-csui')) continue
      if (text.length < 3 || text.length > 200 || isGenericTitle(text)) continue
      return text
    }
  }
  const ogTitle = cleanText(
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content
  )
  if (ogTitle && !isGenericTitle(ogTitle)) return ogTitle
  const scraped = cleanText(scrapeGenericJobData().jobTitle)
  return isGenericTitle(scraped) ? "" : scraped
}

function scrapeCompany(title: string): string {
  const fromHost = companyFromHost()
  if (fromHost) return fromHost
  const siteName = cleanText(
    document.querySelector<HTMLMetaElement>('meta[property="og:site_name"]')?.content
  )
  if (
    siteName &&
    !PLATFORM_NAME_RE.test(siteName) &&
    !/^(jobs by|careers at)\b/i.test(siteName) &&
    siteName.toLowerCase() !== title.toLowerCase()
  ) {
    return siteName
  }
  const heading =
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content ||
    document.title
  return companyBesideTitle(heading, title) || cleanText(scrapeGenericJobData().companyName)
}

function controlLabel(control: HTMLElement): string {
  const id = control.getAttribute("id")
  if (id) {
    const label = document.querySelector(`label[for="${CSS.escape(id)}"]`)
    const text = cleanText(label?.textContent)
    if (text) return text
  }
  const row = control.closest(
    ".crc-form-row, .field, .form-group, fieldset, [class*='form-field'], [class*='question']"
  )
  return cleanText(row?.querySelector("label, legend")?.textContent)
}

function scrapeEmbeddedJobSalary(): string {
  for (const script of document.scripts) {
    const text = script.textContent || ""
    if (!/Salary/.test(text)) continue
    const match = text.match(/["']Salary["']\s*:\s*(null|"([^"]*)"|\\?"([^"\\]*)\\?")/)
    const value = cleanText(match?.[2] || match?.[3] || "")
    if (!value || value === "null" || !/\d/.test(value)) continue
    const range = extractSalaryRange(value)
    return range ? formatSalaryRangeLabel(range) : value.slice(0, 80)
  }
  return ""
}

function scrapeFilledSalary(): string {
  const controls = document.querySelectorAll("input, textarea")
  for (const control of controls) {
    if (
      !(control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement) ||
      control.disabled ||
      /hidden|file|checkbox|radio|password/.test(control.type)
    ) {
      continue
    }
    const value = cleanText(control.value)
    if (!value || !/\d/.test(value)) continue
    const label = controlLabel(control).toLowerCase()
    if (!/\b(salary|compensation|ctc|remuneration)\b/.test(label)) continue
    if (/\b(current|previous|last)\b/.test(label)) continue
    const amount = value.replace(/[^\d.]/g, "")
    if (!amount) continue
    const period = /\bmonth/.test(label)
      ? "per month"
      : /\bhour/.test(label)
        ? "per hour"
        : ""
    return [amount, period].filter(Boolean).join(" ")
  }
  return ""
}

function scrapeSalaryText(): string {
  const range = extractSalaryRange(pageText())
  if (range) return formatSalaryRangeLabel(range)
  return scrapeEmbeddedJobSalary() || scrapeFilledSalary()
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
  let lastMessage = ""
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const result = await sendToBackground({
        name: "confirmApplicationLog",
        body: scrapeApplicationMeta(),
      })
      if (result?.ok && !result.duplicate) {
        showToast(`Logged to Google Sheet${result.tabName ? ` (${result.tabName})` : ""}`)
        return
      }
      if (result?.ok) return
      lastMessage = result?.message || ""
      if (lastMessage === "not_armed") return
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      if (/extension context invalidated|receiving end does not exist/i.test(message)) {
        showToast("Refresh this page, then submit again to log the application")
        return
      }
      lastMessage = message
      console.warn("[qyvarex] application log failed", message)
    }
    await new Promise((resolve) => window.setTimeout(resolve, 800 * (attempt + 1)))
  }
  if (lastMessage) showToast(`Could not log to Google Sheet: ${lastMessage}`)
}

function leftApplyForm(startHref: string) {
  if (!startHref || window.location.href === startHref) return false
  try {
    const before = new URL(startHref)
    const after = new URL(window.location.href)
    const applyPath = /\/(apply|application)\/?$/i
    return applyPath.test(before.pathname) && !applyPath.test(after.pathname)
  } catch {
    return false
  }
}

/** Watch for a success message that wasn't on the page when watching started. */
function applicationWasRejected(text: string) {
  return FAILURE_RE.test(text)
}

function watchForSuccess(
  durationMs: number,
  baseline: Set<string>,
  startHref: string,
  allowEmailConfirm = false,
  logOnLeave = false
) {
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
    const text = pageText()
    if (applicationWasRejected(text)) return
    const fresh = [...successPhrases(text)].some((phrase) => !baseline.has(phrase))
    const emailConfirm =
      allowEmailConfirm && emailConfirmPhrases(text).some((phrase) => !baseline.has(phrase))
    const movedToSuccessUrl =
      window.location.href !== startHref && SUCCESS_URL_RE.test(window.location.pathname)
    const movedOffApply = logOnLeave && leftApplyForm(startHref)
    if (fresh || emailConfirm || movedToSuccessUrl || movedOffApply) {
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
/** Remember this page as a submitted application and watch for the confirmation. */
export function armSubmittedApplication() {
  void sendToBackground({
    name: "armApplicationLog",
    body: scrapeApplicationMeta()
  }).catch(() => {})
  const text = pageText()
  watchForSuccess(
    WATCH_AFTER_SUBMIT_MS,
    new Set([...successPhrases(text), ...emailConfirmPhrases(text)]),
    window.location.href,
    true,
    true
  )
}

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
      const text = pageText()
      watchForSuccess(
        WATCH_AFTER_SUBMIT_MS,
        new Set([...successPhrases(text), ...emailConfirmPhrases(text)]),
        window.location.href,
        true,
        true
      )
    },
    true
  )
}
