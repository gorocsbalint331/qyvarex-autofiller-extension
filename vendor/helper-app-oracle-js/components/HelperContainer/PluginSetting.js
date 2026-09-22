/**
 * Parcel module id: 2y1sa
 * Resolved path: components/HelperContainer/PluginSetting.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   data-base64:~assets/images/question_mark.svg -> 5qMfy  =>  data-base64__tilde_assets/images/question_mark.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/ExternalJob/BackHomeButton -> dFEPH  =>  _tilde_components/ExternalJob/BackHomeButton.js
 *   ~store/container -> cKIaQ  =>  _tilde_store/container.js
 *   ~store/setting -> 1Q6Yp  =>  _tilde_store/setting.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => b);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("clsx"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/question_mark.svg"),
  u = n.interopDefault(s),
  c = e("react"),
  d = e("~components/ExternalJob/BackHomeButton"),
  f = n.interopDefault(d),
  p = e("~store/container"),
  m = e("~store/setting"),
  h = n.interopDefault(m),
  g = e("~utils/trace");

function b({
  closeSetting: e
}) {
  let t = (0, h.default)(e => e.automaticallyTurnPage),
    r = (0, h.default)(e => e.setAutomaticallyTurnPage),
    n = (0, h.default)(e => e.defaultView),
    a = (0, h.default)(e => e.setDefaultView),
    [l, s] = (0, c.useState)(t),
    [u, d] = (0, c.useState)(n);
  (0, c.useEffect)(() => {
    (0, g.trackEvent)("autofill_setting_exposure");
    let t = t => {
      "Escape" === t.key && e()
    };
    return document.addEventListener("keydown", t), () => {
      document.removeEventListener("keydown", t)
    }
  }, []), (0, c.useEffect)(() => {
    s(t)
  }, [t]), (0, c.useEffect)(() => {
    d(n)
  }, [n]);
  let p = async () => {
    let o = [];
    l !== t && ((0, g.trackEvent)("autofill_setting_pageturn_change", {
      from_value: t,
      to_value: l
    }), o.push(Promise.resolve(r(l)))), u !== n && ((0, g.trackEvent)(
      "autofill_setting_defaultview_change", {
        from_value: n,
        to_value: u
      }), o.push(Promise.resolve(a(u)))), o.length > 0 && await Promise.all(o), e()
  };
  return (0, o.jsxs)(i.Flex, {
    vertical: !0,
    className: "plugin-setting-container",
    children: [(0, o.jsxs)("div", {
      className: "plugin-setting-header",
      children: [(0, o.jsx)(f.default, {
        backFunction: e
      }), (0, o.jsx)(i.Typography.Text, {
        className: "plugin-setting-header-title",
        children: "Settings"
      })]
    }), (0, o.jsxs)(i.Flex, {
      vertical: !0,
      className: "plugin-setting-body",
      gap: 24,
      children: [(0, o.jsxs)(i.Flex, {
        vertical: !0,
        gap: 8,
        children: [(0, o.jsx)(y, {
          title: "Autofill After Page Turn",
          tooltipText: "On multi-page ATSs like MyWorkday, choose whether to continue autofilling automatically after each page turn, or to do it manually.",
          activeOption: l,
          optionSettingLeft: {
            option: "Automatically",
            onClickOption: () => {
              s("Automatically")
            }
          },
          optionSettingRight: {
            option: "Manually",
            onClickOption: () => {
              s("Manually")
            }
          }
        }), (0, o.jsx)(i.Typography.Text, {
          className: "plugin-setting-credits-tip",
          children: "Only 1 credit is used per job application and turning pages does not use extra credits."
        })]
      }), (0, o.jsx)("div", {
        className: "plugin-setting-question-divider"
      }), (0, o.jsx)(y, {
        title: "Default Plugin View",
        tooltipText: "Set the plugin to open expanded (full panel visible) or minimized (just a clickable icon) on supported ATS pages not opened from Jobright.",
        activeOption: u,
        optionSettingLeft: {
          option: "Expanded",
          onClickOption: () => {
            d("Expanded")
          }
        },
        optionSettingRight: {
          option: "Minimized",
          onClickOption: () => {
            d("Minimized")
          }
        }
      })]
    }), (0, o.jsx)("div", {
      className: "plugin-setting-footer",
      children: (0, o.jsx)("button", {
        type: "button",
        className: "plugin-setting-save-button",
        onClick: p,
        children: (0, o.jsx)("span", {
          className: "plugin-setting-save-button-text",
          children: "Save"
        })
      })
    })]
  })
}
let y = ({
    title: e,
    tooltipText: t,
    description: r,
    activeOption: n,
    optionSettingLeft: a,
    optionSettingRight: l
  }) => (0, o.jsxs)(i.Flex, {
    vertical: !0,
    gap: 8,
    className: "plugin-setting-item",
    children: [(0, o.jsxs)(i.Flex, {
      justify: "start",
      align: "center",
      gap: 4,
      children: [(0, o.jsx)(i.Typography.Text, {
        className: "setting-title",
        children: e
      }), (0, o.jsx)(w, {
        text: t
      })]
    }), (0, o.jsx)(v, {
      activeItem: n,
      leftItem: a,
      rightItem: l
    }), r && (0, o.jsx)(i.Typography.Text, {
      className: "setting-description",
      children: r
    })]
  }),
  v = ({
    activeItem: e,
    leftItem: t,
    rightItem: r
  }) => (0, o.jsxs)(i.Flex, {
    vertical: !0,
    gap: 4,
    className: "plugin-setting-option-list",
    children: [(0, o.jsxs)("button", {
      type: "button",
      className: (0, l.default)("plugin-setting-item-option", e === t.option ?
        "plugin-setting-item-selected" : "plugin-setting-item-unselected"),
      onClick: () => {
        t.onClickOption()
      },
      children: [(0, o.jsx)("span", {
        className: "plugin-setting-item-radio",
        "aria-hidden": "true",
        children: (0, o.jsx)("span", {
          className: "plugin-setting-item-radio-inner"
        })
      }), (0, o.jsx)(i.Typography.Text, {
        className: "setting-option-text",
        children: t.option
      })]
    }), (0, o.jsxs)("button", {
      type: "button",
      className: (0, l.default)("plugin-setting-item-option", e === r.option ?
        "plugin-setting-item-selected" : "plugin-setting-item-unselected"),
      onClick: () => {
        r.onClickOption()
      },
      children: [(0, o.jsx)("span", {
        className: "plugin-setting-item-radio",
        "aria-hidden": "true",
        children: (0, o.jsx)("span", {
          className: "plugin-setting-item-radio-inner"
        })
      }), (0, o.jsx)(i.Typography.Text, {
        className: "setting-option-text",
        children: r.option
      })]
    })]
  }),
  w = ({
    text: e
  }) => {
    let t = (0, p.useContainerStore)(e => e.containerDom);
    return (0, o.jsx)(i.Tooltip, {
      title: e,
      zIndex: 1001,
      className: "setting-tooltip",
      getTooltipContainer: () => t,
      children: (0, o.jsx)(i.Image, {
        src: u.default,
        width: 12,
        height: 12,
        alt: "logo-image",
        preview: !1
      })
    })
  }

