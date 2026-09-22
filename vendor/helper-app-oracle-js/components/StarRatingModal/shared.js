/**
 * Parcel module id: hcTk6
 * Resolved path: components/StarRatingModal/shared.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "RATING_MODAL_STYLES", () => i), n.export(r,
  "PRIMARY_BUTTON_STYLE", () => a), n.export(r, "DEFAULT_BUTTON_STYLE", () => l), n.export(r,
  "TITLE_STYLE", () => s), n.export(r, "BODY_TEXT_STYLE", () => u), n.export(r, "CloseIcon", () =>
  c);
var o = e("react/jsx-runtime");
let i = {
    content: {
      padding: 0,
      borderRadius: "0 24px 24px 24px",
      overflow: "hidden"
    },
    body: {
      padding: "0 24px 24px 24px"
    },
    close: {
      top: 8,
      right: 8,
      color: "#000"
    }
  },
  a = {
    flex: 1,
    height: 44,
    borderRadius: 8,
    backgroundColor: "#00F0A0",
    borderColor: "#00F0A0",
    color: "#000",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: 14,
    boxShadow: "none"
  },
  l = {
    flex: 1,
    height: 44,
    borderRadius: 8,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: 14
  },
  s = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "24px",
    textAlign: "center",
    color: "#000"
  },
  u = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "20px",
    textAlign: "center",
    color: "#000"
  };

function c() {
  return (0, o.jsx)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, o.jsx)("path", {
      d: "M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5",
      stroke: "#000",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  })
}

