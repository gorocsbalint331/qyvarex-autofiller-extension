// @ts-nocheck
/**
 * Detect Parcel require runtimes and look up exports across linked bundles.
 */

export function isParcelRequire(value) {
  return (
    typeof value === "function" &&
    !!value.isParcelRequire &&
    !!value.modules
  )
}

export function findModuleExportFromParcelRequires(requires, exportName) {
  const seen = new Set()
  for (const start of requires) {
    let current = start
    while (isParcelRequire(current) && !seen.has(current)) {
      seen.add(current)
      for (const [id, entry] of Object.entries(current.modules || {})) {
        if (!String(entry?.[0]).includes(exportName)) continue
        const mod = current(id)
        if (typeof mod?.[exportName] === "function") return mod
      }
      current = current.parent
    }
  }
  return null
}
