/**
 * Parcel module id: 9Ki4d
 * Resolved path: src/contents/sites/oraclecloud/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~constants/phone-country-code -> 3iM7P  =>  src/constants/phone-country-code.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~utils/gpa -> l4T7j  =>  src/utils/gpa.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "normalizeOracleProfileLinkUrl", () => y), n.export(r,
    "getOracleProfileLinkValues", () => w), n.export(r, "applyOracleProfileLinkAnswers", () => S), n
  .export(r, "isOraclePhoneCountryCodeField", () => F), n.export(r, "getOracleLinkRuleIndex", () =>
    I), n.export(r, "isOracleLinkRule", () => j), n.export(r, "orderOracleRegularRules", () => z), n
  .export(r, "shouldSkipOracleAddressDependentFill", () => G), n.export(r,
    "isOraclePostalCodeDependentRule", () => Q), n.export(r, "isOracleCityDependentRule", () => Z),
  n.export(r, "isOracleAddressDependentRule", () => ee), n.export(r, "isOracleAddressSelectField",
  () => eo), n.export(r, "findOracleSelectOptionIndex", () => ed), n.export(r,
    "canFillOracleSelectRule", () => ef), n.export(r, "resolveOracleCountryValue", () => ep), n
  .export(r, "isOracleProfileCountryRule", () => em), n.export(r,
    "excludeOracleProfileCountryRules", () => eh), n.export(r,
    "shouldSkipOraclePrefilledCountryFill", () => eg), n.export(r, "getOracleProfileCountryRule",
  () => eb), n.export(r, "applyOracleAutofillLocationFallbacks", () => eS), n.export(r,
    "formatAnswer", () => eE);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("~constants"),
  l = e("~constants/phone-country-code"),
  s = e("~core/utils"),
  u = e("~utils/gpa");
let c = new Set(["country", "address1", "addressLine1", "city", "region2", "postalCode",
  "region1"]),
  d = new Map([
    ["country", 0],
    ["address1", 1],
    ["addressline1", 1],
    ["address2", 2],
    ["addressline2", 2],
    ["address3", 3],
    ["addressline3", 3],
    ["state", 4],
    ["region2", 4],
    ["city", 5],
    ["postalcode", 6],
    ["zipcode", 6],
    ["zip", 6],
    ["county", 7],
    ["region1", 7]
  ]);

function f(e) {
  if ("string" != typeof e) return;
  let t = e.trim();
  if (!t) return;
  if (/^\d{4}-\d{2}$/.test(t)) return t;
  if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t.slice(0, 7);
  let r = (0, i.default)(t);
  return r.isValid() ? r.format("YYYY-MM") : t
}

function p(e) {
  if (!0 === e || 1 === e) return !0;
  if ("string" == typeof e) {
    let t = e.trim().toLowerCase();
    return "true" === t || "1" === t || "yes" === t
  }
  return !1
}

function m(e) {
  let t = Array.isArray(e) ? e[0] : e;
  return "string" == typeof t ? t.trim() : ""
}

function h(e, t) {
  for (let r of t) {
    let t = e?.[r],
      n = m(t);
    if (n) return n;
    if (null != t && "object" != typeof t && String(t).trim()) return String(t).trim()
  }
}

function g(e, t) {
  for (let r of e) {
    if (!r) continue;
    let e = h(r, t),
      n = m(e);
    if (n) return n
  }
  return ""
}

function b(e, t) {
  let r = m(t);
  !r || e.includes(r) || e.push(r)
}

function y(e) {
  let t = m(e);
  if (!t || /\s/.test(t)) return "";
  let r = /^[a-z][a-z0-9+.-]*:\/\//i.test(t),
    n = r ? t : `https://${t}`;
  try {
    let e = new URL(n);
    if ("http:" !== e.protocol && "https:" !== e.protocol || !e.hostname.includes(".")) return "";
    return n
  } catch {
    return ""
  }
}

function v(e, t) {
  b(e, y(t))
}

function w(e, t) {
  let r = e?.regular ?? {},
    n = e?.profileData ?? {},
    o = e?.profile_data ?? {},
    i = t?.personalInfo ?? {},
    a = [i, t, n, o, r],
    l = [];
  return v(l, g(a, ["linkedin_link", "linkedin_url", "linkedinUrl", "linkedin", "LinkedIn URL",
    "LinkedIn"
  ])), v(l, g(a, ["github_link", "github_url", "githubUrl", "github", "GitHub URL", "Github URL",
    "GitHub", "Github"
  ])), v(l, g(a, ["personal_site_link", "personal_site", "personalSite", "websiteUrl",
    "website_url", "website", "portfolioUrl", "portfolio_url", "Portfolio URL", "Website URL",
    "Personal Website", "Website"
  ])), l
}

function S(e, t) {
  e.regular || (e.regular = {});
  let r = w(e, t);
  return r.forEach((t, r) => {
    e.regular[`Link ${r+1}`] = t
  }), r
}

function E(e, t, r) {
  if (m(e[t])) return;
  let n = h(e, r);
  void 0 !== n && (e[t] = n)
}

function x(e) {
  let t = m(e);
  if (!t) return;
  let r = t.match(
      /\b(?:associate|bachelor|master|doctor(?:ate)?|ph\.?\s*d\.?|juris\s+doctor|j\.?\s*d\.?)\b[\s\S]*?\bin\s+(.+)$/i
      ),
    n = r?.[1]?.replace(/\s*\([^)]*\)\s*$/g, "").replace(/\s+/g, " ").trim();
  return n || void 0
}

function C(e) {
  return m(e).replace(/[\u2010-\u2015]/g, "-").replace(/\s+/g, " ").replace(/\s*,\s*/g, ", ").trim()
    .toLowerCase()
}

