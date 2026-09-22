/**
 * Parcel module id: apMik
 * Resolved path: src/contents/sites/myworkday/operations.js
 * Dependencies:
 *   ./agreements -> aCsiw  =>  src/contents/sites/myworkday/agreements.js
 *   ./date-parts -> gh1td  =>  src/contents/sites/myworkday/date-parts.js
 *   ./rules -> 1H2ID  =>  src/contents/sites/myworkday/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/crawler/utils -> dMQWN  =>  src/contents/crawler/utils.js
 *   ~contents/crawler/utils/select -> h22JB  =>  src/contents/crawler/utils/select.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/checkbox-label -> 2KQwH  =>  src/contents/methods/checkbox-label.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~contents/sites/education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ~contents/sites/myworkday/snapshot-alignment -> 25NpF  =>  src/contents/sites/myworkday/snapshot-alignment.js
 *   ~core/pagenation -> l1kUK  =>  src/core/pagenation.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillMyWorkdayTextField", () => Y), n.export(r,
    "fillMyWorkdayCheckbox", () => Z), n.export(r, "fillMyWorkdayCheckBoxesField", () => er), n
  .export(r, "fillCountry", () => en), n.export(r, "findBestWorkdaySearchOption", () => eh), n
  .export(r, "clearWorkdaySearchSelection", () => ey), n.export(r, "getWorkdaySkillsFillSummary",
  () => eC), n.export(r, "WORKDAY_SEARCH_SKILLS_OPTION_MAX_RETRY", () => eI), n.export(r,
    "fillSearchBoxInputField", () => ta), n.export(r, "fillListboxButtonField", () => ts), n.export(
    r, "fillMyWorkdayListboxRule", () => tf), n.export(r, "getWorkdayResumeUploadInput", () => tv),
  n.export(r, "hasWorkdayResumeUploadInput", () => tw), n.export(r, "uploadResume", () => tS), n
  .export(r, "fillSkills", () => tE), n.export(r, "preclickAddButtons", () => tx), n.export(r,
    "expandForm", () => tj), n.export(r, "blurPage", () => t_), n.export(r,
    "fillMyWorkdayDateField", () => tO), n.export(r, "isLoadingCleared", () => tU), n.export(r,
    "isMyWorkdayFormReadyForAutofill", () => tY), n.export(r, "waitPageClean", () => tz), n.export(
    r, "unbindMyWorkdaySubmitTracking", () => t7), n.export(r, "clearActiveMyWorkdaySubmitTracking",
    () => re), n.export(r, "commitVisibleWorkdayInputsBeforeSubmit", () => rh), n.export(r,
    "submitHandler", () => rx), n.export(r, "bindMyWorkdaySubmitTracking", () => rA);
var o = e("~contents/methods/choice-match"),
  i = e("./agreements"),
  a = e("@plasmohq/messaging"),
  l = e("~contents/crawler/utils"),
  s = e("~contents/crawler/utils/select"),
  u = e("~contents/methods/answer"),
  c = e("~contents/methods/checkbox-label"),
  d = e("~contents/methods/dom"),
  f = e("~contents/methods/observer"),
  p = e("~contents/sites/autofill-answer-pair-tracking"),
  m = e("~contents/sites/education-item-trace"),
  h = e("~contents/sites/myworkday/snapshot-alignment"),
  g = e("~core/pagenation"),
  b = e("~core/xpath"),
  y = e("~store/url"),
  v = e("~utils/delay"),
  w = e("~utils/getTargetOrTimeout"),
  S = n.interopDefault(w),
  E = e("./date-parts"),
  x = e("./rules");
let C = "__jr_workday_text_request",
  A = "__jr_workday_text_response",
  k = "__jr_workday_select_request",
  T = "__jr_workday_select_response",
  F = "__jr_workday_date_request",
  I = "__jr_workday_date_response",
  j = "__jr_workday_checkbox_request",
  D = "__jr_workday_checkbox_response",
  P = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  _ = "abcdefghijklmnopqrstuvwxyz",
  L =
  '[data-automation-id="promptLeafNode"], [data-automation-id="promptOption"], [data-automation-id="radioBtn"]',
  R =
  '[data-automation-id="activeListContainer"][role="listbox"], [data-automation-id="activeListContainer"]',
  O = `translate(@aria-labelledby, "${P}", "${_}")`,
  M = `
  @data-automation-id="educationSection"
  or (
    contains(${O}, "education")
    and substring(${O}, string-length(${O}) - string-length("-section") + 1) = "-section"
  )
  or ${O}="schools-attended-section"
  or ${O}="academic-experience-section"
`,
  N = !1;
async function $() {
  if (N) return !0;
  try {
    return await (0, a.sendToBackground)({
      name: "injectWorkdayFiber"
    }), N = !0, !0
  } catch (e) {
    return console.warn("[WorkdayFiber] failed to inject main world script:", e), !1
  }
}
async function B(e, t) {
  let r = await $();
  if (!r) return !1;
  let n = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
  e.setAttribute("data-jr-wd-fiber-id", n);
  let o = `[data-jr-wd-fiber-id="${n}"]`,
    i = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
  return new Promise(r => {
    let n = setTimeout(() => {
      document.removeEventListener(A, a), e.removeAttribute("data-jr-wd-fiber-id"), r(!1)
    }, 3e3);

    function a(t) {
      let o = t.detail;
      o?.requestId === i && (document.removeEventListener(A, a), clearTimeout(n), e
        .removeAttribute("data-jr-wd-fiber-id"), r(!!o.success))
    }
    document.addEventListener(A, a), document.dispatchEvent(new CustomEvent(C, {
      detail: {
        selector: o,
        value: t,
        requestId: i
      }
    }))
  })
}
async function q(e, t) {
  let r = await $();
  if (!r) return !1;
  let n = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
  e.setAttribute("data-jr-wd-fiber-id", n);
  let o = `[data-jr-wd-fiber-id="${n}"]`,
    i = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
  return new Promise(r => {
    let n = setTimeout(() => {
      document.removeEventListener(T, a), e.removeAttribute("data-jr-wd-fiber-id"), r(!1)
    }, 3e3);

    function a(t) {
      let o = t.detail;
      o?.requestId === i && (document.removeEventListener(T, a), clearTimeout(n), e
        .removeAttribute("data-jr-wd-fiber-id"), r(!!o.success))
    }
    document.addEventListener(T, a), document.dispatchEvent(new CustomEvent(k, {
      detail: {
        selector: o,
        candidates: t,
        requestId: i
      }
    }))
  })
}
async function U(e, t, r, n) {
  let o = await $();
  if (!o) return {
    success: !1,
    error: "main world injection failed"
  };
  let i = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
  e.setAttribute("data-jr-wd-fiber-id", i);
  let a = `[data-jr-wd-fiber-id="${i}"]`,
    l = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
  return new Promise(o => {
    let i = setTimeout(() => {
      document.removeEventListener(I, s), e.removeAttribute("data-jr-wd-fiber-id"), o({
        success: !1,
        error: "date fiber request timeout"
      })
    }, 3e3);

    function s(t) {
      let r = t.detail;
      r?.requestId === l && (document.removeEventListener(I, s), clearTimeout(i), e
        .removeAttribute("data-jr-wd-fiber-id"), o({
          success: !!r.success,
          inputHandled: !!r.inputHandled,
          parentCommitHandled: !!r.parentCommitHandled,
          contextCommitHandled: !!r.contextCommitHandled,
          dateFieldMetadataId: "string" == typeof r.dateFieldMetadataId ? r
            .dateFieldMetadataId : void 0,
          error: "string" == typeof r.error ? r.error : void 0
        }))
    }
    document.addEventListener(I, s), document.dispatchEvent(new CustomEvent(F, {
      detail: {
        selector: a,
        month: t,
        day: r,
        year: n,
        requestId: l
      }
    }))
  })
}
async function H(e, t = !0) {
  let r = await $();
  if (!r) return !1;
  let n = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
  e.setAttribute("data-jr-wd-fiber-id", n);
  let o = `[data-jr-wd-fiber-id="${n}"]`,
    i = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
  return new Promise(r => {
    let n = setTimeout(() => {
      document.removeEventListener(D, a), e.removeAttribute("data-jr-wd-fiber-id"), r(!1)
    }, 3e3);

    function a(t) {
      let o = t.detail;
      o?.requestId === i && (document.removeEventListener(D, a), clearTimeout(n), e
        .removeAttribute("data-jr-wd-fiber-id"), r(!!o.success))
    }
    document.addEventListener(D, a), document.dispatchEvent(new CustomEvent(j, {
      detail: {
        selector: o,
        checked: t,
        requestId: i
      }
    }))
  })
}
async function Y(e, t) {
  await B(e, t) || await (0, d.fillInputTextField)(e, t)
}

function z(e) {
  return (0, x.isWorkdayInputSelected)(e)
}

function V(e) {
  if (!e.id || "undefined" == typeof document) return null;
  let t = e.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  try {
    return document.querySelector(`label[for="${t}"]`)
  } catch {
    return null
  }
}

function W(e) {
  let t = e.parentElement,
    r = t?.nextElementSibling || t?.previousElementSibling,
    n = ["function" == typeof e.closest ? e.closest("label") : null, V(e), r, t];
  return n.find(e => !!e && "function" == typeof e.click) || e
}
async function G(e, t = 250, r = z) {
  let n = Date.now();
  for (; Date.now() - n < t;) {
    if (r(e)) return !0;
    await (0, v.delay)(25)
  }
  return !!r(e)
}
async function K(e, t, r = 300, n = 1200) {
  let o = Date.now(),
    i = null;
  for (; Date.now() - o < n;) {
    if (t(e)) {
      if (i ??= Date.now(), Date.now() - i >= r) return !0
    } else i = null;
    await (0, v.delay)(50)
  }
  return !1
}

function X(e, t) {
  let r = t.startsWith("pointer") && "function" == typeof PointerEvent ? PointerEvent : MouseEvent;
  e.dispatchEvent(new r(t, {
    bubbles: !0,
    cancelable: !0,
    view: window
  }))
}

function J(e) {
  if ("function" == typeof e.click) {
    e.click();
    return
  }
  e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  }))
}

function Q(e) {
  if ("function" == typeof e.dispatchEvent)
    for (let t of ["pointerdown", "mousedown", "pointerup", "mouseup"]) X(e, t);
  if ("function" == typeof e.click) {
    e.click();
    return
  }
  X(e, "click")
}
async function Z(e, t = !0, r = z, n = !0) {
  let o = e => r(e) === n;
  if (!e || o(e)) return;
  let i = await H(e, n);
  if (!(i && await G(e, 500, o))) {
    if (e.focus(), e.dispatchEvent(new FocusEvent("focus", {
        bubbles: !0,
        cancelable: !1,
        view: window
      })), t) {
      let t = W(e);
      t !== e ? Q(t) : J(e);
      let r = await G(e, 250, o);
      r || t === e || (J(e), r = await G(e, 250, o)), e.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !1
      })), e.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !1
      }))
    } else e.dispatchEvent(new Event("change", {
      bubbles: !0,
      cancelable: !1
    }));
    e.blur(), e.dispatchEvent(new FocusEvent("blur", {
      bubbles: !0,
      cancelable: !1,
      view: window
    }))
  }
}

function ee(e, t, r) {
  return e.options?.[r]?.trim() || (0, c.normalizeRadioCheckText)((0, c.getRadioCheckText)(t))
}

function et(e, t, r) {
  let n = (0, c.normalizeRadioCheckText)(e).replace(/\s+/g, " "),
    i = t.map(e => (0, c.normalizeRadioCheckText)(String(e)).replace(/\s+/g, " ")).filter(Boolean);
  if (i.some(e => (0, o.isExactChoiceMatch)(n, e))) return !0;
  let a = i[0] || "",
    l = r.toLowerCase();
  return "true" === a && "yes" === n || "false" === a && "no" === n || n.includes("have read") &&
    "true" === a || (0, u.isMatched)(n, r) && "true" === a || "true" === a && (n.includes(
      "current") || l.includes("current")) || l.includes("current") && "true" === a
}
async function er(e, t) {
  let r = Array.isArray(t) ? t : [t],
    n = (0, i.getWorkdayAgreementState)(e);
  if (null !== n) {
    let t = 1 === r.length ? String(r[0]).trim().toLowerCase() : "";
    if ("true" !== t && "false" !== t) return console.info(
      "[MyWorkday][autofill-debug] agreement:no-valid-answer", {
        selected: n,
        required: !!e.required
      }), n;
    let o = "true" === t,
      i = e.$checkboxs[0];
    console.info("[MyWorkday][autofill-debug] agreement:fill-start", {
      selected: n,
      targetSelected: o,
      required: !!e.required
    }), await Z(i, !0, z, o);
    let a = z(i),
      l = a === o,
      s = l && (!e.required || a);
    return console.info("[MyWorkday][autofill-debug] agreement:fill-result", {
      selected: a,
      targetSelected: o,
      complete: s,
      reason: l ? s ? "answer-matched" : "required-unchecked" : "state-not-committed"
    }), s
  }
  if (1 === e.$checkboxs.length && /^i currently work here\s*\*?$/i.test(e.label.trim()) && 1 ===
    r.length && "false" === String(r[0]).trim().toLowerCase()) {
    let t = e.$checkboxs[0];
    return await Z(t, !0, z, !1), !z(t)
  }
  let o = (0, x.isWorkdaySelfIdentifyLabel)(e.label),
    a = o ? x.isWorkdaySelfIdentifyInputSelected : z;
  for (let t = 0; t < e.$checkboxs.length; t++) {
    let n = e.$checkboxs[t],
      i = ee(e, n, t);
    if (i && et(i, r, e.label))
      for (let e = 0; e < 2 && !a(n) && (await Z(n, !0, a), !(!o || await K(n, a))); e++);
  }
  return e.$checkboxs.some(e => a(e))
}
async function en(e = "United States of America") {
  let t = (0, b.getFirstOrderedNode)(
    './/button[@data-automation-id="countryDropdown" or @data-automation-id="formField-country" or @id="country--country"]'
    );
  if (!t) return !1;
  let r = t;
  return !!ea(r.textContent, e) || ts(r, [e])
}

function eo(e) {
  let t = el(e),
    r = es(e);
  return !t || "select one" === t || ed(r, "selectone")
}

function ei(e, t) {
  return !!(e === t || ed(e, t)) || [
    ["unitedstatesofamerica", "unitedstates", "usa", "us"],
    ["canada", "ca"]
  ].some(r => r.includes(e) && r.includes(t))
}

function ea(e, t) {
  if (eo(e)) return !1;
  let r = es(e),
    n = es(t);
  return !!r && !!n && ei(r, n)
}

function el(e) {
  return String(e ?? "").replace(/\s+/g, " ").trim().toLowerCase()
}

function es(e) {
  return el(e).replace(/[^a-z0-9]/g, "")
}

function eu(e) {
  return el(e).replace(/[^a-z0-9+#.]/g, "")
}

function ec(e) {
  return el(e).split(/[^a-z0-9]+/).filter(Boolean)
}

function ed(e, t) {
  return !!e && !!t && !(e.length <= t.length) && e.length % t.length == 0 && e === t.repeat(e
    .length / t.length)
}

function ef(e) {
  let t = el(e?.textContent);
  return "no items" === t || "no items." === t || "no matches found" === t
}

function ep(e) {
  return "no matches found" === el(e)
}

function em(e) {
  return e.map(e => el(e?.textContent)).filter(Boolean).join("|")
}

function eh(e, t, r = {}) {
  let n = r.strict ?? !0,
    o = r.allowFuzzy ?? !0,
    i = r.allowExpandedMatch ?? !0,
    a = el(e),
    l = es(e),
    u = eu(e),
    c = u !== l,
    d = ec(e),
    f = i && (!n || d.length > 1 || l.length <= 3),
    p = t.filter(e => !ef(e));
  if (!l || 0 === p.length) return null;
  let m = p.find(e => {
    let t = e?.textContent,
      r = el(t),
      n = es(t),
      o = eu(t),
      i = o !== n,
      s = !c && !i;
    return r === a || o === u || ed(o, u) || s && (n === l || ed(n, l))
  });
  if (m) return m;
  let h = c || !f ? null : p.find(e => ec(e?.textContent).includes(l));
  if (h) return h;
  if (n && !c && l.length <= 3 || n && !f) return null;
  let g = c ? u : l,
    b = p.find(e => {
      let t = c ? eu(e?.textContent) : es(e?.textContent);
      return t.length > 0 && t.includes(g)
    });
  if (b) return b;
  if (o) {
    let t = (0, s.fuzzyFindBest)(e, p, {
      threshold: n ? .7 : .5,
      normalize: e => el(e)
    });
    if (t) return t
  }
  return !n && r.allowFirstCandidateFallback ? p[0] ?? null : null
}

function eg(e) {
  return (0, b.getFirstOrderedNode)(
    './/ancestor-or-self::*[@data-automation-id="multiselectInputContainer" or @data-automation-id="multiSelectContainer"]',
    e) ?? e.parentElement?.parentElement ?? e
}

function eb(e) {
  let t = e?.getAttribute?.("data-automation-id");
  return "multiselectInputContainer" === t || "multiSelectContainer" === t
}
async function ey(e) {
  if (!e) return !1;
  let t = eg(e),
    r = Array.from(t.querySelectorAll(
      '[data-automation-id="selectedItemList"] button, [data-automation-id="selectedItemList"] [role="button"], [data-automation-id="selectedItemList"] [aria-label*="Remove" i], [data-automation-id="selectedItemList"] [title*="Remove" i], [data-automation-id="selectedItemList"] [data-automation-id*="remove" i], [data-automation-id="selectedItemList"] [data-automation-id*="delete" i]'
      )).filter(e => {
      let t = e;
      return !t.disabled
    });
  for (let e of r) e.click?.(), (0, d.triggerEvents)(e, ["mousedown", "mouseup", "click"]),
    await (0, v.delay)(50);
  if (r.length > 0) {
    let e = "undefined" != typeof Node && t instanceof Node ? t : void 0;
    await (0, f.waitForCondition)(() => 0 === eE(t).length, {
      timeout: 1e3,
      interval: 50,
      observeTarget: e
    })
  }
  return e.value = "", (0, d.triggerEvents)(e, ["input", "change", "blur"]), e.blur?.(), r
    .length > 0
}

function ev(e, t) {
  let r = es(e?.id),
    n = es(e?.name),
    o = es(t?.getAttribute?.("data-automation-id")),
    i = el(t?.textContent),
    a = t?.closest?.(
      '[data-automation-id="skillsSection"], [data-automation-id="formField-skills"], [id*="Skills-section"]'
      );
  return r.includes("skills") || n.includes("skills") || o.includes("skills") || i.includes(
    "type to add skills") || !!a
}

function ew(e, t) {
  let r = es(e?.id),
    n = es(e?.name),
    o = es(t?.getAttribute?.("data-automation-id")),
    i = el(t?.textContent),
    a = e?.closest?.('[data-automation-id="formField-fieldOfStudy"]') || t?.closest?.(
      '[data-automation-id="formField-fieldOfStudy"]');
  return r.includes("fieldofstudy") || n.includes("fieldofstudy") || o.includes("fieldofstudy") || i
    .includes("field of study") || !!a
}

function eS(e, t) {
  let r = es(e?.id),
    n = es(e?.name),
    o = es(t?.getAttribute?.("data-automation-id")),
    i = el(t?.textContent),
    a = e?.closest?.('[data-automation-id="formField-school"]') || t?.closest?.(
      '[data-automation-id="formField-school"]');
  return r.includes("school") || r.includes("institution") || n.includes("school") || n.includes(
    "institution") || o.includes("school") || o.includes("institution") || i.includes(
    "school or university") || i.includes("educational institution") || !!a
}

function eE(e) {
  return e ? (0, b.getOrderedNodes)(
    './/*[@data-automation-id="selectedItemList" and @role="listbox"]//*[@data-automation-id="menuItem"]',
    e).map(e => el(e?.textContent)).filter(Boolean) : []
}

function ex(e, t) {
  let r = es(t);
  return !!r && eE(e).some(e => {
    let t = es(e);
    return t === r || ed(t, r)
  })
}

function eC(e, t) {
  let r = (e ?? []).map(e => String(e ?? "").trim()).filter(Boolean),
    n = (t ?? []).map(e => String(e ?? "").trim()).filter(Boolean),
    o = n.map(e => es(e)).filter(Boolean),
    i = r.filter(e => {
      let t = es(e);
      return !t || !o.some(e => e === t || ed(e, t))
    });
  return {
    requestedCount: r.length,
    selectedCount: n.length,
    missingSkills: i
  }
}

function eA(e, t) {
  let r = es(t);
  return !!r && eE(e).some(e => {
    let t = es(e);
    return !!t && t !== r && !ed(t, r)
  })
}
let ek = 'input[data-automation-id="searchBox"], input[placeholder="Search"]',
  eT =
  '[data-automation-id="activeListContainer"] input[data-automation-id="searchBox"], [data-automation-id="activeListContainer"] input[placeholder="Search"]',
  eF = 150,
  eI = 30,
  ej = 1,
  eD = 8,
  eP = eI + 1,
  e_ = 2,
  eL = 12,
  eR = 2,
  eO = 800,
  eM = 5,
  eN = 500,
  e$ = 250,
  eB = 1200,
  eq = 3,
  eU = new WeakMap;

function eH(e = [], t = null) {
  if (e.some(e => ep(e?.textContent))) return !0;
  let r = t ? (0, b.getOrderedNodes)(
    './/*[normalize-space(.)="No matches found" or @title="No matches found"]', t) : (0, b
    .getOrderedNodes)(
    '//*[@data-automation-id="activeListContainer"]//*[normalize-space(.)="No matches found" or @title="No matches found"]'
    );
  return r.some(e => {
    let t = "function" == typeof e.getAttribute ? e.getAttribute("title") : "";
    return ep(t) || ep(e.textContent)
  })
}

function eY(e) {
  return String(e ?? "").replace(/\s+/g, " ").trim().slice(0, 80)
}

function ez(e, t) {
  return {
    inputId: e.id || void 0,
    inputName: e.name || void 0,
    inputAutomationId: e.getAttribute?.("data-automation-id") || void 0,
    rootAutomationId: t?.getAttribute?.("data-automation-id") || void 0
  }
}

function eV(e, t = {}) {
  console.info(`[MyWorkday][autofill-debug] search:${e} ${JSON.stringify(t)}`)
}

function eW(e) {
  return !!e && "function" == typeof e.matches && e.matches(ek)
}

function eG(e) {
  return document.activeElement === e || void 0 !== e.offsetParent && null !== e.offsetParent ||
    "function" == typeof e.getClientRects && e.getClientRects().length > 0
}

function eK() {
  return "undefined" == typeof document || "function" != typeof document.querySelectorAll ? [] :
    Array.from(document.querySelectorAll(eT)).filter(eG)
}

function eX(e) {
  return void 0 !== e.offsetParent && null !== e.offsetParent || "function" == typeof e
    .getClientRects && e.getClientRects().length > 0
}

function eJ() {
  let e = new Set(eK());
  return "undefined" != typeof document && eW(document.activeElement) && e.add(document
    .activeElement), e
}

function eQ(e, t, r) {
  let n = e => e && "function" == typeof e.closest ? e.closest(
      '[data-automation-id="activeListContainer"]') : null,
    o = t => !r.has(t) || eU.get(t) === e;
  if (o(t)) {
    let e = n(t);
    if (e && eX(e)) return e
  }
  let i = eZ(e, r, !1);
  if (!i || !o(i)) return null;
  let a = n(i);
  return a && eX(a) ? a : null
}

function eZ(e, t = new Set, r = !0) {
  let n = eg(e),
    o = t => {
      if (t === e || eU.get(t) === e || "function" == typeof n.contains && n.contains(t)) return !0;
      let r = es(e?.id),
        o = es(t?.id);
      if (r && o && r === o) return !0;
      let i = es(e?.name),
        a = es(t?.name);
      return !!i && !!a && i === a
    },
    i = e => o(e) || !t.has(e);
  if ("undefined" != typeof document && eW(document.activeElement) && i(document.activeElement) && (
      o(document.activeElement) || 0 === t.size)) return document.activeElement;
  let a = eK(),
    l = a.find(o);
  if (l) return l;
  let s = a.find(i);
  return s || (r ? n.querySelector(ek) ?? e : null)
}

function e0(e) {
  let t = eg(e),
    r = t.querySelector(
      '[data-automation-id="promptIcon"], [data-automation-id="promptSearchButton"]');
  r ? (0, d.triggerEvents)(r, ["mousedown", "mouseup", "click"]) : (0, d.triggerEvents)(t, [
    "mousedown", "mouseup", "click"
  ])
}

function e2(e, t) {
  (0, d.triggerEvents)(e, ["focus"]), e.focus?.();
  let r = Object.getPrototypeOf(e),
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : e.value = t, (0, d.triggerEvents)(e, ["input", "change"]);
  let o = t.slice(-1);
  for (let t of ["keydown", "keyup"]) e.dispatchEvent(new KeyboardEvent(t, {
    bubbles: !0,
    cancelable: !0,
    key: o,
    code: o ? `Key${o.toUpperCase()}` : "",
    keyCode: o ? o.toUpperCase().charCodeAt(0) : 0
  }))
}

function e1(e) {
  for (let t of ["keydown", "keypress", "keyup"]) e.dispatchEvent(new KeyboardEvent(t, {
    bubbles: !0,
    cancelable: !0,
    key: "Enter",
    code: "Enter",
    keyCode: 13
  }))
}

function e3() {
  return "undefined" != typeof document && "function" == typeof document.querySelectorAll &&
    document.querySelectorAll('[data-automation-id="activeListContainer"]').length > 0
}

function e4() {
  if ("undefined" == typeof document || "function" != typeof document.elementFromPoint) return !1;
  let e = "function" == typeof document.querySelector ? document.querySelector(
      '[data-automation-id="activeListContainer"]') : null,
    t = "function" == typeof e?.getBoundingClientRect ? e.getBoundingClientRect() : null,
    r = "undefined" != typeof window && window.innerWidth || 0,
    n = "undefined" != typeof window && window.innerHeight || 0,
    o = Math.max(16, Math.min(80, Math.max(16, r - 16))),
    i = 120;
  if (t) {
    let e = t.top - 120,
      r = t.bottom + 24;
    e >= 80 ? i = e : n && r <= n - 24 && (i = r)
  }
  n && (i = Math.max(24, Math.min(i, n - 24)));
  let a = document.elementFromPoint(o, i) ?? (0, b.getFirstOrderedNode)(
    '//*[@id="mainContent"] | //main') ?? document.body ?? document.documentElement;
  if (!a) return !1;
  for (let e of (a.focus?.(), ["pointerover", "mouseover", "pointermove", "mousemove",
      "pointerdown", "mousedown", "pointerup", "mouseup", "click"
    ])) e9(a, e, o, i);
  return !0
}
async function e5(e) {
  if ("function" != typeof KeyboardEvent) return;
  let t = eZ(e) ?? e;
  for (let e of ["keydown", "keyup"]) t.dispatchEvent(new KeyboardEvent(e, {
    bubbles: !0,
    cancelable: !0,
    key: "Escape",
    code: "Escape",
    keyCode: 27
  }));
  e6(e), await (0, f.waitForCondition)(() => !e3(), {
    timeout: 300,
    interval: 50,
    observeTarget: document.body
  })
}

function e6(e) {
  let t = eZ(e, new Set, !1),
    r = [t, e].filter((e, t, r) => !!e && r.indexOf(e) === t);
  for (let e of r) e.blur?.(), e.dispatchEvent(rp("blur")), e.dispatchEvent(rp("focusout"))
}

function e8(e) {
  e1(e)
}

function e9(e, t, r, n) {
  let o = t.startsWith("pointer"),
    i = t.endsWith("down"),
    a = {
      bubbles: !0,
      cancelable: !0,
      view: "undefined" != typeof window ? window : null,
      clientX: r,
      clientY: n,
      screenX: r,
      screenY: n,
      button: 0,
      buttons: i ? 1 : 0
    };
  if (o && "function" == typeof PointerEvent) {
    e.dispatchEvent(new PointerEvent(t, {
      ...a,
      pointerId: 1,
      pointerType: "mouse"
    }));
    return
  }
  e.dispatchEvent(new MouseEvent(t, a))
}

function e7(e) {
  return e ? {
    tagName: e.tagName || void 0,
    automationId: e.getAttribute?.("data-automation-id") || void 0,
    role: e.getAttribute?.("role") || void 0,
    ariaLabel: e.getAttribute?.("aria-label") || void 0,
    text: eY(e.textContent)
  } : null
}

function te(e) {
  return ("function" == typeof e.querySelector ? e.querySelector(L) : null) ?? e
}

function tt({
  optionItem: e,
  clickTarget: t,
  rawClickTarget: r = null,
  clickTargetInsideOption: n,
  usedOptionFallback: o,
  clientX: i,
  clientY: a
}) {
  return {
    option: e7(e),
    clickTarget: e7(t),
    rawClickTarget: e7(r),
    clickTargetInsideOption: n,
    usedOptionFallback: o,
    ...void 0 !== i && void 0 !== a ? {
      clientX: Math.round(i),
      clientY: Math.round(a)
    } : {}
  }
}

function tr(e, t) {
  return (0, d.triggerEvents)(t, ["focus", "mousedown", "mouseup", "click"]), t.click?.(), tt({
    optionItem: e,
    clickTarget: t,
    clickTargetInsideOption: !0,
    usedOptionFallback: t !== e
  })
}

function tn(e) {
  if (!e || "function" != typeof e.dispatchEvent) return !1;
  let t = Number(e.scrollTop) || 0,
    r = Number(e.clientHeight) || 0,
    n = Number(e.scrollHeight) || 0,
    o = Math.max(96, Math.floor(.75 * r) || 160),
    i = n > r ? n - r : t + o,
    a = Math.min(t + o, i);
  return !(a <= t) && (e.scrollTop = a, e.dispatchEvent(rp("scroll")), !0)
}

function to() {
  if ("undefined" == typeof document || "function" != typeof document.querySelectorAll) return null;
  let e = Array.from(document.querySelectorAll(R));
  return e.find(eX) ?? null
}

function ti(e) {
  e.scrollIntoView?.({
    block: "center",
    inline: "nearest"
  });
  let t = te(e);
  if ("function" != typeof e.getBoundingClientRect || "undefined" == typeof document ||
    "function" != typeof document.elementFromPoint) return tr(e, t);
  let r = e.getBoundingClientRect();
  if (!r.width || !r.height) return tr(e, t);
  let n = r.left + Math.min(16, r.width / 2),
    o = r.top + r.height / 2,
    i = document.elementFromPoint(n, o),
    a = !i || i === e || !!e.contains?.(i),
    l = a ? i ?? e : t;
  for (let e of ["pointerover", "mouseover", "pointermove", "mousemove", "pointerdown", "mousedown",
      "pointerup", "mouseup", "click"
    ]) e9(l, e, n, o);
  return e.click?.(), tt({
    optionItem: e,
    clickTarget: l,
    rawClickTarget: i,
    clickTargetInsideOption: a,
    usedOptionFallback: !a,
    clientX: n,
    clientY: o
  })
}
async function ta(e, t, r = !1) {
  if (!e) {
    console.error("Input element not found");
    return
  }
  let n = null,
    o = () => eg(e),
    i = o(),
    a = ev(e, i),
    s = eS(e, i),
    u = ew(e, i),
    c = s || u,
    p = a || s,
    m = a && (r || eb(i)),
    h = a || c,
    g = !(a || c),
    y = a || c,
    w = !m && (p || u),
    E = !m,
    x = m || c,
    C = new Map,
    A = new Map,
    k = null,
    T = () => (0, b.getOrderedNodes)(
      './/*[@data-automation-id="selectedItemList" and @role="listbox"]//*[@data-automation-id="menuItem"]',
      o()),
    F = e => (0, f.waitForCondition)(() => ex(o(), e), {
      timeout: eO,
      interval: 50
    }),
    I = (e, t) => (0, f.waitForCondition)(() => T().length > e, {
      timeout: t,
      interval: 50,
      observeTarget: o() ?? void 0
    }),
    j = async e => {
      if (!x || ex(o(), e)) return !1;
      let t = es(e),
        r = A.get(t) ?? 0;
      return !(r >= eR) && (A.set(t, r + 1), n = null, !0)
    };
  for (let i = 0; i < t.length; i += 1) {
    let l = t[i],
      u = o(),
      x = ez(e, u),
      A = eY(l);
    if (E && null !== k) {
      let e = await (0, f.waitForCondition)(() => T().length > k, {
        timeout: eO,
        interval: 50,
        observeTarget: o() ?? void 0
      });
      if (k = null, e) break
    }
    if (ex(u, l)) {
      if (!m) break;
      continue
    }
    if (!m && T().length > 0 && (await ey(e), n = null, await (0, v.delay)(50)), (n || T()
        .length > 0) && !m) break;
    await (0, v.delay)(50);
    let D = eJ();
    e0(e), await (0, v.delay)(100);
    let P = await (0, S.default)(() => eZ(e, D, !1), () => !1, D.size > 0 ? 8 : 1) ?? eZ(e, D, !
      0) ?? e;
    eU.set(P, e);
    let _ = "function" == typeof P.closest,
      L = T().length,
      R = eQ(e, P, D) ?? (_ ? await (0, S.default)(() => eQ(e, P, D), () => !1, eM) : null),
      O = './/*[@data-automation-id="menuItem" and @role="option"]',
      M = () => (R = R ?? eQ(e, P, D)) ? (0, b.getOrderedNodes)(O, R) : (0, b.getOrderedNodes)(
        '//*[@data-automation-id="activeListContainer" and @role="listbox"]//*[@data-automation-id="menuItem" and @role="option"]'
        ),
      N = em(M()),
      $ = async () => {
        if (!w || !eA(o(), l)) return !1;
        let t = es(l),
          r = C.get(t) ?? 0;
        return !(r >= 2) && (C.set(t, r + 1), await ey(e), n = null, i -= 1, !0)
      }, B = Date.now();
    if (e2(P, l + ""), e8(P), R = R ?? (_ ? await (0, S.default)(() => eQ(e, P, D), () => !1,
        eM) : null), await $()) continue;
    let q = 0,
      U = 0,
      H = 0,
      Y = 0,
      z = "",
      V = 0,
      W = !1,
      G = c ? eD : a ? eP : ej,
      K = a ? eI : eF,
      X = !1,
      J = (e, t = {}) => eh(l + "", e, {
        strict: t.strict ?? p,
        allowFuzzy: !h,
        allowFirstCandidateFallback: !1,
        allowExpandedMatch: !s
      });
    if (eV("start", {
        field: x,
        value: A,
        valueIndex: i,
        valuesCount: t.length,
        multi: r,
        shouldFillMultiple: m,
        noMatchStableRetry: G,
        maxSearchOptionRetry: K
      }), n = await (0, S.default)(() => {
        if (ex(o(), l)) return X = !0, eV("selected-during-search", {
          field: x,
          value: A,
          elapsedMs: Date.now() - B,
          retryCount: U,
          resubmitCount: H
        }), null;
        if (E && T().length > L) return X = !0, eV("committed-during-search", {
          field: x,
          value: A,
          elapsedMs: Date.now() - B,
          retryCount: U,
          resubmitCount: H,
          filledCountBeforeSelect: L,
          filledCountAfterSelect: T().length
        }), null;
        let e = M(),
          t = em(e),
          r = !!N && t === N;
        if (r) {
          let t = J(e, {
            strict: !0
          });
          return t && eV("match", {
            field: x,
            value: A,
            elapsedMs: Date.now() - B,
            retryCount: U,
            resubmitCount: H,
            optionText: eY(t.textContent),
            optionsAreStale: !0,
            optionsCount: e.length
          }), t
        }
        let n = J(e);
        return n && eV("match", {
          field: x,
          value: A,
          elapsedMs: Date.now() - B,
          retryCount: U,
          resubmitCount: H,
          optionText: eY(n.textContent),
          optionsAreStale: !1,
          optionsCount: e.length
        }), n
      }, () => {
        if (ex(o(), l)) return X = !0, eV("selected-during-search", {
          field: x,
          value: A,
          elapsedMs: Date.now() - B,
          retryCount: U,
          resubmitCount: H
        }), !0;
        if (E && T().length > L) return X = !0, eV("committed-during-search", {
          field: x,
          value: A,
          elapsedMs: Date.now() - B,
          retryCount: U,
          resubmitCount: H,
          filledCountBeforeSelect: L,
          filledCountAfterSelect: T().length
        }), !0;
        U += 1;
        let t = M(),
          r = em(t),
          n = !!N && r === N,
          i = n ? J(t, {
            strict: !0
          }) : J(t);
        if (i) return q = 0, z = "", V = 0, !1;
        let s = eH(t, R),
          u = t.some(e => !ef(e));
        if (s) {
          W || (W = !0, eV("no-match-observed", {
            field: x,
            value: A,
            elapsedMs: Date.now() - B,
            retryCount: U,
            resubmitCount: H,
            noMatchStableRetry: G,
            optionsCount: t.length,
            hasSearchableOptions: u
          })), z = "", V = 0, q += 1;
          let e = q >= G;
          return e && eV("no-match-skip", {
            field: x,
            value: A,
            elapsedMs: Date.now() - B,
            retryCount: U,
            resubmitCount: H,
            noMatchRetryCount: q,
            noMatchStableRetry: G,
            optionsCount: t.length,
            hasSearchableOptions: u
          }), e
        }
        if (y && u && !s && U % 4 == 0 && tn(R ?? to())) return Y += 1, eV(
        "virtualized-scroll", {
          field: x,
          value: A,
          elapsedMs: Date.now() - B,
          retryCount: U,
          resubmitCount: H,
          scrollCount: Y,
          optionsCount: t.length,
          optionSignature: eY(r)
        }), !1;
        let d = m || a || c,
          f = d && t.length > 0 && U % eL == 0 && (m || H < 1);
        if (f) {
          let r = eZ(e);
          e2(r, l + ""), e8(r), H += 1, eV("resubmit", {
            field: x,
            value: A,
            elapsedMs: Date.now() - B,
            retryCount: U,
            resubmitCount: H,
            optionsCount: t.length,
            optionsAreStale: n
          })
        }
        if (g && u && !s && (H > 0 || U >= eL)) {
          r === z ? V += 1 : (z = r, V = 1);
          let e = V >= e_;
          return e && eV("non-matching-options-skip", {
            field: x,
            value: A,
            elapsedMs: Date.now() - B,
            retryCount: U,
            resubmitCount: H,
            stableCount: V,
            optionsCount: t.length,
            optionSignature: eY(r)
          }), e
        }
        return z = "", V = 0, q = 0, !1
      }, K), !await $()) {
      if (X) {
        if (eV("end-selected-during-search", {
            field: x,
            value: A,
            elapsedMs: Date.now() - B,
            retryCount: U,
            resubmitCount: H
          }), !m) break;
        continue
      }
      if (n) {
        let e = ti(n),
          t = T().length,
          r = await I(L, 250);
        if (r && (t = T().length), !r) {
          e1(P);
          let e = await I(L, eO);
          t = T().length, E && !e && t <= L && (k = L)
        }
        if (eV("end-option-clicked", {
            field: x,
            value: A,
            elapsedMs: Date.now() - B,
            retryCount: U,
            resubmitCount: H,
            didCommitAfterClick: r,
            filledCountBeforeSelect: L,
            filledCountAfterSelect: t,
            click: e
          }), (0, d.triggerEvents)(P, ["keypress"]), t <= L && !await F(l) && await j(l)) {
          i -= 1;
          continue
        }
        if (!m) break;
        await (0, v.delay)(200), (0, d.triggerEvents)(P, ["keypress"])
      } else eV("end-no-option", {
        field: x,
        value: A,
        elapsedMs: Date.now() - B,
        retryCount: U,
        resubmitCount: H,
        noMatchRetryCount: q,
        maxSearchOptionRetry: K
      })
    }
  }(0, l.triggerTabEvent)(e), await (0, v.delay)(200), await e5(e), tl({
    allowPageClickFallback: e3()
  }), await (0, f.waitForCondition)(() => !e3(), {
    timeout: 800,
    interval: 50,
    observeTarget: document.body
  }), e6(e)
}

function tl({
  allowPageClickFallback: e = !1
} = {}) {
  let t = (0, b.getFirstOrderedNode)('//*[@id="mainContent"] | //main');
  if (e && e4(), t) {
    t.focus?.(), e && t.click?.();
    for (let e = 0; e < 3; e++)(0, d.triggerEvents)(t, ["click"]), (0, d.triggerEvents)(t, [
      "mousedown"
    ]), (0, d.triggerEvents)(t, ["mouseup"])
  }
}
async function ts(e, t) {
  let r = th(e),
    n = await q(e, t);
  if (n && await ty(e, t, r)) return !0;
  let o = e.getAttribute("aria-controls"),
    i = o ? `//ul[@role="listbox"][@id="${o}"][@tabindex="-1"]/li[@id!="select-one"]` :
    '//ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]',
    a = null;
  for (let n = 0; n < eq; n += 1) {
    0 === (0, b.getOrderedNodes)(i).length && tp(e), await (0, f.waitForCondition)(() => (0, b
      .getOrderedNodes)(i).length > 0, {
      timeout: eN,
      interval: 50,
      observeTarget: document.body
    });
    let n = (0, b.getOrderedNodes)(i);
    for (let e of t)
      if (a = (0, s.findMatchOption)(n, e)) break;
    if (!a) break;
    let o = a;
    if ((0, d.triggerEvents)(o, ["mousedown", "mouseup", "click"]), await (0, f.waitForCondition)(
        () => tb(e, t, r, o), {
          timeout: e$,
          interval: 50,
          observeTarget: e
        }), await ty(e, t, r, o) || (o.click?.(), await (0, f.waitForCondition)(() => tb(e, t, r,
        o), {
        timeout: e$,
        interval: 50,
        observeTarget: e
      }), await ty(e, t, r, o))) return !0
  }
  return e.attributes.getNamedItem("aria-expanded")?.value === "true" && (tp(e), await (0, f
    .waitForCondition)(() => 0 === (0, b.getOrderedNodesSafe)(i).length, {
    timeout: eN,
    interval: 50,
    observeTarget: document.body
  })), !!(a && await ty(e, t, r, a))
}

function tu(e) {
  return !!e && !1 !== e.isConnected && ("function" != typeof document.contains || document
    .contains(e) || !1 !== e.isConnected)
}

function tc(e) {
  return (e || "").replace("*", "").replace(/\s+/g, " ").trim().toLowerCase()
}

function td(e, t) {
  let r = tc(e.label);
  return t.find(t => t.type === e.type && tc(t.label) === r)
}
async function tf(e, t, r = x.getRules) {
  let n = !!tu(e.$input) && await ts(e.$input, t);
  if (n) return !0;
  let o = td(e, await r());
  return !!o && o.$input !== e.$input && (Object.assign(e, o), await ts(e.$input, t))
}

function tp(e) {
  e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  }))
}

function tm(e) {
  return e.replace(/[^a-zA-Z0-9\s]/g, " ").replace(/\s+/g, " ").trim().toLowerCase()
}

function th(e) {
  return tm(e.textContent || "")
}

function tg(e) {
  return !e || "select one" === e
}

function tb(e, t, r, n) {
  if (!1 === e.isConnected && "function" == typeof document.contains && !document.contains(e))
    return !1;
  let o = th(e);
  if (tg(o)) return !1;
  let i = [...t.map(e => tm(e)), tm(n?.textContent || "")].filter(Boolean);
  return !!i.some(e => o === e || o.includes(e) || e.includes(o)) || !!n && o !== r
}
async function ty(e, t, r, n) {
  return !!tb(e, t, r, n) && (await (0, v.delay)(eB), tb(e, t, r, n))
}

function tv() {
  return (0, b.getFirstOrderedNode)(
    '//div[@aria-labelledby="Resume/CV-section"]//input[@type="file"]') || document.querySelector(
    'input[type="file"][data-automation-id="file-upload-input-ref"]')
}

function tw() {
  return !!tv()
}
async function tS(e, t, r) {
  let n = tv();
  if (!n) return "not-applicable";
  let o = (0, b.getFirstOrderedNode)(
      '//div[@data-automation-id="file-upload-item"]//button[@data-automation-id="delete-file"]'),
    i = 0,
    a = 15;
  for (; o && i < a;) await (0, v.delay)(150), o.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), i++, await (0, v.delay)(50), o = (0, b.getFirstOrderedNode)(
    '//div[@data-automation-id="file-upload-item"]//button[@data-automation-id="delete-file"]');
  return await (0, d.uploadFiles)(n, await (0, u.fetchPdfAsBlob)(e), t, r, "Resume/CV"),
    "uploaded"
}
async function tE(e) {
  let t = 39,
    r = (e ?? []).slice(0, t);
  if (0 === r.length) return !1;
  await (0, v.delay)(150), tl();
  let n = (0, b.getFirstOrderedNode)(
    '//*[@data-automation-id="skillsSection" or @data-automation-id="formField-skills" or contains(@id, "skills")]//input[@placeholder="Search"]'
    );
  if (!n) return !1;
  let o = document.querySelectorAll(
    "#Skills-section ~ div li div[data-automation-id=DELETE_charm]");
  if (o.length > 0) {
    for (let e of Array.from(o)) await (0, v.delay)(100), (0, d.triggerEvents)(e, ["mousedown",
      "mouseup", "click"
    ]);
    await (0, v.delay)(150)
  }
  await ta(n, r, !0), await (0, v.delay)(100), tl();
  let i = eC(r, eE(eg(n)));
  return console.info(`[MyWorkday][autofill-debug] skills:summary ${JSON.stringify(i)}`), 0 === i
    .missingSkills.length
}
async function tx() {
  let e = (0, b.getFirstOrderedNodeSafe)('//div[@data-automation-id="applyFlowMyExpPage"]');
  e && (await tC(), 0 === tI() && (await tk(), await (0, f.waitForCondition)(tU, {
    timeout: 1e3,
    observeTarget: document.body
  })), await tA(), 0 === tF() && (await tT(), await (0, f.waitForCondition)(tU, {
    timeout: 1e3,
    observeTarget: document.body
  })))
}
async function tC() {
  let e = (0, b.getOrderedNodesSafe)('.//button[text()="Delete"]', (0, b.getFirstOrderedNode)(`//*[@data-automation-id="workExperienceSection"
                or @aria-labelledby="Add-a-Job-section"
                or @aria-labelledby="Work-Experience-section"
                or @aria-labelledby="Work-Experience-*-section"
                or @aria-labelledby="Job-History/Work-Experience-section"
                or @aria-labelledby="Employment-Experience-section"
                or @aria-labelledby="Professional-Experience-section"
                or @aria-labelledby="Relevant-Experience-section"
                or @aria-labelledby="Where-have-you-worked?-section"
                or @aria-labelledby="Employment-History-section"
                or @aria-labelledby="Employment-Detail-section"
              ]`));
  if (e.length > 0)
    for (let t of e) t.click(), await (0, v.delay)(300)
}
async function tA() {
  let e = (0, b.getOrderedNodesSafe)('.//button[text()="Delete"]', (0, b.getFirstOrderedNode)(
    `//*[${M}]`));
  if (e.length > 0)
    for (let t of e) t.click(), await (0, v.delay)(300)
}
async function tk() {
  let e = tI(),
    t = (0, b.getFirstOrderedNodeSafe)(`.//button[
      @data-automation-id="add-button"
      or @data-automation-id="Add"
      or @data-automation-id="Add Another"
      or @aria-label="Add Another Work Experience" or @aria-label="Add Work Experience"
      or text()="Add Another"
      or text()="Add"
    ]`, (0, b.getFirstOrderedNode)(`//*[@data-automation-id="workExperienceSection"
      or @aria-labelledby="Add-a-Job-section"
      or @aria-labelledby="Work-Experience-section"
      or @aria-labelledby="Work-Experience-*-section"
      or @aria-labelledby="Job-History/Work-Experience-section"
      or @aria-labelledby="Employment-Experience-section"
      or @aria-labelledby="Professional-Experience-section"
      or @aria-labelledby="Relevant-Experience-section"
      or @aria-labelledby="Where-have-you-worked?-section"
      or @aria-labelledby="Work-or-Other-Experience-section"
      or @aria-labelledby="Employment-History-section"
      or @aria-labelledby="Work-History-section"
      or @aria-labelledby="Work-History-(Optional)-section"
      or @aria-labelledby="Employment-Detail-section"
    ]`));
  t && (t.click(), await (0, f.waitForCondition)(() => tI() > e && tU(), {
    timeout: 1500,
    interval: 50,
    observeTarget: document.body
  }))
}
async function tT() {
  let e = tF(),
    t = (0, b.getFirstOrderedNodeSafe)(`.//button[(ancestor::*[${M}] and (@data-automation-id="add-button" or @data-automation-id="Add" or @data-automation-id="Add Another"))
          or @aria-label="Add Another Education" or @aria-label="Add Education"
          or @aria-label="Add Schooling" or @aria-label="Add Another Schooling"
          or @aria-label="Add Schools Attended" or @aria-label="Add Another Schools Attended"
          or (starts-with(@aria-label, "Add") and contains(@aria-label, "Education"))
          or text()="Add Another"
          or text()="Add"
        ]`, (0, b.getFirstOrderedNode)(`//*[${M}]`));
  t && (t.click(), await (0, f.waitForCondition)(() => tF() > e && tU(), {
    timeout: 1500,
    interval: 50,
    observeTarget: document.body
  }))
}

function tF() {
  let e = (0, b.getOrderedNodes)(`//*[${x.educationGroupXpath}]`);
  return e.length
}

function tI() {
  let e = (0, b.getOrderedNodes)(`//*[${x.employmentGroupXpath}]`);
  return e.length
}
async function tj(e) {
  await tD(e.education.length), await tP(e.workExperience.length)
}
async function tD(e) {
  for (let t = tF(); t < e; t += 1) {
    await tT();
    let e = tF();
    if (e <= t) break;
    t = e - 1
  }
}
async function tP(e) {
  for (let t = tI(); t < e; t += 1) {
    await tk();
    let e = tI();
    if (e <= t) break;
    t = e - 1
  }
}
async function t_() {
  tl(), tL(), tR()
}

function tL() {
  let e = (0, b.getOrderedNodes)('//li[@role="option"][@aria-selected="true"]');
  for (let t of e) t.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0,
    view: window
  }))
}

function tR() {
  let e = (0, b.getOrderedNodesSafe)(
    '//ul[@role="listbox" and @aria-activedescendant="select-one"]');
  for (let t of e) {
    let e = t.getAttribute("id"),
      r = (0, b.getFirstOrderedNodeSafe)(
        `//button[@aria-haspopup="listbox" and @aria-controls="${e}"]`);
    r && r.click()
  }
}
async function tO(e, t) {
  let r = (0, E.getWorkdayDatePartsForField)(e, t);
  console.info("[MyWorkday][autofill-debug] date-fill:start", {
    value: t,
    dateParts: r,
    target: tM(e)
  });
  let n = await U(e, r.month, r.day, r.year);
  if (console.info("[MyWorkday][autofill-debug] date-fill:fiber-result", {
      value: t,
      dateParts: r,
      fiberResult: n,
      target: tM(e)
    }), n.success) {
    await tN(e, r);
    let o = await U(e, r.month, r.day, r.year);
    console.info("[MyWorkday][autofill-debug] date-fill:post-commit-sync", {
      value: t,
      dateParts: r,
      fiberResult: o,
      target: tM(e)
    }), await (0, v.delay)(350);
    let i = (0, E.hasWorkdayDateRequiredError)(e);
    return console.info("[MyWorkday][autofill-debug] date-fill:committed", {
      value: t,
      dateParts: r,
      hasRequiredError: i,
      target: tM(e)
    }), !i || (console.warn("[MyWorkday][autofill-debug] date-fill:required-error", {
      value: t,
      dateParts: r,
      fiberResult: n,
      postCommitFiberResult: o,
      target: tM(e)
    }), !1)
  }
  let o = e.querySelector('[data-automation-id="dateSectionMonth-input"]'),
    i = e.querySelector('[data-automation-id="dateSectionYear-input"]'),
    a = e.querySelector('[data-automation-id="dateSectionDay-input"]');
  return a && await tB(a, r.day || "01"), o && await tB(o, r.month || "01"), i && await tB(i, r
    .year), await t$(e), console.info("[MyWorkday][autofill-debug] date-fill:fallback", {
    value: t,
    dateParts: r,
    target: tM(e)
  }), !1
}

function tM(e) {
  let t = e.querySelector('[data-automation-id="dateSectionMonth-input"]'),
    r = e.querySelector('[data-automation-id="dateSectionDay-input"]'),
    n = e.querySelector('[data-automation-id="dateSectionYear-input"]');
  return {
    automationId: e.getAttribute("data-automation-id"),
    text: e.textContent?.replace(/\s+/g, " ").trim().slice(0, 240),
    month: t?.value ?? null,
    day: r?.value ?? null,
    year: n?.value ?? null,
    hasRequiredError: /required and must have a value/i.test(e.textContent || "")
  }
}
async function tN(e, t) {
  let r = e.querySelector('[data-automation-id="dateSectionMonth-input"]'),
    n = e.querySelector('[data-automation-id="dateSectionDay-input"]'),
    o = e.querySelector('[data-automation-id="dateSectionYear-input"]');
  r && t.month && await tB(r, t.month), n && t.day && await tB(n, t.day), o && await tB(o, t
    .year), await t$(e)
}
async function t$(e) {
  let t = Array.from(e.querySelectorAll(
    '[data-automation-id="dateSectionMonth-input"], [data-automation-id="dateSectionDay-input"], [data-automation-id="dateSectionYear-input"]'
    ));
  for (let e of t) e.dispatchEvent(new FocusEvent("blur", {
    bubbles: !0,
    cancelable: !1,
    relatedTarget: null,
    view: window
  }));
  e.dispatchEvent(new FocusEvent("focusout", {
    bubbles: !0,
    cancelable: !1,
    relatedTarget: null,
    view: window
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), await (0, v.delay)(50)
}
async function tB(e, t) {
  e.focus(), await (0, v.delay)(20), e.value = t, e.dispatchEvent(new Event("input", {
    bubbles: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0
  }))
}

function tq(e) {
  let t = (0, b.getFirstOrderedNodeSafe)(e);
  if (!t) return !1;
  let r = t.querySelectorAll("*");
  for (let e of r) {
    let t = e.textContent?.trim();
    if (t && /loading/i.test(t)) return !1
  }
  return !0
}

function tU() {
  return tq('//div[@data-automation-id="applyFlowMyExpPage"]')
}

function tH() {
  return document.querySelector(
    '[data-automation-id="progressBar"] [data-automation-id="progressBarActiveStep"] label:last-of-type'
    )?.textContent?.trim() || ""
}

function tY() {
  let e = document.querySelectorAll('div[data-automation-id^="formField-"]').length > 0,
    t = !!document.querySelector('[data-automation-id="applyFlowMyExpPage"]');
  return (!!e || !!t) && (!/self identify/i.test(tH()) || !!document.querySelector(
    '[data-automation-id="formField-disabilityStatus"] input[type="checkbox"], [data-automation-id="formField-disabilityStatus"] input[type="radio"]'
    ))
}
async function tz() {
  await (0, f.waitForCondition)(() => tq('//div[@data-automation-id="applyFlowPage"]'), {
    timeout: 8e3,
    interval: 100,
    observeTarget: document.body
  }), await (0, f.waitForCondition)(() => tY(), {
    timeout: 15e3,
    interval: 200,
    observeTarget: document.body
  });
  let e = -1;
  for (let t = 0; t < 10; t++) {
    let t = document.querySelectorAll('[data-automation-id^="formField-"]'),
      r = t.length;
    if (r > 0 && r === e) break;
    e = r, await (0, v.delay)(300)
  }
}
let tV =
  'button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"]',
  tW = null,
  tG = !1,
  tK = null,
  tX = null;

function tJ(e) {
  if (null == e || "object" != typeof e) return e;
  if ("function" == typeof structuredClone) try {
    return structuredClone(e)
  } catch {}
  return JSON.parse(JSON.stringify(e))
}

function tQ(e) {
  let t = tJ(e.submitSnapshot || {}),
    r = e.additionalSubmitData || {};
  return void 0 !== r.education && (t.education = tJ(r.education)), void 0 !== r.employment && (t
    .employment = tJ(r.employment)), t
}

function tZ(e, t) {
  e && (e.snapshot = tQ(t), e.educationTraceRunId = (0, m.getEducationTraceRunIdFromRecords)(t
    .additionalSubmitData?.education) ?? e.educationTraceRunId)
}

function t0() {
  return {
    step: (0, g.getMyWorkdayStepState)()
  }
}

function t2(e) {
  return (e || "").trim().replace(/\s+/g, " ").toLowerCase()
}

function t1(e, t) {
  return !!e && !!t && e.index === t.index && e.total === t.total && t2(e.title) === t2(t.title)
}

function t3(e, t) {
  return !!e && !!t && t.index > e.index
}

function t4(e) {
  return 0 === Object.keys(e).length
}

function t5(e) {
  if (Array.isArray(e)) return e.some(t5);
  if (e && "object" == typeof e) return Object.entries(e).some(([e, t]) => e !== h
    .MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY && e !== m.EDUCATION_TRACE_KEY && t5(t));
  if (null == e) return !1;
  let t = String(e).trim().toLowerCase();
  return !["", "select one", "[]", "/", "//"].includes(t)
}

function t6(e) {
  return !Object.values(e).some(t5)
}

function t8({
  autofillSnapshot: e,
  additionalSubmitData: t,
  bindContext: r,
  submitContext: n,
  submitSnapshot: o
}) {
  if (t4(o) && t6(t ?? {})) return "empty_submit_snapshot";
  let i = !!r?.step,
    a = !!n.step,
    l = !!i && !!a && t1(r?.step, n.step);
  if (i && a && !l) return "workday_step_changed";
  let s = Object.keys(e).filter(e => Object.prototype.hasOwnProperty.call(o, e)).length;
  return l || 0 !== s ? null : "no_common_submit_keys"
}

function t9({
  bindContext: e,
  extraData: t,
  submitContext: r
}) {
  return e ? {
    ...t,
    pageContext: {
      ...t.pageContext ?? {},
      myworkday: {
        bindStep: e.step,
        submitStep: r.step,
        stale: !1
      }
    }
  } : t
}

function t7(e = null) {
  return e && (e.button.removeEventListener("click", e.handler, !0), e.button.removeEventListener(
    "click", e.handler), tW === e && (tW = null)), null
}

function re() {
  return tW = t7(tW), null
}

function rt() {
  "undefined" != typeof window && "function" == typeof window.addEventListener && (tG && tK ===
    window || (window.addEventListener(g.MYWORKDAY_STEP_CHANGE_EVENT, re), tG = !0, tK = window))
}

function rr(e) {
  let t = e.toLowerCase();
  return t.includes("phone") || t.includes("mobile") || /(^|[^a-z])cell(ular)?([^a-z]|$)/.test(t) ||
    t.includes("telephone") || /(^|[^a-z])tel([^a-z]|$)/.test(t)
}

function rn(e) {
  let t = e.toLowerCase().replace(/\*/g, "").replace(/[:\uff1a]\s*$/, "").replace(/[^a-z0-9]+/g,
      " ").trim(),
    r = t.replace(/\s+/g, "");
  return "phonecountrycode" === r || "countryphonecode" === r || "countryregionphonecode" === r ||
    "countrycode" === r
}

