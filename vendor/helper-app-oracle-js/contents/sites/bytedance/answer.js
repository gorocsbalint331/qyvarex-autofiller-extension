/**
 * Parcel module id: ZCM0a
 * Resolved path: contents/sites/bytedance/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/shared/filler -> 2aGsX  =>  _tilde_contents/shared/filler.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "normalizeBytedanceYearMonth", () => d), n.export(r,
    "parseBytedanceDateRangeString", () => p), n.export(r, "getDateValueFromRecord", () => h), n
  .export(r, "createDateFillHandler", () => g), n.export(r, "isSkippableInput", () => y), n.export(
    r, "parseMobileNumber", () => v), n.export(r, "formatAnswer", () => k);
var o = e("~contents/shared/filler"),
  i = e("~core/phone-country-code");

function a(e) {
  return e.replace(/[^a-zA-Z0-9\s]/g, "")
}

function l(e, t) {
  if (!e || !t || "string" != typeof e || "string" != typeof t) return !1;
  let r = a(e).replace(/\s*\*\s*/g, "").toLowerCase().trim(),
    n = a(t).replace(/\s*\*\s*/g, "").toLowerCase().trim();
  return !!r && r === n
}
let s = "LinkedIn";

function u(e) {
  return "socialmedia" === a(e).replace(/\s+/g, "").toLowerCase()
}

function c(e) {
  let t = e.regular ||= {},
    r = Object.keys(t).filter(u);
  if (0 === r.length) {
    t["Social Media"] = s;
    return
  }
  for (let e of r) t[e] = s
}

