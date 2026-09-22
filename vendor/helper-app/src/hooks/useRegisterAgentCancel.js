/**
 * Parcel module id: l5wRD
 * Resolved path: src/hooks/useRegisterAgentCancel.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~contents -> d4tj7  =>  src/contents.js
 *   ~contents/pre-autofill-flow/account-flow -> IgBHR  =>  src/contents/pre-autofill-flow/account-flow.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react"),
  o = e("~contents"),
  i = e("~contents/pre-autofill-flow/account-flow"),
  a = e("~core/utils");
let l = () => {
  (0, n.useEffect)(() => {
    let e = () => {
      (0, i.cancelPreAutofillAccountFlow)(), (0, o.cancelAutofillInstance)((0, o
        .getAutofillInstance)()), (0, a.cancelIframeAutofill)()
    };
    return document.addEventListener("CancelAutoFill", e), () => {
      document.removeEventListener("CancelAutoFill", e)
    }
  }, [])
};
r.default = l

