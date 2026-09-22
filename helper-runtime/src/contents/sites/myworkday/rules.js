/**
 * Parcel module id: 1H2ID
 * Resolved path: src/contents/sites/myworkday/rules.js
 * Dependencies:
 *   ../education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ./fiber-options -> kgcUj  =>  src/contents/sites/myworkday/fiber-options.js
 *   ./form-loss -> dkfwU  =>  src/contents/sites/myworkday/form-loss.js
 *   ./snapshot-alignment -> 25NpF  =>  src/contents/sites/myworkday/snapshot-alignment.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/checkbox-label -> 2KQwH  =>  src/contents/methods/checkbox-label.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "WORKDAY_FORCED_CHECKBOX_ATTRIBUTE", () => b), n.export(r,
    "isWorkdaySkillsFieldLabel", () => P), n.export(r, "getWorkdayRegularRules", () => _), n.export(
    r, "findWorkdaySkillsProgressLabel", () => L), n.export(r, "findWorkdayCountryProgressLabels",
  () => M), n.export(r, "findFilledMyExperienceProgressLabels", () => U), n.export(r,
    "findFilledWorkdaySelfIdentifyCheckboxProgressLabels", () => H), n.export(r,
    "findUnfilledWorkdaySelfIdentifyCheckboxProgressLabels", () => Y), n.export(r,
    "disambiguateWorkdayDuplicateRuleLabels", () => X), n.export(r, "getWorkdayRuleSectionHeading",
    () => ee), n.export(r, "getWorkdayDateDescription", () => er), n.export(r,
    "getWorkdaySalaryFieldType", () => en), n.export(r, "isWorkdaySelfIdentifyLabel", () => eo), n
  .export(r, "isWorkdayInputSelected", () => ea), n.export(r, "isWorkdaySelfIdentifyInputSelected",
    () => el), n.export(r, "getWorkdayInputLabelText", () => es), n.export(r,
    "getWorkdayEducationApiBase", () => eD), n.export(r, "employmentGroupXpath", () => eX), n
  .export(r, "educationGroupXpath", () => e0), n.export(r, "getRules", () => tQ), n.export(r,
    "getEduRules", () => t0), n.export(r, "getExpRules", () => t2), n.export(r,
    "getSubmitButtonText", () => t1), n.export(r, "getGroupSnapshot", () => t4), n.export(r,
    "getFormSnapshot", () => t5);
var o = e("~contents/methods/checkbox-label"),
  i = e("~contents/methods/observer"),
  a = e("~core/enums"),
  l = e("~core/xpath"),
  s = e("~utils/delay"),
  u = e("~utils/fieldLabel"),
  c = e("../education-item-trace"),
  d = e("./fiber-options"),
  f = e("./form-loss"),
  p = e("./snapshot-alignment");
let m = new Set(["Education", "Schools Attended", "Schooling", "Academic Experience",
    "Education History", "Education (Optional)", "Education/Schooling"
  ]),
  h = new Set(["Add a Job", "Relevant Experience", "Work Experience", "Employment Experience",
    "Employment History", "Work History", "Work History (Optional)", "Work or Other Experience",
    "Where have you worked?", "Professional Experience", "Employment Detail",
    "Job History/Work Experience"
  ]),
  g = ["Add-a-Job-", "Education-", "Schools-Attended-", "Work-Experience-",
    "Employment-Experience-", "Professional-Experience-", "Relevant-Experience-",
    "Work-or-Other-Experience-", "Where-have-you-worked?-", "Employment-History-",
    "Employment-Detail-", "Work-History-"
  ],
  b = "data-jr-workday-forced-checkbox",
  y = 2e3,
  v = 100,
  w = "/values/educations/degrees",
  S = "/values/phone/countryCodes",
  E = "/values/names/countries",
  x = "countryphonecode",
  C = 40,
  A = 12,
  k = 800,
  T = 40,
  F = '[data-automation-id="activeListContainer"][role="listbox"]',
  I = '[data-automation-id="menuItem"][role="option"], [role="option"]',
  j = 240,
  D = new Map;

function P(e) {
  let t = (0, u.normalizeFieldLabel)(e, {
    loose: !0
  });
  return "skills" === t || "add skills" === t || "type to add skills" === t
}

function _(e) {
  return e.filter(e => !P(e.label))
}

function L(e) {
  return e.fieldRequiredStatus.find(e => P(e.label))?.label ?? null
}

function R(e) {
  let t = (0, u.normalizeFieldLabel)(e, {
      loose: !0
    }),
    r = t.replace(/\s/g, "");
  return "country phone code" === t || "phone country code" === t || "country region phone code" ===
    t || r.includes("countryphonecode") || r.includes("phonecountrycode") || r.includes(
      "countryregionphonecode") || r.includes("country") && r.includes("phone") && r.includes(
      "code")
}

function O(e) {
  if (R(e)) return !1;
  let t = (0, u.normalizeFieldLabel)(e, {
      loose: !0
    }),
    r = t.replace(/\s/g, "");
  return "country" === t || "country territory" === t || "country region" === t ||
    "countryterritory" === r || "countryregion" === r
}

function M(e) {
  return e.fieldRequiredStatus.filter(e => O(e.label)).map(e => e.label)
}

function N(e, t) {
  let r = (0, u.normalizeFieldLabel)(t);
  return e.fieldRequiredStatus.find(e => u.normalizeFieldLabel(e.label) === r)?.label ?? null
}

function $(e, t) {
  let r = (0, u.normalizeFieldLabel)(t);
  return e.filledFields.some(e => (0, u.normalizeFieldLabel)(e) === r)
}

function B(e) {
  if (Array.isArray(e)) return e.some(B);
  if (null == e) return !1;
  let t = String(e).trim().toLowerCase();
  return !["", "select one", "[]", "/", "//"].includes(t)
}

function q(e) {
  return !!Array.isArray(e) && e.some(e => !!e && "object" == typeof e && Object.entries(e).some(([
    e, t
  ]) => e !== p.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY && e !== c.EDUCATION_TRACE_KEY && B(t)))
}

function U(e, t) {
  let r = [],
    n = [{
      label: "Employment",
      groups: t.employment
    }, {
      label: "Education",
      groups: t.education
    }];
  for (let {
      label: t,
      groups: o
    }
    of n) {
    if (!q(o)) continue;
    let n = N(e, t);
    !n || $(e, n) || r.push(n)
  }
  return r
}

function H(e, t = document) {
  let r = z(e);
  return !r || $(e, r) ? [] : V(t) ? [r] : []
}

function Y(e, t = document) {
  let r = z(e);
  return r && $(e, r) ? V(t) ? [] : [r] : []
}

function z(e) {
  return e.fieldRequiredStatus.find(e => eo(e.label))?.label ?? null
}

function V(e = document) {
  let t = Array.from(e.querySelectorAll(
    'input[type="checkbox"][id*="disabilityStatus"], input[type="checkbox"][name*="disabilityStatus"]'
    ));
  return t.some(el)
}

function W(e = "") {
  return e.replace(/[\u200b-\u200d\ufeff]/g, "").replace(/\u00a0/g, " ").toLowerCase().replace(
    /\s+/g, " ").trim()
}

function G(e = "") {
  return e.replace(/[\u200b-\u200d\ufeff]/g, "").replace(/\*/g, "").trim()
}

