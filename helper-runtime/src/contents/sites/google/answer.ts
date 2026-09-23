// @ts-nocheck
/**
 * Google Careers — answer shaping, country/state helpers, and operation overrides.
 */

import * as messaging from "@plasmohq/messaging";
import * as lodash from "lodash-es";
import * as answerMethods from "../../methods/answer.js";
import * as cancellation from "../../methods/cancellation.js";
import * as coverLetter from "../../methods/cover-letter.js";
import * as enums from "../../../core/enums.js";
import * as countryConstants from "../../../constants/country.ts";
import * as coreUtils from "../../../core/utils.js";
import * as httpEnums from "../../../enums/http.js";
import * as skillsOperation from "./skills-operation.ts";

const RULE_OMIT_KEYS = [
  "$input",
  "$label",
  "children",
  "$checkboxs",
  "$radioParent",
  "__originalRowIndex",
];

export const GOOGLE_PREFERRED_LOCATIONS_DESCRIPTION =
  "The role is offered in multiple locations. Please select one preferred location from the list below. *";

function normalizeSpaces(value) {
  return (value || "").replace(/\s+/g, " ").trim();
}

function isGoogleFormsHost() {
  return (
    window.location.hostname === "docs.google.com" &&
    window.location.pathname.startsWith("/forms/")
  );
}

export function getGoogleFieldDescription(label) {
  const normalized = normalizeSpaces(label).toLowerCase();
  if (
    normalized === "preferred location" ||
    normalized === "preferred locations"
  ) {
    return GOOGLE_PREFERRED_LOCATIONS_DESCRIPTION;
  }
}

export function serializeRulesForApi(rules) {
  return rules.map((rule) => {
    const serialized = lodash.omit(rule, ...RULE_OMIT_KEYS);
    if (
      (rule.type === enums.FIELD_TYPE.EDUCATION ||
        rule.type === enums.FIELD_TYPE.EMPLOYMENT) &&
      Array.isArray(rule.children) &&
      rule.children.length > 0
    ) {
      serialized.options = rule.children.map((child) =>
        lodash.omit(child, ...RULE_OMIT_KEYS),
      );
    }
    if (
      rule.label === "State / province" &&
      rule.type !== enums.FIELD_TYPE.EDUCATION &&
      rule.type !== enums.FIELD_TYPE.EMPLOYMENT
    ) {
      serialized.label = "State";
    }
    return serialized;
  });
}

const LABEL_ALIASES = {
  "Do you currently need, or will you someday require, Google to sponsor work authorization for you to work in the country of employment?":
    "Do you need work sponsor in the country of employment?",
  "Have you worked at Alphabet before?": "Alphabet experience",
  "State / province": "State",
};

const PREFERRED_WORK_LOCATION_LABELS = [
  "Which locations(s) do you prefer working out of?",
  "Which location(s) do you prefer working out of?",
];

export function getRawValueInRecord(label, record) {
  for (const key in record) {
    if (answerMethods.isMatched(label, key)) {
      return { found: true, value: record[key] };
    }
  }
  const alias = LABEL_ALIASES[label];
  if (alias && record[alias] !== undefined) {
    return { found: true, value: record[alias] };
  }
  return { found: false };
}

function isEmptyAnswerValue(value) {
  return !!(
    value === "" ||
    value == null ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) &&
      (value.length === 0 ||
        value.every((item) => item == null || String(item).trim() === "")))
  );
}

