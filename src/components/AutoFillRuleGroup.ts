// @ts-nocheck
/**
 * Autofill progress field groups (required / optional) with partial + section details.
 */

import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { Divider, Flex, Typography } from "antd"
import * as arrDownSvg from "../assets/inline/images/arr_down.svg.js"
import { useEffect, useMemo, useRef, useState } from "react"
import CheckedIcon from "./CheckedIcon.ts"
import {
  getFieldItemDisplayState,
  getFieldItemProgressSummary,
  getFieldItemResult,
  getFieldItemResultGroups,
} from "./FillProgress/progress-state.ts"
import LoadingIcon from "./LoadingIcon.ts"
import UnCheckedIcon from "./UnCheckedIcon.ts"
import { focusLabelElement, focusSectionResultRow } from "../core/dom.ts"
import { useSkipTimer } from "../hooks/useSkipTimer.ts"
import {
  buildNormalizedFieldLabelSet,
  normalizeFieldLabel,
} from "../utils/fieldLabel.ts"
import { trackEvent } from "../utils/trace.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const DEFAULT_EXPANDED_SECTIONS = new Set([
  "education",
  "employment",
  "experience",
])

function handleSkipClick(fieldName) {
  trackEvent("autofill_skip_click", {
    current_field_name: fieldName,
  })
  document.dispatchEvent(new CustomEvent("SkipAutoFill"))
}

function detailsIdSlug(normalizedLabel, index, prefix) {
  const slug = normalizedLabel.replace(/[^a-z0-9_-]+/g, "-") || "field"
  return `${prefix}-${slug}-${index}`
}

function PartialFieldDetails({ groups, partialDetailsId, expanded }) {
  return jsx("div", {
    id: partialDetailsId,
    className: "auto-fill-field-item-partial-details",
    hidden: !expanded,
    children: groups.map((group) =>
      jsxs(
        "div",
        {
          className: "auto-fill-field-item-result-group",
          children: [
            jsx("span", {
              className: "auto-fill-field-item-result-group-title",
              children: group.title,
            }),
            group.items.map((item, index) =>
              jsxs(
                "div",
                {
                  className: "auto-fill-field-item-result-value",
                  children: [
                    group.status === "filled"
                      ? jsx(CheckedIcon, {})
                      : jsx(UnCheckedIcon, {}),
                    jsx("span", { children: item }),
                  ],
                },
                `${item}-${index}`,
              ),
            ),
          ],
        },
        group.title,
      ),
    ),
  })
}

function findSectionResult(sectionResults, label) {
  const normalized = normalizeFieldLabel(label)
  return sectionResults?.find(
    (result) => normalizeFieldLabel(result.label) === normalized,
  )
}

function SectionResultDetails({ result, detailsId, expanded }) {
  return jsx("div", {
    id: detailsId,
    className: "auto-fill-section-result-details",
    hidden: !expanded,
    children: result.rows.map((row) =>
      jsxs(
        "div",
        {
          className: "auto-fill-section-result-row",
          children: [
            jsx("button", {
              className: "auto-fill-section-result-row-title",
              type: "button",
              "aria-label": `Go to ${result.label} ${row.index + 1}`,
              onClick: () => focusSectionResultRow(result.type, row.index),
              children: row.title || `${result.label} ${row.index + 1}`,
            }),
            jsx("div", {
              className: "auto-fill-section-result-fields",
              children: row.fields.map((field) =>
                jsxs(
                  "button",
                  {
                    className: "auto-fill-section-result-field",
                    type: "button",
                    "aria-label": `Go to ${result.label} ${row.index + 1} ${field.label}`,
                    onClick: () =>
                      focusSectionResultRow(result.type, row.index, field.label),
                    children: [
                      jsx("span", {
                        className: `auto-fill-section-result-status auto-fill-section-result-status--${field.status}`,
                      }),
                      jsx("span", {
                        className: "auto-fill-section-result-field-label",
                        children: field.label,
                      }),
                    ],
                  },
                  `${row.index}-${field.label}`,
                ),
              ),
            }),
          ],
        },
        row.index,
      ),
    ),
  })
}

