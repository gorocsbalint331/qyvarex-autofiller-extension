let o = (e) => `JR_${e}`, i = { set(e, t) {
  try {
    "undefined" != typeof window && window.localStorage && localStorage.setItem(`JR_${e}`, t);
  } catch (e2) {
    console.error("** [JR] error of localStorageUtil **", e2);
  }
}, get: (e) => "undefined" != typeof window && window.localStorage ? localStorage.getItem(`JR_${e}`) : null, remove(e) {
  "undefined" != typeof window && window.localStorage && localStorage.removeItem(`JR_${e}`);
} }, a = { set(e, t) {
  try {
    "undefined" != typeof window && window.sessionStorage && sessionStorage.setItem(`JR_${e}`, t);
  } catch (e2) {
    console.error("** [JR] error of sessionStorageUtil **", e2);
  }
}, get: (e) => "undefined" != typeof window && window.sessionStorage ? sessionStorage.getItem(`JR_${e}`) : null, clear() {
  let e = ["sentryReplaySession"];
  if ("undefined" != typeof window && window.sessionStorage) {
    let t = Object.keys(sessionStorage);
    for (let r = 0; r < t.length; r++) {
      let n = t[r];
      n && !e.includes(n) && window.sessionStorage.removeItem(n);
    }
  }
} };
export {
  o as formatStorageKey,
  i as localStorageUtil,
  a as sessionStorageUtil
};
