/**
 * Parcel module id: dcxvW
 * Resolved path: contents/sites/apple/operations.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/crawler/utils/checkbox -> 5MP6u  =>  _tilde_contents/crawler/utils/checkbox.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  _tilde_contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  _tilde_contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  _tilde_contents/methods/observer.js
 *   ~contents/sites/apple/rules -> bPSBK  =>  _tilde_contents/sites/apple/rules.js
 *   ~contents/sites/apple/typeahead -> lI3rh  =>  _tilde_contents/sites/apple/typeahead.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  _tilde_contents/sites/autofill-answer-pair-tracking.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 *   ~store/url -> b53L3  =>  _tilde_store/url.js
 *   ~utils/delay -> am614  =>  _tilde_utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getAppleCurrentStepTitle", () => D), n.export(r,
    "isAppleCoverLetterStep", () => P), n.export(r, "getAppleCoverLetterUploadDom", () => R), n
  .export(r, "getAppleCoverLetterStatus", () => U), n.export(r, "fillInputTextField", () => K), n
  .export(r, "fillListbox", () => X), n.export(r, "fillSelectField", () => J), n.export(r,
    "fillCustomDropdown", () => Q), n.export(r, "fillRadioGroup", () => Z), n.export(r,
    "fillAgreementCheckbox", () => ee), n.export(r, "openDisabilityModal", () => et), n.export(r,
    "submitDisabilityModal", () => er), n.export(r, "selectManualFillOption", () => en), n.export(r,
    "uploadResume", () => eo), n.export(r, "uploadCoverLetter", () => ei), n.export(r,
    "fillSplitDate", () => ea), n.export(r, "preclickAddButtons", () => eu), n.export(r,
    "addEducationSection", () => em), n.export(r, "addEmploymentSection", () => eh), n.export(r,
    "fillSkills", () => eg), n.export(r, "waitPageClean", () => eb), n.export(r, "blurPage", () =>
    ey), n.export(r, "submitHandler", () => ev);
var o = e("~contents/methods/choice-match"),
  i = e("~utils/delay"),
  a = e("~contents/methods/dom"),
  l = e("~contents/crawler/utils/checkbox"),
  s = e("~core/xpath"),
  u = e("~contents/methods/answer"),
  c = e("~contents/methods/observer"),
  d = e("~contents/sites/apple/rules"),
  f = e("~contents/sites/autofill-answer-pair-tracking"),
  p = e("~contents/sites/apple/typeahead"),
  m = e("~store/url");

function h(e) {
  return e.trim().replace(/\*/g, "").replace(/\(optional\)/gi, "").replace(/\s+/g, " ").trim()
    .toLowerCase()
}

function g(e, t = "input") {
  if (!e) return null;
  let r = h(e),
    n = document.querySelectorAll("span.form-textbox-label");
  for (let e of Array.from(n)) {
    let n = e.textContent || "",
      o = h(n);
    if (o === r) {
      let r = e.parentElement;
      if (!r) continue;
      if ("input" === t) {
        let e = r.querySelector("input, textarea");
        if (e) return e
      } else if ("select" === t) {
        let e = r.querySelector("select");
        if (e) return e
      } else if ("container" === t) return r
    }
  }
  return console.warn("[Apple] Could not find element by label:", e), null
}

function b(e, t, r = "input") {
  if (document.contains(e)) return e;
  console.warn("[Apple] Element no longer in DOM, attempting to refind by label:", t);
  let n = g(t, r);
  return n || null
}

