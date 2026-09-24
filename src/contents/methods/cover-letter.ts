// @ts-nocheck
/**
 * Autofill cover-letter detection, generation request, and text fill helpers.
 */

import { sendToBackground } from "@plasmohq/messaging"
import { checkpoint } from "./cancellation.ts"
import { FIELD_TYPE } from "../../core/enums.ts"
import { resolveCurrentJobId } from "../../utils/current-job-id.ts"

export let DEFAULT_AUTOFILL_COVER_LETTER_PROMPT =
  "Write a tailored cover letter for this job application using the candidate's resume and the job description. Keep it concise, specific, and employer-facing: open with clear interest in the role, connect the candidate's most relevant experience to the company's needs, and close with a confident next step. Do not invent facts, do not include placeholders, and output only the cover letter text."

function normalizeLabelKey(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
}

function isTextEditableElement(element) {
  if (!element) return false
  let tagName = element.tagName?.toLowerCase()
  let inputType =
    (element.type || element.getAttribute?.("type") || "")?.toLowerCase() ?? ""
  return (
    "textarea" === tagName ||
    ("input" === tagName
      ? !["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"].includes(
          inputType
        )
      : element.isContentEditable ||
        element.getAttribute?.("contenteditable") === "true")
  )
}

function looksLikeCoverLetterLabel(label) {
  let normalized = normalizeLabelKey(label ?? "")
  return !(
    !normalized.includes("cover letter") ||
    /\b(upload|attach|attachment|attached|file|resume|cv)\b/.test(normalized) ||
    /^(do|did|have|has|will|would|can|could|is|are)\b/.test(normalized)
  )
}

function isCoverLetterTextRule(rule) {
  return (
    rule.type === FIELD_TYPE.TEXT &&
    isTextEditableElement(rule.$input) &&
    looksLikeCoverLetterLabel(rule.label)
  )
}

export function markTextCoverLetterRules(rules = []) {
  return rules.map((rule) => {
    let children = rule.children
    let marked = isCoverLetterTextRule(rule)
      ? {
          ...rule,
          type: FIELD_TYPE.COVER_LETTER,
        }
      : rule
    return Array.isArray(children)
      ? {
          ...marked,
          children: markTextCoverLetterRules(children),
        }
      : marked
  })
}

export function prepareCoverLetterFillTask({ rules, ...rest }) {
  let markedRules = markTextCoverLetterRules(rules)
  let coverLetterRules = findCoverLetterRules(markedRules)
  let startCoverLetterRequest = (coverLetter = rest.coverLetter) =>
    startAutofillCoverLetterRequest({
      ...rest,
      coverLetter,
      rules: markedRules,
    })
  return {
    rules: markedRules,
    task: coverLetterRules.length
      ? {
          rules: coverLetterRules,
          coverLetterRequest: startCoverLetterRequest(),
          startCoverLetterRequest,
          lateRequestAttempted: false,
        }
      : null,
  }
}

export function findCoverLetterRules(rules = []) {
  let found = []
  for (let rule of rules) {
    rule.type === FIELD_TYPE.COVER_LETTER && found.push(rule)
    let children = rule.children
    Array.isArray(children) && found.push(...findCoverLetterRules(children))
  }
  return found
}

export function withoutCoverLetterRules(rules = []) {
  return rules
    .filter((rule) => rule.type !== FIELD_TYPE.COVER_LETTER)
    .map((rule) => {
      let children = rule.children
      return Array.isArray(children)
        ? {
            ...rule,
            children: withoutCoverLetterRules(children),
          }
        : rule
    })
}

function hasCoverLetterMarkdown(coverLetter) {
  return !!coverLetter?.markdown?.trim()
}

export function parseAutofillCoverLetterResumeId(resumeId) {
  if (null == resumeId || "" === resumeId) return
  if ("number" == typeof resumeId) return resumeId
  let trimmed = resumeId.trim()
  return trimmed || undefined
}

export function getCurrentAutofillJobId(explicitJobId) {
  let pageUrl = "undefined" != typeof window ? window.location.href : ""
  return resolveCurrentJobId({
    explicitJobId,
    pageUrl,
  })
}

async function generateAutofillCoverLetter(body) {
  let response = await sendToBackground({
    name: "generateAutofillCoverLetter",
    body,
  })
  return response?.data ?? null
}

