// @ts-nocheck
/**
 * Eightfold CareerHub — experience / education record fill (readable TypeScript source of truth).
 */

import * as cancellation from "../../methods/cancellation.js"
import * as dom from "../../../core/dom.js"
import * as enums from "../../../core/enums.js"
import * as steps from "./steps.ts"

const OPTION_WAIT_ROUNDS = 12
const DEFAULT_PAUSE_MS = 25
const FIELD_CONTAINER_SELECTOR = ".fieldContainer-3aJo0"
const COMMITTED_ATTR = "data-jobright-careerhub-committed-value"
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function pause(ms = DEFAULT_PAUSE_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function withCheckpoints(fn) {
  cancellation.checkpoint()
  await fn()
  cancellation.checkpoint()
}

function firstNonEmptyString(value) {
  const raw = Array.isArray(value)
    ? value.find((item) => String(item ?? "").trim())
    : value
  return String(raw ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

function pickFirstField(record, keys) {
  for (const key of keys) {
    const value = record[key]
    if (firstNonEmptyString(value)) return value
  }
}

function pickFromDatesObject(record, keys) {
  const dates = record.dates ?? record.Dates
  return dates && typeof dates === "object"
    ? pickFirstField(dates, keys)
    : undefined
}

function isTruthyCurrentFlag(value) {
  return (
    value === true ||
    value === 1 ||
    /^(?:true|yes|1|current|present)$/i.test(firstNonEmptyString(value))
  )
}

function parseMonthYear(value) {
  const text = firstNonEmptyString(value)
  if (!text) return { month: "", year: "", valid: false }
  const iso = text.match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?$/)
  if (iso) {
    const monthNum = Number(iso[2])
    const dayNum = iso[3] ? Number(iso[3]) : 1
    const daysInMonth = new Date(Number(iso[1]), monthNum, 0).getDate()
    return monthNum >= 1 &&
      monthNum <= 12 &&
      dayNum >= 1 &&
      dayNum <= daysInMonth
      ? { month: MONTH_NAMES[monthNum - 1], year: iso[1], valid: true }
      : { month: "", year: "", valid: false }
  }
  const named = text.match(/^([A-Za-z]{3,9})[\s,/-]+(\d{4})$/)
  if (named) {
    const monthToken = named[1].toLowerCase()
    const monthIndex = MONTH_NAMES.findIndex((month) => {
      const lower = month.toLowerCase()
      return (
        lower === monthToken ||
        (monthToken.length === 3 && lower.slice(0, 3) === monthToken)
      )
    })
    if (monthIndex >= 0) {
      return { month: MONTH_NAMES[monthIndex], year: named[2], valid: true }
    }
  }
  return { month: "", year: "", valid: false }
}

function parseYearOnly(value) {
  const text = firstNonEmptyString(value)
  if (!text) return { year: "", valid: false }
  if (/^\d{4}$/.test(text)) return { year: text, valid: true }
  const parsed = parseMonthYear(text)
  return { year: parsed.year, valid: parsed.valid }
}

function parseRecordDate(record, kind) {
  const title = kind === "start" ? "Start" : "End"
  const raw =
    pickFirstField(record, [
      title,
      `${title} Date`,
      `${kind}Date`,
      `${kind}_date`,
      kind === "end" ? "Completion Date" : "",
      kind === "end" ? "completionDate" : "",
      kind === "end" ? "completion_date" : "",
    ]) ??
    pickFromDatesObject(record, [
      `${kind}Date`,
      `${kind}_date`,
      kind === "end" ? "completionDate" : "",
      kind === "end" ? "completion_date" : "",
    ])
  if (firstNonEmptyString(raw)) return parseMonthYear(raw)
  const month = pickFirstField(record, [
    `${title} Month`,
    `${title} Date - Month`,
    `${kind}Month`,
  ])
  const year = pickFirstField(record, [
    `${title} Year`,
    `${title} Date - Year`,
    `${kind}Year`,
  ])
  return firstNonEmptyString(month) || firstNonEmptyString(year)
    ? parseMonthYear(
        `${firstNonEmptyString(month)} ${firstNonEmptyString(year)}`,
      )
    : { month: "", year: "", valid: false }
}

function hasRecordDate(record, kind) {
  const title = kind === "start" ? "Start" : "End"
  return !!firstNonEmptyString(
    pickFirstField(record, [
      title,
      `${title} Date`,
      `${kind}Date`,
      `${kind}_date`,
      `${title} Month`,
      `${title} Year`,
      `${title} Date - Month`,
      `${title} Date - Year`,
      `${kind}Month`,
      `${kind}Year`,
      kind === "end" ? "Completion Date" : "",
      kind === "end" ? "completionDate" : "",
      kind === "end" ? "completion_date" : "",
    ]) ??
      pickFromDatesObject(record, [
        `${kind}Date`,
        `${kind}_date`,
        kind === "end" ? "completionDate" : "",
        kind === "end" ? "completion_date" : "",
      ]),
  )
}

export function normalizeCareerHubExperienceRecords(records = []) {
  return records.map((record) => {
    const start = parseRecordDate(record, "start")
    const isCurrent = isTruthyCurrentFlag(
      pickFirstField(record, [
        "isCurrent",
        "is_current",
        "Current Job",
        "Current Employer",
        "Currently in this role",
        "This is your current job",
      ]) ?? pickFromDatesObject(record, ["isCurrent", "is_current"]),
    )
    const end = isCurrent
      ? { month: "", year: "", valid: true }
      : parseRecordDate(record, "end")
    const endOk = isCurrent || !hasRecordDate(record, "end") || end.valid
    const orderOk =
      isCurrent ||
      !end.month ||
      !end.year ||
      12 * Number(start.year) + MONTH_NAMES.indexOf(start.month) <=
        12 * Number(end.year) + MONTH_NAMES.indexOf(end.month)
    const role = firstNonEmptyString(
      pickFirstField(record, [
        "role",
        "Role",
        "title",
        "Title",
        "Job Title",
        "Position",
        "jobTitle",
        "job_title",
      ]),
    )
    const organization = firstNonEmptyString(
      pickFirstField(record, [
        "organization",
        "Organization",
        "company",
        "Company",
        "companyName",
        "Company Name",
        "Employer",
        "Employer Name",
        "Employer name",
        "employer",
      ]),
    )
    return {
      kind: "experience",
      role,
      organization,
      location: firstNonEmptyString(
        pickFirstField(record, ["location", "Location"]),
      ),
      startMonth: start.month,
      startYear: start.year,
      endMonth: end.month,
      endYear: end.year,
      isCurrent,
      description: firstNonEmptyString(
        pickFirstField(record, [
          "description",
          "Description",
          "jobDescription",
          "Job Description",
        ]),
      ),
      valid: !!start.valid && endOk && orderOk && !!role && !!organization,
    }
  })
}

export function normalizeCareerHubEducationRecords(records = []) {
  return records.map((record) => {
    const startRaw =
      pickFirstField(record, [
        "Start",
        "Start Date",
        "startDate",
        "start_date",
      ]) ?? pickFromDatesObject(record, ["startDate", "start_date"])
    const endRaw =
      pickFirstField(record, [
        "End",
        "End Date",
        "endDate",
        "end_date",
        "Completion Date",
        "Graduation Date",
        "completionDate",
        "completion_date",
      ]) ??
      pickFromDatesObject(record, [
        "endDate",
        "end_date",
        "completionDate",
        "completion_date",
      ])
    const start = parseYearOnly(startRaw)
    const end = firstNonEmptyString(endRaw)
      ? parseYearOnly(endRaw)
      : { year: "", valid: true }
    const school = firstNonEmptyString(
      pickFirstField(record, [
        "school",
        "School",
        "School Name",
        "School or University",
        "University",
        "Institution",
        "College",
        "organization",
      ]),
    )
    return {
      kind: "education",
      school,
      degree: firstNonEmptyString(
        pickFirstField(record, [
          "degree",
          "Degree",
          "Degree Type",
          "accreditation",
          "Accreditation",
        ]),
      ),
      major: firstNonEmptyString(
        pickFirstField(record, [
          "major",
          "Major",
          "rawMajor",
          "Field of Study",
          "discipline",
          "Discipline",
          "Study",
        ]),
      ),
      startYear: start.year,
      endYear: end.year,
      description: firstNonEmptyString(
        pickFirstField(record, ["description", "Description", "activities"]),
      ),
      valid:
        !!school &&
        start.valid &&
        end.valid &&
        (!end.year || Number(start.year) <= Number(end.year)),
    }
  })
}

function normalizeComparable(text) {
  return text
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/\bjanuary\b|\bjan\b/g, "01")
    .replace(/\bfebruary\b|\bfeb\b/g, "02")
    .replace(/\bmarch\b|\bmar\b/g, "03")
    .replace(/\bapril\b|\bapr\b/g, "04")
    .replace(/\bmay\b/g, "05")
    .replace(/\bjune\b|\bjun\b/g, "06")
    .replace(/\bjuly\b|\bjul\b/g, "07")
    .replace(/\baugust\b|\baug\b/g, "08")
    .replace(/\bseptember\b|\bsep\b|\bsept\b/g, "09")
    .replace(/\boctober\b|\boct\b/g, "10")
    .replace(/\bnovember\b|\bnov\b/g, "11")
    .replace(/\bdecember\b|\bdec\b/g, "12")
    .replace(/\s+/g, " ")
    .trim()
}

function optionLabel(option) {
  return firstNonEmptyString(
    option.getAttribute?.("title") || option.text || option.textContent,
  )
}

function setInputValue(input, value) {
  input.value = value
  if (input.dispatchEvent && typeof Event !== "undefined") {
    input.dispatchEvent(new Event("input", { bubbles: true, composed: true }))
    input.dispatchEvent(new Event("change", { bubbles: true, composed: true }))
  }
}

function restoreComboboxOnCancel(getSurface, fallback, restoreValue, marker) {
  try {
    const input = getSurface() ?? fallback
    if (input.value !== restoreValue) setInputValue(input, restoreValue)
    if (marker === null) input.removeAttribute?.(COMMITTED_ATTR)
    else input.setAttribute?.(COMMITTED_ATTR, marker)
    if (input.dispatchEvent && typeof KeyboardEvent !== "undefined") {
      input.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Escape",
          code: "Escape",
          bubbles: true,
          composed: true,
        }),
      )
    }
    input.blur?.()
  } catch {
    try {
      fallback.blur?.()
    } catch {
      // ignore
    }
  }
}

