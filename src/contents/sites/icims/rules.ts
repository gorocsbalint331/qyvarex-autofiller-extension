// @ts-nocheck
/**
 * iCIMS form rule extraction, page detection, and snapshots.
 */

import * as lodash from "lodash-es";
import * as constants from "../../../constants.ts";
import * as enums from "../../../core/enums.js";
import * as xpath from "../../../core/xpath.js";
import * as educationItemTrace from "../education-item-trace.js";
import * as icimsAnswer from "./answer.ts";
import * as createLogin from "./create-login.ts";
import * as snapshotAlignment from "./snapshot-alignment.js";
import * as utils from "./utils.js";
export const IcimsPageType = {
  EMAIL_ENTRY: "email-entry",
  PACKET: "packet",
  PROFILE: "profile",
  QUESTION: "question",
  LEGACY: "legacy"
};
let m = [[IcimsPageType.EMAIL_ENTRY, 'form#enterEmailForm input[type="email"]'], [IcimsPageType.PACKET, 'form.iCIMS_FormMainStyle input[name="form"][value*="template"], form.iCIMS_FormMainStyle input[name="isPacket"][value="1"]'], [IcimsPageType.PROFILE, "[role='group'] h2.iCIMS_SubHeader, [role='group'] #iCIMS_BasicProfilePane_Title"], [IcimsPageType.QUESTION, ".iCIMS_TableRow, table.iCIMS_dependentGroupTable"], [IcimsPageType.LEGACY, "fieldset.group"]];
export function detectIcimsPageType() {
  for (let [e, t] of m) if (document.querySelector(t)) return e;
  return null;
}
let g = { [IcimsPageType.EMAIL_ENTRY]: ts, [IcimsPageType.PACKET]: rb, [IcimsPageType.PROFILE]: ry, [IcimsPageType.QUESTION]: rv, [IcimsPageType.LEGACY]: rw }, b = `@role="button" and ${xpath.getXpathContainsText("add more")} and ${xpath.getXpathContainsText("education")}`;
export const EDUCATION_CONTAINER_XPATH = `//div[@role="group" and child::h2[
contains(
translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
'education'
)
and not(
contains(
translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
'skills'
)
)
]] | //a[${b}]/ancestor::div[contains(@class, 'iCIMS_CollectionContainer')][1]/parent::*`;
export const EMPLOYMENT_CONTAINER_XPATH = `//div[@role="group" and child::h2[
(
contains(
translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
'experience'
)
or contains(
translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
'employment'
)
or contains(
translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
'work history'
)
)
and not(
contains(
translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
'preference'
)
)
]]`;
export const SECTION_SNAPSHOT_XPATH = ".//fieldset[contains(@class, 'iCIMS_CollectionGroup')]";
export const LEGACY_SECTION_SNAPSHOT_XPATH =
  ".//table[contains(@class, 'iCIMS_groupLoopTable')] | .//div[contains(@class, 'icims_group_loop') and @data-group-loop-name]"
let E =
  "@data-group-loop='Education' or @data-group-loop='Education_GL'"
let x =
  "@data-group-loop='WorkExperience' or @data-group-loop='WorkExperience_GL'"
