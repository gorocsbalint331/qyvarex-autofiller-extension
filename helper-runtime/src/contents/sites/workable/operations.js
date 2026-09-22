/**
 * Parcel module id: bQ04a
 * Resolved path: src/contents/sites/workable/operations.js
 * Dependencies:
 *   ../../methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/workable/phone-country-code -> 5lsEB  =>  src/contents/sites/workable/phone-country-code.js
 *   ~contents/sites/workable/rules -> 7FMtF  =>  src/contents/sites/workable/rules.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillWorkablePhoneCountryCode", () => C), n.export(r,
    "resetWorkableCheckboxMainWorldInjectionForTests", () => k), n.export(r, "preFillForm", () =>
  T), n.export(r, "uploadResume", () => F), n.export(r, "cleanSalaryValue", () => I), n.export(r,
    "fillCountry", () => j), n.export(r, "preclickAddButtons", () => P), n.export(r,
    "fillReactInputField", () => L), n.export(r, "isWorkableAgreementCheckbox", () => M), n.export(
    r, "fillWorkableCheckboxField", () => eo), n.export(r, "fillCustomSelectField", () => ea), n
  .export(r, "saveEducation", () => el), n.export(r, "saveExperience", () => es), n.export(r,
    "addEducation", () => eu), n.export(r, "addExperience", () => ec), n.export(r,
    "fillDateInDetailsSection", () => ed), n.export(r, "blurPage", () => ef), n.export(r,
    "submitObserver", () => ep);
var o = e("../../methods/choice-match"),
  i = e("dayjs"),
  a = n.interopDefault(i),
  l = e("@plasmohq/messaging"),
  s = e("~contents/methods/answer"),
  u = e("~contents/methods/dom"),
  c = e("~contents/sites/workable/rules"),
  d = e("~contents/sites/workable/phone-country-code"),
  f = e("~core/enums"),
  p = e("~core/xpath"),
  m = e("~utils/delay"),
  h = e("~utils/string");
let g = "__jr_workable_checkbox_request",
  b = "__jr_workable_checkbox_response",
  y = 1e3,
  v = 1500,
  w = 750,
  S = 50,
  E = !1,
  x = !1;
async function C(e, t) {
  let r = (0, d.getWorkablePhoneCountryContainer)(e.$input);
  if (!r || !t) return !1;
  let n = Array.from(r.querySelectorAll(
      "li.iti__country[role='option'][data-country-code][data-dial-code], li.iti__country[data-country-code][data-dial-code]"
      )),
    o = n.map(d.parseWorkablePhoneCountryOption),
    i = (0, d.findWorkablePhoneCountryOption)(t, o);
  if (!i) return !1;
  let a = (0, d.formatWorkablePhoneCountryOption)(i);
  if ((0, d.readWorkableSelectedPhoneCountry)(r) === a) return !0;
  let l = n[o.indexOf(i)],
    s = r.querySelector("button.iti__selected-country, .iti__selected-flag[role='combobox']");
  if (!l || !s) return !1;
  let u = e => {
    for (let t of ["mousedown", "mouseup", "click"]) e.dispatchEvent(new MouseEvent(t, {
      bubbles: !0,
      cancelable: !0,
      view: window
    }))
  };
  s.focus(), u(s), await (0, m.delay)(200), l.scrollIntoView({
    block: "center"
  }), await (0, m.delay)(100), u(l);
  let c = Math.ceil(w / S);
  for (let e = 0; e <= c; e++) {
    if ((0, d.readWorkableSelectedPhoneCountry)(r) === a) return !0;
    e < c && await (0, m.delay)(S)
  }
  return !1
}

function A(e) {
  let t = (0, p.getFirstOrderedNode)(`//*[@data-ui='${e}']`);
  return t ? t.querySelector('[data-ui="add-section"]') : null
}

function k() {
  E = !1, x = !1
}
async function T() {
  if (document.querySelector('[data-ui="cookie-consent-accept"]') && (document.querySelector(
      '[data-ui="cookie-consent-accept"]')?.click(), await (0, m.delay)(50)), document
    .querySelector('[data-ui="application-form-tab"]'))
    for (document.querySelector('[data-ui="application-form-tab"]')?.click(); !document
      .querySelector('[data-ui="application-form"]');) await (0, m.delay)(100)
}
async function F(e, t, r) {
  let n = (0, p.getFirstOrderedNode)('//input[@type="file" and @data-ui="resume"]') || document
    .querySelector('input[type="file"][data-ui="resume"]');
  n && await (0, u.uploadFiles)(n, await (0, s.fetchPdfAsBlob)(e), t, r, "Resume/CV")
}

function I(e) {
  if (null == e || "" === e) return null;
  let t = String(e).trim();
  if ("" === t) return null;
  t = (t = t.replace(/[$,\s]/g, "")).replace(/\b(USD|usd|dollars?)\b/gi, "");
  let r = t.match(/(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/);
  if (r) {
    let e = parseFloat(r[1]),
      t = parseFloat(r[2]);
    if (!isNaN(e) && !isNaN(t)) return String(Math.max(e, t))
  }
  let n = t.match(/\[([\d\s,.-]+)\]/);
  if (n) {
    let e = n[1],
      t = e.match(/(\d+(?:\.\d+)?)/g);
    if (t && t.length >= 2) {
      let e = t.map(e => parseFloat(e)).filter(e => !isNaN(e));
      if (e.length >= 2) return String(Math.max(...e))
    } else if (t && 1 === t.length) return t[0]
  }
  let o = t.match(/(\d+(?:\.\d+)?)\s*~\s*(\d+(?:\.\d+)?)/);
  if (o) {
    let e = parseFloat(o[1]),
      t = parseFloat(o[2]);
    if (!isNaN(e) && !isNaN(t)) return String(Math.max(e, t))
  }
  let i = t.match(/(\d+(?:\.\d+)?)\s+to\s+(\d+(?:\.\d+)?)/i);
  if (i) {
    let e = parseFloat(i[1]),
      t = parseFloat(i[2]);
    if (!isNaN(e) && !isNaN(t)) return String(Math.max(e, t))
  }
  let a = t.match(/(\d+(?:\.\d+)?)(?:\s*[,\s]\s*(\d+(?:\.\d+)?))+/);
  if (a) {
    let e = t.match(/(\d+(?:\.\d+)?)/g);
    if (e && e.length >= 2) {
      let t = e.map(e => parseFloat(e)).filter(e => !isNaN(e));
      if (t.length >= 2) return String(Math.max(...t))
    }
  }
  let l = t.match(/(\d+(?:\.\d+)?)/);
  if (l) {
    let e = parseFloat(l[1]);
    if (!isNaN(e)) return String(Math.floor(e))
  }
  return null
}

function j() {
  let e = (0, p.getFirstOrderedNode)(
    "//strong[contains(text(), 'Country')]/ancestor::div[1]/div[1]//div//input");
  if (e) {
    e.click();
    let t = (0, p.getFirstOrderedNode)(
      "//strong[contains(text(), 'Country')]/ancestor::div[1]/div[1]//dialog//ul//span[contains(text(), 'United States')]"
      );
    t ? t.click() : D(e, "United States")
  }
}

function D(e, t) {
  let r = e.value;
  e.value = t;
  let n = new InputEvent("input", {
      bubbles: !0
    }),
    o = e?._valueTracker;
  o && o.setValue(r), e.dispatchEvent(n)
}
async function P() {
  let e = (0, p.getFirstOrderedNode)(
    './/a[@aria-label="Clear Profile" and (not(@aria-disabled) or @aria-disabled != "true")]');
  e && e.click();
  let t = A("education");
  t && (t.click(), await (0, m.delay)(100));
  let r = A("experience");
  r && (r.click(), await (0, m.delay)(100))
}
async function _(e, t) {
  e.focus(), D(e, ""), await (0, m.delay)(30);
  let r = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value"),
    n = r?.set;
  for (let {
      char: r,
      valueSoFar: o
    }
    of(0, c.getTypingSteps)(t)) {
    e.dispatchEvent(new KeyboardEvent("keydown", {
      key: r,
      bubbles: !0,
      cancelable: !0
    })), e.dispatchEvent(new InputEvent("beforeinput", {
      data: r,
      inputType: "insertText",
      bubbles: !0,
      cancelable: !0
    })), n ? n.call(e, o) : e.value = o;
    let t = e._valueTracker;
    t && t.setValue(o.slice(0, -1)), e.dispatchEvent(new InputEvent("input", {
      data: r,
      inputType: "insertText",
      bubbles: !0
    })), e.dispatchEvent(new KeyboardEvent("keyup", {
      key: r,
      bubbles: !0,
      cancelable: !0
    })), await (0, m.delay)(30)
  }
  e.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))
}
async function L(e, t, r, n) {
  if (!e) return;
  let o = r || "",
    i = t,
    a = !1;
  if ((0, c.isWorkablePhoneInput)(e)) i = (0, d.formatWorkablePhoneValue)(t, n);
  else if ((0, c.getWorkableSalaryFieldType)(o) === f.FIELD_TYPE.NUMBER) {
    let e = I(t);
    if (null === e) return;
    i = e, a = !0
  }
  ei(e), await (0, m.delay)(100), a ? await _(e, i) : D(e, i), p.getFirstOrderedNodeSafe(
    '//*[@data-ui="education"]')?.contains(e) && (e.attributes.getNamedItem("name")?.value ===
    "end_date" || e.attributes.getNamedItem("name")?.value === "start_date") && await (0, m
    .delay)(300), p.getFirstOrderedNodeSafe('//*[@data-ui="experience"]')?.contains(e) && (e
    .attributes.getNamedItem("name")?.value === "end_date" || e.attributes.getNamedItem("name")
    ?.value === "start_date") && await (0, m.delay)(300), document.dispatchEvent(new MouseEvent(
    "mousedown", {
      bubbles: !0,
      cancelable: !0,
      view: window
    }))
}

function R(e) {
  return String(e ?? "").toLowerCase().replace(/\*/g, "").replace(/\s+/g, " ").trim()
}

