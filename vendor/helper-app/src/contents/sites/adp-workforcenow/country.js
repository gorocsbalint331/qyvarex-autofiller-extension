/**
 * Parcel module id: dBzh2
 * Resolved path: src/contents/sites/adp-workforcenow/country.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"isAdpCountryOptionMatch",()=>l);let o=[["us","usa","united states","united states of america"],["ca","canada"],["uk","gb","great britain","united kingdom"]];function i(e){return(e||"").replace(/\s+/g," ").trim().toLowerCase()}function a(e){return o.find(t=>t.some(t=>t===e))??null}function l(e,t,r){let n=i(e);if(!n)return!1;let o=a(n)??[n],l=i(t),s=i(r);return[l,s].some(e=>e.length>0&&o.includes(e))}
