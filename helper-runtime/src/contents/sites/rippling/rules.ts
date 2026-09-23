// @ts-nocheck
/**
 * Rippling form rules — readable TypeScript source of truth.
 */

import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delay from "../../../utils/delay.js"
async function extractRules() {
  let e = window.location.hostname;
  return e.includes("rippling-ats") ? d() : s();
}
async function s() {
  let e = [], t = xpath.getOrderedNodesSafe('//*[@data-testid="field"]');
  for (let r of t) {
    let t2 = await p(r);
    t2 && (Array.isArray(t2) ? e.push(...t2) : e.push(t2));
  }
  return e;
}
function u(e) {
  let t = Array.from(document.querySelectorAll("h3")), r = t.find((e2) => e2.textContent?.trim() === "Employment History"), n = Array.from(document.querySelectorAll("button")).find((e2) => {
    let t2 = e2.textContent?.trim() || "";
    return t2.includes("Add Another Position");
  });
  if (!r || !n) return false;
  let o2 = r.compareDocumentPosition(e), i2 = (o2 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
  if (!i2) return false;
  let a2 = e.compareDocumentPosition(n), l2 = (a2 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
  return !!l2;
}
function c(e) {
  let t = Array.from(document.querySelectorAll("h3")), r = t.find((e2) => e2.textContent?.trim() === "Education"), n = Array.from(document.querySelectorAll("button")).find((e2) => {
    let t2 = e2.textContent?.trim() || "";
    return t2.includes("Add More Education History");
  });
  if (!r || !n) return false;
  let o2 = r.compareDocumentPosition(e), i2 = (o2 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
  if (!i2) return false;
  let a2 = e.compareDocumentPosition(n), l2 = (a2 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
  return !!l2;
}
async function d() {
  let e = [], t = /* @__PURE__ */ new Set(), r = [], n = [], i2 = document.querySelector("form#job-application-form");
  if (!i2) return e;
  let a2 = Array.from(i2.querySelectorAll("label[for]"));
  for (let o2 of a2) {
    let i3 = o2.getAttribute("for");
    if (!i3) continue;
    let a3 = document.getElementById(i3);
    if (!a3) continue;
    o2.textContent?.trim();
    let l3 = u(a3), s2 = c(a3);
    if (l3) {
      let e2 = await f(o2, a3);
      if (e2) {
        let r2 = `${e2.type}:${e2.label}`;
        t.has(r2) || (t.add(r2), n.push(e2));
      }
      continue;
    }
    if (s2) {
      let e2 = await f(o2, a3);
      if (e2) {
        let n2 = `${e2.type}:${e2.label}`;
        t.has(n2) || (t.add(n2), r.push(e2));
      }
      continue;
    }
    let d2 = await f(o2, a3);
    if (d2) {
      let r2 = `${d2.type}:${d2.label}`;
      t.has(r2) || (t.add(r2), e.push(d2));
    }
  }
  let l2 = Array.from(i2.querySelectorAll(".yesno-field-container, .form-field-container"));
  for (let o2 of l2) {
    let i3 = o2.querySelector(".form-field-label, .yesno-field-label");
    if (!i3) continue;
    let a3 = o2.querySelector(".yesno-radios, .multi-option-container");
    if (!a3) continue;
    let l3 = Array.from(a3.querySelectorAll('input[type="radio"]'));
    if (0 === l3.length) continue;
    i3.textContent?.trim();
    let s2 = u(o2), d2 = c(o2);
    if (s2) {
      let e2 = await k(i3, a3, l3);
      if (e2) {
        let r2 = `${e2.type}:${e2.label}`;
        t.has(r2) || (t.add(r2), n.push(e2));
      }
      continue;
    }
    if (d2) {
      let e2 = await k(i3, a3, l3);
      if (e2) {
        let n2 = `${e2.type}:${e2.label}`;
        t.has(n2) || (t.add(n2), r.push(e2));
      }
      continue;
    }
    let f2 = await k(i3, a3, l3);
    if (f2) {
      let r2 = `${f2.type}:${f2.label}`;
      t.has(r2) || (t.add(r2), e.push(f2));
    }
  }
  if (n.length > 0) {
    let t2 = { type: enums.FIELD_TYPE.EMPLOYMENT, label: "employment", children: n, options: [...n.map((e2) => ({ type: e2.type, label: e2.label, options: e2.options }))], required: false };
    e.push(t2);
  }
  if (r.length > 0) {
    let t2 = { type: enums.FIELD_TYPE.EDUCATION, label: "Education", children: r, options: [...r.map((e2) => ({ type: e2.type, label: e2.label, options: e2.options }))], required: false };
    e.push(t2);
  }
  return e;
}
async function f(e, t) {
  let r = (e.textContent || "").trim();
  if (!(r = r.replace(/\s*\(required\)\s*/gi, "").trim())) return null;
  r = r.replace(/[\u2731*]\s*$/, "").trim();
  let n = e.textContent?.toLowerCase().includes("required") || false, i2 = t.tagName.toLowerCase();
  if (/phone|mobile/i.test(r)) {
    let a2 = !!t.closest(".Select") || t.classList.contains("Select-control") || "combobox" === t.getAttribute("role");
    if (a2) return null;
    if ("input" === i2) {
      let i3 = t, a3 = (i3.type || "").toLowerCase();
      if ("hidden" !== a3 && ("tel" === a3 || "text" === a3 || "number" === a3)) return { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $input: i3, $label: e };
    }
  }
  if (t.classList.contains("Select-control") || "combobox" === t.getAttribute("role") || t.closest(".Select")) {
    let i3 = t.closest(".Select") || t.parentElement;
    if (!i3) return console.warn("[getRuleForRipplingAts] No selectContainer found"), null;
    let a2 = [], l2 = document.querySelector(".Select-menu");
    if (l2) {
      let e2 = l2.querySelectorAll(".Select-option");
      a2 = Array.from(e2).map((e3) => {
        let t2 = e3.getAttribute("aria-label");
        return t2 || (e3.textContent || "").trim();
      }).filter((e3) => e3 && "Select" !== e3);
    } else try {
      let e2 = "combobox" === t.getAttribute("role") ? t : i3.querySelector('input[role="combobox"]');
      if (e2) {
        let t2 = "true" === e2.getAttribute("aria-expanded");
        if (!t2) {
          let t3 = i3.querySelector(".Select-arrow-zone"), r3 = i3.querySelector(".Select-arrow"), n3 = i3.querySelector(".Select-control");
          if (n3) {
            n3.focus(), await new Promise((e4) => setTimeout(e4, 50));
            let e3 = new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window, button: 0 }), t4 = new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window, button: 0 }), r4 = new MouseEvent("click", { bubbles: true, cancelable: true, view: window, button: 0 });
            n3.dispatchEvent(e3), await new Promise((e4) => setTimeout(e4, 50)), n3.dispatchEvent(t4), await new Promise((e4) => setTimeout(e4, 50)), n3.dispatchEvent(r4), n3.click();
          } else if (t3) {
            t3.focus(), await new Promise((e4) => setTimeout(e4, 50));
            let e3 = new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window, button: 0 }), r4 = new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window, button: 0 }), n4 = new MouseEvent("click", { bubbles: true, cancelable: true, view: window, button: 0 });
            t3.dispatchEvent(e3), await new Promise((e4) => setTimeout(e4, 50)), t3.dispatchEvent(r4), await new Promise((e4) => setTimeout(e4, 50)), t3.dispatchEvent(n4), t3.click();
          } else r3 ? r3.click() : (e2.focus(), await new Promise((e3) => setTimeout(e3, 50)), e2.click());
          for (let t4 = 0; t4 < 15; t4++) {
            await new Promise((e3) => setTimeout(e3, 100));
            let t5 = "true" === e2.getAttribute("aria-expanded");
            if (t5) break;
          }
        }
        let r2 = e2.id || "", n2 = e2.getAttribute("aria-owns") || "", o2 = null;
        n2 && (o2 = document.getElementById(n2));
        let l3 = e2.getAttribute("aria-activedescendant") || "";
        if (!o2 && l3) {
          let e3 = l3.replace("--value", "--list");
          o2 = document.getElementById(e3);
        }
        if (!o2 && r2 && r2.includes("--value")) {
          let e3 = r2.replace("--value", "--list");
          o2 = document.getElementById(e3);
        }
        if (!o2) {
          let e3 = document.querySelectorAll(".Select-menu");
          for (let t3 of Array.from(e3)) {
            let e4 = t3, r3 = window.getComputedStyle(e4);
            if ("none" !== r3.display && "hidden" !== r3.visibility) {
              o2 = e4;
              break;
            }
          }
        }
        if (o2 || (o2 = document.querySelector(".Select-menu")), o2) {
          let e3 = o2.querySelectorAll(".Select-option");
          a2 = Array.from(e3).map((e4) => {
            let t3 = e4.getAttribute("aria-label");
            return t3 || (e4.textContent || "").trim();
          }).filter((e4) => e4 && "Select" !== e4), t2 || (document.body.click(), await new Promise((e4) => setTimeout(e4, 100)));
        } else console.warn("[getRuleForRipplingAts] Menu not found after opening");
      } else console.warn("[getRuleForRipplingAts] Combobox not found");
    } catch (e2) {
      console.error("[getRuleForRipplingAts] Error opening select to get options:", e2);
    }
    return { type: enums.FIELD_TYPE.SELECT, label: r, required: n, options: a2, $input: i3, $label: e };
  }
  if ("input" === i2 || "textarea" === i2) {
    let i3 = t, a2 = i3.type?.toLowerCase() || "text";
    return "file" === a2 ? null : { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $input: i3, $label: e };
  }
  if ("input" === i2 && "checkbox" === t.type) {
    let i3 = t, a2 = i3.closest("label"), l2 = (a2?.textContent || r).trim();
    return { type: enums.FIELD_TYPE.CHECKBOX, label: l2, required: n, options: [l2], $checkboxs: [i3], $radioParent: a2 || e.parentElement || e, $input: i3, $label: e };
  }
  return null;
}
async function p(e) {
  let t = xpath.getFirstOrderedNodeSafe('.//span[@id and contains(@id, "-label")] | .//label', e), r = "";
  if (t && (r = (r = (t.textContent || "").trim()).replace(/[\u2731*]$/, "").trim()), !r) {
    let t2 = xpath.getFirstOrderedNodeSafe('.//input[@aria-labelledby] | .//*[@role="combobox"][@aria-labelledby]', e);
    if (t2) {
      let e2 = t2.getAttribute("aria-labelledby");
      if (e2) {
        let t3 = e2.split(" ");
        for (let e3 of t3) {
          let t4 = document.getElementById(e3);
          if (t4 && (r = (r = (t4.textContent || "").trim()).replace(/[\u2731*]$/, "").trim())) break;
        }
      }
    }
  }
  if (!r) {
    let t2 = null, n2 = e.closest('[data-testid="field"]') || e, o2 = n2.parentElement;
    if (o2) {
      let e2 = Array.from(o2.children), r2 = e2.indexOf(n2);
      for (let n3 = r2 - 1; n3 >= Math.max(0, r2 - 3); n3--) {
        let r3 = e2[n3];
        if (!r3) continue;
        let o3 = r3.querySelector("p");
        if (o3) {
          let e3 = o3.closest('[data-testid="select-controller"]') || o3.closest('[role="combobox"]') || o3.closest('[role="listbox"]');
          if (e3) continue;
          let r4 = (o3.textContent || "").trim();
          if (r4.length > 3) {
            t2 = o3;
            break;
          }
        }
      }
    }
    if (!t2) {
      let e2 = o2;
      for (let r2 = 0; r2 < 2 && e2; r2++) {
        let r3 = e2.parentElement;
        if (!r3) break;
        let n3 = Array.from(r3.children), o3 = n3.indexOf(e2);
        for (let e3 = o3 - 1; e3 >= Math.max(0, o3 - 2); e3--) {
          let r4 = n3[e3];
          if (!r4) continue;
          let o4 = r4.querySelector("p");
          if (o4) {
            let e4 = o4.closest('[data-testid="select-controller"]') || o4.closest('[role="combobox"]') || o4.closest('[role="listbox"]');
            if (e4) continue;
            let r5 = (o4.textContent || "").trim();
            if (r5.length > 3) {
              t2 = o4;
              break;
            }
          }
        }
        if (t2) break;
        e2 = r3;
      }
    }
    t2 && (r = (r = (r = (t2.textContent || "").trim()).replace(/<[^>]*>/g, "").trim()).replace(/\s*$/, "").trim());
  }
  if (!r) return null;
  let n = !!xpath.getFirstOrderedNodeSafe('.//*[@aria-required="true"] | .//span[contains(text(), "*")] | .//span[contains(text(), "\u2731")]', e), l2 = xpath.getFirstOrderedNodeSafe('.//*[@role="group"]', e);
  if (l2) {
    let a2 = xpath.getOrderedNodesSafe('.//*[@role="checkbox"]', l2);
    if (a2.length > 0) {
      let s3 = r, u3 = n, c3 = null, d3 = e;
      for (let e2 = 0; e2 < 5 && d3; e2++) {
        let e3 = d3.parentElement;
        if (!e3) break;
        let t2 = Array.from(e3.querySelectorAll("p"));
        for (let r2 of t2) {
          let t3 = (r2.textContent || "").trim();
          if (t3.length > 10) {
            let t4 = Array.from(e3.children).indexOf(r2), n2 = Array.from(e3.children).indexOf(d3.closest('[data-testid="field"]') || d3);
            if (t4 < n2) {
              c3 = r2;
              break;
            }
          }
        }
        if (c3) break;
        d3 = e3;
      }
      if (c3) {
        s3 = (s3 = (c3.textContent || "").trim()).replace(/<[^>]*>/g, "").trim();
        let e2 = c3.querySelector("div");
        u3 = null !== e2;
      }
      let f3 = a2.map((e2) => {
        let t2 = xpath.getFirstOrderedNodeSafe('.//*[@id and contains(@id, "label-")] | .//p', e2);
        return t2?.textContent?.trim() || e2.textContent?.trim() || "";
      }).filter((e2) => e2), p3 = xpath.getOrderedNodesSafe('.//input[@type="checkbox"]', l2);
      return { type: enums.FIELD_TYPE.CHECKBOX, label: s3, required: u3, options: f3, $radioParent: e, $checkboxs: p3, $input: p3[0], $label: c3 || t };
    }
  }
  let s2 = xpath.getFirstOrderedNodeSafe('.//input[@type="checkbox"][@data-testid]', e);
  if (s2) {
    let a2 = xpath.getFirstOrderedNodeSafe('.//*[@id and contains(@id, "label-")] | .//p | .//label', e), l3 = a2?.textContent?.trim() || r;
    return { type: enums.FIELD_TYPE.CHECKBOX, label: l3, required: n, options: [l3], $radioParent: e, $checkboxs: [s2], $input: s2, $label: t || a2 };
  }
  if (/phone|mobile/i.test(r)) {
    let o2 = xpath.getFirstOrderedNodeSafe('.//*[@data-testid="phone_number"]//input[@data-input="phone_number"]', e);
    if (o2) return b(r, n, o2, m(e), t);
  }
  if (/location/i.test(r)) {
    let a2 = xpath.getFirstOrderedNodeSafe('.//*[@data-testid="location"]//input[not(@type="hidden") and not(@type="file")]', e);
    if (a2) return { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $input: a2, $label: t };
  }
  let u2 = xpath.getFirstOrderedNodeSafe('.//*[@data-testid="select-controller"] | .//*[@role="combobox"][@aria-haspopup="listbox"]', e);
  if (u2) {
    let l3 = [], s3 = xpath.getFirstOrderedNodeSafe('.//ul[@role="listbox"] | .//*[@data-testid="popper"]//ul[@role="listbox"]', e);
    if (s3) {
      let e2 = xpath.getOrderedNodesSafe('.//li[@role="option"]', s3);
      l3 = e2.map((e3) => {
        let t2 = xpath.getFirstOrderedNodeSafe('.//*[@data-testid="menuListLabel"] | .//p | .//span', e3);
        return t2?.textContent?.trim() || e3.textContent?.trim() || "";
      }).filter((e3) => e3 && "Select" !== e3);
    } else try {
      let t2 = u2.querySelector('[role="combobox"]');
      if (t2 && "false" === t2.getAttribute("aria-expanded")) {
        let r2 = t2.id, n2 = t2.getAttribute("aria-controls");
        t2.click(), await delay.delay(300);
        let o2 = null;
        if (n2) o2 = document.getElementById(n2);
        else if (r2) {
          let e2 = `${r2}-list`;
          o2 = document.getElementById(e2);
        }
        if (!o2) {
          let t3 = xpath.getFirstOrderedNodeSafe('.//*[@data-testid="popper"][contains(@style, "position: fixed")]', e.parentElement || document.body);
          t3 && (o2 = xpath.getFirstOrderedNodeSafe('.//ul[@role="listbox"]', t3));
        }
        if (o2) {
          let e2 = xpath.getOrderedNodesSafe('.//li[@role="option"]', o2);
          l3 = e2.map((e3) => {
            let t3 = xpath.getFirstOrderedNodeSafe('.//*[@data-testid="menuListLabel"] | .//p | .//span', e3);
            return t3?.textContent?.trim() || e3.textContent?.trim() || "";
          }).filter((e3) => e3 && "Select" !== e3), document.body.click(), await delay.delay(100);
        }
      }
    } catch (e2) {
      console.warn("Failed to extract select options:", e2);
    }
    return { type: enums.FIELD_TYPE.SELECT, label: r, required: n, options: l3, $input: u2, $label: t };
  }
  let c2 = xpath.getFirstOrderedNodeSafe(".//select", e);
  if (c2) {
    let e2 = xpath.getOrderedNodesSafe(".//option", c2), a2 = e2.map((e3) => e3.textContent.trim()).filter((e3) => e3 && "Select ..." !== e3 && "Select..." !== e3);
    return { type: enums.FIELD_TYPE.SELECT, label: r, required: n, options: a2, $input: c2, $label: t };
  }
  let d2 = xpath.getOrderedNodesSafe('.//input[@type="radio"]', e), f2 = xpath.getOrderedNodesSafe('.//*[@role="radio"]', e);
  if (d2.length > 0 || f2.length > 0) {
    let i2 = r, a2 = n, l3 = I(e);
    l3 && (i2 = (i2 = (l3.textContent || "").trim()).replace(/<[^>]*>/g, "").trim(), a2 = null !== l3.closest('[aria-required="true"]') || !!l3.querySelector('[aria-required="true"]'));
    let s3 = f2.length > 0 ? f2 : d2, u3 = s3.map((e2) => A(e2)).filter((e2) => e2);
    return { type: enums.FIELD_TYPE.RADIOGROUP, label: i2, required: a2, options: u3, $input: d2[0] || f2[0], $radioParent: e, $label: l3 || t };
  }
  let p2 = xpath.getFirstOrderedNodeSafe('.//input[@data-input][not(@type="hidden")] | .//input[@type="text"] | .//input[@type="email"] | .//input[@type="tel"] | .//input[@type="url"] | .//textarea', e);
  return p2 ? "file" === p2.type || "input-resume" === p2.getAttribute("data-testid") ? null : { type: enums.FIELD_TYPE.TEXT, label: r, required: n, $input: p2, $label: t } : null;
}
function m(e) {
  return xpath.getFirstOrderedNodeSafe('.//*[@data-testid="phone_number-code"]//input | .//*[@data-testid="phone_number-code"]//*[@role="combobox"]', e);
}
function h(e) {
  return e.closest(".Select") || e.closest('[data-testid="phone_number-code"]') || e;
}
function g(e) {
  return e ? e instanceof HTMLInputElement ? e.value || "" : e.textContent?.trim() || "" : "";
}
function b(e, t, r, n, i2) {
  let a2 = { type: enums.FIELD_TYPE.TEXT, label: e, required: t, $input: r, $label: i2 };
  return n ? [{ type: enums.FIELD_TYPE.SELECT, label: "Phone Country Code", required: t, options: [], $input: h(n), $label: i2 }, a2] : a2;
}
let getRipplingRuleForTests = p
let buildRipplingPhoneRulesForTests = b
let getRipplingPhoneCountryCodeValueForTests = g
function S(e, t, r) {
  let n = {};
  return t && (n["Phone Country Code"] = g(t)), r && (n[e] = r.value || ""), Object.keys(n).length > 0 ? n : null;
}
function E(e, t) {
  return S(t, m(e), xpath.getFirstOrderedNodeSafe('.//*[@data-testid="phone_number"]//input[@data-input="phone_number"]', e));
}
let getRipplingPhoneSnapshotForTests = E
let buildRipplingPhoneSnapshotForTests = S
function A(e) {
  let t = e.getAttribute("aria-label")?.trim();
  if (t) return t;
  let r = xpath.getFirstOrderedNodeSafe('.//*[@id and contains(@id, "label-")] | .//p | .//span', e);
  return r?.textContent?.trim() || e.textContent?.trim() || "";
}
async function k(e, t, r) {
  let n = (e.textContent || "").trim();
  if (!(n = n.replace(/\s*\(required\)\s*/gi, "").trim())) return null;
  let i2 = e.textContent?.toLowerCase().includes("required") || false, a2 = r.map((e2) => {
    let t2 = e2.closest("label.multi-option");
    if (t2) {
      let r2 = Array.from(t2.childNodes).filter((e3) => e3.nodeType === Node.TEXT_NODE).map((e3) => e3.textContent?.trim()).join(" ").trim();
      return r2 || e2.value || e2.getAttribute("aria-label") || "";
    }
    return e2.value || e2.getAttribute("aria-label") || "";
  }).filter((e2) => e2);
  return 0 === a2.length ? null : { type: enums.FIELD_TYPE.RADIOGROUP, label: n, required: i2, options: a2, $input: r[0], $radioParent: t, $label: e };
}
function getFormSnapshot() {
  let e = window.location.hostname;
  return e.includes("rippling-ats") ? P() : D();
}
function F(e) {
  let t = e.tagName?.toLowerCase() === "p" ? e : e.querySelector("p");
  if (!t) return null;
  let r = t.closest('[data-testid="select-controller"]') || t.closest('[role="combobox"]') || t.closest('[role="listbox"]');
  if (r) return null;
  let n = (t.textContent || "").trim();
  return n.length > 3 ? t : null;
}
function I(e) {
  let t = e.closest('[data-testid="field"]') || e;
  for (let e2 = 0; e2 < 3 && t; e2++) {
    let e3 = t.parentElement;
    if (!e3) break;
    let r = Array.from(e3.children), n = r.indexOf(t);
    if (n < 0) break;
    for (let e4 = n - 1; e4 >= 0; e4--) {
      let t2 = F(r[e4]);
      if (t2) return t2;
    }
    t = e3;
  }
  return null;
}
function resolveRipplingRadioSnapshotLabel(e, t) {
  let r = I(e);
  return r ? (r.textContent || "").trim().replace(/<[^>]*>/g, "").trim() : t;
}
function D() {
  let e = {}, t = xpath.getOrderedNodesSafe('//*[@data-testid="field"]');
  for (let r of t) {
    let t2 = xpath.getFirstOrderedNodeSafe('.//span[@id and contains(@id, "-label")] | .//span[@aria-describedby]', r), n = "";
    if (t2 && (n = (t2.textContent || "").trim().replace(/[\u2731*]$/, "").trim()), !n) {
      let e2 = xpath.getFirstOrderedNodeSafe('.//input[@aria-labelledby] | .//*[@role="combobox"][@aria-labelledby]', r);
      if (e2) {
        let t3 = e2.getAttribute("aria-labelledby");
        if (t3) {
          let e3 = t3.split(" ");
          for (let t4 of e3) {
            let e4 = document.getElementById(t4);
            if (e4 && (n = (e4.textContent || "").trim().replace(/[\u2731*]$/, "").trim())) break;
          }
        }
      }
    }
    if (!n) {
      let e2 = null, t3 = r;
      for (let r2 = 0; r2 < 5 && t3; r2++) {
        let r3 = t3.parentElement;
        if (!r3) break;
        let n2 = Array.from(r3.querySelectorAll("p"));
        for (let o3 of n2) {
          let n3 = (o3.textContent || "").trim();
          if (n3.length > 10) {
            let n4 = Array.from(r3.children).indexOf(o3), i2 = Array.from(r3.children).indexOf(t3.closest('[data-testid="field"]') || t3);
            if (n4 < i2) {
              e2 = o3;
              break;
            }
          }
        }
        if (e2) break;
        t3 = r3;
      }
      e2 && (n = (e2.textContent || "").trim());
    }
    if (!n) continue;
    if (n.toLowerCase().includes("phone")) {
      let t3 = E(r, n);
      if (t3) {
        Object.assign(e, t3);
        continue;
      }
    }
    let o2 = xpath.getFirstOrderedNodeSafe('.//input[@type="checkbox"][@data-testid]', r);
    if (o2) {
      e[n] = o2.checked ? "true" : "false";
      continue;
    }
    let a2 = xpath.getFirstOrderedNodeSafe('.//*[@data-testid="select-controller"] | .//*[@role="combobox"][@aria-haspopup="listbox"]', r);
    if (a2) {
      let t3 = a2.querySelector('input[role="combobox"], input[data-input="select-search-input"]'), r2 = t3?.value || "";
      if (!r2) {
        let e2 = a2.querySelector('[role="combobox"]');
        r2 = e2?.textContent?.trim() || "";
      }
      if (!r2) {
        let e2 = a2.querySelector(".select__single-value, p, span");
        r2 = e2?.textContent?.trim() || "";
      }
      e[n] = r2;
      continue;
    }
    let l2 = xpath.getFirstOrderedNodeSafe(".//select", r);
    if (l2) {
      let t3 = l2.options[l2.selectedIndex];
      e[n] = t3?.text || "";
      continue;
    }
    let s2 = xpath.getOrderedNodesSafe('.//input[@type="radio"] | .//*[@role="radio"]', r);
    if (s2.length > 0) {
      n = j(r, n);
      let t3 = s2.find((e2) => "INPUT" === e2.tagName && "radio" === e2.type ? e2.checked : "true" === e2.getAttribute("aria-checked"));
      if (t3) {
        let r2 = t3.getAttribute("aria-label");
        if (r2) e[n] = r2.trim();
        else {
          let r3 = t3.closest("label") || t3.closest('[data-testid*="checkbox-label"]') || t3.parentElement;
          if (r3) {
            let o3 = Array.from(r3.childNodes).filter((e2) => e2.nodeType === Node.TEXT_NODE || e2.nodeType === Node.ELEMENT_NODE && !e2.querySelector('input[type="radio"], input[type="checkbox"]')).map((e2) => e2.textContent?.trim()).filter(Boolean).join(" ");
            e[n] = o3 || t3.value || "";
          } else e[n] = t3.value || "";
        }
      } else e[n] = "";
      continue;
    }
    let u2 = xpath.getFirstOrderedNodeSafe('.//input[@data-input][not(@type="hidden")] | .//input[@type="text"] | .//input[@type="email"] | .//input[@type="tel"] | .//input[@type="url"] | .//input[not(@type) and not(@role="combobox")] | .//textarea', r);
    u2 && "file" !== u2.type && (e[n] = u2.value);
  }
  return e;
}
function P() {
  let e = {}, t = document.querySelector("form#job-application-form");
  if (!t) return e;
  let r = Array.from(t.querySelectorAll("label[for]")), n = new Set(r), o2 = Array.from(document.querySelectorAll("label[for]"));
  for (let e2 of o2) {
    let t2 = e2.getAttribute("for");
    if (!t2) continue;
    let r2 = document.getElementById(t2);
    if (r2) {
      let t3 = (e2.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim();
      if (t3) {
        let t4 = u(r2), o3 = c(r2);
        t4 || o3 || n.add(e2);
      }
    }
  }
  for (let o3 of r = Array.from(n)) {
    let r2 = o3.getAttribute("for");
    if (!r2) continue;
    let n2 = document.getElementById(r2);
    if (!n2) continue;
    let i2 = (o3.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), a2 = u(n2), l2 = c(n2);
    if (a2 || l2 || !i2) continue;
    let s2 = "";
    if ("SELECT" === n2.tagName) {
      let e2 = n2;
      s2 = e2.options[e2.selectedIndex]?.text?.trim() || "";
    } else if ("INPUT" === n2.tagName) {
      let e2 = n2;
      if ("checkbox" === e2.type) s2 = e2.checked ? "true" : "false";
      else if ("radio" === e2.type) {
        let r3 = t.querySelectorAll(`input[type="radio"][name="${e2.name}"]`);
        for (let e3 of Array.from(r3)) if (e3.checked) {
          let r4 = t.querySelector(`label[for="${e3.id}"]`);
          s2 = r4?.textContent?.trim() || e3.value;
          break;
        }
      } else if ("combobox" === e2.getAttribute("role") || e2.closest(".Select")) {
        let t2 = e2.closest(".Select") || e2.closest(".Select-control") || e2.parentElement;
        if (t2) {
          let e3 = t2.querySelector(".Select-value-label, .Select-value, .select__single-value");
          e3 && (s2 = e3.textContent?.trim() || "");
        }
      } else s2 = e2.value || "";
    } else if ("TEXTAREA" === n2.tagName) s2 = n2.value || "";
    else {
      let e2 = n2.querySelector(".Select-value-label, .Select-value, .select__single-value");
      if (e2) s2 = e2.textContent?.trim() || "";
      else {
        let e3 = n2.closest(".Select");
        if (e3) {
          let t2 = e3.querySelector(".Select-value-label, .Select-value, .select__single-value");
          t2 && (s2 = t2.textContent?.trim() || "");
        }
      }
    }
    s2 && (e[i2] = s2);
  }
  return e;
}
function getEduSnapshot() {
  let e = [], t = Array.from(document.querySelectorAll("h3")), r = t.find((e2) => e2.textContent?.trim() === "Education"), n = Array.from(document.querySelectorAll("button")).find((e2) => {
    let t2 = e2.textContent?.trim() || "", r2 = e2.getAttribute("aria-label") || "";
    return t2.includes("Add More Education History") || r2.includes("Add More Education History");
  });
  if (!r || !n) return e;
  let o2 = document.querySelector("form#job-application-form");
  if (!o2) return e;
  let i2 = Array.from(o2.querySelectorAll("input, textarea, select")), a2 = /* @__PURE__ */ new Map();
  for (let e2 of i2) {
    let t2 = r.compareDocumentPosition(e2), o3 = (t2 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i3 = e2.compareDocumentPosition(n), l3 = (i3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    if (o3 && l3) {
      let t3 = e2.id || "", r2 = e2.name || "", n2 = (t3 + r2).match(/\.response\.(\d+)\./) || (t3 + r2).match(/response\.(\d+)\./) || (t3 + r2).match(/\[(\d+)\]/) || (t3 + r2).match(/--(\d+)/) || (t3 + r2).match(/-(\d+)-/);
      if (n2) {
        let t4 = parseInt(n2[1], 10);
        a2.has(t4) || a2.set(t4, /* @__PURE__ */ new Map());
        let r3 = e2.getAttribute("aria-labelledby") && document.getElementById(e2.getAttribute("aria-labelledby") || "") || e2.id && document.querySelector(`label[for="${e2.id}"]`) || e2.closest("label");
        if (r3) {
          let n3 = (r3.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), o4 = "";
          if ("SELECT" === e2.tagName) {
            let t5 = e2;
            o4 = t5.options[t5.selectedIndex]?.text?.trim() || "";
          } else if ("INPUT" === e2.tagName) {
            let t5 = e2;
            o4 = "checkbox" === t5.type ? t5.checked ? "true" : "false" : t5.value || "";
          } else "TEXTAREA" === e2.tagName && (o4 = e2.value || "");
          n3 && o4 && a2.get(t4).set(n3, o4);
        }
      }
    }
  }
  let l2 = Array.from(a2.keys()).sort((e2, t2) => e2 - t2);
  for (let t2 of l2) {
    let r2 = a2.get(t2);
    if (r2.size > 0) {
      let t3 = {};
      for (let [e2, n2] of r2.entries()) t3[e2] = n2;
      e.push(t3);
    }
  }
  return e;
}
function getEmploymentSnapshot() {
  let e = [], t = Array.from(document.querySelectorAll("h3")), r = t.find((e2) => e2.textContent?.trim() === "Employment History"), n = Array.from(document.querySelectorAll("button")).find((e2) => {
    let t2 = e2.textContent?.trim() || "";
    return t2.includes("Add Another Position");
  });
  if (!r || !n) return e;
  let o2 = document.querySelector("form#job-application-form");
  if (!o2) return e;
  let i2 = Array.from(o2.querySelectorAll("input, textarea, select")), a2 = /* @__PURE__ */ new Map();
  for (let e2 of i2) {
    let t2 = r.compareDocumentPosition(e2), o3 = (t2 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i3 = e2.compareDocumentPosition(n), l3 = (i3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    if (o3 && l3) {
      let t3 = e2.id || "", r2 = e2.name || "", n2 = (t3 + r2).match(/\.response\.(\d+)\./) || (t3 + r2).match(/response\.(\d+)\./) || (t3 + r2).match(/\[(\d+)\]/) || (t3 + r2).match(/--(\d+)/) || (t3 + r2).match(/-(\d+)-/);
      if (n2) {
        let t4 = parseInt(n2[1], 10);
        a2.has(t4) || a2.set(t4, /* @__PURE__ */ new Map());
        let r3 = e2.getAttribute("aria-labelledby") && document.getElementById(e2.getAttribute("aria-labelledby") || "") || e2.id && document.querySelector(`label[for="${e2.id}"]`) || e2.closest("label");
        if (r3) {
          let n3 = (r3.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), o4 = "";
          if ("SELECT" === e2.tagName) {
            let t5 = e2;
            o4 = t5.options[t5.selectedIndex]?.text?.trim() || "";
          } else if ("INPUT" === e2.tagName) {
            let t5 = e2;
            o4 = "checkbox" === t5.type ? t5.checked ? "true" : "false" : t5.value || "";
          } else "TEXTAREA" === e2.tagName && (o4 = e2.value || "");
          n3 && o4 && a2.get(t4).set(n3, o4);
        }
      }
    }
  }
  let l2 = Array.from(a2.keys()).sort((e2, t2) => e2 - t2);
  for (let t2 of l2) {
    let r2 = a2.get(t2);
    if (r2.size > 0) {
      let t3 = {};
      for (let [e2, n2] of r2.entries()) t3[e2] = n2;
      e.push(t3);
    }
  }
  return e;
}
function getEduAndEmploymentSnapshot() {
  let e = _(), t = L(), r = {};
  return e && e.length > 0 && (r.education = e), t && t.length > 0 && (r.employment = t), r;
}

export {
  buildRipplingPhoneRulesForTests,
  buildRipplingPhoneSnapshotForTests,
  extractRules,
  getEduAndEmploymentSnapshot,
  getEduSnapshot,
  getEmploymentSnapshot,
  getFormSnapshot,
  getRipplingPhoneCountryCodeValueForTests,
  getRipplingPhoneSnapshotForTests,
  getRipplingRuleForTests,
  resolveRipplingRadioSnapshotLabel,
}
