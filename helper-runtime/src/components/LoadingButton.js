/**
 * Parcel module id: 3KGxk
 * Resolved path: src/components/LoadingButton.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react/jsx-runtime"),
  o = e("antd"),
  i = e("react");
let a = ({
  loading: e,
  children: t,
  ...r
}) => {
  let [a, l] = (0, i.useState)("");
  return (0, i.useEffect)(() => {
    let t;
    return e ? t = setInterval(() => {
      l(e => e.length >= 3 ? "." : e + ".")
    }, 500) : l(""), () => {
      t && clearInterval(t)
    }
  }, [e]), (0, n.jsxs)(o.Button, {
    ...r,
    children: [t, e ? a : ""]
  })
};
r.default = a

