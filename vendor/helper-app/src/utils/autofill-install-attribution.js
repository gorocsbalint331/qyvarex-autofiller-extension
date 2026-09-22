/**
 * Parcel module id: 7VqIV
 * Resolved path: src/utils/autofill-install-attribution.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "ATTRIBUTION_REQUEST_EVENT", () => o), n.export(r,
    "ATTRIBUTION_RESPONSE_EVENT", () => i), n.export(r, "ATTRIBUTION_ACK_EVENT", () => a), n.export(
    r, "ATTRIBUTION_TTL_MS", () => l), n.export(r, "ATTRIBUTION_JOB_ID_MAX_LENGTH", () => s), n
  .export(r, "AUTOFILL_INSTALL_ENTRY_SOURCES", () => u), n.export(r, "isTrustedJobrightOrigin",
  () => h), n.export(r, "validateAutofillInstallAttribution", () => b), n.export(r,
    "buildDirectInstallAttribution", () => y), n.export(r,
    "getAutofillInstallAttributionEventProperties", () => v);
let o = "jobright:autofill-install-attribution-request",
  i = "jobright:autofill-install-attribution-response",
  a = "jobright:autofill-install-attribution-ack",
  l = 6048e5,
  s = 128,
  u = ["profile_onboarding", "profile_guidance", "agent_profile_guidance", "jobs_sidebar_promo",
    "new_user_mission", "job_apply_popup", "agent_onboarding", "agent_task_recovery",
    "product_update_popup", "uninstall_reinstall", "direct_or_unknown"
  ],
  c = new Set(["schema_version", "install_intent_id", "original_entry_source", "conversion_surface",
    "clicked_at", "expires_at", "job_id"
  ]),
  d = new Set(u),
  f = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  p = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/,
  m = new Set(["jobright.ai", "www.jobright.ai", "preprod.jobright.ai",
    "beta.jobright-internal.com", "test-baseline.jobright-internal.com",
    "dev.jobright-internal.com", "jobright-internal.com", "alpha.jobright-internal.com"
  ]);

function h(e) {
  try {
    let t = new URL(e);
    return "https:" === t.protocol && t.origin === e && m.has(t.hostname)
  } catch {
    return !1
  }
}

function g(e) {
  if ("string" != typeof e || !p.test(e)) return null;
  let t = Date.parse(e);
  if (!Number.isFinite(t)) return null;
  let r = new Date(t).toISOString(),
    n = e.includes(".") ? e.replace(/\.(\d)Z$/, ".$100Z").replace(/\.(\d{2})Z$/, ".$10Z") : e
    .replace(/Z$/, ".000Z");
  return r === n ? t : null
}

function b(e, t = Date.now()) {
  if (!e || "object" != typeof e || Array.isArray(e)) return null;
  let r = e;
  if (Object.keys(r).some(e => !c.has(e)) || 1 !== r.schema_version || "string" != typeof r
    .install_intent_id || !f.test(r.install_intent_id) || "string" != typeof r
    .original_entry_source || !d.has(r.original_entry_source) || "string" != typeof r
    .conversion_surface || !d.has(r.conversion_surface)) return null;
  let n = g(r.clicked_at),
    o = g(r.expires_at);
  return null === n || null === o || n > t || o <= t || o <= n || o - n > l || void 0 !== r
    .job_id && ("string" != typeof r.job_id || 0 === r.job_id.length || r.job_id.length > s) ?
    null : {
      schema_version: 1,
      install_intent_id: r.install_intent_id,
      original_entry_source: r.original_entry_source,
      conversion_surface: r.conversion_surface,
      clicked_at: r.clicked_at,
      expires_at: r.expires_at,
      ...void 0 === r.job_id ? {} : {
        job_id: r.job_id
      }
    }
}

function y(e = Date.now(), t = () => crypto.randomUUID()) {
  return {
    schema_version: 1,
    install_intent_id: t(),
    original_entry_source: "direct_or_unknown",
    conversion_surface: "direct_or_unknown",
    clicked_at: new Date(e).toISOString(),
    expires_at: new Date(e + l).toISOString()
  }
}

function v(e) {
  return {
    ...e
  }
}

