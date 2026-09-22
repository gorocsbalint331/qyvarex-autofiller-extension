/**
 * Parcel module id: 3lHOC
 * Resolved path: contents/sites/greenhouse/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants -> 6VEjR  =>  _tilde_constants.js
 *   ~utils/string -> ijEFi  =>  _tilde_utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "DEGREE_FALLBACK_OPTIONS", () => a), n.export(r,
    "DISCIPLINE_FALLBACK_OPTIONS", () => l), n.export(r, "generateSchoolNameVariants", () => s), n
  .export(r, "resolveGreenhouseDateInputValue", () => p), n.export(r, "formatAnswer", () => x);
var o = e("~constants"),
  i = e("~utils/string");
let a = ["Associate's Degree", "Bachelor's Degree", "Doctor of Medicine (M.D.)",
    "Doctor of Philosophy (Ph.D.)", "Engineer's Degree", "High School", "Juris Doctor (J.D.)",
    "Master of Business Administration (M.B.A.)", "Master's Degree", "Other"
  ],
  l = ["Accounting", "African Studies", "Agriculture", "Anthropology", "Applied Health Services",
    "Architecture", "Art", "Asian Studies", "Biology", "Business", "Business Administration",
    "Chemistry", "Classical Languages", "Communications & Film", "Computer Science", "Dentistry",
    "Developing Nations", "Discipline Unknown", "Earth Sciences", "Economics", "Education",
    "Electronics", "Engineering", "English Studies", "Environmental Studies", "European Studies",
    "Fashion", "Finance", "Fine Arts", "General Studies", "Health Services", "History",
    "Humanities", "Human Resources Management", "Industrial Arts & Carpentry",
    "Information Systems", "International Relations", "Journalism", "Languages",
    "Latin American Studies", "Law", "Linguistics", "Manufacturing & Mechanics", "Mathematics",
    "Medicine", "Middle Eastern Studies", "Naval Science", "North American Studies",
    "Nuclear Technics", "Operations Research & Strategy", "Organizational Theory", "Other",
    "Philosophy", "Physical Education", "Physical Sciences", "Physics", "Political Science",
    "Psychology", "Public Policy", "Public Service", "Religious Studies",
    "Russian & Soviet Studies", "Scandinavian Studies", "Science", "Social Science",
    "Social Sciences", "Sociology", "Speech", "Statistics & Decision Theory", "Urban Studies",
    "Veterinary Medicine"
  ];

function s(e) {
  let t = new Set,
    r = e.trim();
  if (!r) return [];
  t.add(r);
  let n = [r];
  if (r.startsWith("The ")) {
    let e = r.slice(4).trim();
    t.add(e), n.push(e)
  }
  let o = [" at ", " - ", ", "];
  for (let e of n)
    for (let r of o)
      if (e.includes(r)) {
        for (let n of o)
          if (n !== r) {
            let o = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
              i = e.replace(RegExp(o, "g"), n);
            t.add(i)
          } break
      } return [...Array.from(t).sort((e, t) => e.length - t.length), "Other"]
}
let u = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  c = /^(0?[1-9]|1[0-2])$/;

function d(e) {
  let t = e.trim();
  if (c.test(t)) return t.padStart(2, "0");
  let r = u.indexOf(t);
  return r >= 0 ? String(r + 1).padStart(2, "0") : ""
}

function f(e) {
  let t = e.trim();
  return c.test(t) ? u[Number(t) - 1] || "" : u.includes(t) ? t : ""
}

function p(e, t, r) {
  let n = Array.isArray(t) ? t[0] || "" : t;
  if ("string" != typeof n) return String(n ?? "");
  let o = e.toLowerCase().replace(/\s+/g, " ").trim(),
    i = /\bdate\s+month\b/.test(o);
  if (!i) return n;
  let a = r?.getAttribute?.("maxlength") === "2" || r?.getAttribute?.("placeholder") === "MM" || r
    ?.placeholder === "MM";
  return a ? d(n) || n : f(n) || n
}

function m(e) {
  let t = e.split(",").map(e => e.trim());
  if (t.length < 2) return null;
  let r = t[1].replace(/\./g, "").toUpperCase(),
    n = o.STATE_MAP[r];
  return n ? (t[1] = n, t.join(", ")) : null
}

function h(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

function g(e) {
  return Object.entries(e.regular || {}).some(([e, t]) => {
    let r = h(e),
      n = String(t ?? "").trim();
    return ("phonecountrycode" === r || "countryphonecode" === r || "countryregionphonecode" ===
      r) && n.length > 0 || "countrycode" === r && (/(?:^|\s)\+\d{1,4}\b/.test(n) ||
      /^\d{1,4}$/.test(n))
  })
}

function b(e) {
  for (let [t, r] of Object.entries(e.regular || {})) {
    let e = h(t),
      n = String(r ?? "").trim();
    if (n && ("phonecountrycode" === e || "countryphonecode" === e || "countryregionphonecode" ===
        e || "countrycode" === e && (/(?:^|\s)\+\d{1,4}\b/.test(n) || /^\d{1,4}$/.test(n))))
    return v(n)
  }
  return null
}

function y(e) {
  let t = String(e ?? "").match(/^\s*\(\s*(\+\d{1,4})\s*\)\s*(.+)$/);
  if (!t) return null;
  let r = t[2].replace(/\D/g, "");
  return r ? `${t[1]} ${r}` : null
}

function v(e) {
  let t = String(e ?? "").trim();
  if (!t) return null;
  let r = t.match(/\+(\d{1,4})/)?.[1];
  if (r) return `+${r}`;
  let n = t.replace(/\D/g, "");
  return n && n.length <= 4 ? `+${n}` : null
}

function w(e) {
  return v(e.profileData?.phoneCountryCode ?? e.profileData?.phone_country_code ?? e.profile_data
    ?.phoneCountryCode ?? e.profile_data?.phone_country_code)
}

function S(e) {
  let t = String(e.regular?.Phone ?? ""),
    r = y(t);
  if (r) return r;
  let n = t.match(/^\s*(\+\d{1,4})\D+(.+)$/);
  if (n) {
    let e = n[2].replace(/\D/g, "");
    if (e) return `${n[1]} ${e}`
  }
  let o = t.replace(/\D/g, "");
  if (!o) return t;
  let i = w(e);
  return i ? `${i} ${o}` : o
}

function E(e) {
  let t = String(e.regular?.Phone ?? ""),
    r = b(e);
  if (r) {
    let e = r.replace("+", "\\+"),
      n = RegExp(`^\\s*(?:\\(\\s*${e}\\s*\\)|${e})\\D+(.+)$`),
      o = t.match(n);
    if (o) {
      let e = o[1].replace(/\D/g, "");
      if (e) return e
    }
  }
  let n = t.replace(/\D/g, "");
  return n || t
}

function x(e) {
  if (e.regular) {
    let t = ["First Name", "First name", "Last Name", "Last name"];
    for (let r of t) e.regular[r] && "string" == typeof e.regular[r] && (e.regular[r] = (0, i
      .toNameTitleCase)(e.regular[r]));
    e.regular.Phone = g(e) ? E(e) : S(e);
    let r = "Location (City)" in e.regular ? "Location (City)" : "Location / City",
      n = e.regular[r];
    if (null != n) {
      let t = "string" == typeof n ? [n] : Array.isArray(n) ? [...n] : [],
        o = [];
      for (let e of t) {
        if ("string" != typeof e) continue;
        e = e.replace(/,\s*(USA|United States?)$/i, "").trim();
        let t = m(e);
        t && t !== e && o.push(t), o.push(e)
      }
      o.length > 0 && (e.regular[r] = o)
    }
    let o = Object.keys(e.regular).find(e => "website" === e.toLowerCase()),
      a = Object.keys(e.regular).some(e => /linkedin/i.test(e));
    if (o && a) {
      let t = Array.isArray(e.regular[o]) ? e.regular[o][0] : e.regular[o];
      "string" == typeof t && /linkedin\.com/i.test(t) && delete e.regular[o]
    }
  }
  if (e.education && e.education.length > 0)
    for (let t of e.education) {
      if (t?.School) {
        let e = t.School,
          r = "string" == typeof e ? e : Array.isArray(e) ? e[0] ?? "" : String(e ?? "");
        r.trim() && (t["School original answer"] = r, t.School = s(r))
      }
      if (t?.Degree) {
        let e = "string" == typeof t.Degree ? t.Degree : Array.isArray(t.Degree) ? t.Degree[0] ??
          "" : String(t.Degree ?? "");
        e.trim() && (t["Degree original answer"] = e)
      }
      if (t?.Study) {
        if (t?.Discipline) {
          let e = Array.isArray(t.Discipline) ? t.Discipline[0] : t.Discipline;
          t.Discipline = e, String(e ?? "").trim() && (t["Discipline original answer"] = String(e))
        } else t.Discipline = t.Study, String(t.Study ?? "").trim() && (t[
          "Discipline original answer"] = String(t.Study))
      } else if (t?.Discipline) {
        let e = "string" == typeof t.Discipline ? t.Discipline : Array.isArray(t.Discipline) ? t
          .Discipline[0] ?? "" : String(t.Discipline ?? "");
        e.trim() && (t["Discipline original answer"] = e)
      }
    }
  if (e.workExperience && e.workExperience.length > 0) {
    for (let t of e.workExperience)
      if (t?.isCurrent !== void 0) {
        let e = !0 === t.isCurrent || "true" === t.isCurrent || "True" === t.isCurrent || 1 === t
          .isCurrent || "1" === t.isCurrent;
        t["Current role"] = e ? "True" : "False"
      }
  }
  return e
}

