// @ts-nocheck

import * as educationItemTrace from "../education-item-trace.js"
import * as fieldLabels from "./field-labels.ts"
import * as race from "./race.ts"
import * as ruleOptions from "./rule-options.ts"
import * as selectLabels from "./select-labels.ts"
import * as snapshotAlignment from "./snapshot-alignment.ts"
import * as dom from "../../methods/dom.js"
import * as observer from "../../methods/observer.js"
import * as constants from "../../shared/constants.js"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as delayUtils from "../../../utils/delay.js"

export async function getRules() {
  const currentUrl = new URL(window.location.href)
  if (!currentUrl.hostname.startsWith("job-boards.")) {
    return await getLegacyRules()
  }
  return await getModernRules(document.body)
}
async function getLegacyRules() {
  const rules = []
  const standardLabels = xpath.getOrderedNodesSafe(`//div[contains(concat(' ', normalize-space(@class), ' '), ' field ') and not(contains(@class, 'hidden'))]/descendant::label[
      not(ancestor::label)
      and not(contains(@class, 'offscreen'))
      and normalize-space(.) != ''
      and not(contains(translate(parent::*/@style, ' ', ''), 'display:none'))
      and not((following-sibling::input | preceding-sibling::input)[@disabled])
      and not(ancestor::div[contains(concat(' ', normalize-space(@class), ' '), ' hidden ')])
      and not(ancestor::div[starts-with(@class, "field demographic_question")])
      and not(ancestor::*[@id='education_section' or contains(@class, 'education--container')])
      and not(ancestor::*[@id='employment_section' or contains(@class, 'employment--container')])
    ][1]`)
  for (const label of standardLabels) {
    const rule = getRuleFromLabel(label)
    if (rule) rules.push(rule)
  }
  const demographicQuestions = xpath.getOrderedNodesSafe(
    '//div[starts-with(@class, "field demographic_question")]',
  )
  for (const question of demographicQuestions) {
    const rule = getDemographicRule(question)
    if (rule) rules.push(rule)
  }
  const hasHispanicSelect = rules.some(
    (rule) =>
      rule.type === enums.FIELD_TYPE.SELECT &&
      rule.label.toLowerCase().includes("hispanic"),
  )
  if (hasHispanicSelect) {
    const hasRaceRule = rules.some((rule) =>
      race.isGreenhouseRaceLabel(rule.label),
    )
    if (!hasRaceRule) {
      const raceContainer = xpath.getFirstOrderedNodeSafe(
        "//div[@id='race_dropdown_container'] | //div[contains(@class, 'field')][.//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'race')]]",
        document,
      )
      if (raceContainer) {
        const label = xpath.getFirstOrderedNodeSafe(
          ".//label[not(contains(@class, 'offscreen'))]",
          raceContainer,
        )
        const select = xpath.getFirstOrderedNodeSafe(
          ".//select",
          raceContainer,
        )
        if (label && select) {
          const options = xpath.getOrderedNodesSafe("./option", select)
          rules.push({
            label: getLabelText(label),
            $label: label,
            required: select.getAttribute("aria-required") === "true",
            type: enums.FIELD_TYPE.SELECT,
            $input: select,
            options: options
              .map((option) => option.textContent?.trim() ?? "")
              .filter(
                (option) =>
                  !["", "--", "please select"].includes(option.toLowerCase()),
              ),
          })
        }
      }
    }
  }
  rules.push(...(await getEducationRules()))
  rules.push(...(await getExperienceRules()))
  return rules
}

