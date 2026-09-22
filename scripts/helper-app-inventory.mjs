/**
 * Inventory + triage for engine/helper-app Parcel modules.
 *
 * Usage: node extension/scripts/helper-app-inventory.mjs
 *
 * Writes:
 *   engine/helper-app/_inventory.json
 *   engine/helper-app/_inventory-queue.md  (first-party work queue)
 *   engine/helper-app/_quarantine-candidates.json
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, "../..")
const HELPER = path.join(REPO_ROOT, "engine", "helper-app")
const MANIFEST = path.join(HELPER, "_manifest.json")

const MEGA_BYTES = 200 * 1024

function resolveOnDisk(manifestPath) {
  const candidates = [
    path.join(HELPER, manifestPath),
    path.join(HELPER, "src", manifestPath.replace(/^_tilde_/, "")),
    path.join(HELPER, path.basename(manifestPath))
  ]
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c
  }
  return null
}

function extractExports(source) {
  const names = []
  const re = /\.export\(\s*r\s*,\s*["']([^"']+)["']/g
  let m
  while ((m = re.exec(source))) names.push(m[1])
  return [...new Set(names)]
}

function classify(manifestPath, diskPath, bytes, exportNames) {
  const p = manifestPath.replace(/\\/g, "/")
  const base = path.basename(p)
  // Mega concatenated vendor blobs (antd/css-utils) — never first-party work.
  if (bytes >= MEGA_BYTES && !p.includes("/src/") && !p.startsWith("_tilde_")) {
    return { bucket: "mega", firstParty: false }
  }
  if (p.startsWith("_tilde_node_modules/") || p.includes("node_modules/")) {
    return { bucket: "node_modules", firstParty: false }
  }
  if (p.startsWith("vendor-") || /^vendor-/.test(base)) {
    return { bucket: "vendor", firstParty: false }
  }
  if (p.startsWith("_dotdot_/")) {
    return { bucket: "dotdot", firstParty: false }
  }
  if (p.startsWith("_unmapped/")) {
    return { bucket: "unmapped", firstParty: false }
  }
  if (/^(icons|FastColor|row|col)\.js$/i.test(base)) {
    return { bucket: "vendor_ui", firstParty: false }
  }
  if (/__(?:[A-Za-z0-9]+)\.js$/.test(p)) {
    return { bucket: "parcel_dup", firstParty: true }
  }
  if (
    p.startsWith("_tilde_") ||
    p.startsWith("src/") ||
    (diskPath && /(^|\/)src\//.test(diskPath.replace(/\\/g, "/")))
  ) {
    return { bucket: "tilde_src", firstParty: true }
  }
  // Root site ops / rules (basename only — megafiles embed false export hits)
  if (
    /^(operation|operations|rules|answer|education-operation|location-operation)/i.test(
      base
    )
  ) {
    return { bucket: "root_ops", firstParty: true }
  }
  if (
    bytes < MEGA_BYTES &&
    exportNames.some((n) => /^(fill|upload|submit|crawl)/i.test(n))
  ) {
    return { bucket: "root_ops", firstParty: true }
  }
  return { bucket: "other", firstParty: false }
}

function main() {
  const man = JSON.parse(fs.readFileSync(MANIFEST, "utf8"))
  const modules = []
  const buckets = {}

  for (const [parcelId, mod] of Object.entries(man.modules || {})) {
    const manifestPath = (mod.path || "").replace(/\\/g, "/")
    const diskPath = resolveOnDisk(manifestPath)
    let bytes = mod.bytes || 0
    let exportNames = []
    let sourcePreview = ""
    if (diskPath) {
      const st = fs.statSync(diskPath)
      bytes = st.size
      const src = fs.readFileSync(diskPath, "utf8")
      exportNames = extractExports(src)
      sourcePreview = src.slice(0, 200)
    }
    const { bucket, firstParty } = classify(
      manifestPath,
      diskPath,
      bytes,
      exportNames
    )
    buckets[bucket] = (buckets[bucket] || 0) + 1

    modules.push({
      parcelId,
      path: manifestPath,
      diskPath: diskPath ? path.relative(HELPER, diskPath).replace(/\\/g, "/") : null,
      bytes,
      depCount: Object.keys(mod.deps || {}).length,
      exportNames,
      bucket,
      firstParty,
      missing: !diskPath
    })
  }

  modules.sort((a, b) => b.bytes - a.bytes)

  const quarantine = modules.filter(
    (m) =>
      (m.bucket === "mega" || m.bucket === "vendor_ui") &&
      m.bytes >= MEGA_BYTES &&
      m.diskPath
  )

  const queue = modules
    .filter((m) => m.firstParty && m.diskPath)
    .sort((a, b) => b.bytes - a.bytes)

  const report = {
    generatedAt: new Date().toISOString(),
    moduleCount: modules.length,
    buckets,
    firstPartyCount: modules.filter((m) => m.firstParty).length,
    missingCount: modules.filter((m) => m.missing).length,
    quarantineCount: quarantine.length,
    modules
  }

  fs.writeFileSync(
    path.join(HELPER, "_inventory.json"),
    JSON.stringify(report, null, 2)
  )
  fs.writeFileSync(
    path.join(HELPER, "_quarantine-candidates.json"),
    JSON.stringify(
      {
        generatedAt: report.generatedAt,
        thresholdBytes: MEGA_BYTES,
        note: "Do not deobfuscate. Quarantine only if unused by bundle entry walk.",
        candidates: quarantine.map((m) => ({
          path: m.path,
          diskPath: m.diskPath,
          bytes: m.bytes,
          parcelId: m.parcelId
        }))
      },
      null,
      2
    )
  )

  const md = [
    `# Helper-app first-party work queue`,
    ``,
    `Generated: ${report.generatedAt}`,
    ``,
    `## Buckets`,
    ``,
    ...Object.entries(buckets).map(([k, v]) => `- **${k}**: ${v}`),
    ``,
    `## Quarantine candidates (>${MEGA_BYTES} bytes, not first-party)`,
    ``,
    ...quarantine.map(
      (m) =>
        `- \`${m.diskPath}\` (${(m.bytes / 1024).toFixed(0)} KB) parcel \`${m.parcelId}\``
    ),
    ``,
    `## First-party queue (largest first, top 80)`,
    ``,
    `| KB | Path | Exports | Bucket |`,
    `|----|------|---------|--------|`,
    ...queue.slice(0, 80).map((m) => {
      const exports = (m.exportNames || []).slice(0, 6).join(", ")
      return `| ${(m.bytes / 1024).toFixed(1)} | \`${m.diskPath}\` | ${exports} | ${m.bucket} |`
    }),
    ``
  ].join("\n")

  fs.writeFileSync(path.join(HELPER, "_inventory-queue.md"), md)

  console.log(
    `[inventory] modules=${report.moduleCount} firstParty=${report.firstPartyCount} missing=${report.missingCount}`
  )
  console.log("[inventory] buckets", buckets)
  console.log(
    `[inventory] quarantine candidates: ${quarantine.length} → _quarantine-candidates.json`
  )
  console.log(`[inventory] queue: ${queue.length} → _inventory-queue.md`)
}

main()
