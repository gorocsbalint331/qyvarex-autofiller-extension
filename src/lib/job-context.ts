export type JobContext = {
  title: string
  company: string
  url: string
}

function clean(text: string) {
  return text.replace(/\s+/g, " ").trim()
}

function humanizeSlug(slug: string) {
  const text = clean(decodeURIComponent(slug).replace(/[-_]+/g, " "))
  if (!text) return ""
  return text.replace(/\b[a-z]/g, (char) => char.toUpperCase())
}

function usableTitle(text: string) {
  const title = clean(text)
  if (!title || title.length > 90) return ""
  if (/^(apply|application|job application|careers|jobs)$/i.test(title)) return ""
  return title
}

function titleFromDocumentTitle(docTitle: string) {
  const withoutVendor = clean(docTitle).replace(
    /\s*[|\-–—]\s*(comeet|lever|ashby|greenhouse|workday|indeed|linkedin).*$/i,
    ""
  )
  const at = withoutVendor.split(/\s+at\s+/i)
  return usableTitle(at[0] || "")
}

function fromComeetUrl(url: string): { title: string; company: string } | null {
  try {
    const path = new URL(url).pathname
    const match = path.match(/\/jobs\/([^/]+)\/[^/]+\/([^/]+)(?:\/|$)/i)
    if (!match) return null
    const title = usableTitle(humanizeSlug(match[2]))
    const company = humanizeSlug(match[1])
    if (!title) return null
    return { title, company }
  } catch {
    return null
  }
}

/** Job title and company from the posting URL, heading, or document title. */
export function resolveJobContext(input: {
  url?: string
  h1?: string
  docTitle?: string
}): JobContext {
  const url = input.url || ""
  const fromUrl = url ? fromComeetUrl(url) : null
  const fromHeading = usableTitle(input.h1 || "")
  const fromDoc = titleFromDocumentTitle(input.docTitle || "")
  return {
    title: fromUrl?.title || fromHeading || fromDoc || "",
    company: fromUrl?.company || "",
    url
  }
}
