import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"

/** Filename for tailor resume UI — team hub uses base resume name. */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  try {
    const info = await fetchAutofillInfo()
    const def =
      info?.resumes?.find((r) => r.id === info.defaultResumeId) ??
      info?.resumes?.[0]
    res.send(def?.fileName || def?.displayName || null)
  } catch {
    res.send(null)
  }
}

export default handler
