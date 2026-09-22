/**
 * Move Lodash internal/public modules from helper-app root into vendor/lodash/
 * and rewrite e()/headers/_manifest paths so bundle:helper still resolves.
 *
 * Usage:
 *   node extension/scripts/restructure-lodash-vendor.mjs          # dry-run
 *   node extension/scripts/restructure-lodash-vendor.mjs --apply
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, "../..")
const HELPER = path.join(REPO_ROOT, "engine", "helper-app")
const DEST_DIR = path.join(HELPER, "vendor", "lodash")
const MANIFEST = path.join(HELPER, "_manifest.json")
const APPLY = process.argv.includes("--apply")

const PUBLIC_LODASH = new Set([
  "isArray.js",
  "isArrayLike.js",
  "isArrayLikeObject.js",
  "isBuffer.js",
  "isFunction.js",
  "isLength.js",
  "isMap.js",
  "isObject.js",
  "isObjectLike.js",
  "isPlainObject.js",
  "isSet.js",
  "isSymbol.js",
  "isTypedArray.js",
  "isArguments.js",
  "eq.js",
  "keys.js",
  "keysIn.js",
  "identity.js",
  "noop.js",
  "stubArray.js",
  "stubFalse.js",
  "constant.js",
  "toString.js",
  "toPlainObject.js",
  "get.js",
  "has.js",
  "hasIn.js",
  "omit.js",
  "pick.js",
  "pickBy.js",
  "clone.js",
  "cloneDeep.js",
  "cloneDeepWith.js",
  "cloneWith.js",
  "memoize.js",
  "once.js",
  "debounce.js",
  "throttle.js",
  "map.js",
  "filter.js",
  "forEach.js",
  "forEachRight.js",
  "forIn.js",
  "forInRight.js",
  "forOwn.js",
  "forOwnRight.js",
  "assign.js",
  "assignIn.js",
  "assignInWith.js",
  "assignWith.js",
  "merge.js",
  "mergeWith.js",
  "defaults.js",
  "defaultsDeep.js",
  "isEqual.js",
  "isMatch.js",
  "isNil.js",
  "isNull.js",
  "isUndefined.js",
  "isString.js",
  "isNumber.js",
  "isBoolean.js",
  "isDate.js",
  "isError.js",
  "isRegExp.js",
  "isEmpty.js",
  "size.js",
  "values.js",
  "valuesIn.js",
  "entries.js",
  "entriesIn.js",
  "toPairs.js",
  "toPairsIn.js",
  "fromPairs.js",
  "flatten.js",
  "flattenDeep.js",
  "flattenDepth.js",
  "uniq.js",
  "uniqBy.js",
  "difference.js",
  "intersection.js",
  "union.js",
  "compact.js",
  "concat.js",
  "chunk.js",
  "slice.js",
  "take.js",
  "drop.js",
  "head.js",
  "last.js",
  "tail.js",
  "initial.js",
  "find.js",
  "findIndex.js",
  "findKey.js",
  "findLast.js",
  "findLastIndex.js",
  "findLastKey.js",
  "includes.js",
  "indexOf.js",
  "lastIndexOf.js",
  "some.js",
  "every.js",
  "reduce.js",
  "reduceRight.js",
  "transform.js",
  "groupBy.js",
  "keyBy.js",
  "countBy.js",
  "partition.js",
  "sortBy.js",
  "orderBy.js",
  "sample.js",
  "sampleSize.js",
  "shuffle.js",
  "delay.js",
  "defer.js",
  "bind.js",
  "bindKey.js",
  "partial.js",
  "partialRight.js",
  "curry.js",
  "curryRight.js",
  "ary.js",
  "unary.js",
  "flip.js",
  "overArgs.js",
  "rearg.js",
  "rest.js",
  "spread.js",
  "negate.js",
  "once.js",
  "before.js",
  "after.js",
  "wrap.js",
  "flow.js",
  "flowRight.js",
  "iteratee.js",
  "matches.js",
  "matchesProperty.js",
  "property.js",
  "propertyOf.js",
  "method.js",
  "methodOf.js",
  "cond.js",
  "conforms.js",
  "conformsTo.js",
  "range.js",
  "rangeRight.js",
  "times.js",
  "uniqueId.js",
  "escape.js",
  "unescape.js",
  "escapeRegExp.js",
  "camelCase.js",
  "capitalize.js",
  "kebabCase.js",
  "lowerCase.js",
  "lowerFirst.js",
  "snakeCase.js",
  "startCase.js",
  "toLower.js",
  "toUpper.js",
  "trim.js",
  "trimEnd.js",
  "trimStart.js",
  "truncate.js",
  "words.js",
  "parseInt.js",
  "clamp.js",
  "inRange.js",
  "random.js",
  "add.js",
  "subtract.js",
  "multiply.js",
  "divide.js",
  "sum.js",
  "sumBy.js",
  "mean.js",
  "meanBy.js",
  "max.js",
  "maxBy.js",
  "min.js",
  "minBy.js",
  "ceil.js",
  "floor.js",
  "round.js",
  "now.js",
  "attempt.js",
  "invoke.js",
  "invokeMap.js",
  "result.js",
  "set.js",
  "setWith.js",
  "unset.js",
  "update.js",
  "updateWith.js",
  "at.js",
  "pull.js",
  "pullAll.js",
  "pullAllBy.js",
  "pullAllWith.js",
  "pullAt.js",
  "remove.js",
  "without.js",
  "xor.js",
  "xorBy.js",
  "xorWith.js",
  "zip.js",
  "zipObject.js",
  "zipObjectDeep.js",
  "zipWith.js",
  "unzip.js",
  "unzipWith.js",
  "castArray.js",
  "toArray.js",
  "toFinite.js",
  "toInteger.js",
  "toLength.js",
  "toNumber.js",
  "toSafeInteger.js",
  "defaultTo.js",
  "lt.js",
  "lte.js",
  "gt.js",
  "gte.js",
  "nth.js",
  "nthArg.js",
  "over.js",
  "overEvery.js",
  "overSome.js",
  "mixin.js",
  "noConflict.js",
  "runInContext.js",
  "template.js",
  "templateSettings.js",
  "VERSION.js"
])

function listRootJs() {
  return fs
    .readdirSync(HELPER)
    .filter(
      (n) =>
        n.endsWith(".js") &&
        fs.statSync(path.join(HELPER, n)).isFile() &&
        !n.startsWith("vendor-")
    )
}

function buildCluster() {
  const man = JSON.parse(fs.readFileSync(MANIFEST, "utf8"))
  const rootFiles = new Set(listRootJs())
  const byPath = new Map()
  const byId = new Map()
  for (const [id, mod] of Object.entries(man.modules || {})) {
    const p = (mod.path || "").replace(/\\/g, "/")
    byPath.set(p, { id, deps: mod.deps || {} })
    byId.set(id, p)
  }

  const cluster = new Set()
  const queue = []

  // Seed ONLY underscore lodash internals at helper-app root
  for (const f of rootFiles) {
    if (/^_[A-Za-z]/.test(f)) queue.push(f)
  }

  while (queue.length) {
    const file = queue.pop()
    if (!rootFiles.has(file) || cluster.has(file)) continue
    cluster.add(file)
    const mod = byPath.get(file)
    if (!mod) continue
    for (const [, depId] of Object.entries(mod.deps)) {
      const depPath = byId.get(depId)
      if (!depPath || depPath.includes("/")) continue
      const base = path.basename(depPath)
      if (!rootFiles.has(base)) continue
      // Only expand to other _* internals or known public lodash API files
      if (base.startsWith("_") || PUBLIC_LODASH.has(base)) {
        if (!cluster.has(base)) queue.push(base)
      }
    }
  }

  // Also pull public lodash APIs that only depend on cluster members / parcel helpers
  for (const f of rootFiles) {
    if (cluster.has(f) || !PUBLIC_LODASH.has(f)) continue
    const mod = byPath.get(f)
    if (!mod) continue
    const localDeps = Object.entries(mod.deps)
      .map(([, id]) => byId.get(id))
      .filter(Boolean)
      .map((p) => path.basename(p))
      .filter((b) => rootFiles.has(b))
    if (
      localDeps.length > 0 &&
      localDeps.every(
        (b) =>
          cluster.has(b) ||
          PUBLIC_LODASH.has(b) ||
          b.startsWith("_") ||
          b.includes("esmodule-helpers")
      )
    ) {
      cluster.add(f)
      for (const b of localDeps) {
        if (b.startsWith("_") || PUBLIC_LODASH.has(b)) cluster.add(b)
      }
    }
  }

  // Never move parcel dups or obvious non-lodash
  for (const f of [...cluster]) {
    if (f.includes("__") || f.includes("parcel") || f.includes("esmodule")) {
      cluster.delete(f)
    }
  }

  return { cluster: [...cluster].sort(), byPath, byId, man }
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function walkFiles(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules" || name === "_archive") continue
    const full = path.join(dir, name)
    const st = fs.statSync(full)
    if (st.isDirectory()) walkFiles(full, out)
    else if (name.endsWith(".js") || name === "_manifest.json") out.push(full)
  }
  return out
}

function rewriteContent(content, oldBase, newRelWithoutExt, newRelWithExt) {
  let next = content
  const oldFile = `${oldBase}.js`

  next = next.replace(
    new RegExp(`e\\((["'])${escapeRegExp(oldBase)}\\1\\)`, "g"),
    `e($1${newRelWithoutExt}$1)`
  )
  next = next.replace(
    new RegExp(`e\\((["'])\\./${escapeRegExp(oldBase)}\\1\\)`, "g"),
    `e($1./${oldBase}$1)` // keep relative ./ inside lodash folder
  )

  // Header: left key + => path
  next = next.replace(
    new RegExp(
      `^(\\s*\\*\\s+)${escapeRegExp(oldBase)}(\\s+->\\s+\\S+\\s+=>\\s+)\\S+`,
      "gm"
    ),
    `$1${newRelWithoutExt}$2${newRelWithExt}`
  )
  next = next.replace(
    new RegExp(`(=>\\s+)${escapeRegExp(oldFile)}(\\b)`, "g"),
    `$1${newRelWithExt}$2`
  )
  next = next.replace(
    new RegExp(`("path"\\s*:\\s*")${escapeRegExp(oldFile)}(")`, "g"),
    `$1${newRelWithExt}$2`
  )
  next = next.replace(
    new RegExp(`(Resolved path:\\s*)${escapeRegExp(oldFile)}`, "g"),
    `$1${newRelWithExt}`
  )

  // Relative deps between lodash modules: ./_foo => stay as ./_foo (same folder)
  // Only rewrite absolute/root references.

  return next
}

function main() {
  const { cluster } = buildCluster()
  const report = {
    generatedAt: new Date().toISOString(),
    apply: APPLY,
    count: cluster.length,
    underscore: cluster.filter((f) => f.startsWith("_")).length,
    publicApi: cluster.filter((f) => !f.startsWith("_")).length,
    dest: "vendor/lodash/",
    files: cluster
  }

  fs.writeFileSync(
    path.join(HELPER, "_lodash-restructure-map.json"),
    JSON.stringify(report, null, 2)
  )
  console.log(
    `[lodash] cluster=${report.count} (_=${report.underscore}, public=${report.publicApi}) → _lodash-restructure-map.json`
  )
  console.log(
    "These are Lodash utility internals (cloneDeep, omit, isEqual, …), not Jobright app code."
  )

  if (!APPLY) {
    console.log("Dry-run. Re-run with --apply to move into vendor/lodash/.")
    return
  }

  fs.mkdirSync(DEST_DIR, { recursive: true })

  // 1) Move files
  for (const file of cluster) {
    const from = path.join(HELPER, file)
    const to = path.join(DEST_DIR, file)
    if (!fs.existsSync(from)) {
      console.warn("missing", file)
      continue
    }
    if (fs.existsSync(to)) {
      console.warn("target exists", to)
      continue
    }
    fs.renameSync(from, to)
  }

  // 2) Rewrite references across helper-app
  // Outside lodash: e("omit") → e("vendor/lodash/omit")
  // Inside lodash: e("./_baseClone") stays; e("_baseClone") → e("./_baseClone")
  let touched = 0
  for (const file of walkFiles(HELPER)) {
    let content = fs.readFileSync(file, "utf8")
    const original = content
    const inLodash = file.replace(/\\/g, "/").includes("/vendor/lodash/")

    for (const name of cluster) {
      const oldBase = name.replace(/\.js$/i, "")
      const newRel = `vendor/lodash/${oldBase}`
      const newFile = `vendor/lodash/${name}`

      if (inLodash) {
        // Prefer relative requires inside the folder
        content = content.replace(
          new RegExp(`e\\((["'])${escapeRegExp(oldBase)}\\1\\)`, "g"),
          `e($1./${oldBase}$1)`
        )
        content = content.replace(
          new RegExp(`(=>\\s+)${escapeRegExp(name)}(\\b)`, "g"),
          `$1${name}$2`
        )
        content = content.replace(
          new RegExp(`(Resolved path:\\s*)${escapeRegExp(name)}`, "g"),
          `$1${name}`
        )
        content = content.replace(
          new RegExp(`("path"\\s*:\\s*")${escapeRegExp(name)}(")`, "g"),
          `$1vendor/lodash/${name}$2`
        )
      } else {
        content = rewriteContent(content, oldBase, newRel, newFile)
      }
    }

    if (content !== original) {
      fs.writeFileSync(file, content, "utf8")
      touched += 1
    }
  }

  console.log(`[lodash] moved ${cluster.length} files, rewrote ${touched} files`)
}

main()
