// @ts-nocheck
/**
 * Shared pathname / Greenhouse / profile-stage constants for the helper runtime.
 */

export enum PROFILE_CURRENT_STAGE {
  NO_FILTER = 1,
  NO_RESUME = 10,
  RESUME_PARSING = 21,
  FILTER_RESUME_READY = 30,
  FAILED_RESUME = 40,
  FAILED_WITHOUT_FILTER = 41,
  V3_TO_SEEKER_TYPE = 50,
  V3_RUSH_TO_BASIC_PREF = 51,
  V3_NO_RUSH_TO_BASIC_PREF = 52,
  V3_TO_CAREER_GOAL = 53,
  V3_TO_ADVANCED_PREF = 54,
  V3_RUSH_TO_RESUME = 55,
  V3_NOT_RUSH_TO_RESUME = 56,
}

export const PROFILE_STATE_LINK_ENUM = {
  0: "/",
  [PROFILE_CURRENT_STAGE.NO_FILTER]: "/onboarding-v3/mode-selection",
  [PROFILE_CURRENT_STAGE.NO_RESUME]: "/onboarding-v3/mode-selection",
  [PROFILE_CURRENT_STAGE.RESUME_PARSING]: "/matching",
  [PROFILE_CURRENT_STAGE.FILTER_RESUME_READY]: "/jobs/recommend",
  [PROFILE_CURRENT_STAGE.FAILED_RESUME]: "/onboarding-v3/resume-upload",
  [PROFILE_CURRENT_STAGE.FAILED_WITHOUT_FILTER]: "/jobs/recommend",
  [PROFILE_CURRENT_STAGE.V3_TO_SEEKER_TYPE]: "/onboarding-v3/mode-selection",
  [PROFILE_CURRENT_STAGE.V3_RUSH_TO_BASIC_PREF]: "/onboarding-v3/diagnostics",
  [PROFILE_CURRENT_STAGE.V3_NO_RUSH_TO_BASIC_PREF]: "/onboarding-v3/diagnostics",
  [PROFILE_CURRENT_STAGE.V3_TO_CAREER_GOAL]: "/onboarding-v3/career-goals",
  [PROFILE_CURRENT_STAGE.V3_TO_ADVANCED_PREF]: "/onboarding-v3/advanced-preferences",
  [PROFILE_CURRENT_STAGE.V3_RUSH_TO_RESUME]: "/onboarding-v3/resume-upload",
  [PROFILE_CURRENT_STAGE.V3_NOT_RUSH_TO_RESUME]: "/onboarding-v3/resume-upload",
}

export const JOBRIGHT_APPLY_NOW_BUTTON_ID = "apply-now-button-id"
export const JOBRIGHT_JOB_DETAIL_JSON_ID = "jobright-helper-job-detail-info"
export const DETAIL_PATHNAME = "/jobs/info"
export const JOB_RECOMMEND_LIST_PATHNAME = "/jobs/recommend"
export const JOB_APPLY_LIST_PATHNAME = "/jobs/applied"
export const GREENHOUSE_EDUCATION_SECTION_ID_NAME_ONE = "education_section"
export const GREENHOUSE_EDUCATION_SECTION_CLASS_NAME_TWO = "education--container"
export const GREENHOUSE_REACT_SELECT_OPEN_EVENT_GROUP = [
  "mousedown",
  "mouseup",
  "click",
]
export const GREENHOUSE_EDUCATION_GROUP = ["school", "degree"]
export const GREENHOUSE_V2_REACT_SELECT_INPUT_CLASS = "select__input"
export const GREENHOUSE_V2_REACT_SELECT_CONTROL_CLASS = "select__control"
export const GREENHOUSE_V2_REACT_SELECT_MENU_CLASS = "select__menu"
export const GREENHOUSE_V2_REACT_SELECT_OPTION_CLASS = "select__option"
export const GREENHOUSE_V2_ReACT_SELECT_INDICATOR_CLASS = "select__indicator"
export const TAILOR_RESUME_ID_PREFIX = "tailor-resume-"
