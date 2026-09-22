/**
 * Parcel module id: ffRFv
 * Resolved path: zustand.js
 * Dependencies:
 *   zustand-vanilla -> ei7yf  =>  zustand-vanilla.js
 *   zustand-react -> 7OAlZ  =>  zustand-react.js
 *
 * Public zustand entry: re-exports vanilla store API + React hooks API.
 * Deobfuscated for readability; Parcel `e()` / `r` exports unchanged.
 */

var vanillaStoreApi = e("zustand-vanilla")
var reactStoreApi = e("zustand-react")

/** Re-export every named export from a module onto this package (`r`), skipping `default`. */
function reexportNamedExports(sourceModule) {
  Object.keys(sourceModule).forEach(function (exportName) {
    if (exportName === "default") return
    if (Object.prototype.hasOwnProperty.call(r, exportName)) return
    Object.defineProperty(r, exportName, {
      enumerable: true,
      get: function () {
        return sourceModule[exportName]
      }
    })
  })
}

// vanilla: createStore, …
reexportNamedExports(vanillaStoreApi)
// react: create, useStore, …
reexportNamedExports(reactStoreApi)
