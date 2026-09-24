// @ts-nocheck
/**
 * Autofill crawler factory: map target name → site-specific AutoFill class.
 */

import { Adobe } from "../sites/adobe.ts"
import { AdpMyJobs } from "../sites/adp-myjobs.ts"
import { AdpRecruiting } from "../sites/adp-recruiting.ts"
import { AdpWorkforceNow } from "../sites/adp-workforcenow.ts"
import { Amazon } from "../sites/amazon.ts"
import { Apple } from "../sites/apple.ts"
import { Ashby } from "../sites/ashby.ts"
import { Avature } from "../sites/avature.ts"
import { Bamboohr } from "../sites/bamboohr.ts"
import { Brassring } from "../sites/brassring.ts"
import { Breezy } from "../sites/breezy.ts"
import { ByteDance } from "../sites/bytedance.ts"
import { CareerPlug } from "../sites/careerplug.ts"
import { Careerspage } from "../sites/careers-page.ts"
import { CareersToasttab } from "../sites/careers-toasttab.ts"
import { CareersWithWaymo } from "../sites/careers-withwaymo.ts"
import { Catsone } from "../sites/catsone.ts"
import { Cisco } from "../sites/cisco.ts"
import { Comeet } from "../sites/comeet.ts"
import { Dayforce } from "../sites/dayforce.ts"
import { Eightfold } from "../sites/eightfold.ts"
import { EightfoldCareerHub } from "../sites/eightfold/careerhub.ts"
import { Freshteam } from "../sites/freshteam.ts"
import { Gem } from "../sites/gem.ts"
import { GoHire } from "../sites/gohire.ts"
import { Google } from "../sites/google.ts"
import { Greenhouse } from "../sites/greenhouse.ts"
import { Gusto } from "../sites/gusto.ts"
import { HiringThing } from "../sites/hiringthing.ts"
import { Hrmdirect } from "../sites/hrmdirect.ts"
import { HubSpot } from "../sites/hubspot.ts"
import { Icims } from "../sites/icims.ts"
import { Intuit } from "../sites/intuit.ts"
import { Isolved } from "../sites/isolved.ts"
import { Jacobs } from "../sites/jacobs.ts"
import { Jazzhr } from "../sites/jazzhr.ts"
import { Jobdiva } from "../sites/jobdiva.ts"
import { JobScore } from "../sites/JobScore.ts"
import { Jobvite } from "../sites/jobvite.ts"
import { Kula } from "../sites/kula.ts"
import { Lever } from "../sites/lever.ts"
import { MetaCareers } from "../sites/metacareers.ts"
import { MyWorkDay } from "../sites/myworkday.ts"
import { Okta } from "../sites/okta.ts"
import { OracleCloud } from "../sites/oraclecloud.ts"
import { PaycomOnline } from "../sites/paycomonline-v3.ts"
import { Paylocity } from "../sites/paylocity.ts"
import { Personio } from "../sites/personio.ts"
import { Phenom } from "../sites/phenom.ts"
import { Pinpointhq } from "../sites/pinpointhq.ts"
import { Polymer } from "../sites/polymer.ts"
import { Recruitee } from "../sites/recruitee.ts"
import { Recruiterflow } from "../sites/recruiterflow.ts"
import { Ripplehire } from "../sites/ripplehire.ts"
import { Rippling } from "../sites/rippling.ts"
import { SmartRecruiters } from "../sites/smartrecruiters.ts"
import { SuccessFactors } from "../sites/successfactors.ts"
import { Taleo } from "../sites/taleo.ts"
import { TeamTailor } from "../sites/teamtailor.ts"
import { Tesla } from "../sites/tesla.ts"
import { Tiktok } from "../sites/tiktok.ts"
import { Trakstar } from "../sites/trakstar.ts"
import { Trinethire } from "../sites/trinethire.ts"
import { Uber } from "../sites/uber.ts"
import { Ultipro } from "../sites/ultipro.ts"
import { Walmart } from "../sites/walmart.ts"
import { Workable } from "../sites/workable.ts"
import { XCompany } from "../sites/xcompany.ts"
import { YCombinator } from "../sites/ycombinator.ts"
import { ZohoRecruit } from "../sites/zohorecruit.ts"
import { ZohoRecruitV2 } from "../sites/zohorecruit-v2.ts"
import { DoverAutoFill } from "./dover.ts"
import { getTargetName } from "./target.ts"

export { getTargetName }

const TARGET_CLASS_MAP = {
  catsone: Catsone,
  cisco: Cisco,
  myworkday: MyWorkDay,
  walmart: Walmart,
  workable: Workable,
  gohire: GoHire,
  oraclecloud: OracleCloud,
  xcompany: XCompany,
  greenhouse: Greenhouse,
  lever: Lever,
  ashbyhq: Ashby,
  jobvite: Jobvite,
  kula: Kula,
  icims: Icims,
  breezy: Breezy,
  phenom: Phenom,
  tesla: Tesla,
  dover: DoverAutoFill,
  amazon: Amazon,
  dayforce: Dayforce,
  ultipro: Ultipro,
  taleo: Taleo,
  bamboohr: Bamboohr,
  brassring: Brassring,
  rippling: Rippling,
  adobe: Adobe,
  zohorecruit: ZohoRecruit,
  zohorecruitV2: ZohoRecruitV2,
  eightfold: Eightfold,
  eightfoldCareerHub: EightfoldCareerHub,
  jazzhr: Jazzhr,
  freshteam: Freshteam,
  pinpointhq: Pinpointhq,
  gem: Gem,
  recruitee: Recruitee,
  recruiterflow: Recruiterflow,
  smartrecruiters: SmartRecruiters,
  paycomonline: PaycomOnline,
  tiktok: Tiktok,
  trakstar: Trakstar,
  jobscore: JobScore,
  paylocity: Paylocity,
  teamtailor: TeamTailor,
  adpWorkforceNow: AdpWorkforceNow,
  adpMyJobs: AdpMyJobs,
  adpRecruiting: AdpRecruiting,
  avature: Avature,
  trinethire: Trinethire,
  metacareers: MetaCareers,
  google: Google,
  gusto: Gusto,
  hiringthing: HiringThing,
  hubspot: HubSpot,
  uber: Uber,
  okta: Okta,
  comeet: Comeet,
  ycombinator: YCombinator,
  polymer: Polymer,
  ripplehire: Ripplehire,
  personio: Personio,
  careerspage: Careerspage,
  careerplug: CareerPlug,
  careerswithwaymo: CareersWithWaymo,
  apple: Apple,
  successfactors: SuccessFactors,
  hrmdirect: Hrmdirect,
  intuit: Intuit,
  bytedance: ByteDance,
  isolved: Isolved,
  jacobs: Jacobs,
  careerstoasttab: CareersToasttab,
  jobdiva: Jobdiva,
}

let lastInstance = null

export default class CrawlerFactory {
  static create() {
    const targetName = getTargetName()
    if (targetName) return (lastInstance = new TARGET_CLASS_MAP[targetName]())
  }
}
