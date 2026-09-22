/**
 * Parcel module id: 7L3Rw
 * Resolved path: src/contents/methods/submit-success-observer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "waitForSubmitSuccess", () => waitForSubmitSuccess);
var xpath = e("~core/xpath");
let i = 3e4,
  a = 100;
function waitForSubmitSuccess(e, t = {}) {
  let {
    timeout: r = i,
    signal: _helpersLocal,
    matchExisting: _waitForSubmitSuccessLocal = !1
  } = t;
  return new Promise(t => {
    if (!e || 0 === e.length || "undefined" == typeof document || !document.body || _helpersLocal?.aborted) {
      t(!1);
      return;
    }
    let _iLocal = new WeakSet();
    if (!_waitForSubmitSuccessLocal) for (let t of e) for (let e of (0, xpath.getOrderedNodesSafe)(t)) e && _iLocal.add(e);
    let s = !1,
      u = null,
      c = null,
      d = null,
      f = () => {
        d && (d.disconnect(), d = null), null !== u && (clearTimeout(u), u = null), null !== c && (clearTimeout(c), c = null), _helpersLocal && _helpersLocal.removeEventListener("abort", h);
      },
      p = e => {
        s || (s = !0, f(), t(e));
      },
      m = () => {
        for (let t of e) {
          let e = (0, xpath.getOrderedNodesSafe)(t);
          for (let t of e) if (t && !_iLocal.has(t)) return !0;
        }
        return !1;
      },
      h = () => p(!1);
    if (_helpersLocal && _helpersLocal.addEventListener("abort", h, {
      once: !0
    }), _waitForSubmitSuccessLocal && m()) {
      t(!0);
      return;
    }
    c = setTimeout(() => p(!1), r), d = new MutationObserver(() => {
      null === u && (u = setTimeout(() => {
        u = null, !s && m() && p(!0);
      }, a));
    });
    try {
      d.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    } catch (e) {
      p(!1);
    }
  });
}
