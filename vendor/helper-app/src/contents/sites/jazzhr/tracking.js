/**
 * Parcel module id: 5WaRj
 * Resolved path: src/contents/sites/jazzhr/tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"isJazzhrTrackingButton",()=>a),n.export(r,"resolveJazzhrTrackingButton",()=>l),n.export(r,"getJazzhrSubmitButton",()=>s);let o="button, input[type='submit'], input[type='button'], a, [role='button']";function i(e){return(e.textContent||e.getAttribute("value")||e.getAttribute("aria-label")||e.getAttribute("title")||"").replace(/\s+/g," ").trim().toLowerCase()}function a(e){if(!e||"function"!=typeof e.getAttribute)return!1;let t=e.disabled||null!=e.getAttribute("disabled")||"true"===e.getAttribute("aria-disabled");if(t)return!1;let r=i(e),n=e.getAttribute("type")?.toLowerCase(),o=e.getAttribute("id")?.toLowerCase()||"",a=e.getAttribute("class")?.toLowerCase()||"";return"submit"===n||"resumator-submit-resume"===o||"resumator-mobile-apply-button"===o||o.includes("submit")||a.includes("submit")||"apply"===r||"submit"===r||"continue"===r||"next"===r||r.includes("submit")||r.includes("apply")}function l(e){let t=e.closest(o);return a(t)?t:null}function s(e=document){let t=e.querySelector("#resumator-submit-resume");if(a(t))return t;let r=Array.from(e.querySelectorAll(o));return r.find(a)||null}
