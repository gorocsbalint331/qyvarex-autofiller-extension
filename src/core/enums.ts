// @ts-nocheck
/**
 * Shared enums for autofill rendering, messaging, and field types.
 */

export enum RENDER_STEP {
  INITIAL = 0,
  FILLING = 1,
  FILLED = 2,
  FAILED = 3
}

export enum MESSAGE_EVENTS {
  autoFillResultFromIframe = "autoFillResultFromIframe",
  autoFillCompleteFromIframe = "autoFillCompleteFromIframe",
  autoFillReloadIframe = "autoFillReloadIframe",
  updateResultFromIframe = "updateResultFromIframe",
  sendHttpStatusIframe = "sendHttpStatusIframe",
  complateAgent = "complateAgent",
  agentStartFillingFields = "agentStartFillingFields",
  agentGetResumeInfo = "agentGetResumeInfo",
  agentSubmitClicked = "agentSubmitClicked",
  agentCheckCoverLetter = "agentCheckCoverLetter"
}

export enum PROFILE_CURRENT_STAGE {
  NO_FILTER = 1,
  NO_RESUME = 10,
  RESUME_PARSING = 21,
  FILTE_RESUME_READY = 30,
  FAILED_RESUME = 40,
  FAILED_WITHOUT_FILTER = 41,
  V3_TO_SEEKER_TYPE = 50,
  V3_RUSH_TO_BASIC_PREF = 51,
  V3_NO_RUSH_TO_BASIC_PREF = 52,
  V3_TO_CAREER_GOAL = 53,
  V3_TO_ADVANCED_PREF = 54,
  V3_RUSH_TO_RESUME = 55,
  V3_NOT_RUSH_TO_RESUME = 56
}

export enum FIELD_TYPE {
  TEXT = "text",
  NUMBER = "number",
  COVER_LETTER = "cover-letter",
  CHECKBOX = "checkbox",
  SELECT = "select",
  RADIO = "radio",
  SEARCH = "search",
  SELECT_ORIGINAL = "select-original",
  MULTI_SELECT = "multi-select",
  LISTBOX = "listbox",
  EMPLOYMENT = "employment",
  EDUCATION = "education",
  DROPDOWN = "dropdown",
  DATE = "date",
  RADIOGROUP = "radio-group",
  BAMBOOHR_SPECIAL = "bamboohr-special",
  SECTION = "section",
  ASHBY_SEARCH = "ashby-search"
}

export enum APPLICATION_STATUS {
  RUNNING = 0,
  SUCCESS = 1,
  FAILED = 2
}

export enum MIME_TYPE {
  pdf = "application/pdf",
  doc = "application/msword",
  docx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
}
