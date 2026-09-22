/**
 * Parcel module id: awNtS
 * Resolved path: src/contents/sites/greenhouse/field-labels.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return String(e??"").replace(/[*\uff0a]/g,"").trim().replace(/\s+/g," ")}function i(e){return o(e).toLowerCase()}function a({rawLabel:e,inputId:t,inputAriaLabel:r}){let n=o(e),a=String(t??"").trim().toLowerCase(),l=i(r),s=i(n);return/^start(?:-date)?-year\b/.test(a)||"start year"===s||"start year"===l||"start date year"===s||"start date year"===l?"Start date year":/^end(?:-date)?-year\b/.test(a)||"end year"===s||"end year"===l||"end date year"===s||"end date year"===l?"End date year":/^start(?:-date)?-month\b/.test(a)||"start month"===s||"start month"===l||"start date month"===s||"start date month"===l?"Start date month":/^end(?:-date)?-month\b/.test(a)||"end month"===s||"end month"===l||"end date month"===s||"end date month"===l?"End date month":n}n.defineInteropFlag(r),n.export(r,"normalizeGreenhouseFieldLabel",()=>a)
