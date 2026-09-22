/**
 * Parcel module id: iZ6Kd
 * Resolved path: src/contents/sites/JobScore/contact-rule-order.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return String(e??"").toLowerCase().replace(/[:*]/g,"").replace(/\s+/g," ").trim()}function i(e){let t=e.$input;return o([e.label,t?.id,t?.name,t?.getAttribute?.("id"),t?.getAttribute?.("name")].join(" "))}function a(e){let t=i(e);return/\bcountry\b/.test(t)&&!/\bstate\b/.test(t)&&!/\bprovince\b/.test(t)}function l(e){let t=i(e);return/\bstate\b/.test(t)||/\bprovince\b/.test(t)||/\bhome_state\b/.test(t)}function s(e){let t=i(e);return/\bcity\b/.test(t)||/\bhome_city\b/.test(t)}function u(e){return a(e)?0:l(e)?1:2}function c(e){return e.map((e,t)=>({index:t,priority:u(e),rule:e})).sort((e,t)=>e.priority-t.priority||e.index-t.index).map(({rule:e})=>e)}function d(e){return c(e.filter(e=>l(e)||s(e)))}function f(e){return null==e||"string"==typeof e&&""===e.trim()||Array.isArray(e)&&e.every(e=>""===String(e??"").trim())}function p(e,t){let r={...e},n=t?.location??{};for(let[e,i]of[["City:",n.city??t?.city],["State or Province:",n.state??t?.state]]){let t=Object.keys(r).find(t=>o(t)===o(e)),n=String(i??"").trim();n&&(!t||f(r[t]))&&(r[t||e]=n)}return r}n.defineInteropFlag(r),n.export(r,"orderJobScoreContactRules",()=>c),n.export(r,"getJobScoreLocationRetryRules",()=>d),n.export(r,"applyJobScoreLocationFallbacks",()=>p)
