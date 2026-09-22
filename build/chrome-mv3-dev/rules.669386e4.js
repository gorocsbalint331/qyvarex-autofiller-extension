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
})({"hqIyH":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\JobScore\\rules.js",
    "bundleId": "4b01dbfa669386e4",
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
var j = z(require("4f7b018ca45dca96"));
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

},{"4f7b018ca45dca96":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"4kphn":[function(require,module,exports) {
/**
 * Parcel module id: 4QaIN
 * Resolved path: src/contents/sites/JobScore/rules.js
 * Dependencies:
 *   ./answers -> hq3DQ  =>  src/contents/sites/JobScore/answers.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractRules", ()=>p), n.export(r, "findRadioGroupByText", ()=>E), n.export(r, "extractEmploymentRules", ()=>P), n.export(r, "extractEducationRules", ()=>_), n.export(r, "getFormSnapshot", ()=>L), n.export(r, "extractIframeFormRules", ()=>U);
var o = e("~core/enums"), i = e("~utils/delay"), a = e("./answers");
function l(e1) {
    if ("TEXTAREA" !== e1.tagName) return !1;
    let t = e1;
    return null !== t.closest(".js-section-cover-letter") || null !== t.closest(".fr-box") || "ApplyFlowRichEditor" === t.getAttribute("j-component") || null !== t.closest('[role="application"]');
}
function s(e1) {
    let t = window.getComputedStyle(e1);
    if ("none" === t.display) return !!l(e1);
    if ("INPUT" === e1.tagName && "hidden" === e1.type || e1.closest("script")) return !1;
    let r1 = e1.closest('[data-display="preview"]');
    if (r1 || e1.classList.contains("js-hide") || e1.closest(".js-hide") || !l(e1) && (e1.classList.contains("hide") || e1.closest(".hide"))) return !1;
    let n = e1.closest(".js-referred-by-someone-container");
    if (n) return !1;
    let o = e1.closest("#source_referral, .referral-source");
    if (o) return !1;
    let i = e1;
    for(; i && i !== document.body;){
        let e1 = window.getComputedStyle(i), t = e1.display;
        if (i.classList.contains("js-area-loader")) {
            i = i.parentElement;
            continue;
        }
        if (i.hasAttribute("data-display") && "form" === i.getAttribute("data-display")) {
            if ("none" === t || "hidden" === e1.visibility || "0" === e1.opacity) return !1;
            i = i.parentElement;
            continue;
        }
        if (i.style && "none" === i.style.display || "none" === t) return !1;
        let r1 = i.getAttribute("style");
        if (r1 && /display\s*:\s*none/i.test(r1)) return !1;
        i = i.parentElement;
    }
    return !0;
}
function u(e1) {
    let t = e1;
    for(; t && t !== document.body;){
        if (t.classList.contains("js-area-loader")) {
            t = t.parentElement;
            continue;
        }
        let e1 = window.getComputedStyle(t);
        if (t.style?.display === "none" || "none" === e1.display || "hidden" === e1.visibility || "0" === e1.opacity) return !1;
        let r1 = t.getAttribute("style");
        if (r1 && /display\s*:\s*none/i.test(r1)) return !1;
        t = t.parentElement;
    }
    return !0;
}
function c(e1) {
    if (e1.classList.contains("hide") || e1.classList.contains("js-hide")) return !0;
    let t = window.getComputedStyle(e1);
    return e1.style?.display === "none" || "none" === t.display || "hidden" === t.visibility || "0" === t.opacity;
}
function d(e1) {
    let t = [], r1 = Array.from(e1.childNodes);
    if (0 === r1.length) return e1.textContent?.trim() || "";
    for (let e1 of r1){
        if (e1.nodeType === Node.TEXT_NODE) {
            t.push(e1.textContent || "");
            continue;
        }
        if (e1.nodeType === Node.ELEMENT_NODE) {
            let r1 = e1;
            c(r1) || t.push(d(r1));
        }
    }
    return t.join(" ").replace(/\s+/g, " ").trim();
}
function f(e1, t) {
    let r1 = (e1 || "").trim(), n = (t ?? "").trim();
    return r1.startsWith("candidate_card_source_") && !r1.includes("referral") || n.includes("candidate_card[source_") && !n.includes("referral");
}
async function p(e1, t = !1) {
    let r1 = [], n = document.querySelector(e1);
    if (!n && (t && (n = document.querySelector("form")), !n)) return r1;
    let o = n.querySelectorAll("input, select, textarea"), i = e1.includes("js-section-questions") || e1.includes("questions"), a = new Set;
    for (let e1 of o){
        let t = e1, n = t.id || "", o = t.getAttribute("name") || "", l = f(n, o);
        if (!l) {
            let e1 = t.closest("#source_referral, .referral-source");
            if (e1) continue;
            let r1 = n.toLowerCase(), i = o.toLowerCase();
            if (r1.includes("source_referral") || i.includes("source_referral")) continue;
        }
        if (l && !u(t) || !i && !s(t)) continue;
        if (i) {
            let e1 = t.closest('[data-context="custom-question-mc-details"], .js-oneline-textfield-for-multiple-choice-container'), r1 = t.classList.contains("js-other-field") || !!e1 || o.includes("candidate_answer_other[") || n.includes("candidate_answer_other_");
            if (r1) {
                e1?.classList.contains("hide") || t.classList.contains("hide") || null !== t.closest(".hide") || e1 && e1.closest(".hide"), e1 && "none" === window.getComputedStyle(e1).display || window.getComputedStyle(t).display;
                continue;
            }
        }
        if ("INPUT" === e1.tagName && "checkbox" === e1.type) {
            let e1 = t.closest('.js-checkbox-question[data-candidate-question-type="checkbox"]');
            if (e1) {
                if (a.has(e1)) continue;
                a.add(e1);
            }
        }
        let c = await b(t);
        c && r1.push(c);
    }
    return r1;
}
function m(e1) {
    if ("INPUT" === e1.tagName) {
        let t = e1;
        if (t.placeholder && t.placeholder.trim()) return t.placeholder.trim();
    } else if ("TEXTAREA" === e1.tagName) {
        let t = e1;
        if (t.placeholder && t.placeholder.trim()) return t.placeholder.trim();
    } else if ("SELECT" === e1.tagName) {
        let t = e1;
        if (t.options && t.options.length > 0) {
            let e1 = t.options[0];
            if (e1 && e1.textContent && e1.textContent.trim()) return e1.textContent.trim();
        }
    }
    if (e1.id && e1.id.trim()) return e1.id.trim();
    if ("name" in e1 && e1.name) {
        let t = e1.name;
        if (t && t.trim()) return t.trim();
    }
    return "";
}
function h(e1) {
    if ("INPUT" === e1.tagName) {
        let t = e1;
        if ("checkbox" === t.type) return t.checked ? "Yes" : "No";
        if ("radio" === t.type) {
            let e1 = document.querySelector(`input[type="radio"][name="${t.name}"]:checked`);
            return e1?.value || "";
        }
        return t.value || "";
    }
    if ("SELECT" === e1.tagName) {
        let t = e1;
        return t.options[t.selectedIndex]?.textContent?.trim() || "";
    }
    return "TEXTAREA" === e1.tagName && e1.value || "";
}
function g(e1) {
    let t = A(e1);
    if (t) {
        let r1 = d(t);
        if (r1) {
            let n = t.closest(".js-form-group"), o = e1.closest(".js-form-group");
            if (!n || !o || n === o) return r1;
        }
    }
    return m(e1) || null;
}
async function b(e1) {
    let t, r1, n = A(e1), i = "";
    if (n) i = d(n), t = n;
    else {
        if (!(i = m(e1))) return null;
        t = e1;
    }
    let a = n ? y(n) : y(t), l = null;
    if ("BUTTON" === e1.tagName && "listbox" === e1.getAttribute("aria-haspopup")) {
        r1 = o.FIELD_TYPE.LISTBOX, l = e1;
        let n = await T(e1);
        return {
            label: i,
            type: o.FIELD_TYPE.LISTBOX,
            required: a,
            options: n,
            $input: l,
            $label: t
        };
    }
    let s = e1.closest(".js-form-group");
    if (s) {
        let n = s.querySelector('[class*="multi-select"], [class*="multiselect"], [data-multi-select]');
        if (n && (n.contains(e1) || e1 === n)) {
            r1 = o.FIELD_TYPE.MULTI_SELECT, l = e1;
            let s = await F(n);
            return {
                label: i,
                type: o.FIELD_TYPE.MULTI_SELECT,
                required: a,
                options: s,
                $input: l,
                $label: t
            };
        }
    }
    if ("INPUT" === e1.tagName) {
        let n = e1;
        if ("checkbox" === n.type) {
            let l = n.closest('.js-checkbox-question[data-candidate-question-type="checkbox"]');
            if (l) {
                let e1 = C(l), r1 = l.closest('.js-col-md-6[data-context="custom-question-col"]'), n = i;
                if (r1) {
                    let e1 = r1.querySelector("label.js-control-label");
                    e1 && (n = e1.textContent?.trim() || i);
                }
                return l.querySelector('input[type="checkbox"]'), {
                    label: n,
                    type: o.FIELD_TYPE.SELECT,
                    required: a,
                    options: e1,
                    $input: l,
                    $label: r1?.querySelector("label.js-control-label") || t
                };
            }
            return r1 = o.FIELD_TYPE.CHECKBOX, x(e1), {
                label: i,
                type: o.FIELD_TYPE.CHECKBOX,
                required: a,
                options: [],
                $input: e1,
                $label: t,
                $checkboxs: []
            };
        }
        if ("radio" === n.type) {
            r1 = o.FIELD_TYPE.RADIOGROUP;
            let n = w(e1), l = S(n);
            return {
                label: i,
                type: o.FIELD_TYPE.RADIOGROUP,
                required: a,
                options: l,
                $input: e1,
                $label: t,
                $radioParent: n
            };
        }
        r1 = n.closest('[data-candidate-question-type="number"]') ? o.FIELD_TYPE.NUMBER : o.FIELD_TYPE.TEXT, l = n;
    } else if ("SELECT" === e1.tagName) {
        r1 = o.FIELD_TYPE.SELECT, l = e1;
        let n = await k(l);
        return {
            label: i,
            type: o.FIELD_TYPE.SELECT,
            required: a,
            options: n,
            $input: l,
            $label: t
        };
    } else {
        if ("TEXTAREA" !== e1.tagName) return null;
        r1 = o.FIELD_TYPE.TEXT, l = e1;
    }
    let u = {
        label: i,
        type: r1,
        required: a,
        $input: l,
        $label: t
    };
    return "What is your desired compensation?" === i && (u.description = "Please return the desired compensation as a number (digits only)"), "What salary are you seeking for this position?" === i && (u.description = "Please return the desired salary as a number (digits only)"), "What is your desired base salary?" === i && (u.description = "Please return the desired base salary as a number (digits only)"), "What is your desired salary range?" === i && (u.description = "Please return the desired base salary as a range, not an exact number."), u;
}
function y(e1) {
    if (e1 && e1.classList.contains("js-required")) return !0;
    let t = e1.textContent || "";
    if (t.includes("*") || t.includes("\u2731")) return !0;
    let r1 = e1.querySelector('[aria-required="true"], .required, [class*="required"]');
    if (r1) return !0;
    if ("INPUT" === e1.tagName || "SELECT" === e1.tagName || "TEXTAREA" === e1.tagName) {
        let t = e1;
        if (t.hasAttribute("required") || "true" === t.getAttribute("aria-required")) return !0;
        let r1 = e1.closest(".js-form-group");
        if (r1) {
            let e1 = r1.querySelector('.js-required, [class*="required"]');
            if (e1) return !0;
        }
    }
    return !1;
}
function v(e1) {
    return e1.querySelectorAll('.js-required, [required], *[aria-required="true"]').length > 0;
}
function w(e1) {
    if (e1.parentElement && (e1.parentElement.querySelector(`input[type="radio"][name="${e1.name}"]`) || e1.closest('[role="radiogroup"]'))) return e1.closest('[role="radiogroup"]') || e1.parentElement;
    let t = document.querySelectorAll(`input[type="radio"][name="${e1.name}"]`);
    return t.length > 0 ? t[0].parentElement || document.body : e1.parentElement || document.body;
}
function S(e1) {
    let t = e1.querySelectorAll('input[type="radio"]'), r1 = [];
    return t.forEach((e1)=>{
        let t = e1.id;
        if (t) {
            let e1 = document.querySelector(`label[for="${t}"]`);
            e1 && e1.textContent && r1.push(e1.textContent.trim());
        }
        if (e1.nextElementSibling?.nodeType === Node.ELEMENT_NODE) {
            let t = e1.nextElementSibling;
            "LABEL" === t.tagName && t.textContent && r1.push(t.textContent.trim());
        }
    }), r1;
}
_c = S;
function E(e1, t, r1) {
    let n = e1.querySelectorAll("*"), i = null;
    for (let e1 of Array.from(n)){
        let r1 = e1, n = r1.textContent || "";
        if (n.includes(t)) {
            if ("STRONG" === r1.tagName || "P" === r1.tagName) {
                i = r1;
                break;
            }
            i || (i = r1);
        }
    }
    if (!i) return null;
    let a = i.closest(".js-fieldset") || i.closest(".js-area-container") || e1, l = a.querySelector(r1);
    if (!l) return null;
    let s = Array.from(l.querySelectorAll('input[type="radio"]'));
    if (0 === s.length) return null;
    let u = S(l), c = i.textContent?.trim() || t;
    return {
        type: o.FIELD_TYPE.RADIOGROUP,
        label: c,
        required: v(l),
        $label: i,
        options: u,
        $radioParent: l,
        $input: s.length > 0 ? s[0] : l
    };
}
_c1 = E;
function x(e1) {
    let t = [], r1 = e1.querySelectorAll('input[type="checkbox"]');
    return r1.forEach((e1)=>{
        t.push(e1.textContent?.trim() || "");
    }), t;
}
function C(e1) {
    let t = [], r1 = e1.querySelectorAll('input[type="checkbox"]');
    return r1.forEach((e1)=>{
        let r1 = e1, n = r1.id;
        if (n) {
            let e1 = document.querySelector(`label[for="${n}"]`);
            if (e1 && e1.textContent) {
                let r1 = e1.textContent.trim();
                r1 && t.push(r1);
            }
        }
        if (!n || !document.querySelector(`label[for="${n}"]`)) {
            let e1 = r1.closest(".js-checkbox-container");
            if (e1) {
                let r1 = e1.querySelector("label.js-control-label");
                if (r1 && r1.textContent) {
                    let e1 = r1.textContent.trim();
                    e1 && !t.includes(e1) && t.push(e1);
                }
            }
        }
    }), t;
}
_c2 = C;
function A(e1) {
    let t = e1.id;
    if (t) {
        let e1 = document.querySelector(`label[for="${t}"]`);
        if (e1) return e1;
    }
    let r1 = e1.closest(".js-form-group");
    if (r1) {
        let e1 = r1.querySelector("label.js-control-label");
        if (e1) return e1;
    }
    let n = e1.closest(".js-section-cover-letter, .js-area-container");
    if (n) {
        let t = n.querySelector(".js-area-heading span");
        if (t && t.textContent?.trim()) return t;
        let r1 = n.querySelector(".js-no-header-label-container span");
        if (r1 && r1.textContent?.trim()) return r1;
        let o = Array.from(n.querySelectorAll("span"));
        for (let t of o){
            let r1 = t.textContent?.trim();
            if (r1 && !t.classList.contains("fr-sr-only") && null !== t.offsetParent && e1.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING) return t;
        }
    }
    let o = e1.parentElement;
    for(; o;){
        let t = Array.from(o.querySelectorAll("label.js-control-label")), r1 = null;
        for (let n of t)o.contains(n) && o.contains(e1) && e1.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING && (r1 ? (e1.compareDocumentPosition(r1), e1.compareDocumentPosition(n), n.compareDocumentPosition(r1) & Node.DOCUMENT_POSITION_FOLLOWING && (r1 = n)) : r1 = n);
        if (r1) return r1;
        o = o.parentElement;
    }
    let i = e1.previousElementSibling;
    for(; i;){
        if ("LABEL" === i.tagName || "SPAN" === i.tagName && i.textContent?.trim() && !i.classList.contains("fr-sr-only")) return i;
        i = i.previousElementSibling;
    }
    let a = e1.closest("label");
    return a || null;
}
_c3 = A;
async function k(e1) {
    let t = [];
    return "SELECT" === e1.tagName && Array.from(e1.options).forEach((e1)=>{
        e1.value && "" !== e1.value && t.push(e1.textContent?.trim() || e1.value);
    }), t;
}
async function T(e1) {
    let t = [];
    try {
        let r1 = e1.getAttribute("aria-controls"), n = null;
        if (r1 && (n = document.getElementById(r1)), !n) {
            let e1 = document.querySelectorAll('ul[role="listbox"], div[role="listbox"]');
            for (let t of Array.from(e1)){
                let e1 = t;
                if (null !== e1.offsetParent) {
                    n = e1;
                    break;
                }
            }
        }
        if (n && null !== n.offsetParent || (e1.click(), await (0, i.delay)(300), r1 && (n = document.getElementById(r1)), n || (n = document.querySelector('ul[role="listbox"], div[role="listbox"]'))), n) {
            let r1 = n.querySelectorAll('li[role="option"], div[role="option"], option');
            r1.forEach((e1)=>{
                let r1 = e1.textContent?.trim();
                r1 && "" !== r1 && t.push(r1);
            }), "true" === e1.getAttribute("aria-expanded") && (e1.click(), await (0, i.delay)(100));
        }
    } catch (e1) {}
    return t;
}
_c4 = T;
async function F(e1) {
    let t = [];
    try {
        let r1 = e1.querySelectorAll('li[role="option"], div[role="option"], option, [class*="option"]');
        if (r1.forEach((e1)=>{
            let r1 = e1.textContent?.trim();
            r1 && "" !== r1 && t.push(r1);
        }), 0 === t.length) {
            let r1 = e1.querySelector('input, button, [role="combobox"]');
            if (r1) {
                r1.click(), await (0, i.delay)(300);
                let e1 = document.querySelectorAll('li[role="option"], div[role="option"], option, [class*="option"]');
                e1.forEach((e1)=>{
                    let r1 = e1.textContent?.trim();
                    r1 && "" !== r1 && t.push(r1);
                }), r1 && (r1.click(), await (0, i.delay)(100));
            }
        }
    } catch (e1) {}
    return t;
}
_c5 = F;
function I(e1) {
    switch(e1.tagName){
        case "INPUT":
            {
                let t = e1.type.toLowerCase();
                if ("checkbox" === t) return o.FIELD_TYPE.CHECKBOX;
                if ("radio" === t) return o.FIELD_TYPE.RADIOGROUP;
                return o.FIELD_TYPE.TEXT;
            }
        case "SELECT":
            return o.FIELD_TYPE.SELECT;
        default:
            return o.FIELD_TYPE.TEXT;
    }
}
_c6 = I;
async function j(e1, t, r1) {
    let n = {
        label: t,
        type: r1,
        required: e1.required,
        $label: e1,
        $input: e1
    };
    if (r1 === o.FIELD_TYPE.SELECT && "SELECT" === e1.tagName) {
        let r1 = e1, o = (0, a.isDateSelectField)(r1, (r1.name || "").toLowerCase(), t.toLowerCase());
        o || (n.options = await k(r1));
    }
    return n;
}
function D(e1) {
    return e1.map((e1)=>{
        let t = {
            type: e1.type,
            label: e1.label
        };
        if ((e1.type === o.FIELD_TYPE.SELECT || e1.type === o.FIELD_TYPE.CHECKBOX || e1.type === o.FIELD_TYPE.RADIOGROUP) && "options" in e1 && Array.isArray(e1.options)) {
            let r1 = e1.options;
            r1.length > 0 && "string" == typeof r1[0] && (t.options = r1);
        }
        return e1.type === o.FIELD_TYPE.DATE && "description" in e1 && (t.description = e1.description), t;
    });
}
_c7 = D;
async function P(e1) {
    let t = [], r1 = document.querySelector(e1);
    if (!r1) return t;
    async function n(e1) {
        let t = m(e1);
        return t ? await j(e1, t, I(e1)) : null;
    }
    let i = Array.from(r1.querySelectorAll('input[name="title"]'));
    if (0 === i.length) return t;
    for(let e1 = 0; e1 < i.length; e1++){
        let r1 = i[e1], a = r1.closest(".employer_wrapper");
        if (!a) continue;
        let l = Array.from(a.querySelectorAll('input[name="title"]')), s = l.indexOf(r1);
        l.length;
        let u = r1.closest(".js-experience-row");
        if (!u) continue;
        let c = [], d = new Set, f = Array.from(u.querySelectorAll("input, select, textarea"));
        for (let e1 of f){
            if (d.has(e1)) continue;
            let t = await n(e1);
            t && (c.push(t), d.add(e1));
        }
        if (0 === s) {
            let e1 = Array.from(a.querySelectorAll("input, select, textarea")).filter((e1)=>{
                let t = e1.getAttribute("name")?.toLowerCase() || "";
                return t.includes("employer") || t.includes("company");
            });
            for (let t of e1){
                if (d.has(t)) continue;
                let e1 = await n(t);
                e1 && (c.unshift(e1), d.add(t));
            }
        }
        if (0 === c.length) continue;
        let p = D(c), m = c.some((e1)=>e1.required), h = {
            label: "Employment",
            children: c,
            required: m,
            type: o.FIELD_TYPE.EMPLOYMENT,
            options: p
        };
        t.push(h);
    }
    return t;
}
_c8 = P;
async function _(e1) {
    let t = [], r1 = document.querySelector(e1);
    if (!r1) return t;
    async function n(e1) {
        let t = m(e1);
        if ("SELECT" === e1.tagName) {
            let r1 = e1, n = r1.name?.toLowerCase() || "";
            n.includes("graduation_date") || n.includes("graduation") ? t = "End" : (n.includes("degree_id") || n.includes("degree") && !n.includes("major")) && (t = "Degree");
        }
        if ("INPUT" === e1.tagName) {
            let r1 = e1, n = r1.name?.toLowerCase() || "";
            n.includes("school") ? t = "School" : n.includes("major") && (t = "Major");
        }
        return t ? await j(e1, t, I(e1)) : null;
    }
    let i = Array.from(r1.querySelectorAll('[data-context="education-row"]'));
    if (0 === i.length) return t;
    for(let e1 = 0; e1 < i.length; e1++){
        let r1 = i[e1], a = r1.querySelectorAll("input, select, textarea"), l = [];
        for (let e1 of a){
            let t = e1;
            if (!s(t)) continue;
            let r1 = await n(t);
            r1 && l.push(r1);
        }
        if (0 === l.length) continue;
        let u = D(l), c = l.some((e1)=>e1.required), d = {
            label: "Education",
            children: l,
            required: c,
            type: o.FIELD_TYPE.EDUCATION,
            options: u
        };
        t.push(d);
    }
    return t;
}
async function L() {
    let e1 = {}, t = document.querySelectorAll("input, select, textarea"), r1 = new Set, n = new Set;
    for (let o of t){
        let t = o;
        if (t.closest(".js-area-container.experience") || t.closest(".js-area-container.education")) continue;
        let i = t.id ?? "", a = t.name ?? "", l = f(String(i), String(a));
        if (!l && t.closest("#source_referral, .referral-source") || l && !u(t)) continue;
        let c = null !== t.closest(".js-section-questions");
        if (!c && !l && !s(t)) continue;
        if (c) {
            let e1 = t.closest('[data-context="custom-question-mc-details"], .js-oneline-textfield-for-multiple-choice-container'), r1 = t.classList.contains("js-other-field") || !!e1;
            if (r1) {
                let r1 = e1?.classList.contains("hide") || t.classList.contains("hide") || null !== t.closest(".hide") || e1 && null !== e1.closest(".hide"), n = e1 && "none" === window.getComputedStyle(e1).display || "none" === window.getComputedStyle(t).display;
                if (r1 || n || !s(t)) continue;
            }
        }
        if (c && "INPUT" === t.tagName && "checkbox" === t.type) {
            let o = t.closest('.js-checkbox-question[data-candidate-question-type="checkbox"]');
            if (o) {
                if (n.has(o)) continue;
                n.add(o);
                let r1 = o.closest('.js-col-md-6[data-context="custom-question-col"]'), i = r1?.querySelector("label.js-control-label"), a = i?.textContent?.trim() || g(t) || "";
                if (!a) continue;
                let l = [], s = Array.from(o.querySelectorAll('input[type="checkbox"]'));
                for (let e1 of s){
                    if (!e1.checked) continue;
                    let t = e1.id, r1 = "";
                    if (t) {
                        let e1 = document.querySelector(`label[for="${t}"]`);
                        r1 = e1?.textContent?.trim() || "";
                    }
                    r1 || (r1 = e1.value || ""), r1 && l.push(r1);
                }
                l.length > 0 && (e1[a] = l.join(", "));
                continue;
            }
            let i = t.closest('.js-col-md-6[data-context="custom-question-col"]'), a = i?.querySelector("label.js-control-label"), l = a?.textContent?.trim() || g(t) || "";
            if (l) {
                let n = t, o = "";
                if (n.id) {
                    let e1 = document.querySelector(`label[for="${n.id}"]`);
                    o = e1?.textContent?.trim() || "";
                }
                e1[l] = n.checked ? o || "Yes" : "No", r1.add(t);
                continue;
            }
        }
        if (r1.has(t)) continue;
        let d = g(t);
        if (!d) continue;
        let p = h(t);
        if (p) {
            if (void 0 !== e1[d] && e1[d] !== p) {
                let r1 = t.name;
                if (r1) {
                    let t = `${d} (${r1})`;
                    e1[t] = p;
                } else {
                    let r1 = t.id;
                    r1 ? e1[`${d} (${r1})`] = p : e1[d] = p;
                }
            } else e1[d] = p;
        }
        r1.add(t);
    }
    let o = document.querySelector(".js-area-container.experience[data-display='form']") || document.querySelector(".js-area-container.experience[data-display='preview']") || document.querySelector(".js-area-container.experience");
    if (o) {
        let t = Array.from(o.querySelectorAll('input[name="title"]')), r1 = [];
        for(let e1 = 0; e1 < t.length; e1++){
            let n = t[e1], o = n.closest(".employer_wrapper");
            if (!o) continue;
            let i = n.closest(".js-experience-row");
            if (!i) continue;
            let a = Array.from(o.querySelectorAll('input[name="title"]')), l = a.indexOf(n), s = {}, u = new Set, c = Array.from(i.querySelectorAll("input, select, textarea"));
            for (let e1 of c){
                if (u.has(e1)) continue;
                let t = m(e1), r1 = e1.name?.toLowerCase() || "";
                if (r1.includes("title") ? t = "Title" : r1.includes("position_start_date") || r1.includes("start") && !r1.includes("end") ? t = "Start" : (r1.includes("position_end_date") || r1.includes("end") && !r1.includes("start")) && (t = "End"), t) {
                    let r1 = h(e1);
                    r1 && (s[t] = r1);
                }
                u.add(e1);
            }
            if (0 === l) {
                let e1 = Array.from(o.querySelectorAll("input, select, textarea")).filter((e1)=>{
                    let t = e1.getAttribute("name")?.toLowerCase() || "";
                    return t.includes("employer") || t.includes("company");
                });
                for (let t of e1){
                    if (u.has(t)) continue;
                    let e1 = m(t), r1 = t.name?.toLowerCase() || "";
                    if ((r1.includes("employer") || r1.includes("company")) && (e1 = "Employer"), e1) {
                        let r1 = h(t);
                        r1 && (s[e1] = r1);
                    }
                    u.add(t);
                }
            }
            Object.keys(s).length > 0 && r1.push(s);
        }
        r1.length > 0 && (e1.employment = r1);
    }
    let i = document.querySelector('.js-area-container.education[data-display="preview"]'), a = document.querySelector('.js-area-container.education[data-display="form"]'), l = (e1)=>{
        let t = Array.from(e1.querySelectorAll('[data-context="education-row"]'));
        if (t.length > 0) return t;
        let r1 = Array.from(e1.querySelectorAll(".js-education-row, .education-row, .education_row, .edu-row, .edu_row"));
        if (r1.length > 0) return r1;
        let n = Array.from(e1.querySelectorAll("input[name], select[name], textarea[name]")), o = new Set;
        for (let e1 of n){
            let t = e1.name?.toLowerCase?.() || "";
            if (!t.includes("school") && !t.includes("major") && !t.includes("degree") && !t.includes("graduation") && !t.includes("education")) continue;
            let r1 = e1.closest("[data-context]") || e1.closest(".js-form-row, .js-row, .row") || e1.closest("li, tr, fieldset");
            r1 && o.add(r1);
        }
        return o.size > 0 ? Array.from(o) : [
            e1
        ];
    }, c = (e1)=>{
        if (!e1) return [];
        let t = [];
        for (let r1 of l(e1)){
            let e1 = r1.querySelectorAll("input, select, textarea"), n = {};
            for (let t of e1){
                let e1 = t;
                if ("INPUT" === e1.tagName && "hidden" === e1.type) continue;
                let r1 = m(e1), o = e1.name?.toLowerCase() || "";
                "SELECT" === e1.tagName ? o.includes("graduation_date") || o.includes("graduation") ? r1 = "End" : (o.includes("degree_id") || o.includes("degree") && !o.includes("major")) && (r1 = "Degree") : "INPUT" === e1.tagName && (o.includes("school") ? r1 = "School" : o.includes("major") && (r1 = "Major"));
                let i = h(e1);
                r1 && i && (n[r1] = i);
            }
            "string" == typeof n.School && n.School.trim() && t.push(n);
        }
        return t;
    }, d = (e1)=>{
        if (!e1) return [];
        let t = [], r1 = Array.from(e1.querySelectorAll('.js-row[data-context="area-content"]'));
        for (let e1 of r1){
            let r1 = {}, n = (e1.textContent?.trim() || "").match(/\b(19|20)\d{2}\b/);
            n && (r1.End = n[0]);
            let o = e1.querySelector("strong")?.textContent?.trim() || "";
            o && (r1.School = o);
            let i = e1.querySelector(".js-form-group")?.textContent?.replace(/\s+/g, " ").trim() || "";
            if (i) {
                let e1 = i.match(/^(.*?)\s+in\s+(.*)$/i);
                if (e1) {
                    let t = e1[1]?.trim(), n = e1[2]?.trim();
                    t && (r1.Degree = t), n && (r1.Major = n);
                } else r1.Degree = i;
            }
            Object.keys(r1).length > 0 && t.push(r1);
        }
        return t;
    }, p = document.querySelector(".js-area-container.education"), b = c(a || (p?.getAttribute("data-display") !== "preview" ? p : null)), y = b.length > 0 ? b : d(i || (p?.getAttribute("data-display") === "preview" ? p : null));
    return y.length > 0 && (e1.education = y), e1;
}
_c9 = L;
function R(e1, t, r1) {
    if (!e1) return null;
    let n = null;
    (n = e1.querySelector("span.js-required")) || (n = e1.querySelector(".js-area-heading .js-required")), n || (n = e1.querySelector(".js-area-heading")), n || (n = e1.querySelector("strong"));
    let i = e1.querySelector(r1);
    if (!i) return null;
    let a = Array.from(i.querySelectorAll('input[type="radio"]'));
    if (0 === a.length) return null;
    let l = [];
    a.forEach((e1)=>{
        let t = null, r1 = e1.id;
        if (r1) {
            let e1 = i.querySelector(`label[for="${r1}"]`) || document.querySelector(`label[for="${r1}"]`);
            e1 && e1.textContent && (t = e1.textContent.trim());
        }
        if (!t && e1.nextElementSibling?.nodeType === Node.ELEMENT_NODE) {
            let r1 = e1.nextElementSibling;
            "LABEL" === r1.tagName && r1.textContent && (t = r1.textContent.trim());
        }
        if (!t) {
            let n = e1.closest(".js-row, .js-col-md-12, div");
            if (n) {
                let e1 = n.querySelector(`label[for="${r1}"]`) || n.querySelector("label");
                e1 && e1.textContent && (t = e1.textContent.trim());
            }
        }
        t && !l.includes(t) && l.push(t);
    });
    let s = t;
    if (n) {
        if ("SPAN" === n.tagName && n.classList.contains("js-required")) s = n.textContent?.trim() || t;
        else {
            let e1 = n.querySelector("span.js-required");
            s = e1 ? e1.textContent?.trim() || t : n.textContent?.trim() || t;
        }
    }
    return {
        type: o.FIELD_TYPE.RADIOGROUP,
        label: s,
        required: v(e1),
        $label: n || e1,
        options: l,
        $radioParent: i,
        $input: a.length > 0 ? a[0] : i
    };
}
_c10 = R;
let O = {
    gender: "#genderSection",
    race: "#raceSection",
    protectedVeteran: '[data-context-invalidate="protected_veteran_id"]',
    disability: "#desabilitySection",
    disabilityRadio: '[data-context-invalidate="disability2014_id"]',
    fullName: "#candidate_card_full_name"
};
function M(e1) {
    let t = e1.querySelector(O.gender);
    return t ? R(t, "Gender", '[data-context-invalidate="gender_id"]') : null;
}
_c11 = M;
function N(e1) {
    let t = e1.querySelector(O.race);
    return t ? R(t, "Race/Ethnic Identification", '[data-context-invalidate="race_id"]') : null;
}
_c12 = N;
function $(e1) {
    let t = e1.querySelector(O.protectedVeteran);
    if (!t) return null;
    let r1 = t.closest("li"), n = t.closest(".js-fieldset") || r1?.closest(".js-fieldset") || t.closest(".js-area-container") || r1;
    if (!n) return null;
    let o = "Protected Veteran";
    if (r1) {
        let e1 = r1.cloneNode(!0), t = e1.querySelector(O.protectedVeteran);
        t && t.remove(), o = (e1.textContent?.trim() || "").replace(/\s+/g, " ").trim() || o;
    }
    let i = R(n, o, O.protectedVeteran);
    return i && r1 && "Protected Veteran" !== o && (i.label = o, i.$label = r1), i;
}
function B(e1) {
    let t = e1.querySelector(O.disability) || e1.querySelector(O.disabilityRadio)?.closest(".js-area-container");
    if (!t) return null;
    let r1 = R(t, "How do I know if I have a disability?", O.disabilityRadio);
    if (r1) {
        let e1 = Array.from(t.querySelectorAll("*")).find((e1)=>(e1.textContent || "").includes("How do I know if I have a disability?"));
        e1 && (r1.label = "How do I know if I have a disability?", r1.$label = e1);
    }
    return r1;
}
_c13 = B;
function q(e1) {
    let t = e1.querySelector(O.fullName);
    if (!t) return null;
    let r1 = null, n = "Your Name", i = t.closest(".js-row");
    if (i) {
        let e1 = i.previousElementSibling;
        for(; e1;){
            let t = e1.textContent?.trim() || "";
            if ("Your Name" === t || t.includes("Your Name") && t.length < 50) {
                let t = e1.querySelector(".js-col-md-12, div") || e1;
                r1 = t, n = t.textContent?.trim() || "Your Name";
                break;
            }
            e1 = e1.previousElementSibling;
        }
    }
    if (!r1) {
        let e1 = t.closest(".js-fieldset, .js-area-container");
        if (e1) for (let o of Array.from(e1.querySelectorAll(".js-row, div"))){
            let e1 = o.textContent?.trim() || "";
            if (("Your Name" === e1 || e1.includes("Your Name") && e1.length < 50) && o.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING) {
                r1 = o, n = e1;
                break;
            }
        }
    }
    let a = t.hasAttribute("required") || "true" === t.getAttribute("aria-required") || r1?.querySelector(".js-required, [required]") !== null;
    return {
        label: n,
        type: o.FIELD_TYPE.TEXT,
        required: a,
        $input: t,
        $label: r1 || t.closest(".js-form-group") || t
    };
}
async function U() {
    let e1 = document.querySelector("form#eeoOfccpForm");
    if (!e1) return [];
    let t = [], r1 = M(e1);
    r1 && t.push(r1);
    let n = N(e1);
    n && t.push(n);
    let o = $(e1);
    o && t.push(o);
    let i = B(e1);
    i && t.push(i);
    let a = q(e1);
    return a && t.push(a), t;
}
_c14 = U;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");
$RefreshReg$(_c8, "P");
$RefreshReg$(_c9, "L");
$RefreshReg$(_c10, "R");
$RefreshReg$(_c11, "M");
$RefreshReg$(_c12, "N");
$RefreshReg$(_c13, "B");
$RefreshReg$(_c14, "U");

},{}]},["hqIyH","4kphn"], "4kphn", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LElBQUksSUFBRSxFQUFFO0lBQUcsT0FBTyxLQUFHLEVBQUUsS0FBSyxJQUFHO0FBQUM7T0FBMU0iLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTU4YWQ3YWRlYTY2NDJlYjIuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvSm9iU2NvcmUvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcSm9iU2NvcmVcXFxccnVsZXMuanNcIixcImJ1bmRsZUlkXCI6XCI0YjAxZGJmYTY2OTM4NmU0XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogNFFhSU5cclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL0pvYlNjb3JlL3J1bGVzLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuL2Fuc3dlcnMgLT4gaHEzRFEgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvSm9iU2NvcmUvYW5zd2Vycy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcImV4dHJhY3RSdWxlc1wiLCgpPT5wKSxuLmV4cG9ydChyLFwiZmluZFJhZGlvR3JvdXBCeVRleHRcIiwoKT0+RSksbi5leHBvcnQocixcImV4dHJhY3RFbXBsb3ltZW50UnVsZXNcIiwoKT0+UCksbi5leHBvcnQocixcImV4dHJhY3RFZHVjYXRpb25SdWxlc1wiLCgpPT5fKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9PkwpLG4uZXhwb3J0KHIsXCJleHRyYWN0SWZyYW1lRm9ybVJ1bGVzXCIsKCk9PlUpO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+dXRpbHMvZGVsYXlcIiksYT1lKFwiLi9hbnN3ZXJzXCIpO2Z1bmN0aW9uIGwoZSl7aWYoXCJURVhUQVJFQVwiIT09ZS50YWdOYW1lKXJldHVybiExO2xldCB0PWU7cmV0dXJuIG51bGwhPT10LmNsb3Nlc3QoXCIuanMtc2VjdGlvbi1jb3Zlci1sZXR0ZXJcIil8fG51bGwhPT10LmNsb3Nlc3QoXCIuZnItYm94XCIpfHxcIkFwcGx5Rmxvd1JpY2hFZGl0b3JcIj09PXQuZ2V0QXR0cmlidXRlKFwiai1jb21wb25lbnRcIil8fG51bGwhPT10LmNsb3Nlc3QoJ1tyb2xlPVwiYXBwbGljYXRpb25cIl0nKX1mdW5jdGlvbiBzKGUpe2xldCB0PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpO2lmKFwibm9uZVwiPT09dC5kaXNwbGF5KXJldHVybiEhbChlKTtpZihcIklOUFVUXCI9PT1lLnRhZ05hbWUmJlwiaGlkZGVuXCI9PT1lLnR5cGV8fGUuY2xvc2VzdChcInNjcmlwdFwiKSlyZXR1cm4hMTtsZXQgcj1lLmNsb3Nlc3QoJ1tkYXRhLWRpc3BsYXk9XCJwcmV2aWV3XCJdJyk7aWYocnx8ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1oaWRlXCIpfHxlLmNsb3Nlc3QoXCIuanMtaGlkZVwiKXx8IWwoZSkmJihlLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIil8fGUuY2xvc2VzdChcIi5oaWRlXCIpKSlyZXR1cm4hMTtsZXQgbj1lLmNsb3Nlc3QoXCIuanMtcmVmZXJyZWQtYnktc29tZW9uZS1jb250YWluZXJcIik7aWYobilyZXR1cm4hMTtsZXQgbz1lLmNsb3Nlc3QoXCIjc291cmNlX3JlZmVycmFsLCAucmVmZXJyYWwtc291cmNlXCIpO2lmKG8pcmV0dXJuITE7bGV0IGk9ZTtmb3IoO2kmJmkhPT1kb2N1bWVudC5ib2R5Oyl7bGV0IGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUoaSksdD1lLmRpc3BsYXk7aWYoaS5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1hcmVhLWxvYWRlclwiKSl7aT1pLnBhcmVudEVsZW1lbnQ7Y29udGludWV9aWYoaS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWRpc3BsYXlcIikmJlwiZm9ybVwiPT09aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpc3BsYXlcIikpe2lmKFwibm9uZVwiPT09dHx8XCJoaWRkZW5cIj09PWUudmlzaWJpbGl0eXx8XCIwXCI9PT1lLm9wYWNpdHkpcmV0dXJuITE7aT1pLnBhcmVudEVsZW1lbnQ7Y29udGludWV9aWYoaS5zdHlsZSYmXCJub25lXCI9PT1pLnN0eWxlLmRpc3BsYXl8fFwibm9uZVwiPT09dClyZXR1cm4hMTtsZXQgcj1pLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO2lmKHImJi9kaXNwbGF5XFxzKjpcXHMqbm9uZS9pLnRlc3QocikpcmV0dXJuITE7aT1pLnBhcmVudEVsZW1lbnR9cmV0dXJuITB9ZnVuY3Rpb24gdShlKXtsZXQgdD1lO2Zvcig7dCYmdCE9PWRvY3VtZW50LmJvZHk7KXtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImpzLWFyZWEtbG9hZGVyXCIpKXt0PXQucGFyZW50RWxlbWVudDtjb250aW51ZX1sZXQgZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KTtpZih0LnN0eWxlPy5kaXNwbGF5PT09XCJub25lXCJ8fFwibm9uZVwiPT09ZS5kaXNwbGF5fHxcImhpZGRlblwiPT09ZS52aXNpYmlsaXR5fHxcIjBcIj09PWUub3BhY2l0eSlyZXR1cm4hMTtsZXQgcj10LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO2lmKHImJi9kaXNwbGF5XFxzKjpcXHMqbm9uZS9pLnRlc3QocikpcmV0dXJuITE7dD10LnBhcmVudEVsZW1lbnR9cmV0dXJuITB9ZnVuY3Rpb24gYyhlKXtpZihlLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIil8fGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtaGlkZVwiKSlyZXR1cm4hMDtsZXQgdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtyZXR1cm4gZS5zdHlsZT8uZGlzcGxheT09PVwibm9uZVwifHxcIm5vbmVcIj09PXQuZGlzcGxheXx8XCJoaWRkZW5cIj09PXQudmlzaWJpbGl0eXx8XCIwXCI9PT10Lm9wYWNpdHl9ZnVuY3Rpb24gZChlKXtsZXQgdD1bXSxyPUFycmF5LmZyb20oZS5jaGlsZE5vZGVzKTtpZigwPT09ci5sZW5ndGgpcmV0dXJuIGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtmb3IobGV0IGUgb2Ygcil7aWYoZS5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFKXt0LnB1c2goZS50ZXh0Q29udGVudHx8XCJcIik7Y29udGludWV9aWYoZS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXtsZXQgcj1lO2Mocil8fHQucHVzaChkKHIpKX19cmV0dXJuIHQuam9pbihcIiBcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gZihlLHQpe2xldCByPShlfHxcIlwiKS50cmltKCksbj0odD8/XCJcIikudHJpbSgpO3JldHVybiByLnN0YXJ0c1dpdGgoXCJjYW5kaWRhdGVfY2FyZF9zb3VyY2VfXCIpJiYhci5pbmNsdWRlcyhcInJlZmVycmFsXCIpfHxuLmluY2x1ZGVzKFwiY2FuZGlkYXRlX2NhcmRbc291cmNlX1wiKSYmIW4uaW5jbHVkZXMoXCJyZWZlcnJhbFwiKX1hc3luYyBmdW5jdGlvbiBwKGUsdD0hMSl7bGV0IHI9W10sbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO2lmKCFuJiYodCYmKG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikpLCFuKSlyZXR1cm4gcjtsZXQgbz1uLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKSxpPWUuaW5jbHVkZXMoXCJqcy1zZWN0aW9uLXF1ZXN0aW9uc1wiKXx8ZS5pbmNsdWRlcyhcInF1ZXN0aW9uc1wiKSxhPW5ldyBTZXQ7Zm9yKGxldCBlIG9mIG8pe2xldCB0PWUsbj10LmlkfHxcIlwiLG89dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpfHxcIlwiLGw9ZihuLG8pO2lmKCFsKXtsZXQgZT10LmNsb3Nlc3QoXCIjc291cmNlX3JlZmVycmFsLCAucmVmZXJyYWwtc291cmNlXCIpO2lmKGUpY29udGludWU7bGV0IHI9bi50b0xvd2VyQ2FzZSgpLGk9by50b0xvd2VyQ2FzZSgpO2lmKHIuaW5jbHVkZXMoXCJzb3VyY2VfcmVmZXJyYWxcIil8fGkuaW5jbHVkZXMoXCJzb3VyY2VfcmVmZXJyYWxcIikpY29udGludWV9aWYobCYmIXUodCl8fCFpJiYhcyh0KSljb250aW51ZTtpZihpKXtsZXQgZT10LmNsb3Nlc3QoJ1tkYXRhLWNvbnRleHQ9XCJjdXN0b20tcXVlc3Rpb24tbWMtZGV0YWlsc1wiXSwgLmpzLW9uZWxpbmUtdGV4dGZpZWxkLWZvci1tdWx0aXBsZS1jaG9pY2UtY29udGFpbmVyJykscj10LmNsYXNzTGlzdC5jb250YWlucyhcImpzLW90aGVyLWZpZWxkXCIpfHwhIWV8fG8uaW5jbHVkZXMoXCJjYW5kaWRhdGVfYW5zd2VyX290aGVyW1wiKXx8bi5pbmNsdWRlcyhcImNhbmRpZGF0ZV9hbnN3ZXJfb3RoZXJfXCIpO2lmKHIpe2U/LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIil8fHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKXx8bnVsbCE9PXQuY2xvc2VzdChcIi5oaWRlXCIpfHxlJiZlLmNsb3Nlc3QoXCIuaGlkZVwiKSxlJiZcIm5vbmVcIj09PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLmRpc3BsYXl8fHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLmRpc3BsYXk7Y29udGludWV9fWlmKFwiSU5QVVRcIj09PWUudGFnTmFtZSYmXCJjaGVja2JveFwiPT09ZS50eXBlKXtsZXQgZT10LmNsb3Nlc3QoJy5qcy1jaGVja2JveC1xdWVzdGlvbltkYXRhLWNhbmRpZGF0ZS1xdWVzdGlvbi10eXBlPVwiY2hlY2tib3hcIl0nKTtpZihlKXtpZihhLmhhcyhlKSljb250aW51ZTthLmFkZChlKX19bGV0IGM9YXdhaXQgYih0KTtjJiZyLnB1c2goYyl9cmV0dXJuIHJ9ZnVuY3Rpb24gbShlKXtpZihcIklOUFVUXCI9PT1lLnRhZ05hbWUpe2xldCB0PWU7aWYodC5wbGFjZWhvbGRlciYmdC5wbGFjZWhvbGRlci50cmltKCkpcmV0dXJuIHQucGxhY2Vob2xkZXIudHJpbSgpfWVsc2UgaWYoXCJURVhUQVJFQVwiPT09ZS50YWdOYW1lKXtsZXQgdD1lO2lmKHQucGxhY2Vob2xkZXImJnQucGxhY2Vob2xkZXIudHJpbSgpKXJldHVybiB0LnBsYWNlaG9sZGVyLnRyaW0oKX1lbHNlIGlmKFwiU0VMRUNUXCI9PT1lLnRhZ05hbWUpe2xldCB0PWU7aWYodC5vcHRpb25zJiZ0Lm9wdGlvbnMubGVuZ3RoPjApe2xldCBlPXQub3B0aW9uc1swXTtpZihlJiZlLnRleHRDb250ZW50JiZlLnRleHRDb250ZW50LnRyaW0oKSlyZXR1cm4gZS50ZXh0Q29udGVudC50cmltKCl9fWlmKGUuaWQmJmUuaWQudHJpbSgpKXJldHVybiBlLmlkLnRyaW0oKTtpZihcIm5hbWVcImluIGUmJmUubmFtZSl7bGV0IHQ9ZS5uYW1lO2lmKHQmJnQudHJpbSgpKXJldHVybiB0LnRyaW0oKX1yZXR1cm5cIlwifWZ1bmN0aW9uIGgoZSl7aWYoXCJJTlBVVFwiPT09ZS50YWdOYW1lKXtsZXQgdD1lO2lmKFwiY2hlY2tib3hcIj09PXQudHlwZSlyZXR1cm4gdC5jaGVja2VkP1wiWWVzXCI6XCJOb1wiO2lmKFwicmFkaW9cIj09PXQudHlwZSl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCIke3QubmFtZX1cIl06Y2hlY2tlZGApO3JldHVybiBlPy52YWx1ZXx8XCJcIn1yZXR1cm4gdC52YWx1ZXx8XCJcIn1pZihcIlNFTEVDVFwiPT09ZS50YWdOYW1lKXtsZXQgdD1lO3JldHVybiB0Lm9wdGlvbnNbdC5zZWxlY3RlZEluZGV4XT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIn1yZXR1cm5cIlRFWFRBUkVBXCI9PT1lLnRhZ05hbWUmJmUudmFsdWV8fFwiXCJ9ZnVuY3Rpb24gZyhlKXtsZXQgdD1BKGUpO2lmKHQpe2xldCByPWQodCk7aWYocil7bGV0IG49dC5jbG9zZXN0KFwiLmpzLWZvcm0tZ3JvdXBcIiksbz1lLmNsb3Nlc3QoXCIuanMtZm9ybS1ncm91cFwiKTtpZighbnx8IW98fG49PT1vKXJldHVybiByfX1yZXR1cm4gbShlKXx8bnVsbH1hc3luYyBmdW5jdGlvbiBiKGUpe2xldCB0LHIsbj1BKGUpLGk9XCJcIjtpZihuKWk9ZChuKSx0PW47ZWxzZXtpZighKGk9bShlKSkpcmV0dXJuIG51bGw7dD1lfWxldCBhPW4/eShuKTp5KHQpLGw9bnVsbDtpZihcIkJVVFRPTlwiPT09ZS50YWdOYW1lJiZcImxpc3Rib3hcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1oYXNwb3B1cFwiKSl7cj1vLkZJRUxEX1RZUEUuTElTVEJPWCxsPWU7bGV0IG49YXdhaXQgVChlKTtyZXR1cm57bGFiZWw6aSx0eXBlOm8uRklFTERfVFlQRS5MSVNUQk9YLHJlcXVpcmVkOmEsb3B0aW9uczpuLCRpbnB1dDpsLCRsYWJlbDp0fX1sZXQgcz1lLmNsb3Nlc3QoXCIuanMtZm9ybS1ncm91cFwiKTtpZihzKXtsZXQgbj1zLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcyo9XCJtdWx0aS1zZWxlY3RcIl0sIFtjbGFzcyo9XCJtdWx0aXNlbGVjdFwiXSwgW2RhdGEtbXVsdGktc2VsZWN0XScpO2lmKG4mJihuLmNvbnRhaW5zKGUpfHxlPT09bikpe3I9by5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCxsPWU7bGV0IHM9YXdhaXQgRihuKTtyZXR1cm57bGFiZWw6aSx0eXBlOm8uRklFTERfVFlQRS5NVUxUSV9TRUxFQ1QscmVxdWlyZWQ6YSxvcHRpb25zOnMsJGlucHV0OmwsJGxhYmVsOnR9fX1pZihcIklOUFVUXCI9PT1lLnRhZ05hbWUpe2xldCBuPWU7aWYoXCJjaGVja2JveFwiPT09bi50eXBlKXtsZXQgbD1uLmNsb3Nlc3QoJy5qcy1jaGVja2JveC1xdWVzdGlvbltkYXRhLWNhbmRpZGF0ZS1xdWVzdGlvbi10eXBlPVwiY2hlY2tib3hcIl0nKTtpZihsKXtsZXQgZT1DKGwpLHI9bC5jbG9zZXN0KCcuanMtY29sLW1kLTZbZGF0YS1jb250ZXh0PVwiY3VzdG9tLXF1ZXN0aW9uLWNvbFwiXScpLG49aTtpZihyKXtsZXQgZT1yLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5qcy1jb250cm9sLWxhYmVsXCIpO2UmJihuPWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8aSl9cmV0dXJuIGwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykse2xhYmVsOm4sdHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULHJlcXVpcmVkOmEsb3B0aW9uczplLCRpbnB1dDpsLCRsYWJlbDpyPy5xdWVyeVNlbGVjdG9yKFwibGFiZWwuanMtY29udHJvbC1sYWJlbFwiKXx8dH19cmV0dXJuIHI9by5GSUVMRF9UWVBFLkNIRUNLQk9YLHgoZSkse2xhYmVsOmksdHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gscmVxdWlyZWQ6YSxvcHRpb25zOltdLCRpbnB1dDplLCRsYWJlbDp0LCRjaGVja2JveHM6W119fWlmKFwicmFkaW9cIj09PW4udHlwZSl7cj1vLkZJRUxEX1RZUEUuUkFESU9HUk9VUDtsZXQgbj13KGUpLGw9UyhuKTtyZXR1cm57bGFiZWw6aSx0eXBlOm8uRklFTERfVFlQRS5SQURJT0dST1VQLHJlcXVpcmVkOmEsb3B0aW9uczpsLCRpbnB1dDplLCRsYWJlbDp0LCRyYWRpb1BhcmVudDpufX1yPW4uY2xvc2VzdCgnW2RhdGEtY2FuZGlkYXRlLXF1ZXN0aW9uLXR5cGU9XCJudW1iZXJcIl0nKT9vLkZJRUxEX1RZUEUuTlVNQkVSOm8uRklFTERfVFlQRS5URVhULGw9bn1lbHNlIGlmKFwiU0VMRUNUXCI9PT1lLnRhZ05hbWUpe3I9by5GSUVMRF9UWVBFLlNFTEVDVCxsPWU7bGV0IG49YXdhaXQgayhsKTtyZXR1cm57bGFiZWw6aSx0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QscmVxdWlyZWQ6YSxvcHRpb25zOm4sJGlucHV0OmwsJGxhYmVsOnR9fWVsc2V7aWYoXCJURVhUQVJFQVwiIT09ZS50YWdOYW1lKXJldHVybiBudWxsO3I9by5GSUVMRF9UWVBFLlRFWFQsbD1lfWxldCB1PXtsYWJlbDppLHR5cGU6cixyZXF1aXJlZDphLCRpbnB1dDpsLCRsYWJlbDp0fTtyZXR1cm5cIldoYXQgaXMgeW91ciBkZXNpcmVkIGNvbXBlbnNhdGlvbj9cIj09PWkmJih1LmRlc2NyaXB0aW9uPVwiUGxlYXNlIHJldHVybiB0aGUgZGVzaXJlZCBjb21wZW5zYXRpb24gYXMgYSBudW1iZXIgKGRpZ2l0cyBvbmx5KVwiKSxcIldoYXQgc2FsYXJ5IGFyZSB5b3Ugc2Vla2luZyBmb3IgdGhpcyBwb3NpdGlvbj9cIj09PWkmJih1LmRlc2NyaXB0aW9uPVwiUGxlYXNlIHJldHVybiB0aGUgZGVzaXJlZCBzYWxhcnkgYXMgYSBudW1iZXIgKGRpZ2l0cyBvbmx5KVwiKSxcIldoYXQgaXMgeW91ciBkZXNpcmVkIGJhc2Ugc2FsYXJ5P1wiPT09aSYmKHUuZGVzY3JpcHRpb249XCJQbGVhc2UgcmV0dXJuIHRoZSBkZXNpcmVkIGJhc2Ugc2FsYXJ5IGFzIGEgbnVtYmVyIChkaWdpdHMgb25seSlcIiksXCJXaGF0IGlzIHlvdXIgZGVzaXJlZCBzYWxhcnkgcmFuZ2U/XCI9PT1pJiYodS5kZXNjcmlwdGlvbj1cIlBsZWFzZSByZXR1cm4gdGhlIGRlc2lyZWQgYmFzZSBzYWxhcnkgYXMgYSByYW5nZSwgbm90IGFuIGV4YWN0IG51bWJlci5cIiksdX1mdW5jdGlvbiB5KGUpe2lmKGUmJmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtcmVxdWlyZWRcIikpcmV0dXJuITA7bGV0IHQ9ZS50ZXh0Q29udGVudHx8XCJcIjtpZih0LmluY2x1ZGVzKFwiKlwiKXx8dC5pbmNsdWRlcyhcIlxcdTI3MzFcIikpcmV0dXJuITA7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKCdbYXJpYS1yZXF1aXJlZD1cInRydWVcIl0sIC5yZXF1aXJlZCwgW2NsYXNzKj1cInJlcXVpcmVkXCJdJyk7aWYocilyZXR1cm4hMDtpZihcIklOUFVUXCI9PT1lLnRhZ05hbWV8fFwiU0VMRUNUXCI9PT1lLnRhZ05hbWV8fFwiVEVYVEFSRUFcIj09PWUudGFnTmFtZSl7bGV0IHQ9ZTtpZih0Lmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpfHxcInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKSlyZXR1cm4hMDtsZXQgcj1lLmNsb3Nlc3QoXCIuanMtZm9ybS1ncm91cFwiKTtpZihyKXtsZXQgZT1yLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZXF1aXJlZCwgW2NsYXNzKj1cInJlcXVpcmVkXCJdJyk7aWYoZSlyZXR1cm4hMH19cmV0dXJuITF9ZnVuY3Rpb24gdihlKXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcmVxdWlyZWQsIFtyZXF1aXJlZF0sICpbYXJpYS1yZXF1aXJlZD1cInRydWVcIl0nKS5sZW5ndGg+MH1mdW5jdGlvbiB3KGUpe2lmKGUucGFyZW50RWxlbWVudCYmKGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIiR7ZS5uYW1lfVwiXWApfHxlLmNsb3Nlc3QoJ1tyb2xlPVwicmFkaW9ncm91cFwiXScpKSlyZXR1cm4gZS5jbG9zZXN0KCdbcm9sZT1cInJhZGlvZ3JvdXBcIl0nKXx8ZS5wYXJlbnRFbGVtZW50O2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtlLm5hbWV9XCJdYCk7cmV0dXJuIHQubGVuZ3RoPjA/dFswXS5wYXJlbnRFbGVtZW50fHxkb2N1bWVudC5ib2R5OmUucGFyZW50RWxlbWVudHx8ZG9jdW1lbnQuYm9keX1mdW5jdGlvbiBTKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykscj1bXTtyZXR1cm4gdC5mb3JFYWNoKGU9PntsZXQgdD1lLmlkO2lmKHQpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7dH1cIl1gKTtlJiZlLnRleHRDb250ZW50JiZyLnB1c2goZS50ZXh0Q29udGVudC50cmltKCkpfWlmKGUubmV4dEVsZW1lbnRTaWJsaW5nPy5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXtsZXQgdD1lLm5leHRFbGVtZW50U2libGluZztcIkxBQkVMXCI9PT10LnRhZ05hbWUmJnQudGV4dENvbnRlbnQmJnIucHVzaCh0LnRleHRDb250ZW50LnRyaW0oKSl9fSkscn1mdW5jdGlvbiBFKGUsdCxyKXtsZXQgbj1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLGk9bnVsbDtmb3IobGV0IGUgb2YgQXJyYXkuZnJvbShuKSl7bGV0IHI9ZSxuPXIudGV4dENvbnRlbnR8fFwiXCI7aWYobi5pbmNsdWRlcyh0KSl7aWYoXCJTVFJPTkdcIj09PXIudGFnTmFtZXx8XCJQXCI9PT1yLnRhZ05hbWUpe2k9cjticmVha31pfHwoaT1yKX19aWYoIWkpcmV0dXJuIG51bGw7bGV0IGE9aS5jbG9zZXN0KFwiLmpzLWZpZWxkc2V0XCIpfHxpLmNsb3Nlc3QoXCIuanMtYXJlYS1jb250YWluZXJcIil8fGUsbD1hLnF1ZXJ5U2VsZWN0b3Iocik7aWYoIWwpcmV0dXJuIG51bGw7bGV0IHM9QXJyYXkuZnJvbShsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKTtpZigwPT09cy5sZW5ndGgpcmV0dXJuIG51bGw7bGV0IHU9UyhsKSxjPWkudGV4dENvbnRlbnQ/LnRyaW0oKXx8dDtyZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuUkFESU9HUk9VUCxsYWJlbDpjLHJlcXVpcmVkOnYobCksJGxhYmVsOmksb3B0aW9uczp1LCRyYWRpb1BhcmVudDpsLCRpbnB1dDpzLmxlbmd0aD4wP3NbMF06bH19ZnVuY3Rpb24geChlKXtsZXQgdD1bXSxyPWUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7cmV0dXJuIHIuZm9yRWFjaChlPT57dC5wdXNoKGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIil9KSx0fWZ1bmN0aW9uIEMoZSl7bGV0IHQ9W10scj1lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO3JldHVybiByLmZvckVhY2goZT0+e2xldCByPWUsbj1yLmlkO2lmKG4pe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7bn1cIl1gKTtpZihlJiZlLnRleHRDb250ZW50KXtsZXQgcj1lLnRleHRDb250ZW50LnRyaW0oKTtyJiZ0LnB1c2gocil9fWlmKCFufHwhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtufVwiXWApKXtsZXQgZT1yLmNsb3Nlc3QoXCIuanMtY2hlY2tib3gtY29udGFpbmVyXCIpO2lmKGUpe2xldCByPWUucXVlcnlTZWxlY3RvcihcImxhYmVsLmpzLWNvbnRyb2wtbGFiZWxcIik7aWYociYmci50ZXh0Q29udGVudCl7bGV0IGU9ci50ZXh0Q29udGVudC50cmltKCk7ZSYmIXQuaW5jbHVkZXMoZSkmJnQucHVzaChlKX19fX0pLHR9ZnVuY3Rpb24gQShlKXtsZXQgdD1lLmlkO2lmKHQpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7dH1cIl1gKTtpZihlKXJldHVybiBlfWxldCByPWUuY2xvc2VzdChcIi5qcy1mb3JtLWdyb3VwXCIpO2lmKHIpe2xldCBlPXIucXVlcnlTZWxlY3RvcihcImxhYmVsLmpzLWNvbnRyb2wtbGFiZWxcIik7aWYoZSlyZXR1cm4gZX1sZXQgbj1lLmNsb3Nlc3QoXCIuanMtc2VjdGlvbi1jb3Zlci1sZXR0ZXIsIC5qcy1hcmVhLWNvbnRhaW5lclwiKTtpZihuKXtsZXQgdD1uLnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXJlYS1oZWFkaW5nIHNwYW5cIik7aWYodCYmdC50ZXh0Q29udGVudD8udHJpbSgpKXJldHVybiB0O2xldCByPW4ucXVlcnlTZWxlY3RvcihcIi5qcy1uby1oZWFkZXItbGFiZWwtY29udGFpbmVyIHNwYW5cIik7aWYociYmci50ZXh0Q29udGVudD8udHJpbSgpKXJldHVybiByO2xldCBvPUFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKSk7Zm9yKGxldCB0IG9mIG8pe2xldCByPXQudGV4dENvbnRlbnQ/LnRyaW0oKTtpZihyJiYhdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmci1zci1vbmx5XCIpJiZudWxsIT09dC5vZmZzZXRQYXJlbnQmJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCkmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcpcmV0dXJuIHR9fWxldCBvPWUucGFyZW50RWxlbWVudDtmb3IoO287KXtsZXQgdD1BcnJheS5mcm9tKG8ucXVlcnlTZWxlY3RvckFsbChcImxhYmVsLmpzLWNvbnRyb2wtbGFiZWxcIikpLHI9bnVsbDtmb3IobGV0IG4gb2YgdClvLmNvbnRhaW5zKG4pJiZvLmNvbnRhaW5zKGUpJiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4pJk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HJiYocj8oZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSxlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4pLG4uY29tcGFyZURvY3VtZW50UG9zaXRpb24ocikmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcmJihyPW4pKTpyPW4pO2lmKHIpcmV0dXJuIHI7bz1vLnBhcmVudEVsZW1lbnR9bGV0IGk9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2Zvcig7aTspe2lmKFwiTEFCRUxcIj09PWkudGFnTmFtZXx8XCJTUEFOXCI9PT1pLnRhZ05hbWUmJmkudGV4dENvbnRlbnQ/LnRyaW0oKSYmIWkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnItc3Itb25seVwiKSlyZXR1cm4gaTtpPWkucHJldmlvdXNFbGVtZW50U2libGluZ31sZXQgYT1lLmNsb3Nlc3QoXCJsYWJlbFwiKTtyZXR1cm4gYXx8bnVsbH1hc3luYyBmdW5jdGlvbiBrKGUpe2xldCB0PVtdO3JldHVyblwiU0VMRUNUXCI9PT1lLnRhZ05hbWUmJkFycmF5LmZyb20oZS5vcHRpb25zKS5mb3JFYWNoKGU9PntlLnZhbHVlJiZcIlwiIT09ZS52YWx1ZSYmdC5wdXNoKGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8ZS52YWx1ZSl9KSx0fWFzeW5jIGZ1bmN0aW9uIFQoZSl7bGV0IHQ9W107dHJ5e2xldCByPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSxuPW51bGw7aWYociYmKG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocikpLCFuKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bFtyb2xlPVwibGlzdGJveFwiXSwgZGl2W3JvbGU9XCJsaXN0Ym94XCJdJyk7Zm9yKGxldCB0IG9mIEFycmF5LmZyb20oZSkpe2xldCBlPXQ7aWYobnVsbCE9PWUub2Zmc2V0UGFyZW50KXtuPWU7YnJlYWt9fX1pZihuJiZudWxsIT09bi5vZmZzZXRQYXJlbnR8fChlLmNsaWNrKCksYXdhaXQgKDAsaS5kZWxheSkoMzAwKSxyJiYobj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKSksbnx8KG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWxbcm9sZT1cImxpc3Rib3hcIl0sIGRpdltyb2xlPVwibGlzdGJveFwiXScpKSksbil7bGV0IHI9bi5xdWVyeVNlbGVjdG9yQWxsKCdsaVtyb2xlPVwib3B0aW9uXCJdLCBkaXZbcm9sZT1cIm9wdGlvblwiXSwgb3B0aW9uJyk7ci5mb3JFYWNoKGU9PntsZXQgcj1lLnRleHRDb250ZW50Py50cmltKCk7ciYmXCJcIiE9PXImJnQucHVzaChyKX0pLFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpJiYoZS5jbGljaygpLGF3YWl0ICgwLGkuZGVsYXkpKDEwMCkpfX1jYXRjaChlKXt9cmV0dXJuIHR9YXN5bmMgZnVuY3Rpb24gRihlKXtsZXQgdD1bXTt0cnl7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yQWxsKCdsaVtyb2xlPVwib3B0aW9uXCJdLCBkaXZbcm9sZT1cIm9wdGlvblwiXSwgb3B0aW9uLCBbY2xhc3MqPVwib3B0aW9uXCJdJyk7aWYoci5mb3JFYWNoKGU9PntsZXQgcj1lLnRleHRDb250ZW50Py50cmltKCk7ciYmXCJcIiE9PXImJnQucHVzaChyKX0pLDA9PT10Lmxlbmd0aCl7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCwgYnV0dG9uLCBbcm9sZT1cImNvbWJvYm94XCJdJyk7aWYocil7ci5jbGljaygpLGF3YWl0ICgwLGkuZGVsYXkpKDMwMCk7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlbcm9sZT1cIm9wdGlvblwiXSwgZGl2W3JvbGU9XCJvcHRpb25cIl0sIG9wdGlvbiwgW2NsYXNzKj1cIm9wdGlvblwiXScpO2UuZm9yRWFjaChlPT57bGV0IHI9ZS50ZXh0Q29udGVudD8udHJpbSgpO3ImJlwiXCIhPT1yJiZ0LnB1c2gocil9KSxyJiYoci5jbGljaygpLGF3YWl0ICgwLGkuZGVsYXkpKDEwMCkpfX19Y2F0Y2goZSl7fXJldHVybiB0fWZ1bmN0aW9uIEkoZSl7c3dpdGNoKGUudGFnTmFtZSl7Y2FzZVwiSU5QVVRcIjp7bGV0IHQ9ZS50eXBlLnRvTG93ZXJDYXNlKCk7aWYoXCJjaGVja2JveFwiPT09dClyZXR1cm4gby5GSUVMRF9UWVBFLkNIRUNLQk9YO2lmKFwicmFkaW9cIj09PXQpcmV0dXJuIG8uRklFTERfVFlQRS5SQURJT0dST1VQO3JldHVybiBvLkZJRUxEX1RZUEUuVEVYVH1jYXNlXCJTRUxFQ1RcIjpyZXR1cm4gby5GSUVMRF9UWVBFLlNFTEVDVDtkZWZhdWx0OnJldHVybiBvLkZJRUxEX1RZUEUuVEVYVH19YXN5bmMgZnVuY3Rpb24gaihlLHQscil7bGV0IG49e2xhYmVsOnQsdHlwZTpyLHJlcXVpcmVkOmUucmVxdWlyZWQsJGxhYmVsOmUsJGlucHV0OmV9O2lmKHI9PT1vLkZJRUxEX1RZUEUuU0VMRUNUJiZcIlNFTEVDVFwiPT09ZS50YWdOYW1lKXtsZXQgcj1lLG89KDAsYS5pc0RhdGVTZWxlY3RGaWVsZCkociwoci5uYW1lfHxcIlwiKS50b0xvd2VyQ2FzZSgpLHQudG9Mb3dlckNhc2UoKSk7b3x8KG4ub3B0aW9ucz1hd2FpdCBrKHIpKX1yZXR1cm4gbn1mdW5jdGlvbiBEKGUpe3JldHVybiBlLm1hcChlPT57bGV0IHQ9e3R5cGU6ZS50eXBlLGxhYmVsOmUubGFiZWx9O2lmKChlLnR5cGU9PT1vLkZJRUxEX1RZUEUuU0VMRUNUfHxlLnR5cGU9PT1vLkZJRUxEX1RZUEUuQ0hFQ0tCT1h8fGUudHlwZT09PW8uRklFTERfVFlQRS5SQURJT0dST1VQKSYmXCJvcHRpb25zXCJpbiBlJiZBcnJheS5pc0FycmF5KGUub3B0aW9ucykpe2xldCByPWUub3B0aW9ucztyLmxlbmd0aD4wJiZcInN0cmluZ1wiPT10eXBlb2YgclswXSYmKHQub3B0aW9ucz1yKX1yZXR1cm4gZS50eXBlPT09by5GSUVMRF9UWVBFLkRBVEUmJlwiZGVzY3JpcHRpb25cImluIGUmJih0LmRlc2NyaXB0aW9uPWUuZGVzY3JpcHRpb24pLHR9KX1hc3luYyBmdW5jdGlvbiBQKGUpe2xldCB0PVtdLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTtpZighcilyZXR1cm4gdDthc3luYyBmdW5jdGlvbiBuKGUpe2xldCB0PW0oZSk7cmV0dXJuIHQ/YXdhaXQgaihlLHQsSShlKSk6bnVsbH1sZXQgaT1BcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInRpdGxlXCJdJykpO2lmKDA9PT1pLmxlbmd0aClyZXR1cm4gdDtmb3IobGV0IGU9MDtlPGkubGVuZ3RoO2UrKyl7bGV0IHI9aVtlXSxhPXIuY2xvc2VzdChcIi5lbXBsb3llcl93cmFwcGVyXCIpO2lmKCFhKWNvbnRpbnVlO2xldCBsPUFycmF5LmZyb20oYS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKSkscz1sLmluZGV4T2Yocik7bC5sZW5ndGg7bGV0IHU9ci5jbG9zZXN0KFwiLmpzLWV4cGVyaWVuY2Utcm93XCIpO2lmKCF1KWNvbnRpbnVlO2xldCBjPVtdLGQ9bmV3IFNldCxmPUFycmF5LmZyb20odS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIikpO2ZvcihsZXQgZSBvZiBmKXtpZihkLmhhcyhlKSljb250aW51ZTtsZXQgdD1hd2FpdCBuKGUpO3QmJihjLnB1c2godCksZC5hZGQoZSkpfWlmKDA9PT1zKXtsZXQgZT1BcnJheS5mcm9tKGEucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpKS5maWx0ZXIoZT0+e2xldCB0PWUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKT8udG9Mb3dlckNhc2UoKXx8XCJcIjtyZXR1cm4gdC5pbmNsdWRlcyhcImVtcGxveWVyXCIpfHx0LmluY2x1ZGVzKFwiY29tcGFueVwiKX0pO2ZvcihsZXQgdCBvZiBlKXtpZihkLmhhcyh0KSljb250aW51ZTtsZXQgZT1hd2FpdCBuKHQpO2UmJihjLnVuc2hpZnQoZSksZC5hZGQodCkpfX1pZigwPT09Yy5sZW5ndGgpY29udGludWU7bGV0IHA9RChjKSxtPWMuc29tZShlPT5lLnJlcXVpcmVkKSxoPXtsYWJlbDpcIkVtcGxveW1lbnRcIixjaGlsZHJlbjpjLHJlcXVpcmVkOm0sdHlwZTpvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxvcHRpb25zOnB9O3QucHVzaChoKX1yZXR1cm4gdH1hc3luYyBmdW5jdGlvbiBfKGUpe2xldCB0PVtdLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTtpZighcilyZXR1cm4gdDthc3luYyBmdW5jdGlvbiBuKGUpe2xldCB0PW0oZSk7aWYoXCJTRUxFQ1RcIj09PWUudGFnTmFtZSl7bGV0IHI9ZSxuPXIubmFtZT8udG9Mb3dlckNhc2UoKXx8XCJcIjtuLmluY2x1ZGVzKFwiZ3JhZHVhdGlvbl9kYXRlXCIpfHxuLmluY2x1ZGVzKFwiZ3JhZHVhdGlvblwiKT90PVwiRW5kXCI6KG4uaW5jbHVkZXMoXCJkZWdyZWVfaWRcIil8fG4uaW5jbHVkZXMoXCJkZWdyZWVcIikmJiFuLmluY2x1ZGVzKFwibWFqb3JcIikpJiYodD1cIkRlZ3JlZVwiKX1pZihcIklOUFVUXCI9PT1lLnRhZ05hbWUpe2xldCByPWUsbj1yLm5hbWU/LnRvTG93ZXJDYXNlKCl8fFwiXCI7bi5pbmNsdWRlcyhcInNjaG9vbFwiKT90PVwiU2Nob29sXCI6bi5pbmNsdWRlcyhcIm1ham9yXCIpJiYodD1cIk1ham9yXCIpfXJldHVybiB0P2F3YWl0IGooZSx0LEkoZSkpOm51bGx9bGV0IGk9QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbnRleHQ9XCJlZHVjYXRpb24tcm93XCJdJykpO2lmKDA9PT1pLmxlbmd0aClyZXR1cm4gdDtmb3IobGV0IGU9MDtlPGkubGVuZ3RoO2UrKyl7bGV0IHI9aVtlXSxhPXIucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLGw9W107Zm9yKGxldCBlIG9mIGEpe2xldCB0PWU7aWYoIXModCkpY29udGludWU7bGV0IHI9YXdhaXQgbih0KTtyJiZsLnB1c2gocil9aWYoMD09PWwubGVuZ3RoKWNvbnRpbnVlO2xldCB1PUQobCksYz1sLnNvbWUoZT0+ZS5yZXF1aXJlZCksZD17bGFiZWw6XCJFZHVjYXRpb25cIixjaGlsZHJlbjpsLHJlcXVpcmVkOmMsdHlwZTpvLkZJRUxEX1RZUEUuRURVQ0FUSU9OLG9wdGlvbnM6dX07dC5wdXNoKGQpfXJldHVybiB0fWFzeW5jIGZ1bmN0aW9uIEwoKXtsZXQgZT17fSx0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKSxyPW5ldyBTZXQsbj1uZXcgU2V0O2ZvcihsZXQgbyBvZiB0KXtsZXQgdD1vO2lmKHQuY2xvc2VzdChcIi5qcy1hcmVhLWNvbnRhaW5lci5leHBlcmllbmNlXCIpfHx0LmNsb3Nlc3QoXCIuanMtYXJlYS1jb250YWluZXIuZWR1Y2F0aW9uXCIpKWNvbnRpbnVlO2xldCBpPXQuaWQ/P1wiXCIsYT10Lm5hbWU/P1wiXCIsbD1mKFN0cmluZyhpKSxTdHJpbmcoYSkpO2lmKCFsJiZ0LmNsb3Nlc3QoXCIjc291cmNlX3JlZmVycmFsLCAucmVmZXJyYWwtc291cmNlXCIpfHxsJiYhdSh0KSljb250aW51ZTtsZXQgYz1udWxsIT09dC5jbG9zZXN0KFwiLmpzLXNlY3Rpb24tcXVlc3Rpb25zXCIpO2lmKCFjJiYhbCYmIXModCkpY29udGludWU7aWYoYyl7bGV0IGU9dC5jbG9zZXN0KCdbZGF0YS1jb250ZXh0PVwiY3VzdG9tLXF1ZXN0aW9uLW1jLWRldGFpbHNcIl0sIC5qcy1vbmVsaW5lLXRleHRmaWVsZC1mb3ItbXVsdGlwbGUtY2hvaWNlLWNvbnRhaW5lcicpLHI9dC5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1vdGhlci1maWVsZFwiKXx8ISFlO2lmKHIpe2xldCByPWU/LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIil8fHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKXx8bnVsbCE9PXQuY2xvc2VzdChcIi5oaWRlXCIpfHxlJiZudWxsIT09ZS5jbG9zZXN0KFwiLmhpZGVcIiksbj1lJiZcIm5vbmVcIj09PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLmRpc3BsYXl8fFwibm9uZVwiPT09d2luZG93LmdldENvbXB1dGVkU3R5bGUodCkuZGlzcGxheTtpZihyfHxufHwhcyh0KSljb250aW51ZX19aWYoYyYmXCJJTlBVVFwiPT09dC50YWdOYW1lJiZcImNoZWNrYm94XCI9PT10LnR5cGUpe2xldCBvPXQuY2xvc2VzdCgnLmpzLWNoZWNrYm94LXF1ZXN0aW9uW2RhdGEtY2FuZGlkYXRlLXF1ZXN0aW9uLXR5cGU9XCJjaGVja2JveFwiXScpO2lmKG8pe2lmKG4uaGFzKG8pKWNvbnRpbnVlO24uYWRkKG8pO2xldCByPW8uY2xvc2VzdCgnLmpzLWNvbC1tZC02W2RhdGEtY29udGV4dD1cImN1c3RvbS1xdWVzdGlvbi1jb2xcIl0nKSxpPXI/LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5qcy1jb250cm9sLWxhYmVsXCIpLGE9aT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8Zyh0KXx8XCJcIjtpZighYSljb250aW51ZTtsZXQgbD1bXSxzPUFycmF5LmZyb20oby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSk7Zm9yKGxldCBlIG9mIHMpe2lmKCFlLmNoZWNrZWQpY29udGludWU7bGV0IHQ9ZS5pZCxyPVwiXCI7aWYodCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHt0fVwiXWApO3I9ZT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIn1yfHwocj1lLnZhbHVlfHxcIlwiKSxyJiZsLnB1c2gocil9bC5sZW5ndGg+MCYmKGVbYV09bC5qb2luKFwiLCBcIikpO2NvbnRpbnVlfWxldCBpPXQuY2xvc2VzdCgnLmpzLWNvbC1tZC02W2RhdGEtY29udGV4dD1cImN1c3RvbS1xdWVzdGlvbi1jb2xcIl0nKSxhPWk/LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5qcy1jb250cm9sLWxhYmVsXCIpLGw9YT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8Zyh0KXx8XCJcIjtpZihsKXtsZXQgbj10LG89XCJcIjtpZihuLmlkKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke24uaWR9XCJdYCk7bz1lPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifWVbbF09bi5jaGVja2VkP298fFwiWWVzXCI6XCJOb1wiLHIuYWRkKHQpO2NvbnRpbnVlfX1pZihyLmhhcyh0KSljb250aW51ZTtsZXQgZD1nKHQpO2lmKCFkKWNvbnRpbnVlO2xldCBwPWgodCk7aWYocCl7aWYodm9pZCAwIT09ZVtkXSYmZVtkXSE9PXApe2xldCByPXQubmFtZTtpZihyKXtsZXQgdD1gJHtkfSAoJHtyfSlgO2VbdF09cH1lbHNle2xldCByPXQuaWQ7cj9lW2Ake2R9ICgke3J9KWBdPXA6ZVtkXT1wfX1lbHNlIGVbZF09cH1yLmFkZCh0KX1sZXQgbz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWFyZWEtY29udGFpbmVyLmV4cGVyaWVuY2VbZGF0YS1kaXNwbGF5PSdmb3JtJ11cIil8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXJlYS1jb250YWluZXIuZXhwZXJpZW5jZVtkYXRhLWRpc3BsYXk9J3ByZXZpZXcnXVwiKXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1hcmVhLWNvbnRhaW5lci5leHBlcmllbmNlXCIpO2lmKG8pe2xldCB0PUFycmF5LmZyb20oby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKSkscj1bXTtmb3IobGV0IGU9MDtlPHQubGVuZ3RoO2UrKyl7bGV0IG49dFtlXSxvPW4uY2xvc2VzdChcIi5lbXBsb3llcl93cmFwcGVyXCIpO2lmKCFvKWNvbnRpbnVlO2xldCBpPW4uY2xvc2VzdChcIi5qcy1leHBlcmllbmNlLXJvd1wiKTtpZighaSljb250aW51ZTtsZXQgYT1BcnJheS5mcm9tKG8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInRpdGxlXCJdJykpLGw9YS5pbmRleE9mKG4pLHM9e30sdT1uZXcgU2V0LGM9QXJyYXkuZnJvbShpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKSk7Zm9yKGxldCBlIG9mIGMpe2lmKHUuaGFzKGUpKWNvbnRpbnVlO2xldCB0PW0oZSkscj1lLm5hbWU/LnRvTG93ZXJDYXNlKCl8fFwiXCI7aWYoci5pbmNsdWRlcyhcInRpdGxlXCIpP3Q9XCJUaXRsZVwiOnIuaW5jbHVkZXMoXCJwb3NpdGlvbl9zdGFydF9kYXRlXCIpfHxyLmluY2x1ZGVzKFwic3RhcnRcIikmJiFyLmluY2x1ZGVzKFwiZW5kXCIpP3Q9XCJTdGFydFwiOihyLmluY2x1ZGVzKFwicG9zaXRpb25fZW5kX2RhdGVcIil8fHIuaW5jbHVkZXMoXCJlbmRcIikmJiFyLmluY2x1ZGVzKFwic3RhcnRcIikpJiYodD1cIkVuZFwiKSx0KXtsZXQgcj1oKGUpO3ImJihzW3RdPXIpfXUuYWRkKGUpfWlmKDA9PT1sKXtsZXQgZT1BcnJheS5mcm9tKG8ucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpKS5maWx0ZXIoZT0+e2xldCB0PWUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKT8udG9Mb3dlckNhc2UoKXx8XCJcIjtyZXR1cm4gdC5pbmNsdWRlcyhcImVtcGxveWVyXCIpfHx0LmluY2x1ZGVzKFwiY29tcGFueVwiKX0pO2ZvcihsZXQgdCBvZiBlKXtpZih1Lmhhcyh0KSljb250aW51ZTtsZXQgZT1tKHQpLHI9dC5uYW1lPy50b0xvd2VyQ2FzZSgpfHxcIlwiO2lmKChyLmluY2x1ZGVzKFwiZW1wbG95ZXJcIil8fHIuaW5jbHVkZXMoXCJjb21wYW55XCIpKSYmKGU9XCJFbXBsb3llclwiKSxlKXtsZXQgcj1oKHQpO3ImJihzW2VdPXIpfXUuYWRkKHQpfX1PYmplY3Qua2V5cyhzKS5sZW5ndGg+MCYmci5wdXNoKHMpfXIubGVuZ3RoPjAmJihlLmVtcGxveW1lbnQ9cil9bGV0IGk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWFyZWEtY29udGFpbmVyLmVkdWNhdGlvbltkYXRhLWRpc3BsYXk9XCJwcmV2aWV3XCJdJyksYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYXJlYS1jb250YWluZXIuZWR1Y2F0aW9uW2RhdGEtZGlzcGxheT1cImZvcm1cIl0nKSxsPWU9PntsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29udGV4dD1cImVkdWNhdGlvbi1yb3dcIl0nKSk7aWYodC5sZW5ndGg+MClyZXR1cm4gdDtsZXQgcj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIi5qcy1lZHVjYXRpb24tcm93LCAuZWR1Y2F0aW9uLXJvdywgLmVkdWNhdGlvbl9yb3csIC5lZHUtcm93LCAuZWR1X3Jvd1wiKSk7aWYoci5sZW5ndGg+MClyZXR1cm4gcjtsZXQgbj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWVdLCBzZWxlY3RbbmFtZV0sIHRleHRhcmVhW25hbWVdXCIpKSxvPW5ldyBTZXQ7Zm9yKGxldCBlIG9mIG4pe2xldCB0PWUubmFtZT8udG9Mb3dlckNhc2U/LigpfHxcIlwiO2lmKCF0LmluY2x1ZGVzKFwic2Nob29sXCIpJiYhdC5pbmNsdWRlcyhcIm1ham9yXCIpJiYhdC5pbmNsdWRlcyhcImRlZ3JlZVwiKSYmIXQuaW5jbHVkZXMoXCJncmFkdWF0aW9uXCIpJiYhdC5pbmNsdWRlcyhcImVkdWNhdGlvblwiKSljb250aW51ZTtsZXQgcj1lLmNsb3Nlc3QoXCJbZGF0YS1jb250ZXh0XVwiKXx8ZS5jbG9zZXN0KFwiLmpzLWZvcm0tcm93LCAuanMtcm93LCAucm93XCIpfHxlLmNsb3Nlc3QoXCJsaSwgdHIsIGZpZWxkc2V0XCIpO3ImJm8uYWRkKHIpfXJldHVybiBvLnNpemU+MD9BcnJheS5mcm9tKG8pOltlXX0sYz1lPT57aWYoIWUpcmV0dXJuW107bGV0IHQ9W107Zm9yKGxldCByIG9mIGwoZSkpe2xldCBlPXIucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLG49e307Zm9yKGxldCB0IG9mIGUpe2xldCBlPXQ7aWYoXCJJTlBVVFwiPT09ZS50YWdOYW1lJiZcImhpZGRlblwiPT09ZS50eXBlKWNvbnRpbnVlO2xldCByPW0oZSksbz1lLm5hbWU/LnRvTG93ZXJDYXNlKCl8fFwiXCI7XCJTRUxFQ1RcIj09PWUudGFnTmFtZT9vLmluY2x1ZGVzKFwiZ3JhZHVhdGlvbl9kYXRlXCIpfHxvLmluY2x1ZGVzKFwiZ3JhZHVhdGlvblwiKT9yPVwiRW5kXCI6KG8uaW5jbHVkZXMoXCJkZWdyZWVfaWRcIil8fG8uaW5jbHVkZXMoXCJkZWdyZWVcIikmJiFvLmluY2x1ZGVzKFwibWFqb3JcIikpJiYocj1cIkRlZ3JlZVwiKTpcIklOUFVUXCI9PT1lLnRhZ05hbWUmJihvLmluY2x1ZGVzKFwic2Nob29sXCIpP3I9XCJTY2hvb2xcIjpvLmluY2x1ZGVzKFwibWFqb3JcIikmJihyPVwiTWFqb3JcIikpO2xldCBpPWgoZSk7ciYmaSYmKG5bcl09aSl9XCJzdHJpbmdcIj09dHlwZW9mIG4uU2Nob29sJiZuLlNjaG9vbC50cmltKCkmJnQucHVzaChuKX1yZXR1cm4gdH0sZD1lPT57aWYoIWUpcmV0dXJuW107bGV0IHQ9W10scj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnLmpzLXJvd1tkYXRhLWNvbnRleHQ9XCJhcmVhLWNvbnRlbnRcIl0nKSk7Zm9yKGxldCBlIG9mIHIpe2xldCByPXt9LG49KGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIikubWF0Y2goL1xcYigxOXwyMClcXGR7Mn1cXGIvKTtuJiYoci5FbmQ9blswXSk7bGV0IG89ZS5xdWVyeVNlbGVjdG9yKFwic3Ryb25nXCIpPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO28mJihyLlNjaG9vbD1vKTtsZXQgaT1lLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZm9ybS1ncm91cFwiKT8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfHxcIlwiO2lmKGkpe2xldCBlPWkubWF0Y2goL14oLio/KVxccytpblxccysoLiopJC9pKTtpZihlKXtsZXQgdD1lWzFdPy50cmltKCksbj1lWzJdPy50cmltKCk7dCYmKHIuRGVncmVlPXQpLG4mJihyLk1ham9yPW4pfWVsc2Ugci5EZWdyZWU9aX1PYmplY3Qua2V5cyhyKS5sZW5ndGg+MCYmdC5wdXNoKHIpfXJldHVybiB0fSxwPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXJlYS1jb250YWluZXIuZWR1Y2F0aW9uXCIpLGI9YyhhfHwocD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1kaXNwbGF5XCIpIT09XCJwcmV2aWV3XCI/cDpudWxsKSkseT1iLmxlbmd0aD4wP2I6ZChpfHwocD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1kaXNwbGF5XCIpPT09XCJwcmV2aWV3XCI/cDpudWxsKSk7cmV0dXJuIHkubGVuZ3RoPjAmJihlLmVkdWNhdGlvbj15KSxlfWZ1bmN0aW9uIFIoZSx0LHIpe2lmKCFlKXJldHVybiBudWxsO2xldCBuPW51bGw7KG49ZS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5qcy1yZXF1aXJlZFwiKSl8fChuPWUucXVlcnlTZWxlY3RvcihcIi5qcy1hcmVhLWhlYWRpbmcgLmpzLXJlcXVpcmVkXCIpKSxufHwobj1lLnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXJlYS1oZWFkaW5nXCIpKSxufHwobj1lLnF1ZXJ5U2VsZWN0b3IoXCJzdHJvbmdcIikpO2xldCBpPWUucXVlcnlTZWxlY3RvcihyKTtpZighaSlyZXR1cm4gbnVsbDtsZXQgYT1BcnJheS5mcm9tKGkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykpO2lmKDA9PT1hLmxlbmd0aClyZXR1cm4gbnVsbDtsZXQgbD1bXTthLmZvckVhY2goZT0+e2xldCB0PW51bGwscj1lLmlkO2lmKHIpe2xldCBlPWkucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtyfVwiXWApfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3J9XCJdYCk7ZSYmZS50ZXh0Q29udGVudCYmKHQ9ZS50ZXh0Q29udGVudC50cmltKCkpfWlmKCF0JiZlLm5leHRFbGVtZW50U2libGluZz8ubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7bGV0IHI9ZS5uZXh0RWxlbWVudFNpYmxpbmc7XCJMQUJFTFwiPT09ci50YWdOYW1lJiZyLnRleHRDb250ZW50JiYodD1yLnRleHRDb250ZW50LnRyaW0oKSl9aWYoIXQpe2xldCBuPWUuY2xvc2VzdChcIi5qcy1yb3csIC5qcy1jb2wtbWQtMTIsIGRpdlwiKTtpZihuKXtsZXQgZT1uLnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7cn1cIl1gKXx8bi5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7ZSYmZS50ZXh0Q29udGVudCYmKHQ9ZS50ZXh0Q29udGVudC50cmltKCkpfX10JiYhbC5pbmNsdWRlcyh0KSYmbC5wdXNoKHQpfSk7bGV0IHM9dDtpZihuKXtpZihcIlNQQU5cIj09PW4udGFnTmFtZSYmbi5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1yZXF1aXJlZFwiKSlzPW4udGV4dENvbnRlbnQ/LnRyaW0oKXx8dDtlbHNle2xldCBlPW4ucXVlcnlTZWxlY3RvcihcInNwYW4uanMtcmVxdWlyZWRcIik7cz1lP2UudGV4dENvbnRlbnQ/LnRyaW0oKXx8dDpuLnRleHRDb250ZW50Py50cmltKCl8fHR9fXJldHVybnt0eXBlOm8uRklFTERfVFlQRS5SQURJT0dST1VQLGxhYmVsOnMscmVxdWlyZWQ6dihlKSwkbGFiZWw6bnx8ZSxvcHRpb25zOmwsJHJhZGlvUGFyZW50OmksJGlucHV0OmEubGVuZ3RoPjA/YVswXTppfX1sZXQgTz17Z2VuZGVyOlwiI2dlbmRlclNlY3Rpb25cIixyYWNlOlwiI3JhY2VTZWN0aW9uXCIscHJvdGVjdGVkVmV0ZXJhbjonW2RhdGEtY29udGV4dC1pbnZhbGlkYXRlPVwicHJvdGVjdGVkX3ZldGVyYW5faWRcIl0nLGRpc2FiaWxpdHk6XCIjZGVzYWJpbGl0eVNlY3Rpb25cIixkaXNhYmlsaXR5UmFkaW86J1tkYXRhLWNvbnRleHQtaW52YWxpZGF0ZT1cImRpc2FiaWxpdHkyMDE0X2lkXCJdJyxmdWxsTmFtZTpcIiNjYW5kaWRhdGVfY2FyZF9mdWxsX25hbWVcIn07ZnVuY3Rpb24gTShlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoTy5nZW5kZXIpO3JldHVybiB0P1IodCxcIkdlbmRlclwiLCdbZGF0YS1jb250ZXh0LWludmFsaWRhdGU9XCJnZW5kZXJfaWRcIl0nKTpudWxsfWZ1bmN0aW9uIE4oZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKE8ucmFjZSk7cmV0dXJuIHQ/Uih0LFwiUmFjZS9FdGhuaWMgSWRlbnRpZmljYXRpb25cIiwnW2RhdGEtY29udGV4dC1pbnZhbGlkYXRlPVwicmFjZV9pZFwiXScpOm51bGx9ZnVuY3Rpb24gJChlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoTy5wcm90ZWN0ZWRWZXRlcmFuKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj10LmNsb3Nlc3QoXCJsaVwiKSxuPXQuY2xvc2VzdChcIi5qcy1maWVsZHNldFwiKXx8cj8uY2xvc2VzdChcIi5qcy1maWVsZHNldFwiKXx8dC5jbG9zZXN0KFwiLmpzLWFyZWEtY29udGFpbmVyXCIpfHxyO2lmKCFuKXJldHVybiBudWxsO2xldCBvPVwiUHJvdGVjdGVkIFZldGVyYW5cIjtpZihyKXtsZXQgZT1yLmNsb25lTm9kZSghMCksdD1lLnF1ZXJ5U2VsZWN0b3IoTy5wcm90ZWN0ZWRWZXRlcmFuKTt0JiZ0LnJlbW92ZSgpLG89KGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl8fG99bGV0IGk9UihuLG8sTy5wcm90ZWN0ZWRWZXRlcmFuKTtyZXR1cm4gaSYmciYmXCJQcm90ZWN0ZWQgVmV0ZXJhblwiIT09byYmKGkubGFiZWw9byxpLiRsYWJlbD1yKSxpfWZ1bmN0aW9uIEIoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKE8uZGlzYWJpbGl0eSl8fGUucXVlcnlTZWxlY3RvcihPLmRpc2FiaWxpdHlSYWRpbyk/LmNsb3Nlc3QoXCIuanMtYXJlYS1jb250YWluZXJcIik7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9Uih0LFwiSG93IGRvIEkga25vdyBpZiBJIGhhdmUgYSBkaXNhYmlsaXR5P1wiLE8uZGlzYWJpbGl0eVJhZGlvKTtpZihyKXtsZXQgZT1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcIipcIikpLmZpbmQoZT0+KGUudGV4dENvbnRlbnR8fFwiXCIpLmluY2x1ZGVzKFwiSG93IGRvIEkga25vdyBpZiBJIGhhdmUgYSBkaXNhYmlsaXR5P1wiKSk7ZSYmKHIubGFiZWw9XCJIb3cgZG8gSSBrbm93IGlmIEkgaGF2ZSBhIGRpc2FiaWxpdHk/XCIsci4kbGFiZWw9ZSl9cmV0dXJuIHJ9ZnVuY3Rpb24gcShlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoTy5mdWxsTmFtZSk7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9bnVsbCxuPVwiWW91ciBOYW1lXCIsaT10LmNsb3Nlc3QoXCIuanMtcm93XCIpO2lmKGkpe2xldCBlPWkucHJldmlvdXNFbGVtZW50U2libGluZztmb3IoO2U7KXtsZXQgdD1lLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7aWYoXCJZb3VyIE5hbWVcIj09PXR8fHQuaW5jbHVkZXMoXCJZb3VyIE5hbWVcIikmJnQubGVuZ3RoPDUwKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY29sLW1kLTEyLCBkaXZcIil8fGU7cj10LG49dC50ZXh0Q29udGVudD8udHJpbSgpfHxcIllvdXIgTmFtZVwiO2JyZWFrfWU9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfX1pZighcil7bGV0IGU9dC5jbG9zZXN0KFwiLmpzLWZpZWxkc2V0LCAuanMtYXJlYS1jb250YWluZXJcIik7aWYoZSlmb3IobGV0IG8gb2YgQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtcm93LCBkaXZcIikpKXtsZXQgZT1vLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7aWYoKFwiWW91ciBOYW1lXCI9PT1lfHxlLmluY2x1ZGVzKFwiWW91ciBOYW1lXCIpJiZlLmxlbmd0aDw1MCkmJm8uY29tcGFyZURvY3VtZW50UG9zaXRpb24odCkmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpe3I9byxuPWU7YnJlYWt9fX1sZXQgYT10Lmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpfHxcInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKXx8cj8ucXVlcnlTZWxlY3RvcihcIi5qcy1yZXF1aXJlZCwgW3JlcXVpcmVkXVwiKSE9PW51bGw7cmV0dXJue2xhYmVsOm4sdHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxyZXF1aXJlZDphLCRpbnB1dDp0LCRsYWJlbDpyfHx0LmNsb3Nlc3QoXCIuanMtZm9ybS1ncm91cFwiKXx8dH19YXN5bmMgZnVuY3Rpb24gVSgpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtI2Vlb09mY2NwRm9ybVwiKTtpZighZSlyZXR1cm5bXTtsZXQgdD1bXSxyPU0oZSk7ciYmdC5wdXNoKHIpO2xldCBuPU4oZSk7biYmdC5wdXNoKG4pO2xldCBvPSQoZSk7byYmdC5wdXNoKG8pO2xldCBpPUIoZSk7aSYmdC5wdXNoKGkpO2xldCBhPXEoZSk7cmV0dXJuIGEmJnQucHVzaChhKSx0fVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuNjY5Mzg2ZTQuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);