export function getEducationRules() {
  let e = xpath.getFirstOrderedNodeSafe(
      ".//div[(@id='education_section' or contains(@class, 'education--container'))]", document),
    t = [];
  if (!e) return t;
  let r = xpath.getOrderedNodesSafe(`.//div[
      (
        (contains(@class, 'education') and not(contains(@class, 'container')))
        or contains(@class, 'education--form')
      )
      and not(ancestor::div[
        (contains(@class, 'education') and not(contains(@class, 'container')))
        or contains(@class, 'education--form')
      ])
    ]`, e),
    n = r && r.length > 0 ? r : [e];
  for (let e = 0; e < n.length; e++) {
    let r = n[e],
      o = xpath.getOrderedNodesSafe(
        ".//label[not(ancestor::label) and not(contains(@class, 'offscreen')) and normalize-space(.) != '' and not(contains(translate(parent::*/@style, ' ', ''), 'display:none')) and not((following-sibling::input | preceding-sibling::input)[@disabled])]",
        r),
      i = [];
    if (o.length > 0)
      for (let e of o) {
        let t = getRuleFromLabel(e);
        t && i.push(t)
      }
    let a = xpath.getFirstOrderedNodeSafe(
        ".//input[contains(@class, 'start-date-month')] | .//input[contains(@class, 'start-date') and contains(@class, 'month')]",
        r),
      u = null;
    if (a) {
      let e = a.closest("fieldset");
      e && (u = xpath.getFirstOrderedNodeSafe(".//legend//label | .//label", e)), u || (u = xpath.getFirstOrderedNodeSafe(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]",
        a))
    }
    if (a && !i.some(e => e.label.toLowerCase().includes("start date month"))) {
      let e = a.closest(".select__container");
      e ? i.push({
        type: enums.FIELD_TYPE.SEARCH,
        label: "Start date month",
        $label: u || a,
        $input: e,
        required: "true" === a.getAttribute("aria-required")
      }) : i.push({
        type: enums.FIELD_TYPE.TEXT,
        label: "Start date month",
        $label: u || a,
        $input: a,
        required: "true" === a.getAttribute("aria-required")
      })
    }
    let c = xpath.getFirstOrderedNodeSafe(
        ".//input[contains(@class, 'start-date-year')] | .//input[contains(@class, 'start-date') and contains(@class, 'year')]",
        r),
      d = null;
    if (c) {
      let e = c.closest("fieldset");
      e && (d = xpath.getFirstOrderedNodeSafe(".//legend//label | .//label", e)), d || (d = xpath.getFirstOrderedNodeSafe(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]",
        c))
    }
    c && !i.some(e => e.label.toLowerCase().includes("start date year")) && i.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Start date year",
      $label: d || c,
      $input: c,
      required: "true" === c.getAttribute("aria-required")
    });
    let f = xpath.getFirstOrderedNodeSafe(
        ".//input[contains(@class, 'end-date-month')] | .//input[contains(@class, 'end-date') and contains(@class, 'month')]",
        r),
      m = null;
    if (f) {
      let e = f.closest("fieldset");
      e && (m = xpath.getFirstOrderedNodeSafe(".//legend//label | .//label", e)), m || (m = xpath.getFirstOrderedNodeSafe(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]",
        f))
    }
    if (f && !i.some(e => e.label.toLowerCase().includes("end date month"))) {
      let e = f.closest(".select__container");
      e ? i.push({
        type: enums.FIELD_TYPE.SEARCH,
        label: "End date month",
        $label: m || f,
        $input: e,
        required: "true" === f.getAttribute("aria-required")
      }) : i.push({
        type: enums.FIELD_TYPE.TEXT,
        label: "End date month",
        $label: m || f,
        $input: f,
        required: "true" === f.getAttribute("aria-required")
      })
    }
    let h = xpath.getFirstOrderedNodeSafe(
        ".//input[contains(@class, 'end-date-year')] | .//input[contains(@class, 'end-date') and contains(@class, 'year')]",
        r),
      g = null;
    if (h) {
      let e = h.closest("fieldset");
      e && (g = xpath.getFirstOrderedNodeSafe(".//legend//label | .//label", e)), g || (g = xpath.getFirstOrderedNodeSafe(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]",
        h))
    }
    if (h && !i.some(e => e.label.toLowerCase().includes("end date year")) && i.push({
        type: enums.FIELD_TYPE.TEXT,
        label: "End date year",
        $label: g || h,
        $input: h,
        required: "true" === h.getAttribute("aria-required")
      }), i.length > 0) {
      let e = {
        type: enums.FIELD_TYPE.EDUCATION,
        label: "Education",
        children: i,
        options: ruleOptions.buildGreenhouseEducationOptionDescriptors(i),
        required: false
      };
      t.push(e)
    }
  }
  return t
}