function y(e) {
  let t = {
    bubbles: !0,
    cancelable: !0,
    view: window
  };
  e.dispatchEvent(new PointerEvent("pointerover", t)), e.dispatchEvent(new MouseEvent("mouseover",
      t)), e.dispatchEvent(new PointerEvent("pointerenter", t)), e.dispatchEvent(new MouseEvent(
      "mouseenter", t)), e.dispatchEvent(new PointerEvent("pointerdown", t)), e.dispatchEvent(
      new MouseEvent("mousedown", t)), e.dispatchEvent(new PointerEvent("pointerup", t)), e
    .dispatchEvent(new MouseEvent("mouseup", t)), e.dispatchEvent(new MouseEvent("click", t))
}
let v = "attachfile-resume-supportfile",
  w = "file-resume-supportfile",
  S = "parsedmodal-review-filesAndLinks-title",
  E = "Edit Additional Files & Links",
  x = "resume-supportfile-description",
  C = 'li[role="listitem"]',
  A = "resume-supportfile-text-",
  k = "resume-supportfile-category-",
  T = "resume-supportfile-remove-",
  F = "supportingFileCategory-COVLT",
  I = "profile information";

function j(e) {
  return e?.trim().toLowerCase() || ""
}

function D() {
  return document.querySelector(
      'li.apply-progress-step[aria-current="step"] .apply-progress-label span')?.textContent?.trim()
    .toLowerCase() || ""
}

function P() {
  return D() === I
}

function _() {
  let e = document.getElementById(S),
    t = document.getElementById(w);
  return e?.closest(".row.pt-30") || t?.closest('[role="group"]') || document.querySelector(
    `[role="group"][aria-label="${E}"]`) || document.getElementById(x)?.closest('[role="group"]')
}

function L(e) {
  let t = e.querySelector(`input[id^="${A}"]`),
    r = e.querySelector(`select[id^="${k}"]`),
    n = e.querySelector(`button[id^="${T}"]`);
  return {
    row: e,
    fileNameInput: t,
    categorySelect: r,
    deleteButton: n,
    fileName: t?.value?.trim() || "",
    categoryValue: r?.value?.trim() || "",
    hasCoverLetterOption: !!r?.querySelector(`option[value="${F}"]`)
  }
}

function R() {
  let e = _(),
    t = e?.querySelector('ul[role="list"]'),
    r = Array.from(t?.querySelectorAll(C) || []).map(e => L(e)).filter(e => !!e.fileNameInput || !!e
      .categorySelect || !!e.deleteButton);
  return {
    section: e,
    description: document.getElementById(x),
    input: document.getElementById(w)?.querySelector(`input[type="file"]#${v}`) || document
      .getElementById(v),
    uploadedList: t,
    rows: r
  }
}

function O(e) {
  let t = e.description?.textContent?.toLowerCase() || "",
    r = document.getElementById(S),
    n = document.getElementById(w);
  return !!r && !!n && !!e.section && !!e.input && t.includes("cover letter")
}

function M(e) {
  return !!(e?.fileNameInput && e?.deleteButton && e?.categorySelect && e.fileName)
}

function N(e, t = {}) {
  let r = j(t.expectedFileName),
    n = [...e.rows].reverse();
  return n.find(e => {
    if (!M(e) || !e.hasCoverLetterOption) return !1;
    let n = !r || j(e.fileName) === r;
    return !!n && (e.categoryValue === F || !!t.allowUncategorizedMatch)
  }) || null
}

function $(e) {
  return [...e.rows].reverse().find(e => M(e)) || null
}

function B(e, t) {
  let r = j(t);
  return [...e.rows].reverse().find(e => !!M(e) && !!e.hasCoverLetterOption && (e.categoryValue ===
    F || j(e.fileName) === r)) || null
}

function q(e) {
  let t = R(),
    r = N(t, {
      expectedFileName: e
    });
  return !!(r && M(r) && r.categoryValue === F && (!e || j(r.fileName) === j(e)))
}

