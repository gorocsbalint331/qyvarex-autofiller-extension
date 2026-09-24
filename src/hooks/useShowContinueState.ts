// @ts-nocheck
/**
 * Continue-button visibility helpers after autofill.
 */

export function shouldShowNavigationAfterAutofill(
  hasAutoFillResult,
  hasClickedAutoFill,
  continueVisible,
) {
  return continueVisible && (!!hasAutoFillResult || hasClickedAutoFill)
}

export function shouldRunContinueVisibilityMonitor({
  isSupported,
  isFilling,
}) {
  return isSupported && !isFilling
}

export const shouldShowWalmartContinueButton =
  shouldShowNavigationAfterAutofill
