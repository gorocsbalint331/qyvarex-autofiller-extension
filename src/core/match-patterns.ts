/**
 * Minimal Chrome match-pattern implementation for supported-sites.
 * (Ported subset of @webext-core/match-patterns.)
 */

export class InvalidMatchPattern extends Error {
  constructor(pattern: string, reason: string) {
    super(`Invalid match pattern "${pattern}": ${reason}`)
  }
}

export class MatchPattern {
  static PROTOCOLS = ["http", "https", "file", "ftp", "urn"] as const

  isAllUrls = false
  protocolMatches: string[] = []
  hostnameMatch = "*"
  pathnameMatch = "*"

  constructor(pattern: string) {
    if (pattern === "<all_urls>") {
      this.isAllUrls = true
      this.protocolMatches = [...MatchPattern.PROTOCOLS]
      this.hostnameMatch = "*"
      this.pathnameMatch = "*"
      return
    }

    const parsed = /(.*):\/\/(.*?)(\/.*)/.exec(pattern)
    if (parsed == null) throw new InvalidMatchPattern(pattern, "Incorrect format")

    const [, protocol, hostname, pathname] = parsed

    if (
      !MatchPattern.PROTOCOLS.includes(protocol as (typeof MatchPattern.PROTOCOLS)[number]) &&
      protocol !== "*"
    ) {
      throw new InvalidMatchPattern(
        pattern,
        `${protocol} not a valid protocol (${MatchPattern.PROTOCOLS.join(", ")})`
      )
    }
    if (hostname.includes(":")) {
      throw new InvalidMatchPattern(pattern, "Hostname cannot include a port")
    }
    if (
      hostname.includes("*") &&
      hostname.length > 1 &&
      !hostname.startsWith("*.")
    ) {
      throw new InvalidMatchPattern(
        pattern,
        "If using a wildcard (*), it must go at the start of the hostname"
      )
    }

    this.protocolMatches = protocol === "*" ? ["http", "https"] : [protocol]
    this.hostnameMatch = hostname
    this.pathnameMatch = pathname
  }

  includes(input: string | URL | Location): boolean {
    if (this.isAllUrls) return true
    const url =
      typeof input === "string"
        ? new URL(input)
        : input instanceof Location
          ? new URL(input.href)
          : input
    return this.protocolMatches.some((protocol) => {
      if (protocol === "http") return this.isHttpMatch(url)
      if (protocol === "https") return this.isHttpsMatch(url)
      return false
    })
  }

  private isHttpMatch(url: URL): boolean {
    return url.protocol === "http:" && this.isHostPathMatch(url)
  }

  private isHttpsMatch(url: URL): boolean {
    return url.protocol === "https:" && this.isHostPathMatch(url)
  }

  private isHostPathMatch(url: URL): boolean {
    if (!this.hostnameMatch || !this.pathnameMatch) return false
    const hostRegexes = [
      this.convertPatternToRegex(this.hostnameMatch),
      this.convertPatternToRegex(this.hostnameMatch.replace(/^\*\./, ""))
    ]
    const pathRegex = this.convertPatternToRegex(this.pathnameMatch)
    return (
      hostRegexes.some((re) => re.test(url.hostname)) && pathRegex.test(url.pathname)
    )
  }

  private convertPatternToRegex(pattern: string): RegExp {
    const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    return new RegExp(`^${escaped.replace(/\\\*/g, ".*")}$`)
  }
}
