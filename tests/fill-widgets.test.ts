import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"

import {
  findExactChoice,
  fuzzyFindBest,
  isExactChoiceMatch,
  normalizeChoiceText
} from "../src/contents/methods/choice-match"
import { planOracleEducationClientSearchStep } from "../src/lib/oracle-education-plan"

const sitesRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "helper-runtime",
  "src",
  "contents",
  "sites"
)

test("choice-match exact and fuzzy", () => {
  assert.equal(normalizeChoiceText("  Hello\u2019s  "), "hello's")
  assert.ok(isExactChoiceMatch("Remote", "remote"))
  const hit = findExactChoice(
    [{ t: "Yes" }, { t: "No" }],
    "Yes",
    (x) => x.t
  )
  assert.equal(hit?.t, "Yes")
  const fuzzy = fuzzyFindBest(
    ["San Francisco Bay Area", "New York"],
    "San Francisco",
    (x) => x,
    0.4
  )
  assert.ok(fuzzy?.includes("San Francisco"))
})

test("ported heavy-site companion modules exist", () => {
  const required = [
    "myworkday/education-operation.js",
    "ashby/location-operation.js",
    "oraclecloud/education-lov-candidates.js",
    "oraclecloud/operations.js",
    "paycomonline-v3/operations.js",
    "personio/operations.js",
    "greenhouse/operations.js"
  ]
  for (const rel of required) {
    assert.ok(
      fs.existsSync(path.join(sitesRoot, rel)),
      `missing ${rel}`
    )
  }
})

test("Oracle education client-search planner", () => {
  const candidates = [
    { text: "MIT", value: "1" },
    { text: "Stanford", value: "2" }
  ]
  const plan = planOracleEducationClientSearchStep({
    round: 0,
    searchText: "Massachusetts Institute",
    candidates,
    desired: "MIT"
  })
  assert.equal(plan.action, "SELECT_OPTIONS")
  assert.deepEqual(plan.selected_values, ["MIT"])
})