function toggleSetMembership(set, key) {
  const next = new Set(set)
  if (next.has(key)) next.delete(key)
  else next.add(key)
  return next
}

export default function AutoFillRuleGroup({ autoFillResult, isFilling }) {
  const currentField = autoFillResult?.currentField ?? null
  const skipField = useSkipTimer(isFilling ? currentField : null)
  const currentFieldRef = useRef(null)
  const [collapsedPartialLabels, setCollapsedPartialLabels] = useState(
    () => new Set(),
  )
  const [expandedSectionLabels, setExpandedSectionLabels] = useState(
    () => new Set(DEFAULT_EXPANDED_SECTIONS),
  )
  const wasFillingRef = useRef(isFilling)

  useEffect(() => {
    if (isFilling && !wasFillingRef.current) {
      setCollapsedPartialLabels(new Set())
      setExpandedSectionLabels(new Set(DEFAULT_EXPANDED_SECTIONS))
    }
    wasFillingRef.current = isFilling
  }, [isFilling])

  useEffect(() => {
    if (!isFilling || !currentField) return
    const node = currentFieldRef.current
    node?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    })
  }, [currentField, isFilling])

  const fieldLists = useMemo(() => {
    const filledLabels = buildNormalizedFieldLabelSet(
      autoFillResult?.filledFields || [],
    )
    const missingLabels = buildNormalizedFieldLabelSet(
      autoFillResult?.missingFields || [],
    )
    const requiredFields = []
    const optionalFields = []
    const filledRequiredFields = []
    const filledOptionalFields = []

    autoFillResult?.fieldRequiredStatus?.forEach((fieldStatus, index) => {
      const normalizedLabel = normalizeFieldLabel(fieldStatus?.label)
      const isFilled = filledLabels.has(normalizedLabel)
      const isMissing = missingLabels.has(normalizedLabel)
      const fieldItemResult = getFieldItemResult(
        autoFillResult?.fieldItemResults,
        fieldStatus?.label,
      )
      const isPartial =
        getFieldItemDisplayState(fieldItemResult) === "partial"
      const partialExpanded =
        isPartial && !collapsedPartialLabels.has(normalizedLabel)
      const progressSummary = getFieldItemProgressSummary(fieldItemResult)
      const resultGroups = getFieldItemResultGroups(fieldItemResult)
      const showPartialDetails =
        isPartial && progressSummary && resultGroups.length > 0
      const partialDetailsId = detailsIdSlug(
        normalizedLabel,
        index,
        "auto-fill-field-item-partial-details",
      )
      const sectionResult = findSectionResult(
        autoFillResult?.sectionResults,
        fieldStatus?.label,
      )
      const hasSectionRows = (sectionResult?.rows.length ?? 0) > 0
      const sectionExpanded =
        hasSectionRows && expandedSectionLabels.has(normalizedLabel)
      const sectionDetailsId = detailsIdSlug(
        normalizedLabel,
        index,
        "auto-fill-section-result-details",
      )
      const isCurrent = isFilling && fieldStatus?.label === currentField
      const showChecked = isFilled && !isCurrent
      const showUnchecked = isMissing && !isCurrent
      const showSkip =
        isFilling &&
        skipField &&
        fieldStatus?.label === skipField &&
        fieldStatus?.label === currentField &&
        !isFilled

      const row = jsxs(
        Flex,
        {
          gap: 4,
          ref: isCurrent ? currentFieldRef : undefined,
          className: "auto-fill-field-item",
          onClick: () => {
            focusLabelElement(fieldStatus?.label)
          },
          children: [
            showChecked
              ? jsx(CheckedIcon, {})
              : showUnchecked || (!isFilling && autoFillResult)
                ? jsx(UnCheckedIcon, {})
                : jsx(LoadingIcon, {}),
            jsx("span", {
              className: "auto-fill-field-item-text-label",
              children: fieldStatus?.label,
            }),
            showPartialDetails &&
              jsxs("button", {
                type: "button",
                className: "auto-fill-field-item-partial-toggle",
                "aria-expanded": partialExpanded,
                "aria-label": `${fieldStatus.label}: ${progressSummary} autofill details`,
                "aria-controls": partialDetailsId,
                onClick: (event) => {
                  event.stopPropagation()
                  setCollapsedPartialLabels((prev) =>
                    toggleSetMembership(prev, normalizedLabel),
                  )
                },
                children: [
                  jsx("span", { children: progressSummary }),
                  jsx("img", {
                    src: assetUrl(arrDownSvg),
                    alt: "",
                    width: 12,
                    height: 12,
                    className: `auto-fill-field-item-partial-chevron${
                      partialExpanded
                        ? ""
                        : " auto-fill-field-item-partial-chevron--collapsed"
                    }`,
                  }),
                ],
              }),
            hasSectionRows &&
              sectionResult &&
              jsx("button", {
                type: "button",
                className: "auto-fill-section-toggle",
                "aria-expanded": sectionExpanded,
                "aria-label": `${fieldStatus.label} autofill details`,
                "aria-controls": sectionDetailsId,
                onClick: (event) => {
                  event.stopPropagation()
                  setExpandedSectionLabels((prev) =>
                    toggleSetMembership(prev, normalizedLabel),
                  )
                },
                children: jsx("img", {
                  src: assetUrl(arrDownSvg),
                  alt: "",
                  width: 14,
                  height: 14,
                  className: `auto-fill-section-chevron${
                    sectionExpanded
                      ? ""
                      : " auto-fill-section-chevron--collapsed"
                  }`,
                }),
              }),
            showSkip &&
              jsx("button", {
                type: "button",
                className: "auto-fill-field-item-skip-btn",
                onClick: (event) => {
                  event.stopPropagation()
                  handleSkipClick(fieldStatus.label)
                },
                children: "Skip",
              }),
          ],
        },
        index,
      )

      const item =
        showPartialDetails || hasSectionRows
          ? jsxs(
              "div",
              {
                className: "auto-fill-field-item-details-wrapper",
                children: [
                  row,
                  hasSectionRows &&
                    sectionResult &&
                    jsx(SectionResultDetails, {
                      result: sectionResult,
                      detailsId: sectionDetailsId,
                      expanded: sectionExpanded,
                    }),
                  showPartialDetails &&
                    fieldItemResult &&
                    jsx(PartialFieldDetails, {
                      groups: resultGroups,
                      partialDetailsId,
                      expanded: partialExpanded,
                    }),
                ],
              },
              index,
            )
          : row

      if (fieldStatus.required) {
        requiredFields.push(item)
        if (isFilled) filledRequiredFields.push(item)
      } else {
        optionalFields.push(item)
        if (isFilled) filledOptionalFields.push(item)
      }
    })

    return {
      requiredFields,
      optionalFields,
      filledRequiredFields,
      filledOptionalFields,
    }
  }, [
    autoFillResult,
    collapsedPartialLabels,
    expandedSectionLabels,
    isFilling,
    currentField,
    skipField,
  ])

  return jsx(Flex, {
    className: "auto-fill-field-group",
    vertical: true,
    children: jsxs(Flex, {
      gap: 12,
      vertical: true,
      children: [
        fieldLists.requiredFields.length > 0 &&
          jsxs(Fragment, {
            children: [
              jsx(Typography.Title, {
                level: 4,
                className: "auto-fill-field-group-title",
                children: "Required",
              }),
              fieldLists.requiredFields,
            ],
          }),
        fieldLists.optionalFields.length > 0 &&
          jsxs(Fragment, {
            children: [
              fieldLists.requiredFields.length > 0 &&
                jsx(Divider, {
                  className: "auto-fill-divider",
                }),
              jsx(Typography.Title, {
                level: 4,
                className: "auto-fill-field-group-title",
                children: "Optional",
              }),
              fieldLists.optionalFields,
            ],
          }),
      ],
    }),
  })
}