function d(e) {
  let t = null == e ? "" : String(e).trim();
  if (!t) return "";
  if ("present" === t.toLowerCase()) return "Present";
  let r = t.match(
    /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|sept(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\.?\s+(20\d{2})\b/i
    );
  if (r) {
    let e = f(r[1]);
    if (e) return `${r[2]}-${e}`
  }
  let n = t.match(
    /\b(20\d{2})\s+(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|sept(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\.?\b/i
    );
  if (n) {
    let e = f(n[2]);
    if (e) return `${n[1]}-${e}`
  }
  let o = t.match(/\b(20\d{2})[-/](\d{1,2})\b/);
  if (o) return `${o[1]}-${o[2].padStart(2,"0")}`;
  let i = t.match(/\b(\d{1,2})[-/](20\d{2})\b/);
  if (i) return `${i[2]}-${i[1].padStart(2,"0")}`;
  let a = t.match(/^(20\d{2})$/);
  return a ? `${a[1]}-01` : t
}

function f(e) {
  let t = e.toLowerCase().replace(/\.$/, "").slice(0, 3),
    r = {
      jan: "01",
      feb: "02",
      mar: "03",
      apr: "04",
      may: "05",
      jun: "06",
      jul: "07",
      aug: "08",
      sep: "09",
      oct: "10",
      nov: "11",
      dec: "12"
    };
  return r[t] ?? null
}

function p(e) {
  let t = String(e || "").trim();
  if (!t) return {
    start: ""
  };
  let r = t.split(/\s+(?:\/|-|to)\s+/i).map(e => e.trim()).filter(Boolean);
  return r.length >= 2 ? {
    start: d(r[0]),
    end: d(r.slice(1).join(" "))
  } : {
    start: d(t)
  }
}

function m(e) {
  return {
    start: d(e.start),
    end: void 0 === e.end || null === e.end ? e.end : d(e.end)
  }
}

function h(e, t) {
  let r;
  for (let n in t)
    if (l(e, n)) {
      r = t[n];
      break
    } if (null == r || "" === r) throw new o.ValueError(`No matching field for label: ${e}`);
  if ("object" == typeof r && null !== r && !Array.isArray(r) && "[object Object]" === Object
    .prototype.toString.call(r) && ("start" in r || "end" in r)) return m(r);
  let n = String(r).trim();
  if ("" === n || "[object Object]" === n) throw new o.ValueError(
    `Field for label '${e}' resulted in an empty or invalid value`);
  return n.includes(" / ") || n.includes(" - ") || /\s+to\s+/i.test(n) ? p(n) : n
}

function g(e) {
  let {
    fillInputTextField: t,
    updateFilledProgress: r,
    updateMissedProgress: n
  } = e;
  return async (e, i, a = !0) => {
    if (e?.$input) try {
      let o = h(e.label, i),
        l = await t(e.$input, o);
      !1 === l ? a && n(e.label) : a && r(e.label)
    } catch (t) {
      t instanceof o.ValueError ? a && n(e.label) : console.error("[tiktok][DATE]", t)
    }
  }
}
let b = ["hidden", "submit", "button", "reset", "file"];

function y(e) {
  let t = (e.type || "").toLowerCase();
  if (b.includes(t)) return !0;
  if (e.classList.contains("atsx-select-search__field")) {
    let t = (e.id || "").trim(),
      r = null !== e.closest(".atsx-phone-select") || null !== e.closest(
      '[data-cy="phonePrefix"]') || null !== e.closest(".atsx-phone");
    if (!t || r) return !0
  }
  return !(e.readOnly && e.closest(".ud__select")) && (e.disabled || e.readOnly)
}

function v(e, t) {
  let r = (0, i.decomposePhone)(e, t);
  return {
    areaCode: r.dialCode ? `+${r.dialCode}` : "",
    phoneWithoutAreaCode: (0, i.stripPhoneCountryCodePrefix)(e, t || r.dialCode)
  }
}

function w(e) {
  let t = S(e, ["Start", "Start Date", "Start date", "start", "startDate", "start_date", "From",
      "from"
    ]),
    r = S(e, ["End", "End Date", "End date", "end", "endDate", "end_date", "Completion Date",
      "completion_date", "To", "to"
    ]);
  if (!t && !r) return;
  let n = null != t && "" !== t ? String(t).trim() : null,
    o = E(e) ? "Present" : null != r && "" !== r ? String(r).trim() : null;
  if (!n && !o) return;
  let i = {
    start: n ? d(n) : void 0,
    end: o ? d(o) : void 0
  };
  e["Start & end date"] = i, e["Start and end date"] = i
}

function S(e, t) {
  for (let r of t) {
    let t = e[r];
    if (null != t && "" !== String(t).trim()) return t
  }
  return null
}

function E(e) {
  let t = ["isCurrent", "is_current", "current", "currently", "currentlyWorkHere",
    "currently_work_here", "currentlyStudyHere", "currently_study_here", "I currently work here",
    "I currently study here"
  ];
  return t.some(t => {
    let r = e[t];
    if (!0 === r) return !0;
    if ("string" != typeof r) return !1;
    let n = r.trim().toLowerCase();
    return ["true", "yes", "y", "present", "current"].includes(n)
  })
}

function x(e, t) {
  for (let r of t) {
    let t = e[r];
    if (null == t) continue;
    let n = String(t).trim();
    if (n) return n
  }
  return null
}

function C(e) {
  let t = x(e, ["Faculty", "Field of Study", "Field of study", "Study", "Major", "Area of Study",
    "Discipline"
  ]);
  t && !String(e.Faculty || "").trim() && (e.Faculty = t)
}

function A(e) {
  for (let [t, r] of Object.entries(e)) {
    let e = t.trim().toLowerCase().replace(/[\s_/-]+/g, ""),
      n = "phonecountrycode" === e || "countryphonecode" === e || "countryregionphonecode" === e,
      o = String(r ?? "").trim();
    if (n && o) return o
  }
  return ""
}

function k(e) {
  if (c(e), e?.regular) {
    let t = A(e.regular),
      r = "" !== t;
    for (let n of Object.keys(e.regular))
      if ("mobile" === n.trim().toLowerCase()) {
        let o = e.regular[n];
        if ("string" == typeof o) {
          let i = v(o, t);
          e.regular[n] = i.phoneWithoutAreaCode || o, i.areaCode && !r && (e.regular
            .__mobileAreaCode = i.areaCode)
        }
      }
  }
  if (e.education?.length)
    for (let t of e.education) C(t), w(t);
  if (e.workExperience?.length)
    for (let t of e.workExperience) w(t);
  return e
}

