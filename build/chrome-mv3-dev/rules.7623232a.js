(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fatzL":[function(require,module,exports) {
var global = arguments[3];
var W = Object.create;
var P = Object.defineProperty;
var V = Object.getOwnPropertyDescriptor;
var G = Object.getOwnPropertyNames;
var X = Object.getPrototypeOf, J = Object.prototype.hasOwnProperty;
var q = (e, t, o, r)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let n of G(t))!J.call(e, n) && n !== o && P(e, n, {
        get: ()=>t[n],
        enumerable: !(r = V(t, n)) || r.enumerable
    });
    return e;
};
var z = (e, t, o)=>(o = e != null ? W(X(e)) : {}, q(t || !e || !e.__esModule ? P(o, "default", {
        value: e,
        enumerable: !0
    }) : o, e));
var y = globalThis.process?.argv || [];
var H = ()=>globalThis.process?.env || {};
var K = new Set(y), D = (e)=>K.has(e), ue = y.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var de = D("--dry-run"), _ = ()=>D("--verbose") || H().VERBOSE === "true", fe = _();
var x = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var k = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), T = (...e)=>x("\uD83D\uDD35 INFO", ...e), A = (...e)=>x("\uD83D\uDFE0 WARN", ...e), Q = 0, p = (...e)=>_() && x(`\u{1F7E1} ${Q++}`, ...e);
var c = {
    "isContentScript": false,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "page-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\comeet\\rules.js",
    "bundleId": "0cc85f287623232a",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = c.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: c.verbose
    }
};
var Y = module.bundle.Module;
function Z(e) {
    Y.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = Z;
module.bundle.hotData = {};
var d = globalThis.browser || globalThis.chrome || null;
async function m(e = !1) {
    e ? (p("Triggering full reload"), d.runtime.sendMessage({
        __plasmo_full_reload__: !0
    })) : globalThis.location?.reload?.();
}
function w() {
    return !c.host || c.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : c.host;
}
function L() {
    return !c.host || c.host === "0.0.0.0" ? "localhost" : c.host;
}
function f() {
    return c.port || location.port;
}
var S = "__plasmo_runtime_page_";
var i = {
    checkedAssets: {},
    assetsToDispose: [],
    assetsToAccept: []
}, B = ()=>{
    i.checkedAssets = {}, i.assetsToDispose = [], i.assetsToAccept = [];
};
function u(e, t) {
    let { modules: o } = e;
    if (!o) return [];
    let r = [], n, s, a;
    for(n in o)for(s in o[n][1])a = o[n][1][s], (a === t || Array.isArray(a) && a[a.length - 1] === t) && r.push([
        e,
        n
    ]);
    return e.parent && (r = r.concat(u(e.parent, t))), r;
}
function R(e, t, o) {
    if (C(e, t, o)) return !0;
    let r = u(module.bundle.root, t), n = !1;
    for(; r.length > 0;){
        let [s, a] = r.shift();
        if (C(s, a, null)) n = !0;
        else {
            let g = u(module.bundle.root, a);
            if (g.length === 0) {
                n = !1;
                break;
            }
            r.push(...g);
        }
    }
    return n;
}
function C(e, t, o) {
    let { modules: r } = e;
    if (!r) return !1;
    if (o && !o[e.HMR_BUNDLE_ID]) return e.parent ? R(e.parent, t, o) : !0;
    if (i.checkedAssets[t]) return !0;
    i.checkedAssets[t] = !0;
    let n = e.cache[t];
    return i.assetsToDispose.push([
        e,
        t
    ]), !n || n.hot && n.hot._acceptCallbacks.length ? (i.assetsToAccept.push([
        e,
        t
    ]), !0) : !1;
}
function M(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function ee(e) {
    if (e.type === "js" && typeof document < "u") return new Promise((t, o)=>{
        let r = document.createElement("script");
        r.src = `${e.url}?t=${Date.now()}`, e.outputFormat === "esmodule" && (r.type = "module"), r.addEventListener("load", ()=>t(r)), r.addEventListener("error", ()=>o(new Error(`Failed to download asset: ${e.id}`))), document.head?.appendChild(r);
    });
}
async function O(e) {
    global.parcelHotUpdate = Object.create(null), e.forEach((o)=>{
        o.url = d.runtime.getURL("/__plasmo_hmr_proxy__?url=" + encodeURIComponent(`${o.url}?t=${Date.now()}`));
    });
    let t = await Promise.all(e.map(ee));
    try {
        e.forEach(function(o) {
            $(module.bundle.root, o);
        });
    } finally{
        delete global.parcelHotUpdate, t && t.forEach((o)=>{
            o && document.head?.removeChild(o);
        });
    }
}
function te(e) {
    let t = e.cloneNode();
    t.onload = function() {
        e.parentNode !== null && e.parentNode.removeChild(e);
    }, t.setAttribute("href", e.getAttribute("href").split("?")[0] + "?" + Date.now()), e.parentNode.insertBefore(t, e.nextSibling);
}
var E = null;
function oe() {
    E || (E = setTimeout(function() {
        let e = document.querySelectorAll('link[rel="stylesheet"]');
        for(var t = 0; t < e.length; t++){
            let o = e[t].getAttribute("href"), r = w(), n = r === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + f()).test(o) : o.indexOf(r + ":" + f());
            /^https?:\/\//i.test(o) && o.indexOf(location.origin) !== 0 && !n || te(e[t]);
        }
        E = null;
    }, 47));
}
function $(e, t) {
    let { modules: o } = e;
    if (o) {
        if (t.type === "css") oe();
        else if (t.type === "js") {
            let r = t.depsByBundle[e.HMR_BUNDLE_ID];
            if (r) {
                if (o[t.id]) {
                    let s = o[t.id][1];
                    for(let a in s)if (!r[a] || r[a] !== s[a]) {
                        let l = s[a];
                        u(module.bundle.root, l).length === 1 && b(module.bundle.root, l);
                    }
                }
                let n = global.parcelHotUpdate[t.id];
                o[t.id] = [
                    n,
                    r
                ];
            } else e.parent && $(e.parent, t);
        }
    }
}
function b(e, t) {
    let o = e.modules;
    if (o) {
        if (o[t]) {
            let r = o[t][1], n = [];
            for(let s in r)u(module.bundle.root, r[s]).length === 1 && n.push(r[s]);
            delete o[t], delete e.cache[t], n.forEach((s)=>{
                b(module.bundle.root, s);
            });
        } else e.parent && b(e.parent, t);
    }
}
function v(e, t) {
    let o = e.cache[t];
    e.hotData[t] = {}, o && o.hot && (o.hot.data = e.hotData[t]), o && o.hot && o.hot._disposeCallbacks.length && o.hot._disposeCallbacks.forEach(function(r) {
        r(e.hotData[t]);
    }), delete e.cache[t];
}
function I(e, t) {
    e(t);
    let o = e.cache[t];
    if (o && o.hot && o.hot._acceptCallbacks.length) {
        let r = u(module.bundle.root, t);
        o.hot._acceptCallbacks.forEach(function(n) {
            let s = n(()=>r);
            s && s.length && (s.forEach(([a, l])=>{
                v(a, l);
            }), i.assetsToAccept.push.apply(i.assetsToAccept, s));
        });
    }
}
function re(e = f()) {
    let t = L();
    return `${c.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function ne(e) {
    typeof e.message == "string" && k("[plasmo/parcel-runtime]: " + e.message);
}
function N(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(re());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let n of r.diagnostics.ansi){
            let s = n.codeframe || n.stack;
            A("[plasmo/parcel-runtime]: " + n.message + `
` + s + `

` + n.hints.join(`
`));
        }
    }), t.addEventListener("error", ne), t.addEventListener("open", ()=>{
        T(`[plasmo/parcel-runtime]: Connected to HMR server for ${c.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        A(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${c.entryFilePath}`);
    }), t;
}
var j = z(require("5161b81bd79610a6"));
async function F() {
    j.default.injectIntoGlobalHook(window), window.$RefreshReg$ = function() {}, window.$RefreshSig$ = function() {
        return function(e) {
            return e;
        };
    };
}
var se = `${S}${module.id}__`, h, U = module.bundle.parent;
if (!U || !U.isParcelRequire) {
    try {
        h = d?.runtime.connect({
            name: se
        }), h.onDisconnect.addListener(()=>{
            m();
        }), c.isReact || h.onMessage.addListener(()=>{
            m();
        });
    } catch (e) {
        p(e);
    }
    N(async (e)=>{
        if (p("Page runtime - On HMR Update"), c.isReact) {
            B();
            let t = e.filter((r)=>r.envHash === c.envHash);
            if (t.some((r)=>r.type === "css" || r.type === "js" && R(module.bundle.root, r.id, r.depsByBundle))) try {
                await O(t);
                let r = {};
                for (let [s, a] of i.assetsToDispose)r[a] || (v(s, a), r[a] = !0);
                let n = {};
                for(let s = 0; s < i.assetsToAccept.length; s++){
                    let [a, l] = i.assetsToAccept[s];
                    n[l] || (I(a, l), n[l] = !0);
                }
            } catch (r) {
                c.verbose === "true" && (console.trace(r), alert(JSON.stringify(r))), await m(!0);
            }
        } else {
            let t = e.filter((o)=>o.envHash === c.envHash).some((o)=>M(module.bundle, o.id));
            p("Page runtime -", {
                sourceChanged: t
            }), t && h.postMessage({
                __plasmo_page_changed__: !0
            });
        }
    });
}
c.isReact && (p("Injecting react refresh"), F());

},{"5161b81bd79610a6":"iZhE1"}],"iZhE1":[function(require,module,exports) {
var oe = Object.create;
var H = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var ue = Object.getOwnPropertyNames;
var se = Object.getPrototypeOf, le = Object.prototype.hasOwnProperty;
var z = (o, f)=>()=>(f || o((f = {
            exports: {}
        }).exports, f), f.exports), ce = (o, f)=>{
    for(var s in f)H(o, s, {
        get: f[s],
        enumerable: !0
    });
}, D = (o, f, s, y)=>{
    if (f && typeof f == "object" || typeof f == "function") for (let m of ue(f))!le.call(o, m) && m !== s && H(o, m, {
        get: ()=>f[m],
        enumerable: !(y = ae(f, m)) || y.enumerable
    });
    return o;
}, S = (o, f, s)=>(D(o, f, "default"), s && D(s, f, "default")), G = (o, f, s)=>(s = o != null ? oe(se(o)) : {}, D(f || !o || !o.__esModule ? H(s, "default", {
        value: o,
        enumerable: !0
    }) : s, o)), de = (o)=>D(H({}, "__esModule", {
        value: !0
    }), o);
var N = z((h)=>{
    "use strict";
    (function() {
        "use strict";
        var o = Symbol.for("react.forward_ref"), f = Symbol.for("react.memo"), s = typeof WeakMap == "function" ? WeakMap : Map, y = new Map, m = new s, b = new s, j = new s, E = [], C = new Map, O = new Map, p = new Set, _ = new Set, F = typeof WeakMap == "function" ? new WeakMap : null, T = !1;
        function B(e) {
            if (e.fullKey !== null) return e.fullKey;
            var r = e.ownKey, n;
            try {
                n = e.getCustomHooks();
            } catch (i) {
                return e.forceReset = !0, e.fullKey = r, r;
            }
            for(var t = 0; t < n.length; t++){
                var l = n[t];
                if (typeof l != "function") return e.forceReset = !0, e.fullKey = r, r;
                var d = b.get(l);
                if (d !== void 0) {
                    var a = B(d);
                    d.forceReset && (e.forceReset = !0), r += "\n---\n" + a;
                }
            }
            return e.fullKey = r, r;
        }
        function q(e, r) {
            var n = b.get(e), t = b.get(r);
            return n === void 0 && t === void 0 ? !0 : !(n === void 0 || t === void 0 || B(n) !== B(t) || t.forceReset);
        }
        function $(e) {
            return e.prototype && e.prototype.isReactComponent;
        }
        function k(e, r) {
            return $(e) || $(r) ? !1 : !!q(e, r);
        }
        function Y(e) {
            return j.get(e);
        }
        function Z(e) {
            var r = new Map;
            return e.forEach(function(n, t) {
                r.set(t, n);
            }), r;
        }
        function W(e) {
            var r = new Set;
            return e.forEach(function(n) {
                r.add(n);
            }), r;
        }
        function M(e, r) {
            try {
                return e[r];
            } catch (n) {
                return;
            }
        }
        function J() {
            if (E.length === 0 || T) return null;
            T = !0;
            try {
                var e = new Set, r = new Set, n = E;
                E = [], n.forEach(function(u) {
                    var c = u[0], v = u[1], R = c.current;
                    j.set(R, c), j.set(v, c), c.current = v, k(R, v) ? r.add(c) : e.add(c);
                });
                var t = {
                    updatedFamilies: r,
                    staleFamilies: e
                };
                C.forEach(function(u) {
                    u.setRefreshHandler(Y);
                });
                var l = !1, d = null, a = W(_), i = W(p), g = Z(O);
                if (a.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    if (_.has(u), F !== null && F.has(u)) {
                        var v = F.get(u);
                        try {
                            c.scheduleRoot(u, v);
                        } catch (R) {
                            l || (l = !0, d = R);
                        }
                    }
                }), i.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    p.has(u);
                    try {
                        c.scheduleRefresh(u, t);
                    } catch (v) {
                        l || (l = !0, d = v);
                    }
                }), l) throw d;
                return t;
            } finally{
                T = !1;
            }
        }
        function P(e, r) {
            if (e === null || typeof e != "function" && typeof e != "object" || m.has(e)) return;
            var n = y.get(r);
            if (n === void 0 ? (n = {
                current: e
            }, y.set(r, n)) : E.push([
                n,
                e
            ]), m.set(e, n), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    P(e.render, r + "$render");
                    break;
                case f:
                    P(e.type, r + "$type");
                    break;
            }
        }
        function K(e, r) {
            var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = arguments.length > 3 ? arguments[3] : void 0;
            if (b.has(e) || b.set(e, {
                forceReset: n,
                ownKey: r,
                fullKey: null,
                getCustomHooks: t || function() {
                    return [];
                }
            }), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    K(e.render, r, n, t);
                    break;
                case f:
                    K(e.type, r, n, t);
                    break;
            }
        }
        function x(e) {
            var r = b.get(e);
            r !== void 0 && B(r);
        }
        function Q(e) {
            return y.get(e);
        }
        function X(e) {
            return m.get(e);
        }
        function ee(e) {
            var r = new Set;
            return p.forEach(function(n) {
                var t = O.get(n);
                if (t === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                var l = t.findHostInstancesForRefresh(n, e);
                l.forEach(function(d) {
                    r.add(d);
                });
            }), r;
        }
        function re(e) {
            var r = e.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (r === void 0) {
                var n = 0;
                e.__REACT_DEVTOOLS_GLOBAL_HOOK__ = r = {
                    renderers: new Map,
                    supportsFiber: !0,
                    inject: function(a) {
                        return n++;
                    },
                    onScheduleFiberRoot: function(a, i, g) {},
                    onCommitFiberRoot: function(a, i, g, u) {},
                    onCommitFiberUnmount: function() {}
                };
            }
            if (r.isDisabled) {
                console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
                return;
            }
            var t = r.inject;
            r.inject = function(a) {
                var i = t.apply(this, arguments);
                return typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a), i;
            }, r.renderers.forEach(function(a, i) {
                typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a);
            });
            var l = r.onCommitFiberRoot, d = r.onScheduleFiberRoot || function() {};
            r.onScheduleFiberRoot = function(a, i, g) {
                return T || (_.delete(i), F !== null && F.set(i, g)), d.apply(this, arguments);
            }, r.onCommitFiberRoot = function(a, i, g, u) {
                var c = C.get(a);
                if (c !== void 0) {
                    O.set(i, c);
                    var v = i.current, R = v.alternate;
                    if (R !== null) {
                        var L = R.memoizedState != null && R.memoizedState.element != null && p.has(i), A = v.memoizedState != null && v.memoizedState.element != null;
                        !L && A ? (p.add(i), _.delete(i)) : L && A || (L && !A ? (p.delete(i), u ? _.add(i) : O.delete(i)) : !L && !A && u && _.add(i));
                    } else p.add(i);
                }
                return l.apply(this, arguments);
            };
        }
        function ne() {
            return !1;
        }
        function te() {
            return p.size;
        }
        function fe() {
            var e, r, n = !1;
            return function(t, l, d, a) {
                if (typeof l == "string") return e || (e = t, r = typeof a == "function"), t != null && (typeof t == "function" || typeof t == "object") && K(t, l, d, a), t;
                !n && r && (n = !0, x(e));
            };
        }
        function ie(e) {
            switch(typeof e){
                case "function":
                    if (e.prototype != null) {
                        if (e.prototype.isReactComponent) return !0;
                        var r = Object.getOwnPropertyNames(e.prototype);
                        if (r.length > 1 || r[0] !== "constructor" || e.prototype.__proto__ !== Object.prototype) return !1;
                    }
                    var n = e.name || e.displayName;
                    return typeof n == "string" && /^[A-Z]/.test(n);
                case "object":
                    if (e != null) switch(M(e, "$$typeof")){
                        case o:
                        case f:
                            return !0;
                        default:
                            return !1;
                    }
                    return !1;
                default:
                    return !1;
            }
        }
        h._getMountedRootCount = te, h.collectCustomHooksForSignature = x, h.createSignatureFunctionForTransform = fe, h.findAffectedHostInstances = ee, h.getFamilyByID = Q, h.getFamilyByType = X, h.hasUnrecoverableErrors = ne, h.injectIntoGlobalHook = re, h.isLikelyComponentType = ie, h.performReactRefresh = J, h.register = P, h.setSignature = K;
    })();
});
var I = z((pe, V)=>{
    "use strict";
    V.exports = N();
});
var w = {};
ce(w, {
    default: ()=>he
});
module.exports = de(w);
var U = G(I());
S(w, G(I()), module.exports);
var he = U.default; /*! Bundled license information:

react-refresh/cjs/react-refresh-runtime.development.js:
  (**
   * @license React
   * react-refresh-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 

},{}],"fALxU":[function(require,module,exports) {
/**
 * Parcel module id: 9qxec
 * Resolved path: src/contents/sites/comeet/rules.js
 * Dependencies:
 *   ./answer -> dAtaS  =>  src/contents/sites/comeet/answer.js
 *   ./phone-country-code -> eJDVS  =>  src/contents/sites/comeet/phone-country-code.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "COMEET_PHONE_WITH_COUNTRY_CODE_DESCRIPTION", ()=>s), n.export(r, "isRunningInIframe", ()=>d), n.export(r, "isRunningInComeetIframe", ()=>f), n.export(r, "hasCrossOriginComeetIframe", ()=>p), n.export(r, "extractRules", ()=>m), n.export(r, "getFormSnapshot", ()=>C), n.export(r, "getEduAndEmploymentSnapshot", ()=>A);
var o = e("~core/enums"), i = e("~core/phone-country-code"), a = e("./answer"), l = e("./phone-country-code");
let s = i.LOCAL_PHONE_DESCRIPTION;
function u() {
    let e1 = [], t = document.querySelector('iframe[title="Job Application form"]');
    if (!t) return e1;
    try {
        let r1 = t.contentDocument || t.contentWindow?.document;
        r1 && e1.push(r1);
    } catch (e1) {}
    return e1;
}
function c(e1) {
    let t = e1.querySelector("form#applyForm");
    return t || (t = e1.querySelector('form[name="applyForm"]'));
}
function d() {
    return window.top !== window.self;
}
function f() {
    let e1 = window.location.href;
    if ("about:blank" === e1 || e1.startsWith("about:")) return !1;
    let t = !!c(document);
    if (t) return !0;
    if (!d()) return !1;
    let r1 = (e1.includes("comeet.co") || e1.includes("comeet.com")) && e1.includes("/apply");
    return r1;
}
function p() {
    if (d()) return !1;
    let e1 = document.querySelector('iframe[title="Job Application form"]');
    if (!e1) return !1;
    try {
        let t = e1.contentDocument;
        if (!t) return !0;
    } catch (e1) {
        return !0;
    }
    return !1;
}
async function m() {
    let e1 = [];
    if (f()) {
        let t = c(document);
        if (t) {
            let r1 = await h(t, document);
            e1.push(...r1);
        }
        return e1;
    }
}
async function h(e1, t) {
    let r1 = [], n = new Set, o = e1.querySelectorAll("input, select, textarea");
    for (let e1 of o){
        let o = e1;
        if ("radio" === o.type || "checkbox" === o.type) {
            let e1 = o.closest("fieldset");
            if (e1) {
                let t = e1.querySelector("legend.question-title");
                if (t) {
                    let e1 = t.textContent?.trim() || "";
                    if (e1 && n.has(e1)) continue;
                    e1 && n.add(e1);
                }
            } else {
                if (o.name && n.has(o.name)) continue;
                o.name && n.add(o.name);
            }
        }
        let i = await v(o, t);
        if (i) {
            r1.push(i);
            let e1 = g(i, o);
            e1 && r1.push(e1);
        }
    }
    let i = e1.querySelectorAll("div.dropdown");
    for (let e1 of i){
        let o = e1, i = o.closest("fieldset"), a = "";
        if (i) {
            let e1 = i.querySelector("legend.question-title");
            if (e1) {
                let t = e1.textContent?.trim() || "";
                if (a = "dropdown:" + t, n.has(a)) continue;
                a && n.add(a);
            }
        }
        let l = await b(o, t);
        l && r1.push(l);
    }
    return r1;
}
function g(e1, t) {
    if ("phone" !== e1.label.trim().toLowerCase()) return null;
    let r1 = t.closest(".iti"), n = r1?.querySelector("button.iti__selected-country");
    if (!r1 || !n) return null;
    let i = Array.from(r1.querySelectorAll("li.iti__country")).map(l.parseComeetPhoneCountryOption).map(l.formatComeetPhoneCountryOption).filter(Boolean);
    return {
        label: "Phone Country Code",
        type: o.FIELD_TYPE.SELECT,
        required: e1.required,
        options: i,
        $input: t
    };
}
async function b(e1, t = document) {
    let r1 = e1.closest("fieldset");
    if (!r1) return null;
    let n = r1.querySelector("legend.question-title");
    if (!n) return null;
    let i = (0, a.normalizeComeetLabelText)(n.textContent);
    if (!i) return null;
    let l = o.FIELD_TYPE.SELECT, s = (0, a.isComeetRequiredField)(e1, n), u = [], c = e1.querySelector("ul.dropdown-menu");
    if (c) {
        let e1 = c.querySelectorAll("li .option-title");
        for (let t of e1){
            let e1 = t.textContent?.trim();
            e1 && u.push(e1);
        }
    }
    let d = e1.querySelector("a.dropdown-toggle");
    return d ? {
        label: i,
        type: l,
        required: s,
        options: u,
        $input: d
    } : null;
}
function y(e1) {
    if ("INPUT" !== e1.tagName) return;
    let t = e1, r1 = "tel" === t.type || t.classList.contains("iti__tel-input");
    if (!r1) return;
    let n = t.closest(".iti")?.querySelector("button.iti__selected-country");
    return n ? s : void 0;
}
async function v(e1, t = document) {
    let r1;
    let n = w(e1, t);
    if (!n) return null;
    let i = (0, a.normalizeComeetLabelText)(n.textContent), l = null;
    if ("INPUT" === e1.tagName) {
        let t = e1;
        if ("file" === t.type) return null;
        r1 = "checkbox" === t.type ? o.FIELD_TYPE.CHECKBOX : "radio" === t.type ? o.FIELD_TYPE.RADIOGROUP : o.FIELD_TYPE.TEXT, l = t;
    } else if ("SELECT" === e1.tagName) r1 = o.FIELD_TYPE.SELECT, l = e1;
    else {
        if ("TEXTAREA" !== e1.tagName) return null;
        r1 = o.FIELD_TYPE.TEXT, l = e1;
    }
    let s = (0, a.isComeetRequiredField)(e1, n), u = [];
    if (r1 === o.FIELD_TYPE.SELECT && (u = await S(l)), r1 === o.FIELD_TYPE.RADIOGROUP && (u = x(e1, t)), r1 === o.FIELD_TYPE.CHECKBOX) {
        let r1 = e1.closest("fieldset");
        r1 && (u = E(e1, r1, t));
    }
    let c = y(e1);
    return {
        label: i,
        type: r1,
        required: s,
        options: u,
        ...c ? {
            description: c
        } : {},
        $input: l
    };
}
function w(e1, t = document) {
    let r1 = e1;
    if ("radio" === r1.type || "checkbox" === r1.type) {
        let t = e1.closest("fieldset");
        if (t) {
            let e1 = t.querySelector("legend.question-title");
            if (e1) return e1;
        }
    }
    let n = e1.id;
    if (n) {
        let e1 = CSS.escape(n), r1 = t.querySelector(`label[for="${e1}"]`);
        if (r1) return r1;
    }
    let o = e1.closest("fieldset");
    if (o) {
        let e1 = o.querySelector("legend.question-title");
        if (e1) return e1;
    }
    let i = e1.closest("div, fieldset, form");
    if (i) {
        let e1 = i.querySelector("label");
        if (e1) return e1;
    }
    let a = e1.previousElementSibling;
    for(; a;){
        if ("LABEL" === a.tagName) return a;
        a = a.previousElementSibling;
    }
    return null;
}
async function S(e1) {
    let t = [];
    return "SELECT" === e1.tagName && Array.from(e1.options).forEach((e1)=>{
        e1.value && "" !== e1.value && t.push(e1.textContent?.trim() || e1.value);
    }), t;
}
_c = S;
function E(e1, t, r1 = document) {
    let n = [], o = t.querySelectorAll('input[type="checkbox"]');
    for (let e1 of o)if (e1.id) {
        let t = CSS.escape(e1.id), o = r1.querySelector(`label[for="${t}"]`);
        if (o) {
            let e1 = o.querySelector(".option-title");
            if (e1) {
                let t = e1.textContent?.trim();
                if (t) {
                    n.push(t);
                    continue;
                }
            }
            let t = o.textContent?.trim();
            if (t) {
                n.push(t);
                continue;
            }
        }
    }
    return n;
}
_c1 = E;
function x(e1, t = document) {
    let r1 = [], n = e1.name;
    if (!n) return r1;
    let o = t.querySelectorAll(`input[type="radio"][name=${CSS.escape(n)}]`);
    for (let e1 of o){
        if (e1.id) {
            let n = CSS.escape(e1.id), o = t.querySelector(`label[for="${n}"]`);
            if (o) {
                let e1 = o.querySelector(".option-title");
                if (e1) {
                    let t = e1.textContent?.trim();
                    if (t) {
                        r1.push(t);
                        continue;
                    }
                }
                let t = o.textContent?.trim();
                if (t) {
                    r1.push(t);
                    continue;
                }
            }
        }
        if (e1.value && "[object Object]" !== e1.value) {
            r1.push(e1.value);
            continue;
        }
        let n = e1.nextElementSibling;
        if (n && "LABEL" === n.tagName) {
            let e1 = n.querySelector(".option-title");
            if (e1) {
                let t = e1.textContent?.trim();
                if (t) {
                    r1.push(t);
                    continue;
                }
            }
            let t = n.textContent?.trim();
            t && r1.push(t);
        }
    }
    return r1;
}
async function C(e1) {
    let t = {}, r1 = [
        document
    ], n = u();
    for (let e1 of (r1.push(...n), r1)){
        let r1 = e1.querySelectorAll("input, select, textarea");
        for (let n of r1){
            let r1 = w(n, e1);
            if (!r1) continue;
            let o = r1.textContent?.trim() || "", i = "";
            if ("INPUT" === n.tagName) {
                let t = n;
                if ("checkbox" === t.type) i = t.checked ? "Yes" : "No";
                else if ("radio" === t.type) {
                    let r1 = e1.querySelector(`input[type="radio"][name="${CSS.escape(t.name)}"]:checked`);
                    if (r1) {
                        let t = r1.value;
                        if ((!t || "[object Object]" === t || "on" === t) && r1.id) {
                            let n = e1.querySelector(`label[for="${CSS.escape(r1.id)}"]`);
                            if (n) {
                                let e1 = n.querySelector(".option-title");
                                t = e1?.textContent?.trim() || n.textContent?.trim() || "";
                            }
                        }
                        i = t || "";
                    }
                } else i = t.value || "";
            } else if ("SELECT" === n.tagName) {
                let e1 = n;
                if (e1.selectedIndex >= 0 && e1.selectedIndex < e1.options.length) {
                    let t = e1.options[e1.selectedIndex];
                    i = t.textContent?.trim() || t.value || "";
                }
            } else "TEXTAREA" === n.tagName && (i = n.value || "");
            (!t[o] || i) && (t[o] = i);
        }
    }
    return t;
}
_c2 = C;
function A() {
    let e1 = k(), t = T(), r1 = {};
    return e1 && e1.length > 0 && (r1.education = e1), t && t.length > 0 && (r1.employment = t), r1;
}
_c3 = A;
function k() {
    let e1 = [];
    try {
        let t = document, r1 = [
            ...Array.from(t.querySelectorAll('[id*="education"], [class*="education"], [name*="education"]')),
            ...Array.from(t.querySelectorAll('[id*="school"], [class*="school"], [name*="school"]')),
            ...Array.from(t.querySelectorAll('[id*="degree"], [class*="degree"], [name*="degree"]'))
        ], n = Array.from(new Set(r1)), o = new Set;
        n.forEach((e1)=>{
            let r1 = e1;
            for(; r1 && r1 !== t.body;){
                let e1 = r1.querySelectorAll("input, select, textarea");
                if (e1.length >= 2) {
                    o.add(r1);
                    break;
                }
                r1 = r1.parentElement;
            }
        });
        let i = [];
        o.forEach((e1)=>{
            let t = !1;
            if (o.forEach((r1)=>{
                e1 !== r1 && r1.contains(e1) && (t = !0);
            }), !t) {
                let t = !1;
                o.forEach((r1)=>{
                    e1 !== r1 && e1.contains(r1) && (t = !0);
                }), t || i.push(e1);
            }
        }), i.forEach((t)=>{
            let r1 = {}, n = t.querySelectorAll("input, select, textarea");
            n.forEach((e1)=>{
                let n = e1;
                if ("hidden" === n.type || "button" === n.type || "submit" === n.type) return;
                let o = n.id || n.name, i = "";
                if (o) {
                    let e1 = t.querySelector(`label[for="${o}"]`);
                    i = e1?.textContent?.trim() || "";
                }
                i || (i = n.getAttribute("placeholder") || n.getAttribute("aria-label") || n.name || o || ""), i = i.replace(/[*:\uff1a]/g, "").trim();
                let a = "";
                if ("SELECT" === n.tagName) {
                    let e1 = n;
                    if (e1.selectedIndex >= 0 && e1.selectedIndex < e1.options.length) {
                        let t = e1.options[e1.selectedIndex];
                        a = (t.textContent?.trim() || t.value || "").toString();
                    }
                } else n.tagName, a = n.value || "";
                i && a && (r1[i] = a);
            }), Object.keys(r1).length > 0 && e1.push(r1);
        });
    } catch (e1) {}
    return e1;
}
function T() {
    let e1 = [];
    try {
        let t = document, r1 = [
            ...Array.from(t.querySelectorAll('[id*="employment"], [class*="employment"], [name*="employment"]')),
            ...Array.from(t.querySelectorAll('[id*="employer"], [class*="employer"], [name*="employer"]')),
            ...Array.from(t.querySelectorAll('[id*="job"], [class*="job"], [name*="job"]'))
        ], n = Array.from(new Set(r1)), o = new Set;
        n.forEach((e1)=>{
            let r1 = e1;
            for(; r1 && r1 !== t.body;){
                let e1 = r1.querySelectorAll("input, select, textarea");
                if (e1.length >= 2) {
                    o.add(r1);
                    break;
                }
                r1 = r1.parentElement;
            }
        });
        let i = [];
        o.forEach((e1)=>{
            let t = !1;
            if (o.forEach((r1)=>{
                e1 !== r1 && r1.contains(e1) && (t = !0);
            }), !t) {
                let t = !1;
                o.forEach((r1)=>{
                    e1 !== r1 && e1.contains(r1) && (t = !0);
                }), t || i.push(e1);
            }
        }), i.forEach((t)=>{
            let r1 = {}, n = t.querySelectorAll("input, select, textarea");
            n.forEach((e1)=>{
                let n = e1;
                if ("hidden" === n.type || "button" === n.type || "submit" === n.type) return;
                let o = n.id || n.name, i = "";
                if (o) {
                    let e1 = t.querySelector(`label[for="${o}"]`);
                    i = e1?.textContent?.trim() || "";
                }
                i || (i = n.getAttribute("placeholder") || n.getAttribute("aria-label") || n.name || o || ""), i = i.replace(/[*:\uff1a]/g, "").trim();
                let a = "";
                if ("SELECT" === n.tagName) {
                    let e1 = n;
                    if (e1.selectedIndex >= 0 && e1.selectedIndex < e1.options.length) {
                        let t = e1.options[e1.selectedIndex];
                        a = (t.textContent?.trim() || t.value || "").toString();
                    }
                } else n.tagName, a = n.value || "";
                i && a && (r1[i] = a);
            }), Object.keys(r1).length > 0 && e1.push(r1);
        });
    } catch (e1) {}
    return e1;
}
_c4 = T;
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");

},{}]},["fatzL","fALxU"], "fALxU", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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YyxJQUFJO2dCQUFPLElBQUksSUFBRTtnQkFBRyxJQUFHLGFBQVcsRUFBRSxTQUFRO29CQUFDLElBQUksS0FBRTtvQkFBRSxJQUFHLEdBQUUsaUJBQWUsS0FBRyxHQUFFLGdCQUFjLEdBQUUsUUFBUSxRQUFPO3dCQUFDLElBQUksSUFBRSxHQUFFLE9BQU8sQ0FBQyxHQUFFLGNBQWM7d0JBQUMsSUFBRSxBQUFDLENBQUEsRUFBRSxhQUFhLFVBQVEsRUFBRSxTQUFPLEVBQUMsRUFBRztvQkFBVTtnQkFBQyxPQUFNLEVBQUUsU0FBUSxJQUFFLEVBQUUsU0FBTztnQkFBRyxLQUFHLEtBQUksQ0FBQSxFQUFDLENBQUMsRUFBRSxHQUFDLENBQUE7WUFBRSxJQUFHLE9BQU8sS0FBSyxJQUFHLFNBQU8sS0FBRyxHQUFFLEtBQUs7UUFBRTtJQUFFLEVBQUMsT0FBTSxJQUFFLENBQUM7SUFBQyxPQUFPO0FBQUM7TUFBaHlDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS01ODE5YzhkMDA5MmVjZGY5LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2NvbWVldC9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxjb21lZXRcXFxccnVsZXMuanNcIixcImJ1bmRsZUlkXCI6XCIwY2M4NWYyODc2MjMyMzJhXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogOXF4ZWNcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2NvbWVldC9ydWxlcy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXIgLT4gZEF0YVMgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvY29tZWV0L2Fuc3dlci5qc1xyXG4gKiAgIC4vcGhvbmUtY291bnRyeS1jb2RlIC0+IGVKRFZTICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2NvbWVldC9waG9uZS1jb3VudHJ5LWNvZGUuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS9waG9uZS1jb3VudHJ5LWNvZGUgLT4gOG5FTncgID0+ICBzcmMvY29yZS9waG9uZS1jb3VudHJ5LWNvZGUuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJDT01FRVRfUEhPTkVfV0lUSF9DT1VOVFJZX0NPREVfREVTQ1JJUFRJT05cIiwoKT0+cyksbi5leHBvcnQocixcImlzUnVubmluZ0luSWZyYW1lXCIsKCk9PmQpLG4uZXhwb3J0KHIsXCJpc1J1bm5pbmdJbkNvbWVldElmcmFtZVwiLCgpPT5mKSxuLmV4cG9ydChyLFwiaGFzQ3Jvc3NPcmlnaW5Db21lZXRJZnJhbWVcIiwoKT0+cCksbi5leHBvcnQocixcImV4dHJhY3RSdWxlc1wiLCgpPT5tKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9PkMpLG4uZXhwb3J0KHIsXCJnZXRFZHVBbmRFbXBsb3ltZW50U25hcHNob3RcIiwoKT0+QSk7dmFyIG89ZShcIn5jb3JlL2VudW1zXCIpLGk9ZShcIn5jb3JlL3Bob25lLWNvdW50cnktY29kZVwiKSxhPWUoXCIuL2Fuc3dlclwiKSxsPWUoXCIuL3Bob25lLWNvdW50cnktY29kZVwiKTtsZXQgcz1pLkxPQ0FMX1BIT05FX0RFU0NSSVBUSU9OO2Z1bmN0aW9uIHUoKXtsZXQgZT1bXSx0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZVt0aXRsZT1cIkpvYiBBcHBsaWNhdGlvbiBmb3JtXCJdJyk7aWYoIXQpcmV0dXJuIGU7dHJ5e2xldCByPXQuY29udGVudERvY3VtZW50fHx0LmNvbnRlbnRXaW5kb3c/LmRvY3VtZW50O3ImJmUucHVzaChyKX1jYXRjaChlKXt9cmV0dXJuIGV9ZnVuY3Rpb24gYyhlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtI2FwcGx5Rm9ybVwiKTtyZXR1cm4gdHx8KHQ9ZS5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhcHBseUZvcm1cIl0nKSl9ZnVuY3Rpb24gZCgpe3JldHVybiB3aW5kb3cudG9wIT09d2luZG93LnNlbGZ9ZnVuY3Rpb24gZigpe2xldCBlPXdpbmRvdy5sb2NhdGlvbi5ocmVmO2lmKFwiYWJvdXQ6YmxhbmtcIj09PWV8fGUuc3RhcnRzV2l0aChcImFib3V0OlwiKSlyZXR1cm4hMTtsZXQgdD0hIWMoZG9jdW1lbnQpO2lmKHQpcmV0dXJuITA7aWYoIWQoKSlyZXR1cm4hMTtsZXQgcj0oZS5pbmNsdWRlcyhcImNvbWVldC5jb1wiKXx8ZS5pbmNsdWRlcyhcImNvbWVldC5jb21cIikpJiZlLmluY2x1ZGVzKFwiL2FwcGx5XCIpO3JldHVybiByfWZ1bmN0aW9uIHAoKXtpZihkKCkpcmV0dXJuITE7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lW3RpdGxlPVwiSm9iIEFwcGxpY2F0aW9uIGZvcm1cIl0nKTtpZighZSlyZXR1cm4hMTt0cnl7bGV0IHQ9ZS5jb250ZW50RG9jdW1lbnQ7aWYoIXQpcmV0dXJuITB9Y2F0Y2goZSl7cmV0dXJuITB9cmV0dXJuITF9YXN5bmMgZnVuY3Rpb24gbSgpe2xldCBlPVtdO2lmKGYoKSl7bGV0IHQ9Yyhkb2N1bWVudCk7aWYodCl7bGV0IHI9YXdhaXQgaCh0LGRvY3VtZW50KTtlLnB1c2goLi4ucil9cmV0dXJuIGV9fWFzeW5jIGZ1bmN0aW9uIGgoZSx0KXtsZXQgcj1bXSxuPW5ldyBTZXQsbz1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtmb3IobGV0IGUgb2Ygbyl7bGV0IG89ZTtpZihcInJhZGlvXCI9PT1vLnR5cGV8fFwiY2hlY2tib3hcIj09PW8udHlwZSl7bGV0IGU9by5jbG9zZXN0KFwiZmllbGRzZXRcIik7aWYoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwibGVnZW5kLnF1ZXN0aW9uLXRpdGxlXCIpO2lmKHQpe2xldCBlPXQudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtpZihlJiZuLmhhcyhlKSljb250aW51ZTtlJiZuLmFkZChlKX19ZWxzZXtpZihvLm5hbWUmJm4uaGFzKG8ubmFtZSkpY29udGludWU7by5uYW1lJiZuLmFkZChvLm5hbWUpfX1sZXQgaT1hd2FpdCB2KG8sdCk7aWYoaSl7ci5wdXNoKGkpO2xldCBlPWcoaSxvKTtlJiZyLnB1c2goZSl9fWxldCBpPWUucXVlcnlTZWxlY3RvckFsbChcImRpdi5kcm9wZG93blwiKTtmb3IobGV0IGUgb2YgaSl7bGV0IG89ZSxpPW8uY2xvc2VzdChcImZpZWxkc2V0XCIpLGE9XCJcIjtpZihpKXtsZXQgZT1pLnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmQucXVlc3Rpb24tdGl0bGVcIik7aWYoZSl7bGV0IHQ9ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO2lmKGE9XCJkcm9wZG93bjpcIit0LG4uaGFzKGEpKWNvbnRpbnVlO2EmJm4uYWRkKGEpfX1sZXQgbD1hd2FpdCBiKG8sdCk7bCYmci5wdXNoKGwpfXJldHVybiByfWZ1bmN0aW9uIGcoZSx0KXtpZihcInBob25lXCIhPT1lLmxhYmVsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKXJldHVybiBudWxsO2xldCByPXQuY2xvc2VzdChcIi5pdGlcIiksbj1yPy5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLml0aV9fc2VsZWN0ZWQtY291bnRyeVwiKTtpZighcnx8IW4pcmV0dXJuIG51bGw7bGV0IGk9QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5pdGlfX2NvdW50cnlcIikpLm1hcChsLnBhcnNlQ29tZWV0UGhvbmVDb3VudHJ5T3B0aW9uKS5tYXAobC5mb3JtYXRDb21lZXRQaG9uZUNvdW50cnlPcHRpb24pLmZpbHRlcihCb29sZWFuKTtyZXR1cm57bGFiZWw6XCJQaG9uZSBDb3VudHJ5IENvZGVcIix0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QscmVxdWlyZWQ6ZS5yZXF1aXJlZCxvcHRpb25zOmksJGlucHV0OnR9fWFzeW5jIGZ1bmN0aW9uIGIoZSx0PWRvY3VtZW50KXtsZXQgcj1lLmNsb3Nlc3QoXCJmaWVsZHNldFwiKTtpZighcilyZXR1cm4gbnVsbDtsZXQgbj1yLnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmQucXVlc3Rpb24tdGl0bGVcIik7aWYoIW4pcmV0dXJuIG51bGw7bGV0IGk9KDAsYS5ub3JtYWxpemVDb21lZXRMYWJlbFRleHQpKG4udGV4dENvbnRlbnQpO2lmKCFpKXJldHVybiBudWxsO2xldCBsPW8uRklFTERfVFlQRS5TRUxFQ1Qscz0oMCxhLmlzQ29tZWV0UmVxdWlyZWRGaWVsZCkoZSxuKSx1PVtdLGM9ZS5xdWVyeVNlbGVjdG9yKFwidWwuZHJvcGRvd24tbWVudVwiKTtpZihjKXtsZXQgZT1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaSAub3B0aW9uLXRpdGxlXCIpO2ZvcihsZXQgdCBvZiBlKXtsZXQgZT10LnRleHRDb250ZW50Py50cmltKCk7ZSYmdS5wdXNoKGUpfX1sZXQgZD1lLnF1ZXJ5U2VsZWN0b3IoXCJhLmRyb3Bkb3duLXRvZ2dsZVwiKTtyZXR1cm4gZD97bGFiZWw6aSx0eXBlOmwscmVxdWlyZWQ6cyxvcHRpb25zOnUsJGlucHV0OmR9Om51bGx9ZnVuY3Rpb24geShlKXtpZihcIklOUFVUXCIhPT1lLnRhZ05hbWUpcmV0dXJuO2xldCB0PWUscj1cInRlbFwiPT09dC50eXBlfHx0LmNsYXNzTGlzdC5jb250YWlucyhcIml0aV9fdGVsLWlucHV0XCIpO2lmKCFyKXJldHVybjtsZXQgbj10LmNsb3Nlc3QoXCIuaXRpXCIpPy5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLml0aV9fc2VsZWN0ZWQtY291bnRyeVwiKTtyZXR1cm4gbj9zOnZvaWQgMH1hc3luYyBmdW5jdGlvbiB2KGUsdD1kb2N1bWVudCl7bGV0IHI7bGV0IG49dyhlLHQpO2lmKCFuKXJldHVybiBudWxsO2xldCBpPSgwLGEubm9ybWFsaXplQ29tZWV0TGFiZWxUZXh0KShuLnRleHRDb250ZW50KSxsPW51bGw7aWYoXCJJTlBVVFwiPT09ZS50YWdOYW1lKXtsZXQgdD1lO2lmKFwiZmlsZVwiPT09dC50eXBlKXJldHVybiBudWxsO3I9XCJjaGVja2JveFwiPT09dC50eXBlP28uRklFTERfVFlQRS5DSEVDS0JPWDpcInJhZGlvXCI9PT10LnR5cGU/by5GSUVMRF9UWVBFLlJBRElPR1JPVVA6by5GSUVMRF9UWVBFLlRFWFQsbD10fWVsc2UgaWYoXCJTRUxFQ1RcIj09PWUudGFnTmFtZSlyPW8uRklFTERfVFlQRS5TRUxFQ1QsbD1lO2Vsc2V7aWYoXCJURVhUQVJFQVwiIT09ZS50YWdOYW1lKXJldHVybiBudWxsO3I9by5GSUVMRF9UWVBFLlRFWFQsbD1lfWxldCBzPSgwLGEuaXNDb21lZXRSZXF1aXJlZEZpZWxkKShlLG4pLHU9W107aWYocj09PW8uRklFTERfVFlQRS5TRUxFQ1QmJih1PWF3YWl0IFMobCkpLHI9PT1vLkZJRUxEX1RZUEUuUkFESU9HUk9VUCYmKHU9eChlLHQpKSxyPT09by5GSUVMRF9UWVBFLkNIRUNLQk9YKXtsZXQgcj1lLmNsb3Nlc3QoXCJmaWVsZHNldFwiKTtyJiYodT1FKGUscix0KSl9bGV0IGM9eShlKTtyZXR1cm57bGFiZWw6aSx0eXBlOnIscmVxdWlyZWQ6cyxvcHRpb25zOnUsLi4uYz97ZGVzY3JpcHRpb246Y306e30sJGlucHV0Omx9fWZ1bmN0aW9uIHcoZSx0PWRvY3VtZW50KXtsZXQgcj1lO2lmKFwicmFkaW9cIj09PXIudHlwZXx8XCJjaGVja2JveFwiPT09ci50eXBlKXtsZXQgdD1lLmNsb3Nlc3QoXCJmaWVsZHNldFwiKTtpZih0KXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmQucXVlc3Rpb24tdGl0bGVcIik7aWYoZSlyZXR1cm4gZX19bGV0IG49ZS5pZDtpZihuKXtsZXQgZT1DU1MuZXNjYXBlKG4pLHI9dC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2V9XCJdYCk7aWYocilyZXR1cm4gcn1sZXQgbz1lLmNsb3Nlc3QoXCJmaWVsZHNldFwiKTtpZihvKXtsZXQgZT1vLnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmQucXVlc3Rpb24tdGl0bGVcIik7aWYoZSlyZXR1cm4gZX1sZXQgaT1lLmNsb3Nlc3QoXCJkaXYsIGZpZWxkc2V0LCBmb3JtXCIpO2lmKGkpe2xldCBlPWkucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO2lmKGUpcmV0dXJuIGV9bGV0IGE9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2Zvcig7YTspe2lmKFwiTEFCRUxcIj09PWEudGFnTmFtZSlyZXR1cm4gYTthPWEucHJldmlvdXNFbGVtZW50U2libGluZ31yZXR1cm4gbnVsbH1hc3luYyBmdW5jdGlvbiBTKGUpe2xldCB0PVtdO3JldHVyblwiU0VMRUNUXCI9PT1lLnRhZ05hbWUmJkFycmF5LmZyb20oZS5vcHRpb25zKS5mb3JFYWNoKGU9PntlLnZhbHVlJiZcIlwiIT09ZS52YWx1ZSYmdC5wdXNoKGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8ZS52YWx1ZSl9KSx0fWZ1bmN0aW9uIEUoZSx0LHI9ZG9jdW1lbnQpe2xldCBuPVtdLG89dC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtmb3IobGV0IGUgb2YgbylpZihlLmlkKXtsZXQgdD1DU1MuZXNjYXBlKGUuaWQpLG89ci5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3R9XCJdYCk7aWYobyl7bGV0IGU9by5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbi10aXRsZVwiKTtpZihlKXtsZXQgdD1lLnRleHRDb250ZW50Py50cmltKCk7aWYodCl7bi5wdXNoKHQpO2NvbnRpbnVlfX1sZXQgdD1vLnRleHRDb250ZW50Py50cmltKCk7aWYodCl7bi5wdXNoKHQpO2NvbnRpbnVlfX19cmV0dXJuIG59ZnVuY3Rpb24geChlLHQ9ZG9jdW1lbnQpe2xldCByPVtdLG49ZS5uYW1lO2lmKCFuKXJldHVybiByO2xldCBvPXQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9JHtDU1MuZXNjYXBlKG4pfV1gKTtmb3IobGV0IGUgb2Ygbyl7aWYoZS5pZCl7bGV0IG49Q1NTLmVzY2FwZShlLmlkKSxvPXQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtufVwiXWApO2lmKG8pe2xldCBlPW8ucXVlcnlTZWxlY3RvcihcIi5vcHRpb24tdGl0bGVcIik7aWYoZSl7bGV0IHQ9ZS50ZXh0Q29udGVudD8udHJpbSgpO2lmKHQpe3IucHVzaCh0KTtjb250aW51ZX19bGV0IHQ9by50ZXh0Q29udGVudD8udHJpbSgpO2lmKHQpe3IucHVzaCh0KTtjb250aW51ZX19fWlmKGUudmFsdWUmJlwiW29iamVjdCBPYmplY3RdXCIhPT1lLnZhbHVlKXtyLnB1c2goZS52YWx1ZSk7Y29udGludWV9bGV0IG49ZS5uZXh0RWxlbWVudFNpYmxpbmc7aWYobiYmXCJMQUJFTFwiPT09bi50YWdOYW1lKXtsZXQgZT1uLnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uLXRpdGxlXCIpO2lmKGUpe2xldCB0PWUudGV4dENvbnRlbnQ/LnRyaW0oKTtpZih0KXtyLnB1c2godCk7Y29udGludWV9fWxldCB0PW4udGV4dENvbnRlbnQ/LnRyaW0oKTt0JiZyLnB1c2godCl9fXJldHVybiByfWFzeW5jIGZ1bmN0aW9uIEMoZSl7bGV0IHQ9e30scj1bZG9jdW1lbnRdLG49dSgpO2ZvcihsZXQgZSBvZihyLnB1c2goLi4ubikscikpe2xldCByPWUucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpO2ZvcihsZXQgbiBvZiByKXtsZXQgcj13KG4sZSk7aWYoIXIpY29udGludWU7bGV0IG89ci50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiLGk9XCJcIjtpZihcIklOUFVUXCI9PT1uLnRhZ05hbWUpe2xldCB0PW47aWYoXCJjaGVja2JveFwiPT09dC50eXBlKWk9dC5jaGVja2VkP1wiWWVzXCI6XCJOb1wiO2Vsc2UgaWYoXCJyYWRpb1wiPT09dC50eXBlKXtsZXQgcj1lLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtDU1MuZXNjYXBlKHQubmFtZSl9XCJdOmNoZWNrZWRgKTtpZihyKXtsZXQgdD1yLnZhbHVlO2lmKCghdHx8XCJbb2JqZWN0IE9iamVjdF1cIj09PXR8fFwib25cIj09PXQpJiZyLmlkKXtsZXQgbj1lLnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7Q1NTLmVzY2FwZShyLmlkKX1cIl1gKTtpZihuKXtsZXQgZT1uLnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uLXRpdGxlXCIpO3Q9ZT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8bi50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifX1pPXR8fFwiXCJ9fWVsc2UgaT10LnZhbHVlfHxcIlwifWVsc2UgaWYoXCJTRUxFQ1RcIj09PW4udGFnTmFtZSl7bGV0IGU9bjtpZihlLnNlbGVjdGVkSW5kZXg+PTAmJmUuc2VsZWN0ZWRJbmRleDxlLm9wdGlvbnMubGVuZ3RoKXtsZXQgdD1lLm9wdGlvbnNbZS5zZWxlY3RlZEluZGV4XTtpPXQudGV4dENvbnRlbnQ/LnRyaW0oKXx8dC52YWx1ZXx8XCJcIn19ZWxzZVwiVEVYVEFSRUFcIj09PW4udGFnTmFtZSYmKGk9bi52YWx1ZXx8XCJcIik7KCF0W29dfHxpKSYmKHRbb109aSl9fXJldHVybiB0fWZ1bmN0aW9uIEEoKXtsZXQgZT1rKCksdD1UKCkscj17fTtyZXR1cm4gZSYmZS5sZW5ndGg+MCYmKHIuZWR1Y2F0aW9uPWUpLHQmJnQubGVuZ3RoPjAmJihyLmVtcGxveW1lbnQ9dCkscn1mdW5jdGlvbiBrKCl7bGV0IGU9W107dHJ5e2xldCB0PWRvY3VtZW50LHI9Wy4uLkFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPVwiZWR1Y2F0aW9uXCJdLCBbY2xhc3MqPVwiZWR1Y2F0aW9uXCJdLCBbbmFtZSo9XCJlZHVjYXRpb25cIl0nKSksLi4uQXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCo9XCJzY2hvb2xcIl0sIFtjbGFzcyo9XCJzY2hvb2xcIl0sIFtuYW1lKj1cInNjaG9vbFwiXScpKSwuLi5BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnW2lkKj1cImRlZ3JlZVwiXSwgW2NsYXNzKj1cImRlZ3JlZVwiXSwgW25hbWUqPVwiZGVncmVlXCJdJykpXSxuPUFycmF5LmZyb20obmV3IFNldChyKSksbz1uZXcgU2V0O24uZm9yRWFjaChlPT57bGV0IHI9ZTtmb3IoO3ImJnIhPT10LmJvZHk7KXtsZXQgZT1yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtpZihlLmxlbmd0aD49Mil7by5hZGQocik7YnJlYWt9cj1yLnBhcmVudEVsZW1lbnR9fSk7bGV0IGk9W107by5mb3JFYWNoKGU9PntsZXQgdD0hMTtpZihvLmZvckVhY2gocj0+e2UhPT1yJiZyLmNvbnRhaW5zKGUpJiYodD0hMCl9KSwhdCl7bGV0IHQ9ITE7by5mb3JFYWNoKHI9PntlIT09ciYmZS5jb250YWlucyhyKSYmKHQ9ITApfSksdHx8aS5wdXNoKGUpfX0pLGkuZm9yRWFjaCh0PT57bGV0IHI9e30sbj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtuLmZvckVhY2goZT0+e2xldCBuPWU7aWYoXCJoaWRkZW5cIj09PW4udHlwZXx8XCJidXR0b25cIj09PW4udHlwZXx8XCJzdWJtaXRcIj09PW4udHlwZSlyZXR1cm47bGV0IG89bi5pZHx8bi5uYW1lLGk9XCJcIjtpZihvKXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7b31cIl1gKTtpPWU/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9aXx8KGk9bi5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKXx8bi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxuLm5hbWV8fG98fFwiXCIpLGk9aS5yZXBsYWNlKC9bKjpcXHVmZjFhXS9nLFwiXCIpLnRyaW0oKTtsZXQgYT1cIlwiO2lmKFwiU0VMRUNUXCI9PT1uLnRhZ05hbWUpe2xldCBlPW47aWYoZS5zZWxlY3RlZEluZGV4Pj0wJiZlLnNlbGVjdGVkSW5kZXg8ZS5vcHRpb25zLmxlbmd0aCl7bGV0IHQ9ZS5vcHRpb25zW2Uuc2VsZWN0ZWRJbmRleF07YT0odC50ZXh0Q29udGVudD8udHJpbSgpfHx0LnZhbHVlfHxcIlwiKS50b1N0cmluZygpfX1lbHNlIG4udGFnTmFtZSxhPW4udmFsdWV8fFwiXCI7aSYmYSYmKHJbaV09YSl9KSxPYmplY3Qua2V5cyhyKS5sZW5ndGg+MCYmZS5wdXNoKHIpfSl9Y2F0Y2goZSl7fXJldHVybiBlfWZ1bmN0aW9uIFQoKXtsZXQgZT1bXTt0cnl7bGV0IHQ9ZG9jdW1lbnQscj1bLi4uQXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCo9XCJlbXBsb3ltZW50XCJdLCBbY2xhc3MqPVwiZW1wbG95bWVudFwiXSwgW25hbWUqPVwiZW1wbG95bWVudFwiXScpKSwuLi5BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnW2lkKj1cImVtcGxveWVyXCJdLCBbY2xhc3MqPVwiZW1wbG95ZXJcIl0sIFtuYW1lKj1cImVtcGxveWVyXCJdJykpLC4uLkFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPVwiam9iXCJdLCBbY2xhc3MqPVwiam9iXCJdLCBbbmFtZSo9XCJqb2JcIl0nKSldLG49QXJyYXkuZnJvbShuZXcgU2V0KHIpKSxvPW5ldyBTZXQ7bi5mb3JFYWNoKGU9PntsZXQgcj1lO2Zvcig7ciYmciE9PXQuYm9keTspe2xldCBlPXIucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpO2lmKGUubGVuZ3RoPj0yKXtvLmFkZChyKTticmVha31yPXIucGFyZW50RWxlbWVudH19KTtsZXQgaT1bXTtvLmZvckVhY2goZT0+e2xldCB0PSExO2lmKG8uZm9yRWFjaChyPT57ZSE9PXImJnIuY29udGFpbnMoZSkmJih0PSEwKX0pLCF0KXtsZXQgdD0hMTtvLmZvckVhY2gocj0+e2UhPT1yJiZlLmNvbnRhaW5zKHIpJiYodD0hMCl9KSx0fHxpLnB1c2goZSl9fSksaS5mb3JFYWNoKHQ9PntsZXQgcj17fSxuPXQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpO24uZm9yRWFjaChlPT57bGV0IG49ZTtpZihcImhpZGRlblwiPT09bi50eXBlfHxcImJ1dHRvblwiPT09bi50eXBlfHxcInN1Ym1pdFwiPT09bi50eXBlKXJldHVybjtsZXQgbz1uLmlkfHxuLm5hbWUsaT1cIlwiO2lmKG8pe2xldCBlPXQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtvfVwiXWApO2k9ZT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIn1pfHwoaT1uLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpfHxuLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fG4ubmFtZXx8b3x8XCJcIiksaT1pLnJlcGxhY2UoL1sqOlxcdWZmMWFdL2csXCJcIikudHJpbSgpO2xldCBhPVwiXCI7aWYoXCJTRUxFQ1RcIj09PW4udGFnTmFtZSl7bGV0IGU9bjtpZihlLnNlbGVjdGVkSW5kZXg+PTAmJmUuc2VsZWN0ZWRJbmRleDxlLm9wdGlvbnMubGVuZ3RoKXtsZXQgdD1lLm9wdGlvbnNbZS5zZWxlY3RlZEluZGV4XTthPSh0LnRleHRDb250ZW50Py50cmltKCl8fHQudmFsdWV8fFwiXCIpLnRvU3RyaW5nKCl9fWVsc2Ugbi50YWdOYW1lLGE9bi52YWx1ZXx8XCJcIjtpJiZhJiYocltpXT1hKX0pLE9iamVjdC5rZXlzKHIpLmxlbmd0aD4wJiZlLnB1c2gocil9KX1jYXRjaChlKXt9cmV0dXJuIGV9XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy43NjIzMjMyYS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);