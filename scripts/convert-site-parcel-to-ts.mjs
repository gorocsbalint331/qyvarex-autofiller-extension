/**
 * Convert Parcel-style helper-runtime site JS → readable ESM TypeScript.
 *
 * Usage: node scripts/convert-site-parcel-to-ts.mjs --all-ten
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXT = path.resolve(__dirname, "..")
const SITES = path.join(EXT, "helper-runtime/src/contents/sites")
const SRC = path.join(EXT, "helper-runtime/src")

const TEN = [
  "adobe",
  "adp-myjobs",
  "adp-recruiting",
  "adp-workforcenow",
  "amazon",
  "apple",
  "ashby",
  "avature",
  "bamboohr",
  "brassring",
]

function stripHeader(source) {
  return source.replace(/^\/\*\*[\s\S]*?\*\/\s*/, "")
}

function parcelSpecToEsm(spec, fromFile) {
  if (spec.includes("@parcel/transformer-js")) return null
  if (spec === "@plasmohq/messaging") return "@plasmohq/messaging"
  if (spec === "fuse.js" || spec === "dayjs" || spec.startsWith("dayjs/")) {
    return spec
  }
  if (spec.startsWith("./") || spec.startsWith("../")) {
    // Prefer .ts for local companions
    const base = spec.replace(/\.(js|ts)$/, "")
    // Entry sites/foo.js requiring ./bar → ./foo/bar.ts (Parcel dep-map remap)
    const fromBase = path.basename(fromFile, path.extname(fromFile))
    const fromDirName = path.basename(path.dirname(fromFile))
    const isSiteEntry =
      path.dirname(fromFile) === SITES &&
      !spec.includes("/") &&
      spec.startsWith("./")
    if (isSiteEntry || (path.dirname(fromFile) === SITES && /^\.\/[^./]+$/.test(base))) {
      const companion = path.join(SITES, fromBase, base.slice(2) + ".ts")
      const companionJs = path.join(SITES, fromBase, base.slice(2) + ".js")
      if (fs.existsSync(companion) || fs.existsSync(companionJs) || fs.existsSync(path.join(SITES, fromBase))) {
        return `./${fromBase}/${base.slice(2)}.ts`
      }
    }
    const absTs = path.resolve(path.dirname(fromFile), base + ".ts")
    const absJs = path.resolve(path.dirname(fromFile), base + ".js")
    if (fs.existsSync(absTs) || !fs.existsSync(absJs)) return base + ".ts"
    return base + ".js"
  }
  if (!spec.startsWith("~")) {
    return spec // bare npm
  }

  const rest = spec.slice(1) // e.g. contents/methods/answer
  let abs
  if (rest === "constants") {
    abs = path.join(SRC, "constants.ts")
  } else if (rest === "utils/string") {
    abs = path.join(SRC, "utils/string.ts")
  } else if (rest.startsWith("node_modules/")) {
    return rest.slice("node_modules/".length)
  } else {
    abs = path.join(SRC, rest + ".js")
    const absTs = path.join(SRC, rest + ".ts")
    if (fs.existsSync(absTs)) abs = absTs
  }

  let rel = path.relative(path.dirname(fromFile), abs).replace(/\\/g, "/")
  if (!rel.startsWith(".")) rel = "./" + rel
  return rel
}

/**
 * Extract `local = e("spec")` bindings from a require preamble string.
 */
function parseRequireBindings(preamble) {
  const map = new Map()
  const re = /([A-Za-z_$][\w$]*)\s*=\s*e\(\s*["']([^"']+)["']\s*\)/g
  let m
  while ((m = re.exec(preamble))) {
    map.set(m[1], m[2])
  }
  return map
}

function parseExports(source) {
  const exports = []
  const re =
    /\w+\.export\(\s*r\s*,\s*["']([^"']+)["']\s*,\s*\(\)\s*=>\s*([A-Za-z_$][\w$.]*)\s*\)/g
  let m
  while ((m = re.exec(source))) {
    exports.push({ name: m[1], local: m[2] })
  }
  return exports
}

