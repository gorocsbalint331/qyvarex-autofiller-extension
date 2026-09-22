import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"
import { hubToJobrightAutofill } from "~lib/hub-to-jobright"

/**
 * Returns autofill payload for the selected team profile.
 * `data` is Jobright-shaped for the engine runtime; `autofillInfo` keeps hub shape.
 * Body: { forceRefresh?: boolean, profileId?: string }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const profileId =
      typeof req.body?.profileId === "string" ? req.body.profileId : null
    const hub = await fetchAutofillInfo(profileId)

    if (!hub) {
      res.send({
        ok: false,
        data: null,
        autofillInfo: null,
        message:
          "No profile selected or team hub not connected. Open extension options."
      })
      return
    }

    const data = hubToJobrightAutofill(hub)

    res.send({
      ok: true,
      data,
      autofillInfo: hub,
      autoUpdate: true,
      revision: null
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