function O(e) {
  return ["true", "yes", "y", "1", "checked", "accept", "accepted"].includes(R(e))
}

function M(e) {
  let t = [e.label, ...e.options || []].map(R).join(" ");
  return ["agree", "agreement", "accept", "acknowledge", "authorize", "certify", "consent",
    "privacy", "terms", "notice", "read understand"
  ].some(e => t.includes(e))
}

function N(e, t) {
  if (M(e) || t.some(O)) return !0;
  let r = [e.label, ...e.options || []].map(R).filter(Boolean);
  return t.map(R).filter(Boolean).some(e => r.some(t => (0, o.isExactChoiceMatch)(t, e)))
}

function $(e) {
  if (!e) return null;
  for (let t of ["aria-checked", "data-checked"]) {
    let r = e.getAttribute(t);
    if ("true" === r) return !0;
    if ("false" === r) return !1
  }
  return null
}

function B(e) {
  if (!e.id || "undefined" == typeof document) return null;
  let t = e.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  try {
    return document.querySelector(`label[for="${t}"]`)
  } catch {
    return null
  }
}

function q(e) {
  return !0 === e.checked
}

function U(e) {
  return $(e.closest("[role='radio'], [data-ui='option']"))
}

function H(e, t) {
  return t.length > 1 && e.$label?.getAttribute("role") === "radiogroup"
}

