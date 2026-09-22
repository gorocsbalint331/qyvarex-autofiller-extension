/**
 * Parcel module id: 5iMv1
 * Resolved path: contents/sites/ashby/rules.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/ashby/field-metadata -> dCLIj  =>  _tilde_contents/sites/ashby/field-metadata.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractRules", () => s), n.export(r,
    "getAshbyEducationHistoryContainer", () => p), n.export(r, "getAshbyEducationRows", () => m), n
  .export(r, "getEducationRules", () => h), n.export(r, "getAshbyEducationSnapshot", () => g), n
  .export(r, "getSelectedSelectValue", () => T), n.export(r, "getFormSnapshot", () => R);
var o = e("~core/enums"),
  i = e("~core/xpath"),
  a = e("~contents/sites/ashby/field-metadata"),
  l = e("~utils/delay");
async function s() {
  let e = [];
  if ((0, i.getFirstOrderedNodeSafe)(
      '//div[.//h2[contains(@class, "ashby-application-form-section-header-title")]]')) {
    let t = (0, i.getOrderedNodesSafe)(
      '//div[contains(@class, "ashby-application-form-section-container")]');
    for (let r of t) {
      let t = (0, i.getOrderedNodesSafe)(
        './/h2[contains(@class, "ashby-application-form-section-header-title")]/text()', r);
      if (t) {
        t[0]?.textContent?.trim();
        let n = (0, i.getOrderedNodesSafe)(
          './/div[contains(@class, "ashby-application-form-field-entry")] | .//fieldset[contains(@class, "_container_")]',
          r);
        for (let t of n) {
          let r = await f(t);
          r && e.push(r)
        }
      }
    }
  } else {
    let t = (0, i.getOrderedNodesSafe)(
      '//div[contains(@class, "ashby-application-form-field-entry")] | .//fieldset[contains(@class, "_container_")]'
      );
    for (let r of t) {
      let t = await f(r);
      t && e.push(t)
    }
  }
  let t = u();
  return t && (console.info("[Ashby][CommunicationConsent] extracted", {
    optionCount: t.options.length,
    required: t.required
  }), e.push(t)), e.push(...h()), e
}

function u() {
  if ("undefined" == typeof document || "function" != typeof document.querySelector) return null;
  let e = document.querySelector(".ashby-application-form-texting-consent-description");
  if (!e) return null;
  let t = Array.from(e.querySelectorAll('input[type="radio"][name="communicationConsent"]'));
  if (t.length < 2) return console.warn("[Ashby][CommunicationConsent] extraction skipped", {
    reason: "radio-options-missing",
    optionCount: t.length
  }), null;
  let r = e.querySelector("p"),
    n = d(r?.textContent),
    i = t.map(c);
  if (!n || i.some(e => !e)) return console.warn(
  "[Ashby][CommunicationConsent] extraction skipped", {
    reason: n ? "option-label-missing" : "question-label-missing",
    optionCount: t.length
  }), null;
  let a = t.some(e => e.required || "true" === e.getAttribute("aria-required"));
  return {
    type: o.FIELD_TYPE.SELECT,
    label: n,
    required: a,
    options: i,
    $input: t[0],
    $label: r ?? e,
    $radioParent: e
  }
}

function c(e) {
  return d(e.closest("label")?.textContent)
}

function d(e) {
  return String(e ?? "").replace(/\s+/g, " ").trim()
}
async function f(e) {
  let t = (0, i.getFirstOrderedNodeSafe)(
    './/label[contains(@class, "ashby-application-form-question-title")]', e);
  t || (t = (0, i.getFirstOrderedNodeSafe)('.//label[contains(@class, "_label_")]', e));
  let r = t ? t.textContent.trim().split("\n")[0].replace("\u2731", "") : "";
  if (_(r)) return null;
  let n = (0, i.getFirstOrderedNodeSafe)(".//label/@class", e),
    l = !1;
  n && n.textContent.includes("required") && (l = !0);
  let s = (0, i.getFirstOrderedNodeSafe)('.//input[@role="combobox"]', e);
  if (s) {
    await (0, a.annotateAshbyFieldType)(s);
    let n = await M(s, e, r),
      i = z(r),
      u = Y(r),
      c = i && n.length > 0 ? V(n) : "",
      d = i || u ? [] : n;
    return {
      type: o.FIELD_TYPE.ASHBY_SEARCH,
      label: r,
      required: l,
      options: d,
      ...c ? {
        description: c
      } : {},
      $input: s,
      $label: t
    }
  }
  let u = (0, i.getFirstOrderedNodeSafe)('.//input[@type="text"]', e) || (0, i
      .getFirstOrderedNodeSafe)('.//input[@type="email"]', e) || (0, i.getFirstOrderedNodeSafe)(
      './/input[@type="tel"]', e) || (0, i.getFirstOrderedNodeSafe)('.//input[@type="number"]',
    e) || (0, i.getFirstOrderedNodeSafe)('.//input[@type="url"]', e) || (0, i
      .getFirstOrderedNodeSafe)(".//textarea", e);
  if (u) {
    let e = A(u);
    return {
      type: o.FIELD_TYPE.TEXT,
      label: r,
      required: l,
      ...e ? {
        description: e
      } : {},
      $input: u,
      $label: t
    }
  }
  let c = (0, i.getFirstOrderedNodeSafe)('.//div[contains(@class, "location-input-container")]',
    e);
  if (c) {
    let e = (0, i.getFirstOrderedNodeSafe)(".//input", c);
    if (u && "list" == u.getAttribute("aria-autocomplete")) return {
      type: o.FIELD_TYPE.TEXT,
      label: r,
      required: l,
      $input: e,
      $label: t
    }
  }
  let d = (0, i.getOrderedNodesSafe)('.//div[contains(@class, "yesno")]', e);
  if (d.length > 0) {
    let n = (0, i.getOrderedNodesSafe)(".//button/text()", e);
    return {
      type: o.FIELD_TYPE.CHECKBOX,
      label: r,
      required: l,
      $checkboxs: d,
      options: n.map(e => e.textContent.trim()),
      $input: d[0],
      $label: t
    }
  }
  let f = (0, i.getFirstOrderedNodeSafe)(".//fieldset", e) || (0, i.getFirstOrderedNodeSafe)(
    './/div[contains(@class, "_option_")]', e);
  if (f) {
    let n = (0, i.getOrderedNodesSafe)(
        './/div[contains(@class, "_option_")]/label/text() | .//fieldset//label/text()', e),
      a = (0, i.getFirstOrderedNodeSafe)('.//input[@type="checkbox"]', e);
    return a ? {
      label: r,
      $label: t,
      required: l,
      type: o.FIELD_TYPE.MULTI_SELECT,
      $input: a,
      options: n.map(e => e.textContent.trim())
    } : {
      type: o.FIELD_TYPE.SELECT,
      label: r,
      $label: t,
      required: l,
      options: n.map(e => e.textContent.trim())
    }
  }
  return null
}

function p(e = document) {
  let t = Array.from(e.querySelectorAll("label")),
    r = t.find(e => _(D(e)));
  return r?.closest(".ashby-application-form-field-entry") || r?.parentElement
}

function m(e = document) {
  let t = "undefined" != typeof Document && e instanceof Document ? p(e) : e;
  return t ? Array.from(t.querySelectorAll('[class*="repeatableEducationEntry"]')) : []
}

function h() {
  let e = p();
  if (!e) return [];
  let t = m(e),
    r = t.length > 0 ? t : [e],
    n = !!I(e, "Education History")?.className.includes("required");
  return r.map(e => {
    let t = b(e);
    return 0 === t.length ? null : {
      type: o.FIELD_TYPE.EDUCATION,
      label: "Education History",
      children: t,
      options: k(t),
      required: n
    }
  }).filter(e => null !== e)
}

function g() {
  let e = p();
  if (!e) return [];
  let t = m(e),
    r = t.length > 0 ? t : [e];
  return r.map(e => {
    let t = {};
    for (let r of b(e)) {
      let e = r.$input;
      e && (e instanceof HTMLSelectElement ? t[r.label] = T(e) : t[r.label] = e.value ?? "")
    }
    return t
  }).filter(e => Object.keys(e).length > 0)
}

function b(e) {
  let t = [],
    r = y(e, "School");
  r && t.push(r);
  let n = v(e, "Degree");
  n && t.push(n);
  let o = v(e, "Field of Study") ?? v(e, "Major");
  return o && t.push(o), t.push(...w(e, "Start Date")), t.push(...w(e, "End Date")), t
}

function y(e, t) {
  let r = I(e, t),
    n = r ? j(r, e) : null,
    i = n?.querySelector('input[role="combobox"]');
  return r && i ? {
    type: o.FIELD_TYPE.ASHBY_SEARCH,
    label: t,
    required: L(r),
    options: [],
    $input: i,
    $label: r
  } : null
}

function v(e, t) {
  let r = I(e, t),
    n = r ? j(r, e) : null,
    i = n?.querySelector(
      'input:not([type="file"]):not([type="hidden"]):not([role="combobox"]), textarea');
  if (!r || !i) return null;
  let a = A(i);
  return {
    type: o.FIELD_TYPE.TEXT,
    label: t,
    required: L(r),
    ...a ? {
      description: a
    } : {},
    $input: i,
    $label: r
  }
}

function w(e, t) {
  let r = I(e, t);
  if (!r) return [];
  let n = [],
    i = S(e, r),
    a = i.find(e => e instanceof HTMLSelectElement && E(e)) ?? null,
    l = i.find(e => e instanceof HTMLSelectElement && e !== a && x(e)) ?? null,
    s = i.find(e => (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && !C(e)) ??
    null;
  if (l) n.push({
    type: o.FIELD_TYPE.SELECT,
    label: `${t} - Year`,
    required: l.required,
    $input: l,
    $label: r,
    options: F(l)
  });
  else if (s) {
    let e = A(s);
    n.push({
      type: o.FIELD_TYPE.TEXT,
      label: `${t} - Year`,
      required: s.required,
      ...e ? {
        description: e
      } : {},
      $input: s,
      $label: r
    })
  }
  return a && n.push({
    type: o.FIELD_TYPE.SELECT,
    label: `${t} - Month`,
    required: a.required,
    $input: a,
    $label: r,
    options: F(a)
  }), n
}

function S(e, t) {
  let r = Array.from(e.querySelectorAll("label")),
    n = r.indexOf(t),
    o = n >= 0 ? r.slice(n + 1).find(e => {
      let r = D(e);
      return r && r !== D(t)
    }) ?? null : null;
  return Array.from(e.querySelectorAll(
      'input:not([type="file"]):not([type="hidden"]):not([role="combobox"]), select, textarea'))
    .filter(e => {
      let r = !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING);
      return !!r && (!o || !!(e.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING))
    })
}

function E(e) {
  let t = F(e).map(e => P(e));
  return t.some(e => e.includes("month") ||
    /^(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)$/
    .test(e))
}

function x(e) {
  let t = F(e).map(e => P(e));
  return t.some(e => /^\d{4}$/.test(e))
}

function C(e) {
  let t = P(e.getAttribute("placeholder") || ""),
    r = P(e.getAttribute("name") || "");
  return t.includes("month") || r.includes("month")
}

function A(e) {
  return e.getAttribute("type")?.toLowerCase() === "number" ? "number" : void 0
}

function k(e) {
  return e.map(e => {
    let t = {
        label: e.label,
        type: e.type
      },
      r = e.options;
    Array.isArray(r) && (t.options = r);
    let n = e.description;
    return n && (t.description = n), t
  })
}

function T(e) {
  let t = e.selectedOptions?.[0];
  if (!t || t.disabled || t.hidden) return "";
  let r = t.textContent?.trim() || e.value || "";
  return /^\s*month\.\.\.\s*$/i.test(r) ? "" : r
}

function F(e) {
  return Array.from(e.options).filter(e => !e.disabled && !e.hidden).map(e => e.textContent
  ?.trim() || e.value).filter(e => e && !/^\s*month\.\.\.\s*$/i.test(e))
}

function I(e, t) {
  let r = P(t),
    n = Array.from(e.querySelectorAll("label"));
  return n.find(e => P(D(e)) === r) ?? null
}

function j(e, t) {
  let r = e.parentElement;
  for (; r;) {
    if (r.querySelector("input, select, textarea")) return r;
    if (r === t) break;
    r = r.parentElement
  }
  return e.parentElement ?? t
}

function D(e) {
  return String(e.textContent ?? "").split("\n")[0].replace("\u2731", "").trim()
}

function P(e) {
  return String(e ?? "").replace("\u2731", "").replace(/\s+/g, " ").trim().toLowerCase()
}

function _(e) {
  return "education history" === P(e)
}

function L(e) {
  return e.className.includes("required")
}

function R() {
  let e = {},
    t = p(),
    r = e => !!t?.contains(e),
    n = (0, i.getOrderedNodesSafe)(
      './/input[@type="text" or @type="email" or @type="tel" or @type="number" or @type="url"] | .//textarea'
      );
  for (let t of n) {
    if (r(t)) continue;
    let n = (t.parentElement.querySelector("label") || i.getFirstOrderedNodeSafe(
      "./preceding::label[1]", t))?.textContent.trim();
    !n || t.className.includes("g-recaptcha-response") || (e[n] = t.value)
  }
  let o = (0, i.getOrderedNodesSafe)('.//input[@role="combobox"]');
  for (let t of o) {
    if (r(t)) continue;
    let n = O(t);
    n && (e[n] = t.value)
  }
  let a = (0, i.getOrderedNodesSafe)(".//fieldset[contains(@class, '_container_1v5e2_29')]");
  for (let t of a) {
    let r = t.querySelector("label")?.textContent.trim();
    if (r) {
      if ((0, i.getFirstOrderedNodeSafe)(".//input[@type='radio']", t)) {
        let n = (0, i.getFirstOrderedNodeSafe)("./div[contains(@class, 'true')]//label", t);
        e[r] = n ? n.textContent.trim() : ""
      } else if ((0, i.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", t)) {
        let n = [],
          o = (0, i.getOrderedNodesSafe)(".//span[contains(@class, '_checked')]", t);
        for (let e of o) {
          let t = (0, i.getFirstOrderedNodeSafe)("following-sibling::label", e);
          t && n.push(t.textContent.trim())
        }
        e[r] = n
      }
    }
  }
  let l = (0, i.getOrderedNodesSafe)('.//div[contains(@class, "yesno")]');
  for (let t of l) {
    let r = (t.parentElement.querySelector("label") || i.getFirstOrderedNodeSafe(
      "./preceding::label[1]", t))?.textContent.trim();
    if (!r) continue;
    let n = (0, i.getOrderedNodesSafe)(".//button", t);
    for (let t of n) t.className.includes("active") && (e[r] = t.textContent.trim());
    e[r] || (e[r] = "")
  }
  let s = u();
  if (s) {
    let t = Array.from(s.$radioParent.querySelectorAll(
      'input[type="radio"][name="communicationConsent"]')).find(e => e.checked);
    e[s.label] = t ? c(t) : ""
  }
  return e
}

function O(e) {
  let t = e.parentElement.querySelector("label") || (0, i.getFirstOrderedNodeSafe)(
    "./preceding::label[1]", e);
  if (t) return t.textContent?.trim() || null;
  let r = e.closest('div[class*="_container_"]');
  if (r) {
    let e = (0, i.getFirstOrderedNodeSafe)("./preceding-sibling::*[1]", r);
    if (e && e.textContent) return e.textContent.trim()
  }
  if (e.id) {
    let t = document.querySelector(`label[for="${e.id}"]`);
    if (t) return t.textContent?.trim() || null
  }
  return null
}

function M(e, t, r) {
  return N(e, t, r)
}
async function N(e, t, r) {
  let n = [],
    o = await B(e, r);
  o.length > 0 && (n = o);
  let i = t.querySelector('button[class*="_toggleButton_"]');
  if (i && 0 === n.length) {
    let t = !1;
    try {
      i.click(), t = !0;
      let r = await Q(e);
      r.length > 0 && (n = r)
    } catch (e) {
      console.warn("Auto-click extraction failed", e)
    } finally {
      t && "true" === i.getAttribute("aria-expanded") && i.click()
    }
  }
  return n && n.length > 0 ? n.map(e => "string" == typeof e ? e : e.text || e.label || e.value ||
    JSON.stringify(e)).filter(e => e && "Select..." !== e) : []
}

function $(e) {
  let t = e.toLowerCase();
  return t.includes("school") || t.includes("location")
}
async function B(e, t) {
  if (!(e instanceof HTMLInputElement) || !$(t)) return [];
  let r = e.value,
    n = [],
    o = q(t);
  try {
    for (let r of o) {
      W(e), G(e, r), K(e);
      let o = await J();
      if (U(n, o), e.dispatchEvent(new KeyboardEvent("keydown", {
          key: "Escape",
          bubbles: !0,
          cancelable: !0
        })), await (0, l.delay)(50), z(t) && n.length >= 20) break
    }
  } catch (e) {
    console.warn("Ashby combobox search expansion failed", e)
  } finally {
    G(e, r), K(e), e.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: !0,
      cancelable: !0
    })), e.blur(), await (0, l.delay)(50)
  }
  return n
}

function q(e) {
  return Y(e) ? [" "] : z(e) ? ["a"] : [" "]
}

function U(e, t) {
  for (let r of t) {
    let t = H(r);
    t && !e.some(e => H(e) === t) && e.push(r)
  }
}

function H(e) {
  return String(e ?? "").replace(/\s+/g, " ").trim().toLowerCase()
}

function Y(e) {
  return e.toLowerCase().includes("school")
}

function z(e) {
  let t = e.toLowerCase();
  return t.includes("location") || t.includes("city")
}

function V(e) {
  let t = e.find(e => e?.trim());
  return t ? `Option format example: ${t}` : ""
}

function W(e) {
  e.focus(), e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  }))
}

function G(e, t) {
  let r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set,
    n = e.value;
  r ? r.call(e, t) : e.value = t;
  try {
    let t = e?._valueTracker;
    t?.setValue && t.setValue(n)
  } catch (e) {
    console.warn("Ashby search input tracker update failed", e)
  }
}

function K(e) {
  e.dispatchEvent(new InputEvent("input", {
    bubbles: !0,
    cancelable: !0,
    composed: !0
  })), e.dispatchEvent(new KeyboardEvent("keydown", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new KeyboardEvent("keyup", {
    bubbles: !0,
    cancelable: !0
  }))
}
async function X(e) {
  let t = 8;
  for (let r = 0; r < t; r++) {
    let t = e();
    if (t.length > 0) return t;
    await (0, l.delay)(100)
  }
  return []
}

function J() {
  return X(Z)
}

function Q(e) {
  return X(() => {
    if ("true" !== e.getAttribute("aria-expanded")) return [];
    let t = e.getAttribute("aria-controls");
    if (!t) return [];
    let r = document.getElementById(t);
    return r ? Array.from(r.querySelectorAll('div[role="option"]')).map(e => e.textContent
      ?.trim()).filter(e => !!e) : []
  })
}

function Z() {
  let e = document.querySelectorAll('div[role="listbox"] div[role="option"]');
  return Array.from(e).map(e => e.textContent?.trim()).filter(e => !!e)
}

function ee(e, t = 0, r = new Set) {
  if (!e || !Array.isArray(e) || 0 === e.length || r.has(e)) return null;
  r.add(e);
  let n = e.every(e => "string" == typeof e);
  if (n) return e;
  let o = e.every(e => "object" == typeof e && null !== e && ("label" in e || "value" in e ||
    "text" in e || "id" in e));
  return o ? e : null
}

