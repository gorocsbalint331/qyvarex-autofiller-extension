import type { PlasmoMessaging } from "@plasmohq/messaging"

/** No forced update / what's-new from Jobright cloud. */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send({
    version: chrome.runtime.getManifest().version,
    hasWhatsNewContent: false,
    whatsNew: { features: [], updates: [], improvements: [] },
    releasedAt: null,
    stub: true
  })
}

export default handler
