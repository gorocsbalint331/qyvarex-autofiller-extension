// @ts-nocheck
/**
 * External job import Zustand store — page state, scrape fallback, and LinkedIn broadcast.
 */
import * as useRequestLib from "ahooks"
import * as zustand from "zustand"
import * as messaging from "@plasmohq/messaging"
import * as externalJobApi from "../api/externalJob.js"
import * as markdownConverter from "../core/markdownConverter.js"
import * as coreUtils from "../core/utils.js"
import * as httpEnums from "../enums/http.js"
import * as joblistEnums from "../enums/jobs/joblist.js"
import * as urlStore from "./url.js"
import * as checkLinkedin from "../utils/checkLinkedin.ts"
import * as jobIdUtils from "../utils/job-id.ts"
import * as trace from "../utils/trace.ts"
import * as profileStore from "./profile.js"

const INITIAL_EXTERNAL_JOB_STATE = {
  page: "init",
  jobId: null,
  jobInfo: null,
  matchedSkillCount: 0,
  totalSkillCount: 0,
  matchedScore: 0,
  missingJobSkills: false,
  formValues: {
    jobTitle: "",
    url: "",
    companyName: "",
    jobDescription: "",
    companyId: undefined,
  },
  analyzeStatus: "idle",
  scrapeFallbackStatus: "idle",
  isAddingAnotherJob: false,
  manualOverrideJobId: null,
  pendingOverrideJobId: null,
}

export function syncExternalJobQueryToCurrentPage({
  jobId,
  currentUrl = window.location.href,
  topLevelUrl = window.top.location.href,
  history = window.history,
  setCurrentTabUrl = urlStore.useUrlStore.getState().setCurrentTabUrl,
}) {
  if (!jobId || !currentUrl || checkLinkedin.isLinkedinDomain(topLevelUrl)) return null
  try {
    let urlWithJobId = jobIdUtils.setJobIdInUrl(currentUrl, jobId)
    return (
      urlWithJobId !== currentUrl && history.replaceState(history.state, "", urlWithJobId),
      setCurrentTabUrl(urlWithJobId),
      urlWithJobId
    )
  } catch (error) {
    return (
      console.warn("Failed to sync external job jr_id to current page url:", error),
      null
    )
  }
}

function broadcastImportJobStatus(analyzeStatus) {
  let preloadIframe = document.querySelector('iframe[src="/preload/"]')
  preloadIframe &&
    preloadIframe.contentWindow &&
    preloadIframe.contentWindow.postMessage(
      {
        type: "ImportJobStatus",
        analyzeStatus,
      },
      "https://www.linkedin.com",
    )
}

