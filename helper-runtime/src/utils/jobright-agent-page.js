/**
 * Parcel module id: c3KQJ
 * Resolved path: src/utils/jobright-agent-page.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isJobrightAgentPageUrl", () => s), n.export(r,
  "shouldSyncResumeToAutofillOnUrl", () => u);
var o = e("~api/env-resolver");
let i = "https://jobright.ai",
  a = () => "undefined" != typeof window && window.location?.href ? window.location.href : i,
  l = e => "/agent" === e || e.startsWith("/agent/"),
  s = e => {
    try {
      let t = new URL(e, a());
      return (0, o.agentDomains).includes(t.hostname) && l(t.pathname)
    } catch {
      return !1
    }
  },
  u = e => !s(e)

