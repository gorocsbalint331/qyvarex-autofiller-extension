// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/LoadingButton.js).
 */
import * as n from "react/jsx-runtime"
import * as o from "antd"
import * as i from "react"

let a = ({loading: e,children: t,...r}) => {let [a, l] = i.useState("");return i.useEffect(() => {let t;return e ? t = setInterval(() => {l(e => e.length >= 3 ? "." : e + ".")}, 500) : l(""), () => {t && clearInterval(t)}}, [e]), n.jsxs(o.Button, {...r,children: [t, e ? a : ""]})};

export default a