export function startAutofillCoverLetterRequest({
  rules,
  coverLetter,
  jobId,
  userPrompt,
  resumeId,
  tailorId,
  coverLetterId,
  generateCoverLetter = generateAutofillCoverLetter,
}) {
  let coverLetterRules = findCoverLetterRules(rules)
  if (!coverLetterRules.length || hasCoverLetterMarkdown(coverLetter)) return null
  let resolvedJobId = getCurrentAutofillJobId(jobId)
  let resolvedPrompt = userPrompt?.trim() || DEFAULT_AUTOFILL_COVER_LETTER_PROMPT
  if (!resolvedJobId || !resolvedPrompt) return null
  let parsedResumeId = parseAutofillCoverLetterResumeId(resumeId)
  let requestBody = {
    jobId: resolvedJobId,
    userPrompt: resolvedPrompt,
    ...(parsedResumeId
      ? {
          resumeId: parsedResumeId,
        }
      : {}),
    ...(tailorId
      ? {
          tailorId,
        }
      : {}),
    ...(coverLetterId
      ? {
          coverLetterId,
        }
      : {}),
  }
  return generateCoverLetter(requestBody)
    .then((result) => {
      let coverLetterResult = result ?? null
      return coverLetterResult?.coverLetterId && notifyCoverLetterListeners(coverLetterResult), coverLetterResult
    })
    .catch(() => null)
}

let coverLetterGeneratedListeners = new Set()

export function onAutofillCoverLetterGenerated(listener) {
  return coverLetterGeneratedListeners.add(listener), () => coverLetterGeneratedListeners.delete(listener)
}

function notifyCoverLetterListeners(coverLetterResult) {
  for (let listener of coverLetterGeneratedListeners)
    try {
      listener(coverLetterResult)
    } catch (error) {
      console.warn("[autofill cover letter] listener threw", error)
    }
}

function findCoverLetterAnswerText(answer, coverLetterRules = []) {
  let regular = answer?.regular ?? {}
  let lookupInMap = (valueMap) => {
    for (let rule of coverLetterRules) {
      let normalizedLabel = normalizeLabelKey(rule.label)
      let matchingKey = Object.keys(valueMap).find(
        (key) => normalizeLabelKey(key) === normalizedLabel
      )
      let rawValue = matchingKey ? valueMap[matchingKey] : undefined
      let coerced = coerceAnswerValue(rawValue)
      if (coerced) return coerced
    }
    return ""
  }
  let fromRegular = lookupInMap(regular)
  if (fromRegular) return fromRegular
  let fromFillDataList = Object.fromEntries(
    (answer?.fillDataList ?? [])
      .filter((entry) => entry?.name)
      .map((entry) => [entry.name, entry.value])
  )
  return lookupInMap(fromFillDataList)
}

function coerceAnswerValue(value) {
  return Array.isArray(value)
    ? value.map((item) => String(item ?? "").trim()).find(Boolean) ?? ""
    : String(value ?? "").trim()
}

export async function resolveCoverLetterTextForFill({
  coverLetter,
  coverLetterRequest,
  answer,
  coverLetterRules,
}) {
  let fromExisting = formatCoverLetterMarkdownAsText(coverLetter?.markdown)
  if (fromExisting) return fromExisting
  let generated = coverLetterRequest ? await coverLetterRequest : null
  let fromGenerated = formatCoverLetterMarkdownAsText(generated?.markdown)
  return fromGenerated || findCoverLetterAnswerText(answer, coverLetterRules)
}

export async function fillCoverLetterTask({
  coverLetterRules = [],
  coverLetter,
  coverLetterRequest,
  answer,
  operationConfig,
  updateMissedProgress,
}) {
  if (!coverLetterRules.length) return
  let coverLetterText = await resolveCoverLetterTextForFill({
    coverLetter,
    coverLetterRequest,
    answer,
    coverLetterRules,
  })
  checkpoint()
  let fillFn =
    operationConfig[FIELD_TYPE.COVER_LETTER] ?? operationConfig[FIELD_TYPE.TEXT]
  if (!coverLetterText || !fillFn) {
    for (let rule of coverLetterRules) updateMissedProgress?.(rule.label)
    return
  }
  let valuesByLabel = Object.fromEntries(
    coverLetterRules.map((rule) => [rule.label, coverLetterText])
  )
  for (let rule of coverLetterRules) checkpoint(), await fillFn(rule, valuesByLabel)
}

