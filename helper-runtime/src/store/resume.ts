// @ts-nocheck
/**
 * Resume Zustand store — collection, tailor/agent resume, cover letter, and autofill sync.
 */
import * as zustand from "zustand"
import * as messaging from "@plasmohq/messaging"
import * as plasmohqStorage from "@plasmohq/storage"
import * as autofillInfoApi from "../api/autofill-info.js"
import * as resumeHelpers from "../api/resume-helpers.js"
import * as contents from "../contents.js"
import * as coverLetterMethods from "../contents/methods/cover-letter.js"
import * as sharedConstants from "../contents/shared/constants.js"
import * as coreUtils from "../core/utils.js"
import * as resumeEnums from "../enums/jobs/resume.js"
import * as storageEnums from "../enums/storage.js"
import * as urlStore from "./url.js"
import * as currentJobIdUtils from "../utils/current-job-id.ts"
import * as jobIdUtils from "../utils/job-id.ts"
import * as jobrightAgentPage from "../utils/jobright-agent-page.ts"
import * as resumeJobIdUtils from "../utils/resume-job-id.ts"
import * as resumeUploadFilename from "../utils/resume-upload-filename.ts"
import * as skillList from "../utils/skill-list.ts"
import * as autofillDiff from "./autofill-diff.ts"
import * as coverLetterStore from "./cover-letter.ts"
import * as coverLetterState from "./cover-letter-state.ts"
import * as profileStore from "./profile.ts"
import * as resumeAutofillReady from "./resume-autofill-ready.ts"
import * as resumeInit from "./resume-init.ts"
import * as resumeName from "./resume-name.ts"

const storage = new plasmohqStorage.Storage()
let ensureResumeReadyPromise = null

function logResumeUploadDebug(message, details) {
  console.log(`[ResumeUploadDebug] ${message}`, details ?? {})
}

const isEvalDisableResumeAutofillSync = async () => {
  let evalFlag = await storage.get(storageEnums.STORAGE_KEY.EVAL_DISABLE_RESUME_AUTOFILL_SYNC)
  return (
    true === evalFlag ||
    (!!evalFlag &&
      typeof evalFlag == "object" &&
      true === evalFlag.disabled &&
      (!evalFlag.expiresAt || evalFlag.expiresAt > Date.now()))
  )
}

export function mapResumeDiagnoseToAutofillSections(resumeDiagnose) {
  let workExperience =
      resumeDiagnose.workExperience?.workExperienceDetails?.map((detail) => ({
        job_title: detail.jobTitle,
        organization: detail.organization,
        location: detail.location,
        dates: {
          start_date: detail.dates?.startDate,
          completion_date: detail.dates?.isCurrent ? null : detail.dates?.completionDate,
          is_current: detail.dates?.isCurrent,
        },
        summary: detail.summary?.jobDescription,
        job_descriptions: detail.jobDescriptions?.map(
          (jobDescription) => jobDescription.jobDescription,
        ),
      })) ?? [],
    education =
      resumeDiagnose.education?.educationDetails?.map((detail) => ({
        organization: detail.organization,
        accreditation: detail.accreditation,
        gpa: detail.gpa,
        dates: {
          start_date: detail.dates?.startDate,
          completion_date: detail.dates?.completionDate,
          is_current: detail.dates?.isCurrent,
        },
      })) ?? [],
    skills = resumeDiagnose.skills?.skills ?? {}
  return {
    workExperience,
    education,
    skills,
  }
}

