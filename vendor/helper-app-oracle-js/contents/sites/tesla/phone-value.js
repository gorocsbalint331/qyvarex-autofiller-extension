/**
 * Parcel module id: bOWgq
 * Resolved path: src/contents/sites/tesla/phone-value.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/phone-country-code -> 8nENw  =>  _tilde_core/phone-country-code.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"resolveTeslaPhoneCountrySource",()=>i),n.export(r,"resolveTeslaPhoneValue",()=>a),n.export(r,"parseTeslaPhoneCountryOption",()=>l);var o=e("~core/phone-country-code");function i(e,t,r){return(0,o.resolvePhoneCountrySource)(e,t,r)}function a(e,t){return(0,o.resolveDualControlPhoneValue)(e,t)}function l(e){let t=(e.getAttribute("data-tds-value")||"").trim(),r=(e.textContent||"").replace(/\s+/g," ").trim(),n=t&&r.toUpperCase().startsWith(t.toUpperCase())?r.slice(t.length).trim():r;return{...(0,o.parsePhoneCountryOptionLabel)(n||e.getAttribute("data-tds-label"),e),iso2:t.toLowerCase()}}
