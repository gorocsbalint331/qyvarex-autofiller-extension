// @ts-nocheck

import * as delay from "../../../utils/delay.js";

const COUNTRY_ALIAS_GROUPS = [
  ["us", "usa", "u s", "u s a", "united states", "united states of america"],
  ["ca", "canada"],
  ["uk", "gb", "great britain", "united kingdom"],
];

const MENU_POLL_COUNT = 16;
const VALUE_POLL_COUNT = 12;
const POLL_INTERVAL_MS = 50;

export function normalizeGreenhouseCountry(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getCountryAliases(value) {
  const normalizedValue = normalizeGreenhouseCountry(value);
  if (!normalizedValue) {
    return new Set();
  }

  const aliasGroup = COUNTRY_ALIAS_GROUPS.find((group) =>
    group.includes(normalizedValue),
  );
  return new Set(aliasGroup ?? [normalizedValue]);
}

function findMatchingCountryOptions(country, options) {
  const aliases = getCountryAliases(country);
  if (aliases.size === 0) {
    return [];
  }

  return options.filter((option) =>
    aliases.has(normalizeGreenhouseCountry(option.textContent)),
  );
}

export function resolveGreenhouseCountryOption(country, options) {
  const matches = findMatchingCountryOptions(country, options);
  return matches.length === 1 ? matches[0] : null;
}

function normalizeCountryLabel(value) {
  return String(value ?? "")
    .trim()
    .replace(/[\*\uff0a]+\s*$/, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

export function isGreenhouseGeographicCountryLabel(value) {
  return normalizeCountryLabel(value) === "country";
}

function findCountryControl(element) {
  if (!element) {
    return null;
  }

  const nestedControl = element.querySelector?.(
    'input[class*="select__input"], input, select, [role="combobox"]',
  );
  return nestedControl ?? element;
}

export function isGreenhouseBuiltInGeographicCountryControl(element) {
  const control = findCountryControl(element);
  if (
    !control ||
    element?.closest?.(".phone-input__country") ||
    control.closest?.(".phone-input__country")
  ) {
    return false;
  }

  const autocomplete = String(
    control.getAttribute?.("autocomplete") ?? "",
  )
    .trim()
    .toLowerCase();
  const name = String(control.getAttribute?.("name") ?? "")
    .trim()
    .toLowerCase();
  const id = String(control.getAttribute?.("id") ?? "")
    .trim()
    .toLowerCase();
  const controlIdentity = `${name} ${id}`;

  if (/(?:question|answer|custom)/.test(controlIdentity)) {
    return false;
  }

  const hasCountryMetadata =
    autocomplete === "country-name" ||
    name === "country" ||
    /\[country\]$/.test(name);
  const hasCountryId =
    /^(?:(?:job[_-]?application|application|candidate|address)[_-])?country(?:[_-](?:input|select|field|dropdown))?$/.test(
      id,
    );

  return hasCountryMetadata || hasCountryId;
}

export function isGreenhouseGeographicCountryRule(rule) {
  return Boolean(
    isGreenhouseGeographicCountryLabel(rule?.label) &&
      isGreenhouseBuiltInGeographicCountryControl(rule?.$input),
  );
}

export function partitionGreenhouseCountryRules(rules) {
  const geographicCountryRules = [];
  const regularRules = [];

  for (const rule of rules) {
    if (isGreenhouseGeographicCountryRule(rule)) {
      geographicCountryRules.push(rule);
    } else {
      regularRules.push(rule);
    }
  }

  return { geographicCountryRules, regularRules };
}

export function reconcileGreenhouseCountryProgress(
  rules,
  countryWasCommitted,
  progress,
) {
  const { geographicCountryRules } = partitionGreenhouseCountryRules(rules);

  for (const rule of geographicCountryRules) {
    if (countryWasCommitted) {
      progress.updateFilledProgress(rule.label);
    } else {
      progress.updateMissedProgress(rule.label);
    }
  }
}

export async function runGreenhouseCountryPrefill(prefillContext) {
  await prefillContext.preFillForm();

  try {
    const autofillInfo = await prefillContext.fetchAutofillInfo();
    const country = autofillInfo?.location?.country;

    if (typeof country !== "string" || !country.trim()) {
      return { country: null, committed: false };
    }

    const trimmedCountry = country.trim();
    return {
      country: trimmedCountry,
      committed: await prefillContext.fillCountry(trimmedCountry),
    };
  } catch {
    return { country: null, committed: false };
  }
}

function setReactInputValue(input, value) {
  const prototype = Object.getPrototypeOf(input);
  const valueSetter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;

  if (valueSetter) {
    valueSetter.call(input, value);
  } else {
    input.value = value;
  }

  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
}

function closeReactSelect(input) {
  input.dispatchEvent(
    new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
  );
  input.dispatchEvent(
    new KeyboardEvent("keyup", { key: "Escape", bubbles: true }),
  );
  input.blur();
}

function readReactSelectValue(container) {
  const selectedValue = container.querySelector(".select__single-value");
  if (selectedValue) {
    return String(selectedValue.textContent ?? "").trim();
  }

  const control = container.querySelector(".select__control");
  return String(
    control?.getAttribute?.("data-value") ?? control?.value ?? "",
  ).trim();
}

function isVisible(element) {
  if (!element || element.isConnected === false) {
    return false;
  }

  try {
    const style =
      typeof getComputedStyle === "function"
        ? getComputedStyle(element)
        : null;
    if (style?.display === "none" || style?.visibility === "hidden") {
      return false;
    }
  } catch {
    return false;
  }

  return (
    element.offsetParent !== null ||
    typeof element.getClientRects !== "function" ||
    element.getClientRects().length !== 0
  );
}

function findOpenReactSelectMenu(input, container) {
  if (input.getAttribute("aria-expanded") !== "true") {
    return null;
  }

  const controlledMenuId = input.getAttribute("aria-controls");
  const controlledMenu = controlledMenuId
    ? document.getElementById(controlledMenuId)
    : null;
  if (isVisible(controlledMenu)) {
    return controlledMenu;
  }

  const nestedMenu = container.querySelector(
    ".select__menu [role='listbox'], .select__menu",
  );
  return isVisible(nestedMenu) ? nestedMenu : null;
}

function getEnabledReactSelectOptions(menu) {
  return Array.from(menu.querySelectorAll(".select__option")).filter(
    (option) =>
      option.getAttribute("aria-disabled") !== "true" &&
      !option.classList.contains("select__option--is-disabled"),
  );
}

async function openReactSelectAndType(input, container, country) {
  container.querySelector(".select__control")?.click();
  input.focus();
  setReactInputValue(input, country);
}

async function pollForCountryOption(input, container, country) {
  for (let attempt = 0; attempt < MENU_POLL_COUNT; attempt += 1) {
    const menu = findOpenReactSelectMenu(input, container);
    if (menu) {
      const options = getEnabledReactSelectOptions(menu);
      const matches = findMatchingCountryOptions(country, options);

      if (matches.length === 1) {
        return matches[0];
      }
      if (matches.length > 1) {
        break;
      }
    }

    await delay.delay(POLL_INTERVAL_MS);
  }

  return null;
}

async function pollForReactSelectValue(container, expectedCountry) {
  for (let attempt = 0; attempt < VALUE_POLL_COUNT; attempt += 1) {
    const selectedValue = readReactSelectValue(container);
    const hasExpectedValue = expectedCountry
      ? resolveGreenhouseCountryOption(expectedCountry, [
          { textContent: selectedValue },
        ])
      : !normalizeGreenhouseCountry(selectedValue);

    if (hasExpectedValue) {
      return true;
    }

    await delay.delay(POLL_INTERVAL_MS);
  }

  return false;
}

async function selectCountryOption(input, container, country) {
  await openReactSelectAndType(input, container, country);
  const option = await pollForCountryOption(input, container, country);

  if (!option) {
    return false;
  }

  option.click();
  return await pollForReactSelectValue(container, country);
}

async function restoreReactSelectValue(input, container, previousValue) {
  if (previousValue) {
    setReactInputValue(input, "");
    closeReactSelect(input);
    if (await pollForReactSelectValue(container, previousValue)) {
      return true;
    }

    const restoredBySelection = await selectCountryOption(
      input,
      container,
      previousValue,
    );
    if (restoredBySelection) {
      setReactInputValue(input, "");
      closeReactSelect(input);
      return true;
    }

    setReactInputValue(input, previousValue);
    closeReactSelect(input);
    const restoredByInput = await pollForReactSelectValue(
      container,
      previousValue,
    );
    if (restoredByInput) {
      setReactInputValue(input, "");
      closeReactSelect(input);
    }
    return restoredByInput;
  }

  setReactInputValue(input, "");
  closeReactSelect(input);
  if (await pollForReactSelectValue(container, "")) {
    return true;
  }

  const clearButton = container.querySelector(".select__clear-indicator");
  clearButton?.click();
  setReactInputValue(input, "");

  if (readReactSelectValue(container)) {
    input.focus();
    input.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Backspace", bubbles: true }),
    );
    input.dispatchEvent(
      new KeyboardEvent("keyup", { key: "Backspace", bubbles: true }),
    );
  }

  closeReactSelect(input);
  return await pollForReactSelectValue(container, "");
}

function isCountryLabelElement(label) {
  return isGreenhouseGeographicCountryLabel(label.textContent);
}

function findGeographicCountrySelects() {
  const countrySelects = [];
  const seenInputs = new Set();
  const countryLabels = Array.from(document.querySelectorAll("label")).filter(
    isCountryLabelElement,
  );

  for (const label of countryLabels) {
    const container = label.closest(".select__container");
    const input = container?.querySelector('input[class*="select__input"]');

    if (
      !container ||
      !input ||
      !isGreenhouseBuiltInGeographicCountryControl(input) ||
      seenInputs.has(input)
    ) {
      continue;
    }

    seenInputs.add(input);
    countrySelects.push({ container, input });
  }

  return countrySelects;
}

export async function fillGreenhouseGeographicCountry(country) {
  const trimmedCountry = String(country ?? "").trim();
  if (!trimmedCountry) {
    return false;
  }

  const countrySelects = findGeographicCountrySelects();
  if (countrySelects.length !== 1) {
    return false;
  }

  const { container, input } = countrySelects[0];
  const previousValue = readReactSelectValue(container);
  const wasFilled = await selectCountryOption(
    input,
    container,
    trimmedCountry,
  );
  if (wasFilled) {
    return true;
  }

  const wasRestored = await restoreReactSelectValue(
    input,
    container,
    previousValue,
  );
  if (!wasRestored) {
    console.warn("[Greenhouse][Country] rollback failed", {
      reason: "not_restored",
    });
  }

  return false;
}