function Y(e, t) {
  let r = t.map(R);
  return (e.options || []).findIndex(e => {
    let t = R(e);
    return r.some(e => t === e || "true" === e && "yes" === t || "false" === e && "no" === t)
  })
}
async function z(e, t, r) {
  let n = Y(e, t),
    o = r[n];
  if (!o) return !1;
  await en(o, e);
  let i = U(o);
  return !!o.checked && !1 !== i && r.every((e, t) => {
    if (t === n) return !0;
    let r = U(e);
    return !e.checked && !0 !== r
  })
}

function V(e, t) {
  t && !e.includes(t) && e.push(t)
}

function W(e) {
  return e ? R(e.innerText || e.textContent || "") : ""
}

function G(e) {
  let t = [e.label, ...e.options || []].map(R).filter(e => e && "*" !== e && e.length >= 4);
  return M(e) && t.push("privacy notice", "consent to the processing", "processing of my data",
    "part of this application"), Array.from(new Set(t))
}

function K(e, t) {
  let r = W(e);
  return !!r && t.some(e => e.length < 8 ? r === e : r.includes(e) || e.includes(r) && r.length >=
    16)
}

function X(e) {
  if ("undefined" == typeof document) return [];
  let t = G(e);
  return t.length && "function" == typeof document.querySelectorAll ? Array.from(document
    .querySelectorAll("label, [role='checkbox'], [data-ui='option'], button, span, div")).filter(
    e => K(e, t)).sort((e, t) => W(e).length - W(t).length) : []
}

