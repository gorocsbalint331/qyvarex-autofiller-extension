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
})({"9mssA":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\adp-recruiting.js",
    "bundleId": "73b1d4d01a0df85d",
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
var j = z(require("75ae00437dbb2e02"));
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

},{"75ae00437dbb2e02":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"hqmcQ":[function(require,module,exports) {
/**
 * Parcel module id: 9zFM0
 * Resolved path: src/contents/sites/adp-recruiting.js
 * Dependencies:
 *   ../base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ./answer -> 3LhvH  =>  src/contents/sites/adp-recruiting/answer.js
 *   ./operations -> 1IQSh  =>  src/contents/sites/adp-recruiting/operations.js
 *   ./rules -> jTK8L  =>  src/contents/sites/adp-recruiting/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  src/contents/methods/section-results.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "AdpRecruiting", ()=>S);
var o = e("~contents/methods/section-results"), i = e("~contents/methods/cancellation"), a = e("~contents/methods/answer"), l = e("~contents/methods/dom"), s = e("~contents/methods/track"), u = e("~core/enums"), c = e("~enums/http"), d = e("~store/autofillInfo"), f = e("~utils/string"), p = e("~utils/delay"), m = e("../base-filler"), h = e("./answer"), g = e("./operations"), b = e("./rules");
function y(e1) {
    if (!(e1 instanceof Element)) return !1;
    let t = e1.closest("button, input[type='submit'], input[type='button'], [role='button']");
    if (!t) return !1;
    let r1 = (t.textContent || "").replace(/\s+/g, " ").trim();
    return /submit\s+application/i.test(r1) || /^submit\b/i.test(r1);
}
function v(e1) {
    if (!(e1 instanceof Element) || y(e1)) return null;
    let t = e1.closest("div.appGo.center");
    if (t) return t;
    let r1 = e1.closest(`[data-dojo-attach-point="${b.ADP_RECRUITING_PAGER_NEXT_ATTACH}"]`);
    if (r1) return r1;
    let n = e1.closest('[data-dojo-attach-point="thePagerNext"]');
    if (n) return n;
    let o = e1;
    for(; o;){
        let e1 = o.getAttribute("data-dojo-attach-point") || "";
        if (/pager/i.test(e1) && /next/i.test(e1)) return o;
        o = o.parentElement;
    }
    let i = e1.closest(".two.column");
    if (i) {
        let t = i.querySelectorAll("div.appGo.center");
        for(let r1 = t.length - 1; r1 >= 0; r1--){
            let n = t[r1];
            if (n.contains(e1)) return n;
        }
    }
    return null;
}
function w(e1) {
    if ("true" === e1.getAttribute("aria-disabled") || e1.classList.contains("dijitDisabled")) return !0;
    let t = e1.parentElement;
    if (t?.classList.contains("dijitDisabled")) return !0;
    let r1 = window.getComputedStyle(e1);
    return "none" === r1.display || "hidden" === r1.visibility;
}
class S extends m.BaseFiller {
    getFieldHandlers() {
        return {
            [u.FIELD_TYPE.TEXT]: {
                handler: (e1, t)=>(0, l.fillInputTextField)(e1.$input, t),
                options: {
                    expectArray: !1
                }
            },
            [u.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, l.fillCheckBoxesField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [u.FIELD_TYPE.SELECT]: {
                handler: (e1, t)=>(0, g.fillCustomSelectField)(e1?.$input, t, this.currentLocation),
                options: {
                    expectArray: !0
                }
            },
            [u.FIELD_TYPE.RADIOGROUP]: {
                handler: (e1, t)=>(0, g.fillRadioGroupField)(e1, t),
                options: {
                    expectArray: !0
                }
            }
        };
    }
    async extractFormRules() {
        return await (0, b.getRules)();
    }
    getSiteName() {
        return "adp-recruiting";
    }
    formatAnswer(e1) {
        return (0, h.formatAnswer)(e1);
    }
    async getAutofillSnapshot() {
        return (0, b.getFormSnapshot)();
    }
    async getSubmitSnapshot() {
        return (0, b.getFormSnapshot)();
    }
    async executeSiteSpecificSteps() {}
    isCountryRule(e1) {
        return e1.type === u.FIELD_TYPE.SELECT && /^country$/i.test(e1.label);
    }
    isStateProvinceRule(e1) {
        if (e1.type !== u.FIELD_TYPE.SELECT) return !1;
        let t = e1.label.replace(/[^a-z]/gi, "").toLowerCase();
        return [
            "state",
            "province",
            "stateprovince",
            "provincestate",
            "stateregion",
            "stateterritory",
            "stateprov",
            "stateprovinceterritory"
        ].includes(t);
    }
    getRulesWithoutClientLocationRules(e1) {
        return e1.filter((e1)=>!this.isCountryRule(e1) && !this.isStateProvinceRule(e1));
    }
    async fillCountryRuleDirectly(e1, t) {
        let r1 = e1.find((e1)=>this.isCountryRule(e1));
        if (!r1) return !1;
        let n = (0, g.normalizeRecruitingCountryValue)(t.country);
        if (!n) return this.progressTracker.updateMissedProgress(r1.label), !1;
        let o = await (0, g.fillCustomSelectField)(r1.$input, n, t);
        return o ? this.progressTracker.updateFilledProgress(r1.label) : this.progressTracker.updateMissedProgress(r1.label), o;
    }
    async fillStateRuleDirectly(e1, t) {
        let r1 = e1.find((e1)=>this.isStateProvinceRule(e1));
        if (!r1) return !1;
        let n = t.state.trim();
        if (!n) return this.progressTracker.updateMissedProgress(r1.label), !1;
        let o = await (0, g.fillCustomSelectField)(r1.$input, n, t);
        return o ? this.progressTracker.updateFilledProgress(r1.label) : this.progressTracker.updateMissedProgress(r1.label), o;
    }
    async uploadResumeOnly() {
        this.progressTracker.setFieldsRequiredStatus([
            {
                label: "Resume/CV",
                required: !0
            }
        ]);
        let e1 = null;
        return (this.taskQueue.add(async ()=>{
            try {
                await (0, g.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            } catch (t) {
                if (t instanceof i.CancelledError) throw t;
                if (this.progressTracker.updateMissedProgress("Resume/CV"), t instanceof a.ResumeMissingCodeError || t instanceof Error && t.message === a.NO_RESUME_FOUND_ERROR) {
                    e1 = t instanceof a.ResumeMissingCodeError ? t.message : c.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY, (0, s.sendHttpStatusMessage)(e1);
                    return;
                }
                console.error("[ADP Recruiting] resume-only upload failed:", t);
            }
        }), await this.taskQueue.run(), e1) ? e1 : ((0, s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), this.progressTracker.generateFinalProgress());
    }
    async waitForEnabledAdpRecruitingVsidRaceRule(e1) {
        let t = Date.now() + 1500, r1 = 0, n = null, o = !e1;
        for(; Date.now() <= t;){
            if (r1 += 1, e1 && (o = (0, b.isAdpRecruitingVsidRaceRequiredAfterEthnicity)()), !o) {
                await (0, p.delay)(100);
                continue;
            }
            let t = await (0, b.getEnabledAdpRecruitingVsidRaceRule)();
            if (t && (n = t, t.options?.length)) return console.info("[ADP Recruiting][VSID Race] live rule ready", {
                attempts: r1,
                optionCount: t.options.length
            }), t;
            await (0, p.delay)(100);
        }
        return console.info("[ADP Recruiting][VSID Race] live rule wait ended", {
            attempts: r1,
            ethnicityTriggerObserved: o,
            raceControlEnabled: !!n,
            optionCount: n?.options?.length ?? 0
        }), n;
    }
    async fillDeferredAdpRecruitingVsidRace(e1, t, r1) {
        if (!e1.length && !t) return;
        console.info("[ADP Recruiting][VSID Race] defer dependent rule", {
            deferredRuleCount: e1.length,
            hasVsidRaceDependency: t,
            initialOptionCounts: e1.map((e1)=>e1.options?.length ?? 0)
        });
        let n = await this.waitForEnabledAdpRecruitingVsidRaceRule(t);
        if (!n) {
            console.info("[ADP Recruiting][VSID Race] not rendered after Ethnicity", {
                deferredRuleCount: e1.length
            });
            return;
        }
        if (this.progressTracker.updateFieldRequiredStatus(n), !n.options?.length) {
            console.warn("[ADP Recruiting][VSID Race] enabled control has no options", {
                optionCount: 0
            }), this.progressTracker.updateMissedProgress(n.label);
            return;
        }
        let o = await this.requestFormAnswers([
            n
        ], r1, {
            updateTimeTrace: !1
        });
        if (!o || "string" == typeof o) {
            console.warn("[ADP Recruiting][VSID Race] answer request did not return a fillable result", {
                hasErrorCode: "string" == typeof o
            }), this.progressTracker.updateMissedProgress(n.label);
            return;
        }
        this.answer.regular = {
            ...this.answer.regular,
            ...o.regular
        }, this.answer.fillDataList = [
            ...this.answer.fillDataList || [],
            ...o.fillDataList || []
        ];
        let i = this.operationConfig[n.type];
        if (!i) {
            console.warn("[ADP Recruiting][VSID Race] no select operation configured"), this.progressTracker.updateMissedProgress(n.label);
            return;
        }
        let a = await i(n, this.answer.regular);
        console.info("[ADP Recruiting][VSID Race] fill finished", {
            optionCount: n.options.length,
            filled: a
        });
    }
    async doFillForm(e1) {
        this.resetFalconResponseAccumulator(), this.recruitingPagerCaptureHandler && (document.removeEventListener("click", this.recruitingPagerCaptureHandler, !0), this.recruitingPagerCaptureHandler = null), this.timeTrace.rulesParseStartTime = Date.now(), this.progressTracker.clear(), this.taskQueue.clear(), this.taskQueue.add(g.preFillForm), await this.taskQueue.run(), this.taskQueue.add(async ()=>{
            await (0, g.preclickAddButtons)();
        }), await this.taskQueue.run();
        let t = await (0, d.useAutofillInfoStore).getState().fetchAutofillInfo();
        this.currentLocation = {
            country: String(t?.location?.country ?? "").trim(),
            state: String(t?.location?.state ?? "").trim()
        };
        let r1 = await (0, b.getRules)(), { readyRules: n, deferredRaceRules: l } = (0, b.partitionAdpRecruitingVsidRaceRules)(r1), c = (0, b.hasAdpRecruitingVsidRaceDependency)();
        if (this.progressTracker.setFieldsRequiredStatus(n), 0 === n.length) {
            if (!this.disableUploadResume && (0, g.hasResumeUploadInput)()) {
                let e1 = Date.now();
                return this.timeTrace.requestStartTime = e1, this.timeTrace.fillStartTime = e1, await this.uploadResumeOnly();
            }
            return this.progressTracker.generateFinalProgress();
        }
        try {
            this.token || (this.token = await (0, a.getSiteToken)()), this.timeTrace.requestStartTime = Date.now();
            let t = this.captureFalconResponseRun(), r1 = await (0, a.getElementRules)(n, "adp-recruiting", this.token, e1, this.resumeInfo.id, this.resumeInfo.tailorId);
            this.recordFalconResponse(r1, t), this.answer = (0, h.formatAnswer)(r1), this.timeTrace.fillStartTime = Date.now();
        } catch (e1) {
            if (e1 instanceof a.HTTPError || e1 instanceof a.ResumeMissingCodeError) return (0, s.sendHttpStatusMessage)(e1.message), e1.message;
            console.error("Unknown error occurred:", e1);
        }
        (0, i.checkpoint)();
        let p = (0, b.getSubmitButtonText)();
        (0, s.bindSubmitButton)(p, this.progressTracker.fieldStatus, this.timeTrace), await this.fillCountryRuleDirectly(n, this.currentLocation), await this.fillStateRuleDirectly(n, this.currentLocation);
        let m = this.getRulesWithoutClientLocationRules(n), y = [
            ...(0, a.getRegularOperations)(m, this.answer.regular, this.operationConfig)
        ];
        for (let e1 of y)this.taskQueue.add(e1);
        await this.taskQueue.run(), await this.fillDeferredAdpRecruitingVsidRace(l, c, e1);
        let S = (0, o.createSequentialSectionResultReporter)("education", this.progressTracker, "education"), E = !1;
        for(let e1 = 0; e1 < this.answer.education.length; e1++){
            let t = this.answer.education[e1], r1 = await (0, b.getEduRules)(), n = (0, a.getEducationOperations)(r1, [
                t
            ], this.operationConfig, void 0, {
                ...S.forRecord(e1, r1.slice(0, 1)),
                onSkipped: ()=>{
                    E = !0;
                }
            });
            for (let e1 of n)this.taskQueue.add(e1);
            if (await this.taskQueue.run(), E) break;
        }
        E ? this.progressTracker.updateMissedProgress("Education") : this.answer.education.length > 0 && this.progressTracker.updateFilledProgress("Education");
        let x = (0, o.createSequentialSectionResultReporter)("employment", this.progressTracker, "experience"), C = !1;
        for(let e1 = 0; e1 < this.answer.workExperience.length; e1++){
            let t = this.answer.workExperience[e1], r1 = (0, g.getVisibleEmploymentCount)();
            e1 >= r1 && (this.taskQueue.add(async ()=>{
                await (0, g.addSingleEmploymentSection)();
            }), await this.taskQueue.run());
            let n = await (0, b.getExpRules)(), o = (0, a.getEmploymentOperations)(n, [
                t
            ], this.operationConfig, void 0, {
                ...x.forRecord(e1, n.slice(0, 1)),
                onSkipped: ()=>{
                    C = !0;
                }
            });
            for (let e1 of o)this.taskQueue.add(e1);
            if (await this.taskQueue.run(), C) break;
        }
        C ? this.progressTracker.updateMissedProgress("Employment") : this.answer.workExperience.length > 0 && this.progressTracker.updateFilledProgress("Employment"), this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async ()=>{
            await (0, g.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), this.taskQueue.add(()=>{}), await this.taskQueue.run(), (0, g.syncFilledTextProgressFromCurrentValues)(r1, this.progressTracker.fieldStatus, this.progressTracker.updateFilledProgress);
        let A = (0, b.getFormSnapshot)();
        return this.recruitingPagerCaptureHandler = (e1)=>{
            let t = v(e1.target);
            t?.isConnected && (w(t) || (0, b.submitHandler)(A, this.answer));
        }, document.addEventListener("click", this.recruitingPagerCaptureHandler, !0), (0, s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), window.top?.postMessage(f.cleanObject({
            type: u.MESSAGE_EVENTS.autoFillResultFromIframe,
            data: this.progressTracker.fieldStatus
        }), {
            targetOrigin: "*"
        }), this.progressTracker.generateFinalProgress();
    }
    submitApplication() {}
    constructor(...e1){
        super(...e1), this.recruitingPagerCaptureHandler = null, this.currentLocation = {
            country: "",
            state: ""
        };
    }
}

},{}]},["9mssA","hqmcQ"], "hqmcQ", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBOEYsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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O1FBQ1Q7SUFDRjtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS00YTNlZDdlY2Q4YmIwODQzLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2FkcC1yZWNydWl0aW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGFkcC1yZWNydWl0aW5nLmpzXCIsXCJidW5kbGVJZFwiOlwiNzNiMWQ0ZDAxYTBkZjg1ZFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDl6Rk0wXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9hZHAtcmVjcnVpdGluZy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4uL2Jhc2UtZmlsbGVyIC0+IDh4ajZGICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzXHJcbiAqICAgLi9hbnN3ZXIgLT4gM0xodkggID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYWRwLXJlY3J1aXRpbmcvYW5zd2VyLmpzXHJcbiAqICAgLi9vcGVyYXRpb25zIC0+IDFJUVNoICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2FkcC1yZWNydWl0aW5nL29wZXJhdGlvbnMuanNcclxuICogICAuL3J1bGVzIC0+IGpUSzhMICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2FkcC1yZWNydWl0aW5nL3J1bGVzLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9zZWN0aW9uLXJlc3VsdHMgLT4gNldXc0MgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9zZWN0aW9uLXJlc3VsdHMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy90cmFjayAtPiBoNDc5YiAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL3RyYWNrLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5lbnVtcy9odHRwIC0+IGVKRnFqICA9PiAgc3JjL2VudW1zL2h0dHAuanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxJbmZvIC0+IDc5Vk5QICA9PiAgc3JjL3N0b3JlL2F1dG9maWxsSW5mby5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKiAgIH51dGlscy9zdHJpbmcgLT4gaWpFRmkgID0+ICBzcmMvdXRpbHMvc3RyaW5nLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJBZHBSZWNydWl0aW5nXCIsICgpID0+IFMpO1xyXG52YXIgbyA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9zZWN0aW9uLXJlc3VsdHNcIiksXHJcbiAgaSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb25cIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgbCA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksXHJcbiAgcyA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy90cmFja1wiKSxcclxuICB1ID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGMgPSBlKFwifmVudW1zL2h0dHBcIiksXHJcbiAgZCA9IGUoXCJ+c3RvcmUvYXV0b2ZpbGxJbmZvXCIpLFxyXG4gIGYgPSBlKFwifnV0aWxzL3N0cmluZ1wiKSxcclxuICBwID0gZShcIn51dGlscy9kZWxheVwiKSxcclxuICBtID0gZShcIi4uL2Jhc2UtZmlsbGVyXCIpLFxyXG4gIGggPSBlKFwiLi9hbnN3ZXJcIiksXHJcbiAgZyA9IGUoXCIuL29wZXJhdGlvbnNcIiksXHJcbiAgYiA9IGUoXCIuL3J1bGVzXCIpO1xyXG5cclxuZnVuY3Rpb24geShlKSB7XHJcbiAgaWYgKCEoZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3QoXCJidXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddLCBpbnB1dFt0eXBlPSdidXR0b24nXSwgW3JvbGU9J2J1dHRvbiddXCIpO1xyXG4gIGlmICghdCkgcmV0dXJuICExO1xyXG4gIGxldCByID0gKHQudGV4dENvbnRlbnQgfHwgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xyXG4gIHJldHVybiAvc3VibWl0XFxzK2FwcGxpY2F0aW9uL2kudGVzdChyKSB8fCAvXnN1Ym1pdFxcYi9pLnRlc3QocilcclxufVxyXG5cclxuZnVuY3Rpb24gdihlKSB7XHJcbiAgaWYgKCEoZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHx8IHkoZSkpIHJldHVybiBudWxsO1xyXG4gIGxldCB0ID0gZS5jbG9zZXN0KFwiZGl2LmFwcEdvLmNlbnRlclwiKTtcclxuICBpZiAodCkgcmV0dXJuIHQ7XHJcbiAgbGV0IHIgPSBlLmNsb3Nlc3QoYFtkYXRhLWRvam8tYXR0YWNoLXBvaW50PVwiJHtiLkFEUF9SRUNSVUlUSU5HX1BBR0VSX05FWFRfQVRUQUNIfVwiXWApO1xyXG4gIGlmIChyKSByZXR1cm4gcjtcclxuICBsZXQgbiA9IGUuY2xvc2VzdCgnW2RhdGEtZG9qby1hdHRhY2gtcG9pbnQ9XCJ0aGVQYWdlck5leHRcIl0nKTtcclxuICBpZiAobikgcmV0dXJuIG47XHJcbiAgbGV0IG8gPSBlO1xyXG4gIGZvciAoOyBvOykge1xyXG4gICAgbGV0IGUgPSBvLmdldEF0dHJpYnV0ZShcImRhdGEtZG9qby1hdHRhY2gtcG9pbnRcIikgfHwgXCJcIjtcclxuICAgIGlmICgvcGFnZXIvaS50ZXN0KGUpICYmIC9uZXh0L2kudGVzdChlKSkgcmV0dXJuIG87XHJcbiAgICBvID0gby5wYXJlbnRFbGVtZW50XHJcbiAgfVxyXG4gIGxldCBpID0gZS5jbG9zZXN0KFwiLnR3by5jb2x1bW5cIik7XHJcbiAgaWYgKGkpIHtcclxuICAgIGxldCB0ID0gaS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmFwcEdvLmNlbnRlclwiKTtcclxuICAgIGZvciAobGV0IHIgPSB0Lmxlbmd0aCAtIDE7IHIgPj0gMDsgci0tKSB7XHJcbiAgICAgIGxldCBuID0gdFtyXTtcclxuICAgICAgaWYgKG4uY29udGFpbnMoZSkpIHJldHVybiBuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHcoZSkge1xyXG4gIGlmIChcInRydWVcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpIHx8IGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlqaXREaXNhYmxlZFwiKSkgcmV0dXJuICFcclxuICAwO1xyXG4gIGxldCB0ID0gZS5wYXJlbnRFbGVtZW50O1xyXG4gIGlmICh0Py5jbGFzc0xpc3QuY29udGFpbnMoXCJkaWppdERpc2FibGVkXCIpKSByZXR1cm4gITA7XHJcbiAgbGV0IHIgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtcclxuICByZXR1cm4gXCJub25lXCIgPT09IHIuZGlzcGxheSB8fCBcImhpZGRlblwiID09PSByLnZpc2liaWxpdHlcclxufVxyXG5jbGFzcyBTIGV4dGVuZHMgbS5CYXNlRmlsbGVyIHtcclxuICBnZXRGaWVsZEhhbmRsZXJzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3UuRklFTERfVFlQRS5URVhUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgbC5maWxsSW5wdXRUZXh0RmllbGQpKGUuJGlucHV0LCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBsLmZpbGxDaGVja0JveGVzRmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW3UuRklFTERfVFlQRS5TRUxFQ1RdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBnLmZpbGxDdXN0b21TZWxlY3RGaWVsZCkoZT8uJGlucHV0LCB0LCB0aGlzLmN1cnJlbnRMb2NhdGlvbiksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbdS5GSUVMRF9UWVBFLlJBRElPR1JPVVBdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBnLmZpbGxSYWRpb0dyb3VwRmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBleHRyYWN0Rm9ybVJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBiLmdldFJ1bGVzKSgpXHJcbiAgfVxyXG4gIGdldFNpdGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIFwiYWRwLXJlY3J1aXRpbmdcIlxyXG4gIH1cclxuICBmb3JtYXRBbnN3ZXIoZSkge1xyXG4gICAgcmV0dXJuICgwLCBoLmZvcm1hdEFuc3dlcikoZSlcclxuICB9XHJcbiAgYXN5bmMgZ2V0QXV0b2ZpbGxTbmFwc2hvdCgpIHtcclxuICAgIHJldHVybiAoMCwgYi5nZXRGb3JtU25hcHNob3QpKClcclxuICB9XHJcbiAgYXN5bmMgZ2V0U3VibWl0U25hcHNob3QoKSB7XHJcbiAgICByZXR1cm4gKDAsIGIuZ2V0Rm9ybVNuYXBzaG90KSgpXHJcbiAgfVxyXG4gIGFzeW5jIGV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcygpIHt9XHJcbiAgaXNDb3VudHJ5UnVsZShlKSB7XHJcbiAgICByZXR1cm4gZS50eXBlID09PSB1LkZJRUxEX1RZUEUuU0VMRUNUICYmIC9eY291bnRyeSQvaS50ZXN0KGUubGFiZWwpXHJcbiAgfVxyXG4gIGlzU3RhdGVQcm92aW5jZVJ1bGUoZSkge1xyXG4gICAgaWYgKGUudHlwZSAhPT0gdS5GSUVMRF9UWVBFLlNFTEVDVCkgcmV0dXJuICExO1xyXG4gICAgbGV0IHQgPSBlLmxhYmVsLnJlcGxhY2UoL1teYS16XS9naSwgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBbXCJzdGF0ZVwiLCBcInByb3ZpbmNlXCIsIFwic3RhdGVwcm92aW5jZVwiLCBcInByb3ZpbmNlc3RhdGVcIiwgXCJzdGF0ZXJlZ2lvblwiLFxyXG4gICAgICBcInN0YXRldGVycml0b3J5XCIsIFwic3RhdGVwcm92XCIsIFwic3RhdGVwcm92aW5jZXRlcnJpdG9yeVwiXHJcbiAgICBdLmluY2x1ZGVzKHQpXHJcbiAgfVxyXG4gIGdldFJ1bGVzV2l0aG91dENsaWVudExvY2F0aW9uUnVsZXMoZSkge1xyXG4gICAgcmV0dXJuIGUuZmlsdGVyKGUgPT4gIXRoaXMuaXNDb3VudHJ5UnVsZShlKSAmJiAhdGhpcy5pc1N0YXRlUHJvdmluY2VSdWxlKGUpKVxyXG4gIH1cclxuICBhc3luYyBmaWxsQ291bnRyeVJ1bGVEaXJlY3RseShlLCB0KSB7XHJcbiAgICBsZXQgciA9IGUuZmluZChlID0+IHRoaXMuaXNDb3VudHJ5UnVsZShlKSk7XHJcbiAgICBpZiAoIXIpIHJldHVybiAhMTtcclxuICAgIGxldCBuID0gKDAsIGcubm9ybWFsaXplUmVjcnVpdGluZ0NvdW50cnlWYWx1ZSkodC5jb3VudHJ5KTtcclxuICAgIGlmICghbikgcmV0dXJuIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKHIubGFiZWwpLCAhMTtcclxuICAgIGxldCBvID0gYXdhaXQgKDAsIGcuZmlsbEN1c3RvbVNlbGVjdEZpZWxkKShyLiRpbnB1dCwgbiwgdCk7XHJcbiAgICByZXR1cm4gbyA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKHIubGFiZWwpIDogdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgLnVwZGF0ZU1pc3NlZFByb2dyZXNzKHIubGFiZWwpLCBvXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxTdGF0ZVJ1bGVEaXJlY3RseShlLCB0KSB7XHJcbiAgICBsZXQgciA9IGUuZmluZChlID0+IHRoaXMuaXNTdGF0ZVByb3ZpbmNlUnVsZShlKSk7XHJcbiAgICBpZiAoIXIpIHJldHVybiAhMTtcclxuICAgIGxldCBuID0gdC5zdGF0ZS50cmltKCk7XHJcbiAgICBpZiAoIW4pIHJldHVybiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhyLmxhYmVsKSwgITE7XHJcbiAgICBsZXQgbyA9IGF3YWl0ICgwLCBnLmZpbGxDdXN0b21TZWxlY3RGaWVsZCkoci4kaW5wdXQsIG4sIHQpO1xyXG4gICAgcmV0dXJuIG8gPyB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhyLmxhYmVsKSA6IHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC51cGRhdGVNaXNzZWRQcm9ncmVzcyhyLmxhYmVsKSwgb1xyXG4gIH1cclxuICBhc3luYyB1cGxvYWRSZXN1bWVPbmx5KCkge1xyXG4gICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMoW3tcclxuICAgICAgbGFiZWw6IFwiUmVzdW1lL0NWXCIsXHJcbiAgICAgIHJlcXVpcmVkOiAhMFxyXG4gICAgfV0pO1xyXG4gICAgbGV0IGUgPSBudWxsO1xyXG4gICAgcmV0dXJuICh0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0ICgwLCBnLnVwbG9hZFJlc3VtZSkodGhpcy5yZXN1bWVJbmZvLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKVxyXG4gICAgICB9IGNhdGNoICh0KSB7XHJcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBpLkNhbmNlbGxlZEVycm9yKSB0aHJvdyB0O1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKSwgdCBpbnN0YW5jZW9mIGFcclxuICAgICAgICAgIC5SZXN1bWVNaXNzaW5nQ29kZUVycm9yIHx8IHQgaW5zdGFuY2VvZiBFcnJvciAmJiB0Lm1lc3NhZ2UgPT09IGFcclxuICAgICAgICAgIC5OT19SRVNVTUVfRk9VTkRfRVJST1IpIHtcclxuICAgICAgICAgIGUgPSB0IGluc3RhbmNlb2YgYS5SZXN1bWVNaXNzaW5nQ29kZUVycm9yID8gdC5tZXNzYWdlIDogYy5DVVNUT01fRVJST1JfQ09ERVNcclxuICAgICAgICAgICAgLlJFU1VNRV9NSVNTSU5HX0tFWSwgKDAsIHMuc2VuZEh0dHBTdGF0dXNNZXNzYWdlKShlKTtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiW0FEUCBSZWNydWl0aW5nXSByZXN1bWUtb25seSB1cGxvYWQgZmFpbGVkOlwiLCB0KVxyXG4gICAgICB9XHJcbiAgICB9KSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIGUpID8gZSA6ICgoMCwgcy5wb3N0U3RhdHVzKShcImZpbGxpbmdcIiwgdGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMsIHRoaXMudGltZVRyYWNlKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpKVxyXG4gIH1cclxuICBhc3luYyB3YWl0Rm9yRW5hYmxlZEFkcFJlY3J1aXRpbmdWc2lkUmFjZVJ1bGUoZSkge1xyXG4gICAgbGV0IHQgPSBEYXRlLm5vdygpICsgMTUwMCxcclxuICAgICAgciA9IDAsXHJcbiAgICAgIG4gPSBudWxsLFxyXG4gICAgICBvID0gIWU7XHJcbiAgICBmb3IgKDsgRGF0ZS5ub3coKSA8PSB0Oykge1xyXG4gICAgICBpZiAociArPSAxLCBlICYmIChvID0gKDAsIGIuaXNBZHBSZWNydWl0aW5nVnNpZFJhY2VSZXF1aXJlZEFmdGVyRXRobmljaXR5KSgpKSwgIW8pIHtcclxuICAgICAgICBhd2FpdCAoMCwgcC5kZWxheSkoMTAwKTtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcbiAgICAgIGxldCB0ID0gYXdhaXQgKDAsIGIuZ2V0RW5hYmxlZEFkcFJlY3J1aXRpbmdWc2lkUmFjZVJ1bGUpKCk7XHJcbiAgICAgIGlmICh0ICYmIChuID0gdCwgdC5vcHRpb25zPy5sZW5ndGgpKSByZXR1cm4gY29uc29sZS5pbmZvKFxyXG4gICAgICAgIFwiW0FEUCBSZWNydWl0aW5nXVtWU0lEIFJhY2VdIGxpdmUgcnVsZSByZWFkeVwiLCB7XHJcbiAgICAgICAgICBhdHRlbXB0czogcixcclxuICAgICAgICAgIG9wdGlvbkNvdW50OiB0Lm9wdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgfSksIHQ7XHJcbiAgICAgIGF3YWl0ICgwLCBwLmRlbGF5KSgxMDApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29uc29sZS5pbmZvKFwiW0FEUCBSZWNydWl0aW5nXVtWU0lEIFJhY2VdIGxpdmUgcnVsZSB3YWl0IGVuZGVkXCIsIHtcclxuICAgICAgYXR0ZW1wdHM6IHIsXHJcbiAgICAgIGV0aG5pY2l0eVRyaWdnZXJPYnNlcnZlZDogbyxcclxuICAgICAgcmFjZUNvbnRyb2xFbmFibGVkOiAhIW4sXHJcbiAgICAgIG9wdGlvbkNvdW50OiBuPy5vcHRpb25zPy5sZW5ndGggPz8gMFxyXG4gICAgfSksIG5cclxuICB9XHJcbiAgYXN5bmMgZmlsbERlZmVycmVkQWRwUmVjcnVpdGluZ1ZzaWRSYWNlKGUsIHQsIHIpIHtcclxuICAgIGlmICghZS5sZW5ndGggJiYgIXQpIHJldHVybjtcclxuICAgIGNvbnNvbGUuaW5mbyhcIltBRFAgUmVjcnVpdGluZ11bVlNJRCBSYWNlXSBkZWZlciBkZXBlbmRlbnQgcnVsZVwiLCB7XHJcbiAgICAgIGRlZmVycmVkUnVsZUNvdW50OiBlLmxlbmd0aCxcclxuICAgICAgaGFzVnNpZFJhY2VEZXBlbmRlbmN5OiB0LFxyXG4gICAgICBpbml0aWFsT3B0aW9uQ291bnRzOiBlLm1hcChlID0+IGUub3B0aW9ucz8ubGVuZ3RoID8/IDApXHJcbiAgICB9KTtcclxuICAgIGxldCBuID0gYXdhaXQgdGhpcy53YWl0Rm9yRW5hYmxlZEFkcFJlY3J1aXRpbmdWc2lkUmFjZVJ1bGUodCk7XHJcbiAgICBpZiAoIW4pIHtcclxuICAgICAgY29uc29sZS5pbmZvKFwiW0FEUCBSZWNydWl0aW5nXVtWU0lEIFJhY2VdIG5vdCByZW5kZXJlZCBhZnRlciBFdGhuaWNpdHlcIiwge1xyXG4gICAgICAgIGRlZmVycmVkUnVsZUNvdW50OiBlLmxlbmd0aFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyhuKSwgIW4ub3B0aW9ucz8ubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIltBRFAgUmVjcnVpdGluZ11bVlNJRCBSYWNlXSBlbmFibGVkIGNvbnRyb2wgaGFzIG5vIG9wdGlvbnNcIiwge1xyXG4gICAgICAgIG9wdGlvbkNvdW50OiAwXHJcbiAgICAgIH0pLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhuLmxhYmVsKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgbyA9IGF3YWl0IHRoaXMucmVxdWVzdEZvcm1BbnN3ZXJzKFtuXSwgciwge1xyXG4gICAgICB1cGRhdGVUaW1lVHJhY2U6ICExXHJcbiAgICB9KTtcclxuICAgIGlmICghbyB8fCBcInN0cmluZ1wiID09IHR5cGVvZiBvKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIltBRFAgUmVjcnVpdGluZ11bVlNJRCBSYWNlXSBhbnN3ZXIgcmVxdWVzdCBkaWQgbm90IHJldHVybiBhIGZpbGxhYmxlIHJlc3VsdFwiLCB7XHJcbiAgICAgICAgICBoYXNFcnJvckNvZGU6IFwic3RyaW5nXCIgPT0gdHlwZW9mIG9cclxuICAgICAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3Mobi5sYWJlbCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5hbnN3ZXIucmVndWxhciA9IHtcclxuICAgICAgLi4udGhpcy5hbnN3ZXIucmVndWxhcixcclxuICAgICAgLi4uby5yZWd1bGFyXHJcbiAgICB9LCB0aGlzLmFuc3dlci5maWxsRGF0YUxpc3QgPSBbLi4udGhpcy5hbnN3ZXIuZmlsbERhdGFMaXN0IHx8IFtdLCAuLi5vLmZpbGxEYXRhTGlzdCB8fCBbXV07XHJcbiAgICBsZXQgaSA9IHRoaXMub3BlcmF0aW9uQ29uZmlnW24udHlwZV07XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiW0FEUCBSZWNydWl0aW5nXVtWU0lEIFJhY2VdIG5vIHNlbGVjdCBvcGVyYXRpb24gY29uZmlndXJlZFwiKSwgdGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3Mobi5sYWJlbCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IGEgPSBhd2FpdCBpKG4sIHRoaXMuYW5zd2VyLnJlZ3VsYXIpO1xyXG4gICAgY29uc29sZS5pbmZvKFwiW0FEUCBSZWNydWl0aW5nXVtWU0lEIFJhY2VdIGZpbGwgZmluaXNoZWRcIiwge1xyXG4gICAgICBvcHRpb25Db3VudDogbi5vcHRpb25zLmxlbmd0aCxcclxuICAgICAgZmlsbGVkOiBhXHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBkb0ZpbGxGb3JtKGUpIHtcclxuICAgIHRoaXMucmVzZXRGYWxjb25SZXNwb25zZUFjY3VtdWxhdG9yKCksIHRoaXMucmVjcnVpdGluZ1BhZ2VyQ2FwdHVyZUhhbmRsZXIgJiYgKGRvY3VtZW50XHJcbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlY3J1aXRpbmdQYWdlckNhcHR1cmVIYW5kbGVyLCAhMCksIHRoaXNcclxuICAgICAgICAucmVjcnVpdGluZ1BhZ2VyQ2FwdHVyZUhhbmRsZXIgPSBudWxsKSwgdGhpcy50aW1lVHJhY2UucnVsZXNQYXJzZVN0YXJ0VGltZSA9IERhdGUubm93KCksXHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmNsZWFyKCksIHRoaXMudGFza1F1ZXVlLmNsZWFyKCksIHRoaXMudGFza1F1ZXVlLmFkZChnLnByZUZpbGxGb3JtKSxcclxuICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGcucHJlY2xpY2tBZGRCdXR0b25zKSgpXHJcbiAgICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKTtcclxuICAgIGxldCB0ID0gYXdhaXQgKDAsIGQudXNlQXV0b2ZpbGxJbmZvU3RvcmUpLmdldFN0YXRlKCkuZmV0Y2hBdXRvZmlsbEluZm8oKTtcclxuICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0ge1xyXG4gICAgICBjb3VudHJ5OiBTdHJpbmcodD8ubG9jYXRpb24/LmNvdW50cnkgPz8gXCJcIikudHJpbSgpLFxyXG4gICAgICBzdGF0ZTogU3RyaW5nKHQ/LmxvY2F0aW9uPy5zdGF0ZSA/PyBcIlwiKS50cmltKClcclxuICAgIH07XHJcbiAgICBsZXQgciA9IGF3YWl0ICgwLCBiLmdldFJ1bGVzKSgpLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVhZHlSdWxlczogbixcclxuICAgICAgICBkZWZlcnJlZFJhY2VSdWxlczogbFxyXG4gICAgICB9ID0gKDAsIGIucGFydGl0aW9uQWRwUmVjcnVpdGluZ1ZzaWRSYWNlUnVsZXMpKHIpLFxyXG4gICAgICBjID0gKDAsIGIuaGFzQWRwUmVjcnVpdGluZ1ZzaWRSYWNlRGVwZW5kZW5jeSkoKTtcclxuICAgIGlmICh0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyhuKSwgMCA9PT0gbi5sZW5ndGgpIHtcclxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVVcGxvYWRSZXN1bWUgJiYgKDAsIGcuaGFzUmVzdW1lVXBsb2FkSW5wdXQpKCkpIHtcclxuICAgICAgICBsZXQgZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVRyYWNlLnJlcXVlc3RTdGFydFRpbWUgPSBlLCB0aGlzLnRpbWVUcmFjZS5maWxsU3RhcnRUaW1lID0gZSwgYXdhaXQgdGhpc1xyXG4gICAgICAgICAgLnVwbG9hZFJlc3VtZU9ubHkoKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzVHJhY2tlci5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy50b2tlbiB8fCAodGhpcy50b2tlbiA9IGF3YWl0ICgwLCBhLmdldFNpdGVUb2tlbikoKSksIHRoaXMudGltZVRyYWNlXHJcbiAgICAgICAgLnJlcXVlc3RTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICBsZXQgdCA9IHRoaXMuY2FwdHVyZUZhbGNvblJlc3BvbnNlUnVuKCksXHJcbiAgICAgICAgciA9IGF3YWl0ICgwLCBhLmdldEVsZW1lbnRSdWxlcykobiwgXCJhZHAtcmVjcnVpdGluZ1wiLCB0aGlzLnRva2VuLCBlLCB0aGlzLnJlc3VtZUluZm8uaWQsXHJcbiAgICAgICAgICB0aGlzLnJlc3VtZUluZm8udGFpbG9ySWQpO1xyXG4gICAgICB0aGlzLnJlY29yZEZhbGNvblJlc3BvbnNlKHIsIHQpLCB0aGlzLmFuc3dlciA9ICgwLCBoLmZvcm1hdEFuc3dlcikociksIHRoaXMudGltZVRyYWNlXHJcbiAgICAgICAgLmZpbGxTdGFydFRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgYS5IVFRQRXJyb3IgfHwgZSBpbnN0YW5jZW9mIGEuUmVzdW1lTWlzc2luZ0NvZGVFcnJvcikgcmV0dXJuICgwLCBzXHJcbiAgICAgICAgLnNlbmRIdHRwU3RhdHVzTWVzc2FnZSkoZS5tZXNzYWdlKSwgZS5tZXNzYWdlO1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5rbm93biBlcnJvciBvY2N1cnJlZDpcIiwgZSlcclxuICAgIH0oMCwgaS5jaGVja3BvaW50KSgpO1xyXG4gICAgbGV0IHAgPSAoMCwgYi5nZXRTdWJtaXRCdXR0b25UZXh0KSgpO1xyXG4gICAgKDAsIHMuYmluZFN1Ym1pdEJ1dHRvbikocCwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMsIHRoaXMudGltZVRyYWNlKSwgYXdhaXQgdGhpc1xyXG4gICAgICAuZmlsbENvdW50cnlSdWxlRGlyZWN0bHkobiwgdGhpcy5jdXJyZW50TG9jYXRpb24pLCBhd2FpdCB0aGlzLmZpbGxTdGF0ZVJ1bGVEaXJlY3RseShuLFxyXG4gICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uKTtcclxuICAgIGxldCBtID0gdGhpcy5nZXRSdWxlc1dpdGhvdXRDbGllbnRMb2NhdGlvblJ1bGVzKG4pLFxyXG4gICAgICB5ID0gWy4uLigwLCBhLmdldFJlZ3VsYXJPcGVyYXRpb25zKShtLCB0aGlzLmFuc3dlci5yZWd1bGFyLCB0aGlzLm9wZXJhdGlvbkNvbmZpZyldO1xyXG4gICAgZm9yIChsZXQgZSBvZiB5KSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgYXdhaXQgdGhpcy5maWxsRGVmZXJyZWRBZHBSZWNydWl0aW5nVnNpZFJhY2UobCwgYywgZSk7XHJcbiAgICBsZXQgUyA9ICgwLCBvLmNyZWF0ZVNlcXVlbnRpYWxTZWN0aW9uUmVzdWx0UmVwb3J0ZXIpKFwiZWR1Y2F0aW9uXCIsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLFxyXG4gICAgICAgIFwiZWR1Y2F0aW9uXCIpLFxyXG4gICAgICBFID0gITE7XHJcbiAgICBmb3IgKGxldCBlID0gMDsgZSA8IHRoaXMuYW5zd2VyLmVkdWNhdGlvbi5sZW5ndGg7IGUrKykge1xyXG4gICAgICBsZXQgdCA9IHRoaXMuYW5zd2VyLmVkdWNhdGlvbltlXSxcclxuICAgICAgICByID0gYXdhaXQgKDAsIGIuZ2V0RWR1UnVsZXMpKCksXHJcbiAgICAgICAgbiA9ICgwLCBhLmdldEVkdWNhdGlvbk9wZXJhdGlvbnMpKHIsIFt0XSwgdGhpcy5vcGVyYXRpb25Db25maWcsIHZvaWQgMCwge1xyXG4gICAgICAgICAgLi4uUy5mb3JSZWNvcmQoZSwgci5zbGljZSgwLCAxKSksXHJcbiAgICAgICAgICBvblNraXBwZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgRSA9ICEwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGUgb2YgbikgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgICBpZiAoYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIEUpIGJyZWFrXHJcbiAgICB9XHJcbiAgICBFID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIikgOiB0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoID5cclxuICAgICAgMCAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVkdWNhdGlvblwiKTtcclxuICAgIGxldCB4ID0gKDAsIG8uY3JlYXRlU2VxdWVudGlhbFNlY3Rpb25SZXN1bHRSZXBvcnRlcikoXCJlbXBsb3ltZW50XCIsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLFxyXG4gICAgICAgIFwiZXhwZXJpZW5jZVwiKSxcclxuICAgICAgQyA9ICExO1xyXG4gICAgZm9yIChsZXQgZSA9IDA7IGUgPCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZS5sZW5ndGg7IGUrKykge1xyXG4gICAgICBsZXQgdCA9IHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlW2VdLFxyXG4gICAgICAgIHIgPSAoMCwgZy5nZXRWaXNpYmxlRW1wbG95bWVudENvdW50KSgpO1xyXG4gICAgICBlID49IHIgJiYgKHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGcuYWRkU2luZ2xlRW1wbG95bWVudFNlY3Rpb24pKClcclxuICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpKTtcclxuICAgICAgbGV0IG4gPSBhd2FpdCAoMCwgYi5nZXRFeHBSdWxlcykoKSxcclxuICAgICAgICBvID0gKDAsIGEuZ2V0RW1wbG95bWVudE9wZXJhdGlvbnMpKG4sIFt0XSwgdGhpcy5vcGVyYXRpb25Db25maWcsIHZvaWQgMCwge1xyXG4gICAgICAgICAgLi4ueC5mb3JSZWNvcmQoZSwgbi5zbGljZSgwLCAxKSksXHJcbiAgICAgICAgICBvblNraXBwZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgQyA9ICEwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGUgb2YgbykgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgICBpZiAoYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIEMpIGJyZWFrXHJcbiAgICB9XHJcbiAgICBDID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpIDogdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2VcclxuICAgICAgLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpLCB0aGlzXHJcbiAgICAgIC5kaXNhYmxlVXBsb2FkUmVzdW1lID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIikgOiB0aGlzXHJcbiAgICAgIC50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCAoMCwgZy51cGxvYWRSZXN1bWUpKHRoaXMucmVzdW1lSW5mbywgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAgIC51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcylcclxuICAgICAgfSksIHRoaXMudGFza1F1ZXVlLmFkZCgoKSA9PiB7fSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCAoMCwgZ1xyXG4gICAgICAgIC5zeW5jRmlsbGVkVGV4dFByb2dyZXNzRnJvbUN1cnJlbnRWYWx1ZXMpKHIsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLCB0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyk7XHJcbiAgICBsZXQgQSA9ICgwLCBiLmdldEZvcm1TbmFwc2hvdCkoKTtcclxuICAgIHJldHVybiB0aGlzLnJlY3J1aXRpbmdQYWdlckNhcHR1cmVIYW5kbGVyID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IHQgPSB2KGUudGFyZ2V0KTtcclxuICAgICAgICB0Py5pc0Nvbm5lY3RlZCAmJiAodyh0KSB8fCAoMCwgYi5zdWJtaXRIYW5kbGVyKShBLCB0aGlzLmFuc3dlcikpXHJcbiAgICAgIH0sIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJlY3J1aXRpbmdQYWdlckNhcHR1cmVIYW5kbGVyLCAhMCksICgwLCBzXHJcbiAgICAgICAgLnBvc3RTdGF0dXMpKFwiZmlsbGluZ1wiLCB0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cywgdGhpcy50aW1lVHJhY2UpLCB3aW5kb3cudG9wXHJcbiAgICAgID8ucG9zdE1lc3NhZ2UoZi5jbGVhbk9iamVjdCh7XHJcbiAgICAgICAgdHlwZTogdS5NRVNTQUdFX0VWRU5UUy5hdXRvRmlsbFJlc3VsdEZyb21JZnJhbWUsXHJcbiAgICAgICAgZGF0YTogdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXNcclxuICAgICAgfSksIHtcclxuICAgICAgICB0YXJnZXRPcmlnaW46IFwiKlwiXHJcbiAgICAgIH0pLCB0aGlzLnByb2dyZXNzVHJhY2tlci5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKVxyXG4gIH1cclxuICBzdWJtaXRBcHBsaWNhdGlvbigpIHt9XHJcbiAgY29uc3RydWN0b3IoLi4uZSkge1xyXG4gICAgc3VwZXIoLi4uZSksIHRoaXMucmVjcnVpdGluZ1BhZ2VyQ2FwdHVyZUhhbmRsZXIgPSBudWxsLCB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IHtcclxuICAgICAgY291bnRyeTogXCJcIixcclxuICAgICAgc3RhdGU6IFwiXCJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJhZHAtcmVjcnVpdGluZy4xYTBkZjg1ZC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);