/**
 * Parcel module id: d5UKD
 * Resolved path: src/contents/sites/ripplehire/submit-tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"resolveRipplehireSubmitButton",()=>a),n.export(r,"getRipplehireSubmitButton",()=>l);let o="submit application";function i(e){return(e||"").replace(/\s+/g," ").trim().toLowerCase()}function a(e){let t=e?.closest;if("function"!=typeof t)return null;let r=t.call(e,"button");if(!r||"button"!==r.tagName.toLowerCase()||"submit"!==i(r.getAttribute("type"))||r.disabled||r.hasAttribute("disabled"))return null;let n=i(r.getAttribute("id")),a=i(r.getAttribute("aria-label")),l=i(r.textContent);return"btn-submit-app"===n||a===o||l===o?r:null}function l(e=document){return Array.from(e.querySelectorAll('button[type="submit"]')).find(e=>a(e)===e)||null}
