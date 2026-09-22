/**
 * Parcel module id: 1YpU3
 * Resolved path: src/store/externalJob.js
 * Dependencies:
 *   ./profile -> 9omPD  =>  src/store/profile.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ahooks -> 9sqtS  =>  ahooks.js
 *   zustand -> ffRFv  =>  zustand.js
 *   ~api/externalJob -> dUqCQ  =>  src/api/externalJob.js
 *   ~core/markdownConverter -> h3FNP  =>  src/core/markdownConverter.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~enums/jobs/joblist -> fttIf  =>  src/enums/jobs/joblist.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/checkLinkedin -> 5xJv6  =>  src/utils/checkLinkedin.js
 *   ~utils/job-id -> klnOn  =>  src/utils/job-id.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "syncExternalJobQueryToCurrentPage", () => y), n.export(r,
  "useExternalJobStore", () => v);
var o = e("ahooks"),
  i = e("zustand"),
  a = e("@plasmohq/messaging"),
  l = e("~api/externalJob"),
  s = e("~core/markdownConverter"),
  u = e("~core/utils"),
  c = e("~enums/http"),
  d = e("~enums/jobs/joblist"),
  f = e("~store/url"),
  p = e("~utils/checkLinkedin"),
  m = e("~utils/job-id"),
  h = e("~utils/trace"),
  g = e("./profile");
let b = {
  page: "init",
  jobId: null,
  jobInfo: null,
  matchedSkillCount: 0,
  totalSkillCount: 0,
  matchedScore: 0,
  missingJobSkills: !1,
  formValues: {
    jobTitle: "",
    url: "",
    companyName: "",
    jobDescription: "",
    companyId: void 0
  },
  analyzeStatus: "idle",
  scrapeFallbackStatus: "idle",
  isAddingAnotherJob: !1,
  manualOverrideJobId: null,
  pendingOverrideJobId: null
};

function y({
  jobId: e,
  currentUrl: t = window.location.href,
  topLevelUrl: r = window.top.location.href,
  history: n = window.history,
  setCurrentTabUrl: o = (0, f.useUrlStore).getState().setCurrentTabUrl
}) {
  if (!e || !t || (0, p.isLinkedinDomain)(r)) return null;
  try {
    let r = (0, m.setJobIdInUrl)(t, e);
    return r !== t && n.replaceState(n.state, "", r), o(r), r
  } catch (e) {
    return console.warn("Failed to sync external job jr_id to current page url:", e), null
  }
}
let v = (0, i.create)((e, t) => ({
    ...b,
    setPage: r => {
      t().page !== r && e({
        page: r
      })
    },
    addExternalJob: async r => {
      (0, h.trackEvent)("autofill_external_job_parse_started", {
        user_id: g.useProfileStore.getState().userStage?.userId,
        source: (0, u.checkSupportStatus)() ? "supported_page" : "unsupported_page",
        jobTitle: r.jobTitle,
        companyName: r.companyName,
        url: window.location.href
      }), t().setAndBroadcastAnalyzeStatus("loading");
      let n = await (0, a.sendToBackground)({
        name: "postExternalJobImport",
        body: r
      });
      n === c.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR && t().setAndBroadcastAnalyzeStatus(
        "error"), n && ((0, p.isLinkedinDomain)(window.top.location.href) && (0, a
        .sendToBackground)({
        name: "saveExternalJobId",
        body: {
          linkedinJobId: (0, p.getCurrentJobId)(),
          externalJobId: n
        }
      }), e({
        jobId: n
      })), (0, l.pollingExternalJob)({
        api: async () => (0, a.sendToBackground)({
          name: "getExternalJobStatus",
          body: {
            jobId: n
          }
        }),
        checkSuccess: e => d.EXTERNAL_JOB_IMPORT_STATUS.IMPORTED === e,
        checkFailed: e => d.EXTERNAL_JOB_IMPORT_STATUS.FAILED === e,
        onSuccess: async () => {
          let e = await (0, a.sendToBackground)({
            name: "getJobBannerDetail",
            body: {
              jobId: n
            }
          });
          y({
            jobId: "string" == typeof n ? n : null
          }), t().setJobInfo(e), t().setFormValues(b.formValues);
          let r = t().pendingOverrideJobId;
          r && (t().setManualOverrideJobId(r), t().setPendingOverrideJobId(null)), t()
            .setAndBroadcastAnalyzeStatus("success"), t().setIsAddingAnotherJob(!1), (0,
              h.trackEvent)("autofill_external_job_parse_end", {
              user_id: g.useProfileStore.getState().userStage?.userId,
              source: (0, u.checkSupportStatus)() ? "supported_page" :
                "unsupported_page",
              current_url: window.location.href,
              status: "success",
              external_job_id: n
            })
        },
        onError: () => {
          t().setAndBroadcastAnalyzeStatus("error"), t().setIsAddingAnotherJob(!1), (0,
            h.trackEvent)("autofill_external_job_parse_end", {
            user_id: g.useProfileStore.getState().userStage?.userId,
            source: (0, u.checkSupportStatus)() ? "supported_page" :
              "unsupported_page",
            current_url: window.location.href,
            status: "failed",
            external_job_id: n
          })
        }
      })
    },
    setAndBroadcastAnalyzeStatus: t => {
      e({
        analyzeStatus: t
      }), window.top === window.self && w(t)
    },
    setFormValues: t => {
      e(e => ({
        formValues: {
          ...e.formValues,
          ...t
        }
      }))
    },
    resetFormValues: () => {
      e({
        formValues: b.formValues,
        scrapeFallbackStatus: b.scrapeFallbackStatus
      })
    },
    parsePageWithMarkdown: async () => {
      e({
        scrapeFallbackStatus: "loading"
      });
      try {
        let {
          html: r,
          iframeSrcs: n
        } = (0, s.extractCleanedHtml)();
        if (!r) {
          e({
            scrapeFallbackStatus: "error"
          });
          return
        }
        let o = 3e4,
          i = await Promise.race([(0, a.sendToBackground)({
            name: "parsePageMarkdown",
            body: {
              html: r,
              iframeSrcs: n
            }
          }), new Promise(e => setTimeout(() => e(null), o))]);
        if (i === c.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR || !i || "number" == typeof i) {
          e({
            scrapeFallbackStatus: "error"
          });
          return
        }
        let l = {};
        i.job_title && (l.jobTitle = i.job_title), i.company?.company_name && (l.companyName =
            i.company.company_name), i.job_description && (l.jobDescription = i
            .job_description), i.company?.company_id && (l.companyId = i.company.company_id),
          Object.keys(l).length > 0 && t().setFormValues(l), e({
            scrapeFallbackStatus: "success"
          })
      } catch (t) {
        console.error("[MarkdownFallback] Error:", t), e({
          scrapeFallbackStatus: "error"
        })
      }
    },
    setIsAddingAnotherJob: r => {
      t().isAddingAnotherJob !== r && e({
        isAddingAnotherJob: r
      })
    },
    setJobInfo: t => {
      e({
        jobInfo: t
      })
    },
    setMatchedSkillCount: t => {
      e({
        matchedSkillCount: t
      })
    },
    setTotalSkillCount: t => {
      e({
        totalSkillCount: t
      })
    },
    setMatchedScore: t => {
      e({
        matchedScore: t
      })
    },
    setMissingJobSkills: r => {
      t().missingJobSkills !== r && e({
        missingJobSkills: r
      })
    },
    setJobId: r => {
      t().jobId !== r && e({
        jobId: r
      })
    },
    setManualOverrideJobId: r => {
      t().manualOverrideJobId !== r && e({
        manualOverrideJobId: r
      })
    },
    setPendingOverrideJobId: r => {
      t().pendingOverrideJobId !== r && e({
        pendingOverrideJobId: r
      })
    },
    useExternalJobDetailRequest: () => {
      (0, o.useRequest)(async () => {
        let e = await (0, a.sendToBackground)({
          name: "getJobBannerDetail",
          body: {
            jobId: t().jobId
          }
        });
        return e
      }, {
        ready: !t().isAddingAnotherJob && "success" !== t().analyzeStatus && !!t().jobId,
        refreshDeps: [t().jobId, t().analyzeStatus, t().page, t().isAddingAnotherJob],
        onBefore: () => {},
        onSuccess: e => {
          e && (t().setAndBroadcastAnalyzeStatus("success"), t().setJobInfo(e))
        }
      })
    }
  })),
  w = e => {
    let t = document.querySelector('iframe[src="/preload/"]');
    t && t.contentWindow && t.contentWindow.postMessage({
      type: "ImportJobStatus",
      analyzeStatus: e
    }, "https://www.linkedin.com")
  }

