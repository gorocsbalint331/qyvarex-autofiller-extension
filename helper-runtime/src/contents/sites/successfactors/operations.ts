// @ts-nocheck
/**
 * SuccessFactors — DOM fill operations (selects, uploads, sections, skills).
 */

import * as answerMethods from "../../methods/answer.js"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.ts"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
import * as urlStore from "../../../store/url.js"
import * as dayjs from "dayjs"
import * as rules from "./rules.ts"
const dayjsDefault = { default: dayjs };
let m = "Resume / CV", h = "Cover Letter", g = ["education", "educational background", "higher education", "formal education"], b = ["experience", "work experience", "work history", "employment history", "previous work experience", "previous work history", "employment", "previous employment"];
function y(e) {
  let t = e.trim().toLowerCase();
  if ("present" === t || "immediately" === t) return dayjsDefault.default().format("MM/DD/YYYY");
  let r = dayjsDefault.default(e);
  return r.isValid() ? r.format("MM/DD/YYYY") : (console.warn(`[fillInputTextField] Invalid date value: "${e}", using current date instead`), dayjsDefault.default().format("MM/DD/YYYY"));
}
function v(e, t) {
  e.dispatchEvent(new Event(t, { bubbles: true, composed: true }));
}
function w(e) {
  return (e || "").replace(/\u00a0/g, " ").replace(/\*/g, " ").replace(/\s*:\s*$/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function S(e) {
  return w(e);
}
function E(e, t) {
  let r = S(e);
  return t.some((e10) => r.includes(S(e10)));
}
function x(e) {
  return w(e).replace(/[^a-z0-9]/g, "");
}
function C(e, t) {
  let r = x(e), n = x(t);
  if (!r || !n) return false;
  let o2 = /* @__PURE__ */ new Set(["resume", "resumecv"]);
  if (o2.has(n)) return o2.has(r);
  let i2 = /* @__PURE__ */ new Set(["coverletter"]);
  return i2.has(n) ? i2.has(r) : r === n;
}
function A(e) {
  if (!(e instanceof HTMLElement) || e.classList.contains("displayNone") || "true" === e.getAttribute("aria-hidden")) return false;
  let t = window.getComputedStyle(e);
  return "none" !== t.display && "hidden" !== t.visibility;
}
function k(e) {
  return Array.from(document.querySelectorAll(".RCMFormField.attachmentField, .RCMFormField.rcmFormElement.attachmentField")).find((t) => {
    let r = t.querySelector(".rcmFormFieldLabel")?.textContent;
    return C(r, e);
  }) || null;
}
function T(e) {
  if (!e) return null;
  let t = Array.from(e.querySelectorAll('button, a, span[role="button"], div[role="button"], [title], [aria-label]'));
  return t.find((e10) => {
    let t2 = w([e10.textContent, e10.getAttribute("title"), e10.getAttribute("aria-label"), e10.getAttribute("onclick")].filter(Boolean).join(" "));
    return A(e10) && /delete|remove/.test(t2);
  }) || null;
}
function F(e) {
  return w([e.textContent, e.getAttribute("title"), e.getAttribute("aria-label"), e.getAttribute("id")].filter(Boolean).join(" "));
}
function I(e) {
  let t = k(e), r = t?.querySelector(".rcmFormFieldLabel"), n = t?.querySelector('[id$="_attach"]'), o2 = t?.querySelector('.attachActions [role="button"], .attachActions, [id$="_attachIcon"]') || null, i2 = t?.querySelector('[id$="_attachSuccess"]'), a2 = t?.querySelector('[id$="_attachDownloadLabel"]'), l2 = a2?.querySelector("a"), s2 = l2 || a2, u2 = T(t);
  return { container: t, label: r, actionButton: o2, attachButton: n, successIcon: i2, downloadLabel: a2, downloadLink: l2, uploadedFileName: s2, deleteButton: u2 };
}
function j() {
  let e = Array.from(document.querySelectorAll(".candidate_summary_details, .candidate_summary, .candProfileUpperRight")), t = e.find((e10) => {
    let t2 = F(e10);
    return t2.includes("cover letter") && (t2.includes("upload cover letter") || t2.includes("attach your cover letter") || t2.includes("cover letter is not on file"));
  }) || null;
  if (!t) return { container: null, actionButton: null };
  let r = Array.from(t.querySelectorAll('a[title="Upload Cover Letter"], a[aria-label="Upload Cover Letter"], a[id$="_uploadButton"][role="button"], a[role="button"]')).filter((e10) => {
    let t2 = F(e10);
    return t2.includes("upload cover letter") || t2.includes("attach your cover letter") || t2.includes("uploadbutton");
  }), n = r.find((e10) => e10.id.endsWith("_uploadButton")) || r.find((e10) => A(e10)) || null;
  return { container: t, actionButton: n };
}
function D() {
  let e = Array.from(document.querySelectorAll('input[type="file"], input[type="file"].fileUpload, input[type="file"][name="fileData1"]')).filter((e10) => e10.isConnected && !e10.disabled);
  return e.find((e10) => e10.classList.contains("fileUpload") || "fileData1" === e10.name) || e.at(-1) || null;
}
function P(e) {
  let t = k(e), r = t?.querySelector('input[type="file"]');
  return r || D();
}
function _() {
  return document.querySelector('button[title="Upload"][name="Upload"][type="button"]');
}
function L(e) {
  return (e || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function R(e, t) {
  let r = L(e);
  return "education" === t ? g.some((e10) => r.includes(L(e10))) : b.some((e10) => r.includes(L(e10)));
}
function O(e) {
  let t = e.querySelector(".rcmFormSectionTopBar")?.textContent || e.querySelector("h2")?.textContent || "", r = Array.from(e.querySelectorAll(".hiddenAriaContent[aria-label]")).map((e10) => e10.getAttribute("aria-label") || "").join(" ");
  return `${t} ${r}`;
}
function M(e) {
  let t = Array.from(document.querySelectorAll(".rcmFormSection"));
  return t.find((t2) => R(O(t2), e)) || null;
}
function N(e) {
  let t = document.querySelectorAll(".rcmFormSection").length > 0;
  return !t || !!M(e);
}
function $() {
  return Array.from(document.querySelectorAll(".rcmFormSection")).map((e) => O(e).replace(/\s+/g, " ").trim()).filter(Boolean);
}
function B(e) {
  let t = e.querySelectorAll(".rcmSectionComponent");
  if (t.length > 0) return t.length;
  let r = L(e.textContent);
  if (r.includes("there are no items in this section")) return 0;
  let n = Array.from(e.querySelectorAll("span")).map((e10) => e10.textContent || "");
  if (n.some((e10) => L(e10).includes("there are no items in this section"))) return 0;
  let o2 = n.find((e10) => /section\s+(?:with|has)\s+\d+\s+rows?/i.test(e10)), i2 = o2?.match(/section\s+(?:with|has)\s+(\d+)\s+rows?/i);
  return i2 ? parseInt(i2[1], 10) : null;
}
function q(e) {
  let t = M(e);
  return t ? t.querySelector('[id$="_addRowBtn"], .addRowButton, [role="button"][title="Add new row"]') : null;
}
function U(e) {
  return L([e.textContent, e.getAttribute("aria-label"), e.getAttribute("title")].filter(Boolean).join(" "));
}
function H(e, t) {
  let r = U(e);
  return !!r.includes("add") && R(r, t);
}
function Y(e) {
  let t = Array.from(document.querySelectorAll('a[role="button"]'));
  return t.find((t2) => H(t2, e)) || null;
}
function z(e) {
  let t = I(e);
  return !!t.actionButton && (t.actionButton.click(), true);
}
function V() {
  if (z(h)) return true;
  let e = j();
  return !!e.actionButton && (e.actionButton.click(), true);
}
async function W(e) {
  let t = await observer.waitForCondition(() => !!P(e), { timeout: 4e3, interval: 100, observeTarget: document.body });
  return t ? P(e) : null;
}
function getSuccessFactorsCoverLetterStatus() {
  let e = I(h), t = j(), r = !!e.container && (!!e.actionButton || !!e.attachButton || !!e.successIcon || !!e.downloadLabel), n = !!t.container && !!t.actionButton;
  return r || n ? "required" : "";
}
async function fillInputTextField(e, t) {
  try {
    if (!e) {
      console.warn("[fillInputTextField] Invalid input element");
      return;
    }
    let r = "Date Input" === e.getAttribute("aria-roledescription"), n = t;
    r && (n = y(t)), e.focus(), await delay.delay(100), e.value = "", v(e, "input"), await delay.delay(100), e.value = n, v(e, "input"), v(e, "change"), await delay.delay(100);
  } catch (e10) {
    console.warn("[fillInputTextField] Error:", e10);
  }
}
function X(e, t) {
  e.focus(), e.value = "";
  for (let r = 0; r < t.length; r++) {
    let n = t[r], o2 = t.slice(0, r + 1), i2 = 1 === n.length && /[a-zA-Z]/.test(n), a2 = i2 ? `Key${n.toUpperCase()}` : "Unidentified";
    e.dispatchEvent(new KeyboardEvent("keydown", { key: n, code: a2, bubbles: true, cancelable: true })), e.value = o2, e.dispatchEvent(new InputEvent("input", { data: n, inputType: "insertText", bubbles: true })), e.dispatchEvent(new KeyboardEvent("keyup", { key: n, code: a2, bubbles: true, cancelable: true }));
  }
}
function J(e) {
  return e ? Array.from(e.querySelectorAll("li")).filter((e10) => e10.textContent?.trim() !== "No Selection") : [];
}
function Q(e) {
  return e.trim().toLowerCase().replace(/\s+/g, " ");
}
function Z(e) {
  return Q(e).replace(/[^a-z0-9]/g, "");
}
let ee = [["unitedstates", "unitedstatesofamerica", "usa", "us"]];
function et(e) {
  return Q(e || "").includes("country");
}
function er(e, t) {
  let r = Z(e), n = Z(String(t));
  return !!r && !!n && ee.some((e10) => e10.includes(r) && e10.includes(n));
}
function en(e) {
  let t = String(e ?? "").trim();
  return t ? ee.some((e10) => e10.includes(Z(t))) ? [t, "USA", "United States", "United States of America", "US"].map((e10) => e10.trim()).filter((e10, t2, r) => {
    if (!e10) return false;
    let n = Z(e10);
    return r.findIndex((e11) => Z(e11) === n) === t2;
  }) : [t] : [];
}
function eo(e, t, r = {}) {
  let n = String(t).trim();
  if (!e.trim() || !n) return false;
  let o2 = Q(e), i2 = Q(n);
  return e === n || o2 === i2 || Z(e) === Z(n) || true === r.allowCountryAliases && er(e, t);
}
function ei(e, t, r = false) {
  let n = e.querySelector("a")?.textContent?.trim() || e.textContent?.trim() || "";
  return eo(n, t, { allowCountryAliases: r });
}
function ea(e, t) {
  let r = eo(e.value || "", t, { allowCountryAliases: true }), n = e.getAttribute("title") || "";
  return n.trim() ? r && eo(n, t, { allowCountryAliases: true }) : r;
}
function el(e) {
  let t = e.querySelector("a");
  (t || e).click();
}
function es(e) {
  return e instanceof HTMLInputElement && !!e.closest(".sfCascadingPicklist");
}
async function eu(e, t, r = [String(t ?? "").trim()], n = false) {
  let o2 = r.filter(Boolean);
  if (0 === o2.length) return [];
  for (let r2 of o2) {
    e.click(), await delay.delay(200), X(e, r2);
    let o3 = 8;
    for (let r3 = 0; r3 < o3; r3++) {
      await delay.delay(400);
      let r4 = e.getAttribute("aria-owns"), o4 = (r4 ? document.getElementById(r4) : null) || document.querySelector('[role="listbox"]'), i2 = J(o4), a2 = /^\d+$/.test(String(t ?? "").trim());
      if (i2.length > 0 && (a2 || i2.some((e10) => ei(e10, t, n)))) return i2;
    }
  }
  return [];
}
async function ec(e, t) {
  el(t), await delay.delay(200), e.dispatchEvent(new Event("change", { bubbles: true })), e.dispatchEvent(new Event("blur", { bubbles: true }));
}
async function ed(e, t) {
  let r = 5;
  for (let n = 0; n < r; n++) {
    if (ea(e, t)) return true;
    await delay.delay(200);
  }
  return ea(e, t);
}
function ef(e, t, r) {
  e.value = t, e.title = r, e.dispatchEvent(new Event("input", { bubbles: true })), e.dispatchEvent(new Event("change", { bubbles: true })), e.dispatchEvent(new Event("blur", { bubbles: true }));
}
async function fillCountryCombobox(e, t) {
  if (!e || !t?.trim()) return false;
  let r = String(t).trim(), n = e.value, o2 = e.getAttribute("title") || "";
  if (ea(e, r)) return true;
  let i2 = en(r), a2 = null, l2 = 8;
  for (let t2 of i2) {
    e.click(), await delay.delay(200), X(e, t2), await delay.delay(1e3);
    for (let t3 = 0; t3 < l2; t3++) {
      await delay.delay(400);
      let t4 = e.getAttribute("aria-owns");
      if (t4 && (a2 = document.getElementById(t4)), a2 || (a2 = document.querySelector('[role="listbox"]')), a2) {
        let t5 = J(a2);
        if (t5.length > 0) {
          let i3 = t5.find((e10) => ei(e10, r, true));
          if (i3) {
            if (await ec(e, i3), await ed(e, r)) return true;
            return console.warn("[fillCountryCombobox] Exact option did not commit:", r), ef(e, n, o2), false;
          }
        }
      }
    }
  }
  return ef(e, n, o2), console.warn("[fillCountryCombobox] No exact Country option found:", r), false;
}
async function fillSelectField(e, t) {
  let r = e.$input, n = Array.isArray(t) ? t[0] : t, o2 = et(e.label), i2 = r.getAttribute("aria-owns");
  if (!i2) {
    let e10 = Array.from(r.options).filter((e11) => (e11.textContent?.trim() || e11.value) && !e11.disabled), t2 = "number" == typeof n || "string" == typeof n && /^\d+$/.test(String(n).trim());
    if (t2 && e10.length > 0) {
      let t3 = "number" == typeof n ? n : parseInt(String(n).trim(), 10), o3 = t3 - 1;
      if (o3 >= 0 && o3 < e10.length) return r.selectedIndex = e10[o3].index, r.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(200), true;
    }
    for (let t3 of e10) {
      let e11 = t3.textContent?.trim() || "", i3 = t3.value || e11;
      if (eo(e11, n, { allowCountryAliases: o2 }) || eo(i3, n, { allowCountryAliases: o2 })) return r.value = t3.value, r.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(200), true;
    }
    return console.warn("[fillSelectField] Native select: no matching option for:", n), false;
  }
  r.focus();
  let a2 = document.getElementById(i2), l2 = J(a2), s2 = es(r);
  if (0 === l2.length && r instanceof HTMLInputElement && (l2 = await eu(r, n, o2 ? en(n) : [String(n ?? "").trim()], o2)), 0 === l2.length) return console.warn("[fillSelectField] Options list did not appear or was empty"), false;
  let c2 = "number" == typeof n || "string" == typeof n && /^\d+$/.test(n.trim());
  if (c2) {
    let e10 = "number" == typeof n ? n : parseInt(String(n).trim(), 10), t2 = e10 - 1;
    if (t2 >= 0 && t2 < l2.length) {
      let e11 = l2[t2];
      return s2 && r instanceof HTMLInputElement ? await ec(r, e11) : (el(e11), await delay.delay(200)), true;
    }
  }
  for (let e10 of l2) if (ei(e10, n, o2)) {
    if (s2 && r instanceof HTMLInputElement) {
      if (await ec(r, e10), o2) return await ed(r, String(n ?? "").trim());
    } else el(e10), await delay.delay(200);
    return true;
  }
  return console.warn("[fillSelectField] No matching option found for:", n), !o2 && !!(s2 && r instanceof HTMLInputElement) && (await ec(r, l2[0]), true);
}
async function fillCheckboxField(e, t) {
  let r = e.$input, n = Array.isArray(t) ? t[0] : t, o2 = true === n || "Yes" === n || "true" === n || "yes" === String(n).toLowerCase();
  r.checked !== o2 && (r.click(), await delay.delay(100));
}
async function fillRadioGroupFiled(e, t) {
  let r = String(Array.isArray(t) ? t[0] : t).trim();
  if (!r) return;
  let n = Array.from(e.$radioParent.querySelectorAll("li[class='fd-form-item fd-form-item--compact'], .checkbox_column, .globalRadio.sfRadioInputField"));
  for (let e10 of n) {
    let t2 = e10.querySelector("label, .radioLabel")?.textContent?.trim() || "";
    if (t2 === r || e10.id === r) {
      let t3 = e10.querySelector("input"), r2 = e10.querySelector('[role="radio"], .radioCheck');
      (t3 || r2 || e10).click(), await delay.delay(100);
      return;
    }
  }
}
function eb(e, t = 1e4) {
  return new Promise((r, n) => {
    let o2 = document.querySelector(e);
    if (o2) return r(o2);
    let i2 = new MutationObserver(() => {
      let t2 = document.querySelector(e);
      t2 && (i2.disconnect(), r(t2));
    });
    i2.observe(document.body, { childList: true, subtree: true }), setTimeout(() => {
      i2.disconnect(), n(Error(`Element "${e}" not found within ${t}ms`));
    }, t);
  });
}
async function ey(e, t = 5e3, r = 200) {
  let n = Date.now();
  for (; Date.now() - n < t; ) {
    let t2 = document.querySelector(e);
    if (!t2) return;
    await delay.delay(r);
  }
  console.warn(`[uploadResume] Element "${e}" still present after ${t}ms`);
}
async function ev() {
  try {
    let e = await eb('button[title="Overwrite Profile"], button[title="Overwrite Profile"][type="button"]', 8e3);
    e.click(), await delay.delay(500), await ey('div[class="globalPortletBodyBackground"]', 5e3);
  } catch (e) {
    console.warn("[uploadResume] Overwrite button not found or timed out:", e);
  }
}
async function ew(e, t, r, n) {
  let a2 = await answerMethods.fetchPdfAsBlob(t);
  await dom.uploadFiles(e, a2, r, n, "Resume/CV");
  let l2 = document.querySelector('button[title="Upload"][name="Upload"][type="button"]');
  l2 ? (l2.click(), await ev()) : console.warn("[uploadResume] Upload button not found, cannot trigger upload");
}
function eS() {
  let e = document.querySelector('a[aria-label="Upload Resume"][title="Upload Resume"], span[aria-label="Update Resume"]');
  if (e) return e;
  let t = Array.from(document.querySelectorAll("div.attachActions")), r = t.find((e10) => e10.textContent?.toLowerCase().includes("upload a resume"));
  return r || null;
}
function hasSuccessFactorsResumeUploadSurface() {
  return !!k(m) || !!eS();
}
async function uploadResume(e, t, r) {
  if (k(m)) {
    let n2 = z(m);
    if (!n2) {
      console.warn("[uploadResume] Resume attachment action button not found");
      return;
    }
    let o3 = await W(m);
    if (!o3) {
      console.warn("[uploadResume] Resume attachment file input not found");
      return;
    }
    await ew(o3, e, t, r);
    return;
  }
  let n = document.querySelector('input[type="file"]');
  if (n) {
    await ew(n, e, t, r);
    return;
  }
  let o2 = eS();
  if (!o2) {
    console.warn("[uploadResume] Upload Resume button not found");
    return;
  }
  o2.click(), await delay.delay(1e3);
  let i2 = document.querySelector('button[title="Overwrite Profile"]');
  i2 && (i2.click(), await delay.delay(500), await ey('div[class="globalPortletBodyBackground"]', 5e3));
  let a2 = 0, l2 = 6;
  for (; !n && a2 < l2; ) {
    let e10 = Array.from(document.querySelectorAll("span")), t2 = e10.find((e11) => e11.textContent?.trim() === "Upload from Device");
    if (t2) {
      let e11 = t2.nextElementSibling;
      for (; e11; ) {
        let t3 = e11.querySelector('input[type="file"][class="fileUpload"]');
        if (t3) {
          n = t3;
          break;
        }
        e11 = e11.nextElementSibling;
      }
    }
    n || (n = document.querySelector('input[type="file"][name="fileData1"]')), !n && (await delay.delay(500), a2++);
  }
  if (!n) {
    console.warn("[uploadResume] File input not found after waiting");
    return;
  }
  await ew(n, e, t, r);
}
async function uploadCoverLetter(e, t, r) {
  let n = getSuccessFactorsCoverLetterStatus();
  if ("required" !== n) return console.warn("[successfactors][Cover Letter] attachment slot is not ready"), false;
  let a2 = V();
  if (!a2) return console.warn("[successfactors][Cover Letter] attach action button not found"), false;
  let l2 = await W(h);
  if (!l2) return console.warn("[successfactors][Cover Letter] file input not found"), false;
  await dom.uploadFiles(l2, await answerMethods.fetchCoverLetterPdfAsBlob(e), t, r, "Cover Letter");
  let s2 = _();
  return s2 ? (s2.click(), await ev(), true) : (console.warn("[successfactors][Cover Letter] upload button not found"), false);
}
function eA() {
  return document.querySelector("div.profileLowerLayout");
}
function ek(e) {
  let t = eA();
  if (!t) return null;
  let r = Array.from(t.querySelectorAll(".sfCollapse.fd-panel, .sfCollapse, .fd-panel, div[aria-label]"));
  return r.find((t2) => {
    let r2 = t2.getAttribute("aria-label") || t2.querySelector("h2, [role='heading']")?.textContent || "";
    return E(r2, e);
  }) || null;
}
function eT(e) {
  let t = Array.from(e.querySelectorAll(".hiddenAriaContent[aria-label]")).map((e10) => e10.getAttribute("aria-label")), r = (e.getAttribute("aria-labelledby") || "").split(/\s+/).map((e10) => document.getElementById(e10)?.textContent);
  return [e.getAttribute("aria-label"), e.getAttribute("title"), e.textContent, ...r, ...t].filter(Boolean).join(" ");
}
function eF(e) {
  return "education" === e ? g : b;
}
function eI(e, t, r) {
  let n = "delete" === r ? ["delete", "remove"] : ["add", "add another"];
  return Array.from(e.querySelectorAll('a[role="button"], button, [role="button"]')).filter((e10) => {
    let r2 = eT(e10);
    return E(r2, t) && E(r2, n);
  });
}
function ej(e, t) {
  let r = M(e);
  return r ? eI(r, eF(e), t) : [];
}
function eD(e) {
  return "education" === e ? e1 : e3;
}
function eP(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function e_(e) {
  return (e?.textContent || "").replace(/\s+/g, " ").trim();
}
function eL(e) {
  return L(e).replace(/\*/g, "").replace(/\s*:\s*$/g, "").trim();
}
function eR(e, t) {
  let r = eL(e);
  return t.some((e10) => r === eL(e10));
}
function eO(e) {
  let t = e?.querySelector("input, textarea, select");
  return t ? "checkbox" === t.type ? t.checked ? "true" : "" : String(t.value || "").trim() : "";
}
function eM(e, t) {
  let r = Array.from(e.querySelectorAll("tr"));
  for (let e10 of r) {
    let r2 = Array.from(e10.querySelectorAll("th, td"));
    if (r2.length < 2) continue;
    let n = e_(r2[0]);
    if (!eR(n, t)) continue;
    let o2 = eO(r2[1]);
    if (o2) return o2;
    let i2 = r2[1].querySelector("[title]"), a2 = i2?.getAttribute("title")?.trim();
    if (a2) return a2;
    return e_(r2[1]);
  }
  return "";
}
function eN(e, t) {
  let r = t.map(eP).join("|"), n = ["Start Date", "From Date", "End Date", "Company Name", "Company", "Employer", "Organization", "Type of Business", "Title", "Job Title", "Position", "Function", "Country", "State", "City"], o2 = n.map(eP).join("|"), i2 = e.match(RegExp(`(?:^|\\s)(?:${r})\\s*:?\\s*(.*?)\\s*(?=(?:${o2})\\s*:?|$)`, "i"));
  return i2?.[1]?.trim() || "";
}
function e$(e, t) {
  let r = eM(e, t);
  return r || eN(e_(e), t);
}
function eB(e) {
  return { company: e$(e, ["Company Name", "Company", "Employer", "Organization"]), text: e_(e), title: e$(e, ["Title", "Job Title", "Position"]) };
}
function eq() {
  let e = M("experience");
  if (e) {
    let t2 = Array.from(e.querySelectorAll(".rcmSectionComponent"));
    if (t2.length > 0) return t2;
  }
  let t = ek(b);
  if (!t) return [];
  let r = Array.from(t.querySelectorAll('[id*="NEW_ROW"]')).filter((e10) => e10.querySelector('[id$="_fieldsLayout"], table[role="presentation"]'));
  if (r.length > 0) return r;
  let n = Array.from(t.querySelectorAll('[id$="_fieldsLayout"], table[role="presentation"]')), o2 = /* @__PURE__ */ new Set();
  for (let e10 of n) o2.add(e10.closest('[id*="NEW_ROW"], [id$="_row"], .bg_info.bgElem, .bg_info') ?? e10);
  return Array.from(o2);
}
function captureSuccessFactorsExperienceRows() {
  return { count: eq().length };
}
function eH(e) {
  let t = L(e);
  return !!t && ["project", "portfolio", "capstone", "codelens", "metropulse", "notepad", "review assistant", "dashboard", "workspace"].some((e10) => t.includes(e10));
}
function eY(e) {
  let t = L(e);
  return !t || "no selection" === t || "unspecified" === t || "unknown" === t || "n/a" === t || "not applicable" === t;
}
function ez(e) {
  let t = eY(e.company), r = eH(e.company), n = eY(e.title), o2 = eH(e.title);
  return (!!t || !!r || !!n || !!o2) && (t ? eH([e.title, e.text].join(" ")) : r && n || o2);
}
function eV(e) {
  let t = Array.from(e.querySelectorAll('a[role="button"], button, [role="button"]'));
  return t.find((e10) => E(eT(e10), ["delete", "remove"])) || null;
}
async function cleanupSuccessFactorsParsedExperienceRows(e) {
  try {
    await observer.waitForCondition(() => eq().length !== e.count, { timeout: 1500, interval: 150, observeTarget: document.body });
    let t = eq();
    for (let e10 = t.length - 1; e10 >= 0; e10 -= 1) {
      let r = eB(t[e10]);
      if (!ez(r)) continue;
      let n = eV(t[e10]);
      n && (n.click(), await delay.delay(300));
    }
  } catch (e10) {
    console.warn("[successfactors][resume-parser-cleanup] failed to clean parsed Work History rows", e10);
  }
}
async function eG(e, t, r = 3e3) {
  let n = Date.now();
  for (; Date.now() - n < r; ) {
    let r2 = e();
    if (r2 < t) return r2;
    await delay.delay(500);
  }
  return e();
}
async function eK(e, t) {
  if (!M(e)) return false;
  let r = eD(e), n = r();
  for (; n > t; ) {
    let t2 = ej(e, "delete"), o2 = t2.at(-1);
    if (!o2) {
      console.warn(`[reduceRepeatableSectionRows] No delete button found for ${e}`);
      break;
    }
    o2.click();
    let i2 = await eG(r, n);
    if (i2 >= n) {
      console.warn(`[reduceRepeatableSectionRows] ${e} count did not decrease after click, breaking loop`);
      break;
    }
    n = i2;
  }
  return true;
}
async function preclickAddButtons() {
  let e = N("education"), t = N("experience");
  if (console.info("[SuccessFactors][preclickAddButtons] repeatable gate", JSON.stringify({ structuredSectionCount: document.querySelectorAll(".rcmFormSection").length, structuredSectionLabels: $(), shouldHandleEducation: e, shouldHandleExperience: t })), e && (await eJ(), await delay.delay(300)), t && (await eQ(), await delay.delay(300)), e) {
    let e10 = e1();
    e10 < 1 && (await e5(), await delay.delay(300));
  }
  if (t) {
    let e10 = e3();
    e10 < 1 && (await e6(), await delay.delay(300));
  }
}
async function eJ() {
  let e = await eK("education", 0);
  if (e) return;
  let t = eA();
  if (!t) {
    console.warn("[deleteEducationSections] profileLowerLayout not found");
    return;
  }
  let r = ek(g), n = r ? eI(r, g, "delete") : eI(t, g, "delete");
  if (0 === n.length) {
    console.warn("[deleteEducationSections] No delete buttons found, trying XPath...");
    let e10 = `
      //span[contains(@class, "hiddenAriaContent")
             and contains(@aria-label, "Education")]
      /parent::*[contains(translate(@title, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "delete")]
    `, t2 = xpath.getFirstOrderedNode(e10);
    t2 && (n = [t2]);
  }
  if (0 === n.length) {
    console.warn("[deleteEducationSections] No delete buttons found after XPath");
    return;
  }
  for (let e10 of n) e10.click(), await delay.delay(300);
}
async function eQ() {
  let e = await eK("experience", 0);
  if (e) return;
  let t = eA();
  if (!t) {
    console.warn("[deleteExperienceSections] profileLowerLayout not found");
    return;
  }
  let r = ek(b), n = r ? eI(r, b, "delete") : eI(t, b, "delete");
  if (0 === n.length) {
    console.warn("[deleteExperienceSections] No delete buttons found, trying XPath...");
    let e10 = `
      //span[contains(@class, "hiddenAriaContent")
             and contains(@aria-label, "Work Experience")]
      /parent::*[contains(translate(@title, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "delete")]
    `, t2 = xpath.getFirstOrderedNode(e10);
    t2 && (n = [t2]);
  }
  if (0 === n.length) {
    console.warn("[deleteExperienceSections] No delete buttons found after XPath");
    return;
  }
  for (let e10 of n) e10.click(), await delay.delay(300);
}
function eZ(e) {
  let t = e?.replace(/\s+/g, " ").match(/(?:section\s+has|section\s+with)\s+(\d+)\s+rows?/i);
  return t ? parseInt(t[1], 10) : null;
}
function e0(e) {
  let t = ek(e);
  if (!t) return null;
  let r = eZ(t.textContent);
  if (null !== r) return r;
  let n = t.querySelectorAll('[id$="_fieldsLayout"], table[role="presentation"]');
  return n.length > 0 ? n.length : null;
}
function e2(e) {
  let t = Array.from(document.querySelectorAll("span.hiddenAriaContent, span[id$='_noItems']"));
  for (let r of t) {
    let t2 = r.textContent?.replace(/\s+/g, " ").trim() || "", n = t2.toLowerCase(), o2 = e.some((e10) => n.includes(e10));
    if (!o2) continue;
    let i2 = eZ(t2);
    if (null !== i2) return i2;
  }
  return null;
}
function e1() {
  let e = M("education"), t = e ? B(e) : null;
  if (null !== t) return t;
  let r = document.querySelector("#education, #educationNA");
  if (r) {
    let e10 = r.children.length;
    return e10;
  }
  let n = e0(g);
  if (null !== n) return n;
  let o2 = e2(g);
  if (null !== o2) return o2;
  console.warn("[countEducationSections] Education container not found, trying h2 search...");
  let i2 = Array.from(document.querySelectorAll("h2")), a2 = i2.find((e10) => e10.textContent?.toLowerCase().includes("education"));
  if (a2 && a2.nextElementSibling) {
    let e10 = a2.nextElementSibling.querySelectorAll("span");
    for (let t2 of e10) {
      let e11 = t2.textContent?.trim(), r2 = eZ(e11);
      if (null !== r2) return r2;
    }
  }
  return console.warn("[countEducationSections] Unable to extract count from XPath"), 0;
}
function e3() {
  let e = M("experience"), t = e ? B(e) : null;
  if (null !== t) return t;
  let r = document.querySelector("#outsideWorkExperience, #outsideWorkExperienceNA");
  if (r) {
    let e10 = r.children.length;
    return e10;
  }
  let n = e0(b);
  if (null !== n) return n;
  let o2 = e2(b);
  if (null !== o2) return o2;
  console.warn("[countExperienceSections] Experience container not found, trying h2 search...");
  let i2 = Array.from(document.querySelectorAll("h2")), a2 = i2.find((e10) => {
    let t2 = e10.textContent?.toLowerCase() || "";
    return t2.includes("experience") || t2.includes("employ") || t2.includes("work history");
  });
  if (a2 && a2.nextElementSibling) {
    let e10 = a2.nextElementSibling.querySelectorAll("span");
    for (let t2 of e10) {
      let e11 = t2.textContent?.trim(), r2 = eZ(e11);
      if (null !== r2) return r2;
    }
  }
  return console.warn("[countExperienceSections] Unable to extract count from XPath"), 0;
}
async function e4(e, t, r = 3e3) {
  let n = Date.now();
  for (; Date.now() - n < r; ) {
    let r2 = e();
    if (r2 > t) return r2;
    await delay.delay(500);
  }
  return e();
}
async function e5() {
  let e = q("education"), t = `
      //span[contains(@class, "hiddenAriaContent")
             and contains(@aria-label, "Education")]
      /parent::*[contains(translate(@title, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "add")]
    `;
  (e = e || xpath.getFirstOrderedNode(t)) || (e = Y("education")), e ? e.click() : console.warn("[addEducationSection] Add button not found");
}
async function e6() {
  let e = q("experience");
  if (e || (e = Y("experience")), !e) {
    let t = `
      //span[contains(@class, "hiddenAriaContent")
             and contains(@aria-label, "Work Experience")]
      /parent::*[contains(translate(@title, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "add")]
    `;
    e = xpath.getFirstOrderedNode(t);
  }
  e ? e.click() : console.warn("[addExperienceSection] Add button not found");
}
async function expandForm(e) {
  let t = Array.isArray(e.education) ? e.education.length : 0;
  t > 0 && await eK("education", t);
  let r = e1();
  for (; r < t; ) {
    await e5();
    let e10 = await e4(e1, r);
    if (e10 <= r) {
      console.warn("[expandForm] Education count did not increase after click, breaking loop");
      break;
    }
    r = e10;
  }
  let n = Array.isArray(e.workExperience) ? e.workExperience.length : 0;
  n > 0 && await eK("experience", n);
  let o2 = e3();
  for (; o2 < n; ) {
    await e6();
    let e10 = await e4(e3, o2);
    if (e10 <= o2) {
      console.warn("[expandForm] Experience count did not increase after click, breaking loop");
      break;
    }
    o2 = e10;
  }
}
async function preFillForm() {
  await delay.delay(500);
}
async function fillSkills(e) {
  try {
    let t = Array.from(document.querySelectorAll("h2")), r = t.find((e10) => e10.textContent?.toLowerCase().includes("skill"));
    if (!r) return;
    let n = r.nextElementSibling;
    if (!n) return;
    let o2 = n.querySelector("ui5-input-xweb-skill-profiler");
    if (!o2 || !o2.shadowRoot) return;
    let i2 = o2.shadowRoot.querySelector('input[type="text"]');
    if (!i2) return;
    let a2 = e?.skills || [];
    for (let e10 of a2) {
      i2.focus(), await delay.delay(100), i2.value = e10, i2.dispatchEvent(new Event("input", { bubbles: true })), await delay.delay(500);
      let t2 = o2.querySelector("ui5-suggestion-item-xweb-skill-profiler");
      if (t2) {
        let e11 = t2.shadowRoot.querySelector("span");
        e11.click(), await delay.delay(200);
      } else console.warn(`[fillSkills] No suggestion found for skill: ${e10}`);
    }
  } catch (e10) {
    console.error("[fillSkills] Error:", e10);
  }
}
function submitHandler(e, t = {}) {
  let r = rules.getFormSnapshot(), n = rules.getAdditionalFormSnapshotData();
  autofillAnswerPairTracking.sendAutofillAnswerPairEvent({ formUrl: urlStore.useUrlStore.getState().currentTabUrl, autofillSnapshot: e, submitSnapshot: r, additionalAutofillData: t, additionalSubmitData: n, source: "successfactors" });
}

export {
  captureSuccessFactorsExperienceRows,
  cleanupSuccessFactorsParsedExperienceRows,
  expandForm,
  fillCheckboxField,
  fillCountryCombobox,
  fillInputTextField,
  fillRadioGroupFiled,
  fillSelectField,
  fillSkills,
  getSuccessFactorsCoverLetterStatus,
  hasSuccessFactorsResumeUploadSurface,
  preFillForm,
  preclickAddButtons,
  submitHandler,
  uploadCoverLetter,
  uploadResume,
}
