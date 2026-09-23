// @ts-nocheck
/**
 * Generate / regenerate answers for AI-relevant textareas (and cover letters).
 */

import { useCallback, useRef, useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"
import { TAILOR_RESUME_ID_PREFIX } from "../contents/shared/constants.js"
import { fillDefaultInputField } from "../contents/crawler/utils/input.js"
import {
  DEFAULT_AUTOFILL_COVER_LETTER_PROMPT,
  formatCoverLetterMarkdownAsText,
  getCurrentAutofillJobId,
} from "../contents/methods/cover-letter.js"
import {
  buildEditWithAiCoverLetterSeed,
  resolveEditWithAiCoverLetterSeedId,
} from "../store/cover-letter-state.ts"
import { useResumeStore } from "../store/resume.ts"
import { useUrlStore } from "../store/url.ts"
import { extractJobIdFromUrl } from "../utils/job-id.ts"
import { isCoverLetterTextarea } from "./fieldFilter.ts"
import { extractDescription, extractVisibleLabel } from "./labelExtraction.ts"

export function useGenerateField() {
  const [statusMap, setStatusMap] = useState(() => new Map())
  const uniqueIdByElement = useRef(new Map())

  function setStatus(element, status) {
    setStatusMap((prev) => {
      const next = new Map(prev)
      next.set(element, status)
      return next
    })
  }

  const statusMapRef = useRef(statusMap)
  statusMapRef.current = statusMap

  const generate = useCallback(async (element, promptList = []) => {
    const currentStatus = statusMapRef.current.get(element)
    if (currentStatus === "loading") return

    const label = extractVisibleLabel(element)
    const autofillJobId = getCurrentAutofillJobId()
    const isCoverLetter =
      !!autofillJobId &&
      isCoverLetterTextarea({
        label,
        name: element.name || "",
        id: element.id || "",
      })
    const question = label || element.name || ""
    if (!isCoverLetter && !question) return

    const description = extractDescription(element)
    const prompts = description
      ? [`Question context: ${description}`, ...promptList]
      : promptList

    setStatus(element, "loading")
    try {
      if (isCoverLetter) {
        const resumeState = useResumeStore.getState()
        const coverLetterSeedId = resolveEditWithAiCoverLetterSeedId(
          resumeState.editWithAiCoverLetterSeed,
          autofillJobId,
        )
        const lastUsedResume = resumeState.lastUsedResume
        const resumeBody = {}
        if (lastUsedResume) {
          if (lastUsedResume.startsWith(TAILOR_RESUME_ID_PREFIX)) {
            resumeBody.tailorId = lastUsedResume.slice(
              TAILOR_RESUME_ID_PREFIX.length,
            )
          } else {
            resumeBody.resumeId = lastUsedResume
          }
        }

        const userPrompt =
          prompts.join("\n").trim() || DEFAULT_AUTOFILL_COVER_LETTER_PROMPT
        const response = await sendToBackground({
          name: "generateAutofillCoverLetter",
          body: {
            jobId: autofillJobId,
            userPrompt,
            ...resumeBody,
            ...(coverLetterSeedId ? { coverLetterId: coverLetterSeedId } : {}),
            ...(element.value ? { currentCoverLetter: element.value } : {}),
          },
        })

        if (response?.error?.HTTP_STATUS) {
          throw Error(String(response.error.HTTP_STATUS))
        }

        const data = response?.data
        const text = formatCoverLetterMarkdownAsText(data?.markdown)
        if (text) await fillDefaultInputField(element, text)

        const seed = buildEditWithAiCoverLetterSeed(data)
        if (seed) useResumeStore.getState().setEditWithAiCoverLetterSeed(seed)
      } else {
        const jobId = extractJobIdFromUrl(
          useUrlStore.getState().currentTabUrl || window.location.href,
        )
        const response = await sendToBackground({
          name: "regenerateAnswer",
          body: {
            jobId: jobId ?? null,
            question,
            promptList: prompts,
            uniqueId: uniqueIdByElement.current.get(element) ?? null,
            fieldInput: element.value || null,
          },
        })

        if (response?.data?.HTTP_STATUS) {
          throw Error(response.data.HTTP_STATUS)
        }

        const answer = response?.data?.answer
        const uniqueId = response?.data?.uniqueId
        if (answer) await fillDefaultInputField(element, answer)
        if (uniqueId) uniqueIdByElement.current.set(element, uniqueId)
      }

      setStatus(element, "idle")
    } catch (error) {
      console.warn("[TextareaGenerateButton] generate error", error)
      setStatus(element, "error")
      setTimeout(() => setStatus(element, "idle"), 2000)
    }
  }, [])

  return { statusMap, generate }
}
