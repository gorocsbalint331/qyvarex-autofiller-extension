// @ts-nocheck
/**
 * Walmart option matching — exact choice equality for select/checkbox labels.
 */

import * as choiceMatch from "../../methods/choice-match.js"

function matchesWalmartOption(optionText, answerValue) {
  return choiceMatch.isExactChoiceMatch(optionText, answerValue)
}

export { matchesWalmartOption }
