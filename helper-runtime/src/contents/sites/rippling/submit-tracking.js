/**
 * Parcel module id: 2vRmr
 * Resolved path: src/contents/sites/rippling/submit-tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"resolveRipplingSubmitButton",()=>a),n.export(r,"getRipplingSubmitButton",()=>l);let o=new Set(["apply","submit application"]);function i(e){return(e||"").replace(/\s+/g," ").trim().toLowerCase()}function a(e){let t=e?.closest;if("function"!=typeof t)return null;let r=t.call(e,"button");if(!r||"button"!==r.tagName.toLowerCase()||"submit"!==i(r.getAttribute("type"))||r.disabled||r.hasAttribute("disabled"))return null;let n=i(r.getAttribute("data-testid")),a=(r.getAttribute("class")||"").split(/\s+/),l=i(r.getAttribute("aria-label")),s=i(r.textContent);return"apply"===n||a.includes("submit-app-button")||o.has(l)||o.has(s)?r:null}function l(e=document){return Array.from(e.querySelectorAll('button[type="submit"]')).find(e=>a(e)===e)||null}
