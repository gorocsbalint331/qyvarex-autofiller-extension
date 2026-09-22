/**
 * Parcel module id: FFIyS
 * Resolved path: contents/sites/gusto/answer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  _tilde_contents/methods/answer.js
 *   ~contents/shared/filler -> 2aGsX  =>  _tilde_contents/shared/filler.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getDateValueFromRecord",()=>a),n.export(r,"createDateFillHandler",()=>l),n.export(r,"isSkippableInput",()=>u);var o=e("~contents/shared/filler"),i=e("~contents/methods/answer");function a(e,t){let r;for(let n in t)if((0,i.isMatched)(e,n)){r=t[n];break}if(null==r||""===r)throw new o.ValueError(`No matching field for label: ${e}`);if("object"==typeof r&&null!==r&&!Array.isArray(r)&&"[object Object]"===Object.prototype.toString.call(r)&&("start"in r||"end"in r))return r;let n=String(r).trim();if(""===n||"[object Object]"===n)throw new o.ValueError(`Field for label '${e}' resulted in an empty or invalid value`);return n}function l(e){let{fillInputTextField:t,updateFilledProgress:r,updateMissedProgress:n}=e;return async(e,i,l=!0)=>{if(e?.$input)try{let n=a(e.label,i);await t(e.$input,n),l&&r(e.label)}catch(t){t instanceof o.ValueError?l&&n(e.label):console.error("[gusto][DATE]",t)}}}let s=["hidden","submit","button","reset","file"];function u(e){let t=(e.type||"").toLowerCase();return!!s.includes(t)||e.disabled}
