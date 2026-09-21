import type { PlasmoMessaging } from "@plasmohq/messaging"

/** Health check for team tooling / CI. */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send({
    ok: true,
    name: "jobright-fork-extension",
    version: chrome.runtime.getManifest().version
  })
}

export default handler
