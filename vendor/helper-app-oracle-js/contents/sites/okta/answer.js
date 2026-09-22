/**
 * Parcel module id: 92sgA
 * Resolved path: contents/sites/okta/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>a);var o=e("~core/phone-country-code");function i(e,t){let r=(0,o.resolvePhoneFieldValue)(e,t),n=r.replace(/\D/g,"");if(r.startsWith("+")&&!r.startsWith("+1"))return r;if(10===n.length){let e=n.substring(0,3),t=n.substring(3,6),r=n.substring(6,10);return`(${e}) ${t}-${r}`}return r||e}function a(e){if(e.regular){let t=["Phone"];for(let r of t)if(e.regular[r]){let t=Array.isArray(e.regular[r])?e.regular[r][0]:e.regular[r];t&&"string"==typeof t&&(e.regular[r]=i(t,(0,o.resolvePhoneCountryCodeAnswer)(e)))}}return e}
