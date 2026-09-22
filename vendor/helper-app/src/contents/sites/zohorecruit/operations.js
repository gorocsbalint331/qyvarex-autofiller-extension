/**
 * Parcel module id: ayFdv
 * Resolved path: src/contents/sites/zohorecruit/operations.js
 * Dependencies:
 *   ./location-operation -> joTPk  =>  src/contents/sites/zohorecruit/location-operation.js
 *   ./phone-country-code -> h69qT  =>  src/contents/sites/zohorecruit/phone-country-code.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "clearAllPopups", () => p), n.export(r, "preFillForm", () => m),
  n.export(r, "uploadResume", () => h), n.export(r, "addEducationRow", () => g), n.export(r,
    "fillZohoDropdownDirectly", () => b), n.export(r, "addExperienceRow", () => y), n.export(r,
    "submitApplication", () => v), n.export(r, "fillPhoneField", () => w), n.export(r,
    "waitForZohoPhoneFieldSettled", () => k), n.export(r, "fillAutocompleteField", () => T), n
  .export(r, "fillZohoDateField", () => F), n.export(r, "selectZohoAutocompleteOption", () => I), n
  .export(r, "findUniqueZohoAutocompleteOptionItem", () => M), n.export(r,
    "clearZohoAutocompleteForInput", () => $), n.export(r, "fillAgreementCheckbox", () => q), n
  .export(r, "fillMultiCheckbox", () => U), n.export(r, "fillZohoSkillSetField", () => H), n.export(
    r, "checkCoverLetter", () => G), n.export(r, "uploadCoverLetter", () => K);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("~contents/shared/filler"),
  l = e("~contents/methods/answer"),
  s = e("~contents/methods/cancellation"),
  u = e("~contents/methods/dom"),
  c = e("./phone-country-code"),
  d = e("./location-operation");
let f = ".lyteFileUpdClose, .lyteFileUpdRemove, .lyteFileUpdDelete, lyte-file-close";
async function p() {
  let e = {
    bubbles: !0,
    cancelable: !0,
    view: window,
    clientX: 1,
    clientY: 1
  };
  document.body.dispatchEvent(new MouseEvent("mousedown", e)), document.body.dispatchEvent(
    new MouseEvent("mouseup", e)), await new Promise(e => setTimeout(e, 100))
}
async function m() {
  let e = document.querySelectorAll(
    'button.tabular-group-add, button[id*="add-row"], .crux-tabular-component button');
  if (0 !== e.length) {
    for (let t of Array.from(e))
      if (t.offsetWidth > 0 && t.offsetHeight > 0) {
        let e = t.closest(".crc-form-row") || document.body;
        if (e.querySelector(".tabular-delect-btn")) continue;
        try {
          t.click(), await new Promise(e => setTimeout(e, 800))
        } catch (e) {
          console.error("[Zoho-Ops] \u70b9\u51fb\u6309\u94ae\u5931\u8d25:", e)
        }
      }
  }
}
async function h(e, t, r) {
  let n = document.querySelector('rec-file-upload-component[cx-prop-zcqa="manual_RESUME"]'),
    o = n?.querySelector("input.fileuploadInput"),
    i = Array.from(n?.querySelectorAll?.(f) ?? []);
  i.length && (i.forEach(e => e.click()), await new Promise(e => setTimeout(e, 1e3))), o && e &&
    await (0, u.uploadFiles)(o, await (0, l.fetchPdfAsBlob)(e), t, r, "Resume/CV")
}
async function g(e) {
  let t = document.querySelector('.crc-form-row[aria-label="Educational Details"]');
  if (!t) {
    console.error(
    "[Zoho-Ops] \u672a\u627e\u5230\u6559\u80b2\u7ecf\u5386\u677f\u5757\u5bb9\u5668");
    return
  }
  if ("number" == typeof e) {
    let r = t.querySelectorAll(".tabular-main-div");
    if (r.length > e) return
  }
  let r = t.querySelector("button.tabular-group-add");
  r ? (r.click(), await new Promise(e => setTimeout(e, 800))) : console.error(
    "[Zoho-Ops] \u6559\u80b2\u677f\u5757\u5185\u672a\u627e\u5230 .tabular-group-add \u6309\u94ae"
    )
}
async function b(e, t) {
  let r = e.$input;
  await p();
  let n = t.toString().trim();
  if (/month/i.test(e.label)) {
    let e = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec"
    };
    n = e[n.padStart(2, "0")] || n
  }
  let o = /^(phone country code|country phone code)$/i.test(e.label),
    i = () => {
      let e = r.querySelector(".flag-drop-code"),
        t = e?.textContent?.trim() || "",
        o = e?.getAttribute("aria-label") || "";
      if (/^\+\d+$/.test(n)) return (0, c.extractDialCode)(t || o) === (0, c.extractDialCode)(n);
      let i = o || t;
      return /[a-z]/i.test(i) && !!(0, c.findZohoPhoneCountryOption)([{
        textContent: i
      }], n)
    };
  if (o && i()) return console.info("[ZohoRecruit][section-field] phone-country-readback", {
    matched: !0,
    phase: "existing"
  }), !0;
  let a = r.querySelector(".lyteDummyEventContainer")?.getAttribute("aria-controls"),
    l = document.querySelector(`lyte-drop-body[id="${a}"]`),
    s = Array.from(l?.querySelectorAll("lyte-drop-item") || []),
    u = o ? (0, c.findZohoPhoneCountryOption)(s, n) : s.find(e => {
      let t = e.textContent?.trim() || "";
      return t.toLowerCase() === n.toLowerCase()
    });
  if (u) {
    if (u.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
      })), u.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
      })), u.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
      })), await new Promise(e => setTimeout(e, 200)), o) {
      let e = i();
      return console.info("[ZohoRecruit][section-field] phone-country-readback", {
        matched: e,
        phase: "after-selection"
      }), e
    }
    return !0
  }
  return console.info("[ZohoRecruit][section-field] dropdown-option-missing", {
    label: e.label
  }), !1
}
async function y(e) {
  let t = document.querySelector('.crc-form-row[aria-label="Experience Details"]');
  if ("number" == typeof e) {
    let r = t.querySelectorAll(".tabular-main-div");
    if (r.length > e) return
  }
  let r = t.querySelector("button.tabular-group-add");
  r.click(), await new Promise(e => setTimeout(e, 800))
}
async function v() {
  let e = document.querySelector(
    'button[data-zcqa="saveCandidate"], #saveCandidate, .crm-button-save');
  if (e) {
    if (e.disabled || e.classList.contains("lyteDisabled")) {
      console.warn(
        "[ZohoRecruit] \u6309\u94ae\u5f53\u524d\u5904\u4e8e\u7981\u7528\u72b6\u6001\uff0c\u8df3\u8fc7\u70b9\u51fb"
        );
      return
    }
    e.click()
  } else console.error(
    "[ZohoRecruit] \u672a\u80fd\u627e\u5230\u6709\u6548\u7684\u63d0\u4ea4\u6309\u94ae")
}
async function w(e, t, r, n) {
  let o = String(t ?? "").replace(/\D/g, ""),
    i = r || "",
    a = e.$countryCode || e.$input?.closest("crux-phone-component")?.querySelector(
      "lyte-dropdown"),
    l = a?.querySelector(".lyteDummyEventContainer"),
    s = "",
    u = "";
  if (a && l) {
    S(l), await new Promise(e => setTimeout(e, 500));
    let e = x(a),
      t = i ? (0, c.findZohoPhoneCountryOption)(e, i, n) : (0, c.findZohoPhoneCountryOption)(e,
        "United States");
    t && (u = t.textContent || "", s = (0, c.extractDialCode)(u), E(t), await C(a, l, u, s)),
      await A(a, l)
  }
  let d = e.$input;
  if (d) {
    let e = (0, c.formatZohoPhoneNumber)(t, s);
    await j(d, e || o), d.dispatchEvent(new Event("input", {
      bubbles: !0
    })), d.dispatchEvent(new Event("change", {
      bubbles: !0
    })), d.dispatchEvent(new Event("blur", {
      bubbles: !0
    }))
  }
  await k(e)
}

function S(e) {
  e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  }))
}

function E(e) {
  e.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  }))
}

function x(e) {
  let t = e.querySelector(".lyteDummyEventContainer")?.getAttribute("aria-controls");
  if (t) {
    let e = document.getElementById(t),
      r = Array.from(e?.querySelectorAll("lyte-drop-item") || []).filter(e =>
        e instanceof HTMLElement && !!e.textContent?.trim());
    if (r.length > 0) return r
  }
  return Array.from(document.querySelectorAll("lyte-drop-item")).filter(e =>
    e instanceof HTMLElement && !!e.textContent?.trim())
}
async function C(e, t, r, n) {
  let o = (0, c.normalizePhoneCountry)(r);
  for (let r = 0; r < 12; r++) {
    let r = e.querySelector(".flag-drop-code")?.getAttribute("aria-label") || "",
      i = e.querySelector(".flag-drop-code")?.textContent || "",
      a = t?.getAttribute("aria-expanded") === "true",
      l = (0, c.normalizePhoneCountry)(`${r} ${i}`),
      s = !n || l.includes(n.toLowerCase()),
      u = !o || l.includes(o);
    if (!a && s && u) return;
    await new Promise(e => setTimeout(e, 150))
  }
}
async function A(e, t) {
  t?.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: !0,
      cancelable: !0
    })), t?.dispatchEvent(new KeyboardEvent("keyup", {
      key: "Escape",
      bubbles: !0,
      cancelable: !0
    })), t?.blur(), t?.getAttribute("aria-expanded") === "true" && S(t), e?.blur?.(),
    await new Promise(e => setTimeout(e, 120)), await p(), await new Promise(e => setTimeout(e,
      120))
}
async function k(e) {
  let t = e?.$input,
    r = e?.$countryCode || t?.closest("crux-phone-component")?.querySelector("lyte-dropdown"),
    n = r?.querySelector(".lyteDummyEventContainer"),
    o = String(t?.value ?? "").replace(/\D/g, "");
  for (let e = 0; e < 10; e++) {
    let e = n?.getAttribute("aria-controls") || "",
      r = e ? document.getElementById(e) : null,
      i = n?.getAttribute("aria-expanded") === "true",
      a = !!(r && r.childElementCount > 0 && r.getBoundingClientRect().height > 0),
      l = String(t?.value ?? "").replace(/\D/g, "");
    if (!i && !a && l === o) return;
    await new Promise(e => setTimeout(e, 150))
  }
}
async function T(e, t) {
  let r = e.$input;
  if (!r) return;
  await p();
  let n = r.closest("lyte-autocomplete") || e.label.toLowerCase().includes("city") || e.label
    .toLowerCase().includes("state") || e.label.toLowerCase().includes("zip");
  if (n) {
    let r = await I(e, t);
    if (!r) throw new a.FillError(
      `No matching autocomplete option for label: ${e.label} with value: ${t}`)
  } else await j(r, t), r.dispatchEvent(new Event("input", {
    bubbles: !0
  })), r.dispatchEvent(new Event("change", {
    bubbles: !0
  })), r.dispatchEvent(new Event("blur", {
    bubbles: !0
  }))
}
async function F(e, t) {
  let r = e?.$input;
  if (!r || !t) return;
  let n = (0, i.default)(t),
    o = n.isValid() ? n.format("MM/DD/YYYY") : t;
  await j(r, o), r.dispatchEvent(new Event("input", {
    bubbles: !0
  })), r.dispatchEvent(new Event("change", {
    bubbles: !0
  })), r.dispatchEvent(new Event("blur", {
    bubbles: !0
  }))
}
async function I(e, t, r = [], n = {}) {
  let o = e?.$input;
  if (!o) return !1;
  o.focus(), o.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0
  })), o.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0
  })), o.dispatchEvent(new MouseEvent("click", {
    bubbles: !0
  })), await j(o, t), o.dispatchEvent(new Event("input", {
    bubbles: !0
  })), await new Promise(e => setTimeout(e, 250));
  let i = await D(o, n.exactOnly),
    a = n.exactOnly ? (0, d.findExactZohoRecruitCityOption)(i, t) : M(i, t, r);
  if (!a) return await $(o), !1;
  a.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: !0,
    cancelable: !0
  })), a.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: !0,
    cancelable: !0
  })), a.dispatchEvent(new MouseEvent("click", {
    bubbles: !0,
    cancelable: !0
  })), await new Promise(e => setTimeout(e, 250));
  let l = !n.exactOnly || N(o, t);
  return await B(o), l
}
async function j(e, t) {
  let r = e instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window
    .HTMLInputElement.prototype,
    n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : e.value = t;
  try {
    let t = e?._valueTracker;
    t?.setValue && t.setValue("")
  } catch (e) {
    console.warn("[ZohoAutocomplete] value tracker sync skipped", e)
  }
}
async function D(e, t = !1) {
  let r = e.closest("lyte-autocomplete"),
    n = r?.querySelector("lyte-dropdown") || e.closest("lyte-dropdown"),
    o = n?.querySelector(".lyteDummyEventContainer")?.getAttribute("aria-controls") || "";
  for (let e = 0; e < 8; e++) {
    let e = [];
    if (o) {
      let t = document.getElementById(o);
      e = Array.from(t?.querySelectorAll("lyte-drop-item") || []).filter(e =>
        e instanceof HTMLElement && !!e.textContent?.trim())
    }
    if (0 === e.length && r && !t && (e = Array.from(r.querySelectorAll("lyte-drop-item")).filter(
        e => e instanceof HTMLElement && !!e.textContent?.trim())), e.length > 0) return e;
    await new Promise(e => setTimeout(e, 120))
  }
  return []
}

function P(e) {
  return String(e ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ")
  .trim().toLowerCase()
}

function _(e) {
  return e.querySelector(".cxLookupDropboxLabel")?.textContent?.trim() || e.textContent?.trim() ||
    ""
}

function L(e) {
  let t = {
      il: ["illinois"],
      mi: ["michigan"],
      ny: ["new york"],
      on: ["ontario"],
      qc: ["quebec"],
      us: ["united states"],
      usa: ["united states"],
      "united states of america": ["united states"]
    },
    r = P(e);
  return [r, ...t[r] || []]
}

function R(e) {
  return String(e ?? "").split(/[,-]/).map(e => P(e)).filter(Boolean)
}

function O(e, t) {
  let r = R(e);
  return L(t).some(e => r.includes(e))
}

function M(e, t, r = []) {
  let n = P(t);
  if (!n) return null;
  let o = r.map(e => P(e)).filter(Boolean),
    i = e.filter(e => {
      let t = _(e),
        r = P(t);
      return r === n || !!O(t, n) && o.every(e => O(t, e))
    });
  return 1 === i.length ? i[0] : null
}

function N(e, t) {
  let r = e.closest("crux-text-component"),
    n = r?.getAttribute("selected-value") || "";
  return P(e.value) === P(t) && !!n
}
async function $(e) {
  await j(e, ""), e.dispatchEvent(new Event("input", {
    bubbles: !0
  })), await B(e)
}
async function B(e) {
  e.dispatchEvent(new KeyboardEvent("keydown", {
    key: "Escape",
    bubbles: !0,
    cancelable: !0
  })), e.dispatchEvent(new KeyboardEvent("keyup", {
    key: "Escape",
    bubbles: !0,
    cancelable: !0
  })), e.blur(), await new Promise(e => setTimeout(e, 120)), await p(), await new Promise(e =>
    setTimeout(e, 120))
}
async function q() {
  let e = Array.from(document.querySelectorAll("label.lyteCheckbox.lyteDefault")).find(e => {
    if (e.closest(".tabular-main-div, .crc-form-tabularrow")) return !1;
    let t = e.querySelector("input"),
      r = e.closest(".crc-form-row"),
      n = [e.textContent, e.getAttribute("aria-label"), t?.getAttribute("aria-label"), r
        ?.textContent
      ].filter(Boolean).join(" ").replace(/\s+/g, " ").toLowerCase();
    return /agree|agreement|consent|certif|terms|privacy|acknowledge|authorize/.test(n)
  });
  if (e) {
    let t = e.querySelector("input");
    t && !t.checked && t.click()
  }
}
async function U(e, t) {
  let r = Array.isArray(t) ? t : [t];
  if (!e.$checkboxs || 0 === e.$checkboxs.length) {
    console.error("[Zoho-MultiCheckbox] No checkbox elements found");
    return
  }
  for (let t of e.$checkboxs) {
    let e = t.getAttribute("data-label");
    if (!e) {
      let r = t.closest("lyte-checkbox");
      r && (e = r.getAttribute("lt-prop-label"))
    }
    let n = r.some(t => e.toLowerCase().trim() === t.toLowerCase().trim());
    n && !t.checked ? (t.click(), await new Promise(e => setTimeout(e, 100))) : !n && t.checked &&
      (t.click(), await new Promise(e => setTimeout(e, 100)))
  }
}
async function H(e, t) {
  let r = e?.$input;
  if (!r || !Array.isArray(t) || 0 === t.length) return !1;
  let n = 0;
  for (let e of t.slice(0, 20)) {
    let t = String(e || "").trim();
    if (!t || V(r, t)) continue;
    await j(r, t), r.focus(), r.dispatchEvent(new MouseEvent("mousedown", {
      bubbles: !0
    })), r.dispatchEvent(new MouseEvent("mouseup", {
      bubbles: !0
    })), r.dispatchEvent(new MouseEvent("click", {
      bubbles: !0
    })), r.dispatchEvent(new Event("input", {
      bubbles: !0
    }));
    let o = await Y(r, t);
    if (!o) {
      r.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: !0,
        cancelable: !0
      }));
      continue
    }
    o.dispatchEvent(new MouseEvent("mousedown", {
      bubbles: !0,
      cancelable: !0
    })), o.dispatchEvent(new MouseEvent("mouseup", {
      bubbles: !0,
      cancelable: !0
    })), o.dispatchEvent(new MouseEvent("click", {
      bubbles: !0,
      cancelable: !0
    })), await (0, s.cancellableDelay)(250), V(r, t) && (n += 1)
  }
  return await j(r, ""), r.dispatchEvent(new Event("input", {
    bubbles: !0
  })), await p(), n > 0
}
async function Y(e, t) {
  let r = P(t);
  for (let e = 0; e < 10; e++) {
    let e = Array.from(document.querySelectorAll(
        'li[aria-label^="Ajouter une comp\xe9tence"], li[aria-label^="Add skill"], li[role="button"]'
        )).filter(e => {
        let t = e.getBoundingClientRect();
        return t.width > 0 && t.height > 0
      }),
      t = e.find(e => {
        let t = z(e);
        return P(t) === r
      });
    if (t) return t;
    await (0, s.cancellableDelay)(150)
  }
  return null
}

function z(e) {
  let t = e.getAttribute("aria-label") || "";
  return t.replace(/^Ajouter une comp\u00e9tence\s*[:\uff1a]\s*/i, "").replace(
    /^Add skill\s*[:\uff1a]\s*/i, "").trim() || e.textContent?.trim() || ""
}