function K(e, t) {
  let r = /\bname\s*$/i,
    n = t.replace(/\s+name\s*$/i, "").trim();
  return n && r.test(t) && r.test(e) ? `${n} ${e}` : `${t}: ${e}`
}

function X(e) {
  let t = new Map;
  for (let {
      label: r
    }
    of e) t.set(r, (t.get(r) || 0) + 1);
  let r = e.map(({
      label: e,
      sectionHeading: r
    }) => r && (t.get(e) || 0) > 1 ? K(e, r) : e),
    n = new Map;
  for (let e of r) n.set(e, (n.get(e) || 0) + 1);
  return e.map((e, t) => {
    let o = r[t];
    return 1 === (n.get(o) || 0) ? {
      ...e,
      label: o
    } : e
  })
}

function J(e = "") {
  return "degree" === W(G(e))
}

function Q(e) {
  return (e || "").trim().replace(/\s*\*$/, "")
}

function Z(e) {
  return e?.tagName !== "H4" ? "" : Q(e.textContent)
}

function ee(e) {
  let t = t_(e),
    r = e;
  for (; r;) {
    for (let e of Array.from(r.children || [])) {
      let t = Z(e);
      if (t) return t
    }
    let e = r.previousElementSibling;
    for (; e;) {
      let t = Z(e);
      if (t) return t;
      e = e.previousElementSibling
    }
    if (r === t) break;
    r = r.parentElement
  }
  return ""
}

function et(e) {
  let t = Q(e);
  return m.has(t) || W(t).includes("education")
}

function er(e) {
  let t = () => {
      let t = !!e.querySelector('[data-automation-id="dateSectionMonth-input"]'),
        r = !!e.querySelector('[data-automation-id="dateSectionDay-input"]'),
        n = !!e.querySelector('[data-automation-id="dateSectionYear-input"]');
      return t && r && n ? "MM/DD/YYYY" : t && n ? "MM/YYYY" : n ? "YYYY" : ""
    },
    r = t();
  if (r) return r;
  let n = e => {
      let t = e.trim().toUpperCase();
      return "MM/DD/YYYY" === t || "MM/YYYY" === t || "YYYY" === t ? t : ""
    },
    o = (e = "") => {
      let t = e.trim(),
        r = t.match(/^current value is\s+(.+?)\s*$/i);
      return n(r?.[1] || "")
    },
    i = o(e.previousElementSibling?.textContent || "");
  if (i) return i;
  let a = ("function" == typeof e.closest ? e.closest('[data-automation-id^="formField-"]') :
    null) || e.parentElement,
    l = a?.querySelectorAll?.('[aria-hidden="true"]') || [];
  for (let e of Array.from(l)) {
    let t = o(e.textContent || "");
    if (t) return t
  }
  return "MM/DD/YYYY"
}

function en(e) {
  return /\b(salary|compensation|pay)\b/i.test(e) ? /\b(range|minimum and maximum|min and max)\b/i
    .test(e) ? a.FIELD_TYPE.TEXT : a.FIELD_TYPE.NUMBER : a.FIELD_TYPE.TEXT
}

function eo(e = "") {
  let t = W(G(e)).replace(/[:\uff1a]\s*$/, "").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ")
    .trim();
  return "please check one of the boxes below" === t
}

function ei(e) {
  let t = [e.parentElement, e.parentElement?.parentElement, "function" == typeof e.closest ? e
    .closest("label") : null
  ];
  return t.some(e => e?.querySelector?.(
    'svg[class*="wd-icon-check"], .wd-icon-check-small, .wd-icon-check'))
}

function ea(e) {
  return e.getAttribute?.(b) !== "true" && (e.checked || e.getAttribute?.("aria-checked") ===
    "true" || e.parentElement?.getAttribute?.("aria-checked") === "true")
}

function el(e) {
  return e.getAttribute?.(b) !== "true" && (e.getAttribute?.("aria-checked") === "true" || e
    .parentElement?.getAttribute?.("aria-checked") === "true" || ei(e))
}

function es(e, t) {
  return t?.textContent?.trim() || t?.innerText?.trim() || (0, o.getRadioCheckText)(e)
}

function eu(e) {
  return (0, l.getFirstOrderedNodeSafe)('.//button[@aria-haspopup="listbox"][@type="button"]', e)
}

function ec(e) {
  let t = e?.replace(/\s+/g, " ").trim() || "";
  return "select one" === t.toLowerCase() ? "" : t
}

function ed(e) {
  return e.map(ec).filter(Boolean)
}

function ef(e) {
  return e?.querySelectorAll ? Array.from(e.querySelectorAll(
    'li:not(#select-one), [role="option"]:not(#select-one)')) : []
}

function ep(e) {
  let t = e?.getBoundingClientRect?.();
  return t && Number.isFinite(t.top) && Number.isFinite(t.bottom) && Number.isFinite(t.left) &&
    Number.isFinite(t.right) ? t : null
}

function em(e, t) {
  let r = ep(e);
  if (!r) return null;
  let n = Math.max(0, Math.min(t.right, r.right) - Math.max(t.left, r.left));
  if (n <= 0) return null;
  let o = Math.min(Math.abs(r.top - t.bottom), Math.abs(t.top - r.bottom)),
    i = Math.abs(r.left - t.left);
  return o + i / 10
}

function eh() {
  let e = Array.from(document.querySelectorAll?.('ul[role="listbox"][tabindex="-1"]') || []);
  return e.length > 0 ? e : (0, l.getOrderedNodes)('//ul[@role="listbox"][@tabindex="-1"]')
}

function eg(e) {
  let t = e.getAttribute?.("aria-controls");
  if (!t || "function" != typeof document.getElementById) return null;
  let r = document.getElementById(t);
  return r?.getAttribute?.("role") !== "listbox" ? null : r
}

function eb(e) {
  let t = eg(e);
  if (ef(t).length > 0) return t;
  let r = eh().filter(e => ef(e).length > 0);
  if (0 === r.length) return null;
  let n = ep(e);
  if (!n) return r[0];
  let o = r.map(e => ({
    listbox: e,
    distance: em(e, n)
  })).filter(e => null !== e.distance && e.distance <= j).sort((e, t) => e.distance - t.distance);
  return o[0]?.listbox ?? null
}

