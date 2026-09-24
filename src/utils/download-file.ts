// @ts-nocheck
/**
 * Trigger a browser download from a data URL.
 */

export function downloadDataUrlFile(dataUrl, filename) {
  if (!dataUrl) return
  const anchor = document.createElement("a")
  anchor.href = dataUrl
  anchor.download = filename
  anchor.rel = "noopener"
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}
