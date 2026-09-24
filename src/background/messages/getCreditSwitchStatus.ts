import type { PlasmoMessaging } from "@plasmohq/messaging"

/** Credits UI off — team hub does not sell Turbo. */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send(false)
}

export default handler