function withCoverLetterOperation(operationConfig) {
  return {
    ...operationConfig,
    [FIELD_TYPE.COVER_LETTER]:
      operationConfig[FIELD_TYPE.COVER_LETTER] ?? operationConfig[FIELD_TYPE.TEXT],
  }
}

export async function fillPreparedCoverLetterTask({
  task,
  coverLetter,
  answer,
  operationConfig,
  updateMissedProgress,
}) {
  if (!task?.rules.length) return
  let coverLetterRequest = task.coverLetterRequest
  coverLetterRequest ||
    task.lateRequestAttempted ||
    ((task.lateRequestAttempted = true),
    (coverLetterRequest = task.startCoverLetterRequest(coverLetter)),
    (task.coverLetterRequest = coverLetterRequest)),
    await fillCoverLetterTask({
      coverLetterRules: task.rules,
      coverLetter,
      coverLetterRequest,
      answer,
      updateMissedProgress,
      operationConfig: withCoverLetterOperation(operationConfig),
    })
}

function decodeHtmlEntities(text) {
  return text
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
}

function stripCoverLetterPreamble(text) {
  let lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
  let startIndex = lines.findIndex((line) =>
    /^(dear\b|to\b.*hiring manager|i am applying\b|i'?m applying\b)/i.test(line)
  )
  return (
    startIndex < 0 && (startIndex = lines.findIndex((line) => /[.!?]$/.test(line))),
    startIndex <= 0
  )
    ? lines.join("\n\n")
    : lines.slice(startIndex).join("\n\n")
}

function stripCoverLetterClosing(text) {
  let lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
  if (lines.length <= 1) return lines.join("\n\n")
  let lastLine = lines.at(-1) ?? ""
  let secondLastLine = lines.at(-2) ?? ""
  let isClosingPhrase =
    /^(thank you|thanks|sincerely|best|regards|warm regards)\b/i.test(secondLastLine)
  let isShortClosing =
    isClosingPhrase &&
    !/[.;:!?]$/.test(secondLastLine) &&
    secondLastLine.split(/\s+/).length <= 4
  let isSignatureName =
    /^[A-Za-z][A-Za-z .'-]{1,60}$/.test(lastLine) && !/[.!?]$/.test(lastLine)
  return isShortClosing && isSignatureName
    ? lines.slice(0, -2).join("\n\n")
    : isClosingPhrase && isSignatureName
      ? lines.slice(0, -1).join("\n\n")
      : lines.join("\n\n")
}

export function formatCoverLetterMarkdownAsText(markdown) {
  if (!markdown?.trim()) return ""
  let withoutHtml = decodeHtmlEntities(
    markdown
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n\n")
      .replace(/<[^>]+>/g, "")
  )
  let plainText = withoutHtml
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/\r\n/g, "\n")
    .replace(/```[\s\S]*?```/g, (block) =>
      block
        .replace(/^```[^\n]*\n?/, "")
        .replace(/\n?```$/, "")
        .trim()
    )
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "$1")
    .replace(/(?<!_)_([^_]+)_(?!_)/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
  return stripCoverLetterClosing(stripCoverLetterPreamble(plainText))
}

export function applyCoverLetterTextToAnswer(
  answer,
  coverLetter,
  labelHints = ["Cover Letter"]
) {
  let coverLetterText = formatCoverLetterMarkdownAsText(coverLetter?.markdown)
  if (!coverLetterText) return answer
  let hintKeys = new Set(labelHints.map((hint) => normalizeLabelKey(hint)))
  let matchesHint = (name) => !!name && hintKeys.has(normalizeLabelKey(name))
  let didUpdate = false
  let regular = Object.fromEntries(
    Object.entries(answer.regular ?? {}).map(([key, value]) =>
      matchesHint(key)
        ? ((didUpdate = true), [key, coverLetterText])
        : [key, value]
    )
  )
  let fillDataList = answer.fillDataList?.map((entry) =>
    matchesHint(entry?.name)
      ? ((didUpdate = true),
        {
          ...entry,
          value: coverLetterText,
        })
      : entry
  )
  return didUpdate
    ? {
        ...answer,
        regular,
        ...(fillDataList
          ? {
              fillDataList,
            }
          : {}),
      }
    : answer
}
