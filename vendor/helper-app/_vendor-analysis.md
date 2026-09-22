# Vendor analysis (engine helper-app)

Generated: 2026-09-22T11:22:44.351Z

## Summary

- Modules: **1074**
- First-party: **544** (4428 KB)
- npm dumps (replace): **228** (4020 KB)
- Unknown: **302**

## Replace with node_modules (largest first)

| Package | Modules | KB | Sample paths |
|---------|---------|----|--------------|
| `antd-ecosystem` | 39 | 1766 | `@ant-design/cssinjs.js`, `antd.js` |
| `react-dom` | 3 | 226 | `react-dom/client.js`, `react-dom-reexport.js` |
| `libphonenumber-js` | 2 | 85 | `libphonenumber-js/core.js`, `libphonenumber-js/min/metadata.js` |
| `react` | 4 | 50 | `react/jsx-runtime.js`, `react-reexport.js` |
| `dayjs` | 9 | 34 | `rc-picker/es/generate/dayjs.js`, `_tilde_node_modules/dayjs.js` |
| `fuse.js` | 1 | 18 | `fuse.js` |
| `@plasmohq/*` | 3 | 13 | `@plasmohq/messaging.js`, `@plasmohq/storage/hook.js` |
| `numeral` | 1 | 11 | `numeral.js` |
| `ahooks` | 1 | 7 | `ahooks.js` |
| `intl-tel-input` | 2 | 5 | `intl-tel-input/data.js`, `intl-tel-input/i18n/en.js` |
| `zustand` | 3 | 5 | `zustand.js`, `zustand-vanilla.js` |
| `classnames` | 1 | 2 | `classnames.js` |
| `crypto-js` | 1 | 2 | `crypto-js.js` |
| `lodash` | 1 | 2 | `_tilde_theme.js` |
| `nanoid` | 1 | 1 | `nanoid.js` |

## Import specs seen in manifest (top)

- `react` × 171
- `data-base64:~assets` × 75
- `@plasmohq/messaging` × 74
- `antd` × 65
- `dayjs` × 55
- `lodash-es` × 15
- `zustand` × 12
- `clsx` × 11
- `@plasmohq/storage` × 11
- `tslib` × 10
- `ahooks` × 8
- `@ant-design/icons` × 6
- `react-dom` × 5
- `intl-tel-input` × 3
- `pify` × 2
- `@ant-design/cssinjs` × 2
- `classnames` × 2
- `lodash` × 2
- `@webext-core/match-patterns` × 2
- `zustand-vanilla` × 2
- `libphonenumber-js` × 2
- `dataurl-to-blob` × 2
- `data-base64:~` × 2
- `react-jsx-runtime` × 1
- `react-dom-reexport` × 1
- `nanoid` × 1
- `react-draggable` × 1
- `rc-util` × 1
- `zustand-react` × 1
- `react-lottie` × 1

## Next steps

1. npm install in engine/ (see package.json)
1. Delete helper-app/vendor/lodash/ after switching imports to 'lodash' / 'lodash-es'
1. Delete _dotdot_/ and antd megafiles after switching to 'antd' from node_modules
1. Keep helper-app/src/** as first-party source of truth
1. Do not deobfuscate npm dumps — replace them
