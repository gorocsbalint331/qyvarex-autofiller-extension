/**
 * Convert readable helper-runtime TypeScript (ESM) into Parcel factory body
 * for bundle-engine-helper (`e("…")` requires + helpers.export).
 */
import path from "node:path"
import * as esbuild from "esbuild"

/** ESM import path → Parcel e("…") specifier */
export const TS_IMPORT_MAP = {
  // greenhouse siblings (.js or .ts extension in source)
  "./add-another-button.js": "./add-another-button",
  "./add-another-button.ts": "./add-another-button",
  "./answer.js": "./answer",
  "./answer.ts": "./answer",
  "./country.js": "./country",
  "./country.ts": "./country",
  "./education-operation.js": "./education-operation",
  "./education-operation.ts": "./education-operation",
  "./field-labels.js": "./field-labels",
  "./field-labels.ts": "./field-labels",
  "./location-operation.js": "./location-operation",
  "./location-operation.ts": "./location-operation",
  "./operations.js": "./operations",
  "./operations.ts": "./operations",
  "./race.js": "./race",
  "./race.ts": "./race",
  "./react-select-search.js": "./react-select-search",
  "./react-select-search.ts": "./react-select-search",
  "./resolve-tracking.js": "./resolve-tracking",
  "./resolve-tracking.ts": "./resolve-tracking",
  "./rule-options.js": "./rule-options",
  "./rule-options.ts": "./rule-options",
  "./rules.js": "./rules",
  "./rules.ts": "./rules",
  "./select-labels.js": "./select-labels",
  "./select-labels.ts": "./select-labels",
  "./snapshot-alignment.js": "./snapshot-alignment",
  "./snapshot-alignment.ts": "./snapshot-alignment",
  "./validation-tracking.js": "./validation-tracking",
  "./validation-tracking.ts": "./validation-tracking",

  // from sites/greenhouse/
  "../education-item-trace.js": "../education-item-trace",
  "../education-snapshot-tracking.js": "../education-snapshot-tracking",
  "../resolve-trace-tracking.js": "~contents/sites/resolve-trace-tracking",
  "../../methods/answer.js": "~contents/methods/answer",
  "../../methods/dom.js": "~contents/methods/dom",
  "../../methods/observer.js": "~contents/methods/observer",
  "../../crawler/utils/checkbox.js": "~contents/crawler/utils/checkbox",
  "../../shared/constants.js": "~contents/shared/constants",
  "../../../core/enums.js": "~core/enums",
  "../../../core/xpath.js": "~core/xpath",
  "../../../utils/delay.js": "~utils/delay",
  "../../../utils/string.js": "~utils/string",
  "../../../utils/string.ts": "~utils/string",
  "../../../constants.js": "~constants",
  "../../../constants.ts": "~constants",
  "../../core/enums.js": "~core/enums",
  "../../core/xpath.js": "~core/xpath",
  "../../utils/delay.js": "~utils/delay",
  "../../utils/string.js": "~utils/string",
  "../../constants.js": "~constants",

  // from sites/greenhouse.ts (parent)
  "../methods/answer.js": "~contents/methods/answer",
  "../methods/dom.js": "~contents/methods/dom",
  "./education-item-trace.js": "~contents/sites/education-item-trace",
  "./greenhouse/answer.js": "~contents/sites/greenhouse/answer",
  "./greenhouse/answer.ts": "~contents/sites/greenhouse/answer",
  "./greenhouse/education-operation.js":
    "~contents/sites/greenhouse/education-operation",
  "./greenhouse/education-operation.ts":
    "~contents/sites/greenhouse/education-operation",
  "./greenhouse/location-operation.js":
    "~contents/sites/greenhouse/location-operation",
  "./greenhouse/location-operation.ts":
    "~contents/sites/greenhouse/location-operation",
  "./greenhouse/resolve-tracking.js":
    "~contents/sites/greenhouse/resolve-tracking",
  "./greenhouse/resolve-tracking.ts":
    "~contents/sites/greenhouse/resolve-tracking",
  "./greenhouse/rules.js": "~contents/sites/greenhouse/rules",
  "./greenhouse/rules.ts": "~contents/sites/greenhouse/rules",
  "./greenhouse/snapshot-alignment.js":
    "~contents/sites/greenhouse/snapshot-alignment",
  "./greenhouse/snapshot-alignment.ts":
    "~contents/sites/greenhouse/snapshot-alignment",
  "./greenhouse/validation-tracking.js":
    "~contents/sites/greenhouse/validation-tracking",
  "./greenhouse/validation-tracking.ts":
    "~contents/sites/greenhouse/validation-tracking",
  "./profile-location-original-answer.js":
    "~contents/sites/profile-location-original-answer",
  "./runtime-validation-tracking.js":
    "~contents/sites/runtime-validation-tracking",
  "../../core/dom.js": "~core/dom",
  "../../core/enums.js": "~core/enums",
  "../../core/xpath.js": "~core/xpath",
  "../../store/autofillInfo.js": "~store/autofillInfo",
  "./base-filler.js": "./base-filler",
  "./base-filler.ts": "./base-filler",
  "./greenhouse/country.js": "~contents/sites/greenhouse/country",
  "./greenhouse/country.ts": "~contents/sites/greenhouse/country",
  "./greenhouse/operations.js": "~contents/sites/greenhouse/operations",
  "./greenhouse/operations.ts": "~contents/sites/greenhouse/operations",
  "./greenhouse/race.js": "~contents/sites/greenhouse/race",
  "./greenhouse/race.ts": "~contents/sites/greenhouse/race",

  "@plasmohq/messaging": "@plasmohq/messaging",
  "~core/xpath": "~core/xpath",
  "~core/enums": "~core/enums",
  "~utils/delay": "~utils/delay",
  "~utils/string": "~utils/string",
  "~constants": "~constants",
}