function U() {
  if (!P()) return "";
  let e = R();
  if (!O(e)) return "";
  if (0 === e.rows.length) return "required";
  let t = $(e);
  return t?.hasCoverLetterOption, "required"
}
async function H(e) {
  let t = N(R(), {
    expectedFileName: e,
    allowUncategorizedMatch: !0
  });
  return !!t?.categorySelect && !!t.hasCoverLetterOption && (t.categorySelect.focus(), t
    .categorySelect.value = F, t.categorySelect.dispatchEvent(new Event("input", {
      bubbles: !0
    })), t.categorySelect.dispatchEvent(new Event("change", {
      bubbles: !0
    })), t.categorySelect.dispatchEvent(new Event("blur", {
      bubbles: !0
    })), await (0, c.waitForCondition)(() => q(e), {
      timeout: 5e3,
      interval: 100,
      observeTarget: R().section || document.body
    }))
}
async function Y(e) {
  let t = 0;
  for (; t < 3;) {
    let r = B(R(), e);
    if (!r?.deleteButton) return !0;
    r.deleteButton.click();
    let n = await (0, c.waitForCondition)(() => !B(R(), e), {
      timeout: 5e3,
      interval: 100,
      observeTarget: R().section || document.body
    });
    if (n) return !0;
    t += 1
  }
  return !1
}

function z(e, t) {
  let r = e instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window
    .HTMLInputElement.prototype,
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  if (n) {
    n.call(e, t);
    return
  }
  e.value = t
}

