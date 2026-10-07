import type { PlasmoMessaging } from "@plasmohq/messaging"

import { recordApplication, withAutofillPosting } from "~background/lib/application-log"
import { getJobSalaryRange } from "~background/lib/job-salary"
import { formatSalaryRangeLabel } from "~lib/salary"

/**
 * Append a row to the configured Google Sheet via the team hub (manual
 * "Log to Google Sheet"). Skips jobs already logged in the last 24h unless
 * `force` is set.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const body = req.body ?? {}
    let cost = typeof body.cost === "string" ? body.cost.trim() : ""
    if (!cost) {
      const range = await getJobSalaryRange(req.sender)
      if (range) cost = formatSalaryRangeLabel(range)
    }
    const bodyLink = typeof body.link === "string" ? body.link.trim() : ""
    const meta = await withAutofillPosting(req.sender?.tab?.id, {
      title: typeof body.title === "string" ? body.title : "",
      company: typeof body.company === "string" ? body.company : "",
      link: /^https?:/i.test(bodyLink) ? bodyLink : req.sender?.tab?.url || bodyLink,
      cost,
      resume: typeof body.resume === "string" ? body.resume : "",
      country: typeof body.country === "string" ? body.country : "",
      other: typeof body.other === "string" ? body.other : ""
    })
    const result = await recordApplication(meta, { force: body.force === true })
    res.send(result)
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "log_failed"
    })
  }
}

export default handler
