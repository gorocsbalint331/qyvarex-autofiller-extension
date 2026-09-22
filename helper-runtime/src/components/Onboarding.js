/**
 * Parcel module id: 4fFO5
 * Resolved path: src/components/Onboarding.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/storage/hook -> 8QXHm  =>  @plasmohq/storage/hook.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/flash.svg -> ZrVQT  =>  src/assets/inline/images/flash.svg.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   ~components/QuickChecklistItem -> bXn7T  =>  src/components/QuickChecklistItem.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 *   ~utils/jobright-url -> 8dTkf  =>  src/utils/jobright-url.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "default", () => g);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/flash.svg"),
  l = n.interopDefault(a),
  s = e("@plasmohq/storage/hook"),
  u = e("~api/env-resolver"),
  c = e("~components/QuickChecklistItem"),
  d = n.interopDefault(c),
  f = e("~store/profile"),
  p = e("~ui/Image"),
  m = n.interopDefault(p),
  h = e("~utils/jobright-url");

function g() {
  let e = (0, f.useProfileStore)(e => e.userStage),
    t = (0, f.useProfileStore)(e => e.userProfile),
    r = !!e?.logined,
    n = t?.step === 5,
    [, a] = (0, s.useStorage)("plugin-actived", !0);
  return (0, o.jsxs)(i.Flex, {
    className: "initial-phase-container",
    vertical: !0,
    gap: 32,
    children: [(0, o.jsxs)(i.Flex, {
      className: "apply-hint",
      vertical: !0,
      align: "center",
      gap: 16,
      children: [(0, o.jsx)(m.default, {
        src: l.default,
        preview: !1,
        width: 48,
        height: 48
      }), (0, o.jsx)(i.Typography.Text, {
        className: "hint-main-title",
        children: "Autofill with Jobright"
      }), (0, o.jsx)(i.Typography.Text, {
        className: "hint-description",
        children: "Complete your setup to start autofilling\napplications in one click."
      })]
    }), (0, o.jsx)(i.Flex, {
      className: "quick-start-checklist",
      vertical: !0,
      gap: 8,
      children: (0, o.jsxs)(i.Flex, {
        className: "list-items-group",
        vertical: !0,
        gap: 8,
        children: [(0, o.jsx)(d.default, {
          checked: r,
          stepNumber: 1,
          onClick: () => {
            window.open((0, h.buildJobrightLoginUrl)(u.HOST_DOMAIN), "_blank")
          },
          title: "Set Up a Jobright Account"
        }), (0, o.jsx)(d.default, {
          checked: n,
          stepNumber: 2,
          onClick: () => {
            r ? window.open(`${u.HOST_DOMAIN}/jobs/profile`, "_blank") :
              window.open(`${u.HOST_DOMAIN}/onboarding-v3/signup`, "_blank")
          },
          title: "Complete Your Profile Details"
        })]
      })
    }), (0, o.jsx)(i.Flex, {
      className: "confirm-area",
      vertical: !0,
      gap: 12,
      align: "center",
      children: (0, o.jsx)(i.Button, {
        className: "go-to-next-button",
        disabled: !e?.logined || !!e?.logined && t?.step !== 5,
        onClick: () => {
          a(!0)
        },
        children: "Start Applying"
      })
    })]
  })
}

