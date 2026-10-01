import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo, regenerateAnswer } from "~api/team-client"
import { getJobContext } from "~background/lib/job-context"
import { getJobSalaryRange } from "~background/lib/job-salary"
import { buildLocalGptResults, isSalaryQuestion } from "~lib/hub-to-jobright"
import { isNarrativeField } from "~lib/narrative-field"

/**
 * Local fill-v2 stand-in: map extracted form labels → hub answers / identity.
 * Engine helpers call this instead of Jobright /swan/autofill/fill-v2.
 */
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const params = req.body?.params ?? req.body ?? {}
    const elements = Array.isArray(params.elements) ? params.elements : []
    const hub = await fetchAutofillInfo(
      typeof params.profileId === "string" ? params.profileId : null
    )

    if (!hub) {
      res.send({
        ok: false,
        data: {
          HTTP_STATUS: 401
        },
        message: "No profile selected"
      })
      return
    }

    const asksSalary = elements.some(
      (el) =>
        typeof el?.label === "string" &&
        isSalaryQuestion(
          el.label,
          Array.isArray(el.options) ? el.options.map((o: unknown) => String(o ?? "")) : []
        )
    )
    const salaryRange = asksSalary ? await getJobSalaryRange(req.sender) : null
    const result = buildLocalGptResults(hub, elements, { salaryRange })
    await fillNarrativeFields(result.fill_data_list, elements, hub.profileId, req.sender)
    res.send({
      ok: true,
      data: result
    })
  } catch (err) {
    console.error("[getGptResults] local resolve failed", err)
    res.send({
      ok: false,
      data: {
        HTTP_STATUS: 500
      },
      message: err instanceof Error ? err.message : "resolve_failed"
    })
  }
}

function elementTag(el: { inputTag?: unknown }) {
  return typeof el.inputTag === "string" ? el.inputTag.toLowerCase() : ""
}

async function fillNarrativeFields(
  fillDataList: Array<{ name: string; value: string }>,
  elements: Array<{ label?: unknown; inputTag?: unknown }>,
  profileId: string | undefined,
  sender: chrome.runtime.MessageSender | undefined
) {
  const pending = elements.filter((el) => {
    const label = typeof el.label === "string" ? el.label.trim() : ""
    if (!label || !isNarrativeField(label)) return false
    const tag = elementTag(el)
    if (tag === "input" || tag === "select") return false
    return true
  })
  if (!pending.length) return

  const job = await getJobContext(sender)
  if (!job.title) return

  for (const el of pending.slice(0, 3)) {
    const label = String(el.label).trim()
    try {
      const generated = await regenerateAnswer({
        profileId,
        question: label,
        jobContext: {
          title: job.title,
          company: job.company || undefined,
          url: job.url || undefined
        },
        promptList: [
          `Write this answer for the role "${job.title}".`,
          "Use 4 to 6 sentences.",
          "Do not reuse a note written for a different job title."
        ]
      })
      if (!generated.ok || !generated.answer?.trim()) continue
      const existing = fillDataList.find((row) => row.name === label)
      if (existing) existing.value = generated.answer.trim()
      else fillDataList.push({ name: label, value: generated.answer.trim() })
    } catch (error) {
      console.warn("[getGptResults] narrative field skipped", label, error)
    }
  }
}

export default handler
