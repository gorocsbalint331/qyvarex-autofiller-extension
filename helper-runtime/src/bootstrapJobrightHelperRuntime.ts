// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/bootstrapJobrightHelperRuntime.js).
 * Mounts the helper shadow host, styles, and React UI after content-script activation.
 */
import { jsx, jsxs, Fragment } from "react/jsx-runtime"
import { StyleProvider } from "@ant-design/cssinjs"
import {
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react"
import { createRoot } from "react-dom/client"
import * as globalLessModule from "url:../global.less"
import * as interCssModule from "url:../inter.css"
import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"
import { agentDomains } from "./api/env-resolver.js"
import * as DraggableIconModule from "./components/DraggableIcon.js"
import * as LinkedinBannerProviderModule from "./components/LinkedinBannerProvider.js"
import * as FeedbackPopupModule from "./components/Popups/FeedbackPopup.js"
import * as StarRatingModalModule from "./components/StarRatingModal.js"
import { TextareaGenerateButtonLayer } from "./components/TextareaGenerateButton.js"
import * as TraceProviderModule from "./components/TraceProvider.js"
import {
  HOST_ID,
  setCurrentJobId,
  setAutofillInstance,
} from "./contents.js"
import * as CrawlerFactoryModule from "./contents/crawler/factory.js"
import { ensureAutofillInstance } from "./contents/shared/autofill-instance-lifecycle.js"
import {
  keepJobIdInUrl,
  attachClickJrInjector,
} from "./contents/shared/click-jr-injector.js"
import { resolveCssAssetUrls } from "./contents/shared/css-assets.js"
import { shouldResolveGoHireDroppedJobIdUrl } from "./contents/shared/early-url-normalization.js"
import { applyHelperHostStackingStyle } from "./contents/shared/helper-host-stacking.js"
import { registerAutofillAnswerPairAnswerProvider } from "./contents/sites/autofill-answer-pair-tracking.ts"
import {
  registerIframeEventHandle,
  redirctAgentIframePages,
} from "./core/iframeEventHandle.ts"
import {
  checkSupportIframeSrc,
  checkSupportDomain,
  isDomainMatch,
  checkSupportStatus,
  observeSupportedAutofillIframe,
  shouldActivateDynamicIframeSupport,
} from "./core/utils.ts"
import { IFRAME_EVENTS } from "./enums.js"
import * as useOpenNewTabModule from "./hooks/useOpenNewTab.ts"
import * as useSubscribeTabUrlModule from "./hooks/useSubscribeTabUrl.ts"
import { useTrackAutofillStuck } from "./hooks/useTrackAutofillStuck.ts"
import { useFeedbackStore } from "./store/feedback.ts"
import { useHideStore } from "./store/hide.ts"
import { useProfileStore } from "./store/profile.ts"
import * as useSettingStoreModule from "./store/setting.ts"
import {
  shouldHideOnDomain,
  restoreFromExtensionIcon,
} from "./utils/hide-logic.ts"
import {
  JOB_ID_QUERY_KEY,
  extractTrustedJobIdFromNestedUrlParams,
  extractTrustedJobIdFromReferrer,
} from "./utils/job-id.ts"
import { resumePendingStarRating } from "./utils/starRating.ts"
import { cleanObject } from "./utils/string.ts"
import { trackEvent } from "./utils/trace.ts"

function interopDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod }
}

const globalLessUrl = interopDefault(globalLessModule)
const interCssUrl = interopDefault(interCssModule)
const DraggableIcon = interopDefault(DraggableIconModule)
const LinkedinBannerProvider = interopDefault(LinkedinBannerProviderModule)
const FeedbackPopup = interopDefault(FeedbackPopupModule)
const StarRatingModal = interopDefault(StarRatingModalModule)
const TraceProvider = interopDefault(TraceProviderModule)
const CrawlerFactory = interopDefault(CrawlerFactoryModule)
const useOpenNewTab = interopDefault(useOpenNewTabModule)
const useSubscribeTabUrl = interopDefault(useSubscribeTabUrlModule)
const useSettingStore = interopDefault(useSettingStoreModule)

