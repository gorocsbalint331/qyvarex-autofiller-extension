/**
 * Parcel module id: h3FNP
 * Resolved path: src/core/markdownConverter.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractCleanedHtml", () => u);
let o = 2e5,
  i = 5,
  a = 5e3,
  l = /^(about|data|javascript|blob|chrome-extension|file):/i;

function s() {
  let e = [];
  document.querySelectorAll("iframe").forEach(t => {
    let r = (t.getAttribute("src") || "").trim();
    if (!r || l.test(r)) return;
    let n = (t.offsetWidth || 0) * (t.offsetHeight || 0);
    if (!(n < a)) try {
      let t = new URL(r, document.baseURI);
      if ("http:" !== t.protocol && "https:" !== t.protocol) return;
      e.push({
        src: t.toString(),
        area: n
      })
    } catch {}
  });
  let t = new Map;
  for (let {
      src: r,
      area: n
    }
    of e) {
    let e = t.get(r) ?? -1;
    n > e && t.set(r, n)
  }
  return Array.from(t.entries()).sort((e, t) => t[1] - e[1]).slice(0, i).map(([e]) => e)
}

function u() {
  try {
    let e = document.body;
    if (!e) return {
      html: "",
      iframeSrcs: []
    };
    let t = s(),
      r = e.cloneNode(!0);
    r.querySelectorAll("[data-plasmo], plasmo-csui, [id^='plasmo']").forEach(e => e.remove()), r
      .querySelectorAll("script, style, noscript, svg, iframe, link, meta").forEach(e => e
    .remove()), r.querySelectorAll("*").forEach(e => {
        e.removeAttribute("style"), e.removeAttribute("class"), Array.from(e.attributes).forEach(
          t => {
            t.name.startsWith("data-") && e.removeAttribute(t.name)
          })
      });
    let n = r.innerHTML || "",
      i = n.length > o ? n.slice(0, o) : n;
    return {
      html: i,
      iframeSrcs: t
    }
  } catch (e) {
    return console.error("[extractCleanedHtml] Error:", e), {
      html: "",
      iframeSrcs: []
    }
  }
}

