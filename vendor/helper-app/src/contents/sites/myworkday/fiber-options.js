/**
 * Parcel module id: kgcUj
 * Resolved path: src/contents/sites/myworkday/fiber-options.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getWorkdaySelectOptionsViaFiber",()=>u);var o=e("@plasmohq/messaging");let i="__jr_workday_select_options_request",a="__jr_workday_select_options_response",l=!1;async function s(){if(l)return!0;if("undefined"!=typeof window&&window.__jr_workday_fiber_injected)return l=!0,!0;try{return await (0,o.sendToBackground)({name:"injectWorkdayFiber"}),l=!0,!0}catch(e){return console.warn("[WorkdayFiber] failed to inject main world script:",e),!1}}async function u(e){if("undefined"==typeof document||"function"!=typeof document.addEventListener||"function"!=typeof document.dispatchEvent||"function"!=typeof CustomEvent)return[];let t=await s();if(!t)return[];let r=`__jr_wd_options_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;e.setAttribute("data-jr-wd-fiber-id",r);let n=`[data-jr-wd-fiber-id="${r}"]`,o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`;return new Promise(t=>{let r=()=>{document.removeEventListener(a,s),e.removeAttribute("data-jr-wd-fiber-id")},l=setTimeout(()=>{r(),t([])},1e3);function s(e){let n=e.detail;n?.requestId===o&&(clearTimeout(l),r(),t(Array.isArray(n?.options)?n.options.filter(e=>"string"==typeof e&&e.trim().length>0):[]))}document.addEventListener(a,s),document.dispatchEvent(new CustomEvent(i,{detail:{selector:n,requestId:o}}))})}
