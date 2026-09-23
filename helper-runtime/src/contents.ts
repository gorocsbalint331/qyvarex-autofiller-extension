// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/contents.js).
 * Content-script entry: early jr_id retention, runtime activation, helper bootstrap.
 */
import {
  sendToBackground,
} from "@plasmohq/messaging"
import {
  waitForCloudflareManagedChallengePage,
  removeCloudflareChallengeInjectedHost,
} from "./core/cloudflare-challenge.ts"
import {
  ATTRIBUTION_RESPONSE_EVENT,
} from "../utils/autofill-install-attribution.ts"
import {
  acceptAutofillInstallAttribution,
  flushAutofillInstallAttribution,
} from "../utils/autofill-install-attribution-client.ts"
import {
  initializeAutofillInstallAttributionBridge,
} from "./shared/autofill-install-attribution-bridge.ts"
import {
  buildLifeAtTikTokApplyUrl,
  shouldKeepLifeAtTikTokApplyBridge,
  shouldRetainLifeAtTikTokJobDetailJrId,
  shouldRecoverLifeAtTikTokJobDetailJrId,
  buildLifeAtTikTokRecoveredUrl,
  normalizeEarlyJobrightUrl,
} from "./shared/early-url-normalization.ts"
import {
  visitChangedAnchors,
} from "./shared/incremental-anchor-observer.ts"
import {
  isParcelRequire,
  findModuleExportFromParcelRequires,
} from "./shared/parcel-runtime.ts"
import {
  getRuntimeActivationReason,
  observeRuntimeActivationSignals,
} from "./shared/runtime-activation.ts"
import {
  keepJobIdInUrl,
} from "./shared/sticky-job-id.ts"
import * as helperAppUrlModule from "url:./shared/helper-app"

function interopDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod }
}

const helperAppBundleUrl = interopDefault(helperAppUrlModule)

export const HOST_ID = "jobright-helper-plugin"
const BOOTSTRAP_ENTRY_ACTIVE_KEY = "__jobrightHelperBootstrapEntryActive"
const AUTOFILL_INSTANCE_KEY = "__jobrightAutofillInstance"
const GET_AUTOFILL_INSTANCE_KEY = "__jobrightGetAutofillInstance"
const JOB_ID_QUERY_KEY = "jr_id"

let runtimeStartPromise = null
let stopRuntimeActivationObserver = null
let removeUrlUpdatedListener = null
let teardownAttributionBridge = null

function ensureAutofillInstallAttributionBridge() {
  if (teardownAttributionBridge) return
  let responseListener = null
  teardownAttributionBridge = initializeAutofillInstallAttributionBridge({
    origin: window.location.origin,
    isTopFrame: window.top === window.self,
    addResponseListener: (onDetail) => {
      responseListener = (event) => onDetail(event.detail)
      document.addEventListener(ATTRIBUTION_RESPONSE_EVENT, responseListener)
    },
    removeResponseListener: () => {
      if (responseListener) {
        document.removeEventListener(ATTRIBUTION_RESPONSE_EVENT, responseListener)
      }
      responseListener = null
    },
    dispatch: (eventName, detail) => {
      document.dispatchEvent(
        new CustomEvent(eventName, {
          detail,
        }),
      )
    },
    accept: acceptAutofillInstallAttribution,
    flush: flushAutofillInstallAttribution,
    schedule: (callback, delayMs) => setTimeout(callback, delayMs),
    cancelScheduled: (timerId) => clearTimeout(timerId),
    logWarning: (reason) => {
      console.warn("[AutofillInstallAttribution] bridge failed", {
        reason,
      })
    },
  })
  window.addEventListener("pagehide", () => teardownAttributionBridge?.(), {
    once: true,
  })
}

