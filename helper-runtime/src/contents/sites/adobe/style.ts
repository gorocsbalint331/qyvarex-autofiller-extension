// @ts-nocheck
/**
 * Adobe Careers layout CSS — widen the apply-page container so fields fit.
 */

export const ADOBE_APPLY_PAGE_LAYOUT_FIX_STYLE_ID =
  "jobright-adobe-apply-page-layout-fix"

export const ADOBE_APPLY_PAGE_LAYOUT_FIX_CSS = `
.apply-page .container {
  width: auto !important;
}
`.trim()

export function injectAdobeApplyPageLayoutFix(doc = document) {
  const existing = doc.getElementById(ADOBE_APPLY_PAGE_LAYOUT_FIX_STYLE_ID)
  if (existing) return existing

  const style = doc.createElement("style")
  style.id = ADOBE_APPLY_PAGE_LAYOUT_FIX_STYLE_ID
  style.textContent = ADOBE_APPLY_PAGE_LAYOUT_FIX_CSS
  doc.head.appendChild(style)
  return style
}
