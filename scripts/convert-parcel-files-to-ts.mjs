import path from "node:path"
import { fileURLToPath } from "node:url"
import { convertFile } from "./convert-site-parcel-to-ts.mjs"

const files = process.argv.slice(2)
if (!files.length) {
  console.error("Usage: node scripts/convert-parcel-files-to-ts.mjs <file.js>…")
  process.exit(1)
}
for (const f of files) {
  const abs = path.resolve(f)
  console.log("[convert]", convertFile(abs))
}
