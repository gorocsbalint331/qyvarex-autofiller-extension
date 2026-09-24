import type { PlasmoMessaging } from "@plasmohq/messaging"

import { regenerateAnswer as hubRegenerate } from "~api/team-client"

/**
 * Jobright shape: { data: { answer, uniqueId } | { HTTP_STATUS } }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const question =
      typeof req.body?.question === "string"
        ? req.body.question
        : typeof req.body?.label === "string"
          ? req.body.label
          : typeof req.body?.fieldLabel === "string"
            ? req.body.fieldLabel
            : ""

    if (!question) {
      res.send({
        data: { HTTP_STATUS: 400 }
      })
      return
    }

    const result = await hubRegenerate({
      question,
      promptList: Array.isArray(req.body?.promptList)
        ? req.body.promptList.filter((p: unknown) => typeof p === "string")
        : [],
      fieldInput:
        typeof req.body?.fieldInput === "string" ? req.body.fieldInput : null,
      uniqueId:
        typeof req.body?.uniqueId === "string" ? req.body.uniqueId : null,
      jobId: typeof req.body?.jobId === "string" ? req.body.jobId : null,
      profileId:
        typeof req.body?.profileId === "string" ? req.body.profileId : null,
      jobContext:
        req.body?.jobContext && typeof req.body.jobContext === "object"
          ? req.body.jobContext
          : undefined
    })

    if (!result.ok || !result.answer) {
      const status =
        result.status === 401 || result.status === 403
          ? 403
          : result.status === 503
            ? 503
            : 500
      res.send({ data: { HTTP_STATUS: status } })
      return
    }

    res.send({
      data: {
        answer: result.answer,
        uniqueId: result.uniqueId ?? null
      }
    })
  } catch (err) {
    console.error("[regenerateAnswer]", err)
    res.send({ data: { HTTP_STATUS: 500 } })
  }
}

export default handler
