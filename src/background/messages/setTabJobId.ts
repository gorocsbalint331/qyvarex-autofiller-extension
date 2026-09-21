import type { PlasmoMessaging } from "@plasmohq/messaging"

import { setTabJobRecord } from "~background/tab-job-id"

export type RequestBody = {
  jobId?: string
  url?: string
}

const handler: PlasmoMessaging.MessageHandler<RequestBody> = async (req, res) => {
  const tabId = req.sender?.tab?.id
  const jobId = req.body?.jobId?.trim()
  const url = req.body?.url || req.sender?.tab?.url || ""

  if (typeof tabId !== "number" || !jobId) {
    res.send({ ok: false })
    return
  }

  let pathname = "/"
  try {
    pathname = new URL(url).pathname
  } catch {
    /* ignore */
  }

  await setTabJobRecord(tabId, {
    jobId,
    url,
    pathname,
    updatedAt: Date.now()
  })

  res.send({ ok: true })
}

export default handler
