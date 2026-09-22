/**
 * Parcel module id: kkscK
 * Resolved path: src/contents/crawler/target.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/eightfold/careerhub/route -> e4STq  =>  src/contents/sites/eightfold/careerhub/route.js
 *   ~core/supported-sites -> lpxpl  =>  src/core/supported-sites.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getTargetName", () => s);
var o = e("~contents/sites/eightfold/careerhub/route"),
  i = e("~core/supported-sites"),
  a = e("~core/utils");
let l = ["hiringthing.com", "oasisrecruit.com", "elevate-ats.com", "prismhr-hire.com",
  "gnahiring.com", "rippling-ats.com"
];

function s() {
  let e = new URL(window.location.href),
    t = e.hostname,
    r = /^\/job\/\d+\//.test(e.pathname);
  if ((0, a.isDomainMatch)(t, "hubspot.com")) return "hubspot";
  if ((0, a.isDomainMatch)(t, "x.company")) return "xcompany";
  if ((0, a.isDomainMatch)(t, "careers.walmart.com")) return "walmart";
  if ((0, a.isDomainMatch)(t, "greenhouse.io")) return "greenhouse";
  if ((0, a.isDomainMatch)(t, "myworkdayjobs.com") || (0, a.isDomainMatch)(t,
      "myworkdayjobs-impl.com") || (0, a.isDomainMatch)(t, "myworkdaysite.com") || (0, a
      .isDomainMatch)(t, "myworkday.com")) return "myworkday";
  if ((0, a.isDomainMatch)(t, "lever.co")) return "lever";
  if ((0, a.isDomainMatch)(t, "careers.kula.ai")) return "kula";
  else if ((0, a.isDomainMatch)(t, "ashbyhq.com") || e.searchParams.get("ashby_jid"))
  return "ashbyhq";
  else if ((0, a.isDomainMatch)(t, "jobvite.com") || e.searchParams.get("jobviteiframe"))
  return "jobvite";
  else if ((0, a.isDomainMatch)(t, "icims.com")) return "icims";
  else if ((0, a.isDomainMatch)(t, "breezy.hr")) return "breezy";
  else if ((0, a.isDomainMatch)(t, "jobs.bswhealth.com") || (0, a.isDomainMatch)(t,
      "careers.uvahealth.org") || (0, a.isDomainMatch)(t, "careers.dukehealth.org") || (0, a
      .isDomainMatch)(t, "www.jobs.abbott") || (0, a.isDomainMatch)(t, "careers.aspendental.com") ||
    (0, a.isDomainMatch)(t, "cisco.com") || (0, a.isDomainMatch)(t, "careers.adobe.com") || (0, a
      .isDomainMatch)(t, "careers.fivebelow.com") || (0, a.isDomainMatch)(t,
      "careers.fourseasons.com") || (0, a.isDomainMatch)(t, "careers.kbr.com") || (0, a
      .isDomainMatch)(t, "jobs.kuehne-nagel.com") || (0, a.isDomainMatch)(t,
      "careers.mastercard.com") || (0, a.isDomainMatch)(t, "careers.mcafee.com") || (0, a
      .isDomainMatch)(t, "jobs-cee.pwc.com") || (0, a.isDomainMatch)(t, "careers.roche.com") || (0,
      a.isDomainMatch)(t, "www.vcacareers.com") || (0, a.isDomainMatch)(t,
      "careers.wasteconnections.com") || (0, a.isDomainOrEmbedded)(t, "phenompeople.com",
      "APPLY_form_renderer.js")) return "phenom";
  else if ((0, a.isDomainMatch)(t, "tesla.com")) return "tesla";
  else if ((0, a.isDomainMatch)(t, "dover.com")) return "dover";
  else if ((0, a.isDomainMatch)(t, "zohorecruit.com") || (0, a.isDomainMatch)(t,
    "zohorecruit.ca") || (0, a.isDomainMatch)(t, "zohorecruit.eu")) return (0, a.isDomainMatch)(t,
    "dealeralchemist.zohorecruit.com") || (0, a.isDomainMatch)(t,
    "dealeralchemist.zohorecruit.ca") ? "zohorecruitV2" : "zohorecruit";
  else if ((0, a.isDomainMatch)(t, "amazon.jobs") || (0, a.isDomainMatch)(t,
      "amazonuniversity.jobs")) return "amazon";
  else if ((0, a.isDomainMatch)(t, "workable.com") || (0, a.isDomainMatch)(t,
      "careers.arbor-education.com")) return "workable";
  else if ((0, a.isDomainMatch)(t, "jobs.gohire.io") || (0, a.isDomainMatch)(t, "app.gohire.io"))
    return "gohire";
  else if ((0, a.isDomainMatch)(t, "oraclecloud.com") || (0, a.isDomainMatch)(t,
      "careers.oracle.com") || (0, a.isDomainMatch)(t, "oraclegovcloud.com")) return "oraclecloud";
  else if ((0, a.isDomainMatch)(t, "ultipro.com") || (0, a.isDomainMatch)(t, "ultipro.ca") || (0, a
      .isDomainMatch)(t, "rec.pro.ukg.net")) return "ultipro";
  else if ((0, a.isDomainMatch)(t, "bamboohr.com")) return "bamboohr";
  else if ((0, a.isDomainMatch)(t, "brassring.com")) return "brassring";
  else if ((0, a.isDomainMatch)(t, "workforcenow.adp.com")) return "adpWorkforceNow";
  else if ((0, a.isDomainMatch)(t, "myjobs.adp.com")) return "adpMyJobs";
  else if ((0, a.isDomainMatch)(t, "recruiting.adp.com")) return "adpRecruiting";
  else if (r && l.some(e => (0, a.isDomainMatch)(t, e))) return "hiringthing";
  else if ((0, a.isDomainMatch)(t, "rippling.com") || (0, a.isDomainMatch)(t, "rippling-ats.com"))
    return "rippling";
  else if ((0, a.isDomainMatch)(t, "dayforcehcm.com")) return "dayforce";
  else if ((0, a.isDomainMatch)(t, "taleo.net") || (0, a.isDomainMatch)(t,
      "talentacquisition.3ds.com") || (0, a.isDomainMatch)(t, "burnsmcd.com")) return "taleo";
  else if ((0, a.isDomainMatch)(t, "jobs.bytedance.com")) return "bytedance";
  else if ((0, a.isDomainMatch)(t, "eightfold.ai")) return "/careerhub" === e.pathname || e.pathname
    .startsWith("/careerhub/") ? "/careerhub/explore/jobs/apply" === e.pathname.replace(/\/+$/,
      "") ? e.searchParams.get("pid") ? "eightfold" : null : (0, o.isEightfoldCareerHubJobPath)(e
      .pathname) ? "eightfoldCareerHub" : null : "eightfold";
  else if ((0, a.isDomainOrEmbedded)(t, "eightfold.ai", "eightfold")) return "eightfold";
  else if ((0, a.isDomainMatch)(t, "applytojob.com")) return "jazzhr";
  else if ((0, a.isDomainMatch)(t, "freshteam.com")) return "freshteam";
  else if ((0, a.isDomainOrEmbedded)(t, "pinpointhq.com", i.PINPOINTHQ_CAREERS_CDN))
  return "pinpointhq";
  else if ((0, a.isDomainMatch)(t, "gem.com")) return "gem";
  else if ((0, a.isDomainOrEmbedded)(t, "recruitee.com", "recruitee")) return "recruitee";
  else if ((0, a.isDomainOrEmbedded)(t, "recruiterflow.com")) return "recruiterflow";
  else if ((0, a.isDomainMatch)(t, "smartrecruiters.com") || (0, a.isDomainMatch)(t, "smartr.me"))
    return "smartrecruiters";
  else if ((0, a.isDomainMatch)(t, "paycomonline.net") || (0, a.isDomainMatch)(t,
      "paycomonline.com")) return "paycomonline";
  else if ((0, a.isDomainMatch)(t, "lifeattiktok.com") || (0, a.isDomainMatch)(t, "tiktokusds.com"))
    return "tiktok";
  else if ((0, a.isDomainMatch)(t, "hire.trakstar.com")) return "trakstar";
  else if ((0, a.isDomainMatch)(t, "jobscore.com")) return "jobscore";
  else if ((0, a.isDomainMatch)(t, "paylocity.com")) return "paylocity";
  else if ((0, a.isDomainMatch)(t, "teamtailor.com") || (0, a.isDomainOrEmbedded)(t,
      "teamtailor.com", "teamtailor-cdn.com")) return "teamtailor";
  else if ((0, a.isDomainMatch)(t, "catsone.com")) return "catsone";
  else if ((0, a.isDomainMatch)(t, "careers.arcb.com") || (0, a.isDomainMatch)(t,
      "apply.deloitte.com") || (0, a.isDomainMatch)(t, "careers.cbre.com") || (0, a.isDomainMatch)(
      t, "careers.mantech.com") || (0, a.isDomainMatch)(t, "careers.ibm.com") || (0, a
      .isDomainMatch)(t, "careers.tql.com") || (0, a.isDomainOrEmbedded)(t, "avature.net",
      "avature")) return "avature";
  else if ((0, a.isDomainMatch)(t, "trinethire.com")) return "trinethire";
  else if ((0, a.isDomainMatch)(t, "metacareers.com")) return "metacareers";
  else if ((0, a.isDomainMatch)(t, "google.com")) return "google";
  else if ((0, a.isDomainMatch)(t, "jobs.gusto.com")) return "gusto";
  else if ((0, a.isDomainMatch)(t, "uber.com")) return "uber";
  else if ((0, a.isDomainMatch)(t, "www.okta.com")) return "okta";
  else if ((0, a.isDomainMatch)(t, "comeet.com") || (0, a.isDomainMatch)(t, "comeet.co"))
  return "comeet";
  else if ((0, a.isDomainMatch)(t, "www.ycombinator.com")) return "ycombinator";
  else if ((0, a.isDomainMatch)(t, "careers-page.com")) return "careerspage";
  else if ((0, a.isDomainMatch)(t, "careerplug.com") || (0, a.isDomainMatch)(t,
    "sfagentjobs.com") || (0, a.isDomainMatch)(t, "sfagentcareers.com") || (0, a.isDomainMatch)(t,
      "apscareerportal.com")) return "careerplug";
  else if ((0, a.isDomainMatch)(t, "careers.withwaymo.com")) return "careerswithwaymo";
  else if ((0, a.isDomainMatch)(t, "apple.com")) return "apple";
  else if ((0, a.isDomainMatch)(t, "polymer.co")) return "polymer";
  else if ((0, a.isDomainMatch)(t, "ripplehire.com")) return "ripplehire";
  else if ((0, a.isDomainMatch)(t, "personio.de") || (0, a.isDomainMatch)(t, "personio.com"))
  return "personio";
  else if ((0, a.isDomainMatch)(t, "successfactors.com") || (0, a.isDomainMatch)(t,
      "successfactors.eu") || (0, a.isDomainMatch)(t, "sapsf.com")) return "successfactors";
  else if ((0, a.isDomainMatch)(t, "clearcompany.com")) return "hrmdirect";
  else if ((0, a.isDomainMatch)(t, "intuit-quiz.app.intuit.com")) return "intuit";
  else if ((0, a.isDomainMatch)(t, "isolvedhire.com")) return "isolved";
  else if ((0, a.isDomainMatch)(t, "careers.jacobs.com")) return "jacobs";
  else if ((0, a.isDomainMatch)(t, "careers.toasttab.com")) return "careerstoasttab";
  else if ((0, a.isDomainMatch)(t, "jobdiva.com")) return "jobdiva";
  return e.searchParams.get("gh_src") || e.searchParams.get("gh_jid") ? "greenhouse" : null
}

