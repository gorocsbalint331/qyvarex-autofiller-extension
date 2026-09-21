import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo, fetchResumeBlob } from "~api/team-client"

/**
 * Downloads the default (or requested) resume for the selected profile.
 * Body: { resumeId?: string }
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    let resumeId =
      typeof req.body?.resumeId === "string" ? req.body.resumeId : null

    if (!resumeId) {
      const info = await fetchAutofillInfo()
      resumeId = info?.defaultResumeId ?? info?.resumes?.[0]?.id ?? null
    }

    if (!resumeId) {
      res.send({ ok: false, message: "no_resume" })
      return
    }

    const file = await fetchResumeBlob(resumeId)
    if (!file) {
      res.send({ ok: false, message: "download_failed" })
      return
    }

    const buffer = await file.blob.arrayBuffer()
    const bytes = new Uint8Array(buffer)
    let binary = ""
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    res.send({
      ok: true,
      resumeId,
      fileName: file.fileName,
      mimeType: file.mimeType,
      /** base64 for structured clone across messaging */
      base64: btoa(binary)
    })
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "fetch_failed"
    })
  }
}

export default handler
