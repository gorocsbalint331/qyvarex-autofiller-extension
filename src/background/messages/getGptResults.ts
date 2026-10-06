import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchAutofillInfo, regenerateAnswer } from "~api/team-client"
import { getJobContext } from "~background/lib/job-context"
import { getJobSalaryRange } from "~background/lib/job-salary"
import {
  buildLocalGptResults,
  isCurrentEmployerQuestion,
  isSalaryQuestion
} from "~lib/hub-to-jobright"
import { isNarrativeField } from "~lib/narrative-field"
import { applySiteAnswers, jobsiteHostname } from "~lib/site-answers"

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
    const pageHost = jobsiteHostname(hostnameFromSender(req.sender))
    const result = buildLocalGptResults(applySiteAnswers(hub, pageHost), elements, {
      salaryRange
    })
    await fillNarrativeFields(result.fill_data_list, elements, hub.profileId, req.sender)
    await fillUnansweredFromResume(
      result.fill_data_list,
      elements,
      hub,
      req.sender
    )
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

function hostnameFromSender(sender: chrome.runtime.MessageSender | undefined) {
  const raw = sender?.url || sender?.tab?.url || ""
  try {
    return new URL(raw).hostname
  } catch {
    return ""
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
          "Write only in English, even if the question or job posting is in another language.",
          "Use 4 to 6 sentences.",
          "Do not reuse a note written for a different job title.",
          "Answer in the first person as the candidate would submit it.",
          "Never say that something was not specified, not mentioned, or missing from the resume. Do not write \"I haven't specified\" or \"I have not mentioned\".",
          "Start with the practical answer. Drop any sentence that says a detail was absent from the resume.",
          "If the resume does not name the topic, write a direct practical answer from the candidate's listed work. Do not invent employers, degrees, dates, or tools."
        ]
      })
      if (!generated.ok || !generated.answer?.trim()) continue
      const answer = withoutResumeDisclaimer(generated.answer)
      if (!answer) continue
      const existing = fillDataList.find((row) => row.name === label)
      if (existing) existing.value = answer
      else fillDataList.push({ name: label, value: answer })
    } catch (error) {
      console.warn("[getGptResults] narrative field skipped", label, error)
    }
  }
}

