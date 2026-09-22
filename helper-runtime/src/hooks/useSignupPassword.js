/**
 * Parcel module id: 23Y6f
 * Resolved path: hooks/useSignupPassword.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~store/workday-signup-info -> jjbI7  =>  src/store/workday-signup-info.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"useSignupPassword",()=>a);var o=e("react"),i=e("~store/workday-signup-info");let a=({open:e,activeSection:t})=>{let[r,n]=(0,o.useState)(""),[a,l]=(0,o.useState)(""),[s,u]=(0,o.useState)(!1),[c,d]=(0,o.useState)(!1),[f,p]=(0,o.useState)(!1),[m,h]=(0,o.useState)(!1),g=(0,o.useRef)(null),b=(0,o.useRef)(!1);(0,o.useEffect)(()=>{if(!e)return;let t=!0;return b.current=!1,n(""),l(""),d(!1),p(!1),u(!1),h(!1),(0,i.getWorkdaySignupInformation)().then(e=>{if(t){let t=e?.password??"";d(!0),l(t),b.current||(n(t),p(!1)),u(!1),h(!1)}}).catch(()=>{t&&(d(!1),l(""),b.current||(n(""),p(!1)),u(!1),h(!1))}),()=>{t=!1}},[e]);let y=(0,o.useCallback)((e,t={})=>{let o=e??g.current?.value??"";t.markTouched&&(b.current=!0,p(!0)),n(o),o!==r&&h(!1)},[r]),v=(0,o.useCallback)(()=>{y()},[y]),w=(0,o.useCallback)(()=>{window.setTimeout(v,0)},[v]);return(0,o.useEffect)(()=>{if(!e||"signupInformation"!==t)return;let n=0,o=()=>{let e=g.current?.value;"string"==typeof e&&e!==r&&y(e),(n+=1)>=8&&window.clearInterval(i)},i=window.setInterval(o,250);return o(),()=>{window.clearInterval(i)}},[t,e,r,y]),{signupPassword:r,initialSignupPassword:a,isSignupPasswordLoaded:c,isSignupPasswordTouched:f,setShowSignupPasswordErrors:h,passwordFieldProps:{inputRef:g,value:r,isVisible:s,showErrors:m,onChange:e=>y(e,{markTouched:!0}),onFocus:w,onBlur:v,onKeyUp:v,onToggleVisible:()=>u(e=>!e)}}}
