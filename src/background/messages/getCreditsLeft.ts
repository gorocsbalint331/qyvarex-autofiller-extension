import type { PlasmoMessaging } from "@plasmohq/messaging"

/**
 * Team fork has no credit metering — report subscribed + high balance
 * so Jobright UI (payment banners, out-of-credit modals) stays quiet.
 */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send({
    credit: {
      autofill: 9999,
      tailor: 9999,
      coverLetter: 9999
    },
    subscribed: true,
    stub: true
  })
}

export default handler
