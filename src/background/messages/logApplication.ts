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
    const manual = body.manual === true
    let cost = typeof body.cost === "string" ? body.cost.trim() : ""
    if (!cost && !manual) {
      const range = await getJobSalaryRange(req.sender)
      if (range) cost = formatSalaryRangeLabel(range)
    }
    const bodyLink = typeof body.link === "string" ? body.link.trim() : ""
    const text = (value: unknown) => (typeof value === "string" ? value : "")
    const incoming = {
      title: text(body.title),
      company: text(body.company),
      link: /^https?:/i.test(bodyLink) ? bodyLink : req.sender?.tab?.url || bodyLink,
      cost,
      resume: text(body.resume),
      country: text(body.country),
      other: text(body.other),
      status: text(body.status),
      appliedDate: text(body.appliedDate)
    }
    const meta = manual
      ? incoming
      : await withAutofillPosting(req.sender?.tab?.id, incoming)
    const result = await recordApplication(meta, { force: body.force === true, manual })
    res.send(result)
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "log_failed"
    })
  }
}

export default handler
