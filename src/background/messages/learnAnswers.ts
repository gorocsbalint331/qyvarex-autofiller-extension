import type { PlasmoMessaging } from "@plasmohq/messaging"

import { mergeProfileAnswers } from "~api/team-client"

const NOISE_RE =
  /qyvarex|filled\s*\d*\s*items?|text fields? ok|no resume file input|fill\s*again|dismiss|button clicks sync|learning answers for next|saved to hub/i

/**
 * Merge learned screening answers into the selected hub profile.
 * Body: {
 *   answers: Record<string, string>,
 *   profileId?: string,
 *   scopeKey?: string,
 *   hostname?: string,
 *   stepKey?: string
 * }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const answers =
      req.body?.answers && typeof req.body.answers === "object"
        ? (req.body.answers as Record<string, string>)
        : null
    if (!answers || !Object.keys(answers).length) {
      res.send({ ok: false, message: "answers_required" })
      return
    }

    const cleaned: Record<string, string> = {}
    for (const [k, v] of Object.entries(answers)) {
      const question = String(k || "").trim()
      const answer = String(v ?? "").trim()
      if (!question || !answer) continue
      if (question.length > 500 || answer.length > 2000) continue
      if (NOISE_RE.test(question) || NOISE_RE.test(answer)) continue
      const compact = (question + answer).replace(/\s+/g, "").toLowerCase()
      if (/fillagain|dismiss|qyvarexautofill|^yesno$/.test(compact)) continue
      cleaned[question] = answer
    }
    if (!Object.keys(cleaned).length) {
      res.send({ ok: false, message: "answers_empty" })
      return
    }

    const profileId =
      typeof req.body?.profileId === "string" ? req.body.profileId : null
    const scopeKey =
      typeof req.body?.scopeKey === "string" ? req.body.scopeKey.trim() : ""
    const hostname =
      typeof req.body?.hostname === "string" ? req.body.hostname.trim() : ""
    const stepKey =
      typeof req.body?.stepKey === "string" ? req.body.stepKey.trim() : ""

    const result = await mergeProfileAnswers(
      cleaned,
      profileId,
      scopeKey
        ? { scopeKey, hostname: hostname || null, stepKey: stepKey || null }
        : null
    )
    if (!result.ok) {
      res.send({ ok: false, message: result.error || "save_failed" })
      return
    }
    res.send({
      ok: true,
      answers: result.answers,
      extras: result.extras,
      learned: cleaned,
      scopeKey: scopeKey || null
    })
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "save_failed"
    })
  }
}

export default handler
