import fs from "fs"
import path from "path"
import * as esbuild from "esbuild"
import { convertFile } from "./convert-site-parcel-to-ts.mjs"

const root = "helper-runtime/src"
const files = [
  "bootstrapJobrightHelperRuntime.js",
  "contents.js",
  "enums.js",
  "FormFactory.js",
  "lenCalculation.js",
  "model.js",
  "storage.js",
  "theme.js",
  "utils.js",
].map((n) => path.join(root, n))

function strip(src) {
  let out = src.replace(/\r\n/g, "\n")
  out = out.replace(/^[A-Za-z_$][\w$]*=e\("[^"]+"\)\s*,?\s*\n/gm, "")
  out = out.replace(
    /[A-Za-z_$][\w$]*=e\("[^"]+"\)\s*;(?=\s*(?:async\s+)?(?:function|class|const|let|var|export))/g,
    "",
  )
  out = out.replace(
    /^(?:var|let|const)\s+[A-Za-z_$][\w$]*\s*,\s*\n(?=\s*(?:async\s+)?(?:function|class))/gm,
    "",
  )
  out = out.replace(
    /\w+\s*\n?\s*\.export\(\s*r\s*,\s*["'][^"']+["']\s*,\s*\(\)\s*=>\s*[A-Za-z_$][\w$.]*\s*\)\s*,?/g,
    "",
  )
  out = out.replace(/\breturntrue\b/g, "return true")
  out = out.replace(/\breturnfalse\b/g, "return false")
  return out
}

for (const js of files) {
  console.log("[convert]", convertFile(js))
}

const tsFiles = files.map((f) => f.replace(/\.js$/, ".ts"))
let fail = 0
const failed = []
for (const file of tsFiles) {
  let src = fs.readFileSync(file, "utf8")
  const cleaned = strip(src)
  if (cleaned !== src) fs.writeFileSync(file, cleaned)
  try {
    const { code } = esbuild.transformSync(cleaned, {
      loader: "ts",
      format: "esm",
      target: "es2020",
      minify: false,
    })
    fs.writeFileSync(file.replace(/\.ts$/, ".pretty.ts"), code)
    console.log("OK", path.basename(file), code.split("\n").length)
  } catch (e) {
    fail++
    failed.push(file)
    console.log("FAIL", path.basename(file), String(e.message).slice(0, 160))
  }
}

if (failed.length) {
  console.log("\n[reconvert / pretty-from-js]")
  for (const file of failed) {
    const js = file.replace(/\.ts$/, ".js")
    if (!fs.existsSync(js)) continue
    convertFile(js)
    let src = strip(fs.readFileSync(file, "utf8"))
    fs.writeFileSync(file, src)
    try {
      const { code } = esbuild.transformSync(src, {
        loader: "ts",
        format: "esm",
        target: "es2020",
        minify: false,
      })
      fs.writeFileSync(file.replace(/\.ts$/, ".pretty.ts"), code)
      console.log("RECOVERED", path.basename(file), code.split("\n").length)
      fail--
    } catch (e) {
      try {
        const { code } = esbuild.transformSync(fs.readFileSync(js, "utf8"), {
          loader: "js",
          format: "esm",
          target: "es2020",
          minify: false,
        })
        fs.writeFileSync(file.replace(/\.ts$/, ".pretty.ts"), code)
        console.log(
          "PRETTY-FROM-JS",
          path.basename(file),
          code.split("\n").length,
        )
        fail--
      } catch {
        console.log("STILL FAIL", path.basename(file))
      }
    }
  }
}

console.log("fail count", Math.max(0, fail), "files", tsFiles.length)
