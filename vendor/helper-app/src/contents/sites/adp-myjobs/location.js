/**
 * Parcel module id: M5XRV
 * Resolved path: src/contents/sites/adp-myjobs/location.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return{country:(e?.location?.country??"").trim(),state:(e?.location?.state??"").trim()}}function i(e,t,r){let n=e?.$input?.closest?.("adp-form-group[data-name]")?.getAttribute?.("data-name")?.toLowerCase?.()||"";return"country"===n?r.country?[r.country]:void 0:"state"===n?r.state?[r.state]:void 0:t}n.defineInteropFlag(r),n.export(r,"getAdpMyJobsAutofillLocation",()=>o),n.export(r,"getAdpMyJobsCurrentLocationSelectValue",()=>i)
