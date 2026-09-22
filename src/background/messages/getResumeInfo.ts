import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"

/**
 * Resume metadata for the selected hub profile (no Jobright diagnose id).
 */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  try {
    const info = await fetchAutofillInfo()
    if (!info) {
      res.send({ ok: false, message: "no_profile" })
      return
    }

    const defaultId = info.defaultResumeId ?? info.resumes?.[0]?.id ?? null
    const def = info.resumes?.find((r) => r.id === defaultId) ?? info.resumes?.[0]

    res.send({
      ok: true,
      resumes: info.resumes ?? [],
      defaultResumeId: defaultId,
      resumeInfo: def
        ? {
            id: def.id,
            resumeName: def.displayName || def.fileName,
            fileName: def.fileName,
            mimeType: def.mimeType,
            isDefault: !!def.isDefault
          }
        : null
    })
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "fetch_failed"
    })
  }
}

export default handler
