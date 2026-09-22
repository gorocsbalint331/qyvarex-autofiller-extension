/**
 * Parcel module id: bPSBK
 * Resolved path: src/contents/sites/apple/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", () => a), n.export(r, "getDisabilityModalRules",
() => l), n.export(r, "getEduRules", () => p), n.export(r, "getExpRules", () => m), n.export(r,
  "getSubmitButtonText", () => g), n.export(r, "getFormSnapshot", () => C);
var o = e("~core/enums"),
  i = e("~utils/delay");
async function a(e = !1) {
  let t = [],
    r = await p();
  t.push(...r);
  let n = await m();
  t.push(...n);
  let o = document.getElementById("apply-profileInformation-form");
  return (o || (o = document.querySelector("main") || document.body), o && t.push(...s(o)), 0 !==
    t.length || e) ? t : (await (0, i.delay)(1500), await a(!0))
}
async function l() {
  let e = document.getElementById("selfdisclosure-disabilitymodal-modal");
  if (!e) return [];
  let t = [],
    r = e.querySelector("#disabilityform");
  if (!r) return t;
  let n = r.querySelector('input[name="disabilityAckName"]:not([disabled])');
  if (n) {
    let e = r.querySelector('label[for="disabilityAckName"]');
    t.push({
      type: o.FIELD_TYPE.TEXT,
      label: "Name",
      required: !0,
      $input: n,
      $label: e || n
    })
  }
  let i = r.querySelector("#disability_options");
  if (i) {
    let e = Array.from(i.querySelectorAll('input[type="radio"][name="disabilityStatusCd"]')),
      r = e.map(e => {
        let t = i.querySelector(`label[for="${e.id}"]`);
        return t?.textContent?.trim() || ""
      }).filter(Boolean);
    e.length > 0 && t.push({
      type: o.FIELD_TYPE.CHECKBOX,
      label: "Disability Status",
      required: !0,
      $checkboxs: e,
      $label: i,
      options: r
    })
  }
  return t
}

function s(e, t = new Set) {
  let r = [],
    n = document.getElementById("parsedmodal-review-education-title"),
    i = document.getElementById("parsedmodal-review-employments-title"),
    a = t => !!(n && n.contains(t) && !n.contains(e) && n !== e || i && i.contains(t) && !i
      .contains(e) && i !== e),
    l = e.querySelectorAll("select");
  l.forEach(e => {
    if (t.has(e) || a(e)) return;
    let n = u(e);
    n && (r.push({
      type: o.FIELD_TYPE.SELECT,
      label: n,
      $input: e,
      $label: e.parentElement,
      required: f(e),
      options: Array.from(e.options).map(e => e.text).filter(e => e && !e.includes(
        "Month") && !e.includes("Year") && !e.includes("Country/Region"))
    }), t.add(e))
  });
  let s = e.querySelectorAll(".form-dropdown");
  s.forEach(e => {
    if (t.has(e) || a(e) || e.querySelector("select")) return;
    let n = e.querySelector(".form-dropdown-label");
    if (!n) return;
    let i = e.querySelectorAll("ul li input");
    0 !== i.length && (r.push({
      type: o.FIELD_TYPE.SELECT,
      label: d(n.textContent || ""),
      $input: e,
      $label: n,
      required: f(e),
      options: Array.from(i).map(e => e.value)
    }), t.add(e))
  });
  let c = e.querySelectorAll(
    'input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]):not([type="file"]), textarea'
    );
  c.forEach(e => {
    if (t.has(e) || a(e)) return;
    let n = u(e);
    if ("apply-skills-typeahead-suggestion-textbox" === e.id && (n = "Skills"), !n) return;
    let i = "listbox" === e.getAttribute("aria-haspopup");
    r.push({
      type: i ? o.FIELD_TYPE.LISTBOX : o.FIELD_TYPE.TEXT,
      label: n,
      $input: e,
      $label: e.parentElement,
      required: f(e)
    }), t.add(e)
  });
  let p = e.querySelectorAll("fieldset");
  return p.forEach(e => {
    if (a(e)) return;
    let n = e.querySelectorAll('input[type="radio"]');
    if (0 === n.length) return;
    let i = e.querySelector("legend"),
      l = i ? i.textContent?.trim() : "";
    l && (r.push({
      type: o.FIELD_TYPE.CHECKBOX,
      label: l,
      $checkboxs: Array.from(n),
      $label: i,
      required: f(n[0]),
      options: Array.from(n).map(t => {
        let r = t.id,
          n = e.querySelector(`label[for="${r}"]`);
        return n && n.textContent?.trim() || ""
      }).filter(Boolean)
    }), n.forEach(e => t.add(e)))
  }), r
}

function u(e) {
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let e = document.getElementById(t);
    if (e) return d(e.textContent || "")
  }
  if (e.parentElement?.classList.contains("form-textbox") || e.parentElement?.classList.contains(
      "form-dropdown")) {
    let t = e.parentElement.querySelector(".form-textbox-label, .form-dropdown-label");
    if (t) return d(t.textContent || "")
  }
  let r = e.closest(".typeahead-container");
  if (r) {
    let e = r.querySelector(".form-textbox-label");
    if (e) return d(e.textContent || "")
  }
  let n = e.getAttribute("placeholder");
  if (n) return d(n);
  if (e.id) {
    let t = c(e.id),
      r = document.querySelector(`label[for="${t}"]`);
    if (r) return d(r.textContent || "")
  }
  return ""
}

function c(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}

function d(e) {
  return e.replace(/\(optional\)/gi, "").replace(/\*/g, "").trim()
}

