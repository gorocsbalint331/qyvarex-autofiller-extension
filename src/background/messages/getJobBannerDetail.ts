import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchSavedJob } from "~api/team-client"
import { fromHelperJobId, toJobBannerDetail } from "~background/lib/hub-saved-job"

/** Job card data for hub saved jobs; null for any other id (Jobright jobs are not mirrored). */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const savedJobId = fromHelperJobId(req.body?.jobId)
  if (!savedJobId) {
    res.send(null)
    return
  }
  try {
    const result = await fetchSavedJob(savedJobId)
    res.send(result.ok && result.job ? await toJobBannerDetail(result.job) : null)
  } catch (err) {
    console.warn("[getJobBannerDetail]", err)
    res.send(null)
  }
}

export default handler
