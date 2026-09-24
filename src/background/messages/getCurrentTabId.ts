import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  res.send(req.sender?.tab?.id ?? null)
}

export default handler
