/**
 * Parcel module id: j2pat
 * Resolved path: src/contents/sites/oraclecloud/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~contents/sites/oraclecloud/answer -> 9Ki4d  =>  src/contents/sites/oraclecloud/answer.js
 *   ~contents/sites/oraclecloud/operations -> gduo7  =>  src/contents/sites/oraclecloud/operations.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isOracleEmploymentSectionHeader", () => L), n.export(r,
  "isOracleSkillsRule", () => B), n.export(r, "isOracleLanguagesRule", () => q), n.export(r,
  "getRules", () => V), n.export(r, "getSubmitButtonText", () => J), n.export(r,
  "getFormSnapshot", () => ea), n.export(r, "getSectionRowSnapshot", () => el), n.export(r,
  "addAndGetEduRules", () => es), n.export(r, "addAndGetWorkRules", () => eu);
var o = e("lodash-es"),
  i = e("~constants"),
  a = e("~contents/sites/oraclecloud/answer"),
  l = e("~contents/sites/oraclecloud/operations"),
  s = e("~core/enums"),
  u = e("~core/xpath"),
  c = e("~utils/delay");
let d = ".//div[contains(@class, 'input-row--radiogroup')]",
  f =
  ".//input[not(@type='submit') and not(@type='hidden') and not(ancestor::*[contains(@class, 'input-row--radiogroup')]) and not(ancestor::*[contains(@class, 'quick-apply-flow-datepicker-row')]) and not(ancestor::*[contains(@class, 'datepicker-row')])  and not(contains(@class, 'oj-component-initnode'))]",
  p = ".//textarea[not(contains(@class, 'input-row__control--helper'))]",
  m = ".//select",
  h =
  ".//ul[(@role='list' or @role='radiogroup') and contains(@class, 'cx-select-pills-container')]",
  g =
  ".//div[contains(@class, 'quick-apply-flow-datepicker-row')] | .//div[contains(@class, 'datepicker-row')]",
  b = `${g} | ${d} | ${f} | ${p} | ${m} | ${h}`,
  y = "__oracleCloudSkillsRule",
  v = "__oracleCloudLanguagesRule",
  w = "Phone Country Code",
  S =
  "Return only the phone number without the country calling code. Do not include the phone country code because it is provided separately.",
  E = 24,
  x = 250,
  C = ["High School", "None", "GED", "Associate", "Master", "Bachelor", "Doctor", "J.D.", "Other",
    "Trade"
  ];

function A(e) {
  return "string" == typeof e ? e.replace(/\s+/g, " ").trim() : ""
}

function k() {
  if ("undefined" == typeof window) return !1;
  try {
    let e = "jobright_oraclecloud_combobox_debug";
    return "1" === new URLSearchParams(window.location?.search ?? "").get(e) || window.localStorage
      ?.getItem(e) === "1"
  } catch {
    return !1
  }
}

function T(e) {
  return e.className.includes("cx-select-pills-container")
}

function F(e) {
  let t = e.checkVisibility();
  return !!t || !!T(e) && (k() && console.debug("[OracleCloud][Rules] pills-visibility-bypass", {
    tagName: e.tagName,
    role: e.getAttribute("role")
  }), !0)
}

function I(e, t, r, n, o) {
  k() && console.debug("[OracleCloud][Rules] static-combobox-options", {
    label: t,
    id: e.id,
    name: e.getAttribute("name"),
    probed: n,
    skipReason: o,
    optionCount: r.length,
    included: r.length > 0
  })
}

function j(e, t, r) {
  k() && console.debug("[OracleCloud][Rules] degree-options", {
    id: e.id,
    name: e.getAttribute("name"),
    source: t,
    optionCount: r.length
  })
}

function D(e) {
  if ("true" === e.getAttribute("aria-expanded") || "undefined" == typeof document || "function" !=
    typeof document.getElementById) return "expanded-or-unavailable";
  if ("true" === e.getAttribute("aria-invalid")) return "invalid-search";
  let t = e.className || "";
  if (t.includes("cx-select-input--auto-suggest") || t.includes("oj-searchselect-input"))
  return "remote-search-class";
  let r = e.closest?.("[data-bind]"),
    n = r?.getAttribute("data-bind") || "";
  if (/\b(?:searchCriteria|isAutoSuggest|getOptions)\b/.test(n)) return "remote-search-binding";
  let o = document.getElementById(`${e.id}-toggle-button`);
  return o ? "true" === o.getAttribute("aria-expanded") ? "expanded-toggle" : null :
    "missing-toggle"
}

function P(e) {
  let t = A(e).replace(/[.\u3002]+$/g, "").toLowerCase();
  return "select the races you identify with" === t
}

function _(e) {
  return "ethnicity" === A(e).toLowerCase()
}

function L(e) {
  let t = A(e).toLowerCase();
  return !(!t || /\bcriminal\s+history\b/.test(t)) && (/\bcurrent\s+employment\b/.test(t) ||
    "experience" === t || "employment" === t || /\bwork\s+and\s+education\s+history\b/.test(t) ||
    /\b(?:professional|work|employment)\s+(?:experience|history)\b/.test(t))
}

function R(e) {
  let t = A(e).toLowerCase();
  return /\blanguages?\b/.test(t)
}

function O(e) {
  let t = A(e).toLowerCase();
  return /\bskills?\b/.test(t) && !R(t)
}

function M(e) {
  return (0, u.getOrderedNodes)(
    ".//label[contains(@class, 'apply-flow-input-checkbox') or contains(@class, 'apply-flow-input-radio')]",
    e)
}

function N(e, t) {
  let r = (0, u.getOrderedNodes)(".//input[@type='checkbox' or @type='radio']", e);
  if (r.length === t.length) return r;
  let n = t.map(e => {
    let t = e.getAttribute("for");
    if (t && "undefined" != typeof document) {
      let e = document.getElementById(t);
      if (e) return e
    }
    return (0, u.getFirstOrderedNode)(".//input[@type='checkbox' or @type='radio']", e)
  }).filter(e => !!e);
  return n.length > 0 ? n : r
}

function $(e) {
  return e.map(e => A(e.textContent)).filter(Boolean)
}

function B(e) {
  return !!e?.[y]
}

function q(e) {
  return !!e?.[v]
}

function U(e, t) {
  return (0, u.getFirstOrderedNode)(
    `.//button[contains(@class, 'apply-flow-profile-item-tile__new-tile') and contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'add ${t}')]`,
    e)
}

function H(e) {
  let t = (0, u.getOrderedNodes)(".//button[contains(@class, 'skill__recommendation-button')]", e),
    r = [];
  for (let e of t) {
    let t = A(e.textContent);
    t && !r.includes(t) && r.push(t)
  }
  return r
}

function Y(e, t) {
  let r = U(e, "skill");
  return {
    type: s.FIELD_TYPE.LISTBOX,
    label: "Skills",
    required: !0,
    $label: t || e,
    $input: e,
    $skillSection: e,
    $skillAddButton: r,
    options: H(e),
    [y]: !0
  }
}

function z(e, t) {
  let r = U(e, "language");
  return {
    type: s.FIELD_TYPE.LISTBOX,
    label: "Languages",
    required: !1,
    $label: t || e,
    $input: e,
    $languageSection: e,
    $languageAddButton: r,
    options: [],
    [v]: !0
  }
}
async function V() {
  let e = (0, u.getOrderedNodes)(
      "//apply-flow-block | .//section[contains(@class, 'email-verification')]", document),
    t = Array.from(e).filter(e => {
      let t = e.getBoundingClientRect(),
        r = window.getComputedStyle(e);
      return t.width > 0 && t.height > 0 && "none" !== r.display && "hidden" !== r.visibility &&
        "0" !== r.opacity
    }),
    r = [];
  for (let e of t) {
    if (e.matches?.("section[class*='email-verification']")) {
      let t = (0, u.getOrderedNodes)(b, e),
        n = [];
      for (let e of t) {
        let t = await W(e);
        t && n.push(t)
      }
      console.info("[OracleCloud][Rules] email-section", {
        inputCount: t.length,
        ruleCount: n.length,
        types: n.map(e => e.type)
      }), r.push(...n);
      continue
    }
    let t = (0, u.getFirstOrderedNode)(
        ".//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h3 | .//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h2",
        e),
      n = (0, u.getFirstOrderedNode)(".//*[contains(@class, 'apply-flow-agreements__row')]", e),
      i = t?.textContent?.trim();
    if ((0, o.isEmpty)(i) && !n) continue;
    let a = (0, u.getFirstOrderedNode)(
      ".//div[contains(@class, 'apply-flow-block--work-and-education-timeline')]", e);
    if (a) {
      let e = await eu(!0);
      r.push(e);
      let t = await es(!0);
      t && r.push(t);
      continue
    }
    if (/education/i.test(i)) {
      let e = await es(!0);
      e && r.push(e);
      continue
    }
    if (L(i)) {
      let e = await eu(!0);
      r.push(e);
      continue
    }
    if (R(i)) {
      r.push(z(e, t));
      continue
    }
    if (O(i)) {
      r.push(Y(e, t));
      continue
    } else {
      let t = (0, u.getOrderedNodes)(b, e);
      for (let e of t) {
        let t = await W(e);
        t && r.push(t)
      }
    }
  }
  let n = r.filter((e, t, r) => e.label && t === r.findIndex(t => t.label === e.label)),
    i = n.some(e => e.label === w);
  return n.map(e => i && e.type === s.FIELD_TYPE.TEXT && "phone number" === A(e.label).replace(
    /\*/g, "").toLowerCase() ? {
    ...e,
    description: S
  } : e)
}
async function W(e) {
  let t;
  let r = (0, u.getFirstOrderedNode)('./ancestor-or-self::div[contains(@class, "input-row")]', e),
    n = (0, u.getFirstOrderedNode)(
      `.//label[contains(@class, "input-row__label")]//span[contains(@class, "input-row__linebreak")] |
       .//label[contains(@class, "input-row__label")]//span[contains(@class, "input-row__label-text")] |
       .//label[contains(@class, "apply-flow-input-checkbox")]//span[contains(@class, "apply-flow-input-checkbox__label")]`, r),
    l = (0, u.getFirstOrderedNode)('./ancestor::div[contains(@class, "cx-select-container")]', e),
    c = l ? (0, u.getFirstOrderedNode)('.//span[contains(@class, "input-field__label")]', l) :
    null,
    d = (0, u.getFirstOrderedNode)(`./form-element-label/label/span[contains(@class, "input-row__label--required-star")] |
       .//span[contains(@class, "cx-select__label--required")]`, r);
  if (!F(e)) return null;
  let f = (0, a.isOraclePhoneCountryCodeField)(e.id || e.getAttribute("id") || e.getAttribute(
    "name")) || "country code" === A(c?.textContent).toLowerCase();
  if (f) return {
    type: s.FIELD_TYPE.SELECT,
    label: w,
    required: !!d,
    $input: e,
    $label: c || n || e,
    options: await ec(e, !0)
  };
  if (!n) return null;
  let p = n?.textContent?.replace(/[\n\r*]/g, "").trim();
  if (c && c?.textContent?.trim() === "Country code") return null;
  if (T(e) && (t = s.FIELD_TYPE.LISTBOX), "TEXTAREA" === e.tagName && (t = s.FIELD_TYPE.TEXT),
    "INPUT" === e.tagName) {
    if ("file" === e.getAttribute("type")) return null;
    t = ["checkbox", "radio"].includes(e.getAttribute("type")) ? s.FIELD_TYPE.CHECKBOX : s
      .FIELD_TYPE.TEXT
  }("combobox" === e.getAttribute("role") || e.className.includes("cx-select-input") || e
    .className.includes("oj-searchselect-input")) && (t = s.FIELD_TYPE.SELECT), e.className
    .includes("input-row--radiogroup") && (t = s.FIELD_TYPE.RADIOGROUP), e.className.includes(
      "datepicker-row") && (t = s.FIELD_TYPE.DATE);
  let m = (0, u.getFirstOrderedNode)(`./following-sibling::label[contains(@class, "apply-flow-input-checkbox")] |
      ./following-sibling::span[contains(@class, "apply-flow-input-checkbox")]`, e);
  if (m?.textContent?.trim()) {
    let e = m.textContent.trim();
    _(p || "") || (p = e)
  }
  if ((0, o.isEmpty)(p)) return null;
  if (t == s.FIELD_TYPE.DATE) return {
    type: s.FIELD_TYPE.DATE,
    label: p,
    required: !!d || (0, a.isOracleLinkRule)({
      label: p
    }),
    $input: e,
    $label: n,
    description: "Month / Day / Year"
  };
  if (t == s.FIELD_TYPE.RADIOGROUP) {
    let t = M(e),
      r = $(t);
    return P(p) ? {
      type: s.FIELD_TYPE.CHECKBOX,
      label: p,
      required: !!d || (0, a.isOracleLinkRule)({
        label: p
      }),
      $input: e,
      $label: n,
      $checkboxs: N(e, t),
      options: r
    } : {
      type: s.FIELD_TYPE.RADIOGROUP,
      label: p,
      required: !!d || (0, a.isOracleLinkRule)({
        label: p
      }),
      $input: e,
      $label: n,
      options: r
    }
  }
  if (t == s.FIELD_TYPE.CHECKBOX) {
    let t = m?.textContent?.replace(/[\n\r*]/g, "").trim() || p;
    return {
      type: s.FIELD_TYPE.CHECKBOX,
      label: p,
      required: !!d || (0, a.isOracleLinkRule)({
        label: p
      }),
      $checkboxs: [e],
      $input: e,
      $label: n,
      options: t ? [t] : []
    }
  }
  if (t === s.FIELD_TYPE.TEXT) return {
    type: s.FIELD_TYPE.TEXT,
    label: p,
    required: !!d || (0, a.isOracleLinkRule)({
      label: p
    }),
    $input: e,
    $label: n
  };
  if (t == s.FIELD_TYPE.SELECT) {
    let t;
    if (("US-STANDARD-ORA_GENDER-STANDARD" == e.getAttribute("name") ||
        "US-STANDARD-ORA_VETERAN_STATUS-STANDARD" == e.getAttribute("name")) && (t = await ec(e)),
      void 0 === t && "combobox" === e.getAttribute("role")) {
      let r = e,
        n = D(r),
        o = null === n,
        i = o ? await ec(r, !1, 1, !0) : [];
      I(r, p, i, o, n), i.length > 0 && (t = i)
    }
    if ("Degree" === p) {
      let r = t?.length ? t : C;
      t = r, j(e, r === C ? "fallback" : "live-menu", r)
    }
    return {
      type: s.FIELD_TYPE.SELECT,
      label: p,
      required: !!d || (0, a.isOracleLinkRule)({
        label: p
      }),
      $input: e,
      $label: n,
      options: t
    }
  }
  if ("SELECT" === e.tagName) {
    let t = (0, u.getOrderedNodes)(
      './following-sibling::div[contains(@class, "dropdown-container")]//ul[@role="listbox"]/li',
      e);
    0 === t.length && (t = (0, u.getOrderedNodes)("./option", e));
    let r = t.reduce((e, t) => {
      let r = t.textContent?.trim();
      return (0, o.isEmpty)(r) || "\u2014 Make a Selection \u2014" === r || "No Results" ===
        r || e.push(r), e
    }, []);
    return "State/Province" === p && 0 === r.length && (r = Object.values(i.STATE_MAP)), {
      type: s.FIELD_TYPE.SELECT,
      label: p,
      required: !!d || (0, a.isOracleLinkRule)({
        label: p
      }),
      $label: n,
      $input: e,
      options: r
    }
  }
  if (t === s.FIELD_TYPE.LISTBOX) {
    let t = e.querySelectorAll(".cx-select-pill-name"),
      r = [];
    return t.forEach((e, t) => {
      r.push(e.textContent?.trim())
    }, []), {
      type: s.FIELD_TYPE.LISTBOX,
      label: p,
      required: !!d || (0, a.isOracleLinkRule)({
        label: p
      }),
      $label: n,
      $input: e,
      options: r
    }
  }
  return null
}
async function G(e, t, r) {
  let n = (0, u.getOrderedNodes)(b, e),
    o = [];
  if (n && n.length > 0)
    for (let e of n) try {
      let t = await W(e);
      t && 0 > o.findIndex(e => e.label === t.label) && o.push(t)
    } catch (e) {
      console.error("Error extracting input:", e)
    } else console.warn(`No input elements found for ${r} section`);
  return {
    type: t,
    label: r,
    required: !0,
    children: o,
    options: [...o.map(e => ({
      type: e.type,
      label: e.label,
      options: e.options
    }))]
  }
}

