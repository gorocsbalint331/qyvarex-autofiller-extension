/**
 * Parcel module id: 5ec9e
 * Resolved path: contents/sites/ycombinator/submit-tracking.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){let t=e?.closest;if("function"!=typeof t)return null;let r=t.call(e,"button");return!r||"button"!==r.tagName.toLowerCase()||"submit"!==(r.getAttribute("type")||"").toLowerCase()||r.disabled||r.hasAttribute("disabled")?null:r}function i(e=document){return Array.from(e.querySelectorAll('button[type="submit"]')).find(e=>o(e)===e)||null}n.defineInteropFlag(r),n.export(r,"resolveYCombinatorSubmitButton",()=>o),n.export(r,"getYCombinatorSubmitButton",()=>i)
