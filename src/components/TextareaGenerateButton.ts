// @ts-nocheck
/**
 * Shadow-DOM "Edit with AI" buttons overlaid on tracked textareas.
 */

import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import * as logoBirdSvg from "data-base64:~/assets/images/logo_bird.svg"
import * as turboPng from "data-base64:~/assets/images/turbo.png"
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"
import { sendToBackground } from "@plasmohq/messaging"
import { HOST_DOMAIN } from "../api/env-resolver.ts"
import { MEMBERSHIP_RETARGET_PATH } from "../constants/payment.ts"
import { useProfileStore } from "../store/profile.ts"
import { useUrlStore } from "../store/url.ts"
import { trackEvent } from "../utils/trace.ts"
import { JR_EDIT_AI_HOST_CLASS } from "./constants.ts"
import { claimPageExposure } from "./exposureTracker.ts"
import { useGenerateField } from "./useGenerateField.ts"
import { useTextareaTracker } from "./useTextareaTracker.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const BUTTON_EDGE_INSET = 4
const MIN_TEXTAREA_HEIGHT = 40
const POPOVER_WIDTH = 240
const HOST_REINSERT_LIMIT = 100
const LOADING_DOT_FRAMES = ["...", "..", ".", "..", "..."]

function LoadingDots() {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIndex((index) => (index + 1) % LOADING_DOT_FRAMES.length)
    }, 300)
    return () => clearInterval(timer)
  }, [])

  return jsx("span", {
    style: {
      display: "inline-block",
      width: "1.2em",
      textAlign: "left",
    },
    children: LOADING_DOT_FRAMES[frameIndex],
  })
}

function UpgradePopover({ onClose }) {
  return jsx("div", {
    style: {
      display: "flex",
      width: POPOVER_WIDTH,
      padding: 8,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      borderRadius: 16,
      background: "#fff",
      boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
      fontFamily: "Inter, -apple-system, sans-serif",
    },
    onClick: (event) => event.stopPropagation(),
    children: jsxs("div", {
      style: {
        display: "flex",
        width: "100%",
        padding: 8,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        borderRadius: 8,
      },
      children: [
        jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "100%",
          },
          children: [
            jsx("img", {
              src: assetUrl(turboPng),
              alt: "",
              style: {
                width: 40,
                height: 40,
                display: "block",
                flexShrink: 0,
              },
            }),
            jsxs("p", {
              style: {
                margin: 0,
                fontSize: 13,
                fontWeight: 400,
                lineHeight: "16px",
                color: "#000",
              },
              children: [
                "Upgrade to Turbo to",
                " ",
                jsx("strong", {
                  style: {
                    fontWeight: 700,
                  },
                  children: "autofill answers with AI",
                }),
              ],
            }),
          ],
        }),
        jsx("button", {
          type: "button",
          onClick: () => {
            trackEvent("autofill_ai_regenerate_upgrade_click")
            window.open(HOST_DOMAIN + MEMBERSHIP_RETARGET_PATH, "_blank")
            onClose()
          },
          style: {
            width: "100%",
            padding: 8,
            borderRadius: 8,
            border: "none",
            background: "#57eba1",
            fontSize: 13,
            fontWeight: 600,
            color: "#000",
            cursor: "pointer",
            fontFamily: "inherit",
            lineHeight: "16px",
            textAlign: "center",
          },
          onMouseEnter: (event) => {
            event.currentTarget.style.background = "#3dd990"
          },
          onMouseLeave: (event) => {
            event.currentTarget.style.background = "#57eba1"
          },
          children: "Upgrade Now",
        }),
      ],
    }),
  })
}

function PromptPopover({ onGenerate, onClose }) {
  const [prompt, setPrompt] = useState("")

  const submit = () => {
    trackEvent("autofill_ai_regenerate_generate_click", {
      url: useUrlStore.getState().currentTabUrl || window.location.href,
    })
    const promptList = prompt.trim() ? [prompt.trim()] : []
    onGenerate(promptList)
    setPrompt("")
    onClose()
  }

  return jsxs("div", {
    style: {
      display: "flex",
      width: POPOVER_WIDTH,
      padding: 8,
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      borderRadius: 16,
      background: "#fff",
      boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
      fontFamily: "Inter, -apple-system, sans-serif",
    },
    onClick: (event) => event.stopPropagation(),
    children: [
      jsx("textarea", {
        placeholder: "Tell me what you want to add, change, or improve.",
        value: prompt,
        maxLength: 750,
        onChange: (event) => setPrompt(event.target.value.slice(0, 750)),
        onKeyDown: (event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            submit()
          }
          if (event.key === "Escape") onClose()
        },
        autoFocus: true,
        style: {
          width: "100%",
          height: 96,
          padding: 8,
          borderRadius: 8,
          border: "none",
          outline: "none",
          background: "#F7F8F9",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
          fontSize: 13,
          fontWeight: 400,
          lineHeight: "16px",
          color: "#000",
          fontFamily: "inherit",
          resize: "none",
          boxSizing: "border-box",
        },
      }),
      jsxs("div", {
        style: {
          display: "flex",
          gap: 8,
          alignSelf: "stretch",
        },
        children: [
          jsx("button", {
            type: "button",
            onClick: () => {
              setPrompt("")
              onClose()
            },
            style: {
              flex: 1,
              padding: 8,
              borderRadius: 8,
              border: "none",
              background: "#fff",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
              fontSize: 13,
              fontWeight: 500,
              color: "#000",
              cursor: "pointer",
              fontFamily: "inherit",
              lineHeight: "16px",
            },
            onMouseEnter: (event) => {
              event.currentTarget.style.background = "#F7F8F9"
            },
            onMouseLeave: (event) => {
              event.currentTarget.style.background = "#fff"
            },
            children: "Cancel",
          }),
          jsx("button", {
            type: "button",
            onClick: submit,
            style: {
              flex: 1,
              padding: 8,
              borderRadius: 8,
              border: "none",
              background: "#57eba1",
              fontSize: 13,
              fontWeight: 500,
              color: "#000",
              cursor: "pointer",
              fontFamily: "inherit",
              lineHeight: "16px",
            },
            onMouseEnter: (event) => {
              event.currentTarget.style.background = "#3dd990"
            },
            onMouseLeave: (event) => {
              event.currentTarget.style.background = "#57eba1"
            },
            children: "Generate",
          }),
        ],
      }),
    ],
  })
}

