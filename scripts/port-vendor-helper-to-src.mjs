/**
 * Port vendor/helper-app → extension/helper-runtime (isolated from Plasmo src/).
 *
 * Parcel-format modules must NOT live under extension/src — Plasmo will try to
 * bundle them into popup/options and crash with `e is not defined`.
 *
 * Usage: node scripts/port-vendor-helper-to-src.mjs [--dry-run]
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXT_ROOT = path.resolve(__dirname, "..")
const VENDOR_SRC = path.join(EXT_ROOT, "vendor", "helper-app", "src")
const OUT_ROOT = path.join(EXT_ROOT, "helper-runtime")
const OUT_SRC = path.join(OUT_ROOT, "src")
const DRY = process.argv.includes("--dry-run")

const COPY_DIRS = [
  "contents",
  "core",
  "utils",
  "store",
  "enums",
  "api",
  "hooks",
  "tabs",
  "background",
  "components",
  "assets",
  "config",
  "constants",
  "services",
  "types",
  "lib"
]

const stats = {
  copied: 0,
  skippedMissing: 0,
  cleanedPlasmo: 0
}

function relPosix(from, to) {
  return path.relative(from, to).split(path.sep).join("/")
}

function ensureDir(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
}

function copyFile(from, toRel) {
  const dest = path.join(OUT_SRC, toRel)
  if (DRY) {
    stats.copied += 1
    return
  }
  ensureDir(dest)
  fs.copyFileSync(from, dest)
  stats.copied += 1
}

function walkCopy(vendorDir, outRelBase) {
  if (!fs.existsSync(vendorDir)) {
    stats.skippedMissing += 1
    return
  }
  for (const ent of fs.readdirSync(vendorDir, { withFileTypes: true })) {
    const from = path.join(vendorDir, ent.name)
    const rel = outRelBase ? `${outRelBase}/${ent.name}` : ent.name
    if (ent.isDirectory()) {
      if (ent.name === "node_modules") continue
      walkCopy(from, rel)
      continue
    }
    if (!ent.isFile()) continue
    if (/\.(js|mjs|cjs|css|less|svg|png|jpg|jpeg|gif|webp|json)$/i.test(ent.name)) {
      copyFile(from, rel)
    }
  }
}

function copyVendorRootExtras() {
  const vendorRoot = path.dirname(VENDOR_SRC)
  // Root-level extracts (@parcel, zustand, _tilde_node_modules, …)
  for (const ent of fs.readdirSync(vendorRoot, { withFileTypes: true })) {
    const from = path.join(vendorRoot, ent.name)
    if (ent.name === "src") continue
    if (ent.isFile() && ent.name.endsWith(".js")) {
      const dest = path.join(OUT_ROOT, ent.name)
      if (!DRY) {
        fs.mkdirSync(OUT_ROOT, { recursive: true })
        fs.copyFileSync(from, dest)
      }
      stats.copied += 1
    } else if (ent.isDirectory() && (ent.name.startsWith("@") || ent.name.startsWith("_"))) {
      walkCopyOutsideSrc(from, path.join(OUT_ROOT, ent.name))
    }
  }
}

function walkCopyOutsideSrc(fromDir, toDir) {
  if (!fs.existsSync(fromDir)) return
  for (const ent of fs.readdirSync(fromDir, { withFileTypes: true })) {
    const from = path.join(fromDir, ent.name)
    const to = path.join(toDir, ent.name)
    if (ent.isDirectory()) {
      walkCopyOutsideSrc(from, to)
      continue
    }
    if (!ent.isFile()) continue
    if (DRY) {
      stats.copied += 1
      continue
    }
    fs.mkdirSync(path.dirname(to), { recursive: true })
    fs.copyFileSync(from, to)
    stats.copied += 1
  }
}

/** Remove Parcel modules that previously polluted Plasmo's src/. */
function cleanPlasmoSrcPollution() {
  const plasmoSrc = path.join(EXT_ROOT, "src")
  const killExact = [
    "@parcel",
    "@plasmohq",
    "components",
    "hooks",
    "bootstrapJobrightHelperRuntime.js",
    "contents.js",
    "constants.js",
    "enums.js",
    "FormFactory.js",
    "lenCalculation.js",
    "model.js",
    "storage.js",
    "theme.js",
    "utils.js"
  ]
  for (const name of killExact) {
    const p = path.join(plasmoSrc, name)
    if (!fs.existsSync(p)) continue
    if (DRY) {
      stats.cleanedPlasmo += 1
      continue
    }
    fs.rmSync(p, { recursive: true, force: true })
    stats.cleanedPlasmo += 1
  }

  // api/*.js parcel copies (keep *.ts)
  const apiDir = path.join(plasmoSrc, "api")
  if (fs.existsSync(apiDir)) {
    for (const f of fs.readdirSync(apiDir)) {
      if (!f.endsWith(".js")) continue
      const p = path.join(apiDir, f)
      if (!DRY) fs.unlinkSync(p)
      stats.cleanedPlasmo += 1
    }
  }

  // Parcel site .js under contents/sites (keep native-filler.ts / ported-sites.ts)
  const sitesDir = path.join(plasmoSrc, "contents", "sites")
  if (fs.existsSync(sitesDir)) {
    for (const ent of fs.readdirSync(sitesDir, { withFileTypes: true })) {
      const p = path.join(sitesDir, ent.name)
      if (ent.isDirectory()) {
        // remove vendor site folders (personio/, ashby/, …) — ops live in helper-runtime
        if (!DRY) fs.rmSync(p, { recursive: true, force: true })
        stats.cleanedPlasmo += 1
      } else if (ent.isFile() && ent.name.endsWith(".js")) {
        if (!DRY) fs.unlinkSync(p)
        stats.cleanedPlasmo += 1
      }
    }
  }

  // Parcel crawler/factory.js etc. — keep discover-*.ts
  const crawlerDir = path.join(plasmoSrc, "contents", "crawler")
  if (fs.existsSync(crawlerDir)) {
    for (const f of fs.readdirSync(crawlerDir)) {
      if (!f.endsWith(".js")) continue
      if (!DRY) fs.unlinkSync(path.join(crawlerDir, f))
      stats.cleanedPlasmo += 1
    }
  }

  // Parcel methods/*.js — keep native-*.ts / choice-match / etc.
  const methodsDir = path.join(plasmoSrc, "contents", "methods")
  if (fs.existsSync(methodsDir)) {
    for (const f of fs.readdirSync(methodsDir)) {
      if (!f.endsWith(".js")) continue
      if (!DRY) fs.unlinkSync(path.join(methodsDir, f))
      stats.cleanedPlasmo += 1
    }
  }

  // Parcel shared/*.js under contents/shared — keep runtime-activation.ts etc.
  const sharedDir = path.join(plasmoSrc, "contents", "shared")
  if (fs.existsSync(sharedDir)) {
    for (const f of fs.readdirSync(sharedDir)) {
      if (!f.endsWith(".js")) continue
      if (!DRY) fs.unlinkSync(path.join(sharedDir, f))
      stats.cleanedPlasmo += 1
    }
  }

  // Extra parcel trees — never wipe TypeScript-owned dirs (lib/, background/)
  for (const name of [
    "store",
    "tabs",
    "enums",
    "lib",
    "services",
    "config",
    "constants",
    "types",
    "crawler",
    "pre-autofill-flow",
    "background"
  ]) {
    const p = path.join(plasmoSrc, name)
    if (!fs.existsSync(p)) continue

    // Plasmo TS lives here — only strip Parcel .js siblings
    if (name === "background" || name === "lib") {
      for (const f of fs.readdirSync(p)) {
        if (!f.endsWith(".js")) continue
        if (!DRY) fs.unlinkSync(path.join(p, f))
        stats.cleanedPlasmo += 1
      }
      continue
    }

    // store/tabs/enums/… — remove whole tree if it is Parcel-only
    if (name === "store" || name === "tabs" || name === "enums") {
      if (!DRY) fs.rmSync(p, { recursive: true, force: true })
      stats.cleanedPlasmo += 1
    }
  }

  // core/*.js parcel siblings — keep .ts / site-registry.raw.*
  const coreDir = path.join(plasmoSrc, "core")
  if (fs.existsSync(coreDir)) {
    for (const f of fs.readdirSync(coreDir)) {
      if (!f.endsWith(".js")) continue
      if (f === "site-registry.raw.js") continue
      if (!DRY) fs.unlinkSync(path.join(coreDir, f))
      stats.cleanedPlasmo += 1
    }
    // phone-country-code dir from parcel
    const pcc = path.join(coreDir, "phone-country-code")
    if (fs.existsSync(pcc) && !fs.existsSync(pcc + ".ts")) {
      // keep if it's a directory of parcel js
      const onlyJs = fs
        .readdirSync(pcc)
        .every((x) => x.endsWith(".js") || x.endsWith(".json"))
      if (onlyJs) {
        if (!DRY) fs.rmSync(pcc, { recursive: true, force: true })
        stats.cleanedPlasmo += 1
      }
    }
  }

  // utils/ — remove if parcel-only .js tree; keep if we have ts
  const utilsDir = path.join(plasmoSrc, "utils")
  if (fs.existsSync(utilsDir)) {
    const files = fs.readdirSync(utilsDir)
    const hasTs = files.some((f) => f.endsWith(".ts") || f.endsWith(".tsx"))
    if (!hasTs) {
      if (!DRY) fs.rmSync(utilsDir, { recursive: true, force: true })
      stats.cleanedPlasmo += 1
    } else {
      for (const f of files) {
        if (f.endsWith(".js")) {
          if (!DRY) fs.unlinkSync(path.join(utilsDir, f))
          stats.cleanedPlasmo += 1
        }
      }
    }
  }

  // option-resolve-rollout.js under contents
  const orr = path.join(plasmoSrc, "contents", "option-resolve-rollout.js")
  if (fs.existsSync(orr)) {
    if (!DRY) fs.unlinkSync(orr)
    stats.cleanedPlasmo += 1
  }
  const pre = path.join(plasmoSrc, "contents", "pre-autofill-flow")
  if (fs.existsSync(pre)) {
    if (!DRY) fs.rmSync(pre, { recursive: true, force: true })
    stats.cleanedPlasmo += 1
  }
}

