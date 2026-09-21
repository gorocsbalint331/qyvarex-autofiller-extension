import type { PlasmoMessaging } from "@plasmohq/messaging"

import { getTeamSettings, verifyTeamConnection } from "~api/team-client"

const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  const settings = await getTeamSettings()
  const conn = await verifyTeamConnection()
  res.send({
    ok: conn.ok,
    siteUrl: settings.siteUrl,
    selectedProfileId: settings.selectedProfileId,
    user: conn.ok
      ? { email: conn.email, name: conn.name }
      : null,
    error: conn.error
  })
}

export default handler
