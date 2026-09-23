/**
 * Convert helper-runtime/src/components Parcel JS → readable TypeScript.
 *
 * Usage:
 *   node scripts/convert-components-to-ts.mjs
 *   node scripts/convert-components-to-ts.mjs path/to/file.js …
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parcelSpecToEsm as baseParcelSpecToEsm } from "./convert-site-parcel-to-ts.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXT = path.resolve(__dirname, "..")
const COMPONENTS = path.join(EXT, "helper-runtime/src/components")
const SRC = path.join(EXT, "helper-runtime/src")

function stripHeader(source) {
  return source.replace(/^\/\*\*[\s\S]*?\*\/\s*/, "")
}

function parcelSpecToEsm(spec, fromFile) {
  if (spec.includes("@parcel/transformer-js")) return null
  if (spec.startsWith("data-base64:~assets/")) {
    // Inline asset modules under src/assets/inline/...
    const rest = spec.slice("data-base64:~assets/".length) // images/close.svg
    const abs = path.join(SRC, "assets/inline", rest + ".js")
    const absTs = path.join(SRC, "assets/inline", rest + ".ts")
    let target = fs.existsSync(absTs) ? absTs : abs
    if (!fs.existsSync(target)) {
      // keep as absolute-ish relative path for bundler resolve later
      target = path.join(SRC, "assets/inline", rest + ".js")
    }
    let rel = path.relative(path.dirname(fromFile), target).replace(/\\/g, "/")
    if (!rel.startsWith(".")) rel = "./" + rel
    return rel
  }
  if (spec.startsWith("~")) {
    const rest = spec.slice(1)
    let abs = path.join(SRC, rest)
    const candidates = [
      abs + ".ts",
      abs + ".js",
      path.join(abs, "index.ts"),
      path.join(abs, "index.js"),
    ]
    const hit = candidates.find((p) => fs.existsSync(p)) || abs + ".ts"
    let rel = path.relative(path.dirname(fromFile), hit).replace(/\\/g, "/")
    if (!rel.startsWith(".")) rel = "./" + rel
    return rel
  }
  return baseParcelSpecToEsm(spec, fromFile)
}

function parseRequireBindings(text) {
  const map = new Map()
  const re = /([A-Za-z_$][\w$]*)\s*=\s*e\(\s*["']([^"']+)["']\s*\)/g
  let m
  while ((m = re.exec(text))) {
    map.set(m[1], m[2])
  }
  return map
}

function parseNamedExports(source) {
  const exports = []
  const re =
    /\w+\.export\(\s*r\s*,\s*["']([^"']+)["']\s*,\s*\(\)\s*=>\s*([A-Za-z_$][\w$.]*)\s*\)/g
  let m
  while ((m = re.exec(source))) {
    exports.push({ name: m[1], local: m[2] })
  }
  return exports
}

