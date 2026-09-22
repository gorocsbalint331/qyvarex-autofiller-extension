/**
 * Parcel module id: 0548q
 * Resolved path: src/contents/sites/eightfold/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getEightfoldPhoneCountryCodeSource",()=>s),n.export(r,"resolveEightfoldPhoneValue",()=>u),n.export(r,"formatAnswer",()=>c);var o=e("~core/phone-country-code");function i(e,t){let r=e.fillDataList?.find(e=>e?.name===t),n=r?.value;return"string"==typeof n?n.trim():""}function a(e){return Array.isArray(e)?e.find(e=>"string"==typeof e&&!!e.trim())?.trim()??"":"string"==typeof e?e.trim():""}function l(e){return"string"==typeof e?e.trim():""}function s(e,t,r={}){let n=e&&t?a(t.regular?.[e.label])||i(t,e.label):"";return n||l(r.phoneCountryCode)||l(r.country)}function u(e,t,r){return(0,o.resolveDualControlPhoneValue)(e,t,r)}function c(e){let t=["Phone: Phone Number","Phone-Phone Number","Number","Phone Number"];for(let r of t){let t=e.regular?.[r]||i(e,r);t&&(e.regular={...e.regular,[r]:(0,o.resolveNationalPhoneValue)(t,e)})}return e}
