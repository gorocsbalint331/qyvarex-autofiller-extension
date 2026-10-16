/**
 * Join.com apply steps. Screening questions live in the page data as
 * /apply/question-{position}. The sidebar remembers each label's URL so a
 * click can open that step.
 */

import { normalizeFieldLabel } from "../utils/fieldLabel.ts"

export type JoinQuestion = {
  question: string
  type: string
  required: boolean
  options: string[]
  href: string
  position: number
}

const STORAGE_KEY = "qx-join-step-hrefs"

export function isJoinPage(url: URL) {
  return /(^|\.)join\.com$/i.test(url.hostname)
}

function applyBase(pathname = location.pathname) {
  const match = pathname.match(/^(.*\/apply)(?:\/|$)/i)
  return match ? match[1] : ""
}

function jobKey(pathname = location.pathname) {
  return pathname.match(/\/companies\/[^/]+\/\d+/)?.[0] || pathname
}

function readStore(): Record<string, Record<string, string>> {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}")
    return parsed && typeof parsed === "object" ? parsed : {}
  } catch {
    return {}
  }
}

export function rememberJoinHref(label: string, href: string) {
  const key = normalizeFieldLabel(label)
  if (!key || !href) return
  const store = readStore()
  const job = jobKey()
  store[job] = { ...(store[job] || {}), [key]: href }
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  } catch {
    /* private browsing */
  }
}

export function joinStepHref(label: string) {
  const key = normalizeFieldLabel(label)
  if (!key) return ""
  return readStore()[jobKey()]?.[key] || ""
}

export function readJoinQuestions(): JoinQuestion[] {
  if (typeof location === "undefined" || !isJoinPage(new URL(location.href))) return []
  const base = applyBase()
  if (!base) return []
  const raw = document.getElementById("__NEXT_DATA__")?.textContent || ""
  if (!raw) return []
  let data: { props?: { pageProps?: { initialProps?: { __APOLLO_STATE__?: Record<string, unknown> } } } }
  try {
    data = JSON.parse(raw)
  } catch {
    return []
  }
  const state = data?.props?.pageProps?.initialProps?.__APOLLO_STATE__
  if (!state) return []
  const questions: JoinQuestion[] = []
  for (const value of Object.values(state)) {
    if (!value || typeof value !== "object") continue
    const row = value as {
      __typename?: string
      question?: string
      type?: string
      isRequired?: boolean
      options?: unknown
      position?: number
    }
    if (row.__typename !== "JobScreeningQuestion") continue
    const question = String(row.question || "").replace(/\s+/g, " ").trim()
    const position = Number(row.position)
    if (!question || !position) continue
    questions.push({
      question,
      type: String(row.type || "TEXT"),
      required: row.isRequired === true,
      options: Array.isArray(row.options) ? row.options.map((option) => String(option)) : [],
      href: `${location.origin}${base}/question-${position}`,
      position,
    })
  }
  questions.sort((left, right) => left.position - right.position)
  return questions
}

export function joinQuestionForPath(pathname = location.pathname) {
  const match = pathname.match(/\/question-(\d+)(?:\/|$)/i)
  if (!match) return null
  const position = Number(match[1])
  return readJoinQuestions().find((question) => question.position === position) || null
}

export function joinResumeHref() {
  const base = applyBase()
  return base ? `${location.origin}${base}/cv` : ""
}

export function rememberJoinQuestions(questions = readJoinQuestions()) {
  const resume = joinResumeHref()
  if (resume) rememberJoinHref("Resume/CV", resume)
  for (const question of questions) rememberJoinHref(question.question, question.href)
  return questions
}
