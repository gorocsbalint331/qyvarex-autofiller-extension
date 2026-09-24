import type { PlasmoMessaging } from "@plasmohq/messaging"

/** Reload the extension (after update apply). */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  try {
    res.send({ ok: true })
    // Defer so the response can flush
    setTimeout(() => {
      try {
        chrome.runtime.reload()
      } catch {
        /* ignore */
      }
    }, 50)
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "reload_failed"
    })
  }
}

export default handler
