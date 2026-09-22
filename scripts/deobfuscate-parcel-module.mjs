/**
 * AST pretty-print + export-aware local rename for Parcel helper-app modules.
 *
 * - Preserves leading Parcel header comment
 * - Renames short locals bound to helpers.export(r, "Name", () => local)
 * - Renames short import bindings from e("…") path heuristics
 * - Writes pretty output via @babel/generator
 *
 * Usage:
 *   node extension/scripts/deobfuscate-parcel-module.mjs file.js [--write]
 *   node extension/scripts/deobfuscate-parcel-module.mjs --batch methods [--write]
 *   node extension/scripts/deobfuscate-parcel-module.mjs --batch paycom [--write]
 */
import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"

const require = createRequire(import.meta.url)
const parser = require("@babel/parser")
const generate = require("@babel/generator").default
const t = require("@babel/types")
const traverse = require("@babel/traverse").default

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, "../..")
const HELPER = path.join(REPO_ROOT, "engine", "helper-app")
const ORACLE = path.join(REPO_ROOT, "engine", "helper-app-src")

const WRITE = process.argv.includes("--write")
const BATCH = (() => {
  const i = process.argv.indexOf("--batch")
  return i >= 0 ? process.argv[i + 1] : null
})()

function splitHeader(source) {
  const m = source.match(/^(\/\*\*[\s\S]*?\*\/)\s*/)
  if (!m) return { header: "", body: source }
  return { header: m[1] + "\n\n", body: source.slice(m[0].length) }
}

function sanitizeIdent(name) {
  let s = String(name).replace(/[^a-zA-Z0-9_$]/g, "_")
  if (!/^[a-zA-Z_$]/.test(s)) s = "_" + s
  return s
}