function V(e, t, r) {
  let n = t.length > r.length ? t.slice(r.length) : null,
    o = t.length < r.length ? r.slice(t.length) : null,
    i = n ?? o ?? "",
    a = n ? "insertText" : o ? "deleteContentBackward" : "insertReplacementText";
  try {
    e.dispatchEvent(new InputEvent("beforeinput", {
      data: i,
      inputType: a,
      bubbles: !0,
      cancelable: !0
    }))
  } catch {}
  try {
    e.dispatchEvent(new InputEvent("input", {
      data: i,
      inputType: a,
      bubbles: !0
    }))
  } catch {
    e.dispatchEvent(new Event("input", {
      bubbles: !0
    }))
  }
}
async function W(e, t) {
  let r = 20,
    n = 35,
    o = (0, p.buildTypeaheadInputSteps)(e.value || "", t);
  for (let t of o) {
    let o = e.value || "",
      a = t.length > o.length ? t.slice(-1) : "Backspace";
    e.dispatchEvent(new KeyboardEvent("keydown", {
      key: a,
      bubbles: !0,
      cancelable: !0
    })), z(e, t), V(e, t, o), e.dispatchEvent(new KeyboardEvent("keyup", {
      key: a,
      bubbles: !0,
      cancelable: !0
    })), await (0, i.delay)("" === t ? r : n)
  }
  e.dispatchEvent(new Event("change", {
    bubbles: !0
  }))
}
async function G(e) {
  e.dispatchEvent(new KeyboardEvent("keydown", {
    key: "Enter",
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new KeyboardEvent("keypress", {
    key: "Enter",
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new KeyboardEvent("keyup", {
    key: "Enter",
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), e.dispatchEvent(new FocusEvent("blur", {
    bubbles: !0
  })), await ey(), await (0, i.delay)(100)
}
async function K(e, t, r) {
  if (!e || !t) return;
  let n = e;
  if (r) {
    let t = b(e, r, "input");
    if (!t) return;
    n = t
  }
  n.focus(), await (0, i.delay)(50), z(n, t), n.dispatchEvent(new Event("input", {
    bubbles: !0
  })), n.dispatchEvent(new Event("change", {
    bubbles: !0
  })), n.dispatchEvent(new Event("blur", {
    bubbles: !0
  })), await ey(), await (0, i.delay)(50)
}
async function X(e, t, r) {
  if (!e || !t) return;
  let n = e;
  if (r) {
    let t = b(e, r, "input");
    if (!t) return;
    n = t
  }
  let a = e => e.replace(/\s+/g, " ").trim().toLowerCase(),
    l = () => n.closest(".typeahead-container") || n.parentElement?.closest(
      ".typeahead-container"),
    s = () => {
      let e = l(),
        t = n.getAttribute("aria-controls") || n.getAttribute("aria-owns"),
        r = t ? document.getElementById(t) : null,
        o = r || e?.querySelector('[role="listbox"], .typeahead-list') || document.querySelector(
          'div.typeahead-list, [role="listbox"]');
      return Array.from(o?.querySelectorAll(
        'button[role="option"], button.typeahead-button[role="option"]') || [])
    },
    u = async () => {
      let e = Date.now(),
        t = 5e3;
      for (; Date.now() - e < t;) {
        let e = s().filter(e => null !== e.offsetParent);
        if (e.length > 0) return e;
        await (0, i.delay)(100)
      }
      return []
    }, c = async e => {
      e.scrollIntoView({
        block: "nearest"
      }), n.dispatchEvent(new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: !0,
        cancelable: !0
      })), await (0, i.delay)(50), e.focus(), e.dispatchEvent(new FocusEvent("focus", {
        bubbles: !0
      })), y(e), e.click(), e.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: !0,
        cancelable: !0
      })), e.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Enter",
        bubbles: !0,
        cancelable: !0
      })), n.dispatchEvent(new Event("input", {
        bubbles: !0
      })), n.dispatchEvent(new Event("change", {
        bubbles: !0
      })), n.dispatchEvent(new FocusEvent("blur", {
        bubbles: !0
      })), await ey()
    };
  n.scrollIntoView({
    behavior: "smooth",
    block: "center"
  }), y(n), n.focus(), n.dispatchEvent(new FocusEvent("focus", {
    bubbles: !0
  })), await (0, i.delay)(100), await W(n, t);
  let d = await u();
  if (0 === d.length) {
    await G(n);
    return
  }
  let f = a(t),
    p = d.find(e => {
      let t = a(e.textContent || "");
      return t === f
    }),
    m = p || d.find(e => {
      let t = a(e.textContent || "");
      return (0, o.isExactChoiceMatch)(t, f)
    }),
    h = m ?? null;
  h ? (await c(h), await (0, i.delay)(300)) : await G(n)
}
async function J(e, t, r) {
  if (!e || !t || 0 === t.length) return;
  let n = e;
  if (r) {
    let t = b(e, r, "select");
    if (!t) return;
    n = t
  }
  let o = t[0],
    a = Array.from(n.options),
    l = a.find(e => e.text.trim().toLowerCase() === o.toLowerCase() || e.value.toLowerCase() === o
      .toLowerCase());
  l && (n.value = l.value, n.dispatchEvent(new Event("change", {
    bubbles: !0
  })), await (0, i.delay)(100))
}
async function Q(e, t, r) {
  if (!e || !t || 0 === t.length) return;
  let n = e;
  if (r) {
    let t = b(e, r, "container");
    if (!t) return;
    n = t
  }
  let o = t[0],
    a = n.querySelector("button");
  a && (a.click(), await (0, i.delay)(200));
  let l = Array.from(n.querySelectorAll("ul li input")),
    s = l.find(e => e.value.toLowerCase() === o.toLowerCase());
  s ? (s.click(), await (0, i.delay)(100)) : a && (a.click(), await (0, i.delay)(100))
}
async function Z(e, t) {
  if (!e.$checkboxs || !t || 0 === t.length) return;
  let r = e => e.replace(/\s+/g, " ").trim().toLowerCase();
  r(t[0]);
  let n = (e.options || []).map((e, t) => ({
      label: e,
      index: t
    })),
    a = o.findExactChoice(n, t[0], e => e.label)?.index;
  if (void 0 !== a && -1 !== a && e.$checkboxs[a]) {
    let t = e.$checkboxs[a];
    if (!t.checked) {
      let r = e.options?.[a] ? e.$label?.querySelector(`label[for="${t.id}"]`) : null;
      t.focus(), t.dispatchEvent(new Event("focus", {
        bubbles: !0
      })), t.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0,
        view: window
      })), t.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0,
        view: window
      })), t.click(), t.dispatchEvent(new Event("input", {
        bubbles: !0
      })), t.dispatchEvent(new Event("change", {
        bubbles: !0
      })), r && r.click(), await (0, i.delay)(100)
    }
  }
}
async function ee() {
  let e = (0, s.getFirstOrderedNode)(
    './/input[@type="checkbox" and @id="selfdisclosure-active-consent-checkbox-consent"]');
  e && await (0, l.fillCheckbox)(e, !0)
}
async function et() {
  let e = document.getElementById("selfdisclosure-disabilitymodal-modal");
  if (e) return e;
  let t = Array.from(document.querySelectorAll("button")).find(e => e.textContent?.trim() ===
    "Update Form");
  if (!t) return null;
  t.scrollIntoView({
    behavior: "smooth",
    block: "center"
  }), t.click();
  let r = 1e4,
    n = Date.now();
  for (; Date.now() - n < r;) {
    let e = document.getElementById("selfdisclosure-disabilitymodal-modal");
    if (e) return await (0, i.delay)(500), e;
    await (0, i.delay)(100)
  }
  return null
}
async function er() {
  let e = document.getElementById("selfdisclosure-disability-modal-submit-button");
  if (!e) return !1;
  e.scrollIntoView({
    behavior: "smooth",
    block: "center"
  }), e.click();
  let t = 1e4,
    r = Date.now();
  for (; Date.now() - r < t;) {
    if (!document.getElementById("selfdisclosure-disabilitymodal-modal")) return await (0, i
      .delay)(300), !0;
    await (0, i.delay)(100)
  }
  return !1
}
async function en() {
  let e = document.getElementById("manualOption");
  if (!e) return;
  e.checked || (e.click(), e.dispatchEvent(new Event("change", {
    bubbles: !0
  })), await (0, i.delay)(300)), await (0, i.delay)(200);
  let t = document.getElementById("apply-step-continue-button");
  t && (t.click(), await (0, i.delay)(500))
}
async function eo(e, t, r) {
  let n = document.getElementById("resume-remove");
  n && (n.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, i.delay)(50), n.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), n.click(), await (0, i.delay)(500));
  let o = document.getElementById("attachfile-button-resume-fileupload");
  if (!o) return;
  let l = document.querySelector(
    'input[type="file"][id*="resume"], input[type="file"][name*="resume"]');
  if (l) try {
    await (0, a.uploadFiles)(l, await (0, u.fetchPdfAsBlob)(e), t, r, "Resume/CV")
  } catch (e) {
    console.error("[Apple] Resume upload failed:", e)
  }
}
async function ei(e, t, r) {
  if (!P()) return console.warn(
    "[Apple] Cover letter upload skipped: current step is not Profile Information"), !1;
  let n = R();
  if (!O(n) || !n.input) return console.warn(
    "[Apple] Cover letter upload aborted: supportfile slot is not ready"), !1;
  let o = `${e.coverLetterName}.pdf`,
    i = await Y(o);
  if (!i) return console.warn("[Apple] Existing cover letter row could not be removed"), !1;
  await (0, a.uploadFiles)(n.input, await (0, u.fetchCoverLetterPdfAsBlob)(e), t, r,
    "Cover Letter");
  let l = await (0, c.waitForCondition)(() => {
    let e = R(),
      t = N(e, {
        expectedFileName: o,
        allowUncategorizedMatch: !0
      });
    return !!(t && M(t) && j(t.fileName) === j(o))
  }, {
    timeout: 8e3,
    interval: 100,
    observeTarget: n.section || document.body
  });
  if (!l) return console.warn(
    "[Apple] Cover letter upload did not produce a supportfile success row"), !1;
  let s = await H(o);
  if (!s) return console.warn("[Apple] Cover letter category was not set to Cover Letter", {
    expectedFileName: o,
    dom: R()
  }), !1;
  let d = await (0, c.waitForCondition)(() => q(o), {
    timeout: 5e3,
    interval: 100,
    observeTarget: n.section || document.body
  });
  return d || console.warn("[Apple] Cover letter upload did not reach verified success state", {
    expectedFileName: o,
    dom: R()
  }), d
}
async function ea(e, t) {
  if (!t) return;
  let r = new Date(t);
  if (isNaN(r.getTime())) return;
  let n = (r.getMonth() + 1).toString().padStart(2, "0"),
    o = r.getFullYear().toString(),
    i = e.$input,
    a = i.closest("fieldset");
  if (!a) return;
  let l = a.querySelector('select[name="Month"]'),
    s = a.querySelector('select[name="Year"]');
  l && await J(l, [n]), s && await J(s, [o])
}

