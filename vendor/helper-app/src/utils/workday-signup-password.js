/**
 * Parcel module id: 4o1kC
 * Resolved path: src/utils/workday-signup-password.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "validateWorkdayPassword", () => a), n.export(r,
  "isValidWorkdayPassword", () => l), n.export(r, "shouldValidateWorkdayPasswordOnUpdate", () =>
  s);
let o = /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?`~]/,
  i = [{
    id: "minLength",
    label: "At least 12 characters",
    isMet: e => e.length >= 12
  }, {
    id: "uppercase",
    label: "Uppercase letter",
    isMet: e => /[A-Z]/.test(e)
  }, {
    id: "lowercase",
    label: "Lowercase letter",
    isMet: e => /[a-z]/.test(e)
  }, {
    id: "number",
    label: "Number",
    isMet: e => /\d/.test(e)
  }, {
    id: "specialCharacter",
    label: "Special character",
    isMet: e => o.test(e)
  }],
  a = e => {
    let t = i.map(t => ({
      id: t.id,
      label: t.label,
      isMet: t.isMet(e)
    }));
    return {
      isValid: t.every(e => e.isMet),
      requirements: t
    }
  },
  l = e => a(e).isValid,
  s = e => e.trim().length > 0

