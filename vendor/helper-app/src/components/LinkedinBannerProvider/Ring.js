/**
 * Parcel module id: 8fs0H
 * Resolved path: src/components/LinkedinBannerProvider/Ring.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/info-dark.svg -> 69NYz  =>  src/assets/inline/images/info-dark.svg.js
 *   data-base64:~assets/images/info.svg -> fI5r1  =>  src/assets/inline/images/info.svg__fI5r1.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 */

var n, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
o.defineInteropFlag(r), o.export(r, "REPORT_SCORE_LEVEL", () => n), o.export(r, "getScoreLevel",
() => f);
var i = e("react/jsx-runtime"),
  a = e("antd"),
  l = e("data-base64:~assets/images/info-dark.svg"),
  s = o.interopDefault(l),
  u = e("data-base64:~assets/images/info.svg"),
  c = o.interopDefault(u),
  d = e("react");
! function(e) {
  e.POOR = "Poor", e.FAIR = "Fair", e.EXCELLENT = "Excellent"
}(n || (n = {}));
let f = e => Number.isNaN(e) ? n.POOR : e >= 9 ? n.EXCELLENT : e >= 6.1 ? n.FAIR : e >= 0 ? n.POOR :
  void 0,
  p = ({
    missing: e,
    score: t,
    max: r = 10,
    unit: n,
    darkMode: o
  }) => {
    let [l, u] = (0, d.useMemo)(() => {
      let e = Math.max(Math.min(t, r), 0),
        n = f(t);
      return [e, n]
    }, [t, r]);
    return (0, i.jsxs)(a.Flex, {
      style: {
        height: "80px",
        position: "relative"
      },
      vertical: !0,
      justify: "end",
      align: "center",
      children: [(0, i.jsxs)("div", {
        style: {
          position: "absolute",
          bottom: "26px",
          height: "52px"
        },
        children: [(0, i.jsxs)("svg", {
          width: "96",
          height: "52",
          viewBox: "0 0 96 52",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, i.jsx)("g", {
            clipPath: "url(#paint0_angular_3_16283_clip_path)",
            "data-figma-skip-parse": "true",
            children: (0, i.jsx)("g", {
              transform: "matrix(0 0.0700333 -0.0700333 0 48 26)",
              children: (0, i.jsx)("foreignObject", {
                x: "-742.504",
                y: "-742.504",
                width: "1485.01",
                height: "1485.01",
                children: (0, i.jsx)("div", {
                  style: {
                    background: "conic-gradient(from 90deg,rgba(164, 175, 95, 1) 0deg,rgba(255, 103, 57, 1) 38.4578deg,rgba(255, 222, 106, 1) 134.247deg,rgba(66, 221, 255, 1) 225.133deg,rgba(75, 246, 133, 1) 322.2deg,rgba(164, 175, 95, 1) 360deg)",
                    height: "100%",
                    width: "100%",
                    opacity: 1
                  }
                })
              })
            })
          }), (0, i.jsx)("path", {
            d: "M88 48C88 50.2091 89.7909 52 92 52C94.2091 52 96 50.2091 96 48H92H88ZM0 48C0 50.2091 1.79086 52 4 52C6.20914 52 8 50.2091 8 48H4H0ZM4 48H8C8 25.9086 25.9086 8 48 8V4V0C21.4903 0 0 21.4903 0 48H4ZM48 4V8C70.0914 8 88 25.9086 88 48H92H96C96 21.4903 74.5097 0 48 0V4Z",
            "data-figma-gradient-fill": '{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":1.0,"g":0.40553957223892212,"b":0.22394205629825592,"a":1.0},"position":0.10682711750268936},{"color":{"r":1.0,"g":0.87199252843856812,"b":0.41814777255058289,"a":1.0},"position":0.37290802597999573},{"color":{"r":0.26108399033546448,"g":0.86699521541595459,"b":1.0,"a":1.0},"position":0.62537020444869995},{"color":{"r":0.29591467976570129,"g":0.96831053495407104,"b":0.52452915906906128,"a":1.0},"position":0.89499998092651367}],"stopsVar":[],"transform":{"m00":1.4850748126897517e-13,"m01":-140.0666503906250,"m02":118.03332519531250,"m10":140.0666503906250,"m11":-1.2994404814323235e-12,"m12":-44.03332519531250},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
          }), (0, i.jsx)("defs", {
            children: (0, i.jsx)("clipPath", {
              id: "paint0_angular_3_16283_clip_path",
              children: (0, i.jsx)("path", {
                d: "M88 48C88 50.2091 89.7909 52 92 52C94.2091 52 96 50.2091 96 48H92H88ZM0 48C0 50.2091 1.79086 52 4 52C6.20914 52 8 50.2091 8 48H4H0ZM4 48H8C8 25.9086 25.9086 8 48 8V4V0C21.4903 0 0 21.4903 0 48H4ZM48 4V8C70.0914 8 88 25.9086 88 48H92H96C96 21.4903 74.5097 0 48 0V4Z"
              })
            })
          })]
        }), (0, i.jsx)(m, {
          value: t
        })]
      }), (0, i.jsxs)(a.Flex, {
        vertical: !0,
        gap: 2,
        justify: "center",
        align: "center",
        style: {
          width: "100px"
        },
        children: [(0, i.jsxs)("p", {
          style: {
            color: o ? "#ffffff" : "#000",
            fontSize: "32px",
            fontFamily: "Inter",
            fontWeight: "700",
            lineHeight: "36px"
          },
          children: [e ? "--" : Number.isNaN(t) ? "--" : l.toFixed(Math.floor(10 /
            r)), !e && n ? n : " "]
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "96px",
            height: "22px",
            padding: "5px 11px 5px 11px",
            gap: "4px",
            borderRadius: "1.7px 1.7px 7px 7px",
            background: o ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "16px",
            color: o ? "#FFFFFF" : "#000000"
          },
          children: [e ? "Missing" : u, (0, i.jsx)(a.Tooltip, {
            placement: "bottom",
            title: "This score measures how effectively your resume represents your qualifications in relation to this specific job description.",
            children: (0, i.jsx)("img", {
              src: o ? s.default : c.default,
              width: 12,
              height: 12,
              alt: "expire-info-icon"
            })
          })]
        })]
      })]
    })
  },
  m = ({
    value: e,
    max: t = 10
  }) => {
    let r = -180,
      n = 0,
      o = n - r,
      a = Math.max(0, Math.min(t, e)),
      l = a / t,
      s = r + l * o;
    return (0, i.jsx)("div", {
      style: {
        position: "absolute",
        bottom: "4px",
        left: "50%",
        width: "44px",
        height: "0.5px",
        transformOrigin: "left center",
        transform: `rotate(${s}deg)`
      },
      children: (0, i.jsx)("div", {
        style: {
          position: "absolute",
          right: 0,
          top: "50%",
          width: "12px",
          height: "12px",
          background: "#FFFFFF",
          border: "1.76px solid #000000",
          borderRadius: "50%",
          boxSizing: "border-box",
          transform: "translate(50%, -50%)"
        }
      })
    })
  };
r.default = p

