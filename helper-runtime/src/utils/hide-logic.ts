// @ts-nocheck
/**
 * Chrome storage helpers for hiding the extension on domains / all sites.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

import * as storageEnums from "../enums/storage.js"

let getHideState = async () => {
  let stored = await chrome.storage.local.get([
    storageEnums.STORAGE_KEY.HIDDEN_ALL_WEBSITES,
    storageEnums.STORAGE_KEY.HIDDEN_DOMAINS,
  ])
  return {
    hiddenAll: stored[storageEnums.STORAGE_KEY.HIDDEN_ALL_WEBSITES] || false,
    hiddenDomains: stored[storageEnums.STORAGE_KEY.HIDDEN_DOMAINS] || [],
  }
}

let shouldHideOnDomain = async (domain) => {
  let { hiddenAll, hiddenDomains } = await getHideState()
  return hiddenAll || hiddenDomains.includes(domain)
}

let hideOnDomain = async (domain) => {
  let { hiddenDomains } = await getHideState()
  if (!hiddenDomains.includes(domain)) {
    await chrome.storage.local.set({
      [storageEnums.STORAGE_KEY.HIDDEN_DOMAINS]: [...hiddenDomains, domain],
    })
  }
}

let hideOnAllWebsites = async () => {
  await chrome.storage.local.set({
    [storageEnums.STORAGE_KEY.HIDDEN_ALL_WEBSITES]: true,
  })
}

let restoreFromExtensionIcon = async (domain) => {
  let { hiddenAll, hiddenDomains } = await getHideState()
  let updates = {}
  if (hiddenAll) {
    updates[storageEnums.STORAGE_KEY.HIDDEN_ALL_WEBSITES] = false
  }
  if (hiddenDomains.includes(domain)) {
    updates[storageEnums.STORAGE_KEY.HIDDEN_DOMAINS] = hiddenDomains.filter(
      (item) => item !== domain,
    )
  }
  if (Object.keys(updates).length > 0) {
    await chrome.storage.local.set(updates)
  }
}

export {
  hideOnAllWebsites,
  hideOnDomain,
  restoreFromExtensionIcon,
  shouldHideOnDomain,
}