function ro(e) {
  let t = e.toLowerCase().replace(/\*/g, "").replace(/[:\uff1a]\s*$/, "").replace(/\s+/g, " ")
  .trim();
  return "skills" === t || "add skills" === t || "type to add skills" === t
}

function ri(e) {
  return e.every(e => "string" == typeof e) ? [...e].sort((e, t) => {
    let r = e.trim().toLowerCase(),
      n = t.trim().toLowerCase(),
      o = r.localeCompare(n);
    return o || e.localeCompare(t)
  }) : e
}

function ra(e) {
  let t = e.replace(/\D/g, "");
  return t || e
}

function rl(e) {
  let t = e.match(/\+(\d{1,4})\b/);
  if (t?.[1]) return `+${t[1]}`;
  let r = e.replace(/\D/g, "");
  return r && r.length <= 4 ? `+${r}` : e
}

function rs(e) {
  let t = e.trim(),
    r = t.replace(/\D/g, "");
  if (r.length < 7 || r.length > 15) return !1;
  let n = t.replace(/\s*(?:ext\.?|x)\s*\d+\s*$/i, "");
  return !/[^0-9\s()+.-]/.test(n) && /[().-]/.test(n)
}

function ru(e, t = "") {
  if (Array.isArray(e)) {
    let r = e.map(e => ru(e, t));
    return ro(t) ? ri(r) : r
  }
  return e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ru(t,
    e)])) : "string" == typeof e && rn(t) ? rl(e) : "string" == typeof e && (rr(t) || rs(e)) ? ra(
    e) : e
}

