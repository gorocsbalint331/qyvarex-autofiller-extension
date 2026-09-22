/**
 * Parcel module id: hU5fc
 * Resolved path: contents/sites/breezy/rules.js (oracle restore)
 * Dependencies:
 *   ./polyglot -> elvDI  =>  polyglot.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
o.defineInteropFlag(r), o.export(r, "HARDCODE_KEY", () => n), o.export(r,
  "getBreezySalaryFieldType", () => s), o.export(r, "hardCodeConfig", () => c), o.export(r,
  "getFillingLabels", () => d), o.export(r, "getRules", () => f), o.export(r,
  "findCoverLetterTextarea", () => p), o.export(r, "processEduOrWorkExpRules", () => b), o.export(
  r, "findAndRemoveRule", () => I), o.export(r, "getSubmitButtonText", () => j), o.export(r,
  "getBreezySubmitButtonXpath", () => D);
var i = e("~core/enums"),
  a = e("~core/xpath"),
  l = e("./polyglot");

function s(e) {
  return /\b(salary|compensation|pay)\b/i.test(e) ? /\b(range|minimum and maximum|min and max)\b/i
    .test(e) ? i.FIELD_TYPE.TEXT : i.FIELD_TYPE.NUMBER : i.FIELD_TYPE.TEXT
}! function(e) {
  e.education = "education", e.workExperience = "workExperience"
}(n || (n = {}));
let u = e =>
  `.//div[@class="section-footer"]//a[child::span[${(0,l.buildBreezyPolyglotXpathTextCondition)(e,e=>`contains(text(), "${e}")`)}]]`,
  c = {
    [n.education]: {
      key: n.education,
      container: './/li[@ng-repeat="candidateSchool in candidate.education"]',
      snapshot: '//li[@ng-repeat="candidateSchool in candidate.education"]',
      addButton: u("Add Education"),
      fields: [{
        key: "School",
        xpath: './/input[@ng-model="candidateSchool.school_name"]'
      }, {
        key: "Study",
        xpath: './/input[@ng-model="candidateSchool.field_of_study"]'
      }, {
        key: "Start",
        xpath: './/input[@ng-model="candidateSchool.date_start"]'
      }, {
        key: "End",
        xpath: './/input[@ng-model="candidateSchool.date_end"]'
      }]
    },
    [n.workExperience]: {
      key: n.workExperience,
      container: './/li[@ng-repeat="candidatePosition in candidate.work_history"]',
      snapshot: '//li[@ng-repeat="candidatePosition in candidate.work_history"]',
      addButton: u("Add Position"),
      fields: [{
        key: "Title",
        xpath: './/input[@ng-model="candidatePosition.title"]'
      }, {
        key: "Organization",
        alternateKey: "Company",
        xpath: './/input[@ng-model="candidatePosition.company_name"]'
      }, {
        key: "Start",
        xpath: './/input[@ng-model="candidatePosition.date_start"]'
      }, {
        key: "End",
        xpath: './/input[@ng-model="candidatePosition.date_end"]'
      }, {
        key: "jobDescriptions",
        xpath: './/textarea[@ng-model="candidatePosition.summary"]'
      }]
    }
  },
  d = () => (0, a.getOrderedNodes)(
    '//h3[contains(@class, "polygot") or child::span[@class="polygot" or contains(@class,"ng-binding")] or @class="polygot" or contains(@class, "ng-binding")]'
    ),
  f = async () => {
    let e = d(),
      t = [];
    for (let r of e) {
      let e = m(r);
      Array.isArray(e) && t.push(...e), e && !Array.isArray(e) && t.push(e)
    }
    return t
  };

function p() {
  let e = (0, a.getOrderedNodes)(
    '//textarea[@name="cCoverLetter" or @ng-model="candidate.cover_letter"]');
  if (0 === e.length) return null;
  let t = e.find(e => {
    let t = e.closest?.('div[class*="section"]')?.querySelector("h3");
    return !!t && (0, l.matchesBreezyLabel)(T(t), "Cover Letter")
  });
  return t ?? e[0]
}
let m = e => {
    let t = y(e);
    if (t) return t;
    let r = h(e);
    if (r) return r;
    let n = A(e);
    if (n) return n;
    let o = C(e);
    if (o) return o;
    let i = v(e);
    if (i) return i;
    let a = w(e);
    if (a) return a;
    let l = S(e);
    if (l) return l;
    let s = E(e);
    if (s) return s;
    let u = x(e);
    return u || null
  },
  h = e => {
    let t = T(e);
    if ("Education" !== t) return null;
    let r = (0, a.getFirstOrderedNode)("//h3/parent::div/following-sibling::ul/li", e);
    if (r) {
      let n = [],
        o = (0, a.getFirstOrderedNode)('//input[@placeholder="School"]', r),
        l = (0, a.getFirstOrderedNode)('//input[@placeholder="Study"]', r),
        s = (0, a.getFirstOrderedNode)('//textarea[@placeholder="Summary"]', r),
        u = (0, a.getFirstOrderedNode)('//input[@ng-model="candidateSchool.date_start"]', r),
        c = (0, a.getFirstOrderedNode)('//input[@ng-model="candidateSchool.date_end"]', r);
      n.push({
        type: i.FIELD_TYPE.TEXT,
        label: "School",
        required: !0,
        $input: o,
        $label: e
      }), n.push({
        type: i.FIELD_TYPE.TEXT,
        label: "Study",
        required: !1,
        $input: l,
        $label: e
      }), n.push({
        type: i.FIELD_TYPE.TEXT,
        label: "Summary",
        required: !1,
        $input: s,
        $label: e
      }), n.push({
        type: i.FIELD_TYPE.DATE,
        label: "Start date",
        required: !1,
        $input: u,
        $label: e
      }), n.push({
        type: i.FIELD_TYPE.DATE,
        label: "End date",
        required: !1,
        $input: c,
        $label: e
      });
      let d = n.map(e => ({
        type: e.type,
        label: e.label
      }));
      return {
        label: t,
        required: !1,
        type: i.FIELD_TYPE.EDUCATION,
        $input: r,
        options: d,
        children: n
      }
    }
    return null
  },
  g = e => {
    let t = "";
    t = e ? '//li[@ng-repeat="candidateSchool in candidate.education"]' :
      '//li[@ng-repeat="candidatePosition in candidate.work_history"]';
    let r = (0, a.getOrderedNodes)(t, document);
    return r
  },
  b = e => {
    let t = g(e),
      r = [],
      n = [];
    if (e ? (r = [i.FIELD_TYPE.TEXT, i.FIELD_TYPE.TEXT, i.FIELD_TYPE.TEXT, i.FIELD_TYPE.DATE, i
        .FIELD_TYPE.DATE
      ], n = ["School", "Study", "Summary", "Start date", "End date"]) : (r = [i.FIELD_TYPE.TEXT, i
        .FIELD_TYPE.TEXT, i.FIELD_TYPE.TEXT, i.FIELD_TYPE.DATE, i.FIELD_TYPE.DATE
      ], n = ["Company", "Title", "Summary", "Start date", "End date"]), t.length > 0) {
      let o = [];
      for (let l = 0; l < t.length; l++) {
        let s = [],
          u = [],
          c = t[l],
          d = (0, a.getOrderedNodes)(".//input | .//textarea", c);
        for (let e = 0; e < r.length; e++) {
          if (!d[e]) continue;
          let t = r[e];
          if (t === i.FIELD_TYPE.TEXT) s.push({
            type: i.FIELD_TYPE.TEXT,
            label: n[e],
            required: !1,
            $input: d[e],
            $label: c
          }), u.push({
            type: i.FIELD_TYPE.TEXT,
            label: n[e],
            option: []
          });
          else if (t === i.FIELD_TYPE.DATE) s.push({
            type: i.FIELD_TYPE.DATE,
            label: n[e],
            required: !1,
            $input: d[e],
            $label: c
          }), u.push({
            type: i.FIELD_TYPE.DATE,
            label: n[e],
            option: []
          });
          else throw Error(`Unsupported field type: ${t} in Edu/Work Exp processing`)
        }
        o.push({
          children: s,
          label: e ? "Education" : "Work History",
          options: u,
          required: !1,
          type: e ? i.FIELD_TYPE.EDUCATION : i.FIELD_TYPE.EMPLOYMENT
        })
      }
      return o
    }
    return null
  },
  y = e => {
    let t = T(e);
    if ("Work History" !== t) return null;
    let r = (0, a.getFirstOrderedNode)("//h3/parent::div/following-sibling::ul/li", e);
    if (r) {
      let n = [],
        o = (0, a.getFirstOrderedNode)('//input[@placeholder="School"]', r),
        l = (0, a.getFirstOrderedNode)('//input[@placeholder="Study"]', r),
        s = (0, a.getFirstOrderedNode)('//textarea[@placeholder="Summary"]', r),
        u = (0, a.getFirstOrderedNode)('//input[@ng-model="candidateSchool.date_start"]', r),
        c = (0, a.getFirstOrderedNode)('//input[@ng-model="candidateSchool.date_end"]', r);
      n.push({
        type: i.FIELD_TYPE.TEXT,
        label: "Company",
        required: !0,
        $input: o,
        $label: e
      }), n.push({
        type: i.FIELD_TYPE.TEXT,
        label: "Title",
        required: !1,
        $input: l,
        $label: e
      }), n.push({
        type: i.FIELD_TYPE.TEXT,
        label: "Summary",
        required: !1,
        $input: s,
        $label: e
      }), n.push({
        type: i.FIELD_TYPE.DATE,
        label: "Start date",
        required: !1,
        $input: u,
        $label: e
      }), n.push({
        type: i.FIELD_TYPE.DATE,
        label: "End date",
        required: !1,
        $input: c,
        $label: e
      });
      let d = n.map(e => ({
        type: e.type,
        label: e.label
      }));
      return {
        label: t,
        required: !1,
        type: i.FIELD_TYPE.EMPLOYMENT,
        $input: r,
        options: d,
        children: n
      }
    }
    return null
  },
  v = e => {
    let t = T(e),
      r = (0, a.getFirstOrderedNode)('./following-sibling::input[@type="text" or @type="email"]',
      e);
    return r ? {
      type: s(t),
      label: t,
      required: F(e),
      $input: r,
      $label: e
    } : null
  },
  w = e => {
    let t = T(e),
      r = (0, a.getFirstOrderedNode)("../following-sibling::textarea", e);
    return (r || (r = (0, a.getFirstOrderedNode)("./following-sibling::textarea", e)), r) ? {
      type: s(t),
      label: t,
      required: F(e),
      $input: r,
      $label: e
    } : null
  },
  S = e => {
    let t = T(e),
      r = (0, a.getFirstOrderedNode)(
        "./following-sibling::div[@class='dropdown-container']//select | ./following-sibling::select",
        e);
    if (r) {
      let n = r,
        o = k(n);
      return {
        type: i.FIELD_TYPE.SELECT,
        label: t,
        required: F(e),
        options: o,
        $input: n,
        $label: e
      }
    }
    return null
  },
  E = e => {
    let t = T(e),
      r =
      './/ancestor::li[contains(@class, "question") or contains(@class, "multiplechoice")]//input[@type="radio"]';
    "Veteran status" === t && (r =
        './following-sibling::ul//input[@type="radio" and contains(@id, "vet")]'),
      "Voluntary Self-Identification of Disability" === t && (r =
        './following-sibling::ul//input[@type="radio" and contains(@id, "disability")]');
    let n = (0, a.getOrderedNodes)(r, e);
    if (n.length > 0) {
      let r = n.map(e => {
        let t = e,
          r = t.closest("label") || t.nextElementSibling;
        return r?.textContent?.trim() || ""
      });
      return {
        type: i.FIELD_TYPE.RADIO,
        label: t,
        required: F(e),
        options: r,
        $input: n,
        $label: e,
        $radioParent: e
      }
    }
    return null
  },
  x = e => {
    let t = T(e),
      r = (0, a.getOrderedNodes)(
        './/ancestor::li[contains(@class, "question") or contains(@class, "multiplechoice") or contains(@class, "option")]//input[@type="checkbox"]',
        e);
    if (r.length > 0) {
      let n = r.map(e => {
        let t = e,
          r = t.closest("label") || t.nextElementSibling;
        return r?.textContent?.trim() || ""
      });
      return {
        type: i.FIELD_TYPE.CHECKBOX,
        label: t,
        required: F(e),
        $label: e,
        options: n,
        $checkboxs: r
      }
    }
    return null
  },
  C = e => {
    let t = T(e),
      r = (0, a.getFirstOrderedNode)('./following-sibling::input[@type="date"]', e);
    return r ? {
      type: i.FIELD_TYPE.DATE,
      label: t,
      required: F(e),
      $input: r,
      $label: e
    } : null
  },
  A = e => {
    let t = T(e);
    if (!t.includes("Desired Salary")) return null;
    let r = [],
      n = (0, a.getFirstOrderedNode)("./following::select[@ng-model='candidate.salary.currency']",
        e),
      o = (0, a.getFirstOrderedNode)(
        "./following-sibling::input[@ng-model='candidate.salary.salary']", e),
      l = (0, a.getFirstOrderedNode)("./following::select[@ng-model='candidate.salary.period']", e);
    if (n && o && l) {
      let a = k(n),
        u = k(l);
      return r.push({
        type: i.FIELD_TYPE.SELECT,
        label: "Currency of Desired Salary",
        options: a,
        required: F(e),
        $input: n,
        $label: e
      }), r.push({
        type: s(t),
        label: /\brange\b/i.test(t) ? "Desired Salary Range" :
          "Desired Salary Monthly, you must provide a number",
        required: F(e),
        $input: o,
        $label: e
      }), r.push({
        type: i.FIELD_TYPE.SELECT,
        label: "Period of Desired Salary, must select one, default to Monthly",
        options: u,
        required: F(e),
        $input: l,
        $label: e
      }), r
    }
    return null
  },
  k = e => Array.from(e.options).filter(e => "" !== e.value.trim() && !e.value.trim().startsWith(
    "?")).map(e => e.text.trim()),
  T = e => {
    let t = e?.textContent?.replaceAll("*", "").trim() || "";
    return (0, l.canonicalizeBreezyLabel)(t)
  },
  F = e => {
    let t = e.querySelector(".required:not(.ng-hide)");
    return null !== t
  },
  I = (e, t) => {
    let r = e.findIndex(e => (0, l.matchesBreezyLabel)(e.label, t));
    return -1 !== r ? e.splice(r, 1)[0] : null
  },
  j = () => "Submit",
  D = () =>
  `//button[.//span[${(0,l.buildBreezyPolyglotXpathTextCondition)("Submit Application",e=>`text()="${e}"`)}]]`

