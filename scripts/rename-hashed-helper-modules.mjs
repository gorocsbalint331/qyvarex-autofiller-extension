/**
 * Rename content-hashed helper-app JS files to readable names and rewrite
 * Parcel e() / dependency-header / _manifest.json references.
 *
 * Usage:
 *   node extension/scripts/rename-hashed-helper-modules.mjs          # dry-run
 *   node extension/scripts/rename-hashed-helper-modules.mjs --apply
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, "../..")
const HELPER_ROOT = path.join(REPO_ROOT, "engine", "helper-app")
const MANIFEST_PATH = path.join(HELPER_ROOT, "_manifest.json")
const RENAME_MAP_PATH = path.join(HELPER_ROOT, "_rename-map.json")

const APPLY = process.argv.includes("--apply")
const HASH_FILE_RE = /^[0-9a-f]{8,}\.js$/i

/** Seeded renames for well-known vendor chunks (basename without .js → new basename). */
const KNOWN = {
  "6bacfd93a2f01499": "zustand-vanilla",
  e66ab0f3cddd1432: "zustand-react",
  "61e3cf0e9433c992": "react-reexport",
  ae0ab14aecd941d7: "react",
  "87ad33dd8ef612b1": "react-dom-reexport",
  ba80e5a03a461355: "react-jsx-runtime",
  "71579dfbaecf2984": "pify"
}

function isReadableSpecifier(spec) {
  if (!spec || typeof spec !== "string") return false
  if (HASH_FILE_RE.test(spec + ".js") || /^[0-9a-f]{8,}$/i.test(spec)) return false
  if (spec.startsWith("@parcel/")) return false
  if (spec.startsWith("url:")) return false
  return true
}

