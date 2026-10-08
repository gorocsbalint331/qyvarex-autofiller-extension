/**
 * Salary-expectation answers: a fixed default, or a point one third of the way
 * into the salary range advertised in the job description.
 */

export type SalaryPeriod = "year" | "month" | "hour"

export type SalaryRange = {
  min: number
  max: number
  currency: string | null
  period: SalaryPeriod
}

export type SalaryTarget = {
  amount: number
  currency: string | null
  period: SalaryPeriod
}

export const DEFAULT_SALARY: SalaryTarget = {
  amount: 60000,
  currency: "EUR",
  period: "year"
}

const CURRENCY_PATTERN =
  "(?:us\\$|ca\\$|au\\$|c\\$|a\\$|€|\\$|£|₹|euros?|eur|usd|gbp|chf|pln|zł|sek|nok|dkk|cad|aud|inr)"
const AMOUNT_PATTERN = "(\\d{1,3}(?:[.,'’ ]\\d{3})+|\\d+(?:[.,]\\d{1,2})?)\\s?(k\\b)?"
const RANGE_RE = new RegExp(
  `(${CURRENCY_PATTERN})?\\s?${AMOUNT_PATTERN}\\s?(${CURRENCY_PATTERN})?` +
    `\\s*(?:-|to|and|until|bis)\\s*` +
    `(${CURRENCY_PATTERN})?\\s?${AMOUNT_PATTERN}\\s?(${CURRENCY_PATTERN})?`,
  "gi"
)

const SALARY_CONTEXT_RE =
  /salary|compensation|remuneration|\bpay\b|pay range|wage|gross|base|annual|\bote\b|range|per (year|annum|month|hour)/i

const PLAUSIBLE: Record<SalaryPeriod, [number, number]> = {
  year: [5000, 2_000_000],
  month: [300, 50_000],
  hour: [5, 1000]
}

function toCurrencyCode(token: string | undefined): string | null {
  if (!token) return null
  const t = token.toLowerCase()
  if (t === "€" || t.startsWith("eur")) return "EUR"
  if (t === "£" || t === "gbp") return "GBP"
  if (t === "ca$" || t === "c$" || t === "cad") return "CAD"
  if (t === "au$" || t === "a$" || t === "aud") return "AUD"
  if (t === "$" || t === "us$" || t === "usd") return "USD"
  if (t === "₹" || t === "inr") return "INR"
  if (t === "zł" || t === "pln") return "PLN"
  return t.toUpperCase()
}

