/**
 * Parcel module id: 5Q00I
 * Resolved path: src/contents/shared/css-assets.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "resolveCssAssetUrls", () => a);
let o = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/g,
  i = /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i,
  a = (e, t) => e.replace(o, (e, r, n, o) => {
    let a = (r ?? n ?? o ?? "").trim();
    if (!a || i.test(a) || a.startsWith("var(")) return e;
    try {
      return `url("${new URL(a,t).href}")`
    } catch {
      return e
    }
  })

