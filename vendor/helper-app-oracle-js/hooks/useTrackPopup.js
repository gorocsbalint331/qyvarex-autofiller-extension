/**
 * Parcel module id: 33jc0
 * Resolved path: hooks/useTrackPopup.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~store/profile -> 9omPD  =>  _tilde_store/profile.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "useTrackPopup", () => s);
var o = e("lodash-es"),
  i = e("react"),
  a = e("~store/profile"),
  l = e("~utils/trace");

function s(e, t, r, n, s) {
  let u = !!n?.logined,
    c = (0, a.useProfileStore)(e => e.userProfile),
    d = c?.step === 5,
    f = (0, i.useRef)(null);
  (0, i.useEffect)(() => {
    f.current && (clearTimeout(f.current), f.current = null);
    let r = null;
    if (!(0, o.isNil)(e) && s) return r = d ? t ? "setup_support" : "setup_not_support" : u ?
      "not_setup_profile" : "not_setup_account", f.current = setTimeout(() => {
        (0, l.trackEvent)("autofill_popup", {
          url: window.location.href,
          user_id: n?.userId,
          status: r
        }), f.current = null
      }, 5e3), () => {
        f.current && (clearTimeout(f.current), f.current = null)
      }
  }, [e, r, t, u, d, s])
}

