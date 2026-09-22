/**
 * Parcel module id: 4FaGo
 * Resolved path: src/contents/sites/intuit/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>i);var o=e("~core/phone-country-code");function i(e){if(!e?.regular)return e;for(let t of Object.keys(e.regular)){let r=t.trim().toLowerCase(),n=("mobile"===r||"mobile phone number"===r||"mobile number"===r)&&!r.includes("prefix");if(!n)continue;let i=e.regular[t],a=Array.isArray(i)?i[0]:i;"string"==typeof a&&a.trim()&&(e.regular[t]=(0,o.resolveNationalPhoneValue)(a,e))}return e}
