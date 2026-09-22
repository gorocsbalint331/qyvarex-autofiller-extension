/**
 * Parcel module id: 2T0sW
 * Resolved path: contents/sites/phenom/style.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"PHENOM_APPLY_PAGE_LAYOUT_FIX_STYLE_ID",()=>o),n.export(r,"PHENOM_APPLY_PAGE_LAYOUT_FIX_CSS",()=>l),n.export(r,"getPhenomApplyPageLayoutFixCss",()=>s),n.export(r,"injectPhenomApplyPageLayoutFix",()=>u);let o="jobright-phenom-apply-page-layout-fix",i=`
.apply-page .container {
  width: auto !important;
}
`.trim(),a=`
.apply-page .phenom-form-container,
.apply-page .form-wrapper.widget-container,
.apply-page form.rjsf {
  max-width: 100% !important;
}

.apply-page .form-wrapper.widget-container,
.apply-page form.rjsf {
  width: 100% !important;
  box-sizing: border-box;
}

.apply-page .form-wrapper.widget-container {
  margin-right: 0 !important;
}
`.trim(),l=`
${i}

${a}
`.trim();function s(e){return"careers.wexinc.com"===e?a:l}function u(e=document){let t=e.getElementById(o);if(t)return t;let r=e.createElement("style");return r.id=o,r.textContent=s(e.location?.hostname??""),e.head.appendChild(r),r}
