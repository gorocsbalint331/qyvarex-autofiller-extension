// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/utils.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import * as appEnums from "../enums.js";
import * as supportedSites from "./supported-sites.js";

let iframeLoadedState = /* @__PURE__ */ new WeakMap();
const DEFAULT_INITIAL_DELAY_MS = 2e3;
const DEFAULT_POLL_INTERVAL_MS = 500;
const DEFAULT_TIMEOUT_MS = 1e4;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function clearIframeLoadedStateForTest() {
  iframeLoadedState = /* @__PURE__ */ new WeakMap();
}

export function markIframeLoadedFromMessage(source, url) {
  "undefined" != typeof window && (window.iframeLoaded = true),
    source &&
      "object" == typeof source &&
      iframeLoadedState.set(source, {
        url: url,
        loadedAt: Date.now(),
      });
}

function isUsableAutofillIframeUrl(url) {
  return !url || (checkSupportIframeSrc(url) && !shouldSkipAutofillIframeSrc(url));
}

function isIframeLoadedSince(iframe, sinceTimestamp) {
  let contentWindow = iframe.contentWindow;
  if (!contentWindow) return false;
  let state = iframeLoadedState.get(contentWindow);
  return !!state && !(state.loadedAt < sinceTimestamp) && isUsableAutofillIframeUrl(state.url);
}

function getSupportedAutofillIframes() {
  let iframes = document.getElementsByTagName("iframe");
  return Array.from(iframes).filter(
    (iframe) => iframe.src && checkSupportIframeSrc(iframe.src) && !shouldSkipAutofillIframeSrc(iframe.src)
  );
}

export function observeSupportedAutofillIframe(onDetected) {
  if ("undefined" == typeof window || "undefined" == typeof document) return () => {};
  let notifyIfPresent = () => {
    getSupportedAutofillIframes().length > 0 && onDetected();
  };
  let onMessage = (event) => {
    if (event.data?.type !== appEnums.IFRAME_EVENTS.IFRAME_LOADED) return;
    let matchedIframe = getSupportedAutofillIframes().find(
      (iframe) => iframe.contentWindow === event.source
    );
    matchedIframe && onDetected();
  };
  let mutationObserver =
    "undefined" != typeof MutationObserver && document.documentElement
      ? new MutationObserver(notifyIfPresent)
      : null;
  return (
    mutationObserver?.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["src"],
      childList: true,
      subtree: true,
    }),
    window.addEventListener("message", onMessage),
    notifyIfPresent(),
    () => {
      mutationObserver?.disconnect(), window.removeEventListener("message", onMessage);
    }
  );
}

export function shouldActivateDynamicIframeSupport(status) {
  return status.isSupportedNow && !status.hasActivated;
}

function waitForIframeReady(iframe, onReady, options) {
  let startedAt = Date.now();
  return new Promise((resolve) => {
    let settled = false;
    let pollTimer = null;
    let timeoutTimer = null;
    let clearTimers = () => {
      pollTimer && clearInterval(pollTimer), timeoutTimer && clearTimeout(timeoutTimer);
    };
    let settle = (result) => {
      settled || ((settled = true), clearTimers(), resolve(result));
    };
    let poll = () => {
      if (isIframeLoadedSince(iframe, startedAt)) {
        onReady(iframe), settle(true);
        return;
      }
      iframe.contentWindow?.postMessage(
        {
          type: appEnums.IFRAME_EVENTS.REQUEST_IFRAME_LOADED,
          url: iframe.src,
        },
        "*"
      );
    };
    poll(),
      (pollTimer = setInterval(poll, options.pollIntervalMs)),
      (timeoutTimer = setTimeout(() => settle(false), options.timeoutMs));
  });
}

async function waitForAnySupportedIframe(onReady, options = {}) {
  let iframes = getSupportedAutofillIframes();
  if (!iframes.length) return false;
  let resolvedOptions = {
    pollIntervalMs: options.pollIntervalMs ?? DEFAULT_POLL_INTERVAL_MS,
    timeoutMs: options.timeoutMs ?? DEFAULT_TIMEOUT_MS,
  };
  let results = await Promise.all(
    iframes.map((iframe) => waitForIframeReady(iframe, onReady, resolvedOptions))
  );
  return results.some(Boolean);
}

