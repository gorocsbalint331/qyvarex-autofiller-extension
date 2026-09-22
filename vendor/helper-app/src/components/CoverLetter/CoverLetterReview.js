/**
 * Parcel module id: gm8fZ
 * Resolved path: src/components/CoverLetter/CoverLetterReview.js
 * Dependencies:
 *   ./components/CoverLetterPreview -> 5CcvO  =>  components/CoverLetterPreview.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/close.svg -> jtoxx  =>  src/assets/inline/images/close.svg__jtoxx.js
 *   data-base64:~assets/images/download.svg -> 2gClz  =>  src/assets/inline/images/download.svg.js
 *   data-base64:~assets/images/edit.svg -> 43zZJ  =>  src/assets/inline/images/edit.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~api/resume-helpers -> 2rFEx  =>  src/api/resume-helpers.js
 *   ~components/Resume/ResumeReview/components/DrawerFooter -> 2yZZ7  =>  src/components/Resume/ResumeReview/components/DrawerFooter.js
 *   ~components/Resume/ResumeReview/download-menu -> hQIM0  =>  src/components/Resume/ResumeReview/download-menu.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~contents -> d4tj7  =>  src/contents.js
 *   ~store/cover-letter-state -> 7Ks3y  =>  src/store/cover-letter-state.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/resume -> iSBDf  =>  src/store/resume.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 *   ~utils/download-file -> cmrQu  =>  src/utils/download-file.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("antd"),
  a = e("data-base64:~assets/images/close.svg"),
  l = n.interopDefault(a),
  s = e("data-base64:~assets/images/download.svg"),
  u = n.interopDefault(s),
  c = e("data-base64:~assets/images/edit.svg"),
  d = n.interopDefault(c),
  f = e("react"),
  p = e("@plasmohq/messaging"),
  m = e("~constants"),
  h = e("~contents"),
  g = e("~api/resume-helpers"),
  b = e("~store/cover-letter-state"),
  y = e("~store/profile"),
  v = e("~store/resume"),
  w = e("~ui/Image"),
  S = n.interopDefault(w),
  E = e("~utils/download-file"),
  x = e("~utils/trace"),
  C = e("~components/Resume/ResumeReview/components/DrawerFooter"),
  A = n.interopDefault(C),
  k = e("~components/Resume/ResumeReview/download-menu"),
  T = e("./components/CoverLetterPreview"),
  F = n.interopDefault(T);
let I = "cover-letter-review-",
  j = () => {
    let e = (0, v.useResumeStore)(e => e.openCoverLetterPreview),
      t = (0, v.useResumeStore)(e => e.setOpenCoverLetterPreview),
      r = (0, v.useResumeStore)(e => e.agentCoverLetter),
      n = (0, v.useResumeStore)(e => e.currentJobCoverLetter),
      a = (0, y.useProfileStore)(e => e.userProfile),
      s = (0, v.useResumeStore)(e => e.setAgentCoverLetter),
      c = (0, v.useResumeStore)(e => e.setCurrentJobCoverLetter),
      w = (0, b.hasValidCoverLetter)(r) ? r : n,
      C = (0, f.useMemo)(() => {
        let e = a?.profile?.personalInfo,
          t = [e?.firstName, e?.lastName].filter(Boolean).join(" ");
        return (0, b.buildDefaultCoverLetterName)(t, "")
      }, [a]),
      [T, j] = (0, f.useState)(!1),
      [D, P] = (0, f.useState)(""),
      [_, L] = (0, f.useState)(null),
      R = (0, f.useRef)(),
      O = w ? (0, b.getCoverLetterDisplayName)(w.coverLetterName, C) : "";
    (0, f.useEffect)(() => {
      e && (P(O), (0, x.trackEvent)("autofill_cover_letter_modal_exposure", {}))
    }, [O, e]);
    let M = !!r?.coverLetterId,
      N = (0, f.useMemo)(() => (0, g.shouldUseLegacyAgentCoverLetterDownload)(window.location.href),
        []),
      $ = (0, f.useMemo)(() => (0, b.resolveCoverLetterDownloadRequest)({
        useLegacyDownload: N,
        agentCoverLetter: r,
        currentJobCoverLetter: n
      }), [r, n, N]),
      B = (0, f.useMemo)(() => {
        let e = async () => $?.coverLetterId ? (0, p.sendToBackground)({
          name: "getCoverLetterBlob",
          body: {
            coverLetterId: $.coverLetterId,
            markdown: $.markdown,
            useLegacyDownload: $.useLegacyDownload
          }
        }) : null, t = async () => {
          let t = await e();
          if (!t) return;
          let r = t.extension || "pdf";
          (0, E.downloadDataUrlFile)(t.base64URL, `${D||O}.${r}`), (0, x.trackEvent)(
            "autofill_cover_letter_download_click", {
              format: r
            })
        }, r = async () => {
          let t = await e();
          if (!t) return;
          let r = await (0, p.sendToBackground)({
              name: "convertResumePdfToWord",
              body: {
                pdfBase64URL: t.base64URL,
                filename: `${D||O}.pdf`
              }
            }),
            n = r.extension || "docx";
          (0, E.downloadDataUrlFile)(r.base64URL, `${D||O}.${n}`), (0, x.trackEvent)(
            "autofill_cover_letter_download_click", {
              format: n
            })
        };
        return (0, k.buildResumeDownloadMenuItems)(t, r)
      }, [$, D, O]);
    if ((0, f.useEffect)(() => {
        e && !w && t(!1)
      }, [e, w, t]), !w) return null;
    let q = (e, t) => {
        R.current && clearTimeout(R.current), L({
          type: e,
          text: t
        }), R.current = setTimeout(() => L(null), 3e3)
      },
      U = () => {
        let e = D.trim();
        if (!e || e === O) {
          P(O), j(!1);
          return
        }
        let t = {
          ...w,
          coverLetterName: e
        };
        M ? s(t) : c(t), j(!1), q("success", "Cover letter title updated successfully."), (0, x
          .trackEvent)("autofill_cover_letter_rename", {})
      };
    return (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)(i.Modal, {
        open: e,
        width: 1120,
        zIndex: m.HELPER_MODAL_Z_INDEX,
        className: I + "container",
        wrapClassName: "jobright-scroll-lock-modal-wrap",
        destroyOnClose: !0,
        onCancel: () => t(!1),
        getContainer: () => document.getElementById(h.HOST_ID)?.shadowRoot,
        closeIcon: (0, o.jsx)(S.default, {
          preview: !1,
          src: l.default,
          width: 16,
          height: 16,
          alt: "close"
        }),
        footer: (0, o.jsx)(A.default, {
          primary: "Download",
          primaryIcon: (0, o.jsx)(S.default, {
            preview: !1,
            src: u.default,
            width: 16,
            height: 16,
            alt: "download"
          }),
          primaryMenuItems: B,
          items: [{
            key: "continue",
            label: "Continue",
            onClick: () => t(!1)
          }]
        }),
        title: (0, o.jsx)(i.Flex, {
          justify: "flex-start",
          align: "center",
          gap: 8,
          children: (0, o.jsx)("strong", {
            className: I + "modal-title",
            children: "View Your Cover Letter"
          })
        }),
        children: (0, o.jsxs)(i.Flex, {
          className: I + "content",
          children: [(0, o.jsx)("div", {
            className: I + "left",
            children: (0, o.jsx)("div", {
              className: [I + "name-shell", T ? I + "name-shell-editing" :
                ""
              ].filter(Boolean).join(" "),
              children: T ? (0, o.jsx)(o.Fragment, {
                children: (0, o.jsx)(i.Input, {
                  autoFocus: !0,
                  value: D,
                  onChange: e => P(e.target.value),
                  onBlur: e => {
                    e.stopPropagation(), U()
                  },
                  onPressEnter: U,
                  variant: "borderless",
                  className: I + "edit-input"
                })
              }) : (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(i.Typography.Text, {
                  ellipsis: !0,
                  className: I + "name",
                  children: O
                }), (0, o.jsx)("button", {
                  type: "button",
                  className: I + "edit",
                  onClick: () => j(!0),
                  "aria-label": "Rename cover letter",
                  children: (0, o.jsx)(S.default, {
                    preview: !1,
                    src: d.default,
                    width: 16,
                    height: 16,
                    alt: "edit"
                  })
                })]
              })
            })
          }), (0, o.jsx)(F.default, {
            downloadRequest: $,
            style: {
              flex: 1,
              width: "100%",
              height: "100%",
              minHeight: 496
            }
          })]
        })
      }), _ && (0, o.jsx)("div", {
        className: `${I}toast ${I}toast-${_.type}`,
        children: _.text
      })]
    })
  };
r.default = j