export const useExternalJobStore = zustand.create((set, get) => ({
  ...INITIAL_EXTERNAL_JOB_STATE,
  setPage: (page) => {
    get().page !== page &&
      set({
        page,
      })
  },
  addExternalJob: async (formPayload) => {
    trace.trackEvent("autofill_external_job_parse_started", {
      user_id: profileStore.useProfileStore.getState().userStage?.userId,
      source: coreUtils.checkSupportStatus() ? "supported_page" : "unsupported_page",
      jobTitle: formPayload.jobTitle,
      companyName: formPayload.companyName,
      url: window.location.href,
    }),
      get().setAndBroadcastAnalyzeStatus("loading")
    let importedJobId = await messaging.sendToBackground({
      name: "postExternalJobImport",
      body: formPayload,
    })
    importedJobId === httpEnums.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR &&
      get().setAndBroadcastAnalyzeStatus("error"),
      importedJobId &&
        (checkLinkedin.isLinkedinDomain(window.top.location.href) &&
          messaging.sendToBackground({
            name: "saveExternalJobId",
            body: {
              linkedinJobId: checkLinkedin.getCurrentJobId(),
              externalJobId: importedJobId,
            },
          }),
        set({
          jobId: importedJobId,
        })),
      externalJobApi.pollingExternalJob({
        api: async () =>
          messaging.sendToBackground({
            name: "getExternalJobStatus",
            body: {
              jobId: importedJobId,
            },
          }),
        checkSuccess: (status) =>
          joblistEnums.EXTERNAL_JOB_IMPORT_STATUS.IMPORTED === status,
        checkFailed: (status) =>
          joblistEnums.EXTERNAL_JOB_IMPORT_STATUS.FAILED === status,
        onSuccess: async () => {
          let jobBannerDetail = await messaging.sendToBackground({
            name: "getJobBannerDetail",
            body: {
              jobId: importedJobId,
            },
          })
          syncExternalJobQueryToCurrentPage({
            jobId: typeof importedJobId == "string" ? importedJobId : null,
          }),
            get().setJobInfo(jobBannerDetail),
            get().setFormValues(INITIAL_EXTERNAL_JOB_STATE.formValues)
          let pendingOverrideJobId = get().pendingOverrideJobId
          pendingOverrideJobId &&
            (get().setManualOverrideJobId(pendingOverrideJobId),
            get().setPendingOverrideJobId(null)),
            get().setAndBroadcastAnalyzeStatus("success"),
            get().setIsAddingAnotherJob(false),
            trace.trackEvent("autofill_external_job_parse_end", {
              user_id: profileStore.useProfileStore.getState().userStage?.userId,
              source: coreUtils.checkSupportStatus()
                ? "supported_page"
                : "unsupported_page",
              current_url: window.location.href,
              status: "success",
              external_job_id: importedJobId,
            })
        },
        onError: () => {
          get().setAndBroadcastAnalyzeStatus("error"),
            get().setIsAddingAnotherJob(false),
            trace.trackEvent("autofill_external_job_parse_end", {
              user_id: profileStore.useProfileStore.getState().userStage?.userId,
              source: coreUtils.checkSupportStatus()
                ? "supported_page"
                : "unsupported_page",
              current_url: window.location.href,
              status: "failed",
              external_job_id: importedJobId,
            })
        },
      })
  },
  setAndBroadcastAnalyzeStatus: (analyzeStatus) => {
    set({
      analyzeStatus,
    }),
      window.top === window.self && broadcastImportJobStatus(analyzeStatus)
  },
  setFormValues: (partialFormValues) => {
    set((state) => ({
      formValues: {
        ...state.formValues,
        ...partialFormValues,
      },
    }))
  },
  resetFormValues: () => {
    set({
      formValues: INITIAL_EXTERNAL_JOB_STATE.formValues,
      scrapeFallbackStatus: INITIAL_EXTERNAL_JOB_STATE.scrapeFallbackStatus,
    })
  },
  parsePageWithMarkdown: async () => {
    set({
      scrapeFallbackStatus: "loading",
    })
    try {
      let { html, iframeSrcs } = markdownConverter.extractCleanedHtml()
      if (!html) {
        set({
          scrapeFallbackStatus: "error",
        })
        return
      }
      let parseTimeoutMs = 3e4,
        parseResult = await Promise.race([
          messaging.sendToBackground({
            name: "parsePageMarkdown",
            body: {
              html,
              iframeSrcs,
            },
          }),
          new Promise((resolve) => setTimeout(() => resolve(null), parseTimeoutMs)),
        ])
      if (
        parseResult === httpEnums.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR ||
        !parseResult ||
        typeof parseResult == "number"
      ) {
        set({
          scrapeFallbackStatus: "error",
        })
        return
      }
      let scrapedFormValues = {}
      parseResult.job_title && (scrapedFormValues.jobTitle = parseResult.job_title),
        parseResult.company?.company_name &&
          (scrapedFormValues.companyName = parseResult.company.company_name),
        parseResult.job_description &&
          (scrapedFormValues.jobDescription = parseResult.job_description),
        parseResult.company?.company_id &&
          (scrapedFormValues.companyId = parseResult.company.company_id),
        Object.keys(scrapedFormValues).length > 0 &&
          get().setFormValues(scrapedFormValues),
        set({
          scrapeFallbackStatus: "success",
        })
    } catch (error) {
      console.error("[MarkdownFallback] Error:", error),
        set({
          scrapeFallbackStatus: "error",
        })
    }
  },
  setIsAddingAnotherJob: (isAddingAnotherJob) => {
    get().isAddingAnotherJob !== isAddingAnotherJob &&
      set({
        isAddingAnotherJob,
      })
  },
  setJobInfo: (jobInfo) => {
    set({
      jobInfo,
    })
  },
  setMatchedSkillCount: (matchedSkillCount) => {
    set({
      matchedSkillCount,
    })
  },
  setTotalSkillCount: (totalSkillCount) => {
    set({
      totalSkillCount,
    })
  },
  setMatchedScore: (matchedScore) => {
    set({
      matchedScore,
    })
  },
  setMissingJobSkills: (missingJobSkills) => {
    get().missingJobSkills !== missingJobSkills &&
      set({
        missingJobSkills,
      })
  },
  setJobId: (jobId) => {
    get().jobId !== jobId &&
      set({
        jobId,
      })
  },
  setManualOverrideJobId: (manualOverrideJobId) => {
    get().manualOverrideJobId !== manualOverrideJobId &&
      set({
        manualOverrideJobId,
      })
  },
  setPendingOverrideJobId: (pendingOverrideJobId) => {
    get().pendingOverrideJobId !== pendingOverrideJobId &&
      set({
        pendingOverrideJobId,
      })
  },
  useExternalJobDetailRequest: () => {
    useRequestLib.useRequest(
      async () => {
        let jobBannerDetail = await messaging.sendToBackground({
          name: "getJobBannerDetail",
          body: {
            jobId: get().jobId,
          },
        })
        return jobBannerDetail
      },
      {
        ready:
          !get().isAddingAnotherJob &&
          "success" !== get().analyzeStatus &&
          !!get().jobId,
        refreshDeps: [
          get().jobId,
          get().analyzeStatus,
          get().page,
          get().isAddingAnotherJob,
        ],
        onBefore: () => {},
        onSuccess: (jobBannerDetail) => {
          jobBannerDetail &&
            (get().setAndBroadcastAnalyzeStatus("success"),
            get().setJobInfo(jobBannerDetail))
        },
      },
    )
  },
}))
