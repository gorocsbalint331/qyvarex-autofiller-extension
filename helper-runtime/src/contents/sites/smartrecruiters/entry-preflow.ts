// @ts-nocheck
/**
 * SmartRecruiters — pre-autofill entry flow (detail → application).
 */

import * as accountFlowState from "../../pre-autofill-flow/account-flow-state.js"
import * as preAutofillDom from "../../pre-autofill-flow/dom.js"

const FLOW_ID = "smartrecruiters-entry"
const JOBS_ORIGIN = "https://jobs.smartrecruiters.com"
const APPLICATION_PATH_RE =
  /^\/oneclick-ui\/company\/([^/]+)\/publication\/[^/]+\/?$/

function parseJobsUrl(urlString) {
  try {
    const url = new URL(urlString)
    return url.origin === JOBS_ORIGIN ? url : null
  } catch {
    return null
  }
}

function normalizeApplicationUrl(urlString) {
  const url = parseJobsUrl(urlString)
  return url && APPLICATION_PATH_RE.test(url.pathname)
    ? url.origin + url.pathname.replace(/\/$/, "")
    : null
}

const smartRecruitersEntrySession = accountFlowState.createOneShotSessionStore({
  storageKey: "jobright:smartrecruiters:entry-autofill",
  ttlMs: 3e5,
  validatePayload: (payload) =>
    "string" == typeof payload && normalizeApplicationUrl(payload) === payload,
})

function findApplicationEntryLink({ url, document: doc }) {
  const pageUrl = parseJobsUrl(url)
  const companyMatch = pageUrl?.pathname.match(/^\/([^/]+)\/\d+[^/]*\/?$/)
  if (!companyMatch) return null
  const links = Array.from(
    doc.querySelectorAll('a#st-apply, a[data-sr-track="apply"]'),
  ).filter((anchor) => {
    const hrefUrl = parseJobsUrl(anchor.href)
    return (
      hrefUrl?.pathname.match(APPLICATION_PATH_RE)?.[1] === companyMatch[1] &&
      !anchor.hasAttribute("download") &&
      (!anchor.target || "_self" === anchor.target) &&
      "true" !== anchor.getAttribute("aria-disabled") &&
      preAutofillDom.isVisiblePreAutofillElement(anchor)
    )
  })
  const uniqueHrefs = new Set(
    links.map((anchor) => normalizeApplicationUrl(anchor.href)),
  )
  return 1 === uniqueHrefs.size ? links[0] : null
}

function hasVisibleEditableInput(root) {
  const input = root.querySelector(
    'input:not([type="hidden"]):not([disabled]):not([readonly])',
  )
  return (
    !!(
      (input && preAutofillDom.isVisiblePreAutofillElement(input)) ||
      ("shadowRoot" in root &&
        root.shadowRoot &&
        hasVisibleEditableInput(root.shadowRoot))
    ) ||
    Array.from(root.querySelectorAll("*")).some(
      (element) =>
        element.shadowRoot && hasVisibleEditableInput(element.shadowRoot),
    )
  )
}

function isApplicationFormReady({ document: doc }) {
  const personalInfo = doc.querySelector("oc-personal-information")
  return !!(personalInfo && hasVisibleEditableInput(personalInfo))
}

function createSmartRecruitersEntryAdapter({
  session,
  waitForForm,
}) {
  const isReadyApplicationPage = (context) => {
    const applicationUrl = normalizeApplicationUrl(context.url)
    return !!(
      applicationUrl &&
      session.peek()?.payload === applicationUrl &&
      isApplicationFormReady(context)
    )
  }

  const waitForApplicationForm =
    waitForForm ??
    ((context) =>
      new Promise((resolve) => {
        const finish = (ready) => {
          clearInterval(pollId)
          clearTimeout(timeoutId)
          context.document.removeEventListener("CancelAutoFill", onCancel)
          context.signal?.removeEventListener("abort", onCancel)
          resolve(ready)
        }
        const onCancel = () => finish(false)
        const pollId = setInterval(() => {
          if (
            isReadyApplicationPage({
              ...context,
              url: context.document.location.href,
            })
          ) {
            finish(true)
          }
        }, 250)
        const timeoutId = setTimeout(() => finish(false), 15e3)
        context.document.addEventListener("CancelAutoFill", onCancel, {
          once: true,
        })
        context.signal?.addEventListener("abort", onCancel, { once: true })
        if (context.signal?.aborted) onCancel()
      }))

  return {
    flowId: FLOW_ID,
    detect(context) {
      if ("smartrecruiters" !== context.targetName) return null
      const pageKind = findApplicationEntryLink(context)
        ? "detail"
        : isReadyApplicationPage(context)
          ? "application"
          : null
      return pageKind
        ? {
            flowId: FLOW_ID,
            pageKind,
            ctaText: "Autofill",
          }
        : null
    },
    shouldResume: (context) => isReadyApplicationPage(context),
    async start(context) {
      if (context.signal?.aborted) {
        session.clear()
        throw Error("SmartRecruiters entry cancelled")
      }
      if (!isReadyApplicationPage(context)) {
        const entryLink = findApplicationEntryLink(context)
        const entryUrl = entryLink && normalizeApplicationUrl(entryLink.href)
        console.info("[SmartRecruiters][Entry] navigation-check", {
          entryFound: !!entryLink,
          pending: !!session.peek(),
        })
        if (!entryLink || !entryUrl) {
          throw Error("SmartRecruiters application entry unavailable")
        }
        try {
          if (session.peek()?.payload !== entryUrl) {
            session.save(entryUrl)
            if (session.peek()?.payload !== entryUrl) {
              throw Error("SmartRecruiters entry session unavailable")
            }
            console.info(
              "[SmartRecruiters][Entry] click-application-entry",
            )
            entryLink.click()
          }
          if (!(await waitForApplicationForm(context))) {
            throw Error("SmartRecruiters entry timed out or cancelled")
          }
        } catch (error) {
          session.clear()
          console.warn("[SmartRecruiters][Entry] navigation-stopped", {
            reason: String(error),
          })
          throw error
        }
      }
      const currentUrl =
        context.document.location?.href || context.url
      if (
        !isReadyApplicationPage({
          ...context,
          url: currentUrl,
        })
      ) {
        session.clear()
        throw Error("SmartRecruiters application is not ready")
      }
      if (session.consume()) {
        console.info(
          "[SmartRecruiters][Entry] resume-standard-autofill",
        )
        await context.startStandardAutofill()
      }
    },
  }
}

const smartRecruitersEntryAdapter = createSmartRecruitersEntryAdapter({
  session: smartRecruitersEntrySession,
})

export {
  createSmartRecruitersEntryAdapter,
  smartRecruitersEntryAdapter,
  smartRecruitersEntrySession,
}
