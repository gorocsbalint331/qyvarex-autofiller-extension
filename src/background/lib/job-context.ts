import type { JobContext } from "~lib/job-context"
import { resolveJobContext } from "~lib/job-context"

async function readTopFrameHeading(
  tabId: number
): Promise<{ h1: string; docTitle: string }> {
  try {
    const [injection] = await chrome.scripting.executeScript({
      target: { tabId, frameIds: [0] },
      func: () => ({
        h1: document.querySelector("h1")?.textContent?.trim() || "",
        docTitle: document.title || ""
      })
    })
    const result = injection?.result
    return {
      h1: typeof result?.h1 === "string" ? result.h1 : "",
      docTitle: typeof result?.docTitle === "string" ? result.docTitle : ""
    }
  } catch {
    return { h1: "", docTitle: "" }
  }
}

/** Title and company for the job the sender tab is applying to. */
export async function getJobContext(
  sender: chrome.runtime.MessageSender | undefined
): Promise<JobContext> {
  const url = sender?.tab?.url || sender?.url || ""
  const tabId = sender?.tab?.id
  const heading =
    tabId == null
      ? { h1: "", docTitle: "" }
      : await readTopFrameHeading(tabId)
  const primary = resolveJobContext({
    url,
    h1: heading.h1,
    docTitle: heading.docTitle
  })
  if (primary.title || !sender?.url || sender.url === url) return primary
  const fromFrame = resolveJobContext({ url: sender.url })
  return fromFrame.title ? { ...fromFrame, url: sender.url } : primary
}
