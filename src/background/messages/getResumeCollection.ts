import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"

/**
 * Resume collection list for ResumeSwitcher / ResumeReview UI.
 * Shape mirrors Jobright getResumeCollection for the helper.
 */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  try {
    const info = await fetchAutofillInfo()
    if (!info) {
      res.send({ ok: false, result: [], message: "no_profile" })
      return
    }

    const result = (info.resumes ?? []).map((r) => ({
      id: r.id,
      resumeId: r.id,
      resumeName: r.displayName || r.fileName,
      fileName: r.fileName,
      mimeType: r.mimeType,
      isDefault: !!r.isDefault,
      isTailor: false
    }))

    res.send({
      ok: true,
      result,
      data: result,
      defaultResumeId: info.defaultResumeId ?? result[0]?.id ?? null
    })
  } catch (err) {
    res.send({
      ok: false,
      result: [],
      message: err instanceof Error ? err.message : "fetch_failed"
    })
  }
}

export default handler
