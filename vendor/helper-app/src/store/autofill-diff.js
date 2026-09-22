/**
 * Parcel module id: 3L9SO
 * Resolved path: src/store/autofill-diff.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "EDU_FIELD_MAP", () => a), n.export(r, "WORK_FIELD_MAP", () =>
  l), n.export(r, "diffArrayFields", () => s), n.export(r, "diffPersonalFields", () => u);
let o = e => JSON.stringify(Array.isArray(e) ? e.map(e => "string" == typeof e ? e : `${e??""}`) :
  []),
  i = {
    firstName: e => e?.personalInfo?.firstName ?? "",
    middleName: e => e?.personalInfo?.middleName ?? "",
    lastName: e => e?.personalInfo?.lastName ?? "",
    preferredFirstName: e => e?.personalInfo?.preferredFirstName ?? "",
    preferredMiddleName: e => e?.personalInfo?.preferredMiddleName ?? "",
    preferredLastName: e => e?.personalInfo?.preferredLastName ?? "",
    email: e => e?.personalInfo?.email ?? "",
    phoneType: e => e?.phoneType ?? "",
    phoneCountryCode: e => e?.phoneCountryCode ?? "",
    phone: e => e?.personalInfo?.phone_number ?? "",
    country: e => e?.location?.country ?? "",
    state: e => e?.location?.state ?? e?.state ?? "",
    city: e => e?.location?.city ?? "",
    county: e => e?.location?.county ?? "",
    addressLine: e => e?.addressLine ?? "",
    postalCode: e => e?.location?.postCode ?? "",
    linkedinUrl: e => e?.personalInfo?.linkedin_link || e?.personalInfo?.linkedin || "",
    githubUrl: e => e?.personalInfo?.github_link || e?.personalInfo?.github_url || "",
    websiteUrl: e => e?.personalInfo?.personal_site_link || e?.personalInfo?.personal_site || ""
  },
  a = {
    schoolName: e => e?.organization ?? "",
    accreditation: e => e?.accreditation ?? "",
    gap: e => e?.gpa ?? "",
    startDate: e => e?.dates?.start_date ?? "",
    endDate: e => e?.dates?.completion_date ?? "",
    isCurrent: e => `${e?.dates?.is_current??""}`
  },
  l = {
    companyName: e => e?.organization ?? "",
    jobTitle: e => e?.job_title ?? "",
    city: e => e?.location ?? "",
    startDate: e => e?.dates?.start_date ?? "",
    endDate: e => e?.dates?.is_current ? "Present" : e?.dates?.completion_date ?? "",
    summary: e => e?.summary ?? "",
    jobDescription: e => o(e?.job_descriptions)
  },
  s = (e, t, r, n, o) => {
    for (let i = 0; i < t.length; i++)
      for (let [a, l] of Object.entries(r)) l(e[i]) !== l(t[i]) && o.push(`${n}.${i}.${a}`)
  },
  u = (e, t, r) => {
    for (let [n, o] of Object.entries(i)) o(e) !== o(t) && r.push(`personal.${n}`)
  }

