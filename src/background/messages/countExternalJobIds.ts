import type { PlasmoMessaging } from "@plasmohq/messaging"

/** No LinkedIn↔external id store yet — report zero. */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send(0)
}

export default handler
