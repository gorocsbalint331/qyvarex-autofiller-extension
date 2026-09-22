/**
 * Parcel module id: i18hS
 * Resolved path: src/contents/sites/recruiterflow/operations.js
 * Dependencies:
 *   ../../methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ./phone-country-code -> gLFZj  =>  src/contents/sites/recruiterflow/phone-country-code.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRecruiterflowCoverLetterUploadDom", () => b), n.export(r,
    "getRecruiterflowCoverLetterStatus", () => v), n.export(r, "fillInputTextField", () => w), n
  .export(r, "fillSelectField", () => S), n.export(r, "fillCustomSelect", () => E), n.export(r,
    "fillReactSelect", () => k), n.export(r, "fillDatePicker", () => T), n.export(r,
    "fillPhoneNumber", () => P), n.export(r, "fillYesNoButtons", () => _), n.export(r,
    "fillCheckboxField", () => L), n.export(r, "uploadResume", () => R), n.export(r,
    "uploadCoverLetter", () => O), n.export(r, "expandForm", () => M), n.export(r,
    "addEducationSection", () => U), n.export(r, "addEmploymentSection", () => H), n.export(r,
    "removeEducationSection", () => Y), n.export(r, "removeEmploymentSection", () => z), n.export(r,
    "blurPage", () => V), n.export(r, "waitPageClean", () => W), n.export(r, "expandAllSections",
  () => G), n.export(r, "scrollToElement", () => K), n.export(r, "submitHandler", () => X), n
  .export(r, "clickSubmitButton", () => J), n.export(r, "validateRequiredFields", () => Q), n
  .export(r, "debugFormState", () => Z);
var o = e("../../methods/choice-match"),
  i = e("~contents/methods/answer"),
  a = e("~contents/methods/dom"),
  l = e("~contents/methods/observer"),
  s = e("~core/phone-country-code"),
  u = e("~core/xpath"),
  c = e("~utils/delay"),
  d = e("~utils/getTargetOrTimeout"),
  f = n.interopDefault(d),
  p = e("./phone-country-code");

function m(e) {
  return String(e ?? "").replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase()
}

function h(e) {
  return "cover letter" === m(e)
}

function g(e) {
  let t = e.querySelector("p.form-label") || e.querySelector(".form-label");
  return t?.textContent || ""
}

function b() {
  let e = Array.from(document.querySelectorAll(".form-dnd-container")),
    t = e.find(e => h(g(e))) ?? null;
  if (!t) return {
    container: null,
    input: null,
    uploadedItem: null
  };
  let r = t.querySelector(".file-list-item") ?? null;
  return {
    container: t,
    input: t.querySelector('input[type="file"]'),
    uploadedItem: r
  }
}

function y(e, t) {
  let r = e.files?.[0],
    n = t.files?.[0];
  return !!r && !!n && (r === n || r.name === n.name && r.size === n.size)
}

function v() {
  let {
    container: e,
    input: t
  } = b();
  return e && t ? "required" : ""
}
async function w(e, t) {
  if (!e || !t) return;
  e.focus(), await (0, c.delay)(50);
  let r = e instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window
    .HTMLInputElement.prototype,
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : e.value = t;
  let o = ["input", "change", "blur"];
  for (let t of o) e.dispatchEvent(new Event(t, {
    bubbles: !0,
    cancelable: !0
  }));
  await (0, c.delay)(50)
}
async function S(e, t) {
  if (!e || !t || 0 === t.length) return;
  let r = t[0],
    n = Array.from(e.options),
    i = (0, o.findExactChoice)(n, r, e => e.text, e => e.value);
  i && (e.value = i.value, (0, a.triggerEvents)(e, ["change", "input", "blur"]), await (0, c
    .delay)(100))
}
async function E(e, t) {
  if (!t || 0 === t.length) return;
  let r = e.$input,
    n = r.closest(".multi-select-input-wrapper"),
    i = r.closest(".single-select-input-wrapper"),
    a = n || i;
  if (!a) {
    console.warn("Custom select wrapper not found for", e.label);
    return
  }
  let l = a.querySelector("input");
  l.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0
  })), await (0, c.delay)(300);
  let s = document.querySelector('div[role="listbox"][id*="-listbox"]');
  if (!s) {
    console.warn("Custom select listbox not found"), l.dispatchEvent(new MouseEvent("click", {
      bubbles: !0
    }));
    return
  }
  let u = s.querySelectorAll('div[role="option"]'),
    d = !1,
    f = e => {
      let t = e.querySelector(".custom-multi-select-option"),
        r = "";
      if (t) r = Array.from(t.childNodes).filter(e => e.nodeType === Node.TEXT_NODE).map(e => e
        .textContent).join("").trim();
      else {
        let t = e.querySelector(".custom-single-select-option");
        r = (t?.textContent || e.textContent || "").trim()
      }
      return r
    },
    p = Array.from(u),
    m = new Set(t.map(e => (0, o.findExactChoice)(p, e, f)).filter(Boolean));
  for (let e of p) {
    let t = m.has(e);
    if (t) {
      let t = e.querySelector('input[type="checkbox"]');
      if (t) t.checked || (t.click(), d = !0, await (0, c.delay)(100));
      else {
        e.click(), d = !0, await (0, c.delay)(100);
        return
      }
    }
  }
  document.contains(s) && (l.dispatchEvent(new MouseEvent("click", {
    bubbles: !0
  })), await (0, c.delay)(200))
}

function x(e) {
  return e?.$input ?? null
}

function C(e) {
  let t = x(e),
    r = t?.closest?.('div[class*="-control"], div[class*="control"]') ?? null;
  return r || (0, u.getFirstOrderedNodeSafe)(
    '//div[contains(@class, "css-1wq9ix5-control")] | //div[contains(@class, "react-select")]//div[contains(@class, "control")]'
    )
}

function A(e, t) {
  let r = x(t);
  return r?.tagName.toLowerCase() === "input" && r.id?.includes("react-select") ? r : e
    .querySelector('input[id*="react-select"]') || (0, u.getFirstOrderedNodeSafe)(
      '//input[contains(@id, "react-select")]')
}
async function k(e, t) {
  if (!e) return !1;
  try {
    let r = C(t);
    if (!r) return console.warn("React-select control not found"), !1;
    r.click(), await (0, c.delay)(300);
    let n = A(r, t);
    if (!n) return console.warn("React-select input not found"), !1;
    n.focus(), await (0, c.delay)(50);
    let i = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    i && i.call(n, e), n.dispatchEvent(new Event("input", {
      bubbles: !0
    })), n.dispatchEvent(new Event("change", {
      bubbles: !0
    })), await (0, c.delay)(300);
    let a = await (0, f.default)(() => {
      let t = (0, u.getOrderedNodesSafe)(
        '//div[contains(@class, "option") or @role="option"]');
      for (let r of t)
        if ((0, o.isExactChoiceMatch)(r.textContent, e)) return r;
      return null
    }, () => !1, 15);
    if (a) return a.click(), await (0, c.delay)(200), !0;
    {
      let t = (0, u.getFirstOrderedNodeSafe)('//input[@name="country"]');
      if (t) return t.value = e, !0
    }
  } catch (e) {
    console.error("Error filling react-select:", e)
  }
  return !1
}
async function T(e, t) {
  if (e && t) try {
    let r = t;
    if (t.match(/^\d{4}-\d{2}-\d{2}$/)) {
      let [e, n, o] = t.split("-");
      r = `${n}/${o}/${e}`
    }
    e.focus(), await (0, c.delay)(100);
    let n = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    n ? n.call(e, r) : e.value = r, e.dispatchEvent(new Event("input", {
      bubbles: !0
    })), e.dispatchEvent(new Event("change", {
      bubbles: !0
    })), e.dispatchEvent(new Event("blur", {
      bubbles: !0
    })), await (0, c.delay)(200)
  } catch (e) {
    console.error("Error filling datepicker:", e)
  }
}

function F() {
  return (0, u.getOrderedNodesSafe)(
    '//li[contains(@class, "iti__country") and @data-country-code] | //li[@data-country-code]')
}

function I(e) {
  return (0, p.findRecruiterflowPhoneCountryOption)(F(), e)
}

function j(e, t) {
  e.focus();
  let r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  r ? r.call(e, t) : e.value = t, e.dispatchEvent(new Event("input", {
    bubbles: !0
  })), e.dispatchEvent(new Event("change", {
    bubbles: !0
  }))
}

function D() {
  if ("undefined" == typeof document) return "";
  let e = document.querySelector("li.iti__country.iti__active[data-country-code]");
  return (e?.getAttribute("data-country-code") || "").toLowerCase()
}
async function P(e, t = "United States") {
  if (!e) return {
    phoneFilled: !1,
    phoneCountryFilled: !1
  };
  let r = !1,
    n = !t;
  try {
    let o = (0, u.getFirstOrderedNodeSafe)(
      '//input[@id="user-phone"] | //input[@name="personal_info.phone"]');
    if (!o) return console.warn("Phone input not found"), {
      phoneFilled: !1,
      phoneCountryFilled: !1
    };
    let i = (0, s.resolveIso2FromCountryName)((0, s.normalizePhoneCountryText)((0, s
        .extractPhoneCountryName)(t) || t)),
      a = e.replace(/\D/g, "").length;
    for (let l = 0; l < 3; l += 1) {
      let s = D(),
        d = !t;
      if (t && (!i || s !== i)) {
        let e = (0, u.getFirstOrderedNodeSafe)(
          '//button[contains(@class, "iti__selected-country")]');
        if (e) {
          e.click(), await (0, c.delay)(300);
          let r = I(t);
          r && (r.click(), await (0, c.delay)(250)), s = D(), d = !!r && (!i || !s || s === i)
        }
      } else t && (d = !0);
      if (t && i && s && s !== i) {
        console.info("[RecruiterflowPhoneDebug] country-not-committed", {
          attempt: l + 1,
          targetIso2: i,
          selectedIso2: s,
          phoneDigitLength: a
        });
        continue
      }
      if (j(o, e), r = !0, await (0, c.delay)(200), s = D(), t && i && s && s !== i) {
        console.info("[RecruiterflowPhoneDebug] country-reset-after-phone-write", {
          attempt: l + 1,
          targetIso2: i,
          selectedIso2: s,
          phoneDigitLength: a
        });
        continue
      }
      n = d, console.info("[RecruiterflowPhoneDebug] fill-result", {
        attempt: l + 1,
        targetIso2: i,
        selectedIso2: s || "unknown",
        phoneDigitLength: a,
        phoneFilled: r,
        phoneCountryFilled: n
      });
      break
    }
    return o.dispatchEvent(new Event("blur", {
      bubbles: !0
    })), await (0, c.delay)(100), {
      phoneFilled: r,
      phoneCountryFilled: n
    }
  } catch (e) {
    return console.error("Error filling phone number:", e), {
      phoneFilled: r,
      phoneCountryFilled: !1
    }
  }
}
async function _(e, t) {
  if (!e.$checkboxs || !t || 0 === t.length) return;
  let r = t[0].toLowerCase(),
    n = e.$checkboxs[0],
    i = e.$checkboxs[1];
  (0, o.isExactChoiceMatch)(r, "yes") && n ? (n.click(), await (0, c.delay)(200)) : (0, o
    .isExactChoiceMatch)(r, "no") && i && (i.click(), await (0, c.delay)(200))
}
async function L(e, t) {
  if (!e.$checkboxs || !t) return;
  let r = 2 === e.options.length && e.options.some(e => e.toLowerCase().includes("yes")) && e
    .options.some(e => e.toLowerCase().includes("no"));
  if (r) {
    await _(e, t);
    return
  }
  for (let r = 0; r < e.options.length; r++) {
    let n = e.options[r],
      i = e.$checkboxs[r];
    if (i && "checkbox" === i.type) {
      let e = t.some(e => (0, o.isExactChoiceMatch)(n, e));
      i.checked !== e && (i.click(), await (0, c.delay)(100))
    }
  }
}
async function R(e, t, r) {
  let n = (0, u.getFirstOrderedNodeSafe)(
    '//div[contains(@class, "form-dnd-container")][1]//input[@type="file"]');
  n && await (0, a.uploadFiles)(n, await (0, i.fetchPdfAsBlob)(e), t, r, "Resume/CV")
}
async function O(e, t, r) {
  let n = b();
  if (!n.container || !n.input?.files) return !1;
  n.input.scrollIntoView({
    behavior: "smooth",
    block: "center"
  }), await (0, c.delay)(100);
  let o = await (0, i.fetchCoverLetterPdfAsBlob)(e);
  n.input.files = o.files, (0, a.triggerEvents)(n.input, ["change"]);
  let s = await (0, l.waitForCondition)(() => {
    if (!y(n.input, o)) return !1;
    let e = b().uploadedItem?.textContent || "";
    return !!e.trim()
  }, {
    timeout: 1e4,
    interval: 100,
    observeTarget: n.container
  });
  return !!s && (t({
    label: "Cover Letter",
    required: !0
  }), r("Cover Letter"), !0)
}
async function M(e) {
  if (e.education && e.education.length > 0) {
    let t = await N(),
      r = e.education.length;
    for (let e = t; e < r; e++) await U()
  }
  if (e.workExperience && e.workExperience.length > 0) {
    let t = await $(),
      r = e.workExperience.length;
    console.info("[Recruiterflow][Experience] reconcile:start", {
      currentRowCount: t,
      answerRecordCount: r
    });
    for (let e = t; e < r; e++) await H();
    let n = await q(r);
    console.info("[Recruiterflow][Experience] reconcile:complete", {
      answerRecordCount: r,
      removedEmptyRows: n,
      finalRowCount: await $()
    })
  }
}
async function N() {
  let e = (0, u.getOrderedNodesSafe)('//input[starts-with(@name, "candidate_profile.school.")]');
  return e.length
}
async function $() {
  let e = (0, u.getOrderedNodesSafe)(
    '//input[starts-with(@name, "candidate_profile.company-name.")]');
  return e.length
}

function B(e) {
  let t = Array.from(e.querySelectorAll("input, textarea, select")).filter(e => {
    let t = (e.getAttribute("type") || "").toLowerCase();
    return "hidden" !== t && "file" !== t && "button" !== t && "submit" !== t
  });
  return t.every(e => {
    let t = (e.getAttribute("type") || "").toLowerCase();
    return "checkbox" === t || "radio" === t ? !e.checked : !String(e.value || "").trim()
  })
}
async function q(e) {
  let t = Array.from(document.querySelectorAll(".experience-input-wrapper")),
    r = 0;
  for (; t.length > e;) {
    let n = t[t.length - 1];
    if (!n || !B(n)) {
      console.info("[Recruiterflow][Experience] reconcile:preserve-tail", {
        answerRecordCount: e,
        currentRowCount: t.length
      });
      break
    }
    let o = n.querySelector("button#remove-experience-button, button.remove-experience-button");
    if (!o) {
      console.warn("[Recruiterflow][Experience] reconcile:missing-remove", {
        answerRecordCount: e,
        currentRowCount: t.length
      });
      break
    }
    let i = t.length;
    o.click();
    let a = await (0, l.waitForCondition)(() => document.querySelectorAll(
      ".experience-input-wrapper").length < i, {
      timeout: 3e3,
      interval: 100,
      observeTarget: document.body
    });
    if (t = Array.from(document.querySelectorAll(".experience-input-wrapper")), !a || t.length >=
      i) {
      console.warn("[Recruiterflow][Experience] reconcile:remove-not-applied", {
        answerRecordCount: e,
        previousRowCount: i,
        currentRowCount: t.length
      });
      break
    }
    r += 1
  }
  return r
}
async function U() {
  let e = (0, u.getFirstOrderedNodeSafe)(
    '//button[@id="add-education-button"] | //button[contains(@class, "add-education-button")] | //button[contains(text(), "Add") and contains(., "Education")]'
    );
  e && (e.click(), await (0, c.delay)(500))
}
async function H() {
  let e = (0, u.getFirstOrderedNodeSafe)(
    '//button[@id="add-experience-button"] | //button[contains(@class, "add-experience-button")] | //button[contains(text(), "Add") and contains(., "Experience")]'
    );
  e && (e.click(), await (0, c.delay)(500))
}
async function Y(e) {
  let t = (0, u.getOrderedNodesSafe)(
    '//button[@id="remove-education-button"] | //button[contains(@class, "remove-education-button")]'
    );
  t[e] && (t[e].click(), await (0, c.delay)(300))
}
async function z(e) {
  let t = (0, u.getOrderedNodesSafe)(
    '//button[@id="remove-experience-button"] | //button[contains(@class, "remove-experience-button")]'
    );
  t[e] && (t[e].click(), await (0, c.delay)(300))
}
async function V() {
  let e = (0, u.getFirstOrderedNodeSafe)(
    '//div[contains(@class, "apply-to-job-form-container-wrapper")] | //main | //body');
  e && ((0, a.triggerEvents)(e, ["mousedown", "click"]), await (0, c.delay)(100))
}
async function W() {
  let e = 5e3,
    t = Date.now();
  for (; Date.now() - t < e;) {
    let e = (0, u.getFirstOrderedNodeSafe)(
      '//div[contains(@class, "apply-to-job-form-container-wrapper")]');
    if (e) {
      await (0, c.delay)(500);
      break
    }
    await (0, c.delay)(100)
  }
  let r = Date.now();
  for (; Date.now() - r < 2e3;) {
    let e = document.querySelectorAll(
      '[class*="loading"], [class*="spinner"], [class*="Loading"]');
    if (0 === e.length) break;
    await (0, c.delay)(100)
  }
  await (0, c.delay)(300)
}
async function G() {
  let e = (0, u.getOrderedNodesSafe)('//div[contains(@class, "input-section-container")]');
  for (let t of e) {
    let e = t.nextElementSibling;
    e && "none" === e.style.display && (t.click(), await (0, c.delay)(300))
  }
}
async function K(e) {
  e && (e.scrollIntoView({
    behavior: "smooth",
    block: "center"
  }), await (0, c.delay)(300))
}

function X(e) {}
async function J() {
  let e = (0, u.getFirstOrderedNodeSafe)(
    '//button[@id="submit-application-button"] | //button[contains(@class, "submit-application-button")]'
    );
  e && (await K(e), e.click(), await (0, c.delay)(500))
}

function Q() {
  let e = [],
    t = [{
      name: "personal_info.first_name",
      label: "First Name"
    }, {
      name: "personal_info.last_name",
      label: "Last Name"
    }, {
      name: "personal_info.email",
      label: "Email"
    }, {
      name: "personal_info.phone",
      label: "Phone"
    }, {
      name: "personal_info.location.city",
      label: "City"
    }, {
      name: "personal_info.location.state",
      label: "State"
    }, {
      name: "personal_info.location.postal_code",
      label: "Zip Code"
    }];
  for (let r of t) {
    let t = (0, u.getFirstOrderedNodeSafe)(`//input[@name="${r.name}"]`);
    t && t.value.trim() || e.push(r.label)
  }
  let r = (0, u.getFirstOrderedNodeSafe)('//input[@name="candidate_profile.company-name.0"]');
  r && r.value.trim() || e.push("Experience");
  let n = (0, u.getFirstOrderedNodeSafe)('//input[@name="candidate_profile.school.0"]');
  return n && n.value.trim() || e.push("Education"), {
    valid: 0 === e.length,
    missingFields: e
  }
}

function Z() {
  let e = {
      personalInfo: {},
      experience: [],
      education: [],
      additionalQuestions: []
    },
    t = ["first_name", "last_name", "email", "phone", "location.city", "location.state",
      "location.postal_code"
    ];
  for (let r of t) {
    let t = (0, u.getFirstOrderedNodeSafe)(`//input[@name="personal_info.${r}"]`);
    t && (e.personalInfo[r] = t.value)
  }
  let r = 0;
  for (;;) {
    let t = (0, u.getFirstOrderedNodeSafe)(`//input[@name="candidate_profile.company-name.${r}"]`);
    if (!t) break;
    e.experience.push({
      company: t.value,
      title: u.getFirstOrderedNodeSafe(`//input[@name="candidate_profile.designation.${r}"]`)
        ?.value || ""
    }), r++
  }
  let n = 0;
  for (;;) {
    let t = (0, u.getFirstOrderedNodeSafe)(`//input[@name="candidate_profile.school.${n}"]`);
    if (!t) break;
    e.education.push({
      school: t.value,
      degree: u.getFirstOrderedNodeSafe(`//input[@name="candidate_profile.degree.${n}"]`)
        ?.value || ""
    }), n++
  }
  return e
}

