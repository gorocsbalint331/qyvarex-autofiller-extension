/**
 * Parcel module id: DQI8L
 * Resolved path: shared/sticky-job-id.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"keepJobIdInUrl",()=>s);let o="jr_id",i=3e3,a=100,l=5;function s(e,t){let r=t.durationMs??i,n=t.intervalMs??a,s=t.maxRestorations??l,u=Date.now(),c=0,d=setInterval(()=>{try{if(Date.now()-u>r){clearInterval(d);return}let n=new URL(window.location.href);if(n.hostname.toLowerCase()!==t.originalHost.toLowerCase()||t.allowedPathname&&n.pathname!==t.allowedPathname){clearInterval(d);return}if(n.searchParams.get(o)===e)return;if(c>=s){clearInterval(d);return}n.searchParams.set(o,e),window.history.replaceState(window.history.state,"",n.toString()),c+=1,t.onRestore?.({pathname:n.pathname,restorationCount:c})}catch{clearInterval(d)}},n);return()=>clearInterval(d)}
