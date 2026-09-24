// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/core/dom.js).
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */
import * as utils from "./utils.js";
import * as xpath from "./xpath.js";
import * as fieldLabel from "../utils/fieldLabel.ts";

export const ORACLE_CLOUD_FIELD_FOCUS_TOP_OFFSET = 96;
export const LEVER_FIELD_FOCUS_TOP_OFFSET = 110;
export const SMARTRECRUITERS_FIELD_FOCUS_TOP_OFFSET = 110;
export const RECRUITERFLOW_FIELD_FOCUS_TOP_OFFSET = 110;
export const JOBSCORE_FIELD_FOCUS_TOP_OFFSET = 150;
export const IBM_FIELD_FOCUS_TOP_OFFSET = 110;
export const RIPPLING_FIELD_FOCUS_TOP_OFFSET = 65;
export const QUALCOMM_FIELD_FOCUS_TOP_OFFSET = 220;
export const RULE_DOM_FIELD_FOCUS_CONTEXT_TOP_OFFSET = 50;

const APPLY_FLOW_NAVIGATION_TRAIN_SELECTOR = ".apply-flow-navigation-train";
const INPUT_ROW_SELECTOR = ".input-row";
const SCROLL_ALIGNMENT_TOLERANCE_PX = 1;
const FIELD_FOCUS_TARGET_KEYS = ["$input", "$label", "$fieldRow", "$checkboxs", "$radioParent", "$radios"];
const ORACLE_CLOUD_DOMAINS = ["oraclecloud.com", "oraclegovcloud.com"];
const UKG_ULTIPRO_DOMAINS = ["ultipro.com", "ultipro.ca", "rec.pro.ukg.net"];

const ORACLE_CLOUD_LABEL_ALIASES = {
  country: ["country"],
  addressline1: ["addressLine1"],
  zipcode: ["postalCode"],
  postalcode: ["postalCode"],
  zip: ["postalCode"],
  city: ["city"],
  state: ["region2"],
  province: ["region2"],
  county: ["region1"],
};

const DOMAIN_FOCUS_OFFSETS = [
  {
    domains: ["jobs.lever.co", "jobs.eu.lever.co"],
    offset: LEVER_FIELD_FOCUS_TOP_OFFSET,
  },
  {
    domains: ["jobs.smartrecruiters.com"],
    offset: SMARTRECRUITERS_FIELD_FOCUS_TOP_OFFSET,
  },
  {
    domains: ["recruiterflow.com"],
    offset: RECRUITERFLOW_FIELD_FOCUS_TOP_OFFSET,
  },
  {
    domains: ["jobscore.com"],
    offset: JOBSCORE_FIELD_FOCUS_TOP_OFFSET,
  },
  {
    domains: ["careers.ibm.com"],
    offset: IBM_FIELD_FOCUS_TOP_OFFSET,
  },
  {
    domains: ["ats.rippling.com", "rippling-ats.com"],
    offset: RIPPLING_FIELD_FOCUS_TOP_OFFSET,
  },
  {
    domains: ["careers.qualcomm.com", "jobs.qualcomm.com"],
    offset: QUALCOMM_FIELD_FOCUS_TOP_OFFSET,
  },
  {
    domains: ORACLE_CLOUD_DOMAINS,
    offset: ORACLE_CLOUD_FIELD_FOCUS_TOP_OFFSET,
  },
];

let fieldFocusRules = [];
let fieldFocusRuleTargets = /* @__PURE__ */ new Map();
let sectionResultFocusRules = /* @__PURE__ */ new Map();

function flattenFieldRules(rules) {
  if (!Array.isArray(rules)) return [];
  let flattened = [];
  for (let rule of rules)
    rule && "object" == typeof rule && (flattened.push(rule), flattened.push(...flattenFieldRules(rule.children)));
  return flattened;
}

export function setFieldFocusRules(rules) {
  fieldFocusRules = flattenFieldRules(rules);
}

export function clearFieldFocusRules() {
  fieldFocusRules = [];
  fieldFocusRuleTargets.clear();
  sectionResultFocusRules.clear();
}

export function setSectionResultFocusRules(type, rules) {
  sectionResultFocusRules.set(type, rules);
}

