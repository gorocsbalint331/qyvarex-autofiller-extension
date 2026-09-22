import fs from "node:fs"
import path from "node:path"

const SITES = "helper-runtime/src/contents/sites"
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

for (const site of TEN) {
  const entry = path.join(SITES, `${site}.ts`)
  if (!fs.existsSync(entry)) continue
  let src = fs.readFileSync(entry, "utf8")
  const before = src
  src = src.replace(
    /from\s+["']\.\/([A-Za-z0-9_-]+)(?:\.(?:ts|js))?["']/g,
    (m, name) => {
      const nestedTs = path.join(SITES, site, `${name}.ts`)
      if (fs.existsSync(nestedTs)) {
        return `from "./${site}/${name}.ts"`
      }
      return m
    },
  )
  if (src !== before) {
    fs.writeFileSync(entry, src)
    console.log("fixed", entry)
  } else {
    console.log("no change", entry)
  }
}
