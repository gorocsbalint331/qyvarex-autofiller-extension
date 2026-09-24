// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/utils/autofill-install-attribution.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

const ATTRIBUTION_REQUEST_EVENT =
  "jobright:autofill-install-attribution-request"
const ATTRIBUTION_RESPONSE_EVENT =
  "jobright:autofill-install-attribution-response"
const ATTRIBUTION_ACK_EVENT = "jobright:autofill-install-attribution-ack"
const ATTRIBUTION_TTL_MS = 6048e5
const ATTRIBUTION_JOB_ID_MAX_LENGTH = 128

const ALLOWED_SURFACES = [
  "profile_onboarding",
  "profile_guidance",
  "agent_profile_guidance",
  "jobs_sidebar_promo",
  "new_user_mission",
  "job_apply_popup",
  "agent_onboarding",
  "agent_task_recovery",
  "product_update_popup",
  "uninstall_reinstall",
  "direct_or_unknown",
]

const ALLOWED_RECORD_KEYS = new Set([
  "schema_version",
  "install_intent_id",
  "original_entry_source",
  "conversion_surface",
  "clicked_at",
  "expires_at",
  "job_id",
])

const ALLOWED_SURFACES_SET = new Set(ALLOWED_SURFACES)

// Stashed regexes — do not rename escape sequences or flags.
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const ISO_UTC_RE =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/
const ISO_ONE_FRAC_PAD_RE = /\.(\d)Z$/
const ISO_TWO_FRAC_PAD_RE = /\.(\d{2})Z$/
const ISO_Z_TO_MS_RE = /Z$/

const TRUSTED_HOSTNAMES = new Set([
  "jobright.ai",
  "www.jobright.ai",
  "preprod.jobright.ai",
  "beta.jobright-internal.com",
  "test-baseline.jobright-internal.com",
  "dev.jobright-internal.com",
  "jobright-internal.com",
  "alpha.jobright-internal.com",
  // Team Autofill Hub
  "jobright-team-site.vercel.app",
  "localhost",
  "127.0.0.1",
])

function isTrustedJobrightOrigin(origin) {
  try {
    let url = new URL(origin)
    const localHttp =
      ("http:" === url.protocol || "https:" === url.protocol) &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")
    const httpsTrusted =
      "https:" === url.protocol && TRUSTED_HOSTNAMES.has(url.hostname)
    return url.origin === origin && (localHttp || httpsTrusted)
  } catch {
    return false
  }
}

function parseStrictIsoUtcMs(value) {
  if ("string" != typeof value || !ISO_UTC_RE.test(value)) return null
  let parsed = Date.parse(value)
  if (!Number.isFinite(parsed)) return null
  let canonical = new Date(parsed).toISOString()
  let normalized = value.includes(".")
    ? value
        .replace(ISO_ONE_FRAC_PAD_RE, ".$100Z")
        .replace(ISO_TWO_FRAC_PAD_RE, ".$10Z")
    : value.replace(ISO_Z_TO_MS_RE, ".000Z")
  return canonical === normalized ? parsed : null
}

function validateAutofillInstallAttribution(record, now = Date.now()) {
  if (!record || "object" != typeof record || Array.isArray(record)) return null
  let candidate = record
  if (
    Object.keys(candidate).some((key) => !ALLOWED_RECORD_KEYS.has(key)) ||
    1 !== candidate.schema_version ||
    "string" != typeof candidate.install_intent_id ||
    !UUID_RE.test(candidate.install_intent_id) ||
    "string" != typeof candidate.original_entry_source ||
    !ALLOWED_SURFACES_SET.has(candidate.original_entry_source) ||
    "string" != typeof candidate.conversion_surface ||
    !ALLOWED_SURFACES_SET.has(candidate.conversion_surface)
  ) {
    return null
  }
  let clickedAtMs = parseStrictIsoUtcMs(candidate.clicked_at)
  let expiresAtMs = parseStrictIsoUtcMs(candidate.expires_at)
  return null === clickedAtMs ||
    null === expiresAtMs ||
    clickedAtMs > now ||
    expiresAtMs <= now ||
    expiresAtMs <= clickedAtMs ||
    expiresAtMs - clickedAtMs > ATTRIBUTION_TTL_MS ||
    (void 0 !== candidate.job_id &&
      ("string" != typeof candidate.job_id ||
        0 === candidate.job_id.length ||
        candidate.job_id.length > ATTRIBUTION_JOB_ID_MAX_LENGTH))
    ? null
    : {
        schema_version: 1,
        install_intent_id: candidate.install_intent_id,
        original_entry_source: candidate.original_entry_source,
        conversion_surface: candidate.conversion_surface,
        clicked_at: candidate.clicked_at,
        expires_at: candidate.expires_at,
        ...(void 0 === candidate.job_id
          ? {}
          : {
              job_id: candidate.job_id,
            }),
      }
}

function buildDirectInstallAttribution(
  now = Date.now(),
  createId = () => crypto.randomUUID(),
) {
  return {
    schema_version: 1,
    install_intent_id: createId(),
    original_entry_source: "direct_or_unknown",
    conversion_surface: "direct_or_unknown",
    clicked_at: new Date(now).toISOString(),
    expires_at: new Date(now + ATTRIBUTION_TTL_MS).toISOString(),
  }
}

function getAutofillInstallAttributionEventProperties(record) {
  return {
    ...record,
  }
}

export {
  ATTRIBUTION_ACK_EVENT,
  ATTRIBUTION_JOB_ID_MAX_LENGTH,
  ATTRIBUTION_REQUEST_EVENT,
  ATTRIBUTION_RESPONSE_EVENT,
  ATTRIBUTION_TTL_MS,
  buildDirectInstallAttribution,
  getAutofillInstallAttributionEventProperties,
  isTrustedJobrightOrigin,
  validateAutofillInstallAttribution,
}
