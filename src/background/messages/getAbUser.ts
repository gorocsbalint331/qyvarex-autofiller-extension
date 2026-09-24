import type { PlasmoMessaging } from "@plasmohq/messaging"

/** Control cohort — no Jobright A/B experiments. */
const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  res.send({
    config: {},
    stub: true
  })
}

export default handler
