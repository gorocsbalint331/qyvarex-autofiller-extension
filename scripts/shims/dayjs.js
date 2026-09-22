/**
 * Minimal dayjs shim when full extract is awkward; prefer real extract if present.
 * Provides enough API for ATS answer date formatting.
 */
var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
n.defineInteropFlag(r)

function Day(input, format, strict) {
  this._d = input ? new Date(input) : new Date()
  if (isNaN(this._d.getTime()) && typeof input === "string" && format) {
    this._d = parseWithFormat(input, format) || new Date(NaN)
  }
}
function parseWithFormat(str, fmt) {
  // very small subset: YYYY-MM-DD, MM/DD/YYYY, YYYY
  var s = String(str).trim()
  var m
  if ((m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/))) {
    return new Date(+m[1], +m[2] - 1, +m[3])
  }
  if ((m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/))) {
    return new Date(+m[3], +m[1] - 1, +m[2])
  }
  if ((m = s.match(/^(\d{4})$/))) return new Date(+m[1], 0, 1)
  return null
}
Day.prototype.isValid = function () {
  return !isNaN(this._d.getTime())
}
Day.prototype.year = function () {
  return this._d.getFullYear()
}
Day.prototype.month = function () {
  return this._d.getMonth()
}
Day.prototype.date = function () {
  return this._d.getDate()
}
Day.prototype.format = function (fmt) {
  if (!this.isValid()) return "Invalid Date"
  var y = this.year()
  var m = String(this.month() + 1).padStart(2, "0")
  var d = String(this.date()).padStart(2, "0")
  fmt = fmt || "YYYY-MM-DD"
  return fmt
    .replace(/YYYY/g, String(y))
    .replace(/MM/g, m)
    .replace(/DD/g, d)
    .replace(/M/g, String(this.month() + 1))
    .replace(/D/g, String(this.date()))
}
Day.prototype.toDate = function () {
  return this._d
}
Day.prototype.extend = function () {
  return this
}

function dayjs(input, format, strict) {
  return new Day(input, format, strict)
}
dayjs.extend = function () {}
dayjs().constructor = Day

r.default = dayjs
n.export(r, "default", function () {
  return dayjs
})
