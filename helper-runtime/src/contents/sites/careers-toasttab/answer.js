/**
 * Parcel module id: gqA5z
 * Resolved path: src/contents/sites/careers-toasttab/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return e.toLowerCase().replace(/[()]/g,"").replace(/\s+/g," ").trim()}function i(e){return o(e).replace(/\+\d+/g,"").replace(/[^a-z0-9]+/g," ").trim()}function a(e,t){let r=o(e);if(!r)return null;let n=t.filter(e=>o(e.label)===r);if(1===n.length)return n[0].countryCode;let a=r.match(/\+\d+/)?.[0],l=i(r);if(l){let e=t.filter(e=>{let t=i(e.label),r=t===l||t.includes(l)||l.includes(t);return r&&(!a||e.dialCode===a)});return 1===e.length?e[0].countryCode:null}let s=t.filter(e=>e.dialCode===a);return 1===s.length?s[0].countryCode:null}n.defineInteropFlag(r),n.export(r,"findCountryCodeForAnswer",()=>a)
