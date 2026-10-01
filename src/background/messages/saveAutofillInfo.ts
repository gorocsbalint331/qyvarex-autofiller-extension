import type { PlasmoMessaging } from "@plasmohq/messaging"

import { ensureSelectedProfile, getTeamSettings, mergeProfileAnswers } from "~api/team-client"
import { saveStructuredAutofillInfo } from "~background/lib/autofill-save"

/**
 * Persist autofill info from the helper UI to the team hub.
 * - `structuredData` (Editor "Update"): full Jobright-shaped snapshot → profile fields + extras.
 * - `answers`: learned Q→A pairs merged into profile answers.
 * Replies in the Jobright save contract ({ success, result, status }) that the
 * Editor checks, plus `ok` for team-fork callers.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const fail = (status: number, message: string) =>
    res.send({ ok: false, success: false, result: false, status, message })

  try {
    const body = req.body || {}
    const settings = await getTeamSettings()
    const profileId =
      (typeof body.profileId === "string" && body.profileId) ||
      settings.selectedProfileId ||
      (await ensureSelectedProfile())

    if (body.structuredData && typeof body.structuredData === "object") {
      if (!profileId) return fail(400, "no_profile")
      const expectedRevision =
        typeof body.expectedRevision === "number" ? body.expectedRevision : undefined
      const saved = await saveStructuredAutofillInfo(
        profileId,
        body.structuredData,
        expectedRevision
      )
      if (!saved.ok) return fail(saved.status || 500, saved.error || "save_failed")
      res.send({ ok: true, success: true, result: true, status: 200 })
      return
    }

    const answers =
      body.answers && typeof body.answers === "object"
        ? (body.answers as Record<string, string>)
        : body.autofillInfo?.answers &&
            typeof body.autofillInfo.answers === "object"
          ? (body.autofillInfo.answers as Record<string, string>)
          : null

    if (!answers || !Object.keys(answers).length) {
      res.send({ ok: true, success: true, result: true, status: 200, skipped: true })
      return
    }

    const result = await mergeProfileAnswers(answers, profileId)
    if (!result.ok) return fail(500, result.error || "save_failed")
    res.send({
      ok: true,
      success: true,
      result: true,
      status: 200,
      answers: result.answers,
      extras: result.extras
    })
  } catch (err) {
    fail(500, err instanceof Error ? err.message : "save_failed")
  }
}

export default handler