export async function commitCareerHubExactOption(
  getSurface,
  target,
  options = {},
) {
  cancellation.checkpoint()
  const pauseFn = options.pause ?? pause
  const isValid = options.isValid ?? (() => true)
  const initial = getSurface()
  const previousValue = initial?.value ?? ""
  if (!initial || !normalizeComparable(target) || !isValid()) return false
  const previousMarker = initial.getAttribute?.(COMMITTED_ATTR) ?? null
  let listenedInput = null
  let onChange = null
  try {
    initial.focus?.()
    setInputValue(initial, target)
    let live = initial
    let matches = []
    for (let round = 0; round < OPTION_WAIT_ROUNDS; round += 1) {
      if (!isValid()) return false
      live = getSurface() ?? live
      matches = live.options.filter(
        (option) =>
          normalizeComparable(optionLabel(option)) ===
          normalizeComparable(target),
      )
      if (matches.length === 1) break
      await withCheckpoints(pauseFn)
    }
    if (matches.length !== 1 || !isValid()) {
      let restoreTarget = getSurface() ?? live
      let stableRounds = 0
      for (let round = 0; round < OPTION_WAIT_ROUNDS && isValid(); round += 1) {
        if (restoreTarget.value !== previousValue) {
          setInputValue(restoreTarget, previousValue)
        }
        await withCheckpoints(pauseFn)
        const next = getSurface() ?? restoreTarget
        stableRounds =
          next === restoreTarget && next.value === previousValue
            ? stableRounds + 1
            : 0
        restoreTarget = next
        if (stableRounds >= 2) break
      }
      return false
    }
    const wasAriaSelected =
      matches[0].getAttribute?.("aria-selected") === "true" ||
      matches[0].getAttribute?.("data-selected") === "true"
    let changed = false
    onChange = () => {
      changed = true
    }
    listenedInput = live
    live.addEventListener?.("input", onChange)
    live.addEventListener?.("change", onChange)
    cancellation.checkpoint()
    if (matches[0].dispatchEvent && typeof MouseEvent !== "undefined") {
      matches[0].dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true, composed: true }),
      )
      matches[0].dispatchEvent(
        new MouseEvent("mouseup", { bubbles: true, composed: true }),
      )
    }
    cancellation.checkpoint()
    matches[0].click()
    for (let round = 0; round < OPTION_WAIT_ROUNDS; round += 1) {
      if (!isValid()) return false
      live = getSurface() ?? live
      const nowSelected =
        matches[0].getAttribute?.("aria-selected") === "true" ||
        matches[0].getAttribute?.("data-selected") === "true"
      if (
        (changed || (!wasAriaSelected && nowSelected)) &&
        normalizeComparable(live.value) === normalizeComparable(target) &&
        live.options.filter(
          (option) =>
            normalizeComparable(optionLabel(option)) ===
            normalizeComparable(target),
        ).length === 0
      ) {
        live.blur?.()
        return true
      }
      await withCheckpoints(pauseFn)
    }
    let restoreTarget = getSurface() ?? live
    let stableRounds = 0
    for (let round = 0; round < OPTION_WAIT_ROUNDS && isValid(); round += 1) {
      if (restoreTarget.value !== previousValue) {
        setInputValue(restoreTarget, previousValue)
      }
      await withCheckpoints(pauseFn)
      const next = getSurface() ?? restoreTarget
      stableRounds =
        next === restoreTarget && next.value === previousValue
          ? stableRounds + 1
          : 0
      restoreTarget = next
      if (stableRounds >= 2) break
    }
    return false
  } catch (error) {
    if (
      error instanceof cancellation.CancelledError ||
      error instanceof cancellation.SkippedError
    ) {
      restoreComboboxOnCancel(
        getSurface,
        initial,
        previousValue,
        previousMarker,
      )
    }
    throw error
  } finally {
    if (listenedInput && onChange) {
      listenedInput.removeEventListener?.("input", onChange)
      listenedInput.removeEventListener?.("change", onChange)
    }
  }
}

