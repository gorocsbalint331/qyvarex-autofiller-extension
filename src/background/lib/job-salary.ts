import { extractSalaryRange, type SalaryRange } from "~lib/salary"

const CACHE_TTL_MS = 10 * 60 * 1000
const cache = new Map<string, { at: number; range: SalaryRange | null }>()

async function readFrameText(tabId: number, frameId: number): Promise<string> {
  try {
    const [injection] = await chrome.scripting.executeScript({
      target: { tabId, frameIds: [frameId] },
      func: () => document.body?.innerText || ""
    })
    return typeof injection?.result === "string" ? injection.result : ""
  } catch {
    return ""
  }
}

/** Apply-form URLs whose job description lives one level up (Lever, Ashby, …). */
function postingUrl(url: string): string | null {
  try {
    const u = new URL(url)
    const path = u.pathname.replace(/\/(apply|application)\/?$/i, "")
    if (path === u.pathname) return null
    u.pathname = path
    u.search = ""
    u.hash = ""
    return u.toString()
  } catch {
    return null
  }
}

function htmlToText(html: string): string {
  return html
    .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&euro;|&#8364;/gi, "€")
    .replace(/&pound;|&#163;/gi, "£")
    .replace(/&#36;|&dollar;/gi, "$")
    .replace(/&ndash;|&mdash;|&#8211;|&#8212;/gi, "-")
    .replace(/&amp;/gi, "&")
}

async function fetchPageText(url: string): Promise<string> {
  try {
    const res = await fetch(url, { credentials: "omit" })
    return res.ok ? htmlToText(await res.text()) : ""
  } catch {
    return ""
  }
}

/**
 * Salary range advertised for the job the sender tab is applying to: read
 * from the page itself, then from the posting page when the form is a
 * separate /apply URL.
 */
export async function getJobSalaryRange(
  sender: chrome.runtime.MessageSender | undefined
): Promise<SalaryRange | null> {
  const tabId = sender?.tab?.id
  if (tabId == null) return null
  const topUrl = sender?.tab?.url || ""
  const frameUrl = sender?.url || ""
  const key = `${tabId}|${topUrl}|${frameUrl}`
  const hit = cache.get(key)
  if (hit && Date.now() - hit.at < CACHE_TTL_MS) return hit.range

  let range: SalaryRange | null = null
  const frames = [0, ...(sender?.frameId ? [sender.frameId] : [])]
  for (const frameId of frames) {
    range = extractSalaryRange(await readFrameText(tabId, frameId))
    if (range) break
  }
  if (!range) {
    const urls = [...new Set([topUrl, frameUrl].map(postingUrl).filter(Boolean))] as string[]
    for (const url of urls) {
      range = extractSalaryRange(await fetchPageText(url))
      if (range) break
    }
  }

  cache.set(key, { at: Date.now(), range })
  return range
}
