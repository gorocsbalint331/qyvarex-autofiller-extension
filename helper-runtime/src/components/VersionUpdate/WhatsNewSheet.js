/**
 * Parcel module id: COLfJ
 * Resolved path: src/components/VersionUpdate/WhatsNewSheet.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   data-base64:~assets/images/arr_go.svg -> fLfuH  =>  src/assets/inline/images/arr_go.svg__fLfuH.js
 *   data-base64:~assets/images/confirm.svg -> 7YpUF  =>  src/assets/inline/images/confirm.svg__7YpUF.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   ~background/update-check -> 1wgrD  =>  src/background/update-check.js
 *   ~components/VersionUpdate/whats-new-icons -> 3CGFK  =>  src/components/VersionUpdate/whats-new-icons.js
 *   ~store/cover-letter-state -> 7Ks3y  =>  src/store/cover-letter-state.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/resume -> iSBDf  =>  src/store/resume.js
 *   ~store/version-update -> jktea  =>  src/store/version-update.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("data-base64:~assets/images/arr_go.svg"),
  a = n.interopDefault(i),
  l = e("data-base64:~assets/images/confirm.svg"),
  s = n.interopDefault(l),
  u = e("dayjs"),
  c = n.interopDefault(u),
  d = e("react"),
  f = e("@plasmohq/messaging"),
  p = e("~api/env-resolver"),
  m = e("~background/update-check"),
  h = e("~components/VersionUpdate/whats-new-icons"),
  g = e("~store/cover-letter-state"),
  b = e("~store/profile"),
  y = e("~store/resume"),
  v = e("~store/version-update"),
  w = e("~utils/trace");
let S = 180,
  E = 12,
  x = ({
    releaseConfig: e,
    currentJobId: t
  }) => {
    let r = (0, v.useVersionUpdateStore)(e => e.openWhatsNewSheet),
      n = (0, v.useVersionUpdateStore)(e => e.setOpenWhatsNewSheet),
      i = (0, v.useVersionUpdateStore)(e => e.addSessionReadKey),
      l = (0, b.useProfileStore)(e => e.userStage),
      u = (0, y.useResumeStore)(e => e.setOpenAutofillInfo),
      x = (0, y.useResumeStore)(e => e.setOpenCoverLetterPreview),
      C = (0, y.useResumeStore)(e => e.agentCoverLetter),
      A = (0, y.useResumeStore)(e => e.currentJobCoverLetter),
      k = (0, d.useRef)(null),
      [T, F] = (0, d.useState)(S),
      I = l?.userId ? String(l.userId) : null,
      j = e?.version ?? null;
    if ((0, d.useLayoutEffect)(() => {
        if (!r) return;
        let e = k.current?.closest(".job-profile-container"),
          t = e?.querySelector(".job-profile-job-section");
        t && F(t.offsetTop + t.offsetHeight + E)
      }, [r]), (0, d.useEffect)(() => {
        if (!r || !e?.hasWhatsNewContent || !I || !j) return;
        let t = (0, m.whatsNewReadKey)(I, j),
          n = (0, v.useVersionUpdateStore).getState();
        n.sessionReadKeys.includes(t) || (n.addSessionReadKey(t), (0, w.trackEvent)(
          "autofill_version_whats_new_sheet_exposure", {
            release_version: j
          }), (0, f.sendToBackground)({
          name: "markWhatsNewRead",
          body: {
            userId: I,
            version: j
          }
        }).catch(() => {}))
      }, [r, e, I, j, i]), !r || !e?.hasWhatsNewContent) return null;
    let {
      features: D,
      updates: P,
      improvements: _
    } = e.whatsNew, L = D[0] ?? null, R = (r, n) => {
        (0, w.trackEvent)("autofill_version_whats_new_item_click", {
          release_version: e.version,
          content_group: r,
          action_page: n
        }), "autofill_information" === n ? u(!0) : ((0, g.hasValidCoverLetter)(C) ? C : A) ? x(!0) :
          t && (0, f.sendToBackground)({
            name: "getTabContext",
            body: {
              command: "initListener"
            }
          }).then(() => (0, f.sendToBackground)({
            name: "getTabContext",
            body: {
              command: "openTailorTab",
              url: `${p.HOST_DOMAIN}/jobs/info/${t}?plugin_cover_letter=1`
            }
          })).catch(() => {})
      }, O = (e, t) => e.action ? (0, o.jsxs)("div", {
        className: "jobright-whats-new-cta",
        onClick: () => R(t, e.action.page),
        children: [(0, o.jsx)("span", {
          children: e.action.label
        }), (0, o.jsx)("img", {
          src: a.default,
          width: 16,
          height: 16,
          alt: ""
        })]
      }) : null, M = e.releasedAt ?
      `v${e.version} \xb7 Released ${(0,c.default)(e.releasedAt).format("MMM D, YYYY")}` :
      `v${e.version}`;
    return (0, o.jsxs)("div", {
      ref: k,
      className: "jobright-whats-new-sheet",
      style: {
        top: T
      },
      children: [(0, o.jsxs)("div", {
        className: "jobright-whats-new-header",
        children: [(0, o.jsxs)("div", {
          className: "jobright-whats-new-header-title",
          children: [(0, o.jsx)("div", {
            className: "jobright-whats-new-title",
            children: "What\u2019s New"
          }), (0, o.jsx)("div", {
            className: "jobright-whats-new-version",
            children: M
          })]
        }), (0, o.jsx)("span", {
          className: "jobright-whats-new-cancel",
          onClick: () => n(!1),
          children: "Cancel"
        })]
      }), (0, o.jsxs)("div", {
        className: "jobright-whats-new-list",
        children: [L && (0, o.jsxs)("div", {
          className: "jobright-whats-new-feature-card",
          children: [(0, o.jsx)("div", {
            className: "jobright-whats-new-feature-icon",
            children: (0, h.resolveWhatsNewIcon)(L.icon) && (0, o.jsx)(
            "img", {
              src: (0, h.resolveWhatsNewIcon)(L.icon),
              width: 16,
              height: 16,
              alt: ""
            })
          }), (0, o.jsxs)("div", {
            className: "jobright-whats-new-item-content",
            children: [(0, o.jsx)("div", {
              className: "jobright-whats-new-item-title",
              children: L.title
            }), L.description && (0, o.jsx)("div", {
              className: "jobright-whats-new-item-desc",
              children: L.description
            }), O(L, "features")]
          })]
        }), P.length > 0 && (0, o.jsxs)("div", {
          className: "jobright-whats-new-group",
          children: [(0, o.jsx)("div", {
            className: "jobright-whats-new-group-title",
            children: "In This Update"
          }), (0, o.jsx)("div", {
            className: "jobright-whats-new-group-list",
            children: P.map((e, t) => {
              let r = (0, h.resolveWhatsNewIcon)(e.icon);
              return (0, o.jsxs)("div", {
                className: "jobright-whats-new-item",
                children: [r && (0, o.jsx)("div", {
                  className: "jobright-whats-new-item-icon",
                  children: (0, o.jsx)("img", {
                    src: r,
                    width: 16,
                    height: 16,
                    alt: ""
                  })
                }), (0, o.jsxs)("div", {
                  className: "jobright-whats-new-item-content",
                  children: [(0, o.jsx)("div", {
                    className: "jobright-whats-new-item-title",
                    children: e.title
                  }), e.description && (0, o.jsx)("div", {
                    className: "jobright-whats-new-item-desc",
                    children: e.description
                  }), O(e, "updates")]
                })]
              }, t)
            })
          })]
        }), _.length > 0 && (0, o.jsxs)("div", {
          className: "jobright-whats-new-group",
          children: [(0, o.jsx)("div", {
            className: "jobright-whats-new-group-title",
            children: "Improvements"
          }), (0, o.jsx)("div", {
            className: "jobright-whats-new-group-list",
            children: _.map((e, t) => (0, o.jsxs)("div", {
              className: "jobright-whats-new-item jobright-whats-new-item-improvement",
              children: [(0, o.jsxs)("div", {
                className: "jobright-whats-new-item-content",
                children: [(0, o.jsx)("div", {
                  className: "jobright-whats-new-item-title",
                  children: e.title
                }), e.description && (0, o.jsx)("div", {
                  className: "jobright-whats-new-item-desc",
                  children: e.description
                })]
              }), (0, o.jsx)("img", {
                className: "jobright-whats-new-check",
                src: s.default,
                width: 16,
                height: 16,
                alt: ""
              })]
            }, t))
          })]
        })]
      })]
    })
  };
r.default = x

