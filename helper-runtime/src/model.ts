// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/model.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import * as o from "./api/autofill-signup-information.js"
import * as i from "./utils/skill-list.ts"
import * as a from "./constants.ts"
import * as l from "./utils/address-lookup.ts"
import * as s from "./utils/date-format.ts"
import * as u from "./utils/location-normalizer.ts"
import * as c from "./utils/phone-country-code.ts"

let d=0,f=()=>`autofill-info-${d++}`,p=e=>({id:f(),schoolName:"",accreditation:"",gap:"",startDate:"",endDate:"",isCurrent:false,...e}),m=e=>({id:f(),companyName:"",jobTitle:"",city:"",startDate:"",endDate:"",summary:"",descriptions:[],...e}),h=e=>{let t=l.normalizeCountryInput(e)||e,r=t.toLowerCase().trim();return a.COUNTRY_CODE_MAP[r]??""},g=e=>{let t=e?.personalInfo??{},r=e?.workExperience??[],n=e?.education??[],a=i.extractSkillList(e),l=e?.employmentInfo??{},d=e?.location??{},f=u.normalizeAutofillLocation({country:d.country??"",state:d.state??e?.state??"",city:d.city??""});return{personal:{firstName:t.firstName??"",middleName:t.middleName??"",lastName:t.lastName??"",preferredFirstName:t.preferredFirstName??"",preferredMiddleName:t.preferredMiddleName??"",preferredLastName:t.preferredLastName??"",email:t.email??"",phoneType:e?.phoneType??"",phoneCountryCode:c.normalizePhoneCountryCodeWithName(e?.phoneCountryCode),phone:t.phone_number??"",country:f.country,state:f.state,city:f.city,county:d.county??"",addressLine:e?.addressLine??"",postalCode:d.postCode??"",linkedinUrl:t.linkedin_link||t.linkedin||"",githubUrl:t.github_link||t.github_url||"",websiteUrl:t.personal_site_link||t.personal_site||""},education:n.length>0?n.map(e=>p({schoolName:e.organization??"",accreditation:e.accreditation??"",gap:e.gpa??"",startDate:s.formatAutofillInfoDate(e.dates?.start_date),endDate:s.formatAutofillInfoDate(e.dates?.completion_date),isCurrent:!!e.dates?.is_current})):[p()],workExperience:r.length>0?r.map(e=>m({companyName:e.organization??"",jobTitle:e.job_title??"",city:e.location??"",startDate:s.formatAutofillInfoDate(e.dates?.start_date),endDate:e.dates?.is_current?"Present":s.formatAutofillInfoDate(e.dates?.completion_date),summary:e.summary??"",descriptions:Array.isArray(e.job_descriptions)?e.job_descriptions:[]})):[m()],skill:Array.isArray(a)&&a.length>0?a:[],equalEmployment:{gender:l.gender??"",ethnicity:l.race??"",veteran:l.veteran??"",disability:l.disability??"",workAuthorization:l.workAuthorization??"",sponsorshipStatus:l.sponsorshipStatus??"",lgbt:l.lgbt??"",hispanic:l.hispanic??"",sexual:Array.isArray(l.sexual)?l.sexual:[]},pronouns:e?.pronouns??"",preference:{salary:e?.salary??"",hiringDate:e?.hiringDate??"",additionalApplicationInfo:e?.additionalApplicationInfo??""},signupInformation:{registrationEmail:o.resolveSignupRegistrationEmail(e)}}}

export { p as createEducationItem, m as createWorkItem, h as resolveCountryCode, g as buildAutofillInfoData }
