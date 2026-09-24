// @ts-nocheck
/**
 * Site-specific country name aliases mapped to ISO2 codes.
 */

const SITE_COUNTRY_ALIASES = [
  { alias: "chinese mainland", iso2: "cn", source: "bytedance" },
  { alias: "mainland china", iso2: "cn", source: "bytedance" },
  { alias: "united states of america", iso2: "us", source: "bytedance" },
  { alias: "usa", iso2: "us", source: "通用缩写（后端答案常见）" },
  { alias: "us", iso2: "us", source: "通用缩写（后端答案常见）" },
  { alias: "u s a", iso2: "us", source: "通用缩写（后端答案常见）" },
  { alias: "ca", iso2: "ca", source: "rippling / icims 地址国家字段" },
  { alias: "uk", iso2: "gb", source: "amazon 1.18 / 后端答案" },
  { alias: "great britain", iso2: "gb", source: "后端答案" },
  { alias: "britain", iso2: "gb", source: "后端答案" },
  { alias: "england", iso2: "gb", source: "后端答案" },
  { alias: "gb", iso2: "gb", source: "后端答案" },
  { alias: "korea south", iso2: "kr", source: "站点选项文案" },
  { alias: "korea republic of", iso2: "kr", source: "站点选项文案" },
  { alias: "republic of korea", iso2: "kr", source: "站点选项文案" },
  { alias: "korea north", iso2: "kp", source: "站点选项文案" },
  { alias: "uae", iso2: "ae", source: "后端答案" },
  { alias: "viet nam", iso2: "vn", source: "站点选项文案" },
  { alias: "the netherlands", iso2: "nl", source: "站点选项文案" },
  { alias: "holland", iso2: "nl", source: "后端答案" },
  { alias: "czechia", iso2: "cz", source: "站点选项文案" },
  { alias: "russian federation", iso2: "ru", source: "站点选项文案" },
  { alias: "hong kong sar", iso2: "hk", source: "站点选项文案" },
  { alias: "hong kong sar china", iso2: "hk", source: "站点选项文案" },
  { alias: "taiwan province of china", iso2: "tw", source: "站点选项文案" },
  { alias: "macao", iso2: "mo", source: "站点选项文案" },
  { alias: "burma", iso2: "mm", source: "站点选项文案" },
  { alias: "cote d ivoire", iso2: "ci", source: "站点选项文案" },
  { alias: "holy see vatican city state", iso2: "va", source: "dayforce 实页" },
  { alias: "holy see", iso2: "va", source: "dayforce 实页" },
  { alias: "turkiye", iso2: "tr", source: "dayforce 实页（2022 年官方改名）" },
  { alias: "republic of the congo", iso2: "cg", source: "dayforce 实页" },
  { alias: "republic of congo", iso2: "cg", source: "dayforce 实页" },
  { alias: "democratic republic of the congo", iso2: "cd", source: "dayforce 实页" },
  { alias: "democratic republic of congo", iso2: "cd", source: "dayforce 实页" },
  { alias: "czech republic", iso2: "cz", source: "dayforce 实页（旧国名）" },
  {
    alias: "bonaire sint eustatius and saba",
    iso2: "bq",
    source: "dayforce 实页（ITI 写 Caribbean Netherlands）"
  },
  { alias: "brunei darussalam", iso2: "bn", source: "dayforce 实页" },
  {
    alias: "hong kong",
    iso2: "hk",
    source: "dayforce 实页（ITI 写 Hong Kong SAR China）"
  },
  { alias: "lao people s democratic republic", iso2: "la", source: "dayforce 实页" },
  { alias: "syrian arab republic", iso2: "sy", source: "dayforce 实页" },
  {
    alias: "state of palestine",
    iso2: "ps",
    source: "dayforce 实页（ITI 写 Palestinian Territories）"
  },
  { alias: "palestine", iso2: "ps", source: "dayforce 实页" },
  { alias: "kosovo", iso2: "xk", source: "dayforce 实页（ITI 数据缺失）" }
]

export const SITE_COUNTRY_NAME_ENTRIES = SITE_COUNTRY_ALIASES.map((entry) => ({
  name: entry.alias,
  iso2: entry.iso2
}))

let aliasToIso2 = new Map(SITE_COUNTRY_ALIASES.map((entry) => [entry.alias, entry.iso2]))

export function getIso2ForSiteCountryName(countryName) {
  return aliasToIso2.get(String(countryName ?? "").trim()) || ""
}