function el() {
  return document.getElementById("parsedmodal-review-education-title")
}

function es() {
  return document.getElementById("parsedmodal-review-employments-title")
}
async function eu() {
  let e = el();
  e && (await ec(), 0 === ef() && (await em(), await (0, i.delay)(500)));
  let t = es();
  t && (await ed(), 0 === ep() && (await eh(), await (0, i.delay)(500)))
}
async function ec() {
  let e = document.querySelectorAll('[id*="remove-education"]');
  for (let t of Array.from(e)) t.click(), await (0, i.delay)(300)
}
async function ed() {
  let e = document.querySelectorAll('[id*="remove-employment"]');
  for (let t of Array.from(e)) t.click(), await (0, i.delay)(300)
}

function ef() {
  let e = el();
  return e ? e.querySelectorAll('[id^="parsedmodal-edu-form-"]').length : 0
}

function ep() {
  let e = es();
  if (!e) return 0;
  let t = e.querySelector('[role="group"][aria-label="Edit Employment Summary"]');
  if (!t) return 0;
  let r = t.querySelectorAll("fieldset"),
    n = 0;
  return r.forEach(e => {
    let t = e.querySelector("legend");
    t && t.textContent?.includes("Edit Employment") && n++
  }), n
}
async function em() {
  let e = document.querySelectorAll('[id*="add-education"]'),
    t = e[e.length - 1];
  t && (t.click(), await (0, i.delay)(500))
}
async function eh() {
  let e = document.querySelectorAll('[id*="add-employment"]'),
    t = e[e.length - 1];
  t && (t.click(), await (0, i.delay)(500))
}
async function eg(e) {
  let t = (Array.isArray(e) ? e : [e]).flatMap(e => String(e ?? "").split(/[,\n]/)).map(e => e
    .trim()).filter(Boolean);
  if (0 === t.length) return;
  let r = "apply-skills-typeahead-suggestion-textbox",
    n = document.getElementById(r);
  if (!n) return;
  for (let e of t) e && (n.click(), n.focus(), await (0, i.delay)(200), z(n, e), n.dispatchEvent(
    new Event("input", {
      bubbles: !0
    })), await (0, i.delay)(400), n.dispatchEvent(new KeyboardEvent("keydown", {
    key: "Enter",
    bubbles: !0,
    cancelable: !0
  })), n.dispatchEvent(new KeyboardEvent("keypress", {
    key: "Enter",
    bubbles: !0,
    cancelable: !0
  })), n.dispatchEvent(new KeyboardEvent("keyup", {
    key: "Enter",
    bubbles: !0,
    cancelable: !0
  })), n.dispatchEvent(new Event("change", {
    bubbles: !0
  })), await (0, i.delay)(500), n.value && (z(n, ""), n.dispatchEvent(new Event("input", {
    bubbles: !0
  })), await (0, i.delay)(200)));
  let o = (0, s.getFirstOrderedNode)('.//button[@id="rate-skills-button"]');
  o && (o.click(), await (0, i.delay)(500))
}
async function eb() {
  let e = 1e4,
    t = Date.now();
  for (; Date.now() - t < e;) {
    if (document.getElementById("apply-profileInformation-form")) {
      await (0, i.delay)(500);
      return
    }
    await (0, i.delay)(200)
  }
}
async function ey() {
  let e = document.getElementById("apply-profileInformation-form") || document.body;
  e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), await (0, i.delay)(50), e.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0,
    view: window
  })), e.click()
}
async function ev(e) {
  let t = (0, d.getFormSnapshot)(),
    {
      education: r,
      employment: n,
      ...o
    } = t,
    {
      education: i,
      employment: a,
      ...l
    } = e;
  (0, f.sendAutofillAnswerPairEvent)({
    formUrl: (0, m.useUrlStore).getState().currentTabUrl,
    autofillSnapshot: l,
    submitSnapshot: o,
    additionalAutofillData: {
      education: i,
      employment: a
    },
    additionalSubmitData: {
      education: r,
      employment: n
    },
    source: "apple"
  })
}

