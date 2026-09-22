/**
 * Parcel module id: bGd3E
 * Resolved path: mappers/tracking-snapshot.js
 * Dependencies:
 *   ../utils/phone-country-code -> b8ARY  =>  src/utils/phone-country-code.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"buildAutofillInfoTrackingSnapshot",()=>i);var o=e("../utils/phone-country-code");let i=e=>{let{personal:t,education:r,workExperience:n,skill:i,equalEmployment:a,pronouns:l,preference:s}=e,u={firstName:t.firstName,middleName:t.middleName,lastName:t.lastName,preferredFirstName:t.preferredFirstName,preferredMiddleName:t.preferredMiddleName,preferredLastName:t.preferredLastName,email:t.email,phone_number:t.phone,phoneCountryCode:(0,o.normalizePhoneCountryCode)(t.phoneCountryCode),linkedin:t.linkedinUrl,github_url:t.githubUrl,personal_site:t.websiteUrl,country:t.country,city:t.city,county:t.county,postCode:t.postalCode,state:t.state,addressLine:t.addressLine,phoneType:t.phoneType,salary:s.salary,hiringDate:s.hiringDate,skills:{DEFAULT:i},gender:a.gender,race:a.ethnicity,veteran:a.veteran,disability:a.disability,workAuthorization:a.workAuthorization,sponsorshipStatus:a.sponsorshipStatus,lgbt:a.lgbt,hispanic:a.hispanic,sexual:a.sexual,pronouns:l},c=r.map(e=>({organization:e.schoolName,accreditation:e.accreditation,gpa:e.gap,dates:{start_date:e.startDate,completion_date:e.endDate||null,is_current:e.isCurrent}})),d=n.map(e=>({job_title:e.jobTitle,organization:e.companyName,location:e.city,dates:{start_date:e.startDate,completion_date:"Present"===e.endDate?null:e.endDate,is_current:"Present"===e.endDate},summary:e.summary,job_descriptions:e.descriptions}));return{normal:u,education:c,employment:d}}