function withoutResumeDisclaimer(answer: string) {
  let text = answer.replace(/\s+/g, " ").trim()
  text = text.replace(
    /I have(?: not|n['’]t) (?:specified|mentioned)[^.]*,\s*but\s+/gi,
    ""
  )
  text = text.replace(
    /(?:^|\.\s+)I have(?: not|n['’]t) (?:specified|mentioned)[^.]*(?:\.|$)/gi,
    ". "
  )
  text = text.replace(
    /(?:^|\.\s+)(?:This|That|It) (?:was|is) not (?:specified|mentioned)[^.]*(?:\.|$)/gi,
    ". "
  )
  return text.replace(/\s+/g, " ").replace(/^\.\s*/, "").replace(/\s+\./g, ".").trim()
}

function elementOptions(el: { options?: unknown }) {
  return Array.isArray(el.options)
    ? el.options.map((option) => String(option ?? "").trim()).filter(Boolean)
    : []
}

function resumeBrief(extras: unknown) {
  if (!extras || typeof extras !== "object") return ""
  const record = extras as Record<string, unknown>
  const lines: string[] = []
  const work = Array.isArray(record.workExperience)
    ? record.workExperience
    : Array.isArray(record.engineWorkExperience)
      ? record.engineWorkExperience
      : []
  for (const item of work.slice(0, 8)) {
    if (!item || typeof item !== "object") continue
    const job = item as Record<string, unknown>
    const title = [job.jobTitle, job.job_title, job.title].find(
      (value) => typeof value === "string" && value.trim()
    )
    const company = [job.companyName, job.organization, job.company].find(
      (value) => typeof value === "string" && value.trim()
    )
    const summary = [job.summary, job.description].find(
      (value) => typeof value === "string" && value.trim()
    )
    const heading = [title, company].filter(Boolean).join(" at ")
    if (heading) lines.push(heading)
    if (typeof summary === "string") lines.push(summary.slice(0, 400))
  }
  const skills = record.skills
  if (Array.isArray(skills)) {
    lines.push(`Skills: ${skills.slice(0, 40).map(String).join(", ")}`)
  } else if (typeof skills === "string" && skills.trim()) {
    lines.push(`Skills: ${skills.slice(0, 500)}`)
  }
  if (typeof record.salary === "string" && record.salary.trim()) {
    lines.push(`Stated salary: ${record.salary.trim()}`)
  }
  return lines.join("\n").slice(0, 1800)
}

function isIdentityQuestion(label: string) {
  const text = label.toLowerCase()
  return (
    /\b(first name|last name|full name|e-?mail|phone|mobile|address|city|linkedin|github)\b/.test(
      text
    ) && !/\b(salary|experience|notice|visa|sponsor)\b/.test(text)
  )
}

function parseNumberedAnswers(text: string, count: number) {
  const answers = Array.from({ length: count }, () => "")
  for (const line of text.split(/\n+/)) {
    const match = line.match(/^\s*(\d+)[.)]\s+(.+)$/)
    if (!match) continue
    const index = Number(match[1]) - 1
    if (index >= 0 && index < count) answers[index] = match[2].trim()
  }
  return answers
}

function snapChoice(answer: string, options: string[], multiple: boolean) {
  if (!options.length) return answer
  const norm = (value: string) => value.toLowerCase().replace(/[^a-z0-9#+.]+/g, " ").trim()
  const pick = (wanted: string) => {
    const target = norm(wanted)
    return (
      options.find((option) => norm(option) === target) ||
      options.find((option) => {
        const text = norm(option)
        return text.length >= 3 && (target.includes(text) || text.includes(target))
      }) ||
      ""
    )
  }
  if (!multiple) return pick(answer) || answer
  const parts = answer.split(/,| and /i).map((part) => part.trim()).filter(Boolean)
  const picked = parts.map(pick).filter(Boolean)
  return picked.length ? Array.from(new Set(picked)).join(", ") : answer
}

async function fillUnansweredFromResume(
  fillDataList: Array<{ name: string; value: string }>,
  elements: Array<{ label?: unknown; type?: unknown; options?: unknown; inputTag?: unknown }>,
  hub: { profileId?: string; extras?: unknown },
  sender: chrome.runtime.MessageSender | undefined
) {
  const answered = new Set(
    fillDataList.filter((row) => row.value?.trim()).map((row) => row.name)
  )
  const pending = elements.filter((el) => {
    const label = typeof el.label === "string" ? el.label.trim() : ""
    if (!label || answered.has(label) || isIdentityQuestion(label)) return false
    if (isCurrentEmployerQuestion(label.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())) {
      return false
    }
    if (isSalaryQuestion(label, elementOptions(el))) return false
    if (elementTag(el) === "file") return false
    return true
  }).slice(0, 12)
  if (!pending.length) return

  const job = await getJobContext(sender)
  const brief = resumeBrief(hub.extras)
  const lines = pending
    .map((el, index) => {
      const options = elementOptions(el)
      const choices = options.length ? ` Choices: ${options.join(" | ")}` : ""
      return `${index + 1}. ${String(el.label).trim()}.${choices}`
    })
    .join("\n")

  try {
    const generated = await regenerateAnswer({
      profileId: hub.profileId,
      question: `Answer each application question from the candidate resume.\n${lines}`.slice(
        0,
        1900
      ),
      jobContext: {
        title: job.title || undefined,
        company: job.company || undefined,
        url: job.url || undefined,
      },
      promptList: [
        "Write only in English, even if the question is in another language.",
        "Answer in the first person, as the candidate would submit it.",
        "Never say that something was not specified, not mentioned, or missing from the resume. Do not write \"I haven't specified\" or \"I have not mentioned\".",
        "Use the resume and profile. Do not invent employers, degrees, dates, or tools. If a topic is absent, still give a short practical answer from the listed work.",
        brief ? `Resume:\n${brief}` : "Use the candidate profile already provided.",
        "Reply with exactly one line per question, in the form: 1. answer",
        "When choices are listed, copy the matching choice exactly. If the question allows more than one, list every matching choice separated by commas.",
        "For YES or NO questions, reply YES or NO.",
        "For privacy, consent, and whether the CV was submitted in English, reply YES.",
        "For a notice period that is not stated on the resume, reply: 1 month.",
        "Keep each answer to a single short line."
      ]
    })
    if (!generated.ok || !generated.answer?.trim()) return
    const answers = parseNumberedAnswers(generated.answer, pending.length)
    pending.forEach((el, index) => {
      const label = String(el.label).trim()
      const options = elementOptions(el)
      const multiple = String(el.type || "") === "checkbox" && options.length > 1
      const value = withoutResumeDisclaimer(
        snapChoice(answers[index] || "", options, multiple)
      )
      if (!value) return
      const existing = fillDataList.find((row) => row.name === label)
      if (existing) existing.value = value
      else fillDataList.push({ name: label, value })
    })
  } catch (error) {
    console.warn("[getGptResults] resume answers skipped", error)
  }
}

export default handler
