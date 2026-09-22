/**
 * Parcel module id: jbRXW
 * Resolved path: hooks/useOpenNewTab.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   react -> 329PG  =>  react-reexport.js
 *   ~core/enums -> 1O3nc  =>  _tilde_core/enums.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "registerOpenAgentApplyTabListener", () => u);
var o = e("react"),
  i = e("@plasmohq/messaging"),
  a = e("~core/enums");
let l = new WeakMap,
  s = (e, t) => async r => {
    let {
      detail: n
    } = r;
    if (!n?.url) return;
    let o = await t({
      name: "openAgentApplyTab",
      body: {
        url: n.url,
        jobId: n.jobId
      }
    });
    o && e.dispatchEvent(new CustomEvent("FromExtension", {
      detail: {
        status: a.APPLICATION_STATUS.SUCCESS,
        missingFields: []
      }
    }))
  }, u = ({
    document: e = document,
    sendMessage: t = i.sendToBackground
  } = {}) => {
    let r = l.get(e);
    if (r) return r.refCount += 1, () => {
      r.refCount -= 1, r.refCount > 0 || (e.removeEventListener("OpenAgentApplyTab", r
        .handler), l.delete(e))
    };
    let n = s(e, t),
      o = {
        refCount: 1,
        handler: n
      };
    return l.set(e, o), e.addEventListener("OpenAgentApplyTab", n), () => {
      let t = l.get(e);
      t && (t.refCount -= 1, t.refCount > 0 || (e.removeEventListener("OpenAgentApplyTab", t
        .handler), l.delete(e)))
    }
  }, c = () => {
    (0, o.useEffect)(() => u(), [])
  };
r.default = c

