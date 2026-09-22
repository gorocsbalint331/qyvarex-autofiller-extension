/**
 * Parcel module id: lxTxV
 * Resolved path: hooks/useShowSubmitted.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~contents/crawler/target -> kkscK  =>  _tilde_contents/crawler/target.js
 *   ~core/xpath -> agE4u  =>  _tilde_core/xpath.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => s);
var o = e("react"),
  i = e("~contents/crawler/target"),
  a = e("~core/xpath");

function l() {
  return !!(window.location.pathname.includes("jobTasks/completed") || (0, a
    .getFirstOrderedNodeSafe)("//h1[contains(text(), 'Congratulations')]"))
}

function s() {
  let e = "myworkday" === (0, i.getTargetName)(),
    [t, r] = (0, o.useState)(!1);
  return (0, o.useEffect)(() => {
    e && (l() ? r(!0) : r(!1))
  }, [e, t]), (0, o.useEffect)(() => {
    if (!e) return;
    let t = new MutationObserver(e => {
      e.forEach(e => {
        if ("childList" === e.type) {
          let e = (0, a.getFirstOrderedNodeSafe)(
            "//h1[contains(text(), 'Congratulations')]");
          e && r(!0)
        }
      })
    });
    return t.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => {
      t.disconnect()
    }
  }, []), t
}

