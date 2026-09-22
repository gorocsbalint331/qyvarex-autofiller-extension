// @ts-nocheck
/**
 * Ashby — page-context field metadata annotation (Location field detection).
 */

import * as messaging from "@plasmohq/messaging"

const REQUEST_EVENT = "__jr_ashby_field_metadata_request"
const RESPONSE_EVENT = "__jr_ashby_field_metadata_response"
const FIELD_TYPE_ATTR = "data-jr-ashby-field-type"
const LOCATION_TYPES_ATTR = "data-jr-ashby-location-types"

let injectReady = false

async function ensureFieldMetadataInjected() {
  if (injectReady) return true
  try {
    let result = await messaging.sendToBackground({
      name: "injectAshbyFieldMetadata",
    })
    injectReady = result?.success === true
    return injectReady
  } catch (error) {
    console.warn(
      "[AshbyFieldMetadata] failed to prepare field detection:",
      error,
    )
    return false
  }
}

/** Ask the injected page script to annotate Location field type / locationTypes. */
export async function annotateAshbyFieldType(input) {
  if (
    typeof document === "undefined" ||
    typeof CustomEvent !== "function" ||
    !(await ensureFieldMetadataInjected())
  ) {
    return
  }

  let fieldId = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  let requestId = `ashby_field_${fieldId}`
  input.setAttribute("data-jr-ashby-field-id", fieldId)

  await new Promise((resolve) => {
    let cleanup = () => {
      document.removeEventListener(RESPONSE_EVENT, onResponse)
      input.removeAttribute("data-jr-ashby-field-id")
    }
    let timeoutId = setTimeout(() => {
      cleanup()
      resolve()
    }, 1000)

    function onResponse(event) {
      let detail = event.detail
      if (detail?.requestId !== requestId) return

      clearTimeout(timeoutId)
      cleanup()

      if (
        detail?.fieldType === "Location" ||
        detail?.serializationId === "LocationField"
      ) {
        input.setAttribute(FIELD_TYPE_ATTR, "location")
        if (Array.isArray(detail?.locationTypes)) {
          input.setAttribute(
            LOCATION_TYPES_ATTR,
            JSON.stringify(detail.locationTypes),
          )
        } else {
          input.removeAttribute(LOCATION_TYPES_ATTR)
        }
        console.info("[Ashby][GeoLocation] metadata", {
          fieldPath: input
            .closest("[data-field-path]")
            ?.getAttribute("data-field-path"),
          fieldType: detail?.fieldType,
          serializationId: detail?.serializationId,
          locationTypes: detail?.locationTypes,
        })
      } else {
        input.removeAttribute(FIELD_TYPE_ATTR)
        input.removeAttribute(LOCATION_TYPES_ATTR)
      }
      resolve()
    }

    document.addEventListener(RESPONSE_EVENT, onResponse)
    document.dispatchEvent(
      new CustomEvent(REQUEST_EVENT, {
        detail: {
          selector: `[data-jr-ashby-field-id="${fieldId}"]`,
          requestId,
        },
      }),
    )
  })
}
