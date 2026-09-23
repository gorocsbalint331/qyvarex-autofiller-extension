/**
 * Bundle helper runtime into extension/assets/
 *
 * Activate / bootstrap injects assets/helper-app.js.
 *
 * HELPER_RUNTIME=ts (default)      — helper-runtime/ (ported ATS) → helper-app.js
 * HELPER_RUNTIME=parcel            — vendor/helper-app dump → helper-app.js
 * HELPER_RUNTIME=phase1            — copy assets/helper-app.phase1.js → helper-app.js
 *
 * Usage: node scripts/bundle-engine-helper.mjs [--runtime=ts|parcel|phase1]
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import {
  compileTsToParcelSource,
  isTypeScriptFile,
} from "./lib/ts-to-parcel.mjs"
import {
  ensureNpmVendorModule,
  isNpmVendorSpec,
  normalizeNpmSpec,
} from "./lib/npm-vendor-cache.mjs"


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXT_ROOT = path.resolve(__dirname, "..")
const REPO_ROOT = path.resolve(EXT_ROOT, "..")
const RUNTIME_ARG = process.argv.find((a) => a.startsWith("--runtime="))
const RUNTIME = (
  process.env.HELPER_RUNTIME ||
  (RUNTIME_ARG ? RUNTIME_ARG.slice("--runtime=".length) : "ts")
).toLowerCase()

const OUT = path.join(EXT_ROOT, "assets", "helper-app.js")
const PHASE1 = path.join(EXT_ROOT, "assets", "helper-app.phase1.js")
const PARCEL_OUT = path.join(EXT_ROOT, "assets", "helper-app.parcel.js")

if (RUNTIME === "ts" || RUNTIME === "typescript") {
  // Full ATS engine: Parcel modules in extension/helper-runtime (isolated from Plasmo src)
  console.log(
    "[bundle-engine-helper] HELPER_RUNTIME=ts → parcel-link helper-runtime/"
  )
  // Fall through to parcel bundler below.
} else if (RUNTIME === "phase1" || RUNTIME === "p1") {
  if (!fs.existsSync(PHASE1)) {
    console.error("[bundle-engine-helper] missing", PHASE1)
    process.exit(1)
  }
  fs.copyFileSync(PHASE1, OUT)
  const bytes = fs.statSync(OUT).size
  console.log(
    `[bundle-engine-helper] HELPER_RUNTIME=phase1 → assets/helper-app.js (${(bytes / 1024).toFixed(0)} KB)`
  )
  process.exit(0)
}

const USE_SRC_TREE = RUNTIME === "ts" || RUNTIME === "typescript"
const HELPER_RUNTIME_ROOT = path.join(EXT_ROOT, "helper-runtime")

const ENGINE_ROOT_VENDORED = path.join(EXT_ROOT, "vendor", "helper-app")
const ENGINE_ROOT_MONOREPO = path.join(REPO_ROOT, "engine", "helper-app")
const ENGINE_ROOT = USE_SRC_TREE
  ? HELPER_RUNTIME_ROOT
  : fs.existsSync(ENGINE_ROOT_VENDORED)
    ? ENGINE_ROOT_VENDORED
    : ENGINE_ROOT_MONOREPO

/** When bundling from helper-runtime, fall back to vendored root for extracts. */
const VENDOR_FALLBACK =
  USE_SRC_TREE && fs.existsSync(ENGINE_ROOT_VENDORED)
    ? ENGINE_ROOT_VENDORED
    : null

if (USE_SRC_TREE) {
  const factory = path.join(
    HELPER_RUNTIME_ROOT,
    "src",
    "contents",
    "crawler",
    "factory.js"
  )
  if (fs.existsSync(factory)) {
    // no-op: factory presence check only
  } else {
    console.error(
      "[bundle-engine-helper] missing helper-runtime factory — run: npm run port:vendor-helper"
    )
    process.exit(1)
  }
  console.log(
    "[bundle-engine-helper] using helper-runtime as engine root (TypeScript preferred)"
  )
  if (VENDOR_FALLBACK) {
    console.log("[bundle-engine-helper] vendor fallback:", VENDOR_FALLBACK)
  }
} else if (ENGINE_ROOT === ENGINE_ROOT_VENDORED) {
  console.log("[bundle-engine-helper] using vendored helper-app:", ENGINE_ROOT)
} else {
  console.log(
    "[bundle-engine-helper] using monorepo helper-app (vendor missing):",
    ENGINE_ROOT
  )
}
const ENTRY = path.join(__dirname, "engine-runtime-entry.js")