function convertFile(jsPath) {
  const raw = fs.readFileSync(jsPath, "utf8")
  let body = stripHeader(raw)

  const exports = parseExports(body)

  // Remove all helpers.export / n.export calls (possibly comma-chained / multiline)
  body = body.replace(
    /\w+\s*\n?\s*\.export\(\s*r\s*,\s*["'][^"']+["']\s*,\s*\(\)\s*=>\s*[A-Za-z_$][\w$.]*\s*\)\s*,?/g,
    "",
  )
  body = body.replace(/\w+\s*\n?\s*\.defineInteropFlag\(\s*r\s*\)\s*,?/g, "")

  // Collect and remove every e("...") binding in the file preamble.
  // Strategy: repeatedly remove `var|let|const` declarations that only contain e() assigns,
  // and also remove trailing `, name = e("...")` fragments.
  const requireMap = new Map()

  // First pass: find all e() in the whole file that look like module requires
  // (not inside strings) — at top level only via line-oriented scan of first 30% or until class/function
  const cut = body.search(/\n(?:async\s+)?function\s|\nclass\s|\nexport\s/)
  const headEnd = cut === -1 ? Math.min(body.length, 2500) : cut
  const head = body.slice(0, headEnd)
  const tail = body.slice(headEnd)

  for (const [local, spec] of parseRequireBindings(head)) {
    requireMap.set(local, spec)
  }
  // Also scan for interopDefault leftovers later

  let newHead = head
  // Remove parcel helpers require
  newHead = newHead.replace(
    /(?:var|let|const)\s+\w+\s*=\s*e\(\s*["']@parcel\/transformer-js\/src\/esmodule-helpers\.js["']\s*\)\s*;?/g,
    "",
  )
  // Remove individual e() assignments including multi-decl forms
  newHead = newHead.replace(
    /(?:var|let|const)\s+([A-Za-z_$][\w$]*(?:\s*=\s*e\(\s*["'][^"']+["']\s*\)\s*,\s*)*[A-Za-z_$][\w$]*\s*=\s*e\(\s*["'][^"']+["']\s*\))\s*;?/g,
    (stmt) => {
      for (const [local, spec] of parseRequireBindings(stmt)) {
        requireMap.set(local, spec)
      }
      return "\n"
    },
  )
  // Remove leftover `, x = e("y")` or `x = e("y"),`
  newHead = newHead.replace(
    /(?:^|[,\s])([A-Za-z_$][\w$]*)\s*=\s*e\(\s*["']([^"']+)["']\s*\)\s*,?/gm,
    (_m, local, spec) => {
      requireMap.set(local, spec)
      return "\n"
    },
  )
  // interopDefault: `i = n.interopDefault(o)` → keep as `const i = { default: o }` approx
  // Common pattern: var i = n.interopDefault(o) after o = e("dayjs")
  newHead = newHead.replace(
    /(?:var|let|const)?\s*([A-Za-z_$][\w$]*)\s*=\s*\w+\.interopDefault\(\s*([A-Za-z_$][\w$]*)\s*\)\s*,?;?/g,
    (_m, local, inner) => `\nconst ${local} = { default: ${inner} };\n`,
  )

  // Clean empty var statements and stray commas/semicolons
  newHead = newHead.replace(/(?:var|let|const)\s*;/g, "")
  newHead = newHead.replace(/^[,\s;]+/gm, "")
  newHead = newHead.replace(/\n{3,}/g, "\n\n")

  body = newHead + tail

  // (0, ns.fn) → ns.fn
  body = body.replace(/\(0,\s*([A-Za-z_$][\w$]*)\.(\w+)\)/g, "$1.$2")
  body = body.replace(/!0\b/g, "true").replace(/!1\b/g, "false")
  body = body.replace(/\bvoid 0\b/g, "undefined")

  // BaseFiller
  let baseFillerLocal = null
  for (const [local, spec] of requireMap) {
    if (spec.includes("base-filler")) {
      baseFillerLocal = local
      break
    }
  }
  if (baseFillerLocal) {
    body = body.replace(
      new RegExp(`extends\\s+${baseFillerLocal}\\.BaseFiller\\b`, "g"),
      "extends BaseFiller",
    )
  }

  // Optionally rename multi-char class locals to their export name (avoid
  // single-letter renames — too many false positives in the body).
  const classRenames = []
  for (const { name, local } of exports) {
    if (
      /^[A-Z][a-zA-Z]+$/.test(name) &&
      local !== name &&
      local.length > 1 &&
      new RegExp(`\\bclass\\s+${local}\\b`).test(body)
    ) {
      body = body.replace(new RegExp(`\\bclass\\s+${local}\\b`), `class ${name}`)
      body = body.replace(new RegExp(`\\b${local}\\b`, "g"), name)
      classRenames.push({ from: local, to: name })
    }
  }

  const exportEntries = exports.map(({ name, local }) => {
    const renamed = classRenames.find((r) => r.from === local)
    return { name, local: renamed ? renamed.to : local }
  })

  // Imports
  const importLines = []
  for (const [local, spec] of requireMap) {
    if (spec.includes("@parcel/transformer-js")) continue
    const esm = parcelSpecToEsm(spec, jsPath)
    if (!esm) continue
    if (baseFillerLocal && local === baseFillerLocal) {
      importLines.push(`import { BaseFiller } from "${esm}"`)
    } else {
      importLines.push(`import * as ${local} from "${esm}"`)
    }
  }

  // For re-exports of nested props: export(r, "foo", () => w.foo)
  const simpleExports = []
  const aliasExports = []
  const reExportFrom = []
  for (const { name, local } of exportEntries) {
    if (local.includes(".")) {
      const [ns, prop] = local.split(".")
      const spec = requireMap.get(ns)
      if (spec && prop === name) {
        const esm = parcelSpecToEsm(spec, jsPath)
        if (esm) {
          reExportFrom.push({ name, esm })
          continue
        }
      }
      aliasExports.push(`${local} as ${name}`)
    } else if (name === local) {
      // Prefer export keyword on declaration
      const decl = new RegExp(
        `^(async\\s+)?(function|class|const|let|var)\\s+${local}\\b`,
        "m",
      )
      if (decl.test(body)) {
        body = body.replace(decl, `export $1$2 ${local}`)
      } else {
        simpleExports.push(name)
      }
    } else {
      aliasExports.push(`${local} as ${name}`)
    }
  }

  const header = `// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (${path.relative(EXT, jsPath).replace(/\\/g, "/")}).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
`

  let out = header
  out += importLines.join("\n")
  if (importLines.length) out += "\n\n"
  for (const { name, esm } of reExportFrom) {
    out += `export { ${name} } from "${esm}"\n`
  }
  if (reExportFrom.length) out += "\n"
  out += body.trim() + "\n"
  const trailing = [...simpleExports, ...aliasExports]
  if (trailing.length) {
    out += `\nexport { ${trailing.join(", ")} }\n`
  }

  const tsPath = jsPath.replace(/\.js$/, ".ts")
  fs.writeFileSync(tsPath, out, "utf8")
  return tsPath
}

function filesForSite(site) {
  const out = []
  const entry = path.join(SITES, `${site}.js`)
  if (fs.existsSync(entry)) out.push(entry)
  const dir = path.join(SITES, site)
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith(".js")) out.push(path.join(dir, f))
    }
  }
  return out
}

function main() {
  let sites = process.argv.slice(2).filter((a) => !a.startsWith("-"))
  if (process.argv.includes("--all-ten")) sites = TEN
  if (!sites.length) {
    console.error("Usage: node scripts/convert-site-parcel-to-ts.mjs --all-ten")
    process.exit(1)
  }
  let n = 0
  for (const site of sites) {
    for (const file of filesForSite(site)) {
      console.log("[convert]", path.relative(EXT, convertFile(file)))
      n++
    }
  }
  console.log(`[convert] wrote ${n} TypeScript files`)
}

const isMain =
  process.argv[1] &&
  path.normalize(process.argv[1]) === path.normalize(fileURLToPath(import.meta.url))

if (isMain) main()

export { convertFile, TEN, filesForSite, parcelSpecToEsm }
