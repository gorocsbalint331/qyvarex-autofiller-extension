// @ts-nocheck
/**
 * Detect inventory-match ATS source from a job application URL.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

function hostnameMatches(hostname, domain) {
  return hostname === domain || hostname.endsWith(`.${domain}`)
}

function getInventoryMatchSourceByUrl(url) {
  let parsed
  try {
    parsed = new URL(url)
  } catch {
    return null
  }
  if (!["http:", "https:"].includes(parsed.protocol)) return null
  let { hostname, pathname, searchParams } = parsed
  if (
    hostnameMatches(hostname, "greenhouse.io") ||
    searchParams.has("gh_jid") ||
    searchParams.has("gh_src")
  ) {
    return "greenhouse"
  }
  if (hostnameMatches(hostname, "lever.co")) return "lever"
  if (
    hostnameMatches(hostname, "ashbyhq.com") ||
    searchParams.has("ashby_jid")
  ) {
    return "ashby"
  }
  if (
    hostnameMatches(hostname, "myworkdayjobs.com") ||
    hostnameMatches(hostname, "myworkdayjobs-impl.com") ||
    hostnameMatches(hostname, "myworkdaysite.com") ||
    hostnameMatches(hostname, "myworkday.com")
  ) {
    return "workday"
  }
  if (
    hostnameMatches(hostname, "metacareers.com") &&
    /^\/profile\/create_application\/[^/]+/.test(pathname)
  ) {
    return "metacareers"
  }
  if (
    hostnameMatches(hostname, "amazon.jobs") &&
    /\/jobs\/[\w-]+/.test(pathname)
  ) {
    return "amazon"
  }
  if (
    hostnameMatches(hostname, "careers.adobe.com") &&
    (searchParams.has("jobSeqNo") || /\/job\/[\w-]+/.test(pathname))
  ) {
    return "adobe"
  }
  if (
    hostnameMatches(hostname, "jobs.jobvite.com") &&
    /\/job\/[\w-]+/.test(pathname)
  ) {
    return "jobvite"
  }
  if (
    hostnameMatches(hostname, "jobs.gohire.io") &&
    /^\/[^/]+\/(?:[\w-]+-\d+|\d+)\/?$/.test(pathname)
  ) {
    return "gohire"
  }
  if (
    hostnameMatches(hostname, "icims.com") &&
    /^\/jobs\/\d+\//.test(pathname)
  ) {
    return "icims"
  }
  if (
    hostnameMatches(hostname, "tesla.com") &&
    ((hostnameMatches(hostname, "jobs.tesla.com") && pathname.length > 1) ||
      /\/job\/[\w-]+/.test(pathname))
  ) {
    return "tesla"
  }
  if (
    hostnameMatches(hostname, "jobs.gem.com") &&
    /^\/[\w-]+\/[\w-]+/.test(pathname)
  ) {
    return "gem"
  }
  if (hostnameMatches(hostname, "eightfold.ai")) {
    let pid = searchParams.get("pid")
    if (
      (pid && pid.length > 0) ||
      /\/careers\/job\/[\w-]+/.test(pathname) ||
      /[?&]pid=[\w-]+/.test(parsed.hash)
    ) {
      return "eightfold"
    }
  }
  return hostnameMatches(hostname, "apply.workable.com") &&
    /^\/[\w-]+\/j\/[\w-]+/.test(pathname)
    ? "workable"
    : hostnameMatches(hostname, "bamboohr.com") &&
        /\/careers\/[\w-]*\d/.test(pathname)
      ? "bamboohr"
      : hostnameMatches(hostname, "uber.com") &&
          /\/careers\/.*\d{5,}/.test(pathname)
        ? "uber"
        : hostnameMatches(hostname, "google.com") &&
            /^\/about\/careers/.test(pathname) &&
            (/\d{6,}/.test(pathname) || /jid=\d{4,}/.test(parsed.hash))
          ? "google"
          : null
}

function shouldRequestInventoryMatchByUrl(url) {
  return null !== getInventoryMatchSourceByUrl(url)
}

export {
  getInventoryMatchSourceByUrl,
  shouldRequestInventoryMatchByUrl,
}
