import type { PlasmoMessaging } from "@plasmohq/messaging"

import { logApplication } from "~api/team-client"

/**
 * Append a row to the configured Google Sheet via the team hub.
 * Body mirrors POST /api/v1/applications/log
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const title = String(req.body?.title || "").trim()
    const link = String(req.body?.link || "").trim()
    if (!title || !link) {
      res.send({ ok: false, message: "title_and_link_required" })
      return
    }

    const result = await logApplication({
      profileId:
        typeof req.body?.profileId === "string" ? req.body.profileId : null,
      country: typeof req.body?.country === "string" ? req.body.country : "",
      resume: typeof req.body?.resume === "string" ? req.body.resume : "",
      title,
      link,
      company: typeof req.body?.company === "string" ? req.body.company : "",
      cost: typeof req.body?.cost === "string" ? req.body.cost : "",
      status: typeof req.body?.status === "string" ? req.body.status : "applied",
      other: typeof req.body?.other === "string" ? req.body.other : "",
      tabName: typeof req.body?.tabName === "string" ? req.body.tabName : ""
    })

    if (!result.ok) {
      res.send({
        ok: false,
        message: result.message || result.error || "log_failed",
        tabName: result.tabName
      })
      return
    }
    res.send({ ok: true, tabName: result.tabName })
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "log_failed"
    })
  }
}

export default handler
