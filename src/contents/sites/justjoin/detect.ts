/** justjoin.it and rocketjobs.com job-offer pages. */

export function isJustJoinOfferPage(url: URL = new URL(location.href)) {
  return (
    /(^|\.)(?:justjoin\.it|rocketjobs\.com)$/i.test(url.hostname) &&
    /\/job-offer(?:\/|$)/i.test(url.pathname)
  )
}
