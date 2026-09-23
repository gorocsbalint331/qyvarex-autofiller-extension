// @ts-nocheck
/**
 * Readable TypeScript converted from Parcel dump (helper-runtime/src/components/Popups/PageConfirmPopup.js).
 */
import * as n from "react/jsx-runtime"
import * as o from "antd"
import * as i from "../StarRatingModal/shared.js"

let a = ({open: e,title: t,content: r,confirmText: a,cancelText: l,onConfirm: s,onCancel: u,getContainer: c,zIndex: d}) => n.jsxs(o.Modal, {open: e,title: null,footer: null,mask: true,closable: true,closeIcon: n.jsx(i.CloseIcon, {}),centered: true,onCancel: u,destroyOnClose: true,width: 480,zIndex: d,getContainer: c,styles: i.RATING_MODAL_STYLES,children: [n.jsxs(o.Flex, {align: "center",justify: "center",vertical: true,gap: 12,style: {paddingTop: 64},children: [n.jsx("span", {style: i.TITLE_STYLE,children: t}), n.jsx("span", {style: i.BODY_TEXT_STYLE,children: r})]}), n.jsxs(o.Flex, {align: "center",justify: "center",gap: 12,style: {marginTop: 24},children: [n.jsx(o.Button, {type: "default",style: i.DEFAULT_BUTTON_STYLE,onClick: u,children: l}), n.jsx(o.Button, {type: "primary",style: i.PRIMARY_BUTTON_STYLE,onClick: s,children: a})]})]});

export default a
