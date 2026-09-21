import type { PlasmoMessaging } from "@plasmohq/messaging"

import { getTabJobRecord } from "~background/tab-job-id"

export type RequestBody = {
  currentUrl?: string
  requireSamePath?: boolean
}

const handler: PlasmoMessaging.MessageHandler<RequestBody> = async (req, res) => {
  const tabId = req.sender?.tab?.id
  if (typeof tabId !== "number") {
    res.send({ jobId: null })
    return
  }

  const record = await getTabJobRecord(tabId)
  if (!record?.jobId) {
    res.send({ jobId: null })
    return
  }

  if (req.body?.requireSamePath && req.body.currentUrl) {
    try {
      const current = new URL(req.body.currentUrl)
      if (current.pathname !== record.pathname) {
        res.send({ jobId: null })
        return
      }
    } catch {
      res.send({ jobId: null })
      return
    }
  }

  res.send({ jobId: record.jobId, url: record.url })
}

export default handler
