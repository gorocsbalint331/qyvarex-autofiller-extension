/**
 * Parcel module id: f7hgC
 * Resolved path: src/components/UnCheckedIcon.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   data-base64:~assets/images/line.svg -> ljIkk  =>  src/assets/inline/images/line.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("~ui/Image"),
  a = n.interopDefault(i),
  l = e("data-base64:~assets/images/line.svg"),
  s = n.interopDefault(l);
let u = () => (0, o.jsx)("div", {
  className: "unchecked-icon",
  children: (0, o.jsx)(a.default, {
    preview: !1,
    src: s.default,
    height: 12,
    width: 12,
    style: {
      minWidth: 12,
      minHeight: 12
    }
  })
});
r.default = u

