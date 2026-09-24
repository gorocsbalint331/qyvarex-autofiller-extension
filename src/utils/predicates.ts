// @ts-nocheck
/**
 * Small typeof / nullability predicates.
 */

export function isObject(value) {
  return value !== null && typeof value === "object"
}

export function isFunction(value) {
  return typeof value === "function"
}

export function isString(value) {
  return typeof value === "string"
}

export function isBoolean(value) {
  return typeof value === "boolean"
}

export function isNumber(value) {
  return typeof value === "number"
}

export function isUndef(value) {
  return value === undefined
}