function parseAmount(raw: string, hasK: boolean): number {
  const grouped = /^\d{1,3}(?:[.,'’ ]\d{3})+$/.test(raw)
  const n = grouped ? Number(raw.replace(/\D/g, "")) : Number(raw.replace(",", "."))
  return hasK ? n * 1000 : n
}

function detectPeriod(text: string): SalaryPeriod | null {
  if (/per hour|an hour|hourly|\/\s?(hr|hour|h)\b|p\/h/i.test(text)) return "hour"
  if (/per month|a month|monthly|\/\s?(month|mo|mth)\b|p\.?\s?m\.?(\s|$)|brutto monatlich/i.test(text)) {
    return "month"
  }
  if (/per year|a year|per annum|annual|annually|yearly|\/\s?(year|yr|y)\b|p\.?\s?a\.?(\s|$)|jährlich/i.test(text)) {
    return "year"
  }
  return null
}

function normalizeText(text: string): string {
  return text
    .replace(/[\u2012-\u2015\u2212]/g, "-")
    .replace(/[\u00a0\u202f\u2009]/g, " ")
    .replace(/[ \t]+/g, " ")
}

/** Best salary range mentioned in free text (job description / posting page). */
export function extractSalaryRange(input: string): SalaryRange | null {
  if (!input) return null
  const text = normalizeText(input)
  let best: (SalaryRange & { score: number; index: number }) | null = null

  for (const m of text.matchAll(RANGE_RE)) {
    const [, cur1, raw1, k1, cur2, cur3, raw2, k2, cur4] = m
    const index = m.index ?? 0
    const currency = toCurrencyCode(cur1 || cur2 || cur3 || cur4)
    let min = parseAmount(raw1, !!k1)
    const max = parseAmount(raw2, !!k2)
    if (!k1 && k2 && min < 1000) min *= 1000
    if (!(min > 0) || !(max > min) || max / min > 3) continue

    const before = text.slice(Math.max(0, index - 120), index)
    const after = text.slice(index + m[0].length, index + m[0].length + 60)
    const hasContext = SALARY_CONTEXT_RE.test(before) || SALARY_CONTEXT_RE.test(after)
    if (!currency && !k1 && !k2 && !hasContext) continue

    const period =
      detectPeriod(m[0] + " " + after) ??
      (max >= 10000 ? "year" : max >= 500 ? "month" : "hour")
    if (!currency && !k2 && period !== "year") continue
    const [lo, hi] = PLAUSIBLE[period]
    if (min < lo || max > hi) continue

    const score = (currency ? 2 : 0) + (SALARY_CONTEXT_RE.test(before) ? 2 : 0) + (hasContext ? 1 : 0)
    if (!best || score > best.score) {
      best = { min, max, currency, period, score, index }
    }
  }

  if (!best) return null
  const { min, max, currency, period } = best
  return { min, max, currency, period }
}

export function formatSalaryRangeLabel(range: SalaryRange): string {
  return [
    `${range.min}-${range.max}`,
    range.currency,
    range.period === "year" ? "" : `per ${range.period}`
  ]
    .filter(Boolean)
    .join(" ")
}

export function salaryTarget(range: SalaryRange | null | undefined): SalaryTarget {
  if (!range) return DEFAULT_SALARY
  return {
    amount: Math.round(range.min + (range.max - range.min) / 3),
    currency: range.currency,
    period: range.period
  }
}

/** Questions that ask for a salary figure, including current and expected pay. */
export function isSalaryExpectationQuestion(norm: string): boolean {
  const strong = /\b(salary|salaries|compensation|remuneration|ctc|gehalt\w*|finansow\w*|wynagrodzen\w*|pensj\w*)\b/.test(norm)
  const weak =
    /\b(pay|wage|wages|rate)\b/.test(norm) &&
    /\b(expect\w*|desired|require\w*|looking for|current|gross)\b/.test(norm)
  if (!strong && !weak) return false
  if (
    /\bcurrency\b/.test(norm) &&
    !/\b(amount|gross|net|expect|desired|minimum|current|per)\b/.test(norm)
  ) {
    return false
  }
  if (/^(are|do|does|is|would|will|can|could|have|did)\b/.test(norm)) return false
  return true
}

const USD_PER_UNIT: Record<string, number> = {
  USD: 1,
  EUR: 1.08,
  GBP: 1.27,
  CAD: 0.73,
  AUD: 0.66,
  CHF: 1.13,
  PLN: 0.27,
  INR: 0.012,
  SEK: 0.095,
  NOK: 0.093,
  DKK: 0.145
}

const SINGLE_AMOUNT_RE = new RegExp(
  `(${CURRENCY_PATTERN})?\\s?${AMOUNT_PATTERN}\\s?(${CURRENCY_PATTERN})?`,
  "i"
)

/** "70000EUR" or "5,000 EUR per month" → amount, currency, and period. */
export function parseSalaryText(input: string): SalaryTarget | null {
  const text = normalizeText(input).trim()
  if (!text) return null
  const match = text.match(SINGLE_AMOUNT_RE)
  if (!match) return null
  const amount = parseAmount(match[2], !!match[3])
  if (!(amount > 0)) return null
  const currency = toCurrencyCode(match[1] || match[4]) || "EUR"
  const period =
    detectPeriod(text) ?? (amount >= 20000 ? "year" : amount >= 500 ? "month" : "hour")
  return { amount, currency, period }
}

/** Currency the question itself asks for, such as "in USD". */
export function askedCurrency(label: string): string | null {
  const text = label.toLowerCase()
  if (/\b(usd|us dollars?|us\$)\b/.test(text) || /\bin usd\b/.test(text)) return "USD"
  if (/\b(eur|euros?)\b/.test(text) || text.includes("€")) return "EUR"
  if (/\b(gbp|pounds?)\b/.test(text) || text.includes("£")) return "GBP"
  if (/\b(cad|canadian dollars?)\b/.test(text)) return "CAD"
  if (/\b(aud|australian dollars?)\b/.test(text)) return "AUD"
  return null
}

export function convertSalaryAmount(
  target: SalaryTarget,
  currency: string | null
): SalaryTarget {
  if (!currency) return target
  if (!target.currency || target.currency === currency) {
    return { ...target, currency }
  }
  const from = USD_PER_UNIT[target.currency]
  const to = USD_PER_UNIT[currency]
  if (!from || !to) return { ...target, currency }
  return {
    ...target,
    amount: Math.round((target.amount * from) / to),
    currency
  }
}

/**
 * When the question already says the currency and the period, return digits
 * only so a USD monthly field is not filled with "5000 EUR per month".
 */
export function formatSalaryForQuestion(
  target: SalaryTarget,
  label: string,
  fieldType?: string
): string {
  const text = label.toLowerCase()
  const named = !!askedCurrency(label)
  const periodNamed =
    /\b(month|year|annual|annum|hour|hourly|monat\w*|jahr\w*|brutto)\b/.test(text) ||
    /j[aä]hrlich/.test(text)
  if (
    (fieldType && /number|numeric|currency|integer/i.test(fieldType)) ||
    (named && periodNamed)
  ) {
    return String(target.amount)
  }
  if (named) {
    const period = PERIOD_WORDS[target.period]
    return period ? `${target.amount} ${period}` : String(target.amount)
  }
  return formatSalary(target, fieldType)
}

function optionBounds(option: string): [number, number] | null {
  const text = normalizeText(option).toLowerCase()
  const nums = [...text.matchAll(/(\d{1,3}(?:[.,'’ ]\d{3})+|\d+(?:[.,]\d{1,2})?)\s?(k\b)?/g)].map(
    (m) => parseAmount(m[1], !!m[2])
  )
  if (!nums.length) return null
  if (nums.length >= 2) {
    const lo = nums[1] >= 1000 && nums[0] < 1000 ? nums[0] * 1000 : nums[0]
    return [Math.min(lo, nums[1]), Math.max(lo, nums[1])]
  }
  if (/\+|above|over|more|greater|at least/.test(text)) return [nums[0], Infinity]
  if (/under|below|less|up to|max/.test(text)) return [0, nums[0]]
  return [nums[0], nums[0]]
}

/** Option whose numeric bracket contains (or is closest to) the amount. */
export function pickSalaryOption(amount: number, options: string[]): string | null {
  let best: string | null = null
  let bestDistance = Infinity
  let parsed = 0
  for (const option of options) {
    const bounds = optionBounds(option)
    if (!bounds) continue
    parsed += 1
    const [lo, hi] = bounds
    const distance = amount < lo ? lo - amount : amount > hi ? amount - hi : 0
    if (distance < bestDistance) {
      bestDistance = distance
      best = option
    }
  }
  return parsed >= 2 ? best : null
}

const PERIOD_WORDS: Record<SalaryPeriod, string> = {
  year: "annually",
  month: "per month",
  hour: "per hour"
}

export function formatSalary(target: SalaryTarget, fieldType?: string): string {
  if (fieldType && /number|numeric|currency|integer/i.test(fieldType)) {
    return String(target.amount)
  }
  return [String(target.amount), target.currency, PERIOD_WORDS[target.period]]
    .filter(Boolean)
    .join(" ")
}
