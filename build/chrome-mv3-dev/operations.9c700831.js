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
})({"gTkFS":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\breezy\\operations.js",
    "bundleId": "258727309c700831",
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
var j = z(require("6ab03319eb5e240c"));
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

},{"6ab03319eb5e240c":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"34xsL":[function(require,module,exports) {
/**
 * Parcel module id: 4P8sE
 * Resolved path: src/contents/sites/breezy/operations.js
 * Dependencies:
 *   ./rules -> hU5fc  =>  src/contents/sites/breezy/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "stabilizeBreezyAngularLocation", ()=>p), n.export(r, "preFillForm", ()=>h), n.export(r, "afterUploadResume", ()=>g), n.export(r, "uploadResume", ()=>b), n.export(r, "uploadFiles", ()=>y), n.export(r, "waitForBreezyResumeReady", ()=>v), n.export(r, "fillInputField", ()=>S), n.export(r, "fillDateField", ()=>E), n.export(r, "fillSelectField", ()=>x), n.export(r, "fillRadioField", ()=>C), n.export(r, "fillCheckboxField", ()=>A), n.export(r, "clickDeleteItemButton", ()=>k), n.export(r, "clickAddItemButton", ()=>T), n.export(r, "ensureEducationAndWorkExperienceContainers", ()=>F), n.export(r, "blurPage", ()=>I), n.export(r, "getSnapshot", ()=>j), n.export(r, "submitObserver", ()=>D);
var o = e("~contents/methods/choice-match"), i = e("~contents/methods/answer"), a = e("~core/enums"), l = e("~core/xpath"), s = e("~store/url"), u = e("~utils/delay"), c = e("~utils/getTargetOrTimeout"), d = n.interopDefault(c), f = e("./rules");
let p = ({ currentTabUrl: e1, currentUrl: t = window.location.href, history: r1 = window.history, setCurrentTabUrl: n } = {})=>{
    let o;
    try {
        o = new URL(t);
    } catch  {
        return null;
    }
    if (!o.searchParams.has("jr_id")) return null;
    let i = e1 || (0, s.useUrlStore).getState().currentTabUrl || t;
    o.searchParams.delete("jr_id");
    let a = o.toString();
    return a === t ? null : (r1.replaceState(r1.state, "", a), (n || (0, s.useUrlStore).getState().setCurrentTabUrl)(i), {
        visibleUrl: a,
        preservedAutofillUrl: i
    });
}, m = (e1)=>{
    let t = (e1)=>{
        e1.preventDefault();
    };
    document.addEventListener("click", t, {
        capture: !0,
        once: !0
    });
    try {
        e1.click();
    } finally{
        document.removeEventListener("click", t, {
            capture: !0
        });
    }
}, h = async ()=>{
    let e1 = (0, l.getFirstOrderedNodeSafe)('.//a[child::span[text()="Apply To Position"]]');
    if (e1) {
        e1?.click();
        return;
    }
}, g = async ()=>{
    let e1 = await (0, d.default)(()=>{
        let e1 = (0, l.getFirstOrderedNode)("//div[contains(@class, 'file-input-container') and .//span[text()='Attached']]");
        if (e1) return e1;
    }, ()=>!1, 100);
    e1 && (await k(document), await k(document), await T(document, f.hardCodeConfig[f.HARDCODE_KEY.education].addButton, (0, l.getOrderedNodes)(f.hardCodeConfig[f.HARDCODE_KEY.education].container).length > 0 ? 0 : 1), await T(document, f.hardCodeConfig[f.HARDCODE_KEY.workExperience].addButton, (0, l.getOrderedNodes)(f.hardCodeConfig[f.HARDCODE_KEY.workExperience].container).length > 0 ? 0 : 1));
}, b = async (e1)=>{
    let t = (0, l.getFirstOrderedNode)('//input[@name="cResume"]');
    t && await y(t, await (0, i.fetchPdfAsBlob)(e1)), await g();
}, y = async (e1, t)=>{
    if (e1 && t) {
        try {
            e1.files = t.files, e1.dispatchEvent(new Event("change", {
                bubbles: !0,
                cancelable: !1
            }));
        } catch (e1) {
            console.error("Error uploading files:", e1);
            return;
        }
        await v();
    }
}, v = async (e1 = 15e3)=>{
    let t = Date.now(), r1 = await (0, d.default)(()=>(0, l.getFirstOrderedNode)("//div[contains(@class, 'file-input-container') and .//span[text()='Attached']]"), ()=>Date.now() - t > e1, Math.max(1, Math.ceil((e1 - (Date.now() - t)) / 100)));
    if (!r1) return;
    let n = window.angular?.element?.(document.body)?.injector?.()?.get?.("$http");
    if (!n?.pendingRequests) {
        await w(r1, t, e1);
        return;
    }
    let o = 0;
    for(; Date.now() - t < e1;){
        if (0 === n.pendingRequests.length) {
            if (o || (o = Date.now()), Date.now() - o >= 500) return;
        } else o = 0;
        await (0, u.delay)(100);
    }
}, w = async (e1, t, r1, n = 500, o = 1e3)=>{
    if ("undefined" == typeof MutationObserver) {
        await (0, u.delay)(o);
        return;
    }
    let i = e1.closest("form") || document.body, a = Date.now(), l = new MutationObserver(()=>{
        a = Date.now();
    });
    l.observe(i, {
        attributes: !0,
        childList: !0,
        subtree: !0
    });
    try {
        for(; Date.now() - t < r1;){
            let e1 = Date.now() - t, r1 = Date.now() - a;
            if (e1 >= o && r1 >= n) return;
            await (0, u.delay)(100);
        }
    } finally{
        l.disconnect();
    }
}, S = async (e1, t)=>{
    e1 && t && (e1.focus(), e1.value = t, e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    })), await (0, u.delay)(100), e1.blur());
}, E = async (e1, t)=>{
    if (!e1 || !t) return;
    Array.isArray(t) && (t = t[0]);
    let r1 = t.trim(), n = /^\d{4}$/, o = /^\d{4}[-/]\d{2}$/;
    n.test(r1) ? r1 = `${r1}-01-01` : o.test(r1) && (r1 = `${r1.replace("/", "-")}-01`), e1.focus(), e1.value = r1, e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    })), await (0, u.delay)(100), e1.blur();
}, x = async (e1, t)=>{
    if (!e1 || !t.length) return;
    let r1 = t[0], n = Array.from(e1.options);
    for (let t of n)if ((0, o.isExactChoiceMatch)(t.text.toLowerCase(), r1.toLowerCase())) {
        e1.value = t.value, e1.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !0
        })), await (0, u.delay)(100), e1.blur();
        return;
    }
}, C = async (e1, t)=>{
    if (!e1.length || !t.length) return;
    Array.isArray(t) && (t = t[0]);
    let r1 = t.toLowerCase();
    for (let t of e1){
        let e1 = t.closest("label") || t.nextElementSibling, n = e1?.textContent?.trim().toLowerCase() || "";
        if (n === r1) {
            t.click(), t.dispatchEvent(new Event("change", {
                bubbles: !0,
                cancelable: !0
            })), await (0, u.delay)(100), t.blur();
            return;
        }
    }
}, A = async (e1, t)=>{
    if (!e1.length || !t.length) return;
    let r1 = t.map((e1)=>e1.toLowerCase());
    for (let t of e1){
        let e1 = t.closest("label") || t.nextElementSibling, n = e1?.textContent?.trim().toLowerCase() || "";
        r1.includes(n) && (t.click(), t.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !0
        })), await (0, u.delay)(100), t.blur());
    }
}, k = async (e1)=>{
    if (!e1) return;
    let t = (0, l.getOrderedNodes)('.//a[text()="Delete"]', e1) || [];
    for (let e1 of t)m(e1), await (0, u.delay)(300);
}, T = async (e1, t, r1)=>{
    if (r1 <= 0) return;
    let n = null;
    if (n = (0, l.getFirstOrderedNode)(t, e1)) {
        for(let e1 = 0; e1 < r1; e1++)m(n), await (0, u.delay)(500);
        await (0, u.delay)(500);
    }
}, F = async ()=>{
    for (let e1 of [
        f.hardCodeConfig[f.HARDCODE_KEY.education],
        f.hardCodeConfig[f.HARDCODE_KEY.workExperience]
    ]){
        let t = (0, l.getFirstOrderedNode)(e1.addButton, document), r1 = (0, l.getOrderedNodes)(e1.container, document);
        t && 0 === r1.length && await T(document, e1.addButton, 1);
    }
}, I = ()=>{
    let e1 = document.activeElement;
    e1 && e1.blur();
}, j = (e1)=>{
    let t = {};
    for (let r1 of e1){
        let e1 = r1.label;
        if (!e1) continue;
        let n = r1;
        switch(r1.type){
            case a.FIELD_TYPE.TEXT:
            case a.FIELD_TYPE.DATE:
                {
                    let r1 = n.$input;
                    t[e1] = r1?.value || "";
                    break;
                }
            case a.FIELD_TYPE.SELECT:
                {
                    let r1 = n.$input;
                    if (r1 && r1.selectedIndex >= 0) {
                        let n = r1.options[r1.selectedIndex];
                        t[e1] = n?.text?.trim() || "";
                    } else t[e1] = "";
                    break;
                }
            case a.FIELD_TYPE.RADIO:
                {
                    let r1 = n.$input, o = r1?.find((e1)=>e1.checked);
                    if (o) {
                        let r1 = o.closest("label") || o.nextElementSibling;
                        t[e1] = r1?.textContent?.trim() || o.value;
                    } else t[e1] = "";
                    break;
                }
            case a.FIELD_TYPE.CHECKBOX:
                {
                    let r1 = n.$checkboxs, o = [];
                    if (r1) {
                        for (let e1 of r1)if (e1.checked) {
                            let t = e1.closest("label") || e1.nextElementSibling;
                            o.push(t?.textContent?.trim() || e1.value);
                        }
                    }
                    t[e1] = o;
                }
        }
    }
    let r1 = (0, l.getOrderedNodes)(f.hardCodeConfig[f.HARDCODE_KEY.education].snapshot);
    if (r1.length > 0) {
        let e1 = f.hardCodeConfig[f.HARDCODE_KEY.education].fields, n = [];
        for (let t of r1){
            let r1 = {};
            for (let n of e1){
                let e1 = (0, l.getFirstOrderedNode)(n.xpath, t);
                r1[n.key] = e1?.value || "";
            }
            Object.values(r1).every((e1)=>!e1) || n.push(r1);
        }
        t.education = n;
    }
    let n = (0, l.getOrderedNodes)(f.hardCodeConfig[f.HARDCODE_KEY.workExperience].snapshot);
    if (n.length > 0) {
        let e1 = f.hardCodeConfig[f.HARDCODE_KEY.workExperience].fields, r1 = [];
        for (let t of n){
            let n = {};
            for (let r1 of e1){
                let e1 = (0, l.getFirstOrderedNode)(r1.xpath, t);
                n[r1.key] = e1?.value || "";
            }
            Object.values(n).every((e1)=>!e1) || r1.push(n);
        }
        t.employment = r1;
    }
    return t;
}, D = (e1)=>{
    if (!e1) return;
    let t = new MutationObserver((e1)=>{
        for (let t of e1)t.type;
    });
    t.observe(document.body, {
        childList: !0,
        subtree: !0
    });
};

},{}]},["gTkFS","34xsL"], "34xsL", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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Y2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTA1ZjMwZmJhZDExOTE2OTcuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvYnJlZXp5L29wZXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcYnJlZXp5XFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCIyNTg3MjczMDljNzAwODMxXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogNFA4c0VcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2JyZWV6eS9vcGVyYXRpb25zLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9ydWxlcyAtPiBoVTVmYyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9icmVlenkvcnVsZXMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaCAtPiA2bWtJNCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqICAgfnN0b3JlL3VybCAtPiBiNTNMMyAgPT4gIHNyYy9zdG9yZS91cmwuanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICogICB+dXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0IC0+IDFUQmhGICA9PiAgc3JjL3V0aWxzL2dldFRhcmdldE9yVGltZW91dC5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwic3RhYmlsaXplQnJlZXp5QW5ndWxhckxvY2F0aW9uXCIsICgpID0+IHApLCBuLmV4cG9ydChyLFxyXG4gICAgXCJwcmVGaWxsRm9ybVwiLCAoKSA9PiBoKSwgbi5leHBvcnQociwgXCJhZnRlclVwbG9hZFJlc3VtZVwiLCAoKSA9PiBnKSwgbi5leHBvcnQociwgXCJ1cGxvYWRSZXN1bWVcIixcclxuICAgICgpID0+IGIpLCBuLmV4cG9ydChyLCBcInVwbG9hZEZpbGVzXCIsICgpID0+IHkpLCBuLmV4cG9ydChyLCBcIndhaXRGb3JCcmVlenlSZXN1bWVSZWFkeVwiLCAoKSA9PiB2KSxcclxuICBuLmV4cG9ydChyLCBcImZpbGxJbnB1dEZpZWxkXCIsICgpID0+IFMpLCBuLmV4cG9ydChyLCBcImZpbGxEYXRlRmllbGRcIiwgKCkgPT4gRSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImZpbGxTZWxlY3RGaWVsZFwiLCAoKSA9PiB4KSwgbi5leHBvcnQociwgXCJmaWxsUmFkaW9GaWVsZFwiLCAoKSA9PiBDKSwgbi5leHBvcnQocixcclxuICAgIFwiZmlsbENoZWNrYm94RmllbGRcIiwgKCkgPT4gQSksIG4uZXhwb3J0KHIsIFwiY2xpY2tEZWxldGVJdGVtQnV0dG9uXCIsICgpID0+IGspLCBuLmV4cG9ydChyLFxyXG4gICAgXCJjbGlja0FkZEl0ZW1CdXR0b25cIiwgKCkgPT4gVCksIG4uZXhwb3J0KHIsIFwiZW5zdXJlRWR1Y2F0aW9uQW5kV29ya0V4cGVyaWVuY2VDb250YWluZXJzXCIsICgpID0+XHJcbiAgICBGKSwgbi5leHBvcnQociwgXCJibHVyUGFnZVwiLCAoKSA9PiBJKSwgbi5leHBvcnQociwgXCJnZXRTbmFwc2hvdFwiLCAoKSA9PiBqKSwgbi5leHBvcnQocixcclxuICAgIFwic3VibWl0T2JzZXJ2ZXJcIiwgKCkgPT4gRCk7XHJcbnZhciBvID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaFwiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBhID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGwgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgcyA9IGUoXCJ+c3RvcmUvdXJsXCIpLFxyXG4gIHUgPSBlKFwifnV0aWxzL2RlbGF5XCIpLFxyXG4gIGMgPSBlKFwifnV0aWxzL2dldFRhcmdldE9yVGltZW91dFwiKSxcclxuICBkID0gbi5pbnRlcm9wRGVmYXVsdChjKSxcclxuICBmID0gZShcIi4vcnVsZXNcIik7XHJcbmxldCBwID0gKHtcclxuICAgIGN1cnJlbnRUYWJVcmw6IGUsXHJcbiAgICBjdXJyZW50VXJsOiB0ID0gd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICBoaXN0b3J5OiByID0gd2luZG93Lmhpc3RvcnksXHJcbiAgICBzZXRDdXJyZW50VGFiVXJsOiBuXHJcbiAgfSA9IHt9KSA9PiB7XHJcbiAgICBsZXQgbztcclxuICAgIHRyeSB7XHJcbiAgICAgIG8gPSBuZXcgVVJMKHQpXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGlmICghby5zZWFyY2hQYXJhbXMuaGFzKFwianJfaWRcIikpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGkgPSBlIHx8ICgwLCBzLnVzZVVybFN0b3JlKS5nZXRTdGF0ZSgpLmN1cnJlbnRUYWJVcmwgfHwgdDtcclxuICAgIG8uc2VhcmNoUGFyYW1zLmRlbGV0ZShcImpyX2lkXCIpO1xyXG4gICAgbGV0IGEgPSBvLnRvU3RyaW5nKCk7XHJcbiAgICByZXR1cm4gYSA9PT0gdCA/IG51bGwgOiAoci5yZXBsYWNlU3RhdGUoci5zdGF0ZSwgXCJcIiwgYSksIChuIHx8ICgwLCBzLnVzZVVybFN0b3JlKS5nZXRTdGF0ZSgpXHJcbiAgICAgIC5zZXRDdXJyZW50VGFiVXJsKShpKSwge1xyXG4gICAgICB2aXNpYmxlVXJsOiBhLFxyXG4gICAgICBwcmVzZXJ2ZWRBdXRvZmlsbFVybDogaVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG0gPSBlID0+IHtcclxuICAgIGxldCB0ID0gZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0LCB7XHJcbiAgICAgIGNhcHR1cmU6ICEwLFxyXG4gICAgICBvbmNlOiAhMFxyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBlLmNsaWNrKClcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0LCB7XHJcbiAgICAgICAgY2FwdHVyZTogITBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZSA9ICgwLCBsLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vYVtjaGlsZDo6c3Bhblt0ZXh0KCk9XCJBcHBseSBUbyBQb3NpdGlvblwiXV0nKTtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIGU/LmNsaWNrKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH0sIGcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCBkLmRlZmF1bHQpKCgpID0+IHtcclxuICAgICAgbGV0IGUgPSAoMCwgbC5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgICBcIi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2ZpbGUtaW5wdXQtY29udGFpbmVyJykgYW5kIC4vL3NwYW5bdGV4dCgpPSdBdHRhY2hlZCddXVwiKTtcclxuICAgICAgaWYgKGUpIHJldHVybiBlXHJcbiAgICB9LCAoKSA9PiAhMSwgMTAwKTtcclxuICAgIGUgJiYgKGF3YWl0IGsoZG9jdW1lbnQpLCBhd2FpdCBrKGRvY3VtZW50KSwgYXdhaXQgVChkb2N1bWVudCwgZi5oYXJkQ29kZUNvbmZpZ1tmXHJcbiAgICAgIC5IQVJEQ09ERV9LRVkuZWR1Y2F0aW9uXS5hZGRCdXR0b24sICgwLCBsLmdldE9yZGVyZWROb2RlcykoZi5oYXJkQ29kZUNvbmZpZ1tmXHJcbiAgICAgIC5IQVJEQ09ERV9LRVkuZWR1Y2F0aW9uXS5jb250YWluZXIpLmxlbmd0aCA+IDAgPyAwIDogMSksIGF3YWl0IFQoZG9jdW1lbnQsIGZcclxuICAgICAgLmhhcmRDb2RlQ29uZmlnW2YuSEFSRENPREVfS0VZLndvcmtFeHBlcmllbmNlXS5hZGRCdXR0b24sICgwLCBsLmdldE9yZGVyZWROb2RlcykoZlxyXG4gICAgICAgIC5oYXJkQ29kZUNvbmZpZ1tmLkhBUkRDT0RFX0tFWS53b3JrRXhwZXJpZW5jZV0uY29udGFpbmVyKS5sZW5ndGggPiAwID8gMCA6IDEpKVxyXG4gIH0sIGIgPSBhc3luYyBlID0+IHtcclxuICAgIGxldCB0ID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy8vaW5wdXRbQG5hbWU9XCJjUmVzdW1lXCJdJyk7XHJcbiAgICB0ICYmIGF3YWl0IHkodCwgYXdhaXQgKDAsIGkuZmV0Y2hQZGZBc0Jsb2IpKGUpKSwgYXdhaXQgZygpXHJcbiAgfSwgeSA9IGFzeW5jIChlLCB0KSA9PiB7XHJcbiAgICBpZiAoZSAmJiB0KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZS5maWxlcyA9IHQuZmlsZXMsIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgICAgICAgYnViYmxlczogITAsXHJcbiAgICAgICAgICBjYW5jZWxhYmxlOiAhMVxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyBmaWxlczpcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdigpXHJcbiAgICB9XHJcbiAgfSwgdiA9IGFzeW5jIChlID0gMTVlMykgPT4ge1xyXG4gICAgbGV0IHQgPSBEYXRlLm5vdygpLFxyXG4gICAgICByID0gYXdhaXQgKDAsIGQuZGVmYXVsdCkoKCkgPT4gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgICAgXCIvL2Rpdltjb250YWlucyhAY2xhc3MsICdmaWxlLWlucHV0LWNvbnRhaW5lcicpIGFuZCAuLy9zcGFuW3RleHQoKT0nQXR0YWNoZWQnXV1cIlxyXG4gICAgICAgICksICgpID0+IERhdGUubm93KCkgLSB0ID4gZSwgTWF0aC5tYXgoMSwgTWF0aC5jZWlsKChlIC0gKERhdGUubm93KCkgLSB0KSkgL1xyXG4gICAgICAgIDEwMCkpKTtcclxuICAgIGlmICghcikgcmV0dXJuO1xyXG4gICAgbGV0IG4gPSB3aW5kb3cuYW5ndWxhcj8uZWxlbWVudD8uKGRvY3VtZW50LmJvZHkpPy5pbmplY3Rvcj8uKCk/LmdldD8uKFwiJGh0dHBcIik7XHJcbiAgICBpZiAoIW4/LnBlbmRpbmdSZXF1ZXN0cykge1xyXG4gICAgICBhd2FpdCB3KHIsIHQsIGUpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBvID0gMDtcclxuICAgIGZvciAoOyBEYXRlLm5vdygpIC0gdCA8IGU7KSB7XHJcbiAgICAgIGlmICgwID09PSBuLnBlbmRpbmdSZXF1ZXN0cy5sZW5ndGgpIHtcclxuICAgICAgICBpZiAobyB8fCAobyA9IERhdGUubm93KCkpLCBEYXRlLm5vdygpIC0gbyA+PSA1MDApIHJldHVyblxyXG4gICAgICB9IGVsc2UgbyA9IDA7XHJcbiAgICAgIGF3YWl0ICgwLCB1LmRlbGF5KSgxMDApXHJcbiAgICB9XHJcbiAgfSwgdyA9IGFzeW5jIChlLCB0LCByLCBuID0gNTAwLCBvID0gMWUzKSA9PiB7XHJcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgTXV0YXRpb25PYnNlcnZlcikge1xyXG4gICAgICBhd2FpdCAoMCwgdS5kZWxheSkobyk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IGkgPSBlLmNsb3Nlc3QoXCJmb3JtXCIpIHx8IGRvY3VtZW50LmJvZHksXHJcbiAgICAgIGEgPSBEYXRlLm5vdygpLFxyXG4gICAgICBsID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIGEgPSBEYXRlLm5vdygpXHJcbiAgICAgIH0pO1xyXG4gICAgbC5vYnNlcnZlKGksIHtcclxuICAgICAgYXR0cmlidXRlczogITAsXHJcbiAgICAgIGNoaWxkTGlzdDogITAsXHJcbiAgICAgIHN1YnRyZWU6ICEwXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGZvciAoOyBEYXRlLm5vdygpIC0gdCA8IHI7KSB7XHJcbiAgICAgICAgbGV0IGUgPSBEYXRlLm5vdygpIC0gdCxcclxuICAgICAgICAgIHIgPSBEYXRlLm5vdygpIC0gYTtcclxuICAgICAgICBpZiAoZSA+PSBvICYmIHIgPj0gbikgcmV0dXJuO1xyXG4gICAgICAgIGF3YWl0ICgwLCB1LmRlbGF5KSgxMDApXHJcbiAgICAgIH1cclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGwuZGlzY29ubmVjdCgpXHJcbiAgICB9XHJcbiAgfSwgUyA9IGFzeW5jIChlLCB0KSA9PiB7XHJcbiAgICBlICYmIHQgJiYgKGUuZm9jdXMoKSwgZS52YWx1ZSA9IHQsIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICBjYW5jZWxhYmxlOiAhMFxyXG4gICAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICB9KSksIGF3YWl0ICgwLCB1LmRlbGF5KSgxMDApLCBlLmJsdXIoKSlcclxuICB9LCBFID0gYXN5bmMgKGUsIHQpID0+IHtcclxuICAgIGlmICghZSB8fCAhdCkgcmV0dXJuO1xyXG4gICAgQXJyYXkuaXNBcnJheSh0KSAmJiAodCA9IHRbMF0pO1xyXG4gICAgbGV0IHIgPSB0LnRyaW0oKSxcclxuICAgICAgbiA9IC9eXFxkezR9JC8sXHJcbiAgICAgIG8gPSAvXlxcZHs0fVstL11cXGR7Mn0kLztcclxuICAgIG4udGVzdChyKSA/IHIgPSBgJHtyfS0wMS0wMWAgOiBvLnRlc3QocikgJiYgKHIgPSBgJHtyLnJlcGxhY2UoXCIvXCIsXCItXCIpfS0wMWApLCBlXHJcbiAgICAgIC5mb2N1cygpLCBlLnZhbHVlID0gciwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgICAgICBidWJibGVzOiAhMCxcclxuICAgICAgICBjYW5jZWxhYmxlOiAhMFxyXG4gICAgICB9KSksIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICAgIH0pKSwgYXdhaXQgKDAsIHUuZGVsYXkpKDEwMCksIGUuYmx1cigpXHJcbiAgfSwgeCA9IGFzeW5jIChlLCB0KSA9PiB7XHJcbiAgICBpZiAoIWUgfHwgIXQubGVuZ3RoKSByZXR1cm47XHJcbiAgICBsZXQgciA9IHRbMF0sXHJcbiAgICAgIG4gPSBBcnJheS5mcm9tKGUub3B0aW9ucyk7XHJcbiAgICBmb3IgKGxldCB0IG9mIG4pXHJcbiAgICAgIGlmICgoMCwgby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKHQudGV4dC50b0xvd2VyQ2FzZSgpLCByLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgZS52YWx1ZSA9IHQudmFsdWUsIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgICAgICAgYnViYmxlczogITAsXHJcbiAgICAgICAgICBjYW5jZWxhYmxlOiAhMFxyXG4gICAgICAgIH0pKSwgYXdhaXQgKDAsIHUuZGVsYXkpKDEwMCksIGUuYmx1cigpO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgfSwgQyA9IGFzeW5jIChlLCB0KSA9PiB7XHJcbiAgICBpZiAoIWUubGVuZ3RoIHx8ICF0Lmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgQXJyYXkuaXNBcnJheSh0KSAmJiAodCA9IHRbMF0pO1xyXG4gICAgbGV0IHIgPSB0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBmb3IgKGxldCB0IG9mIGUpIHtcclxuICAgICAgbGV0IGUgPSB0LmNsb3Nlc3QoXCJsYWJlbFwiKSB8fCB0Lm5leHRFbGVtZW50U2libGluZyxcclxuICAgICAgICBuID0gZT8udGV4dENvbnRlbnQ/LnRyaW0oKS50b0xvd2VyQ2FzZSgpIHx8IFwiXCI7XHJcbiAgICAgIGlmIChuID09PSByKSB7XHJcbiAgICAgICAgdC5jbGljaygpLCB0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgICAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICAgICAgY2FuY2VsYWJsZTogITBcclxuICAgICAgICB9KSksIGF3YWl0ICgwLCB1LmRlbGF5KSgxMDApLCB0LmJsdXIoKTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIEEgPSBhc3luYyAoZSwgdCkgPT4ge1xyXG4gICAgaWYgKCFlLmxlbmd0aCB8fCAhdC5sZW5ndGgpIHJldHVybjtcclxuICAgIGxldCByID0gdC5tYXAoZSA9PiBlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgZm9yIChsZXQgdCBvZiBlKSB7XHJcbiAgICAgIGxldCBlID0gdC5jbG9zZXN0KFwibGFiZWxcIikgfHwgdC5uZXh0RWxlbWVudFNpYmxpbmcsXHJcbiAgICAgICAgbiA9IGU/LnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKSB8fCBcIlwiO1xyXG4gICAgICByLmluY2x1ZGVzKG4pICYmICh0LmNsaWNrKCksIHQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICAgIH0pKSwgYXdhaXQgKDAsIHUuZGVsYXkpKDEwMCksIHQuYmx1cigpKVxyXG4gICAgfVxyXG4gIH0sIGsgPSBhc3luYyBlID0+IHtcclxuICAgIGlmICghZSkgcmV0dXJuO1xyXG4gICAgbGV0IHQgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKCcuLy9hW3RleHQoKT1cIkRlbGV0ZVwiXScsIGUpIHx8IFtdO1xyXG4gICAgZm9yIChsZXQgZSBvZiB0KSBtKGUpLCBhd2FpdCAoMCwgdS5kZWxheSkoMzAwKVxyXG4gIH0sIFQgPSBhc3luYyAoZSwgdCwgcikgPT4ge1xyXG4gICAgaWYgKHIgPD0gMCkgcmV0dXJuO1xyXG4gICAgbGV0IG4gPSBudWxsO1xyXG4gICAgaWYgKG4gPSAoMCwgbC5nZXRGaXJzdE9yZGVyZWROb2RlKSh0LCBlKSkge1xyXG4gICAgICBmb3IgKGxldCBlID0gMDsgZSA8IHI7IGUrKykgbShuKSwgYXdhaXQgKDAsIHUuZGVsYXkpKDUwMCk7XHJcbiAgICAgIGF3YWl0ICgwLCB1LmRlbGF5KSg1MDApXHJcbiAgICB9XHJcbiAgfSwgRiA9IGFzeW5jICgpID0+IHtcclxuICAgIGZvciAobGV0IGUgb2YgW2YuaGFyZENvZGVDb25maWdbZi5IQVJEQ09ERV9LRVkuZWR1Y2F0aW9uXSwgZlxyXG4gICAgICAgIC5oYXJkQ29kZUNvbmZpZ1tmLkhBUkRDT0RFX0tFWS53b3JrRXhwZXJpZW5jZV1cclxuICAgICAgXSkge1xyXG4gICAgICBsZXQgdCA9ICgwLCBsLmdldEZpcnN0T3JkZXJlZE5vZGUpKGUuYWRkQnV0dG9uLCBkb2N1bWVudCksXHJcbiAgICAgICAgciA9ICgwLCBsLmdldE9yZGVyZWROb2RlcykoZS5jb250YWluZXIsIGRvY3VtZW50KTtcclxuICAgICAgdCAmJiAwID09PSByLmxlbmd0aCAmJiBhd2FpdCBUKGRvY3VtZW50LCBlLmFkZEJ1dHRvbiwgMSlcclxuICAgIH1cclxuICB9LCBJID0gKCkgPT4ge1xyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgZSAmJiBlLmJsdXIoKVxyXG4gIH0sIGogPSBlID0+IHtcclxuICAgIGxldCB0ID0ge307XHJcbiAgICBmb3IgKGxldCByIG9mIGUpIHtcclxuICAgICAgbGV0IGUgPSByLmxhYmVsO1xyXG4gICAgICBpZiAoIWUpIGNvbnRpbnVlO1xyXG4gICAgICBsZXQgbiA9IHI7XHJcbiAgICAgIHN3aXRjaCAoci50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhLkZJRUxEX1RZUEUuVEVYVDpcclxuICAgICAgICBjYXNlIGEuRklFTERfVFlQRS5EQVRFOiB7XHJcbiAgICAgICAgICBsZXQgciA9IG4uJGlucHV0O1xyXG4gICAgICAgICAgdFtlXSA9IHI/LnZhbHVlIHx8IFwiXCI7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIGEuRklFTERfVFlQRS5TRUxFQ1Q6IHtcclxuICAgICAgICAgIGxldCByID0gbi4kaW5wdXQ7XHJcbiAgICAgICAgICBpZiAociAmJiByLnNlbGVjdGVkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBsZXQgbiA9IHIub3B0aW9uc1tyLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgICAgICB0W2VdID0gbj8udGV4dD8udHJpbSgpIHx8IFwiXCJcclxuICAgICAgICAgIH0gZWxzZSB0W2VdID0gXCJcIjtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgYS5GSUVMRF9UWVBFLlJBRElPOiB7XHJcbiAgICAgICAgICBsZXQgciA9IG4uJGlucHV0LFxyXG4gICAgICAgICAgICBvID0gcj8uZmluZChlID0+IGUuY2hlY2tlZCk7XHJcbiAgICAgICAgICBpZiAobykge1xyXG4gICAgICAgICAgICBsZXQgciA9IG8uY2xvc2VzdChcImxhYmVsXCIpIHx8IG8ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICB0W2VdID0gcj8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBvLnZhbHVlXHJcbiAgICAgICAgICB9IGVsc2UgdFtlXSA9IFwiXCI7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIGEuRklFTERfVFlQRS5DSEVDS0JPWDoge1xyXG4gICAgICAgICAgbGV0IHIgPSBuLiRjaGVja2JveHMsXHJcbiAgICAgICAgICAgIG8gPSBbXTtcclxuICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGUgb2YgcilcclxuICAgICAgICAgICAgICBpZiAoZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IGUuY2xvc2VzdChcImxhYmVsXCIpIHx8IGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgby5wdXNoKHQ/LnRleHRDb250ZW50Py50cmltKCkgfHwgZS52YWx1ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0W2VdID0gb1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHIgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKGYuaGFyZENvZGVDb25maWdbZi5IQVJEQ09ERV9LRVlcclxuICAgICAgLmVkdWNhdGlvbl0uc25hcHNob3QpO1xyXG4gICAgaWYgKHIubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgZSA9IGYuaGFyZENvZGVDb25maWdbZi5IQVJEQ09ERV9LRVkuZWR1Y2F0aW9uXS5maWVsZHMsXHJcbiAgICAgICAgbiA9IFtdO1xyXG4gICAgICBmb3IgKGxldCB0IG9mIHIpIHtcclxuICAgICAgICBsZXQgciA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IG4gb2YgZSkge1xyXG4gICAgICAgICAgbGV0IGUgPSAoMCwgbC5nZXRGaXJzdE9yZGVyZWROb2RlKShuLnhwYXRoLCB0KTtcclxuICAgICAgICAgIHJbbi5rZXldID0gZT8udmFsdWUgfHwgXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QudmFsdWVzKHIpLmV2ZXJ5KGUgPT4gIWUpIHx8IG4ucHVzaChyKVxyXG4gICAgICB9XHJcbiAgICAgIHQuZWR1Y2F0aW9uID0gblxyXG4gICAgfVxyXG4gICAgbGV0IG4gPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKGYuaGFyZENvZGVDb25maWdbZi5IQVJEQ09ERV9LRVlcclxuICAgICAgLndvcmtFeHBlcmllbmNlXS5zbmFwc2hvdCk7XHJcbiAgICBpZiAobi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBlID0gZi5oYXJkQ29kZUNvbmZpZ1tmLkhBUkRDT0RFX0tFWS53b3JrRXhwZXJpZW5jZV0uZmllbGRzLFxyXG4gICAgICAgIHIgPSBbXTtcclxuICAgICAgZm9yIChsZXQgdCBvZiBuKSB7XHJcbiAgICAgICAgbGV0IG4gPSB7fTtcclxuICAgICAgICBmb3IgKGxldCByIG9mIGUpIHtcclxuICAgICAgICAgIGxldCBlID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoci54cGF0aCwgdCk7XHJcbiAgICAgICAgICBuW3Iua2V5XSA9IGU/LnZhbHVlIHx8IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhuKS5ldmVyeShlID0+ICFlKSB8fCByLnB1c2gobilcclxuICAgICAgfVxyXG4gICAgICB0LmVtcGxveW1lbnQgPSByXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdFxyXG4gIH0sIEQgPSBlID0+IHtcclxuICAgIGlmICghZSkgcmV0dXJuO1xyXG4gICAgbGV0IHQgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihlID0+IHtcclxuICAgICAgZm9yIChsZXQgdCBvZiBlKSB0LnR5cGVcclxuICAgIH0pO1xyXG4gICAgdC5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuICAgICAgY2hpbGRMaXN0OiAhMCxcclxuICAgICAgc3VidHJlZTogITBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wZXJhdGlvbnMuOWM3MDA4MzEuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);