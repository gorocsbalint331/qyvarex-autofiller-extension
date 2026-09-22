/**
 * Generic ATS form discovery — works for native label/input HTML.
 * Linkedom-safe (no DOM instanceof).
 */

import type { DiscoveredField } from "~contents/crawler/types"

type AnyEl = {
  tagName: string
  id?: string
  className?: string | { toString(): string }
  disabled?: boolean
  hidden?: boolean
  type?: string
  name?: string
  value?: string
  textContent?: string | null
  options?: ArrayLike<{ textContent?: string | null }>
  parentElement: AnyEl | null
  ownerDocument?: {
    body?: AnyEl | null
    getElementById?: (id: string) => AnyEl | null
  }
  getAttribute?: (name: string) => string | null
  hasAttribute?: (name: string) => boolean
  closest?: (sel: string) => AnyEl | null
  querySelector?: (sel: string) => AnyEl | null
  querySelectorAll?: (sel: string) => ArrayLike<AnyEl>
  contains?: (other: AnyEl) => boolean
}

const FIELD_SELECTOR =
  'input:not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]), textarea, select'

function collapseWs(text: string | null | undefined) {
  return (text || "").replace(/\s+/g, " ").trim()
}

function cleanLabel(text: string | null | undefined) {
  return collapseWs(text)
    .replace(/\s*\*+\s*/g, " ")
    .replace(/\(\s*(required|erforderlich|optional)\s*\)/gi, "")
    .replace(/\s+/g, " ")
    .trim()
}

function classStr(el: AnyEl) {
  const c = el.className
  return typeof c === "string" ? c : c?.toString?.() || ""
}

function isVisible(el: AnyEl): boolean {
  if (!el?.getAttribute) return false
  if (el.getAttribute("aria-hidden") === "true" || el.hidden) return false
  if (el.closest?.("[aria-hidden='true'], [hidden]")) return false
  return true
}

function isFillable(el: AnyEl): boolean {
  const tag = (el.tagName || "").toUpperCase()
  if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") return false
  if (el.disabled) return false
  if (
    tag === "INPUT" &&
    ["hidden", "file", "submit", "button", "reset", "image"].includes(el.type || "")
  ) {
    return false
  }
  return isVisible(el)
}

function list(selRoot: AnyEl | Document, selector: string): AnyEl[] {
  const root = selRoot as AnyEl
  const nodes = root.querySelectorAll?.(selector)
  return nodes ? Array.from(nodes as ArrayLike<AnyEl>) : []
}

function pickFormRoot(doc: Document, preferSelector?: string): AnyEl {
  const body = (doc.body || doc.documentElement) as unknown as AnyEl
  if (preferSelector) {
    const preferred = (doc as unknown as AnyEl).querySelector?.(preferSelector)
    if (preferred && isVisible(preferred)) return preferred
  }
  const forms = list(doc as unknown as AnyEl, "form").filter(isVisible)
  let best: AnyEl | null = null
  let bestScore = -1
  for (const form of forms) {
    const fields = list(form, FIELD_SELECTOR).filter(isFillable).length
    const labels = list(form, "label, legend").filter(isVisible).length
    const score = 10 * fields + labels
    if (score > bestScore) {
      bestScore = score
      best = form
    }
  }
  return best || body
}

function fieldContainer(el: AnyEl, root: AnyEl): AnyEl {
  const maxSiblings =
    (el.tagName || "").toUpperCase() === "INPUT" &&
    ["radio", "checkbox"].includes(el.type || "")
      ? 12
      : 4
  let node: AnyEl | null = el.parentElement
  let best: AnyEl = el.parentElement || root
  const body = el.ownerDocument?.body ?? null
  while (node && node !== root && node !== body) {
    const classId = `${node.id || ""} ${classStr(node)}`
    const siblingCount = list(node, FIELD_SELECTOR).filter(isFillable).length
    const hasLabel = !!node.querySelector?.("label, legend")
    const looksLikeField =
      /field|form|question|group|row|item|control|wrapper|input/i.test(classId)
    if ((hasLabel || looksLikeField) && siblingCount <= maxSiblings) {
      return node
    }
    if (hasLabel || looksLikeField) best = node
    node = node.parentElement
  }
  return best
}

