/**
 * Parcel module id: b1t9t
 * Resolved path: core/jobPageScraper.js (oracle restore)
 * Dependencies:
 *   ./scraping-rules.json -> eLeKC  =>  scraping-rules.json.js
 *   ./xpath -> agE4u  =>  _tilde_core/xpath.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @webext-core/match-patterns -> cAu0r  =>  @webext-core/match-patterns.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "scrapeJobPageData", () => c);
var o = e("@webext-core/match-patterns"),
  i = e("./xpath"),
  a = e("./scraping-rules.json"),
  l = n.interopDefault(a);
let s = l.default,
  u = Object.values(s).map(e => ({
    ...e,
    compiledPatterns: (e.urls || []).map(e => {
      try {
        return new o.MatchPattern(e)
      } catch {
        return null
      }
    }).filter(Boolean)
  })).filter(e => e.compiledPatterns.length > 0);

function c() {
  let e = {
    jobTitle: "",
    jobDescription: "",
    companyName: ""
  };
  try {
    let t = window.location.href,
      r = d(t);
    if (!r) return {
      data: e,
      ruleMatched: !1
    };
    return e.jobTitle = f(r.jobTitlePath), e.companyName = f(r.jobCompanyNamePath), e
      .jobDescription = f(r.jobDescriptionPath, !0), {
        data: e,
        ruleMatched: !0
      }
  } catch (t) {
    return console.warn("[JobPageScraper] Error scraping job page:", t), {
      data: e,
      ruleMatched: !1
    }
  }
}

function d(e) {
  for (let t of u)
    if (t.compiledPatterns.some(t => t.includes(e))) return t;
  return null
}

function f(e, t = !1) {
  if (!e) return "";
  let r = Array.isArray(e) ? e : [e];
  for (let e of r) try {
    let r = h(e, t)?.trim();
    if (r) return r
  } catch {
    continue
  }
  return ""
}

function p(e) {
  let t = e.match(/^"(.*)"$/);
  return t ? t[1] : null
}

function m(e) {
  return /^(substring|substring-after|substring-before|normalize-space|concat|translate)\s*\(/.test(
    e)
}

function h(e, t) {
  let r = p(e);
  if (null !== r) return r;
  if (m(e)) {
    let t = document.evaluate(e, document, null, XPathResult.STRING_TYPE, null);
    return t.stringValue || ""
  }
  let n = (0, i.getFirstOrderedNode)(e);
  return n ? n.nodeType === Node.ATTRIBUTE_NODE ? n.value || "" : n.nodeType === Node.TEXT_NODE ? n
    .textContent || "" : t && n instanceof HTMLElement ? n.innerText || "" : n.textContent || "" :
    ""
}

