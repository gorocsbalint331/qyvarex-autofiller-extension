/**
 * @plasmohq/messaging stub for classic-script inject world.
 * Forwards to the extension background via chrome.runtime.sendMessage.
 */

function isContextInvalidated(error: unknown): boolean {
  const msg =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : ""
  return /extension context invalidated|receiving end does not exist/i.test(msg)
}

export async function sendToBackground<T = any>(req: {
  name: string
  body?: unknown
}): Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      if (!chrome?.runtime?.id) {
        reject(new Error("Extension context invalidated."))
        return
      }
      chrome.runtime.sendMessage(
        { name: req.name, body: req.body },
        (response) => {
          const err = chrome.runtime.lastError
          if (err) {
            reject(new Error(err.message))
            return
          }
          resolve(response as T)
        }
      )
    } catch (error) {
      if (isContextInvalidated(error)) {
        reject(new Error("Extension context invalidated."))
        return
      }
      reject(error)
    }
  })
}

export default { sendToBackground }