const HELPER_ROOT_ID = "jobright-helper-root"
const DOCUMENT_FONT_STYLE_ID = "jobright-helper-document-font-style"
const SHADOW_FONT_STYLE_ID = "jobright-helper-font-style"
const HELPER_STYLE_ID = "jobright-helper-style"
const GET_AUTOFILL_INSTANCE_KEY = "__jobrightGetAutofillInstance"
const TURBOLINKS_REMOUNT_ACTIVE_KEY =
  "__jobrightTurbolinksHelperRemountActive"

let currentJobId = new URLSearchParams(window.location.search).get(
  JOB_ID_QUERY_KEY,
)
let cachedHelperStyleText = ""
let helperHostElement = null
let helperStyleAssetsPromise = null

function syncHelperStyleText(styleText) {
  let shadowRoot = document.getElementById(HOST_ID)?.shadowRoot
  if (!shadowRoot) return false
  let styleElement = shadowRoot.getElementById("jobright-helper-style")
  return (
    !!styleElement &&
    (styleElement.textContent === styleText ||
      ((styleElement.textContent = styleText), true))
  )
}

function repairUrlWithRecoveredJobId(recoveredJobId) {
  if (!recoveredJobId) return false
  try {
    let pageUrl = new URL(window.location.href)
    pageUrl.searchParams.set(JOB_ID_QUERY_KEY, recoveredJobId)
    window.history.replaceState(
      window.history.state,
      "",
      pageUrl.toString(),
    )
    currentJobId = recoveredJobId
    setCurrentJobId(recoveredJobId)
    keepJobIdInUrl(recoveredJobId, {
      originalHost: window.location.hostname,
    })
    return true
  } catch (error) {
    console.warn(
      "[jobright] failed to repair URL with referrer-recovered jr_id:",
      error,
    )
  }
  return false
}

async function resolveCurrentJobId() {
  if (currentJobId) {
    setCurrentJobId(currentJobId)
    return
  }
  let recoveredJobId =
    extractTrustedJobIdFromNestedUrlParams(
      window.location.href,
      window.location.hostname,
      window.location.pathname,
    ) ||
    extractTrustedJobIdFromReferrer(
      document.referrer,
      window.location.hostname,
      window.location.pathname,
    )
  if (!repairUrlWithRecoveredJobId(recoveredJobId) && window.top === window.self) {
    if (shouldResolveGoHireDroppedJobIdUrl(window.location.href)) {
      try {
        let response = await sendToBackground({
          name: "resolveJobIdByUrl",
          body: { pageUrl: window.location.href },
        })
        let jobIdFromUrl =
          "string" == typeof response?.jobId ? response.jobId.trim() : ""
        if (repairUrlWithRecoveredJobId(jobIdFromUrl)) return
      } catch (error) {
        console.warn(
          "[jobright] failed to recover GoHire jr_id by URL:",
          error,
        )
      }
    }
    try {
      let response = await sendToBackground({
        name: "getTabJobId",
        body: { currentUrl: window.location.href },
      })
      let jobIdFromTab =
        "string" == typeof response?.jobId ? response.jobId.trim() : ""
      repairUrlWithRecoveredJobId(jobIdFromTab)
    } catch (error) {
      console.warn("[jobright] failed to recover tab-bound jr_id:", error)
    }
  }
}

function bindJobIdToTab() {
  if (currentJobId && window.top === window.self) {
    sendToBackground({
      name: "setTabJobId",
      body: { jobId: currentJobId, pageUrl: window.location.href },
    }).catch((error) => {
      console.warn("[jobright] failed to bind jr_id to tab:", error)
    })
  }
}

function maybeAttachClickJrInjector() {
  if (currentJobId) attachClickJrInjector()
}

let autofillInstance = null

function getOrCreateAutofillInstance() {
  let shouldCreate =
    (checkSupportIframeSrc(window.location.href) &&
      window.top !== window.self) ||
    (window.top === window.self && checkSupportDomain())
  let alreadyHadInstance = !!autofillInstance
  autofillInstance = ensureAutofillInstance(
    autofillInstance,
    shouldCreate,
    () => CrawlerFactory.default.create(),
  )
  if (!alreadyHadInstance && autofillInstance) {
    setAutofillInstance(autofillInstance)
    console.debug(
      `[AutofillInstance] ${JSON.stringify({
        reason: "created",
        hostname: window.location.hostname,
        topFrame: window.top === window.self,
      })}`,
    )
  }
  return autofillInstance
}

