/**
 * ATS crawler fixture tests — Personio, Greenhouse, Lever, Workday.
 */
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"

import { parseHTML } from "linkedom"

import {
  detectAtsSite,
  discoverFieldsForSite
} from "../src/contents/crawler/discover-factory"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fixtures = path.join(__dirname, "fixtures")

function load(name: string) {
  const html = fs.readFileSync(path.join(fixtures, name), "utf8")
  return parseHTML(html).document as unknown as Document
}

test("detectAtsSite maps hostnames", () => {
  assert.equal(detectAtsSite("internations.jobs.personio.de"), "personio")
  assert.equal(detectAtsSite("boards.greenhouse.io"), "greenhouse")
  assert.equal(detectAtsSite("jobs.lever.co"), "lever")
  assert.equal(detectAtsSite("company.wd5.myworkdayjobs.com"), "myworkday")
})

test("Personio fixture discovers core fields", () => {
  const fields = discoverFieldsForSite("personio", load("personio-apply.html"))
  const labels = fields.map((f) => f.label.toLowerCase())
  assert.ok(labels.some((l) => l.includes("name")))
  assert.ok(labels.some((l) => l.includes("email")))
  assert.ok(labels.some((l) => l.includes("years of experience")))
  assert.ok(labels.some((l) => l.includes("planned work location")))
  const years = fields.find((f) => /years of experience/i.test(f.label))
  assert.equal(years?.type, "select")
  assert.ok(years?.options?.includes("5-7 years"))
})

test("Greenhouse fixture discovers application fields", () => {
  const fields = discoverFieldsForSite(
    "greenhouse",
    load("greenhouse-apply.html")
  )
  const by = Object.fromEntries(fields.map((f) => [f.label.toLowerCase(), f]))
  assert.ok(by["first name"])
  assert.ok(by["last name"])
  assert.ok(by["email"])
  assert.equal(by["gender"]?.type, "select")
  assert.ok(by["gender"]?.options?.includes("Male"))
  assert.equal(by["cover letter"]?.type, "textarea")
})

test("Lever fixture discovers application fields", () => {
  const fields = discoverFieldsForSite("lever", load("lever-apply.html"))
  const by = Object.fromEntries(fields.map((f) => [f.label.toLowerCase(), f]))
  assert.ok(by["full name"])
  assert.ok(by["email"])
  assert.equal(by["location"]?.type, "select")
  assert.ok(by["location"]?.options?.includes("Remote"))
})

test("Workday fixture discovers native apply fields", () => {
  const fields = discoverFieldsForSite(
    "myworkday",
    load("workday-apply.html")
  )
  const labels = fields.map((f) => f.label.toLowerCase())
  assert.ok(labels.some((l) => l.includes("first name")))
  assert.ok(labels.some((l) => l.includes("last name")))
  assert.ok(labels.some((l) => l.includes("email")))
  assert.ok(labels.some((l) => l.includes("country")))
  const country = fields.find((f) => /country/i.test(f.label))
  assert.equal(country?.type, "select")
  assert.ok(
    country?.options?.some((o) => /united states/i.test(o))
  )
})
