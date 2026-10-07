// @ts-nocheck
/**
 * Fill native inputs, selects, radios, and checkboxes on an unknown job site.
 */

import { decomposePhone } from "../../../core/number.js"

const COUNTRY_ALIASES = {
  "united states": ["united states", "united states of america", "usa", "us", "vereinigte staaten"],
  "united states of america": ["united states", "united states of america", "usa", "us", "vereinigte staaten"],
  usa: ["united states", "united states of america", "usa", "us", "vereinigte staaten"],
  us: ["united states", "united states of america", "usa", "us", "vereinigte staaten"],
  "u.s.": ["united states", "united states of america", "usa", "us", "vereinigte staaten"],
  "u.s.a.": ["united states", "united states of america", "usa", "us", "vereinigte staaten"],
  "united kingdom": ["united kingdom", "uk", "great britain", "vereinigtes königreich", "grossbritannien"],
  germany: ["germany", "deutschland"],
  romania: ["romania", "rumänien", "rumanien"],
  france: ["france", "frankreich"],
  spain: ["spain", "spanien"],
  italy: ["italy", "italien"],
  netherlands: ["netherlands", "niederlande", "the netherlands"],
  poland: ["poland", "polen"],
  austria: ["austria", "österreich", "osterreich"],
  switzerland: ["switzerland", "schweiz"],
  belgium: ["belgium", "belgien"],
  canada: ["canada", "kanada"],
  hungary: ["hungary", "ungarn"],
  czechia: ["czechia", "czech republic", "tschechien"],
  "czech republic": ["czechia", "czech republic", "tschechien"],
  ukraine: ["ukraine"],
  sweden: ["sweden", "schweden"],
  ireland: ["ireland", "irland"],
  portugal: ["portugal"],
  greece: ["greece", "griechenland"],
  bulgaria: ["bulgaria", "bulgarien"],
  croatia: ["croatia", "kroatien"],
  serbia: ["serbia", "serbien"],
  slovakia: ["slovakia", "slowakei"],
  india: ["india", "indien"],
  brazil: ["brazil", "brasilien"],
  mexico: ["mexico", "mexiko"],
  turkey: ["turkey", "türkei", "turkei"],
}

function firstValue(value) {
  const raw = Array.isArray(value) ? value[0] : value
  return String(raw ?? "").trim()
}

function valuesOf(value) {
  const list = Array.isArray(value) ? value : [value]
  return list.map((item) => String(item ?? "").trim()).filter(Boolean)
}

export function optionMatches(optionText, optionValue, wanted) {
  const option = String(optionText || "").trim().toLowerCase()
  const value = String(optionValue || "").trim().toLowerCase()
  const target = String(wanted || "").trim().toLowerCase()
  if (!target || (!option && !value)) return false
  if (option === target || value === target) return true
  const aliases = COUNTRY_ALIASES[target] || [target]
  if (aliases.some((alias) => option === alias || value === alias)) return true
  if (target.length >= 4 && option.length >= 4) {
    return option.includes(target) || target.includes(option)
  }
  return false
}

function setNativeValue(element, value) {
  const prototype =
    element instanceof HTMLTextAreaElement
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype
  const setter = Object.getOwnPropertyDescriptor(prototype, "value")?.set
  if (setter) setter.call(element, value)
  else element.value = value
  element.dispatchEvent(new Event("input", { bubbles: true }))
  element.dispatchEvent(new Event("change", { bubbles: true }))
}

function controlText(element) {
  return (element.innerText || element.textContent || element.value || "")
    .replace(/\s+/g, " ")
    .trim()
}

function applicationFormOpen() {
  const bits = []
  for (const element of document.querySelectorAll("label, legend, [placeholder], input, textarea")) {
    bits.push(element.getAttribute?.("placeholder") || "")
    bits.push(element.innerText || element.textContent || "")
  }
  const text = bits.join("\n")
  return /first name/i.test(text) && /\bemail\b/i.test(text)
}

