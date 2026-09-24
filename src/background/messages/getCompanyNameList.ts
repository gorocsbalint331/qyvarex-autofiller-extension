import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchCompanyNameList } from "~api/team-client"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const input = typeof req.body?.input === "string" ? req.body.input : ""
    const companyId =
      typeof req.body?.linkedinCompanyId === "string"
        ? req.body.linkedinCompanyId
        : typeof req.body?.companyId === "string"
          ? req.body.companyId
          : undefined
    res.send(await fetchCompanyNameList(input, companyId))
  } catch {
    res.send([])
  }
}

export default handler
