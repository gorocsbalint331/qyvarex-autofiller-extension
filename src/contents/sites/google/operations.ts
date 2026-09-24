// @ts-nocheck
/**
 * Google Careers - field fill operations (inputs, selects, resume, slots).
 */
import * as choiceMatch from "../../methods/choice-match.ts";
import * as messaging from "@plasmohq/messaging";
import * as answerMethods from "../../methods/answer.ts";
import * as dom from "../../methods/dom.ts";
import * as autofillAnswerPairTracking from "../autofill-answer-pair-tracking.ts";
import * as enums from "../../../core/enums.js";
import * as xpath from "../../../core/xpath.js";
import * as delay from "../../../utils/delay.js";
import getTargetOrTimeout from "../../../utils/getTargetOrTimeout.js";
import * as rules from "./rules.ts";
import * as googleAnswer from "./answer.ts";
import * as urlStore from "../../../store/url.js";
let b = "YPqjbf",
  y = "VfPpkd-fmcmS-wGMbrd",
  v = '[jsname="vhZMvf"], .Ufn6O',
  w = 300;
function S(e) {
  if (!e?.isConnected) return false;
  let t = window.getComputedStyle(e);
  if ("none" === t.display || "hidden" === t.visibility) return false;
  let r = e.getBoundingClientRect();
  return r.width > 0 && r.height > 0;
}
function E(e) {
  return (e || "").toLowerCase().replace(/\s+/g, " ").trim();
}
function x(e) {
  let t = e.closest('[jsname="wSASue"]') || e.parentElement;
  return E(
    (e.getAttribute("aria-label") ?? "").trim() ||
      (t?.querySelector('[jsname="V67aGc"]')?.textContent ?? ""),
  );
}
function C(e) {
  return (
    (e.querySelector('[jsname="Fb0Bif"]')?.textContent ?? "").trim() ||
    (
      e.closest('[jsname="wSASue"]')?.querySelector('[jsname="Fb0Bif"]')
        ?.textContent ?? ""
    ).trim()
  );
}
function A(e) {
  return "country calling code" === E(e);
}
function k(e) {
  return e.trim().match(/^(\+\d{1,4})\s*/)?.[1] ?? "";
}
function T(e) {
  let t = Array.from(
    document.querySelectorAll('input[aria-label="Phone number"]'),
  ).filter((t2) => t2 !== e && t2.isConnected && !t2.disabled && S(t2));
  return 1 === t.length ? t[0] : null;
}
async function F(e, t) {
  if (!t || "boolean" != typeof e.isConnected) return null;
  let r = Date.now(),
    n = 6500;
  for (; Date.now() - r < n; ) {
    if (e.isConnected) {
      await delay.delay(80);
      continue;
    }
    let r2 = T(e);
    if (!r2) {
      await delay.delay(80);
      continue;
    }
    let n2 = k(r2.value ?? ""),
      o2 = n2 === t;
    return o2 ? r2 : null;
  }
  return null;
}
export function resolveLiveGooglePhoneCountryCodeTrigger(e) {
  let t = (e2) =>
    e2.isConnected && S(e2) && rules.isGooglePhoneCountryCodeControl(e2, x(e2));
  if (t(e)) return e;
  let r = Array.from(document.querySelectorAll('[role="combobox"]')).filter(t);
  return 1 === r.length ? r[0] : null;
}
function j(e) {
  let t = [
    e.closest("li.SQdjAf"),
    e.closest('div[jsname="rT1Nze"]'),
    e.closest(".rbgmcb"),
    e.closest('[jsname="wSASue"]'),
    e.parentElement,
  ];
  for (let e2 of t) {
    if (!e2) continue;
    let t2 = Array.from(e2.querySelectorAll('[role="combobox"]'));
    for (let e3 of t2) {
      if (!S(e3)) continue;
      let t3 = x(e3);
      if ("state / province" === t3 || "state" === t3) return e3;
    }
  }
  return null;
}
function D(e) {
  return e
    ? (Array.from(e.querySelectorAll('[role="combobox"]')).find((e2) => {
        if (!S(e2)) return false;
        let t = x(e2);
        return "state / province" === t || "state" === t;
      }) ?? null)
    : null;
}
async function P(e, t = 1200) {
  await delay.delay(w);
  let r = Date.now();
  for (; Date.now() - r < t; ) {
    let t2 = j(e);
    if (t2) return t2;
    await delay.delay(80);
  }
  return j(e);
}
function _(e, t) {
  let r = E(e),
    n = E(t);
  if (!r || !n) return false;
  if (r === n) return true;
  let i2 =
    2 === n.length ? n : (googleAnswer.STATE_PROVINCE_NAME_TO_CODE[n] ?? "");
  return (
    !!i2 &&
    (choiceMatch.isExactChoiceMatch(r, i2) ||
      choiceMatch.isExactChoiceMatch(r, n))
  );
}
async function L(e, t) {
  let r = (e2) => (e2 || "").replace(/\s+/g, " ").trim().toLowerCase(),
    n = t ? r(t) : "",
    o2 = (e2) => !!e2 && e2.querySelectorAll('[role="option"]').length > 0,
    i2 = (e2) => {
      if (!e2) return null;
      let t2 = e2.querySelectorAll('[role="listbox"]');
      for (let e3 of t2) {
        let t3 = e3;
        if (S(t3) && o2(t3)) {
          if (n) {
            let e4 = r((t3.getAttribute("aria-label") ?? "").trim());
            if (e4 && e4 !== n) continue;
          }
          return t3;
        }
      }
      return null;
    },
    a2 = () => {
      if ("country / region" === n) {
        let t3 = e.closest(".country-selector"),
          r2 = i2(t3);
        if (r2) return r2;
        let n2 = e.closest('[jsname="wSASue"]');
        if (n2) {
          let e2 = n2.querySelector('div[jsname="xl07Ob"]'),
            t4 = e2?.querySelector(
              `ul[jsname="${rules.LISTBOX_UL_JSNAME}"][role="listbox"]`,
            );
          if (t4 && S(t4) && t4.querySelectorAll('[role="option"]').length > 0)
            return t4;
        }
        let o3 = e.closest(".rbgmcb");
        if (o3) {
          let e2 = o3.querySelector(
            `ul[jsname="${rules.LISTBOX_UL_JSNAME}"][role="listbox"]`,
          );
          if (e2 && S(e2) && e2.querySelectorAll('[role="option"]').length > 0)
            return e2;
        }
        let a4 =
          i2(e.parentElement) || i2(e.parentElement?.parentElement ?? null);
        if (a4) return a4;
      }
      if ("state / province" === n) {
        let t3 = e.closest('[jsname="wSASue"]');
        if (t3) {
          let e2 = t3.querySelector('div[jsname="xl07Ob"]'),
            r3 = e2?.querySelector(
              `ul[jsname="${rules.LISTBOX_UL_JSNAME}"][role="listbox"][aria-label="State / province"]`,
            );
          if (r3 && S(r3) && r3.querySelectorAll('[role="option"]').length > 0)
            return r3;
        }
        let r2 = e.closest("li.SQdjAf") ?? e.closest(".rbgmcb");
        if (r2) {
          let e2 = r2.querySelector(
            `ul[jsname="${rules.LISTBOX_UL_JSNAME}"][role="listbox"][aria-label="State / province"]`,
          );
          if (e2 && S(e2) && e2.querySelectorAll('[role="option"]').length > 0)
            return e2;
        }
        let n2 = e.closest('div[jsname="rT1Nze"]');
        if (n2) {
          let e2 = n2.querySelector(
            `ul[jsname="${rules.LISTBOX_UL_JSNAME}"][role="listbox"][aria-label="State / province"]`,
          );
          if (e2 && S(e2) && e2.querySelectorAll('[role="option"]').length > 0)
            return e2;
        }
        let o3 =
          i2(e.parentElement) || i2(e.parentElement?.parentElement ?? null);
        if (o3) return o3;
      }
      let t2 = e.closest('[jsname="wSASue"]');
      if (t2) {
        let e2 = t2.querySelector('div[jsname="xl07Ob"]'),
          r2 = e2?.querySelector(
            `ul[jsname="${rules.LISTBOX_UL_JSNAME}"][role="listbox"]`,
          );
        if (r2 && S(r2) && r2.querySelectorAll('[role="option"]').length > 0)
          return r2;
      }
      let a3 = e.getAttribute("aria-controls");
      if (a3) {
        let e2 = document.getElementById(a3);
        if (e2?.getAttribute("role") === "listbox" && S(e2) && o2(e2))
          return e2;
      }
      let l3 = e.closest('[jsname="QBGAS"]');
      if (l3) {
        let e2 =
          l3.querySelector(
            `ul[jsname="${rules.LISTBOX_UL_JSNAME}"][role="listbox"]`,
          ) || l3.querySelector('[role="listbox"]');
        if (e2 && S(e2) && e2.querySelectorAll('[role="option"]').length > 0)
          return e2;
      }
      let s3 =
        i2(e.parentElement) || i2(e.parentElement?.parentElement ?? null);
      if (s3) return s3;
      let u2 = document.querySelectorAll('[role="listbox"]'),
        c2 = [];
      for (let e2 of u2)
        if (S(e2) && 0 !== e2.querySelectorAll('[role="option"]').length) {
          if (!n) return e2;
          {
            let t3 = r((e2.getAttribute("aria-label") ?? "").trim());
            t3 && t3 === n && c2.push(e2);
          }
        }
      if (n && c2.length > 0) {
        let t3 = e.closest('[jsname="wSASue"]'),
          r2 = t3 ? c2.find((e2) => t3.contains(e2)) : null;
        if (r2) return r2;
        let n2 = e.closest(".rbgmcb"),
          o3 = n2 ? c2.filter((e2) => n2.contains(e2)) : [],
          i3 = o3.length > 0 ? o3 : c2,
          a4 = e.getBoundingClientRect(),
          l4 = a4.top + a4.height / 2,
          s4 = i3[0],
          u3 = 1 / 0;
        for (let e2 of i3) {
          let t4 = e2.getBoundingClientRect(),
            r3 = Math.abs(t4.top + t4.height / 2 - l4);
          r3 < u3 && ((u3 = r3), (s4 = e2));
        }
        return s4;
      }
      if (n) {
        for (let e2 of u2)
          if (S(e2) && e2.querySelectorAll('[role="option"]').length > 0)
            return e2;
      }
      return null;
    },
    l2 = await getTargetOrTimeout(a2, () => false, 8);
  if (l2) return l2;
  let s2 =
    e.isConnected &&
    ("true" === e.getAttribute("aria-expanded") ||
      document.activeElement === e);
  return s2 ? getTargetOrTimeout(a2, () => false, 17) : null;
}
async function R(e) {
  let t = (e.getAttribute("aria-label") ?? "").trim(),
    r = (e2) => (e2 || "").replace(/\s+/g, " ").trim().toLowerCase(),
    n = () => {
      let n2 = e.getAttribute("aria-controls");
      if (n2) {
        let e2 = document.getElementById(n2);
        if (e2?.getAttribute("role") === "listbox" && S(e2)) return e2;
      }
      let o3 = document.querySelectorAll(
        `ul[jsname="${rules.AUTOCOMPLETE_LISTBOX_JSNAME}"][role="listbox"]`,
      );
      for (let e2 of o3) {
        let n3 = e2;
        if (S(n3)) {
          if (t) {
            let e3 = r((n3.getAttribute("aria-label") ?? "").trim()),
              o4 = r(t);
            if (e3 && o4 && !(e3 === o4 || e3.includes(o4) || o4.includes(e3)))
              continue;
          }
          return n3;
        }
      }
      return null;
    },
    o2 = await getTargetOrTimeout(n, () => false, 6);
  if (o2) return o2;
  let i2 =
    e.isConnected &&
    ("" !== (e.value ?? "").trim() ||
      "true" === e.getAttribute("aria-expanded") ||
      document.activeElement === e);
  return i2 ? getTargetOrTimeout(n, () => false, 19) : null;
}
function O(e, t) {
  e.dispatchEvent(
    new MouseEvent(t, { bubbles: true, cancelable: true, view: window }),
  );
}
function M(e, t) {
  try {
    e.dispatchEvent(
      new PointerEvent(t, { bubbles: true, cancelable: true, view: window }),
    );
  } catch (e2) {}
}
async function N(e, t = {}) {
  let r = t.holdBeforeClickMs ?? 100,
    n = t.afterClickMs ?? 220;
  M(e, "pointerdown"),
    O(e, "mousedown"),
    e.dispatchEvent(new FocusEvent("focus", { bubbles: true })),
    e.focus(),
    await delay.delay(r),
    M(e, "pointerup"),
    O(e, "mouseup"),
    O(e, "click"),
    await delay.delay(n);
}
async function $(e, t, r, n = 200) {
  r(t),
    e.dispatchEvent(new Event("input", { bubbles: true, composed: true })),
    await delay.delay(n);
  let o2 = t?.trim()?.[0] || "a";
  e.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: o2 }));
}
function B(e) {
  let t = e,
    r = (t.textContent ?? "").replace(/\s+/g, " ").trim();
  return r;
}
async function q(e, t = 2200) {
  let r = 100,
    n = Math.min(t, 700),
    o2 = Math.max(1, Math.ceil(n / r));
  for (let t2 = 0; t2 < o2; t2++) {
    let t3 = Array.from(e.querySelectorAll('li[role="option"]'));
    if (t3.length > 0) return t3;
    await delay.delay(r);
  }
  if (t <= n || !e.isConnected || !S(e)) return [];
  let i2 = Math.max(0, t - n),
    a2 = Math.max(1, Math.ceil(i2 / r));
  for (let t2 = 0; t2 < a2; t2++) {
    let t3 = Array.from(e.querySelectorAll('li[role="option"]'));
    if (t3.length > 0) return t3;
    await delay.delay(r);
  }
  return [];
}
async function U(e, t, r = 2200, n) {
  let o2 = await R(e);
  if (!o2) return false;
  let i2 = await q(o2, r),
    a2 = i2.map((e2) => B(e2)).filter(Boolean);
  if (0 === i2.length) return false;
  let l2 =
      googleAnswer.isPreferredWorkLocationLabel(n?.label ?? "") ||
      googleAnswer.isPreferredWorkLocationLabel(
        e.getAttribute("aria-label") ?? "",
      ),
    s2 = null;
  if (l2) {
    let e2 = googleAnswer.findPreferredWorkLocationOptionIndex(a2, t);
    s2 = e2.index >= 0 ? (i2[e2.index] ?? null) : null;
  } else {
    let e2 = (t || "").replace(/\s+/g, " ").trim().toLowerCase();
    for (let t2 of i2) {
      let r2 = (B(t2) || "").replace(/\s+/g, " ").trim().toLowerCase();
      if (r2 && r2 === e2) {
        s2 = t2;
        break;
      }
    }
  }
  if (!s2) return false;
  try {
    let e2 = s2;
    M(e2, "pointerdown"),
      O(e2, "mousedown"),
      await delay.delay(50),
      M(e2, "pointerup"),
      O(e2, "mouseup"),
      O(e2, "click");
    try {
      e2.click();
    } catch (e3) {}
    return await delay.delay(120), true;
  } catch (e2) {
    return false;
  }
}
function H(e) {
  try {
    e.scrollIntoView({ block: "center", inline: "nearest" });
  } catch {}
}
async function Y(e) {
  if ("true" !== e.getAttribute("aria-expanded")) return;
  e.setAttribute("aria-expanded", "false");
  let t = e.closest('[jsname="wSASue"]');
  t && t.classList.remove("VfPpkd-O1htCb-OWXEXe-UJflGc"),
    e.classList.remove(
      "VfPpkd-ksKsZd-mWPk3d-OWXEXe-AHe6Kc-XpnDCe",
      "VfPpkd-ksKsZd-mWPk3d",
    );
  let r = t?.querySelector('div[jsname="xl07Ob"]');
  r &&
    (r.classList.remove("VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c"),
    (r.style.display = "none"),
    z(r));
  try {
    e.blur();
  } catch {}
}
function z(e) {
  requestAnimationFrame(() => {
    try {
      e.style.removeProperty("display");
    } catch {}
  });
}
export async function collapseOpenComboboxes() {
  try {
    let e = document.querySelectorAll(
      '[role="combobox"][aria-expanded="true"]',
    );
    for (let t of e) {
      t.setAttribute("aria-expanded", "false");
      let e2 = t.closest('[jsname="wSASue"]');
      e2 && e2.classList.remove("VfPpkd-O1htCb-OWXEXe-UJflGc"),
        t.classList.remove(
          "VfPpkd-ksKsZd-mWPk3d-OWXEXe-AHe6Kc-XpnDCe",
          "VfPpkd-ksKsZd-mWPk3d",
        );
      let r = e2?.querySelector('div[jsname="xl07Ob"]');
      r &&
        (r.classList.remove("VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c"),
        (r.style.display = "none"),
        z(r));
      try {
        t.blur();
      } catch {}
    }
  } catch {}
}
export async function fillInputTextField(e, t, r, n = {}) {
  let o2 = null == t ? "" : String(t).trim();
  if (e.disabled || e.hasAttribute("readonly")) return false;
  let i2 = "state" === (r?.label ?? "").trim().toLowerCase(),
    a2 = !!r?.__preferStateSelect;
  H(e);
  let l2 = e.closest(v) || e.parentElement,
    s2 =
      e.getAttribute("jsname") === b ||
      e.classList.contains(y) ||
      l2 !== e.parentElement,
    c2 =
      e instanceof HTMLInputElement &&
      "combobox" === e.getAttribute("role") &&
      ("list" === e.getAttribute("aria-autocomplete") ||
        (r?.label ?? "").toLowerCase().includes("skill") ||
        (e.getAttribute("aria-label") ?? "").toLowerCase().includes("skill")),
    f2 = s2 && !c2,
    p2 = false;
  if ("" !== o2 && i2 && a2) {
    let t2 = j(e);
    if ((t2 || (t2 = await P(e)), t2)) {
      let e2 = t2.closest('[jsname="wSASue"]') || t2.parentElement || t2;
      await fillSelectField(
        {
          ...r,
          label: "State / province",
          type: enums.FIELD_TYPE.SELECT,
          $label: e2,
          $input: t2,
          options: [],
        },
        o2,
      );
      let n2 = C(t2);
      p2 = _(n2, o2);
    }
  }
  if ("" === o2) {
    try {
      let t2 = Object.getOwnPropertyDescriptor(
          e instanceof HTMLInputElement
            ? window.HTMLInputElement.prototype
            : window.HTMLTextAreaElement.prototype,
          "value",
        )?.set,
        r2 = (r3) => {
          try {
            t2 ? t2.call(e, r3) : (e.value = r3);
          } catch {
            e.value = r3;
          }
        };
      r2(""),
        e.dispatchEvent(new Event("input", { bubbles: true, composed: true })),
        e.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      let n2 = e?._valueTracker;
      n2?.setValue && n2.setValue(""),
        e.dispatchEvent(new FocusEvent("focusout", { bubbles: true })),
        e.blur(),
        await delay.delay(40);
      let o3 =
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null,
        i3 = s2 && !!o3 && (o3 === e || (!!l2 && l2.contains(o3)));
      if (f2)
        try {
          M(e, "pointerdown"),
            O(e, "mousedown"),
            await delay.delay(15),
            M(e, "pointerup"),
            O(e, "mouseup"),
            O(e, "click");
          try {
            e.click();
          } catch {}
          await delay.delay(20);
          let t3 = document.body || document.documentElement;
          if (t3) {
            M(t3, "pointerdown"),
              O(t3, "mousedown"),
              await delay.delay(15),
              M(t3, "pointerup"),
              O(t3, "mouseup"),
              O(t3, "click");
            try {
              t3.click();
            } catch {}
          }
          await delay.delay(30),
            (o3 =
              document.activeElement instanceof HTMLElement
                ? document.activeElement
                : null),
            (i3 = s2 && !!o3 && (o3 === e || (!!l2 && l2.contains(o3))));
        } catch {}
      if (i3) {
        let e2 = document.createElement("button");
        (e2.type = "button"),
          (e2.tabIndex = -1),
          e2.setAttribute("aria-hidden", "true"),
          (e2.style.position = "fixed"),
          (e2.style.left = "-9999px"),
          (e2.style.top = "0"),
          (e2.style.width = "1px"),
          (e2.style.height = "1px"),
          (e2.style.opacity = "0"),
          (e2.style.pointerEvents = "none"),
          document.body.appendChild(e2);
        try {
          e2.focus({ preventScroll: true });
        } catch {
          e2.focus();
        }
        await delay.delay(20);
        try {
          e2.blur();
        } catch {}
        e2.remove(), await delay.delay(20);
      }
    } catch {}
    return true;
  }
  let m2 =
      e instanceof HTMLInputElement &&
      "phone number" === (e.getAttribute("aria-label") ?? "").toLowerCase(),
    g2 = "";
  if (m2) {
    let t2 = (e.value ?? "").trim(),
      r2 = t2.match(/^(\+\d{1,4})\s*/);
    r2 &&
      ((g2 = r2[1] + " "),
      (o2.startsWith(r2[1]) || o2.startsWith("+")) && (g2 = ""));
  }
  try {
    e.focus(),
      e.dispatchEvent(new FocusEvent("focusin", { bubbles: true })),
      await delay.delay(50);
    let t2 = Object.getOwnPropertyDescriptor(
        e instanceof HTMLInputElement
          ? window.HTMLInputElement.prototype
          : window.HTMLTextAreaElement.prototype,
        "value",
      )?.set,
      i3 = (r2) => {
        try {
          t2 ? t2.call(e, r2) : (e.value = r2);
        } catch {
          e.value = r2;
        }
      },
      a3 = g2 ? g2 + o2 : o2;
    m2 ||
      (i3(""),
      e.dispatchEvent(new Event("input", { bubbles: true, composed: true })),
      e.dispatchEvent(new Event("change", { bubbles: true, composed: true })),
      await delay.delay(30)),
      i3(a3);
    try {
      e.dispatchEvent(
        new InputEvent("input", {
          bubbles: true,
          composed: true,
          data: a3,
          inputType: "insertText",
        }),
      );
    } catch {
      e.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
    }
    e.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    let u2 = e?._valueTracker;
    if (
      (u2?.setValue && (m2 || u2.setValue(""), u2.setValue(a3)),
      await delay.delay(80),
      m2 && false !== n.recoverGooglePhoneRemount)
    ) {
      let t3 = await F(e, g2.trim());
      if (t3)
        return fillInputTextField(t3, o2, r, {
          recoverGooglePhoneRemount: false,
        });
    }
    let p3 = false;
    if (c2) {
      let t3 = e,
        n2 = (r?.label ?? "").trim().toLowerCase(),
        a4 =
          googleAnswer.isPreferredWorkLocationLabel(r?.label ?? "") ||
          googleAnswer.isPreferredWorkLocationLabel(
            t3.getAttribute("aria-label") ?? "",
          ),
        l3 = {
          wake: { holdBeforeClickMs: 100, afterClickMs: 220 },
          keydownDelayMs: 200,
          beforePickDelayMs: 220,
          retryDelayMs: 300,
          optionWaitTimeoutMs: 2200,
          betweenItemsDelayMs: 150,
          clearInputDelayMs: 80,
        };
      await N(t3, l3.wake);
      let s3 =
          n2.includes("location") &&
          (n2.includes("prefer") || n2.includes("prefer working")),
        u3 = s3
          ? [o2]
          : o2
              .split(",")
              .map((e2) => e2.trim())
              .filter(Boolean),
        c3 = u3.length ? u3 : [o2];
      for (let e2 = 0; e2 < c3.length; e2++) {
        let n3 = c3[e2];
        await $(t3, n3, i3, l3.keydownDelayMs),
          await delay.delay(l3.beforePickDelayMs);
        let o3 = await U(t3, n3, l3.optionWaitTimeoutMs, {
          enabled: a4,
          label: r?.label ?? "",
        });
        o3 ||
          (await N(t3, l3.wake),
          await $(t3, n3, i3, l3.keydownDelayMs),
          await delay.delay(l3.retryDelayMs),
          (o3 = await U(t3, n3, l3.optionWaitTimeoutMs, {
            enabled: a4,
            label: r?.label ?? "",
          }))),
          (p3 = p3 || o3);
        let s4 = e2 < c3.length - 1;
        s4 &&
          (o3 && (await delay.delay(l3.betweenItemsDelayMs)),
          i3(""),
          t3.dispatchEvent(
            new Event("input", { bubbles: true, composed: true }),
          ),
          await delay.delay(l3.clearInputDelayMs));
      }
    }
    await delay.delay(60),
      e.dispatchEvent(new FocusEvent("focusout", { bubbles: true })),
      e.blur(),
      await delay.delay(40);
    let b2 =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null,
      y2 = s2 && !!b2 && (b2 === e || (!!l2 && l2.contains(b2)));
    if (f2)
      try {
        M(e, "pointerdown"),
          O(e, "mousedown"),
          await delay.delay(15),
          M(e, "pointerup"),
          O(e, "mouseup"),
          O(e, "click");
        try {
          e.click();
        } catch {}
        await delay.delay(20);
        let t3 = document.body || document.documentElement;
        if (t3) {
          M(t3, "pointerdown"),
            O(t3, "mousedown"),
            await delay.delay(15),
            M(t3, "pointerup"),
            O(t3, "mouseup"),
            O(t3, "click");
          try {
            t3.click();
          } catch {}
        }
        await delay.delay(30),
          (b2 =
            document.activeElement instanceof HTMLElement
              ? document.activeElement
              : null),
          (y2 = s2 && !!b2 && (b2 === e || (!!l2 && l2.contains(b2))));
      } catch {}
    if (y2) {
      let e2 = document.createElement("button");
      (e2.type = "button"),
        (e2.tabIndex = -1),
        e2.setAttribute("aria-hidden", "true"),
        (e2.style.position = "fixed"),
        (e2.style.left = "-9999px"),
        (e2.style.top = "0"),
        (e2.style.width = "1px"),
        (e2.style.height = "1px"),
        (e2.style.opacity = "0"),
        (e2.style.pointerEvents = "none"),
        document.body.appendChild(e2);
      try {
        e2.focus({ preventScroll: true });
      } catch {
        e2.focus();
      }
      await delay.delay(20);
      try {
        e2.blur();
      } catch {}
      e2.remove(), await delay.delay(20);
    } else await delay.delay(20);
    if (c2 && "" === e.value.trim() && p3) return true;
  } catch (t2) {
    try {
      (e.value = g2 ? g2 + o2 : o2), await delay.delay(100);
    } catch (e2) {
      return p2;
    }
  }
  let w2 = (e.value ?? "").trim();
  return w2.length > 0 || p2;
}
function G(e) {
  let t = (e || "").toLowerCase();
  return t.includes("state") && (t.includes("province") || "state" === t);
}
export async function fillGoogleCountryOption(e, t) {
  let r = googleAnswer.resolveCountryDataValue(t);
  return await ee(e, t, r ? [r] : [], true);
}
async function X(e, t) {
  let r = E(t),
    n =
      2 === r.length
        ? r.toUpperCase()
        : (googleAnswer.STATE_PROVINCE_NAME_TO_CODE[r] ?? "");
  return await ee(e, t, n ? [n] : []);
}
function J(e) {
  let t = e.querySelector('[jsname="K4r5Ff"]');
  return E((t?.textContent ?? e.textContent ?? "").trim());
}
async function Q(e) {
  try {
    e.scrollIntoView({ block: "nearest", inline: "nearest" });
  } catch {}
  let t = e.getBoundingClientRect(),
    r = {
      bubbles: true,
      cancelable: true,
      clientX: t.left + Math.max(1, t.width / 2),
      clientY: t.top + Math.max(1, t.height / 2),
      view: window,
    };
  try {
    e.dispatchEvent(
      new PointerEvent("pointerdown", { ...r, pointerType: "mouse" }),
    ),
      e.dispatchEvent(new MouseEvent("mousedown", r)),
      e.dispatchEvent(
        new PointerEvent("pointerup", { ...r, pointerType: "mouse" }),
      ),
      e.dispatchEvent(new MouseEvent("mouseup", r)),
      e.dispatchEvent(new MouseEvent("click", r));
  } catch {}
  try {
    e.click();
  } catch {}
  await delay.delay(120);
}
async function Z(e, t) {
  let r = resolveLiveGooglePhoneCountryCodeTrigger(e);
  if (!r) return false;
  H(r), r.focus(), r.click();
  let n = await L(r, "Country calling code");
  if (!n) return await Y(r), false;
  let o2 = E(t),
    i2 = Array.from(
      n.querySelectorAll('[role="option"], li[role="option"], [data-value]'),
    ).filter((e2) => J(e2) === o2);
  if (1 !== i2.length) return await Y(r), false;
  let a2 = i2[0];
  await Q(a2);
  let l2 = resolveLiveGooglePhoneCountryCodeTrigger(r),
    s2 = "true" === a2.getAttribute("aria-selected"),
    u2 = !!l2 && E(C(l2)) === o2,
    c2 = s2 && u2;
  return await Y(l2 ?? r), c2;
}
async function ee(e, t, r, n = false) {
  if (!t.trim()) return null;
  let i2 = r
      .map((e2) =>
        String(e2 ?? "")
          .trim()
          .toUpperCase(),
      )
      .filter(Boolean),
    a2 = null;
  for (let t2 of i2)
    if (
      (a2 =
        e.querySelector(`li[data-value="${t2}"]`) ||
        e.querySelector(`[role="option"][data-value="${t2}"]`) ||
        null)
    )
      break;
  if (!a2) {
    let r2 = E(t),
      i3 = Array.from(
        e.querySelectorAll('[role="option"], li[role="option"], [data-value]'),
      );
    a2 =
      i3.find((e2) => {
        let t2 = E(e2.textContent || "");
        return t2 === r2 || (!n && choiceMatch.isExactChoiceMatch(t2, r2));
      }) || null;
  }
  if (!a2) return null;
  let l2 = a2,
    s2 = ["mousedown", "mouseup", "click"];
  return (
    s2.forEach((e2) => {
      let t2 = new MouseEvent(e2, {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      });
      l2.dispatchEvent(t2);
    }),
    await delay.delay(120),
    a2
  );
}
async function et(e, t = 1200) {
  let r =
    e.closest("li.SQdjAf") ||
    e.closest('div[jsname="rT1Nze"]') ||
    e.closest(".rbgmcb") ||
    e.closest('[jsname="wSASue"]');
  if (!r) return null;
  let n = googleAnswer.resolveCountryDataValue(C(e));
  if (!n) return null;
  await delay.delay(w);
  let o2 = Date.now();
  for (; Date.now() - o2 < t; ) {
    let e2 = D(r);
    if (e2) return e2;
    await delay.delay(80);
  }
  return D(r);
}
export async function fillSelectField(e, t) {
  let r = e.label,
    n = e?.__debugWorkCountry,
    i2 = Array.isArray(t) ? t?.[0] : t,
    a2 = null == i2 ? "" : String(i2).trim();
  if (("" === a2 && G(r)) || ("" === a2 && rules.isCountryLabel(r))) return;
  let l2 = e.$input;
  if (!l2) return;
  let s2 =
    "combobox" === l2.getAttribute("role")
      ? l2
      : l2.querySelector('[role="combobox"]') || l2;
  if (s2.disabled || "true" === s2.getAttribute("aria-disabled")) return;
  if (A(r)) return Z(s2, a2);
  H(s2), s2.focus(), s2.click();
  let c2 = await L(s2, r);
  if (!c2) {
    await Y(s2);
    return;
  }
  if (rules.isCountryLabel(r)) {
    let e2 = await fillGoogleCountryOption(c2, a2);
    if (e2) {
      await Y(s2);
      let e3 = await et(s2),
        t2 = String(n?.state ?? "").trim();
      if (e3 && t2 && !_(C(e3), t2)) {
        let r2 = e3.closest('[jsname="wSASue"]') || e3.parentElement || e3;
        await fillSelectField(
          {
            label: "State / province",
            type: enums.FIELD_TYPE.SELECT,
            $label: r2,
            $input: e3,
            options: [],
          },
          t2,
        );
      }
      await delay.delay(80);
      return;
    }
  }
  if (G(r)) {
    let e2 = await X(c2, a2);
    if (e2) {
      await Y(s2), await delay.delay(80);
      return;
    }
  }
  let f2 = E(a2),
    p2 = f2,
    g2 = (e2) => {
      let t2 = e2.querySelector('[jsname="K4r5Ff"]'),
        r2 = (t2?.textContent ?? "").trim(),
        n2 = (e2.textContent ?? "").replace(/\s+/g, " ").trim(),
        o2 = (e2.getAttribute("data-value") ?? "").trim();
      return E(r2 || n2 || o2);
    },
    b2 = (e2, t2) => {
      let n2 = g2(e2),
        i3 = (e2.getAttribute("data-value") ?? "").trim().toLowerCase();
      return (
        !!t2 &&
        ((!!i3 && i3 === t2) ||
          (!!n2 &&
            (n2 === t2 ||
              (!rules.isCountryLabel(r) &&
                !!choiceMatch.isExactChoiceMatch(n2, t2)))))
      );
    },
    y2 = (e2) =>
      (e2 || "").toLowerCase().includes("state") &&
      (e2 || "").toLowerCase().includes("province"),
    v2 = (e2, t2) => {
      let r2 = null;
      for (let t3 of e2)
        if (b2(t3, p2)) {
          r2 = t3;
          break;
        }
      if (!r2 && t2 && y2(t2) && p2) {
        let t3 = googleAnswer.STATE_PROVINCE_NAME_TO_CODE[p2];
        if (t3)
          for (let n2 of e2) {
            let e3 = g2(n2);
            if (e3 === t3 || e3 === t3.toUpperCase()) {
              r2 = n2;
              break;
            }
          }
      }
      return r2;
    },
    w2 = () =>
      Array.from(
        c2.querySelectorAll('[role="option"], li[role="option"], [data-value]'),
      ),
    S2 = (e2) => {
      if (e2.scrollHeight > e2.clientHeight + 2) return e2;
      let t2 = e2.parentElement,
        r2 = 0;
      for (; t2 && r2 < 6; ) {
        if (t2.scrollHeight > t2.clientHeight + 2) return t2;
        (t2 = t2.parentElement), r2++;
      }
      return e2;
    },
    x2 = S2(c2),
    k2 = async (e2, t2) => {
      try {
        e2.dispatchEvent(
          new WheelEvent("wheel", {
            bubbles: true,
            cancelable: true,
            deltaY: t2,
          }),
        );
      } catch (e3) {}
      (e2.scrollTop = Math.max(
        0,
        Math.min(e2.scrollHeight, e2.scrollTop + t2),
      )),
        await delay.delay(80);
    },
    T2 = async (e2) => {
      try {
        e2.scrollIntoView({ block: "nearest", inline: "nearest" });
      } catch (e3) {}
      let t2 = e2.getBoundingClientRect(),
        r2 = t2.left + Math.max(1, t2.width / 2),
        n2 = t2.top + Math.max(1, t2.height / 2),
        o2 = {
          bubbles: true,
          cancelable: true,
          clientX: r2,
          clientY: n2,
          view: window,
        };
      try {
        e2.dispatchEvent(
          new PointerEvent("pointerdown", { ...o2, pointerType: "mouse" }),
        ),
          e2.dispatchEvent(new MouseEvent("mousedown", o2)),
          e2.dispatchEvent(
            new PointerEvent("pointerup", { ...o2, pointerType: "mouse" }),
          ),
          e2.dispatchEvent(new MouseEvent("mouseup", o2)),
          e2.dispatchEvent(new MouseEvent("click", o2));
      } catch (e3) {}
      try {
        e2.click();
      } catch (e3) {}
      await delay.delay(120);
    },
    F2 = async (e2, t2, r2) => {
      if (!t2.length) return;
      let n2 = t2.map((e3) => E(String(e3 ?? ""))).filter((e3) => "" !== e3);
      if (!n2.length) return;
      let i3 = n2.findIndex((e3) => e3 === r2),
        a3 =
          i3 >= 0
            ? i3
            : n2.findIndex((e3) => choiceMatch.isExactChoiceMatch(e3, r2));
      if (a3 < 0 || e2.scrollHeight <= e2.clientHeight) return;
      let l3 = n2.length <= 1 ? 0 : a3 / (n2.length - 1),
        s3 = Math.max(0, (e2.scrollHeight - e2.clientHeight) * l3),
        u2 = s3 - e2.scrollTop;
      Math.abs(u2) > 2 && (await k2(e2, u2));
    },
    I2 = w2(),
    j2 = v2(I2, r);
  if (!j2 && "" !== a2.trim()) {
    let t2 = Array.isArray(e.options)
        ? e.options.map((e2) => String(e2 ?? "").trim()).filter(Boolean)
        : [],
      n2 = I2.map((e2) => g2(e2)).filter(Boolean),
      o2 = t2.length ? t2 : n2;
    await F2(x2, o2, p2), (j2 = v2((I2 = w2()), r));
  }
  if (!j2 && "" !== a2.trim()) {
    let e2 = 12;
    for (let t2 of [1, -1]) {
      if (j2) break;
      t2 < 0 &&
        ((x2.scrollTop = Math.max(0, x2.scrollHeight - x2.clientHeight)),
        await delay.delay(80));
      for (let n2 = 0; n2 < e2; n2++) {
        let e3 = x2.scrollTop,
          n3 = t2 * (0.85 * (x2.clientHeight || 280));
        if (
          (await k2(x2, n3),
          1 > Math.abs(x2.scrollTop - e3) || (j2 = v2((I2 = w2()), r)))
        )
          break;
      }
    }
  }
  try {
    j2 && (await T2(j2));
  } catch {
  } finally {
    await Y(s2);
  }
  await delay.delay(80);
}
export async function fillCheckboxField(e, t) {
  let r = e.$checkboxs,
    n = e.options;
  if (r && r.length > 1 && n?.length) {
    let e2 = new Set(),
      i3 = Array.isArray(t) ? t : null == t ? [] : [t];
    for (let t2 of i3) {
      let r2 = String(t2 ?? "").trim();
      r2 && e2.add(r2.toLowerCase());
    }
    for (let t2 = 0; t2 < r.length; t2++) {
      let i4 = r[t2];
      if (!i4 || i4.disabled) continue;
      let a3 = (n[t2] ?? i4.value ?? "").trim().toLowerCase(),
        l3 =
          a3 &&
          (e2.has(a3) ||
            e2.has((n[t2] ?? "").trim()) ||
            Array.from(e2).some((e3) =>
              choiceMatch.isExactChoiceMatch(a3, e3),
            ));
      if (i4.checked !== l3)
        try {
          i4.click(), await delay.delay(100);
        } catch {}
    }
    return;
  }
  let i2 = e.$checkboxs?.[0] || e.$input;
  if (!i2 || i2.disabled) return;
  let a2 = Array.isArray(t) ? t?.[0] : t;
  if (null == a2) return;
  let l2 = String(a2).trim().toLowerCase(),
    s2 =
      "yes" === l2 ||
      "true" === l2 ||
      "1" === l2 ||
      "y" === l2 ||
      true === a2 ||
      1 === a2;
  i2.checked !== s2 && (i2.click(), await delay.delay(120));
}
export async function fillRadioGroupFiled(e, t) {
  let r = Array.isArray(t) ? t?.[0] : t;
  if (null == r) return;
  let n = String(r).trim().toLowerCase();
  if (!n) return;
  let i2 = e.label?.trim?.() ?? "",
    a2 = null;
  if (i2) {
    let e2 = document.querySelectorAll('[role="radiogroup"]');
    for (let t2 of e2) {
      let e3 = t2,
        r2 = (e3.getAttribute("aria-label") ?? "").replace(/\s+/g, " ").trim();
      if (r2.toLowerCase() === i2.toLowerCase()) {
        a2 = e3;
        break;
      }
    }
  }
  a2 || (a2 = e.$radioParent || document.body);
  let l2 = Array.from(a2.querySelectorAll('input[type="radio"]')),
    s2 = (e2) => {
      if (!e2.id) return "";
      try {
        let t2 =
            "undefined" != typeof CSS && CSS.escape
              ? CSS.escape(e2.id)
              : e2.id.replace(/["\\]/g, "\\$&"),
          r2 = document.querySelector(`label[for="${t2}"]`);
        return (r2?.textContent ?? "").trim().toLowerCase();
      } catch {
        return "";
      }
    },
    u2 = async (e2) => {
      if (!e2) return false;
      if (e2.checked) return true;
      try {
        let t2 =
          e2.closest('div[jscontroller="SU9Rsf"]') ||
          e2.closest(".VfPpkd-GCYh9b");
        if (t2) em(t2);
        else {
          let t3 = null;
          if (e2.id) {
            let r2 =
              "undefined" != typeof CSS && CSS.escape
                ? CSS.escape(e2.id)
                : e2.id.replace(/["\\]/g, "\\$&");
            t3 = document.querySelector(`label[for="${r2}"]`);
          }
          t3 ? em(t3) : em(e2);
        }
        for (let t3 = 0; t3 < 6; t3++)
          if ((await delay.delay(80), e2.checked)) return true;
        try {
          (e2.checked = true),
            e2.dispatchEvent(new Event("change", { bubbles: true }));
        } catch {}
        return e2.checked;
      } catch (e3) {
        return false;
      }
    },
    c2 = choiceMatch.findExactChoice(l2, n, s2, (e2) => e2.value);
  if (c2?.checked || (await u2(c2))) return;
  let f2 = /^(yes|y|true|1)$/.test(n),
    p2 = /^(no|n|false|0)$/.test(n),
    m2 = /^(not sure|notsure|3)$/.test(n);
  if (f2) {
    let e2 =
      l2.find((e3) => "1" === (e3.value ?? "").trim()) ??
      l2.find((e3) => choiceMatch.isExactChoiceMatch(s2(e3), "yes"));
    if (e2?.checked || (await u2(e2))) return;
  }
  if (p2) {
    let e2 =
      l2.find((e3) => "2" === (e3.value ?? "").trim()) ??
      l2.find((e3) => choiceMatch.isExactChoiceMatch(s2(e3), "no"));
    if (e2?.checked || (await u2(e2))) return;
  }
  if (m2) {
    let e2 =
      l2.find((e3) => "3" === (e3.value ?? "").trim()) ??
      l2.find((e3) => choiceMatch.isExactChoiceMatch(s2(e3), "not sure"));
    if (e2?.checked || (await u2(e2))) return;
  }
}
export async function removeResume() {
  let e =
      document.querySelector('button[jsname="w2GZgc"]') ||
      document.querySelector('button[aria-label="Remove resume"]'),
    t = e;
  if (t && S(t) && !t.disabled)
    try {
      em(t), await delay.delay(500);
    } catch {}
}
function ea() {
  let e =
    document.querySelector(
      'div[data-qa="using-careers-profile-editor"] div[jsname="Fnp2gb"]',
    ) ?? document.querySelector('div[jsname="CNN6Ub"] div[jsname="Fnp2gb"]');
  if (e && S(e)) return e;
  let t = document.querySelectorAll(".PukFX");
  for (let e2 of t) {
    let t2 = e2.querySelector("h2.yEACXb");
    if (t2 && /r[e\u00e9]sum[e\u00e9]/i.test((t2.textContent ?? "").trim()))
      return e2;
  }
  return document.querySelector("h2.yEACXb")?.closest(".PukFX") ?? null;
}
function el(e = null) {
  let t = e ?? ea() ?? document.body,
    r = t.querySelector('input[type="checkbox"][value="autofill"]');
  if (r) return r;
  let n = t.querySelectorAll(`input[type="checkbox"][jsname="${b}"]`);
  for (let e2 of n) {
    let t2 = (e2.closest("div")?.textContent ?? "").toLowerCase();
    if (
      t2.includes("fill out your application") &&
      (t2.includes("r\xE9sum\xE9") || t2.includes("resume"))
    )
      return e2;
  }
  return null;
}
async function es(e, t) {
  try {
    if (!!e.checked === t) return;
    try {
      let r2 =
        e.closest('[jsname="ij0uRe"]') ||
        e.closest("label") ||
        e.parentElement ||
        e;
      if ((em(r2), await delay.delay(120), !!e.checked === t)) return;
    } catch {}
    let r = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "checked",
    )?.set;
    try {
      r ? r.call(e, t) : (e.checked = t);
    } catch {
      e.checked = t;
    }
    let n = e?._valueTracker;
    if (n?.setValue)
      try {
        n.setValue(t ? "true" : "false");
      } catch {}
    e.dispatchEvent(new Event("input", { bubbles: true, composed: true })),
      e.dispatchEvent(new Event("change", { bubbles: true, composed: true })),
      await delay.delay(80);
  } catch {}
}
async function eu(e = null) {
  let t = el(e);
  t && (await es(t, false));
}
let ec = [
  'input[type="file"][accept*=".pdf"]',
  'input[type="file"][accept*="pdf"]',
  'input[type="file"][accept*="docx"]',
  'input[type="file"]',
];
function ed(e) {
  let t = [];
  for (let r of ec) {
    let n = e.querySelectorAll?.(r) ?? [];
    for (let e2 of n) {
      let r2 = e2;
      r2?.type === "file" && t.push(r2);
    }
  }
  return t;
}
function* ef(e) {
  for (let t2 of ed(e)) yield t2;
  let t = e === document ? document.body : e,
    r = t.querySelectorAll?.("*") ?? [];
  for (let e2 of r) {
    let t2 = e2.shadowRoot;
    t2 && (yield* ef(t2));
  }
}
function ep(e = null) {
  let t = e ?? ea() ?? document.body;
  for (let e2 of ef(t)) return e2;
  if (t === document.body) return null;
  for (let e2 of ef(document)) return e2;
  return null;
}
function em(e) {
  H(e), e.focus();
  let t = e.getBoundingClientRect(),
    r = t.left + t.width / 2,
    n = t.top + t.height / 2,
    o2 = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: r,
      clientY: n,
    };
  e.dispatchEvent(new MouseEvent("mousedown", o2)),
    e.dispatchEvent(new MouseEvent("mouseup", o2)),
    e.dispatchEvent(new MouseEvent("click", o2));
}
async function eh(e) {
  let t =
    e.querySelector('button[jsname="tyfiuf"]') ??
    e.querySelector('button[aria-label*="Upload r\xE9sum\xE9"]') ??
    e.querySelector('button[aria-label*="Browse for r\xE9sum\xE9"]');
  if (!t || !S(t)) return;
  let r = t;
  try {
    em(r), await delay.delay(500);
  } catch (e2) {
    try {
      r.click(), await delay.delay(500);
    } catch (e3) {}
  }
}
function eg(e) {
  let t = e.querySelector('li[data-action="nRnv8d"]');
  if (t && S(t)) return t;
  let r = Array.from(e.querySelectorAll('[role="menuitem"]')).find(
    (e2) => "My computer" === (e2.textContent ?? "").trim(),
  );
  return r && S(r) ? r : null;
}
async function eb(e) {
  let t =
      e.querySelector('button[jsname="tyfiuf"]') ??
      e.querySelector('button[aria-label*="Upload r\xE9sum\xE9"]') ??
      e.querySelector('button[aria-label*="Browse for r\xE9sum\xE9"]'),
    r = async () => {
      if (t && S(t))
        try {
          em(t);
        } catch (e2) {
          t.click();
        }
      await delay.delay(400);
    };
  await eh(e), await delay.delay(300);
  let n = eg(e) ?? eg(document);
  if (!n && t) {
    await r();
    for (
      let t2 = 0;
      t2 < 10 && (await delay.delay(150), !(n = eg(e) ?? eg(document)));
      t2++
    );
  }
  if (n)
    try {
      em(n), await delay.delay(400);
    } catch (e2) {
      try {
        n.click(), await delay.delay(400);
      } catch (e3) {}
    }
}
async function ey() {
  let e = await getTargetOrTimeout(
    () => {
      let e2 = document.querySelector('button[jsname="w2GZgc"]');
      if (e2 && S(e2)) return e2;
      let t =
        document.querySelector(".hTZttd") ?? document.querySelector(".MDVGcb");
      if (t && S(t)) return t;
      let r =
        document.querySelector(".IPeaYc") ?? document.querySelector(".RvdIu");
      return r && S(r) ? r : null;
    },
    () => false,
    100,
  );
  e && (await delay.delay(200));
}
export async function uploadResume(e, t, r) {
  await removeResume(), await delay.delay(300), await eu();
  let n = ea();
  if (!n) return false;
  let o2 = null;
  try {
    o2 = await answerMethods.fetchPdfAsBlob(e);
  } catch (e2) {
    return false;
  }
  let s2 = ep(n);
  if (s2)
    return (
      await dom.uploadFiles(s2, o2, t, r, "Resume/CV"),
      (o2 = null),
      await ey(),
      true
    );
  let u2 = n.querySelector('[jsaction*="drop:"]');
  if (u2) {
    H(u2);
    let e2 = { bubbles: true, cancelable: true, dataTransfer: o2 };
    u2.dispatchEvent(new DragEvent("dragenter", e2)),
      u2.dispatchEvent(new DragEvent("dragover", e2)),
      u2.dispatchEvent(new DragEvent("drop", e2)),
      (o2 = null),
      t({ label: "Resume/CV", required: true }),
      r("Resume/CV");
  } else {
    let e2 = "__jr_resume_source",
      a2 = document.createElement("input");
    (a2.type = "file"),
      (a2.id = e2),
      (a2.style.display = "none"),
      (a2.files = o2.files),
      document.body.appendChild(a2),
      (o2 = null);
    try {
      await messaging.sendToBackground({ name: "interceptFileInputClick" });
    } catch (e3) {
      return a2.remove(), false;
    }
    await eb(n), await delay.delay(1e3);
    let l2 = document.getElementById(e2);
    if (l2) return l2.remove(), false;
    t({ label: "Resume/CV", required: true }), r("Resume/CV");
  }
  return await ey(), true;
}
export async function addHigherEducationDegreeSection(e) {
  if (!e || e <= 0) return;
  let t = rules.findHigherEducationSection(document.body);
  if (!t) return;
  let r = async () => (await rules.getHigherEducationRules()).length,
    n = await r(),
    o2 = 15,
    i2 = 25;
  for (let a2 = 0; a2 < o2 && n < e; a2++) {
    let e2 = t.querySelector('button[jsname="nyYKid"]');
    if (!e2 || !S(e2)) break;
    try {
      em(e2);
    } catch (e3) {
      break;
    }
    for (let e3 = 0; e3 < i2; e3++) {
      await delay.delay(120);
      let e4 = await r();
      if (e4 > n) {
        n = e4;
        break;
      }
    }
  }
}
export function getDefaultEmailFromPage(e) {
  let t = e.querySelectorAll('input[aria-label="Email address"]');
  for (let e2 = 0; e2 < t.length; e2++) {
    let r = t[e2];
    if (r && S(r)) {
      let e3 = (r.value ?? "").trim();
      if (e3) return e3;
    }
  }
  return "";
}
function eE(e) {
  let t = e.querySelectorAll("ul.ikelgc");
  for (let e2 = 0; e2 < t.length; e2++) {
    let r = t[e2],
      n = r.closest("div.rbgmcb"),
      o2 =
        n?.querySelector('button[aria-label="ADD ANOTHER EMAIL"]') ||
        n?.querySelector('button[jsname="OE1plb"]');
    if (o2 && S(o2)) return r;
  }
  return null;
}
function ex(e, t) {
  let r = e.querySelectorAll(`input[aria-label="${t}"]`);
  for (let e2 = 0; e2 < r.length; e2++) {
    let t2 = r[e2];
    if (!t2 || t2.disabled || t2.hasAttribute("readonly")) continue;
    let n = t2.getBoundingClientRect();
    if ((n.width > 0 && n.height > 0) || null !== t2.offsetParent) return t2;
  }
  return null;
}
export async function removeExcessAdditionalEmailSlots(e, t) {
  let r = eE(e);
  if (!r) return;
  let n = r.querySelectorAll("li.eaK5Pc").length;
  for (; n > t; ) {
    let e2 = r.querySelectorAll("li.eaK5Pc"),
      t2 = e2[e2.length - 1],
      o2 =
        t2.querySelector('button[jsname="O5Q14"]') ||
        t2.querySelector('button[aria-label="Delete email"]');
    if (!o2) break;
    try {
      em(o2),
        await delay.delay(280),
        (n = r.querySelectorAll("li.eaK5Pc").length);
    } catch (e3) {
      break;
    }
  }
}
export async function removeExcessAdditionalPhoneSlots(e, t) {
  let r = e.querySelector("ul.DGl2rc");
  if (!r) return;
  let n = 1 + t,
    o2 = r.querySelectorAll("li.TFPj6d").length;
  for (; o2 > n; ) {
    let e2 = r.querySelectorAll("li.TFPj6d"),
      t2 = e2[e2.length - 1],
      n2 =
        t2.querySelector('button[aria-label="Delete phone number"]') ||
        t2.querySelector('button[jsname="MSc2Zd"]');
    if (!n2 || !S(n2)) break;
    try {
      em(n2),
        await delay.delay(200),
        (o2 = r.querySelectorAll("li.TFPj6d").length);
    } catch (e3) {
      break;
    }
  }
}
export async function ensureAdditionalEmailSlots(e, t) {
  if (t <= 0) return;
  let r = eE(e);
  if (!r) return;
  let n = r.closest("div.rbgmcb"),
    o2 =
      n?.querySelector('button[aria-label="ADD ANOTHER EMAIL"]') ||
      n?.querySelector('button[jsname="OE1plb"]') ||
      e.querySelector('button[aria-label="ADD ANOTHER EMAIL"]') ||
      e.querySelector('button[jsname="OE1plb"]');
  if (!o2 || !S(o2)) return;
  let i2 = r.querySelectorAll("li.eaK5Pc").length;
  for (; i2 < t; )
    try {
      em(o2),
        await delay.delay(220),
        (i2 = r.querySelectorAll("li.eaK5Pc").length);
    } catch (e2) {
      break;
    }
  r.querySelectorAll("li.eaK5Pc").length;
}
export async function waitForAdditionalEmailInputsReady(e, t, r = 1500) {
  if (!t || t <= 0) return;
  let n = Date.now() + r,
    o2 = (t2) => {
      let r2 = `Additional email address ${t2}`;
      return !!ex(e, r2);
    };
  for (; Date.now() < n; ) {
    let e2 = true;
    for (let r2 = 1; r2 <= t; r2++)
      if (!o2(r2)) {
        e2 = false;
        break;
      }
    if (e2) return;
    await delay.delay(80);
  }
}
export async function retryFillAdditionalEmailsIfNeeded(e, t, r) {
  if (r && !(r <= 0))
    for (let n = 1; n <= r; n++) {
      let r2 = `Additional email address ${n}`,
        o2 = String(t?.[r2] ?? "").trim();
      if (!o2) continue;
      let i2 = ex(e, r2);
      if (!i2) continue;
      let a2 = (i2.value ?? "").trim();
      if (!a2 || a2.toLowerCase() !== o2.toLowerCase())
        try {
          await delay.delay(250), await fillInputTextField(i2, o2, undefined);
        } catch {}
    }
}
export async function ensureAdditionalPhoneSlots(e, t) {
  if (t <= 0) return;
  let r = e.querySelector("ul.DGl2rc");
  if (!r) return;
  let n =
    e.querySelector('button[aria-label="ADD ANOTHER PHONE"]') ||
    e.querySelector('button[jsname="Avlt0d"]');
  if (!n || !S(n)) return;
  let o2 = t + 1,
    i2 = r.querySelectorAll("li.TFPj6d").length;
  for (; i2 < o2; )
    try {
      em(n),
        await delay.delay(180),
        (i2 = r.querySelectorAll("li.TFPj6d").length);
    } catch (e2) {
      break;
    }
}
async function ej(e, t) {
  try {
    let r = e.querySelector(`input[jsname="${b}"][aria-label="${t}"]`);
    if (!r || "" === (r.value ?? "").trim()) return;
    await fillInputTextField(r, "", undefined), await delay.delay(80);
  } catch {}
}
export async function resetFormBaselineBeforeFetch(e) {
  await removeExcessAdditionalEmailSlots(e, 0),
    await delay.delay(150),
    await removeExcessAdditionalPhoneSlots(e, 0),
    await delay.delay(150),
    await eu(e),
    await ej(e, "Middle name"),
    await eP(e);
}
async function eP(e) {
  let t = Array.from(e.querySelectorAll('[role="combobox"][jsname="oYxtQd"]'));
  for (let e2 of t) {
    if (!S(e2) || e2.disabled || "true" === e2.getAttribute("aria-disabled"))
      continue;
    let t2 = e2.closest('[jsname="wSASue"]') || e2.parentElement;
    if (!t2) continue;
    let r = t2.querySelector('[jsname="V67aGc"]'),
      n = (r?.textContent ?? "").replace(/\s+/g, " ").trim().toLowerCase(),
      o2 = t2.querySelector('[jsname="Fb0Bif"]'),
      i2 = (o2?.textContent ?? "").trim();
    if (!i2) continue;
    let a2 =
        e2.closest("li.TFPj6d") ||
        e2.closest("div.rbgmcb") ||
        e2.closest('[jsname="wSASue"]') ||
        t2,
      l2 = Array.from(
        a2.querySelectorAll(`input[jsname="${b}"][aria-label]`),
      ).some((e3) => {
        if (!S(e3)) return false;
        let t3 = (e3.getAttribute("aria-label") ?? "").toLowerCase();
        return t3.includes("phone");
      });
    if (!i2.includes("+") || !l2)
      try {
        H(e2), e2.focus(), e2.click(), await delay.delay(200);
        let t3 = await L(e2, n);
        if (t3) {
          let e3 = t3.querySelector('[role="option"][data-value=""]');
          e3 && (e3.click(), await delay.delay(100));
        }
        await Y(e2), await delay.delay(50);
      } catch {
        await Y(e2);
      }
  }
}
function e_(e) {
  return e.querySelector('ul:has(input[debugid="work-experience-city-input"])');
}
function eL(e) {
  let t = e_(e);
  return t ? Array.from(t.querySelectorAll(":scope > li")) : [];
}
export async function ensureWorkExperienceJobSlots(e, t) {
  if (!t || t <= 0) return;
  let r = () => eL(e).length,
    n = () => {
      let t2 = Array.from(
        e.querySelectorAll(
          'button[jsname="fVz3ib"], button[aria-label="ADD ANOTHER JOB"]',
        ),
      );
      for (let e2 = t2.length - 1; e2 >= 0; e2--) {
        let r2 = t2[e2];
        if (!r2?.isConnected || !S(r2)) continue;
        let n2 = r2.disabled || "true" === r2.getAttribute("aria-disabled");
        if (!n2) return r2;
      }
      return null;
    },
    o2 = r(),
    i2 = Math.max(0, t - o2),
    a2 = n();
  if (!a2 || !S(a2)) return;
  let l2 = 15,
    s2 = 25;
  for (let e2 = 0; e2 < l2 && i2 > 0; e2++) {
    let e3 = n();
    if (!e3) break;
    try {
      em(e3);
    } catch (e4) {
      break;
    }
    for (let e4 = 0; e4 < s2; e4++) {
      await delay.delay(120);
      let e5 = r();
      if (e5 > o2) {
        i2 = Math.max(0, t - (o2 = e5));
        break;
      }
    }
  }
}
export async function removeExcessWorkExperienceSlots(e, t) {
  let r = () => eL(e),
    n = r().length;
  for (; n > t; ) {
    let e2 = r(),
      t2 = e2[e2.length - 1],
      o2 =
        t2?.querySelector('button[jsname="ZDV2Ke"]') ||
        t2?.querySelector('button[aria-label="REMOVE THIS JOB"]');
    if (!o2 || !S(o2)) break;
    try {
      em(o2), await delay.delay(200), (n = r().length);
    } catch (e3) {
      break;
    }
  }
}
export async function syncWorkExperienceSlots(e, t) {
  let r = rules.findWorkExperienceSection(e);
  r &&
    (await removeExcessWorkExperienceSlots(r, t),
    await delay.delay(150),
    t > 0 &&
      (await ensureWorkExperienceJobSlots(r, t), await delay.delay(150)));
}
export async function syncContactAdditionalSlots(e, t, r) {
  await removeExcessAdditionalEmailSlots(e, 0),
    await delay.delay(150),
    await removeExcessAdditionalPhoneSlots(e, 0),
    await delay.delay(150),
    t > 0 && (await ensureAdditionalEmailSlots(e, t), await delay.delay(150)),
    r > 0 && (await ensureAdditionalPhoneSlots(e, r), await delay.delay(150));
}
export async function preFillForm() {
  let e = rules.findMainForm(),
    t = e || document.body,
    r =
      'button[data-mdc-deletable="true"], button[aria-label="REMOVE THIS JOB"], button[jsname="ZDV2Ke"], button[aria-label="REMOVE THIS DEGREE"], button[jsname="iwpXq"]',
    n = 8;
  for (let e2 = 0; e2 < n; e2++) {
    let e3 = Array.from(t.querySelectorAll(r)).filter((e4) => {
      let t2 = e4;
      return (
        S(t2) && !t2.disabled && "true" !== t2.getAttribute("aria-disabled")
      );
    });
    if (0 === e3.length) break;
    for (let t2 = e3.length - 1; t2 >= 0; t2--) {
      let r2 = e3[t2];
      if (r2?.isConnected)
        try {
          em(r2), await delay.delay(30);
        } catch {}
    }
    await delay.delay(60);
  }
  try {
    t.scrollIntoView({ block: "start", inline: "nearest" });
  } catch {}
  await delay.delay(200);
  try {
    let e2 = document.scrollingElement || document.documentElement,
      t2 = e2.scrollHeight - e2.clientHeight;
    for (let r2 = 0; r2 <= 4; r2++)
      (e2.scrollTop = Math.floor((t2 * r2) / 4)), await delay.delay(150);
    for (let r2 = 4; r2 >= 0; r2--)
      (e2.scrollTop = Math.floor((t2 * r2) / 4)), await delay.delay(100);
  } catch {}
  await delay.delay(150);
}
export function clickSubmitButton(e) {
  if (!e) return;
  let t = xpath.getFirstOrderedNodeSafe(e, document);
  t && !t.disabled && t.click();
}
async function eq(e) {
  e && (e.click(), await delay.delay(50)),
    document.body.click(),
    await delay.delay(150);
}
export async function fillFormsRadioGroup(e, t) {
  let r = Array.isArray(t) ? t?.[0] : t;
  if (null == r) return;
  let n = String(r).trim(),
    i2 = e.$radioParent || document.body,
    a2 = Array.from(i2.querySelectorAll('[role="radio"]'));
  if (!n) {
    let e2 = a2.some((e3) => "true" === e3.getAttribute("aria-checked"));
    if (e2) {
      let e3 = i2.querySelector('[jsname="CeL6Qc"]');
      e3 && (H(e3), e3.click(), await delay.delay(120));
    }
    return;
  }
  let l2 = n.toLowerCase(),
    s2 = a2.find(
      (e2) =>
        "true" === e2.getAttribute("aria-checked") &&
        (e2.getAttribute("data-value") || e2.getAttribute("aria-label") || "")
          .trim()
          .toLowerCase() === l2,
    );
  if (s2) return;
  let u2 = async (e2) => {
      if (!e2) return false;
      let t2 = e2.closest("label") || e2;
      return H(t2), t2.click(), await delay.delay(120), true;
    },
    c2 = a2.find((e2) => {
      let t2 = (e2.getAttribute("data-value") || "").trim().toLowerCase(),
        r2 = (e2.getAttribute("aria-label") || "").trim().toLowerCase();
      return t2 === l2 || r2 === l2;
    });
  if (await u2(c2)) return;
  let f2 = a2.find((e2) => {
    let t2 = (e2.getAttribute("data-value") || "").trim().toLowerCase(),
      r2 = (e2.getAttribute("aria-label") || "").trim().toLowerCase();
    return choiceMatch.isExactChoiceMatch(t2, l2) ||
      choiceMatch.isExactChoiceMatch(r2, l2);
  });
  if (await u2(f2)) return;
  let p2 = /^(yes|y|true|1)$/.test(l2),
    m2 = /^(no|n|false|0)$/.test(l2);
  if (p2) {
    let e2 = a2.find(
      (e3) =>
        "yes" === (e3.getAttribute("data-value") || "").trim().toLowerCase() ||
        "yes" === (e3.getAttribute("aria-label") || "").trim().toLowerCase(),
    );
    if (await u2(e2)) return;
  }
  if (m2) {
    let e2 = a2.find(
      (e3) =>
        "no" === (e3.getAttribute("data-value") || "").trim().toLowerCase() ||
        "no" === (e3.getAttribute("aria-label") || "").trim().toLowerCase(),
    );
    if (await u2(e2)) return;
  }
  await eq(i2);
}
export async function fillFormsCheckbox(e, t) {
  let r =
      (e.$checkboxs &&
        e.$checkboxs[0]?.closest('[role="group"], [role="list"]')) ||
      document.body,
    n = Array.from(r.querySelectorAll('[role="checkbox"]'));
  if (0 === n.length) return;
  let o2 = new Set(),
    i2 = Array.isArray(t) ? t : null == t ? [] : [t];
  for (let e2 of i2) {
    let t2 = String(e2 ?? "").trim();
    t2 && o2.add(t2.toLowerCase());
  }
  for (let e2 of n) {
    let t2 = (
        e2.getAttribute("data-value") ||
        e2.getAttribute("aria-label") ||
        ""
      )
        .trim()
        .toLowerCase(),
      r2 = "true" === e2.getAttribute("aria-checked"),
      n2 = o2.has(t2);
    if (n2 && !r2) {
      let t3 = e2.closest("label") || e2;
      H(t3), t3.click(), await delay.delay(100);
    } else if (!n2 && r2) {
      let t3 = e2.closest("label") || e2;
      H(t3), t3.click(), await delay.delay(100);
    }
  }
  await eq(r);
}
export async function fillFormsSelect(e, t) {
  let r = Array.isArray(t) ? t?.[0] : t;
  if (null == r) return;
  let n = String(r).trim();
  if (!n) return;
  let i2 = n.toLowerCase(),
    a2 = e.$input;
  if (!a2) return;
  H(a2), a2.click(), await delay.delay(300);
  let l2 = Array.from(a2.querySelectorAll('[role="option"], [data-value]')),
    s2 =
      l2.find((e2) => {
        let t2 = (e2.getAttribute("data-value") || "").trim().toLowerCase(),
          r2 = (e2.textContent || "").trim().toLowerCase();
        return t2 === i2 || r2 === i2;
      }) ||
      l2.find((e2) => {
        let t2 = (e2.getAttribute("data-value") || "").trim().toLowerCase(),
          r2 = (e2.textContent || "").trim().toLowerCase();
        return choiceMatch.isExactChoiceMatch(t2, i2) ||
          choiceMatch.isExactChoiceMatch(r2, i2);
      });
  s2 && (s2.click(), await delay.delay(150)), await eq(a2);
}
function ez() {
  let e = document.querySelectorAll("div.picker-dialog");
  for (let t of e) {
    let e2 = t;
    if ("none" === e2.style.display) continue;
    try {
      let t2 = e2.querySelector("iframe"),
        r2 = t2?.contentDocument?.querySelector(
          'button[jsname="IYtByb"], button[aria-label*="\u5173\u95ED"]',
        );
      if (r2) {
        r2.click();
        return;
      }
    } catch {}
    e2.style.display = "none";
    let r = e2.previousElementSibling;
    r?.classList.contains("XKSfm-Sx9Kwc-xJ5Hnf") && (r.style.display = "none");
    let n = r?.previousElementSibling;
    n?.tagName === "IFRAME" && (n.style.display = "none");
  }
}
export async function uploadFormsResume(e, t, r) {
  let n;
  let o2 = document.querySelectorAll('div[jsname="WsjYwc"], div.geS5n'),
    l2 = null;
  for (let e2 of o2)
    if (e2.querySelector("div.bj084d")) {
      l2 = e2;
      break;
    }
  if (!l2) return false;
  let s2 = l2.querySelector('div[role="list"][jsname="kTlJSc"]');
  if (s2 && s2.children.length > 0) {
    let e2 = Array.from(
      s2.querySelectorAll('div[role="button"][jsname="f8vM4b"]'),
    );
    for (let t2 of e2) H(t2), t2.click(), await delay.delay(300);
    for (let e3 = 0; e3 < 20 && 0 !== s2.children.length; e3++)
      await delay.delay(300);
    s2.children.length;
  }
  try {
    n = await answerMethods.fetchPdfAsBlob(e);
  } catch (e2) {
    return false;
  }
  let u2 =
    l2.querySelector('div[role="button"][jsname="mWZCyf"]') ??
    l2.querySelector('div[role="button"]');
  if (!u2) return false;
  H(u2);
  let c2 = u2.getBoundingClientRect(),
    f2 = c2.left + c2.width / 2,
    p2 = c2.top + c2.height / 2,
    m2 = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: f2,
      clientY: p2,
    };
  u2.dispatchEvent(new MouseEvent("mousedown", m2)),
    u2.dispatchEvent(new MouseEvent("mouseup", m2)),
    u2.dispatchEvent(new MouseEvent("click", m2));
  let h2 = null;
  for (let e2 = 0; e2 < 20; e2++) {
    await delay.delay(500);
    let e3 = document.querySelectorAll("div.picker-dialog");
    for (let t2 of e3) {
      let e4 = t2;
      if (
        "none" === e4.style.display ||
        "true" === e4.getAttribute("aria-hidden")
      )
        continue;
      let r2 = e4.querySelector('iframe[src*="docs.google.com/picker"]');
      if (r2) {
        h2 = r2;
        break;
      }
    }
    if (h2) break;
  }
  if (!h2) return false;
  let g2 = null,
    b2 = null;
  for (let e2 = 0; e2 < 30; e2++) {
    await delay.delay(500);
    try {
      if (
        (g2 = h2.contentDocument) &&
        (b2 = g2.querySelector('input[type="file"]'))
      )
        break;
    } catch (e3) {
      break;
    }
  }
  if (!b2 || !g2) return ez(), false;
  try {
    (b2.files = n.files),
      b2.dispatchEvent(new Event("change", { bubbles: true }));
  } catch {}
  let y2 = false;
  for (let e2 = 0; e2 < 10; e2++) {
    await delay.delay(500);
    let e3 = l2.querySelector('div[role="list"][jsname="kTlJSc"]');
    if (e3 && e3.children.length > 0) {
      y2 = true;
      break;
    }
  }
  if (!y2) {
    let e2 = "__jr_resume_source";
    try {
      g2.getElementById(e2)?.remove();
      let t3 = g2.createElement("input");
      (t3.type = "file"),
        (t3.id = e2),
        (t3.style.display = "none"),
        (t3.files = n.files),
        g2.body.appendChild(t3);
    } catch {}
    try {
      await messaging.sendToBackground({
        name: "interceptFileInputClick",
        body: { allFrames: true },
      });
    } catch {}
    await delay.delay(300);
    let t2 =
      g2.querySelector('button[jsname="PX1Pzd"]') ??
      g2.querySelector(".EeNpqb button");
    t2 && t2.click();
    for (let e3 = 0; e3 < 60; e3++) {
      await delay.delay(500);
      let e4 = l2.querySelector('div[role="list"][jsname="kTlJSc"]');
      if (e4 && e4.children.length > 0) {
        y2 = true;
        break;
      }
    }
    try {
      g2.getElementById(e2)?.remove();
    } catch {}
  }
  return ez(), t({ label: "Resume/CV", required: true }), r("Resume/CV"), true;
}
export async function sendAdvanceTrackingEvent(e, t) {
  let r = await rules.extractRules({
      eagerSelectOptions: false,
      silentLog: true,
    }),
    n = await rules.getFormSnapshot(r),
    o2 = await rules.getStructuredEducationSnapshot(false),
    i2 = rules.getStructuredWorkExperienceSnapshot(),
    a2 = rules.getCurrentStepFingerprint(),
    l2 = e.getFingerprintKey(a2),
    u2 = e.getAutofillSnapshot(l2, a2, n),
    c2 = e.getAutofillStructured(l2, a2, { education: o2, employment: i2 }),
    d2 = {};
  Array.isArray(c2.education) &&
    c2.education.length > 0 &&
    (d2.education = c2.education),
    Array.isArray(c2.employment) &&
      c2.employment.length > 0 &&
      (d2.employment = c2.employment);
  let f2 = {};
  Array.isArray(o2) && o2.length > 0 && (f2.education = o2),
    Array.isArray(i2) && i2.length > 0 && (f2.employment = i2),
    autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
      formUrl: urlStore.useUrlStore.getState().currentTabUrl,
      autofillSnapshot: u2,
      submitSnapshot: n,
      additionalAutofillData: d2,
      additionalSubmitData: f2,
      source: t(),
    }),
    await collapseOpenComboboxes();
}
export function sendFormsAdvanceSnapshot(e, t) {
  let r = rules.getGoogleFormsSnapshot(),
    n = rules.getFormsPageFingerprint(),
    o2 = e.getFingerprintKey(n),
    i2 = e.getAutofillSnapshot(o2, n, r);
  autofillAnswerPairTracking.sendAutofillAnswerPairEvent({
    formUrl: urlStore.useUrlStore.getState().currentTabUrl,
    autofillSnapshot: i2,
    submitSnapshot: r,
    source: t(),
  });
}