function J(e, t) {
  let r = [],
    n = e.closest("[data-ui='option']");
  for (let o of (V(r, e.closest("label")), V(r, B(e)), V(r, e.closest("[role='checkbox']")), V(r,
      n), V(r, t.$label), X(t))) V(r, o);
  return V(r, e), r
}

function Q(e) {
  return "function" == typeof MouseEvent ? new MouseEvent(e, {
    bubbles: !0,
    cancelable: !0,
    view: "undefined" != typeof window ? window : void 0
  }) : new Event(e, {
    bubbles: !0,
    cancelable: !0
  })
}

function Z(e) {
  e.dispatchEvent(new Event("input", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))
}
async function ee() {
  if (E) return !0;
  if (x) return !1;
  try {
    let e = await new Promise((e, t) => {
      let r = setTimeout(() => {
        t(Error("injectWorkableCheckbox timed out"))
      }, y);
      Promise.resolve((0, l.sendToBackground)({
        name: "injectWorkableCheckbox"
      })).then(t => {
        clearTimeout(r), e(t ?? {})
      }, e => {
        clearTimeout(r), t(e)
      })
    });
    if (e?.success !== !0) throw Error("injectWorkableCheckbox did not return success=true");
    return E = !0, !0
  } catch (e) {
    return x = !0, console.warn("[WorkableCheckbox] failed to inject main world script:", e), !1
  }
}
async function et(e, t) {
  if ("undefined" == typeof document || "function" != typeof document.addEventListener ||
    "function" != typeof document.dispatchEvent) return !1;
  let r = await ee();
  if (!r) return !1;
  let n = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
    o = `__jr_workable_checkbox_${n}`;
  e.setAttribute("data-jr-workable-checkbox-id", o);
  let i = `[data-jr-workable-checkbox-id="${o}"]`;
  return new Promise(r => {
    let o = setTimeout(() => {
      document.removeEventListener(b, a), r(!1)
    }, v);

    function a(t) {
      let i = t.detail;
      i?.requestId === n && (document.removeEventListener(b, a), clearTimeout(o), r(i
        ?.success === !0 && q(e)))
    }
    document.addEventListener(b, a), document.dispatchEvent(new CustomEvent(g, {
      detail: {
        requestId: n,
        selector: i,
        label: t.label,
        options: t.options || []
      }
    }))
  })
}
async function er(e, t) {
  for (let r of J(e, t))
    if (r.scrollIntoView?.({
        block: "center",
        inline: "nearest"
      }), r.focus?.(), r.dispatchEvent(Q("mousedown")), r.dispatchEvent(Q("mouseup")),
      "function" == typeof r.click ? r.click() : r.dispatchEvent(Q("click")), Z(e), await (0, m
        .delay)(120), q(e)) return !0;
  return q(e)
}
async function en(e, t) {
  if (q(e) || await et(e, t)) return !0;
  for (let r of J(e, t))
    if (r.scrollIntoView?.({
        block: "center",
        inline: "nearest"
      }), r.focus?.(), r.dispatchEvent(Q("mousedown")), r.dispatchEvent(Q("mouseup")),
      "function" == typeof r.click ? r.click() : r.dispatchEvent(Q("click")), Z(e), await (0, m
        .delay)(50), q(e) && (await (0, m.delay)(150), q(e))) return !0;
  return await er(e, t)
}
async function eo(e, t) {
  let r = Array.isArray(t) ? t : [t],
    n = Array.from(e.$checkboxs || []);
  if (!n.length) return !1;
  let o = 1 === n.length && n[0]?.type === "checkbox";
  if (o) {
    let t = n[0];
    return N(e, r) ? await en(t, e) : !q(t)
  }
  if (H(e, n)) return await z(e, r, n);
  let i = await (0, u.fillCheckBoxesField)(e, r);
  return !1 !== i && (await (0, m.delay)(50), n.some(e => q(e)))
}

