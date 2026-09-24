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
} from "../src/contents/methods/native-choice-match"
import { planOracleEducationClientSearchStep } from "../src/lib/oracle-education-plan"

const sitesRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
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
    "myworkday/education-operation",
    "ashby/location-operation",
    "oraclecloud/education-lov-candidates",
    "oraclecloud/operations",
    "paycomonline-v3/operations",
    "personio/operations",
    "greenhouse/operations"
  ]
  for (const rel of required) {
    const tsPath = path.join(sitesRoot, `${rel}.ts`)
    const jsPath = path.join(sitesRoot, `${rel}.js`)
    assert.ok(
      fs.existsSync(tsPath) || fs.existsSync(jsPath),
      `missing ${rel}.{ts,js}`
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