export function getExperienceRules() {
  let e = xpath.getFirstOrderedNodeSafe(
      ".//div[(@id='employment_section' or contains(@class, 'employment--container'))]", document),
    t = [];
  if (!e) return t;
  let r = xpath.getOrderedNodesSafe(`.//div[
      (contains(@class, 'employment') and not(contains(@class, 'container')))
      or contains(@class, 'employment-form')
    ]`, e),
    n = r && r.length > 0 ? r : [e];
  for (let e of n) {
    let r = xpath.getOrderedNodesSafe(
        ".//label[not(ancestor::label) and not(contains(@class, 'offscreen')) and normalize-space(.) != '' and not(contains(translate(parent::*/@style, ' ', ''), 'display:none')) and not((following-sibling::input | preceding-sibling::input)[@disabled])]",
        e),
      n = [];
    if (r.length > 0)
      for (let e of r) {
        let t = getRuleFromLabel(e);
        t && n.push(t)
      }
    let o = xpath.getFirstOrderedNodeSafe(
        ".//input[contains(@class, 'start-date-month')] | .//input[contains(@class, 'start-date') and contains(@class, 'month')]",
        e),
      i = null;
    if (o) {
      let e = o.closest("fieldset");
      e && (i = xpath.getFirstOrderedNodeSafe(".//legend//label | .//label", e)), i || (i = xpath.getFirstOrderedNodeSafe(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]",
        o))
    }
    o && !n.some(e => e.label.toLowerCase().includes("start date month")) && n.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Start date month",
      $label: i || o,
      $input: o,
      required: true
    });
    let a = xpath.getFirstOrderedNodeSafe(
        ".//input[contains(@class, 'start-date-year')] | .//input[contains(@class, 'start-date') and contains(@class, 'year')]",
        e),
      u = null;
    if (a) {
      let e = a.closest("fieldset");
      e && (u = xpath.getFirstOrderedNodeSafe(".//legend//label | .//label", e)), u || (u = xpath.getFirstOrderedNodeSafe(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]",
        a))
    }
    a && !n.some(e => e.label.toLowerCase().includes("start date year")) && n.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "Start date year",
      $label: u || a,
      $input: a,
      required: true
    });
    let c = xpath.getFirstOrderedNodeSafe(
        ".//input[contains(@class, 'end-date-month')] | .//input[contains(@class, 'end-date') and contains(@class, 'month')]",
        e),
      d = null;
    if (c) {
      let e = c.closest("fieldset");
      e && (d = xpath.getFirstOrderedNodeSafe(".//legend//label | .//label", e)), d || (d = xpath.getFirstOrderedNodeSafe(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]",
        c))
    }
    c && !n.some(e => e.label.toLowerCase().includes("end date month")) && n.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "End date month",
      $label: d || c,
      $input: c,
      required: true
    });
    let f = xpath.getFirstOrderedNodeSafe(
        ".//input[contains(@class, 'end-date-year')] | .//input[contains(@class, 'end-date') and contains(@class, 'year')]",
        e),
      p = null;
    if (f) {
      let e = f.closest("fieldset");
      e && (p = xpath.getFirstOrderedNodeSafe(".//legend//label | .//label", e)), p || (p = xpath.getFirstOrderedNodeSafe(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]",
        f))
    }
    f && !n.some(e => e.label.toLowerCase().includes("end date year")) && n.push({
      type: enums.FIELD_TYPE.TEXT,
      label: "End date year",
      $label: p || f,
      $input: f,
      required: true
    });
    let m = xpath.getFirstOrderedNodeSafe(
        ".//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'current')]",
        e),
      h = null;
    if (m && (h = xpath.getFirstOrderedNodeSafe(".//input[@type='checkbox']", m)), h || (h = xpath.getFirstOrderedNodeSafe(
        ".//input[@type='checkbox' and (contains(@id, 'current') or contains(@id, 'employment_current') or contains(@name, 'current'))]",
        e)), h && !n.some(e => e.label.toLowerCase().includes("current")) && n.push({
        type: enums.FIELD_TYPE.CHECKBOX,
        label: "Current role",
        $label: m || h,
        $input: h,
        $checkboxs: [h],
        options: ["True", "False"],
        required: false
      }), n.length > 0) {
      let e = {
        type: enums.FIELD_TYPE.EMPLOYMENT,
        label: "employment",
        children: n,
        options: [...n.map(e => ({
          type: e.type,
          label: e.label,
          options: e.options || []
        }))],
        required: false
      };
      t.push(e)
    }
  }
  return t
}

function getRuleFromLabel(e) {
  let t = [E, x, A, C];
  for (let r of t) {
    let t = r(e);
    if (t) return t
  }
  return null
}

function hasRequiredMarker(e) {
  return null != xpath.getFirstOrderedNodeSafe(".//*[text()='*'] | .//*[@class='asterisk']", e)
}

function getCheckboxRule(e) {
  let t = "LEGEND" === e.tagName ? e.parentElement : e.closest("fieldset, div.field") || e
    .parentElement;
  if (!t) return null;
  let r = xpath.getOrderedNodesSafe(".//input[@type='checkbox']", t),
    n = t.contains(e) && r.length > 1;
  if (n) {
    let t = [],
      n = [];
    for (let e of r) {
      let r = xpath.getFirstOrderedNodeSafe(`parent::label | //label[@for='${e.id}']`, e);
      r && r.textContent && (t.push(r.textContent.trim()), n.push(e))
    }
    if (t.length > 0) return {
      label: getLabelText(e),
      $label: e,
      type: enums.FIELD_TYPE.CHECKBOX,
      required: hasRequiredMarker(e),
      $checkboxs: n,
      options: t,
      $input: n[0]
    }
  }
  let o = xpath.getFirstOrderedNodeSafe(".//input[@type='checkbox']", e);
  if (o) {
    let t = getLabelText(e),
      r = xpath.getFirstOrderedNodeSafe(`parent::label | //label[@for='${o.id}']`, o);
    return r && r.textContent && (t = r.textContent.trim()), {
      label: getLabelText(e),
      $label: e,
      type: enums.FIELD_TYPE.CHECKBOX,
      required: hasRequiredMarker(e),
      $checkboxs: [o],
      options: [t],
      $input: o
    }
  }
  return null
}