export const config = {
  matches: ["<all_urls>"],
  all_frames: true,
  exclude_matches: [
    "*://*.cloudflare.com/*",
    "https://li.protechts.net/*",
    "https://cs.ns1p.net/*",
    "https://merchantpool1.linkedin.com/*",
    "https://www.googletagmanager.com/*",
    "https://*.fls.doubleclick.net/activityi*",
    "https://li.protechts.net/*",
    "https://lnkd.demdex.net/*",
    "https://www.google.com/recaptcha/enterprise/*",
    "https://crcldu.com/*",
  ],
  run_at: "document_start",
}

const initialSearchParams = new URLSearchParams(window.location.search)
export let jobId = initialSearchParams.get(JOB_ID_QUERY_KEY)
export const agentTailorId = initialSearchParams.get("a_t_id")
export const agentResumeId = initialSearchParams.get("a_r_id")
export const agentOriginalResume =
  "true" === initialSearchParams.get("useOriginalResume")

export function setCurrentJobId(nextJobId) {
  jobId = nextJobId || null
}

export function setAutofillInstance(instance) {
  globalThis[AUTOFILL_INSTANCE_KEY] = instance
}

export function getAutofillInstance() {
  let globalObject = globalThis
  let getter = globalObject[GET_AUTOFILL_INSTANCE_KEY]
  return "function" == typeof getter
    ? getter()
    : globalObject[AUTOFILL_INSTANCE_KEY] || null
}

export function cancelAutofillInstance(instance) {
  if (instance) {
    if ("function" == typeof instance.cancel) instance.cancel()
    else if ("function" == typeof instance.cancelAutoFill) instance.cancelAutoFill()
  }
}

const EARLY_CATSONE_CLICK_INJECTOR_ACTIVE =
  "__jobrightEarlyCatsoneClickInjectorActive"
const EARLY_CATSONE_DURATION_MS = 1e4
const EARLY_CATSONE_FALLBACK_INTERVAL_MS = 250
const EARLY_GOOGLE_CAREERS_JR_ID_RETENTION_ACTIVE =
  "__jobrightEarlyGoogleCareersJrIdRetentionActive"
const EARLY_GOOGLE_CAREERS_DURATION_MS = 1e4
const EARLY_GOOGLE_CAREERS_INTERVAL_MS = 50
const EARLY_GOOGLE_CAREERS_MAX_RESTORATIONS = 5
const EARLY_LIFE_AT_TIKTOK_JR_ID_RETENTION_ACTIVE =
  "__jobrightEarlyLifeAtTikTokJrIdRetentionActive"
const EARLY_LIFE_AT_TIKTOK_DURATION_MS = 1e4
const EARLY_LIFE_AT_TIKTOK_INTERVAL_MS = 50
const EARLY_LIFE_AT_TIKTOK_MAX_RESTORATIONS = 5
const EARLY_LIFE_AT_TIKTOK_CLICK_INJECTOR_ACTIVE =
  "__jobrightEarlyLifeAtTikTokClickInjectorActive"
const EARLY_LIFE_AT_TIKTOK_CLICK_DURATION_MS = 1e4
const EARLY_LIFE_AT_TIKTOK_CLICK_FALLBACK_INTERVAL_MS = 250

function isCatsoneHost(hostname) {
  let lower = hostname.toLowerCase()
  return "catsone.com" === lower || lower.endsWith(".catsone.com")
}

function isGoogleHost(hostname) {
  let lower = hostname.toLowerCase()
  return "google.com" === lower || lower.endsWith(".google.com")
}

function readJobIdFromLocation() {
  try {
    return (
      new URL(window.location.href).searchParams.get(JOB_ID_QUERY_KEY)?.trim() ||
      null
    )
  } catch {
    return null
  }
}

function isCatsoneApplyUrl(url) {
  return (
    isCatsoneHost(url.hostname) &&
    /^\/careers\/[^/]+\/jobs\/[^/]+\/apply\/?$/.test(url.pathname)
  )
}

function isGoogleCareersApplyUrl(url) {
  return (
    isGoogleHost(url.hostname) &&
    /^\/about\/careers\/applications\/(?:u\/\d+\/)?apply\/?$/.test(url.pathname)
  )
}

