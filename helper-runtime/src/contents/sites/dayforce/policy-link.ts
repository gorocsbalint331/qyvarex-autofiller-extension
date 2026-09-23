// @ts-nocheck
/**
 * Dayforce — registration policy link opener.
 */

export async function openDayforcePolicyLink(anchor, openTab) {
  if (
    !anchor.isConnected ||
    !["https://www.dayforce.com/privacy", "https://www.dayforce.com/terms"].includes(
      anchor.href,
    )
  ) {
    return false
  }

  const preventDefault = (event) => event.preventDefault()
  try {
    const result = await openTab(anchor.href)
    if (!result?.ok || !anchor.isConnected) return false
    anchor.addEventListener("click", preventDefault, { capture: true })
    anchor.click()
    return true
  } catch {
    return false
  } finally {
    anchor.removeEventListener("click", preventDefault, { capture: true })
  }
}
