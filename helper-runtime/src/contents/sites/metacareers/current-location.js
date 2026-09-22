/**
 * Parcel module id: 93td1
 * Resolved path: src/contents/sites/metacareers/current-location.js
 * Dependencies:
 *   ./location-operation -> jTGaf  =>  src/contents/sites/metacareers/location-operation.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getMetaCareersEducationReplayRules",()=>i),n.export(r,"fillMetaCurrentLocation",()=>a);var o=e("./location-operation");function i(e){return e.filter(e=>!(0,o.isMetaCurrentLocationRule)(e))}async function a({answer:e,rule:t,regularValue:r},{prepareCapture:n,triggerNativeSearch:i,resolveCaptured:a,fillResolvedLocation:l}){let s=(0,o.getMetaCurrentLocationOriginalAnswer)(e,r);if(!s)return!1;let u=null,c=!0;try{let e=await n(s);if(!e?.captureId||!(u=await i(t.$input,s)))return!1;let r=await a(e.captureId),d=(0,o.getMetaResolvedLocationValue)(r);if(!d)return console.warn("[MetaCurrentLocation] resolve returned no selected value",{action:r?.action??null,selectedValuesCount:r?.selected_values?.length??0}),!1;let f=await l(t.$input,d,s);if(f)return c=!1,!0;return console.warn("[MetaCurrentLocation] resolved value was not committed"),!1}catch(e){return console.warn("[MetaCurrentLocation] fill failed with an exception",{message:e instanceof Error?e.message:String(e)}),!1}finally{if(u&&c)try{await u.cleanup()}catch{}}}
