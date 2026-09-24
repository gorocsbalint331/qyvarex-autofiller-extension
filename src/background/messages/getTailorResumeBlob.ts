import type { PlasmoMessaging } from "@plasmohq/messaging"

import { resolveResumeBlobResponse } from "~background/lib/resume-blob"

/**
 * Team fork: no separate tailor pipeline — fall back to profile default resume.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const resumeId =
    typeof req.body?.resumeId === "string"
      ? req.body.resumeId
      : typeof req.body?.tailorId === "string"
        ? req.body.tailorId
        : null
  res.send(await resolveResumeBlobResponse({ resumeId }))
}

export default handler