function bindingFromSpecifier(spec) {
  const clean = spec
    .replace(/^~/, "")
    .replace(/^@parcel\/transformer-js\/src\//, "parcel_")
    .replace(/^\.\//, "")
    .replace(/\.(js|mjs|cjs|ts|tsx)$/i, "")
  const parts = clean.split("/").filter(Boolean)
  const last = parts[parts.length - 1] || "mod"
  const prev = parts[parts.length - 2]
  if (last === "index" && prev) return sanitizeIdent(prev)
  if (last === "esmodule-helpers") return "helpers"
  // avoid collisions like dom from core/dom and methods - use last segment
  return sanitizeIdent(last.replace(/-([a-z])/g, (_, c) => c.toUpperCase()))
}

function collectExportRenames(ast) {
  /** @type {Map<string,string>} oldLocal → exportName */
  const map = new Map()
  traverse(ast, {
    CallExpression(path) {
      const { node } = path
      // *.export(r, "Name", () => ident)  or  *.export(r, "Name", () => (0, mod.fn))
      if (
        !t.isMemberExpression(node.callee) ||
        !t.isIdentifier(node.callee.property, { name: "export" })
      ) {
        return
      }
      if (node.arguments.length < 3) return
      const nameArg = node.arguments[1]
      const fnArg = node.arguments[2]
      if (!t.isStringLiteral(nameArg)) return
      const exportName = nameArg.value
      if (!t.isArrowFunctionExpression(fnArg) && !t.isFunctionExpression(fnArg)) {
        return
      }
      const body = fnArg.body
      if (t.isIdentifier(body)) {
        map.set(body.name, exportName)
      } else if (
        t.isCallExpression(body) &&
        t.isIdentifier(body.callee) === false &&
        t.isSequenceExpression?.(body.callee)
      ) {
        // skip (0, x.y) re-exports — already named
      }
    }
  })
  return map
}

function collectImportRenames(ast) {
  /** @type {Map<string,string>} */
  const map = new Map()
  const used = new Set()

  traverse(ast, {
    VariableDeclarator(path) {
      const { id, init } = path.node
      if (!t.isIdentifier(id)) return
      if (!t.isCallExpression(init)) return
      if (!t.isIdentifier(init.callee, { name: "e" })) return
      if (init.arguments.length !== 1 || !t.isStringLiteral(init.arguments[0])) {
        return
      }
      const spec = init.arguments[0].value
      let desired = bindingFromSpecifier(spec)
      if (spec.includes("esmodule-helpers")) desired = "helpers"
      // uniquify
      let name = desired
      let i = 2
      while (used.has(name) && name !== id.name) {
        name = `${desired}${i++}`
      }
      used.add(name)
      if (name !== id.name && /^[a-z]{1,3}$/.test(id.name)) {
        map.set(id.name, name)
      }
    }
  })
  return map
}

function renameBindings(ast, renames) {
  if (!renames.size) return
  // ONLY rename Program-scope bindings. Renaming inside every Scopable
  // incorrectly rewrites nested `let n` / params that share minified names.
  traverse(ast, {
    Program(path) {
      for (const [oldName, newName] of renames) {
        if (oldName === newName) continue
        if (!path.scope.bindings[oldName]) continue
        try {
          path.scope.rename(oldName, newName)
        } catch {
          // collision — leave as-is
        }
      }
    }
  })
}

/** Repair files already damaged by Scopable-wide rename: unshadow imports. */
function unshadowImportNames(ast) {
  const programBindings = new Set()
  traverse(ast, {
    Program(path) {
      for (const name of Object.keys(path.scope.bindings)) {
        programBindings.add(name)
      }
    }
  })

  traverse(ast, {
    Function(path) {
      if (path.parentPath?.isProgram()) {
        // function decls at program — their params may wrongly equal import names
      }
      const params = path.node.params
      for (const param of params) {
        if (!t.isIdentifier(param)) continue
        if (!programBindings.has(param.name)) continue
        // param shadows module import — rename param binding only
        const next = path.scope.generateUidIdentifier(param.name + "Arg").name
        try {
          path.scope.rename(param.name, next)
        } catch {
          /* ignore */
        }
      }
    },
    BlockStatement(path) {
      for (const name of [...programBindings]) {
        const binding = path.scope.getOwnBinding(name)
        if (!binding) continue
        // local let/const shadowing a module import
        if (binding.kind === "module") continue
        const next = path.scope.generateUidIdentifier(name + "Local").name
        try {
          path.scope.rename(name, next)
        } catch {
          /* ignore */
        }
      }
    }
  })
}

function deobfuscateSource(source) {
  const { header, body } = splitHeader(source)
  const ast = parser.parse(body, {
    sourceType: "script",
    allowReturnOutsideFunction: true,
    errorRecovery: true
  })

  const exportRenames = collectExportRenames(ast)
  const importRenames = collectImportRenames(ast)

  // Prefer export names over import heuristics when conflict
  const merged = new Map([...importRenames, ...exportRenames])
  renameBindings(ast, merged)
  unshadowImportNames(ast)

  const out = generate(
    ast,
    {
      compact: false,
      comments: true,
      retainLines: false,
      jsescOption: { minimal: true }
    },
    body
  )

  const note =
    " * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.\n"
  let hdr = header
  if (hdr && !hdr.includes("Deobfuscated")) {
    hdr = hdr.replace(/\*\/\s*$/, ` *\n${note} */\n\n`)
  } else if (!hdr) {
    hdr = `/**\n${note} */\n\n`
  }

  return {
    code: hdr + out.code.replace(/^\s+/, "") + (out.code.endsWith("\n") ? "" : "\n"),
    exportRenames: Object.fromEntries(exportRenames),
    importRenames: Object.fromEntries(importRenames)
  }
}

function batchFiles(kind) {
  if (kind === "methods") {
    const dir = path.join(HELPER, "src", "contents", "methods")
    return fs
      .readdirSync(dir)
      .filter((n) => n.endsWith(".js"))
      .map((n) => path.join(dir, n))
  }
  if (kind === "paycom") {
    const p = path.join(
      HELPER,
      "src",
      "contents",
      "sites",
      "paycomonline-v3",
      "operations.js"
    )
    return fs.existsSync(p) ? [p] : []
  }
  return []
}

function syncOracle(filePath, code) {
  const rel = path.relative(HELPER, filePath).replace(/\\/g, "/")
  if (!rel.startsWith("src/")) return
  const dest = path.join(ORACLE, rel.slice("src/".length))
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.writeFileSync(dest, code, "utf8")
}

function processFile(filePath) {
  const source = fs.readFileSync(filePath, "utf8")
  // Skip huge files
  if (source.length > 500_000) {
    console.warn(`skip (too large): ${filePath}`)
    return null
  }
  try {
    const result = deobfuscateSource(source)
    const rel = path.relative(REPO_ROOT, filePath)
    if (WRITE) {
      fs.writeFileSync(filePath, result.code, "utf8")
      syncOracle(filePath, result.code)
      console.log(`wrote ${rel} (exports: ${Object.keys(result.exportRenames).length})`)
    } else {
      console.log(
        `dry-run ${rel} exports=${JSON.stringify(result.exportRenames)} imports=${JSON.stringify(result.importRenames)}`
      )
    }
    return result
  } catch (err) {
    console.error(`fail ${filePath}:`, err.message)
    return null
  }
}

function main() {
  const files = []
  if (BATCH) {
    files.push(...batchFiles(BATCH))
  } else {
    const args = process.argv.slice(2).filter((a) => !a.startsWith("--") && a !== BATCH)
    for (const a of args) {
      files.push(path.isAbsolute(a) ? a : path.resolve(process.cwd(), a))
    }
  }

  if (!files.length) {
    console.error(
      "Usage: deobfuscate-parcel-module.mjs <file.js> [--write] | --batch methods|paycom [--write]"
    )
    process.exit(1)
  }

  let ok = 0
  for (const f of files) {
    if (processFile(f)) ok += 1
  }
  console.log(`[deob] ${ok}/${files.length} ok${WRITE ? " (written)" : " (dry-run)"}`)
}

main()
