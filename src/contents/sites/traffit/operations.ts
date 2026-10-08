// @ts-nocheck
/**
 * Traffit public forms. The CV control is a file input labeled CV / "dodaj plik".
 */

import { isTraffitFormPage } from "./detect.ts"

const EXTENSION_UI =
  "#jobright-helper-plugin, #jobright-fork-helper-plugin, plasmo-csui, [id^='jobright']"

const RESUME_TEXT = /resume|curriculum|\bcv\b|dodaj plik|doda[cć] plik/i

function outsideExtension(element) {
  return !element.closest?.(EXTENSION_UI)
}

function fileInputText(input) {
  const label = input.id
    ? document.querySelector(`label[for="${CSS.escape(input.id)}"]`)?.textContent
    : ""
  let nearby = ""
  let node = input.parentElement
  for (let depth = 0; depth < 5 && node; depth += 1) {
    const text = String(node.innerText || "").replace(/\s+/g, " ").trim()
    if (text.length > 12) {
      nearby = text.slice(0, 300)
      break
    }
    node = node.parentElement
  }
  return `${label || ""} ${input.getAttribute("aria-label") || ""} ${input.name || ""} ${nearby}`
}

export function findTraffitResumeInput() {
  if (!isTraffitFormPage()) return null
  const inputs = [...document.querySelectorAll('input[type="file"]')].filter(outsideExtension)
  return inputs.find((input) => RESUME_TEXT.test(fileInputText(input))) || inputs[0] || null
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

function elementIsShown(element) {
  if (!element) return false
  const style = window.getComputedStyle(element)
  if (style.display === "none" || style.visibility === "hidden") return false
  const rect = element.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0
}

function press(element) {
  element.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true, cancelable: true, view: window }))
  element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window }))
  element.dispatchEvent(new MouseEvent("pointerup", { bubbles: true, cancelable: true, view: window }))
  element.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window }))
  element.click()
}

function parseFilledDate(value) {
  const match = String(value || "").trim().match(/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/)
  if (!match) return null
  return { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]) }
}

function calendarPopups() {
  return [...document.querySelectorAll("div, table, section")].filter((element) => {
    if (!outsideExtension(element) || !elementIsShown(element)) return false
    const text = String(element.innerText || "").replace(/\s+/g, " ")
    if (text.length < 20 || text.length > 500) return false
    return /październik|styczeń|luty|marzec|kwiecień|maj|czerwiec|lipiec|sierpień|wrzesień|listopad|grudzień/i.test(
      text,
    )
  })
}

function dayCell(calendar, day) {
  const wanted = String(day)
  const cells = [...calendar.querySelectorAll("*")].filter((element) => {
    if (!elementIsShown(element)) return false
    const text = String(element.innerText || "").replace(/\s+/g, " ").trim()
    if (text !== wanted) return false
    return !/disabled|other|outside|prevmonth|nextmonth|\bold\b|\bnew\b/i.test(
      String(element.className || ""),
    )
  })
  cells.sort((a, b) => {
    const ar = a.getBoundingClientRect()
    const br = b.getBoundingClientRect()
    return ar.width * ar.height - br.width * br.height
  })
  return cells[0] || null
}

async function clickFilledDate(input) {
  const date = parseFilledDate(input.value)
  if (!date) return
  let popup = calendarPopups().find((calendar) => dayCell(calendar, date.day))
  if (!popup) {
    press(input)
    await sleep(250)
    popup = calendarPopups().find((calendar) => dayCell(calendar, date.day))
  }
  const cell = popup && dayCell(popup, date.day)
  if (!cell) return
  press(cell)
  await sleep(150)
}

/** Traffit ignores a typed date until the matching calendar day is clicked. */
export async function confirmTraffitDates() {
  if (!isTraffitFormPage()) return
  const inputs = [...document.querySelectorAll("input")].filter(
    (input) => outsideExtension(input) && parseFilledDate(input.value),
  )
  for (const input of inputs) await clickFilledDate(input)
}

function radioLabel(radio) {
  const explicit = radio.id
    ? document.querySelector(`label[for="${CSS.escape(radio.id)}"]`)?.innerText
    : ""
  return String(explicit || radio.closest("label")?.innerText || radio.value || "")
    .replace(/\s+/g, " ")
    .trim()
}

function ratingScore(label) {
  const text = label.toLowerCase()
  if (/nie mam|no experience|brak doświadcz|none/.test(text)) return 1
  const number = text.match(/^(\d+)\b/)
  if (number) return Number(number[1])
  if (/duże|dobrze znam|extensive|expert|advanced|płynn|fluent|native|c2/.test(text)) return 100
  return 0
}

/**
 * Unanswered 1–5 scales get the strongest choice. A checked group is left as-is.
 */
export function selectStrongestRatings() {
  if (!isTraffitFormPage()) return
  const groups = new Map()
  for (const radio of document.querySelectorAll("input[type='radio']")) {
    if (!outsideExtension(radio)) continue
    const key = radio.name || radio.closest("fieldset") || radio.parentElement
    const list = groups.get(key) || []
    list.push(radio)
    groups.set(key, list)
  }
  for (const radios of groups.values()) {
    if (radios.some((radio) => radio.checked)) continue
    const labels = radios.map(radioLabel)
    const numbered = labels.filter((label) => /^\d+\b/.test(label)).length
    if (numbered < 3) continue
    let best = -1
    let bestScore = 0
    labels.forEach((label, index) => {
      const score = ratingScore(label)
      if (score > bestScore) {
        bestScore = score
        best = index
      }
    })
    if (best < 0) continue
    const radio = radios[best]
    const explicit = radio.id
      ? document.querySelector(`label[for="${CSS.escape(radio.id)}"]`)
      : null
    press(explicit || radio.closest("label") || radio)
  }
}