export const syncResumeToAutofill = async (resumeId, resumeMap) => {
  if (
    resumeId &&
    jobrightAgentPage.shouldSyncResumeToAutofillOnUrl(window.location.href) &&
    !(await isEvalDisableResumeAutofillSync())
  )
    try {
      let isTailorResume = resumeId.startsWith(sharedConstants.TAILOR_RESUME_ID_PREFIX),
        diagnoseOrTailor = null
      if (isTailorResume) diagnoseOrTailor = resumeMap[resumeId]?.resumeTailor
      else {
        let diagnoseId = resumeMap[resumeId]?.diagnoseId
        if (diagnoseId) {
          let diagnoseResponse = await messaging.sendToBackground({
            name: "getResumeDiagnose",
            body: {
              diagnoseId,
            },
          })
          diagnoseOrTailor = diagnoseResponse?.resumeDiagnose
        }
      }
      if (diagnoseOrTailor) {
        let autofillSnapshot = await messaging.sendToBackground({
          name: "getAutofillInfo",
          body: {
            withAutoUpdate: true,
            forceRefresh: true,
          },
        })
        if (autofillSnapshot?.autoUpdate === false) return
        if (!autofillSnapshot?.data) {
          console.warn("[AutofillInfo] Resume sync skipped", {
            reason: "missing_snapshot",
          })
          return
        }
        let snapshotData = autofillSnapshot.data,
          {
            workExperience: mappedWorkExperience,
            education: mappedEducation,
            skills: mappedSkills,
          } = mapResumeDiagnoseToAutofillSections(diagnoseOrTailor),
          saveResult = await messaging.sendToBackground({
            name: "saveAutofillInfo",
            body: {
              ...(autofillInfoApi.isAutofillInfoRevision(autofillSnapshot.revision)
                ? {
                    expectedRevision: autofillSnapshot.revision,
                  }
                : {}),
              structuredData: skillList.withStructuredSkillList(
                {
                  ...snapshotData,
                  workExperience: mappedWorkExperience,
                  education: mappedEducation,
                },
                mappedSkills,
              ),
            },
          })
        if (!autofillInfoApi.isAutofillInfoSaveSuccess(saveResult)) {
          console.warn("[AutofillInfo] Resume sync failed", {
            reason: autofillInfoApi.isAutofillInfoConflict(saveResult)
              ? "revision_conflict"
              : "save_failed",
            expectedRevision: autofillSnapshot.revision,
          }),
            autofillInfoApi.isAutofillInfoConflict(saveResult) &&
              (await messaging.sendToBackground({
                name: "getAutofillInfo",
                body: {
                  withAutoUpdate: true,
                  forceRefresh: true,
                },
              }))
          return
        }
        let changedFields = [],
          previousEducation = snapshotData.education ?? [],
          previousWorkExperience = snapshotData.workExperience ?? [],
          previousSkillList = skillList.extractSkillList(snapshotData)
        autofillDiff.diffArrayFields(
          previousEducation,
          mappedEducation,
          autofillDiff.EDU_FIELD_MAP,
          "education",
          changedFields,
        ),
          autofillDiff.diffArrayFields(
            previousWorkExperience,
            mappedWorkExperience,
            autofillDiff.WORK_FIELD_MAP,
            "workExperience",
            changedFields,
          )
        let nextSkillList = skillList.extractSkillList({
          skills: mappedSkills,
        })
        JSON.stringify(previousSkillList) !== JSON.stringify(nextSkillList) &&
          changedFields.push("skill"),
          changedFields.length > 0 &&
            useResumeStore.getState().setAutofillChangedFields(changedFields)
      }
    } catch (error) {
      console.error("[AutofillInfo] Resume sync failed", {
        reason: "request_failed",
      })
    }
}

export const updateAutofillInstance = (partialUserInfo = {}) => {
  let autofillInstance = contents.getAutofillInstance()
  if (autofillInstance)
    for (let [key, value] of Object.entries(partialUserInfo)) autofillInstance[key] = value
  coreUtils.updateIframeUserInfo(partialUserInfo)
}

const INITIAL_RESUME_STATE = {
  resumeMap: {},
  resumeCollection: [],
  tailorResume: null,
  lastUsedResume: undefined,
  lastUsedOriginalResume: false,
  tailorResumeName: "",
  disableUploadResume: false,
  template: resumeEnums.TEMPLATE_ID.standard,
  openResumeSelector: false,
  openAutofillInfo: false,
  autofillInfoInitialSection: null,
  autofillChangedFields: [],
  enableUploadResume: true,
  fromAgent: false,
  agentData: null,
  agentCoverLetter: null,
  currentJobCoverLetter: null,
  editWithAiCoverLetterSeed: null,
  coverLetterDetectionStatus: "",
  openCoverLetterPreview: false,
  userEditedResumeNames: {},
}

let hasCompletedFirstLastUsedResumeLoad = false

