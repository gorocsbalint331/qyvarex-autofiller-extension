// @ts-nocheck
/**
 * Oracle Cloud — form rule discovery and snapshots.
 */

import * as lodash from "lodash-es";
import * as constants from "../../../constants.ts";
import * as oracleAnswer from "./answer.ts";
import * as operations from "./operations.ts";
import * as enums from "../../../core/enums.js";
import * as xpath from "../../../core/xpath.js";
import * as delay from "../../../utils/delay.js";
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
  C = [
    "High School",
    "None",
    "GED",
    "Associate",
    "Master",
    "Bachelor",
    "Doctor",
    "J.D.",
    "Other",
    "Trade",
  ];
function A(e) {
  return "string" == typeof e ? e.replace(/\s+/g, " ").trim() : "";
}
function k() {
  if ("undefined" == typeof window) return false;
  try {
    let e = "jobright_oraclecloud_combobox_debug";
    return (
      "1" === new URLSearchParams(window.location?.search ?? "").get(e) ||
      window.localStorage?.getItem(e) === "1"
    );
  } catch {
    return false;
  }
}
function T(e) {
  return e.className.includes("cx-select-pills-container");
}
function F(e) {
  let t = e.checkVisibility();
  return (
    !!t ||
    (!!T(e) &&
      (k() &&
        console.debug("[OracleCloud][Rules] pills-visibility-bypass", {
          tagName: e.tagName,
          role: e.getAttribute("role"),
        }),
      true))
  );
}
function I(e, t, r, n, o2) {
  k() &&
    console.debug("[OracleCloud][Rules] static-combobox-options", {
      label: t,
      id: e.id,
      name: e.getAttribute("name"),
      probed: n,
      skipReason: o2,
      optionCount: r.length,
      included: r.length > 0,
    });
}
function j(e, t, r) {
  k() &&
    console.debug("[OracleCloud][Rules] degree-options", {
      id: e.id,
      name: e.getAttribute("name"),
      source: t,
      optionCount: r.length,
    });
}
function D(e) {
  if (
    "true" === e.getAttribute("aria-expanded") ||
    "undefined" == typeof document ||
    "function" != typeof document.getElementById
  )
    return "expanded-or-unavailable";
  if ("true" === e.getAttribute("aria-invalid")) return "invalid-search";
  let t = e.className || "";
  if (
    t.includes("cx-select-input--auto-suggest") ||
    t.includes("oj-searchselect-input")
  )
    return "remote-search-class";
  let r = e.closest?.("[data-bind]"),
    n = r?.getAttribute("data-bind") || "";
  if (/\b(?:searchCriteria|isAutoSuggest|getOptions)\b/.test(n))
    return "remote-search-binding";
  let o2 = document.getElementById(`${e.id}-toggle-button`);
  return o2
    ? "true" === o2.getAttribute("aria-expanded")
      ? "expanded-toggle"
      : null
    : "missing-toggle";
}
function P(e) {
  let t = A(e)
    .replace(/[.\u3002]+$/g, "")
    .toLowerCase();
  return "select the races you identify with" === t;
}
function _(e) {
  return "ethnicity" === A(e).toLowerCase();
}
function isOracleEmploymentSectionHeader(e) {
  let t = A(e).toLowerCase();
  return (
    !(!t || /\bcriminal\s+history\b/.test(t)) &&
    (/\bcurrent\s+employment\b/.test(t) ||
      "experience" === t ||
      "employment" === t ||
      /\bwork\s+and\s+education\s+history\b/.test(t) ||
      /\b(?:professional|work|employment)\s+(?:experience|history)\b/.test(t))
  );
}
function R(e) {
  let t = A(e).toLowerCase();
  return /\blanguages?\b/.test(t);
}
function O(e) {
  let t = A(e).toLowerCase();
  return /\bskills?\b/.test(t) && !R(t);
}
function M(e) {
  return xpath.getOrderedNodes(
    ".//label[contains(@class, 'apply-flow-input-checkbox') or contains(@class, 'apply-flow-input-radio')]",
    e,
  );
}
function N(e, t) {
  let r = xpath.getOrderedNodes(
    ".//input[@type='checkbox' or @type='radio']",
    e,
  );
  if (r.length === t.length) return r;
  let n = t
    .map((e2) => {
      let t2 = e2.getAttribute("for");
      if (t2 && "undefined" != typeof document) {
        let e3 = document.getElementById(t2);
        if (e3) return e3;
      }
      return xpath.getFirstOrderedNode(
        ".//input[@type='checkbox' or @type='radio']",
        e2,
      );
    })
    .filter((e2) => !!e2);
  return n.length > 0 ? n : r;
}
function $(e) {
  return e.map((e2) => A(e2.textContent)).filter(Boolean);
}
function isOracleSkillsRule(e) {
  return !!e?.[y];
}
function isOracleLanguagesRule(e) {
  return !!e?.[v];
}
function U(e, t) {
  return xpath.getFirstOrderedNode(
    `.//button[contains(@class, 'apply-flow-profile-item-tile__new-tile') and contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'add ${t}')]`,
    e,
  );
}
function H(e) {
  let t = xpath.getOrderedNodes(
      ".//button[contains(@class, 'skill__recommendation-button')]",
      e,
    ),
    r = [];
  for (let e2 of t) {
    let t2 = A(e2.textContent);
    t2 && !r.includes(t2) && r.push(t2);
  }
  return r;
}
function Y(e, t) {
  let r = U(e, "skill");
  return {
    type: enums.FIELD_TYPE.LISTBOX,
    label: "Skills",
    required: true,
    $label: t || e,
    $input: e,
    $skillSection: e,
    $skillAddButton: r,
    options: H(e),
    [y]: true,
  };
}
function z(e, t) {
  let r = U(e, "language");
  return {
    type: enums.FIELD_TYPE.LISTBOX,
    label: "Languages",
    required: false,
    $label: t || e,
    $input: e,
    $languageSection: e,
    $languageAddButton: r,
    options: [],
    [v]: true,
  };
}
async function getRules() {
  let e = xpath.getOrderedNodes(
      "//apply-flow-block | .//section[contains(@class, 'email-verification')]",
      document,
    ),
    t = Array.from(e).filter((e2) => {
      let t2 = e2.getBoundingClientRect(),
        r2 = window.getComputedStyle(e2);
      return (
        t2.width > 0 &&
        t2.height > 0 &&
        "none" !== r2.display &&
        "hidden" !== r2.visibility &&
        "0" !== r2.opacity
      );
    }),
    r = [];
  for (let e2 of t) {
    if (e2.matches?.("section[class*='email-verification']")) {
      let t3 = xpath.getOrderedNodes(b, e2),
        n3 = [];
      for (let e3 of t3) {
        let t4 = await W(e3);
        t4 && n3.push(t4);
      }
      (console.info("[OracleCloud][Rules] email-section", {
        inputCount: t3.length,
        ruleCount: n3.length,
        types: n3.map((e3) => e3.type),
      }),
        r.push(...n3));
      continue;
    }
    let t2 = xpath.getFirstOrderedNode(
        ".//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h3 | .//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h2",
        e2,
      ),
      n2 = xpath.getFirstOrderedNode(
        ".//*[contains(@class, 'apply-flow-agreements__row')]",
        e2,
      ),
      i3 = t2?.textContent?.trim();
    if (lodash.isEmpty(i3) && !n2) continue;
    let a2 = xpath.getFirstOrderedNode(
      ".//div[contains(@class, 'apply-flow-block--work-and-education-timeline')]",
      e2,
    );
    if (a2) {
      let e3 = await addAndGetWorkRules(true);
      r.push(e3);
      let t3 = await addAndGetEduRules(true);
      t3 && r.push(t3);
      continue;
    }
    if (/education/i.test(i3)) {
      let e3 = await addAndGetEduRules(true);
      e3 && r.push(e3);
      continue;
    }
    if (isOracleEmploymentSectionHeader(i3)) {
      let e3 = await addAndGetWorkRules(true);
      r.push(e3);
      continue;
    }
    if (R(i3)) {
      r.push(z(e2, t2));
      continue;
    }
    if (O(i3)) {
      r.push(Y(e2, t2));
      continue;
    } else {
      let t3 = xpath.getOrderedNodes(b, e2);
      for (let e3 of t3) {
        let t4 = await W(e3);
        t4 && r.push(t4);
      }
    }
  }
  let n = r.filter(
      (e2, t2, r2) =>
        e2.label && t2 === r2.findIndex((t3) => t3.label === e2.label),
    ),
    i2 = n.some((e2) => e2.label === w);
  return n.map((e2) =>
    i2 &&
    e2.type === enums.FIELD_TYPE.TEXT &&
    "phone number" === A(e2.label).replace(/\*/g, "").toLowerCase()
      ? {
          ...e2,
          description: S,
        }
      : e2,
  );
}
async function W(e) {
  let t;
  let r = xpath.getFirstOrderedNode(
      './ancestor-or-self::div[contains(@class, "input-row")]',
      e,
    ),
    n = xpath.getFirstOrderedNode(
      `.//label[contains(@class, "input-row__label")]//span[contains(@class, "input-row__linebreak")] |
       .//label[contains(@class, "input-row__label")]//span[contains(@class, "input-row__label-text")] |
       .//label[contains(@class, "apply-flow-input-checkbox")]//span[contains(@class, "apply-flow-input-checkbox__label")]`,
      r,
    ),
    l2 = xpath.getFirstOrderedNode(
      './ancestor::div[contains(@class, "cx-select-container")]',
      e,
    ),
    c2 = l2
      ? xpath.getFirstOrderedNode(
          './/span[contains(@class, "input-field__label")]',
          l2,
        )
      : null,
    d2 = xpath.getFirstOrderedNode(
      `./form-element-label/label/span[contains(@class, "input-row__label--required-star")] |
       .//span[contains(@class, "cx-select__label--required")]`,
      r,
    );
  if (!F(e)) return null;
  let f2 =
    oracleAnswer.isOraclePhoneCountryCodeField(
      e.id || e.getAttribute("id") || e.getAttribute("name"),
    ) || "country code" === A(c2?.textContent).toLowerCase();
  if (f2)
    return {
      type: enums.FIELD_TYPE.SELECT,
      label: w,
      required: !!d2,
      $input: e,
      $label: c2 || n || e,
      options: await ec(e, true),
    };
  if (!n) return null;
  let p2 = n?.textContent?.replace(/[\n\r*]/g, "").trim();
  if (c2 && c2?.textContent?.trim() === "Country code") return null;
  if (
    (T(e) && (t = enums.FIELD_TYPE.LISTBOX),
    "TEXTAREA" === e.tagName && (t = enums.FIELD_TYPE.TEXT),
    "INPUT" === e.tagName)
  ) {
    if ("file" === e.getAttribute("type")) return null;
    t = ["checkbox", "radio"].includes(e.getAttribute("type"))
      ? enums.FIELD_TYPE.CHECKBOX
      : enums.FIELD_TYPE.TEXT;
  }
  (("combobox" === e.getAttribute("role") ||
    e.className.includes("cx-select-input") ||
    e.className.includes("oj-searchselect-input")) &&
    (t = enums.FIELD_TYPE.SELECT),
    e.className.includes("input-row--radiogroup") &&
      (t = enums.FIELD_TYPE.RADIOGROUP),
    e.className.includes("datepicker-row") && (t = enums.FIELD_TYPE.DATE));
  let m2 = xpath.getFirstOrderedNode(
    `./following-sibling::label[contains(@class, "apply-flow-input-checkbox")] |
      ./following-sibling::span[contains(@class, "apply-flow-input-checkbox")]`,
    e,
  );
  if (m2?.textContent?.trim()) {
    let e2 = m2.textContent.trim();
    _(p2 || "") || (p2 = e2);
  }
  if (lodash.isEmpty(p2)) return null;
  if (t == enums.FIELD_TYPE.DATE)
    return {
      type: enums.FIELD_TYPE.DATE,
      label: p2,
      required:
        !!d2 ||
        oracleAnswer.isOracleLinkRule({
          label: p2,
        }),
      $input: e,
      $label: n,
      description: "Month / Day / Year",
    };
  if (t == enums.FIELD_TYPE.RADIOGROUP) {
    let t2 = M(e),
      r2 = $(t2);
    return P(p2)
      ? {
          type: enums.FIELD_TYPE.CHECKBOX,
          label: p2,
          required:
            !!d2 ||
            oracleAnswer.isOracleLinkRule({
              label: p2,
            }),
          $input: e,
          $label: n,
          $checkboxs: N(e, t2),
          options: r2,
        }
      : {
          type: enums.FIELD_TYPE.RADIOGROUP,
          label: p2,
          required:
            !!d2 ||
            oracleAnswer.isOracleLinkRule({
              label: p2,
            }),
          $input: e,
          $label: n,
          options: r2,
        };
  }
  if (t == enums.FIELD_TYPE.CHECKBOX) {
    let t2 = m2?.textContent?.replace(/[\n\r*]/g, "").trim() || p2;
    return {
      type: enums.FIELD_TYPE.CHECKBOX,
      label: p2,
      required:
        !!d2 ||
        oracleAnswer.isOracleLinkRule({
          label: p2,
        }),
      $checkboxs: [e],
      $input: e,
      $label: n,
      options: t2 ? [t2] : [],
    };
  }
  if (t === enums.FIELD_TYPE.TEXT)
    return {
      type: enums.FIELD_TYPE.TEXT,
      label: p2,
      required:
        !!d2 ||
        oracleAnswer.isOracleLinkRule({
          label: p2,
        }),
      $input: e,
      $label: n,
    };
  if (t == enums.FIELD_TYPE.SELECT) {
    let t2;
    if (
      (("US-STANDARD-ORA_GENDER-STANDARD" == e.getAttribute("name") ||
        "US-STANDARD-ORA_VETERAN_STATUS-STANDARD" == e.getAttribute("name")) &&
        (t2 = await ec(e)),
      void 0 === t2 && "combobox" === e.getAttribute("role"))
    ) {
      let r2 = e,
        n2 = D(r2),
        o2 = null === n2,
        i2 = o2 ? await ec(r2, false, 1, true) : [];
      (I(r2, p2, i2, o2, n2), i2.length > 0 && (t2 = i2));
    }
    if ("Degree" === p2) {
      let r2 = t2?.length ? t2 : C;
      ((t2 = r2), j(e, r2 === C ? "fallback" : "live-menu", r2));
    }
    return {
      type: enums.FIELD_TYPE.SELECT,
      label: p2,
      required:
        !!d2 ||
        oracleAnswer.isOracleLinkRule({
          label: p2,
        }),
      $input: e,
      $label: n,
      options: t2,
    };
  }
  if ("SELECT" === e.tagName) {
    let t2 = xpath.getOrderedNodes(
      './following-sibling::div[contains(@class, "dropdown-container")]//ul[@role="listbox"]/li',
      e,
    );
    0 === t2.length && (t2 = xpath.getOrderedNodes("./option", e));
    let r2 = t2.reduce((e2, t3) => {
      let r3 = t3.textContent?.trim();
      return (
        lodash.isEmpty(r3) ||
          "\u2014 Make a Selection \u2014" === r3 ||
          "No Results" === r3 ||
          e2.push(r3),
        e2
      );
    }, []);
    return (
      "State/Province" === p2 &&
        0 === r2.length &&
        (r2 = Object.values(constants.STATE_MAP)),
      {
        type: enums.FIELD_TYPE.SELECT,
        label: p2,
        required:
          !!d2 ||
          oracleAnswer.isOracleLinkRule({
            label: p2,
          }),
        $label: n,
        $input: e,
        options: r2,
      }
    );
  }
  if (t === enums.FIELD_TYPE.LISTBOX) {
    let t2 = e.querySelectorAll(".cx-select-pill-name"),
      r2 = [];
    return (
      t2.forEach((e2, t3) => {
        r2.push(e2.textContent?.trim());
      }, []),
      {
        type: enums.FIELD_TYPE.LISTBOX,
        label: p2,
        required:
          !!d2 ||
          oracleAnswer.isOracleLinkRule({
            label: p2,
          }),
        $label: n,
        $input: e,
        options: r2,
      }
    );
  }
  return null;
}
async function G(e, t, r) {
  let n = xpath.getOrderedNodes(b, e),
    o2 = [];
  if (n && n.length > 0)
    for (let e2 of n)
      try {
        let t2 = await W(e2);
        t2 && 0 > o2.findIndex((e3) => e3.label === t2.label) && o2.push(t2);
      } catch (e3) {
        console.error("Error extracting input:", e3);
      }
  else console.warn(`No input elements found for ${r} section`);
  return {
    type: t,
    label: r,
    required: true,
    children: o2,
    options: [
      ...o2.map((e2) => ({
        type: e2.type,
        label: e2.label,
        options: e2.options,
      })),
    ],
  };
}
function K(e) {
  let t = new Set((e.children || []).map((e2) => A(e2.label).toLowerCase()));
  return t.has("employer name") && t.has("job title");
}
function X(e) {
  let t = new Set((e.children || []).map((e2) => A(e2.label).toLowerCase())),
    r = [
      "school",
      "school name",
      "school or university",
      "university",
      "university name",
      "institution",
      "educator",
      "college",
      "educational establishment",
    ],
    n = [
      "degree",
      "degree type",
      "education level",
      "highest degree",
      "accreditation",
      "major",
      "major or area of concentration",
      "field of study",
      "study",
      "discipline",
    ];
  return r.some((e2) => t.has(e2)) && n.some((e2) => t.has(e2));
}
function getSubmitButtonText() {
  let e = xpath.getFirstOrderedNode(
      '//button[@data-automation-id="pageFooterNextButton"] | //button[@data-automation-id="bottom-navigation-next-button"]',
    ),
    t = e ? e.textContent?.trim() : "";
  return t;
}
function Q(e) {
  return "string" == typeof e ? e.replace(/\s+/g, " ").trim() : "";
}
function Z(e) {
  if (!e) return "";
  if (e.selectedOptions?.length) {
    let t2 = Q(e.selectedOptions[0]?.textContent);
    if (t2) return t2;
  }
  let t = Q(e.value);
  if (t) return t;
  let r = Q(
    e.getAttribute?.("aria-valuetext") || e.getAttribute?.("aria-label"),
  );
  return r || Q(e.textContent);
}
function ee(e) {
  return (
    e?.checked === true ||
    e?.getAttribute?.("aria-checked") === "true" ||
    e?.classList?.contains?.("oj-selected") === true
  );
}
function et(e) {
  let t = e.$checkboxs || [e.$input],
    r = e.options || [],
    n = t
      .map((e2, t2) =>
        ee(e2)
          ? Q(r[t2]) || Q(e2.closest?.("label")?.textContent) || Z(e2)
          : "",
      )
      .filter(Boolean);
  return n.length > 0 ? n.join(", ") : "No";
}
function er(e) {
  let t = e.$radioParent || e.$input,
    r = Array.from(t?.querySelectorAll?.('input[type="radio"]') || []),
    n = e.options || [],
    o2 = r.findIndex(ee);
  return o2 >= 0
    ? Q(n[o2]) || Q(r[o2].closest?.("label")?.textContent) || Z(r[o2])
    : ee(e.$input)
      ? Z(e.$input)
      : "";
}
function en(e) {
  let t = Array.from(
      e.$input?.querySelectorAll?.(".cx-select-pill-name") || [],
    ),
    r = t
      .map((e2) => Q(e2.textContent))
      .filter(Boolean)
      .join(", ");
  return r || Z(e.$input);
}
function eo(e) {
  let t = Array.from(e.$input?.querySelectorAll?.("input, select") || []),
    r = t.map(Z).filter(Boolean);
  return r.length > 0 ? r.join(" / ") : Z(e.$input);
}
function ei(e) {
  return e.type === enums.FIELD_TYPE.CHECKBOX
    ? et(e)
    : e.type === enums.FIELD_TYPE.RADIOGROUP
      ? er(e)
      : e.type === enums.FIELD_TYPE.LISTBOX
        ? en(e)
        : e.type === enums.FIELD_TYPE.DATE
          ? eo(e)
          : Z(e.$input);
}
function getFormSnapshot(e = []) {
  let t = {};
  for (let r of e)
    r?.label &&
      r.type !== enums.FIELD_TYPE.EDUCATION &&
      r.type !== enums.FIELD_TYPE.EMPLOYMENT &&
      (t[r.label] = ei(r));
  return t;
}
function getSectionRowSnapshot(e) {
  let t = {};
  for (let r of e?.children || []) r?.label && (t[r.label] = ei(r));
  return t;
}
async function addAndGetEduRules(e = false) {
  await operations.addEducation();
  let t = null;
  for (let e2 = 0; e2 < E; e2++) {
    let r2 = xpath.getOrderedNodes(
        "//apply-flow-block | .//section[contains(@class, 'email-verification')]",
        document,
      ),
      n = null,
      i2 = Array.from(r2).filter((e3) => {
        let t2 = e3.getBoundingClientRect(),
          r3 = window.getComputedStyle(e3);
        return (
          t2.width > 0 &&
          t2.height > 0 &&
          "none" !== r3.display &&
          "hidden" !== r3.visibility &&
          "0" !== r3.opacity
        );
      });
    for (let e3 of i2) {
      let t2 = xpath.getFirstOrderedNode(
          ".//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h3 | .//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h2 | .//quick-email-verification-form",
          e3,
        ),
        r3 = xpath.getFirstOrderedNode(
          ".//*[contains(@class, 'apply-flow-agreements__row')]",
          e3,
        ),
        i3 = t2?.textContent?.trim();
      (!lodash.isEmpty(i3) || r3) && /education/i.test(i3) && (n = e3);
    }
    if (X((t = await G(n, enums.FIELD_TYPE.EDUCATION, "Education")))) break;
    e2 < E - 1 && (await delay.delay(x));
  }
  let r = !!t && X(t);
  if (
    (console.info(
      "[OracleCloud][Education] identity-check",
      JSON.stringify({
        autoClose: e,
        ready: r,
        fieldLabels: t?.children?.map((e2) => e2.label) || [],
      }),
    ),
    r ||
      console.warn("[OracleCloud][Education] timeline rules not ready", {
        autoClose: e,
      }),
    e)
  ) {
    let e2 = await operations.cancelEducation();
    if (!e2) throw Error("OracleCloud Education dialog did not close");
  }
  return r ? t : null;
}
async function addAndGetWorkRules(e = false) {
  await operations.addExperience();
  let t = null;
  for (let e2 = 0; e2 < E; e2++) {
    let r = xpath.getOrderedNodes(
        "//apply-flow-block | .//section[contains(@class, 'email-verification')]",
        document,
      ),
      n = null,
      i2 = Array.from(r).filter((e3) => {
        let t2 = e3.getBoundingClientRect(),
          r2 = window.getComputedStyle(e3);
        return (
          t2.width > 0 &&
          t2.height > 0 &&
          "none" !== r2.display &&
          "hidden" !== r2.visibility &&
          "0" !== r2.opacity
        );
      });
    for (let e3 of i2) {
      let t2 = xpath.getFirstOrderedNode(
          ".//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h3 | .//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h2 | .//quick-email-verification-form",
          e3,
        ),
        r2 = xpath.getFirstOrderedNode(
          ".//*[contains(@class, 'apply-flow-agreements__row')]",
          e3,
        ),
        i3 = t2?.textContent?.trim();
      (!lodash.isEmpty(i3) || r2) &&
        isOracleEmploymentSectionHeader(i3) &&
        (n = e3);
    }
    if (K((t = await G(n, enums.FIELD_TYPE.EMPLOYMENT, "Experience")))) break;
    e2 < E - 1 && (await delay.delay(x));
  }
  return (
    e && (await operations.cancelExperience()),
    t || {
      type: enums.FIELD_TYPE.EMPLOYMENT,
      label: "Experience",
      required: true,
      children: [],
      options: [],
    }
  );
}
async function ec(e, t = false, r = 10, n = false) {
  if (
    "undefined" == typeof document ||
    "function" != typeof document.getElementById
  )
    return [];
  let o2 = document.getElementById(`${e.id}-toggle-button`);
  if (!o2) return [];
  let i2 =
    "true" === e.getAttribute("aria-expanded") ||
    "true" === o2.getAttribute("aria-expanded");
  if (n && (i2 || "true" === e.getAttribute("aria-invalid"))) return [];
  i2 || (o2.click(), await new Promise((e2) => setTimeout(e2, n ? 50 : 350)));
  try {
    let i3 =
      e.getAttribute("aria-controls") || o2.getAttribute("aria-controls");
    if (!i3) return [];
    let a2 = [
        "[role='gridcell']",
        "[role='option']",
        "[role='listitem']",
        "li",
      ],
      l2 = /* @__PURE__ */ new Set(),
      s2 = (e2) => {
        for (let t2 of a2) {
          let r2 = e2.querySelectorAll(t2);
          if (0 !== r2.length) {
            for (let e3 of r2) {
              let t3 = A(e3.textContent);
              t3 &&
                "No Results" !== t3 &&
                "\u2014 Make a Selection \u2014" !== t3 &&
                l2.add(t3);
            }
            break;
          }
        }
      },
      u2 = null;
    for (
      let e2 = 0;
      e2 < r &&
      ((u2 = document.getElementById(i3)) &&
        "true" !== u2.getAttribute("aria-busy") &&
        s2(u2),
      !(l2.size > 0));
      e2++
    )
      e2 + 1 < r && (await delay.delay(n ? 50 : 100));
    if (t && u2 && l2.size < 200)
      for (let e2 of ed(u2)) {
        let t2 = e2.scrollTop,
          r2 = Math.max(0, e2.scrollHeight - e2.clientHeight),
          n2 = Math.max(100, Math.floor(0.8 * e2.clientHeight));
        for (let t3 = 0; t3 <= r2; t3 += n2)
          ((e2.scrollTop = Math.min(t3, r2)),
            e2.dispatchEvent(
              new Event("scroll", {
                bubbles: true,
              }),
            ),
            await delay.delay(100),
            s2(u2));
        (r2 > 0 &&
          e2.scrollTop !== r2 &&
          ((e2.scrollTop = r2),
          e2.dispatchEvent(
            new Event("scroll", {
              bubbles: true,
            }),
          ),
          await delay.delay(100),
          s2(u2)),
          (e2.scrollTop = t2),
          e2.dispatchEvent(
            new Event("scroll", {
              bubbles: true,
            }),
          ));
      }
    return [...l2];
  } finally {
    i2 || o2.click();
  }
}
function ed(e) {
  let t = [e, ...Array.from(e.querySelectorAll("*"))];
  return t.filter(
    (e2, r) =>
      t.indexOf(e2) === r &&
      "number" == typeof e2.scrollTop &&
      "number" == typeof e2.scrollHeight &&
      "number" == typeof e2.clientHeight &&
      e2.scrollHeight > e2.clientHeight + 20,
  );
}

export {
  addAndGetEduRules,
  addAndGetWorkRules,
  getFormSnapshot,
  getRules,
  getSectionRowSnapshot,
  getSubmitButtonText,
  isOracleEmploymentSectionHeader,
  isOracleLanguagesRule,
  isOracleSkillsRule,
};
