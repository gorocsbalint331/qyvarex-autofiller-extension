import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"
import { lookupAnswer } from "~lib/hub-to-jobright"

/**
 * Local stand-in for Jobright company-answer API.
 * Resolves a single field label against the selected hub profile.
 *
 * Body: { label?: string, companyName?: string, options?: string[] }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const body = req.body ?? {}
    const label =
      typeof body.label === "string"
        ? body.label
        : typeof body.companyName === "string"
          ? body.companyName
          : ""
    const options = Array.isArray(body.options)
      ? body.options.filter((o: unknown): o is string => typeof o === "string")
      : []

    if (!label.trim()) {
      res.send({ ok: false, data: null, message: "label_required" })
      return
    }

    const hub = await fetchAutofillInfo(
      typeof body.profileId === "string" ? body.profileId : null
    )
    if (!hub) {
      res.send({ ok: false, data: null, message: "no_profile" })
      return
    }

    const value = lookupAnswer(hub, label, options)
    res.send({
      ok: true,
      data: value,
      result: value
    })
  } catch (err) {
    res.send({
      ok: false,
      data: null,
      message: err instanceof Error ? err.message : "resolve_failed"
    })
  }
}

export default handler