async function resolveJobIdForResume(currentTabJob) {
  let fallbackJobId = jobIdUtils.extractJobIdFromUrl(
    urlStore.useUrlStore.getState().currentTabUrl || window.location.href,
  )
  return resumeJobIdUtils.resolveResumeJobId({
    currentTabJob,
    fallbackJobId,
    currentJobContextId: currentJobIdUtils.resolveCurrentJobId({
      pageUrl: urlStore.useUrlStore.getState().currentTabUrl || window.location.href,
    }),
  })
}

const loadTailorResumeFileName = resumeName.createTailorResumeFileNameLoader(
  async (jobId) => {
    let fileName = await messaging.sendToBackground({
      name: "getTailorResumeFileName",
      body: {
        jobId,
      },
    })
    return typeof fileName == "string" ? fileName.trim() : ""
  },
)

export const useResumeStore = zustand.create((set, get) => ({
  ...INITIAL_RESUME_STATE,
  setTailorResumeName: (tailorResumeName) =>
    set({
      tailorResumeName,
    }),
  setUserEditedResumeName: (resumeId, resumeNameValue) =>
    set((state) => ({
      userEditedResumeNames: {
        ...state.userEditedResumeNames,
        [resumeId]: resumeNameValue,
      },
    })),
  refreshResumeList: async (userStage, currentTabJob) => {
    let {
        fetchResumeCollection,
        fetchTailorHistory,
        fetchAgentTailorResume,
      } = get(),
      resolvedJobId = await resolveJobIdForResume(currentTabJob),
      [resumeCollection, tailorHistory, agentTailorResume, apiTailorFileName] =
        await Promise.all([
          fetchResumeCollection(),
          fetchTailorHistory(resolvedJobId),
          fetchAgentTailorResume(),
          loadTailorResumeFileName(resolvedJobId),
        ]),
      activeTailorResume = agentTailorResume || tailorHistory,
      resumeMap = resumeCollection.reduce((map, resume) => {
        map[resume.resumeId + ""] = resume
        return map
      }, {}),
      template = await storage.get(storageEnums.STORAGE_KEY.RESUME_TEMPLATE)
    template || (template = resumeEnums.TEMPLATE_ID.standard)
    let personalInfo =
        profileStore.useProfileStore.getState().userProfile?.profile?.personalInfo,
      resolvedTailorResumeName = resumeName.resolveTailorResumeName({
        userStage,
        currentTabJob,
        firstName: personalInfo?.firstName,
        lastName: personalInfo?.lastName,
        apiName: apiTailorFileName,
      })
    if (activeTailorResume) {
      let tailorResumeId =
        sharedConstants.TAILOR_RESUME_ID_PREFIX + activeTailorResume?.tailorId
      resumeMap[tailorResumeId] = activeTailorResume,
        resumeCollection.unshift({
          ...activeTailorResume,
          resumeId: tailorResumeId,
        }),
        (template = tailorHistory?.style?.template ?? resumeEnums.TEMPLATE_ID.standard)
    }
    let { userEditedResumeNames } = get()
    for (let resume of resumeCollection) {
      let editedName = userEditedResumeNames[resume.resumeId]
      editedName &&
        ((resume.resumeName = editedName),
        resumeMap[resume.resumeId] &&
          (resumeMap[resume.resumeId] = {
            ...resumeMap[resume.resumeId],
            resumeName: editedName,
          }))
    }
    let tailorResumeKey = activeTailorResume
        ? sharedConstants.TAILOR_RESUME_ID_PREFIX + activeTailorResume.tailorId
        : null,
      editedTailorName = tailorResumeKey
        ? userEditedResumeNames[tailorResumeKey]
        : undefined,
      finalTailorResumeName = editedTailorName ?? resolvedTailorResumeName ?? undefined
    tailorResumeKey &&
      undefined !== finalTailorResumeName &&
      ((resumeMap[tailorResumeKey].resumeName = finalTailorResumeName),
      (resumeCollection[0].resumeName = finalTailorResumeName)),
      set({
        tailorResume: activeTailorResume,
        template,
        resumeMap,
        resumeCollection,
        ...(undefined !== finalTailorResumeName
          ? {
              tailorResumeName: finalTailorResumeName,
            }
          : {}),
      })
  },
  setAgentTailorResume: async (tailorId, tailorResumeName) => {
    let { resumeMap, resumeCollection } = get(),
      agentTailorResume = await messaging.sendToBackground({
        name: "getAgentTailorResume",
        body: {
          tailorId,
        },
      })
    if (!agentTailorResume) return
    let nextResumeMap = Object.fromEntries(
        Object.entries(resumeMap).filter(
          ([resumeId]) => !resumeId.startsWith(sharedConstants.TAILOR_RESUME_ID_PREFIX),
        ),
      ),
      tailorResumeId = sharedConstants.TAILOR_RESUME_ID_PREFIX + tailorId
    nextResumeMap[tailorResumeId] = agentTailorResume
    let nextResumeCollection = resumeCollection.filter(
        (resume) =>
          !String(resume.resumeId ?? "").startsWith(sharedConstants.TAILOR_RESUME_ID_PREFIX),
      ),
      collectionWithTailor = [
        {
          ...agentTailorResume,
          resumeId: tailorResumeId,
        },
        ...nextResumeCollection,
      ]
    set({
      resumeMap: nextResumeMap,
      resumeCollection: collectionWithTailor,
      tailorResume: agentTailorResume,
      tailorResumeName: tailorResumeName ?? "",
    }),
      get().setLastUsedResume(tailorResumeId),
      syncResumeToAutofill(tailorResumeId, nextResumeMap)
  },
  initResume: async (isResumeRefresh, userStage, currentTabJob) => {
    logResumeUploadDebug("initResume:start", {
      isResumeRefresh,
      userLoggedIn: !!userStage?.logined,
      jobId: currentTabJob?.jobResult?.jobId,
    }),
      await get().refreshResumeList(userStage, currentTabJob),
      await get().initLastUsedResume(isResumeRefresh),
      await get().refreshCoverLetterState(currentTabJob)
    let state = get()
    logResumeUploadDebug("initResume:done", {
      resumeCollectionLength: state.resumeCollection.length,
      lastUsedResume: state.lastUsedResume,
      disableUploadResume: state.disableUploadResume,
      hasLastUsedResumeInMap:
        !!state.lastUsedResume && !!state.resumeMap[state.lastUsedResume],
    })
  },
  ensureResumeReadyForAutofill: async (options = {}) => {
    let state = get(),
      shouldRefresh = resumeAutofillReady.shouldRefreshResumeBeforeAutofill({
        disableUploadResume: state.disableUploadResume,
        userLoggedIn: !!options.userState?.logined,
        fromAgent: state.fromAgent,
        agentData: state.agentData,
        lastUsedResume: state.lastUsedResume,
        resumeMap: state.resumeMap,
        resumeCollectionLength: state.resumeCollection.length,
      })
    logResumeUploadDebug("ensure:start", {
      shouldRefresh,
      userLoggedIn: !!options.userState?.logined,
      disableUploadResume: state.disableUploadResume,
      lastUsedResume: state.lastUsedResume,
      resumeCollectionLength: state.resumeCollection.length,
      resumeMapHasLastUsedResume:
        !!state.lastUsedResume && !!state.resumeMap[state.lastUsedResume],
      fromAgent: state.fromAgent,
      hasAgentResumeId: !!state.agentData?.resumeId,
      hasAgentTailorId: !!state.agentData?.tailorId,
    }),
      shouldRefresh &&
        (ensureResumeReadyPromise ||
          (ensureResumeReadyPromise = get()
            .initResume(false, options.userState, options.currentTabJob)
            .finally(() => {
              ensureResumeReadyPromise = null
            })),
        await ensureResumeReadyPromise),
      await get().updateFillingResume()
  },
  refreshCoverLetterState: async (currentTabJob) => {
    let resolvedJobId = await resolveJobIdForResume(currentTabJob),
      refreshPlan = coverLetterStore.resolveCoverLetterRefreshPlan({
        jobId: resolvedJobId ?? undefined,
      })
    refreshPlan.currentJobId &&
      (await get().refreshCurrentJobCoverLetter(
        refreshPlan.currentJobId,
        currentTabJob?.jobResult?.jobTitle,
      )),
      await get().refreshAgentCoverLetter(currentTabJob)
  },
  refreshAgentCoverLetter: async (currentTabJob) => {
    let { disableUploadResume, agentCoverLetter, setAgentCoverLetter } = get()
    if (disableUploadResume) {
      setAgentCoverLetter(null)
      return
    }
    let viewRequest = coverLetterStore.resolveAgentCoverLetterViewRequest({
      url: window.location.href,
      agentCoverLetter,
    })
    if (!viewRequest) {
      setAgentCoverLetter(null)
      return
    }
    try {
      let coverLetter = await messaging.sendToBackground({
        name: "getAgentCoverLetter",
        body: viewRequest,
      })
      if (coverLetter?.coverLetterId) {
        let personalInfo =
            profileStore.useProfileStore.getState().userProfile?.profile?.personalInfo,
          fullName = [personalInfo?.firstName, personalInfo?.lastName]
            .filter(Boolean)
            .join(" "),
          defaultCoverLetterName = coverLetterState.buildDefaultCoverLetterName(
            fullName,
            currentTabJob?.jobResult?.jobTitle,
          )
        coverLetter = {
          ...coverLetter,
          coverLetterName: coverLetterState.getCoverLetterDisplayName(
            coverLetter.coverLetterName,
            defaultCoverLetterName,
          ),
        }
      }
      setAgentCoverLetter(coverLetter ?? null)
    } catch (error) {
      console.error("Failed to refresh agent cover letter", error)
    }
  },
  initLastUsedResume: async (isResumeRefresh = false) => {
    let state = get(),
      isFirstLoad = !hasCompletedFirstLastUsedResumeLoad,
      disableUploadResume =
        (await storage.get(storageEnums.STORAGE_KEY.DISABLE_RESUME_UPLOAD)) ?? false,
      storedLastUsedResume =
        (await storage.get(storageEnums.STORAGE_KEY.LAST_USED_RESUME)) ?? undefined,
      lastUsedOriginalResume =
        (await storage.get(storageEnums.STORAGE_KEY.LAST_USED_ORIGINAL_RESUME)) ??
        false,
      previousLastUsedResumeInState = state.lastUsedResume,
      {
        lastUsedResume,
        shouldSyncResumeToAutofill,
        shouldPersistLastUsedResume,
      } = resumeInit.resolveInitLastUsedResumeState({
        isFirstLoad,
        isResumeRefresh,
        disableUploadResume,
        storedLastUsedResume,
        previousLastUsedResumeInState,
        resumeCollection: state.resumeCollection,
        tailorResume: state.tailorResume,
        agentResumeId: contents.agentResumeId,
        agentTailorId: contents.agentTailorId,
      })
    set({
      disableUploadResume,
      lastUsedResume,
      lastUsedOriginalResume,
    }),
      shouldPersistLastUsedResume &&
        (await storage.set(storageEnums.STORAGE_KEY.LAST_USED_RESUME, lastUsedResume)),
      shouldSyncResumeToAutofill && syncResumeToAutofill(lastUsedResume, state.resumeMap),
      isFirstLoad && (hasCompletedFirstLastUsedResumeLoad = true)
  },
  fetchResumeCollection: async () => {
    let resumeCollection = await messaging.sendToBackground({
      name: "getResumeCollection",
    })
    return resumeCollection
  },
  fetchAgentTailorResume: async () => {
    if (contents.agentTailorId) {
      let agentTailorResume = await messaging.sendToBackground({
        name: "getAgentTailorResume",
        body: {
          tailorId: contents.agentTailorId,
        },
      })
      return agentTailorResume
    }
    return null
  },
  fetchTailorHistory: async (jobId) => {
    if (!jobId) return null
    let tailorResume = await messaging.sendToBackground({
      name: "getTailorResume",
      body: {
        jobId,
      },
    })
    return tailorResume
  },
  setLastUsedResume: (lastUsedResume) => {
    set({
      lastUsedResume,
    }),
      storage.set(storageEnums.STORAGE_KEY.LAST_USED_RESUME, lastUsedResume)
  },
  setLastUsedOriginalResume: (lastUsedOriginalResume) => {
    set({
      lastUsedOriginalResume,
    }),
      storage.set(
        storageEnums.STORAGE_KEY.LAST_USED_ORIGINAL_RESUME,
        lastUsedOriginalResume,
      )
  },
  setDisableUploadResume: (disableUploadResume) => {
    set({
      disableUploadResume,
    }),
      storage.set(storageEnums.STORAGE_KEY.DISABLE_RESUME_UPLOAD, disableUploadResume)
  },
  setTemplate: (template) => {
    set({
      template,
    }),
      storage.set(storageEnums.STORAGE_KEY.RESUME_TEMPLATE, template)
  },
  setOpenResumeSelector: (openResumeSelector) => {
    set({
      openResumeSelector,
    })
  },
  setOpenAutofillInfo: (openAutofillInfo, autofillInfoInitialSection = null) => {
    set({
      openAutofillInfo,
      autofillInfoInitialSection: openAutofillInfo ? autofillInfoInitialSection : null,
    })
  },
  setAutofillChangedFields: (autofillChangedFields) => {
    set({
      autofillChangedFields,
    })
  },
  clearAutofillChangedField: (field) => {
    set((state) => ({
      autofillChangedFields: state.autofillChangedFields.filter(
        (changedField) => changedField !== field,
      ),
    }))
  },
  setFromAgent: (fromAgent) =>
    set({
      fromAgent,
    }),
  setAgentData: (agentData) =>
    set({
      agentData,
    }),
  setAgentCoverLetter: (agentCoverLetter) =>
    set({
      agentCoverLetter,
    }),
  setCurrentJobCoverLetter: (currentJobCoverLetter) =>
    set({
      currentJobCoverLetter,
    }),
  setEditWithAiCoverLetterSeed: (editWithAiCoverLetterSeed) =>
    set({
      editWithAiCoverLetterSeed,
    }),
  setCoverLetterDetectionStatus: (coverLetterDetectionStatus) =>
    set({
      coverLetterDetectionStatus,
    }),
  setOpenCoverLetterPreview: (openCoverLetterPreview) =>
    set({
      openCoverLetterPreview,
    }),
  refreshCurrentJobCoverLetter: async (jobId, jobTitle) => {
    let { setCurrentJobCoverLetter } = get()
    if (!jobId) {
      setCurrentJobCoverLetter(null)
      return
    }
    let coverLetter = null
    if (
      ((coverLetter = await messaging.sendToBackground({
        name: "getCurrentCoverLetter",
        body: {
          jobId,
        },
      })),
      coverLetter?.coverLetterId)
    ) {
      let personalInfo =
          profileStore.useProfileStore.getState().userProfile?.profile?.personalInfo,
        fullName = [personalInfo?.firstName, personalInfo?.lastName]
          .filter(Boolean)
          .join(" "),
        defaultCoverLetterName = coverLetterState.buildDefaultCoverLetterName(
          fullName,
          jobTitle,
        )
      coverLetter = {
        ...coverLetter,
        coverLetterName: coverLetterState.getCoverLetterDisplayName(
          coverLetter.coverLetterName,
          defaultCoverLetterName,
        ),
      }
    }
    setCurrentJobCoverLetter(coverLetter)
  },
  updateFillingResume: async () => {
    let {
      fromAgent,
      agentData,
      disableUploadResume,
      resumeMap,
      lastUsedResume,
      lastUsedOriginalResume,
      template,
      tailorResumeName,
      agentCoverLetter,
      currentJobCoverLetter,
    } = get()
    if (
      (logResumeUploadDebug("updateFillingResume:start", {
        fromAgent,
        disableUploadResume,
        lastUsedResume,
        lastUsedOriginalResume,
        resumeCollectionLength: get().resumeCollection.length,
        resumeMapHasLastUsedResume: !!lastUsedResume && !!resumeMap[lastUsedResume],
        hasAgentResumeId: !!agentData?.resumeId,
        hasAgentTailorId: !!agentData?.tailorId,
      }),
      fromAgent && agentData && agentData.tailorId)
    ) {
      let agentTailorResume = await messaging.sendToBackground({
        name: "getAgentTailorResume",
        body: {
          tailorId: agentData.tailorId,
        },
      })
      updateAutofillInstance({
        disableUploadResume: false,
        resumeInfo: {
          tailorId: agentData.tailorId,
          tailor: true,
          tailorResume: agentTailorResume,
          template,
          resumeName: resumeUploadFilename.getResumeUploadFilename({
            selectedResume: agentTailorResume,
            isTailorResume: true,
            tailorResumeName,
          }),
        },
      }),
        logResumeUploadDebug("updateFillingResume:set-tailor-agent", {
          tailorId: agentData.tailorId,
          hasTailorResume: !!agentTailorResume,
        })
    } else
      fromAgent && agentData && agentData.resumeId
        ? (updateAutofillInstance({
            disableUploadResume: false,
            resumeInfo: {
              id: agentData.resumeId,
              diagnoseId: resumeMap[agentData.resumeId]?.diagnoseId,
              template,
              resumeName: resumeUploadFilename.getResumeUploadFilename({
                selectedResume: resumeMap[agentData.resumeId],
                isTailorResume: false,
              }),
              useOriginalResume: agentData.useOriginalResume,
            },
          }),
          logResumeUploadDebug("updateFillingResume:set-base-agent", {
            resumeId: agentData.resumeId,
            diagnoseId: resumeMap[agentData.resumeId]?.diagnoseId,
            hasResumeInMap: !!resumeMap[agentData.resumeId],
          }))
        : undefined === lastUsedResume
          ? (updateAutofillInstance({
              disableUploadResume,
              resumeInfo: {
                id: undefined,
                tailorId: undefined,
                diagnoseId: undefined,
                template,
                resumeName: undefined,
              },
            }),
            logResumeUploadDebug("updateFillingResume:set-empty", {
              reason: "lastUsedResume is undefined",
            }))
          : lastUsedResume &&
              lastUsedResume.startsWith(sharedConstants.TAILOR_RESUME_ID_PREFIX)
            ? (updateAutofillInstance({
                disableUploadResume,
                resumeInfo: {
                  tailorId: lastUsedResume.replace(
                    sharedConstants.TAILOR_RESUME_ID_PREFIX,
                    "",
                  ),
                  tailor: true,
                  tailorResume: resumeMap[lastUsedResume],
                  template,
                  resumeName: resumeUploadFilename.getResumeUploadFilename({
                    selectedResume: resumeMap[lastUsedResume],
                    isTailorResume: true,
                    tailorResumeName,
                  }),
                },
              }),
              logResumeUploadDebug("updateFillingResume:set-tailor", {
                lastUsedResume,
                tailorId: lastUsedResume.replace(
                  sharedConstants.TAILOR_RESUME_ID_PREFIX,
                  "",
                ),
                hasTailorResume: !!resumeMap[lastUsedResume],
              }))
            : (updateAutofillInstance({
                disableUploadResume,
                resumeInfo: {
                  id: lastUsedResume,
                  diagnoseId: resumeMap[lastUsedResume]?.diagnoseId,
                  template,
                  resumeName: resumeUploadFilename.getResumeUploadFilename({
                    selectedResume: resumeMap[lastUsedResume],
                    isTailorResume: false,
                  }),
                  useOriginalResume: lastUsedOriginalResume,
                },
              }),
              logResumeUploadDebug("updateFillingResume:set-base", {
                resumeId: lastUsedResume,
                diagnoseId: resumeMap[lastUsedResume]?.diagnoseId,
                hasResumeInMap: !!resumeMap[lastUsedResume],
                useOriginalResume: lastUsedOriginalResume,
              }))
    let { activeCoverLetter } = coverLetterState.resolveCoverLetterState({
        detectionStatus: "",
        agentCoverLetter,
        currentJobCoverLetter,
      }),
      coverLetterDownloadRequest = coverLetterState.resolveCoverLetterDownloadRequest({
        useLegacyDownload: resumeHelpers.shouldUseLegacyAgentCoverLetterDownload(
          window.location.href,
        ),
        agentCoverLetter,
        currentJobCoverLetter,
      }),
      coverLetterForAutofill = activeCoverLetter
        ? {
            ...activeCoverLetter,
            markdown:
              coverLetterDownloadRequest?.markdown || activeCoverLetter.markdown || "",
            useLegacyDownload: coverLetterDownloadRequest?.useLegacyDownload || false,
          }
        : null
    updateAutofillInstance({
      coverLetter: coverLetterForAutofill,
    })
  },
}))

coverLetterMethods.onAutofillCoverLetterGenerated((payload) => {
  let seed = coverLetterState.buildEditWithAiCoverLetterSeed(payload)
  seed && useResumeStore.getState().setEditWithAiCoverLetterSeed(seed)
})
