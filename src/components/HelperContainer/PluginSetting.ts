// @ts-nocheck
/**
 * Plugin settings panel: page-turn autofill + default view preferences.
 */

import { useEffect, useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Image, Tooltip, Typography } from "antd"
import clsx from "clsx"
import * as questionMarkSvg from "../../assets/inline/images/question_mark.svg.js"
import { useContainerStore } from "../../store/container.ts"
import useSettingStore from "../../store/setting.ts"
import { trackEvent } from "../../utils/trace.ts"
import BackHomeButton from "../ExternalJob/BackHomeButton.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

function SettingTooltip({ text }) {
  const containerDom = useContainerStore((state) => state.containerDom)
  return jsx(Tooltip, {
    title: text,
    zIndex: 1001,
    className: "setting-tooltip",
    getTooltipContainer: () => containerDom,
    children: jsx(Image, {
      src: assetUrl(questionMarkSvg),
      width: 12,
      height: 12,
      alt: "logo-image",
      preview: false,
    }),
  })
}

function SettingOptionList({ activeItem, leftItem, rightItem }) {
  return jsxs(Flex, {
    vertical: true,
    gap: 4,
    className: "plugin-setting-option-list",
    children: [
      jsxs("button", {
        type: "button",
        className: clsx(
          "plugin-setting-item-option",
          activeItem === leftItem.option
            ? "plugin-setting-item-selected"
            : "plugin-setting-item-unselected",
        ),
        onClick: () => leftItem.onClickOption(),
        children: [
          jsx("span", {
            className: "plugin-setting-item-radio",
            "aria-hidden": "true",
            children: jsx("span", {
              className: "plugin-setting-item-radio-inner",
            }),
          }),
          jsx(Typography.Text, {
            className: "setting-option-text",
            children: leftItem.option,
          }),
        ],
      }),
      jsxs("button", {
        type: "button",
        className: clsx(
          "plugin-setting-item-option",
          activeItem === rightItem.option
            ? "plugin-setting-item-selected"
            : "plugin-setting-item-unselected",
        ),
        onClick: () => rightItem.onClickOption(),
        children: [
          jsx("span", {
            className: "plugin-setting-item-radio",
            "aria-hidden": "true",
            children: jsx("span", {
              className: "plugin-setting-item-radio-inner",
            }),
          }),
          jsx(Typography.Text, {
            className: "setting-option-text",
            children: rightItem.option,
          }),
        ],
      }),
    ],
  })
}

function SettingItem({
  title,
  tooltipText,
  description,
  activeOption,
  optionSettingLeft,
  optionSettingRight,
}) {
  return jsxs(Flex, {
    vertical: true,
    gap: 8,
    className: "plugin-setting-item",
    children: [
      jsxs(Flex, {
        justify: "start",
        align: "center",
        gap: 4,
        children: [
          jsx(Typography.Text, {
            className: "setting-title",
            children: title,
          }),
          jsx(SettingTooltip, { text: tooltipText }),
        ],
      }),
      jsx(SettingOptionList, {
        activeItem: activeOption,
        leftItem: optionSettingLeft,
        rightItem: optionSettingRight,
      }),
      description &&
        jsx(Typography.Text, {
          className: "setting-description",
          children: description,
        }),
    ],
  })
}

export default function PluginSetting({ closeSetting }) {
  const automaticallyTurnPage = useSettingStore(
    (state) => state.automaticallyTurnPage,
  )
  const setAutomaticallyTurnPage = useSettingStore(
    (state) => state.setAutomaticallyTurnPage,
  )
  const defaultView = useSettingStore((state) => state.defaultView)
  const setDefaultView = useSettingStore((state) => state.setDefaultView)

  const [pageTurnDraft, setPageTurnDraft] = useState(automaticallyTurnPage)
  const [defaultViewDraft, setDefaultViewDraft] = useState(defaultView)

  useEffect(() => {
    trackEvent("autofill_setting_exposure")
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeSetting()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    setPageTurnDraft(automaticallyTurnPage)
  }, [automaticallyTurnPage])

  useEffect(() => {
    setDefaultViewDraft(defaultView)
  }, [defaultView])

  const handleSave = async () => {
    const saves = []
    if (pageTurnDraft !== automaticallyTurnPage) {
      trackEvent("autofill_setting_pageturn_change", {
        from_value: automaticallyTurnPage,
        to_value: pageTurnDraft,
      })
      saves.push(Promise.resolve(setAutomaticallyTurnPage(pageTurnDraft)))
    }
    if (defaultViewDraft !== defaultView) {
      trackEvent("autofill_setting_defaultview_change", {
        from_value: defaultView,
        to_value: defaultViewDraft,
      })
      saves.push(Promise.resolve(setDefaultView(defaultViewDraft)))
    }
    if (saves.length > 0) await Promise.all(saves)
    closeSetting()
  }

  return jsxs(Flex, {
    vertical: true,
    className: "plugin-setting-container",
    children: [
      jsxs("div", {
        className: "plugin-setting-header",
        children: [
          jsx(BackHomeButton, { backFunction: closeSetting }),
          jsx(Typography.Text, {
            className: "plugin-setting-header-title",
            children: "Settings",
          }),
        ],
      }),
      jsxs(Flex, {
        vertical: true,
        className: "plugin-setting-body",
        gap: 24,
        children: [
          jsxs(Flex, {
            vertical: true,
            gap: 8,
            children: [
              jsx(SettingItem, {
                title: "Autofill After Page Turn",
                tooltipText:
                  "On multi-page ATSs like MyWorkday, choose whether to continue autofilling automatically after each page turn, or to do it manually.",
                activeOption: pageTurnDraft,
                optionSettingLeft: {
                  option: "Automatically",
                  onClickOption: () => setPageTurnDraft("Automatically"),
                },
                optionSettingRight: {
                  option: "Manually",
                  onClickOption: () => setPageTurnDraft("Manually"),
                },
              }),
              jsx(Typography.Text, {
                className: "plugin-setting-credits-tip",
                children:
                  "Only 1 credit is used per job application and turning pages does not use extra credits.",
              }),
            ],
          }),
          jsx("div", { className: "plugin-setting-question-divider" }),
          jsx(SettingItem, {
            title: "Default Plugin View",
            tooltipText:
              "Set the plugin to open expanded (full panel visible) or minimized (just a clickable icon) on supported ATS pages not opened from Jobright.",
            activeOption: defaultViewDraft,
            optionSettingLeft: {
              option: "Expanded",
              onClickOption: () => setDefaultViewDraft("Expanded"),
            },
            optionSettingRight: {
              option: "Minimized",
              onClickOption: () => setDefaultViewDraft("Minimized"),
            },
          }),
        ],
      }),
      jsx("div", {
        className: "plugin-setting-footer",
        children: jsx("button", {
          type: "button",
          className: "plugin-setting-save-button",
          onClick: handleSave,
          children: jsx("span", {
            className: "plugin-setting-save-button-text",
            children: "Save",
          }),
        }),
      }),
    ],
  })
}
