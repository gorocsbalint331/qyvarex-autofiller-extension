/**
 * Parcel module id: W8A6P
 * Resolved path: src/components/Popups/CriticizeReviewsModal.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/StarRatingModal/shared -> hcTk6  =>  src/components/StarRatingModal/shared.js
 *   ~store/feedback -> l2vHp  =>  src/store/feedback.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react/jsx-runtime"),
  o = e("antd"),
  i = e("react"),
  a = e("~components/StarRatingModal/shared"),
  l = e("~store/feedback"),
  s = e("~utils/trace");
let u = e => {
  let t = (0, l.useFeedbackStore)(e => e.setOpenFeedbackPopup);
  return (0, i.useEffect)(() => {
    e.open && (0, s.trackEvent)("autofill_starrating_popup_exposure", {
      current_url: window.location.href,
      type: "feedback"
    })
  }, [e.open]), (0, n.jsxs)(o.Modal, {
    open: e.open,
    title: null,
    footer: null,
    mask: !0,
    closable: !0,
    closeIcon: (0, n.jsx)(a.CloseIcon, {}),
    centered: !0,
    onCancel: e.onCancel,
    destroyOnClose: !0,
    width: 480,
    styles: a.RATING_MODAL_STYLES,
    children: [(0, n.jsxs)(o.Flex, {
      align: "center",
      justify: "center",
      vertical: !0,
      gap: 12,
      style: {
        paddingTop: 64
      },
      children: [(0, n.jsx)("span", {
        style: a.TITLE_STYLE,
        children: "Thanks for your rating!"
      }), (0, n.jsx)("span", {
        style: a.BODY_TEXT_STYLE,
        children: "Could you tell us a little more? Your feedback helps us improve Autofill for you."
      })]
    }), (0, n.jsxs)(o.Flex, {
      align: "center",
      justify: "center",
      gap: 12,
      style: {
        marginTop: 24
      },
      children: [(0, n.jsx)(o.Button, {
        type: "default",
        style: a.DEFAULT_BUTTON_STYLE,
        onClick: e.onCancel,
        children: "Cancel"
      }), (0, n.jsx)(o.Button, {
        type: "primary",
        style: a.PRIMARY_BUTTON_STYLE,
        onClick: () => {
          t(!0), (0, s.trackEvent)("autofill_starrating_popup_click", {
            current_url: window.location.href,
            type: "feedback"
          }), e.onCancel()
        },
        children: "Give Feedback"
      })]
    })]
  })
};
r.default = u