function K(e) {
  let t = new Set((e.children || []).map(e => A(e.label).toLowerCase()));
  return t.has("employer name") && t.has("job title")
}

function X(e) {
  let t = new Set((e.children || []).map(e => A(e.label).toLowerCase())),
    r = ["school", "school name", "school or university", "university", "university name",
      "institution", "educator", "college", "educational establishment"
    ],
    n = ["degree", "degree type", "education level", "highest degree", "accreditation", "major",
      "major or area of concentration", "field of study", "study", "discipline"
    ];
  return r.some(e => t.has(e)) && n.some(e => t.has(e))
}

function J() {
  let e = (0, u.getFirstOrderedNode)(
      '//button[@data-automation-id="pageFooterNextButton"] | //button[@data-automation-id="bottom-navigation-next-button"]'
      ),
    t = e ? e.textContent?.trim() : "";
  return t
}

function Q(e) {
  return "string" == typeof e ? e.replace(/\s+/g, " ").trim() : ""
}

function Z(e) {
  if (!e) return "";
  if (e.selectedOptions?.length) {
    let t = Q(e.selectedOptions[0]?.textContent);
    if (t) return t
  }
  let t = Q(e.value);
  if (t) return t;
  let r = Q(e.getAttribute?.("aria-valuetext") || e.getAttribute?.("aria-label"));
  return r || Q(e.textContent)
}