function getSelectRule(e) {
  let t = xpath.getFirstOrderedNodeSafe(
    ".//select[not(ancestor::select)] | following-sibling::select", e);
  if (!t) {
    let r = e.closest("div.field") || e.parentElement;
    r && (t = xpath.getFirstOrderedNodeSafe(".//select[not(ancestor::select)]", r))
  }
  if (t || (t = xpath.getFirstOrderedNodeSafe(
        "descendant::select | following-sibling::select | ancestor::div[@class='field']//select", e
        )), t) {
    let r = xpath.getOrderedNodesSafe("./option", t);
    return {
      label: getLabelText(e),
      $label: e,
      required: hasRequiredMarker(e),
      type: enums.FIELD_TYPE.SELECT,
      $input: t,
      options: r.map(e => e.textContent?.trim() ?? "").filter(e => !["", "--", "please select"]
        .includes(e.toLowerCase()))
    }
  }
  let r = e.closest("fieldset, div.field, div.demographic_question") || e.parentElement,
    n = xpath.getOrderedNodesSafe(".//input[@type='radio']", r);
  if (r.contains(e) && n.length > 1) {
    let t = [],
      r = [];
    for (let e of n) {
      let n = xpath.getFirstOrderedNodeSafe(`parent::label | //label[@for='${e.id}']`, e);
      n && n.textContent && (t.push(n.textContent.trim()), r.push(e))
    }
    if (t.length > 0) return {
      label: getLabelText(e),
      $label: e,
      required: hasRequiredMarker(e),
      type: enums.FIELD_TYPE.SELECT,
      $input: r[0],
      $radios: r,
      options: t
    }
  }
  let o = xpath.getFirstOrderedNodeSafe(
    "following-sibling::*[contains(@class, 'select2-container')] | .//*[contains(@class, 'select2-container')]",
    e);
  if (o) {
    let t = xpath.getFirstOrderedNodeSafe("following-sibling::select", o);
    if (t || (t = xpath.getFirstOrderedNodeSafe(".//select", e)), !t) {
      let r = e.closest("div.field") || e.parentElement;
      r && (t = xpath.getFirstOrderedNodeSafe(".//select", r))
    }
    if (t) {
      let r = xpath.getOrderedNodesSafe("./option", t);
      return {
        label: getLabelText(e),
        $label: e,
        required: hasRequiredMarker(e),
        type: enums.FIELD_TYPE.SELECT,
        $input: t,
        options: r.map(e => e.textContent?.trim() ?? "").filter(e => !["", "--", "please select"]
          .includes(e.toLowerCase()))
      }
    }
    return {
      label: getLabelText(e),
      $label: e,
      required: hasRequiredMarker(e),
      type: enums.FIELD_TYPE.SELECT,
      $input: o,
      options: []
    }
  }
  return null
}

function getTextRule(e) {
  let t = `
    following-sibling::input[not(@type='hidden' or @type='checkbox' or @type='radio' or @type='file' or @type='submit' or @type='button')] |
    following-sibling::textarea |
    .//input[not(@type='hidden' or @type='checkbox' or @type='radio' or @type='file' or @type='submit' or @type='button')] |
    .//textarea
  `,
    r = xpath.getFirstOrderedNodeSafe(t, e);
  return r ? {
    label: getLabelText(e),
    $label: e,
    required: hasRequiredMarker(e),
    type: enums.FIELD_TYPE.TEXT,
    $input: r
  } : null
}

export function getAutocompleteRule(labelElement) {
  const normalizedText = labelElement.innerText.trim().toLowerCase()
  const excludedLabels = [
    "where is your permanent (city, state) work location?",
  ]
  if (excludedLabels.includes(getLabelText(labelElement).toLowerCase())) {
    return null
  }
  if (normalizedText.includes("location")) {
    const inputContainer = xpath.getFirstOrderedNodeSafe(
      "following-sibling::*",
      labelElement,
    )
    const isAutocomplete =
      inputContainer &&
      (inputContainer.querySelector(
        '.select__container, .select2-container, [role="combobox"], [role="listbox"]',
      ) ||
        inputContainer.classList.contains("select__container") ||
        inputContainer.classList.contains("select2-container") ||
        inputContainer.getAttribute("role") === "combobox")
    return isAutocomplete ? {
      label: getLabelText(labelElement),
      $label: labelElement,
      type: enums.FIELD_TYPE.SEARCH,
      required: hasRequiredMarker(labelElement),
      $input: inputContainer,
    } : null
  }
  return null
}

function getDemographicRule(e) {
  let t = Array.from(e.childNodes).filter(e => e.nodeType === Node.TEXT_NODE && e.textContent
  ?.trim()).map(e => e.textContent?.trim()).join(" ").replace(/\*$/, "").trim();
  if (!t) return null;
  let r = xpath.getOrderedNodesSafe(".//label", e),
    n = r.map(e => e.innerText.trim()).filter(Boolean);
  if (0 === n.length) return null;
  let o = xpath.getFirstOrderedNodeSafe(".//input[@type='radio' or @type='checkbox']", e);
  if (!o) return null;
  let i = "radio" === o.type ? enums.FIELD_TYPE.SELECT : enums.FIELD_TYPE.CHECKBOX;
  return {
    label: t,
    $label: e,
    type: i,
    required: hasRequiredMarker(e),
    options: n,
    $checkboxs: r.map(e => xpath.getFirstOrderedNodeSafe(".//input[@type='checkbox']", e)) || [],
    $input: o
  }
}

