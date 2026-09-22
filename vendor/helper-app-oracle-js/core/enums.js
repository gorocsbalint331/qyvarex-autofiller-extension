/**
 * Parcel module id: 1O3nc
 * Resolved path: core/enums.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n, o, i, a, l, s, u = e("@parcel/transformer-js/src/esmodule-helpers.js");
u.defineInteropFlag(r), u.export(r, "RENDER_STEP", () => n), u.export(r, "MESSAGE_EVENTS", () => o),
  u.export(r, "PROFILE_CURRENT_STAGE", () => i), u.export(r, "FIELD_TYPE", () => a), u.export(r,
    "APPLICATION_STATUS", () => l), u.export(r, "MIME_TYPE", () => s),
  function(e) {
    e[e.INITIAL = 0] = "INITIAL", e[e.FILLING = 1] = "FILLING", e[e.FILLED = 2] = "FILLED", e[e
      .FAILED = 3] = "FAILED"
  }(n || (n = {})),
  function(e) {
    e.autoFillResultFromIframe = "autoFillResultFromIframe", e.autoFillCompleteFromIframe =
      "autoFillCompleteFromIframe", e.autoFillReloadIframe = "autoFillReloadIframe", e
      .updateResultFromIframe = "updateResultFromIframe", e.sendHttpStatusIframe =
      "sendHttpStatusIframe", e.complateAgent = "complateAgent", e.agentStartFillingFields =
      "agentStartFillingFields", e.agentGetResumeInfo = "agentGetResumeInfo", e.agentSubmitClicked =
      "agentSubmitClicked", e.agentCheckCoverLetter = "agentCheckCoverLetter"
  }(o || (o = {})),
  function(e) {
    e[e.NO_FILTER = 1] = "NO_FILTER", e[e.NO_RESUME = 10] = "NO_RESUME", e[e.RESUME_PARSING = 21] =
      "RESUME_PARSING", e[e.FILTE_RESUME_READY = 30] = "FILTE_RESUME_READY", e[e.FAILED_RESUME =
      40] = "FAILED_RESUME", e[e.FAILED_WITHOUT_FILTER = 41] = "FAILED_WITHOUT_FILTER", e[e
        .V3_TO_SEEKER_TYPE = 50] = "V3_TO_SEEKER_TYPE", e[e.V3_RUSH_TO_BASIC_PREF = 51] =
      "V3_RUSH_TO_BASIC_PREF", e[e.V3_NO_RUSH_TO_BASIC_PREF = 52] = "V3_NO_RUSH_TO_BASIC_PREF", e[e
        .V3_TO_CAREER_GOAL = 53] = "V3_TO_CAREER_GOAL", e[e.V3_TO_ADVANCED_PREF = 54] =
      "V3_TO_ADVANCED_PREF", e[e.V3_RUSH_TO_RESUME = 55] = "V3_RUSH_TO_RESUME", e[e
        .V3_NOT_RUSH_TO_RESUME = 56] = "V3_NOT_RUSH_TO_RESUME"
  }(i || (i = {})),
  function(e) {
    e.TEXT = "text", e.NUMBER = "number", e.COVER_LETTER = "cover-letter", e.CHECKBOX = "checkbox",
      e.SELECT = "select", e.RADIO = "radio", e.SEARCH = "search", e.SELECT_ORIGINAL =
      "select-original", e.MULTI_SELECT = "multi-select", e.LISTBOX = "listbox", e.EMPLOYMENT =
      "employment", e.EDUCATION = "education", e.DROPDOWN = "dropdown", e.DATE = "date", e
      .RADIOGROUP = "radio-group", e.BAMBOOHR_SPECIAL = "bamboohr-special", e.SECTION = "section", e
      .ASHBY_SEARCH = "ashby-search"
  }(a || (a = {})),
  function(e) {
    e[e.RUNNING = 0] = "RUNNING", e[e.SUCCESS = 1] = "SUCCESS", e[e.FAILED = 2] = "FAILED"
  }(l || (l = {})),
  function(e) {
    e.pdf = "application/pdf", e.doc = "application/msword", e.docx =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  }(s || (s = {}))