function V(e, t) {
  let r = e.closest("skills-tag, rec-skills-component") || document,
    n = P(t);
  return Array.from(r.querySelectorAll(".skl-selected-skill-li")).some(e => {
    let t = e.querySelector("span")?.getAttribute("aria-label") || e.querySelector("span")
      ?.getAttribute("lt-prop-title") || e.textContent || "";
    return P(t) === n
  })
}

function W() {
  let e = document.querySelector('rec-file-upload-component[cx-prop-zcqa="manual_COVERLETTER"]') ??
    document.querySelector('rec-file-upload-component[cx-prop-zcqa="manual_OTHERS"]');
  if (!e) return {
    container: null,
    input: null,
    uploadedFile: null,
    deleteButton: null
  };
  let t = e.querySelector("input.fileuploadInput"),
    r = e.querySelector(".lyteFileUpdListFile"),
    n = e.querySelector(f);
  return {
    container: e,
    input: t,
    uploadedFile: r,
    deleteButton: n
  }
}
async function G() {
  let e = 30,
    t = 500;
  for (let r = 0; r < e; r++) {
    let {
      container: e,
      input: r
    } = W();
    if (e && r) {
      (0, u.postCoverLetterStatus)("required");
      return
    }
    await new Promise(e => setTimeout(e, t))
  }(0, u.postCoverLetterStatus)("")
}
async function K(e, t, r) {
  let {
    container: n,
    input: o,
    uploadedFile: i,
    deleteButton: a
  } = W();
  if (o) {
    if (i && a) {
      let e = Array.from(n?.querySelectorAll?.(f) ?? [a]);
      e.forEach(e => e.click()), await new Promise(e => setTimeout(e, 1e3))
    }
    await (0, u.uploadFiles)(o, await (0, l.fetchCoverLetterPdfAsBlob)(e), t, r, "Cover Letter")
  }
}