function getLabelText(e) {
  let t = "";
  for (let r of e.childNodes) r.nodeType === Node.TEXT_NODE && (t += r.textContent?.trim() ?? "");
  return t || e.innerText.trim()
}
async function getModernRules(e) {
  let t = [],
    r = xpath.getOrderedNodesSafe(`.//div[contains(@class, 'text-input-wrapper')
     and not(ancestor::div[contains(@class, 'education--container')])
     and not(ancestor::div[contains(@class, 'employment--container')])]`, e),
    n = getTextInputRules(r);
  t.push(...n);
  let o = getStandaloneCheckboxRules(e);
  t.push(...o);
  let i = xpath.getOrderedNodesSafe(`.//div[contains(@class, 'select__container')
    and not(ancestor::div[contains(@class, 'education--container')])
    and not(ancestor::div[contains(@class, 'employment--container')])]`, e),
    a = await getSearchRules(i, false, true);
  t.push(...a);
  let u = xpath.getFirstOrderedNodeSafe(
    ".//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'hispanic')]",
    e);
  if (u) {
    let e = t.find(e => race.isGreenhouseRaceLabel(e.label));
    if (e) {
      let t = e;
      t.options && 0 !== t.options.length || (e.options = race.RACE_FALLBACK_OPTIONS)
    } else t.push({
      label: "Please identify your race",
      required: false,
      type: enums.FIELD_TYPE.SEARCH,
      options: race.RACE_FALLBACK_OPTIONS
    })
  }
  let c = await getEduRule(false, true);
  c.length > 0 && t.push(...c);
  let d = await getEmploymentRule(false, true);
  return d.length > 0 && t.push(...d), t
}

function getStandaloneCheckboxRules(e) {
  let t = [],
    r = new Set,
    n = xpath.getOrderedNodesSafe(`.//label[
      not(ancestor::div[contains(@class, 'education--container')])
      and not(ancestor::div[contains(@class, 'employment--container')])
      and not(ancestor::div[contains(@class, 'text-input-wrapper')])
      and not(ancestor::div[contains(@class, 'select__container')])
      and (
        following-sibling::input[@type='checkbox']
        or parent::div//input[@type='checkbox']
        or parent::label//input[@type='checkbox']
        or .//input[@type='checkbox']
      )
    ] | .//fieldset[contains(@class, 'checkbox')]/legend`, e);
  for (let e of n) {
    let n = getCheckboxRule(e);
    if (n) {
      let e = (n.$checkboxs || []).map(e => e.id).filter(Boolean),
        o = e.some(e => r.has(e));
      o || t.some(e => e.label === n.label) || (t.push(n), e.forEach(e => r.add(e)))
    }
  }
  return t
}
export async function getEduRule(loadOptions = false, firstOnly = false) {
  let r = xpath.getFirstOrderedNodeSafe(".//div[contains(@class, 'education--container')]",
    document);
  if (r) {
    let n = xpath.getOrderedNodesSafe(".//div[contains(@class, 'education--form')]", r);
    firstOnly && (n = n?.slice(0, 1) || []);
    let o = [];
    for (let r of n) {
      let n = [],
        i = xpath.getOrderedNodesSafe(".//div[contains(@class, 'text-input-wrapper')]", r),
        a = getTextInputRules(i);
      a.length > 0 && n.push(...a);
      let u = xpath.getOrderedNodesSafe(".//div[contains(@class, 'select__container')]", r),
        c = await getSearchRules(u, loadOptions, firstOnly);
      if (c.length > 0 && n.push(...c), n.length > 0) {
        let e = {
          type: enums.FIELD_TYPE.EDUCATION,
          label: "Education",
          children: n,
          options: ruleOptions.buildGreenhouseEducationOptionDescriptors(n),
          required: false
        };
        o.push(e)
      }
    }
    return o
  }
  return []
}
export async function getEmploymentRule(loadOptions = false, firstOnly = false) {
  let r = xpath.getFirstOrderedNodeSafe(".//div[contains(@class, 'employment--container')]",
    document);
  if (r) {
    let n = xpath.getOrderedNodesSafe(".//div[contains(@class, 'employment-form')]", r);
    firstOnly && (n = n?.slice(0, 1) || []);
    let o = [];
    for (let r of n) {
      let n = [],
        i = xpath.getOrderedNodesSafe(".//div[contains(@class, 'text-input-wrapper')]", r),
        a = getTextInputRules(i);
      a.length > 0 && n.push(...a);
      let u = xpath.getOrderedNodesSafe(".//div[contains(@class, 'select__container')]", r),
        c = await getSearchRules(u, loadOptions, firstOnly);
      c.length > 0 && n.push(...c);
      let d = xpath.getFirstOrderedNodeSafe(
          ".//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'current')]",
          r),
        f = null;
      d && (f = xpath.getFirstOrderedNodeSafe(".//input[@type='checkbox']", d)), f || (f = xpath.getFirstOrderedNodeSafe(
        ".//input[@type='checkbox' and (contains(@id, 'current') or contains(@id, 'employment_current') or contains(@name, 'current'))]",
        r)), f && !n.some(e => e.label.toLowerCase().includes("current")) && n.push({
        type: enums.FIELD_TYPE.CHECKBOX,
        label: "Current role",
        $label: d || f,
        $input: f,
        $checkboxs: [f],
        options: ["True", "False"],
        required: false
      });
      let p = xpath.getOrderedNodesSafe(".//div[contains(@class, 'checkbox')]", r);
      if (p && p.length > 0)
        for (let e of p) {
          let t = xpath.getFirstOrderedNodeSafe(".//label", e);
          if (t) {
            let e = t.textContent?.toLowerCase().trim() || "";
            if (e.includes("current")) continue;
            let r = getCheckboxRule(t);
            r && n.push(r)
          }
        }
      if (n.length > 0) {
        let e = {
          type: enums.FIELD_TYPE.EMPLOYMENT,
          label: "Employment",
          children: n,
          options: [...n.map(e => ({
            type: e.type,
            label: e.label,
            options: e.options || []
          }))],
          required: false
        };
        o.push(e)
      }
    }
    return o
  }
  return []
}

