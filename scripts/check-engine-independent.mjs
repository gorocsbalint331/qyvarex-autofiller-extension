/**
 * Verify the extension can ship helper-app.js without ../engine.
 * Checks both ported src/ (HELPER_RUNTIME=ts) and vendor fallback (parcel).
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXT = path.resolve(__dirname, "..")
const VENDOR = path.join(EXT, "vendor", "helper-app")
const MANIFEST = path.join(VENDOR, "_manifest.json")
const FACTORY = path.join(
  EXT,
  "helper-runtime",
  "src",
  "contents",
  "crawler",
  "factory.js"
)
const OUT = path.join(EXT, "assets", "helper-app.js")

function fail(msg) {
  console.error("[check-engine-independent]", msg)
  process.exit(1)
}

function runBundle(runtime) {
  const r = spawnSync(
    process.execPath,
    [path.join(__dirname, "bundle-engine-helper.mjs"), `--runtime=${runtime}`],
    { cwd: EXT, encoding: "utf8" }
  )
  if (r.status !== 0) {
    console.error(r.stdout)
    console.error(r.stderr)
    fail(`${runtime} bundle failed`)
  }
  const bytes = fs.statSync(OUT).size
  if (bytes < 100_000) fail(`helper-app.js too small after ${runtime} (${bytes})`)
  return bytes
}

if (!fs.existsSync(MANIFEST)) {
  fail(`missing vendored helper-app at ${VENDOR}`)
}
if (!fs.existsSync(FACTORY)) {
  fail(
    `missing ported factory at ${FACTORY} — run: npm run port:vendor-helper`
  )
}

const tsBytes = runBundle("ts")
console.log(
  "[check-engine-independent] OK — ported src runtime (ts) builds",
  `${(tsBytes / 1024).toFixed(0)} KB`
)

const parcelBytes = runBundle("parcel")
console.log(
  "[check-engine-independent] OK — vendored Parcel fallback builds",
  `${(parcelBytes / 1024).toFixed(0)} KB`
)

// Leave default (ts) helper-app.js in place for Activate.
const finalBytes = runBundle("ts")
console.log(
  "[check-engine-independent] Restored default HELPER_RUNTIME=ts →",
  `${(finalBytes / 1024).toFixed(0)} KB`
)
console.log(
  "[check-engine-independent] Safe to trash monorepo engine/ after manual ATS smoke."
)
