import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"
import { buildLocalGptResults } from "~lib/hub-to-jobright"

/**
 * Local fill-v2 stand-in: map extracted form labels → hub answers / identity.
 * Engine helpers call this instead of Jobright /swan/autofill/fill-v2.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const params = req.body?.params ?? req.body ?? {}
    const elements = Array.isArray(params.elements) ? params.elements : []
    const hub = await fetchAutofillInfo(
      typeof params.profileId === "string" ? params.profileId : null
    )

    if (!hub) {
      res.send({
        ok: false,
        data: {
          HTTP_STATUS: 401
        },
        message: "No profile selected"
      })
      return
    }

    const result = buildLocalGptResults(hub, elements)
    res.send({
      ok: true,
      data: result
    })
  } catch (err) {
    console.error("[getGptResults] local resolve failed", err)
    res.send({
      ok: false,
      data: {
        HTTP_STATUS: 500
      },
      message: err instanceof Error ? err.message : "resolve_failed"
    })
  }
}

export default handler
