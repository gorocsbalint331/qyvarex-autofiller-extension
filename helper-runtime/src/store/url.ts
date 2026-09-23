// @ts-nocheck
/**
 * Zustand store for the current tab URL, with LinkedIn preload iframe handling.
 */

import { create } from "zustand"
import { sendToBackground } from "@plasmohq/messaging"
import { isLinkedinPreloadIframe } from "../utils/checkLinkedin.ts"

function normalizeUrlWithoutJobId(url) {
  const parsed = new URL(url.toString())
  parsed.searchParams.delete("jr_id")
  parsed.searchParams.sort()
  return parsed.toString()
}

export function shouldPreserveCurrentTabUrlWithJobId({
  currentTabUrl,
  nextUrl,
}) {
  if (!currentTabUrl || !nextUrl) return false
  try {
    const current = new URL(currentTabUrl)
    const next = new URL(nextUrl)
    if (!current.searchParams.get("jr_id") || next.searchParams.get("jr_id")) {
      return false
    }
    return (
      normalizeUrlWithoutJobId(current) === normalizeUrlWithoutJobId(next)
    )
  } catch {
    return false
  }
}

async function resolveCurrentTabUrl() {
  if (isLinkedinPreloadIframe()) {
    try {
      const topHref = window.top?.location?.href
      if (topHref && topHref !== "about:blank") return topHref
    } catch {
      // Cross-origin top frame — fall through.
    }
  }
  return window.location.href && window.location.href !== "about:blank"
    ? window.location.href
    : await sendToBackground({
        name: "getCurrentTabUrl",
      })
}

export const useUrlStore = create((set) => ({
  currentTabUrl: undefined,
  setCurrentTabUrl: (currentTabUrl) =>
    set({
      currentTabUrl,
    }),
  initCurrentTabUrl: async () => {
    const currentTabUrl = await resolveCurrentTabUrl()
    set({
      currentTabUrl,
    })
  },
  updateCurrentTabUrl: async () => {
    const nextUrl = await resolveCurrentTabUrl()
    set((state) =>
      shouldPreserveCurrentTabUrlWithJobId({
        currentTabUrl: state.currentTabUrl,
        nextUrl,
      })
        ? state
        : {
            currentTabUrl: nextUrl,
          },
    )
  },
}))
