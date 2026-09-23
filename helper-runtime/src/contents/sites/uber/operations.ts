// @ts-nocheck
/**
 * Uber Careers — DOM fill operations (inputs, sections, resume, conditionals).
 */

import * as choiceMatch from "../../methods/choice-match.ts"
import * as sectionResults from "../../methods/section-results.ts"
import * as cancellation from "../../methods/cancellation.ts"
import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as dom from "../../methods/dom.ts"
import * as delay from "../../../utils/delay.js"
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js"
import * as rules from "./rules.js"
import * as uberAnswer from "./answer.ts"

const getTarget = { default: getTargetOrTimeout }
let h = ["education", "experience", "employment", "work", "add", "edit"], g = { jan: "01", january: "01", feb: "02", february: "02", mar: "03", march: "03", apr: "04", april: "04", may: "05", jun: "06", june: "06", jul: "07", july: "07", aug: "08", august: "08", sep: "09", sept: "09", september: "09", oct: "10", october: "10", nov: "11", november: "11", dec: "12", december: "12" };
function b(e2, t, r, n) {
  if (!n) return null;
  let o2 = n.closest('[data-baseweb="flex-grid-item"]') || n.closest('[data-baseweb="block"]') || n.parentElement, i2 = o2?.querySelector('input[role="combobox"][id*="start-date-month"]');
  if (i2 || (i2 = e2.querySelector(`input[role="combobox"][name="${t}.${r}.startDate.month"]`)), !i2) {
    let t2 = Array.from(e2.querySelectorAll('input[role="combobox"][id*="start-date-month"]'));
    if (t2.length > 0) {
      let e3 = n.getBoundingClientRect(), r2 = null, o3 = 1 / 0;
      for (let n2 of t2) {
        let t3 = n2.getBoundingClientRect(), i3 = Math.abs(t3.top - e3.top) + Math.abs(t3.left - e3.left);
        i3 < o3 && (o3 = i3, r2 = n2);
      }
      i2 = r2;
    }
  }
  return i2;
}
async function y(e2) {
  let t = (e3) => {
    if (!e3.isConnected) return false;
    let t2 = window.getComputedStyle(e3);
    if ("none" === t2.display || "hidden" === t2.visibility) return false;
    let r2 = e3.getBoundingClientRect();
    return r2.width > 0 && r2.height > 0;
  }, r = (e3, t2) => {
    let r2 = e3.left - t2.left, n2 = e3.top - t2.top;
    return Math.hypot(r2, n2);
  }, n = () => {
    let n2 = e2.getAttribute("aria-controls");
    if (n2) {
      let e3 = document.getElementById(n2);
      if (e3 && "listbox" === e3.getAttribute("role")) {
        let r2 = e3.querySelectorAll('[role="option"]');
        if (r2.length > 0 && t(e3)) return e3;
      }
    }
    let o2 = Array.from(document.querySelectorAll('[role="listbox"]')), i2 = o2.filter((e3) => !!t(e3) && e3.querySelectorAll('[role="option"]').length > 0);
    if (i2.length > 0) {
      let t2 = e2.getBoundingClientRect(), n3 = null;
      for (let e3 of i2) {
        let o3 = r(e3.getBoundingClientRect(), t2);
        (!n3 || o3 < n3.score) && (n3 = { element: e3, score: o3 });
      }
      if (n3) return n3.element;
    }
    return null;
  };
  return await getTarget.default(n, () => false, 25);
}
async function preFillForm() {
  let e2 = rules.findMainForm();
  if (!e2) {
    await delay.delay(200);
    return;
  }
  let t = (e3) => {
    let t2 = e3.getAttribute("aria-expanded");
    if ("false" === t2) {
      try {
        e3.scrollIntoView({ block: "center", inline: "nearest" });
      } catch {
      }
      return e3.click(), true;
    }
    return false;
  }, r = Array.from(e2.querySelectorAll('[aria-expanded="false"]'));
  for (let e3 of r) {
    let r2 = (e3.textContent || "").toLowerCase();
    h.some((e4) => r2.includes(e4)) && t(e3) && await delay.delay(80);
  }
  try {
    e2.scrollIntoView({ block: "start", inline: "nearest" });
  } catch {
  }
  await delay.delay(120);
  let n = document.scrollingElement || document.documentElement, o2 = n.scrollHeight - n.clientHeight, i2 = 6;
  for (let e3 = 0; e3 <= i2; e3++) n.scrollTop = Math.floor(o2 * e3 / i2), await delay.delay(180);
  for (let e3 = i2; e3 >= 0; e3--) n.scrollTop = Math.floor(o2 * e3 / i2), await delay.delay(120);
  await delay.delay(200);
}
async function w(e2, t) {
  let r = t.toLowerCase(), n = Array.from(e2.querySelectorAll("button")), o2 = n.find((e3) => (e3.textContent || "").toLowerCase().includes(r));
  if (!o2 || o2.disabled) return null;
  try {
    o2.scrollIntoView({ block: "center", inline: "nearest" });
  } catch {
  }
  return o2.click(), o2;
}
async function S(e2, t, r) {
  let n = rules.findMainForm();
  if (!n) return;
  let o2 = () => n.querySelectorAll(e2).length, i2 = o2(), a2 = 20, l2 = 25;
  for (let e3 = 0; e3 < a2 && i2 < r; e3++) {
    let e4 = await w(n, t);
    if (!e4) break;
    for (let e5 = 0; e5 < l2; e5++) {
      await delay.delay(120);
      let e6 = o2();
      if (e6 > i2) {
        i2 = e6;
        break;
      }
    }
  }
}
async function E(e2) {
  let t = Array.from(e2.querySelectorAll("button")), r = t.find((e3) => {
    let t2 = (e3.textContent || "").toLowerCase(), r2 = (e3.getAttribute("aria-label") || "").toLowerCase();
    return t2.includes("remove") || t2.includes("delete") || t2.includes("trash") || r2.includes("remove") || r2.includes("delete");
  });
  if (!r || r.disabled) return false;
  try {
    r.scrollIntoView({ block: "center", inline: "nearest" });
  } catch {
  }
  r.click(), await delay.delay(200);
  let n = Array.from(document.querySelectorAll("button")), o2 = n.find((e3) => {
    let t2 = (e3.textContent || "").toLowerCase().trim();
    return "remove" === t2 || "delete" === t2 || "confirm" === t2;
  });
  return o2 && !o2.disabled && (o2.click(), await delay.delay(250)), true;
}
async function x(e2) {
  let t = rules.findMainForm();
  if (!t) return;
  let r = "educations" === e2 ? 'input[name^="educations."][name$=".schoolName"]' : 'input[name^="experiences."][name$=".companyName"]', n = () => Array.from(new Set(Array.from(t.querySelectorAll(r)).map((t2) => {
    let r2 = t2.name || "", n2 = r2.match(RegExp(`^${e2}\\.(\\d+)\\.`));
    return n2 ? Number(n2[1]) : null;
  }))).filter((e3) => Number.isFinite(e3)).sort((e3, t2) => t2 - e3);
  for (let o2 of n()) {
    let n2 = "educations" === e2 ? "schoolName" : "companyName", i2 = t.querySelector(`input[name="${e2}.${o2}.${n2}"]`);
    if (!i2) continue;
    let a2 = i2.closest('[data-baseweb="block"]') || i2.closest('[data-baseweb="flex-grid"]') || i2.closest("fieldset") || i2.parentElement;
    if (!a2) continue;
    let l2 = t.querySelectorAll(r).length, s2 = await E(a2);
    if (!s2) continue;
    let u2 = 25;
    for (let e3 = 0; e3 < u2; e3++) {
      await delay.delay(120);
      let e4 = t.querySelectorAll(r).length;
      if (e4 < l2) break;
    }
  }
}
async function reinitializeEducationAndEmployment() {
  await x("educations"), await x("experiences");
}
async function reapplyFirstLastNameFromRecord(e2, t) {
  if (!e2 || !t) return;
  let r = t["First Name"], n = t["Last Name"], o2 = null == r ? "" : String(Array.isArray(r) ? r[0] : r).trim(), i2 = null == n ? "" : String(Array.isArray(n) ? n[0] : n).trim(), a2 = e2.querySelector('input[name="firstName"]'), l2 = e2.querySelector('input[name="lastName"]');
  a2?.isConnected && o2 && await fillInputTextField(a2, o2), l2?.isConnected && i2 && await fillInputTextField(l2, i2);
}
async function addEducationSection(e2) {
  e2 && !(e2 <= 0) && await S('input[name^="educations."][name$=".schoolName"]', "add education", e2);
}
async function addExperienceSection(e2) {
  e2 && !(e2 <= 0) && await S('input[name^="experiences."][name$=".companyName"]', "add experience", e2);
}
async function uploadResume(e2, t, r) {
  let n = document.querySelector('input[type="file"][accept*=".pdf"]') || document.querySelector('input[type="file"][accept*=".doc"]') || document.querySelector('input[type="file"]');
  n && (await dom.uploadFiles(n, await answerMethods.fetchPdfAsBlob(e2), t, r, "Resume/CV"), await delay.delay(400));
}
async function removeResume() {
  let e2 = Array.from(document.querySelectorAll("button")).filter((e3) => {
    let t2 = (e3.textContent || "").toLowerCase().trim();
    return !!t2 && (t2.includes("remove") || t2.includes("delete") || t2.includes("clear") || t2.includes("discard"));
  }), t = e2[0];
  if (t && !t.disabled) try {
    t.click(), await delay.delay(300);
  } catch {
  }
}
function isLinkField(e2) {
  return /linkedin|github|portfolio/i.test(e2);
}
function D(e2) {
  if (!e2 || "string" != typeof e2) return "";
  let t = e2.trim();
  return t ? /^https?:\/\//i.test(t) ? t : t.startsWith("//") ? `https:${t}` : (/^www\./i.test(t), `https://${t}`) : "";
}
async function P(e2, t) {
  if (!e2 || !t || "" === t.trim() || e2.disabled || e2.hasAttribute("readonly")) return false;
  let r = D(t);
  if (!r) return false;
  try {
    let t2 = e2.value;
    e2.value = r;
    try {
      let n2 = e2?._valueTracker;
      n2 && n2.setValue && (n2.setValue(t2), n2.setValue(r));
    } catch (e3) {
    }
    await delay.delay(100);
    let n = e2.value || "", o2 = "" !== n.trim();
    return o2;
  } catch (t2) {
    console.warn("[uber][fillLinkFieldSafely] Error:", t2);
    try {
      e2.value = r, await delay.delay(100);
      let t3 = e2.value || "", n = "" !== t3.trim();
      return n;
    } catch (e3) {
      return console.warn("[uber][fillLinkFieldSafely] Error in fallback:", e3), false;
    }
  }
}
async function _(e2) {
  if (!e2 || e2.disabled || e2.hasAttribute("readonly")) return;
  let t = e2.value || "";
  if ("" !== t.trim()) try {
    let t2 = e2.value;
    e2.value = "";
    try {
      let r = e2?._valueTracker;
      r && r.setValue && (r.setValue(t2), r.setValue(""));
    } catch {
    }
    e2.dispatchEvent(new Event("input", { bubbles: true })), e2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(50);
  } catch {
  }
}
function isDescriptionField(e2) {
  return /description\s*\(optional\)|description/i.test(e2) && !isLinkField(e2);
}
function isZipCodeField(e2) {
  return /^zip\s*code|zipcode|zip_code/i.test(e2);
}
function createLinksFieldOperationHandler(e2, t) {
  return async (r, n, o2 = true) => {
    try {
      let i2 = uberAnswer.findLinksValueInRecord(r.label, n);
      if (!i2) try {
        i2 = answerMethods.findValueInRecord(r.label, n);
      } catch {
        i2 = null;
      }
      let a2 = Array.isArray(i2) ? i2[0] : i2, l2 = null == a2 || "string" == typeof a2 && "" === a2.trim();
      if (l2) {
        r.$input && await _(r.$input), o2 && t(r.label);
        return;
      }
      if (!r.$input) {
        o2 && t(r.label);
        return;
      }
      let u2 = String(a2 ?? ""), c2 = await P(r.$input, u2), d2 = r.$input.value || "";
      c2 && d2.trim() ? o2 && e2(r.label) : o2 && t(r.label);
    } catch (n2) {
      let e3 = n2 && "object" == typeof n2 && "target" in n2 && "type" in n2 && "error" === n2.type && n2.target !== r.$input && n2.target?.tagName === "LINK";
      if (e3) return;
      console.warn(`[uber][links] Error filling "${r.label}":`, n2), o2 && t(r.label);
    }
  };
}
function createZipCodeFieldOperationHandler(t, r) {
  return async (n, o2, i2 = true) => {
    try {
      let a2 = ["Zip code", "Zip Code", "ZIP code", "ZIP Code", "zipcode", "zip_code", "Zip", "zip"], l2 = null;
      for (let e2 of a2) if (void 0 !== o2[e2] && null !== o2[e2] && "" !== o2[e2]) {
        l2 = o2[e2];
        break;
      }
      if (!l2) {
        const findValueInRecord = answerMethods.findValueInRecord;
        try {
          l2 = findValueInRecord(n.label, o2);
        } catch (e2) {
        }
      }
      let s2 = Array.isArray(l2) ? l2[0] : l2;
      if (null == s2 || "string" == typeof s2 && "" === s2.trim() || !n.$input) {
        i2 && r(n.label);
        return;
      }
      let u2 = String(s2 ?? "").trim(), c2 = await fillInputTextField(n.$input, u2, n), d2 = n.$input.value || "";
      c2 && d2.trim() ? i2 && t(n.label) : i2 && r(n.label);
    } catch (e2) {
      console.warn(`[uber][zipcode] Error filling "${n.label}":`, e2), i2 && r(n.label);
    }
  };
}
function createDescriptionFieldOperationHandler(e2, t) {
  return async (r, n, o2 = true) => {
    let i2, a2;
    let l2 = ["Description (optional)", "Description", "description", "jobDescriptions", "Job Description", "jobDescription"];
    for (let e3 of l2) if (n.hasOwnProperty(e3)) {
      let t2 = n[e3];
      if (null != t2 && "" !== t2) {
        i2 = t2, a2 = e3;
        break;
      }
    }
    if (null == i2 || "" === i2) {
      let e3 = Object.keys(n);
      for (let t2 of e3) {
        let e4 = t2.toLowerCase().trim();
        for (let r2 of l2) {
          let o3 = r2.toLowerCase().trim(), l3 = e4.replace(/[()]/g, "").replace(/\s+/g, ""), s3 = o3.replace(/[()]/g, "").replace(/\s+/g, "");
          if (l3 === s3 || e4 === o3) {
            let e5 = n[t2];
            if (null != e5 && "" !== e5) {
              i2 = e5, a2 = t2;
              break;
            }
          }
        }
        if (null != i2 && "" !== i2) break;
      }
    }
    let s2 = Array.isArray(i2) ? i2[0] : i2;
    if (null == s2 || "string" == typeof s2 && "" === s2.trim()) {
      o2 && t(r.label);
      return;
    }
    let u2 = await fillInputTextField(r.$input, String(s2 ?? ""), r);
    if (false === u2) {
      o2 && t(r.label);
      return;
    }
    let c2 = r.$input;
    if (c2) {
      let e3 = (c2.value || "").trim(), i3 = String(n.Company || n.company || "").trim();
      if (e3 === i3 && "" !== i3 || !e3) {
        o2 && t(r.label);
        return;
      }
    }
    o2 && e2(r.label);
  };
}
async function fillInputTextField(e2, t, r) {
  if (!t || "" === t.trim()) return false;
  let n = e2.name || "", o2 = n.includes(".endDate.year");
  if (o2) {
    let r2 = e2.closest("form");
    if (r2) {
      let o3 = n.match(/^(educations|experiences)\.(\d+)\./);
      if (o3) {
        let [, n2, i3] = o3, a3 = r2.querySelector(`input[name="${n2}.${i3}.startDate.year"]`);
        if (a3) {
          let e3 = 20;
          for (let t2 = 0; t2 < e3 && (!a3.value || "" === a3.value.trim()); t2++) await delay.delay(100);
          if (!a3.value || "" === a3.value.trim()) return false;
        }
        if (e2.disabled || e2.hasAttribute("disabled")) {
          let t2 = r2.querySelector(`input[type="checkbox"][name="${n2}.${i3}.isCurrent"]`);
          if (t2 && t2.checked && (t2.click(), await delay.delay(300), e2.disabled)) return false;
        }
        if (a3 && a3.value && t) {
          let e3 = parseInt(a3.value, 10), r3 = parseInt(t, 10);
          if (r3 < e3) return false;
        }
      }
    }
  }
  if (e2.disabled || e2.hasAttribute("readonly")) return false;
  try {
    e2.scrollIntoView({ block: "center", inline: "nearest" });
  } catch {
  }
  let i2 = (t2) => {
    try {
      e2.dispatchEvent(t2);
    } catch (e3) {
    }
  };
  try {
    e2.focus(), i2(new FocusEvent("focusin", { bubbles: true })), await delay.delay(50);
    let r2 = Object.getOwnPropertyDescriptor(e2 instanceof HTMLInputElement ? window.HTMLInputElement.prototype : window.HTMLTextAreaElement.prototype, "value")?.set, n2 = (t2) => {
      try {
        r2 ? r2.call(e2, t2) : e2.value = t2;
      } catch (r3) {
        e2.value = t2;
      }
    };
    if (o2) {
      n2(""), i2(new Event("input", { bubbles: true, composed: true })), await delay.delay(30), n2(t), i2(new Event("input", { bubbles: true, composed: true }));
      try {
        let r3 = e2?._valueTracker;
        r3 && r3.setValue && (r3.setValue(""), r3.setValue(t));
      } catch (e3) {
      }
    } else n2(""), i2(new Event("input", { bubbles: true, composed: true })), i2(new Event("change", { bubbles: true, composed: true })), await delay.delay(30), n2(t), i2(new Event("input", { bubbles: true, composed: true })), i2(new Event("change", { bubbles: true, composed: true }));
    await delay.delay(60), i2(new FocusEvent("focusout", { bubbles: true })), e2.blur(), await delay.delay(60);
  } catch (r2) {
    try {
      e2.value = t, await delay.delay(100);
    } catch (e3) {
      return false;
    }
  }
  let a2 = e2.value || "", l2 = t.trim(), s2 = a2.trim();
  if (!s2) return false;
  let u2 = r?.label || "", d2 = isLinkField(u2);
  if (d2) {
    if (s2) {
      let e3 = (e4) => e4.replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/\/$/, "").toLowerCase().trim(), t2 = e3(l2), r2 = e3(s2);
      if (r2 === t2) return true;
      if (r2 && t2) {
        let e4 = (e5) => {
          let t3 = e5.split("/");
          return t3[0] || e5;
        }, n2 = e4(t2), o3 = e4(r2);
        if (o3 === n2 || r2.includes(n2) || t2.includes(o3)) return true;
        r2.length, t2.length, r2.length, t2.length;
      }
      return true;
    }
    return false;
  }
  return s2 === l2 || s2 === l2.slice(0, s2.length);
}
function B(e2) {
  let t = (e2 || "").trim();
  if (!t) return t;
  if (/^\d{1,2}$/.test(t)) {
    let e3 = Number(t);
    if (e3 >= 1 && e3 <= 12) return String(e3).padStart(2, "0");
  }
  let r = t.toLowerCase();
  return g[r] || t;
}
function q(e2, t, r) {
  let n = choiceMatch.findExactChoice(e2, t, (e3) => e3.textContent);
  if (n || !r) return n;
  let i2 = B(t.trim().toLowerCase());
  if (i2) return choiceMatch.findExactChoice(e2, i2, (e3) => B((e3.textContent || "").trim().toLowerCase()));
}
async function fillSelectField(e2, t) {
  let r = e2.label, n = Array.isArray(t) ? t?.[0] : t;
  if (null == n) return;
  let o2 = String(n ?? "").trim();
  if (!o2) return;
  let i2 = r.toLowerCase().includes("month");
  i2 && (o2 = B(o2));
  let a2 = e2.$input;
  if (!a2) throw new filler.FillError(`(Select) Could not find field for label: "${r}"`);
  if (a2 instanceof HTMLInputElement && "combobox" === a2.getAttribute("role")) {
    a2.name;
    let e3 = r.toLowerCase().includes("end date") && r.toLowerCase().includes("month"), t2 = null, n2 = null;
    if (e3) {
      let e4 = a2.closest("form");
      if (e4) {
        let r2 = a2.closest('[data-baseweb="flex-grid-item"]') || a2.closest('[data-baseweb="block"]') || a2.parentElement, i3 = r2?.querySelector('input[name$=".endDate.year"]');
        if (i3) {
          let r3 = i3.name.match(/^(educations|experiences)\.(\d+)\./);
          if (r3) {
            let [, l2, s3] = r3;
            t2 = l2, n2 = s3;
            let u3 = e4.querySelector(`input[name="${l2}.${s3}.startDate.year"]`);
            if (u3 && (!u3.value || "" === u3.value.trim())) return;
            if (a2.disabled) {
              let t3 = e4.querySelector(`input[type="checkbox"][name="${l2}.${s3}.isCurrent"]`);
              if (t3 && t3.checked && (t3.click(), await delay.delay(300), a2.disabled)) return;
            }
            if (u3 && u3.value && i3.value && o2) {
              let t3 = parseInt(u3.value, 10), r4 = parseInt(i3.value, 10);
              if (r4 < t3) return;
              if (r4 === t3) {
                let t4 = b(e4, l2, s3, u3);
                if (t4) {
                  let e5 = 30;
                  for (let r5 = 0; r5 < e5 && (!t4.value || "" === t4.value.trim()); r5++) await delay.delay(100);
                  if (t4.value && "" !== t4.value.trim()) {
                    let e6 = parseInt(B(t4.value), 10), r5 = parseInt(B(o2), 10);
                    if (r5 < e6) return;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (a2.disabled && !e3) return;
    let s2 = async () => {
      let e4 = a2.closest('[data-baseweb="select"]'), t3 = [];
      if (e4) {
        t3.push(e4);
        let r2 = e4.querySelector('[aria-haspopup="listbox"], [role="button"]');
        r2 && t3.push(r2);
        let n3 = e4.querySelector('[data-baseweb="select"] [data-baseweb="select-control"], [data-baseweb="select-control"]');
        n3 && t3.push(n3);
      }
      try {
        (e4 || a2).scrollIntoView({ block: "center", inline: "nearest" });
      } catch {
      }
      for (let e5 of t3) if (e5.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true })), e5.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })), e5.dispatchEvent(new MouseEvent("mouseup", { bubbles: true })), e5.dispatchEvent(new MouseEvent("click", { bubbles: true })), e5.dispatchEvent(new PointerEvent("pointerup", { bubbles: true })), await delay.delay(60), "true" === a2.getAttribute("aria-expanded")) break;
      if (a2.focus(), a2.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true })), a2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })), a2.dispatchEvent(new MouseEvent("mouseup", { bubbles: true })), a2.click(), a2.dispatchEvent(new PointerEvent("pointerup", { bubbles: true })), await delay.delay(60), "true" !== a2.getAttribute("aria-expanded")) {
        let e5 = a2.closest('[data-baseweb="select"]')?.querySelector('[data-baseweb="icon"]') || a2.parentElement?.querySelector('svg[data-baseweb="icon"]');
        e5?.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true })), e5?.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })), e5?.click?.(), e5?.dispatchEvent(new PointerEvent("pointerup", { bubbles: true })), await delay.delay(80);
      }
      if ("true" !== a2.getAttribute("aria-expanded")) {
        let e5 = new KeyboardEvent("keydown", { key: "ArrowDown", code: "ArrowDown", bubbles: true });
        Object.defineProperty(e5, "keyCode", { get: () => 40 }), Object.defineProperty(e5, "which", { get: () => 40 }), a2.dispatchEvent(e5), await delay.delay(80);
      }
    };
    await s2();
    let u2 = await y(a2);
    if (!u2) {
      try {
        a2.value = o2, a2.dispatchEvent(new Event("input", { bubbles: true })), await delay.delay(120);
        let e4 = new KeyboardEvent("keydown", { key: "Enter", code: "Enter", bubbles: true });
        if (Object.defineProperty(e4, "keyCode", { get: () => 13 }), Object.defineProperty(e4, "which", { get: () => 13 }), a2.dispatchEvent(e4), await delay.delay(120), a2.value?.trim()) {
          a2.blur();
          return;
        }
      } catch {
      }
      throw new filler.FillError(`(Select) Listbox not found for label: "${r}"`);
    }
    let d2 = Array.from(u2.querySelectorAll('[role="option"]'));
    if (0 === d2.length) throw new filler.FillError(`(Select) No options found for label: "${r}"`);
    let f2 = q(d2, o2, i2);
    if (!f2) throw new filler.FillError(`(Select) No exact option found for "${o2}"`);
    let p2 = f2, m2 = p2.firstElementChild || p2;
    m2.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true })), m2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })), m2.dispatchEvent(new MouseEvent("mouseup", { bubbles: true })), m2.dispatchEvent(new MouseEvent("click", { bubbles: true })), m2.dispatchEvent(new PointerEvent("pointerup", { bubbles: true })), await delay.delay(150);
    try {
      a2.dispatchEvent(new Event("input", { bubbles: true })), a2.dispatchEvent(new Event("change", { bubbles: true }));
    } catch {
    }
    if (a2.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), a2.blur(), await delay.delay(80), e3 && t2 && n2) {
      let e4 = a2.closest("form");
      if (e4) {
        let r2 = e4.querySelector(`input[name="${t2}.${n2}.startDate.year"]`), o3 = b(e4, t2, n2, r2);
        if (o3 && r2 && r2.value) {
          let i3 = 10, l2 = false;
          for (let e5 = 0; e5 < i3; e5++) {
            if (o3.value && "" !== o3.value.trim()) {
              l2 = true;
              break;
            }
            await delay.delay(100);
          }
          if (l2) {
            r2.dispatchEvent(new Event("input", { bubbles: true })), r2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(50), o3.dispatchEvent(new Event("input", { bubbles: true })), o3.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(50);
            let i4 = e4.querySelector(`input[name="${t2}.${n2}.endDate.year"]`);
            i4 && (i4.dispatchEvent(new Event("input", { bubbles: true })), i4.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(50)), a2.dispatchEvent(new Event("input", { bubbles: true })), a2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(100);
            let l3 = a2.closest('[data-baseweb="flex-grid-item"]') || a2.closest('[data-baseweb="block"]') || a2.parentElement, s3 = l3?.querySelector('[data-baseweb="form-control-caption"]');
            s3 && s3.textContent?.includes("End date must be equal to or after start date") && (a2.blur(), await delay.delay(50), a2.focus(), await delay.delay(50), a2.dispatchEvent(new Event("input", { bubbles: true })), a2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(100), a2.blur());
          }
        }
      }
    }
    return;
  }
  if (a2 instanceof HTMLSelectElement) {
    let e3 = Array.from(a2.options), t2 = o2.toLowerCase(), n2 = e3.find((e4) => (e4.textContent || "").trim().toLowerCase() === t2) || e3.find((e4) => (e4.value || "").trim().toLowerCase() === t2);
    if (!n2) throw new filler.FillError(`(Select) Option not found for label: "${r}"`);
    a2.value = n2.value, a2.dispatchEvent(new Event("input", { bubbles: true })), a2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(80);
    return;
  }
  if (a2 instanceof HTMLInputElement) {
    let t2 = await fillInputTextField(a2, o2, e2);
    if (!t2) throw new filler.FillError(`(Select fallback to text) Failed to fill input for label: "${r}"`);
  }
}
async function fillCheckboxField(e2, t) {
  let r = e2.$checkboxs?.[0] || e2.$input;
  if (!r || r.disabled) return;
  let n = Array.isArray(t) ? t?.[0] : t;
  if (null == n) return;
  let o2 = String(n).trim().toLowerCase(), i2 = "yes" === o2 || "true" === o2 || "1" === o2 || "y" === o2 || true === n || 1 === n;
  r.checked === i2 || (r.click(), await delay.delay(120), "Current" !== e2.label || i2 || await delay.delay(200));
}
async function fillRadioGroupFiled(e2, t) {
  let r = Array.isArray(t) ? t?.[0] : t, n = null == r || "string" == typeof r && "" === r.trim();
  if (n && e2.required) throw new filler.FillError(`(Radio) Required field "${e2.label}" has no value`);
  if (n) return;
  let i2 = String(r).trim().toLowerCase();
  if (!i2) return;
  let a2 = e2.$input, s2 = a2?.closest('[role="radiogroup"]'), u2 = s2 || document, d2 = Array.from(u2.querySelectorAll('input[type="radio"]')), f2 = (e3) => {
    let t2 = e3.closest('label[data-baseweb="radio"]');
    return (t2?.textContent || "").trim().toLowerCase();
  }, p2 = async (e3) => !!e3?.checked || !!e3 && !e3.checked && (e3.click(), await delay.delay(120), true), m2 = choiceMatch.findExactChoice(d2, i2, f2, (e3) => e3.value);
  if (!await p2(m2)) throw new filler.FillError(`(Radio) No option "${r}" found for label: "${e2.label}". Available options: ${d2.map((e3) => {
    let t2 = e3.closest('label[data-baseweb="radio"]');
    return t2?.textContent?.trim() || e3.value || "unknown";
  }).join(", ")}`);
}
async function fillConditionalZipCodeField(e2) {
  let t = rules.findMainForm();
  if (!t) return;
  let r = "Do you reside in the United States?", n = (e2?.regular || {})[r], o2 = String(Array.isArray(n) ? n?.[0] : n).trim().toLowerCase(), i2 = !!(e2?.regular?.["Zip code"] || e2?.regular?.zipcode || e2?.regular?.zip_code), a2 = !o2 && i2;
  if (!o2 && !a2) return;
  let l2 = () => {
    let e3 = Array.from(t.querySelectorAll('label[data-baseweb="form-control-label"]')), n2 = e3.find((e4) => (e4.textContent || "").trim() === r);
    if (!n2) return null;
    let o3 = n2.closest('[data-baseweb="flex-grid-item"]') || n2.closest('[data-baseweb="block"]') || n2.parentElement;
    return o3?.querySelector('[role="radiogroup"]');
  }, s2 = l2();
  if (!s2) return;
  let u2 = Array.from(s2.querySelectorAll('input[type="radio"]')), d2 = u2.find((e3) => {
    let t2 = e3.closest('label[data-baseweb="radio"]'), r2 = (t2?.textContent || "").trim().toLowerCase();
    return r2.includes("yes");
  });
  d2 && !d2.checked && (d2.click(), await delay.delay(200));
  let m2 = () => t.querySelector('input[name*="zip"], input[name*="postal"], input[name*="postcode"]'), h2 = await getTarget.default(() => {
    let e3 = m2();
    return e3 && null !== e3.offsetParent ? e3 : null;
  }, () => false, 30);
  if (!h2) return;
  let g2 = e2?.profile_data || e2?.profileData, b2 = e2?.regular?.["Zip code"] || e2?.regular?.zipcode || e2?.regular?.zip_code || e2?.regular?.["Zip Code"] || e2?.regular?.["ZIP code"] || e2?.regular?.["ZIP Code"] || (g2 && "object" == typeof g2 ? g2["Zip code"] || g2.zipcode || g2.zip_code || g2["Zip Code"] || g2["ZIP code"] || g2["ZIP Code"] || (() => {
    for (let e3 in g2) {
      let t2 = g2[e3];
      if (t2 && "object" == typeof t2 && !Array.isArray(t2)) {
        let e4 = t2["Zip code"] || t2.zipcode || t2.zip_code;
        if (e4) return e4;
      }
    }
    return null;
  })() : null);
  if (!b2) return;
  let y2 = String(Array.isArray(b2) ? b2[0] : b2).trim();
  if (y2) {
    h2.value = y2;
    try {
      let e3 = h2?._valueTracker;
      e3 && e3.setValue && (e3.setValue(""), e3.setValue(y2));
    } catch (e3) {
    }
    h2.dispatchEvent(new Event("input", { bubbles: true })), h2.dispatchEvent(new Event("change", { bubbles: true })), await delay.delay(100);
  }
}
async function fillConditionalAccommodationsQuestion(e2) {
  let t = rules.findMainForm();
  if (!t) return;
  let r = t.querySelector('input[type="radio"][name="disability"]:checked'), n = (r?.value || "").toLowerCase();
  if (!n) return;
  let i2 = n.startsWith("yes") || n.includes("prefer");
  if (!i2) return;
  let a2 = "Do you need to request accommodations during the recruiting process due to disability?", l2 = (e2?.regular || {})[a2], s2 = String(Array.isArray(l2) ? l2?.[0] : l2).trim().toLowerCase();
  if (!s2) return;
  let u2 = () => {
    let e3 = Array.from(t.querySelectorAll('label[data-baseweb="form-control-label"]')), r2 = e3.find((e4) => (e4.textContent || "").includes("request accommodations"));
    if (!r2) return null;
    let n2 = r2.closest('[data-baseweb="block"]') || r2.parentElement;
    return n2?.querySelector('[role="radiogroup"]');
  }, d2 = null, f2 = 30;
  for (let e3 = 0; e3 < f2 && !(d2 = u2()); e3++) await delay.delay(100);
  if (!d2) return;
  let m2 = Array.from(d2.querySelectorAll('input[type="radio"]')), h2 = choiceMatch.findExactChoice(m2, s2, (e3) => e3.value);
  h2 && !h2.checked && (h2.click(), await delay.delay(120));
}
function validateRequiredRadioGroups(e2) {
  let t = rules.findMainForm();
  if (!t) return;
  let r = e2.fieldStatus.fieldRequiredStatus || [];
  for (let n of r) if (n.required && "radio" === n.type) {
    let r2 = n.label, o2 = Array.from(t.querySelectorAll('label[data-baseweb="form-control-label"]')), i2 = o2.find((e3) => {
      let t2 = (e3.textContent || "").trim();
      return t2 === r2;
    });
    if (!i2) continue;
    let a2 = i2.closest('[data-baseweb="flex-grid-item"]') || i2.closest('[data-baseweb="block"]') || i2.parentElement, l2 = a2?.querySelector('[role="radiogroup"]');
    if (!l2) continue;
    let s2 = l2.querySelector('input[type="radio"]:checked');
    s2 || e2.updateMissedProgress(r2);
  }
}
function checkConditionalZipCodeRequirement(e2) {
  let t = rules.findMainForm();
  if (!t) return;
  let r = "Do you reside in the United States?", n = t.querySelector('input[name*="zip"], input[name*="postal"], input[name*="postcode"]');
  if (!n) return;
  let o2 = n.value?.trim() || "", i2 = Array.from(t.querySelectorAll('label[data-baseweb="form-control-label"]')), a2 = i2.find((e3) => {
    let t2 = (e3.textContent || "").trim();
    return t2 === r;
  });
  if (!a2) return;
  let l2 = a2.closest('[data-baseweb="flex-grid-item"]') || a2.closest('[data-baseweb="block"]') || a2.parentElement, s2 = l2?.querySelector('[role="radiogroup"]');
  if (!s2) return;
  let u2 = Array.from(s2.querySelectorAll('input[type="radio"]')).find((e3) => {
    let t2 = e3.closest('label[data-baseweb="radio"]'), r2 = (t2?.textContent || "").trim().toLowerCase();
    return r2.includes("yes") && e3.checked;
  });
  u2 && !o2 && e2.updateMissedProgress(r);
}
function checkConditionalAccommodationsRequirement(e2) {
  let t = rules.findMainForm();
  if (!t) return;
  let r = "Please check one of the boxes below", n = "Do you need to request accommodations during the recruiting process due to disability?", o2 = Array.from(t.querySelectorAll('label[data-baseweb="form-control-label"]')), i2 = o2.find((e3) => {
    let t2 = (e3.textContent || "").trim();
    return t2 === r;
  });
  if (!i2) return;
  let a2 = i2.closest('[data-baseweb="flex-grid-item"]') || i2.closest('[data-baseweb="block"]') || i2.parentElement, l2 = a2?.querySelector('[role="radiogroup"]');
  if (!l2) return;
  let s2 = l2.querySelector('input[type="radio"]:checked');
  if (!s2) return;
  let u2 = s2.closest('label[data-baseweb="radio"]'), c2 = (u2?.textContent || "").trim().toLowerCase(), d2 = c2.includes("yes") || c2.includes("prefer not to say");
  if (!d2) return;
  let f2 = o2.find((e3) => {
    let t2 = (e3.textContent || "").trim();
    return t2 === n;
  });
  if (!f2) return;
  let m2 = f2.closest('[data-baseweb="flex-grid-item"]') || f2.closest('[data-baseweb="block"]') || f2.parentElement, h2 = m2?.querySelector('[role="radiogroup"]');
  if (!h2) return;
  let g2 = h2.querySelector('input[type="radio"]:checked');
  g2 || e2.updateMissedProgress(r);
}
function scrollToField(e2) {
  let t = rules.findMainForm();
  if (!t) return;
  if ("Employment" === e2 || e2.toLowerCase().includes("employment")) {
    let e3 = t.querySelector('input[name^="experiences."][name$=".companyName"]');
    if (e3) {
      let t2 = e3.closest('[data-baseweb="block"]') || e3.closest('[data-baseweb="flex-grid"]') || e3.closest("fieldset") || e3.parentElement;
      if (t2) {
        t2.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    }
    let r2 = Array.from(t.querySelectorAll("button")).find((e4) => (e4.textContent || "").toLowerCase().includes("add experience"));
    if (r2) {
      r2.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
  }
  if ("Education" === e2 || e2.toLowerCase().includes("education")) {
    let e3 = t.querySelector('input[name^="educations."][name$=".schoolName"]');
    if (e3) {
      let t2 = e3.closest('[data-baseweb="block"]') || e3.closest('[data-baseweb="flex-grid"]') || e3.closest("fieldset") || e3.parentElement;
      if (t2) {
        t2.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    }
    let r2 = Array.from(t.querySelectorAll("button")).find((e4) => (e4.textContent || "").toLowerCase().includes("add education"));
    if (r2) {
      r2.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
  }
  let r = Array.from(t.querySelectorAll('label[data-baseweb="form-control-label"]')), n = r.find((t2) => {
    let r2 = (t2.textContent || "").trim();
    return r2 === e2 || r2.replace(/\s*\*\s*$/, "") === e2;
  });
  if (n) {
    let e3 = n.closest('[data-baseweb="flex-grid-item"]') || n.closest('[data-baseweb="block"]') || n.parentElement;
    if (e3) {
      e3.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    n.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
function J(e2, t, r, n, o2, i2, l2) {
  if (!l2) return answerMethods.getRegularOperations(r, n, o2, false);
  let u2 = answerMethods.createSectionResultReporter(e2, i2.forRecord(t, [{ label: e2, children: r }])), c2 = u2.ensureRow(0, n);
  return u2.emit(), r.map((e3) => async () => {
    let t2;
    try {
      let r2 = answerMethods.findValueInRecord(e3.label, n);
      t2 = (Array.isArray(r2) ? r2.join(", ") : String(r2 ?? "")).trim() || void 0;
    } catch {
    }
    try {
      let r2 = o2[e3.type], i3 = await r2?.(e3, n, false);
      u2.updateField(c2, e3.label, t2, r2 && t2 && false !== i3 ? "filled" : "missed");
    } catch (r2) {
      throw u2.updateField(c2, e3.label, t2, r2 instanceof cancellation.SkippedError ? "skipped" : "missed"), r2;
    } finally {
      u2.emit();
    }
  });
}
async function fillEducationAndEmploymentSections(e2, t, r, n, o2, a2, l2, s2) {
  let u2 = sectionResults.createSequentialSectionResultReporter("education", { updateSectionResult: s2?.onSectionResultChanged }, "Education"), d2 = sectionResults.createSequentialSectionResultReporter("employment", { updateSectionResult: s2?.onSectionResultChanged }, "Employment");
  try {
    t.add(async () => {
      try {
        await reinitializeEducationAndEmployment();
      } catch (e3) {
      }
    }), t.add(async () => {
      try {
        await addEducationSection(e2?.education?.length || 0);
      } catch (e3) {
      }
    }), t.add(async () => {
      try {
        await addExperienceSection(e2?.workExperience?.length || 0);
      } catch (e3) {
      }
    }), await t.run(), await delay.delay(300);
    let i2 = [], f2 = [];
    try {
      let t2 = n(), o3 = e2?.education || [];
      if (t2.length > 0 && o3.length > 0) {
        let e3 = t2[0], n2 = e3.children || [];
        for (let e4 = 0; e4 < o3.length; e4++) {
          let t3 = o3[e4];
          if (e4 >= n2.length) continue;
          let l3 = n2[e4];
          if (l3 && l3.children) {
            let n3 = a2(l3.children);
            (t3["End Date - Year"] || t3["End Date - Month"]) && (t3.Current = "No"), i2.push(...J("education", e4, n3, t3, r, u2, !!s2?.onSectionResultChanged));
          }
        }
      }
    } catch (e3) {
    }
    try {
      let t2 = o2(), n2 = e2?.workExperience || [];
      if (t2.length > 0 && n2.length > 0) {
        let e3 = t2[0], o3 = e3.children || [];
        for (let e4 = 0; e4 < n2.length; e4++) {
          let t3 = n2[e4];
          if (e4 >= o3.length) continue;
          let i3 = o3[e4];
          if (i3 && i3.children) {
            let n3 = l2(i3.children);
            (t3["End Date - Year"] || t3["End Date - Month"]) && (t3.Current = "No"), f2.push(...J("employment", e4, n3, t3, r, d2, !!s2?.onSectionResultChanged));
          }
        }
      }
    } catch (e3) {
    }
    for (let e3 of [...i2, ...f2]) t.add(async () => {
      try {
        await e3();
      } catch (e4) {
      }
    });
    await t.run(), i2.length > 0 && s2?.onEducationCompleted?.(), f2.length > 0 && s2?.onEmploymentCompleted?.();
  } catch (e3) {
  }
}

export {
  addEducationSection,
  addExperienceSection,
  checkConditionalAccommodationsRequirement,
  checkConditionalZipCodeRequirement,
  createDescriptionFieldOperationHandler,
  createLinksFieldOperationHandler,
  createZipCodeFieldOperationHandler,
  fillCheckboxField,
  fillConditionalAccommodationsQuestion,
  fillConditionalZipCodeField,
  fillEducationAndEmploymentSections,
  fillInputTextField,
  fillRadioGroupFiled,
  fillSelectField,
  isDescriptionField,
  isLinkField,
  isZipCodeField,
  preFillForm,
  reapplyFirstLastNameFromRecord,
  reinitializeEducationAndEmployment,
  removeResume,
  scrollToField,
  uploadResume,
  validateRequiredRadioGroups,
}
