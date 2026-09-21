/**
 * Phase-1 helper: fetch team hub autofillInfo and fill identity fields.
 * Injected into the page (ISOLATED world) by activateHelperOnTab / bootstrap.
 */
;(() => {
  if (globalThis.__jobrightForkHelperPhase1Loaded) {
    // Re-injected (Activate again) — re-run fill.
    void globalThis.bootstrapJobrightHelperRuntime?.()
    return
  }
  globalThis.__jobrightForkHelperPhase1Loaded = true

  const HOST_ID = "qyvarex-autofill-status"

  function sendToBackground(message) {
    return new Promise((resolve, reject) => {
      try {
        chrome.runtime.sendMessage(message, (response) => {
          const err = chrome.runtime.lastError
          if (err) reject(new Error(err.message))
          else resolve(response)
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  function setNativeValue(el, value) {
    const proto = Object.getPrototypeOf(el)
    const desc = Object.getOwnPropertyDescriptor(proto, "value")
    if (desc?.set) desc.set.call(el, value)
    else el.value = value
    for (const name of ["input", "change", "blur"]) {
      el.dispatchEvent(new Event(name, { bubbles: true }))
    }
  }

  function isVisible(el) {
    if (!(el instanceof HTMLElement)) return false
    const style = window.getComputedStyle(el)
    if (style.display === "none" || style.visibility === "hidden") return false
    if (el.disabled || el.readOnly) return false
    const rect = el.getBoundingClientRect()
    return rect.width > 0 && rect.height > 0
  }

  function normalize(text) {
    return (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
  }

  function slugifyStep(text) {
    const slug = (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80)
    return slug || "default"
  }

  function detectHost() {
    try {
      return (location.hostname || "").toLowerCase()
    } catch {
      return ""
    }
  }

  function detectApplicationStep() {
    const selectors = [
      '[aria-current="step"]',
      '[aria-current="page"]',
      '[aria-selected="true"]',
      '.progress-bar [aria-current]',
      '.wd-ProgressBar [aria-current]',
      '[class*="step"][class*="active"]',
      '[class*="Step"][class*="active"]',
      '[class*="wizard"] [class*="active"]',
      'nav [class*="active"]',
      'ol[class*="step"] li[class*="active"]',
      'ul[class*="step"] li[class*="active"]'
    ]
    for (const sel of selectors) {
      const el = document.querySelector(sel)
      if (!el || !(el instanceof HTMLElement)) continue
      if (!isVisible(el) && el.getAttribute("aria-current") !== "step") continue
      const text = cleanQuestionText(
        el.getAttribute("aria-label") || el.textContent || ""
      )
      if (text && text.length >= 3 && text.length <= 80) {
        return slugifyStep(text)
      }
    }

    // Workday / multi-step headings often appear as selected tab text
    const heading = document.querySelector(
      'h1, h2, [data-automation-id="pageHeaderTitleText"], [data-automation-id="wizardHeader"]'
    )
    if (heading instanceof HTMLElement) {
      const text = cleanQuestionText(heading.textContent || "")
      if (text && text.length >= 3 && text.length <= 80) {
        return slugifyStep(text)
      }
    }

    try {
      const parts = location.pathname
        .split("/")
        .map((p) => decodeURIComponent(p || "").trim())
        .filter(Boolean)
        .filter(
          (p) =>
            !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
              p
            ) &&
            !/^\d+$/.test(p) &&
            p.length < 60
        )
      const last = parts[parts.length - 1]
      if (last) return slugifyStep(last)
    } catch {
      /* ignore */
    }
    return "default"
  }

  function currentScopeKey() {
    const hostname = detectHost() || "unknown"
    const stepKey = detectApplicationStep()
    return { hostname, stepKey, scopeKey: `${hostname}|${stepKey}` }
  }

  function siteStepAnswersFromExtras(extras) {
    const raw = extras?.siteStepAnswers
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {}
    return raw
  }

  function normalizeHostHint(value) {
    return String(value || "")
      .toLowerCase()
      .trim()
      .replace(/^https?:\/\//, "")
      .replace(/\/.*$/, "")
      .replace(/^www\./, "")
  }

  function listSiteLogins(autofillInfo) {
    const fromCreds = autofillInfo?.credentials?.siteLogins
    if (Array.isArray(fromCreds) && fromCreds.length) return fromCreds
    const fromExtras = autofillInfo?.extras?.siteLogins
    if (Array.isArray(fromExtras) && fromExtras.length) return fromExtras
    const email = autofillInfo?.credentials?.loginEmail || ""
    const password = autofillInfo?.credentials?.loginPassword || ""
    if (email || password) {
      return [{ siteName: "Default", hostname: "", loginEmail: email, loginPassword: password }]
    }
    return []
  }

  function findSiteLoginForHost(autofillInfo, hostname) {
    const host = normalizeHostHint(hostname || detectHost())
    const logins = listSiteLogins(autofillInfo)
    if (!logins.length) return null

    let fallback = null
    for (const login of logins) {
      const hints = [login.hostname, login.siteName]
        .map(normalizeHostHint)
        .filter(Boolean)
      if (!hints.length) {
        if (!fallback && (login.loginEmail || login.loginPassword)) fallback = login
        continue
      }
      for (const hint of hints) {
        if (hint === "*" || hint === "any" || hint === "default") {
          if (!fallback) fallback = login
          continue
        }
        if (
          host === hint ||
          host.endsWith("." + hint) ||
          host.includes(hint) ||
          hint.includes(host)
        ) {
          return login
        }
      }
    }
    return fallback
  }

  function findVisiblePasswordInputs() {
    return Array.from(document.querySelectorAll('input[type="password"]')).filter(
      (el) => el instanceof HTMLInputElement && isVisible(el)
    )
  }

  function findUsernameNearPassword(passwordEl) {
    const root =
      passwordEl.closest("form") ||
      passwordEl.closest('[role="dialog"]') ||
      passwordEl.closest("section") ||
      document.body
    const candidates = Array.from(
      root.querySelectorAll(
        'input[type="email"], input[type="text"], input[type="tel"], input:not([type])'
      )
    ).filter((el) => el instanceof HTMLInputElement && isVisible(el))

    const scored = candidates.map((el) => {
      const label = labelForControl(el)
      let score = 0
      if (/email|user|user name|user id|login|sign in|account/.test(label))
        score += 50
      if ((el.type || "").toLowerCase() === "email") score += 30
      if (/email|user|login/i.test(el.name || el.id || "")) score += 20
      return { el, score }
    })
    scored.sort((a, b) => b.score - a.score)
    return scored[0]?.score >= 20 ? scored[0].el : candidates[0] || null
  }

  function isLoginPage() {
    const passwords = findVisiblePasswordInputs()
    if (!passwords.length) return false
    const hay = normalize(
      [
        location.pathname,
        location.href,
        document.title,
        (document.body?.innerText || "").slice(0, 2500)
      ].join(" ")
    )
    if (
      /sign in|log in|login|signin|authenticate|create account|forgot password|portal/.test(
        hay
      )
    ) {
      return true
    }
    // Password + username-like field is enough
    return !!findUsernameNearPassword(passwords[0])
  }

  function runLoginFill(autofillInfo) {
    if (!isLoginPage()) {
      return { attempted: false, filled: 0, reason: "not_login_page" }
    }
    const login = findSiteLoginForHost(autofillInfo, detectHost())
    if (!login || (!login.loginEmail && !login.loginPassword)) {
      return { attempted: true, filled: 0, reason: "no_matching_credentials" }
    }

    const passwords = findVisiblePasswordInputs()
    const passwordEl = passwords[0]
    if (!passwordEl) {
      return { attempted: true, filled: 0, reason: "no_password_field" }
    }
    const userEl = findUsernameNearPassword(passwordEl)
    let filled = 0

    globalThis.__qyvarexFilling = true
    try {
      if (userEl && login.loginEmail) {
        const cur = (userEl.value || "").trim()
        if (cur !== login.loginEmail) {
          setNativeValue(userEl, login.loginEmail)
          filled += 1
        } else {
          filled += 1
        }
      }
      if (login.loginPassword) {
        const cur = passwordEl.value || ""
        if (cur !== login.loginPassword) {
          setNativeValue(passwordEl, login.loginPassword)
          filled += 1
        } else {
          filled += 1
        }
      }
    } finally {
      globalThis.__qyvarexFilling = false
    }

    return {
      attempted: true,
      filled,
      reason: filled ? "ok" : "unchanged",
      siteName: login.siteName || login.hostname || "site"
    }
  }

  function effectiveAnswers(autofillInfo) {
    const global = autofillInfo?.answers || {}
    const { scopeKey } = currentScopeKey()
    const scoped = siteStepAnswersFromExtras(autofillInfo?.extras)?.[scopeKey]
    const siteMap =
      scoped && typeof scoped === "object" && !Array.isArray(scoped) ? scoped : {}
    return { ...global, ...siteMap }
  }

  const LEARN_NOISE_RE =
    /qyvarex|filled\s*\d*\s*items?|text fields? ok|no resume file input|fill\s*again|dismiss|button clicks sync|learning answers for next|saved to hub|signed.?in fields filled|login page detected|memory:/i

  function isLearnableText(question, answer) {
    if (!question || !answer) return false
    if (question.length < 8 || answer.length < 1) return false
    const q = question.replace(/\s+/g, " ").trim()
    const a = answer.replace(/\s+/g, " ").trim()
    const compact = (q + " " + a).replace(/\s+/g, "").toLowerCase()
    if (LEARN_NOISE_RE.test(q) || LEARN_NOISE_RE.test(a)) return false
    if (/fillagain|dismiss|qyvarexautofill/.test(compact)) return false
    if (/^(submit|continue|next|back|upload|save|apply|dismiss|fill again)$/i.test(a))
      return false
    // Concatenated Yes/No option labels are not real answers
    if (/^yesno$/i.test(a.replace(/\s+/g, ""))) return false
    return true
  }

  function labelForControl(el) {
    const bits = []
    if (el.id) {
      const byFor = document.querySelector(`label[for="${CSS.escape(el.id)}"]`)
      if (byFor) bits.push(byFor.textContent || "")
    }
    const wrapping = el.closest("label")
    if (wrapping) bits.push(wrapping.textContent || "")

    const ashby =
      el.closest(".ashby-application-form-field-entry") ||
      el.closest("fieldset") ||
      el.closest("[class*='_container_']")
    if (ashby) {
      const title =
        ashby.querySelector(".ashby-application-form-question-title") ||
        ashby.querySelector("[class*='_label_']") ||
        ashby.querySelector("label") ||
        ashby.querySelector("h3, h4, legend, span")
      if (title) bits.push(title.textContent || "")
    }

    bits.push(
      el.getAttribute("aria-label") || "",
      el.getAttribute("placeholder") || "",
      el.getAttribute("name") || "",
      el.getAttribute("id") || "",
      el.getAttribute("autocomplete") || ""
    )
    return normalize(bits.filter(Boolean).join(" "))
  }

  /** Build ordered matchers: first match wins per field. */
  function identityMatchers(identity) {
    const entries = []
    const add = (value, patterns, scoreBoost = 0) => {
      if (!value || !String(value).trim()) return
      entries.push({
        value: String(value).trim(),
        patterns: patterns.map(normalize),
        scoreBoost
      })
    }

    add(identity.email, ["email", "e mail", "email address", "work email"], 10)
    add(identity.phone, [
      "phone",
      "phone number",
      "mobile",
      "mobile phone",
      "tel",
      "telephone",
      "cell"
    ], 10)
    add(identity.firstName, [
      "first name",
      "firstname",
      "given name",
      "givenname",
      "legal first"
    ], 8)
    add(identity.lastName, [
      "last name",
      "lastname",
      "family name",
      "surname",
      "legal last"
    ], 8)
    add(identity.fullName, [
      "full name",
      "legal name",
      "your name",
      "candidate name",
      "name"
    ], 5)
    add(identity.linkedin, [
      "linkedin",
      "linkedin url",
      "linkedin profile",
      "linked in"
    ], 9)
    add(identity.website, [
      "website",
      "personal website",
      "portfolio",
      "personal url",
      "homepage"
    ], 7)
    add(identity.address?.line1, ["address", "street", "address 1", "address1", "street address"], 6)
    add(identity.address?.city, ["city", "town"], 6)
    add(identity.address?.state, ["state", "province", "region"], 6)
    add(identity.address?.postalCode, [
      "zip",
      "zip code",
      "postal",
      "postal code",
      "postcode"
    ], 6)
    add(identity.address?.country, ["country"], 6)
    return entries
  }

  function matchValue(label, el, matchers) {
    const auto = normalize(el.getAttribute("autocomplete") || "")
    const type = (el.getAttribute("type") || "text").toLowerCase()

    if (type === "email" || auto === "email") {
      const m = matchers.find((x) => x.patterns.includes("email"))
      if (m) return m.value
    }
    if (type === "tel" || auto === "tel" || auto === "tel-national") {
      const m = matchers.find((x) => x.patterns.some((p) => p.includes("phone") || p === "tel"))
      if (m) return m.value
    }
    if (auto === "given-name") {
      const m = matchers.find((x) => x.patterns.includes("first name"))
      if (m) return m.value
    }
    if (auto === "family-name") {
      const m = matchers.find((x) => x.patterns.includes("last name"))
      if (m) return m.value
    }
    if (auto === "name") {
      const m = matchers.find((x) => x.patterns.includes("full name") || x.patterns.includes("name"))
      if (m) return m.value
    }
    if (auto === "url") {
      const m = matchers.find(
        (x) => x.patterns.includes("linkedin") || x.patterns.includes("website")
      )
      if (m) return m.value
    }

    let best = null
    let bestScore = 0
    for (const m of matchers) {
      for (const pattern of m.patterns) {
        if (!pattern) continue
        // Prefer exact / contained label matches; avoid bare "name" stealing first/last.
        let score = 0
        if (label === pattern) score = 100 + m.scoreBoost
        else if (label.includes(pattern)) score = 60 + m.scoreBoost + pattern.length
        else if (pattern.includes(label) && label.length >= 4) score = 40 + m.scoreBoost
        if (score > bestScore) {
          bestScore = score
          best = m.value
        }
      }
    }
    // Bare "name" alone: only accept if score came from full-name patterns strongly
    if (label === "name" && bestScore < 65) {
      const full = matchers.find((x) => x.patterns.includes("full name"))
      return full?.value || best
    }
    return bestScore >= 40 ? best : null
  }

  function collectControls() {
    const nodes = Array.from(
      document.querySelectorAll("input, textarea")
    )
    return nodes.filter((el) => {
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement))
        return false
      const type = (el.getAttribute("type") || "text").toLowerCase()
      if (
        ["hidden", "submit", "button", "checkbox", "radio", "file", "password"].includes(
          type
        )
      ) {
        return false
      }
      return isVisible(el)
    })
  }

  function applyCustomAnswers(label, answers) {
    if (!answers || typeof answers !== "object") return null
    const nLabel = normalize(label)
    for (const [key, value] of Object.entries(answers)) {
      if (!value) continue
      const nKey = normalize(key)
      if (nLabel === nKey || nLabel.includes(nKey) || nKey.includes(nLabel)) {
        return String(value)
      }
    }
    return null
  }

  function runIdentityFill(autofillInfo) {
    const identity = autofillInfo?.identity || {}
    const matchers = identityMatchers(identity)
    const answers = effectiveAnswers(autofillInfo)
    const used = new Set()
    const filled = []
    const missed = []

    for (const el of collectControls()) {
      const label = labelForControl(el)
      let value = matchValue(label, el, matchers)
      if (!value) value = applyCustomAnswers(label, answers)

      if (!value) {
        if (label) missed.push(label)
        continue
      }

      // Prefer unique assignment for first/last/email/phone when possible
      const key = value
      if (
        used.has(key) &&
        (label.includes("first") ||
          label.includes("last") ||
          label.includes("email") ||
          label.includes("phone"))
      ) {
        // allow same value on multiple fields only for full name duplicates
      }

      if ((el.value || "").trim() === value) {
        filled.push({ label: label || el.name || "field", skipped: true })
        continue
      }

      setNativeValue(el, value)
      used.add(key)
      filled.push({ label: label || el.name || "field", value })
    }

    return { filled, missed }
  }

  function findResumeFileInput(root = document) {
    const byId = root.querySelector('input[type="file"][id="_systemfield_resume"]')
    if (byId) return byId

    const resumeRe = /\b(resume|cv|curriculum vitae)\b/i
    const skipRe = /\b(cover\s*letter|autofill from resume)\b/i

    const entries = root.querySelectorAll(
      '.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"], label, fieldset'
    )
    for (const entry of entries) {
      const text = (entry.textContent || "").replace(/\s+/g, " ").trim()
      if (!resumeRe.test(text) || skipRe.test(text)) continue
      const input = entry.querySelector('input[type="file"]')
      if (input) return input
    }

    const inputs = Array.from(root.querySelectorAll('input[type="file"]'))
    return (
      inputs.find((el) => {
        const hay = [el.id, el.name, el.getAttribute("aria-label"), el.accept]
          .filter(Boolean)
          .join(" ")
        return resumeRe.test(hay) && !skipRe.test(hay)
      }) || null
    )
  }

  function base64ToUint8Array(base64) {
    const binary = atob(base64)
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
    return bytes
  }

  async function loadResumeFile(resumeId) {
    const response = await sendToBackground({
      name: "getResumeBlob",
      body: resumeId ? { resumeId } : {}
    })
    if (!response?.ok || !response.base64) {
      throw new Error(response?.message || "no_resume")
    }
    const bytes = base64ToUint8Array(response.base64)
    const file = new File([bytes], response.fileName || "resume.pdf", {
      type: response.mimeType || "application/pdf",
      lastModified: Date.now()
    })
    return file
  }

  function assignFileToInput(input, file) {
    const dt = new DataTransfer()
    dt.items.add(file)
    input.files = dt.files
    for (const name of ["input", "change", "blur"]) {
      input.dispatchEvent(new Event(name, { bubbles: true }))
    }
  }

  async function uploadResume(autofillInfo) {
    const input = findResumeFileInput()
    if (!input) {
      return { ok: false, reason: "no_file_input" }
    }
    if (input.files && input.files.length > 0) {
      return { ok: true, skipped: true, fileName: input.files[0].name }
    }
    try {
      const file = await loadResumeFile(autofillInfo.defaultResumeId)
      assignFileToInput(input, file)
      return { ok: true, fileName: file.name }
    } catch (error) {
      return {
        ok: false,
        reason: error instanceof Error ? error.message : String(error)
      }
    }
  }

  function ensureStatusHost() {
    let host = document.getElementById(HOST_ID)
    if (host) return host
    host = document.createElement("div")
    host.id = HOST_ID
    host.style.cssText = [
      "all: initial",
      "position: fixed",
      "z-index: 2147483646",
      "top: 16px",
      "right: 16px",
      "font-family: Segoe UI, system-ui, sans-serif"
    ].join(";")
    document.documentElement.appendChild(host)
    return host
  }

  function renderStatus(state) {
    const host = ensureStatusHost()
    const card = document.createElement("div")
    card.style.cssText = [
      "min-width: 240px",
      "max-width: 320px",
      "padding: 12px 14px",
      "border-radius: 12px",
      "background: #102a43",
      "color: #f0f4f8",
      "box-shadow: 0 8px 28px rgba(0,0,0,.35)",
      "font-size: 13px",
      "line-height: 1.4"
    ].join(";")

    const title = document.createElement("div")
    title.textContent = "Qyvarex Autofill"
    title.style.cssText = "font-weight: 700; margin-bottom: 6px; color: #f6c453;"
    card.appendChild(title)

    const body = document.createElement("div")
    body.textContent = state.message
    card.appendChild(body)

    if (state.detail) {
      const detail = document.createElement("div")
      detail.textContent = state.detail
      detail.style.cssText = "margin-top: 6px; opacity: .8; font-size: 12px;"
      card.appendChild(detail)
    }

    const actions = document.createElement("div")
    actions.style.cssText = "margin-top: 10px; display: flex; gap: 8px;"

    const refill = document.createElement("button")
    refill.textContent = "Fill again"
    refill.style.cssText =
      "border:0;border-radius:8px;padding:6px 10px;background:#0b6e4f;color:#fff;font-weight:600;cursor:pointer;"
    refill.onclick = () => {
      void runFill()
    }
    actions.appendChild(refill)

    const dismiss = document.createElement("button")
    dismiss.textContent = "Dismiss"
    dismiss.style.cssText =
      "border:1px solid #486581;border-radius:8px;padding:6px 10px;background:transparent;color:#f0f4f8;cursor:pointer;"
    dismiss.onclick = () => host.remove()
    actions.appendChild(dismiss)

    card.appendChild(actions)
    host.replaceChildren(card)
  }

  async function loadAutofillInfo() {
    const response = await sendToBackground({
      name: "getAutofillInfo",
      body: {}
    })
    if (!response?.ok || !response.autofillInfo) {
      throw new Error(
        response?.message ||
          "No profile selected or team hub not connected. Open extension Options."
      )
    }
    return response.autofillInfo
  }

  function cleanQuestionText(text) {
    return (text || "")
      .replace(/\u2731/g, "")
      .replace(/\*/g, "")
      .replace(/\s+/g, " ")
      .trim()
  }

  function fieldRootFrom(el) {
    return (
      el.closest(".ashby-application-form-field-entry") ||
      el.closest('[class*="ashby-application-form-field-entry"]') ||
      el.closest("fieldset") ||
      el.closest("[role='group']") ||
      el.closest("label")?.parentElement ||
      el.parentElement
    )
  }

  function questionFromRoot(root) {
    if (!root) return ""
    const title =
      root.querySelector(".ashby-application-form-question-title") ||
      root.querySelector("[class*='_label_']") ||
      root.querySelector("legend") ||
      root.querySelector("h3, h4") ||
      root.querySelector("label")
    const raw = title
      ? title.textContent || ""
      : (root.getAttribute("aria-label") || root.textContent || "").slice(0, 300)
    return cleanQuestionText(raw)
  }

  function choiceButtonsIn(root) {
    if (!root) return []
    return Array.from(
      root.querySelectorAll(
        'button, [role="button"], [role="radio"], input[type="radio"]'
      )
    ).filter((el) => isVisible(el) || el instanceof HTMLInputElement)
  }

  function optionLabel(el) {
    if (el instanceof HTMLInputElement && el.type === "radio") {
      const lab =
        (el.id &&
          document.querySelector(`label[for="${CSS.escape(el.id)}"]`)?.textContent) ||
        el.closest("label")?.textContent ||
        el.value ||
        el.getAttribute("aria-label") ||
        ""
      return cleanQuestionText(lab)
    }
    return cleanQuestionText(
      el.textContent || el.getAttribute("aria-label") || el.getAttribute("value") || ""
    )
  }

  function findAnswerForQuestion(question, answers) {
    if (!question || !answers) return null
    const nq = normalize(question)
    if (answers[question]) return answers[question]
    for (const [key, value] of Object.entries(answers)) {
      const nk = normalize(key)
      if (!nk || !value) continue
      if (nq === nk || nq.includes(nk) || nk.includes(nq)) return String(value)
    }
    return null
  }

  function optionsMatch(optionText, wanted) {
    const a = normalize(optionText)
    const b = normalize(wanted)
    if (!a || !b) return false
    if (a === b) return true
    if (a.includes(b) || b.includes(a)) return true
    // Yes/No synonyms
    const yes = ["yes", "y", "true", "i consent", "consent"]
    const no = ["no", "n", "false", "opt out", "do not", "dont"]
    const aYes = yes.some((x) => a === x || a.startsWith(x + " ") || a.includes(" " + x))
    const bYes = yes.some((x) => b === x || b.startsWith(x + " "))
    const aNo = no.some((x) => a === x || a.startsWith(x + " ") || a.includes(x))
    const bNo = no.some((x) => b === x || b.startsWith(x + " "))
    if (aYes && bYes) return true
    if (aNo && bNo) return true
    return false
  }

  function runChoiceFill(autofillInfo) {
    const answers = effectiveAnswers(autofillInfo)
    const roots = new Set()
    document
      .querySelectorAll(
        '.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"], fieldset, [role="group"]'
      )
      .forEach((el) => roots.add(el))

    let clicked = 0
    let already = 0
    globalThis.__qyvarexFilling = true
    try {
      for (const root of roots) {
        const question = questionFromRoot(root)
        if (!question || question.length < 8) continue
        const wanted = findAnswerForQuestion(question, answers)
        if (!wanted) continue

        const options = choiceButtonsIn(root)
        if (options.length < 2) continue

        const target = options.find((el) => optionsMatch(optionLabel(el), wanted))
        if (!target) continue

        const selected =
          (target instanceof HTMLInputElement && target.checked) ||
          target.getAttribute("aria-pressed") === "true" ||
          target.getAttribute("aria-checked") === "true" ||
          /selected|active|checked/i.test(target.className || "")

        if (selected) {
          already += 1
          continue
        }

        if (target instanceof HTMLInputElement) {
          target.click()
          target.checked = true
          target.dispatchEvent(new Event("input", { bubbles: true }))
          target.dispatchEvent(new Event("change", { bubbles: true }))
        } else {
          target.click()
        }
        clicked += 1
      }
    } finally {
      setTimeout(() => {
        globalThis.__qyvarexFilling = false
      }, 300)
    }
    return { clicked, already }
  }

  function flashLearn(question, answer) {
    const host = ensureStatusHost()
    const note = document.createElement("div")
    note.style.cssText = [
      "margin-top: 8px",
      "padding: 8px 10px",
      "border-radius: 8px",
      "background: #0b6e4f",
      "color: #fff",
      "font-size: 12px",
      "max-width: 320px"
    ].join(";")
    note.textContent = `Saved to hub: “${answer}”`
    const q = document.createElement("div")
    q.style.cssText = "opacity:.85;margin-top:4px;font-size:11px;"
    q.textContent = question.length > 90 ? question.slice(0, 90) + "…" : question
    note.appendChild(q)

    let card = host.firstElementChild
    if (!card) {
      renderStatus({
        message: "Learning answers for next applications",
        detail: "Choices sync to this site/step on the hub (and global fallback)."
      })
      card = host.firstElementChild
    }
    card?.appendChild(note)
    setTimeout(() => note.remove(), 3500)
  }

  async function learnAnswer(question, answer) {
    const q = cleanQuestionText(question)
    const a = cleanQuestionText(answer)
    if (!isLearnableText(q, a)) return
    const { hostname, stepKey, scopeKey } = currentScopeKey()
    try {
      const response = await sendToBackground({
        name: "learnAnswers",
        body: {
          answers: { [q]: a },
          scopeKey,
          hostname,
          stepKey
        }
      })
      if (response?.ok) {
        console.info("[qyvarex] learned answer", {
          question: q,
          answer: a,
          scopeKey
        })
        flashLearn(q, a)
      } else {
        console.warn("[qyvarex] learn failed", response?.message)
      }
    } catch (error) {
      console.warn("[qyvarex] learn failed", error)
    }
  }

  function setupAnswerLearning() {
    if (globalThis.__qyvarexLearnBound) return
    globalThis.__qyvarexLearnBound = true

    document.addEventListener(
      "click",
      (event) => {
        if (globalThis.__qyvarexFilling) return
        const t = event.target
        if (!(t instanceof Element)) return
        // Never learn from our own status toast (Fill again / Dismiss)
        if (t.closest(`#${HOST_ID}`)) return
        const el =
          t.closest(
            'button, [role="button"], [role="radio"], input[type="radio"], label'
          ) || t
        if (!(el instanceof Element)) return
        if (el.closest(`#${HOST_ID}`)) return

        let control = el
        if (el instanceof HTMLLabelElement) {
          const input =
            (el.htmlFor && document.getElementById(el.htmlFor)) ||
            el.querySelector('input[type="radio"]')
          if (input) control = input
        }

        const root = fieldRootFrom(control)
        if (root?.closest?.(`#${HOST_ID}`)) return
        const question = questionFromRoot(root)
        if (!question) return

        const options = choiceButtonsIn(root)
        // Only learn from multi-option choice groups (Yes/No, consent, etc.)
        if (options.length < 2) return

        const answer = optionLabel(control)
        if (!isLearnableText(question, answer)) return
        if (answer.length > 120) return

        void learnAnswer(question, answer)
      },
      true
    )

    document.addEventListener(
      "change",
      (event) => {
        if (globalThis.__qyvarexFilling) return
        const el = event.target
        if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement))
          return
        if (el.type === "file" || el.type === "password" || el.type === "hidden")
          return
        if (el.type === "radio" || el.type === "checkbox") return

        const root = fieldRootFrom(el)
        const question = questionFromRoot(root) || labelForControl(el)
        const value = (el.value || "").trim()
        if (!isLearnableText(question, value)) return
        // Skip identity fields — those live on the profile identity section
        const nq = normalize(question)
        if (
          /^(first name|last name|full name|name|email|phone|linkedin|website|address)/.test(
            nq
          )
        ) {
          return
        }
        void learnAnswer(question, value)
      },
      true
    )
  }

  async function runFill() {
    renderStatus({ message: "Loading profile from team hub…" })
    try {
      const info = await loadAutofillInfo()

      const loginResult = runLoginFill(info)
      if (loginResult.attempted && loginResult.reason === "ok") {
        renderStatus({
          message: `Signed-in fields filled for ${info.profileLabel || "profile"}`,
          detail: `Login credentials applied for ${loginResult.siteName} · ${detectHost()}`
        })
        console.info("[qyvarex] login fill", loginResult)
        return { login: loginResult }
      }

      if (loginResult.attempted && loginResult.reason === "no_matching_credentials") {
        renderStatus({
          message: "Login page detected — no matching site credentials",
          detail:
            "Add a row under ATS / portal login credentials with this job site name or hostname, then Activate again."
        })
        return { login: loginResult }
      }

      const { filled, missed } = runIdentityFill(info)
      const wrote = filled.filter((f) => !f.skipped).length
      const already = filled.filter((f) => f.skipped).length
      const matched = wrote + already

      const choices = runChoiceFill(info)

      renderStatus({ message: "Uploading resume…" })
      const resume = await uploadResume(info)

      let message
      if (wrote > 0 || choices.clicked > 0) {
        message = `Filled ${wrote + choices.clicked} item${
          wrote + choices.clicked === 1 ? "" : "s"
        } for ${info.profileLabel || "profile"}`
      } else if (already > 0 || choices.already > 0) {
        message = `Answers already set for ${info.profileLabel || "profile"}`
      } else {
        message = `No matching fields found for ${
          info.profileLabel || "profile"
        }`
      }

      const details = []
      if (matched) details.push(`${matched} text field${matched === 1 ? "" : "s"} OK`)
      if (choices.clicked || choices.already) {
        details.push(
          `${choices.clicked + choices.already} Yes/No choice${
            choices.clicked + choices.already === 1 ? "" : "s"
          } OK`
        )
      }
      if (resume.ok && resume.skipped)
        details.push(`Resume already attached (${resume.fileName})`)
      else if (resume.ok) details.push(`Resume uploaded (${resume.fileName})`)
      else if (resume.reason === "no_file_input")
        details.push("No resume file input on page")
      else if (resume.reason === "no_resume")
        details.push("No resume on hub profile — upload one in the dashboard")
      else details.push(`Resume skipped: ${resume.reason}`)
      const scope = currentScopeKey()
      details.push(
        `Memory: ${scope.hostname} · ${scope.stepKey} (site/step + global fallback)`
      )

      renderStatus({
        message,
        detail: details.join(" · ")
      })
      console.info("[qyvarex] fill complete", {
        profileId: info.profileId,
        scope,
        wrote,
        already,
        choices,
        filled,
        missed: missed.slice(0, 20),
        resume,
        login: loginResult
      })
      return { wrote, filled, missed, resume, choices, login: loginResult }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      renderStatus({ message: "Could not autofill", detail: message })
      console.warn("[qyvarex] fill failed", error)
      return null
    }
  }

  globalThis.bootstrapJobrightHelperRuntime = async function bootstrapJobrightHelperRuntime() {
    document.documentElement.dataset.jobrightForkHelper = "ready"
    window.dispatchEvent(new CustomEvent("jobright-fork:helper-ready"))
    setupAnswerLearning()
    await runFill()
    return {
      openJobrightHelperFromExtensionIcon() {
        void runFill()
      }
    }
  }

  console.info("[qyvarex] helper phase-1 loaded", {
    href: location.href,
    frame: window.top === window.self ? "top" : "child"
  })

  void globalThis.bootstrapJobrightHelperRuntime()
})()
