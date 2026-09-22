/**
 * Parcel module id: 3lzkO
 * Resolved path: src/components/Popups/GoodReviewsModel.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/goodstar.svg -> jNnCw  =>  src/assets/inline/images/goodstar.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/StarRatingModal/shared -> hcTk6  =>  src/components/StarRatingModal/shared.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/goodstar.svg"),
  l = n.interopDefault(a),
  s = e("react"),
  u = e("~components/StarRatingModal/shared"),
  c = e("~ui/Image"),
  d = n.interopDefault(c),
  f = e("~utils/trace");
let p = e => ((0, s.useEffect)(() => {
  e.open && (0, f.trackEvent)("autofill_starrating_popup_exposure", {
    current_url: window.location.href,
    type: "webstore"
  })
}, [e.open]), (0, o.jsxs)(i.Modal, {
  open: e.open,
  title: null,
  footer: null,
  mask: !0,
  closable: !0,
  closeIcon: (0, o.jsx)(u.CloseIcon, {}),
  centered: !0,
  onCancel: e.onCancel,
  destroyOnClose: !0,
  width: 480,
  styles: u.RATING_MODAL_STYLES,
  children: [(0, o.jsxs)(i.Flex, {
    align: "center",
    justify: "center",
    vertical: !0,
    gap: 12,
    style: {
      paddingTop: 40
    },
    children: [(0, o.jsx)(d.default, {
      src: l.default,
      height: 96,
      width: 96,
      preview: !1
    }), (0, o.jsx)("span", {
      style: u.TITLE_STYLE,
      children: "Leave a Quick Review"
    }), (0, o.jsx)("span", {
      style: u.BODY_TEXT_STYLE,
      children: "Your feedback means a lot to us. Could you leave a quick review on the Chrome Web Store?"
    })]
  }), (0, o.jsxs)(i.Flex, {
    align: "center",
    justify: "center",
    gap: 12,
    style: {
      marginTop: 24
    },
    children: [(0, o.jsx)(i.Button, {
      type: "default",
      style: u.DEFAULT_BUTTON_STYLE,
      onClick: e.onCancel,
      children: "Maybe Later"
    }), (0, o.jsx)(i.Button, {
      type: "primary",
      style: u.PRIMARY_BUTTON_STYLE,
      onClick: () => {
        (0, f.trackEvent)("autofill_starrating_popup_click", {
          current_url: window.location.href,
          type: "webstore"
        }), window.open(
          "https://chromewebstore.google.com/detail/jobright-autofill-\u2013-insta/odcnpipkhjegpefkfplmedhmkmmhmoko/reviews"
          ), e.onConfirm()
      },
      children: "Yes, I'd love to"
    })]
  })]
}));
r.default = p