function getTextInputRules(e) {
  let t = [];
  for (let r of e) {
    let e = xpath.getFirstOrderedNodeSafe(".//label", r),
      n = e?.textContent?.trim() ?? "",
      o = /[*\uff0a]\s*$/.test(n);
    n.replace(/[*\uff0a]\s*$/, "").trim();
    let i = xpath.getFirstOrderedNodeSafe(".//input | .//textarea", r);
    if (i) {
      let r = fieldLabels.normalizeGreenhouseFieldLabel({
        rawLabel: n,
        inputId: i.getAttribute("id"),
        inputAriaLabel: i.getAttribute("aria-label")
      });
      t.push({
        label: r || "",
        $label: e,
        required: o,
        type: enums.FIELD_TYPE.TEXT,
        $input: i
      })
    }
  }
  return t
}
async function getSearchRules(e, t = false, r = true) {
  let n = [];
  for (let c of e) {
    let e = xpath.getFirstOrderedNodeSafe(".//label", c),
      d = e?.getAttribute("for"),
      f = e?.textContent?.trim() ?? "",
      p = /[*\uff0a]\s*$/.test(f),
      h = f.replace(/[*\uff0a]\s*$/, "").trim(),
      g = selectLabels.normalizeGreenhouseSelectRuleLabel(h, c);
    if (null === g) continue;
    if (!r) {
      n.push({
        label: g || "",
        $label: e,
        required: p,
        type: enums.FIELD_TYPE.SEARCH,
        $input: c,
        options: []
      });
      continue
    }
    let b = d ? `react-select-${d}-listbox` : "",
      y = xpath.getFirstOrderedNodeSafe(".//input[contains(@class, 'select__input')]", c),
      v = "school" === g.toLowerCase() || "discipline" === g.toLowerCase();
    if (y && !v) {
      dom.triggerEvents(y, ["focus", "mousedown", "mouseup"]);
      let r = null;
      if (t) await delayUtils.delay(3e3);
      else {
        let e = await observer.waitForCondition(() => null !== (r = b ? document.getElementById(b) :
          xpath.getFirstOrderedNodeSafe(".//div[contains(@class, 'select__menu-list')]",
            document)), {
          timeout: 1e3,
          interval: 50,
          observeTarget: document.body
        });
        e || (await delayUtils.delay(200), r = b ? document.getElementById(b) : xpath.getFirstOrderedNodeSafe(".//div[contains(@class, 'select__menu-list')]",
          document))
      }
      if (!r && b && (r = document.getElementById(b)), r || (r = xpath.getFirstOrderedNodeSafe(
          ".//div[contains(@class, 'select__menu-list')]", document)), r) {
        let e = r;
        await observer.waitForCondition(() => e.querySelectorAll(
          `.${constants.GREENHOUSE_V2_REACT_SELECT_OPTION_CLASS}`).length > 0, {
          timeout: 2e3,
          interval: 100,
          observeTarget: e
        })
      }
      let d = xpath.getOrderedNodesSafe(
          `.//div[contains(@class, '${constants.GREENHOUSE_V2_REACT_SELECT_OPTION_CLASS}')]`, r),
        f = d.map(e => e.textContent?.trim() ?? ""),
        m = new KeyboardEvent("keydown", {
          key: "Escape",
          code: "Escape",
          keyCode: 27,
          bubbles: true,
          cancelable: true
        });
      if (y.dispatchEvent(m), await delayUtils.delay(50), document.querySelector(".select__menu")) {
        let e = c.querySelector(".select__indicators");
        e && (dom.triggerEvents(e, ["mousedown", "click"]), await delayUtils.delay(50))
      }
      document.querySelector(".select__menu") && (y.blur(), await delayUtils.delay(50)), n.push({
        label: g || "",
        $label: e,
        required: p,
        type: enums.FIELD_TYPE.SEARCH,
        $input: c,
        options: f
      })
    } else y && n.push({
      label: g || "",
      $label: e,
      required: p,
      type: enums.FIELD_TYPE.SEARCH,
      $input: c,
      options: []
    })
  }
  return n
}
export async function getFormSnapshot(rules, _context) {
  const snapshot = {};
  for (const rule of rules)
    if (rule && rule.type) {
      if (rule.type === enums.FIELD_TYPE.TEXT) {
        let input = rule.$input;
        if (!input) continue;
        if (input.classList.contains("iti__search-input")) {
          const phoneContainer = input.closest(".iti"),
            phoneInput = phoneContainer?.querySelector("input[type='tel']");
          phoneInput && (input = phoneInput)
        }
        snapshot[rule.label] = input.value.trim()
      }
      if (rule.type === enums.FIELD_TYPE.SELECT) {
        const input = rule.$input;
        if (!input) continue;
        if ("SELECT" === input.tagName) {
          snapshot[rule.label] =
            input.options[input.selectedIndex]?.text?.trim() || ""
        } else {
          const reactValue = input.querySelector(".select__single-value")?.textContent,
            select2Value = input.querySelector(".select2-chosen")?.textContent;
          snapshot[rule.label] = (reactValue || select2Value || "").trim()
        }
      }
      if (rule.type === enums.FIELD_TYPE.CHECKBOX) {
        if (!rule.$checkboxs || rule.$checkboxs.length === 0) continue;
        const checkedLabels = [];
        for (const checkbox of rule.$checkboxs)
          if (checkbox.checked) {
            const label = xpath.getFirstOrderedNodeSafe(
              `parent::label | //label[@for='${checkbox.id}']`,
              checkbox,
            );
            label && label.textContent && checkedLabels.push(label.textContent.trim())
          } snapshot[rule.label] = checkedLabels
      }
      if (rule.type === enums.FIELD_TYPE.SEARCH) {
        if (!rule.$input) continue;
        const singleValue = xpath.getFirstOrderedNodeSafe(
          ".//div[contains(@class, 'select__single-value')]",
          rule.$input,
        );
        if (singleValue) {
          snapshot[rule.label] = (singleValue?.textContent?.trim() || "").replace(/\s+/g, " ");
          continue
        }
        const selectedValues = xpath.getOrderedNodesSafe(
          ".//div[contains(@class, 'select__multi-value__label')]",
          rule.$input,
        );
        if (selectedValues && selectedValues.length > 0) {
          snapshot[rule.label] = selectedValues
            .map((value) => value?.textContent?.trim())
            .filter((value) => !!value);
          continue
        }
      }
    } return snapshot
}

