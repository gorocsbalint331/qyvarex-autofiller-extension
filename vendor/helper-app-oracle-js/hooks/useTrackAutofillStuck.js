/**
 * Parcel module id: dSL5Z
 * Resolved path: hooks/useTrackAutofillStuck.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~store/autofillResult -> hCUzf  =>  _tilde_store/autofillResult.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useTrackAutofillStuck", () => s);
var o = e("react"),
  i = e("~store/autofillResult"),
  a = e("~utils/trace");
let l = 3e4;

function s() {
  let e = (0, i.useAutofillResultStore)(e => e.isFilling),
    t = (0, o.useRef)(null),
    r = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    if (e) t.current = Date.now(), r.current = setTimeout(() => {
      (0, a.trackEvent)("autofill_stuck_after_30s", {
        url: window.top.location.href
      })
    }, l);
    else if (r.current && (clearTimeout(r.current), r.current = null), t.current) {
      let e = Date.now(),
        r = e - t.current;
      if (r > l) {
        let e = r / 1e3;
        (0, a.trackEvent)("autofill_long_duration_completed", {
          url: window.top.location.href,
          duration_seconds: parseFloat(e.toFixed(2))
        })
      }
      t.current = null
    }
    return () => {
      r.current && clearTimeout(r.current)
    }
  }, [e])
}

