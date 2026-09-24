import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchDegreeSuggestions } from "~api/team-client"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const input = typeof req.body?.input === "string" ? req.body.input : ""
    res.send(await fetchDegreeSuggestions(input))
  } catch {
    res.send([])
  }
}

export default handler
