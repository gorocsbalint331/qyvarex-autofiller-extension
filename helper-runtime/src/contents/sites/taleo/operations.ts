// @ts-nocheck
/**
 * Taleo — DOM fill operations (hardcoded sections, uploads, dates, selects).
 */

import * as sectionResults from "../../methods/section-results.js"
import * as cancellation from "../../methods/cancellation.js"
import * as dayjs from "dayjs"
import * as checkboxUtils from "../../crawler/utils/checkbox.js"
import * as executor from "../../crawler/utils/executor.js"
import * as answerMethods from "../../methods/answer.js"
import * as observer from "../../methods/observer.js"
import * as enums from "../../../core/enums.js"
import * as xpath from "../../../core/xpath.js"
import * as taleoAnswer from "./answer.ts"
const dayjsDefault = { default: dayjs };
let TALEO_HARDCODE_CONFIG = { education: { key: "education", container: ["//div[contains(@test-id, 'education-history')]", `//span[@class="blockpanel" and .//span[contains(., 'Education')]]`, "//div[contains(@aria-label, 'Education History') and not(@aria-label='Work and Education History')]"], snapshot: [".//form[contains(@id, 'educationHistory')]", "//fieldset[.//span[contains(., 'Education')] and .//table[contains(@class , 'custom-form-grid')]]", "//div[contains(@class, 'education-template')]"], addButton: [".//button[contains(@test-id, 'add-educationhistory-record')]", '//span[contains(@id, "AddEducation")]', '//a[contains(@class, "add-education-trigger")]'], saveButton: ['//a[contains(@class, "save-edit-trigger")]', '//a[contains(@class, "save-edit-trigger")]', './/following-sibling::div[contains(@class, "oracletaleocwsv2-btn-grouped")]//a[contains(@class, "save-edit-trigger") and @aria-label="Save"]'], fields: [{ key: "Education Level", templateIndexes: [0, 1], xpath: [".//select[contains(@id, 'education_StudyLevel')]", ".//select[contains(@id, 'education_StudyLevel')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Education Level", templateIndexes: [2], xpath: ".//select[contains(@id, 'EDUCATION_CUSTOM_728')]", type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Education Status", xpath: [".//select[contains(@name, 'EDUCATION_STATUS')]", ".//select[contains(@name, 'EDUCATION_STATUS')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Type of School", templateIndexes: [1], xpath: ["", ".//select[contains(@id, 'education_UDFEducation_txtypeschool') or contains(@name, 'education_UDFEducation_txtypeschool')]", ""], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Graduated", templateIndexes: [1], xpath: ["", ".//select[contains(@id, 'education_UDFEducation_Graduated')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Graduated", templateIndexes: [2], xpath: ".//select[contains(@id, 'EDUCATION_CUSTOM_1036')]", type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Is this a Career Technical Education (CTE/JVS) school.", templateIndexes: [0, 1], xpath: [".//select[contains(@name, 'Education_OH_CTE')]", ".//select[contains(@name, 'Education_OH_CTE')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "isCurrent", alternateKey: "isCurrent", xpath: [".//input[contains(@id, 'notCompleted')]", ".//input[contains(@id, 'notCompleted')]"], isCheckbox: true, type: enums.FIELD_TYPE.CHECKBOX, delay: 2 }, { key: "Study", templateIndexes: [0, 1], alternateKey: "Program", xpath: [".//input[contains(@id, 'majorName')]", ".//input[contains(@id, 'education_Program')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Major Field of Study", templateIndexes: [1], alternateKey: "Study", xpath: ["", ".//input[contains(@id, 'education_Program')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Field of Study/Major", templateIndexes: [2], alternateKey: "Study", xpath: ["", "", ".//input[contains(@id, 'EDUCATION_fieldOfStudy')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "What Was Your Major?", alternateKey: "Program", xpath: [".//input[contains(@id, 'majorName')]", ".//input[contains(@id, 'education_Program')]", ".//input[contains(@id, 'EDUCATION_CUSTOM_1197')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Has this degree been completed", xpath: ".//select[contains(@id, 'education_UDFEducation_Degree_32_Completion_32_Status')]", type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Minor", xpath: ".//input[contains(@id, 'Minor') or contains(@name, 'Minor')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "StartDate Month", alternateKey: "Date From Month", xpath: ["", ".//select[contains(@name, 'education_startDate.month')]", ".//select[contains(@name, 'dateFrom_month')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "StartDate Year", alternateKey: "Date From Year", xpath: ["", ".//select[contains(@name, 'education_startDate.year')]", ".//select[contains(@name, 'dateFrom_year')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "EndDate Month", alternateKey: "Date To Month", xpath: ["", ".//select[contains(@name, 'education_endDate.month')]", ".//select[contains(@name, 'dateTo_month')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "EndDate Year", alternateKey: "Date To Year", xpath: ["", ".//select[contains(@name, 'education_endDate.year')]", ".//select[contains(@name, 'dateTo_year')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Graduation Date Month", alternateKey: "Date To Month", xpath: ["", ".//select[contains(@name, 'education_graduationDate.month')]", ".//select[contains(@name, 'dateTo_month')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Graduation Date Year", alternateKey: "Date To Year", xpath: ["", ".//select[contains(@name, 'education_graduationDate.year')]", ".//select[contains(@name, 'dateTo_year')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Graduation Date Projected", xpath: ["", ".//input[contains(@id, 'education_graduationDateProjected')]"], isCheckbox: true, delay: 2, type: enums.FIELD_TYPE.CHECKBOX }, { key: "Start", xpath: [".//input[contains(@id, 'effectiveStart')]", ".//input[contains(@id, 'education_startDate')]"], format: (e) => e ? dayjsDefault.default(e).format("YYYY-MM-DD") : "", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "End", xpath: [".//input[contains(@id, 'effectiveEnd')]", ".//input[contains(@id, 'education_UDFEducation')]"], format: (e) => e ? dayjsDefault.default(e).format("YYYY-MM-DD") : "", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "School", alternateKey: "Institution", xpath: [".//input[contains(@id, 'schoolName')]", ".//input[contains(@id, 'education_Institution')]", ".//input[contains(@id, 'EDUCATION_schoolName')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Degree Achieved", alternateKey: "Highest Degree Achieved", xpath: [".//input[contains(@id, 'degreeAchieved')]", ".//input[contains(@id, 'education_DegreeAchieved')]", ".//input[contains(@id, 'EDUCATION_degreeAchieved')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Highest Degree Achieved", xpath: [".//select[contains(@id, 'degreeAchieved')]", ".//select[contains(@id, 'education_DegreeAchieved')]", ".//select[contains(@id, 'EDUCATION_CUSTOM_728')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "I have obtained this degree", xpath: [".//select[contains(@id, 'UDFEducation_LP_EDU_GRAD1')]", ".//select[contains(@id, 'UDFEducation_LP_EDU_GRAD1')]", ".//select[contains(@id, 'UDFEducation_LP_EDU_GRAD1')]"], type: enums.FIELD_TYPE.DROPDOWN, delay: 2 }, { key: "Country", xpath: ".//input[contains(@id, 'countryCode') or contains(@name, 'Country')]", type: enums.FIELD_TYPE.DROPDOWN, delay: 2 }, { key: "City", xpath: ".//input[contains(@id, 'education_OtherInstitutionCity')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Country", xpath: [".//input[contains(@id, 'countryCode') or contains(@name, 'Country')]", ".//select[contains(@id, 'education_OtherInstitutionLocation-0')]"], type: enums.FIELD_TYPE.DROPDOWN, delay: 2 }, { key: "State / Province", xpath: ".//input[contains(@id, 'StateProvince') or contains(@name, 'StateProvince')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "State/Territory", templateIndexes: [2], xpath: ".//select[contains(@id, 'EDUCATION_state')]", type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Did You Graduate?", xpath: [".//select[contains(@id, 'EDUCATION_didYouGraduate')]", ".//select[contains(@name, 'EDUCATION_CUSTOM_1196')]", ".//select[contains(@id, 'EDUCATION_CUSTOM_1196')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "City", xpath: ["", ".//input[contains(@id, 'City') or contains(@name, 'City')]", ".//input[contains(@id, 'EDUCATION_city')]", ".//input[contains(@id, 'EDUCATION_city')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Years Completed", templateIndexes: [2], xpath: ["", "", ".//input[contains(@id, 'EDUCATION_CUSTOM_1035')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "G.P.A", alternateKey: "gpa", xpath: ".//input[contains(@id, 'GPA') or contains(@name, 'GPA')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }] }, workExperience: { key: "workExperience", container: ["//div[contains(@test-id, 'work-history')]", `//span[@class="blockpanel" and .//span[contains(., 'Work Experience')]]`, "//div[contains(@aria-label, 'Work History')]"], snapshot: [".//div[contains(@class, 'employment-template')]", "//fieldset[.//span[contains(., 'Work Experience')]]", "//div[contains(@class, 'employment-template')]"], addButton: ['//a[@aria-label="Add Work History" and not(@disabled="disabled")]', '//span[contains(@id, "AddWorkExperience")]', '//a[contains(@class, "add-work-trigger")]'], saveButton: ['//a[contains(@class, "save-edit-trigger")]', '//a[contains(@class, "save-edit-trigger")]', './/following-sibling::div[contains(@class, "oracletaleocwsv2-btn-grouped")]//a[contains(@class, "save-edit-trigger") and @aria-label="Save"]'], fields: [{ key: "Title", alternateKey: "jobTitle", xpath: [".//input[contains(@id, 'WORK_HISTORY_jobTitle')]", ".//input[contains(@id, 'experience_JobFunction')]", ".//input[contains(@id, 'WORK_HISTORY_jobTitle')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Job Title", templateIndexes: [0, 1], alternateKey: "jobTitle", xpath: [".//input[contains(@id, 'WORK_HISTORY_jobTitle')]", ".//input[contains(@id, 'JOB_TITLE')]", ".//input[contains(@id, 'WORK_HISTORY_jobTitle')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Job Title", alternateKey: "jobTitle", xpath: [".//input[contains(@id, 'ES2_BGC_UDF04')]", ".//input[contains(@id, 'ES2_BGC_UDF04')]", ".//input[contains(@id, 'ES2_BGC_UDF04')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Position Title", templateIndexes: [1], alternateKey: "Title", xpath: ["", ".//input[contains(@id, 'experience_JobFunction') or contains(@id, 'experience_UDFExperience_Position_32_Title')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Job Function", alternateKey: "Job Function / Title", xpath: [".//input[contains(@id, 'WORK_HISTORY_jobTitle')]", ".//input[contains(@name, 'experience_JobFunction')]", ".//input[contains(@id, 'experience_JobFunction')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "okToContact", alternateKey: "Ok To Contact", xpath: [".//input[contains(@id, 'WORK_HISTORY_okToContact')]", ".//input[contains(@name, 'okToContact')]", ".//input[contains(@id, 'okToContact')]"], isCheckbox: true, delay: 2, type: enums.FIELD_TYPE.CHECKBOX }, { key: "isCurrent", alternateKey: "Current Job", xpath: [".//input[contains(@id, 'isCurrent')]", ".//input[contains(@id, 'experience_CurrentEmployer')]", ""], isCheckbox: true, delay: 2, type: enums.FIELD_TYPE.CHECKBOX }, { key: "Job Schedule", xpath: [".//input[contains(@id, 'UDFExperience_Job_32_Schedule')]", ".//input[contains(@id, 'UDFExperience_Job_32_Schedule')]", ".//input[contains(@id, 'UDFExperience_Job_32_Schedule')]"], isCheckbox: true, delay: 2, type: enums.FIELD_TYPE.RADIOGROUP }, { key: "The supervisor may be contacted", xpath: [".//input[contains(@id, 'experience_PermissionToContact')]"], isCheckbox: true, delay: 2, type: enums.FIELD_TYPE.CHECKBOX }, { key: "The supervisor may be contacted", xpath: [".//input[contains(@id, 'experience_PermissionToContact')]", ".//select[contains(@name, 'UDFExperience_tgh_contact_supervisor')]"], isCheckbox: false, delay: 2, type: enums.FIELD_TYPE.SELECT }, { key: "Employer Name", templateIndexes: [0, 1], alternateKey: "Employer", xpath: [".//input[contains(@id, 'companyName')]", ".//input[contains(@id, 'experience_Employer')]", ".//input[contains(@id, 'WORK_EMPLOYER') or contains(@id, 'companyName')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Company Name", alternateKey: "Company", xpath: [".//input[contains(@id, 'companyName')]", ".//input[contains(@id, 'experience_Employer')]", ".//input[contains(@id, 'WORK_EMPLOYER') or contains(@id, 'companyName')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Current or Final Wage", alternateKey: "Final Wage", xpath: [".//input[contains(@id, 'WORK_HISTORY_finalRateOfPay')]", ".//input[contains(@id, 'finalRateOfPay')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Wage Type", xpath: [".//select[contains(@id, 'WORK_HISTORY_CUSTOM_775')]", "", ""], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Job Type", xpath: ["", ".//select[contains(@id, 'experience_UDFExperience_txjobtype')]", ""], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "If supervisory, number of employees you supervised?", xpath: ["", ".//input[contains(@id, 'experience_UDFExperience_txsupervnum')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "BeginDate Month", alternateKey: "Date From Month", xpath: [".//input[contains(@name, 'workDateFrom_month')]", ".//select[contains(@name, 'experience_BeginDate.month')]", ".//select[contains(@name, 'workDateFrom_month')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "BeginDate Year", alternateKey: "Date From Year", xpath: [".//input[contains(@name, 'workDateFrom_year')]", ".//select[contains(@name, 'experience_BeginDate.year')]", ".//select[contains(@name, 'workDateFrom_year')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "EndDate Month", alternateKey: "Date To Month", xpath: [".//input[contains(@name, 'workDateTo_month')]", ".//select[contains(@name, 'experience_EndDate.month')]", ".//select[contains(@name, 'workDateTo_month')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "EndDate Year", alternateKey: "Date To Year", xpath: [".//input[contains(@name, 'workDateTo_year')]", ".//select[contains(@name, 'experience_EndDate.year')]", ".//select[contains(@name, 'workDateTo_year')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Hours Worked per Week", xpath: ["", ".//input[contains(@id, 'experience_UDFExperience_txnumhours')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Start", xpath: ".//input[contains(@id, 'effectiveStart')]", format: (e) => e ? (2 === e.split("-").length && (e += "-01"), dayjsDefault.default(e).format("YYYY-MM-DD")) : "", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "End", xpath: ".//input[contains(@id, 'effectiveEnd')]", format: (e) => e ? (2 === e.split("-").length && (e += "-01"), dayjsDefault.default(e).format("YYYY-MM-DD")) : "", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Company City State", templateIndexes: [2], xpath: ".//input[contains(@id, 'WORK_HISTORY_companyCityState')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Company Phone", templateIndexes: [2], xpath: ".//input[contains(@id, 'WORK_HISTORY_companyPhone')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "State/Province", alternateKey: "State", xpath: [".//input[contains(@id, 'stateCode')]", ".//input[contains(@id, 'State')]", ".//input[contains(@id, 'State')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Address Line 1", alternateKey: "location", xpath: ".//input[contains(@name, 'Address1')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "City", templateIndexes: [1], alternateKey: "City", xpath: ["", ".//input[contains(@id, 'experience_UDFExperience_txcity') or contains(@id, 'City')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "City", alternateKey: "City", xpath: [".//input[contains(@name, 'City')]", "", ".//input[contains(@id, 'City')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "State", templateIndexes: [1], alternateKey: "State/Province", xpath: ["", ".//input[contains(@id, 'experience_UDFExperience_txstate') or contains(@name, 'experience_UDFExperience_txstate') or contains(@id, 'UDFExperience_txstate')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "State/Province", templateIndexes: [1], alternateKey: "State", xpath: ["", ".//input[contains(@id, 'experience_UDFExperience_txstate') or contains(@name, 'experience_UDFExperience_txstate') or contains(@id, 'UDFExperience_txstate')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Division / Dept.", alternateKey: "Division", xpath: ".//input[contains(@name, 'DivisionDept')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Supervisor", alternateKey: "Direct Supervisor", xpath: [".//input[contains(@name, 'SupervisorName')]", ".//input[contains(@name, 'SUPERVISOR')]", ".//input[contains(@name, 'directSupervisor')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Supervisor's Name", alternateKey: "Supervisor", xpath: [".//input[contains(@name, 'SupervisorName')]", ".//input[contains(@name, 'experience_Supervisor')]", ".//input[contains(@name, 'directSupervisor')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Reason for Leaving", alternateKey: "Reason For Leaving", xpath: [".//input[contains(@name, 'WORK_HISTORY_reasonForLeaving')]", ".//input[contains(@name, 'UDFExperience_tgh_reason')]", ".//input[contains(@name, 'Reason_Leaving')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Specific reason for leaving (If current job, type NA)", alternateKey: "Reason For Leaving", xpath: ["", ".//textarea[contains(@id, 'experience_UDFExperience_txleavereasn')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Summary of experience including special training/skills/qualifications you have used in the performance of this job", templateIndexes: [1], alternateKey: "jobDescriptions", xpath: ["", ".//textarea[contains(@id, 'experience_UDFExperience_SUM_EXP') or contains(@id, 'experience_Responsibility')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Supervisor's Title", templateIndexes: [1], xpath: ["", ".//input[contains(@id, 'experience_supervisorTitle')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Supervisor Title", templateIndexes: [2], alternateKey: "Supervisor's Title", xpath: ".//input[contains(@id, 'WORK_HISTORY_supervisorTitle')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Supervisor's Phone", templateIndexes: [1], xpath: ["", ".//input[contains(@id, 'experience_SupervisorPhone')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Supervisor's Email Address", templateIndexes: [1], xpath: ["", ".//input[contains(@id, 'experience_SupervisorEmail')]", ""], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Reason for Leaving", alternateKey: "Specific reason for leaving (If current job, type NA)", xpath: [".//select[contains(@name, 'WORK_HISTORY_reasonForLeaving')]", ".//input[contains(@name, 'UDFExperience_tgh_reason')]", ".//select[contains(@name, 'reasonForLeaving')]"], type: enums.FIELD_TYPE.SELECT, delay: 2 }, { key: "Reason for Leaving", alternateKey: "Reason For Leaving", xpath: [".//input[contains(@name, 'WORK_HISTORY_reasonForLeaving')]", ".//input[contains(@name, 'UDFExperience_tgh_reason')]", ".//input[contains(@name, 'Reason_Leaving')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Name During Employment", xpath: [".//input[contains(@name, 'NameWhileEmployed')]", ".//input[contains(@name, 'NameWhileEmployed')]", ".//input[contains(@name, 'NameWhileEmployed')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Duties and Responsibilities", alternateKey: "Achievements", xpath: [".//textarea[contains(@name, 'WORK_HISTORY_jobDescription')]", ".//textarea[contains(@id, 'experience_Responsibility')]"], xpath2: ".//textarea[contains(@name, 'WORK_HISTORY_jobDescription')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Achievements", alternateKey: "Duties/Responsibilities", xpath: [".//textarea[contains(@name, 'WORK_HISTORY_jobDescription')]", ".//textarea[contains(@id, 'experience_Responsibility')]"], xpath2: ".//textarea[contains(@name, 'WORK_HISTORY_jobDescription')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Job Duties", alternateKey: "Duties and Responsibilities", xpath: [".//textarea[contains(@name, 'WORK_HISTORY_jobDescription')]", ".//textarea[contains(@name, 'experience_Responsibility')]"], type: enums.FIELD_TYPE.TEXT, delay: 2 }, { key: "Description", templateIndexes: [2], alternateKey: "jobDescriptions", xpath: ".//textarea[contains(@name, 'WORK_HISTORY_jobDescription') or contains(@id, 'WORK_HISTORY_jobDescription')]", type: enums.FIELD_TYPE.TEXT, delay: 2 }] } }, g = ["div.oracletaleocwsv2-dynamic-content.oracletaleocwsv2-dynamic-content-resume", 'div[id*="AttachedFilesBlock"]', "span.textindentpanel"], b = 'input[type="file"]#resume[name="resume"]', y = 'input[type="file"][name="resume_template"], a[aria-label="Add Resume"]', v = 'input[type="file"][id*="AttachedFilesBlock-uploadedFile"], input[type="file"][name*="AttachedFilesBlock-uploadedFile"]', w = 'input[type="file"][id*="ResumeParsingBlock-UploadResumeBlock-ResumeUploadInputFile"], input[type="file"][name*="ResumeParsingBlock-UploadResumeBlock-ResumeUploadInputFile"]', S = 'input[type="file"][id*="ResumeUploadInputFile"], input[type="file"][name*="ResumeUploadInputFile"]', E = [b, v, w, S].join(", ");
function x(e) {
  if (!(e instanceof HTMLElement)) return false;
  let t = e.classList.contains("oracletaleocwsv2-snapshot-display-none") || e.classList.contains("oracletaleocwsv2-display-none");
  if (!t) return false;
  let r = window.getComputedStyle(e);
  return "none" === r.display || "hidden" === r.visibility;
}
function C(e) {
  if (!(e instanceof HTMLElement)) return false;
  let t = e;
  for (; t; ) {
    if (t.hidden || "true" === t.getAttribute("aria-hidden") || x(t)) return false;
    let e2 = window.getComputedStyle(t);
    if ("none" === e2.display || "hidden" === e2.visibility) return false;
    t = t.parentElement;
  }
  return true;
}
function A(e, t = document) {
  let r = Array.from(t.querySelectorAll(e)).filter((e2) => e2 instanceof HTMLInputElement);
  return r.find((e2) => C(e2)) || r.find((e2) => C(e2.parentElement)) || null;
}
function k() {
  let e = Array.from(document.querySelectorAll('.oracletaleocwsv2-step.oracletaleocwsv2-active[id^="step-"]')).filter((e2) => e2 instanceof HTMLElement);
  for (let t of e) {
    let e2 = t.querySelector(".oracletaleocwsv2-step-title .title"), r = t.querySelector('input[name="embeddedPageStepTitle"]'), n = e2?.textContent?.trim() || r?.value?.trim() || "", o2 = t.querySelector("div.oracletaleocwsv2-dynamic-content.oracletaleocwsv2-dynamic-content-resume"), i2 = !!o2?.querySelector([b, y].join(", "));
    if (o2 && (/resume and questions/i.test(n) || i2)) return t;
  }
  return null;
}
function T() {
  let e = k();
  return e ? e.querySelector("div.oracletaleocwsv2-dynamic-content.oracletaleocwsv2-dynamic-content-resume") : null;
}
function F() {
  let e = T(), t = e?.querySelector('a[aria-label="Add Resume"]');
  return e && t && C(t) ? { root: e, addResumeButton: t } : null;
}
async function I() {
  let e = null, t = await observer.waitForCondition(() => !!(e = F()), { timeout: 4e3, interval: 100, observeTarget: document.body });
  return t ? e : null;
}
function j(e) {
  return !!e && !e.disabled;
}
function D(e) {
  let t = e?.parentElement ?? null;
  return !!e && !e.disabled && (C(e) || C(t));
}
function P(e) {
  let t = e;
  for (; t; ) {
    if (g.some((e2) => t.matches(e2))) return t;
    t = t.parentElement;
  }
  return e.parentElement;
}
function _() {
  let e = T(), t = e ? A(b, e) : null;
  if (j(t)) return { input: t, template: "cwsv2", root: P(t) };
  let r = A(v);
  if (D(r)) return { input: r, template: "attached-files", root: P(r) };
  let n = A(w);
  if (D(n)) return { input: n, template: "resume-parsing", root: P(n) };
  let o2 = A(S);
  return D(o2) ? { input: o2, template: "resume-upload", root: P(o2) } : null;
}
async function L() {
  let e = await I();
  if (!e) return console.warn("[TaleoResumeUpload] failed", { reason: "cws-v2-resume-launcher-not-ready" }), null;
  let { root: t, addResumeButton: r } = e;
  console.info("[TaleoResumeUpload] cws-v2-expand", { action: "add-resume" }), eI(r);
  let n = await observer.waitForCondition(() => j(A(b, t)), { timeout: 2e3, interval: 100, observeTarget: t });
  if (!n) return console.warn("[TaleoResumeUpload] failed", { reason: "cws-v2-resume-input-not-ready" }), null;
  let o2 = A(b, t);
  return j(o2) ? { input: o2, template: "cwsv2", root: P(o2) } : null;
}
function R(e) {
  let t = e.root || document;
  return "attached-files" === e.template ? t.querySelector('input[type="button"][id*="AttachedFilesBlock-attachFileCommand"], input[type="button"][name*="AttachedFilesBlock-attachFileCommand"], input[type="button"][title*="Attach the file"], input[type="button"][value="Attach"]') || xpath.getFirstOrderedNode(`//input[@type="button" and (contains(@id, 'AttachedFilesBlock-attachFileCommand') or contains(@name, 'AttachedFilesBlock-attachFileCommand') or @title='Attach the file' or @value='Attach')]`, t) : "cwsv2" === e.template || "resume-upload" === e.template ? t.querySelector('a[aria-label="Save"]') || xpath.getFirstOrderedNode('//a[@aria-label="Save" and not(@disabled="disabled")]', t) : null;
}
function O(e, t) {
  let r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "files")?.set;
  return r ? r.call(e, t) : e.files = t, !!e.files?.length;
}
function M(e) {
  let t = e.querySelector(".oracletaleocwsv2-accordion-head .oracletaleocwsv2-head-title"), r = e.querySelector('input[name="uploaded_resume"], #uploaded_resume');
  return t?.textContent?.trim() || r?.value?.trim() || "";
}
function N(e) {
  return !!e && "disabled" !== e.getAttribute("disabled") && !e.hasAttribute("disabled") && "true" !== e.getAttribute("aria-disabled");
}
async function $(e, t) {
  if ("cwsv2" === e.template) {
    let r = e.root || document;
    return observer.waitForCondition(() => {
      let n = e.input.files?.[0]?.name?.trim() || M(r), o2 = R(e);
      return !!n && (n === t || n.includes(t) || t.includes(n)) && N(o2);
    }, { timeout: 3e3, interval: 100, observeTarget: r });
  }
  return observer.waitForCondition(() => e.input.files?.[0]?.name === t, { timeout: 1500, interval: 100 });
}
async function B(e, t) {
  if ("cwsv2" !== e.template) return true;
  let r = e.root || document;
  return observer.waitForCondition(() => {
    let e2 = M(r);
    return !!e2 && (e2 === t || e2.includes(t) || t.includes(e2));
  }, { timeout: 4e3, interval: 150, observeTarget: r });
}
function q(e) {
  return e instanceof HTMLInputElement && "file" === e.type && e.matches(E);
}
function U(e) {
  return (Array.isArray(e) ? e : [e]).map((e2) => String(e2 ?? "").trim()).filter(Boolean);
}
function H(e) {
  let t = String(e ?? "").trim();
  if (!t) return [];
  let r = /* @__PURE__ */ new Set([t]), n = dayjsDefault.default(t, ["MMMM", "MMM"], true);
  return n.isValid() && (r.add(String(n.month() + 1)), r.add(String(n.month() + 1).padStart(2, "0"))), Array.from(r);
}
function Y(e, t, r) {
  return "true" === e.toLowerCase() && "yes" === t.toLowerCase() || "false" === e.toLowerCase() && "no" === t.toLowerCase() || t.includes("have read") && "true" === e.toLowerCase() || answerMethods.isMatched(t, r) && "true" === e.toLowerCase();
}
function z(e, t) {
  return e.toLowerCase() === t.toLowerCase() || "yes" === e.toLowerCase() && ("true" === t.toLowerCase() || "1" === t) || "no" === e.toLowerCase() && ("false" === t.toLowerCase() || "0" === t);
}
function V(e) {
  let t = null, r = xpath.getFirstOrderedNode("./ancestor::label[contains(@class, 'ant-')]", e), n = document.querySelector(`[for="${e.id}"]`);
  return t = r || n, "agreeCheckbox" === e.id && (t = document.querySelector(`#${e.id}Label`)), t?.innerText?.toLowerCase().trim() || "";
}
function W(e) {
  return e instanceof HTMLInputElement && (e.classList.contains("oracletaleocwsv2-datepicker-trigger") || /M\/D\/Y/i.test(e.getAttribute("placeholder") || ""));
}
function G(e) {
  return "BeginDate Month" === e || "BeginDate Year" === e ? "BeginDate" : "EndDate Month" === e || "EndDate Year" === e ? "EndDate" : null;
}
function K(e, t) {
  return "BeginDate" === e ? String(t.Start || t["Start Date"] || "").trim() : String(t.End || t["End Date"] || "").trim();
}
function X(e, t) {
  return Array.from(e.querySelectorAll(`input[type="hidden"][id*="${t}"], input[type="hidden"][name*="${t}"]`)).find((e2) => {
    if (!(e2 instanceof HTMLInputElement)) return false;
    let r = e2.id || "", n = e2.getAttribute("name") || "";
    return r.includes(t) || n.includes(t);
  }) || null;
}
function J(e, t) {
  let r = Object.getPrototypeOf(e), n = Object.getOwnPropertyDescriptor(r, "value")?.set;
  n ? n.call(e, t) : e.value = t;
}
function Q(e) {
  e && C(e) && (e.focus?.(), e.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), e.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true })), e.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true })));
}
function Z(e) {
  return e.closest("span.input-date-time") || e.parentElement?.querySelector("span.input-date-time");
}
function ee(e) {
  return e?.querySelector(".input-date-time-text") || e?.querySelector('[id$=".display"]');
}
function et(e) {
  let t = [e, e?.replace(/\.display$/, "-table")].filter(Boolean);
  for (let e2 of t) {
    let t2 = document.getElementById(e2);
    if (t2 && C(t2)) return t2;
  }
  let r = ['table[id$="-table"]', '[id*="calendar"]', '[id*="Calendar"]', '[class*="calendar"]', '[class*="Calendar"]', '[class*="datepicker"]', '[class*="date-picker"]', '[class*="DatePicker"]', '[class*="datePopup"]', '[class*="popup"][class*="date"]'];
  return Array.from(document.querySelectorAll(r.join(", "))).find((e2) => e2 instanceof HTMLElement && C(e2) && !!e2.querySelector("a, button, td, select"));
}
function er(e) {
  return e.querySelector("caption")?.textContent?.trim() || e.querySelector("th.title")?.textContent?.trim() || "";
}
function en(e) {
  let t = e.trim().match(/^(January|February|March|April|May|June|July|August|September|October|November|December),\s*(\d{4})$/i);
  if (!t) return null;
  let r = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], n = r.indexOf(t[1].toLowerCase());
  return n < 0 ? null : { month: n, year: Number(t[2]) };
}
function eo(e) {
  let t = "string" == typeof e.className ? e.className.toLowerCase() : "", r = e.getAttribute("aria-disabled");
  return t.includes("disabled") || t.includes("othermonth") || t.includes("outside") || "true" === r || e.hasAttribute("disabled");
}
function ei(e, t) {
  let r = String(t);
  return Array.from(e.querySelectorAll("td.day, td.day.weekend")).find((e2) => {
    if (!(e2 instanceof HTMLElement) || !C(e2) || eo(e2)) return false;
    let t2 = e2.textContent?.trim() || "";
    return t2 === r && "TD" === e2.tagName;
  });
}
function ea(e, t) {
  return e.querySelector(`[id$="${t}"]`) || Array.from(e.querySelectorAll("a, th, td")).filter((e2) => e2 instanceof HTMLElement && C(e2)).find((e2) => {
    let r = e2.id || "", n = e2.textContent?.trim().toLowerCase() || "";
    return !!r.endsWith(t) || "done" === t && "done" === n;
  });
}
async function el(e, t) {
  if (!t) return false;
  for (let r = 0; r < 240; r++) {
    let r2 = en(er(e));
    if (!r2) break;
    if (r2.year === t.year() && r2.month === t.month()) return true;
    let n = r2.year !== t.year(), o2 = n && r2.year > t.year() ? "prev-year" : n && r2.year < t.year() ? "next-year" : r2.month > t.month() ? "prev-month" : "next-month", i2 = ea(e, o2);
    if (!i2) break;
    Q(i2), await executor.delay(180);
  }
  return false;
}
async function es(e, t) {
  let r = taleoAnswer.parseTaleoDateValue(t);
  if (!r) return false;
  let n = await el(e, r);
  if (!n) return false;
  let o2 = et(e.id) || e, i2 = ei(o2, r.date());
  if (!i2) return false;
  Q(i2), await executor.delay(250);
  let a2 = ea(o2, "done");
  return a2 && (Q(a2), await executor.delay(250)), true;
}
async function fillTaleoClassicDateField(e, t) {
  if (!e || !t) return false;
  let r = Z(e), n = ee(r), o2 = n?.id || e.id || null;
  Q(n), await executor.delay(150);
  let i2 = et(o2);
  if (i2) {
    let e2 = await es(i2, t);
    if (e2) return true;
  }
  let a2 = taleoAnswer.formatClassicTaleoDateValue(t);
  return !!a2 && (J(e, a2), e.setAttribute("value", a2), n && (n.textContent = a2), e.dispatchEvent(new Event("input", { bubbles: true, cancelable: true })), e.dispatchEvent(new Event("change", { bubbles: true, cancelable: true })), n?.dispatchEvent(new Event("input", { bubbles: true, cancelable: true })), n?.dispatchEvent(new Event("change", { bubbles: true, cancelable: true })), r?.dispatchEvent(new Event("input", { bubbles: true, cancelable: true })), r?.dispatchEvent(new Event("change", { bubbles: true, cancelable: true })), await executor.delay(100), document.body?.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), document.body?.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true })), document.body?.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true })), true);
}
async function fillTaleoTextField(e, t) {
  if (!e) return false;
  let r = W(e) ? taleoAnswer.formatTaleoDatepickerInputValue(String(t ?? "")) : String(t ?? "");
  if (!r) return false;
  let n = Object.getPrototypeOf(e), o2 = Object.getOwnPropertyDescriptor(n, "value")?.set;
  return e.focus(), o2 ? o2.call(e, r) : e.value = r, e instanceof HTMLInputElement && e.setAttribute("value", r), e.dispatchEvent(new Event("input", { bubbles: true, cancelable: true })), e.dispatchEvent(new Event("change", { bubbles: true, cancelable: true })), e.dispatchEvent(new FocusEvent("blur", { bubbles: true, cancelable: true })), e.blur(), W(e) && (await executor.delay(100), document.body?.focus?.(), document.body?.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), document.body?.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true })), document.body?.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }))), true;
}
async function fillTaleoSelectField(e, t) {
  if (!e) return false;
  let r = U(t), n = r.flatMap((e2) => H(e2)), o2 = new FocusEvent("focus", { bubbles: true, cancelable: true, view: window });
  e.dispatchEvent(o2), e.focus();
  let i2 = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "selectedIndex")?.set, a2 = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value")?.set;
  if (e.options && e.options.length > 0) for (let t2 = 0; t2 < e.options.length; t2++) {
    let r2 = e.options[t2], o3 = r2?.text?.trim() || "", l2 = r2?.value?.trim() || "";
    if ((o3 || l2) && n.some((e2) => answerMethods.isMatched(e2, o3) || answerMethods.isMatched(e2, l2))) {
      e.selectedIndex = t2, i2?.call(e, t2), a2?.call(e, r2.value), r2.selected = true, e.dispatchEvent(new Event("input", { bubbles: true, cancelable: true })), e.dispatchEvent(new Event("change", { bubbles: true, cancelable: true })), await executor.delay(100);
      let o4 = e.selectedOptions?.[0]?.textContent?.trim() || e.options[e.selectedIndex]?.text?.trim() || "", l3 = e.value?.trim() || "", s2 = n.some((e2) => answerMethods.isMatched(o4, e2) || answerMethods.isMatched(l3, e2));
      return e.blur(), s2;
    }
  }
  return e.blur(), false;
}
async function fillTaleoHardCodeSelectField(e, t) {
  let r = await fillTaleoSelectField(e, U(t));
  if (!r) return false;
  let n = document.querySelector("span.sugInput-sug-span");
  return n && (n.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), await executor.delay(200)), true;
}
async function fillTaleoCheckboxField(e, t) {
  let r = U(t), n = false;
  for (let t2 of e.$checkboxs) {
    let o2 = await fillTaleoRadioCheckField(t2, r, e.label);
    n = n || o2;
  }
  return n;
}
async function fillTaleoRadioCheckField(e, t, r) {
  let n = U(t), o2 = V(e);
  if (!o2) return false;
  let i2 = n.some((e2) => o2 === e2.toLowerCase().trim()) || Y(n[0], o2, r);
  return !!i2 && (await checkboxUtils.fillCheckbox(e, true), await executor.delay(200), true);
}
async function fillTaleoDropdownField(e, t, r, n) {
  if (!e) return false;
  let o2 = U(t);
  if (r.includes("Phone Number") && n && (o2 = [String(n).trim()]), 0 === o2.length) return false;
  let i2 = new FocusEvent("focus", { bubbles: true, cancelable: true, view: window });
  e.dispatchEvent(i2), e.focus?.(), e.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true })), await executor.delay(200);
  let a2 = document.createEvent("MouseEvents");
  a2.initEvent("mousedown", true, true), e.dispatchEvent(a2), await executor.delay(200);
  let l2 = e.id + "_list", s2 = document.querySelector(`#${l2}`), c2 = Array.from(s2?.children || []);
  for (let t2 of c2) {
    let n2 = t2.textContent?.trim() || "";
    if (r.includes("Phone Number")) {
      let e2 = n2.split("[");
      n2 = e2[e2.length - 1].trim();
    }
    if (o2.some((e2) => z(n2, e2))) return t2.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true })), await executor.delay(200), e.blur?.(), true;
  }
  return e.blur?.(), false;
}
async function clickSuggestInputSpan() {
  let e = Array.from(document.querySelectorAll("span.sugInput-sug-span"));
  for (let t of e) t.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
}
async function eb(e) {
  let t = Array.from(e.querySelectorAll("span.sugInput-sug-span")).filter((e2) => e2 instanceof HTMLSpanElement && C(e2));
  for (let e2 of t) e2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), e2.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true })), e2.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true })), await executor.delay(150);
}
async function uploadTaleoFiles({ disableUploadResume: e, progressTracker: t, resumeInfo: r }) {
  if (e) return console.info("[TaleoResumeUpload] skipped", { reason: "disabled" }), false;
  if (t.fieldStatus.filledFields.includes("Resume/CV")) return console.info("[TaleoResumeUpload] skipped", { reason: "already-tracked" }), true;
  let n = _();
  if (n || (n = await L()), !n || !q(n.input)) return console.warn("[TaleoResumeUpload] failed", { reason: "no-supported-resume-input" }), false;
  console.info("[TaleoResumeUpload] target-selected", { template: n.template, inputId: n.input.id || "(none)", inputName: n.input.name || "(none)" });
  try {
    let e2 = n.input;
    if (!e2.files || !D(e2)) return console.warn("[TaleoResumeUpload] failed", { reason: "resume-input-not-usable", template: n.template }), false;
    let o2 = await answerMethods.fetchPdfAsBlob(r), i2 = o2.files?.[0];
    if (!i2) return console.warn("[TaleoResumeUpload] failed", { reason: "resume-file-unavailable", template: n.template }), false;
    e2.focus();
    let a2 = O(e2, o2.files);
    if (!a2) return console.warn("[TaleoResumeUpload] failed", { reason: "file-assignment-failed", template: n.template }), false;
    e2.dispatchEvent(new Event("input", { bubbles: true, cancelable: false, composed: true })), e2.dispatchEvent(new Event("change", { bubbles: true, cancelable: false, composed: true })), e2.dispatchEvent(new Event("blur", { bubbles: true, cancelable: false }));
    let l2 = await $(n, i2.name);
    if (!l2) return console.warn("[TaleoResumeUpload] failed", { reason: "upload-not-ready", template: n.template }), false;
    let s2 = R(n);
    if (s2 && N(s2)) {
      eI(s2);
      let e3 = await B(n, i2.name);
      if (!e3) return console.warn("[TaleoResumeUpload] failed", { reason: "upload-not-committed", template: n.template }), false;
    }
    t.updateFieldRequiredStatus({ label: "Resume/CV", required: false }), t.updateFilledProgress("Resume/CV");
    let d2 = () => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", keyCode: 27, which: 27, bubbles: true, cancelable: true }));
    };
    return await executor.delay(200), d2(), await executor.delay(200), d2(), console.info("[TaleoResumeUpload] completed", { template: n.template }), true;
  } catch (e2) {
    return console.error("[TaleoResumeUpload] failed", { reason: "unexpected-error", errorName: e2 instanceof Error ? e2.name : "unknown", template: n.template }), false;
  }
}
function ev(e) {
  let t = { "BeginDate Year": 0, "BeginDate Month": 1, "StartDate Year": 0, "StartDate Month": 1, "Date From Year": 0, "Date From Month": 1, "EndDate Year": 2, "EndDate Month": 3, "Date To Year": 2, "Date To Month": 3, "Graduation Date Year": 4, "Graduation Date Month": 5 };
  return e in t ? t[e] : null;
}
function ew(e, t) {
  return 2 !== t ? e : [...e].map((e2, t2) => ({ field: e2, index: t2 })).sort((e2, t2) => {
    let r = ev(e2.field.key), n = ev(t2.field.key);
    return null === r && null === n || null === r || null === n ? e2.index - t2.index : r !== n ? r - n : e2.index - t2.index;
  }).map(({ field: e2 }) => e2);
}
function getTaleoFieldsForTemplate(e, t) {
  return e.filter((e2) => !Array.isArray(e2.templateIndexes) || 0 === e2.templateIndexes.length || e2.templateIndexes.includes(t));
}
function eE(e, t, r, n) {
  let o2 = t.Start || t["Start Date"] || "", i2 = t.End || t["End Date"] || "", a2 = "workExperience" === n && ex(t);
  if (("Date From Month" === e || "StartDate Month" === e || "BeginDate Month" === e) && o2) return [dayjsDefault.default(o2).format("MMMM")];
  if (("Date From Year" === e || "StartDate Year" === e || "BeginDate Year" === e) && o2) return [dayjsDefault.default(o2).format("YYYY")];
  if ("Date To Month" === e || "EndDate Month" === e || "Graduation Date Month" === e) return a2 && !i2 ? null : i2 ? [dayjsDefault.default(i2).format("MMMM")] : null;
  if ("Date To Year" === e || "EndDate Year" === e || "Graduation Date Year" === e) {
    if (a2 && !i2) return null;
    if (i2) return [dayjsDefault.default(i2).format("YYYY")];
  }
  return null;
}
function ex(e) {
  if (true === e.isCurrent) return true;
  let t = e["Current Job"];
  return Array.isArray(t) ? t.some((e2) => "true" === String(e2).trim().toLowerCase()) : "true" === String(t ?? "").trim().toLowerCase();
}
function eC(e) {
  return !!String(e.End ?? e["End Date"] ?? "").trim();
}
function eA(e) {
  return U(e).some((e2) => {
    let t = e2.trim().toLowerCase();
    return !!t && !["false", "no", "0", "off", "null", "undefined"].includes(t);
  });
}
function ek(e, t, r) {
  if ("EndDate" === r) return true;
  let n = [e, t || ""].map((e2) => String(e2).trim().toLowerCase());
  return n.some((e2) => ["end", "end date", "date to month", "date to year", "enddate month", "enddate year"].includes(e2));
}
function fillTaleoHardCodeItem(e, t, r, n, o2, a2) {
  let l2 = "workExperience" === o2 ? "employment" : "education", u2 = [], d2 = a2?.reporter.forRecord(a2.index, [{ type: "education" === l2 ? enums.FIELD_TYPE.EDUCATION : enums.FIELD_TYPE.EMPLOYMENT, label: "education" === l2 ? "Education" : "Employment", children: u2 }]), m2 = d2 ? answerMethods.createSectionResultReporter(l2, d2) : void 0, h2 = m2?.ensureRow(0, t);
  m2?.emit();
  let g2 = (e2, t2, r2, n2, o3, a3) => {
    u2.push({ type: t2, label: e2, $input: r2 });
    let l3 = (Array.isArray(n2) ? n2.join(", ") : String(n2 ?? "")).trim();
    return { delay: a3, func: async () => {
      try {
        let t3 = await o3();
        h2 && m2?.updateField(h2, e2, l3 || void 0, false !== t3 && l3 ? "filled" : "missed");
      } catch (t3) {
        throw h2 && m2?.updateField(h2, e2, l3 || void 0, t3 instanceof cancellation.SkippedError ? "skipped" : "missed"), t3;
      } finally {
        m2?.emit();
      }
    } };
  }, b2 = (e2, t2, r2) => {
    u2.push({ type: t2, label: e2, $input: r2 }), h2 && m2?.updateField(h2, e2, void 0, "missed"), m2?.emit();
  }, y2 = ew(getTaleoFieldsForTemplate(e, n), n).map(({ key: e2, alternateKey: i2, format: a3, isCheckbox: l3, type: u3, xpath: c2, delay: d3 = 2 }) => {
    let m3 = 1 === n ? G(e2) : null, h3 = "workExperience" === o2 && ex(t) && !eC(t) && ek(e2, i2, m3);
    if (h3) return null;
    if (m3) {
      let n2 = X(r, m3);
      if (n2) {
        if (e2.endsWith("Year")) return null;
        let r2 = K(m3, t);
        return r2 ? g2(m3, enums.FIELD_TYPE.DATE, n2, r2, () => fillTaleoClassicDateField(n2, r2), d3) : (b2(m3, enums.FIELD_TYPE.DATE, n2), null);
      }
    }
    let y3 = "string" == typeof c2 ? xpath.getFirstOrderedNode(c2, r) : null, v2 = Array.isArray(c2) && c2[n] ? xpath.getFirstOrderedNode(c2[n], r) : y3, w2 = y3 || v2;
    if (!w2) return null;
    let S2 = eE(e2, t, n, o2), E2 = S2 ?? t[e2] ?? t[i2 || ""];
    return (a3 && (E2 = a3(E2, t)), E2) ? l3 ? eA(E2) ? g2(e2, enums.FIELD_TYPE.CHECKBOX, w2, E2, async () => (await checkboxUtils.fillCheckbox(w2, true), w2.checked), d3) : (b2(e2, enums.FIELD_TYPE.CHECKBOX, w2), null) : u3 === enums.FIELD_TYPE.RADIOGROUP ? g2(e2, u3, w2, E2, () => fillTaleoRadioCheckField(w2, U(E2), e2), d3) : u3 === enums.FIELD_TYPE.SELECT ? g2(e2, u3, w2, E2, () => fillTaleoHardCodeSelectField(w2, E2), d3) : u3 === enums.FIELD_TYPE.DROPDOWN ? g2(e2, u3, w2, E2, () => fillTaleoDropdownField(w2, U(E2), e2), d3) : g2(e2, u3, w2, E2, () => fillTaleoTextField(w2, E2), d3) : (b2(e2, u3, w2), null);
  }).filter(Boolean);
  return a2?.reporter.forRecord(a2.index, [{ label: l2, children: u2 }]), y2;
}
function eF(e, t, r) {
  if (2 === r) {
    let n = "workExperience" === e.key ? "work" : "education", o2 = (e2) => !!e2.querySelector('input:not([type="hidden"]), textarea, select, a[aria-label="Save"], button[aria-label="Save"], a[aria-label="Edit"], button[aria-label="Edit"], a.save-edit-trigger, button.save-edit-trigger'), i2 = (e2) => Array.from(e2.querySelectorAll('input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled]), a[aria-label="Save"], button[aria-label="Save"], a[aria-label="Edit"], button[aria-label="Edit"], a.save-edit-trigger, button.save-edit-trigger')).some((e3) => e3 instanceof HTMLElement && C(e3)), a2 = "workExperience" === e.key ? ".//div[contains(@class, 'well') and .//input[contains(@name, 'WORK_HISTORY_')] and .//a[contains(@class, 'save-edit-trigger') and @aria-label='Save']]" : ".//div[contains(@class, 'well') and (.//input[contains(@name, 'EDUCATION_')] or .//input[contains(@name, 'education_')] or .//select[contains(@name, 'education_')]) and .//a[contains(@class, 'save-edit-trigger') and @aria-label='Save']]", l2 = xpath.getOrderedNodes(`${e.snapshot[r]} | ${a2} | .//div[@data-type='${n}']`, t).filter((e2) => e2 instanceof HTMLElement && o2(e2)), s2 = [], u2 = /* @__PURE__ */ new Set();
    for (let e2 of l2) {
      let t2 = e2.closest(`div[data-type="${n}"]`) || e2;
      u2.has(t2) || (u2.add(t2), s2.push(t2));
    }
    return s2.filter((e2) => !!C(e2) || i2(e2));
  }
  return xpath.getOrderedNodes(e.snapshot[r], t).filter((e2) => !!e2.querySelector("input, textarea, select") && (!!C(e2) || Array.from(e2.querySelectorAll('input:not([type="hidden"]), textarea, select, a[aria-label="Save"]')).some((e3) => e3 instanceof HTMLElement && C(e3))));
}
function eI(e) {
  e && (e.focus?.(), e.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true })), e.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true })), e.click?.());
}
function ej(e, t, r) {
  let n = xpath.getFirstVisibleNode(e, t), o2 = xpath.getFirstOrderedNode(e, t), i2 = 2 === r ? o2 : n || o2;
  return i2;
}
function eD(e) {
  return Array.from(e.querySelectorAll('input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled])')).filter((e2) => e2 instanceof HTMLElement && C(e2));
}
function eP(e) {
  return Array.from(e.querySelectorAll('a[aria-label="Save"]:not([disabled="disabled"]), button[aria-label="Save"]:not([disabled])')).find((e2) => e2 instanceof HTMLElement && C(e2));
}
function e_(e, t) {
  return t >= 1 && ("education" === e.key || "workExperience" === e.key);
}
function eL(e, t) {
  return !!(2 !== t || e.querySelector('input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled])')) || !!e.querySelector('a[aria-label="Save"]:not([disabled="disabled"])');
}
function eR(e) {
  let t = ['.//a[contains(@class, "save-edit-trigger") and @aria-label="Edit"]', './/button[contains(@class, "save-edit-trigger") and @aria-label="Edit"]', './/a[contains(@class, "save-edit-trigger") and not(@aria-label="Save")]', './/button[contains(@class, "save-edit-trigger") and not(@aria-label="Save")]', './/following-sibling::div[contains(@class, "oracletaleocwsv2-btn-grouped")]//a[contains(@class, "save-edit-trigger") and @aria-label="Edit"]', './/following-sibling::div[contains(@class, "oracletaleocwsv2-btn-grouped")]//button[contains(@class, "save-edit-trigger") and @aria-label="Edit"]', './/*[contains(@id, "cmdEdit")]', './/*[contains(@id, "EditEducation")]', './/*[contains(@id, "EditWork")]'];
  for (let r of t) {
    let t2 = xpath.getFirstVisibleNode(r, e);
    if (t2) return t2;
  }
  return Array.from(e.querySelectorAll('a, button, [role="button"], span')).find((e2) => {
    if (!(e2 instanceof HTMLElement) || !C(e2) || "disabled" === e2.getAttribute("disabled") || e2.hasAttribute("disabled")) return false;
    let t2 = (e2.getAttribute("aria-label") || "").toLowerCase(), r = (e2.textContent || "").trim().toLowerCase(), n = (e2.id || "").toLowerCase(), o2 = "string" == typeof e2.className ? e2.className.toLowerCase() : "";
    return t2.includes("edit") || /\bedit\b/.test(r) || o2.includes("edit-trigger") || o2.includes("save-edit-trigger") || n.includes("edit");
  });
}
function eO(e, t, r) {
  if (!e_(e, r)) return !!(2 !== r || t.querySelector('input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled])')) || !!t.querySelector('a[aria-label="Save"]:not([disabled="disabled"])');
  if (eD(t).length > 0) return true;
  let n = eP(t);
  return 2 !== r && C(t) || !!n;
}
async function eM(e, t, r, n, o2) {
  let i2 = eR(o2);
  if (!i2) return null;
  eI(i2);
  for (let o3 = 0; o3 < 10; o3++) {
    await executor.delay(300);
    let o4 = eF(e, t, r), i3 = o4[n];
    if (i3 && eO(e, i3, r)) return i3;
  }
  return null;
}
async function eN(e, t, r, n) {
  let o2 = ej(e.addButton[r], t, r);
  if (!o2 || "disabled" === o2.getAttribute("disabled")) return null;
  eI(o2);
  for (let o3 = 0; o3 < 10; o3++) {
    await executor.delay(300);
    let o4 = eF(e, t, r), i2 = o4[n];
    if (i2 && eO(e, i2, r)) return i2;
  }
  return null;
}
async function e$(e, t, r, n, o2 = {}) {
  let { allowAdd: i2 = true } = o2, a2 = eF(e, t, r), l2 = a2[n];
  if (l2 && eO(e, l2, r)) return l2;
  if (l2 && e_(e, r)) {
    let o3 = await eM(e, t, r, n, l2);
    if (o3) return o3;
    let i3 = await eN(e, t, r, n);
    if (i3) return i3;
  }
  if (!i2) return l2 && eL(l2, r) ? l2 : null;
  let s2 = ej(e.addButton[r], t, r);
  if (!s2 || "disabled" === s2.getAttribute("disabled")) return l2 && eO(e, l2, r) ? l2 : null;
  eI(s2);
  for (let o3 = 0; o3 < 10; o3++) if (await executor.delay(300), (l2 = (a2 = eF(e, t, r))[n]) && eO(e, l2, r)) return l2;
  return l2 && eO(e, l2, r) ? l2 : null;
}
async function eB(e, t, r, n) {
  if (!e.saveButton?.length) return;
  await eb(t);
  let o2 = ej(e.saveButton[n], t, n), i2 = o2 || ej(e.saveButton[n], r, n), a2 = i2;
  a2 && "disabled" !== a2.getAttribute("disabled") && (eI(a2), await executor.delay(1e3));
}
async function eq(e, t, r, n) {
  let o2 = eF(e, t, r);
  for (; o2.length > n; ) {
    let i2 = o2[o2.length - 1], a2 = i2.querySelector('a[id*="cmdRemove"], a[id*="Remove"][id*="Work"], a[id*="Remove"][id*="Education"], a:has(span[id*="lblRemove"]), a.command-link-visited:has(span[id*="Remove"])');
    if (!a2) {
      console.warn("[Taleo] No remove button found in excess section", { section: e.key, typeIndex: r, currentCount: o2.length, targetCount: n });
      break;
    }
    eI(a2), await executor.delay(800), o2 = eF(e, t, r);
  }
}
async function eU(e, t, r) {
  let n = ej(e.addButton[r], t, r);
  return !!n && "disabled" !== n.getAttribute("disabled") && (eI(n), await executor.delay(1e3), true);
}
async function eH(e, t, r, n) {
  let o2 = eF(e, t, r);
  for (; o2.length < n; ) {
    let n2 = o2.length, i2 = await eU(e, t, r);
    if (!i2) break;
    for (let i3 = 0; i3 < 10 && (await executor.delay(300), !((o2 = eF(e, t, r)).length > n2)); i3++) ;
  }
  return eF(e, t, r);
}
function eY(e, t, r) {
  return 2 === t || (1 === t && r > 0 ? "workExperience" === e.key || "education" === e.key : r > 1);
}
async function fillTaleoHardCodeSection(e, t, r, n = {}) {
  let i2 = xpath.getFirstOrderedNode(e.container[r]);
  if (!i2 || 0 === t.length) return [];
  let a2 = sectionResults.createSequentialSectionResultReporter("education" === e.key ? "education" : "employment", n);
  return [{ func: async () => {
    let n2 = eF(e, i2, r), o2 = n2.length, l2 = eY(e, r, o2);
    if (l2) {
      n2 = await eH(e, i2, r, t.length);
      for (let n3 = 0; n3 < t.length; n3++) {
        let o3 = t[n3], l3 = await e$(e, i2, r, n3, { allowAdd: false });
        if (!l3) continue;
        let s2 = fillTaleoHardCodeItem(e.fields, o3, l3, r, e.key, { index: n3, reporter: a2 });
        s2.length > 0 && await executor.executeSequentially(...s2), await eB(e, l3, i2, r), e.saveButton?.[r] && a2.clearRecordFocus(n3);
      }
      await eq(e, i2, r, t.length);
    } else {
      await eq(e, i2, r, t.length), n2 = eF(e, i2, r);
      for (let n3 = 0; n3 < t.length; n3++) {
        let o3 = t[n3], l3 = await e$(e, i2, r, n3);
        if (!l3) continue;
        let s2 = fillTaleoHardCodeItem(e.fields, o3, l3, r, e.key, { index: n3, reporter: a2 });
        s2.length > 0 && await executor.executeSequentially(...s2), await eB(e, l3, i2, r), e.saveButton?.[r] && a2.clearRecordFocus(n3);
        let c2 = n3 < t.length - 1;
        if (!c2) continue;
        let d2 = ej(e.addButton[r], i2, r);
        d2 && "disabled" !== d2.getAttribute("disabled") && (eI(d2), await executor.delay(1e3));
      }
    }
  }, delay: 0 }];
}

export {
  TALEO_HARDCODE_CONFIG,
  clickSuggestInputSpan,
  fillTaleoCheckboxField,
  fillTaleoClassicDateField,
  fillTaleoDropdownField,
  fillTaleoHardCodeItem,
  fillTaleoHardCodeSection,
  fillTaleoHardCodeSelectField,
  fillTaleoRadioCheckField,
  fillTaleoSelectField,
  fillTaleoTextField,
  getTaleoFieldsForTemplate,
  uploadTaleoFiles,
}
