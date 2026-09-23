// @ts-nocheck
/**
 * GoHire ATS filler — readable TypeScript source of truth.
 *
 * Bundled from this file (and gohire/*.ts) by scripts/bundle-engine-helper.mjs.
 * Site id: "gohire"
 */

import * as React from "react"
import * as ReactDOMClient from "react-dom/client"
import * as TextareaGenerateButton from "../../components/TextareaGenerateButton.js"
import * as dom from "../methods/dom.ts"
import { BaseFiller } from "./base-filler.ts"
import * as enums from "../../core/enums.js"
import * as xpath from "../../core/xpath.js"
import * as httpEnums from "../../enums.js"
import * as currentJobId from "../../utils/current-job-id.js"
import * as delay from "../../utils/delay.js"
import * as iframeData from "./gohire/iframe-data.ts"
import * as operations from "./gohire/operations.ts"
import * as rules from "./gohire/rules.ts"

const WIDGET_IFRAME_SELECTOR = 'iframe[src*="app.gohire.io/widget/"]'
const EDIT_AI_ROOT_ID = "jobright-gohire-edit-ai-root"
const APPLY_NOW_XPATH =
  '//a[contains(normalize-space(.), "Apply Now") or contains(@onclick, "apply(")] | //button[contains(normalize-space(.), "Apply Now") or contains(@onclick, "apply(")]'

function isGoHireWidgetIframeContext() {
  const url = new URL(window.location.href)
  return (
    window.top !== window.self &&
    url.hostname === "app.gohire.io" &&
    url.pathname.startsWith("/widget/")
  )
}

function mountTextareaGenerateButtonIfNeeded() {
  if (!isGoHireWidgetIframeContext() || document.getElementById(EDIT_AI_ROOT_ID)) {
    return
  }

  const root = document.createElement("div")
  root.id = EDIT_AI_ROOT_ID
  root.style.display = "contents"
  ;(document.body || document.documentElement).appendChild(root)
  ReactDOMClient.createRoot(root).render(
    React.createElement(textareaGenerateButton.TextareaGenerateButtonLayer),
  )
}

class GoHire extends BaseFiller {
  constructor() {
    super()
    this.iframeFillPromise = null
    rules.installGoHireTextareaLabelObserver()
    mountTextareaGenerateButtonIfNeeded()
  }

  getFieldHandlers() {
    return {
      [enums.FIELD_TYPE.TEXT]: {
        handler: (rule, value) => operations.fillInputField(rule, value),
        options: {
          expectArray: false,
        },
      },
      [enums.FIELD_TYPE.SELECT]: (rule, value) =>
        operations.fillSelectField(rule, value),
    }
  }

  async doFillForm(forceRefetch = false) {
    if (window.top === window.self) {
      return this.fillFormInWidgetIframe(forceRefetch)
    }

    if (!this.iframeFillPromise) {
      this.iframeFillPromise = (async () => {
        await this.waitForFillingData()
        return super.doFillForm(forceRefetch)
      })().finally(() => {
        this.iframeFillPromise = null
      })
    }

    return this.iframeFillPromise
  }

  async extractFormRules() {
    return rules.extractRules()
  }

  getSiteName() {
    return "gohire"
  }

  async checkCoverLetter() {
    dom.postCoverLetterStatus(rules.getCoverLetterStatus())
  }

  async handleResumeUpload() {
    if (this.disableUploadResume) {
      this.progressTracker.updateMissedProgress("Resume/CV")
      return
    }

    this.taskQueue.add(async () => {
      await operations.uploadResume(
        this.resumeInfo,
        this.progressTracker.updateFieldRequiredStatus,
        this.progressTracker.updateFilledProgress,
      )
    })
    await this.taskQueue.run()
  }

  getSubmitButtonSelector() {
    return '//button[contains(normalize-space(.), "Submit") and not(@disabled)]'
  }

  async getAutofillSnapshot(_baseline) {
    return rules.getFormSnapshot()
  }

  async getSubmitSnapshot() {
    return rules.getFormSnapshot()
  }

  submitApplication() {
    const button = xpath.getFirstOrderedNodeSafe(this.getSubmitButtonSelector())
    button?.click()
  }

