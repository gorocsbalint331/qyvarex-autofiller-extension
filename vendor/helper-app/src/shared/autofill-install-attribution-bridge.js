/**
 * Parcel module id: aunKc
 * Resolved path: shared/autofill-install-attribution-bridge.js
 * Dependencies:
 *   ../../utils/autofill-install-attribution -> 7VqIV  =>  src/utils/autofill-install-attribution.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "initializeAutofillInstallAttributionBridge", () => l);
var o = e("../../utils/autofill-install-attribution");
let i = [250, 1e3, 2e3],
  a = 3e3;

function l(e) {
  if (!e.isTopFrame || !(0, o.isTrustedJobrightOrigin)(e.origin)) return () => void 0;
  let t = e.now ?? Date.now,
    r = !1,
    n = !1,
    l = [],
    s = () => {
      n || (n = !0, l.forEach(e.cancelScheduled), e.removeResponseListener(u))
    },
    u = async i => {
      if (n || r) return;
      let a = (0, o.validateAutofillInstallAttribution)(i, t());
      if (!a) {
        e.logWarning?.("invalid_response");
        return
      }
      r = !0;
      try {
        if (!await e.accept(a) || n) return;
        e.dispatch(o.ATTRIBUTION_ACK_EVENT, {
          schema_version: 1,
          install_intent_id: a.install_intent_id
        })
      } catch {
        e.logWarning?.("storage_or_message_failure")
      }
    };
  return e.addResponseListener(u), e.dispatch(o.ATTRIBUTION_REQUEST_EVENT), l.push(...i.map(t => e
    .schedule(() => {
      n || r || e.dispatch(o.ATTRIBUTION_REQUEST_EVENT)
    }, t))), l.push(e.schedule(async () => {
    if (!n && !r) try {
      await e.flush() && s()
    } catch {
      e.logWarning?.("direct_attribution_flush_failure")
    }
  }, a)), s
}

