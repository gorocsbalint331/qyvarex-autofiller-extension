/**
 * Parcel module id: 6zjmU
 * Resolved path: src/core/parse.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"normalizePhoneCountryCode",()=>l),n.export(r,"extractPhoneCountryName",()=>s),n.export(r,"formatPhoneCountryCode",()=>u),n.export(r,"normalizePhoneCountryCodeWithName",()=>c),n.export(r,"withPhoneCountryCodeOption",()=>d),n.export(r,"normalizePhoneCountryText",()=>f),n.export(r,"getDialCodeDigits",()=>p);let o=/\+\s*(\d{1,4})(?!\d)/,i=/^\d{1,4}$/,a=/(?:^|\D)(\d{1,4})\s*$/,l=e=>{let t=String(e??"").trim();if(!t)return"";let r=t.match(o);if(r)return`+${r[1]}`;let n=t.replace(/[\s()-]/g,"");if(i.test(n))return`+${n}`;let l=t.match(a);return l&&/[A-Za-z]/.test(t)?`+${l[1]}`:t},s=e=>{let t=String(e??"").trim(),r=l(t);if(!/^\+\d{1,4}$/.test(r))return"";let n=r.slice(1);return t.replace(RegExp(`\\+?\\s*${n}(?!\\d)`),"").replace(/^[\s(),-]+|[\s(),-]+$/g,"").replace(/\s+/g," ").trim()},u=(e,t)=>{let r=l(e),n=String(t??"").replace(/\s+/g," ").trim();return r&&n?`${r} ${n}`:r},c=e=>u(l(e),s(e)),d=(e,t)=>{let r=l(t);return!r||e.some(e=>e.value===r)?e:[{label:r,value:r},...e]},f=e=>String(e??"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),p=e=>{let t=l(e);return/^\+\d{1,4}$/.test(t)?t.slice(1):""}
