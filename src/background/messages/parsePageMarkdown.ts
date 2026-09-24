import type { PlasmoMessaging } from "@plasmohq/messaging"

import { parseJobPageWithHub } from "~api/team-client"

const INTERNAL_SERVER_ERROR = 500

/**
 * AI fallback for the "Add This Job" form when the page scrapers come up short.
 * Replies in the Jobright shape the helper store reads, or 500 on failure.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const html = typeof req.body?.html === "string" ? req.body.html : ""
    if (!html) {
      res.send(INTERNAL_SERVER_ERROR)
      return
    }
    const url = typeof req.body?.url === "string" ? req.body.url : req.sender?.tab?.url
    const result = await parseJobPageWithHub({ html, url })
    if (!result.ok || !result.job) {
      console.warn("[parsePageMarkdown] hub parse failed:", result.error)
      res.send(INTERNAL_SERVER_ERROR)
      return
    }
    res.send({
      job_title: result.job.title,
      job_description: result.job.description,
      company: { company_name: result.job.company }
    })
  } catch (err) {
    console.warn("[parsePageMarkdown]", err)
    res.send(INTERNAL_SERVER_ERROR)
  }
}

export default handler
