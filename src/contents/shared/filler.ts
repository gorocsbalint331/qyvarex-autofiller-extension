// @ts-nocheck
/**
 * Autofill task queue, fill/value errors, and progress tracking.
 */

import { pick } from "lodash-es"
import { CancelledError, checkpoint } from "../methods/cancellation.ts"
import {
  sendProgressMessage,
  sendProgressPatchMessage,
} from "../methods/track.ts"
import { createAutofillProgressSessionId } from "../../core/autofill-progress-protocol.ts"
import {
  clearFieldFocusRules,
  setFieldFocusRules,
  updateFieldFocusRule,
} from "../../core/dom.ts"
import { PHONE_COUNTRY_CODE_ANSWER_LABELS } from "../../core/phone-country-code/answer.ts"
import {
  formatFieldLabelForDisplay,
  normalizeFieldLabel,
} from "../../utils/fieldLabel.ts"

const HIDDEN_PROGRESS_FIELD_LABELS = new Set(
  PHONE_COUNTRY_CODE_ANSWER_LABELS.map((label) => normalizeFieldLabel(label)),
)

const QueueStatus = {
  isIdle: 0,
  isRunning: 1,
  isPaused: 2,
}

function getSectionLabel(type) {
  if (type === "education") return "Education"
  if (type === "employment") return "Employment"
  return undefined
}

function formatProgressFieldLabel(label, type) {
  const sectionLabel = getSectionLabel(type)
  if (sectionLabel) return sectionLabel

  const displayLabel = formatFieldLabelForDisplay(label)
  const normalized = normalizeFieldLabel(displayLabel)

  if (
    /^(education|education history|education experience|educational details)( \d+)?$/.test(
      normalized,
    )
  ) {
    return "Education"
  }

  if (
    /^(employment|experience|work experience|workexperience|employment history|experience details)( \d+)?$/.test(
      normalized,
    )
  ) {
    return "Employment"
  }

  return displayLabel
}

export class FillError extends Error {
  constructor(message = "Fill failed") {
    super(message)
    this.name = "FillError"
  }
}

export class ValueError extends Error {
  constructor(message = "Value error") {
    super(message)
    this.name = "ValueError"
  }
}

export class TaskQueue {
  constructor() {
    this.queue = []
    this.status = QueueStatus.isIdle
  }

  add(task) {
    this.queue.push(task)
  }

  async run() {
    if (this.status !== QueueStatus.isIdle) {
      throw Error(`Queue is already started. Current status: ${this.status}`)
    }
    await this.drain()
  }

  pause() {
    this.status = QueueStatus.isPaused
  }

  async resume() {
    if (this.status !== QueueStatus.isPaused) {
      throw Error("Can't resume the queue not paused.")
    }
    await this.drain()
  }

  async drain() {
    this.status = QueueStatus.isRunning
    try {
      await this.executeNextTask()
    } finally {
      if (this.status === QueueStatus.isRunning) {
        this.status = QueueStatus.isIdle
      }
    }
  }

  clear() {
    this.queue = []
    this.status = QueueStatus.isIdle
  }

  async executeNextTask() {
    if (this.queue.length === 0) {
      this.status = QueueStatus.isIdle
      return
    }

    if (this.status === QueueStatus.isPaused) {
      throw Error("Queue is paused, can't execute next task. ")
    }

    checkpoint()

    const task = this.queue.shift()
    let cancelledError = null

    try {
      const result = task()
      if (result && typeof result.then === "function") {
        await result
      }
    } catch (error) {
      if (error instanceof CancelledError) {
        cancelledError = error
      } else {
        console.error("Task execution failed:", error)
      }
    }

    if (cancelledError) throw cancelledError

    await this.executeNextTask()
  }
}

