import type { PlasmoMessaging } from "@plasmohq/messaging"

import {
  getOracleCapture,
  updateOracleCaptureItems
} from "~background/lib/oracle-lov-capture"

const READ_PAGE_CAPTURE = function readOracleLovFromPage() {
  const w = window as unknown as {
    __jrOracleLov?: { items: unknown[]; lastUrl: string; captureId: string }
  }
  return w.__jrOracleLov || null
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const captureId =
      typeof req.body?.captureId === "string" ? req.body.captureId : ""
    if (!captureId) {
      res.send({ ok: false, message: "captureId_required", items: [] })
      return
    }

    const tabId =
      typeof req.body?.tabId === "number"
        ? req.body.tabId
        : (
            await chrome.tabs.query({ active: true, currentWindow: true })
          )[0]?.id

    let pageItems: unknown[] = []
    if (tabId) {
      const results = await chrome.scripting.executeScript({
        target: { tabId },
        world: "MAIN",
        func: READ_PAGE_CAPTURE
      })
      const page = results?.[0]?.result as {
        items?: unknown[]
        captureId?: string
      } | null
      if (page?.items?.length) {
        pageItems = page.items
        updateOracleCaptureItems(captureId, pageItems)
      }
    }

    const stored = getOracleCapture(captureId)
    const items = pageItems.length ? pageItems : stored?.items || []

    res.send({
      ok: true,
      captureId,
      items,
      field: stored?.field,
      search: stored?.search
    })
  } catch (err) {
    res.send({
      ok: false,
      items: [],
      message: err instanceof Error ? err.message : "consume_failed"
    })
  }
}

export default handler
