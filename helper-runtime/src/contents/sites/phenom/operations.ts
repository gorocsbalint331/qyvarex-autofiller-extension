// @ts-nocheck
/**
 * Phenom — DOM fill operations (inputs, search, date, resume, cover letter, composites).
 */

import * as choiceMatch from "../../methods/choice-match.js";
import * as selectUtils from "../../crawler/utils/select.js"
import * as dayjs from "dayjs";
import * as customParseFormat from "dayjs/plugin/customParseFormat";
import * as messaging from "@plasmohq/messaging";
import * as answerMethods from "../../methods/answer.js";
import * as dom from "../../methods/dom.js";
import * as observer from "../../methods/observer.js";
import * as enums from "../../../core/enums.js";
import * as coreDom from "../../../core/dom.js";
import * as delay from "../../../utils/delay.js";
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js";
import * as rules from "./rules.js";
const dayjsDefault = { default: dayjs };
const customParseFormatDefault = { default: customParseFormat };
const getTargetOrTimeoutDefault = { default: getTargetOrTimeout };
dayjsDefault.default.extend(customParseFormatDefault.default);
let w = "data-jobright-phenom-upload-alert-patch", S = "__jr_phenom_upload_alert_suppressor", E = /(?:(?:resume|file)\s+(?:has\s+been\s+)?(?:uploaded|attached)\s+successfully|uploaded\s+(?:your\s+)?(?:resume|file)\s+successfully|(?:resume|file)\s+has\s+been\s+successfully\s+attached)/i, x = "Cover_Letter", C = 12e3, A = 3e4, k = 800, T = 100;
function F(e, t) {
  console.info(`[phenom][date-debug] ${e} ${JSON.stringify(t)}`);
}
function I(e) {
  return { ...e, coverLetterName: D(e.coverLetterName) };
}
function j(e) {
  return e.replace(/\.[^/.]+$/, "").replace(/[\\/:*?"<>|]+/g, " ").replace(/\s+/g, " ").trim();
}
function D(e) {
  let t = j(e), r = t.match(/^Cover_Letter_([^_]+)/i), n = j(r?.[1] || "");
  if (n) return `${x}_${n}`;
  let o2 = t.replace(/\bcover\s+letter\b/gi, " ").replace(/\s+/g, " ").trim().split(/\s+/).slice(0, 2).join(" ");
  return o2 ? `${x}_${o2}` : x;
}
function P(e) {
  return E.test(String(e ?? ""));
}
async function _() {
  if (document.documentElement?.getAttribute(w) === "true") return true;
  let e = await messaging.sendToBackground({ name: "installMainWorldAlertSuppressor", body: { markerAttr: w, patternFlags: E.flags, patternSource: E.source, stateKey: S } });
  return e?.success === true;
}
async function L() {
  let e = await _();
  return e || console.warn("[phenom] upload alert suppressor is not installed"), e;
}
function R(e) {
  e.dispatchEvent(new Event("input", { bubbles: true })), e.dispatchEvent(new Event("change", { bubbles: true })), e.dispatchEvent(new Event("blur", { bubbles: true }));
}
function O(e) {
  e?.blur();
}
function M(e, t) {
  e.dispatchEvent(new Event(t, { bubbles: true, cancelable: true, composed: true }));
}
function N(e, t) {
  e.dispatchEvent(new MouseEvent(t, { bubbles: true, cancelable: true, view: window }));
}
function $(e) {
  N(e, "mousedown"), N(e, "mouseup"), N(e, "click");
}
function B(e, t) {
  let r = Object.getPrototypeOf(e), n = Object.getOwnPropertyDescriptor(r, "value");
  n?.set?.call(e, t), n?.set || (e.value = t);
}
function q(e, t) {
  let r = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value");
  r?.set?.call(e, t), r?.set || (e.value = t);
}
function U(e) {
  return String(e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function H(e) {
  return U(e).replace(/[^a-z0-9]/g, "");
}
function Y(e) {
  return String(e ?? "").replace(/\D/g, "");
}
function z(e, t) {
  let r = U(e), n = U(t);
  if (!r || !n) return false;
  if (r === n) return true;
  let o2 = H(e), i2 = H(t);
  if (o2 && o2 === i2) return true;
  let a2 = Y(e), l2 = Y(t);
  return !!a2 && !!l2 && a2.replace(/^1(?=\d{10}$)/, "") === l2.replace(/^1(?=\d{10}$)/, "") || r.includes(n) || n.includes(r);
}
function V(e) {
  return String(e ?? "").trim().length > 0;
}
function W(e) {
  return Array.isArray(e) ? e.some((e10) => W(e10)) : "string" == typeof e ? e.trim().length > 0 : null != e;
}
function G(e, t) {
  let r = H(e);
  return !!r && Object.entries(t || {}).some(([e10, t10]) => H(e10) === r && W(t10));
}
function K(e) {
  let t = H(e);
  return "country" === t || "countryregion" === t || "countryorregion" === t || "placeofresidencecountry" === t || t.includes("phonecountrycode") || t.includes("countryphonecode") || t.includes("countryregionphonecode") || t.includes("country") && t.includes("phone") && t.includes("code");
}
function X(e) {
  if (W(e?.country)) return true;
  let t = e?.regular || {};
  return ["Country", "Country/Region", "Country or Region", "Place of Residence - Country"].some((e10) => W(t[e10]));
}
function J(e, t) {
  let r = H(e), n = t?.fillDataList || t?.fill_data_list || [];
  return Array.isArray(n) && n.some((e10) => H(e10?.name) === r && !W(e10?.value));
}
function Q(e, t) {
  return !!e.trim() && (!!G(e, t?.regular || {}) || K(e) && J(e, t) && X(t));
}
function Z() {
  let e = document.querySelector(".overlaybg"), t = document.querySelector(".widget-loader");
  return rules.isActuallyVisible(e) || rules.isActuallyVisible(t);
}
async function ee(e = 12e3) {
  return await observer.waitForCondition(() => !Z(), { timeout: e, interval: 50, observeTarget: document.body });
}
async function et(e = 0) {
  let t = await ee();
  if (!t) return console.warn("[phenom] loader did not become hidden before timeout"), false;
  if (e <= 0) return true;
  let r = Date.now() + e;
  for (; Date.now() < r; ) {
    if (Z()) {
      let e10 = await ee();
      if (!e10) return console.warn("[phenom] loader did not settle before timeout"), false;
    }
    await delay.delay(50);
  }
  return true;
}
function er() {
  return "careers.cisco.com" === window.location.hostname && rules.isInitialApplicationStep(rules.getStepInfo()) && !!rules.getFormRoot();
}
function en(e) {
  if (!(e instanceof HTMLElement) || !e.isConnected || e.disabled || !rules.isActuallyVisible(e) || e.closest(".resume-upload-wrapper")) return false;
  let t = e.tagName.toLowerCase();
  if (!["input", "textarea", "select"].includes(t)) return false;
  let r = "input" === t ? (e.getAttribute("type") || "text").toLowerCase() : "";
  if (["file", "hidden", "checkbox", "radio"].includes(r)) return false;
  let n = `${e.getAttribute("id") || ""} ${e.getAttribute("name") || ""}`.toLowerCase();
  return !/(resumepath|resumename|resumefilesize|resumebucketid|resumerelativepath|isresume)/.test(n);
}
function eo() {
  let e = Array.from(rules.getFormRoot()?.querySelectorAll("input, textarea, select") ?? []).filter(en);
  return { fieldCount: e.length, fieldSignature: e.map((e10, t) => [t, e10.tagName, e10.getAttribute("id") || "", e10.getAttribute("name") || "", e10.value || ""].join(":")).join("|") };
}
function ei() {
  return er() ? eo() : null;
}
async function ea(e, t = {}) {
  let r = t.startTimeoutMs ?? C, n = t.settleTimeoutMs ?? A, o2 = t.quietMs ?? k, i2 = t.intervalMs ?? T, a2 = document.documentElement || document.body, l2 = e, s2 = Date.now(), u2 = false, c2 = false, d2 = () => {
    let e10 = eo();
    e10.fieldSignature !== l2.fieldSignature && (l2 = e10, s2 = Date.now(), c2 = true);
  }, f2 = await observer.waitForCondition(() => Z() ? (u2 = true, s2 = Date.now(), true) : (d2(), c2), { timeout: r, interval: i2, observeTarget: a2 });
  if (!f2) return console.warn("[phenom] Cisco resume parser did not show activity after upload", { fieldCount: l2.fieldCount, sawFieldRewrite: c2 }), false;
  let m2 = await observer.waitForCondition(() => Z() ? (u2 = true, s2 = Date.now(), false) : (d2(), Date.now() - s2 >= o2), { timeout: n, interval: i2, observeTarget: a2 });
  return m2 ? (console.log("[phenom] Cisco resume parser settled", { fieldCount: l2.fieldCount, sawLoader: u2, sawFieldRewrite: c2 }), true) : (console.warn("[phenom] Cisco resume parser did not settle after upload", { fieldCount: l2.fieldCount, sawLoader: u2, sawFieldRewrite: c2 }), false);
}
function el(e) {
  return ["true", "yes", "1", "checked", "agree", "agreed", "current"].includes(U(e));
}
function es(e) {
  return ["false", "no", "0", "unchecked", "disagree", "decline"].includes(U(e));
}
function eu(e) {
  if (!e) return "";
  let t = e.cloneNode(true);
  return t.querySelectorAll("input, .check, .checkmark, .required, [aria-hidden='true']").forEach((e10) => {
    e10.remove();
  }), t.textContent?.replace(/\s+/g, " ").trim() || "";
}
function ec(e) {
  let t = e.id ? document.querySelector(`label[for="${CSS.escape(e.id)}"]`) : null;
  return eu(t || e.closest("label") || e.parentElement);
}
function ed(e) {
  let t = e.closest("label"), r = e.closest(".daterangepicker-checkbox"), n = eu(t?.querySelector(".checkboxText")) || eu(t) || eu(r?.querySelector(".checkboxText")) || eu(r) || ec(e);
  return n.replace(/\*/g, " ").replace(/\s+/g, " ").trim();
}
function ef(e) {
  return "undefined" != typeof CSS && "function" == typeof CSS.escape ? CSS.escape(e) : e.replace(/["\\]/g, "\\$&");
}
function ep(e) {
  let t = e.id ? document.querySelector(`label[for="${ef(e.id)}"]`) : null;
  return (t?.textContent || e.closest(".form-group.field")?.querySelector("label.control-label, legend, label")?.textContent || "").replace(/\*/g, " ").replace(/\s+/g, " ").trim();
}
function em(e, t) {
  let r = e.$input, n = r?.id;
  if (n) {
    let e10 = document.getElementById(n);
    if (e10 instanceof HTMLSelectElement) return e10;
  }
  let o2 = e.$label?.getAttribute?.("for");
  if (o2) {
    let e10 = document.getElementById(o2);
    if (e10 instanceof HTMLSelectElement) return e10;
  }
  let i2 = r?.name;
  if (i2) {
    let e10 = Array.from(document.querySelectorAll("select")).find((e11) => e11.name === i2);
    if (e10) return e10;
  }
  let a2 = U(e.label);
  return a2 ? Array.from(document.querySelectorAll("select")).find((e10) => U(ep(e10)) === a2) || (t?.isConnected ? t : null) || (r?.isConnected ? r : null) : null;
}
function eh(e) {
  let t = U(e.textContent);
  return !e.value && ("" === t || "select" === t || "please select" === t || "please select..." === t);
}
function eg(e) {
  let t = H(e);
  return t.includes("phonecountrycode") || t.includes("countryphonecode") || t.includes("countryregionphonecode") || t.includes("country") && t.includes("phone") && t.includes("code");
}
function eb(e) {
  return ["united states", "united states of america", "usa", "us"].includes(U(e));
}
function ey(e) {
  let t = U(e.textContent), r = U(e.value);
  return ["usa", "us"].includes(r) || ["usa", "united states", "united states of america"].includes(t) || t.startsWith("usa (") || t.startsWith("united states (") || t.startsWith("united states of america (");
}
function ev(e) {
  let t = Array.isArray(e) ? e : [e];
  for (let e10 of t) {
    let t10 = String(e10 ?? "").trim();
    if (t10) return t10;
  }
  return "";
}
function ew(e) {
  let t = Object.entries(e || {}), r = t.find(([e10]) => eg(e10));
  if (r) return ev(r[1]);
  let n = t.find(([e10]) => "countrycode" === H(e10));
  return n ? ev(n[1]) : "";
}
function eS(e) {
  return Array.from(e.options).some((e10) => /\(\s*\+\s*\d/.test(e10.textContent || ""));
}
function eE(e) {
  let t = [ep(e), e.id, e.name, e.getAttribute("aria-label"), e.getAttribute("aria-labelledby")].join(" "), r = H(t), n = eg(t) || r.includes("countrycode") && r.includes("phone");
  return n && eS(e);
}
function ex(e, t) {
  return !e.disabled && (e.required || "true" === e.getAttribute("aria-required") || !!t?.querySelector(".required") || !!t?.querySelector(".error-detail, [role='alert'], .text-danger"));
}
function eC(e) {
  let t = e.closest(".form-group.field");
  return rules.isActuallyVisible(e) || ex(e, t);
}
function eA(e) {
  let t = e.closest(".form-group.field"), r = ep(e) || e.getAttribute("aria-label") || e.id || "Country/Region Phone Code";
  return { label: r, required: e.required || "true" === e.getAttribute("aria-required") || !!t?.querySelector(".required, .error-detail, [role='alert']"), type: enums.FIELD_TYPE.SELECT, options: Array.from(e.options).map((e10) => e10.textContent?.replace(/\s+/g, " ").trim() || "").filter(Boolean), $label: (e.id ? document.querySelector(`label[for="${ef(e.id)}"]`) : null) || t || e, $input: e };
}
async function ek(e) {
  let t = ew(e);
  if (!t) return [];
  let r = [], n = rules.getFormRoot() ?? document, o2 = Array.from(n.querySelectorAll("select")).filter((e10) => !e10.disabled && eC(e10) && eE(e10));
  for (let e10 of o2) {
    let n2 = e10.selectedOptions?.[0];
    if (e10.value && n2 && !eh(n2)) continue;
    let o3 = eA(e10), i2 = await rd(o3, t);
    i2 && r.push(o3.label);
  }
  return r;
}
function eT(e, t, r) {
  let n = String(t ?? "").trim();
  if (!n) return null;
  let i2 = U(n), a2 = e.filter((e10) => !eh(e10)), l2 = a2.find((e10) => {
    let t10 = U(e10.textContent), r2 = U(e10.value);
    return t10 === i2 || r2 === i2;
  });
  if (l2) return l2;
  let s2 = eg(r), u2 = U(r).includes("country") && !s2;
  if ((u2 || s2) && eb(n)) {
    let e10 = a2.find(ey);
    if (e10) return e10;
  }
  let d2 = U(r).includes("phone");
  if (d2) {
    let e10 = ["mobile", "cell", "cellphone", "cell phone"];
    if (e10.includes(i2)) {
      let e11 = a2.find((e12) => choiceMatch.isExactChoiceMatch(e12.textContent || e12.value, "mobile"));
      if (e11) return e11;
    }
  }
  return selectUtils.findMatchOption(a2, n) || null;
}
function eF(e, t) {
  if (!e?.isConnected) return false;
  let r = U(e.value), n = U(t.value);
  return !!r && !!n && (e.value === t.value || r === n);
}
async function eI(e, t) {
  let r = Array.from(e.options), n = r.findIndex((e10) => e10 === t);
  for (let o2 of (e.focus(), $(e), n >= 0 && (e.selectedIndex = n), q(e, t.value), r)) o2.selected = o2 === t;
  t.selected = true, e.setAttribute("value", t.value), M(e, "change"), M(e, "input"), M(e, "blur"), M(e, "focusout"), O(e), await delay.delay(160);
}
async function ej(e, t, r) {
  let n = await observer.waitForCondition(() => {
    let n2 = em(e, t);
    return eF(n2, r);
  }, { timeout: 900, interval: 50, observeTarget: document.body });
  return !!n && (await delay.delay(150), eF(em(e, t), r));
}
function eD(e) {
  let t = e.closest("label"), r = t?.querySelector(".radio-text"), n = eu(r);
  if (n) return n;
  let o2 = e.id ? document.querySelector(`label[for="${ef(e.id)}"]`) : null;
  return eu(o2 || t || e.parentElement);
}
function eP(e) {
  return e.closest("label") || (e.id ? document.querySelector(`label[for="${ef(e.id)}"]`) : null) || e;
}
function e_(e) {
  if (e.isConnected) return e;
  if (e.id) {
    let t10 = document.getElementById(e.id);
    if (t10 instanceof HTMLInputElement && "radio" === t10.type) return t10;
  }
  let t = Array.from(document.querySelectorAll('input[type="radio"]'));
  if (e.name) {
    let r2 = t.find((t10) => t10.name === e.name && t10.value === e.value);
    if (r2) return r2;
  }
  let r = U(eD(e));
  return t.find((t10) => U(eD(t10)) === r && U(t10.value) === U(e.value)) || null;
}
function eL(e) {
  let t = e.closest(".field-radio-group, .form-group.field") ?? document, r = Array.from(t.querySelectorAll('input[type="radio"]'));
  if (!e.name) return r;
  let n = r.filter((t10) => t10.name === e.name);
  return n.length > 0 ? n : r;
}
function eR(e) {
  if (!e?.isConnected) return false;
  let t = e.getAttribute("ischecked");
  if ("true" === t) return true;
  if ("false" === t) return false;
  let r = e.getAttribute("aria-checked");
  return "true" === r || "false" !== r && e.checked;
}
function eO(e, t) {
  let r = U(t);
  if (!r) return false;
  let n = U(eD(e)), o2 = U(e.value), i2 = U(e.getAttribute("aria-label")), a2 = [n, o2, i2].filter(Boolean), l2 = H(r);
  return !!(a2.some((e10) => e10 === r) || l2 && a2.some((e10) => H(e10) === l2) || el(r) && ("yes" === n || "true" === o2 || "true" === i2) || es(r) && ("no" === n || "false" === o2 || "false" === i2));
}
async function eM(e) {
  let t = eP(e);
  if (e.focus(), $(t), t.click(), await delay.delay(80), eR(e)) {
    O(e);
    return;
  }
  for (let t10 of eL(e)) t10.checked = t10 === e, t10.setAttribute("aria-checked", t10 === e ? "true" : "false"), t10.setAttribute("ischecked", t10 === e ? "true" : "false");
  M(e, "input"), M(e, "change"), M(e, "click"), eP(e).click(), O(e), await delay.delay(120);
}
async function eN(e) {
  let t = await observer.waitForCondition(() => eR(e_(e)), { timeout: 900, interval: 50, observeTarget: document.body });
  return !!t && (await delay.delay(150), eR(e_(e)));
}
function e$(e, t = {}) {
  if (e.isConnected && rules.isActuallyVisible(e)) return e;
  if (e.id) {
    let t10 = document.getElementById(e.id);
    if ((t10 instanceof HTMLInputElement || t10 instanceof HTMLTextAreaElement) && t10.tagName === e.tagName) return t10;
  }
  if (e.name) {
    let t10 = Array.from(document.querySelectorAll("input, textarea")).find((t11) => t11.name === e.name && t11.tagName === e.tagName);
    if (t10) return t10;
  }
  let r = U(t.label);
  if (r) {
    let t10 = Array.from(document.querySelectorAll("input, textarea")).find((t11) => {
      if ("hidden" === t11.type || "radio" === t11.type || "checkbox" === t11.type || t11.disabled || t11.tagName !== e.tagName || !rules.isActuallyVisible(t11)) return false;
      let n = t11.closest(".form-group.field"), o2 = n?.querySelector("label.control-label, legend, label")?.textContent?.replace(/\*/g, " ").replace(/\s+/g, " ").trim() || t11.getAttribute("aria-label") || t11.getAttribute("label") || "";
      return U(o2) === r;
    });
    if (t10) return t10;
  }
  return null;
}
async function eB(e, t, r = {}) {
  let n = await observer.waitForCondition(() => {
    let n2 = e$(e, r);
    return z(n2?.value, t);
  }, { timeout: 900, interval: 50, observeTarget: document.body });
  return !!n && (await delay.delay(100), z(e$(e, r)?.value, t));
}
function eq(e) {
  let t = e.value.trim();
  if (t) return t;
  let r = e.closest(".rbt, .async-typeahead-v3, .form-group.field") ?? e.parentElement;
  return r?.querySelector(".rbt-token, .rbt-token-label, .rbt-input-main, [class*='token'], [class*='selected']")?.textContent?.replace(/\s+/g, " ").trim() || "";
}
function eU(e) {
  return "combobox" === e.getAttribute("role") || "list" === e.getAttribute("aria-autocomplete") || "asyncTypeahead" === e.getAttribute("data-attribute") || !!e.closest(".rbt, .async-typeahead-v3");
}
async function eH(e, t, r) {
  let n = [r, t].filter((e10) => !!e10 && e10.trim().length > 0), o2 = () => {
    let t10 = e$(e);
    if (!t10) return false;
    let r2 = eq(t10);
    return n.some((e10) => z(r2, e10));
  }, i2 = await observer.waitForCondition(o2, { timeout: 900, interval: 50, observeTarget: document.body });
  return !!i2 && (await delay.delay(100), o2());
}
function eY(e) {
  return e.closest("label") || (e.id ? document.querySelector(`label[for="${ef(e.id)}"]`) : null) || e.closest(".daterangepicker-checkbox") || e;
}
function ez(e) {
  return [eY(e), e.closest("label"), e.id ? document.querySelector(`label[for="${ef(e.id)}"]`) : null, e.closest(".checkbox, .daterangepicker-checkbox"), e].filter((e10, t, r) => !!e10 && r.indexOf(e10) === t);
}
function eV(e, t = {}) {
  if (e.isConnected) return e;
  if (e.id) {
    let t10 = document.getElementById(e.id);
    if (t10 instanceof HTMLInputElement && "checkbox" === t10.type) return t10;
  }
  let r = Array.from(document.querySelectorAll('input[type="checkbox"]'));
  if (e.name) {
    let t10 = r.filter((t11) => t11.name === e.name), n2 = U(e.value), o2 = t10.find((e10) => U(e10.value) === n2);
    if (o2) return o2;
    if (1 === t10.length) return t10[0];
  }
  let n = [ed(e), t.label].map((e10) => U(e10)).filter(Boolean);
  return r.find((e10) => n.includes(U(ed(e10)))) || null;
}
function eW(e) {
  if (!e) return false;
  let t = [e.getAttribute("ischecked"), e.getAttribute("aria-checked"), e.getAttribute("value")].map((e10) => U(e10)), r = t.includes("true"), n = t.includes("false");
  if (e.checked && r) return true;
  if (!e.checked && n) return false;
  let o2 = U(e.getAttribute("ischecked")), i2 = U(e.getAttribute("aria-checked"));
  return o2 && o2 === i2 ? "true" === o2 : "true" === o2 || "false" !== o2 && ("true" === i2 || "false" !== i2 && e.checked);
}
function eG(e, t) {
  return eW(e) === t;
}
function eK(e) {
  return true === e.required || null != e.getAttribute("required") || "true" === e.getAttribute("aria-required");
}
function eX(e) {
  let t = [e, e.closest("label"), e.closest(".checkbox"), e.closest(".form-group.field"), e.closest("fieldset")].filter((e10) => !!e10);
  return t.find((e10) => rules.isActuallyVisible(e10)) ?? null;
}
function eJ(e) {
  let t = U([e.id, e.name, e.getAttribute("aria-describedby"), e.closest(".form-group.field")?.textContent, e.closest("fieldset")?.id].join(" "));
  return t.includes("consent") || t.includes("agreement") || t.includes("optin") || t.includes("opt-in") || t.includes("opt in") || t.includes("privacy") || t.includes("applicantcertification") || t.includes("usconsentobject");
}
function eQ(e) {
  return ed(e) || e.getAttribute("aria-label") || e.id || e.name || "Required Consent";
}
async function eZ(e, t, r = {}) {
  let n = eV(e, r);
  if (!n) return false;
  let o2 = ez(n).length;
  for (let e10 = 0; e10 < o2; e10 += 1) {
    let o3 = eV(n, r);
    if (!o3) return false;
    let i2 = ez(o3)[e10];
    if (!i2) continue;
    i2.scrollIntoView?.({ block: "center", inline: "nearest" }), o3.focus(), N(i2, "mousedown"), N(i2, "mouseup"), i2.click();
    let a2 = await observer.waitForCondition(() => {
      let e11 = eV(o3, r);
      return !!e11 && eG(e11, t);
    }, { timeout: 450, interval: 50, observeTarget: o3.closest(".form-group.field") || document.body });
    if (a2) return O(eV(o3, r)), true;
  }
  return O(eV(n, r)), false;
}
async function e0() {
  let e = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter((e10) => !e10.disabled && eK(e10) && eJ(e10) && !!eX(e10) && !eW(e10)), t = [];
  for (let r of e) {
    let e10 = eQ(r), n = await eZ(r, true, { label: e10 });
    n ? t.push(e10) : console.warn("[phenom] required consent checkbox did not commit", { id: r.id, label: e10 });
  }
  return t;
}
function e2() {
  let e = document.querySelector(".resume-upload-wrapper"), t = e?.querySelector('input[type="file"]') ?? null;
  if (t?.isConnected && !t.disabled) return t;
  let r = Array.from(document.querySelectorAll('input[type="file"]')).filter((e10) => e10.isConnected && !e10.disabled);
  return r.find((e10) => !!e10.closest(".resume-upload-wrapper") && rules.isActuallyVisible(e10.closest(".resume-upload-wrapper"))) || r.find((e10) => rules.isActuallyVisible(e10)) || r[0] || null;
}
async function e1() {
  return await getTargetOrTimeoutDefault.default(() => e2(), () => false, 25);
}
function e3() {
  return document.querySelector(".resume-upload-wrapper");
}
function e4() {
  let e = document.querySelector("#cover-letter-files-div");
  if (e) return e;
  let t = document.querySelector("#coverLetter .attachment-files");
  return t || (e6()?.querySelector(".attachment-files") ?? document.querySelector(".row.form-group.additional-attachment-v2 .attachment-files"));
}
function e5(e) {
  return !!e.querySelector('input[type="file"]');
}
function e6() {
  let e = document.querySelector("#additionalAttachment");
  return e && e5(e) ? e : Array.from(document.querySelectorAll(".row.form-group.additional-attachment-v2")).find(e5) ?? null;
}
function e8() {
  let e = e6();
  if (e) return e;
  let t = e4();
  if (t) {
    let e10 = t.parentElement;
    for (; e10 && e10 !== document.body; ) {
      if (e10.querySelector('input[type="file"]')) return e10;
      e10 = e10.parentElement;
    }
  }
  let r = Array.from(document.querySelectorAll("label, legend, h1, h2, h3, h4, h5, span, div")).find((e10) => U(e10.textContent).includes("cover letter"));
  return r?.closest(".form-group, .form-field, .field, .question-item, li, section, .row") ?? null;
}
function e9() {
  let e = e8();
  if (e) {
    let t10 = e.querySelector('input[type="file"]') ?? null;
    if (t10?.isConnected && !t10.disabled) return t10;
  }
  let t = e4();
  if (t) {
    let e10 = t.parentElement;
    for (; e10 && e10 !== document.body; ) {
      let t10 = e10.querySelector('input[type="file"]');
      if (t10?.isConnected && !t10.disabled) return t10;
      e10 = e10.parentElement;
    }
  }
  return null;
}
function e7() {
  return e4()?.querySelector(".delete-text, .icon-delete, .glyphicon-trash") ?? null;
}
function te() {
  return e4()?.querySelector("a.download-link") ?? null;
}
function tt(e) {
  return String(e ?? "").replace(/\.(pdf|docx?|rtf|txt)\b/gi, "").replace(/\s+/g, " ").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}
function tr() {
  let e = te(), t = e4();
  return [e?.textContent, e?.getAttribute("title"), e?.getAttribute("aria-label"), t?.textContent].filter((e10) => !!e10 && e10.trim().length > 0).join(" ");
}
function tn() {
  let e = !!(e4() && (te() || e7()));
  return { hasControls: e, signature: tt(tr()) };
}
function to(e, t) {
  let r = tn();
  if (!r.hasControls) return false;
  if (!t.hasControls) return true;
  let n = tt(e);
  return !!(n && r.signature.includes(n)) || r.signature !== t.signature;
}
function ti(e) {
  let t = e.files?.[0];
  return "string" == typeof t?.name ? t.name : "";
}
function ta() {
  return !!e9();
}
function tl() {
  return e8() && e9() ? "required" : "";
}
async function ts() {
  return await observer.waitForCondition(() => !!e9(), { timeout: 4e3, interval: 100, observeTarget: document.body });
}
function tu() {
  return document.querySelector('.resume-upload-wrapper button.upload-resume-btn[atm-id="resume-button"]');
}
function tc() {
  return document.querySelector(".has-resume.resume-info .deleteFile, .has-resume.resume-info a[aria-label='Delete']");
}
function td() {
  return document.querySelector(".has-resume.resume-info .downloadFile, .has-resume.resume-info a[atm-id='uploadedresume-link']");
}
function tf() {
  return document.querySelector(".has-resume.resume-info");
}
function tp() {
  return !!(tf() && (td() || tc()));
}
function tm() {
  return !!(e3() && rules.isActuallyVisible(e3()) || tu() && rules.isActuallyVisible(tu()));
}
async function th() {
  return await observer.waitForCondition(() => !!e3() && !!e2() && !!tu(), { timeout: 4e3, interval: 100, observeTarget: document.body });
}
async function tg() {
  let e = tc(), t = 0;
  for (; e && t < 5; ) {
    e.click();
    let r = await observer.waitForCondition(() => !tc(), { timeout: 2e3, interval: 100, observeTarget: document.body });
    if (!r) break;
    await observer.waitForCondition(() => !!e2(), { timeout: 2e3, interval: 100, observeTarget: document.body }), await delay.delay(150), e = tc(), t += 1;
  }
}
function tb(e) {
  return Array.from(e.querySelectorAll('button[id*="array-button-remove-"], input[id*="array-button-remove-"], [role="button"][id*="array-button-remove-"]')).filter((e10) => rules.isActuallyVisible(e10)).sort((e10, t) => {
    let r = Number(e10.id.match(/(\d+)$/)?.[1] || "-1"), n = Number(t.id.match(/(\d+)$/)?.[1] || "-1");
    return n - r;
  });
}
async function ty(e) {
  let t = rules.getArrayContainer(e);
  if (!t) return;
  let r = rules.getCompositeItemFieldsets(t).length;
  for (; r > 1; ) {
    let e10 = tb(t)[0];
    if (!e10) break;
    e10.click();
    let n = await observer.waitForCondition(() => rules.getCompositeItemFieldsets(t).length < r, { timeout: 1500, interval: 100, observeTarget: t });
    if (!n) break;
    r = rules.getCompositeItemFieldsets(t).length, await delay.delay(150);
  }
}
function tv(e) {
  return e ? Array.from(e.querySelectorAll(".form-group.field")).find((e10) => {
    let t = e10.querySelector("label.control-label, legend")?.textContent?.replace(/\s+/g, " ").trim().toLowerCase() || "";
    return t.includes("end date") && rules.isActuallyVisible(e10);
  }) ?? null : null;
}
async function tw() {
  let e = rules.getArrayContainer(enums.FIELD_TYPE.EMPLOYMENT), t = e ? rules.getCompositeItemFieldsets(e)[0] ?? null : null;
  if (!t) return;
  let r = t.querySelector('input[type="checkbox"][id*="currentlyWorkHere"], input[type="checkbox"][name*="currentlyWorkHere"], input[type="checkbox"][aria-describedby*="currentlyWorkHere"]');
  r && (eW(r) && (await eZ(r, false), await observer.waitForCondition(() => !eW(r), { timeout: 1e3, interval: 50, observeTarget: t })), O(r), await observer.waitForCondition(() => !!tv(t), { timeout: 1500, interval: 100, observeTarget: t }));
}
async function tS() {
  let e = rules.getStepInfo();
  console.log("[phenom] preFillForm entry", { step: e.step, stepName: e.stepName });
  let t = await observer.waitForCondition(() => !!rules.getFormRoot(), { timeout: 3e3, interval: 100, observeTarget: document.body });
  t && (rules.isInitialApplicationStep(e) && (console.log("[phenom] preFillForm initial-step cleanup start"), await th(), await tg()), await ry(enums.FIELD_TYPE.EDUCATION), await ry(enums.FIELD_TYPE.EMPLOYMENT), await ty(enums.FIELD_TYPE.EDUCATION), await ty(enums.FIELD_TYPE.EMPLOYMENT), await tw());
}
async function tE(e, t, r) {
  let n = String(t ?? "").trim();
  if (!n) return false;
  let o2 = { label: r }, i2 = e$(e, o2) || e;
  for (let e10 = 0; e10 < 2; e10 += 1) {
    e10 > 0 && (await delay.delay(250), i2 = e$(i2, o2) || i2), i2.focus(), B(i2, n), R(i2), O(i2);
    let t10 = await eB(i2, n, o2);
    if (t10) return true;
  }
  let a2 = e$(i2, o2);
  return console.warn("[phenom] text input did not commit", { label: r, value: n, inputId: e.id, currentInputId: a2?.id || "", currentValue: a2?.value || "" }), false;
}
function tx(e) {
  return e?.aborted === true;
}
function tC(e) {
  return e$(e);
}
function tA(e) {
  if ("false" === e.getAttribute("aria-expanded")) return null;
  let t = (e10) => {
    if (!(e10 instanceof HTMLElement)) return false;
    let t10 = "listbox" === e10.getAttribute("role") || e10.classList?.contains("rbt-menu");
    return t10 && e10.isConnected && !e10.hidden && "true" !== e10.getAttribute("aria-hidden") && rules.isActuallyVisible(e10);
  }, r = [e.getAttribute("aria-controls"), e.getAttribute("aria-owns")].flatMap((e10) => String(e10 ?? "").split(/\s+/)).filter((e10, t10, r2) => e10 && r2.indexOf(e10) === t10);
  if (r.length > 0) {
    let e10 = Array.from(new Set(r.map((e11) => document.getElementById(e11)).filter(t)));
    return 1 === e10.length ? e10[0] : null;
  }
  let n = '[role="listbox"], .rbt-menu', o2 = e.closest(".rbt, .async-typeahead-v3"), i2 = Array.from(new Set(Array.from(o2?.querySelectorAll(n) || []).filter(t)));
  if (1 === i2.length) return i2[0];
  if (i2.length > 1) return null;
  let a2 = Array.from(new Set(Array.from(document.querySelectorAll(n)).filter(t)));
  return 1 === a2.length ? a2[0] : null;
}
let tk = /^(?:searching|loading|fetching|please\s+wait)(?:\s*(?:\.{3}|\u2026))?$/iu, tT = /^(?:no\s+(?:results?|matches?|options?)(?:\s+found)?|nothing\s+found)$/iu, tF = /^type(?:\s+\d+)?(?:\s+characters?)?\s+to\s+(?:search|see\s+(?:the\s+)?list)(?:\s*(?:\.{3}|\u2026))?$/iu;
function tI(e) {
  return String(e.textContent ?? "").replace(/\s+/g, " ").trim();
}
function tj(e) {
  return Array.from(e.querySelectorAll('[role="option"], .dropdown-item')).filter((e10) => e10.isConnected && !e10.hidden && "true" !== e10.getAttribute("aria-hidden") && rules.isActuallyVisible(e10) && tI(e10).length > 0);
}
function tD(e, t) {
  if ("true" === e.getAttribute("aria-busy")) return true;
  let r = "function" == typeof e.querySelector ? e.querySelector('[aria-busy="true"], [aria-label*="loading" i], .loading, .loader, .spinner') : null;
  return !!(r && rules.isActuallyVisible(r)) || t.some((e10) => {
    let t10 = tI(e10), r2 = String(e10.className ?? "");
    return tk.test(t10) || /\b(?:loading|loader|spinner)\b/iu.test(r2);
  });
}
function tP(e) {
  return tT.test(tI(e));
}
function t_(e) {
  let t = tI(e);
  return /\brbt-menu-custom-option\b/iu.test(String(e.className ?? "")) || /^add\s+new\s*:/iu.test(t) || /^other$/iu.test(t);
}
function tL(e) {
  let t = tj(e);
  return t.filter((e10) => {
    let t10 = tI(e10), r = String(e10.className ?? "");
    return !tk.test(t10) && !tT.test(t10) && !tF.test(t10) && !t_(e10) && !/\b(?:loading|loader|spinner)\b/iu.test(r);
  });
}
function tR(e, t) {
  let r = e.getAttribute("data-value") || e.getAttribute("value") || e.getAttribute("data-id") || t;
  return r.trim();
}
let tO = 4, tM = 6, tN = 50, t$ = 20, tB = 20;
function tq(e) {
  let t = tj(e);
  if (tD(e, t)) return { status: "loading", candidates: [] };
  let r = [], n = /* @__PURE__ */ new Set();
  for (let t10 of tL(e)) {
    let e10 = tI(t10), o2 = tR(t10, e10), i2 = `${U(e10)}\0${U(o2)}`;
    if (!(!e10 || !o2 || n.has(i2)) && (n.add(i2), r.push({ candidate_key: `phenom-school-${r.length + 1}`, value: o2, text: e10 }), 25 === r.length)) break;
  }
  return r.length > 0 ? { status: "ready", candidates: r } : { status: t.some(tP) ? "no-results" : "empty", candidates: [] };
}
function tU(e) {
  return JSON.stringify([e.status, e.candidates.map((e10) => [e10.value, e10.text])]);
}
async function tH(e) {
  try {
    let t = await messaging.sendToBackground({ name: "preparePhenomSchoolCapture", body: { captureResponse: true, expectedValue: e } });
    return "string" == typeof t?.captureId ? t.captureId : "";
  } catch {
    return console.warn("[Phenom][SchoolSearch] response capture unavailable", { stage: "prepare" }), "";
  }
}
async function tY(e, t = t$) {
  if (!e) return { captureStatus: "unavailable", responseEvidence: null };
  let r = "pending";
  for (let n = 0; n < t; n += 1) {
    let t10 = null;
    try {
      t10 = await messaging.sendToBackground({ name: "waitForPhenomSchoolCapture", body: { captureId: e, responseMode: "peek" } });
    } catch {
      return console.warn("[Phenom][SchoolSearch] response capture unavailable", { stage: "inspect" }), { captureStatus: "inspect-unavailable", responseEvidence: null };
    }
    let n2 = t10?.captureStatus ?? "failed";
    if (r = n2, t10?.responseEvidence) return { captureStatus: n2, responseEvidence: t10.responseEvidence };
    if ("idle" !== n2 && "pending" !== n2) return { captureStatus: n2, responseEvidence: null };
    await delay.delay(100);
  }
  return { captureStatus: r, responseEvidence: null };
}
async function tz(e, t) {
  if ("failed" === t.status) return { status: "failed", candidates: [] };
  if ("no-results" === t.status) return { status: "no-results", candidates: [] };
  let r = new Set(t.candidateTexts.map((e10) => U(e10))), n = await getTargetOrTimeoutDefault.default(() => {
    let t10 = tC(e), n2 = t10 ? tA(t10) : null;
    if (!n2) return null;
    let o2 = tq(n2);
    if ("ready" !== o2.status || 0 === o2.candidates.length) return null;
    let i2 = o2.candidates.filter((e10) => r.has(U(e10.text)));
    return 0 === i2.length ? null : { status: "ready", candidates: i2 };
  }, () => false, tB);
  return n ?? { status: "failed", candidates: [] };
}
function tV(e, t, r = "") {
  return tL(e).filter((e10) => U(e10.textContent) === t && (!r || U(tR(e10, tI(e10))) === U(r)));
}
async function tW(e, t) {
  let r = await tH(t), n = tA(e), o2 = n ? tq(n) : null, i2 = o2?.status === "ready" || o2?.status === "no-results" ? tU(o2) : "", a2 = o2?.status ?? "listbox-not-found", l2 = await tK(e, t);
  if (!l2) return console.warn("[Phenom][SchoolSearch] probe did not commit", { reason: "input-not-confirmed" }), { status: "failed", candidates: [] };
  let s2 = await tY(r, tM);
  if ("idle" === s2.captureStatus && !s2.responseEvidence) {
    console.warn("[Phenom][SchoolSearch] request did not start; retrying probe " + JSON.stringify({ inputId: tC(e)?.id || e.id || "", responseCaptureStatus: s2.captureStatus }));
    let r2 = await tK(e, t);
    if (!r2) return { status: "failed", candidates: [] };
  }
  let u2 = !i2 && o2?.status !== "loading", c2 = false, d2 = n?.id ?? "", f2 = a2, p2 = "", m2 = 0, h2 = await getTargetOrTimeoutDefault.default(() => {
    let t10 = tC(e), r2 = t10 ? tA(t10) : null;
    if (!r2) return d2 = "", f2 = "listbox-not-found", p2 = "", m2 = 0, null;
    let n2 = tq(r2);
    if (d2 = r2.id || "", f2 = n2.status, "loading" === n2.status) return c2 = true, p2 = "", m2 = 0, null;
    c2 && (u2 = true);
    let o3 = tU(n2);
    return ("empty" !== n2.status && i2 && o3 !== i2 && (u2 = true), "empty" !== n2.status && u2) ? (o3 === p2 ? m2 += 1 : (p2 = o3, m2 = 1), m2 < tO) ? null : { status: n2.status, candidates: n2.candidates } : (p2 = "", m2 = 0, null);
  }, () => false, tN), g2 = s2.responseEvidence ? s2 : await tY(r), b2 = g2.responseEvidence, v2 = b2 ? await tz(e, b2) : null;
  if (v2 && (h2 || "failed" !== v2.status)) return console.info("[Phenom][SchoolSearch] response evidence " + JSON.stringify({ captureStatus: b2?.status, responseCandidateCount: b2?.candidateTexts.length, resultStatus: v2.status, resultCandidateCount: v2.candidates.length })), v2;
  if (!h2) {
    let t10 = tC(e);
    return console.warn("[Phenom][SchoolSearch] candidates did not settle " + JSON.stringify({ reason: "loading-or-empty-results", inputId: t10?.id || e.id || "", ariaExpanded: t10?.getAttribute("aria-expanded") ?? null, ariaControls: t10?.getAttribute("aria-controls") ?? null, ariaOwns: t10?.getAttribute("aria-owns") ?? null, initialSnapshotStatus: a2, lastSnapshotStatus: f2, lastListboxId: d2, freshResultTransitionObserved: u2, loadingCycleStarted: c2, stableSamples: m2, responseCaptureStatus: g2.captureStatus, responseHttpStatus: b2?.httpStatus ?? null, responseCandidateCount: b2?.candidateTexts.length ?? 0, evidenceResultStatus: v2?.status ?? null, evidenceResultCandidateCount: v2?.candidates.length ?? 0 })), { status: "failed", candidates: [] };
  }
  if ("unavailable" !== g2.captureStatus && "inspect-unavailable" !== g2.captureStatus && "idle" !== g2.captureStatus) return { status: "failed", candidates: [] };
  let w2 = tC(e), S2 = w2 ? tA(w2) : null;
  return console.warn("[Phenom][SchoolSearch] candidates captured " + JSON.stringify({ source: "visible-dom-listbox", inputId: w2?.id || "", listboxId: S2?.id || "", candidateCount: h2.candidates.length, status: h2.status, stableSamples: m2, loadingCycleStarted: c2, responseCaptureStatus: g2.captureStatus })), h2;
}
async function tG(e, t, r) {
  let n = e, o2 = /* @__PURE__ */ new WeakSet(), i2 = await getTargetOrTimeoutDefault.default(() => {
    if (tx(r)) return null;
    let e10 = tC(n);
    if (!e10) return null;
    if (n = e10, !o2.has(e10) || e10.value !== t) {
      if (tx(r) || (B(e10, t), tx(r)) || (e10.dispatchEvent(new Event("input", { bubbles: true })), tx(r))) return null;
      e10.dispatchEvent(new Event("change", { bubbles: true })), o2.add(e10);
    }
    let i3 = tC(e10);
    return i3 && o2.has(i3) ? (n = i3, i3.value === t || null) : null;
  }, () => tx(r), 10);
  return true === i2;
}
async function tK(e, t, r) {
  let n = String(t ?? "");
  if (!U(n)) return false;
  let o2 = tC(e);
  if (!o2 || tx(r) || tx(r)) return false;
  if (o2.focus(), "" !== o2.value) {
    let e10 = await tX(o2, r);
    if (!e10 || tx(r) || !(o2 = tC(o2))) return false;
  }
  return !tx(r) && (B(o2, n), !tx(r) && (o2.dispatchEvent(new Event("input", { bubbles: true })), !tx(r) && (o2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(150), !tx(r) && U(tC(o2)?.value) === U(n))));
}
async function tX(e, t) {
  let r = e;
  for (let e10 = 0; e10 < 3 && !tx(t); e10 += 1) {
    let e11 = tC(r);
    if (!e11) break;
    if (r = e11, "" !== e11.value) {
      if (tx(t) || (B(e11, ""), tx(t)) || (e11.dispatchEvent(new Event("input", { bubbles: true })), tx(t))) return false;
      e11.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (await delay.delay(50), tx(t)) break;
    let n = tC(r);
    if (n?.value === "") return true;
  }
  return false;
}
async function tJ(e, t, r = "", n = "") {
  let o2 = String(t ?? ""), i2 = U(o2);
  if (!i2) return false;
  let a2 = tC(e);
  if (!a2) return console.warn("[phenom] resolved school fill failed", { stage: "type", reason: "live-input-missing" }), false;
  let l2 = a2.value, s2 = async (e10, t10, r2 = 0) => {
    let n2 = await tG(a2, l2);
    return console.warn("[Phenom][SchoolSearch] exact commit failed " + JSON.stringify({ stage: e10, optionCount: r2, reason: t10, restored: n2 })), false;
  };
  if (U(a2.value) === i2) return true;
  let u2 = async (e10, t10 = false) => {
    t10 && B(e10.input, ""), $(e10.option);
    let r2 = await getTargetOrTimeoutDefault.default(() => {
      let t11 = tC(e10.input);
      return t11 && U(eq(t11)) === i2 ? t11 : null;
    }, () => false, 10);
    return null !== r2;
  }, c2 = tA(a2);
  if (c2 && U(a2.value)) {
    let e10 = tV(c2, i2, n);
    if (console.info("[Phenom][SchoolSearch] exact commit candidate " + JSON.stringify({ source: "current-search-listbox", inputId: a2.id || "", listboxId: c2.id || "", optionCount: tL(c2).length, exactOptionCount: e10.length, valueCheck: !!n })), 1 === e10.length) {
      let t10 = await u2({ input: a2, option: e10[0] });
      return !!t10 || await s2("commit", "exact-value-not-committed", tL(c2).length);
    }
  }
  let d2 = [o2, r].map((e10) => String(e10 ?? "").trim()).filter((e10, t10, r2) => e10.length > 0 && r2.indexOf(e10) === t10), f2 = 0;
  for (let e10 of d2) {
    let t10 = tC(a2);
    if (!t10) continue;
    let r2 = U(e10) === i2 ? "selected-value" : "selected-round-search";
    console.info("[Phenom][SchoolSearch] exact commit search " + JSON.stringify({ source: r2, inputId: t10.id || "" })), t10.focus(), B(t10, e10), t10.dispatchEvent(new Event("input", { bubbles: true })), t10.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(150);
    let o3 = await getTargetOrTimeoutDefault.default(() => {
      let e11 = tC(t10);
      if (!e11) return null;
      let r3 = tA(e11);
      if (!r3) return null;
      let o4 = tL(r3);
      f2 = o4.length;
      let a3 = tV(r3, i2, n);
      return 1 === a3.length ? { input: e11, option: a3[0], optionCount: o4.length } : null;
    }, () => false, 25);
    if (!o3) {
      console.info("[Phenom][SchoolSearch] exact commit search result " + JSON.stringify({ source: r2, inputId: t10.id || "", optionCount: f2, exactOptionCount: 0 }));
      continue;
    }
    console.info("[Phenom][SchoolSearch] exact commit search result " + JSON.stringify({ source: r2, inputId: o3.input.id || "", optionCount: o3.optionCount, exactOptionCount: 1 }));
    let l3 = await u2(o3, true);
    if (l3) return true;
    return await s2("commit", "exact-value-not-committed", o3.optionCount);
  }
  return await s2("options", "unique-exact-missing", f2);
}
async function tQ(e, t, r) {
  let n = String(t ?? "").trim();
  if (!n) return false;
  let i2 = (e10, t10, n2) => {
    console.warn(e10, r?.redactValues === true ? n2 : t10);
  };
  e.focus(), B(e, n), e.dispatchEvent(new Event("input", { bubbles: true })), e.dispatchEvent(new Event("change", { bubbles: true }));
  let a2 = await getTargetOrTimeoutDefault.default(() => {
    let t10 = e.getAttribute("aria-owns");
    if (t10) {
      let e10 = document.getElementById(t10);
      if (e10 && "listbox" === e10.getAttribute("role")) return e10;
    }
    let r2 = e.closest(".rbt");
    if (r2) {
      let e10 = r2.querySelector('[role="listbox"], .rbt-menu');
      if (e10) return e10;
    }
    return document.querySelector('[role="listbox"].show, .rbt-menu.dropdown-menu.show, [role="listbox"]');
  }, () => false, 25);
  if (!a2) {
    if (O(e), eU(e)) return i2("[phenom] search input listbox not found", { value: n, currentValue: eq(e) }, { stage: "options", reason: "listbox-not-found", optionCount: 0 }), false;
    let t10 = await eH(e, n);
    return t10 || i2("[phenom] search input did not commit without listbox", { value: n, currentValue: eq(e) }, { stage: "commit", reason: "value-not-committed", optionCount: 0 }), t10;
  }
  await delay.delay(150);
  let l2 = Array.from(a2.querySelectorAll('[role="option"], .dropdown-item')).filter((e10) => U(e10.textContent).length > 0);
  if (0 === l2.length) return i2("[phenom] search input has no options", { value: n }, { stage: "options", reason: "no-options", optionCount: 0 }), false;
  let s2 = choiceMatch.findExactChoice(l2, n, (e10) => e10.textContent);
  if (!s2) return i2("[phenom] search option not matched", { value: n, options: l2.map((e10) => e10.textContent?.trim() || "") }, { stage: "options", reason: "option-not-matched", optionCount: l2.length }), false;
  let u2 = s2.textContent?.trim() || "";
  s2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window })), await delay.delay(30), s2.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window })), s2.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window })), await delay.delay(150), O(e);
  let c2 = await eH(e, n, u2);
  return c2 || i2("[phenom] search option did not commit", { value: n, matchedOption: u2, currentValue: eq(e) }, { stage: "commit", reason: "option-not-committed", optionCount: l2.length }), c2;
}
function tZ(e) {
  if (!e) return;
  let t = e.match(/\b(?:YYYY-MM-DD|YYYY\/MM\/DD|MM\/DD\/YYYY|MM\/YYYY|YYYY)\b/i);
  return t?.[0]?.toUpperCase();
}
function t0(e) {
  return "MM/YYYY" === tZ(e);
}
function t2(e) {
  return "YYYY" === tZ(e);
}
function t1(e) {
  let t = String(e ?? "").trim();
  if (!t) return null;
  let r = dayjsDefault.default(t, ["YYYY-MM-DD", "YYYY/MM/DD", "YYYY/M/D", "MM/DD/YYYY", "M/D/YYYY", "MM/YYYY", "M/YYYY", "YYYY-MM", "YYYY/M", "YYYY/MM", "MMM YYYY", "MMMM YYYY", "YYYY"], true);
  return r.isValid() ? r : null;
}
function t3(e, t) {
  let r = String(e ?? "").trim();
  if (!r) return "";
  if ("current" === U(r)) return "current";
  let n = t1(r);
  return n ? t0(t) ? /^\d{4}$/.test(r) ? `01/${r}` : n.format("MM/YYYY") : "MM/DD/YYYY" === tZ(t) ? /^\d{4}$/.test(r) ? `01/01/${r}` : n.format("MM/DD/YYYY") : t2(t) ? n.format("YYYY") : /^\d{4}$/.test(r) ? `${r}-01-01` : /^\d{4}-\d{2}$/.test(r) ? `${r}-01` : n.format("YYYY-MM-DD") : r;
}
function t4(e) {
  let t = String(e ?? "").trim(), r = t1(t);
  return { present: "" !== t, length: t.length, parsed: r ? { year: r.year(), month: r.month() + 1, day: r.date() } : null };
}
function t5(e) {
  let t = e$(e);
  return { inputId: e.id, inputName: e.name, connected: e.isConnected, currentInputId: t?.id || "", currentInputName: t?.name || "", currentValue: t4(t?.value) };
}
async function t6(e) {
  e.focus(), e.click();
  let t = e.closest(".calendar-widget");
  return await getTargetOrTimeoutDefault.default(() => t?.querySelector(".react-datepicker-popper") || document.querySelector(".react-datepicker-popper"), () => false, 25);
}
function t8(e) {
  return e.querySelector(".range-select, .react-datepicker__year-select");
}
function t9(e) {
  return e.querySelector(".react-datepicker__year-select") || Array.from(e.querySelectorAll(".range-select")).find((e10) => Array.from(e10.options).some((e11) => /^\d{4}$/.test(e11.value))) || null;
}
function t7(e) {
  return e.querySelector(".react-datepicker__month-select") || Array.from(e.querySelectorAll(".range-select")).find((e10) => Array.from(e10.options).some((e11) => /^(january|february|march|april|may|june|july|august|september|october|november|december)$/i.test(e11.value))) || null;
}
function re(e, t) {
  let r = Array.from(e.options).find((e10) => e10.value === t);
  return !!r && (e.value = r.value, r.selected = true, e.dispatchEvent(new Event("input", { bubbles: true })), e.dispatchEvent(new Event("change", { bubbles: true })), true);
}
function rt(e) {
  let t = Array.from(e.options).map((e10) => Number(e10.value)).filter((e10) => Number.isFinite(e10));
  return 0 === t.length ? null : { minYear: Math.min(...t), maxYear: Math.max(...t) };
}
async function rr(e, t) {
  let r = "previous" === t ? /previous/i : /next/i, n = Array.from(e.querySelectorAll("button")).filter((e10) => !e10.disabled).find((e10) => r.test(e10.getAttribute("aria-label") || ""));
  return !!n && ($(n), n.click(), await delay.delay(150), true);
}
async function rn(e, t) {
  let r = Number(t);
  for (let n = 0; n < 12; n += 1) {
    let n2 = t8(e);
    if (!n2) return true;
    let o2 = Array.from(n2.options).find((e10) => e10.value === t);
    if (o2) return n2.value = t, o2.selected = true, n2.dispatchEvent(new Event("input", { bubbles: true })), n2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(150), true;
    let i2 = rt(n2);
    if (!i2 || !Number.isFinite(r)) break;
    let a2 = r < i2.minYear ? await rr(e, "previous") : r > i2.maxYear && await rr(e, "next");
    if (!a2) break;
  }
  return false;
}
async function ro(e, t) {
  let r = t1(t);
  if (!r) return console.warn("[phenom][date-debug] month-year parse failed", { ...t5(e), target: t4(t) }), await tE(e, t);
  let n = await t6(e);
  if (!n) return console.warn("[phenom][date-debug] month-year popper missing", { ...t5(e), target: t4(t) }), await tE(e, t);
  let o2 = String(r.year()), i2 = r.month(), a2 = r.format("MMMM"), l2 = r.format("MMM");
  F("month-year picker opened", { ...t5(e), target: t4(t), popperInSameWidget: e.closest(".calendar-widget")?.contains(n) === true });
  let s2 = await rn(n, o2);
  if (!s2) {
    let r2 = t8(n);
    return console.warn("[phenom] month-year datepicker year not available", { value: t, year: o2, years: r2 ? Array.from(r2.options).map((e10) => e10.value) : [] }), await tE(e, t);
  }
  let u2 = await getTargetOrTimeoutDefault.default(() => {
    let e10 = n.querySelector(`.react-datepicker__month-text.react-datepicker__month-${i2}:not(.react-datepicker__month-text--disabled)`);
    return e10 || Array.from(n.querySelectorAll(".react-datepicker__month-text")).find((e11) => {
      let t10 = U(e11.textContent), r2 = U(e11.getAttribute("aria-label"));
      return (t10 === U(l2) || t10 === U(a2)) && (!r2 || r2.includes(o2));
    }) || null;
  }, () => false, 20);
  if (!u2) return console.warn("[phenom][date-debug] month option missing", { ...t5(e), target: t4(t), monthIndex: i2, monthName: a2 }), await tE(e, t);
  $(u2), u2.click(), await delay.delay(180), O(e);
  let c2 = await observer.waitForCondition(() => V(e$(e)?.value), { timeout: 900, interval: 50, observeTarget: document.body });
  return F("month-year selection readback", { ...t5(e), target: t4(t), committed: c2 }), !!c2 || await tE(e, t);
}
function ri(e) {
  return Array.from(e.querySelectorAll(".react-datepicker__year-text")).filter((e10) => !e10.classList.contains("react-datepicker__year-text--disabled"));
}
function ra(e) {
  let t = ri(e).map((e10) => Number(U(e10.textContent))).filter((e10) => Number.isFinite(e10));
  return 0 === t.length ? null : { minYear: Math.min(...t), maxYear: Math.max(...t) };
}
async function rl(e, t) {
  let r = "previous" === t ? /previous year/i : /next year/i, n = Array.from(e.querySelectorAll("button")).filter((e10) => !e10.disabled).find((e10) => r.test(e10.getAttribute("aria-label") || ""));
  if (!n) return false;
  let o2 = ra(e);
  return !!o2 && (n.click(), await observer.waitForCondition(() => {
    let t10 = ra(e);
    return null != t10 && (t10.minYear !== o2.minYear || t10.maxYear !== o2.maxYear);
  }, { timeout: 450, interval: 20, observeTarget: e }));
}
async function rs(e, t) {
  let r = Number(t);
  for (let n = 0; n < 16; n += 1) {
    let o2 = ri(e).find((e10) => U(e10.textContent) === t);
    if (o2) return o2;
    let i2 = ra(e);
    if (!i2 || !Number.isFinite(r)) break;
    let a2 = r < i2.minYear ? "previous" : r > i2.maxYear ? "next" : null;
    if (!a2) break;
    let l2 = await rl(e, a2);
    if (F("year range navigation", { targetYear: t, direction: a2, attempt: n + 1, visibleRange: i2, moved: l2 }), !l2) break;
  }
  return null;
}
async function ru(e, t) {
  let r = t1(t);
  if (!r) return await tE(e, t);
  let n = String(r.year()), o2 = await t6(e);
  if (!o2) return await tE(e, n);
  F("year picker opened", { ...t5(e), target: t4(n), popperInSameWidget: e.closest(".calendar-widget")?.contains(o2) === true });
  let i2 = await rs(o2, n);
  if (!i2) {
    let t10 = Array.from(o2.querySelectorAll(".react-datepicker__year-text")).map((e10) => U(e10.textContent));
    return F("year option missing", { ...t5(e), targetYear: n, visibleYears: t10, previousButtonPresent: Array.from(o2.querySelectorAll("button")).some((e10) => /previous year/i.test(e10.getAttribute("aria-label") || "")), nextButtonPresent: Array.from(o2.querySelectorAll("button")).some((e10) => /next year/i.test(e10.getAttribute("aria-label") || "")) }), await tE(e, n);
  }
  $(i2), i2.click(), O(e);
  let a2 = await observer.waitForCondition(() => U(e$(e)?.value) === n, { timeout: 900, interval: 50, observeTarget: document.body });
  return F("year selection readback", { ...t5(e), target: t4(n), committed: a2 }), !!a2 || await tE(e, n);
}
async function rc(e, t, r) {
  let n = e, o2 = e$(n);
  if (!o2) return console.warn("[phenom][date-debug] current date input missing", { inputId: n.id, inputName: n.name, previousInputConnected: n.isConnected }), false;
  e = o2;
  let i2 = t3(t, r);
  if (F("fill start", { ...t5(e), inputReacquired: e !== n, previousInputConnected: n.isConnected, preferredFormat: r, mode: t0(r) ? "month-year" : t2(r) ? "year" : "date", source: t4(t), target: t4(i2) }), !i2) return console.warn("[phenom][date-debug] normalized value empty", { ...t5(e), preferredFormat: r }), false;
  if ("current" === U(i2)) {
    let t10 = e.closest("fieldset[id]"), r2 = t10?.querySelector('input[type="checkbox"][id*="currentlyWorkHere"]');
    return !!r2 && (await eZ(r2, true), await observer.waitForCondition(() => eW(r2), { timeout: 900, interval: 50, observeTarget: t10 || document.body }));
  }
  if (t0(r)) return await ro(e, i2);
  if (t2(r)) return await ru(e, i2);
  let a2 = t1(i2);
  if (!a2) return await tE(e, i2);
  let l2 = String(a2.year()), s2 = a2.month(), u2 = a2.date(), c2 = await t6(e);
  if (!c2) return await tE(e, i2);
  let d2 = t9(c2);
  if (d2) {
    let t10 = re(d2, l2);
    if (!t10) return await tE(e, i2);
    await delay.delay(120);
  }
  let f2 = t7(c2);
  if (f2) {
    let t10 = null != f2.querySelector(`option[value="${s2}"]`) ? String(s2) : a2.format("MMMM"), r2 = re(f2, t10);
    if (!r2) return await tE(e, i2);
    await delay.delay(120);
  }
  let m2 = `react-datepicker__day--${String(u2).padStart(3, "0")}`, h2 = await getTargetOrTimeoutDefault.default(() => c2.querySelector(`.${m2}:not(.react-datepicker__day--outside-month):not(.react-datepicker__day--disabled)`), () => false, 20);
  if (h2) {
    h2.click(), await delay.delay(150), e.blur();
    let t10 = await observer.waitForCondition(() => V(e$(e)?.value), { timeout: 900, interval: 50, observeTarget: document.body });
    if (t10) return true;
  }
  return await tE(e, i2);
}
async function rd(e, t) {
  let r = String(t ?? "").trim();
  if (!r) return false;
  let n = em(e, null);
  if (!n) return false;
  let o2 = eT(Array.from(n.options), r, e.label);
  if (!o2) return console.warn("[phenom] select option not matched", { label: e.label, value: r, options: Array.from(n.options).map((e10) => ({ value: e10.value, text: e10.textContent?.trim() || "" })) }), false;
  await eI(n, o2);
  let i2 = await ej(e, n, o2);
  if (!i2) {
    let t10 = em(e, n);
    if (t10) {
      let n2 = eT(Array.from(t10.options), r, e.label);
      n2 && (await eI(t10, n2), i2 = await ej(e, t10, n2));
    }
  }
  return i2 || console.warn("[phenom] select option did not commit", { label: e.label, value: r, matchedOption: { value: o2.value, text: o2.textContent?.trim() || "" }, currentValue: em(e, n)?.value || "" }), i2;
}
async function rf(e, t) {
  let r = e.$radioParent;
  if (!r) return false;
  let n = String(t ?? "").trim();
  if (!n) return false;
  let o2 = Array.from(r.querySelectorAll('input[type="radio"]')).find((e10) => !e10.disabled && eO(e10, n));
  if (!o2) return console.warn("[phenom] radio option not matched", { label: e.label, value: n, options: Array.from(r.querySelectorAll('input[type="radio"]')).map((e10) => ({ label: eD(e10), value: e10.value, ariaLabel: e10.getAttribute("aria-label") || "" })) }), false;
  await eM(o2);
  let i2 = await eN(o2);
  if (!i2) {
    let e10 = e_(o2);
    e10 && (await eM(e10), i2 = await eN(e10));
  }
  return i2 || console.warn("[phenom] radio option did not commit", { label: e.label, value: n, matchedOption: { label: eD(o2), value: o2.value, ariaLabel: o2.getAttribute("aria-label") || "" } }), i2;
}
async function rp(e, t) {
  let r = new Set(t.map((e10) => U(e10))), n = e.$checkboxs?.filter((e10) => e10 instanceof HTMLInputElement) ?? Array.from((e.$input ?? document).querySelectorAll('input[type="checkbox"]'));
  if (0 === n.length || 0 === r.size) return false;
  let i2 = t.some((e10) => el(e10)), a2 = t.some((e10) => es(e10)), l2 = 1 === n.length ? n[0] : null;
  if (l2) {
    let n2 = { label: e.label }, s3 = U(ed(l2)), u3 = U(e.label), c3 = Array.from(r).some((e10) => {
      if (!e10) return false;
      let t10 = [s3, u3].filter(Boolean);
      return t10.some((t11) => e10 === t11 || choiceMatch.isExactChoiceMatch(t11, e10));
    }), d2 = !!i2 || !a2 && null, f2 = d2 ?? (!!c3 || null);
    if (null === f2) return console.warn("[phenom] single checkbox value not matched", { label: e.label, value: t, option: s3 || u3 }), false;
    let m2 = eV(l2, n2);
    if (!m2) return false;
    eW(m2) !== f2 && await eZ(m2, f2, n2);
    let h2 = await observer.waitForCondition(() => {
      let e10 = eV(m2, n2);
      return !!e10 && eW(e10) === f2;
    }, { timeout: 900, interval: 50, observeTarget: document.body });
    return h2 || console.warn("[phenom] single checkbox did not commit", { label: e.label, value: t, checked: eW(eV(m2, n2)) }), h2;
  }
  let s2 = 0, u2 = [];
  for (let e10 of n) {
    let t10 = U(ed(e10)), n2 = { label: t10 }, i3 = U(e10.value), a3 = U(e10.getAttribute("aria-label")), l3 = [t10, i3, a3].filter(Boolean), c3 = l3.some((e11) => r.has(e11)) || Array.from(r).some((e11) => l3.some((t11) => choiceMatch.isExactChoiceMatch(t11, e11)));
    if (c3) {
      s2 += 1, u2.push(e10);
      let t11 = eV(e10, n2);
      t11 && !eW(t11) && await eZ(t11, true, n2);
    }
    O(eV(e10, n2));
  }
  if (0 === s2) return console.warn("[phenom] checkbox options not matched", { label: e.label, value: t, options: n.map((e10) => ({ label: ed(e10), value: e10.value, ariaLabel: e10.getAttribute("aria-label") || "" })) }), false;
  let c2 = await observer.waitForCondition(() => u2.every((e10) => {
    let t10 = eV(e10, { label: ed(e10) });
    return !!t10 && eW(t10);
  }), { timeout: 900, interval: 50, observeTarget: document.body });
  return c2 || console.warn("[phenom] checkbox options did not commit", { label: e.label, value: t, selected: u2.map((e10) => eV(e10, { label: ed(e10) })).filter((e10) => !!e10 && eW(e10)).map((e10) => ed(e10)) }), c2;
}
function rm() {
  let e = rules.getFormRoot();
  if (!e) return null;
  let t = Array.from(e.querySelectorAll(rules.CONTINUE_BUTTON_SELECTOR));
  return t.find((e10) => {
    if (!(e10 instanceof HTMLElement) || e10.closest("#jobright-helper-id")) return false;
    let t10 = U(e10.textContent || e10.getAttribute("value") || ""), r = U(e10.getAttribute("aria-label") || ""), n = U(e10.getAttribute("id") || "");
    return "next" === n || "continue" === r || "continue" === t10 || "submit" === t10 || "apply" === t10;
  }) ?? null;
}
async function rh(e, t, r) {
  await th(), await tg();
  let n = await e1();
  if (!n || !t || !r) return console.log("[phenom] resume upload aborted: missing input or callbacks", { hasFileInput: !!n, hasUpdateFieldRequiredStatus: !!t, hasUpdateFilledProgress: !!r }), { uploaded: false, parserReady: false };
  let o2 = ei();
  console.log("[phenom] resume upload start", { inputConnected: n.isConnected, inputDisabled: n.disabled, inputDisplay: window.getComputedStyle(n).display, hasUploadedStateBefore: tp(), triggerButtonClick: false }), n.focus(), await L(), await dom.uploadFiles(n, await answerMethods.fetchPdfAsBlob(e), t, r, "Resume/CV"), n.dispatchEvent(new Event("input", { bubbles: true })), n.dispatchEvent(new Event("blur", { bubbles: true })), O(n);
  let i2 = await observer.waitForCondition(() => tp() || !!(n.files && n.files.length > 0), { timeout: 5e3, interval: 100, observeTarget: document.body }), a2 = !!(n.files && n.files.length > 0), l2 = tp() || a2;
  if (console.log("[phenom] resume upload settled", { uploadSettled: i2, uploadSucceeded: l2, hasWrapper: !!e3(), hasButton: !!tu(), hasInput: !!n, inputFileCount: n.files?.length ?? 0, hasSelectedFile: a2, hasUploadedLink: !!td(), hasDeleteButton: !!tc() }), !l2) return console.log("[phenom] resume upload did not reach uploaded DOM state"), { uploaded: false, parserReady: false };
  let s2 = !o2 || await ea(o2);
  return s2 || console.warn("[phenom] resume upload completed before Cisco parser was ready"), { uploaded: true, parserReady: s2 };
}
async function rg(e, t, r) {
  await ts();
  let n = e9();
  if (!n || !t || !r) return console.log("[phenom] cover letter upload aborted: missing input or callbacks", { hasFileInput: !!n, hasUpdateFieldRequiredStatus: !!t, hasUpdateFilledProgress: !!r }), false;
  let o2 = tn(), i2 = I(e), a2 = await answerMethods.fetchCoverLetterPdfAsBlob(i2), l2 = ti(a2) || i2.coverLetterName;
  n.focus(), await L(), await dom.uploadFiles(n, a2, () => void 0, () => void 0, "Cover Letter"), n.dispatchEvent(new Event("input", { bubbles: true })), n.dispatchEvent(new Event("blur", { bubbles: true })), O(n);
  let s2 = await observer.waitForCondition(() => to(l2, o2), { timeout: 5e3, interval: 100, observeTarget: document.body }), u2 = !!(n.files && n.files.length > 0), c2 = to(l2, o2);
  return (console.log("[phenom] cover letter upload settled", { uploadSettled: s2, uploadSucceeded: c2, hasInput: !!n, inputFileCount: n.files?.length ?? 0, hasSelectedFile: u2, hasUploadedLink: !!te(), hasDeleteButton: !!e7() }), c2) ? (t({ label: "Cover Letter", required: true }), r("Cover Letter"), await delay.delay(200), true) : (console.log("[phenom] cover letter upload did not reach uploaded DOM state"), false);
}
function rb(e) {
  return rules.getCompositeItemFieldsets(e).length;
}
async function ry(e) {
  let t = rules.getArrayContainer(e);
  if (!t || rb(t) > 0) return;
  let r = t.querySelector(".more-actions .array-button-add");
  r && await rv(t);
}
async function rv(e) {
  let t = e.querySelector(".more-actions .array-button-add");
  if (!t) return;
  let r = rb(e);
  t.click();
  let n = 0;
  for (; n < 30; ) {
    await delay.delay(100);
    let t10 = rb(e);
    if (t10 > r) break;
    n += 1;
  }
  await delay.delay(200);
}
async function rw(e, t, r, n, o2, i2) {
  let a2 = rules.getArrayContainer(t);
  if (!a2 || 0 === e.length) return;
  let l2 = rb(a2), s2 = Math.max(0, e.length - l2);
  for (let e10 = 0; e10 < s2; e10 += 1) await rv(a2);
  let u2 = await rules.getCompositeRules(t);
  if (coreDom.setSectionResultFocusRules(t, u2), 0 === u2.length) return;
  let c2 = t === enums.FIELD_TYPE.EDUCATION ? answerMethods.getEducationOperations(u2, e, r, o2, i2, o2 ? { wrapTransformedFieldWithSkip: true } : void 0) : answerMethods.getEmploymentOperations(u2, e, r, void 0, i2);
  for (let e10 of c2) n.add(e10);
  await n.run();
}
export {
  rv as addCompositeSection,
  ei as captureCiscoPhenomResumeParserBaseline,
  tW as capturePhenomSchoolCandidates,
  tX as clearPhenomSchoolProbe,
  rb as countCompositeSections,
  ry as ensureInitialCompositeSection,
  rp as fillCheckboxField,
  rc as fillDateField,
  tE as fillInputTextField,
  ek as fillPhoneCountryCodeSelectsFromRecord,
  rf as fillRadioGroupField,
  e0 as fillRequiredConsentCheckboxes,
  tJ as fillResolvedPhenomSchoolField,
  tQ as fillSearchField,
  rd as fillSelectField,
  eT as findBestNativeSelectOption,
  rm as getContinueButton,
  tl as getCoverLetterFieldStatus,
  e9 as getCoverLetterFileInputSync,
  I as getPhenomCoverLetterUploadPayload,
  ta as hasCoverLetterFieldPresence,
  Q as hasPhenomAnswerForSnapshotField,
  tm as hasResumeFieldPresence,
  _ as installPhenomUploadAlertSuppressor,
  Z as isPhenomBlockingLoaderVisible,
  tS as preFillForm,
  rw as processCompositeBlocks,
  F as recordPhenomDateDebug,
  P as shouldSuppressPhenomUploadAlertMessage,
  L as suppressPhenomUploadSuccessAlert,
  tK as typePhenomSchoolProbe,
  rg as uploadCoverLetter,
  rh as uploadResume,
  ea as waitForCiscoPhenomResumeParserToSettle,
  et as waitForPhenomLoaderIdle,
  e1 as waitForResumeFileInput
};
