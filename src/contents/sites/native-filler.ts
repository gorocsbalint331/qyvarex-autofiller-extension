/**
 * Clean-TS BaseFiller — discover → answers → fill native fields → upload docs.
 * Replaces Parcel fill *operations* for sites with native HTML controls.
 */

import {
  detectAtsSite,
  discoverFieldsForSite
} from "~contents/crawler/discover-factory"
import type { AtsSiteId, DiscoveredField } from "~contents/crawler/types"
import { delay } from "~contents/crawler/utils/delay"
import {
  answerMap,
  fetchCoverLetterFile,
  fetchFormAnswers,
  fetchResumeFile,
  lookupFieldAnswer,
  type FillAnswer
} from "~contents/methods/native-answer"
import {
  fillCheckboxField,
  fillInputTextField,
  fillRadioGroupField,
  fillSelectField,
  uploadFiles
} from "~contents/methods/native-dom"

export type FillReport = {
  site: AtsSiteId
  discovered: number
  answered: number
  filled: number
  missed: string[]
  resumeUploaded: boolean
  coverLetterUploaded: boolean
}

function findInputForLabel(label: string): HTMLElement | null {
  const want = label.replace(/\s*\*+\s*/g, " ").trim().toLowerCase()
  const labels = Array.from(document.querySelectorAll("label"))
  for (const lab of labels) {
    const text = (lab.textContent || "")
      .replace(/\s*\*+\s*/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
    if (text !== want && !text.startsWith(want)) continue
    if (lab.htmlFor) {
      const byId = document.getElementById(lab.htmlFor)
      if (byId) return byId
    }
    const nested = lab.querySelector("input, textarea, select")
    if (nested) return nested as HTMLElement
  }

  // aria-label / aria-labelledby fallback
  const controls = Array.from(
    document.querySelectorAll("input, textarea, select")
  ) as HTMLElement[]
  for (const el of controls) {
    const aria = (el.getAttribute("aria-label") || "").toLowerCase()
    if (aria && aria.replace(/\s*\*/g, "").trim() === want) return el
  }
  return null
}

function collectRadios(nameOrEl: HTMLInputElement): HTMLInputElement[] {
  const name = nameOrEl.name
  if (name) {
    return Array.from(
      document.querySelectorAll(`input[type="radio"][name="${CSS.escape(name)}"]`)
    ) as HTMLInputElement[]
  }
  const parent = nameOrEl.closest("fieldset, div, section") || document.body
  return Array.from(
    parent.querySelectorAll('input[type="radio"]')
  ) as HTMLInputElement[]
}

function collectCheckboxes(el: HTMLInputElement): HTMLInputElement[] {
  const parent = el.closest("fieldset, div, section") || document.body
  return Array.from(
    parent.querySelectorAll('input[type="checkbox"]')
  ) as HTMLInputElement[]
}

export class BaseFiller {
  site: AtsSiteId
  hostname: string
  href: string

  constructor(opts?: { hostname?: string; href?: string; site?: AtsSiteId }) {
    this.hostname =
      opts?.hostname ||
      (typeof location !== "undefined" ? location.hostname : "")
    this.href =
      opts?.href || (typeof location !== "undefined" ? location.href : "")
    this.site = opts?.site || detectAtsSite(this.hostname, this.href)
  }

  discover(doc: Document = document): DiscoveredField[] {
    return discoverFieldsForSite(this.site, doc)
  }

  async fillField(field: DiscoveredField, value: string): Promise<boolean> {
    const el = findInputForLabel(field.label)
    if (!el) return false

    if (field.type === "select" && el instanceof HTMLSelectElement) {
      return fillSelectField(el, value)
    }

    if (field.type === "radio" && el instanceof HTMLInputElement) {
      return fillRadioGroupField(collectRadios(el), value)
    }

    if (field.type === "checkbox" && el instanceof HTMLInputElement) {
      const n = await fillCheckboxField(
        collectCheckboxes(el),
        value.split(/[,;]/).map((s) => s.trim()).filter(Boolean)
      )
      return n > 0
    }

    if (
      el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement
    ) {
      await fillInputTextField(el, value)
      return true
    }

    return false
  }

  async uploadResumeIfPresent(): Promise<boolean> {
    const input =
      (document.querySelector(
        'input[type="file"][name*="cv" i], input[type="file"][name*="resume" i], input[type="file"][id*="cv" i], input[type="file"][id*="resume" i], input[type="file"]'
      ) as HTMLInputElement | null) || null
    if (!input) return false
    // Prefer CV/resume labelled input when multiple
    const wrappers = Array.from(
      document.querySelectorAll(".document-field-wrapper, [class*='document']")
    )
    let target = input
    for (const w of wrappers) {
      const label = (w.textContent || "").toLowerCase()
      if (/cover\s*letter|anschreiben/.test(label)) continue
      if (/cv|resume|lebenslauf/.test(label)) {
        const f = w.querySelector('input[type="file"]') as HTMLInputElement | null
        if (f) {
          target = f
          break
        }
      }
    }

    const file = await fetchResumeFile()
    if (!file) return false
    return uploadFiles(target, file.file, file.fileName)
  }

  async uploadCoverLetterIfPresent(): Promise<boolean> {
    const wrappers = Array.from(
      document.querySelectorAll(".document-field-wrapper, [class*='document']")
    )
    let input: HTMLInputElement | null = null
    for (const w of wrappers) {
      const label = (w.textContent || "").toLowerCase()
      if (/cover\s*letter|anschreiben/.test(label)) {
        input = w.querySelector(
          'input[type="file"]'
        ) as HTMLInputElement | null
        if (input) break
      }
    }
    if (!input) {
      input = document.querySelector(
        'input[type="file"][name*="cover" i], input[type="file"][id*="cover" i]'
      )
    }
    if (!input) return false
    const file = await fetchCoverLetterFile()
    if (!file) return false
    return uploadFiles(input, file.file, file.fileName)
  }

  async doFillForm(doc: Document = document): Promise<FillReport> {
    const fields = this.discover(doc)
    const answers = await fetchFormAnswers(fields)
    const map = answerMap(answers)
    const missed: string[] = []
    let filled = 0

    for (const field of fields) {
      const value = lookupFieldAnswer(map, field.label)
      if (!value) {
        missed.push(field.label)
        continue
      }
      try {
        const ok = await this.fillField(field, value)
        if (ok) filled += 1
        else missed.push(field.label)
      } catch {
        missed.push(field.label)
      }
      await delay(40)
    }

    const resumeUploaded = await this.uploadResumeIfPresent()
    const coverLetterUploaded = await this.uploadCoverLetterIfPresent()

    return {
      site: this.site,
      discovered: fields.length,
      answered: answers.length,
      filled,
      missed,
      resumeUploaded,
      coverLetterUploaded
    }
  }
}

/** Sites fully supported by clean-TS native fill (no custom widgets required). */
export const CLEAN_TS_NATIVE_SITES: AtsSiteId[] = [
  "personio",
  "greenhouse",
  "lever",
  "generic",
  "ashby",
  "oraclecloud",
  "paycomonline-v3",
  "myworkday"
]

export function isCleanTsNativeSite(site: AtsSiteId): boolean {
  return CLEAN_TS_NATIVE_SITES.includes(site)
}

export async function runCleanTsFill(opts?: {
  hostname?: string
  href?: string
}): Promise<FillReport> {
  const filler = new BaseFiller(opts)
  return filler.doFillForm()
}

export type { FillAnswer, DiscoveredField, AtsSiteId }
export { detectAtsSite, detectRegistryAts } from "~contents/crawler/discover-factory"
