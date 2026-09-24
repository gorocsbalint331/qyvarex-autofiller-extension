// @ts-nocheck
/**
 * Lightweight type / emptiness helpers and English-noun heuristics.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

function getType(value) {
  let typeName = Object.prototype.toString
    .call(value)
    .match(/^\[object (.*)\]$/)[1]
    .toLowerCase()
  return "string" === typeName && "object" == typeof value
    ? "object"
    : null === value
      ? "null"
      : void 0 === value
        ? "undefined"
        : typeName
}

function isString(value) {
  return "string" === getType(value)
}

function isObject(value) {
  return "object" === getType(value)
}

function isArray(value) {
  return "array" === getType(value)
}

function isFunction(value) {
  return "function" === getType(value)
}

function isEmpty(value) {
  return (
    null == value ||
    "" === value ||
    (isObject(value)
      ? 0 === Object.keys(value).length
      : !!isArray(value) && 0 === value.length)
  )
}

function isEmptyValue(value) {
  return (
    null == value ||
    (Array.isArray(value)
      ? value.every((item) => isEmptyValue(item))
      : "string" == typeof value && "" === value.trim())
  )
}

let printableCharPattern =
  /[A-Za-z0-9\s\p{Punctuation}\p{Symbol}\u25CF\u2013\u2014\u2026\u02c6]/u
let nounEngThreshold = 90

function isNounEng(text) {
  if (!text) return false
  let printableCount = 0
  let length = text.length
  if (0 === length) return false
  for (let index = 0; index < length; index++) {
    let char = text.charAt(index)
    printableCharPattern.test(char) && printableCount++
  }
  let printablePercent = (printableCount / length) * 100
  return printablePercent < nounEngThreshold
}

export {
  isEmpty,
  isEmptyValue,
  isFunction,
  isNounEng,
  isObject,
  isString,
}
