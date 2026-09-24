import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchOpenRegions } from "~api/team-client"

/** Returns region array [{ code, name }] (Jobright shape). */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const country =
      typeof req.body?.country === "string" ? req.body.country : ""
    if (!country) {
      res.send([])
      return
    }
    res.send(await fetchOpenRegions(country))
  } catch {
    res.send([])
  }
}

export default handler
