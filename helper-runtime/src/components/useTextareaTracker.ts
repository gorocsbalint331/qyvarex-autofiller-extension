// @ts-nocheck
/**
 * Track AI-relevant textareas in the page (and shadow roots) for floating buttons.
 */

import { useCallback, useEffect, useRef, useState } from "react"
import { HOST_ID } from "../contents.ts"
import { trackEvent } from "../utils/trace.ts"
import { JR_EDIT_AI_HOST_CLASS } from "./constants.ts"
import { isAiRelevantTextarea, readTextareaSignals } from "./fieldFilter.ts"

export function useTextareaTracker() {
  const [rects, setRects] = useState(() => new Map())
  const trackedElements = useRef(new Set())
  const consideredElements = useRef(new WeakSet())
  const resizeObserverRef = useRef(null)
  const rafRef = useRef(null)

  const refreshRects = useCallback(() => {
    const next = new Map()
    for (const element of trackedElements.current) {
      if (!element.isConnected) {
        trackedElements.current.delete(element)
        consideredElements.current.delete(element)
        resizeObserverRef.current?.unobserve(element)
        continue
      }
      const rect = element.getBoundingClientRect()
      if (rect.width <= 0 || rect.height <= 0) continue
      next.set(element, {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      })
    }

    setRects((prev) => {
      if (prev.size !== next.size) return next
      for (const [element, rect] of next) {
        const previous = prev.get(element)
        if (
          !previous ||
          previous.top !== rect.top ||
          previous.left !== rect.left ||
          previous.width !== rect.width ||
          previous.height !== rect.height
        ) {
          return next
        }
      }
      return prev
    })
  }, [])

  const scheduleRefresh = useCallback(() => {
    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        refreshRects()
      })
    }
  }, [refreshRects])

  const tryTrackTextarea = useCallback(
    (element) => {
      if (
        trackedElements.current.has(element) ||
        consideredElements.current.has(element)
      ) {
        return
      }

      consideredElements.current.add(element)
      const signals = readTextareaSignals(element)
      const relevance = isAiRelevantTextarea(signals)
      if (!relevance.relevant) {
        trackEvent("autofill_ai_regenerate_entry_filtered", {
          label: signals.label || null,
          autocomplete: signals.autocomplete || null,
          name: signals.name || null,
          reason: relevance.reason || null,
        })
        return
      }

      trackedElements.current.add(element)
      resizeObserverRef.current?.observe(element)
      refreshRects()
    },
    [refreshRects],
  )

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(scheduleRefresh)

    const observedRoots = new WeakSet()

    function isHelperHost(element) {
      return (
        element.id === HOST_ID ||
        element.classList.contains(JR_EDIT_AI_HOST_CLASS)
      )
    }

    function isInsideHelperShadow(node) {
      let root = node.getRootNode()
      while (root instanceof ShadowRoot) {
        if (isHelperHost(root.host)) return true
        root = root.host.getRootNode()
      }
      return false
    }

    function considerTextarea(element) {
      if (isInsideHelperShadow(element)) return
      if (element.disabled || element.readOnly) return
      if (element.getAttribute("aria-hidden") === "true") return
      if (element.tabIndex < 0) return
      tryTrackTextarea(element)
    }

    function observeRoot(root) {
      if (observedRoots.has(root)) return
      observedRoots.add(root)
      mutationObserver.observe(root, {
        childList: true,
        subtree: true,
      })
    }

    function visitElement(element) {
      if (element.tagName === "TEXTAREA") considerTextarea(element)
      const shadowRoot = element.shadowRoot
      if (shadowRoot && !isHelperHost(element)) {
        observeRoot(shadowRoot)
        walkTree(shadowRoot)
      }
    }

    function walkTree(root) {
      if (root.nodeType === Node.ELEMENT_NODE) visitElement(root)
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT)
      let node = walker.nextNode()
      while (node) {
        visitElement(node)
        node = walker.nextNode()
      }
    }

    const mutationObserver = new MutationObserver((mutations) => {
      for (const element of trackedElements.current) {
        if (!element.isConnected) {
          trackedElements.current.delete(element)
          consideredElements.current.delete(element)
          resizeObserverRef.current?.unobserve(element)
        }
      }
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) walkTree(node)
        }
      }
      scheduleRefresh()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })
    walkTree(document)
    window.addEventListener("resize", scheduleRefresh, { passive: true })

    return () => {
      mutationObserver.disconnect()
      resizeObserverRef.current?.disconnect()
      window.removeEventListener("resize", scheduleRefresh)
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  return rects
}
