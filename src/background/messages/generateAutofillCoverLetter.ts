import type { PlasmoMessaging } from "@plasmohq/messaging"

import { generateCoverLetter } from "~api/team-client"

/**
 * Jobright shape: { data: { markdown, coverLetterId, jobId }, error?: { HTTP_STATUS } }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const jobId =
      typeof req.body?.jobId === "string" ? req.body.jobId.trim() : ""
    const userPrompt =
      typeof req.body?.userPrompt === "string" ? req.body.userPrompt.trim() : ""

    if (!jobId || !userPrompt) {
      res.send({
        data: null,
        error: { HTTP_STATUS: 400, errorMsg: "Missing jobId or userPrompt" }
      })
      return
    }

    const result = await generateCoverLetter({
      jobId,
      userPrompt,
      resumeId: req.body?.resumeId,
      tailorId: req.body?.tailorId,
      coverLetterId:
        typeof req.body?.coverLetterId === "string"
          ? req.body.coverLetterId
          : undefined,
      currentCoverLetter:
        typeof req.body?.currentCoverLetter === "string"
          ? req.body.currentCoverLetter
          : undefined,
      profileId:
        typeof req.body?.profileId === "string" ? req.body.profileId : null,
      jobContext:
        req.body?.jobContext && typeof req.body.jobContext === "object"
          ? req.body.jobContext
          : undefined
    })

    if (!result.ok || !result.data) {
      res.send({
        data: null,
        error: {
          HTTP_STATUS: result.status || 500,
          errorMsg: result.error || "cover_letter_failed"
        }
      })
      return
    }

    res.send({ data: result.data })
  } catch (err) {
    res.send({
      data: null,
      error: {
        HTTP_STATUS: 500,
        errorMsg: err instanceof Error ? err.message : "Unknown error"
      }
    })
  }
}

export default handler
