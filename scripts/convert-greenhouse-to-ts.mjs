/**
 * Convert Parcel greenhouse.js → readable ESM TypeScript (helper-runtime).
 *
 * SUPERSEDED: greenhouse.ts is now the source of truth. Prefer
 *   node scripts/sync-greenhouse-from-ts.mjs
 * to regenerate greenhouse.js from TypeScript. Keep this script only for
 * one-off recovery from an older Parcel dump.
 *
 * Usage: node scripts/convert-greenhouse-to-ts.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXT = path.resolve(__dirname, "..")
const SRC = path.join(EXT, "helper-runtime/src/contents/sites/greenhouse.js")
const OUT = path.join(EXT, "helper-runtime/src/contents/sites/greenhouse.ts")

function stripHeader(source) {
  const m = source.match(/^\/\*\*[\s\S]*?\*\/\s*/)
  return m ? source.slice(m[0].length) : source
}

function main() {
  let body = stripHeader(fs.readFileSync(SRC, "utf8"))

  body = body.replace(
    /var helpers = e\("@parcel\/transformer-js\/src\/esmodule-helpers\.js"\);\s*helpers\.defineInteropFlag\(r\),\s*helpers\.export\(r, "Greenhouse", \(\) => Greenhouse\);\s*/,
    ""
  )

  const preambleMatch = body.match(/^([\s\S]*?)(?=\nfunction |\nclass )/)
  if (!preambleMatch) {
    console.error("Could not find preamble")
    process.exit(1)
  }
  const preamble = preambleMatch[1]
  let code = body.slice(preamble.length)

  code = code.replace(/\(0,\s*([A-Za-z_$][\w$]*)\.(\w+)\)/g, "$1.$2")
  code = code.replace(/\bextends S\.BaseFiller\b/, "extends BaseFiller")
  code = code.replace(/\banswer2\b/g, "greenhouseAnswer")
  code = code.replace(/\bdom2\b/g, "coreDom")
  code = code.replace(/\bE\./g, "country.")
  code = code.replace(/\bC\./g, "race.")
  code = code.replace(/\bS\./g, "BaseFiller.")

  const renames = [
    ["function A(", "function trimStr("],
    ["function k(", "function normalizeLabel("],
    ["function T(", "function greenhouseLocationFromProfile("],
    ["function F(", "function firstNonEmpty("],
    ["function I(", "function resolveLocationAnswer("],
    ["function j(", "function resolvePhoneCountryCode("],
    ["function D(", "function logLocation("],
    ["function P(", "function hasApiKeyParam("],
    ["function _(", "function findCandidateLocationInput("],
    ["function L(", "function resolveLocationInputRoot("],
    ["function R(", "function isLocationSearchField("]
  ]
  for (const [from, to] of renames) code = code.replace(from, to)

  const callRenames = {
    A: "trimStr",
    k: "normalizeLabel",
    T: "greenhouseLocationFromProfile",
    F: "firstNonEmpty",
    I: "resolveLocationAnswer",
    j: "resolvePhoneCountryCode",
    D: "logLocation",
    P: "hasApiKeyParam",
    _: "findCandidateLocationInput",
    L: "resolveLocationInputRoot",
    R: "isLocationSearchField"
  }
  for (const [short, longName] of Object.entries(callRenames)) {
    code = code.replace(new RegExp(`\\b${short}\\(`, "g"), `${longName}(`)
  }

  // greenhouseAnswer.formatAnswer — construction used answer2 before
  code = code.replace(
    /this\.formatAnswer = greenhouseAnswer\.formatAnswer/,
    "this.formatAnswer = greenhouseAnswer.formatAnswer.bind(greenhouseAnswer)"
  )

  const header = `// @ts-nocheck
/**
 * Greenhouse ATS filler — readable TypeScript.
 *
 * Generated from the Parcel dump (greenhouse.js). Activate runtime still
 * loads greenhouse.js via the helper-runtime linker; edit this file for
 * clarity / reviews, then re-sync or port logic into greenhouse.js as needed.
 *
 * Site id: "greenhouse" (jobs.greenhouse.io / job-boards.greenhouse.io)
 */

import * as messaging from "@plasmohq/messaging"
import * as answer from "../methods/answer.js"
import * as dom from "../methods/dom.js"
import * as educationItemTrace from "./education-item-trace.js"
import * as greenhouseAnswer from "./greenhouse/answer.js"
import * as educationOperation from "./greenhouse/education-operation.js"
import * as locationOperation from "./greenhouse/location-operation.js"
import * as resolveTracking from "./greenhouse/resolve-tracking.js"
import * as rules from "./greenhouse/rules.js"
import * as snapshotAlignment from "./greenhouse/snapshot-alignment.js"
import * as validationTracking from "./greenhouse/validation-tracking.js"
import * as profileLocationOriginalAnswer from "./profile-location-original-answer.js"
import * as runtimeValidationTracking from "./runtime-validation-tracking.js"
import * as coreDom from "../../core/dom.js"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as autofillInfo from "../../store/autofillInfo.js"
import { BaseFiller } from "./base-filler.js"
import * as country from "./greenhouse/country.js"
import * as operations from "./greenhouse/operations.js"
import * as race from "./greenhouse/race.js"

`

  // Drop unused import warnings by referencing messaging if unused — leave it

  const out =
    header +
    code.trim() +
    "\n\nexport { Greenhouse }\nexport default Greenhouse\n"

  fs.writeFileSync(OUT, out, "utf8")
  console.log("wrote", path.relative(EXT, OUT), `(${out.length} bytes)`)

  // Point the Parcel .js header at the TS companion
  let js = fs.readFileSync(SRC, "utf8")
  if (!js.includes("Readable TypeScript:")) {
    js = js.replace(
      /\* Deobfuscated[\s\S]*?\*\//,
      `* Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.\n * Readable TypeScript: ./greenhouse.ts\n */`
    )
    fs.writeFileSync(SRC, js, "utf8")
  }
}

main()
