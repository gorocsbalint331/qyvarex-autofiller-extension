/**
 * Parcel module id: g8Ksi
 * Resolved path: src/components/Popups/PageConfirmPopup.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/StarRatingModal/shared -> hcTk6  =>  src/components/StarRatingModal/shared.js
 */

e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
var n = e("react/jsx-runtime"),
  o = e("antd"),
  i = e("~components/StarRatingModal/shared");
let a = ({
  open: e,
  title: t,
  content: r,
  confirmText: a,
  cancelText: l,
  onConfirm: s,
  onCancel: u,
  getContainer: c,
  zIndex: d
}) => (0, n.jsxs)(o.Modal, {
  open: e,
  title: null,
  footer: null,
  mask: !0,
  closable: !0,
  closeIcon: (0, n.jsx)(i.CloseIcon, {}),
  centered: !0,
  onCancel: u,
  destroyOnClose: !0,
  width: 480,
  zIndex: d,
  getContainer: c,
  styles: i.RATING_MODAL_STYLES,
  children: [(0, n.jsxs)(o.Flex, {
    align: "center",
    justify: "center",
    vertical: !0,
    gap: 12,
    style: {
      paddingTop: 64
    },
    children: [(0, n.jsx)("span", {
      style: i.TITLE_STYLE,
      children: t
    }), (0, n.jsx)("span", {
      style: i.BODY_TEXT_STYLE,
      children: r
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
      style: i.DEFAULT_BUTTON_STYLE,
      onClick: u,
      children: l
    }), (0, n.jsx)(o.Button, {
      type: "primary",
      style: i.PRIMARY_BUTTON_STYLE,
      onClick: s,
      children: a
    })]
  })]
});
r.default = a