function ee(e) {
  return e?.checked === !0 || e?.getAttribute?.("aria-checked") === "true" || e?.classList?.contains
    ?.("oj-selected") === !0
}

function et(e) {
  let t = e.$checkboxs || [e.$input],
    r = e.options || [],
    n = t.map((e, t) => ee(e) ? Q(r[t]) || Q(e.closest?.("label")?.textContent) || Z(e) : "")
    .filter(Boolean);
  return n.length > 0 ? n.join(", ") : "No"
}

function er(e) {
  let t = e.$radioParent || e.$input,
    r = Array.from(t?.querySelectorAll?.('input[type="radio"]') || []),
    n = e.options || [],
    o = r.findIndex(ee);
  return o >= 0 ? Q(n[o]) || Q(r[o].closest?.("label")?.textContent) || Z(r[o]) : ee(e.$input) ? Z(e
    .$input) : ""
}

function en(e) {
  let t = Array.from(e.$input?.querySelectorAll?.(".cx-select-pill-name") || []),
    r = t.map(e => Q(e.textContent)).filter(Boolean).join(", ");
  return r || Z(e.$input)
}

function eo(e) {
  let t = Array.from(e.$input?.querySelectorAll?.("input, select") || []),
    r = t.map(Z).filter(Boolean);
  return r.length > 0 ? r.join(" / ") : Z(e.$input)
}