async function ensureAutofillInstanceCreated() {
  getOrCreateAutofillInstance()
}

function exposeAutofillInstanceGetter() {
  globalThis[GET_AUTOFILL_INSTANCE_KEY] = getOrCreateAutofillInstance
}

function notifyParentIframeLoaded() {
  if (
    checkSupportIframeSrc(window.location.href) &&
    window.top !== window.self
  ) {
    window.top.postMessage(
      cleanObject({
        type: IFRAME_EVENTS.IFRAME_LOADED,
        url: window.location.href,
      }),
      { targetOrigin: "*" },
    )
  }
}

function setupIframeEventHandling() {
  registerIframeEventHandle()
  redirctAgentIframePages()
}

function isGreenhouseStylePage() {
  let pageUrl = new URL(window.location.href)
  return (
    isDomainMatch(pageUrl.hostname, "greenhouse.io") ||
    pageUrl.searchParams.get("gh_jid") ||
    pageUrl.searchParams.get("gh_src")
  )
}

function upsertStyleInRoot(root, styleId, cssText) {
  let existing = root.getElementById(styleId)
  let styleElement = existing || document.createElement("style")
  styleElement.id = styleId
  if (styleElement.textContent !== cssText) {
    styleElement.textContent = cssText
  }
  if (!existing) root.appendChild(styleElement)
}

function upsertDocumentStyle(styleId, cssText) {
  let existing = document.getElementById(styleId)
  let styleElement = existing || document.createElement("style")
  styleElement.id = styleId
  if (styleElement.textContent !== cssText) {
    styleElement.textContent = cssText
  }
  if (!existing) {
    ;(document.head || document.documentElement).appendChild(styleElement)
  }
}

async function fetchExtensionAssetText(assetUrl) {
  let response = await fetch(assetUrl)
  if (!response.ok) {
    throw Error(`Failed to load extension asset ${assetUrl}`)
  }
  return response.text()
}

function loadHelperStyleAssets() {
  return (
    helperStyleAssetsPromise ||
    (helperStyleAssetsPromise = Promise.all([
      fetchExtensionAssetText(interCssUrl.default),
      fetchExtensionAssetText(globalLessUrl.default),
    ]).then(([fontText, rawStyleText]) => {
      let styleText = resolveCssAssetUrls(
        rawStyleText,
        globalLessUrl.default,
      )
      let flagAssetUrl = styleText.match(
        /--iti-path-flags-1x:\s*url\(([^)]+)\)/,
      )?.[1]
      if (flagAssetUrl) {
        console.debug("[jobright][helper-style] phone flag asset ready", {
          mode: flagAssetUrl.includes("data:image/webp;base64,")
            ? "embedded"
            : "external",
          stylesheetUrl: globalLessUrl.default,
        })
      } else {
        console.warn(
          "[jobright][helper-style] phone flag asset unavailable:",
          "missing --iti-path-flags-1x declaration",
        )
      }
      return { fontText, styleText }
    }))
  )
}

function ensureHelperShadowRoot() {
  let host =
    helperHostElement || document.getElementById(HOST_ID)
  if (!host) {
    host = document.createElement("plasmo-csui")
    host.id = HOST_ID
    host.setAttribute("data-plasmo", HOST_ID)
  }
  helperHostElement = host
  applyHelperHostStackingStyle(host)
  if (!host.isConnected) {
    ;(document.body || document.documentElement).appendChild(host)
  }
  return host.shadowRoot || host.attachShadow({ mode: "open" })
}

async function mountHelperHost() {
  let { fontText, styleText } = await loadHelperStyleAssets()
  let shadowRoot = ensureHelperShadowRoot()
  if (shadowRoot.getElementById(HELPER_ROOT_ID)) return
  upsertDocumentStyle(DOCUMENT_FONT_STYLE_ID, fontText)
  upsertStyleInRoot(shadowRoot, SHADOW_FONT_STYLE_ID, fontText)
  upsertStyleInRoot(shadowRoot, HELPER_STYLE_ID, styleText)
  let rootElement = document.createElement("div")
  rootElement.id = HELPER_ROOT_ID
  shadowRoot.appendChild(rootElement)
  renderHelperApp(rootElement, styleText)
}

