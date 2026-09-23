// @ts-nocheck
/**
 * Generic pre-autofill flow detection, adapter factory, and start/resume helpers.
 */

export const PRE_AUTOFILL_FLOW_DEBUG_DELAY_MS = 1000

function requireCtaText({ pageKind, rule }) {
  if (!rule.ctaText) {
    throw Error(`Missing pre-autofill CTA text for page kind: ${pageKind}`)
  }
  return rule.ctaText
}

export function definePreAutofillPageRules(rulesByKind) {
  return Object.fromEntries(
    Object.entries(rulesByKind).map(([pageKind, rule]) => [
      pageKind,
      {
        ...rule,
        pageKind,
        ctaText: requireCtaText({ pageKind, rule }),
      },
    ]),
  )
}

export function parsePreAutofillUrl(url) {
  try {
    return new URL(url)
  } catch {
    return null
  }
}

export function hasPreAutofillElement(documentRoot, selector) {
  return documentRoot.querySelector(selector) !== null
}

export function hasPreAutofillElementText({ document: documentRoot, selector, text }) {
  const node = documentRoot.querySelector(selector)
  const content = node?.textContent?.trim() ?? ""
  return typeof text === "string"
    ? content.toLowerCase() === text.toLowerCase()
    : text.test(content)
}

function asRuleList(pageRules) {
  return Array.isArray(pageRules) ? pageRules : Object.values(pageRules)
}

function asMatcherList(value) {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

function matchesCondition(condition, context) {
  if (condition.title && !condition.title.test(context.document.title.trim())) {
    return false
  }

  const urlMatchers = asMatcherList(condition.url)
  if (
    urlMatchers.length > 0 &&
    !urlMatchers.some((matcher) => matcher.test(context.parsedUrl.pathname))
  ) {
    return false
  }

  if (condition.element && !hasPreAutofillElement(context.document, condition.element)) {
    return false
  }

  if (
    condition.elementText &&
    !hasPreAutofillElementText({
      document: context.document,
      selector: condition.elementText.selector,
      text: condition.elementText.text,
    })
  ) {
    return false
  }

  return true
}

function matchesPageRule(rule, context) {
  if (rule.excludeUrl?.some((matcher) => matcher.test(context.parsedUrl.pathname))) {
    return false
  }

  if (rule.detect) return rule.detect(context)

  const all = rule.all ?? []
  if (all.length > 0 && !all.every((condition) => matchesCondition(condition, context))) {
    return false
  }

  const any = rule.any ?? []
  return any.length === 0 ? all.length > 0 : any.some((condition) => matchesCondition(condition, context))
}

export function resolvePreAutofillPageRule({ flowId, pageRules, context }) {
  const parsedUrl = parsePreAutofillUrl(context.url)
  if (!parsedUrl) return null

  const enrichedContext = {
    ...context,
    parsedUrl,
  }

  const matched = asRuleList(pageRules).find((rule) =>
    matchesPageRule(rule, enrichedContext),
  )
  if (!matched) return null

  return {
    flowId,
    pageKind: matched.pageKind,
    ctaText: matched.ctaText,
  }
}

export function createPreAutofillAdapter({ flowId, pageRules, start, shouldResume }) {
  return {
    flowId,
    detect: (context) =>
      resolvePreAutofillPageRule({
        flowId,
        pageRules,
        context,
      }),
    start,
    shouldResume,
  }
}

export function getPreAutofillFlowDebugDelayMs() {
  return PRE_AUTOFILL_FLOW_DEBUG_DELAY_MS
}

export function waitForPreAutofillFlowDebugStep(label, signal) {
  const delayMs = getPreAutofillFlowDebugDelayMs()
  if (delayMs <= 0 || signal?.aborted) return Promise.resolve()

  console.debug(`[pre-autofill-flow] ${label}; sleeping ${delayMs}ms for UI inspection`)
  return new Promise((resolve) => {
    const timeoutId = setTimeout(resolve, delayMs)
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeoutId)
        resolve()
      },
      { once: true },
    )
  })
}

export function resolvePreAutofillFlow({ targetName, registry, ...context }) {
  const adapters = registry[targetName] ?? []
  for (const adapter of adapters) {
    const match = adapter.detect({
      ...context,
      targetName,
    })
    if (match) return match
  }
  return null
}

export async function startPreAutofillFlow({
  targetName,
  registry,
  match,
  ...context
}) {
  const adapters = registry[targetName] ?? []
  const adapter = adapters.find((item) => item.flowId === match.flowId)
  if (!adapter?.start) return false
  await adapter.start({
    ...context,
    targetName,
    match,
  })
  return true
}

export function shouldResumePreAutofillFlow({
  targetName,
  registry,
  match,
  ...context
}) {
  const adapters = registry[targetName] ?? []
  const adapter = adapters.find((item) => item.flowId === match.flowId)
  return (
    adapter?.shouldResume?.({
      ...context,
      targetName,
      match,
    }) ?? false
  )
}