export class ProgressTracker {
  constructor() {
    this.progressSessionId = createAutofillProgressSessionId()
    this.hasSentProgressSnapshot = false

    this.syncProgress = () => {
      sendProgressMessage(this.fieldStatus, this.progressSessionId)
      this.hasSentProgressSnapshot = true
    }

    this.sendProgressPatch = (patch) => {
      if (!this.hasSentProgressSnapshot) {
        this.syncProgress()
        return
      }

      if (typeof sendProgressPatchMessage === "function") {
        sendProgressPatchMessage({
          sessionId: this.progressSessionId,
          ...patch,
        })
        return
      }

      sendProgressMessage(this.fieldStatus, this.progressSessionId)
    }

    this.setCurrentField = (field) => {
      this.fieldStatus.currentField =
        field == null ? field : formatProgressFieldLabel(field)
      this.sendProgressPatch({
        currentField: this.fieldStatus.currentField,
      })
    }

    this.setFieldsRequiredStatus = (statuses) => {
      const deduped = this.dedupeRequiredStatus(statuses)
      const incomingKeys = new Set(
        deduped.map((status) => this.getFieldStatusKey(status)),
      )
      const filledKeys = new Set(
        this.fieldStatus.filledFields.map((label) => normalizeFieldLabel(label)),
      )
      const retained = this.fieldStatus.fieldRequiredStatus.filter((status) => {
        const key = this.getFieldStatusKey(status)
        return !incomingKeys.has(key) && filledKeys.has(key)
      })

      this.fieldStatus.fieldRequiredStatus = [...deduped, ...retained]
      setFieldFocusRules(this.fieldStatus.fieldRequiredStatus)
      this.syncProgress()
    }

    this.updateFieldRequiredStatus = (status) => {
      if (this.isHiddenProgressField(status?.label)) return

      const formatted = this.formatRequiredStatusLabel(status)
      const key = this.getFieldStatusKey(formatted)
      const index = this.fieldStatus.fieldRequiredStatus.findIndex(
        (existing) =>
          existing.label === formatted.label ||
          (!!key && this.getFieldStatusKey(existing) === key),
      )

      this.fieldStatus.fieldRequiredStatus =
        index !== -1
          ? this.fieldStatus.fieldRequiredStatus.map((existing, i) =>
              i === index
                ? this.mergeRequiredStatus(existing, formatted)
                : existing,
            )
          : [...this.fieldStatus.fieldRequiredStatus, formatted]

      const targetIndex =
        index !== -1
          ? index
          : this.fieldStatus.fieldRequiredStatus.length - 1
      updateFieldFocusRule(this.fieldStatus.fieldRequiredStatus[targetIndex])

      const updated = this.fieldStatus.fieldRequiredStatus[targetIndex]
      this.sendProgressPatch({
        requiredField: {
          label: updated.label,
          required: updated.required,
        },
      })
    }

    this.replaceFieldRequiredStatus = (status) => {
      if (this.isHiddenProgressField(status?.label)) return

      const formatted = this.formatRequiredStatusLabel(status)
      const key = this.getFieldStatusKey(formatted)
      const index = this.fieldStatus.fieldRequiredStatus.findIndex(
        (existing) =>
          existing.label === formatted.label ||
          (!!key && this.getFieldStatusKey(existing) === key),
      )

      this.fieldStatus.fieldRequiredStatus =
        index !== -1
          ? this.fieldStatus.fieldRequiredStatus.map((existing, i) =>
              i === index
                ? {
                    ...existing,
                    ...formatted,
                    label: existing.label || formatted.label,
                    required: formatted.required,
                  }
                : existing,
            )
          : [...this.fieldStatus.fieldRequiredStatus, formatted]

      const targetIndex =
        index !== -1
          ? index
          : this.fieldStatus.fieldRequiredStatus.length - 1
      updateFieldFocusRule(this.fieldStatus.fieldRequiredStatus[targetIndex])

      const updated = this.fieldStatus.fieldRequiredStatus[targetIndex]
      this.sendProgressPatch({
        requiredField: {
          label: updated.label,
          required: updated.required,
        },
      })
    }

    this.updateFilledProgress = (label) => {
      const formatted = formatProgressFieldLabel(label)
      this.fieldStatus.missingFields = this.fieldStatus.missingFields.filter(
        (field) =>
          normalizeFieldLabel(field) !== normalizeFieldLabel(formatted),
      )
      this.fieldStatus.filledFields = [
        ...this.fieldStatus.filledFields.filter(
          (field) =>
            normalizeFieldLabel(field) !== normalizeFieldLabel(formatted),
        ),
        formatted,
      ]
      this.sendProgressPatch({
        fieldResult: {
          label: formatted,
          status: "filled",
        },
      })
    }

    this.updateMissedProgress = (label) => {
      const formatted = formatProgressFieldLabel(label)
      this.fieldStatus.filledFields = this.fieldStatus.filledFields.filter(
        (field) =>
          normalizeFieldLabel(field) !== normalizeFieldLabel(formatted),
      )
      this.fieldStatus.missingFields = [
        ...this.fieldStatus.missingFields.filter(
          (field) =>
            normalizeFieldLabel(field) !== normalizeFieldLabel(formatted),
        ),
        formatted,
      ]
      this.sendProgressPatch({
        fieldResult: {
          label: formatted,
          status: "missing",
        },
      })
    }

    this.updateFieldItemProgress = (label, itemResult) => {
      const displayLabel = formatFieldLabelForDisplay(label)
      const normalized = normalizeFieldLabel(displayLabel)
      const result = {
        status: itemResult.status,
        requestedItems: [...itemResult.requestedItems],
        succeededItems: [...itemResult.succeededItems],
        failedItems: [...itemResult.failedItems],
      }

      this.fieldStatus.filledFields = this.fieldStatus.filledFields.filter(
        (field) => normalizeFieldLabel(field) !== normalized,
      )
      this.fieldStatus.missingFields = this.fieldStatus.missingFields.filter(
        (field) => normalizeFieldLabel(field) !== normalized,
      )
      this.fieldStatus.fieldItemResults = {
        ...this.fieldStatus.fieldItemResults,
        [normalized]: result,
      }

      if (itemResult.status === "filled") {
        this.fieldStatus.filledFields = [
          ...this.fieldStatus.filledFields,
          displayLabel,
        ]
      } else {
        this.fieldStatus.missingFields = [
          ...this.fieldStatus.missingFields,
          displayLabel,
        ]
      }

      this.sendProgressPatch({
        fieldResult: {
          label: displayLabel,
          status: itemResult.status === "filled" ? "filled" : "missing",
          itemResult: result,
        },
      })
    }

    this.updateSectionResult = (section) => {
      const nextSection = {
        type: section.type,
        label: getSectionLabel(section.type),
        rows: section.rows.map((row) => ({
          index: row.index,
          ...(row.title ? { title: row.title } : {}),
          ...(row.subtitle ? { subtitle: row.subtitle } : {}),
          status: row.status,
          fields: row.fields.map((field) => ({
            label: formatFieldLabelForDisplay(field.label),
            ...(field.value ? { value: field.value } : {}),
            status: field.status,
          })),
        })),
      }

      const existing = this.fieldStatus.sectionResults ?? []
      const index = existing.findIndex((s) => s.type === nextSection.type)
      const merged =
        index === -1
          ? nextSection
          : {
              ...nextSection,
              rows: [
                ...new Map(
                  [...existing[index].rows, ...nextSection.rows].map((row) => [
                    row.index,
                    row,
                  ]),
                ).values(),
              ].sort((a, b) => a.index - b.index),
            }

      this.fieldStatus.sectionResults =
        index === -1
          ? [...existing, merged]
          : existing.map((s, i) => (i === index ? merged : s))

      this.sendProgressPatch({
        sectionResults: this.fieldStatus.sectionResults,
      })
    }

    this.fieldStatus = {
      fieldRequiredStatus: [],
      missingFields: [],
      filledFields: [],
      fieldItemResults: {},
      currentField: null,
    }
  }

