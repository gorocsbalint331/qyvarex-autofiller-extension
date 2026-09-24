import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchSavedJob } from "~api/team-client"
import { fromHelperJobId } from "~background/lib/hub-saved-job"

const IMPORTED = 2
const FAILED = 3

/** Hub saves are synchronous, so a job is "imported" as soon as the hub has it. */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const savedJobId = fromHelperJobId(req.body?.jobId)
  if (!savedJobId) {
    res.send(FAILED)
    return
  }
  try {
    const result = await fetchSavedJob(savedJobId)
    res.send(result.ok ? IMPORTED : FAILED)
  } catch (err) {
    console.warn("[getExternalJobStatus]", err)
    res.send(FAILED)
  }
}

export default handler
