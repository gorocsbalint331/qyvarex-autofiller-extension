/**
 * Parcel module id: 52vOt
 * Resolved path: src/api/autofill-signup-information.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "SIGNUP_REGISTRATION_EMAIL_SECTION", () => o), n.export(r,
  "resolveSignupRegistrationEmail", () => i), n.export(r,
  "buildSignupRegistrationEmailUpdateBody", () => a);
let o = "regenerationEmail",
  i = e => {
    let t = e?.regenerationEmail;
    return "string" == typeof t && t.trim() ? t : ""
  },
  a = e => ({
    updateSection: o,
    structuredData: {
      regenerationEmail: e.trim()
    }
  })

