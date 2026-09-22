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

  function yearRange(text) {
    const t = normalize(text)
    if (!t) return null
    const plus = t.match(/^(\d+)\s*\+$/) || t.match(/^(\d+)\s*plus/)
    if (plus) return { lo: +plus[1], hi: 99 }
    const range = t.match(/(\d+)\s*[-–to]+\s*(\d+)/)
    if (range) return { lo: +range[1], hi: +range[2] }
    const one = t.match(/^(\d+)\s*(years?|yrs?)?$/)
    if (one) return { lo: +one[1], hi: +one[1] }
    return null
  }

  function scoreSelectOption(wantRaw, optText) {
    const want = normalize(wantRaw)
    const t = normalize(optText)
    if (!want || !t || /please select|select one|choose/.test(t)) return 0
    if (t === want) return 100
    const wr = yearRange(want)
    const or = yearRange(t)
    if (wr && or) {
      const overlap = Math.min(wr.hi, or.hi) - Math.max(wr.lo, or.lo)
      if (overlap >= 0) return 90
      if (Math.abs((wr.lo + wr.hi) / 2 - (or.lo + or.hi) / 2) <= 2) return 75
    }
    if (t.includes(want) || want.includes(t)) return 80
    return 0
  }

  function setNativeValue(el, value) {
    if (el instanceof HTMLSelectElement) {
      const want = String(value)
      const options = Array.from(el.options)
      let best = null
      let bestScore = 0
      for (const o of options) {
        const text = o.textContent || o.label || ""
        const s = Math.max(
          scoreSelectOption(want, text),
          normalize(o.value) === normalize(want) ? 95 : 0
        )
        if (s > bestScore) {
          bestScore = s
          best = o
        }
      }
      if (!best || bestScore < 40) return false
      el.value = best.value
      best.selected = true
      for (const name of ["input", "change", "blur"]) {
        el.dispatchEvent(new Event(name, { bubbles: true }))
      }
      return true
    }
    const proto = Object.getPrototypeOf(el)
    const desc = Object.getOwnPropertyDescriptor(proto, "value")
    if (desc?.set) desc.set.call(el, value)
    else el.value = value
    for (const name of ["input", "change", "blur"]) {
      el.dispatchEvent(new Event(name, { bubbles: true }))
    }
    return true
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

  function localTomorrowYmd() {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, "0")
    const day = String(d.getDate()).padStart(2, "0")
    return `${y}-${m}-${day}`
  }

  function localTodayYmd() {
    const d = new Date()
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, "0")
    const day = String(d.getDate()).padStart(2, "0")
    return `${y}-${m}-${day}`
  }

  /** Hub hiringDate if today-or-later; otherwise tomorrow. */
  function availabilityYmd(extras) {
    const today = localTodayYmd()
    const tomorrow = localTomorrowYmd()
    const raw = String(
      extras?.availableFrom ?? extras?.available_from ?? extras?.hiringDate ?? ""
    ).trim()
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw) && raw >= today) return raw
    return tomorrow
  }

  function formatLocation(identity, extras) {
    const fromExtras = extras?.currentLocation ?? extras?.current_location
    if (fromExtras && String(fromExtras).trim()) return String(fromExtras).trim()
    const a = identity?.address || {}
    return [a.city, a.state, a.country].map((s) => (s || "").trim()).filter(Boolean).join(", ")
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

  /** Prefer extras, else answers whose question matches the label patterns. */
  function valueFromExtrasOrAnswers(extras, answers, extraKeys, patterns) {
    for (const k of extraKeys) {
      const v = extras?.[k]
      if (v != null && String(v).trim()) return String(v).trim()
    }
    const pats = patterns.map(normalize)
    for (const [q, a] of Object.entries(answers || {})) {
      if (a == null || !String(a).trim()) continue
      const nq = normalize(q)
      if (pats.some((p) => nq === p || (p.length >= 4 && nq.includes(p)))) {
        return String(a).trim()
      }
    }
    return ""
  }

  /** Structured extras → label matchers (Personio Years of Experience, etc.). */
  function extrasMatchers(autofillInfo) {
    const extras =
      autofillInfo?.extras && typeof autofillInfo.extras === "object"
        ? autofillInfo.extras
        : {}
    const answers = effectiveAnswers(autofillInfo)
    const entries = []
    const add = (value, patterns, scoreBoost = 0) => {
      if (value == null || !String(value).trim()) return
      entries.push({
        value: String(value).trim(),
        patterns: patterns.map(normalize),
        scoreBoost
      })
    }
    const yoePatterns = [
      "years of experience",
      "years experience",
      "total experience",
      "how many years"
    ]
    add(
      valueFromExtrasOrAnswers(
        extras,
        answers,
        ["yearsOfExperience", "years_of_experience"],
        yoePatterns
      ),
      yoePatterns,
      12
    )
    const locPatterns = [
      "planned work location",
      "preferred work location",
      "work location",
      "preferred location"
    ]
    add(
      valueFromExtrasOrAnswers(
        extras,
        answers,
        ["plannedWorkLocation", "planned_work_location"],
        locPatterns
      ),
      locPatterns,
      14
    )
    add(extras.expectedSalary ?? extras.expected_salary ?? extras.salary, [
      "expected salary",
      "salary expectation",
      "desired salary",
      "salary"
    ], 10)
    add(availabilityYmd(extras), [
      "available from",
      "availability",
      "availability to join",
      "start date",
      "earliest start",
      "when can you start",
      "join us"
    ], 12)
    const locationValue = formatLocation(
      autofillInfo?.identity || {},
      extras
    )
    add(locationValue, [
      "current location",
      "where are you located",
      "where are you based",
      "where based",
      "your location"
    ], 12)
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
      document.querySelectorAll("input, textarea, select")
    )
    return nodes.filter((el) => {
      if (el instanceof HTMLSelectElement) {
        return isVisible(el) && !el.disabled
      }
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

  function isConsentLabel(label) {
    const n = normalize(label)
    if (!n) return false
    if (/authorized|sponsorship|visa|eligible to work/.test(n)) return false
    return (
      /gdpr|privacy policy|data retention|retain my data|i agree|terms and conditions|terms of use|consent to|by checking this box/.test(
        n
      ) ||
      (n.includes("consent") && !n.includes("without"))
    )
  }

  function pickAgreeOptionText(select) {
    const options = Array.from(select.options || [])
    const scored = options
      .map((o) => {
        const t = (o.textContent || o.label || "").trim()
        const n = normalize(t)
        if (!n || /please select|select\.\.\.|choose/.test(n)) return { o, s: 0 }
        let s = 0
        if (/agree|accept|consent|acknowledge|i have read|yes/.test(n)) s = 90
        else if (!/disagree|decline|no\b|opt out/.test(n)) s = 40
        return { o, s, t }
      })
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
    return scored[0]?.t || null
  }

  function runConsentCheckboxFill() {
    let filled = 0
    const boxes = Array.from(
      document.querySelectorAll('input[type="checkbox"]')
    ).filter((el) => isVisible(el) && !el.disabled)
    globalThis.__qyvarexFilling = true
    try {
      for (const el of boxes) {
        const label = labelForControl(el)
        if (!isConsentLabel(label)) continue
        if (el.checked) continue
        el.click()
        el.checked = true
        el.dispatchEvent(new Event("input", { bubbles: true }))
        el.dispatchEvent(new Event("change", { bubbles: true }))
        filled += 1
      }
    } finally {
      globalThis.__qyvarexFilling = false
    }
    return filled
  }

  function runIdentityFill(autofillInfo) {
    const identity = autofillInfo?.identity || {}
    const matchers = [
      ...identityMatchers(identity),
      ...extrasMatchers(autofillInfo)
    ]
    const answers = effectiveAnswers(autofillInfo)
    const used = new Set()
    const filled = []
    const missed = []

    for (const el of collectControls()) {
      const label = labelForControl(el)
      let value = matchValue(label, el, matchers)
      if (!value) value = applyCustomAnswers(label, answers)

      // GDPR / privacy policy <select> — pick an Agree option
      if (
        !value &&
        el instanceof HTMLSelectElement &&
        isConsentLabel(label)
      ) {
        value = pickAgreeOptionText(el)
      }

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

      if (el instanceof HTMLSelectElement) {
        const current = normalize(
          el.options[el.selectedIndex]?.textContent || el.value || ""
        )
        const want = normalize(value)
        if (current && want && (current === want || current.includes(want))) {
          filled.push({ label: label || el.name || "field", skipped: true })
          continue
        }
        const ok = setNativeValue(el, value)
        if (!ok) {
          missed.push(label || "select")
          continue
        }
        used.add(key)
        filled.push({ label: label || el.name || "field", value })
        continue
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
      const consents = runConsentCheckboxFill()

      renderStatus({ message: "Uploading resume…" })
      const resume = await uploadResume(info)

      let message
      const actionCount = wrote + choices.clicked + consents
      if (actionCount > 0) {
        message = `Filled ${actionCount} item${
          actionCount === 1 ? "" : "s"
        } for ${info.profileLabel || "profile"}`
      } else if (already > 0 || choices.already > 0) {
        message = `Answers already set for ${info.profileLabel || "profile"}`
      } else {
        message = `No matching fields found for ${
          info.profileLabel || "profile"
        }`
      }

      const details = []
      if (matched) details.push(`${matched} field${matched === 1 ? "" : "s"} OK (incl. selects)`)
      if (choices.clicked || choices.already) {
        details.push(
          `${choices.clicked + choices.already} Yes/No choice${
            choices.clicked + choices.already === 1 ? "" : "s"
          } OK`
        )
      }
      if (consents) details.push(`${consents} consent box${consents === 1 ? "" : "es"} checked`)
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
        consents,
        filled,
        missed: missed.slice(0, 20),
        resume,
        login: loginResult
      })
      return { wrote, filled, missed, resume, choices, consents, login: loginResult }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      renderStatus({ message: "Could not autofill", detail: message })
      console.warn("[qyvarex] fill failed", error)
      return null
    }
  }

  async function scrapeJobMeta() {
    const title =
      document
        .querySelector(
          'h1, [data-testid="job-title"], [data-automation-id="jobPostingHeader"], .job-title, .posting-headline h2'
        )
        ?.textContent?.trim() ||
      document.querySelector('meta[property="og:title"]')?.getAttribute("content") ||
      document.title ||
      "Untitled role"

    const company =
      document
        .querySelector(
          '[data-company-name], [data-automation-id="company"], .company-name, .posting-categories .company'
        )
        ?.textContent?.trim() ||
      document
        .querySelector('meta[property="og:site_name"]')
        ?.getAttribute("content") ||
      ""

    const costMatch = (document.body?.innerText || "")
      .slice(0, 4000)
      .match(
        /(?:\$|€|£)\s?[\d,]+(?:\s?[-–]\s?(?:\$|€|£)?\s?[\d,]+)?(?:\s*(?:per\s*(?:mo|month|hr|hour|year|yr)|\/\s*(?:mo|hr|yr)|k))?/i
      )

    let resume = ""
    let country = ""
    let other = ""
    try {
      const info = await loadAutofillInfo()
      country = info?.identity?.address?.country || ""
      other = info?.profileLabel || ""
      const defaultId = info?.defaultResumeId
      const resumes = Array.isArray(info?.resumes) ? info.resumes : []
      const def =
        resumes.find((r) => r.id === defaultId) || resumes.find((r) => r.isDefault) || resumes[0]
      resume = def?.displayName || def?.fileName || ""
    } catch {
      /* ignore */
    }

    return {
      title: cleanQuestionText(title).slice(0, 200) || "Untitled role",
      company: cleanQuestionText(company).slice(0, 120),
      link: location.href,
      cost: costMatch ? costMatch[0].trim() : "",
      country,
      resume,
      other,
      status: "applied"
    }
  }

  function looksLikeApplySuccess() {
    const hay = normalize(
      [
        location.pathname,
        location.href,
        document.title,
        (document.body?.innerText || "").slice(0, 3500)
      ].join(" ")
    )
    return /thank you|application (has been )?(received|submitted)|we (have )?received your application|successfully applied|application complete|congratulations.*appl/i.test(
      hay
    )
  }

  async function logApplicationToHub(meta) {
    try {
      const response = await sendToBackground({
        name: "logApplication",
        body: meta
      })
      if (response?.ok) {
        renderStatus({
          message: "Logged to Google Sheet",
          detail: `Tab: ${response.tabName || "mapped profile tab"} · ${meta.title}`
        })
        console.info("[qyvarex] application logged", response)
      } else {
        console.warn("[qyvarex] application log failed", response?.message)
        renderStatus({
          message: "Could not log application to sheet",
          detail: response?.message || "Check hub Sheets config and profile tab mapping"
        })
      }
    } catch (error) {
      console.warn("[qyvarex] application log failed", error)
    }
  }

  function setupApplySuccessWatcher() {
    if (globalThis.__qyvarexApplyWatchBound) return
    globalThis.__qyvarexApplyWatchBound = true
    let armedUntil = 0
    let loggedHref = ""

    async function maybeLog() {
      if (Date.now() > armedUntil) return
      if (!looksLikeApplySuccess()) return
      if (loggedHref === location.href) return
      loggedHref = location.href
      armedUntil = 0
      const meta = await scrapeJobMeta()
      await logApplicationToHub(meta)
    }

    document.addEventListener(
      "click",
      (event) => {
        if (globalThis.__qyvarexFilling) return
        const t = event.target
        if (!(t instanceof Element)) return
        if (t.closest(`#${HOST_ID}`)) return
        const btn =
          t.closest(
            'button, [role="button"], input[type="submit"], a'
          ) || t
        if (!(btn instanceof Element)) return
        const label = cleanQuestionText(
          btn.textContent ||
            btn.getAttribute("aria-label") ||
            btn.getAttribute("value") ||
            ""
        )
        if (
          !/^(submit|apply|send application|submit application|finish|complete application)\b/i.test(
            label
          ) &&
          !/\b(submit application|apply now|send application)\b/i.test(label)
        ) {
          return
        }
        armedUntil = Date.now() + 45000
        window.setTimeout(() => void maybeLog(), 1200)
        window.setTimeout(() => void maybeLog(), 4000)
        window.setTimeout(() => void maybeLog(), 10000)
      },
      true
    )

    const obs = new MutationObserver(() => {
      if (Date.now() <= armedUntil) void maybeLog()
    })
    obs.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    })
  }

  globalThis.bootstrapJobrightHelperRuntime = async function bootstrapJobrightHelperRuntime() {
    document.documentElement.dataset.jobrightForkHelper = "ready"
    window.dispatchEvent(new CustomEvent("jobright-fork:helper-ready"))
    setupAnswerLearning()
    setupApplySuccessWatcher()
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
