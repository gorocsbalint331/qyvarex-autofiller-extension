import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAddressSuggestions } from "~api/team-client"

/** Returns raw suggestion array (Jobright shape). */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const input = typeof req.body?.input === "string" ? req.body.input : ""
    if (!input.trim()) {
      res.send([])
      return
    }
    const suggestions = await fetchAddressSuggestions({
      input,
      sessionToken:
        typeof req.body?.sessionToken === "string"
          ? req.body.sessionToken
          : undefined,
      countryCodes: Array.isArray(req.body?.countryCodes)
        ? req.body.countryCodes.filter((c: unknown) => typeof c === "string")
        : undefined,
      limit: typeof req.body?.limit === "number" ? req.body.limit : 5
    })
    res.send(suggestions)
  } catch {
    res.send([])
  }
}

export default handler
