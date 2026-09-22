/**
 * Parcel module id: 948zT
 * Resolved path: src/components/StarRatingModal.js
 * Dependencies:
 *   ./shared -> hcTk6  =>  src/components/StarRatingModal/shared.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/logo_bird.svg -> j0HnG  =>  src/assets/inline/images/logo_bird.svg__j0HnG.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/Popups/CriticizeReviewsModal -> W8A6P  =>  src/components/Popups/CriticizeReviewsModal.js
 *   ~components/Popups/GoodReviewsModel -> 3lzkO  =>  src/components/Popups/GoodReviewsModel.js
 *   ~store/feedback -> l2vHp  =>  src/store/feedback.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 *   ~utils/starRating -> imWVP  =>  src/utils/starRating.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => v);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/logo_bird.svg"),
  l = n.interopDefault(a),
  s = e("react"),
  u = e("~components/Popups/CriticizeReviewsModal"),
  c = n.interopDefault(u),
  d = e("~components/Popups/GoodReviewsModel"),
  f = n.interopDefault(d),
  p = e("~store/feedback"),
  m = e("~ui/Image"),
  h = n.interopDefault(m),
  g = e("~utils/starRating"),
  b = e("~utils/trace"),
  y = e("./shared");

function v() {
  let e = (0, p.useFeedbackStore)(e => e.showStarRatingModal),
    t = (0, p.useFeedbackStore)(e => e.setShowStarRatingModal),
    [r, n] = (0, s.useState)(!1),
    [a, u] = (0, s.useState)(!1),
    [d, m] = (0, s.useState)(!1);
  (0, s.useEffect)(() => {
    e && (m(!1), (0, b.trackEvent)("autofill_starrating_exposure", {
      current_url: window.location.href
    }))
  }, [e]);
  let v = async () => {
    t(!1), d || await (0, g.recordStarRatingNoClick)()
  };
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(i.Modal, {
      open: e && !r && !a,
      title: null,
      footer: null,
      centered: !0,
      closable: !0,
      closeIcon: (0, o.jsx)(y.CloseIcon, {}),
      onCancel: v,
      mask: !0,
      maskClosable: !1,
      destroyOnClose: !0,
      width: 480,
      styles: y.RATING_MODAL_STYLES,
      children: (0, o.jsxs)(i.Flex, {
        align: "center",
        justify: "center",
        vertical: !0,
        gap: 12,
        style: {
          paddingTop: 64,
          paddingBottom: 32
        },
        children: [(0, o.jsx)(h.default, {
          src: l.default,
          width: 48,
          height: 48,
          preview: !1,
          alt: "Jobright"
        }), (0, o.jsx)("span", {
          style: {
            ...y.TITLE_STYLE,
            textTransform: "capitalize",
            maxWidth: 354
          },
          children: "How Was Your Jobright Autofill Experience?"
        }), (0, o.jsx)(i.Rate, {
          className: "star-rating-modal-rate",
          style: {
            fontSize: 32,
            color: "#FDA700"
          },
          character: (0, o.jsx)(w, {}),
          onChange: async e => {
            m(!0), await (0, g.recordStarRatingClicked)(), (0, b.trackEvent)(
              "autofill_starrating_click", {
                current_url: window.location.href,
                rating: e
              }), 5 === e ? n(!0) : e > 0 && u(!0)
          }
        })]
      })
    }), (0, o.jsx)(f.default, {
      open: r,
      onCancel: () => {
        n(!1), t(!1)
      },
      onConfirm: () => {
        n(!1), t(!1)
      }
    }), (0, o.jsx)(c.default, {
      open: a,
      onCancel: () => {
        u(!1), t(!1)
      },
      onConfirm: () => {
        u(!1), t(!1)
      }
    })]
  })
}

function w() {
  return (0, o.jsx)("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, o.jsx)("path", {
      d: "M10.9679 0.800065C11.303 -0.266687 12.697 -0.266689 13.032 0.800063L15.1453 7.52891C15.2956 8.00726 15.7106 8.32897 16.1774 8.32897H22.9079C23.9757 8.32897 24.4067 9.81848 23.5297 10.4777L18.1704 14.5059C17.771 14.8061 17.6037 15.3563 17.7602 15.8546L19.827 22.4353C20.1654 23.5129 19.0369 24.4332 18.1731 23.7839L12.6217 19.6113C12.2479 19.3303 11.7521 19.3303 11.3782 19.6113L5.8268 23.7839C4.96305 24.4332 3.83455 23.5129 4.17299 22.4353L6.23978 15.8546C6.39627 15.3563 6.2289 14.8061 5.82951 14.5059L0.470309 10.4777C-0.406745 9.81848 0.0242682 8.32897 1.09208 8.32897H7.82257C8.28938 8.32897 8.70438 8.00726 8.85461 7.52891L10.9679 0.800065Z",
      fill: "currentColor"
    })
  })
}

