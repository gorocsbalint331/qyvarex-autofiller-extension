import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo } from "~api/team-client"

/** Current cover letter metadata from the selected hub profile. */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  try {
    const info = await fetchAutofillInfo()
    if (!info) {
      res.send(null)
      return
    }
    const letters = info.coverLetters ?? []
    const def =
      letters.find((c) => c.id === info.defaultCoverLetterId) ?? letters[0]
    if (!def) {
      res.send(null)
      return
    }
    res.send({
      id: def.id,
      coverLetterId: def.id,
      name: def.displayName || def.fileName,
      fileName: def.fileName,
      mimeType: def.mimeType,
      isDefault: !!def.isDefault
    })
  } catch {
    res.send(null)
  }
}

export default handler
