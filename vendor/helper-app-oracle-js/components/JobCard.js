/**
 * Parcel module id: hh9tB
 * Resolved path: components/JobCard.js (oracle restore)
 * Dependencies:
 *   ./InsiderConnections -> ehZj5  =>  InsiderConnections.js
 *   ./RoundedRingProgress -> 8BjNp  =>  RoundedRingProgress.js
 *   ./formatPublishTime -> hlnwS  =>  formatPublishTime.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ahooks -> 9sqtS  =>  ahooks.js
 *   antd -> 9tniX  =>  antd.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  _tilde_api/env-resolver.js
 *   ~contents/shared/constants -> ayCbq  =>  _tilde_contents/shared/constants.js
 *   ~ui/Image -> 4wCrP  =>  _tilde_/ui/Image.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("ahooks"),
  a = e("antd"),
  l = e("lodash-es"),
  s = e("@plasmohq/messaging"),
  u = e("~api/env-resolver"),
  c = e("~contents/shared/constants"),
  d = e("~ui/Image"),
  f = n.interopDefault(d),
  p = e("./formatPublishTime"),
  m = e("./InsiderConnections"),
  h = n.interopDefault(m),
  g = e("./RoundedRingProgress"),
  b = n.interopDefault(g);
let y = ({
  data: e,
  onApply: t,
  hideActions: r,
  hideApplicantsCount: n,
  style: d
}) => {
  let {
    run: m
  } = (0, i.useRequest)(() => (0, s.sendToBackground)({
    name: "postApplyJob",
    body: {
      jobDetail: e
    }
  }), {
    manual: !0,
    onSuccess: () => {
      t()
    }
  }), g = () => {
    window.open(u.HOST_DOMAIN + `${c.DETAIL_PATHNAME}/${e?.jobResult?.jobId}`, "_blank")
  };
  return (0, o.jsxs)(a.Flex, {
    className: "job-card",
    vertical: !0,
    style: d,
    children: [(0, o.jsxs)(a.Flex, {
      className: "job-card-first-row",
      gap: 8,
      justify: "space-between",
      children: [(0, o.jsx)(f.default, {
        className: "job-card-company-logo",
        preview: !1,
        width: 40,
        height: 40,
        src: e?.jobResult?.jdLogo || u.HOST_DOMAIN +
          "/newimages/public/img_none.svg",
        fallback: u.HOST_DOMAIN + "/newimages/public/img_none.svg"
      }), (0, o.jsxs)(a.Flex, {
        vertical: !0,
        justify: "center",
        style: {
          marginRight: "auto",
          flex: "0 1 auto"
        },
        children: [(0, o.jsx)(a.Typography.Text, {
          className: "job-card-company-name",
          ellipsis: !0,
          children: e?.companyResult?.companyName || e?.jobResult
            ?.userCompanyName
        }), (0, o.jsx)(a.Typography.Text, {
          ellipsis: !0,
          className: "job-card-company-desc",
          children: e?.companyResult?.companyCategories?.split(",")[0]
        })]
      }), (0, o.jsx)(a.Flex, {
        gap: 4,
        align: "center",
        children: !(0, l.isNil)(e?.displayScore) && (0, o.jsx)(b.default, {
          progress: Math.round(e?.displayScore) / 100,
          width: 56,
          height: 32,
          strokeWidth: 2,
          gradient: ["#50FABE", "#A0FA96"],
          progressText: Math.round(e?.displayScore)
        })
      })]
    }), (0, o.jsxs)(a.Flex, {
      className: "job-card-second-row",
      vertical: !0,
      gap: 8,
      children: [(0, o.jsx)(a.Flex, {
        vertical: !0,
        children: (0, o.jsx)("a", {
          href: `${u.HOST_DOMAIN}${c.DETAIL_PATHNAME}/${e?.jobResult?.jobId}`,
          target: "_blank",
          rel: "noreferrer",
          children: (0, o.jsx)(a.Typography.Title, {
            className: "job-card-job-title",
            ellipsis: {
              rows: 3,
              expandable: !1
            },
            children: e?.jobResult?.jobTitle
          })
        })
      }), (0, o.jsxs)(a.Flex, {
        className: "job-detail-applicant-row",
        gap: 4,
        children: [(0, o.jsxs)(a.Typography.Text, {
          children: [(0, p.formatPublishTimeDesc)(e?.jobResult
            ?.publishTimeDesc, e?.jobResult?.repost), " "]
        }), !n && (0, o.jsxs)(a.Typography.Text, {
          className: "job-card-applicant-detail",
          children: [" \xb7 ", " ", e?.jobResult?.applicantsCount,
            " applicants"
          ]
        })]
      })]
    }), (0, o.jsx)(h.default, {
      socialConnections: e?.jobResult?.socialConnections,
      personalSocialConnections: e?.jobResult?.personalSocialConnections,
      jobId: e?.jobResult?.jobId
    }), !r && (0, o.jsx)(a.Button, {
      className: "go-to-details-button",
      onClick: g,
      children: "View details"
    })]
  })
};
r.default = y

