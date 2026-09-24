import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchOpenCitiesByRegion } from "~api/team-client"

/** Returns city name string array (Jobright shape). */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const country =
      typeof req.body?.country === "string" ? req.body.country : ""
    const region = typeof req.body?.region === "string" ? req.body.region : ""
    if (!country || !region) {
      res.send([])
      return
    }
    res.send(await fetchOpenCitiesByRegion(country, region))
  } catch {
    res.send([])
  }
}

export default handler
