// @ts-nocheck
/**
 * MyWorkday — form rule discovery and snapshot helpers.
 */

import * as checkboxLabel from "../../methods/checkbox-label.js";
import * as observer from "../../methods/observer.js";
import * as enums from "../../../core/enums.js";
import * as xpath from "../../../core/xpath.js";
import * as delay from "../../../utils/delay.js";
import * as fieldLabel from "../../../utils/fieldLabel.js";
import * as educationItemTrace from "../education-item-trace.js";
import * as fiberOptions from "./fiber-options.ts";
import * as formLoss from "./form-loss.ts";
import * as snapshotAlignment from "./snapshot-alignment.ts";
let m = /* @__PURE__ */ new Set([
    "Education",
    "Schools Attended",
    "Schooling",
    "Academic Experience",
    "Education History",
    "Education (Optional)",
    "Education/Schooling",
  ]),
  h = /* @__PURE__ */ new Set([
    "Add a Job",
    "Relevant Experience",
    "Work Experience",
    "Employment Experience",
    "Employment History",
    "Work History",
    "Work History (Optional)",
    "Work or Other Experience",
    "Where have you worked?",
    "Professional Experience",
    "Employment Detail",
    "Job History/Work Experience",
  ]),
  g = [
    "Add-a-Job-",
    "Education-",
    "Schools-Attended-",
    "Work-Experience-",
    "Employment-Experience-",
    "Professional-Experience-",
    "Relevant-Experience-",
    "Work-or-Other-Experience-",
    "Where-have-you-worked?-",
    "Employment-History-",
    "Employment-Detail-",
    "Work-History-",
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
  D = /* @__PURE__ */ new Map();
function P(e) {
  let t = fieldLabel.normalizeFieldLabel(e, {
    loose: true,
  });
  return "skills" === t || "add skills" === t || "type to add skills" === t;
}
function _(e) {
  return e.filter((e10) => !P(e10.label));
}
function L(e) {
  return e.fieldRequiredStatus.find((e10) => P(e10.label))?.label ?? null;
}
function R(e) {
  let t = fieldLabel.normalizeFieldLabel(e, {
      loose: true,
    }),
    r = t.replace(/\s/g, "");
  return (
    "country phone code" === t ||
    "phone country code" === t ||
    "country region phone code" === t ||
    r.includes("countryphonecode") ||
    r.includes("phonecountrycode") ||
    r.includes("countryregionphonecode") ||
    (r.includes("country") && r.includes("phone") && r.includes("code"))
  );
}
function O(e) {
  if (R(e)) return false;
  let t = fieldLabel.normalizeFieldLabel(e, {
      loose: true,
    }),
    r = t.replace(/\s/g, "");
  return (
    "country" === t ||
    "country territory" === t ||
    "country region" === t ||
    "countryterritory" === r ||
    "countryregion" === r
  );
}
function M(e) {
  return e.fieldRequiredStatus
    .filter((e10) => O(e10.label))
    .map((e10) => e10.label);
}
function N(e, t) {
  let r = fieldLabel.normalizeFieldLabel(t);
  return (
    e.fieldRequiredStatus.find(
      (e10) => fieldLabel.normalizeFieldLabel(e10.label) === r,
    )?.label ?? null
  );
}
function $(e, t) {
  let r = fieldLabel.normalizeFieldLabel(t);
  return e.filledFields.some(
    (e10) => fieldLabel.normalizeFieldLabel(e10) === r,
  );
}
function B(e) {
  if (Array.isArray(e)) return e.some(B);
  if (null == e) return false;
  let t = String(e).trim().toLowerCase();
  return !["", "select one", "[]", "/", "//"].includes(t);
}
function q(e) {
  return (
    !!Array.isArray(e) &&
    e.some(
      (e10) =>
        !!e10 &&
        "object" == typeof e10 &&
        Object.entries(e10).some(
          ([e11, t]) =>
            e11 !== snapshotAlignment.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY &&
            e11 !== educationItemTrace.EDUCATION_TRACE_KEY &&
            B(t),
        ),
    )
  );
}
function U(e, t) {
  let r = [],
    n = [
      {
        label: "Employment",
        groups: t.employment,
      },
      {
        label: "Education",
        groups: t.education,
      },
    ];
  for (let { label: t6, groups: o2 } of n) {
    if (!q(o2)) continue;
    let n2 = N(e, t6);
    !n2 || $(e, n2) || r.push(n2);
  }
  return r;
}
function H(e, t = document) {
  let r = z(e);
  return !r || $(e, r) ? [] : V(t) ? [r] : [];
}
function Y(e, t = document) {
  let r = z(e);
  return r && $(e, r) ? (V(t) ? [] : [r]) : [];
}
function z(e) {
  return e.fieldRequiredStatus.find((e10) => eo(e10.label))?.label ?? null;
}
function V(e = document) {
  let t = Array.from(
    e.querySelectorAll(
      'input[type="checkbox"][id*="disabilityStatus"], input[type="checkbox"][name*="disabilityStatus"]',
    ),
  );
  return t.some(el);
}
function W(e = "") {
  return e
    .replace(/[\u200b-\u200d\ufeff]/g, "")
    .replace(/\u00a0/g, " ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}
function G(e = "") {
  return e.replace(/[\u200b-\u200d\ufeff]/g, "").replace(/\*/g, "").trim();
}
function K(e, t) {
  let r = /\bname\s*$/i,
    n = t.replace(/\s+name\s*$/i, "").trim();
  return n && r.test(t) && r.test(e) ? `${n} ${e}` : `${t}: ${e}`;
}
function X(e) {
  let t = /* @__PURE__ */ new Map();
  for (let { label: r2 } of e) t.set(r2, (t.get(r2) || 0) + 1);
  let r = e.map(({ label: e10, sectionHeading: r2 }) =>
      r2 && (t.get(e10) || 0) > 1 ? K(e10, r2) : e10,
    ),
    n = /* @__PURE__ */ new Map();
  for (let e10 of r) n.set(e10, (n.get(e10) || 0) + 1);
  return e.map((e10, t6) => {
    let o2 = r[t6];
    return 1 === (n.get(o2) || 0)
      ? {
          ...e10,
          label: o2,
        }
      : e10;
  });
}
function J(e = "") {
  return "degree" === W(G(e));
}
function Q(e) {
  return (e || "").trim().replace(/\s*\*$/, "");
}
function Z(e) {
  return e?.tagName !== "H4" ? "" : Q(e.textContent);
}
function ee(e) {
  let t = t_(e),
    r = e;
  for (; r;) {
    for (let e11 of Array.from(r.children || [])) {
      let t6 = Z(e11);
      if (t6) return t6;
    }
    let e10 = r.previousElementSibling;
    for (; e10;) {
      let t6 = Z(e10);
      if (t6) return t6;
      e10 = e10.previousElementSibling;
    }
    if (r === t) break;
    r = r.parentElement;
  }
  return "";
}
function et(e) {
  let t = Q(e);
  return m.has(t) || W(t).includes("education");
}
function er(e) {
  let t = () => {
      let t6 = !!e.querySelector(
          '[data-automation-id="dateSectionMonth-input"]',
        ),
        r2 = !!e.querySelector('[data-automation-id="dateSectionDay-input"]'),
        n2 = !!e.querySelector('[data-automation-id="dateSectionYear-input"]');
      return t6 && r2 && n2
        ? "MM/DD/YYYY"
        : t6 && n2
          ? "MM/YYYY"
          : n2
            ? "YYYY"
            : "";
    },
    r = t();
  if (r) return r;
  let n = (e10) => {
      let t6 = e10.trim().toUpperCase();
      return "MM/DD/YYYY" === t6 || "MM/YYYY" === t6 || "YYYY" === t6 ? t6 : "";
    },
    o2 = (e10 = "") => {
      let t6 = e10.trim(),
        r2 = t6.match(/^current value is\s+(.+?)\s*$/i);
      return n(r2?.[1] || "");
    },
    i2 = o2(e.previousElementSibling?.textContent || "");
  if (i2) return i2;
  let a2 =
      ("function" == typeof e.closest
        ? e.closest('[data-automation-id^="formField-"]')
        : null) || e.parentElement,
    l2 = a2?.querySelectorAll?.('[aria-hidden="true"]') || [];
  for (let e10 of Array.from(l2)) {
    let t6 = o2(e10.textContent || "");
    if (t6) return t6;
  }
  return "MM/DD/YYYY";
}
function en(e) {
  return /\b(salary|compensation|pay)\b/i.test(e)
    ? /\b(range|minimum and maximum|min and max)\b/i.test(e)
      ? enums.FIELD_TYPE.TEXT
      : enums.FIELD_TYPE.NUMBER
    : enums.FIELD_TYPE.TEXT;
}
function eo(e = "") {
  let t = W(G(e))
    .replace(/[:\uff1a]\s*$/, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return "please check one of the boxes below" === t;
}
function ei(e) {
  let t = [
    e.parentElement,
    e.parentElement?.parentElement,
    "function" == typeof e.closest ? e.closest("label") : null,
  ];
  return t.some((e10) =>
    e10?.querySelector?.(
      'svg[class*="wd-icon-check"], .wd-icon-check-small, .wd-icon-check',
    ),
  );
}
function ea(e) {
  return (
    e.getAttribute?.(b) !== "true" &&
    (e.checked ||
      e.getAttribute?.("aria-checked") === "true" ||
      e.parentElement?.getAttribute?.("aria-checked") === "true")
  );
}
function el(e) {
  return (
    e.getAttribute?.(b) !== "true" &&
    (e.getAttribute?.("aria-checked") === "true" ||
      e.parentElement?.getAttribute?.("aria-checked") === "true" ||
      ei(e))
  );
}
function es(e, t) {
  return (
    t?.textContent?.trim() ||
    t?.innerText?.trim() ||
    checkboxLabel.getRadioCheckText(e)
  );
}
function eu(e) {
  return xpath.getFirstOrderedNodeSafe(
    './/button[@aria-haspopup="listbox"][@type="button"]',
    e,
  );
}
function ec(e) {
  let t = e?.replace(/\s+/g, " ").trim() || "";
  return "select one" === t.toLowerCase() ? "" : t;
}
function ed(e) {
  return e.map(ec).filter(Boolean);
}
function ef(e) {
  return e?.querySelectorAll
    ? Array.from(
        e.querySelectorAll(
          'li:not(#select-one), [role="option"]:not(#select-one)',
        ),
      )
    : [];
}
function ep(e) {
  let t = e?.getBoundingClientRect?.();
  return t &&
    Number.isFinite(t.top) &&
    Number.isFinite(t.bottom) &&
    Number.isFinite(t.left) &&
    Number.isFinite(t.right)
    ? t
    : null;
}
function em(e, t) {
  let r = ep(e);
  if (!r) return null;
  let n = Math.max(0, Math.min(t.right, r.right) - Math.max(t.left, r.left));
  if (n <= 0) return null;
  let o2 = Math.min(Math.abs(r.top - t.bottom), Math.abs(t.top - r.bottom)),
    i2 = Math.abs(r.left - t.left);
  return o2 + i2 / 10;
}
function eh() {
  let e = Array.from(
    document.querySelectorAll?.('ul[role="listbox"][tabindex="-1"]') || [],
  );
  return e.length > 0
    ? e
    : xpath.getOrderedNodes('//ul[@role="listbox"][@tabindex="-1"]');
}
function eg(e) {
  let t = e.getAttribute?.("aria-controls");
  if (!t || "function" != typeof document.getElementById) return null;
  let r = document.getElementById(t);
  return r?.getAttribute?.("role") !== "listbox" ? null : r;
}
function eb(e) {
  let t = eg(e);
  if (ef(t).length > 0) return t;
  let r = eh().filter((e10) => ef(e10).length > 0);
  if (0 === r.length) return null;
  let n = ep(e);
  if (!n) return r[0];
  let o2 = r
    .map((e10) => ({
      listbox: e10,
      distance: em(e10, n),
    }))
    .filter((e10) => null !== e10.distance && e10.distance <= j)
    .sort((e10, t6) => e10.distance - t6.distance);
  return o2[0]?.listbox ?? null;
}
function ey() {
  return Array.from(document.querySelectorAll?.(F) || []);
}
function ev(e) {
  return /\+\d{1,4}\b/.test(e);
}
function ew() {
  return ey()
    .flatMap((e) =>
      e?.querySelectorAll ? Array.from(e.querySelectorAll(I)) : [],
    )
    .map((e) => ec(e.textContent))
    .filter(ev)
    .filter(Boolean);
}
function eS(e) {
  if ("function" == typeof e.click) {
    e.click();
    return;
  }
  "function" == typeof e.dispatchEvent &&
    e.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: "undefined" != typeof window ? window : null,
      }),
    );
}
function eE(e, t) {
  let r = e.querySelector?.(
    '[data-automation-id="promptIcon"], [data-automation-id="promptSearchButton"]',
  );
  if (r) {
    eS(r);
    return;
  }
  (t?.focus?.(), t?.click?.());
}
function ex(e) {
  if ("function" != typeof KeyboardEvent) return;
  let t = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: "Escape",
    code: "Escape",
  });
  (e?.dispatchEvent?.(t), document.dispatchEvent?.(t));
}
async function eC() {
  let e = /* @__PURE__ */ new Set(),
    t = () => {
      for (let t6 of ew()) e.add(t6);
    };
  await observer.waitForCondition(() => (t(), e.size > 0), {
    timeout: k,
    interval: 50,
    observeTarget: document.body,
  });
  for (let e10 = 0; e10 < T; e10++) {
    t();
    let e11 = ey().filter(
      (e12) => (e12.scrollHeight || 0) > (e12.clientHeight || 0),
    );
    if (0 === e11.length) break;
    let r = false;
    for (let t6 of e11) {
      let e12 = Math.max(0, (t6.scrollHeight || 0) - (t6.clientHeight || 0)),
        n = t6.scrollTop || 0;
      e12 <= 0 ||
        n >= e12 - 2 ||
        ((t6.scrollTop = Math.min(
          e12,
          n + Math.max(t6.clientHeight || 0, 240),
        )),
        t6.dispatchEvent?.(
          new Event("scroll", {
            bubbles: true,
          }),
        ),
        (t6.scrollTop || 0) === n || (r = true));
    }
    if (!r) break;
    await delay.delay(80);
  }
  return (t(), Array.from(e));
}
async function eA(e, t) {
  eE(e, t);
  let r = await eC();
  return (ex(t), r);
}
async function ek({
  label: e,
  labelElement: t,
  required: r,
  listboxSelectElement: n,
  deadlineMs: o2,
}) {
  let i2 = (e10) => (o2 ? Math.max(0, Math.min(e10, o2 - Date.now())) : e10),
    u2 = () => ef(eb(n)),
    c2 = () =>
      xpath.getOrderedNodes(
        '//ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]',
      ),
    f2 = () => {
      let e10 = u2();
      return e10.length > 0 ? e10 : c2();
    },
    p2 = () => f2(),
    m2 = () => p2().length > 0,
    h2 = () => {
      n.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      );
    },
    g2 = async () => {
      let e10 = p2();
      if (e10.length > 0) return e10;
      let t6 = i2(600);
      return t6 <= 0
        ? []
        : await new Promise((r2) => {
            let n2 = new MutationObserver(() => {
              (e10 = p2()).length > 0 && (n2.disconnect(), r2(e10));
            });
            if (
              (n2.observe(document.body, {
                childList: true,
                subtree: true,
              }),
              (e10 = p2()).length > 0)
            ) {
              (n2.disconnect(), r2(e10));
              return;
            }
            setTimeout(() => {
              (n2.disconnect(), r2([]));
            }, t6);
          });
    },
    b2 = ed(await fiberOptions.getWorkdaySelectOptionsViaFiber(n));
  if (b2.length > 0)
    return {
      label: e,
      required: r,
      $label: t,
      $input: n,
      type: enums.FIELD_TYPE.LISTBOX,
      options: b2,
    };
  let y2 = xpath.getOrderedNodes(
    '//div[@visibility="closing"]/ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]',
  );
  if (y2.length > 0) {
    let e10 = xpath.getOrderedNodes(
      '//button[@aria-expanded="true" and @aria-haspopup="listbox"]',
    );
    for (let t6 of e10)
      (t6.click(),
        await delay.delay(20),
        t6.click(),
        await new Promise((e11) => {
          let t7 = new MutationObserver(() => {
            let r2 = xpath.getOrderedNodes(
              '//div[@visibility="closing"]/ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]',
            );
            0 === r2.length && (t7.disconnect(), e11());
          });
          (t7.observe(document.body, {
            childList: true,
            subtree: true,
          }),
            setTimeout(() => {
              (t7.disconnect(), e11());
            }, 600));
        }));
  }
  h2();
  let v2 = await g2();
  0 === v2.length && (n.click?.(), (v2 = await g2()));
  let w2 = {
    label: e,
    required: r,
    $label: t,
    $input: n,
    type: enums.FIELD_TYPE.LISTBOX,
    options: ed(v2.map((e10) => e10.textContent)),
  };
  return (
    h2(),
    await new Promise((e10) => {
      let t6 = new MutationObserver(() => {
        m2() || (t6.disconnect(), e10());
      });
      (t6.observe(document.body, {
        childList: true,
        subtree: true,
      }),
        setTimeout(() => {
          (t6.disconnect(), e10());
        }, 600));
    }),
    w2
  );
}
async function eT({ section: e, label: t, labelElement: r, required: n }) {
  let o2 = Date.now() + y,
    i2 = Math.max(1, Math.ceil(y / v));
  for (let a2 = 0; a2 < i2 && Date.now() <= o2; a2++) {
    let i3 = eu(e);
    if (i3) {
      let e10 = await ek({
        label: t,
        labelElement: r,
        required: n,
        listboxSelectElement: i3,
        deadlineMs: o2,
      });
      if (e10.options.length > 0) return e10;
    }
    let a3 = o2 - Date.now();
    if (a3 <= 0) break;
    await delay.delay(Math.min(v, a3));
  }
  return (
    console.warn(
      "[MyWorkday] Degree listbox did not become ready before timeout; continuing with fallback rule.",
    ),
    null
  );
}
function eF() {
  let e = /* @__PURE__ */ new Set(),
    t = /(?:https?:\/\/[^"'\s]+)?\/wday\/calypso\/cxs\/jobapplication\/[^/"'?\s]+/g,
    r = (r2 = "") => {
      let n2 = r2.match(t) || [];
      for (let t6 of n2)
        try {
          e.add(new URL(t6, window.location.origin).toString());
        } catch (e10) {
          console.warn("[myworkday] Failed to parse API base candidate:", e10);
        }
    },
    n =
      "function" == typeof performance?.getEntriesByType
        ? performance.getEntriesByType("resource")
        : [];
  for (let e10 of n) r(e10.name);
  let o2 = Array.from(
    document.querySelectorAll?.("[src], [href], [action]") || [],
  );
  for (let e10 of o2)
    r(
      e10.getAttribute("src") ||
        e10.getAttribute("href") ||
        e10.getAttribute("action") ||
        "",
    );
  for (let e10 of Array.from(document.scripts || []))
    (r(e10.src || ""), r(e10.textContent || ""));
  return (r(document.documentElement?.innerHTML || ""), Array.from(e));
}
function eI() {
  let e = window.location?.pathname || "",
    t = e.split("/").filter(Boolean),
    r = t.indexOf("recruiting"),
    n = t[r + 1],
    o2 = t[r + 2];
  return !(r < 0) && n && o2 && /^[A-Za-z0-9_-]+$/.test(n)
    ? new URL(
        `/wday/calypso/cxs/jobapplication/${n}`,
        window.location.origin,
      ).toString()
    : null;
}
function ej() {
  let e = window.location?.host || "",
    t = e.match(/^([A-Za-z0-9-]+)\.wd\d+\.myworkdayjobs\.com$/i),
    r = t?.[1];
  return r
    ? new URL(
        `/wday/calypso/cxs/jobapplication/${r}`,
        window.location.origin,
      ).toString()
    : null;
}
function eD() {
  if ("undefined" == typeof window) return null;
  let e = eF();
  return e[0] || eI() || ej();
}
function eP(e = "") {
  let t = W(G(e));
  return "field of study" === t;
}
function e_(e) {
  return Array.isArray(e.options) ? e.options : [];
}
function eL(e) {
  if (null == e) return "";
  let t =
      "string" == typeof e
        ? e
        : "object" == typeof e
          ? String(e.descriptor ?? e.label ?? e.name ?? e.value ?? "")
          : String(e),
    r = t.replace(/\s+/g, " ").trim();
  return "select one" === r.toLowerCase() ? "" : r;
}
function eR(e) {
  let t = Array.isArray(e)
    ? e
    : Array.isArray(e?.data)
      ? e.data
      : Array.isArray(e?.results)
        ? e.results
        : Array.isArray(e?.items)
          ? e.items
          : [];
  return Array.from(new Set(t.map(eL).filter(Boolean)));
}
function eO(e) {
  if (!e || "object" != typeof e) return null;
  let t = String(e.id ?? "").trim(),
    r = eL(e);
  return t && r
    ? {
        id: t,
        descriptor: r,
      }
    : null;
}
function eM(e) {
  let t = Array.isArray(e)
      ? e
      : Array.isArray(e?.data)
        ? e.data
        : Array.isArray(e?.results)
          ? e.results
          : Array.isArray(e?.items)
            ? e.items
            : [],
    r = /* @__PURE__ */ new Set(),
    n = [];
  for (let e10 of t) {
    let t6 = eO(e10);
    !t6 || r.has(t6.id) || (r.add(t6.id), n.push(t6));
  }
  return n;
}
async function eN(e) {
  if ("function" != typeof fetch) return null;
  try {
    let t = await fetch(e, {
      credentials: "include",
      headers: {
        accept: "application/json",
      },
    });
    if (!t.ok)
      return (
        console.warn(
          `[MyWorkday] Failed to fetch Workday options: ${t.status} ${t.statusText} ${e}`,
        ),
        null
      );
    return await t.json();
  } catch (e10) {
    return (
      console.warn("[MyWorkday] Failed to fetch Workday options:", e10),
      null
    );
  }
}
function e$(e) {
  if (!e) return null;
  try {
    let t = new URL(e, window.location.origin),
      r = t.pathname.match(/\/wday\/calypso\/cxs\/jobapplication\/([^/]+)/);
    return r?.[1] ?? null;
  } catch (e10) {
    return (
      console.warn("[MyWorkday] Failed to parse Workday API tenant:", e10),
      null
    );
  }
}
function eB() {
  let e = String(window?.workday?.tenant ?? "").trim();
  if (e) return e;
  let t = window.location?.host || "";
  return t.match(/^([A-Za-z0-9-]+)\.wd\d+\.myworkdayjobs\.com$/i)?.[1] ?? null;
}
function eq(e) {
  if ("undefined" == typeof window) return null;
  let t = e$(e) || eB();
  if (!t || !/^[A-Za-z0-9_-]+$/.test(t)) return null;
  try {
    let r = e
      ? new URL(e, window.location.origin).origin
      : window.location.origin;
    return new URL(`/wday/calypso/cxs/common/${t}`, r).toString();
  } catch (e10) {
    return (
      console.warn("[MyWorkday] Failed to build Workday common API base:", e10),
      null
    );
  }
}
async function eU(e) {
  if (!e || "function" != typeof fetch) return [];
  let t = `${e.replace(/\/$/, "")}${w}`;
  return eR(await eN(t));
}
async function eH(e) {
  if (!e || "function" != typeof fetch) return [];
  let t = `${e.replace(/\/$/, "")}${E}`;
  return eM(await eN(t));
}
async function eY(e) {
  if (!e || "function" != typeof fetch) return [];
  let t = `${e.replace(/\/$/, "")}${S}`;
  return eR(await eN(t)).filter(ev);
}
async function ez(e, t) {
  let r = `${e.replace(/\/$/, "")}/countries/${encodeURIComponent(t.id)}/${x}`;
  return eR(await eN(r)).filter(ev);
}
async function eV() {
  let e = eD(),
    t = eq(e);
  if (!e || !t) return [];
  let r = `${e.replace(/\/$/, "")}|${t.replace(/\/$/, "")}`,
    n = D.get(r);
  if (n) return n;
  let o2 = (async () => {
    let r2 = await eY(e);
    if (r2.length > 0) return r2;
    let n2 = await eH(e);
    if (0 === n2.length) return [];
    if (n2.length > C)
      return (
        console.info(
          `[MyWorkday] Skipping Country Phone Code API hydration for ${n2.length} countries.`,
        ),
        []
      );
    let o3 = Array.from(
        {
          length: n2.length,
        },
        () => [],
      ),
      i2 = 0,
      a2 = Math.min(A, n2.length),
      l2 = Array.from(
        {
          length: a2,
        },
        async () => {
          for (; i2 < n2.length;) {
            let e10 = i2++;
            try {
              o3[e10] = await ez(t, n2[e10]);
            } catch (e11) {
              console.warn(
                "[MyWorkday] Failed to fetch Workday country phone code option:",
                e11,
              );
            }
          }
        },
      );
    await Promise.all(l2);
    let s2 = /* @__PURE__ */ new Set(),
      u2 = [];
    for (let e10 of o3.flat()) s2.has(e10) || (s2.add(e10), u2.push(e10));
    return u2;
  })().catch(
    (e10) => (
      D.delete(r),
      console.warn(
        "[MyWorkday] Failed to fetch Workday country phone code options:",
        e10,
      ),
      []
    ),
  );
  return (D.set(r, o2), o2);
}
async function eW(e, t) {
  let r = await eV();
  return r.length > 0
    ? (console.info(
        `[MyWorkday] Fetched ${r.length} Country Phone Code options from Workday API.`,
      ),
      r)
    : await eA(e, t);
}
async function eG(e) {
  let t = e.filter((e10) => J(e10.label));
  if (0 === t.length || t.every((e10) => e_(e10).length > 0)) return;
  let r = await eU(eD());
  if (0 !== r.length)
    for (let e10 of t) 0 === e_(e10).length && (e10.options = r);
}
function eK(e) {
  return e
    .filter((e10) => !eP(e10.label) && (!J(e10.label) || e_(e10).length > 0))
    .map((e10) => ({
      type: J(e10.label) ? enums.FIELD_TYPE.LISTBOX : e10.type,
      label: e10.label,
      ...(e10.options?.length
        ? {
            options: e10.options,
          }
        : {}),
      ...(e10.description
        ? {
            description: e10.description,
          }
        : {}),
    }));
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
  e1 = /* @__PURE__ */ new Set(["H3", "H4"]),
  e3 = 'div[data-automation-id^="formField-"]',
  e4 = '[data-automation-id="applyFlowPage"]',
  e5 = '[data-automation-id="applyFlowMyExpPage"]',
  e6 = `${e4}, ${e5}`,
  e8 =
    'fieldset, div[role="radiogroup"], div[role="group"], div[data-automation-id*="question"], div[data-automation-id*="Question"]',
  e9 =
    'input:not([type="hidden"]), textarea, select, button[aria-haspopup="listbox"]',
  e7 = '[data-automation-id$="Section"], [aria-labelledby$="-section"]',
  te = `//*[@data-automation-id="websitesSection"
  or @aria-labelledby="Websites-section"
  or @aria-labelledby="Website-section"]`,
  tt = /* @__PURE__ */ new Set([
    "Website",
    "Websites",
    "Website (Optional)",
    "Websites (Optional)",
  ]),
  tr = 2e3,
  tn = 150,
  to = 4;
function ti() {
  let e = xpath.getFirstOrderedNodeSafe(
    '//main//h2[not(@data-automation-id="jobTitleHeading")] | //div[@id="mainContent"]//h2[not(@data-automation-id="jobTitleHeading")] | //main//h3 | //div[@id="mainContent"]//h3 | //div[@data-automation-id="applyFlowPage"]//h3 | //div[@data-automation-id="applyFlowMyExpPage"]//h3',
  );
  return e?.textContent?.trim();
}
function ta(e) {
  let t = e,
    r = "function" != typeof e.getClientRects || e.getClientRects().length > 0;
  return !!(t.offsetWidth || t.offsetHeight || r);
}
function tl() {
  return document
    .querySelector?.(
      '[data-automation-id="progressBar"] [data-automation-id="progressBarActiveStep"]',
    )
    ?.textContent?.replace(/\s+/g, " ")
    .trim();
}
function ts(e) {
  return e?.replace(/\s+/g, " ").trim().toLowerCase() || "";
}
function tu() {
  return tl()?.replace(/^current\s+step\s+\d+\s+of\s+\d+\s*/i, "").trim();
}
function tc(e) {
  let t = Array.from(document.querySelectorAll?.(e) || []);
  if (t.length > 0) return t;
  let r = document.querySelector?.(e);
  return r ? [r] : [];
}
function td(e) {
  let t = tp([...tc(e4), ...tc(e5)]),
    r = tc("#mainContent, main"),
    n = tp([...t, ...r]);
  if (0 === n.length) return document;
  let o2 = n.filter(ta),
    i2 = o2.length > 0 ? o2 : n,
    a2 = [tu(), e].map(ts).filter(Boolean);
  if (a2.length > 0) {
    let e10 = i2.find(
      (e11) =>
        e11.getAttribute?.("data-automation-id") === "applyFlowPage" &&
        a2.some((t7) => ts(e11.textContent).includes(t7)),
    );
    if (e10) return e10;
    let t6 = i2.find((e11) =>
      a2.some((t7) => ts(e11.textContent).includes(t7)),
    );
    if (t6) return t6;
  }
  return i2[0] || document;
}
function tf(e) {
  let t = e.getAttribute("data-automation-id")?.toLowerCase() || "",
    r = e.textContent?.toLowerCase() || "";
  return (
    t.includes("accepttermsandagreement") ||
    t.includes("agreement") ||
    r.includes("i agree to and accept the terms")
  );
}
function tp(e) {
  let t = /* @__PURE__ */ new Set(),
    r = [];
  for (let n of e) t.has(n) || (t.add(n), r.push(n));
  return r;
}
function tm(e, t) {
  return t.some(
    (t6) => t6 !== e && "function" == typeof t6.contains && t6.contains(e),
  );
}
function th(e, t) {
  return t.some(
    (t6) => t6 !== e && "function" == typeof e.contains && e.contains(t6),
  );
}
function tg(e) {
  let t = e.getAttribute?.("data-automation-id") || "",
    r = e.getAttribute?.("aria-labelledby") || "",
    n = r.toLowerCase(),
    o2 = n.endsWith("-panel"),
    i2 =
      o2 &&
      (n.startsWith("education-") ||
        n.startsWith("schools-attended-") ||
        n.includes("-education-"));
  return (
    t.startsWith("workExperience-") ||
    t.startsWith("education-") ||
    i2 ||
    (o2 && g.some((e10) => r.startsWith(e10)))
  );
}
function tb(e) {
  let t = e;
  for (; t;) {
    if (tg(t)) return true;
    t = t.parentElement;
  }
  return false;
}
function ty(e) {
  return e?.replace(/\s+/g, " ").trim().toLowerCase() || "";
}
function tv(e) {
  let t = ty(e.getAttribute?.("data-automation-id")),
    r = ty(e.getAttribute?.("aria-label")),
    n = ty(e.textContent);
  return (
    "add-button" === t ||
    "add" === t ||
    "add another" === t ||
    "add" === n ||
    "add another" === n ||
    /^add( another)? (website|work experience|education|schooling|schools attended)$/.test(r)
  );
}
function tw(e) {
  return Array.from(e.querySelectorAll?.("button") || []).some(tv);
}
function tS() {
  return tc(e5).some(ta);
}
function tE(e) {
  return e.closest?.(e5) || null;
}
function tx(e) {
  let t = e.closest?.(e7) || null;
  if (t && t !== e && tw(t)) return t;
  let r = tE(e),
    n = e.parentElement;
  for (; n && n !== document.body && n !== r;) {
    if (tw(n)) return n;
    n = n.parentElement;
  }
  return tw(e) ? e : null;
}
function tC(e) {
  let t = e.getAttribute?.("data-automation-id") || "",
    r = e.getAttribute?.("aria-labelledby") || "";
  return (
    "websitesSection" === t ||
    "Websites-section" === r ||
    "Website-section" === r
  );
}
function tA(e) {
  let t = e.textContent?.trim().replace(/\s*\*\s*$/, "").trim();
  return !!t && tt.has(t);
}
function tk() {
  let e = xpath.getOrderedNodesSafe(te),
    t = xpath.getOrderedNodesSafe(e2).filter(tA);
  for (let r of t) {
    let t6 = r.nextElementSibling;
    for (; t6 && !e1.has(t6.tagName);)
      (e.push(t6), (t6 = t6.nextElementSibling));
  }
  return tp(e);
}
function tT(e, t) {
  let r = e.closest?.(e7) || null;
  return r && tC(r)
    ? r
    : t.find(
        (t6) =>
          t6 === e || ("function" == typeof t6.contains && t6.contains(e)),
      ) || null;
}
function tF(e) {
  return tS() && !!tx(e);
}
function tI(e) {
  let t = `${e || ""} ${tu() || ""}`.toLowerCase().trim();
  return t.includes("my experience") || tS();
}
function tj() {
  let { sections: e } = tz("My Experience"),
    t = tk(),
    r = false;
  return e.filter(
    (e10) => !tb(e10) && (tT(e10, t) ? !r && ((r = true), true) : !tF(e10)),
  );
}
async function tD() {
  let e = [];
  for (let t of tj()) {
    let r = await tZ(t);
    r && e.push(r);
  }
  return e;
}
function tP() {
  let e = {};
  for (let t of tj()) {
    let r = t3(t);
    r && (e[r.label] = r.value);
  }
  return e;
}
function t_(e) {
  return e.closest?.(e6) || null;
}
function tL(e, t) {
  return e !== document && "function" == typeof e.contains && e.contains(t);
}
function tR(e, t) {
  if (t === document) return true;
  let r = t_(e);
  return !r || r === t || tL(t, r);
}
function tO(e, t) {
  return e.filter((e10) => ta(e10) && tR(e10, t));
}
function tM(e) {
  return !!e.querySelector?.(
    'input:not([type="hidden"]), textarea, select, button[aria-haspopup="listbox"]',
  );
}
function tN(e) {
  return !!e.querySelector?.("label, legend");
}
function t$(e, t) {
  return e.querySelectorAll?.(t).length || 0;
}
function tB(e) {
  let t = e.getAttribute?.("data-automation-id")?.toLowerCase() || "",
    r = e.getAttribute?.("role")?.toLowerCase() || "",
    n = e.tagName?.toLowerCase() || "",
    o2 = e.textContent?.replace(/\s+/g, " ").trim() || "",
    i2 = t$(e, e9),
    a2 = t$(e, "label, legend");
  return (
    !!(
      e === document.body ||
      ("div" === n &&
        !t &&
        !r &&
        o2.toLowerCase().includes("skip to main content"))
    ) ||
    ("div" === n && !t && !r && (o2.length > 2e3 || i2 > 12 || a2 > 24))
  );
}
function tq(e, t, r) {
  let n = e.parentElement;
  for (; n && n !== document.body && !(n === r || t.includes(n) || tm(n, t));) {
    if (tM(n) && tN(n) && !tB(n)) return n;
    n = n.parentElement;
  }
  return null;
}
function tU(e, t) {
  return Array.from(
    "function" == typeof e.querySelectorAll
      ? e.querySelectorAll(t)
      : document.querySelectorAll(t),
  );
}
function tH(e, t) {
  let r = Array.from(tU(t, e8)),
    n = tU(t, e9)
      .map((r2) => tq(r2, e, t))
      .filter(Boolean),
    o2 = tp([...r, ...n]);
  return o2.filter(
    (r2) =>
      !(
        r2 === t ||
        e.includes(r2) ||
        r2.closest?.(e3) ||
        tm(r2, e) ||
        th(r2, e) ||
        !tM(r2) ||
        !tN(r2) ||
        !ta(r2) ||
        tB(r2)
      ),
  );
}
function tY(e, t) {
  let r = `${e || ""} ${tl() || ""}`.toLowerCase().trim();
  return r.includes("voluntary") || r.includes("disclosure") || t.some(tf);
}
function tz(e) {
  let t = td(e),
    r = tO(
      xpath.getOrderedNodesSafe(
        './/div[starts-with(@data-automation-id, "formField-")]',
        t,
      ),
      t,
    ),
    n = tY(e, r),
    o2 =
      t === document || (r.length > 0 && !n)
        ? []
        : tO(
            xpath.getOrderedNodesSafe(
              './/div[starts-with(@data-automation-id, "formField-")]',
              document,
            ),
            t,
          ),
    i2 = tp([...o2, ...r]),
    a2 = tY(e, i2);
  if (!a2)
    return {
      sections: i2,
      additionalSections: [],
      shouldCollectAdditionalSections: a2,
    };
  let s2 = tH(i2, t);
  return {
    sections: tp([...i2, ...s2]),
    additionalSections: s2,
    shouldCollectAdditionalSections: a2,
  };
}
function tV(e) {
  let t = xpath.getOrderedNodesSafe(".//label | .//legend", e)[0];
  return G(t?.textContent || "");
}
function tW(e) {
  return e.some((e10) => {
    let t = fieldLabel.normalizeFieldLabel(tV(e10), {
      loose: true,
    });
    return "country" === t || "country / territory" === t;
  });
}
function tG(e) {
  let t = fieldLabel.normalizeFieldLabel(tV(e), {
    loose: true,
  });
  return "country" === t || "country / territory" === t;
}
function tK(e) {
  return e.length > 0 && e.every(tG);
}
function tX(e) {
  return e
    .map((e10) => {
      let t = e10.getAttribute?.("data-automation-id") || "",
        r = tV(e10),
        n = t$(e10, e9);
      return `${t}:${r}:${n}`;
    })
    .join("|");
}
async function tJ(e) {
  let t = "",
    r = 0;
  await observer.waitForCondition(
    () => {
      let { sections: n } = tz(e),
        o2 = tX(n);
      return !o2 || tK(n)
        ? ((t = ""), (r = 0), false)
        : (o2 === t ? (r += 1) : ((t = o2), (r = 1)), r >= to);
    },
    {
      timeout: tr,
      interval: tn,
      observeTarget: document.body,
    },
  );
}
async function tQ(e = 0) {
  let t = [],
    r = ti();
  if (tI(r))
    return (
      t.push(...(await t2())),
      await delay.delay(200),
      t.push(...(await t0())),
      await (0, delay.delay)(200),
      t.push(...(await tD())),
      t
    );
  {
    let n = tz(r);
    n.sections.length > 0 && tW(n.sections) && (await tJ(r));
    let {
      sections: o2,
      additionalSections: a2,
      shouldCollectAdditionalSections: l2,
    } = tz(r);
    if (l2 && e < 3 && 0 === a2.length && o2.some(tf)) {
      let t6 = 2e3 * Math.pow(1.5, e),
        n2 = o2.length,
        a3 = await observer.waitForCondition(
          () => {
            let e10 = tz(r);
            return (
              e10.additionalSections.length > 0 || e10.sections.length > n2
            );
          },
          {
            timeout: t6,
            interval: 200,
            observeTarget: document.body,
          },
        );
      if (a3) return await tQ(e + 1);
    }
    if (0 === o2.length) {
      if (e < 3) {
        let t6 = 2e3 * Math.pow(1.5, e);
        return (
          await observer.waitForCondition(() => tz(r).sections.length > 0, {
            timeout: t6,
            interval: 200,
            observeTarget: document.body,
          }),
          await tQ(e + 1)
        );
      }
      throw Error(formLoss.WORKDAY_NO_FORM_FIELDS_ERROR_MESSAGE);
    }
    let s2 = [];
    for (let e10 of o2) {
      let t6 = await tZ(e10);
      t6 &&
        s2.push({
          section: e10,
          rule: t6,
        });
    }
    let u2 = X(
      s2.map(({ section: e10, rule: t6 }) => ({
        rule: t6,
        label: t6.label,
        sectionHeading: ee(e10),
      })),
    );
    for (let { rule: e10, label: r2, sectionHeading: n2 } of u2)
      r2 !== e10.label
        ? (console.debug(
            "[MyWorkday][autofill-debug] duplicate-rule-label-resolved",
            {
              rawLabel: e10.label,
              sectionHeading: n2,
              resolvedLabel: r2,
            },
          ),
          t.push({
            ...e10,
            label: r2,
          }))
        : t.push(e10);
    if (0 === t.length && e < 3) {
      let t6 = 2e3 * Math.pow(1.5, e);
      return (
        await observer.waitForCondition(() => tz(r).sections.length > 0, {
          timeout: t6,
          interval: 200,
          observeTarget: document.body,
        }),
        await tQ(e + 1)
      );
    }
    return t;
  }
}
async function tZ(e) {
  let t = xpath.getOrderedNodes(".//label | .//legend", e);
  if (0 === t.length) return (console.warn("labelElements not found", e), null);
  let r = t[0],
    n = r.textContent?.trim() || "",
    o2 = G(n),
    i2 = xpath.getFirstOrderedNodeSafe(".//abbr", e),
    s2 = xpath.getFirstOrderedNodeSafe('.//*[normalize-space(.)="*"]', e),
    u2 = xpath.getFirstOrderedNodeSafe(
      './/*[@aria-required="true" or @required]',
      e,
    ),
    c2 =
      i2?.textContent?.trim() === "*" ||
      s2?.textContent?.trim() === "*" ||
      n.includes("*") ||
      eo(o2) ||
      !!u2;
  if (J(o2)) {
    let t6 = await eT({
      section: e,
      label: o2,
      labelElement: r,
      required: c2,
    });
    if (t6) return t6;
  }
  let d2 = xpath.getFirstOrderedNodeSafe(
    './/div[@data-automation-id="multiSelectContainer"]',
    e,
  );
  if (d2) {
    let e10 = xpath.getFirstOrderedNodeSafe(
        ".//input[@placeholder='Search']",
        d2,
      ),
      t6 = R(o2) ? await eW(d2, e10) : [],
      n2 = {
        label: o2,
        $label: r,
        required: c2,
        type: enums.FIELD_TYPE.MULTI_SELECT,
        $input: e10,
        options: t6,
      };
    return n2;
  }
  let f2 = eu(e);
  if (f2)
    return await ek({
      label: o2,
      labelElement: r,
      required: c2,
      listboxSelectElement: f2,
    });
  let p2 = xpath.getFirstOrderedNode('.//input[@placeholder="Search"]', e);
  if (p2) {
    let e10 = {
      label: o2,
      $label: r,
      required: c2,
      type: enums.FIELD_TYPE.SEARCH,
      $input: p2,
    };
    return e10;
  }
  let m2 = xpath.getFirstOrderedNode(".//input | .//textarea", e);
  if (m2) {
    let t6 = m2.getAttribute("type");
    if (
      "acceptTermsAndAgreements" === m2.name ||
      m2.attributes.getNamedItem("data-automation-id")?.value ===
        "agreementCheckbox"
    ) {
      let e10 = {
        label: o2,
        $label: r,
        required: c2,
        type: enums.FIELD_TYPE.CHECKBOX,
        $checkboxs: [m2],
        options: ["true"],
      };
      return e10;
    }
    if (
      "TEXTAREA" === m2.tagName ||
      ("INPUT" === m2.tagName && "text" === t6)
    ) {
      let e10 = {
        label: o2,
        $label: r,
        required: c2,
        type: en(o2),
        $input: m2,
      };
      return e10;
    }
    if ("INPUT" === m2.tagName && ("checkbox" === t6 || "radio" === t6)) {
      let n3 = xpath.getFirstOrderedNode(
          './ancestor::fieldset[1] | ./ancestor::div[starts-with(@data-automation-id, "formField-")]',
          m2,
        ),
        i3 = xpath.getFirstOrderedNode('.//div[@role="rowgroup"]', e),
        s3 = xpath.getOrderedNodes(".//label", n3);
      i3 && (s3 = xpath.getOrderedNodesSafe(".//label", i3));
      let u3 = [],
        d3 = [];
      for (let e10 of s3) {
        let t7 = xpath.getFirstOrderedNodeSafe(
          "..//input[@type='checkbox' or @type='radio']",
          e10,
        );
        t7 && (u3.push(e10), d3.push(t7));
      }
      let f3 = /* @__PURE__ */ new Set(),
        p3 = [],
        h2 = [];
      for (let e10 = 0; e10 < d3.length; e10++)
        f3.has(d3[e10]) ||
          (f3.add(d3[e10]), p3.push(d3[e10]), h2.push(u3[e10]));
      if ("checkbox" === t6) {
        let e10 = {
          label: o2,
          $label: r,
          required: c2,
          type: enums.FIELD_TYPE.CHECKBOX,
          $checkboxs: 0 == p3.length ? [m2] : p3,
          options: h2.map((e11) => e11.textContent?.trim()),
        };
        return e10;
      }
      if ("radio" === t6) {
        let e10 = {
          label: o2,
          $label: r,
          required: c2,
          type: enums.FIELD_TYPE.CHECKBOX,
          $checkboxs: p3,
          options: h2.map((e11) => e11.textContent?.trim()),
        };
        return e10;
      }
    }
    let n2 = e.querySelector('[data-automation-id="dateInputWrapper"]');
    if (n2) {
      let e10 = {
        label: o2,
        $label: r,
        required: c2,
        type: enums.FIELD_TYPE.DATE,
        description: er(n2),
        $input: n2,
      };
      return e10;
    }
  }
}
async function t0() {
  let e = xpath.getOrderedNodes(e2),
    t = [],
    r = async (e10) => {
      let t6 = [];
      for (let r2 of e10) {
        let e11 = await tZ(r2);
        e11 && t6.push(e11);
      }
      return 0 === t6.length
        ? null
        : (await eG(t6),
          {
            label: "Education",
            required: true,
            type: enums.FIELD_TYPE.EDUCATION,
            children: t6,
            options: eK(t6),
          });
    };
  for (let n of e)
    if (et(n.textContent)) {
      let e10 = xpath.getOrderedNodes("following-sibling::*", n);
      for (let n2 of e10) {
        if (e1.has(n2.tagName)) break;
        let e11 = Array.from(
            new Set(
              xpath.getOrderedNodesSafe(
                `.//descendant-or-self::div[${e0}]`,
                n2,
              ),
            ),
          ),
          o2 = e11.length > 0 ? e11 : [n2];
        for (let e12 of o2) {
          let n3 = [];
          n3.push(
            ...xpath.getOrderedNodesSafe(
              './/descendant-or-self::div[starts-with(@data-automation-id, "formField-")]',
              e12,
            ),
          );
          let o3 = await r(n3);
          o3 && t.push(o3);
        }
      }
    }
  return t;
}
async function t2() {
  let e = xpath.getOrderedNodes(e2),
    t = [];
  for (let r of e)
    if (h.has(r.textContent?.trim().replace(/\s*\*$/, ""))) {
      let e10 = xpath.getOrderedNodes("following-sibling::*", r);
      for (let r2 of e10) {
        if (e1.has(r2.tagName)) break;
        let e11 = [];
        e11.push(
          ...xpath.getOrderedNodesSafe(
            './/descendant-or-self::div[starts-with(@data-automation-id, "formField-")]',
            r2,
          ),
        );
        let n = [];
        for (let t6 of e11) {
          let e12 = await tZ(t6);
          e12 && n.push(e12);
        }
        if (0 === n.length) continue;
        let o2 = {
          label: "Employment",
          required: true,
          type: enums.FIELD_TYPE.EMPLOYMENT,
          children: n,
          options: [
            ...n.map((e12) => ({
              type: e12.type,
              label: e12.label,
              ...(e12.options?.length
                ? {
                    options: e12.options,
                  }
                : {}),
              ...(e12.description
                ? {
                    description: e12.description,
                  }
                : {}),
            })),
          ],
        };
        t.push(o2);
      }
    }
  return t;
}
function t1() {
  let e = xpath.getFirstOrderedNode(
      './/input[@type="submit" and @value="Submit Profile"]',
    ),
    t = e ? e.textContent?.trim() : "";
  return t;
}
function t3(e, t = false) {
  let r = xpath.getOrderedNodes(".//label | .//legend", e);
  if (0 === r.length) return (console.warn("labelElements not found", e), null);
  let n = r[0],
    o2 = n.textContent?.trim().replace("*", "");
  if (P(o2)) return null;
  let i2 = xpath.getFirstOrderedNodeSafe(
    './/div[@data-automation-id="multiSelectContainer"]',
    e,
  );
  if (i2) {
    let r2 = xpath
      .getOrderedNodesSafe('.//li[@data-automation-id="menuItem"]', e)
      .map((e10) => e10.textContent?.trim());
    return {
      label: o2,
      value: t && r2.length <= 1 ? (r2[0] ?? "") : JSON.stringify(r2),
    };
  }
  let a2 = xpath.getFirstOrderedNodeSafe(
    './/button[@aria-haspopup="listbox"][@type="button"]',
    e,
  );
  if (a2)
    return {
      label: o2,
      value: a2.textContent?.trim(),
    };
  let s2 = xpath.getFirstOrderedNode('.//input[@placeholder="Search"]', e);
  if (s2)
    return {
      label: o2,
      value: xpath
        .getFirstOrderedNodeSafe('.//li[@data-automation-id="menuItem"]')
        ?.textContent?.trim(),
    };
  let u2 = xpath.getFirstOrderedNode(".//input | .//textarea", e);
  if (u2?.name == "acceptTermsAndAgreements")
    return {
      label: o2,
      value: u2.checked ? "true" : "false",
    };
  if (u2) {
    let t6 = u2.getAttribute("type");
    if (
      "TEXTAREA" === u2.tagName ||
      ("INPUT" === u2.tagName && ("text" === t6 || "number" === t6))
    )
      return {
        label: o2,
        value: u2.value,
      };
    if ("INPUT" === u2.tagName && ("checkbox" === t6 || "radio" === t6)) {
      let r3 = xpath.getFirstOrderedNode(
          './ancestor::fieldset[1] | ./ancestor::div[starts-with(@data-automation-id, "formField-")]',
          u2,
        ),
        n2 = xpath.getFirstOrderedNode('.//div[@role="rowgroup"]', e),
        i3 = xpath.getOrderedNodes(".//label", r3);
      n2 && (i3 = xpath.getOrderedNodesSafe(".//label", n2));
      let a3 = [],
        s3 = [];
      for (let e10 of i3) {
        let t7 = xpath.getFirstOrderedNodeSafe(
          "..//input[@type='checkbox' or @type='radio']",
          e10,
        );
        t7 && (a3.push(e10), s3.push(t7));
      }
      let c2 = /* @__PURE__ */ new Set(),
        d2 = [],
        f2 = [];
      for (let e10 = 0; e10 < s3.length; e10++)
        c2.has(s3[e10]) ||
          (c2.add(s3[e10]), d2.push(s3[e10]), f2.push(a3[e10]));
      if ("checkbox" === t6) {
        if (0 === i3.length)
          return {
            label: o2,
            value: u2.checked ? "true" : "false",
          };
        let e10 = eo(o2) ? el : ea,
          t7 = f2
            .map((t8, r4) => {
              let n3 = d2[r4];
              return n3 && e10(n3) ? es(n3, t8) : null;
            })
            .filter((e11) => !!e11);
        return {
          label: o2,
          value: JSON.stringify(t7),
        };
      }
      if ("radio" === t6) {
        let e10 = eo(o2) ? el : ea,
          t7 = d2
            .map((e11, t8) => ({
              input: e11,
              option: f2[t8],
            }))
            .find(({ input: t8 }) => e10(t8));
        return {
          label: o2,
          value: t7 ? es(t7.input, t7.option) : "",
        };
      }
    }
    let r2 = e.querySelector('[data-automation-id="dateInputWrapper"]');
    if (r2) {
      let e10 = xpath.getOrderedNodes(".//input", r2);
      return {
        label: o2,
        value: e10.map((e11) => e11.value).join("/"),
      };
    }
  }
}
function t4(e, t, r = {}, n) {
  let o2 = xpath.getOrderedNodes(e2),
    i2 = [];
  for (let a2 of o2) {
    let o3 = n?.(a2.textContent) ?? e.has(Q(a2.textContent));
    if (o3) {
      let e10 = 0,
        n2 = xpath.getOrderedNodes("following-sibling::*", a2);
      for (let o4 of n2) {
        if (e1.has(o4.tagName)) break;
        let n3 = [];
        n3.push(
          ...xpath.getOrderedNodesSafe(`.//descendant-or-self::div[${t}]`, o4),
        );
        for (let t6 = 0; t6 < n3.length; t6++) {
          let o5 = n3[t6],
            a3 = {},
            s2 = e10++,
            u2 = o5.getAttribute(
              snapshotAlignment.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE,
            );
          r.markEducationRows &&
            ((u2 = String(s2)),
            o5.setAttribute(
              snapshotAlignment.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE,
              u2,
            ));
          let d2 = educationItemTrace.getEducationTraceForRow(o5, {
              attributes:
                snapshotAlignment.MYWORKDAY_EDUCATION_TRACE_ATTRIBUTES,
              includeEducationTrace: r.includeEducationTrace,
              markEducationRows: r.markEducationRows,
              runId: r.educationTraceRunId,
              snapshotIndex: s2,
            }),
            f2 = [];
          for (let e11 of (f2.push(
            ...xpath.getOrderedNodesSafe(
              './/descendant-or-self::div[starts-with(@data-automation-id, "formField-")]',
              o5,
            ),
          ),
          f2)) {
            let t7 = t3(e11, true);
            t7 && (a3[t7.label] = t7.value);
          }
          if (r.includeEducationSnapshotIndex && u2) {
            let e11 = Number(u2);
            Number.isInteger(e11) &&
              e11 >= 0 &&
              (a3[snapshotAlignment.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY] =
                e11);
          }
          (d2 && (a3[educationItemTrace.EDUCATION_TRACE_KEY] = d2),
            i2.push(a3));
        }
      }
    }
  }
  return i2;
}
function t5(e = {}) {
  let t = {},
    r = ti();
  if ("My Experience" == r)
    ((t.education = t4(m, e0, e, et)),
      (t.employment = t4(h, eX)),
      Object.assign(t, tP()));
  else {
    let e10 = [];
    for (let r2 of (0 ===
      (e10 = xpath.getOrderedNodes(
        '(//h2)[1]/..//div[starts-with(@data-automation-id, "formField-")]',
        document,
      )).length &&
      (e10 = xpath.getOrderedNodes(
        '//div[starts-with(@data-automation-id, "formField-")]',
        document,
      )),
    e10)) {
      let e11 = t3(r2);
      e11 && (t[e11.label] = e11.value);
    }
  }
  return t;
}
export {
  b as WORKDAY_FORCED_CHECKBOX_ATTRIBUTE,
  X as disambiguateWorkdayDuplicateRuleLabels,
  eX as employmentGroupXpath,
  U as findFilledMyExperienceProgressLabels,
  H as findFilledWorkdaySelfIdentifyCheckboxProgressLabels,
  Y as findUnfilledWorkdaySelfIdentifyCheckboxProgressLabels,
  M as findWorkdayCountryProgressLabels,
  L as findWorkdaySkillsProgressLabel,
  t0 as getEduRules,
  t2 as getExpRules,
  t5 as getFormSnapshot,
  t4 as getGroupSnapshot,
  tQ as getRules,
  t1 as getSubmitButtonText,
  er as getWorkdayDateDescription,
  eD as getWorkdayEducationApiBase,
  es as getWorkdayInputLabelText,
  _ as getWorkdayRegularRules,
  ee as getWorkdayRuleSectionHeading,
  en as getWorkdaySalaryFieldType,
  el as isWorkdaySelfIdentifyInputSelected,
  eo as isWorkdaySelfIdentifyLabel,
  P as isWorkdaySkillsFieldLabel,
  ea as isWorkdayInputSelected,
  e0 as educationGroupXpath,
};
