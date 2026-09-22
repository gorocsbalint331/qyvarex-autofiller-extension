/**
 * lodash-es shim — re-export extracted single-function modules we need.
 * The full lodash-es.js barrel references hundreds of missing ./add.js files.
 *
 * Dependencies:
 *   ./omit.js -> 82Ckp  =>  omit.js
 *   ./isEqual.js -> (root)  =>  isEqual.js
 *   ./debounce.js -> 6daGQ  =>  debounce.js
 *   ./pick.js -> (root)  =>  pick.js
 *   ./isEmpty.js -> (root)  =>  isEmpty.js
 *   ./flatten.js -> (root)  =>  flatten.js
 *   ./compact.js -> (root)  =>  compact.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */
var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
n.defineInteropFlag(r)

function load(name, fallback) {
  try {
    var mod = e(name)
    return mod && (mod.default !== undefined ? mod.default : mod)
  } catch {
    return fallback
  }
}

var omit = load("./omit.js", function (obj) {
  var keys = Array.prototype.slice.call(arguments, 1).flat()
  var out = Object.assign({}, obj)
  for (var i = 0; i < keys.length; i++) delete out[keys[i]]
  return out
})
var isEqual = load("./isEqual.js", function (a, b) {
  try {
    return JSON.stringify(a) === JSON.stringify(b)
  } catch {
    return a === b
  }
})
var debounce = load("./debounce.js", function (fn) {
  return fn
})
var pick = load("./pick.js", function (obj, keys) {
  var out = {}
  for (var i = 0; i < keys.length; i++) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, keys[i])) out[keys[i]] = obj[keys[i]]
  }
  return out
})
var isEmpty = load("./isEmpty.js", function (v) {
  if (v == null) return true
  if (Array.isArray(v) || typeof v === "string") return v.length === 0
  if (typeof v === "object") return Object.keys(v).length === 0
  return false
})
var flatten = load("./flatten.js", function (arr) {
  return Array.isArray(arr) ? arr.flat() : []
})
var compact = load("./compact.js", function (arr) {
  return Array.isArray(arr) ? arr.filter(Boolean) : []
})

n.export(r, "omit", function () {
  return omit
})
n.export(r, "isEqual", function () {
  return isEqual
})
n.export(r, "debounce", function () {
  return debounce
})
n.export(r, "pick", function () {
  return pick
})
n.export(r, "isEmpty", function () {
  return isEmpty
})
n.export(r, "flatten", function () {
  return flatten
})
n.export(r, "compact", function () {
  return compact
})
r.default = {
  omit: omit,
  isEqual: isEqual,
  debounce: debounce,
  pick: pick,
  isEmpty: isEmpty,
  flatten: flatten,
  compact: compact
}
// Also assign enumerable for namespace import style: a.omit
r.omit = omit
r.isEqual = isEqual
r.debounce = debounce
r.pick = pick
r.isEmpty = isEmpty
r.flatten = flatten
r.compact = compact
