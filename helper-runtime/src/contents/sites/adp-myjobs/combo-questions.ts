// @ts-nocheck
/**
 * ADP MyJobs — detect pages where combo / prescreen dynamic fields should rescan.
 */

export function shouldRunAdpMyJobsComboQuestionAutofill({
  doc = document,
  href = window.location.href,
} = {}) {
  if (doc.querySelector("form#prescreeningForm, #prescreeningForm")) {
    console.debug("[ADP MyJobs][Combo] dynamic-field rescan eligibility", {
      eligible: true,
      reason: "prescreening-form",
    })
    return true
  }

  try {
    const workflowComponent = new URL(href).searchParams
      .get("workflowComponent")
      ?.trim()
      .toLowerCase()
    const eligible = !!(
      workflowComponent?.startsWith("prescreen") ||
      workflowComponent === "source"
    )
    console.debug("[ADP MyJobs][Combo] dynamic-field rescan eligibility", {
      workflowComponent,
      eligible,
    })
    return eligible
  } catch {
    console.debug("[ADP MyJobs][Combo] dynamic-field rescan eligibility", {
      eligible: false,
      reason: "invalid-url",
    })
    return false
  }
}