function ei(e) {
  let t = new KeyboardEvent("keydown", {
    key: "Backspace",
    code: "Backspace",
    keyCode: 8,
    which: 8,
    bubbles: !0,
    cancelable: !0
  });
  e?.dispatchEvent(t)
}
async function ea(e, t) {
  try {
    let r = t[0],
      n = e.parentElement;
    if (!n) throw Error("No wrapper element found");
    let o = n.querySelector("label");
    if (!o) throw Error("No label element found");
    o.click(), await (0, m.delay)(400);
    let i = n.querySelector("dialog");
    if (!i) throw Error("No dialog element found");
    let a = i.querySelector('input[type="search"]');
    if (a) {
      D(a, r), await (0, m.delay)(200);
      let e = i.querySelector("ul>li");
      if (!e) return;
      e.click(), await (0, m.delay)(100)
    } else {
      let e = Array.from(i.querySelectorAll("ul>li"));
      if (!e?.length) throw Error("No options found");
      for (let t of e) {
        let e = t.innerText.trim();
        if (e && e.toLowerCase() === r.toLowerCase()) {
          t.click(), await (0, m.delay)(100);
          break
        }
      }
    }
  } catch {} finally {
    document.dispatchEvent(new MouseEvent("mouseup", {
      bubbles: !0,
      cancelable: !0,
      view: window
    }))
  }
}
async function el() {
  let e = (0, p.getFirstOrderedNode)(
    '//div[@data-ui="education"]//button[@data-ui="save-section"]');
  e && (e.click(), await (0, m.delay)(500))
}
async function es() {
  let e = (0, p.getFirstOrderedNode)(
    '//div[@data-ui="experience"]//button[@data-ui="save-section"]');
  e && (e.click(), await (0, m.delay)(500))
}

function eu() {
  let e = A("education");
  e && e.click()
}

function ec() {
  let e = A("experience");
  e && e.click()
}
async function ed() {
  await L((0, p.getFirstOrderedNode)(
      '//section[@data-ui="section"]//input[@placeholder="YYYY/MM/DD"]'), (0, a.default)()
    .format("YYYY/MM/DD"))
}

function ef() {
  let e = (0, p.getFirstOrderedNode)('//*[@id="mainContent"] | //main');
  if (e)
    for (let t = 0; t < 3; t++)(0, u.triggerEvents)(e, ["click"]), (0, u.triggerEvents)(e, [
      "mousedown"
    ]), (0, u.triggerEvents)(e, ["mouseup"])
}

function ep(e) {
  if (e) {
    e.parentNode;
    let t = new MutationObserver(e => {
      for (let r of e)
        for (let e of r.addedNodes)(e?.getAttribute?.("data-ui") === "successful-submit" || e
          ?.querySelectorAll("[data-ui='successful-submit']").length > 0) && (t.disconnect(),
          window.top?.postMessage(h.cleanObject({
            type: f.MESSAGE_EVENTS.agentSubmitClicked
          }), {
            targetOrigin: "*"
          }))
    });
    t.observe(document.getElementById("app"), {
      childList: !0,
      subtree: !0
    })
  }
}

