import type { PlasmoMessaging } from "@plasmohq/messaging"

/** Stub — port from engine/background/src/background/messages/acceptAutofillInstallAttribution.js */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send({
    ok: false,
    stub: true,
    handler: "acceptAutofillInstallAttribution",
    message: "Not implemented yet in the team fork"
  })
}

export default handler
