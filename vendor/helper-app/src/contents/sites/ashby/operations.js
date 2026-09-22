/**
 * Parcel module id: 3giV6
 * Resolved path: src/contents/sites/ashby/operations.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   dayjs/plugin/customParseFormat -> g94SE  =>  dayjs/plugin/customParseFormat.js
 *   fuse.js -> auUGt  =>  fuse.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~contents/sites/ashby/answer -> Cpwm9  =>  src/contents/sites/ashby/answer.js
 *   ~contents/sites/ashby/canonical-search -> 99dYo  =>  src/contents/sites/ashby/canonical-search.js
 *   ~contents/sites/ashby/country -> bdkMH  =>  src/contents/sites/ashby/country.js
 *   ~contents/sites/ashby/native-select -> lLsBv  =>  src/contents/sites/ashby/native-select.js
 *   ~contents/sites/ashby/phone-value -> 8jmJu  =>  src/contents/sites/ashby/phone-value.js
 *   ~contents/sites/ashby/rules -> 5iMv1  =>  src/contents/sites/ashby/rules.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillAshbyCountryCombobox", () => w.fillAshbyCountryCombobox), n
  .export(r, "resolveAshbyCountryOption", () => w.resolveAshbyCountryOption), n.export(r,
    "preFillForm", () => A), n.export(r, "syncEducationHistorySections", () => k), n.export(r,
    "getAshbyResumeInput", () => L), n.export(r, "uploadResume", () => R), n.export(r,
    "getAshbyCoverLetterStatus", () => M), n.export(r, "getAshbyCoverLetterFieldType", () => N), n
  .export(r, "getAshbyCoverLetterInput", () => $), n.export(r, "uploadCoverLetter", () => z), n
  .export(r, "fillCheckboxField", () => V), n.export(r, "fillInputTextField", () => W), n.export(r,
    "fillSelectField", () => X), n.export(r, "fillComboboxField", () => eh), n.export(r,
    "findExactAshbyComboboxOption", () => eg), n.export(r, "fillResolvedLocationCombobox", () =>
  ey), n.export(r, "clearExistingResume", () => eO);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("dayjs/plugin/customParseFormat"),
  l = n.interopDefault(a),
  s = e("fuse.js"),
  u = n.interopDefault(s),
  c = e("~contents/shared/filler"),
  d = e("~contents/methods/answer"),
  f = e("~contents/methods/dom"),
  p = e("~contents/sites/ashby/answer"),
  m = e("~contents/sites/ashby/phone-value"),
  h = e("~contents/sites/ashby/canonical-search"),
  g = e("~contents/sites/ashby/native-select"),
  b = e("~contents/sites/ashby/rules"),
  y = e("~core/xpath"),
  v = e("~utils/delay"),
  w = e("~contents/sites/ashby/country");
(0, i.default).extend(l.default);
let S = /\bresume\b/i,
  E = /\bcover\s+letter\b/i,
  x = /\bcover[\s_-]*letter\b|coverletter/i,
  C = 'textarea,input:not([type]),input[type="text"]';
async function A() {
  let e = document.getElementById("job-application-form");
  e && (e.click(), await (0, v.delay)(500))
}
async function k(e) {
  let t = Math.max(e, 1),
    r = 0;
  for (; T() < t;) {
    if (r++ > t + 5) {
      console.warn("[Ashby][Education] safety break", {
        rows: T(),
        desiredCount: t
      });
      break
    }
    let e = T(),
      n = await j({
        maxWaitMs: 1500
      });
    if (!n) {
      console.warn("[Ashby][Education] Add education button not found", {
        rows: e,
        desiredCount: t
      });
      break
    }
    n.click();
    let o = await D(e, {
      maxWaitMs: 2e3,
      intervalMs: 100
    });
    if (o <= e) {
      console.warn("[Ashby][Education] click had no effect after 2s", {
        rowsBefore: e,
        rowsAfter: o
      });
      break
    }
  }
  for (r = 0; !(r++ > 20);) {
    let e = (0, b.getAshbyEducationHistoryContainer)();
    if (!e) break;
    let r = (0, b.getAshbyEducationRows)(e);
    if (r.length <= t || r.length <= 1) break;
    let n = P(r[r.length - 1], "delete");
    if (!n) {
      console.warn("[Ashby][Education] Delete education button not found");
      break
    }
    n.click(), await (0, v.delay)(300)
  }
}

function T() {
  let e = (0, b.getAshbyEducationHistoryContainer)();
  return e ? (0, b.getAshbyEducationRows)(e).length : 0
}
let F = [() => Array.from(document.querySelectorAll('button[class*="_repeatableEducationButton_"]'))
  .find(e => !e.disabled && /add/i.test(e.textContent ?? "")) ?? null, () => Array.from(document
    .querySelectorAll("button")).find(e => {
    if (e.disabled) return !1;
    let t = [e.textContent, e.getAttribute("aria-label")].filter(Boolean).join(" ")
    .toLowerCase();
    return t.includes("add") && t.includes("education")
  }) ?? null, () => {
    let e = (0, b.getAshbyEducationHistoryContainer)();
    return e ? P(e, "add") : null
  }
];

function I() {
  for (let e of F) {
    let t = e();
    if (t) return t
  }
  return null
}
async function j(e) {
  let t = Date.now(),
    r = I();
  for (; !r && Date.now() - t < e.maxWaitMs;) await (0, v.delay)(100), r = I();
  return r
}
async function D(e, t) {
  let r = Date.now(),
    n = T();
  for (; n <= e && Date.now() - r < t.maxWaitMs;) await (0, v.delay)(t.intervalMs), n = T();
  return n
}

function P(e, t) {
  let r = Array.from(e.querySelectorAll("button"));
  return r.find(e => {
    if (e.disabled) return !1;
    let r = _(e);
    return "add" === t ? r.includes("add") : r.includes("delete") || r.includes("remove")
  }) ?? null
}

function _(e) {
  return [e.textContent, e.getAttribute("aria-label"), e.getAttribute("title")].filter(Boolean)
    .join(" ").replace(/\s+/g, " ").trim().toLowerCase()
}

function L(e = document) {
  let t = e.querySelector('input[type="file"][id="_systemfield_resume"]');
  if (t) return t;
  let r = Array.from(e.querySelectorAll(
    '.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"]'));
  for (let e of r) {
    let t = e.querySelector("label"),
      r = t ? Y(t) : "";
    if (S.test(r) && !E.test(r)) {
      let t = e.querySelector('input[type="file"]');
      if (t) return t
    }
  }
  return null
}
async function R(e, t, r) {
  let n = L();
  if (n) {
    let o = O(n);
    console.info("[Ashby][Resume] upload status", {
      required: o.required,
      requirementSource: o.source,
      inputKind: "_systemfield_resume" === n.id ? "system" : "custom"
    }), await (0, f.uploadFiles)(n, await (0, d.fetchPdfAsBlob)(e), t, r, "Resume/CV", o
      .required)
  }
}

function O(e) {
  if (e.required) return {
    required: !0,
    source: "native-required"
  };
  if ("true" === e.getAttribute("aria-required")) return {
    required: !0,
    source: "aria-required"
  };
  let t = e.closest?.(
      '.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"]'),
    r = t?.querySelector("label"),
    n = !!r?.className.includes("required") || Y(r ?? e).includes("\u2731");
  return n ? {
    required: !0,
    source: "label-required"
  } : {
    required: !1,
    source: "none"
  }
}

function M(e = document) {
  let t = N(e);
  return "file" === t ? "required" : "text" === t ? "optional" : ""
}

function N(e = document) {
  let t = q(e),
    r = t ? H(t) : null;
  return r?.querySelector('input[type="file"]') ? "file" : r && B(r) ? "text" : U(e) ? "file" : ""
}

function $(e = document) {
  let t = q(e),
    r = t ? H(t) : null,
    n = r?.querySelector('input[type="file"]');
  return n || U(e)
}

function B(e) {
  return e.querySelector(C)
}

function q(e = document) {
  let t = Array.from(e.querySelectorAll("label"));
  return t.find(e => E.test(Y(e))) ?? null
}

function U(e) {
  let t = Array.from(e.querySelectorAll('input[type="file"]'));
  return t.find(e => {
    let t = [e.id, e.name, e.getAttribute("aria-label"), e.getAttribute("data-testid"), e
      .getAttribute("data-qa")
    ].filter(Boolean).join(" ");
    return x.test(t)
  }) ?? null
}

function H(e) {
  let t = e.closest?.(
    '.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"]');
  if (t) return t;
  let r = e.parentElement;
  for (; r;) {
    if (r.querySelector('input[type="file"], input, textarea, select')) return r;
    if (r === document.body) break;
    r = r.parentElement
  }
  return e.parentElement
}

function Y(e) {
  return String(e.textContent ?? "").replace(/\s+/g, " ").trim()
}
async function z(e, t, r) {
  let n = $();
  n && await (0, f.uploadFiles)(n, await (0, d.fetchCoverLetterPdfAsBlob)(e), t, r,
    "Cover Letter")
}
async function V(e, t) {
  for (let r of t) {
    let t = (0, y.getFirstOrderedNodeSafe)('./button[text()="' + r + '"]', e.$input);
    if (t) {
      let e = t;
      e.className.includes("active") || (e.click(), await (0, v.delay)(500))
    } else throw new c.FillError(
      `No matching checkbox option for label: ${e.label} with value: ${r}`)
  }
}
async function W(e, t, r = "", n) {
  let o = "string" == typeof t ? t : String(t ?? ""),
    i = G(e, o, r, n);
  await ei(e, i);
  let a = document.querySelector(".react-datepicker-popper");
  a ? (document.body.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0
  })), document.body.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0
  })), document.body.click(), document.dispatchEvent(new KeyboardEvent("keydown", {
    key: "Escape",
    bubbles: !0,
    cancelable: !0
  })), e.blur(), await (0, v.delay)(300)) : (ea(e), await (0, v.delay)(300), e.blur());
  let l = await el(e, i);
  if (!l) throw new c.FillError(`Text input value was not applied: ${i}`)
}

function G(e, t, r = "", n) {
  if (e instanceof HTMLInputElement && "tel" === e.type) return (0, m.resolveAshbyPhoneValue)(t, n);
  let o = ec(e),
    i = K(r);
  return o || i ? (0, p.normalizeAshbyDateInputValue)(t) : t
}

function K(e) {
  let t = String(e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
  return /\b(start|end|graduation)\s+date\b/.test(t) || t.includes("available start date")
}
async function X(e, t) {
  let r = Array.isArray(t) ? t : [t];
  if (J(e)) {
    await Q(e, r);
    return
  }
  for (let t of r) {
    if (en(e.$input)) {
      await Z(e.$input, t, e.label);
      continue
    }
    let r = String(t ?? "").replace(/\s+/g, " ").trim(),
      n = (0, y.getFirstOrderedNodeSafe)(
        `following-sibling::div[contains(@class, "_option_")]//label[normalize-space()=${(0,y.escapeXPath)(r)}]`,
        e.$label);
    if (n) {
      let r = (0, y.getFirstOrderedNodeSafe)("preceding-sibling::span//input", n);
      if (r?.checked) continue;
      if (r) r.click();
      else throw new c.FillError(
        `No clickable select input for label: ${e.label} with value: ${t}`);
      if (await (0, v.delay)(200), !r.checked && n instanceof HTMLElement && (n.click(), await (0,
          v.delay)(200)), !r.checked) throw new c.FillError(
        `Select option click was not applied for label: ${e.label} with value: ${t}`)
    } else throw new c.FillError(
      `No matching select option for label: ${e.label} with value: ${t}`)
  }
}

function J(e) {
  let t = e.$input,
    r = e.$radioParent;
  return t?.tagName === "INPUT" && "radio" === t.type && "communicationConsent" === t.name && !!r
}
async function Q(e, t) {
  let r = eo(t[0] ?? ""),
    n = Array.from(e.$radioParent.querySelectorAll(
      'input[type="radio"][name="communicationConsent"]')),
    o = n.filter(e => !e.disabled && eo(e.closest("label")?.textContent ?? "") === r);
  if (console.info("[Ashby][CommunicationConsent] fill-start", {
      optionCount: n.length,
      matchCount: o.length,
      hasAnswer: !!r
    }), !r || 1 !== o.length) throw new c.FillError(
    `No unique communication consent option for label: ${e.label}`);
  let i = o[0];
  if (i.checked || (i.click(), await (0, v.delay)(200)), !i.checked) {
    let e = i.closest("label");
    e?.click(), await (0, v.delay)(200)
  }
  if (!i.checked) throw console.warn("[Ashby][CommunicationConsent] fill-failed", {
    reason: "checked-readback-failed"
  }), new c.FillError(
    `Communication consent option click was not applied for label: ${e.label}`);
  console.info("[Ashby][CommunicationConsent] fill-committed", {
    checked: !0
  })
}
async function Z(e, t, r) {
  let n = Array.from(e.options).map(e => ({
      value: e.value,
      text: e.textContent?.trim() || "",
      disabled: e.disabled,
      hidden: e.hidden
    })),
    o = (0, g.resolveAshbyNativeSelectOptionValue)(t, n);
  if (null === o) throw new c.FillError(
    `No matching native select option for label: ${r} with value: ${t}`);
  let i = await ee(e, o);
  if (!i) throw new c.FillError(
    `Native select value was not applied for label: ${r} with value: ${t}`)
}
async function ee(e, t) {
  let r = Array.from(e.options).findIndex(e => e.value === t);
  if (r < 0) return !1;
  for (let n = 0; n < 3; n++)
    if (et(e, r, t), er(e), await (0, v.delay)(0 === n ? 150 : 250), e.value === t) return !0;
  return e.value === t
}

function et(e, t, r) {
  let n = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value")?.set,
    o = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "selectedIndex")?.set,
    i = e.value;
  o ? o.call(e, t) : e.selectedIndex = t, n ? n.call(e, r) : e.value = r, Array.from(e.options)
    .forEach((e, r) => {
      e.selected = r === t
    });
  try {
    e._valueTracker?.setValue?.(i)
  } catch (e) {
    console.warn("Ashby native select tracker update failed", e)
  }
}

function er(e) {
  e.focus(), e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0
  })), e.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0
  })), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0
  })), e.dispatchEvent(new Event("input", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !0
  })), e.blur()
}

function en(e) {
  return "undefined" != typeof HTMLSelectElement && e instanceof HTMLSelectElement || e?.tagName ===
    "SELECT"
}

function eo(e) {
  return e.normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"')
    .replace(/\s+/g, " ").trim()
}
async function ei(e, t) {
  if (!e) throw new c.FillError("Text input element is null");
  e.focus(), e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0
  })), e.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0
  })), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0
  })), eE(e, t), ea(e)
}

function ea(e) {
  e.dispatchEvent(new InputEvent("input", {
    bubbles: !0,
    cancelable: !0,
    composed: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new KeyboardEvent("keydown", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new KeyboardEvent("keyup", {
    bubbles: !0,
    cancelable: !0
  }))
}
async function el(e, t) {
  let r = 5;
  for (let n = 0; n < r; n++) {
    if (eu(e, t)) return !0;
    await (0, v.delay)(100)
  }
  return eu(e, t)
}

function es(e) {
  return String(e ?? "").replace(/\r\n/g, "\n").trim()
}

function eu(e, t) {
  let r = es(e.value),
    n = es(t);
  return r === n || (ec(e) ? ep(r, n) : !!ed(e) && ef(r) === ef(n))
}

function ec(e) {
  return e instanceof HTMLInputElement && ("Pick date..." === e.placeholder || !!e.closest(
    ".react-datepicker-wrapper"))
}

function ed(e) {
  return e instanceof HTMLInputElement && "tel" === e.type
}

function ef(e) {
  return String(e ?? "").replace(/\D/g, "")
}

function ep(e, t) {
  let r = em(e),
    n = em(t);
  return !!r && !!n && ("month" === n.precision ? r.date.isSame(n.date, "month") : r.date.isSame(n
    .date, "day"))
}

function em(e) {
  let t = String(e ?? "").trim();
  if (!t) return null;
  let r = ["YYYY-MM", "YYYY/MM", "MM/YYYY", "MM-YYYY", "MMM YYYY", "MMMM YYYY", "MMM, YYYY",
    "MMMM, YYYY"
  ];
  for (let e of r) {
    let r = (0, i.default)(t, e, !0);
    if (r.isValid()) return {
      date: r,
      precision: "month"
    }
  }
  let n = ["YYYY-MM-DD", "YYYY/MM/DD", "MM/DD/YYYY", "MM-DD-YYYY", "M/D/YYYY", "M-D-YYYY"];
  for (let e of n) {
    let r = (0, i.default)(t, e, !0);
    if (r.isValid()) return {
      date: r,
      precision: "day"
    }
  }
  return null
}
async function eh(e, t) {
  let r = "string" == typeof t ? t : String(t ?? "");
  if (eP(e.label)) {
    let t = await (0, h.resolveAshbyCanonicalSchool)(r).catch(() => null);
    if (t) {
      let r = await ev(e, t);
      if (r) return
    }
  }
  let n = ex(e, r);
  for (let t of n) {
    await eR(e.$input, t);
    let n = await eT(r, e.options);
    if (n) {
      n.click(), await (0, v.delay)(200);
      return
    }
  }
  throw eS(e.$input), new c.FillError(
    `No matching combobox option for label: ${e.label} with value: ${r}`)
}

function eg(e, t) {
  let r = ej(e);
  return r ? t.find(e => ej(e.textContent ?? "") === r) ?? null : null
}
async function eb(e, t) {
  let r = 12;
  for (let n = 0; n < r; n++) {
    let r = "true" === t.getAttribute("aria-expanded") ? t.getAttribute("aria-controls") : null,
      n = r ? document.getElementById(r) : null,
      o = n ? Array.from(n.querySelectorAll('[role="option"]')) : [],
      i = eg(e, o);
    if (i) return i;
    await (0, v.delay)(100)
  }
  return null
}
async function ey(e, t) {
  let r = String(t ?? "").trim();
  if (!r) throw new c.FillError("Resolved Ashby location value is empty");
  console.info("[Ashby][GeoLocation] exact-fill-start", {
    label: e.label,
    targetLength: r.length
  }), e.$input.setAttribute?.("data-jr-ashby-resolve-stage", "exact-fill"), await eR(e.$input,
    r);
  let n = await eb(r, e.$input);
  if (n) {
    n.click(), await (0, v.delay)(200), console.info(
    "[Ashby][GeoLocation] exact-fill-committed", {
      label: e.label,
      committedLength: String(e.$input.value ?? "").length
    }), e.$input.setAttribute?.("data-jr-ashby-resolve-stage", "committed");
    return
  }
  throw console.warn("[Ashby][GeoLocation] exact-fill-failed", {
      label: e.label,
      reason: "no-exact-option",
      targetLength: r.length,
      expanded: e.$input.getAttribute("aria-expanded")
    }), e.$input.setAttribute?.("data-jr-ashby-resolve-stage", "no-exact-option"), eS(e.$input),
    new c.FillError(`No exact combobox option for label: ${e.label} with resolved value: ${r}`)
}
async function ev(e, t) {
  await eR(e.$input, t);
  let r = await ew(t);
  return !!r && (r.click(), await (0, v.delay)(200), !0)
}
async function ew(e) {
  let t = 12,
    r = ej(e);
  if (!r) return null;
  for (let e = 0; e < t; e++) {
    let e = document.querySelectorAll('div[role="listbox"] div[role="option"]'),
      t = null,
      n = null;
    for (let o of e) {
      let e = ej(o.textContent ?? "");
      if (e === r) return o;
      !t && e.startsWith(r) ? t = o : !n && e.includes(r) && (n = o)
    }
    if (t ?? n) return t ?? n;
    await (0, v.delay)(100)
  }
  return null
}

function eS(e) {
  e && (eE(e, ""), e.dispatchEvent(new InputEvent("input", {
    bubbles: !0,
    cancelable: !0,
    composed: !0
  })), e.dispatchEvent(new KeyboardEvent("keydown", {
    key: "Escape",
    bubbles: !0,
    cancelable: !0
  })), e.blur())
}

function eE(e, t) {
  let r = e instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window
    .HTMLInputElement.prototype,
    n = Object.getOwnPropertyDescriptor(r, "value")?.set,
    o = e.value;
  n ? n.call(e, t) : e.value = t;
  try {
    let t = e?._valueTracker;
    t?.setValue && t.setValue(o)
  } catch (e) {
    console.warn("Ashby react input tracker update failed", e)
  }
}

function ex(e, t) {
  let r = [],
    n = e => {
      let t = e.trim();
      t && (r.some(e => ej(e) === ej(t)) || r.push(t))
    };
  for (let r of (n(t), eC(t, e.label, e.options))) n(r);
  for (let r of eA(t, e.label, e.options)) n(r);
  return r
}

function eC(e, t, r = []) {
  let n = ej(e);
  if (!n) return [];
  let o = [],
    i = eI(e, r),
    a = n.split(" ").filter(Boolean),
    l = e_(e, ","),
    s = eL(e);
  if (eP(t)) {
    if (i) {
      let e = ej(i).split(" ").filter(Boolean);
      e.length >= 2 && o.push(e.slice(0, Math.min(e.length, 4)).join(" "))
    }
    a.length >= 4 ? o.push(a.slice(0, 4).join(" ")) : a.length >= 2 && o.push(a.join(" "))
  } else i && o.push(i), l[0] && o.push(l[0]), s[0] && o.push(s[0]);
  return 0 === o.length && a.length >= 2 && o.push(a.slice(0, Math.min(a.length, 3)).join(" ")), o
}

function eA(e, t, r = []) {
  let n = ej(e),
    o = [],
    i = eI(e, r);
  for (let r of (i && o.push(i), ek(e, t))) o.push(r);
  if (n.includes(" ")) {
    let e = n.split(" ").filter(Boolean);
    for (let t = e.length - 1; t >= 2; t--) o.push(e.slice(0, t).join(" "))
  }
  return o
}

function ek(e, t) {
  let r = ej(e),
    n = [],
    o = r.split(",").map(e => e.trim()).filter(Boolean);
  n.push(...o);
  let i = r.split(/\s+-\s+|-/).map(e => e.trim()).filter(Boolean);
  n.push(...i);
  let a = r.split(" ").filter(Boolean);
  return eP(t) && a.length >= 2 && n.push(a.slice(0, Math.min(a.length, 4)).join(" ")), Array.from(
    new Set(n.map(e => e.trim()).filter(Boolean)))
}
async function eT(e, t = []) {
  let r = 12;
  for (let n = 0; n < r; n++) {
    let r = Array.from(document.querySelectorAll('div[role="listbox"] div[role="option"]')),
      n = eF(e, r, t);
    if (n) return n;
    await (0, v.delay)(100)
  }
  return null
}

function eF(e, t, r = []) {
  if (0 === t.length) return null;
  let n = ej(e),
    o = eI(e, r),
    i = ej(o),
    a = t.find(e => {
      let t = ej(e.textContent ?? "");
      return t === n || i && t === i
    }) || t.find(e => {
      let t = ej(e.textContent ?? "");
      return t.includes(n) || n.includes(t)
    });
  if (a) return a;
  let l = t.map(e => ({
      element: e,
      text: e.textContent ?? "",
      normalized: ej(e.textContent ?? "")
    })),
    s = eD(e, l);
  return s?.element || null
}

function eI(e, t = []) {
  if (!t.length) return "";
  let r = eD(e, t.map(e => ({
    text: e,
    normalized: ej(e)
  })));
  return r?.text || ""
}

function ej(e) {
  return String(e ?? "").normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(
      /[\u201C\u201D]/g, '"').replace(/[(),]/g, " ").replace(/\s*-\s*/g, " ").replace(/\s+/g, " ")
    .trim().toLowerCase()
}