function readDetailPairs(detailsEl) {
  const pairs = []
  for (const child of Array.from(detailsEl.children)) {
    const ariaLabel = firstNonEmptyString(child.getAttribute("aria-label"))
    const labelEl = child.querySelector(
      'label, dt, .label, [class*="label"]',
    )
    const valueEl = child.querySelector('dd, .value, [class*="value"]')
    let label = ariaLabel || firstNonEmptyString(labelEl?.textContent)
    let value = firstNonEmptyString(valueEl?.textContent)
    if (!value && ariaLabel) value = firstNonEmptyString(child.textContent)
    if (!label && labelEl) label = firstNonEmptyString(labelEl.textContent)
    const combined = label.match(/^([^:]+):\s*(.+)$/)
    if (
      combined &&
      (!value || normalizeComparable(value) === normalizeComparable(label))
    ) {
      label = firstNonEmptyString(combined[1])
      value = firstNonEmptyString(combined[2])
    }
    if (label && value) pairs.push({ label, value })
  }
  return pairs
}

function findPairValue(pairs, labelPatterns) {
  const matches = pairs.filter(({ label }) =>
    labelPatterns.some((pattern) => pattern.test(normalizeLabelWords(label))),
  )
  return matches.length === 1 ? matches[0].value : ""
}

