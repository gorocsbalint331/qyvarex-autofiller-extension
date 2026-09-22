/**
 * Parcel module id: 03WOh
 * Resolved path: src/components/LoadingIcon.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   data-base64:~assets/images/loading.png -> jmvQR  =>  src/assets/inline/images/loading.png.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("~ui/Image"),
  a = n.interopDefault(i),
  l = e("data-base64:~assets/images/loading.png"),
  s = n.interopDefault(l);
let u = () => (0, o.jsx)("div", {
  className: "loading-icon",
  children: (0, o.jsx)(a.default, {
    className: "spin-loading",
    src: s.default,
    height: 12,
    width: 12,
    style: {
      minWidth: 12,
      minHeight: 12
    },
    preview: !1
  })
});
r.default = u

