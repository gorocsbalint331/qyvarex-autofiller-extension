import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
  res.send(tabs[0]?.url ?? null)
}

export default handler
