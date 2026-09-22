/**
 * Parcel module id: eFtdg
 * Resolved path: src/contents/sites/paycomonline-v3/submit-outcome.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"capturePaycomSubmitBaseline",()=>i),n.export(r,"waitForPaycomSubmitOutcome",()=>a);var o=e("~utils/delay");function i(){return l()}async function a(e,t,r,n={}){let i=n.pollMs??250,a=n.maxPolls??14,s=n.findSubmitButton;for(let n=0;n<a;n++){if(r?.aborted)return"failure";if(await (0,o.delay)(i),s&&null===s())return"success";let n=l();if(0===e){if(n>0){if(t&&!t.closest(".uiLoadingButton-error"))continue;return"failure"}}else if(0===n)return"success"}if(s&&null===s())return"success";let u=l();return 0===u?"success":"failure"}function l(){let e=document.querySelectorAll(".uiLoadingButton-error"),t=0;for(let r of Array.from(e)){let e=r;(null!==e.offsetParent||e.getClientRects().length>0)&&t++}return t}