function ey() {
  return Array.from(document.querySelectorAll?.(F) || [])
}

function ev(e) {
  return /\+\d{1,4}\b/.test(e)
}

function ew() {
  return ey().flatMap(e => e?.querySelectorAll ? Array.from(e.querySelectorAll(I)) : []).map(e =>
    ec(e.textContent)).filter(ev).filter(Boolean)
}

function eS(e) {
  if ("function" == typeof e.click) {
    e.click();
    return
  }
  "function" == typeof e.dispatchEvent && e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: "undefined" != typeof window ? window : null
  }))
}

function eE(e, t) {
  let r = e.querySelector?.(
    '[data-automation-id="promptIcon"], [data-automation-id="promptSearchButton"]');
  if (r) {
    eS(r);
    return
  }
  t?.focus?.(), t?.click?.()
}

function ex(e) {
  if ("function" != typeof KeyboardEvent) return;
  let t = new KeyboardEvent("keydown", {
    bubbles: !0,
    cancelable: !0,
    key: "Escape",
    code: "Escape"
  });
  e?.dispatchEvent?.(t), document.dispatchEvent?.(t)
}
async function eC() {
  let e = new Set,
    t = () => {
      for (let t of ew()) e.add(t)
    };
  await (0, i.waitForCondition)(() => (t(), e.size > 0), {
    timeout: k,
    interval: 50,
    observeTarget: document.body
  });
  for (let e = 0; e < T; e++) {
    t();
    let e = ey().filter(e => (e.scrollHeight || 0) > (e.clientHeight || 0));
    if (0 === e.length) break;
    let r = !1;
    for (let t of e) {
      let e = Math.max(0, (t.scrollHeight || 0) - (t.clientHeight || 0)),
        n = t.scrollTop || 0;
      e <= 0 || n >= e - 2 || (t.scrollTop = Math.min(e, n + Math.max(t.clientHeight || 0, 240)),
        t.dispatchEvent?.(new Event("scroll", {
          bubbles: !0
        })), (t.scrollTop || 0) === n || (r = !0))
    }
    if (!r) break;
    await (0, s.delay)(80)
  }
  return t(), Array.from(e)
}
async function eA(e, t) {
  eE(e, t);
  let r = await eC();
  return ex(t), r
}
async function ek({
  label: e,
  labelElement: t,
  required: r,
  listboxSelectElement: n,
  deadlineMs: o
}) {
  let i = e => o ? Math.max(0, Math.min(e, o - Date.now())) : e,
    u = () => ef(eb(n)),
    c = () => (0, l.getOrderedNodes)(
      '//ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]'),
    f = () => {
      let e = u();
      return e.length > 0 ? e : c()
    },
    p = () => f(),
    m = () => p().length > 0,
    h = () => {
      n.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
      }))
    },
    g = async () => {
      let e = p();
      if (e.length > 0) return e;
      let t = i(600);
      return t <= 0 ? [] : await new Promise(r => {
        let n = new MutationObserver(() => {
          (e = p()).length > 0 && (n.disconnect(), r(e))
        });
        if (n.observe(document.body, {
            childList: !0,
            subtree: !0
          }), (e = p()).length > 0) {
          n.disconnect(), r(e);
          return
        }
        setTimeout(() => {
          n.disconnect(), r([])
        }, t)
      })
    }, b = ed(await (0, d.getWorkdaySelectOptionsViaFiber)(n));
  if (b.length > 0) return {
    label: e,
    required: r,
    $label: t,
    $input: n,
    type: a.FIELD_TYPE.LISTBOX,
    options: b
  };
  let y = (0, l.getOrderedNodes)(
    '//div[@visibility="closing"]/ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]');
  if (y.length > 0) {
    let e = (0, l.getOrderedNodes)(
    '//button[@aria-expanded="true" and @aria-haspopup="listbox"]');
    for (let t of e) t.click(), await (0, s.delay)(20), t.click(), await new Promise(e => {
      let t = new MutationObserver(() => {
        let r = (0, l.getOrderedNodes)(
          '//div[@visibility="closing"]/ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]'
          );
        0 === r.length && (t.disconnect(), e())
      });
      t.observe(document.body, {
        childList: !0,
        subtree: !0
      }), setTimeout(() => {
        t.disconnect(), e()
      }, 600)
    })
  }
  h();
  let v = await g();
  0 === v.length && (n.click?.(), v = await g());
  let w = {
    label: e,
    required: r,
    $label: t,
    $input: n,
    type: a.FIELD_TYPE.LISTBOX,
    options: ed(v.map(e => e.textContent))
  };
  return h(), await new Promise(e => {
    let t = new MutationObserver(() => {
      m() || (t.disconnect(), e())
    });
    t.observe(document.body, {
      childList: !0,
      subtree: !0
    }), setTimeout(() => {
      t.disconnect(), e()
    }, 600)
  }), w
}
async function eT({
  section: e,
  label: t,
  labelElement: r,
  required: n
}) {
  let o = Date.now() + y,
    i = Math.max(1, Math.ceil(y / v));
  for (let a = 0; a < i && Date.now() <= o; a++) {
    let i = eu(e);
    if (i) {
      let e = await ek({
        label: t,
        labelElement: r,
        required: n,
        listboxSelectElement: i,
        deadlineMs: o
      });
      if (e.options.length > 0) return e
    }
    let a = o - Date.now();
    if (a <= 0) break;
    await (0, s.delay)(Math.min(v, a))
  }
  return console.warn(
    "[MyWorkday] Degree listbox did not become ready before timeout; continuing with fallback rule."
    ), null
}

