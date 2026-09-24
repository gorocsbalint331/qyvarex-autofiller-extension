// @ts-nocheck
/**
 * Extract cleaned page HTML (and large iframe srcs) for markdown conversion.
 */

const MAX_HTML_LENGTH = 2e5
const MAX_IFRAME_SRCS = 5
const MIN_IFRAME_AREA = 5e3
const BLOCKED_IFRAME_SRC_PATTERN =
  /^(about|data|javascript|blob|chrome-extension|file):/i

function collectLargeHttpIframeSrcs() {
  let candidates = []
  document.querySelectorAll("iframe").forEach((iframe) => {
    let src = (iframe.getAttribute("src") || "").trim()
    if (!src || BLOCKED_IFRAME_SRC_PATTERN.test(src)) return
    let area = (iframe.offsetWidth || 0) * (iframe.offsetHeight || 0)
    if (!(area < MIN_IFRAME_AREA)) {
      try {
        let absoluteUrl = new URL(src, document.baseURI)
        if ("http:" !== absoluteUrl.protocol && "https:" !== absoluteUrl.protocol) return
        candidates.push({
          src: absoluteUrl.toString(),
          area
        })
      } catch {
      }
    }
  })
  let bestAreaBySrc = new Map()
  for (let { src, area } of candidates) {
    let previousArea = bestAreaBySrc.get(src) ?? -1
    if (area > previousArea) bestAreaBySrc.set(src, area)
  }
  return Array.from(bestAreaBySrc.entries())
    .sort((left, right) => right[1] - left[1])
    .slice(0, MAX_IFRAME_SRCS)
    .map(([src]) => src)
}

export function extractCleanedHtml() {
  try {
    let body = document.body
    if (!body) {
      return {
        html: "",
        iframeSrcs: []
      }
    }
    let iframeSrcs = collectLargeHttpIframeSrcs()
    let clone = body.cloneNode(true)
    clone
      .querySelectorAll("[data-plasmo], plasmo-csui, [id^='plasmo']")
      .forEach((node) => node.remove())
    clone
      .querySelectorAll("script, style, noscript, svg, iframe, link, meta")
      .forEach((node) => node.remove())
    clone.querySelectorAll("*").forEach((element) => {
      element.removeAttribute("style")
      element.removeAttribute("class")
      Array.from(element.attributes).forEach((attribute) => {
        if (attribute.name.startsWith("data-")) element.removeAttribute(attribute.name)
      })
    })
    let html = clone.innerHTML || ""
    let truncatedHtml = html.length > MAX_HTML_LENGTH ? html.slice(0, MAX_HTML_LENGTH) : html
    return {
      html: truncatedHtml,
      iframeSrcs
    }
  } catch (error) {
    return (
      console.error("[extractCleanedHtml] Error:", error),
      {
        html: "",
        iframeSrcs: []
      }
    )
  }
}
