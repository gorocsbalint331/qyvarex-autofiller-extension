import * as o from "./api/autofill-signup-information.js";
import * as i from "./utils/skill-list.ts";
import * as a from "./constants.ts";
import * as l from "./utils/address-lookup.ts";
import * as s from "./utils/date-format.ts";
import * as u from "./utils/location-normalizer.ts";
import * as c from "./utils/phone-country-code.ts";
let d = 0, f = () => `autofill-info-${d++}`, p = (e) => ({ id: f(), schoolName: "", accreditation: "", gap: "", startDate: "", endDate: "", isCurrent: false, ...e }), m = (e) => ({ id: f(), companyName: "", jobTitle: "", city: "", startDate: "", endDate: "", summary: "", descriptions: [], ...e }), h = (e) => {
  let t = l.normalizeCountryInput(e) || e, r = t.toLowerCase().trim();
  return a.COUNTRY_CODE_MAP[r] ?? "";
}, g = (e) => {
  let t = e?.personalInfo ?? {}, r = e?.workExperience ?? [], n = e?.education ?? [], a2 = i.extractSkillList(e), l2 = e?.employmentInfo ?? {}, d2 = e?.location ?? {}, f2 = u.normalizeAutofillLocation({ country: d2.country ?? "", state: d2.state ?? e?.state ?? "", city: d2.city ?? "" });
  return { personal: { firstName: t.firstName ?? "", middleName: t.middleName ?? "", lastName: t.lastName ?? "", preferredFirstName: t.preferredFirstName ?? "", preferredMiddleName: t.preferredMiddleName ?? "", preferredLastName: t.preferredLastName ?? "", email: t.email ?? "", phoneType: e?.phoneType ?? "", phoneCountryCode: c.normalizePhoneCountryCodeWithName(e?.phoneCountryCode), phone: t.phone_number ?? "", country: f2.country, state: f2.state, city: f2.city, county: d2.county ?? "", addressLine: e?.addressLine ?? "", postalCode: d2.postCode ?? "", linkedinUrl: t.linkedin_link || t.linkedin || "", githubUrl: t.github_link || t.github_url || "", websiteUrl: t.personal_site_link || t.personal_site || "" }, education: n.length > 0 ? n.map((e2) => p({ schoolName: e2.organization ?? "", accreditation: e2.accreditation ?? "", gap: e2.gpa ?? "", startDate: s.formatAutofillInfoDate(e2.dates?.start_date), endDate: s.formatAutofillInfoDate(e2.dates?.completion_date), isCurrent: !!e2.dates?.is_current })) : [p()], workExperience: r.length > 0 ? r.map((e2) => m({ companyName: e2.organization ?? "", jobTitle: e2.job_title ?? "", city: e2.location ?? "", startDate: s.formatAutofillInfoDate(e2.dates?.start_date), endDate: e2.dates?.is_current ? "Present" : s.formatAutofillInfoDate(e2.dates?.completion_date), summary: e2.summary ?? "", descriptions: Array.isArray(e2.job_descriptions) ? e2.job_descriptions : [] })) : [m()], skill: Array.isArray(a2) && a2.length > 0 ? a2 : [], equalEmployment: { gender: l2.gender ?? "", ethnicity: l2.race ?? "", veteran: l2.veteran ?? "", disability: l2.disability ?? "", workAuthorization: l2.workAuthorization ?? "", sponsorshipStatus: l2.sponsorshipStatus ?? "", lgbt: l2.lgbt ?? "", hispanic: l2.hispanic ?? "", sexual: Array.isArray(l2.sexual) ? l2.sexual : [] }, pronouns: e?.pronouns ?? "", preference: { salary: e?.salary ?? "", hiringDate: e?.hiringDate ?? "", additionalApplicationInfo: e?.additionalApplicationInfo ?? "" }, signupInformation: { registrationEmail: o.resolveSignupRegistrationEmail(e) } };
};
export {
  g as buildAutofillInfoData,
  p as createEducationItem,
  m as createWorkItem,
  h as resolveCountryCode
};
