/**
 * Parcel module id: 8rDpV
 * Resolved path: src/contents/sites/paycomonline-v3/submit-tracking.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"buildPaycomSubmitExtraTrackingData",()=>i),n.export(r,"sendPaycomAutofillAnswerPairOnAttempt",()=>a);var o=e("~contents/sites/autofill-answer-pair-tracking");function i(e,t={}){let r=(0,o.buildFalconAutofillAnswerPairData)(e);return{...r?{falcon:r}:{},...t}}function a(e,t=o.sendAutofillAnswerPairEvent){return t(e),!0}
