// @ts-nocheck
/**
 * Scrape job title / description / company from the current page via XPath rules.
 */
import * as matchPatterns from "@webext-core/match-patterns"
import {
  getFirstOrderedNode
} from "./xpath.ts"
import * as scrapingRulesModule from "./scraping-rules.json.js"

const scrapingRulesInterop = { default: scrapingRulesModule?.default ?? scrapingRulesModule }
let scrapingRules = scrapingRulesInterop.default?.default ?? scrapingRulesInterop.default

let compiledRules = Object.values(scrapingRules)
  .map((rule) => ({
    ...rule,
    compiledPatterns: (rule.urls || [])
      .map((urlPattern) => {
        try {
          return new matchPatterns.MatchPattern(urlPattern)
        } catch {
          return null
        }
      })
      .filter(Boolean)
  }))
  .filter((rule) => rule.compiledPatterns.length > 0)

export function scrapeJobPageData() {
  let data = {
    jobTitle: "",
    jobDescription: "",
    companyName: ""
  }
  try {
    let href = window.location.href
    let matchedRule = findMatchingRule(href)
    if (!matchedRule) {
      return {
        data,
        ruleMatched: false
      }
    }
    data.jobTitle = evaluatePath(matchedRule.jobTitlePath)
    data.companyName = evaluatePath(matchedRule.jobCompanyNamePath)
    data.jobDescription = evaluatePath(matchedRule.jobDescriptionPath, true)
    return {
      data,
      ruleMatched: true
    }
  } catch (error) {
    return (
      console.warn("[JobPageScraper] Error scraping job page:", error),
      {
        data,
        ruleMatched: false
      }
    )
  }
}

function findMatchingRule(href) {
  for (let rule of compiledRules) {
    if (rule.compiledPatterns.some((pattern) => pattern.includes(href))) return rule
  }
  return null
}

function evaluatePath(pathOrPaths, preferInnerText = false) {
  if (!pathOrPaths) return ""
  let paths = Array.isArray(pathOrPaths) ? pathOrPaths : [pathOrPaths]
  for (let path of paths) {
    try {
      let value = evaluateSinglePath(path, preferInnerText)?.trim()
      if (value) return value
    } catch {
      continue
    }
  }
  return ""
}

function parseQuotedLiteral(path) {
  let match = path.match(/^"(.*)"$/)
  return match ? match[1] : null
}

function isXPathStringFunction(path) {
  return /^(substring|substring-after|substring-before|normalize-space|concat|translate)\s*\(/.test(
    path
  )
}

function evaluateSinglePath(path, preferInnerText) {
  let literal = parseQuotedLiteral(path)
  if (null !== literal) return literal
  if (isXPathStringFunction(path)) {
    let stringResult = document.evaluate(
      path,
      document,
      null,
      XPathResult.STRING_TYPE,
      null
    )
    return stringResult.stringValue || ""
  }
  let node = getFirstOrderedNode(path)
  return node
    ? node.nodeType === Node.ATTRIBUTE_NODE
      ? node.value || ""
      : node.nodeType === Node.TEXT_NODE
        ? node.textContent || ""
        : preferInnerText && node instanceof HTMLElement
          ? node.innerText || ""
          : node.textContent || ""
    : ""
}