function registerTurbolinksRemount() {
  let globalObject = globalThis
  if (!globalObject[TURBOLINKS_REMOUNT_ACTIVE_KEY]) {
    globalObject[TURBOLINKS_REMOUNT_ACTIVE_KEY] = true
    document.addEventListener("turbolinks:load", () => {
      let hostWasConnected = !!helperHostElement?.isConnected
      console.info("[jobright] Turbolinks navigation completed", {
        host: window.location.hostname,
        pathname: window.location.pathname,
        hostWasConnected,
      })
      mountHelperHost()
        .then(() => {
          console.info(
            "[jobright] helper host ready after Turbolinks navigation",
            {
              host: window.location.hostname,
              pathname: window.location.pathname,
              reattached: !hostWasConnected,
              hostConnected: !!helperHostElement?.isConnected,
            },
          )
        })
        .catch((error) => {
          console.warn(
            "[jobright] failed to restore helper after Turbolinks navigation:",
            error,
          )
        })
    })
  }
}

function isDomainSupportedNow() {
  return (
    checkSupportStatus() ||
    agentDomains.includes(new URL(window.location.href).hostname)
  )
}

function shouldInitializeProfileOnLoad() {
  let pageUrl = new URL(window.location.href)
  return (
    checkSupportStatus() ||
    (agentDomains.includes(pageUrl.hostname) &&
      pageUrl.pathname.includes("/agent")) ||
    pageUrl.hostname.includes("linkedin.com")
  )
}

function shouldActivatePlugin(userStage, userProfile) {
  let isAgentDomain = agentDomains.includes(
    new URL(window.location.href).hostname,
  )
  return !!(
    userStage?.logined &&
    userProfile &&
    (5 === userProfile.step || isAgentDomain)
  )
}

function isTopFrame() {
  return window.top === window.self
}