const SHIMS = {
  "~contents": path.join(__dirname, "shims", "contents.js"),
  "~store/resume": path.join(__dirname, "shims", "resume-store.js"),
  // Parcel linker runtime — lives under scripts/, not helper-runtime/@parcel
  "@parcel/transformer-js/src/esmodule-helpers.js": path.join(
    __dirname,
    "shims",
    "esmodule-helpers.js"
  ),
  // lodash-es / ahooks / nanoid resolve from node_modules via npm-vendor-cache
  "libphonenumber-js": path.join(__dirname, "shims", "libphonenumber.js"),
  "libphonenumber-js/core": path.join(__dirname, "shims", "libphonenumber.js"),
  "libphonenumber-js/min": path.join(__dirname, "shims", "libphonenumber.js"),
  "libphonenumber-js/max": path.join(__dirname, "shims", "libphonenumber.js"),
  dayjs: path.join(__dirname, "shims", "dayjs.js"),
  "dayjs/plugin/customParseFormat": path.join(
    __dirname,
    "shims",
    "dayjs-custom-parse.js"
  ),
  "dayjs/plugin/relativeTime": path.join(__dirname, "shims", "dayjs.js"),
  "~node_modules/dayjs": path.join(__dirname, "shims", "dayjs.js")
}

/** Specs that are not real npm packages for this bundle (keep stubbed). */
const EMPTY_STUB_SPECIFIERS = new Set([
  "console"
])

function read(file) {
  return fs.readFileSync(file, "utf8")
}

function stripHeaderComment(source) {
  return source.replace(/^\/\*\*[\s\S]*?\*\/\s*/, "")
}

