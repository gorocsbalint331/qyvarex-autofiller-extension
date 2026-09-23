// @ts-nocheck
/**
 * Oracle Cloud — answer formatting and select/country helpers.
 */

import * as dayjs from "dayjs";
import * as constants from "../../../constants.ts";
import * as phoneCountryCode from "../../../constants/phone-country-code.js";
import * as coreUtils from "../../../core/utils.js";
import * as gpa from "../../../utils/gpa.js";
const i = { default: dayjs };
let c = /* @__PURE__ */ new Set([
    "country",
    "address1",
    "addressLine1",
    "city",
    "region2",
    "postalCode",
    "region1",
  ]),
  d = /* @__PURE__ */ new Map([
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
    ["region1", 7],
  ]);
function f(e) {
  if ("string" != typeof e) return;
  let t = e.trim();
  if (!t) return;
  if (/^\d{4}-\d{2}$/.test(t)) return t;
  if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t.slice(0, 7);
  let r = i.default(t);
  return r.isValid() ? r.format("YYYY-MM") : t;
}
function p(e) {
  if (true === e || 1 === e) return true;
  if ("string" == typeof e) {
    let t = e.trim().toLowerCase();
    return "true" === t || "1" === t || "yes" === t;
  }
  return false;
}
function m(e) {
  let t = Array.isArray(e) ? e[0] : e;
  return "string" == typeof t ? t.trim() : "";
}
function h(e, t) {
  for (let r of t) {
    let t2 = e?.[r],
      n = m(t2);
    if (n) return n;
    if (null != t2 && "object" != typeof t2 && String(t2).trim())
      return String(t2).trim();
  }
}
function g(e, t) {
  for (let r of e) {
    if (!r) continue;
    let e2 = h(r, t),
      n = m(e2);
    if (n) return n;
  }
  return "";
}
function b(e, t) {
  let r = m(t);
  !r || e.includes(r) || e.push(r);
}
function normalizeOracleProfileLinkUrl(e) {
  let t = m(e);
  if (!t || /\s/.test(t)) return "";
  let r = /^[a-z][a-z0-9+.-]*:\/\//i.test(t),
    n = r ? t : `https://${t}`;
  try {
    let e2 = new URL(n);
    if (
      ("http:" !== e2.protocol && "https:" !== e2.protocol) ||
      !e2.hostname.includes(".")
    )
      return "";
    return n;
  } catch {
    return "";
  }
}
function v(e, t) {
  b(e, normalizeOracleProfileLinkUrl(t));
}
function getOracleProfileLinkValues(e, t) {
  let r = e?.regular ?? {},
    n = e?.profileData ?? {},
    o2 = e?.profile_data ?? {},
    i2 = t?.personalInfo ?? {},
    a2 = [i2, t, n, o2, r],
    l2 = [];
  return (
    v(
      l2,
      g(a2, [
        "linkedin_link",
        "linkedin_url",
        "linkedinUrl",
        "linkedin",
        "LinkedIn URL",
        "LinkedIn",
      ]),
    ),
    v(
      l2,
      g(a2, [
        "github_link",
        "github_url",
        "githubUrl",
        "github",
        "GitHub URL",
        "Github URL",
        "GitHub",
        "Github",
      ]),
    ),
    v(
      l2,
      g(a2, [
        "personal_site_link",
        "personal_site",
        "personalSite",
        "websiteUrl",
        "website_url",
        "website",
        "portfolioUrl",
        "portfolio_url",
        "Portfolio URL",
        "Website URL",
        "Personal Website",
        "Website",
      ]),
    ),
    l2
  );
}
function applyOracleProfileLinkAnswers(e, t) {
  e.regular || (e.regular = {});
  let r = getOracleProfileLinkValues(e, t);
  return (
    r.forEach((t2, r2) => {
      e.regular[`Link ${r2 + 1}`] = t2;
    }),
    r
  );
}
function E(e, t, r) {
  if (m(e[t])) return;
  let n = h(e, r);
  void 0 !== n && (e[t] = n);
}
function x(e) {
  let t = m(e);
  if (!t) return;
  let r = t.match(
      /\b(?:associate|bachelor|master|doctor(?:ate)?|ph\.?\s*d\.?|juris\s+doctor|j\.?\s*d\.?)\b[\s\S]*?\bin\s+(.+)$/i,
    ),
    n = r?.[1]
      ?.replace(/\s*\([^)]*\)\s*$/g, "")
      .replace(/\s+/g, " ")
      .trim();
  return n || void 0;
}
function C(e) {
  return m(e)
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ", ")
    .trim()
    .toLowerCase();
}
function A(e) {
  return m(e)
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
}
function k(e) {
  let t = A(e);
  return "address1" === t || "addressline1" === t;
}
function T(e) {
  return "country" === A(e);
}
function F(e) {
  return [
    "countrycodesdropdownphonenumber",
    "phonecountrycode",
    "countryphonecode",
  ].includes(A(e));
}
function getOracleLinkRuleIndex(e) {
  let t = m(e).match(/^link\s+(\d+)$/i);
  if (!t) return null;
  let r = Number(t[1]);
  return Number.isInteger(r) && r > 0 ? r : null;
}
function isOracleLinkRule(e) {
  return null !== getOracleLinkRuleIndex(e.label);
}
function D(e) {
  let t = C(e),
    r = t
      .split(",")
      .map((e2) => e2.trim())
      .filter(Boolean).length;
  if (r >= 3) return true;
  let n = t.split(/[^a-z0-9]+/).filter(Boolean),
    o2 = n.some((e2) => !!et(e2)),
    i2 = n.some((e2) => /^\d{5}(?:\d{4})?$/.test(e2));
  return o2 && i2;
}
function P(e) {
  return [
    "canada",
    "united states",
    "united states of america",
    "us",
    "usa",
    "u.s.",
    "u.s.a.",
  ].includes(e);
}
let _ = /* @__PURE__ */ new Map([
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
    ["ter", "terrace"],
  ]),
  L = /* @__PURE__ */ new Set([
    "alley",
    "avenue",
    "boulevard",
    "circle",
    "court",
    "drive",
    "highway",
    "lane",
    "parkway",
    "place",
    "road",
    "square",
    "street",
    "terrace",
  ]),
  R = "I am Hispanic or Latino.",
  O = /* @__PURE__ */ new Set([
    "canada",
    "us",
    "usa",
    "united",
    "states",
    "america",
  ]);
