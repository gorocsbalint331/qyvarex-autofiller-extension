import type { PlasmoMessaging } from "@plasmohq/messaging"

import { mergeProfileAnswers } from "~api/team-client"

/**
 * Persist autofill info patches from the helper UI to the team hub.
 * Jobright called profile.saveAutofillInfo; we merge answers / extras.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const body = req.body || {}
    const answers =
      body.answers && typeof body.answers === "object"
        ? (body.answers as Record<string, string>)
        : body.autofillInfo?.answers &&
            typeof body.autofillInfo.answers === "object"
          ? (body.autofillInfo.answers as Record<string, string>)
          : null

    if (!answers || !Object.keys(answers).length) {
      // Nothing to merge — treat as success so UI does not block
      res.send({ ok: true, stub: false, skipped: true })
      return
    }

    const profileId =
      typeof body.profileId === "string" ? body.profileId : null
    const result = await mergeProfileAnswers(answers, profileId)
    if (!result.ok) {
      res.send({ ok: false, message: result.error || "save_failed" })
      return
    }
    res.send({ ok: true, answers: result.answers, extras: result.extras })
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "save_failed"
    })
  }
}

export default handler