export const startIframeAutoFill = async (fromAgent = false, options = {}) => (
  await delay(options.initialDelayMs ?? DEFAULT_INITIAL_DELAY_MS),
  waitForAnySupportedIframe((iframe) => {
    iframe.contentWindow?.postMessage(
      {
        type: appEnums.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
        data: {
          timestamp: Date.now(),
          fromAgent: fromAgent,
        },
        url: iframe.src,
      },
      "*"
    );
  }, options)
);

export function shouldStartIframeAutofill(hostname) {
  if (!hostname) return true;
  try {
    let currentUrl = new URL(window.location.href);
    let pathname = currentUrl.pathname.replace(/\/+$/, "");
    let isCareersApplyPath =
      isDomainMatch(currentUrl.hostname, hostname) &&
      ("/careers/apply" === pathname ||
        /^\/careers\/apply\/[^/]+$/.test(pathname) ||
        /^\/careers\/job\/[^/]+\/apply$/.test(pathname) ||
        ("/careerhub/explore/jobs/apply" === pathname && !!currentUrl.searchParams.get("pid")));
    return !isCareersApplyPath;
  } catch {
    return true;
  }
}

export const checkIframeCoverLetter = () => {
  setTimeout(() => {
    waitForAnySupportedIframe((iframe) => {
      iframe.contentWindow?.postMessage(
        {
          type: appEnums.IFRAME_EVENTS.CHECK_IFRAME_COVER_LETTER,
          data: {
            timestamp: Date.now(),
          },
          url: iframe.src,
        },
        "*"
      );
    });
  }, 2e3);
};

export const updateIframeUserInfo = (userInfo) => {
  waitForAnySupportedIframe((iframe) => {
    iframe.contentWindow?.postMessage(
      {
        type: appEnums.IFRAME_EVENTS.UPDATE_IFRAME_DATA,
        data: userInfo,
        url: iframe.src,
      },
      "*"
    );
  });
};

export const focusIframeLabel = (label) => {
  waitForAnySupportedIframe((iframe) => {
    iframe.contentWindow?.postMessage(
      {
        type: appEnums.IFRAME_EVENTS.FOCUS_IFRAME_LABEL,
        data: label,
        url: iframe.src,
      },
      "*"
    );
  });
};

export const submitAgentApplication = () => {
  waitForAnySupportedIframe((iframe) => {
    iframe.contentWindow?.postMessage(
      {
        type: appEnums.IFRAME_EVENTS.SUBMIT_APPLICATION,
        url: iframe.src,
      },
      "*"
    );
  });
};

export const cancelIframeAutofill = () => {
  waitForAnySupportedIframe((iframe) => {
    iframe.contentWindow?.postMessage(
      {
        type: appEnums.IFRAME_EVENTS.CANCEL_AUTO_FILL,
        url: iframe.src,
      },
      "*"
    );
  });
};

export const skipIframeAutofill = () => {
  waitForAnySupportedIframe((iframe) => {
    iframe.contentWindow?.postMessage(
      {
        type: appEnums.IFRAME_EVENTS.SKIP_AUTO_FILL,
        url: iframe.src,
      },
      "*"
    );
  });
};

export function isDomainMatch(hostname, domain) {
  return hostname === domain || hostname.endsWith("." + domain);
}

export function matchesAnyDomain(hostname, domains) {
  return domains.some((domain) => isDomainMatch(hostname, domain));
}

export function checkPageSourceContains(keyword) {
  if ("undefined" == typeof document) return false;
  let selector = `script[src*="${keyword}"], link[href*="${keyword}"]`;
  return null !== document.querySelector(selector);
}

export function isDomainOrEmbedded(hostname, domain, embeddedKeyword) {
  return isDomainMatch(hostname, domain) || checkPageSourceContains(embeddedKeyword ?? domain);
}

function isAtsDetectedByPageSource(hostname) {
  return supportedSites.PAGE_SOURCE_ATS_LIST.some(
    ([keyword, atsDomain]) => !isDomainMatch(hostname, atsDomain) && checkPageSourceContains(keyword)
  );
}

function matchesConstrainedSiteDomainOrPattern(url, hostname, rule) {
  let domainMatch = rule.domains.some((domain) => isDomainMatch(hostname, domain));
  let patternMatch = rule.patterns.some((pattern) => pattern.includes(url.href));
  return domainMatch || patternMatch;
}

