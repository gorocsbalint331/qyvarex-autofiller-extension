/**
 * Bundle Jobright helper → assets/helper-app.js (IIFE for Activate inject).
 *
 * Entry: src/helper-entry.ts → bootstrapJobrightHelperRuntime (full Jobright UI).
 *
 * Usage: node build-helper.mjs
 */
import * as esbuild from "esbuild"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXT = __dirname
const SRC = path.join(EXT, "src")
const OUT = path.join(EXT, "assets", "helper-app.js")
const ENTRY = path.join(SRC, "helper-entry.ts")
const SHIMS = path.join(SRC, "helper-shims")
const SITES = path.join(SRC, "contents", "sites")
const ENGINE_NM = path.join(EXT, "..", "engine", "node_modules")
const EXT_NM = path.join(EXT, "node_modules")

const MESSAGING = path.join(SHIMS, "messaging.ts")
const STORAGE_HOOK = path.join(SHIMS, "storage-hook.ts")

const SITE_ENTRIES = new Set(
  fs.existsSync(SITES)
    ? fs
        .readdirSync(SITES)
        .filter((n) => /\.(ts|js)$/.test(n))
        .map((n) => n.replace(/\.(ts|js)$/, ""))
    : [],
)

function tryFile(base) {
  for (const ext of [
    "",
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    "/index.ts",
    "/index.js",
  ]) {
    const p = base.endsWith(ext) && ext !== "" ? base : base + ext
    try {
      if (fs.existsSync(p) && fs.statSync(p).isFile()) return path.normalize(p)
    } catch {
      /* ignore */
    }
  }
  return null
}