function press(element) {
  element.scrollIntoView({ block: "center", inline: "nearest" })
  for (const type of ["pointerdown", "mousedown", "pointerup", "mouseup", "click"]) {
    element.dispatchEvent(
      new MouseEvent(type, { bubbles: true, cancelable: true, view: window }),
    )
  }
}

/** Jobs by Workable keeps the application closed until Apply now is clicked. */
export async function openWorkableJobBoardForm() {
  if (!/(^|\.)jobs\.workable\.com$/i.test(location.hostname)) return
  if (applicationFormOpen()) return
  const button = [...document.querySelectorAll("button, a, [role='button'], input[type='button'], input[type='submit']")].find(
    (element) => /^apply now$/i.test(controlText(element)),
  )
  if (!button) return
  press(button)
  const started = Date.now()
  while (Date.now() - started < 8000) {
    if (applicationFormOpen()) return
    await new Promise((resolve) => window.setTimeout(resolve, 200))
  }
}

const RESUME_FILE_TEXT =
  /resume|curriculum|\bcv\b|lebenslauf|datei hochladen|upload file|drag\s*&?\s*drop/i

function outsideExtension(element) {
  return !element.closest?.(
    "#jobright-helper-plugin, #jobright-fork-helper-plugin, plasmo-csui, [id^='jobright']",
  )
}

function fileInputIsVisible(input) {
  let node = input.parentElement
  while (node && node !== document.body) {
    const style = window.getComputedStyle(node)
    if (style.display === "none" || style.visibility === "hidden") return false
    node = node.parentElement
  }
  return true
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
  return `${label || ""} ${input.getAttribute("aria-label") || ""} ${input.name || ""} ${input.id || ""} ${input.getAttribute("accept") || ""} ${nearby}`
}