function normalizeSnapshotLabel(e) {
  return e ? e.replace(/\*/g, "").trim().replace(/\s+/g, " ") : ""
}

function getEducationSnapshotIndex(e, t, r) {
  if (!r.markEducationRows && !r.includeEducationSnapshotIndex) return null;
  let n = e.getAttribute(snapshotAlignment.GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE);
  if (r.markEducationRows && (n = String(t), e.setAttribute(snapshotAlignment
      .GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE, n)), !r.includeEducationSnapshotIndex || !n)
    return null;
  let o = Number(n);
  return Number.isInteger(o) && o >= 0 ? o : null
}

export function getEduSnapshot(e = {}) {
  let t = [],
    r = document.querySelector("#education_section");
  if (r) {
    let n = r.querySelectorAll(".education");
    n.forEach((r, n) => {
      let o = {},
        i = getEducationSnapshotIndex(r, n, e),
        a = educationItemTrace.getEducationTraceForRow(r, {
          attributes: snapshotAlignment.GREENHOUSE_EDUCATION_TRACE_ATTRIBUTES,
          includeEducationTrace: e.includeEducationTrace,
          markEducationRows: e.markEducationRows,
          runId: e.educationTraceRunId,
          snapshotIndex: n
        }),
        l = e => {
          let t = r.querySelector(e);
          if (t) {
            let e = t.getAttribute("id") || "";
            e.startsWith("s2id_") && (e = e.replace(/^s2id_/, ""));
            let n = r.querySelector(`label[for="${e}"]`),
              i = normalizeSnapshotLabel(n?.textContent);
            if (i) {
              let e = t.querySelector(".select2-chosen"),
                r = "";
              e ? (r = e.textContent?.trim() || "").startsWith("Select a") && (r = "") :
                t instanceof HTMLInputElement && (r = t.value), o[i] = r
            }
          }
        };
      l(".school-name"), l(".degree"), l(".discipline");
      let s = r.querySelector(".field:has(.start-date-month) legend label");
      if (s) {
        let e = normalizeSnapshotLabel(s.textContent);
        if (e) {
          let t = r.querySelector(".start-date-month"),
            n = r.querySelector(".start-date-year"),
            i = "";
          (t || n) && "/" == (i = `${t?.value||""}/${n?.value||""}`) && (i = ""), o[e] = i
        }
      }
      let u = r.querySelector(".field:has(.end-date-month) legend label");
      if (u) {
        let e = normalizeSnapshotLabel(u.textContent);
        if (e) {
          let t = r.querySelector(".end-date-month"),
            n = r.querySelector(".end-date-year"),
            i = "";
          (t || n) && "/" == (i = `${t?.value||""}/${n?.value||""}`) && (i = ""), o[e] = i
        }
      }
      Object.keys(o).length > 0 && (null !== i && (o[snapshotAlignment
          .GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_KEY] = i), a && (o[educationItemTrace.EDUCATION_TRACE_KEY] = a),
        t.push(o))
    })
  }
  let n = document.querySelector(".education--container");
  if (n) {
    let r = n.querySelectorAll(".education--form");
    r.forEach((r, n) => {
      let o = {},
        i = getEducationSnapshotIndex(r, n, e),
        a = educationItemTrace.getEducationTraceForRow(r, {
          attributes: snapshotAlignment.GREENHOUSE_EDUCATION_TRACE_ATTRIBUTES,
          includeEducationTrace: e.includeEducationTrace,
          markEducationRows: e.markEducationRows,
          runId: e.educationTraceRunId,
          snapshotIndex: n
        }),
        l = e => {
          let t = r.querySelector(`label[id^="${e}"]`);
          if (!t) return;
          let n = normalizeSnapshotLabel(t?.textContent);
          if (!n) return;
          let i = "",
            a = t.closest(".select__container");
          if (a) i = a.querySelector(".select__single-value")?.textContent?.trim() || "";
          else {
            let e = t.getAttribute("for");
            if (e) {
              let t = r.querySelector(`#${CSS.escape(e)}`);
              t && (i = t.value || "")
            }
          }
          n && (o[n] = i)
        };
      l("school"), l("degree"), l("discipline"), l("start-month"), l("start-year"), l(
        "end-month"), l("end-year"), Object.keys(o).length > 0 && (null !== i && (o[snapshotAlignment
          .GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_KEY] = i), a && (o[educationItemTrace.EDUCATION_TRACE_KEY] = a),
        t.push(o))
    })
  }
  return t
}

