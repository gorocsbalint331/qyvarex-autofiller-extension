/**
 * Parcel module id: ftPkv
 * Resolved path: WaveEffect.js
 * Dependencies:
 *   ./interface -> 7TOHK  =>  _dotdot_/_util/wave/interface.js
 *   ./util -> ev2ia  =>  util__ev2ia.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   classnames -> awHIp  =>  classnames.js
 *   rc-motion -> kNDFy  =>  rc-motion.js
 *   rc-util/es/React/render -> 9i749  =>  rc-util/es/React/render.js
 *   rc-util/es/raf -> kxdo1  =>  rc-util/es/raf.js
 *   rc-util/es/ref -> 9syQk  =>  ref.js
 *   react -> 329PG  =>  react-reexport.js
 *
 * Ant Design click "wave" (ripple) overlay — deobfuscated for readability.
 * Shows a motion div sized to the click target, then unmounts when the
 * appear animation finishes (or hits the deadline).
 */

var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js")
helpers.defineInteropFlag(r)

var React = e("react")
var classnamesMod = e("classnames")
var classNames = helpers.interopDefault(classnamesMod)
var rcMotionMod = e("rc-motion")
var CSSMotion = helpers.interopDefault(rcMotionMod)
var rafMod = e("rc-util/es/raf")
var raf = helpers.interopDefault(rafMod)
var reactRender = e("rc-util/es/React/render")
var refUtils = e("rc-util/es/ref")
var waveInterface = e("./interface")
var waveUtil = e("./util")

/** Coerce NaN CSS lengths to 0. */
function safeNumber(value) {
  return Number.isNaN(value) ? 0 : value
}

/**
 * Wave overlay React component rendered into a temporary absolute wrapper.
 * Props: { className, target, component }
 */
let WaveEffect = (props) => {
  let { className, target, component } = props

  let waveNodeRef = React.useRef(null)
  let [waveColor, setWaveColor] = React.useState(null)
  let [borderRadii, setBorderRadii] = React.useState([])
  let [offsetLeft, setOffsetLeft] = React.useState(0)
  let [offsetTop, setOffsetTop] = React.useState(0)
  let [width, setWidth] = React.useState(0)
  let [height, setHeight] = React.useState(0)
  let [ready, setReady] = React.useState(false)

  let waveStyle = {
    left: offsetLeft,
    top: offsetTop,
    width,
    height,
    borderRadius: borderRadii.map((radius) => `${radius}px`).join(" ")
  }

  function syncWaveGeometryFromTarget() {
    let computed = getComputedStyle(target)
    setWaveColor(waveUtil.getTargetWaveColor(target))

    let isStaticPosition = computed.position === "static"
    let { borderLeftWidth, borderTopWidth } = computed

    setOffsetLeft(
      isStaticPosition
        ? target.offsetLeft
        : safeNumber(-parseFloat(borderLeftWidth))
    )
    setOffsetTop(
      isStaticPosition
        ? target.offsetTop
        : safeNumber(-parseFloat(borderTopWidth))
    )
    setWidth(target.offsetWidth)
    setHeight(target.offsetHeight)

    let {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = computed

    // TL, TR, BR, BL — matches CSS border-radius order used here
    setBorderRadii(
      [
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius
      ].map((radius) => safeNumber(parseFloat(radius)))
    )
  }

  if (waveColor) {
    waveStyle["--wave-color"] = waveColor
  }

  React.useEffect(() => {
    if (!target) return

    let resizeObserver
    let rafHandle = raf.default(() => {
      syncWaveGeometryFromTarget()
      setReady(true)
    })

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncWaveGeometryFromTarget)
      resizeObserver.observe(target)
    }

    return () => {
      raf.default.cancel(rafHandle)
      resizeObserver?.disconnect()
    }
  }, [])

  if (!ready) return null

  // Faster wave for Ant Design checkbox/radio wave targets
  let isQuickWave =
    (component === "Checkbox" || component === "Radio") &&
    target?.classList.contains(waveInterface.TARGET_CLS)

  return React.createElement(
    CSSMotion.default,
    {
      visible: true,
      motionAppear: true,
      motionName: "wave-motion",
      motionDeadline: 5000,
      onAppearEnd: (_element, info) => {
        if (info.deadline || info.propertyName === "opacity") {
          let wrapper = waveNodeRef.current?.parentElement
          reactRender.unmount(wrapper).then(() => {
            wrapper?.remove()
          })
        }
        return false
      }
    },
    (motionProps, motionRef) => {
      let { className: motionClassName } = motionProps
      return React.createElement("div", {
        ref: refUtils.composeRef(waveNodeRef, motionRef),
        className: classNames.default(className, motionClassName, {
          "wave-quick": isQuickWave
        }),
        style: waveStyle
      })
    }
  )
}

/**
 * Mount a wave effect on `targetElement`.
 * @param {HTMLElement} targetElement - clicked host (button, etc.)
 * @param {object} options - { className, component, token, hashId, event, ... }
 */
let showWaveEffect = (targetElement, options) => {
  let { component } = options

  // Skip unchecked checkboxes (no ripple when toggling off)
  if (component === "Checkbox") {
    let input = targetElement.querySelector("input")
    if (!input?.checked) return
  }

  let mountNode = document.createElement("div")
  mountNode.style.position = "absolute"
  mountNode.style.left = "0px"
  mountNode.style.top = "0px"

  targetElement?.insertBefore(mountNode, targetElement?.firstChild)

  reactRender.render(
    React.createElement(
      WaveEffect,
      Object.assign({}, options, { target: targetElement })
    ),
    mountNode
  )
}

r.default = showWaveEffect
