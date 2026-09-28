import type { PlasmoMessaging } from "@plasmohq/messaging"

import {
  recordApplication,
  takePendingApplication
} from "~background/lib/application-log"

/** An application success page appeared; log the tab's pending submission, if any. */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const tabId = req.sender?.tab?.id
    const pending = tabId == null ? null : await takePendingApplication(tabId)
    if (!pending) {
      res.send({ ok: false, message: "not_armed" })
      return
    }
    res.send(await recordApplication(pending))
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "log_failed"
    })
  }
}

export default handler
