// @ts-nocheck
/**
 * Zustand store for autofill profile info fetch, revision, and change detection.
 */

import { create } from "zustand"
import { sendToBackground } from "@plasmohq/messaging"
import { isAutofillInfoRevision } from "../api/autofill-info.js"
import { STORAGE_KEY } from "../enums/storage.js"
import {
  EDU_FIELD_MAP,
  WORK_FIELD_MAP,
  diffArrayFields,
  diffPersonalFields,
} from "./autofill-diff.ts"
import { createAutofillSnapshotStorage } from "./autofill-storage.ts"
import { useResumeStore } from "./resume.js"
import { extractSkillList } from "../utils/skill-list.ts"

const snapshotStorage = createAutofillSnapshotStorage()

const EQUAL_EMPLOYMENT_FIELD_MAP = {
  gender: (info) => info.gender ?? "",
  ethnicity: (info) => info.race ?? "",
  veteran: (info) => info.veteran ?? "",
  disability: (info) => info.disability ?? "",
  workAuthorization: (info) => info.workAuthorization ?? "",
  sponsorshipStatus: (info) => info.sponsorshipStatus ?? "",
  lgbt: (info) => info.lgbt ?? "",
  hispanic: (info) => info.hispanic ?? "",
}

function diffMappedObjectFields(
  previousValue,
  nextValue,
  fieldMap,
  pathPrefix,
  changedFields,
) {
  for (const [fieldName, getValue] of Object.entries(fieldMap)) {
    if (getValue(previousValue) !== getValue(nextValue)) {
      changedFields.push(`${pathPrefix}.${fieldName}`)
    }
  }
}

function collectAutofillChangedFields(previousInfo, nextInfo) {
  const changedFields = []
  diffPersonalFields(previousInfo, nextInfo, changedFields)
  diffMappedObjectFields(
    previousInfo.employmentInfo ?? {},
    nextInfo.employmentInfo ?? {},
    EQUAL_EMPLOYMENT_FIELD_MAP,
    "equalEmployment",
    changedFields,
  )
  const previousSexual = Array.isArray(previousInfo.employmentInfo?.sexual)
    ? previousInfo.employmentInfo.sexual
    : []
  const nextSexual = Array.isArray(nextInfo.employmentInfo?.sexual)
    ? nextInfo.employmentInfo.sexual
    : []
  if (JSON.stringify(previousSexual) !== JSON.stringify(nextSexual)) {
    changedFields.push("equalEmployment.sexual")
  }
  if ((previousInfo.pronouns ?? "") !== (nextInfo.pronouns ?? "")) {
    changedFields.push("equalEmployment.pronouns")
  }
  if ((previousInfo.salary ?? "") !== (nextInfo.salary ?? "")) {
    changedFields.push("preference.salary")
  }
  if ((previousInfo.hiringDate ?? "") !== (nextInfo.hiringDate ?? "")) {
    changedFields.push("preference.hiringDate")
  }
  if (
    (previousInfo.additionalApplicationInfo ?? "") !==
    (nextInfo.additionalApplicationInfo ?? "")
  ) {
    changedFields.push("preference.additionalApplicationInfo")
  }
  if (
    (previousInfo.regenerationEmail ?? "") !==
    (nextInfo.regenerationEmail ?? "")
  ) {
    changedFields.push("signupInformation.registrationEmail")
  }
  diffArrayFields(
    previousInfo.education ?? [],
    nextInfo.education ?? [],
    EDU_FIELD_MAP,
    "education",
    changedFields,
  )
  diffArrayFields(
    previousInfo.workExperience ?? [],
    nextInfo.workExperience ?? [],
    WORK_FIELD_MAP,
    "workExperience",
    changedFields,
  )
  const previousSkills = extractSkillList(previousInfo)
  const nextSkills = extractSkillList(nextInfo)
  if (JSON.stringify(previousSkills) !== JSON.stringify(nextSkills)) {
    changedFields.push("skill")
  }
  return changedFields
}

export const useAutofillInfoStore = create((set) => ({
  autofillInfo: null,
  country: "",
  city: "",
  autoUpdate: true,
  revision: null,
  fetchAutofillInfo: async (forceRefresh = false) => {
    try {
      const response = await sendToBackground({
        name: "getAutofillInfo",
        body: {
          withAutoUpdate: true,
          forceRefresh,
        },
      })
      const autofillInfo = response?.data ?? null
      const autoUpdate = response?.autoUpdate ?? true
      const revision =
        autofillInfo && isAutofillInfoRevision(response?.revision)
          ? response.revision
          : null
      if (autofillInfo) {
        const snapshot = await snapshotStorage.get(
          STORAGE_KEY.AUTOFILL_INFO_SNAPSHOT,
        )
        if (snapshot) {
          const changedFields = collectAutofillChangedFields(
            snapshot,
            autofillInfo,
          )
          if (changedFields.length > 0) {
            useResumeStore.getState().setAutofillChangedFields(changedFields)
          }
        } else {
          await snapshotStorage.set(
            STORAGE_KEY.AUTOFILL_INFO_SNAPSHOT,
            autofillInfo,
          )
        }
        set({
          autofillInfo,
          revision,
          country: autofillInfo.location?.country ?? "",
          city: autofillInfo.location?.city ?? "",
          autoUpdate,
        })
        return autofillInfo
      }
      if (response) {
        set({
          autofillInfo: null,
          revision: null,
          country: "",
          city: "",
          autoUpdate,
        })
      } else {
        set({
          autofillInfo: null,
          revision: null,
          country: "",
          city: "",
        })
      }
      return null
    } catch {
      set({
        autofillInfo: null,
        revision: null,
        country: "",
        city: "",
      })
      return null
    }
  },
  saveSnapshotToStorage: async (autofillInfo) => {
    const snapshot =
      autofillInfo ?? useAutofillInfoStore.getState().autofillInfo
    if (snapshot) {
      await snapshotStorage.set(STORAGE_KEY.AUTOFILL_INFO_SNAPSHOT, snapshot)
    }
  },
}))
