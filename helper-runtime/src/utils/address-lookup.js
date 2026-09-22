/**
 * Parcel module id: j5kd9
 * Resolved path: src/utils/address-lookup.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants/country -> 7z2Rw  =>  src/constants/country.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"normalizeCountryInput",()=>l);var o=e("~constants/country");let i={us:"United States",usa:"United States","united states of america":"United States",ca:"Canada",gb:"United Kingdom",uk:"United Kingdom","great britain":"United Kingdom",turkey:"Turkiye",turkiye:"Turkiye",in:"India"},a=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),l=e=>{let t=(e??"").trim();if(!t)return"";let r=a(t).toLowerCase(),n=i[r],l=n?n.toLowerCase():r,s=(0,o.COUNTRY_OPTIONS).find(e=>{let t=a(e.value).toLowerCase(),r=a(e.label).toLowerCase();return t===l||r===l});return s?.value??""}
