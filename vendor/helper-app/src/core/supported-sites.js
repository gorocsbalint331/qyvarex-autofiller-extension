/**
 * Parcel module id: lpxpl
 * Resolved path: src/core/supported-sites.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @webext-core/match-patterns -> cAu0r  =>  @webext-core/match-patterns.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PINPOINTHQ_CAREERS_CDN", () => i), n.export(r,
  "EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE", () => a), n.export(r,
  "isEightfoldCareerHubJobPath", () => s), n.export(r, "SUPPORT_DOMAINS", () => m), n.export(r,
  "SUPPORT_PATTERNS", () => h), n.export(r, "SUPPORT_HOSTS", () => g), n.export(r,
  "CONSTRAINED_SITE_RULES", () => b), n.export(r, "IFRAME_CHECK_PATTERN", () => y), n.export(r,
  "PAGE_SOURCE_ATS_LIST", () => v), n.export(r, "IFRAME_ONLY_DOMAINS", () => w), n.export(r,
  "QUERY_PARAM_LIST", () => S), n.export(r, "SITE_REGISTRY", () => d);
var o = e("@webext-core/match-patterns");
let i = "d2n5ied94mazop.cloudfront.net",
  a = "^/careerhub/explore/jobs/(?!apply/?$)[^/?#]+/?$",
  l = new RegExp(a);

function s(e) {
  return l.test(e)
}
let u = "^/careerhub/explore/jobs/(?!apply/?(?:[?#]|$))[^/?#]+/?(?:[?#].*)?$",
  c = "^/careerhub/explore/jobs/apply/?\\?(?=[^#]*\\bpid=[^&#]+)[^#]*(?:#.*)?$",
  d = {
    greenhouse: {
      domains: ["greenhouse.io"],
      iframeDomains: ["greenhouse.io"],
      queryParams: ["gh_jid", "gh_src"],
      pathRegex: "^/(?:[^/]+/jobs/\\d+|embed/job_app)"
    },
    xcompany: {
      patterns: ["*://x.company/*"],
      pathRegex: "^/careers/[^/]+/?$"
    },
    walmart: {
      patterns: ["*://careers.walmart.com/*"],
      pathRegex: "^/(us/en/(home|jobs?/[^/]+|apply(?:/.*)?|application(?:/.*)?)|content/careers/us/en/.*)$"
    },
    workday: {
      domains: ["myworkdayjobs.com", "myworkdayjobs-impl.com", "myworkdaysite.com", "myworkday.com"]
    },
    kula: {
      domains: ["careers.kula.ai"],
      pathRegex: "^/[^/]+/[^/]+"
    },
    icims: {
      domains: ["icims.com"],
      iframeDomains: ["icims.com"],
      iframeOnly: !0,
      pathRegex: "^/jobs/\\d+(?:/|$)"
    },
    dover: {
      domains: ["dover.com"]
    },
    adobe: {
      domains: ["careers.adobe.com"],
      pathRegex: "^/[^/]+/[^/]+/apply"
    },
    zohorecruit: {
      domains: ["zohorecruit.com", "zohorecruit.ca", "zohorecruit.eu"],
      iframeDomains: ["zohorecruit.com", "zohorecruit.ca", "zohorecruit.eu"],
      pathRegex: "^/jobs/Careers/.+"
    },
    gem: {
      domains: ["jobs.gem.com"],
      pathRegex: "^/[\\w-]+/[\\w-]+/?$"
    },
    gusto: {
      domains: ["jobs.gusto.com"],
      pathRegex: "^/postings/[^/]+(?:/applicants/new(?:/.*)?)?/?$"
    },
    hiringthing: {
      domains: ["hiringthing.com", "oasisrecruit.com", "elevate-ats.com", "prismhr-hire.com",
        "gnahiring.com", "rippling-ats.com"
      ],
      pathRegex: "^/job/\\d+/"
    },
    hubspot: {
      patterns: ["*://www.hubspot.com/careers/jobs/*"]
    },
    paycomonline: {
      domains: ["paycomonline.com", "paycomonline.net"],
      urlRegex: "^/v4/ats/web\\.php/portal/[^/]+/(?:applications(?:[/?#].*)?|jobs/[^/?#]+(?:[?#].*)?)"
    },
    teamtailor: {
      domains: ["teamtailor.com", "careers.blueorange.digital", "careers.totalperform.com"],
      pageSourceKeyword: "teamtailor-cdn.com",
      pageSourceDomain: "teamtailor.com",
      pathRegex: "^/jobs/.+"
    },
    catsone: {
      domains: ["catsone.com"],
      pathRegex: "^/careers/[^/]+/jobs/[^/]+(?:/apply)?/?$"
    },
    metacareers: {
      domains: ["metacareers.com"],
      pathRegex: "^/profile/(create_application|job_details)/[^/]+"
    },
    ycombinator: {
      domains: ["www.ycombinator.com"]
    },
    ripplehire: {
      domains: ["ripplehire.com"]
    },
    personio: {
      domains: ["personio.de", "personio.com"],
      pathRegex: "^/job/[^/?#]+(?:/apply)?/?$"
    },
    careerspage: {
      domains: ["careers-page.com"]
    },
    careerplug: {
      domains: ["careerplug.com", "sfagentjobs.com", "sfagentcareers.com", "apscareerportal.com"],
      pathRegex: "^/jobs/\\d+/apps/new"
    },
    careerswithwaymo: {
      patterns: ["*://careers.withwaymo.com/jobs/*"],
      pathRegex: "^/jobs/(?!search(?:/|$))[^/]+"
    },
    successfactors: {
      domains: ["successfactors.eu", "successfactors.com", "sapsf.com"]
    },
    clearcompany: {
      domains: ["clearcompany.com"],
      patterns: ["*://*.hrmdirect.com/employment/job-opening.php*"]
    },
    ashby: {
      patterns: ["*://*.ashbyhq.com/*/*"],
      iframeDomains: ["jobs.ashbyhq.com", "ashby_jid"],
      queryParams: ["ashby_jid"],
      pathRegex: "^/[^/]+/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    },
    isolved: {
      domains: ["isolvedhire.com"],
      pathRegex: "^/(?:apply/|jobs/|iframe/mobile/|account/)"
    },
    jobdiva: {
      patterns: ["*://*.jobdiva.com/portal/*"]
    },
    intuit: {
      domains: ["intuit-quiz.app.intuit.com"],
      patterns: ["*://jobs.intuit.com/job/*",
        "*://intuit.avature.net/*/externalCareers/JobApplication*"
      ],
      iframeDomains: ["intuit-quiz.app.intuit.com"]
    },
    jacobs: {
      patterns: ["*://careers.jacobs.com/en_US/careers/*"],
      pathRegex: "^/en_US/careers/(JobDetail|Register|ApplicationForm|ApplicationReview)(?:/|$)"
    },
    smartrecruiters: {
      domains: ["smartr.me"],
      patterns: ["*://jobs.smartrecruiters.com/oneclick-ui/company/*",
        "*://jobs.smartrecruiters.com/*/*"
      ]
    },
    phenom: {
      pageSourceKeyword: "APPLY_form_renderer.js",
      pageSourceDomain: "phenompeople.com",
      patterns: ["*://jobs.bswhealth.com/*/apply*", "*://careers.uvahealth.org/*/apply*",
        "*://careers.dukehealth.org/*/apply*", "*://www.jobs.abbott/*/apply*",
        "*://careers.aspendental.com/*/apply*", "*://careers.fivebelow.com/*/apply*",
        "*://careers.fourseasons.com/*/apply*", "*://careers.kbr.com/*/apply*",
        "*://jobs.kuehne-nagel.com/*/apply*", "*://careers.mastercard.com/*/apply*",
        "*://careers.mcafee.com/*/apply*", "*://jobs-cee.pwc.com/*/apply*",
        "*://careers.roche.com/*/apply*", "*://www.vcacareers.com/*/apply*",
        "*://careers.wasteconnections.com/*/apply*"
      ]
    },
    cisco: {
      patterns: ["*://careers.cisco.com/*/apply*"]
    },
    tesla: {
      patterns: ["*://*.jobs.tesla.com/*", "*://*.tesla.com/careers/*"],
      pathRegex: "/apply"
    },
    amazon: {
      patterns: ["*://*.amazon.jobs/*"],
      pathRegex: "/jobs/[\\w-]+/apply"
    },
    amazonuniversity: {
      patterns: ["*://*.amazonuniversity.jobs/profile*"]
    },
    uber: {
      domains: ["uber.com"],
      pathRegex: "^/(?:(?:(?:[^/]+/){1,2})?careers/(?:apply(?:/|$)|list/[^/?#]+)|(?:[^/]+/)?jobs/[^/?#]+/?$)"
    },
    tiktok: {
      patterns: ["*://*.lifeattiktok.com/resume*", "*://*.tiktokusds.com/*/resume*",
        "*://*.tiktokusds.com/*/position/*/detail*"
      ]
    },
    bytedance: {
      patterns: ["*://*.jobs.bytedance.com/en/resume*", "*://jobs.bytedance.com/*/*/*/detail*",
        "*://jobs.bytedance.com/*/*/*/apply*", "*://jobs.bytedance.com/*/*/applied*",
        "*://joinbytedance.com/search/*"
      ]
    },
    google: {
      patterns: ["*://google.com/about/careers/*", "*://*.google.com/about/careers/*"],
      pathRegex: "^/about/careers/applications(?:/(?:u/\\d+/)?apply(?:/|$)|/jobs/results/[^/?#]+)",
      urlRegex: "^/about/careers/applications/jobs/results(?:\\?[^#]*)?#.*[?&#]jid=[^&#]+"
    },
    lever: {
      patterns: ["*://jobs.lever.co/*/*", "*://jobs.eu.lever.co/*/*"],
      iframeDomains: ["lever.co"],
      queryParams: ["LeverAppId"],
      pathRegex: "^/[^/]+/[^/]+(?:/apply)?/?$"
    },
    jobvite: {
      patterns: ["*://jobs.jobvite.com/*/job/*", "*://jobs.jobvite.com/*/apply*"],
      iframeDomains: ["jobs.jobvite.com"],
      queryParams: ["jobviteiframe"]
    },
    breezy: {
      patterns: ["*://*.breezy.hr/p/*", "*://*.breezy.hr/*/apply*"]
    },
    workable: {
      domains: ["careers.arbor-education.com"],
      patterns: ["*://apply.workable.com/*", "*://jobs.workable.com/*"],
      iframeDomains: ["workable.com"],
      queryParams: ["selectedJobId"],
      pathRegex: "^/(?:[^/]+/j/[^/]+(?:/apply)?/?$|(?:[a-z]{2}/)?(?:view|company)/[\\w-]+)"
    },
    gohire: {
      patterns: ["*://jobs.gohire.io/*/*"],
      iframeDomains: ["app.gohire.io/widget/"],
      pathRegex: "^/[^/]+/.+-\\d+/?$"
    },
    bamboohr: {
      patterns: ["*://*.bamboohr.com/jobs*", "*://*.bamboohr.com/careers*"],
      iframeDomains: ["bamboohr.com"],
      pathRegex: "^/(?:jobs|careers/[\\w-]*\\d)"
    },
    brassring: {
      patterns: ["*://*.brassring.com/TGnewUI/*"],
      iframeDomains: ["brassring.com"],
      urlRegex: "#(?:Applypage|jobDetails=)"
    },
    adp: {
      domains: ["workforcenow.adp.com"],
      patterns: ["*://recruiting.adp.com/srccar/public/*", "*://myjobs.adp.com/*/cx/*"]
    },
    oraclecloud: {
      patterns: ["*://*.oraclecloud.com/*/CandidateExperience/*/sites/*/job/*",
        "*://*.oraclecloud.com/*/CandidateExperience/*/sites/*/*/preview/*",
        "*://*/*/CandidateExperience/*/sites/*/job/*",
        "*://*/*/CandidateExperience/*/sites/*/*/preview/*",
        "*://*/*/sites/*/jobs/preview/*/apply/*"
      ],
      pathRegex: "(?:/CandidateExperience/.*/sites/[^/]+/job/[^/]+(?:/apply(?:/.*)?)?/?$|/apply)"
    },
    ultipro: {
      patterns: ["*://*.ultipro.com/*/JobBoard/*/OpportunityDetail*",
        "*://*.ultipro.com/*/JobBoard/*/OpportunityApply*",
        "*://*.ultipro.com/*/JobBoard/*/Account/Register*",
        "*://*.ultipro.ca/*/JobBoard/*/OpportunityDetail*",
        "*://*.ultipro.ca/*/JobBoard/*/OpportunityApply*",
        "*://*.ultipro.ca/*/JobBoard/*/Account/Register*",
        "*://*.rec.pro.ukg.net/*/JobBoard/*/OpportunityDetail*",
        "*://*.rec.pro.ukg.net/*/JobBoard/*/OpportunityApply*",
        "*://*.rec.pro.ukg.net/*/JobBoard/*/Account/Register*"
      ]
    },
    rippling: {
      patterns: ["*://*.rippling-ats.com/job/*/apply*", "*://*.rippling-ats.com/jobs/eop_survey/*"],
      iframeDomains: ["ats.rippling.com"]
    },
    ripplingHosted: {
      patterns: ["*://ats.rippling.com/*/jobs/*"],
      pathRegex: "^/[^/]+/jobs/[^/]+(?:/apply(?:/.*)?)?/?$"
    },
    dayforce: {
      domains: ["jobs.dayforcehcm.com"],
      pathRegex: "^/(?:[^/]+/)+jobs/[^/]+(?:/apply(?:/.*)?)?/?$"
    },
    dayforceIdentity: {
      patterns: ["https://dfid.dayforcehcm.com/globalidentity/account/*"],
      pathRegex: "^/globalidentity/account/(?:register|login)/?$"
    },
    taleo: {
      patterns: ["*://*.taleo.net/*/application.jss*", "*://*.taleo.net/*/flow.jsf*",
        "*://*.taleo.net/*/jobapply*", "*://*.taleo.net/*/ats/careers/*",
        "*://*.taleo.net/careersection/*/jobdetail.ftl*",
        "*://*.taleo.net/*/htmlResourceViewer.jss*", "*://*.burnsmcd.com/apply*",
        "*://*.burnsmcd.com/careersection/application.jss*",
        "*://*.burnsmcd.com/careersection/flow.jsf*",
        "*://*.burnsmcd.com/careersection/jobapply*",
        "*://*.burnsmcd.com/careersection/htmlResourceViewer.jss*",
        "*://talentacquisition.3ds.com/*/application.jss*",
        "*://talentacquisition.3ds.com/*/flow.jsf*", "*://talentacquisition.3ds.com/*/jobapply*",
        "*://talentacquisition.3ds.com/*/ats/careers/*",
        "*://talentacquisition.3ds.com/*/htmlResourceViewer.jss*"
      ]
    },
    eightfold: {
      patterns: ["*://*.eightfold.ai/careers*", "*://*.eightfold.ai/careerhub/*"],
      iframeDomains: ["eightfold.ai"],
      pageSourceKeyword: "eightfold",
      pageSourceDomain: "eightfold.ai",
      urlRegex: `(?:${u}|${c}|^/careers(?:/(?:job/[^/?#]+(?:/apply)?(?:[/?#]|$)|apply(?:[/?#]|$))|\\?(?=(?:pid=[^&#]+|[^#]*&pid=[^&#]+))[^#]*(?:#.*)?$))`
    },
    jazzhr: {
      patterns: ["*://*.applytojob.com/apply/*"]
    },
    trakstar: {
      patterns: ["*://*.hire.trakstar.com/jobs/*"],
      pathRegex: "^/jobs/[^/]+/?$"
    },
    freshteam: {
      patterns: ["*://*.freshteam.com/jobs/*"]
    },
    pinpointhq: {
      patterns: ["*://*.pinpointhq.com/*/postings/*", "*://*.pinpointhq.com/postings/*"],
      pageSourceKeyword: i,
      pageSourceDomain: "pinpointhq.com"
    },
    recruitee: {
      patterns: ["*://*.recruitee.com/*/*"],
      pageSourceKeyword: "recruitee",
      pageSourceDomain: "recruitee.com"
    },
    trinethire: {
      patterns: ["*://app.trinethire.com/companies/*/jobs/*"]
    },
    jobscore: {
      patterns: ["*://careers.jobscore.com/apply_flow/*",
        "*://careers.jobscore.com/careers/*/jobs/*"
      ],
      iframeDomains: ["jobscore.com"]
    },
    paylocity: {
      patterns: ["*://*.paylocity.com/recruiting/*", "*://*.paylocity.com/Recruiting/*"],
      iframeDomains: ["paylocity.com"],
      urlRegex: "^/[Rr]ecruiting/[Jj]obs/(?:[Aa]pply/|[Dd]etails/[^/?#]+(?:[/?#]|$))"
    },
    avature: {
      patterns: ["*://*.avature.net/*/ApplicationForm*", "*://*.avature.net/*/ApplicationMethods*",
        "*://*.avature.net/*/ApplicationQuestions*", "*://*.avature.net/*/ApplicationReview*",
        "*://*.avature.net/*/Register*", "*://*.avature.net/LinkedInApplicationForm*",
        "*://*.avature.net/*/LinkedInApplicationForm*", "*://*.avature.net/*/YourInformation*",
        "*://*.avature.net/campusApply*", "*://*.avature.net/*/GeneralInfo*",
        "*://*.avature.net/careers/JobDetail*", "*://*.avature.net/careers/JobDetail/*",
        "*://*.avature.net/*/careers/JobDetail/*", "*://*.avature.net/*/External/JobDetail*",
        "*://*.avature.net/careers/LocationAndProfile/*",
        "*://*.avature.net/*/careers/LocationAndProfile/*",
        "*://careers.arcb.com/careersmarketplace/ApplicationForm*",
        "*://careers.arcb.com/careersmarketplace/ApplicationMethods*",
        "*://careers.arcb.com/careersmarketplace/ApplicationQuestions*",
        "*://careers.arcb.com/careersmarketplace/ApplicationReview*",
        "*://careers.arcb.com/careersmarketplace/Register*",
        "*://careers.arcb.com/careersmarketplace/GeneralInfo*",
        "*://careers.arcb.com/careersmarketplace/JobDetail*",
        "*://careers.arcb.com/careersmarketplace/ApplicationDotKnockedOutWizard*",
        "*://apply.deloitte.com/*/careers/*", "*://apply.deloitte.com/*/External/*",
        "*://careers.cbre.com/*/careers/ApplicationForm*",
        "*://careers.cbre.com/*/careers/ApplicationMethods*",
        "*://careers.cbre.com/*/careers/ApplicationQuestions*",
        "*://careers.cbre.com/*/careers/ApplicationReview*",
        "*://careers.cbre.com/*/careers/Register*",
        "*://careers.cbre.com/*/careers/InviteToApply*",
        "*://careers.cbre.com/*/careers/GeneralInfo*",
        "*://careers.cbre.com/*/careers/JobDetail*", "*://careers.cbre.com/*/careers/JobDetail/*",
        "*://careers.cbre.com/*/careers/LocationAndProfile/*",
        "*://careers.cbre.com/*/External/JobDetail*",
        "*://careers.mantech.com/*/careers/ApplicationForm*",
        "*://careers.mantech.com/*/careers/ApplicationMethods*",
        "*://careers.mantech.com/*/careers/ApplicationQuestions*",
        "*://careers.mantech.com/*/careers/ApplicationReview*",
        "*://careers.mantech.com/*/careers/Register*",
        "*://careers.mantech.com/*/careers/InviteToApply*",
        "*://careers.mantech.com/*/careers/GeneralInfo*",
        "*://careers.mantech.com/*/careers/JobDetail*",
        "*://careers.mantech.com/*/careers/JobDetail/*",
        "*://careers.mantech.com/*/careers/LocationAndProfile/*",
        "*://careers.mantech.com/*/External/JobDetail*",
        "*://careers.ibm.com/*/careers/JobDetail*",
        "*://careers.ibm.com/*/careers/ApplicationMethods*",
        "*://careers.ibm.com/*/careers/JobApplication*",
        "*://careers.ibm.com/*/careers/ApplicationForm*",
        "*://careers.ibm.com/*/careers/ApplicationQuestions*",
        "*://careers.ibm.com/*/careers/ApplicationReview*",
        "*://careers.ibm.com/*/careers/Register*", "*://careers.ibm.com/*/careers/GeneralInfo*",
        "*://careers.ibm.com/*/careers/YourInformation*",
        "*://careers.tql.com/*/TQLexternalcareers/ApplicationForm*",
        "*://careers.tql.com/*/TQLexternalcareers/ApplicationMethods*",
        "*://careers.tql.com/*/TQLexternalcareers/ApplicationQuestions*",
        "*://careers.tql.com/*/TQLexternalcareers/ApplicationReview*",
        "*://careers.tql.com/*/TQLexternalcareers/Register*",
        "*://careers.tql.com/*/TQLexternalcareers/InviteToApply*",
        "*://careers.tql.com/*/TQLexternalcareers/GeneralInfo*",
        "*://careers.tql.com/*/TQLexternalcareers/JobDetail*",
        "*://careers.tql.com/*/TQLexternalcareers/JobDetail/*",
        "*://careers.tql.com/*/TQLexternalcareers/LocationAndProfile/*",
        "*://careers.tql.com/*/External/JobDetail*"
      ],
      pageSourceKeyword: "avature",
      pageSourceDomain: "avature.net"
    },
    okta: {
      patterns: ["*://www.okta.com/company/careers/*/*"],
      pathRegex: "^/company/careers/(?!job-listing(?:/|$))"
    },
    comeet: {
      patterns: ["*://*.comeet.com/jobs/*/*/*/*", "*://*.comeet.co/jobs/*/*/apply*"],
      iframeDomains: ["comeet.co", "comeet.com"]
    },
    apple: {
      patterns: ["*://jobs.apple.com/*/details/*", "*://jobs.apple.com/app/*/apply/*"]
    },
    polymer: {
      patterns: ["*://jobs.polymer.co/*/*"]
    },
    recruiterflow: {
      domains: ["recruiterflow.com"],
      pageSourceKeyword: "recruiterflow.com",
      pageSourceDomain: "recruiterflow.com",
      pathRegex: "^/[^/]+/jobs/[^/?#]+"
    },
    careerstoasttab: {
      patterns: ["*://careers.toasttab.com/jobs*"]
    }
  };