function isApplyAnchorLabel(anchor) {
  let text = (anchor.textContent || "").replace(/\s+/g, " ").trim()
  let ariaLabel = (anchor.getAttribute("aria-label") || "")
    .replace(/\s+/g, " ")
    .trim()
  return /^apply(?: now)?$/i.test(text) || /^apply(?: now)?$/i.test(ariaLabel)
}

function findAnchorFromClickEvent(event) {
  let path = event.composedPath?.() ?? []
  for (let node of path) {
    let element = node
    if (element?.tagName === "A") return element
  }
  return null
}

function rewriteCatsoneApplyAnchor(anchor, retainedJobId) {
  let applyUrl
  if (!retainedJobId || !anchor.href || anchor.hasAttribute("download")) {
    return false
  }
  try {
    applyUrl = new URL(anchor.href)
  } catch {
    return false
  }
  return (
    !!isCatsoneApplyUrl(applyUrl) &&
    (!!applyUrl.searchParams.has(JOB_ID_QUERY_KEY) ||
      (!!isApplyAnchorLabel(anchor) &&
        (applyUrl.searchParams.set(JOB_ID_QUERY_KEY, retainedJobId),
        (anchor.href = applyUrl.toString()),
        (anchor.referrerPolicy = "unsafe-url"),
        true)))
  )
}

function startEarlyJrIdAnchorInjector({
  activeFlag,
  durationMs,
  fallbackIntervalMs,
  isEligible,
  label,
  rewriteAnchor,
}) {
  let globalObject = globalThis
  if (globalObject[activeFlag] || !isEligible() || !readJobIdFromLocation()) {
    return
  }
  globalObject[activeFlag] = true
  let rewriteAllAnchors = () => {
    let retainedJobId = isEligible() ? readJobIdFromLocation() : null
    if (retainedJobId) {
      for (let anchor of document.querySelectorAll("a[href]")) {
        rewriteAnchor(anchor, retainedJobId)
      }
    }
  }
  let onClickCapture = (event) => {
    try {
      let retainedJobId = isEligible() ? readJobIdFromLocation() : null
      if (!retainedJobId) return
      let anchor = findAnchorFromClickEvent(event)
      if (!anchor) return
      rewriteAnchor(anchor, retainedJobId)
    } catch (error) {
      console.warn(`[jobright] early ${label} jr_id injector failed:`, error)
    }
  }
  document.addEventListener("click", onClickCapture, true)
  rewriteAllAnchors()
  let mutationObserver = null
  let fallbackIntervalId = null
  let stopTimeoutId = null
  if ("undefined" != typeof MutationObserver && document.documentElement) {
    mutationObserver = new MutationObserver((mutations) => {
      let retainedJobId = isEligible() ? readJobIdFromLocation() : null
      if (retainedJobId) {
        visitChangedAnchors(mutations, (anchor) => {
          rewriteAnchor(anchor, retainedJobId)
        })
      }
    })
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["aria-label", "href"],
      childList: true,
      characterData: true,
      subtree: true,
    })
  } else {
    fallbackIntervalId = setInterval(rewriteAllAnchors, fallbackIntervalMs)
  }
  let stop = () => {
    mutationObserver?.disconnect()
    mutationObserver = null
    if (null !== fallbackIntervalId) {
      clearInterval(fallbackIntervalId)
      fallbackIntervalId = null
    }
    if (null !== stopTimeoutId) {
      clearTimeout(stopTimeoutId)
      stopTimeoutId = null
    }
  }
  stopTimeoutId = setTimeout(stop, durationMs)
  window.addEventListener("pagehide", stop, {
    once: true,
  })
}

function startEarlyCatsoneClickInjector() {
  startEarlyJrIdAnchorInjector({
    activeFlag: EARLY_CATSONE_CLICK_INJECTOR_ACTIVE,
    durationMs: EARLY_CATSONE_DURATION_MS,
    fallbackIntervalMs: EARLY_CATSONE_FALLBACK_INTERVAL_MS,
    isEligible: () => isCatsoneHost(window.location.hostname),
    label: "CatsOne",
    rewriteAnchor: rewriteCatsoneApplyAnchor,
  })
}

