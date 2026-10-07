import type { PlasmoMessaging } from "@plasmohq/messaging"

import { rememberAutofillPosting } from "~background/lib/application-log"
import { getJobSalaryRange } from "~background/lib/job-salary"
import { formatSalaryRangeLabel } from "~lib/salary"

/** Autofill was clicked. Keep this tab's site URL, company, and role until submit. */
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
  const bodyLink = typeof body.link === "string" ? body.link.trim() : ""
  await rememberAutofillPosting(tabId, {
    title: typeof body.title === "string" ? body.title : "",
    company: typeof body.company === "string" ? body.company : "",
    link: /^https?:/i.test(bodyLink) ? bodyLink : req.sender?.tab?.url || bodyLink,
    cost
  })
  res.send({ ok: true })
}

export default handler
