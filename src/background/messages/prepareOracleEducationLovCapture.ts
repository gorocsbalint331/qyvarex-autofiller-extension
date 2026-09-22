import type { PlasmoMessaging } from "@plasmohq/messaging"

import { setOracleCapture } from "~background/lib/oracle-lov-capture"

const INSTALL_INTERCEPTOR = function installOracleLovInterceptor(captureId: string) {
  const w = window as unknown as {
    __jrOracleLov?: {
      captureId: string
      items: unknown[]
      lastUrl: string
    }
    fetch: typeof fetch
  }
  w.__jrOracleLov = { captureId, items: [], lastUrl: "" }
  const orig = w.fetch.bind(window)
  w.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const res = await orig(input, init)
    try {
      const url =
        typeof input === "string"
          ? input
          : input instanceof URL
            ? input.href
            : input.url
      if (/lov|lookup|contentitem|flexfield|education|school/i.test(url)) {
        const clone = res.clone()
        const json = await clone.json().catch(() => null)
        const items =
          (json &&
            (json.items ||
              json.ContentItems ||
              json.data ||
              (Array.isArray(json) ? json : null))) ||
          []
        if (Array.isArray(items) && items.length) {
          w.__jrOracleLov!.items = items
          w.__jrOracleLov!.lastUrl = url
          window.dispatchEvent(
            new CustomEvent("__jr_oracle_lov_captured", {
              detail: { captureId, count: items.length, url }
            })
          )
        }
      }
    } catch {
      /* ignore */
    }
    return res
  }
  return { ok: true, captureId }
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const field = String(req.body?.field || req.body?.label || "education")
    const search = String(req.body?.search || req.body?.query || "")
    const captureId =
      typeof req.body?.captureId === "string"
        ? req.body.captureId
        : `oracle-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

    setOracleCapture(captureId, { field, search, items: [] })

    const tabId =
      typeof req.body?.tabId === "number"
        ? req.body.tabId
        : (
            await chrome.tabs.query({ active: true, currentWindow: true })
          )[0]?.id

    if (tabId) {
      await chrome.scripting.executeScript({
        target: { tabId },
        world: "MAIN",
        func: INSTALL_INTERCEPTOR,
        args: [captureId]
      })
    }

    res.send({
      ok: true,
      captureId,
      field,
      search
    })
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "prepare_failed"
    })
  }
}

export default handler
