/**
 * Parcel module id: clZg3
 * Resolved path: hooks/useSubmitApplication.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~core/utils -> aTDh5  =>  _tilde_core/utils.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react"),
  o = e("~core/utils");
let i = () => {
  (0, n.useEffect)(() => {
    let e = e => {
      (0, o.submitAgentApplication)()
    };
    return document.addEventListener("SubmitAgentApplication", e), () => {
      document.removeEventListener("SubmitAgentApplication", e)
    }
  }, [])
};
r.default = i

