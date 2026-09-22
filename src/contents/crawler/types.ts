/** Shared field types for the clean-TS crawler (mirrors engine FIELD_TYPE subset). */

export const FIELD_TYPE = {
  TEXT: "text",
  TEXTAREA: "textarea",
  SELECT: "select",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  RADIOGROUP: "radiogroup",
  DATE: "date",
  FILE: "file"
} as const

export type FieldType = (typeof FIELD_TYPE)[keyof typeof FIELD_TYPE]

export type DiscoveredField = {
  type: FieldType | "text" | "select" | "textarea" | "radio" | "checkbox"
  label: string
  required: boolean
  options?: string[]
}

export type AtsSiteId =
  | "personio"
  | "greenhouse"
  | "lever"
  | "myworkday"
  | "ashby"
  | "oraclecloud"
  | "paycomonline-v3"
  | "generic"