function parseDependencyMap(source) {
  const map = new Map()
  const block = source.match(/Dependencies:\s*([\s\S]*?)\*\//)
  if (!block) return map
  const re = /^\s*\*\s+(.+?)\s+->\s+\S+\s+=>\s+(.+?)\s*$/gm
  let m
  while ((m = re.exec(block[1]))) {
    map.set(m[1].trim(), m[2].trim())
  }
  return map
}

function candidatePaths(resolvedFromHeader, specifier, fromFile) {
  const out = []
  if (SHIMS[specifier]) {
    out.push(SHIMS[specifier])
    return out
  }

  const push = (p) => {
    if (p) out.push(path.normalize(p))
  }

  const pushUnder = (root, rel) => {
    if (!root || !rel) return
    push(path.join(root, rel))
  }

  if (resolvedFromHeader) {
    push(path.join(ENGINE_ROOT, resolvedFromHeader))
    pushUnder(VENDOR_FALLBACK, resolvedFromHeader)
    if (resolvedFromHeader.startsWith("_tilde_node_modules/")) {
      push(path.join(ENGINE_ROOT, resolvedFromHeader))
      pushUnder(VENDOR_FALLBACK, resolvedFromHeader)
    }
    if (resolvedFromHeader.startsWith("_tilde_")) {
      push(
        path.join(
          ENGINE_ROOT,
          "src",
          resolvedFromHeader.replace(/^_tilde_/, "").replace(/\\/g, "/")
        )
      )
      // Keep original _tilde_* layout used for node_modules extracts
      push(path.join(ENGINE_ROOT, resolvedFromHeader.replace(/\\/g, "/")))
      pushUnder(VENDOR_FALLBACK, resolvedFromHeader.replace(/\\/g, "/"))
    }
    if (resolvedFromHeader.startsWith("_dotdot_/")) {
      // ../ relative debris — try under engine root without prefix
      push(
        path.join(
          ENGINE_ROOT,
          resolvedFromHeader.replace(/^(_dotdot_\/)+/, "")
        )
      )
      pushUnder(
        VENDOR_FALLBACK,
        resolvedFromHeader.replace(/^(_dotdot_\/)+/, "")
      )
    }
    if (resolvedFromHeader.startsWith("url_/")) {
      push(path.join(ENGINE_ROOT, resolvedFromHeader))
      pushUnder(VENDOR_FALLBACK, resolvedFromHeader)
    }
  }

  if (specifier.startsWith("~")) {
    const base = path.join(ENGINE_ROOT, "src", specifier.slice(1))
    push(base + ".ts")
    push(base + ".js")
    push(path.join(base, "index.ts"))
    push(path.join(base, "index.js"))
  } else if (specifier.startsWith("./") || specifier.startsWith("../")) {
    const base = path.dirname(fromFile)
    const joined = path.resolve(base, specifier)
    // Prefer TypeScript when both exist
    if (joined.endsWith(".js")) {
      push(joined.slice(0, -3) + ".ts")
      push(joined)
    } else if (joined.endsWith(".ts")) {
      push(joined)
      push(joined.slice(0, -3) + ".js")
    } else {
      push(joined + ".ts")
      push(joined + ".js")
      push(path.join(joined, "index.ts"))
      push(path.join(joined, "index.js"))
      push(joined)
    }
  } else if (specifier.startsWith("url:")) {
    // ignore — empty stub
  } else if (specifier.startsWith("@parcel/")) {
    const parts = specifier.split("/")
    const joined = path.join(ENGINE_ROOT, ...parts)
    push(joined.endsWith(".js") ? joined : joined + ".js")
    if (VENDOR_FALLBACK) {
      const vJoined = path.join(VENDOR_FALLBACK, ...parts)
      push(vJoined.endsWith(".js") ? vJoined : vJoined + ".js")
    }
  } else {
    const joined = path.join(ENGINE_ROOT, ...specifier.split("/"))
    push(joined.endsWith(".js") ? joined : joined + ".ts")
    push(joined.endsWith(".js") ? joined : joined + ".js")
    push(path.join(ENGINE_ROOT, specifier + ".ts"))
    push(path.join(ENGINE_ROOT, specifier + ".js"))
    push(path.join(ENGINE_ROOT, specifier, "index.ts"))
    push(path.join(ENGINE_ROOT, specifier, "index.js"))
    if (VENDOR_FALLBACK) {
      const vJoined = path.join(VENDOR_FALLBACK, ...specifier.split("/"))
      push(vJoined.endsWith(".js") ? vJoined : vJoined + ".js")
      push(path.join(VENDOR_FALLBACK, specifier + ".js"))
      push(path.join(VENDOR_FALLBACK, specifier, "index.js"))
    }
  }

  return out
}

function resolveFile(specifier, fromFile, depMap) {
  if (SHIMS[specifier]) return SHIMS[specifier]
  if (EMPTY_STUB_SPECIFIERS.has(specifier)) return null

  // Prefer npm packages over helper-runtime root facades / dep-map paths
  if (isNpmVendorSpec(specifier)) {
    try {
      return ensureNpmVendorModule(normalizeNpmSpec(specifier))
    } catch (err) {
      console.warn(
        `[bundle-engine-helper] npm resolve failed for ${specifier}:`,
        err.message
      )
    }
  }

  const resolved = depMap?.get(specifier)

  // data-base64 / url: — prefer header path (real inline asset module).
  // Only stub when the dump module is missing.
  if (specifier.startsWith("url:") || specifier.startsWith("data-base64:")) {
    if (resolved) {
      for (const candidate of candidatePaths(resolved, specifier, fromFile)) {
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
          return candidate
        }
        if (!candidate.endsWith(".js") && fs.existsSync(candidate + ".js")) {
          return candidate + ".js"
        }
      }
    }
    return null
  }

  for (const candidate of candidatePaths(resolved, specifier, fromFile)) {
    // Prefer helper-runtime .ts over missing/local .js or vendored .js
    if (candidate.endsWith(".js") || candidate.endsWith(".ts")) {
      const asTs = candidate.replace(/\.tsx?$/i, ".ts").replace(/\.js$/i, ".ts")
      // Direct .ts next to candidate
      if (asTs.startsWith(ENGINE_ROOT) && fs.existsSync(asTs)) {
        return asTs
      }
      // Vendored .js → same relative path under ENGINE_ROOT as .ts
      if (
        VENDOR_FALLBACK &&
        candidate.startsWith(VENDOR_FALLBACK) &&
        candidate.endsWith(".js")
      ) {
        const rel = path.relative(VENDOR_FALLBACK, candidate)
        const engineTs = path.join(ENGINE_ROOT, rel.replace(/\.js$/i, ".ts"))
        if (fs.existsSync(engineTs)) return engineTs
      }
      // Dep-map resolved path as .ts under engine
      if (resolved?.endsWith(".js")) {
        const engineTs = path.join(ENGINE_ROOT, resolved.replace(/\.js$/i, ".ts"))
        if (fs.existsSync(engineTs)) return engineTs
      }
    }

    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate
    }
    if (
      !candidate.endsWith(".js") &&
      !candidate.endsWith(".ts") &&
      fs.existsSync(candidate + ".ts")
    ) {
      return candidate + ".ts"
    }
    if (!candidate.endsWith(".js") && fs.existsSync(candidate + ".js")) {
      if (fs.existsSync(candidate + ".ts")) return candidate + ".ts"
      return candidate + ".js"
    }
    if (candidate.endsWith(".js")) {
      const tsAlt = candidate.slice(0, -3) + ".ts"
      if (fs.existsSync(tsAlt)) return tsAlt
    }
  }

  // hashed vendor at engine root from dep map only
  if (resolved) {
    const rootFile = path.join(ENGINE_ROOT, path.basename(resolved))
    if (fs.existsSync(rootFile)) return rootFile
    if (VENDOR_FALLBACK) {
      const vRoot = path.join(VENDOR_FALLBACK, path.basename(resolved))
      if (fs.existsSync(vRoot)) return vRoot
      const vRel = path.join(VENDOR_FALLBACK, resolved)
      if (fs.existsSync(vRel) && fs.statSync(vRel).isFile()) return vRel
    }
  }

  return undefined
}