function M(e, t) {
  let r = resolveOracleCountryValue(e),
    n = resolveOracleCountryValue(t);
  if (!r || !n) return false;
  let o2 = N(r),
    i2 = N(n);
  return !!o2 && !!i2 && o2 === i2;
}
function N(e) {
  return m(e)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}
function $(e) {
  return m(e).match(/\+(\d{1,4})\b/)?.[1] ?? "";
}
function B(e) {
  let t = C(e)
    .replace(/\+\d{1,4}\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
  return ["us", "usa", "u s", "u s a", "united states of america"].includes(t)
    ? "united states"
    : "ca" === t
      ? "canada"
      : t;
}
function q(e) {
  if (!e) return "";
  let t = phoneCountryCode.PHONE_COUNTRY_CODE_OPTIONS.find(
      (t2) => t2.value === `+${e}`,
    ),
    r = t?.label.replace(t.value, "").split("/")[0].trim();
  return B(r);
}
function U(e, t) {
  let r = $(e),
    n = B(e),
    o2 = t
      .map((e2, t2) => ({
        option: e2,
        index: t2,
        dialCode: $(e2),
        country: B(e2),
      }))
      .filter((e2) =>
        n
          ? e2.country === n && (!r || e2.dialCode === r)
          : !!r && e2.dialCode === r,
      );
  if (0 === o2.length) return -1;
  if (1 === o2.length) return o2[0].index;
  if (!n) {
    let e2 = q(r);
    if (!e2) return -1;
    let t2 = o2.filter((t3) => t3.country === e2);
    return 1 === t2.length ? t2[0].index : -1;
  }
  let i2 = coreUtils.findClosestStringId(
    m(e),
    o2.map(({ option: e2 }) => e2),
  );
  return o2[i2]?.index ?? o2[0].index;
}
function H(e) {
  let t = e.$input;
  return A(t?.getAttribute?.("name"));
}
function Y(e) {
  let t = d.get(H(e));
  if (void 0 !== t) return t;
  let r = d.get(A(e.label));
  return r ?? null;
}
function orderOracleRegularRules(e) {
  let t = [],
    r = [];
  (e.forEach((e2, n2) => {
    let o3 = Y(e2);
    if (null === o3) {
      r.push(e2);
      return;
    }
    t.push({
      rule: e2,
      order: o3,
      index: n2,
    });
  }),
    t.sort((e2, t2) => e2.order - t2.order || e2.index - t2.index));
  let n = r.filter((e2) => {
      let t2 = e2.$input;
      return (
        "phonecountrycode" === A(e2.label) ||
        F(t2?.id || t2?.getAttribute?.("id") || void 0)
      );
    }),
    o2 = r.filter((e2) => !n.includes(e2));
  for (let e2 of n) {
    let t2 = o2.findLastIndex((e3) => "phonenumber" === A(e3.label));
    o2.splice(t2 + 1, 0, e2);
  }
  return [...t.map(({ rule: e2 }) => e2), ...o2];
}
let V = /* @__PURE__ */ new Set([
  "address2",
  "addressline2",
  "address3",
  "addressline3",
]);
function W(e) {
  return V.has(H(e)) || V.has(A(e.label));
}
function G(e) {
  return W(e);
}
let K = /* @__PURE__ */ new Set([
    "city",
    "townorcity",
    "state",
    "stateprovince",
    "province",
    "region2",
    "postalcode",
    "zipcode",
    "zip",
    "county",
    "region1",
  ]),
  X = /* @__PURE__ */ new Set(["postalcode", "zipcode", "zip"]),
  J = /* @__PURE__ */ new Set(["city", "townorcity"]);
function isOraclePostalCodeDependentRule(e) {
  return X.has(H(e)) || X.has(A(e.label));
}
function isOracleCityDependentRule(e) {
  return J.has(H(e)) || J.has(A(e.label));
}
function isOracleAddressDependentRule(e) {
  return K.has(H(e)) || K.has(A(e.label)) || W(e);
}
function et(e) {
  let t = e.trim().toLowerCase(),
    r = e.trim().toUpperCase();
  if (constants.STATE_MAP[r]) return r;
  let n = Object.entries(constants.STATE_MAP).find(
    ([, e2]) => e2.toLowerCase() === t,
  );
  return n?.[0] ?? "";
}
function er(e) {
  let t = m(e);
  if (!t.includes(",")) return {};
  let [r, n] = t.split(",").map((e2) => e2.trim());
  if (!r || !n) return {};
  let o2 = et(n);
  return o2
    ? {
        city: r,
        state: o2,
      }
    : {};
}
function en(e, t) {
  let r = m(e);
  if (!r) return [];
  let n = [r];
  if (k(t)) {
    let e2 = r.split(",")[0]?.trim();
    e2 && n.push(e2);
  }
  if ("city" === t) {
    let e2 = er(r).city;
    e2 && n.push(e2);
  }
  if ("region2" === t) {
    let e2 = et(r);
    e2 && n.push(e2, constants.STATE_MAP[e2]);
  }
  if ("postalCode" === t) {
    let e2 = r.match(/^\d{5}/)?.[0];
    e2 && n.push(e2);
  }
  return [...new Set(n.map((e2) => e2.trim()).filter(Boolean))];
}
function isOracleAddressSelectField(e) {
  return !!e && (c.has(e) || k(e));
}
function ei(e, t, r) {
  let n = C(e),
    o2 = C(t);
  if (!n || !o2) return false;
  if (n === o2) return true;
  if (T(r)) return M(n, o2);
  if ("city" === r) return o2.startsWith(`${n},`);
  if ("postalCode" === r) return o2.startsWith(n);
  if (k(r)) {
    let e2 = n
      .split(",")
      .map((e3) => e3.trim())
      .filter(Boolean);
    if (e2.length >= 3) {
      let [t2, ...r2] = e2,
        n2 = r2.filter((e3) => !P(e3));
      return (
        (o2.startsWith(`${t2},`) || o2.startsWith(`${t2} `)) &&
        n2.every((e3) => o2.includes(e3))
      );
    }
    return o2.startsWith(`${n},`) || o2.startsWith(`${n} `);
  }
  return false;
}
function ea(e) {
  let t = e.toLowerCase(),
    r = et(t);
  return r ? constants.STATE_MAP[r].toLowerCase() : (_.get(t) ?? t);
}
function el(e) {
  return m(e)
    .replace(/\bu\.?\s*s\.?\s*a\.?\b/gi, " usa ")
    .replace(/\bu\.?\s*s\.?\b/gi, " us ")
    .split(/[^a-zA-Z0-9]+/)
    .map((e2) => e2.trim())
    .filter(Boolean)
    .map(ea)
    .filter((e2) => !O.has(e2));
}
function es(e, t) {
  let r = /* @__PURE__ */ new Map();
  for (let e2 of t) r.set(e2, (r.get(e2) ?? 0) + 1);
  let n = 0;
  for (let t2 of e) {
    let e2 = r.get(t2) ?? 0;
    0 !== e2 && ((n += 1), r.set(t2, e2 - 1));
  }
  return n;
}
function eu(e) {
  return e.find((e2) => /^\d+[a-z]?$/.test(e2)) ?? "";
}
function ec(e, t) {
  let r = el(e);
  if (r.length < 3) return -1;
  let n = eu(r);
  if (!n) return -1;
  let o2 = r.filter((e2) => L.has(e2)),
    i2 = r.length <= 3 ? 1 : 0.75,
    a2 = -1,
    l2 = 0,
    s2 = 0;
  for (let e2 = 0; e2 < t.length; e2++) {
    let i3 = el(t[e2]);
    if (!i3.includes(n) || (o2.length > 0 && !o2.some((e3) => i3.includes(e3))))
      continue;
    let u2 = es(r, i3);
    if (u2 < Math.min(3, r.length)) continue;
    let c2 = u2 / r.length;
    (c2 > l2 || (c2 === l2 && u2 > s2)) && ((a2 = e2), (l2 = c2), (s2 = u2));
  }
  return l2 >= i2 ? a2 : -1;
}
function findOracleSelectOptionIndex(e, t, r) {
  let n = t.map(m);
  if (!n.length) return -1;
  if (F(r)) return U(e, n);
  if ("major" === A(r)) {
    let t2 = C(e);
    return t2 ? n.findIndex((e2) => C(e2) === t2) : -1;
  }
  if (T(r)) {
    let t2 = resolveOracleCountryValue(e);
    if (!t2) return -1;
    let r2 = n
      .map((e2, t3) => ({
        option: e2,
        index: t3,
      }))
      .filter(({ option: e2 }) => M(t2, e2));
    return 1 === r2.length ? r2[0].index : -1;
  }
  if (!isOracleAddressSelectField(r))
    return coreUtils.findClosestStringId(m(e), n);
  if (k(r) && 1 === n.length && n[0] && D(e)) return 0;
  if (k(r) && n.length > 1 && !D(e)) return -1;
  let o2 = en(e, r);
  for (let e2 of o2) {
    let t2 = n.findIndex((t3) => ei(e2, t3, r));
    if (t2 >= 0) return t2;
  }
  if (k(r)) {
    let t2 = ec(e, n);
    if (t2 >= 0) return t2;
  }
  return -1;
}
function canFillOracleSelectRule(e, t) {
  let r = e.$input,
    n = F(e.label)
      ? e.label
      : r?.getAttribute?.("name") ||
        r?.id ||
        r?.getAttribute?.("id") ||
        e.label;
  if (!F(n)) return true;
  let o2 = Array.isArray(e.options) ? e.options : [];
  return o2.length > 0 && findOracleSelectOptionIndex(t, o2, n) >= 0;
}
function resolveOracleCountryValue(e) {
  let t = m(e);
  if (!t) return null;
  let r = N(t);
  return ["canada", "ca"].includes(r)
    ? "Canada"
    : [
          "united states",
          "united states of america",
          "us",
          "usa",
          "u s",
          "u s a",
        ].includes(r)
      ? "United States"
      : ["united kingdom", "great britain", "uk", "gb", "u k", "g b"].includes(
            r,
          )
        ? "United Kingdom"
        : t;
}
function em(e) {
  if (e.label?.replace(/\*/g, "").trim().toLowerCase() !== "country")
    return false;
  let t = e.$input?.getAttribute?.("name"),
    r = e.$input?.id || e.$input?.getAttribute?.("id");
  return "country" === t || "country-12" === r;
}
function excludeOracleProfileCountryRules(e) {
  return e.filter((e2) => !em(e2));
}
function shouldSkipOraclePrefilledCountryFill(e, t) {
  return em(e) && !!m(t);
}
function getOracleProfileCountryRule(e) {
  return e.find(em) ?? null;
}
function ey(e) {
  let t = [
    "Earliest Available Date",
    "earliestAvailableDate",
    "earliest_available_date",
    "Available Date",
    "availableDate",
    "available_date",
    "Desired Start Date",
    "desiredStartDate",
    "desired_start_date",
    "Hiring Date",
    "hiringDate",
    "hiring_date",
    "Start Date",
    "startDate",
    "start_date",
  ];
  return (
    h(e.regular ?? {}, t) ??
    h(e.profileData ?? {}, t) ??
    h(e.profile_data ?? {}, t)
  );
}
function ev(e) {
  if (Array.isArray(e)) return e.some(ev);
  let t = m(e)
    .replace(/[./_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  return (
    !!t &&
    ("yes" === t ||
      "true" === t ||
      "1" === t ||
      t.includes("hispanic") ||
      t.includes("latino"))
  );
}
function ew(e) {
  let t = [
      "Hispanic",
      "hispanic",
      "Hispanic or Latino",
      "hispanicOrLatino",
      "hispanic_or_latino",
    ],
    r = ["Ethnicity", "ethnicity", "race", "Race"],
    n =
      h(e.regular ?? {}, t) ??
      h(e.profileData ?? {}, t) ??
      h(e.profile_data ?? {}, t) ??
      h(e.regular ?? {}, r) ??
      h(e.profileData ?? {}, r) ??
      h(e.profile_data ?? {}, r);
  return ev(n) ? [R] : void 0;
}
function applyOracleAutofillLocationFallbacks(e, t) {
  let r = t?.location;
  if (!r || "object" != typeof r) return [];
  e.regular = e.regular || {};
  let n = e.regular,
    o2 = [
      {
        regularKey: "City",
        existingKeys: ["City", "city", "Town or City", "townOrCity"],
        locationKeys: ["city"],
      },
      {
        regularKey: "Postal Code",
        existingKeys: [
          "Postal Code",
          "Post Code",
          "postalCode",
          "postCode",
          "ZIP Code",
          "Zip Code",
          "zipCode",
          "zipcode",
          "zip",
        ],
        locationKeys: [
          "postCode",
          "postalCode",
          "postal_code",
          "zipCode",
          "zipcode",
          "zip",
        ],
      },
    ],
    i2 = [];
  for (let e2 of o2) {
    if (h(n, e2.existingKeys)) continue;
    let t2 = h(r, e2.locationKeys);
    m(t2) && ((n[e2.regularKey] = t2), i2.push(e2.regularKey));
  }
  return i2;
}
function formatAnswer(e) {
  if (
    (e.regular || (e.regular = {}), !m(e.regular["Earliest Available Date"]))
  ) {
    let t = ey(e);
    void 0 !== t && (e.regular["Earliest Available Date"] = t);
  }
  if (!m(e.regular.Ethnicity)) {
    let t = ew(e);
    t && (e.regular.Ethnicity = t);
  }
  if (e.regular) {
    let t = er(e.regular.City);
    (t.city && (e.regular.City = t.city),
      t.state && (e.regular.State = t.state));
  }
  if (e.workExperience && e.workExperience.length > 0)
    for (let t of e.workExperience) {
      if (!t) continue;
      (t["Employer Name"] ||
        (t["Employer Name"] =
          t.Employer ??
          t.Company ??
          t["Company Name"] ??
          t.Organization ??
          t.organization),
        t["Job Title"] ||
          (t["Job Title"] =
            t.Title ??
            t["Your Last Position Title"] ??
            t.Position ??
            t.Role ??
            t.job_title ??
            t.jobTitle));
      let e2 = t.dates ?? t.Dates,
        r = p(
          t.isCurrent ?? t["Current Job"] ?? e2?.is_current ?? e2?.isCurrent,
        );
      r && (t["Current Job"] = ["true"]);
      let n = f(
        t.Start ??
          t["Start Date"] ??
          t.start_date ??
          t.startDate ??
          e2?.start_date ??
          e2?.startDate,
      );
      if ((n && (t["Start Date"] = n), r)) (delete t.End, delete t["End Date"]);
      else {
        let r2 = f(
          t.End ??
            t["End Date"] ??
            t.completion_date ??
            t.completionDate ??
            e2?.completion_date ??
            e2?.completionDate,
        );
        r2 && (t["End Date"] = r2);
      }
    }
  if (e.education && e.education.length > 0)
    for (let t of e.education) {
      if (!t) continue;
      let e2 = t.dates ?? t.Dates;
      if (
        (E(t, "School", [
          "School",
          "School Name",
          "School or University",
          "University",
          "University Name",
          "Institution",
          "College",
          "organization",
        ]),
        E(t, "School or University", [
          "School",
          "School Name",
          "University",
          "University Name",
          "Institution",
          "College",
          "organization",
        ]),
        E(t, "Degree", [
          "Degree",
          "Degree Type",
          "Education Level",
          "Highest Degree",
          "Accreditation",
          "accreditation",
        ]),
        E(t, "Major", [
          "Major",
          "Major or Area of Concentration",
          "Field of Study",
          "Study",
          "Discipline",
          "rawMajor",
        ]),
        !m(t.Major))
      ) {
        let e3 = x(
          h(t, ["accreditation", "Accreditation", "Degree", "Degree Type"]),
        );
        e3 && (t.Major = e3);
      }
      if (
        (E(t, "GPA", ["GPA", "gpa"]),
        m(t.GPA) && (t.GPA = gpa.normalizeGpaValue(t.GPA)),
        t?.Start && (t.From = t.Start),
        t?.End && (t.To = t.End),
        t?.School && (t["School or University"] = t.School),
        t?.Study && (t["Field of Study"] = t.Study),
        t.From ||
          (t.From =
            t["Start Date"] ??
            t.start_date ??
            t.startDate ??
            e2?.start_date ??
            e2?.startDate),
        t.To ||
          (t.To =
            t["End Date"] ??
            t.completion_date ??
            t.completionDate ??
            e2?.completion_date ??
            e2?.completionDate),
        !m(t["Start Date"]))
      ) {
        let r = h(t, ["From", "Start", "start_date", "startDate"]),
          n = f(r ?? e2?.start_date ?? e2?.startDate);
        n && (t["Start Date"] = n);
      }
      if (!m(t["End Date"])) {
        let r = h(t, ["To", "End", "completion_date", "completionDate"]),
          n = f(r ?? e2?.completion_date ?? e2?.completionDate);
        n && (t["End Date"] = n);
      }
    }
  return e;
}

export {
  applyOracleAutofillLocationFallbacks,
  applyOracleProfileLinkAnswers,
  canFillOracleSelectRule,
  excludeOracleProfileCountryRules,
  findOracleSelectOptionIndex,
  formatAnswer,
  getOracleLinkRuleIndex,
  getOracleProfileCountryRule,
  getOracleProfileLinkValues,
  isOracleAddressDependentRule,
  isOracleAddressSelectField,
  isOracleCityDependentRule,
  isOracleLinkRule,
  isOraclePostalCodeDependentRule,
  normalizeOracleProfileLinkUrl,
  orderOracleRegularRules,
  resolveOracleCountryValue,
  shouldSkipOraclePrefilledCountryFill,
};
