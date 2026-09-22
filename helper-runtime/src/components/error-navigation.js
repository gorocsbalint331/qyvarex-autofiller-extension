/**
 * Parcel module id: 0w80a
 * Resolved path: src/components/error-navigation.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"AUTOFILL_INFO_FIELD_ATTRIBUTE",()=>o),n.export(r,"scrollValidationFieldIntoView",()=>i);let o="data-autofill-info-field",i=(e,t)=>{if(!e)return!1;let r=e.querySelectorAll(`[${o}]`),n=Array.from(r).find(e=>e.getAttribute(o)===t);return!!n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),!0)}
