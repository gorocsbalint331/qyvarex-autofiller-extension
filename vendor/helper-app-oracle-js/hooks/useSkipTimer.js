/**
 * Parcel module id: lwAIe
 * Resolved path: hooks/useSkipTimer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useSkipTimer", () => a);
var o = e("react"),
  i = e("~utils/trace");

function a(e, t = 2e3) {
  let [r, n] = (0, o.useState)(null);
  return (0, o.useEffect)(() => {
    if (!e) {
      n(null);
      return
    }
    let r = window.setTimeout(() => {
      n(e), (0, i.trackEvent)("autofill_skip_exposure", {
        current_field_name: e
      })
    }, t);
    return () => {
      window.clearTimeout(r), n(null)
    }
  }, [e, t]), r
}

