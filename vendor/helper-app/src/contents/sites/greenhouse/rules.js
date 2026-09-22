/**
 * Parcel module id: jly3y
 * Resolved path: src/contents/sites/greenhouse/rules.js
 * Dependencies:
 *   ../education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ./field-labels -> awNtS  =>  src/contents/sites/greenhouse/field-labels.js
 *   ./race -> cQ4Jg  =>  src/contents/sites/greenhouse/race.js
 *   ./rule-options -> k315S  =>  src/contents/sites/greenhouse/rule-options.js
 *   ./select-labels -> dy7Jk  =>  src/contents/sites/greenhouse/select-labels.js
 *   ./snapshot-alignment -> ewjev  =>  src/contents/sites/greenhouse/snapshot-alignment.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/shared/constants -> ayCbq  =>  src/contents/shared/constants.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", () => g), n.export(r, "getEducationRules", () => y),
  n.export(r, "getExperienceRules", () => v), n.export(r, "getAutocompleteRule", () => A), n.export(
    r, "getEduRule", () => j), n.export(r, "getEmploymentRule", () => D), n.export(r,
    "getFormSnapshot", () => L), n.export(r, "getEduSnapshot", () => M), n.export(r,
    "getEmploymentSnapshot", () => N), n.export(r, "getEduAndEmploymentSnapshot", () => $);
var o = e("~contents/methods/dom"),
  i = e("~contents/methods/observer"),
  a = e("~contents/shared/constants"),
  l = e("~core/enums"),
  s = e("~core/xpath"),
  u = e("~utils/delay"),
  c = e("../education-item-trace"),
  d = e("./field-labels"),
  f = e("./race"),
  p = e("./rule-options"),
  m = e("./select-labels"),
  h = e("./snapshot-alignment");
async function g() {
  let e = new URL(window.location.href),
    t = e.hostname;
  if (!t.startsWith("job-boards.")) return await b();
  {
    let e = await F(document.body);
    return e
  }
}
async function b() {
  let e = [],
    t = (0, s.getOrderedNodesSafe)(`//div[contains(concat(' ', normalize-space(@class), ' '), ' field ') and not(contains(@class, 'hidden'))]/descendant::label[
      not(ancestor::label)
      and not(contains(@class, 'offscreen'))
      and normalize-space(.) != ''
      and not(contains(translate(parent::*/@style, ' ', ''), 'display:none'))
      and not((following-sibling::input | preceding-sibling::input)[@disabled])
      and not(ancestor::div[contains(concat(' ', normalize-space(@class), ' '), ' hidden ')])
      and not(ancestor::div[starts-with(@class, "field demographic_question")])
      and not(ancestor::*[@id='education_section' or contains(@class, 'education--container')])
      and not(ancestor::*[@id='employment_section' or contains(@class, 'employment--container')])
    ][1]`);
  for (let r of t) {
    let t = w(r);
    t && e.push(t)
  }
  let r = (0, s.getOrderedNodesSafe)('//div[starts-with(@class, "field demographic_question")]');
  for (let t of r) {
    let r = k(t);
    r && e.push(r)
  }
  let n = e.some(e => e.type === l.FIELD_TYPE.SELECT && e.label.toLowerCase().includes(
    "hispanic"));
  if (n) {
    let t = e.some(e => (0, f.isGreenhouseRaceLabel)(e.label));
    if (!t) {
      let t = (0, s.getFirstOrderedNodeSafe)(
        "//div[@id='race_dropdown_container'] | //div[contains(@class, 'field')][.//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'race')]]",
        document);
      if (t) {
        let r = (0, s.getFirstOrderedNodeSafe)(".//label[not(contains(@class, 'offscreen'))]", t),
          n = (0, s.getFirstOrderedNodeSafe)(".//select", t);
        if (r && n) {
          let t = (0, s.getOrderedNodesSafe)("./option", n);
          e.push({
            label: T(r),
            $label: r,
            required: "true" === n.getAttribute("aria-required"),
            type: l.FIELD_TYPE.SELECT,
            $input: n,
            options: t.map(e => e.textContent?.trim() ?? "").filter(e => !["", "--",
              "please select"
            ].includes(e.toLowerCase()))
          })
        }
      }
    }
  }
  let o = await y();
  e.push(...o);
  let i = await v();
  return e.push(...i), e
}

function y() {
  let e = (0, s.getFirstOrderedNodeSafe)(
      ".//div[(@id='education_section' or contains(@class, 'education--container'))]", document),
    t = [];
  if (!e) return t;
  let r = (0, s.getOrderedNodesSafe)(`.//div[
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
      o = (0, s.getOrderedNodesSafe)(
        ".//label[not(ancestor::label) and not(contains(@class, 'offscreen')) and normalize-space(.) != '' and not(contains(translate(parent::*/@style, ' ', ''), 'display:none')) and not((following-sibling::input | preceding-sibling::input)[@disabled])]",
        r),
      i = [];
    if (o.length > 0)
      for (let e of o) {
        let t = w(e);
        t && i.push(t)
      }
    let a = (0, s.getFirstOrderedNodeSafe)(
        ".//input[contains(@class, 'start-date-month')] | .//input[contains(@class, 'start-date') and contains(@class, 'month')]",
        r),
      u = null;
    if (a) {
      let e = a.closest("fieldset");
      e && (u = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e)), u || (u = (0, s
        .getFirstOrderedNodeSafe)(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]",
        a))
    }
    if (a && !i.some(e => e.label.toLowerCase().includes("start date month"))) {
      let e = a.closest(".select__container");
      e ? i.push({
        type: l.FIELD_TYPE.SEARCH,
        label: "Start date month",
        $label: u || a,
        $input: e,
        required: "true" === a.getAttribute("aria-required")
      }) : i.push({
        type: l.FIELD_TYPE.TEXT,
        label: "Start date month",
        $label: u || a,
        $input: a,
        required: "true" === a.getAttribute("aria-required")
      })
    }
    let c = (0, s.getFirstOrderedNodeSafe)(
        ".//input[contains(@class, 'start-date-year')] | .//input[contains(@class, 'start-date') and contains(@class, 'year')]",
        r),
      d = null;
    if (c) {
      let e = c.closest("fieldset");
      e && (d = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e)), d || (d = (0, s
        .getFirstOrderedNodeSafe)(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]",
        c))
    }
    c && !i.some(e => e.label.toLowerCase().includes("start date year")) && i.push({
      type: l.FIELD_TYPE.TEXT,
      label: "Start date year",
      $label: d || c,
      $input: c,
      required: "true" === c.getAttribute("aria-required")
    });
    let f = (0, s.getFirstOrderedNodeSafe)(
        ".//input[contains(@class, 'end-date-month')] | .//input[contains(@class, 'end-date') and contains(@class, 'month')]",
        r),
      m = null;
    if (f) {
      let e = f.closest("fieldset");
      e && (m = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e)), m || (m = (0, s
        .getFirstOrderedNodeSafe)(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]",
        f))
    }
    if (f && !i.some(e => e.label.toLowerCase().includes("end date month"))) {
      let e = f.closest(".select__container");
      e ? i.push({
        type: l.FIELD_TYPE.SEARCH,
        label: "End date month",
        $label: m || f,
        $input: e,
        required: "true" === f.getAttribute("aria-required")
      }) : i.push({
        type: l.FIELD_TYPE.TEXT,
        label: "End date month",
        $label: m || f,
        $input: f,
        required: "true" === f.getAttribute("aria-required")
      })
    }
    let h = (0, s.getFirstOrderedNodeSafe)(
        ".//input[contains(@class, 'end-date-year')] | .//input[contains(@class, 'end-date') and contains(@class, 'year')]",
        r),
      g = null;
    if (h) {
      let e = h.closest("fieldset");
      e && (g = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e)), g || (g = (0, s
        .getFirstOrderedNodeSafe)(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]",
        h))
    }
    if (h && !i.some(e => e.label.toLowerCase().includes("end date year")) && i.push({
        type: l.FIELD_TYPE.TEXT,
        label: "End date year",
        $label: g || h,
        $input: h,
        required: "true" === h.getAttribute("aria-required")
      }), i.length > 0) {
      let e = {
        type: l.FIELD_TYPE.EDUCATION,
        label: "Education",
        children: i,
        options: (0, p.buildGreenhouseEducationOptionDescriptors)(i),
        required: !1
      };
      t.push(e)
    }
  }
  return t
}

