// @ts-nocheck
/**
 * Google Careers - form rule extraction, snapshots, and step helpers.
 */
import * as enums from "../../../core/enums.js";
import * as delay from "../../../utils/delay.js";
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js";
import * as googleAnswer from "./answer.ts";
export const LISTBOX_UL_JSNAME = "rymPhb";
export const AUTOCOMPLETE_LISTBOX_JSNAME = "hsfjDf";
const JSNAME_ATTR = "jsname";
const OPTION_TEXT_JSNAME = "K4r5Ff";
const LISTBOX_CONTAINER_JSNAME = "xl07Ob";
async function m(e = 6e3) {
  let t = Date.now(),
    r = () => {
      let { stepper: e2 } = getGoogleVisibleStepState();
      return !!(
        e2 ||
        document.querySelector("div.PukFX h2.yEACXb") ||
        document.querySelector(
          'input[jsname="YPqjbf"], textarea[jsname="YPqjbf"]',
        )
      );
    };
  for (; Date.now() - t < e; ) {
    if (r()) return;
    await delay.delay(200);
  }
}
function h(e) {
  if (!e || !P(e)) return false;
  let t = e;
  for (; t; ) {
    if (
      t.hasAttribute("hidden") ||
      t.hasAttribute("inert") ||
      "true" === t.getAttribute("aria-hidden")
    )
      return false;
    let e2 = window.getComputedStyle(t);
    if ("none" === e2.display || "hidden" === e2.visibility) return false;
    t = t.parentElement;
  }
  return true;
}
function g(e, t) {
  if (!e) return -1;
  let r = (e.getAttribute("aria-label") ?? "").trim(),
    n = r.match(/^Step\s*(\d+)\b/i);
  if (n) {
    let e2 = Number(n[1]);
    if (Number.isFinite(e2) && e2 > 0) return e2 - 1;
  }
  return t.indexOf(e);
}
function b(e) {
  if (!e) return "";
  let t = C(e.getAttribute("aria-label") || "");
  if (t) return t;
  let r = C(e.querySelector("span.JjWAne")?.textContent || "");
  return r || C(e.textContent || "");
}
export function getGoogleVisibleStepState(e = document) {
  let t = Array.from(
      e.querySelectorAll(
        'div[role="tablist"][aria-label="Application stepper"]',
      ),
    ).filter((e2) => h(e2)),
    r =
      t.find((e2) =>
        e2.querySelector('button[role="tab"][aria-selected="true"]'),
      ) ??
      t[0] ??
      null,
    n = r ? Array.from(r.querySelectorAll('button[role="tab"]')) : [],
    o2 = n.find((e2) => "true" === e2.getAttribute("aria-selected")) ?? null;
  return { stepper: r, selectedTab: o2, tabs: n, idx: g(o2, n), label: b(o2) };
}
function v(e = document) {
  return getGoogleVisibleStepState(e).label;
}
function w(e) {
  let t = v(e),
    r = C(getCurrentStepFingerprint(e)),
    n = Array.from(e.querySelectorAll("div.PukFX h2.yEACXb"))
      .map((e2) => e2)
      .filter((e2) => P(e2))
      .map((e2) => C(e2.textContent || ""))
      .filter(Boolean),
    o2 = Array.from(e.querySelectorAll('[role="radiogroup"]'))
      .map((e2) => e2)
      .filter((e2) => P(e2)).length,
    i2 = Array.from(e.querySelectorAll('[role="combobox"]'))
      .map((e2) => e2)
      .filter((e2) => P(e2)).length,
    a2 = Array.from(
      e.querySelectorAll('input[jsname="YPqjbf"], textarea[jsname="YPqjbf"]'),
    )
      .map((e2) => e2)
      .filter((e2) => P(e2)).length,
    l2 = Array.from(
      e.querySelectorAll(
        'ul[role="listbox"][aria-multiselectable="true"], div[role="group"]',
      ),
    )
      .map((e2) => e2)
      .filter((e2) => P(e2)).length,
    s2 = o2 + i2 + a2 + l2;
  return (r || t) && (0 !== s2 || 0 !== n.length)
    ? [
        t,
        r,
        n.join("|"),
        s2.toString(),
        o2.toString(),
        i2.toString(),
        a2.toString(),
        l2.toString(),
      ].join("::")
    : "";
}
export async function waitForGooglePageClean(e = 5e3, t = 200) {
  await m(Math.min(e, 6e3));
  let r = Date.now() + e,
    n = "",
    o2 = 0;
  for (; Date.now() < r; ) {
    let e2 = w(document.body);
    if (e2) {
      if ((e2 === n ? (o2 += 1) : ((n = e2), (o2 = 1)), o2 >= 3)) {
        await delay.delay(300);
        return;
      }
    } else (n = ""), (o2 = 0);
    await delay.delay(t);
  }
  await delay.delay(250);
}
export class GoogleTrackingManager {
  startOrResumeRun() {
    this.inProgress ||
      ((this.lastAutofillSnapshotByFingerprint = {}),
      (this.lastAutofillStructuredByFingerprint = {}),
      (this.inProgress = true));
  }
  finishRun(e) {
    this.inProgress = !e;
  }
  getFingerprintKey(e) {
    let t = (e || "").trim();
    return t || "default";
  }
  recordAutofillSnapshot(e, t, r) {
    let n = this.getFingerprintKey(e);
    return (
      (this.lastAutofillSnapshotByFingerprint[n] = { ...t }),
      (this.lastAutofillStructuredByFingerprint[n] = r),
      n
    );
  }
  getAutofillSnapshot(e, t, r) {
    return (
      this.lastAutofillSnapshotByFingerprint[e] ??
      this.lastAutofillSnapshotByFingerprint[t] ??
      r
    );
  }
  getAutofillStructured(e, t, r) {
    return (
      this.lastAutofillStructuredByFingerprint[e] ??
      this.lastAutofillStructuredByFingerprint[t] ??
      r
    );
  }
  constructor() {
    (this.lastAutofillSnapshotByFingerprint = {}),
      (this.lastAutofillStructuredByFingerprint = {}),
      (this.inProgress = false);
  }
}
function x() {
  let e = document.querySelector("form");
  return e || document.body;
}
function C(e) {
  return (e || "").replace(/\s+/g, " ").trim();
}
export function isCountryLabel(e) {
  let t = e.toLowerCase().trim();
  return "country / region" === t || "country" === t || "country/region" === t;
}
export function isGooglePhoneCountryCodeControl(e, t) {
  let r = 'input[aria-label="Phone number"]',
    n = e.closest("fieldset"),
    o2 = !!n?.querySelector(r),
    i2 = o2,
    a2 = e.closest('[jsname="YzgRqe"]');
  for (; a2; ) {
    if (a2.querySelector(r)) {
      i2 = true;
      break;
    }
    let e2 = a2.parentElement;
    a2 = e2 ? e2.closest('[jsname="YzgRqe"]') : null;
  }
  if (!i2) return false;
  let l2 = C(t).toLowerCase();
  return (
    "country calling code" === l2 ||
    (!l2 &&
      C(n?.textContent || "")
        .toLowerCase()
        .includes("country calling code"))
  );
}
function T(e) {
  return C(e).toLowerCase();
}
export function isGooglePhoneCountryCodeRule(e) {
  return "country calling code" === T(e.label);
}
export function isGooglePhoneNumberRule(e) {
  let t = T(e.$input?.getAttribute?.("aria-label") || "");
  return (
    "phone number" === t ||
    [
      "phone",
      "phone number",
      "primary phone",
      "primary phone number",
      "mobile phone number",
    ].includes(T(e.label))
  );
}
export function stageGooglePhoneCountryCodeRules(e, t) {
  let r = e.filter(isGooglePhoneCountryCodeRule);
  if (0 === r.length)
    return {
      countryCodeRules: r,
      regularRules: e,
      phoneRules: [],
      postPhoneRules: e,
      phoneRulesRebound: true,
      phoneRulesSkipped: 0,
    };
  let n = e.filter(isGooglePhoneNumberRule),
    o2 = t.filter(isGooglePhoneNumberRule),
    i2 = n.length === o2.length,
    a2 = 0,
    l2 = 0,
    s2 = [];
  for (let t2 of e)
    if (!isGooglePhoneCountryCodeRule(t2)) {
      if (!isGooglePhoneNumberRule(t2)) {
        s2.push(t2);
        continue;
      }
      if (!i2) {
        l2 += 1;
        continue;
      }
      s2.push(o2[a2]), (a2 += 1);
    }
  return {
    countryCodeRules: r,
    regularRules: s2,
    phoneRules: s2.filter(isGooglePhoneNumberRule),
    postPhoneRules: s2.filter((e2) => !isGooglePhoneNumberRule(e2)),
    phoneRulesRebound: i2,
    phoneRulesSkipped: l2,
  };
}
function D(e, t, r) {
  if (!e.matches('div[role="combobox"][jsname="oYxtQd"]')) return false;
  if (isCountryLabel(r)) return true;
  let n = C(e.getAttribute("aria-label") || "");
  if (isCountryLabel(n)) return true;
  let o2 = C(O(e));
  if (isCountryLabel(o2)) return true;
  let i2 = C(t.querySelector('[jsname="V67aGc"]')?.textContent || "");
  return !!isCountryLabel(i2);
}
function P(e) {
  if (!e?.isConnected) return false;
  let t = window.getComputedStyle(e);
  if ("none" === t.display || "hidden" === t.visibility) return false;
  let r = e.getBoundingClientRect();
  return r.width > 0 && r.height > 0;
}
export function findMainForm() {
  let e = document.querySelector("form");
  return e;
}
function L(e) {
  let t = [];
  try {
    e.querySelectorAll('li[role="option"]').forEach((e2) => {
      let r = e2,
        n = r.querySelector(`[${JSNAME_ATTR}="${OPTION_TEXT_JSNAME}"]`),
        o2 = n?.textContent?.trim() ?? "",
        i2 = C(r.textContent ?? ""),
        a2 = r.getAttribute("data-value") ?? "",
        l2 = o2 || i2;
      "" === l2 && ("" === a2 || "0" === a2)
        ? t.push("")
        : l2
          ? t.push(l2)
          : a2 && t.push(a2);
    });
  } catch {}
  return t;
}
function R(e) {
  let t = e.getAttribute("aria-controls");
  if (!t) return null;
  let r = document.getElementById(t);
  if (!r || "listbox" !== r.getAttribute("role")) return null;
  let n = r,
    o2 = "UL" === r.tagName && r.querySelector('li[role="option"]');
  return o2 ? n : null;
}
function O(e) {
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let e2 = t.trim().split(/\s+/)[0],
      r = e2 ? document.getElementById(e2) : null;
    if (r?.textContent) return C(r.textContent);
  }
  return "";
}
function M(e) {
  let t = e.closest('[jsname="wSASue"]'),
    r = t?.querySelector('div[jsname="xl07Ob"]'),
    n =
      r?.querySelector(
        'ul[jsname="rymPhb"][role="listbox"][aria-label="State / province"]',
      ) ??
      e
        .closest('div[jsname="rT1Nze"]')
        ?.querySelector(
          'ul[jsname="rymPhb"][role="listbox"][aria-label="State / province"]',
        ) ??
      document.querySelector(
        'ul[jsname="rymPhb"][role="listbox"][aria-label="State / province"]',
      );
  return n && n.querySelector('li[role="option"]') ? n : null;
}
function N(e) {
  let t = O(e);
  if (!t) return null;
  let r = document.querySelectorAll(
    `div[jsname="${LISTBOX_CONTAINER_JSNAME}"]`,
  );
  for (let e2 of r) {
    let r2 = e2.querySelector(`ul[jsname="${u}"][role="listbox"]`);
    if (!r2) continue;
    let n = (r2.getAttribute("aria-label") ?? "").trim();
    if (n !== t) continue;
    let o2 = r2.getBoundingClientRect();
    if (o2.height > 0 && o2.width > 0) return r2;
  }
  return null;
}
async function $(e, t, r) {
  let n = [];
  try {
    try {
      e.scrollIntoView({ block: "center", inline: "nearest" });
    } catch {}
    await delay.delay(50), e.focus(), e.click(), await delay.delay(80);
    let o2 = await getTargetOrTimeout(
      () => t(e) || N(e),
      () => false,
      30,
    );
    o2 && (n = r(o2));
  } catch {}
  try {
    e.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    ),
      e.dispatchEvent(
        new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
      );
    let t2 =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    t2 &&
      t2 !== e &&
      (t2.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      ),
      t2.dispatchEvent(
        new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
      )),
      e.blur();
  } catch {}
  if ("true" === e.getAttribute("aria-expanded")) {
    try {
      let e2 = document.documentElement || document.body;
      e2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })),
        e2.dispatchEvent(new MouseEvent("mouseup", { bubbles: true })),
        e2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    } catch {}
    if ((await delay.delay(40), "true" === e.getAttribute("aria-expanded"))) {
      try {
        e.click();
      } catch {}
      await delay.delay(40);
      try {
        e.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
        ),
          e.dispatchEvent(
            new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
          ),
          e.blur();
      } catch {}
    }
  }
  return await delay.delay(80), n;
}
function B(e) {
  let t = e.getAttribute("aria-label")?.trim();
  if (t) return t;
  if (!e.id) return "";
  try {
    let t2 =
        "undefined" != typeof CSS && CSS.escape
          ? CSS.escape(e.id)
          : e.id.replace(/["\\]/g, "\\$&"),
      r = document.querySelector(`label[for="${t2}"]`);
    return r?.textContent ? C(r.textContent) : "";
  } catch {
    return "";
  }
}
function q(e, t = 5) {
  let r = e.previousElementSibling;
  for (let e2 = 0; e2 < t && r; e2++) {
    let e3 = r.getAttribute("role"),
      t2 = r.tagName.toLowerCase();
    if ("button" === e3 || "button" === t2) {
      r = r.previousElementSibling;
      continue;
    }
    let n = (r.textContent || "").trim();
    if (n.length < 8 || /^\s*\*?\s*required\s*$/i.test(n)) {
      r = r.previousElementSibling;
      continue;
    }
    let o2 = C(n)
      .replace(/\s*\*+\s*$/, "")
      .replace(/\s*required\s*$/i, "")
      .trim();
    if (o2.length >= 5) return o2;
    r = r.previousElementSibling;
  }
  return "";
}
function U(e) {
  return !!(!e || e.length <= 2 || /^\d+$/.test(e));
}
function H(e) {
  let t = e;
  for (; t; ) {
    let e2 = t.previousElementSibling;
    if (
      e2?.querySelector('[aria-label="required field"]') ||
      t.querySelector('[aria-label="required field"]')
    )
      return true;
    t = t.parentElement;
  }
  return false;
}
function Y(e, t) {
  let r = e.getAttribute("aria-labelledby");
  if (r)
    for (let e2 of r.trim().split(/\s+/)) {
      let t2 = document.getElementById(e2);
      if (t2?.textContent) {
        let e3 = C(t2.textContent);
        if (e3 && "required field" !== e3) return e3;
      }
    }
  let n = t.querySelector('[jsname="V67aGc"]');
  if (n?.textContent) return C(n.textContent);
  let o2 = t.querySelector('[jsname="Fb0Bif"]');
  return o2?.innerText?.trim() || "";
}
function z(e = x()) {
  let t = e.querySelectorAll("div.PukFX");
  for (let e2 of t) {
    let t2 = e2.querySelector("h2.yEACXb"),
      r = C(t2?.textContent || "").toLowerCase();
    if (r.includes("cover letter")) return e2;
  }
  return null;
}
function V(e = x()) {
  let t = z(e);
  return t
    ? (t.querySelector(
        'textarea[jsname="YPqjbf"][aria-label="Cover letter"]',
      ) ?? t.querySelector('textarea[jsname="YPqjbf"]'))
    : null;
}
export function getCoverLetterStatus(e = x()) {
  let t = V(e);
  if (!t || !P(t)) return "";
  let r = t.required || "true" === t.getAttribute("aria-required") || H(t);
  return r ? "required" : "optional";
}
let G = "Higher education",
  K = "Work experience",
  X = "work-experience-city-input",
  J = `ul:has(input[debugid="${X}"])`;
export function findHigherEducationSection(e) {
  let t = e.querySelectorAll("div.PukFX");
  for (let e2 of t) {
    let t2 = e2.querySelector("h2.yEACXb");
    if (t2 && C(t2.textContent || "") === G) return e2;
  }
  return null;
}
export function findWorkExperienceSection(e) {
  let t = e.querySelectorAll("div.PukFX");
  for (let e2 of t) {
    let t2 = e2.querySelector("h2.yEACXb");
    if (t2 && C(t2.textContent || "") === K) return e2;
  }
  return null;
}
async function ee(e, t, r, n, i2 = true) {
  let a2 = [],
    l2 = (e2) => a2.push(e2),
    s2 = e.querySelector('input[aria-label="School name"]');
  if (s2 && P(s2)) {
    let e2 =
      s2.closest('[jsname="vhZMvf"]') ||
      s2.closest(".Ufn6O") ||
      s2.parentElement;
    l2({
      label: "School name",
      required: true,
      type: enums.FIELD_TYPE.TEXT,
      $label: e2 || s2,
      $input: s2,
    });
  }
  let c2 = (e2) => {
      let t2 = r(e2);
      if (t2) return t2;
      let n2 = e2.closest('[jsname="wSASue"]'),
        o2 = n2?.querySelector(`ul[jsname="${u}"][role="listbox"]`);
      return o2 || N(e2);
    },
    d2 = e.querySelector('[jsname="sFKGad"] [jsname="oYxtQd"]');
  if (d2 && P(d2)) {
    let e2 = d2.closest('[jsname="wSASue"]') || d2.parentElement,
      t2 = c2(d2),
      r2 = t2 ? n(t2) : [];
    i2 && 0 === r2.length && (r2 = await $(d2, c2, n)),
      l2({
        label: "Degree",
        required: true,
        type: enums.FIELD_TYPE.SELECT,
        $label: e2 || d2,
        $input: d2,
        options: r2,
      });
  }
  let f2 = e.querySelector('[jsname="LrfOX"] [jsname="oYxtQd"]');
  if (f2 && P(f2)) {
    let e2 = f2.closest('[jsname="wSASue"]') || f2.parentElement,
      t2 = c2(f2),
      r2 = t2 ? n(t2) : [];
    i2 && 0 === r2.length && (r2 = await $(f2, c2, n)),
      l2({
        label: "Degree Status",
        required: true,
        type: enums.FIELD_TYPE.SELECT,
        $label: e2 || f2,
        $input: f2,
        options: r2,
      });
  }
  let p2 = e.querySelector('input[aria-label="Major / area of study"]');
  if (p2 && P(p2)) {
    let e2 =
      p2.closest('[jsname="vhZMvf"]') ||
      p2.closest(".Ufn6O") ||
      p2.parentElement;
    l2({
      label: "Major / area of study",
      required: true,
      type: enums.FIELD_TYPE.TEXT,
      $label: e2 || p2,
      $input: p2,
    });
  }
  let m2 =
      Array.from(
        e.querySelectorAll('div[role="combobox"][jsname="oYxtQd"]'),
      ).find((r2) => {
        let n2 = r2.closest('[jsname="wSASue"]') || r2.parentElement || e,
          o2 = C(t(r2, n2));
        return D(r2, n2, o2);
      }) || null,
    h2 = m2 || e.querySelector('[jsname="HK7Vfc"] [jsname="oYxtQd"]');
  if (h2 && P(h2)) {
    let e2 = h2.closest('[jsname="wSASue"]') || h2.parentElement;
    l2({
      label: "Country / Region",
      required: false,
      type: enums.FIELD_TYPE.SELECT,
      $label: e2 || h2,
      $input: h2,
      options: [],
    });
  }
  return a2;
}
export async function getHigherEducationRules(e = true) {
  let t = x(),
    r = findHigherEducationSection(t);
  if (!r) return [];
  let n = Array.from(r.querySelectorAll("li.VdMCtc")).length
    ? Array.from(r.querySelectorAll("li.VdMCtc"))
    : r.querySelector('[jsname="ouDqDb"]')
      ? [r]
      : [];
  if (0 === n.length) return [];
  let i2 = [],
    a2 = (e2, t2) => Y(e2, t2);
  for (let t2 of n) {
    let r2 = await ee(t2, a2, R, L, e);
    if (r2.length > 0) {
      let e2 = r2[0];
      i2.push({
        type: enums.FIELD_TYPE.EDUCATION,
        label: "Education",
        required: true,
        children: r2,
        $input: e2?.$input,
      });
    }
  }
  return i2;
}
function er(e, t, r, n) {
  let i2 = [],
    a2 = (e2) => i2.push(e2),
    l2 = e.querySelector('input[aria-label="Employer name"]');
  if (l2) {
    let e2 = l2.closest(".rbgmcb") || l2.parentElement;
    a2({
      label: "Employer name",
      required: true,
      type: enums.FIELD_TYPE.TEXT,
      $label: e2 || l2,
      $input: l2,
    });
  }
  let s2 = e.querySelector('input[aria-label="Job title"]');
  if (s2) {
    let e2 = s2.closest(".rbgmcb") || s2.parentElement;
    a2({
      label: "Job title",
      required: true,
      type: enums.FIELD_TYPE.TEXT,
      $label: e2 || s2,
      $input: s2,
    });
  }
  let c2 = Array.from(
      e.querySelectorAll(
        'div[role="combobox"][jsname="oYxtQd"], [role="combobox"]',
      ),
    ),
    d2 = c2.filter((e2) => {
      let r2 = e2.closest('[jsname="wSASue"]') || e2.parentElement;
      return "Month" === C(t(e2, r2));
    }),
    f2 = [...d2];
  if (f2.length < 2) {
    let t2 = [],
      r2 = Array.from(
        e.querySelectorAll('[jsname="nXb2Qb"] .VfPpkd-uusGie-fmcmS'),
      );
    for (let e2 of r2) {
      let r3 = e2.closest('[role="combobox"]');
      r3 && t2.push(r3);
    }
    let n2 = Array.from(
      document.querySelectorAll(
        '[aria-label="Month"] [aria-selected="true"] .VfPpkd-StrnGf-rymPhb-b9t22c',
      ),
    );
    for (let r3 of n2) {
      let n3 = r3.closest('[role="listbox"]'),
        o2 = n3?.id?.trim();
      if (o2)
        try {
          let r4 =
              "undefined" != typeof CSS && CSS.escape ? CSS.escape(o2) : o2,
            n4 = e.querySelector(`[role="combobox"][aria-controls="${r4}"]`);
          n4 && t2.push(n4);
        } catch {
          let r4 = e.querySelector(`[role="combobox"][aria-controls="${o2}"]`);
          r4 && t2.push(r4);
        }
    }
    if (t2.length > 0) {
      let e2 = new Set(f2);
      for (let r3 of t2) e2.add(r3);
      f2 = Array.from(e2).sort((e3, t3) => {
        let r3 = e3.compareDocumentPosition(t3);
        return r3 & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : r3 & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
      });
    }
  }
  let p2 = Array.from(e.querySelectorAll(`ul[jsname="${u}"][role="listbox"]`)),
    m2 = f2[0];
  if (m2) {
    let e2 = r(m2) || p2[0] || N(m2),
      t2 = e2 ? n(e2) : [],
      i3 = m2.closest('[jsname="wSASue"]') || m2.parentElement;
    a2({
      label: "Start Month",
      required: true,
      type: enums.FIELD_TYPE.SELECT,
      $label: i3 || m2,
      $input: m2,
      options: t2,
    });
  }
  let h2 = Array.from(
      e.querySelectorAll('input[type="number"][aria-label="Year"]'),
    ),
    g2 = [...h2];
  if (g2.length < 2) {
    let t2 = Array.from(
      e.querySelectorAll('[jsname="s08b9"] input[jsname="YPqjbf"]'),
    );
    for (let e2 of t2) {
      if (g2.includes(e2)) continue;
      let t3 = (e2.getAttribute("aria-label") || "").toLowerCase();
      ("number" === e2.type || t3.includes("year")) && g2.push(e2);
    }
  }
  let b2 = g2[0];
  if (b2) {
    let e2 =
      b2.closest(".rbgmcb") ||
      b2.closest('[jsname="wSASue"]') ||
      b2.parentElement;
    a2({
      label: "Start Year",
      required: true,
      type: enums.FIELD_TYPE.TEXT,
      $label: e2 || b2,
      $input: b2,
    });
  }
  let y2 = e.querySelector('div[jsname="Q4XxXe"]'),
    v2 =
      y2?.querySelector('input[type="checkbox"]') ||
      e.querySelector(
        'input[type="checkbox"][value="This is your current job"]',
      );
  if (v2) {
    let e2 = v2.closest("label") || v2.parentElement;
    a2({
      label: "This is your current job",
      required: false,
      type: enums.FIELD_TYPE.CHECKBOX,
      $label: e2 || v2,
      $input: v2,
      $checkboxs: [v2],
      options: ["true", "false"],
    });
  }
  let w2 = f2[1];
  if (w2) {
    let t2 =
        r(w2) ||
        p2[1] ||
        e.querySelector('[jsname="QBGAS"] ul[jsname="rymPhb"]') ||
        N(w2),
      i3 = t2 ? n(t2) : [],
      l3 = w2.closest('[jsname="wSASue"]') || w2.parentElement;
    a2({
      label: "End Month",
      required: false,
      type: enums.FIELD_TYPE.SELECT,
      $label: l3 || w2,
      $input: w2,
      options: i3,
    });
  }
  let S2 = g2[1];
  if (S2) {
    let e2 =
      S2.closest(".rbgmcb") ||
      S2.closest('[jsname="kjzUhc"]') ||
      S2.parentElement;
    a2({
      label: "End Year",
      required: false,
      type: enums.FIELD_TYPE.TEXT,
      $label: e2 || S2,
      $input: S2,
    });
  }
  let E2 =
    c2.find((r2) => {
      let n2 = r2.closest('[jsname="wSASue"]') || r2.parentElement || e,
        o2 = C(t(r2, n2));
      return D(r2, n2, o2);
    }) ||
    e.querySelector('[role="combobox"][aria-label="Country / Region"]') ||
    c2.find((e2) => {
      let r2 = e2.closest('[jsname="wSASue"]') || e2.parentElement;
      return "Country / Region" === C(t(e2, r2));
    });
  if (E2) {
    let e2 = E2.closest('[jsname="wSASue"]') || E2.parentElement;
    a2({
      label: "Country / Region",
      required: false,
      type: enums.FIELD_TYPE.SELECT,
      $label: e2 || E2,
      $input: E2,
      options: [],
    });
  }
  let x2 = e.querySelector('input[aria-label="City"]');
  if (x2) {
    let e2 = x2.closest(".rbgmcb") || x2.parentElement;
    a2({
      label: "City",
      required: false,
      type: enums.FIELD_TYPE.TEXT,
      $label: e2 || x2,
      $input: x2,
    });
  }
  let A2 = e.querySelector('input[aria-label="State"]'),
    k2 = c2.find((e2) => {
      if (e2 === m2 || e2 === w2 || e2 === E2) return false;
      let r2 = e2.closest('[jsname="wSASue"]') || e2.parentElement,
        n2 = C(t(e2, r2));
      return "State / province" === n2 || "State" === n2;
    });
  if (k2 && P(k2)) {
    let e2 = k2.closest('[jsname="wSASue"]') || k2.parentElement,
      t2 = r(k2) || M(k2),
      i3 = t2 ? n(t2) : [];
    a2({
      label: "State / province",
      required: false,
      type: enums.FIELD_TYPE.SELECT,
      $label: e2 || k2,
      $input: k2,
      options: i3,
    });
  } else if (A2 && P(A2)) {
    let e2 = A2.closest(".rbgmcb") || A2.parentElement;
    a2({
      label: "State",
      required: false,
      type: enums.FIELD_TYPE.TEXT,
      $label: e2 || A2,
      $input: A2,
    });
  }
  return i2;
}
function en() {
  return [
    { label: "Employer name", required: true, type: enums.FIELD_TYPE.TEXT },
    { label: "Job title", required: true, type: enums.FIELD_TYPE.TEXT },
    {
      label: "Start Month",
      required: true,
      type: enums.FIELD_TYPE.SELECT,
      options: [],
    },
    { label: "Start Year", required: true, type: enums.FIELD_TYPE.TEXT },
    {
      label: "This is your current job",
      required: false,
      type: enums.FIELD_TYPE.CHECKBOX,
      options: ["true", "false"],
    },
    {
      label: "End Month",
      required: false,
      type: enums.FIELD_TYPE.SELECT,
      options: [],
    },
    { label: "End Year", required: false, type: enums.FIELD_TYPE.TEXT },
    {
      label: "Country / Region",
      required: false,
      type: enums.FIELD_TYPE.SELECT,
      options: [],
    },
    { label: "City", required: false, type: enums.FIELD_TYPE.TEXT },
    { label: "State", required: false, type: enums.FIELD_TYPE.TEXT },
  ];
}
function eo(e) {
  try {
    let t2 = e.querySelector(J);
    if (t2) {
      let e2 = Array.from(t2.querySelectorAll(":scope > li"));
      if (e2.length > 0) return e2;
    }
  } catch {}
  let t = Array.from(e.querySelectorAll("li.SQdjAf"));
  return t.length > 0
    ? t
    : Array.from(e.querySelectorAll('li[jsname="xb1Cqe"]'));
}
export function getWorkExperienceRules() {
  let e = x(),
    t = findWorkExperienceSection(e);
  if (!t) return [];
  let r = eo(t);
  if (0 === r.length) return [];
  let n = [],
    i2 = (e2, t2) => Y(e2, t2);
  for (let e2 of r) {
    let t2 = er(e2, i2, R, L);
    if (t2.length > 0) {
      let e3 = t2[0];
      n.push({
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: "Work experience",
        required: true,
        children: t2,
        $input: e3?.$input,
      });
    }
  }
  return n;
}
function ea(e, t) {
  let r = B(e);
  if (!r) return;
  let n =
      e.closest('[jsname="vhZMvf"]') || e.closest(".Ufn6O") || e.parentElement,
    i2 =
      e.hasAttribute("required") || "true" === e.getAttribute("aria-required"),
    a2 = googleAnswer.getGoogleFieldDescription(r);
  t.push({
    label: r,
    required: !!i2,
    type: enums.FIELD_TYPE.TEXT,
    $label: n || e,
    $input: e,
    ...(a2 ? { description: a2 } : {}),
  });
}
export async function extractRules(e = {}) {
  let t = false !== e.eagerSelectOptions,
    r = true === e.silentLog;
  await m();
  let n = x(),
    a2 = [],
    c2 = findHigherEducationSection(n),
    p2 = findWorkExperienceSection(n),
    h2 = n.querySelectorAll('[role="radiogroup"]');
  for (let e2 of h2) {
    let t2 = e2;
    if (!P(t2)) continue;
    let r2 = t2.getAttribute("jsdata"),
      n2 = t2.getAttribute("aria-label") || "",
      i2 = C(r2 || n2);
    if (!i2 && t2.closest(".c62Bcc")) {
      let e3 = t2.previousElementSibling;
      e3?.classList.contains("DXNg3e") && (i2 = C(e3.textContent || ""));
    }
    if (!i2 && t2.closest('[jsname="GZu8wc"]')) {
      let e3 = t2.previousElementSibling;
      e3?.classList.contains("fqPzXd") && (i2 = C(e3.textContent || ""));
    }
    t2.closest('[jsname="okRaaf"]') &&
      (n2 || "").toLowerCase().includes("alphabet") &&
      (i2 = "Have you worked at Alphabet before?");
    let l2 = n2.trim().toLowerCase();
    if (
      ("gender radio input" === l2
        ? (i2 = "Gender")
        : "veteran status radio input" === l2
          ? (i2 = "Veteran status")
          : "disability radio input" === l2 && (i2 = "Disability"),
      U(i2))
    ) {
      let e3 = q(t2);
      e3 && (i2 = e3);
    }
    if (!i2) continue;
    let s2 = t2.querySelectorAll('input[type="radio"]');
    if (0 === s2.length) continue;
    let u2 = [],
      c3 = [];
    if (
      (s2.forEach((e3) => {
        let t3 = e3;
        if (!P(t3)) return;
        let r3 = t3.value?.trim(),
          n3 = B(t3),
          o2 = n3 || r3 || "";
        o2 && u2.push(o2), c3.push(t3);
      }),
      0 === u2.length)
    )
      continue;
    let d2 = "true" === t2.getAttribute("aria-required");
    a2.push({
      label: i2,
      required: d2,
      type: enums.FIELD_TYPE.RADIOGROUP,
      $label: t2,
      $input: c3[0],
      $radioParent: t2,
      options: u2,
    });
  }
  let g2 = Array.from(
    n.querySelectorAll(
      'div[role="combobox"][jsname="oYxtQd"], [role="combobox"]',
    ),
  );
  for (let e2 = 0; e2 < g2.length; e2++) {
    let r2 = g2[e2];
    if (!P(r2) || (c2 && c2.contains(r2)) || (p2 && p2.contains(r2))) continue;
    if (
      "INPUT" === r2.tagName &&
      "list" === r2.getAttribute("aria-autocomplete")
    ) {
      let e3 = (r2.getAttribute("aria-label") ?? "").trim().toLowerCase();
      if ("state / province" !== e3 && "state" !== e3) {
        ea(r2, a2);
        continue;
      }
    }
    let n2 = r2.closest('[jsname="wSASue"]') || r2.parentElement;
    if (!n2) continue;
    let d2 = Y(r2, n2);
    r2.closest('[jsname="hcMhFd"]') && (d2 = "Preferred Location");
    let f2 = D(r2, n2, d2);
    if (isCountryLabel(d2) || f2) {
      let t2 = "true" === r2.getAttribute("aria-required"),
        i2 = {
          label: isCountryLabel(d2) ? d2 : "Country / Region",
          required: !!t2,
          type: enums.FIELD_TYPE.SELECT,
          $label: n2,
          $input: r2,
          options: [],
        };
      (i2.scope = `country:${e2}`), a2.push(i2);
      continue;
    }
    let m2 = r2.getAttribute("aria-controls"),
      h3 = R(r2),
      b3 = h3 ? L(h3) : [];
    if (0 === b3.length) {
      let e3 = n2.parentElement,
        t2 = e3?.querySelector(`ul[jsname="${u}"][role="listbox"]`);
      t2 && (b3 = L(t2));
    }
    if (
      (!h3 || 0 === b3.length) &&
      ("State / province" === d2 || "state / province" === C(d2 || ""))
    ) {
      let e3 = M(r2);
      e3 && (b3 = L((h3 = e3)));
    }
    if (t && 0 === b3.length && m2) {
      try {
        r2.focus(), r2.click();
        let e3 =
          "State / province" === d2 || "state / province" === C(d2 || "");
        (h3 = await getTargetOrTimeout(
          () => R(r2) || (e3 ? M(r2) : null),
          () => false,
          25,
        )) && (b3 = L(h3));
      } catch {}
      try {
        r2.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
        ),
          r2.dispatchEvent(
            new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
          );
        let e3 =
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        e3 &&
          e3 !== r2 &&
          (e3.dispatchEvent(
            new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
          ),
          e3.dispatchEvent(
            new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
          )),
          r2.blur();
      } catch {}
      if ("true" === r2.getAttribute("aria-expanded")) {
        try {
          let e3 = document.documentElement || document.body;
          e3.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })),
            e3.dispatchEvent(new MouseEvent("mouseup", { bubbles: true })),
            e3.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        } catch {}
        if (
          (await delay.delay(40), "true" === r2.getAttribute("aria-expanded"))
        ) {
          try {
            r2.click();
          } catch {}
          await delay.delay(40);
          try {
            r2.dispatchEvent(
              new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
            ),
              r2.dispatchEvent(
                new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
              ),
              r2.blur();
          } catch {}
        }
      }
      await delay.delay(80);
    }
    let y3 = "true" === r2.getAttribute("aria-required"),
      v3 = googleAnswer.getGoogleFieldDescription(d2 || "Combobox");
    a2.push({
      label: d2 || "Combobox",
      required: !!y3,
      type: enums.FIELD_TYPE.SELECT,
      $label: n2,
      $input: r2,
      options: b3,
      ...(v3 ? { description: v3 } : {}),
    });
  }
  let b2 = n.querySelectorAll(
    'input[jsname="YPqjbf"]:not([type="radio"]):not([type="checkbox"]), textarea[jsname="YPqjbf"]',
  );
  for (let e2 of b2) {
    let t2 = e2;
    if (!P(t2) || (c2 && c2.contains(t2)) || (p2 && p2.contains(t2))) continue;
    let r2 = B(t2);
    if (!r2) continue;
    let n2 =
        t2.closest('[jsname="vhZMvf"]') ||
        t2.closest(".Ufn6O") ||
        t2.parentElement,
      i2 =
        t2.hasAttribute("required") ||
        "true" === t2.getAttribute("aria-required"),
      l2 = googleAnswer.getGoogleFieldDescription(r2);
    a2.push({
      label: r2,
      required: !!i2,
      type: enums.FIELD_TYPE.TEXT,
      $label: n2 || t2,
      $input: t2,
      ...(l2 ? { description: l2 } : {}),
    });
  }
  let y2 = n.querySelectorAll('input[type="checkbox"][jsname="YPqjbf"]'),
    v2 =
      n.querySelector('ul[jsname="qQ26Uc"][aria-multiselectable="true"]') ||
      document.querySelector(
        'ul[jsname="qQ26Uc"][aria-multiselectable="true"]',
      ),
    w2 =
      n.querySelector('ul[jsname="zjZ4Tc"][aria-multiselectable="true"]') ||
      document.querySelector(
        'ul[jsname="zjZ4Tc"][aria-multiselectable="true"]',
      ),
    S2 = new Set(),
    E2 = new Set(),
    k2 = new Set(),
    T2 = new Map();
  for (let e2 of Array.from(y2)) {
    let t2 = e2;
    if (!P(t2)) continue;
    let r2 = B(t2);
    if (!r2 || !r2.includes(" for question:")) continue;
    let n2 = r2.indexOf(" for question:"),
      o2 = r2.slice(0, n2).trim(),
      i2 = C(r2.slice(n2 + 14)),
      a3 = /\s*required\.?\s*$/i.test(i2),
      l2 = i2.replace(/\s*required\.?\s*$/i, "").trim();
    if (!l2 || !o2) continue;
    let s2 = T2.get(l2);
    s2
      ? (s2.options.includes(o2) || s2.options.push(o2),
        s2.inputs.push(t2),
        a3 && (s2.requiredFromLabel = true))
      : T2.set(l2, {
          options: [o2],
          inputs: [t2],
          requiredFromLabel: a3 || undefined,
        }),
      k2.add(t2);
  }
  for (let [e2, { options: t2, inputs: r2, requiredFromLabel: n2 }] of T2) {
    if (0 === r2.length) continue;
    let i2 =
      r2.some((e3) => "true" === e3.getAttribute("aria-required")) ||
      !!n2 ||
      H(r2[0]);
    a2.push({
      label: e2,
      required: i2,
      type: enums.FIELD_TYPE.CHECKBOX,
      $label: r2[0].closest("label") || r2[0].parentElement,
      $input: r2[0],
      $checkboxs: r2,
      options: t2,
    });
  }
  for (let e2 of y2) {
    let t2 = e2;
    if (!P(t2) || (c2 && c2.contains(t2)) || (p2 && p2.contains(t2))) continue;
    if (v2?.contains(t2)) {
      S2.add(t2);
      continue;
    }
    if (w2?.contains(t2)) {
      E2.add(t2);
      continue;
    }
    if (k2.has(t2)) continue;
    let r2 = t2.closest("div.PukFX");
    if (r2) {
      let e3 = r2.querySelector("h2.yEACXb");
      if (e3 && /r[e\u00e9]sum[e\u00e9]/i.test(C(e3.textContent || ""))) {
        let e4 = (t2.value ?? "").trim().toLowerCase(),
          r3 = (B(t2) ?? "").toLowerCase();
        if (
          "autofill" === e4 ||
          r3.includes("fill out your application") ||
          r3.includes("r\xE9sum\xE9 information")
        )
          continue;
      }
    }
    let n2 = B(t2);
    if (!n2) continue;
    let i2 = t2.id
        ? C(
            document.querySelector(
              `label[for="${"undefined" != typeof CSS && CSS.escape ? CSS.escape(t2.id) : t2.id.replace(/["\\]/g, "\\$&")}"]`,
            )?.textContent ?? "",
          )
        : "",
      l2 = (n2 + " " + i2).trim() || n2;
    if (t2.closest("div.C9KZ4d")) {
      let e3 = l2.toLowerCase();
      (e3.includes("privacy") ||
        e3.includes("consent") ||
        e3.includes("applicant and candidate")) &&
        (n2 = "Privacy policy consent");
    }
    (l2 || "").toLowerCase().includes("consent") &&
      ((l2 || "").toLowerCase().includes("self-identification") ||
        (l2 || "").toLowerCase().includes("voluntary")) &&
      (n2 = "Consent terms");
    let s2 = (l2 || "").toLowerCase(),
      u2 =
        (s2.includes("privacy") && s2.includes("consent")) ||
        s2.includes("applicant and candidate privacy") ||
        (s2.includes("hereby certify") && s2.includes("true and accurate")) ||
        (s2.includes("consent") &&
          (s2.includes("self-identification") || s2.includes("voluntary"))),
      d2 = t2.closest("label") || t2.parentElement;
    a2.push({
      label: n2,
      required: u2 || H(t2),
      type: enums.FIELD_TYPE.CHECKBOX,
      $label: d2 || t2,
      $input: t2,
      $checkboxs: [t2],
      options: ["true", "false"],
    });
  }
  if (v2 && (r || 0 === S2.size)) {
    let e2 = v2.querySelectorAll('input[type="checkbox"][jsname="YPqjbf"]');
    for (let t2 of e2) {
      let e3 = t2;
      (r || P(e3)) && S2.add(e3);
    }
  }
  if (w2 && 0 === E2.size) {
    let e2 = w2.querySelectorAll('input[type="checkbox"][jsname="YPqjbf"]');
    for (let t2 of e2) {
      let e3 = t2;
      P(e3) && E2.add(e3);
    }
  }
  if (v2 && S2.size > 0) {
    let e2 = Array.from(S2),
      t2 = [];
    for (let r2 of e2) {
      let e3 = r2.closest('li[role="option"]'),
        n2 =
          (e3?.getAttribute("data-display-name") || r2.value || "").trim() ||
          (
            e3?.querySelector(`[${JSNAME_ATTR}="${OPTION_TEXT_JSNAME}"]`)
              ?.textContent ?? ""
          ).trim();
      t2.push(n2 || "Unknown");
    }
    a2.push({
      label: "Additional location(s)",
      required: false,
      type: enums.FIELD_TYPE.CHECKBOX,
      $label: v2,
      $input: e2[0],
      $checkboxs: e2,
      options: t2,
    });
  }
  if (w2 && E2.size > 0) {
    let e2 = Array.from(E2),
      t2 = [];
    for (let r2 of e2) {
      let e3 = r2.closest('li[role="option"]'),
        n2 =
          (
            e3?.querySelector(`[${JSNAME_ATTR}="${OPTION_TEXT_JSNAME}"]`)
              ?.textContent ?? ""
          ).trim() || (e3?.getAttribute("aria-label") || r2.value || "").trim();
      t2.push(n2 || "Unknown");
    }
    a2.push({
      label: "Race / ethnic group",
      required: true,
      type: enums.FIELD_TYPE.CHECKBOX,
      $label: w2,
      $input: e2[0],
      $checkboxs: e2,
      options: t2,
    });
  }
  if (c2) {
    let e2 =
      c2.querySelector("li.VdMCtc") ||
      c2.querySelector('li[jsname="lVns0"]') ||
      (c2.querySelector('[jsname="ouDqDb"]') ? c2 : null);
    if (e2) {
      let r2 = await ee(e2, (e3, t2) => Y(e3, t2), R, L, t);
      r2.length > 0 &&
        a2.push({
          type: enums.FIELD_TYPE.EDUCATION,
          label: "Education",
          required: true,
          children: r2,
        });
    }
  }
  if (p2) {
    let e2 = getWorkExperienceRules(),
      r2 = en(),
      n2 = e2[0]?.children ?? r2,
      i2 = new Map();
    r2.forEach((e3) => i2.set(e3.label, { ...e3 })),
      n2.forEach((e3) => i2.set(e3.label, e3)),
      (n2 = r2.map((e3) => i2.get(e3.label) ?? e3));
    let l2 = (e3) => {
        let t2 = R(e3);
        if (t2) return t2;
        let r3 = e3.closest('[jsname="wSASue"]'),
          n3 = r3?.querySelector(`ul[jsname="${u}"][role="listbox"]`);
        return n3 || N(e3);
      },
      s2 = n2.find((e3) => "End Month" === e3.label);
    if (s2?.$input && (!s2.options || 0 === s2.options.length)) {
      let e3 = s2.$input.closest('[jsname="QBGAS"]'),
        r3 = e3?.querySelector(`ul[jsname="${u}"][role="listbox"]`);
      if (r3) {
        let e4 = L(r3);
        e4.length && (s2.options = e4);
      }
      t && !s2.options?.length && (s2.options = await $(s2.$input, l2, L));
    }
    let c3 = n2.find((e3) => "Start Month" === e3.label);
    t &&
      c3?.$input &&
      (!c3.options || 0 === c3.options.length) &&
      (c3.options = await $(c3.$input, l2, L)),
      s2 &&
        (!s2.options || 0 === s2.options.length) &&
        c3?.options?.length &&
        (s2.options = [...c3.options]);
    let d2 = n2.find((e3) => "State / province" === e3.label);
    t &&
      d2?.$input &&
      (!d2.options || 0 === d2.options.length) &&
      (d2.options = await $(d2.$input, l2, L)),
      n2.length > 0 &&
        a2.push({
          type: enums.FIELD_TYPE.EMPLOYMENT,
          label: "Work experience",
          required: true,
          children: n2,
        });
  }
  let F2 = new Set(),
    I2 = a2.filter((e2) => {
      let t2 = e2.scope || "",
        r2 = `${e2.type}:${e2.label.toLowerCase()}:${t2}`;
      return !F2.has(r2) && (F2.add(r2), true);
    });
  return I2;
}
function es(e) {
  try {
    let t = e;
    if (e.type === enums.FIELD_TYPE.TEXT && t.$input) {
      let e2 = t.$input;
      return e2?.value ?? "";
    }
    if (e.type === enums.FIELD_TYPE.SELECT && t.$input) {
      let r = t.$input,
        n = r.closest('[jsname="wSASue"]') || r.parentElement,
        o2 =
          r.querySelector('[jsname="Fb0Bif"]') ||
          n?.querySelector('[jsname="Fb0Bif"]'),
        i2 = C(o2?.textContent ?? ""),
        a2 = i2.toLowerCase(),
        l2 = C(e.label ?? "").toLowerCase();
      if (!i2) return "";
      return a2 === l2 ? "" : i2;
    }
    if (e.type === enums.FIELD_TYPE.RADIOGROUP && t.$radioParent) {
      let r = Array.from(
          t.$radioParent.querySelectorAll('input[type="radio"]'),
        ),
        n = r.find((e2) => e2.checked);
      if (!n) return "";
      let o2 = e.options,
        i2 = r.indexOf(n);
      if (o2 && i2 >= 0 && i2 < o2.length) return o2[i2];
      let a2 = B(n);
      if (a2) return a2;
      return n.value ?? "";
    }
    if (e.type === enums.FIELD_TYPE.CHECKBOX && t.$checkboxs?.length) {
      let r = e.options;
      if (r?.length && "true" !== r[0] && "false" !== r[0]) {
        let e2 = [];
        return (
          t.$checkboxs.forEach((t2, n) => {
            let o2 = t2,
              i2 = o2.closest('li[role="option"]'),
              a2 =
                o2.checked ||
                "true" === o2.getAttribute("aria-checked") ||
                i2?.getAttribute("aria-selected") === "true";
            a2 && r[n] && e2.push(r[n]);
          }),
          e2.join(", ")
        );
      }
      return t.$checkboxs[0].checked ? "true" : "false";
    }
  } catch {}
  return "";
}
export function isStructuredSectionFilled(e, t) {
  if (0 === e.length || 0 === t.length) return false;
  let r = (e2) => {
      let t2 = String(e2 ?? "")
        .trim()
        .toLowerCase();
      return "true" === t2 || "yes" === t2 || "1" === t2 || "y" === t2;
    },
    n = (e2) => "" !== String(e2 ?? "").trim();
  for (let o2 = 0; o2 < t.length; o2++) {
    let i2 = t[o2],
      a2 = e[o2] ?? {},
      l2 = (i2.children ?? []).filter((e2) => !!e2?.label);
    if (0 === l2.length) return false;
    let s2 = l2.filter((e2) => true === e2.required),
      u2 = s2.length > 0 ? s2 : l2,
      c2 = r(a2["This is your current job"]);
    for (let e2 of u2) {
      let t2 = e2.label;
      if (t2 && (!c2 || ("End Month" !== t2 && "End Year" !== t2))) {
        if ("State" === t2 || "State / province" === t2) {
          if (n(a2.State) || n(a2["State / province"])) continue;
          return false;
        }
        if (!n(a2[t2])) return false;
      }
    }
  }
  return true;
}
export async function getStructuredEducationSnapshot(e = true) {
  let t = await getHigherEducationRules(e);
  return t.length
    ? t.map((e2) => {
        let t2 = {};
        return (
          e2.children?.forEach((e3) => {
            t2[e3.label] = es(e3);
          }),
          t2
        );
      })
    : [];
}
export function getStructuredWorkExperienceSnapshot() {
  let e = getWorkExperienceRules();
  return e.length
    ? e.map((e2) => {
        let t = {};
        return (
          e2.children?.forEach((e3) => {
            t[e3.label] = es(e3);
          }),
          t
        );
      })
    : [];
}
export async function getFormSnapshot(e) {
  let t = {};
  for (let r of e)
    try {
      if (
        r.type === enums.FIELD_TYPE.EMPLOYMENT ||
        r.type === enums.FIELD_TYPE.EDUCATION
      )
        continue;
      t[r.label] = es(r);
    } catch (e2) {
      t[r.label] = "";
    }
  return t;
}
function ep(e) {
  let t = (e.textContent || "").trim().toLowerCase(),
    r = (e.getAttribute("aria-label") || "").toLowerCase();
  return !!(
    t.includes("next") ||
    r.includes("next") ||
    t.includes("continue") ||
    r.includes("continue") ||
    t.includes("submit") ||
    r.includes("submit")
  );
}
function em(e) {
  if ("BUTTON" === e.tagName) return ep(e);
  if ("button" === e.getAttribute("role")) {
    let t = (e.getAttribute("jsname") || "").toLowerCase();
    if ("ocpkoe" === t || "m2uyvd" === t) return true;
    let r = (e.textContent || "").trim().toLowerCase(),
      n = (e.getAttribute("aria-label") || "").toLowerCase();
    return (
      r.includes("next") ||
      r.includes("continue") ||
      n.includes("next") ||
      n.includes("continue") ||
      r.includes("submit") ||
      n.includes("submit") ||
      "apply" === r ||
      "apply" === n
    );
  }
  return false;
}
export function getCurrentStepIndex() {
  return getGoogleVisibleStepState().idx;
}
function eg(e) {
  let t =
    e.querySelector('button[aria-label="Next"]') ??
    e.querySelector('button[jsname="OCpkoe"]') ??
    e.querySelector('div[role="button"][jsname="OCpkoe"]') ??
    Array.from(e.querySelectorAll("button")).find(
      (e2) => P(e2) && "next" === (e2.textContent || "").trim().toLowerCase(),
    ) ??
    null;
  if (t && P(t)) return t;
  let r =
    e.querySelector('button[aria-label*="Submit profile"]') ??
    e.querySelector('div[role="button"][aria-label*="Submit profile"]') ??
    null;
  if (r && P(r)) return r;
  let n =
    e.querySelector('button[aria-label="Apply"]') ??
    e.querySelector('div[role="button"][aria-label="Apply"]') ??
    null;
  if (n && P(n)) return n;
  let o2 =
    e.querySelector('button[jsname="M2UYVd"]') ??
    e.querySelector('div[role="button"][jsname="M2UYVd"]') ??
    Array.from(e.querySelectorAll("button")).find((e2) => {
      if (!P(e2) || "gQ2Xie" === e2.getAttribute("jsname")) return false;
      let t2 = (e2.textContent || "").toLowerCase(),
        r2 = (e2.getAttribute("aria-label") || "").toLowerCase();
      return (
        t2.includes("submit") ||
        r2.includes("submit") ||
        "apply" === t2 ||
        "apply" === r2
      );
    }) ??
    null;
  if (o2 && P(o2)) return o2;
  let i2 = e.querySelector(
    'div[role="button"][aria-label*="Submit"], div[role="button"][aria-label*="submit"]',
  );
  return i2 && P(i2) ? i2 : null;
}
function eb(e) {
  let t = e.getBoundingClientRect();
  return t.top < window.innerHeight && t.bottom > 0;
}
function ey() {
  let e = [
      (e2) => "next" === e2,
      (e2) =>
        e2.includes("submit profile") ||
        e2.includes("submit profile & continue"),
      (e2) => "apply" === e2,
    ],
    t = (e2) =>
      "back" === e2 ||
      "save" === e2 ||
      "cancel" === e2 ||
      e2.includes("cancel editing") ||
      e2.includes("back to careers profile"),
    r = [],
    n = document.querySelectorAll("button"),
    o2 = document.querySelectorAll('div[role="button"]');
  for (let i3 of [...Array.from(n), ...Array.from(o2)]) {
    if (!P(i3)) continue;
    let n2 = i3.getBoundingClientRect();
    if (n2.top >= window.innerHeight || n2.bottom <= 0) continue;
    let o3 = (i3.getAttribute("aria-label") || "").trim().toLowerCase();
    if (!o3 || t(o3)) continue;
    let a3 = e.some((e2) => e2(o3));
    a3 && r.push(i3);
  }
  if (0 === r.length) return null;
  r.sort(
    (e2, t2) => t2.getBoundingClientRect().top - e2.getBoundingClientRect().top,
  );
  let i2 = (e2) =>
      "next" === e2 ||
      e2.includes("submit profile") ||
      e2.includes("submit profile & continue"),
    a2 = r.filter((e2) =>
      i2((e2.getAttribute("aria-label") || "").trim().toLowerCase()),
    );
  return a2.length > 0 ? a2[0] : r[0];
}
function ev() {
  let e = [".Rwgx2d", ".dWXgBe", ".wvIRqb", ".fg78g", ".ltQAf", ".gFnO5d"],
    t = [];
  for (let r of e)
    document.querySelectorAll(r).forEach((e2) => {
      P(e2) && eb(e2) && t.push(e2);
    });
  return 0 === t.length
    ? null
    : (t.sort(
        (e2, t2) =>
          t2.getBoundingClientRect().top - e2.getBoundingClientRect().top,
      ),
      t[0]);
}
function ew(e) {
  let t =
    e.querySelector('button[aria-label="Next"]') ??
    e.querySelector('button[jsname="OCpkoe"]') ??
    e.querySelector('div[role="button"][jsname="OCpkoe"]');
  return !!(t && P(t));
}
function eS() {
  let e = [".Rwgx2d", ".dWXgBe", ".wvIRqb", ".fg78g", ".ltQAf", ".gFnO5d"],
    t = [];
  for (let r2 of e)
    document.querySelectorAll(r2).forEach((e2) => {
      P(e2) && eb(e2) && t.push(e2);
    });
  if (0 === t.length) return null;
  t.sort(
    (e2, t2) => t2.getBoundingClientRect().top - e2.getBoundingClientRect().top,
  );
  let r = t.find((e2) => ew(e2));
  return r || t[0];
}
function eE(e) {
  let t = (e.textContent || "").toLowerCase(),
    r = (e.getAttribute("aria-label") || "").toLowerCase();
  return !!(
    t.includes("continue") ||
    r.includes("continue") ||
    ((t.includes("next") || r.includes("next")) &&
      !t.includes("submit") &&
      !r.includes("submit")) ||
    ((t.includes("submit") || r.includes("submit")) &&
      (t.includes("continue") || r.includes("continue")))
  );
}
function ex() {
  let e = Array.from(document.querySelectorAll("button")).filter(
      (e2) => P(e2) && ep(e2) && "gQ2Xie" !== e2.getAttribute("jsname"),
    ),
    t = Array.from(document.querySelectorAll('div[role="button"]')).filter(
      (e2) =>
        P(e2) &&
        em(e2) &&
        "geghkb" !== (e2.getAttribute("jsname") || "").toLowerCase(),
    ),
    r = [...e, ...t],
    n = r.filter((e2) => {
      let t2 = e2.getBoundingClientRect();
      return t2.top < window.innerHeight && t2.bottom > 0;
    });
  if (0 === n.length) return null;
  n.sort(
    (e2, t2) => t2.getBoundingClientRect().top - e2.getBoundingClientRect().top,
  );
  let o2 = n.filter((e2) => eE(e2));
  return o2.length > 0 ? o2[0] : n[0];
}
function eC(e) {
  let t = e.toLowerCase();
  return (
    /review\s*&\s*apply|review\s+and\s+apply/.test(t) ||
    (t.includes("review") && t.includes("apply"))
  );
}
function eA(e, t) {
  return e &&
    (t || "apply" !== (e.getAttribute("aria-label") || "").trim().toLowerCase())
    ? e
    : null;
}
export function findStepAdvanceButton() {
  let e = getCurrentStepFingerprint(),
    t = eC(e),
    r = ey(),
    n = eA(r, t);
  if (n) return n;
  let o2 = t ? ev() : eS();
  if (o2) {
    let e2 = eg(o2),
      r2 = eA(e2, t);
    if (r2) return r2;
  }
  let i2 = ex(),
    a2 = eA(i2, t);
  if (a2) return a2;
  let l2 = e.toLowerCase();
  if (!l2.includes("careers profile")) {
    let e2 = document.querySelectorAll(".Rwgx2d"),
      r2 = document.querySelectorAll(".dWXgBe");
    for (let n2 of [...e2, ...r2]) {
      if (!P(n2)) continue;
      let e3 = eg(n2),
        r3 = eA(e3, t);
      if (r3) return r3;
    }
  }
  let s2 = Array.from(
      document.querySelectorAll('button[jsname="M2UYVd"]'),
    ).concat(
      Array.from(document.querySelectorAll("button")).filter((e2) =>
        (e2.getAttribute("aria-label") || "")
          .toLowerCase()
          .includes("submit profile"),
      ),
    ),
    u2 = s2.find((e2) => P(e2)),
    c2 = eA(u2 ?? null, t);
  if (c2) return c2;
  let d2 = document.querySelectorAll(".wvIRqb");
  for (let e2 of d2) {
    let r2 =
        e2.querySelector('button[jsname="M2UYVd"]') ??
        e2.querySelector('button[aria-label*="Submit profile"]'),
      n2 = eA(r2 && P(r2) ? r2 : null, t);
    if (n2) return n2;
  }
  let f2 = Array.from(document.querySelectorAll("button")).filter(
      (e2) => P(e2) && ep(e2) && "gQ2Xie" !== e2.getAttribute("jsname"),
    ),
    p2 = f2.find((e2) => {
      let t2 = (e2.textContent || "").toLowerCase(),
        r2 = (e2.getAttribute("aria-label") || "").toLowerCase();
      return (
        (t2.includes("next") ||
          t2.includes("continue") ||
          r2.includes("next") ||
          r2.includes("continue")) &&
        !t2.includes("submit") &&
        !r2.includes("submit")
      );
    }),
    m2 = eA(p2 ?? null, t);
  if (m2) return m2;
  let h2 = f2.find(
      (e2) =>
        (e2.getAttribute("aria-label") || "")
          .toLowerCase()
          .includes("submit") ||
        (e2.textContent || "").toLowerCase().includes("submit"),
    ),
    g2 = h2 ?? f2[0] ?? null;
  return eA(g2, t);
}
export function isAdvanceButton(e) {
  if (!e || !(e instanceof HTMLElement)) return false;
  let t = findStepAdvanceButton();
  if (t && (t === e || t.contains(e))) return true;
  let r = e.closest?.("button");
  if (r) return "gQ2Xie" !== r.getAttribute("jsname") && ep(r);
  let n = e.closest?.('div[role="button"]');
  return !!n && n.getAttribute("jsname")?.toLowerCase() !== "geghkb" && em(n);
}
function eF() {
  return getGoogleVisibleStepState().idx;
}
export function getGoogleStepIndexFromVisibleContent() {
  return eF();
}
export function getCurrentStepFingerprint(e) {
  let t = e ?? document.body,
    r = t.querySelectorAll("div.PukFX");
  for (let e2 of r) {
    let t2 = e2.querySelector("h2.yEACXb");
    if (!t2) continue;
    let r2 = window.getComputedStyle(t2);
    if ("none" === r2.display || "hidden" === r2.visibility) continue;
    let n2 = t2.getBoundingClientRect();
    if (n2.width > 0 && n2.height > 0)
      return (t2.textContent ?? "").replace(/\s+/g, " ").trim();
  }
  if (t.querySelector("div.xBCDBe.kAZple") || t.querySelector("div.xBCDBe"))
    return "EEO";
  let n = t.querySelector("h1") || t.querySelector("h2"),
    o2 = (n?.textContent ?? "").toLowerCase();
  if (/voluntary|self-identification/.test(o2)) return "EEO";
  if (t.querySelector("div.C9KZ4d")) return "Consent";
  let { selectedTab: i2 } = getGoogleVisibleStepState(t);
  if (i2) {
    let e2 = (i2.getAttribute("aria-label") ?? "").trim(),
      t2 = e2.replace(/^Step\s*\d+\s*-\s*/i, "").trim();
    if (t2) return t2;
    let r2 = i2.querySelector("span.JjWAne"),
      n2 = (r2?.textContent ?? "").replace(/\s+/g, " ").trim();
    if (n2) return n2;
  }
  return "";
}
export async function waitForStepAdvanceButtonEnabled(e, t, r) {
  let n = (e2) => !e2.disabled && "true" !== e2.getAttribute("aria-disabled");
  if (n(e)) return e;
  let o2 = Date.now() + t;
  for (; Date.now() < o2 && (await delay.delay(r), e.isConnected); )
    if (n(e)) return e;
  return null;
}
export async function waitForStepTransition(e, t, r) {
  await delay.delay(800);
  let n = Date.now() + t;
  for (; Date.now() < n; ) {
    let t2 = getCurrentStepFingerprint();
    if ("" !== t2 && t2 !== e) return true;
    await delay.delay(r);
  }
  return false;
}
export function isGoogleFormsPage() {
  return (
    "docs.google.com" === window.location.hostname &&
    window.location.pathname.startsWith("/forms/")
  );
}
export async function extractGoogleFormsRules() {
  let e = [];
  await delay.delay(500);
  let t = document.querySelectorAll('div[jsname="WsjYwc"], div.geS5n');
  for (let r of t) {
    let t2 = r;
    if (!P(t2)) continue;
    let n = t2.querySelector("span.M7eMe"),
      i2 = C(n?.textContent || "");
    if (!i2) continue;
    let a2 =
        !!t2.querySelector("span.vnumgf") ||
        null !== t2.querySelector('[aria-required="true"]'),
      l2 = t2.querySelector("div.bj084d");
    if (l2) continue;
    let s2 = t2.querySelector('[role="radiogroup"]');
    if (s2) {
      let r2 = Array.from(s2.querySelectorAll('[role="radio"]')),
        l3 = [];
      for (let e2 of r2) {
        let t3 = (
          e2.getAttribute("aria-label") ||
          e2.getAttribute("data-value") ||
          ""
        ).trim();
        t3 && l3.push(t3);
      }
      e.push({
        label: i2,
        required: a2,
        type: enums.FIELD_TYPE.RADIOGROUP,
        $label: n || t2,
        $input: r2[0] || s2,
        $radioParent: s2,
        options: l3,
      });
      continue;
    }
    let u2 = Array.from(t2.querySelectorAll('[role="checkbox"]'));
    if (u2.length > 0) {
      let r2 = [];
      for (let e2 of u2) {
        let t3 = (
          e2.getAttribute("aria-label") ||
          e2.getAttribute("data-value") ||
          ""
        ).trim();
        t3 && r2.push(t3);
      }
      e.push({
        label: i2,
        required: a2,
        type: enums.FIELD_TYPE.CHECKBOX,
        $label: n || t2,
        $input: u2[0],
        $checkboxs: u2,
        options: r2,
      });
      continue;
    }
    let c2 = t2.querySelector('[role="listbox"]');
    if (c2) {
      let r2 = Array.from(c2.querySelectorAll('[role="option"], [data-value]')),
        l3 = [];
      for (let e2 of r2) {
        let t3 = (e2.getAttribute("data-value") || e2.textContent || "").trim();
        t3 && l3.push(t3);
      }
      e.push({
        label: i2,
        required: a2,
        type: enums.FIELD_TYPE.SELECT,
        $label: n || t2,
        $input: c2,
        options: l3,
      });
      continue;
    }
    let d2 = t2.querySelector(
        'input[type="text"], input[type="email"], input[type="url"], input[type="tel"], input[type="number"]',
      ),
      f2 = t2.querySelector("textarea"),
      p2 = d2 || f2;
    if (p2) {
      e.push({
        label: i2,
        required: a2,
        type: enums.FIELD_TYPE.TEXT,
        $label: n || t2,
        $input: p2,
      });
      continue;
    }
  }
  return e;
}
export function getFormsPageFingerprint() {
  let e = document.querySelector('input[name="pageHistory"]')?.value || "",
    t = C(document.querySelector(".HZh16d")?.textContent || "");
  return `${e}|${t}`;
}
export function isFormsAdvanceButton(e) {
  if (!e || !(e instanceof HTMLElement)) return false;
  let t = e.closest('div[role="button"]');
  if (!t) return false;
  let r = t.getAttribute("jsname") || "";
  if ("OCpkoe" === r || "M2UYVd" === r) return true;
  let n = (t.textContent || "").trim().toLowerCase();
  return !!(
    n.includes("next") ||
    n.includes("\u4E0B\u4E00\u9875") ||
    n.includes("submit") ||
    n.includes("\u63D0\u4EA4")
  );
}
export function isFormsSubmitButton(e) {
  if (!e || !(e instanceof HTMLElement)) return false;
  let t = e.closest('div[role="button"]');
  if (!t) return false;
  let r = t.getAttribute("jsname") || "";
  if ("M2UYVd" === r) return true;
  let n = (t.textContent || "").trim().toLowerCase(),
    o2 = (t.getAttribute("aria-label") || "").toLowerCase();
  return (
    n.includes("submit") || n.includes("\u63D0\u4EA4") || o2.includes("submit")
  );
}
export async function waitForFormsPageTransition(e, t = 6e3, r = 250) {
  await delay.delay(300);
  let n = Date.now() + t;
  for (; Date.now() < n; ) {
    let t2 = getFormsPageFingerprint();
    if (t2 !== e) return true;
    await delay.delay(r);
  }
  return false;
}
export function getGoogleFormsSnapshot() {
  let e = {},
    t = document.querySelectorAll('div[jsname="WsjYwc"], div.geS5n');
  for (let r of t) {
    let t2 = r.querySelector("span.M7eMe"),
      n = C(t2?.textContent || "");
    if (!n) continue;
    let o2 = r.querySelector('[role="radio"][aria-checked="true"]');
    if (o2) {
      e[n] = (
        o2.getAttribute("aria-label") ||
        o2.getAttribute("data-value") ||
        ""
      ).trim();
      continue;
    }
    let i2 = Array.from(
      r.querySelectorAll('[role="checkbox"][aria-checked="true"]'),
    );
    if (i2.length > 0) {
      e[n] = i2
        .map((e2) =>
          (
            e2.getAttribute("aria-label") ||
            e2.getAttribute("data-value") ||
            ""
          ).trim(),
        )
        .join(", ");
      continue;
    }
    let a2 = r.querySelector(
      'input[type="text"], input[type="email"], input[type="url"], input[type="tel"], input[type="number"], textarea',
    );
    if (a2) {
      e[n] = (a2.value || "").trim();
      continue;
    }
    let l2 = r.querySelector('[role="option"][aria-selected="true"]');
    l2 &&
      (e[n] = (l2.getAttribute("data-value") || l2.textContent || "").trim());
  }
  return e;
}
