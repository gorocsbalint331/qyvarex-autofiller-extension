// @ts-nocheck
/**
 * Rewrite relative url(...) values in CSS so they resolve against a base URL.
 */

const URL_PATTERN = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/g
const ABSOLUTE_OR_SPECIAL =
  /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i

export const resolveCssAssetUrls = (cssText, baseUrl) =>
  cssText.replace(URL_PATTERN, (match, doubleQuoted, singleQuoted, unquoted) => {
    const raw = (doubleQuoted ?? singleQuoted ?? unquoted ?? "").trim()
    if (!raw || ABSOLUTE_OR_SPECIAL.test(raw) || raw.startsWith("var(")) {
      return match
    }
    try {
      return `url("${new URL(raw, baseUrl).href}")`
    } catch {
      return match
    }
  })
