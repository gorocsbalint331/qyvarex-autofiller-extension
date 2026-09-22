/**
 * Parcel module id: dUqCQ
 * Resolved path: src/api/externalJob.js
 * Dependencies:
 *   ./env-resolver -> 45ABC  =>  src/api/env-resolver.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "pollingExternalJob", () => i), n.export(r,
  "fetchImportExternalJobStatus", () => a), n.export(r, "parsePageMarkdown", () => l), n.export(r,
  "importExternalJob", () => s);
var o = e("./env-resolver");
let i = ({
    api: e,
    checkSuccess: t,
    checkFailed: r,
    onSuccess: n,
    onError: o
  }) => {
    let i = setInterval(async () => {
        let l = await e();
        l && (t(l) && (n(), clearInterval(i), clearTimeout(a)), r(l) && (o(), clearInterval(i),
          clearTimeout(a)))
      }, 5e3),
      a = setTimeout(() => {
        i && clearInterval(i), clearTimeout(a), o()
      }, 3e4)
  },
  a = async e => {
    let t = await fetch(`${o.API_DOMAIN}/swan/import/status?jobId=${e}`, {
      method: "GET"
    });
    if (!t.ok) return;
    let r = await t.json();
    return r?.result
  }, l = async e => {
    let t = await fetch(`${o.API_DOMAIN}/swan/autofill/external-job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(e)
    });
    if (!t.ok) throw Error(`Failed to parse page: ${t.statusText}`);
    let r = await t.json();
    return r?.result ?? null
  }, s = async e => {
    let t = await fetch(`${o.API_DOMAIN}/swan/import/job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(e)
    });
    if (!t.ok) throw Error(`Failed to import job: ${t.statusText}`);
    let r = await t.json(),
      n = r?.result;
    return n
  }