function cleanStringList(values) {
  return values
    .filter((item) => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function normalizeGoogleSkillsItems(value) {
  if (Array.isArray(value)) return cleanStringList(value);
  if (typeof value === "string") return cleanStringList(value.split(","));
  return [];
}

function toLowerKey(value) {
  return value.trim().toLowerCase();
}

function isValidSkillsProgressResult(result) {
  if (!result || typeof result !== "object" || Array.isArray(result)) {
    return false;
  }
  const progress = result;
  if (
    progress.status !== "filled" &&
    progress.status !== "partial" &&
    progress.status !== "missing"
  ) {
    return false;
  }
  const lists = [
    progress.requestedItems,
    progress.succeededItems,
    progress.failedItems,
  ];
  if (
    !lists.every(
      (list) =>
        Array.isArray(list) && list.every((item) => typeof item === "string"),
    )
  ) {
    return false;
  }
  const [requested, succeeded, failed] = lists;
  const requestedKeys = requested.map(toLowerKey);
  if (
    requestedKeys.some((key) => !key) ||
    new Set(requestedKeys).size !== requestedKeys.length
  ) {
    return false;
  }
  const requestedSet = new Set(requestedKeys);
  const succeededKeys = succeeded.map(toLowerKey);
  const failedKeys = failed.map(toLowerKey);
  const succeededSet = new Set(succeededKeys);
  const failedSet = new Set(failedKeys);
  if (
    succeededSet.size !== succeededKeys.length ||
    failedSet.size !== failedKeys.length
  ) {
    return false;
  }
  const isSubset = (set) => [...set].every((key) => requestedSet.has(key));
  if (
    !isSubset(succeededSet) ||
    !isSubset(failedSet) ||
    [...succeededSet].some((key) => failedSet.has(key))
  ) {
    return false;
  }
  const union = new Set([...succeededSet, ...failedSet]);
  if (
    !(
      union.size === requestedSet.size &&
      [...requestedSet].every((key) => union.has(key))
    )
  ) {
    return false;
  }
  if (progress.status === "filled") {
    return (
      requestedSet.size > 0 &&
      failedSet.size === 0 &&
      succeededSet.size === requestedSet.size
    );
  }
  if (progress.status === "partial") {
    return succeededSet.size > 0 && failedSet.size > 0;
  }
  return succeededSet.size === 0;
}

export function isPreferredWorkLocationLabel(label) {
  const normalized = String(label ?? "")
    .trim()
    .toLowerCase();
  return PREFERRED_WORK_LOCATION_LABELS.some(
    (candidate) => candidate.trim().toLowerCase() === normalized,
  );
}

function normalizeLocationMatchText(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function preferredLocationMatchCandidates(value) {
  const normalized = normalizeLocationMatchText(value);
  if (!normalized) return [];
  const parts = normalized
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  const candidates = [normalized];
  if (parts.length >= 2) candidates.push(parts.slice(0, 2).join(", "));
  if (parts.length >= 1) candidates.push(parts[0]);
  return Array.from(new Set(candidates.filter(Boolean)));
}

export function findPreferredWorkLocationOptionIndex(options, value) {
  const target = normalizeLocationMatchText(value);
  for (let index = 0; index < options.length; index++) {
    const option = normalizeLocationMatchText(options[index] ?? "");
    if (option && option === target) return { index, matchMode: "exact" };
  }
  const candidates = preferredLocationMatchCandidates(value);
  for (const candidate of candidates) {
    for (let index = 0; index < options.length; index++) {
      const option = normalizeLocationMatchText(options[index] ?? "");
      if (
        option &&
        (option.startsWith(candidate) || candidate.startsWith(option))
      ) {
        return { index, matchMode: "prefix" };
      }
    }
  }
  for (const candidate of candidates) {
    for (let index = 0; index < options.length; index++) {
      const option = normalizeLocationMatchText(options[index] ?? "");
      if (
        option &&
        (option.includes(candidate) || candidate.includes(option))
      ) {
        return { index, matchMode: "partial" };
      }
    }
  }
  return { index: -1, matchMode: "none" };
}

export function attachGoogleEmploymentRuleContext(rules, answers) {
  const isEmploymentRule = (rule) =>
    rule.type === enums.FIELD_TYPE.EMPLOYMENT && Array.isArray(rule.children);
  const withDebug = (child, debug) => {
    const next = { ...child };
    next.__debugWorkCountry = debug;
    return next;
  };
  return rules.map((rule, rowIndex) => {
    if (!isEmploymentRule(rule)) return rule;
    const answer = answers[rowIndex];
    if (!answer) return rule;
    const children = rule.children.map((child) => {
      const label = String(child.label ?? "")
        .trim()
        .toLowerCase();
      const isCountry =
        label === "country / region" ||
        label === "country" ||
        label === "country/region";
      return isCountry
        ? withDebug(child, {
            rowIndex,
            employer: String(
              answer["Employer name"] ?? answer.Company ?? "",
            ).trim(),
            country: String(
              answer["Country / Region"] ??
                answer.Country ??
                answer.country ??
                "",
            ).trim(),
            state: String(
              answer.State ?? answer["State / province"] ?? "",
            ).trim(),
          })
        : child;
    });
    return { ...rule, children };
  });
}

function truncatePreferredLocationValue(value) {
  const text = String(Array.isArray(value) ? (value[0] ?? "") : (value ?? ""))
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return "";
  const parts = text
    .split(/[\uff0c,]/)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  return parts.length >= 3 ? parts.slice(0, 2).join(", ") : text;
}

function maybeTruncatePreferredLocation(label, value) {
  if (!isPreferredWorkLocationLabel(label)) return value;
  if (Array.isArray(value)) {
    const truncated = truncatePreferredLocationValue(value[0]);
    return truncated ? [truncated] : value;
  }
  const truncated = truncatePreferredLocationValue(value);
  return truncated || value;
}

function normalizeCountryLookupKey(value) {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/['\u2019]/g, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isCountryFieldKey(key) {
  const normalized = String(key ?? "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
  return normalized === "country" || normalized === "countryregion";
}

const COUNTRY_BY_CODE = new Map();
const COUNTRY_BY_LABEL = new Map();
for (const option of countryConstants.COUNTRY_OPTIONS) {
  const code = String(option.code ?? "")
    .trim()
    .toUpperCase();
  const label = String(option.label ?? option.value ?? "").trim();
  if (!code || !label) continue;
  const entry = { code, label };
  COUNTRY_BY_CODE.set(code, entry);
  for (const raw of [label, option.value]) {
    const key = normalizeCountryLookupKey(String(raw ?? ""));
    if (!key || COUNTRY_BY_LABEL.has(key)) continue;
    COUNTRY_BY_LABEL.set(key, entry);
  }
}

const COUNTRY_CODE_ALIASES = {
  [normalizeCountryLookupKey("United States of America")]: "US",
  [normalizeCountryLookupKey("US")]: "US",
  [normalizeCountryLookupKey("USA")]: "US",
  [normalizeCountryLookupKey("Canada")]: "CA",
  [normalizeCountryLookupKey("CA")]: "CA",
  [normalizeCountryLookupKey("CAN")]: "CA",
  [normalizeCountryLookupKey("United Kingdom")]: "GB",
  [normalizeCountryLookupKey("UK")]: "GB",
  [normalizeCountryLookupKey("Great Britain")]: "GB",
};

export function resolveCountryDataValue(value) {
  const text = (value || "").trim();
  if (!text) return "";
  const byCode = COUNTRY_BY_CODE.get(text.toUpperCase());
  if (byCode) return byCode.code;
  const key = normalizeCountryLookupKey(text);
  const alias = COUNTRY_CODE_ALIASES[key];
  return alias || (COUNTRY_BY_LABEL.get(key)?.code ?? "");
}

export function getGoogleOperationConfigOverrides({
  handlers,
  progressTracker,
  createOperationHandler,
}) {
  const overrides = {};

  const runWithProgress = async (rule, value, trackProgress, operation) => {
    if (trackProgress) cancellation.updateCurrentField(rule.label);
    try {
      const result = await cancellation.withSkip(operation);
      if (!trackProgress) return;
      if (rule.label === skillsOperation.GOOGLE_SKILLS_LABEL) {
        if (isValidSkillsProgressResult(result)) {
          progressTracker.updateFieldItemProgress(rule.label, result);
        } else {
          progressTracker.updateMissedProgress(rule.label);
        }
        return;
      }
      if (isValidSkillsProgressResult(result)) {
        progressTracker.updateFieldItemProgress(rule.label, result);
      } else if (isEmptyAnswerValue(value) || result === false) {
        progressTracker.updateMissedProgress(rule.label);
      } else {
        progressTracker.updateFilledProgress(rule.label);
      }
    } catch (error) {
      if (error instanceof cancellation.CancelledError) throw error;
      if (error instanceof cancellation.SkippedError) {
        if (trackProgress) {
          progressTracker.updateMissedProgress(rule.label);
          return;
        }
        throw error;
      }
      if (trackProgress) progressTracker.updateMissedProgress(rule.label);
    }
  };

  const textHandlerEntry = handlers[enums.FIELD_TYPE.TEXT];
  const textHandler =
    typeof textHandlerEntry === "function"
      ? textHandlerEntry
      : textHandlerEntry?.handler;
  const expectArray =
    typeof textHandlerEntry === "object" &&
    textHandlerEntry.options?.expectArray !== false;

  overrides[enums.FIELD_TYPE.TEXT] = async (
    rule,
    record,
    trackProgress = true,
  ) => {
    const matched = getRawValueInRecord(rule.label, record);
    if (matched.found) {
      const preferStateSelect =
        String(rule?.label ?? "")
          .trim()
          .toLowerCase() === "state" &&
        resolveCountryDataValue(
          String(
            record?.["Country / Region"] ??
              record?.Country ??
              record?.country ??
              "",
          ).trim(),
        ) !== "";
      const ruleForFill = preferStateSelect
        ? { ...rule, __preferStateSelect: true }
        : rule;
      const rawValue =
        rule.label === skillsOperation.GOOGLE_SKILLS_LABEL &&
        Array.isArray(matched.value)
          ? matched.value
          : expectArray
            ? Array.isArray(matched.value)
              ? matched.value
              : [matched.value]
            : Array.isArray(matched.value)
              ? matched.value[0]
              : matched.value;
      const value = maybeTruncatePreferredLocation(rule.label, rawValue);
      await runWithProgress(rule, value, trackProgress, async () =>
        textHandler(ruleForFill, value),
      );
      return;
    }
    await createOperationHandler(textHandler, { expectArray })(
      rule,
      record,
      trackProgress,
    );
  };

  const selectHandler = handlers[enums.FIELD_TYPE.SELECT];
  overrides[enums.FIELD_TYPE.SELECT] = async (
    rule,
    record,
    trackProgress = true,
  ) => {
    const matched = getRawValueInRecord(rule.label, record);
    if (matched.found) {
      const value = Array.isArray(matched.value)
        ? matched.value[0]
        : matched.value;
      await runWithProgress(rule, value, trackProgress, async () =>
        selectHandler(rule, value),
      );
      return;
    }
    await createOperationHandler(selectHandler, { expectArray: true })(
      rule,
      record,
      trackProgress,
    );
  };

  if (isGoogleFormsHost()) {
    const checkboxHandler = handlers[enums.FIELD_TYPE.CHECKBOX];
    overrides[enums.FIELD_TYPE.CHECKBOX] = async (
      rule,
      record,
      trackProgress = true,
    ) => {
      const matched = getRawValueInRecord(rule.label, record);
      if (matched.found) {
        const value = Array.isArray(matched.value)
          ? matched.value
          : [matched.value];
        await runWithProgress(rule, value, trackProgress, async () =>
          checkboxHandler(rule, value),
        );
        return;
      }
      await createOperationHandler(checkboxHandler, { expectArray: true })(
        rule,
        record,
        trackProgress,
      );
    };

    const radioHandler = handlers[enums.FIELD_TYPE.RADIOGROUP];
    overrides[enums.FIELD_TYPE.RADIOGROUP] = async (
      rule,
      record,
      trackProgress = true,
    ) => {
      const matched = getRawValueInRecord(rule.label, record);
      if (matched.found) {
        const value = Array.isArray(matched.value)
          ? matched.value
          : [matched.value];
        await runWithProgress(rule, value, trackProgress, async () =>
          radioHandler(rule, value),
        );
        return;
      }
      await createOperationHandler(radioHandler, { expectArray: true })(
        rule,
        record,
        trackProgress,
      );
    };
  }

  if (!isGoogleFormsHost()) {
    const radioHandler = handlers[enums.FIELD_TYPE.RADIOGROUP];
    overrides[enums.FIELD_TYPE.RADIOGROUP] = async (
      rule,
      record,
      trackProgress = true,
    ) => {
      const matched = getRawValueInRecord(rule.label, record);
      if (matched.found) {
        const value = Array.isArray(matched.value)
          ? matched.value
          : [matched.value];
        await runWithProgress(rule, value, trackProgress, async () =>
          radioHandler(rule, value),
        );
        return;
      }
      await createOperationHandler(radioHandler, { expectArray: true })(
        rule,
        record,
        trackProgress,
      );
    };
  }

  return overrides;
}

export async function requestGoogleFormAnswers({
  elements,
  token,
  getSiteName,
  fromAgent,
  resumeId,
  tailorId,
}) {
  const response = await messaging.sendToBackground({
    name: "getGptResults",
    body: {
      params: {
        elements,
        token,
        url: coreUtils.removeEndStrings(
          typeof window !== "undefined" ? window.location.href : "",
        ),
        parser: "internal",
        source: getSiteName,
        fromAgent: !!fromAgent,
        ...(resumeId && { resumeId }),
        ...(tailorId && { tailorId }),
      },
    },
  });
  if (
    response?.data?.data === httpEnums.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY
  ) {
    throw new answerMethods.ResumeMissingCodeError(
      httpEnums.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY,
    );
  }
  if (response?.data?.HTTP_STATUS) {
    throw new answerMethods.HTTPError(response?.data?.HTTP_STATUS);
  }
  return response;
}

function looksLikePostalCode(value) {
  const text = value.trim();
  return (
    !!text &&
    !!(
      /^\d+$/.test(text) ||
      /^\d{5}-\d{4}$/.test(text) ||
      /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/.test(text) ||
      /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$/.test(text)
    )
  );
}

function firstPresentValue(record, keys) {
  for (const key of keys) {
    const value = record?.[key];
    if (value == null) continue;
    if (Array.isArray(value)) {
      const found = value.find((item) => String(item ?? "").trim() !== "");
      if (found != null) return found;
      continue;
    }
    if (String(value).trim() !== "") return value;
  }
  return "";
}

const US_STATE_CODES = new Set([
  "al",
  "ak",
  "az",
  "ar",
  "ca",
  "co",
  "ct",
  "de",
  "fl",
  "ga",
  "hi",
  "id",
  "il",
  "in",
  "ia",
  "ks",
  "ky",
  "la",
  "me",
  "md",
  "ma",
  "mi",
  "mn",
  "ms",
  "mo",
  "mt",
  "ne",
  "nv",
  "nh",
  "nj",
  "nm",
  "ny",
  "nc",
  "nd",
  "oh",
  "ok",
  "or",
  "pa",
  "ri",
  "sc",
  "sd",
  "tn",
  "tx",
  "ut",
  "vt",
  "va",
  "wa",
  "wv",
  "wi",
  "wy",
  "dc",
]);

const CA_PROVINCE_CODES = new Set([
  "ab",
  "bc",
  "mb",
  "nb",
  "nl",
  "ns",
  "on",
  "pe",
  "qc",
  "sk",
  "nt",
  "nu",
  "yt",
]);

export const STATE_PROVINCE_NAME_TO_CODE = {
  alabama: "al",
  alaska: "ak",
  arizona: "az",
  arkansas: "ar",
  california: "ca",
  colorado: "co",
  connecticut: "ct",
  delaware: "de",
  florida: "fl",
  georgia: "ga",
  hawaii: "hi",
  idaho: "id",
  illinois: "il",
  indiana: "in",
  iowa: "ia",
  kansas: "ks",
  kentucky: "ky",
  louisiana: "la",
  maine: "me",
  maryland: "md",
  massachusetts: "ma",
  michigan: "mi",
  minnesota: "mn",
  mississippi: "ms",
  missouri: "mo",
  montana: "mt",
  nebraska: "ne",
  nevada: "nv",
  "new hampshire": "nh",
  "new jersey": "nj",
  "new mexico": "nm",
  "new york": "ny",
  "north carolina": "nc",
  "north dakota": "nd",
  ohio: "oh",
  oklahoma: "ok",
  oregon: "or",
  pennsylvania: "pa",
  "rhode island": "ri",
  "south carolina": "sc",
  "south dakota": "sd",
  tennessee: "tn",
  texas: "tx",
  utah: "ut",
  vermont: "vt",
  virginia: "va",
  washington: "wa",
  "west virginia": "wv",
  wisconsin: "wi",
  wyoming: "wy",
  "district of columbia": "dc",
  alberta: "ab",
  "british columbia": "bc",
  manitoba: "mb",
  "new brunswick": "nb",
  "newfoundland and labrador": "nl",
  "nova scotia": "ns",
  ontario: "on",
  "prince edward island": "pe",
  quebec: "qc",
  saskatchewan: "sk",
  "northwest territories": "nt",
  nunavut: "nu",
  yukon: "yt",
};

function inferCountryFromStateProvince(value) {
  const normalized = value.trim().toLowerCase().replace(/\s+/g, " ");
  if (!normalized) return "";
  const code =
    normalized.length === 2
      ? normalized
      : (STATE_PROVINCE_NAME_TO_CODE[normalized] ?? "");
  if (!code) return "";
  if (US_STATE_CODES.has(code)) return "United States";
  if (CA_PROVINCE_CODES.has(code)) return "Canada";
  return "";
}

function extractStateFromPreferredLocation(value) {
  if (!value || !value.trim()) return "";
  const parts = value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length >= 2) {
    const last = parts[parts.length - 1].toLowerCase();
    const isUs = last === "usa" || last === "us" || last === "united states";
    const isCa = last === "canada" || last === "ca";
    if (isUs || isCa) {
      const statePart = parts.length >= 3 ? parts[parts.length - 2] : parts[0];
      const normalized = statePart.trim().toLowerCase().replace(/\s+/g, " ");
      if (!normalized) return "";
      const code =
        normalized.length === 2
          ? normalized
          : (STATE_PROVINCE_NAME_TO_CODE[normalized] ?? "");
      if (code && (US_STATE_CODES.has(code) || CA_PROVINCE_CODES.has(code))) {
        return statePart.trim();
      }
    }
  }
  return "";
}

function resolveCountryLabel(value) {
  if (!value || !value.trim()) return value;
  const text = value.trim();
  const byCode = COUNTRY_BY_CODE.get(text.toUpperCase());
  if (byCode) return byCode.label;
  const key = normalizeCountryLookupKey(text);
  const alias = COUNTRY_CODE_ALIASES[key];
  if (alias) return COUNTRY_BY_CODE.get(alias)?.label ?? text;
  const byLabel = COUNTRY_BY_LABEL.get(key);
  return byLabel ? byLabel.label : text;
}

export function mapEducationRecordToRegular(record) {
  const rawCountry = String(
    firstPresentValue(record, [
      "Country / Region",
      "Country",
      "country",
      "CountryRegion",
      "country_region",
    ]) ?? "",
  ).trim();
  const country = /^\d+$/.test(rawCountry)
    ? ""
    : rawCountry
      ? resolveCountryLabel(rawCountry)
      : "";
  return {
    "School name": String(
      firstPresentValue(record, [
        "School name",
        "School",
        "school",
        "schoolName",
      ]) ?? "",
    ).trim(),
    Degree: String(
      firstPresentValue(record, ["Degree", "degree"]) ?? "",
    ).trim(),
    "Degree Status": String(
      firstPresentValue(record, [
        "Degree Status",
        "DegreeStatus",
        "degreeStatus",
        "status",
        "Status",
      ]) ?? "",
    ).trim(),
    "Major / area of study": String(
      firstPresentValue(record, [
        "Major / area of study",
        "Major",
        "major",
        "fieldOfStudy",
      ]) ?? "",
    ).trim(),
    "Country / Region": country,
  };
}

function countAdditionalEmails(regular) {
  const emails = regular?.Email;
  if (Array.isArray(emails)) return Math.max(0, emails.length - 1);
  let count = 0;
  for (const index of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    if (
      String(regular?.[`Additional email address ${index}`] ?? "").trim() !== ""
    ) {
      count++;
    }
  }
  return count;
}

export function normalizeEmailsForContactDetails(regular, defaultEmail) {
  let emails = Array.isArray(regular.Email)
    ? regular.Email.map((email) => String(email ?? "").trim()).filter(Boolean)
    : [];
  const primary = String(regular["Email address"] ?? "").trim();
  if (primary && !emails.length) emails.push(primary);
  const seen = new Set(emails.map((email) => email.toLowerCase()));
  for (let index = 1; index <= 20; index++) {
    const extra = String(
      regular[`Additional email address ${index}`] ?? "",
    ).trim();
    if (extra && !seen.has(extra.toLowerCase())) {
      emails.push(extra);
      seen.add(extra.toLowerCase());
    }
  }
  const defaultKey = defaultEmail.trim().toLowerCase();
  const primaryKey = primary.toLowerCase();
  const additional = [];
  const additionalSeen = new Set();
  for (const email of emails) {
    if (
      (defaultEmail && email.toLowerCase() === defaultKey) ||
      (!defaultEmail && primary && email.toLowerCase() === primaryKey)
    ) {
      continue;
    }
    const key = email.toLowerCase();
    if (additionalSeen.has(key)) continue;
    additionalSeen.add(key);
    additional.push(email);
  }
  if (additional.length === 0) {
    return { regular, additionalEmailCount: countAdditionalEmails(regular) };
  }
  const first = defaultEmail || primary || "";
  const ordered = [first, ...additional];
  const additionalCount = Math.max(0, ordered.length - 1);
  const keepKey = (key) => {
    const match = key.match(/^Additional email address (\d+)$/);
    return !match || parseInt(match[1], 10) <= additionalCount;
  };
  const next = {};
  Object.keys(regular)
    .filter(keepKey)
    .forEach((key) => {
      next[key] = regular[key];
    });
  next.Email = ordered.length ? ordered : regular.Email;
  next["Email address"] = ordered[0] ?? regular["Email address"] ?? "";
  for (let index = 1; index <= additionalCount; index++) {
    next[`Additional email address ${index}`] = ordered[index];
  }
  return { regular: next, additionalEmailCount: additionalCount };
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function parseYearMonth(value) {
  const text = String(value ?? "").trim();
  if (!text) return null;
  const match = text.match(/^(\d{4})-(\d{1,2})(?:-\d{1,2})?/);
  if (!match) return null;
  const year = match[1];
  const monthNumber = parseInt(match[2], 10);
  if (monthNumber < 1 || monthNumber > 12) return null;
  const month = MONTH_NAMES[monthNumber - 1] ?? String(monthNumber);
  return { month, year };
}

function normalizeMonthName(value) {
  const text = String(value ?? "").trim();
  if (!text) return "";
  if (MONTH_NAMES.some((name) => name.toLowerCase() === text.toLowerCase())) {
    return text;
  }
  const number = parseInt(text, 10);
  if (isNaN(number)) return text;
  if (number === 0) return "";
  if (number >= 1 && number <= 12) return MONTH_NAMES[number - 1];
  return text;
}

function normalizeEducationRow(row) {
  const school = firstPresentValue(row, [
    "School",
    "school",
    "schoolName",
    "School Name",
    "Institution",
    "Institution Name",
    "University",
    "College",
  ]);
  const degree = firstPresentValue(row, ["Degree", "degree"]);
  const major = firstPresentValue(row, [
    "Major",
    "major",
    "Major / area of study",
    "Field Of Study",
    "fieldOfStudy",
    "Study",
    "study",
  ]);
  const rawCountry = firstPresentValue(row, [
    "Country / Region",
    "Country",
    "country",
    "CountryRegion",
    "country_region",
  ]);
  const countryText = String(rawCountry ?? "").trim();
  const state = String(
    firstPresentValue(row, ["State", "state", "State / province"]) ?? "",
  ).trim();
  row.School = String(school ?? "").trim();
  row.Degree = String(degree ?? "").trim();
  row.Major = String(major ?? "").trim();
  let country = /^\d+$/.test(countryText) ? "" : countryText;
  if (!country && state) {
    const inferred = inferCountryFromStateProvince(state);
    if (inferred) country = inferred;
  }
  row["Country / Region"] = country ? resolveCountryLabel(country) : "";
}

function normalizeWorkExperienceRow(row) {
  const company = firstPresentValue(row, [
    "Company",
    "company",
    "companyName",
    "Employer",
    "Employer name",
  ]);
  const position = firstPresentValue(row, [
    "Position",
    "position",
    "title",
    "Title",
    "Job title",
  ]);
  row.Company = String(company ?? "").trim();
  row.Position = String(position ?? "").trim();
  row["Employer name"] = row.Company;
  row["Job title"] = row.Position;

  const start = firstPresentValue(row, ["Start", "start", "startDate"]);
  const parsedStart = parseYearMonth(String(start ?? "").trim());
  const startMonth = firstPresentValue(row, [
    "Start Date - Month",
    "Start Month",
    "StartDateMonth",
    "Month",
    "month",
    "startMonth",
  ]);
  const startYear = firstPresentValue(row, [
    "Start Date - Year",
    "Start Year",
    "StartDateYear",
    "Year",
    "year",
    "startYear",
  ]);
  if (parsedStart) {
    row["Start Month"] = parsedStart.month;
    row["Start Year"] = parsedStart.year;
  } else {
    row["Start Month"] = normalizeMonthName(startMonth);
    row["Start Year"] = String(row["Start Year"] ?? startYear ?? "").trim();
  }

  const isCurrentRaw = row.isCurrent ?? row.is_current;
  const hasIsCurrent =
    isCurrentRaw != null && String(isCurrentRaw).trim() !== "";
  const isCurrentTruthy =
    isCurrentRaw === true ||
    String(isCurrentRaw ?? "").toLowerCase() === "yes" ||
    String(isCurrentRaw ?? "").toLowerCase() === "true";
  const currentJobRaw = firstPresentValue(row, [
    "This is your current job",
    "currentJob",
    "current_job",
  ]);
  const currentJobTruthy =
    currentJobRaw === true ||
    String(currentJobRaw ?? "").toLowerCase() === "yes" ||
    String(currentJobRaw ?? "").toLowerCase() === "true";
  const currentJobFalsey =
    String(currentJobRaw ?? "") === "0" ||
    String(currentJobRaw ?? "").toLowerCase() === "false";
  const isCurrent = hasIsCurrent
    ? isCurrentTruthy
    : !currentJobFalsey && currentJobTruthy;

  row["This is your current job"] = isCurrent;
  row.isCurrent = isCurrent;
  row.is_current = isCurrent;
  row.currentJob = isCurrent;
  row.current_job = isCurrent;

  if (isCurrent) {
    row["End Month"] = "";
    row["End Year"] = "";
  } else {
    const end = firstPresentValue(row, ["End", "end", "endDate"]);
    const parsedEnd = parseYearMonth(String(end ?? "").trim());
    const endMonth = firstPresentValue(row, [
      "End Date - Month",
      "End Month",
      "EndDateMonth",
      "endMonth",
    ]);
    const endYear = firstPresentValue(row, [
      "End Date - Year",
      "End Year",
      "EndDateYear",
      "endYear",
    ]);
    if (parsedEnd) {
      row["End Month"] = parsedEnd.month;
      row["End Year"] = parsedEnd.year;
    } else {
      row["End Month"] = normalizeMonthName(endMonth);
      row["End Year"] = String(endYear ?? "").trim();
    }
  }

  const rawCountry = firstPresentValue(row, [
    "Country / Region",
    "Country",
    "country",
    "CountryRegion",
    "country_region",
  ]);
  const city = firstPresentValue(row, ["City", "city"]);
  const state = String(
    firstPresentValue(row, ["State", "state", "State / province"]) ?? "",
  ).trim();
  const countryText = String(rawCountry ?? "").trim();
  let country = /^\d+$/.test(countryText) ? "" : countryText;
  if (!country && state) {
    const inferred = inferCountryFromStateProvince(state);
    if (inferred) country = inferred;
  }
  row["Country / Region"] = country ? resolveCountryLabel(country) : "";
  row.City = String(city ?? "").trim();
  row.State = state;
  row["State / province"] = state;
}

function normalizeAnswerCollections(answer) {
  if (Array.isArray(answer.education)) {
    answer.education.forEach((row) => {
      if (row && typeof row === "object") normalizeEducationRow(row);
    });
  }
  if (Array.isArray(answer.workExperience)) {
    answer.workExperience.forEach((row) => {
      if (row && typeof row === "object") normalizeWorkExperienceRow(row);
    });
  }
}

function equalsNameParts(value, firstName, lastName) {
  if (!value || !value.trim()) return false;
  const text = value.trim();
  const forward = [firstName, lastName].filter(Boolean).join(" ");
  const reverse = [lastName, firstName].filter(Boolean).join(" ");
  return (
    text === firstName ||
    text === lastName ||
    text === forward ||
    text === reverse
  );
}

function pickSchoolName(record, firstName, lastName) {
  const keys = [
    "School",
    "school",
    "schoolName",
    "School Name",
    "Institution",
    "Institution Name",
    "University",
    "College",
  ];
  for (const key of keys) {
    const value = record?.[key];
    if (value == null) continue;
    const text = String(Array.isArray(value) ? value[0] : (value ?? "")).trim();
    if (text && !equalsNameParts(text, firstName, lastName)) return text;
  }
  return "";
}

function pickEmployerName(record, firstName, lastName) {
  const keys = [
    "Company",
    "company",
    "Employer",
    "Employer name",
    "companyName",
  ];
  for (const key of keys) {
    const value = record?.[key];
    if (value == null) continue;
    const text = String(Array.isArray(value) ? value[0] : (value ?? "")).trim();
    if (text && !equalsNameParts(text, firstName, lastName)) return text;
  }
  return "";
}

const DEGREE_STATUS_VALUES = ["Graduated", "Incomplete", "Now attending"];
const DEGREE_KEYWORDS = [
  "bachelor",
  "master",
  "phd",
  "doctorate",
  "associate",
  "b.s.",
  "m.s.",
  "b.a.",
  "m.a.",
  "bachelor's",
  "master's",
  "ph.d.",
  "mba",
  "bs",
  "ms",
  "ba",
  "ma",
];

function asTrimmedText(value) {
  if (value == null) return "";
  if (Array.isArray(value)) return String(value[0] ?? "").trim();
  return String(value).trim();
}

function looksLikeDegreeName(value) {
  if (!value || !value.trim()) return false;
  const text = value.trim().toLowerCase();
  return DEGREE_KEYWORDS.some(
    (keyword) =>
      text === keyword ||
      text.startsWith(keyword + " ") ||
      text.includes(" " + keyword),
  );
}

function normalizeDegreeStatus(regular, answer) {
  const status = asTrimmedText(regular["Degree Status"]);
  const isValid = DEGREE_STATUS_VALUES.some(
    (candidate) => candidate.toLowerCase() === status.toLowerCase(),
  );
  if (isValid) return;
  if (Array.isArray(answer.education) && answer.education.length > 0) {
    const first = answer.education[0];
    const fromEducation = asTrimmedText(
      first?.DegreeStatus ??
        first?.["Degree Status"] ??
        first?.status ??
        first?.Status,
    );
    if (
      DEGREE_STATUS_VALUES.some(
        (candidate) => candidate.toLowerCase() === fromEducation.toLowerCase(),
      )
    ) {
      regular["Degree Status"] = fromEducation;
      return;
    }
  }
  if (status && looksLikeDegreeName(status)) {
    const degree = asTrimmedText(regular.Degree);
    if (!degree) regular.Degree = status.trim();
    regular["Degree Status"] = "";
    return;
  }
  regular["Degree Status"] = "";
}

function shapeRegularAnswer(answer, autofillCountry) {
  const regular = answer?.regular;
  if (!regular || typeof regular !== "object") return;

  const firstName = String(asTrimmedText(regular["First name"])).trim();
  const lastName = String(asTrimmedText(regular["Last name"])).trim();
  const middleRaw = firstPresentValue(regular, [
    "Middle name",
    "Middle Name",
    "Middle",
    "Middle initial",
    "middleName",
    "middle_name",
    "middleInitial",
    "middle_initial",
  ]);
  const middle = String(middleRaw ?? "").trim();
  regular["Middle name"] =
    middle && equalsNameParts(middle, firstName, lastName) ? "" : middle;

  const suffix = firstPresentValue(regular, [
    "Suffix",
    "suffix",
    "Name suffix",
    "nameSuffix",
    "name_suffix",
  ]);
  regular.Suffix = String(suffix ?? "").trim();

  const addressRaw = firstPresentValue(regular, [
    "Address",
    "address",
    "street",
    "streetAddress",
    "street_address",
    "Address Line 1",
    "addressLine1",
  ]);
  const zip = String(
    firstPresentValue(regular, [
      "Zip/postal code",
      "Zip",
      "zip",
      "PostalCode",
      "postal_code",
      "Zip code",
    ]) ?? "",
  ).trim();
  regular["Zip/postal code"] = zip;
  let address = String(addressRaw ?? "").trim();
  if (address && zip && address === zip) address = "";
  if (address && looksLikePostalCode(address)) address = "";
  regular.Address = address;

  const countryInput = String(autofillCountry ?? "").trim();
  const countryLabel = countryInput ? resolveCountryLabel(countryInput) : "";
  regular["Country / Region"] = countryLabel;
  for (const key of Object.keys(regular)) {
    if (isCountryFieldKey(key)) regular[key] = countryLabel;
  }

  regular.City = String(
    firstPresentValue(regular, ["City", "city"]) ?? "",
  ).trim();

  let state = String(
    firstPresentValue(regular, [
      "State / province",
      "State",
      "state",
      "stateProvince",
      "state_province",
    ]) ?? "",
  ).trim();
  if (
    !state &&
    (regular["Country / Region"] === "United States" ||
      regular["Country / Region"] === "Canada")
  ) {
    const preferred = String(
      firstPresentValue(regular, [
        "Which locations(s) do you prefer working out of?",
        "Which location(s) do you prefer working out of?",
        "locations",
        "Locations",
        "preferred_locations",
        "preferredLocations",
      ]) ?? "",
    ).trim();
    const extracted = extractStateFromPreferredLocation(preferred);
    if (extracted) state = extracted;
  }
  regular["State / province"] = state;
  regular.State = state;

  if (Array.isArray(answer.education) && answer.education.length > 0) {
    const first = answer.education[0];
    const school = pickSchoolName(first, firstName, lastName);
    if (school) regular["School name"] = school;
    if (first?.Degree) regular.Degree = first.Degree;
    if (first?.Major) regular["Major / area of study"] = first.Major;
  }

  if (
    Array.isArray(answer.workExperience) &&
    answer.workExperience.length > 0
  ) {
    const first = answer.workExperience[0];
    const employer = pickEmployerName(first, firstName, lastName);
    if (employer) regular["Employer name"] = employer;
    if (first?.Position) regular["Job title"] = first.Position;
  }

  normalizeDegreeStatus(regular, answer);

  const alphabetRaw = firstPresentValue(regular, [
    "Have you worked at Alphabet before?",
    "Alphabet experience",
    "alphabetExperience",
    "alphabet_experience",
    "workedAtAlphabet",
  ]);
  const alphabet = String(alphabetRaw ?? "")
    .trim()
    .toLowerCase();
  regular["Have you worked at Alphabet before?"] =
    alphabet === "yes" ||
    alphabet === "true" ||
    alphabet === "1" ||
    alphabet === "y"
      ? "yes"
      : "no";

  if (
    !asTrimmedText(regular.Month) &&
    Array.isArray(answer.education) &&
    answer.education.length > 0
  ) {
    const first = answer.education[0];
    const month = firstPresentValue(first, [
      "Month",
      "month",
      "Start Date - Month",
      "StartDateMonth",
    ]);
    if (month) regular.Month = month;
  }

  const schoolName = asTrimmedText(regular["School name"]);
  if (schoolName && equalsNameParts(schoolName, firstName, lastName)) {
    regular["School name"] = "";
  }
  const employerName = asTrimmedText(regular["Employer name"]);
  if (employerName && equalsNameParts(employerName, firstName, lastName)) {
    regular["Employer name"] = "";
  }

  let workExperience = [];
  if (
    Array.isArray(answer.workExperience) &&
    answer.workExperience.length > 0
  ) {
    workExperience = answer.workExperience
      .filter((row) => row && typeof row === "object")
      .map((row) => {
        const next = { ...row };
        const employer = pickEmployerName(next, firstName, lastName);
        if (employer) next["Employer name"] = employer;
        return next;
      });
  }
  regular["Work experience"] = workExperience;
  regular["Applying for your first job?"] = (workExperience.length, "no");
  for (let index = 1; index <= workExperience.length; index++) {
    const row = workExperience[index - 1];
    if (!row) continue;
    regular[`Work experience ${index} - Employer name`] =
      asTrimmedText(row["Employer name"]) ?? "";
    regular[`Work experience ${index} - Job title`] =
      asTrimmedText(row["Job title"]) ?? "";
  }

  const skillsLabel = skillsOperation.GOOGLE_SKILLS_LABEL;
  const skillsFromAnswer = Array.isArray(answer.skills)
    ? cleanStringList(answer.skills)
    : [];
  if (skillsFromAnswer.length > 0) {
    regular[skillsLabel] = skillsFromAnswer;
  } else {
    const existing = regular[skillsLabel];
    if (Array.isArray(existing))
      regular[skillsLabel] = cleanStringList(existing);
    else if (typeof existing === "string" && existing.trim()) {
      regular[skillsLabel] = existing.trim();
    }
  }

  const preferredLabels = [
    "Which locations(s) do you prefer working out of?",
    "Which location(s) do you prefer working out of?",
  ];
  const preferredValue = firstPresentValue(regular, [
    "locations",
    "Locations",
    "preferred_locations",
    "preferredLocations",
    ...preferredLabels,
  ]);
  if (preferredValue != null && preferredValue !== "") {
    const text = Array.isArray(preferredValue)
      ? preferredValue
          .map((item) => String(item ?? "").trim())
          .filter(Boolean)
          .join(", ")
      : String(preferredValue).trim();
    if (text) {
      for (const label of preferredLabels) regular[label] = text;
    }
  }

  const preferredLocation = firstPresentValue(regular, [
    "Preferred Location",
    "preferredLocation",
    "Preferred location",
    "preferred_location",
  ]);
  if (preferredLocation) {
    regular["Preferred Location"] = String(preferredLocation).trim();
  }

  const additionalLocationKeys = [
    "Additional location(s)",
    "additionalLocations",
    "Additional locations",
    "additional_locations",
  ];
  let additionalLocations = regular["Additional location(s)"];
  if (additionalLocations == null || additionalLocations === "") {
    for (const key of additionalLocationKeys) {
      const value = regular?.[key];
      if (value == null) continue;
      if (Array.isArray(value) && value.length > 0) {
        additionalLocations = value;
        break;
      }
      if (typeof value === "string" && value.trim() !== "") {
        additionalLocations = value.trim();
        break;
      }
    }
    if (additionalLocations != null && additionalLocations !== "") {
      regular["Additional location(s)"] = additionalLocations;
    }
  }

  const gender = firstPresentValue(regular, [
    "Gender",
    "gender",
    "genderIdentity",
  ]);
  if (gender) regular.Gender = String(gender).trim();

  const veteran = firstPresentValue(regular, [
    "Veteran status",
    "veteranStatus",
    "veteran_status",
  ]);
  if (veteran) regular["Veteran status"] = String(veteran).trim();

  const disability = firstPresentValue(regular, [
    "Disability",
    "disability",
    "disabilityStatus",
  ]);
  if (disability) regular.Disability = String(disability).trim();

  if (
    regular["Race / ethnic group"] == null ||
    regular["Race / ethnic group"] === ""
  ) {
    const race = firstPresentValue(regular, [
      "Race / ethnic group",
      "raceEthnicGroup",
      "race_ethnic_group",
      "race",
    ]);
    if (race !== "") {
      regular["Race / ethnic group"] = Array.isArray(race)
        ? race
        : String(race).trim();
    }
  }

  const consent = firstPresentValue(regular, [
    "Privacy policy consent",
    "privacyPolicyConsent",
    "consent",
    "privacy_consent",
  ]);
  if (consent !== "") regular["Privacy policy consent"] = consent;
  if (
    regular["Consent terms"] === undefined ||
    regular["Consent terms"] === null ||
    String(regular["Consent terms"] ?? "").trim() === ""
  ) {
    regular["Consent terms"] = "true";
  }

  let emails = [];
  if (Array.isArray(regular.Email) && regular.Email.length > 0) {
    emails = regular.Email.map((email) => String(email ?? "").trim()).filter(
      (email) => email !== "",
    );
  } else {
    const primary = String(
      firstPresentValue(regular, [
        "Email address",
        "email",
        "primaryEmail",
        "primary_email",
      ]) ?? "",
    ).trim();
    const additionalRaw = firstPresentValue(regular, [
      "Additional email",
      "additional_emails",
      "additionalEmails",
      "Additional emails",
    ]);
    let additional = [];
    if (Array.isArray(additionalRaw) && additionalRaw.length > 0) {
      additional = additionalRaw
        .map((email) => String(email ?? "").trim())
        .filter((email) => email !== "");
    } else if (typeof additionalRaw === "string" && additionalRaw.trim()) {
      additional = [additionalRaw.trim()];
    } else {
      for (let index = 1; index <= 20; index++) {
        const email = String(
          regular[`Additional email address ${index}`] ?? "",
        ).trim();
        if (email !== "") additional.push(email);
      }
    }
    const seen = new Set();
    const primaryKey = primary.toLowerCase();
    if (primaryKey) {
      emails.push(primary);
      seen.add(primaryKey);
    }
    for (const email of additional) {
      const key = email.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      emails.push(email);
    }
  }

  const additionalEmailCount = Math.max(0, emails.length - 1);
  const keepEmailKey = (key) => {
    const match = key.match(/^Additional email address (\d+)$/);
    return !match || parseInt(match[1], 10) <= additionalEmailCount;
  };
  const emailRegular = {};
  Object.keys(regular)
    .filter(keepEmailKey)
    .forEach((key) => {
      emailRegular[key] = regular[key];
    });
  emailRegular.Email = emails;
  emailRegular["Email address"] = emails[0] ?? "";
  for (let index = 1; index <= additionalEmailCount; index++) {
    emailRegular[`Additional email address ${index}`] = emails[index];
  }
  answer.regular = emailRegular;

  let phones = [];
  let phoneRegular = answer.regular;
  if (Array.isArray(phoneRegular.Phone) && phoneRegular.Phone.length > 0) {
    const seen = new Set();
    for (const phone of phoneRegular.Phone) {
      const normalized =
        normalizePhoneDigits(phone) ??
        (typeof phone === "string" ? phone.trim() : "");
      if (!normalized || seen.has(normalized)) continue;
      seen.add(normalized);
      phones.push(normalized);
    }
  } else {
    const primary = firstPresentValue(phoneRegular, [
      "Phone number",
      "Primary phone",
      "Mobile phone number",
      "Phone",
      "phone number",
      "Primary phone number",
      "phone",
      "primary_phone",
      "mobile",
    ]);
    const additionalRaw = firstPresentValue(phoneRegular, [
      "Additional phone",
      "additional_phones",
      "additionalPhones",
      "Additional phones",
    ]);
    let additional = [];
    if (Array.isArray(additionalRaw) && additionalRaw.length > 0) {
      additional = additionalRaw
        .map((phone) => String(phone ?? "").trim())
        .filter((phone) => phone !== "");
    } else if (typeof additionalRaw === "string" && additionalRaw.trim()) {
      additional = [additionalRaw.trim()];
    } else {
      for (let index = 1; index <= 20; index++) {
        const phone = String(
          phoneRegular[`Additional phone number ${index}`] ?? "",
        ).trim();
        if (phone !== "") additional.push(phone);
      }
    }
    const primaryNormalized = normalizePhoneDigits(primary);
    if (primaryNormalized) phones.push(primaryNormalized);
    const seen = new Set();
    if (primaryNormalized) seen.add(primaryNormalized);
    for (const phone of additional) {
      const normalized = normalizePhoneDigits(phone);
      if (!normalized || seen.has(normalized)) continue;
      seen.add(normalized);
      phones.push(normalized);
    }
  }

  const primaryPhone = phones[0] ?? "";
  const additionalPhoneCount = Math.max(0, phones.length - 1);
  const keepPhoneKey = (key) => {
    const match = key.match(/^Additional phone number (\d+)$/);
    return !match || parseInt(match[1], 10) <= additionalPhoneCount;
  };
  const nextPhoneRegular = {};
  Object.keys(phoneRegular)
    .filter(keepPhoneKey)
    .forEach((key) => {
      nextPhoneRegular[key] = phoneRegular[key];
    });
  nextPhoneRegular.Phone = phones;
  nextPhoneRegular["Primary phone"] = primaryPhone;
  nextPhoneRegular["Phone number"] = primaryPhone;
  for (let index = 1; index <= additionalPhoneCount; index++) {
    nextPhoneRegular[`Additional phone number ${index}`] = phones[index];
  }
  answer.regular = nextPhoneRegular;
}

const PHONE_PREFIX_RULES = [
  { prefix: "1", minTotal: 11 },
  { prefix: "86", minTotal: 13 },
  { prefix: "44", minTotal: 12 },
  { prefix: "372", minTotal: 10 },
  { prefix: "33", minTotal: 11 },
  { prefix: "49", minTotal: 12 },
  { prefix: "81", minTotal: 12 },
  { prefix: "91", minTotal: 12 },
  { prefix: "353", minTotal: 12 },
  { prefix: "358", minTotal: 12 },
  { prefix: "370", minTotal: 11 },
  { prefix: "371", minTotal: 11 },
  { prefix: "32", minTotal: 11 },
  { prefix: "31", minTotal: 11 },
  { prefix: "61", minTotal: 11 },
  { prefix: "82", minTotal: 12 },
  { prefix: "65", minTotal: 10 },
  { prefix: "852", minTotal: 11 },
  { prefix: "886", minTotal: 12 },
];

function normalizePhoneDigits(value) {
  let text;
  if (value == null) return null;
  if (Array.isArray(value) && value.length > 0) {
    text = String(value[0] ?? "").trim();
  } else {
    if (typeof value !== "string") return null;
    text = value.trim();
  }
  if (!text) return null;
  const digits = text.replace(/\D/g, "");
  if (!digits.length) return null;
  if (text.includes("+")) {
    const rules = [...PHONE_PREFIX_RULES].sort(
      (left, right) => right.prefix.length - left.prefix.length,
    );
    for (const { prefix, minTotal } of rules) {
      if (digits.length >= minTotal && digits.startsWith(prefix)) {
        const national = digits.slice(prefix.length);
        if (national.length >= 6 && national.length <= 15) return national;
      }
    }
  }
  return digits;
}

const PHONE_FIELD_LABELS = [
  "Phone number",
  "Primary phone",
  "Mobile phone number",
  "Phone",
  "phone number",
  "Primary phone number",
];

export function formatAnswer(answer, options = {}) {
  if (!answer) return answer;
  try {
    const { coverLetter: coverLetterInfo, autofillCountry } = options;
    let next = coverLetter.applyCoverLetterTextToAnswer(
      answer,
      coverLetterInfo,
      ["Cover letter", "Cover Letter"],
    );
    const coverLetterText = coverLetter.formatCoverLetterMarkdownAsText(
      coverLetterInfo?.markdown,
    );
    if (!next.regular || typeof next.regular !== "object") next.regular = {};
    const regular = { ...next.regular };
    if (
      coverLetterText &&
      !regular["Cover letter"] &&
      !regular["Cover Letter"]
    ) {
      regular["Cover letter"] = coverLetterText;
    }
    for (const key of Object.keys(regular)) {
      const value = regular[key];
      if (value != null && typeof value === "string") {
        regular[key] = value.trim();
      }
    }
    for (const label of PHONE_FIELD_LABELS) {
      const normalized = normalizePhoneDigits(regular[label]);
      if (normalized !== null) {
        regular[label] = normalized;
        break;
      }
    }
    normalizeAnswerCollections(next);
    next.regular = regular;
    shapeRegularAnswer(next, autofillCountry);
    return next;
  } catch {
    return answer;
  }
}
