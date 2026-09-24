/**
 * In-memory tab context (open tailor/cover-letter tabs, refresh sender).
 * Ported lightly from engine getTabContext — no Jobright cloud.
 */
import type { PlasmoMessaging } from "@plasmohq/messaging"

type TabCtx = {
  senderTabId: number | null
  relatedTabIds: number[]
}

const contexts = new Map<string, TabCtx>()

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const action = String(req.body?.action || "get")
  const key = String(req.body?.key || "default")
  const senderTabId = req.sender?.tab?.id ?? null

  if (action === "set") {
    const related =
      typeof req.body?.tabId === "number"
        ? [req.body.tabId]
        : Array.isArray(req.body?.relatedTabIds)
          ? req.body.relatedTabIds.filter((n: unknown) => typeof n === "number")
          : []
    contexts.set(key, {
      senderTabId: senderTabId ?? contexts.get(key)?.senderTabId ?? null,
      relatedTabIds: related
    })
    res.send({ ok: true })
    return
  }

  if (action === "clear") {
    contexts.delete(key)
    res.send({ ok: true })
    return
  }

  res.send({
    ok: true,
    ...(contexts.get(key) || { senderTabId: null, relatedTabIds: [] })
  })
}

export default handler