function rewriteLifeAtTikTokApplyAnchor(anchor, retainedJobId) {
  if (anchor.hasAttribute("download")) return false
  let text = (anchor.textContent || "").replace(/\s+/g, " ").trim()
  let ariaLabel = (anchor.getAttribute("aria-label") || "")
    .replace(/\s+/g, " ")
    .trim()
  if (
    !/^apply to this job$/i.test(text) &&
    !/^apply to this job$/i.test(ariaLabel)
  ) {
    return false
  }
  let bridgedUrl = buildLifeAtTikTokApplyUrl(
    window.location.href,
    anchor.href,
    retainedJobId,
  )
  return !!bridgedUrl && ((anchor.href = bridgedUrl), true)
}

function startEarlyLifeAtTikTokClickInjector() {
  let pageUrlAtStart = window.location.href
  startEarlyJrIdAnchorInjector({
    activeFlag: EARLY_LIFE_AT_TIKTOK_CLICK_INJECTOR_ACTIVE,
    durationMs: EARLY_LIFE_AT_TIKTOK_CLICK_DURATION_MS,
    fallbackIntervalMs: EARLY_LIFE_AT_TIKTOK_CLICK_FALLBACK_INTERVAL_MS,
    isEligible: () =>
      shouldKeepLifeAtTikTokApplyBridge(pageUrlAtStart, window.location.href),
    label: "LifeAtTikTok Apply bridge",
    rewriteAnchor: rewriteLifeAtTikTokApplyAnchor,
  })
}

function startEarlyGoogleCareersJrIdRetention() {
  let globalObject = globalThis
  if (!globalObject[EARLY_GOOGLE_CAREERS_JR_ID_RETENTION_ACTIVE]) {
    try {
      if (window.top !== window.self) return
      let pageUrl = new URL(window.location.href)
      if (!isGoogleCareersApplyUrl(pageUrl)) return
      let retainedJobId =
        pageUrl.searchParams.get(JOB_ID_QUERY_KEY)?.trim() || null
      if (!retainedJobId) return
      globalObject[EARLY_GOOGLE_CAREERS_JR_ID_RETENTION_ACTIVE] = true
      console.info("[jobright] Google Careers retaining initial apply jr_id", {
        pathname: pageUrl.pathname,
        durationMs: EARLY_GOOGLE_CAREERS_DURATION_MS,
      })
      let stopRetention = keepJobIdInUrl(retainedJobId, {
        originalHost: pageUrl.hostname,
        durationMs: EARLY_GOOGLE_CAREERS_DURATION_MS,
        intervalMs: EARLY_GOOGLE_CAREERS_INTERVAL_MS,
        maxRestorations: EARLY_GOOGLE_CAREERS_MAX_RESTORATIONS,
        onRestore: ({ pathname, restorationCount }) => {
          console.info(
            "[jobright] Google Careers initial apply jr_id restored",
            {
              pathname,
              restorationCount,
            },
          )
        },
      })
      window.addEventListener("pagehide", stopRetention, {
        once: true,
      })
    } catch (error) {
      console.warn(
        "[jobright] early Google Careers jr_id retention failed:",
        error,
      )
    }
  }
}

