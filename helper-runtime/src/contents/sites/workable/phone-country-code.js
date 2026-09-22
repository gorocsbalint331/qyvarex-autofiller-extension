/**
 * Parcel module id: 5lsEB
 * Resolved path: src/contents/sites/workable/phone-country-code.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "WORKABLE_PHONE_COUNTRY_CODE_LABEL", () => i), n.export(r,
  "WORKABLE_PHONE_WITH_COUNTRY_CODE_DESCRIPTION", () => a), n.export(r,
  "resolveWorkablePhoneCountryCode", () => s), n.export(r, "parseWorkablePhoneCountryOption",
() => u), n.export(r, "formatWorkablePhoneCountryOption", () => c), n.export(r,
  "getWorkablePhoneCountryOptions", () => d), n.export(r, "findWorkablePhoneCountryOption", () =>
  f), n.export(r, "getWorkablePhoneCountryContainer", () => p), n.export(r,
  "readWorkableSelectedPhoneCountry", () => m), n.export(r, "formatWorkablePhoneValue", () => h);
var o = e("~core/phone-country-code");
let i = o.PHONE_COUNTRY_CODE_LABEL,
  a = o.LOCAL_PHONE_DESCRIPTION;

function l(e) {
  return {
    countryName: e.countryName,
    dialCode: e.dialCode,
    iso2: e.countryCode,
    element: e
  }
}

function s(e) {
  return (0, o.resolvePhoneCountryCodeAnswer)(e, [i])
}

function u(e) {
  return {
    countryCode: e.getAttribute("data-country-code") || "",
    countryName: e.querySelector(".iti__country-name")?.textContent?.trim() || "",
    dialCode: (e.getAttribute("data-dial-code") || e.querySelector(".iti__dial-code")
      ?.textContent || "").replace(/\D/g, "")
  }
}

function c(e) {
  return (0, o.formatPhoneCountryOptionLabel)(e)
}

function d(e) {
  let t = Array.from(e.querySelectorAll(
    "li.iti__country[role='option'][data-country-code][data-dial-code], li.iti__country[data-country-code][data-dial-code]"
    )).map(u);
  return (0, o.dedupePhoneCountryOptions)(t.map(l)).map(e => e.element)
}

function f(e, t) {
  let r = (0, o.findPhoneCountryOption)(e, t.map(l));
  return r ? r.element : null
}

function p(e) {
  return e ? e.classList?.contains("iti") ? e : e.closest?.(".iti") || null : null
}

function m(e) {
  let t = e.querySelector('li.iti__country[aria-selected="true"]');
  if (t) return c(u(t));
  let r = e.querySelector(
    "button.iti__selected-country, .iti__selected-flag[role='combobox'], .iti__selected-flag");
  if (!r) return "";
  let n = r.getAttribute("title") || "",
    o = r.querySelector(".iti__selected-dial-code")?.textContent || "",
    i = d(e),
    a = f(n, i) || f(o, i);
  return a ? c(a) : ""
}

function h(e, t) {
  return (0, o.stripDialCodePrefix)(e, t)
}

