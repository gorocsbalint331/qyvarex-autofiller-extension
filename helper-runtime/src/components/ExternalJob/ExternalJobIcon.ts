// @ts-nocheck
/**
 * SVG icons for external-job UI (stars, sad face, add).
 */

import { jsx, jsxs } from "react/jsx-runtime"

export function StarIcon() {
  return jsxs("svg", {
    width: "17",
    height: "16",
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      jsx("path", {
        d: "M8.61929 14.2843L8.5 15L8.38071 14.2843C7.85387 11.1232 5.37676 8.64609 2.21567 8.11927L1.5 8L2.21582 7.88069C5.37683 7.35382 7.85386 4.87677 8.38071 1.71575L8.5 1L8.61929 1.71575C9.14613 4.87677 11.6232 7.35382 14.7842 7.88069L15.5 8L14.7843 8.11927C11.6232 8.64609 9.14613 11.1232 8.61929 14.2843Z",
        fill: "black",
        stroke: "black",
        strokeWidth: "1.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      jsx("path", {
        d: "M3.68379 4.44866L3.50002 5L3.31622 4.44863C3.11715 3.85145 2.64855 3.38284 2.05137 3.18376L1.5 2.99995L2.0513 2.8162C2.64852 2.61715 3.11717 2.14853 3.31625 1.55132L3.50004 1L3.68377 1.55125C3.88284 2.1485 4.3515 2.61716 4.94875 2.81622L5.5 2.99995L4.94865 3.18375C4.35146 3.38284 3.88285 3.85146 3.68379 4.44866Z",
        fill: "black",
        stroke: "black",
        strokeWidth: "0.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  })
}

export function AnalyzeStarIcon() {
  return jsxs("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      jsx("path", {
        d: "M23.0342 5.79354C23.2159 4.70298 24.7841 4.70298 24.9658 5.79354C26.4394 14.6337 33.3669 21.5613 42.207 23.0347C43.2974 23.2166 43.2974 24.7836 42.207 24.9654C33.3667 26.4387 26.4393 33.3664 24.9658 42.2066C24.7841 43.2972 23.2159 43.2972 23.0342 42.2066C21.5607 33.3664 14.6333 26.4387 5.79298 24.9654C4.70259 24.7836 4.70264 23.2166 5.79298 23.0347C14.6332 21.5613 21.5606 14.6337 23.0342 5.79354ZM9.4297 4.28084C9.56646 3.87058 10.1474 3.87058 10.2842 4.28084L10.4863 4.89022C11.1689 6.93791 12.7765 8.54463 14.8242 9.22713L15.4336 9.43026C15.8433 9.56722 15.8433 10.1468 15.4336 10.2838L14.8232 10.4869C12.7759 11.1695 11.1698 12.7765 10.4873 14.8238L10.2832 15.4332C10.1465 15.8435 9.56645 15.8434 9.4297 15.4332L9.22657 14.8238C8.54403 12.7764 6.93709 11.1694 4.88966 10.4869L4.28028 10.2838C3.87012 10.147 3.87011 9.56704 4.28028 9.43026L4.88966 9.22713C6.93726 8.54466 8.54399 6.93778 9.22657 4.89022L9.4297 4.28084Z",
        fill: "url(#paint0_linear_23687_183919)",
      }),
      jsx("defs", {
        children: jsxs("linearGradient", {
          id: "paint0_linear_23687_183919",
          x1: "1.49924",
          y1: "1.50015",
          x2: "43.4988",
          y2: "43.5009",
          gradientUnits: "userSpaceOnUse",
          children: [
            jsx("stop", { stopColor: "#26F3B5" }),
            jsx("stop", { offset: "1", stopColor: "#A4FFFC" }),
          ],
        }),
      }),
    ],
  })
}

export function SadIcon() {
  return jsxs("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      jsx("rect", {
        x: "3",
        y: "3",
        width: "42",
        height: "42",
        rx: "21",
        fill: "white",
        stroke: "black",
        strokeWidth: "3.6",
      }),
      jsx("path", {
        d: "M16.5 28.5V28.5C21.1164 25.7302 26.8836 25.7302 31.5 28.5V28.5",
        stroke: "black",
        strokeWidth: "3.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      jsx("path", {
        d: "M13.5 18H19.5",
        stroke: "black",
        strokeWidth: "3.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      jsx("path", {
        d: "M28.5 18H34.5",
        stroke: "black",
        strokeWidth: "3.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  })
}

export function AddIcon() {
  return jsxs("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      jsx("path", {
        d: "M8 3V13",
        stroke: "black",
        strokeWidth: "1.24",
        strokeLinecap: "round",
      }),
      jsx("path", {
        d: "M13 8L3 8",
        stroke: "black",
        strokeWidth: "1.24",
        strokeLinecap: "round",
      }),
    ],
  })
}