function f(e) {
  return !!e.hasAttribute("required") || "true" === e.getAttribute("aria-required")
}
async function p() {
  let e = [],
    t = document.getElementById("parsedmodal-review-education-title");
  if (!t) return e;
  let r = t.querySelectorAll('[id^="parsedmodal-edu-form-"]');
  return r.forEach(t => {
    let r = s(t);
    r.length > 0 && e.push({
      type: o.FIELD_TYPE.EDUCATION,
      label: "Education",
      required: !0,
      children: r,
      options: r.map(e => ({
        type: e.type,
        label: e.label,
        options: e.options
      }))
    })
  }), e
}
async function m() {
  let e = [],
    t = document.getElementById("parsedmodal-review-employments-title");
  if (!t) return e;
  let r = t.querySelector('[role="group"][aria-label="Edit Employment Summary"]');
  if (r) {
    let t = r.querySelectorAll("fieldset");
    t.forEach(t => {
      let r = t.querySelector("legend");
      if (r && r.textContent?.includes("Edit Employment")) {
        let r = s(t),
          n = h(r, t);
        n.length > 0 && e.push({
          type: o.FIELD_TYPE.EMPLOYMENT,
          label: "Employment",
          required: !0,
          children: n,
          options: n.map(e => ({
            type: e.type,
            label: e.label,
            options: e.options
          }))
        })
      }
    })
  }
  return e
}

function h(e, t) {
  let r = [],
    n = new Set,
    i = e.map((e, t) => ({
      rule: e,
      index: t,
      element: e.$input
    })),
    a = e => {
      let r = Array.from(t.querySelectorAll("fieldset")),
        n = r.find(t => t.querySelector("legend")?.textContent?.trim() === e);
      return n ? i.filter(e => n.contains(e.element)) : []
    },
    l = a("Start Date"),
    s = a("End Date");
  if (l.length >= 2) {
    let e = l.find(e => "Month" === e.rule.label),
      t = l.find(e => "Year" === e.rule.label);
    e && t && (r.push({
      type: o.FIELD_TYPE.DATE,
      label: "Start Date",
      required: e.rule.required,
      $input: e.element,
      description: "MM/YYYY"
    }), n.add(e.index), n.add(t.index))
  }
  if (s.length >= 2) {
    let e = s.find(e => "Month" === e.rule.label),
      t = s.find(e => "Year" === e.rule.label);
    e && t && (r.push({
      type: o.FIELD_TYPE.DATE,
      label: "End Date",
      required: e.rule.required,
      $input: e.element,
      description: "MM/YYYY"
    }), n.add(e.index), n.add(t.index))
  }
  return e.forEach((e, t) => {
    n.has(t) || r.push(e)
  }), r
}

function g() {
  let e = document.getElementById("apply-step-continue-button");
  return e && e.textContent?.trim() || ""
}

function b(e) {
  return d(e).replace(/:\s*$/, "")
}

function y() {
  return document.querySelector("main")
}

function v(e) {
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let e = document.getElementById(t),
      r = d(e?.textContent || "");
    if (r) return r
  }
  if (e.id) {
    let t = c(e.id),
      r = document.querySelector(`label[for="${t}"]`),
      n = d(r?.textContent || "");
    if (n) return n
  }
  let r = d(e.getAttribute("aria-label") || "");
  return r || e.value || ""
}

function w(e) {
  let t = e.closest("fieldset");
  return t || e.closest('[role="group"]')
}

function S(e) {
  let t = e.querySelector("legend"),
    r = b(t?.textContent || "");
  if (r) return r;
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let e = document.getElementById(n),
      t = b(e?.textContent || "");
    if (t) return t
  }
  return b(e.getAttribute("aria-label") || "")
}

function E(e, t) {
  let r = t.querySelectorAll(".form-dropdown");
  r.forEach(t => {
    let r = t.querySelector(".form-dropdown-label"),
      n = t.querySelector(".form-dropdown-title"),
      o = b(r?.textContent || ""),
      i = d(n?.textContent || "");
    o && n && (e[o] = i)
  })
}

function x(e, t) {
  let r = Array.from(t.querySelectorAll("h1, h2, h3, h4")),
    n = r.find(e => "Disability Status" === b(e.textContent || ""));
  if (!n?.parentElement) return;
  let o = Array.from(n.parentElement.querySelectorAll("p")),
    i = o.find(e => {
      let t = d(e.textContent || "");
      return !!t && !t.toLowerCase().startsWith("completed:")
    }),
    a = d(i?.textContent || "");
  a && (e["Disability Status"] = a)
}

function C() {
  let e = {},
    t = y();
  if (!t) return console.warn("[Apple][Snapshot] skipped: application region is missing"), e;
  E(e, t), x(e, t);
  let r = new Set,
    n = t.querySelectorAll("input, select, textarea");
  return n.forEach(t => {
    let n = t,
      o = ["hidden", "submit", "file", "button", "reset", "password"];
    if (o.includes(n.type)) return;
    let i = n.closest(".form-dropdown");
    if (i && i.querySelector(".form-dropdown-title")) return;
    if ("checkbox" === n.type || "radio" === n.type) {
      let t = n,
        o = w(t);
      if (o) {
        if (r.has(o)) return;
        r.add(o);
        let t = S(o);
        if (!t) return;
        let n = Array.from(o.querySelectorAll('input[type="radio"], input[type="checkbox"]')),
          i = n.filter(e => e.checked).map(v).filter(Boolean);
        e[t] = i.join(", ");
        return
      }
      if (!t.checked) return;
      let i = u(t);
      if (!i) return;
      e[b(i)] = v(t);
      return
    }
    let a = b(u(n));
    a && (e[a] = n.value || "")
  }), e
}