function rc(e) {
  return (0, x.isWorkdaySelfIdentifyLabel)(e)
}

function rd(e) {
  if (Array.isArray(e)) return 0 === e.length;
  if ("string" != typeof e) return !1;
  let t = e.trim();
  if ("[]" === t) return !0;
  try {
    let e = JSON.parse(t);
    return Array.isArray(e) && 0 === e.length
  } catch {
    return !1
  }
}

function rf(e, t) {
  let r = Object.entries(t).find(([e, t]) => rc(e) && rd(t));
  if (!r) return e;
  let n = e,
    o = r[1];
  for (let t of Object.keys(e)) rc(t) && (n === e && (n = {
    ...e
  }), n[t] = o);
  return n
}

function rp(e) {
  let t = {
    bubbles: !0,
    cancelable: !1,
    ..."undefined" != typeof window ? {
      view: window
    } : {}
  };
  return "function" == typeof FocusEvent && ["focus", "focusin", "blur", "focusout"].includes(e) ?
    new FocusEvent(e, t) : new Event(e, t)
}

function rm(e) {
  if (e.disabled) return !1;
  if (e.tagName?.toUpperCase() === "INPUT") {
    let t = (e.getAttribute("type") || e.type || "").toLowerCase();
    if (["hidden", "checkbox", "radio", "file", "button", "submit", "reset"].includes(t)) return !1
  }
  let t = "function" != typeof e.getClientRects || e.getClientRects().length > 0;
  if (!t) return !1;
  let r = String(e.value ?? "").trim().length > 0,
    n = "true" === e.getAttribute("aria-invalid");
  return r || n
}

