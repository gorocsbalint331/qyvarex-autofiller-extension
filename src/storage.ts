// @ts-nocheck
/**
 * Prefixed localStorage / sessionStorage helpers for the helper runtime.
 */

export const formatStorageKey = (key) => `JR_${key}`

export const localStorageUtil = {
  set(key, value) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(`JR_${key}`, value)
      }
    } catch (error) {
      console.error("** [JR] error of localStorageUtil **", error)
    }
  },
  get: (key) =>
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem(`JR_${key}`)
      : null,
  remove(key) {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(`JR_${key}`)
    }
  },
}

export const sessionStorageUtil = {
  set(key, value) {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        sessionStorage.setItem(`JR_${key}`, value)
      }
    } catch (error) {
      console.error("** [JR] error of sessionStorageUtil **", error)
    }
  },
  get: (key) =>
    typeof window !== "undefined" && window.sessionStorage
      ? sessionStorage.getItem(`JR_${key}`)
      : null,
  clear() {
    let preservedKeys = ["sentryReplaySession"]
    if (typeof window !== "undefined" && window.sessionStorage) {
      let keys = Object.keys(sessionStorage)
      for (let index = 0; index < keys.length; index++) {
        let key = keys[index]
        if (key && !preservedKeys.includes(key)) {
          window.sessionStorage.removeItem(key)
        }
      }
    }
  },
}