function eF() {
  let e = new Set,
    t = /(?:https?:\/\/[^"'\s]+)?\/wday\/calypso\/cxs\/jobapplication\/[^/"'?\s]+/g,
    r = (r = "") => {
      let n = r.match(t) || [];
      for (let t of n) try {
        e.add(new URL(t, window.location.origin).toString())
      } catch (e) {
        console.warn("[myworkday] Failed to parse API base candidate:", e)
      }
    },
    n = "function" == typeof performance?.getEntriesByType ? performance.getEntriesByType(
      "resource") : [];
  for (let e of n) r(e.name);
  let o = Array.from(document.querySelectorAll?.("[src], [href], [action]") || []);
  for (let e of o) r(e.getAttribute("src") || e.getAttribute("href") || e.getAttribute("action") ||
    "");
  for (let e of Array.from(document.scripts || [])) r(e.src || ""), r(e.textContent || "");
  return r(document.documentElement?.innerHTML || ""), Array.from(e)
}

function eI() {
  let e = window.location?.pathname || "",
    t = e.split("/").filter(Boolean),
    r = t.indexOf("recruiting"),
    n = t[r + 1],
    o = t[r + 2];
  return !(r < 0) && n && o && /^[A-Za-z0-9_-]+$/.test(n) ? new URL(
    `/wday/calypso/cxs/jobapplication/${n}`, window.location.origin).toString() : null
}

function ej() {
  let e = window.location?.host || "",
    t = e.match(/^([A-Za-z0-9-]+)\.wd\d+\.myworkdayjobs\.com$/i),
    r = t?.[1];
  return r ? new URL(`/wday/calypso/cxs/jobapplication/${r}`, window.location.origin).toString() :
    null
}

function eD() {
  if ("undefined" == typeof window) return null;
  let e = eF();
  return e[0] || eI() || ej()
}

function eP(e = "") {
  let t = W(G(e));
  return "field of study" === t
}

function e_(e) {
  return Array.isArray(e.options) ? e.options : []
}

function eL(e) {
  if (null == e) return "";
  let t = "string" == typeof e ? e : "object" == typeof e ? String(e.descriptor ?? e.label ?? e
      .name ?? e.value ?? "") : String(e),
    r = t.replace(/\s+/g, " ").trim();
  return "select one" === r.toLowerCase() ? "" : r
}

function eR(e) {
  let t = Array.isArray(e) ? e : Array.isArray(e?.data) ? e.data : Array.isArray(e?.results) ? e
    .results : Array.isArray(e?.items) ? e.items : [];
  return Array.from(new Set(t.map(eL).filter(Boolean)))
}

function eO(e) {
  if (!e || "object" != typeof e) return null;
  let t = String(e.id ?? "").trim(),
    r = eL(e);
  return t && r ? {
    id: t,
    descriptor: r
  } : null
}

function eM(e) {
  let t = Array.isArray(e) ? e : Array.isArray(e?.data) ? e.data : Array.isArray(e?.results) ? e
    .results : Array.isArray(e?.items) ? e.items : [],
    r = new Set,
    n = [];
  for (let e of t) {
    let t = eO(e);
    !t || r.has(t.id) || (r.add(t.id), n.push(t))
  }
  return n
}
async function eN(e) {
  if ("function" != typeof fetch) return null;
  try {
    let t = await fetch(e, {
      credentials: "include",
      headers: {
        accept: "application/json"
      }
    });
    if (!t.ok) return console.warn(
      `[MyWorkday] Failed to fetch Workday options: ${t.status} ${t.statusText} ${e}`), null;
    return await t.json()
  } catch (e) {
    return console.warn("[MyWorkday] Failed to fetch Workday options:", e), null
  }
}

function e$(e) {
  if (!e) return null;
  try {
    let t = new URL(e, window.location.origin),
      r = t.pathname.match(/\/wday\/calypso\/cxs\/jobapplication\/([^/]+)/);
    return r?.[1] ?? null
  } catch (e) {
    return console.warn("[MyWorkday] Failed to parse Workday API tenant:", e), null
  }
}

function eB() {
  let e = String(window?.workday?.tenant ?? "").trim();
  if (e) return e;
  let t = window.location?.host || "";
  return t.match(/^([A-Za-z0-9-]+)\.wd\d+\.myworkdayjobs\.com$/i)?.[1] ?? null
}

function eq(e) {
  if ("undefined" == typeof window) return null;
  let t = e$(e) || eB();
  if (!t || !/^[A-Za-z0-9_-]+$/.test(t)) return null;
  try {
    let r = e ? new URL(e, window.location.origin).origin : window.location.origin;
    return new URL(`/wday/calypso/cxs/common/${t}`, r).toString()
  } catch (e) {
    return console.warn("[MyWorkday] Failed to build Workday common API base:", e), null
  }
}
async function eU(e) {
  if (!e || "function" != typeof fetch) return [];
  let t = `${e.replace(/\/$/,"")}${w}`;
  return eR(await eN(t))
}
async function eH(e) {
  if (!e || "function" != typeof fetch) return [];
  let t = `${e.replace(/\/$/,"")}${E}`;
  return eM(await eN(t))
}
async function eY(e) {
  if (!e || "function" != typeof fetch) return [];
  let t = `${e.replace(/\/$/,"")}${S}`;
  return eR(await eN(t)).filter(ev)
}
async function ez(e, t) {
  let r = `${e.replace(/\/$/,"")}/countries/${encodeURIComponent(t.id)}/${x}`;
  return eR(await eN(r)).filter(ev)
}
async function eV() {
  let e = eD(),
    t = eq(e);
  if (!e || !t) return [];
  let r = `${e.replace(/\/$/,"")}|${t.replace(/\/$/,"")}`,
    n = D.get(r);
  if (n) return n;
  let o = (async () => {
    let r = await eY(e);
    if (r.length > 0) return r;
    let n = await eH(e);
    if (0 === n.length) return [];
    if (n.length > C) return console.info(
      `[MyWorkday] Skipping Country Phone Code API hydration for ${n.length} countries.`
      ), [];
    let o = Array.from({
        length: n.length
      }, () => []),
      i = 0,
      a = Math.min(A, n.length),
      l = Array.from({
        length: a
      }, async () => {
        for (; i < n.length;) {
          let e = i++;
          try {
            o[e] = await ez(t, n[e])
          } catch (e) {
            console.warn(
              "[MyWorkday] Failed to fetch Workday country phone code option:", e)
          }
        }
      });
    await Promise.all(l);
    let s = new Set,
      u = [];
    for (let e of o.flat()) s.has(e) || (s.add(e), u.push(e));
    return u
  })().catch(e => (D.delete(r), console.warn(
    "[MyWorkday] Failed to fetch Workday country phone code options:", e), []));
  return D.set(r, o), o
}
async function eW(e, t) {
  let r = await eV();
  return r.length > 0 ? (console.info(
      `[MyWorkday] Fetched ${r.length} Country Phone Code options from Workday API.`), r) :
    await eA(e, t)
}
async function eG(e) {
  let t = e.filter(e => J(e.label));
  if (0 === t.length || t.every(e => e_(e).length > 0)) return;
  let r = await eU(eD());
  if (0 !== r.length)
    for (let e of t) 0 === e_(e).length && (e.options = r)
}

function eK(e) {
  return e.filter(e => !eP(e.label) && (!J(e.label) || e_(e).length > 0)).map(e => ({
    type: J(e.label) ? a.FIELD_TYPE.LISTBOX : e.type,
    label: e.label,
    ...e.options?.length ? {
      options: e.options
    } : {},
    ...e.description ? {
      description: e.description
    } : {}
  }))
}
let eX = `
  (
    (
      starts-with(@aria-labelledby, "Work-Experience-")
      or starts-with(@aria-labelledby, "Add-a-Job-")
      or starts-with(@aria-labelledby, 'Employment-Experience-')
      or starts-with(@aria-labelledby, 'Professional-Experience-')
      or starts-with(@aria-labelledby, 'Relevant-Experience-')
      or starts-with(@aria-labelledby, 'Work-or-Other-Experience-')
      or starts-with(@aria-labelledby, 'Where-have-you-worked?-')
      or starts-with(@aria-labelledby, 'Employment-History-')
      or starts-with(@aria-labelledby, 'Work-History-')
    )
    and substring(@aria-labelledby, string-length(@aria-labelledby) - string-length("-panel") +1) = "-panel"
  )
  or starts-with(@data-automation-id, 'workExperience-')
`,
  eJ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  eQ = "abcdefghijklmnopqrstuvwxyz",
  eZ = `translate(@aria-labelledby, "${eJ}", "${eQ}")`,
  e0 = `
  (
    (
      starts-with(${eZ}, "education-")
      or starts-with(${eZ}, "schools-attended-")
      or contains(${eZ}, "-education-")
    )
    and substring(${eZ}, string-length(${eZ}) - string-length("-panel") +1) = "-panel"
  )
  or starts-with(@data-automation-id, 'education-')
`,
  e2 = "//h3 | //h4",
  e1 = new Set(["H3", "H4"]),
  e3 = 'div[data-automation-id^="formField-"]',
  e4 = '[data-automation-id="applyFlowPage"]',
  e5 = '[data-automation-id="applyFlowMyExpPage"]',
  e6 = `${e4}, ${e5}`,
  e8 =
  'fieldset, div[role="radiogroup"], div[role="group"], div[data-automation-id*="question"], div[data-automation-id*="Question"]',
  e9 = 'input:not([type="hidden"]), textarea, select, button[aria-haspopup="listbox"]',
  e7 = '[data-automation-id$="Section"], [aria-labelledby$="-section"]',
  te = `//*[@data-automation-id="websitesSection"
  or @aria-labelledby="Websites-section"
  or @aria-labelledby="Website-section"]`,
  tt = new Set(["Website", "Websites", "Website (Optional)", "Websites (Optional)"]),
  tr = 2e3,
  tn = 150,
  to = 4;

function ti() {
  let e = (0, l.getFirstOrderedNodeSafe)(
    '//main//h2[not(@data-automation-id="jobTitleHeading")] | //div[@id="mainContent"]//h2[not(@data-automation-id="jobTitleHeading")] | //main//h3 | //div[@id="mainContent"]//h3 | //div[@data-automation-id="applyFlowPage"]//h3 | //div[@data-automation-id="applyFlowMyExpPage"]//h3'
    );
  return e?.textContent?.trim()
}

function ta(e) {
  let t = e,
    r = "function" != typeof e.getClientRects || e.getClientRects().length > 0;
  return !!(t.offsetWidth || t.offsetHeight || r)
}

function tl() {
  return document.querySelector?.(
      '[data-automation-id="progressBar"] [data-automation-id="progressBarActiveStep"]')
    ?.textContent?.replace(/\s+/g, " ").trim()
}

function ts(e) {
  return e?.replace(/\s+/g, " ").trim().toLowerCase() || ""
}

function tu() {
  return tl()?.replace(/^current\s+step\s+\d+\s+of\s+\d+\s*/i, "").trim()
}

function tc(e) {
  let t = Array.from(document.querySelectorAll?.(e) || []);
  if (t.length > 0) return t;
  let r = document.querySelector?.(e);
  return r ? [r] : []
}

function td(e) {
  let t = tp([...tc(e4), ...tc(e5)]),
    r = tc("#mainContent, main"),
    n = tp([...t, ...r]);
  if (0 === n.length) return document;
  let o = n.filter(ta),
    i = o.length > 0 ? o : n,
    a = [tu(), e].map(ts).filter(Boolean);
  if (a.length > 0) {
    let e = i.find(e => e.getAttribute?.("data-automation-id") === "applyFlowPage" && a.some(t =>
      ts(e.textContent).includes(t)));
    if (e) return e;
    let t = i.find(e => a.some(t => ts(e.textContent).includes(t)));
    if (t) return t
  }
  return i[0] || document
}

function tf(e) {
  let t = e.getAttribute("data-automation-id")?.toLowerCase() || "",
    r = e.textContent?.toLowerCase() || "";
  return t.includes("accepttermsandagreement") || t.includes("agreement") || r.includes(
    "i agree to and accept the terms")
}

function tp(e) {
  let t = new Set,
    r = [];
  for (let n of e) t.has(n) || (t.add(n), r.push(n));
  return r
}

function tm(e, t) {
  return t.some(t => t !== e && "function" == typeof t.contains && t.contains(e))
}

function th(e, t) {
  return t.some(t => t !== e && "function" == typeof e.contains && e.contains(t))
}

function tg(e) {
  let t = e.getAttribute?.("data-automation-id") || "",
    r = e.getAttribute?.("aria-labelledby") || "",
    n = r.toLowerCase(),
    o = n.endsWith("-panel"),
    i = o && (n.startsWith("education-") || n.startsWith("schools-attended-") || n.includes(
      "-education-"));
  return t.startsWith("workExperience-") || t.startsWith("education-") || i || o && g.some(e => r
    .startsWith(e))
}

function tb(e) {
  let t = e;
  for (; t;) {
    if (tg(t)) return !0;
    t = t.parentElement
  }
  return !1
}

function ty(e) {
  return e?.replace(/\s+/g, " ").trim().toLowerCase() || ""
}

function tv(e) {
  let t = ty(e.getAttribute?.("data-automation-id")),
    r = ty(e.getAttribute?.("aria-label")),
    n = ty(e.textContent);
  return "add-button" === t || "add" === t || "add another" === t || "add" === n ||
    "add another" === n ||
    /^add( another)? (website|work experience|education|schooling|schools attended)$/.test(r)
}

function tw(e) {
  return Array.from(e.querySelectorAll?.("button") || []).some(tv)
}

function tS() {
  return tc(e5).some(ta)
}

function tE(e) {
  return e.closest?.(e5) || null
}

function tx(e) {
  let t = e.closest?.(e7) || null;
  if (t && t !== e && tw(t)) return t;
  let r = tE(e),
    n = e.parentElement;
  for (; n && n !== document.body && n !== r;) {
    if (tw(n)) return n;
    n = n.parentElement
  }
  return tw(e) ? e : null
}

function tC(e) {
  let t = e.getAttribute?.("data-automation-id") || "",
    r = e.getAttribute?.("aria-labelledby") || "";
  return "websitesSection" === t || "Websites-section" === r || "Website-section" === r
}

function tA(e) {
  let t = e.textContent?.trim().replace(/\s*\*\s*$/, "").trim();
  return !!t && tt.has(t)
}

function tk() {
  let e = (0, l.getOrderedNodesSafe)(te),
    t = (0, l.getOrderedNodesSafe)(e2).filter(tA);
  for (let r of t) {
    let t = r.nextElementSibling;
    for (; t && !e1.has(t.tagName);) e.push(t), t = t.nextElementSibling
  }
  return tp(e)
}

function tT(e, t) {
  let r = e.closest?.(e7) || null;
  return r && tC(r) ? r : t.find(t => t === e || "function" == typeof t.contains && t.contains(
    e)) || null
}

function tF(e) {
  return tS() && !!tx(e)
}

function tI(e) {
  let t = `${e||""} ${tu()||""}`.toLowerCase().trim();
  return t.includes("my experience") || tS()
}

function tj() {
  let {
    sections: e
  } = tz("My Experience"), t = tk(), r = !1;
  return e.filter(e => !tb(e) && (tT(e, t) ? !r && (r = !0, !0) : !tF(e)))
}
async function tD() {
  let e = [];
  for (let t of tj()) {
    let r = await tZ(t);
    r && e.push(r)
  }
  return e
}

function tP() {
  let e = {};
  for (let t of tj()) {
    let r = t3(t);
    r && (e[r.label] = r.value)
  }
  return e
}

function t_(e) {
  return e.closest?.(e6) || null
}

function tL(e, t) {
  return e !== document && "function" == typeof e.contains && e.contains(t)
}

function tR(e, t) {
  if (t === document) return !0;
  let r = t_(e);
  return !r || r === t || tL(t, r)
}

function tO(e, t) {
  return e.filter(e => ta(e) && tR(e, t))
}

function tM(e) {
  return !!e.querySelector?.(
    'input:not([type="hidden"]), textarea, select, button[aria-haspopup="listbox"]')
}

function tN(e) {
  return !!e.querySelector?.("label, legend")
}

function t$(e, t) {
  return e.querySelectorAll?.(t).length || 0
}

function tB(e) {
  let t = e.getAttribute?.("data-automation-id")?.toLowerCase() || "",
    r = e.getAttribute?.("role")?.toLowerCase() || "",
    n = e.tagName?.toLowerCase() || "",
    o = e.textContent?.replace(/\s+/g, " ").trim() || "",
    i = t$(e, e9),
    a = t$(e, "label, legend");
  return !!(e === document.body || "div" === n && !t && !r && o.toLowerCase().includes(
    "skip to main content")) || "div" === n && !t && !r && (o.length > 2e3 || i > 12 || a > 24)
}

function tq(e, t, r) {
  let n = e.parentElement;
  for (; n && n !== document.body && !(n === r || t.includes(n) || tm(n, t));) {
    if (tM(n) && tN(n) && !tB(n)) return n;
    n = n.parentElement
  }
  return null
}

function tU(e, t) {
  return Array.from("function" == typeof e.querySelectorAll ? e.querySelectorAll(t) : document
    .querySelectorAll(t))
}

function tH(e, t) {
  let r = Array.from(tU(t, e8)),
    n = tU(t, e9).map(r => tq(r, e, t)).filter(Boolean),
    o = tp([...r, ...n]);
  return o.filter(r => !(r === t || e.includes(r) || r.closest?.(e3) || tm(r, e) || th(r, e) || !tM(
    r) || !tN(r) || !ta(r) || tB(r)))
}

function tY(e, t) {
  let r = `${e||""} ${tl()||""}`.toLowerCase().trim();
  return r.includes("voluntary") || r.includes("disclosure") || t.some(tf)
}

function tz(e) {
  let t = td(e),
    r = tO((0, l.getOrderedNodesSafe)('.//div[starts-with(@data-automation-id, "formField-")]', t),
      t),
    n = tY(e, r),
    o = t === document || r.length > 0 && !n ? [] : tO((0, l.getOrderedNodesSafe)(
      './/div[starts-with(@data-automation-id, "formField-")]', document), t),
    i = tp([...o, ...r]),
    a = tY(e, i);
  if (!a) return {
    sections: i,
    additionalSections: [],
    shouldCollectAdditionalSections: a
  };
  let s = tH(i, t);
  return {
    sections: tp([...i, ...s]),
    additionalSections: s,
    shouldCollectAdditionalSections: a
  }
}

function tV(e) {
  let t = (0, l.getOrderedNodesSafe)(".//label | .//legend", e)[0];
  return G(t?.textContent || "")
}

function tW(e) {
  return e.some(e => {
    let t = (0, u.normalizeFieldLabel)(tV(e), {
      loose: !0
    });
    return "country" === t || "country / territory" === t
  })
}

function tG(e) {
  let t = (0, u.normalizeFieldLabel)(tV(e), {
    loose: !0
  });
  return "country" === t || "country / territory" === t
}

function tK(e) {
  return e.length > 0 && e.every(tG)
}

function tX(e) {
  return e.map(e => {
    let t = e.getAttribute?.("data-automation-id") || "",
      r = tV(e),
      n = t$(e, e9);
    return `${t}:${r}:${n}`
  }).join("|")
}
async function tJ(e) {
  let t = "",
    r = 0;
  await (0, i.waitForCondition)(() => {
    let {
      sections: n
    } = tz(e), o = tX(n);
    return !o || tK(n) ? (t = "", r = 0, !1) : (o === t ? r += 1 : (t = o, r = 1), r >= to)
  }, {
    timeout: tr,
    interval: tn,
    observeTarget: document.body
  })
}
async function tQ(e = 0) {
  let t = [],
    r = ti();
  if (tI(r)) return t.push(...await t2()), await (0, s.delay)(200), t.push(...await t0()), await (
    0, s.delay)(200), t.push(...await tD()), t;
  {
    let n = tz(r);
    n.sections.length > 0 && tW(n.sections) && await tJ(r);
    let {
      sections: o,
      additionalSections: a,
      shouldCollectAdditionalSections: l
    } = tz(r);
    if (l && e < 3 && 0 === a.length && o.some(tf)) {
      let t = 2e3 * Math.pow(1.5, e),
        n = o.length,
        a = await (0, i.waitForCondition)(() => {
          let e = tz(r);
          return e.additionalSections.length > 0 || e.sections.length > n
        }, {
          timeout: t,
          interval: 200,
          observeTarget: document.body
        });
      if (a) return await tQ(e + 1)
    }
    if (0 === o.length) {
      if (e < 3) {
        let t = 2e3 * Math.pow(1.5, e);
        return await (0, i.waitForCondition)(() => tz(r).sections.length > 0, {
          timeout: t,
          interval: 200,
          observeTarget: document.body
        }), await tQ(e + 1)
      }
      throw Error(f.WORKDAY_NO_FORM_FIELDS_ERROR_MESSAGE)
    }
    let s = [];
    for (let e of o) {
      let t = await tZ(e);
      t && s.push({
        section: e,
        rule: t
      })
    }
    let u = X(s.map(({
      section: e,
      rule: t
    }) => ({
      rule: t,
      label: t.label,
      sectionHeading: ee(e)
    })));
    for (let {
        rule: e,
        label: r,
        sectionHeading: n
      }
      of u) r !== e.label ? (console.debug(
      "[MyWorkday][autofill-debug] duplicate-rule-label-resolved", {
        rawLabel: e.label,
        sectionHeading: n,
        resolvedLabel: r
      }), t.push({
      ...e,
      label: r
    })) : t.push(e);
    if (0 === t.length && e < 3) {
      let t = 2e3 * Math.pow(1.5, e);
      return await (0, i.waitForCondition)(() => tz(r).sections.length > 0, {
        timeout: t,
        interval: 200,
        observeTarget: document.body
      }), await tQ(e + 1)
    }
    return t
  }
}
async function tZ(e) {
  let t = (0, l.getOrderedNodes)(".//label | .//legend", e);
  if (0 === t.length) return console.warn("labelElements not found", e), null;
  let r = t[0],
    n = r.textContent?.trim() || "",
    o = G(n),
    i = (0, l.getFirstOrderedNodeSafe)(".//abbr", e),
    s = (0, l.getFirstOrderedNodeSafe)('.//*[normalize-space(.)="*"]', e),
    u = (0, l.getFirstOrderedNodeSafe)('.//*[@aria-required="true" or @required]', e),
    c = i?.textContent?.trim() === "*" || s?.textContent?.trim() === "*" || n.includes("*") || eo(
      o) || !!u;
  if (J(o)) {
    let t = await eT({
      section: e,
      label: o,
      labelElement: r,
      required: c
    });
    if (t) return t
  }
  let d = (0, l.getFirstOrderedNodeSafe)('.//div[@data-automation-id="multiSelectContainer"]', e);
  if (d) {
    let e = (0, l.getFirstOrderedNodeSafe)(".//input[@placeholder='Search']", d),
      t = R(o) ? await eW(d, e) : [],
      n = {
        label: o,
        $label: r,
        required: c,
        type: a.FIELD_TYPE.MULTI_SELECT,
        $input: e,
        options: t
      };
    return n
  }
  let f = eu(e);
  if (f) return await ek({
    label: o,
    labelElement: r,
    required: c,
    listboxSelectElement: f
  });
  let p = (0, l.getFirstOrderedNode)('.//input[@placeholder="Search"]', e);
  if (p) {
    let e = {
      label: o,
      $label: r,
      required: c,
      type: a.FIELD_TYPE.SEARCH,
      $input: p
    };
    return e
  }
  let m = (0, l.getFirstOrderedNode)(".//input | .//textarea", e);
  if (m) {
    let t = m.getAttribute("type");
    if ("acceptTermsAndAgreements" === m.name || m.attributes.getNamedItem("data-automation-id")
      ?.value === "agreementCheckbox") {
      let e = {
        label: o,
        $label: r,
        required: c,
        type: a.FIELD_TYPE.CHECKBOX,
        $checkboxs: [m],
        options: ["true"]
      };
      return e
    }
    if ("TEXTAREA" === m.tagName || "INPUT" === m.tagName && "text" === t) {
      let e = {
        label: o,
        $label: r,
        required: c,
        type: en(o),
        $input: m
      };
      return e
    }
    if ("INPUT" === m.tagName && ("checkbox" === t || "radio" === t)) {
      let n = (0, l.getFirstOrderedNode)(
          './ancestor::fieldset[1] | ./ancestor::div[starts-with(@data-automation-id, "formField-")]',
          m),
        i = (0, l.getFirstOrderedNode)('.//div[@role="rowgroup"]', e),
        s = (0, l.getOrderedNodes)(".//label", n);
      i && (s = (0, l.getOrderedNodesSafe)(".//label", i));
      let u = [],
        d = [];
      for (let e of s) {
        let t = (0, l.getFirstOrderedNodeSafe)("..//input[@type='checkbox' or @type='radio']", e);
        t && (u.push(e), d.push(t))
      }
      let f = new Set,
        p = [],
        h = [];
      for (let e = 0; e < d.length; e++) f.has(d[e]) || (f.add(d[e]), p.push(d[e]), h.push(u[e]));
      if ("checkbox" === t) {
        let e = {
          label: o,
          $label: r,
          required: c,
          type: a.FIELD_TYPE.CHECKBOX,
          $checkboxs: 0 == p.length ? [m] : p,
          options: h.map(e => e.textContent?.trim())
        };
        return e
      }
      if ("radio" === t) {
        let e = {
          label: o,
          $label: r,
          required: c,
          type: a.FIELD_TYPE.CHECKBOX,
          $checkboxs: p,
          options: h.map(e => e.textContent?.trim())
        };
        return e
      }
    }
    let n = e.querySelector('[data-automation-id="dateInputWrapper"]');
    if (n) {
      let e = {
        label: o,
        $label: r,
        required: c,
        type: a.FIELD_TYPE.DATE,
        description: er(n),
        $input: n
      };
      return e
    }
  }
}
async function t0() {
  let e = (0, l.getOrderedNodes)(e2),
    t = [],
    r = async e => {
      let t = [];
      for (let r of e) {
        let e = await tZ(r);
        e && t.push(e)
      }
      return 0 === t.length ? null : (await eG(t), {
        label: "Education",
        required: !0,
        type: a.FIELD_TYPE.EDUCATION,
        children: t,
        options: eK(t)
      })
    };
  for (let n of e)
    if (et(n.textContent)) {
      let e = (0, l.getOrderedNodes)("following-sibling::*", n);
      for (let n of e) {
        if (e1.has(n.tagName)) break;
        let e = Array.from(new Set((0, l.getOrderedNodesSafe)(`.//descendant-or-self::div[${e0}]`,
            n))),
          o = e.length > 0 ? e : [n];
        for (let e of o) {
          let n = [];
          n.push(...(0, l.getOrderedNodesSafe)(
            './/descendant-or-self::div[starts-with(@data-automation-id, "formField-")]', e));
          let o = await r(n);
          o && t.push(o)
        }
      }
    } return t
}
async function t2() {
  let e = (0, l.getOrderedNodes)(e2),
    t = [];
  for (let r of e)
    if (h.has(r.textContent?.trim().replace(/\s*\*$/, ""))) {
      let e = (0, l.getOrderedNodes)("following-sibling::*", r);
      for (let r of e) {
        if (e1.has(r.tagName)) break;
        let e = [];
        e.push(...(0, l.getOrderedNodesSafe)(
          './/descendant-or-self::div[starts-with(@data-automation-id, "formField-")]', r));
        let n = [];
        for (let t of e) {
          let e = await tZ(t);
          e && n.push(e)
        }
        if (0 === n.length) continue;
        let o = {
          label: "Employment",
          required: !0,
          type: a.FIELD_TYPE.EMPLOYMENT,
          children: n,
          options: [...n.map(e => ({
            type: e.type,
            label: e.label,
            ...e.options?.length ? {
              options: e.options
            } : {},
            ...e.description ? {
              description: e.description
            } : {}
          }))]
        };
        t.push(o)
      }
    } return t
}

function t1() {
  let e = (0, l.getFirstOrderedNode)('.//input[@type="submit" and @value="Submit Profile"]'),
    t = e ? e.textContent?.trim() : "";
  return t
}

function t3(e, t = !1) {
  let r = (0, l.getOrderedNodes)(".//label | .//legend", e);
  if (0 === r.length) return console.warn("labelElements not found", e), null;
  let n = r[0],
    o = n.textContent?.trim().replace("*", "");
  if (P(o)) return null;
  let i = (0, l.getFirstOrderedNodeSafe)('.//div[@data-automation-id="multiSelectContainer"]', e);
  if (i) {
    let r = (0, l.getOrderedNodesSafe)('.//li[@data-automation-id="menuItem"]', e).map(e => e
      .textContent?.trim());
    return {
      label: o,
      value: t && r.length <= 1 ? r[0] ?? "" : JSON.stringify(r)
    }
  }
  let a = (0, l.getFirstOrderedNodeSafe)('.//button[@aria-haspopup="listbox"][@type="button"]', e);
  if (a) return {
    label: o,
    value: a.textContent?.trim()
  };
  let s = (0, l.getFirstOrderedNode)('.//input[@placeholder="Search"]', e);
  if (s) return {
    label: o,
    value: l.getFirstOrderedNodeSafe('.//li[@data-automation-id="menuItem"]')?.textContent?.trim()
  };
  let u = (0, l.getFirstOrderedNode)(".//input | .//textarea", e);
  if (u?.name == "acceptTermsAndAgreements") return {
    label: o,
    value: u.checked ? "true" : "false"
  };
  if (u) {
    let t = u.getAttribute("type");
    if ("TEXTAREA" === u.tagName || "INPUT" === u.tagName && ("text" === t || "number" === t))
      return {
        label: o,
        value: u.value
      };
    if ("INPUT" === u.tagName && ("checkbox" === t || "radio" === t)) {
      let r = (0, l.getFirstOrderedNode)(
          './ancestor::fieldset[1] | ./ancestor::div[starts-with(@data-automation-id, "formField-")]',
          u),
        n = (0, l.getFirstOrderedNode)('.//div[@role="rowgroup"]', e),
        i = (0, l.getOrderedNodes)(".//label", r);
      n && (i = (0, l.getOrderedNodesSafe)(".//label", n));
      let a = [],
        s = [];
      for (let e of i) {
        let t = (0, l.getFirstOrderedNodeSafe)("..//input[@type='checkbox' or @type='radio']", e);
        t && (a.push(e), s.push(t))
      }
      let c = new Set,
        d = [],
        f = [];
      for (let e = 0; e < s.length; e++) c.has(s[e]) || (c.add(s[e]), d.push(s[e]), f.push(a[e]));
      if ("checkbox" === t) {
        if (0 === i.length) return {
          label: o,
          value: u.checked ? "true" : "false"
        };
        let e = eo(o) ? el : ea,
          t = f.map((t, r) => {
            let n = d[r];
            return n && e(n) ? es(n, t) : null
          }).filter(e => !!e);
        return {
          label: o,
          value: JSON.stringify(t)
        }
      }
      if ("radio" === t) {
        let e = eo(o) ? el : ea,
          t = d.map((e, t) => ({
            input: e,
            option: f[t]
          })).find(({
            input: t
          }) => e(t));
        return {
          label: o,
          value: t ? es(t.input, t.option) : ""
        }
      }
    }
    let r = e.querySelector('[data-automation-id="dateInputWrapper"]');
    if (r) {
      let e = (0, l.getOrderedNodes)(".//input", r);
      return {
        label: o,
        value: e.map(e => e.value).join("/")
      }
    }
  }
}

function t4(e, t, r = {}, n) {
  let o = (0, l.getOrderedNodes)(e2),
    i = [];
  for (let a of o) {
    let o = n?.(a.textContent) ?? e.has(Q(a.textContent));
    if (o) {
      let e = 0,
        n = (0, l.getOrderedNodes)("following-sibling::*", a);
      for (let o of n) {
        if (e1.has(o.tagName)) break;
        let n = [];
        n.push(...(0, l.getOrderedNodesSafe)(`.//descendant-or-self::div[${t}]`, o));
        for (let t = 0; t < n.length; t++) {
          let o = n[t],
            a = {},
            s = e++,
            u = o.getAttribute(p.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE);
          r.markEducationRows && (u = String(s), o.setAttribute(p
            .MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE, u));
          let d = (0, c.getEducationTraceForRow)(o, {
              attributes: p.MYWORKDAY_EDUCATION_TRACE_ATTRIBUTES,
              includeEducationTrace: r.includeEducationTrace,
              markEducationRows: r.markEducationRows,
              runId: r.educationTraceRunId,
              snapshotIndex: s
            }),
            f = [];
          for (let e of (f.push(...(0, l.getOrderedNodesSafe)(
                './/descendant-or-self::div[starts-with(@data-automation-id, "formField-")]', o
                )), f)) {
            let t = t3(e, !0);
            t && (a[t.label] = t.value)
          }
          if (r.includeEducationSnapshotIndex && u) {
            let e = Number(u);
            Number.isInteger(e) && e >= 0 && (a[p.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY] = e)
          }
          d && (a[c.EDUCATION_TRACE_KEY] = d), i.push(a)
        }
      }
    }
  }
  return i
}

function t5(e = {}) {
  let t = {},
    r = ti();
  if ("My Experience" == r) t.education = t4(m, e0, e, et), t.employment = t4(h, eX), Object.assign(
    t, tP());
  else {
    let e = [];
    for (let r of (0 === (e = (0, l.getOrderedNodes)(
          '(//h2)[1]/..//div[starts-with(@data-automation-id, "formField-")]', document))
        .length && (e = (0, l.getOrderedNodes)(
          '//div[starts-with(@data-automation-id, "formField-")]', document)), e)) {
      let e = t3(r);
      e && (t[e.label] = e.value)
    }
  }
  return t
}

