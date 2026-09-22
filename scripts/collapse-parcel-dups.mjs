/**
 * Collapse Parcel duplicate suffixes using the importer graph.
 *
 * Root files like `operations__kmsj6.js` are Parcel's way of naming
 * `./operations` for a site module. The importer
 * `_tilde_contents/sites/paycomonline-v3.js` → `./operations` → `kmsj6`
 * tells us the canonical file is:
 *   src/contents/sites/paycomonline-v3/operations.js
 *
 * Dry-run by default. `--apply` rewrites refs and archives losers under
 * engine/helper-app/_archive/dups/
 *
 * Usage:
 *   node extension/scripts/collapse-parcel-dups.mjs
 *   node extension/scripts/collapse-parcel-dups.mjs --apply
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, "../..")
const HELPER = path.join(REPO_ROOT, "engine", "helper-app")
const MANIFEST = path.join(HELPER, "_manifest.json")
const APPLY = process.argv.includes("--apply")
const DUP_RE = /^(.+)__([A-Za-z0-9]+)\.js$/

function resolveDisk(manifestPath) {
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

function buildImporterIndex(man) {
  /** @type {Map<string, Array<{parentId:string,parentPath:string,spec:string}>>} */
  const importers = new Map()
  for (const [parentId, mod] of Object.entries(man.modules || {})) {
    for (const [spec, depId] of Object.entries(mod.deps || {})) {
      if (!importers.has(depId)) importers.set(depId, [])
      importers.get(depId).push({
        parentId,
        parentPath: (mod.path || "").replace(/\\/g, "/"),
        spec
      })
    }
  }
  return importers
}

/**
 * Given a dup module id + basename stem (operations), find or propose canonical src path.
 * Returns { diskPath, diskRel, via, spec, exists }.
 */