function GenerateButton({
  textarea,
  rect,
  status,
  isPopoverOpen,
  isSubscribed,
  onTogglePopover,
  onGenerate,
  onClosePopover,
}) {
  const [hovered, setHovered] = useState(false)
  const expanded = hovered || status === "loading" || isPopoverOpen
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({
    top: -9999,
    left: -9999,
  })
  const buttonHeight = 32
  const caretSize = 6

  useLayoutEffect(() => {
    const button = buttonRef.current
    if (!button) return
    const root = button.getRootNode()
    const host = root.host
    if (!host) return
    const hostRect = host.getBoundingClientRect()
    const textareaRect = textarea.getBoundingClientRect()
    setPosition({
      top: textareaRect.top - hostRect.top + textareaRect.height - buttonHeight - BUTTON_EDGE_INSET,
      left: textareaRect.left - hostRect.left + BUTTON_EDGE_INSET,
    })
  }, [textarea, rect.top, rect.left, rect.width, rect.height])

  if (rect.height < MIN_TEXTAREA_HEIGHT) return null

  const { top, left } = position
  const zIndex = 1

  return jsxs(Fragment, {
    children: [
      jsxs("button", {
        ref: buttonRef,
        type: "button",
        title:
          status === "loading"
            ? "Generating..."
            : status === "error"
              ? "Generation failed, click to retry"
              : "Edit with AI",
        onClick: (event) => {
          event.stopPropagation()
          event.preventDefault()
          if (status !== "loading") {
            trackEvent("autofill_ai_regenerate_entry_click")
            onTogglePopover(textarea)
          }
        },
        style: {
          position: "absolute",
          top,
          left,
          height: buttonHeight,
          zIndex,
          display: "inline-flex",
          alignItems: "center",
          gap: expanded ? 4 : 0,
          padding: expanded ? "0 8px 0 6px" : "0 6px",
          borderRadius: "6px 0 6px 6px",
          background: status === "error" ? "#ef4444" : "#fff",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
          border: "none",
          cursor: status === "loading" ? "default" : "pointer",
          userSelect: "none",
          pointerEvents: "auto",
          outline: "none",
          fontFamily: "Inter, -apple-system, sans-serif",
          transition:
            "box-shadow 0.15s ease, background 0.15s ease, padding 0.2s ease, gap 0.2s ease",
        },
        onMouseEnter: (event) => {
          setHovered(true)
          if (status !== "loading") {
            event.currentTarget.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.2)"
          }
        },
        onMouseLeave: (event) => {
          setHovered(false)
          event.currentTarget.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.1)"
        },
        children: [
          jsx("img", {
            src: assetUrl(logoBirdSvg),
            alt: "",
            style: {
              width: 20,
              height: 20,
              display: "block",
              flexShrink: 0,
            },
          }),
          jsx("span", {
            style: {
              fontSize: 12,
              fontWeight: 600,
              lineHeight: "16px",
              color: status === "error" ? "#fff" : "#000",
              whiteSpace: "nowrap",
              overflow: "hidden",
              maxWidth: expanded ? 100 : 0,
              opacity: expanded ? 1 : 0,
              transition: "max-width 0.2s ease, opacity 0.15s ease",
            },
            children:
              status === "loading"
                ? jsxs(Fragment, {
                    children: ["Generating", jsx(LoadingDots, {})],
                  })
                : status === "error"
                  ? "Error"
                  : "Edit with AI",
          }),
        ],
      }),
      isPopoverOpen &&
        status !== "loading" &&
        jsxs("div", {
          style: {
            position: "absolute",
            top: top - caretSize - 2,
            left,
            zIndex,
            transform: "translateY(-100%)",
            pointerEvents: "auto",
          },
          children: [
            isSubscribed
              ? jsx(PromptPopover, {
                  onGenerate: (promptList) => onGenerate(textarea, promptList),
                  onClose: onClosePopover,
                })
              : jsx(UpgradePopover, {
                  onClose: onClosePopover,
                }),
            jsx("div", {
              style: {
                position: "absolute",
                bottom: -caretSize,
                left: 20,
                width: 0,
                height: 0,
                borderLeft: `${caretSize}px solid transparent`,
                borderRight: `${caretSize}px solid transparent`,
                borderTop: `${caretSize}px solid #fff`,
              },
            }),
          ],
        }),
    ],
  })
}

