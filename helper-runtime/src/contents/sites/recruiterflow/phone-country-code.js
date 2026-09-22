/**
 * Parcel module id: gLFZj
 * Resolved path: src/contents/sites/recruiterflow/phone-country-code.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants/phone-country-code -> 3iM7P  =>  src/constants/phone-country-code.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "normalizePhoneCountryCodeSource", () => a), n.export(r,
  "normalizeCountryText", () => l), n.export(r, "getPhoneCountryName", () => u), n.export(r,
  "getPhoneCountryDialCode", () => c), n.export(r, "findRecruiterflowPhoneCountryOption", () => p);
var o = e("~constants/phone-country-code"),
  i = e("~core/phone-country-code");

function a(e) {
  let t = (0, i.resolvePhoneAnswerText)(e);
  if (!t) return null;
  let r = t.replace(/\(?\s*\+\d{1,4}\s*\)?/g, "").replace(/\s+/g, " ").trim(),
    n = t.match(/\+(\d{1,4})/)?.[1];
  if (n) return r ? `${r} +${n}` : `+${n}`;
  let o = t.replace(/\D/g, "");
  return o && o.length <= 4 ? `+${o}` : t
}

function l(e) {
  return String(e ?? "").replace(/\s+/g, " ").trim().toLowerCase()
}
let s = {
  1: "United States",
  44: "United Kingdom"
};

function u(e) {
  return e.querySelector(".iti__country-name")?.textContent || e.textContent || ""
}

function c(e) {
  let t = e.getAttribute("data-dial-code") || "";
  if (t) return t.replace(/\D/g, "");
  let r = e.querySelector(".iti__dial-code")?.textContent || e.textContent || "";
  return r.match(/\+(\d{1,4})/)?.[1] || ""
}

function d(e) {
  return String(e ?? "").match(/\+(\d{1,4})/)?.[1] || ""
}

function f(e) {
  let t = String(e ?? "").replace(/\D/g, "");
  if (!t) return "";
  let r = s[t];
  if (r) return r;
  let n = (0, o.PHONE_COUNTRY_CODE_OPTIONS).find(e => e.value.replace(/\D/g, "") === t);
  return n?.label.replace(/^\+\d+\s*/, "").trim() || ""
}

function p(e, t) {
  if (!l(t)) return null;
  let r = (0, i.findPhoneCountryOption)(t, e.map(e => ({
    countryName: u(e).trim(),
    dialCode: c(e),
    iso2: e.getAttribute("data-country-code") || "",
    element: e
  })));
  if (r?.element) return r.element;
  if ((0, i.extractPhoneCountryName)(t).trim()) return null;
  let n = d(t);
  if (!n) return null;
  let o = l(f(n));
  return o ? e.find(e => c(e) === n && l(u(e)) === o) ?? null : null
}

