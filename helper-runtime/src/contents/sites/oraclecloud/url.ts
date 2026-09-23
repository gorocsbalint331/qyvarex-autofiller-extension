// @ts-nocheck
/**
 * Oracle Cloud — apply/job URL helpers.
 */

let o = "/apply";
function isOracleApplyPath(e) {
  return (
    /(?:^|\/)job\/[^/]+\/apply(?:\/|$)/.test(e) ||
    /(?:^|\/)jobs\/preview\/[^/]+\/apply(?:\/|$)/.test(e)
  );
}
function isOracleJobDetailPath(e) {
  return (
    /(?:^|\/)job\/[^/]+\/?$/.test(e) ||
    /(?:^|\/)jobs\/preview\/[^/]+\/?$/.test(e)
  );
}
function normalizeOracleApplyTokenUrl(e) {
  try {
    let t = new URL(e),
      r = t.pathname.indexOf(o);
    if (-1 === r) return ((t.search = ""), (t.hash = ""), t.toString());
    return (
      (t.pathname = t.pathname.slice(0, r) + o),
      (t.search = ""),
      (t.hash = ""),
      t.toString()
    );
  } catch {
    return e.split("?")[0];
  }
}

export {
  isOracleApplyPath,
  isOracleJobDetailPath,
  normalizeOracleApplyTokenUrl,
};
