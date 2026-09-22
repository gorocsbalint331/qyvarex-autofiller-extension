/**
 * Parcel module id: 8dRWn
 * Resolved path: components/HelperContainer/StepContent.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/JobProfileStep -> dv20f  =>  _tilde_components/JobProfileStep.js
 *   ~components/NotAvailableStatus -> iSvIR  =>  _tilde_components/NotAvailableStatus.js
 *   ~components/Onboarding -> 4fFO5  =>  _tilde_components/Onboarding.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => f);
var o = e("react/jsx-runtime"),
  i = e("~components/JobProfileStep"),
  a = n.interopDefault(i),
  l = e("~components/NotAvailableStatus"),
  s = n.interopDefault(l),
  u = e("~components/Onboarding"),
  c = n.interopDefault(u),
  d = e("~core/enums");

function f({
  renderStep: e,
  domainSupport: t,
  currentTabJob: r,
  showContinue: n,
  jobContextLoading: i,
  fallbackJobId: l
}) {
  return e === d.RENDER_STEP.INITIAL ? (0, o.jsx)(c.default, {}) : t && e !== d.RENDER_STEP.FAILED ?
    e === d.RENDER_STEP.FILLING ? (0, o.jsx)(a.default, {
      currentTabJob: r,
      showContinue: n,
      jobContextLoading: i,
      fallbackJobId: l
    }) : null : (0, o.jsx)(s.default, {})
}

