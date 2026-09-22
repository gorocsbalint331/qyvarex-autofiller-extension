/**
 * Parcel module id: aK1rx
 * Resolved path: src/contents/sites/personio/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatPhoneNumber",()=>i);var o=e("~core/phone-country-code");function i(e,t){let r=(0,o.resolvePhoneFieldValue)(e,t);if(r.startsWith("+")&&!r.startsWith("+1"))return r;let n=r.replace(/\D/g,"");if(10===n.length){let e=n.substring(0,3),t=n.substring(3,6),r=n.substring(6,10);return`+1 ${e} ${t} ${r}`}return r||e}