function resolveParcelSpec(spec, fromFile = "") {
  // Site-entry remaps must run before the greenhouse sibling map, otherwise
  // `./answer.ts` from adobe.ts is wrongly treated as a greenhouse companion.
  const noExtEarly = spec.replace(/\.(js|ts)$/, "")
  const fromBaseEarly = fromFile
    ? path.basename(fromFile).replace(/\.(js|ts|tsx)$/, "")
    : ""
  const fromDirEarly = fromFile ? path.dirname(fromFile) : ""
  const SITE_ENTRIES = new Set([
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
    "greenhouse",
  ])
  const sharedRoot = new Set([
    "falcon-response-accumulator",
    "falcon-answer-tracking",
    "autofill-answer-pair-tracking",
    "profile-location-original-answer",
    "option-resolve-rollout",
    "base-filler",
    "education-item-trace",
    "education-snapshot-tracking",
    "runtime-validation-tracking",
    "resolve-trace-tracking",
  ])
  if (
    fromFile &&
    /[/\\]sites$/i.test(fromDirEarly) &&
    SITE_ENTRIES.has(fromBaseEarly) &&
    /^\.\/[A-Za-z0-9_-]+$/.test(noExtEarly) &&
    noExtEarly !== "./base-filler"
  ) {
    const companion = noExtEarly.slice(2)
    if (sharedRoot.has(companion)) return `~contents/sites/${companion}`
    return `~contents/sites/${fromBaseEarly}/${companion}`
  }

  if (TS_IMPORT_MAP[spec]) return TS_IMPORT_MAP[spec]

  const noExt = noExtEarly

  // Sibling / relative under sites/
  if (spec.startsWith("./") || spec.startsWith("../")) {
    if (noExt.includes("base-filler")) {
      // from sites/X.ts → ./base-filler; from sites/X/y.ts → ../base-filler
      return noExt.endsWith("/base-filler") || noExt === "../base-filler"
        ? "../base-filler"
        : noExt === "./base-filler"
          ? "./base-filler"
          : noExt
    }
    // ../foo or ./foo companions — keep relative (resolver prefers .ts)
    if (
      (spec.startsWith("./") || spec.startsWith("../")) &&
      !noExt.includes("/methods/") &&
      !noExt.includes("/core/") &&
      !noExt.includes("/utils/") &&
      !noExt.includes("/store/") &&
      !noExt.includes("/enums/") &&
      !noExt.includes("/api/") &&
      !noExt.includes("/crawler/") &&
      !noExt.includes("/shared/") &&
      !noExt.endsWith("/constants") &&
      !noExt.includes("/constants/")
    ) {
      // Map ../adp-workforcenow/country from another site folder
      const cross = noExt.match(
        /^\.\.\/(adobe|adp-myjobs|adp-recruiting|adp-workforcenow|amazon|apple|ashby|avature|bamboohr|brassring|greenhouse)(\/.+)?$/,
      )
      if (cross) {
        return `~contents/sites/${cross[1]}${cross[2] || ""}`
      }
      // From sites/ashby.ts importing ./ashby/answer
      const nested = noExt.match(
        /^\.\/(adobe|adp-myjobs|adp-recruiting|adp-workforcenow|amazon|apple|ashby|avature|bamboohr|brassring|greenhouse)(\/.+)$/,
      )
      if (nested) {
        return `~contents/sites/${nested[1]}${nested[2]}`
      }
      return noExt
    }

    // ../../methods/answer → ~contents/methods/answer
    const methods = noExt.match(/\/(?:contents\/)?methods\/(.+)$/) || noExt.match(/methods\/(.+)$/)
    if (noExt.includes("methods/")) {
      const sub = noExt.split("methods/")[1]
      return `~contents/methods/${sub}`
    }
    if (noExt.includes("crawler/utils/")) {
      const sub = noExt.split("crawler/utils/")[1]
      return `~contents/crawler/utils/${sub}`
    }
    if (noExt.includes("shared/")) {
      const sub = noExt.split(/shared\//)[1]
      return `~contents/shared/${sub}`
    }
    if (noExt.includes("/core/")) {
      return `~core/${noExt.split("/core/")[1]}`
    }
    if (noExt.includes("/utils/")) {
      return `~utils/${noExt.split("/utils/")[1]}`
    }
    if (noExt.includes("/store/")) {
      return `~store/${noExt.split("/store/")[1]}`
    }
    if (noExt.includes("/enums/")) {
      return `~enums/${noExt.split("/enums/")[1]}`
    }
    if (noExt.includes("/api/")) {
      return `~api/${noExt.split("/api/")[1]}`
    }
    if (noExt.endsWith("/constants") || noExt.endsWith("\\constants")) {
      return "~constants"
    }
    if (noExt.includes("/constants/")) {
      return `~constants/${noExt.split("/constants/")[1]}`
    }
    // sites-level shared helpers: ../profile-location-original-answer
    if (noExt.match(/^\.\.\/[a-z0-9-]+$/)) {
      return `~contents/sites/${noExt.slice(3)}`
    }
    return noExt
  }

  if (spec.startsWith("~") || spec.startsWith("@")) return spec
  // bare package
  if (!spec.includes(" ") && /^[a-zA-Z@]/.test(spec)) return spec
  throw new Error(`[ts-to-parcel] No Parcel import map entry for ${spec}`)
}

function parseEsm(source) {
  const namespaceImports = []
  const reExports = []
  const exportNames = []
  let namedBaseFiller = false
  let body = source

  body = body.replace(
    /^export\s+\{\s*([^}]+)\s*\}\s+from\s+"([^"]+)"\s*;?\s*\n/gm,
    (_m, names, from) => {
      const list = names
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => {
          const parts = s.split(/\s+as\s+/)
          return parts[parts.length - 1].trim()
        })
      reExports.push({ names: list, from })
      return ""
    },
  )

  body = body.replace(
    /^import\s+\*\s+as\s+(\w+)\s+from\s+"([^"]+)"\s*;?\s*\n/gm,
    (_m, name, spec) => {
      namespaceImports.push({ name, spec })
      return ""
    },
  )

  body = body.replace(
    /^import\s+\{\s*([^}]+)\s*\}\s+from\s+"([^"]+)"\s*;?\s*\n/gm,
    (_m, names, spec) => {
      if (spec.includes("base-filler") && /\bBaseFiller\b/.test(names)) {
        namedBaseFiller = true
        return ""
      }
      const named = names
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
      const localName =
        "_imp_" +
        spec
          .replace(/^\.\//, "dot_")
          .replace(/\.\.\//g, "up_")
          .replace(/^~/, "tilde_")
          .replace(/[^a-zA-Z0-9]+/g, "_")
          .replace(/^_|_$/g, "")
          .slice(0, 60)
      namespaceImports.push({ name: localName, spec, named })
      return ""
    },
  )

  body = body.replace(/^export\s+default\s+(\w+)\s*;?\s*\n?/gm, (_m, name) => {
    exportNames.push(["default", name])
    return ""
  })

  body = body.replace(/^export\s+\{\s*([^}]+)\s*\}\s*;?\s*\n?/gm, (_m, names) => {
    for (const part of names.split(",")) {
      const trimmed = part.trim()
      if (!trimmed) continue
      const asParts = trimmed.split(/\s+as\s+/)
      if (asParts.length === 2) {
        exportNames.push([asParts[1].trim(), asParts[0].trim()])
      } else {
        exportNames.push(asParts[0].trim())
      }
    }
    return ""
  })

  body = body.replace(
    /^export\s+(async\s+)?(function|class|const|let|var)\s+(\w+)/gm,
    (_m, asyncKw, kind, name) => {
      exportNames.push(name)
      return `${asyncKw || ""}${kind} ${name}`
    },
  )

  return { namespaceImports, reExports, exportNames, namedBaseFiller, body }
}