export function getEmploymentSnapshot() {
  let e = [],
    t = document.querySelector("#employment_section");
  if (t) {
    let r = t.querySelectorAll(".employment");
    r.forEach(t => {
      let r = {},
        n = (e, n) => {
          let o = t.querySelector(`input[id*="${e}"]`);
          if (o) {
            let e = o.id,
              i = t.querySelector(`label[for="${e}"]`),
              a = normalizeSnapshotLabel(i?.textContent) || n;
            r[a] = o.value
          }
        };
      n("company_name", "Company Name"), n("title", "Title");
      let o = t.querySelector(".start-date-month"),
        i = t.querySelector(".start-date-year");
      if (o || i) {
        let e = "Start Date",
          t = o?.parentElement?.querySelector("legend label") || i?.parentElement
          ?.querySelector("legend label");
        t && (e = normalizeSnapshotLabel(t.textContent) || e), r[e] = `${o?.value||""}/${i?.value||""}`
      }
      let a = t.querySelector(".end-date-month"),
        l = t.querySelector(".end-date-year");
      if (a || l) {
        let e = "End Date",
          t = a?.parentElement?.querySelector("legend label") || l?.parentElement
          ?.querySelector("legend label");
        t && (e = normalizeSnapshotLabel(t.textContent) || e), r[e] = `${a?.value||""}/${l?.value||""}`
      }
      let s = t.querySelector('input[id*="employment_current"]');
      if (s) {
        let e = s.id,
          n = t.querySelector(`label.current[for="${e}"]`) || t.querySelector(
            `label[for="${e}"]`),
          o = normalizeSnapshotLabel(n?.textContent) || "Current Role",
          i = "End Date" === o ? "Current Role" : o;
        r[i] = s.checked
      }
      Object.keys(r).length > 0 && e.push(r)
    })
  }
  let r = document.querySelector(".employment--container");
  if (r) {
    let t = r.querySelectorAll(".employment-form");
    t.forEach(t => {
      let r = {},
        n = (e, n) => {
          let o = t.querySelector(`label[id^="${e}"]`),
            i = normalizeSnapshotLabel(o?.textContent) || n;
          if (o || n) {
            let a = "";
            if (e.includes("current-role")) {
              let i = t.querySelector(`input[id^="${e}"]`);
              if (i && (a = i.checked, !o)) {
                let e = t.querySelector(`label[for="${i.id}"]`);
                if (e) {
                  r[normalizeSnapshotLabel(e.textContent) || n] = a;
                  return
                }
              }
            } else if (o) {
              let e = o.closest(".select__container");
              if (e)(a = e.querySelector(".select__single-value")?.textContent?.trim() || "")
                .startsWith("Select a") && (a = "");
              else {
                let e = o.getAttribute("for");
                if (e) {
                  let r = t.querySelector(`#${e}`);
                  a = r?.value || ""
                }
              }
            }
            r[i] = a
          }
        };
      n("company-name", "Company Name"), n("title", "Title");
      let o = t.querySelector('label[id^="start-date-month"]'),
        i = o?.closest(".select__container")?.querySelector(".select__single-value")
        ?.textContent?.trim() || "",
        a = t.querySelector('label[id^="start-date-year"]'),
        l = a ? t.querySelector(`#${a.getAttribute("for")}`) : null,
        s = l?.value || "";
      (o || a) && (r["Start Date"] = `${i}/${s}`);
      let u = t.querySelector('label[id^="end-date-month"]'),
        c = u?.closest(".select__container")?.querySelector(".select__single-value")
        ?.textContent?.trim() || "",
        d = t.querySelector('label[id^="end-date-year"]'),
        f = d ? t.querySelector(`#${d.getAttribute("for")}`) : null,
        p = f?.value || "";
      (u || d) && (r["End Date"] = `${c}/${p}`);
      let m = t.querySelector('input[type="checkbox"][id^="current-role"]');
      if (m) {
        let e = normalizeSnapshotLabel(t.querySelector(`label[for="${m.id}"]`)?.textContent) || "Current Role";
        r[e] = m.checked
      }
      Object.keys(r).length > 0 && e.push(r)
    })
  }
  return e
}

export function getEduAndEmploymentSnapshot(options = {}) {
  let t = getEduSnapshot(options),
    r = getEmploymentSnapshot(),
    n = {};
  return (t && t.length > 0 && (n.education = t), r && r.length > 0 && (n.employment = r), 0 ===
    Object.keys(n).length) ? null : n
}
