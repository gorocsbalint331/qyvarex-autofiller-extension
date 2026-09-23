// @ts-nocheck
/**
 * True when running in a browser document environment.
 */

const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
)

export default isBrowser