function eD(e, t) {
  if (!t.length) return null;
  let r = new u.default(t, {
      keys: ["normalized", "text"],
      includeScore: !0,
      ignoreLocation: !0,
      threshold: .35,
      minMatchCharLength: 2
    }),
    n = ej(e),
    [o] = r.search(n);
  return o?.item || null
}

function eP(e) {
  let t = e.toLowerCase();
  return t.includes("school") || t.includes("university")
}

function e_(e, t) {
  return e.split(t).map(e => e.trim()).filter(Boolean)
}

function eL(e) {
  return e.split(/\s+-\s+|-/).map(e => e.trim()).filter(Boolean)
}
async function eR(e, t) {
  if (!e) return;
  e.focus(), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  })), await (0, v.delay)(50);
  let r = Object.getPrototypeOf(e),
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : e.value = t, e.dispatchEvent(new Event("input", {
    bubbles: !0
  })), e.dispatchEvent(new KeyboardEvent("keydown", {
    bubbles: !0
  })), e.dispatchEvent(new KeyboardEvent("keyup", {
    bubbles: !0
  })), await (0, v.delay)(300)
}
async function eO(e = document) {
  let t = './/button[@title="Delete file"]',
    r = (0, y.getFirstOrderedNodeSafe)(t, e);
  return !!r && (r.click(), await (0, v.delay)(200), !0)
}