function writeInventory() {
  const sitesDir = path.join(OUT_SRC, "contents", "sites")
  if (!fs.existsSync(sitesDir)) return
  const skip = new Set([
    "base-filler",
    "autofill-answer-pair-tracking",
    "education-item-trace",
    "education-snapshot-tracking",
    "falcon-answer-tracking",
    "falcon-response-accumulator",
    "profile-location-original-answer",
    "resolve-trace-tracking",
    "runtime-validation-tracking"
  ])
  const sites = fs
    .readdirSync(sitesDir)
    .filter((n) => n.endsWith(".js"))
    .map((n) => n.replace(/\.js$/, ""))
    .filter((n) => !skip.has(n))
    .sort()
  const list = `/**
 * Auto-generated inventory of ported Parcel ATS site modules.
 * Source: helper-runtime/src/contents/sites
 * Re-run: node scripts/port-vendor-helper-to-src.mjs
 */
export const PORTED_ATS_SITES = ${JSON.stringify(sites, null, 2)} as const

export type PortedAtsSite = (typeof PORTED_ATS_SITES)[number]
`
  const dest = path.join(
    EXT_ROOT,
    "src",
    "contents",
    "sites",
    "ported-sites.ts"
  )
  if (!DRY) {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.writeFileSync(dest, list, "utf8")
  }
}

function main() {
  if (!fs.existsSync(VENDOR_SRC)) {
    console.error("[port-vendor] missing vendor src:", VENDOR_SRC)
    process.exit(1)
  }

  console.log(
    `[port-vendor] ${DRY ? "DRY RUN " : ""}${VENDOR_SRC} → ${OUT_SRC}`
  )

  cleanPlasmoSrcPollution()

  if (!DRY) {
    fs.mkdirSync(OUT_SRC, { recursive: true })
  }

  for (const dir of COPY_DIRS) {
    walkCopy(path.join(VENDOR_SRC, dir), dir)
  }
  // Also copy root js files under vendor/src
  if (fs.existsSync(VENDOR_SRC)) {
    for (const ent of fs.readdirSync(VENDOR_SRC, { withFileTypes: true })) {
      if (ent.isFile() && ent.name.endsWith(".js")) {
        copyFile(path.join(VENDOR_SRC, ent.name), ent.name)
      }
    }
  }
  copyVendorRootExtras()
  writeInventory()

  console.log("[port-vendor] done", stats)
  console.log(
    "[port-vendor] Plasmo src cleaned; ATS engine lives in helper-runtime/"
  )
}

main()
