// @ts-nocheck
/**
 * Thin antd Image wrapper with preview disabled by default.
 */

import { jsx } from "react/jsx-runtime"
import { Image as AntdImage } from "antd"

function Image(props) {
  return jsx(AntdImage, { preview: false, ...props })
}

Image.PreviewGroup = AntdImage.PreviewGroup

export default Image
