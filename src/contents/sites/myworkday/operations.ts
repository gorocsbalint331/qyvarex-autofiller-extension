// @ts-nocheck
/**
 * MyWorkday — DOM fill operations (text, select, date, resume, skills, submit tracking).
 */

import * as choiceMatch from "../../methods/choice-match.ts";
import * as agreements from "./agreements.ts";
import * as messaging from "@plasmohq/messaging";
import * as crawlerUtils from "../../crawler/fill-utils/label.ts";
import * as selectUtils from "../../crawler/fill-utils/select.ts";
import * as answerMethods from "../../methods/answer.ts";
import * as checkboxLabel from "../../methods/checkbox-label.ts";
import * as dom from "../../methods/dom.ts";
import * as observer from "../../methods/observer.ts";
import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.ts";
import * as educationItemTrace from "../education-item-trace.js";
import * as snapshotAlignment from "./snapshot-alignment.ts";
import * as pagination from "../../../core/pagenation.js";
import * as xpath from "../../../core/xpath.js";
import * as urlStore from "../../../store/url.js";
import * as delay from "../../../utils/delay.js";
import * as getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js";
import * as dateParts from "./date-parts.ts";
import * as rules from "./rules.ts";
const S = { default: getTargetOrTimeout?.default ?? getTargetOrTimeout };
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
  N = false;
