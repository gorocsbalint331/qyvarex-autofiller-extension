/** Traffit public application forms, for example bluebinary.traffit.com/public/form/. */

export function isTraffitFormPage(url: URL = new URL(location.href)) {
  return (
    /(^|\.)traffit\.com$/i.test(url.hostname) &&
    /\/public\/form(?:\/|$)/i.test(url.pathname)
  )
}