function collectRequires(source, depMap) {
  // Prefer explicit Parcel dependency headers when present — avoids false
  // positives from shadowed local `e("...")` calls inside minified helpers.
  if (depMap && depMap.size > 0) {
    return [...depMap.keys()]
  }
  const ids = new Set()
  const re = /\be\(\s*["']([^"']+)["']\s*\)/g
  let m
  while ((m = re.exec(source))) ids.add(m[1])
  return [...ids]
}

function isCjsModule(source) {
  const body = stripHeaderComment(source)
  return (
    /^\s*t\.exports\s*=/m.test(body) ||
    /^\s*module\.exports\s*=/m.test(body) ||
    /\bt\.exports\s*=/.test(body.slice(0, 200))
  )
}

/** @type {Map<string, { id: string, file: string, source: string, deps: string[], cjs: boolean }>} */
const modules = new Map()
/** @type {Map<string, string>} file -> module id */
const fileToId = new Map()
let nextId = 1
const missing = []
const stubIds = new Map()

function ensureStub(specifier) {
  if (stubIds.has(specifier)) return stubIds.get(specifier)
  const id = `stub_${nextId++}`
  stubIds.set(specifier, id)
  modules.set(id, {
    id,
    file: `stub:${specifier}`,
    source: `r.default = null;`,
    deps: [],
    cjs: false,
    isStub: true,
    stubName: specifier
  })
  return id
}

function addModule(file) {
  const abs = path.normalize(file)
  if (fileToId.has(abs)) return fileToId.get(abs)

  const id = `m${nextId++}`
  fileToId.set(abs, id)

  const raw = read(abs)
  let body
  let depMap
  if (isTypeScriptFile(abs)) {
    body = compileTsToParcelSource(raw, abs)
    depMap = new Map() // force e() scan of compiled body
  } else {
    depMap = parseDependencyMap(raw)
    body = stripHeaderComment(raw)
  }
  const requireIds = collectRequires(body, depMap.size ? depMap : null)
  const deps = []

  // placeholder first to allow cycles
  modules.set(id, {
    id,
    file: abs,
    source: body,
    deps,
    cjs: isTypeScriptFile(abs) ? false : isCjsModule(raw),
    depMap,
  })

  for (const spec of requireIds) {
    // Skip parcel helpers — injected by compile, resolved as real module
    const resolved = resolveFile(spec, abs, depMap.size ? depMap : null)
    if (resolved === null || EMPTY_STUB_SPECIFIERS.has(spec)) {
      const stubId = ensureStub(spec)
      deps.push({ spec, id: stubId })
      continue
    }
    if (!resolved) {
      missing.push({ from: abs, spec, hint: depMap.get(spec) })
      const stubId = ensureStub(spec)
      deps.push({ spec, id: stubId })
      continue
    }
    const childId = addModule(resolved)
    deps.push({ spec, id: childId })
  }

  return id
}

console.log("[bundle-engine-helper] entry:", ENTRY)
const entryId = addModule(ENTRY)

if (missing.length) {
  const uniq = new Map()
  for (const m of missing) {
    const key = m.spec
    if (!uniq.has(key)) uniq.set(key, m)
  }
  console.warn(
    `[bundle-engine-helper] ${uniq.size} unresolved specs (stubbed):`
  )
  for (const [spec, m] of [...uniq.entries()].slice(0, 40)) {
    console.warn(`  - ${spec}  (from ${path.relative(REPO_ROOT, m.from)}${m.hint ? " => " + m.hint : ""})`)
  }
  if (uniq.size > 40) console.warn(`  … +${uniq.size - 40} more`)
}

