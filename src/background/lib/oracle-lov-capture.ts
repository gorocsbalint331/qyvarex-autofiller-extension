type Capture = {
  field: string
  search: string
  items: unknown[]
  createdAt: number
}

const captures = new Map<string, Capture>()

export function setOracleCapture(
  id: string,
  data: { field: string; search: string; items: unknown[] }
) {
  captures.set(id, { ...data, createdAt: Date.now() })
}

export function getOracleCapture(id: string) {
  return captures.get(id)
}

export function updateOracleCaptureItems(id: string, items: unknown[]) {
  const prev = captures.get(id)
  if (!prev) {
    captures.set(id, {
      field: "",
      search: "",
      items,
      createdAt: Date.now()
    })
    return
  }
  captures.set(id, { ...prev, items })
}