function findCanonical(parcelId, stem, importers) {
  const parents = importers.get(parcelId) || []

  for (const parent of parents) {
    const pp = parent.parentPath

    const siteFile = pp.match(
      /^(?:_tilde_contents|src\/contents)\/sites\/([^/]+)\.js$/
    )
    if (siteFile && (parent.spec === `./${stem}` || parent.spec === stem)) {
      const site = siteFile[1]
      const cand = path.join(
        HELPER,
        "src",
        "contents",
        "sites",
        site,
        `${stem}.js`
      )
      return {
        diskPath: cand,
        diskRel: path.relative(HELPER, cand).replace(/\\/g, "/"),
        via: pp,
        spec: parent.spec,
        exists: fs.existsSync(cand)
      }
    }

    const siteDir = pp.match(
      /^(?:_tilde_contents|src\/contents)\/sites\/([^/]+)\/(.+)\.js$/
    )
    if (siteDir && parent.spec.startsWith("./")) {
      const site = siteDir[1]
      const rel = parent.spec.replace(/^\.\//, "")
      const cand = path.join(
        HELPER,
        "src",
        "contents",
        "sites",
        site,
        rel.endsWith(".js") ? rel : `${rel}.js`
      )
      return {
        diskPath: cand,
        diskRel: path.relative(HELPER, cand).replace(/\\/g, "/"),
        via: pp,
        spec: parent.spec,
        exists: fs.existsSync(cand)
      }
    }

    if (
      (pp.startsWith("_tilde_contents/") ||
        pp.startsWith("_tilde_core/") ||
        pp.startsWith("_tilde_utils/") ||
        pp.startsWith("_tilde_components/") ||
        pp.startsWith("_tilde_api/") ||
        pp.startsWith("src/")) &&
      parent.spec.startsWith("./")
    ) {
      let parentLogical = pp
      if (pp.startsWith("_tilde_contents/")) {
        parentLogical = "contents/" + pp.slice("_tilde_contents/".length)
      } else if (pp.startsWith("_tilde_core/")) {
        parentLogical = "core/" + pp.slice("_tilde_core/".length)
      } else if (pp.startsWith("_tilde_utils/")) {
        parentLogical = "utils/" + pp.slice("_tilde_utils/".length)
      } else if (pp.startsWith("_tilde_components/")) {
        parentLogical = "components/" + pp.slice("_tilde_components/".length)
      } else if (pp.startsWith("_tilde_api/")) {
        parentLogical = "api/" + pp.slice("_tilde_api/".length)
      } else if (pp.startsWith("src/")) {
        parentLogical = pp.slice("src/".length)
      } else {
        continue
      }
      parentLogical = parentLogical.replace(/\.js$/, "")
      const parentDir = path.dirname(parentLogical)
      const rel = parent.spec.replace(/^\.\//, "")
      const cand = path.join(
        HELPER,
        "src",
        parentDir === "." ? "" : parentDir,
        rel.endsWith(".js") ? rel : `${rel}.js`
      )
      return {
        diskPath: cand,
        diskRel: path.relative(HELPER, cand).replace(/\\/g, "/"),
        via: pp,
        spec: parent.spec,
        exists: fs.existsSync(cand)
      }
    }
  }

  return null
}

function buildCollapseMap(man) {
  const importers = buildImporterIndex(man)
  const collapses = []

  for (const [parcelId, mod] of Object.entries(man.modules || {})) {
    const manifestPath = (mod.path || "").replace(/\\/g, "/")
    const base = path.basename(manifestPath)
    if (base.startsWith("data-base64") || base.startsWith("url_")) continue
    const m = base.match(DUP_RE)
    if (!m) continue

    const stem = m[1]
    const loserDisk = resolveDisk(manifestPath)
    if (!loserDisk) continue
    // Prefer collapsing only root-level dups (src already canonical)
    const loserRel = path.relative(HELPER, loserDisk).replace(/\\/g, "/")
    if (loserRel.startsWith("src/")) continue

    const canonical = findCanonical(parcelId, stem, importers)
    if (!canonical) continue
    if (
      canonical.exists &&
      path.normalize(canonical.diskPath) === path.normalize(loserDisk)
    ) {
      continue
    }

    collapses.push({
      parcelId,
      stem,
      action: canonical.exists ? "archive_dup" : "move_into_src",
      loser: {
        manifestPath,
        diskRel: loserRel,
        diskPath: loserDisk
      },
      canonical: {
        diskRel: canonical.diskRel,
        diskPath: canonical.diskPath,
        via: canonical.via,
        spec: canonical.spec,
        exists: canonical.exists
      }
    })
  }

  // Dedupe by canonical path: keep largest loser as the file to move.
  const byCanon = new Map()
  for (const c of collapses) {
    const key = path.normalize(c.canonical.diskPath)
    const prev = byCanon.get(key)
    if (!prev) {
      byCanon.set(key, c)
      continue
    }
    const prevSize = fs.statSync(prev.loser.diskPath).size
    const nextSize = fs.statSync(c.loser.diskPath).size
    if (nextSize > prevSize) {
      // demote previous to alias of new winner
      c.aliases = [...(prev.aliases || []), prev.loser, ...(c.aliases || [])]
      byCanon.set(key, c)
    } else {
      prev.aliases = [...(prev.aliases || []), c.loser]
      byCanon.set(key, prev)
    }
  }

  return [...byCanon.values()]
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function walkFiles(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules" || name === "_archive" || name === "helper-app-src") {
      continue
    }
    const full = path.join(dir, name)
    const st = fs.statSync(full)
    if (st.isDirectory()) walkFiles(full, out)
    else if (name.endsWith(".js") || name === "_manifest.json") out.push(full)
  }
  return out
}

/**
 * After collapse, e() and headers should use a specifier the bundler resolves
 * to the canonical src file. Prefer the parent import spec when absolute-ish
 * (`~contents/sites/x/operations`) or keep basename if unique.
 *
 * Practically: rewrite path side (`=> operations__X.js`) to `src/.../operations.js`
 * and left-side / e() key from `operations__X` to a stable key derived from
 * canonical relative path without .js (with / → __ for e() safety) OR keep
 * using the tilde-style specifier if present in headers of importers.
 *
 * Simplest reliable approach used here:
 * - e("operations__kmsj6") → e("src/contents/sites/paycomonline-v3/operations")
 * - header => operations__kmsj6.js → => src/contents/sites/paycomonline-v3/operations.js
 * - manifest path field updated similarly
 *
 * bundle-engine-helper joins ENGINE_ROOT + specifier + ".js" which works for
 * `src/contents/sites/paycomonline-v3/operations`.
 */
function applyCollapses(collapses) {
  const archive = path.join(HELPER, "_archive", "dups")
  fs.mkdirSync(archive, { recursive: true })

  const pairs = []
  let movedIntoSrc = 0
  let archived = 0

  for (const c of collapses) {
    const losers = [c.loser, ...(c.aliases || [])]
    for (const loser of losers) {
      const oldFile = path.basename(loser.diskPath)
      const oldBase = oldFile.replace(/\.js$/i, "")
      const newFile = c.canonical.diskRel
      const newBase = c.canonical.diskRel.replace(/\.js$/i, "")
      pairs.push({
        oldBase,
        oldFile,
        newBase,
        newFile,
        loserRel: loser.diskRel,
        loserDisk: loser.diskPath,
        isPrimary: loser === c.loser
      })
    }

    const primary = c.loser
    const oldFile = path.basename(primary.diskPath)

    if (c.action === "move_into_src" || !c.canonical.exists) {
      fs.mkdirSync(path.dirname(c.canonical.diskPath), { recursive: true })
      if (!fs.existsSync(c.canonical.diskPath)) {
        let body = fs.readFileSync(primary.diskPath, "utf8")
        body = body.replace(
          /Resolved path:\s*.+/,
          `Resolved path: ${c.canonical.diskRel}`
        )
        fs.writeFileSync(c.canonical.diskPath, body, "utf8")
        movedIntoSrc += 1
      }
    }

    for (const loser of losers) {
      if (!fs.existsSync(loser.diskPath)) continue
      if (
        path.normalize(loser.diskPath) ===
        path.normalize(c.canonical.diskPath)
      ) {
        continue
      }
      const destName = path.basename(loser.diskPath)
      const dest = path.join(archive, destName)
      if (fs.existsSync(dest)) {
        fs.renameSync(
          loser.diskPath,
          path.join(archive, `${Date.now()}-${destName}`)
        )
      } else {
        fs.renameSync(loser.diskPath, dest)
      }
      archived += 1
    }
  }

  let filesTouched = 0
  for (const file of walkFiles(HELPER)) {
    let content = fs.readFileSync(file, "utf8")
    const original = content
    for (const p of pairs) {
      content = content.replace(
        new RegExp(`e\\((["'])${escapeRegExp(p.oldBase)}\\1\\)`, "g"),
        `e($1${p.newBase}$1)`
      )
      content = content.replace(
        new RegExp(
          `^(\\s*\\*\\s+)${escapeRegExp(p.oldBase)}(\\s+->\\s+\\S+\\s+=>\\s+)\\S+`,
          "gm"
        ),
        `$1${p.newBase}$2${p.newFile}`
      )
      content = content.replace(
        new RegExp(`(=>\\s+)${escapeRegExp(p.oldFile)}`, "g"),
        `$1${p.newFile}`
      )
      content = content.replace(
        new RegExp(`(=>\\s+)${escapeRegExp(p.loserRel)}`, "g"),
        `$1${p.newFile}`
      )
      content = content.replace(
        new RegExp(`("path"\\s*:\\s*")${escapeRegExp(p.oldFile)}(")`, "g"),
        `$1${p.newFile}$2`
      )
      content = content.replace(
        new RegExp(`("path"\\s*:\\s*")${escapeRegExp(p.loserRel)}(")`, "g"),
        `$1${p.newFile}$2`
      )
    }
    if (content !== original) {
      fs.writeFileSync(file, content, "utf8")
      filesTouched += 1
    }
  }

  // Also sync into oracle tree
  const oracle = path.join(REPO_ROOT, "engine", "helper-app-src")
  if (fs.existsSync(oracle)) {
    for (const c of collapses) {
      if (!fs.existsSync(c.canonical.diskPath)) continue
      const dest = path.join(
        oracle,
        c.canonical.diskRel.replace(/^src\//, "")
      )
      fs.mkdirSync(path.dirname(dest), { recursive: true })
      fs.copyFileSync(c.canonical.diskPath, dest)
    }
  }

  return { filesTouched, archived, movedIntoSrc }
}

function main() {
  const man = JSON.parse(fs.readFileSync(MANIFEST, "utf8"))
  const collapses = buildCollapseMap(man)

  const report = {
    generatedAt: new Date().toISOString(),
    apply: APPLY,
    count: collapses.length,
    moveIntoSrc: collapses.filter((c) => c.action === "move_into_src").length,
    archiveDup: collapses.filter((c) => c.action === "archive_dup").length,
    collapses: collapses.map((c) => ({
      parcelId: c.parcelId,
      stem: c.stem,
      action: c.action,
      loser: c.loser.diskRel,
      canonical: c.canonical.diskRel,
      via: c.canonical.via,
      spec: c.canonical.spec
    }))
  }

  fs.writeFileSync(
    path.join(HELPER, "_dup-collapse-map.json"),
    JSON.stringify(report, null, 2)
  )
  console.log(
    `[collapse-dups] matched ${report.count} (move=${report.moveIntoSrc}, archive=${report.archiveDup}) → _dup-collapse-map.json`
  )
  for (const c of report.collapses.slice(0, 12)) {
    console.log(`  [${c.action}] ${c.loser} → ${c.canonical}`)
  }
  if (report.count > 12) console.log(`  … +${report.count - 12} more`)

  if (!APPLY) {
    console.log("Dry-run only. Re-run with --apply to rewrite + archive.")
    return
  }

  const result = applyCollapses(collapses)
  console.log(
    `[collapse-dups] applied: rewrote ${result.filesTouched} files, archived ${result.archived}, movedIntoSrc ${result.movedIntoSrc}`
  )
}

main()
