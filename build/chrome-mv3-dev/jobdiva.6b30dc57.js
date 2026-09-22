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
})({"9J8yY":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\jobdiva.js",
    "bundleId": "c0ab87c76b30dc57",
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
var j = z(require("db5a76d51fc82c7c"));
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

},{"db5a76d51fc82c7c":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"2Z9KB":[function(require,module,exports) {
/**
 * Parcel module id: 9eGoe
 * Resolved path: src/contents/sites/jobdiva.js
 * Dependencies:
 *   ./answer -> 9tSwu  =>  src/contents/sites/jobdiva/answer.js
 *   ./operations -> aBF8M  =>  src/contents/sites/jobdiva/operations.js
 *   ./rules -> bcuXB  =>  src/contents/sites/jobdiva/rules.js
 *   ./signin-credentials -> 30YY8  =>  src/contents/sites/jobdiva/signin-credentials.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~api/autofill-signup-information -> 52vOt  =>  src/api/autofill-signup-information.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~store/workday-signup-info -> jjbI7  =>  src/store/workday-signup-info.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Jobdiva", ()=>b);
var o = e("~contents/methods/answer"), i = e("~contents/methods/track"), a = e("~contents/sites/base-filler"), l = e("~core/enums"), s = e("~core/dom"), u = e("~enums/http"), c = e("~store/autofillInfo"), d = e("~api/autofill-signup-information"), f = e("~store/workday-signup-info"), p = e("./answer"), m = e("./operations"), h = e("./rules"), g = e("./signin-credentials");
class b extends a.BaseFiller {
    static #_ = (()=>{
        this.MODAL_SUBMIT_SELECTOR = ".job-app-btn .jd-btn-mobile, .job-app-btns .jd-btn-mobile";
    })();
    formatAnswer(e1) {
        return (0, p.formatAnswer)(e1);
    }
    async fetchFormAnswers(e1, t) {
        let r1 = (0, p.prepareJobdivaAnswerRequestRules)(e1), n = await this.requestFormAnswers(r1, t);
        if ("string" == typeof n) return n;
        n && (this.answer = n);
    }
    getFieldHandlers() {
        return {
            [l.FIELD_TYPE.TEXT]: (e1, t)=>{
                let r1 = t?.[0];
                if (null != r1) return (0, m.fillInputTextField)(e1.$input, String(r1 ?? ""));
            },
            [l.FIELD_TYPE.SELECT]: (e1, t)=>(0, m.fillSelectField)(e1, t),
            [l.FIELD_TYPE.CHECKBOX]: (e1, t)=>(0, m.fillCheckboxField)(e1, t),
            [l.FIELD_TYPE.RADIOGROUP]: (e1, t)=>(0, m.fillRadioGroupFiled)(e1, t)
        };
    }
    getSiteName() {
        return "jobdiva";
    }
    isVisible(e1) {
        if (!e1) return !1;
        let t = window.getComputedStyle(e1);
        return "none" !== t.display && "hidden" !== t.visibility && e1.getClientRects().length > 0;
    }
    isModalAdvanceButton(e1) {
        if (!(e1 instanceof HTMLElement)) return !1;
        let t = (e1.textContent || e1.getAttribute("value") || e1.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").toLowerCase();
        return !!t && "back" !== t && "cancel" !== t && ("next" === t || "continue" === t || "submit" === t || "apply" === t || "save" === t || t.includes("next") || t.includes("continue") || t.includes("submit"));
    }
    getActiveModalSurface() {
        let e1 = Array.from(document.querySelectorAll(".modal.show .modal-content")).filter((e1)=>this.isVisible(e1)), t = e1.filter((e1)=>!!e1.querySelector(".job-app-main, .jd-form-layout") || Array.from(e1.querySelectorAll("button, [role='button']")).some((e1)=>this.isModalAdvanceButton(e1))), r1 = t[t.length - 1];
        return r1 ? {
            mode: "modal",
            root: r1
        } : null;
    }
    detectActiveSurface() {
        let e1 = this.getActiveModalSurface();
        if (e1) return e1;
        let t = Array.from(document.querySelectorAll(".modal-content")).filter((e1)=>this.isVisible(e1) && !!e1.querySelector(".job-app-main")), r1 = t[t.length - 1];
        if (r1) return {
            mode: "modal",
            root: r1
        };
        let n = Array.from(document.querySelectorAll(".row")).find((e1)=>this.isVisible(e1) && (!!e1.querySelector(".jd-reg-title") || !!e1.querySelector(".jd-reg-card") || !!e1.querySelector(".jd-form-layout") || !!e1.querySelector(".jd-actioncard.jd-reg-introcard") || !!e1.querySelector('input[type="file"]') || !!e1.querySelector(".jd-dropzone"))) || document.querySelector(".jd-reg-title")?.closest(".row") || document.querySelector(".jd-reg-card")?.closest(".row") || document.body;
        return {
            mode: "regular",
            root: n
        };
    }
    resolveModalSubmitButton(e1) {
        if ("modal" !== this.activeSurface.mode) return null;
        if (e1 instanceof HTMLElement) {
            let t = e1.closest(b.MODAL_SUBMIT_SELECTOR);
            return t && this.activeSurface.root.contains(t) && t.classList.contains("jd-btn-mobile") ? t : null;
        }
        return this.activeSurface.root.querySelector(b.MODAL_SUBMIT_SELECTOR) || null;
    }
    getActiveSubmitButton() {
        if ("modal" === this.activeSurface.mode) return this.resolveModalSubmitButton();
        let e1 = Array.from(this.activeSurface.root.querySelectorAll("button.jd-btn")).filter((e1)=>this.isVisible(e1));
        return e1[e1.length - 1] || null;
    }
    getSubmitTrackingDelegationRoot() {
        return this.activeSurface.root || null;
    }
    resolveDelegatedSubmitButton(e1) {
        if ("modal" === this.activeSurface.mode) return this.resolveModalSubmitButton(e1);
        let t = e1.closest("button.jd-btn"), r1 = this.getActiveSubmitButton();
        return t && r1 === t ? t : null;
    }
    async extractFormRules() {
        let e1 = await (0, h.extractRules)(this.activeSurface.root, this.activeSurface.mode);
        return (0, h.excludeJobdivaSignInRules)(e1, this.activeSurface.root);
    }
    async runPreFillForm() {
        "regular" === this.activeSurface.mode && (this.taskQueue.add(()=>(0, m.preFillForm)(this.activeSurface.root)), await this.taskQueue.run());
        let e1 = await (0, c.useAutofillInfoStore).getState().fetchAutofillInfo();
        await (0, m.prefillCountry)(this.activeSurface.root, e1?.location?.country);
    }
    async handleResumeUpload() {
        this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async ()=>{
            await (0, m.uploadResume)(this.activeSurface.root, this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), await this.taskQueue.run();
    }
    async fillEducationAndEmployment(e1) {
        if ("regular" === this.activeSurface.mode) {
            if (Array.isArray(this.answer.education) && this.answer.education.length > 0) {
                let e1 = await (0, h.getEducationRulesForRoot)(this.activeSurface.root);
                if (e1.length !== this.answer.education.length && (await (0, m.addEducationSectionForRoot)(this.activeSurface.root, this.answer.education.length), e1 = await (0, h.getEducationRulesForRoot)(this.activeSurface.root)), e1.length !== this.answer.education.length) {
                    console.warn("[jobdiva fillEdu] skip fill because counts still mismatch", {
                        eduRulesLen: e1.length,
                        answerLen: this.answer.education.length
                    });
                    return;
                }
                (0, s.setSectionResultFocusRules)("education", e1);
                let t = (0, o.getEducationOperations)(e1, this.answer.education, this.operationConfig, void 0, {
                    onSectionResultChanged: this.progressTracker.updateSectionResult,
                    onCompleted: ()=>this.progressTracker.updateFilledProgress("Education"),
                    onSkipped: ()=>this.progressTracker.updateMissedProgress("Education")
                });
                for (let e1 of t)this.taskQueue.add(e1);
                await this.taskQueue.run();
            }
            if (Array.isArray(this.answer.workExperience) && this.answer.workExperience.length > 0) {
                let e1 = await (0, h.getExperienceRulesForRoot)(this.activeSurface.root);
                if (e1.length !== this.answer.workExperience.length && (await (0, m.addEmploymentSectionForRoot)(this.activeSurface.root, this.answer.workExperience.length), e1 = await (0, h.getExperienceRulesForRoot)(this.activeSurface.root)), e1.length !== this.answer.workExperience.length) {
                    console.warn("[jobdiva fillExp] skip fill because counts still mismatch", {
                        expRulesLen: e1.length,
                        answerLen: this.answer.workExperience.length
                    });
                    return;
                }
                (0, s.setSectionResultFocusRules)("employment", e1);
                let t = (0, o.getEmploymentOperations)(e1, this.answer.workExperience, this.operationConfig, void 0, {
                    onSectionResultChanged: this.progressTracker.updateSectionResult,
                    onCompleted: ()=>this.progressTracker.updateFilledProgress("Employment"),
                    onSkipped: ()=>this.progressTracker.updateMissedProgress("Employment")
                });
                for (let e1 of t)this.taskQueue.add(e1);
                await this.taskQueue.run();
            }
        }
    }
    async fillRegularFields(e1) {
        let t = e1.filter((e1)=>e1.type !== l.FIELD_TYPE.SECTION && "I consent to receive employment-related text messages to this number" !== e1.label), r1 = (0, o.getRegularOperations)(t, this.answer.regular, this.operationConfig);
        for (let e1 of r1)this.taskQueue.add(e1);
        await this.taskQueue.run();
        let n = e1.filter((e1)=>e1.type === l.FIELD_TYPE.SECTION && "Phone" === e1.label);
        for (let e1 of n)this.taskQueue.add(async ()=>{
            await (0, m.fillPhoneSectionField)(e1, this.answer.regular, this.progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress);
        });
        n.length > 0 && await this.taskQueue.run();
    }
    getSubmitButtonSelector() {
        return null;
    }
    extractEducationEmploymentAdditional(e1) {
        let { education: t, employment: r1 } = e1 || {};
        return {
            education: t || [],
            employment: r1 || []
        };
    }
    async getAutofillSnapshot(e1) {
        let t = (0, h.getFormSnapshot)(this.activeSurface.root) || {};
        this.lastFullAutofillSnapshot = t;
        let r1 = {
            ...t
        };
        return delete r1.education, delete r1.employment, r1;
    }
    async getSubmitSnapshot() {
        let e1 = (0, h.getFormSnapshot)(this.activeSurface.root) || {};
        this.lastFullSubmitSnapshot = e1;
        let t = {
            ...e1
        };
        return delete t.education, delete t.employment, t;
    }
    getAdditionalAutofillSnapshotData(e1) {
        return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot);
    }
    getAdditionalSubmitSnapshotData() {
        return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot);
    }
    isResumeUploadOnlyPage(e1) {
        if ("regular" !== this.activeSurface.mode) return !1;
        let t = !!this.activeSurface.root.querySelector('input[type="file"]') || !!this.activeSurface.root.querySelector(".jd-dropzone");
        return !!t && 0 === e1.length;
    }
    async tryFillSignIn() {
        if (console.debug("[JobDiva] sign-in surface check", {
            foundSignIn: !!(0, g.findJobdivaSignInFields)()
        }), (0, g.findJobdivaSignInFields)()) {
            this.progressTracker.clear(), this.taskQueue.clear();
            let [e1, t] = await Promise.all([
                (0, c.useAutofillInfoStore).getState().fetchAutofillInfo(),
                (0, f.getWorkdaySignupInformation)().catch(()=>null)
            ]), r1 = (0, d.resolveSignupRegistrationEmail)(e1), n = t?.password ?? "", o = await (0, g.fillJobdivaSignInCredentials)({
                email: r1,
                password: n
            });
            for (let e1 of (console.info("[JobDiva] sign-in credential fill", JSON.stringify({
                hasRegistrationEmail: !!r1,
                hasLocalPassword: !!n,
                foundForm: o.foundForm,
                filledRoles: o.filledRoles,
                skippedExistingRoles: o.skippedExistingRoles,
                rejectedRoles: o.rejectedRoles
            })), this.progressTracker.setFieldsRequiredStatus([
                {
                    label: "Email",
                    required: !0
                },
                {
                    label: "Password",
                    required: !0
                }
            ]), [
                "email",
                "password"
            ])){
                let t = "email" === e1 ? "Email" : "Password";
                o.filledRoles.includes(e1) || o.skippedExistingRoles.includes(e1) ? this.progressTracker.updateFilledProgress(t) : this.progressTracker.updateMissedProgress(t);
            }
            return this.finalizeFillForm();
        }
        return null;
    }
    async doFillForm(e1 = !1) {
        this.activeSurface = this.detectActiveSurface();
        let t = await this.tryFillSignIn();
        if (null !== t) return t;
        await this.initializeFillForm(), this.activeSurface = this.detectActiveSurface();
        let r1 = await this.tryFillSignIn();
        if (null !== r1) return r1;
        let n = await this.extractFormRules();
        if (this.progressTracker.setFieldsRequiredStatus(n), 0 === n.length) {
            let e1 = this.isResumeUploadOnlyPage(n);
            return (console.warn("[jobdiva] skip fill-v2: no extracted rules", {
                surfaceMode: this.activeSurface.mode,
                hasFormLayout: !!this.activeSurface.root.querySelector(".jd-form-layout"),
                hasRegistrationCard: !!this.activeSurface.root.querySelector(".jd-reg-title, .jd-reg-card"),
                hasResumeUpload: e1
            }), e1) ? (await this.handleResumeUpload(), await this.executeSiteSpecificSteps(n), this.finalizeFillForm()) : ((0, i.sendHttpStatusMessage)(u.CUSTOM_ERROR_CODES.NO_ELEMENTS), u.CUSTOM_ERROR_CODES.NO_ELEMENTS);
        }
        await this.handleResumeUpload();
        let o = await this.fetchFormAnswers(n, e1);
        return "string" == typeof o ? (console.warn("[jobdiva fillForm] early return due to string answer:", o), o) : (await this.fillRegularFields(n), await this.fillEducationAndEmployment(n), await this.executeSiteSpecificSteps(n), this.finalizeFillForm());
    }
    submitApplication() {
        this.getActiveSubmitButton()?.click();
    }
    constructor(...e1){
        super(...e1), this.activeSurface = {
            mode: "regular",
            root: document.body
        }, this.lastFullAutofillSnapshot = null, this.lastFullSubmitSnapshot = null;
    }
}

},{}]},["9J8yY","2Z9KB"], "2Z9KB", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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Qyx5QkFBeUI7SUFDekU7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMTVmZDNkYTU2YTUzYjA5Ni5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9qb2JkaXZhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGpvYmRpdmEuanNcIixcImJ1bmRsZUlkXCI6XCJjMGFiODdjNzZiMzBkYzU3XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogOWVHb2VcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2pvYmRpdmEuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuL2Fuc3dlciAtPiA5dFN3dSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9qb2JkaXZhL2Fuc3dlci5qc1xyXG4gKiAgIC4vb3BlcmF0aW9ucyAtPiBhQkY4TSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9qb2JkaXZhL29wZXJhdGlvbnMuanNcclxuICogICAuL3J1bGVzIC0+IGJjdVhCICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2pvYmRpdmEvcnVsZXMuanNcclxuICogICAuL3NpZ25pbi1jcmVkZW50aWFscyAtPiAzMFlZOCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9qb2JkaXZhL3NpZ25pbi1jcmVkZW50aWFscy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmFwaS9hdXRvZmlsbC1zaWdudXAtaW5mb3JtYXRpb24gLT4gNTJ2T3QgID0+ICBzcmMvYXBpL2F1dG9maWxsLXNpZ251cC1pbmZvcm1hdGlvbi5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL3RyYWNrIC0+IGg0NzliICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvdHJhY2suanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICB+Y29yZS9kb20gLT4gaExNSlggID0+ICBzcmMvY29yZS9kb20uanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmVudW1zL2h0dHAgLT4gZUpGcWogID0+ICBzcmMvZW51bXMvaHR0cC5qc1xyXG4gKiAgIH5zdG9yZS9hdXRvZmlsbEluZm8gLT4gNzlWTlAgID0+ICBzcmMvc3RvcmUvYXV0b2ZpbGxJbmZvLmpzXHJcbiAqICAgfnN0b3JlL3dvcmtkYXktc2lnbnVwLWluZm8gLT4gampiSTcgID0+ICBzcmMvc3RvcmUvd29ya2RheS1zaWdudXAtaW5mby5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiSm9iZGl2YVwiLCAoKSA9PiBiKTtcclxudmFyIG8gPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLFxyXG4gIGkgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvdHJhY2tcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXJcIiksXHJcbiAgbCA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICBzID0gZShcIn5jb3JlL2RvbVwiKSxcclxuICB1ID0gZShcIn5lbnVtcy9odHRwXCIpLFxyXG4gIGMgPSBlKFwifnN0b3JlL2F1dG9maWxsSW5mb1wiKSxcclxuICBkID0gZShcIn5hcGkvYXV0b2ZpbGwtc2lnbnVwLWluZm9ybWF0aW9uXCIpLFxyXG4gIGYgPSBlKFwifnN0b3JlL3dvcmtkYXktc2lnbnVwLWluZm9cIiksXHJcbiAgcCA9IGUoXCIuL2Fuc3dlclwiKSxcclxuICBtID0gZShcIi4vb3BlcmF0aW9uc1wiKSxcclxuICBoID0gZShcIi4vcnVsZXNcIiksXHJcbiAgZyA9IGUoXCIuL3NpZ25pbi1jcmVkZW50aWFsc1wiKTtcclxuY2xhc3MgYiBleHRlbmRzIGEuQmFzZUZpbGxlciB7XHJcbiAgc3RhdGljIHtcclxuICAgIHRoaXMuTU9EQUxfU1VCTUlUX1NFTEVDVE9SID0gXCIuam9iLWFwcC1idG4gLmpkLWJ0bi1tb2JpbGUsIC5qb2ItYXBwLWJ0bnMgLmpkLWJ0bi1tb2JpbGVcIlxyXG4gIH1cclxuICBmb3JtYXRBbnN3ZXIoZSkge1xyXG4gICAgcmV0dXJuICgwLCBwLmZvcm1hdEFuc3dlcikoZSlcclxuICB9XHJcbiAgYXN5bmMgZmV0Y2hGb3JtQW5zd2VycyhlLCB0KSB7XHJcbiAgICBsZXQgciA9ICgwLCBwLnByZXBhcmVKb2JkaXZhQW5zd2VyUmVxdWVzdFJ1bGVzKShlKSxcclxuICAgICAgbiA9IGF3YWl0IHRoaXMucmVxdWVzdEZvcm1BbnN3ZXJzKHIsIHQpO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG4pIHJldHVybiBuO1xyXG4gICAgbiAmJiAodGhpcy5hbnN3ZXIgPSBuKVxyXG4gIH1cclxuICBnZXRGaWVsZEhhbmRsZXJzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2wuRklFTERfVFlQRS5URVhUXTogKGUsIHQpID0+IHtcclxuICAgICAgICBsZXQgciA9IHQ/LlswXTtcclxuICAgICAgICBpZiAobnVsbCAhPSByKSByZXR1cm4gKDAsIG0uZmlsbElucHV0VGV4dEZpZWxkKShlLiRpbnB1dCwgU3RyaW5nKHIgPz8gXCJcIikpXHJcbiAgICAgIH0sXHJcbiAgICAgIFtsLkZJRUxEX1RZUEUuU0VMRUNUXTogKGUsIHQpID0+ICgwLCBtLmZpbGxTZWxlY3RGaWVsZCkoZSwgdCksXHJcbiAgICAgIFtsLkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiAoZSwgdCkgPT4gKDAsIG0uZmlsbENoZWNrYm94RmllbGQpKGUsIHQpLFxyXG4gICAgICBbbC5GSUVMRF9UWVBFLlJBRElPR1JPVVBdOiAoZSwgdCkgPT4gKDAsIG0uZmlsbFJhZGlvR3JvdXBGaWxlZCkoZSwgdClcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0U2l0ZU5hbWUoKSB7XHJcbiAgICByZXR1cm4gXCJqb2JkaXZhXCJcclxuICB9XHJcbiAgaXNWaXNpYmxlKGUpIHtcclxuICAgIGlmICghZSkgcmV0dXJuICExO1xyXG4gICAgbGV0IHQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtcclxuICAgIHJldHVybiBcIm5vbmVcIiAhPT0gdC5kaXNwbGF5ICYmIFwiaGlkZGVuXCIgIT09IHQudmlzaWJpbGl0eSAmJiBlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoID4gMFxyXG4gIH1cclxuICBpc01vZGFsQWR2YW5jZUJ1dHRvbihlKSB7XHJcbiAgICBpZiAoIShlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gITE7XHJcbiAgICBsZXQgdCA9IChlLnRleHRDb250ZW50IHx8IGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgfHwgZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpIHx8IFwiXCIpXHJcbiAgICAgIC50cmltKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiAhIXQgJiYgXCJiYWNrXCIgIT09IHQgJiYgXCJjYW5jZWxcIiAhPT0gdCAmJiAoXCJuZXh0XCIgPT09IHQgfHwgXCJjb250aW51ZVwiID09PSB0IHx8XHJcbiAgICAgIFwic3VibWl0XCIgPT09IHQgfHwgXCJhcHBseVwiID09PSB0IHx8IFwic2F2ZVwiID09PSB0IHx8IHQuaW5jbHVkZXMoXCJuZXh0XCIpIHx8IHQuaW5jbHVkZXMoXHJcbiAgICAgICAgXCJjb250aW51ZVwiKSB8fCB0LmluY2x1ZGVzKFwic3VibWl0XCIpKVxyXG4gIH1cclxuICBnZXRBY3RpdmVNb2RhbFN1cmZhY2UoKSB7XHJcbiAgICBsZXQgZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC5zaG93IC5tb2RhbC1jb250ZW50XCIpKS5maWx0ZXIoZSA9PiB0aGlzXHJcbiAgICAgICAgLmlzVmlzaWJsZShlKSksXHJcbiAgICAgIHQgPSBlLmZpbHRlcihlID0+ICEhZS5xdWVyeVNlbGVjdG9yKFwiLmpvYi1hcHAtbWFpbiwgLmpkLWZvcm0tbGF5b3V0XCIpIHx8IEFycmF5LmZyb20oZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLCBbcm9sZT0nYnV0dG9uJ11cIikpLnNvbWUoZSA9PiB0aGlzLmlzTW9kYWxBZHZhbmNlQnV0dG9uKGUpKSksXHJcbiAgICAgIHIgPSB0W3QubGVuZ3RoIC0gMV07XHJcbiAgICByZXR1cm4gciA/IHtcclxuICAgICAgbW9kZTogXCJtb2RhbFwiLFxyXG4gICAgICByb290OiByXHJcbiAgICB9IDogbnVsbFxyXG4gIH1cclxuICBkZXRlY3RBY3RpdmVTdXJmYWNlKCkge1xyXG4gICAgbGV0IGUgPSB0aGlzLmdldEFjdGl2ZU1vZGFsU3VyZmFjZSgpO1xyXG4gICAgaWYgKGUpIHJldHVybiBlO1xyXG4gICAgbGV0IHQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtY29udGVudFwiKSkuZmlsdGVyKGUgPT4gdGhpcy5pc1Zpc2libGUoXHJcbiAgICAgICAgZSkgJiYgISFlLnF1ZXJ5U2VsZWN0b3IoXCIuam9iLWFwcC1tYWluXCIpKSxcclxuICAgICAgciA9IHRbdC5sZW5ndGggLSAxXTtcclxuICAgIGlmIChyKSByZXR1cm4ge1xyXG4gICAgICBtb2RlOiBcIm1vZGFsXCIsXHJcbiAgICAgIHJvb3Q6IHJcclxuICAgIH07XHJcbiAgICBsZXQgbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yb3dcIikpLmZpbmQoZSA9PiB0aGlzLmlzVmlzaWJsZShlKSAmJiAoISFlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmpkLXJlZy10aXRsZVwiKSB8fCAhIWUucXVlcnlTZWxlY3RvcihcIi5qZC1yZWctY2FyZFwiKSB8fCAhIWVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuamQtZm9ybS1sYXlvdXRcIikgfHwgISFlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuamQtYWN0aW9uY2FyZC5qZC1yZWctaW50cm9jYXJkXCIpIHx8ICEhZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpIHx8ICEhZVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5qZC1kcm9wem9uZVwiKSkpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuamQtcmVnLXRpdGxlXCIpPy5jbG9zZXN0KFxyXG4gICAgICBcIi5yb3dcIikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qZC1yZWctY2FyZFwiKT8uY2xvc2VzdChcIi5yb3dcIikgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vZGU6IFwicmVndWxhclwiLFxyXG4gICAgICByb290OiBuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc29sdmVNb2RhbFN1Ym1pdEJ1dHRvbihlKSB7XHJcbiAgICBpZiAoXCJtb2RhbFwiICE9PSB0aGlzLmFjdGl2ZVN1cmZhY2UubW9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGxldCB0ID0gZS5jbG9zZXN0KGIuTU9EQUxfU1VCTUlUX1NFTEVDVE9SKTtcclxuICAgICAgcmV0dXJuIHQgJiYgdGhpcy5hY3RpdmVTdXJmYWNlLnJvb3QuY29udGFpbnModCkgJiYgdC5jbGFzc0xpc3QuY29udGFpbnMoXCJqZC1idG4tbW9iaWxlXCIpID9cclxuICAgICAgICB0IDogbnVsbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlU3VyZmFjZS5yb290LnF1ZXJ5U2VsZWN0b3IoYi5NT0RBTF9TVUJNSVRfU0VMRUNUT1IpIHx8IG51bGxcclxuICB9XHJcbiAgZ2V0QWN0aXZlU3VibWl0QnV0dG9uKCkge1xyXG4gICAgaWYgKFwibW9kYWxcIiA9PT0gdGhpcy5hY3RpdmVTdXJmYWNlLm1vZGUpIHJldHVybiB0aGlzLnJlc29sdmVNb2RhbFN1Ym1pdEJ1dHRvbigpO1xyXG4gICAgbGV0IGUgPSBBcnJheS5mcm9tKHRoaXMuYWN0aXZlU3VyZmFjZS5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24uamQtYnRuXCIpKS5maWx0ZXIoZSA9PlxyXG4gICAgICB0aGlzLmlzVmlzaWJsZShlKSk7XHJcbiAgICByZXR1cm4gZVtlLmxlbmd0aCAtIDFdIHx8IG51bGxcclxuICB9XHJcbiAgZ2V0U3VibWl0VHJhY2tpbmdEZWxlZ2F0aW9uUm9vdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmFjdGl2ZVN1cmZhY2Uucm9vdCB8fCBudWxsXHJcbiAgfVxyXG4gIHJlc29sdmVEZWxlZ2F0ZWRTdWJtaXRCdXR0b24oZSkge1xyXG4gICAgaWYgKFwibW9kYWxcIiA9PT0gdGhpcy5hY3RpdmVTdXJmYWNlLm1vZGUpIHJldHVybiB0aGlzLnJlc29sdmVNb2RhbFN1Ym1pdEJ1dHRvbihlKTtcclxuICAgIGxldCB0ID0gZS5jbG9zZXN0KFwiYnV0dG9uLmpkLWJ0blwiKSxcclxuICAgICAgciA9IHRoaXMuZ2V0QWN0aXZlU3VibWl0QnV0dG9uKCk7XHJcbiAgICByZXR1cm4gdCAmJiByID09PSB0ID8gdCA6IG51bGxcclxuICB9XHJcbiAgYXN5bmMgZXh0cmFjdEZvcm1SdWxlcygpIHtcclxuICAgIGxldCBlID0gYXdhaXQgKDAsIGguZXh0cmFjdFJ1bGVzKSh0aGlzLmFjdGl2ZVN1cmZhY2Uucm9vdCwgdGhpcy5hY3RpdmVTdXJmYWNlLm1vZGUpO1xyXG4gICAgcmV0dXJuICgwLCBoLmV4Y2x1ZGVKb2JkaXZhU2lnbkluUnVsZXMpKGUsIHRoaXMuYWN0aXZlU3VyZmFjZS5yb290KVxyXG4gIH1cclxuICBhc3luYyBydW5QcmVGaWxsRm9ybSgpIHtcclxuICAgIFwicmVndWxhclwiID09PSB0aGlzLmFjdGl2ZVN1cmZhY2UubW9kZSAmJiAodGhpcy50YXNrUXVldWUuYWRkKCgpID0+ICgwLCBtLnByZUZpbGxGb3JtKSh0aGlzXHJcbiAgICAgIC5hY3RpdmVTdXJmYWNlLnJvb3QpKSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCkpO1xyXG4gICAgbGV0IGUgPSBhd2FpdCAoMCwgYy51c2VBdXRvZmlsbEluZm9TdG9yZSkuZ2V0U3RhdGUoKS5mZXRjaEF1dG9maWxsSW5mbygpO1xyXG4gICAgYXdhaXQgKDAsIG0ucHJlZmlsbENvdW50cnkpKHRoaXMuYWN0aXZlU3VyZmFjZS5yb290LCBlPy5sb2NhdGlvbj8uY291bnRyeSlcclxuICB9XHJcbiAgYXN5bmMgaGFuZGxlUmVzdW1lVXBsb2FkKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlVXBsb2FkUmVzdW1lID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIikgOiB0aGlzXHJcbiAgICAgIC50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCAoMCwgbS51cGxvYWRSZXN1bWUpKHRoaXMuYWN0aXZlU3VyZmFjZS5yb290LCB0aGlzLnJlc3VtZUluZm8sIHRoaXNcclxuICAgICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAgIC51cGRhdGVGaWxsZWRQcm9ncmVzcylcclxuICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KGUpIHtcclxuICAgIGlmIChcInJlZ3VsYXJcIiA9PT0gdGhpcy5hY3RpdmVTdXJmYWNlLm1vZGUpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5hbnN3ZXIuZWR1Y2F0aW9uKSAmJiB0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBlID0gYXdhaXQgKDAsIGguZ2V0RWR1Y2F0aW9uUnVsZXNGb3JSb290KSh0aGlzLmFjdGl2ZVN1cmZhY2Uucm9vdCk7XHJcbiAgICAgICAgaWYgKGUubGVuZ3RoICE9PSB0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoICYmIChhd2FpdCAoMCwgbVxyXG4gICAgICAgICAgICAuYWRkRWR1Y2F0aW9uU2VjdGlvbkZvclJvb3QpKHRoaXMuYWN0aXZlU3VyZmFjZS5yb290LCB0aGlzLmFuc3dlci5lZHVjYXRpb25cclxuICAgICAgICAgICAgLmxlbmd0aCksIGUgPSBhd2FpdCAoMCwgaC5nZXRFZHVjYXRpb25SdWxlc0ZvclJvb3QpKHRoaXMuYWN0aXZlU3VyZmFjZS5yb290KSksIGVcclxuICAgICAgICAgIC5sZW5ndGggIT09IHRoaXMuYW5zd2VyLmVkdWNhdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIltqb2JkaXZhIGZpbGxFZHVdIHNraXAgZmlsbCBiZWNhdXNlIGNvdW50cyBzdGlsbCBtaXNtYXRjaFwiLCB7XHJcbiAgICAgICAgICAgIGVkdVJ1bGVzTGVuOiBlLmxlbmd0aCxcclxuICAgICAgICAgICAgYW5zd2VyTGVuOiB0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0oMCwgcy5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykoXCJlZHVjYXRpb25cIiwgZSk7XHJcbiAgICAgICAgbGV0IHQgPSAoMCwgby5nZXRFZHVjYXRpb25PcGVyYXRpb25zKShlLCB0aGlzLmFuc3dlci5lZHVjYXRpb24sIHRoaXMub3BlcmF0aW9uQ29uZmlnLFxyXG4gICAgICAgICAgdm9pZCAwLCB7XHJcbiAgICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHQsXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkOiAoKSA9PiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVkdWNhdGlvblwiKSxcclxuICAgICAgICAgICAgb25Ta2lwcGVkOiAoKSA9PiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkVkdWNhdGlvblwiKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiB0KSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICAgICAgfVxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSkgJiYgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBlID0gYXdhaXQgKDAsIGguZ2V0RXhwZXJpZW5jZVJ1bGVzRm9yUm9vdCkodGhpcy5hY3RpdmVTdXJmYWNlLnJvb3QpO1xyXG4gICAgICAgIGlmIChlLmxlbmd0aCAhPT0gdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UubGVuZ3RoICYmIChhd2FpdCAoMCwgbVxyXG4gICAgICAgICAgICAuYWRkRW1wbG95bWVudFNlY3Rpb25Gb3JSb290KSh0aGlzLmFjdGl2ZVN1cmZhY2Uucm9vdCwgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2VcclxuICAgICAgICAgICAgLmxlbmd0aCksIGUgPSBhd2FpdCAoMCwgaC5nZXRFeHBlcmllbmNlUnVsZXNGb3JSb290KSh0aGlzLmFjdGl2ZVN1cmZhY2Uucm9vdCkpLCBlXHJcbiAgICAgICAgICAubGVuZ3RoICE9PSB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZS5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIltqb2JkaXZhIGZpbGxFeHBdIHNraXAgZmlsbCBiZWNhdXNlIGNvdW50cyBzdGlsbCBtaXNtYXRjaFwiLCB7XHJcbiAgICAgICAgICAgIGV4cFJ1bGVzTGVuOiBlLmxlbmd0aCxcclxuICAgICAgICAgICAgYW5zd2VyTGVuOiB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZS5sZW5ndGhcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSgwLCBzLnNldFNlY3Rpb25SZXN1bHRGb2N1c1J1bGVzKShcImVtcGxveW1lbnRcIiwgZSk7XHJcbiAgICAgICAgbGV0IHQgPSAoMCwgby5nZXRFbXBsb3ltZW50T3BlcmF0aW9ucykoZSwgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UsIHRoaXNcclxuICAgICAgICAgIC5vcGVyYXRpb25Db25maWcsIHZvaWQgMCwge1xyXG4gICAgICAgICAgICBvblNlY3Rpb25SZXN1bHRDaGFuZ2VkOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0LFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpLFxyXG4gICAgICAgICAgICBvblNraXBwZWQ6ICgpID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRW1wbG95bWVudFwiKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiB0KSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBmaWxsUmVndWxhckZpZWxkcyhlKSB7XHJcbiAgICBsZXQgdCA9IGUuZmlsdGVyKGUgPT4gZS50eXBlICE9PSBsLkZJRUxEX1RZUEUuU0VDVElPTiAmJlxyXG4gICAgICAgIFwiSSBjb25zZW50IHRvIHJlY2VpdmUgZW1wbG95bWVudC1yZWxhdGVkIHRleHQgbWVzc2FnZXMgdG8gdGhpcyBudW1iZXJcIiAhPT0gZS5sYWJlbCksXHJcbiAgICAgIHIgPSAoMCwgby5nZXRSZWd1bGFyT3BlcmF0aW9ucykodCwgdGhpcy5hbnN3ZXIucmVndWxhciwgdGhpcy5vcGVyYXRpb25Db25maWcpO1xyXG4gICAgZm9yIChsZXQgZSBvZiByKSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKTtcclxuICAgIGxldCBuID0gZS5maWx0ZXIoZSA9PiBlLnR5cGUgPT09IGwuRklFTERfVFlQRS5TRUNUSU9OICYmIFwiUGhvbmVcIiA9PT0gZS5sYWJlbCk7XHJcbiAgICBmb3IgKGxldCBlIG9mIG4pIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0ICgwLCBtLmZpbGxQaG9uZVNlY3Rpb25GaWVsZCkoZSwgdGhpcy5hbnN3ZXIucmVndWxhciwgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAudXBkYXRlRmlsbGVkUHJvZ3Jlc3MsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKVxyXG4gICAgfSk7XHJcbiAgICBuLmxlbmd0aCA+IDAgJiYgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBleHRyYWN0RWR1Y2F0aW9uRW1wbG95bWVudEFkZGl0aW9uYWwoZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgZWR1Y2F0aW9uOiB0LFxyXG4gICAgICBlbXBsb3ltZW50OiByXHJcbiAgICB9ID0gZSB8fCB7fTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVkdWNhdGlvbjogdCB8fCBbXSxcclxuICAgICAgZW1wbG95bWVudDogciB8fCBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBnZXRBdXRvZmlsbFNuYXBzaG90KGUpIHtcclxuICAgIGxldCB0ID0gKDAsIGguZ2V0Rm9ybVNuYXBzaG90KSh0aGlzLmFjdGl2ZVN1cmZhY2Uucm9vdCkgfHwge307XHJcbiAgICB0aGlzLmxhc3RGdWxsQXV0b2ZpbGxTbmFwc2hvdCA9IHQ7XHJcbiAgICBsZXQgciA9IHtcclxuICAgICAgLi4udFxyXG4gICAgfTtcclxuICAgIHJldHVybiBkZWxldGUgci5lZHVjYXRpb24sIGRlbGV0ZSByLmVtcGxveW1lbnQsIHJcclxuICB9XHJcbiAgYXN5bmMgZ2V0U3VibWl0U25hcHNob3QoKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBoLmdldEZvcm1TbmFwc2hvdCkodGhpcy5hY3RpdmVTdXJmYWNlLnJvb3QpIHx8IHt9O1xyXG4gICAgdGhpcy5sYXN0RnVsbFN1Ym1pdFNuYXBzaG90ID0gZTtcclxuICAgIGxldCB0ID0ge1xyXG4gICAgICAuLi5lXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRlbGV0ZSB0LmVkdWNhdGlvbiwgZGVsZXRlIHQuZW1wbG95bWVudCwgdFxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsQXV0b2ZpbGxTbmFwc2hvdERhdGEoZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXh0cmFjdEVkdWNhdGlvbkVtcGxveW1lbnRBZGRpdGlvbmFsKHRoaXMubGFzdEZ1bGxBdXRvZmlsbFNuYXBzaG90KVxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsU3VibWl0U25hcHNob3REYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXh0cmFjdEVkdWNhdGlvbkVtcGxveW1lbnRBZGRpdGlvbmFsKHRoaXMubGFzdEZ1bGxTdWJtaXRTbmFwc2hvdClcclxuICB9XHJcbiAgaXNSZXN1bWVVcGxvYWRPbmx5UGFnZShlKSB7XHJcbiAgICBpZiAoXCJyZWd1bGFyXCIgIT09IHRoaXMuYWN0aXZlU3VyZmFjZS5tb2RlKSByZXR1cm4gITE7XHJcbiAgICBsZXQgdCA9ICEhdGhpcy5hY3RpdmVTdXJmYWNlLnJvb3QucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKSB8fCAhIXRoaXNcclxuICAgICAgLmFjdGl2ZVN1cmZhY2Uucm9vdC5xdWVyeVNlbGVjdG9yKFwiLmpkLWRyb3B6b25lXCIpO1xyXG4gICAgcmV0dXJuICEhdCAmJiAwID09PSBlLmxlbmd0aFxyXG4gIH1cclxuICBhc3luYyB0cnlGaWxsU2lnbkluKCkge1xyXG4gICAgaWYgKGNvbnNvbGUuZGVidWcoXCJbSm9iRGl2YV0gc2lnbi1pbiBzdXJmYWNlIGNoZWNrXCIsIHtcclxuICAgICAgICBmb3VuZFNpZ25JbjogISEoMCwgZy5maW5kSm9iZGl2YVNpZ25JbkZpZWxkcykoKVxyXG4gICAgICB9KSwgKDAsIGcuZmluZEpvYmRpdmFTaWduSW5GaWVsZHMpKCkpIHtcclxuICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIuY2xlYXIoKSwgdGhpcy50YXNrUXVldWUuY2xlYXIoKTtcclxuICAgICAgbGV0IFtlLCB0XSA9IGF3YWl0IFByb21pc2UuYWxsKFsoMCwgYy51c2VBdXRvZmlsbEluZm9TdG9yZSkuZ2V0U3RhdGUoKVxyXG4gICAgICAuZmV0Y2hBdXRvZmlsbEluZm8oKSwgKDAsIGYuZ2V0V29ya2RheVNpZ251cEluZm9ybWF0aW9uKSgpLmNhdGNoKCgpID0+IG51bGwpXHJcbiAgICAgIF0pLCByID0gKDAsIGQucmVzb2x2ZVNpZ251cFJlZ2lzdHJhdGlvbkVtYWlsKShlKSwgbiA9IHQ/LnBhc3N3b3JkID8/IFwiXCIsIG8gPSBhd2FpdCAoMCwgZ1xyXG4gICAgICAgIC5maWxsSm9iZGl2YVNpZ25JbkNyZWRlbnRpYWxzKSh7XHJcbiAgICAgICAgZW1haWw6IHIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IG5cclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGUgb2YgKGNvbnNvbGUuaW5mbyhcIltKb2JEaXZhXSBzaWduLWluIGNyZWRlbnRpYWwgZmlsbFwiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBoYXNSZWdpc3RyYXRpb25FbWFpbDogISFyLFxyXG4gICAgICAgICAgaGFzTG9jYWxQYXNzd29yZDogISFuLFxyXG4gICAgICAgICAgZm91bmRGb3JtOiBvLmZvdW5kRm9ybSxcclxuICAgICAgICAgIGZpbGxlZFJvbGVzOiBvLmZpbGxlZFJvbGVzLFxyXG4gICAgICAgICAgc2tpcHBlZEV4aXN0aW5nUm9sZXM6IG8uc2tpcHBlZEV4aXN0aW5nUm9sZXMsXHJcbiAgICAgICAgICByZWplY3RlZFJvbGVzOiBvLnJlamVjdGVkUm9sZXNcclxuICAgICAgICB9KSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKFt7XHJcbiAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6ICEwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6IFwiUGFzc3dvcmRcIixcclxuICAgICAgICAgIHJlcXVpcmVkOiAhMFxyXG4gICAgICAgIH1dKSwgW1wiZW1haWxcIiwgXCJwYXNzd29yZFwiXSkpIHtcclxuICAgICAgICBsZXQgdCA9IFwiZW1haWxcIiA9PT0gZSA/IFwiRW1haWxcIiA6IFwiUGFzc3dvcmRcIjtcclxuICAgICAgICBvLmZpbGxlZFJvbGVzLmluY2x1ZGVzKGUpIHx8IG8uc2tpcHBlZEV4aXN0aW5nUm9sZXMuaW5jbHVkZXMoZSkgPyB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKHQpIDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3ModClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5maW5hbGl6ZUZpbGxGb3JtKClcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVN1cmZhY2UgPSB0aGlzLmRldGVjdEFjdGl2ZVN1cmZhY2UoKTtcclxuICAgIGxldCB0ID0gYXdhaXQgdGhpcy50cnlGaWxsU2lnbkluKCk7XHJcbiAgICBpZiAobnVsbCAhPT0gdCkgcmV0dXJuIHQ7XHJcbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVGaWxsRm9ybSgpLCB0aGlzLmFjdGl2ZVN1cmZhY2UgPSB0aGlzLmRldGVjdEFjdGl2ZVN1cmZhY2UoKTtcclxuICAgIGxldCByID0gYXdhaXQgdGhpcy50cnlGaWxsU2lnbkluKCk7XHJcbiAgICBpZiAobnVsbCAhPT0gcikgcmV0dXJuIHI7XHJcbiAgICBsZXQgbiA9IGF3YWl0IHRoaXMuZXh0cmFjdEZvcm1SdWxlcygpO1xyXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKG4pLCAwID09PSBuLmxlbmd0aCkge1xyXG4gICAgICBsZXQgZSA9IHRoaXMuaXNSZXN1bWVVcGxvYWRPbmx5UGFnZShuKTtcclxuICAgICAgcmV0dXJuIChjb25zb2xlLndhcm4oXCJbam9iZGl2YV0gc2tpcCBmaWxsLXYyOiBubyBleHRyYWN0ZWQgcnVsZXNcIiwge1xyXG4gICAgICAgIHN1cmZhY2VNb2RlOiB0aGlzLmFjdGl2ZVN1cmZhY2UubW9kZSxcclxuICAgICAgICBoYXNGb3JtTGF5b3V0OiAhIXRoaXMuYWN0aXZlU3VyZmFjZS5yb290LnF1ZXJ5U2VsZWN0b3IoXCIuamQtZm9ybS1sYXlvdXRcIiksXHJcbiAgICAgICAgaGFzUmVnaXN0cmF0aW9uQ2FyZDogISF0aGlzLmFjdGl2ZVN1cmZhY2Uucm9vdC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgXCIuamQtcmVnLXRpdGxlLCAuamQtcmVnLWNhcmRcIiksXHJcbiAgICAgICAgaGFzUmVzdW1lVXBsb2FkOiBlXHJcbiAgICAgIH0pLCBlKSA/IChhd2FpdCB0aGlzLmhhbmRsZVJlc3VtZVVwbG9hZCgpLCBhd2FpdCB0aGlzLmV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyhuKSwgdGhpc1xyXG4gICAgICAgIC5maW5hbGl6ZUZpbGxGb3JtKCkpIDogKCgwLCBpLnNlbmRIdHRwU3RhdHVzTWVzc2FnZSkodS5DVVNUT01fRVJST1JfQ09ERVNcclxuICAgICAgICAuTk9fRUxFTUVOVFMpLCB1LkNVU1RPTV9FUlJPUl9DT0RFUy5OT19FTEVNRU5UUylcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMuaGFuZGxlUmVzdW1lVXBsb2FkKCk7XHJcbiAgICBsZXQgbyA9IGF3YWl0IHRoaXMuZmV0Y2hGb3JtQW5zd2VycyhuLCBlKTtcclxuICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBvID8gKGNvbnNvbGUud2FybihcclxuICAgICAgXCJbam9iZGl2YSBmaWxsRm9ybV0gZWFybHkgcmV0dXJuIGR1ZSB0byBzdHJpbmcgYW5zd2VyOlwiLCBvKSwgbykgOiAoYXdhaXQgdGhpc1xyXG4gICAgICAuZmlsbFJlZ3VsYXJGaWVsZHMobiksIGF3YWl0IHRoaXMuZmlsbEVkdWNhdGlvbkFuZEVtcGxveW1lbnQobiksIGF3YWl0IHRoaXNcclxuICAgICAgLmV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyhuKSwgdGhpcy5maW5hbGl6ZUZpbGxGb3JtKCkpXHJcbiAgfVxyXG4gIHN1Ym1pdEFwcGxpY2F0aW9uKCkge1xyXG4gICAgdGhpcy5nZXRBY3RpdmVTdWJtaXRCdXR0b24oKT8uY2xpY2soKVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvciguLi5lKSB7XHJcbiAgICBzdXBlciguLi5lKSwgdGhpcy5hY3RpdmVTdXJmYWNlID0ge1xyXG4gICAgICBtb2RlOiBcInJlZ3VsYXJcIixcclxuICAgICAgcm9vdDogZG9jdW1lbnQuYm9keVxyXG4gICAgfSwgdGhpcy5sYXN0RnVsbEF1dG9maWxsU25hcHNob3QgPSBudWxsLCB0aGlzLmxhc3RGdWxsU3VibWl0U25hcHNob3QgPSBudWxsXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiam9iZGl2YS42YjMwZGM1Ny5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);