function v() {
  let e = (0, s.getFirstOrderedNodeSafe)(
      ".//div[(@id='employment_section' or contains(@class, 'employment--container'))]", document),
    t = [];
  if (!e) return t;
  let r = (0, s.getOrderedNodesSafe)(`.//div[
      (contains(@class, 'employment') and not(contains(@class, 'container')))
      or contains(@class, 'employment-form')
    ]`, e),
    n = r && r.length > 0 ? r : [e];
  for (let e of n) {
    let r = (0, s.getOrderedNodesSafe)(
        ".//label[not(ancestor::label) and not(contains(@class, 'offscreen')) and normalize-space(.) != '' and not(contains(translate(parent::*/@style, ' ', ''), 'display:none')) and not((following-sibling::input | preceding-sibling::input)[@disabled])]",
        e),
      n = [];
    if (r.length > 0)
      for (let e of r) {
        let t = w(e);
        t && n.push(t)
      }
    let o = (0, s.getFirstOrderedNodeSafe)(
        ".//input[contains(@class, 'start-date-month')] | .//input[contains(@class, 'start-date') and contains(@class, 'month')]",
        e),
      i = null;
    if (o) {
      let e = o.closest("fieldset");
      e && (i = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e)), i || (i = (0, s
        .getFirstOrderedNodeSafe)(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]",
        o))
    }
    o && !n.some(e => e.label.toLowerCase().includes("start date month")) && n.push({
      type: l.FIELD_TYPE.TEXT,
      label: "Start date month",
      $label: i || o,
      $input: o,
      required: !0
    });
    let a = (0, s.getFirstOrderedNodeSafe)(
        ".//input[contains(@class, 'start-date-year')] | .//input[contains(@class, 'start-date') and contains(@class, 'year')]",
        e),
      u = null;
    if (a) {
      let e = a.closest("fieldset");
      e && (u = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e)), u || (u = (0, s
        .getFirstOrderedNodeSafe)(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]",
        a))
    }
    a && !n.some(e => e.label.toLowerCase().includes("start date year")) && n.push({
      type: l.FIELD_TYPE.TEXT,
      label: "Start date year",
      $label: u || a,
      $input: a,
      required: !0
    });
    let c = (0, s.getFirstOrderedNodeSafe)(
        ".//input[contains(@class, 'end-date-month')] | .//input[contains(@class, 'end-date') and contains(@class, 'month')]",
        e),
      d = null;
    if (c) {
      let e = c.closest("fieldset");
      e && (d = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e)), d || (d = (0, s
        .getFirstOrderedNodeSafe)(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]",
        c))
    }
    c && !n.some(e => e.label.toLowerCase().includes("end date month")) && n.push({
      type: l.FIELD_TYPE.TEXT,
      label: "End date month",
      $label: d || c,
      $input: c,
      required: !0
    });
    let f = (0, s.getFirstOrderedNodeSafe)(
        ".//input[contains(@class, 'end-date-year')] | .//input[contains(@class, 'end-date') and contains(@class, 'year')]",
        e),
      p = null;
    if (f) {
      let e = f.closest("fieldset");
      e && (p = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e)), p || (p = (0, s
        .getFirstOrderedNodeSafe)(
        "preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]",
        f))
    }
    f && !n.some(e => e.label.toLowerCase().includes("end date year")) && n.push({
      type: l.FIELD_TYPE.TEXT,
      label: "End date year",
      $label: p || f,
      $input: f,
      required: !0
    });
    let m = (0, s.getFirstOrderedNodeSafe)(
        ".//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'current')]",
        e),
      h = null;
    if (m && (h = (0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", m)), h || (h = (0, s
        .getFirstOrderedNodeSafe)(
        ".//input[@type='checkbox' and (contains(@id, 'current') or contains(@id, 'employment_current') or contains(@name, 'current'))]",
        e)), h && !n.some(e => e.label.toLowerCase().includes("current")) && n.push({
        type: l.FIELD_TYPE.CHECKBOX,
        label: "Current role",
        $label: m || h,
        $input: h,
        $checkboxs: [h],
        options: ["True", "False"],
        required: !1
      }), n.length > 0) {
      let e = {
        type: l.FIELD_TYPE.EMPLOYMENT,
        label: "employment",
        children: n,
        options: [...n.map(e => ({
          type: e.type,
          label: e.label,
          options: e.options || []
        }))],
        required: !1
      };
      t.push(e)
    }
  }
  return t
}

