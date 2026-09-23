// @ts-nocheck
/**
 * Skills section of the autofill info editor.
 */

import { jsx, jsxs } from "react/jsx-runtime"
import { Flex, Input, Typography } from "antd"
import * as closeMiniSvg from "../assets/inline/images/close_mini.svg.js"
import { addSkillAndResetInput } from "./SkillForm/skill-input.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

export function SkillForm({
  skills,
  skillInputValue,
  setSkillInputValue,
  setSkills,
  dotChecker,
}) {
  const hasSkillDot = dotChecker.hasItemDot("skill")

  return jsxs(Flex, {
    vertical: true,
    gap: 16,
    className: "autofill-info-modal-panel",
    onFocusCapture: () => {
      if (hasSkillDot) dotChecker.clearItemDot("skill")
    },
    children: [
      jsxs(Flex, {
        align: "center",
        gap: 12,
        className: "autofill-info-modal-card-header",
        children: [
          jsx(Typography.Text, {
            className: "autofill-info-modal-card-title",
            children: "Skills",
          }),
          hasSkillDot &&
            jsx("span", { className: "autofill-info-modal-nav-dot" }),
        ],
      }),
      jsxs("div", {
        className: "autofill-info-modal-tag-list",
        children: [
          skills.map((skill, index) =>
            jsxs(
              "span",
              {
                className: "autofill-info-modal-tag",
                children: [
                  jsx("span", {
                    className: "autofill-info-modal-tag-text",
                    title: skill,
                    children: skill,
                  }),
                  jsx("button", {
                    className: "autofill-info-modal-tag-delete",
                    onClick: () =>
                      setSkills((current) =>
                        current.filter((_, skillIndex) => skillIndex !== index),
                      ),
                    children: jsx("img", {
                      src: assetUrl(closeMiniSvg),
                      alt: "delete",
                      className: "autofill-info-modal-tag-delete-icon",
                    }),
                  }),
                ],
              },
              skill,
            ),
          ),
          jsx(Input, {
            placeholder: "Add a skill",
            className: "autofill-info-modal-skill-input",
            value: skillInputValue,
            onChange: (event) => setSkillInputValue(event.target.value),
            onPressEnter: (event) => {
              const next = addSkillAndResetInput(
                skills,
                event.currentTarget.value,
              )
              if (next.skills !== skills) {
                setSkills(next.skills)
                setSkillInputValue(next.inputValue)
              }
            },
          }),
        ],
      }),
    ],
  })
}
