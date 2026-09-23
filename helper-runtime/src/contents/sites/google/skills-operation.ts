// @ts-nocheck
/**
 * Google Careers — skills autocomplete fill helpers.
 */

import * as cancellation from "../../methods/cancellation.js";
import * as autocompleteListbox from "../../methods/autocomplete-listbox.js";

export const GOOGLE_SKILLS_LABEL =
  "What skills do you have? You can add up to 25 skills";

function normalizeSkillKey(value) {
  return normalizeWhitespaceLower(value);
}

function normalizeWhitespaceLower(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function optionTextKey(element) {
  return normalizeWhitespaceLower(element.textContent ?? "");
}

function chipLabelWithoutDeleteControl(cell) {
  const clone = cell.cloneNode(true);
  for (const deletable of Array.from(
    clone.querySelectorAll('[data-mdc-deletable="true"]'),
  )) {
    deletable.remove();
  }
  return optionTextKey(clone);
}

function findSkillsContainer(input) {
  return (
    input.closest(".rbgmcb")?.parentElement ??
    input.closest(".Pmvvze") ??
    input.parentElement
  );
}

function resolveLiveSkillsInput(input, root) {
  const ariaLabel = input.getAttribute("aria-label") ?? GOOGLE_SKILLS_LABEL;
  const container = findSkillsContainer(input);
  const searchRoots = [container, root].filter(
    (node, index, list) =>
      !!node && node.isConnected && list.indexOf(node) === index,
  );
  for (const searchRoot of searchRoots) {
    const live = Array.from(
      searchRoot.querySelectorAll('input[role="combobox"]'),
    ).find(
      (candidate) =>
        candidate.isConnected &&
        (candidate.getAttribute("aria-label") ?? "") === ariaLabel,
    );
    if (live) return live;
  }
  return null;
}

function findSkillsListbox(input, root) {
  return autocompleteListbox.findAutocompleteListbox(
    input,
    root,
    input.closest(".Pmvvze"),
  );
}

function describeSkillsListboxState(input, root) {
  const controlsId = input.getAttribute("aria-controls");
  const controlled = controlsId ? root.getElementById(controlsId) : null;
  const scope = input.closest(".Pmvvze");
  const labelKey = normalizeWhitespaceLower(
    input.getAttribute("aria-label") ?? "",
  );
  const scopedListboxes = scope
    ? Array.from(scope.querySelectorAll('[role="listbox"]'))
    : [];
  return {
    inputConnected: input.isConnected,
    inputExpanded: input.getAttribute("aria-expanded") === "true",
    controlledTargetPresent: !!controlled,
    controlledTargetRole: controlled?.getAttribute("role") ?? null,
    scopedListboxCount: scopedListboxes.filter((node) => node.isConnected)
      .length,
    exactLabelListboxCount: scopedListboxes.filter(
      (node) =>
        node.isConnected &&
        normalizeWhitespaceLower(node.getAttribute("aria-label") ?? "") ===
          labelKey,
    ).length,
  };
}

function logSkillsDebug(event, payload) {
  console.log(`[GoogleSkillsDebug] ${event} ${JSON.stringify(payload)}`);
}

export function findExactGoogleSkillOption(listbox, skill) {
  const key = normalizeWhitespaceLower(skill);
  if (!key) return null;
  return (
    Array.from(listbox.querySelectorAll('[role="option"]')).find(
      (option) => optionTextKey(option) === key,
    ) ?? null
  );
}

export function readGoogleSkillChips(input, root = document) {
  const scope = input.closest(".Pmvvze");
  const searchRoot = scope ?? findSkillsContainer(input) ?? root;
  const chips = new Set();
  const grids = Array.from(searchRoot.querySelectorAll('[role="grid"]'));
  for (const grid of grids) {
    if (!grid.isConnected || grid.closest('[role="listbox"]')) continue;
    for (const row of Array.from(grid.querySelectorAll('[role="row"]'))) {
      if (!row.isConnected) continue;
      const cell = row.querySelector('[role="gridcell"]');
      const isDeletable =
        row.getAttribute("data-mdc-deletable") === "true" ||
        !!row.querySelector('[data-mdc-deletable="true"]');
      const label =
        cell && isDeletable ? chipLabelWithoutDeleteControl(cell) : "";
      if (label) chips.add(label);
    }
  }
  return [...chips];
}

function setInputValue(input, value) {
  const descriptor =
    typeof HTMLInputElement === "undefined"
      ? undefined
      : Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
  try {
    descriptor?.set?.call(input, value);
  } catch {
    /* ignore */
  }
  if (input.value !== value) input.value = value;
}

function typeSkillIntoInput(input, skill) {
  input.focus();
  input.dispatchEvent(new Event("focusin", { bubbles: true }));
  setInputValue(input, "");
  input.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
  input.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  setInputValue(input, skill);
  input.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
  input.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  try {
    input.dispatchEvent(
      new KeyboardEvent("keydown", { bubbles: true, key: skill[0] || "a" }),
    );
  } catch {
    input.dispatchEvent(new Event("keydown", { bubbles: true }));
  }
}

function dispatchPointerOrMouse(target, type, point) {
  const isDown = type === "pointerdown" || type === "mousedown";
  try {
    const event =
      type.startsWith("pointer") && typeof PointerEvent !== "undefined"
        ? new PointerEvent(type, {
            bubbles: true,
            cancelable: true,
            composed: true,
            view: window,
            button: 0,
            buttons: isDown ? 1 : 0,
            clientX: point.x,
            clientY: point.y,
            pointerId: 1,
            pointerType: "mouse",
            isPrimary: true,
            pressure: isDown ? 0.5 : 0,
          })
        : typeof MouseEvent !== "undefined"
          ? new MouseEvent(type, {
              bubbles: true,
              cancelable: true,
              composed: true,
              view: window,
              button: 0,
              buttons: isDown ? 1 : 0,
              clientX: point.x,
              clientY: point.y,
              detail: 1,
            })
          : new Event(type, { bubbles: true, cancelable: true });
    return target.dispatchEvent(event);
  } catch {
    return target.dispatchEvent(
      new Event(type, { bubbles: true, cancelable: true }),
    );
  }
}

async function clickSkillOption(option) {
  const clickTarget = option.querySelector('[jsname="K4r5Ff"]') ?? option;
  try {
    option.scrollIntoView({ block: "nearest", inline: "nearest" });
  } catch {
    /* ignore */
  }
  try {
    option.focus({ preventScroll: true });
  } catch {
    /* ignore */
  }
  const rect = clickTarget.getBoundingClientRect?.();
  const point = {
    x: rect ? rect.left + rect.width / 2 : 0,
    y: rect ? rect.top + rect.height / 2 : 0,
  };
  const accepted = [];
  accepted.push(dispatchPointerOrMouse(clickTarget, "pointerdown", point));
  accepted.push(dispatchPointerOrMouse(clickTarget, "mousedown", point));
  await new Promise((resolve) => setTimeout(resolve, 50));
  accepted.push(dispatchPointerOrMouse(clickTarget, "pointerup", point));
  accepted.push(dispatchPointerOrMouse(clickTarget, "mouseup", point));
  accepted.push(dispatchPointerOrMouse(clickTarget, "click", point));
  if (option.isConnected) option.click();
  return {
    targetTag: clickTarget.tagName?.toLowerCase() ?? null,
    targetJsname: clickTarget.getAttribute("jsname"),
    hasLayoutRect: !!rect && rect.width > 0 && rect.height > 0,
    dispatchAccepted: accepted.every(Boolean),
  };
}

function clearSkillsInput(input) {
  setInputValue(input, "");
  input.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
  input.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
}

function isFillInterruption(error) {
  return (
    error instanceof cancellation.CancelledError ||
    error instanceof cancellation.SkippedError
  );
}

export async function fillGoogleSkillsAutocomplete(
  input,
  skills,
  options = {},
) {
  const root = options.root ?? document;
  const wait = options.wait ?? cancellation.cancellableDelay;
  let attemptCounter = 0;

  const readCommittedItems = async () => {
    cancellation.checkpoint();
    const live = resolveLiveSkillsInput(input, root);
    return live ? readGoogleSkillChips(live, root) : [];
  };

  const runner = {
    readCommittedItems,
    readCommittedItemsOnInterruption() {
      const live = resolveLiveSkillsInput(input, root);
      return live ? readGoogleSkillChips(live, root) : [];
    },
    async attemptExactItem(skill) {
      cancellation.checkpoint();
      attemptCounter += 1;
      const attempt = attemptCounter;
      let typed = false;
      let committedCount = 0;
      try {
        const live = resolveLiveSkillsInput(input, root);
        if (!live) {
          logSkillsDebug("attempt:no-live-input", { attempt });
          return;
        }
        logSkillsDebug("attempt:start", {
          attempt,
          ...describeSkillsListboxState(live, root),
        });
        typeSkillIntoInput(live, skill);
        typed = true;
        let clicked = false;
        let lastState = describeSkillsListboxState(live, root);
        for (let poll = 0; poll < 20; poll += 1) {
          cancellation.checkpoint();
          const current = resolveLiveSkillsInput(input, root);
          if (!current) break;
          const listbox = findSkillsListbox(current, root);
          lastState = describeSkillsListboxState(current, root);
          const option = listbox
            ? findExactGoogleSkillOption(listbox, skill)
            : null;
          if (option) {
            cancellation.checkpoint();
            logSkillsDebug("attempt:exact-option-found", {
              attempt,
              poll,
              optionCount:
                listbox?.querySelectorAll('[role="option"]').length ?? 0,
              listboxSource:
                listbox?.id &&
                listbox.id === current.getAttribute("aria-controls")
                  ? "aria-controls"
                  : "scoped-label",
            });
            const clickResult = await clickSkillOption(option);
            clicked = true;
            logSkillsDebug("attempt:click-dispatched", {
              attempt,
              optionConnectedAfterClick: option.isConnected,
              ...clickResult,
            });
            break;
          }
          await wait(100);
        }
        if (!clicked) {
          logSkillsDebug("attempt:no-exact-option", { attempt, ...lastState });
          return;
        }
        const skillKey = normalizeWhitespaceLower(skill);
        for (let poll = 0; poll < 10; poll += 1) {
          cancellation.checkpoint();
          const chips = await readCommittedItems();
          committedCount = chips.length;
          if (
            chips.some((chip) => normalizeWhitespaceLower(chip) === skillKey)
          ) {
            logSkillsDebug("attempt:chip-committed", {
              attempt,
              poll,
              committedCount,
            });
            return;
          }
          await wait(100);
        }
        logSkillsDebug("attempt:click-not-committed", {
          attempt,
          committedCount,
        });
      } finally {
        if (typed) {
          try {
            const live = resolveLiveSkillsInput(input, root);
            if (live) clearSkillsInput(live);
          } catch {
            /* ignore */
          }
        }
      }
    },
  };

  logSkillsDebug("fill:start", { requestedCount: skills.length });
  try {
    const result = await fillGoogleSkillItems(skills, runner, {
      maxItems: 25,
      maxAttempts: 2,
      isInterruption: isFillInterruption,
      onInterruptedResult: options.onInterruptedResult,
    });
    logSkillsDebug("fill:complete", {
      status: result.status,
      requestedCount: result.requestedItems.length,
      succeededCount: result.succeededItems.length,
      failedCount: result.failedItems.length,
    });
    return result;
  } catch (error) {
    logSkillsDebug("fill:interrupted", {
      interruption: isFillInterruption(error),
      errorName: error instanceof Error ? error.name : typeof error,
    });
    throw error;
  }
}

function uniqueSkillEntries(skills) {
  const seen = new Set();
  const entries = [];
  for (const skill of skills) {
    const display = skill.trim();
    const key = normalizeSkillKey(skill);
    if (!display || seen.has(key)) continue;
    seen.add(key);
    entries.push({ display, key });
  }
  return entries;
}

function skillKeySet(items) {
  return new Set(items.map(normalizeSkillKey).filter(Boolean));
}

function resolveFillStatus(requested, succeeded, failed) {
  if (requested.length > 0 && failed.length === 0) return "filled";
  if (succeeded.length > 0 && failed.length > 0) return "partial";
  return "missing";
}

function finiteOrDefault(value, fallback) {
  return Number.isFinite(value) ? Math.max(0, Math.floor(value)) : fallback;
}

export async function fillGoogleSkillItems(skills, runner, options = {}) {
  const entries = uniqueSkillEntries(skills);
  const requestedItems = entries.map(({ display }) => display);
  const succeededItems = [];
  const failedItems = [];
  const attemptedItems = [];
  const maxItems = finiteOrDefault(options.maxItems, 25);
  const maxAttempts = Math.max(1, finiteOrDefault(options.maxAttempts, 2));
  let inFlight = null;

  const partialResult = () => ({
    status: succeededItems.length > 0 ? "partial" : "missing",
    requestedItems: [...attemptedItems],
    succeededItems: [...succeededItems],
    failedItems: [...failedItems],
  });

  const interruptedResultFromCommitted = (committed) => {
    const committedKeys = skillKeySet(committed);
    const attemptedKeys = new Set(attemptedItems.map(normalizeSkillKey));
    const scoped = entries.filter(
      (entry) =>
        attemptedKeys.has(entry.key) ||
        (inFlight?.key === entry.key && committedKeys.has(entry.key)),
    );
    const succeeded = [];
    const failed = [];
    for (const entry of scoped) {
      if (committedKeys.has(entry.key)) succeeded.push(entry.display);
      else failed.push(entry.display);
    }
    return {
      status: succeeded.length > 0 ? "partial" : "missing",
      requestedItems: scoped.map(({ display }) => display),
      succeededItems: succeeded,
      failedItems: failed,
    };
  };

  const handleInterruption = async (error) => {
    if (!options.isInterruption?.(error)) return;
    let result = partialResult();
    if (runner.readCommittedItemsOnInterruption) {
      try {
        result = interruptedResultFromCommitted([
          ...(await runner.readCommittedItemsOnInterruption()),
        ]);
      } catch {
        /* ignore */
      }
    }
    try {
      await options.onInterruptedResult?.(result);
    } catch {
      /* ignore */
    }
    throw error;
  };

  const readCommittedKeys = async () => {
    try {
      const chips = [...(await runner.readCommittedItems())];
      return { ok: true, keys: skillKeySet(chips) };
    } catch (error) {
      await handleInterruption(error);
      return { ok: false };
    }
  };

  let committed = await readCommittedKeys();

  const failRemainingFrom = (startIndex, keys) => {
    for (const entry of entries.slice(startIndex)) {
      if (keys.has(entry.key)) succeededItems.push(entry.display);
      else failedItems.push(entry.display);
      attemptedItems.push(entry.display);
    }
  };

  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index];
    let keys = committed.ok ? committed.keys : new Set();
    if (committed.ok && keys.has(entry.key)) {
      succeededItems.push(entry.display);
      attemptedItems.push(entry.display);
      continue;
    }
    if (committed.ok && keys.size >= maxItems) {
      failRemainingFrom(index, keys);
      break;
    }

    let succeeded = false;
    let hitMax = false;
    inFlight = entry;
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      try {
        await runner.attemptExactItem(entry.display);
      } catch (error) {
        await handleInterruption(error);
      }
      committed = await readCommittedKeys();
      keys = committed.ok ? committed.keys : new Set();
      if (committed.ok && keys.has(entry.key)) {
        succeeded = true;
        break;
      }
      if (committed.ok && keys.size >= maxItems) {
        hitMax = true;
        break;
      }
    }

    if (succeeded) {
      succeededItems.push(entry.display);
      attemptedItems.push(entry.display);
      inFlight = null;
      continue;
    }
    if (hitMax) {
      failRemainingFrom(index, keys);
      inFlight = null;
      break;
    }
    failedItems.push(entry.display);
    attemptedItems.push(entry.display);
    inFlight = null;
  }

  const finalCommitted = await readCommittedKeys();
  const finalKeys = finalCommitted.ok ? finalCommitted.keys : new Set();
  const finalSucceeded = finalCommitted.ok
    ? entries
        .filter(({ key }) => finalKeys.has(key))
        .map(({ display }) => display)
    : [];
  const finalFailed = finalCommitted.ok
    ? entries
        .filter(({ key }) => !finalKeys.has(key))
        .map(({ display }) => display)
    : [...requestedItems];

  return {
    status: resolveFillStatus(requestedItems, finalSucceeded, finalFailed),
    requestedItems,
    succeededItems: finalSucceeded,
    failedItems: finalFailed,
  };
}
