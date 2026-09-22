import { sendToBackground as plasmohqSendToBackground } from "@plasmohq/messaging"

import type { DiscoveredField } from "~contents/crawler/types"

/** Loose messaging wrapper — extension BG handlers are not typed in this package. */
async function sendToBackground(msg: {
  name: string
  body?: unknown
}): Promise<any> {
  return plasmohqSendToBackground(msg as never)
}

/**
 * Clean-TS answer helpers (extension-owned).
 * Parcel reference: engine/helper-app/src/contents/methods/answer.js
 */

export type FillAnswer = { name: string; value: string }

const NON_ALNUM_EXCEPT_CJK =
  /[^a-zA-Z0-9\s\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/g

/** Strip punctuation (keep CJK) — oracle `removeSpecialCharacters`. */
export function removeSpecialCharacters(text: string): string {
  return text.replace(NON_ALNUM_EXCEPT_CJK, "")
}

/** Label equality after stripping punctuation / asterisks / whitespace. */
export function isMatched(a: unknown, b: unknown): boolean {
  if (!a || !b || typeof a !== "string" || typeof b !== "string") return false
  const left = removeSpecialCharacters(a)
    .replace(/\s*\*\s*/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim()
  const right = removeSpecialCharacters(b)
    .replace(/\s*\*\s*/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim()
  return !!left && !!right && left === right
}

export function ensureArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

/** Parse `YYYY-MM-DD` (or / .) into year / short month / day. */
export function parseDateParts(raw: string | null | undefined): {
  year: string
  month: string
  day: string
} {
  try {
    if (!raw || typeof raw !== "string") {
      return { year: "", month: "", day: "" }
    }
    const normalized = raw.replace(/[/.]/g, "-").trim()
    const parts = normalized.split("-")
    if (parts.length < 2) return { year: "", month: "", day: "" }
    const [year, monthNum, day] = parts
    const MONTHS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
    const monthIndex = Number(monthNum) - 1
    const month =
      monthIndex >= 0 && monthIndex < 12 ? MONTHS[monthIndex] : ""
    return {
      year: year || "",
      month,
      day: day ? day.replace(/^0/, "") : ""
    }
  } catch {
    return { year: "", month: "", day: "" }
  }
}

/**
 * Ask background getGptResults for answers mapped to discovered labels.
 */
export async function fetchFormAnswers(
  fields: DiscoveredField[]
): Promise<FillAnswer[]> {
  const elements = fields.map((f) => ({
    label: f.label,
    type: f.type,
    options: f.options || []
  }))

  const res = await sendToBackground({
    name: "getGptResults",
    body: {
      params: {
        elements,
        parser: "internal",
        source: "cleanTs",
        url: typeof location !== "undefined" ? location.href : ""
      }
    }
  })

  const list = res?.data?.fill_data_list
  if (!Array.isArray(list)) return []
  return list
    .map((row: { name?: string; value?: unknown }) => ({
      name: String(row?.name || ""),
      value: Array.isArray(row?.value)
        ? String(row.value[0] ?? "")
        : String(row?.value ?? "")
    }))
    .filter((r: FillAnswer) => r.name && r.value)
}

export async function fetchResumeFile(): Promise<{
  file: File
  fileName: string
} | null> {
  const res = await sendToBackground({
    name: "getResumeBlob",
    body: {}
  })
  if (!res?.ok || !res.base64URL) return null
  const file = await dataUrlToFile(
    res.base64URL,
    res.fileName || `resume.${res.extension || "pdf"}`,
    res.mimeType
  )
  return { file, fileName: file.name }
}

export async function fetchCoverLetterFile(): Promise<{
  file: File
  fileName: string
} | null> {
  const res = await sendToBackground({
    name: "getCoverLetterBlob",
    body: {}
  })
  if (!res?.ok || !res.base64URL) return null
  const file = await dataUrlToFile(
    res.base64URL,
    res.fileName || `cover-letter.${res.extension || "pdf"}`,
    res.mimeType
  )
  return { file, fileName: file.name }
}

async function dataUrlToFile(
  dataUrl: string,
  fileName: string,
  mimeHint?: string
): Promise<File> {
  const res = await fetch(dataUrl)
  const blob = await res.blob()
  return new File([blob], fileName, {
    type: mimeHint || blob.type || "application/pdf"
  })
}

export function answerMap(answers: FillAnswer[]): Map<string, string> {
  const m = new Map<string, string>()
  for (const a of answers) {
    m.set(a.name.trim().toLowerCase(), a.value)
    m.set(a.name.replace(/\s*\*+\s*/g, " ").trim().toLowerCase(), a.value)
  }
  return m
}

export function lookupFieldAnswer(
  map: Map<string, string>,
  label: string
): string | null {
  const key = label.replace(/\s*\*+\s*/g, " ").trim().toLowerCase()
  return map.get(key) || map.get(label.trim().toLowerCase()) || null
}
