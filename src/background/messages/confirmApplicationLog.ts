import type { PlasmoMessaging } from "@plasmohq/messaging"

import {
  clearPendingApplication,
  peekPendingApplication,
  recordApplication
} from "~background/lib/application-log"

function pageMeta(body: unknown) {
  if (!body || typeof body !== "object") return null
  const meta = body as { link?: unknown; title?: unknown; company?: unknown }
  const link = typeof meta.link === "string" ? meta.link.trim() : ""
  if (!link) return null
  return body as {
    link: string
    title?: string
    company?: string
    cost?: string
    resume?: string
    country?: string
    other?: string
  }
}

/**
 * A success page appeared. Prefer the submission armed on this tab, and fall
 * back to the page itself when email confirmation opened the thanks page later
 * or in a new tab.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const tabId = req.sender?.tab?.id
    const pending = tabId == null ? null : await peekPendingApplication(tabId)
    const meta = pending || pageMeta(req.body)
    if (!meta) {
      res.send({ ok: false, message: "not_armed" })
      return
    }
    const result = await recordApplication(meta)
    if (result.ok && tabId != null) await clearPendingApplication(tabId)
    res.send(result)
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "log_failed"
    })
  }
}

export default handler
