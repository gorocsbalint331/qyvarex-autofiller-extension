import type { PlasmoMessaging } from "@plasmohq/messaging"

/**
 * Inject MAIN-world helper that stamps Ashby field metadata onto inputs
 * (data-jr-ashby-field-type, data-jr-ashby-location-types).
 */
const INJECT_FN = function injectAshbyMeta() {
  const w = window as unknown as {
    __jrAshbyMetaInstalled?: boolean
  }
  if (w.__jrAshbyMetaInstalled) return { ok: true, already: true }
  w.__jrAshbyMetaInstalled = true

  function walk(root: ParentNode) {
    const inputs = root.querySelectorAll("input, textarea, [role='combobox']")
    inputs.forEach((el) => {
      const name = (el.getAttribute("name") || "").toLowerCase()
      const id = (el.getAttribute("id") || "").toLowerCase()
      const label =
        (el.getAttribute("aria-label") || "") +
        " " +
        (el.closest("label")?.textContent || "")
      const blob = `${name} ${id} ${label}`.toLowerCase()

      if (
        name.includes("_systemfield_location") ||
        /geo|location|city/.test(blob)
      ) {
        el.setAttribute("data-jr-ashby-field-type", "Location")
        el.setAttribute(
          "data-jr-ashby-location-types",
          JSON.stringify(["CITY", "ADMINISTRATIVE_AREA_LEVEL_1", "COUNTRY"])
        )
      } else if (/school|university|college/.test(blob)) {
        el.setAttribute("data-jr-ashby-field-type", "School")
      }
    })
  }

  walk(document)
  const obs = new MutationObserver(() => walk(document))
  obs.observe(document.documentElement, { childList: true, subtree: true })

  window.dispatchEvent(new CustomEvent("__jr_ashby_field_metadata_ready"))
  return { ok: true }
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const tabId =
      typeof req.body?.tabId === "number"
        ? req.body.tabId
        : (
            await chrome.tabs.query({ active: true, currentWindow: true })
          )[0]?.id

    if (!tabId) {
      res.send({ ok: false, message: "no_tab" })
      return
    }

    const results = await chrome.scripting.executeScript({
      target: { tabId },
      world: "MAIN",
      func: INJECT_FN
    })

    res.send({
      ok: true,
      result: results?.[0]?.result ?? null
    })
  } catch (err) {
    res.send({
      ok: false,
      message: err instanceof Error ? err.message : "inject_failed"
    })
  }
}

export default handler
