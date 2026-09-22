/**
 * Parcel module id: huUp4
 * Resolved path: src/contents/sites/brassring/country.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");async function o(e){let t=null;try{let r=await e.fetchAutofillInfo(),n=r?.location?.country;if("string"!=typeof n||!n.trim())return{country:null,committed:!1,dependentSettled:!1};t=n.trim();let o=await e.fillCountry(t);if(!o)return{country:t,committed:!1,dependentSettled:!1};let i=await e.waitForDependentFields().catch(()=>!1);return{country:t,committed:!0,dependentSettled:i}}catch{return{country:t,committed:!1,dependentSettled:!1}}}n.defineInteropFlag(r),n.export(r,"runBrassringCountryPrefill",()=>o)
