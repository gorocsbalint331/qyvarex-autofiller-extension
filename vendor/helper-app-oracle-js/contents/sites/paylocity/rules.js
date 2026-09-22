/**
 * Parcel module id: 5BvUQ
 * Resolved path: contents/sites/paylocity/rules.js (oracle restore)
 * Dependencies:
 *   ./date -> lockZ  =>  src/contents/sites/paylocity/date.js
 *   ./operations -> bmU1E  =>  _tilde_contents/sites/paylocity/operations.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PAYLOCITY_GPA_DESCRIPTION", () => c), n.export(r,
    "PAYLOCITY_AVAILABLE_TO_START_DESCRIPTION", () => d), n.export(r, "getRules", () => b), n
  .export(r, "getReferenceRules", () => y), n.export(r, "getEduRules", () => k), n.export(r,
    "getExpRules", () => j), n.export(r, "getSubmitButtonText", () => Q), n.export(r,
    "getFormSnapshot", () => el);
var o = e("~core/enums"),
  i = e("~core/xpath"),
  a = e("~utils/delay"),
  l = e("./operations"),
  s = e("./date");
let u = 'input[type="text"], textarea',
  c = "Return GPA as numbers only, for example 3.88. Do not include a denominator such as /4.00.",
  d = "Return the date in MM/DD/YYYY format.",
  f = {
    "info.minimumDesiredSalary": "Minimum Desired Salary",
    "info.maximumDesiredSalary": "Maximum Desired Salary"
  },
  p = "#pcty-wr-apply-references",
  m =
  "This is a reference contact field. Use the applicant's professional or personal reference information; do not use the applicant's own personal info.",
  h = ["name", "email", "phone", "referenceType", "yearsKnown"],
  g = {
    name: "Name",
    email: "Email Address",
    phone: "Phone Number",
    referenceType: "Personal or Work Reference?",
    yearsKnown: "Years Known"
  };
async function b(e = !1) {
  await P(), await (0, a.delay)(300);
  let t = [],
    r = document.body,
    n = ["#pcty-wr-apply-education", "#pcty-wr-apply-workhistory", p],
    o = A(r, [], n);
  t.push(...o);
  let i = y();
  t.push(...i);
  let l = await k({
    maxGroups: 1
  });
  t.push(...l);
  let s = await j({
    maxGroups: 1
  });
  return (t.push(...s), 0 !== t.length || e) ? t : (await (0, a.delay)(1e3), await b(!0))
}

function y() {
  let e = document.querySelector(p);
  if (!e || !S(e)) return [];
  let t = new Map,
    r = [...ed(e), ...Array.from(e.querySelectorAll('.rw-dropdownlist[role="combobox"]')), ...Array
      .from(e.querySelectorAll('[id*="-select-wrapper"]'))
    ];
  return r.forEach(e => {
    if (!S(e)) return;
    let r = v(e.id || "");
    if (!r) return;
    let n = w(e, r.field, r.index),
      o = t.get(r.index) || new Map;
    o.set(r.field, n), t.set(r.index, o)
  }), Array.from(t.entries()).sort(([e], [t]) => e - t).flatMap(([, e]) => h.flatMap(t => e.has(
    t) ? [e.get(t)] : []))
}

function v(e) {
  let t = e.match(/^references\.(name|email|phone|referenceType|yearsKnown)\.(\d+)$/);
  return t ? {
    field: t[1],
    index: Number(t[2])
  } : null
}

function w(e, t, r) {
  let n = `Reference ${r+1} ${g[t]}`,
    i = "INPUT" === e.tagName || "TEXTAREA" === e.tagName;
  return i ? {
    type: o.FIELD_TYPE.TEXT,
    label: n,
    $input: e,
    required: x(e),
    description: m
  } : {
    type: o.FIELD_TYPE.SELECT,
    label: n,
    $input: e,
    $label: e,
    required: x(e),
    options: J(e),
    description: m
  }
}

function S(e) {
  let t = e.ownerDocument?.defaultView || ("undefined" != typeof window ? window : null);
  if (!t || "function" != typeof t.getComputedStyle) return !0;
  let r = t.getComputedStyle(e);
  return "none" !== r.display && "hidden" !== r.visibility && ("function" != typeof e
    .getClientRects || e.getClientRects().length > 0)
}

function E(e) {
  return f[e.id] ? o.FIELD_TYPE.NUMBER : e.classList.contains("rw-dropdownlist") || e.id?.includes(
      "-select-wrapper") || e.closest('[id*="-select-wrapper"]') ? o.FIELD_TYPE.SELECT :
    "radiogroup" === e.getAttribute("role") || e.querySelector('input[type="radio"]') ? o.FIELD_TYPE
    .CHECKBOX : (0, s.inferPaylocityDateFormat)(e) ? o.FIELD_TYPE.DATE : "TEXTAREA" === e.tagName ||
    "INPUT" === e.tagName && "text" === e.type ? o.FIELD_TYPE.TEXT : null
}

function x(e) {
  if (e.hasAttribute("required")) return !0;
  let t = e.closest('.form-group, [data-automation-id*="-wrapper"]');
  if (t?.classList.contains("form-required")) return !0;
  let r = e.id || e.getAttribute("id");
  if (r) {
    let e = document.querySelector(`label[for="${r}"]`);
    if (e) {
      let t = e.querySelector("span > em");
      if (t && t.textContent?.trim().toLowerCase().includes("required")) return !0
    }
  }
  let n = e.closest("label") || t?.querySelector("label");
  if (n) {
    let e = n.querySelector("span > em");
    if (e && e.textContent?.trim().toLowerCase().includes("required")) return !0
  }
  return !1
}

function C(e) {
  if (!e) return "";
  if (f[e.id]) return f[e.id];
  let t = e.getAttribute("data-for");
  if (t) return t;
  let r = e.id || e.getAttribute("id");
  if (r) {
    let e = document.querySelector(`label[for="${r}"]`);
    if (e) {
      let t = e.querySelector('[data-automation-id*="-label-span"]');
      if (t) {
        let e = t.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
          /\s*\(optional\)\s*/gi, "").trim() || "";
        return e
      }
      let r = e.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
        /\s*\(optional\)\s*/gi, "").trim() || "";
      return r
    }
  }
  let n = e.previousElementSibling;
  for (; n;) {
    if ("LABEL" === n.tagName) {
      let e = n.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
        /\s*\(optional\)\s*/gi, "").trim() || "";
      if (e) return e
    }
    break
  }
  let o = e.closest(".form-group");
  if (o) {
    let e = o.querySelector(":scope > label");
    if (e) {
      let t = e.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
        /\s*\(optional\)\s*/gi, "").trim() || "";
      return t
    }
  }
  let i = e.closest('[data-automation-id*="-wrapper"]'),
    a = i?.previousElementSibling;
  if (a?.tagName === "LABEL") {
    let e = a.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
      /\s*\(optional\)\s*/gi, "").trim() || "";
    if (e) return e
  }
  let l = e.closest("label");
  if (l) {
    let e = l.querySelector('[data-automation-id*="-label-span"]');
    if (e) {
      let t = e.textContent?.trim() || "";
      return t
    }
    let t = l.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
      /\s*\(optional\)\s*/gi, "").trim() || "";
    return t
  }
  let s = e.parentElement?.querySelector("label");
  if (s) {
    let e = s.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
      /\s*\(optional\)\s*/gi, "").trim() || "";
    return e
  }
  let u = e.getAttribute("data-automation-id");
  if (u) {
    if (u.includes("startDate")) return "Start Date";
    if (u.includes("endDate")) return "End Date";
    let e = u.replace(/^info|^public-site-/, "").replace(/-/g, " ").replace(/([A-Z])/g, " $1")
    .trim();
    return e
  }
  return ""
}

