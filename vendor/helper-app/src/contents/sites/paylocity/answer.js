/**
 * Parcel module id: eiV7s
 * Resolved path: src/contents/sites/paylocity/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "formatAnswer", () => E);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("~constants"),
  l = e("~core/phone-country-code");
let s = new Set(["AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK", "NT", "NU", "YT"]),
  u = Object.fromEntries(Object.entries(a.STATE_MAP).filter(([e]) => s.has(e)).map(([e, t]) => [c(
    t), e
  ]));

function c(e) {
  return e.replace(/[^a-zA-Z0-9]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase()
}

function d(e) {
  if ("string" != typeof e) return !1;
  let t = e.trim().toLowerCase();
  return "ca" === t || t.includes("canada")
}

function f(e) {
  let t = e.regular || {},
    r = [e.profileData?.location?.country, e.profile_data?.location?.country, e.profileData
      ?.country, e.profile_data?.country, e.country, t.Country, t["Country / Territory"], t[
        "Country/Territory"], t["Country / Region"], t["Country or Region"]
    ];
  return String(r.find(e => "string" == typeof e && e.trim()) || "")
}

function p(e) {
  if ("string" != typeof e) return e;
  let t = e.trim();
  if (!t) return e;
  let r = t.toUpperCase();
  return s.has(r) ? r : u[c(t)] || e
}
u[c("British Colombia")] = "BC";
let m = /how\s+did\s+you\s+hear/i;

function h(e) {
  if ("string" != typeof e) return [];
  let t = e.trim();
  if (!t) return [];
  let r = t.replace(/['\u2019]s\b/g, "").replace(/\s*degree\s*$/i, "").trim();
  return r && r.toLowerCase() !== t.toLowerCase() ? [t, r] : [t]
}

function g(e, t) {
  let r = e[t];
  return null != r && "" !== r
}

function b(e) {
  return "string" == typeof e ? "" !== e.trim() : !!Array.isArray(e) && e.some(e => "string" ==
    typeof e && "" !== e.trim())
}
let y = new Set((0, l.PHONE_COUNTRY_CODE_ANSWER_LABELS).map(l.normalizePhoneCountryText));

function v(e) {
  return y.has((0, l.normalizePhoneCountryText)(e))
}

function w(e, t, r) {
  return "string" == typeof e ? (0, l.resolvePhoneFieldValue)(e, t, r) : Array.isArray(e) ? e.map(
    e => "string" == typeof e ? (0, l.resolvePhoneFieldValue)(e, t, r) : e) : e
}

function S(e, t = "MM/DD/YYYY") {
  if (!e) return null;
  if ("string" == typeof e) {
    let t = e.trim(),
      r =
      /^(immediately|asap|now|flexible|negotiable|tbd|to be determined|n\/a|na|not applicable)$/i;
    if (r.test(t)) return console.warn(
      `[formatAnswer] \u65e5\u671f\u5b57\u6bb5\u5305\u542b\u975e\u65e5\u671f\u503c: "${t}"\uff0c\u8df3\u8fc7`
      ), null;
    if (t.length < 6 || t.length > 30) return console.warn(
      `[formatAnswer] \u65e5\u671f\u5b57\u7b26\u4e32\u957f\u5ea6\u5f02\u5e38: "${t}"\uff0c\u8df3\u8fc7`
      ), null
  }
  let r = (0, i.default)(e);
  if (!r.isValid()) return console.warn(
    `[formatAnswer] \u65e0\u6548\u7684\u65e5\u671f\u503c: "${e}"\uff0c\u8df3\u8fc7`), null;
  let n = r.year();
  return n < 1900 || n > 2100 ? (console.warn(
    `[formatAnswer] \u65e5\u671f\u5e74\u4efd\u8d85\u51fa\u8303\u56f4 (${n}): "${e}"\uff0c\u8df3\u8fc7`
    ), null) : r.format(t)
}

function E(e) {
  if (e.regular) {
    let t = d(f(e)),
      r = Object.entries(e.regular).some(([e, t]) => m.test(e) && b(t));
    for (let t of (r || (e.regular["How Did You Hear About Us?"] = a.SOURCE_VALUES, e.regular[
        "How did you hear about us?"] = a.SOURCE_VALUES), Object.keys(e.regular))) /skill/i.test(
      t) && delete e.regular[t];
    if (t)
      for (let t of Object.keys(e.regular)) /^administrative\s+area$/i.test(t.trim()) && (e.regular[
        t] = p(e.regular[t]));
    let n = (0, l.resolvePhoneCountryCodeAnswer)(e),
      o = f(e);
    for (let [t, r] of Object.entries(e.regular)) /(phone|number)/i.test(t) && (v(t) || (e.regular[
      t] = w(r, n, o)));
    (e.regular?.["Available to work"] === "" || e.regular?.["Available to work"]) && (e.regular[
      "Available to work"] = (0, i.default)().format("MM/DD/YYYY"));
    let s = ["Available to Start", "available to start", "Date Available to Start",
      "dateAvailableToStart"
    ];
    for (let t of s)
      if (e.regular[t]) {
        let r = S(e.regular[t]);
        r ? e.regular[t] = r : (console.warn(
            `[formatAnswer] "${t}" \u503c\u65e0\u6548\uff0c\u5df2\u5220\u9664: ${e.regular[t]}`),
          delete e.regular[t])
      }
  }
  if (e.workExperience && e.workExperience.length > 0)
    for (let t of e.workExperience) {
      let e = "string" == typeof t?.Country ? t.Country : void 0;
      for (let [r, n] of Object.entries(t ?? {})) /(phone|number)/i.test(r) && (t[r] = w(n, void 0,
        e));
      if (t?.Start && (t.From = t.Start, !g(t, "Start Date"))) {
        let e = S(t.Start);
        e && (t["Start Date"] = e)
      }
      if (t?.End && (t.To = t.End, !g(t, "End Date"))) {
        let e = S(t.End);
        e && (t["End Date"] = e)
      }
      t?.Company && !g(t, "Company Name") && (t["Company Name"] = t.Company), t?.Title && !g(t,
        "Position") && (t.Position = t.Title), t && "isCurrent" in t && (t[
        "I currently work here"] = t.isCurrent), t?.jobDescriptions && (t.Responsibilities = t
        .jobDescriptions)
    }
  if (e.education && e.education.length > 0)
    for (let t of e.education) {
      let e = "string" == typeof t?.Country ? t.Country : void 0;
      for (let [r, n] of Object.entries(t ?? {})) /(phone|number)/i.test(r) && (t[r] = w(n, void 0,
        e));
      if (t?.Start && (t.From = t.Start), t?.End && (t.To = t.End), t?.School && (t[
            "School or University"] = t.School, g(t, "School Name") || (t["School Name"] = t
          .School)), t?.Study && (t["Field of Study"] = t.Study, g(t, "Area of Study") || (t[
          "Area of Study"] = t.Study)), t) {
        let e = h(t.Degree);
        e.length > 0 && !g(t, "Degree Obtained") && (t["Degree Obtained"] = e.length > 1 ? e : e[
        0]);
        let r = Object.keys(t).some(e => /graduate/i.test(e) && g(t, e));
        if (!r && (!0 === t.isCurrent ? t["Did you Graduate?"] = "No" : !1 === t.isCurrent && e
            .length > 0 && (t["Did you Graduate?"] = "Yes")), t.End && !g(t, "Graduation Date")) {
          let e = S(t.End);
          e && (t["Graduation Date"] = e)
        }
      }
    }
  return e
}