/**
 * @param {string} source raw .ts file contents
 * @param {string} filePath absolute path (for errors)
 * @returns {string} Parcel factory body (no outer function wrapper)
 */
export function compileTsToParcelSource(source, filePath) {
  const stripped = source
    .replace(/^\/\/ @ts-nocheck\s*\n/, "")
    .replace(/^\/\*\*[\s\S]*?\*\/\s*/, "")

  const { code } = esbuild.transformSync(stripped, {
    loader: "ts",
    format: "esm",
    target: "es2020",
    sourcemap: false,
  })

  const parsed = parseEsm(code)
  let body = parsed.body.replace(/^\s+/, "")

  if (parsed.namedBaseFiller) {
    body = body.replace(
      /\bclass\s+(\w+)\s+extends\s+BaseFiller\b/g,
      "class $1 extends baseFiller.BaseFiller",
    )
  }

  const lines = []
  lines.push(
    `var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");`,
  )
  lines.push(`helpers.defineInteropFlag(r);`)

  if (parsed.namedBaseFiller) {
    // sites/foo.ts → ./base-filler; sites/foo/bar.ts → ../base-filler
    const baseFillerSpec = /[/\\]sites[/\\][^/\\]+\.tsx?$/i.test(filePath)
      ? "./base-filler"
      : "../base-filler"
    lines.push(`var baseFiller = e(${JSON.stringify(baseFillerSpec)});`)
  }

  for (const { name, spec, named } of parsed.namespaceImports) {
    const parcelSpec = resolveParcelSpec(spec, filePath)
    lines.push(`var ${name} = e(${JSON.stringify(parcelSpec)});`)
    if (named) {
      for (const binding of named) {
        const [orig, alias] = binding.split(/\s+as\s+/).map((s) => s.trim())
        const local = alias || orig
        lines.push(`var ${local} = ${name}.${orig};`)
      }
    }
  }

  for (const re of parsed.reExports) {
    const parcelSpec = resolveParcelSpec(re.from, filePath)
    const tmp = `_re_${parcelSpec.replace(/[^a-zA-Z0-9]/g, "_")}`
    lines.push(`var ${tmp} = e(${JSON.stringify(parcelSpec)});`)
    for (const n of re.names) {
      lines.push(
        `helpers.export(r, ${JSON.stringify(n)}, () => ${tmp}.${n});`,
      )
    }
  }

  const seen = new Set()
  for (const entry of parsed.exportNames) {
    if (Array.isArray(entry)) {
      const [exportName, localName] = entry
      const key = exportName
      if (seen.has(key)) continue
      seen.add(key)
      lines.push(
        `helpers.export(r, ${JSON.stringify(exportName)}, () => ${localName});`,
      )
    } else {
      if (seen.has(entry)) continue
      seen.add(entry)
      lines.push(
        `helpers.export(r, ${JSON.stringify(entry)}, () => ${entry});`,
      )
    }
  }

  // greenhouse parent also needs default export alias already handled
  return lines.join("\n") + "\n\n" + body
}

export function isTypeScriptFile(filePath) {
  return filePath.endsWith(".ts") || filePath.endsWith(".tsx")
}
