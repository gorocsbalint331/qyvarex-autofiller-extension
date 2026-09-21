import type { PlasmoMessaging } from "@plasmohq/messaging"

/** Stub — port from engine/background/src/background/messages/getAgentCoverLetter.js */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send({
    ok: false,
    stub: true,
    handler: "getAgentCoverLetter",
    message: "Not implemented yet in the team fork"
  })
}

export default handler