// Emit bundle
const lines = []
lines.push(`/**
 * Qyvarex engine helper runtime — HELPER_RUNTIME=${USE_SRC_TREE ? "ts" : "parcel"}
 * Generated by scripts/bundle-engine-helper.mjs — do not edit by hand.
 */
;(() => {
  if (globalThis.__qyvarexEngineHelperLoaded) {
    void globalThis.bootstrapJobrightHelperRuntime?.()
    return
  }
  globalThis.__qyvarexEngineHelperLoaded = true

  const __modules = Object.create(null)
  const __cache = Object.create(null)

  function __require(id) {
    if (__cache[id]) return __cache[id].exports
    const mod = __modules[id]
    if (!mod) throw new Error("[qyvarex-engine] missing module " + id)
    const module = { exports: {} }
    const exports = module.exports
    __cache[id] = module
    const localRequire = (spec) => {
      const child = mod.map[spec]
      if (!child) throw new Error("[qyvarex-engine] " + id + " cannot require " + spec)
      return __require(child)
    }
    try {
      if (mod.cjs) {
        mod.factory(localRequire, module)
      } else {
        mod.factory(localRequire, exports)
        if (!module.exports || module.exports === exports) {
          module.exports = exports
        }
      }
    } catch (err) {
      delete __cache[id]
      throw err
    }
    return module.exports
  }
`)

for (const mod of modules.values()) {
  const mapEntries = (mod.deps || [])
    .map((d) => `    ${JSON.stringify(d.spec)}: ${JSON.stringify(d.id)}`)
    .join(",\n")

  if (mod.isStub) {
    lines.push(`  __modules[${JSON.stringify(mod.id)}] = {
    cjs: false,
    map: {},
    factory: function (e, r) {
      r.default = null
      // stub: ${mod.stubName}
    }
  }`)
    continue
  }

  lines.push(`  __modules[${JSON.stringify(mod.id)}] = {
    cjs: ${mod.cjs ? "true" : "false"},
    map: {
${mapEntries}
    },
    factory: function (e, ${mod.cjs ? "t" : "r"}) {
${mod.source}
    }
  }`)
}

lines.push(`
  const __entry = __require(${JSON.stringify(entryId)})
  const boot =
    __entry?.bootstrapJobrightHelperRuntime ||
    __entry?.default?.bootstrapJobrightHelperRuntime
  if (typeof boot === "function") {
    globalThis.bootstrapJobrightHelperRuntime = boot
    globalThis.openJobrightHelperFromExtensionIcon = boot
  } else {
    console.error("[qyvarex-engine] entry missing bootstrapJobrightHelperRuntime", __entry)
  }
})();
`)

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, lines.join("\n"), "utf8")
const sizeKb = Math.round(fs.statSync(OUT).size / 1024)
console.log(
  `[bundle-engine-helper] wrote ${path.relative(EXT_ROOT, OUT)} (${sizeKb} KB, ${modules.size} modules)`
)

// Guard: default ts/parcel bundles must be the full ATS engine, never Phase-1.
const outText = fs.readFileSync(OUT, "utf8")
if (USE_SRC_TREE || RUNTIME === "parcel") {
  if (sizeKb < 500) {
    console.error(
      `[bundle-engine-helper] FATAL: helper-app.js only ${sizeKb} KB — looks like Phase-1, not the ported ATS engine`
    )
    process.exit(1)
  }
  if (!/greenhouse\s*:/.test(outText) && !/Greenhouse/.test(outText)) {
    console.error(
      "[bundle-engine-helper] FATAL: bundled helper missing Greenhouse site filler"
    )
    process.exit(1)
  }
  if (/__jobrightForkHelperPhase1Loaded/.test(outText)) {
    console.error(
      "[bundle-engine-helper] FATAL: Phase-1 marker found in ts/parcel bundle"
    )
    process.exit(1)
  }
}

// Keep unpacked builds in sync when present (avoids stale Phase-1 in chrome-mv3-prod)
for (const dir of ["chrome-mv3-dev", "chrome-mv3-prod"]) {
  const destDir = path.join(EXT_ROOT, "build", dir, "assets")
  if (!fs.existsSync(destDir)) continue
  const dest = path.join(destDir, "helper-app.js")
  fs.copyFileSync(OUT, dest)
  console.log(`[bundle-engine-helper] synced → build/${dir}/assets/helper-app.js`)
}
