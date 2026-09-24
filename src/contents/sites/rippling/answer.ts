// @ts-nocheck
/**
 * Rippling answer shaping — readable TypeScript source of truth.
 */

import * as filler from "../../shared/filler.ts"
import * as answerMethods from "../../methods/answer.ts"
import * as cancellation from "../../methods/cancellation.ts"
import * as coreDom from "../../../core/dom.js"
import * as enums from "../../../core/enums.js"
function createOperationHandlerFactory(e, t) {
  return function(r, n = { expectArray: false }) {
    return async (a2, l2, s2 = true) => {
      try {
        let t2 = answerMethods.findValueInRecord(a2.label, l2), o2 = n.expectArray ? answerMethods.ensureArray(t2) : t2;
        await r(a2, o2), s2 && e(a2.label);
      } catch (e2) {
        filler.ValueError, s2 && t(a2.label);
      }
    };
  };
}
function c(e, t, r, n) {
  let o2 = answerMethods.createSectionResultReporter(e, n);
  o2.setLabel(t.label);
  let s2 = [];
  return (n2, u2, c2) => (s2[c2] = { ...t, children: n2 }, coreDom.setSectionResultFocusRules(e, s2.slice()), n2.map((e2) => async () => {
    let t2;
    let n3 = o2.ensureRow(c2, u2);
    try {
      let r2 = answerMethods.findValueInRecord(e2.label, u2);
      t2 = Array.isArray(r2) ? r2.join(", ") : r2;
    } catch {
    }
    o2.updateField(n3, e2.label, t2, "pending"), o2.emit();
    try {
      let i2 = r[e2.type], a2 = await i2?.(e2, u2, false);
      o2.updateField(n3, e2.label, t2, i2 && false !== a2 && void 0 !== t2 ? "filled" : "missed"), o2.emit();
    } catch (r2) {
      throw o2.updateField(n3, e2.label, t2, r2 instanceof cancellation.SkippedError ? "skipped" : "missed"), o2.emit(), r2;
    }
  }));
}
function getEducationOperations(e, t, r, n) {
  let o2 = [], i2 = e.filter((e2) => e2.type === enums.FIELD_TYPE.EDUCATION);
  if (0 === i2.length) return o2;
  let a2 = i2[0], l2 = c("education", a2, r, n), u2 = a2.children || [], d2 = /* @__PURE__ */ new Map(), f2 = [];
  for (let e2 of u2) {
    let t2 = e2.$input;
    if (!t2) {
      f2.push(e2);
      continue;
    }
    let r2 = t2.id || "", n2 = t2.name || "", o3 = (r2 + n2).match(/\.response\.(\d+)\./) || (r2 + n2).match(/response\.(\d+)\./) || (r2 + n2).match(/\[(\d+)\]/) || (r2 + n2).match(/--(\d+)/) || (r2 + n2).match(/-(\d+)-/);
    if (o3) {
      let t3 = parseInt(o3[1], 10);
      d2.has(t3) || d2.set(t3, []), d2.get(t3).push(e2);
    } else f2.push(e2);
  }
  if (0 === d2.size && f2.length > 0) {
    let e2 = /* @__PURE__ */ new Map();
    for (let t2 of u2) {
      let r3 = t2.label;
      e2.set(r3, (e2.get(r3) || 0) + 1);
    }
    let r2 = Math.max(...Array.from(e2.values()), 1), n2 = Math.ceil(u2.length / r2);
    for (let e3 = 0; e3 < t.length; e3++) {
      let r3 = e3 * n2, i3 = Math.min(r3 + n2, u2.length), a3 = u2.slice(r3, i3), s2 = t[e3];
      s2 && a3.length > 0 && o2.push(...l2(a3, s2, e3));
    }
  } else if (Array.from(d2.keys()).sort((e2, t2) => e2 - t2), 1 === d2.size && t.length > 1) {
    let e2 = t.length, r2 = Math.floor(u2.length / e2);
    for (let e3 = 0; e3 < t.length; e3++) {
      let n2 = t[e3];
      if (!n2) continue;
      let i3 = [], a3 = document.querySelector("form#job-application-form");
      if (a3) {
        let t2 = Array.from(document.querySelectorAll("h3")), r3 = t2.find((e4) => e4.textContent?.trim() === "Education"), n3 = Array.from(document.querySelectorAll("button")).find((e4) => {
          let t3 = e4.textContent?.trim() || "", r4 = e4.getAttribute("aria-label") || "";
          return t3.includes("Add More Education History") || r4.includes("Add More Education History");
        });
        if (r3 && n3) {
          let t3 = Array.from(a3.querySelectorAll("input, textarea, select"));
          for (let o3 of t3) {
            let t4 = r3.compareDocumentPosition(o3), a4 = (t4 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, l3 = o3.compareDocumentPosition(n3), s2 = (l3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
            if (a4 && s2) {
              let t5 = o3.id || "", r4 = o3.name || "", n4 = (t5 + r4).match(/\.response\.(\d+)\./) || (t5 + r4).match(/response\.(\d+)\./) || (t5 + r4).match(/\[(\d+)\]/) || (t5 + r4).match(/--(\d+)/) || (t5 + r4).match(/-(\d+)-/);
              if (n4) {
                let t6 = parseInt(n4[1], 10);
                if (t6 === e3) {
                  let e4 = o3.getAttribute("aria-labelledby") && document.getElementById(o3.getAttribute("aria-labelledby") || "") || o3.id && document.querySelector(`label[for="${o3.id}"]`) || o3.closest("label");
                  if (e4) {
                    let t7 = (e4.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), r5 = u2.find((e5) => e5.label === t7);
                    if (r5) {
                      let t8 = { ...r5, $input: o3, $label: e4 };
                      i3.push(t8);
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (0 === i3.length) {
        let n3 = e3 * r2, o3 = e3 === t.length - 1 ? u2.length : n3 + r2;
        i3.push(...u2.slice(n3, o3));
      }
      i3.length > 0 && o2.push(...l2(i3, n2, e3));
    }
  } else for (let e2 = 0; e2 < t.length; e2++) {
    let r2 = t[e2], n2 = d2.get(e2) || [];
    r2 && n2.length > 0 && o2.push(...l2(n2, r2, e2));
  }
  return o2;
}
function getEmploymentOperations(e, t, r, n) {
  let o2 = [], i2 = e.filter((e2) => e2.type === enums.FIELD_TYPE.EMPLOYMENT);
  if (0 === i2.length) return o2;
  let a2 = i2[0], l2 = c("employment", a2, r, n), u2 = a2.children || [], d2 = /* @__PURE__ */ new Map(), f2 = [];
  for (let e2 of u2) {
    let t2 = e2.$input;
    if (!t2) {
      f2.push(e2);
      continue;
    }
    let r2 = t2.id || "", n2 = t2.name || "", o3 = (r2 + n2).match(/\.response\.(\d+)\./) || (r2 + n2).match(/response\.(\d+)\./) || (r2 + n2).match(/\[(\d+)\]/) || (r2 + n2).match(/--(\d+)/) || (r2 + n2).match(/-(\d+)-/);
    if (o3) {
      let t3 = parseInt(o3[1], 10);
      d2.has(t3) || d2.set(t3, []), d2.get(t3).push(e2);
    } else f2.push(e2);
  }
  if (0 === d2.size && f2.length > 0) {
    let e2 = /* @__PURE__ */ new Map();
    for (let t2 of u2) {
      let r3 = t2.label;
      e2.set(r3, (e2.get(r3) || 0) + 1);
    }
    let r2 = Math.max(...Array.from(e2.values()), 1), n2 = Math.ceil(u2.length / r2);
    for (let e3 = 0; e3 < t.length; e3++) {
      let r3 = e3 * n2, i3 = Math.min(r3 + n2, u2.length), a3 = u2.slice(r3, i3), s2 = t[e3];
      s2 && a3.length > 0 && o2.push(...l2(a3, s2, e3));
    }
  } else if (Array.from(d2.keys()).sort((e2, t2) => e2 - t2), 1 === d2.size && t.length > 1) {
    let e2 = t.length, r2 = Math.floor(u2.length / e2);
    for (let e3 = 0; e3 < t.length; e3++) {
      let n2 = t[e3];
      if (!n2) continue;
      let i3 = [], a3 = document.querySelector("form#job-application-form");
      if (a3) {
        let t2 = Array.from(document.querySelectorAll("h3")), r3 = t2.find((e4) => e4.textContent?.trim() === "Employment History"), n3 = Array.from(document.querySelectorAll("button")).find((e4) => {
          let t3 = e4.textContent?.trim() || "", r4 = e4.getAttribute("aria-label") || "";
          return t3.includes("Add Another Position") || r4.includes("Add Another Position");
        });
        if (r3 && n3) {
          let t3 = Array.from(a3.querySelectorAll("input, textarea, select"));
          for (let o3 of t3) {
            let t4 = r3.compareDocumentPosition(o3), a4 = (t4 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, l3 = o3.compareDocumentPosition(n3), s2 = (l3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
            if (a4 && s2) {
              let t5 = o3.id || "", r4 = o3.name || "", n4 = (t5 + r4).match(/\.response\.(\d+)\./) || (t5 + r4).match(/response\.(\d+)\./) || (t5 + r4).match(/\[(\d+)\]/) || (t5 + r4).match(/--(\d+)/) || (t5 + r4).match(/-(\d+)-/);
              if (n4) {
                let t6 = parseInt(n4[1], 10);
                if (t6 === e3) {
                  let e4 = o3.getAttribute("aria-labelledby") && document.getElementById(o3.getAttribute("aria-labelledby") || "") || o3.id && document.querySelector(`label[for="${o3.id}"]`) || o3.closest("label");
                  if (e4) {
                    let t7 = (e4.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), r5 = u2.find((e5) => e5.label === t7);
                    if (r5) {
                      let t8 = { ...r5, $input: o3, $label: e4 };
                      i3.push(t8);
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (0 === i3.length) {
        let n3 = e3 * r2, o3 = e3 === t.length - 1 ? u2.length : n3 + r2, a4 = u2.slice(n3, o3), l3 = document.querySelector("form#job-application-form");
        if (l3) {
          let t2 = Array.from(document.querySelectorAll("h3")), r3 = t2.find((e4) => e4.textContent?.trim() === "Employment History"), n4 = Array.from(document.querySelectorAll("button")).find((e4) => {
            let t3 = e4.textContent?.trim() || "", r4 = e4.getAttribute("aria-label") || "";
            return t3.includes("Add Another Position") || r4.includes("Add Another Position");
          });
          if (r3 && n4) {
            let t3 = Array.from(l3.querySelectorAll("input, textarea, select"));
            for (let o4 of a4) {
              let a5 = o4.label, l4 = null, s2 = 0;
              for (let o5 of t3) {
                let t4 = r3.compareDocumentPosition(o5), i4 = (t4 & Node.DOCUMENT_POSITION_FOLLOWING) != 0, u3 = o5.compareDocumentPosition(n4), c2 = (u3 & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
                if (i4 && c2) {
                  let t5 = o5.getAttribute("aria-labelledby") && document.getElementById(o5.getAttribute("aria-labelledby") || "") || o5.id && document.querySelector(`label[for="${o5.id}"]`) || o5.closest("label");
                  if (t5) {
                    let r4 = (t5.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim();
                    if (r4 === a5 && ++s2 === e3 + 1) {
                      l4 = o5;
                      break;
                    }
                  }
                }
              }
              if (l4) {
                let e4 = l4.getAttribute("aria-labelledby") && document.getElementById(l4.getAttribute("aria-labelledby") || "") || l4.id && document.querySelector(`label[for="${l4.id}"]`) || l4.closest("label"), t4 = { ...o4, $input: l4, $label: e4 };
                i3.push(t4);
              } else i3.push(o4);
            }
          } else i3.push(...a4);
        } else i3.push(...a4);
      }
      i3.length > 0 && o2.push(...l2(i3, n2, e3));
    }
  } else for (let e2 = 0; e2 < t.length; e2++) {
    let r2 = t[e2], n2 = d2.get(e2) || [];
    r2 && n2.length > 0 && o2.push(...l2(n2, r2, e2));
  }
  return o2;
}

export {
  createOperationHandlerFactory,
  getEducationOperations,
  getEmploymentOperations,
}
