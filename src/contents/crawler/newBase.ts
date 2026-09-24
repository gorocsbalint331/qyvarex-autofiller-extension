// @ts-nocheck
/**
 * Base autofill crawler: field matching, progress proxies, form fill, resume upload.
 */

import { isExactChoiceMatch } from "../methods/choice-match.ts"
import dataUrlToBlob from "dataurl-to-blob"
import { omit, intersection, isEmpty, isNil } from "lodash-es"
import { sendToBackground } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"
import { STATE_MAP } from "../../constants.ts"
import {
  agentOriginalResume,
  agentTailorId,
  agentResumeId,
} from "../../helper-shims/host.ts"
import {
  sendProgressMessage,
  sendProgressPatchMessage,
} from "../methods/track.ts"
import { createAutofillProgressSessionId } from "../../core/autofill-progress-protocol.ts"
import { FIELD_TYPE, MESSAGE_EVENTS, MIME_TYPE } from "../../core/enums.ts"
import {
  getExtensionVersion,
  collectFormDataWithRepeatingGroups,
  removeEndStrings,
} from "../../core/utils.ts"
import {
  escapeXPath,
  getFirstOrderedNode,
  getOrderedNodes,
} from "../../core/xpath.ts"
import { HTTP_STATUS_CODES, CUSTOM_ERROR_CODES } from "../../enums/http.ts"
import { STORAGE_KEY } from "../../enums/storage.ts"
import { cleanObject } from "../../utils/string.ts"
import { removeSpecialCharacters } from "./fill-utils/label.ts"
import { fillCheckbox } from "./fill-utils/checkbox.ts"
import { delay, executeSequentially } from "./fill-utils/executor.ts"
import { fillDefaultInputField } from "./fill-utils/input.ts"

const storage = new Storage()

const OMIT_DOM_KEYS = [
  "$input",
  "$label",
  "$fieldRow",
  "children",
  "$checkboxs",
  "$radioParent",
  "$radios",
  "__zohoClusterRoot",
  "__zohoSemanticType",
]

export const HARDCODE_KEY = {
  education: "education",
  workExperience: "workExperience",
}

export const config = {
  matches: ["<all_urls>"],
  all_frames: true,
}

export function isMatched(a, b) {
  if (!a || !b || typeof a !== "string" || typeof b !== "string") return false
  const left = removeSpecialCharacters(a)
    ?.replace(/\s*\*\s*/g, "")
    ?.toLowerCase()
    .trim()
  const right = removeSpecialCharacters(b)
    ?.replace(/\s*\*\s*/g, "")
    ?.toLowerCase()
    .trim()
  return !!left && !!right && left === right
}

