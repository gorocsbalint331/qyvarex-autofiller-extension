/**
 * Job pages that are not a known ATS still get the default filler.
 * LinkedIn and the team hub keep their own flows.
 */

import { isJustJoinOfferPage } from "../justjoin/detect.ts"
import { isTestedRecruitsPosting } from "../testedrecruits/detect.ts"
import { isTraffitFormPage } from "../traffit/detect.ts"

const EXCLUDED_HOSTS = [
  "linkedin.com",
  "hub.qyvarex.com",
  "jobright-team-site.vercel.app",
  "localhost",
  "127.0.0.1",
]

const JOB_HOST =
  /(?:^|\.)(?:jobs?|careers?|apply|talent|recruiting)\./i

const JOB_PATH =
  /\/(?:job-offer|jobs?|careers?|apply|application|openings|vacancies|positions)(?:\/|$)/i

const POST_APPLY =
  /\/(?:confirmation|applyConfirmation|success(?:ful)?|thank[_-]?you|thanks|SuccessfulRegistration)(?=\/|$)/i

function hostIsExcluded(hostname: string) {
  const host = hostname.toLowerCase()
  return EXCLUDED_HOSTS.some(
    (domain) => host === domain || host.endsWith(`.${domain}`),
  )
}

export function pageLooksLikeNewJobSite(url: URL) {
  if (POST_APPLY.test(url.pathname)) return false
  if (hostIsExcluded(url.hostname)) return false
  if (JOB_HOST.test(url.hostname)) return true
  if (isJustJoinOfferPage(url) || isTraffitFormPage(url) || isTestedRecruitsPosting(url)) {
    return true
  }
  return JOB_PATH.test(url.pathname)
}
