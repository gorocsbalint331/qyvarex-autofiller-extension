// @ts-nocheck
/**
 * Rippling DOM fill operations — readable TypeScript source of truth.
 */

import * as choiceMatch from "../../methods/choice-match.js"
import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as filler from "../../shared/filler.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeoutModule from "../../../utils/getTargetOrTimeout.js"
import * as phoneCountryCode from "./phone-country-code.ts"
const getTargetOrTimeout = {
  default:
    getTargetOrTimeoutModule.default ?? getTargetOrTimeoutModule,
}
let m = /r(?:\u00e9|e)sum(?:\u00e9|e)\s+parsing\s+was\s+successful/i, h = 500, g = 3e3, b = 15e3, y = [/r(?:\u00e9|e)sum(?:\u00e9|e)\s+parsing\s+(?:is\s+)?in\s+progress/i, /r(?:\u00e9|e)sum(?:\u00e9|e)\s+will\s+be\s+parsed/i, /parsing\s+(?:your\s+)?r(?:\u00e9|e)sum(?:\u00e9|e)/i, /r(?:\u00e9|e)sum(?:\u00e9|e)\s+is\s+being\s+parsed/i];
function v() {
  return [document.body?.innerText, document.body?.textContent].filter(Boolean).join(" ").replace(/\s+/g, " ");
}
function hasRipplingResumeParsingSucceeded() {
  return m.test(v());
}
function S() {
  let e = v();
  return y.some((t) => t.test(e));
}
function E() {
  return "ats.rippling.com" === window.location.hostname && !!document.querySelector('label[data-testid="resume"]');
}
function x(e) {
  let t = e.tagName.toLowerCase();
  if ("textarea" === t || "select" === t) return true;
  if ("input" !== t) return false;
  let r = (e.getAttribute("type") || "text").toLowerCase();
  return ["text", "email", "tel", "search", "url", "number", "date"].includes(r);
}
function C() {
  return Array.from(document.querySelectorAll("input, textarea, select")).some(x);
}
function A() {
  return Array.from(document.querySelectorAll("input, textarea, select")).filter(x).map((e) => [e.tagName, e.id, e.getAttribute("name") || "", e.value || ""].join(":")).join("\n");
}
async function k(e = {}) {
  let t = e.initialSignature ?? A(), r = Date.now(), n = !e.requireChange;
  return observer.waitForCondition(() => {
    let e2 = A();
    return e2 !== t ? (t = e2, r = Date.now(), n = true, false) : n && Date.now() - r >= h;
  }, { timeout: e.timeout ?? g, interval: 100, observeTarget: document.body });
}
async function waitForRipplingResumeParsingComplete(e = {}) {
  let t = A();
  if (w() && !e.afterUpload) return await k(), true;
  let r = document.body, n = await observer.waitForCondition(() => S() || w(), { timeout: 1500, interval: 100, observeTarget: r });
  if (!n && !e.force && !E()) return true;
  let o2 = t, i2 = Date.now(), a2 = false, s2 = await observer.waitForCondition(() => {
    if (w()) return true;
    let e2 = A();
    return e2 !== o2 ? (o2 = e2, i2 = Date.now(), a2 = true, false) : a2 && Date.now() - i2 >= h;
  }, { timeout: 3e4, interval: 250, observeTarget: r });
  s2 || console.warn("[uploadResume] Timed out waiting for Rippling resume parsing to finish");
  let u2 = !!e.afterUpload && !a2 && C(), c2 = await k({ initialSignature: o2, requireChange: u2, timeout: u2 ? b : void 0 });
  return !c2 && u2 && console.warn("[uploadResume] Timed out waiting for Rippling parser field rewrite"), s2;
}
async function F(e, t) {
  try {
    let r = e.closest(".react-datepicker-wrapper");
    if (r) {
      let r2 = t, n2 = null;
      if (t.match(/^\d{4}-\d{2}-\d{2}$/)) n2 = new Date(t);
      else if (t.match(/^\d{4}-\d{2}$/)) n2 = /* @__PURE__ */ new Date(t + "-01");
      else if (t.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        r2 = t;
        let [e2, o4, i4] = t.split("/");
        n2 = new Date(parseInt(i4), parseInt(e2) - 1, parseInt(o4));
      } else n2 = new Date(t);
      if (n2 && !isNaN(n2.getTime())) {
        let e2 = String(n2.getMonth() + 1).padStart(2, "0"), t2 = String(n2.getDate()).padStart(2, "0"), o4 = n2.getFullYear();
        r2 = `${e2}/${t2}/${o4}`;
      }
      if (e.value === r2) return e.blur(), document.body.click(), await delay.delay(100), true;
      let o3 = document.querySelector(".react-datepicker-popper, .react-datepicker__portal");
      if (o3) {
        e.blur();
        let t2 = new KeyboardEvent("keydown", { key: "Escape", code: "Escape", keyCode: 27, bubbles: true, cancelable: true });
        e.dispatchEvent(t2), await delay.delay(200);
      }
      e.focus(), await delay.delay(50);
      let i3 = e.value;
      e.value = "", await delay.delay(50), e.value = r2;
      let a3 = Object.getPrototypeOf(e), l3 = Object.getOwnPropertyDescriptor(a3, "value")?.set;
      l3 && l3.call(e, r2);
      let s3 = e?._valueTracker;
      s3 && s3.setValue(i3);
      let u3 = new InputEvent("input", { bubbles: true, cancelable: true, data: r2, inputType: "insertText" });
      if (e.dispatchEvent(u3), await delay.delay(50), e.dispatchEvent(new Event("change", { bubbles: true, cancelable: true })), await delay.delay(100), e.dispatchEvent(new Event("blur", { bubbles: true, cancelable: true })), await delay.delay(100), e.value === r2 || e.value.includes(r2.split("/")[0])) return e.blur(), document.body.click(), await delay.delay(100), true;
    }
    let n = t, o2 = null;
    if (t.match(/^\d{4}-\d{2}-\d{2}$/)) o2 = new Date(t);
    else if (t.match(/^\d{4}-\d{2}$/)) o2 = /* @__PURE__ */ new Date(t + "-01");
    else if (t.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      n = t;
      let [e2, r2, i3] = t.split("/");
      o2 = new Date(parseInt(i3), parseInt(e2) - 1, parseInt(r2));
    } else o2 = new Date(t);
    if (o2 && !isNaN(o2.getTime())) {
      let e2 = String(o2.getMonth() + 1).padStart(2, "0"), t2 = String(o2.getDate()).padStart(2, "0"), r2 = o2.getFullYear();
      n = `${e2}/${t2}/${r2}`;
    }
    try {
      e.focus(), await delay.delay(50);
      let t2 = e.value;
      e.value = n;
      let r2 = Object.getPrototypeOf(e), o3 = Object.getOwnPropertyDescriptor(r2, "value")?.set;
      o3 && o3.call(e, n);
      let i3 = e?._valueTracker;
      i3 && i3.setValue(t2);
      let a3 = new InputEvent("input", { bubbles: true, cancelable: true, data: n, inputType: "insertText" });
      if (e.dispatchEvent(a3), await delay.delay(50), e.dispatchEvent(new Event("change", { bubbles: true, cancelable: true })), await delay.delay(100), e.dispatchEvent(new Event("blur", { bubbles: true, cancelable: true })), await delay.delay(100), e.value === n || e.value.includes(n.split("/")[0])) return e.blur(), document.body.click(), await delay.delay(100), true;
    } catch {
    }
    if (!o2) {
      if (t.match(/^\d{4}-\d{2}-\d{2}$/)) o2 = new Date(t);
      else if (t.match(/^\d{4}-\d{2}$/)) o2 = /* @__PURE__ */ new Date(t + "-01");
      else if (t.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        let [e2, r2, n2] = t.split("/");
        o2 = new Date(parseInt(n2), parseInt(e2) - 1, parseInt(r2));
      } else o2 = new Date(t);
    }
    if (!o2 || isNaN(o2.getTime())) return false;
    let i2 = o2.getFullYear(), a2 = o2.getMonth() + 1, l2 = o2.getDate();
    e.focus(), e.click(), await delay.delay(500);
    let s2 = null;
    for (let e2 = 0; e2 < 3 && !(s2 = document.querySelector(".react-datepicker-popper, .react-datepicker__portal")); e2++) await delay.delay(200);
    if (!s2) return false;
    let u2 = s2.querySelector(".react-datepicker__year-read-view--selected-year");
    if (u2 && u2.textContent?.trim() !== i2.toString()) {
      u2.click(), await delay.delay(200);
      let e2 = s2.querySelector(".react-datepicker__year-dropdown");
      if (e2) {
        let t2 = Array.from(e2.querySelectorAll(".react-datepicker__year-option")).find((e3) => e3.textContent?.trim() === i2.toString());
        t2 && (t2.click(), await delay.delay(200));
      }
    }
    let d2 = s2.querySelector(".react-datepicker__month-read-view--selected-month");
    if (d2) {
      let e2 = d2.textContent?.trim() || "", t2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], r2 = t2[a2 - 1];
      if (e2 !== r2) {
        d2.click(), await delay.delay(200);
        let e3 = s2.querySelector(".react-datepicker__month-dropdown");
        if (e3) {
          let t3 = Array.from(e3.querySelectorAll(".react-datepicker__month-option")).find((e4) => e4.textContent?.trim() === r2);
          t3 && (t3.click(), await delay.delay(200));
        }
      }
    }
    let f2 = `react-datepicker__day--${String(l2).padStart(3, "0")}`, p2 = s2.querySelector(`.${f2}:not(.react-datepicker__day--outside-month)`);
    if (p2) {
      let t2 = p2.getAttribute("aria-label") || "", r2 = `${a2}/${l2}/${i2}`;
      if (t2.includes(r2) || !t2) return p2.click(), await delay.delay(200), e.blur(), document.body.click(), await delay.delay(100), true;
    }
    let m2 = s2.querySelectorAll(".react-datepicker__day:not(.react-datepicker__day--outside-month)");
    for (let t2 of m2) {
      let r2 = t2.getAttribute("aria-label") || "";
      if (r2.includes(`${a2}/${l2}/${i2}`) || r2.includes(`${l2}th, ${i2}`)) return t2.click(), await delay.delay(200), e.blur(), document.body.click(), await delay.delay(100), true;
    }
    return false;
  } catch (e2) {
    return console.error("[fillDatePickerField] Error:", e2), false;
  }
}
async function addEducationSection(e) {
  if (e <= 0) return;
  let t = Array.from(document.querySelectorAll("h3")), r = t.find((e2) => e2.textContent?.trim() === "Education");
  if (!r) return;
  let n = Array.from(document.querySelectorAll("button")).find((e2) => {
    let t2 = e2.textContent?.trim() || "", r2 = e2.getAttribute("aria-label") || "";
    return t2.includes("Add More Education History") || r2.includes("Add More Education History");
  });
  if (!n) return;
  let o2 = Array.from(document.querySelectorAll('input[id*="institution"], input[name*="institution"], label[for*="institution"]')).filter((e2) => {
    let t2 = "LABEL" === e2.tagName ? document.getElementById(e2.getAttribute("for") || "") : e2;
    if (!t2) return false;
    let o3 = r.compareDocumentPosition(t2), i3 = (o3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, a3 = t2.compareDocumentPosition(n), l3 = (a3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    return i3 && l3;
  }), i2 = Array.from(document.querySelectorAll("input, textarea, select")).filter((e2) => {
    let t2 = r.compareDocumentPosition(e2), o3 = (t2 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i3 = e2.compareDocumentPosition(n), a3 = (i3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    if (!o3 || !a3) return false;
    let l3 = e2.id || "", s3 = e2.name || "";
    return /\.response\.\d+\./.test(l3 + s3);
  }), a2 = /* @__PURE__ */ new Set();
  i2.forEach((e2) => {
    let t2 = e2.id || "", r2 = e2.name || "", n2 = (t2 + r2).match(/\.response\.(\d+)\./);
    n2 && a2.add(parseInt(n2[1], 10));
  });
  let l2 = 0;
  if (a2.size > 0) l2 = Math.max(...Array.from(a2)) + 1;
  else if (o2.length > 0) l2 = o2.length;
  else {
    let e2 = Array.from(document.querySelectorAll("input, textarea, select")).filter((e3) => {
      let t2 = r.compareDocumentPosition(e3), o3 = (t2 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i3 = e3.compareDocumentPosition(n), a3 = (i3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
      return o3 && a3;
    });
    l2 = e2.length > 0 ? 1 : 0;
  }
  let s2 = e - l2;
  if (!(s2 <= 0)) for (let e2 = 0; e2 < s2; e2++) n.click(), await delay.delay(300);
}
async function addEmploymentSection(e) {
  if (e <= 0) return;
  let t = Array.from(document.querySelectorAll("h3")), r = t.find((e2) => e2.textContent?.trim() === "Employment History");
  if (!r) return;
  let n = Array.from(document.querySelectorAll("button")).find((e2) => {
    let t2 = e2.textContent?.trim() || "";
    return t2.includes("Add Another Position");
  });
  if (!n) return;
  let o2 = Array.from(document.querySelectorAll('input[id*="company"], input[name*="company"], label[for*="company"]')).filter((e2) => {
    let t2 = "LABEL" === e2.tagName ? document.getElementById(e2.getAttribute("for") || "") : e2;
    if (!t2) return false;
    let o3 = r.compareDocumentPosition(t2), i3 = (o3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, a3 = t2.compareDocumentPosition(n), l3 = (a3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    return i3 && l3;
  }), i2 = Array.from(document.querySelectorAll("input, textarea, select")).filter((e2) => {
    let t2 = r.compareDocumentPosition(e2), o3 = (t2 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i3 = e2.compareDocumentPosition(n), a3 = (i3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    if (!o3 || !a3) return false;
    let l3 = e2.id || "", s3 = e2.name || "";
    return /\.response\.\d+\./.test(l3 + s3);
  }), a2 = /* @__PURE__ */ new Set();
  i2.forEach((e2) => {
    let t2 = e2.id || "", r2 = e2.name || "", n2 = (t2 + r2).match(/\.response\.(\d+)\./);
    n2 && a2.add(parseInt(n2[1], 10));
  });
  let l2 = Math.max(o2.length, a2.size), s2 = e - l2;
  if (!(s2 <= 0)) for (let e2 = 0; e2 < s2; e2++) n.click(), await delay.delay(300);
}
async function preFillForm() {
  await delay.delay(500);
}
async function P(e, t) {
  let r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  for (let n = 0; n < t.length; n++) {
    let o2 = t.slice(0, n + 1);
    r ? r.call(e, o2) : e.value = o2, e.dispatchEvent(new InputEvent("input", { bubbles: true, cancelable: true, data: t[n], inputType: "insertText" })), await delay.delay(40);
  }
}
function _(e, t) {
  let r = e.value;
  e.value = t;
  let n = Object.getPrototypeOf(e), o2 = Object.getOwnPropertyDescriptor(n, "value")?.set;
  o2 && o2.call(e, t);
  let i2 = e._valueTracker;
  i2 && i2.setValue(r);
}
function L(e) {
  return String(e ?? "").normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim();
}
function findExactRipplingLocationOption(e, t) {
  let r = L(e);
  return r && t.find((e2) => L(e2.textContent || "") === r) || null;
}
function O(e) {
  let t = e.getAttribute("aria-controls");
  return t ? document.getElementById(t) : null;
}
function M(e) {
  _(e, ""), e.dispatchEvent(new InputEvent("input", { bubbles: true })), e.dispatchEvent(new Event("change", { bubbles: true })), e.blur();
}
function N(e) {
  let t = e.closest('[data-testid="field"]');
  return t?.querySelector('input[data-input="externalPlaceId"]') ?? t?.parentElement?.querySelector('input[data-input="externalPlaceId"]') ?? e.closest('[data-testid="location"]')?.querySelector('input[data-input="externalPlaceId"]') ?? null;
}
function $(e, t) {
  let r = Y(e), n = r instanceof HTMLInputElement ? r.value : "";
  return [e.textContent, t.textContent, n].filter(Boolean).join(" ");
}
function readRipplingPhoneCodeDisplayText() {
  let e = document.querySelector('[data-testid="phone_number-code"]'), t = e?.querySelector('[data-testid="select-controller"]');
  return e && t ? $(t, e) : "";
}
function q(e, t) {
  return phoneCountryCode.getRipplingPhoneCodeOptionScore(e, t) >= 400;
}
function U(e) {
  e.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true, cancelable: true })), e.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true, cancelable: true }));
}
function H(e) {
  e.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", code: "ArrowDown", keyCode: 40, which: 40, bubbles: true, cancelable: true })), e.dispatchEvent(new KeyboardEvent("keyup", { key: "ArrowDown", code: "ArrowDown", keyCode: 40, which: 40, bubbles: true, cancelable: true }));
}
function Y(e) {
  return e.querySelector('input[data-testid="input-select-search-input"], input[role="combobox"], [role="combobox"]');
}
function z(e) {
  let t = window.getComputedStyle(e);
  return "none" !== t.display && "hidden" !== t.visibility && e.getClientRects().length > 0;
}
function V(e, t) {
  let r = e.getAttribute("aria-controls");
  if (r) {
    let e2 = document.getElementById(r);
    if (e2) return e2;
  }
  if (e.id) {
    let t2 = document.getElementById(`${e.id}-list`);
    if (t2) return t2;
  }
  let n = e.getAttribute("aria-activedescendant");
  if (n) {
    let e2 = n.replace(/--option-\d+$/, "--list"), t2 = document.getElementById(e2);
    if (t2) return t2;
  }
  let o2 = Array.from(document.querySelectorAll('[data-testid="popper"] ul[role="listbox"], ul[role="listbox"]')).filter((e2) => e2 instanceof HTMLElement), i2 = o2.filter(z);
  if (0 === i2.length) return null;
  if (1 === i2.length || !t) return i2[0];
  let a2 = null, l2 = -1;
  for (let e2 of i2) {
    let r2 = G(e2, t);
    r2 && r2.score > l2 && (l2 = r2.score, a2 = e2);
  }
  return a2;
}
async function W(e) {
  e.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true, cancelable: true })), await delay.delay(20), e.dispatchEvent(new MouseEvent("mouseover", { bubbles: true, cancelable: true })), await delay.delay(20), e.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), await delay.delay(20), e.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true })), await delay.delay(20), e.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
}
function G(e, t) {
  let r = Array.from(e.querySelectorAll('li[role="option"]')), n = null, o2 = -1;
  for (let e2 of r) {
    let r2 = phoneCountryCode.getRipplingPhoneCodeOptionScore(e2.textContent || "", t);
    if (500 === r2) return { option: e2, score: r2 };
    r2 > o2 && (n = e2, o2 = r2);
  }
  return n && o2 >= 0 ? { option: n, score: o2 } : null;
}
async function K(e, t, r) {
  let n = () => q(B(), r), o2 = Y(e);
  if (!o2) return false;
  o2.focus(), await delay.delay(30), await W(o2), await observer.waitForCondition(() => "true" === o2.getAttribute("aria-expanded") || !!V(o2, r), { timeout: 1200, interval: 50, observeTarget: document.body }), o2 instanceof HTMLInputElement && (await P(o2, r.search), await delay.delay(400));
  let i2 = await getTargetOrTimeout.default(() => V(o2, r), () => false, 20);
  if (i2) {
    await observer.waitForCondition(() => i2.querySelectorAll('li[role="option"]').length > 0, { timeout: 1e3, interval: 50, observeTarget: i2 });
    let e2 = G(i2, r);
    if (e2 && (e2.option.scrollIntoView({ block: "center", behavior: "auto" }), await delay.delay(100), await W(e2.option), await delay.delay(150), await observer.waitForCondition(n, { timeout: 800, interval: 50, observeTarget: t }) || (H(o2), await delay.delay(100), U(o2), await delay.delay(150), await observer.waitForCondition(n, { timeout: 1e3, interval: 50, observeTarget: t })))) return true;
  }
  let a2 = o2.getAttribute("aria-activedescendant");
  if (a2) {
    let e2 = document.getElementById(a2);
    if (e2 && q(e2.textContent || "", r) && (await W(e2), await delay.delay(150), await observer.waitForCondition(n, { timeout: 800, interval: 50, observeTarget: t }))) return true;
  }
  return "true" === o2.getAttribute("aria-expanded") && (document.body.click(), await delay.delay(100)), n();
}
async function selectPhoneCountryCode(e, t = {}) {
  try {
    let r = phoneCountryCode.resolveRipplingPhoneCountryTarget(e, t);
    if (!r) return false;
    let n = await getTargetOrTimeout.default(() => document.querySelector('[data-testid="phone_number-code"]'), () => false, 30);
    if (!n) return false;
    let o2 = await getTargetOrTimeout.default(() => n.querySelector('[data-testid="select-controller"]'), () => false, 20);
    if (!o2) return false;
    let i2 = () => q(B(), r);
    if (i2()) return true;
    for (let e2 = 0; e2 < 3; e2++) if (await K(o2, n, r)) return true;
  } catch (e2) {
    console.error("[selectPhoneCountryCode] Error:", e2);
  }
  return false;
}
async function uploadResume(e, t, r) {
  let n = window.location.hostname;
  if (n.includes("rippling-ats")) {
    let n2 = document.getElementById("files.Resume");
    if (n2) {
      let o2 = Array.from(document.querySelectorAll('input.dz-hidden-input[type="file"]')), l2 = null, s2 = n2.querySelector(".dropzone");
      if (s2) {
        let e2 = o2.filter((e3) => "application/pdf, .doc, .docx, text/plain" === e3.accept);
        e2.length >= 2 ? l2 = e2[1] : 1 === e2.length && (l2 = e2[0]);
      }
      if (!l2 && s2) {
        s2.click(), await delay.delay(100);
        let e2 = Array.from(document.querySelectorAll('input.dz-hidden-input[type="file"]')), t2 = e2.filter((e3) => "application/pdf, .doc, .docx, text/plain" === e3.accept);
        t2.length >= 2 ? l2 = t2[1] : 1 === t2.length && (l2 = t2[0]);
      }
      l2 && (await dom.uploadFiles(l2, await answerMethods.fetchPdfAsBlob(e), t, r, "Resume/CV"), await T({ afterUpload: true }));
    }
  } else {
    let n2 = document.querySelector('label[data-testid="resume"]');
    if (n2) {
      let o2 = n2.querySelector('input[type="file"]');
      o2 && (await dom.uploadFiles(o2, await answerMethods.fetchPdfAsBlob(e), t, r, "Resume/CV"), await T({ force: "ats.rippling.com" === window.location.hostname, afterUpload: true }));
    }
  }
}
function Q(e) {
  return e?.replace(/\s+/g, " ").trim().toLowerCase() || "";
}
function Z(e) {
  let t = Q(e?.textContent);
  return t.includes("cover letter");
}
function ee() {
  return document.querySelector('label[data-testid="cover_letter"]') || document.getElementById("files.CoverLetter.file_label") || document.querySelector('label[id*="CoverLetter"]') || Array.from(document.querySelectorAll("label")).find((e) => Z(e)) || null;
}
function et(e) {
  let t = e?.closest(".form-group, .ob.form-group, [class*='form-group']");
  return document.getElementById("files.CoverLetter") || t?.querySelector('[id="files.CoverLetter"], [id*="CoverLetter"], .file-field-input') || null;
}
function er(e) {
  return document.querySelector('label[data-testid="cover_letter"] input[type="file"]') || e?.querySelector('input[type="file"]') || document.querySelector('input[type="file"][name*="CoverLetter" i], input[type="file"][id*="CoverLetter" i], input[type="file"][name*="cover_letter" i], input[type="file"][id*="cover_letter" i]');
}
function en() {
  return Array.from(document.querySelectorAll('input.dz-hidden-input[type="file"]'));
}
function getRipplingCoverLetterUploadDom() {
  let e = ee(), t = et(e), r = e?.closest(".form-group, .ob.form-group, [class*='form-group']"), n = t?.querySelector(".dropzone") || t?.querySelector(".filepicker") || r?.querySelector(".dropzone") || r?.querySelector(".filepicker"), o2 = er(t), i2 = en(), a2 = !!(e || t || n);
  return { label: e, container: t, dropzone: n, input: o2 || (a2 ? i2[0] ?? null : null), hiddenInputs: i2 };
}
function hasRipplingCoverLetterSlot() {
  let e = eo();
  return !!(e.label || e.container || e.dropzone || e.input);
}
async function waitForRipplingCoverLetterSlot() {
  return await observer.waitForCondition(() => ei(), { timeout: 3e3, interval: 100, observeTarget: document.body });
}
async function el() {
  let e = eo();
  if (e.input) return e.input;
  if (!e.dropzone) return null;
  let t = new Set(e.hiddenInputs);
  e.dropzone.click();
  let r = await observer.waitForCondition(() => {
    let e2 = eo(), r2 = e2.hiddenInputs.find((e3) => !t.has(e3));
    return !!(e2.input || r2);
  }, { timeout: 1500, interval: 50, observeTarget: document.body });
  if (!r) return null;
  let n = eo(), o2 = n.hiddenInputs.find((e2) => !t.has(e2));
  return n.input || o2 || n.hiddenInputs[0] || null;
}
async function uploadCoverLetter(e, t, r) {
  let n = await el();
  n && await dom.uploadFiles(n, await answerMethods.fetchCoverLetterPdfAsBlob(e), t, r, "Cover Letter");
}
async function removeResume() {
  let e = document.querySelector('label[data-testid="resume"]');
  if (e) {
    let t2 = e.querySelector('[data-testid="chip"]');
    if (t2) {
      let e2 = t2.querySelector('div[role="button"][aria-labelledby*="prefix"]');
      if (e2) {
        e2.click(), await delay.delay(200);
        return;
      }
    }
  }
  let t = document.querySelector('label[id*="Resume"]');
  if (t) {
    let e2 = t.closest(".form-group, .ob.form-group, [class*='form-group']");
    if (e2) {
      let t2 = e2.querySelector("a.dz-remove[data-dz-remove]");
      if (t2) {
        t2.click(), await delay.delay(200);
        return;
      }
    }
  }
  let r = document.querySelector("a.dz-remove[data-dz-remove]");
  if (r) {
    let e2 = r.closest('div[id*="Resume"], div[class*="file"], div[class*="dropzone"]');
    if (e2) {
      r.click(), await delay.delay(200);
      return;
    }
  }
  console.warn("[removeResume] Resume remove button not found in any structure");
}
async function fillInputTextField(e, t) {
  if (!e) return;
  let r = "date" === e.type || e.classList.contains("react-datepicker-ignore-onclickoutside") || null !== e.closest(".react-datepicker-wrapper"), n = e.name || "", o2 = e.id || "", i2 = e.getAttribute("placeholder") || "", a2 = e.getAttribute("aria-label") || "", l2 = i2.toLowerCase().includes("date") || a2.toLowerCase().includes("date") || n.toLowerCase().includes("date") || o2.toLowerCase().includes("date") || n.toLowerCase().includes("st_date") || n.toLowerCase().includes("end_date") || n.toLowerCase().includes("start_date") || o2.toLowerCase().includes("st_date") || o2.toLowerCase().includes("end_date") || o2.toLowerCase().includes("start_date"), s2 = false, u2 = e.getAttribute("aria-labelledby") && document.getElementById(e.getAttribute("aria-labelledby") || "") || e.id && document.querySelector(`label[for="${e.id}"]`) || e.closest("label");
  if (u2) {
    let r2 = (u2.textContent || "").toLowerCase().trim();
    if (r2.includes("start") || r2.includes("end")) {
      let r3 = t.match(/^\d{4}-\d{2}-\d{2}$/) || t.match(/^\d{4}-\d{2}$/) || t.match(/^\d{2}\/\d{2}\/\d{4}$/), n2 = null !== e.closest(".react-datepicker-wrapper");
      (r3 || n2) && (s2 = true);
    }
  }
  let d2 = t.match(/^\d{4}-\d{2}-\d{2}$/) || t.match(/^\d{4}-\d{2}$/) || t.match(/^\d{2}\/\d{2}\/\d{4}$/), f2 = null !== e.closest(".react-datepicker-wrapper"), p2 = (n.toLowerCase().includes("date") || o2.toLowerCase().includes("date") || n.toLowerCase().includes("st_date") || n.toLowerCase().includes("end_date") || n.toLowerCase().includes("start_date")) && d2, m2 = r || l2 || s2 || p2 || f2 && d2;
  if (m2 || f2 && d2) {
    let r2 = await F(e, t);
    if (r2) return;
  }
  e.focus(), await delay.delay(20);
  let h2 = e.value;
  e.value = t;
  let g2 = Object.getPrototypeOf(e), b2 = Object.getOwnPropertyDescriptor(g2, "value")?.set;
  b2 && b2.call(e, t);
  let y2 = e?._valueTracker;
  y2 && y2.setValue(h2);
  let v2 = new InputEvent("input", { bubbles: true, cancelable: true, data: t, inputType: "insertText" });
  e.dispatchEvent(v2), await delay.delay(20), e.dispatchEvent(new Event("change", { bubbles: true, cancelable: true })), await delay.delay(50);
  let w2 = null, S2 = 0, E2 = 2;
  w2 = setInterval(() => {
    S2++, e.value !== t && (e.value = t, b2 && b2.call(e, t), y2 && y2.setValue(h2), e.dispatchEvent(v2), e.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }))), S2 >= E2 && w2 && clearInterval(w2);
  }, 50), await delay.delay(100), w2 && clearInterval(w2);
}
async function fillSelectField(e, t) {
  let r = e.label, n = Array.isArray(t) ? t?.[0] : t;
  if (!n) return;
  if (!e.$input) throw new filler.FillError(`(Select) Could not find select element for label: "${r}"`);
  if (e.$input instanceof HTMLSelectElement) {
    let t2 = Array.from(e.$input.options), i3 = t2.map((e2) => e2.text.trim() || e2.value), a3 = choiceMatch.findExactChoice(t2, n, (e2) => e2.text, (e2) => e2.value);
    if (a3) {
      e.$input.focus(), await delay.delay(50), e.$input.value = a3.value;
      let t3 = Object.getPrototypeOf(e.$input), r2 = Object.getOwnPropertyDescriptor(t3, "value")?.set;
      r2 && r2.call(e.$input, a3.value), e.$input.dispatchEvent(new Event("input", { bubbles: true })), await delay.delay(50), e.$input.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(50), e.$input.dispatchEvent(new Event("blur", { bubbles: true })), await delay.delay(200);
      return;
    }
    throw new filler.FillError(`(Select) No option "${n}" found for label: "${r}". Available options: ${i3.join(", ")}`);
  }
  let i2 = e.$input, a2 = i2.classList.contains("Select");
  if (a2) try {
    let e2 = i2.querySelector('input[role="combobox"], .Select-input input, input');
    if (!e2) throw new filler.FillError(`(Select) Could not find input in React Select for label: "${r}"`);
    e2.focus(), await delay.delay(50), e2.value = "";
    let t2 = Object.getPrototypeOf(e2), a3 = Object.getOwnPropertyDescriptor(t2, "value")?.set;
    a3 && a3.call(e2, ""), e2.dispatchEvent(new InputEvent("input", { bubbles: true, cancelable: true, inputType: "deleteContentBackward" })), await delay.delay(100), a3 ? a3.call(e2, n) : e2.value = n, e2.dispatchEvent(new InputEvent("input", { bubbles: true, cancelable: true, data: n, inputType: "insertText" })), await delay.delay(50), e2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(150);
    let l3 = null;
    for (let e3 = 0; e3 < 10 && !(l3 = document.querySelector(".Select-menu, .Select-menu-outer")); e3++) await delay.delay(50);
    if (!l3) throw new filler.FillError(`(Select) Dropdown menu did not appear for label: "${r}"`);
    await delay.delay(100);
    let u2 = Array.from(l3.querySelectorAll(".Select-option"));
    if (0 === u2.length) throw new filler.FillError(`(Select) No options found in dropdown for label: "${r}"`);
    let d2 = null;
    if (!(d2 = choiceMatch.findExactChoice(u2, n, (e3) => e3.textContent) || null)) throw new filler.FillError(`(Select) No exact option found for "${n}"`);
    d2.scrollIntoView({ block: "nearest", behavior: "auto" }), await delay.delay(50), d2.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true, cancelable: true })), await delay.delay(20), d2.dispatchEvent(new MouseEvent("mouseover", { bubbles: true, cancelable: true })), await delay.delay(20), d2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), await delay.delay(20), d2.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true })), await delay.delay(20), d2.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true })), await delay.delay(150);
    let f2 = document.querySelector(".Select-menu, .Select-menu-outer");
    f2 && console.warn("[fillSelectField] Menu is still open after clicking option"), i2.querySelector(".Select-value"), i2.querySelector(".Select-placeholder");
    return;
  } catch (e2) {
    throw console.error("[fillSelectField] React Select error:", e2), e2;
  }
  let l2 = i2.querySelector('[role="combobox"]');
  if (!l2) throw new filler.FillError(`(Select) Could not find combobox for label: "${r}"`);
  try {
    let e2;
    let t2 = l2;
    if (t2.focus(), await delay.delay(50), "INPUT" === t2.tagName) {
      t2.value = "";
      let e3 = Object.getPrototypeOf(t2), r2 = Object.getOwnPropertyDescriptor(e3, "value")?.set;
      r2 && r2.call(t2, ""), t2.dispatchEvent(new InputEvent("input", { bubbles: true, cancelable: true, inputType: "deleteContentBackward" })), await delay.delay(50), r2 ? r2.call(t2, n) : t2.value = n, t2.dispatchEvent(new InputEvent("input", { bubbles: true, cancelable: true, data: n, inputType: "insertText" })), await delay.delay(50), t2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(100), t2.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", code: "ArrowDown", keyCode: 40, bubbles: true, cancelable: true })), await delay.delay(50);
    }
    let a3 = null;
    for (let e3 = 0; e3 < 10; e3++) {
      let e4 = l2.getAttribute("aria-controls");
      if (e4 && (a3 = document.getElementById(e4)), a3 || (a3 = document.querySelector('ul[role="listbox"]')), a3) break;
      await delay.delay(50);
    }
    if (!a3) {
      l2.click(), await delay.delay(100);
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = l2.getAttribute("aria-controls");
        if (e4 && (a3 = document.getElementById(e4)), a3 || (a3 = document.querySelector('ul[role="listbox"]')), a3) break;
        await delay.delay(50);
      }
    }
    if (!a3) {
      let e3 = i2.querySelector('[data-testid="select-controller"]');
      if (e3) {
        e3.click(), await delay.delay(100);
        for (let e4 = 0; e4 < 5; e4++) {
          let e5 = l2.getAttribute("aria-controls");
          if (e5 && (a3 = document.getElementById(e5)), a3 || (a3 = document.querySelector('ul[role="listbox"]')), a3) break;
          await delay.delay(50);
        }
      }
    }
    if (!a3) throw console.error("[fillSelectField] Failed to open dropdown menu", { label: r, value: n, comboboxId: l2.id, ariaControls: l2.getAttribute("aria-controls"), ariaExpanded: l2.getAttribute("aria-expanded") }), new filler.FillError(`(Select) Dropdown menu did not appear for label: "${r}"`);
    await delay.delay(100);
    let u2 = Array.from(a3.querySelectorAll('li[role="option"]'));
    if (0 === u2.length) throw new filler.FillError(`(Select) No options found in dropdown for label: "${r}"`);
    if (!(e2 = choiceMatch.findExactChoice(u2, n, (e3) => e3.textContent) || null)) throw new filler.FillError(`(Select) No exact option found for "${n}"`);
    e2.scrollIntoView({ block: "nearest", behavior: "auto" }), await delay.delay(50), e2.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true, cancelable: true })), await delay.delay(20), e2.dispatchEvent(new MouseEvent("mouseover", { bubbles: true, cancelable: true })), await delay.delay(20), e2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), await delay.delay(20), e2.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true })), await delay.delay(20), e2.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true })), await delay.delay(150);
    let d2 = "true" === l2.getAttribute("aria-expanded");
    d2 && console.warn("[fillSelectField] Combobox is still expanded after clicking option"), l2.value;
  } catch (e2) {
    console.error("[fillSelectField] Combobox select error:", e2);
    try {
      document.body.click(), await delay.delay(100);
    } catch (e3) {
    }
    throw e2;
  }
}
function ef(e) {
  let t = e.labels?.[0] || e.closest("label");
  return t?.textContent?.trim() || e.nextElementSibling?.textContent?.trim() || "";
}
async function fillRadioGroupFiled(e, t) {
  let r = e.label, n = t?.[0];
  if (!n) return;
  let i2 = null;
  if (e.$radioParent && (i2 = e.$radioParent), !i2) {
    let e2 = `//*[contains(text(), ${u.escapeXPath(r)})]/parent::div/parent::div | //*[contains(text(), ${u.escapeXPath(r)})]/parent::div/parent::li`;
    i2 = xpath.getFirstOrderedNodeSafe(e2);
  }
  if (!i2) throw new filler.FillError(`(Radio) Could not find container for label: "${r}"`);
  let a2 = choiceMatch.findExactChoice(xpath.getOrderedNodesSafe(".//input[@type='radio']", i2), n, ef, (e2) => e2.value);
  if (a2) {
    a2.checked || (a2.click(), await delay.delay(500));
    return;
  }
  let l2 = `
    .//*[@role='radio'][
      @aria-label=${u.escapeXPath(n)} or
      @data-value=${u.escapeXPath(n)} or
      normalize-space()=${u.escapeXPath(n)} or
      .//*[normalize-space()=${u.escapeXPath(n)}]
    ]
  `, d2 = xpath.getFirstOrderedNodeSafe(l2, i2);
  if (d2) {
    "true" !== d2.getAttribute("aria-checked") && (d2.click(), await delay.delay(500));
    return;
  }
  throw new filler.FillError(`(Radio) No option "${n}" found for label: "${r}"`);
}
async function fillCheckboxField(e, t) {
  let r = e.label;
  if (e.$checkboxs && e.$checkboxs.length > 0) {
    for (let n2 of t) {
      let t2 = null, o2 = null, i2 = e.$checkboxs;
      for (let e2 of i2) {
        if (e2.value === n2) {
          t2 = e2, o2 = e2.closest('[role="checkbox"]');
          break;
        }
        let r2 = e2.closest('[role="checkbox"]');
        if (r2) {
          let i3 = r2.getAttribute("data-value");
          if (i3 === n2) {
            t2 = e2, o2 = r2;
            break;
          }
          let a2 = r2.querySelector('[id*="label-"] p.css-v2szc5, [id*="label-"]');
          if (a2 && a2.textContent?.trim() === n2) {
            t2 = e2, o2 = r2;
            break;
          }
        }
      }
      t2 && o2 ? t2.checked || (o2.click(), await delay.delay(200), t2.checked || (t2.click(), await delay.delay(200))) : console.warn(`[fillCheckboxField] No matching checkbox found for value: "${n2}" in label: "${r}"`);
    }
    return;
  }
  let n = e.$radioParent || null;
  if (!n) {
    let e2 = `//*[contains(text(), ${u.escapeXPath(r)})]/parent::div/parent::div | //*[contains(text(), ${u.escapeXPath(r)})]/parent::div/parent::li`;
    n = xpath.getFirstOrderedNodeSafe(e2);
  }
  if (!n) {
    console.warn(`[fillCheckboxField] Could not find container for label: "${r}"`);
    return;
  }
  for (let e2 of t) {
    let t2 = xpath.getFirstOrderedNodeSafe(`.//*[@role="checkbox"][@data-value=${u.escapeXPath(e2)}]`, n);
    if (t2) {
      let e3 = t2.querySelector('input[type="checkbox"]');
      !e3 || e3.checked || (t2.click(), await delay.delay(200), e3.checked || (e3.click(), await delay.delay(200)));
      continue;
    }
    let i2 = choiceMatch.findExactChoice(xpath.getOrderedNodesSafe(".//input[@type='checkbox']", n), e2, ef, (e3) => e3.value);
    if (i2) {
      let e3 = i2.closest('[role="checkbox"]');
      e3 ? i2.checked || (e3.click(), await delay.delay(200), i2.checked || (i2.click(), await delay.delay(200))) : i2.checked || (i2.click(), await delay.delay(200));
    } else console.warn(`[fillCheckboxField] No option "${e2}" found for label: "${r}"`);
  }
}
async function fillResolvedLocationInput(e, t) {
  let r = e.$input, n = String(t ?? "").trim();
  if (!n) throw new filler.FillError("(Search) Location value is empty");
  if (!(r instanceof HTMLInputElement)) return ec(r, n);
  try {
    r.focus({ preventScroll: true });
  } catch {
    r.focus();
  }
  await delay.delay(30), await W(r), await P(r, n), await delay.delay(300);
  let o2 = null, i2 = () => {
    let e2 = O(r), t2 = e2 ? Array.from(e2.querySelectorAll('li[role="option"]')) : [];
    return !!(o2 = R(n, t2));
  };
  if (i2() || await observer.waitForCondition(i2, { timeout: 1600, interval: 80, observeTarget: document.body }), !o2) throw M(r), new filler.FillError(`(Search) Could not find exact Location option for "${n}"`);
  o2.scrollIntoView({ block: "nearest", behavior: "auto" }), await delay.delay(50), await W(o2), await delay.delay(200);
  let a2 = N(r), u2 = await observer.waitForCondition(() => {
    let e2 = L(r.value) === L(n), t2 = !a2 || !!a2.value.trim();
    return e2 && t2 && !O(r);
  }, { timeout: 1200, interval: 50, observeTarget: document.body });
  if (!u2) throw M(r), new filler.FillError(`(Search) Location option did not commit for "${n}"`);
}

export {
  addEducationSection,
  addEmploymentSection,
  fillCheckboxField,
  fillInputTextField,
  fillRadioGroupFiled,
  fillResolvedLocationInput,
  fillSelectField,
  findExactRipplingLocationOption,
  getRipplingCoverLetterUploadDom,
  hasRipplingCoverLetterSlot,
  hasRipplingResumeParsingSucceeded,
  preFillForm,
  readRipplingPhoneCodeDisplayText,
  removeResume,
  selectPhoneCountryCode,
  uploadCoverLetter,
  uploadResume,
  waitForRipplingCoverLetterSlot,
  waitForRipplingResumeParsingComplete,
}
