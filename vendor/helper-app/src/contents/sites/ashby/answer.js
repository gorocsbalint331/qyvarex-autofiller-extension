/**
 * Parcel module id: Cpwm9
 * Resolved path: src/contents/sites/ashby/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "parseAshbyMonthYear", () => y), n.export(r,
  "normalizeAshbyDateInputValue", () => v), n.export(r, "formatAnswer", () => x);
var o = e("~contents/methods/cover-letter");
let i = {
    jan: "1",
    january: "1",
    feb: "2",
    february: "2",
    mar: "3",
    march: "3",
    apr: "4",
    april: "4",
    may: "5",
    jun: "6",
    june: "6",
    jul: "7",
    july: "7",
    aug: "8",
    august: "8",
    sep: "9",
    sept: "9",
    september: "9",
    oct: "10",
    october: "10",
    nov: "11",
    november: "11",
    dec: "12",
    december: "12"
  },
  a = new Set(["present", "current", "now", "till now", "to present", "to-present", "to current",
    "to-current", "to now", "to-now"
  ]),
  l = ["School", "school", "schoolName", "School Name", "Institution", "Institution Name",
    "University", "College", "organization"
  ],
  s = ["Degree", "degree", "Accreditation", "accreditation"],
  u = ["Field of Study", "Field Of Study", "fieldOfStudy", "Major", "major", "Study", "study",
    "Discipline", "discipline"
  ],
  c = ["Start Date - Month"],
  d = ["Start Date - Year"],
  f = ["End Date - Month"],
  p = ["End Date - Year"];

function m(e, t) {
  for (let r of t) {
    let t = e?.[r];
    if (null != t) {
      if (Array.isArray(t)) {
        let e = t.find(e => "" !== String(e ?? "").trim());
        if (null != e) return e;
        continue
      }
      if ("" !== String(t).trim()) return t
    }
  }
  return ""
}

function h(e) {
  let t = String(e ?? "").trim();
  if (!t) return "";
  if (/^\d{1,2}$/.test(t)) {
    let e = Number(t);
    if (e >= 1 && e <= 12) return String(e)
  }
  return i[t.toLowerCase()] ?? ""
}

function g(e) {
  if (!0 === e || 1 === e) return !0;
  let t = String(e ?? "").trim().toLowerCase();
  return !!t && (a.has(t) || t.includes("present"))
}

function b(e) {
  if (!0 === e || 1 === e) return !0;
  let t = String(e ?? "").trim().toLowerCase();
  return ["true", "1", "yes", "y"].includes(t)
}

function y(e) {
  let t = String(e ?? "").trim(),
    r = {
      month: "",
      year: "",
      present: !1
    };
  if (!t) return r;
  if (g(t)) return {
    month: "",
    year: "",
    present: !0
  };
  let n = t.match(/^(\d{4})[\/\-.](\d{1,2})(?:[\/\-.]\d{1,2})?$/);
  return n ? {
    year: n[1],
    month: h(n[2]),
    present: !1
  } : (n = t.match(/^(\d{1,2})[\/\-.](\d{4})$/)) || (n = t.match(
    /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b[\s,\/\-.]*(\d{4})/i
    )) ? {
    month: h(n[1]),
    year: n[2],
    present: !1
  } : (n = t.match(
    /(\d{4})[\s,\/\-.]*\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/i
    )) ? {
    year: n[1],
    month: h(n[2]),
    present: !1
  } : (n = t.match(/\b(\d{4})\b/)) ? {
    month: "",
    year: n[1],
    present: !1
  } : r
}

function v(e) {
  let t = String(e ?? "").trim();
  if (!w(t)) return t;
  let r = y(t);
  return r.month && r.year && !r.present ? `${r.year}-${r.month.padStart(2,"0")}-01` : t
}

function w(e) {
  return /\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/i
    .test(e)
}

function S(e, t, r) {
  return {
    month: String(m(e, t) ?? "").trim(),
    year: String(m(e, r) ?? "").trim()
  }
}

function E(e) {
  let t = {
      ...e
    },
    r = String(m(t, l) ?? "").trim(),
    n = String(m(t, s) ?? "").trim(),
    o = String(m(t, u) ?? "").trim(),
    i = S(t, c, d),
    a = S(t, f, p),
    h = m(t, ["Current", "current", "isCurrent", "is_current"]) ?? "",
    y = b(h) || g(h);
  return r && (t.School = r), n && (t.Degree = n), o && (t["Field of Study"] = o, t.Major = o), t[
    "Start Date - Month"] = i.month, t["Start Date - Year"] = i.year, y ? (t["End Date - Month"] =
    "", t["End Date - Year"] = "") : (t["End Date - Month"] = a.month, t["End Date - Year"] = a
    .year), t
}

function x(e, t) {
  let r = (0, o.applyCoverLetterTextToAnswer)(e, t);
  return Array.isArray(r.education) && (r.education = r.education.filter(e => e && "object" ==
    typeof e).map(e => E(e))), r
}

