/**
 * Parcel module id: hlAaS
 * Resolved path: components/Resume/ResumeReview/components/ResumeLoading.js (oracle restore)
 * Dependencies:
 *   ./AiStarAnimation -> lgWyP  =>  AiStarAnimation.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   antd -> 9tniX  =>  antd.js
 *   clsx -> jgTfo  =>  clsx.js
 *   data-base64:~assets/images/info.svg -> e8az6  =>  data-base64__tilde_assets/images/info.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~ui/Image -> 4wCrP  =>  _tilde_/ui/Image.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("clsx"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/info.svg"),
  u = n.interopDefault(s),
  c = e("~ui/Image"),
  d = n.interopDefault(c),
  f = e("./AiStarAnimation"),
  p = n.interopDefault(f);
let m = "resume-loading-",
  h = ({
    title: e,
    description: t,
    className: r,
    bordered: n = !0
  }) => (0, o.jsxs)(i.Flex, {
    vertical: !0,
    align: "center",
    justify: "center",
    gap: 32,
    className: (0, l.default)(m + "container", n && m + "container-bordered", r),
    style: {
      width: "480px",
      padding: "48px 60px",
      borderRadius: "20px",
      background: "#ffffff",
      ...n && {
        boxShadow: "0 0 0 0.5px rgba(0, 0, 0, 0.06) inset"
      }
    },
    children: [(0, o.jsx)(p.default, {}), (0, o.jsxs)("div", {
      className: m + "linear-progress",
      style: {
        width: "360px",
        minWidth: "360px",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        display: "block",
        height: "2px",
        minHeight: "2px",
        borderRadius: "2px",
        background: "var(--base-color-grey, #f3f4f5)"
      },
      children: [(0, o.jsx)("span", {
        className: m + "linear-progress-first",
        style: {
          position: "absolute",
          left: 0,
          bottom: 0,
          top: 0,
          transition: "transform 0.2s linear",
          transformOrigin: "left",
          borderRadius: "2px",
          background: "#000",
          width: "auto",
          animation: "animation-first 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"
        }
      }), (0, o.jsx)("span", {
        className: m + "linear-progress-second",
        style: {
          borderRadius: "2px",
          position: "absolute",
          left: 0,
          bottom: 0,
          top: 0,
          transition: "transform 0.2s linear",
          transformOrigin: "left",
          background: "#000",
          width: "auto",
          animation: "animation-second 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"
        }
      })]
    }), e && (0, o.jsx)(i.Typography.Text, {
      className: m + "title",
      children: e
    }), t && (0, o.jsxs)(i.Flex, {
      gap: 8,
      className: m + "description",
      children: [(0, o.jsx)(d.default, {
        src: u.default,
        width: 16,
        height: 16,
        alt: "info-icon",
        preview: !1
      }), (0, o.jsx)(i.Typography.Paragraph, {
        children: t
      })]
    })]
  });
r.default = h

