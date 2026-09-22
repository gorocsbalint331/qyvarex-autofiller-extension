/**
 * Parcel module id: 9ge8X
 * Resolved path: contents/sites/recruiterflow/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "formatPhoneNumber", () => c), n.export(r, "formatDate", () =>
  p), n.export(r, "formatMonthYearDate", () => m), n.export(r, "formatAnswer", () => b);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("~core/phone-country-code");
let l = {
    Start: "From",
    StartDate: "Start Date",
    End: "To",
    EndDate: "End Date",
    isCurrent: "I currently work here"
  },
  s = {
    Start: "From",
    StartDate: "Start Date",
    End: "To",
    EndDate: "End Date",
    School: "School or University",
    Study: "Field of Study"
  };

function u(e, t, r) {
  (void 0 === e[t] || null === e[t] || "" === String(e[t]).trim()) && (e[t] = r)
}

function c(e, t) {
  let r = (0, a.resolvePhoneAnswerText)(e);
  if (!r) return r;
  let n = d(t || "");
  if (n) {
    let e = n.split("").join("\\s*"),
      t = RegExp(`^\\s*(?:\\(\\s*)?\\+\\s*${e}\\s*(?:\\))?[\\s-]*`);
    if (t.test(r)) return r.replace(t, "").trim()
  }
  return r
}

function d(e) {
  return e.match(/\+\s*(\d{1,4})/)?.[1] || (/^\s*\d{1,4}\s*$/.test(e) ? e.replace(/\D/g, "") : "")
}

function f(e) {
  let t = e.regular || {},
    r = ["Phone Country Code", "Country Phone Code", "phoneCountryCode", "phone_country_code"];
  for (let e of r) {
    let r = (0, a.resolvePhoneAnswerText)(t[e]);
    if (r) return r
  }
  return (0, a.resolvePhoneAnswerText)(e.profileData?.phoneCountryCode ?? e.profileData
    ?.phone_country_code ?? e.profile_data?.phoneCountryCode ?? e.profile_data?.phone_country_code
    )
}

function p(e) {
  return e ? (0, i.default)(e).format("MM/DD/YYYY") : ""
}

function m(e) {
  return e ? (0, i.default)(e).format("MM/YYYY") : ""
}

function h(e) {
  let t = {
    ...e
  };
  return t?.Start && (t[l.Start] = t.Start, u(t, l.StartDate, t.Start)), t?.End && (t[l.End] = t
      .End, u(t, l.EndDate, t.End)), t?.isCurrent !== void 0 && (t[l.isCurrent] = t.isCurrent), t
    ?.Company && u(t, "Company Name", t.Company), t
}

function g(e) {
  let t = {
    ...e
  };
  return t?.Start && (t[s.Start] = t.Start, u(t, s.StartDate, t.Start)), t?.End && (t[s.End] = t
    .End, u(t, s.EndDate, t.End)), t?.School && (t[s.School] = t.School, u(t, "School Name", t
    .School)), t?.Study && (t[s.Study] = t.Study), t
}

function b(e) {
  let t = ["Phone", "phone", "Phone Number"],
    r = f(e);
  if (e.regular)
    for (let n of t) e.regular[n] && (e.regular[n] = c(e.regular[n], r));
  return e.workExperience && e.workExperience.length > 0 && (e.workExperience = e.workExperience
    .map(h)), e.education && e.education.length > 0 && (e.education = e.education.map(g)), e
}

