/**
 * Parcel module id: dh2wu
 * Resolved path: src/contents/sites/recruitee/answer.js
 * Dependencies:
 *   ./phone-country-code -> ch2m6  =>  src/contents/sites/recruitee/phone-country-code.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>l);var o=e("~core/phone-country-code"),i=e("./phone-country-code");function a(e){return(0,o.resolvePhoneFieldValue)(e)||e}function l(e,t){if(e.regular){let r=new Set((t||[]).filter(e=>"number"===e.__recruiteePhoneField).map(e=>e.label));for(let t in e.regular){if(t===i.RECRUITEE_PHONE_COUNTRY_CODE_LABEL||!t.toLowerCase().includes("phone"))continue;let n=e.regular[t],o=Array.isArray(n)?n:[n],l=o.find(e=>"string"==typeof e&&e.trim());"string"==typeof l&&(e.regular[t]=r.has(t)?l:a(l))}}return e}
