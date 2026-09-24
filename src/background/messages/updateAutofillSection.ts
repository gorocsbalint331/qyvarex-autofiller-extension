import type { PlasmoMessaging } from "@plasmohq/messaging"

import { mergeProfileAnswers, teamFetch, getTeamSettings } from "~api/team-client"

/**
 * Update one autofill section (identity / answers / extras) on the hub profile.
 * Body: { section?: string, data?: Record<string, unknown>, answers?: Record<string, string> }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const body = req.body || {}
    const answers =
      body.answers && typeof body.answers === "object"
        ? (body.answers as Record<string, string>)
        : body.data?.answers && typeof body.data.answers === "object"
          ? (body.data.answers as Record<string, string>)
          : null

    if (answers && Object.keys(answers).length) {
      const result = await mergeProfileAnswers(
        answers,
        typeof body.profileId === "string" ? body.profileId : null
      )
      if (!result.ok) {
        res.send({ ok: false, message: result.error || "save_failed" })
        return
      }
      res.send({ ok: true, answers: result.answers, extras: result.extras })
      return
    }

    // Generic extras / section patch
    const settings = await getTeamSettings()
    const id =
      (typeof body.profileId === "string" && body.profileId) ||
      settings.selectedProfileId
    if (!id) {
      res.send({ ok: false, message: "no_profile" })
      return
    }

    const patch: Record<string, unknown> = {}
    if (body.extras && typeof body.extras === "object") patch.extras = body.extras
    if (body.data && typeof body.data === "object") {
      const d = body.data as Record<string, unknown>
      for (const key of [
        "firstName",
        "lastName",
        "email",
        "phone",
        "linkedin",
        "website",
        "address1",
        "address2",
        "city",
        "state",
        "postalCode",
        "country"
      ]) {
        if (typeof d[key] === "string") patch[key] = d[key]
      }
      if (d.extras && typeof d.extras === "object") patch.extras = d.extras
    }

    if (!Object.keys(patch).length) {
      res.send({ ok: true, skipped: true })
      return
    }

    const { ok, data } = await teamFetch<{ ok: boolean; error?: string }>(
      `/api/v1/profiles/${encodeURIComponent(id)}`,
      { method: "PATCH", body: JSON.stringify(patch) }
    )
    res.send({ ok: ok && !!data?.ok, error: data?.error })
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "update_failed"
    })
  }
}

export default handler