function startEarlyLifeAtTikTokJrIdRetention() {
  let globalObject = globalThis
  if (!globalObject[EARLY_LIFE_AT_TIKTOK_JR_ID_RETENTION_ACTIVE]) {
    try {
      if (window.top !== window.self) return
      let pageUrl = new URL(window.location.href)
      if (!shouldRetainLifeAtTikTokJobDetailJrId(pageUrl.toString())) return
      let retainedJobId =
        pageUrl.searchParams.get(JOB_ID_QUERY_KEY)?.trim() || null
      if (!retainedJobId) return
      globalObject[EARLY_LIFE_AT_TIKTOK_JR_ID_RETENTION_ACTIVE] = true
      console.info(
        "[jobright] LifeAtTikTok retaining initial job detail jr_id",
        {
          pathname: pageUrl.pathname,
          durationMs: EARLY_LIFE_AT_TIKTOK_DURATION_MS,
        },
      )
      let stopRetention = keepJobIdInUrl(retainedJobId, {
        originalHost: pageUrl.hostname,
        allowedPathname: pageUrl.pathname,
        durationMs: EARLY_LIFE_AT_TIKTOK_DURATION_MS,
        intervalMs: EARLY_LIFE_AT_TIKTOK_INTERVAL_MS,
        maxRestorations: EARLY_LIFE_AT_TIKTOK_MAX_RESTORATIONS,
        onRestore: ({ pathname, restorationCount }) => {
          console.info("[jobright] LifeAtTikTok job detail jr_id restored", {
            pathname,
            restorationCount,
          })
        },
      })
      window.addEventListener("pagehide", stopRetention, {
        once: true,
      })
    } catch (error) {
      console.warn(
        "[jobright] early LifeAtTikTok jr_id retention failed:",
        error,
      )
    }
  }
}

async function recoverRedirectedLifeAtTikTokJrId() {
  if (
    window.top !== window.self ||
    !shouldRecoverLifeAtTikTokJobDetailJrId(window.location.href)
  ) {
    return false
  }
  try {
    let response = await sendToBackground({
      name: "getTabJobId",
      body: {
        currentUrl: window.location.href,
        requireSamePath: true,
      },
    })
    let recoveredJobId =
      "string" == typeof response?.jobId ? response.jobId.trim() : ""
    let recoveredUrl = buildLifeAtTikTokRecoveredUrl(
      window.location.href,
      recoveredJobId,
    )
    if (!recoveredUrl) return false
    window.history.replaceState(window.history.state, "", recoveredUrl)
    setCurrentJobId(recoveredJobId)
    let allowedPathname = window.location.pathname
    let stopRetention = keepJobIdInUrl(recoveredJobId, {
      originalHost: window.location.hostname,
      allowedPathname,
      durationMs: EARLY_LIFE_AT_TIKTOK_DURATION_MS,
      intervalMs: EARLY_LIFE_AT_TIKTOK_INTERVAL_MS,
      maxRestorations: EARLY_LIFE_AT_TIKTOK_MAX_RESTORATIONS,
    })
    window.addEventListener("pagehide", stopRetention, {
      once: true,
    })
    console.info(
      "[jobright] LifeAtTikTok redirected job detail jr_id restored",
      {
        pathname: allowedPathname,
      },
    )
    return true
  } catch (error) {
    return (
      console.warn(
        "[jobright] failed to recover redirected LifeAtTikTok jr_id:",
        error,
      ),
      false
    )
  }
}

function waitForDomContentLoaded() {
  return "loading" !== document.readyState
    ? Promise.resolve()
    : new Promise((resolve) => {
        document.addEventListener("DOMContentLoaded", () => resolve(), {
          once: true,
        })
      })
}

function collectParcelRequires() {
  let globalObject = globalThis
  return Object.values(globalObject).filter(isParcelRequire)
}

function findInjectedHelperRuntimeModule() {
  return findModuleExportFromParcelRequires(
    collectParcelRequires(),
    "bootstrapJobrightHelperRuntime",
  )
}

async function injectAndLoadHelperRuntimeModule() {
  let injectResult = await sendToBackground({
    name: "injectHelperAppBundle",
    body: {
      bundleUrl: helperAppBundleUrl.default,
    },
  })
  if (!injectResult?.success) {
    throw Error("Failed to inject Jobright helper runtime bundle")
  }
  let runtimeModule = findInjectedHelperRuntimeModule()
  if (!runtimeModule?.bootstrapJobrightHelperRuntime) {
    throw Error("Failed to load Jobright helper runtime module")
  }
  return runtimeModule
}