function StarRatingModalEffects() {
  let setShowStarRatingModal = useFeedbackStore(
    (state) => state.setShowStarRatingModal,
  )
  useEffect(() => {
    let onMessage = (event) => {
      if (event.data?.type === "JOBRIGHT_SHOW_STAR_RATING_MODAL") {
        setShowStarRatingModal(true)
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [setShowStarRatingModal])
  useEffect(() => {
    resumePendingStarRating()
  }, [])
  return null
}

let JobrightHelperApp = () => {
  let displayIcon = useHideStore((state) => state.displayIcon)
  let setDisplayIcon = useHideStore((state) => state.setDisplayIcon)
  let setClickOpenInAgent = useHideStore((state) => state.setClickOpenInAgent)
  let initUserStage = useProfileStore((state) => state.initUserStage)
  let initCreditFeed = useProfileStore((state) => state.initCreditFeed)
  let resetPaymentData = useProfileStore((state) => state.resetPaymentData)
  let userStage = useProfileStore((state) => state.userStage)
  let openFeedbackPopup = useFeedbackStore((state) => state.openFeedbackPopup)
  let showStarRatingModal = useFeedbackStore(
    (state) => state.showStarRatingModal,
  )
  let [helperUiReady, setHelperUiReady] = useState(
    () => !shouldInitializeProfileOnLoad(),
  )
  let [helperStyleReady, setHelperStyleReady] = useState(false)
  let [, setPluginActived] = useStorage("plugin-actived")
  let [, setUnusedReadyFlag] = useState(true)
  let [settingsReady, setSettingsReady] = useState(false)
  let defaultView = useSettingStore.default((state) => state.defaultView)
  let [domainSupport, setDomainSupport] = useState(isDomainSupportedNow)
  let hasActivatedDynamicIframeRef = useRef(shouldInitializeProfileOnLoad())

  let refreshProfileState = useCallback(
    async ({ resetPluginOnError = false } = {}) => {
      setHelperUiReady(false)
      try {
        if (await initUserStage(), isTopFrame()) {
          let { userStage: stage, userProfile } = useProfileStore.getState()
          await setPluginActived(shouldActivatePlugin(stage, userProfile))
        }
        await initCreditFeed()
      } catch (error) {
        throw (
          resetPluginOnError &&
            isTopFrame() &&
            (await setPluginActived(false)),
          error
        )
      } finally {
        setHelperUiReady(true)
      }
    },
    [initCreditFeed, initUserStage, setPluginActived],
  )

  useOpenNewTab.default()
  useSubscribeTabUrl.default()

  useLayoutEffect(() => {
    if (!helperUiReady) {
      setHelperStyleReady(false)
      return
    }
    setHelperStyleReady(false)
    let animationFrameId = 0
    let attemptCount = 0
    let cancelled = false
    let pollStyleReady = () => {
      if (syncHelperStyleText(cachedHelperStyleText)) {
        if (!cancelled) setHelperStyleReady(true)
        return
      }
      if (attemptCount >= 10) return
      attemptCount += 1
      animationFrameId = window.requestAnimationFrame(pollStyleReady)
    }
    pollStyleReady()
    return () => {
      cancelled = true
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId)
    }
  }, [helperUiReady])

  useEffect(() => {
    if (agentDomains.includes(new URL(window.location.href).hostname)) {
      let manifest = chrome.runtime.getManifest()
      let version = manifest.version
      let versionMarker = document.createElement("div")
      versionMarker.style.display = "none"
      versionMarker.id = "jobright-helper-version"
      versionMarker.setAttribute("data-version", version)
      document.body.appendChild(versionMarker)
    }
  }, [])

  useEffect(() => {
    let onRuntimeMessage = async (message) => {
      if ("urlUpdated" === message.message) {
        setDomainSupport(isDomainSupportedNow())
        if (shouldInitializeProfileOnLoad()) await refreshProfileState()
        else setHelperUiReady(true)
      } else if ("cookieChanged" === message.message) {
        try {
          await refreshProfileState({ resetPluginOnError: true })
        } catch (error) {
          console.warn(
            "Failed to refresh profile after cookie change:",
            error,
          )
        } finally {
          resetPaymentData()
        }
      }
    }
    chrome.runtime.onMessage.addListener(onRuntimeMessage)
    return () => {
      chrome.runtime.onMessage.removeListener(onRuntimeMessage)
    }
  }, [])

  let syncSettingsWithStorage = useSettingStore.default(
    (state) => state.syncSettingsWithStorage,
  )
  let setOpenCard = useHideStore((state) => state.setOpenCard)

  useEffect(() => {
    syncSettingsWithStorage()
      .catch((error) => {
        console.warn(
          "[jobright] helper settings load failed; using defaults:",
          error,
        )
      })
      .finally(() => {
        setSettingsReady(true)
      })
  }, [])

  useEffect(() => {
    if (!domainSupport) {
      setDisplayIcon(false)
      return
    }
    let cancelled = false
    return (
      shouldHideOnDomain(window.location.hostname).then((shouldHide) => {
        if (!cancelled) setDisplayIcon(!shouldHide)
      }),
      () => {
        cancelled = true
      }
    )
  }, [domainSupport])

  useEffect(() => {
    if (isTopFrame()) {
      return observeSupportedAutofillIframe(() => {
        let supportedNow = isDomainSupportedNow()
        if (supportedNow) {
          setDomainSupport(true)
          if (
            shouldActivateDynamicIframeSupport({
              hasActivated: hasActivatedDynamicIframeRef.current,
              isSupportedNow: supportedNow,
            })
          ) {
            hasActivatedDynamicIframeRef.current = true
            console.info(
              "[jobright] dynamic supported iframe activated",
              {
                host: window.location.hostname,
                reason: "supported_iframe_detected",
              },
            )
            refreshProfileState().catch((error) => {
              console.warn(
                "[jobright] failed to initialize profile for dynamic supported iframe:",
                error,
              )
            })
          }
        }
      })
    }
  }, [refreshProfileState])

  useEffect(() => {
    if (settingsReady) {
      if (
        "Minimized" !== defaultView ||
        currentJobId ||
        agentDomains.includes(new URL(window.location.href).hostname)
      ) {
        setOpenCard(true)
      } else {
        setOpenCard(false)
      }
    }
  }, [settingsReady])

  useEffect(() => {
    if (settingsReady) {
      return (
        (extensionIconOpenHandler = async () => {
          setDisplayIcon(true)
          setOpenCard(true)
          await Promise.all([
            restoreFromExtensionIcon(window.location.hostname),
            refreshProfileState(),
          ])
          if (!isDomainSupportedNow()) setUnusedReadyFlag(true)
          if (agentDomains.includes(window.location.hostname)) {
            setClickOpenInAgent(true)
          }
        }),
        extensionIconPending && openJobrightHelperFromExtensionIcon(),
        () => {
          extensionIconOpenHandler = null
        }
      )
    }
  }, [settingsReady])

  useEffect(() => {
    if (!shouldInitializeProfileOnLoad()) {
      setHelperUiReady(true)
      return
    }
    refreshProfileState().catch((error) => {
      console.warn(
        "Failed to initialize user stage and credit feed:",
        error,
      )
    })
  }, [])

  useEffect(() => {
    ;(async function trackExternalJobIdLimit() {
      let response = await sendToBackground({
        name: "countExternalJobIds",
      })
      if (response.success && response.count >= 1e3) {
        trackEvent("linkedin_external_job_ids_count_limit_reached", {
          external_job_ids_count: response.count,
        })
      }
    })()
  }, [])

  useTrackAutofillStuck()

  let isTopWindow = window.self === window.top
  let isAgentHost = agentDomains.includes(
    new URL(window.location.href).hostname,
  )
  let showTextareaGenerateLayer = domainSupport && !isAgentHost
  let topFrameOverlays = isTopWindow
    ? jsxs(Fragment, {
        children: [
          jsx(StarRatingModalEffects, {}),
          showStarRatingModal && jsx(StarRatingModal.default, {}),
          openFeedbackPopup &&
            jsx(StyleProvider, {
              container: document.getElementById(HOST_ID)?.shadowRoot,
              children: jsx(FeedbackPopup.default, {
                variant: "modal-only",
              }),
            }),
        ],
      })
    : null

  return displayIcon
    ? isTopWindow
      ? jsxs(TraceProvider.default, {
          children: [
            jsxs(LinkedinBannerProvider.default, {
              userId: userStage?.userId,
              children: [
                jsx(DraggableIcon.default, {
                  hostId: HOST_ID,
                  domainSupport,
                  helperReady: helperStyleReady,
                }),
                showTextareaGenerateLayer &&
                  jsx(TextareaGenerateButtonLayer, {}),
              ],
            }),
            topFrameOverlays,
          ],
        })
      : jsx(TraceProvider.default, {
          children: jsx(LinkedinBannerProvider.default, {
            userId: userStage?.userId,
            children:
              showTextareaGenerateLayer &&
              jsx(TextareaGenerateButtonLayer, {}),
          }),
        })
    : jsxs(TraceProvider.default, {
        children: [
          jsx(LinkedinBannerProvider.default, {
            userId: userStage?.userId,
            children: null,
          }),
          topFrameOverlays,
        ],
      })
}

function renderHelperApp(rootElement, styleText) {
  cachedHelperStyleText = styleText
  createRoot(rootElement).render(jsx(JobrightHelperApp, {}))
}

let extensionIconPending = false
let extensionIconOpenHandler = null

export function openJobrightHelperFromExtensionIcon() {
  if (!extensionIconOpenHandler) {
    extensionIconPending = true
    console.info("[jobright] extension icon waiting for helper UI")
    return
  }
  extensionIconPending = false
  extensionIconOpenHandler().catch((error) => {
    console.warn("[jobright] extension icon open failed:", error)
  })
}

export async function bootstrapJobrightHelperRuntime() {
  await resolveCurrentJobId()
  bindJobIdToTab()
  maybeAttachClickJrInjector()
  await ensureAutofillInstanceCreated()
  exposeAutofillInstanceGetter()
  registerAutofillAnswerPairAnswerProvider(() => {
    let instance = getOrCreateAutofillInstance()
    return instance?.getFalconResponseAnswerForTracking
      ? instance.getFalconResponseAnswerForTracking()
      : instance?.answer
  })
  notifyParentIframeLoaded()
  setupIframeEventHandling()
  registerTurbolinksRemount()
  if (isGreenhouseStylePage()) {
    setTimeout(() => {
      mountHelperHost().catch((error) => {
        console.warn("[jobright] failed to mount helper:", error)
      })
    }, 1500)
  } else {
    await mountHelperHost()
  }
}
