import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo, fetchCoverLetterBlob } from "~api/team-client"

function blobToBase64(blob: Blob): Promise<{ base64: string; mime: string }> {
  return blob.arrayBuffer().then((buffer) => {
    const bytes = new Uint8Array(buffer)
    let binary = ""
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return { base64: btoa(binary), mime: blob.type || "application/pdf" }
  })
}

/**
 * Body: { coverLetterId?: string }
 * Falls back to the selected profile's default cover letter.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    let coverLetterId =
      typeof req.body?.coverLetterId === "string"
        ? req.body.coverLetterId
        : null

    if (!coverLetterId) {
      const info = await fetchAutofillInfo()
      coverLetterId =
        info?.defaultCoverLetterId ?? info?.coverLetters?.[0]?.id ?? null
    }

    if (!coverLetterId) {
      res.send({
        ok: false,
        message: "no_cover_letter",
        base64URL: ""
      })
      return
    }

    const file = await fetchCoverLetterBlob(coverLetterId)
    if (!file) {
      res.send({
        ok: false,
        message: "download_failed",
        base64URL: ""
      })
      return
    }

    const { base64, mime } = await blobToBase64(file.blob)
    const mimeType = file.mimeType || mime
    const extension =
      (file.fileName.split(".").pop() || "pdf").toLowerCase() || "pdf"

    res.send({
      ok: true,
      coverLetterId,
      fileName: file.fileName,
      mimeType,
      extension,
      base64,
      base64URL: `data:${mimeType};base64,${base64}`
    })
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "fetch_failed",
      base64URL: ""
    })
  }
}

export default handler
