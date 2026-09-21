import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"

/**
 * Returns autofill payload for the selected team profile.
 * Body: { forceRefresh?: boolean, profileId?: string }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const profileId =
      typeof req.body?.profileId === "string" ? req.body.profileId : null
    const autofillInfo = await fetchAutofillInfo(profileId)

    if (!autofillInfo) {
      res.send({
        ok: false,
        autofillInfo: null,
        message:
          "No profile selected or team hub not connected. Open extension options."
      })
      return
    }

    res.send({
      ok: true,
      data: autofillInfo,
      autofillInfo,
      autoUpdate: true,
      revision: null
    })
  } catch (err) {
    res.send({
      ok: false,
      autofillInfo: null,
      message: err instanceof Error ? err.message : "fetch_failed"
    })
  }
}

export default handler