function normalizeLabelWords(text) {
  return text
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function coerceMonth(value) {
  if (!value) return ""
  const named = MONTH_NAMES.find(
    (month) => normalizeComparable(month) === normalizeComparable(value),
  )
  return named || parseMonthYear(value).month
}

function coerceYear(value) {
  return value ? parseYearOnly(value).year : ""
}

function parseExperienceCardFields(identity, pairs) {
  const startDate = findPairValue(pairs, [/^start date$/])
  const endDate = findPairValue(pairs, [/^end date$/, /^end date or expected$/])
  const current = findPairValue(pairs, [
    /^currently in this role$/,
    /^current role$/,
    /^current$/,
  ])
  return {
    role: identity,
    organization: findPairValue(pairs, [
      /^company$/,
      /^organization$/,
      /^employer$/,
      /^work$/,
    ]),
    location: findPairValue(pairs, [/^location$/]),
    startMonth: coerceMonth(
      findPairValue(pairs, [/^start date month$/, /^start month$/]) ||
        startDate,
    ),
    startYear: coerceYear(
      findPairValue(pairs, [/^start date year$/, /^start year$/]) || startDate,
    ),
    endMonth: coerceMonth(
      findPairValue(pairs, [/^end date month$/, /^end month$/]) || endDate,
    ),
    endYear: coerceYear(
      findPairValue(pairs, [
        /^end date year$/,
        /^end date or expected year$/,
        /^end year$/,
      ]) || endDate,
    ),
    isCurrent: isTruthyCurrentFlag(current),
    description: findPairValue(pairs, [/^description$/]),
  }
}

function parseEducationCardFields(identity, pairs) {
  return {
    school: identity,
    degree: findPairValue(pairs, [/^degree$/]),
    major: findPairValue(pairs, [
      /^major$/,
      /^field of study$/,
      /^discipline$/,
    ]),
    startYear: coerceYear(
      findPairValue(pairs, [
        /^start date year$/,
        /^start year$/,
        /^start date$/,
      ]),
    ),
    endYear: coerceYear(
      findPairValue(pairs, [
        /^end date year$/,
        /^end date or expected year$/,
        /^end year$/,
        /^end date$/,
      ]),
    ),
    description: findPairValue(pairs, [/^description$/]),
  }
}

export function getCareerHubRecordSnapshots(step, root = document) {
  if (steps.getCareerHubActiveStep(root) !== step) return []
  const snapshots = []
  for (const container of Array.from(
    root.querySelectorAll(FIELD_CONTAINER_SELECTOR),
  )) {
    if (!isVisibleConnected(container)) continue
    const card =
      container.querySelector(".info-card.infoCard-3PHA5") ??
      container.querySelector(".info-card-container") ??
      container.querySelector(".info-card")
    if (!isVisibleConnected(card)) continue
    const editButtons =
      typeof card.querySelectorAll === "function"
        ? Array.from(card.querySelectorAll('button[aria-label^="Edit "]'))
        : []
    const visibleEditButtons = editButtons.filter(isVisibleConnected)
    const identities = Array.from(
      new Set(
        visibleEditButtons
          .map((button) => button.getAttribute("aria-label") ?? "")
          .filter((label) => label.startsWith("Edit "))
          .map((label) => firstNonEmptyString(label.slice(5)))
          .filter(Boolean),
      ),
    )
    if (identities.length !== 1) continue
    const identity = identities[0]
    if (!identity) continue
    const details = card.querySelector(".details")
    if (!isVisibleConnected(details)) continue
    const fields =
      step === "experience"
        ? parseExperienceCardFields(identity, readDetailPairs(details))
        : parseEducationCardFields(identity, readDetailPairs(details))
    snapshots.push({
      kind: step,
      identity,
      organization: step === "education" ? identity : fields.organization,
      fields,
      card,
    })
  }
  return snapshots
}

function recordIdentity(record) {
  return record.kind === "experience" ? record.role : record.school
}

function recordOrganization(record) {
  return record.kind === "experience" ? record.organization : record.school
}

function snapshotMatchesIdentity(snapshot, record) {
  return (
    normalizeComparable(snapshot.identity) ===
      normalizeComparable(recordIdentity(record)) &&
    normalizeComparable(snapshot.organization) ===
      normalizeComparable(recordOrganization(record))
  )
}

function optionalFieldMatches(actual, expected) {
  return (
    !expected ||
    normalizeComparable(firstNonEmptyString(actual)) ===
      normalizeComparable(expected)
  )
}

function snapshotFullyMatchesRecord(snapshot, record) {
  if (!snapshotMatchesIdentity(snapshot, record)) return false
  if (record.kind === "experience") {
    if (snapshot.kind !== "experience") return false
    const fields = snapshot.fields
    return (
      optionalFieldMatches(fields.role, record.role) &&
      optionalFieldMatches(fields.organization, record.organization) &&
      optionalFieldMatches(fields.location, record.location) &&
      optionalFieldMatches(fields.startMonth, record.startMonth) &&
      optionalFieldMatches(fields.startYear, record.startYear) &&
      fields.isCurrent === record.isCurrent &&
      optionalFieldMatches(fields.description, record.description) &&
      (record.isCurrent ||
        (optionalFieldMatches(fields.endMonth, record.endMonth) &&
          optionalFieldMatches(fields.endYear, record.endYear)))
    )
  }
  if (snapshot.kind !== "education") return false
  const fields = snapshot.fields
  return (
    optionalFieldMatches(fields.school, record.school) &&
    optionalFieldMatches(fields.degree, record.degree) &&
    optionalFieldMatches(fields.major, record.major) &&
    optionalFieldMatches(fields.startYear, record.startYear) &&
    optionalFieldMatches(fields.endYear, record.endYear) &&
    optionalFieldMatches(fields.description, record.description)
  )
}

function runtimeStillOnStep(runtime, step) {
  return runtime.getStep() === step
}

async function runFillStep(fn) {
  cancellation.checkpoint()
  const result = await fn()
  cancellation.checkpoint()
  return result
}

async function fillExperienceFields(runtime, record, step) {
  const required = [
    ["role", record.role],
    ["organization", record.organization],
    ["startMonth", record.startMonth],
    ["startYear", record.startYear],
  ]
  for (const [key, value] of required) {
    if (!runtimeStillOnStep(runtime, step)) return false
    const committed = await runFillStep(() => runtime.fillExact(key, value))
    if (!committed || !runtimeStillOnStep(runtime, step)) return false
  }
  if (record.location && runtimeStillOnStep(runtime, step)) {
    await runFillStep(() => runtime.fillExact("location", record.location))
  }
  if (record.description && runtimeStillOnStep(runtime, step)) {
    await runFillStep(() =>
      runtime.fillText("description", record.description),
    )
  }
  if (!runtimeStillOnStep(runtime, step)) return false
  if (
    !(await runFillStep(() =>
      runtime.setCheckbox("isCurrent", record.isCurrent),
    ))
  ) {
    return false
  }
  if (!runtimeStillOnStep(runtime, step)) return false
  if (!record.isCurrent) {
    if (record.endMonth) {
      await runFillStep(() => runtime.fillExact("endMonth", record.endMonth))
    }
    if (!runtimeStillOnStep(runtime, step)) return false
    if (record.endYear) {
      await runFillStep(() => runtime.fillExact("endYear", record.endYear))
    }
  }
  return runtimeStillOnStep(runtime, step)
}

async function fillEducationFields(runtime, record, step) {
  if (!(await runFillStep(() => runtime.fillExact("school", record.school)))) {
    return false
  }
  if (!runtimeStillOnStep(runtime, step)) return false

  if (
    !(await runFillStep(() =>
      runtime.fillExact("startYear", record.startYear),
    ))
  ) {
    return false
  }
  if (!runtimeStillOnStep(runtime, step)) return false

  if (record.degree) {
    await runFillStep(() => runtime.fillExact("degree", record.degree))
  }
  if (!runtimeStillOnStep(runtime, step)) return false

  if (record.major) {
    await runFillStep(() => runtime.fillExact("major", record.major))
  }
  if (!runtimeStillOnStep(runtime, step)) return false

  if (record.endYear) {
    await runFillStep(() => runtime.fillExact("endYear", record.endYear))
  }
  if (!runtimeStillOnStep(runtime, step)) return false

  if (record.description) {
    await runFillStep(() =>
      runtime.fillText("description", record.description),
    )
  }
  return runtimeStillOnStep(runtime, step)
}

export async function fillCareerHubRecords(step, records, options = {}) {
  const root =
    options.root ?? (typeof document !== "undefined" ? document : {})
  const runtime =
    options.runtime ?? createCareerHubRecordRuntime(root, options.pause)
  const expectedStep = step
  const normalized =
    step === "experience"
      ? normalizeCareerHubExperienceRecords(records)
      : normalizeCareerHubEducationRecords(records)
  const results = []
  const sectionReporter = options.sectionReporter
  const focusRules = []
  const sectionType = step === "experience" ? "employment" : "education"
  const fieldLabels = {
    role: "Role / Job Title",
    organization: "Company",
    location: "Location",
    school: "School",
    degree: "Degree",
    major: "Major",
    description: "Description",
    startMonth: "Start Month",
    startYear: "Start Year",
    endMonth: "End Month",
    endYear: "End Year",
    isCurrent: "Currently in this role",
  }

  for (const [index, record] of normalized.entries()) {
    const row = sectionReporter?.ensureRow(index, {
      ...record,
      ...(record.kind === "education"
        ? { School: record.school }
        : { Company: record.organization }),
    })
    const reportableEntries = Object.entries(record).filter(
      ([key, value]) =>
        fieldLabels[key] && (typeof value === "boolean" || !!value),
    )
    const childRules = sectionReporter
      ? reportableEntries.map(([key]) => ({
          label: fieldLabels[key],
          type: enums.FIELD_TYPE.TEXT,
        }))
      : []

    const updateFocusRules = (withTargets, card) => {
      if (!sectionReporter) return
      focusRules[index] = {
        type:
          step === "experience"
            ? enums.FIELD_TYPE.EMPLOYMENT
            : enums.FIELD_TYPE.EDUCATION,
        label: step === "experience" ? "Experience" : "Education",
        $input: card,
        children: childRules.map((child, childIndex) => ({
          ...child,
          $input: withTargets
            ? runtime.getFieldTarget?.(reportableEntries[childIndex][0])
            : undefined,
        })),
      }
      dom.setSectionResultFocusRules(sectionType, focusRules)
    }

    const emitRowResult = (committed, card) => {
      if (sectionReporter && row) {
        for (const field of row.fields) {
          sectionReporter.updateField(
            row,
            field.label,
            field.value,
            field.status === "skipped"
              ? "skipped"
              : committed
                ? field.status === "pending"
                  ? "filled"
                  : field.status
                : "missed",
          )
        }
        updateFocusRules(false, card)
        sectionReporter.emit()
      }
    }

    if (sectionReporter && row) {
      for (const [key, value] of reportableEntries) {
        sectionReporter.updateField(
          row,
          fieldLabels[key],
          String(value),
          "pending",
        )
      }
      sectionReporter.emit()
    }

    const reportField = async (key, value, fillFn) => {
      try {
        const committed = await fillFn()
        if (sectionReporter && row) {
          sectionReporter.updateField(
            row,
            fieldLabels[key] ?? key,
            String(value),
            committed ? "filled" : "missed",
          )
          updateFocusRules(true)
          sectionReporter.emit()
        }
        return committed
      } catch (error) {
        if (sectionReporter && row) {
          sectionReporter.updateField(
            row,
            fieldLabels[key] ?? key,
            String(value),
            error instanceof cancellation.SkippedError ? "skipped" : "missed",
          )
          sectionReporter.emit()
        }
        throw error
      }
    }

    const reportingRuntime = sectionReporter
      ? {
          ...runtime,
          getStep: () => runtime.getStep(),
          fillText: (key, value) =>
            reportField(key, value, () => runtime.fillText(key, value)),
          fillExact: (key, value) =>
            reportField(key, value, () => runtime.fillExact(key, value)),
          setCheckbox: (key, value) =>
            reportField(key, value, () => runtime.setCheckbox(key, value)),
        }
      : runtime

    if (!record.valid) {
      results.push({ committed: false, mode: "invalid" })
      emitRowResult(false)
      continue
    }
    if (runtime.getStep() !== expectedStep) {
      results.push({ committed: false, mode: "aborted" })
      emitRowResult(false)
      continue
    }

    const snapshots = runtime.getSnapshots(step)
    const existing = snapshots.find((snapshot) =>
      snapshotFullyMatchesRecord(snapshot, record),
    )
    if (existing) {
      results.push({ committed: true, mode: "existing" })
      emitRowResult(true, existing.card)
      continue
    }

    const identityMatches = snapshots.filter((snapshot) =>
      snapshotMatchesIdentity(snapshot, record),
    )
    const mode = identityMatches.length === 1 ? "edit" : "add"
    const editTarget =
      identityMatches.length === 1 ? identityMatches[0] : undefined
    let began = false
    let startedBegin = false
    const resultIndex = results.length

    try {
      began = await runFillStep(() => {
        startedBegin = true
        return runtime.begin(record, mode, editTarget)
      })
      if (!began) {
        results.push({ committed: false, mode })
        continue
      }
      updateFocusRules(true)
      if (runtime.getStep() !== expectedStep) {
        results.push({ committed: false, mode: "aborted" })
        continue
      }
      const filled =
        record.kind === "experience"
          ? await fillExperienceFields(
              reportingRuntime,
              record,
              expectedStep,
            )
          : await fillEducationFields(
              reportingRuntime,
              record,
              expectedStep,
            )
      if (!filled || runtime.getStep() !== expectedStep) {
        results.push({
          committed: false,
          mode: runtime.getStep() === expectedStep ? mode : "aborted",
        })
        continue
      }
      results.push({
        committed: await runFillStep(() => runtime.save(record)),
        mode,
      })
    } catch (error) {
      if (
        startedBegin &&
        (error instanceof cancellation.CancelledError ||
          error instanceof cancellation.SkippedError)
      ) {
        try {
          await runtime.cleanupInterruptedRun?.(record, mode, editTarget)
        } catch {
          // ignore cleanup failures
        }
      }
      throw error
    } finally {
      const committed =
        results.length > resultIndex && results[results.length - 1].committed
      const card =
        sectionReporter && committed
          ? runtime
              .getSnapshots(step)
              .find((snapshot) =>
                snapshotFullyMatchesRecord(snapshot, record),
              )?.card
          : undefined
      emitRowResult(committed, card)
    }
  }

  return results
}

function isVisibleConnected(el) {
  return !!(
    el?.isConnected &&
    !el.hidden &&
    el.getAttribute("aria-hidden") !== "true" &&
    (!el.getClientRects || el.getClientRects().length > 0)
  )
}

function getControlAccessibleLabel(control, scope) {
  const aria = firstNonEmptyString(control.getAttribute("aria-label"))
  if (aria) return aria
  const id = control.getAttribute("id")
  if (id) {
    for (const label of Array.from(scope.querySelectorAll("label"))) {
      if (label.getAttribute("for") === id) {
        return firstNonEmptyString(label.textContent)
      }
    }
  }
  return firstNonEmptyString(control.closest("label")?.textContent)
}

function findExactVisibleButton(root, label) {
  const matches = Array.from(root.querySelectorAll("button"))
    .filter(isVisibleConnected)
    .filter((button) => {
      const text =
        firstNonEmptyString(button.getAttribute("aria-label")) ||
        firstNonEmptyString(button.textContent)
      return normalizeComparable(text) === normalizeComparable(label)
    })
  return matches.length === 1 ? matches[0] : null
}

function hasAmbiguousEditCards(root) {
  return Array.from(root.querySelectorAll(FIELD_CONTAINER_SELECTOR)).some(
    (container) => {
      if (!isVisibleConnected(container)) return false
      const card =
        container.querySelector(".info-card.infoCard-3PHA5") ??
        container.querySelector(".info-card-container") ??
        container.querySelector(".info-card")
      return (
        !!isVisibleConnected(card) &&
        Array.from(card.querySelectorAll('button[aria-label^="Edit "]')).filter(
          isVisibleConnected,
        ).length > 1
      )
    },
  )
}

function setNativeControlValue(el, value) {
  const proto =
    typeof HTMLInputElement !== "undefined" && el instanceof HTMLInputElement
      ? HTMLInputElement.prototype
      : typeof HTMLTextAreaElement !== "undefined"
        ? HTMLTextAreaElement.prototype
        : null
  const setter = proto
    ? Object.getOwnPropertyDescriptor(proto, "value")?.set
    : undefined
  if (setter) setter.call(el, value)
  else el.value = value
}

function writeTextControl(el, value) {
  setNativeControlValue(el, value)
  el.dispatchEvent(new Event("input", { bubbles: true, composed: true }))
  el.dispatchEvent(new Event("change", { bubbles: true, composed: true }))
}

function findElementById(root, id) {
  return (
    Array.from(root.querySelectorAll("[id]")).find(
      (el) => el.getAttribute("id") === id,
    ) ?? null
  )
}

function createCareerHubRecordRuntime(root, pauseFn = pause) {
  let editTarget
  let activeKind = null
  let primaryControlId = null
  let editorRoot = null
  let addedEmptyEditor = false
  let beginMeta = null
  const previousValues = new Map()

  const isOnExpectedStep = () =>
    !!activeKind && steps.getCareerHubActiveStep(root) === activeKind

  const getEditorRoot = () => {
    if (!isOnExpectedStep() || !primaryControlId) return null
    const candidates = Array.from(
      root.querySelectorAll(`#${primaryControlId}`),
    )
      .filter(isVisibleConnected)
      .map(
        (el) =>
          el.closest('form, [role="dialog"], .fieldContainer-3aJo0') ??
          el.parentElement,
      )
      .filter((el) => isVisibleConnected(el))
    return candidates.length === 1 ? candidates[0] : null
  }

  const getFieldControl = (key) => {
    const editor = getEditorRoot()
    if (!editor) return null
    const idByKey = {
      role: "title",
      organization: "work",
      location: "location",
      school: "school",
      degree: "degree",
      major: "major",
    }
    if (idByKey[key]) {
      const byId = editor.querySelector(`#${idByKey[key]}`)
      return isVisibleConnected(byId) ? byId : null
    }
    const labelsByKey = {
      startMonth: ["Start date, Month"],
      startYear: ["Start date, Year"],
      endMonth: ["End date, Month"],
      endYear: ["End date, Year", "End date (or expected), Year"],
    }
    const labels = labelsByKey[key] ?? []
    const matches = Array.from(
      editor.querySelectorAll('input[role="combobox"]'),
    )
      .filter(isVisibleConnected)
      .filter((input) =>
        labels.some(
          (label) =>
            normalizeComparable(getControlAccessibleLabel(input, editor)) ===
            normalizeComparable(label),
        ),
      )
    return matches.length === 1 ? matches[0] : null
  }

  const getComboboxSurface = (key) => {
    const input = getFieldControl(key)
    if (!input) return null
    const expectedControls = {
      role: "search-results-title",
      organization: "search-results-work",
      location: "search-results-location",
      school: "search-results-school",
    }
    const controlsId = firstNonEmptyString(input.getAttribute("aria-controls"))
    if (
      !controlsId ||
      /\s/.test(controlsId) ||
      (expectedControls[key] && controlsId !== expectedControls[key])
    ) {
      return null
    }
    const listbox = findElementById(root, controlsId)
    const options = isVisibleConnected(listbox)
      ? Array.from(listbox.querySelectorAll('[role="option"]'))
      : []
    return {
      get value() {
        return input.value
      },
      set value(next) {
        setNativeControlValue(input, next)
      },
      options,
      getAttribute: (name) => input.getAttribute(name),
      setAttribute: (name, value) => input.setAttribute(name, value),
      removeAttribute: (name) => input.removeAttribute(name),
      focus: () => input.focus(),
      blur: () => input.blur(),
      dispatchEvent: (event) => input.dispatchEvent(event),
      addEventListener: (type, listener) =>
        input.addEventListener(type, listener),
      removeEventListener: (type, listener) =>
        input.removeEventListener(type, listener),
    }
  }

  const rememberPrevious = (key, control) => {
    if (!control || previousValues.has(key)) return
    previousValues.set(key, {
      control,
      value: control.value,
      checked:
        typeof HTMLInputElement !== "undefined" &&
        control instanceof HTMLInputElement &&
        control.type === "checkbox"
          ? control.checked
          : undefined,
      marker: control.getAttribute(COMMITTED_ATTR),
    })
  }

  const editorLooksEmpty = (editor) =>
    Array.from(editor.querySelectorAll("input, textarea")).every((el) =>
      el instanceof HTMLInputElement && el.type === "checkbox"
        ? !el.checked
        : !el.value,
    )

  const blurWithEscape = (el) => {
    if (typeof KeyboardEvent !== "undefined") {
      el.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Escape",
          code: "Escape",
          bubbles: true,
          composed: true,
        }),
      )
    }
    el.blur()
  }

  return {
    getStep: () => steps.getCareerHubActiveStep(root),
    getSnapshots: (kind) => getCareerHubRecordSnapshots(kind, root),
    getFieldTarget(key) {
      if (key === "description") {
        return getEditorRoot()?.querySelector("#description") ?? null
      }
      if (key === "isCurrent") {
        const matches = Array.from(
          getEditorRoot()?.querySelectorAll('input[type="checkbox"]') ?? [],
        )
          .filter(isVisibleConnected)
          .filter(
            (checkbox) =>
              checkbox.value === "isCurrent" ||
              normalizeComparable(
                getControlAccessibleLabel(checkbox, getEditorRoot()),
              ) === normalizeComparable("Currently in this role"),
          )
        return matches.length === 1 ? matches[0] : null
      }
      return getFieldControl(key)
    },
    async begin(record, mode, existingSnapshot) {
      activeKind = record.kind
      primaryControlId = record.kind === "experience" ? "title" : "school"
      editTarget = existingSnapshot
      editorRoot = null
      addedEmptyEditor = false
      beginMeta = null
      previousValues.clear()
      if (
        !isOnExpectedStep() ||
        (mode === "add" && hasAmbiguousEditCards(root))
      ) {
        return false
      }
      const editorBefore = getEditorRoot()
      const trigger =
        mode === "edit" && existingSnapshot?.card
          ? findExactVisibleButton(
              existingSnapshot.card,
              `Edit ${recordIdentity(record)}`,
            )
          : findExactVisibleButton(
              root,
              record.kind === "experience"
                ? "Add experience"
                : "Add Education",
            )
      if (!trigger) return false
      beginMeta = { mode, editorBefore }
      trigger.click()
      for (
        let round = 0;
        round < OPTION_WAIT_ROUNDS && isOnExpectedStep();
        round += 1
      ) {
        const editor = getEditorRoot()
        if (editor) {
          editorRoot = editor
          addedEmptyEditor =
            mode === "add" &&
            editor !== editorBefore &&
            editorLooksEmpty(editor)
          return true
        }
        await withCheckpoints(pauseFn)
      }
      return false
    },
    async fillText(key, value) {
      const editor = getEditorRoot()
      if (!editor || !isOnExpectedStep()) return false
      const input =
        key === "description" ? editor.querySelector("#description") : null
      if (!isVisibleConnected(input)) return false
      rememberPrevious(key, input)
      writeTextControl(input, value)
      const live = getEditorRoot()?.querySelector("#description")
      return !!live && isOnExpectedStep() && live.value === value
    },
    async fillExact(key, value) {
      rememberPrevious(key, getFieldControl(key))
      return commitCareerHubExactOption(() => getComboboxSurface(key), value, {
        pause: pauseFn,
        isValid: isOnExpectedStep,
      })
    },
    async setCheckbox(key, value) {
      if (key !== "isCurrent") return false
      const editor = getEditorRoot()
      if (!editor || !isOnExpectedStep()) return false
      const matches = Array.from(
        editor.querySelectorAll('input[type="checkbox"]'),
      )
        .filter(isVisibleConnected)
        .filter(
          (checkbox) =>
            checkbox.value === "isCurrent" ||
            normalizeComparable(
              getControlAccessibleLabel(checkbox, editor),
            ) === normalizeComparable("Currently in this role"),
        )
      if (matches.length !== 1) return false
      rememberPrevious(key, matches[0])
      if (matches[0].checked !== value) matches[0].click()
      const liveEditor = getEditorRoot()
      const liveMatches = liveEditor
        ? Array.from(
            liveEditor.querySelectorAll('input[type="checkbox"]'),
          ).filter(
            (checkbox) =>
              checkbox.value === "isCurrent" ||
              normalizeComparable(
                getControlAccessibleLabel(checkbox, liveEditor),
              ) === normalizeComparable("Currently in this role"),
          )
        : []
      return (
        liveMatches.length === 1 &&
        liveMatches[0].checked === value &&
        isOnExpectedStep()
      )
    },
    async save(record) {
      const editor = getEditorRoot()
      if (!editor || !isOnExpectedStep()) return false
      const identity = recordIdentity(record)
      const saveLabels =
        record.kind === "education"
          ? ["Save School"]
          : editTarget
            ? [`Save ${identity}`]
            : ["Save Role / Job Title"]
      const buttons = saveLabels
        .map((label) => findExactVisibleButton(editor, label))
        .filter((button) => !!button)
      const unique = Array.from(new Set(buttons))
      if (unique.length !== 1) return false
      unique[0].click()
      for (
        let round = 0;
        round < OPTION_WAIT_ROUNDS && isOnExpectedStep();
        round += 1
      ) {
        const closed = !getEditorRoot()
        const saved = getCareerHubRecordSnapshots(record.kind, root).some(
          (snapshot) => snapshotFullyMatchesRecord(snapshot, record),
        )
        if (closed && saved) return true
        await withCheckpoints(pauseFn)
      }
      return false
    },
    cleanupInterruptedRun(record, mode) {
      const editor = editorRoot?.isConnected ? editorRoot : getEditorRoot()
      for (const [key, previous] of previousValues) {
        try {
          const live =
            key === "description"
              ? editor?.querySelector("#description")
              : key === "isCurrent"
                ? editor?.querySelector(
                    'input[type="checkbox"][value="isCurrent"]',
                  )
                : getFieldControl(key)
          const control = isVisibleConnected(live ?? null)
            ? live
            : previous.control
          if (
            previous.checked !== undefined &&
            control instanceof HTMLInputElement
          ) {
            if (control.checked !== previous.checked) control.click()
          } else if (control.value !== previous.value) {
            writeTextControl(control, previous.value)
          }
          if (previous.marker === null) {
            control.removeAttribute(COMMITTED_ATTR)
          } else {
            control.setAttribute(COMMITTED_ATTR, previous.marker)
          }
          blurWithEscape(control)
        } catch {
          // ignore restore failures
        }
      }
      const looksLikeFreshAdd = !!(
        mode === "add" &&
        beginMeta?.mode === "add" &&
        editor &&
        editor !== beginMeta.editorBefore &&
        editorLooksEmpty(editor)
      )
      if (mode === "add" && editor && (addedEmptyEditor || looksLikeFreshAdd)) {
        const deleteButton = findExactVisibleButton(
          editor,
          record.kind === "experience"
            ? "Delete Role / Job Title"
            : "Delete School",
        )
        deleteButton?.click()
      }
    },
  }
}
