import type { PlasmoMessaging } from "@plasmohq/messaging"

import { recordApplication } from "~background/lib/application-log"

/**
 * Append a row to the configured Google Sheet via the team hub (manual
 * "Log to Google Sheet"). Skips jobs already logged in the last 24h unless
 * `force` is set.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const body = req.body ?? {}
    const result = await recordApplication(
      {
        title: typeof body.title === "string" ? body.title : "",
        company: typeof body.company === "string" ? body.company : "",
        link:
          (typeof body.link === "string" && body.link) || req.sender?.tab?.url || "",
        cost: typeof body.cost === "string" ? body.cost : "",
        resume: typeof body.resume === "string" ? body.resume : "",
        country: typeof body.country === "string" ? body.country : "",
        other: typeof body.other === "string" ? body.other : ""
      },
      { force: body.force === true }
    )
    res.send(result)
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "log_failed"
    })
  }
}

export default handler
