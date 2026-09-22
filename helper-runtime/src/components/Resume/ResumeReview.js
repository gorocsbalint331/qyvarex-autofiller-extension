/**
 * Parcel module id: 9pWmc
 * Resolved path: src/components/Resume/ResumeReview.js
 * Dependencies:
 *   ./behavior -> 418WQ  =>  src/components/Resume/behavior.js
 *   ./components/DrawerFooter -> 2yZZ7  =>  src/components/Resume/ResumeReview/components/DrawerFooter.js
 *   ./components/EmptyHint -> 2rRpe  =>  components/EmptyHint.js
 *   ./components/PDFPreview -> 82HnH  =>  components/PDFPreview.js
 *   ./dirty-state -> hOhD5  =>  src/components/Resume/dirty-state.js
 *   ./download-filename -> 5wifi  =>  src/components/Resume/download-filename.js
 *   ./view-model -> jjZvo  =>  src/components/Resume/view-model.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   antd -> 9tniX  =>  antd.js
 *   data-base64:~assets/images/close.svg -> 1o2r7  =>  src/assets/inline/images/close.svg__1o2r7.js
 *   data-base64:~assets/images/download.svg -> 8OyGr  =>  src/assets/inline/images/download.svg__8OyGr.js
 *   data-base64:~assets/images/edit.svg -> jvW8F  =>  src/assets/inline/images/edit.svg__jvW8F.js
 *   data-base64:~assets/images/none.png -> 4rCEH  =>  src/assets/inline/images/none.png.js
 *   data-base64:~assets/images/star_b.svg -> icEuV  =>  src/assets/inline/images/star_b.svg.js
 *   react -> 329PG  =>  react-reexport.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/Popups/PageConfirmPopup -> g8Ksi  =>  src/components/Popups/PageConfirmPopup.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~contents -> d4tj7  =>  src/contents.js
 *   ~contents/shared/constants -> ayCbq  =>  src/contents/shared/constants.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/resume -> iSBDf  =>  src/store/resume.js
 *   ~ui/Image -> 4wCrP  =>  src/ui/Image.js
 *   ~utils/download-file -> cmrQu  =>  src/utils/download-file.js
 *   ~utils/resume-upload-filename -> ev1lJ  =>  src/utils/resume-upload-filename.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
o.defineInteropFlag(r), o.export(r, "RESUME_SEGMENTED_VALUES", () => n);
var i = e("react/jsx-runtime"),
  a = e("antd"),
  l = e("data-base64:~assets/images/close.svg"),
  s = o.interopDefault(l),
  u = e("data-base64:~assets/images/download.svg"),
  c = o.interopDefault(u),
  d = e("data-base64:~assets/images/edit.svg"),
  f = o.interopDefault(d),
  p = e("data-base64:~assets/images/none.png"),
  m = o.interopDefault(p),
  h = e("data-base64:~assets/images/star_b.svg"),
  g = o.interopDefault(h),
  b = e("react"),
  y = e("@plasmohq/messaging"),
  v = e("~components/Popups/PageConfirmPopup"),
  w = o.interopDefault(v),
  S = e("~constants"),
  E = e("~contents"),
  x = e("~contents/shared/constants"),
  C = e("~core/utils"),
  A = e("~store/profile"),
  k = e("~store/resume"),
  T = e("~ui/Image"),
  F = o.interopDefault(T),
  I = e("~utils/download-file"),
  j = e("~utils/resume-upload-filename"),
  D = e("~utils/trace"),
  P = e("./behavior"),
  _ = e("./components/DrawerFooter"),
  L = o.interopDefault(_),
  R = e("./components/EmptyHint"),
  O = o.interopDefault(R),
  M = e("./components/PDFPreview"),
  N = o.interopDefault(M),
  $ = e("./dirty-state"),
  B = e("./download-filename"),
  q = e("./view-model");
let U = "resume-review-";
! function(e) {
  e.report = "Report", e.editor = "Editor", e.style = "Style"
}(n || (n = {}));
let H = ({
  currentTabJob: e
}) => {
  let t = (0, k.useResumeStore)(e => e.resumeCollection),
    r = (0, k.useResumeStore)(e => e.resumeMap),
    n = (0, k.useResumeStore)(e => e.template),
    o = (0, k.useResumeStore)(e => e.lastUsedResume),
    l = (0, k.useResumeStore)(e => e.lastUsedOriginalResume),
    u = (0, k.useResumeStore)(e => e.disableUploadResume),
    d = (0, k.useResumeStore)(e => e.setLastUsedResume),
    p = (0, k.useResumeStore)(e => e.setLastUsedOriginalResume),
    h = (0, k.useResumeStore)(e => e.setDisableUploadResume),
    v = (0, k.useResumeStore)(e => e.tailorResumeName),
    T = (0, k.useResumeStore)(e => e.tailorResume),
    _ = (0, k.useResumeStore)(e => e.setOpenResumeSelector),
    R = (0, k.useResumeStore)(e => e.refreshResumeList),
    M = (0, k.useResumeStore)(e => e.openResumeSelector),
    H = (0, k.useResumeStore)(e => e.setOpenAutofillInfo),
    Y = (0, A.useProfileStore)(e => e.userStage),
    [z, V] = (0, b.useState)(u),
    [W, G] = (0, b.useState)(u ? void 0 : o),
    [K, X] = (0, b.useState)(l ? "true" : "false"),
    [J, Q] = (0, b.useState)(null),
    [Z, ee] = (0, b.useState)(""),
    [et, er] = (0, b.useState)(!1),
    [en, eo] = (0, b.useState)(null),
    [ei, ea] = (0, b.useState)(!1),
    el = (0, b.useRef)();
  (0, b.useEffect)(() => {
    W === o && X(l ? "true" : "false")
  }, [o, l, W]);
  let es = (0, q.buildResumeReviewItems)({
      resumes: t.map(e => ({
        resumeId: e.resumeId,
        resumeName: e.resumeName,
        resumeNameWithSuffix: e.resumeNameWithSuffix,
        primary: e.primary,
        targetJobTitle: e.targetJobTitle
      })),
      tailorResumeId: T?.tailorId ? x.TAILOR_RESUME_ID_PREFIX + T.tailorId : null,
      tailorResumeName: v,
      lastUsedResumeId: o ?? null
    }),
    eu = (0, b.useRef)(!1),
    ec = (0, b.useRef)(!1),
    ed = (0, b.useRef)(!1),
    ef = (0, b.useRef)(u),
    ep = (0, b.useRef)(u ? void 0 : o),
    em = (0, b.useRef)(l ? "true" : "false"),
    eh = () => ({
      disableUploadResume: ef.current,
      selectResume: ep.current,
      useOriginalResume: em.current
    }),
    eg = () => ({
      disableUploadResume: z,
      selectResume: W,
      useOriginalResume: K
    }),
    eb = (0, b.useMemo)(() => (0, $.getResumePickerChangeSummary)({
      initial: eh(),
      current: eg()
    }), [z, W, K]),
    ey = (0, $.isResumePickerContinueDisabled)(eb),
    ev = () => {
      ed.current || (V(ef.current), G(ep.current), X(em.current)), _(!1)
    },
    ew = () => {
      if (!eb.hasChanges) {
        ev();
        return
      }
      ea(!0)
    },
    eS = () => {
      ea(!1), ev()
    },
    eE = async () => {
      ea(!1), await ex()
    }, ex = async () => {
      ey || (ed.current = !0, h(z), z ? ((0, D.trackEvent)(
      "autofill_not_apply_resume_click", {
        user_id: A.useProfileStore.getState().userStage?.userId,
        url: window.location.href
      }), d(void 0), p(!1)) : (d(W), p("true" === K), W && await (0, k
        .syncResumeToAutofill)(W, r)), _(!1), (0, D.trackEvent)(
        "autofill_resumepicker_change", {
          selected_resume_type: z ? "none" : W?.startsWith(x.TAILOR_RESUME_ID_PREFIX) ?
            "tailor" : "base",
          selected_template_type: z || W?.startsWith(x.TAILOR_RESUME_ID_PREFIX) ? "none" :
            "true" === K ? "original" : "jobright",
          job_id: e?.jobResult?.jobId
        }))
    }, eC = e => {
      if ("NO_RESUME" === e) {
        G(void 0), V(!0), X("false");
        return
      }
      G(e), e && z && V(!1), e && e.startsWith(x.TAILOR_RESUME_ID_PREFIX) ? X("false") : e &&
        e === o && X(l ? "true" : "false")
    }, eA = (e = {}) => {
      let t = (0, E.getAutofillInstance)();
      if (t)
        for (let [r, n] of Object.entries(e)) t[r] = n;
      (0, C.updateIframeUserInfo)(e)
    };
  (0, b.useEffect)(() => {
    M ? (ef.current = u, ep.current = u ? void 0 : o, em.current = l ? "true" : "false", V(u),
      G(u ? void 0 : o), X(l ? "true" : "false"), Q(null), ee(""), ed.current = !1, Y
      ?.logined && !eu.current && (R(Y, e), eu.current = !0), ec.current || ((0, D.trackEvent)
        ("autofill_resumepicker_exposure", {
          default_resume_type: u ? "none" : o?.startsWith(x.TAILOR_RESUME_ID_PREFIX) ?
            "tailor" : "base",
          default_template_mode: u || o?.startsWith(x.TAILOR_RESUME_ID_PREFIX) ? "none" :
            l ? "original" : "jobright",
          resume_count: t?.length,
          job_id: e?.jobResult?.jobId
        }), ec.current = !0)) : (eu.current = !1, ec.current = !1, ed.current = !1)
  }, [M]), (0, b.useEffect)(() => {
    if (!M || !Y?.logined) return;
    let t = () => {
      "visible" === document.visibilityState && R(Y, e)
    };
    return document.addEventListener("visibilitychange", t), () => {
      document.removeEventListener("visibilitychange", t)
    }
  }, [M, Y, e, R]), (0, b.useEffect)(() => {
    if (z || !t || 0 === t.length) return;
    let e = W && t.some(e => e.resumeId === W);
    if (!e && W) {
      let e = t[0];
      e && (G(e.resumeId), e.resumeId.startsWith(x.TAILOR_RESUME_ID_PREFIX) ? X("false") : e
        .resumeId === o && X(l ? "true" : "false"))
    }
  }, [t, W, z, o, l]);
  let ek = (0, b.useCallback)(async () => {
    if (o && o.startsWith(x.TAILOR_RESUME_ID_PREFIX)) eA({
      disableUploadResume: u,
      resumeInfo: {
        tailor: !0,
        tailorResume: r[o],
        template: n,
        resumeName: (0, j.getResumeUploadFilename)({
          selectedResume: r[o],
          isTailorResume: !0,
          tailorResumeName: v
        })
      }
    });
    else {
      let e = (0, j.getResumeUploadFilename)({
        selectedResume: r[o],
        isTailorResume: !1
      });
      eA({
        disableUploadResume: u,
        resumeInfo: {
          id: o,
          diagnoseId: r[o]?.diagnoseId,
          template: n,
          resumeName: e,
          useOriginalResume: l
        }
      })
    }
  }, [u, o, l, r, n, v]);
  (0, b.useEffect)(() => {
    ek()
  }, [ek]);
  let eT = W ? r[W] : null,
    eF = eT?.resumeNameWithSuffix || "",
    eI = !!W && W.startsWith(x.TAILOR_RESUME_ID_PREFIX),
    ej = eF.split(".").pop()?.toLowerCase(),
    eD = async () => {
      if (!W || z) return null;
      let e = "",
        t = "pdf";
      if (W.startsWith(x.TAILOR_RESUME_ID_PREFIX)) {
        let o = await (0, y.sendToBackground)({
          name: "getTailorResumeBlob",
          body: {
            tailorResume: r[W],
            template: n
          }
        });
        e = o.base64URL, t = "pdf"
      } else if ("true" === K && "pdf" === ej) {
        let r = await (0, y.sendToBackground)({
          name: "getResumeBlob",
          body: {
            resumeId: W
          }
        });
        e = r.base64URL, t = r.extension || "pdf"
      } else {
        let o = await (0, y.sendToBackground)({
          name: "getBaseResumeBlob",
          body: {
            diagnoseId: r[W]?.diagnoseId,
            template: n
          }
        });
        e = o.base64URL, t = "pdf"
      }
      return {
        base64URL: e,
        extension: t
      }
    }, eP = () => (0, B.getResumeDownloadBaseName)({
      selectedResume: eT,
      isTailorResume: eI,
      tailorResumeName: v
    }), e_ = (e, t) => {
      el.current && clearTimeout(el.current), eo({
        type: e,
        text: t
      }), el.current = setTimeout(() => eo(null), 3e3)
    }, eL = (e, t) => {
      let r = (0, k.useResumeStore).getState(),
        n = {
          ...r.resumeMap
        };
      n[e] && (n[e] = {
        ...n[e],
        resumeName: t
      });
      let o = r.resumeCollection.map(r => r.resumeId === e ? {
          ...r,
          resumeName: t
        } : r),
        i = {
          resumeMap: n,
          resumeCollection: o,
          userEditedResumeNames: {
            ...r.userEditedResumeNames,
            [e]: t
          }
        };
      e.startsWith(x.TAILOR_RESUME_ID_PREFIX) && (i.tailorResumeName = t), (0, k.useResumeStore)
        .setState(i)
    }, eR = async () => {
      if (!J || et) return;
      let e = Z.trim();
      if (!e) {
        Q(null), ee("");
        return
      }
      let t = J.startsWith(x.TAILOR_RESUME_ID_PREFIX);
      if (t) {
        eL(J, e), Q(null), ee("");
        return
      }
      er(!0);
      try {
        let t = await (0, y.sendToBackground)({
          name: "updateResumeCollection",
          body: {
            resumeId: Number(J),
            resumeName: e
          }
        });
        t?.success ? (eL(J, e), Q(null), ee(""), e_("success",
          "Resume title updated successfully.")) : e_("error",
          "Failed to update resume title. Please try again.")
      } catch {
        e_("error", "Failed to update resume title. Please try again.")
      } finally {
        er(!1)
      }
    }, eO = async () => {
      let e = await eD();
      e && (0, I.downloadDataUrlFile)(e.base64URL, `${eP()}.${e.extension}`)
    }, eM = async () => {
      if (W && !z && !W.startsWith(x.TAILOR_RESUME_ID_PREFIX) && "true" === K && (
          "doc" === ej || "docx" === ej)) {
        let e = await (0, y.sendToBackground)({
          name: "getResumeBlob",
          body: {
            resumeId: W
          }
        });
        (0, I.downloadDataUrlFile)(e.base64URL, `${eP()}.${e.extension||"docx"}`);
        return
      }
      let e = await eD();
      if (!e) return;
      let t = await (0, y.sendToBackground)({
        name: "convertResumePdfToWord",
        body: {
          pdfBase64URL: e.base64URL,
          filename: `${eP()}.pdf`
        }
      });
      (0, I.downloadDataUrlFile)(t.base64URL, `${eP()}.${t.extension||"docx"}`)
    }, eN = (0, P.getResumeReviewDownloadMenuItems)({
      disableUploadResume: z,
      downloadPdf: eO,
      downloadWord: eM
    }), e$ = () => document.getElementById(E.HOST_ID)?.shadowRoot || document.body;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.Modal, {
      open: M,
      width: 1120,
      zIndex: S.HELPER_MODAL_Z_INDEX,
      centered: !0,
      className: `${U}container`,
      wrapClassName: "jobright-scroll-lock-modal-wrap",
      destroyOnClose: !0,
      onCancel: ew,
      getContainer: e$,
      closeIcon: (0, i.jsx)(F.default, {
        preview: !1,
        src: s.default,
        width: 16,
        height: 16,
        alt: "close"
      }),
      footer: (0, i.jsx)(L.default, {
        primary: "Download Resume",
        primaryIcon: (0, i.jsx)(F.default, {
          preview: !1,
          src: c.default,
          width: 16,
          height: 16,
          alt: "download"
        }),
        primaryMenuItems: eN,
        items: [{
          key: "2",
          label: "Continue",
          disabled: ey,
          onClick: ex
        }]
      }),
      title: (0, i.jsx)(a.Flex, {
        justify: "flex-start",
        align: "center",
        gap: 8,
        children: (0, i.jsx)("strong", {
          className: U + "modal-title",
          children: "View & Select Your Resume"
        })
      }),
      children: (0, i.jsxs)(a.Flex, {
        justify: "space-between",
        className: U + "sidebar",
        children: [(0, i.jsxs)(a.Flex, {
          className: U + "left-content",
          gap: 24,
          vertical: !0,
          children: [(0, i.jsxs)(a.Flex, {
            vertical: !0,
            gap: 8,
            className: U + "section-block",
            children: [(0, i.jsx)(a.Typography.Text, {
              className: U + "section-title",
              children: "Your Resume"
            }), (0, i.jsx)(a.Flex, {
              vertical: !0,
              gap: 4,
              style: {
                width: "100%"
              },
              children: es.map(e => {
                let t = "apply-without-resume" === e.type ?
                  z : !z && e.value === W,
                  r = J === e.value,
                  n = "resume" === e.type && !!e
                  .targetJobTitle;
                return (0, i.jsx)("div", {
                  className: `${U}resume-item ${t?`${U}resume-item-active`:""} ${t?"plugin-setting-item-selected":"plugin-setting-item-unselected"} ${r?`${U}resume-item-editing`:n?`${U}resume-item-expanded`:""}`,
                  onClick: () => {
                    r || eC(e.value)
                  },
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: t => {
                    r || "Enter" !== t.key && " " !== t
                      .key || (t.preventDefault(), eC(e
                        .value))
                  },
                  children: r ? (0, i.jsx)(a.Flex, {
                    gap: 8,
                    align: "center",
                    style: {
                      width: "100%"
                    },
                    children: (0, i.jsx)(a.Input, {
                      autoFocus: !0,
                      value: Z,
                      maxLength: 50,
                      onChange: e => ee(e.target
                        .value),
                      onBlur: e => {
                        e.stopPropagation(),
                        eR()
                      },
                      onPressEnter: () => eR(),
                      variant: "borderless",
                      onClick: e => e
                        .stopPropagation(),
                      className: U + "edit-input"
                    })
                  }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(a.Flex, {
                      gap: 8,
                      align: "center",
                      style: {
                        width: "100%"
                      },
                      children: [(0, i.jsx)(
                          "span", {
                            className: "plugin-setting-item-radio",
                            "aria-hidden": "true",
                            children: (0, i
                              .jsx)(
                            "span", {
                              className: "plugin-setting-item-radio-inner"
                            })
                          }), (0, i.jsxs)(
                          "div", {
                            className: U +
                              "resume-item-content",
                            children: [(0, i
                                .jsx)(a
                                .Typography
                                .Text, {
                                  className: U +
                                    "resume-name",
                                  ellipsis:
                                    !0,
                                  children: e
                                    .label
                                }),
                              "resume" === e
                              .type && e
                              .customized &&
                              (0, i.jsx)(a
                                .Flex, {
                                  justify: "center",
                                  align: "center",
                                  className: U +
                                    "tailor-tag",
                                  gap: 2,
                                  children: (
                                    0, i
                                    .jsx)(
                                    "span", {
                                      children: "Customized"
                                    })
                                }),
                              "resume" === e
                              .type && e
                              .primary && (
                                0, i.jsxs)(a
                                .Flex, {
                                  justify: "center",
                                  align: "center",
                                  className: U +
                                    "primary-tag",
                                  gap: 2,
                                  children: [
                                    (0, i
                                      .jsx
                                      )(F
                                      .default, {
                                        src: g
                                          .default,
                                        preview:
                                          !
                                          1,
                                        width: 12,
                                        height: 12
                                      }),
                                    (0, i
                                      .jsx
                                      )(
                                      "span", {
                                        children: "Primary"
                                      })
                                  ]
                                })
                            ]
                          }), "resume" === e
                        .type && t && (0, i
                          .jsx)("button", {
                          type: "button",
                          className: U +
                            "edit-button",
                          onClick: t => {
                            t.stopPropagation(),
                              Q(e.value),
                              ee(e.label)
                          },
                          children: (0, i
                            .jsx)(F
                            .default, {
                              src: f
                                .default,
                              preview: !1,
                              width: 16,
                              height: 16,
                              alt: "edit"
                            })
                        })
                      ]
                    }), n && (0, i.jsxs)("div", {
                      className: U +
                        "target-job",
                      children: ["Target job:",
                        " ", "resume" === e
                        .type && e
                        .targetJobTitle
                      ]
                    })]
                  })
                }, e.value)
              })
            })]
          }), (0, i.jsxs)(a.Flex, {
            vertical: !0,
            gap: 8,
            className: U + "section-block",
            children: [(0, i.jsx)(a.Typography.Text, {
              className: U + "section-title",
              children: "Choose version"
            }), (0, i.jsxs)(a.Flex, {
              gap: 4,
              className: U + "version-row",
              children: [(0, i.jsxs)("button", {
                type: "button",
                className: `${U}version-chip ${"false"===K||W?.startsWith(x.TAILOR_RESUME_ID_PREFIX)?`${U}version-chip-active plugin-setting-item-selected`:"plugin-setting-item-unselected"}`,
                onClick: () => X("false"),
                disabled: z,
                children: [(0, i.jsx)("span", {
                  className: "plugin-setting-item-radio",
                  "aria-hidden": "true",
                  children: (0, i.jsx)("span", {
                    className: "plugin-setting-item-radio-inner"
                  })
                }), (0, i.jsx)("span", {
                  children: "Jobright Template"
                })]
              }), (0, i.jsxs)("button", {
                type: "button",
                className: `${U}version-chip ${"true"!==K||W?.startsWith(x.TAILOR_RESUME_ID_PREFIX)?"plugin-setting-item-unselected":`${U}version-chip-active plugin-setting-item-selected`}`,
                onClick: () => X("true"),
                disabled: z || !!W && W.startsWith(x
                  .TAILOR_RESUME_ID_PREFIX),
                children: [(0, i.jsx)("span", {
                  className: "plugin-setting-item-radio",
                  "aria-hidden": "true",
                  children: (0, i.jsx)("span", {
                    className: "plugin-setting-item-radio-inner"
                  })
                }), (0, i.jsx)("span", {
                  children: "Original Version"
                })]
              })]
            })]
          })]
        }), z ? (0, i.jsx)(a.Flex, {
          justify: "center",
          align: "center",
          style: {
            flex: "0 0 720px",
            minWidth: 720,
            maxWidth: 720,
            minHeight: 496
          },
          children: (0, i.jsx)(O.default, {
            image: (0, i.jsx)("img", {
              src: m.default,
              style: {
                width: 72,
                height: 72
              }
            }),
            description: (0, i.jsxs)(i.Fragment, {
              children: ["No resume will be uploaded.", (0, i.jsx)(
                  "br", {}),
                "Autofill using your autofill information."
              ]
            }),
            buttonText: "View My Information",
            onClick: () => {
              (0, P.openAutofillInfoFromResumeReview)({
                closeResumeReview: ew,
                openAutofillInfo: () => H(!0)
              })
            }
          })
        }) : W && (0, i.jsx)(N.default, {
          resumeId: W,
          resumeMap: r,
          template: n,
          useOriginalResume: "true" === K,
          isWord: r[W]?.resumeNameWithSuffix?.toLowerCase().endsWith(
            ".docx") || r[W]?.resumeNameWithSuffix?.toLowerCase().endsWith(
              ".doc") || !1,
          style: {
            flex: "0 0 720px",
            minWidth: 720,
            maxWidth: 720,
            minHeight: 496
          }
        })]
      })
    }), en && (0, i.jsx)("div", {
      className: `${U}toast ${U}toast-${en.type}`,
      children: en.text
    }), (0, i.jsx)(w.default, {
      open: ei,
      title: "You have unsaved changes",
      content: "Do you want to save your changes before you leave?",
      confirmText: "Save",
      cancelText: "Close",
      zIndex: S.HELPER_MODAL_Z_INDEX + 1,
      getContainer: e$,
      onConfirm: eE,
      onCancel: eS
    })]
  })
};
r.default = H