  getFieldStatusKey(status) {
    return normalizeFieldLabel(status.label)
  }

  formatRequiredStatusLabel(status) {
    return {
      ...status,
      label: formatProgressFieldLabel(status.label, status.type),
    }
  }

  mergeRequiredStatus(existing, incoming) {
    const required =
      existing.required === true ||
      incoming.required === true ||
      (existing.required !== false && incoming.required !== false && null)

    return {
      ...existing,
      ...incoming,
      label: existing.label || incoming.label,
      required,
    }
  }

  isHiddenProgressField(label) {
    return HIDDEN_PROGRESS_FIELD_LABELS.has(
      normalizeFieldLabel(String(label ?? "")),
    )
  }

  dedupeRequiredStatus(statuses) {
    const byKey = new Map()
    const result = []

    for (const status of statuses) {
      if (this.isHiddenProgressField(status?.label)) continue

      const formatted = this.formatRequiredStatusLabel(status)
      const key = this.getFieldStatusKey(formatted)

      if (!key) {
        result.push(formatted)
        continue
      }

      const previous = byKey.get(key)
      if (!previous) {
        byKey.set(key, formatted)
        result.push(formatted)
        continue
      }

      const merged = this.mergeRequiredStatus(previous, formatted)
      byKey.set(key, merged)
      const index = result.indexOf(previous)
      if (index !== -1) {
        result[index] = merged
      }
    }

    return result
  }

  clear() {
    this.fieldStatus = {
      fieldRequiredStatus: [],
      missingFields: [],
      filledFields: [],
      fieldItemResults: {},
      currentField: null,
    }
    this.progressSessionId = createAutofillProgressSessionId()
    this.hasSentProgressSnapshot = false
    clearFieldFocusRules()
  }

  generateFinalProgress() {
    return {
      fieldRequiredStatus: this.fieldStatus.fieldRequiredStatus.map((status) =>
        pick(status, ["label", "required"]),
      ),
      filledFields: this.fieldStatus.filledFields,
      missingFields: this.fieldStatus.missingFields,
      fieldItemResults: Object.fromEntries(
        Object.entries(this.fieldStatus.fieldItemResults ?? {}).map(
          ([key, result]) => [
            key,
            {
              status: result.status,
              requestedItems: [...result.requestedItems],
              succeededItems: [...result.succeededItems],
              failedItems: [...result.failedItems],
            },
          ],
        ),
      ),
      ...(this.fieldStatus.sectionResults
        ? {
            sectionResults: this.fieldStatus.sectionResults.map((section) => ({
              type: section.type,
              label: section.label,
              rows: section.rows.map((row) => ({
                index: row.index,
                ...(row.title ? { title: row.title } : {}),
                ...(row.subtitle ? { subtitle: row.subtitle } : {}),
                status: row.status,
                fields: row.fields.map((field) => ({
                  label: field.label,
                  ...(field.value ? { value: field.value } : {}),
                  status: field.status,
                })),
              })),
            })),
          }
        : {}),
    }
  }
}
