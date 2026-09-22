/**
 * Parcel module id: iDrk3
 * Resolved path: src/contents/sites/trinethire/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>l);var o=e("~core/phone-country-code");function i(e,t){let r=(0,o.resolvePhoneFieldValue)(e,t),n=r.replace(/\D/g,"");if(r.startsWith("+")&&!r.startsWith("+1"))return r;if(10===n.length){let e=n.substring(0,3),t=n.substring(3,6),r=n.substring(6,10);return`(${e}) ${t}-${r}`}return r||e}function a(e){let t=Array.isArray(e)?String(e[0]??"").trim():String(e??"").trim();return t?t.split(",")[0]?.trim()||t:""}function l(e){if(e.regular){let t=["Phone number"];for(let r of t)if(e.regular[r]){let t=Array.isArray(e.regular[r])?e.regular[r][0]:e.regular[r];t&&"string"==typeof t&&(e.regular[r]=i(t,(0,o.resolvePhoneCountryCodeAnswer)(e)))}let r=a(e.regular.City);r&&(e.regular.City=r)}return e}
