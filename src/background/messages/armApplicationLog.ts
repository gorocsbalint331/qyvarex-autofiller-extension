import type { PlasmoMessaging } from "@plasmohq/messaging"

import { armPendingApplication } from "~background/lib/application-log"
import { getJobSalaryRange } from "~background/lib/job-salary"
import { formatSalaryRangeLabel } from "~lib/salary"

/** A submit button was clicked on a job form; wait for the success page to confirm. */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const tabId = req.sender?.tab?.id
  if (tabId == null) {
    res.send({ ok: false })
    return
  }
  const body = req.body ?? {}
  let cost = typeof body.cost === "string" ? body.cost.trim() : ""
  if (!cost) {
    const range = await getJobSalaryRange(req.sender)
    if (range) cost = formatSalaryRangeLabel(range)
  }
  await armPendingApplication(tabId, {
    title: typeof body.title === "string" ? body.title : "",
    company: typeof body.company === "string" ? body.company : "",
    link: req.sender?.tab?.url || (typeof body.link === "string" ? body.link : ""),
    cost
  })
  res.send({ ok: true })
}

export default handler