function f(e) {
  let t = /^[^:]+:\/\/([^/]+)/.exec(e);
  if (!t) return null;
  let r = t[1];
  return r && "*" !== r ? r.startsWith("*.") ? r.slice(2) : r : null
}
let p = Object.values(d).filter(e => !e.pathRegex && !e.urlRegex),
  m = p.flatMap(e => e.domains ?? []),
  h = p.flatMap(e => e.patterns ?? []).map(e => new o.MatchPattern(e)),
  g = Array.from(new Set(Object.values(d).flatMap(e => [...e.domains ?? [], ...(e.patterns ?? [])
    .map(f).filter(e => null !== e)
  ]))),
  b = Object.values(d).filter(e => "string" == typeof e.pathRegex && e.pathRegex.length > 0 ||
    "string" == typeof e.urlRegex && e.urlRegex.length > 0).map(e => ({
    domains: e.domains ?? [],
    patterns: (e.patterns ?? []).map(e => new o.MatchPattern(e)),
    pathRegex: e.pathRegex ? new RegExp(e.pathRegex) : void 0,
    urlRegex: e.urlRegex ? new RegExp(e.urlRegex) : void 0
  })),
  y = Object.values(d).flatMap(e => e.iframeDomains ?? []),
  v = Object.values(d).filter(e => e.pageSourceKeyword && e.pageSourceDomain).map(e => [e
    .pageSourceKeyword, e.pageSourceDomain
  ]),
  w = Object.values(d).filter(e => e.iframeOnly).flatMap(e => e.domains ?? []),
  S = Object.values(d).flatMap(e => e.queryParams ?? [])

