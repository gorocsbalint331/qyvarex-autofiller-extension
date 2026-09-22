/**
 * Parcel module id: agE4u
 * Resolved path: src/core/xpath.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

function o(e) {
  return -1 === e.indexOf('"') ? `"${e}"` : -1 === e.indexOf("'") ? `'${e}'` :
    `concat('${e.replace(/'/g,"',\"'\",'")}')`
}

function i(e, t) {
  return document.evaluate(e, t || document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue
}

function a(e, t = document) {
  return null == t || void 0 === t ? null : document.evaluate(e, t, null, XPathResult
    .FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}

function l(e) {
  let t = e.match(/^([^\.]+?)(?:\s+\.|$)/),
    r = t ? t[1].trim() : e.trim();
  return r
}

function s(e, t = document, r = 0) {
  try {
    let n = document.evaluate(e, t, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    if (n.snapshotLength <= r) return null;
    return n.snapshotItem(r)
  } catch (t) {
    return console.error(`XPath error for query "${e}" with index ${r}:`, t), null
  }
}

function u(e, t) {
  let r = document.evaluate(e, t || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null),
    n = [];
  for (let e = 0; e < r.snapshotLength; e++) n.push(r.snapshotItem(e));
  return n
}

function c(e, t = document) {
  if (!t) return [];
  let r = document.evaluate(e, t, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null),
    n = [];
  for (let e = 0; e < r.snapshotLength; e++) n.push(r.snapshotItem(e));
  return n
}

function d(e, t) {
  let r = u(e, t);
  return r.find(e => null !== e.offsetParent)
}
n.defineInteropFlag(r), n.export(r, "escapeXPath", () => o), n.export(r, "getFirstOrderedNode",
  () => i), n.export(r, "getFirstOrderedNodeSafe", () => a), n.export(r, "getExactText", () => l), n
  .export(r, "getFirstOrderedNodeByIndex", () => s), n.export(r, "getOrderedNodes", () => u), n
  .export(r, "getOrderedNodesSafe", () => c), n.export(r, "getFirstVisibleNode", () => d), n.export(
    r, "formatXpathString", () => f), n.export(r, "getXpathEndsWith", () => p), n.export(r,
    "getXpathContainsText", () => m), n.export(r, "getXpathMatchText", () => h);
let f = e => e.replace(/"/g, '\\"').replace(/'/g, "\\'"),
  p = (e, t) => `substring(@${e}, string-length(@${e}) - string-length("${t}") +1) = "${t}"`,
  m = e =>
  `contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), ${o(e).toLowerCase()})`,
  h = e =>
  `translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = ${o(e).toLowerCase()}`