function pascalFromFilename(jsPath) {
  const base = path.basename(jsPath, ".js")
  // kebab/snake → Pascal for default export rename when sensible
  if (/^[A-Z]/.test(base)) return base
  return base
    .split(/[-_]/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("")
}

export function convertComponentsFile(jsPath) {
  const raw = fs.readFileSync(jsPath, "utf8")
  let body = stripHeader(raw)

  const namedExports = parseNamedExports(body)
  const requireMap = parseRequireBindings(body)

  // Drop Parcel helpers / export wiring
  body = body.replace(
    /e\(\s*["']@parcel\/transformer-js\/src\/esmodule-helpers\.js["']\s*\)\.defineInteropFlag\(\s*r\s*\)\s*;?/g,
    "",
  )
  body = body.replace(
    /(?:var|let|const)\s+\w+\s*=\s*e\(\s*["']@parcel\/transformer-js\/src\/esmodule-helpers\.js["']\s*\)\s*;?/g,
    "",
  )
  body = body.replace(/\w+\.defineInteropFlag\(\s*r\s*\)\s*,?/g, "")
  body = body.replace(
    /\w+\s*\n?\s*\.export\(\s*r\s*,\s*["'][^"']+["']\s*,\s*\(\)\s*=>\s*[A-Za-z_$][\w$.]*\s*\)\s*,?/g,
    "",
  )

  // interopDefault before removing requires: local = helpers.interopDefault(inner)
  const interop = []
  body = body.replace(
    /(?:var|let|const)?\s*([A-Za-z_$][\w$]*)\s*=\s*\w+\.interopDefault\(\s*([A-Za-z_$][\w$]*)\s*\)\s*,?;?/g,
    (_m, local, inner) => {
      interop.push({ local, inner })
      return `\n/*__INTEROP__${local}__${inner}__*/\n`
    },
  )

  // Remove all e() require bindings (whole-file; safe enough for Parcel dumps)
  body = body.replace(
    /(?:var|let|const)\s+([A-Za-z_$][\w$]*(?:\s*=\s*e\(\s*["'][^"']+["']\s*\)\s*,\s*)*[A-Za-z_$][\w$]*\s*=\s*e\(\s*["'][^"']+["']\s*\))\s*;?/g,
    (stmt) => {
      for (const [local, spec] of parseRequireBindings(stmt)) {
        requireMap.set(local, spec)
      }
      return "\n"
    },
  )
  body = body.replace(
    /(?:^|[,\s;])([A-Za-z_$][\w$]*)\s*=\s*e\(\s*["']([^"']+)["']\s*\)\s*,?/gm,
    (_m, local, spec) => {
      requireMap.set(local, spec)
      return "\n"
    },
  )

  // Restore interop as default wrappers
  for (const { local, inner } of interop) {
    body = body.replace(
      `/*__INTEROP__${local}__${inner}__*/`,
      `const ${local} = { default: ${inner} }`,
    )
  }

  // (0, ns.fn) → ns.fn ; booleans
  body = body.replace(/\(0,\s*([A-Za-z_$][\w$]*)\.(\w+)\)/g, "$1.$2")
  body = body.replace(/!0\b/g, "true").replace(/!1\b/g, "false")
  body = body.replace(/\bvoid 0\b/g, "undefined")

  // Detect default export local
  let defaultLocal = null
  for (const { name, local } of namedExports) {
    if (name === "default") defaultLocal = local
  }
  const defaultAssign = body.match(/\br\.default\s*=\s*([A-Za-z_$][\w$]*)/)
  if (defaultAssign) defaultLocal = defaultAssign[1]
  body = body.replace(/\br\.default\s*=\s*[A-Za-z_$][\w$]*\s*;?/g, "")

  // Rename default local to PascalCase filename when it's a short mangled id
  const fileName = pascalFromFilename(jsPath)
  if (
    defaultLocal &&
    defaultLocal !== fileName &&
    /^[a-z]$|^[a-z]{1,3}$/.test(defaultLocal) === false &&
    defaultLocal.length <= 3 &&
    /^[A-Za-z]$/.test(fileName) === false
  ) {
    // rename short locals like i, z to BasicButton
    const from = defaultLocal
    const to = fileName
    // Only rename declaration binding and export — careful with single letters
    if (from.length <= 2) {
      body = body.replace(
        new RegExp(`\\blet\\s+${from}\\b`),
        `let ${to}`,
      )
      body = body.replace(
        new RegExp(`\\bconst\\s+${from}\\b`),
        `const ${to}`,
      )
      body = body.replace(
        new RegExp(`\\bfunction\\s+${from}\\b`),
        `function ${to}`,
      )
      // Don't globally replace single-letter — too dangerous; use export alias
      defaultLocal = from
      // keep mangled name, export as default with fileName alias below
    } else {
      body = body.replace(new RegExp(`\\b${from}\\b`, "g"), to)
      defaultLocal = to
    }
  }

  // Named export renames for multi-char classes
  const classRenames = []
  for (const { name, local } of namedExports) {
    if (
      name !== "default" &&
      /^[A-Z][a-zA-Z]+$/.test(name) &&
      local !== name &&
      local.length > 1 &&
      new RegExp(`\\b(?:class|function|const|let)\\s+${local}\\b`).test(body)
    ) {
      body = body.replace(
        new RegExp(`\\b((?:class|function|const|let)\\s+)${local}\\b`),
        `$1${name}`,
      )
      body = body.replace(new RegExp(`\\b${local}\\b`, "g"), name)
      classRenames.push({ from: local, to: name })
    }
  }

  // Prefer `export` on matching declarations
  const trailingExports = []
  for (const { name, local } of namedExports) {
    if (name === "default") continue
    const resolved =
      classRenames.find((r) => r.from === local)?.to || local
    if (resolved.includes(".")) {
      trailingExports.push(`${resolved} as ${name}`)
      continue
    }
    if (name === resolved) {
      const decl = new RegExp(
        `^(async\\s+)?(function|class|const|let|var)\\s+${resolved}\\b`,
        "m",
      )
      if (decl.test(body)) {
        body = body.replace(decl, `export $1$2 ${resolved}`)
      } else {
        trailingExports.push(name)
      }
    } else {
      trailingExports.push(`${resolved} as ${name}`)
    }
  }

  // Clean debris
  body = body.replace(/(?:var|let|const)\s*;/g, "")
  body = body.replace(/^[,\s;]+/gm, "")
  body = body.replace(/\n{3,}/g, "\n\n")
  body = body.trim() + "\n"

  // Imports — prefer named where we know common packages
  const importLines = []
  const seen = new Set()
  for (const [local, spec] of requireMap) {
    if (spec.includes("@parcel/transformer-js")) continue
    const esm = parcelSpecToEsm(spec, jsPath)
    if (!esm || seen.has(local)) continue
    seen.add(local)
    if (spec === "react/jsx-runtime") {
      importLines.push(`import * as ${local} from "react/jsx-runtime"`)
    } else if (spec === "react") {
      importLines.push(`import * as ${local} from "react"`)
    } else if (spec === "antd") {
      importLines.push(`import * as ${local} from "antd"`)
    } else {
      importLines.push(`import * as ${local} from "${esm}"`)
    }
  }

  const header = `// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (${path.relative(EXT, jsPath).replace(/\\/g, "/")}).
 */
`

  let out = header
  if (importLines.length) {
    out += importLines.join("\n") + "\n\n"
  }
  out += body
  if (trailingExports.length) {
    out += `\nexport { ${trailingExports.join(", ")} }\n`
  }
  if (defaultLocal) {
    // Prefer named export matching filename when possible
    if (
      defaultLocal === fileName ||
      new RegExp(`\\b(?:function|const|let|class)\\s+${fileName}\\b`).test(
        body,
      )
    ) {
      out += `\nexport default ${fileName}\n`
    } else if (defaultLocal.length <= 2) {
      out += `\nexport default ${defaultLocal}\n`
    } else {
      out += `\nexport default ${defaultLocal}\n`
    }
  }

  // Final leftover e( check — leave marker comment if any remain
  if (/\be\(["']/.test(out)) {
    out =
      out.replace(/\be\(["']@parcel[^"']*["']\)\.defineInteropFlag\(r\);?/g, "") +
      ""
  }

  const tsPath = jsPath.replace(/\.js$/, ".ts")
  fs.writeFileSync(tsPath, out, "utf8")
  return tsPath
}

function listComponentJs() {
  const out = []
  function walk(dir) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name)
      if (ent.isDirectory()) walk(p)
      else if (ent.name.endsWith(".js")) out.push(p)
    }
  }
  walk(COMPONENTS)
  return out
}

function main() {
  const args = process.argv.slice(2)
  const files = args.length ? args.map((f) => path.resolve(f)) : listComponentJs()
  let n = 0
  for (const f of files) {
    console.log("[convert]", path.relative(EXT, convertComponentsFile(f)))
    n++
  }
  console.log(`[convert] wrote ${n} TypeScript files`)
}

const isMain =
  process.argv[1] &&
  path.normalize(process.argv[1]) ===
    path.normalize(fileURLToPath(import.meta.url))

if (isMain) main()