function A(e, t = [], r = [], n = {}) {
  let i = [],
    a = new Set,
    l = e => r.some(t => e.closest(t)),
    s = e.querySelectorAll('.rw-dropdownlist[role="combobox"]');
  s.forEach(r => {
    let s = r;
    if (t.includes(s.id) || a.has(s) || l(s) || G(e, s)) return;
    let u = C(s);
    if (H(u, n)) return;
    let c = J(s);
    i.push({
      type: o.FIELD_TYPE.SELECT,
      label: u,
      $input: s,
      $label: s,
      required: x(s),
      options: c
    }), a.add(s)
  });
  let c = e.querySelectorAll('[id*="-select-wrapper"]');
  c.forEach(e => {
    let r = e,
      s = r.querySelector('input[type="text"]');
    if (!s || t.includes(s.id) || a.has(s) || l(r)) return;
    let u = C(s);
    if (H(u, n)) return;
    let c = J(r);
    Y(u, s.id, c), i.push({
      type: o.FIELD_TYPE.SELECT,
      label: u,
      $input: r,
      $label: r,
      required: x(s),
      options: c
    }), a.add(s)
  });
  let d = e.querySelectorAll(u);
  d.forEach(e => {
    let r = e;
    if (!r.id || t.includes(r.id) || a.has(r) || l(r) || r.closest('[id*="-select-wrapper"]') ||
      r.closest(".rw-dropdownlist") || "info.skills" === r.id || r.closest(".react-tagsinput"))
      return;
    let s = r.closest(".text-question");
    if (s?.querySelector("p label") && s.querySelector("textarea") === r) return;
    let u = C(r);
    if (H(u, n)) return;
    let c = E(r);
    if (c === o.FIELD_TYPE.TEXT || c === o.FIELD_TYPE.NUMBER || c === o.FIELD_TYPE.DATE) {
      let e = X(u, r);
      i.push({
        type: c,
        label: u,
        $input: r,
        required: x(r),
        ...e ? {
          description: e
        } : {}
      }), f[r.id] && console.info("[Paylocity][SalaryRange] extracted field", {
        id: r.id,
        label: u,
        type: c
      }), a.add(r)
    }
  });
  let p = e.querySelectorAll(
    'input[type="checkbox"]:not([role="switch"]):not(.category-filter-handler)');
  p.forEach(r => {
    let n = r;
    if (!n.id || t.includes(n.id) || a.has(n) || l(n) || n.closest(".multi-question")) return;
    let s = C(n);
    if (!s && n.id) {
      let t = e.querySelector(`label[for="${n.id.replace(/\./g,"\\.")}"]`);
      t && (s = t.textContent?.trim() || "")
    }
    s && (i.push({
      type: o.FIELD_TYPE.CHECKBOX,
      label: s,
      $label: n.nextElementSibling || n.parentElement,
      $checkboxs: [n],
      required: x(n),
      options: []
    }), a.add(n))
  });
  let m = e.querySelector("#info\\.skills");
  !m || a.has(m) || l(m) || (i.push({
    type: o.FIELD_TYPE.MULTI_SELECT,
    label: "Skills",
    $input: m,
    required: !1,
    options: []
  }), a.add(m));
  let h = e.querySelectorAll('[role="radiogroup"]');
  h.forEach(e => {
    let t = e;
    if (a.has(t) || l(t)) return;
    let r = Array.from(t.querySelectorAll('input[type="radio"]'));
    if (0 === r.length) return;
    let n = t.getAttribute("data-automation-id")?.replace(/^info\./, "").replace(/([A-Z])/g,
      " $1").trim() || "";
    if (!n) return;
    let s = r.map(e => e.value).filter(Boolean);
    i.push({
      type: o.FIELD_TYPE.CHECKBOX,
      label: n,
      $label: t,
      $checkboxs: r,
      required: !1,
      options: s
    }), a.add(t)
  });
  let g = e.querySelectorAll(".multi-question");
  g.forEach(e => {
    if (l(e)) return;
    let t = e.querySelector("p span.type-semibold");
    if (!t) return;
    let r = Array.from(e.querySelectorAll('input[type="radio"], input[type="checkbox"]'));
    if (0 === r.length || r.some(e => a.has(e))) return;
    let n = r.map(t => {
      let r = e.querySelector(`label[for="${t.id}"]`);
      return r?.textContent?.trim() || ""
    }).filter(Boolean);
    i.push({
      type: o.FIELD_TYPE.CHECKBOX,
      label: t.textContent?.trim() || "",
      $checkboxs: r,
      $label: t,
      required: e.textContent?.includes("(required)") || !1,
      options: n
    }), r.forEach(e => a.add(e))
  });
  let b = e.querySelectorAll(".text-question");
  return b.forEach(e => {
    if (l(e)) return;
    let t = e.querySelector("p label"),
      r = e.querySelector("textarea");
    if (!t || !r || a.has(r)) return;
    let n = t.textContent?.trim().replace(/\s*\(required\)\s*/gi, "").replace(
      /\s*\(optional\)\s*/gi, "").trim() || "";
    i.push({
      type: o.FIELD_TYPE.TEXT,
      label: n,
      $input: r,
      $label: t,
      required: /\(\s*required\s*\)/i.test(e.textContent || "")
    }), a.add(r)
  }), i
}
async function k(e = {}) {
  let t = [],
    r = document.querySelector("#pcty-wr-apply-education");
  if (!r) return t;
  let n = Array.from(r.querySelectorAll(".education-history-group")),
    i = "number" == typeof e.maxGroups ? n.slice(0, e.maxGroups) : n;
  for (let e = 0; e < i.length; e++) {
    let r = i[e];
    await T(r, e), await _(r, !0);
    let n = A(r, [], [], {
        includeCountry: !0
      }),
      a = B(r);
    a && (N(n, a.id), M(n, {
      type: o.FIELD_TYPE.TEXT,
      label: "State/Province",
      $input: a,
      $label: a,
      required: x(a),
      $container: r
    }), U(n));
    let l = r.querySelector(`#educationHistory\\.degreeId\\.${e}`);
    if (l) {
      let e = J(l);
      M(n, {
        type: o.FIELD_TYPE.SELECT,
        label: "Degree Obtained",
        $input: r,
        $label: l,
        required: !1,
        options: e,
        $container: r
      })
    }
    let s = r.querySelector(`#txt-educationHistory-graduationDate-${e}`);
    if (s) {
      let e = X("Graduation Date", s);
      M(n, {
        type: o.FIELD_TYPE.TEXT,
        label: "Graduation Date",
        $input: r,
        $label: s,
        required: !1,
        ...e ? {
          description: e
        } : {},
        $container: r
      })
    }
    n.length > 0 && t.push({
      type: o.FIELD_TYPE.EDUCATION,
      label: "Education",
      required: !0,
      children: n,
      options: K(n)
    })
  }
  return t
}
async function T(e, t) {
  let r = e.querySelector(`#educationHistory\\.didYouGraduate\\.${t}`);
  if (!r) return;
  let n = r.querySelector(".rw-input")?.textContent?.trim();
  if ("Yes" === n) {
    console.info("[Paylocity][Education] conditional fields already visible", {
      controlId: r.id,
      isExpanded: F(r)
    }), await I(e, t);
    return
  }
  let o = r.querySelector("input, button") || r;
  await (0, l.dispatchClickSequence)(o);
  let i = r.getAttribute("aria-owns");
  if (i) {
    let n = document.getElementById(i);
    if (n) {
      let i = Array.from(n.querySelectorAll('li[role="option"]')),
        s = i.find(e => e.textContent?.trim().toLowerCase() === "yes");
      if (s) {
        await (0, l.dispatchClickSequence)(s, 50, 300);
        let n = F(r, o);
        n && await (0, l.dispatchClickSequence)(o), console.info(
          "[Paylocity][Education] conditional graduate selection", {
            controlId: r.id,
            selectedYes: !0,
            expandedAfterSelection: n,
            closeAttempted: n,
            isExpandedAfterHandling: F(r, o)
          }), await (0, a.delay)(200), await I(e, t)
      }
    }
  }
}

