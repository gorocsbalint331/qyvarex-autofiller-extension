/**
 * Local + network LOV resolve (Jobright autofill-operation stand-in).
 */

import type { AutofillInfoPayload } from "~api/team-types"
import { lookupAnswer } from "~lib/hub-to-jobright"

function norm(s: string) {
  return (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function scoreOption(candidate: string, option: string): number {
  const c = norm(candidate)
  const o = norm(option)
  if (!c || !o) return 0
  if (/^please select|^select |^choose |^select one|^--$/.test(o)) return 0
  if (c === o) return 100
  if (o.includes(c) || c.includes(o)) return 80
  const ct = new Set(c.split(" ").filter(Boolean))
  const ot = o.split(" ").filter(Boolean)
  let hit = 0
  for (const t of ot) if (ct.has(t)) hit += 1
  if (!ot.length) return 0
  return Math.round((hit / ot.length) * 60)
}

function adaptToOptions(value: string, options: string[]): string | null {
  if (!value.trim() || !options.length) return null
  let best: string | null = null
  let bestScore = 0
  for (const opt of options) {
    const s = scoreOption(value, opt)
    if (s > bestScore) {
      bestScore = s
      best = opt
    }
  }
  return bestScore >= 40 ? best : null
}

export type OperationPayload = {
  label?: string
  question?: string
  field?: string
  query?: string
  searchText?: string
  options?: unknown
  candidates?: unknown
  values?: unknown
  search_request_schema?: SearchRequestSchema
  [key: string]: unknown
}

export type SearchRequestSchema = {
  method?: string
  url: string
  headers?: Record<string, string>
  body?: unknown
  resultPath?: string
  labelKey?: string
  valueKey?: string
}

export type ResolveResult = {
  action: "SELECT" | "SELECT_OPTIONS" | "RETRYABLE_FAILURE" | "NO_MATCH"
  selected_values: string[]
  source: string
  options?: string[]
}

function asStringList(raw: unknown): string[] {
  if (!Array.isArray(raw)) return []
  return raw
    .map((o) => {
      if (typeof o === "string") return o
      if (o && typeof o === "object") {
        const rec = o as Record<string, unknown>
        for (const k of ["label", "text", "name", "value", "displayName", "descriptor"]) {
          if (typeof rec[k] === "string") return rec[k] as string
        }
      }
      return ""
    })
    .map((s) => s.trim())
    .filter(Boolean)
}

function dig(obj: unknown, path: string): unknown {
  if (!path) return obj
  let cur: unknown = obj
  for (const part of path.split(".").filter(Boolean)) {
    if (cur == null || typeof cur !== "object") return undefined
    cur = (cur as Record<string, unknown>)[part]
  }
  return cur
}

function extractLabelsFromPayload(
  payload: unknown,
  schema: SearchRequestSchema
): string[] {
  const root = dig(payload, schema.resultPath || "")
  const list = Array.isArray(root)
    ? root
    : Array.isArray((root as { results?: unknown })?.results)
      ? ((root as { results: unknown[] }).results)
      : Array.isArray(payload)
        ? payload
        : []

  const labelKey = schema.labelKey || "label"
  const valueKey = schema.valueKey || "value"
  const out: string[] = []
  for (const item of list) {
    if (typeof item === "string") {
      out.push(item)
      continue
    }
    if (item && typeof item === "object") {
      const rec = item as Record<string, unknown>
      const label =
        (typeof rec[labelKey] === "string" && rec[labelKey]) ||
        (typeof rec[valueKey] === "string" && rec[valueKey]) ||
        (typeof rec.descriptor === "string" && rec.descriptor) ||
        (typeof rec.text === "string" && rec.text) ||
        (typeof rec.name === "string" && rec.name)
      if (typeof label === "string" && label.trim()) out.push(label.trim())
    }
  }
  return out
}

export async function fetchSearchSchemaOptions(
  schema: SearchRequestSchema
): Promise<string[]> {
  const method = (schema.method || "GET").toUpperCase()
  const init: RequestInit = {
    method,
    headers: {
      Accept: "application/json",
      ...(schema.headers || {})
    },
    credentials: "omit"
  }
  if (method !== "GET" && schema.body != null) {
    init.body =
      typeof schema.body === "string"
        ? schema.body
        : JSON.stringify(schema.body)
    if (!schema.headers?.["content-type"] && !schema.headers?.["Content-Type"]) {
      ;(init.headers as Record<string, string>)["content-type"] =
        "application/json"
    }
  }

  const res = await fetch(schema.url, init)
  if (!res.ok) return []
  const contentType = res.headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    const json = await res.json()
    return extractLabelsFromPayload(json, schema)
  }
  const text = await res.text()
  try {
    return extractLabelsFromPayload(JSON.parse(text), schema)
  } catch {
    return []
  }
}

function desiredFromHub(
  hub: AutofillInfoPayload,
  operation: OperationPayload
): string | null {
  const label =
    (typeof operation.label === "string" && operation.label) ||
    (typeof operation.question === "string" && operation.question) ||
    (typeof operation.field === "string" && operation.field) ||
    ""

  const options = [
    ...asStringList(operation.options),
    ...asStringList(operation.candidates),
    ...asStringList(operation.values)
  ]

  const query =
    (typeof operation.query === "string" && operation.query) ||
    (typeof operation.searchText === "string" && operation.searchText) ||
    ""

  let desired =
    (label && lookupAnswer(hub, label, options)) ||
    (query && lookupAnswer(hub, query, options)) ||
    query ||
    null

  if (!desired && /country/i.test(label)) desired = hub.identity.address.country
  if (!desired && /^(city|location)$/i.test(norm(label))) {
    desired = hub.identity.address.city
  }
  if (!desired && /state|province/i.test(label)) {
    desired = hub.identity.address.state
  }
  if (!desired && /school|university|college/i.test(label)) {
    const edu = hub.extras?.education
    if (Array.isArray(edu) && edu[0] && typeof edu[0] === "object") {
      const row = edu[0] as Record<string, unknown>
      desired =
        (typeof row.schoolName === "string" && row.schoolName) ||
        (typeof row.school === "string" && row.school) ||
        null
    }
  }
  if (!desired && /degree/i.test(label)) {
    const edu = hub.extras?.education
    if (Array.isArray(edu) && edu[0] && typeof edu[0] === "object") {
      const row = edu[0] as Record<string, unknown>
      desired =
        (typeof row.accreditation === "string" && row.accreditation) ||
        (typeof row.degree === "string" && row.degree) ||
        null
    }
  }

  return desired
}

/**
 * Resolve an ATS LOV / typeahead / select operation against hub + optional network schema.
 */
export async function resolveOperationLocally(
  hub: AutofillInfoPayload,
  operation: OperationPayload,
  source = "generic"
): Promise<ResolveResult> {
  const desired = desiredFromHub(hub, operation)

  let options = [
    ...asStringList(operation.options),
    ...asStringList(operation.candidates),
    ...asStringList(operation.values)
  ]

  if (operation.search_request_schema?.url) {
    try {
      const remote = await fetchSearchSchemaOptions(operation.search_request_schema)
      if (remote.length) options = [...remote, ...options]
    } catch (err) {
      console.warn("[resolve-operation] search schema fetch failed", err)
    }
  }

  if (!desired?.trim()) {
    return { action: "NO_MATCH", selected_values: [], source, options }
  }

  if (!options.length) {
    return {
      action: "SELECT_OPTIONS",
      selected_values: [desired.trim()],
      source
    }
  }

  const matched = adaptToOptions(desired, options)
  if (!matched) {
    return { action: "NO_MATCH", selected_values: [], source, options }
  }

  return {
    action: "SELECT_OPTIONS",
    selected_values: [matched],
    source,
    options
  }
}
