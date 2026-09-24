// @ts-nocheck
/**
 * Normalize country / region / city values for autofill location fields.
 * Bundled directly by scripts/bundle-engine-helper.mjs.
 */

let usRegions = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "AS", name: "American Samoa" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "DC", name: "District of Columbia" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "GU", name: "Guam" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "PR", name: "Puerto Rico" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "VI", name: "Virgin Islands U.S." },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
]

let caRegions = [
  { code: "AB", name: "Alberta" },
  { code: "BC", name: "British Columbia" },
  { code: "MB", name: "Manitoba" },
  { code: "NB", name: "New Brunswick" },
  { code: "NL", name: "Newfoundland and Labrador" },
  { code: "NS", name: "Nova Scotia" },
  { code: "NT", name: "Northwest Territories" },
  { code: "NU", name: "Nunavut" },
  { code: "ON", name: "Ontario" },
  { code: "PE", name: "Prince Edward Island" },
  { code: "QC", name: "Quebec" },
  { code: "SK", name: "Saskatchewan" },
  { code: "YT", name: "Yukon" },
]

let gbRegions = [
  { code: "ENG", name: "England" },
  { code: "SCT", name: "Scotland" },
  { code: "WLS", name: "Wales" },
  { code: "NIR", name: "Northern Ireland" },
]

let allRegions = [...usRegions, ...caRegions, ...gbRegions]

let normalizeRegionKey = (value) =>
  value.trim().toLowerCase().replace(/\s+/g, " ")

let resolveCountryCode = (country) => {
  let key = normalizeRegionKey(country ?? "")
  return ["us", "usa", "united states", "united states of america"].includes(
    key,
  )
    ? "US"
    : ["ca", "canada"].includes(key)
      ? "CA"
      : ["gb", "uk", "united kingdom", "great britain"].includes(key)
        ? "GB"
        : ""
}

let regionsForCountry = (country) => {
  let countryCode = resolveCountryCode(country)
  return "US" === countryCode
    ? usRegions
    : "CA" === countryCode
      ? caRegions
      : "GB" === countryCode
        ? gbRegions
        : allRegions
}

let resolveRegionCode = (value, regions = allRegions) => {
  let trimmed = (value ?? "").trim()
  if (!trimmed) return ""
  let upper = trimmed.toUpperCase()
  let byCode = regions.find((region) => region.code.toUpperCase() === upper)
  if (byCode) return byCode.code
  let normalized = normalizeRegionKey(trimmed)
  let byName = regions.find(
    (region) => normalizeRegionKey(region.name) === normalized,
  )
  return byName?.code ?? ""
}

let normalizeRegionInput = (value, regions = allRegions) => {
  let trimmed = (value ?? "").trim()
  if (!trimmed) return ""
  let code = resolveRegionCode(trimmed, regions)
  return regions.find((region) => region.code === code)?.name ?? trimmed
}

let normalizeAutofillLocation = ({ country, state, city }) => {
  let trimmedCountry = (country ?? "").trim()
  let regions = regionsForCountry(trimmedCountry)
  let normalizedState = normalizeRegionInput(state, regions)
  let trimmedCity = (city ?? "").trim()
  return {
    country: trimmedCountry,
    state: normalizedState,
    city: trimmedCity,
  }
}

export {
  normalizeAutofillLocation,
  normalizeRegionInput,
  resolveRegionCode,
}
