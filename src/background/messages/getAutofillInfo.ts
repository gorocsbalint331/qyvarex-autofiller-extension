import type { PlasmoMessaging } from "@plasmohq/messaging"

import { loadAutofillInfoWithReason } from "~api/team-client"
import { hubToJobrightAutofill } from "~lib/hub-to-jobright"

/**
 * Returns autofill payload for the selected team profile.
 * `data` is Jobright-shaped for the engine runtime; `autofillInfo` keeps hub shape.
 * `revision` is the hub profile's `updatedAt`, echoed back on save to detect
 * edits made on the team site in the meantime.
 * Body: { forceRefresh?: boolean, profileId?: string }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const profileId =
      typeof req.body?.profileId === "string" ? req.body.profileId : null
    const { info: hub, error } = await loadAutofillInfoWithReason(profileId)

    if (!hub) {
      res.send({
        ok: false,
        data: null,
        autofillInfo: null,
        message: error || "Couldn't load your profile from the team hub."
      })
      return
    }

    const data = hubToJobrightAutofill(hub)

    res.send({
      ok: true,
      data,
      autofillInfo: hub,
      autoUpdate: true,
      revision: typeof hub.revision === "number" ? hub.revision : null
    })
  } catch (err) {
    res.send({
      ok: false,
      data: null,
      autofillInfo: null,
      message: err instanceof Error ? err.message : "fetch_failed"
    })
  }
}

export default handler
