/**
 * Parcel module id: 38kQO
 * Resolved path: src/contents/sites/eightfold/location-operation.js
 * Dependencies:
 *   ./route -> e4STq  =>  src/contents/sites/eightfold/careerhub/route.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/profile-location-original-answer -> 8kwJN  =>  src/contents/sites/profile-location-original-answer.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getCareerHubLocationOriginalAnswer",()=>u),n.export(r,"buildCareerHubLocationOperation",()=>c),n.export(r,"getCareerHubResolvedLocationValue",()=>d);var o=e("~contents/sites/profile-location-original-answer"),i=e("./route");let a="/api/suggest",l="location_noarea";function s(e){return"https:"===e.protocol&&e.hostname.endsWith(".eightfold.ai")&&(0,i.isEightfoldCareerHubJobPath)(e.pathname)}function u(e,t){let r=(0,o.getProfileLocationOriginalAnswer)(e);if(r.value)return r;let n=t.trim();return{value:n,source:n?"regular":""}}function c({currentUrl:e,question:t,originalAnswer:r}){let n=new URL(e);if(!s(n))throw Error("Invalid Eightfold CareerHub URL");return{field_type:"location",question:t,description:"Search Eightfold CareerHub Location suggestions and select the suggestions[].term value that best matches the candidate's city, state or region, and country.",original_answer:r,search_request_schema:{url:new URL(a,n.origin).toString(),allowed_methods:["GET"],headers:{accept:"application/json, text/plain, */*",referer:e},params:[{name:"term",location:"query",description:"Free-text Eightfold CareerHub Location search query.",default_value:"",isSearchParam:!0},{name:"dictionary",location:"query",description:"Eightfold Location suggestion dictionary.",default_value:l,isMetaParam:!0}]}}}function d(e){if(e?.result?.action!=="SELECT_OPTIONS")return"";let t=e.result.selected_values[0];return"string"==typeof t?t.trim():""}
