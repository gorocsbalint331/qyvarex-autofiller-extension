/**
 * Parcel ESM interop helpers (linker runtime).
 * Specifier: @parcel/transformer-js/src/esmodule-helpers.js
 *
 * Kept as a shim so helper-runtime/ does not need an @parcel/ tree.
 */

r.interopDefault = function (e) {
  return e && e.__esModule ? e : { default: e }
}
r.defineInteropFlag = function (e) {
  Object.defineProperty(e, "__esModule", { value: true })
}
r.exportAll = function (e, t) {
  return (
    Object.keys(e).forEach(function (r) {
      if ("default" === r || "__esModule" === r || t.hasOwnProperty(r)) return
      Object.defineProperty(t, r, {
        enumerable: true,
        get: function () {
          return e[r]
        },
      })
    }),
    t
  )
}
r.export = function (e, t, r) {
  Object.defineProperty(e, t, { enumerable: true, get: r })
}