function A(e) {
  return m(e).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

function k(e) {
  let t = A(e);
  return "address1" === t || "addressline1" === t
}

function T(e) {
  return "country" === A(e)
}

function F(e) {
  return ["countrycodesdropdownphonenumber", "phonecountrycode", "countryphonecode"].includes(A(e))
}

function I(e) {
  let t = m(e).match(/^link\s+(\d+)$/i);
  if (!t) return null;
  let r = Number(t[1]);
  return Number.isInteger(r) && r > 0 ? r : null
}

function j(e) {
  return null !== I(e.label)
}

function D(e) {
  let t = C(e),
    r = t.split(",").map(e => e.trim()).filter(Boolean).length;
  if (r >= 3) return !0;
  let n = t.split(/[^a-z0-9]+/).filter(Boolean),
    o = n.some(e => !!et(e)),
    i = n.some(e => /^\d{5}(?:\d{4})?$/.test(e));
  return o && i
}

function P(e) {
  return ["canada", "united states", "united states of america", "us", "usa", "u.s.", "u.s.a."]
    .includes(e)
}
let _ = new Map([
    ["aly", "alley"],
    ["ave", "avenue"],
    ["av", "avenue"],
    ["blvd", "boulevard"],
    ["cir", "circle"],
    ["ct", "court"],
    ["dr", "drive"],
    ["hwy", "highway"],
    ["ln", "lane"],
    ["pkwy", "parkway"],
    ["pl", "place"],
    ["rd", "road"],
    ["sq", "square"],
    ["st", "street"],
    ["ter", "terrace"]
  ]),
  L = new Set(["alley", "avenue", "boulevard", "circle", "court", "drive", "highway", "lane",
    "parkway", "place", "road", "square", "street", "terrace"
  ]),
  R = "I am Hispanic or Latino.",
  O = new Set(["canada", "us", "usa", "united", "states", "america"]);

function M(e, t) {
  let r = ep(e),
    n = ep(t);
  if (!r || !n) return !1;
  let o = N(r),
    i = N(n);
  return !!o && !!i && o === i
}

function N(e) {
  return m(e).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim().replace(/\s+/g, " ").toLowerCase()
}

function $(e) {
  return m(e).match(/\+(\d{1,4})\b/)?.[1] ?? ""
}

function B(e) {
  let t = C(e).replace(/\+\d{1,4}\b/g, " ").replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
  return ["us", "usa", "u s", "u s a", "united states of america"].includes(t) ? "united states" :
    "ca" === t ? "canada" : t
}

function q(e) {
  if (!e) return "";
  let t = (0, l.PHONE_COUNTRY_CODE_OPTIONS).find(t => t.value === `+${e}`),
    r = t?.label.replace(t.value, "").split("/")[0].trim();
  return B(r)
}

function U(e, t) {
  let r = $(e),
    n = B(e),
    o = t.map((e, t) => ({
      option: e,
      index: t,
      dialCode: $(e),
      country: B(e)
    })).filter(e => n ? e.country === n && (!r || e.dialCode === r) : !!r && e.dialCode === r);
  if (0 === o.length) return -1;
  if (1 === o.length) return o[0].index;
  if (!n) {
    let e = q(r);
    if (!e) return -1;
    let t = o.filter(t => t.country === e);
    return 1 === t.length ? t[0].index : -1
  }
  let i = (0, s.findClosestStringId)(m(e), o.map(({
    option: e
  }) => e));
  return o[i]?.index ?? o[0].index
}

function H(e) {
  let t = e.$input;
  return A(t?.getAttribute?.("name"))
}

function Y(e) {
  let t = d.get(H(e));
  if (void 0 !== t) return t;
  let r = d.get(A(e.label));
  return r ?? null
}

function z(e) {
  let t = [],
    r = [];
  e.forEach((e, n) => {
    let o = Y(e);
    if (null === o) {
      r.push(e);
      return
    }
    t.push({
      rule: e,
      order: o,
      index: n
    })
  }), t.sort((e, t) => e.order - t.order || e.index - t.index);
  let n = r.filter(e => {
      let t = e.$input;
      return "phonecountrycode" === A(e.label) || F(t?.id || t?.getAttribute?.("id") || void 0)
    }),
    o = r.filter(e => !n.includes(e));
  for (let e of n) {
    let t = o.findLastIndex(e => "phonenumber" === A(e.label));
    o.splice(t + 1, 0, e)
  }
  return [...t.map(({
    rule: e
  }) => e), ...o]
}
let V = new Set(["address2", "addressline2", "address3", "addressline3"]);

function W(e) {
  return V.has(H(e)) || V.has(A(e.label))
}

function G(e) {
  return W(e)
}
let K = new Set(["city", "townorcity", "state", "stateprovince", "province", "region2",
    "postalcode", "zipcode", "zip", "county", "region1"
  ]),
  X = new Set(["postalcode", "zipcode", "zip"]),
  J = new Set(["city", "townorcity"]);

function Q(e) {
  return X.has(H(e)) || X.has(A(e.label))
}

function Z(e) {
  return J.has(H(e)) || J.has(A(e.label))
}

function ee(e) {
  return K.has(H(e)) || K.has(A(e.label)) || W(e)
}

function et(e) {
  let t = e.trim().toLowerCase(),
    r = e.trim().toUpperCase();
  if (a.STATE_MAP[r]) return r;
  let n = Object.entries(a.STATE_MAP).find(([, e]) => e.toLowerCase() === t);
  return n?.[0] ?? ""
}

function er(e) {
  let t = m(e);
  if (!t.includes(",")) return {};
  let [r, n] = t.split(",").map(e => e.trim());
  if (!r || !n) return {};
  let o = et(n);
  return o ? {
    city: r,
    state: o
  } : {}
}

function en(e, t) {
  let r = m(e);
  if (!r) return [];
  let n = [r];
  if (k(t)) {
    let e = r.split(",")[0]?.trim();
    e && n.push(e)
  }
  if ("city" === t) {
    let e = er(r).city;
    e && n.push(e)
  }
  if ("region2" === t) {
    let e = et(r);
    e && n.push(e, a.STATE_MAP[e])
  }
  if ("postalCode" === t) {
    let e = r.match(/^\d{5}/)?.[0];
    e && n.push(e)
  }
  return [...new Set(n.map(e => e.trim()).filter(Boolean))]
}

function eo(e) {
  return !!e && (c.has(e) || k(e))
}

function ei(e, t, r) {
  let n = C(e),
    o = C(t);
  if (!n || !o) return !1;
  if (n === o) return !0;
  if (T(r)) return M(n, o);
  if ("city" === r) return o.startsWith(`${n},`);
  if ("postalCode" === r) return o.startsWith(n);
  if (k(r)) {
    let e = n.split(",").map(e => e.trim()).filter(Boolean);
    if (e.length >= 3) {
      let [t, ...r] = e, n = r.filter(e => !P(e));
      return (o.startsWith(`${t},`) || o.startsWith(`${t} `)) && n.every(e => o.includes(e))
    }
    return o.startsWith(`${n},`) || o.startsWith(`${n} `)
  }
  return !1
}

function ea(e) {
  let t = e.toLowerCase(),
    r = et(t);
  return r ? (0, a.STATE_MAP)[r].toLowerCase() : _.get(t) ?? t
}

function el(e) {
  return m(e).replace(/\bu\.?\s*s\.?\s*a\.?\b/gi, " usa ").replace(/\bu\.?\s*s\.?\b/gi, " us ")
    .split(/[^a-zA-Z0-9]+/).map(e => e.trim()).filter(Boolean).map(ea).filter(e => !O.has(e))
}

function es(e, t) {
  let r = new Map;
  for (let e of t) r.set(e, (r.get(e) ?? 0) + 1);
  let n = 0;
  for (let t of e) {
    let e = r.get(t) ?? 0;
    0 !== e && (n += 1, r.set(t, e - 1))
  }
  return n
}

function eu(e) {
  return e.find(e => /^\d+[a-z]?$/.test(e)) ?? ""
}

function ec(e, t) {
  let r = el(e);
  if (r.length < 3) return -1;
  let n = eu(r);
  if (!n) return -1;
  let o = r.filter(e => L.has(e)),
    i = r.length <= 3 ? 1 : .75,
    a = -1,
    l = 0,
    s = 0;
  for (let e = 0; e < t.length; e++) {
    let i = el(t[e]);
    if (!i.includes(n) || o.length > 0 && !o.some(e => i.includes(e))) continue;
    let u = es(r, i);
    if (u < Math.min(3, r.length)) continue;
    let c = u / r.length;
    (c > l || c === l && u > s) && (a = e, l = c, s = u)
  }
  return l >= i ? a : -1
}

function ed(e, t, r) {
  let n = t.map(m);
  if (!n.length) return -1;
  if (F(r)) return U(e, n);
  if ("major" === A(r)) {
    let t = C(e);
    return t ? n.findIndex(e => C(e) === t) : -1
  }
  if (T(r)) {
    let t = ep(e);
    if (!t) return -1;
    let r = n.map((e, t) => ({
      option: e,
      index: t
    })).filter(({
      option: e
    }) => M(t, e));
    return 1 === r.length ? r[0].index : -1
  }
  if (!eo(r)) return (0, s.findClosestStringId)(m(e), n);
  if (k(r) && 1 === n.length && n[0] && D(e)) return 0;
  if (k(r) && n.length > 1 && !D(e)) return -1;
  let o = en(e, r);
  for (let e of o) {
    let t = n.findIndex(t => ei(e, t, r));
    if (t >= 0) return t
  }
  if (k(r)) {
    let t = ec(e, n);
    if (t >= 0) return t
  }
  return -1
}

function ef(e, t) {
  let r = e.$input,
    n = F(e.label) ? e.label : r?.getAttribute?.("name") || r?.id || r?.getAttribute?.("id") || e
    .label;
  if (!F(n)) return !0;
  let o = Array.isArray(e.options) ? e.options : [];
  return o.length > 0 && ed(t, o, n) >= 0
}

function ep(e) {
  let t = m(e);
  if (!t) return null;
  let r = N(t);
  return ["canada", "ca"].includes(r) ? "Canada" : ["united states", "united states of america",
      "us", "usa", "u s", "u s a"
    ].includes(r) ? "United States" : ["united kingdom", "great britain", "uk", "gb", "u k", "g b"]
    .includes(r) ? "United Kingdom" : t
}

function em(e) {
  if (e.label?.replace(/\*/g, "").trim().toLowerCase() !== "country") return !1;
  let t = e.$input?.getAttribute?.("name"),
    r = e.$input?.id || e.$input?.getAttribute?.("id");
  return "country" === t || "country-12" === r
}

function eh(e) {
  return e.filter(e => !em(e))
}

function eg(e, t) {
  return em(e) && !!m(t)
}

function eb(e) {
  return e.find(em) ?? null
}

function ey(e) {
  let t = ["Earliest Available Date", "earliestAvailableDate", "earliest_available_date",
    "Available Date", "availableDate", "available_date", "Desired Start Date", "desiredStartDate",
    "desired_start_date", "Hiring Date", "hiringDate", "hiring_date", "Start Date", "startDate",
    "start_date"
  ];
  return h(e.regular ?? {}, t) ?? h(e.profileData ?? {}, t) ?? h(e.profile_data ?? {}, t)
}

function ev(e) {
  if (Array.isArray(e)) return e.some(ev);
  let t = m(e).replace(/[./_-]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  return !!t && ("yes" === t || "true" === t || "1" === t || t.includes("hispanic") || t.includes(
    "latino"))
}

function ew(e) {
  let t = ["Hispanic", "hispanic", "Hispanic or Latino", "hispanicOrLatino", "hispanic_or_latino"],
    r = ["Ethnicity", "ethnicity", "race", "Race"],
    n = h(e.regular ?? {}, t) ?? h(e.profileData ?? {}, t) ?? h(e.profile_data ?? {}, t) ?? h(e
      .regular ?? {}, r) ?? h(e.profileData ?? {}, r) ?? h(e.profile_data ?? {}, r);
  return ev(n) ? [R] : void 0
}

function eS(e, t) {
  let r = t?.location;
  if (!r || "object" != typeof r) return [];
  e.regular = e.regular || {};
  let n = e.regular,
    o = [{
      regularKey: "City",
      existingKeys: ["City", "city", "Town or City", "townOrCity"],
      locationKeys: ["city"]
    }, {
      regularKey: "Postal Code",
      existingKeys: ["Postal Code", "Post Code", "postalCode", "postCode", "ZIP Code", "Zip Code",
        "zipCode", "zipcode", "zip"
      ],
      locationKeys: ["postCode", "postalCode", "postal_code", "zipCode", "zipcode", "zip"]
    }],
    i = [];
  for (let e of o) {
    if (h(n, e.existingKeys)) continue;
    let t = h(r, e.locationKeys);
    m(t) && (n[e.regularKey] = t, i.push(e.regularKey))
  }
  return i
}

function eE(e) {
  if (e.regular || (e.regular = {}), !m(e.regular["Earliest Available Date"])) {
    let t = ey(e);
    void 0 !== t && (e.regular["Earliest Available Date"] = t)
  }
  if (!m(e.regular.Ethnicity)) {
    let t = ew(e);
    t && (e.regular.Ethnicity = t)
  }
  if (e.regular) {
    let t = er(e.regular.City);
    t.city && (e.regular.City = t.city), t.state && (e.regular.State = t.state)
  }
  if (e.workExperience && e.workExperience.length > 0)
    for (let t of e.workExperience) {
      if (!t) continue;
      t["Employer Name"] || (t["Employer Name"] = t.Employer ?? t.Company ?? t["Company Name"] ?? t
        .Organization ?? t.organization), t["Job Title"] || (t["Job Title"] = t.Title ?? t[
        "Your Last Position Title"] ?? t.Position ?? t.Role ?? t.job_title ?? t.jobTitle);
      let e = t.dates ?? t.Dates,
        r = p(t.isCurrent ?? t["Current Job"] ?? e?.is_current ?? e?.isCurrent);
      r && (t["Current Job"] = ["true"]);
      let n = f(t.Start ?? t["Start Date"] ?? t.start_date ?? t.startDate ?? e?.start_date ?? e
        ?.startDate);
      if (n && (t["Start Date"] = n), r) delete t.End, delete t["End Date"];
      else {
        let r = f(t.End ?? t["End Date"] ?? t.completion_date ?? t.completionDate ?? e
          ?.completion_date ?? e?.completionDate);
        r && (t["End Date"] = r)
      }
    }
  if (e.education && e.education.length > 0)
    for (let t of e.education) {
      if (!t) continue;
      let e = t.dates ?? t.Dates;
      if (E(t, "School", ["School", "School Name", "School or University", "University",
          "University Name", "Institution", "College", "organization"
        ]), E(t, "School or University", ["School", "School Name", "University", "University Name",
          "Institution", "College", "organization"
        ]), E(t, "Degree", ["Degree", "Degree Type", "Education Level", "Highest Degree",
          "Accreditation", "accreditation"
        ]), E(t, "Major", ["Major", "Major or Area of Concentration", "Field of Study", "Study",
          "Discipline", "rawMajor"
        ]), !m(t.Major)) {
        let e = x(h(t, ["accreditation", "Accreditation", "Degree", "Degree Type"]));
        e && (t.Major = e)
      }
      if (E(t, "GPA", ["GPA", "gpa"]), m(t.GPA) && (t.GPA = (0, u.normalizeGpaValue)(t.GPA)), t
        ?.Start && (t.From = t.Start), t?.End && (t.To = t.End), t?.School && (t[
          "School or University"] = t.School), t?.Study && (t["Field of Study"] = t.Study), t
        .From || (t.From = t["Start Date"] ?? t.start_date ?? t.startDate ?? e?.start_date ?? e
          ?.startDate), t.To || (t.To = t["End Date"] ?? t.completion_date ?? t.completionDate ?? e
          ?.completion_date ?? e?.completionDate), !m(t["Start Date"])) {
        let r = h(t, ["From", "Start", "start_date", "startDate"]),
          n = f(r ?? e?.start_date ?? e?.startDate);
        n && (t["Start Date"] = n)
      }
      if (!m(t["End Date"])) {
        let r = h(t, ["To", "End", "completion_date", "completionDate"]),
          n = f(r ?? e?.completion_date ?? e?.completionDate);
        n && (t["End Date"] = n)
      }
    }
  return e
}

