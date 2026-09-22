/**
 * Parcel module id: dK8Va
 * Resolved path: src/hooks/usePreAutofillFlow.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~contents/pre-autofill-flow/core -> aKRqS  =>  src/contents/pre-autofill-flow/core.js
 *   ~contents/pre-autofill-flow/registry -> lfzZV  =>  src/contents/pre-autofill-flow/registry.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"usePreAutofillFlow",()=>c);var o=e("react"),i=e("~contents/pre-autofill-flow/registry"),a=e("~contents/pre-autofill-flow/core");let l=1e3,s=3e4;function u(e,t){return e?.flowId===t?.flowId&&e?.pageKind===t?.pageKind&&e?.ctaText===t?.ctaText}function c({targetName:e,url:t,enabled:r=!0}){let[n,c]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!r){c(null);return}let n=!1,o=0,d=()=>{if(n)return;let r=(0,a.resolvePreAutofillFlow)({targetName:e,url:t,document,registry:i.PRE_AUTOFILL_FLOW_REGISTRY});c(e=>u(e,r)?e:r)},f=()=>{o&&window.cancelAnimationFrame(o),o=window.requestAnimationFrame(d)};d();let p=document.body||document.documentElement,m=p&&"undefined"!=typeof MutationObserver?new MutationObserver(f):null;m?.observe(p,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["data-automation-id","role","href","aria-label","id","class","style","title"]});let h=window.setInterval(d,l),g=window.setTimeout(()=>{window.clearInterval(h)},s);return()=>{n=!0,m?.disconnect(),o&&window.cancelAnimationFrame(o),window.clearInterval(h),window.clearTimeout(g)}},[e,t,r]),n}