function matchesConstrainedSitePath(url, rule) {
  let fullPath = `${url.pathname}${url.search}${url.hash}`;
  return (rule.pathRegex?.test(url.pathname) ?? false) || (rule.urlRegex?.test(fullPath) ?? false);
}

function isConstrainedSupportedPage(url, hostname) {
  return supportedSites.CONSTRAINED_SITE_RULES.some(
    (rule) => !!matchesConstrainedSiteDomainOrPattern(url, hostname, rule) && matchesConstrainedSitePath(url, rule)
  );
}

function isConstrainedButWrongPath(url, hostname) {
  return supportedSites.CONSTRAINED_SITE_RULES.some(
    (rule) =>
      matchesConstrainedSiteDomainOrPattern(url, hostname, rule) && !matchesConstrainedSitePath(url, rule)
  );
}

function isSupportedByDomainPatternOrAts(url, hostname) {
  return (
    supportedSites.SUPPORT_DOMAINS.some((domain) => isDomainMatch(hostname, domain)) ||
    supportedSites.SUPPORT_PATTERNS.some((pattern) => pattern.includes(url.href)) ||
    isConstrainedSupportedPage(url, hostname) ||
    isAtsDetectedByPageSource(hostname)
  );
}

function isSupportedByDomainOrQueryParam(url, hostname) {
  return (
    !isConstrainedButWrongPath(url, hostname) &&
    (isSupportedByDomainPatternOrAts(url, hostname) ||
      supportedSites.QUERY_PARAM_LIST.some((param) => url.searchParams.has(param)))
  );
}

function buildExcludedPathRegex(segment) {
  return RegExp(`/${segment}(?=/|$)`, "i");
}

let excludedPagePathRegexes = [
  "confirmation",
  "applyConfirmation",
  "careers/chatbot",
  "success(?:ful)?",
  "thank[_-]?you",
  "thanks",
  "SuccessfulRegistration",
].map(buildExcludedPathRegex);

export function isExcludedPage(url) {
  return excludedPagePathRegexes.some((regex) => regex.test(url.pathname));
}

export function checkSupportDomain() {
  let url = new URL(window.location.href);
  if (isExcludedPage(url)) return false;
  let hostname = url.hostname;
  return !supportedSites.IFRAME_ONLY_DOMAINS.some((domain) => isDomainMatch(hostname, domain)) && isSupportedByDomainPatternOrAts(url, hostname);
}

export function checkSupportStatus(urlArg) {
  try {
    let url = urlArg || new URL(window.location.href);
    if (isExcludedPage(url)) return false;
    let hostname = url.hostname;
    if (isConstrainedButWrongPath(url, hostname)) return false;
    if (isSupportedByDomainOrQueryParam(url, hostname)) return true;
    if (supportedSites.IFRAME_CHECK_PATTERN.some((pattern) => isDomainMatch(hostname, pattern))) return false;
    let iframes = document.getElementsByTagName("iframe");
    for (let iframe of iframes) if (iframe.src && checkSupportIframeSrc(iframe.src)) return true;
    return false;
  } catch (error) {
    return console.error("checkSupportStatus error:", error), false;
  }
}

export function checkSupportDomainLevel(urlArg) {
  try {
    let url = urlArg || new URL(window.location.href);
    return matchesAnyDomain(url.hostname, supportedSites.SUPPORT_HOSTS);
  } catch (error) {
    return console.error("checkSupportDomainLevel error:", error), false;
  }
}

export function checkSupportIframeSrc(src) {
  if (!src) return false;
  try {
    let url = new URL(src);
    if (isExcludedPage(url)) return false;
  } catch {}
  return supportedSites.IFRAME_CHECK_PATTERN.some((pattern) => src.includes(pattern));
}

export function shouldSkipAutofillIframeSrc(src) {
  if (!src) return false;
  try {
    let url = new URL(src, "https://invalid.local");
    let calledFrom = (url.searchParams.get("calledFrom") || "").toLowerCase();
    return (
      isDomainMatch(url.hostname, "brassring.com") &&
      /^\/TGNewUI\/Profile\/Home\/ProfileBuilder$/i.test(url.pathname) &&
      ("resume" === calledFrom || "coverletter" === calledFrom)
    );
  } catch {
    return false;
  }
}