  async fillFormInWidgetIframe(forceRefetch) {
    await this.waitForFillingData()
    const iframe = await this.openAndWaitForWidgetIframe()
    if (!iframe?.contentWindow || !iframe.src) {
      return this.progressTracker.generateFinalProgress()
    }

    await this.waitForIframeReady(iframe)
    await this.syncIframeAutofillData(iframe)
    const result = await this.waitForIframeAutofillResult(iframe, forceRefetch)
    return result || this.progressTracker.generateFinalProgress()
  }

  async waitForFillingData() {
    for (let attempt = 0; attempt < 50; attempt++) {
      if (this.resumeInfo) return
      await delay.delay(100)
    }
  }

  async openAndWaitForWidgetIframe() {
    const existing = this.getWidgetIframe()
    if (existing) return existing

    const applyButton = xpath.getFirstOrderedNodeSafe(APPLY_NOW_XPATH)
    applyButton?.click()

    for (let attempt = 0; attempt < 60; attempt++) {
      const iframe = this.getWidgetIframe()
      if (iframe?.contentWindow && iframe.src) return iframe
      await delay.delay(250)
    }

    return null
  }

  getWidgetIframe() {
    return document.querySelector(WIDGET_IFRAME_SELECTOR)
  }

  async waitForIframeReady(iframe) {
    await new Promise((resolve) => {
      let settled = false
      let pollIntervalId = null

      const finish = () => {
        if (settled) return
        settled = true
        window.removeEventListener("message", onMessage)
        if (pollIntervalId) clearInterval(pollIntervalId)
        resolve()
      }

      const onMessage = (event) => {
        if (
          event.source === iframe.contentWindow &&
          event.data?.type === httpEnums.IFRAME_EVENTS.IFRAME_LOADED
        ) {
          finish()
        }
      }

      window.addEventListener("message", onMessage)
      const startedAt = Date.now()
      pollIntervalId = setInterval(() => {
        iframe.contentWindow?.postMessage(
          {
            type: httpEnums.IFRAME_EVENTS.REQUEST_IFRAME_LOADED,
            url: iframe.src,
          },
          "*",
        )
        if (Date.now() - startedAt > 10000) finish()
      }, 300)
    })
  }

  async syncIframeAutofillData(iframe) {
    for (let attempt = 0; attempt < 3; attempt++) {
      iframe.contentWindow?.postMessage(
        {
          type: httpEnums.IFRAME_EVENTS.UPDATE_IFRAME_DATA,
          data: iframeData.buildGoHireIframeAutofillData({
            resumeInfo: this.resumeInfo,
            disableUploadResume: this.disableUploadResume,
            coverLetter: this.coverLetter,
            token: this.token,
            currentJobId: currentJobId.resolveCurrentJobId(),
          }),
          url: iframe.src,
        },
        "*",
      )
      await delay.delay(200)
    }
  }

  async waitForIframeAutofillResult(iframe, forceRefetch) {
    return new Promise((resolve) => {
      let settled = false
      let executeTimeoutId = null
      let resultTimeoutId = null

      const finish = (result) => {
        if (settled) return
        settled = true
        window.removeEventListener("message", onMessage)
        if (executeTimeoutId) clearTimeout(executeTimeoutId)
        if (resultTimeoutId) clearTimeout(resultTimeoutId)
        resolve(result)
      }

      const requestExecute = () => {
        iframe.contentWindow?.postMessage(
          {
            type: httpEnums.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
            data: {
              timestamp: Date.now(),
              fromAgent: forceRefetch,
            },
            url: iframe.src,
          },
          "*",
        )
      }

      const onMessage = (event) => {
        if (
          event.source === iframe.contentWindow &&
          event.data?.type === enums.MESSAGE_EVENTS.autoFillResultFromIframe
        ) {
          finish(event.data.data)
        }
      }

      window.addEventListener("message", onMessage)
      executeTimeoutId = setTimeout(requestExecute, 300)
      resultTimeoutId = setTimeout(() => finish(null), 70000)
    })
  }
}

export { GoHire }
