/**
 * Parcel module id: eP3QC
 * Resolved path: components/Popups/FeedbackPopup.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   data-base64:~assets/images/feedback.svg -> 3iyAr  =>  data-base64__tilde_assets/images/feedback.svg__3iyAr.js
 *   data-base64:~assets/images/logo.svg -> haPwi  =>  data-base64__tilde_assets/images/logo.svg__haPwi.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/BasicButton -> 03leW  =>  _tilde_components/BasicButton.js
 *   ~components/CustomRate -> 6eqE8  =>  _tilde_components/CustomRate.js
 *   ~constants -> 6VEjR  =>  _tilde_constants.js
 *   ~contents -> d4tj7  =>  _tilde_contents.js
 *   ~store/feedback -> l2vHp  =>  _tilde_store/feedback.js
 *   ~ui/Image -> 4wCrP  =>  _tilde_/ui/Image.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("clsx"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/feedback.svg"),
  u = n.interopDefault(s),
  c = e("data-base64:~assets/images/logo.svg"),
  d = n.interopDefault(c),
  f = e("react");
n.interopDefault(f);
var p = e("@plasmohq/messaging"),
  m = e("~components/BasicButton"),
  h = n.interopDefault(m),
  g = e("~components/CustomRate"),
  b = n.interopDefault(g),
  y = e("~constants"),
  v = e("~contents"),
  w = e("~store/feedback"),
  S = e("~ui/Image"),
  E = n.interopDefault(S);
let x = "feedback-popup",
  C = [{
    label: "Fields were not filled correctly",
    value: 1
  }, {
    label: "Some fields were not detected",
    value: 2
  }, {
    label: "The process took too long",
    value: 3
  }, {
    label: "Not enough sites were supported",
    value: 4
  }, {
    label: "The pop-up appeared when it shouldn't have",
    value: 6
  }, {
    label: "Edit with AI was not helpful",
    value: 7
  }].sort(() => Math.random() - .5).concat({
    label: "Other",
    value: 5
  }),
  A = ({
    jobId: e,
    configs: t = {
      type: "checkbox",
      options: C
    },
    variant: r = "full"
  }) => {
    let n = (0, w.useFeedbackStore)(e => e.openFeedbackPopup),
      a = (0, w.useFeedbackStore)(e => e.setOpenFeedbackPopup),
      [s] = (0, i.Form).useForm(),
      [c, f] = (0, i.message).useMessage({
        getContainer: () => document.getElementById(v.HOST_ID)?.shadowRoot
      }),
      m = () => {
        a(!1), s.resetFields()
      },
      g = t => (0, p.sendToBackground)({
        name: "postPluginFeedback",
        body: {
          jobId: e,
          pageUrl: window.location.href,
          ...t
        }
      }).then(() => {
        c.info({
          duration: 5,
          icon: (0, o.jsx)(o.Fragment, {}),
          content: "Feedback received, thank you!"
        }), a(!1)
      }),
      S = t?.type === "radio" ? i.Radio : i.Checkbox,
      A = "modal-only" !== r,
      k = "button-only" !== r;
    return (0, o.jsxs)(o.Fragment, {
      children: [k && f, A && (0, o.jsxs)(i.Button, {
        id: "feedback-entry",
        onClick: () => a(!0),
        children: [(0, o.jsx)(E.default, {
          src: u.default,
          alt: "logo-image",
          preview: !1
        }), "Feedback"]
      }), k && (0, o.jsx)(i.Modal, {
        open: n,
        title: null,
        footer: null,
        zIndex: y.HELPER_MODAL_Z_INDEX,
        className: x,
        rootClassName: x + "-root",
        closeIcon: !1,
        getContainer: () => document.getElementById(v.HOST_ID)?.shadowRoot,
        destroyOnClose: !0,
        onCancel: m,
        keyboard: !0,
        width: 480,
        children: (0, o.jsxs)(i.Flex, {
          vertical: !0,
          gap: 16,
          children: [(0, o.jsx)(E.default, {
            src: d.default,
            height: 24,
            width: 96,
            alt: "logo-image",
            draggable: !1,
            preview: !1,
            style: {
              userSelect: "none",
              pointerEvents: "none"
            }
          }), (0, o.jsxs)(i.Form, {
            form: s,
            name: "feedback-form",
            layout: "vertical",
            onFinish: g,
            children: [(0, o.jsx)(i.Form.Item, {
              name: "score",
              label: "How would you rate your overall experience with our Autofill Plugin?",
              rules: [{
                required: !0,
                message: "Please select at least one option to proceed"
              }],
              children: (0, o.jsxs)(i.Flex, {
                vertical: !0,
                gap: 8,
                children: [(0, o.jsx)(b.default, {
                  buttonClassName: "feedback-button",
                  scores: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  onSelect: e => {
                    s.setFieldValue("score", e)
                  }
                }), (0, o.jsxs)(i.Flex, {
                  className: "feedback-scale",
                  children: [(0, o.jsx)("span", {
                    children: "Not Satisfied"
                  }), (0, o.jsx)("span", {
                    children: "Very Satisfied"
                  })]
                })]
              })
            }), (0, o.jsx)(i.Divider, {
              className: x + "-divider"
            }), (0, o.jsx)(i.Form.Item, {
              shouldUpdate: !0,
              children: () => (0, o.jsx)(i.Form.Item, {
                name: "reasons",
                label: "What aspects of the autofill experience did not meet your expectations?",
                rules: [{
                  required: !0,
                  message: "Please select at least one option to proceed"
                }],
                children: (0, o.jsx)(S.Group, {
                  className: x + "-radio-group",
                  children: t?.options?.map(e => o.jsx(S, {
                    value: e.value,
                    className: x + "-radio-item",
                    children: e.label
                  }, e.value))
                })
              })
            }), (0, o.jsx)(i.Divider, {
              className: x + "-divider"
            }), (0, o.jsx)(i.Form.Item, {
              name: "description",
              label: "Any specific feedback on how we can improve for you?",
              rules: [{
                required: !0,
                message: "Please describe your experience or share your ideas."
              }],
              children: (0, o.jsx)(i.Input.TextArea, {
                placeholder: "The more specific you are, the better we can address your feedback.",
                className: (0, l.default)(x + "-textarea", x +
                  "-input", x + "-radio-item-extra")
              })
            }), (0, o.jsx)(i.Form.Item, {
              className: x + "-form-action-button-group",
              children: (0, o.jsxs)(i.Flex, {
                gap: 12,
                justify: "center",
                children: [(0, o.jsx)(h.default, {
                  className: (0, l.default)(x + "-button", x +
                    "-button-cancel"),
                  onClick: m,
                  children: "Cancel"
                }), (0, o.jsx)(h.default, {
                  className: (0, l.default)(x + "-button", x +
                    "-button-submit"),
                  onClick: () => s.submit(),
                  children: "Submit"
                })]
              })
            })]
          })]
        })
      })]
    })
  };
r.default = A

