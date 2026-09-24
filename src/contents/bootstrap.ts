/**
 * Early content-script bootstrap (team fork).
 * Ported from Jobright contents.d42e7fcf.js — activation gate + helper inject.
 */

import type { PlasmoCSConfig } from "plasmo"
import { sendToBackground } from "@plasmohq/messaging"

import {
  removeCloudflareChallengeInjectedHost,
  waitForCloudflareManagedChallengePage
} from "~core/cloudflare-challenge"
import { isNeverApplyHost } from "~lib/cs-exclude-matches"
import { normalizeEarlyJobrightUrl } from "~contents/shared/early-url-normalization"
import {
  getRuntimeActivationReason,
  observeRuntimeActivationSignals,
  type RuntimeActivationReason
} from "~contents/shared/native-runtime-activation"
import { keepJobIdInUrl } from "~contents/shared/sticky-job-id"

// Plasmo statically analyzes this object — keep exclude_matches as a literal.
export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
  run_at: "document_start",
  exclude_matches: [
    "*://*.cloudflare.com/*",
    "https://li.protechts.net/*",
    "https://cs.ns1p.net/*",
    "https://merchantpool1.linkedin.com/*",
    "https://www.googletagmanager.com/*",
    "https://*.fls.doubleclick.net/activityi*",
    "https://lnkd.demdex.net/*",
    "https://crcldu.com/*",
    "https://jobright-team-site.vercel.app/*",
    "http://localhost:3210/*",
    "http://127.0.0.1:3210/*",
    // All Google consumer / Workspace hosts (Translate, Docs, Gmail, …).
    // Activate can still direct-inject on rare Google careers pages.
    "*://google.com/*",
    "*://www.google.com/*",
    "*://*.google.com/*",
    "*://*.youtube.com/*",
    "*://youtu.be/*",
    "*://*.office.com/*",
    "*://*.office365.com/*",
    "*://*.sharepoint.com/*",
    "*://outlook.live.com/*",
    "*://outlook.office.com/*",
    "*://onedrive.live.com/*",
    "*://*.teams.microsoft.com/*",
    "*://*.facebook.com/*",
    "*://*.instagram.com/*",
    "*://*.twitter.com/*",
    "*://*.x.com/*",
    "*://*.tiktok.com/*",
    "*://*.reddit.com/*",
    "*://*.netflix.com/*",
    "*://*.twitch.tv/*",
    "*://*.discord.com/*",
    "*://*.slack.com/*",
    "*://*.whatsapp.com/*",
    "*://web.whatsapp.com/*",
    "*://*.spotify.com/*",
    "*://*.github.com/*",
    "*://gist.github.com/*",
    "*://*.stackoverflow.com/*",
    "*://*.stackexchange.com/*",
    "http://localhost:3000/*",
    "http://localhost:5173/*",
    "http://127.0.0.1:3000/*",
    "http://127.0.0.1:5173/*"
  ]
}

export const HOST_ID = "jobright-fork-helper-plugin"
const BOOTSTRAP_FLAG = "__jobrightForkHelperBootstrapActive"
const JR_ID_PARAM = "jr_id"
const HELPER_BUNDLE = "assets/helper-app.js"

const initialParams = new URLSearchParams(window.location.search)
export let jobId: string | null = initialParams.get(JR_ID_PARAM)
export const agentTailorId = initialParams.get("a_t_id")
export const agentResumeId = initialParams.get("a_r_id")
export const agentOriginalResume =
  initialParams.get("useOriginalResume") === "true"

export function setCurrentJobId(next: string | null) {
  jobId = next || null
}

let helperStarted = false
let stopObserver: (() => void) | null = null

function waitForDocumentReady(): Promise<void> {
  if (document.readyState !== "loading") return Promise.resolve()
  return new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", () => resolve(), { once: true })
  })
}

function getCurrentRuntimeActivationReason(): RuntimeActivationReason | null {
  const iframeUrls = Array.from(
    document.querySelectorAll("iframe[src]"),
    (el) => (el as HTMLIFrameElement).src
  )
  const pageSourceUrls = Array.from(
    document.querySelectorAll("script[src], link[href]"),
    (el) =>
      el instanceof HTMLScriptElement
        ? el.src
        : (el as HTMLLinkElement).href
  )
  return getRuntimeActivationReason({
    href: window.location.href,
    isTopFrame: window.top === window.self,
    iframeUrls,
    pageSourceUrls
  })
}