/** sites/adobe.ts importing ./answer.ts → sites/adobe/answer.ts */
function resolveSiteCompanion(importer, spec) {
  if (!spec?.startsWith("./") || !importer) return null
  const base = path.basename(importer).replace(/\.(ts|js|tsx)$/i, "")
  const dir = path.basename(path.dirname(importer))
  if (dir !== "sites" || !SITE_ENTRIES.has(base)) return null
  const companion = spec.replace(/^\.\//, "").replace(/\.(ts|js|tsx)$/, "")
  return (
    tryFile(path.join(SITES, base, companion)) ||
    tryFile(path.join(SITES, companion))
  )
}

function resolveImport(args) {
  if (!args.path) return null

  if (args.path === "@plasmohq/messaging") return MESSAGING
  if (
    args.path === "@plasmohq/storage/hook" ||
    args.path === "@plasmohq/storage/hook.js"
  ) {
    return STORAGE_HOOK
  }

  if (args.path.startsWith("url:") || args.path.startsWith("data-base64:")) {
    return { emptyAsset: true, key: args.path }
  }
  if (/\.(less|css)$/i.test(args.path)) {
    return { emptyAsset: true, key: args.path }
  }
  if (/\.(svg|png|jpg|jpeg|gif|woff2?)$/i.test(args.path)) {
    return { emptyBinary: true, key: args.path }
  }

  const companion = resolveSiteCompanion(args.importer, args.path)
  if (companion) return companion

  if (args.path.startsWith("~")) {
    return tryFile(path.join(SRC, args.path.slice(1)))
  }
  return null
}

const helperPlugin = {
  name: "jobright-helper",
  setup(build) {
    // engine/node_modules has its own React; two copies break hooks
    // ("Cannot read properties of null (reading 'useRef')").
    build.onResolve(
      { filter: /^(react|react-dom|scheduler)(\/.*)?$/ },
      async (args) => {
        if (args.pluginData?.reactDedupe) return null
        return build.resolve(args.path, {
          kind: args.kind,
          resolveDir: EXT,
          pluginData: { reactDedupe: true },
        })
      },
    )

    build.onResolve({ filter: /.*/ }, (args) => {
      if (
        args.path &&
        !args.path.startsWith(".") &&
        !args.path.startsWith("~") &&
        !args.path.startsWith("url:") &&
        !args.path.startsWith("data-base64:") &&
        args.path !== "@plasmohq/messaging" &&
        !args.path.startsWith("@plasmohq/storage/hook") &&
        !/\.(less|css|svg|png|jpg|jpeg|gif|woff2?)$/i.test(args.path)
      ) {
        return null
      }

      const resolved = resolveImport(args)
      if (!resolved) return null
      if (resolved.emptyAsset) {
        return { path: resolved.key, namespace: "helper-css" }
      }
      if (resolved.emptyBinary) {
        return { path: resolved.key, namespace: "helper-empty" }
      }
      return { path: resolved }
    })

    // url:/css imports → empty CSS string (avoid data: fetch under page CSP)
    build.onLoad({ filter: /.*/, namespace: "helper-css" }, () => ({
      contents: 'export default ""',
      loader: "js",
    }))
    build.onLoad({ filter: /.*/, namespace: "helper-empty" }, () => ({
      contents: 'export default ""',
      loader: "js",
    }))
  },
}

async function syncToBuildDirs() {
  for (const dir of ["chrome-mv3-dev", "chrome-mv3-prod"]) {
    const destDir = path.join(EXT, "build", dir, "assets")
    if (!fs.existsSync(path.join(EXT, "build", dir))) continue
    fs.mkdirSync(destDir, { recursive: true })
    fs.copyFileSync(OUT, path.join(destDir, "helper-app.js"))
    console.log(`[build-helper] synced → build/${dir}/assets/helper-app.js`)
  }
}

// src/ is also Plasmo's --src-path: any top-level file in src/contents/ (or
// src/contents.ts) becomes an extra <all_urls> content script.
function assertNoStrayContentScripts() {
  const allowed = new Set(["bootstrap.ts"])
  const contentsDir = path.join(SRC, "contents")
  const stray = fs
    .readdirSync(contentsDir, { withFileTypes: true })
    .filter((e) => e.isFile() && /\.(tsx?|jsx?)$/.test(e.name) && !allowed.has(e.name))
    .map((e) => `src/contents/${e.name}`)
  for (const ext of ["ts", "tsx", "js", "jsx"]) {
    if (fs.existsSync(path.join(SRC, `contents.${ext}`))) stray.push(`src/contents.${ext}`)
  }
  if (stray.length) {
    console.error(
      `[build-helper] Plasmo would register these as content scripts — move them into a subfolder:\n  ${stray.join("\n  ")}`,
    )
    process.exit(1)
  }
}

async function main() {
  if (!fs.existsSync(ENTRY)) {
    console.error("[build-helper] missing entry", ENTRY)
    process.exit(1)
  }
  assertNoStrayContentScripts()

  const nodePaths = [EXT_NM]
  if (fs.existsSync(ENGINE_NM)) nodePaths.push(ENGINE_NM)
  fs.mkdirSync(path.dirname(OUT), { recursive: true })

  const result = await esbuild.build({
    absWorkingDir: EXT,
    entryPoints: [ENTRY],
    outfile: OUT,
    bundle: true,
    format: "iife",
    platform: "browser",
    target: "es2020",
    jsx: "automatic",
    sourcemap: false,
    logLevel: "error",
    legalComments: "none",
    // The bundle may be executed more than once per frame (content-script inject,
    // popup direct-inject). A second copy would shadow the live one's globals
    // while its own UI never mounts, so skip unless the prior copy is dead
    // (extension reloaded → chrome.runtime.id is gone in its context).
    banner: {
      js: 'if (!(typeof globalThis.__jobrightHelperBundleAlive === "function" && globalThis.__jobrightHelperBundleAlive())) {\nglobalThis.__jobrightHelperBundleAlive = (function (runtime) { return function () { try { return !!(runtime && runtime.id) } catch (e) { return false } } })(globalThis.chrome && chrome.runtime);',
    },
    footer: { js: "}" },
    define: { "process.env.NODE_ENV": '"production"' },
    loader: {
      ".ts": "ts",
      ".tsx": "tsx",
      ".js": "jsx",
      ".jsx": "jsx",
      ".json": "json",
    },
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    nodePaths,
    plugins: [helperPlugin],
    mainFields: ["browser", "module", "main"],
    conditions: ["import", "browser", "default"],
  })

  const missingImports = result.warnings.filter(
    (w) =>
      w.id === "import-is-undefined" &&
      /^src[\\/]/.test(w.location?.file || ""),
  )
  if (missingImports.length) {
    console.warn(
      `[build-helper] ${missingImports.length} import(s) in src/ resolve to undefined (runtime "is not a function" risk):`,
    )
    for (const w of missingImports) {
      console.warn(`  ${w.location.file}:${w.location.line}  ${w.text}`)
    }
  }

  const code = fs.readFileSync(OUT, "utf8")
  // Parcel-extracted assets used minified `t.exports`; esbuild's __commonJS
  // wrapper does not bind `t`, which throws ReferenceError at runtime.
  const fixed = code.replace(
    /(\n\s*)t\.exports\s*=/g,
    "$1module.exports =",
  )
  if (fixed !== code) {
    fs.writeFileSync(OUT, fixed)
    console.log(
      "[build-helper] rewrote Parcel t.exports → module.exports in bundle",
    )
  }
  const outCode = fixed
  if (/^\s*export\s+/m.test(outCode) || /^\s*import\s+/m.test(outCode)) {
    console.error(
      "[build-helper] output still contains top-level import/export",
    )
    process.exit(1)
  }
  if (!outCode.includes("bootstrapJobrightHelperRuntime")) {
    console.error(
      "[build-helper] bundle missing bootstrapJobrightHelperRuntime",
    )
    process.exit(1)
  }
  if (/\bt\.exports\s*=/.test(outCode)) {
    console.error("[build-helper] bundle still contains t.exports")
    process.exit(1)
  }
  if (/^\s*\/\/ \.\.\/engine\/node_modules\/(react|react-dom|scheduler)\//m.test(outCode)) {
    console.error("[build-helper] bundle contains a second copy of React from engine/node_modules")
    process.exit(1)
  }
  // Parcel module bodies use an unbound `e(...)` require and `r` exports object.
  if (/\be\("@parcel\/transformer-js\/src\/esmodule-helpers\.js"\)/.test(outCode)) {
    console.error(
      "[build-helper] bundle contains raw Parcel module code (e(\"@parcel/...\")) — convert that source file to ESM",
    )
    process.exit(1)
  }

  console.log(
    `[build-helper] wrote assets/helper-app.js (${(fs.statSync(OUT).size / 1024).toFixed(0)} KB) [Jobright UI]`,
  )
  await syncToBuildDirs()
}

main().catch((err) => {
  console.error("[build-helper] failed:", err?.message || err)
  if (err?.errors) {
    for (const e of err.errors.slice(0, 50)) {
      console.error(
        " ",
        e.text,
        e.location?.file || "",
        e.location?.line || "",
      )
    }
  }
  process.exit(1)
})
