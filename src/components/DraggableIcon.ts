// @ts-nocheck
/**
 * Draggable floating bird icon with hide menu and helper panel.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { StyleProvider } from "@ant-design/cssinjs"
import { Flex } from "antd"
import * as closeMiniSvg from "../assets/inline/images/close_mini.svg.js"
import * as logoBirdSvg from "../assets/inline/images/logo_bird.svg.js"
import * as orderMiniSvg from "../assets/inline/images/order_mini.svg.js"
import { useEffect, useRef, useState } from "react"
import Draggable from "react-draggable"
import { agentDomains } from "../api/env-resolver.ts"
import HelperContainer from "./HelperContainer.ts"
import { useHideStore } from "../store/hide.ts"
import { hideOnAllWebsites, hideOnDomain } from "../utils/hide-logic.ts"
import { trackEvent } from "../utils/trace.ts"
import Image from "../ui/Image.ts"
import { ThemeProvider } from "../theme.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const HIDE_MENU_ITEMS = [
  { key: "next_visit", label: "Hide until next visit" },
  { key: "this_domain", label: "Hide on this domain" },
  { key: "all_websites", label: "Hide on all websites" },
]

export default function DraggableIcon({ hostId, domainSupport, helperReady }) {
  const [isDragging, setIsDragging] = useState(false)
  const [hideMenuOpen, setHideMenuOpen] = useState(false)
  const [hideMenuPosition, setHideMenuPosition] = useState({ top: 0, right: 0 })
  const [helperWasReady, setHelperWasReady] = useState(false)
  const closeButtonRef = useRef(null)

  const openCard = useHideStore((state) => state.openCard)
  const setOpenCard = useHideStore((state) => state.setOpenCard)
  const setDisplayIcon = useHideStore((state) => state.setDisplayIcon)

  useEffect(() => {
    if (helperReady) setHelperWasReady(true)
  }, [helperReady])

  async function handleHideMenuSelect(key) {
    if (key === "this_domain") {
      await hideOnDomain(window.location.hostname)
    } else if (key === "all_websites") {
      await hideOnAllWebsites()
    }
    setHideMenuOpen(false)
    setDisplayIcon(false)
    trackEvent("autofill_plugin_hide", {
      hide_type: key,
      url: window.location.href,
    })
  }

  function openHideMenu() {
    const rect = closeButtonRef.current?.getBoundingClientRect()
    if (rect) {
      setHideMenuPosition({
        top: rect.bottom + 4,
        right: window.innerWidth - rect.right,
      })
    }
    setHideMenuOpen(true)
  }

  useEffect(() => {
    if (!hideMenuOpen) return

    function handleMouseDown(event) {
      const path = event.composedPath()
      const popup = document
        .getElementById(hostId)
        ?.shadowRoot?.querySelector(".hide-menu-popup")
      const closeButton = closeButtonRef.current
      if (
        popup &&
        !path.includes(popup) &&
        closeButton &&
        !path.includes(closeButton)
      ) {
        setHideMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleMouseDown, true)
    return () => document.removeEventListener("mousedown", handleMouseDown, true)
  }, [hideMenuOpen, hostId])

  return jsx(ThemeProvider, {
    children: jsxs(StyleProvider, {
      container: document.getElementById(hostId)?.shadowRoot,
      children: [
        jsx(Draggable, {
          axis: "y",
          bounds: "body",
          handle: ".handle",
          onStart: () => {
            setIsDragging(true)
          },
          onStop: () => {
            setIsDragging(false)
          },
          onMouseDown: (event) => {
            event.stopPropagation()
          },
          children: jsx("div", {
            style: {
              position: "fixed",
              right: 0,
              top: openCard ? 0 : 120,
              zIndex: 1000,
              fontFamily: "Inter",
              visibility: agentDomains.includes(window.location.hostname)
                ? "hidden"
                : "visible",
            },
            children:
              !openCard &&
              jsxs("div", {
                className: "handle",
                style: {
                  cursor: isDragging ? "grabbing" : "grab",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 40px 0px rgba(32, 38, 44, 0.25)",
                },
                onMouseDown: () => {
                  setIsDragging(true)
                },
                children: [
                  jsxs("div", {
                    className: "bird-button",
                    onClick: () => {
                      if (!isDragging) setOpenCard(true)
                      setOpenCard(true)
                    },
                    children: [
                      jsx(Image, {
                        height: 48,
                        width: 48,
                        draggable: false,
                        src: assetUrl(logoBirdSvg),
                        alt: "logo-image",
                        preview: false,
                      }),
                      jsx("div", {
                        ref: closeButtonRef,
                        className: "close-button-wrapper",
                        "data-open": hideMenuOpen ? "true" : "false",
                        onMouseDown: (event) => event.stopPropagation(),
                        onClick: (event) => {
                          event.stopPropagation()
                          openHideMenu()
                        },
                        children: jsx(Image, {
                          width: 12,
                          height: 12,
                          draggable: false,
                          src: assetUrl(closeMiniSvg),
                          alt: "close",
                          preview: false,
                        }),
                      }),
                    ],
                  }),
                  jsx(Flex, {
                    vertical: true,
                    justify: "center",
                    align: "center",
                    gap: 8,
                    style: {
                      paddingInline: 4,
                      background: "#CEFFEF",
                      height: 64,
                    },
                    children: jsx(Image, {
                      height: 16,
                      width: 8,
                      draggable: false,
                      src: assetUrl(orderMiniSvg),
                      alt: "order",
                      preview: false,
                    }),
                  }),
                ],
              }),
          }),
        }),
        hideMenuOpen &&
          !openCard &&
          jsx("div", {
            className: "hide-menu-popup",
            style: {
              position: "fixed",
              top: hideMenuPosition.top,
              right: hideMenuPosition.right,
              zIndex: 2147483000,
            },
            children: HIDE_MENU_ITEMS.map((item) =>
              jsx(
                "div",
                {
                  className: "hide-menu-item",
                  onClick: () => handleHideMenuSelect(item.key),
                  children: item.label,
                },
                item.key,
              ),
            ),
          }),
        openCard &&
          (helperReady || helperWasReady) &&
          jsx(HelperContainer, {
            domainSupport:
              domainSupport ||
              agentDomains.includes(new URL(window.location.href).hostname),
          }),
      ],
    }),
  })
}
