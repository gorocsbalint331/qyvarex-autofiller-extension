/**
 * Parcel module id: 7Bbgd
 * Resolved path: src/components/LinkedinBannerProvider/LinkedinBanner.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/LinkedinBannerProvider/BirdBanner -> 7UKxV  =>  src/components/LinkedinBannerProvider/BirdBanner.js
 *   ~components/LinkedinBannerProvider/JumpArrow -> lGKKE  =>  src/components/LinkedinBannerProvider/JumpArrow.js
 *   ~components/LinkedinBannerProvider/Ring -> 8fs0H  =>  src/components/LinkedinBannerProvider/Ring.js
 *   ~components/LinkedinBannerProvider/copy -> 5A2Ti  =>  src/components/LinkedinBannerProvider/copy.js
 *   ~store/externalJob -> 1YpU3  =>  src/store/externalJob.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => h);
var o = e("react/jsx-runtime"),
  i = e("react"),
  a = e("~components/LinkedinBannerProvider/BirdBanner"),
  l = n.interopDefault(a),
  s = e("~components/LinkedinBannerProvider/copy"),
  u = e("~components/LinkedinBannerProvider/JumpArrow"),
  c = n.interopDefault(u),
  d = e("~components/LinkedinBannerProvider/Ring"),
  f = n.interopDefault(d),
  p = e("~store/externalJob"),
  m = e("~utils/trace");

function h({
  currentTabUrl: e,
  isJobDetailPage: t,
  darkMode: r,
  handleBannerClick: n,
  handleIframeBannerClick: a
}) {
  let u = (0, p.useExternalJobStore)(e => e.matchedSkillCount),
    h = (0, p.useExternalJobStore)(e => e.totalSkillCount),
    b = (0, p.useExternalJobStore)(e => e.matchedScore),
    y = (0, p.useExternalJobStore)(e => e.missingJobSkills),
    v = (0, d.getScoreLevel)(b),
    w = t ? {} : {
      marginTop: "32px",
      marginBottom: "32px"
    };
  return (0, i.useEffect)(() => {
    (0, m.trackEvent)("autofill_linkedin_banner_exposed", {
      currentUrl: window.location.href
    })
  }, [e]), (0, o.jsxs)("div", {
    style: {
      width: "100%",
      height: "140px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: r ? "rgba(29, 47, 35, 1)" : "#FFFFFF",
      borderRadius: "12px",
      ...w,
      overflow: "hidden",
      border: "none",
      boxShadow: r ? "0px 0px 0px 1px rgba(255, 255, 255, 0.04)" :
        "0px 0px 0px 1px rgba(201, 223, 190, 0.5)",
      userSelect: "none"
    },
    onClick: () => {
      window.top !== window.self ? a() : n()
    },
    children: [(0, o.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
        padding: "16px",
        width: "100%",
        height: "104px",
        border: "none",
        boxShadow: r ? "inset 0px -1px 0px rgba(255, 255, 255, 0.04)" :
          "inset 0px -1px 0px rgba(201, 223, 190, 0.5)",
        background: r ? "linear-gradient(90deg, #2A4427 60%, #30592E 80%)" :
          "linear-gradient(90deg, #DDFFC3 60%, #FFFFFF 80%)"
      },
      children: [(0, o.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: "4px"
        },
        children: [(0, o.jsx)("h1", {
          style: {
            fontFamily: "Inter",
            fontWeight: 700,
            fontStyle: "Bold",
            fontSize: "18px",
            lineHeight: "20px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            color: r ? "#ffffff" : "#000000"
          },
          children: y ? s.MISSING_JOB_MESSAGE : (0, s.getMatchMessage)(v)
        }), !y && (0, o.jsx)(g, {
          matchedSkillCount: u,
          totalSkillCount: h,
          scoreLevel: v,
          darkMode: r
        })]
      }), (0, o.jsx)("div", {
        style: {
          paddingLeft: "12px"
        },
        children: (0, o.jsx)(f.default, {
          missing: y,
          score: b,
          max: 10,
          unit: "",
          darkMode: r
        })
      })]
    }), (0, o.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 8px",
        width: "100%",
        height: 36,
        border: "none"
      },
      children: [(0, o.jsx)(l.default, {
        darkMode: r
      }), (0, o.jsx)(c.default, {
        darkMode: r
      })]
    })]
  })
}

function g({
  matchedSkillCount: e,
  totalSkillCount: t,
  scoreLevel: r,
  darkMode: n
}) {
  if (0 === t) return (0, o.jsx)("h2", {
    style: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontStyle: "Regular",
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0%",
      verticalAlign: "middle",
      color: n ? "#ffffff" : "#000000"
    },
    children: "A quick update can make your resume relevant for this job."
  });
  switch (r) {
    case d.REPORT_SCORE_LEVEL.EXCELLENT:
      return (0, o.jsxs)("h2", {
        style: {
          fontFamily: "Inter",
          fontWeight: 400,
          fontStyle: "Regular",
          fontSize: "14px",
          lineHeight: "18px",
          letterSpacing: "0%",
          verticalAlign: "middle",
          color: n ? "#ffffff" : "#000000"
        },
        children: [(0, o.jsxs)("span", {
          style: {
            fontWeight: 700
          },
          children: [e, " out of ", t]
        }), " ", "keywords match! a quick update can make your resume stand out.."]
      });
    case d.REPORT_SCORE_LEVEL.FAIR:
      return (0, o.jsxs)("h2", {
        style: {
          fontFamily: "Inter",
          fontWeight: 400,
          fontStyle: "Regular",
          fontSize: "14px",
          lineHeight: "18px",
          letterSpacing: "0%",
          verticalAlign: "middle",
          color: n ? "#ffffff" : "#000000"
        },
        children: [(0, o.jsx)("span", {
          style: {
            fontWeight: 700
          },
          children: e
        }), " keywords are present, let's perfect your resume."]
      });
    case d.REPORT_SCORE_LEVEL.POOR:
    default: {
      let r = (0, s.getPoorMatchDescription)(e, t);
      return (0, o.jsxs)("h2", {
        style: {
          fontFamily: "Inter",
          fontWeight: 400,
          fontStyle: "Regular",
          fontSize: "14px",
          lineHeight: "18px",
          letterSpacing: "0%",
          verticalAlign: "middle",
          color: n ? "#ffffff" : "#000000"
        },
        children: [(0, o.jsx)("span", {
          style: {
            fontWeight: 700
          },
          children: r.emphasis
        }), " ", r.text]
      })
    }
  }
}

