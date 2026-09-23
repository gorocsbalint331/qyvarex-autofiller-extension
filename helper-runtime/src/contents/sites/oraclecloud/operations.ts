// @ts-nocheck
/**
 * Oracle Cloud — DOM fill operations (text, select, education, experience, resume).
 */

import * as messaging from "@plasmohq/messaging";
import * as answerMethods from "../../methods/answer.ts";
import * as dom from "../../methods/dom.ts";
import * as observer from "../../methods/observer.ts";
import * as oracleAnswer from "./answer.ts";
import * as oracleUrl from "./url.ts";
import * as educationClientSearch from "./education-client-search.ts";
import * as educationLovCandidates from "./education-lov-candidates.ts";
import * as xpath from "../../../core/xpath.js";
import * as dateUtils from "../../../utils/date.js";
import * as delay from "../../../utils/delay.js";
async function cleanEduAndExp() {
  let e = async () => {
      let e10 =
        xpath.getFirstOrderedNode(`//div[@role='dialog' or contains(@class,'app-dialog') or contains(@class,'oj-dialog')]
          //button[
            normalize-space()='Delete'
            or normalize-space()='DELETE'
            or @data-qa='confirmDelete'
            or @data-qa='confirmDeleteButton'
          ]`) || null;
      e10 && (dom.triggerEvents(e10, ["click"]), await delay.delay(200));
    },
    t = async (t2) => {
      let r2 = Date.now() + 6e4;
      for (; Date.now() < r2;) {
        let r3 = xpath.getOrderedNodes(
          ".//article[contains(@class, 'apply-flow-profile-item-tile')]",
          t2,
        );
        if (0 === r3.length) break;
        let n2 = r3.length,
          o3 = r3[0];
        (o3.dispatchEvent(
          new MouseEvent("mouseover", {
            bubbles: true,
            cancelable: true,
            view: window,
          }),
        ),
          await delay.delay(50));
        let i2 =
          xpath.getFirstOrderedNode(
            ".//button[contains(@class, 'apply-flow-profile-item-tile__delete-icon')]",
            o3,
          ) || null;
        if (!i2) break;
        (dom.triggerEvents(i2, ["click"]), await delay.delay(150), await e());
        let l2 = false;
        for (let e10 = 0; e10 < 10; e10++) {
          await delay.delay(150);
          let e11 = xpath.getOrderedNodes(
            ".//article[contains(@class, 'apply-flow-profile-item-tile')]",
            t2,
          );
          if (e11.length < n2) {
            l2 = true;
            break;
          }
        }
        if (!l2) {
          console.warn(
            "Failed to delete profile item tile within retries; stop cleanup early to avoid blocking autofill.",
          );
          break;
        }
      }
    },
    r =
      xpath.getFirstOrderedNode(
        '//div[@role="region" and (contains(@aria-label, "Experience") or contains(@aria-label, "Employment"))] | .//timeline-form-builder[@class="timeline-form-dialog__content"] | //div[contains(@class, "apply-flow-block--work-and-education-timeline")]',
      ) || null;
  r && (await t(r));
  let n =
    xpath.getFirstOrderedNode(
      "//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class='timeline-form-dialog__content'] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]",
    ) || null;
  n && (await t(n));
  let o2 = document.getElementsByClassName("beautiful-timeline-item");
  for (; o2.length > 0;) {
    let e10 = o2[0];
    (e10?.dispatchEvent(
      new MouseEvent("mouseover", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    ),
      await delay.delay(50),
      e10
        ?.getElementsByClassName("beautiful-timeline-item__delete-icon")[0]
        ?.dispatchEvent(new MouseEvent("click")),
      await delay.delay(50));
  }
}
function g(e, t = {}) {
  let r =
      "undefined" != typeof document &&
      "function" == typeof document.getElementById &&
      e.id
        ? document.getElementById(`${e.id}-toggle-button`)
        : null,
    n =
      e.getAttribute("aria-controls") ||
      r?.getAttribute("aria-controls") ||
      (e.id ? `${e.id}-listbox` : ""),
    o2 =
      "undefined" != typeof document &&
      "function" == typeof document.getElementById &&
      n
        ? document.getElementById(n)
        : null,
    i2 = o2
      ? Array.from(
          o2.querySelectorAll(
            '[aria-selected="true"], .cx-select__list-item--selected',
          ),
        )
          .map((e10) => e10.textContent?.replace(/\s+/g, " ").trim())
          .filter(Boolean)
          .slice(0, 5)
      : [];
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
    listboxExists: !!o2,
    listboxAriaBusy: o2?.getAttribute("aria-busy"),
    selectedOptions: i2,
    className: "string" == typeof e.className ? e.className : void 0,
    activeElementId:
      "undefined" != typeof document &&
      "undefined" != typeof Element &&
      document.activeElement instanceof Element
        ? document.activeElement.id
        : void 0,
    ...t,
  };
}
function b(e, t, r = {}) {
  if (!v()) return;
  let n = g(t, r);
  if (
    oracleAnswer.isOraclePhoneCountryCodeField(t.id || t.getAttribute("name"))
  ) {
    console.warn(`[OracleCloud][PhoneCountryDebug] ${e} ${JSON.stringify(n)}`);
    return;
  }
  console.debug(`[OracleCloud][Combobox] ${e} ${JSON.stringify(n)}`);
}
function y(e, t = {}) {
  let r =
    e.startsWith("education-client-search:") ||
    e.startsWith("education-major-text:");
  if (v() || r)
    try {
      console.info(
        `[OracleCloud][Flow] ${e} ${JSON.stringify({ t: Date.now(), ...t })}`,
      );
    } catch {}
}
function v() {
  if ("undefined" == typeof window) return false;
  try {
    let e = new URLSearchParams(window.location?.search ?? "");
    return (
      "1" === e.get("jobright_oraclecloud_combobox_debug") ||
      window.localStorage?.getItem("jobright_oraclecloud_combobox_debug") ===
        "1"
    );
  } catch {
    return false;
  }
}
function w(e) {
  return ["startdate", "enddate"].includes(
    String(e ?? "")
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase(),
  );
}
function S(e, t, r = {}) {
  if (v() && w(t))
    try {
      console.warn(
        `[OracleCloud][TimelineDate] ${e} ${JSON.stringify({ t: Date.now(), fieldName: t, ...r })}`,
      );
    } catch {}
}
function E(e) {
  return e.map((e10) => e10.textContent?.trim());
}
function x(e) {
  let t = /* @__PURE__ */ new Map();
  for (let r of e) {
    let e10 =
        r.closest?.("[role='option']") || r.closest?.("[role='row']") || r,
      n = t.get(e10);
    (!n || C(r) > C(n)) && t.set(e10, r);
  }
  return [...t.values()];
}
function C(e) {
  let t = "string" == typeof e.className ? e.className : "";
  return e.classList?.contains("cx-select__list-item--content") ||
    t.split(/\s+/).includes("cx-select__list-item--content")
    ? 3
    : e.closest?.("[role='gridcell']") === e
      ? 2
      : 1;
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
  return xpath
    .getOrderedNodes(A)
    .filter(
      (e) => "function" != typeof e.checkVisibility || e.checkVisibility(),
    );
}
function F() {
  return xpath.getFirstOrderedNode(k);
}
async function ensureOracleLinkRows(e) {
  if (!(e <= 1))
    for (; T().length < e;) {
      let e10 = T().length,
        t = F();
      if (
        !t ||
        (dom.triggerEvents(t, ["click"]),
        await observer.waitForCondition(() => T().length > e10, {
          timeout: 3e3,
          interval: 100,
          observeTarget: document.body,
        }),
        T().length <= e10)
      )
        return;
    }
}
function j(e) {
  return String(e ?? "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
}
function D(e) {
  let t = j(e);
  return (
    "school" === t ||
    "schoolname" === t ||
    t.includes("educationalestablishment")
  );
}
function P(e) {
  return "major" === j(e);
}
function _(e) {
  let t = j(e);
  return "degree" === t || t.includes("degree");
}
function L(e) {
  let t = eA(e.textContent).replace(/[.!]+$/g, "");
  return (
    "no results" === t ||
    "no results found" === t ||
    "no results were found" === t
  );
}
function R(e) {
  let t = eA(e.textContent).replace(/[.!]+$/g, "");
  return "no results" === t || /^no results(?: were)? found\b/.test(t);
}
function O(e) {
  return P(e) ? "major" : D(e) ? "school" : null;
}
let M = `.//div[@role='row']//div[@role='gridcell']//span[contains(@class,'cx-select__list-item--content')]
  | .//div[@role='row']//div[@role='gridcell'][normalize-space()]
  | .//*[@role='option'][normalize-space()]`;
function N(e) {
  return String(e ?? "")
    .replace(/\s+/g, " ")
    .trim();
}
function $(e) {
  if ("true" === e.getAttribute("aria-hidden")) return false;
  if ("function" != typeof e.checkVisibility) return true;
  try {
    return e.checkVisibility({
      checkOpacity: true,
      checkVisibilityCSS: true,
    });
  } catch {
    return e.checkVisibility();
  }
}
function B(e) {
  let t = /* @__PURE__ */ new Set(),
    r = [],
    n = x(xpath.getOrderedNodes(M, e)),
    o2 = 0,
    i2 = 0,
    a2 = 0;
  for (let e10 of n) {
    if (!$(e10)) {
      o2 += 1;
      continue;
    }
    if (L(e10)) {
      i2 += 1;
      continue;
    }
    let n2 = N(e10.textContent);
    if (!n2) {
      a2 += 1;
      continue;
    }
    let l2 = n2.normalize("NFKC").toLowerCase();
    t.has(l2) ||
      (t.add(l2),
      r.push({
        element: e10,
        text: n2,
      }));
  }
  return {
    candidates: r.slice(0, 25),
    rawOptionCount: n.length,
    hiddenOptionCount: o2,
    noResultOptionCount: i2,
    invalidOptionCount: a2,
  };
}
function q(e) {
  return B(e).candidates;
}
function U(e) {
  return e.map((e10) => e10.text).join("");
}
function H(e) {
  return "function" == typeof e.getAttribute
    ? e.getAttribute("aria-busy")
    : null;
}
function Y(e) {
  return "function" == typeof e.getAttribute ? e.getAttribute("role") : null;
}
async function z(e) {
  let t =
      "undefined" != typeof document &&
      "function" == typeof document.getElementById &&
      e.id
        ? document.getElementById(`${e.id}-toggle-button`)
        : null,
    r =
      e.getAttribute("aria-controls") ||
      t?.getAttribute("aria-controls") ||
      (e.id ? `${e.id}-listbox` : "");
  return r ? await eU(`//*[@id="${r}"]`, 100, 6) : null;
}
async function V(e, t) {
  try {
    let r = await messaging.sendToBackground({
        name: "prepareOracleEducationLovCapture",
        body: {
          fieldType: e,
          searchInput: t,
        },
      }),
      n = String(r?.captureId ?? "").trim();
    if (n) return n;
  } catch (r) {
    y("education-client-search:lov-capture-prepare-error", {
      fieldType: e,
      searchInputLength: t.length,
      errorType: r instanceof Error ? r.name : typeof r,
    });
  }
  return (
    y("education-client-search:lov-capture-prepare", {
      fieldType: e,
      prepared: false,
      searchInputLength: t.length,
    }),
    null
  );
}
async function W(e, t, r) {
  try {
    let n = await messaging.sendToBackground({
        name: "consumeOracleEducationLovCapture",
        body: {
          captureId: e,
        },
      }),
      i2 = Array.isArray(n?.items) ? n.items : [],
      a2 = n?.fieldType === t,
      l2 = "string" == typeof n?.captureStatus ? n.captureStatus : "unknown";
    return (
      y("education-client-search:lov-capture-consume", {
        fieldType: t,
        searchInputLength: r.length,
        capturedItemCount: i2.length,
        captureStatus: l2,
        captureDiagnostic: n?.captureDiagnostic,
        matchedFieldType: a2,
      }),
      a2 ? i2 : []
    );
  } catch (e10) {
    return (
      y("education-client-search:lov-capture-consume-error", {
        fieldType: t,
        searchInputLength: r.length,
        errorType: e10 instanceof Error ? e10.name : typeof e10,
      }),
      []
    );
  }
}
function G(e, t, r) {
  let n = r.map(({ text: e10 }) => ({
      text: e10,
    })),
    o2 = educationLovCandidates.mapOracleEducationLovCandidates({
      fieldType: e,
      lovItems: t,
      visibleCandidates: n,
    });
  return (
    y("education-client-search:lov-candidate-map", {
      fieldType: e,
      ...o2.diagnostics,
    }),
    o2
  );
}
async function K(e, t, r, n) {
  let o2;
  let i2 = N(r).toLowerCase(),
    a2 = n.lastSearchIdentity,
    l2 = await V(t, r);
  (y("education-client-search:lov-capture-prepare", {
    fieldType: t,
    prepared: !!l2,
    searchInputLength: r.length,
  }),
    await ei(e));
  let s2 = await z(e);
  if (!s2)
    return (
      (n.lastSearchIdentity = i2),
      (n.lastSearchInput = r),
      (n.lastCandidates = []),
      n.candidatesBySearchIdentity.set(i2, []),
      y("education-client-search:candidate-capture", {
        fieldType: t,
        fieldName: e.getAttribute("name") || e.id || "unknown",
        searchInputLength: r.length,
        modalFound: false,
      }),
      []
    );
  let u2 = B(s2),
    c2 = u2.candidates,
    d2 = U(c2);
  (y("education-client-search:candidate-capture", {
    fieldType: t,
    fieldName: e.getAttribute("name") || e.id || "unknown",
    searchInputLength: r.length,
    modalFound: true,
    initialCandidateCount: c2.length,
    initialRawOptionCount: u2.rawOptionCount,
    listboxId: s2.id || null,
    initialListboxRole: Y(s2),
    initialListboxAriaBusy: H(s2),
  }),
    en(e, r));
  let f2 = l2 ? W(l2, t, r) : Promise.resolve([]),
    p2 = async (e10) => {
      let r2 = await f2;
      return G(t, r2, e10);
    },
    h2 = (e10) => (
      (n.lastSearchInput = r),
      (n.lastCandidates = e10),
      n.candidatesBySearchIdentity.set(i2, e10),
      e10
    ),
    g2 = ({
      readIndex: e10,
      snapshotRecovery: n2,
      visibleCandidateCount: o3,
      diagnostics: i3,
    }) => {
      y("education-client-search:candidate-map-mismatch", {
        fieldType: t,
        searchInputLength: r.length,
        readIndex: e10,
        snapshotRecovery: n2,
        visibleCandidateCount: o3,
        ...i3,
      });
    },
    b2 = "",
    v2 = "";
  for (let l3 = 0; l3 < 14; l3 += 1) {
    l3 > 0 && (await delay.delay(250));
    let u3 = await z(e);
    u3 &&
      u3 !== s2 &&
      (y("education-client-search:listbox-replaced", {
        fieldType: t,
        searchInputLength: r.length,
        readIndex: l3,
        sameListboxId: u3.id === s2.id,
        previousListboxRole: Y(s2),
        currentListboxRole: Y(u3),
        previousListboxConnected: s2.isConnected,
      }),
      (s2 = u3));
    let c3 = B(s2),
      f3 = c3.candidates,
      w2 = [
        f3.length,
        c3.rawOptionCount,
        c3.hiddenOptionCount,
        c3.noResultOptionCount,
        c3.invalidOptionCount,
        H(s2) || "none",
      ].join(":");
    (0 === l3 || w2 !== v2) &&
      (y("education-client-search:candidate-poll", {
        fieldType: t,
        searchInputLength: r.length,
        readIndex: l3,
        candidateCount: f3.length,
        rawOptionCount: c3.rawOptionCount,
        hiddenOptionCount: c3.hiddenOptionCount,
        noResultOptionCount: c3.noResultOptionCount,
        invalidOptionCount: c3.invalidOptionCount,
        listboxId: s2.id || null,
        listboxRole: Y(s2),
        listboxAriaBusy: H(s2),
      }),
      (v2 = w2));
    let S2 = U(f3),
      E2 = i2 !== a2;
    if (!E2 || !d2 || S2 !== d2) {
      if (
        (f3.length > 0 &&
          (o2 = {
            candidates: f3.map((e10) => ({
              ...e10,
            })),
            readIndex: l3,
          }),
        0 === f3.length && o2)
      ) {
        n.lastSearchIdentity = i2;
        let e10 = await p2(o2.candidates);
        if (0 === e10.candidates.length && e10.diagnostics.lovItemCount > 0) {
          (g2({
            readIndex: l3,
            snapshotRecovery: true,
            visibleCandidateCount: o2.candidates.length,
            diagnostics: e10.diagnostics,
          }),
            (b2 = S2));
          continue;
        }
        let a3 = h2(e10.candidates);
        return (
          y("education-client-search:candidate-read", {
            fieldType: t,
            searchInputLength: r.length,
            readIndex: l3,
            candidateCount: a3.length,
            visibleCandidateCount: o2.candidates.length,
            noResults: false,
            snapshotRecovery: true,
            snapshotReadIndex: o2.readIndex,
          }),
          a3
        );
      }
      if (0 === f3.length && R(s2)) {
        n.lastSearchIdentity = i2;
        let e10 = await p2([]);
        if (0 === e10.candidates.length && e10.diagnostics.lovItemCount > 0) {
          (g2({
            readIndex: l3,
            snapshotRecovery: false,
            visibleCandidateCount: 0,
            diagnostics: e10.diagnostics,
          }),
            (b2 = S2));
          continue;
        }
        let o3 = h2(e10.candidates);
        return (
          y("education-client-search:candidate-read", {
            fieldType: t,
            searchInputLength: r.length,
            readIndex: l3,
            candidateCount: o3.length,
            visibleCandidateCount: 0,
            noResults: true,
          }),
          o3
        );
      }
      if (S2 && S2 === b2) {
        n.lastSearchIdentity = i2;
        let e10 = await p2(f3);
        if (0 === e10.candidates.length && e10.diagnostics.lovItemCount > 0) {
          g2({
            readIndex: l3,
            snapshotRecovery: false,
            visibleCandidateCount: f3.length,
            diagnostics: e10.diagnostics,
          });
          continue;
        }
        let o3 = h2(e10.candidates);
        return (
          y("education-client-search:candidate-read", {
            fieldType: t,
            searchInputLength: r.length,
            readIndex: l3,
            candidateCount: o3.length,
            visibleCandidateCount: f3.length,
            noResults: false,
            settled: true,
          }),
          o3
        );
      }
      b2 = S2;
    }
  }
  return (
    (n.lastSearchIdentity = i2),
    (n.lastSearchInput = r),
    (n.lastCandidates = []),
    n.candidatesBySearchIdentity.set(i2, []),
    y("education-client-search:candidate-read", {
      fieldType: t,
      searchInputLength: r.length,
      readIndex: 14,
      candidateCount: 0,
      rawOptionCount: B(s2).rawOptionCount,
      listboxId: s2.id || null,
      listboxRole: Y(s2),
      listboxAriaBusy: H(s2),
      noResults: false,
      settled: false,
    }),
    []
  );
}
async function X(e, t, r, n) {
  let o2 = N(r.searchInput).toLowerCase(),
    i2 = (n.candidatesBySearchIdentity.get(o2) || []).filter(
      (e10) => e10.value === t.value && e10.text === t.text,
    );
  if (1 !== i2.length)
    return (
      y("education-client-search:commit", {
        candidateTextLength: t.text.length,
        candidateValueLength: t.value.length,
        mappedCandidateCount: i2.length,
        selectedSearchInputLength: r.searchInput.length,
        reason: "candidate-not-in-selected-round",
      }),
      false
    );
  let a2 = await z(e),
    s2 = a2 ? q(a2).filter((e10) => e10.text === t.text) : [],
    u2 = !a2 || 1 !== s2.length || n.lastSearchIdentity !== o2,
    c2 = false;
  if (u2) {
    ((c2 = true),
      y("education-client-search:commit-reopen", {
        candidateTextLength: t.text.length,
        candidateValueLength: t.value.length,
        selectedSearchInputLength: r.searchInput.length,
        modalFound: !!a2,
        visibleMatchingCandidateCount: s2.length,
        lastSearchMatchesSelectedRound: n.lastSearchIdentity === o2,
      }),
      await ei(e),
      en(e, r.searchInput));
    let i3 = "";
    for (let n2 = 0; n2 < 14; n2 += 1) {
      if ((n2 > 0 && (await delay.delay(250)), !(a2 = await z(e)))) continue;
      let o3 = q(a2);
      s2 = o3.filter((e10) => e10.text === t.text);
      let l2 = U(o3);
      if (l2 && l2 === i3 && 1 === s2.length) {
        y("education-client-search:commit-reopen-ready", {
          candidateTextLength: t.text.length,
          selectedSearchInputLength: r.searchInput.length,
          readIndex: n2,
          visibleCandidateCount: o3.length,
        });
        break;
      }
      i3 = l2;
    }
  }
  if (!a2 || 1 !== s2.length)
    return (
      y("education-client-search:commit", {
        candidateTextLength: t.text.length,
        candidateValueLength: t.value.length,
        selectedSearchInputLength: r.searchInput.length,
        modalFound: !!a2,
        mappedCandidateCount: i2.length,
        visibleMatchingCandidateCount: s2.length,
        reopened: c2,
      }),
      false
    );
  await em(s2[0].element);
  let d2 = await observer.waitForCondition(
    () =>
      eA(e.value) === eA(t.text) &&
      !e_(e) &&
      "true" !== e.getAttribute("aria-expanded"),
    {
      timeout: 1e3,
      interval: 100,
      observeTarget: "undefined" != typeof document ? document.body : void 0,
    },
  );
  if (!d2)
    return (
      y("education-client-search:commit", {
        candidateTextLength: t.text.length,
        candidateValueLength: t.value.length,
        modalFound: true,
        matchingCandidateCount: 1,
        reopened: c2,
        committed: false,
      }),
      false
    );
  await delay.delay(350);
  let f2 =
    eA(e.value) === eA(t.text) &&
    !e_(e) &&
    "true" !== e.getAttribute("aria-expanded");
  return (
    y("education-client-search:commit", {
      candidateTextLength: t.text.length,
      candidateValueLength: t.value.length,
      modalFound: true,
      matchingCandidateCount: 1,
      reopened: c2,
      committed: f2,
    }),
    f2
  );
}
async function J(e, t) {
  let r = "options" in t,
    n = r ? "step" : "start",
    i2 = r ? t.options.length : 0;
  y("education-client-search:request", {
    fieldType: e,
    requestKind: n,
    currentOptionCount: i2,
    hasSessionId: r,
    originalAnswerLength: "original_answer" in t ? t.original_answer.length : 0,
  });
  let a2 = Date.now();
  try {
    let r2 = await messaging.sendToBackground({
      name: "resolveAutofillClientSearchStep",
      body: t,
    });
    return (
      y("education-client-search:response", {
        fieldType: e,
        requestKind: n,
        currentOptionCount: i2,
        action: r2?.action || "missing",
        responseLatencyMs: Date.now() - a2,
      }),
      r2
    );
  } catch (t2) {
    throw (
      y("education-client-search:request-error", {
        fieldType: e,
        requestKind: n,
        currentOptionCount: i2,
        errorType: t2 instanceof Error ? t2.name : typeof t2,
      }),
      t2
    );
  }
}
async function Q(e, t, r, n) {
  let o2 = N(e.value),
    i2 = N(r.lastSearchInput),
    a2 = !!i2 && o2 === i2;
  if (!a2) {
    y("education-client-search:uncommitted-clear", {
      fieldType: t,
      failureReason: n,
      cleared: false,
      reason: "input-not-current-search",
    });
    return;
  }
  (e.focus(),
    en(e, ""),
    e.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    ),
    e.blur(),
    await delay.delay(100),
    y("education-client-search:uncommitted-clear", {
      fieldType: t,
      failureReason: n,
      cleared: !N(e.value),
    }));
}
async function Z(e, t, r, n) {
  let o2 = r.trim();
  if (!o2)
    return (
      y("education-client-search:return-empty-raw-fallback", {
        fieldType: t,
        source: n,
        rawValueLength: 0,
        filled: false,
      }),
      false
    );
  let i2 = String(e.getAttribute("name") || e.id || "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  if ("school" === t && i2.includes("educationalestablishmentid"))
    return (
      y("education-client-search:return-empty-raw-fallback", {
        fieldType: t,
        source: n,
        rawValueLength: o2.length,
        filled: false,
        reason: "selected-id-required",
      }),
      false
    );
  (e.focus(),
    en(e, o2),
    e.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    ),
    "undefined" != typeof document &&
      document.body &&
      dom.triggerEvents(document.body, ["mousedown", "mouseup", "click"]),
    e.blur(),
    await delay.delay(100));
  let l2 = e.value === o2;
  return (
    y("education-client-search:return-empty-raw-fallback", {
      fieldType: t,
      source: n,
      rawValueLength: o2.length,
      filled: l2,
    }),
    l2
  );
}
async function ee(e, t, r, n, o2 = "raw") {
  let i2 = r.trim();
  if (!i2)
    return (
      y("education-client-search:skip", {
        fieldType: t,
        reason: "empty-original-answer",
        rawFallbackValueLength: n?.trim().length || 0,
        returnEmptyFallbackSource: o2,
      }),
      false
    );
  let a2 = {
    lastSearchIdentity: "",
    lastSearchInput: "",
    lastCandidates: [],
    candidatesBySearchIdentity: /* @__PURE__ */ new Map(),
  };
  y("education-client-search:start", {
    fieldType: t,
    originalAnswerLength: i2.length,
    rawFallbackValueLength: n?.trim().length || 0,
    returnEmptyFallbackSource: o2,
  });
  let l2 = await educationClientSearch.runOracleEducationClientSearch({
    fieldType: t,
    originalAnswer: r,
    deps: {
      requestStep: (e10) => J(t, e10),
      captureCandidates: (r2) => K(e, t, r2, a2),
      commitCandidate: (t2, r2) => X(e, t2, r2, a2),
    },
  });
  return (
    y("education-client-search:done", {
      fieldType: t,
      success: l2.success,
      actions: l2.actions,
      actionCount: l2.actions.length,
      roundCount: l2.rounds.length,
      roundCandidateCounts: l2.rounds.map((e10) => e10.candidateCount),
      failureReason: l2.failureReason,
    }),
    !!l2.success ||
      ("return_empty" !== l2.failureReason
        ? (await Q(e, t, a2, l2.failureReason), false)
        : await Z(e, t, n || "", o2))
  );
}
async function fillSelectField(e, t, r, n = {}) {
  if ("combobox" === e.role) {
    let o3 =
        oracleAnswer.isOraclePhoneCountryCodeField(r) || eD(r)
          ? r
          : e.getAttribute("name") || e.id || e.getAttribute("id"),
      i2 = oracleAnswer.isOracleAddressSelectField(o3),
      a2 = D(o3),
      l2 = P(o3),
      u2 = O(o3),
      c2 = _(o3),
      d2 = Date.now(),
      p2 = w(o3);
    if (u2) {
      let r2 = "school" === u2 ? n.rawSchool : n.rawMajor || n.rawDegree,
        o4 = r2 || ("school" === u2 ? String(t ?? "") : ""),
        i3 = r2 || "",
        a3 = r2 ? "raw" : "answer";
      return (
        y("education-client-search:source", {
          fieldType: u2,
          answerLength: String(t ?? "").trim().length,
          rawSchoolLength: n.rawSchool?.trim().length || 0,
          rawMajorLength: n.rawMajor?.trim().length || 0,
          rawDegreeLength: n.rawDegree?.trim().length || 0,
          originalAnswerSource: r2
            ? "major" !== u2 || n.rawMajor
              ? "raw"
              : "raw-degree"
            : "major" === u2
              ? "missing-raw-major-and-degree"
              : "answer",
          returnEmptyFallbackSource: a3,
          returnEmptyFallbackValueLength: i3.trim().length,
        }),
        await ee(e, u2, o4, i3, a3)
      );
    }
    let h2 = oracleAnswer.isOraclePhoneCountryCodeField(o3) && eR(t);
    if ((ej(o3) || h2) && eB(e, t, o3))
      return (
        b("already-committed", e, {
          expectedValue: t,
        }),
        true
      );
    (await ei(e),
      await delay.delay(150),
      await delay.delay(50),
      S("opened", o3, {
        ariaControlsPresent: !!eo(e),
        ariaExpanded: "true" === e.getAttribute("aria-expanded"),
      }));
    let g2 = eP(o3),
      v2 = g2 ? 6 : 14,
      C2 = `.//div[@role='row']//div[@role='gridcell']//span[contains(@class,'cx-select__list-item--content')]
      | .//div[@role='row']//div[@role='gridcell'][normalize-space()]
      | .//*[@role='option'][normalize-space()]`,
      A2 = g2 ? 2 : i2 ? 5 : c2 || l2 ? 2 : 1;
    b("start", e, {
      expectedValue: t,
      isAddressSelect: i2,
      isEducationSchoolSelect: a2,
      isEducationMajorSelect: l2,
      isEducationDegreeSelect: c2,
      modalId: eo(e),
      retryLimit: A2,
    });
    let k2 = async (r2, n2 = t) => {
      let a3 = eo(e),
        u3 = g2;
      u3 &&
        (b("set-search-value:before", e, {
          expectedValue: t,
          searchValue: r2,
        }),
        en(e, r2),
        b("set-search-value:after", e, {
          expectedValue: t,
          searchValue: r2,
        }));
      let d3 = eo(e),
        h3 = `//*[@id="${d3}"]`;
      (u3 &&
        y("address:listbox-after-search", {
          searchValueLength: r2.trim().length,
          listboxIdChanged: a3 !== d3,
        }),
        b("wait-listbox:start", e, {
          expectedValue: t,
          searchValue: r2,
          modalId: d3,
        }));
      let w2 = Date.now(),
        A3 = await eU(h3, 500, v2);
      if (
        (p2 &&
          S("listbox-read", o3, {
            found: !!A3,
            modalIdPresent: !!d3,
            elapsedMs: Date.now() - w2,
          }),
        y("select:modal-wait", {
          name: o3,
          searchValue: r2,
          found: !!A3,
          ms: Date.now() - w2,
        }),
        u3 &&
          y("address:listbox-wait", {
            searchValueLength: r2.trim().length,
            listboxIdChanged: a3 !== d3,
            found: !!A3,
            ms: Date.now() - w2,
          }),
        !A3)
      )
        return (
          b("wait-listbox:missing", e, {
            expectedValue: t,
            searchValue: r2,
            modalId: d3,
          }),
          {
            modalElement: null,
            optionElements: [],
            hasNoResults: false,
          }
        );
      u3 ||
        (b("set-search-value:before", e, {
          expectedValue: t,
          searchValue: r2,
        }),
        en(e, r2),
        b("set-search-value:after", e, {
          expectedValue: t,
          searchValue: r2,
        }));
      let k3 = ej(o3),
        T2 = k3 ? 14 : i2 ? 8 : c2 || l2 ? 8 : 2,
        F2 = k3 ? 300 : 250,
        I2 = k3 || c2 || l2 ? 250 : 150,
        j2 = [];
      for (let i3 = 0; i3 < T2; i3++) {
        i3 > 0 && (await delay.delay(1 === i3 ? F2 : I2));
        let a4 = x(xpath.getOrderedNodes(C2, A3));
        j2 = a4.filter((e10) => !L(e10));
        let l3 = 0 === j2.length && (a4.some(L) || R(A3)),
          u4 = E(j2),
          c3 = oracleAnswer.findOracleSelectOptionIndex(n2, u4, o3);
        if (
          (b("read-options", e, {
            expectedValue: t,
            searchValue: r2,
            readIndex: i3,
            optionCount: u4.length,
            optionTexts: u4.slice(0, 12),
            matchedIndex: c3,
          }),
          -1 !== c3 || l3)
        )
          return {
            modalElement: A3,
            optionElements: j2,
            hasNoResults: l3,
          };
      }
      return {
        modalElement: A3,
        optionElements: j2,
        hasNoResults: false,
      };
    };
    for (let r2 = 0; r2 < A2; r2++) {
      (y("select:attempt", {
        name: o3,
        attempt: r2,
        retryLimit: A2,
        elapsedMs: Date.now() - d2,
      }),
        b("attempt:start", e, {
          expectedValue: t,
          attempt: r2,
          retryLimit: A2,
        }),
        r2 > 0 &&
          (await delay.delay(600 + 300 * r2),
          b("attempt:reopen-before", e, {
            expectedValue: t,
            attempt: r2,
          }),
          await ei(e),
          await delay.delay(150),
          b("attempt:reopen-after", e, {
            expectedValue: t,
            attempt: r2,
          })));
      let n2 = await k2(t),
        a3 = n2.optionElements,
        u3 = E(a3),
        c3 = oracleAnswer.findOracleSelectOptionIndex(t, u3, o3),
        f2 = er(o3, t);
      if (
        (-1 === c3 &&
          f2 &&
          (y("postal-prefix-search:start", {
            name: o3,
            attempt: r2,
            expectedLength: t.length,
            prefixLength: f2.length,
            priorNoResults: n2.hasNoResults,
          }),
          (u3 = E((a3 = (n2 = await k2(f2, t)).optionElements))),
          (c3 = (0, oracleAnswer.findOracleSelectOptionIndex)(t, u3, o3)),
          y("postal-prefix-search:done", {
            name: o3,
            attempt: r2,
            optionCount: u3.length,
            matched: c3,
            noResults: n2.hasNoResults,
          })),
        n2.hasNoResults)
      )
        return (
          b("no-results:close", e, {
            expectedValue: t,
            attempt: r2,
          }),
          await eu(e),
          false
        );
      if (0 === a3.length && !e.value?.trim() && !eP(o3)) {
        let i3 = ej(o3) ? t : t.substring(0, Math.ceil(t.length / 2));
        (b("fallback-search:start", e, {
          expectedValue: t,
          attempt: r2,
          fallbackValue: i3,
        }),
          en(e, i3),
          await delay.delay(1100),
          (u3 = E((a3 = (n2 = await k2(i3)).optionElements))),
          (c3 = oracleAnswer.findOracleSelectOptionIndex(t, u3, o3)));
      }
      if (
        (y("select:options", {
          name: o3,
          attempt: r2,
          optionCount: u3.length,
          matched: c3,
          elapsedMs: Date.now() - d2,
        }),
        b("match-options", e, {
          expectedValue: t,
          attempt: r2,
          matchedIndex: c3,
          optionCount: u3.length,
          optionTexts: u3.slice(0, 12),
        }),
        p2 &&
          S("option-match", o3, {
            attempt: r2,
            optionCount: u3.length,
            matched: c3,
          }),
        -1 === c3 &&
          eP(o3) &&
          1 === u3.length &&
          b("address-line:sole-option", e, {
            expectedValue: t,
            attempt: r2,
            optionText: u3[(c3 = 0)],
          }),
        -1 === c3 && ej(o3) && n2.modalElement)
      ) {
        let r3 = await ey({
          element: e,
          expectedValue: t,
          fieldName: o3,
          modalElement: n2.modalElement,
          optionXPath: C2,
        });
        r3 && ((a3 = r3.optionElements), (c3 = r3.matchedIndex));
      }
      if (-1 !== c3) {
        let n3 = E(a3)[c3],
          u4 = oracleAnswer.isOraclePhoneCountryCodeField(o3) && n3 ? n3 : t;
        (b("select-option:before", e, {
          expectedValue: t,
          attempt: r2,
          matchedIndex: c3,
          optionText: n3,
        }),
          await em(a3[c3]),
          p2 &&
            S("option-clicked", o3, {
              attempt: r2,
              matched: c3,
            }),
          b("select-option:after", e, {
            expectedValue: t,
            attempt: r2,
            matchedIndex: c3,
            optionText: n3,
          }));
        let d3 = await eq(e, u4, o3);
        if (
          (p2 &&
            S("commit-after-click", o3, {
              attempt: r2,
              committed: d3,
            }),
          b("commit-check:after-click", e, {
            expectedValue: t,
            attempt: r2,
            committed: d3,
          }),
          !d3 &&
            ej(o3) &&
            ((d3 = await eh({
              optionElement: a3[c3],
              inputElement: e,
              expectedValue: u4,
              fieldName: o3,
              attempt: r2,
            })),
            b("commit-check:after-alternate-targets", e, {
              expectedValue: t,
              attempt: r2,
              committed: d3,
            })),
          !d3 &&
            ej(o3) &&
            (b("keyboard-confirm-current:before", e, {
              expectedValue: t,
              attempt: r2,
            }),
            await eC(e, "confirm-current"),
            b("keyboard-confirm-current:after", e, {
              expectedValue: t,
              attempt: r2,
            }),
            (d3 = await eq(e, u4, o3)),
            b("commit-check:after-confirm-current", e, {
              expectedValue: t,
              attempt: r2,
              committed: d3,
            })),
          d3 ||
            (b("keyboard-select:before", e, {
              expectedValue: t,
              attempt: r2,
            }),
            await eC(e),
            b("keyboard-select:after", e, {
              expectedValue: t,
              attempt: r2,
            }),
            (d3 = await eq(e, u4, o3)),
            b("commit-check:after-keyboard-select", e, {
              expectedValue: t,
              attempt: r2,
              committed: d3,
            })),
          d3 &&
            l2 &&
            (await delay.delay(350),
            (d3 = eB(e, t, o3)),
            b("commit-check:major-stable", e, {
              expectedValue: t,
              attempt: r2,
              committed: d3,
            })),
          !d3)
        ) {
          b("attempt:not-committed", e, {
            expectedValue: t,
            attempt: r2,
          });
          continue;
        }
        if (
          (ej(o3)
            ? b("close-committed:skipped-country", e, {
                expectedValue: t,
                attempt: r2,
              })
            : l2
              ? b("close-committed:skipped-major", e, {
                  expectedValue: t,
                  attempt: r2,
                })
              : (b("close-committed:before", e, {
                  expectedValue: t,
                  attempt: r2,
                }),
                await ec(e),
                b("close-committed:after", e, {
                  expectedValue: t,
                  attempt: r2,
                })),
          i2 &&
            (await delay.delay(ej(o3) ? 1200 : 800),
            b("address-dependent-delay:after", e, {
              expectedValue: t,
              attempt: r2,
            })),
          ej(o3) &&
            eB(e, u4, o3) &&
            (b("country-close-after-dependent:before", e, {
              expectedValue: t,
              attempt: r2,
            }),
            await ed(e),
            b("country-close-after-dependent:after", e, {
              expectedValue: t,
              attempt: r2,
            })),
          eB(e, u4, o3))
        )
          return (
            b("success", e, {
              expectedValue: t,
              attempt: r2,
            }),
            true
          );
        b("post-close:not-committed", e, {
          expectedValue: t,
          attempt: r2,
        });
      }
    }
    return (
      b("failed:no-cleanup", e, {
        expectedValue: t,
      }),
      false
    );
  }
  let o2 = xpath.getFirstOrderedNode(
    "./ancestor::div[contains(@class, 'input-field-container__left')]/following-sibling::div[contains(@class, 'input-field-container__right')]//button[contains(@class, 'icon-dropdown-arrow icon-dropdown-arrow__open')]",
    e,
  );
  return o2
    ? (dom.triggerEvents(o2, ["click", "mousedown", "mouseup"]),
      await delay.delay(200),
      true)
    : (e.blur(), false);
}
function er(e, t) {
  let r = String(e ?? "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  if (!/* @__PURE__ */ new Set(["postalcode", "zipcode", "zip"]).has(r))
    return null;
  let n = t.replace(/[^a-zA-Z0-9]/g, "");
  return n.length <= 3 ? null : n.slice(0, 3);
}
function en(e, t) {
  el(e, t);
  let r =
    "function" == typeof InputEvent
      ? new InputEvent("input", {
          bubbles: true,
          cancelable: true,
          data: t,
          inputType: "insertText",
        })
      : new Event("input", {
          bubbles: true,
          cancelable: true,
        });
  e.dispatchEvent(r);
}
function eo(e) {
  let t = e.getAttribute("aria-controls")?.trim();
  if (t) return t;
  let r =
      "undefined" != typeof document &&
      "function" == typeof document.getElementById &&
      e.id
        ? document.getElementById(`${e.id}-toggle-button`)
        : null,
    n = r?.getAttribute("aria-controls")?.trim();
  return n || `${e.id}-listbox`;
}
async function ei(e) {
  e.focus();
  let t =
    "undefined" != typeof document &&
    "function" == typeof document.getElementById &&
    e.id
      ? document.getElementById(`${e.id}-toggle-button`)
      : null;
  if (t) {
    let r =
      "true" === e.getAttribute("aria-expanded") ||
      "true" === t.getAttribute("aria-expanded");
    if (!r) {
      (e.dispatchEvent(es("keydown", "ArrowDown")),
        e.dispatchEvent(es("keyup", "ArrowDown")),
        await delay.delay(100));
      let r2 =
        "true" === e.getAttribute("aria-expanded") ||
        "true" === t.getAttribute("aria-expanded") ||
        !!document.getElementById(eo(e));
      r2 || ea(e, t);
    }
    return;
  }
  e.click();
}
function ea(e, t) {
  let r = () =>
    "true" === e.getAttribute("aria-expanded") ||
    "true" === t.getAttribute("aria-expanded") ||
    !!(
      "undefined" != typeof document &&
      "function" == typeof document.getElementById &&
      e.id &&
      document.getElementById(eo(e))
    );
  for (let e10 of [
    "pointerover",
    "mouseover",
    "pointerenter",
    "mouseenter",
    "pointerdown",
    "mousedown",
    "pointerup",
    "mouseup",
  ])
    if ((ex(t, e10), r())) return;
  t.click?.();
}
function el(e, t) {
  let r = Object.getPrototypeOf(e),
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : (e.value = t);
}
function es(e, t) {
  return "function" == typeof KeyboardEvent
    ? new KeyboardEvent(e, {
        key: t,
        code: t,
        bubbles: true,
        cancelable: true,
      })
    : new Event(e, {
        bubbles: true,
        cancelable: true,
      });
}
async function eu(e) {
  (e.dispatchEvent(es("keydown", "Escape")),
    e.dispatchEvent(es("keyup", "Escape")),
    e.blur(),
    "undefined" != typeof document &&
      document.body &&
      dom.triggerEvents(document.body, ["mousedown", "mouseup", "click"]),
    await delay.delay(50));
}
async function ec(e) {
  if ("false" === e.getAttribute("aria-expanded")) {
    await delay.delay(50);
    return;
  }
  (e.dispatchEvent(
    new Event("change", {
      bubbles: true,
    }),
  ),
    await eu(e));
}
async function ed(e) {
  let t = ef(e, "close");
  if (!t) {
    await delay.delay(100);
    return;
  }
  (ep(t), await delay.delay(200));
}
function ef(e, t) {
  let r =
      "close" === t ? "close the drop-down list" : "open the drop-down list",
    n = e.parentElement;
  for (let e10 = 0; n && e10 < 8; e10++) {
    let e11 =
        "function" == typeof n.querySelectorAll
          ? Array.from(n.querySelectorAll("button"))
          : [],
      t2 = e11.find((e12) => {
        let t3 =
          e12.getAttribute("aria-label") ||
          e12.getAttribute("title") ||
          e12.textContent ||
          "";
        return t3.trim().toLowerCase().startsWith(r);
      });
    if (t2) return t2;
    n = n.parentElement;
  }
  return null;
}
function ep(e) {
  for (let t of [
    "pointerover",
    "mouseover",
    "pointerenter",
    "mouseenter",
    "pointerdown",
    "mousedown",
    "pointerup",
    "mouseup",
  ])
    ex(e, t);
  e.click?.();
}
async function em(e) {
  let t = eg(e)[0];
  t &&
    (t.scrollIntoView?.({
      block: "nearest",
      inline: "nearest",
    }),
    t.click?.(),
    await delay.delay(200));
}
async function eh({
  optionElement: e,
  inputElement: t,
  expectedValue: r,
  fieldName: n,
  attempt: o2,
}) {
  let i2 = eg(e);
  for (let e10 = 1; e10 < i2.length; e10++) {
    let a2 = i2[e10];
    (b("alternate-target:before", t, {
      expectedValue: r,
      attempt: o2,
      targetIndex: e10,
      targetText: a2.textContent?.trim(),
    }),
      eb(a2),
      await delay.delay(250));
    let l2 = await eq(t, r, n);
    if (
      (b("alternate-target:after", t, {
        expectedValue: r,
        attempt: o2,
        targetIndex: e10,
        committed: l2,
      }),
      l2)
    )
      return true;
  }
  return false;
}
function eg(e) {
  let t = [],
    r = (e10) => {
      let r2 = e10;
      !r2 ||
        ("isConnected" in r2 && false === r2.isConnected) ||
        t.includes(r2) ||
        t.push(r2);
    };
  return (
    r(e.closest?.("[role='gridcell']")),
    r(e.closest?.("[role='option']")),
    r(e),
    r(e.closest?.("[role='row']")),
    t
  );
}
function eb(e) {
  (e.scrollIntoView?.({
    block: "nearest",
    inline: "nearest",
  }),
    eE(e));
}
async function ey({
  element: e,
  expectedValue: t,
  fieldName: r,
  modalElement: n,
  optionXPath: o2,
}) {
  let i2 = ev(n);
  if (!i2.length)
    return (
      b("country-scroll-search:no-scroller", e, {
        expectedValue: t,
      }),
      null
    );
  for (let a2 of i2) {
    let i3 = Math.max(0, a2.scrollHeight - a2.clientHeight);
    for (let l2 of eS(i3)) {
      ((a2.scrollTop = l2),
        a2.dispatchEvent?.(
          new Event("scroll", {
            bubbles: true,
          }),
        ),
        await delay.delay(180));
      let i4 = x(xpath.getOrderedNodes(o2, n).filter((e10) => !L(e10))),
        u2 = E(i4),
        c2 = oracleAnswer.findOracleSelectOptionIndex(t, u2, r);
      if (
        (b("country-scroll-search:read-options", e, {
          expectedValue: t,
          matchedIndex: c2,
          optionCount: u2.length,
          optionTexts: u2.slice(0, 12),
          scrollTop: l2,
        }),
        -1 !== c2)
      )
        return {
          optionElements: i4,
          matchedIndex: c2,
        };
    }
  }
  return null;
}
function ev(e) {
  let t = [],
    r = (e10) => {
      ew(e10) && (t.includes(e10) || t.push(e10));
    };
  if ((r(e), "function" == typeof e.querySelectorAll))
    for (let t2 of Array.from(e.querySelectorAll("*"))) r(t2);
  return t;
}
function ew(e) {
  let t = e;
  return (
    !!t &&
    "number" == typeof t.scrollTop &&
    "number" == typeof t.scrollHeight &&
    "number" == typeof t.clientHeight &&
    t.scrollHeight > t.clientHeight + 20
  );
}
function eS(e) {
  if (e <= 0) return [0];
  let t = /* @__PURE__ */ new Set();
  for (let r2 of [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.88, 1])
    t.add(Math.round(e * r2));
  let r = 400;
  for (let n = 0; n <= e; n += r) t.add(n);
  return (t.add(e), [...t].sort((e10, t2) => e10 - t2));
}
function eE(e) {
  for (let t of [
    "pointerover",
    "mouseover",
    "pointerenter",
    "mouseenter",
    "pointerdown",
    "mousedown",
    "pointerup",
    "mouseup",
    "click",
  ])
    ex(e, t);
  e.click?.();
}
function ex(e, t) {
  let r =
      "function" == typeof e.getBoundingClientRect
        ? e.getBoundingClientRect()
        : null,
    n = r ? r.left + r.width / 2 : 0,
    o2 = r ? r.top + r.height / 2 : 0,
    i2 = "pointerdown" === t || "mousedown" === t,
    a2 = {
      bubbles: true,
      cancelable: true,
      button: 0,
      buttons: i2 ? 1 : 0,
      clientX: n,
      clientY: o2,
      ...("undefined" != typeof window
        ? {
            view: window,
          }
        : {}),
    },
    l2 =
      t.startsWith("pointer") && "function" == typeof PointerEvent
        ? new PointerEvent(t, {
            ...a2,
            pointerType: "mouse",
            isPrimary: true,
          })
        : "function" == typeof MouseEvent
          ? new MouseEvent(t, a2)
          : new Event(t, {
              bubbles: true,
              cancelable: true,
            });
  e.dispatchEvent(l2);
}
async function eC(e, t = "default") {
  if ("confirm-current" === t) {
    (e.dispatchEvent(es("keydown", "Enter")),
      e.dispatchEvent(es("keyup", "Enter")),
      await (0, delay.delay)(250));
    return;
  }
  (e.dispatchEvent(es("keydown", "ArrowDown")),
    e.dispatchEvent(es("keyup", "ArrowDown")),
    e.dispatchEvent(es("keydown", "Enter")),
    e.dispatchEvent(es("keyup", "Enter")),
    await (0, delay.delay)(200));
}
function eA(e) {
  return "string" == typeof e
    ? e.replace(/\s+/g, " ").trim().toLowerCase()
    : "";
}
function ek(e) {
  return String(e ?? "")
    .replace(/[\u2019']/g, "")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/[./_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function eT(e) {
  let t = ek(e.getAttribute?.("aria-label"));
  if ("degree" === t) return true;
  let r = ek(e.closest?.(".input-row")?.textContent);
  return r.startsWith("degree ");
}
function eF(e) {
  let t = ek(e);
  return t
    ? /\bmba\b/.test(t)
      ? "mba"
      : /\bhigh school\b/.test(t)
        ? "highschool"
        : /\bged\b/.test(t)
          ? "ged"
          : /\b(?:associate|associates)\b/.test(t)
            ? "associate"
            : /\b(?:bachelor|bachelors|bs|ba|bsc)\b/.test(t)
              ? "bachelor"
              : /\b(?:master|masters|ms|ma|msc)\b/.test(t)
                ? "master"
                : /\b(?:doctor|doctorate|phd|ph d)\b/.test(t)
                  ? "doctor"
                  : /\b(?:jd|j d|juris doctor)\b/.test(t)
                    ? "jd"
                    : /\bpost\s*graduate\b.*\bdiploma\b/.test(t)
                      ? "postgraduatediploma"
                      : /\bcollege\b.*\bdiploma\b/.test(t)
                        ? "collegediploma"
                        : /\btrade\b/.test(t)
                          ? "trade"
                          : /\bother\b/.test(t)
                            ? "other"
                            : /\bnone|no degree\b/.test(t)
                              ? "none"
                              : t
    : "";
}
function eI(e, t, r) {
  if (r) {
    let r2 = eF(e);
    return t.some((e10) => {
      let t2 = eF(e10);
      return !!t2 && t2 === r2;
    });
  }
  let n = ek(e);
  return t.some((e10) => ek(e10) === n);
}
function ej(e) {
  return e?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === "country";
}
function eD(e) {
  return e?.trim().toLowerCase() === "country";
}
function eP(e) {
  let t = e?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return "address1" === t || "addressline1" === t;
}
function e_(e) {
  return (
    e.classList?.contains("cx-select-input--invalid") ||
    "true" === e.getAttribute("aria-invalid")
  );
}
function eL(e) {
  return String(e ?? "").match(/\+(\d{1,4})\b/)?.[1] ?? "";
}
function eR(e) {
  return /^\s*\(?\+\d{1,4}\)?\s*$/.test(String(e ?? ""));
}
function eO() {
  return (
    "undefined" != typeof document &&
    !!document.querySelector(
      'input[name="addressLine1"], input[name="city"], input[name="region2"], input[name="postalCode"], input[name="region1"]',
    )
  );
}
function eM(e) {
  let t = e;
  for (let e10 = 0; t && e10 < 12; e10++) {
    if (
      t.textContent?.replace(/\s+/g, " ").includes("dependent drop-down lists")
    )
      return true;
    t = t.parentElement;
  }
  return false;
}
function eN(e) {
  let t = e.parentElement;
  for (let e10 = 0; t && e10 < 8; e10++) {
    let e11 = Array.from(t.querySelectorAll("button")).filter(
      (e12) =>
        "Remove value for the Country field." ===
        e12.getAttribute("aria-label"),
    );
    if (1 === e11.length) return e11[0];
    if (e11.length > 1) break;
    t = t.parentElement;
  }
  return null;
}
async function e$(e) {
  let t = eN(e);
  if (
    (y("country:dependent-reset:prepare", {
      hasExistingCountry: !!eA(e.value),
      hasClearButton: !!t,
      dependentFieldsPresent: eO(),
    }),
    !t)
  )
    return (
      console.warn(
        "[oraclecloud][country] native dependent-address clear button unavailable",
      ),
      false
    );
  t.click();
  let r = await l.waitForCondition(() => "" === eA(e.value) && !eO(), {
    timeout: 3e3,
    interval: 50,
    observeTarget: document.body,
  });
  return (
    y("country:dependent-reset:result", {
      resetConfirmed: r,
      countryCleared: "" === eA(e.value),
      dependentFieldsPresent: eO(),
    }),
    r ||
      console.warn(
        "[oraclecloud][country] native dependent-address reset was not confirmed",
      ),
    r
  );
}
function eB(e, t, r) {
  let n = "string" == typeof e.value ? e.value : "",
    o2 = eA(e.value);
  if (!o2 || e_(e)) return false;
  if (s.isOraclePhoneCountryCodeField(r)) {
    let e10 = eL(t),
      r2 = eL(n);
    return !!e10 && e10 === r2;
  }
  return ej(r)
    ? o2 === eA(t) && (!eM(e) || eO())
    : !P(r) || (o2 === eA(t) && "true" !== e.getAttribute("aria-expanded"));
}
async function eq(e, t, r) {
  return await l.waitForCondition(() => eB(e, t, r), {
    timeout: ej(r) ? 8e3 : 1e3,
    interval: 100,
    observeTarget: "undefined" != typeof document ? document.body : void 0,
  });
}
async function eU(e, t = 500, r = 10) {
  let n = 0,
    o2 = null;
  for (; !o2 && n < r;)
    !(o2 = f.getFirstOrderedNode(e)) && (await m.delay(t), n++);
  return o2;
}
function eH(e) {
  return String(e ?? "")
    .replace(/[./_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function eY(e) {
  let t = eH(e);
  return ["true", "1", "yes"].includes(t);
}
function ez(e) {
  let t = eH(e);
  return ["false", "0", "no", "decline to state"].includes(t);
}
function eV(e) {
  if (false !== e.isConnected) return e;
  if (!e.id || !e.ownerDocument) return null;
  let t = Array.from(e.ownerDocument.querySelectorAll("input")).filter(
    (t2) => t2.id === e.id,
  );
  if (1 !== t.length) return null;
  let r = t[0];
  return r.isConnected && r.type === e.type && r.name === e.name ? r : null;
}
function eW(e) {
  let t = Array.from(e.labels || []).filter(
    (t2) =>
      t2.htmlFor === e.id && t2.classList.contains("apply-flow-input-checkbox"),
  );
  return 1 !== t.length
    ? null
    : t[0].querySelector(".apply-flow-input-checkbox__button");
}
function eG(e) {
  let t = eV(e);
  if (!t?.checked) return false;
  let r = eW(t);
  return (
    !r || r.classList.contains("apply-flow-input-checkbox__button--checked")
  );
}
async function eK(e, t, r) {
  let n = eV(e);
  if (!n || n.disabled) return false;
  let o2 = eH(r),
    i2 = t.some((e10) => {
      if (eY(e10)) return true;
      let t2 = eH(e10);
      return !!o2 && t2 === o2;
    });
  if (!i2 && t.some(ez)) return !n.checked;
  if (i2 && !n.checked) {
    let e10 = eW(n);
    ((e10 || n).click(), await m.delay(50));
  }
  if (!i2) return false;
  let a2 = await l.waitForCondition(() => eG(n), {
    timeout: 1e3,
    interval: 50,
    observeTarget: n.ownerDocument?.body,
  });
  return a2 && eG(n);
}
async function eX(e, t) {
  let r = Array.isArray(t) ? t : [t],
    n = false;
  for (let t2 = 0; t2 < e.$checkboxs.length; t2++) {
    let o2 = e.$checkboxs[t2],
      i2 = e.options?.[t2],
      a2 = await eK(o2, r, i2),
      l2 = eV(o2);
    if (
      (l2 && ((e.$checkboxs[t2] = l2), e.$input === o2 && (e.$input = l2)),
      "Current Job" === e.label && v())
    ) {
      let e10 = l2?.closest?.(".input-row"),
        t3 = e10?.closest("form-builder");
      y("employment:current-job-state", {
        originalConnected: o2.isConnected,
        liveConnected: l2?.isConnected,
        checked: l2?.checked,
        visualChecked: !!e10?.querySelector(
          ".apply-flow-input-checkbox__button--checked",
        ),
        endFields: Array.from(
          t3?.querySelectorAll('input[name="endDate"]') || [],
        ).map((e11) => ({
          readOnly: e11.readOnly,
          disabled: e11.disabled,
          required: !!e11
            .closest(".input-row")
            ?.querySelector(".input-row__label--required-star"),
        })),
      });
    }
    a2 && (n = true);
  }
  return n;
}
async function eJ(e, t) {
  let r = Array.isArray(t) ? t : [t],
    n = eT(e),
    o2 = f.getOrderedNodes(
      './/span[contains(@class, "cx-select-pill-name")]',
      e,
    ),
    i2 = false;
  for (let e10 of o2) {
    let t2 = e10.textContent?.trim();
    if (eI(t2, r, n)) {
      let t3 = f.getFirstOrderedNode("./ancestor::button", e10);
      (t3 &&
        !t3.classList.contains("cx-select-pill-section--selected") &&
        (t3.click(), await (0, m.delay)(1e3)),
        (i2 = true));
    }
  }
  return i2;
}
async function eQ(e, t) {
  let r = false,
    n = f.getOrderedNodes(
      ".//label[contains(@class, 'apply-flow-input-checkbox') or contains(@class, 'apply-flow-input-radio')]",
      e,
    );
  for (let e10 = 0; e10 < n.length; e10++) {
    let o2 = n[e10],
      i2 = o2.getAttribute("for"),
      a2 = document.getElementById(i2),
      l2 = o2.textContent?.trim();
    if (l2 && t.includes(l2)) {
      if (a2.checked) {
        r = true;
        continue;
      }
      (a2.click(), await m.delay(200), (r = true));
    }
  }
}
async function eZ(e, t) {
  let r = "string" == typeof t ? t.trim() : String(t ?? "");
  if (!r) return false;
  let n = f.getOrderedNodes(
      ".//input[contains(@class,'cx-select-input')]",
      e.$input,
    ),
    o2 = f.getOrderedNodes(
      ".//span[contains(@class,'input-field__label')]",
      e.$input,
    ),
    i2 = ["month", "day", "year"],
    a2 = false;
  for (let e10 = 0; e10 < n.length && e10 < i2.length; e10++) {
    let t2 = o2[e10]?.textContent?.trim() || i2[e10],
      l2 = p.transFormDateNumberToEg(r, t2.toLowerCase());
    if (!l2 || "NaN" === l2) return false;
    let s2 = await et(n[e10], l2);
    if (!s2) return false;
    ((a2 = true), await m.delay(300));
  }
  return a2;
}
function e0(e) {
  return tt(e);
}
async function e2(e, t, r) {
  let n = () =>
      f
        .getOrderedNodes(".//p[contains(@class, 'input-row__validation')]", e)
        .some((e10) => {
          let t2 = e10;
          return !!t2.textContent?.trim() && tt(t2);
        }),
    o2 = await l.waitForCondition(() => n() || !e0(t), {
      timeout: 5e3,
      interval: 100,
      observeTarget: "undefined" != typeof document ? document.body : void 0,
    }),
    i2 = o2 && !n() && !e0(t);
  return (
    !i2 &&
      r &&
      (y("timeline:save-validation", {
        saveDisabled: t.disabled,
        fields: f
          .getOrderedNodes(".//p[contains(@class, 'input-row__validation')]", e)
          .map((e10) => {
            let t2 = e10.closest?.(".input-row"),
              r2 = e10.textContent || "";
            return {
              label: t2
                ?.querySelector("form-element-label")
                ?.textContent?.replace(/\s+/g, " ")
                .trim(),
              visible: tt(e10),
              messageLength: r2.trim().length,
              requiredMessage: /required|must enter/i.test(r2),
              incompleteDateMessage: /whole date/i.test(r2),
              inputs: Array.from(t2?.querySelectorAll("input") || []).map(
                (e11) => ({
                  name: e11.name,
                  valueLength: e11.value.length,
                  readOnly: e11.readOnly,
                  invalid: e11.getAttribute("aria-invalid"),
                }),
              ),
            };
          }),
      }),
      a.triggerEvents(r, ["click"]),
      await l.waitForCondition(() => !e0(t), {
        timeout: 5e3,
        interval: 100,
        observeTarget: "undefined" != typeof document ? document.body : void 0,
      })),
    i2
  );
}
async function e1() {
  let e =
    f.getFirstOrderedNode(
      `//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class="timeline-form-dialog__content"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]`,
    ) || null;
  if (e) {
    let t =
      f.getFirstOrderedNode(
        ".//button[contains(@class, 'button app-dialog__footer-button save-btn')]",
        e,
      ) || null;
    if (t) {
      a.triggerEvents(t, ["click"]);
      let r =
        f.getFirstOrderedNode(
          ".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]",
          e,
        ) || null;
      return await e2(e, t, r);
    }
  }
  return false;
}
async function e3() {
  let e =
    f.getFirstOrderedNode(
      `//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class="timeline-form-dialog__content"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]`,
    ) || null;
  if (e) {
    let t =
        f.getFirstOrderedNode(
          ".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]",
          e,
        ) || null,
      r =
        f.getFirstOrderedNode(
          ".//button[contains(@class, 'button app-dialog__footer-button save-btn')]",
          e,
        ) || null;
    return t
      ? (a.triggerEvents(t, ["click"]),
        await l.waitForCondition(() => !e0(t) && (!r || !e0(r)), {
          timeout: 5e3,
          interval: 100,
          observeTarget:
            "undefined" != typeof document ? document.body : void 0,
        }))
      : !r || !e0(r);
  }
  return true;
}
async function e4() {
  let e =
    f.getFirstOrderedNode(
      `//div[@role='region' and (contains(@aria-label, 'Experience') or contains(@aria-label, 'Employment'))] | .//timeline-form-builder[@class="timeline-form-dialog__content"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]`,
    ) || null;
  if (e) {
    let t =
      f.getFirstOrderedNode(
        ".//button[contains(@class, 'button app-dialog__footer-button save-btn')]",
        e,
      ) || null;
    if (t) {
      a.triggerEvents(t, ["click"]);
      let r =
        f.getFirstOrderedNode(
          ".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]",
          e,
        ) || null;
      return await e2(e, t, r);
    }
  }
  return false;
}
async function e5() {
  let e =
    f.getFirstOrderedNode(
      `//div[@role='region' and (contains(@aria-label, 'Experience') or contains(@aria-label, 'Employment'))] | .//timeline-form-builder[@class="timeline-form-dialog__content"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]`,
    ) || null;
  if (e) {
    let t =
      f.getFirstOrderedNode(
        ".//button[contains(@class, 'button app-dialog__footer-button cancel-btn')]",
        e,
      ) || null;
    t && t.click();
  }
}
function e6(e) {
  let t =
      "education" === e
        ? "timeline-education-add-button"
        : "timeline-work-add-button",
    r = `timeline-add-${e}-button`;
  if ("undefined" == typeof document) return null;
  let n = f.getFirstOrderedNode(
      "education" === e
        ? `//div[@role='region' and contains(@aria-label, 'Education')] | .//timeline-form-builder[@class="timeline-form-dialog__content"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]`
        : `//div[@role='region' and (contains(@aria-label, 'Experience') or contains(@aria-label, 'Employment'))] | .//timeline-form-builder[@class="timeline-form-dialog__content"] | //div[contains(@class, 'apply-flow-block--work-and-education-timeline')]`,
    ),
    o2 = n
      ? f.getOrderedNodes(
          ".//div[contains(@class, 'profile-add-item')]/button",
          n,
        )
      : [],
    i2 = o2.find((e10) => tt(e10));
  if (i2) return i2;
  let a2 = f.getOrderedNodes(
    `//button[
      contains(@class, '${t}')
      or contains(@id, '${r}')
    ]`,
    document,
  );
  return a2.find((e10) => tt(e10)) || null;
}
async function e8() {
  let e = e6("education");
  e && (e.click(), await m.delay(100));
}
async function e9() {
  let e = e6("experience");
  e && (e.click(), await m.delay(100));
}
function e7(e) {
  return "string" == typeof e
    ? e.replace(/\s+/g, " ").trim().toLowerCase()
    : "";
}
function te(e) {
  let t = Array.isArray(e) ? e : e ? [e] : [],
    r = [];
  for (let e10 of t) {
    let t2 = "string" == typeof e10 ? e10.split(/[,;\n]+/) : [`${e10 ?? ""}`];
    for (let e11 of t2) {
      let t3 = e11.replace(/\s+/g, " ").trim();
      t3 && !r.includes(t3) && r.push(t3);
    }
  }
  return r;
}
function tt(e) {
  if (!e || ("isConnected" in e && false === e.isConnected)) return false;
  let t =
    "function" == typeof e.getBoundingClientRect
      ? e.getBoundingClientRect()
      : null;
  if (t && (t.width <= 0 || t.height <= 0)) return false;
  if (
    "undefined" != typeof window &&
    "function" == typeof window.getComputedStyle
  ) {
    let t2 = window.getComputedStyle(e);
    if (
      "none" === t2.display ||
      "hidden" === t2.visibility ||
      "0" === t2.opacity
    )
      return false;
  }
  return true;
}
function tr(e) {
  let t =
      "Languages" === e ? ["Languages", "Language Skills", "Language"] : [e],
    r = t
      .map((e10) => {
        let t2 = e10.toLowerCase();
        return `
          normalize-space()='${e10}'
          or translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')='${t2}'
        `;
      })
      .join(" or ");
  return (
    f.getFirstOrderedNode(`//apply-flow-block[
        .//*[contains(@class, 'apply-flow-block__header')]//*[
          ${r}
        ]
        or .//apply-flow-block-title//*[
          ${r}
        ]
      ]`) || null
  );
}
function tn() {
  return tr("Skills");
}
function to() {
  return tr("Languages");
}
function ti(e) {
  let t = e.closest?.(".input-row, .input-field-container");
  return e7(t?.textContent);
}
function ta(e) {
  let t = ti(e),
    r = e7(e.getAttribute?.("name") || e.id);
  return t.includes("years of experience") || r.includes("yearsofexperience");
}
function tl(e) {
  if (ta(e)) return false;
  let t = ti(e),
    r = e7(e.getAttribute?.("name") || e.id);
  return t.includes("skill") || r.includes("skill");
}
function ts(e) {
  let t =
    f.getFirstOrderedNode(
      `.//button[
        contains(@class, 'apply-flow-profile-item-tile__new-tile')
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'add'
        )
        and contains(
          translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
          'skill'
        )
      ]`,
      e,
    ) || null;
  return t && tt(t)
    ? t
    : f.getFirstOrderedNode(
        `.//button[
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
      ]`,
        e,
      ) || null;
}
function tu(e) {
  let t = f.getOrderedNodes(
    `//div[
        @role='dialog'
        or contains(@class, 'app-dialog')
        or contains(@class, 'timeline-form-dialog')
      ][.//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'skill')]]
        //input[not(@type='hidden') and not(@type='file')]
      | .//input[not(@type='hidden') and not(@type='file')]`,
    e,
  );
  return (
    t.find((e10) => tt(e10) && tl(e10)) ??
    t.find((e10) => tt(e10) && !ta(e10)) ??
    null
  );
}
function tc(e, t) {
  let r =
    e.closest?.("form") ||
    e.closest?.("[role='dialog'], .app-dialog, .timeline-form-dialog") ||
    t;
  return (
    f.getFirstOrderedNode(
      `.//button[
        not(contains(@class, 'apply-flow-profile-item-tile__new-tile'))
        and (
          contains(normalize-space(), 'ADD SKILL')
          or contains(normalize-space(), 'SAVE')
          or contains(normalize-space(), 'Add Skill')
          or contains(normalize-space(), 'Save')
        )
      ]`,
      r,
    ) || null
  );
}
function td(e) {
  if (
    (e.scrollIntoView?.({
      block: "center",
      inline: "center",
    }),
    e.focus?.(),
    "function" == typeof e.click)
  ) {
    e.click();
    return;
  }
  a.triggerEvents(e, ["click"]);
}
async function tf(e, t, r) {
  let n = e7(r);
  return await l.waitForCondition(
    () => {
      let t2 = e7(e.textContent);
      return !!n && t2.includes(n);
    },
    {
      timeout: 6e3,
      interval: 200,
      observeTarget: e,
    },
  );
}
async function tp(e, t) {
  let r = ts(e);
  r && (td(r), await m.delay(400));
  let n = tu(e);
  if (!n) return false;
  (n.focus?.(),
    n.click?.(),
    el(n, t),
    n.dispatchEvent(
      "function" == typeof InputEvent
        ? new InputEvent("input", {
            bubbles: true,
            cancelable: true,
            data: t,
            inputType: "insertText",
          })
        : new Event("input", {
            bubbles: true,
            cancelable: true,
          }),
    ),
    n.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    ),
    await m.delay(100));
  let o2 = tc(n, e);
  return !!o2 && (td(o2), await tf(e, n, t));
}
async function tm(e) {
  let t = te(e).slice(0, 10);
  if (0 === t.length) return false;
  let r = tn();
  if (!r) return false;
  let n = 0;
  for (let e10 of t) {
    if (await tp(r, e10)) {
      ((n += 1), await m.delay(200));
      continue;
    }
    break;
  }
  return n > 0;
}
function th(e) {
  let t = Array.isArray(e) ? e : e ? [e] : [],
    r = [];
  for (let e10 of t) {
    let t2 = "string" == typeof e10 ? e10.split(/[,;\n]+/) : [`${e10 ?? ""}`];
    for (let e11 of t2) {
      let t3 = e11.replace(/\s+/g, " ").trim();
      t3 && !r.includes(t3) && r.push(t3);
    }
  }
  return r;
}
function tg(e) {
  let t = e7(e.getAttribute?.("name") || e.id),
    r = ti(e);
  return (
    t.includes("contentitemid") ||
    t.includes("language") ||
    r.includes("language")
  );
}
function tb(e) {
  let t =
    f.getFirstOrderedNode(
      ".//button[contains(@class, 'apply-flow-profile-item-tile__new-tile') and contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'add language')]",
      e,
    ) || null;
  return t && tt(t)
    ? t
    : f.getFirstOrderedNode(
        `.//button[
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
      ]`,
        e,
      ) || null;
}
function ty(e) {
  let t = f.getOrderedNodes(
    `//div[
        @role='dialog'
        or contains(@class, 'app-dialog')
        or contains(@class, 'timeline-form-dialog')
      ][.//*[contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'language')]]
        //input[not(@type='hidden') and not(@type='file')]
      | .//input[not(@type='hidden') and not(@type='file')]`,
    e,
  );
  return (
    t.find((e10) => tt(e10) && tg(e10)) ?? t.find((e10) => tt(e10)) ?? null
  );
}
function tv(e, t) {
  let r =
    e.closest?.("form") ||
    e.closest?.("[role='dialog'], .app-dialog, .timeline-form-dialog") ||
    t;
  return (
    f.getFirstOrderedNode(
      `.//button[
        not(contains(@class, 'apply-flow-profile-item-tile__new-tile'))
        and (
          contains(@class, 'save-btn')
          or contains(normalize-space(), 'ADD LANGUAGE')
          or contains(normalize-space(), 'Add Language')
          or contains(normalize-space(), 'SAVE')
          or contains(normalize-space(), 'Save')
        )
      ]`,
      r,
    ) || null
  );
}
async function tw(e, t, r) {
  let n = e7(r);
  return await l.waitForCondition(
    () => {
      let t2 = e7(e.textContent);
      return !!n && t2.includes(n);
    },
    {
      timeout: 6e3,
      interval: 200,
      observeTarget: e,
    },
  );
}
async function tS(e, t) {
  let r = ty(e);
  if (!r) {
    let t2 = tb(e);
    if (!t2) return false;
    (a.triggerEvents(t2, ["click"]), await m.delay(400), (r = ty(e)));
  }
  if (!r) return false;
  let n = await et(r, t);
  n ||
    (r.focus?.(),
    r.click?.(),
    el(r, t),
    r.dispatchEvent(
      "function" == typeof InputEvent
        ? new InputEvent("input", {
            bubbles: true,
            cancelable: true,
            data: t,
            inputType: "insertText",
          })
        : new Event("input", {
            bubbles: true,
            cancelable: true,
          }),
    ),
    r.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    ),
    await m.delay(100));
  let o2 = tv(r, e);
  return !!o2 && (a.triggerEvents(o2, ["click"]), await tw(e, r, t));
}
async function tE(e) {
  let t = th(e).slice(0, 10);
  if (0 === t.length) return false;
  let r = to();
  if (!r) return false;
  let n = 0;
  for (let e10 of t) (await tS(r, e10)) && ((n += 1), await m.delay(200));
  return n > 0;
}
async function tx(e, t, r) {
  return tD("resume")
    ? await tR("resume", await i.fetchPdfAsBlob(e), t, r)
    : (console.warn(
        "[oraclecloud][resume] visible attachment slot unavailable",
      ),
      false);
}
let tC = {
  resume: {
    rootSelector: "resume-upload-button",
    fieldLabel: "Resume/CV",
    logKey: "resume",
  },
  coverLetter: {
    rootSelector: "cover-letter-upload-button",
    fieldLabel: "Cover Letter",
    logKey: "cover-letter",
  },
};
function tA(e) {
  let t = document.querySelector(tC[e].rootSelector),
    r = t instanceof HTMLElement && tq(t) ? t : null;
  return r;
}
function tk(e) {
  let t = tA(e);
  if (!t) return null;
  let r =
    t.querySelector('input[type="file"]') ||
    f.getFirstOrderedNode(".//input[@type='file']", t);
  return r;
}
function tT(e) {
  let t = tA(e);
  if (!t) return null;
  let r =
      t.querySelector(".attachment-upload-button__filled") ||
      f.getFirstOrderedNode(
        ".//div[contains(@class,'attachment-upload-button__filled')]",
        t,
      ),
    n = tq(r) ? r : null;
  return n;
}
function tF(e) {
  let t = tA(e);
  if (!t) return null;
  let r =
    t.querySelector(".attachment-upload-button") ||
    f.getFirstOrderedNode(
      ".//div[contains(@class,'attachment-upload-button')]",
      t,
    );
  return tq(r) ? r : null;
}
function tI(e) {
  let t = tA(e);
  if (!t) return null;
  let r =
    t.querySelector(
      ".attachment-upload-button__label, .file-form-element__label, .attachment-upload-button-mobile__label",
    ) ||
    f.getFirstOrderedNode(
      `.//label[
          contains(@class,'attachment-upload-button__label')
          or contains(@class,'file-form-element__label')
          or contains(@class,'attachment-upload-button-mobile__label')
        ]`,
      t,
    );
  return tq(r) ? r : null;
}
function tj(e) {
  let t = tT(e);
  if (!t) return null;
  let r =
    f.getFirstOrderedNode(
      `.//button[contains(@class,'attachment-upload-button__bottom-button')
        and (normalize-space()='Remove' or contains(@aria-label,'Remove attachment'))]`,
      t,
    ) || null;
  return r;
}
function tD(e) {
  let t = tF(e);
  return !!(t && tk(e)) || !!tT(e);
}
function tP() {
  return tD("coverLetter");
}
async function t_() {
  let e =
    f.getFirstOrderedNode(`//div[@role='dialog' or contains(@class,'app-dialog') or contains(@class,'oj-dialog')]
        //button[
          normalize-space()='Delete'
          or normalize-space()='DELETE'
          or @data-qa='confirmDelete'
          or @data-qa='confirmDeleteButton'
        ]`) || null;
  e &&
    (a.triggerEvents(e, ["click", "mousedown", "mouseup"]), await m.delay(200));
}
async function tL(e) {
  let t = tT(e);
  if (!t) return true;
  let r = tj(e);
  if (!r) return false;
  (a.triggerEvents(r, ["click", "mousedown", "mouseup"]),
    r.click?.(),
    await m.delay(150),
    await t_());
  let n = await l.waitForCondition(() => !!tI(e), {
    timeout: 1e4,
    interval: 200,
    observeTarget: document.body,
  });
  return n;
}
async function tR(e, t, r, n) {
  let o2 = await tL(e);
  if (!o2)
    return (
      console.warn(`[oraclecloud][${tC[e].logKey}] delete failed, skip upload`),
      false
    );
  await l.waitForCondition(() => !!tI(e) && !!tk(e), {
    timeout: 5e3,
    interval: 100,
    observeTarget: document.body,
  });
  let i2 = tk(e);
  if (!i2?.files)
    return (
      console.warn(
        `[oraclecloud][${tC[e].logKey}] input unavailable after delete`,
      ),
      false
    );
  ((i2.files = t.files),
    i2.dispatchEvent(
      new Event("change", {
        bubbles: true,
        cancelable: false,
      }),
    ));
  let a2 = await l.waitForCondition(() => !!tT(e), {
    timeout: 1e4,
    interval: 200,
    observeTarget: document.body,
  });
  return (
    !!a2 &&
    (r({
      label: tC[e].fieldLabel,
      required: true,
    }),
    n(tC[e].fieldLabel),
    true)
  );
}
async function tO(e, t, r) {
  return tD("coverLetter")
    ? await tR("coverLetter", await i.fetchCoverLetterPdfAsBlob(e), t, r)
    : (console.warn(
        "[oraclecloud][cover-letter] visible attachment slot unavailable",
      ),
      false);
}
function tM() {
  return tk("coverLetter");
}
async function tN(e, t, r = {}) {
  let n = s.resolveOracleCountryValue(e);
  if (!n) return false;
  let o2 =
    t || f.getFirstOrderedNode('.//input[@name="country" or @id="country-12"]');
  if (!o2 || !tq(o2)) return false;
  let i2 = o2.value,
    a2 = eM(o2),
    l2 = r.refreshDependentAddress && !!eA(i2) && a2;
  if (
    (y("country:dependent-reset:decision", {
      refreshRequested: !!r.refreshDependentAddress,
      hasExistingCountry: !!eA(i2),
      hasDependentDropdownHint: a2,
      willRefresh: l2,
    }),
    l2)
  ) {
    let e10 = await e$(o2);
    if (!e10) return false;
    if (!t) {
      let e11 = f.getFirstOrderedNode(
        './/input[@name="country" or @id="country-12"]',
      );
      if (!e11 || !tq(e11))
        return (y("country:dependent-reset:country-input-missing"), false);
      o2 = e11;
    }
  }
  let u2 = await fillSelectField(o2, n, "country");
  return (
    !!u2 ||
    (l2 ? y("country:dependent-reset:selection-failed") : await t$(o2, i2),
    false)
  );
}
async function t$(e, t) {
  let r = t.trim();
  if (r) {
    if ((await eu(e), eB(e, r, "country"))) return true;
    let n2 = await fillSelectField(e, r, "country");
    if (n2) return true;
    let o2 = await tB(e, t);
    return (
      console.warn(
        "[oraclecloud][country] failed to verify semantic restore; preserved the original value conservatively",
      ),
      o2
    );
  }
  (en(e, ""), await eu(e));
  let n = "" === eA(e.value);
  return (
    (!r && !!n) ||
    (console.warn("[oraclecloud][country] failed to clear the failed query"), n)
  );
}
async function tB(e, t) {
  return (
    en(e, t),
    e.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    ),
    e.dispatchEvent(es("keydown", "Escape")),
    e.dispatchEvent(es("keyup", "Escape")),
    e.blur(),
    await delay.delay(50),
    eA(e.value) === eA(t)
  );
}
function tq(e) {
  if (!e) return false;
  let t = "function" == typeof e.checkVisibility;
  return t ? (e.checkVisibility() ?? false) : !!e.offsetParent;
}
async function proceedOracleJobDetailToApply() {
  let e = new URL(window.location.href);
  if (oracleUrl.isOracleApplyPath(e.pathname)) return true;
  if (!oracleUrl.isOracleJobDetailPath(e.pathname)) return false;
  let t =
    xpath.getFirstOrderedNode(
      "//button[normalize-space()='APPLY NOW' or normalize-space()='Apply Now']",
    ) ||
    (0, xpath.getFirstOrderedNode)(
      "//a[normalize-space()='APPLY NOW' or normalize-space()='Apply Now']",
    ) ||
    (0, xpath.getFirstOrderedNode)(
      "//*[@role='button' and (normalize-space()='APPLY NOW' or normalize-space()='Apply Now')]",
    );
  if (!tq(t))
    return (
      console.warn("[oraclecloud] job-detail: apply-now button unavailable"),
      false
    );
  try {
    t.scrollIntoView({
      block: "center",
      inline: "center",
    });
  } catch {}
  t instanceof HTMLAnchorElement &&
  t.href &&
  oracleUrl.isOracleApplyPath(new URL(t.href, window.location.origin).pathname)
    ? (console.info("[oraclecloud] job-detail: apply-now dispatch", {
        route: "anchor-navigation",
      }),
      (window.location.href = t.href))
    : (console.info("[oraclecloud] job-detail: apply-now dispatch", {
        route: "native-click",
      }),
      t.click?.());
  for (let e10 = 0; e10 < 80; e10++) {
    await delay.delay(200);
    let e11 = new URL(window.location.href).pathname,
      t2 = oracleUrl.isOracleApplyPath(e11),
      r =
        !!xpath.getFirstOrderedNode(
          "//apply-flow-block | //section[contains(@class, 'email-verification')] | //quick-email-verification-form",
        ) ||
        !!xpath.getFirstOrderedNode(
          "//button[@data-automation-id='pageFooterNextButton']",
        );
    if (t2 && r) return (await delay.delay(500), true);
  }
  return (
    console.warn(
      "[oraclecloud] job-detail: clicked apply-now but did not enter apply flow",
    ),
    false
  );
}
async function proceedOracleEmailGateStep() {
  let e = window.location.href;
  if (!e.includes("/apply/email")) return false;
  let t =
      xpath.getFirstOrderedNode(
        "//input[@aria-label='Email Address' or @name='email']",
      ) || null,
    r = t?.value?.trim() || "";
  if (!r)
    return (
      console.warn("[oraclecloud] email-gate: empty email, skip next-step"),
      false
    );
  let n = () =>
      xpath.getFirstOrderedNode(
        "//button[@data-automation-id='pageFooterNextButton' or @data-automation-id='bottom-navigation-next-button']",
      ) ||
      xpath.getFirstOrderedNode(
        "//button[normalize-space()='Next' or contains(normalize-space(), 'Next')]",
      ),
    o2 = null;
  for (let e10 = 0; e10 < 15; e10++) {
    let e11 = n();
    if (e11) {
      let t2 =
        "function" == typeof e11.checkVisibility
          ? e11.checkVisibility()
          : !!e11.offsetParent;
      if (t2 && !e11.disabled) {
        o2 = e11;
        break;
      }
    }
    await delay.delay(200);
  }
  if (!o2)
    return (
      console.warn("[oraclecloud] email-gate: next button unavailable"),
      false
    );
  try {
    o2.scrollIntoView({
      block: "center",
      inline: "center",
    });
  } catch {}
  return (o2.click(), true);
}

export {
  addEducation,
  addExperience,
  cancelEducation,
  cancelExperience,
  cleanEduAndExp,
  ensureOracleLinkRows,
  fillCheckBoxesField,
  fillCountry,
  fillLanguages,
  fillListboxField,
  fillRadioGroupField,
  fillSelectField,
  fillSkills,
  findOracleCoverLetterInput,
  hasOracleCoverLetterSlot,
  proceedOracleEmailGateStep,
  proceedOracleJobDetailToApply,
  saveEducation,
  saveExperience,
  uploadCoverLetter,
  uploadResume,
};