export class AutoFillBase {
  constructor() {
    this.userInfo = {}
    this.education = []
    this.workExperience = []
    this.skills = []
    this.userInput = []
    this.submitButtonText = ""
    this.fieldCanbeFill = []
    this.fieldRequiredStatus = []
    this.fieldAPIResponse = []
    this.missingFields = []
    this.filledFields = []
    this.progressSessionId = createAutofillProgressSessionId()
    this.hasSentProgressSnapshot = false
    this.hardCodeKeys = []
    this.disableUploadResume = false
    this.formRules = []
    this.resumeInput = null
    this.source = "autoFill"

    this.initFields = () => {
      this.progressSessionId = createAutofillProgressSessionId()
      this.hasSentProgressSnapshot = false

      const createProgressHandler = (status) => ({
        set: (target, prop, value) => {
          target[prop] = value
          if (prop === "length" || !/^\d+$/.test(prop)) return true

          if (!this.hasSentProgressSnapshot) {
            const { missingFields, filledField } = this.dedup_fields()
            sendProgressMessage(
              {
                missingFields,
                filledFields: filledField,
                fieldRequiredStatus: this.fieldRequiredStatus,
                currentField: null,
              },
              this.progressSessionId,
              this.userInfo,
            )
            this.hasSentProgressSnapshot = true
            return true
          }

          const label = String(value ?? "")
            .replace("*", "")
            .trim()
          if (!label) return true

          const requiredField = this.fieldRequiredStatus.find((item) =>
            isMatched(item.label, label),
          )

          if (typeof sendProgressPatchMessage === "function") {
            sendProgressPatchMessage({
              sessionId: this.progressSessionId,
              fieldResult: { label, status },
              requiredField: requiredField
                ? {
                    label: requiredField.label,
                    required: requiredField.required,
                  }
                : undefined,
            })
          } else {
            const { missingFields, filledField } = this.dedup_fields()
            sendProgressMessage(
              {
                missingFields,
                filledFields: filledField,
                fieldRequiredStatus: this.fieldRequiredStatus,
                currentField: null,
              },
              this.progressSessionId,
              this.userInfo,
            )
          }
          return true
        },
      })

      this.missingFields = new Proxy([], createProgressHandler("missing"))
      this.filledFields = new Proxy([], createProgressHandler("filled"))
    }

    this.dedup_fields = () => {
      const missingFields = []
      const filledField = []
      let seen = new Set([])

      for (let field of this.missingFields) {
        if (!field) continue
        field = field.replace("*", "").trim()
        if (!seen.has(field)) {
          missingFields.push(field)
          seen.add(field)
        }
      }

      seen = new Set([])
      for (let field of this.filledFields) {
        if (!field) continue
        field = field.replace("*", "").trim()
        if (!seen.has(field)) {
          filledField.push(field)
          seen.add(field)
        }
      }

      return { missingFields, filledField }
    }

    this.generateSubmitStatus = (status) => {
      const { missingFields, filledField } = this.dedup_fields()
      const totalFields = this.fieldRequiredStatus.map((item) => item.label)
      const requiredFields = this.fieldRequiredStatus
        .filter((item) => item.required)
        .map((item) => item.label)
      const filledRequiredFields = intersection(requiredFields, filledField)

      return {
        status,
        url: window.location.href,
        version: getExtensionVersion(),
        requiredFields,
        missingFields,
        filledFields: filledField,
        filledCount: filledField.length,
        requiredCount: requiredFields.length,
        filledRequiredCount: filledRequiredFields.length,
        filledRequiredFields,
        totalCount: totalFields.length,
        totalFields,
        userInput: [],
        requestTime: Number(
          ((this.requestTime - this.startTime) / 1e3).toFixed(2),
        ),
        fillTime: Number(((Date.now() - this.requestTime) / 1e3).toFixed(2)),
        formData: collectFormDataWithRepeatingGroups(),
      }
    }

    this.postStatus = async (status) => {
      const submitStatus = this.generateSubmitStatus(status)
      await sendToBackground({
        name: "saveSubmitStatus",
        body: { submitStatus, status: "filling" },
      })
    }

    this.findMatchKeyField = (label) => {
      for (const key in this.userInfo) {
        if (isMatched(label, key)) return key
      }
      return null
    }

    this.fillInputTextField = async (input, label, overrideValue) => {
      const matchKey = this.findMatchKeyField(label)
      if (
        overrideValue === undefined &&
        (!matchKey || this.userInfo?.[matchKey] === "")
      ) {
        this.missingFields.push(label)
        return
      }
      await fillDefaultInputField(
        input,
        overrideValue || (this.userInfo?.[matchKey] ?? ""),
      )
      this.filledFields.push(label)
    }

    this.fillRadioCheckField = async (input, label) => {
      const matchKey = this.findMatchKeyField(label)
      if (!matchKey || this.userInfo?.[matchKey] === "") {
        this.missingFields.push(label)
        return
      }

      const answer = this.userInfo[matchKey]
      const optionText = (
        input.parentNode.innerText ||
        input.parentNode.parentNode.innerText ||
        getFirstOrderedNode("./preceding::label[1]", input).innerText
      )
        .toLowerCase()
        .trim()
        .replace("*", "")

      if (
        optionText === "" ||
        (Array.isArray(answer) ? answer : [answer]).some((item) => item === "")
      ) {
        this.missingFields.push(label)
        return
      }

      if (
        (Array.isArray(answer) ? answer : [answer]).some((item) =>
          isExactChoiceMatch(optionText, item),
        ) ||
        this.checkYesNo(
          Array.isArray(answer) ? answer[0] : answer,
          optionText,
          label,
        )
      ) {
        await fillCheckbox(input, true)
        this.filledFields.push(label)
        await delay(200)
        return
      }

      if (!this.missingFields.includes(label)) {
        this.missingFields.push(label)
      }
    }

    this.fillSelectField = async (select, label) => {
      const matchKey = this.findMatchKeyField(label)

      if (
        this.userInfo?.domains?.includes("greenhouse") &&
        (select.classList?.contains("degree") ||
          select.classList?.contains("discipline"))
      ) {
        return
      }

      if (!matchKey || this.userInfo?.[matchKey] === "") {
        select.blur()
        this.missingFields.push(label)
        return
      }

      const answers = Array.isArray(this.userInfo[matchKey])
        ? this.userInfo[matchKey]
        : [this.userInfo[matchKey]]

      const focusEvent = new FocusEvent("focus", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
      select.dispatchEvent(focusEvent)
      select.focus()

      if (select.options && select.options.length > 0) {
        for (let i = 0; i < select.options.length; i++) {
          const option = select.options[i]
          if (
            option &&
            option?.value &&
            option?.text &&
            answers.some((answer) => isMatched(answer, option.text))
          ) {
            option?.click()
            option.dispatchEvent(
              new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
            )
            option.dispatchEvent(
              new MouseEvent("mouseup", { bubbles: true, cancelable: true }),
            )
            option.selected = true
            select.dispatchEvent(
              new Event("change", { bubbles: true, cancelable: true }),
            )
            select.blur()
            this.filledFields.push(label)
            return
          }
        }
      }

      select.blur()
      this.missingFields.push(label)
    }

    this.fillOriginSelectField = (select, _label, value) => {
      const options = select.options
      if (!options) {
        console.error("No options found for select element", value)
        return
      }
      for (let i = 0; i < options.length; i++) {
        if (options[i].text === value || options[i].title === value) {
          options[i].selected = true
          select.dispatchEvent(new Event("change", { bubbles: true }))
          return
        }
      }
    }

    this.fillUnstandardForm = async () => {}

    this.fetchPdfAsBlob = async () => {
      let response
      let extension = ""

      if (
        this.resumeInfo.useOriginalResume ||
        (agentOriginalResume && !agentTailorId)
      ) {
        extension = (
          (response = await sendToBackground({
            name: "getResumeBlob",
            body: { resumeId: this.resumeInfo.id || agentResumeId },
          }))
        ).extension
      } else if (this.resumeInfo.tailor) {
        response = await sendToBackground({
          name: "getTailorResumeBlob",
          body: {
            tailorResume: this.resumeInfo.tailorResume,
            template: this.resumeInfo.template,
          },
        })
        extension = "pdf"
      } else if (this.resumeInfo.diagnoseId) {
        response = await sendToBackground({
          name: "getBaseResumeBlob",
          body: {
            diagnoseId: this.resumeInfo.diagnoseId,
            template: this.resumeInfo.template,
          },
        })
        extension = "pdf"
      } else if (this.resumeInfo.id) {
        extension = (
          (response = await sendToBackground({
            name: "getResumeBlob",
            body: { resumeId: this.resumeInfo.id },
          }))
        ).extension
      }

      if (!response) throw Error("No resume found")

      const base64URL = response.base64URL
      const blobParts = dataUrlToBlob(base64URL)
      const blob = new Blob([blobParts])
      const dataTransfer = new DataTransfer()
      const resumeBaseName = this.resumeInfo.resumeName.replace(/\.[^/.]+$/, "")

      dataTransfer.items.add(
        new File([blob], `${resumeBaseName}.${extension}`, {
          type: MIME_TYPE[extension] || MIME_TYPE.pdf,
          lastModified: Date.now(),
        }),
      )
      return dataTransfer
    }

    this.fillForm = async (fromAgent = false) => {
      this.startTime = Date.now()
      if (this.beforeFillForm) await this.beforeFillForm()

      if (this.formRules?.length > 0) {
        const httpStatus = await this.getElementRules(
          this.formRules.map((rule) => omit(rule, ...OMIT_DOM_KEYS)),
          fromAgent,
        )

        window.top?.postMessage(
          cleanObject({ type: MESSAGE_EVENTS.agentStartFillingFields }),
          { targetOrigin: "*" },
        )

        if (
          httpStatus &&
          [
            HTTP_STATUS_CODES.BAD_REQUEST,
            HTTP_STATUS_CODES.PAYMENT_REQUIRED,
            HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
            HTTP_STATUS_CODES.CLIENT_REQUEST_TIMEOUT,
          ].includes(httpStatus)
        ) {
          return (
            window !== window.top &&
              window.top?.postMessage(
                cleanObject({
                  type: MESSAGE_EVENTS.sendHttpStatusIframe,
                  httpStatus,
                }),
                { targetOrigin: "*" },
              ),
            httpStatus
          )
        }

        if (httpStatus === CUSTOM_ERROR_CODES.RESUME_MISSING_KEY) {
          return (
            window !== window.top &&
              window.top?.postMessage(
                cleanObject({
                  type: MESSAGE_EVENTS.sendHttpStatusIframe,
                  httpStatus,
                }),
                { targetOrigin: "*" },
              ),
            httpStatus
          )
        }
      } else if (this.formRules.length === 0) {
        return
      }

      if (this.source !== "taleo") await this.clickAddAction()
      if (this.fieldCanbeFill?.length > 0) await this.fillUnstandardForm()
      this.requestTime = Date.now()
      const result = await this.doFill()
      return result
    }

    this.uploadFiles = async () => {
      if (!this.disableUploadResume && this.resumeInput) {
        try {
          const dataTransfer = await this.fetchPdfAsBlob()
          if (this.resumeInput?.files) {
            this.resumeInput.files = dataTransfer.files
            this.resumeInput.dispatchEvent(
              new Event("change", { bubbles: true, cancelable: false }),
            )
            if (
              !this.fieldRequiredStatus.some(
                (item) => item.label === "Resume/CV",
              )
            ) {
              this.fieldRequiredStatus.push({
                label: "Resume/CV",
                required: false,
              })
            }
            this.filledFields.push("Resume/CV")
          }
        } catch (error) {
          console.error("Error uploading resume:", error)
        }
      }
    }

    this.init()
  }

  async init() {
    const href = window.location.href
    const hostname = new URL(href).hostname
    this.userInfo.domain = hostname
    const disableResumeUpload = await storage.get(
      STORAGE_KEY.DISABLE_RESUME_UPLOAD,
    )
    this.disableUploadResume = disableResumeUpload
  }

  async getSiteToken() {
    if (this.token) return this.token
    const token = await sendToBackground({
      name: "getSiteToken",
      body: { url: removeEndStrings(window.location.href) },
    })
    this.token = token
    return token
  }

  async getElementRules(elements, fromAgent) {
    const token = await this.getSiteToken()
    const response = await sendToBackground({
      name: "getGptResults",
      body: {
        params: {
          token,
          url: removeEndStrings(window.location.href),
          elements,
          parser: "internal",
          source: this.source ?? "autoFill",
          fromAgent: !!(fromAgent || agentTailorId || agentResumeId),
          ...(this.resumeInfo?.id && { resumeId: this.resumeInfo?.id }),
          ...(this.resumeInfo?.tailorId && {
            tailorId: this.resumeInfo?.tailorId,
          }),
        },
      },
    })

    return response?.data?.data === CUSTOM_ERROR_CODES.RESUME_MISSING_KEY
      ? CUSTOM_ERROR_CODES.RESUME_MISSING_KEY
      : response?.data?.HTTP_STATUS
        ? response?.data?.HTTP_STATUS
        : void this.initUserData(response)
  }

  async initUserData(response) {
    this.fieldRequiredStatus = this.formRules
    this.fieldAPIResponse = response.data?.fill_data_list
    this.education =
      response.data?.profile_data?.Education ??
      response.data?.profile_data?.education ??
      response.data?.profile_data?.EDUCATION ??
      []
    this.workExperience =
      response.data?.profile_data?.Employment ??
      response.data?.profile_data?.employment ??
      response.data?.profile_data?.EMPLOYMENT ??
      []
    this.skills = response.data?.profile_data?.skills

    const state = response.data?.profile_data?.state
    this.fieldAPIResponse?.forEach((field) => {
      if (field?.name) {
        const stateResideRegex = /^.*state.*reside\sin.*$/i
        if (field.name.match(stateResideRegex)) {
          this.userInfo[field?.name] = STATE_MAP[state]
        } else {
          this.userInfo[field?.name] = field?.value
        }
      }
      this.fieldCanbeFill.push(field)
    })

    this.formatUserInfo(response.data)
    this.submitButtonText = this.submitButtonText ?? response.data.submit_button
    this.bindSubmitButton()
  }

  async bindSubmitButton() {
    const xpath = `//*[contains(text(), ${escapeXPath(this.submitButtonText)}) or contains(@value, ${escapeXPath(this.submitButtonText)})]`
    const button = getFirstOrderedNode(xpath)
    if (button) {
      button.addEventListener("click", this.handleFormSubmit.bind(this))
    }
  }

  async handleFormSubmit(event) {
    const target = event.target
    const submitStatus = this.generateSubmitStatus("submit")
    const errorClasses = ["field-error-msg", "helper-text--error"]
    const selector = errorClasses.map((cls) => `.${cls}`).join(",")
    const errors = document.querySelectorAll(selector)
    if (isEmpty(errors)) {
      await sendToBackground({
        name: "saveSubmitStatus",
        body: { submitStatus, status: "submit", submittedForm: target },
      })
    }
  }

  generateResult() {
    const { missingFields, filledField } = this.dedup_fields()
    const data = {
      missingFields,
      filledFields: filledField,
      fieldRequiredStatus: this.fieldRequiredStatus.map((item) =>
        omit(item, ...OMIT_DOM_KEYS),
      ),
      userAutoFillResponse: this.userInfo,
    }
    window.top?.postMessage(
      cleanObject({
        type: MESSAGE_EVENTS.autoFillResultFromIframe,
        data,
      }),
      { targetOrigin: "*" },
    )
    return data
  }

  checkYesNo(value, optionText, label) {
    return (
      (value.toLowerCase() === "true" && optionText.toLowerCase() === "yes") ||
      (value.toLowerCase() === "false" && optionText.toLowerCase() === "no") ||
      (optionText.includes("have read") && value.toLowerCase() === "true") ||
      (isMatched(optionText, label) && value.toLowerCase() === "true")
    )
  }

  triggerEvents(element, eventNames) {
    eventNames.forEach((eventName) => {
      let event = new Event(eventName, { bubbles: true, cancelable: true })
      event = ["mousedown", "mouseup", "click"].includes(eventName)
        ? new MouseEvent(eventName, { bubbles: true, cancelable: true })
        : ["keydown", "keyup", "keypress"].includes(eventName)
          ? new KeyboardEvent(eventName, {
              bubbles: true,
              cancelable: true,
              keyCode: 13,
            })
          : new Event(eventName, { bubbles: true, cancelable: true })
      if (element) element.dispatchEvent(event)
    })
  }

  initTypeIndex() {}

  async doFill() {
    this.initFields()
    await this.fillBasicInfo()
    await this.executeAdditionalTasks()
    await this.postStatus("filling")
    return this.generateResult()
  }

  async fillBasicInfo() {
    const tasks = []
    for (const rule of this.formRules) {
      const executors = this.getFormElementExecutor(rule)
      const list = Array.isArray(executors) ? executors : [executors]
      tasks.push(...list)
    }
    if (!isEmpty(tasks)) {
      await executeSequentially(...tasks)
    }
  }

  getFormElementExecutor(rule, userInfoOverride) {
    try {
      userInfoOverride = isEmpty(userInfoOverride)
        ? this.userInfo
        : userInfoOverride
      const { label } = rule
      const tasks = []
      const matchKey = this.findMatchKeyField(label)

      if (
        rule.type === FIELD_TYPE.EDUCATION ||
        rule.type === FIELD_TYPE.EMPLOYMENT
      ) {
        const typeToHardCodeKey = {
          [FIELD_TYPE.EDUCATION]: HARDCODE_KEY.education,
          [FIELD_TYPE.EMPLOYMENT]: HARDCODE_KEY.workExperience,
        }
        if (!this.hardCodeConfig[typeToHardCodeKey[rule.type]]) {
          return (
            console.error(`Hardcode config for ${rule.type} is missing`),
            []
          )
        }

        const sectionTasks = this.fillHardCodeSection(
          this.hardCodeConfig[typeToHardCodeKey[rule.type]],
        )
        if (sectionTasks && sectionTasks.length > 0) {
          return (
            this.filledFields.push(
              this.hardCodeConfig[typeToHardCodeKey[rule.type]].key ===
                HARDCODE_KEY.education
                ? "Education"
                : "Employment",
            ),
            sectionTasks
          )
        }
        return (
          this.missingFields.push(
            this.hardCodeConfig[typeToHardCodeKey[rule.type]].key ===
              HARDCODE_KEY.education
              ? "Education"
              : "Employment",
          ),
          []
        )
      }

      if (!matchKey || isEmpty(userInfoOverride?.[matchKey])) {
        return this.missingFields.push(label), []
      }

      const methodName = this.executeMap[rule.type]

      if (rule.type === FIELD_TYPE.CHECKBOX) {
        const checkboxRule = rule
        return (
          checkboxRule?.$checkboxs?.map((checkbox) => {
            tasks.push({
              func: this[methodName].bind(this, checkbox, label),
              delay: 0,
            })
          }),
          tasks
        )
      }

      const inputRule = rule
      if (this.shouldSkipElement(inputRule.$input)) return tasks
      return (
        tasks.push({
          func: this[methodName].bind(this, inputRule.$input, label),
          delay: 0,
        }),
        tasks
      )
    } catch (error) {
      console.error("Error in getFormElementExecutor:", error)
    }
  }

  async clickAddAction() {
    for (const key in this.hardCodeConfig) {
      const configEntry = this.hardCodeConfig[key]
      const container = getFirstOrderedNode(configEntry.container)
      if (!container) continue

      const existingNodes = getOrderedNodes(configEntry.snapshot, container)
      const items =
        configEntry.key === HARDCODE_KEY.education
          ? this.education
          : this.workExperience

      await this.clickAddItemButton(
        container,
        this.hardCodeConfig[configEntry.key].addButton,
        items.length - existingNodes.length,
      )
    }
  }

  async clickAddItemButton(container, addButtonXpath, count) {
    const button = getFirstOrderedNode(addButtonXpath, container)
    if (button) {
      for (let i = 0; i < count; i++) {
        button.click()
        await delay(500)
      }
      await delay(500)
    }
  }

  fillHardCodeSection(configEntry) {
    const container = getFirstOrderedNode(configEntry.container)
    if (!container) return

    const nodes = getOrderedNodes(configEntry.snapshot, container)
    const items =
      configEntry.key === HARDCODE_KEY.education
        ? this.education
        : this.workExperience

    const tasks = items?.flatMap((item, index) => {
      const node = nodes[index]
      if (node) return this.fillHardCodeItem(configEntry.fields, item, node)
    })

    return tasks.filter((task) => !isNil(task))
  }

  fillHardCodeItem(fields, item, root) {
    return fields.map(
      ({
        key,
        alternateKey,
        format,
        isCheckbox,
        type,
        xpath,
        delay: fieldDelay = 2,
      }) => {
        const input = getFirstOrderedNode(xpath, root)
        let value = item[key] ?? item[alternateKey]
        if (format) value = format(value, item)
        const methodName = this.executeMap[type]

        if (!input) return null
        if (methodName) {
          return {
            func: async () => {
              await this[methodName](input, key, value)
            },
            delay: fieldDelay,
          }
        }
        return {
          func: async () => {
            if (value) await fillDefaultInputField(input, value)
          },
          delay: fieldDelay,
        }
      },
    )
  }

  async beforeFillForm() {}
}
