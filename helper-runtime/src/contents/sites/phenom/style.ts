// @ts-nocheck
/**
 * Phenom — apply-page layout CSS injection.
 */

const PHENOM_APPLY_PAGE_LAYOUT_FIX_STYLE_ID =
  "jobright-phenom-apply-page-layout-fix"

const CONTAINER_WIDTH_FIX_CSS = `
.apply-page .container {
width: auto !important;
}
`.trim()

const FORM_WIDTH_FIX_CSS = `
.apply-page .phenom-form-container,
.apply-page .form-wrapper.widget-container,
.apply-page form.rjsf {
max-width: 100% !important;
}
.apply-page .form-wrapper.widget-container,
.apply-page form.rjsf {
width: 100% !important;
box-sizing: border-box;
}
.apply-page .form-wrapper.widget-container {
margin-right: 0 !important;
}
`.trim()

const PHENOM_APPLY_PAGE_LAYOUT_FIX_CSS = `
${CONTAINER_WIDTH_FIX_CSS}
${FORM_WIDTH_FIX_CSS}
`.trim()

function getPhenomApplyPageLayoutFixCss(hostname) {
  return hostname === "careers.wexinc.com"
    ? FORM_WIDTH_FIX_CSS
    : PHENOM_APPLY_PAGE_LAYOUT_FIX_CSS
}

function injectPhenomApplyPageLayoutFix(doc = document) {
  const existing = doc.getElementById(PHENOM_APPLY_PAGE_LAYOUT_FIX_STYLE_ID)
  if (existing) return existing
  const style = doc.createElement("style")
  style.id = PHENOM_APPLY_PAGE_LAYOUT_FIX_STYLE_ID
  style.textContent = getPhenomApplyPageLayoutFixCss(
    doc.location?.hostname ?? "",
  )
  doc.head.appendChild(style)
  return style
}

export {
  PHENOM_APPLY_PAGE_LAYOUT_FIX_CSS,
  PHENOM_APPLY_PAGE_LAYOUT_FIX_STYLE_ID,
  getPhenomApplyPageLayoutFixCss,
  injectPhenomApplyPageLayoutFix,
}