export function getExtensionVersion() {
  return "undefined" == typeof chrome ? "" : chrome?.runtime?.getManifest?.()?.version ?? "";
}

export function collectFormDataWithRepeatingGroups() {
  let formData = {};
  let processedElementCount = 0;
  let repeatingGroupFieldCount = 0;
  let maxRepeatingGroupIndex = -1;
  let terminalNumericKeyCount = 0;
  let maxTerminalNumericKeyIndex = -1;

  function parseRepeatingGroupName(name) {
    let match = name.match(/(.*)\[(\d+)\](.+)/);
    if (!match) return null;
    let fieldName = match[3].replace(/^\[|\]$/g, "");
    return fieldName
      ? {
          groupName: match[1],
          index: Number.parseInt(match[2], 10),
          fieldName: fieldName,
        }
      : null;
  }

  function parseTerminalNumericIndex(name) {
    let match = name.match(/\[(\d+)\]$/);
    return match ? Number.parseInt(match[1], 10) : null;
  }

  function resolveFieldLabel(element) {
    let label = element.labels ? element.labels[0] : null;
    if (label || (element.id && (label = document.querySelector(`label[for="${element.id}"]`))))
      return label.textContent.trim();
    let parent = element.parentElement;
    return "LABEL" === parent.tagName ? parent.textContent.trim() : element.name || "";
  }

  function collectElement(element) {
    let name = element.name;
    let value = "checkbox" === element.type ? element.checked : element.value;
    let label = resolveFieldLabel(element);
    processedElementCount += 1;
    let repeatingGroup = parseRepeatingGroupName(name);
    if (repeatingGroup) {
      let { groupName, index, fieldName } = repeatingGroup;
      repeatingGroupFieldCount += 1;
      maxRepeatingGroupIndex = Math.max(maxRepeatingGroupIndex, index);
      formData[groupName] || (formData[groupName] = []);
      formData[groupName][index] || (formData[groupName][index] = {});
      formData[groupName][index][fieldName] = {
        value: value,
        label: label,
      };
    } else {
      let terminalIndex = parseTerminalNumericIndex(name);
      null !== terminalIndex &&
        ((terminalNumericKeyCount += 1),
        (maxTerminalNumericKeyIndex = Math.max(maxTerminalNumericKeyIndex, terminalIndex)));
      formData[name] = {
        value: value,
        label: label,
      };
    }
  }

  return (
    document.querySelectorAll("input, select, textarea").forEach((element) => {
      ("radio" !== element.type && "checkbox" !== element.type || element.checked) && collectElement(element);
    }),
    console.debug("[AutofillSubmitStatus][FormData]", {
      processedElementCount: processedElementCount,
      repeatingGroupFieldCount: repeatingGroupFieldCount,
      maxRepeatingGroupIndex: maxRepeatingGroupIndex,
      terminalNumericKeyCount: terminalNumericKeyCount,
      maxTerminalNumericKeyIndex: maxTerminalNumericKeyIndex,
    }),
    formData
  );
}

export function removeEndStrings(url) {
  return url.replace(/(\/autofillWithResume|\/applyManually|\/useMyLastApplication)$/, "");
}

function findClosestLevenshteinIndex(target, candidates) {
  if (!candidates || 0 === candidates.length) return -1;
  let distances = candidates.map((candidate) => levenshteinDistance(target, candidate));
  let bestIndex = 0;
  let bestDistance = distances[0];
  for (let index = 1; index < distances.length; index++)
    distances[index] < bestDistance && ((bestDistance = distances[index]), (bestIndex = index));
  return bestIndex;
}

export function levenshteinDistance(source, target) {
  if (0 === source.length) return target.length;
  if (0 === target.length) return source.length;
  let matrix = [];
  for (let row = 0; row <= source.length; row++) matrix[row] = [row];
  for (let col = 0; col <= target.length; col++) matrix[0][col] = col;
  for (let row = 1; row <= source.length; row++)
    for (let col = 1; col <= target.length; col++) {
      let substitutionCost = source[row - 1] === target[col - 1] ? 0 : 1;
      matrix[row][col] = Math.min(
        matrix[row - 1][col] + 1,
        matrix[row][col - 1] + 1,
        matrix[row - 1][col - 1] + substitutionCost
      );
    }
  return matrix[source.length][target.length];
}
