/**
 * Parcel module id: eUGsX
 * Resolved path: src/components/Popups/FeedbackPopup/Button.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/feedback.svg -> 4zTHa  =>  src/assets/inline/images/feedback.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~store/feedback -> l2vHp  =>  src/store/feedback.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => d);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/feedback.svg"),
  l = n.interopDefault(a),
  s = e("~store/feedback"),
  u = e("~ui/Image"),
  c = n.interopDefault(u);

function d() {
  let e = (0, s.useFeedbackStore)(e => e.setOpenFeedbackPopup);
  return (0, o.jsxs)(i.Button, {
    id: "feedback-entry",
    onClick: () => e(!0),
    children: [(0, o.jsx)(c.default, {
      src: l.default,
      alt: "logo-image",
      preview: !1
    }), "Feedback"]
  })
}