export function joinHeading() {
  return [...document.querySelectorAll("h1, h2")]
    .map((element) => String(element.innerText || "").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join(" ")
}

export function isJoinApplyPage() {
  return /(^|\.)join\.com$/i.test(location.hostname) && /\/apply(?:\/|$)/i.test(location.pathname)
}

/** cv, cover, date, salary, question, review, or "" when this is not a Join apply step. */
export function joinStepKind() {
  if (!isJoinApplyPage()) return ""
  const path = location.pathname
  const heading = joinHeading()
  if (/\/apply\/review(?:\/|$)/i.test(path) || /überprüfe deine bewerbung|review your application/i.test(heading)) {
    return "review"
  }
  if (/\/apply\/cv(?:\/|$)/i.test(path) || /lebenslauf|upload your (cv|resume)|lade deinen lebenslauf/i.test(heading)) {
    return "cv"
  }
  if (/\/apply\/cover-?letter(?:\/|$)/i.test(path) || /anschreiben|cover letter/i.test(heading)) {
    return "cover"
  }
  if (/persönliche informationen|personal information/i.test(heading)) return "identity"
  if (/startdatum|start date|frühestmöglich|earliest/i.test(heading)) return "date"
  if (/gehalt|salary|compensation/i.test(heading)) return "salary"
  if (/\/apply\/(success|submitted|confirmation)/i.test(path)) return "success"
  if (/\/apply\/question/i.test(path)) return "question"
  return "question"
}

function pageAsksForResume() {
  if (isJoinApplyPage()) return joinStepKind() === "cv"
  if (/\/apply\/cv(?:\/|$)/i.test(location.pathname)) return true
  const heading = joinHeading()
  if (/anschreiben|cover letter/i.test(heading)) return false
  return RESUME_FILE_TEXT.test(heading)
}

function resumeFile(prepared) {
  const list = prepared?.files
  return list && list.length ? list[0] : null
}

/**
 * Join.com's dropzone ignores a plain change event. Its React handler expects
 * `{ acceptedFiles }` and is what actually stores the PDF.
 */
export function attachResumeToDropzone(input, prepared) {
  const file = resumeFile(prepared)
  if (!input || !file) return false
  const transfer = new DataTransfer()
  transfer.items.add(file)
  input.files = transfer.files
  input.dispatchEvent(new Event("input", { bubbles: true }))
  input.dispatchEvent(new Event("change", { bubbles: true }))

  const fiberKey = Object.keys(input).find(
    (key) => key.startsWith("__reactFiber$") || key.startsWith("__reactInternalInstance$"),
  )
  let fiber = fiberKey ? input[fiberKey] : null
  for (let depth = 0; fiber && depth < 20; depth += 1) {
    const props = fiber.memoizedProps || fiber.pendingProps
    if (typeof props?.onFileChange === "function") {
      props.onFileChange({ acceptedFiles: [file], target: input })
      return true
    }
    if (typeof props?.onChange === "function") {
      props.onChange({
        target: input,
        currentTarget: input,
        preventDefault() {},
        stopPropagation() {},
      })
      return true
    }
    fiber = fiber.return
  }
  return true
}

export function findResumeFileInput() {
  if (isJoinApplyPage() && joinStepKind() !== "cv") return null
  const inputs = [...document.querySelectorAll('input[type="file"]')].filter(outsideExtension)
  const labeled = inputs.filter((input) => RESUME_FILE_TEXT.test(fileInputText(input)))
  const labeledMatch = labeled.find(fileInputIsVisible) || labeled[0]
  if (labeledMatch) return labeledMatch
  if (pageAsksForResume() || /(^|\.)jobs\.workable\.com$/i.test(location.hostname)) {
    return inputs.find(fileInputIsVisible) || inputs[0] || null
  }
  return null
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

function tomorrowYmd() {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${date.getFullYear()}-${month}-${day}`
}

export function ymdFromAnswer(value) {
  const text = firstValue(value)
  const iso = text.match(/\d{4}-\d{2}-\d{2}/)
  if (iso) return iso[0]
  const us = text.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/)
  if (us) return `${us[3]}-${us[1].padStart(2, "0")}-${us[2].padStart(2, "0")}`
  return ""
}

const MONTH_NAMES = [
  ["januar", "january"],
  ["februar", "february"],
  ["marz", "märz", "march"],
  ["april"],
  ["mai", "may"],
  ["juni", "june"],
  ["juli", "july"],
  ["august"],
  ["september"],
  ["oktober", "october"],
  ["november"],
  ["dezember", "december"],
]

function monthIndex(name) {
  const wanted = String(name || "").trim().toLowerCase()
  return MONTH_NAMES.findIndex((names) => names.includes(wanted))
}

function readCalendarMonth() {
  const buttons = [...document.querySelectorAll("button")].filter(outsideExtension)
  let month = -1
  let year = 0
  for (const button of buttons) {
    const text = controlText(button)
    const index = monthIndex(text)
    if (index >= 0) month = index
    if (/^20\d{2}$/.test(text)) year = Number(text)
  }
  if (month < 0 || !year) return null
  return { month, year }
}

function datePickerRoot() {
  return document.querySelector("[data-testid='DatePickerInput']")
}

export function joinHasDatePicker() {
  return !!datePickerRoot()
}

function monthButton(direction) {
  const testId = direction === "next" ? "DatePickerInputMonthNext" : "DatePickerInputMonthPrev"
  const marked = document.querySelector(`[data-testid='${testId}']`)
  if (marked) return marked.closest("button") || marked
  const buttons = [...document.querySelectorAll("button")].filter(outsideExtension)
  return buttons.find((button) => {
    const label = `${button.getAttribute("aria-label") || ""} ${controlText(button)}`.toLowerCase()
    if (direction === "next") return /next month|nächster monat|nächster/.test(label)
    return /previous month|vorheriger monat|vorheriger/.test(label)
  })
}

function dayTrigger(day) {
  const root = datePickerRoot() || document
  const triggers = [...root.querySelectorAll("[data-part='table-cell-trigger']")].filter((element) => {
    if (element.getAttribute("data-disabled") != null || element.getAttribute("data-outside-range") != null) {
      return false
    }
    return controlText(element) === String(day)
  })
  return triggers[0] || null
}

function dayIsSelected(day) {
  const trigger = dayTrigger(day)
  if (!trigger) return false
  return (
    trigger.getAttribute("data-selected") != null ||
    trigger.getAttribute("aria-selected") === "true" ||
    trigger.getAttribute("data-state") === "selected" ||
    trigger.closest("[data-selected], [aria-selected='true']")
  )
}

function reactFiber(element) {
  const key = Object.keys(element).find(
    (name) => name.startsWith("__reactFiber$") || name.startsWith("__reactInternalInstance$"),
  )
  return key ? element[key] : null
}

/** Join's calendar stores the date through onValueChange, not a clicked cell. */
function setJoinDateValue(date) {
  const root = datePickerRoot()
  if (!root) return false
  let fiber = reactFiber(root)
  for (let depth = 0; fiber && depth < 30; depth += 1) {
    const props = fiber.memoizedProps || fiber.pendingProps
    if (typeof props?.onValueChange === "function") {
      try {
        props.onValueChange({ value: [date] })
        return true
      } catch {
        return false
      }
    }
    fiber = fiber.return
  }
  return false
}

function joinNextEnabled() {
  const button = joinNextButton()
  return !!button && !button.disabled && button.getAttribute("aria-disabled") !== "true"
}

/** Click the earliest start day on a Join.com month grid. */
export async function selectJoinCalendarDay(ymd) {
  const target = ymdFromAnswer(ymd) || tomorrowYmd()
  const match = target.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!match) return false
  const year = Number(match[1])
  const month = Number(match[2]) - 1
  const day = Number(match[3])
  const wasEnabled = joinNextEnabled()
  for (let hop = 0; hop < 6; hop += 1) {
    const shown = readCalendarMonth()
    if (!shown) break
    const delta = shown.year * 12 + shown.month - (year * 12 + month)
    if (!delta) break
    const button = monthButton(delta < 0 ? "next" : "prev")
    if (!button) break
    press(button)
    await sleep(250)
  }
  const date = new Date(year, month, day, 12, 0, 0)
  setJoinDateValue(date)
  const trigger = dayTrigger(day)
  if (trigger) press(trigger)
  const started = Date.now()
  while (Date.now() - started < 2000) {
    if (dayIsSelected(day) || (!wasEnabled && joinNextEnabled())) return true
    await sleep(100)
  }
  return dayIsSelected(day) || (!wasEnabled && joinNextEnabled())
}

export function findJoinDropzone() {
  const inputs = [...document.querySelectorAll('input[type="file"]')].filter(outsideExtension)
  return inputs.find(fileInputIsVisible) || inputs[0] || null
}

export function findJoinAnswerInput() {
  return [...document.querySelectorAll("input, textarea")].find((element) => {
    if (!outsideExtension(element)) return false
    const type = String(element.getAttribute("type") || "text").toLowerCase()
    if (["hidden", "file", "submit", "button", "checkbox", "radio"].includes(type)) return false
    return isControlVisible(element)
  })
}

function isControlVisible(element) {
  const style = window.getComputedStyle(element)
  if (style.display === "none" || style.visibility === "hidden") return false
  const rect = element.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0
}

export function isWeakJoinLabel(label) {
  const text = String(label || "").trim().toLowerCase()
  return !text || /nummer|number|select|please enter|bitte/.test(text)
}

function joinNextButton() {
  return [...document.querySelectorAll("button")].find((button) => {
    if (!outsideExtension(button)) return false
    const text = controlText(button)
    if (!/^(weiter|next|continue|fortfahren|speichern|save)\b/i.test(text)) return false
    if (/bewerben|submit|confirm|bestätigen/i.test(text)) return false
    return isControlVisible(button)
  })
}

function fiberHost() {
  let fiber = reactFiber(document.getElementById("__next") || document.body)
  while (fiber?.return) fiber = fiber.return
  return fiber
}

function walkFibers(root, visit) {
  const stack = [root]
  const seen = new Set()
  while (stack.length && seen.size < 5000) {
    const node = stack.pop()
    if (!node || seen.has(node)) continue
    seen.add(node)
    visit(node)
    if (node.child) stack.push(node.child)
    if (node.sibling) stack.push(node.sibling)
  }
}

function findJoinForm() {
  let found = null
  walkFibers(fiberHost(), (node) => {
    if (found) return
    const bags = [node.memoizedProps?.value, node.memoizedProps]
    for (const bag of bags) {
      if (!bag || typeof bag !== "object") continue
      if (typeof bag.setValue === "function" && typeof bag.getValues === "function") {
        const values = bag.getValues()
        if (values && typeof values === "object" && values.candidate) {
          found = { kind: "rhf", bag }
          return
        }
      }
      const form = typeof bag.change === "function" ? bag : bag.form
      if (form && typeof form.change === "function" && typeof form.getState === "function") {
        const values = form.getState()?.values
        if (values && typeof values === "object" && values.candidate) {
          found = { kind: "final", form }
        }
      }
    }
  })
  return found
}

function readJoinCandidate(form) {
  if (!form) return {}
  if (form.kind === "rhf") return form.bag.getValues()?.candidate || {}
  return form.form.getState()?.values?.candidate || {}
}

function writeJoinField(form, name, value) {
  if (form.kind === "rhf") {
    form.bag.setValue(name, value, { shouldDirty: true, shouldTouch: true, shouldValidate: true })
    return
  }
  form.form.change(name, value)
}

function countryQueries(name) {
  const key = String(name || "").trim().toLowerCase()
  return [...new Set([name, ...(COUNTRY_ALIASES[key] || [])].map((item) => String(item || "").trim()).filter(Boolean))]
}

function joinPersonName(value) {
  return String(value || "")
    .replace(/[^A-Za-zÀ-ÿ'’\- ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 30)
}

function fieldBlock(patterns) {
  const labels = [...document.querySelectorAll("label")].filter(
    (label) => outsideExtension(label) && patterns.some((pattern) => pattern.test(controlText(label))),
  )
  for (const label of labels) {
    if (label.htmlFor) {
      const linked = document.getElementById(label.htmlFor)
      if (linked) return { controls: [linked] }
    }
    let node = label.parentElement
    for (let depth = 0; depth < 5 && node; depth += 1) {
      const controls = [...node.querySelectorAll("input, select, button, [role='combobox']")].filter((element) => {
        if (!outsideExtension(element) || !isControlVisible(element)) return false
        const type = String(element.getAttribute("type") || "").toLowerCase()
        return !["hidden", "file", "checkbox", "radio", "submit"].includes(type)
      })
      if (controls.length) return { controls }
      node = node.parentElement
    }
  }
  return null
}

function textInput(block) {
  return block?.controls?.find((element) => element.tagName === "INPUT" || element.tagName === "TEXTAREA") || null
}

function personalInfoFormOpen() {
  return !!fieldBlock([/^vorname\b/i, /first name/i])
}

function menuQueryMatches(text, query) {
  if (optionMatches(text, "", query)) return true
  const dial = String(query || "").replace(/\D/g, "")
  if (!dial || !/^\+?\d+$/.test(String(query || "").trim())) return false
  return new RegExp(`(^|\\D)\\+?${dial}(\\D|$)`).test(text)
}

function menuOptions() {
  return [...document.querySelectorAll("[role='option'], [role='listbox'] button, [role='listbox'] li")].filter(
    (element) => outsideExtension(element) && isControlVisible(element),
  )
}

async function chooseMenuOption(queries, acceptFirst = false) {
  const started = Date.now()
  let typed = false
  while (Date.now() - started < 3000) {
    if (!typed) {
      const search = [...document.querySelectorAll("input")].find((element) => {
        if (!outsideExtension(element) || !isControlVisible(element)) return false
        const hint = `${element.getAttribute("placeholder") || ""} ${element.getAttribute("role") || ""}`.toLowerCase()
        return /such|search|filter|stadt|city|land|country|combobox/.test(hint)
      })
      if (search && queries[0]) {
        await fillTextField(search, queries[0])
        typed = true
      }
    }
    const options = menuOptions()
    const option =
      options.find((element) => queries.some((query) => menuQueryMatches(controlText(element), query))) ||
      (acceptFirst && typed ? options[0] : null)
    if (option) {
      press(option)
      await sleep(200)
      return true
    }
    await sleep(150)
  }
  return false
}

async function chooseLabeledOption(patterns, queries, acceptFirst = false) {
  const block = fieldBlock(patterns)
  if (!block || !queries.length) return false
  const select = block.controls.find((element) => element.tagName === "SELECT")
  if (select) return fillSelectField({ $input: select }, queries)
  const opener =
    block.controls.find((element) => element.tagName === "BUTTON" || element.getAttribute("role") === "combobox") ||
    block.controls[0]
  if (opener?.tagName === "INPUT") {
    await fillTextField(opener, queries[0])
  } else if (opener) {
    press(opener)
    await sleep(200)
  }
  return chooseMenuOption(queries, acceptFirst)
}

function clearJoinAvatar() {
  const upload = [...document.querySelectorAll("button")].find((button) => {
    if (!outsideExtension(button) || !isControlVisible(button)) return false
    return /avatar hochladen|upload avatar|foto hochladen|upload photo/i.test(controlText(button))
  })
  if (!upload) return
  const row = upload.parentElement
  const trash = [...(row?.querySelectorAll("button") || [])].find(
    (button) => button !== upload && !/avatar|upload|foto|photo/i.test(controlText(button)),
  )
  if (!trash) return
  press(trash)
}

/** Open the review-page editor for name, country, city, and phone. */
export async function openJoinPersonalEditor() {
  if (personalInfoFormOpen()) return true
  const button = [...document.querySelectorAll("button")].find((element) => {
    if (!outsideExtension(element) || !isControlVisible(element)) return false
    return /^(bearbeiten|edit)$/i.test(controlText(element))
  })
  if (!button) return false
  press(button)
  const started = Date.now()
  while (Date.now() - started < 8000) {
    if (personalInfoFormOpen()) return true
    await sleep(150)
  }
  return false
}

/**
 * Write the selected profile into Join's personal-information form.
 * Returns the English field labels that were updated.
 */
export async function fillJoinPersonalForm(profile) {
  if (!profile || !personalInfoFormOpen()) return []
  clearJoinAvatar()
  const filled = []
  const first = joinPersonName(profile.firstName)
  const last = joinPersonName(profile.lastName)
  const firstInput = textInput(fieldBlock([/^vorname\b/i, /first name/i]))
  const lastInput = textInput(fieldBlock([/^nachname\b/i, /last name/i, /surname/i]))
  if (first && firstInput && (await fillTextField(firstInput, first))) filled.push("First name")
  if (last && lastInput && (await fillTextField(lastInput, last))) filled.push("Last name")
  if (profile.country && (await chooseLabeledOption([/land des wohnsitzes/i, /country of residence/i, /^country$/i, /^land$/i], countryQueries(profile.country)))) {
    filled.push("Country")
  }
  if (profile.city && (await chooseLabeledOption([/^stadt\b/i, /^city\b/i, /stadt auswählen/i, /select city/i], [profile.city], true))) {
    filled.push("City")
  }
  const phone = decomposePhone(profile.phone, profile.country)
  const phoneBlock = fieldBlock([/telefonnummer/i, /phone number/i, /^phone$/i])
  const phoneInput = textInput(phoneBlock)
  if (phone.dialCode && phoneBlock) {
    const codeButton = phoneBlock.controls.find((element) => /^\+\d+/.test(controlText(element)))
    const shown = codeButton ? controlText(codeButton).replace(/\D/g, "") : ""
    if (codeButton && shown !== phone.dialCode) {
      press(codeButton)
      await sleep(200)
      await chooseMenuOption([`+${phone.dialCode}`, phone.dialCode])
    }
  }
  if (phone.national && phoneInput && (await fillTextField(phoneInput, phone.national))) filled.push("Phone")
  return filled
}

/**
 * Join copies the browser account's name, email, and country into the
 * application. Replace those with the selected team-site profile.
 */
export function applyJoinCandidate(profile) {
  if (!profile) return false
  const form = findJoinForm()
  if (!form) return false
  const current = readJoinCandidate(form)
  const cityName = profile.city || ""
  const countryName = profile.country || ""
  const street = [profile.address, profile.state, profile.postalCode].filter(Boolean).join(", ")
  if (profile.firstName) writeJoinField(form, "candidate.firstName", profile.firstName)
  if (profile.lastName) writeJoinField(form, "candidate.lastName", profile.lastName)
  if (profile.email) writeJoinField(form, "candidate.email", profile.email)
  if (profile.phone) writeJoinField(form, "candidate.phoneNumber", profile.phone)
  if (cityName || countryName || street) {
    writeJoinField(form, "candidate.city", {
      ...(current.city && typeof current.city === "object" ? current.city : {}),
      cityName: cityName || current.city?.cityName || "",
      countryName: countryName || current.city?.countryName || "",
      address: street || cityName || current.city?.address || "",
    })
  }
  if (countryName) {
    writeJoinField(form, "candidate.country", {
      ...(current.country && typeof current.country === "object" ? current.country : {}),
      name: countryName,
    })
  }
  fillJoinIdentityInputs(profile)
  return true
}

export async function fillJoinIdentityInputs(profile) {
  const inputs = [...document.querySelectorAll("input, textarea")].filter(outsideExtension)
  for (const input of inputs) {
    const hint = [
      input.name,
      input.id,
      input.getAttribute("autocomplete"),
      input.getAttribute("aria-label"),
      input.getAttribute("placeholder"),
    ]
      .join(" ")
      .toLowerCase()
    let value = ""
    if (/e-?mail/.test(hint)) value = profile.email
    else if (/phone|mobile|tel/.test(hint) && !/code|dial/.test(hint)) value = profile.phone
    else if (/first/.test(hint) && /name/.test(hint)) value = profile.firstName
    else if (/(last|family|surname)/.test(hint)) value = profile.lastName
    else if (/city|town|\bort\b/.test(hint)) value = profile.city
    else if (/country|\bland\b/.test(hint) && !/code|dial/.test(hint)) value = profile.country
    else if (/address|street|straße|anschrift/.test(hint)) value = profile.address
    if (!value) continue
    input.setAttribute("autocomplete", "off")
    await fillTextField(input, value)
  }
}

export function joinApplyButton() {
  return [...document.querySelectorAll("button")].find((element) => {
    if (!outsideExtension(element) || !isControlVisible(element)) return false
    if (element.disabled || element.getAttribute("aria-disabled") === "true") return false
    return /bewerben|submit application|send application/i.test(controlText(element))
  })
}

/** Submit the finished Join.com review. */
export async function clickJoinApply() {
  const button = joinApplyButton()
  if (!button) return false
  press(button)
  return true
}

/** Move to the next Join wizard step. Never clicks the final apply button. */
export async function clickJoinNext() {
  const started = Date.now()
  let button = null
  while (Date.now() - started < 4000) {
    button = joinNextButton()
    if (button && !button.disabled && button.getAttribute("aria-disabled") !== "true") break
    await sleep(150)
  }
  button = joinNextButton()
  if (!button || button.disabled || button.getAttribute("aria-disabled") === "true") return false
  const before = `${location.pathname}|${joinHeading()}`
  press(button)
  const waitStarted = Date.now()
  while (Date.now() - waitStarted < 10000) {
    if (`${location.pathname}|${joinHeading()}` !== before && joinHeading()) return true
    await sleep(200)
  }
  return false
}

export async function fillTextField(element, value) {
  const text = firstValue(value)
  if (!element || !text) return false
  element.focus()
  setNativeValue(element, text)
  element.blur()
  return true
}

export async function fillSelectField(rule, value) {
  const wanted = firstValue(value)
  const select = rule?.$input
  if (!(select instanceof HTMLSelectElement) || !wanted) return false
  const match = Array.from(select.options).find((option) =>
    optionMatches(option.textContent || "", option.value, wanted),
  )
  if (!match) return false
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLSelectElement.prototype,
    "value",
  )?.set
  select.focus()
  if (setter) setter.call(select, match.value)
  else select.value = match.value
  select.dispatchEvent(new Event("input", { bubbles: true }))
  select.dispatchEvent(new Event("change", { bubbles: true }))
  select.blur()
  return true
}

function checkboxLabel(box, index, rule) {
  return String(rule?.options?.[index] || box.value || rule?.label || "")
}

function wantsChecked(label, answers) {
  const text = label.trim().toLowerCase()
  return answers.some((answer) => {
    const wanted = answer.trim().toLowerCase()
    if (!wanted) return false
    if (wanted === text || text.includes(wanted) || wanted.includes(text)) {
      return true
    }
    const yes = ["yes", "true", "accept", "i accept", "agree", "i agree"].includes(
      wanted,
    )
    return yes && /accept|agree|consent|acknowledge/.test(text)
  })
}

export async function fillCheckboxField(rule, value) {
  const answers = valuesOf(value).flatMap((item) =>
    item.split(",").map((part) => part.trim()).filter(Boolean),
  )
  const boxes = rule?.$checkboxs || []
  if (!answers.length || !boxes.length) return false
  let checked = false
  boxes.forEach((box, index) => {
    if (!wantsChecked(checkboxLabel(box, index, rule), answers)) return
    if (!box.checked) box.click()
    checked = true
  })
  return checked
}

export async function fillRadioField(rule, value) {
  const wanted = firstValue(value)
  const radios = rule?.$radios || []
  if (!radios.length) return false
  let index = wanted
    ? radios.findIndex((radio, radioIndex) =>
        optionMatches(
          rule.options?.[radioIndex] || radio.innerText || radio.textContent || "",
          radio.value,
          wanted,
        ),
      )
    : -1
  if (index < 0) index = fallbackRadioIndex(rule, wanted)
  if (index < 0) return false
  const radio = radios[index]
  pressChoice(radio)
  const pressed =
    radio.checked === true ||
    radio.getAttribute?.("aria-pressed") === "true" ||
    radio.getAttribute?.("aria-checked") === "true"
  return pressed || radio.checked === true || radio.getAttribute?.("aria-checked") === "true"
}

function fallbackRadioIndex(rule, wanted) {
  const options = (rule?.options || []).map((text) => String(text || ""))
  const label = String(rule?.label || "").toLowerCase()
  const answer = String(wanted || "").toLowerCase()
  if (/availab|start a new position|earliest available/.test(label)) {
    const immediately = options.findIndex((text) => /^immediately$/i.test(text))
    if (immediately >= 0) return immediately
  }
  if (/authorized to work|legally authorized/.test(label)) {
    const yes = /\bno\b|not authorized|require sponsorship/.test(answer) ? "no" : "yes"
    const index = options.findIndex((text) => text.trim().toLowerCase() === yes)
    if (index >= 0) return index
  }
  if (/source of your right to work|right to work/.test(label)) {
    const sponsor = /sponsor/.test(answer)
    const index = options.findIndex((text) =>
      sponsor ? /sponsor/i.test(text) : /citizen or permanent/i.test(text),
    )
    if (index >= 0) return index
  }
  return -1
}

function pressChoice(radio) {
  const explicit = radio.id
    ? document.querySelector(`label[for="${CSS.escape(radio.id)}"]`)
    : null
  const target = radio.closest?.("label") || explicit || radio
  target.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }))
  if (typeof radio.click === "function") radio.click()
  if (radio instanceof HTMLInputElement && (radio.type === "radio" || radio.type === "checkbox")) {
    if (!radio.checked) {
      radio.checked = true
      radio.dispatchEvent(new Event("input", { bubbles: true }))
      radio.dispatchEvent(new Event("change", { bubbles: true }))
    }
  }
  if (radio.getAttribute?.("role") === "radio") {
    const group = radio.closest("[role='radiogroup']") || radio.parentElement
    group?.querySelectorAll("[role='radio']").forEach((item) => {
      item.setAttribute("aria-checked", item === radio ? "true" : "false")
    })
    radio.setAttribute("aria-checked", "true")
  }
}

