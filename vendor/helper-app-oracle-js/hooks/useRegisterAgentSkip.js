/**
 * Parcel module id: anm6s
 * Resolved path: hooks/useRegisterAgentSkip.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~contents -> d4tj7  =>  _tilde_contents.js
 *   ~core/utils -> aTDh5  =>  _tilde_core/utils.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react"),
  o = e("~contents"),
  i = e("~core/utils");
let a = () => {
  (0, n.useEffect)(() => {
    let e = () => {
      let e = (0, o.getAutofillInstance)();
      e && "function" == typeof e.skip && e.skip(), (0, i.skipIframeAutofill)()
    };
    return document.addEventListener("SkipAutoFill", e), () => {
      document.removeEventListener("SkipAutoFill", e)
    }
  }, [])
};
r.default = a

