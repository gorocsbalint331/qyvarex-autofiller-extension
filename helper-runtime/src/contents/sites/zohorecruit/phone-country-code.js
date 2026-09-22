/**
 * Parcel module id: h69qT
 * Resolved path: src/contents/sites/zohorecruit/phone-country-code.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"normalizePhoneCountry",()=>i),n.export(r,"findZohoPhoneCountryOption",()=>a),n.export(r,"extractDialCode",()=>l),n.export(r,"formatZohoPhoneNumber",()=>s);var o=e("~core/phone-country-code");function i(e){return String(e??"").toLowerCase().replace(/[()]/g," ").replace(/\s*\+\s*(\d+)/g,"+$1").replace(/\s+/g," ").trim()}function a(e,t,r){if(!i(t))return null;let n=(0,o.findPhoneCountryOption)(t,e.map(e=>(0,o.parsePhoneCountryOptionLabel)(e.textContent||"",e)),{addressCountry:r||"",allowPrimaryDialFallback:!0});return n?.element??null}function l(e){return String(e??"").match(/\+(\d+)/)?.[1]||""}function s(e,t){let r=(0,o.toNationalPhoneValue)(e,t?`+${t}`:"");return r.replace(/\D/g,"")||String(e??"").replace(/\D/g,"")}
