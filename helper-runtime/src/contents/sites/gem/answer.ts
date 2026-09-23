// @ts-nocheck
/**
 * Gem — answer request shaping (Location ↔ Address label mapping).
 */

import * as enums from "../../../core/enums.js"

export async function requestGemAnswers(formRules, requestAnswers) {
  let locationRules = formRules.filter(
    (rule) =>
      rule.type === enums.FIELD_TYPE.TEXT && /^location$/i.test(rule.label),
  )
  if (!locationRules.length) return requestAnswers(formRules)

  let response = await requestAnswers(
    formRules.map((rule) =>
      locationRules.includes(rule) ? { ...rule, label: "Address" } : rule,
    ),
  )
  if (!response || typeof response === "string") return response

  if (Object.hasOwn(response.regular ?? {}, "Address")) {
    let regular = { ...response.regular }
    for (let locationRule of locationRules) {
      regular[locationRule.label] = regular.Address
    }
    if (!formRules.some((rule) => rule.label === "Address")) {
      delete regular.Address
    }
    response.regular = regular
  }

  if (response.fillDataList) {
    response.fillDataList = response.fillDataList.flatMap((item) =>
      item.name === "Address"
        ? [
            ...(formRules.some((rule) => rule.label === "Address")
              ? [item]
              : []),
            ...locationRules.map((locationRule) => ({
              ...item,
              name: locationRule.label,
            })),
          ]
        : [item],
    )
  }

  return response
}
