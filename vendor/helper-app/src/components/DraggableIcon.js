/**
 * Parcel module id: 69yl1
 * Resolved path: src/components/DraggableIcon.js
 * Dependencies:
 *   @ant-design/cssinjs -> 9NB6K  =>  @ant-design/cssinjs.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/close_mini.svg -> 846Ib  =>  src/assets/inline/images/close_mini.svg.js
 *   data-base64:~assets/images/logo_bird.svg -> fg6HT  =>  src/assets/inline/images/logo_bird.svg.js
 *   data-base64:~assets/images/order_mini.svg -> amzIP  =>  src/assets/inline/images/order_mini.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react-draggable -> i4APi  =>  react-draggable.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   ~components/HelperContainer -> jZodJ  =>  src/components/HelperContainer.js
 *   ~store/hide -> az1YZ  =>  src/store/hide.js
 *   ~theme -> bKfuC  =>  src/theme.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 *   ~utils/hide-logic -> fv4lo  =>  src/utils/hide-logic.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => k);
var o = e("react/jsx-runtime"),
  i = e("@ant-design/cssinjs"),
  a = e("antd"),
  l = e("data-base64:~assets/images/close_mini.svg"),
  s = n.interopDefault(l),
  u = e("data-base64:~assets/images/logo_bird.svg"),
  c = n.interopDefault(u),
  d = e("data-base64:~assets/images/order_mini.svg"),
  f = n.interopDefault(d),
  p = e("react"),
  m = e("react-draggable"),
  h = n.interopDefault(m),
  g = e("~api/env-resolver"),
  b = e("~components/HelperContainer"),
  y = n.interopDefault(b),
  v = e("~store/hide"),
  w = e("~utils/hide-logic"),
  S = e("~utils/trace"),
  E = e("~ui/Image"),
  x = n.interopDefault(E),
  C = e("~theme");
let A = [{
  key: "next_visit",
  label: "Hide until next visit"
}, {
  key: "this_domain",
  label: "Hide on this domain"
}, {
  key: "all_websites",
  label: "Hide on all websites"
}];

function k({
  hostId: e,
  domainSupport: t,
  helperReady: r
}) {
  let [n, l] = (0, p.useState)(!1), [u, d] = (0, p.useState)(!1), [m, b] = (0, p.useState)({
    top: 0,
    right: 0
  }), [E, k] = (0, p.useState)(!1), T = (0, p.useRef)(null), F = (0, v.useHideStore)(e => e
    .openCard), I = (0, v.useHideStore)(e => e.setOpenCard), j = (0, v.useHideStore)(e => e
    .setDisplayIcon);
  (0, p.useEffect)(() => {
    r && k(!0)
  }, [r]);
  let D = async e => {
    "this_domain" === e ? await (0, w.hideOnDomain)(window.location.hostname) :
      "all_websites" === e && await (0, w.hideOnAllWebsites)(), d(!1), j(!1), (0, S.trackEvent)(
        "autofill_plugin_hide", {
          hide_type: e,
          url: window.location.href
        })
  }, P = () => {
    let e = T.current?.getBoundingClientRect();
    e && b({
      top: e.bottom + 4,
      right: window.innerWidth - e.right
    }), d(!0)
  };
  return (0, p.useEffect)(() => {
    if (!u) return;
    let t = t => {
      let r = t.composedPath(),
        n = document.getElementById(e)?.shadowRoot?.querySelector(".hide-menu-popup"),
        o = T.current;
      n && !r.includes(n) && o && !r.includes(o) && d(!1)
    };
    return document.addEventListener("mousedown", t, !0), () => document.removeEventListener(
      "mousedown", t, !0)
  }, [u, e]), (0, o.jsx)(C.ThemeProvider, {
    children: (0, o.jsxs)(i.StyleProvider, {
      container: document.getElementById(e)?.shadowRoot,
      children: [(0, o.jsx)(h.default, {
        axis: "y",
        bounds: "body",
        handle: ".handle",
        onStart: () => {
          l(!0)
        },
        onStop: e => {
          l(!1)
        },
        onMouseDown: e => {
          e.stopPropagation()
        },
        children: (0, o.jsx)("div", {
          style: {
            position: "fixed",
            right: 0,
            top: F ? 0 : 120,
            zIndex: 1e3,
            fontFamily: "Inter",
            visibility: (0, g.agentDomains).includes(window.location.hostname) ?
              "hidden" : "visible"
          },
          children: !F && (0, o.jsxs)("div", {
            className: "handle",
            style: {
              cursor: n ? "grabbing" : "grab",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 40px 0px rgba(32, 38, 44, 0.25)"
            },
            onMouseDown: e => {
              l(!0)
            },
            children: [(0, o.jsxs)("div", {
              className: "bird-button",
              onClick: e => {
                n || I(!0), I(!0)
              },
              children: [(0, o.jsx)(x.default, {
                height: 48,
                width: 48,
                draggable: !1,
                src: c.default,
                alt: "logo-image",
                preview: !1
              }), (0, o.jsx)("div", {
                ref: T,
                className: "close-button-wrapper",
                "data-open": u ? "true" : "false",
                onMouseDown: e => e.stopPropagation(),
                onClick: e => {
                  e.stopPropagation(), P()
                },
                children: (0, o.jsx)(x.default, {
                  width: 12,
                  height: 12,
                  draggable: !1,
                  src: s.default,
                  alt: "close",
                  preview: !1
                })
              })]
            }), (0, o.jsx)(a.Flex, {
              vertical: !0,
              justify: "center",
              align: "center",
              gap: 8,
              style: {
                paddingInline: 4,
                background: "#CEFFEF",
                height: 64
              },
              children: (0, o.jsx)(x.default, {
                height: 16,
                width: 8,
                draggable: !1,
                src: f.default,
                alt: "order",
                preview: !1
              })
            })]
          })
        })
      }), u && !F && (0, o.jsx)("div", {
        className: "hide-menu-popup",
        style: {
          position: "fixed",
          top: m.top,
          right: m.right,
          zIndex: 2147483e3
        },
        children: A.map(e => (0, o.jsx)("div", {
          className: "hide-menu-item",
          onClick: () => D(e.key),
          children: e.label
        }, e.key))
      }), F && (r || E) && (0, o.jsx)(y.default, {
        domainSupport: t || (0, g.agentDomains).includes(new URL(window.location.href)
          .hostname)
      })]
    })
  })
}

