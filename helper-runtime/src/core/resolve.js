/**
 * Parcel module id: fy5gi
 * Resolved path: src/core/resolve.js
 * Dependencies:
 *   ./data -> gQ72Q  =>  src/core/data.js
 *   ./parse -> 6zjmU  =>  src/core/parse.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"resolvePhoneCountryIso2",()=>l);var o=e("./data"),i=e("./parse");function a(e,t){if(t)return e.find(e=>(0,i.normalizePhoneCountryText)(e.name)===t)}function l({answer:e,addressCountryIso2:t,allowPriorityFallback:r=!1,countries:n=o.COUNTRY_RECORDS}){let l=(0,i.getDialCodeDigits)(e),s=(0,i.normalizePhoneCountryText)((0,i.extractPhoneCountryName)(e))||(l?"":(0,i.normalizePhoneCountryText)(e)),u=a(n,s);if(u)return u.iso2;let c=t?n.find(e=>e.iso2===t.trim().toLowerCase()):void 0;if(c&&(!l||c.dialCode===l))return c.iso2;if(!r||!l)return"";let d=n===o.COUNTRY_RECORDS?(0,o.getCountriesByDialCode)(l):n.filter(e=>e.dialCode===l).slice().sort((e,t)=>(e.priority??Number.MAX_SAFE_INTEGER)-(t.priority??Number.MAX_SAFE_INTEGER)||e.iso2.localeCompare(t.iso2));return d[0]?.iso2??""}
