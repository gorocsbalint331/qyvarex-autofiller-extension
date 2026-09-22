/**
 * Parcel module id: bayUu
 * Resolved path: src/contents/crawler/dover-phone.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return String(e??"").replace(/[*\uff0a]\s*$/g,"").replace(/\s+/g," ").trim().toLowerCase()}function i(e){let t=o(e);return"phone"===t||"phone number"===t}function a(e){if("string"!=typeof e)return e;let t=e.match(/^\s*\(\+(\d{1,4})\)\s*(.+)$/);return t?`+${t[1]} ${t[2]}`:e}function l(e){for(let t of Object.keys(e))i(t)&&(e[t]=a(e[t]))}n.defineInteropFlag(r),n.export(r,"isDoverPhoneField",()=>i),n.export(r,"normalizeDoverPhoneValue",()=>a),n.export(r,"applyDoverPhoneNormalization",()=>l)