export const EDUCATION_ADD_BUTTON_XPATH = `.//a[${b}] | .//input[@type='submit' and (${E}) and contains(@class, 'group-loop-add')]`
export const EMPLOYMENT_ADD_BUTTON_XPATH = `.//a[@role="button" and contains(text(), "Add More")] | .//input[@type='submit' and (${x}) and contains(@class, 'group-loop-add')]`
export const EDUCATION_REMOVE_BUTTON_XPATH = `.//div[contains(@class, 'RemoveButton')]//a[@role='button'] | .//input[@type='submit' and (${E}) and contains(@class, 'group-loop-remove')]`
export const EMPLOYMENT_REMOVE_BUTTON_XPATH = `.//div[contains(@class, 'RemoveButton')]//a[@role='button'] | .//input[@type='submit' and (${x}) and contains(@class, 'group-loop-remove')]`
let F = "form.iCIMS_FormMainStyle"
let I = "table.iCIMS_dependentGroupTable"
let j = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let D = "abcdefghijklmnopqrstuvwxyz"
let P = `//table[
  contains(@class, 'iCIMS_groupLoopTable')
  and (
    contains(translate(@id, '${j}', '${D}'), 'education')
    or contains(translate(@id, '${j}', '${D}'), 'school')
  )
] | //div[
  contains(@class, 'icims_group_loop')
  and (
    translate(@data-group-loop-name, '${j}', '${D}') = 'education'
    or translate(@data-group-loop-name, '${j}', '${D}') = 'education_gl'
  )
]`
let _ = `//table[
  contains(@class, 'iCIMS_groupLoopTable')
  and (
    contains(translate(@id, '${j}', '${D}'), 'workexperience')
    or contains(translate(@id, '${j}', '${D}'), 'employment')
    or contains(translate(@id, '${j}', '${D}'), 'workhistory')
  )
] | //div[
  contains(@class, 'icims_group_loop')
  and (
    contains(translate(@data-group-loop-name, '${j}', '${D}'), 'workexperience')
    or contains(translate(@data-group-loop-name, '${j}', '${D}'), 'employment')
    or contains(translate(@data-group-loop-name, '${j}', '${D}'), 'workhistory')
  )
]`
export const normalizeWhitespace = utils.normalizeIcimsWhitespace
let R = /* @__PURE__ */ new Set([
  "SCRIPT",
  "STYLE",
  "TEMPLATE",
  "NOSCRIPT",
])
function O(e) {
  let t = e.getAttribute("style") ?? "";
  if (/display\s*:\s*none/i.test(t) || /visibility\s*:\s*hidden/i.test(t)) return true;
  let r = e.style;
  return r?.display === "none" || r?.visibility === "hidden";
}
function M(e) {
  let t = e.tagName?.toUpperCase();
  if (t && R.has(t)) return true;
  let r = "function" == typeof e.hasAttribute && e.hasAttribute("hidden");
  return r || "true" === e.getAttribute("aria-hidden") || e.classList.contains("iCIMS_NoDisplay") || O(e);
}
function N(e) {
  Array.from(e.querySelectorAll("*")).forEach((e10) => {
    e10 instanceof HTMLElement && M(e10) && e10.remove();
  });
}
function $(e, t = "") {
  if (!e) return "";
  if ("function" != typeof e.cloneNode) return normalizeWhitespace(e.textContent);
  let r = e.cloneNode(true);
  return N(r), t && r.querySelectorAll(t).forEach((e10) => {
    e10.remove();
  }),
  normalizeWhitespace(r.textContent);
}
function B(e) {
  if (!e) return "";
  if (e.nodeType === Node.TEXT_NODE) return normalizeWhitespace(e.textContent);
  if (e.nodeType !== Node.ELEMENT_NODE) return "";
  let t = e;
  return M(t) ? "" : $(t);
}
function q(e) {
  let t = normalizeWhitespace(e).toLowerCase();
  return !!t && t.includes("education") && !t.includes("skills");
}
function U(e) {
  let t = normalizeWhitespace(e).toLowerCase();
  return !(!t || t.includes("preference")) && /(professional|work|employment)?\s*(experience|history)/i.test(t);
}
let H = {
  key: "education",
  label: "Education",
  fieldType: enums.FIELD_TYPE.EDUCATION,
  containerXpath: EDUCATION_CONTAINER_XPATH,
  legacySectionXpath: P,
  legacyGroupLoopName: "Education",
  addButtonXpath: EDUCATION_ADD_BUTTON_XPATH,
  removeButtonXpath: EDUCATION_REMOVE_BUTTON_XPATH,
  matchesTitle: q,
}
let Y = {
  key: "employment",
  label: "Employment",
  fieldType: enums.FIELD_TYPE.EMPLOYMENT,
  containerXpath: EMPLOYMENT_CONTAINER_XPATH,
  legacySectionXpath: _,
  legacyGroupLoopName: "WorkExperience",
  addButtonXpath: EMPLOYMENT_ADD_BUTTON_XPATH,
  removeButtonXpath: EMPLOYMENT_REMOVE_BUTTON_XPATH,
  matchesTitle: U,
}
let z = utils.isVisibleIcimsElement
function V() {
  let e = document.querySelector(F);
  if (!e) return null;
  let t = e.querySelector('input[name="form"][value*="template"]'), r = e.querySelector('input[name="isPacket"][value="1"]');
  return t || r ? e : null;
}
function W(e) {
  let t = e.querySelector('input[name="form"]'), r = e.querySelector('input[name="selected"]');
  return normalizeWhitespace(t?.value || r?.value).toLowerCase();
}
function G(e) {
  let t = normalizeWhitespace(e).replace(/^icims_f_/i, "").replace(/[_-]+/g, " ");
  return t ? t.replace(/\b\SECTION_SNAPSHOT_XPATH/g, (e10) => e10.toUpperCase()) : "";
}
function K(e) {
  let t = Array.from(e.querySelectorAll('p[align="center"] strong')).map((e10) => normalizeWhitespace(e10.textContent)).filter(Boolean), r = t.find((e10) => icimsAnswer.isIcimsPacketSemanticTitle(e10));
  return r || t.at(-1) || "";
}
function X(e, t, r = "") {
  return icimsAnswer.resolveIcimsPacketLabel(e, t, r) || t || G(r);
}
function J(e, t) {
  let r = 0;
  for (let n2 of Array.from(e.cells)) {
    let e10 = n2.colSpan || 1, o = r, i2 = r + e10 - 1;
    if (n2 === t) return { start: o, end: i2 };
    r = i2 + 1;
  }
  return null;
}
function Q(e, t) {
  let r = 0;
  for (let n2 of Array.from(e.cells)) {
    let e10 = n2.colSpan || 1, o = r, i2 = r + e10 - 1;
    if (t >= o && t <= i2) return n2;
    r = i2 + 1;
  }
  return null;
}
function Z(e) {
  let t = e.closest("td, th"), r = t?.parentElement;
  if (!t || !r) return "";
  let n2 = J(r, t);
  if (!n2) return "";
  let o = r.previousElementSibling;
  for (; o; ) {
    let e10 = Q(o, n2.start), t10 = $(e10);
    if (t10) return t10;
    o = o.previousElementSibling;
  }
  return "";
}
function ee(e) {
  let t = e.closest("td, th");
  return t ? $(t, "input, select, textarea, button, .iCIMS_Forms_DateOnlyField").replace(/[:\uff1a]\s*$/, "") : "";
}
export function getSectionSnapshots(e) {
  if (!e) return [];
  let t = xpath.getOrderedNodes(SECTION_SNAPSHOT_XPATH, e);
  return t.length > 0 ? t : xpath.getOrderedNodes(LEGACY_SECTION_SNAPSHOT_XPATH, e);
}
function er(e) {
  return e.filter((e10) => t5(e10).length > 0);
}
function en(e) {
  let t = er(e);
  return 0 === t.length ? e : t.filter((e10) => !t.some((t10) => t10 !== e10 && e10.contains(t10)));
}
function eo(e) {
  let t = e.querySelector("[data-collection]"), r = t?.dataset.collection?.trim();
  if (r) return r;
  let n2 = String(e.className || ""), o = n2.match(/\b([EMPLOYMENT_ADD_BUTTON_XPATH-Za-z0-9]+)-\d+-Container\b/);
  return o?.[1] ?? "";
}
function ei() {
  let e = xpath.getFirstOrderedNode(`//a[${b}]`, document), t = e?.closest(".iCIMS_CollectionContainer");
  return t ? eo(t) : "";
}
function ea(e) {
  if (!e) return [];
  let t = Array.from(document.querySelectorAll(".iCIMS_CollectionContainer"));
  return t.filter((t10) => eo(t10) === e).flatMap((e10) => getSectionSnapshots(e10));
}
function el(e) {
  return xpath.getOrderedNodes(e, document);
}
function es(e) {
  let t = normalizeWhitespace(e).toLowerCase();
  return !!t && (/^volunteer work\b/.test(t) || /\bvolunteer experience\b/.test(t) || /^licen[cs]es?\/certifications?\b/.test(t) || /^references\b/.test(t) || /^shipping address\b/.test(t));
}
function eu(e) {
  return !!(e instanceof HTMLElement && e.matches("fieldset.iCIMS_CollectionGroup")) && es(e.querySelector("legend")?.textContent);
}
function ec(e) {
  return eu(e.closest("fieldset.iCIMS_CollectionGroup"));
}
function ed(e, t) {
  if (!(e instanceof HTMLElement) || !e.matches("fieldset.iCIMS_CollectionGroup")) return false;
  let r = t ? [t] : [H, Y];
  return r.some((t10) => t10.matchesTitle(e.querySelector("legend")?.textContent)) || r.some((t10) => t10.matchesTitle(eo(e)));
}
function ef(e) {
  return Array.from(document.querySelectorAll("fieldset.iCIMS_CollectionGroup")).filter((t) => !eu(t) && ed(t, e));
}
function ep(e) {
  return ed(e.closest("fieldset.iCIMS_CollectionGroup"));
}
function em(e) {
  let t = e.closest(".icims_group_loop[data-group-loop-name]");
  if (!t) return false;
  let r = t.getAttribute("data-group-loop-name");
  return [H, Y].some((e10) => eb(r, e10.legacyGroupLoopName));
}
function eh(e) {
  return ep(e) || eq(e) || em(e);
}
function eg(e, t) {
  if (!(e instanceof HTMLInputElement)) return false;
  let r = (e.getAttribute("type") || e.type || "").toLowerCase().trim();
  return "submit" === r && (!t || !!eb(e.getAttribute("data-group-loop"), t)) && (e.classList.contains("group-loop-add") || e.classList.contains("group-loop-remove"));
}
function eb(e, t) {
  let r = normalizeWhitespace(e).toLowerCase();
  return "Education" === t ? "education" === r || "education_gl" === r : "WorkExperience" === t ? "workexperience" === r || "workexperience_gl" === r : r === t.toLowerCase();
}
function ey(e) {
  let t = document.querySelector(F), r = t ?? document, n2 = Array.from(r.querySelectorAll('input[type="submit"][data-group-loop]'));
  return n2.find((t10) => eg(t10, e)) ?? null;
}
function ev(e) {
  let t = ey(e);
  return t ? t.closest(F) ?? t.parentElement : null;
}
function ew(e) {
  return Array.from(e.querySelectorAll('input[type="submit"][data-group-loop]')).some((e10) => eg(e10));
}
function eS(e) {
  if (e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement) return true;
  if (!(e instanceof HTMLInputElement)) return false;
  let t = (e.getAttribute("type") || e.type || "text").toLowerCase().trim();
  return !["hidden", "submit", "button", "file"].includes(t);
}
function eE(e) {
  return Array.from(e.querySelectorAll("input, select, textarea")).some((e10) => e10 instanceof HTMLElement && eS(e10) && z(e10));
}
function ex(e) {
  let t = e.tagName.toLowerCase();
  return !("table" !== t && !e.classList.contains("icims_group_loop") || e.classList.contains("iCIMS_MainTable") || ew(e)) && eE(e);
}
function eC(e) {
  return Array.from(document.querySelectorAll(".icims_group_loop[data-group-loop-name]")).filter((t) => t instanceof HTMLElement && eb(t.getAttribute("data-group-loop-name"), e));
}
function eA(e) {
  let t = ey(e), r = t?.closest("table"), n2 = r ?? t?.parentElement ?? null;
  if (!n2) return [];
  let o = [], i2 = n2.previousElementSibling;
  for (; i2 && !ew(i2); ) {
    if (ex(i2)) o.unshift(i2);
    else if (o.length > 0) break;
    i2 = i2.previousElementSibling;
  }
  return o;
}
function ek(e) {
  let t = eC(e), r = er(t);
  return r.length > 0 ? r : eA(e);
}
function eT(e, t, r, n2) {
  let o = xpath.getFirstOrderedNode(e);
  if (o) return o;
  let i2 = xpath.getFirstOrderedNode(t, document);
  if (!i2) return ev(n2);
  let a2 = i2.parentElement;
  for (; a2; ) {
    if (xpath.getFirstOrderedNode(r, a2)) return a2;
    a2 = a2.parentElement;
  }
  return i2.parentElement ?? null;
}
function eF(e) {
  return eT(e.containerXpath, e.legacySectionXpath, e.addButtonXpath, e.legacyGroupLoopName);
}
function eI(e) {
  if ("education" === e.key) {
    let e10 = ea(ei());
    if (e10.length > 0) return en(e10);
  }
  let t = xpath.getFirstOrderedNode(e.containerXpath);
  if (t) return en(getSectionSnapshots(t));
  let r = el(e.legacySectionXpath);
  if (r.length > 0) return en(r);
  let n2 = en(ek(e.legacyGroupLoopName));
  if (n2.length > 0) return n2;
  let o = en(ef(e));
  return o.length > 0 ? o : [];
}
function ej(e, t, r) {
  return { type: e.fieldType, label: e.label, required: true, ...r ? { $input: r } : {}, children: t, options: utils.buildIcimsRepeatableSectionOptions(t) };
}
function eD() {
  return [...getEducationRules(), ...getExperienceRules()];
}
function eP(e) {
  let t = e, r = [t.$input, t.$label, t.$radioParent, ...Array.isArray(t.$checkboxs) ? t.$checkboxs : []];
  return r.filter((e10) => e10 instanceof HTMLElement);
}
function e_(e, t) {
  return !!(e === t || t.contains(e)) || e.contains(t) && eh(e);
}
function eL(e, t) {
  let r = eP(e);
  return 0 !== r.length && 0 !== t.length && r.some((e10) => t.some((t10) => e_(e10, t10)));
}
function eR(e) {
  let t = eD(), r = t.flatMap((e10) => (e10.children ?? []).flatMap(eP)), n2 = e.filter((e10) => !eL(e10, r));
  return [...n2, ...t];
}
function eO(e) {
  let t = [], r = eI(e);
  if (r.length > 0) return r.forEach((r2) => {
    let n3 = t5(r2);
    n3.length > 0 && t.push(ej(e, n3, r2));
  }), t;
  let n2 = xpath.getOrderedNodes("//*[@role='group']", document);
  for (let r2 of n2) {
    let n3 = xpath.getFirstOrderedNode(`.//h2[contains(@class, 'iCIMS_SubHeader') or @id="iCIMS_BasicProfilePane_Title"]`, r2);
    if (!n3) continue;
    let o = n3?.textContent?.trim();
    if (!e.matchesTitle(o)) continue;
    let i2 = t5(r2);
    i2.length > 0 && t.push(ej(e, i2, r2));
  }
  return t;
}
export function getEducationSectionContainer() {
  return eF(H);
}
export function getEmploymentSectionContainer() {
  return eF(Y);
}
export function getEducationSectionSnapshots() {
  return eI(H);
}
export function getExperienceSectionSnapshots() {
  return eI(Y);
}
function eq(e) {
  let t = e.closest("table.iCIMS_groupLoopTable");
  if (!t) return false;
  let r = normalizeWhitespace(t.id || t.className).toLowerCase();
  return r.includes("education") || r.includes("school") || r.includes("workexperience") || r.includes("employment") || r.includes("workhistory");
}
function eU(e) {
  let t = e;
  if (t.id) {
    let e10 = document.querySelector(`label[for="${t.id}"]`), r2 = $(e10);
    if (r2) return r2;
  }
  let r = e.closest("label");
  return r ? $(r, "input, select, textarea") : "";
}
function eH(e) {
  let t = e instanceof HTMLElement ? normalizeWhitespace(e.getAttribute("aria-label")) : "";
  if (t) return t;
  let r = eU(e);
  if (r) return r;
  if (!(e instanceof HTMLInputElement) && !(e instanceof HTMLSelectElement)) {
    let t10 = ee(e);
    if (t10) return t10;
  }
  let n2 = Z(e);
  if (n2) return n2;
  if (e instanceof HTMLSelectElement) {
    let t10 = e.closest("p");
    if (t10) {
      let e10 = $(t10, "select, input, textarea");
      if (e10) return e10;
    }
  }
  return e instanceof HTMLInputElement ? G(e.name || e.id) : "";
}
function eY(e) {
  let t = e.closest("td, th");
  if (t) {
    let e10 = $(t, "input, select, textarea, button").replace(/[:\uff1a]\s*$/, "");
    if (e10) return e10;
  }
  return eH(e);
}
function ez(e, t) {
  let r = t[0], n2 = r.closest("td");
  if (n2 && t.every((e10) => n2.contains(e10))) return n2;
  let o = r.parentElement;
  for (; o && o !== e; ) {
    if (t.every((e10) => o.contains(e10))) return o;
    o = o.parentElement;
  }
  return e;
}
function eV(e) {
  return e.closest(".customFieldContainer") ?? e;
}
function eW(e) {
  return e.matches('input[type="radio"], input[type="checkbox"]') || !!e.querySelector('input[type="radio"], input[type="checkbox"]');
}
function eG(e) {
  let t = e?.previousSibling ?? null, r = [];
  for (; t; ) {
    if (t.nodeType === Node.TEXT_NODE) {
      let e10 = normalizeWhitespace(t.textContent);
      e10 && r.unshift(e10), t = t.previousSibling;
      continue;
    }
    if (t.nodeType === Node.ELEMENT_NODE) {
      let e10 = t;
      if (M(e10)) {
        t = t.previousSibling;
        continue;
      }
      if (eW(e10)) break;
      if ("BR" === e10.tagName) {
        if (r.length > 0) break;
        t = t.previousSibling;
        continue;
      }
      let n2 = $(e10);
      n2 && r.unshift(n2);
    }
    t = t.previousSibling;
  }
  return normalizeWhitespace(r.join(" "));
}
function eK(e, t) {
  let r = eV(t), n2 = [];
  for (let t10 of Array.from(e.childNodes)) {
    if (t10 === r || t10 instanceof HTMLElement && t10.contains(r)) break;
    let e10 = B(t10);
    e10 && n2.push(e10);
  }
  return normalizeWhitespace(n2.join(" "));
}
function eX(e) {
  let t = normalizeWhitespace(e).replace(/\s*\*\s*/g, " ").replace(/^[\s:\uff1a-]+|[\s:\uff1a-]+$/g, "");
  if (!t) return "";
  let r = t.search(/[:\uff1a]/), n2 = r >= 0 ? t.slice(0, r) : t;
  return icimsAnswer.normalizeLegacySectionLabel(n2);
}
function eJ(e) {
  let t = e[0], r = t?.closest("td, th");
  return r ? eX(eK(r, t)) : "";
}
function eQ(e, t) {
  let r = e[0], n2 = r?.closest("td, th");
  return n2 && e.every((e10) => n2.contains(e10)) ? n2 : t;
}
function eZ(e) {
  return e.required || e.classList.contains("iCIMS_Forms_RequiredField") || e8(e);
}
function e0(e, t) {
  let r = [e.name, e.id, e.className, e.getAttribute("aria-label"), t].map((e10) => normalizeWhitespace(e10)).join(" ").toLowerCase();
  return r.includes("signature");
}
function e2(e, t = []) {
  return [...t, ...e.flatMap((e10) => [e10.name, e10.id, e10.value, e10.className, e10.getAttribute("aria-label")])].map((e10) => normalizeWhitespace(e10)).join(" ").toLowerCase();
}
function e1(e) {
  return e.includes("voluntary_self_identification_of_veteran_status") || e.includes("qveteran") || e.includes("protectedveteran") || e.includes("notprotectedveteran") || e.includes("protected veteran") || e.includes("not a protected veteran");
}
function e3(e, t = []) {
  return e1(e2(e, t));
}
function e4(e, t, r = []) {
  return e3(t, r) ? icimsAnswer.ICIMS_PACKET_VETERAN_LABEL : e;
}
export function getTrailingTextAfterNode(e, { crossLeadingLineBreak: t = true } = {}) {
  let r = e?.nextSibling ?? null, n2 = [];
  for (; r; ) {
    if (r.nodeType === Node.TEXT_NODE) {
      let e10 = normalizeWhitespace(r.textContent);
      e10 && n2.push(e10), r = r.nextSibling;
      continue;
    }
    if (r.nodeType === Node.ELEMENT_NODE) {
      let e10 = r;
      if (M(e10)) {
        r = r.nextSibling;
        continue;
      }
      if (e10.matches('input[type="radio"], input[type="checkbox"]') || e10.querySelector('input[type="radio"], input[type="checkbox"]')) break;
      if ("BR" === e10.tagName) {
        if (!t || n2.length > 0) break;
        r = r.nextSibling;
        continue;
      }
      let o = $(e10);
      o && n2.push(o);
    }
    r = r.nextSibling;
  }
  return normalizeWhitespace(n2.join(" "));
}
export function readChoiceText(e, t = "radio") {
  if (e.id) {
    let t10 = document.querySelector(`label[for="${e.id}"]`), r2 = $(t10);
    if (r2) return r2;
  }
  let r = e.closest("label");
  if (r) {
    let e10 = $(r, `input[type="${t}"]`);
    if (e10) return e10;
  }
  let n2 = e.closest(".customFieldContainer") ?? e.parentElement, o = n2 ?? e, i2 = getTrailingTextAfterNode(o, { crossLeadingLineBreak: false });
  if (i2) return i2;
  let a2 = eG(o);
  if (a2 && !/[:\uff1a]\s*$/.test(a2)) return a2;
  let l2 = getTrailingTextAfterNode(o);
  return l2 || normalizeWhitespace(e.getAttribute("aria-label") || e.value);
}
function e8(e) {
  return "true" === e.getAttribute("aria-required") || "true" === e.getAttribute("i_required");
}
function e9(e) {
  return e.closest("td") ?? e;
}
function e7(e, t, { excludeDateOnly: r = true } = {}) {
  return Array.from(e.querySelectorAll(t)).filter((e10) => !(!(e10 instanceof HTMLElement) || !z(e10) || e10.closest("#staticSection") || eh(e10) || r && e10.closest(".iCIMS_Forms_DateOnlyField")));
}
function te(e) {
  let t = eH(e);
  return tw(t, e8(e), e, e9(e));
}
function tt(e) {
  let t = eH(e), r = tS(t, e8(e), e, e9(e));
  return r?.type === enums.FIELD_TYPE.SELECT_ORIGINAL ? r : null;
}
function tr(e) {
  let t = eH(e) || "Date";
  return { type: enums.FIELD_TYPE.DATE, label: t, description: "Please return today's date in YYYY-MM-DD format", required: !!e.querySelector('[aria-required="true"], [i_required="true"]'), $label: e9(e), $input: e };
}
function tn(e) {
  let t = eH(e);
  if (!t) return null;
  let r = [e.name, e.id, e.className, e.getAttribute("aria-label"), t].map((e10) => normalizeWhitespace(e10)).join(" ").toLowerCase();
  return r.includes("signature") ? null : { type: enums.FIELD_TYPE.CHECKBOX, label: t, required: e8(e), $checkboxs: [e], $input: e, $label: e9(e), options: [t] };
}
function to(e, t, r, n2, o) {
  let i2 = ez(e, o), a2 = o.map((e10) => readChoiceText(e10)), s2 = e4(eJ(o) || X(t, r, n2), o, [t, r, n2, ...a2]), u2 = o.some((e10) => e8(e10)), c2 = a2;
  return { type: enums.FIELD_TYPE.RADIOGROUP, label: s2, required: u2, $input: o[0], $label: i2, $radioParent: i2, options: c2 };
}
let ti = [{ selector: "select", mapper: (e) => tt(e) }, { selector: 'input[type="text"]', mapper: (e) => te(e) }, { selector: ".iCIMS_Forms_DateOnlyField", options: { excludeDateOnly: false }, mapper: (e) => tr(e) }, { selector: 'input[type="checkbox"]', options: { excludeDateOnly: false }, mapper: (e) => tn(e) }];
function ta(e) {
  let t = W(e), r = K(e), n2 = /* @__PURE__ */ new Map(), o = e7(e, 'input[type="radio"][name]', { excludeDateOnly: false });
  for (let e10 of o) {
    let t10 = normalizeWhitespace(e10.name);
    if (!t10) continue;
    let r2 = n2.get(t10) ?? [];
    r2.push(e10), n2.set(t10, r2);
  }
  let i2 = [];
  for (let [o2, a2] of n2.entries()) {
    let n3 = to(e, t, r, o2, a2);
    n3 && i2.push({ anchor: a2[0], rule: n3 });
  }
  return i2.sort((e10, t10) => e10.anchor.compareDocumentPosition(t10.anchor) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1).map((e10) => e10.rule);
}
function tl(e) {
  return ti.flatMap(({ selector: t, options: r, mapper: n2 }) => e7(e, t, r).map(n2).filter(Boolean));
}
function ts() {
  let e = document.querySelector("form#enterEmailForm");
  return e ? Array.from(e.querySelectorAll('input[type="email"], input[type="checkbox"]')).flatMap((e10) => {
    let t = e10;
    if (e10.matches(":disabled") || e10.readOnly || e10.closest("[hidden], .iCIMS_NoDisplay") || !z(e10) || t.checkVisibility?.({ checkVisibilityCSS: true }) === false) return [];
    let r = eH(e10), n2 = e10.required || e8(e10), o = "checkbox" === e10.type ? tx(r, n2, [e10], e10) : tw(r, n2, e10, e10);
    return o ? [o] : [];
  }) : [];
}
function tu() {
  let e = V();
  return e ? [...ta(e), ...tl(e)] : [];
}
function tc() {
  let e = document.querySelector(F);
  if (!e) return [];
  let t = [...eI(H), ...eI(Y)], r = e.querySelector("table.iCIMS_MainTable") ?? e, n2 = Array.from(r.querySelectorAll("td")).filter((e10) => !!tm(e10) && !t.some((t10) => t10.contains(e10)));
  return tJ(n2, tg);
}
function td(e) {
  if (e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement) return true;
  if (!(e instanceof HTMLInputElement)) return false;
  let t = (e.getAttribute("type") || e.type || "text").toLowerCase().trim();
  return utils.isIcimsTextLikeInputType(t);
}
function tf(e) {
  let t = Array.from(e.querySelectorAll("input, select, textarea"));
  return t.find((t10) => t10 instanceof HTMLElement && t10.closest("td") === e && td(t10) && z(t10)) ?? null;
}
function tp(e) {
  let t = Array.from(e.children).find((e10) => e10 instanceof HTMLElement && "label" === e10.tagName.toLowerCase());
  return $(t).replace(/[:\uff1a]\s*$/, "");
}
function tm(e) {
  return !!(z(e) && tp(e)) && !!tf(e);
}
function th(e, t) {
  let r = normalizeWhitespace(e.closest(".icims_group_loop[data-group-loop-name]")?.getAttribute("data-group-loop-name")).toLowerCase();
  return "phones" === r || "phone" === r ? normalizePhoneChildLabel(t) : icimsAnswer.normalizeLegacySectionLabel(t);
}
function tg(e) {
  return tK(e, { getLabel: (e10) => tp(e10), normalizeLabel: (t) => th(e, t), supportsCheckbox: true, supportsDate: true, supportsRadio: true });
}
function tb(e, t) {
  let r = $(e, ".iCIMS_Forms_DateOnlyField, input, select, textarea, button").replace(/[:\uff1a]\s*$/, "");
  return r || eH(t).replace(/[:\uff1a]\s*$/, "");
}
function ty(e) {
  return icimsAnswer.normalizeLegacySectionLabel(e.replace(/\s*\([^)]*\)\s*$/, ""));
}
function tv(e, t, r, n2 = false) {
  let o = r.getLabel(e, t);
  return o ? n2 ? ty(o) : r.normalizeLabel ? r.normalizeLabel(o) : o : "";
}
function tw(e, t, r, n2) {
  return e ? { type: enums.FIELD_TYPE.TEXT, label: e, required: t, $input: r, $label: n2 } : null;
}
function tS(e, t, r, n2, { searchable: o = false, fallbackOptions: i2 = [] } = {}) {
  if (!e) return null;
  if (o) {
    let o2 = xpath.getOrderedNodes('./following-sibling::div[contains(@class, "dropdown-container")]//ul/li', r), a2 = o2.length > 0 ? o2.reduce((e10, t10) => {
      let r2 = normalizeWhitespace(t10.textContent);
      return r2 && "\u2014 Make a Selection \u2014" !== r2 && "No Results" !== r2 && e10.push(r2), e10;
    }, []) : utils.extractIcimsSelectOptions(r, { fallbackOptions: i2 });
    return { type: enums.FIELD_TYPE.SELECT, label: e, required: t, $label: n2, $input: r, options: a2 };
  }
  return { type: enums.FIELD_TYPE.SELECT_ORIGINAL, label: e, required: t, $label: n2, $input: r, options: utils.extractIcimsSelectOptions(r) };
}
function tE(e, t, r, n2, o) {
  return e ? { type: enums.FIELD_TYPE.DATE, label: e, required: t, $label: n2, $input: r, ...o ? { options: o } : {} } : null;
}
function tx(e, t, r, n2) {
  if (!e || 0 === r.length) return null;
  let o = r.map((e10) => readChoiceText(e10, "checkbox")).filter(Boolean);
  return { type: enums.FIELD_TYPE.CHECKBOX, label: e, required: t, $input: r[0], $label: n2, $checkboxs: r, options: o.length > 0 ? o : [e] };
}
function tC(e, t, r, n2) {
  if (0 === r.length) return null;
  let o = r.map((e10) => normalizeWhitespace(readChoiceText(e10, "radio"))), i2 = e4(e, r, o);
  if (!i2) return null;
  let a2 = o.filter(Boolean);
  return 0 === a2.length ? null : { type: enums.FIELD_TYPE.RADIOGROUP, label: i2, required: t, $label: n2, $input: r[0], $radioParent: n2, options: a2 };
}
function tA(e) {
  return `${e.type}:${normalizeWhitespace(e.label).toLowerCase()}`;
}
function tk(e, t) {
  let r = new Set(e.map((e10) => tA(e10)));
  for (let n2 of t) {
    let t10 = tA(n2);
    r.has(t10) || (e.push(n2), r.add(t10));
  }
}
let tT = /(^|[\s:\uff1a?\uff1f!\uff01.\u3002])\*(?=$|[\s:\uff1a])/u;
function tF(e) {
  return icimsAnswer.normalizeLegacySectionLabel(utils.normalizeIcimsRuleLabel(e).replace(/^[\s:\uff1a-]+|[\s:\uff1a-]+$/g, ""));
}
function tI(e) {
  if (e.classList.contains("iCIMS_Forms_DateOnlyField")) return "date";
  if (e instanceof HTMLTextAreaElement) return "textarea";
  if (e instanceof HTMLSelectElement) return "select";
  if (!(e instanceof HTMLInputElement)) return null;
  let t = (e.getAttribute("type") || e.type || "text").toLowerCase().trim();
  return "radio" === t ? "radio" : "checkbox" === t ? "checkbox" : ["hidden", "submit", "button", "file"].includes(t) ? null : utils.isIcimsTextLikeInputType(t) ? "text" : null;
}
function tj(e) {
  return !M(e) && z(e);
}
function tD(e) {
  return !!((e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement) && e.required || "true" === e.getAttribute("aria-required") || "true" === e.getAttribute("i_required") || e.classList.contains("iCIMS_Forms_RequiredField") || e.classList.contains("Field_Required")) || !!e.querySelector('[aria-required="true"], [i_required="true"], .Field_Required, .iCIMS_Forms_RequiredField');
}
function tP(e, t, r) {
  let n2 = normalizeWhitespace(e.join(" "));
  if (n2 || t) return { text: tF(n2), required: t || tT.test(n2) };
  let o = r.at(-1);
  return { text: tF(o?.text ?? ""), required: o?.required ?? false };
}
function t_(e) {
  let t = [], r = [], n2 = [], o = false, i2 = 0, a2 = false, l2 = () => {
    let e10 = normalizeWhitespace(n2.join(" "));
    (e10 || o) && r.push({ text: e10, required: o || tT.test(e10) }), n2 = [], o = false;
  }, s2 = (e10) => {
    let t10 = normalizeWhitespace(e10);
    t10 && !a2 && (tT.test(t10) && (o = true), n2.push(t10), i2 = 0);
  }, u2 = () => {
    if (a2) {
      a2 = false, n2 = [], o = false, i2 = 1;
      return;
    }
    (i2 += 1) >= 2 && l2();
  }, c2 = () => {
    r.length = 0, n2 = [], o = false, i2 = 0, a2 = true;
  }, d2 = (e10) => {
    if (e10.nodeType === Node.TEXT_NODE) {
      s2(e10.textContent);
      return;
    }
    if (e10.nodeType !== Node.ELEMENT_NODE) return;
    let i3 = e10;
    if (M(i3)) return;
    if ("BR" === i3.tagName) {
      u2();
      return;
    }
    let l3 = tI(i3);
    if (l3 && tj(i3)) {
      let e11 = tP(n2, o, r);
      t.push({ kind: l3, element: i3, prompt: e11.text, required: e11.required }), "radio" === l3 || "checkbox" === l3 ? a2 = true : c2();
      return;
    }
    if (0 === i3.childNodes.length) {
      s2(i3.textContent);
      return;
    }
    for (let e11 of Array.from(i3.childNodes)) d2(e11);
  };
  for (let t10 of Array.from(e.childNodes)) d2(t10);
  return t;
}
function tL(e) {
  let t = Array.from(e.querySelectorAll("td, th")).filter((e10) => !!(e10 instanceof HTMLElement && z(e10)) && Array.from(e10.querySelectorAll("input, select, textarea, .iCIMS_Forms_DateOnlyField")).some((e11) => !!(e11 instanceof HTMLElement && tj(e11)) && !!tI(e11)));
  if (0 === t.length) return false;
  let r = Array.from(e.querySelectorAll("input, select, textarea, .iCIMS_Forms_DateOnlyField")).filter((e10) => !!(e10 instanceof HTMLElement && tj(e10)) && !!tI(e10));
  return r.length > 1;
}
function tR(e, t = {}) {
  let r = e instanceof HTMLElement ? e : null, n2 = [...r?.matches("td, th") ? [r] : [], ...Array.from(e.querySelectorAll("td, th"))];
  return n2.filter((e10) => !(!z(e10) || e10.closest(I) || tL(e10) || t.skipStructuredRows && e10.closest(".iCIMS_TableRow") || t.skipRepeatableSections && (eh(e10) || ec(e10))));
}
function tO(e, t, r, n2) {
  let o = !!xpath.getFirstOrderedNode('./following-sibling::div[contains(@class, "dropdown-container")]', r), i2 = "State/Province" === e ? Object.values(constants.STATE_MAP) : [];
  return tS(e, t, r, n2, { searchable: o, fallbackOptions: i2 });
}
function tM(e, t = {}) {
  let r = [];
  for (let n2 of tR(e, t)) {
    let e10 = t_(n2), t10 = /* @__PURE__ */ new Set();
    for (let o of e10) {
      if (t10.has(o.element)) continue;
      let i2 = o.prompt;
      if ("radio" === o.kind) {
        let a2 = o.element, l2 = e10.filter((e11) => {
          if ("radio" !== e11.kind) return false;
          let t11 = e11.element;
          return a2.name ? t11.name === a2.name : t11 === a2;
        }), s2 = l2.map((e11) => e11.element);
        s2.forEach((e11) => t10.add(e11));
        let u2 = tC(i2 || G(a2.name || a2.id), l2.some((e11) => e11.required) || s2.some(eZ), s2, n2);
        u2 && r.push(u2);
        continue;
      }
      if ("checkbox" === o.kind) {
        let a2 = o.element, l2 = e10.filter((e11) => {
          if ("checkbox" !== e11.kind) return false;
          let t11 = e11.element;
          return a2.name ? t11.name === a2.name : t11 === a2;
        }), s2 = l2.map((e11) => e11.element);
        if (s2.forEach((e11) => t10.add(e11)), e0(a2, i2)) continue;
        let u2 = tx(i2 || tN(a2), l2.some((e11) => e11.required) || s2.some(eZ), s2, n2);
        u2 && r.push(u2);
        continue;
      }
      if (t10.add(o.element), i2) {
        if ("date" === o.kind) {
          let e11 = tE(i2, o.required || tD(o.element), o.element, n2);
          e11 && r.push(e11);
          continue;
        }
        if ("select" === o.kind) {
          let e11 = tO(i2, o.required || tD(o.element), o.element, n2);
          e11 && r.push(e11);
          continue;
        }
        if ("textarea" === o.kind) {
          let e11 = tw(i2, o.required || tD(o.element), o.element, n2);
          e11 && r.push(e11);
          continue;
        }
        if ("text" === o.kind) {
          let e11 = tw(i2, o.required || tD(o.element), o.element, n2);
          e11 && r.push(e11);
        }
      }
    }
  }
  return r;
}
function tN(e) {
  let t = eU(e);
  if (t) return t.replace(/[:\uff1a]\s*$/, "");
  let r = readChoiceText(e, "checkbox");
  if (r) return r.replace(/[:\uff1a]\s*$/, "");
  let n2 = e.closest("td, th");
  return n2 ? eX(eK(n2, e)) : "";
}
function t$() {
  let e = Array.from(document.querySelectorAll(I)).filter((e10) => e10 instanceof HTMLElement && z(e10)), t = [];
  for (let r of e) {
    let e10 = Array.from(r.querySelectorAll('input[type="radio"][name]')).filter((e11) => e11 instanceof HTMLInputElement && z(e11)), n2 = /* @__PURE__ */ new Map();
    for (let t10 of e10) {
      let e11 = normalizeWhitespace(t10.name);
      if (!e11) continue;
      let r2 = n2.get(e11) ?? [];
      r2.push(t10), n2.set(e11, r2);
    }
    for (let [e11, o2] of n2.entries()) {
      let n3 = eJ(o2) || G(e11), i2 = eQ(o2, r), a2 = tC(n3, o2.some(eZ), o2, i2);
      a2 && t.push(a2);
    }
    let o = Array.from(r.querySelectorAll('input[type="checkbox"]')).filter((e11) => e11 instanceof HTMLInputElement && z(e11));
    for (let e11 of o) {
      let n3 = tN(e11);
      if (!n3 || e0(e11, n3)) continue;
      let o2 = eQ([e11], r), i2 = tx(n3, eZ(e11), [e11], o2);
      i2 && t.push(i2);
    }
  }
  return t;
}
function tB(e, t, r, n2, o, i2 = false) {
  if (!e || o.length <= 1) return null;
  let a2 = utils.buildIcimsSectionOptionSummary(o, { includeDescription: true });
  return i2 ? tE(e, t, r, n2, a2) : { type: enums.FIELD_TYPE.SECTION, label: e, required: t, $input: r, children: o, options: a2 };
}
function tq(e) {
  if (!e.supportsRadio) return null;
  let t = Array.from(e.root.querySelectorAll('input[type="radio"]')).filter((e10) => utils.isVisibleIcimsElement(e10));
  if (0 === t.length) return null;
  let r = t[0], n2 = r.name ? t.filter((e10) => e10.name === r.name) : t;
  return tC(e.resolveLabel(r), e.required, n2, e.labelHost);
}
function tU(e) {
  if (!e.supportsCheckbox) return null;
  let t = Array.from(e.root.querySelectorAll('input[type="checkbox"]')).filter((e10) => utils.isVisibleIcimsElement(e10));
  if (0 === t.length) return null;
  let r = e.resolveLabel(t[0]) || readChoiceText(t[0], "checkbox");
  return tx(r, e.required, t, e.labelHost);
}
function tH(e) {
  if (!e.supportsDate) return null;
  let t = e.root.querySelector(".iCIMS_Forms_DateOnlyField");
  if (!t || !utils.isVisibleIcimsElement(t)) return null;
  let r = t.querySelector("select, input") ?? t;
  return tE(e.resolveLabel(r, true), e.required, t, e.labelHost);
}
function tY(e) {
  if (!e.supportsComposite) return null;
  let t = e.getCompositeRoot?.() ?? e.root;
  if (!t || !utils.isVisibleIcimsElement(t)) return null;
  let r = t6(t, e.labelHost, e.required);
  if (r.length <= 1) return null;
  let n2 = t.querySelector("select, input") ?? t, o = e.resolveLabel(n2, e.compositeAsDate);
  return tB(o, e.required, t, e.labelHost, r, e.compositeAsDate);
}
function tz(e) {
  let t = Array.from(e.root.querySelectorAll("select")).find((e10) => utils.isVisibleIcimsElement(e10));
  if (!t) return null;
  let r = e.resolveLabel(t), n2 = e.detectSearchSelect?.(t) ?? false, o = "State/Province" === r ? Object.values(constants.STATE_MAP) : [];
  return tS(r, e.required, t, e.labelHost, { searchable: n2, fallbackOptions: o });
}
function tV(e) {
  let t = Array.from(e.root.querySelectorAll("textarea")).find((e10) => utils.isVisibleIcimsElement(e10));
  if (t) return tw(e.resolveLabel(t), e.required, t, e.labelHost);
  let r = Array.from(e.root.querySelectorAll("input")).find((e10) => !!(e10 instanceof HTMLInputElement && utils.isVisibleIcimsElement(e10)) && utils.isIcimsTextLikeInputType(e10.type));
  return r ? tw(e.resolveLabel(r), e.required, r, e.labelHost) : null;
}
let tW = [tq, tU, tH, tY, tz, tV];
function tG(e) {
  for (let t of tW) {
    let r = t(e);
    if (r) return r;
  }
  return null;
}
function tK(e, t) {
  if (!utils.isVisibleIcimsElement(e)) return null;
  let r = !!e.querySelector('[aria-required="true"], [i_required="true"], .Field_Required, .iCIMS_Forms_RequiredField') || Array.from(e.querySelectorAll("input, select, textarea")).some((e10) => !!(e10 instanceof HTMLInputElement || e10 instanceof HTMLSelectElement || e10 instanceof HTMLTextAreaElement) && (e10.required || "true" === e10.getAttribute("aria-required") || "true" === e10.getAttribute("i_required") || e10.classList.contains("iCIMS_Forms_RequiredField")));
  return tG({ root: e, labelHost: e, required: r, supportsCheckbox: t.supportsCheckbox, supportsComposite: t.supportsComposite, supportsDate: t.supportsDate, supportsRadio: t.supportsRadio, getCompositeRoot: () => e.querySelector(".iCIMS_Table") ?? null, resolveLabel: (r2, n2 = false) => tv(e, r2 ?? null, t, n2) });
}
function tX(e) {
  return tK(e, { getLabel: (e10, t) => tb(e10, t ?? e10), normalizeLabel: icimsAnswer.normalizeLegacySectionLabel, supportsDate: true });
}
function tJ(e, t) {
  let r = [];
  for (let n2 of e) {
    let e10 = t(n2);
    e10 && r.push(e10);
  }
  return r;
}
function tQ(e) {
  return tJ(Array.from(e.cells), tX);
}
function tZ(e) {
  return normalizeWhitespace(e.getAttribute("data-group-loop-name")).toLowerCase();
}
function t0(e, t) {
  let r = icimsAnswer.normalizeLegacySectionLabel(t), n2 = tZ(e);
  return eb(n2, "Education") && "Name" === r ? "School" : (eb(n2, "WorkExperience") || "employment" === n2) && "Name" === r ? "Employer" : r;
}
function t2(e) {
  let t = e.querySelector(":scope > label");
  return t ? $(t).replace(/[:\uff1a]\s*$/, "") : $(e, ".iForm_response, label[for], input, select, textarea, button").replace(/[:\uff1a]\s*$/, "");
}
function t1(e, t) {
  return tK(t, { getLabel: (e10) => t2(e10), normalizeLabel: (t10) => t0(e, t10), supportsRadio: true });
}
function t3(e, t) {
  let r = Array.from(t.children).filter((e10) => e10 instanceof HTMLElement && e10.className.includes("cell"));
  return tJ(r, (t10) => t1(e, t10));
}
function t4(e) {
  if (!tZ(e)) return [];
  let t = Array.from(e.children).filter((e10) => e10 instanceof HTMLElement && e10.className.includes("row"));
  return t.flatMap((t10) => t3(e, t10));
}
function t5(e) {
  let t = xpath.getOrderedNodes(".//div[contains(@class, 'iCIMS_TableRow') and .//div[contains(@class, 'iCIMS_InfoField')]]", e);
  if (t.length > 0) return t.map((e10) => t8(e10)).filter(Boolean);
  let r = t4(e);
  if (r.length > 0) return r;
  if ("table" !== e.tagName.toLowerCase()) {
    let t10 = Array.from(e.querySelectorAll("table.iCIMS_groupLoopTable")), r2 = t10.flatMap((e10) => Array.from(e10.rows).flatMap((e11) => tQ(e11)));
    if (r2.length > 0) return r2;
  }
  let n2 = Array.from(e.rows ?? []), o = n2.flatMap((e10) => tQ(e10));
  return o.length > 0 ? o : tM(e, { skipRepeatableSections: false, skipStructuredRows: true });
}
function t6(e, t, r) {
  let n2 = xpath.getOrderedNodes(".//div[contains(@class, 'iCIMS_TableCell')]", e), o = [];
  for (let e10 of n2) {
    let n3 = e10.querySelector("label"), i2 = $(n3);
    if (!i2) continue;
    let a2 = e10.querySelector("select");
    if (a2) {
      o.push({ type: enums.FIELD_TYPE.SELECT_ORIGINAL, label: i2, required: r, $label: t, $input: a2, options: utils.extractIcimsSelectOptions(a2) });
      continue;
    }
    let s2 = e10.querySelector('input[type="text"], input[type="number"]');
    s2 && o.push({ type: enums.FIELD_TYPE.TEXT, label: i2, required: r, $input: s2, $label: t });
  }
  return o;
}
function t8(e) {
  let t = xpath.getFirstOrderedNode(".//div[contains(@class, 'iCIMS_InfoField')]", e);
  if (!z(e) || !t) return null;
  let r = xpath.getOrderedNodes(".//label", e), n2 = $(r[0]);
  if (lodash.isEmpty(n2)) return null;
  let o = $(r[1]), a2 = !!xpath.getFirstOrderedNode(".//span[contains(@class, 'Field_Required')]", e), l2 = xpath.getFirstOrderedNode(".//div[contains(@class, 'iCIMS_InfoData')]", e);
  return l2 ? tG({ root: l2, labelHost: t, required: !!a2, supportsComposite: true, supportsDate: true, getCompositeRoot: () => l2, compositeAsDate: "(Month / Day / Year)" === o, detectSearchSelect: (e10) => !!xpath.getFirstOrderedNode('./following-sibling::div[contains(@class, "dropdown-container")]', e10), resolveLabel: (e10, t10 = false) => t10 ? ty(n2) : n2 }) : null;
}
export function normalizePhoneChildLabel(e) {
  let t = normalizeWhitespace(e).toLowerCase();
  return "type" === t || t.startsWith("type ") || t.startsWith("type -") ? "Phone Type" : "country code" === t || "phone country code" === t || t.startsWith("country code ") ? "Phone Country Code" : "number" === t || t.startsWith("number ") || "phone" === t || t.startsWith("phone ") ? "Phone Number" : e;
}
export function isPhoneCollectionLegend(e) {
  let t = normalizeWhitespace(e).toLowerCase();
  return /^phones?\b/.test(t) || /\bphone number\b/.test(t);
}
export function isPhoneCollectionGroup(e, t) {
  return !!isPhoneCollectionLegend(e) || t.some((e10) => "Phone Number" === e10 || "Phone Country Code" === e10);
}
function rt(e) {
  let t = xpath.getOrderedNodes(".//div[contains(@class, 'iCIMS_TableRow')]", e), r = [];
  for (let e10 of t) {
    let t10 = t8(e10);
    t10 && r.push({ ...t10, label: normalizePhoneChildLabel(t10.label) });
  }
  if (0 === r.length) return null;
  let n2 = normalizeWhitespace(e.querySelector("legend")?.textContent), o = isPhoneCollectionGroup(n2, r.map((e10) => e10.label));
  return (/^addresses?\b/i.test(n2) && console.info(`[IcimsAddressDebug] phone collection gate ${JSON.stringify({ childRuleCount: r.length, isPhoneCollection: o, phoneNumberChildCount: r.filter((e10) => "Phone Number" === e10.label).length, phoneCountryCodeChildCount: r.filter((e10) => "Phone Country Code" === e10.label).length, phoneTypeChildCount: r.filter((e10) => "Phone Type" === e10.label).length })}`), o) ? { type: enums.FIELD_TYPE.SECTION, label: "Phones", required: r.some((e10) => e10.required), $input: e, children: r, options: utils.buildIcimsSectionOptionSummary(r, { forceOptionsArray: true }) } : null;
}
function rr(e, t) {
  for (let t10 of Array.from(e.childNodes)) {
    let e10 = t10 instanceof HTMLElement && (t10.matches("input, select, textarea") || !!t10.querySelector("input, select, textarea"));
    if (e10) break;
    let r = B(t10).replace(/[:\uff1a]\s*$/, "");
    if (r) return r;
  }
  if (t instanceof HTMLInputElement || t instanceof HTMLSelectElement || t instanceof HTMLTextAreaElement) {
    let e10 = eU(t);
    if (e10) return e10.replace(/[:\uff1a]\s*$/, "");
  }
  return normalizeWhitespace(t ? eH(t) : "").replace(/[:\uff1a]\s*$/, "");
}
function rn(e) {
  return tK(e, { getLabel: (e10, t) => rr(e10, t), supportsCheckbox: true, supportsComposite: true, supportsDate: true, supportsRadio: true });
}
function ro() {
  let e = Array.from(document.querySelectorAll("fieldset.group")), t = e.filter((e10) => z(e10)), r = [];
  for (let e10 of t) {
    let t10 = new Set(Array.from(e10.querySelectorAll(".icims_group_loop[data-group-loop-name]")).map((e11) => normalizeWhitespace(e11.getAttribute("data-group-loop-name")).toLowerCase()).filter(Boolean));
    if (t10.has("education") || t10.has("workexperience") || t10.has("employment") || t10.has("workhistory")) continue;
    let n2 = Array.from(e10.children).filter((e11) => e11 instanceof HTMLElement && e11.classList.contains("row"));
    for (let e11 of n2) {
      let t11 = Array.from(e11.children).filter((e12) => e12 instanceof HTMLElement && e12.classList.contains("cell") && !e12.classList.contains("spacer"));
      for (let e12 of t11) {
        let t12 = rn(e12);
        t12 && r.push(t12);
      }
    }
  }
  return r;
}
function ri() {
  let e = xpath.getOrderedNodes("//div[contains(@class, 'iCIMS_TableRow')]", document), t = [];
  for (let r2 of e) {
    if (eh(r2) || ec(r2)) continue;
    let e10 = t8(r2);
    e10 && t.push(e10);
  }
  if (0 === t.length) {
    let e10 = Array.from(document.querySelectorAll('tr select[aria-label], tr input[type="text"][aria-label]'));
    for (let r2 of e10) {
      if (!(r2 instanceof HTMLElement) || null === r2.offsetParent || eh(r2) || ec(r2)) continue;
      let e11 = eY(r2);
      if (!e11) continue;
      let n3 = "true" === r2.getAttribute("aria-required") || "true" === r2.getAttribute("i_required");
      if (r2 instanceof HTMLSelectElement) {
        t.push({ type: enums.FIELD_TYPE.SELECT_ORIGINAL, label: e11, required: n3, $label: r2, $input: r2, options: utils.extractIcimsSelectOptions(r2) });
        continue;
      }
      t.push({ type: enums.FIELD_TYPE.TEXT, label: e11, required: n3, $label: r2, $input: r2 });
    }
  }
  tk(t, tM(document, { skipRepeatableSections: true, skipStructuredRows: true })), tk(t, t$());
  let r = xpath.getFirstOrderedNode(`.//input[@type='submit' and @value="Submit Profile"]`), n2 = r ? r.textContent?.trim() : "";
  return [t, n2];
}
function ra() {
  let e = xpath.getOrderedNodes("//*[@role='group']", document), t = [], r = e.filter((e10) => e10 instanceof HTMLElement), n2 = { seen: 0, skippedAsPhone: 0, skippedAsRepeatable: 0, skippedAsIgnored: 0, extracted: 0, extractReturnedEmpty: 0 };
  for (let r2 of e) {
    let e10 = r2, o2 = xpath.getFirstOrderedNode(`.//h2[contains(@class, 'iCIMS_SubHeader') or @id="iCIMS_BasicProfilePane_Title"]`, r2);
    if (!o2) continue;
    let a3 = o2?.textContent?.trim();
    if (lodash.isEmpty(a3) || q(a3)) continue;
    if (U(a3)) {
      let r3 = getSectionSnapshots(e10);
      if (r3.length > 0) {
        let n3 = xpath.getOrderedNodes(".//div[contains(@class, 'iCIMS_TableRow') and .//div[contains(@class, 'iCIMS_InfoField')]]", e10);
        for (let e11 of n3) {
          let n4 = r3.some((t10) => t10.contains(e11));
          if (n4) continue;
          let o3 = t8(e11);
          o3 && t.push(o3);
        }
      }
      continue;
    }
    let l3 = /* @__PURE__ */ new Set(), u2 = false;
    for (let r3 of Array.from(e10.querySelectorAll("fieldset.iCIMS_CollectionGroup"))) {
      let e11 = rt(r3);
      e11 && (l3.add(r3), u2 || (u2 = true, t.push(e11)));
    }
    let c2 = xpath.getOrderedNodes(".//div[contains(@class, 'iCIMS_TableRow')]", e10);
    for (let e11 of c2) {
      let r3 = e11.closest("fieldset.iCIMS_CollectionGroup"), o3 = /^addresses?\b/i.test(normalizeWhitespace(r3?.querySelector("legend")?.textContent));
      if (o3 && (n2.seen += 1), r3 && l3.has(r3)) {
        o3 && (n2.skippedAsPhone += 1);
        continue;
      }
      if (eh(e11)) {
        o3 && (n2.skippedAsRepeatable += 1);
        continue;
      }
      if (ec(e11)) {
        o3 && (n2.skippedAsIgnored += 1);
        continue;
      }
      let i2 = t8(e11);
      i2 ? (o3 && (n2.extracted += 1), t.push(i2)) : o3 && (n2.extractReturnedEmpty += 1);
    }
  }
  let o = Array.from(document.querySelectorAll(".iCIMS_TableRow"));
  for (let e10 of o) {
    if (!e10.closest(".iCIMS_ProfileFormTable") || r.some((t10) => t10.contains(e10)) || eh(e10) || ec(e10)) continue;
    let n3 = t8(e10);
    n3 && t.push(n3);
  }
  let a2 = xpath.getFirstOrderedNode(`.//input[@type='submit' and @value="Submit Profile"]`), l2 = a2 ? a2.textContent?.trim() : "";
  return n2.seen > 0 && console.info(`[IcimsAddressDebug] profile row gate ${JSON.stringify(n2)}`), [t, l2];
}
function rl(e) {
  let t = e.selectedOptions?.[0] ?? e.options?.[e.selectedIndex] ?? null;
  if (!t) return "";
  let r = normalizeWhitespace(t.text), n2 = normalizeWhitespace(t.value);
  return !r || "0" === n2 || /make a selection/i.test(r) ? "" : r;
}
function rs(e) {
  let t = rl(e);
  if (t) return t;
  let r = normalizeWhitespace(e.nextElementSibling?.textContent);
  if (r && !/make a selection/i.test(r)) return r;
  let n2 = normalizeWhitespace(e.value);
  return "0" === n2 ? "" : n2;
}
function ru(e) {
  let t = Array.from(e.querySelectorAll("select")), r = e.querySelector("input"), n2 = t[0] ?? null, o = t[1] ?? null, i2 = n2?.selectedOptions?.[0] ?? n2?.options?.[n2.selectedIndex] ?? null, a2 = o?.selectedOptions?.[0] ?? o?.options?.[o.selectedIndex] ?? null, l2 = utils.getMonthNumber(i2?.value || i2?.text || ""), s2 = utils.padDatePart(normalizeWhitespace(a2?.value || a2?.text || "")), u2 = normalizeWhitespace(r?.value);
  return u2 || l2 || s2 ? [u2, l2, s2].filter(Boolean).join("-") : "";
}
function rc(e) {
  let t = (e.$checkboxs ?? []).filter((e10) => e10 instanceof HTMLInputElement);
  return 0 === t.length ? "" : 1 === t.length ? t[0].checked ? "true" : "" : t.map((t10, r) => t10.checked ? normalizeWhitespace(e.options?.[r] || t10.value || t10.getAttribute("aria-label")) : "").filter(Boolean);
}
function rd(e) {
  switch (e.type) {
    case enums.FIELD_TYPE.TEXT:
      return normalizeWhitespace(e.$input?.value);
    case enums.FIELD_TYPE.SELECT:
    case enums.FIELD_TYPE.SELECT_ORIGINAL:
      return rs(e.$input);
    case enums.FIELD_TYPE.DATE:
      return ru(e.$input);
    case enums.FIELD_TYPE.CHECKBOX:
      return rc(e);
    case enums.FIELD_TYPE.RADIOGROUP: {
      let t = e, r = t.$input instanceof HTMLInputElement ? t.$input : null, n2 = Array.from(t.$radioParent?.querySelectorAll('input[type="radio"]') ?? []), o = r?.name ? n2.filter((e10) => e10.name === r.name) : n2, i2 = o.findIndex((e10) => e10.checked);
      if (i2 < 0) return "";
      return normalizeWhitespace(t.options?.[i2] || o[i2]?.value);
    }
    case enums.FIELD_TYPE.SECTION:
      return rf(e.children ?? []);
    default:
      return "";
  }
}
function rf(e) {
  let t = {};
  for (let r of e) t[r.label] = rd(r);
  return t;
}
function rp(e) {
  let t = e.$input;
  return t && "function" == typeof t.getAttribute && "function" == typeof t.setAttribute ? t : null;
}
function rm(e, t, r) {
  if (!r.markEducationRows && !r.includeEducationSnapshotIndex) return null;
  let n2 = e?.getAttribute(snapshotAlignment.ICIMS_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE);
  if (r.markEducationRows && e && (n2 = String(t), e.setAttribute(snapshotAlignment.ICIMS_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE, n2)), !r.includeEducationSnapshotIndex || !n2) return null;
  let o = Number(n2);
  return Number.isInteger(o) && o >= 0 ? o : null;
}
function rh(e, t, r) {
  let n2 = rf(e.children ?? []), o = rp(e), i2 = rm(o, t, r), a2 = o ? educationItemTrace.getEducationTraceForRow(o, { attributes: snapshotAlignment.ICIMS_EDUCATION_TRACE_ATTRIBUTES, includeEducationTrace: r.includeEducationTrace, markEducationRows: r.markEducationRows, runId: r.educationTraceRunId, snapshotIndex: t }) : null;
  return null !== i2 && (n2[snapshotAlignment.ICIMS_EDUCATION_SNAPSHOT_INDEX_KEY] = i2), a2 && (n2[educationItemTrace.EDUCATION_TRACE_KEY] = a2), n2;
}
function rg(e, t = {}) {
  let r = {}, n2 = [], o = [];
  for (let i2 of e) {
    if (i2.type === enums.FIELD_TYPE.EDUCATION) {
      n2.push(rh(i2, n2.length, t));
      continue;
    }
    if (i2.type === enums.FIELD_TYPE.EMPLOYMENT) {
      o.push(rf(i2.children ?? []));
      continue;
    }
    r[i2.label] = rd(i2);
  }
  return n2.length > 0 && (r.education = n2), o.length > 0 && (r.employment = o), r;
}
function rb() {
  return eR(tu());
}
function ry() {
  let [e] = ra();
  return eR(e);
}
function rv() {
  let [e] = ri();
  return 0 === e.length && (e = ro()), eR(e);
}
function rw() {
  let e = ro();
  return eR(e);
}
function rS() {
  let e = tc();
  return tk(e, tM(document, { skipRepeatableSections: true, skipStructuredRows: true })), tk(e, t$()), eR(e);
}
function rE(e) {
  return utils.normalizeIcimsRuleLabel(e.label).toLowerCase();
}
function rx(e) {
  let t = e.options;
  return Array.isArray(t) ? t.map((e10) => "string" == typeof e10 ? utils.normalizeIcimsWhitespace(e10) : "").filter((e10) => e10 && !utils.isIcimsPlaceholderSelectOptionText(e10)).map((e10) => e10.toLowerCase()) : [];
}
function rC(e) {
  return e.type === enums.FIELD_TYPE.SELECT || e.type === enums.FIELD_TYPE.SELECT_ORIGINAL;
}
function rA(e) {
  return e.type === enums.FIELD_TYPE.CHECKBOX || e.type === enums.FIELD_TYPE.RADIOGROUP;
}
function rk(e) {
  let t = [];
  for (let r of e) if (r.type !== enums.FIELD_TYPE.EDUCATION && r.type !== enums.FIELD_TYPE.EMPLOYMENT) {
    if (r.type === enums.FIELD_TYPE.SECTION && Array.isArray(r.children)) {
      t.push(...r.children);
      continue;
    }
    t.push(r);
  }
  return t;
}
function rT(e) {
  let t = /* @__PURE__ */ new Set();
  for (let r of e) if (rA(r)) for (let e10 of rx(r)) t.add(e10);
  return t;
}
function rF(e, t) {
  if (!rC(e) || !rC(t)) return false;
  let r = rx(e), n2 = rx(t);
  return 0 !== n2.length && (0 === r.length || r.length !== n2.length || n2.some((e10, t10) => e10 !== r[t10]));
}
export function getIcimsComboQuestionRules(e, t) {
  let r = /* @__PURE__ */ new Map(), n2 = rk(e), o = rT(n2), i2 = [];
  for (let e10 of n2) {
    let t10 = rE(e10);
    t10 && !r.has(t10) && r.set(t10, e10);
  }
  for (let e10 of rk(t)) {
    let t10 = rE(e10);
    if (!t10) continue;
    let n3 = r.get(t10);
    if (!n3) {
      if (o.has(t10)) continue;
      r.set(t10, e10), i2.push(e10);
      continue;
    }
    rF(n3, e10) && (r.set(t10, e10), i2.push(e10));
  }
  return i2;
}
export function extractRules() {
  let e = detectIcimsPageType(), t = e ? g[e]() : rS();
  return createLogin.excludeIcimsCreateLoginCredentialRules(t);
}
export function getFormSnapshot(e = extractRules(), t = {}) {
  return rg(e, t);
}
export function getEducationRules() {
  return eO(H);
}
export function getExperienceRules() {
  return eO(Y);
}
