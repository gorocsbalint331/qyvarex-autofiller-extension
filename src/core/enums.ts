/** Core enums ported from Jobright helper `~core/enums`. */

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

export const MIME_TYPE = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
} as const
