/**
 * Parcel module id: jjbI7
 * Resolved path: src/store/workday-signup-info.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/storage -> 9RCRe  =>  @plasmohq/storage.js
 *   ~utils/workday-signup-password -> 4o1kC  =>  src/utils/workday-signup-password.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "WORKDAY_SIGNUP_INFORMATION_STORAGE_KEY", () => a), n.export(r,
    "WORKDAY_SIGNUP_PASSWORD_REQUIREMENTS_ERROR", () => l), n.export(r,
    "getWorkdaySignupInformation", () => c), n.export(r, "saveWorkdaySignupInformation", () => d), n
  .export(r, "clearWorkdaySignupInformation", () => f), n.export(r,
    "getWorkdaySignupPasswordLocalUpdateAction", () => p), n.export(r,
    "hasValidWorkdaySignupInformation", () => m);
var o = e("@plasmohq/storage"),
  i = e("~utils/workday-signup-password");
let a = "WORKDAY_SIGNUP_INFORMATION",
  l = "Password does not meet Workday requirements.",
  s = new o.Storage({
    area: "local"
  }),
  u = e => {
    if (!e || "object" != typeof e) return !1;
    let t = e;
    return "string" == typeof t.password && "number" == typeof t.updatedAt && Object.keys(t).every(
      e => "password" === e || "updatedAt" === e)
  },
  c = async (e = s) => {
    let t = await e.get(a);
    return u(t) ? t : null
  }, d = async ({
    password: e
  }, t = {}) => {
    if (!(0, i.validateWorkdayPassword)(e).isValid) throw Error(l);
    let r = t.storage ?? s,
      n = t.now ?? Date.now;
    await r.set(a, {
      password: e,
      updatedAt: n()
    })
  }, f = async (e = s) => {
      await e.remove(a)
    }, p = ({
      password: e,
      isLoaded: t,
      isTouched: r
    }) => (0, i.shouldValidateWorkdayPasswordOnUpdate)(e) ? "save" : t && r && 0 === e.trim()
    .length ? "clear" : "skip", m = async (e, t = s) => {
      if (!e.trim()) return !1;
      let r = await c(t);
      return !!r && (0, i.validateWorkdayPassword)(r.password).isValid
    }

