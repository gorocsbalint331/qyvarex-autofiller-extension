// @ts-nocheck
/**
 * Autofill information editor modal: sectioned profile form + save/reload.
 */

import { useEffect, useMemo, useRef, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { InfoCircleFilled } from "@ant-design/icons"
import {
  Alert,
  Button,
  ConfigProvider,
  Flex,
  Modal,
  Spin,
  Switch,
  Typography,
  message,
} from "antd"
import { sendToBackground } from "@plasmohq/messaging"
import * as closeSvg from "../assets/inline/images/close.svg.js"
import {
  isAutofillInfoConflict,
  isAutofillInfoRevision,
  isAutofillInfoSaveSuccess,
} from "../api/autofill-info.ts"
import { buildSignupRegistrationEmailUpdateBody } from "../api/autofill-signup-information.ts"
import { HELPER_MODAL_Z_INDEX } from "../constants.ts"
import { HOST_ID } from "../contents.ts"
import * as accountFlowState from "../contents/pre-autofill-flow/account-flow-state.ts"
import { sendAutofillAnswerPairEvent } from "../contents/sites/autofill-answer-pair-tracking.ts"
import { SECTION_LABELS, isSectionKey } from "../forms/constants.ts"
import { useAddressLocation } from "../hooks/useAddressLocation.ts"
import { useSignupPassword } from "../hooks/useSignupPassword.ts"
import {
  buildAutofillInfoSaveBody,
  isAutofillInfoSnapshot,
} from "../mappers/save-payload.ts"
import { buildAutofillInfoTrackingSnapshot } from "../mappers/tracking-snapshot.ts"
import {
  buildAutofillInfoData,
  createEducationItem,
  createWorkItem,
} from "../model.ts"
import { EducationForm } from "../sections/EducationForm.ts"
import { EqualEmploymentForm } from "../sections/EqualEmploymentForm.ts"
import { PersonalForm } from "../sections/PersonalForm.ts"
import { resolvePhoneDropdownParent } from "../sections/PersonalForm/phone-number.ts"
import { PreferenceForm } from "../sections/PreferenceForm.ts"
import { SignupInformationForm } from "../sections/SignupInformationForm.ts"
import { SkillForm } from "../sections/SkillForm.ts"
import { WorkExperienceForm } from "../sections/WorkExperienceForm.ts"
import { useAutofillInfoStore } from "../store/autofillInfo.ts"
import { useProfileStore } from "../store/profile.ts"
import { useResumeStore } from "../store/resume.ts"
import { useUrlStore } from "../store/url.ts"
import {
  clearWorkdaySignupInformation,
  saveWorkdaySignupInformation,
} from "../store/workday-signup-info.ts"
import Image from "../ui/Image.ts"
import { trackEvent } from "../utils/trace.ts"
import { validateWorkdayPassword } from "../utils/workday-signup-password.ts"
import PageConfirmPopup from "./Popups/PageConfirmPopup.ts"
import { getAutofillInfoChangeSummary } from "./dirty-state.ts"
import { scrollValidationFieldIntoView } from "./error-navigation.ts"
import {
  collectValidationErrors,
  getFirstErrorField,
  getFirstErrorSection,
} from "./validation.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export default function Editor() {
  const open = useResumeStore((state) => state.openAutofillInfo)
  const autofillInfoInitialSection = useResumeStore(
    (state) => state.autofillInfoInitialSection,
  )
  const setOpenAutofillInfo = useResumeStore(
    (state) => state.setOpenAutofillInfo,
  )
  const autofillInfo = useAutofillInfoStore((state) => state.autofillInfo)
  const revision = useAutofillInfoStore((state) => state.revision)
  const fetchAutofillInfo = useAutofillInfoStore(
    (state) => state.fetchAutofillInfo,
  )
  const saveSnapshotToStorage = useAutofillInfoStore(
    (state) => state.saveSnapshotToStorage,
  )
  const autoUpdate = useAutofillInfoStore((state) => state.autoUpdate)
  const autofillChangedFields = useResumeStore(
    (state) => state.autofillChangedFields,
  )
  const clearAutofillChangedField = useResumeStore(
    (state) => state.clearAutofillChangedField,
  )
  const setAutofillChangedFields = useResumeStore(
    (state) => state.setAutofillChangedFields,
  )

  const baselineRef = useRef(null)
  const isSavingRef = useRef(false)
  const loadGenerationRef = useRef(0)
  const mainContentRef = useRef(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasConflict, setHasConflict] = useState(false)
  const [reloadConfirmOpen, setReloadConfirmOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("personal")
  const [errorFields, setErrorFields] = useState(new Set())
  const [scrollToField, setScrollToField] = useState(null)
  const [data, setAutofillInfo] = useState(() => buildAutofillInfoData())
  const [confirmingDeleteId, setConfirmingDeleteId] = useState(null)
  const [skillInputValue, setSkillInputValue] = useState("")
  const [unsavedConfirmOpen, setUnsavedConfirmOpen] = useState(false)
  const [autoUpdateChecked, setAutoUpdateChecked] = useState(true)
  const [isAutoUpdateSaving, setIsAutoUpdateSaving] = useState(false)
  const [autoUpdateConfirmOpen, setAutoUpdateConfirmOpen] = useState(false)
  const [initialData, setInitialData] = useState(null)

  useEffect(() => {
    if (!scrollToField) return
    scrollValidationFieldIntoView(mainContentRef.current, scrollToField)
    setScrollToField(null)
  }, [scrollToField])

  const addressLocation = useAddressLocation({
    personal: data.personal,
    setAutofillInfo,
  })
  const signupPassword = useSignupPassword({
    open,
    activeSection,
  })

  const changeSummary = useMemo(
    () =>
      getAutofillInfoChangeSummary({
        current: data,
        initial: initialData,
        signupPassword: signupPassword.signupPassword,
        initialSignupPassword: signupPassword.initialSignupPassword,
        isSignupPasswordLoaded: signupPassword.isSignupPasswordLoaded,
        isSignupPasswordTouched: signupPassword.isSignupPasswordTouched,
      }),
    [
      data,
      initialData,
      signupPassword.initialSignupPassword,
      signupPassword.isSignupPasswordLoaded,
      signupPassword.isSignupPasswordTouched,
      signupPassword.signupPassword,
    ],
  )

  useEffect(() => {
    loadGenerationRef.current += 1
    if (!open) {
      baselineRef.current = null
      setInitialData(null)
      setIsLoading(true)
      setHasConflict(false)
      setReloadConfirmOpen(false)
      return
    }
    let cancelled = false
    setIsLoading(true)
    fetchAutofillInfo(true).finally(() => {
      if (!cancelled) setIsLoading(false)
    })
    setActiveSection(
      isSectionKey(autofillInfoInitialSection)
        ? autofillInfoInitialSection
        : "personal",
    )
    trackEvent("autofill_info_modal_exposure", {})
    return () => {
      cancelled = true
    }
  }, [autofillInfoInitialSection, open])

  useEffect(() => {
    if (open && !isAutoUpdateSaving) {
      setAutoUpdateChecked(autoUpdate)
    }
  }, [open, autoUpdate, isAutoUpdateSaving])

  useEffect(() => {
    if (!open || isLoading || !autofillInfo || baselineRef.current) return
    baselineRef.current = {
      data: structuredClone(autofillInfo),
      revision,
      usesRevision: isAutofillInfoRevision(revision),
    }
    const next = buildAutofillInfoData(autofillInfo)
    setAutofillInfo(next)
    setSkillInputValue("")
    setInitialData(next)
  }, [open, autofillInfo, revision, isLoading])

  const handleReloadLatest = async () => {
    const generation = loadGenerationRef.current
    setReloadConfirmOpen(false)
    setIsLoading(true)
    const loaded = await fetchAutofillInfo(true)
    if (generation !== loadGenerationRef.current) return
    if (loaded) {
      baselineRef.current = null
      setHasConflict(false)
      setErrorFields(new Set())
    } else {
      message.error(
        "Couldn't load the latest information. Your edits are still here.",
      )
    }
    setIsLoading(false)
  }

  const dotChecker = useMemo(
    () => ({
      hasSectionDot: (sectionKey) =>
        autofillChangedFields.some((field) => field.startsWith(sectionKey)),
      hasItemDot: (itemKey) => autofillChangedFields.includes(itemKey),
      hasFieldDot: (sectionKey, fieldKey) =>
        autofillChangedFields.includes(`${sectionKey}.${fieldKey}`),
      clearItemDot: clearAutofillChangedField,
      clearPrefixDots: (prefix) => {
        autofillChangedFields
          .filter((field) => field.startsWith(`${prefix}.`))
          .forEach((field) => clearAutofillChangedField(field))
      },
      forSection: (sectionKey) => ({
        hasDot: (fieldKey) =>
          autofillChangedFields.includes(`${sectionKey}.${fieldKey}`),
        clearDot: (fieldKey) =>
          clearAutofillChangedField(`${sectionKey}.${fieldKey}`),
      }),
    }),
    [autofillChangedFields, clearAutofillChangedField],
  )

  const closeModal = (snapshot) => {
    const nextSnapshot = isAutofillInfoSnapshot(snapshot)
      ? snapshot
      : undefined
    loadGenerationRef.current += 1
    setOpenAutofillInfo(false)
    setAutofillChangedFields([])
    saveSnapshotToStorage(nextSnapshot)
  }

  const handleCancel = () => {
    if (isSavingRef.current) return
    if (!changeSummary.hasChanges) {
      closeModal()
      return
    }
    setUnsavedConfirmOpen(true)
  }

  const discardAndClose = () => {
    setUnsavedConfirmOpen(false)
    closeModal()
  }

  const saveAndClose = async () => {
    setUnsavedConfirmOpen(false)
    await handleUpdate()
  }

  const updatePersonalField = (field, value) => {
    setAutofillInfo((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }

  const updateEducationField = (id, field, value) => {
    setAutofillInfo((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }))
  }

  const updateWorkField = (id, field, value) => {
    setAutofillInfo((prev) => ({
      ...prev,
      workExperience: prev.workExperience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }))
  }

  const updateEqualEmploymentField = (field, value) => {
    setAutofillInfo((prev) => ({
      ...prev,
      equalEmployment: { ...prev.equalEmployment, [field]: value },
    }))
  }

  const updatePreferenceField = (field, value) => {
    setAutofillInfo((prev) => ({
      ...prev,
      preference: { ...prev.preference, [field]: value },
    }))
  }

  const updateSignupRegistrationEmail = (email) => {
    setAutofillInfo((prev) => ({
      ...prev,
      signupInformation: {
        ...prev.signupInformation,
        registrationEmail: email,
      },
    }))
  }

  const updateWorkDescriptions = (id, descriptions) => {
    setAutofillInfo((prev) => ({
      ...prev,
      workExperience: prev.workExperience.map((item) =>
        item.id === id ? { ...item, descriptions } : item,
      ),
    }))
  }

  const removeEducation = (id) => {
    setAutofillInfo((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }))
  }

  const removeWork = (id) => {
    setAutofillInfo((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((item) => item.id !== id),
    }))
  }

  const hasError = (fieldKey) => errorFields.has(fieldKey)

  const clearError = (fieldKey) => {
    if (!errorFields.has(fieldKey)) return
    setErrorFields((prev) => {
      const next = new Set(prev)
      next.delete(fieldKey)
      return next
    })
  }

  const saveAutoUpdateSetting = async (enabled) => {
    let failReason
    const previous = autoUpdateChecked
    setIsAutoUpdateSaving(true)
    setAutoUpdateChecked(enabled)
    try {
      const response = await sendToBackground({
        name: "saveAutofillInfo",
        body: { autoUpdate: enabled },
      })
      if (response?.success === true && response?.result === true) {
        useAutofillInfoStore.setState({ autoUpdate: enabled })
        message.success(
          enabled
            ? "Autofill will update automatically"
            : "Autofill will use saved information only",
        )
        trackEvent("autofill_info_auto_update_setting_result", {
          setting_value: enabled ? "on" : "off",
          result: "success",
        })
        return
      }
      failReason = "response_not_success"
    } catch {
      failReason = "request_failed"
    } finally {
      setIsAutoUpdateSaving(false)
    }
    setAutoUpdateChecked(previous)
    message.error("Couldn't update this setting. Try again.")
    trackEvent("autofill_info_auto_update_setting_result", {
      setting_value: enabled ? "on" : "off",
      result: "fail",
      fail_reason: failReason,
    })
  }

  const handleAutoUpdateChange = (enabled) => {
    if (!enabled) {
      saveAutoUpdateSetting(false)
      return
    }
    setAutoUpdateConfirmOpen(true)
  }

  const handleAutoUpdateConfirm = (action) => {
    trackEvent("autofill_info_auto_update_confirmation_click", {
      user_id: useProfileStore.getState().userStage?.userId,
      action,
      current_state: "off",
    })
    setAutoUpdateConfirmOpen(false)
    if (action === "turn_on") {
      saveAutoUpdateSetting(true)
    }
  }

  const handleUpdate = async () => {
    if (
      !changeSummary.hasChanges ||
      !baselineRef.current ||
      isSavingRef.current ||
      isLoading ||
      hasConflict
    ) {
      return
    }

    if (
      changeSummary.hasRegularAutofillChanges &&
      baselineRef.current.usesRevision &&
      !isAutofillInfoRevision(baselineRef.current?.revision)
    ) {
      message.error("Please reload the latest information before saving.")
      return
    }

    isSavingRef.current = true
    setIsSubmitting(true)
    try {
      trackEvent("autofill_info_modal_update_click", {
        activeSection,
      })
      if (activeSection === "signupInformation") {
        trackEvent("autofill_signup_information_update", {
          uid: useProfileStore.getState().userStage?.userId,
        })
      }

      const errors = collectValidationErrors(data)
      if (errors.size > 0) {
        setErrorFields(errors)
        const firstField = getFirstErrorField(errors)
        if (firstField) setScrollToField(firstField)
        const firstSection = getFirstErrorSection(errors)
        if (firstSection) setActiveSection(firstSection)
        return
      }
      setErrorFields(new Set())

      const signupPasswordAction = changeSummary.signupPasswordAction
      const shouldSavePassword = signupPasswordAction === "save"
      const passwordValidation = validateWorkdayPassword(
        signupPassword.signupPassword,
      )
      if (shouldSavePassword && !passwordValidation.isValid) {
        setActiveSection("signupInformation")
        signupPassword.setShowSignupPasswordErrors(true)
        return
      }

      const saveBody = buildAutofillInfoSaveBody(
        data,
        baselineRef.current?.data ?? {},
        baselineRef.current?.revision ?? undefined,
      )
      const hasRegularChanges = changeSummary.hasRegularAutofillChanges
      const registrationEmailBody = buildSignupRegistrationEmailUpdateBody(
        data.signupInformation.registrationEmail,
      )
      const hasRegistrationEmailChanges =
        changeSummary.hasRegistrationEmailChanges
      const previousAdditionalInfo =
        initialData?.preference.additionalApplicationInfo ?? ""
      if (
        previousAdditionalInfo !== data.preference.additionalApplicationInfo
      ) {
        trackEvent("autofill_custom_question_updated", {})
      }

      if (hasRegularChanges) {
        const submitSnapshot = buildAutofillInfoTrackingSnapshot(data)
        const autofillSnapshot = initialData
          ? buildAutofillInfoTrackingSnapshot(initialData)
          : submitSnapshot
        sendAutofillAnswerPairEvent({
          formUrl: useUrlStore.getState().currentTabUrl,
          autofillSnapshot: autofillSnapshot.normal,
          submitSnapshot: submitSnapshot.normal,
          additionalAutofillData: {
            education: autofillSnapshot.education,
            employment: autofillSnapshot.employment,
          },
          additionalSubmitData: {
            education: submitSnapshot.education,
            employment: submitSnapshot.employment,
          },
          source: "apply",
        })
      }

      try {
        let response
        if (hasRegularChanges) {
          response = await sendToBackground({
            name: "saveAutofillInfo",
            body: saveBody,
          })
        } else if (hasRegistrationEmailChanges) {
          response = await sendToBackground({
            name: "updateAutofillSection",
            body: registrationEmailBody,
          })
        }
        if (
          (hasRegularChanges || hasRegistrationEmailChanges) &&
          !isAutofillInfoSaveSuccess(response)
        ) {
          console.warn("[AutofillInfo] Editor save failed", {
            reason: isAutofillInfoConflict(response)
              ? "revision_conflict"
              : "save_failed",
            expectedRevision: saveBody.expectedRevision,
          })
          if (isAutofillInfoConflict(response)) {
            setHasConflict(true)
            await fetchAutofillInfo(true)
          } else {
            message.error(
              "Failed to update autofill information. Please try again.",
            )
          }
          return
        }
      } catch {
        message.error(
          "Failed to update autofill information. Please try again.",
        )
        return
      }

      if (hasRegularChanges || hasRegistrationEmailChanges) {
        await fetchAutofillInfo(true)
        setInitialData(data)
        baselineRef.current = {
          data: saveBody.structuredData,
          revision: null,
          usesRevision: baselineRef.current.usesRevision,
        }
      }

      try {
        let credentialsChanged = hasRegistrationEmailChanges
        if (shouldSavePassword) {
          await saveWorkdaySignupInformation({
            password: signupPassword.signupPassword,
          })
          credentialsChanged = true
        } else if (signupPasswordAction === "clear") {
          await clearWorkdaySignupInformation()
        }
        if (credentialsChanged) {
          document.dispatchEvent(
            new CustomEvent(
              accountFlowState.PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT,
            ),
          )
        }
      } catch {
        message.error(
          "Autofill information saved, but password was not saved.",
        )
        return
      }

      message.success("Autofill information updated.")
      closeModal(hasRegularChanges ? saveBody.structuredData : undefined)
    } finally {
      isSavingRef.current = false
      setIsSubmitting(false)
    }
  }

  const addEducation = () => {
    setAutofillInfo((prev) => ({
      ...prev,
      education: [...prev.education, createEducationItem()],
    }))
  }

  const addWork = () => {
    setAutofillInfo((prev) => ({
      ...prev,
      workExperience: [...prev.workExperience, createWorkItem()],
    }))
  }

  const setSkills = (next) => {
    setAutofillInfo((prev) => ({
      ...prev,
      skill: typeof next === "function" ? next(prev.skill) : next,
    }))
  }

  const updatePronouns = (value) => {
    setAutofillInfo((prev) => ({ ...prev, pronouns: value }))
  }

  const shadowRoot = document.getElementById(HOST_ID)?.shadowRoot
  const popupContainer = shadowRoot
  const phoneDropdownParent = resolvePhoneDropdownParent(shadowRoot)

  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return jsx(PersonalForm, {
          personal: data.personal,
          regionOptions: addressLocation.regionOptions,
          cityOptions: addressLocation.cityOptions,
          popupContainer: phoneDropdownParent,
          dotChecker,
          hasError,
          clearError,
          updatePersonalField,
          handleCountryChange: addressLocation.handleCountryChange,
          handleCountryBlur: addressLocation.handleCountryBlur,
          handleRegionChange: addressLocation.handleRegionChange,
          handleRegionBlur: addressLocation.handleRegionBlur,
        })
      case "education":
        return jsx(EducationForm, {
          education: data.education,
          confirmingDeleteId,
          setConfirmingDeleteId,
          dotChecker,
          hasError,
          clearError,
          updateEducationField,
          removeEducation,
          addEducation,
        })
      case "workExperience":
        return jsx(WorkExperienceForm, {
          workExperience: data.workExperience,
          confirmingDeleteId,
          setConfirmingDeleteId,
          dotChecker,
          hasError,
          clearError,
          updateWorkField,
          updateWorkDescriptions,
          removeWork,
          addWork,
        })
      case "skill":
        return jsx(SkillForm, {
          skills: data.skill,
          skillInputValue,
          setSkillInputValue,
          setSkills,
          dotChecker,
        })
      case "equalEmployment":
        return jsx(EqualEmploymentForm, {
          equalEmployment: data.equalEmployment,
          pronouns: data.pronouns,
          dotChecker,
          hasError,
          clearError,
          updateEqualEmploymentField,
          updatePronouns,
        })
      case "preference":
        return jsx(PreferenceForm, {
          preference: data.preference,
          dotChecker,
          updatePreferenceField,
        })
      case "signupInformation":
        return jsx(SignupInformationForm, {
          registrationEmail: data.signupInformation.registrationEmail,
          dotChecker,
          updateSignupRegistrationEmail,
          passwordFieldProps: signupPassword.passwordFieldProps,
        })
      default:
        return null
    }
  }

  return jsxs(ConfigProvider, {
    getPopupContainer: () => popupContainer || document.body,
    children: [
      jsxs(Modal, {
        open,
        width: 1056,
        footer: null,
        title: null,
        zIndex: HELPER_MODAL_Z_INDEX,
        centered: true,
        destroyOnClose: false,
        className: "autofill-info-modal",
        wrapClassName: "jobright-scroll-lock-modal-wrap",
        onCancel: handleCancel,
        closeIcon: jsx(Image, {
          preview: false,
          src: assetUrl(closeSvg),
          width: 16,
          height: 16,
          alt: "close",
        }),
        getContainer: () => popupContainer,
        children: [
          jsx("div", {
            className: "autofill-info-modal-header",
            children: jsx(Typography.Text, {
              className: "autofill-info-modal-title",
              children: "Your Autofill information",
            }),
          }),
          jsxs(Spin, {
            spinning: isLoading || isSubmitting,
            children: [
              hasConflict &&
                jsx(Alert, {
                  type: "warning",
                  showIcon: true,
                  message: "Your information changed elsewhere",
                  description: jsxs(Fragment, {
                    children: [
                      "Your edits are still here. Reload the latest information to review and edit again.",
                      jsx("br", {}),
                      jsx(Button, {
                        type: "link",
                        onClick: () => setReloadConfirmOpen(true),
                        children: "Reload latest information",
                      }),
                    ],
                  }),
                }),
              !hasConflict &&
                !isLoading &&
                baselineRef.current?.usesRevision &&
                !isAutofillInfoRevision(baselineRef.current?.revision) &&
                jsx(Alert, {
                  type: "warning",
                  className: "autofill-info-modal-revision-alert",
                  message: jsxs(Flex, {
                    align: "center",
                    gap: 8,
                    wrap: true,
                    children: [
                      jsx("span", {
                        children: "Refresh information before saving changes.",
                      }),
                      jsx(Button, {
                        type: "link",
                        onClick: () =>
                          changeSummary.hasChanges
                            ? setReloadConfirmOpen(true)
                            : void handleReloadLatest(),
                        children: "Refresh",
                      }),
                    ],
                  }),
                }),
              jsxs(Flex, {
                align: "center",
                gap: 8,
                className: "autofill-info-modal-auto-update",
                children: [
                  jsx(Flex, {
                    align: "center",
                    justify: "center",
                    className: "autofill-info-modal-auto-update-icon",
                    children: jsx(InfoCircleFilled, {
                      style: { fontSize: 16, color: "#000" },
                    }),
                  }),
                  jsxs("div", {
                    className: "autofill-info-modal-auto-update-text",
                    children: [
                      jsx(Typography.Text, {
                        className: "autofill-info-modal-auto-update-title",
                        children: "Automatically update Autofill information",
                      }),
                      jsx(Typography.Text, {
                        className: "autofill-info-modal-auto-update-desc",
                        children: autoUpdateChecked
                          ? jsxs(Fragment, {
                              children: [
                                "Your autofill information updates automatically when you",
                                " ",
                                jsx("strong", {
                                  children: "change your upload resume",
                                }),
                                " or",
                                " ",
                                jsx("strong", {
                                  children: "update information",
                                }),
                                " in an application form.",
                              ],
                            })
                          : "Your autofill information will stay as saved here. Changes to your uploaded resume or application forms won't update it.",
                      }),
                    ],
                  }),
                  jsx(Switch, {
                    checked: autoUpdateChecked,
                    disabled: isAutoUpdateSaving,
                    onChange: handleAutoUpdateChange,
                  }),
                ],
              }),
              jsxs(Flex, {
                className: "autofill-info-modal-content",
                children: [
                  jsx(Flex, {
                    vertical: true,
                    gap: 2,
                    className: "autofill-info-modal-sidebar",
                    children: SECTION_LABELS.map((section) =>
                      jsxs(
                        Button,
                        {
                          className: `autofill-info-modal-nav-item${
                            activeSection === section.key ? " is-active" : ""
                          }`,
                          onClick: () => {
                            setActiveSection(section.key)
                            if (section.key === "skill") {
                              dotChecker.clearItemDot("skill")
                            }
                          },
                          children: [
                            jsx("span", { children: section.label }),
                            dotChecker.hasSectionDot(section.key)
                              ? jsx("span", {
                                  className: "autofill-info-modal-nav-dot",
                                })
                              : null,
                          ],
                        },
                        section.key,
                      ),
                    ),
                  }),
                  jsx("div", {
                    ref: mainContentRef,
                    className: "autofill-info-modal-main",
                    children: renderActiveSection(),
                  }),
                ],
              }),
              jsx(Flex, {
                justify: "center",
                className: "autofill-info-modal-footer",
                children: jsx(Button, {
                  className: "autofill-info-modal-submit",
                  loading: isSubmitting,
                  disabled:
                    !changeSummary.hasChanges ||
                    !baselineRef.current ||
                    isLoading ||
                    hasConflict,
                  onClick: handleUpdate,
                  children: "Update",
                }),
              }),
            ],
          }),
        ],
      }),
      jsx(PageConfirmPopup, {
        open: reloadConfirmOpen,
        title: "Reload latest information?",
        content:
          "This replaces your unsaved profile edits with the latest saved information. Your password edits will be kept.",
        confirmText: "Reload",
        cancelText: "Keep editing",
        zIndex: HELPER_MODAL_Z_INDEX + 1,
        getContainer: () => popupContainer || document.body,
        onConfirm: handleReloadLatest,
        onCancel: () => setReloadConfirmOpen(false),
      }),
      jsx(PageConfirmPopup, {
        open: autoUpdateConfirmOpen,
        title: "Turn on automatic updates?",
        content:
          "Future changes to your profile, selected resume, or application forms may update the information saved here.",
        confirmText: "Turn On",
        cancelText: "Cancel",
        zIndex: HELPER_MODAL_Z_INDEX + 1,
        getContainer: () => popupContainer || document.body,
        onConfirm: () => handleAutoUpdateConfirm("turn_on"),
        onCancel: () => handleAutoUpdateConfirm("cancel"),
      }),
      jsx(PageConfirmPopup, {
        open: unsavedConfirmOpen,
        title: "You have unsaved changes",
        content: "Do you want to save your changes before you leave?",
        confirmText: "Save",
        cancelText: "Close",
        zIndex: HELPER_MODAL_Z_INDEX + 1,
        getContainer: () => popupContainer || document.body,
        onConfirm: saveAndClose,
        onCancel: discardAndClose,
      }),
    ],
  })
}
