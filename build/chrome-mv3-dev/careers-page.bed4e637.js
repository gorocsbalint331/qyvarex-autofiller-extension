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
})({"i9Rb3":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\careers-page.js",
    "bundleId": "b91b1662bed4e637",
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
var j = z(require("bbf6d2149f02790"));
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

},{"bbf6d2149f02790":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"77gfu":[function(require,module,exports) {
/**
 * Parcel module id: dcvWr
 * Resolved path: src/contents/sites/careers-page.js
 * Dependencies:
 *   ./answer -> 7ABcJ  =>  src/contents/sites/careers-page/answer.js
 *   ./operations -> 1VGS1  =>  src/contents/sites/careers-page/operations.js
 *   ./rules -> 9NM9Q  =>  src/contents/sites/careers-page/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  src/contents/methods/section-results.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Careerspage", ()=>v);
var o = e("~contents/methods/section-results"), i = e("~contents/methods/answer"), a = e("~contents/methods/dom"), l = e("~contents/sites/base-filler"), s = e("~contents/sites/autofill-answer-pair-tracking"), u = e("~core/enums"), c = e("~core/xpath"), d = e("~store/url"), f = e("~utils/delay"), p = e("./answer"), m = e("./operations"), h = e("./rules");
function g(e1) {
    let t = [], r1 = document.querySelectorAll(".form-group");
    for (let n of r1)(0, h.detectEduExpType)(n) === e1 && n.querySelectorAll(".education-experience-item").forEach((e1)=>t.push(e1));
    return t;
}
function b() {
    return g("education");
}
function y() {
    return g("experience");
}
class v extends l.BaseFiller {
    extractEducationEmploymentAdditional(e1) {
        let { education: t, employment: r1 } = e1 || {};
        return {
            education: t || [],
            employment: r1 || []
        };
    }
    async fillSequentialSectionRecords(e1) {
        let { sectionName: t, records: r1, getSections: n, addSection: i, getRules: a, getOperations: l, beforeFillSection: s, afterFillSection: u, onSkipped: c } = e1;
        if (!r1.length) return;
        let d = (0, o.createSequentialSectionResultReporter)("education" === t ? "education" : "employment", this.progressTracker, "education" === t ? "Education" : "Experience"), p = !1;
        for(let e1 = 0; e1 < r1.length; e1++){
            let o = n();
            if (console.debug("[careers-page][section] preparing record", {
                sectionName: t,
                recordIndex: e1,
                recordCount: r1.length,
                sectionCount: o.length
            }), e1 > 0 || 0 === o.length) {
                let r1 = o.length;
                await i(1);
                let a = !1;
                for(let e1 = 0; e1 < 10; e1++){
                    if ((o = n()).length > r1) {
                        a = !0;
                        break;
                    }
                    await (0, f.delay)(200);
                }
                if (console.debug("[careers-page][section] add attempt completed", {
                    sectionName: t,
                    recordIndex: e1,
                    beforeCount: r1,
                    sectionCount: o.length,
                    added: a
                }), !a && e1 > 0) {
                    console.warn(`Failed to add next ${t} section at index ${e1}`);
                    break;
                }
            }
            o = n();
            let g = o[o.length - 1];
            if (!g) {
                console.warn("[careers-page][section] current section not found", {
                    sectionName: t,
                    recordIndex: e1,
                    sectionCount: o.length,
                    formGroups: Array.from(document.querySelectorAll(".form-group")).map((e1)=>({
                            detectedType: (0, h.detectEduExpType)(e1),
                            label: e1.querySelector(":scope > label")?.textContent?.trim() || "",
                            itemCount: e1.querySelectorAll(".education-experience-item").length
                        }))
                });
                break;
            }
            s && await s(g);
            let b = await a(), y = b[b.length - 1];
            if (console.debug("[careers-page][section] rules extracted", {
                sectionName: t,
                recordIndex: e1,
                ruleCount: b.length,
                childCount: y?.children?.length || 0
            }), !y) {
                console.warn("[careers-page][section] current rule not found", {
                    sectionName: t,
                    recordIndex: e1,
                    sectionCount: o.length,
                    ruleCount: b.length
                });
                break;
            }
            let v = l([
                y
            ], [
                r1[e1]
            ], this.operationConfig, void 0, {
                ...d.forRecord(e1, [
                    y
                ]),
                onSkipped: ()=>{
                    p = !0;
                }
            });
            for (let e1 of v)this.taskQueue.add(e1);
            if (console.debug("[careers-page][section] operations started", {
                sectionName: t,
                recordIndex: e1,
                operationCount: v.length
            }), await this.taskQueue.run(), console.debug("[careers-page][section] operations completed", {
                sectionName: t,
                recordIndex: e1
            }), p) {
                c?.();
                return;
            }
            let w = n(), S = w[w.length - 1] || g;
            u && await u(S, r1[e1]), console.debug("[careers-page][section] post-processing completed", {
                sectionName: t,
                recordIndex: e1
            });
            let E = n()[n().length - 1] || S, x = await (0, m.clickSaveButton)(E);
            if (console.debug("[careers-page][section] save attempted", {
                sectionName: t,
                recordIndex: e1,
                saved: x
            }), !x) {
                d.markRecordMissed(e1), console.warn(`Save ${t} section failed at index ${e1}`);
                break;
            }
            d.clearRecordFocus(e1);
        }
    }
    getRecordDateValue(e1, t) {
        for (let r1 of t)try {
            let t = (0, i.findValueInRecord)(r1, e1), n = Array.isArray(t) ? t[0] : t, o = String(n || "").trim();
            if (o) return o;
        } catch  {}
        return null;
    }
    async fillSectionEndDateAfterStart(e1) {
        let { section: t, record: r1, sectionName: n, startSelectors: o, endSelectors: i, preferredEndDateQuery: a, getSections: l } = e1, s = this.getRecordDateValue(r1, p.END_DATE_LABEL_ALIASES);
        if (!s) return;
        let c = o.join(", "), d = i.join(", "), h = ()=>{
            let e1 = l();
            return e1[e1.length - 1] || t;
        }, g = ()=>Array.from(document.querySelectorAll(".form-group")).filter((e1)=>{
                let t = e1.querySelector(":scope > label")?.textContent?.toLowerCase() || "";
                return !!t.includes(n) || Array.from(e1.querySelectorAll("button")).some((e1)=>{
                    let t = e1.textContent?.trim().toLowerCase() || "";
                    return t.includes("add") && t.includes(n);
                });
            }), b = null, y = -1;
        for(let e1 = 0; e1 < 20; e1++){
            let t = h(), r1 = t.querySelector(c), n = g().map((e1)=>e1.querySelector(c)).find((e1)=>!!e1), o = r1 || n || null;
            if ((o?.value || "").trim()) {
                b = o, y = e1;
                break;
            }
            await (0, f.delay)(150);
        }
        b || console.warn("[careers-page][end-date] start input not ready", {
            sectionName: n,
            startQuery: c,
            startedAtCountInDocument: document.querySelectorAll(c).length
        });
        let v = null, w = -1, S = "";
        for(let e1 = 0; e1 < 20; e1++){
            let t = h(), r1 = b?.closest(".education-experience-item")?.querySelector(a), n = t.querySelector(a), o = g().map((e1)=>e1.querySelector(a)).find((e1)=>!!e1), i = document.querySelector(d);
            if (r1 ? (v = r1, S = "byStartRow") : n ? (v = n, S = "bySection") : o ? (v = o, S = "byFormGroup") : i ? (v = i, S = "byDocument") : v = null, v) {
                w = e1;
                break;
            }
            await (0, f.delay)(200);
        }
        if (!v) {
            console.warn("[careers-page][end-date] end input not found after start filled", {
                sectionName: n,
                endQuery: d,
                preferredEndDateQuery: a,
                endedAtCountInDocument: document.querySelectorAll(d).length,
                endedAtCountByName: document.querySelectorAll('input[name="ended_at"]').length
            });
            return;
        }
        let E = (v.value || "").trim();
        if (E) return;
        let x = t.closest(".form-group")?.querySelector(":scope > label") || v;
        await (0, m.fillDateField)({
            label: "End Date",
            type: u.FIELD_TYPE.DATE,
            required: !1,
            $label: x,
            $input: v
        }, s);
    }
    async ensureConsentCheckboxes() {
        try {
            let e1 = (0, m.querySelectorAllInDocumentAndShadows)('input[type="checkbox"]');
            if (!e1.length) return;
            let t = [
                "terms and conditions",
                "privacy policy",
                "privacy",
                "terms"
            ];
            for (let r1 of e1){
                if (r1.checked) continue;
                let e1 = r1.getRootNode(), n = (r1.id ? e1.querySelector(`label[for="${r1.id}"]`) : null) || r1.closest("label") || r1.parentElement, o = (n?.textContent || "").toLowerCase();
                if (!o) continue;
                let i = t.some((e1)=>o.includes(e1));
                i && (r1.click(), await (0, f.delay)(100));
            }
        } catch  {}
    }
    async fillEducationEndDateAfterStart(e1, t) {
        await this.fillSectionEndDateAfterStart({
            section: e1,
            record: t,
            sectionName: "education",
            startSelectors: p.EDUCATION_START_DATE_SELECTORS,
            endSelectors: p.EDUCATION_END_DATE_SELECTORS,
            preferredEndDateQuery: p.EDUCATION_PREFERRED_END_DATE_QUERY,
            getSections: b
        });
    }
    async fillExperienceEndDateAfterStart(e1, t) {
        await this.fillSectionEndDateAfterStart({
            section: e1,
            record: t,
            sectionName: "experience",
            startSelectors: p.EXPERIENCE_START_DATE_SELECTORS,
            endSelectors: p.EXPERIENCE_END_DATE_SELECTORS,
            preferredEndDateQuery: p.EXPERIENCE_PREFERRED_END_DATE_QUERY,
            getSections: y
        });
    }
    async checkCoverLetter() {
        (0, a.postCoverLetterStatus)((0, h.getCoverLetterStatus)());
    }
    getFieldHandlers() {
        return {
            [u.FIELD_TYPE.TEXT]: (e1, t)=>{
                let r1 = t?.[0];
                if (!r1) return;
                let n = e1.label?.toLowerCase() || "";
                return n.includes("phone") ? (0, m.fillPhoneField)(e1, String(r1 ?? "")) : (0, m.fillInputTextField)(e1.$input, String(r1 ?? ""));
            },
            [u.FIELD_TYPE.SELECT]: (e1, t)=>(0, m.fillSelectField)(e1, t),
            [u.FIELD_TYPE.CHECKBOX]: (e1, t)=>(0, m.fillCheckboxField)(e1, t),
            [u.FIELD_TYPE.RADIOGROUP]: (e1, t)=>(0, m.fillRadioGroupFiled)(e1, t),
            [u.FIELD_TYPE.DATE]: (e1, t)=>{
                let r1 = t?.[0];
                if (r1) return (0, m.fillDateField)(e1, String(r1));
            }
        };
    }
    async extractFormRules() {
        return await (0, h.extractRules)();
    }
    getSiteName() {
        return "careers-page";
    }
    async getAutofillSnapshot(e1) {
        let t = await (0, h.getFormSnapshot)() || {}, r1 = (0, h.getEduAndEmploymentSnapshot)() || {}, n = {
            ...t,
            ...r1
        };
        this.lastFullAutofillSnapshot = n;
        let o = {
            ...n
        };
        return delete o.education, delete o.employment, o;
    }
    async getSubmitSnapshot() {
        let e1 = await (0, h.getFormSnapshot)() || {}, t = (0, h.getEduAndEmploymentSnapshot)() || {}, r1 = {
            ...e1,
            ...t
        };
        this.lastFullSubmitSnapshot = r1;
        let n = {
            ...r1
        };
        return delete n.education, delete n.employment, n;
    }
    getAdditionalAutofillSnapshotData(e1) {
        return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot);
    }
    getAdditionalSubmitSnapshotData() {
        return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot);
    }
    async executeSiteSpecificSteps(e1) {
        let t = (0, c.getFirstOrderedNode)(p.APPLY_SUBMIT_BUTTON_XPATH), r1 = document.querySelector("#application-root")?.shadowRoot || null, n = r1 ? r1.querySelector('button[data-testid="mnkt-button"]') : null, o = n || t;
        await (0, f.delay)(300);
        let i = await this.getAutofillSnapshot(e1), a = this.getAdditionalAutofillSnapshotData?.(e1) || {};
        o && (this.careersSubmitTrackingAbortController?.abort(), this.careersSubmitTrackingAbortController = new AbortController, o.addEventListener("click", async ()=>{
            let e1 = await this.getSubmitSnapshot(), t = this.getAdditionalSubmitSnapshotData?.() || {};
            (0, s.sendAutofillAnswerPairEvent)({
                formUrl: (0, d.useUrlStore).getState().currentTabUrl,
                autofillSnapshot: i,
                submitSnapshot: e1,
                additionalAutofillData: a,
                additionalSubmitData: t,
                source: this.getSiteName()
            });
        }, {
            signal: this.careersSubmitTrackingAbortController.signal
        }));
    }
    submitApplication() {
        let e1 = (0, c.getFirstOrderedNode)(p.APPLY_SUBMIT_BUTTON_XPATH), t = document.querySelector("#application-root")?.shadowRoot || null, r1 = t ? t.querySelector('button[data-testid="mnkt-button"]') : null, n = r1 || e1;
        n && n.click();
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm(), console.debug("[careers-page][fill] initialized");
        let t = this.prepareCoverLetterRules(await this.extractFormRules());
        console.debug("[careers-page][fill] rules extracted", {
            total: t.length,
            education: t.filter((e1)=>e1.type === u.FIELD_TYPE.EDUCATION).length,
            employment: t.filter((e1)=>e1.type === u.FIELD_TYPE.EMPLOYMENT).length
        }), this.progressTracker.setFieldsRequiredStatus(t), console.debug("[careers-page][fill] resume upload started"), await this.handleResumeUpload(), console.debug("[careers-page][fill] resume upload completed"), console.debug("[careers-page][fill] answer request started");
        let r1 = await this.fetchFormAnswers(t, e1);
        return "string" == typeof r1 ? (console.warn("[careers-page][fill] answer request stopped", {
            reason: r1
        }), r1) : (console.debug("[careers-page][fill] answer request completed", {
            regular: Object.keys(this.answer.regular || {}).length,
            education: this.answer.education?.length || 0,
            employment: this.answer.workExperience?.length || 0
        }), await this.fillRegularFields(t), console.debug("[careers-page][fill] regular fields completed"), await this.ensureConsentCheckboxes(), await this.fillEducationAndEmployment(t), console.debug("[careers-page][fill] structured sections completed"), await this.fillCoverLetterFields(), await this.executeSiteSpecificSteps(t), this.finalizeFillForm());
    }
    async fillEducationAndEmployment(e1) {
        let t = this.answer.education || [], r1 = !1;
        await this.fillSequentialSectionRecords({
            sectionName: "education",
            records: t,
            getSections: b,
            addSection: m.addEducationSection,
            getRules: async ()=>await (0, h.getEducationRules)(),
            getOperations: i.getEducationOperations,
            afterFillSection: async (e1, t)=>{
                await this.fillEducationEndDateAfterStart(e1, t);
            },
            onSkipped: ()=>{
                r1 = !0;
            }
        });
        let n = this.answer.workExperience || [], o = !1;
        await this.fillSequentialSectionRecords({
            sectionName: "experience",
            records: n,
            getSections: y,
            addSection: m.addEmploymentSection,
            getRules: async ()=>await (0, h.getExperienceRules)(),
            getOperations: i.getEmploymentOperations,
            beforeFillSection: async (e1)=>{
                let t = e1.querySelector('input[name="is_current_employer"]');
                t?.checked && (t.click(), await (0, f.delay)(300));
            },
            afterFillSection: async (e1, t)=>{
                await this.fillExperienceEndDateAfterStart(e1, t);
            },
            onSkipped: ()=>{
                o = !0;
            }
        }), r1 ? this.progressTracker.updateMissedProgress("Education") : t.length > 0 && this.progressTracker.updateFilledProgress("Education"), o ? this.progressTracker.updateMissedProgress("Employment") : n.length > 0 && this.progressTracker.updateFilledProgress("Employment");
    }
    async handleResumeUpload() {
        this.disableUploadResume ? (await (0, m.removeResume)(), this.progressTracker.updateMissedProgress("Resume/CV")) : this.taskQueue.add(async ()=>{
            await (0, m.removeResume)(), await (0, m.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), await this.taskQueue.run();
    }
    async runPreFillForm() {
        this.taskQueue.add(m.preFillForm), await this.taskQueue.run();
    }
    getSubmitButtonSelector() {
        return p.APPLY_SUBMIT_BUTTON_XPATH;
    }
    constructor(...e1){
        super(...e1), this.lastFullAutofillSnapshot = {}, this.lastFullSubmitSnapshot = {}, this.careersSubmitTrackingAbortController = null, this.formatAnswer = (e1)=>(0, p.formatAnswer)(e1);
    }
}

},{}]},["i9Rb3","77gfu"], "77gfu", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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ZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0zMzUxNjliZWU0OWYzMjkyLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2NhcmVlcnMtcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxjYXJlZXJzLXBhZ2UuanNcIixcImJ1bmRsZUlkXCI6XCJiOTFiMTY2MmJlZDRlNjM3XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogZGN2V3JcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2NhcmVlcnMtcGFnZS5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IDdBQmNKICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2NhcmVlcnMtcGFnZS9hbnN3ZXIuanNcclxuICogICAuL29wZXJhdGlvbnMgLT4gMVZHUzEgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvY2FyZWVycy1wYWdlL29wZXJhdGlvbnMuanNcclxuICogICAuL3J1bGVzIC0+IDlOTTlRICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2NhcmVlcnMtcGFnZS9ydWxlcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvc2VjdGlvbi1yZXN1bHRzIC0+IDZXV3NDICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvc2VjdGlvbi1yZXN1bHRzLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nIC0+IGFDRWxaICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyIC0+IDh4ajZGICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+c3RvcmUvdXJsIC0+IGI1M0wzICA9PiAgc3JjL3N0b3JlL3VybC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiQ2FyZWVyc3BhZ2VcIiwgKCkgPT4gdik7XHJcbnZhciBvID0gZShcIn5jb250ZW50cy9tZXRob2RzL3NlY3Rpb24tcmVzdWx0c1wiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxcclxuICBsID0gZShcIn5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlclwiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9zaXRlcy9hdXRvZmlsbC1hbnN3ZXItcGFpci10cmFja2luZ1wiKSxcclxuICB1ID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGMgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgZCA9IGUoXCJ+c3RvcmUvdXJsXCIpLFxyXG4gIGYgPSBlKFwifnV0aWxzL2RlbGF5XCIpLFxyXG4gIHAgPSBlKFwiLi9hbnN3ZXJcIiksXHJcbiAgbSA9IGUoXCIuL29wZXJhdGlvbnNcIiksXHJcbiAgaCA9IGUoXCIuL3J1bGVzXCIpO1xyXG5cclxuZnVuY3Rpb24gZyhlKSB7XHJcbiAgbGV0IHQgPSBbXSxcclxuICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm0tZ3JvdXBcIik7XHJcbiAgZm9yIChsZXQgbiBvZiByKSgwLCBoLmRldGVjdEVkdUV4cFR5cGUpKG4pID09PSBlICYmIG4ucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmVkdWNhdGlvbi1leHBlcmllbmNlLWl0ZW1cIikuZm9yRWFjaChlID0+IHQucHVzaChlKSk7XHJcbiAgcmV0dXJuIHRcclxufVxyXG5cclxuZnVuY3Rpb24gYigpIHtcclxuICByZXR1cm4gZyhcImVkdWNhdGlvblwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiB5KCkge1xyXG4gIHJldHVybiBnKFwiZXhwZXJpZW5jZVwiKVxyXG59XHJcbmNsYXNzIHYgZXh0ZW5kcyBsLkJhc2VGaWxsZXIge1xyXG4gIGV4dHJhY3RFZHVjYXRpb25FbXBsb3ltZW50QWRkaXRpb25hbChlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICBlZHVjYXRpb246IHQsXHJcbiAgICAgIGVtcGxveW1lbnQ6IHJcclxuICAgIH0gPSBlIHx8IHt9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZWR1Y2F0aW9uOiB0IHx8IFtdLFxyXG4gICAgICBlbXBsb3ltZW50OiByIHx8IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxTZXF1ZW50aWFsU2VjdGlvblJlY29yZHMoZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgc2VjdGlvbk5hbWU6IHQsXHJcbiAgICAgIHJlY29yZHM6IHIsXHJcbiAgICAgIGdldFNlY3Rpb25zOiBuLFxyXG4gICAgICBhZGRTZWN0aW9uOiBpLFxyXG4gICAgICBnZXRSdWxlczogYSxcclxuICAgICAgZ2V0T3BlcmF0aW9uczogbCxcclxuICAgICAgYmVmb3JlRmlsbFNlY3Rpb246IHMsXHJcbiAgICAgIGFmdGVyRmlsbFNlY3Rpb246IHUsXHJcbiAgICAgIG9uU2tpcHBlZDogY1xyXG4gICAgfSA9IGU7XHJcbiAgICBpZiAoIXIubGVuZ3RoKSByZXR1cm47XHJcbiAgICBsZXQgZCA9ICgwLCBvLmNyZWF0ZVNlcXVlbnRpYWxTZWN0aW9uUmVzdWx0UmVwb3J0ZXIpKFwiZWR1Y2F0aW9uXCIgPT09IHQgPyBcImVkdWNhdGlvblwiIDpcclxuICAgICAgICBcImVtcGxveW1lbnRcIiwgdGhpcy5wcm9ncmVzc1RyYWNrZXIsIFwiZWR1Y2F0aW9uXCIgPT09IHQgPyBcIkVkdWNhdGlvblwiIDogXCJFeHBlcmllbmNlXCIpLFxyXG4gICAgICBwID0gITE7XHJcbiAgICBmb3IgKGxldCBlID0gMDsgZSA8IHIubGVuZ3RoOyBlKyspIHtcclxuICAgICAgbGV0IG8gPSBuKCk7XHJcbiAgICAgIGlmIChjb25zb2xlLmRlYnVnKFwiW2NhcmVlcnMtcGFnZV1bc2VjdGlvbl0gcHJlcGFyaW5nIHJlY29yZFwiLCB7XHJcbiAgICAgICAgICBzZWN0aW9uTmFtZTogdCxcclxuICAgICAgICAgIHJlY29yZEluZGV4OiBlLFxyXG4gICAgICAgICAgcmVjb3JkQ291bnQ6IHIubGVuZ3RoLFxyXG4gICAgICAgICAgc2VjdGlvbkNvdW50OiBvLmxlbmd0aFxyXG4gICAgICAgIH0pLCBlID4gMCB8fCAwID09PSBvLmxlbmd0aCkge1xyXG4gICAgICAgIGxldCByID0gby5sZW5ndGg7XHJcbiAgICAgICAgYXdhaXQgaSgxKTtcclxuICAgICAgICBsZXQgYSA9ICExO1xyXG4gICAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgMTA7IGUrKykge1xyXG4gICAgICAgICAgaWYgKChvID0gbigpKS5sZW5ndGggPiByKSB7XHJcbiAgICAgICAgICAgIGEgPSAhMDtcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF3YWl0ICgwLCBmLmRlbGF5KSgyMDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25zb2xlLmRlYnVnKFwiW2NhcmVlcnMtcGFnZV1bc2VjdGlvbl0gYWRkIGF0dGVtcHQgY29tcGxldGVkXCIsIHtcclxuICAgICAgICAgICAgc2VjdGlvbk5hbWU6IHQsXHJcbiAgICAgICAgICAgIHJlY29yZEluZGV4OiBlLFxyXG4gICAgICAgICAgICBiZWZvcmVDb3VudDogcixcclxuICAgICAgICAgICAgc2VjdGlvbkNvdW50OiBvLmxlbmd0aCxcclxuICAgICAgICAgICAgYWRkZWQ6IGFcclxuICAgICAgICAgIH0pLCAhYSAmJiBlID4gMCkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gYWRkIG5leHQgJHt0fSBzZWN0aW9uIGF0IGluZGV4ICR7ZX1gKTtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG8gPSBuKCk7XHJcbiAgICAgIGxldCBnID0gb1tvLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoIWcpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJbY2FyZWVycy1wYWdlXVtzZWN0aW9uXSBjdXJyZW50IHNlY3Rpb24gbm90IGZvdW5kXCIsIHtcclxuICAgICAgICAgIHNlY3Rpb25OYW1lOiB0LFxyXG4gICAgICAgICAgcmVjb3JkSW5kZXg6IGUsXHJcbiAgICAgICAgICBzZWN0aW9uQ291bnQ6IG8ubGVuZ3RoLFxyXG4gICAgICAgICAgZm9ybUdyb3VwczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm0tZ3JvdXBcIikpLm1hcChlID0+ICh7XHJcbiAgICAgICAgICAgIGRldGVjdGVkVHlwZTogKDAsIGguZGV0ZWN0RWR1RXhwVHlwZSkoZSksXHJcbiAgICAgICAgICAgIGxhYmVsOiBlLnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGUgPiBsYWJlbFwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiLFxyXG4gICAgICAgICAgICBpdGVtQ291bnQ6IGUucXVlcnlTZWxlY3RvckFsbChcIi5lZHVjYXRpb24tZXhwZXJpZW5jZS1pdGVtXCIpLmxlbmd0aFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgICBzICYmIGF3YWl0IHMoZyk7XHJcbiAgICAgIGxldCBiID0gYXdhaXQgYSgpLFxyXG4gICAgICAgIHkgPSBiW2IubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChjb25zb2xlLmRlYnVnKFwiW2NhcmVlcnMtcGFnZV1bc2VjdGlvbl0gcnVsZXMgZXh0cmFjdGVkXCIsIHtcclxuICAgICAgICAgIHNlY3Rpb25OYW1lOiB0LFxyXG4gICAgICAgICAgcmVjb3JkSW5kZXg6IGUsXHJcbiAgICAgICAgICBydWxlQ291bnQ6IGIubGVuZ3RoLFxyXG4gICAgICAgICAgY2hpbGRDb3VudDogeT8uY2hpbGRyZW4/Lmxlbmd0aCB8fCAwXHJcbiAgICAgICAgfSksICF5KSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiW2NhcmVlcnMtcGFnZV1bc2VjdGlvbl0gY3VycmVudCBydWxlIG5vdCBmb3VuZFwiLCB7XHJcbiAgICAgICAgICBzZWN0aW9uTmFtZTogdCxcclxuICAgICAgICAgIHJlY29yZEluZGV4OiBlLFxyXG4gICAgICAgICAgc2VjdGlvbkNvdW50OiBvLmxlbmd0aCxcclxuICAgICAgICAgIHJ1bGVDb3VudDogYi5sZW5ndGhcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB2ID0gbChbeV0sIFtyW2VdXSwgdGhpcy5vcGVyYXRpb25Db25maWcsIHZvaWQgMCwge1xyXG4gICAgICAgIC4uLmQuZm9yUmVjb3JkKGUsIFt5XSksXHJcbiAgICAgICAgb25Ta2lwcGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICBwID0gITBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGxldCBlIG9mIHYpIHRoaXMudGFza1F1ZXVlLmFkZChlKTtcclxuICAgICAgaWYgKGNvbnNvbGUuZGVidWcoXCJbY2FyZWVycy1wYWdlXVtzZWN0aW9uXSBvcGVyYXRpb25zIHN0YXJ0ZWRcIiwge1xyXG4gICAgICAgICAgc2VjdGlvbk5hbWU6IHQsXHJcbiAgICAgICAgICByZWNvcmRJbmRleDogZSxcclxuICAgICAgICAgIG9wZXJhdGlvbkNvdW50OiB2Lmxlbmd0aFxyXG4gICAgICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgY29uc29sZS5kZWJ1ZyhcclxuICAgICAgICAgIFwiW2NhcmVlcnMtcGFnZV1bc2VjdGlvbl0gb3BlcmF0aW9ucyBjb21wbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICBzZWN0aW9uTmFtZTogdCxcclxuICAgICAgICAgICAgcmVjb3JkSW5kZXg6IGVcclxuICAgICAgICAgIH0pLCBwKSB7XHJcbiAgICAgICAgYz8uKCk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHcgPSBuKCksXHJcbiAgICAgICAgUyA9IHdbdy5sZW5ndGggLSAxXSB8fCBnO1xyXG4gICAgICB1ICYmIGF3YWl0IHUoUywgcltlXSksIGNvbnNvbGUuZGVidWcoXHJcbiAgICAgIFwiW2NhcmVlcnMtcGFnZV1bc2VjdGlvbl0gcG9zdC1wcm9jZXNzaW5nIGNvbXBsZXRlZFwiLCB7XHJcbiAgICAgICAgc2VjdGlvbk5hbWU6IHQsXHJcbiAgICAgICAgcmVjb3JkSW5kZXg6IGVcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBFID0gbigpW24oKS5sZW5ndGggLSAxXSB8fCBTLFxyXG4gICAgICAgIHggPSBhd2FpdCAoMCwgbS5jbGlja1NhdmVCdXR0b24pKEUpO1xyXG4gICAgICBpZiAoY29uc29sZS5kZWJ1ZyhcIltjYXJlZXJzLXBhZ2VdW3NlY3Rpb25dIHNhdmUgYXR0ZW1wdGVkXCIsIHtcclxuICAgICAgICAgIHNlY3Rpb25OYW1lOiB0LFxyXG4gICAgICAgICAgcmVjb3JkSW5kZXg6IGUsXHJcbiAgICAgICAgICBzYXZlZDogeFxyXG4gICAgICAgIH0pLCAheCkge1xyXG4gICAgICAgIGQubWFya1JlY29yZE1pc3NlZChlKSwgY29uc29sZS53YXJuKGBTYXZlICR7dH0gc2VjdGlvbiBmYWlsZWQgYXQgaW5kZXggJHtlfWApO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgICAgZC5jbGVhclJlY29yZEZvY3VzKGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldFJlY29yZERhdGVWYWx1ZShlLCB0KSB7XHJcbiAgICBmb3IgKGxldCByIG9mIHQpIHRyeSB7XHJcbiAgICAgIGxldCB0ID0gKDAsIGkuZmluZFZhbHVlSW5SZWNvcmQpKHIsIGUpLFxyXG4gICAgICAgIG4gPSBBcnJheS5pc0FycmF5KHQpID8gdFswXSA6IHQsXHJcbiAgICAgICAgbyA9IFN0cmluZyhuIHx8IFwiXCIpLnRyaW0oKTtcclxuICAgICAgaWYgKG8pIHJldHVybiBvXHJcbiAgICB9IGNhdGNoIHt9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBhc3luYyBmaWxsU2VjdGlvbkVuZERhdGVBZnRlclN0YXJ0KGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHNlY3Rpb246IHQsXHJcbiAgICAgIHJlY29yZDogcixcclxuICAgICAgc2VjdGlvbk5hbWU6IG4sXHJcbiAgICAgIHN0YXJ0U2VsZWN0b3JzOiBvLFxyXG4gICAgICBlbmRTZWxlY3RvcnM6IGksXHJcbiAgICAgIHByZWZlcnJlZEVuZERhdGVRdWVyeTogYSxcclxuICAgICAgZ2V0U2VjdGlvbnM6IGxcclxuICAgIH0gPSBlLCBzID0gdGhpcy5nZXRSZWNvcmREYXRlVmFsdWUociwgcC5FTkRfREFURV9MQUJFTF9BTElBU0VTKTtcclxuICAgIGlmICghcykgcmV0dXJuO1xyXG4gICAgbGV0IGMgPSBvLmpvaW4oXCIsIFwiKSxcclxuICAgICAgZCA9IGkuam9pbihcIiwgXCIpLFxyXG4gICAgICBoID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBlID0gbCgpO1xyXG4gICAgICAgIHJldHVybiBlW2UubGVuZ3RoIC0gMV0gfHwgdFxyXG4gICAgICB9LFxyXG4gICAgICBnID0gKCkgPT4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm0tZ3JvdXBcIikpLmZpbHRlcihlID0+IHtcclxuICAgICAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcIjpzY29wZSA+IGxhYmVsXCIpPy50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKSB8fCBcIlwiO1xyXG4gICAgICAgIHJldHVybiAhIXQuaW5jbHVkZXMobikgfHwgQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLnNvbWUoZSA9PiB7XHJcbiAgICAgICAgICBsZXQgdCA9IGUudGV4dENvbnRlbnQ/LnRyaW0oKS50b0xvd2VyQ2FzZSgpIHx8IFwiXCI7XHJcbiAgICAgICAgICByZXR1cm4gdC5pbmNsdWRlcyhcImFkZFwiKSAmJiB0LmluY2x1ZGVzKG4pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSksXHJcbiAgICAgIGIgPSBudWxsLFxyXG4gICAgICB5ID0gLTE7XHJcbiAgICBmb3IgKGxldCBlID0gMDsgZSA8IDIwOyBlKyspIHtcclxuICAgICAgbGV0IHQgPSBoKCksXHJcbiAgICAgICAgciA9IHQucXVlcnlTZWxlY3RvcihjKSxcclxuICAgICAgICBuID0gZygpLm1hcChlID0+IGUucXVlcnlTZWxlY3RvcihjKSkuZmluZChlID0+ICEhZSksXHJcbiAgICAgICAgbyA9IHIgfHwgbiB8fCBudWxsO1xyXG4gICAgICBpZiAoKG8/LnZhbHVlIHx8IFwiXCIpLnRyaW0oKSkge1xyXG4gICAgICAgIGIgPSBvLCB5ID0gZTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0ICgwLCBmLmRlbGF5KSgxNTApXHJcbiAgICB9XHJcbiAgICBiIHx8IGNvbnNvbGUud2FybihcIltjYXJlZXJzLXBhZ2VdW2VuZC1kYXRlXSBzdGFydCBpbnB1dCBub3QgcmVhZHlcIiwge1xyXG4gICAgICBzZWN0aW9uTmFtZTogbixcclxuICAgICAgc3RhcnRRdWVyeTogYyxcclxuICAgICAgc3RhcnRlZEF0Q291bnRJbkRvY3VtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGMpLmxlbmd0aFxyXG4gICAgfSk7XHJcbiAgICBsZXQgdiA9IG51bGwsXHJcbiAgICAgIHcgPSAtMSxcclxuICAgICAgUyA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBlID0gMDsgZSA8IDIwOyBlKyspIHtcclxuICAgICAgbGV0IHQgPSBoKCksXHJcbiAgICAgICAgciA9IGI/LmNsb3Nlc3QoXCIuZWR1Y2F0aW9uLWV4cGVyaWVuY2UtaXRlbVwiKT8ucXVlcnlTZWxlY3RvcihhKSxcclxuICAgICAgICBuID0gdC5xdWVyeVNlbGVjdG9yKGEpLFxyXG4gICAgICAgIG8gPSBnKCkubWFwKGUgPT4gZS5xdWVyeVNlbGVjdG9yKGEpKS5maW5kKGUgPT4gISFlKSxcclxuICAgICAgICBpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkKTtcclxuICAgICAgaWYgKHIgPyAodiA9IHIsIFMgPSBcImJ5U3RhcnRSb3dcIikgOiBuID8gKHYgPSBuLCBTID0gXCJieVNlY3Rpb25cIikgOiBvID8gKHYgPSBvLCBTID1cclxuICAgICAgICAgIFwiYnlGb3JtR3JvdXBcIikgOiBpID8gKHYgPSBpLCBTID0gXCJieURvY3VtZW50XCIpIDogdiA9IG51bGwsIHYpIHtcclxuICAgICAgICB3ID0gZTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0ICgwLCBmLmRlbGF5KSgyMDApXHJcbiAgICB9XHJcbiAgICBpZiAoIXYpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiW2NhcmVlcnMtcGFnZV1bZW5kLWRhdGVdIGVuZCBpbnB1dCBub3QgZm91bmQgYWZ0ZXIgc3RhcnQgZmlsbGVkXCIsIHtcclxuICAgICAgICBzZWN0aW9uTmFtZTogbixcclxuICAgICAgICBlbmRRdWVyeTogZCxcclxuICAgICAgICBwcmVmZXJyZWRFbmREYXRlUXVlcnk6IGEsXHJcbiAgICAgICAgZW5kZWRBdENvdW50SW5Eb2N1bWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkKS5sZW5ndGgsXHJcbiAgICAgICAgZW5kZWRBdENvdW50QnlOYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwiZW5kZWRfYXRcIl0nKS5sZW5ndGhcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IEUgPSAodi52YWx1ZSB8fCBcIlwiKS50cmltKCk7XHJcbiAgICBpZiAoRSkgcmV0dXJuO1xyXG4gICAgbGV0IHggPSB0LmNsb3Nlc3QoXCIuZm9ybS1ncm91cFwiKT8ucXVlcnlTZWxlY3RvcihcIjpzY29wZSA+IGxhYmVsXCIpIHx8IHY7XHJcbiAgICBhd2FpdCAoMCwgbS5maWxsRGF0ZUZpZWxkKSh7XHJcbiAgICAgIGxhYmVsOiBcIkVuZCBEYXRlXCIsXHJcbiAgICAgIHR5cGU6IHUuRklFTERfVFlQRS5EQVRFLFxyXG4gICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgICRsYWJlbDogeCxcclxuICAgICAgJGlucHV0OiB2XHJcbiAgICB9LCBzKVxyXG4gIH1cclxuICBhc3luYyBlbnN1cmVDb25zZW50Q2hlY2tib3hlcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBlID0gKDAsIG0ucXVlcnlTZWxlY3RvckFsbEluRG9jdW1lbnRBbmRTaGFkb3dzKSgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcbiAgICAgIGlmICghZS5sZW5ndGgpIHJldHVybjtcclxuICAgICAgbGV0IHQgPSBbXCJ0ZXJtcyBhbmQgY29uZGl0aW9uc1wiLCBcInByaXZhY3kgcG9saWN5XCIsIFwicHJpdmFjeVwiLCBcInRlcm1zXCJdO1xyXG4gICAgICBmb3IgKGxldCByIG9mIGUpIHtcclxuICAgICAgICBpZiAoci5jaGVja2VkKSBjb250aW51ZTtcclxuICAgICAgICBsZXQgZSA9IHIuZ2V0Um9vdE5vZGUoKSxcclxuICAgICAgICAgIG4gPSAoci5pZCA/IGUucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtyLmlkfVwiXWApIDogbnVsbCkgfHwgci5jbG9zZXN0KFwibGFiZWxcIikgfHwgclxyXG4gICAgICAgICAgLnBhcmVudEVsZW1lbnQsXHJcbiAgICAgICAgICBvID0gKG4/LnRleHRDb250ZW50IHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKCFvKSBjb250aW51ZTtcclxuICAgICAgICBsZXQgaSA9IHQuc29tZShlID0+IG8uaW5jbHVkZXMoZSkpO1xyXG4gICAgICAgIGkgJiYgKHIuY2xpY2soKSwgYXdhaXQgKDAsIGYuZGVsYXkpKDEwMCkpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2gge31cclxuICB9XHJcbiAgYXN5bmMgZmlsbEVkdWNhdGlvbkVuZERhdGVBZnRlclN0YXJ0KGUsIHQpIHtcclxuICAgIGF3YWl0IHRoaXMuZmlsbFNlY3Rpb25FbmREYXRlQWZ0ZXJTdGFydCh7XHJcbiAgICAgIHNlY3Rpb246IGUsXHJcbiAgICAgIHJlY29yZDogdCxcclxuICAgICAgc2VjdGlvbk5hbWU6IFwiZWR1Y2F0aW9uXCIsXHJcbiAgICAgIHN0YXJ0U2VsZWN0b3JzOiBwLkVEVUNBVElPTl9TVEFSVF9EQVRFX1NFTEVDVE9SUyxcclxuICAgICAgZW5kU2VsZWN0b3JzOiBwLkVEVUNBVElPTl9FTkRfREFURV9TRUxFQ1RPUlMsXHJcbiAgICAgIHByZWZlcnJlZEVuZERhdGVRdWVyeTogcC5FRFVDQVRJT05fUFJFRkVSUkVEX0VORF9EQVRFX1FVRVJZLFxyXG4gICAgICBnZXRTZWN0aW9uczogYlxyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgZmlsbEV4cGVyaWVuY2VFbmREYXRlQWZ0ZXJTdGFydChlLCB0KSB7XHJcbiAgICBhd2FpdCB0aGlzLmZpbGxTZWN0aW9uRW5kRGF0ZUFmdGVyU3RhcnQoe1xyXG4gICAgICBzZWN0aW9uOiBlLFxyXG4gICAgICByZWNvcmQ6IHQsXHJcbiAgICAgIHNlY3Rpb25OYW1lOiBcImV4cGVyaWVuY2VcIixcclxuICAgICAgc3RhcnRTZWxlY3RvcnM6IHAuRVhQRVJJRU5DRV9TVEFSVF9EQVRFX1NFTEVDVE9SUyxcclxuICAgICAgZW5kU2VsZWN0b3JzOiBwLkVYUEVSSUVOQ0VfRU5EX0RBVEVfU0VMRUNUT1JTLFxyXG4gICAgICBwcmVmZXJyZWRFbmREYXRlUXVlcnk6IHAuRVhQRVJJRU5DRV9QUkVGRVJSRURfRU5EX0RBVEVfUVVFUlksXHJcbiAgICAgIGdldFNlY3Rpb25zOiB5XHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBjaGVja0NvdmVyTGV0dGVyKCkge1xyXG4gICAgKDAsIGEucG9zdENvdmVyTGV0dGVyU3RhdHVzKSgoMCwgaC5nZXRDb3ZlckxldHRlclN0YXR1cykoKSlcclxuICB9XHJcbiAgZ2V0RmllbGRIYW5kbGVycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuVEVYVF06IChlLCB0KSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSB0Py5bMF07XHJcbiAgICAgICAgaWYgKCFyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG4gPSBlLmxhYmVsPy50b0xvd2VyQ2FzZSgpIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIG4uaW5jbHVkZXMoXCJwaG9uZVwiKSA/ICgwLCBtLmZpbGxQaG9uZUZpZWxkKShlLCBTdHJpbmcociA/PyBcIlwiKSkgOiAoMCwgbVxyXG4gICAgICAgICAgLmZpbGxJbnB1dFRleHRGaWVsZCkoZS4kaW5wdXQsIFN0cmluZyhyID8/IFwiXCIpKVxyXG4gICAgICB9LFxyXG4gICAgICBbdS5GSUVMRF9UWVBFLlNFTEVDVF06IChlLCB0KSA9PiAoMCwgbS5maWxsU2VsZWN0RmllbGQpKGUsIHQpLFxyXG4gICAgICBbdS5GSUVMRF9UWVBFLkNIRUNLQk9YXTogKGUsIHQpID0+ICgwLCBtLmZpbGxDaGVja2JveEZpZWxkKShlLCB0KSxcclxuICAgICAgW3UuRklFTERfVFlQRS5SQURJT0dST1VQXTogKGUsIHQpID0+ICgwLCBtLmZpbGxSYWRpb0dyb3VwRmlsZWQpKGUsIHQpLFxyXG4gICAgICBbdS5GSUVMRF9UWVBFLkRBVEVdOiAoZSwgdCkgPT4ge1xyXG4gICAgICAgIGxldCByID0gdD8uWzBdO1xyXG4gICAgICAgIGlmIChyKSByZXR1cm4gKDAsIG0uZmlsbERhdGVGaWVsZCkoZSwgU3RyaW5nKHIpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGV4dHJhY3RGb3JtUnVsZXMoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgKDAsIGguZXh0cmFjdFJ1bGVzKSgpXHJcbiAgfVxyXG4gIGdldFNpdGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIFwiY2FyZWVycy1wYWdlXCJcclxuICB9XHJcbiAgYXN5bmMgZ2V0QXV0b2ZpbGxTbmFwc2hvdChlKSB7XHJcbiAgICBsZXQgdCA9IGF3YWl0ICgwLCBoLmdldEZvcm1TbmFwc2hvdCkoKSB8fCB7fSxcclxuICAgICAgciA9ICgwLCBoLmdldEVkdUFuZEVtcGxveW1lbnRTbmFwc2hvdCkoKSB8fCB7fSxcclxuICAgICAgbiA9IHtcclxuICAgICAgICAuLi50LFxyXG4gICAgICAgIC4uLnJcclxuICAgICAgfTtcclxuICAgIHRoaXMubGFzdEZ1bGxBdXRvZmlsbFNuYXBzaG90ID0gbjtcclxuICAgIGxldCBvID0ge1xyXG4gICAgICAuLi5uXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRlbGV0ZSBvLmVkdWNhdGlvbiwgZGVsZXRlIG8uZW1wbG95bWVudCwgb1xyXG4gIH1cclxuICBhc3luYyBnZXRTdWJtaXRTbmFwc2hvdCgpIHtcclxuICAgIGxldCBlID0gYXdhaXQgKDAsIGguZ2V0Rm9ybVNuYXBzaG90KSgpIHx8IHt9LFxyXG4gICAgICB0ID0gKDAsIGguZ2V0RWR1QW5kRW1wbG95bWVudFNuYXBzaG90KSgpIHx8IHt9LFxyXG4gICAgICByID0ge1xyXG4gICAgICAgIC4uLmUsXHJcbiAgICAgICAgLi4udFxyXG4gICAgICB9O1xyXG4gICAgdGhpcy5sYXN0RnVsbFN1Ym1pdFNuYXBzaG90ID0gcjtcclxuICAgIGxldCBuID0ge1xyXG4gICAgICAuLi5yXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRlbGV0ZSBuLmVkdWNhdGlvbiwgZGVsZXRlIG4uZW1wbG95bWVudCwgblxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsQXV0b2ZpbGxTbmFwc2hvdERhdGEoZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXh0cmFjdEVkdWNhdGlvbkVtcGxveW1lbnRBZGRpdGlvbmFsKHRoaXMubGFzdEZ1bGxBdXRvZmlsbFNuYXBzaG90KVxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsU3VibWl0U25hcHNob3REYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXh0cmFjdEVkdWNhdGlvbkVtcGxveW1lbnRBZGRpdGlvbmFsKHRoaXMubGFzdEZ1bGxTdWJtaXRTbmFwc2hvdClcclxuICB9XHJcbiAgYXN5bmMgZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKGUpIHtcclxuICAgIGxldCB0ID0gKDAsIGMuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkocC5BUFBMWV9TVUJNSVRfQlVUVE9OX1hQQVRIKSxcclxuICAgICAgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwbGljYXRpb24tcm9vdFwiKT8uc2hhZG93Um9vdCB8fCBudWxsLFxyXG4gICAgICBuID0gciA/IHIucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtdGVzdGlkPVwibW5rdC1idXR0b25cIl0nKSA6IG51bGwsXHJcbiAgICAgIG8gPSBuIHx8IHQ7XHJcbiAgICBhd2FpdCAoMCwgZi5kZWxheSkoMzAwKTtcclxuICAgIGxldCBpID0gYXdhaXQgdGhpcy5nZXRBdXRvZmlsbFNuYXBzaG90KGUpLFxyXG4gICAgICBhID0gdGhpcy5nZXRBZGRpdGlvbmFsQXV0b2ZpbGxTbmFwc2hvdERhdGE/LihlKSB8fCB7fTtcclxuICAgIG8gJiYgKHRoaXMuY2FyZWVyc1N1Ym1pdFRyYWNraW5nQWJvcnRDb250cm9sbGVyPy5hYm9ydCgpLCB0aGlzXHJcbiAgICAgIC5jYXJlZXJzU3VibWl0VHJhY2tpbmdBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyLCBvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxyXG4gICAgICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGxldCBlID0gYXdhaXQgdGhpcy5nZXRTdWJtaXRTbmFwc2hvdCgpLFxyXG4gICAgICAgICAgICB0ID0gdGhpcy5nZXRBZGRpdGlvbmFsU3VibWl0U25hcHNob3REYXRhPy4oKSB8fCB7fTtcclxuICAgICAgICAgICgwLCBzLnNlbmRBdXRvZmlsbEFuc3dlclBhaXJFdmVudCkoe1xyXG4gICAgICAgICAgICBmb3JtVXJsOiAoMCwgZC51c2VVcmxTdG9yZSkuZ2V0U3RhdGUoKS5jdXJyZW50VGFiVXJsLFxyXG4gICAgICAgICAgICBhdXRvZmlsbFNuYXBzaG90OiBpLFxyXG4gICAgICAgICAgICBzdWJtaXRTbmFwc2hvdDogZSxcclxuICAgICAgICAgICAgYWRkaXRpb25hbEF1dG9maWxsRGF0YTogYSxcclxuICAgICAgICAgICAgYWRkaXRpb25hbFN1Ym1pdERhdGE6IHQsXHJcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5nZXRTaXRlTmFtZSgpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHNpZ25hbDogdGhpcy5jYXJlZXJzU3VibWl0VHJhY2tpbmdBYm9ydENvbnRyb2xsZXIuc2lnbmFsXHJcbiAgICAgICAgfSkpXHJcbiAgfVxyXG4gIHN1Ym1pdEFwcGxpY2F0aW9uKCkge1xyXG4gICAgbGV0IGUgPSAoMCwgYy5nZXRGaXJzdE9yZGVyZWROb2RlKShwLkFQUExZX1NVQk1JVF9CVVRUT05fWFBBVEgpLFxyXG4gICAgICB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBsaWNhdGlvbi1yb290XCIpPy5zaGFkb3dSb290IHx8IG51bGwsXHJcbiAgICAgIHIgPSB0ID8gdC5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS10ZXN0aWQ9XCJtbmt0LWJ1dHRvblwiXScpIDogbnVsbCxcclxuICAgICAgbiA9IHIgfHwgZTtcclxuICAgIG4gJiYgbi5jbGljaygpXHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVGaWxsRm9ybSgpLCBjb25zb2xlLmRlYnVnKFwiW2NhcmVlcnMtcGFnZV1bZmlsbF0gaW5pdGlhbGl6ZWRcIik7XHJcbiAgICBsZXQgdCA9IHRoaXMucHJlcGFyZUNvdmVyTGV0dGVyUnVsZXMoYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCkpO1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIltjYXJlZXJzLXBhZ2VdW2ZpbGxdIHJ1bGVzIGV4dHJhY3RlZFwiLCB7XHJcbiAgICAgICAgdG90YWw6IHQubGVuZ3RoLFxyXG4gICAgICAgIGVkdWNhdGlvbjogdC5maWx0ZXIoZSA9PiBlLnR5cGUgPT09IHUuRklFTERfVFlQRS5FRFVDQVRJT04pLmxlbmd0aCxcclxuICAgICAgICBlbXBsb3ltZW50OiB0LmZpbHRlcihlID0+IGUudHlwZSA9PT0gdS5GSUVMRF9UWVBFLkVNUExPWU1FTlQpLmxlbmd0aFxyXG4gICAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXModCksIGNvbnNvbGUuZGVidWcoXHJcbiAgICAgICAgXCJbY2FyZWVycy1wYWdlXVtmaWxsXSByZXN1bWUgdXBsb2FkIHN0YXJ0ZWRcIiksIGF3YWl0IHRoaXMuaGFuZGxlUmVzdW1lVXBsb2FkKCksIGNvbnNvbGVcclxuICAgICAgLmRlYnVnKFwiW2NhcmVlcnMtcGFnZV1bZmlsbF0gcmVzdW1lIHVwbG9hZCBjb21wbGV0ZWRcIiksIGNvbnNvbGUuZGVidWcoXHJcbiAgICAgICAgXCJbY2FyZWVycy1wYWdlXVtmaWxsXSBhbnN3ZXIgcmVxdWVzdCBzdGFydGVkXCIpO1xyXG4gICAgbGV0IHIgPSBhd2FpdCB0aGlzLmZldGNoRm9ybUFuc3dlcnModCwgZSk7XHJcbiAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgciA/IChjb25zb2xlLndhcm4oXCJbY2FyZWVycy1wYWdlXVtmaWxsXSBhbnN3ZXIgcmVxdWVzdCBzdG9wcGVkXCIsIHtcclxuICAgICAgcmVhc29uOiByXHJcbiAgICB9KSwgcikgOiAoY29uc29sZS5kZWJ1ZyhcIltjYXJlZXJzLXBhZ2VdW2ZpbGxdIGFuc3dlciByZXF1ZXN0IGNvbXBsZXRlZFwiLCB7XHJcbiAgICAgICAgcmVndWxhcjogT2JqZWN0LmtleXModGhpcy5hbnN3ZXIucmVndWxhciB8fCB7fSkubGVuZ3RoLFxyXG4gICAgICAgIGVkdWNhdGlvbjogdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uPy5sZW5ndGggfHwgMCxcclxuICAgICAgICBlbXBsb3ltZW50OiB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZT8ubGVuZ3RoIHx8IDBcclxuICAgICAgfSksIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHModCksIGNvbnNvbGUuZGVidWcoXHJcbiAgICAgICAgXCJbY2FyZWVycy1wYWdlXVtmaWxsXSByZWd1bGFyIGZpZWxkcyBjb21wbGV0ZWRcIiksIGF3YWl0IHRoaXNcclxuICAgIC5lbnN1cmVDb25zZW50Q2hlY2tib3hlcygpLCBhd2FpdCB0aGlzLmZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KHQpLCBjb25zb2xlLmRlYnVnKFxyXG4gICAgICAgIFwiW2NhcmVlcnMtcGFnZV1bZmlsbF0gc3RydWN0dXJlZCBzZWN0aW9ucyBjb21wbGV0ZWRcIiksIGF3YWl0IHRoaXNcclxuICAgICAgLmZpbGxDb3ZlckxldHRlckZpZWxkcygpLCBhd2FpdCB0aGlzLmV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyh0KSwgdGhpc1xyXG4gICAgICAuZmluYWxpemVGaWxsRm9ybSgpKVxyXG4gIH1cclxuICBhc3luYyBmaWxsRWR1Y2F0aW9uQW5kRW1wbG95bWVudChlKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMuYW5zd2VyLmVkdWNhdGlvbiB8fCBbXSxcclxuICAgICAgciA9ICExO1xyXG4gICAgYXdhaXQgdGhpcy5maWxsU2VxdWVudGlhbFNlY3Rpb25SZWNvcmRzKHtcclxuICAgICAgc2VjdGlvbk5hbWU6IFwiZWR1Y2F0aW9uXCIsXHJcbiAgICAgIHJlY29yZHM6IHQsXHJcbiAgICAgIGdldFNlY3Rpb25zOiBiLFxyXG4gICAgICBhZGRTZWN0aW9uOiBtLmFkZEVkdWNhdGlvblNlY3Rpb24sXHJcbiAgICAgIGdldFJ1bGVzOiBhc3luYyAoKSA9PiBhd2FpdCAoMCwgaC5nZXRFZHVjYXRpb25SdWxlcykoKSxcclxuICAgICAgZ2V0T3BlcmF0aW9uczogaS5nZXRFZHVjYXRpb25PcGVyYXRpb25zLFxyXG4gICAgICBhZnRlckZpbGxTZWN0aW9uOiBhc3luYyAoZSwgdCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZmlsbEVkdWNhdGlvbkVuZERhdGVBZnRlclN0YXJ0KGUsIHQpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU2tpcHBlZDogKCkgPT4ge1xyXG4gICAgICAgIHIgPSAhMFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxldCBuID0gdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UgfHwgW10sXHJcbiAgICAgIG8gPSAhMTtcclxuICAgIGF3YWl0IHRoaXMuZmlsbFNlcXVlbnRpYWxTZWN0aW9uUmVjb3Jkcyh7XHJcbiAgICAgICAgc2VjdGlvbk5hbWU6IFwiZXhwZXJpZW5jZVwiLFxyXG4gICAgICAgIHJlY29yZHM6IG4sXHJcbiAgICAgICAgZ2V0U2VjdGlvbnM6IHksXHJcbiAgICAgICAgYWRkU2VjdGlvbjogbS5hZGRFbXBsb3ltZW50U2VjdGlvbixcclxuICAgICAgICBnZXRSdWxlczogYXN5bmMgKCkgPT4gYXdhaXQgKDAsIGguZ2V0RXhwZXJpZW5jZVJ1bGVzKSgpLFxyXG4gICAgICAgIGdldE9wZXJhdGlvbnM6IGkuZ2V0RW1wbG95bWVudE9wZXJhdGlvbnMsXHJcbiAgICAgICAgYmVmb3JlRmlsbFNlY3Rpb246IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgICAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpc19jdXJyZW50X2VtcGxveWVyXCJdJyk7XHJcbiAgICAgICAgICB0Py5jaGVja2VkICYmICh0LmNsaWNrKCksIGF3YWl0ICgwLCBmLmRlbGF5KSgzMDApKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJGaWxsU2VjdGlvbjogYXN5bmMgKGUsIHQpID0+IHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMuZmlsbEV4cGVyaWVuY2VFbmREYXRlQWZ0ZXJTdGFydChlLCB0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Ta2lwcGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICBvID0gITBcclxuICAgICAgICB9XHJcbiAgICAgIH0pLCByID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIikgOiB0Lmxlbmd0aCA+IDAgJiYgdGhpc1xyXG4gICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpLCBvID8gdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRW1wbG95bWVudFwiKSA6IG4ubGVuZ3RoID4gMCAmJiB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlc3VtZVVwbG9hZCgpIHtcclxuICAgIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSA/IChhd2FpdCAoMCwgbS5yZW1vdmVSZXN1bWUpKCksIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKSkgOiB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCAoMCwgbS5yZW1vdmVSZXN1bWUpKCksIGF3YWl0ICgwLCBtLnVwbG9hZFJlc3VtZSkodGhpcy5yZXN1bWVJbmZvLCB0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgIC51cGRhdGVGaWxsZWRQcm9ncmVzcylcclxuICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBhc3luYyBydW5QcmVGaWxsRm9ybSgpIHtcclxuICAgIHRoaXMudGFza1F1ZXVlLmFkZChtLnByZUZpbGxGb3JtKSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gcC5BUFBMWV9TVUJNSVRfQlVUVE9OX1hQQVRIXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKC4uLmUpIHtcclxuICAgIHN1cGVyKC4uLmUpLCB0aGlzLmxhc3RGdWxsQXV0b2ZpbGxTbmFwc2hvdCA9IHt9LCB0aGlzLmxhc3RGdWxsU3VibWl0U25hcHNob3QgPSB7fSwgdGhpc1xyXG4gICAgICAuY2FyZWVyc1N1Ym1pdFRyYWNraW5nQWJvcnRDb250cm9sbGVyID0gbnVsbCwgdGhpcy5mb3JtYXRBbnN3ZXIgPSBlID0+ICgwLCBwLmZvcm1hdEFuc3dlcilcclxuICAgICAgKGUpXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZWVycy1wYWdlLmJlZDRlNjM3LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);