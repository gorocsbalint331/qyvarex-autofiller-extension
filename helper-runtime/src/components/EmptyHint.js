/**
 * Parcel module id: 2rRpe
 * Resolved path: components/EmptyHint.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/BasicButton -> 03leW  =>  src/components/BasicButton.js
 */

var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("react/jsx-runtime"),i=e("antd"),a=e("clsx"),l=n.interopDefault(a),s=e("~components/BasicButton"),u=n.interopDefault(s);let c="empty-hint-",d=e=>(0,o.jsx)(i.Empty,{className:(0,l.default)(c+"container",e.className),image:e.image,description:(0,o.jsx)("div",{className:c+"message",children:e?.description}),children:!!e?.buttonText&&(0,o.jsx)(u.default,{className:c+"button",onClick:e?.onClick,children:e?.buttonText})});r.default=d
