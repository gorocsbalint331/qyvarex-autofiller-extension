/**
 * Parcel module id: aCsiw
 * Resolved path: contents/sites/myworkday/agreements.js (oracle restore)
 * Dependencies:
 *   ./rules -> 1H2ID  =>  _tilde_contents/sites/myworkday/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"isWorkdayAgreementInput",()=>a),n.export(r,"getWorkdayAgreementState",()=>l);var o=e("~core/enums"),i=e("./rules");function a(e){return"acceptTermsAndAgreements"===e.name||e.getAttribute?.("data-automation-id")==="agreementCheckbox"}function l(e){return e.type===o.FIELD_TYPE.CHECKBOX&&"$checkboxs"in e&&1===e.$checkboxs.length&&a(e.$checkboxs[0])?e.$checkboxs.every(i.isWorkdayInputSelected):null}
