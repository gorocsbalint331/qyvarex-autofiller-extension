/**
 * Parcel module id: dotEY
 * Resolved path: src/contents/sites/catsone/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"formatAnswer",()=>s);let o=new Set(["state","state province"]),i=new Set(["country","country region","country territory","country of residence","residence country"]);function a(e){return e.toLowerCase().replace(/[^a-z]+/g," ").trim()}function l(e){let t=e?.trim();return t||null}function s(e){let t=l(e.state),r=l(e.country);return e.regular&&Object.keys(e.regular).forEach(n=>{let l=a(n);t&&o.has(l)&&(e.regular[n]=t),r&&i.has(l)&&(e.regular[n]=r)}),e}
