import type { PlasmoMessaging } from "@plasmohq/messaging"

import { signOut } from "~api/team-client"

/** Clears the hub session used by the sidebar. */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  try {
    await signOut()
    res.send({ ok: true })
  } catch (error) {
    res.send({
      ok: false,
      message: error instanceof Error ? error.message : "sign_out_failed"
    })
  }
}

export default handler