async function $() {
  if (N) return true;
  try {
    return (
      await messaging.sendToBackground({
        name: "injectWorkdayFiber",
      }),
      (N = true),
      true
    );
  } catch (e) {
    return (
      console.warn("[WorkdayFiber] failed to inject main world script:", e),
      false
    );
  }
}
async function B(e, t) {
  let r = await $();
  if (!r) return false;
  let n = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  e.setAttribute("data-jr-wd-fiber-id", n);
  let o2 = `[data-jr-wd-fiber-id="${n}"]`,
    i2 = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  return new Promise((r2) => {
    let n2 = setTimeout(() => {
      (document.removeEventListener(A, a2),
        e.removeAttribute("data-jr-wd-fiber-id"),
        r2(false));
    }, 3e3);
    function a2(t10) {
      let o3 = t10.detail;
      o3?.requestId === i2 &&
        (document.removeEventListener(A, a2),
        clearTimeout(n2),
        e.removeAttribute("data-jr-wd-fiber-id"),
        r2(!!o3.success));
    }
    (document.addEventListener(A, a2),
      document.dispatchEvent(
        new CustomEvent(C, {
          detail: {
            selector: o2,
            value: t,
            requestId: i2,
          },
        }),
      ));
  });
}
async function q(e, t) {
  let r = await $();
  if (!r) return false;
  let n = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  e.setAttribute("data-jr-wd-fiber-id", n);
  let o2 = `[data-jr-wd-fiber-id="${n}"]`,
    i2 = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  return new Promise((r2) => {
    let n2 = setTimeout(() => {
      (document.removeEventListener(T, a2),
        e.removeAttribute("data-jr-wd-fiber-id"),
        r2(false));
    }, 3e3);
    function a2(t10) {
      let o3 = t10.detail;
      o3?.requestId === i2 &&
        (document.removeEventListener(T, a2),
        clearTimeout(n2),
        e.removeAttribute("data-jr-wd-fiber-id"),
        r2(!!o3.success));
    }
    (document.addEventListener(T, a2),
      document.dispatchEvent(
        new CustomEvent(k, {
          detail: {
            selector: o2,
            candidates: t,
            requestId: i2,
          },
        }),
      ));
  });
}
async function U(e, t, r, n) {
  let o2 = await $();
  if (!o2)
    return {
      success: false,
      error: "main world injection failed",
    };
  let i2 = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  e.setAttribute("data-jr-wd-fiber-id", i2);
  let a2 = `[data-jr-wd-fiber-id="${i2}"]`,
    l2 = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  return new Promise((o3) => {
    let i3 = setTimeout(() => {
      (document.removeEventListener(I, s2),
        e.removeAttribute("data-jr-wd-fiber-id"),
        o3({
          success: false,
          error: "date fiber request timeout",
        }));
    }, 3e3);
    function s2(t10) {
      let r2 = t10.detail;
      r2?.requestId === l2 &&
        (document.removeEventListener(I, s2),
        clearTimeout(i3),
        e.removeAttribute("data-jr-wd-fiber-id"),
        o3({
          success: !!r2.success,
          inputHandled: !!r2.inputHandled,
          parentCommitHandled: !!r2.parentCommitHandled,
          contextCommitHandled: !!r2.contextCommitHandled,
          dateFieldMetadataId:
            "string" == typeof r2.dateFieldMetadataId
              ? r2.dateFieldMetadataId
              : void 0,
          error: "string" == typeof r2.error ? r2.error : void 0,
        }));
    }
    (document.addEventListener(I, s2),
      document.dispatchEvent(
        new CustomEvent(F, {
          detail: {
            selector: a2,
            month: t,
            day: r,
            year: n,
            requestId: l2,
          },
        }),
      ));
  });
}
async function H(e, t = true) {
  let r = await $();
  if (!r) return false;
  let n = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  e.setAttribute("data-jr-wd-fiber-id", n);
  let o2 = `[data-jr-wd-fiber-id="${n}"]`,
    i2 = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  return new Promise((r2) => {
    let n2 = setTimeout(() => {
      (document.removeEventListener(D, a2),
        e.removeAttribute("data-jr-wd-fiber-id"),
        r2(false));
    }, 3e3);
    function a2(t10) {
      let o3 = t10.detail;
      o3?.requestId === i2 &&
        (document.removeEventListener(D, a2),
        clearTimeout(n2),
        e.removeAttribute("data-jr-wd-fiber-id"),
        r2(!!o3.success));
    }
    (document.addEventListener(D, a2),
      document.dispatchEvent(
        new CustomEvent(j, {
          detail: {
            selector: o2,
            checked: t,
            requestId: i2,
          },
        }),
      ));
  });
}
async function Y(e, t) {
  (await B(e, t)) || (await dom.fillInputTextField(e, t));
}
function z(e) {
  return rules.isWorkdayInputSelected(e);
}
function V(e) {
  if (!e.id || "undefined" == typeof document) return null;
  let t = e.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  try {
    return document.querySelector(`label[for="${t}"]`);
  } catch {
    return null;
  }
}
function W(e) {
  let t = e.parentElement,
    r = t?.nextElementSibling || t?.previousElementSibling,
    n = [
      "function" == typeof e.closest ? e.closest("label") : null,
      V(e),
      r,
      t,
    ];
  return n.find((e10) => !!e10 && "function" == typeof e10.click) || e;
}
async function G(e, t = 250, r = z) {
  let n = Date.now();
  for (; Date.now() - n < t;) {
    if (r(e)) return true;
    await delay.delay(25);
  }
  return !!r(e);
}
async function K(e, t, r = 300, n = 1200) {
  let o2 = Date.now(),
    i2 = null;
  for (; Date.now() - o2 < n;) {
    if (t(e)) {
      if ((i2 ?? (i2 = Date.now()), Date.now() - i2 >= r)) return true;
    } else i2 = null;
    await delay.delay(50);
  }
  return false;
}
function X(e, t) {
  let r =
    t.startsWith("pointer") && "function" == typeof PointerEvent
      ? PointerEvent
      : MouseEvent;
  e.dispatchEvent(
    new r(t, {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  );
}
function J(e) {
  if ("function" == typeof e.click) {
    e.click();
    return;
  }
  e.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  );
}
function Q(e) {
  if ("function" == typeof e.dispatchEvent)
    for (let t of ["pointerdown", "mousedown", "pointerup", "mouseup"]) X(e, t);
  if ("function" == typeof e.click) {
    e.click();
    return;
  }
  X(e, "click");
}
async function Z(e, t = true, r = z, n = true) {
  let o2 = (e10) => r(e10) === n;
  if (!e || o2(e)) return;
  let i2 = await H(e, n);
  if (!(i2 && (await G(e, 500, o2)))) {
    if (
      (e.focus(),
      e.dispatchEvent(
        new FocusEvent("focus", {
          bubbles: true,
          cancelable: false,
          view: window,
        }),
      ),
      t)
    ) {
      let t10 = W(e);
      t10 !== e ? Q(t10) : J(e);
      let r2 = await G(e, 250, o2);
      (r2 || t10 === e || (J(e), (r2 = await G(e, 250, o2))),
        e.dispatchEvent(
          new Event("input", {
            bubbles: true,
            cancelable: false,
          }),
        ),
        e.dispatchEvent(
          new Event("change", {
            bubbles: true,
            cancelable: false,
          }),
        ));
    } else
      e.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: false,
        }),
      );
    (e.blur(),
      e.dispatchEvent(
        new FocusEvent("blur", {
          bubbles: true,
          cancelable: false,
          view: window,
        }),
      ));
  }
}
function ee(e, t, r) {
  return (
    e.options?.[r]?.trim() ||
    checkboxLabel.normalizeRadioCheckText(checkboxLabel.getRadioCheckText(t))
  );
}
function et(e, t, r) {
  let n = checkboxLabel.normalizeRadioCheckText(e).replace(/\s+/g, " "),
    i2 = t
      .map((e10) =>
        checkboxLabel
          .normalizeRadioCheckText(String(e10))
          .replace(/\s+/g, " "),
      )
      .filter(Boolean);
  if (i2.some((e10) => choiceMatch.isExactChoiceMatch(n, e10))) return true;
  let a2 = i2[0] || "",
    l2 = r.toLowerCase();
  return (
    ("true" === a2 && "yes" === n) ||
    ("false" === a2 && "no" === n) ||
    (n.includes("have read") && "true" === a2) ||
    (answerMethods.isMatched(n, r) && "true" === a2) ||
    ("true" === a2 && (n.includes("current") || l2.includes("current"))) ||
    (l2.includes("current") && "true" === a2)
  );
}
async function er(e, t) {
  let r = Array.isArray(t) ? t : [t],
    n = agreements.getWorkdayAgreementState(e);
  if (null !== n) {
    let t10 = 1 === r.length ? String(r[0]).trim().toLowerCase() : "";
    if ("true" !== t10 && "false" !== t10)
      return (
        console.info("[MyWorkday][autofill-debug] agreement:no-valid-answer", {
          selected: n,
          required: !!e.required,
        }),
        n
      );
    let o3 = "true" === t10,
      i2 = e.$checkboxs[0];
    (console.info("[MyWorkday][autofill-debug] agreement:fill-start", {
      selected: n,
      targetSelected: o3,
      required: !!e.required,
    }),
      await Z(i2, true, z, o3));
    let a3 = z(i2),
      l2 = a3 === o3,
      s2 = l2 && (!e.required || a3);
    return (
      console.info("[MyWorkday][autofill-debug] agreement:fill-result", {
        selected: a3,
        targetSelected: o3,
        complete: s2,
        reason: l2
          ? s2
            ? "answer-matched"
            : "required-unchecked"
          : "state-not-committed",
      }),
      s2
    );
  }
  if (
    1 === e.$checkboxs.length &&
    /^i currently work here\s*\*?$/i.test(e.label.trim()) &&
    1 === r.length &&
    "false" === String(r[0]).trim().toLowerCase()
  ) {
    let t10 = e.$checkboxs[0];
    return (await Z(t10, true, z, false), !z(t10));
  }
  let o2 = rules.isWorkdaySelfIdentifyLabel(e.label),
    a2 = o2 ? rules.isWorkdaySelfIdentifyInputSelected : z;
  for (let t10 = 0; t10 < e.$checkboxs.length; t10++) {
    let n2 = e.$checkboxs[t10],
      i2 = ee(e, n2, t10);
    if (i2 && et(i2, r, e.label))
      for (
        let e10 = 0;
        e10 < 2 &&
        !a2(n2) &&
        (await Z(n2, true, a2), !(!o2 || (await K(n2, a2))));
        e10++
      );
  }
  return e.$checkboxs.some((e10) => a2(e10));
}
async function en(e = "United States of America") {
  let t = xpath.getFirstOrderedNode(
    './/button[@data-automation-id="countryDropdown" or @data-automation-id="formField-country" or @id="country--country"]',
  );
  if (!t) return false;
  let r = t;
  return !!ea(r.textContent, e) || ts(r, [e]);
}
function eo(e) {
  let t = el(e),
    r = es(e);
  return !t || "select one" === t || ed(r, "selectone");
}
function ei(e, t) {
  return (
    !!(e === t || ed(e, t)) ||
    [
      ["unitedstatesofamerica", "unitedstates", "usa", "us"],
      ["canada", "ca"],
    ].some((r) => r.includes(e) && r.includes(t))
  );
}
function ea(e, t) {
  if (eo(e)) return false;
  let r = es(e),
    n = es(t);
  return !!r && !!n && ei(r, n);
}
function el(e) {
  return String(e ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function es(e) {
  return el(e).replace(/[^a-z0-9]/g, "");
}
function eu(e) {
  return el(e).replace(/[^a-z0-9+#.]/g, "");
}
function ec(e) {
  return el(e).split(/[^a-z0-9]+/).filter(Boolean);
}
function ed(e, t) {
  return (
    !!e &&
    !!t &&
    !(e.length <= t.length) &&
    e.length % t.length == 0 &&
    e === t.repeat(e.length / t.length)
  );
}
function ef(e) {
  let t = el(e?.textContent);
  return "no items" === t || "no items." === t || "no matches found" === t;
}
function ep(e) {
  return "no matches found" === el(e);
}
function em(e) {
  return e
    .map((e10) => el(e10?.textContent))
    .filter(Boolean)
    .join("|");
}
function eh(e, t, r = {}) {
  let n = r.strict ?? true,
    o2 = r.allowFuzzy ?? true,
    i2 = r.allowExpandedMatch ?? true,
    a2 = el(e),
    l2 = es(e),
    u2 = eu(e),
    c2 = u2 !== l2,
    d2 = ec(e),
    f2 = i2 && (!n || d2.length > 1 || l2.length <= 3),
    p2 = t.filter((e10) => !ef(e10));
  if (!l2 || 0 === p2.length) return null;
  let m2 = p2.find((e10) => {
    let t10 = e10?.textContent,
      r2 = el(t10),
      n2 = es(t10),
      o3 = eu(t10),
      i3 = o3 !== n2,
      s2 = !c2 && !i3;
    return (
      r2 === a2 || o3 === u2 || ed(o3, u2) || (s2 && (n2 === l2 || ed(n2, l2)))
    );
  });
  if (m2) return m2;
  let h2 =
    c2 || !f2 ? null : p2.find((e10) => ec(e10?.textContent).includes(l2));
  if (h2) return h2;
  if ((n && !c2 && l2.length <= 3) || (n && !f2)) return null;
  let g2 = c2 ? u2 : l2,
    b2 = p2.find((e10) => {
      let t10 = c2 ? eu(e10?.textContent) : es(e10?.textContent);
      return t10.length > 0 && t10.includes(g2);
    });
  if (b2) return b2;
  if (o2) {
    let t10 = selectUtils.fuzzyFindBest(e, p2, {
      threshold: n ? 0.7 : 0.5,
      normalize: (e10) => el(e10),
    });
    if (t10) return t10;
  }
  return !n && r.allowFirstCandidateFallback ? (p2[0] ?? null) : null;
}
function eg(e) {
  return (
    xpath.getFirstOrderedNode(
      './/ancestor-or-self::*[@data-automation-id="multiselectInputContainer" or @data-automation-id="multiSelectContainer"]',
      e,
    ) ??
    e.parentElement?.parentElement ??
    e
  );
}
function eb(e) {
  let t = e?.getAttribute?.("data-automation-id");
  return "multiselectInputContainer" === t || "multiSelectContainer" === t;
}
async function ey(e) {
  if (!e) return false;
  let t = eg(e),
    r = Array.from(
      t.querySelectorAll(
        '[data-automation-id="selectedItemList"] button, [data-automation-id="selectedItemList"] [role="button"], [data-automation-id="selectedItemList"] [aria-label*="Remove" i], [data-automation-id="selectedItemList"] [title*="Remove" i], [data-automation-id="selectedItemList"] [data-automation-id*="remove" i], [data-automation-id="selectedItemList"] [data-automation-id*="delete" i]',
      ),
    ).filter((e10) => {
      let t10 = e10;
      return !t10.disabled;
    });
  for (let e10 of r)
    (e10.click?.(),
      dom.triggerEvents(e10, ["mousedown", "mouseup", "click"]),
      await delay.delay(50));
  if (r.length > 0) {
    let e10 = "undefined" != typeof Node && t instanceof Node ? t : void 0;
    await observer.waitForCondition(() => 0 === eE(t).length, {
      timeout: 1e3,
      interval: 50,
      observeTarget: e10,
    });
  }
  return (
    (e.value = ""),
    dom.triggerEvents(e, ["input", "change", "blur"]),
    e.blur?.(),
    r.length > 0
  );
}
function ev(e, t) {
  let r = es(e?.id),
    n = es(e?.name),
    o2 = es(t?.getAttribute?.("data-automation-id")),
    i2 = el(t?.textContent),
    a2 = t?.closest?.(
      '[data-automation-id="skillsSection"], [data-automation-id="formField-skills"], [id*="Skills-section"]',
    );
  return (
    r.includes("skills") ||
    n.includes("skills") ||
    o2.includes("skills") ||
    i2.includes("type to add skills") ||
    !!a2
  );
}
function ew(e, t) {
  let r = es(e?.id),
    n = es(e?.name),
    o2 = es(t?.getAttribute?.("data-automation-id")),
    i2 = el(t?.textContent),
    a2 =
      e?.closest?.('[data-automation-id="formField-fieldOfStudy"]') ||
      t?.closest?.('[data-automation-id="formField-fieldOfStudy"]');
  return (
    r.includes("fieldofstudy") ||
    n.includes("fieldofstudy") ||
    o2.includes("fieldofstudy") ||
    i2.includes("field of study") ||
    !!a2
  );
}
function eS(e, t) {
  let r = es(e?.id),
    n = es(e?.name),
    o2 = es(t?.getAttribute?.("data-automation-id")),
    i2 = el(t?.textContent),
    a2 =
      e?.closest?.('[data-automation-id="formField-school"]') ||
      t?.closest?.('[data-automation-id="formField-school"]');
  return (
    r.includes("school") ||
    r.includes("institution") ||
    n.includes("school") ||
    n.includes("institution") ||
    o2.includes("school") ||
    o2.includes("institution") ||
    i2.includes("school or university") ||
    i2.includes("educational institution") ||
    !!a2
  );
}
function eE(e) {
  return e
    ? xpath
        .getOrderedNodes(
          './/*[@data-automation-id="selectedItemList" and @role="listbox"]//*[@data-automation-id="menuItem"]',
          e,
        )
        .map((e10) => el(e10?.textContent))
        .filter(Boolean)
    : [];
}
function ex(e, t) {
  let r = es(t);
  return (
    !!r &&
    eE(e).some((e10) => {
      let t10 = es(e10);
      return t10 === r || ed(t10, r);
    })
  );
}
function eC(e, t) {
  let r = (e ?? []).map((e10) => String(e10 ?? "").trim()).filter(Boolean),
    n = (t ?? []).map((e10) => String(e10 ?? "").trim()).filter(Boolean),
    o2 = n.map((e10) => es(e10)).filter(Boolean),
    i2 = r.filter((e10) => {
      let t10 = es(e10);
      return !t10 || !o2.some((e11) => e11 === t10 || ed(e11, t10));
    });
  return {
    requestedCount: r.length,
    selectedCount: n.length,
    missingSkills: i2,
  };
}
function eA(e, t) {
  let r = es(t);
  return (
    !!r &&
    eE(e).some((e10) => {
      let t10 = es(e10);
      return !!t10 && t10 !== r && !ed(t10, r);
    })
  );
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
  eU = /* @__PURE__ */ new WeakMap();
function eH(e = [], t = null) {
  if (e.some((e10) => ep(e10?.textContent))) return true;
  let r = t
    ? xpath.getOrderedNodes(
        './/*[normalize-space(.)="No matches found" or @title="No matches found"]',
        t,
      )
    : (0, xpath.getOrderedNodes)(
        '//*[@data-automation-id="activeListContainer"]//*[normalize-space(.)="No matches found" or @title="No matches found"]',
      );
  return r.some((e10) => {
    let t10 =
      "function" == typeof e10.getAttribute ? e10.getAttribute("title") : "";
    return ep(t10) || ep(e10.textContent);
  });
}
function eY(e) {
  return String(e ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}
function ez(e, t) {
  return {
    inputId: e.id || void 0,
    inputName: e.name || void 0,
    inputAutomationId: e.getAttribute?.("data-automation-id") || void 0,
    rootAutomationId: t?.getAttribute?.("data-automation-id") || void 0,
  };
}
function eV(e, t = {}) {
  console.info(`[MyWorkday][autofill-debug] search:${e} ${JSON.stringify(t)}`);
}
function eW(e) {
  return !!e && "function" == typeof e.matches && e.matches(ek);
}
function eG(e) {
  return (
    document.activeElement === e ||
    (void 0 !== e.offsetParent && null !== e.offsetParent) ||
    ("function" == typeof e.getClientRects && e.getClientRects().length > 0)
  );
}
function eK() {
  return "undefined" == typeof document ||
    "function" != typeof document.querySelectorAll
    ? []
    : Array.from(document.querySelectorAll(eT)).filter(eG);
}
function eX(e) {
  return (
    (void 0 !== e.offsetParent && null !== e.offsetParent) ||
    ("function" == typeof e.getClientRects && e.getClientRects().length > 0)
  );
}
function eJ() {
  let e = new Set(eK());
  return (
    "undefined" != typeof document &&
      eW(document.activeElement) &&
      e.add(document.activeElement),
    e
  );
}
function eQ(e, t, r) {
  let n = (e10) =>
      e10 && "function" == typeof e10.closest
        ? e10.closest('[data-automation-id="activeListContainer"]')
        : null,
    o2 = (t10) => !r.has(t10) || eU.get(t10) === e;
  if (o2(t)) {
    let e10 = n(t);
    if (e10 && eX(e10)) return e10;
  }
  let i2 = eZ(e, r, false);
  if (!i2 || !o2(i2)) return null;
  let a2 = n(i2);
  return a2 && eX(a2) ? a2 : null;
}
function eZ(e, t = /* @__PURE__ */ new Set(), r = true) {
  let n = eg(e),
    o2 = (t10) => {
      if (
        t10 === e ||
        eU.get(t10) === e ||
        ("function" == typeof n.contains && n.contains(t10))
      )
        return true;
      let r2 = es(e?.id),
        o3 = es(t10?.id);
      if (r2 && o3 && r2 === o3) return true;
      let i3 = es(e?.name),
        a3 = es(t10?.name);
      return !!i3 && !!a3 && i3 === a3;
    },
    i2 = (e10) => o2(e10) || !t.has(e10);
  if (
    "undefined" != typeof document &&
    eW(document.activeElement) &&
    i2(document.activeElement) &&
    (o2(document.activeElement) || 0 === t.size)
  )
    return document.activeElement;
  let a2 = eK(),
    l2 = a2.find(o2);
  if (l2) return l2;
  let s2 = a2.find(i2);
  return s2 || (r ? (n.querySelector(ek) ?? e) : null);
}
function e0(e) {
  let t = eg(e),
    r = t.querySelector(
      '[data-automation-id="promptIcon"], [data-automation-id="promptSearchButton"]',
    );
  r
    ? dom.triggerEvents(r, ["mousedown", "mouseup", "click"])
    : dom.triggerEvents(t, ["mousedown", "mouseup", "click"]);
}
function e2(e, t) {
  (dom.triggerEvents(e, ["focus"]), e.focus?.());
  let r = Object.getPrototypeOf(e),
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  (n ? n.call(e, t) : (e.value = t), dom.triggerEvents(e, ["input", "change"]));
  let o2 = t.slice(-1);
  for (let t10 of ["keydown", "keyup"])
    e.dispatchEvent(
      new KeyboardEvent(t10, {
        bubbles: true,
        cancelable: true,
        key: o2,
        code: o2 ? `Key${o2.toUpperCase()}` : "",
        keyCode: o2 ? o2.toUpperCase().charCodeAt(0) : 0,
      }),
    );
}
function e1(e) {
  for (let t of ["keydown", "keypress", "keyup"])
    e.dispatchEvent(
      new KeyboardEvent(t, {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        code: "Enter",
        keyCode: 13,
      }),
    );
}
function e3() {
  return (
    "undefined" != typeof document &&
    "function" == typeof document.querySelectorAll &&
    document.querySelectorAll('[data-automation-id="activeListContainer"]')
      .length > 0
  );
}
function e4() {
  if (
    "undefined" == typeof document ||
    "function" != typeof document.elementFromPoint
  )
    return false;
  let e =
      "function" == typeof document.querySelector
        ? document.querySelector('[data-automation-id="activeListContainer"]')
        : null,
    t =
      "function" == typeof e?.getBoundingClientRect
        ? e.getBoundingClientRect()
        : null,
    r = ("undefined" != typeof window && window.innerWidth) || 0,
    n = ("undefined" != typeof window && window.innerHeight) || 0,
    o2 = Math.max(16, Math.min(80, Math.max(16, r - 16))),
    i2 = 120;
  if (t) {
    let e10 = t.top - 120,
      r2 = t.bottom + 24;
    e10 >= 80 ? (i2 = e10) : n && r2 <= n - 24 && (i2 = r2);
  }
  n && (i2 = Math.max(24, Math.min(i2, n - 24)));
  let a2 =
    document.elementFromPoint(o2, i2) ??
    xpath.getFirstOrderedNode('//*[@id="mainContent"] | //main') ??
    document.body ??
    document.documentElement;
  if (!a2) return false;
  for (let e10 of (a2.focus?.(),
  [
    "pointerover",
    "mouseover",
    "pointermove",
    "mousemove",
    "pointerdown",
    "mousedown",
    "pointerup",
    "mouseup",
    "click",
  ]))
    e9(a2, e10, o2, i2);
  return true;
}
async function e5(e) {
  if ("function" != typeof KeyboardEvent) return;
  let t = eZ(e) ?? e;
  for (let e10 of ["keydown", "keyup"])
    t.dispatchEvent(
      new KeyboardEvent(e10, {
        bubbles: true,
        cancelable: true,
        key: "Escape",
        code: "Escape",
        keyCode: 27,
      }),
    );
  (e6(e),
    await observer.waitForCondition(() => !e3(), {
      timeout: 300,
      interval: 50,
      observeTarget: document.body,
    }));
}
function e6(e) {
  let t = eZ(e, /* @__PURE__ */ new Set(), false),
    r = [t, e].filter((e10, t10, r2) => !!e10 && r2.indexOf(e10) === t10);
  for (let e10 of r)
    (e10.blur?.(),
      e10.dispatchEvent(rp("blur")),
      e10.dispatchEvent(rp("focusout")));
}
function e8(e) {
  e1(e);
}
function e9(e, t, r, n) {
  let o2 = t.startsWith("pointer"),
    i2 = t.endsWith("down"),
    a2 = {
      bubbles: true,
      cancelable: true,
      view: "undefined" != typeof window ? window : null,
      clientX: r,
      clientY: n,
      screenX: r,
      screenY: n,
      button: 0,
      buttons: i2 ? 1 : 0,
    };
  if (o2 && "function" == typeof PointerEvent) {
    e.dispatchEvent(
      new PointerEvent(t, {
        ...a2,
        pointerId: 1,
        pointerType: "mouse",
      }),
    );
    return;
  }
  e.dispatchEvent(new MouseEvent(t, a2));
}
function e7(e) {
  return e
    ? {
        tagName: e.tagName || void 0,
        automationId: e.getAttribute?.("data-automation-id") || void 0,
        role: e.getAttribute?.("role") || void 0,
        ariaLabel: e.getAttribute?.("aria-label") || void 0,
        text: eY(e.textContent),
      }
    : null;
}
function te(e) {
  return (
    ("function" == typeof e.querySelector ? e.querySelector(L) : null) ?? e
  );
}
function tt({
  optionItem: e,
  clickTarget: t,
  rawClickTarget: r = null,
  clickTargetInsideOption: n,
  usedOptionFallback: o2,
  clientX: i2,
  clientY: a2,
}) {
  return {
    option: e7(e),
    clickTarget: e7(t),
    rawClickTarget: e7(r),
    clickTargetInsideOption: n,
    usedOptionFallback: o2,
    ...(void 0 !== i2 && void 0 !== a2
      ? {
          clientX: Math.round(i2),
          clientY: Math.round(a2),
        }
      : {}),
  };
}
function tr(e, t) {
  return (
    dom.triggerEvents(t, ["focus", "mousedown", "mouseup", "click"]),
    t.click?.(),
    tt({
      optionItem: e,
      clickTarget: t,
      clickTargetInsideOption: true,
      usedOptionFallback: t !== e,
    })
  );
}
function tn(e) {
  if (!e || "function" != typeof e.dispatchEvent) return false;
  let t = Number(e.scrollTop) || 0,
    r = Number(e.clientHeight) || 0,
    n = Number(e.scrollHeight) || 0,
    o2 = Math.max(96, Math.floor(0.75 * r) || 160),
    i2 = n > r ? n - r : t + o2,
    a2 = Math.min(t + o2, i2);
  return (
    !(a2 <= t) && ((e.scrollTop = a2), e.dispatchEvent(rp("scroll")), true)
  );
}
function to() {
  if (
    "undefined" == typeof document ||
    "function" != typeof document.querySelectorAll
  )
    return null;
  let e = Array.from(document.querySelectorAll(R));
  return e.find(eX) ?? null;
}
function ti(e) {
  e.scrollIntoView?.({
    block: "center",
    inline: "nearest",
  });
  let t = te(e);
  if (
    "function" != typeof e.getBoundingClientRect ||
    "undefined" == typeof document ||
    "function" != typeof document.elementFromPoint
  )
    return tr(e, t);
  let r = e.getBoundingClientRect();
  if (!r.width || !r.height) return tr(e, t);
  let n = r.left + Math.min(16, r.width / 2),
    o2 = r.top + r.height / 2,
    i2 = document.elementFromPoint(n, o2),
    a2 = !i2 || i2 === e || !!e.contains?.(i2),
    l2 = a2 ? (i2 ?? e) : t;
  for (let e10 of [
    "pointerover",
    "mouseover",
    "pointermove",
    "mousemove",
    "pointerdown",
    "mousedown",
    "pointerup",
    "mouseup",
    "click",
  ])
    e9(l2, e10, n, o2);
  return (
    e.click?.(),
    tt({
      optionItem: e,
      clickTarget: l2,
      rawClickTarget: i2,
      clickTargetInsideOption: a2,
      usedOptionFallback: !a2,
      clientX: n,
      clientY: o2,
    })
  );
}
async function ta(e, t, r = false) {
  if (!e) {
    console.error("Input element not found");
    return;
  }
  let n = null,
    o2 = () => eg(e),
    i2 = o2(),
    a2 = ev(e, i2),
    s2 = eS(e, i2),
    u2 = ew(e, i2),
    c2 = s2 || u2,
    p2 = a2 || s2,
    m2 = a2 && (r || eb(i2)),
    h2 = a2 || c2,
    g2 = !(a2 || c2),
    y2 = a2 || c2,
    w2 = !m2 && (p2 || u2),
    E2 = !m2,
    x2 = m2 || c2,
    C2 = /* @__PURE__ */ new Map(),
    A2 = /* @__PURE__ */ new Map(),
    k2 = null,
    T2 = () =>
      xpath.getOrderedNodes(
        './/*[@data-automation-id="selectedItemList" and @role="listbox"]//*[@data-automation-id="menuItem"]',
        o2(),
      ),
    F2 = (e10) =>
      observer.waitForCondition(() => ex(o2(), e10), {
        timeout: eO,
        interval: 50,
      }),
    I2 = (e10, t10) =>
      observer.waitForCondition(() => T2().length > e10, {
        timeout: t10,
        interval: 50,
        observeTarget: o2() ?? void 0,
      }),
    j2 = async (e10) => {
      if (!x2 || ex(o2(), e10)) return false;
      let t10 = es(e10),
        r2 = A2.get(t10) ?? 0;
      return !(r2 >= eR) && (A2.set(t10, r2 + 1), (n = null), true);
    };
  for (let i3 = 0; i3 < t.length; i3 += 1) {
    let l2 = t[i3],
      u3 = o2(),
      x3 = ez(e, u3),
      A3 = eY(l2);
    if (E2 && null !== k2) {
      let e10 = await observer.waitForCondition(() => T2().length > k2, {
        timeout: eO,
        interval: 50,
        observeTarget: o2() ?? void 0,
      });
      if (((k2 = null), e10)) break;
    }
    if (ex(u3, l2)) {
      if (!m2) break;
      continue;
    }
    if (
      (!m2 &&
        T2().length > 0 &&
        (await ey(e), (n = null), await delay.delay(50)),
      (n || T2().length > 0) && !m2)
    )
      break;
    await delay.delay(50);
    let D2 = eJ();
    (e0(e), await delay.delay(100));
    let P2 =
      (await S.default(
        () => eZ(e, D2, false),
        () => false,
        D2.size > 0 ? 8 : 1,
      )) ??
      eZ(e, D2, true) ??
      e;
    eU.set(P2, e);
    let _2 = "function" == typeof P2.closest,
      L2 = T2().length,
      R2 =
        eQ(e, P2, D2) ??
        (_2
          ? await S.default(
              () => eQ(e, P2, D2),
              () => false,
              eM,
            )
          : null),
      O2 = './/*[@data-automation-id="menuItem" and @role="option"]',
      M2 = () =>
        (R2 = R2 ?? eQ(e, P2, D2))
          ? xpath.getOrderedNodes(O2, R2)
          : xpath.getOrderedNodes(
              '//*[@data-automation-id="activeListContainer" and @role="listbox"]//*[@data-automation-id="menuItem" and @role="option"]',
            ),
      N2 = em(M2()),
      $2 = async () => {
        if (!w2 || !eA(o2(), l2)) return false;
        let t10 = es(l2),
          r2 = C2.get(t10) ?? 0;
        return (
          !(r2 >= 2) &&
          (C2.set(t10, r2 + 1), await ey(e), (n = null), (i3 -= 1), true)
        );
      },
      B2 = Date.now();
    if (
      (e2(P2, l2 + ""),
      e8(P2),
      (R2 =
        R2 ??
        (_2
          ? await S.default(
              () => eQ(e, P2, D2),
              () => false,
              eM,
            )
          : null)),
      await $2())
    )
      continue;
    let q2 = 0,
      U2 = 0,
      H2 = 0,
      Y2 = 0,
      z2 = "",
      V2 = 0,
      W2 = false,
      G2 = c2 ? eD : a2 ? eP : ej,
      K2 = a2 ? eI : eF,
      X2 = false,
      J2 = (e10, t10 = {}) =>
        eh(l2 + "", e10, {
          strict: t10.strict ?? p2,
          allowFuzzy: !h2,
          allowFirstCandidateFallback: false,
          allowExpandedMatch: !s2,
        });
    if (
      (eV("start", {
        field: x3,
        value: A3,
        valueIndex: i3,
        valuesCount: t.length,
        multi: r,
        shouldFillMultiple: m2,
        noMatchStableRetry: G2,
        maxSearchOptionRetry: K2,
      }),
      (n = await S.default(
        () => {
          if (ex(o2(), l2))
            return (
              (X2 = true),
              eV("selected-during-search", {
                field: x3,
                value: A3,
                elapsedMs: Date.now() - B2,
                retryCount: U2,
                resubmitCount: H2,
              }),
              null
            );
          if (E2 && T2().length > L2)
            return (
              (X2 = true),
              eV("committed-during-search", {
                field: x3,
                value: A3,
                elapsedMs: Date.now() - B2,
                retryCount: U2,
                resubmitCount: H2,
                filledCountBeforeSelect: L2,
                filledCountAfterSelect: T2().length,
              }),
              null
            );
          let e10 = M2(),
            t10 = em(e10),
            r2 = !!N2 && t10 === N2;
          if (r2) {
            let t11 = J2(e10, {
              strict: true,
            });
            return (
              t11 &&
                eV("match", {
                  field: x3,
                  value: A3,
                  elapsedMs: Date.now() - B2,
                  retryCount: U2,
                  resubmitCount: H2,
                  optionText: eY(t11.textContent),
                  optionsAreStale: true,
                  optionsCount: e10.length,
                }),
              t11
            );
          }
          let n2 = J2(e10);
          return (
            n2 &&
              eV("match", {
                field: x3,
                value: A3,
                elapsedMs: Date.now() - B2,
                retryCount: U2,
                resubmitCount: H2,
                optionText: eY(n2.textContent),
                optionsAreStale: false,
                optionsCount: e10.length,
              }),
            n2
          );
        },
        () => {
          if (ex(o2(), l2))
            return (
              (X2 = true),
              eV("selected-during-search", {
                field: x3,
                value: A3,
                elapsedMs: Date.now() - B2,
                retryCount: U2,
                resubmitCount: H2,
              }),
              true
            );
          if (E2 && T2().length > L2)
            return (
              (X2 = true),
              eV("committed-during-search", {
                field: x3,
                value: A3,
                elapsedMs: Date.now() - B2,
                retryCount: U2,
                resubmitCount: H2,
                filledCountBeforeSelect: L2,
                filledCountAfterSelect: T2().length,
              }),
              true
            );
          U2 += 1;
          let t10 = M2(),
            r2 = em(t10),
            n2 = !!N2 && r2 === N2,
            i4 = n2
              ? J2(t10, {
                  strict: true,
                })
              : J2(t10);
          if (i4) return ((q2 = 0), (z2 = ""), (V2 = 0), false);
          let s3 = eH(t10, R2),
            u4 = t10.some((e10) => !ef(e10));
          if (s3) {
            (W2 ||
              ((W2 = true),
              eV("no-match-observed", {
                field: x3,
                value: A3,
                elapsedMs: Date.now() - B2,
                retryCount: U2,
                resubmitCount: H2,
                noMatchStableRetry: G2,
                optionsCount: t10.length,
                hasSearchableOptions: u4,
              })),
              (z2 = ""),
              (V2 = 0),
              (q2 += 1));
            let e10 = q2 >= G2;
            return (
              e10 &&
                eV("no-match-skip", {
                  field: x3,
                  value: A3,
                  elapsedMs: Date.now() - B2,
                  retryCount: U2,
                  resubmitCount: H2,
                  noMatchRetryCount: q2,
                  noMatchStableRetry: G2,
                  optionsCount: t10.length,
                  hasSearchableOptions: u4,
                }),
              e10
            );
          }
          if (y2 && u4 && !s3 && U2 % 4 == 0 && tn(R2 ?? to()))
            return (
              (Y2 += 1),
              eV("virtualized-scroll", {
                field: x3,
                value: A3,
                elapsedMs: Date.now() - B2,
                retryCount: U2,
                resubmitCount: H2,
                scrollCount: Y2,
                optionsCount: t10.length,
                optionSignature: eY(r2),
              }),
              false
            );
          let d2 = m2 || a2 || c2,
            f2 = d2 && t10.length > 0 && U2 % eL == 0 && (m2 || H2 < 1);
          if (f2) {
            let r3 = eZ(e);
            (e2(r3, l2 + ""),
              e8(r3),
              (H2 += 1),
              eV("resubmit", {
                field: x3,
                value: A3,
                elapsedMs: Date.now() - B2,
                retryCount: U2,
                resubmitCount: H2,
                optionsCount: t10.length,
                optionsAreStale: n2,
              }));
          }
          if (g2 && u4 && !s3 && (H2 > 0 || U2 >= eL)) {
            r2 === z2 ? (V2 += 1) : ((z2 = r2), (V2 = 1));
            let e10 = V2 >= e_;
            return (
              e10 &&
                eV("non-matching-options-skip", {
                  field: x3,
                  value: A3,
                  elapsedMs: Date.now() - B2,
                  retryCount: U2,
                  resubmitCount: H2,
                  stableCount: V2,
                  optionsCount: t10.length,
                  optionSignature: eY(r2),
                }),
              e10
            );
          }
          return ((z2 = ""), (V2 = 0), (q2 = 0), false);
        },
        K2,
      )),
      !(await $2()))
    ) {
      if (X2) {
        if (
          (eV("end-selected-during-search", {
            field: x3,
            value: A3,
            elapsedMs: Date.now() - B2,
            retryCount: U2,
            resubmitCount: H2,
          }),
          !m2)
        )
          break;
        continue;
      }
      if (n) {
        let e10 = ti(n),
          t10 = T2().length,
          r2 = await I2(L2, 250);
        if ((r2 && (t10 = T2().length), !r2)) {
          e1(P2);
          let e11 = await I2(L2, eO);
          ((t10 = T2().length), E2 && !e11 && t10 <= L2 && (k2 = L2));
        }
        if (
          (eV("end-option-clicked", {
            field: x3,
            value: A3,
            elapsedMs: Date.now() - B2,
            retryCount: U2,
            resubmitCount: H2,
            didCommitAfterClick: r2,
            filledCountBeforeSelect: L2,
            filledCountAfterSelect: t10,
            click: e10,
          }),
          dom.triggerEvents(P2, ["keypress"]),
          t10 <= L2 && !(await F2(l2)) && (await j2(l2)))
        ) {
          i3 -= 1;
          continue;
        }
        if (!m2) break;
        (await delay.delay(200), dom.triggerEvents(P2, ["keypress"]));
      } else
        eV("end-no-option", {
          field: x3,
          value: A3,
          elapsedMs: Date.now() - B2,
          retryCount: U2,
          resubmitCount: H2,
          noMatchRetryCount: q2,
          maxSearchOptionRetry: K2,
        });
    }
  }
  (crawlerUtils.triggerTabEvent(e),
    await delay.delay(200),
    await e5(e),
    tl({
      allowPageClickFallback: e3(),
    }),
    await observer.waitForCondition(() => !e3(), {
      timeout: 800,
      interval: 50,
      observeTarget: document.body,
    }),
    e6(e));
}
function tl({ allowPageClickFallback: e = false } = {}) {
  let t = xpath.getFirstOrderedNode('//*[@id="mainContent"] | //main');
  if ((e && e4(), t)) {
    (t.focus?.(), e && t.click?.());
    for (let e10 = 0; e10 < 3; e10++)
      (dom.triggerEvents(t, ["click"]),
        dom.triggerEvents(t, ["mousedown"]),
        dom.triggerEvents(t, ["mouseup"]));
  }
}
async function ts(e, t) {
  let r = th(e),
    n = await q(e, t);
  if (n && (await ty(e, t, r))) return true;
  let o2 = e.getAttribute("aria-controls"),
    i2 = o2
      ? `//ul[@role="listbox"][@id="${o2}"][@tabindex="-1"]/li[@id!="select-one"]`
      : '//ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]',
    a2 = null;
  for (let n2 = 0; n2 < eq; n2 += 1) {
    (0 === xpath.getOrderedNodes(i2).length && tp(e),
      await observer.waitForCondition(
        () => (0, xpath.getOrderedNodes)(i2).length > 0,
        {
          timeout: eN,
          interval: 50,
          observeTarget: document.body,
        },
      ));
    let n3 = xpath.getOrderedNodes(i2);
    for (let e10 of t) if ((a2 = selectUtils.findMatchOption(n3, e10))) break;
    if (!a2) break;
    let o3 = a2;
    if (
      (dom.triggerEvents(o3, ["mousedown", "mouseup", "click"]),
      await observer.waitForCondition(() => tb(e, t, r, o3), {
        timeout: e$,
        interval: 50,
        observeTarget: e,
      }),
      (await ty(e, t, r, o3)) ||
        (o3.click?.(),
        await observer.waitForCondition(() => tb(e, t, r, o3), {
          timeout: e$,
          interval: 50,
          observeTarget: e,
        }),
        await ty(e, t, r, o3)))
    )
      return true;
  }
  return (
    e.attributes.getNamedItem("aria-expanded")?.value === "true" &&
      (tp(e),
      await (0, observer.waitForCondition)(
        () => 0 === xpath.getOrderedNodesSafe(i2).length,
        {
          timeout: eN,
          interval: 50,
          observeTarget: document.body,
        },
      )),
    !!(a2 && (await ty(e, t, r, a2)))
  );
}
function tu(e) {
  return (
    !!e &&
    false !== e.isConnected &&
    ("function" != typeof document.contains ||
      document.contains(e) ||
      false !== e.isConnected)
  );
}
function tc(e) {
  return (e || "")
    .replace("*", "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function td(e, t) {
  let r = tc(e.label);
  return t.find((t10) => t10.type === e.type && tc(t10.label) === r);
}
async function tf(e, t, r = rules.getRules) {
  let n = !!tu(e.$input) && (await ts(e.$input, t));
  if (n) return true;
  let o2 = td(e, await r());
  return (
    !!o2 &&
    o2.$input !== e.$input &&
    (Object.assign(e, o2), await ts(e.$input, t))
  );
}
function tp(e) {
  e.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  );
}
function tm(e) {
  return e
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function th(e) {
  return tm(e.textContent || "");
}
function tg(e) {
  return !e || "select one" === e;
}
function tb(e, t, r, n) {
  if (
    false === e.isConnected &&
    "function" == typeof document.contains &&
    !document.contains(e)
  )
    return false;
  let o2 = th(e);
  if (tg(o2)) return false;
  let i2 = [...t.map((e10) => tm(e10)), tm(n?.textContent || "")].filter(
    Boolean,
  );
  return (
    !!i2.some((e10) => o2 === e10 || o2.includes(e10) || e10.includes(o2)) ||
    (!!n && o2 !== r)
  );
}
async function ty(e, t, r, n) {
  return !!tb(e, t, r, n) && (await delay.delay(eB), tb(e, t, r, n));
}
function tv() {
  return (
    xpath.getFirstOrderedNode(
      '//div[@aria-labelledby="Resume/CV-section"]//input[@type="file"]',
    ) ||
    document.querySelector(
      'input[type="file"][data-automation-id="file-upload-input-ref"]',
    )
  );
}
function tw() {
  return !!tv();
}
async function tS(e, t, r) {
  let n = tv();
  if (!n) return "not-applicable";
  let o2 = xpath.getFirstOrderedNode(
      '//div[@data-automation-id="file-upload-item"]//button[@data-automation-id="delete-file"]',
    ),
    i2 = 0,
    a2 = 15;
  for (; o2 && i2 < a2;)
    (await delay.delay(150),
      o2.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      ),
      i2++,
      await delay.delay(50),
      (o2 = xpath.getFirstOrderedNode(
        '//div[@data-automation-id="file-upload-item"]//button[@data-automation-id="delete-file"]',
      )));
  return (
    await dom.uploadFiles(
      n,
      await answerMethods.fetchPdfAsBlob(e),
      t,
      r,
      "Resume/CV",
    ),
    "uploaded"
  );
}
async function tE(e) {
  let t = 39,
    r = (e ?? []).slice(0, t);
  if (0 === r.length) return false;
  (await delay.delay(150), tl());
  let n = xpath.getFirstOrderedNode(
    '//*[@data-automation-id="skillsSection" or @data-automation-id="formField-skills" or contains(@id, "skills")]//input[@placeholder="Search"]',
  );
  if (!n) return false;
  let o2 = document.querySelectorAll(
    "#Skills-section ~ div li div[data-automation-id=DELETE_charm]",
  );
  if (o2.length > 0) {
    for (let e10 of Array.from(o2))
      (await delay.delay(100),
        dom.triggerEvents(e10, ["mousedown", "mouseup", "click"]));
    await delay.delay(150);
  }
  (await ta(n, r, true), await delay.delay(100), tl());
  let i2 = eC(r, eE(eg(n)));
  return (
    console.info(
      `[MyWorkday][autofill-debug] skills:summary ${JSON.stringify(i2)}`,
    ),
    0 === i2.missingSkills.length
  );
}
async function tx() {
  let e = xpath.getFirstOrderedNodeSafe(
    '//div[@data-automation-id="applyFlowMyExpPage"]',
  );
  e &&
    (await tC(),
    0 === tI() &&
      (await tk(),
      await observer.waitForCondition(tU, {
        timeout: 1e3,
        observeTarget: document.body,
      })),
    await tA(),
    0 === tF() &&
      (await tT(),
      await observer.waitForCondition(tU, {
        timeout: 1e3,
        observeTarget: document.body,
      })));
}
async function tC() {
  let e = xpath.getOrderedNodesSafe(
    './/button[text()="Delete"]',
    xpath.getFirstOrderedNode(`//*[@data-automation-id="workExperienceSection"
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
              ]`),
  );
  if (e.length > 0) for (let t of e) (t.click(), await delay.delay(300));
}
async function tA() {
  let e = xpath.getOrderedNodesSafe(
    './/button[text()="Delete"]',
    xpath.getFirstOrderedNode(`//*[${M}]`),
  );
  if (e.length > 0) for (let t of e) (t.click(), await delay.delay(300));
}
async function tk() {
  let e = tI(),
    t = xpath.getFirstOrderedNodeSafe(
      `.//button[
      @data-automation-id="add-button"
      or @data-automation-id="Add"
      or @data-automation-id="Add Another"
      or @aria-label="Add Another Work Experience" or @aria-label="Add Work Experience"
      or text()="Add Another"
      or text()="Add"
    ]`,
      xpath.getFirstOrderedNode(`//*[@data-automation-id="workExperienceSection"
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
    ]`),
    );
  t &&
    (t.click(),
    await observer.waitForCondition(() => tI() > e && tU(), {
      timeout: 1500,
      interval: 50,
      observeTarget: document.body,
    }));
}
async function tT() {
  let e = tF(),
    t = xpath.getFirstOrderedNodeSafe(
      `.//button[(ancestor::*[${M}] and (@data-automation-id="add-button" or @data-automation-id="Add" or @data-automation-id="Add Another"))
          or @aria-label="Add Another Education" or @aria-label="Add Education"
          or @aria-label="Add Schooling" or @aria-label="Add Another Schooling"
          or @aria-label="Add Schools Attended" or @aria-label="Add Another Schools Attended"
          or (starts-with(@aria-label, "Add") and contains(@aria-label, "Education"))
          or text()="Add Another"
          or text()="Add"
        ]`,
      xpath.getFirstOrderedNode(`//*[${M}]`),
    );
  t &&
    (t.click(),
    await observer.waitForCondition(() => tF() > e && tU(), {
      timeout: 1500,
      interval: 50,
      observeTarget: document.body,
    }));
}
function tF() {
  let e = xpath.getOrderedNodes(`//*[${rules.educationGroupXpath}]`);
  return e.length;
}
function tI() {
  let e = xpath.getOrderedNodes(`//*[${rules.employmentGroupXpath}]`);
  return e.length;
}
async function tj(e) {
  (await tD(e.education.length), await tP(e.workExperience.length));
}
async function tD(e) {
  for (let t = tF(); t < e; t += 1) {
    await tT();
    let e10 = tF();
    if (e10 <= t) break;
    t = e10 - 1;
  }
}
async function tP(e) {
  for (let t = tI(); t < e; t += 1) {
    await tk();
    let e10 = tI();
    if (e10 <= t) break;
    t = e10 - 1;
  }
}
async function t_() {
  (tl(), tL(), tR());
}
function tL() {
  let e = xpath.getOrderedNodes('//li[@role="option"][@aria-selected="true"]');
  for (let t of e)
    t.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    );
}
function tR() {
  let e = xpath.getOrderedNodesSafe(
    '//ul[@role="listbox" and @aria-activedescendant="select-one"]',
  );
  for (let t of e) {
    let e10 = t.getAttribute("id"),
      r = xpath.getFirstOrderedNodeSafe(
        `//button[@aria-haspopup="listbox" and @aria-controls="${e10}"]`,
      );
    r && r.click();
  }
}
async function tO(e, t) {
  let r = dateParts.getWorkdayDatePartsForField(e, t);
  console.info("[MyWorkday][autofill-debug] date-fill:start", {
    value: t,
    dateParts: r,
    target: tM(e),
  });
  let n = await U(e, r.month, r.day, r.year);
  if (
    (console.info("[MyWorkday][autofill-debug] date-fill:fiber-result", {
      value: t,
      dateParts: r,
      fiberResult: n,
      target: tM(e),
    }),
    n.success)
  ) {
    await tN(e, r);
    let o3 = await U(e, r.month, r.day, r.year);
    (console.info("[MyWorkday][autofill-debug] date-fill:post-commit-sync", {
      value: t,
      dateParts: r,
      fiberResult: o3,
      target: tM(e),
    }),
      await delay.delay(350));
    let i3 = dateParts.hasWorkdayDateRequiredError(e);
    return (
      console.info("[MyWorkday][autofill-debug] date-fill:committed", {
        value: t,
        dateParts: r,
        hasRequiredError: i3,
        target: tM(e),
      }),
      !i3 ||
        (console.warn("[MyWorkday][autofill-debug] date-fill:required-error", {
          value: t,
          dateParts: r,
          fiberResult: n,
          postCommitFiberResult: o3,
          target: tM(e),
        }),
        false)
    );
  }
  let o2 = e.querySelector('[data-automation-id="dateSectionMonth-input"]'),
    i2 = e.querySelector('[data-automation-id="dateSectionYear-input"]'),
    a2 = e.querySelector('[data-automation-id="dateSectionDay-input"]');
  return (
    a2 && (await tB(a2, r.day || "01")),
    o2 && (await tB(o2, r.month || "01")),
    i2 && (await tB(i2, r.year)),
    await t$(e),
    console.info("[MyWorkday][autofill-debug] date-fill:fallback", {
      value: t,
      dateParts: r,
      target: tM(e),
    }),
    false
  );
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
    hasRequiredError: /required and must have a value/i.test(e.textContent || ""),
  };
}
async function tN(e, t) {
  let r = e.querySelector('[data-automation-id="dateSectionMonth-input"]'),
    n = e.querySelector('[data-automation-id="dateSectionDay-input"]'),
    o2 = e.querySelector('[data-automation-id="dateSectionYear-input"]');
  (r && t.month && (await tB(r, t.month)),
    n && t.day && (await tB(n, t.day)),
    o2 && (await tB(o2, t.year)),
    await t$(e));
}
async function t$(e) {
  let t = Array.from(
    e.querySelectorAll(
      '[data-automation-id="dateSectionMonth-input"], [data-automation-id="dateSectionDay-input"], [data-automation-id="dateSectionYear-input"]',
    ),
  );
  for (let e10 of t)
    e10.dispatchEvent(
      new FocusEvent("blur", {
        bubbles: true,
        cancelable: false,
        relatedTarget: null,
        view: window,
      }),
    );
  (e.dispatchEvent(
    new FocusEvent("focusout", {
      bubbles: true,
      cancelable: false,
      relatedTarget: null,
      view: window,
    }),
  ),
    e.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    ),
    await delay.delay(50));
}
async function tB(e, t) {
  (e.focus(),
    await delay.delay(20),
    (e.value = t),
    e.dispatchEvent(
      new Event("input", {
        bubbles: true,
      }),
    ),
    e.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    ));
}
function tq(e) {
  let t = xpath.getFirstOrderedNodeSafe(e);
  if (!t) return false;
  let r = t.querySelectorAll("*");
  for (let e10 of r) {
    let t10 = e10.textContent?.trim();
    if (t10 && /loading/i.test(t10)) return false;
  }
  return true;
}
function tU() {
  return tq('//div[@data-automation-id="applyFlowMyExpPage"]');
}
function tH() {
  return (
    document
      .querySelector(
        '[data-automation-id="progressBar"] [data-automation-id="progressBarActiveStep"] label:last-of-type',
      )
      ?.textContent?.trim() || ""
  );
}
function tY() {
  let e =
      document.querySelectorAll('div[data-automation-id^="formField-"]')
        .length > 0,
    t = !!document.querySelector('[data-automation-id="applyFlowMyExpPage"]');
  return (
    (!!e || !!t) &&
    (!/self identify/i.test(tH()) ||
      !!document.querySelector(
        '[data-automation-id="formField-disabilityStatus"] input[type="checkbox"], [data-automation-id="formField-disabilityStatus"] input[type="radio"]',
      ))
  );
}
async function tz() {
  (await observer.waitForCondition(
    () => tq('//div[@data-automation-id="applyFlowPage"]'),
    {
      timeout: 8e3,
      interval: 100,
      observeTarget: document.body,
    },
  ),
    await observer.waitForCondition(() => tY(), {
      timeout: 15e3,
      interval: 200,
      observeTarget: document.body,
    }));
  let e = -1;
  for (let t = 0; t < 10; t++) {
    let t10 = document.querySelectorAll('[data-automation-id^="formField-"]'),
      r = t10.length;
    if (r > 0 && r === e) break;
    ((e = r), await delay.delay(300));
  }
}
let tV =
    'button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"]',
  tW = null,
  tG = false,
  tK = null,
  tX = null;
function tJ(e) {
  if (null == e || "object" != typeof e) return e;
  if ("function" == typeof structuredClone)
    try {
      return structuredClone(e);
    } catch {}
  return JSON.parse(JSON.stringify(e));
}
function tQ(e) {
  let t = tJ(e.submitSnapshot || {}),
    r = e.additionalSubmitData || {};
  return (
    void 0 !== r.education && (t.education = tJ(r.education)),
    void 0 !== r.employment && (t.employment = tJ(r.employment)),
    t
  );
}
function tZ(e, t) {
  e &&
    ((e.snapshot = tQ(t)),
    (e.educationTraceRunId =
      educationItemTrace.getEducationTraceRunIdFromRecords(
        t.additionalSubmitData?.education,
      ) ?? e.educationTraceRunId));
}
function t0() {
  return {
    step: pagination.getMyWorkdayStepState(),
  };
}
function t2(e) {
  return (e || "").trim().replace(/\s+/g, " ").toLowerCase();
}
function t1(e, t) {
  return (
    !!e &&
    !!t &&
    e.index === t.index &&
    e.total === t.total &&
    t2(e.title) === t2(t.title)
  );
}
function t3(e, t) {
  return !!e && !!t && t.index > e.index;
}
function t4(e) {
  return 0 === Object.keys(e).length;
}
function t5(e) {
  if (Array.isArray(e)) return e.some(t5);
  if (e && "object" == typeof e)
    return Object.entries(e).some(
      ([e10, t10]) =>
        e10 !== snapshotAlignment.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY &&
        e10 !== educationItemTrace.EDUCATION_TRACE_KEY &&
        t5(t10),
    );
  if (null == e) return false;
  let t = String(e).trim().toLowerCase();
  return !["", "select one", "[]", "/", "//"].includes(t);
}
function t6(e) {
  return !Object.values(e).some(t5);
}
function t8({
  autofillSnapshot: e,
  additionalSubmitData: t,
  bindContext: r,
  submitContext: n,
  submitSnapshot: o2,
}) {
  if (t4(o2) && t6(t ?? {})) return "empty_submit_snapshot";
  let i2 = !!r?.step,
    a2 = !!n.step,
    l2 = !!i2 && !!a2 && t1(r?.step, n.step);
  if (i2 && a2 && !l2) return "workday_step_changed";
  let s2 = Object.keys(e).filter((e10) =>
    Object.prototype.hasOwnProperty.call(o2, e10),
  ).length;
  return l2 || 0 !== s2 ? null : "no_common_submit_keys";
}
function t9({ bindContext: e, extraData: t, submitContext: r }) {
  return e
    ? {
        ...t,
        pageContext: {
          ...(t.pageContext ?? {}),
          myworkday: {
            bindStep: e.step,
            submitStep: r.step,
            stale: false,
          },
        },
      }
    : t;
}
function t7(e = null) {
  return (
    e &&
      (e.button.removeEventListener("click", e.handler, true),
      e.button.removeEventListener("click", e.handler),
      tW === e && (tW = null)),
    null
  );
}
function re() {
  return ((tW = t7(tW)), null);
}
function rt() {
  "undefined" != typeof window &&
    "function" == typeof window.addEventListener &&
    ((tG && tK === window) ||
      (window.addEventListener(pagination.MYWORKDAY_STEP_CHANGE_EVENT, re),
      (tG = true),
      (tK = window)));
}
function rr(e) {
  let t = e.toLowerCase();
  return (
    t.includes("phone") ||
    t.includes("mobile") ||
    /(^|[^a-z])cell(ular)?([^a-z]|$)/.test(t) ||
    t.includes("telephone") ||
    /(^|[^a-z])tel([^a-z]|$)/.test(t)
  );
}
function rn(e) {
  let t = e
      .toLowerCase()
      .replace(/\*/g, "")
      .replace(/[:\uff1a]\s*$/, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim(),
    r = t.replace(/\s+/g, "");
  return (
    "phonecountrycode" === r ||
    "countryphonecode" === r ||
    "countryregionphonecode" === r ||
    "countrycode" === r
  );
}
function ro(e) {
  let t = e
    .toLowerCase()
    .replace(/\*/g, "")
    .replace(/[:\uff1a]\s*$/, "")
    .replace(/\s+/g, " ")
    .trim();
  return "skills" === t || "add skills" === t || "type to add skills" === t;
}
function ri(e) {
  return e.every((e10) => "string" == typeof e10)
    ? [...e].sort((e10, t) => {
        let r = e10.trim().toLowerCase(),
          n = t.trim().toLowerCase(),
          o2 = r.localeCompare(n);
        return o2 || e10.localeCompare(t);
      })
    : e;
}
function ra(e) {
  let t = e.replace(/\D/g, "");
  return t || e;
}
function rl(e) {
  let t = e.match(/\+(\d{1,4})\b/);
  if (t?.[1]) return `+${t[1]}`;
  let r = e.replace(/\D/g, "");
  return r && r.length <= 4 ? `+${r}` : e;
}
function rs(e) {
  let t = e.trim(),
    r = t.replace(/\D/g, "");
  if (r.length < 7 || r.length > 15) return false;
  let n = t.replace(/\s*(?:ext\.?|x)\s*\d+\s*$/i, "");
  return !/[^0-9\s()+.-]/.test(n) && /[().-]/.test(n);
}
function ru(e, t = "") {
  if (Array.isArray(e)) {
    let r = e.map((e10) => ru(e10, t));
    return ro(t) ? ri(r) : r;
  }
  return e && "object" == typeof e
    ? Object.fromEntries(
        Object.entries(e).map(([e10, t10]) => [e10, ru(t10, e10)]),
      )
    : "string" == typeof e && rn(t)
      ? rl(e)
      : "string" == typeof e && (rr(t) || rs(e))
        ? ra(e)
        : e;
}
function rc(e) {
  return rules.isWorkdaySelfIdentifyLabel(e);
}
function rd(e) {
  if (Array.isArray(e)) return 0 === e.length;
  if ("string" != typeof e) return false;
  let t = e.trim();
  if ("[]" === t) return true;
  try {
    let e10 = JSON.parse(t);
    return Array.isArray(e10) && 0 === e10.length;
  } catch {
    return false;
  }
}
function rf(e, t) {
  let r = Object.entries(t).find(([e10, t10]) => rc(e10) && rd(t10));
  if (!r) return e;
  let n = e,
    o2 = r[1];
  for (let t10 of Object.keys(e))
    rc(t10) &&
      (n === e &&
        (n = {
          ...e,
        }),
      (n[t10] = o2));
  return n;
}
function rp(e) {
  let t = {
    bubbles: true,
    cancelable: false,
    ...("undefined" != typeof window
      ? {
          view: window,
        }
      : {}),
  };
  return "function" == typeof FocusEvent &&
    ["focus", "focusin", "blur", "focusout"].includes(e)
    ? new FocusEvent(e, t)
    : new Event(e, t);
}
function rm(e) {
  if (e.disabled) return false;
  if (e.tagName?.toUpperCase() === "INPUT") {
    let t10 = (e.getAttribute("type") || e.type || "").toLowerCase();
    if (
      [
        "hidden",
        "checkbox",
        "radio",
        "file",
        "button",
        "submit",
        "reset",
      ].includes(t10)
    )
      return false;
  }
  let t =
    "function" != typeof e.getClientRects || e.getClientRects().length > 0;
  if (!t) return false;
  let r = String(e.value ?? "").trim().length > 0,
    n = "true" === e.getAttribute("aria-invalid");
  return r || n;
}
function rh(e = document) {
  let t = Array.from(e.querySelectorAll("input, textarea")),
    r = 0;
  for (let e10 of t)
    rm(e10) &&
      (e10.focus?.(),
      e10.dispatchEvent(rp("focus")),
      e10.dispatchEvent(rp("focusin")),
      e10.dispatchEvent(
        new Event("input", {
          bubbles: true,
        }),
      ),
      e10.dispatchEvent(
        new Event("change", {
          bubbles: true,
        }),
      ),
      e10.blur?.(),
      e10.dispatchEvent(rp("blur")),
      e10.dispatchEvent(rp("focusout")),
      r++);
  return r;
}
function rg(e) {
  return (
    e.textContent ||
    e.innerText ||
    e.getAttribute?.("aria-label") ||
    e.getAttribute?.("title") ||
    ""
  )
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function rb(e) {
  let t = rg(e);
  return t.includes("submit");
}
function ry(e) {
  let t = e?.detail?.state;
  return t &&
    "number" == typeof t.index &&
    "number" == typeof t.total &&
    "string" == typeof t.title
    ? t
    : pagination.getMyWorkdayStepState();
}
function rv() {
  (tX?.cleanup(), (tX = null));
}
function rw(e, t) {
  (autofillAnswerPairTracking.sendAutofillAnswerPairEvent(e), tZ(t, e));
}
function rS({ baseline: e, bindContext: t, payload: r }) {
  let n;
  if (
    !t.step ||
    "undefined" == typeof window ||
    "function" != typeof window.addEventListener
  )
    return;
  rv();
  let o2 = () => {
      (window.removeEventListener?.(pagination.MYWORKDAY_STEP_CHANGE_EVENT, i2),
        n && clearTimeout(n),
        tX?.cleanup === o2 && (tX = null));
    },
    i2 = (n2) => {
      let i3 = ry(n2);
      t3(t.step, i3) && (o2(), rw(r, e));
    };
  (window.addEventListener(pagination.MYWORKDAY_STEP_CHANGE_EVENT, i2),
    "function" == typeof window.setTimeout &&
      (n = window.setTimeout(() => {
        (o2(),
          console.warn("[MyWorkday] skip autofill_answer_pair:", {
            reason: "workday_step_not_advanced",
            bindStep: t.step,
            submitStep: pagination.getMyWorkdayStepState(),
          }));
      }, 3500)),
    (tX = {
      cleanup: o2,
    }));
}
function rE(e, t = {}, r, n) {
  "undefined" != typeof document &&
    "function" == typeof document.querySelectorAll &&
    rh();
  let o2 = ru(e),
    i2 =
      educationItemTrace.getEducationTraceRunIdFromRecords(o2.education) ?? n,
    a2 = ru(
      rules.getFormSnapshot({
        includeEducationSnapshotIndex: true,
        includeEducationTrace: true,
        educationTraceRunId: i2 ?? void 0,
      }),
    ),
    { education: l2, employment: s2, ...u2 } = a2,
    { education: c2, employment: d2, ...f2 } = o2,
    p2 = rf(f2, u2),
    g2 = r
      ? t0()
      : {
          step: null,
        },
    b2 = r
      ? t8({
          autofillSnapshot: p2,
          additionalSubmitData: {
            education: l2,
            employment: s2,
          },
          bindContext: r,
          submitContext: g2,
          submitSnapshot: u2,
        })
      : null;
  return b2
    ? (console.warn("[MyWorkday] skip autofill_answer_pair:", {
        reason: b2,
        bindStep: r?.step,
        submitStep: g2.step,
        autofillKeys: Object.keys(p2),
        submitKeys: Object.keys(u2),
      }),
      null)
    : snapshotAlignment.alignMyWorkdayEducationAnswerPairTrackingData({
        formUrl: urlStore.useUrlStore.getState().currentTabUrl,
        autofillSnapshot: p2,
        submitSnapshot: u2,
        additionalAutofillData: {
          education: c2,
          employment: d2,
        },
        additionalSubmitData: {
          education: l2,
          employment: s2,
        },
        extraData: t9({
          bindContext: r,
          extraData: t,
          submitContext: g2,
        }),
        source: "myworkday",
      });
}
function rx(e, t = {}, r) {
  let n = rE(e, t, r);
  n && rw(n);
}
function rC({ baseline: e, bindContext: t, button: r, extraData: n }) {
  return () => {
    let o2 = rE(e.snapshot, n, t, e.educationTraceRunId);
    if (o2) {
      if (rb(r)) {
        (rv(), rw(o2, e));
        return;
      }
      rS({
        baseline: e,
        bindContext: t,
        payload: o2,
      });
    }
  };
}
function rA(e, t = null, r = {}, n) {
  (rt(), t7(t), tW && tW !== t && t7(tW));
  let o2 = document.querySelector(tV);
  if (!o2) return null;
  let i2 = t0(),
    a2 = {
      snapshot: tJ(e),
      educationTraceRunId:
        educationItemTrace.getEducationTraceRunIdFromRecords(e?.education) ??
        n ??
        null,
    },
    l2 = rC({
      baseline: a2,
      bindContext: i2,
      button: o2,
      extraData: r,
    });
  return (
    o2.addEventListener("click", l2, true),
    (tW = {
      button: o2,
      handler: l2,
      context: i2,
    })
  );
}
export {
  eI as WORKDAY_SEARCH_SKILLS_OPTION_MAX_RETRY,
  rA as bindMyWorkdaySubmitTracking,
  t_ as blurPage,
  re as clearActiveMyWorkdaySubmitTracking,
  rh as commitVisibleWorkdayInputsBeforeSubmit,
  tj as expandForm,
  ts as fillListboxButtonField,
  er as fillMyWorkdayCheckBoxesField,
  Z as fillMyWorkdayCheckbox,
  tO as fillMyWorkdayDateField,
  tf as fillMyWorkdayListboxRule,
  Y as fillMyWorkdayTextField,
  ta as fillSearchBoxInputField,
  eh as findBestWorkdaySearchOption,
  tv as getWorkdayResumeUploadInput,
  eC as getWorkdaySkillsFillSummary,
  tw as hasWorkdayResumeUploadInput,
  tU as isLoadingCleared,
  tY as isMyWorkdayFormReadyForAutofill,
  tx as preclickAddButtons,
  rx as submitHandler,
  t7 as unbindMyWorkdaySubmitTracking,
  tS as uploadResume,
  tz as waitPageClean,
  en as fillCountry,
  ey as clearWorkdaySearchSelection,
  tE as fillSkills,
};
