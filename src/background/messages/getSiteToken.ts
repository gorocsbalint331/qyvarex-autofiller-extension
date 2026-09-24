import type { PlasmoMessaging } from "@plasmohq/messaging"

/**
 * Site CSRF / session token — unused by team hub local fill path.
 */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send("")
}

export default handler
