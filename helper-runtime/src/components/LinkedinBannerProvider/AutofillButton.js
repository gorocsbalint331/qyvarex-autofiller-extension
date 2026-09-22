/**
 * Parcel module id: lff8Y
 * Resolved path: src/components/LinkedinBannerProvider/AutofillButton.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   data-base64:~assets/images/aistar_l.svg -> 4CyCs  =>  src/assets/inline/images/aistar_l.svg__4CyCs.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~store/externalJob -> 1YpU3  =>  src/store/externalJob.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => c);
var o = e("react/jsx-runtime"),
  i = e("data-base64:~assets/images/aistar_l.svg"),
  a = n.interopDefault(i),
  l = e("~core/utils"),
  s = e("~store/externalJob"),
  u = e("~utils/trace");

function c() {
  let e = (0, s.useExternalJobStore)(e => e.jobInfo);
  if (!e || !e?.jobResult?.jobId) return null;
  let t = e?.jobResult?.applyLink ?? e?.jobResult?.originalUrl,
    r = null;
  if (t) try {
    r = new URL(t)
  } catch (e) {
    console.error("Invalid URL:", t)
  }
  if (!r) return null;
  let n = (0, l.checkSupportStatus)(r);
  return n ? (0, o.jsx)("div", {
    style: {
      marginLeft: "8px",
      backgroundColor: "#D4FCBC",
      display: "flex",
      alignItems: "center",
      width: "197px",
      height: "40px",
      borderRadius: "24px",
      cursor: "pointer",
      userSelect: "none"
    },
    onClick: () => {
      r.searchParams.append("jr_id", e?.jobResult?.jobId), (0, u.trackEvent)(
        "linkedin_autofill_apply_click", {
          jobId: e?.jobResult?.jobId,
          applyUrl: r.toString(),
          windowTopUrl: window.top.location.href
        }), window.open(r.toString(), "_blank")
    },
    children: (0, o.jsxs)("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "15px",
        gap: 4
      },
      children: [(0, o.jsx)("img", {
        src: a.default,
        height: 20,
        width: 20
      }), (0, o.jsx)("div", {
        style: {
          fontFamily: "Inter",
          fontWeight: 600,
          fontStyle: "Semi Bold",
          fontSize: "16px",
          lineHeight: "20px",
          textAlign: "center",
          verticalAlign: "middle",
          color: "#000000"
        },
        children: "Apply with Autofill"
      })]
    })
  }) : null
}

