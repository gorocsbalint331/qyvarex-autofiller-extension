/**
 * Parcel module id: 2NWAX
 * Resolved path: contents/sites/xcompany/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants -> 6VEjR  =>  _tilde_constants.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 *   ~utils/string -> ijEFi  =>  _tilde_utils/string.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>s);var o=e("~constants"),i=e("~core/phone-country-code"),a=e("~utils/string");function l(e){let t=e.split(",").map(e=>e.trim());if(t.length<2)return null;let r=t[1].replace(/\./g,"").toUpperCase(),n=o.STATE_MAP[r];return n?(t[1]=n,t.join(", ")):null}function s(e){if(e.regular){let t=["First Name","First name","Last Name","Last name"];for(let r of t)e.regular[r]&&"string"==typeof e.regular[r]&&(e.regular[r]=(0,a.toNameTitleCase)(e.regular[r]));e.regular.Phone=(0,i.resolvePhoneFieldValue)(e.regular.Phone?.replace(/[^\d+]/g,"")||"",(0,i.resolvePhoneCountryCodeAnswer)(e));let r="Location (City)"in e.regular?"Location (City)":"Location / City",n=e.regular[r];if(null!=n){let t="string"==typeof n?[n]:Array.isArray(n)?[...n]:[],o=[];for(let e of t){if("string"!=typeof e)continue;e=e.replace(/,\s*(USA|United States?)$/i,"").trim();let t=l(e);t&&t!==e&&o.push(t),o.push(e)}o.length>0&&(e.regular[r]=o)}let o=Object.keys(e.regular).find(e=>"website"===e.toLowerCase()),s=Object.keys(e.regular).some(e=>/linkedin/i.test(e));if(o&&s){let t=Array.isArray(e.regular[o])?e.regular[o][0]:e.regular[o];"string"==typeof t&&/linkedin\.com/i.test(t)&&delete e.regular[o]}}return e}
