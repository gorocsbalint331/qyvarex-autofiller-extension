/** TestedRecruits job posting pages, including app.testedrecruits.com/posting/:id. */

export function isTestedRecruitsPosting(url: URL = new URL(location.href)) {
  return (
    /(^|\.)testedrecruits\.com$/i.test(url.hostname) &&
    /\/posting(?:\/|$)/i.test(url.pathname)
  )
}