export function updateFieldFocusRule(rule) {
  if (!rule?.label) return;
  let normalizedLabel = fieldLabel.normalizeFieldLabel(rule.label);
  if (!normalizedLabel) return;
  let flattenedRule = flattenFieldRules([rule]);
  let labelsToReplace = new Set(
    flattenedRule.map((entry) => fieldLabel.normalizeFieldLabel(entry.label ?? "")).filter(Boolean)
  );
  fieldFocusRules = [
    ...fieldFocusRules.filter(
      (entry) => !labelsToReplace.has(fieldLabel.normalizeFieldLabel(entry.label ?? ""))
    ),
    ...flattenedRule,
  ];
}

export function updateFieldFocusRuleTarget(label, input, extras = {}) {
  if (!input) return;
  let fieldRow = extras.$fieldRow ?? (isElementVisible(input) ? null : findFieldRowAncestor(input));
  let normalizedLabel = fieldLabel.normalizeFieldLabel(label);
  normalizedLabel &&
    fieldFocusRuleTargets.set(normalizedLabel, {
      label: label,
      $input: input,
      ...extras,
      ...(fieldRow
        ? {
            $fieldRow: fieldRow,
          }
        : {}),
    });
}

function findFieldRowAncestor(element) {
  let parent = element.parentElement;
  for (; parent && parent.tagName?.toLowerCase() !== "body"; ) {
    if (isElementVisible(parent)) return parent;
    parent = parent.parentElement;
  }
  return null;
}

export function updateFileInputFieldFocusRule(label, input) {
  updateFieldFocusRuleTarget(label, input);
}

function getCurrentHostname() {
  return "undefined" == typeof window ? "" : window.location?.hostname ?? "";
}

export function getElementIndex(element) {
  if (!element || !element.parentNode) return [-1, 0];
  let siblings = Array.from(element.parentNode.children);
  let index = 0;
  for (; (element = element.previousElementSibling); ) index++;
  return [index, siblings.length];
}

function getDomainFocusOffset() {
  let hostname = getCurrentHostname();
  return hostname
    ? DOMAIN_FOCUS_OFFSETS.find(({ domains }) => utils.matchesAnyDomain(hostname, domains))?.offset ?? 0
    : 0;
}

