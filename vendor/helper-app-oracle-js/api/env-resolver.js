/**
 * Parcel module id: 45ABC
 * Resolved path: api/env-resolver.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "API_DOMAIN", () => a), n.export(r, "HOST_DOMAIN", () => l), n
  .export(r, "COOKIE_DOMAIN", () => s), n.export(r, "agentDomains", () => u);
let o = () => ({
    apiDomain: "https://api.jobright.ai",
    hostDomain: "https://jobright.ai",
    cookieDomain: ".jobright.ai"
  }),
  i = o(),
  a = i.apiDomain,
  l = i.hostDomain,
  s = i.cookieDomain,
  u = ["localhost", "jobright.ai", "preprod.jobright.ai", "beta.jobright-internal.com",
    "test-baseline.jobright-internal.com", "dev.jobright-internal.com", "jobright-internal.com",
    "alpha.jobright-internal.com"
  ]

