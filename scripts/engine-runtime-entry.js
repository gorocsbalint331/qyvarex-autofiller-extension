/**
 * Headless engine runtime entry.
 * Creates the site filler from the engine factory and runs fillForm().
 *
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents -> shim  =>  (shim)
 *   ~contents/crawler/factory -> 7RE4t  =>  _tilde_contents/crawler/factory.js
 *   ~store/autofillInfo -> 79VNP  =>  _tilde_store/autofillInfo.js
 *   ~store/resume -> shim  =>  (shim)
 */
var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
n.defineInteropFlag(r)
n.export(r, "bootstrapJobrightHelperRuntime", () => bootstrapJobrightHelperRuntime)
n.export(r, "openJobrightHelperFromExtensionIcon", () => bootstrapJobrightHelperRuntime)

var messaging = e("@plasmohq/messaging")
var contents = e("~contents")
var factoryMod = e("~contents/crawler/factory")
var autofillInfo = e("~store/autofillInfo")
var resumeStore = e("~store/resume")

var HOST_ID = "qyvarex-autofill-status"
var bootPromise = null

function renderStatus(opts) {
  var existing = document.getElementById(HOST_ID)
  if (existing) existing.remove()
  var el = document.createElement("div")
  el.id = HOST_ID
  el.setAttribute("role", "status")
  el.style.cssText =
    "position:fixed;z-index:2147483647;right:16px;bottom:16px;max-width:360px;" +
    "padding:12px 14px;border-radius:10px;background:#111;color:#f5f5f5;" +
    "font:13px/1.4 system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.35);"
  var title = document.createElement("div")
  title.textContent = opts.message || "Qyvarex"
  title.style.fontWeight = "600"
  el.appendChild(title)
  if (opts.detail) {
    var detail = document.createElement("div")
    detail.textContent = opts.detail
    detail.style.opacity = "0.85"
    detail.style.marginTop = "4px"
    el.appendChild(detail)
  }
  document.documentElement.appendChild(el)
  if (opts.autoHideMs) {
    setTimeout(function () {
      el.remove()
    }, opts.autoHideMs)
  }
}

async function resolveResumeInfo() {
  var info = null
  try {
    var res = await messaging.sendToBackground({
      name: "getAutofillInfo",
      body: { forceRefresh: true }
    })
    info = res?.data || res?.autofillInfo || null
  } catch (err) {
    console.warn("[qyvarex-engine] getAutofillInfo failed", err)
  }

  var resumeId =
    info?.defaultResumeId ||
    info?.resumes?.[0]?.id ||
    info?.personalInfo?.resumeId ||
    null

  var resumeInfo = {
    id: resumeId,
    tailorId: null,
    useOriginalResume: true,
    resumeName: info?.resumes?.find?.(function (x) {
      return x.id === resumeId
    })?.fileName
  }

  resumeStore.useResumeStore.getState().setResumeInfo?.(resumeInfo)
  return { info: info, resumeInfo: resumeInfo }
}

async function bootstrapJobrightHelperRuntime() {
  if (bootPromise) return bootPromise
  bootPromise = (async function () {
    renderStatus({ message: "Qyvarex engine", detail: "Detecting ATS…" })

    var Factory = factoryMod.default || factoryMod
    var instance = null
    try {
      instance = Factory.create()
    } catch (err) {
      console.error("[qyvarex-engine] factory.create failed", err)
    }

    if (!instance) {
      renderStatus({
        message: "No ATS adapter for this page",
        detail: location.hostname,
        autoHideMs: 8000
      })
      bootPromise = null
      return
    }

    contents.setAutofillInstance(instance)

    var resolved = await resolveResumeInfo()
    instance.resumeInfo = resolved.resumeInfo
    instance.disableUploadResume = false
    instance.coverLetter = null
    instance.currentJobId = contents.jobId

    try {
      await autofillInfo.useAutofillInfoStore.getState().fetchAutofillInfo(true)
    } catch (err) {
      console.warn("[qyvarex-engine] fetchAutofillInfo", err)
    }

    if (!resolved.info) {
      renderStatus({
        message: "Connect a team profile first",
        detail: "Open extension Options → sign in → select profile",
        autoHideMs: 10000
      })
      bootPromise = null
      return
    }

    var siteName =
      (typeof instance.getSiteName === "function" && instance.getSiteName()) ||
      "ats"
    renderStatus({
      message: "Filling with engine",
      detail: siteName + " · " + location.hostname
    })

    try {
      var result = await instance.fillForm()
      console.info("[qyvarex-engine] fillForm result", result)
      renderStatus({
        message: "Engine fill finished",
        detail:
          result == null || result === true
            ? siteName + " — check the form"
            : String(result),
        autoHideMs: 10000
      })
    } catch (err) {
      console.error("[qyvarex-engine] fillForm error", err)
      renderStatus({
        message: "Engine fill failed",
        detail: err instanceof Error ? err.message : String(err),
        autoHideMs: 12000
      })
    } finally {
      bootPromise = null
    }
  })()
  return bootPromise
}

// Auto-run on inject (Activate / content-script path)
void bootstrapJobrightHelperRuntime()
