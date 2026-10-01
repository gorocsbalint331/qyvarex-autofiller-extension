/** Decode a data: URL into bytes. Works in the helper page and the extension build. */
export function dataUrlToBlob(dataURL: string): Uint8Array {
  const match = /^data:((.*?)(;charset=.*?)?)(;base64)?,/.exec(dataURL)
  if (!match) throw new Error("invalid dataURI")
  const dataString = dataURL.slice(match[0].length)
  const byteString = match[4] ? atob(dataString) : decodeURIComponent(dataString)
  const bytes = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) bytes[i] = byteString.charCodeAt(i)
  return bytes
}
