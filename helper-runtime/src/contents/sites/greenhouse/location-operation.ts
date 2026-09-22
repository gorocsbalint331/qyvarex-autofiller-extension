// @ts-nocheck

const DEFAULT_LOCATION_CONTROL_BASE_URL =
  "https://api-geocode-earth-proxy.greenhouse.io/"
const DEFAULT_LOCATION_TYPE = "locality"
const GREENHOUSE_REQUEST_HEADERS = {
  accept: "*/*",
  "accept-language": "en",
  origin: "https://job-boards.greenhouse.io",
  referer: "https://job-boards.greenhouse.io/",
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
}

function trimString(value) {
  return typeof value === "string" ? value.trim() : ""
}

function getConfigValue(config, key, fallback = "") {
  return trimString(config?.[key]) || fallback
}

function buildAutocompleteUrl(baseUrl) {
  try {
    const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`
    return new URL("v1/autocomplete", normalizedBaseUrl).toString()
  } catch {
    return `${DEFAULT_LOCATION_CONTROL_BASE_URL}v1/autocomplete`
  }
}

function parseWindowEnvironment(scriptText) {
  const match = scriptText.match(/window\.ENV\s*=\s*(\{[\s\S]*?\})\s*;?/)
  if (!match?.[1]) {
    return null
  }

  try {
    return JSON.parse(match[1])
  } catch {
    return null
  }
}

export function extractGreenhouseLocationControlConfig(
  documentObject = typeof document === "undefined" ? undefined : document,
) {
  if (!documentObject?.scripts) {
    return {}
  }

  for (const script of Array.from(documentObject.scripts)) {
    const scriptText = script.textContent ?? ""
    if (!scriptText.includes("LOCATION_CONTROL_")) {
      continue
    }

    const environment = parseWindowEnvironment(scriptText)
    if (environment) {
      return {
        provider: trimString(environment.LOCATION_CONTROL_PROVIDER),
        apiKey: trimString(environment.LOCATION_CONTROL_API_KEY),
        baseUrl: trimString(environment.LOCATION_CONTROL_BASE_URL),
      }
    }
  }

  return {}
}

export function buildGreenhouseLocationOperation({
  currentUrl,
  originalAnswer,
  locationControlConfig,
}) {
  const apiKey = getConfigValue(locationControlConfig, "apiKey")
  const baseUrl = getConfigValue(
    locationControlConfig,
    "baseUrl",
    DEFAULT_LOCATION_CONTROL_BASE_URL,
  )
  const locationType = getConfigValue(
    locationControlConfig,
    "locationType",
    DEFAULT_LOCATION_TYPE,
  )

  return {
    field_type: "location",
    question: "Where are you located?",
    description:
      "Search and select the Greenhouse candidate Location option. For Pelias results, Greenhouse displays options as name, region, country when those fields are available.",
    original_answer: originalAnswer,
    search_request_schema: {
      url: buildAutocompleteUrl(baseUrl),
      allowed_methods: ["GET"],
      headers: {
        ...GREENHOUSE_REQUEST_HEADERS,
        referer: currentUrl || GREENHOUSE_REQUEST_HEADERS.referer,
      },
      params: [
        {
          name: "text",
          location: "query",
          description: "Free-text location search query.",
          default_value: "",
          isSearchParam: true,
        },
        {
          name: "api_key",
          location: "query",
          description: "Greenhouse location control API key.",
          default_value: apiKey,
          isMetaParam: true,
        },
        {
          name: "layers",
          location: "query",
          description: "Greenhouse location control result layer filter.",
          default_value: locationType,
          isMetaParam: true,
        },
      ],
    },
  }
}

export function getGreenhouseResolvedLocationValue(resolution) {
  if (resolution?.result?.action !== "SELECT_OPTIONS") {
    return ""
  }

  const selectedValue = resolution.result.selected_values[0]
  return typeof selectedValue === "string" ? selectedValue.trim() : ""
}
