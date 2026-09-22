/**
 * Parcel module id: SWMhp
 * Resolved path: hooks/useAddressLocation.js
 * Dependencies:
 *   ../model -> 4u8XV  =>  src/model.js
 *   ../utils/address-lookup -> j5kd9  =>  src/utils/address-lookup.js
 *   ../utils/location-normalizer -> 2dOam  =>  src/utils/location-normalizer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   react -> 329PG  =>  react-reexport.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"useAddressLocation",()=>u);var o=e("react"),i=e("@plasmohq/messaging"),a=e("../model"),l=e("../utils/address-lookup"),s=e("../utils/location-normalizer");let u=({personal:e,setAutofillInfo:t})=>{let[r,n]=(0,o.useState)([]),[u,c]=(0,o.useState)([]),d=(0,o.useRef)(0),f=(0,o.useRef)(0),p=(0,o.useMemo)(()=>(0,a.resolveCountryCode)(e.country??""),[e.country]),m=(0,o.useCallback)(e=>{let t=++d.current;if(!e){n([]),f.current+=1,c([]);return}(0,i.sendToBackground)({name:"getOpenRegions",body:{country:e}}).then(e=>{t===d.current&&n(Array.isArray(e)?e:[])})},[]),h=(0,o.useCallback)((e,t)=>{let r=++f.current;if(!e||!t){c([]);return}(0,i.sendToBackground)({name:"getOpenCitiesByRegion",body:{country:e,region:t}}).then(e=>{r===f.current&&c(Array.isArray(e)?e:[])})},[]);(0,o.useEffect)(()=>{m(p)},[p,m]),(0,o.useEffect)(()=>{h(p,e.state)},[p,e.state,h]);let g=e=>{t(t=>{let r=(0,a.resolveCountryCode)(t.personal.country),n=(0,a.resolveCountryCode)(e),o=!!r&&r===n,i=t.personal.country.trim()!==e.trim()&&!o;return{...t,personal:{...t.personal,country:e,state:i?"":t.personal.state,city:i?"":t.personal.city}}})},b=e=>{t(t=>{let n=(0,s.resolveRegionCode)(t.personal.state,r),o=(0,s.resolveRegionCode)(e,r),i=!!n&&n===o,a=t.personal.state.trim()!==e.trim()&&!i;return{...t,personal:{...t.personal,state:e,city:a?"":t.personal.city}}})},y=(0,o.useCallback)(()=>{let n=(0,s.normalizeRegionInput)(e.state,r);n!==e.state&&t(e=>({...e,personal:{...e.personal,state:n}}))},[e.state,r,t]),v=(0,o.useCallback)(()=>{let r=(0,l.normalizeCountryInput)(e.country);r!==e.country&&t(e=>({...e,personal:{...e.personal,country:r}}))},[e.country,t]);return{countryCode:p,regionOptions:r,cityOptions:u,handleCountryChange:g,handleRegionChange:b,handleCountryBlur:v,handleRegionBlur:y}}