function TextareaShadowHost({ textarea, children }) {
  const [shadowRoot, setShadowRoot] = useState(null)

  useEffect(() => {
    const parent = textarea.parentElement
    if (!parent) return

    const host = document.createElement("div")
    host.className = JR_EDIT_AI_HOST_CLASS
    host.style.cssText =
      "all: initial; position: relative; display: block; width: 0; height: 0; align-self: flex-start; pointer-events: none;"
    const shadow = host.attachShadow({
      mode: "open",
    })
    parent.insertBefore(host, textarea.nextSibling)
    setShadowRoot(shadow)

    let reinsertCount = 0
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          for (const removed of mutation.removedNodes) {
            if (
              removed === host &&
              !(reinsertCount >= HOST_REINSERT_LIMIT) &&
              textarea.isConnected
            ) {
              reinsertCount += 1
              try {
                const nextParent = textarea.parentElement
                if (!nextParent) continue
                nextParent.insertBefore(host, textarea.nextSibling)
              } catch {}
            }
          }
        }
      }
    })

    observer.observe(parent, {
      childList: true,
    })

    return () => {
      observer.disconnect()
      host.remove()
      setShadowRoot(null)
    }
  }, [textarea])

  return shadowRoot ? createPortal(children, shadowRoot) : null
}

export function TextareaGenerateButtonLayer() {
  const trackedTextareas = useTextareaTracker()
  const { statusMap, generate } = useGenerateField()
  const creditsLeft = useProfileStore((state) => state.creditsLeft)
  const ensureCreditsLeft = useProfileStore((state) => state.ensureCreditsLeft)
  const isSubscribed = !!creditsLeft?.subscribed
  const [openPopoverTextarea, setOpenPopoverTextarea] = useState(null)

  useEffect(() => {
    ensureCreditsLeft()
  }, [ensureCreditsLeft])

  useEffect(() => {
    const visibleCount = Array.from(trackedTextareas.values()).filter(
      (rect) => rect.height >= MIN_TEXTAREA_HEIGHT,
    ).length
    if (visibleCount && claimPageExposure(document)) {
      console.debug("[TextareaGenerateButton] reporting entry exposure", {
        visibleTextareaCount: visibleCount,
      })
      trackEvent("autofill_ai_regenerate_entry_exposure")
    }
  }, [trackedTextareas])

  const refreshingCreditsRef = useRef(false)

  const refreshSubscription = useCallback(async () => {
    if (refreshingCreditsRef.current) return
    refreshingCreditsRef.current = true
    try {
      const credits = await sendToBackground({
        name: "getCreditsLeft",
      })
      if (credits) {
        useProfileStore.setState({
          creditsLeft: credits,
        })
      }
    } catch (error) {
      console.warn("[TextareaGenerateButton] refresh subscription failed", error)
    } finally {
      refreshingCreditsRef.current = false
    }
  }, [])

  const togglePopover = useCallback(
    (textarea) => {
      const next = openPopoverTextarea === textarea ? null : textarea
      setOpenPopoverTextarea(next)
      if (next && !isSubscribed) refreshSubscription()
    },
    [openPopoverTextarea, refreshSubscription, isSubscribed],
  )

  const closePopover = useCallback(() => {
    setOpenPopoverTextarea(null)
  }, [])

  useEffect(() => {
    if (!openPopoverTextarea) return
    const onDocumentClick = () => setOpenPopoverTextarea(null)
    document.addEventListener("click", onDocumentClick)
    return () => document.removeEventListener("click", onDocumentClick)
  }, [openPopoverTextarea])

  return jsx(Fragment, {
    children: Array.from(trackedTextareas.entries()).map(([textarea, rect]) =>
      jsx(
        TextareaShadowHost,
        {
          textarea,
          children: jsx(GenerateButton, {
            textarea,
            rect,
            status: statusMap.get(textarea) ?? "idle",
            isPopoverOpen: openPopoverTextarea === textarea,
            isSubscribed,
            onTogglePopover: togglePopover,
            onGenerate: generate,
            onClosePopover: closePopover,
          }),
        },
        `jr-btn-${getTextareaKey(textarea)}`,
      ),
    ),
  })
}

let nextTextareaKey = 0
const textareaKeys = new WeakMap()

function getTextareaKey(textarea) {
  let key = textareaKeys.get(textarea)
  if (key == null) {
    key = nextTextareaKey++
    textareaKeys.set(textarea, key)
  }
  return key
}
