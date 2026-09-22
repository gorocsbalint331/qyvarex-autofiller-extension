/**
 * Parcel module id: 6JbwN
 * Resolved path: src/contents/crawler/dover-country.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){let t=String(e??"").trim();if(!t)return null;let r=t.replace(/\./g,"").replace(/\s+/g," ").toLowerCase();return"us"===r||"usa"===r||"united states"===r||"united states of america"===r?"United States":"ca"===r||"canada"===r?"Canada":t}function i(e){let t=String(e??"").replace(/\*/g,"").replace(/[\/_-]+/g," ").replace(/\s+/g," ").trim().toLowerCase();return!(!t||t.includes("phone")||t.includes("dial")||t.includes("code"))&&("country"===t||"country region"===t||"country territory"===t||"country of residence"===t||"residence country"===t||"current country"===t)}function a(e){return o(e)}function l(e,t,r){let n=a(r);if(n){for(let t of Object.keys(e))i(t)&&(e[t]=n);for(let r of t)i(r.label)&&(e[r.label]=n)}}n.defineInteropFlag(r),n.export(r,"getDoverCountryFillValue",()=>a),n.export(r,"applyDoverCountryFromAutofillInfo",()=>l)
