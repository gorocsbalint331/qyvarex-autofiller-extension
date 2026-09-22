/**
 * Parcel module id: fiDTv
 * Resolved path: src/components/dirty-state.js
 * Dependencies:
 *   ../../../store/workday-signup-info -> jjbI7  =>  src/store/workday-signup-info.js
 *   ./mappers/save-payload -> 7e0tg  =>  mappers/save-payload.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getAutofillInfoChangeSummary",()=>l);var o=e("../../../store/workday-signup-info"),i=e("./mappers/save-payload");let a=e=>{let{regenerationEmail:t,...r}=e;return r},l=({current:e,initial:t,signupPassword:r,initialSignupPassword:n="",isSignupPasswordLoaded:l,isSignupPasswordTouched:s})=>{let u=(0,i.buildAutofillInfoSaveBody)(e),c=t?(0,i.buildAutofillInfoSaveBody)(t):u,d=JSON.stringify(a(u.structuredData))!==JSON.stringify(a(c.structuredData)),f=(t?.signupInformation.registrationEmail??"").trim()!==e.signupInformation.registrationEmail.trim(),p=s&&r!==n?(0,o.getWorkdaySignupPasswordLocalUpdateAction)({password:r,isLoaded:l,isTouched:s}):"skip",m="skip"!==p;return{hasChanges:d||f||m,hasRegularAutofillChanges:d,hasRegistrationEmailChanges:f,hasSignupPasswordChanges:m,signupPasswordAction:p}}
