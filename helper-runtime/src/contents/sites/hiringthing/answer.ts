// @ts-nocheck
/**
 * HiringThing — answer shaping (country / phone-country overrides).
 */

function trimString(value) {
  return typeof value === "string" ? value.trim() : ""
}

function isCountryLabel(label) {
  return (
    typeof label === "string" &&
    label
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase() === "country"
  )
}

function isCountryFillDataItem(item) {
  return !!item && typeof item === "object" && isCountryLabel(item.name)
}

function trimPhoneCountryCode(value) {
  return typeof value === "string" ? value.trim() : ""
}

function isPhoneCountryCodeLabel(label) {
  return (
    typeof label === "string" &&
    label
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase() === "country phone code"
  )
}

function isPhoneCountryCodeFillDataItem(item) {
  return !!item && typeof item === "object" && isPhoneCountryCodeLabel(item.name)
}

function applyPhoneCountryCodeOverride(answer, phoneCountryCode) {
  const code = trimPhoneCountryCode(phoneCountryCode)
  if (!code) return answer

  let hasRegularPhoneCountryCode = false
  const regular = Object.fromEntries(
    Object.entries(answer.regular ?? {}).map(([key, value]) => {
      if (isPhoneCountryCodeLabel(key)) {
        hasRegularPhoneCountryCode = true
        return [key, code]
      }
      return [key, value]
    }),
  )
  if (!hasRegularPhoneCountryCode) {
    regular["Country Phone Code"] = code
  }

  const fillDataList = Array.isArray(answer.fillDataList)
    ? answer.fillDataList
    : []
  let hasPhoneCountryCodeFillData = false
  const nextFillDataList = fillDataList.map((item) => {
    if (isPhoneCountryCodeFillDataItem(item)) {
      hasPhoneCountryCodeFillData = true
      return { ...item, value: code }
    }
    return item
  })
  if (!hasPhoneCountryCodeFillData) {
    nextFillDataList.push({ name: "Country Phone Code", value: code })
  }

  console.info("[HiringThing][PhoneCountry] fresh-autofill-info-override", {
    hasRegularPhoneCountryCode,
    hasPhoneCountryCodeFillData,
  })

  return {
    ...answer,
    regular,
    fillDataList: nextFillDataList,
  }
}

export function formatHiringThingAnswer(answer, country, phoneCountryCode = "") {
  const countryText = trimString(country)
  const rest = Object.fromEntries(
    Object.entries(answer).filter(([key]) => !isCountryLabel(key)),
  )
  const fillDataList = Array.isArray(answer.fillDataList)
    ? answer.fillDataList
    : undefined
  const regular = { ...(answer.regular ?? {}) }

  for (const item of fillDataList ?? []) {
    if (!item || typeof item !== "object") continue
    const name = item.name
    const value = item.value
    if (
      typeof name !== "string" ||
      isCountryLabel(name) ||
      !value ||
      regular[name]
    ) {
      continue
    }
    regular[name] = value
  }

  const regularEntries = Object.entries(regular)

  if (!countryText) {
    const filteredRegular = Object.fromEntries(
      regularEntries.filter(([key]) => !isCountryLabel(key)),
    )
    const filteredFillData = fillDataList?.filter(
      (item) => !isCountryFillDataItem(item),
    )
    return applyPhoneCountryCodeOverride(
      {
        ...rest,
        regular: filteredRegular,
        ...(filteredFillData ? { fillDataList: filteredFillData } : {}),
      },
      phoneCountryCode,
    )
  }

  let hasRegularCountry = false
  const nextRegular = Object.fromEntries(
    regularEntries.map(([key, value]) => {
      if (isCountryLabel(key)) {
        hasRegularCountry = true
        return [key, countryText]
      }
      return [key, value]
    }),
  )
  if (!hasRegularCountry) {
    nextRegular.Country = countryText
  }

  let hasCountryFillData = false
  const mappedFillData = fillDataList?.map((item) => {
    if (isCountryFillDataItem(item)) {
      hasCountryFillData = true
      return { ...item, value: countryText }
    }
    return item
  })

  return applyPhoneCountryCodeOverride(
    {
      ...rest,
      country: countryText,
      regular: nextRegular,
      fillDataList: hasCountryFillData
        ? mappedFillData
        : [...(mappedFillData ?? []), { name: "Country", value: countryText }],
    },
    phoneCountryCode,
  )
}
