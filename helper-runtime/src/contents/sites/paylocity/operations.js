/**
 * Parcel module id: bmU1E
 * Resolved path: src/contents/sites/paylocity/operations.js
 * Dependencies:
 *   ./date -> lockZ  =>  src/contents/sites/paylocity/date.js
 *   ./rules -> 5BvUQ  =>  src/contents/sites/paylocity/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "dispatchClickSequence", () => b), n.export(r,
    "dispatchMousedown", () => y), n.export(r, "PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS", () =>
    w), n.export(r, "isPaylocityPersonalStateControlId", () => C), n.export(r,
    "isPaylocityPersonalAddressInput", () => A), n.export(r, "getPaylocityPersonalAddressInputMode",
    () => k), n.export(r, "fillPaylocityPersonalStateField", () => M), n.export(r,
    "getPaylocityMissingPersonalAddressRules", () => N), n.export(r,
    "reconcilePaylocityPersonalAddress", () => $), n.export(r, "isPaylocityPersonalAddressRule",
  () => B), n.export(r, "orderPaylocityPersonalAddressRules", () => q), n.export(r,
    "createPaylocitySingleFlight", () => U), n.export(r, "waitForPaylocityPersonalAddressQuiet",
  () => H), n.export(r, "fillPaylocityPersonalAddressField", () => X), n.export(r,
    "hasPaylocityCoverLetterSlot", () => eo), n.export(r, "hasPaylocityCoverLetterUploadCapability",
    () => ei), n.export(r, "hasUploadedPaylocityCoverLetter", () => ea), n.export(r,
    "getPaylocityCoverLetterStatus", () => el), n.export(r, "normalizePaylocityCountry", () => eu),
  n.export(r, "fillCountry", () => eD), n.export(r, "fillListboxSelectButtonField", () => eR), n
  .export(r, "fillPaylocityEducationDegreeObtained", () => eO), n.export(r,
    "fillPaylocityEducationGraduationDate", () => eM), n.export(r, "fillSearchBoxInputField", () =>
    eN), n.export(r, "fillListboxButtonField", () => e$), n.export(r, "uploadResume", () => eB), n
  .export(r, "uploadCoverLetter", () => eq), n.export(r, "fillSkills", () => eQ), n.export(r,
    "preclickAddButtons", () => eZ), n.export(r, "expandFormFromProfile", () => e7), n.export(r,
    "expandForm", () => te), n.export(r, "blurPage", () => tr), n.export(r,
    "fillAvailableToStartField", () => to), n.export(r, "fillPaylocityDateField", () => ti), n
  .export(r, "isLoadingCleared", () => ta), n.export(r, "waitPageClean", () => tl), n.export(r,
    "submitHandler", () => ts);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("~contents/crawler/utils/input"),
  l = e("~contents/methods/answer"),
  s = e("~contents/methods/dom"),
  u = e("~contents/methods/observer"),
  c = e("~contents/sites/autofill-answer-pair-tracking"),
  d = e("~core/xpath"),
  f = e("~store/url"),
  p = e("~utils/delay"),
  m = e("./rules"),
  h = e("~store/profile"),
  g = e("./date");
async function b(e, t = 30, r = 100) {
  e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, p.delay)(t), e.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, p.delay)(t), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, p.delay)(r)
}
async function y(e, t = 100) {
  e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, p.delay)(t)
}
let v = async (e, t, r = 10, n = 100) => {
  let o = e.querySelector(t),
    i = 0;
  for (; !o && i < r;) await (0, p.delay)(n), o = e.querySelector(t), i++;
  return o
}, w = 100, S = ["public-site-address-address-1", "public-site-address-address-2",
  "public-site-address-city", "public-site-address-county",
  "public-site-address-us-state-select-wrapper", "public-site-address-us-state",
  "public-site-address-zip"
], E = new Set(["public-site-address-address-1", "public-site-address-address-2",
  "public-site-address-city", "public-site-address-county", "public-site-address-zip"
]), x = new Set(["public-site-address-us-state-select-wrapper", "public-site-address-us-state"]);

function C(e) {
  return x.has(e)
}

function A(e) {
  return !!e && E.has(e.id)
}

function k(e) {
  return "list" === e.getAttribute("aria-autocomplete") ? "list" : "text"
}

function T(e) {
  let t = e?.$input;
  return t && (t.id || t.querySelector("input")?.id) || ""
}
let F = {
  "public-site-address-address-1": ["Address Line 1", "Address 1"],
  "public-site-address-address-2": ["Address Line 2", "Address 2"],
  "public-site-address-city": ["City", "Locality"],
  "public-site-address-county": ["County"],
  "public-site-address-us-state-select-wrapper": ["State", "Administrative Area", "Province"],
  "public-site-address-us-state": ["State", "Administrative Area", "Province"],
  "public-site-address-zip": ["Zip Code", "Zip", "Postal Code", "Postal"]
};

function I(e, t) {
  let r = T(e),
    n = [e.label, ...F[r] ?? []];
  for (let e of n) {
    let r = Object.keys(t).find(t => (0, l.isMatched)(e, t));
    if (!r) continue;
    let n = t[r];
    if (Array.isArray(n)) {
      let e = n.find(e => String(e ?? "").trim());
      if (void 0 !== e) return e;
      continue
    }
    if (String(n ?? "").trim()) return n
  }
}

function j(e) {
  let t = T(e),
    r = t && "undefined" != typeof document ? document.getElementById(t) : null;
  return r ? {
    ...e,
    $input: r
  } : e.$input && !1 !== e.$input.isConnected ? e : null
}

function D(e) {
  let t = e.$input;
  return t ? t instanceof HTMLInputElement ? t.value.trim() : eL(t).value.trim() : ""
}

function P(e, t) {
  let r = t.trim();
  if (!r) return !0;
  let n = T(e);
  return C(n) && /^(select|choose|please select|--)/i.test(r)
}

function _(e) {
  if ("undefined" == typeof document) return null;
  let t = document.getElementById(e);
  return t ? e.endsWith("-select-wrapper") ? t : t.closest('[id*="-select-wrapper"]') || t : null
}

function L(e) {
  if ("undefined" == typeof document) return null;
  let t = e.querySelector("input, button"),
    r = e.getAttribute("aria-controls") || e.getAttribute("aria-owns") || t?.getAttribute(
      "aria-controls") || t?.getAttribute("aria-owns");
  return r ? document.getElementById(r) : null
}

function R(e) {
  let t = Array.from(e.querySelectorAll("div[title]"));
  return t.length > 0 ? t : Array.from(e.querySelectorAll(
    "li[role='option'], li, div[role='option']"))
}
async function O(e) {
  if (e()) return !0;
  let t = document.querySelector('[data-automation-id="public-site-address"]');
  if (!t) return !1;
  let r = Date.now() + 1500;
  for (; Date.now() < r;)
    if (await H(t, {
        quietMs: 100,
        timeoutMs: Math.min(500, r - Date.now())
      }), e()) return !0;
  return !1
}
async function M(e, t, r = {}) {
  if (!C(e)) return !1;
  let n = t.map(e => String(e).trim()).filter(Boolean);
  if (0 === n.length) return !1;
  let o = r.findLiveControl ?? _,
    i = r.getOwnedListbox ?? L,
    a = r.getOptions ?? R,
    l = r.readCommittedValue ?? (e => eL(e).value),
    s = r.waitForReady ?? O,
    u = r.waitForCommitted ?? O,
    c = r.openControl ?? (async e => {
      let t = e.querySelector("input, button") || e;
      await b(t, 50, 0)
    }),
    d = r.clickOption ?? (async e => {
      e.scrollIntoView({
        block: "center"
      }), await b(e, 50, 0)
    }),
    f = o(e);
  if (!f) return !1;
  if (e_(l(f), n)) return !0;
  await c(f);
  let p = () => {
      let t = o(e);
      if (!t) return null;
      let r = i(t);
      if (!r) return null;
      let l = a(r).filter(e => e_(e.getAttribute?.("title")?.trim() || e.textContent?.trim() ||
        "", n));
      return 1 === l.length ? l[0] : null
    },
    m = await s(() => !!p()),
    h = m ? p() : null;
  if (!h) return console.warn("[Paylocity][PersonalAddress][State] fill failed", {
    controlId: e,
    reason: "owned_option_not_ready"
  }), !1;
  await d(h);
  let g = await u(() => {
    let t = o(e);
    return !!(t && e_(l(t), n))
  });
  return console.info("[Paylocity][PersonalAddress][State] committed readback", {
    controlId: e,
    committed: g
  }), g
}

function N(e, t, r = {}) {
  let n = r.getAnswerValue ?? I,
    o = r.readLiveValue ?? D,
    i = r.getLiveRule ?? j;
  return q(e.filter(B)).filter(e => {
    let r = i(e);
    if (!r) return !1;
    let a = n(r, t);
    return "" !== String(a ?? "").trim() && P(r, o(r))
  })
}
async function $(e) {
  let t = e.getLiveRule ?? j,
    r = e.readLiveValue ?? D,
    n = {
      getAnswerValue: e.getAnswerValue,
      getLiveRule: t,
      readLiveValue: r
    },
    o = [],
    i = [],
    a = async n => {
      let a = t(n);
      if (!a) return !1;
      let l = T(a),
        s = e.getAnswerValue ?? I,
        u = s(a, e.record);
      o.push(l), await e.fillRule(a, u);
      let c = t(n),
        d = !!(c && !P(c, r(c)));
      return d && i.push(l), d
    }, l = N(e.rules, e.record, n).find(e => "public-site-address-address-1" === T(e));
  if (l) {
    let r = t(l),
      n = !!r?.$input && "list" === k(r.$input),
      o = await a(l);
    o && n && await e.waitForQuiet()
  }
  let s = new Set(o);
  for (let t = 0; t < e.rules.length; t++) {
    let t = N(e.rules, e.record, n).find(e => {
      let t = T(e);
      return "public-site-address-address-1" !== t && !s.has(t)
    });
    if (!t) break;
    let r = T(t);
    s.add(r), await a(t)
  }
  let u = N(e.rules, e.record, n).map(T);
  return {
    attemptedControlIds: o,
    filledControlIds: i,
    missingControlIds: u
  }
}

function B(e) {
  let t = T(e);
  return S.includes(t)
}

function q(e) {
  return e.map((e, t) => ({
    rule: e,
    originalIndex: t
  })).sort((e, t) => {
    let r = S.indexOf(T(e.rule)),
      n = S.indexOf(T(t.rule)),
      o = -1 === r ? Number.MAX_SAFE_INTEGER : r,
      i = -1 === n ? Number.MAX_SAFE_INTEGER : n;
    return o - i || e.originalIndex - t.originalIndex
  }).map(({
    rule: e
  }) => e)
}

function U(e) {
  let t = null;
  return (...r) => {
    if (t) return console.info("[Paylocity] coalesced duplicate Autofill start"), t;
    let n = e(...r);
    t = n;
    let o = () => {
      t === n && (t = null)
    };
    return n.then(o, o), n
  }
}

function H(e, t = {}) {
  let r = t.quietMs ?? 150,
    n = t.timeoutMs ?? 1500,
    o = t.observe ?? ((e, t) => {
      if ("function" != typeof MutationObserver) return () => {};
      let r = new MutationObserver(t);
      return r.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      }), () => r.disconnect()
    });
  return new Promise(t => {
    let i, a, l = !1,
      s = () => {},
      u = e => {
        l || (l = !0, clearTimeout(i), clearTimeout(a), s(), t(e))
      },
      c = () => {
        clearTimeout(i), i = setTimeout(() => u(!0), r)
      };
    s = o(e, c), a = setTimeout(() => u(!1), n), c()
  })
}

function Y(e) {
  return e.normalize("NFKD").replace(/\p{M}+/gu, "").replace(/[^\p{L}\p{N}]+/gu, " ").trim()
    .replace(/\s+/g, " ").toLowerCase()
}

function z(e, t) {
  let r = Y(G(e)),
    n = Y(t);
  return r === n || r.startsWith(`${n} `)
}

function V(e) {
  let t = document.getElementById(e);
  return t instanceof HTMLInputElement && !1 !== t.isConnected ? t : null
}

function W(e) {
  let t = e.getAttribute("aria-controls"),
    r = t ? document.getElementById(t) : null;
  return r ? Array.from(r.querySelectorAll('[role="option"], li, .pcty-input-select__option')) : []
}

function G(e) {
  return e.getAttribute("title")?.trim() || e.textContent?.trim() || ""
}

function K(e, t) {
  e.focus();
  let r = Object.getPrototypeOf(e),
    n = Object.getOwnPropertyDescriptor(r, "value")?.set,
    o = e.value;
  n ? n.call(e, t) : e.value = t;
  let i = e._valueTracker;
  i?.setValue?.(o), e.dispatchEvent(new Event("input", {
    bubbles: !0,
    cancelable: !0
  }))
}
async function X(e, t, r = {}) {
  if (!A(e) || !t.trim()) return !1;
  let n = r.findLiveInput ?? V,
    o = r.wait ?? p.delay,
    i = t.trim(),
    l = n(e.id);
  if (!l) return !1;
  let s = k(l);
  if (console.info("[Paylocity][PersonalAddress] fill start", {
      controlId: l.id,
      mode: s,
      valueLength: i.length
    }), "text" === s) {
    let t = r.writeText ?? a.fillDefaultInputField;
    await t(l, i), await o(w);
    let u = n(e.id),
      c = u?.value.trim() === i;
    return console.info("[Paylocity][PersonalAddress] fill readback", {
      controlId: e.id,
      mode: s,
      committed: c
    }), c
  }
  let u = r.writeAutocompleteQuery ?? (async (e, t) => {
    K(e, t)
  });
  await u(l, i), await o(w);
  let c = n(e.id);
  if (!c || "list" !== k(c)) return console.warn("[Paylocity][PersonalAddress] fill failed", {
    controlId: e.id,
    mode: s,
    reason: "autocomplete_input_replaced"
  }), !1;
  let d = r.getAutocompleteOptions ?? W,
    f = d(c).filter(e => z(e, i));
  if (1 !== f.length) return console.warn("[Paylocity][PersonalAddress] fill failed", {
    controlId: e.id,
    mode: s,
    reason: "no_unique_exact_option",
    optionCount: f.length
  }), !1;
  let m = r.clickAutocompleteOption ?? (async e => {
    await b(e, 0, 0)
  });
  await m(f[0]), await o(w);
  let h = n(e.id),
    g = h?.value.trim() === i;
  return console.info("[Paylocity][PersonalAddress] fill readback", {
    controlId: e.id,
    mode: s,
    committed: g
  }), g
}

function J(e) {
  let t = Array.from(document.querySelectorAll("label")),
    r = t.find(t => e(t.textContent?.trim().toLowerCase() || ""));
  return r?.closest(".section-wrapper")
}

function Q() {
  let e = J(e => e.includes("cover letter")) || document.getElementById("btn-coverLetter")?.closest(
      ".section-wrapper"),
    t = e?.querySelector('input[type="file"]#btn-coverLetter') || document.querySelector(
      'input[type="file"]#btn-coverLetter'),
    r = e?.querySelector('button[data-automation-id="btn-coverLetter"]') || document.querySelector(
      'button[data-automation-id="btn-coverLetter"]'),
    n = e?.querySelector("tbody tr td span.color-blue") || null,
    o = (e?.querySelector("a.button.secondary.icon, button.button.secondary.icon") ?? e
      ?.querySelector('[aria-label="Remove File"]')?.closest("a,button")) || null;
  return {
    section: e,
    input: t,
    triggerButton: r,
    uploadedFileName: n,
    removeButton: o
  }
}

function Z() {
  let e = J(e => e.includes("resume") || e.includes("curriculum vitae") || e.includes("cv")),
    t = er(e) && e?.querySelector('input[type="file"]') || null;
  if (t) return t;
  let r = document.getElementById("forceUploadResumeModal");
  if (er(r)) {
    let e = r.querySelector(
      'input[type="file"]#btn-forceResume, input[type="file"][id*="resume" i]');
    if (e) return e
  }
  let n = Array.from(document.querySelectorAll(
    'input[type="file"]#btn-resume, input[type="file"][id*="resume" i]')).find(ee);
  return n || Array.from(document.querySelectorAll('input[type="file"]:not(#btn-coverLetter)'))
    .find(e => ee(e) && et(e)) || null
}

function ee(e) {
  let t = e.closest(".section-wrapper, #forceUploadResumeModal, .modal");
  return t ? er(t) : en(e)
}

function et(e) {
  let t = e.closest(".section-wrapper, #forceUploadResumeModal, .modal"),
    r = [e.id, e.name, e.getAttribute("data-automation-id"), t?.textContent].filter(Boolean).join(
      " ").toLowerCase();
  return r.includes("resume") || r.includes("curriculum vitae") || /\bcv\b/.test(r)
}

function er(e) {
  return en(e)
}

function en(e) {
  if (!e || e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden")) return !1;
  let t = e.ownerDocument?.defaultView || ("undefined" != typeof window ? window : null),
    r = t?.getComputedStyle?.(e);
  return (!r || "none" !== r.display && "hidden" !== r.visibility && "0" !== r.opacity) && (
    "function" != typeof e.getClientRects || e.getClientRects().length > 0)
}

function eo() {
  let {
    section: e,
    input: t,
    triggerButton: r
  } = Q();
  return !!e && !!t && !!r
}

function ei() {
  let e = Q();
  if (!e.section || !e.input || !e.triggerButton) return !1;
  let t = !!e.uploadedFileName?.textContent?.trim();
  return !t || !!e.removeButton
}

function ea() {
  let {
    uploadedFileName: e,
    removeButton: t
  } = Q();
  return !!e?.textContent?.trim() && !!t
}
async function el() {
  return await tl(), await (0, u.waitForCondition)(() => ei(), {
    timeout: 5e3,
    interval: 100,
    observeTarget: document.body
  }), ei() ? "required" : ""
}
async function es() {
  let {
    section: e,
    uploadedFileName: t,
    removeButton: r
  } = Q();
  return !t?.textContent?.trim() || !!r && (await b(r), await (0, u.waitForCondition)(() => {
    let e = Q();
    return !e.uploadedFileName?.textContent?.trim() && !e.triggerButton?.disabled
  }, {
    timeout: 4e3,
    interval: 100,
    observeTarget: e || document.body
  }))
}

function eu(e) {
  if ("string" == typeof e) {
    let t = e.trim(),
      r = t.toLowerCase();
    return "ca" === r || "canada" === r ? "Canada" : "us" === r || "usa" === r ||
      "united states" === r || "united states of america" === r ? "United States" : "uk" === r ||
      "gb" === r || "gbr" === r || "great britain" === r || "united kingdom" === r ?
      "United Kingdom" : t
  }
  return ""
}

function ec(e) {
  let t = eu(e);
  return "Canada" === t ? ["Canada", "CANADA"] : "United States" === t ? ["United States",
    "United States of America", "USA", "UNITED STATES"
  ] : t ? [t] : []
}

function ed() {
  let e = document.getElementById("public-site-address-country-select-wrapper");
  if (e) return e;
  let t = document.getElementById("public-site-address-country"),
    r = t?.closest('[id*="-select-wrapper"], .pcty-input-select-full-container, [role="combobox"]');
  return r || document.querySelector(
    '[id*="address-country"][id*="-select-wrapper"], [data-automation-id*="country"][id*="-select-wrapper"]'
    )
}
let ef = 20,
  ep = 12,
  em = 50,
  eh = 2,
  eg = 2;

function eb(e) {
  return e.querySelector(".input-select-input-single-value")?.textContent?.trim() || ""
}

function ey(e) {
  return JSON.stringify(e)
}
async function ev(e, t) {
  let r = Object.getPrototypeOf(e),
    n = Object.getOwnPropertyDescriptor(r, "value")?.set,
    o = (t, r) => {
      n ? n.call(e, t) : e.value = t;
      let o = e._valueTracker;
      o?.setValue?.(r)
    };
  o("", e.value), e.dispatchEvent("function" == typeof InputEvent ? new InputEvent("input", {
    bubbles: !0,
    inputType: "deleteContentBackward",
    data: null
  }) : new Event("input", {
    bubbles: !0
  }));
  let i = "";
  for (let r of t) {
    e.dispatchEvent("function" == typeof KeyboardEvent ? new KeyboardEvent("keydown", {
      key: r,
      bubbles: !0,
      cancelable: !0
    }) : new Event("keydown", {
      bubbles: !0,
      cancelable: !0
    })), "function" == typeof InputEvent && e.dispatchEvent(new InputEvent("beforeinput", {
      data: r,
      inputType: "insertText",
      bubbles: !0,
      cancelable: !0
    }));
    let t = `${i}${r}`;
    o(t, i), e.dispatchEvent("function" == typeof InputEvent ? new InputEvent("input", {
      data: r,
      inputType: "insertText",
      bubbles: !0
    }) : new Event("input", {
      bubbles: !0
    })), e.dispatchEvent("function" == typeof KeyboardEvent ? new KeyboardEvent("keyup", {
      key: r,
      bubbles: !0,
      cancelable: !0
    }) : new Event("keyup", {
      bubbles: !0,
      cancelable: !0
    })), i = t, await (0, p.delay)(10)
  }
  e.dispatchEvent(new Event("change", {
    bubbles: !0
  }))
}

function ew(e, t) {
  if ("true" !== e.getAttribute("aria-expanded")) return null;
  let r = t.getAttribute("aria-controls") || t.getAttribute("aria-owns") || e.getAttribute(
    "aria-controls") || e.getAttribute("aria-owns");
  if (r) {
    let e = document.getElementById(r);
    if (e) return e
  }
  let n = (e.id || t.id || "").replace(/\./g, "-").replace(/-select-wrapper$/, "");
  if (n) {
    let e = document.querySelector(`[id*="${n}"][id*="dropdown-list-container"]`);
    if (e) return e
  }
  return null
}

function eS(e) {
  let t = ed() || e,
    r = t.querySelector("input");
  return r && !1 !== r.isConnected ? {
    control: t,
    input: r,
    listbox: ew(t, r)
  } : null
}
async function eE(e, t) {
  let r = "missing_search_input";
  for (let t = 0; t < eh; t++) {
    let t = eS(e);
    if (!t) {
      r = "missing_search_input", await (0, p.delay)(em);
      continue
    }
    if (t.listbox) return t;
    "true" !== t.control.getAttribute("aria-expanded") && await b(t.input, 50, 100);
    for (let t = 0; t < ef; t++) {
      let t = eS(e);
      if (t) {
        if (t.listbox) return t;
        if ("true" !== t.control.getAttribute("aria-expanded")) {
          r = "not_expanded";
          break
        }
        r = "missing_owned_listbox"
      } else r = "missing_search_input";
      await (0, p.delay)(em)
    }
  }
  return console.warn(`[Paylocity][Country] search unavailable phase=${t} reason=${r}`), null
}

function ex(e) {
  let t = e.querySelector(".pcty-input-select__menu-list") || e,
    r = Array.from(t.querySelectorAll("div[title]"));
  return r.length > 0 ? r : Array.from(t.querySelectorAll(
    "li, [role='option'], .pcty-input-select__option"))
}

function eC(e) {
  return e.getAttribute("title")?.trim() || e.textContent?.trim() || ""
}

function eA(e, t) {
  let r = e.filter(e => e_(eC(e), t));
  return 1 === r.length ? r[0] : null
}
async function ek(e) {
  let t = ed() || e,
    r = t.querySelector("input");
  r && (await ev(r, ""), "true" === t.getAttribute("aria-expanded") && await b(r), r.blur())
}
async function eT(e, t) {
  let r = eb(e);
  if (e_(r, t)) return console.info(
      `[Paylocity][Country] already committed currentValue=${ey(r)} candidateValues=${ey(t)}`),
    !0;
  let n = e.querySelector("input");
  if (!n) return console.warn(
    `[Paylocity][Country] fill failed reason=missing_search_input currentValue=${ey(r)} candidateValues=${ey(t)}`
    ), !1;
  let o = await eE(e, "initial");
  if (!o) return console.warn(
    `[Paylocity][Country] fill failed reason=search_unavailable phase=initial currentValue=${ey(r)} candidateValues=${ey(t)}`
    ), !1;
  (n = o.input).focus(), await ev(n, t[0]);
  let i = null,
    a = [],
    l = 0;
  for (let r = 0; r < ef; r++) {
    let r = eS(e),
      o = !r || "true" !== r.control.getAttribute("aria-expanded"),
      s = !!(r && r.input !== n);
    if (o || s || !1 === n.isConnected) {
      if (l >= eg || (l++, console.info(
          `[Paylocity][Country] search recovery attempt=${l} reason=${o?"not_expanded":s?"input_replaced":"input_disconnected"}`
          ), !(r = await eE(e, "recovery")))) break;
      (n = r.input).focus(), await ev(n, t[0])
    }
    let u = r?.listbox;
    if (u) {
      let e = ex(u);
      if (a = e.map(eC).filter(Boolean).slice(0, 20), i = eA(e, t)) break
    }
    await (0, p.delay)(em)
  }
  if (!i) return console.warn(
    `[Paylocity][Country] fill failed reason=no_unique_exact_option searchTerm=${ey(t[0])} candidateValues=${ey(t)} mountedOptionValues=${ey(a)}`
    ), await ek(e), !1;
  i.scrollIntoView({
    block: "center"
  }), await b(i);
  let s = ed() || e;
  s.querySelector("input")?.blur();
  for (let r = 0; r < ep; r++) {
    let r = ed() || e;
    if (e_(eb(r), t)) return console.info(
        `[Paylocity][Country] committed committedValue=${ey(eb(r))} candidateValues=${ey(t)}`),
      !0;
    await (0, p.delay)(em)
  }
  return console.warn(
    `[Paylocity][Country] fill failed reason=commit_readback_mismatch committedValue=${ey(eb(ed()||e))} candidateValues=${ey(t)}`
    ), await ek(e), !1
}
async function eF(e) {
  for (let t = 0; t < ep; t++) {
    let t = ed() || e;
    if (!eb(t)) return !0;
    await (0, p.delay)(em)
  }
  return !1
}
async function eI(e, t) {
  if (t) return await eT(e, [t]);
  await ek(e);
  let r = ed() || e;
  if (!eb(r)) return !0;
  let n = r.querySelector(".css-b40bim") || r.querySelector("[aria-label='delete']")?.closest(
    "[tabindex]");
  return !!n && (await b(n), await eF(r))
}
async function ej(e, t) {
  let r = eb(e);
  if (await eT(e, t)) return !0;
  let n = ed() || e,
    o = eb(n),
    i = r ? e_(o, [r]) : !o;
  if (i) return await ek(n), !1;
  let a = await eI(n, r);
  return a || console.warn("[Paylocity][Country] rollback failed", {
    reason: "not_restored"
  }), await ek(n), !1
}
async function eD(e) {
  let t = ec(e);
  if (0 === t.length) return console.warn(
    "[Paylocity][Country] fill skipped reason=empty_source_country"), !1;
  let r = ed();
  return r ? (console.info(
    `[Paylocity][Country] fill start sourceCountry=${ey(eu(e))} candidateValues=${ey(t)} currentValue=${ey(eb(r))}`
    ), await ej(r, t)) : (console.warn(
    `[Paylocity][Country] fill failed reason=missing_country_control sourceCountry=${ey(eu(e))} candidateValues=${ey(t)}`
    ), !1)
}

function eP(e) {
  return String(e ?? "").normalize("NFKD").replace(/\p{M}+/gu, "").replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ").trim().toLowerCase()
}

function e_(e, t) {
  let r = eP(e);
  return "" !== r && t.some(e => eP(e) === r)
}

function eL(e) {
  let t = Array.from(e.querySelectorAll(".input-select-input-single-value, .rw-input")).map(e => e
    .textContent?.trim() || "").find(Boolean);
  if (t) return {
    source: "display",
    value: t
  };
  let r = e.querySelector("input")?.value?.trim();
  if (r) return {
    source: "input",
    value: r
  };
  let n = Array.from(e.querySelectorAll("button[aria-label]")).map(e => e.getAttribute("aria-label")
    ?.trim() || "").map(e => e.match(/^(.+?)\s+Dismiss$/i)?.[1]?.trim() || "").find(Boolean);
  return n ? {
    source: "tag",
    value: n
  } : {
    source: "none",
    value: ""
  }
}
async function eR(e, t, r = !1) {
  if (!e) return !1;
  let n = eL(e),
    o = n.value,
    i = /^(select|choose|please select|--)/i.test(o) || "" === o;
  if (console.info("[Paylocity][Select] committed readback", {
      controlId: e.id || "unknown",
      stage: "before_fill",
      source: n.source,
      hasCommittedValue: !!o,
      isPlaceholder: i
    }), !i && t.length > 0) {
    let e = String(t[0]).trim();
    if (r ? e_(o, t) : (0, l.isMatched)(o, e)) return !0
  }
  let a = e.querySelector("input") || null,
    s = a || e;
  await b(s, 50, 300);
  let u = null,
    c = e.getAttribute("aria-controls");
  if (c && (u = document.getElementById(c)), !u) {
    let t = e.getAttribute("aria-owns") || s.getAttribute("aria-owns");
    t && (u = document.getElementById(t))
  }
  if (!u) {
    let t = e.id || s.id || "";
    if (t) {
      let e = t.replace(/\./g, "-").replace(/-select-wrapper$/, ""),
        r = `[id*="${e}"][id*="dropdown-list-container"]`,
        n = document.querySelector(r);
      n && null !== n.offsetParent && (u = n)
    }
  }
  if (!u) {
    let e = document.querySelectorAll(".rw-popup-container");
    e.length > 0 && (u = e[e.length - 1])
  }
  if (!u) return await b(s), !1;
  let d = u.querySelector(".pcty-input-select__menu-list") || u,
    f = [],
    m = d.querySelectorAll("div[title]");
  if (m.length > 0) f = Array.from(m);
  else {
    let t = e.getAttribute("aria-owns");
    if (t) {
      let e = document.getElementById(t);
      e && (f = Array.from(e.querySelectorAll("li")))
    }
    0 === f.length && (f = Array.from(d.querySelectorAll("ul li, div[role='option']")))
  }
  let h = f.map(e => e.getAttribute("title")?.trim() || e.textContent?.trim() || ""),
    g = -1;
  if (t.length > 0)
    for (let e of t) {
      let t = String(e).trim();
      if (/^\d+$/.test(t)) {
        let e = Number(t);
        if (Number.isInteger(e) && e >= 0 && e < h.length) {
          g = e;
          break
        }
      }
      if (-1 !== (g = h.findIndex(t => r ? e_(t, [e]) : (0, l.isMatched)(t, e)))) break
    }
  if (-1 === g) return await b(s), !1;
  {
    let n = f[g];
    n.scrollIntoView({
      block: "center"
    }), await (0, p.delay)(50), await b(n), await (0, p.delay)(100);
    let o = eL(e),
      i = o.value,
      a = !!(i && (r ? e_(i, t) : t.some(e => (0, l.isMatched)(i, e))));
    return console.info("[Paylocity][Select] committed readback", {
      controlId: e.id || "unknown",
      stage: "after_selection",
      source: o.source,
      hasCommittedValue: !!i,
      committed: a
    }), a
  }
}
async function eO(e, t) {
  if (!e) return !1;
  let r = await v(e, 'div[data-for*="Obtained"]');
  if (!r) return !1;
  r.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, p.delay)(100);
  let n = await v(e, 'ul[id*="educationHistory.degreeId"]');
  if (!n) return !1;
  let o = Array.from(n.querySelectorAll("li"));
  if (0 === o.length) return !1;
  let i = (t ?? []).map(e => String(e).trim()).filter(Boolean),
    a = null;
  for (let e of i) {
    let t = o.findIndex(t => (0, l.isMatched)(t.textContent?.trim() || "", e));
    if (-1 !== t) {
      a = o[t];
      break
    }
  }
  return !!a && (a.click(), await (0, p.delay)(100), !0)
}
async function eM(e, t) {
  if (!e) return !1;
  let r = await v(e, 'input[id*="txt-educationHistory-graduationDate"]');
  return !!r && await ti(r, t)
}
async function eN(e, t, r = !1) {
  if (!e || !t || 0 === t.length) return;
  let n = t.map(e => String(e).trim()).filter(Boolean);
  for (let t of n) {
    e.focus(), await (0, p.delay)(50), e.value = t, (0, s.triggerEvents)(e, ["input", "change"]),
      await (0, p.delay)(100);
    let n = document.querySelector('.rw-popup-container, [role="listbox"]');
    if (n) {
      let r = Array.from(n.querySelectorAll('li, [role="option"]')),
        o = r.find(e => (0, l.isMatched)(e.textContent?.trim() || "", t));
      o ? await b(o) : (e.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        keyCode: 13,
        bubbles: !0
      })), await (0, p.delay)(100))
    }
    if (!r) break
  }
  e.blur(), await (0, p.delay)(100)
}
async function e$(e, t) {
  if (!e || !t || 0 === t.length) return;
  e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, p.delay)(200);
  let r = document.querySelector('[role="listbox"]');
  if (!r) return;
  let n = Array.from(r.querySelectorAll('[role="option"]')),
    o = !1;
  for (let e of t) {
    let t = n.find(t => (0, l.isMatched)(t.textContent?.trim() || "", e));
    if (t) {
      await b(t), o = !0;
      break
    }
  }
  await b(e)
}
async function eB(e, t, r) {
  let n = Z();
  if (!n) return;
  let o = await (0, l.fetchPdfAsBlob)(e);
  o && (await (0, s.uploadFiles)(n, o, t, r), await (0, p.delay)(500))
}
async function eq(e, t, r) {
  let n = Q();
  if (!n.input || !n.triggerButton) return !1;
  let o = await es();
  if (!o) return !1;
  await (0, s.uploadFiles)(n.input, await (0, l.fetchCoverLetterPdfAsBlob)(e), t, r,
    "Cover Letter");
  let i = `${e.coverLetterName}.pdf`.toLowerCase();
  return await (0, u.waitForCondition)(() => {
    let e = Q(),
      t = e.uploadedFileName?.textContent?.trim().toLowerCase() || "";
    return t.includes(i) || !!t && !!e.removeButton
  }, {
    timeout: 5e3,
    interval: 100,
    observeTarget: n.section || document.body
  })
}
let eU = 2,
  eH = 8,
  eY = 50;

function ez(e) {
  return `${e??""}`.trim().toLowerCase()
}

function eV() {
  return document.getElementById("info.skills")
}

function eW(e) {
  return e.closest(".react-tagsinput")
}

function eG(e) {
  return Array.from(e.querySelectorAll(".react-tagsinput-tag")).map(e => {
    let t = e.querySelector(".react-tagsinput-remove")?.textContent || "",
      r = e.textContent || "";
    return t && r.endsWith(t) ? r.slice(0, -t.length).trim() : r.trim()
  }).filter(Boolean)
}

function eK(e, t) {
  let r = e.ownerDocument?.defaultView?.HTMLInputElement?.prototype || ("undefined" !=
      typeof HTMLInputElement ? HTMLInputElement.prototype : void 0),
    n = r ? Object.getOwnPropertyDescriptor(r, "value")?.set : void 0,
    o = e.value;
  n ? n.call(e, t) : e.value = t;
  let i = e._valueTracker;
  i?.setValue?.(o)
}

function eX(e, t) {
  e.focus(), e.dispatchEvent(new Event("focusin", {
    bubbles: !0,
    composed: !0
  })), eK(e, t), e.dispatchEvent(new Event("input", {
    bubbles: !0,
    composed: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0,
    composed: !0
  }));
  let r = {
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    which: 13,
    bubbles: !0,
    cancelable: !0,
    composed: !0
  };
  for (let t of ["keydown", "keypress", "keyup"]) e.dispatchEvent("function" ==
    typeof KeyboardEvent ? new KeyboardEvent(t, r) : new Event(t, {
      bubbles: !0,
      cancelable: !0
    }))
}
async function eJ(e) {
  let t = ez(e);
  for (let e = 0; e < eH; e += 1) {
    let e = eV(),
      r = e ? eW(e) : null;
    if (r && eG(r).some(e => ez(e) === t)) return !0;
    await (0, p.delay)(eY)
  }
  return !1
}
async function eQ(e) {
  let t = Array.from(new Map((e ?? []).flatMap(e => `${e??""}`.split(",")).map(e => e.trim())
      .filter(Boolean).map(e => [ez(e), e])).values()),
    r = eV(),
    n = r ? eW(r) : null;
  if (!r || !n) return console.warn("[Paylocity][Skills] fill failed", {
    reason: r ? "container_not_found" : "input_not_found",
    requestedCount: t.length
  }), !1;
  if (0 === t.length) return console.info("[Paylocity][Skills] fill skipped", {
    reason: "empty_skill_list"
  }), !1;
  console.info("[Paylocity][Skills] fill start", {
    requestedCount: t.length,
    existingCount: eG(n).length
  });
  let o = 0;
  for (let [e, r] of t.entries()) {
    let n = eV(),
      i = n ? eW(n) : null,
      a = !!i && eG(i).some(e => ez(e) === ez(r));
    if (a) {
      o += 1;
      continue
    }
    let l = !1;
    for (let n = 1; n <= eU; n += 1) {
      let i = eV(),
        a = i ? eW(i) : null;
      if (!i || !a) {
        console.warn("[Paylocity][Skills] item failed", {
          reason: i ? "container_replaced" : "input_replaced",
          itemIndex: e,
          requestedCount: t.length,
          attempt: n
        });
        break
      }
      if (a.click(), eX(i, r), l = await eJ(r)) {
        o += 1;
        break
      }
      eK(i, ""), i.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
      })), console.warn("[Paylocity][Skills] commit readback failed", {
        itemIndex: e,
        requestedCount: t.length,
        attempt: n
      })
    }
  }
  let i = o === t.length;
  return console.info("[Paylocity][Skills] fill complete", {
    requestedCount: t.length,
    committedCount: o,
    missingCount: t.length - o,
    complete: i
  }), i
}
async function eZ() {
  let e = (0, d.getFirstOrderedNodeSafe)(
      "//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddWorkHistory')]"
      ),
    t = e?.closest(".section-wrapper"),
    r = (0, d.getFirstOrderedNodeSafe)(
      "//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddEducation')]"
      ),
    n = r?.closest(".section-wrapper");
  if (t) {
    await e0(), await (0, p.delay)(100);
    let e = e8();
    0 === e ? (await e5(), await (0, p.delay)(150), e = e8(), await (0, u.waitForCondition)(ta, {
      timeout: 500,
      observeTarget: document.body
    })) : console.warn(`Failed to delete all employment sections, remaining: ${e}`)
  }
  if (n) {
    let e = h.useProfileStore.getState().userProfile?.profile?.education?.length || 0;
    await e1(), await (0, p.delay)(100);
    let t = e9();
    0 === t && e > 0 ? (await e6(), await (0, p.delay)(150), t = e9(), await (0, u
      .waitForCondition)(ta, {
      timeout: 500,
      observeTarget: document.body
    })) : t > e && console.warn(`Failed to delete all education sections, remaining: ${t}`)
  }
}
async function e0() {
  await e3(e8, e2)
}

function e2() {
  return (0, d.getFirstOrderedNodeSafe)(
    "//button[contains(@data-automation-id, 'btn-delete-workhistory') or contains(@data-automationid, 'btn-delete-workhistory') or contains(normalize-space(.), 'Delete This Work History') or contains(normalize-space(.), 'Delete This Employment History')]"
    )
}
async function e1() {
  await e3(e9, e4)
}
async function e3(e, t) {
  let r = e(),
    n = t();
  for (; n && r > 0;) {
    n.click(), await (0, u.waitForCondition)(() => e() < r, {
      timeout: 1e3,
      observeTarget: document.body
    });
    let o = e();
    if (o >= r) break;
    r = o, n = t()
  }
}

function e4() {
  return (0, d.getFirstOrderedNodeSafe)(
    "//button[contains(@data-automation-id, 'btn-delete-educationhistory') or contains(normalize-space(.), 'Delete This Education History')]"
    )
}
async function e5() {
  let e = (0, d.getFirstOrderedNodeSafe)(
    "//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddWorkHistory')]"
    );
  e && (e.click(), await (0, p.delay)(200))
}
async function e6() {
  let e = (0, d.getFirstOrderedNodeSafe)(
    "//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddEducation')]"
    );
  e && (e.click(), await (0, p.delay)(200))
}

function e8() {
  return (0, d.getOrderedNodesSafe)("//div[contains(@class, 'work-history-group')]").length
}

function e9() {
  return (0, d.getOrderedNodesSafe)("//div[contains(@class, 'education-history-group')]").length
}
async function e7(e = {}) {
  let {
    expandEducation: t = !0,
    expandEmployment: r = !0
  } = e, n = h.useProfileStore.getState().userProfile?.profile;
  n && (await tt({
    getCurrentCount: e9,
    getTargetCount: () => n.education?.length || 0,
    addSection: e6,
    enabled: t,
    settleDelay: 150,
    waitTimeout: 500
  }), await tt({
    getCurrentCount: e8,
    getTargetCount: () => n.workExperience?.length || 0,
    addSection: e5,
    enabled: r,
    settleDelay: 150,
    waitTimeout: 500
  }))
}
async function te(e) {
  await tt({
    getCurrentCount: e9,
    getTargetCount: () => e.education?.length || 0,
    addSection: e6,
    settleDelay: 200,
    waitTimeout: 1500
  }), await tt({
    getCurrentCount: e8,
    getTargetCount: () => e.workExperience?.length || 0,
    addSection: e5,
    settleDelay: 200,
    waitTimeout: 1500
  })
}
async function tt({
  getCurrentCount: e,
  getTargetCount: t,
  addSection: r,
  enabled: n = !0,
  settleDelay: o,
  waitTimeout: i
}) {
  if (!n) return;
  let a = t(),
    l = e();
  for (; l < a;) {
    await r(), await (0, p.delay)(o), await (0, u.waitForCondition)(ta, {
      timeout: i,
      observeTarget: document.body
    }), await (0, p.delay)(100);
    let t = e();
    if (t === l) break;
    l = t
  }
}
async function tr() {
  let e = document.querySelector("main") || document.body;
  e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, p.delay)(100)
}
async function tn(e, t, r = "") {
  let n = r;
  for (let r = 0; r < t.length; r++) {
    let o = t[r],
      i = o.charCodeAt(0);
    e.dispatchEvent(new KeyboardEvent("keydown", {
      key: o,
      keyCode: i,
      code: `Digit${o}`,
      bubbles: !0,
      cancelable: !0
    })), n += o, e.value = n, e.dispatchEvent(new KeyboardEvent("keyup", {
      key: o,
      keyCode: i,
      code: `Digit${o}`,
      bubbles: !0,
      cancelable: !0
    })), await (0, p.delay)(200)
  }
}
async function to(e, t) {
  if (!e) return;
  let r = (0, i.default)(t);
  if (!r.isValid()) return;
  let n = r.format("YYYY-MM-DD");
  e.click(), await (0, p.delay)(200), e.focus(), await (0, p.delay)(200), e.value = "", e
  .select(), await (0, p.delay)(200), await tn(e, n, ""), (0, s.triggerEvents)(e, ["change"]),
    await (0, p.delay)(200), e.blur(), await (0, p.delay)(200), await tr()
}
async function ti(e, t) {
  if (e instanceof HTMLInputElement) {
    let r = (0, g.inferPaylocityDateFormat)(e);
    if (!r) return console.warn("[Paylocity][Date] fill skipped: unsupported format", {
      controlId: e.id,
      controlType: e.getAttribute("type") || e.type || null,
      placeholder: e.getAttribute("placeholder") || e.placeholder || null
    }), !1;
    let n = (0, g.formatPaylocityDateValue)(t, r);
    if (!n) return console.warn("[Paylocity][Date] fill skipped: invalid source date", {
      controlId: e.id,
      dateFormat: r,
      source: (0, g.summarizePaylocityDateValue)(t)
    }), !1;
    console.info("[Paylocity][Date] fill start", {
      controlId: e.id,
      controlType: e.getAttribute("type") || e.type || null,
      placeholder: e.getAttribute("placeholder") || e.placeholder || null,
      dateFormat: r,
      source: (0, g.summarizePaylocityDateValue)(t),
      target: (0, g.summarizePaylocityDateValue)(n)
    }), await (0, a.fillDefaultInputField)(e, n), await (0, p.delay)(50);
    let o = e.value?.trim() || "",
      i = o === n;
    return console.info("[Paylocity][Date] fill readback", {
      controlId: e.id,
      dateFormat: r,
      committed: i,
      value: (0, g.summarizePaylocityDateValue)(o)
    }), i
  }
  return console.warn("[Paylocity][Date] fill skipped: target is not an input"), !1
}

function ta() {
  let e = document.querySelectorAll(
    '[data-automation-id*="loading"], .loading, .spinner, [aria-busy="true"]');
  return 0 === e.length
}
async function tl() {
  await (0, u.waitForCondition)(ta, {
    timeout: 3e3,
    observeTarget: document.body
  }), await (0, p.delay)(200)
}

function ts(e, t = [], r) {
  let n = (0, m.getFormSnapshot)(t),
    o = (0, c.buildFalconAutofillAnswerPairData)(r),
    {
      education: i,
      employment: a,
      ...l
    } = n,
    {
      education: s,
      employment: u,
      ...d
    } = e;
  (0, c.sendAutofillAnswerPairEvent)({
    formUrl: (0, f.useUrlStore).getState().currentTabUrl,
    autofillSnapshot: d,
    submitSnapshot: l,
    additionalAutofillData: {
      education: s,
      employment: u
    },
    additionalSubmitData: {
      education: i,
      employment: a
    },
    ...o ? {
      extraData: {
        falcon: o
      }
    } : {},
    source: "paylocity"
  })
}

