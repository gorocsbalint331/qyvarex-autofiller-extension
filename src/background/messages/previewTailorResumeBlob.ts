import type { PlasmoMessaging } from "@plasmohq/messaging"

import { resolveResumeBlobResponse } from "~background/lib/resume-blob"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const resumeId =
    typeof req.body?.resumeId === "string" ? req.body.resumeId : null
  res.send(await resolveResumeBlobResponse({ resumeId }))
}

export default handler
