/**
 * libphonenumber-js/core stub — phone formatting optional for fill.
 */
var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
n.defineInteropFlag(r)
function parsePhoneNumberFromString(raw) {
  var digits = String(raw || "").replace(/\D/g, "")
  if (!digits) return null
  return {
    number: digits,
    nationalNumber: digits,
    country: undefined,
    formatNational: function () {
      return digits
    },
    formatInternational: function () {
      return "+" + digits
    },
    isValid: function () {
      return digits.length >= 7
    }
  }
}
r.parsePhoneNumberFromString = parsePhoneNumberFromString
r.parsePhoneNumber = parsePhoneNumberFromString
r.default = {
  parsePhoneNumberFromString: parsePhoneNumberFromString,
  parsePhoneNumber: parsePhoneNumberFromString
}
n.export(r, "parsePhoneNumberFromString", function () {
  return parsePhoneNumberFromString
})
n.export(r, "parsePhoneNumber", function () {
  return parsePhoneNumberFromString
})
