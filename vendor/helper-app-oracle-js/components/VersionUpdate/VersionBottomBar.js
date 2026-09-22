/**
 * Parcel module id: kh4HF
 * Resolved path: components/VersionUpdate/VersionBottomBar.js (oracle restore)
 * Dependencies:
 *   @ant-design/icons -> hBaAy  =>  @ant-design/icons.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   data-base64:~assets/images/arr_go.svg -> eu6Vy  =>  data-base64__tilde_assets/images/arr_go.svg__eu6Vy.js
 *   data-base64:~assets/images/download.svg -> gnV1p  =>  data-base64__tilde_assets/images/download.svg__gnV1p.js
 *   data-base64:~assets/images/light.svg -> l8YAj  =>  data-base64__tilde_assets/images/light.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~store/version-update -> jktea  =>  _tilde_store/version-update.js
 *   ~utils/trace -> 1ik0r  =>  _tilde_utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("@ant-design/icons"),
  a = e("data-base64:~assets/images/arr_go.svg"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/download.svg"),
  u = n.interopDefault(s),
  c = e("data-base64:~assets/images/light.svg"),
  d = n.interopDefault(c),
  f = e("react"),
  p = e("~store/version-update"),
  m = e("~utils/trace");
let h = ({
  banner: e,
  localVersion: t,
  onClickUpdate: r,
  onClickLater: n,
  onOpenWhatsNew: a
}) => ((0, f.useEffect)(() => {
  let r = (0, p.useVersionUpdateStore).getState();
  "new_version" !== e.kind || r.exposedNewVersion || (r.setExposedNewVersion(!0), (0, m
    .trackEvent)("autofill_version_new_version_exposure", {
    local_version: t,
    target_version: e.targetVersion
  })), "whats_new_entry" !== e.kind || r.exposedWhatsNewEntry || (r.setExposedWhatsNewEntry(
    !0), (0, m.trackEvent)("autofill_version_whats_new_entry_exposure", {
    release_version: e.version
  }))
}, [e, t]), "hidden" === e.kind) ? null : "new_version" === e.kind ? (0, o.jsxs)("div", {
  className: "jobright-version-bar",
  children: [(0, o.jsx)("div", {
    className: "jobright-version-bar-icon",
    children: (0, o.jsx)("img", {
      src: u.default,
      width: 16,
      height: 16,
      alt: ""
    })
  }), (0, o.jsxs)("div", {
    className: "jobright-version-bar-text",
    children: [(0, o.jsx)("div", {
      className: "jobright-version-bar-title",
      children: "New version available"
    }), (0, o.jsxs)("div", {
      className: "jobright-version-bar-desc",
      children: ["Get the improvements in v", e.targetVersion]
    })]
  }), (0, o.jsxs)("div", {
    className: "jobright-version-bar-actions",
    children: [(0, o.jsx)("span", {
      className: "jobright-version-bar-later",
      onClick: n,
      children: "Later"
    }), (0, o.jsx)("button", {
      type: "button",
      className: "jobright-version-bar-update",
      onClick: () => {
        (0, m.trackEvent)("autofill_version_update_click", {
          local_version: t,
          target_version: e.targetVersion
        }), r()
      },
      children: "Update"
    })]
  })]
}) : "updating" === e.kind ? (0, o.jsxs)("div", {
  className: "jobright-version-bar",
  children: [(0, o.jsx)("div", {
    className: "jobright-version-bar-icon",
    children: (0, o.jsx)(i.LoadingOutlined, {
      style: {
        fontSize: 16
      }
    })
  }), (0, o.jsx)("div", {
    className: "jobright-version-bar-text",
    children: (0, o.jsx)("div", {
      className: "jobright-version-bar-title",
      children: "Updating Autofill\u2026"
    })
  })]
}) : (0, o.jsxs)("div", {
  className: "jobright-version-bar jobright-version-bar-clickable",
  onClick: a,
  children: [(0, o.jsx)("div", {
    className: "jobright-version-bar-icon",
    children: (0, o.jsx)("img", {
      src: d.default,
      width: 16,
      height: 16,
      alt: ""
    })
  }), (0, o.jsxs)("div", {
    className: "jobright-version-bar-text jobright-version-bar-text-row",
    children: [(0, o.jsx)("span", {
      className: "jobright-version-bar-title",
      children: "What\u2019s New"
    }), (0, o.jsxs)("span", {
      className: "jobright-version-bar-tag",
      children: ["v", e.version]
    })]
  }), (0, o.jsx)("img", {
    src: l.default,
    width: 16,
    height: 16,
    alt: ""
  })]
});
r.default = h

