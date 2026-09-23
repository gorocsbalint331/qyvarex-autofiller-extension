// @ts-nocheck
/**
 * Resolve ATS target name from the current page hostname / URL signals.
 */

import { isEightfoldCareerHubJobPath } from "../sites/eightfold/careerhub/route.js"
import { PINPOINTHQ_CAREERS_CDN } from "../../core/supported-sites.ts"
import { isDomainMatch, isDomainOrEmbedded } from "../../core/utils.ts"

const HIRINGTHING_DOMAINS = [
  "hiringthing.com",
  "oasisrecruit.com",
  "elevate-ats.com",
  "prismhr-hire.com",
  "gnahiring.com",
  "rippling-ats.com",
]

export function getTargetName() {
  const url = new URL(window.location.href)
  const hostname = url.hostname
  const isHiringthingJobPath = /^\/job\/\d+\//.test(url.pathname)

  if (isDomainMatch(hostname, "hubspot.com")) return "hubspot"
  if (isDomainMatch(hostname, "x.company")) return "xcompany"
  if (isDomainMatch(hostname, "careers.walmart.com")) return "walmart"
  if (isDomainMatch(hostname, "greenhouse.io")) return "greenhouse"
  if (
    isDomainMatch(hostname, "myworkdayjobs.com") ||
    isDomainMatch(hostname, "myworkdayjobs-impl.com") ||
    isDomainMatch(hostname, "myworkdaysite.com") ||
    isDomainMatch(hostname, "myworkday.com")
  ) {
    return "myworkday"
  }
  if (isDomainMatch(hostname, "lever.co")) return "lever"
  if (isDomainMatch(hostname, "careers.kula.ai")) return "kula"
  if (isDomainMatch(hostname, "ashbyhq.com") || url.searchParams.get("ashby_jid")) {
    return "ashbyhq"
  }
  if (isDomainMatch(hostname, "jobvite.com") || url.searchParams.get("jobviteiframe")) {
    return "jobvite"
  }
  if (isDomainMatch(hostname, "icims.com")) return "icims"
  if (isDomainMatch(hostname, "breezy.hr")) return "breezy"
  if (
    isDomainMatch(hostname, "jobs.bswhealth.com") ||
    isDomainMatch(hostname, "careers.uvahealth.org") ||
    isDomainMatch(hostname, "careers.dukehealth.org") ||
    isDomainMatch(hostname, "www.jobs.abbott") ||
    isDomainMatch(hostname, "careers.aspendental.com") ||
    isDomainMatch(hostname, "cisco.com") ||
    isDomainMatch(hostname, "careers.adobe.com") ||
    isDomainMatch(hostname, "careers.fivebelow.com") ||
    isDomainMatch(hostname, "careers.fourseasons.com") ||
    isDomainMatch(hostname, "careers.kbr.com") ||
    isDomainMatch(hostname, "jobs.kuehne-nagel.com") ||
    isDomainMatch(hostname, "careers.mastercard.com") ||
    isDomainMatch(hostname, "careers.mcafee.com") ||
    isDomainMatch(hostname, "jobs-cee.pwc.com") ||
    isDomainMatch(hostname, "careers.roche.com") ||
    isDomainMatch(hostname, "www.vcacareers.com") ||
    isDomainMatch(hostname, "careers.wasteconnections.com") ||
    isDomainOrEmbedded(hostname, "phenompeople.com", "APPLY_form_renderer.js")
  ) {
    return "phenom"
  }
  if (isDomainMatch(hostname, "tesla.com")) return "tesla"
  if (isDomainMatch(hostname, "dover.com")) return "dover"
  if (
    isDomainMatch(hostname, "zohorecruit.com") ||
    isDomainMatch(hostname, "zohorecruit.ca") ||
    isDomainMatch(hostname, "zohorecruit.eu")
  ) {
    return isDomainMatch(hostname, "dealeralchemist.zohorecruit.com") ||
      isDomainMatch(hostname, "dealeralchemist.zohorecruit.ca")
      ? "zohorecruitV2"
      : "zohorecruit"
  }
  if (
    isDomainMatch(hostname, "amazon.jobs") ||
    isDomainMatch(hostname, "amazonuniversity.jobs")
  ) {
    return "amazon"
  }
  if (
    isDomainMatch(hostname, "workable.com") ||
    isDomainMatch(hostname, "careers.arbor-education.com")
  ) {
    return "workable"
  }
  if (
    isDomainMatch(hostname, "jobs.gohire.io") ||
    isDomainMatch(hostname, "app.gohire.io")
  ) {
    return "gohire"
  }
  if (
    isDomainMatch(hostname, "oraclecloud.com") ||
    isDomainMatch(hostname, "careers.oracle.com") ||
    isDomainMatch(hostname, "oraclegovcloud.com")
  ) {
    return "oraclecloud"
  }
  if (
    isDomainMatch(hostname, "ultipro.com") ||
    isDomainMatch(hostname, "ultipro.ca") ||
    isDomainMatch(hostname, "rec.pro.ukg.net")
  ) {
    return "ultipro"
  }
  if (isDomainMatch(hostname, "bamboohr.com")) return "bamboohr"
  if (isDomainMatch(hostname, "brassring.com")) return "brassring"
  if (isDomainMatch(hostname, "workforcenow.adp.com")) return "adpWorkforceNow"
  if (isDomainMatch(hostname, "myjobs.adp.com")) return "adpMyJobs"
  if (isDomainMatch(hostname, "recruiting.adp.com")) return "adpRecruiting"
  if (
    isHiringthingJobPath &&
    HIRINGTHING_DOMAINS.some((domain) => isDomainMatch(hostname, domain))
  ) {
    return "hiringthing"
  }
  if (
    isDomainMatch(hostname, "rippling.com") ||
    isDomainMatch(hostname, "rippling-ats.com")
  ) {
    return "rippling"
  }
  if (isDomainMatch(hostname, "dayforcehcm.com")) return "dayforce"
  if (
    isDomainMatch(hostname, "taleo.net") ||
    isDomainMatch(hostname, "talentacquisition.3ds.com") ||
    isDomainMatch(hostname, "burnsmcd.com")
  ) {
    return "taleo"
  }
  if (isDomainMatch(hostname, "jobs.bytedance.com")) return "bytedance"
  if (isDomainMatch(hostname, "eightfold.ai")) {
    if (url.pathname === "/careerhub" || url.pathname.startsWith("/careerhub/")) {
      if (
        url.pathname.replace(/\/+$/, "") === "/careerhub/explore/jobs/apply"
      ) {
        return url.searchParams.get("pid") ? "eightfold" : null
      }
      return isEightfoldCareerHubJobPath(url.pathname)
        ? "eightfoldCareerHub"
        : null
    }
    return "eightfold"
  }
  if (isDomainOrEmbedded(hostname, "eightfold.ai", "eightfold")) return "eightfold"
  if (isDomainMatch(hostname, "applytojob.com")) return "jazzhr"
  if (isDomainMatch(hostname, "freshteam.com")) return "freshteam"
  if (isDomainOrEmbedded(hostname, "pinpointhq.com", PINPOINTHQ_CAREERS_CDN)) {
    return "pinpointhq"
  }
  if (isDomainMatch(hostname, "gem.com")) return "gem"
  if (isDomainOrEmbedded(hostname, "recruitee.com", "recruitee")) return "recruitee"
  if (isDomainOrEmbedded(hostname, "recruiterflow.com")) return "recruiterflow"
  if (
    isDomainMatch(hostname, "smartrecruiters.com") ||
    isDomainMatch(hostname, "smartr.me")
  ) {
    return "smartrecruiters"
  }
  if (
    isDomainMatch(hostname, "paycomonline.net") ||
    isDomainMatch(hostname, "paycomonline.com")
  ) {
    return "paycomonline"
  }
  if (
    isDomainMatch(hostname, "lifeattiktok.com") ||
    isDomainMatch(hostname, "tiktokusds.com")
  ) {
    return "tiktok"
  }
  if (isDomainMatch(hostname, "hire.trakstar.com")) return "trakstar"
  if (isDomainMatch(hostname, "jobscore.com")) return "jobscore"
  if (isDomainMatch(hostname, "paylocity.com")) return "paylocity"
  if (
    isDomainMatch(hostname, "teamtailor.com") ||
    isDomainOrEmbedded(hostname, "teamtailor.com", "teamtailor-cdn.com")
  ) {
    return "teamtailor"
  }
  if (isDomainMatch(hostname, "catsone.com")) return "catsone"
  if (
    isDomainMatch(hostname, "careers.arcb.com") ||
    isDomainMatch(hostname, "apply.deloitte.com") ||
    isDomainMatch(hostname, "careers.cbre.com") ||
    isDomainMatch(hostname, "careers.mantech.com") ||
    isDomainMatch(hostname, "careers.ibm.com") ||
    isDomainMatch(hostname, "careers.tql.com") ||
    isDomainOrEmbedded(hostname, "avature.net", "avature")
  ) {
    return "avature"
  }
  if (isDomainMatch(hostname, "trinethire.com")) return "trinethire"
  if (isDomainMatch(hostname, "metacareers.com")) return "metacareers"
  if (isDomainMatch(hostname, "google.com")) return "google"
  if (isDomainMatch(hostname, "jobs.gusto.com")) return "gusto"
  if (isDomainMatch(hostname, "uber.com")) return "uber"
  if (isDomainMatch(hostname, "www.okta.com")) return "okta"
  if (
    isDomainMatch(hostname, "comeet.com") ||
    isDomainMatch(hostname, "comeet.co")
  ) {
    return "comeet"
  }
  if (isDomainMatch(hostname, "www.ycombinator.com")) return "ycombinator"
  if (isDomainMatch(hostname, "careers-page.com")) return "careerspage"
  if (
    isDomainMatch(hostname, "careerplug.com") ||
    isDomainMatch(hostname, "sfagentjobs.com") ||
    isDomainMatch(hostname, "sfagentcareers.com") ||
    isDomainMatch(hostname, "apscareerportal.com")
  ) {
    return "careerplug"
  }
  if (isDomainMatch(hostname, "careers.withwaymo.com")) return "careerswithwaymo"
  if (isDomainMatch(hostname, "apple.com")) return "apple"
  if (isDomainMatch(hostname, "polymer.co")) return "polymer"
  if (isDomainMatch(hostname, "ripplehire.com")) return "ripplehire"
  if (
    isDomainMatch(hostname, "personio.de") ||
    isDomainMatch(hostname, "personio.com")
  ) {
    return "personio"
  }
  if (
    isDomainMatch(hostname, "successfactors.com") ||
    isDomainMatch(hostname, "successfactors.eu") ||
    isDomainMatch(hostname, "sapsf.com")
  ) {
    return "successfactors"
  }
  if (isDomainMatch(hostname, "clearcompany.com")) return "hrmdirect"
  if (isDomainMatch(hostname, "intuit-quiz.app.intuit.com")) return "intuit"
  if (isDomainMatch(hostname, "isolvedhire.com")) return "isolved"
  if (isDomainMatch(hostname, "careers.jacobs.com")) return "jacobs"
  if (isDomainMatch(hostname, "careers.toasttab.com")) return "careerstoasttab"
  if (isDomainMatch(hostname, "jobdiva.com")) return "jobdiva"

  return url.searchParams.get("gh_src") || url.searchParams.get("gh_jid")
    ? "greenhouse"
    : null
}
