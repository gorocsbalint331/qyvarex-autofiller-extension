import type { PlasmoMessaging } from "@plasmohq/messaging"

import { resolveAddressSuggestion as hubResolve } from "~api/team-client"

/** Returns resolved address object or null (Jobright shape). */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const placeId =
      typeof req.body?.placeId === "string" ? req.body.placeId.trim() : ""
    if (!placeId) {
      res.send(null)
      return
    }
    const result = await hubResolve({
      placeId,
      sessionToken:
        typeof req.body?.sessionToken === "string"
          ? req.body.sessionToken
          : undefined
    })
    res.send(result)
  } catch {
    res.send(null)
  }
}

export default handler
