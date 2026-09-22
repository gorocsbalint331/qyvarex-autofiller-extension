/**
 * Parcel module id: 648AA
 * Resolved path: src/contents/sites/bamboohr/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   dayjs/plugin/customParseFormat -> g94SE  =>  dayjs/plugin/customParseFormat.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "formatAnswer", () => h), n.export(r,
  "getBamboohrCountryFillValue", () => b), n.export(r, "getFormSnapshot", () => x);
var o = e("dayjs"),
  i = n.interopDefault(o),
  a = e("dayjs/plugin/customParseFormat"),
  l = n.interopDefault(a),
  s = e("~constants"),
  u = e("~core/xpath");
(0, i.default).extend(l.default);
let c = "Date Available",
  d = "MM/DD/YYYY",
  f = ["YYYY-MM-DD", "YYYY/MM/DD", "MM/DD/YYYY", "M/D/YYYY"];

function p(e) {
  let t = Array.isArray(e) ? e.find(e => String(e ?? "").trim()) : e,
    r = String(t ?? "").trim();
  if (!r) return null;
  let n = (0, i.default)(r, f, !0);
  if (!n.isValid() && /^\d/.test(r) && r.length >= 8 && (n = (0, i.default)(r)), !n.isValid())
    return null;
  let o = n.year();
  return o < 1900 || o > 2100 ? null : n.format(d)
}

function m(e) {
  return e?.textContent?.replaceAll("*", "").trim()
}

function h(e) {
  return e.regular && (c in e.regular && (e.regular[c] = p(e.regular[c]) ?? (0, i.default)().format(
    d)), e.regular?.State && (e.regular.State = s.STATE_MAP[String(e.regular.State).trim()
    .toUpperCase()] ?? e.regular.State)), e
}

function g(e) {
  let t = String(e ?? "").trim();
  if (!t) return null;
  let r = t.replace(/\./g, "").replace(/\s+/g, " ").toLowerCase();
  return "us" === r || "usa" === r || "united states" === r || "united states of america" === r ?
    "United States" : "ca" === r || "canada" === r ? "Canada" : "uk" === r || "gb" === r ||
    "great britain" === r || "united kingdom" === r ? "United Kingdom" : t
}

function b(e, t) {
  return g(t) ?? g(e?.profile_data?.country) ?? g(e?.profileData?.country) ?? g(e?.country) ??
    "United States"
}

function y(e) {
  return e instanceof HTMLElement ? v(e) || w(e) || S(e) || E(e) : null
}

function v(e) {
  let t = e.querySelector("legend"),
    r = !1;
  if (!t) {
    let n = (0, u.getFirstOrderedNode)(`self::*[
        not(child::label)
        and (
          child::div[contains(concat(' ', @class, ' '), ' fab-InputWrapper ')]
          and .//div[contains(concat(' ', @class, ' '), ' fab-Checkbox ')]
        ) or (
          @data-fabric-component="Checkbox"
        )
      ]`, e);
    if (!n || !(t = e.querySelector("label.fab-Checkbox__label") || e.querySelector(
        "label.MuiFormControlLabel-root"))) return null;
    r = !0
  }
  let n = m(t);
  if (!n) return null;
  let o = [],
    i = (0, u.getOrderedNodesSafe)(`.//*[
      @data-fabric-component="Radio"
      or @data-fabric-component="Checkbox"
      or contains(concat(' ', @class, ' '), ' fab-Radio ')
      or contains(concat(' ', @class, ' '), ' fab-Checkbox ')
    ]`, e);
  for (let e of i) {
    let t = e.querySelector("input[type='radio'], input[type='checkbox']"),
      r = e.querySelector("label")?.textContent?.trim();
    t && r && t.checked && o.push(r)
  }
  return {
    label: n,
    value: o
  }
}

function w(e) {
  let t = (0, u.getFirstOrderedNode)("self::*[.//select]", e);
  if (!t) return null;
  let r = t.querySelector("label");
  if (!r) return null;
  let n = m(r);
  if (!n) return null;
  let o = t?.querySelector(".fab-SelectToggle__content");
  return o ? {
    label: n,
    value: o.textContent?.trim()
  } : null
}

function S(e) {
  let t = (0, u.getFirstOrderedNode)(`self::*[
      .//input[(contains(concat(' ', @class, ' '), ' fabric-') and substring(concat(' ', @class, ' '), string-length(concat(' ', @class, ' ')) - 5) = '-input ') or contains(concat(' ', @class, ' '), ' MuiInputBase-input ')]
      or .//textarea
      or .//label[@for="dateAvailable"]
    ]`, e);
  if (!t) return null;
  let r = t.querySelector("label");
  if (!r) return null;
  let n = m(r);
  if (!n) return null;
  if ("dateAvailable" === r.getAttribute("for")) {
    let e = r.cloneNode(!0);
    if (Array.from(e.children).forEach(e => e.remove()), !(n = m(e))) return null
  }
  let o = t.querySelector("input, textarea");
  return o ? {
    label: n,
    value: o.value
  } : null
}

function E(e) {
  let t = (0, u.getFirstOrderedNode)("self::*[.//label[@for and string(@for) != '']]", e);
  if (!t) return null;
  let r = t.querySelector("label");
  if (!r) return null;
  let n = m(r);
  return n ? {
    label: n,
    value: null
  } : null
}

function x() {
  let e = {},
    t = (0, u.getOrderedNodesSafe)(`.//*[@id="careerApplicationForm"]//div[contains(@class, "fab-FormRow")]
    | .//form[@id="job-application-form"]//*[contains(@class, "MuiFormControl-root") or @data-fabric-component="Checkbox"]
    `, document);
  for (let r of t) {
    let t = y(r);
    e[t.label] = t.value
  }
  return e
}

