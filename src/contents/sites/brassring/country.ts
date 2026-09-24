// @ts-nocheck
/**
 * BrassRing — country prefill before dependent state/province fields settle.
 */

export async function runBrassringCountryPrefill(hooks) {
  let country = null
  try {
    const autofillInfo = await hooks.fetchAutofillInfo()
    const rawCountry = autofillInfo?.location?.country
    if (typeof rawCountry !== "string" || !rawCountry.trim()) {
      return { country: null, committed: false, dependentSettled: false }
    }
    country = rawCountry.trim()
    const filled = await hooks.fillCountry(country)
    if (!filled) {
      return { country, committed: false, dependentSettled: false }
    }
    const dependentSettled = await hooks
      .waitForDependentFields()
      .catch(() => false)
    return { country, committed: true, dependentSettled }
  } catch {
    return { country, committed: false, dependentSettled: false }
  }
}
