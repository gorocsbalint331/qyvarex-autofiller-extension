import type { PlasmoMessaging } from "@plasmohq/messaging"

import { saveJobToHub } from "~api/team-client"
import { toHelperJobId } from "~background/lib/hub-saved-job"

const INTERNAL_SERVER_ERROR = 500

/**
 * "Add This Job" save: stores the job in the hub's saved jobs.
 * Replies with the helper job id string, or 500 on failure (what the helper store expects).
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const title = String(req.body?.jobTitle || "").trim()
    const url = String(req.body?.url || "").trim()
    if (!title || !url) {
      res.send(INTERNAL_SERVER_ERROR)
      return
    }

    const result = await saveJobToHub({
      title,
      url,
      company: String(req.body?.companyName || "").trim(),
      description: String(req.body?.jobDescription || "").trim()
    })
    if (!result.ok || !result.job) {
      console.warn("[postExternalJobImport] hub save failed:", result.error)
      res.send(INTERNAL_SERVER_ERROR)
      return
    }
    res.send(toHelperJobId(result.job.id))
  } catch (err) {
    console.warn("[postExternalJobImport]", err)
    res.send(INTERNAL_SERVER_ERROR)
  }
}

export default handler
