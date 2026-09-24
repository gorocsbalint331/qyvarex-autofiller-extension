const SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">' +
  '<rect width="80" height="80" rx="8" fill="#F2F4F7"/>' +
  '<path d="M26 56V30l12-6v32M38 56V34h16v22M22 56h36M31 34h2M31 40h2M31 46h2M44 40h4M44 46h4" ' +
  'fill="none" stroke="#A3ACBD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
  "</svg>"

/** Inline so it renders without a network request (the hub serves no Jobright image assets). */
export const COMPANY_FALLBACK_LOGO = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(SVG)}`
