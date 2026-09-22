import assert from "node:assert/strict"
import { describe, it } from "node:test"

import { detectAtsSite } from "../src/contents/crawler/discover-factory"
import { detectRegistryAts } from "../src/contents/crawler/detect-registry"
import {
  CancelledError,
  checkpoint,
  createCancellation,
  SkippedError
} from "../src/contents/methods/native-cancellation"
import { PORTED_ATS_SITES } from "../src/contents/sites/ported-sites"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

describe("ATS detection", () => {
  it("maps common hosts", () => {
    assert.equal(detectAtsSite("boards.greenhouse.io"), "greenhouse")
    assert.equal(detectAtsSite("jobs.lever.co"), "lever")
    assert.equal(detectAtsSite("acme.personio.de"), "personio")
    assert.equal(
      detectAtsSite("acme.myworkdayjobs.com", "https://acme.myworkdayjobs.com/en-US/job"),
      "myworkday"
    )
  })

  it("registry finds greenhouse path", () => {
    const id = detectRegistryAts(
      "boards.greenhouse.io",
      "https://boards.greenhouse.io/acme/jobs/123"
    )
    assert.equal(id, "greenhouse")
  })
})

describe("cancellation", () => {
  it("checkpoint throws when cancelled", async () => {
    const c = createCancellation()
    await c.wrap(async () => {
      await c.cancel()
      assert.throws(() => checkpoint(), CancelledError)
    }).catch((e) => {
      assert.ok(e instanceof CancelledError)
    })
  })

  it("skip raises SkippedError via checkpoint after skipCurrentField path", async () => {
    const c = createCancellation()
    let sawSkip = false
    try {
      await c.wrap(async () => {
        await c.skip()
        checkpoint()
      })
    } catch (e) {
      sawSkip = e instanceof SkippedError
    }
    assert.equal(sawSkip, true)
  })
})

describe("ported ATS sites", () => {
  it("includes all factory-registered site modules", () => {
    assert.ok(PORTED_ATS_SITES.length >= 70)
    for (const must of [
      "personio",
      "greenhouse",
      "lever",
      "ashby",
      "myworkday",
      "oraclecloud",
      "paycomonline-v3",
      "workable",
      "icims"
    ]) {
      assert.ok(
        (PORTED_ATS_SITES as readonly string[]).includes(must),
        `missing ${must}`
      )
    }
  })

  it("factory.js maps every PORTED site entry class file", () => {
    const root = path.join(
      path.dirname(fileURLToPath(import.meta.url)),
      "..",
      "helper-runtime",
      "src",
      "contents"
    )
    const factorySrc = fs.readFileSync(
      path.join(root, "crawler", "factory.js"),
      "utf8"
    )
    // Spot-check that factory pulls in the major site modules
    for (const site of ["personio", "greenhouse", "myworkday", "ashby"]) {
      assert.match(
        factorySrc,
        new RegExp(`~contents/sites/${site}`),
        `factory missing import for ${site}`
      )
      assert.ok(
        fs.existsSync(path.join(root, "sites", `${site}.js`)),
        `missing sites/${site}.js`
      )
    }
  })
})