function ei(e) {
  return e.type === s.FIELD_TYPE.CHECKBOX ? et(e) : e.type === s.FIELD_TYPE.RADIOGROUP ? er(e) : e
    .type === s.FIELD_TYPE.LISTBOX ? en(e) : e.type === s.FIELD_TYPE.DATE ? eo(e) : Z(e.$input)
}

function ea(e = []) {
  let t = {};
  for (let r of e) r?.label && r.type !== s.FIELD_TYPE.EDUCATION && r.type !== s.FIELD_TYPE
    .EMPLOYMENT && (t[r.label] = ei(r));
  return t
}

function el(e) {
  let t = {};
  for (let r of e?.children || []) r?.label && (t[r.label] = ei(r));
  return t
}
async function es(e = !1) {
  await (0, l.addEducation)();
  let t = null;
  for (let e = 0; e < E; e++) {
    let r = (0, u.getOrderedNodes)(
        "//apply-flow-block | .//section[contains(@class, 'email-verification')]", document),
      n = null,
      i = Array.from(r).filter(e => {
        let t = e.getBoundingClientRect(),
          r = window.getComputedStyle(e);
        return t.width > 0 && t.height > 0 && "none" !== r.display && "hidden" !== r
          .visibility && "0" !== r.opacity
      });
    for (let e of i) {
      let t = (0, u.getFirstOrderedNode)(
          ".//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h3 | .//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h2 | .//quick-email-verification-form",
          e),
        r = (0, u.getFirstOrderedNode)(".//*[contains(@class, 'apply-flow-agreements__row')]", e),
        i = t?.textContent?.trim();
      (!(0, o.isEmpty)(i) || r) && /education/i.test(i) && (n = e)
    }
    if (X(t = await G(n, s.FIELD_TYPE.EDUCATION, "Education"))) break;
    e < E - 1 && await (0, c.delay)(x)
  }
  let r = !!t && X(t);
  if (console.info("[OracleCloud][Education] identity-check", JSON.stringify({
      autoClose: e,
      ready: r,
      fieldLabels: t?.children?.map(e => e.label) || []
    })), r || console.warn("[OracleCloud][Education] timeline rules not ready", {
      autoClose: e
    }), e) {
    let e = await (0, l.cancelEducation)();
    if (!e) throw Error("OracleCloud Education dialog did not close")
  }
  return r ? t : null
}
async function eu(e = !1) {
  await (0, l.addExperience)();
  let t = null;
  for (let e = 0; e < E; e++) {
    let r = (0, u.getOrderedNodes)(
        "//apply-flow-block | .//section[contains(@class, 'email-verification')]", document),
      n = null,
      i = Array.from(r).filter(e => {
        let t = e.getBoundingClientRect(),
          r = window.getComputedStyle(e);
        return t.width > 0 && t.height > 0 && "none" !== r.display && "hidden" !== r
          .visibility && "0" !== r.opacity
      });
    for (let e of i) {
      let t = (0, u.getFirstOrderedNode)(
          ".//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h3 | .//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h2 | .//quick-email-verification-form",
          e),
        r = (0, u.getFirstOrderedNode)(".//*[contains(@class, 'apply-flow-agreements__row')]", e),
        i = t?.textContent?.trim();
      (!(0, o.isEmpty)(i) || r) && L(i) && (n = e)
    }
    if (K(t = await G(n, s.FIELD_TYPE.EMPLOYMENT, "Experience"))) break;
    e < E - 1 && await (0, c.delay)(x)
  }
  return e && await (0, l.cancelExperience)(), t || {
    type: s.FIELD_TYPE.EMPLOYMENT,
    label: "Experience",
    required: !0,
    children: [],
    options: []
  }
}
async function ec(e, t = !1, r = 10, n = !1) {
  if ("undefined" == typeof document || "function" != typeof document.getElementById) return [];
  let o = document.getElementById(`${e.id}-toggle-button`);
  if (!o) return [];
  let i = "true" === e.getAttribute("aria-expanded") || "true" === o.getAttribute(
  "aria-expanded");
  if (n && (i || "true" === e.getAttribute("aria-invalid"))) return [];
  i || (o.click(), await new Promise(e => setTimeout(e, n ? 50 : 350)));
  try {
    let i = e.getAttribute("aria-controls") || o.getAttribute("aria-controls");
    if (!i) return [];
    let a = ["[role='gridcell']", "[role='option']", "[role='listitem']", "li"],
      l = new Set,
      s = e => {
        for (let t of a) {
          let r = e.querySelectorAll(t);
          if (0 !== r.length) {
            for (let e of r) {
              let t = A(e.textContent);
              t && "No Results" !== t && "\u2014 Make a Selection \u2014" !== t && l.add(t)
            }
            break
          }
        }
      },
      u = null;
    for (let e = 0; e < r && ((u = document.getElementById(i)) && "true" !== u.getAttribute(
        "aria-busy") && s(u), !(l.size > 0)); e++) e + 1 < r && await (0, c.delay)(n ? 50 : 100);
    if (t && u && l.size < 200)
      for (let e of ed(u)) {
        let t = e.scrollTop,
          r = Math.max(0, e.scrollHeight - e.clientHeight),
          n = Math.max(100, Math.floor(.8 * e.clientHeight));
        for (let t = 0; t <= r; t += n) e.scrollTop = Math.min(t, r), e.dispatchEvent(new Event(
          "scroll", {
            bubbles: !0
          })), await (0, c.delay)(100), s(u);
        r > 0 && e.scrollTop !== r && (e.scrollTop = r, e.dispatchEvent(new Event("scroll", {
          bubbles: !0
        })), await (0, c.delay)(100), s(u)), e.scrollTop = t, e.dispatchEvent(new Event(
          "scroll", {
            bubbles: !0
          }))
      }
    return [...l]
  } finally {
    i || o.click()
  }
}

function ed(e) {
  let t = [e, ...Array.from(e.querySelectorAll("*"))];
  return t.filter((e, r) => t.indexOf(e) === r && "number" == typeof e.scrollTop && "number" ==
    typeof e.scrollHeight && "number" == typeof e.clientHeight && e.scrollHeight > e
    .clientHeight + 20)
}