function rh(e = document) {
  let t = Array.from(e.querySelectorAll("input, textarea")),
    r = 0;
  for (let e of t) rm(e) && (e.focus?.(), e.dispatchEvent(rp("focus")), e.dispatchEvent(rp(
    "focusin")), e.dispatchEvent(new Event("input", {
    bubbles: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), e.blur?.(), e.dispatchEvent(rp("blur")), e.dispatchEvent(rp("focusout")), r++);
  return r
}

function rg(e) {
  return (e.textContent || e.innerText || e.getAttribute?.("aria-label") || e.getAttribute?.(
    "title") || "").replace(/\s+/g, " ").trim().toLowerCase()
}

function rb(e) {
  let t = rg(e);
  return t.includes("submit")
}

function ry(e) {
  let t = e?.detail?.state;
  return t && "number" == typeof t.index && "number" == typeof t.total && "string" == typeof t
    .title ? t : (0, g.getMyWorkdayStepState)()
}

function rv() {
  tX?.cleanup(), tX = null
}

function rw(e, t) {
  (0, p.sendAutofillAnswerPairEvent)(e), tZ(t, e)
}

function rS({
  baseline: e,
  bindContext: t,
  payload: r
}) {
  let n;
  if (!t.step || "undefined" == typeof window || "function" != typeof window.addEventListener)
    return;
  rv();
  let o = () => {
      window.removeEventListener?.(g.MYWORKDAY_STEP_CHANGE_EVENT, i), n && clearTimeout(n), tX
        ?.cleanup === o && (tX = null)
    },
    i = n => {
      let i = ry(n);
      t3(t.step, i) && (o(), rw(r, e))
    };
  window.addEventListener(g.MYWORKDAY_STEP_CHANGE_EVENT, i), "function" == typeof window
    .setTimeout && (n = window.setTimeout(() => {
      o(), console.warn("[MyWorkday] skip autofill_answer_pair:", {
        reason: "workday_step_not_advanced",
        bindStep: t.step,
        submitStep: (0, g.getMyWorkdayStepState)()
      })
    }, 3500)), tX = {
      cleanup: o
    }
}

function rE(e, t = {}, r, n) {
  "undefined" != typeof document && "function" == typeof document.querySelectorAll && rh();
  let o = ru(e),
    i = (0, m.getEducationTraceRunIdFromRecords)(o.education) ?? n,
    a = ru((0, x.getFormSnapshot)({
      includeEducationSnapshotIndex: !0,
      includeEducationTrace: !0,
      educationTraceRunId: i ?? void 0
    })),
    {
      education: l,
      employment: s,
      ...u
    } = a,
    {
      education: c,
      employment: d,
      ...f
    } = o,
    p = rf(f, u),
    g = r ? t0() : {
      step: null
    },
    b = r ? t8({
      autofillSnapshot: p,
      additionalSubmitData: {
        education: l,
        employment: s
      },
      bindContext: r,
      submitContext: g,
      submitSnapshot: u
    }) : null;
  return b ? (console.warn("[MyWorkday] skip autofill_answer_pair:", {
    reason: b,
    bindStep: r?.step,
    submitStep: g.step,
    autofillKeys: Object.keys(p),
    submitKeys: Object.keys(u)
  }), null) : (0, h.alignMyWorkdayEducationAnswerPairTrackingData)({
    formUrl: (0, y.useUrlStore).getState().currentTabUrl,
    autofillSnapshot: p,
    submitSnapshot: u,
    additionalAutofillData: {
      education: c,
      employment: d
    },
    additionalSubmitData: {
      education: l,
      employment: s
    },
    extraData: t9({
      bindContext: r,
      extraData: t,
      submitContext: g
    }),
    source: "myworkday"
  })
}

function rx(e, t = {}, r) {
  let n = rE(e, t, r);
  n && rw(n)
}

function rC({
  baseline: e,
  bindContext: t,
  button: r,
  extraData: n
}) {
  return () => {
    let o = rE(e.snapshot, n, t, e.educationTraceRunId);
    if (o) {
      if (rb(r)) {
        rv(), rw(o, e);
        return
      }
      rS({
        baseline: e,
        bindContext: t,
        payload: o
      })
    }
  }
}

function rA(e, t = null, r = {}, n) {
  rt(), t7(t), tW && tW !== t && t7(tW);
  let o = document.querySelector(tV);
  if (!o) return null;
  let i = t0(),
    a = {
      snapshot: tJ(e),
      educationTraceRunId: (0, m.getEducationTraceRunIdFromRecords)(e?.education) ?? n ?? null
    },
    l = rC({
      baseline: a,
      bindContext: i,
      button: o,
      extraData: r
    });
  return o.addEventListener("click", l, !0), tW = {
    button: o,
    handler: l,
    context: i
  }
}

