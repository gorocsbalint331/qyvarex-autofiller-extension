/**
 * Bundle HELPER_RUNTIME=ts — full ATS engine from extension/src.
 *
 * Sources are Parcel-format modules ported by
 * `scripts/port-vendor-helper-to-src.mjs`. Linking uses the same bundler as
 * HELPER_RUNTIME=parcel (see bundle-engine-helper.mjs).
 */
import path from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXT_ROOT = path.resolve(__dirname, "..")
const bundleScript = path.join(__dirname, "bundle-engine-helper.mjs")

const r = spawnSync(
  process.execPath,
  [bundleScript, "--runtime=ts"],
  { stdio: "inherit", cwd: EXT_ROOT, env: { ...process.env, HELPER_RUNTIME: "ts" } }
)
process.exit(r.status ?? 1)