function readRuntimeActivationReason() {
  let iframeUrls = Array.from(
    document.querySelectorAll("iframe[src]"),
    (iframe) => iframe.src,
  )
  let pageSourceUrls = Array.from(
    document.querySelectorAll("script[src], link[href]"),
    (element) =>
      element instanceof HTMLScriptElement ? element.src : element.href,
  )
  return getRuntimeActivationReason({
    href: window.location.href,
    isTopFrame: window.top === window.self,
    iframeUrls,
    pageSourceUrls,
  })
}

function clearRuntimeActivationWatchers() {
  stopRuntimeActivationObserver?.()
  stopRuntimeActivationObserver = null
  removeUrlUpdatedListener?.()
  removeUrlUpdatedListener = null
}

function startHelperRuntime(activationReason) {
  return (
    runtimeStartPromise ||
    (clearRuntimeActivationWatchers(),
    (runtimeStartPromise = (async () => {
      console.info("[jobright] helper runtime activation matched", {
        host: window.location.hostname,
        pathname: window.location.pathname,
        frame: window.top === window.self ? "top" : "child",
        reason: activationReason,
      })
      await waitForDomContentLoaded()
      if (await waitForCloudflareManagedChallengePage()) {
        removeCloudflareChallengeInjectedHost(HOST_ID)
        return
      }
      let runtimeModule = await injectAndLoadHelperRuntimeModule()
      return (
        (await runtimeModule.bootstrapJobrightHelperRuntime()),
        runtimeModule
      )
    })().catch((error) => {
      throw ((runtimeStartPromise = null), error)
    })))
  )
}

function registerExtensionIconClickListener() {
  if (window.top === window.self) {
    chrome.runtime.onMessage.addListener((message) => {
      if ("iconClicked" === message.message) {
        console.info("[jobright] extension icon requested helper", {
          runtimeStarted: null !== runtimeStartPromise,
        })
        startHelperRuntime("extension_icon")
          .then((runtimeModule) =>
            runtimeModule?.openJobrightHelperFromExtensionIcon?.(),
          )
          .catch((error) => {
            console.warn(
              "[jobright] extension icon activation failed:",
              error,
            )
          })
      }
    })
  }
}

function watchForDeferredRuntimeActivation() {
  if (window.top !== window.self) return
  let activate = (reason) => {
    startHelperRuntime(reason).catch((error) => {
      console.warn("[jobright] failed to activate helper runtime:", error)
    })
  }
  stopRuntimeActivationObserver = observeRuntimeActivationSignals(activate)
  let onRuntimeMessage = (message) => {
    console.debug("[jobright] runtime activation message", {
      message: message.message,
      frame: "top",
    })
    if ("urlUpdated" !== message.message) return
    let reason = readRuntimeActivationReason()
    if (reason) activate(reason)
  }
  chrome.runtime.onMessage.addListener(onRuntimeMessage)
  removeUrlUpdatedListener = () => {
    chrome.runtime.onMessage.removeListener(onRuntimeMessage)
  }
}

;(async function bootstrapContentsEntry() {
  let globalObject = globalThis
  if (
    globalObject[BOOTSTRAP_ENTRY_ACTIVE_KEY] ||
    ((globalObject[BOOTSTRAP_ENTRY_ACTIVE_KEY] = true),
    registerExtensionIconClickListener(),
    ensureAutofillInstallAttributionBridge(),
    normalizeEarlyJobrightUrl())
  ) {
    return
  }
  startEarlyCatsoneClickInjector()
  startEarlyGoogleCareersJrIdRetention()
  startEarlyLifeAtTikTokJrIdRetention()
  await recoverRedirectedLifeAtTikTokJrId()
  startEarlyLifeAtTikTokClickInjector()
  await waitForDomContentLoaded()
  let activationReason = readRuntimeActivationReason()
  if (!activationReason) {
    watchForDeferredRuntimeActivation()
    return
  }
  await startHelperRuntime(activationReason)
})().catch((error) => {
  console.warn("[jobright] failed to bootstrap helper:", error)
})
