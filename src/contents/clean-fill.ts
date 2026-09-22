/**
 * Clean-TS fill content script — native ATS fill without Parcel operations.
 * Runs alongside bootstrap; for personio/greenhouse/lever prefers clean path
 * when popup/icon requests fill via message `runCleanTsFill`.
 */

import type { PlasmoCSConfig } from "plasmo"

import {
  detectAtsSite,
  isCleanTsNativeSite,
  runCleanTsFill
} from "~contents/sites/native-filler"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: false,
  run_at: "document_idle",
  exclude_matches: [
    "https://jobright-team-site.vercel.app/*",
    "http://localhost:3210/*",
    "http://127.0.0.1:3210/*"
  ]
}

declare global {
  interface Window {
    __qyvarexCleanFill?: {
      run: () => Promise<unknown>
      site: string
      native: boolean
    }
  }
}

function installApi() {
  const site = detectAtsSite(location.hostname, location.href)
  window.__qyvarexCleanFill = {
    site,
    native: isCleanTsNativeSite(site),
    run: () => runCleanTsFill()
  }
  window.dispatchEvent(
    new CustomEvent("qyvarex:clean-fill-ready", {
      detail: { site, native: isCleanTsNativeSite(site) }
    })
  )
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.name === "runCleanTsFill" || message?.message === "runCleanTsFill") {
    void runCleanTsFill()
      .then((report) => sendResponse({ ok: true, report }))
      .catch((err) =>
        sendResponse({
          ok: false,
          message: err instanceof Error ? err.message : "fill_failed"
        })
      )
    return true
  }
  return undefined
})

installApi()
