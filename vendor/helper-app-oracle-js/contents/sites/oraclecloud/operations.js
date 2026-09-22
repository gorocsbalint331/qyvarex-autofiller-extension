/**
 * Parcel module id: gduo7
 * Resolved path: contents/sites/oraclecloud/operations.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  _tilde_contents/methods/observer.js
 *   ~contents/sites/oraclecloud/answer -> 9Ki4d  =>  _tilde_contents/sites/oraclecloud/answer.js
 *   ~contents/sites/oraclecloud/education-client-search -> 883w6  =>  _tilde_contents/sites/oraclecloud/education-client-search.js
 *   ~contents/sites/oraclecloud/education-lov-candidates -> aWY8j  =>  _tilde_contents/sites/oraclecloud/education-lov-candidates.js
 *   ~contents/sites/oraclecloud/url -> 7oftP  =>  _tilde_contents/sites/oraclecloud/url.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~utils/date -> 3fOSF  =>  _tilde_utils/date.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "cleanEduAndExp", () => h), n.export(r, "ensureOracleLinkRows",
    () => I), n.export(r, "fillSelectField", () => et), n.export(r, "fillCheckBoxesField", () =>
  eX), n.export(r, "fillListboxField", () => eJ), n.export(r, "fillRadioGroupField", () => eQ), n
  .export(r, "fillDateField", () => eZ), n.export(r, "saveEducation", () => e1), n.export(r,
    "cancelEducation", () => e3), n.export(r, "saveExperience", () => e4), n.export(r,
    "cancelExperience", () => e5), n.export(r, "addEducation", () => e8), n.export(r,
    "addExperience", () => e9), n.export(r, "fillSkills", () => tm), n.export(r, "fillLanguages",
  () => tE), n.export(r, "uploadResume", () => tx), n.export(r, "hasOracleCoverLetterSlot", () =>
    tP), n.export(r, "uploadCoverLetter", () => tO), n.export(r, "findOracleCoverLetterInput", () =>
    tM), n.export(r, "fillCountry", () => tN), n.export(r, "proceedOracleJobDetailToApply", () =>
    tU), n.export(r, "proceedOracleEmailGateStep", () => tH);
var o = e("@plasmohq/messaging"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/dom"),
  l = e("~contents/methods/observer"),
  s = e("~contents/sites/oraclecloud/answer"),
  u = e("~contents/sites/oraclecloud/url"),
  c = e("~contents/sites/oraclecloud/education-client-search"),
  d = e("~contents/sites/oraclecloud/education-lov-candidates"),
  f = e("~core/xpath"),
  p = e("~utils/date"),
  m = e("~utils/delay");
async function h() {
  let e = async () => {
    let e = (0, f.getFirstOrderedNode)(`//div[@role='dialog' or contains(@class,'app-dialog') or contains(@class,'oj-dialog')]
          //button[
            normalize-space()='Delete'
            or normalize-space()='DELETE'
            or @data-qa='confirmDelete'
            or @data-qa='confirmDeleteButton'
          ]`) || null;
    e && ((0, a.triggerEvents)(e, ["click"]), await (0, m.delay)(200))
  }, t = async t => {
    let r = Date.now() + 6e4;
    for (; Date.now() < r;) {
      let r = (0, f.getOrderedNodes)(
        ".//article[contains(@class, 'apply-flow-profile-item-tile')]", t);
      if (0 === r.length) break;
      let n = r.length,
        o = r[0];
      o.dispatchEvent(new MouseEvent("mouseover", {
        bubbles: !0,
        cancelable: !0,
        view: window
      })), await (0, m.delay)(50);
      let i = (0, f.getFirstOrderedNode)(
          ".//button[contains(@class, 'apply-flow-profile-item-tile__delete-icon')]", o) ||
        null;
      if (!i) break;
      (0, a.triggerEvents)(i, ["click"]), await (0, m.delay)(150), await e();
      let l = !1;
      for (let e = 0; e < 10; e++) {
        await (0, m.delay)(150);
        let e = (0, f.getOrderedNodes)(
          ".//article[contains(@class, 'apply-flow-profile-item-tile')]", t);
        if (e.length < n) {
          l = !0;
          break
        }
      }
      if (!l) {
        console.warn(
          "Failed to delete profile item tile within retries; stop cleanup early to avoid blocking autofill."
          );
        break
      }
    }
  }, r = (0, f.getFirstOrderedNode)(
    '//div[@role="region" and (contains(@aria-label, "Experience") or contains(@aria-label, "Employment"))] | .//timeline-form-builder[@class="timeline-form-dialog__content"] | //div[contains(@class, "apply-flow-block--work-and-education-timeline")]'
    ) || null;
  r && await t(r);
  let n = (0, f.getFirstOrderedNode)(
    "//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class='timeline-form-dialog__content'] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]"
    ) || null;
  n && await t(n);
  let o = document.getElementsByClassName("beautiful-timeline-item");
  for (; o.length > 0;) {
    let e = o[0];
    e?.dispatchEvent(new MouseEvent("mouseover", {
        bubbles: !0,
        cancelable: !0,
        view: window
      })), await (0, m.delay)(50), e?.getElementsByClassName(
        "beautiful-timeline-item__delete-icon")[0]?.dispatchEvent(new MouseEvent("click")),
      await (0, m.delay)(50)
  }
}

function g(e, t = {}) {
  let r = "undefined" != typeof document && "function" == typeof document.getElementById && e.id ?
    document.getElementById(`${e.id}-toggle-button`) : null,
    n = e.getAttribute("aria-controls") || r?.getAttribute("aria-controls") || (e.id ?
      `${e.id}-listbox` : ""),
    o = "undefined" != typeof document && "function" == typeof document.getElementById && n ?
    document.getElementById(n) : null,
    i = o ? Array.from(o.querySelectorAll(
      '[aria-selected="true"], .cx-select__list-item--selected')).map(e => e.textContent?.replace(
      /\s+/g, " ").trim()).filter(Boolean).slice(0, 5) : [];
  return {
    fieldName: e.getAttribute("name"),
    id: e.id,
    role: e.role,
    value: e.value,
    ariaExpanded: e.getAttribute("aria-expanded"),
    ariaControls: e.getAttribute("aria-controls"),
    ariaInvalid: e.getAttribute("aria-invalid"),
    toggleExists: !!r,
    toggleAriaExpanded: r?.getAttribute("aria-expanded"),
    toggleAriaLabel: r?.getAttribute("aria-label"),
    listboxExists: !!o,
    listboxAriaBusy: o?.getAttribute("aria-busy"),
    selectedOptions: i,
    className: "string" == typeof e.className ? e.className : void 0,
    activeElementId: "undefined" != typeof document && "undefined" != typeof Element && document
      .activeElement instanceof Element ? document.activeElement.id : void 0,
    ...t
  }
}

function b(e, t, r = {}) {
  if (!v()) return;
  let n = g(t, r);
  if ((0, s.isOraclePhoneCountryCodeField)(t.id || t.getAttribute("name"))) {
    console.warn(`[OracleCloud][PhoneCountryDebug] ${e} ${JSON.stringify(n)}`);
    return
  }
  console.debug(`[OracleCloud][Combobox] ${e} ${JSON.stringify(n)}`)
}

function y(e, t = {}) {
  let r = e.startsWith("education-client-search:") || e.startsWith("education-major-text:");
  if (v() || r) try {
    console.info(`[OracleCloud][Flow] ${e} ${JSON.stringify({t:Date.now(),...t})}`)
  } catch {}
}

function v() {
  if ("undefined" == typeof window) return !1;
  try {
    let e = new URLSearchParams(window.location?.search ?? "");
    return "1" === e.get("jobright_oraclecloud_combobox_debug") || window.localStorage?.getItem(
      "jobright_oraclecloud_combobox_debug") === "1"
  } catch {
    return !1
  }
}

function w(e) {
  return ["startdate", "enddate"].includes(String(e ?? "").replace(/[^a-zA-Z]/g, "").toLowerCase())
}

function S(e, t, r = {}) {
  if (v() && w(t)) try {
    console.warn(
      `[OracleCloud][TimelineDate] ${e} ${JSON.stringify({t:Date.now(),fieldName:t,...r})}`)
  } catch {}
}

function E(e) {
  return e.map(e => e.textContent?.trim())
}

function x(e) {
  let t = new Map;
  for (let r of e) {
    let e = r.closest?.("[role='option']") || r.closest?.("[role='row']") || r,
      n = t.get(e);
    (!n || C(r) > C(n)) && t.set(e, r)
  }
  return [...t.values()]
}

function C(e) {
  let t = "string" == typeof e.className ? e.className : "";
  return e.classList?.contains("cx-select__list-item--content") || t.split(/\s+/).includes(
    "cx-select__list-item--content") ? 3 : e.closest?.("[role='gridcell']") === e ? 2 : 1
}
let A = `//apply-flow-block[
  .//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'supporting documents and urls')]
]//div[contains(@class, 'input-row')][
  .//label[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'link')]
]//input[not(@type='hidden') and not(@type='file')]`,
  k = `//apply-flow-block[
  .//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'supporting documents and urls')]
]//button[
  contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'add another link')
]`;

function T() {
  return (0, f.getOrderedNodes)(A).filter(e => "function" != typeof e.checkVisibility || e
    .checkVisibility())
}

function F() {
  return (0, f.getFirstOrderedNode)(k)
}
async function I(e) {
  if (!(e <= 1))
    for (; T().length < e;) {
      let e = T().length,
        t = F();
      if (!t || ((0, a.triggerEvents)(t, ["click"]), await (0, l.waitForCondition)(() => T()
          .length > e, {
            timeout: 3e3,
            interval: 100,
            observeTarget: document.body
          }), T().length <= e)) return
    }
}

function j(e) {
  return String(e ?? "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

function D(e) {
  let t = j(e);
  return "school" === t || "schoolname" === t || t.includes("educationalestablishment")
}

function P(e) {
  return "major" === j(e)
}

function _(e) {
  let t = j(e);
  return "degree" === t || t.includes("degree")
}

function L(e) {
  let t = eA(e.textContent).replace(/[.!]+$/g, "");
  return "no results" === t || "no results found" === t || "no results were found" === t
}

function R(e) {
  let t = eA(e.textContent).replace(/[.!]+$/g, "");
  return "no results" === t || /^no results(?: were)? found\b/.test(t)
}

function O(e) {
  return P(e) ? "major" : D(e) ? "school" : null
}
let M = `.//div[@role='row']//div[@role='gridcell']//span[contains(@class,'cx-select__list-item--content')]
  | .//div[@role='row']//div[@role='gridcell'][normalize-space()]
  | .//*[@role='option'][normalize-space()]`;

function N(e) {
  return String(e ?? "").replace(/\s+/g, " ").trim()
}

function $(e) {
  if ("true" === e.getAttribute("aria-hidden")) return !1;
  if ("function" != typeof e.checkVisibility) return !0;
  try {
    return e.checkVisibility({
      checkOpacity: !0,
      checkVisibilityCSS: !0
    })
  } catch {
    return e.checkVisibility()
  }
}

function B(e) {
  let t = new Set,
    r = [],
    n = x((0, f.getOrderedNodes)(M, e)),
    o = 0,
    i = 0,
    a = 0;
  for (let e of n) {
    if (!$(e)) {
      o += 1;
      continue
    }
    if (L(e)) {
      i += 1;
      continue
    }
    let n = N(e.textContent);
    if (!n) {
      a += 1;
      continue
    }
    let l = n.normalize("NFKC").toLowerCase();
    t.has(l) || (t.add(l), r.push({
      element: e,
      text: n
    }))
  }
  return {
    candidates: r.slice(0, 25),
    rawOptionCount: n.length,
    hiddenOptionCount: o,
    noResultOptionCount: i,
    invalidOptionCount: a
  }
}

function q(e) {
  return B(e).candidates
}

function U(e) {
  return e.map(e => e.text).join("\x01")
}

function H(e) {
  return "function" == typeof e.getAttribute ? e.getAttribute("aria-busy") : null
}

function Y(e) {
  return "function" == typeof e.getAttribute ? e.getAttribute("role") : null
}
async function z(e) {
  let t = "undefined" != typeof document && "function" == typeof document.getElementById && e.id ?
    document.getElementById(`${e.id}-toggle-button`) : null,
    r = e.getAttribute("aria-controls") || t?.getAttribute("aria-controls") || (e.id ?
      `${e.id}-listbox` : "");
  return r ? await eU(`//*[@id="${r}"]`, 100, 6) : null
}
async function V(e, t) {
  try {
    let r = await (0, o.sendToBackground)({
        name: "prepareOracleEducationLovCapture",
        body: {
          fieldType: e,
          searchInput: t
        }
      }),
      n = String(r?.captureId ?? "").trim();
    if (n) return n
  } catch (r) {
    y("education-client-search:lov-capture-prepare-error", {
      fieldType: e,
      searchInputLength: t.length,
      errorType: r instanceof Error ? r.name : typeof r
    })
  }
  return y("education-client-search:lov-capture-prepare", {
    fieldType: e,
    prepared: !1,
    searchInputLength: t.length
  }), null
}
async function W(e, t, r) {
  try {
    let n = await (0, o.sendToBackground)({
        name: "consumeOracleEducationLovCapture",
        body: {
          captureId: e
        }
      }),
      i = Array.isArray(n?.items) ? n.items : [],
      a = n?.fieldType === t,
      l = "string" == typeof n?.captureStatus ? n.captureStatus : "unknown";
    return y("education-client-search:lov-capture-consume", {
      fieldType: t,
      searchInputLength: r.length,
      capturedItemCount: i.length,
      captureStatus: l,
      captureDiagnostic: n?.captureDiagnostic,
      matchedFieldType: a
    }), a ? i : []
  } catch (e) {
    return y("education-client-search:lov-capture-consume-error", {
      fieldType: t,
      searchInputLength: r.length,
      errorType: e instanceof Error ? e.name : typeof e
    }), []
  }
}

function G(e, t, r) {
  let n = r.map(({
      text: e
    }) => ({
      text: e
    })),
    o = (0, d.mapOracleEducationLovCandidates)({
      fieldType: e,
      lovItems: t,
      visibleCandidates: n
    });
  return y("education-client-search:lov-candidate-map", {
    fieldType: e,
    ...o.diagnostics
  }), o
}
async function K(e, t, r, n) {
  let o;
  let i = N(r).toLowerCase(),
    a = n.lastSearchIdentity,
    l = await V(t, r);
  y("education-client-search:lov-capture-prepare", {
    fieldType: t,
    prepared: !!l,
    searchInputLength: r.length
  }), await ei(e);
  let s = await z(e);
  if (!s) return n.lastSearchIdentity = i, n.lastSearchInput = r, n.lastCandidates = [], n
    .candidatesBySearchIdentity.set(i, []), y("education-client-search:candidate-capture", {
      fieldType: t,
      fieldName: e.getAttribute("name") || e.id || "unknown",
      searchInputLength: r.length,
      modalFound: !1
    }), [];
  let u = B(s),
    c = u.candidates,
    d = U(c);
  y("education-client-search:candidate-capture", {
    fieldType: t,
    fieldName: e.getAttribute("name") || e.id || "unknown",
    searchInputLength: r.length,
    modalFound: !0,
    initialCandidateCount: c.length,
    initialRawOptionCount: u.rawOptionCount,
    listboxId: s.id || null,
    initialListboxRole: Y(s),
    initialListboxAriaBusy: H(s)
  }), en(e, r);
  let f = l ? W(l, t, r) : Promise.resolve([]),
    p = async e => {
      let r = await f;
      return G(t, r, e)
    }, h = e => (n.lastSearchInput = r, n.lastCandidates = e, n.candidatesBySearchIdentity.set(
      i, e), e), g = ({
      readIndex: e,
      snapshotRecovery: n,
      visibleCandidateCount: o,
      diagnostics: i
    }) => {
      y("education-client-search:candidate-map-mismatch", {
        fieldType: t,
        searchInputLength: r.length,
        readIndex: e,
        snapshotRecovery: n,
        visibleCandidateCount: o,
        ...i
      })
    }, b = "", v = "";
  for (let l = 0; l < 14; l += 1) {
    l > 0 && await (0, m.delay)(250);
    let u = await z(e);
    u && u !== s && (y("education-client-search:listbox-replaced", {
      fieldType: t,
      searchInputLength: r.length,
      readIndex: l,
      sameListboxId: u.id === s.id,
      previousListboxRole: Y(s),
      currentListboxRole: Y(u),
      previousListboxConnected: s.isConnected
    }), s = u);
    let c = B(s),
      f = c.candidates,
      w = [f.length, c.rawOptionCount, c.hiddenOptionCount, c.noResultOptionCount, c
        .invalidOptionCount, H(s) || "none"
      ].join(":");
    (0 === l || w !== v) && (y("education-client-search:candidate-poll", {
      fieldType: t,
      searchInputLength: r.length,
      readIndex: l,
      candidateCount: f.length,
      rawOptionCount: c.rawOptionCount,
      hiddenOptionCount: c.hiddenOptionCount,
      noResultOptionCount: c.noResultOptionCount,
      invalidOptionCount: c.invalidOptionCount,
      listboxId: s.id || null,
      listboxRole: Y(s),
      listboxAriaBusy: H(s)
    }), v = w);
    let S = U(f),
      E = i !== a;
    if (!E || !d || S !== d) {
      if (f.length > 0 && (o = {
          candidates: f.map(e => ({
            ...e
          })),
          readIndex: l
        }), 0 === f.length && o) {
        n.lastSearchIdentity = i;
        let e = await p(o.candidates);
        if (0 === e.candidates.length && e.diagnostics.lovItemCount > 0) {
          g({
            readIndex: l,
            snapshotRecovery: !0,
            visibleCandidateCount: o.candidates.length,
            diagnostics: e.diagnostics
          }), b = S;
          continue
        }
        let a = h(e.candidates);
        return y("education-client-search:candidate-read", {
          fieldType: t,
          searchInputLength: r.length,
          readIndex: l,
          candidateCount: a.length,
          visibleCandidateCount: o.candidates.length,
          noResults: !1,
          snapshotRecovery: !0,
          snapshotReadIndex: o.readIndex
        }), a
      }
      if (0 === f.length && R(s)) {
        n.lastSearchIdentity = i;
        let e = await p([]);
        if (0 === e.candidates.length && e.diagnostics.lovItemCount > 0) {
          g({
            readIndex: l,
            snapshotRecovery: !1,
            visibleCandidateCount: 0,
            diagnostics: e.diagnostics
          }), b = S;
          continue
        }
        let o = h(e.candidates);
        return y("education-client-search:candidate-read", {
          fieldType: t,
          searchInputLength: r.length,
          readIndex: l,
          candidateCount: o.length,
          visibleCandidateCount: 0,
          noResults: !0
        }), o
      }
      if (S && S === b) {
        n.lastSearchIdentity = i;
        let e = await p(f);
        if (0 === e.candidates.length && e.diagnostics.lovItemCount > 0) {
          g({
            readIndex: l,
            snapshotRecovery: !1,
            visibleCandidateCount: f.length,
            diagnostics: e.diagnostics
          });
          continue
        }
        let o = h(e.candidates);
        return y("education-client-search:candidate-read", {
          fieldType: t,
          searchInputLength: r.length,
          readIndex: l,
          candidateCount: o.length,
          visibleCandidateCount: f.length,
          noResults: !1,
          settled: !0
        }), o
      }
      b = S
    }
  }
  return n.lastSearchIdentity = i, n.lastSearchInput = r, n.lastCandidates = [], n
    .candidatesBySearchIdentity.set(i, []), y("education-client-search:candidate-read", {
      fieldType: t,
      searchInputLength: r.length,
      readIndex: 14,
      candidateCount: 0,
      rawOptionCount: B(s).rawOptionCount,
      listboxId: s.id || null,
      listboxRole: Y(s),
      listboxAriaBusy: H(s),
      noResults: !1,
      settled: !1
    }), []
}
async function X(e, t, r, n) {
  let o = N(r.searchInput).toLowerCase(),
    i = (n.candidatesBySearchIdentity.get(o) || []).filter(e => e.value === t.value && e.text ===
      t.text);
  if (1 !== i.length) return y("education-client-search:commit", {
    candidateTextLength: t.text.length,
    candidateValueLength: t.value.length,
    mappedCandidateCount: i.length,
    selectedSearchInputLength: r.searchInput.length,
    reason: "candidate-not-in-selected-round"
  }), !1;
  let a = await z(e),
    s = a ? q(a).filter(e => e.text === t.text) : [],
    u = !a || 1 !== s.length || n.lastSearchIdentity !== o,
    c = !1;
  if (u) {
    c = !0, y("education-client-search:commit-reopen", {
      candidateTextLength: t.text.length,
      candidateValueLength: t.value.length,
      selectedSearchInputLength: r.searchInput.length,
      modalFound: !!a,
      visibleMatchingCandidateCount: s.length,
      lastSearchMatchesSelectedRound: n.lastSearchIdentity === o
    }), await ei(e), en(e, r.searchInput);
    let i = "";
    for (let n = 0; n < 14; n += 1) {
      if (n > 0 && await (0, m.delay)(250), !(a = await z(e))) continue;
      let o = q(a);
      s = o.filter(e => e.text === t.text);
      let l = U(o);
      if (l && l === i && 1 === s.length) {
        y("education-client-search:commit-reopen-ready", {
          candidateTextLength: t.text.length,
          selectedSearchInputLength: r.searchInput.length,
          readIndex: n,
          visibleCandidateCount: o.length
        });
        break
      }
      i = l
    }
  }
  if (!a || 1 !== s.length) return y("education-client-search:commit", {
    candidateTextLength: t.text.length,
    candidateValueLength: t.value.length,
    selectedSearchInputLength: r.searchInput.length,
    modalFound: !!a,
    mappedCandidateCount: i.length,
    visibleMatchingCandidateCount: s.length,
    reopened: c
  }), !1;
  await em(s[0].element);
  let d = await (0, l.waitForCondition)(() => eA(e.value) === eA(t.text) && !e_(e) && "true" !== e
    .getAttribute("aria-expanded"), {
      timeout: 1e3,
      interval: 100,
      observeTarget: "undefined" != typeof document ? document.body : void 0
    });
  if (!d) return y("education-client-search:commit", {
    candidateTextLength: t.text.length,
    candidateValueLength: t.value.length,
    modalFound: !0,
    matchingCandidateCount: 1,
    reopened: c,
    committed: !1
  }), !1;
  await (0, m.delay)(350);
  let f = eA(e.value) === eA(t.text) && !e_(e) && "true" !== e.getAttribute("aria-expanded");
  return y("education-client-search:commit", {
    candidateTextLength: t.text.length,
    candidateValueLength: t.value.length,
    modalFound: !0,
    matchingCandidateCount: 1,
    reopened: c,
    committed: f
  }), f
}
async function J(e, t) {
  let r = "options" in t,
    n = r ? "step" : "start",
    i = r ? t.options.length : 0;
  y("education-client-search:request", {
    fieldType: e,
    requestKind: n,
    currentOptionCount: i,
    hasSessionId: r,
    originalAnswerLength: "original_answer" in t ? t.original_answer.length : 0
  });
  let a = Date.now();
  try {
    let r = await (0, o.sendToBackground)({
      name: "resolveAutofillClientSearchStep",
      body: t
    });
    return y("education-client-search:response", {
      fieldType: e,
      requestKind: n,
      currentOptionCount: i,
      action: r?.action || "missing",
      responseLatencyMs: Date.now() - a
    }), r
  } catch (t) {
    throw y("education-client-search:request-error", {
      fieldType: e,
      requestKind: n,
      currentOptionCount: i,
      errorType: t instanceof Error ? t.name : typeof t
    }), t
  }
}
async function Q(e, t, r, n) {
  let o = N(e.value),
    i = N(r.lastSearchInput),
    a = !!i && o === i;
  if (!a) {
    y("education-client-search:uncommitted-clear", {
      fieldType: t,
      failureReason: n,
      cleared: !1,
      reason: "input-not-current-search"
    });
    return
  }
  e.focus(), en(e, ""), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), e.blur(), await (0, m.delay)(100), y("education-client-search:uncommitted-clear", {
    fieldType: t,
    failureReason: n,
    cleared: !N(e.value)
  })
}
async function Z(e, t, r, n) {
  let o = r.trim();
  if (!o) return y("education-client-search:return-empty-raw-fallback", {
    fieldType: t,
    source: n,
    rawValueLength: 0,
    filled: !1
  }), !1;
  let i = String(e.getAttribute("name") || e.id || "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if ("school" === t && i.includes("educationalestablishmentid")) return y(
    "education-client-search:return-empty-raw-fallback", {
      fieldType: t,
      source: n,
      rawValueLength: o.length,
      filled: !1,
      reason: "selected-id-required"
    }), !1;
  e.focus(), en(e, o), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), "undefined" != typeof document && document.body && (0, a.triggerEvents)(document.body, [
    "mousedown", "mouseup", "click"
  ]), e.blur(), await (0, m.delay)(100);
  let l = e.value === o;
  return y("education-client-search:return-empty-raw-fallback", {
    fieldType: t,
    source: n,
    rawValueLength: o.length,
    filled: l
  }), l
}
async function ee(e, t, r, n, o = "raw") {
  let i = r.trim();
  if (!i) return y("education-client-search:skip", {
    fieldType: t,
    reason: "empty-original-answer",
    rawFallbackValueLength: n?.trim().length || 0,
    returnEmptyFallbackSource: o
  }), !1;
  let a = {
    lastSearchIdentity: "",
    lastSearchInput: "",
    lastCandidates: [],
    candidatesBySearchIdentity: new Map
  };
  y("education-client-search:start", {
    fieldType: t,
    originalAnswerLength: i.length,
    rawFallbackValueLength: n?.trim().length || 0,
    returnEmptyFallbackSource: o
  });
  let l = await (0, c.runOracleEducationClientSearch)({
    fieldType: t,
    originalAnswer: r,
    deps: {
      requestStep: e => J(t, e),
      captureCandidates: r => K(e, t, r, a),
      commitCandidate: (t, r) => X(e, t, r, a)
    }
  });
  return y("education-client-search:done", {
    fieldType: t,
    success: l.success,
    actions: l.actions,
    actionCount: l.actions.length,
    roundCount: l.rounds.length,
    roundCandidateCounts: l.rounds.map(e => e.candidateCount),
    failureReason: l.failureReason
  }), !!l.success || ("return_empty" !== l.failureReason ? (await Q(e, t, a, l.failureReason), !
    1) : await Z(e, t, n || "", o))
}
async function et(e, t, r, n = {}) {
  if ("combobox" === e.role) {
    let o = (0, s.isOraclePhoneCountryCodeField)(r) || eD(r) ? r : e.getAttribute("name") || e
      .id || e.getAttribute("id"),
      i = (0, s.isOracleAddressSelectField)(o),
      a = D(o),
      l = P(o),
      u = O(o),
      c = _(o),
      d = Date.now(),
      p = w(o);
    if (u) {
      let r = "school" === u ? n.rawSchool : n.rawMajor || n.rawDegree,
        o = r || ("school" === u ? String(t ?? "") : ""),
        i = r || "",
        a = r ? "raw" : "answer";
      return y("education-client-search:source", {
        fieldType: u,
        answerLength: String(t ?? "").trim().length,
        rawSchoolLength: n.rawSchool?.trim().length || 0,
        rawMajorLength: n.rawMajor?.trim().length || 0,
        rawDegreeLength: n.rawDegree?.trim().length || 0,
        originalAnswerSource: r ? "major" !== u || n.rawMajor ? "raw" : "raw-degree" :
          "major" === u ? "missing-raw-major-and-degree" : "answer",
        returnEmptyFallbackSource: a,
        returnEmptyFallbackValueLength: i.trim().length
      }), await ee(e, u, o, i, a)
    }
    let h = (0, s.isOraclePhoneCountryCodeField)(o) && eR(t);
    if ((ej(o) || h) && eB(e, t, o)) return b("already-committed", e, {
      expectedValue: t
    }), !0;
    await ei(e), await (0, m.delay)(150), await (0, m.delay)(50), S("opened", o, {
      ariaControlsPresent: !!eo(e),
      ariaExpanded: "true" === e.getAttribute("aria-expanded")
    });
    let g = eP(o),
      v = g ? 6 : 14,
      C = `.//div[@role='row']//div[@role='gridcell']//span[contains(@class,'cx-select__list-item--content')]
      | .//div[@role='row']//div[@role='gridcell'][normalize-space()]
      | .//*[@role='option'][normalize-space()]`,
      A = g ? 2 : i ? 5 : c || l ? 2 : 1;
    b("start", e, {
      expectedValue: t,
      isAddressSelect: i,
      isEducationSchoolSelect: a,
      isEducationMajorSelect: l,
      isEducationDegreeSelect: c,
      modalId: eo(e),
      retryLimit: A
    });
    let k = async (r, n = t) => {
      let a = eo(e),
        u = g;
      u && (b("set-search-value:before", e, {
        expectedValue: t,
        searchValue: r
      }), en(e, r), b("set-search-value:after", e, {
        expectedValue: t,
        searchValue: r
      }));
      let d = eo(e),
        h = `//*[@id="${d}"]`;
      u && y("address:listbox-after-search", {
        searchValueLength: r.trim().length,
        listboxIdChanged: a !== d
      }), b("wait-listbox:start", e, {
        expectedValue: t,
        searchValue: r,
        modalId: d
      });
      let w = Date.now(),
        A = await eU(h, 500, v);
      if (p && S("listbox-read", o, {
          found: !!A,
          modalIdPresent: !!d,
          elapsedMs: Date.now() - w
        }), y("select:modal-wait", {
          name: o,
          searchValue: r,
          found: !!A,
          ms: Date.now() - w
        }), u && y("address:listbox-wait", {
          searchValueLength: r.trim().length,
          listboxIdChanged: a !== d,
          found: !!A,
          ms: Date.now() - w
        }), !A) return b("wait-listbox:missing", e, {
        expectedValue: t,
        searchValue: r,
        modalId: d
      }), {
        modalElement: null,
        optionElements: [],
        hasNoResults: !1
      };
      u || (b("set-search-value:before", e, {
        expectedValue: t,
        searchValue: r
      }), en(e, r), b("set-search-value:after", e, {
        expectedValue: t,
        searchValue: r
      }));
      let k = ej(o),
        T = k ? 14 : i ? 8 : c || l ? 8 : 2,
        F = k ? 300 : 250,
        I = k || c || l ? 250 : 150,
        j = [];
      for (let i = 0; i < T; i++) {
        i > 0 && await (0, m.delay)(1 === i ? F : I);
        let a = x((0, f.getOrderedNodes)(C, A));
        j = a.filter(e => !L(e));
        let l = 0 === j.length && (a.some(L) || R(A)),
          u = E(j),
          c = (0, s.findOracleSelectOptionIndex)(n, u, o);
        if (b("read-options", e, {
            expectedValue: t,
            searchValue: r,
            readIndex: i,
            optionCount: u.length,
            optionTexts: u.slice(0, 12),
            matchedIndex: c
          }), -1 !== c || l) return {
          modalElement: A,
          optionElements: j,
          hasNoResults: l
        }
      }
      return {
        modalElement: A,
        optionElements: j,
        hasNoResults: !1
      }
    };
    for (let r = 0; r < A; r++) {
      y("select:attempt", {
        name: o,
        attempt: r,
        retryLimit: A,
        elapsedMs: Date.now() - d
      }), b("attempt:start", e, {
        expectedValue: t,
        attempt: r,
        retryLimit: A
      }), r > 0 && (await (0, m.delay)(600 + 300 * r), b("attempt:reopen-before", e, {
        expectedValue: t,
        attempt: r
      }), await ei(e), await (0, m.delay)(150), b("attempt:reopen-after", e, {
        expectedValue: t,
        attempt: r
      }));
      let n = await k(t),
        a = n.optionElements,
        u = E(a),
        c = (0, s.findOracleSelectOptionIndex)(t, u, o),
        f = er(o, t);
      if (-1 === c && f && (y("postal-prefix-search:start", {
          name: o,
          attempt: r,
          expectedLength: t.length,
          prefixLength: f.length,
          priorNoResults: n.hasNoResults
        }), u = E(a = (n = await k(f, t)).optionElements), c = (0, s
          .findOracleSelectOptionIndex)(t, u, o), y("postal-prefix-search:done", {
          name: o,
          attempt: r,
          optionCount: u.length,
          matched: c,
          noResults: n.hasNoResults
        })), n.hasNoResults) return b("no-results:close", e, {
        expectedValue: t,
        attempt: r
      }), await eu(e), !1;
      if (0 === a.length && !e.value?.trim() && !eP(o)) {
        let i = ej(o) ? t : t.substring(0, Math.ceil(t.length / 2));
        b("fallback-search:start", e, {
            expectedValue: t,
            attempt: r,
            fallbackValue: i
          }), en(e, i), await (0, m.delay)(1100), u = E(a = (n = await k(i)).optionElements), c =
          (0, s.findOracleSelectOptionIndex)(t, u, o)
      }
      if (y("select:options", {
          name: o,
          attempt: r,
          optionCount: u.length,
          matched: c,
          elapsedMs: Date.now() - d
        }), b("match-options", e, {
          expectedValue: t,
          attempt: r,
          matchedIndex: c,
          optionCount: u.length,
          optionTexts: u.slice(0, 12)
        }), p && S("option-match", o, {
          attempt: r,
          optionCount: u.length,
          matched: c
        }), -1 === c && eP(o) && 1 === u.length && b("address-line:sole-option", e, {
          expectedValue: t,
          attempt: r,
          optionText: u[c = 0]
        }), -1 === c && ej(o) && n.modalElement) {
        let r = await ey({
          element: e,
          expectedValue: t,
          fieldName: o,
          modalElement: n.modalElement,
          optionXPath: C
        });
        r && (a = r.optionElements, c = r.matchedIndex)
      }
      if (-1 !== c) {
        let n = E(a)[c],
          u = (0, s.isOraclePhoneCountryCodeField)(o) && n ? n : t;
        b("select-option:before", e, {
          expectedValue: t,
          attempt: r,
          matchedIndex: c,
          optionText: n
        }), await em(a[c]), p && S("option-clicked", o, {
          attempt: r,
          matched: c
        }), b("select-option:after", e, {
          expectedValue: t,
          attempt: r,
          matchedIndex: c,
          optionText: n
        });
        let d = await eq(e, u, o);
        if (p && S("commit-after-click", o, {
            attempt: r,
            committed: d
          }), b("commit-check:after-click", e, {
            expectedValue: t,
            attempt: r,
            committed: d
          }), !d && ej(o) && (d = await eh({
            optionElement: a[c],
            inputElement: e,
            expectedValue: u,
            fieldName: o,
            attempt: r
          }), b("commit-check:after-alternate-targets", e, {
            expectedValue: t,
            attempt: r,
            committed: d
          })), !d && ej(o) && (b("keyboard-confirm-current:before", e, {
            expectedValue: t,
            attempt: r
          }), await eC(e, "confirm-current"), b("keyboard-confirm-current:after", e, {
            expectedValue: t,
            attempt: r
          }), d = await eq(e, u, o), b("commit-check:after-confirm-current", e, {
            expectedValue: t,
            attempt: r,
            committed: d
          })), d || (b("keyboard-select:before", e, {
            expectedValue: t,
            attempt: r
          }), await eC(e), b("keyboard-select:after", e, {
            expectedValue: t,
            attempt: r
          }), d = await eq(e, u, o), b("commit-check:after-keyboard-select", e, {
            expectedValue: t,
            attempt: r,
            committed: d
          })), d && l && (await (0, m.delay)(350), d = eB(e, t, o), b("commit-check:major-stable",
            e, {
              expectedValue: t,
              attempt: r,
              committed: d
            })), !d) {
          b("attempt:not-committed", e, {
            expectedValue: t,
            attempt: r
          });
          continue
        }
        if (ej(o) ? b("close-committed:skipped-country", e, {
            expectedValue: t,
            attempt: r
          }) : l ? b("close-committed:skipped-major", e, {
            expectedValue: t,
            attempt: r
          }) : (b("close-committed:before", e, {
            expectedValue: t,
            attempt: r
          }), await ec(e), b("close-committed:after", e, {
            expectedValue: t,
            attempt: r
          })), i && (await (0, m.delay)(ej(o) ? 1200 : 800), b("address-dependent-delay:after",
          e, {
            expectedValue: t,
            attempt: r
          })), ej(o) && eB(e, u, o) && (b("country-close-after-dependent:before", e, {
            expectedValue: t,
            attempt: r
          }), await ed(e), b("country-close-after-dependent:after", e, {
            expectedValue: t,
            attempt: r
          })), eB(e, u, o)) return b("success", e, {
          expectedValue: t,
          attempt: r
        }), !0;
        b("post-close:not-committed", e, {
          expectedValue: t,
          attempt: r
        })
      }
    }
    return b("failed:no-cleanup", e, {
      expectedValue: t
    }), !1
  }
  let o = (0, f.getFirstOrderedNode)(
    "./ancestor::div[contains(@class, 'input-field-container__left')]/following-sibling::div[contains(@class, 'input-field-container__right')]//button[contains(@class, 'icon-dropdown-arrow icon-dropdown-arrow__open')]",
    e);
  return o ? ((0, a.triggerEvents)(o, ["click", "mousedown", "mouseup"]), await (0, m.delay)(200),
    !0) : (e.blur(), !1)
}

function er(e, t) {
  let r = String(e ?? "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (!new Set(["postalcode", "zipcode", "zip"]).has(r)) return null;
  let n = t.replace(/[^a-zA-Z0-9]/g, "");
  return n.length <= 3 ? null : n.slice(0, 3)
}

function en(e, t) {
  el(e, t);
  let r = "function" == typeof InputEvent ? new InputEvent("input", {
    bubbles: !0,
    cancelable: !0,
    data: t,
    inputType: "insertText"
  }) : new Event("input", {
    bubbles: !0,
    cancelable: !0
  });
  e.dispatchEvent(r)
}

function eo(e) {
  let t = e.getAttribute("aria-controls")?.trim();
  if (t) return t;
  let r = "undefined" != typeof document && "function" == typeof document.getElementById && e.id ?
    document.getElementById(`${e.id}-toggle-button`) : null,
    n = r?.getAttribute("aria-controls")?.trim();
  return n || `${e.id}-listbox`
}
async function ei(e) {
  e.focus();
  let t = "undefined" != typeof document && "function" == typeof document.getElementById && e.id ?
    document.getElementById(`${e.id}-toggle-button`) : null;
  if (t) {
    let r = "true" === e.getAttribute("aria-expanded") || "true" === t.getAttribute(
      "aria-expanded");
    if (!r) {
      e.dispatchEvent(es("keydown", "ArrowDown")), e.dispatchEvent(es("keyup", "ArrowDown")),
        await (0, m.delay)(100);
      let r = "true" === e.getAttribute("aria-expanded") || "true" === t.getAttribute(
        "aria-expanded") || !!document.getElementById(eo(e));
      r || ea(e, t)
    }
    return
  }
  e.click()
}

function ea(e, t) {
  let r = () => "true" === e.getAttribute("aria-expanded") || "true" === t.getAttribute(
    "aria-expanded") || !!("undefined" != typeof document && "function" == typeof document
    .getElementById && e.id && document.getElementById(eo(e)));
  for (let e of ["pointerover", "mouseover", "pointerenter", "mouseenter", "pointerdown",
      "mousedown", "pointerup", "mouseup"
    ])
    if (ex(t, e), r()) return;
  t.click?.()
}

function el(e, t) {
  let r = Object.getPrototypeOf(e),
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : e.value = t
}

function es(e, t) {
  return "function" == typeof KeyboardEvent ? new KeyboardEvent(e, {
    key: t,
    code: t,
    bubbles: !0,
    cancelable: !0
  }) : new Event(e, {
    bubbles: !0,
    cancelable: !0
  })
}
async function eu(e) {
  e.dispatchEvent(es("keydown", "Escape")), e.dispatchEvent(es("keyup", "Escape")), e.blur(),
    "undefined" != typeof document && document.body && (0, a.triggerEvents)(document.body, [
      "mousedown", "mouseup", "click"
    ]), await (0, m.delay)(50)
}
async function ec(e) {
  if ("false" === e.getAttribute("aria-expanded")) {
    await (0, m.delay)(50);
    return
  }
  e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), await eu(e)
}
async function ed(e) {
  let t = ef(e, "close");
  if (!t) {
    await (0, m.delay)(100);
    return
  }
  ep(t), await (0, m.delay)(200)
}

function ef(e, t) {
  let r = "close" === t ? "close the drop-down list" : "open the drop-down list",
    n = e.parentElement;
  for (let e = 0; n && e < 8; e++) {
    let e = "function" == typeof n.querySelectorAll ? Array.from(n.querySelectorAll("button")) : [],
      t = e.find(e => {
        let t = e.getAttribute("aria-label") || e.getAttribute("title") || e.textContent || "";
        return t.trim().toLowerCase().startsWith(r)
      });
    if (t) return t;
    n = n.parentElement
  }
  return null
}

function ep(e) {
  for (let t of ["pointerover", "mouseover", "pointerenter", "mouseenter", "pointerdown",
      "mousedown", "pointerup", "mouseup"
    ]) ex(e, t);
  e.click?.()
}
async function em(e) {
  let t = eg(e)[0];
  t && (t.scrollIntoView?.({
    block: "nearest",
    inline: "nearest"
  }), t.click?.(), await (0, m.delay)(200))
}
async function eh({
  optionElement: e,
  inputElement: t,
  expectedValue: r,
  fieldName: n,
  attempt: o
}) {
  let i = eg(e);
  for (let e = 1; e < i.length; e++) {
    let a = i[e];
    b("alternate-target:before", t, {
      expectedValue: r,
      attempt: o,
      targetIndex: e,
      targetText: a.textContent?.trim()
    }), eb(a), await (0, m.delay)(250);
    let l = await eq(t, r, n);
    if (b("alternate-target:after", t, {
        expectedValue: r,
        attempt: o,
        targetIndex: e,
        committed: l
      }), l) return !0
  }
  return !1
}

function eg(e) {
  let t = [],
    r = e => {
      let r = e;
      !r || "isConnected" in r && !1 === r.isConnected || t.includes(r) || t.push(r)
    };
  return r(e.closest?.("[role='gridcell']")), r(e.closest?.("[role='option']")), r(e), r(e.closest?.
    ("[role='row']")), t
}

function eb(e) {
  e.scrollIntoView?.({
    block: "nearest",
    inline: "nearest"
  }), eE(e)
}
async function ey({
  element: e,
  expectedValue: t,
  fieldName: r,
  modalElement: n,
  optionXPath: o
}) {
  let i = ev(n);
  if (!i.length) return b("country-scroll-search:no-scroller", e, {
    expectedValue: t
  }), null;
  for (let a of i) {
    let i = Math.max(0, a.scrollHeight - a.clientHeight);
    for (let l of eS(i)) {
      a.scrollTop = l, a.dispatchEvent?.(new Event("scroll", {
        bubbles: !0
      })), await (0, m.delay)(180);
      let i = x((0, f.getOrderedNodes)(o, n).filter(e => !L(e))),
        u = E(i),
        c = (0, s.findOracleSelectOptionIndex)(t, u, r);
      if (b("country-scroll-search:read-options", e, {
          expectedValue: t,
          matchedIndex: c,
          optionCount: u.length,
          optionTexts: u.slice(0, 12),
          scrollTop: l
        }), -1 !== c) return {
        optionElements: i,
        matchedIndex: c
      }
    }
  }
  return null
}

function ev(e) {
  let t = [],
    r = e => {
      ew(e) && (t.includes(e) || t.push(e))
    };
  if (r(e), "function" == typeof e.querySelectorAll)
    for (let t of Array.from(e.querySelectorAll("*"))) r(t);
  return t
}

function ew(e) {
  let t = e;
  return !!t && "number" == typeof t.scrollTop && "number" == typeof t.scrollHeight && "number" ==
    typeof t.clientHeight && t.scrollHeight > t.clientHeight + 20
}

function eS(e) {
  if (e <= 0) return [0];
  let t = new Set;
  for (let r of [0, .15, .3, .45, .6, .75, .88, 1]) t.add(Math.round(e * r));
  let r = 400;
  for (let n = 0; n <= e; n += r) t.add(n);
  return t.add(e), [...t].sort((e, t) => e - t)
}

function eE(e) {
  for (let t of ["pointerover", "mouseover", "pointerenter", "mouseenter", "pointerdown",
      "mousedown", "pointerup", "mouseup", "click"
    ]) ex(e, t);
  e.click?.()
}

function ex(e, t) {
  let r = "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : null,
    n = r ? r.left + r.width / 2 : 0,
    o = r ? r.top + r.height / 2 : 0,
    i = "pointerdown" === t || "mousedown" === t,
    a = {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      buttons: i ? 1 : 0,
      clientX: n,
      clientY: o,
      ..."undefined" != typeof window ? {
        view: window
      } : {}
    },
    l = t.startsWith("pointer") && "function" == typeof PointerEvent ? new PointerEvent(t, {
      ...a,
      pointerType: "mouse",
      isPrimary: !0
    }) : "function" == typeof MouseEvent ? new MouseEvent(t, a) : new Event(t, {
      bubbles: !0,
      cancelable: !0
    });
  e.dispatchEvent(l)
}
async function eC(e, t = "default") {
  if ("confirm-current" === t) {
    e.dispatchEvent(es("keydown", "Enter")), e.dispatchEvent(es("keyup", "Enter")), await (0, m
      .delay)(250);
    return
  }
  e.dispatchEvent(es("keydown", "ArrowDown")), e.dispatchEvent(es("keyup", "ArrowDown")), e
    .dispatchEvent(es("keydown", "Enter")), e.dispatchEvent(es("keyup", "Enter")), await (0, m
      .delay)(200)
}

function eA(e) {
  return "string" == typeof e ? e.replace(/\s+/g, " ").trim().toLowerCase() : ""
}

function ek(e) {
  return String(e ?? "").replace(/[\u2019']/g, "").replace(/[\u2010-\u2015]/g, "-").replace(
    /[./_-]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase()
}

function eT(e) {
  let t = ek(e.getAttribute?.("aria-label"));
  if ("degree" === t) return !0;
  let r = ek(e.closest?.(".input-row")?.textContent);
  return r.startsWith("degree ")
}

function eF(e) {
  let t = ek(e);
  return t ? /\bmba\b/.test(t) ? "mba" : /\bhigh school\b/.test(t) ? "highschool" : /\bged\b/.test(
      t) ? "ged" : /\b(?:associate|associates)\b/.test(t) ? "associate" :
    /\b(?:bachelor|bachelors|bs|ba|bsc)\b/.test(t) ? "bachelor" : /\b(?:master|masters|ms|ma|msc)\b/
    .test(t) ? "master" : /\b(?:doctor|doctorate|phd|ph d)\b/.test(t) ? "doctor" :
    /\b(?:jd|j d|juris doctor)\b/.test(t) ? "jd" : /\bpost\s*graduate\b.*\bdiploma\b/.test(t) ?
    "postgraduatediploma" : /\bcollege\b.*\bdiploma\b/.test(t) ? "collegediploma" : /\btrade\b/
    .test(t) ? "trade" : /\bother\b/.test(t) ? "other" : /\bnone|no degree\b/.test(t) ? "none" : t :
    ""
}

function eI(e, t, r) {
  if (r) {
    let r = eF(e);
    return t.some(e => {
      let t = eF(e);
      return !!t && t === r
    })
  }
  let n = ek(e);
  return t.some(e => ek(e) === n)
}

function ej(e) {
  return e?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === "country"
}

function eD(e) {
  return e?.trim().toLowerCase() === "country"
}

function eP(e) {
  let t = e?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return "address1" === t || "addressline1" === t
}

function e_(e) {
  return e.classList?.contains("cx-select-input--invalid") || "true" === e.getAttribute(
    "aria-invalid")
}

function eL(e) {
  return String(e ?? "").match(/\+(\d{1,4})\b/)?.[1] ?? ""
}

function eR(e) {
  return /^\s*\(?\+\d{1,4}\)?\s*$/.test(String(e ?? ""))
}

function eO() {
  return "undefined" != typeof document && !!document.querySelector(
    'input[name="addressLine1"], input[name="city"], input[name="region2"], input[name="postalCode"], input[name="region1"]'
    )
}

function eM(e) {
  let t = e;
  for (let e = 0; t && e < 12; e++) {
    if (t.textContent?.replace(/\s+/g, " ").includes("dependent drop-down lists")) return !0;
    t = t.parentElement
  }
  return !1
}

function eN(e) {
  let t = e.parentElement;
  for (let e = 0; t && e < 8; e++) {
    let e = Array.from(t.querySelectorAll("button")).filter(e =>
      "Remove value for the Country field." === e.getAttribute("aria-label"));
    if (1 === e.length) return e[0];
    if (e.length > 1) break;
    t = t.parentElement
  }
  return null
}
async function e$(e) {
  let t = eN(e);
  if (y("country:dependent-reset:prepare", {
      hasExistingCountry: !!eA(e.value),
      hasClearButton: !!t,
      dependentFieldsPresent: eO()
    }), !t) return console.warn(
    "[oraclecloud][country] native dependent-address clear button unavailable"), !1;
  t.click();
  let r = await (0, l.waitForCondition)(() => "" === eA(e.value) && !eO(), {
    timeout: 3e3,
    interval: 50,
    observeTarget: document.body
  });
  return y("country:dependent-reset:result", {
    resetConfirmed: r,
    countryCleared: "" === eA(e.value),
    dependentFieldsPresent: eO()
  }), r || console.warn(
    "[oraclecloud][country] native dependent-address reset was not confirmed"), r
}

function eB(e, t, r) {
  let n = "string" == typeof e.value ? e.value : "",
    o = eA(e.value);
  if (!o || e_(e)) return !1;
  if ((0, s.isOraclePhoneCountryCodeField)(r)) {
    let e = eL(t),
      r = eL(n);
    return !!e && e === r
  }
  return ej(r) ? o === eA(t) && (!eM(e) || eO()) : !P(r) || o === eA(t) && "true" !== e
    .getAttribute("aria-expanded")
}
async function eq(e, t, r) {
  return await (0, l.waitForCondition)(() => eB(e, t, r), {
    timeout: ej(r) ? 8e3 : 1e3,
    interval: 100,
    observeTarget: "undefined" != typeof document ? document.body : void 0
  })
}
async function eU(e, t = 500, r = 10) {
  let n = 0,
    o = null;
  for (; !o && n < r;) !(o = (0, f.getFirstOrderedNode)(e)) && (await (0, m.delay)(t), n++);
  return o
}

function eH(e) {
  return String(e ?? "").replace(/[./_-]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase()
}

function eY(e) {
  let t = eH(e);
  return ["true", "1", "yes"].includes(t)
}

function ez(e) {
  let t = eH(e);
  return ["false", "0", "no", "decline to state"].includes(t)
}

function eV(e) {
  if (!1 !== e.isConnected) return e;
  if (!e.id || !e.ownerDocument) return null;
  let t = Array.from(e.ownerDocument.querySelectorAll("input")).filter(t => t.id === e.id);
  if (1 !== t.length) return null;
  let r = t[0];
  return r.isConnected && r.type === e.type && r.name === e.name ? r : null
}

function eW(e) {
  let t = Array.from(e.labels || []).filter(t => t.htmlFor === e.id && t.classList.contains(
    "apply-flow-input-checkbox"));
  return 1 !== t.length ? null : t[0].querySelector(".apply-flow-input-checkbox__button")
}

function eG(e) {
  let t = eV(e);
  if (!t?.checked) return !1;
  let r = eW(t);
  return !r || r.classList.contains("apply-flow-input-checkbox__button--checked")
}
async function eK(e, t, r) {
  let n = eV(e);
  if (!n || n.disabled) return !1;
  let o = eH(r),
    i = t.some(e => {
      if (eY(e)) return !0;
      let t = eH(e);
      return !!o && t === o
    });
  if (!i && t.some(ez)) return !n.checked;
  if (i && !n.checked) {
    let e = eW(n);
    (e || n).click(), await (0, m.delay)(50)
  }
  if (!i) return !1;
  let a = await (0, l.waitForCondition)(() => eG(n), {
    timeout: 1e3,
    interval: 50,
    observeTarget: n.ownerDocument?.body
  });
  return a && eG(n)
}
async function eX(e, t) {
  let r = Array.isArray(t) ? t : [t],
    n = !1;
  for (let t = 0; t < e.$checkboxs.length; t++) {
    let o = e.$checkboxs[t],
      i = e.options?.[t],
      a = await eK(o, r, i),
      l = eV(o);
    if (l && (e.$checkboxs[t] = l, e.$input === o && (e.$input = l)), "Current Job" === e.label &&
      v()) {
      let e = l?.closest?.(".input-row"),
        t = e?.closest("form-builder");
      y("employment:current-job-state", {
        originalConnected: o.isConnected,
        liveConnected: l?.isConnected,
        checked: l?.checked,
        visualChecked: !!e?.querySelector(".apply-flow-input-checkbox__button--checked"),
        endFields: Array.from(t?.querySelectorAll('input[name="endDate"]') || []).map(e => ({
          readOnly: e.readOnly,
          disabled: e.disabled,
          required: !!e.closest(".input-row")?.querySelector(
            ".input-row__label--required-star")
        }))
      })
    }
    a && (n = !0)
  }
  return n
}
async function eJ(e, t) {
  let r = Array.isArray(t) ? t : [t],
    n = eT(e),
    o = (0, f.getOrderedNodes)('.//span[contains(@class, "cx-select-pill-name")]', e),
    i = !1;
  for (let e of o) {
    let t = e.textContent?.trim();
    if (eI(t, r, n)) {
      let t = (0, f.getFirstOrderedNode)("./ancestor::button", e);
      t && !t.classList.contains("cx-select-pill-section--selected") && (t.click(), await (0, m
        .delay)(1e3)), i = !0
    }
  }
  return i
}
async function eQ(e, t) {
  let r = !1,
    n = (0, f.getOrderedNodes)(
      ".//label[contains(@class, 'apply-flow-input-checkbox') or contains(@class, 'apply-flow-input-radio')]",
      e);
  for (let e = 0; e < n.length; e++) {
    let o = n[e],
      i = o.getAttribute("for"),
      a = document.getElementById(i),
      l = o.textContent?.trim();
    if (l && t.includes(l)) {
      if (a.checked) {
        r = !0;
        continue
      }
      a.click(), await (0, m.delay)(200), r = !0
    }
  }
}
async function eZ(e, t) {
  let r = "string" == typeof t ? t.trim() : String(t ?? "");
  if (!r) return !1;
  let n = (0, f.getOrderedNodes)(".//input[contains(@class,'cx-select-input')]", e.$input),
    o = (0, f.getOrderedNodes)(".//span[contains(@class,'input-field__label')]", e.$input),
    i = ["month", "day", "year"],
    a = !1;
  for (let e = 0; e < n.length && e < i.length; e++) {
    let t = o[e]?.textContent?.trim() || i[e],
      l = (0, p.transFormDateNumberToEg)(r, t.toLowerCase());
    if (!l || "NaN" === l) return !1;
    let s = await et(n[e], l);
    if (!s) return !1;
    a = !0, await (0, m.delay)(300)
  }
  return a
}

function e0(e) {
  return tt(e)
}
async function e2(e, t, r) {
  let n = () => (0, f.getOrderedNodes)(".//p[contains(@class, 'input-row__validation')]", e).some(
      e => {
        let t = e;
        return !!t.textContent?.trim() && tt(t)
      }),
    o = await (0, l.waitForCondition)(() => n() || !e0(t), {
      timeout: 5e3,
      interval: 100,
      observeTarget: "undefined" != typeof document ? document.body : void 0
    }),
    i = o && !n() && !e0(t);
  return !i && r && (y("timeline:save-validation", {
    saveDisabled: t.disabled,
    fields: (0, f.getOrderedNodes)(".//p[contains(@class, 'input-row__validation')]", e)
      .map(e => {
        let t = e.closest?.(".input-row"),
          r = e.textContent || "";
        return {
          label: t?.querySelector("form-element-label")?.textContent?.replace(/\s+/g, " ")
            .trim(),
          visible: tt(e),
          messageLength: r.trim().length,
          requiredMessage: /required|must enter/i.test(r),
          incompleteDateMessage: /whole date/i.test(r),
          inputs: Array.from(t?.querySelectorAll("input") || []).map(e => ({
            name: e.name,
            valueLength: e.value.length,
            readOnly: e.readOnly,
            invalid: e.getAttribute("aria-invalid")
          }))
        }
      })
  }), (0, a.triggerEvents)(r, ["click"]), await (0, l.waitForCondition)(() => !e0(t), {
    timeout: 5e3,
    interval: 100,
    observeTarget: "undefined" != typeof document ? document.body : void 0
  })), i
}
async function e1() {
  let e = (0, f.getFirstOrderedNode)(
    "//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]"
    ) || null;
  if (e) {
    let t = (0, f.getFirstOrderedNode)(
      ".//button[contains(@class, 'button app-dialog__footer-button save-btn')]", e) || null;
    if (t) {
      (0, a.triggerEvents)(t, ["click"]);
      let r = (0, f.getFirstOrderedNode)(
        ".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]", e) || null;
      return await e2(e, t, r)
    }
  }
  return !1
}
async function e3() {
  let e = (0, f.getFirstOrderedNode)(
    "//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]"
    ) || null;
  if (e) {
    let t = (0, f.getFirstOrderedNode)(
        ".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]", e) || null,
      r = (0, f.getFirstOrderedNode)(
        ".//button[contains(@class, 'button app-dialog__footer-button save-btn')]", e) || null;
    return t ? ((0, a.triggerEvents)(t, ["click"]), await (0, l.waitForCondition)(() => !e0(t) &&
      (!r || !e0(r)), {
        timeout: 5e3,
        interval: 100,
        observeTarget: "undefined" != typeof document ? document.body : void 0
      })) : !r || !e0(r)
  }
  return !0
}
async function e4() {
  let e = (0, f.getFirstOrderedNode)(
    "//div[@role='region' and (contains(@aria-label, 'Experience') or contains(@aria-label, 'Employment'))] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]"
    ) || null;
  if (e) {
    let t = (0, f.getFirstOrderedNode)(
      ".//button[contains(@class, 'button app-dialog__footer-button save-btn')]", e) || null;
    if (t) {
      (0, a.triggerEvents)(t, ["click"]);
      let r = (0, f.getFirstOrderedNode)(
        ".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]", e) || null;
      return await e2(e, t, r)
    }
  }
  return !1
}
async function e5() {
  let e = (0, f.getFirstOrderedNode)(
    "//div[@role='region' and (contains(@aria-label, 'Experience') or contains(@aria-label, 'Employment'))] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]"
    ) || null;
  if (e) {
    let t = (0, f.getFirstOrderedNode)(
      ".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]", e) || null;
    t && t.click()
  }
}

function e6(e) {
  let t = "education" === e ? "timeline-education-add-button" : "timeline-work-add-button",
    r = `timeline-add-${e}-button`;
  if ("undefined" == typeof document) return null;
  let n = (0, f.getFirstOrderedNode)("education" === e ?
      "//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]" :
      "//div[@role='region' and (contains(@aria-label, 'Experience') or contains(@aria-label, 'Employment'))] | .//timeline-form-builder[@class=\"timeline-form-dialog__content\"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]"
      ),
    o = n ? (0, f.getOrderedNodes)(".//div[contains(@class, 'profile-add-item')]/button", n) : [],
    i = o.find(e => tt(e));
  if (i) return i;
  let a = (0, f.getOrderedNodes)(`//button[
      contains(@class, '${t}')
      or contains(@id, '${r}')
    ]`, document);
  return a.find(e => tt(e)) || null
}
async function e8() {
  let e = e6("education");
  e && (e.click(), await (0, m.delay)(100))
}
async function e9() {
  let e = e6("experience");
  e && (e.click(), await (0, m.delay)(100))
}

function e7(e) {
  return "string" == typeof e ? e.replace(/\s+/g, " ").trim().toLowerCase() : ""
}

function te(e) {
  let t = Array.isArray(e) ? e : e ? [e] : [],
    r = [];
  for (let e of t) {
    let t = "string" == typeof e ? e.split(/[,;\n]+/) : [`${e??""}`];
    for (let e of t) {
      let t = e.replace(/\s+/g, " ").trim();
      t && !r.includes(t) && r.push(t)
    }
  }
  return r
}

function tt(e) {
  if (!e || "isConnected" in e && !1 === e.isConnected) return !1;
  let t = "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : null;
  if (t && (t.width <= 0 || t.height <= 0)) return !1;
  if ("undefined" != typeof window && "function" == typeof window.getComputedStyle) {
    let t = window.getComputedStyle(e);
    if ("none" === t.display || "hidden" === t.visibility || "0" === t.opacity) return !1
  }
  return !0
}

function tr(e) {
  let t = "Languages" === e ? ["Languages", "Language Skills", "Language"] : [e],
    r = t.map(e => {
      let t = e.toLowerCase();
      return `
          normalize-space()='${e}'
          or translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')='${t}'
        `
    }).join(" or ");
  return (0, f.getFirstOrderedNode)(`//apply-flow-block[
        .//*[contains(@class, 'apply-flow-block__header')]//*[
          ${r}
        ]
        or .//apply-flow-block-title//*[
          ${r}
        ]
      ]`) || null
}

function tn() {
  return tr("Skills")
}

function to() {
  return tr("Languages")
}

function ti(e) {
  let t = e.closest?.(".input-row, .input-field-container");
  return e7(t?.textContent)
}

function ta(e) {
  let t = ti(e),
    r = e7(e.getAttribute?.("name") || e.id);
  return t.includes("years of experience") || r.includes("yearsofexperience")
}

function tl(e) {
  if (ta(e)) return !1;
  let t = ti(e),
    r = e7(e.getAttribute?.("name") || e.id);
  return t.includes("skill") || r.includes("skill")
}

function ts(e) {
  let t = (0, f.getFirstOrderedNode)(`.//button[
        contains(@class, 'apply-flow-profile-item-tile__new-tile')
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'add'
        )
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'skill'
        )
      ]`, e) || null;
  return t && tt(t) ? t : (0, f.getFirstOrderedNode)(`.//button[
        not(ancestor::form)
        and not(ancestor::*[@role='dialog'])
        and not(ancestor::*[contains(@class, 'app-dialog')])
        and not(ancestor::*[contains(@class, 'timeline-form-dialog')])
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'add'
        )
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'skill'
        )
      ]`, e) || null
}

function tu(e) {
  let t = (0, f.getOrderedNodes)(`//div[
        @role='dialog'
        or contains(@class, 'app-dialog')
        or contains(@class, 'timeline-form-dialog')
      ][.//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'skill')]]
        //input[not(@type='hidden') and not(@type='file')]
      | .//input[not(@type='hidden') and not(@type='file')]`, e);
  return t.find(e => tt(e) && tl(e)) ?? t.find(e => tt(e) && !ta(e)) ?? null
}

function tc(e, t) {
  let r = e.closest?.("form") || e.closest?.(
    "[role='dialog'], .app-dialog, .timeline-form-dialog") || t;
  return (0, f.getFirstOrderedNode)(`.//button[
        not(contains(@class, 'apply-flow-profile-item-tile__new-tile'))
        and (
          contains(normalize-space(), 'ADD SKILL')
          or contains(normalize-space(), 'SAVE')
          or contains(normalize-space(), 'Add Skill')
          or contains(normalize-space(), 'Save')
        )
      ]`, r) || null
}

function td(e) {
  if (e.scrollIntoView?.({
      block: "center",
      inline: "center"
    }), e.focus?.(), "function" == typeof e.click) {
    e.click();
    return
  }(0, a.triggerEvents)(e, ["click"])
}
async function tf(e, t, r) {
  let n = e7(r);
  return await (0, l.waitForCondition)(() => {
    let t = e7(e.textContent);
    return !!n && t.includes(n)
  }, {
    timeout: 6e3,
    interval: 200,
    observeTarget: e
  })
}
async function tp(e, t) {
  let r = ts(e);
  r && (td(r), await (0, m.delay)(400));
  let n = tu(e);
  if (!n) return !1;
  n.focus?.(), n.click?.(), el(n, t), n.dispatchEvent("function" == typeof InputEvent ?
    new InputEvent("input", {
      bubbles: !0,
      cancelable: !0,
      data: t,
      inputType: "insertText"
    }) : new Event("input", {
      bubbles: !0,
      cancelable: !0
    })), n.dispatchEvent(new Event("change", {
    bubbles: !0
  })), await (0, m.delay)(100);
  let o = tc(n, e);
  return !!o && (td(o), await tf(e, n, t))
}
async function tm(e) {
  let t = te(e).slice(0, 10);
  if (0 === t.length) return !1;
  let r = tn();
  if (!r) return !1;
  let n = 0;
  for (let e of t) {
    if (await tp(r, e)) {
      n += 1, await (0, m.delay)(200);
      continue
    }
    break
  }
  return n > 0
}

function th(e) {
  let t = Array.isArray(e) ? e : e ? [e] : [],
    r = [];
  for (let e of t) {
    let t = "string" == typeof e ? e.split(/[,;\n]+/) : [`${e??""}`];
    for (let e of t) {
      let t = e.replace(/\s+/g, " ").trim();
      t && !r.includes(t) && r.push(t)
    }
  }
  return r
}

function tg(e) {
  let t = e7(e.getAttribute?.("name") || e.id),
    r = ti(e);
  return t.includes("contentitemid") || t.includes("language") || r.includes("language")
}

function tb(e) {
  let t = (0, f.getFirstOrderedNode)(
    ".//button[contains(@class, 'apply-flow-profile-item-tile__new-tile') and contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'add language')]",
    e) || null;
  return t && tt(t) ? t : (0, f.getFirstOrderedNode)(`.//button[
        not(ancestor::form)
        and not(ancestor::*[@role='dialog'])
        and not(ancestor::*[contains(@class, 'app-dialog')])
        and not(ancestor::*[contains(@class, 'timeline-form-dialog')])
        and not(contains(@class, 'app-dialog__footer-button'))
        and not(contains(@class, 'save-btn'))
        and not(contains(@class, 'cancel-btn'))
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'add language'
        )
      ]`, e) || null
}

function ty(e) {
  let t = (0, f.getOrderedNodes)(`//div[
        @role='dialog'
        or contains(@class, 'app-dialog')
        or contains(@class, 'timeline-form-dialog')
      ][.//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'language')]]
        //input[not(@type='hidden') and not(@type='file')]
      | .//input[not(@type='hidden') and not(@type='file')]`, e);
  return t.find(e => tt(e) && tg(e)) ?? t.find(e => tt(e)) ?? null
}

function tv(e, t) {
  let r = e.closest?.("form") || e.closest?.(
    "[role='dialog'], .app-dialog, .timeline-form-dialog") || t;
  return (0, f.getFirstOrderedNode)(`.//button[
        not(contains(@class, 'apply-flow-profile-item-tile__new-tile'))
        and (
          contains(@class, 'save-btn')
          or contains(normalize-space(), 'ADD LANGUAGE')
          or contains(normalize-space(), 'Add Language')
          or contains(normalize-space(), 'SAVE')
          or contains(normalize-space(), 'Save')
        )
      ]`, r) || null
}
async function tw(e, t, r) {
  let n = e7(r);
  return await (0, l.waitForCondition)(() => {
    let t = e7(e.textContent);
    return !!n && t.includes(n)
  }, {
    timeout: 6e3,
    interval: 200,
    observeTarget: e
  })
}
async function tS(e, t) {
  let r = ty(e);
  if (!r) {
    let t = tb(e);
    if (!t) return !1;
    (0, a.triggerEvents)(t, ["click"]), await (0, m.delay)(400), r = ty(e)
  }
  if (!r) return !1;
  let n = await et(r, t);
  n || (r.focus?.(), r.click?.(), el(r, t), r.dispatchEvent("function" == typeof InputEvent ?
    new InputEvent("input", {
      bubbles: !0,
      cancelable: !0,
      data: t,
      inputType: "insertText"
    }) : new Event("input", {
      bubbles: !0,
      cancelable: !0
    })), r.dispatchEvent(new Event("change", {
    bubbles: !0
  })), await (0, m.delay)(100));
  let o = tv(r, e);
  return !!o && ((0, a.triggerEvents)(o, ["click"]), await tw(e, r, t))
}
async function tE(e) {
  let t = th(e).slice(0, 10);
  if (0 === t.length) return !1;
  let r = to();
  if (!r) return !1;
  let n = 0;
  for (let e of t) await tS(r, e) && (n += 1, await (0, m.delay)(200));
  return n > 0
}
async function tx(e, t, r) {
  return tD("resume") ? await tR("resume", await (0, i.fetchPdfAsBlob)(e), t, r) : (console.warn(
    "[oraclecloud][resume] visible attachment slot unavailable"), !1)
}
let tC = {
  resume: {
    rootSelector: "resume-upload-button",
    fieldLabel: "Resume/CV",
    logKey: "resume"
  },
  coverLetter: {
    rootSelector: "cover-letter-upload-button",
    fieldLabel: "Cover Letter",
    logKey: "cover-letter"
  }
};

function tA(e) {
  let t = document.querySelector(tC[e].rootSelector),
    r = t instanceof HTMLElement && tq(t) ? t : null;
  return r
}

function tk(e) {
  let t = tA(e);
  if (!t) return null;
  let r = t.querySelector('input[type="file"]') || (0, f.getFirstOrderedNode)(
    ".//input[@type='file']", t);
  return r
}

function tT(e) {
  let t = tA(e);
  if (!t) return null;
  let r = t.querySelector(".attachment-upload-button__filled") || (0, f.getFirstOrderedNode)(
      ".//div[contains(@class,'attachment-upload-button__filled')]", t),
    n = tq(r) ? r : null;
  return n
}

function tF(e) {
  let t = tA(e);
  if (!t) return null;
  let r = t.querySelector(".attachment-upload-button") || (0, f.getFirstOrderedNode)(
    ".//div[contains(@class,'attachment-upload-button')]", t);
  return tq(r) ? r : null
}

function tI(e) {
  let t = tA(e);
  if (!t) return null;
  let r = t.querySelector(
    ".attachment-upload-button__label, .file-form-element__label, .attachment-upload-button-mobile__label"
    ) || (0, f.getFirstOrderedNode)(`.//label[
          contains(@class,'attachment-upload-button__label')
          or contains(@class,'file-form-element__label')
          or contains(@class,'attachment-upload-button-mobile__label')
        ]`, t);
  return tq(r) ? r : null
}

function tj(e) {
  let t = tT(e);
  if (!t) return null;
  let r = (0, f.getFirstOrderedNode)(`.//button[contains(@class,'attachment-upload-button__bottom-button')
        and (normalize-space()='Remove' or contains(@aria-label,'Remove attachment'))]`, t) ||
  null;
  return r
}

function tD(e) {
  let t = tF(e);
  return !!(t && tk(e)) || !!tT(e)
}

function tP() {
  return tD("coverLetter")
}
async function t_() {
  let e = (0, f.getFirstOrderedNode)(`//div[@role='dialog' or contains(@class,'app-dialog') or contains(@class,'oj-dialog')]
        //button[
          normalize-space()='Delete'
          or normalize-space()='DELETE'
          or @data-qa='confirmDelete'
          or @data-qa='confirmDeleteButton'
        ]`) || null;
  e && ((0, a.triggerEvents)(e, ["click", "mousedown", "mouseup"]), await (0, m.delay)(200))
}
async function tL(e) {
  let t = tT(e);
  if (!t) return !0;
  let r = tj(e);
  if (!r) return !1;
  (0, a.triggerEvents)(r, ["click", "mousedown", "mouseup"]), r.click?.(), await (0, m.delay)(
    150), await t_();
  let n = await (0, l.waitForCondition)(() => !!tI(e), {
    timeout: 1e4,
    interval: 200,
    observeTarget: document.body
  });
  return n
}
async function tR(e, t, r, n) {
  let o = await tL(e);
  if (!o) return console.warn(`[oraclecloud][${tC[e].logKey}] delete failed, skip upload`), !1;
  await (0, l.waitForCondition)(() => !!tI(e) && !!tk(e), {
    timeout: 5e3,
    interval: 100,
    observeTarget: document.body
  });
  let i = tk(e);
  if (!i?.files) return console.warn(
    `[oraclecloud][${tC[e].logKey}] input unavailable after delete`), !1;
  i.files = t.files, i.dispatchEvent(new Event("change", {
    bubbles: !0,
    cancelable: !1
  }));
  let a = await (0, l.waitForCondition)(() => !!tT(e), {
    timeout: 1e4,
    interval: 200,
    observeTarget: document.body
  });
  return !!a && (r({
    label: tC[e].fieldLabel,
    required: !0
  }), n(tC[e].fieldLabel), !0)
}
async function tO(e, t, r) {
  return tD("coverLetter") ? await tR("coverLetter", await (0, i.fetchCoverLetterPdfAsBlob)(e), t,
    r) : (console.warn("[oraclecloud][cover-letter] visible attachment slot unavailable"), !1)
}

function tM() {
  return tk("coverLetter")
}
async function tN(e, t, r = {}) {
  let n = (0, s.resolveOracleCountryValue)(e);
  if (!n) return !1;
  let o = t || (0, f.getFirstOrderedNode)('.//input[@name="country" or @id="country-12"]');
  if (!o || !tq(o)) return !1;
  let i = o.value,
    a = eM(o),
    l = r.refreshDependentAddress && !!eA(i) && a;
  if (y("country:dependent-reset:decision", {
      refreshRequested: !!r.refreshDependentAddress,
      hasExistingCountry: !!eA(i),
      hasDependentDropdownHint: a,
      willRefresh: l
    }), l) {
    let e = await e$(o);
    if (!e) return !1;
    if (!t) {
      let e = (0, f.getFirstOrderedNode)('.//input[@name="country" or @id="country-12"]');
      if (!e || !tq(e)) return y("country:dependent-reset:country-input-missing"), !1;
      o = e
    }
  }
  let u = await et(o, n, "country");
  return !!u || (l ? y("country:dependent-reset:selection-failed") : await t$(o, i), !1)
}
async function t$(e, t) {
  let r = t.trim();
  if (r) {
    if (await eu(e), eB(e, r, "country")) return !0;
    let n = await et(e, r, "country");
    if (n) return !0;
    let o = await tB(e, t);
    return console.warn(
      "[oraclecloud][country] failed to verify semantic restore; preserved the original value conservatively"
      ), o
  }
  en(e, ""), await eu(e);
  let n = "" === eA(e.value);
  return !r && !!n || (console.warn("[oraclecloud][country] failed to clear the failed query"), n)
}
async function tB(e, t) {
  return en(e, t), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), e.dispatchEvent(es("keydown", "Escape")), e.dispatchEvent(es("keyup", "Escape")), e
  .blur(), await (0, m.delay)(50), eA(e.value) === eA(t)
}

function tq(e) {
  if (!e) return !1;
  let t = "function" == typeof e.checkVisibility;
  return t ? e.checkVisibility() ?? !1 : !!e.offsetParent
}
async function tU() {
  let e = new URL(window.location.href);
  if ((0, u.isOracleApplyPath)(e.pathname)) return !0;
  if (!(0, u.isOracleJobDetailPath)(e.pathname)) return !1;
  let t = (0, f.getFirstOrderedNode)(
      "//button[normalize-space()='APPLY NOW' or normalize-space()='Apply Now']") || (0, f
      .getFirstOrderedNode)(
    "//a[normalize-space()='APPLY NOW' or normalize-space()='Apply Now']") || (0, f
      .getFirstOrderedNode)(
      "//*[@role='button' and (normalize-space()='APPLY NOW' or normalize-space()='Apply Now')]");
  if (!tq(t)) return console.warn("[oraclecloud] job-detail: apply-now button unavailable"), !1;
  try {
    t.scrollIntoView({
      block: "center",
      inline: "center"
    })
  } catch {}
  t instanceof HTMLAnchorElement && t.href && (0, u.isOracleApplyPath)(new URL(t.href, window
    .location.origin).pathname) ? (console.info(
  "[oraclecloud] job-detail: apply-now dispatch", {
    route: "anchor-navigation"
  }), window.location.href = t.href) : (console.info(
    "[oraclecloud] job-detail: apply-now dispatch", {
      route: "native-click"
    }), t.click?.());
  for (let e = 0; e < 80; e++) {
    await (0, m.delay)(200);
    let e = new URL(window.location.href).pathname,
      t = (0, u.isOracleApplyPath)(e),
      r = !!(0, f.getFirstOrderedNode)(
        "//apply-flow-block | //section[contains(@class, 'email-verification')] | //quick-email-verification-form"
        ) || !!(0, f.getFirstOrderedNode)("//button[@data-automation-id='pageFooterNextButton']");
    if (t && r) return await (0, m.delay)(500), !0
  }
  return console.warn("[oraclecloud] job-detail: clicked apply-now but did not enter apply flow"),
    !1
}
async function tH() {
  let e = window.location.href;
  if (!e.includes("/apply/email")) return !1;
  let t = (0, f.getFirstOrderedNode)("//input[@aria-label='Email Address' or @name='email']") ||
    null,
    r = t?.value?.trim() || "";
  if (!r) return console.warn("[oraclecloud] email-gate: empty email, skip next-step"), !1;
  let n = () => (0, f.getFirstOrderedNode)(
      "//button[@data-automation-id='pageFooterNextButton' or @data-automation-id='bottom-navigation-next-button']"
      ) || (0, f.getFirstOrderedNode)(
      "//button[normalize-space()='Next' or contains(normalize-space(), 'Next')]"),
    o = null;
  for (let e = 0; e < 15; e++) {
    let e = n();
    if (e) {
      let t = "function" == typeof e.checkVisibility ? e.checkVisibility() : !!e.offsetParent;
      if (t && !e.disabled) {
        o = e;
        break
      }
    }
    await (0, m.delay)(200)
  }
  if (!o) return console.warn("[oraclecloud] email-gate: next button unavailable"), !1;
  try {
    o.scrollIntoView({
      block: "center",
      inline: "center"
    })
  } catch {}
  return o.click(), !0
}