function parseScrollPadding(value) {
  if (!value || "auto" === value) return 0;
  let parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function getDocumentScrollPaddingTop() {
  if ("undefined" == typeof document || "function" != typeof getComputedStyle) return 0;
  let documentElement = document.documentElement;
  let body = document.body;
  return Math.max(
    documentElement ? parseScrollPadding(getComputedStyle(documentElement).scrollPaddingTop) : 0,
    body ? parseScrollPadding(getComputedStyle(body).scrollPaddingTop) : 0
  );
}

function isInsideApplyFlowNavigationTrain(element) {
  let candidate = element;
  return "function" == typeof candidate.closest && !!candidate.closest(APPLY_FLOW_NAVIGATION_TRAIN_SELECTOR);
}

function isHiddenInput(element) {
  let tagName = element.tagName?.toLowerCase();
  let inputType = element.getAttribute?.("type")?.toLowerCase();
  return "input" === tagName && "hidden" === inputType;
}

function hasZeroBoundingBox(element) {
  if ("function" != typeof element.getBoundingClientRect) return false;
  let rect = element.getBoundingClientRect();
  return 0 === rect.width && 0 === rect.height;
}

function isElementVisible(element) {
  let candidate = element;
  return candidate?.offsetParent !== null && !isHiddenInput(candidate) && !hasZeroBoundingBox(candidate);
}

function isDomElementLike(value) {
  return !!(value && "object" == typeof value && "function" == typeof value.getBoundingClientRect);
}

function collectFocusCandidateElements(rule) {
  let candidates = [];
  for (let key of FIELD_FOCUS_TARGET_KEYS) {
    let value = rule[key];
    if (Array.isArray(value)) {
      candidates.push(...value.filter(isDomElementLike));
      continue;
    }
    isDomElementLike(value) && candidates.push(value);
  }
  return candidates;
}

function findVisibleFocusTarget(rule) {
  let directTarget =
    collectFocusCandidateElements(rule).find(
      (element) => false !== element.isConnected && isElementVisible(element)
    ) ?? null;
  if (directTarget) return directTarget;
  for (let child of rule.children ?? []) {
    let nestedTarget = findVisibleFocusTarget(child);
    if (nestedTarget) return nestedTarget;
  }
  return null;
}

function findFocusTargetByLabel(label) {
  let normalizedLabel = fieldLabel.normalizeFieldLabel(label);
  if (!normalizedLabel) return null;
  let targetRule = fieldFocusRuleTargets.get(normalizedLabel);
  let targetFromMap = targetRule ? findVisibleFocusTarget(targetRule) : null;
  if (targetFromMap) return targetFromMap;
  let matchingRule = fieldFocusRules.find(
    (rule) => fieldLabel.normalizeFieldLabel(rule.label ?? "") === normalizedLabel
  );
  return matchingRule ? findVisibleFocusTarget(matchingRule) : null;
}

function focusSectionResultTarget(type, index, fieldLabelText) {
  if (!Number.isInteger(index) || index < 0) return;
  let record = sectionResultFocusRules.get(type)?.[index];
  let matchedField =
    void 0 === fieldLabelText
      ? record
      : flattenFieldRules(record?.children).find(
          (rule) =>
            fieldLabel.normalizeFieldLabel(rule.label ?? "") ===
            fieldLabel.normalizeFieldLabel(fieldLabelText)
        );
  let focusRule =
    void 0 !== fieldLabelText && matchedField
      ? {
          ...matchedField,
          $label: void 0,
        }
      : matchedField;
  let focusTarget = focusRule ? findVisibleFocusTarget(focusRule) : null;
  console.debug("[Autofill][section-focus] navigation", {
    type: type,
    index: index,
    scope: void 0 === fieldLabelText ? "record" : "field",
    reason: record
      ? matchedField
        ? focusTarget
          ? "target-found"
          : "target-unavailable"
        : "field-not-found"
      : "record-not-registered",
  }),
    focusTarget && scrollElementIntoView(focusTarget, RULE_DOM_FIELD_FOCUS_CONTEXT_TOP_OFFSET);
}

const TEXT_NODE = 3;

function elementTextNodesInclude(element, text) {
  let childNodes = element.childNodes;
  if (!childNodes) return false;
  for (let index = 0; index < childNodes.length; index++) {
    let node = childNodes[index];
    if (node.nodeType === TEXT_NODE && (node.nodeValue ?? "").includes(text)) return true;
  }
  return false;
}

function elementContainsTextOrValue(element, text) {
  return elementTextNodesInclude(element, text) || (element.getAttribute?.("value") ?? "").includes(text);
}

function normalizeOracleLabelKey(label) {
  return label.replace(/[*\s_-]+/g, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function textMatchesWholeWords(haystack, needle) {
  let pattern = needle.trim().split(/\s+/).map(escapeRegExp).join("\\s+");
  return !!pattern && RegExp(`(^|[^a-z0-9])${pattern}([^a-z0-9]|$)`, "i").test(haystack);
}

function getOracleCloudNameAliases(label) {
  return ORACLE_CLOUD_LABEL_ALIASES[normalizeOracleLabelKey(label)] ?? [];
}

function getAriaLabelledByText(element) {
  let labelledBy = element.getAttribute?.("aria-labelledby");
  let getElementById = document?.getElementById?.bind(document);
  return labelledBy && getElementById
    ? labelledBy
        .split(/\s+/)
        .map((id) => getElementById(id)?.textContent ?? "")
        .join(" ")
    : "";
}

function elementMatchesOracleLabel(element, label, aliases) {
  let accessibleName = `${element.getAttribute?.("aria-label") ?? ""} ${getAriaLabelledByText(element)}`;
  if (textMatchesWholeWords(accessibleName, label)) return true;
  let nameAttr = (element.getAttribute?.("name") ?? "").toLowerCase();
  let idAttr = (element.getAttribute?.("id") ?? "").toLowerCase();
  return aliases.some((alias) => {
    let aliasLower = alias.toLowerCase();
    return (
      nameAttr === aliasLower ||
      idAttr === aliasLower ||
      idAttr.startsWith(`${aliasLower}-`) ||
      idAttr.includes(aliasLower)
    );
  });
}

function findVisibleInputRow(element) {
  let row = element.closest?.(INPUT_ROW_SELECTOR);
  return row && isElementVisible(row) ? row : null;
}

function findOracleCloudFieldByLabel(label) {
  if ("undefined" == typeof document) return null;
  let aliases = getOracleCloudNameAliases(label);
  if (0 === aliases.length || "function" != typeof document.querySelectorAll) return null;
  let candidates = Array.from(
    document.querySelectorAll(
      'input[role="combobox"], [role="combobox"], input[name], select[name], textarea[name], [aria-label], [aria-labelledby]'
    )
  );
  for (let candidate of candidates)
    if (!isInsideApplyFlowNavigationTrain(candidate) && elementMatchesOracleLabel(candidate, label, aliases) && isElementVisible(candidate))
      return findVisibleInputRow(candidate) ?? candidate;
  return null;
}

function isExtensionHostElement(element) {
  return "PLASMO-CSUI" === element.tagName || element.classList?.contains?.("jr-edit-ai-host") === true;
}

function findLabelInShadowDom(label) {
  if (
    "undefined" == typeof document ||
    "function" != typeof document.createTreeWalker ||
    "undefined" == typeof NodeFilter
  )
    return null;
  let walk = (root, searchTextNodes) => {
    let treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    let next = () => treeWalker.nextNode();
    for (let node = next(); node; node = next())
      if (!isExtensionHostElement(node)) {
        if (searchTextNodes && elementContainsTextOrValue(node, label) && isElementVisible(node)) return node;
        if (node.shadowRoot) {
          let shadowMatch = walk(node.shadowRoot, true);
          if (shadowMatch) return shadowMatch;
        }
      }
    return null;
  };
  return walk(document, false);
}

function findElementByLabelText(label) {
  let xpathQuery = `//*[contains(text(), ${xpath.escapeXPath(label)}) or contains(@value, ${xpath.escapeXPath(label)})]`;
  let isOracleCloud = utils.matchesAnyDomain(getCurrentHostname(), ORACLE_CLOUD_DOMAINS);
  if (isOracleCloud) {
    let oracleField = findOracleCloudFieldByLabel(label);
    if (oracleField) return oracleField;
  }
  let xpathMatch = xpath.getOrderedNodes(xpathQuery).find((node) => {
    if (!isElementVisible(node)) return false;
    if (!isOracleCloud) return true;
    let candidate = node;
    return !isInsideApplyFlowNavigationTrain(candidate);
  });
  return xpathMatch || findLabelInShadowDom(label);
}

function scrollElementIntoView(element, extraTopOffset = 0) {
  if (utils.matchesAnyDomain(getCurrentHostname(), UKG_ULTIPRO_DOMAINS)) {
    console.debug("[Autofill][field-focus] using element scroll container", {
      hostname: getCurrentHostname(),
    }),
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    return;
  }
  let topOffset = Math.max(getDomainFocusOffset(), getDocumentScrollPaddingTop()) + extraTopOffset;
  if (
    topOffset > 0 &&
    "undefined" != typeof window &&
    "function" == typeof window.scrollTo &&
    "function" == typeof element.getBoundingClientRect
  ) {
    let rect = element.getBoundingClientRect();
    let alreadyAligned = Math.abs(rect.top - topOffset) <= SCROLL_ALIGNMENT_TOLERANCE_PX;
    if (alreadyAligned) return;
    let scrollTop = Math.max((window.scrollY ?? window.pageYOffset ?? 0) + rect.top - topOffset, 0);
    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
    return;
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function focusLabelOnPage(label) {
  let element = findElementByLabelText(label);
  return !!element && (scrollElementIntoView(element), true);
}

export function focusFieldByRuleLabel(label) {
  if (focusLabelOnPage(label)) {
    utils.focusIframeLabel(label)
    return
  }
  let ruleTarget = findFocusTargetByLabel(label)
  ruleTarget &&
    scrollElementIntoView(ruleTarget, RULE_DOM_FIELD_FOCUS_CONTEXT_TOP_OFFSET),
    utils.focusIframeLabel(label)
}

/** UI / iframe bridge aliases (Jobright helper). */
export function focusLabelElement(label) {
  focusFieldByRuleLabel(label)
}

export function focusSectionResultRow(type, index, fieldLabel) {
  if (fieldLabel) {
    focusFieldByRuleLabel(fieldLabel)
    return
  }
  // Fall back: no-op when only section coordinates are known.
  void type
  void index
}

function focusFieldByRuleLabelAlias(label) {
  focusFieldByRuleLabel(label)
}