function w(e) {
  let t = [E, x, A, C];
  for (let r of t) {
    let t = r(e);
    if (t) return t
  }
  return null
}

function S(e) {
  return null != (0, s.getFirstOrderedNodeSafe)(".//*[text()='*'] | .//*[@class='asterisk']", e)
}

function E(e) {
  let t = "LEGEND" === e.tagName ? e.parentElement : e.closest("fieldset, div.field") || e
    .parentElement;
  if (!t) return null;
  let r = (0, s.getOrderedNodesSafe)(".//input[@type='checkbox']", t),
    n = t.contains(e) && r.length > 1;
  if (n) {
    let t = [],
      n = [];
    for (let e of r) {
      let r = (0, s.getFirstOrderedNodeSafe)(`parent::label | //label[@for='${e.id}']`, e);
      r && r.textContent && (t.push(r.textContent.trim()), n.push(e))
    }
    if (t.length > 0) return {
      label: T(e),
      $label: e,
      type: l.FIELD_TYPE.CHECKBOX,
      required: S(e),
      $checkboxs: n,
      options: t,
      $input: n[0]
    }
  }
  let o = (0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", e);
  if (o) {
    let t = T(e),
      r = (0, s.getFirstOrderedNodeSafe)(`parent::label | //label[@for='${o.id}']`, o);
    return r && r.textContent && (t = r.textContent.trim()), {
      label: T(e),
      $label: e,
      type: l.FIELD_TYPE.CHECKBOX,
      required: S(e),
      $checkboxs: [o],
      options: [t],
      $input: o
    }
  }
  return null
}

function x(e) {
  let t = (0, s.getFirstOrderedNodeSafe)(
    ".//select[not(ancestor::select)] | following-sibling::select", e);
  if (!t) {
    let r = e.closest("div.field") || e.parentElement;
    r && (t = (0, s.getFirstOrderedNodeSafe)(".//select[not(ancestor::select)]", r))
  }
  if (t || (t = (0, s.getFirstOrderedNodeSafe)(
        "descendant::select | following-sibling::select | ancestor::div[@class='field']//select", e
        )), t) {
    let r = (0, s.getOrderedNodesSafe)("./option", t);
    return {
      label: T(e),
      $label: e,
      required: S(e),
      type: l.FIELD_TYPE.SELECT,
      $input: t,
      options: r.map(e => e.textContent?.trim() ?? "").filter(e => !["", "--", "please select"]
        .includes(e.toLowerCase()))
    }
  }
  let r = e.closest("fieldset, div.field, div.demographic_question") || e.parentElement,
    n = (0, s.getOrderedNodesSafe)(".//input[@type='radio']", r);
  if (r.contains(e) && n.length > 1) {
    let t = [],
      r = [];
    for (let e of n) {
      let n = (0, s.getFirstOrderedNodeSafe)(`parent::label | //label[@for='${e.id}']`, e);
      n && n.textContent && (t.push(n.textContent.trim()), r.push(e))
    }
    if (t.length > 0) return {
      label: T(e),
      $label: e,
      required: S(e),
      type: l.FIELD_TYPE.SELECT,
      $input: r[0],
      $radios: r,
      options: t
    }
  }
  let o = (0, s.getFirstOrderedNodeSafe)(
    "following-sibling::*[contains(@class, 'select2-container')] | .//*[contains(@class, 'select2-container')]",
    e);
  if (o) {
    let t = (0, s.getFirstOrderedNodeSafe)("following-sibling::select", o);
    if (t || (t = (0, s.getFirstOrderedNodeSafe)(".//select", e)), !t) {
      let r = e.closest("div.field") || e.parentElement;
      r && (t = (0, s.getFirstOrderedNodeSafe)(".//select", r))
    }
    if (t) {
      let r = (0, s.getOrderedNodesSafe)("./option", t);
      return {
        label: T(e),
        $label: e,
        required: S(e),
        type: l.FIELD_TYPE.SELECT,
        $input: t,
        options: r.map(e => e.textContent?.trim() ?? "").filter(e => !["", "--", "please select"]
          .includes(e.toLowerCase()))
      }
    }
    return {
      label: T(e),
      $label: e,
      required: S(e),
      type: l.FIELD_TYPE.SELECT,
      $input: o,
      options: []
    }
  }
  return null
}

function C(e) {
  let t = `
    following-sibling::input[not(@type='hidden' or @type='checkbox' or @type='radio' or @type='file' or @type='submit' or @type='button')] |
    following-sibling::textarea |
    .//input[not(@type='hidden' or @type='checkbox' or @type='radio' or @type='file' or @type='submit' or @type='button')] |
    .//textarea
  `,
    r = (0, s.getFirstOrderedNodeSafe)(t, e);
  return r ? {
    label: T(e),
    $label: e,
    required: S(e),
    type: l.FIELD_TYPE.TEXT,
    $input: r
  } : null
}

function A(e) {
  let t = e.innerText.trim().toLowerCase(),
    r = ["where is your permanent (city, state) work location?"];
  if (r.includes(T(e).toLowerCase())) return null;
  let n = t.includes("location");
  if (n) {
    let t = (0, s.getFirstOrderedNodeSafe)("following-sibling::*", e),
      r = t && (t.querySelector(
          '.select__container, .select2-container, [role="combobox"], [role="listbox"]') || t
        .classList.contains("select__container") || t.classList.contains("select2-container") ||
        "combobox" === t.getAttribute("role"));
    return r ? {
      label: T(e),
      $label: e,
      type: l.FIELD_TYPE.SEARCH,
      required: S(e),
      $input: t
    } : null
  }
  return null
}

function k(e) {
  let t = Array.from(e.childNodes).filter(e => e.nodeType === Node.TEXT_NODE && e.textContent
  ?.trim()).map(e => e.textContent?.trim()).join(" ").replace(/\*$/, "").trim();
  if (!t) return null;
  let r = (0, s.getOrderedNodesSafe)(".//label", e),
    n = r.map(e => e.innerText.trim()).filter(Boolean);
  if (0 === n.length) return null;
  let o = (0, s.getFirstOrderedNodeSafe)(".//input[@type='radio' or @type='checkbox']", e);
  if (!o) return null;
  let i = "radio" === o.type ? l.FIELD_TYPE.SELECT : l.FIELD_TYPE.CHECKBOX;
  return {
    label: t,
    $label: e,
    type: i,
    required: S(e),
    options: n,
    $checkboxs: r.map(e => (0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", e)) || [],
    $input: o
  }
}

function T(e) {
  let t = "";
  for (let r of e.childNodes) r.nodeType === Node.TEXT_NODE && (t += r.textContent?.trim() ?? "");
  return t || e.innerText.trim()
}
async function F(e) {
  let t = [],
    r = (0, s.getOrderedNodesSafe)(`.//div[contains(@class, 'text-input-wrapper')
     and not(ancestor::div[contains(@class, 'education--container')])
     and not(ancestor::div[contains(@class, 'employment--container')])]`, e),
    n = P(r);
  t.push(...n);
  let o = I(e);
  t.push(...o);
  let i = (0, s.getOrderedNodesSafe)(`.//div[contains(@class, 'select__container')
    and not(ancestor::div[contains(@class, 'education--container')])
    and not(ancestor::div[contains(@class, 'employment--container')])]`, e),
    a = await _(i, !1, !0);
  t.push(...a);
  let u = (0, s.getFirstOrderedNodeSafe)(
    ".//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'hispanic')]",
    e);
  if (u) {
    let e = t.find(e => (0, f.isGreenhouseRaceLabel)(e.label));
    if (e) {
      let t = e;
      t.options && 0 !== t.options.length || (e.options = f.RACE_FALLBACK_OPTIONS)
    } else t.push({
      label: "Please identify your race",
      required: !1,
      type: l.FIELD_TYPE.SEARCH,
      options: f.RACE_FALLBACK_OPTIONS
    })
  }
  let c = await j(!1, !0);
  c.length > 0 && t.push(...c);
  let d = await D(!1, !0);
  return d.length > 0 && t.push(...d), t
}

function I(e) {
  let t = [],
    r = new Set,
    n = (0, s.getOrderedNodesSafe)(`.//label[
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
    let n = E(e);
    if (n) {
      let e = (n.$checkboxs || []).map(e => e.id).filter(Boolean),
        o = e.some(e => r.has(e));
      o || t.some(e => e.label === n.label) || (t.push(n), e.forEach(e => r.add(e)))
    }
  }
  return t
}
async function j(e = !1, t = !1) {
  let r = (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'education--container')]",
    document);
  if (r) {
    let n = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'education--form')]", r);
    t && (n = n?.slice(0, 1) || []);
    let o = [];
    for (let r of n) {
      let n = [],
        i = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'text-input-wrapper')]", r),
        a = P(i);
      a.length > 0 && n.push(...a);
      let u = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'select__container')]", r),
        c = await _(u, e, t);
      if (c.length > 0 && n.push(...c), n.length > 0) {
        let e = {
          type: l.FIELD_TYPE.EDUCATION,
          label: "Education",
          children: n,
          options: (0, p.buildGreenhouseEducationOptionDescriptors)(n),
          required: !1
        };
        o.push(e)
      }
    }
    return o
  }
  return []
}
async function D(e = !1, t = !1) {
  let r = (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'employment--container')]",
    document);
  if (r) {
    let n = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'employment-form')]", r);
    t && (n = n?.slice(0, 1) || []);
    let o = [];
    for (let r of n) {
      let n = [],
        i = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'text-input-wrapper')]", r),
        a = P(i);
      a.length > 0 && n.push(...a);
      let u = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'select__container')]", r),
        c = await _(u, e, t);
      c.length > 0 && n.push(...c);
      let d = (0, s.getFirstOrderedNodeSafe)(
          ".//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'current')]",
          r),
        f = null;
      d && (f = (0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", d)), f || (f = (0, s
        .getFirstOrderedNodeSafe)(
        ".//input[@type='checkbox' and (contains(@id, 'current') or contains(@id, 'employment_current') or contains(@name, 'current'))]",
        r)), f && !n.some(e => e.label.toLowerCase().includes("current")) && n.push({
        type: l.FIELD_TYPE.CHECKBOX,
        label: "Current role",
        $label: d || f,
        $input: f,
        $checkboxs: [f],
        options: ["True", "False"],
        required: !1
      });
      let p = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'checkbox')]", r);
      if (p && p.length > 0)
        for (let e of p) {
          let t = (0, s.getFirstOrderedNodeSafe)(".//label", e);
          if (t) {
            let e = t.textContent?.toLowerCase().trim() || "";
            if (e.includes("current")) continue;
            let r = E(t);
            r && n.push(r)
          }
        }
      if (n.length > 0) {
        let e = {
          type: l.FIELD_TYPE.EMPLOYMENT,
          label: "Employment",
          children: n,
          options: [...n.map(e => ({
            type: e.type,
            label: e.label,
            options: e.options || []
          }))],
          required: !1
        };
        o.push(e)
      }
    }
    return o
  }
  return []
}

function P(e) {
  let t = [];
  for (let r of e) {
    let e = (0, s.getFirstOrderedNodeSafe)(".//label", r),
      n = e?.textContent?.trim() ?? "",
      o = /[*\uff0a]\s*$/.test(n);
    n.replace(/[*\uff0a]\s*$/, "").trim();
    let i = (0, s.getFirstOrderedNodeSafe)(".//input | .//textarea", r);
    if (i) {
      let r = (0, d.normalizeGreenhouseFieldLabel)({
        rawLabel: n,
        inputId: i.getAttribute("id"),
        inputAriaLabel: i.getAttribute("aria-label")
      });
      t.push({
        label: r || "",
        $label: e,
        required: o,
        type: l.FIELD_TYPE.TEXT,
        $input: i
      })
    }
  }
  return t
}
async function _(e, t = !1, r = !0) {
  let n = [];
  for (let c of e) {
    let e = (0, s.getFirstOrderedNodeSafe)(".//label", c),
      d = e?.getAttribute("for"),
      f = e?.textContent?.trim() ?? "",
      p = /[*\uff0a]\s*$/.test(f),
      h = f.replace(/[*\uff0a]\s*$/, "").trim(),
      g = (0, m.normalizeGreenhouseSelectRuleLabel)(h, c);
    if (null === g) continue;
    if (!r) {
      n.push({
        label: g || "",
        $label: e,
        required: p,
        type: l.FIELD_TYPE.SEARCH,
        $input: c,
        options: []
      });
      continue
    }
    let b = d ? `react-select-${d}-listbox` : "",
      y = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'select__input')]", c),
      v = "school" === g.toLowerCase() || "discipline" === g.toLowerCase();
    if (y && !v) {
      (0, o.triggerEvents)(y, ["focus", "mousedown", "mouseup"]);
      let r = null;
      if (t) await (0, u.delay)(3e3);
      else {
        let e = await (0, i.waitForCondition)(() => null !== (r = b ? document.getElementById(b) :
          (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'select__menu-list')]",
            document)), {
          timeout: 1e3,
          interval: 50,
          observeTarget: document.body
        });
        e || (await (0, u.delay)(200), r = b ? document.getElementById(b) : (0, s
            .getFirstOrderedNodeSafe)(".//div[contains(@class, 'select__menu-list')]",
          document))
      }
      if (!r && b && (r = document.getElementById(b)), r || (r = (0, s.getFirstOrderedNodeSafe)(
          ".//div[contains(@class, 'select__menu-list')]", document)), r) {
        let e = r;
        await (0, i.waitForCondition)(() => e.querySelectorAll(
          `.${a.GREENHOUSE_V2_REACT_SELECT_OPTION_CLASS}`).length > 0, {
          timeout: 2e3,
          interval: 100,
          observeTarget: e
        })
      }
      let d = (0, s.getOrderedNodesSafe)(
          `.//div[contains(@class, '${a.GREENHOUSE_V2_REACT_SELECT_OPTION_CLASS}')]`, r),
        f = d.map(e => e.textContent?.trim() ?? ""),
        m = new KeyboardEvent("keydown", {
          key: "Escape",
          code: "Escape",
          keyCode: 27,
          bubbles: !0,
          cancelable: !0
        });
      if (y.dispatchEvent(m), await (0, u.delay)(50), document.querySelector(".select__menu")) {
        let e = c.querySelector(".select__indicators");
        e && ((0, o.triggerEvents)(e, ["mousedown", "click"]), await (0, u.delay)(50))
      }
      document.querySelector(".select__menu") && (y.blur(), await (0, u.delay)(50)), n.push({
        label: g || "",
        $label: e,
        required: p,
        type: l.FIELD_TYPE.SEARCH,
        $input: c,
        options: f
      })
    } else y && n.push({
      label: g || "",
      $label: e,
      required: p,
      type: l.FIELD_TYPE.SEARCH,
      $input: c,
      options: []
    })
  }
  return n
}
async function L(e, t) {
  let r = {};
  for (let t of e)
    if (t && t.type) {
      if (t.type === l.FIELD_TYPE.TEXT) {
        let e = t.$input;
        if (!e) continue;
        if (e.classList.contains("iti__search-input")) {
          let t = e.closest(".iti"),
            r = t?.querySelector("input[type='tel']");
          r && (e = r)
        }
        r[t.label] = e.value.trim()
      }
      if (t.type === l.FIELD_TYPE.SELECT) {
        let e = t.$input;
        if (!e) continue;
        if ("SELECT" === e.tagName) {
          let n = e;
          r[t.label] = n.options[n.selectedIndex]?.text?.trim() || ""
        } else {
          let n = e.querySelector(".select__single-value")?.textContent,
            o = e.querySelector(".select2-chosen")?.textContent;
          r[t.label] = (n || o || "").trim()
        }
      }
      if (t.type === l.FIELD_TYPE.CHECKBOX) {
        let e = t;
        if (!e.$checkboxs || 0 === e.$checkboxs.length) continue;
        let n = [];
        for (let t of e.$checkboxs)
          if (t.checked) {
            let e = (0, s.getFirstOrderedNodeSafe)(`parent::label | //label[@for='${t.id}']`, t);
            e && e.textContent && n.push(e.textContent.trim())
          } r[t.label] = n
      }
      if (t.type === l.FIELD_TYPE.SEARCH) {
        let e = t;
        if (!e.$input) continue;
        let n = (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'select__single-value')]",
          e.$input);
        if (n) {
          r[t.label] = (n?.textContent?.trim() || "").replace(/\s+/g, " ");
          continue
        }
        let o = (0, s.getOrderedNodesSafe)(
          ".//div[contains(@class, 'select__multi-value__label')]", e.$input);
        if (o && o.length > 0) {
          r[t.label] = o.map(e => e?.textContent?.trim()).filter(e => !!e);
          continue
        }
      }
    } return r
}

