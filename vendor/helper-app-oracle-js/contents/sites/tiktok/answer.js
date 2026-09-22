/**
 * Parcel module id: jM4Cn
 * Resolved path: contents/sites/tiktok/answer.js (oracle restore)
 * Dependencies:
 *   ./date-utils -> bDh1B  =>  date-utils.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/shared/filler -> 2aGsX  =>  _tilde_contents/shared/filler.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getDateValueFromRecord", () => p), n.export(r,
  "createDateFillHandler", () => m), n.export(r, "isSkippableInput", () => g), n.export(r,
  "SOCIAL_NETWORKING_PLATFORM_OPTIONS", () => b), n.export(r, "formatAnswer", () => S);
var o = e("~contents/shared/filler"),
  i = e("./date-utils");

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
  let t = String(e || "").trim();
  if (!t) return {
    start: ""
  };
  let r = t.split(/\s+(?:\/|-|to)\s+/i).map(e => e.trim()).filter(Boolean);
  return r.length >= 2 ? {
    start: (0, i.normalizeTikTokYearMonth)(r[0]),
    end: (0, i.normalizeTikTokYearMonth)(r.slice(1).join(" "))
  } : {
    start: (0, i.normalizeTikTokYearMonth)(t)
  }
}

function f(e) {
  let t = {
    start: (0, i.normalizeTikTokYearMonth)(e.start)
  };
  return void 0 !== e.end && null !== e.end ? t.end = (0, i.normalizeTikTokYearMonth)(e.end) : t
    .end = null === e.end ? null : void 0, t
}

function p(e, t) {
  let r;
  for (let n in t)
    if (l(e, n)) {
      r = t[n];
      break
    } if (null == r || "" === r) throw new o.ValueError(`No matching field for label: ${e}`);
  if ("object" == typeof r && null !== r && !Array.isArray(r) && "[object Object]" === Object
    .prototype.toString.call(r) && ("start" in r || "end" in r)) return f(r);
  let n = String(r).trim();
  if ("" === n || "[object Object]" === n) throw new o.ValueError(
    `Field for label '${e}' resulted in an empty or invalid value`);
  return n.includes(" / ") || n.includes(" - ") || /\s+to\s+/i.test(n) ? d(n) : n
}

function m(e) {
  let {
    fillInputTextField: t,
    updateFilledProgress: r,
    updateMissedProgress: n
  } = e;
  return async (e, i, a = !0) => {
    if (e?.$input) try {
      let o = p(e.label, i),
        l = await t(e.$input, o);
      !1 === l ? a && n(e.label) : a && r(e.label)
    } catch (t) {
      t instanceof o.ValueError ? a && n(e.label) : console.error("[tiktok][DATE]", t)
    }
  }
}
let h = ["hidden", "submit", "button", "reset", "file"];

function g(e) {
  let t = (e.type || "").toLowerCase();
  if ("hidden" === t && e.classList.contains("atsx-date-picker-period-hidden-input") && e.closest(
      ".atsx-date-picker-period-month") && !e.disabled && !e.readOnly) return !1;
  if (h.includes(t)) return !0;
  if (e.classList.contains("atsx-select-search__field")) {
    let t = (e.id || "").trim(),
      r = null !== e.closest(".atsx-phone-select") || null !== e.closest(
      '[data-cy="phonePrefix"]') || null !== e.closest(".atsx-phone");
    if (!t || r) return !0
  }
  return !(e.readOnly && e.closest(".ud__select")) && (e.disabled || e.readOnly)
}
let b = ["LinkedIn Jobs", "LinkedIn InMail (Direct messaging)", "LinkedIn Feed", "TikTok",
  "Instagram", "Facebook", "Others"
];

function y(e, t) {
  for (let r of t) {
    let t = e[r];
    if (null != t && "" !== String(t).trim()) return t
  }
  return null
}

function v(e) {
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

function w(e) {
  let t = y(e, ["Start", "Start Date", "Start date", "start", "startDate", "start_date", "From",
      "from"
    ]),
    r = y(e, ["End", "End Date", "End date", "end", "endDate", "end_date", "Completion Date",
      "completion_date", "To", "to"
    ]);
  if (!t && !r) return;
  let n = null != t && "" !== t ? String(t).trim() : null,
    o = v(e) ? "Present" : null != r && "" !== r ? String(r).trim() : null;
  if (!n && !o) return;
  let a = {
    start: n ? (0, i.normalizeTikTokYearMonth)(n) : void 0,
    end: o ? (0, i.normalizeTikTokYearMonth)(o) : void 0
  };
  e["Start & end date"] = a, e["Start and end date"] = a
}

function S(e) {
  if (c(e), e.education?.length)
    for (let t of e.education) w(t);
  if (e.workExperience?.length)
    for (let t of e.workExperience) w(t);
  return e
}