function labelForId(root: AnyEl | Document, id: string): AnyEl | null {
  if (!id) return null
  const safe = id.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
  try {
    const hit = (root as AnyEl).querySelector?.(`label[for="${safe}"]`) || null
    return hit && isVisible(hit) ? hit : null
  } catch {
    return null
  }
}

function resolveLabel(el: AnyEl, container: AnyEl): string {
  const byFor =
    el.id &&
    (labelForId(container, el.id) ||
      labelForId(el.ownerDocument as unknown as Document, el.id))
  if (byFor) {
    const text = cleanLabel(byFor.textContent)
    if (text) return text
  }

  const closestLabel = el.closest?.("label")
  if (closestLabel && isVisible(closestLabel)) {
    const text = cleanLabel(closestLabel.textContent)
    if (text) return text
  }

  const aria = cleanLabel(el.getAttribute?.("aria-label"))
  if (aria && !/^(select|choose|option|yes|no|upload|browse)$/i.test(aria)) {
    return aria
  }

  const labelledBy = (el.getAttribute?.("aria-labelledby") || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((id) => el.ownerDocument?.getElementById?.(id) || null)
    .filter((n): n is AnyEl => !!n && isVisible(n))
    .map((n) => n.textContent)
    .join(" ")
  const ariaText = cleanLabel(labelledBy)
  if (ariaText) return ariaText

  const candidates = list(
    container,
    "label, legend, h1, h2, h3, h4, h5, h6, p, span, div"
  ).filter((n) => {
    if (!isVisible(n)) return false
    if (n.contains?.(el) && n.tagName !== "LABEL") return false
    const t = cleanLabel(n.textContent)
    return !!t && !/^(select|choose|option|yes|no|upload|browse)$/i.test(t)
  })
  return cleanLabel(candidates[0]?.textContent)
}

function isRequired(el: AnyEl, container: AnyEl) {
  if (el.hasAttribute?.("required") || el.getAttribute?.("aria-required") === "true") {
    return true
  }
  return /\*|required|erforderlich/i.test(container.textContent || "")
}

function selectOptions(select: AnyEl): string[] {
  const opts = select.options ? Array.from(select.options) : []
  return opts
    .map((o) => collapseWs(o.textContent).replace(/\s*\*+\s*/g, " ").trim())
    .filter((t) => t && !/^(select|please select|--)$/i.test(t))
}

export type DiscoverOptions = {
  /** Prefer a root selector (e.g. Greenhouse #application_form) */
  preferRootSelector?: string
}

export function discoverGenericFields(
  doc: Document,
  opts: DiscoverOptions = {}
): DiscoveredField[] {
  const root = pickFormRoot(doc, opts.preferRootSelector)
  const nodes = list(root, FIELD_SELECTOR).filter(isFillable)
  const out: DiscoveredField[] = []
  const seen = new Set<AnyEl>()

  for (const el of nodes) {
    if (seen.has(el)) continue
    const tag = (el.tagName || "").toUpperCase()

    if (tag === "INPUT" && (el.type === "radio" || el.type === "checkbox")) {
      const container = fieldContainer(el, root)
      const group = list(container, `input[type="${el.type}"]`).filter(isFillable)
      const named =
        el.name || el.id
          ? group.filter((g) => g.name === el.name || g.id === el.id)
          : group
      for (const g of named) seen.add(g)

      const label = resolveLabel(el, container)
      if (!label) continue
      const options = named
        .map((g) => {
          const lab =
            (g.id && labelForId(container, g.id)?.textContent) ||
            g.closest?.("label")?.textContent ||
            g.getAttribute?.("aria-label") ||
            g.value
          return collapseWs(lab)
        })
        .filter(Boolean)

      out.push({
        type: el.type === "radio" ? "radio" : "checkbox",
        label,
        required: named.some((g) => isRequired(g, container)),
        options
      })
      continue
    }

    seen.add(el)
    const container = fieldContainer(el, root)
    const label = resolveLabel(el, container)
    if (!label) continue

    if (tag === "SELECT") {
      out.push({
        type: "select",
        label,
        required: isRequired(el, container),
        options: selectOptions(el)
      })
      continue
    }

    out.push({
      type: tag === "TEXTAREA" ? "textarea" : "text",
      label,
      required: isRequired(el, container)
    })
  }

  return out
}