function R(e) {
  return e ? e.replace(/\*/g, "").trim().replace(/\s+/g, " ") : ""
}

function O(e, t, r) {
  if (!r.markEducationRows && !r.includeEducationSnapshotIndex) return null;
  let n = e.getAttribute(h.GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE);
  if (r.markEducationRows && (n = String(t), e.setAttribute(h
      .GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE, n)), !r.includeEducationSnapshotIndex || !n)
    return null;
  let o = Number(n);
  return Number.isInteger(o) && o >= 0 ? o : null
}

function M(e = {}) {
  let t = [],
    r = document.querySelector("#education_section");
  if (r) {
    let n = r.querySelectorAll(".education");
    n.forEach((r, n) => {
      let o = {},
        i = O(r, n, e),
        a = (0, c.getEducationTraceForRow)(r, {
          attributes: h.GREENHOUSE_EDUCATION_TRACE_ATTRIBUTES,
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
              i = R(n?.textContent);
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
        let e = R(s.textContent);
        if (e) {
          let t = r.querySelector(".start-date-month"),
            n = r.querySelector(".start-date-year"),
            i = "";
          (t || n) && "/" == (i = `${t?.value||""}/${n?.value||""}`) && (i = ""), o[e] = i
        }
      }
      let u = r.querySelector(".field:has(.end-date-month) legend label");
      if (u) {
        let e = R(u.textContent);
        if (e) {
          let t = r.querySelector(".end-date-month"),
            n = r.querySelector(".end-date-year"),
            i = "";
          (t || n) && "/" == (i = `${t?.value||""}/${n?.value||""}`) && (i = ""), o[e] = i
        }
      }
      Object.keys(o).length > 0 && (null !== i && (o[h
          .GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_KEY] = i), a && (o[c.EDUCATION_TRACE_KEY] = a),
        t.push(o))
    })
  }
  let n = document.querySelector(".education--container");
  if (n) {
    let r = n.querySelectorAll(".education--form");
    r.forEach((r, n) => {
      let o = {},
        i = O(r, n, e),
        a = (0, c.getEducationTraceForRow)(r, {
          attributes: h.GREENHOUSE_EDUCATION_TRACE_ATTRIBUTES,
          includeEducationTrace: e.includeEducationTrace,
          markEducationRows: e.markEducationRows,
          runId: e.educationTraceRunId,
          snapshotIndex: n
        }),
        l = e => {
          let t = r.querySelector(`label[id^="${e}"]`);
          if (!t) return;
          let n = R(t?.textContent);
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
        "end-month"), l("end-year"), Object.keys(o).length > 0 && (null !== i && (o[h
          .GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_KEY] = i), a && (o[c.EDUCATION_TRACE_KEY] = a),
        t.push(o))
    })
  }
  return t
}

function N() {
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
              a = R(i?.textContent) || n;
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
        t && (e = R(t.textContent) || e), r[e] = `${o?.value||""}/${i?.value||""}`
      }
      let a = t.querySelector(".end-date-month"),
        l = t.querySelector(".end-date-year");
      if (a || l) {
        let e = "End Date",
          t = a?.parentElement?.querySelector("legend label") || l?.parentElement
          ?.querySelector("legend label");
        t && (e = R(t.textContent) || e), r[e] = `${a?.value||""}/${l?.value||""}`
      }
      let s = t.querySelector('input[id*="employment_current"]');
      if (s) {
        let e = s.id,
          n = t.querySelector(`label.current[for="${e}"]`) || t.querySelector(
            `label[for="${e}"]`),
          o = R(n?.textContent) || "Current Role",
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
            i = R(o?.textContent) || n;
          if (o || n) {
            let a = "";
            if (e.includes("current-role")) {
              let i = t.querySelector(`input[id^="${e}"]`);
              if (i && (a = i.checked, !o)) {
                let e = t.querySelector(`label[for="${i.id}"]`);
                if (e) {
                  r[R(e.textContent) || n] = a;
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
        let e = R(t.querySelector(`label[for="${m.id}"]`)?.textContent) || "Current Role";
        r[e] = m.checked
      }
      Object.keys(r).length > 0 && e.push(r)
    })
  }
  return e
}

function $(e = {}) {
  let t = M(e),
    r = N(),
    n = {};
  return (t && t.length > 0 && (n.education = t), r && r.length > 0 && (n.employment = r), 0 ===
    Object.keys(n).length) ? null : n
}

