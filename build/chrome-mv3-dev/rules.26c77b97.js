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
})({"6C5yx":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\hrmdirect\\rules.js",
    "bundleId": "01d5c4a226c77b97",
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
var j = z(require("28420d98c240c4fe"));
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

},{"28420d98c240c4fe":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"c1bW0":[function(require,module,exports) {
/**
 * Parcel module id: 5Bfch
 * Resolved path: src/contents/sites/hrmdirect/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractRules", ()=>a), n.export(r, "extractEduOrEmpRules", ()=>d), n.export(r, "getHrmdirectCompositeSectionLabel", ()=>f), n.export(r, "resolveHrmdirectFieldType", ()=>p), n.export(r, "mergeHrmdirectCurrentPageSnapshot", ()=>S), n.export(r, "getHrmdirectCurrentPageForm", ()=>E), n.export(r, "getAdditionalFormSnapshotData", ()=>C), n.export(r, "getFormSnapshot", ()=>A), n.export(r, "serializeHrmdirectNormalSnapshotValue", ()=>T), n.export(r, "getHrmdirectCurrentPageSnapshot", ()=>F);
var o = e("~core/enums"), i = e("~core/xpath");
async function a() {
    let e1 = [], t = (0, i.getOrderedNodesSafe)("//div[@class='section-container' and not(ancestor::div[@class='section-container'])]");
    for (let r1 of t){
        let t = (0, i.getFirstOrderedNodeSafe)('.//a[@class="btn btn-block-xs btn-default add-row-button" and normalize-space(text())="Add Additional Row" and not(ancestor::div[contains(@style, "display: none")])]', r1);
        if (t) {
            let t;
            let n = r1.textContent?.toLowerCase() || "";
            if (n.includes("school") || n.includes("education") || n.includes("major") || n.includes("degree") ? t = o.FIELD_TYPE.EDUCATION : (n.includes("company") || n.includes("supervisor") || n.includes("reason for leaving")) && (t = o.FIELD_TYPE.EMPLOYMENT), t) {
                let n = await d(r1, t);
                e1.push(...n);
                continue;
            }
        }
        let n = (0, i.getOrderedNodesSafe)(".//div[contains(@class, 'form-field')]", r1);
        for (let t of n){
            let r1 = await m(t);
            r1 && e1.push(r1);
        }
    }
    if (0 === e1.length) {
        let t = (0, i.getFirstOrderedNodeSafe)("//form"), r1 = [];
        r1.push(...(0, i.getOrderedNodesSafe)(".//input | .//textarea | .//select", t));
        let n = new Map;
        for (let o of r1)if ("INPUT" === o.tagName) {
            let r1 = o;
            if ("text" === r1.type || "email" === r1.type || "tel" === r1.type || "number" === r1.type) {
                let n = await l(r1, t);
                n && e1.push(n);
            } else if ("radio" === r1.type) {
                let e1 = r1.name;
                n.has(e1) || n.set(e1, []), n.get(e1)?.push(r1);
            }
        } else if ("SELECT" === o.tagName) {
            let r1 = await s(o, t);
            r1 && e1.push(r1);
        } else if ("TEXTAREA" === o.tagName) {
            let r1 = await u(o, t);
            r1 && e1.push(r1);
        }
        for (let [r1, o] of n)if (o.length > 0) {
            let r1 = await c(o, t);
            r1 && e1.push(r1);
        }
    }
    return e1;
}
async function l(e1, t) {
    let r1 = g(e1)?.textContent?.trim() || "";
    r1.endsWith("*") && (r1 = r1.slice(0, -1).trim());
    let n = "This field is required." === e1.getAttribute("tooltiptext");
    return {
        label: r1,
        type: o.FIELD_TYPE.TEXT,
        required: n,
        $input: e1
    };
}
async function s(e1, t) {
    let r1 = e1.closest(".form-field")?.querySelector('[class="control-label field-title"]');
    if (!r1) {
        let t = e1.parentElement;
        t && (r1 = t.previousElementSibling);
    }
    if (!r1) return null;
    let n = r1.textContent?.trim() || "";
    n.endsWith("*") && (n = n.slice(0, -1).trim());
    let i = r1.textContent?.includes("*") || !1, a = await v(e1);
    return {
        label: n,
        type: o.FIELD_TYPE.SELECT,
        required: i,
        options: a,
        $input: e1
    };
}
async function u(e1, t) {
    let r1 = "", n = e1.parentElement;
    if (n) {
        let e1 = n.previousElementSibling;
        e1 && (r1 = e1.textContent?.trim() || "");
    }
    if (!r1) return null;
    r1.endsWith("*") && (r1 = r1.slice(0, -1).trim());
    let i = "This field is required." === e1.getAttribute("tooltiptext");
    return {
        label: r1,
        type: o.FIELD_TYPE.TEXT,
        required: i,
        $input: e1
    };
}
async function c(e1, t) {
    if (0 === e1.length) return null;
    let r1 = e1[0], n = "", i = r1.closest("div[class*='radio-group']");
    if (i) {
        let e1 = i.querySelector("label:not(.btn)");
        e1 && (n = e1.textContent?.trim() || "");
    }
    if (!n) return null;
    n = n.replace(/\*$/, "").trim();
    let a = e1.some((e1)=>e1.required), l = [];
    for (let t of e1){
        let e1 = t.closest("label");
        if (e1) {
            let t = e1.querySelector("span.l10n"), r1 = t?.textContent?.trim();
            r1 && l.push(r1);
        }
    }
    return {
        label: n,
        type: o.FIELD_TYPE.RADIOGROUP,
        required: a,
        options: [
            ...new Set(l)
        ],
        $input: e1[0]
    };
}
async function d(e1, t) {
    let r1 = [], n = (0, i.getOrderedNodesSafe)(".//div[@class='section-repeatable']", e1);
    for (let e1 of n){
        let n = [], o = (0, i.getOrderedNodesSafe)(".//div[contains(@class, 'form-field')]", e1);
        for (let e1 of o){
            let t = await m(e1);
            t && n.push(t);
        }
        if (n.length > 0) {
            let o = {
                label: f(t),
                type: t,
                required: !0,
                options: n.map((e1)=>{
                    let t = {
                        label: e1.label,
                        type: e1.type
                    }, r1 = e1;
                    return r1.options && Array.isArray(r1.options) && r1.options.length > 0 ? {
                        ...t,
                        options: r1.options
                    } : t;
                }),
                $input: e1,
                children: n
            };
            r1.push(o);
        }
    }
    r1.length > 0 && console.info("[HRMDirect Rules] extracted structured section", {
        type: t,
        progressLabel: f(t),
        repeatableCount: r1.length
    });
    let o = (0, i.getOrderedNodesSafe)(".//div[contains(@class, 'form-field')]", e1), a = o.filter((e1)=>!n.some((t)=>t.contains(e1)));
    for (let e1 of a){
        let t = await m(e1);
        t && r1.push(t);
    }
    return r1;
}
function f(e1) {
    return e1 === o.FIELD_TYPE.EMPLOYMENT ? "Employment" : "Education";
}
function p(e1, t, r1 = !1) {
    let n = String(e1.className ?? "");
    return n.includes("resume-upload") ? null : n.includes("radio") ? o.FIELD_TYPE.RADIOGROUP : n.includes("checkbox") ? o.FIELD_TYPE.CHECKBOX : r1 ? o.FIELD_TYPE.DATE : n.includes("dropdown") && "SELECT" === t.tagName ? o.FIELD_TYPE.SELECT : o.FIELD_TYPE.TEXT;
}
async function m(e1) {
    let t = e1.querySelector("input, select, textarea");
    if (!t) return null;
    let r1 = e1.querySelector(".control-label.field-title, label.control-label");
    if (!r1 && t.id) {
        let n = e1.closest("form.section-form") || e1;
        r1 = n.querySelector(`label[for="${t.id}"]`);
    }
    if (r1 || (r1 = g(t)), !r1) return null;
    let n = r1.textContent?.trim() || "";
    n = n.replace(/\*$/, "").trim();
    let a = r1.textContent?.includes("*") || !1, l = e1.className, s = !!(0, i.getFirstOrderedNode)('.//input[contains(@class, "date-input")]', e1), u = p(e1, t, s);
    if (!u) return null;
    l.includes("dropdown") && u === o.FIELD_TYPE.TEXT && console.info("[HRMDirect Rules] dynamic dropdown resolved as text", {
        label: n,
        tagName: t.tagName,
        connected: t.isConnected
    });
    let c = [];
    if (u === o.FIELD_TYPE.SELECT) {
        if ("SELECT" === t.tagName) return {
            label: n,
            type: u,
            required: a,
            options: c = await v(t),
            $input: t
        };
    } else if (u === o.FIELD_TYPE.RADIOGROUP || u === o.FIELD_TYPE.CHECKBOX) {
        let r1 = y(e1);
        return {
            label: n,
            type: u,
            required: a,
            options: c = h(r1),
            $input: t
        };
    }
    return {
        label: n,
        type: u,
        required: a,
        $input: t
    };
}
function h(e1) {
    let t = [];
    for (let r1 of e1){
        let e1 = b(r1), n = e1?.textContent?.trim() || r1.value || "";
        n && t.push(n);
    }
    return t;
}
function g(e1, t = e1.closest("form.section-form") || e1) {
    let r1 = e1.id;
    if (r1) {
        let e1 = t.querySelector(`label[for="${r1}"]`);
        if (e1) return e1;
    }
    let n = e1.closest("div, fieldset, form");
    if (n) {
        let e1 = n.querySelector("label");
        if (e1) return e1;
        let t = n.previousElementSibling;
        if ("LABEL" === t.tagName) return t;
    }
    let o = e1.previousElementSibling;
    for(; o;){
        if ("LABEL" === o.tagName) return o;
        o = o.previousElementSibling;
    }
    return null;
}
function b(e1) {
    let t = e1.parentElement;
    return "LABEL" === t.tagName ? t : null;
}
function y(e1) {
    let t = (0, i.getOrderedNodesSafe)('.//input[@type="radio"] | .//input[@type="checkbox"]', e1);
    return t;
}
async function v(e1) {
    let t = [];
    return "SELECT" === e1.tagName && Array.from(e1.options).forEach((e1)=>{
        e1.value && "" !== e1.value && t.push(e1.textContent?.trim() || e1.value);
    }), t;
}
function w(e1) {
    let t = e1.textContent?.toLowerCase() || "";
    return t.includes("school") || t.includes("edu") || t.includes("major") || t.includes("degree") ? o.FIELD_TYPE.EDUCATION : t.includes("company") || t.includes("supervisor") || t.includes("reason for leaving") ? o.FIELD_TYPE.EMPLOYMENT : o.FIELD_TYPE.EDUCATION;
}
function S(e1, t) {
    return {
        ...e1,
        ...t
    };
}
_c = S;
function E(e1 = document) {
    return e1.querySelector("form.section-form");
}
_c1 = E;
function x() {
    let e1 = E();
    return e1 ? (0, i.getOrderedNodesSafe)(".//div[@class='section-container' and not(ancestor::div[@class='section-container'])]", e1) : [];
}
function C() {
    let e1 = {}, t = x();
    for (let r1 of t){
        let t = (0, i.getFirstOrderedNodeSafe)('.//a[@class="btn btn-block-xs btn-default add-row-button" and normalize-space(text())="Add Additional Row" and not(ancestor::div[contains(@style, "display: none")])]', r1);
        if (!t) continue;
        let n = I(r1), a = w(r1) === o.FIELD_TYPE.EDUCATION ? "education" : "employment";
        e1[a] || (e1[a] = []), e1[a].push(...n);
    }
    return e1;
}
_c2 = C;
function A() {
    let e1 = {}, t = x();
    if (0 === t.length) {
        let e1 = document.querySelector("form#personal-info-form");
        if (e1) return k(e1);
    }
    for (let r1 of t){
        let t = (0, i.getFirstOrderedNodeSafe)('.//a[@class="btn btn-block-xs btn-default add-row-button" and normalize-space(text())="Add Additional Row" and not(ancestor::div[contains(@style, "display: none")])]', r1);
        if (t) continue;
        let n = (0, i.getOrderedNodesSafe)(".//div[contains(@class, 'form-field')]", r1);
        for (let t of n){
            let r1 = j(t);
            r1 && (e1[r1.label] = T(r1.value));
        }
    }
    return e1;
}
_c3 = A;
function k(e1) {
    let t = {}, r1 = Array.from(e1.querySelectorAll(".form-group"));
    for (let e1 of r1){
        let r1 = e1.querySelector(".control-label") || e1.querySelector(".radio-label"), n = e1.querySelector("input, select, textarea");
        if (!r1 || !n) continue;
        let o = (r1.textContent || "").trim().replace(/\s*\*\s*$/, "");
        if (!o) continue;
        let i = "";
        if ("INPUT" === n.tagName && "radio" === n.type) {
            let t = e1.querySelector('input[type="radio"]:checked');
            i = t && (t.closest("label")?.textContent?.trim() || t.value) || "";
        } else if ("SELECT" === n.tagName) {
            let e1 = n;
            i = e1.options[e1.selectedIndex]?.textContent?.trim() || "";
        } else i = n.value || "";
        t[o] = i;
    }
    return t;
}
function T(e1) {
    return Array.isArray(e1) ? e1.join(", ") : e1;
}
_c4 = T;
function F() {
    return S(A(), C());
}
_c5 = F;
function I(e1) {
    let t = [], r1 = (0, i.getOrderedNodesSafe)(".//div[@class='section-repeatable']", e1);
    for (let e1 of r1){
        let r1 = {}, n = (0, i.getOrderedNodesSafe)(".//div[contains(@class, 'form-field')]", e1);
        for (let e1 of n){
            let t = j(e1);
            t && (r1[t.label] = t.value);
        }
        t.push(r1);
    }
    return t;
}
_c6 = I;
function j(e1) {
    let t = e1.querySelector("input, select, textarea");
    if (!t) return null;
    let r1 = e1.closest("form.section-form") || e1, n = e1.querySelector('[class="control-label field-title"]');
    if (n || (n = g(t, r1)), !n) return null;
    let o = n.textContent?.trim() || "";
    o.endsWith("*") && (o = o.slice(0, -1).trim());
    let i = "";
    if ("INPUT" === t.tagName) {
        let e1 = t;
        if ("checkbox" === e1.type) {
            let t = [], n = e1.name, o = n ? Array.from(r1.querySelectorAll(`input[type="checkbox"][name="${n}"]`)) : [
                e1
            ];
            for (let e1 of o)if (e1.checked) {
                let n = "", o = r1.querySelector(`label[for="${e1.id}"]`);
                (n = o ? o.textContent?.trim() || "" : e1.parentElement?.tagName === "LABEL" ? e1.parentElement.textContent?.trim() || "" : e1.value || "") && t.push(n);
            }
            i = t;
        } else if ("radio" === e1.type) {
            let t = r1.querySelector(`input[type="radio"][name="${e1.name}"]:checked`);
            if (t) {
                let e1 = b(t);
                i = e1 ? e1.textContent?.trim() || "" : t.value || "";
            } else i = "";
        } else i = e1.value || "";
    } else if ("SELECT" === t.tagName) {
        let e1 = t;
        i = e1.options[e1.selectedIndex]?.textContent?.trim() || "";
    } else if ("TEXTAREA" === t.tagName) {
        let e1 = t;
        i = e1.value || "";
    }
    return {
        label: o,
        value: i
    };
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");

},{}]},["6C5yx","c1bW0"], "c1bW0", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7Ozs7Ozs7Q0FPQyxHQUVELElBQUksSUFBRSxFQUFFO0FBQWtELEVBQUUsa0JBQWtCLElBQUcsRUFBRSxPQUFPLEdBQUUsZ0JBQWUsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLHdCQUF1QixJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUscUNBQW9DLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSw2QkFBNEIsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLHFDQUFvQyxJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsK0JBQThCLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSxpQ0FBZ0MsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLG1CQUFrQixJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUseUNBQXdDLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSxtQ0FBa0MsSUFBSTtBQUFHLElBQUksSUFBRSxFQUFFLGdCQUFlLElBQUUsRUFBRTtBQUFlLGVBQWU7SUFBSSxJQUFJLEtBQUUsRUFBRSxFQUFDLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxtQkFBa0IsRUFBRztJQUF3RixLQUFJLElBQUksTUFBSyxFQUFFO1FBQUMsSUFBSSxJQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsdUJBQXNCLEVBQUcseUtBQXdLO1FBQUcsSUFBRyxHQUFFO1lBQUMsSUFBSTtZQUFFLElBQUksSUFBRSxHQUFFLGFBQWEsaUJBQWU7WUFBRyxJQUFHLEVBQUUsU0FBUyxhQUFXLEVBQUUsU0FBUyxnQkFBYyxFQUFFLFNBQVMsWUFBVSxFQUFFLFNBQVMsWUFBVSxJQUFFLEVBQUUsV0FBVyxZQUFVLEFBQUMsQ0FBQSxFQUFFLFNBQVMsY0FBWSxFQUFFLFNBQVMsaUJBQWUsRUFBRSxTQUFTLHFCQUFvQixLQUFLLENBQUEsSUFBRSxFQUFFLFdBQVcsVUFBUyxHQUFHLEdBQUU7Z0JBQUMsSUFBSSxJQUFFLE1BQU0sRUFBRSxJQUFFO2dCQUFHLEdBQUUsUUFBUTtnQkFBRztZQUFRO1FBQUM7UUFBQyxJQUFJLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxtQkFBa0IsRUFBRywwQ0FBeUM7UUFBRyxLQUFJLElBQUksS0FBSyxFQUFFO1lBQUMsSUFBSSxLQUFFLE1BQU0sRUFBRTtZQUFHLE1BQUcsR0FBRSxLQUFLO1FBQUU7SUFBQztJQUFDLElBQUcsTUFBSSxHQUFFLFFBQU87UUFBQyxJQUFJLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSx1QkFBc0IsRUFBRyxXQUFVLEtBQUUsRUFBRTtRQUFDLEdBQUUsUUFBUSxBQUFDLENBQUEsR0FBRSxFQUFFLG1CQUFrQixFQUFHLHNDQUFxQztRQUFJLElBQUksSUFBRSxJQUFJO1FBQUksS0FBSSxJQUFJLEtBQUssR0FBRSxJQUFHLFlBQVUsRUFBRSxTQUFRO1lBQUMsSUFBSSxLQUFFO1lBQUUsSUFBRyxXQUFTLEdBQUUsUUFBTSxZQUFVLEdBQUUsUUFBTSxVQUFRLEdBQUUsUUFBTSxhQUFXLEdBQUUsTUFBSztnQkFBQyxJQUFJLElBQUUsTUFBTSxFQUFFLElBQUU7Z0JBQUcsS0FBRyxHQUFFLEtBQUs7WUFBRSxPQUFNLElBQUcsWUFBVSxHQUFFLE1BQUs7Z0JBQUMsSUFBSSxLQUFFLEdBQUU7Z0JBQUssRUFBRSxJQUFJLE9BQUksRUFBRSxJQUFJLElBQUUsRUFBRSxHQUFFLEVBQUUsSUFBSSxLQUFJLEtBQUs7WUFBRTtRQUFDLE9BQU0sSUFBRyxhQUFXLEVBQUUsU0FBUTtZQUFDLElBQUksS0FBRSxNQUFNLEVBQUUsR0FBRTtZQUFHLE1BQUcsR0FBRSxLQUFLO1FBQUUsT0FBTSxJQUFHLGVBQWEsRUFBRSxTQUFRO1lBQUMsSUFBSSxLQUFFLE1BQU0sRUFBRSxHQUFFO1lBQUcsTUFBRyxHQUFFLEtBQUs7UUFBRTtRQUFDLEtBQUksSUFBRyxDQUFDLElBQUUsRUFBRSxJQUFHLEVBQUUsSUFBRyxFQUFFLFNBQU8sR0FBRTtZQUFDLElBQUksS0FBRSxNQUFNLEVBQUUsR0FBRTtZQUFHLE1BQUcsR0FBRSxLQUFLO1FBQUU7SUFBQztJQUFDLE9BQU87QUFBQztBQUFDLGVBQWUsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxFQUFFLEtBQUksYUFBYSxVQUFRO0lBQUcsR0FBRSxTQUFTLFFBQU8sQ0FBQSxLQUFFLEdBQUUsTUFBTSxHQUFFLElBQUksTUFBSztJQUFHLElBQUksSUFBRSw4QkFBNEIsR0FBRSxhQUFhO0lBQWUsT0FBTTtRQUFDLE9BQU07UUFBRSxNQUFLLEVBQUUsV0FBVztRQUFLLFVBQVM7UUFBRSxRQUFPO0lBQUM7QUFBQztBQUFDLGVBQWUsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxHQUFFLFFBQVEsZ0JBQWdCLGNBQWM7SUFBdUMsSUFBRyxDQUFDLElBQUU7UUFBQyxJQUFJLElBQUUsR0FBRTtRQUFjLEtBQUksQ0FBQSxLQUFFLEVBQUUsc0JBQXFCO0lBQUU7SUFBQyxJQUFHLENBQUMsSUFBRSxPQUFPO0lBQUssSUFBSSxJQUFFLEdBQUUsYUFBYSxVQUFRO0lBQUcsRUFBRSxTQUFTLFFBQU8sQ0FBQSxJQUFFLEVBQUUsTUFBTSxHQUFFLElBQUksTUFBSztJQUFHLElBQUksSUFBRSxHQUFFLGFBQWEsU0FBUyxRQUFNLENBQUMsR0FBRSxJQUFFLE1BQU0sRUFBRTtJQUFHLE9BQU07UUFBQyxPQUFNO1FBQUUsTUFBSyxFQUFFLFdBQVc7UUFBTyxVQUFTO1FBQUUsU0FBUTtRQUFFLFFBQU87SUFBQztBQUFDO0FBQUMsZUFBZSxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxLQUFFLElBQUcsSUFBRSxHQUFFO0lBQWMsSUFBRyxHQUFFO1FBQUMsSUFBSSxLQUFFLEVBQUU7UUFBdUIsTUFBSSxDQUFBLEtBQUUsR0FBRSxhQUFhLFVBQVEsRUFBQztJQUFFO0lBQUMsSUFBRyxDQUFDLElBQUUsT0FBTztJQUFLLEdBQUUsU0FBUyxRQUFPLENBQUEsS0FBRSxHQUFFLE1BQU0sR0FBRSxJQUFJLE1BQUs7SUFBRyxJQUFJLElBQUUsOEJBQTRCLEdBQUUsYUFBYTtJQUFlLE9BQU07UUFBQyxPQUFNO1FBQUUsTUFBSyxFQUFFLFdBQVc7UUFBSyxVQUFTO1FBQUUsUUFBTztJQUFDO0FBQUM7QUFBQyxlQUFlLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFHLE1BQUksR0FBRSxRQUFPLE9BQU87SUFBSyxJQUFJLEtBQUUsRUFBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLElBQUcsSUFBRSxHQUFFLFFBQVE7SUFBNkIsSUFBRyxHQUFFO1FBQUMsSUFBSSxLQUFFLEVBQUUsY0FBYztRQUFtQixNQUFJLENBQUEsSUFBRSxHQUFFLGFBQWEsVUFBUSxFQUFDO0lBQUU7SUFBQyxJQUFHLENBQUMsR0FBRSxPQUFPO0lBQUssSUFBRSxFQUFFLFFBQVEsT0FBTSxJQUFJO0lBQU8sSUFBSSxJQUFFLEdBQUUsS0FBSyxDQUFBLEtBQUcsR0FBRSxXQUFVLElBQUUsRUFBRTtJQUFDLEtBQUksSUFBSSxLQUFLLEdBQUU7UUFBQyxJQUFJLEtBQUUsRUFBRSxRQUFRO1FBQVMsSUFBRyxJQUFFO1lBQUMsSUFBSSxJQUFFLEdBQUUsY0FBYyxjQUFhLEtBQUUsR0FBRyxhQUFhO1lBQU8sTUFBRyxFQUFFLEtBQUs7UUFBRTtJQUFDO0lBQUMsT0FBTTtRQUFDLE9BQU07UUFBRSxNQUFLLEVBQUUsV0FBVztRQUFXLFVBQVM7UUFBRSxTQUFRO2VBQUksSUFBSSxJQUFJO1NBQUc7UUFBQyxRQUFPLEVBQUMsQ0FBQyxFQUFFO0lBQUE7QUFBQztBQUFDLGVBQWUsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxFQUFFLEVBQUMsSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLG1CQUFrQixFQUFHLHVDQUFzQztJQUFHLEtBQUksSUFBSSxNQUFLLEVBQUU7UUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxtQkFBa0IsRUFBRywwQ0FBeUM7UUFBRyxLQUFJLElBQUksTUFBSyxFQUFFO1lBQUMsSUFBSSxJQUFFLE1BQU0sRUFBRTtZQUFHLEtBQUcsRUFBRSxLQUFLO1FBQUU7UUFBQyxJQUFHLEVBQUUsU0FBTyxHQUFFO1lBQUMsSUFBSSxJQUFFO2dCQUFDLE9BQU0sRUFBRTtnQkFBRyxNQUFLO2dCQUFFLFVBQVMsQ0FBQztnQkFBRSxTQUFRLEVBQUUsSUFBSSxDQUFBO29CQUFJLElBQUksSUFBRTt3QkFBQyxPQUFNLEdBQUU7d0JBQU0sTUFBSyxHQUFFO29CQUFJLEdBQUUsS0FBRTtvQkFBRSxPQUFPLEdBQUUsV0FBUyxNQUFNLFFBQVEsR0FBRSxZQUFVLEdBQUUsUUFBUSxTQUFPLElBQUU7d0JBQUMsR0FBRyxDQUFDO3dCQUFDLFNBQVEsR0FBRTtvQkFBTyxJQUFFO2dCQUFDO2dCQUFHLFFBQU87Z0JBQUUsVUFBUztZQUFDO1lBQUUsR0FBRSxLQUFLO1FBQUU7SUFBQztJQUFDLEdBQUUsU0FBTyxLQUFHLFFBQVEsS0FBSyxrREFBaUQ7UUFBQyxNQUFLO1FBQUUsZUFBYyxFQUFFO1FBQUcsaUJBQWdCLEdBQUU7SUFBTTtJQUFHLElBQUksSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLG1CQUFrQixFQUFHLDBDQUF5QyxLQUFHLElBQUUsRUFBRSxPQUFPLENBQUEsS0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxTQUFTO0lBQUssS0FBSSxJQUFJLE1BQUssRUFBRTtRQUFDLElBQUksSUFBRSxNQUFNLEVBQUU7UUFBRyxLQUFHLEdBQUUsS0FBSztJQUFFO0lBQUMsT0FBTztBQUFDO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFPLE9BQUksRUFBRSxXQUFXLGFBQVcsZUFBYTtBQUFXO0FBQUMsU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDLEVBQUMsS0FBRSxDQUFDLENBQUM7SUFBRSxJQUFJLElBQUUsT0FBTyxHQUFFLGFBQVc7SUFBSSxPQUFPLEVBQUUsU0FBUyxtQkFBaUIsT0FBSyxFQUFFLFNBQVMsV0FBUyxFQUFFLFdBQVcsYUFBVyxFQUFFLFNBQVMsY0FBWSxFQUFFLFdBQVcsV0FBUyxLQUFFLEVBQUUsV0FBVyxPQUFLLEVBQUUsU0FBUyxlQUFhLGFBQVcsRUFBRSxVQUFRLEVBQUUsV0FBVyxTQUFPLEVBQUUsV0FBVztBQUFJO0FBQUMsZUFBZSxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxjQUFjO0lBQTJCLElBQUcsQ0FBQyxHQUFFLE9BQU87SUFBSyxJQUFJLEtBQUUsR0FBRSxjQUFjO0lBQW1ELElBQUcsQ0FBQyxNQUFHLEVBQUUsSUFBRztRQUFDLElBQUksSUFBRSxHQUFFLFFBQVEsd0JBQXNCO1FBQUUsS0FBRSxFQUFFLGNBQWMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUFDO0lBQUMsSUFBRyxNQUFJLENBQUEsS0FBRSxFQUFFLEVBQUMsR0FBRyxDQUFDLElBQUUsT0FBTztJQUFLLElBQUksSUFBRSxHQUFFLGFBQWEsVUFBUTtJQUFHLElBQUUsRUFBRSxRQUFRLE9BQU0sSUFBSTtJQUFPLElBQUksSUFBRSxHQUFFLGFBQWEsU0FBUyxRQUFNLENBQUMsR0FBRSxJQUFFLEdBQUUsV0FBVSxJQUFFLENBQUMsQ0FBQyxBQUFDLENBQUEsR0FBRSxFQUFFLG1CQUFrQixFQUFHLDRDQUEyQyxLQUFHLElBQUUsRUFBRSxJQUFFLEdBQUU7SUFBRyxJQUFHLENBQUMsR0FBRSxPQUFPO0lBQUssRUFBRSxTQUFTLGVBQWEsTUFBSSxFQUFFLFdBQVcsUUFBTSxRQUFRLEtBQUssdURBQXNEO1FBQUMsT0FBTTtRQUFFLFNBQVEsRUFBRTtRQUFRLFdBQVUsRUFBRTtJQUFXO0lBQUcsSUFBSSxJQUFFLEVBQUU7SUFBQyxJQUFHLE1BQUksRUFBRSxXQUFXLFFBQU87UUFBQyxJQUFHLGFBQVcsRUFBRSxTQUFRLE9BQU07WUFBQyxPQUFNO1lBQUUsTUFBSztZQUFFLFVBQVM7WUFBRSxTQUFRLElBQUUsTUFBTSxFQUFFO1lBQUcsUUFBTztRQUFDO0lBQUMsT0FBTSxJQUFHLE1BQUksRUFBRSxXQUFXLGNBQVksTUFBSSxFQUFFLFdBQVcsVUFBUztRQUFDLElBQUksS0FBRSxFQUFFO1FBQUcsT0FBTTtZQUFDLE9BQU07WUFBRSxNQUFLO1lBQUUsVUFBUztZQUFFLFNBQVEsSUFBRSxFQUFFO1lBQUcsUUFBTztRQUFDO0lBQUM7SUFBQyxPQUFNO1FBQUMsT0FBTTtRQUFFLE1BQUs7UUFBRSxVQUFTO1FBQUUsUUFBTztJQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQUMsS0FBSSxJQUFJLE1BQUssR0FBRTtRQUFDLElBQUksS0FBRSxFQUFFLEtBQUcsSUFBRSxJQUFHLGFBQWEsVUFBUSxHQUFFLFNBQU87UUFBRyxLQUFHLEVBQUUsS0FBSztJQUFFO0lBQUMsT0FBTztBQUFDO0FBQUMsU0FBUyxFQUFFLEVBQUMsRUFBQyxJQUFFLEdBQUUsUUFBUSx3QkFBc0IsRUFBQztJQUFFLElBQUksS0FBRSxHQUFFO0lBQUcsSUFBRyxJQUFFO1FBQUMsSUFBSSxLQUFFLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxHQUFFLEVBQUUsQ0FBQztRQUFFLElBQUcsSUFBRSxPQUFPO0lBQUM7SUFBQyxJQUFJLElBQUUsR0FBRSxRQUFRO0lBQXVCLElBQUcsR0FBRTtRQUFDLElBQUksS0FBRSxFQUFFLGNBQWM7UUFBUyxJQUFHLElBQUUsT0FBTztRQUFFLElBQUksSUFBRSxFQUFFO1FBQXVCLElBQUcsWUFBVSxFQUFFLFNBQVEsT0FBTztJQUFDO0lBQUMsSUFBSSxJQUFFLEdBQUU7SUFBdUIsTUFBSyxHQUFHO1FBQUMsSUFBRyxZQUFVLEVBQUUsU0FBUSxPQUFPO1FBQUUsSUFBRSxFQUFFO0lBQXNCO0lBQUMsT0FBTztBQUFJO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRTtJQUFjLE9BQU0sWUFBVSxFQUFFLFVBQVEsSUFBRTtBQUFJO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxtQkFBa0IsRUFBRyx3REFBdUQ7SUFBRyxPQUFPO0FBQUM7QUFBQyxlQUFlLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQUMsT0FBTSxhQUFXLEdBQUUsV0FBUyxNQUFNLEtBQUssR0FBRSxTQUFTLFFBQVEsQ0FBQTtRQUFJLEdBQUUsU0FBTyxPQUFLLEdBQUUsU0FBTyxFQUFFLEtBQUssR0FBRSxhQUFhLFVBQVEsR0FBRTtJQUFNLElBQUc7QUFBQztBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUUsYUFBYSxpQkFBZTtJQUFHLE9BQU8sRUFBRSxTQUFTLGFBQVcsRUFBRSxTQUFTLFVBQVEsRUFBRSxTQUFTLFlBQVUsRUFBRSxTQUFTLFlBQVUsRUFBRSxXQUFXLFlBQVUsRUFBRSxTQUFTLGNBQVksRUFBRSxTQUFTLGlCQUFlLEVBQUUsU0FBUyx3QkFBc0IsRUFBRSxXQUFXLGFBQVcsRUFBRSxXQUFXO0FBQVM7QUFBQyxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxPQUFNO1FBQUMsR0FBRyxFQUFDO1FBQUMsR0FBRyxDQUFDO0lBQUE7QUFBQztLQUF4QjtBQUF5QixTQUFTLEVBQUUsS0FBRSxRQUFRO0lBQUUsT0FBTyxHQUFFLGNBQWM7QUFBb0I7TUFBekQ7QUFBMEQsU0FBUztJQUFJLElBQUksS0FBRTtJQUFJLE9BQU8sS0FBRSxBQUFDLENBQUEsR0FBRSxFQUFFLG1CQUFrQixFQUFHLHlGQUF3RixNQUFHLEVBQUU7QUFBQTtBQUFDLFNBQVM7SUFBSSxJQUFJLEtBQUUsQ0FBQyxHQUFFLElBQUU7SUFBSSxLQUFJLElBQUksTUFBSyxFQUFFO1FBQUMsSUFBSSxJQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsdUJBQXNCLEVBQUcseUtBQXdLO1FBQUcsSUFBRyxDQUFDLEdBQUU7UUFBUyxJQUFJLElBQUUsRUFBRSxLQUFHLElBQUUsRUFBRSxRQUFLLEVBQUUsV0FBVyxZQUFVLGNBQVk7UUFBYSxFQUFDLENBQUMsRUFBRSxJQUFHLENBQUEsRUFBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLEFBQUQsR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLFFBQVE7SUFBRTtJQUFDLE9BQU87QUFBQztNQUE3VztBQUE4VyxTQUFTO0lBQUksSUFBSSxLQUFFLENBQUMsR0FBRSxJQUFFO0lBQUksSUFBRyxNQUFJLEVBQUUsUUFBTztRQUFDLElBQUksS0FBRSxTQUFTLGNBQWM7UUFBMkIsSUFBRyxJQUFFLE9BQU8sRUFBRTtJQUFFO0lBQUMsS0FBSSxJQUFJLE1BQUssRUFBRTtRQUFDLElBQUksSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLHVCQUFzQixFQUFHLHlLQUF3SztRQUFHLElBQUcsR0FBRTtRQUFTLElBQUksSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLG1CQUFrQixFQUFHLDBDQUF5QztRQUFHLEtBQUksSUFBSSxLQUFLLEVBQUU7WUFBQyxJQUFJLEtBQUUsRUFBRTtZQUFHLE1BQUksQ0FBQSxFQUFDLENBQUMsR0FBRSxNQUFNLEdBQUMsRUFBRSxHQUFFLE1BQUs7UUFBRTtJQUFDO0lBQUMsT0FBTztBQUFDO01BQXJlO0FBQXNlLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLENBQUMsR0FBRSxLQUFFLE1BQU0sS0FBSyxHQUFFLGlCQUFpQjtJQUFnQixLQUFJLElBQUksTUFBSyxHQUFFO1FBQUMsSUFBSSxLQUFFLEdBQUUsY0FBYyxxQkFBbUIsR0FBRSxjQUFjLGlCQUFnQixJQUFFLEdBQUUsY0FBYztRQUEyQixJQUFHLENBQUMsTUFBRyxDQUFDLEdBQUU7UUFBUyxJQUFJLElBQUUsQUFBQyxDQUFBLEdBQUUsZUFBYSxFQUFDLEVBQUcsT0FBTyxRQUFRLGFBQVk7UUFBSSxJQUFHLENBQUMsR0FBRTtRQUFTLElBQUksSUFBRTtRQUFHLElBQUcsWUFBVSxFQUFFLFdBQVMsWUFBVSxFQUFFLE1BQUs7WUFBQyxJQUFJLElBQUUsR0FBRSxjQUFjO1lBQStCLElBQUUsS0FBSSxDQUFBLEVBQUUsUUFBUSxVQUFVLGFBQWEsVUFBUSxFQUFFLEtBQUksS0FBSTtRQUFFLE9BQU0sSUFBRyxhQUFXLEVBQUUsU0FBUTtZQUFDLElBQUksS0FBRTtZQUFFLElBQUUsR0FBRSxPQUFPLENBQUMsR0FBRSxjQUFjLEVBQUUsYUFBYSxVQUFRO1FBQUUsT0FBTSxJQUFFLEVBQUUsU0FBTztRQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUM7SUFBQztJQUFDLE9BQU87QUFBQztBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxNQUFNLFFBQVEsTUFBRyxHQUFFLEtBQUssUUFBTTtBQUFDO01BQTNDO0FBQTRDLFNBQVM7SUFBSSxPQUFPLEVBQUUsS0FBSTtBQUFJO01BQXJCO0FBQXNCLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsRUFBQyxLQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsbUJBQWtCLEVBQUcsdUNBQXNDO0lBQUcsS0FBSSxJQUFJLE1BQUssR0FBRTtRQUFDLElBQUksS0FBRSxDQUFDLEdBQUUsSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLG1CQUFrQixFQUFHLDBDQUF5QztRQUFHLEtBQUksSUFBSSxNQUFLLEVBQUU7WUFBQyxJQUFJLElBQUUsRUFBRTtZQUFHLEtBQUksQ0FBQSxFQUFDLENBQUMsRUFBRSxNQUFNLEdBQUMsRUFBRSxLQUFJO1FBQUU7UUFBQyxFQUFFLEtBQUs7SUFBRTtJQUFDLE9BQU87QUFBQztNQUF6UDtBQUEwUCxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxHQUFFLGNBQWM7SUFBMkIsSUFBRyxDQUFDLEdBQUUsT0FBTztJQUFLLElBQUksS0FBRSxHQUFFLFFBQVEsd0JBQXNCLElBQUUsSUFBRSxHQUFFLGNBQWM7SUFBdUMsSUFBRyxLQUFJLENBQUEsSUFBRSxFQUFFLEdBQUUsR0FBQyxHQUFHLENBQUMsR0FBRSxPQUFPO0lBQUssSUFBSSxJQUFFLEVBQUUsYUFBYSxVQUFRO0lBQUcsRUFBRSxTQUFTLFFBQU8sQ0FBQSxJQUFFLEVBQUUsTUFBTSxHQUFFLElBQUksTUFBSztJQUFHLElBQUksSUFBRTtJQUFHLElBQUcsWUFBVSxFQUFFLFNBQVE7UUFBQyxJQUFJLEtBQUU7UUFBRSxJQUFHLGVBQWEsR0FBRSxNQUFLO1lBQUMsSUFBSSxJQUFFLEVBQUUsRUFBQyxJQUFFLEdBQUUsTUFBSyxJQUFFLElBQUUsTUFBTSxLQUFLLEdBQUUsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBRztnQkFBQzthQUFFO1lBQUMsS0FBSSxJQUFJLE1BQUssRUFBRSxJQUFHLEdBQUUsU0FBUTtnQkFBQyxJQUFJLElBQUUsSUFBRyxJQUFFLEdBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxHQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUFHLENBQUEsSUFBRSxJQUFFLEVBQUUsYUFBYSxVQUFRLEtBQUcsR0FBRSxlQUFlLFlBQVUsVUFBUSxHQUFFLGNBQWMsYUFBYSxVQUFRLEtBQUcsR0FBRSxTQUFPLEVBQUMsS0FBSSxFQUFFLEtBQUs7WUFBRTtZQUFDLElBQUU7UUFBQyxPQUFNLElBQUcsWUFBVSxHQUFFLE1BQUs7WUFBQyxJQUFJLElBQUUsR0FBRSxjQUFjLENBQUMsMEJBQTBCLEVBQUUsR0FBRSxLQUFLLFVBQVUsQ0FBQztZQUFFLElBQUcsR0FBRTtnQkFBQyxJQUFJLEtBQUUsRUFBRTtnQkFBRyxJQUFFLEtBQUUsR0FBRSxhQUFhLFVBQVEsS0FBRyxFQUFFLFNBQU87WUFBRSxPQUFNLElBQUU7UUFBRSxPQUFNLElBQUUsR0FBRSxTQUFPO0lBQUUsT0FBTSxJQUFHLGFBQVcsRUFBRSxTQUFRO1FBQUMsSUFBSSxLQUFFO1FBQUUsSUFBRSxHQUFFLE9BQU8sQ0FBQyxHQUFFLGNBQWMsRUFBRSxhQUFhLFVBQVE7SUFBRSxPQUFNLElBQUcsZUFBYSxFQUFFLFNBQVE7UUFBQyxJQUFJLEtBQUU7UUFBRSxJQUFFLEdBQUUsU0FBTztJQUFFO0lBQUMsT0FBTTtRQUFDLE9BQU07UUFBRSxPQUFNO0lBQUM7QUFBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtODc2OWZhZDYyODc3MWYzMS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9ocm1kaXJlY3QvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcaHJtZGlyZWN0XFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiMDFkNWM0YTIyNmM3N2I5N1wiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDVCZmNoXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9ocm1kaXJlY3QvcnVsZXMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJleHRyYWN0UnVsZXNcIiwoKT0+YSksbi5leHBvcnQocixcImV4dHJhY3RFZHVPckVtcFJ1bGVzXCIsKCk9PmQpLG4uZXhwb3J0KHIsXCJnZXRIcm1kaXJlY3RDb21wb3NpdGVTZWN0aW9uTGFiZWxcIiwoKT0+Ziksbi5leHBvcnQocixcInJlc29sdmVIcm1kaXJlY3RGaWVsZFR5cGVcIiwoKT0+cCksbi5leHBvcnQocixcIm1lcmdlSHJtZGlyZWN0Q3VycmVudFBhZ2VTbmFwc2hvdFwiLCgpPT5TKSxuLmV4cG9ydChyLFwiZ2V0SHJtZGlyZWN0Q3VycmVudFBhZ2VGb3JtXCIsKCk9PkUpLG4uZXhwb3J0KHIsXCJnZXRBZGRpdGlvbmFsRm9ybVNuYXBzaG90RGF0YVwiLCgpPT5DKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9PkEpLG4uZXhwb3J0KHIsXCJzZXJpYWxpemVIcm1kaXJlY3ROb3JtYWxTbmFwc2hvdFZhbHVlXCIsKCk9PlQpLG4uZXhwb3J0KHIsXCJnZXRIcm1kaXJlY3RDdXJyZW50UGFnZVNuYXBzaG90XCIsKCk9PkYpO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+Y29yZS94cGF0aFwiKTthc3luYyBmdW5jdGlvbiBhKCl7bGV0IGU9W10sdD0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLy9kaXZbQGNsYXNzPSdzZWN0aW9uLWNvbnRhaW5lcicgYW5kIG5vdChhbmNlc3Rvcjo6ZGl2W0BjbGFzcz0nc2VjdGlvbi1jb250YWluZXInXSldXCIpO2ZvcihsZXQgciBvZiB0KXtsZXQgdD0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vYVtAY2xhc3M9XCJidG4gYnRuLWJsb2NrLXhzIGJ0bi1kZWZhdWx0IGFkZC1yb3ctYnV0dG9uXCIgYW5kIG5vcm1hbGl6ZS1zcGFjZSh0ZXh0KCkpPVwiQWRkIEFkZGl0aW9uYWwgUm93XCIgYW5kIG5vdChhbmNlc3Rvcjo6ZGl2W2NvbnRhaW5zKEBzdHlsZSwgXCJkaXNwbGF5OiBub25lXCIpXSldJyxyKTtpZih0KXtsZXQgdDtsZXQgbj1yLnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpfHxcIlwiO2lmKG4uaW5jbHVkZXMoXCJzY2hvb2xcIil8fG4uaW5jbHVkZXMoXCJlZHVjYXRpb25cIil8fG4uaW5jbHVkZXMoXCJtYWpvclwiKXx8bi5pbmNsdWRlcyhcImRlZ3JlZVwiKT90PW8uRklFTERfVFlQRS5FRFVDQVRJT046KG4uaW5jbHVkZXMoXCJjb21wYW55XCIpfHxuLmluY2x1ZGVzKFwic3VwZXJ2aXNvclwiKXx8bi5pbmNsdWRlcyhcInJlYXNvbiBmb3IgbGVhdmluZ1wiKSkmJih0PW8uRklFTERfVFlQRS5FTVBMT1lNRU5UKSx0KXtsZXQgbj1hd2FpdCBkKHIsdCk7ZS5wdXNoKC4uLm4pO2NvbnRpbnVlfX1sZXQgbj0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2Zvcm0tZmllbGQnKV1cIixyKTtmb3IobGV0IHQgb2Ygbil7bGV0IHI9YXdhaXQgbSh0KTtyJiZlLnB1c2gocil9fWlmKDA9PT1lLmxlbmd0aCl7bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIvL2Zvcm1cIikscj1bXTtyLnB1c2goLi4uKDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2lucHV0IHwgLi8vdGV4dGFyZWEgfCAuLy9zZWxlY3RcIix0KSk7bGV0IG49bmV3IE1hcDtmb3IobGV0IG8gb2YgcilpZihcIklOUFVUXCI9PT1vLnRhZ05hbWUpe2xldCByPW87aWYoXCJ0ZXh0XCI9PT1yLnR5cGV8fFwiZW1haWxcIj09PXIudHlwZXx8XCJ0ZWxcIj09PXIudHlwZXx8XCJudW1iZXJcIj09PXIudHlwZSl7bGV0IG49YXdhaXQgbChyLHQpO24mJmUucHVzaChuKX1lbHNlIGlmKFwicmFkaW9cIj09PXIudHlwZSl7bGV0IGU9ci5uYW1lO24uaGFzKGUpfHxuLnNldChlLFtdKSxuLmdldChlKT8ucHVzaChyKX19ZWxzZSBpZihcIlNFTEVDVFwiPT09by50YWdOYW1lKXtsZXQgcj1hd2FpdCBzKG8sdCk7ciYmZS5wdXNoKHIpfWVsc2UgaWYoXCJURVhUQVJFQVwiPT09by50YWdOYW1lKXtsZXQgcj1hd2FpdCB1KG8sdCk7ciYmZS5wdXNoKHIpfWZvcihsZXRbcixvXW9mIG4paWYoby5sZW5ndGg+MCl7bGV0IHI9YXdhaXQgYyhvLHQpO3ImJmUucHVzaChyKX19cmV0dXJuIGV9YXN5bmMgZnVuY3Rpb24gbChlLHQpe2xldCByPWcoZSk/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7ci5lbmRzV2l0aChcIipcIikmJihyPXIuc2xpY2UoMCwtMSkudHJpbSgpKTtsZXQgbj1cIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCI9PT1lLmdldEF0dHJpYnV0ZShcInRvb2x0aXB0ZXh0XCIpO3JldHVybntsYWJlbDpyLHR5cGU6by5GSUVMRF9UWVBFLlRFWFQscmVxdWlyZWQ6biwkaW5wdXQ6ZX19YXN5bmMgZnVuY3Rpb24gcyhlLHQpe2xldCByPWUuY2xvc2VzdChcIi5mb3JtLWZpZWxkXCIpPy5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJjb250cm9sLWxhYmVsIGZpZWxkLXRpdGxlXCJdJyk7aWYoIXIpe2xldCB0PWUucGFyZW50RWxlbWVudDt0JiYocj10LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpfWlmKCFyKXJldHVybiBudWxsO2xldCBuPXIudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtuLmVuZHNXaXRoKFwiKlwiKSYmKG49bi5zbGljZSgwLC0xKS50cmltKCkpO2xldCBpPXIudGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiKlwiKXx8ITEsYT1hd2FpdCB2KGUpO3JldHVybntsYWJlbDpuLHR5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxyZXF1aXJlZDppLG9wdGlvbnM6YSwkaW5wdXQ6ZX19YXN5bmMgZnVuY3Rpb24gdShlLHQpe2xldCByPVwiXCIsbj1lLnBhcmVudEVsZW1lbnQ7aWYobil7bGV0IGU9bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2UmJihyPWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIil9aWYoIXIpcmV0dXJuIG51bGw7ci5lbmRzV2l0aChcIipcIikmJihyPXIuc2xpY2UoMCwtMSkudHJpbSgpKTtsZXQgaT1cIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCI9PT1lLmdldEF0dHJpYnV0ZShcInRvb2x0aXB0ZXh0XCIpO3JldHVybntsYWJlbDpyLHR5cGU6by5GSUVMRF9UWVBFLlRFWFQscmVxdWlyZWQ6aSwkaW5wdXQ6ZX19YXN5bmMgZnVuY3Rpb24gYyhlLHQpe2lmKDA9PT1lLmxlbmd0aClyZXR1cm4gbnVsbDtsZXQgcj1lWzBdLG49XCJcIixpPXIuY2xvc2VzdChcImRpdltjbGFzcyo9J3JhZGlvLWdyb3VwJ11cIik7aWYoaSl7bGV0IGU9aS5xdWVyeVNlbGVjdG9yKFwibGFiZWw6bm90KC5idG4pXCIpO2UmJihuPWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIil9aWYoIW4pcmV0dXJuIG51bGw7bj1uLnJlcGxhY2UoL1xcKiQvLFwiXCIpLnRyaW0oKTtsZXQgYT1lLnNvbWUoZT0+ZS5yZXF1aXJlZCksbD1bXTtmb3IobGV0IHQgb2YgZSl7bGV0IGU9dC5jbG9zZXN0KFwibGFiZWxcIik7aWYoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5sMTBuXCIpLHI9dD8udGV4dENvbnRlbnQ/LnRyaW0oKTtyJiZsLnB1c2gocil9fXJldHVybntsYWJlbDpuLHR5cGU6by5GSUVMRF9UWVBFLlJBRElPR1JPVVAscmVxdWlyZWQ6YSxvcHRpb25zOlsuLi5uZXcgU2V0KGwpXSwkaW5wdXQ6ZVswXX19YXN5bmMgZnVuY3Rpb24gZChlLHQpe2xldCByPVtdLG49KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2RpdltAY2xhc3M9J3NlY3Rpb24tcmVwZWF0YWJsZSddXCIsZSk7Zm9yKGxldCBlIG9mIG4pe2xldCBuPVtdLG89KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICdmb3JtLWZpZWxkJyldXCIsZSk7Zm9yKGxldCBlIG9mIG8pe2xldCB0PWF3YWl0IG0oZSk7dCYmbi5wdXNoKHQpfWlmKG4ubGVuZ3RoPjApe2xldCBvPXtsYWJlbDpmKHQpLHR5cGU6dCxyZXF1aXJlZDohMCxvcHRpb25zOm4ubWFwKGU9PntsZXQgdD17bGFiZWw6ZS5sYWJlbCx0eXBlOmUudHlwZX0scj1lO3JldHVybiByLm9wdGlvbnMmJkFycmF5LmlzQXJyYXkoci5vcHRpb25zKSYmci5vcHRpb25zLmxlbmd0aD4wP3suLi50LG9wdGlvbnM6ci5vcHRpb25zfTp0fSksJGlucHV0OmUsY2hpbGRyZW46bn07ci5wdXNoKG8pfX1yLmxlbmd0aD4wJiZjb25zb2xlLmluZm8oXCJbSFJNRGlyZWN0IFJ1bGVzXSBleHRyYWN0ZWQgc3RydWN0dXJlZCBzZWN0aW9uXCIse3R5cGU6dCxwcm9ncmVzc0xhYmVsOmYodCkscmVwZWF0YWJsZUNvdW50OnIubGVuZ3RofSk7bGV0IG89KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICdmb3JtLWZpZWxkJyldXCIsZSksYT1vLmZpbHRlcihlPT4hbi5zb21lKHQ9PnQuY29udGFpbnMoZSkpKTtmb3IobGV0IGUgb2YgYSl7bGV0IHQ9YXdhaXQgbShlKTt0JiZyLnB1c2godCl9cmV0dXJuIHJ9ZnVuY3Rpb24gZihlKXtyZXR1cm4gZT09PW8uRklFTERfVFlQRS5FTVBMT1lNRU5UP1wiRW1wbG95bWVudFwiOlwiRWR1Y2F0aW9uXCJ9ZnVuY3Rpb24gcChlLHQscj0hMSl7bGV0IG49U3RyaW5nKGUuY2xhc3NOYW1lPz9cIlwiKTtyZXR1cm4gbi5pbmNsdWRlcyhcInJlc3VtZS11cGxvYWRcIik/bnVsbDpuLmluY2x1ZGVzKFwicmFkaW9cIik/by5GSUVMRF9UWVBFLlJBRElPR1JPVVA6bi5pbmNsdWRlcyhcImNoZWNrYm94XCIpP28uRklFTERfVFlQRS5DSEVDS0JPWDpyP28uRklFTERfVFlQRS5EQVRFOm4uaW5jbHVkZXMoXCJkcm9wZG93blwiKSYmXCJTRUxFQ1RcIj09PXQudGFnTmFtZT9vLkZJRUxEX1RZUEUuU0VMRUNUOm8uRklFTERfVFlQRS5URVhUfWFzeW5jIGZ1bmN0aW9uIG0oZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIik7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2wtbGFiZWwuZmllbGQtdGl0bGUsIGxhYmVsLmNvbnRyb2wtbGFiZWxcIik7aWYoIXImJnQuaWQpe2xldCBuPWUuY2xvc2VzdChcImZvcm0uc2VjdGlvbi1mb3JtXCIpfHxlO3I9bi5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3QuaWR9XCJdYCl9aWYocnx8KHI9Zyh0KSksIXIpcmV0dXJuIG51bGw7bGV0IG49ci50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO249bi5yZXBsYWNlKC9cXCokLyxcIlwiKS50cmltKCk7bGV0IGE9ci50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCIqXCIpfHwhMSxsPWUuY2xhc3NOYW1lLHM9ISEoMCxpLmdldEZpcnN0T3JkZXJlZE5vZGUpKCcuLy9pbnB1dFtjb250YWlucyhAY2xhc3MsIFwiZGF0ZS1pbnB1dFwiKV0nLGUpLHU9cChlLHQscyk7aWYoIXUpcmV0dXJuIG51bGw7bC5pbmNsdWRlcyhcImRyb3Bkb3duXCIpJiZ1PT09by5GSUVMRF9UWVBFLlRFWFQmJmNvbnNvbGUuaW5mbyhcIltIUk1EaXJlY3QgUnVsZXNdIGR5bmFtaWMgZHJvcGRvd24gcmVzb2x2ZWQgYXMgdGV4dFwiLHtsYWJlbDpuLHRhZ05hbWU6dC50YWdOYW1lLGNvbm5lY3RlZDp0LmlzQ29ubmVjdGVkfSk7bGV0IGM9W107aWYodT09PW8uRklFTERfVFlQRS5TRUxFQ1Qpe2lmKFwiU0VMRUNUXCI9PT10LnRhZ05hbWUpcmV0dXJue2xhYmVsOm4sdHlwZTp1LHJlcXVpcmVkOmEsb3B0aW9uczpjPWF3YWl0IHYodCksJGlucHV0OnR9fWVsc2UgaWYodT09PW8uRklFTERfVFlQRS5SQURJT0dST1VQfHx1PT09by5GSUVMRF9UWVBFLkNIRUNLQk9YKXtsZXQgcj15KGUpO3JldHVybntsYWJlbDpuLHR5cGU6dSxyZXF1aXJlZDphLG9wdGlvbnM6Yz1oKHIpLCRpbnB1dDp0fX1yZXR1cm57bGFiZWw6bix0eXBlOnUscmVxdWlyZWQ6YSwkaW5wdXQ6dH19ZnVuY3Rpb24gaChlKXtsZXQgdD1bXTtmb3IobGV0IHIgb2YgZSl7bGV0IGU9YihyKSxuPWU/LnRleHRDb250ZW50Py50cmltKCl8fHIudmFsdWV8fFwiXCI7biYmdC5wdXNoKG4pfXJldHVybiB0fWZ1bmN0aW9uIGcoZSx0PWUuY2xvc2VzdChcImZvcm0uc2VjdGlvbi1mb3JtXCIpfHxlKXtsZXQgcj1lLmlkO2lmKHIpe2xldCBlPXQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtyfVwiXWApO2lmKGUpcmV0dXJuIGV9bGV0IG49ZS5jbG9zZXN0KFwiZGl2LCBmaWVsZHNldCwgZm9ybVwiKTtpZihuKXtsZXQgZT1uLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtpZihlKXJldHVybiBlO2xldCB0PW4ucHJldmlvdXNFbGVtZW50U2libGluZztpZihcIkxBQkVMXCI9PT10LnRhZ05hbWUpcmV0dXJuIHR9bGV0IG89ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2Zvcig7bzspe2lmKFwiTEFCRUxcIj09PW8udGFnTmFtZSlyZXR1cm4gbztvPW8ucHJldmlvdXNFbGVtZW50U2libGluZ31yZXR1cm4gbnVsbH1mdW5jdGlvbiBiKGUpe2xldCB0PWUucGFyZW50RWxlbWVudDtyZXR1cm5cIkxBQkVMXCI9PT10LnRhZ05hbWU/dDpudWxsfWZ1bmN0aW9uIHkoZSl7bGV0IHQ9KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJyYWRpb1wiXSB8IC4vL2lucHV0W0B0eXBlPVwiY2hlY2tib3hcIl0nLGUpO3JldHVybiB0fWFzeW5jIGZ1bmN0aW9uIHYoZSl7bGV0IHQ9W107cmV0dXJuXCJTRUxFQ1RcIj09PWUudGFnTmFtZSYmQXJyYXkuZnJvbShlLm9wdGlvbnMpLmZvckVhY2goZT0+e2UudmFsdWUmJlwiXCIhPT1lLnZhbHVlJiZ0LnB1c2goZS50ZXh0Q29udGVudD8udHJpbSgpfHxlLnZhbHVlKX0pLHR9ZnVuY3Rpb24gdyhlKXtsZXQgdD1lLnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpfHxcIlwiO3JldHVybiB0LmluY2x1ZGVzKFwic2Nob29sXCIpfHx0LmluY2x1ZGVzKFwiZWR1XCIpfHx0LmluY2x1ZGVzKFwibWFqb3JcIil8fHQuaW5jbHVkZXMoXCJkZWdyZWVcIik/by5GSUVMRF9UWVBFLkVEVUNBVElPTjp0LmluY2x1ZGVzKFwiY29tcGFueVwiKXx8dC5pbmNsdWRlcyhcInN1cGVydmlzb3JcIil8fHQuaW5jbHVkZXMoXCJyZWFzb24gZm9yIGxlYXZpbmdcIik/by5GSUVMRF9UWVBFLkVNUExPWU1FTlQ6by5GSUVMRF9UWVBFLkVEVUNBVElPTn1mdW5jdGlvbiBTKGUsdCl7cmV0dXJuey4uLmUsLi4udH19ZnVuY3Rpb24gRShlPWRvY3VtZW50KXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yKFwiZm9ybS5zZWN0aW9uLWZvcm1cIil9ZnVuY3Rpb24geCgpe2xldCBlPUUoKTtyZXR1cm4gZT8oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vZGl2W0BjbGFzcz0nc2VjdGlvbi1jb250YWluZXInIGFuZCBub3QoYW5jZXN0b3I6OmRpdltAY2xhc3M9J3NlY3Rpb24tY29udGFpbmVyJ10pXVwiLGUpOltdfWZ1bmN0aW9uIEMoKXtsZXQgZT17fSx0PXgoKTtmb3IobGV0IHIgb2YgdCl7bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2FbQGNsYXNzPVwiYnRuIGJ0bi1ibG9jay14cyBidG4tZGVmYXVsdCBhZGQtcm93LWJ1dHRvblwiIGFuZCBub3JtYWxpemUtc3BhY2UodGV4dCgpKT1cIkFkZCBBZGRpdGlvbmFsIFJvd1wiIGFuZCBub3QoYW5jZXN0b3I6OmRpdltjb250YWlucyhAc3R5bGUsIFwiZGlzcGxheTogbm9uZVwiKV0pXScscik7aWYoIXQpY29udGludWU7bGV0IG49SShyKSxhPXcocik9PT1vLkZJRUxEX1RZUEUuRURVQ0FUSU9OP1wiZWR1Y2F0aW9uXCI6XCJlbXBsb3ltZW50XCI7ZVthXXx8KGVbYV09W10pLGVbYV0ucHVzaCguLi5uKX1yZXR1cm4gZX1mdW5jdGlvbiBBKCl7bGV0IGU9e30sdD14KCk7aWYoMD09PXQubGVuZ3RoKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSNwZXJzb25hbC1pbmZvLWZvcm1cIik7aWYoZSlyZXR1cm4gayhlKX1mb3IobGV0IHIgb2YgdCl7bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2FbQGNsYXNzPVwiYnRuIGJ0bi1ibG9jay14cyBidG4tZGVmYXVsdCBhZGQtcm93LWJ1dHRvblwiIGFuZCBub3JtYWxpemUtc3BhY2UodGV4dCgpKT1cIkFkZCBBZGRpdGlvbmFsIFJvd1wiIGFuZCBub3QoYW5jZXN0b3I6OmRpdltjb250YWlucyhAc3R5bGUsIFwiZGlzcGxheTogbm9uZVwiKV0pXScscik7aWYodCljb250aW51ZTtsZXQgbj0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2Zvcm0tZmllbGQnKV1cIixyKTtmb3IobGV0IHQgb2Ygbil7bGV0IHI9aih0KTtyJiYoZVtyLmxhYmVsXT1UKHIudmFsdWUpKX19cmV0dXJuIGV9ZnVuY3Rpb24gayhlKXtsZXQgdD17fSxyPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm0tZ3JvdXBcIikpO2ZvcihsZXQgZSBvZiByKXtsZXQgcj1lLnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbC1sYWJlbFwiKXx8ZS5xdWVyeVNlbGVjdG9yKFwiLnJhZGlvLWxhYmVsXCIpLG49ZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIik7aWYoIXJ8fCFuKWNvbnRpbnVlO2xldCBvPShyLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkucmVwbGFjZSgvXFxzKlxcKlxccyokLyxcIlwiKTtpZighbyljb250aW51ZTtsZXQgaT1cIlwiO2lmKFwiSU5QVVRcIj09PW4udGFnTmFtZSYmXCJyYWRpb1wiPT09bi50eXBlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJyk7aT10JiYodC5jbG9zZXN0KFwibGFiZWxcIik/LnRleHRDb250ZW50Py50cmltKCl8fHQudmFsdWUpfHxcIlwifWVsc2UgaWYoXCJTRUxFQ1RcIj09PW4udGFnTmFtZSl7bGV0IGU9bjtpPWUub3B0aW9uc1tlLnNlbGVjdGVkSW5kZXhdPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifWVsc2UgaT1uLnZhbHVlfHxcIlwiO3Rbb109aX1yZXR1cm4gdH1mdW5jdGlvbiBUKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2Uuam9pbihcIiwgXCIpOmV9ZnVuY3Rpb24gRigpe3JldHVybiBTKEEoKSxDKCkpfWZ1bmN0aW9uIEkoZSl7bGV0IHQ9W10scj0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vZGl2W0BjbGFzcz0nc2VjdGlvbi1yZXBlYXRhYmxlJ11cIixlKTtmb3IobGV0IGUgb2Ygcil7bGV0IHI9e30sbj0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2Zvcm0tZmllbGQnKV1cIixlKTtmb3IobGV0IGUgb2Ygbil7bGV0IHQ9aihlKTt0JiYoclt0LmxhYmVsXT10LnZhbHVlKX10LnB1c2gocil9cmV0dXJuIHR9ZnVuY3Rpb24gaihlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj1lLmNsb3Nlc3QoXCJmb3JtLnNlY3Rpb24tZm9ybVwiKXx8ZSxuPWUucXVlcnlTZWxlY3RvcignW2NsYXNzPVwiY29udHJvbC1sYWJlbCBmaWVsZC10aXRsZVwiXScpO2lmKG58fChuPWcodCxyKSksIW4pcmV0dXJuIG51bGw7bGV0IG89bi50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO28uZW5kc1dpdGgoXCIqXCIpJiYobz1vLnNsaWNlKDAsLTEpLnRyaW0oKSk7bGV0IGk9XCJcIjtpZihcIklOUFVUXCI9PT10LnRhZ05hbWUpe2xldCBlPXQ7aWYoXCJjaGVja2JveFwiPT09ZS50eXBlKXtsZXQgdD1bXSxuPWUubmFtZSxvPW4/QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCJjaGVja2JveFwiXVtuYW1lPVwiJHtufVwiXWApKTpbZV07Zm9yKGxldCBlIG9mIG8paWYoZS5jaGVja2VkKXtsZXQgbj1cIlwiLG89ci5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2UuaWR9XCJdYCk7KG49bz9vLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI6ZS5wYXJlbnRFbGVtZW50Py50YWdOYW1lPT09XCJMQUJFTFwiP2UucGFyZW50RWxlbWVudC50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiOmUudmFsdWV8fFwiXCIpJiZ0LnB1c2gobil9aT10fWVsc2UgaWYoXCJyYWRpb1wiPT09ZS50eXBlKXtsZXQgdD1yLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtlLm5hbWV9XCJdOmNoZWNrZWRgKTtpZih0KXtsZXQgZT1iKHQpO2k9ZT9lLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI6dC52YWx1ZXx8XCJcIn1lbHNlIGk9XCJcIn1lbHNlIGk9ZS52YWx1ZXx8XCJcIn1lbHNlIGlmKFwiU0VMRUNUXCI9PT10LnRhZ05hbWUpe2xldCBlPXQ7aT1lLm9wdGlvbnNbZS5zZWxlY3RlZEluZGV4XT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIn1lbHNlIGlmKFwiVEVYVEFSRUFcIj09PXQudGFnTmFtZSl7bGV0IGU9dDtpPWUudmFsdWV8fFwiXCJ9cmV0dXJue2xhYmVsOm8sdmFsdWU6aX19XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy4yNmM3N2I5Ny5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);