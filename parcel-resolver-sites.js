const { Resolver } = require("@parcel/plugin")
const fs = require("fs")
const path = require("path")

const SITES = path.join(__dirname, "src", "contents", "sites")
const FUSE_MJS = path.resolve(
  __dirname,
  "..",
  "engine",
  "node_modules",
  "fuse.js",
  "dist",
  "fuse.mjs",
)

function tryFile(base) {
  const suffixes = ["", ".ts", ".tsx", ".js", ".jsx"]
  for (const suffix of suffixes) {
    const candidate = suffix && !base.endsWith(suffix) ? base + suffix : base
    try {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        return candidate
      }
    } catch {
      /* ignore */
    }
  }
  return null
}

module.exports = new Resolver({
  async resolve({ specifier, dependency }) {
    if (specifier === "fuse.js" && fs.existsSync(FUSE_MJS)) {
      return { filePath: FUSE_MJS }
    }
    if (!specifier.startsWith("./") || !dependency?.resolveFrom) return null
    const importer = dependency.resolveFrom
    if (path.basename(path.dirname(importer)) !== "sites") return null
    const site = path.basename(importer).replace(/\.(ts|tsx|js|jsx)$/i, "")
    if (!tryFile(path.join(SITES, site))) return null
    const companion = specifier.replace(/^\.\//, "").replace(/\.(ts|tsx|js|jsx)$/i, "")
    const resolved =
      tryFile(path.join(SITES, site, companion)) ||
      tryFile(path.join(SITES, companion))
    return resolved ? { filePath: resolved } : null
  },
})
