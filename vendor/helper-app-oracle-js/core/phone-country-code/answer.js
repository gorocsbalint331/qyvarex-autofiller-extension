/**
 * Parcel module id: exLmg
 * Resolved path: core/phone-country-code/answer.js (oracle restore)
 * Dependencies:
 *   ./parse -> 6zjmU  =>  parse.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PHONE_COUNTRY_CODE_LABEL", () => i), n.export(r,
    "PHONE_COUNTRY_CODE_ANSWER_LABELS", () => a), n.export(r, "PHONE_COUNTRY_CODE_DESCRIPTION",
  () => l), n.export(r, "LOCAL_PHONE_DESCRIPTION", () => s), n.export(r,
    "INTERNATIONAL_PHONE_DESCRIPTION", () => u), n.export(r, "resolvePhoneAnswerText", () => c), n
  .export(r, "resolvePhoneCountryCodeAnswer", () => d);
var o = e("./parse");
let i = "Phone Country Code",
  a = [i, "Country Phone Code", "Phone Code"],
  l =
  "Return the phone country calling code together with the country, formatted as `+<code> <English country name>`, for example `+86 China` or `+1 United States`. Always include the leading plus sign and the English country name. Do not return the code alone, the country alone, or a localized country name.",
  s =
  "Return only the national phone number, without the country calling code and without a leading plus sign, for example `15386665928` for China or `7347474488` for the United States. The phone country code is provided separately in its own field, so it must not be repeated here.",
  u =
  "Return the full international phone number in E.164 format, starting with a plus sign followed by the country calling code, for example `+8615386665928`. The leading plus sign is required; never return the country calling code as bare digits such as `8615386665928`.";

function c(e) {
  let t = Array.isArray(e) ? e : [e],
    r = t.find(e => String(e ?? "").trim());
  return void 0 === r ? "" : String(r).trim()
}

function d(e, t = a) {
  let r = e?.regular;
  if (!r) return;
  for (let e of t) {
    let t = c(r[e]);
    if (t) return t
  }
  let n = new Set(t.map(o.normalizePhoneCountryText));
  for (let [e, t] of Object.entries(r)) {
    if (!n.has((0, o.normalizePhoneCountryText)(e))) continue;
    let r = c(t);
    if (r) return r
  }
}