async function injectAndBootstrapHelper(reason: RuntimeActivationReason) {
  if (!chrome?.runtime?.id) {
    throw new Error("Extension context invalidated.")
  }

  const alreadyStarted = helperStarted
  if (!alreadyStarted) {
    helperStarted = true
    stopObserver?.()
    stopObserver = null

    console.info("[jobright-fork] helper activation matched", {
      host: window.location.hostname,
      pathname: window.location.pathname,
      frame: window.top === window.self ? "top" : "child",
      reason
    })

    await waitForDocumentReady()

    if (await waitForCloudflareManagedChallengePage()) {
      removeCloudflareChallengeInjectedHost(HOST_ID)
      helperStarted = false
      return
    }

    if (!chrome?.runtime?.id) {
      helperStarted = false
      throw new Error("Extension context invalidated.")
    }

    const bundleUrl = chrome.runtime.getURL(HELPER_BUNDLE)
    const injected = await sendToBackground({
      name: "injectHelperAppBundle",
      body: { bundleUrl }
    })

    if (!injected?.success) {
      console.warn("[jobright-fork] helper inject failed", injected)
      helperStarted = false
      return
    }

    const runtime = (globalThis as any).bootstrapJobrightHelperRuntime
    if (typeof runtime === "function") {
      await runtime()
    }

    window.dispatchEvent(
      new CustomEvent("jobright-fork:helper-injected", { detail: { reason } })
    )
  }

  // Popup / toolbar Activate must open the floating UI even if the bundle
  // already booted in the background (otherwise Activate appears to no-op).
  if (reason === "extension_icon") {
    const open = (globalThis as any).openJobrightHelperFromExtensionIcon
    if (typeof open === "function") {
      try {
        await open()
      } catch (error) {
        console.warn("[jobright-fork] open helper from icon failed", error)
      }
    }
  }
}

function retainInitialJrIdIfPresent() {
  if (window.top !== window.self) return
  try {
    const url = new URL(window.location.href)
    const id = url.searchParams.get(JR_ID_PARAM)?.trim()
    if (!id) return
    const stop = keepJobIdInUrl(id, {
      originalHost: url.hostname,
      durationMs: 10_000,
      intervalMs: 50,
      maxRestorations: 5
    })
    window.addEventListener("pagehide", stop, { once: true })
  } catch (error) {
    console.warn("[jobright-fork] jr_id retention failed", error)
  }
}

function watchForLaterActivation() {
  if (window.top !== window.self) return
  stopObserver = observeRuntimeActivationSignals((reason) => {
    void injectAndBootstrapHelper(reason).catch((error) => {
      console.warn("[jobright-fork] delayed activation failed", error)
    })
  })

  chrome.runtime.onMessage.addListener((message) => {
    if (message?.message !== "urlUpdated") return
    const reason = getCurrentRuntimeActivationReason()
    if (reason) void injectAndBootstrapHelper(reason)
  })
}

;(async function bootstrap() {
  if ((globalThis as any)[BOOTSTRAP_FLAG]) return
  ;(globalThis as any)[BOOTSTRAP_FLAG] = true

  // Consumer / non-ATS hosts: never watch or inject (Activate can still
  // direct-inject via the popup when the user explicitly requests it).
  try {
    if (isNeverApplyHost(window.location.hostname)) return
  } catch {
    return
  }

  if (window.top === window.self) {
    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      if (message?.message !== "iconClicked") return
      // Stale CS after extension reload: refuse so background can direct-inject.
      if (!chrome?.runtime?.id) {
        try {
          sendResponse({ ok: false, reason: "context_invalidated" })
        } catch {
          /* ignore */
        }
        return true
      }
      void injectAndBootstrapHelper("extension_icon")
        .then(() => {
          try {
            sendResponse({ ok: true })
          } catch {
            /* ignore */
          }
        })
        .catch((error) => {
          const msg = error instanceof Error ? error.message : String(error)
          if (/extension context invalidated/i.test(msg)) {
            console.warn(
              "[jobright-fork] extension was reloaded — refresh this tab, then Activate again"
            )
            try {
              sendResponse({ ok: false, reason: "context_invalidated" })
            } catch {
              /* ignore */
            }
            return
          }
          console.warn("[jobright-fork] activate failed", error)
          try {
            sendResponse({
              ok: false,
              reason: msg || "activate_failed"
            })
          } catch {
            /* ignore */
          }
        })
      return true
    })
  }

  if (normalizeEarlyJobrightUrl()) return

  retainInitialJrIdIfPresent()
  await waitForDocumentReady()

  const reason = getCurrentRuntimeActivationReason()
  if (!reason) {
    watchForLaterActivation()
    return
  }
  await injectAndBootstrapHelper(reason)
})().catch((error) => {
  console.warn("[jobright-fork] bootstrap failed", error)
})
