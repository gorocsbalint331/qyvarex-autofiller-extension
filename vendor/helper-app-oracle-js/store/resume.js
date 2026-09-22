/**
 * Parcel module id: iSBDf
 * Resolved path: store/resume.js (oracle restore)
 * Dependencies:
 *   ./autofill-diff -> 3L9SO  =>  _tilde_store/autofill-diff.js
 *   ./cover-letter -> 71sWr  =>  cover-letter.js
 *   ./cover-letter-state -> 7Ks3y  =>  _tilde_store/cover-letter-state.js
 *   ./profile -> 9omPD  =>  _tilde_store/profile.js
 *   ./resume-autofill-ready -> gJ2PS  =>  resume-autofill-ready.js
 *   ./resume-init -> dbT6g  =>  resume-init.js
 *   ./resume-name -> 3Cm0K  =>  resume-name.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   @plasmohq/storage -> 9RCRe  =>  @plasmohq/storage.js
 *   zustand -> ffRFv  =>  zustand.js
 *   ~api/autofill-info -> 3ZEEL  =>  _tilde_api/autofill-info.js
 *   ~api/resume-helpers -> 2rFEx  =>  _tilde_api/resume-helpers.js
 *   ~contents -> d4tj7  =>  _tilde_contents.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  _tilde_contents/methods/cover-letter.js
 *   ~contents/shared/constants -> ayCbq  =>  _tilde_contents/shared/constants.js
 *   ~core/utils -> aTDh5  =>  _tilde_core/utils.js
 *   ~enums/jobs/resume -> 3lKd7  =>  _tilde_enums/jobs/resume.js
 *   ~enums/storage -> e2WM4  =>  _tilde_enums/storage.js
 *   ~store/url -> b53L3  =>  _tilde_store/url.js
 *   ~utils/current-job-id -> cAdEa  =>  _tilde_utils/current-job-id.js
 *   ~utils/job-id -> klnOn  =>  _tilde_utils/job-id.js
 *   ~utils/jobright-agent-page -> c3KQJ  =>  _tilde_utils/jobright-agent-page.js
 *   ~utils/resume-job-id -> 67Z8T  =>  _tilde_utils/resume-job-id.js
 *   ~utils/resume-upload-filename -> ev1lJ  =>  _tilde_utils/resume-upload-filename.js
 *   ~utils/skill-list -> 74lkH  =>  _tilde_utils/skill-list.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "mapResumeDiagnoseToAutofillSections", () => _), n.export(r,
  "syncResumeToAutofill", () => L), n.export(r, "updateAutofillInstance", () => R), n.export(r,
  "useResumeStore", () => B);
var o = e("zustand"),
  i = e("@plasmohq/messaging"),
  a = e("@plasmohq/storage"),
  l = e("~api/autofill-info"),
  s = e("~api/resume-helpers"),
  u = e("~contents"),
  c = e("~contents/methods/cover-letter"),
  d = e("~contents/shared/constants"),
  f = e("~core/utils"),
  p = e("~enums/jobs/resume"),
  m = e("~enums/storage"),
  h = e("~store/url"),
  g = e("~utils/current-job-id"),
  b = e("~utils/job-id"),
  y = e("~utils/jobright-agent-page"),
  v = e("~utils/resume-job-id"),
  w = e("~utils/resume-upload-filename"),
  S = e("~utils/skill-list"),
  E = e("./autofill-diff"),
  x = e("./cover-letter"),
  C = e("./cover-letter-state"),
  A = e("./profile"),
  k = e("./resume-autofill-ready"),
  T = e("./resume-init"),
  F = e("./resume-name");
let I = new a.Storage,
  j = null;

function D(e, t) {
  console.log(`[ResumeUploadDebug] ${e}`, t ?? {})
}
let P = async () => {
  let e = await I.get(m.STORAGE_KEY.EVAL_DISABLE_RESUME_AUTOFILL_SYNC);
  return !0 === e || !!e && "object" == typeof e && !0 === e.disabled && (!e.expiresAt || e
    .expiresAt > Date.now())
}, _ = e => {
  let t = e.workExperience?.workExperienceDetails?.map(e => ({
      job_title: e.jobTitle,
      organization: e.organization,
      location: e.location,
      dates: {
        start_date: e.dates?.startDate,
        completion_date: e.dates?.isCurrent ? null : e.dates?.completionDate,
        is_current: e.dates?.isCurrent
      },
      summary: e.summary?.jobDescription,
      job_descriptions: e.jobDescriptions?.map(e => e.jobDescription)
    })) ?? [],
    r = e.education?.educationDetails?.map(e => ({
      organization: e.organization,
      accreditation: e.accreditation,
      gpa: e.gpa,
      dates: {
        start_date: e.dates?.startDate,
        completion_date: e.dates?.completionDate,
        is_current: e.dates?.isCurrent
      }
    })) ?? [],
    n = e.skills?.skills ?? {};
  return {
    workExperience: t,
    education: r,
    skills: n
  }
}, L = async (e, t) => {
  if (e && (0, y.shouldSyncResumeToAutofillOnUrl)(window.location.href) && !await P()) try {
    let r = e.startsWith(d.TAILOR_RESUME_ID_PREFIX),
      n = null;
    if (r) n = t[e]?.resumeTailor;
    else {
      let r = t[e]?.diagnoseId;
      if (r) {
        let e = await (0, i.sendToBackground)({
          name: "getResumeDiagnose",
          body: {
            diagnoseId: r
          }
        });
        n = e?.resumeDiagnose
      }
    }
    if (n) {
      let e = await (0, i.sendToBackground)({
        name: "getAutofillInfo",
        body: {
          withAutoUpdate: !0,
          forceRefresh: !0
        }
      });
      if (e?.autoUpdate === !1) return;
      if (!e?.data) {
        console.warn("[AutofillInfo] Resume sync skipped", {
          reason: "missing_snapshot"
        });
        return
      }
      let t = e.data,
        {
          workExperience: r,
          education: o,
          skills: a
        } = _(n),
        s = await (0, i.sendToBackground)({
          name: "saveAutofillInfo",
          body: {
            ...(0, l.isAutofillInfoRevision)(e.revision) ? {
              expectedRevision: e.revision
            } : {},
            structuredData: (0, S.withStructuredSkillList)({
              ...t,
              workExperience: r,
              education: o
            }, a)
          }
        });
      if (!(0, l.isAutofillInfoSaveSuccess)(s)) {
        console.warn("[AutofillInfo] Resume sync failed", {
          reason: (0, l.isAutofillInfoConflict)(s) ? "revision_conflict" :
            "save_failed",
          expectedRevision: e.revision
        }), (0, l.isAutofillInfoConflict)(s) && await (0, i.sendToBackground)({
          name: "getAutofillInfo",
          body: {
            withAutoUpdate: !0,
            forceRefresh: !0
          }
        });
        return
      }
      let u = [],
        c = t.education ?? [],
        d = t.workExperience ?? [],
        f = (0, S.extractSkillList)(t);
      (0, E.diffArrayFields)(c, o, E.EDU_FIELD_MAP, "education", u), (0, E.diffArrayFields)(
        d, r, E.WORK_FIELD_MAP, "workExperience", u);
      let p = (0, S.extractSkillList)({
        skills: a
      });
      JSON.stringify(f) !== JSON.stringify(p) && u.push("skill"), u.length > 0 && B
        .getState().setAutofillChangedFields(u)
    }
  } catch (e) {
    console.error("[AutofillInfo] Resume sync failed", {
      reason: "request_failed"
    })
  }
}, R = (e = {}) => {
  let t = (0, u.getAutofillInstance)();
  if (t)
    for (let [r, n] of Object.entries(e)) t[r] = n;
  (0, f.updateIframeUserInfo)(e)
}, O = {
  resumeMap: {},
  resumeCollection: [],
  tailorResume: null,
  lastUsedResume: void 0,
  lastUsedOriginalResume: !1,
  tailorResumeName: "",
  disableUploadResume: !1,
  template: p.TEMPLATE_ID.standard,
  openResumeSelector: !1,
  openAutofillInfo: !1,
  autofillInfoInitialSection: null,
  autofillChangedFields: [],
  enableUploadResume: !0,
  fromAgent: !1,
  agentData: null,
  agentCoverLetter: null,
  currentJobCoverLetter: null,
  editWithAiCoverLetterSeed: null,
  coverLetterDetectionStatus: "",
  openCoverLetterPreview: !1,
  userEditedResumeNames: {}
}, M = !1;
async function N(e) {
  let t = (0, b.extractJobIdFromUrl)((0, h.useUrlStore).getState().currentTabUrl || window
    .location.href);
  return (0, v.resolveResumeJobId)({
    currentTabJob: e,
    fallbackJobId: t,
    currentJobContextId: (0, g.resolveCurrentJobId)({
      pageUrl: (0, h.useUrlStore).getState().currentTabUrl || window.location.href
    })
  })
}
let $ = (0, F.createTailorResumeFileNameLoader)(async e => {
    let t = await (0, i.sendToBackground)({
      name: "getTailorResumeFileName",
      body: {
        jobId: e
      }
    });
    return "string" == typeof t ? t.trim() : ""
  }),
  B = (0, o.create)((e, t) => ({
    ...O,
    setTailorResumeName: t => e({
      tailorResumeName: t
    }),
    setUserEditedResumeName: (t, r) => e(e => ({
      userEditedResumeNames: {
        ...e.userEditedResumeNames,
        [t]: r
      }
    })),
    refreshResumeList: async (r, n) => {
      let {
        fetchResumeCollection: o,
        fetchTailorHistory: i,
        fetchAgentTailorResume: a
      } = t(), l = await N(n), [s, u, c, f] = await Promise.all([o(), i(l), a(), $(l)]), h =
        c || u, g = s.reduce((e, t) => (e[t.resumeId + ""] = t, e), {}), b = await I.get(m
          .STORAGE_KEY.RESUME_TEMPLATE);
      b || (b = p.TEMPLATE_ID.standard);
      let y = A.useProfileStore.getState().userProfile?.profile?.personalInfo,
        v = (0, F.resolveTailorResumeName)({
          userStage: r,
          currentTabJob: n,
          firstName: y?.firstName,
          lastName: y?.lastName,
          apiName: f
        });
      if (h) {
        let e = d.TAILOR_RESUME_ID_PREFIX + h?.tailorId;
        g[e] = h, s.unshift({
          ...h,
          resumeId: e
        }), b = u?.style?.template ?? p.TEMPLATE_ID.standard
      }
      let {
        userEditedResumeNames: w
      } = t();
      for (let e of s) {
        let t = w[e.resumeId];
        t && (e.resumeName = t, g[e.resumeId] && (g[e.resumeId] = {
          ...g[e.resumeId],
          resumeName: t
        }))
      }
      let S = h ? d.TAILOR_RESUME_ID_PREFIX + h.tailorId : null,
        E = S ? w[S] : void 0,
        x = E ?? v ?? void 0;
      S && void 0 !== x && (g[S].resumeName = x, s[0].resumeName = x), e({
        tailorResume: h,
        template: b,
        resumeMap: g,
        resumeCollection: s,
        ...void 0 !== x ? {
          tailorResumeName: x
        } : {}
      })
    },
    setAgentTailorResume: async (r, n) => {
      let {
        resumeMap: o,
        resumeCollection: a
      } = t(), l = await (0, i.sendToBackground)({
        name: "getAgentTailorResume",
        body: {
          tailorId: r
        }
      });
      if (!l) return;
      let s = Object.fromEntries(Object.entries(o).filter(([e]) => !e.startsWith(d
          .TAILOR_RESUME_ID_PREFIX))),
        u = d.TAILOR_RESUME_ID_PREFIX + r;
      s[u] = l;
      let c = a.filter(e => !String(e.resumeId ?? "").startsWith(d.TAILOR_RESUME_ID_PREFIX)),
        f = [{
          ...l,
          resumeId: u
        }, ...c];
      e({
        resumeMap: s,
        resumeCollection: f,
        tailorResume: l,
        tailorResumeName: n ?? ""
      }), t().setLastUsedResume(u), L(u, s)
    },
    initResume: async (e, r, n) => {
      D("initResume:start", {
          isResumeRefresh: e,
          userLoggedIn: !!r?.logined,
          jobId: n?.jobResult?.jobId
        }), await t().refreshResumeList(r, n), await t().initLastUsedResume(e), await t()
        .refreshCoverLetterState(n);
      let o = t();
      D("initResume:done", {
        resumeCollectionLength: o.resumeCollection.length,
        lastUsedResume: o.lastUsedResume,
        disableUploadResume: o.disableUploadResume,
        hasLastUsedResumeInMap: !!o.lastUsedResume && !!o.resumeMap[o.lastUsedResume]
      })
    },
    ensureResumeReadyForAutofill: async (e = {}) => {
      let r = t(),
        n = (0, k.shouldRefreshResumeBeforeAutofill)({
          disableUploadResume: r.disableUploadResume,
          userLoggedIn: !!e.userState?.logined,
          fromAgent: r.fromAgent,
          agentData: r.agentData,
          lastUsedResume: r.lastUsedResume,
          resumeMap: r.resumeMap,
          resumeCollectionLength: r.resumeCollection.length
        });
      D("ensure:start", {
        shouldRefresh: n,
        userLoggedIn: !!e.userState?.logined,
        disableUploadResume: r.disableUploadResume,
        lastUsedResume: r.lastUsedResume,
        resumeCollectionLength: r.resumeCollection.length,
        resumeMapHasLastUsedResume: !!r.lastUsedResume && !!r.resumeMap[r.lastUsedResume],
        fromAgent: r.fromAgent,
        hasAgentResumeId: !!r.agentData?.resumeId,
        hasAgentTailorId: !!r.agentData?.tailorId
      }), n && (j || (j = t().initResume(!1, e.userState, e.currentTabJob).finally(() => {
        j = null
      })), await j), await t().updateFillingResume()
    },
    refreshCoverLetterState: async e => {
      let r = await N(e),
        n = (0, x.resolveCoverLetterRefreshPlan)({
          jobId: r ?? void 0
        });
      n.currentJobId && await t().refreshCurrentJobCoverLetter(n.currentJobId, e?.jobResult
        ?.jobTitle), await t().refreshAgentCoverLetter(e)
    },
    refreshAgentCoverLetter: async e => {
      let {
        disableUploadResume: r,
        agentCoverLetter: n,
        setAgentCoverLetter: o
      } = t();
      if (r) {
        o(null);
        return
      }
      let a = (0, x.resolveAgentCoverLetterViewRequest)({
        url: window.location.href,
        agentCoverLetter: n
      });
      if (!a) {
        o(null);
        return
      }
      try {
        let t = await (0, i.sendToBackground)({
          name: "getAgentCoverLetter",
          body: a
        });
        if (t?.coverLetterId) {
          let r = A.useProfileStore.getState().userProfile?.profile?.personalInfo,
            n = [r?.firstName, r?.lastName].filter(Boolean).join(" "),
            o = (0, C.buildDefaultCoverLetterName)(n, e?.jobResult?.jobTitle);
          t = {
            ...t,
            coverLetterName: (0, C.getCoverLetterDisplayName)(t.coverLetterName, o)
          }
        }
        o(t ?? null)
      } catch (e) {
        console.error("Failed to refresh agent cover letter", e)
      }
    },
    initLastUsedResume: async (r = !1) => {
      let n = t(),
        o = !M,
        i = await I.get(m.STORAGE_KEY.DISABLE_RESUME_UPLOAD) ?? !1,
        a = await I.get(m.STORAGE_KEY.LAST_USED_RESUME) ?? void 0,
        l = await I.get(m.STORAGE_KEY.LAST_USED_ORIGINAL_RESUME) ?? !1,
        s = n.lastUsedResume,
        {
          lastUsedResume: c,
          shouldSyncResumeToAutofill: d,
          shouldPersistLastUsedResume: f
        } = (0, T.resolveInitLastUsedResumeState)({
          isFirstLoad: o,
          isResumeRefresh: r,
          disableUploadResume: i,
          storedLastUsedResume: a,
          previousLastUsedResumeInState: s,
          resumeCollection: n.resumeCollection,
          tailorResume: n.tailorResume,
          agentResumeId: u.agentResumeId,
          agentTailorId: u.agentTailorId
        });
      e({
          disableUploadResume: i,
          lastUsedResume: c,
          lastUsedOriginalResume: l
        }), f && await I.set(m.STORAGE_KEY.LAST_USED_RESUME, c), d && L(c, n.resumeMap), o &&
        (M = !0)
    },
    fetchResumeCollection: async () => {
      let e = await (0, i.sendToBackground)({
        name: "getResumeCollection"
      });
      return e
    },
    fetchAgentTailorResume: async () => {
      if (u.agentTailorId) {
        let e = await (0, i.sendToBackground)({
          name: "getAgentTailorResume",
          body: {
            tailorId: u.agentTailorId
          }
        });
        return e
      }
      return null
    },
    fetchTailorHistory: async e => {
      if (!e) return null;
      let t = await (0, i.sendToBackground)({
        name: "getTailorResume",
        body: {
          jobId: e
        }
      });
      return t
    },
    setLastUsedResume: t => {
      e({
        lastUsedResume: t
      }), I.set(m.STORAGE_KEY.LAST_USED_RESUME, t)
    },
    setLastUsedOriginalResume: t => {
      e({
        lastUsedOriginalResume: t
      }), I.set(m.STORAGE_KEY.LAST_USED_ORIGINAL_RESUME, t)
    },
    setDisableUploadResume: t => {
      e({
        disableUploadResume: t
      }), I.set(m.STORAGE_KEY.DISABLE_RESUME_UPLOAD, t)
    },
    setTemplate: t => {
      e({
        template: t
      }), I.set(m.STORAGE_KEY.RESUME_TEMPLATE, t)
    },
    setOpenResumeSelector: t => {
      e({
        openResumeSelector: t
      })
    },
    setOpenAutofillInfo: (t, r = null) => {
      e({
        openAutofillInfo: t,
        autofillInfoInitialSection: t ? r : null
      })
    },
    setAutofillChangedFields: t => {
      e({
        autofillChangedFields: t
      })
    },
    clearAutofillChangedField: t => {
      e(e => ({
        autofillChangedFields: e.autofillChangedFields.filter(e => e !== t)
      }))
    },
    setFromAgent: t => e({
      fromAgent: t
    }),
    setAgentData: t => e({
      agentData: t
    }),
    setAgentCoverLetter: t => e({
      agentCoverLetter: t
    }),
    setCurrentJobCoverLetter: t => e({
      currentJobCoverLetter: t
    }),
    setEditWithAiCoverLetterSeed: t => e({
      editWithAiCoverLetterSeed: t
    }),
    setCoverLetterDetectionStatus: t => e({
      coverLetterDetectionStatus: t
    }),
    setOpenCoverLetterPreview: t => e({
      openCoverLetterPreview: t
    }),
    refreshCurrentJobCoverLetter: async (e, r) => {
      let {
        setCurrentJobCoverLetter: n
      } = t();
      if (!e) {
        n(null);
        return
      }
      let o = null;
      if (o = await (0, i.sendToBackground)({
          name: "getCurrentCoverLetter",
          body: {
            jobId: e
          }
        }), o?.coverLetterId) {
        let e = A.useProfileStore.getState().userProfile?.profile?.personalInfo,
          t = [e?.firstName, e?.lastName].filter(Boolean).join(" "),
          n = (0, C.buildDefaultCoverLetterName)(t, r);
        o = {
          ...o,
          coverLetterName: (0, C.getCoverLetterDisplayName)(o.coverLetterName, n)
        }
      }
      n(o)
    },
    updateFillingResume: async () => {
      let {
        fromAgent: e,
        agentData: r,
        disableUploadResume: n,
        resumeMap: o,
        lastUsedResume: a,
        lastUsedOriginalResume: l,
        template: u,
        tailorResumeName: c,
        agentCoverLetter: f,
        currentJobCoverLetter: p
      } = t();
      if (D("updateFillingResume:start", {
          fromAgent: e,
          disableUploadResume: n,
          lastUsedResume: a,
          lastUsedOriginalResume: l,
          resumeCollectionLength: t().resumeCollection.length,
          resumeMapHasLastUsedResume: !!a && !!o[a],
          hasAgentResumeId: !!r?.resumeId,
          hasAgentTailorId: !!r?.tailorId
        }), e && r && r.tailorId) {
        let e = await (0, i.sendToBackground)({
          name: "getAgentTailorResume",
          body: {
            tailorId: r.tailorId
          }
        });
        R({
          disableUploadResume: !1,
          resumeInfo: {
            tailorId: r.tailorId,
            tailor: !0,
            tailorResume: e,
            template: u,
            resumeName: (0, w.getResumeUploadFilename)({
              selectedResume: e,
              isTailorResume: !0,
              tailorResumeName: c
            })
          }
        }), D("updateFillingResume:set-tailor-agent", {
          tailorId: r.tailorId,
          hasTailorResume: !!e
        })
      } else e && r && r.resumeId ? (R({
        disableUploadResume: !1,
        resumeInfo: {
          id: r.resumeId,
          diagnoseId: o[r.resumeId]?.diagnoseId,
          template: u,
          resumeName: (0, w.getResumeUploadFilename)({
            selectedResume: o[r.resumeId],
            isTailorResume: !1
          }),
          useOriginalResume: r.useOriginalResume
        }
      }), D("updateFillingResume:set-base-agent", {
        resumeId: r.resumeId,
        diagnoseId: o[r.resumeId]?.diagnoseId,
        hasResumeInMap: !!o[r.resumeId]
      })) : void 0 === a ? (R({
        disableUploadResume: n,
        resumeInfo: {
          id: void 0,
          tailorId: void 0,
          diagnoseId: void 0,
          template: u,
          resumeName: void 0
        }
      }), D("updateFillingResume:set-empty", {
        reason: "lastUsedResume is undefined"
      })) : a && a.startsWith(d.TAILOR_RESUME_ID_PREFIX) ? (R({
        disableUploadResume: n,
        resumeInfo: {
          tailorId: a.replace(d.TAILOR_RESUME_ID_PREFIX, ""),
          tailor: !0,
          tailorResume: o[a],
          template: u,
          resumeName: (0, w.getResumeUploadFilename)({
            selectedResume: o[a],
            isTailorResume: !0,
            tailorResumeName: c
          })
        }
      }), D("updateFillingResume:set-tailor", {
        lastUsedResume: a,
        tailorId: a.replace(d.TAILOR_RESUME_ID_PREFIX, ""),
        hasTailorResume: !!o[a]
      })) : (R({
        disableUploadResume: n,
        resumeInfo: {
          id: a,
          diagnoseId: o[a]?.diagnoseId,
          template: u,
          resumeName: (0, w.getResumeUploadFilename)({
            selectedResume: o[a],
            isTailorResume: !1
          }),
          useOriginalResume: l
        }
      }), D("updateFillingResume:set-base", {
        resumeId: a,
        diagnoseId: o[a]?.diagnoseId,
        hasResumeInMap: !!o[a],
        useOriginalResume: l
      }));
      let {
        activeCoverLetter: m
      } = (0, C.resolveCoverLetterState)({
        detectionStatus: "",
        agentCoverLetter: f,
        currentJobCoverLetter: p
      }), h = (0, C.resolveCoverLetterDownloadRequest)({
        useLegacyDownload: (0, s.shouldUseLegacyAgentCoverLetterDownload)(window.location
          .href),
        agentCoverLetter: f,
        currentJobCoverLetter: p
      }), g = m ? {
        ...m,
        markdown: h?.markdown || m.markdown || "",
        useLegacyDownload: h?.useLegacyDownload || !1
      } : null;
      R({
        coverLetter: g
      })
    }
  }));
(0, c.onAutofillCoverLetterGenerated)(e => {
  let t = (0, C.buildEditWithAiCoverLetterSeed)(e);
  t && B.getState().setEditWithAiCoverLetterSeed(t)
})

