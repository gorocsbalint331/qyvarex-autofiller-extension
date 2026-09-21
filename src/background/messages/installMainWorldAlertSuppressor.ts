import type { PlasmoMessaging } from "@plasmohq/messaging"

/** Stub — port from engine/background/src/background/messages/installMainWorldAlertSuppressor.js */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send({
    ok: false,
    stub: true,
    handler: "installMainWorldAlertSuppressor",
    message: "Not implemented yet in the team fork"
  })
}

export default handler
