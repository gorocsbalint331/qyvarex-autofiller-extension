/**
 * Parcel module id: eTzUx
 * Resolved path: contents/methods/observer.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "waitForCondition", () => waitForCondition);
let waitForCondition = (e, t = {}) => {
  let {
    timeout: r = 2e3,
    interval: _helpersLocal = 50,
    observeTarget: _waitForConditionLocal,
    observerInit: i = {
      childList: !0,
      subtree: !0,
      attributes: !0,
      characterData: !0
    },
    pollFallback: a = !0
  } = t;
  return new Promise(t => {
    if (e()) {
      t(!0);
      return;
    }
    let l = !1,
      s = [],
      u = e => {
        l || (l = !0, s.forEach(e => e()), t(e));
      },
      c = setTimeout(() => u(!1), r);
    if (s.push(() => clearTimeout(c)), _waitForConditionLocal && "function" == typeof MutationObserver) {
      let t = new MutationObserver(() => {
        e() && u(!0);
      });
      t.observe(_waitForConditionLocal, i), s.push(() => t.disconnect());
    }
    if (a) {
      let t = setInterval(() => {
        e() && u(!0);
      }, _helpersLocal);
      s.push(() => clearInterval(t));
    }
  });
};
