/**
 * Parcel module id: gQ72Q
 * Resolved path: src/core/data.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   intl-tel-input/data -> eE5vf  =>  intl-tel-input/data.js
 *   intl-tel-input/i18n/en -> aXUqt  =>  intl-tel-input/i18n/en.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"COUNTRY_RECORDS",()=>s),n.export(r,"getCountryByIso2",()=>d),n.export(r,"getCountriesByDialCode",()=>f),n.export(r,"SHARED_DIAL_CODES",()=>p),n.export(r,"isSharedDialCode",()=>m),n.export(r,"getPrimaryCountryByDialCode",()=>h);var o=e("intl-tel-input/data"),i=n.interopDefault(o),a=e("intl-tel-input/i18n/en");let l=a.countryTranslations,s=(0,i.default).map(e=>({iso2:e.iso2,dialCode:e.dialCode,name:l[e.iso2]||e.name||"",priority:e.priority??Number.MAX_SAFE_INTEGER})).filter(e=>!!e.iso2&&!!e.dialCode&&!!e.name),u=new Map,c=new Map;for(let e of s){u.set(e.iso2,e);let t=c.get(e.dialCode);t?t.push(e):c.set(e.dialCode,[e])}for(let e of c.values())e.sort((e,t)=>e.priority-t.priority||e.iso2.localeCompare(t.iso2));function d(e){return u.get(String(e??"").trim().toLowerCase())}function f(e){return c.get(String(e??"").replace(/\D/g,""))||[]}let p=new Set(Array.from(c.entries()).filter(([,e])=>e.length>1).map(([e])=>e));function m(e){return p.has(String(e??"").replace(/\D/g,""))}function h(e){return f(e)[0]}