function sanitizeBaseName(raw) {
  let s = String(raw || "")
    .replace(/^~/, "")
    .replace(/^node_modules\//, "")
    .replace(/^_tilde_node_modules\//, "")
    .replace(/^_tilde_/, "")
    .replace(/^_dotdot_\//g, "")
    .replace(/\.(js|mjs|cjs|ts|tsx)$/i, "")
  s = s.replace(/[^a-zA-Z0-9._/-]+/g, "-")
  s = s.replace(/\/+/g, "__")
  s = s.replace(/-+/g, "-").replace(/^-|-$/g, "")
  if (!s) return null
  if (!/^[a-zA-Z_]/.test(s)) s = "mod-" + s
  return s.slice(0, 80)
}

function listHashedFiles() {
  return fs
    .readdirSync(HELPER_ROOT)
    .filter((n) => HASH_FILE_RE.test(n) && fs.statSync(path.join(HELPER_ROOT, n)).isFile())
}

function loadManifest() {
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"))
}

function buildParcelIndex(manifest) {
  /** @type {Map<string, { parcelId: string, path: string, deps: Record<string,string> }>} */
  const byPath = new Map()
  /** @type {Map<string, { parcelId: string, path: string, deps: Record<string,string> }>} */
  const byParcelId = new Map()
  /** parcelId → list of { parentId, specifier } */
  const importers = new Map()

  for (const [parcelId, mod] of Object.entries(manifest.modules || {})) {
    const entry = {
      parcelId,
      path: mod.path || "",
      deps: mod.deps || {}
    }
    byParcelId.set(parcelId, entry)
    if (entry.path) byPath.set(entry.path.replace(/\\/g, "/"), entry)

    for (const [specifier, depId] of Object.entries(entry.deps)) {
      if (!importers.has(depId)) importers.set(depId, [])
      importers.get(depId).push({ parentId: parcelId, specifier })
    }
  }
  return { byPath, byParcelId, importers }
}

function inferFromExports(filePath) {
  // Only scan a prefix + a middle window — files can be huge (react-dom).
  const fd = fs.openSync(filePath, "r")
  const buf = Buffer.alloc(Math.min(fs.fstatSync(fd).size, 200_000))
  fs.readSync(fd, buf, 0, buf.length, 0)
  fs.closeSync(fd)
  const src = buf.toString("utf8")
  const head = src.slice(0, 800)

  if (/r\.createStore\s*=/.test(src) || /exports\.createStore\s*=/.test(src)) {
    return "zustand-vanilla"
  }
  if (
    (/r\.create\s*=/.test(src) && /r\.useStore\s*=/.test(src)) ||
    (/exports\.create\s*=/.test(src) && /useStore/.test(src))
  ) {
    return "zustand-react"
  }
  // Prefer precise React family markers over generic SECRET_INTERNALS.
  if (/r\.version\s*=\s*"18\./.test(src) && /r\.createElement\s*=/.test(src)) {
    return "react"
  }
  if (/createRoot|hydrateRoot|ReactDOM/.test(src) && /react-dom|ReactDOM/.test(src)) {
    return "react-dom"
  }
  if (
    /r\.jsx\s*=/.test(src) &&
    /r\.jsxs\s*=/.test(src) &&
    /Symbol\.for\("react\.element"\)/.test(src)
  ) {
    return "react-jsx-runtime"
  }
  if (/Scheduler\.unstable_/.test(src) || /exports\.unstable_scheduleCallback/.test(src)) {
    return "scheduler"
  }
  if (/object-assign|Object\.assign/.test(head) && src.length < 2000 && /module\.exports/.test(src)) {
    // too weak alone — skip
  }
  return null
}

function pickName(oldBase, parcelId, index) {
  if (KNOWN[oldBase]) return KNOWN[oldBase]

  const pathKey = `${oldBase}.js`
  const entry = index.byPath.get(pathKey)
  const pid = entry?.parcelId || parcelId

  // Prefer readable import specifier from parents
  const parents = index.importers.get(pid) || []
  const readableSpecs = parents
    .map((p) => p.specifier)
    .filter(isReadableSpecifier)
    .map(sanitizeBaseName)
    .filter(Boolean)

  // Prefer shortest non-tilde package-like name
  readableSpecs.sort((a, b) => {
    const score = (s) =>
      (s.includes("__") ? 10 : 0) + (s.startsWith("mod-") ? 5 : 0) + s.length
    return score(a) - score(b)
  })
  if (readableSpecs[0]) return readableSpecs[0]

  const fromExports = inferFromExports(path.join(HELPER_ROOT, pathKey))
  if (fromExports) return fromExports

  return `vendor-${pid}`
}

function uniquify(desired, used, parcelId) {
  let name = desired
  if (!used.has(name)) {
    used.add(name)
    return name
  }
  // Collision rule from plan: append short parcel id
  if (parcelId) {
    name = `${desired}-${parcelId}`
    if (!used.has(name)) {
      used.add(name)
      return name
    }
  }
  let i = 2
  while (used.has(`${desired}-${i}`)) i += 1
  name = `${desired}-${i}`
  used.add(name)
  return name
}

function buildRenameMap(index) {
  const hashed = listHashedFiles()
  const used = new Set(
    fs
      .readdirSync(HELPER_ROOT)
      .filter((n) => n.endsWith(".js") && !HASH_FILE_RE.test(n))
      .map((n) => n.replace(/\.js$/i, ""))
  )

  /** @type {Record<string, string>} oldBasename → newBasename (no .js) */
  const map = {}

  // Reserve KNOWN names first so seeds win over heuristics.
  const ordered = [
    ...hashed.filter((f) => KNOWN[f.replace(/\.js$/i, "")]),
    ...hashed.filter((f) => !KNOWN[f.replace(/\.js$/i, "")]).sort()
  ]

  for (const file of ordered) {
    const oldBase = file.replace(/\.js$/i, "")
    const entry = index.byPath.get(file)
    const desired = pickName(oldBase, entry?.parcelId, index)
    const unique = uniquify(desired, used, entry?.parcelId)
    map[oldBase] = unique
  }

  return map
}

function collectJsFiles(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules") continue
    const full = path.join(dir, name)
    const st = fs.statSync(full)
    if (st.isDirectory()) collectJsFiles(full, out)
    else if (name.endsWith(".js") || name.endsWith(".json")) out.push(full)
  }
  return out
}

/**
 * Rewrite references carefully:
 * - e("oldBase") / e('oldBase')
 * - header lines: => oldBase.js
 * - manifest "path": "oldBase.js"
 * - manifest deps keys "oldBase": "parcelId"
 */
function rewriteContent(content, oldBase, newBase) {
  let next = content
  const oldFile = `${oldBase}.js`
  const newFile = `${newBase}.js`

  // e("...") / e('...')
  next = next.replace(
    new RegExp(`e\\((["'])${escapeRegExp(oldBase)}\\1\\)`, "g"),
    `e($1${newBase}$1)`
  )

  // Dependency header lines:
  //   *   oldBase -> parcelId  =>  oldBase.js [optional trailing note]
  // Prefer rewriting the whole line so the bundler's depMap key matches e().
  next = next.replace(
    new RegExp(
      `^(\\s*\\*\\s+)${escapeRegExp(oldBase)}(\\s+->\\s+\\S+\\s+=>\\s+)${escapeRegExp(oldFile)}(\\s+.*)?$`,
      "gm"
    ),
    `$1${newBase}$2${newFile}`
  )
  next = next.replace(
    new RegExp(
      `^(\\s*\\*\\s+)${escapeRegExp(oldBase)}(\\s+->\\s+\\S+\\s+=>\\s+)${escapeRegExp(newFile)}(\\s+.*)?$`,
      "gm"
    ),
    `$1${newBase}$2${newFile}`
  )

  // => oldBase.js in dependency headers (fallback if left side already changed)
  next = next.replace(
    new RegExp(`(=>\\s+)${escapeRegExp(oldFile)}(\\s*$)`, "gm"),
    `$1${newFile}$2`
  )
  next = next.replace(
    new RegExp(`(=>\\s+)${escapeRegExp(oldFile)}(\\s)`, "g"),
    `$1${newFile}$2`
  )

  // "path": "oldBase.js"
  next = next.replace(
    new RegExp(`("path"\\s*:\\s*")${escapeRegExp(oldFile)}(")`, "g"),
    `$1${newFile}$2`
  )

  // Resolved path: oldBase.js
  next = next.replace(
    new RegExp(`(Resolved path:\\s*)${escapeRegExp(oldFile)}`, "g"),
    `$1${newFile}`
  )

  // deps key "oldBase": "id"  (exact key)
  next = next.replace(
    new RegExp(`(["'])${escapeRegExp(oldBase)}\\1(\\s*:\\s*["'][A-Za-z0-9]+["'])`, "g"),
    `$1${newBase}$1$2`
  )

  return next
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function applyRewrites(renameMap) {
  const files = collectJsFiles(HELPER_ROOT)
  // Also include manifest explicitly
  if (!files.includes(MANIFEST_PATH)) files.push(MANIFEST_PATH)

  let filesTouched = 0
  for (const file of files) {
    let content = fs.readFileSync(file, "utf8")
    const original = content
    for (const [oldBase, newBase] of Object.entries(renameMap)) {
      content = rewriteContent(content, oldBase, newBase)
    }
    if (content !== original) {
      fs.writeFileSync(file, content, "utf8")
      filesTouched += 1
    }
  }

  // Rename files on disk (after rewrites so we still read old paths)
  let renamed = 0
  for (const [oldBase, newBase] of Object.entries(renameMap)) {
    const from = path.join(HELPER_ROOT, `${oldBase}.js`)
    const to = path.join(HELPER_ROOT, `${newBase}.js`)
    if (!fs.existsSync(from)) {
      console.warn(`missing source: ${oldBase}.js`)
      continue
    }
    if (fs.existsSync(to)) {
      throw new Error(`target exists: ${newBase}.js`)
    }
    fs.renameSync(from, to)
    renamed += 1
  }

  return { filesTouched, renamed }
}

function main() {
  const manifest = loadManifest()
  const index = buildParcelIndex(manifest)
  const renameMap = buildRenameMap(index)

  const report = {
    generatedAt: new Date().toISOString(),
    apply: APPLY,
    count: Object.keys(renameMap).length,
    map: Object.fromEntries(
      Object.entries(renameMap).map(([oldBase, newBase]) => [
        `${oldBase}.js`,
        `${newBase}.js`
      ])
    )
  }

  fs.writeFileSync(RENAME_MAP_PATH, JSON.stringify(report, null, 2))
  console.log(`Wrote ${RENAME_MAP_PATH} (${report.count} renames)`)

  // Print interesting samples
  const samples = [
    "6bacfd93a2f01499",
    "e66ab0f3cddd1432",
    "61e3cf0e9433c992",
    "ae0ab14aecd941d7"
  ]
  for (const s of samples) {
    if (renameMap[s]) console.log(`  ${s}.js → ${renameMap[s]}.js`)
  }

  const vendorCount = Object.values(renameMap).filter((n) =>
    n.startsWith("vendor-")
  ).length
  console.log(`vendor-* fallbacks: ${vendorCount}`)

  if (!APPLY) {
    console.log("Dry-run only. Re-run with --apply to rename + rewrite.")
    return
  }

  const result = applyRewrites(renameMap)
  console.log(
    `Applied: renamed ${result.renamed} files, rewrote ${result.filesTouched} text files`
  )

  const leftover = listHashedFiles()
  console.log(`Remaining hashed root files: ${leftover.length}`)
  if (leftover.length) console.log(leftover.slice(0, 20).join("\n"))
}

main()
