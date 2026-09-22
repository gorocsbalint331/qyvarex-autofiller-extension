/**
 * Parcel module id: 6eqE8
 * Resolved path: src/components/CustomRate.js
 * Dependencies:
 *   ../BasicButton -> 03leW  =>  src/components/BasicButton.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("clsx"),
  l = n.interopDefault(a),
  s = e("react"),
  u = e("../BasicButton"),
  c = n.interopDefault(u);
let d = ({
  scores: e,
  className: t,
  buttonClassName: r,
  onSelect: n
}) => {
  let [a, u] = (0, s.useState)(void 0), [d, f] = (0, s.useState)(!1), [p, m] = (0, s.useState)(
    void 0);
  return (0, o.jsx)(i.Flex, {
    gap: 8,
    className: t,
    onMouseLeave: () => {
      f(!1)
    },
    onMouseEnter: () => {
      f(!0)
    },
    children: e.map(e => (0, o.jsx)(c.default, {
      className: (0, l.default)("rate-button", "rate-button-overwrite", r, {
        "rate-button-hightlight": d ? void 0 !== a && e <= a : void 0 !== p && e <=
          p
      }),
      onClick: () => {
        m(e), n && n(e)
      },
      onMouseEnter: () => {
        u(e)
      },
      children: e
    }, e))
  })
};
r.default = d

