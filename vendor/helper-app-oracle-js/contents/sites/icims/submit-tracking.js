/**
 * Parcel module id: 5kesW
 * Resolved path: contents/sites/icims/submit-tracking.js (oracle restore)
 * Dependencies:
 *   ../autofill-answer-pair-tracking -> aCElZ  =>  _tilde_contents/sites/autofill-answer-pair-tracking.js
 *   ./resolve-tracking -> 6hjQG  =>  resolve-tracking.js
 *   ./snapshot-alignment -> Qx2Vt  =>  snapshot-alignment.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"IcimsNavigationTrackingController",()=>s);var o=e("../autofill-answer-pair-tracking"),i=e("./resolve-tracking"),a=e("./snapshot-alignment");function l(e,t){let r=(0,o.buildFalconAutofillAnswerPairData)(e.answer());return(0,a.alignIcimsEducationAnswerPairTrackingData)({formUrl:e.formUrl(),autofillSnapshot:e.autofillSnapshot,submitSnapshot:t,additionalAutofillData:e.additionalAutofillData,additionalSubmitData:e.getAdditionalSubmitData(),extraData:{...r?{falcon:r}:{},...(0,i.buildIcimsClientSearchTrackingData)(e.educationOutcomes())},source:e.source()})}class s{startRun(){this.navigationTrackingAbortController?.abort(),this.navigationTrackingAbortController=null}bind(e){this.startRun();let t=new AbortController;this.navigationTrackingAbortController=t;let r=async r=>{let n=e.resolveButton(r.target);if(n&&e.isTrackedButton(n))try{let r=await e.getSubmitSnapshot();if(t.signal.aborted)return;let n=l(e,r);e.send(n),await e.afterSend({autofillSnapshot:e.autofillSnapshot,submitSnapshot:r})}catch{}};e.root.addEventListener("click",r,{capture:!0,signal:t.signal})}constructor(){this.navigationTrackingAbortController=null}}