function F(e, t) {
  let r = e.getAttribute("aria-expanded") || t?.getAttribute("aria-expanded");
  return "true" === r
}
async function I(e, t) {
  let r = e.querySelector(`#educationHistory\\.degreeId\\.${t}`);
  if (!r) return;
  let n = r.querySelector("input, button") || r;
  await (0, l.dispatchClickSequence)(n, 50, 300), await (0, l.dispatchClickSequence)(n)
}
async function j(e = {}) {
  let t = [],
    r = document.querySelector("#pcty-wr-apply-workhistory");
  if (!r) return t;
  let n = Array.from(r.querySelectorAll(".work-history-group")),
    i = "number" == typeof e.maxGroups ? n.slice(0, e.maxGroups) : n;
  for (let e = 0; e < i.length; e++) {
    let r = i[e],
      n = A(r, [], [], {
        includeCountry: !0
      });
    n.length > 0 && t.push({
      type: o.FIELD_TYPE.EMPLOYMENT,
      label: "Employment",
      required: !0,
      children: n,
      options: K(n)
    })
  }
  return t
}
let D = new Map;
async function P() {
  await _(document)
}
async function _(e, t = !1) {
  let r = ['[role="combobox"][data-for]', ".rw-dropdownlist", '[id*="select-wrapper"]',
      'button[aria-haspopup="listbox"]'
    ],
    n = new Set;
  for (let o of (r.forEach(t => {
      e.querySelectorAll(t).forEach(e => {
        n.add(e)
      })
    }), n)) {
    if (o.hasAttribute("disabled") || "true" === o.getAttribute("aria-disabled")) continue;
    let e = o.querySelector("input");
    if ("public-site-address-country-select-wrapper" === o.id || e?.id ===
      "public-site-address-country" || V(o) || t && J(o).length > 0) continue;
    let r = o.id || o.getAttribute("data-for") || "",
      n = o.querySelector("input, button") || o;
    await L(n), await (0, a.delay)(200);
    let i = R(o);
    i.length > 0 && D.set(r, i), await L(n), await (0, a.delay)(100)
  }
  await (0, a.delay)(300)
}
async function L(e) {
  let t = ["mousedown", "mouseup", "click"];
  for (let r of t) e.dispatchEvent(new MouseEvent(r, {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, a.delay)(50)
}

function R(e) {
  let t = new Set,
    r = e.id || e.getAttribute("data-for") || "",
    n = e => {
      e && e.querySelectorAll('li[role="option"], [role="option"]').forEach(e => {
        let r = e.textContent?.trim();
        r && "--" !== r && t.add(r)
      })
    };
  n(e);
  let o = e.getAttribute("aria-owns") || e.getAttribute("aria-controls");
  if (o && n(document.getElementById(o)), e.id) {
    let t = e.id,
      r = [`${t}__listbox`, `${t}-listbox`, `${t}_listbox`];
    r.forEach(e => n(document.getElementById(e)))
  }
  document.querySelectorAll('[role="listbox"]').forEach(e => {
    let t = e.getAttribute("data-for") || e.id;
    t && (r.includes(t) || t.includes(r)) && n(e)
  });
  let i = r.replace(/-select-wrapper$/, "");
  return document.querySelectorAll('[id*="dropdown-list-container"]').forEach(e => {
    e.id.includes(i) && e.querySelectorAll("div[title]").forEach(e => {
      let r = e.getAttribute("title")?.trim();
      r && "--" !== r && t.add(r)
    })
  }), Array.from(t)
}

function O(e = [], t = []) {
  let r = new Set;
  return [...e, ...t].forEach(e => {
    let t = e?.trim();
    t && r.add(t)
  }), Array.from(r)
}

function M(e, t) {
  let r = e.findIndex(e => e.type === t.type && e.label === t.label);
  if (-1 === r) {
    e.push(t);
    return
  }
  let n = e[r],
    o = t;
  e[r] = {
    ...n,
    ...o,
    options: O(n.options, o.options)
  }
}

function N(e, t) {
  for (let r = e.length - 1; r >= 0; r--) $(e[r]) === t && e.splice(r, 1)
}

function $(e) {
  let t = e.$input;
  return t?.id || ""
}

function B(e) {
  return ed(e).find(e => q(e.id || "")) || null
}

function q(e) {
  return /^educationHistory\.state\.\d+$/.test(e)
}

function U(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    r.type === o.FIELD_TYPE.SELECT && (q($(r)) || "State" === r.label) && e.splice(t, 1)
  }
}

function H(e, t) {
  return !e || "Country" === e && !t.includeCountry
}

function Y(e, t, r) {
  /^State(?:\/Province)?$/i.test(e.trim()) && console.info(
    `[Paylocity][State] resolver options captured controlId=${t||"unknown"} optionCount=${r.length}`
    )
}

function z(e) {
  if (!W(e) || "INPUT" === e.tagName || "TEXTAREA" === e.tagName) return !1;
  let t = e.getAttribute("data-for") || "";
  return e.classList.contains("rw-dropdownlist") || "combobox" === e.getAttribute("role") || e.id
    .includes("-select-wrapper") || "State" === t
}

function V(e) {
  if (!z(e)) return !1;
  let t = e.closest(".education-history-group") || document.body;
  return G(t, e)
}

function W(e) {
  let t = e.id || "",
    r = e.getAttribute("aria-owns") || e.getAttribute("aria-controls") || "";
  return q(t) || /^educationHistory\.state\.\d+(__listbox|-listbox|_listbox)$/.test(r)
}

function G(e, t) {
  return !!t.id && ed(e).some(e => e.id === t.id && e !== t && !e.closest(".rw-dropdownlist") && !e
    .closest('[id*="-select-wrapper"]'))
}

function K(e) {
  return e.map(e => {
    let t = e,
      r = {
        type: t.type,
        label: t.label
      };
    return t.options?.length && (r.options = t.options), t.description && (r.description = t
      .description), r
  })
}

function X(e, t) {
  let r = e.trim();
  if (/^Minimum Desired Salary$/i.test(r))
  return "Return the minimum desired salary as digits only, without currency symbols, commas, or units.";
  if (/^Maximum Desired Salary$/i.test(r))
  return "Return the maximum desired salary as digits only, without currency symbols, commas, or units.";
  if (/^GPA$/i.test(r)) return c;
  let n = t && (0, s.inferPaylocityDateFormat)(t);
  return n ? (console.info("[Paylocity][Date] rule format inferred", {
    label: r,
    controlId: t.id,
    controlType: t.getAttribute("type") || t.type || null,
    placeholder: t.getAttribute("placeholder") || t.placeholder || null,
    dateFormat: n
  }), `Return the date in ${n} format.`) : /^Available to Start$/i.test(r) ? d : void 0
}

function J(e) {
  let t = e.id || e.getAttribute("data-for") || "";
  return D.has(t) ? D.get(t) : R(e)
}

function Q() {
  let e = (0, i.getFirstOrderedNode)(".//button[@id='btn-submit']");
  return e && e.textContent?.trim() || ""
}

function Z(e) {
  if (null == e) return "";
  if (Array.isArray(e)) return e.map(Z).filter(Boolean).join(", ");
  let t = String(e).trim();
  return "--" === t ? "" : t
}

function ee(e) {
  if ("string" == typeof e) return Z(e);
  if (e && "object" == typeof e) {
    let t = e;
    return Z(t.label ?? t.name ?? t.value)
  }
  return ""
}

function et(e) {
  let t = e?.querySelector?.(
    'input:not([type="hidden"]):not([type="file"]):not([type="button"]):not([type="submit"]), textarea'
    );
  return Z(t?.value)
}

function er(e) {
  if (!e) return "";
  let t = es(e);
  if (t) return t;
  let r = Z(e.value);
  if (r) return r;
  let n = et(e);
  if (n) return n;
  let o = Array.from(e.selectedOptions || []).map(e => e.textContent || e.value).map(Z).filter(
    Boolean);
  return o.length > 0 ? o.join(", ") : Z(e.textContent)
}

function en(e) {
  let t = e,
    r = t.$checkboxs || (Array.isArray(t.$input) ? t.$input : t.$input ? [t.$input] : []),
    n = r.filter(Boolean),
    o = n.findIndex(e => {
      let t = e.checked;
      return !0 === t || e.getAttribute?.("aria-checked") === "true"
    });
  if (o < 0) return "";
  let i = ee(t.options?.[o]);
  if (i) return i;
  let a = er(n[o]);
  return a && "on" !== a.toLowerCase() ? a : a || "true"
}

function eo(e) {
  let t = e?.closest(".react-tagsinput");
  return t ? Array.from(t.querySelectorAll(".react-tagsinput-tag")).map(e => {
    let t = e.querySelector(".react-tagsinput-remove")?.textContent || "",
      r = e.textContent || "";
    return t && r.endsWith(t) ? r.slice(0, -t.length).trim() : r.trim()
  }).filter(Boolean) : []
}

function ei(e) {
  if (e.type === o.FIELD_TYPE.CHECKBOX || e.type === o.FIELD_TYPE.RADIO || e.type === o.FIELD_TYPE
    .RADIOGROUP) return en(e);
  let t = e.$input;
  return "skills" === e.label.trim().toLowerCase() && t?.id === "info.skills" ? eo(t) : er(t)
}

function ea(e, t = []) {
  t.forEach(t => {
    if (!t?.label || t.type === o.FIELD_TYPE.EDUCATION || t.type === o.FIELD_TYPE.EMPLOYMENT ||
      t.type === o.FIELD_TYPE.SECTION) return;
    let r = ei(t);
    (Array.isArray(r) ? r.length > 0 : !!r) && (e[t.label] = r)
  })
}

function el(e = []) {
  let t = {},
    r = ["info.firstName", "info.lastName", "info.middleName", "info.preferredName", "info.email",
      "info.cellPhone", "info.phone", "info.linkedIn", "info.referredBy"
    ];
  r.forEach(e => {
    let r = document.getElementById(e);
    if (r && r.value) {
      let n = e.split(".")[1];
      t[n] = r.value
    }
  });
  let n = ["public-site-address-address-1", "public-site-address-address-2",
    "public-site-address-city", "public-site-address-county", "public-site-address-zip"
  ];
  n.forEach(e => {
    let r = document.getElementById(e);
    r && r.value && (t[e.replace("public-site-address-", "")] = r.value)
  });
  let o = document.querySelector("#pcty-wr-apply-workhistory");
  if (o) {
    let e = o.querySelectorAll(".work-history-group");
    t.employment = Array.from(e).map((e, t) => {
      let r = {},
        n = e.querySelector(`#workHistory\\.companyName\\.${t}`);
      n && (r["Company Name"] = n.value);
      let o = e.querySelector(`#workHistory\\.position\\.${t}`);
      return o && (r.Position = o.value), r
    })
  }
  let i = document.querySelector("#pcty-wr-apply-education");
  if (i) {
    let e = i.querySelectorAll(".education-history-group");
    t.education = Array.from(e).map((e, t) => {
      let r = {},
        n = e.querySelector(`#educationHistory\\.name\\.${t}`);
      n && (r["School Name"] = n.value);
      let o = e.querySelector(`#educationHistory\\.areaOfStudy\\.${t}`);
      o && (r["Area of Study"] = o.value);
      let i = e.querySelector(`#educationHistory\\.country\\.${t}`),
        a = es(i);
      a && (r.Country = a);
      let l = e.querySelector(`#educationHistory\\.city\\.${t}`);
      l?.value && (r.City = l.value);
      let s = e.querySelector(`#educationHistory\\.state\\.${t}`),
        u = ec(e, `educationHistory.state.${t}`) || s,
        c = C(u),
        d = eu(u);
      return d && (r[c || "State/Province"] = d), r
    })
  }
  return ea(t, e), t
}

function es(e) {
  let t = e?.querySelector(".rw-input")?.textContent?.trim() || "";
  return "--" === t ? "" : t
}

function eu(e) {
  return e ? e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? e.value?.trim() ||
    "" : es(e) : ""
}

function ec(e, t) {
  return ed(e).find(e => e.id === t) || null
}

function ed(e) {
  return Array.from(e.querySelectorAll(u))
}

