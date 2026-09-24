import { fetchAutofillInfo, fetchResumeBlob } from "~api/team-client"

export type ResumeBlobResponse = {
  ok: boolean
  resumeId?: string
  fileName?: string
  mimeType?: string
  extension?: string
  base64?: string
  base64URL?: string
  message?: string
}

function blobToBase64(blob: Blob): Promise<{ base64: string; mime: string }> {
  return blob.arrayBuffer().then((buffer) => {
    const bytes = new Uint8Array(buffer)
    let binary = ""
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    const mime = blob.type || "application/pdf"
    return { base64: btoa(binary), mime }
  })
}

/**
 * Resolve a resume blob for the selected (or requested) hub profile.
 * Team fork has no separate tailor/base diagnose pipeline — all aliases
 * resolve to the profile's default or named resume.
 */
export async function resolveResumeBlobResponse(opts?: {
  resumeId?: string | null
}): Promise<ResumeBlobResponse> {
  try {
    let resumeId =
      typeof opts?.resumeId === "string" && opts.resumeId.trim()
        ? opts.resumeId.trim()
        : null

    const defaultResumeId = async () => {
      const info = await fetchAutofillInfo()
      return info?.defaultResumeId ?? info?.resumes?.[0]?.id ?? null
    }

    if (!resumeId) resumeId = await defaultResumeId()
    if (!resumeId) {
      return { ok: false, message: "no_resume", base64URL: "" }
    }

    let file = await fetchResumeBlob(resumeId)
    if (!file) {
      // Stored "last used" ids go stale when the hub profile or resume is replaced.
      const fallbackId = await defaultResumeId()
      if (fallbackId && fallbackId !== resumeId) {
        resumeId = fallbackId
        file = await fetchResumeBlob(resumeId)
      }
    }
    if (!file) {
      return { ok: false, message: "download_failed", base64URL: "" }
    }

    const { base64, mime } = await blobToBase64(file.blob)
    const mimeType = file.mimeType || mime || "application/pdf"
    const extension =
      (file.fileName.split(".").pop() || "pdf").toLowerCase() || "pdf"

    return {
      ok: true,
      resumeId,
      fileName: file.fileName,
      mimeType,
      extension,
      base64,
      base64URL: `data:${mimeType};base64,${base64}`
    }
  } catch (err) {
    return {
      ok: false,
      message: err instanceof Error ? err.message : "fetch_failed",
      base64URL: ""
    }
  }
}
