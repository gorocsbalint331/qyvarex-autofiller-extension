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
})({"7pDHP":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\crawler\\discover-factory.ts",
    "bundleId": "dc081233bd5c059d",
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
var j = z(require("f550551b7ca65f9d"));
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

},{"f550551b7ca65f9d":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"dfxf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIELD_TYPE", ()=>(0, _types.FIELD_TYPE));
parcelHelpers.export(exports, "detectRegistryAts", ()=>(0, _detectRegistry.detectRegistryAts));
parcelHelpers.export(exports, "detectAtsSite", ()=>detectAtsSite);
parcelHelpers.export(exports, "discoverFieldsForSite", ()=>discoverFieldsForSite);
parcelHelpers.export(exports, "discoverFieldsFromLocation", ()=>discoverFieldsFromLocation);
var _discoverGreenhouse = require("~contents/crawler/discover-greenhouse");
var _discoverGeneric = require("~contents/crawler/discover-generic");
var _discoverLever = require("~contents/crawler/discover-lever");
var _discoverPersonio = require("~contents/crawler/discover-personio");
var _discoverWorkday = require("~contents/crawler/discover-workday");
var _detectRegistry = require("~contents/crawler/detect-registry");
var _types = require("~contents/crawler/types");
/** Map registry keys \u2192 Clean-TS discover adapters we own. */ const REGISTRY_TO_CLEAN = {
    personio: "personio",
    greenhouse: "greenhouse",
    lever: "lever",
    workday: "myworkday",
    myworkday: "myworkday",
    ashby: "ashby",
    oraclecloud: "oraclecloud",
    paycom: "paycomonline-v3",
    paycomonline: "paycomonline-v3"
};
function detectAtsSite(hostname, href = "") {
    const h = (hostname || "").toLowerCase();
    const u = (href || "").toLowerCase();
    // Fast paths (fixtures / common hosts)
    if (h.includes("personio.") || h.includes("jobs.personio")) return "personio";
    if (h.includes("greenhouse.io") || h.includes("boards.greenhouse") || u.includes("gh_jid=")) return "greenhouse";
    if (h.includes("lever.co") || h.includes("jobs.lever")) return "lever";
    if (h.includes("myworkdayjobs.com") || h.includes("workday.com")) return "myworkday";
    if (h.includes("ashbyhq.com") || h.includes("jobs.ashby")) return "ashby";
    if (h.includes("oraclecloud.com") || h.includes("fa.oracle")) return "oraclecloud";
    if (h.includes("paycomonline") || h.includes("paycom.com")) return "paycomonline-v3";
    const registered = (0, _detectRegistry.detectRegistryAts)(hostname, href);
    if (registered && REGISTRY_TO_CLEAN[registered]) return REGISTRY_TO_CLEAN[registered];
    // Unknown but registered ATS \u2192 generic native fill still helps
    if (registered) return "generic";
    return "generic";
}
function discoverFieldsForSite(site, doc) {
    switch(site){
        case "personio":
            return (0, _discoverPersonio.discoverPersonioFields)(doc);
        case "greenhouse":
            return (0, _discoverGreenhouse.discoverGreenhouseFields)(doc);
        case "lever":
            return (0, _discoverLever.discoverLeverFields)(doc);
        case "myworkday":
            return (0, _discoverWorkday.discoverWorkdayFields)(doc);
        case "ashby":
        case "oraclecloud":
        case "paycomonline-v3":
        default:
            return (0, _discoverGeneric.discoverGenericFields)(doc);
    }
}
function discoverFieldsFromLocation(doc, hostname, href = "") {
    const site = detectAtsSite(hostname, href);
    const registryId = (0, _detectRegistry.detectRegistryAts)(hostname, href);
    return {
        site,
        fields: discoverFieldsForSite(site, doc),
        registryId
    };
}

},{"~contents/crawler/discover-greenhouse":"215pX","~contents/crawler/discover-generic":"kYeSD","~contents/crawler/discover-lever":"7RG71","~contents/crawler/discover-personio":"kK4ch","~contents/crawler/discover-workday":"eFmw7","~contents/crawler/detect-registry":"8mwCD","~contents/crawler/types":"3nY6i","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"215pX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Greenhouse boards / embedded apply forms. */ parcelHelpers.export(exports, "discoverGreenhouseFields", ()=>discoverGreenhouseFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverGreenhouseFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: "#application_form, form#application-form, form"
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"kYeSD":[function(require,module,exports) {
/**
 * Generic ATS form discovery \u2014 works for native label/input HTML.
 * Linkedom-safe (no DOM instanceof).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "discoverGenericFields", ()=>discoverGenericFields);
const FIELD_SELECTOR = 'input:not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]), textarea, select';
function collapseWs(text) {
    return (text || "").replace(/\s+/g, " ").trim();
}
function cleanLabel(text) {
    return collapseWs(text).replace(/\s*\*+\s*/g, " ").replace(/\(\s*(required|erforderlich|optional)\s*\)/gi, "").replace(/\s+/g, " ").trim();
}
function classStr(el) {
    const c = el.className;
    return typeof c === "string" ? c : c?.toString?.() || "";
}
function isVisible(el) {
    if (!el?.getAttribute) return false;
    if (el.getAttribute("aria-hidden") === "true" || el.hidden) return false;
    if (el.closest?.("[aria-hidden='true'], [hidden]")) return false;
    return true;
}
function isFillable(el) {
    const tag = (el.tagName || "").toUpperCase();
    if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") return false;
    if (el.disabled) return false;
    if (tag === "INPUT" && [
        "hidden",
        "file",
        "submit",
        "button",
        "reset",
        "image"
    ].includes(el.type || "")) return false;
    return isVisible(el);
}
function list(selRoot, selector) {
    const root = selRoot;
    const nodes = root.querySelectorAll?.(selector);
    return nodes ? Array.from(nodes) : [];
}
function pickFormRoot(doc, preferSelector) {
    const body = doc.body || doc.documentElement;
    if (preferSelector) {
        const preferred = doc.querySelector?.(preferSelector);
        if (preferred && isVisible(preferred)) return preferred;
    }
    const forms = list(doc, "form").filter(isVisible);
    let best = null;
    let bestScore = -1;
    for (const form of forms){
        const fields = list(form, FIELD_SELECTOR).filter(isFillable).length;
        const labels = list(form, "label, legend").filter(isVisible).length;
        const score = 10 * fields + labels;
        if (score > bestScore) {
            bestScore = score;
            best = form;
        }
    }
    return best || body;
}
function fieldContainer(el, root) {
    const maxSiblings = (el.tagName || "").toUpperCase() === "INPUT" && [
        "radio",
        "checkbox"
    ].includes(el.type || "") ? 12 : 4;
    let node = el.parentElement;
    let best = el.parentElement || root;
    const body = el.ownerDocument?.body ?? null;
    while(node && node !== root && node !== body){
        const classId = `${node.id || ""} ${classStr(node)}`;
        const siblingCount = list(node, FIELD_SELECTOR).filter(isFillable).length;
        const hasLabel = !!node.querySelector?.("label, legend");
        const looksLikeField = /field|form|question|group|row|item|control|wrapper|input/i.test(classId);
        if ((hasLabel || looksLikeField) && siblingCount <= maxSiblings) return node;
        if (hasLabel || looksLikeField) best = node;
        node = node.parentElement;
    }
    return best;
}
function labelForId(root, id) {
    if (!id) return null;
    const safe = id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    try {
        const hit = root.querySelector?.(`label[for="${safe}"]`) || null;
        return hit && isVisible(hit) ? hit : null;
    } catch  {
        return null;
    }
}
function resolveLabel(el, container) {
    const byFor = el.id && (labelForId(container, el.id) || labelForId(el.ownerDocument, el.id));
    if (byFor) {
        const text = cleanLabel(byFor.textContent);
        if (text) return text;
    }
    const closestLabel = el.closest?.("label");
    if (closestLabel && isVisible(closestLabel)) {
        const text = cleanLabel(closestLabel.textContent);
        if (text) return text;
    }
    const aria = cleanLabel(el.getAttribute?.("aria-label"));
    if (aria && !/^(select|choose|option|yes|no|upload|browse)$/i.test(aria)) return aria;
    const labelledBy = (el.getAttribute?.("aria-labelledby") || "").split(/\s+/).filter(Boolean).map((id)=>el.ownerDocument?.getElementById?.(id) || null).filter((n)=>!!n && isVisible(n)).map((n)=>n.textContent).join(" ");
    const ariaText = cleanLabel(labelledBy);
    if (ariaText) return ariaText;
    const candidates = list(container, "label, legend, h1, h2, h3, h4, h5, h6, p, span, div").filter((n)=>{
        if (!isVisible(n)) return false;
        if (n.contains?.(el) && n.tagName !== "LABEL") return false;
        const t = cleanLabel(n.textContent);
        return !!t && !/^(select|choose|option|yes|no|upload|browse)$/i.test(t);
    });
    return cleanLabel(candidates[0]?.textContent);
}
function isRequired(el, container) {
    if (el.hasAttribute?.("required") || el.getAttribute?.("aria-required") === "true") return true;
    return /\*|required|erforderlich/i.test(container.textContent || "");
}
function selectOptions(select) {
    const opts = select.options ? Array.from(select.options) : [];
    return opts.map((o)=>collapseWs(o.textContent).replace(/\s*\*+\s*/g, " ").trim()).filter((t)=>t && !/^(select|please select|--)$/i.test(t));
}
function discoverGenericFields(doc, opts = {}) {
    const root = pickFormRoot(doc, opts.preferRootSelector);
    const nodes = list(root, FIELD_SELECTOR).filter(isFillable);
    const out = [];
    const seen = new Set();
    for (const el of nodes){
        if (seen.has(el)) continue;
        const tag = (el.tagName || "").toUpperCase();
        if (tag === "INPUT" && (el.type === "radio" || el.type === "checkbox")) {
            const container = fieldContainer(el, root);
            const group = list(container, `input[type="${el.type}"]`).filter(isFillable);
            const named = el.name || el.id ? group.filter((g)=>g.name === el.name || g.id === el.id) : group;
            for (const g of named)seen.add(g);
            const label = resolveLabel(el, container);
            if (!label) continue;
            const options = named.map((g)=>{
                const lab = g.id && labelForId(container, g.id)?.textContent || g.closest?.("label")?.textContent || g.getAttribute?.("aria-label") || g.value;
                return collapseWs(lab);
            }).filter(Boolean);
            out.push({
                type: el.type === "radio" ? "radio" : "checkbox",
                label,
                required: named.some((g)=>isRequired(g, container)),
                options
            });
            continue;
        }
        seen.add(el);
        const container = fieldContainer(el, root);
        const label = resolveLabel(el, container);
        if (!label) continue;
        if (tag === "SELECT") {
            out.push({
                type: "select",
                label,
                required: isRequired(el, container),
                options: selectOptions(el)
            });
            continue;
        }
        out.push({
            type: tag === "TEXTAREA" ? "textarea" : "text",
            label,
            required: isRequired(el, container)
        });
    }
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7RG71":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Lever hire apply forms. */ parcelHelpers.export(exports, "discoverLeverFields", ()=>discoverLeverFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverLeverFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: ".application-form, form#application-form, form"
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"kK4ch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Personio careers apply pages \u2014 native form fields. */ parcelHelpers.export(exports, "discoverPersonioFields", ()=>discoverPersonioFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverPersonioFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: "form.application-form, form"
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"eFmw7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Workday apply \u2014 many widgets are custom; this discovers native inputs present
 * in the fixture / simplified pages. Full Workday ops stay in the engine bundle.
 */ parcelHelpers.export(exports, "discoverWorkdayFields", ()=>discoverWorkdayFields);
var _discoverGeneric = require("~contents/crawler/discover-generic");
function discoverWorkdayFields(doc) {
    return (0, _discoverGeneric.discoverGenericFields)(doc, {
        preferRootSelector: '[data-automation-id="applyFlow"], form, body'
    });
}

},{"~contents/crawler/discover-generic":"kYeSD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"8mwCD":[function(require,module,exports) {
/**
 * Resolve ATS id from hostname/href using the Jobright site registry.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Best-effort ATS id from SITE_REGISTRY (greenhouse, workday, \u2026).
 * Returns null when nothing matches.
 */ parcelHelpers.export(exports, "detectRegistryAts", ()=>detectRegistryAts);
var _supportedSites = require("~core/supported-sites");
function hostMatchesDomain(hostname, domain) {
    const h = hostname.toLowerCase();
    const d = domain.toLowerCase();
    return h === d || h.endsWith("." + d);
}
function hostMatchesPattern(hostname, pattern) {
    // MatchPattern-like: *://*.example.com/* or *://example.com/*
    const m = /^[^:]+:\/\/([^/]+)/.exec(pattern);
    if (!m) return false;
    let host = m[1].toLowerCase();
    if (host.startsWith("*.")) {
        const base = host.slice(2);
        return hostname === base || hostname.endsWith("." + base);
    }
    if (host === "*") return true;
    return hostname === host || hostname.endsWith("." + host);
}
function pathOk(pathname, href, site) {
    if (site.pathRegex) try {
        if (!new RegExp(site.pathRegex).test(pathname)) return false;
    } catch  {
        return false;
    }
    if (site.urlRegex) try {
        if (!new RegExp(site.urlRegex).test(href)) return false;
    } catch  {
        return false;
    }
    return true;
}
function detectRegistryAts(hostname, href = "") {
    const h = (hostname || "").toLowerCase();
    let pathname = "/";
    try {
        pathname = href ? new URL(href).pathname : "/";
    } catch  {
        pathname = "/";
    }
    let best = null;
    for (const [id, site] of Object.entries((0, _supportedSites.SITE_REGISTRY))){
        let score = 0;
        const domains = site.domains ?? [];
        const patterns = site.patterns ?? [];
        for (const d of domains)if (hostMatchesDomain(h, d)) score = Math.max(score, d.length + 10);
        for (const p of patterns)if (hostMatchesPattern(h, p)) score = Math.max(score, 20);
        if (score === 0) continue;
        if (!pathOk(pathname, href || `https://${h}/`, site)) continue;
        // Prefer constrained path matches
        if (site.pathRegex || site.urlRegex) score += 50;
        if (!best || score > best.score) best = {
            id,
            score
        };
    }
    return best?.id ?? null;
}

},{"~core/supported-sites":"4oKit","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"4oKit":[function(require,module,exports) {
/**
 * Supported ATS site registry + derived lists.
 * Registry data lives in site-registry.raw.js (extracted from Jobright v1.23.0).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SITE_REGISTRY", ()=>SITE_REGISTRY);
parcelHelpers.export(exports, "PINPOINTHQ_CAREERS_CDN", ()=>PINPOINTHQ_CAREERS_CDN);
parcelHelpers.export(exports, "EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE", ()=>EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE);
parcelHelpers.export(exports, "isEightfoldCareerHubJobPath", ()=>isEightfoldCareerHubJobPath);
parcelHelpers.export(exports, "SUPPORT_DOMAINS", ()=>SUPPORT_DOMAINS);
parcelHelpers.export(exports, "SUPPORT_PATTERNS", ()=>SUPPORT_PATTERNS);
parcelHelpers.export(exports, "SUPPORT_HOSTS", ()=>SUPPORT_HOSTS);
parcelHelpers.export(exports, "CONSTRAINED_SITE_RULES", ()=>CONSTRAINED_SITE_RULES);
parcelHelpers.export(exports, "IFRAME_CHECK_PATTERN", ()=>IFRAME_CHECK_PATTERN);
parcelHelpers.export(exports, "PAGE_SOURCE_ATS_LIST", ()=>PAGE_SOURCE_ATS_LIST);
parcelHelpers.export(exports, "IFRAME_ONLY_DOMAINS", ()=>IFRAME_ONLY_DOMAINS);
parcelHelpers.export(exports, "QUERY_PARAM_LIST", ()=>QUERY_PARAM_LIST);
var _matchPatterns = require("~core/match-patterns");
var _siteRegistryRaw = require("~core/site-registry.raw");
const SITE_REGISTRY = (0, _siteRegistryRaw.SITE_REGISTRY);
const PINPOINTHQ_CAREERS_CDN = "d2n5ied94mazop.cloudfront.net";
const EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE = "^/careerhub/explore/jobs/(?!apply/?$)[^/?#]+/?$";
const eightfoldCareerHubJobPathRegex = new RegExp(EIGHTFOLD_CAREERHUB_JOB_PATH_REGEX_SOURCE);
function isEightfoldCareerHubJobPath(pathname) {
    return eightfoldCareerHubJobPathRegex.test(pathname);
}
function hostnameFromMatchPattern(pattern) {
    const match = /^[^:]+:\/\/([^/]+)/.exec(pattern);
    if (!match) return null;
    const host = match[1];
    if (!host || host === "*") return null;
    return host.startsWith("*.") ? host.slice(2) : host;
}
const unconstrainedSites = Object.values(SITE_REGISTRY).filter((site)=>!site.pathRegex && !site.urlRegex);
const SUPPORT_DOMAINS = unconstrainedSites.flatMap((site)=>site.domains ?? []);
const SUPPORT_PATTERNS = unconstrainedSites.flatMap((site)=>site.patterns ?? []).map((pattern)=>new (0, _matchPatterns.MatchPattern)(pattern));
const SUPPORT_HOSTS = Array.from(new Set(Object.values(SITE_REGISTRY).flatMap((site)=>[
        ...site.domains ?? [],
        ...(site.patterns ?? []).map(hostnameFromMatchPattern).filter((host)=>host !== null)
    ])));
const CONSTRAINED_SITE_RULES = Object.values(SITE_REGISTRY).filter((site)=>typeof site.pathRegex === "string" && site.pathRegex.length > 0 || typeof site.urlRegex === "string" && site.urlRegex.length > 0).map((site)=>({
        domains: site.domains ?? [],
        patterns: (site.patterns ?? []).map((pattern)=>new (0, _matchPatterns.MatchPattern)(pattern)),
        pathRegex: site.pathRegex ? new RegExp(site.pathRegex) : undefined,
        urlRegex: site.urlRegex ? new RegExp(site.urlRegex) : undefined
    }));
const IFRAME_CHECK_PATTERN = Object.values(SITE_REGISTRY).flatMap((site)=>site.iframeDomains ?? []);
const PAGE_SOURCE_ATS_LIST = Object.values(SITE_REGISTRY).filter((site)=>site.pageSourceKeyword && site.pageSourceDomain).map((site)=>[
        site.pageSourceKeyword,
        site.pageSourceDomain
    ]);
const IFRAME_ONLY_DOMAINS = Object.values(SITE_REGISTRY).filter((site)=>site.iframeOnly).flatMap((site)=>site.domains ?? []);
const QUERY_PARAM_LIST = Object.values(SITE_REGISTRY).flatMap((site)=>site.queryParams ?? []);

},{"~core/match-patterns":"3dGUR","~core/site-registry.raw":"azMiv","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3dGUR":[function(require,module,exports) {
/**
 * Minimal Chrome match-pattern implementation for supported-sites.
 * (Ported subset of @webext-core/match-patterns.)
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvalidMatchPattern", ()=>InvalidMatchPattern);
parcelHelpers.export(exports, "MatchPattern", ()=>MatchPattern);
class InvalidMatchPattern extends Error {
    constructor(pattern, reason){
        super(`Invalid match pattern "${pattern}": ${reason}`);
    }
}
class MatchPattern {
    static PROTOCOLS = [
        "http",
        "https",
        "file",
        "ftp",
        "urn"
    ];
    isAllUrls = false;
    protocolMatches = [];
    hostnameMatch = "*";
    pathnameMatch = "*";
    constructor(pattern){
        if (pattern === "<all_urls>") {
            this.isAllUrls = true;
            this.protocolMatches = [
                ...MatchPattern.PROTOCOLS
            ];
            this.hostnameMatch = "*";
            this.pathnameMatch = "*";
            return;
        }
        const parsed = /(.*):\/\/(.*?)(\/.*)/.exec(pattern);
        if (parsed == null) throw new InvalidMatchPattern(pattern, "Incorrect format");
        const [, protocol, hostname, pathname] = parsed;
        if (!MatchPattern.PROTOCOLS.includes(protocol) && protocol !== "*") throw new InvalidMatchPattern(pattern, `${protocol} not a valid protocol (${MatchPattern.PROTOCOLS.join(", ")})`);
        if (hostname.includes(":")) throw new InvalidMatchPattern(pattern, "Hostname cannot include a port");
        if (hostname.includes("*") && hostname.length > 1 && !hostname.startsWith("*.")) throw new InvalidMatchPattern(pattern, "If using a wildcard (*), it must go at the start of the hostname");
        this.protocolMatches = protocol === "*" ? [
            "http",
            "https"
        ] : [
            protocol
        ];
        this.hostnameMatch = hostname;
        this.pathnameMatch = pathname;
    }
    includes(input) {
        if (this.isAllUrls) return true;
        const url = typeof input === "string" ? new URL(input) : input instanceof Location ? new URL(input.href) : input;
        return this.protocolMatches.some((protocol)=>{
            if (protocol === "http") return this.isHttpMatch(url);
            if (protocol === "https") return this.isHttpsMatch(url);
            return false;
        });
    }
    isHttpMatch(url) {
        return url.protocol === "http:" && this.isHostPathMatch(url);
    }
    isHttpsMatch(url) {
        return url.protocol === "https:" && this.isHostPathMatch(url);
    }
    isHostPathMatch(url) {
        if (!this.hostnameMatch || !this.pathnameMatch) return false;
        const hostRegexes = [
            this.convertPatternToRegex(this.hostnameMatch),
            this.convertPatternToRegex(this.hostnameMatch.replace(/^\*\./, ""))
        ];
        const pathRegex = this.convertPatternToRegex(this.pathnameMatch);
        return hostRegexes.some((re)=>re.test(url.hostname)) && pathRegex.test(url.pathname);
    }
    convertPatternToRegex(pattern) {
        const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`^${escaped.replace(/\\\*/g, ".*")}$`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"azMiv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SITE_REGISTRY", ()=>SITE_REGISTRY);
const SITE_REGISTRY = {
    greenhouse: {
        domains: [
            "greenhouse.io"
        ],
        iframeDomains: [
            "greenhouse.io"
        ],
        queryParams: [
            "gh_jid",
            "gh_src"
        ],
        pathRegex: "^/(?:[^/]+/jobs/\\d+|embed/job_app)"
    },
    xcompany: {
        patterns: [
            "*://x.company/*"
        ],
        pathRegex: "^/careers/[^/]+/?$"
    },
    walmart: {
        patterns: [
            "*://careers.walmart.com/*"
        ],
        pathRegex: "^/(us/en/(home|jobs?/[^/]+|apply(?:/.*)?|application(?:/.*)?)|content/careers/us/en/.*)$"
    },
    workday: {
        domains: [
            "myworkdayjobs.com",
            "myworkdayjobs-impl.com",
            "myworkdaysite.com",
            "myworkday.com"
        ]
    },
    kula: {
        domains: [
            "careers.kula.ai"
        ],
        pathRegex: "^/[^/]+/[^/]+"
    },
    icims: {
        domains: [
            "icims.com"
        ],
        iframeDomains: [
            "icims.com"
        ],
        iframeOnly: !0,
        pathRegex: "^/jobs/\\d+(?:/|$)"
    },
    dover: {
        domains: [
            "dover.com"
        ]
    },
    adobe: {
        domains: [
            "careers.adobe.com"
        ],
        pathRegex: "^/[^/]+/[^/]+/apply"
    },
    zohorecruit: {
        domains: [
            "zohorecruit.com",
            "zohorecruit.ca",
            "zohorecruit.eu"
        ],
        iframeDomains: [
            "zohorecruit.com",
            "zohorecruit.ca",
            "zohorecruit.eu"
        ],
        pathRegex: "^/jobs/Careers/.+"
    },
    gem: {
        domains: [
            "jobs.gem.com"
        ],
        pathRegex: "^/[\\w-]+/[\\w-]+/?$"
    },
    gusto: {
        domains: [
            "jobs.gusto.com"
        ],
        pathRegex: "^/postings/[^/]+(?:/applicants/new(?:/.*)?)?/?$"
    },
    hiringthing: {
        domains: [
            "hiringthing.com",
            "oasisrecruit.com",
            "elevate-ats.com",
            "prismhr-hire.com",
            "gnahiring.com",
            "rippling-ats.com"
        ],
        pathRegex: "^/job/\\d+/"
    },
    hubspot: {
        patterns: [
            "*://www.hubspot.com/careers/jobs/*"
        ]
    },
    paycomonline: {
        domains: [
            "paycomonline.com",
            "paycomonline.net"
        ],
        urlRegex: "^/v4/ats/web\\.php/portal/[^/]+/(?:applications(?:[/?#].*)?|jobs/[^/?#]+(?:[?#].*)?)"
    },
    teamtailor: {
        domains: [
            "teamtailor.com",
            "careers.blueorange.digital",
            "careers.totalperform.com"
        ],
        pageSourceKeyword: "teamtailor-cdn.com",
        pageSourceDomain: "teamtailor.com",
        pathRegex: "^/jobs/.+"
    },
    catsone: {
        domains: [
            "catsone.com"
        ],
        pathRegex: "^/careers/[^/]+/jobs/[^/]+(?:/apply)?/?$"
    },
    metacareers: {
        domains: [
            "metacareers.com"
        ],
        pathRegex: "^/profile/(create_application|job_details)/[^/]+"
    },
    ycombinator: {
        domains: [
            "www.ycombinator.com"
        ]
    },
    ripplehire: {
        domains: [
            "ripplehire.com"
        ]
    },
    personio: {
        domains: [
            "personio.de",
            "personio.com"
        ],
        pathRegex: "^/job/[^/?#]+(?:/apply)?/?$"
    },
    careerspage: {
        domains: [
            "careers-page.com"
        ]
    },
    careerplug: {
        domains: [
            "careerplug.com",
            "sfagentjobs.com",
            "sfagentcareers.com",
            "apscareerportal.com"
        ],
        pathRegex: "^/jobs/\\d+/apps/new"
    },
    careerswithwaymo: {
        patterns: [
            "*://careers.withwaymo.com/jobs/*"
        ],
        pathRegex: "^/jobs/(?!search(?:/|$))[^/]+"
    },
    successfactors: {
        domains: [
            "successfactors.eu",
            "successfactors.com",
            "sapsf.com"
        ]
    },
    clearcompany: {
        domains: [
            "clearcompany.com"
        ],
        patterns: [
            "*://*.hrmdirect.com/employment/job-opening.php*"
        ]
    },
    ashby: {
        patterns: [
            "*://*.ashbyhq.com/*/*"
        ],
        iframeDomains: [
            "jobs.ashbyhq.com",
            "ashby_jid"
        ],
        queryParams: [
            "ashby_jid"
        ],
        pathRegex: "^/[^/]+/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    },
    isolved: {
        domains: [
            "isolvedhire.com"
        ],
        pathRegex: "^/(?:apply/|jobs/|iframe/mobile/|account/)"
    },
    jobdiva: {
        patterns: [
            "*://*.jobdiva.com/portal/*"
        ]
    },
    intuit: {
        domains: [
            "intuit-quiz.app.intuit.com"
        ],
        patterns: [
            "*://jobs.intuit.com/job/*",
            "*://intuit.avature.net/*/externalCareers/JobApplication*"
        ],
        iframeDomains: [
            "intuit-quiz.app.intuit.com"
        ]
    },
    jacobs: {
        patterns: [
            "*://careers.jacobs.com/en_US/careers/*"
        ],
        pathRegex: "^/en_US/careers/(JobDetail|Register|ApplicationForm|ApplicationReview)(?:/|$)"
    },
    smartrecruiters: {
        domains: [
            "smartr.me"
        ],
        patterns: [
            "*://jobs.smartrecruiters.com/oneclick-ui/company/*",
            "*://jobs.smartrecruiters.com/*/*"
        ]
    },
    phenom: {
        pageSourceKeyword: "APPLY_form_renderer.js",
        pageSourceDomain: "phenompeople.com",
        patterns: [
            "*://jobs.bswhealth.com/*/apply*",
            "*://careers.uvahealth.org/*/apply*",
            "*://careers.dukehealth.org/*/apply*",
            "*://www.jobs.abbott/*/apply*",
            "*://careers.aspendental.com/*/apply*",
            "*://careers.fivebelow.com/*/apply*",
            "*://careers.fourseasons.com/*/apply*",
            "*://careers.kbr.com/*/apply*",
            "*://jobs.kuehne-nagel.com/*/apply*",
            "*://careers.mastercard.com/*/apply*",
            "*://careers.mcafee.com/*/apply*",
            "*://jobs-cee.pwc.com/*/apply*",
            "*://careers.roche.com/*/apply*",
            "*://www.vcacareers.com/*/apply*",
            "*://careers.wasteconnections.com/*/apply*"
        ]
    },
    cisco: {
        patterns: [
            "*://careers.cisco.com/*/apply*"
        ]
    },
    tesla: {
        patterns: [
            "*://*.jobs.tesla.com/*",
            "*://*.tesla.com/careers/*"
        ],
        pathRegex: "/apply"
    },
    amazon: {
        patterns: [
            "*://*.amazon.jobs/*"
        ],
        pathRegex: "/jobs/[\\w-]+/apply"
    },
    amazonuniversity: {
        patterns: [
            "*://*.amazonuniversity.jobs/profile*"
        ]
    },
    uber: {
        domains: [
            "uber.com"
        ],
        pathRegex: "^/(?:(?:(?:[^/]+/){1,2})?careers/(?:apply(?:/|$)|list/[^/?#]+)|(?:[^/]+/)?jobs/[^/?#]+/?$)"
    },
    tiktok: {
        patterns: [
            "*://*.lifeattiktok.com/resume*",
            "*://*.tiktokusds.com/*/resume*",
            "*://*.tiktokusds.com/*/position/*/detail*"
        ]
    },
    bytedance: {
        patterns: [
            "*://*.jobs.bytedance.com/en/resume*",
            "*://jobs.bytedance.com/*/*/*/detail*",
            "*://jobs.bytedance.com/*/*/*/apply*",
            "*://jobs.bytedance.com/*/*/applied*",
            "*://joinbytedance.com/search/*"
        ]
    },
    google: {
        patterns: [
            "*://google.com/about/careers/*",
            "*://*.google.com/about/careers/*"
        ],
        pathRegex: "^/about/careers/applications(?:/(?:u/\\d+/)?apply(?:/|$)|/jobs/results/[^/?#]+)",
        urlRegex: "^/about/careers/applications/jobs/results(?:\\?[^#]*)?#.*[?&#]jid=[^&#]+"
    },
    lever: {
        patterns: [
            "*://jobs.lever.co/*/*",
            "*://jobs.eu.lever.co/*/*"
        ],
        iframeDomains: [
            "lever.co"
        ],
        queryParams: [
            "LeverAppId"
        ],
        pathRegex: "^/[^/]+/[^/]+(?:/apply)?/?$"
    },
    jobvite: {
        patterns: [
            "*://jobs.jobvite.com/*/job/*",
            "*://jobs.jobvite.com/*/apply*"
        ],
        iframeDomains: [
            "jobs.jobvite.com"
        ],
        queryParams: [
            "jobviteiframe"
        ]
    },
    breezy: {
        patterns: [
            "*://*.breezy.hr/p/*",
            "*://*.breezy.hr/*/apply*"
        ]
    },
    workable: {
        domains: [
            "careers.arbor-education.com"
        ],
        patterns: [
            "*://apply.workable.com/*",
            "*://jobs.workable.com/*"
        ],
        iframeDomains: [
            "workable.com"
        ],
        queryParams: [
            "selectedJobId"
        ],
        pathRegex: "^/(?:[^/]+/j/[^/]+(?:/apply)?/?$|(?:[a-z]{2}/)?(?:view|company)/[\\w-]+)"
    },
    gohire: {
        patterns: [
            "*://jobs.gohire.io/*/*"
        ],
        iframeDomains: [
            "app.gohire.io/widget/"
        ],
        pathRegex: "^/[^/]+/.+-\\d+/?$"
    },
    bamboohr: {
        patterns: [
            "*://*.bamboohr.com/jobs*",
            "*://*.bamboohr.com/careers*"
        ],
        iframeDomains: [
            "bamboohr.com"
        ],
        pathRegex: "^/(?:jobs|careers/[\\w-]*\\d)"
    },
    brassring: {
        patterns: [
            "*://*.brassring.com/TGnewUI/*"
        ],
        iframeDomains: [
            "brassring.com"
        ],
        urlRegex: "#(?:Applypage|jobDetails=)"
    },
    adp: {
        domains: [
            "workforcenow.adp.com"
        ],
        patterns: [
            "*://recruiting.adp.com/srccar/public/*",
            "*://myjobs.adp.com/*/cx/*"
        ]
    },
    oraclecloud: {
        patterns: [
            "*://*.oraclecloud.com/*/CandidateExperience/*/sites/*/job/*",
            "*://*.oraclecloud.com/*/CandidateExperience/*/sites/*/*/preview/*",
            "*://*/*/CandidateExperience/*/sites/*/job/*",
            "*://*/*/CandidateExperience/*/sites/*/*/preview/*",
            "*://*/*/sites/*/jobs/preview/*/apply/*"
        ],
        pathRegex: "(?:/CandidateExperience/.*/sites/[^/]+/job/[^/]+(?:/apply(?:/.*)?)?/?$|/apply)"
    },
    ultipro: {
        patterns: [
            "*://*.ultipro.com/*/JobBoard/*/OpportunityDetail*",
            "*://*.ultipro.com/*/JobBoard/*/OpportunityApply*",
            "*://*.ultipro.com/*/JobBoard/*/Account/Register*",
            "*://*.ultipro.ca/*/JobBoard/*/OpportunityDetail*",
            "*://*.ultipro.ca/*/JobBoard/*/OpportunityApply*",
            "*://*.ultipro.ca/*/JobBoard/*/Account/Register*",
            "*://*.rec.pro.ukg.net/*/JobBoard/*/OpportunityDetail*",
            "*://*.rec.pro.ukg.net/*/JobBoard/*/OpportunityApply*",
            "*://*.rec.pro.ukg.net/*/JobBoard/*/Account/Register*"
        ]
    },
    rippling: {
        patterns: [
            "*://*.rippling-ats.com/job/*/apply*",
            "*://*.rippling-ats.com/jobs/eop_survey/*"
        ],
        iframeDomains: [
            "ats.rippling.com"
        ]
    },
    ripplingHosted: {
        patterns: [
            "*://ats.rippling.com/*/jobs/*"
        ],
        pathRegex: "^/[^/]+/jobs/[^/]+(?:/apply(?:/.*)?)?/?$"
    },
    dayforce: {
        domains: [
            "jobs.dayforcehcm.com"
        ],
        pathRegex: "^/(?:[^/]+/)+jobs/[^/]+(?:/apply(?:/.*)?)?/?$"
    },
    dayforceIdentity: {
        patterns: [
            "https://dfid.dayforcehcm.com/globalidentity/account/*"
        ],
        pathRegex: "^/globalidentity/account/(?:register|login)/?$"
    },
    taleo: {
        patterns: [
            "*://*.taleo.net/*/application.jss*",
            "*://*.taleo.net/*/flow.jsf*",
            "*://*.taleo.net/*/jobapply*",
            "*://*.taleo.net/*/ats/careers/*",
            "*://*.taleo.net/careersection/*/jobdetail.ftl*",
            "*://*.taleo.net/*/htmlResourceViewer.jss*",
            "*://*.burnsmcd.com/apply*",
            "*://*.burnsmcd.com/careersection/application.jss*",
            "*://*.burnsmcd.com/careersection/flow.jsf*",
            "*://*.burnsmcd.com/careersection/jobapply*",
            "*://*.burnsmcd.com/careersection/htmlResourceViewer.jss*",
            "*://talentacquisition.3ds.com/*/application.jss*",
            "*://talentacquisition.3ds.com/*/flow.jsf*",
            "*://talentacquisition.3ds.com/*/jobapply*",
            "*://talentacquisition.3ds.com/*/ats/careers/*",
            "*://talentacquisition.3ds.com/*/htmlResourceViewer.jss*"
        ]
    },
    eightfold: {
        patterns: [
            "*://*.eightfold.ai/careers*",
            "*://*.eightfold.ai/careerhub/*"
        ],
        iframeDomains: [
            "eightfold.ai"
        ],
        pageSourceKeyword: "eightfold",
        pageSourceDomain: "eightfold.ai",
        urlRegex: "(?:^/careerhub/explore/jobs/(?!apply/?(?:[?#]|$))[^/?#]+/?(?:[?#].*)?$|^/careerhub/explore/jobs/apply/?\\?(?=[^#]*\\bpid=[^&#]+)[^#]*(?:#.*)?$|^/careers(?:/(?:job/[^/?#]+(?:/apply)?(?:[/?#]|$)|apply(?:[/?#]|$))|\\?(?=(?:pid=[^&#]+|[^#]*&pid=[^&#]+))[^#]*(?:#.*)?$))"
    },
    jazzhr: {
        patterns: [
            "*://*.applytojob.com/apply/*"
        ]
    },
    trakstar: {
        patterns: [
            "*://*.hire.trakstar.com/jobs/*"
        ],
        pathRegex: "^/jobs/[^/]+/?$"
    },
    freshteam: {
        patterns: [
            "*://*.freshteam.com/jobs/*"
        ]
    },
    pinpointhq: {
        patterns: [
            "*://*.pinpointhq.com/*/postings/*",
            "*://*.pinpointhq.com/postings/*"
        ],
        pageSourceKeyword: "pinpointhq",
        pageSourceDomain: "pinpointhq.com"
    },
    recruitee: {
        patterns: [
            "*://*.recruitee.com/*/*"
        ],
        pageSourceKeyword: "recruitee",
        pageSourceDomain: "recruitee.com"
    },
    trinethire: {
        patterns: [
            "*://app.trinethire.com/companies/*/jobs/*"
        ]
    },
    jobscore: {
        patterns: [
            "*://careers.jobscore.com/apply_flow/*",
            "*://careers.jobscore.com/careers/*/jobs/*"
        ],
        iframeDomains: [
            "jobscore.com"
        ]
    },
    paylocity: {
        patterns: [
            "*://*.paylocity.com/recruiting/*",
            "*://*.paylocity.com/Recruiting/*"
        ],
        iframeDomains: [
            "paylocity.com"
        ],
        urlRegex: "^/[Rr]ecruiting/[Jj]obs/(?:[Aa]pply/|[Dd]etails/[^/?#]+(?:[/?#]|$))"
    },
    avature: {
        patterns: [
            "*://*.avature.net/*/ApplicationForm*",
            "*://*.avature.net/*/ApplicationMethods*",
            "*://*.avature.net/*/ApplicationQuestions*",
            "*://*.avature.net/*/ApplicationReview*",
            "*://*.avature.net/*/Register*",
            "*://*.avature.net/LinkedInApplicationForm*",
            "*://*.avature.net/*/LinkedInApplicationForm*",
            "*://*.avature.net/*/YourInformation*",
            "*://*.avature.net/campusApply*",
            "*://*.avature.net/*/GeneralInfo*",
            "*://*.avature.net/careers/JobDetail*",
            "*://*.avature.net/careers/JobDetail/*",
            "*://*.avature.net/*/careers/JobDetail/*",
            "*://*.avature.net/*/External/JobDetail*",
            "*://*.avature.net/careers/LocationAndProfile/*",
            "*://*.avature.net/*/careers/LocationAndProfile/*",
            "*://careers.arcb.com/careersmarketplace/ApplicationForm*",
            "*://careers.arcb.com/careersmarketplace/ApplicationMethods*",
            "*://careers.arcb.com/careersmarketplace/ApplicationQuestions*",
            "*://careers.arcb.com/careersmarketplace/ApplicationReview*",
            "*://careers.arcb.com/careersmarketplace/Register*",
            "*://careers.arcb.com/careersmarketplace/GeneralInfo*",
            "*://careers.arcb.com/careersmarketplace/JobDetail*",
            "*://careers.arcb.com/careersmarketplace/ApplicationDotKnockedOutWizard*",
            "*://apply.deloitte.com/*/careers/*",
            "*://apply.deloitte.com/*/External/*",
            "*://careers.cbre.com/*/careers/ApplicationForm*",
            "*://careers.cbre.com/*/careers/ApplicationMethods*",
            "*://careers.cbre.com/*/careers/ApplicationQuestions*",
            "*://careers.cbre.com/*/careers/ApplicationReview*",
            "*://careers.cbre.com/*/careers/Register*",
            "*://careers.cbre.com/*/careers/InviteToApply*",
            "*://careers.cbre.com/*/careers/GeneralInfo*",
            "*://careers.cbre.com/*/careers/JobDetail*",
            "*://careers.cbre.com/*/careers/JobDetail/*",
            "*://careers.cbre.com/*/careers/LocationAndProfile/*",
            "*://careers.cbre.com/*/External/JobDetail*",
            "*://careers.mantech.com/*/careers/ApplicationForm*",
            "*://careers.mantech.com/*/careers/ApplicationMethods*",
            "*://careers.mantech.com/*/careers/ApplicationQuestions*",
            "*://careers.mantech.com/*/careers/ApplicationReview*",
            "*://careers.mantech.com/*/careers/Register*",
            "*://careers.mantech.com/*/careers/InviteToApply*",
            "*://careers.mantech.com/*/careers/GeneralInfo*",
            "*://careers.mantech.com/*/careers/JobDetail*",
            "*://careers.mantech.com/*/careers/JobDetail/*",
            "*://careers.mantech.com/*/careers/LocationAndProfile/*",
            "*://careers.mantech.com/*/External/JobDetail*",
            "*://careers.ibm.com/*/careers/JobDetail*",
            "*://careers.ibm.com/*/careers/ApplicationMethods*",
            "*://careers.ibm.com/*/careers/JobApplication*",
            "*://careers.ibm.com/*/careers/ApplicationForm*",
            "*://careers.ibm.com/*/careers/ApplicationQuestions*",
            "*://careers.ibm.com/*/careers/ApplicationReview*",
            "*://careers.ibm.com/*/careers/Register*",
            "*://careers.ibm.com/*/careers/GeneralInfo*",
            "*://careers.ibm.com/*/careers/YourInformation*",
            "*://careers.tql.com/*/TQLexternalcareers/ApplicationForm*",
            "*://careers.tql.com/*/TQLexternalcareers/ApplicationMethods*",
            "*://careers.tql.com/*/TQLexternalcareers/ApplicationQuestions*",
            "*://careers.tql.com/*/TQLexternalcareers/ApplicationReview*",
            "*://careers.tql.com/*/TQLexternalcareers/Register*",
            "*://careers.tql.com/*/TQLexternalcareers/InviteToApply*",
            "*://careers.tql.com/*/TQLexternalcareers/GeneralInfo*",
            "*://careers.tql.com/*/TQLexternalcareers/JobDetail*",
            "*://careers.tql.com/*/TQLexternalcareers/JobDetail/*",
            "*://careers.tql.com/*/TQLexternalcareers/LocationAndProfile/*",
            "*://careers.tql.com/*/External/JobDetail*"
        ],
        pageSourceKeyword: "avature",
        pageSourceDomain: "avature.net"
    },
    okta: {
        patterns: [
            "*://www.okta.com/company/careers/*/*"
        ],
        pathRegex: "^/company/careers/(?!job-listing(?:/|$))"
    },
    comeet: {
        patterns: [
            "*://*.comeet.com/jobs/*/*/*/*",
            "*://*.comeet.co/jobs/*/*/apply*"
        ],
        iframeDomains: [
            "comeet.co",
            "comeet.com"
        ]
    },
    apple: {
        patterns: [
            "*://jobs.apple.com/*/details/*",
            "*://jobs.apple.com/app/*/apply/*"
        ]
    },
    polymer: {
        patterns: [
            "*://jobs.polymer.co/*/*"
        ]
    },
    recruiterflow: {
        domains: [
            "recruiterflow.com"
        ],
        pageSourceKeyword: "recruiterflow.com",
        pageSourceDomain: "recruiterflow.com",
        pathRegex: "^/[^/]+/jobs/[^/?#]+"
    },
    careerstoasttab: {
        patterns: [
            "*://careers.toasttab.com/jobs*"
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3nY6i":[function(require,module,exports) {
/** Shared field types for the clean-TS crawler (mirrors engine FIELD_TYPE subset). */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIELD_TYPE", ()=>FIELD_TYPE);
const FIELD_TYPE = {
    TEXT: "text",
    TEXTAREA: "textarea",
    SELECT: "select",
    CHECKBOX: "checkbox",
    RADIO: "radio",
    RADIOGROUP: "radiogroup",
    DATE: "date",
    FILE: "file"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["7pDHP","dfxf9"], "dfxf9", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNELG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDcEI7SUFDQSxNQUFNO1FBQ0osVUFBVTtZQUFDO1NBQXVDO1FBQ2xELFdBQVc7SUFDYjtJQUNBLFFBQVE7UUFDTixVQUFVO1lBQUM7WUFBaUM7U0FBa0M7UUFDOUUsZUFBZTtZQUFDO1lBQWE7U0FBYTtJQUM1QztJQUNBLE9BQU87UUFDTCxVQUFVO1lBQUM7WUFBa0M7U0FBbUM7SUFDbEY7SUFDQSxTQUFTO1FBQUUsVUFBVTtZQUFDO1NBQTBCO0lBQUM7SUFDakQsZUFBZTtRQUNiLFNBQVM7WUFBQztTQUFvQjtRQUM5QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDYjtJQUNBLGlCQUFpQjtRQUFFLFVBQVU7WUFBQztTQUFpQztJQUFDO0FBQ2xFOzs7QUM3WkEsb0ZBQW9GOztnREFFdkU7QUFBTixNQUFNLGFBQWE7SUFDeEIsTUFBTTtJQUNOLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLE9BQU87SUFDUCxZQUFZO0lBQ1osTUFBTTtJQUNOLE1BQU07QUFDUiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtZGMzNGJlY2RmNDE1YTUwNy5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWZhY3RvcnkudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1ncmVlbmhvdXNlLnRzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZ2VuZXJpYy50cyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItbGV2ZXIudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1wZXJzb25pby50cyIsInNyYy9jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLXdvcmtkYXkudHMiLCJzcmMvY29udGVudHMvY3Jhd2xlci9kZXRlY3QtcmVnaXN0cnkudHMiLCJzcmMvY29yZS9zdXBwb3J0ZWQtc2l0ZXMudHMiLCJzcmMvY29yZS9tYXRjaC1wYXR0ZXJucy50cyIsInNyYy9jb3JlL3NpdGUtcmVnaXN0cnkucmF3LmpzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcY3Jhd2xlclxcXFxkaXNjb3Zlci1mYWN0b3J5LnRzXCIsXCJidW5kbGVJZFwiOlwiZGMwODEyMzNiZDVjMDU5ZFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiaW1wb3J0IHsgZGlzY292ZXJHcmVlbmhvdXNlRmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWdyZWVuaG91c2VcIlxyXG5pbXBvcnQgeyBkaXNjb3ZlckdlbmVyaWNGaWVsZHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZ2VuZXJpY1wiXHJcbmltcG9ydCB7IGRpc2NvdmVyTGV2ZXJGaWVsZHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItbGV2ZXJcIlxyXG5pbXBvcnQgeyBkaXNjb3ZlclBlcnNvbmlvRmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLXBlcnNvbmlvXCJcclxuaW1wb3J0IHsgZGlzY292ZXJXb3JrZGF5RmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLXdvcmtkYXlcIlxyXG5pbXBvcnQgeyBkZXRlY3RSZWdpc3RyeUF0cyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kZXRlY3QtcmVnaXN0cnlcIlxyXG5pbXBvcnQgdHlwZSB7IEF0c1NpdGVJZCwgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuXHJcbi8qKiBNYXAgcmVnaXN0cnkga2V5cyDihpIgQ2xlYW4tVFMgZGlzY292ZXIgYWRhcHRlcnMgd2Ugb3duLiAqL1xyXG5jb25zdCBSRUdJU1RSWV9UT19DTEVBTjogUmVjb3JkPHN0cmluZywgQXRzU2l0ZUlkPiA9IHtcclxuICBwZXJzb25pbzogXCJwZXJzb25pb1wiLFxyXG4gIGdyZWVuaG91c2U6IFwiZ3JlZW5ob3VzZVwiLFxyXG4gIGxldmVyOiBcImxldmVyXCIsXHJcbiAgd29ya2RheTogXCJteXdvcmtkYXlcIixcclxuICBteXdvcmtkYXk6IFwibXl3b3JrZGF5XCIsXHJcbiAgYXNoYnk6IFwiYXNoYnlcIixcclxuICBvcmFjbGVjbG91ZDogXCJvcmFjbGVjbG91ZFwiLFxyXG4gIHBheWNvbTogXCJwYXljb21vbmxpbmUtdjNcIixcclxuICBwYXljb21vbmxpbmU6IFwicGF5Y29tb25saW5lLXYzXCJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdEF0c1NpdGUoaG9zdG5hbWU6IHN0cmluZywgaHJlZiA9IFwiXCIpOiBBdHNTaXRlSWQge1xyXG4gIGNvbnN0IGggPSAoaG9zdG5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gIGNvbnN0IHUgPSAoaHJlZiB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcblxyXG4gIC8vIEZhc3QgcGF0aHMgKGZpeHR1cmVzIC8gY29tbW9uIGhvc3RzKVxyXG4gIGlmIChoLmluY2x1ZGVzKFwicGVyc29uaW8uXCIpIHx8IGguaW5jbHVkZXMoXCJqb2JzLnBlcnNvbmlvXCIpKSByZXR1cm4gXCJwZXJzb25pb1wiXHJcbiAgaWYgKFxyXG4gICAgaC5pbmNsdWRlcyhcImdyZWVuaG91c2UuaW9cIikgfHxcclxuICAgIGguaW5jbHVkZXMoXCJib2FyZHMuZ3JlZW5ob3VzZVwiKSB8fFxyXG4gICAgdS5pbmNsdWRlcyhcImdoX2ppZD1cIilcclxuICApIHtcclxuICAgIHJldHVybiBcImdyZWVuaG91c2VcIlxyXG4gIH1cclxuICBpZiAoaC5pbmNsdWRlcyhcImxldmVyLmNvXCIpIHx8IGguaW5jbHVkZXMoXCJqb2JzLmxldmVyXCIpKSByZXR1cm4gXCJsZXZlclwiXHJcbiAgaWYgKGguaW5jbHVkZXMoXCJteXdvcmtkYXlqb2JzLmNvbVwiKSB8fCBoLmluY2x1ZGVzKFwid29ya2RheS5jb21cIikpIHtcclxuICAgIHJldHVybiBcIm15d29ya2RheVwiXHJcbiAgfVxyXG4gIGlmIChoLmluY2x1ZGVzKFwiYXNoYnlocS5jb21cIikgfHwgaC5pbmNsdWRlcyhcImpvYnMuYXNoYnlcIikpIHJldHVybiBcImFzaGJ5XCJcclxuICBpZiAoaC5pbmNsdWRlcyhcIm9yYWNsZWNsb3VkLmNvbVwiKSB8fCBoLmluY2x1ZGVzKFwiZmEub3JhY2xlXCIpKSB7XHJcbiAgICByZXR1cm4gXCJvcmFjbGVjbG91ZFwiXHJcbiAgfVxyXG4gIGlmIChoLmluY2x1ZGVzKFwicGF5Y29tb25saW5lXCIpIHx8IGguaW5jbHVkZXMoXCJwYXljb20uY29tXCIpKSB7XHJcbiAgICByZXR1cm4gXCJwYXljb21vbmxpbmUtdjNcIlxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJlZCA9IGRldGVjdFJlZ2lzdHJ5QXRzKGhvc3RuYW1lLCBocmVmKVxyXG4gIGlmIChyZWdpc3RlcmVkICYmIFJFR0lTVFJZX1RPX0NMRUFOW3JlZ2lzdGVyZWRdKSB7XHJcbiAgICByZXR1cm4gUkVHSVNUUllfVE9fQ0xFQU5bcmVnaXN0ZXJlZF1cclxuICB9XHJcblxyXG4gIC8vIFVua25vd24gYnV0IHJlZ2lzdGVyZWQgQVRTIOKGkiBnZW5lcmljIG5hdGl2ZSBmaWxsIHN0aWxsIGhlbHBzXHJcbiAgaWYgKHJlZ2lzdGVyZWQpIHJldHVybiBcImdlbmVyaWNcIlxyXG4gIHJldHVybiBcImdlbmVyaWNcIlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzY292ZXJGaWVsZHNGb3JTaXRlKFxyXG4gIHNpdGU6IEF0c1NpdGVJZCxcclxuICBkb2M6IERvY3VtZW50XHJcbik6IERpc2NvdmVyZWRGaWVsZFtdIHtcclxuICBzd2l0Y2ggKHNpdGUpIHtcclxuICAgIGNhc2UgXCJwZXJzb25pb1wiOlxyXG4gICAgICByZXR1cm4gZGlzY292ZXJQZXJzb25pb0ZpZWxkcyhkb2MpXHJcbiAgICBjYXNlIFwiZ3JlZW5ob3VzZVwiOlxyXG4gICAgICByZXR1cm4gZGlzY292ZXJHcmVlbmhvdXNlRmllbGRzKGRvYylcclxuICAgIGNhc2UgXCJsZXZlclwiOlxyXG4gICAgICByZXR1cm4gZGlzY292ZXJMZXZlckZpZWxkcyhkb2MpXHJcbiAgICBjYXNlIFwibXl3b3JrZGF5XCI6XHJcbiAgICAgIHJldHVybiBkaXNjb3ZlcldvcmtkYXlGaWVsZHMoZG9jKVxyXG4gICAgY2FzZSBcImFzaGJ5XCI6XHJcbiAgICBjYXNlIFwib3JhY2xlY2xvdWRcIjpcclxuICAgIGNhc2UgXCJwYXljb21vbmxpbmUtdjNcIjpcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBkaXNjb3ZlckdlbmVyaWNGaWVsZHMoZG9jKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyRmllbGRzRnJvbUxvY2F0aW9uKFxyXG4gIGRvYzogRG9jdW1lbnQsXHJcbiAgaG9zdG5hbWU6IHN0cmluZyxcclxuICBocmVmID0gXCJcIlxyXG4pOiB7IHNpdGU6IEF0c1NpdGVJZDsgZmllbGRzOiBEaXNjb3ZlcmVkRmllbGRbXTsgcmVnaXN0cnlJZDogc3RyaW5nIHwgbnVsbCB9IHtcclxuICBjb25zdCBzaXRlID0gZGV0ZWN0QXRzU2l0ZShob3N0bmFtZSwgaHJlZilcclxuICBjb25zdCByZWdpc3RyeUlkID0gZGV0ZWN0UmVnaXN0cnlBdHMoaG9zdG5hbWUsIGhyZWYpXHJcbiAgcmV0dXJuIHsgc2l0ZSwgZmllbGRzOiBkaXNjb3ZlckZpZWxkc0ZvclNpdGUoc2l0ZSwgZG9jKSwgcmVnaXN0cnlJZCB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIHsgQXRzU2l0ZUlkLCBEaXNjb3ZlcmVkRmllbGQgfVxyXG5leHBvcnQgeyBGSUVMRF9UWVBFIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuZXhwb3J0IHsgZGV0ZWN0UmVnaXN0cnlBdHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGV0ZWN0LXJlZ2lzdHJ5XCJcclxuIiwiaW1wb3J0IHsgZGlzY292ZXJHZW5lcmljRmllbGRzIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL2Rpc2NvdmVyLWdlbmVyaWNcIlxyXG5pbXBvcnQgdHlwZSB7IERpc2NvdmVyZWRGaWVsZCB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci90eXBlc1wiXHJcblxyXG4vKiogR3JlZW5ob3VzZSBib2FyZHMgLyBlbWJlZGRlZCBhcHBseSBmb3Jtcy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyR3JlZW5ob3VzZUZpZWxkcyhkb2M6IERvY3VtZW50KTogRGlzY292ZXJlZEZpZWxkW10ge1xyXG4gIHJldHVybiBkaXNjb3ZlckdlbmVyaWNGaWVsZHMoZG9jLCB7XHJcbiAgICBwcmVmZXJSb290U2VsZWN0b3I6IFwiI2FwcGxpY2F0aW9uX2Zvcm0sIGZvcm0jYXBwbGljYXRpb24tZm9ybSwgZm9ybVwiXHJcbiAgfSlcclxufVxyXG4iLCIvKipcclxuICogR2VuZXJpYyBBVFMgZm9ybSBkaXNjb3Zlcnkg4oCUIHdvcmtzIGZvciBuYXRpdmUgbGFiZWwvaW5wdXQgSFRNTC5cclxuICogTGlua2Vkb20tc2FmZSAobm8gRE9NIGluc3RhbmNlb2YpLlxyXG4gKi9cclxuXHJcbmltcG9ydCB0eXBlIHsgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuXHJcbnR5cGUgQW55RWwgPSB7XHJcbiAgdGFnTmFtZTogc3RyaW5nXHJcbiAgaWQ/OiBzdHJpbmdcclxuICBjbGFzc05hbWU/OiBzdHJpbmcgfCB7IHRvU3RyaW5nKCk6IHN0cmluZyB9XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuXHJcbiAgaGlkZGVuPzogYm9vbGVhblxyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBuYW1lPzogc3RyaW5nXHJcbiAgdmFsdWU/OiBzdHJpbmdcclxuICB0ZXh0Q29udGVudD86IHN0cmluZyB8IG51bGxcclxuICBvcHRpb25zPzogQXJyYXlMaWtlPHsgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsIH0+XHJcbiAgcGFyZW50RWxlbWVudDogQW55RWwgfCBudWxsXHJcbiAgb3duZXJEb2N1bWVudD86IHtcclxuICAgIGJvZHk/OiBBbnlFbCB8IG51bGxcclxuICAgIGdldEVsZW1lbnRCeUlkPzogKGlkOiBzdHJpbmcpID0+IEFueUVsIHwgbnVsbFxyXG4gIH1cclxuICBnZXRBdHRyaWJ1dGU/OiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmcgfCBudWxsXHJcbiAgaGFzQXR0cmlidXRlPzogKG5hbWU6IHN0cmluZykgPT4gYm9vbGVhblxyXG4gIGNsb3Nlc3Q/OiAoc2VsOiBzdHJpbmcpID0+IEFueUVsIHwgbnVsbFxyXG4gIHF1ZXJ5U2VsZWN0b3I/OiAoc2VsOiBzdHJpbmcpID0+IEFueUVsIHwgbnVsbFxyXG4gIHF1ZXJ5U2VsZWN0b3JBbGw/OiAoc2VsOiBzdHJpbmcpID0+IEFycmF5TGlrZTxBbnlFbD5cclxuICBjb250YWlucz86IChvdGhlcjogQW55RWwpID0+IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgRklFTERfU0VMRUNUT1IgPVxyXG4gICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbdHlwZT1cImZpbGVcIl0pOm5vdChbdHlwZT1cInN1Ym1pdFwiXSk6bm90KFt0eXBlPVwiYnV0dG9uXCJdKTpub3QoW3R5cGU9XCJyZXNldFwiXSk6bm90KFt0eXBlPVwiaW1hZ2VcIl0pLCB0ZXh0YXJlYSwgc2VsZWN0J1xyXG5cclxuZnVuY3Rpb24gY29sbGFwc2VXcyh0ZXh0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSB7XHJcbiAgcmV0dXJuICh0ZXh0IHx8IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkxhYmVsKHRleHQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpIHtcclxuICByZXR1cm4gY29sbGFwc2VXcyh0ZXh0KVxyXG4gICAgLnJlcGxhY2UoL1xccypcXCorXFxzKi9nLCBcIiBcIilcclxuICAgIC5yZXBsYWNlKC9cXChcXHMqKHJlcXVpcmVkfGVyZm9yZGVybGljaHxvcHRpb25hbClcXHMqXFwpL2dpLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXHJcbiAgICAudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsYXNzU3RyKGVsOiBBbnlFbCkge1xyXG4gIGNvbnN0IGMgPSBlbC5jbGFzc05hbWVcclxuICByZXR1cm4gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIgPyBjIDogYz8udG9TdHJpbmc/LigpIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWaXNpYmxlKGVsOiBBbnlFbCk6IGJvb2xlYW4ge1xyXG4gIGlmICghZWw/LmdldEF0dHJpYnV0ZSkgcmV0dXJuIGZhbHNlXHJcbiAgaWYgKGVsLmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpID09PSBcInRydWVcIiB8fCBlbC5oaWRkZW4pIHJldHVybiBmYWxzZVxyXG4gIGlmIChlbC5jbG9zZXN0Py4oXCJbYXJpYS1oaWRkZW49J3RydWUnXSwgW2hpZGRlbl1cIikpIHJldHVybiBmYWxzZVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRmlsbGFibGUoZWw6IEFueUVsKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgdGFnID0gKGVsLnRhZ05hbWUgfHwgXCJcIikudG9VcHBlckNhc2UoKVxyXG4gIGlmICh0YWcgIT09IFwiSU5QVVRcIiAmJiB0YWcgIT09IFwiVEVYVEFSRUFcIiAmJiB0YWcgIT09IFwiU0VMRUNUXCIpIHJldHVybiBmYWxzZVxyXG4gIGlmIChlbC5kaXNhYmxlZCkgcmV0dXJuIGZhbHNlXHJcbiAgaWYgKFxyXG4gICAgdGFnID09PSBcIklOUFVUXCIgJiZcclxuICAgIFtcImhpZGRlblwiLCBcImZpbGVcIiwgXCJzdWJtaXRcIiwgXCJidXR0b25cIiwgXCJyZXNldFwiLCBcImltYWdlXCJdLmluY2x1ZGVzKGVsLnR5cGUgfHwgXCJcIilcclxuICApIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gaXNWaXNpYmxlKGVsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0KHNlbFJvb3Q6IEFueUVsIHwgRG9jdW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBBbnlFbFtdIHtcclxuICBjb25zdCByb290ID0gc2VsUm9vdCBhcyBBbnlFbFxyXG4gIGNvbnN0IG5vZGVzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsPy4oc2VsZWN0b3IpXHJcbiAgcmV0dXJuIG5vZGVzID8gQXJyYXkuZnJvbShub2RlcyBhcyBBcnJheUxpa2U8QW55RWw+KSA6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBpY2tGb3JtUm9vdChkb2M6IERvY3VtZW50LCBwcmVmZXJTZWxlY3Rvcj86IHN0cmluZyk6IEFueUVsIHtcclxuICBjb25zdCBib2R5ID0gKGRvYy5ib2R5IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQpIGFzIHVua25vd24gYXMgQW55RWxcclxuICBpZiAocHJlZmVyU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHByZWZlcnJlZCA9IChkb2MgYXMgdW5rbm93biBhcyBBbnlFbCkucXVlcnlTZWxlY3Rvcj8uKHByZWZlclNlbGVjdG9yKVxyXG4gICAgaWYgKHByZWZlcnJlZCAmJiBpc1Zpc2libGUocHJlZmVycmVkKSkgcmV0dXJuIHByZWZlcnJlZFxyXG4gIH1cclxuICBjb25zdCBmb3JtcyA9IGxpc3QoZG9jIGFzIHVua25vd24gYXMgQW55RWwsIFwiZm9ybVwiKS5maWx0ZXIoaXNWaXNpYmxlKVxyXG4gIGxldCBiZXN0OiBBbnlFbCB8IG51bGwgPSBudWxsXHJcbiAgbGV0IGJlc3RTY29yZSA9IC0xXHJcbiAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSBsaXN0KGZvcm0sIEZJRUxEX1NFTEVDVE9SKS5maWx0ZXIoaXNGaWxsYWJsZSkubGVuZ3RoXHJcbiAgICBjb25zdCBsYWJlbHMgPSBsaXN0KGZvcm0sIFwibGFiZWwsIGxlZ2VuZFwiKS5maWx0ZXIoaXNWaXNpYmxlKS5sZW5ndGhcclxuICAgIGNvbnN0IHNjb3JlID0gMTAgKiBmaWVsZHMgKyBsYWJlbHNcclxuICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICBiZXN0U2NvcmUgPSBzY29yZVxyXG4gICAgICBiZXN0ID0gZm9ybVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYmVzdCB8fCBib2R5XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpZWxkQ29udGFpbmVyKGVsOiBBbnlFbCwgcm9vdDogQW55RWwpOiBBbnlFbCB7XHJcbiAgY29uc3QgbWF4U2libGluZ3MgPVxyXG4gICAgKGVsLnRhZ05hbWUgfHwgXCJcIikudG9VcHBlckNhc2UoKSA9PT0gXCJJTlBVVFwiICYmXHJcbiAgICBbXCJyYWRpb1wiLCBcImNoZWNrYm94XCJdLmluY2x1ZGVzKGVsLnR5cGUgfHwgXCJcIilcclxuICAgICAgPyAxMlxyXG4gICAgICA6IDRcclxuICBsZXQgbm9kZTogQW55RWwgfCBudWxsID0gZWwucGFyZW50RWxlbWVudFxyXG4gIGxldCBiZXN0OiBBbnlFbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgcm9vdFxyXG4gIGNvbnN0IGJvZHkgPSBlbC5vd25lckRvY3VtZW50Py5ib2R5ID8/IG51bGxcclxuICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSByb290ICYmIG5vZGUgIT09IGJvZHkpIHtcclxuICAgIGNvbnN0IGNsYXNzSWQgPSBgJHtub2RlLmlkIHx8IFwiXCJ9ICR7Y2xhc3NTdHIobm9kZSl9YFxyXG4gICAgY29uc3Qgc2libGluZ0NvdW50ID0gbGlzdChub2RlLCBGSUVMRF9TRUxFQ1RPUikuZmlsdGVyKGlzRmlsbGFibGUpLmxlbmd0aFxyXG4gICAgY29uc3QgaGFzTGFiZWwgPSAhIW5vZGUucXVlcnlTZWxlY3Rvcj8uKFwibGFiZWwsIGxlZ2VuZFwiKVxyXG4gICAgY29uc3QgbG9va3NMaWtlRmllbGQgPVxyXG4gICAgICAvZmllbGR8Zm9ybXxxdWVzdGlvbnxncm91cHxyb3d8aXRlbXxjb250cm9sfHdyYXBwZXJ8aW5wdXQvaS50ZXN0KGNsYXNzSWQpXHJcbiAgICBpZiAoKGhhc0xhYmVsIHx8IGxvb2tzTGlrZUZpZWxkKSAmJiBzaWJsaW5nQ291bnQgPD0gbWF4U2libGluZ3MpIHtcclxuICAgICAgcmV0dXJuIG5vZGVcclxuICAgIH1cclxuICAgIGlmIChoYXNMYWJlbCB8fCBsb29rc0xpa2VGaWVsZCkgYmVzdCA9IG5vZGVcclxuICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnRcclxuICB9XHJcbiAgcmV0dXJuIGJlc3RcclxufVxyXG5cclxuZnVuY3Rpb24gbGFiZWxGb3JJZChyb290OiBBbnlFbCB8IERvY3VtZW50LCBpZDogc3RyaW5nKTogQW55RWwgfCBudWxsIHtcclxuICBpZiAoIWlkKSByZXR1cm4gbnVsbFxyXG4gIGNvbnN0IHNhZmUgPSBpZC5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIikucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGhpdCA9IChyb290IGFzIEFueUVsKS5xdWVyeVNlbGVjdG9yPy4oYGxhYmVsW2Zvcj1cIiR7c2FmZX1cIl1gKSB8fCBudWxsXHJcbiAgICByZXR1cm4gaGl0ICYmIGlzVmlzaWJsZShoaXQpID8gaGl0IDogbnVsbFxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVMYWJlbChlbDogQW55RWwsIGNvbnRhaW5lcjogQW55RWwpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGJ5Rm9yID1cclxuICAgIGVsLmlkICYmXHJcbiAgICAobGFiZWxGb3JJZChjb250YWluZXIsIGVsLmlkKSB8fFxyXG4gICAgICBsYWJlbEZvcklkKGVsLm93bmVyRG9jdW1lbnQgYXMgdW5rbm93biBhcyBEb2N1bWVudCwgZWwuaWQpKVxyXG4gIGlmIChieUZvcikge1xyXG4gICAgY29uc3QgdGV4dCA9IGNsZWFuTGFiZWwoYnlGb3IudGV4dENvbnRlbnQpXHJcbiAgICBpZiAodGV4dCkgcmV0dXJuIHRleHRcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3Nlc3RMYWJlbCA9IGVsLmNsb3Nlc3Q/LihcImxhYmVsXCIpXHJcbiAgaWYgKGNsb3Nlc3RMYWJlbCAmJiBpc1Zpc2libGUoY2xvc2VzdExhYmVsKSkge1xyXG4gICAgY29uc3QgdGV4dCA9IGNsZWFuTGFiZWwoY2xvc2VzdExhYmVsLnRleHRDb250ZW50KVxyXG4gICAgaWYgKHRleHQpIHJldHVybiB0ZXh0XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcmlhID0gY2xlYW5MYWJlbChlbC5nZXRBdHRyaWJ1dGU/LihcImFyaWEtbGFiZWxcIikpXHJcbiAgaWYgKGFyaWEgJiYgIS9eKHNlbGVjdHxjaG9vc2V8b3B0aW9ufHllc3xub3x1cGxvYWR8YnJvd3NlKSQvaS50ZXN0KGFyaWEpKSB7XHJcbiAgICByZXR1cm4gYXJpYVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbGFiZWxsZWRCeSA9IChlbC5nZXRBdHRyaWJ1dGU/LihcImFyaWEtbGFiZWxsZWRieVwiKSB8fCBcIlwiKVxyXG4gICAgLnNwbGl0KC9cXHMrLylcclxuICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgIC5tYXAoKGlkKSA9PiBlbC5vd25lckRvY3VtZW50Py5nZXRFbGVtZW50QnlJZD8uKGlkKSB8fCBudWxsKVxyXG4gICAgLmZpbHRlcigobik6IG4gaXMgQW55RWwgPT4gISFuICYmIGlzVmlzaWJsZShuKSlcclxuICAgIC5tYXAoKG4pID0+IG4udGV4dENvbnRlbnQpXHJcbiAgICAuam9pbihcIiBcIilcclxuICBjb25zdCBhcmlhVGV4dCA9IGNsZWFuTGFiZWwobGFiZWxsZWRCeSlcclxuICBpZiAoYXJpYVRleHQpIHJldHVybiBhcmlhVGV4dFxyXG5cclxuICBjb25zdCBjYW5kaWRhdGVzID0gbGlzdChcclxuICAgIGNvbnRhaW5lcixcclxuICAgIFwibGFiZWwsIGxlZ2VuZCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgc3BhbiwgZGl2XCJcclxuICApLmZpbHRlcigobikgPT4ge1xyXG4gICAgaWYgKCFpc1Zpc2libGUobikpIHJldHVybiBmYWxzZVxyXG4gICAgaWYgKG4uY29udGFpbnM/LihlbCkgJiYgbi50YWdOYW1lICE9PSBcIkxBQkVMXCIpIHJldHVybiBmYWxzZVxyXG4gICAgY29uc3QgdCA9IGNsZWFuTGFiZWwobi50ZXh0Q29udGVudClcclxuICAgIHJldHVybiAhIXQgJiYgIS9eKHNlbGVjdHxjaG9vc2V8b3B0aW9ufHllc3xub3x1cGxvYWR8YnJvd3NlKSQvaS50ZXN0KHQpXHJcbiAgfSlcclxuICByZXR1cm4gY2xlYW5MYWJlbChjYW5kaWRhdGVzWzBdPy50ZXh0Q29udGVudClcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZXF1aXJlZChlbDogQW55RWwsIGNvbnRhaW5lcjogQW55RWwpIHtcclxuICBpZiAoZWwuaGFzQXR0cmlidXRlPy4oXCJyZXF1aXJlZFwiKSB8fCBlbC5nZXRBdHRyaWJ1dGU/LihcImFyaWEtcmVxdWlyZWRcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gL1xcKnxyZXF1aXJlZHxlcmZvcmRlcmxpY2gvaS50ZXN0KGNvbnRhaW5lci50ZXh0Q29udGVudCB8fCBcIlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RPcHRpb25zKHNlbGVjdDogQW55RWwpOiBzdHJpbmdbXSB7XHJcbiAgY29uc3Qgb3B0cyA9IHNlbGVjdC5vcHRpb25zID8gQXJyYXkuZnJvbShzZWxlY3Qub3B0aW9ucykgOiBbXVxyXG4gIHJldHVybiBvcHRzXHJcbiAgICAubWFwKChvKSA9PiBjb2xsYXBzZVdzKG8udGV4dENvbnRlbnQpLnJlcGxhY2UoL1xccypcXCorXFxzKi9nLCBcIiBcIikudHJpbSgpKVxyXG4gICAgLmZpbHRlcigodCkgPT4gdCAmJiAhL14oc2VsZWN0fHBsZWFzZSBzZWxlY3R8LS0pJC9pLnRlc3QodCkpXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERpc2NvdmVyT3B0aW9ucyA9IHtcclxuICAvKiogUHJlZmVyIGEgcm9vdCBzZWxlY3RvciAoZS5nLiBHcmVlbmhvdXNlICNhcHBsaWNhdGlvbl9mb3JtKSAqL1xyXG4gIHByZWZlclJvb3RTZWxlY3Rvcj86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzY292ZXJHZW5lcmljRmllbGRzKFxyXG4gIGRvYzogRG9jdW1lbnQsXHJcbiAgb3B0czogRGlzY292ZXJPcHRpb25zID0ge31cclxuKTogRGlzY292ZXJlZEZpZWxkW10ge1xyXG4gIGNvbnN0IHJvb3QgPSBwaWNrRm9ybVJvb3QoZG9jLCBvcHRzLnByZWZlclJvb3RTZWxlY3RvcilcclxuICBjb25zdCBub2RlcyA9IGxpc3Qocm9vdCwgRklFTERfU0VMRUNUT1IpLmZpbHRlcihpc0ZpbGxhYmxlKVxyXG4gIGNvbnN0IG91dDogRGlzY292ZXJlZEZpZWxkW10gPSBbXVxyXG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0PEFueUVsPigpXHJcblxyXG4gIGZvciAoY29uc3QgZWwgb2Ygbm9kZXMpIHtcclxuICAgIGlmIChzZWVuLmhhcyhlbCkpIGNvbnRpbnVlXHJcbiAgICBjb25zdCB0YWcgPSAoZWwudGFnTmFtZSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpXHJcblxyXG4gICAgaWYgKHRhZyA9PT0gXCJJTlBVVFwiICYmIChlbC50eXBlID09PSBcInJhZGlvXCIgfHwgZWwudHlwZSA9PT0gXCJjaGVja2JveFwiKSkge1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBmaWVsZENvbnRhaW5lcihlbCwgcm9vdClcclxuICAgICAgY29uc3QgZ3JvdXAgPSBsaXN0KGNvbnRhaW5lciwgYGlucHV0W3R5cGU9XCIke2VsLnR5cGV9XCJdYCkuZmlsdGVyKGlzRmlsbGFibGUpXHJcbiAgICAgIGNvbnN0IG5hbWVkID1cclxuICAgICAgICBlbC5uYW1lIHx8IGVsLmlkXHJcbiAgICAgICAgICA/IGdyb3VwLmZpbHRlcigoZykgPT4gZy5uYW1lID09PSBlbC5uYW1lIHx8IGcuaWQgPT09IGVsLmlkKVxyXG4gICAgICAgICAgOiBncm91cFxyXG4gICAgICBmb3IgKGNvbnN0IGcgb2YgbmFtZWQpIHNlZW4uYWRkKGcpXHJcblxyXG4gICAgICBjb25zdCBsYWJlbCA9IHJlc29sdmVMYWJlbChlbCwgY29udGFpbmVyKVxyXG4gICAgICBpZiAoIWxhYmVsKSBjb250aW51ZVxyXG4gICAgICBjb25zdCBvcHRpb25zID0gbmFtZWRcclxuICAgICAgICAubWFwKChnKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsYWIgPVxyXG4gICAgICAgICAgICAoZy5pZCAmJiBsYWJlbEZvcklkKGNvbnRhaW5lciwgZy5pZCk/LnRleHRDb250ZW50KSB8fFxyXG4gICAgICAgICAgICBnLmNsb3Nlc3Q/LihcImxhYmVsXCIpPy50ZXh0Q29udGVudCB8fFxyXG4gICAgICAgICAgICBnLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1sYWJlbFwiKSB8fFxyXG4gICAgICAgICAgICBnLnZhbHVlXHJcbiAgICAgICAgICByZXR1cm4gY29sbGFwc2VXcyhsYWIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcblxyXG4gICAgICBvdXQucHVzaCh7XHJcbiAgICAgICAgdHlwZTogZWwudHlwZSA9PT0gXCJyYWRpb1wiID8gXCJyYWRpb1wiIDogXCJjaGVja2JveFwiLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHJlcXVpcmVkOiBuYW1lZC5zb21lKChnKSA9PiBpc1JlcXVpcmVkKGcsIGNvbnRhaW5lcikpLFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgfSlcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBzZWVuLmFkZChlbClcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGZpZWxkQ29udGFpbmVyKGVsLCByb290KVxyXG4gICAgY29uc3QgbGFiZWwgPSByZXNvbHZlTGFiZWwoZWwsIGNvbnRhaW5lcilcclxuICAgIGlmICghbGFiZWwpIGNvbnRpbnVlXHJcblxyXG4gICAgaWYgKHRhZyA9PT0gXCJTRUxFQ1RcIikge1xyXG4gICAgICBvdXQucHVzaCh7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICByZXF1aXJlZDogaXNSZXF1aXJlZChlbCwgY29udGFpbmVyKSxcclxuICAgICAgICBvcHRpb25zOiBzZWxlY3RPcHRpb25zKGVsKVxyXG4gICAgICB9KVxyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIG91dC5wdXNoKHtcclxuICAgICAgdHlwZTogdGFnID09PSBcIlRFWFRBUkVBXCIgPyBcInRleHRhcmVhXCIgOiBcInRleHRcIixcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIHJlcXVpcmVkOiBpc1JlcXVpcmVkKGVsLCBjb250YWluZXIpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG91dFxyXG59XHJcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGRpc2NvdmVyR2VuZXJpY0ZpZWxkcyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1nZW5lcmljXCJcclxuaW1wb3J0IHR5cGUgeyBEaXNjb3ZlcmVkRmllbGQgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdHlwZXNcIlxyXG5cclxuLyoqIExldmVyIGhpcmUgYXBwbHkgZm9ybXMuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNjb3ZlckxldmVyRmllbGRzKGRvYzogRG9jdW1lbnQpOiBEaXNjb3ZlcmVkRmllbGRbXSB7XHJcbiAgcmV0dXJuIGRpc2NvdmVyR2VuZXJpY0ZpZWxkcyhkb2MsIHtcclxuICAgIHByZWZlclJvb3RTZWxlY3RvcjogXCIuYXBwbGljYXRpb24tZm9ybSwgZm9ybSNhcHBsaWNhdGlvbi1mb3JtLCBmb3JtXCJcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCB7IGRpc2NvdmVyR2VuZXJpY0ZpZWxkcyB9IGZyb20gXCJ+Y29udGVudHMvY3Jhd2xlci9kaXNjb3Zlci1nZW5lcmljXCJcclxuaW1wb3J0IHR5cGUgeyBEaXNjb3ZlcmVkRmllbGQgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdHlwZXNcIlxyXG5cclxuLyoqIFBlcnNvbmlvIGNhcmVlcnMgYXBwbHkgcGFnZXMg4oCUIG5hdGl2ZSBmb3JtIGZpZWxkcy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyUGVyc29uaW9GaWVsZHMoZG9jOiBEb2N1bWVudCk6IERpc2NvdmVyZWRGaWVsZFtdIHtcclxuICByZXR1cm4gZGlzY292ZXJHZW5lcmljRmllbGRzKGRvYywge1xyXG4gICAgcHJlZmVyUm9vdFNlbGVjdG9yOiBcImZvcm0uYXBwbGljYXRpb24tZm9ybSwgZm9ybVwiXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBkaXNjb3ZlckdlbmVyaWNGaWVsZHMgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvZGlzY292ZXItZ2VuZXJpY1wiXHJcbmltcG9ydCB0eXBlIHsgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuXHJcbi8qKlxyXG4gKiBXb3JrZGF5IGFwcGx5IOKAlCBtYW55IHdpZGdldHMgYXJlIGN1c3RvbTsgdGhpcyBkaXNjb3ZlcnMgbmF0aXZlIGlucHV0cyBwcmVzZW50XHJcbiAqIGluIHRoZSBmaXh0dXJlIC8gc2ltcGxpZmllZCBwYWdlcy4gRnVsbCBXb3JrZGF5IG9wcyBzdGF5IGluIHRoZSBlbmdpbmUgYnVuZGxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyV29ya2RheUZpZWxkcyhkb2M6IERvY3VtZW50KTogRGlzY292ZXJlZEZpZWxkW10ge1xyXG4gIHJldHVybiBkaXNjb3ZlckdlbmVyaWNGaWVsZHMoZG9jLCB7XHJcbiAgICBwcmVmZXJSb290U2VsZWN0b3I6ICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiYXBwbHlGbG93XCJdLCBmb3JtLCBib2R5J1xyXG4gIH0pXHJcbn1cclxuIiwiLyoqXHJcbiAqIFJlc29sdmUgQVRTIGlkIGZyb20gaG9zdG5hbWUvaHJlZiB1c2luZyB0aGUgSm9icmlnaHQgc2l0ZSByZWdpc3RyeS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTSVRFX1JFR0lTVFJZLCB0eXBlIFNpdGVEZWZpbml0aW9uIH0gZnJvbSBcIn5jb3JlL3N1cHBvcnRlZC1zaXRlc1wiXHJcblxyXG5leHBvcnQgdHlwZSBSZWdpc3RyeUF0c0lkID0gc3RyaW5nXHJcblxyXG5mdW5jdGlvbiBob3N0TWF0Y2hlc0RvbWFpbihob3N0bmFtZTogc3RyaW5nLCBkb21haW46IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGggPSBob3N0bmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgY29uc3QgZCA9IGRvbWFpbi50b0xvd2VyQ2FzZSgpXHJcbiAgcmV0dXJuIGggPT09IGQgfHwgaC5lbmRzV2l0aChcIi5cIiArIGQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvc3RNYXRjaGVzUGF0dGVybihob3N0bmFtZTogc3RyaW5nLCBwYXR0ZXJuOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAvLyBNYXRjaFBhdHRlcm4tbGlrZTogKjovLyouZXhhbXBsZS5jb20vKiBvciAqOi8vZXhhbXBsZS5jb20vKlxyXG4gIGNvbnN0IG0gPSAvXlteOl0rOlxcL1xcLyhbXi9dKykvLmV4ZWMocGF0dGVybilcclxuICBpZiAoIW0pIHJldHVybiBmYWxzZVxyXG4gIGxldCBob3N0ID0gbVsxXS50b0xvd2VyQ2FzZSgpXHJcbiAgaWYgKGhvc3Quc3RhcnRzV2l0aChcIiouXCIpKSB7XHJcbiAgICBjb25zdCBiYXNlID0gaG9zdC5zbGljZSgyKVxyXG4gICAgcmV0dXJuIGhvc3RuYW1lID09PSBiYXNlIHx8IGhvc3RuYW1lLmVuZHNXaXRoKFwiLlwiICsgYmFzZSlcclxuICB9XHJcbiAgaWYgKGhvc3QgPT09IFwiKlwiKSByZXR1cm4gdHJ1ZVxyXG4gIHJldHVybiBob3N0bmFtZSA9PT0gaG9zdCB8fCBob3N0bmFtZS5lbmRzV2l0aChcIi5cIiArIGhvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGhPayhwYXRobmFtZTogc3RyaW5nLCBocmVmOiBzdHJpbmcsIHNpdGU6IFNpdGVEZWZpbml0aW9uKTogYm9vbGVhbiB7XHJcbiAgaWYgKHNpdGUucGF0aFJlZ2V4KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIW5ldyBSZWdFeHAoc2l0ZS5wYXRoUmVnZXgpLnRlc3QocGF0aG5hbWUpKSByZXR1cm4gZmFsc2VcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHNpdGUudXJsUmVnZXgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghbmV3IFJlZ0V4cChzaXRlLnVybFJlZ2V4KS50ZXN0KGhyZWYpKSByZXR1cm4gZmFsc2VcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLyoqXHJcbiAqIEJlc3QtZWZmb3J0IEFUUyBpZCBmcm9tIFNJVEVfUkVHSVNUUlkgKGdyZWVuaG91c2UsIHdvcmtkYXksIOKApikuXHJcbiAqIFJldHVybnMgbnVsbCB3aGVuIG5vdGhpbmcgbWF0Y2hlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RSZWdpc3RyeUF0cyhcclxuICBob3N0bmFtZTogc3RyaW5nLFxyXG4gIGhyZWYgPSBcIlwiXHJcbik6IFJlZ2lzdHJ5QXRzSWQgfCBudWxsIHtcclxuICBjb25zdCBoID0gKGhvc3RuYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKClcclxuICBsZXQgcGF0aG5hbWUgPSBcIi9cIlxyXG4gIHRyeSB7XHJcbiAgICBwYXRobmFtZSA9IGhyZWYgPyBuZXcgVVJMKGhyZWYpLnBhdGhuYW1lIDogXCIvXCJcclxuICB9IGNhdGNoIHtcclxuICAgIHBhdGhuYW1lID0gXCIvXCJcclxuICB9XHJcblxyXG4gIGxldCBiZXN0OiB7IGlkOiBzdHJpbmc7IHNjb3JlOiBudW1iZXIgfSB8IG51bGwgPSBudWxsXHJcblxyXG4gIGZvciAoY29uc3QgW2lkLCBzaXRlXSBvZiBPYmplY3QuZW50cmllcyhTSVRFX1JFR0lTVFJZKSkge1xyXG4gICAgbGV0IHNjb3JlID0gMFxyXG4gICAgY29uc3QgZG9tYWlucyA9IHNpdGUuZG9tYWlucyA/PyBbXVxyXG4gICAgY29uc3QgcGF0dGVybnMgPSBzaXRlLnBhdHRlcm5zID8/IFtdXHJcblxyXG4gICAgZm9yIChjb25zdCBkIG9mIGRvbWFpbnMpIHtcclxuICAgICAgaWYgKGhvc3RNYXRjaGVzRG9tYWluKGgsIGQpKSB7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heChzY29yZSwgZC5sZW5ndGggKyAxMClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwIG9mIHBhdHRlcm5zKSB7XHJcbiAgICAgIGlmIChob3N0TWF0Y2hlc1BhdHRlcm4oaCwgcCkpIHtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KHNjb3JlLCAyMClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNjb3JlID09PSAwKSBjb250aW51ZVxyXG4gICAgaWYgKCFwYXRoT2socGF0aG5hbWUsIGhyZWYgfHwgYGh0dHBzOi8vJHtofS9gLCBzaXRlKSkgY29udGludWVcclxuXHJcbiAgICAvLyBQcmVmZXIgY29uc3RyYWluZWQgcGF0aCBtYXRjaGVzXHJcbiAgICBpZiAoc2l0ZS5wYXRoUmVnZXggfHwgc2l0ZS51cmxSZWdleCkgc2NvcmUgKz0gNTBcclxuXHJcbiAgICBpZiAoIWJlc3QgfHwgc2NvcmUgPiBiZXN0LnNjb3JlKSBiZXN0ID0geyBpZCwgc2NvcmUgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGJlc3Q/LmlkID8/IG51bGxcclxufVxyXG4iLCIvKipcbiAqIFN1cHBvcnRlZCBBVFMgc2l0ZSByZWdpc3RyeSArIGRlcml2ZWQgbGlzdHMuXG4gKiBSZWdpc3RyeSBkYXRhIGxpdmVzIGluIHNpdGUtcmVnaXN0cnkucmF3LmpzIChleHRyYWN0ZWQgZnJvbSBKb2JyaWdodCB2MS4yMy4wKS5cbiAqL1xuXG5pbXBvcnQgeyBNYXRjaFBhdHRlcm4gfSBmcm9tIFwifmNvcmUvbWF0Y2gtcGF0dGVybnNcIlxuaW1wb3J0IHsgU0lURV9SRUdJU1RSWSBhcyBSQVdfUkVHSVNUUlkgfSBmcm9tIFwifmNvcmUvc2l0ZS1yZWdpc3RyeS5yYXdcIlxuXG5leHBvcnQgdHlwZSBTaXRlRGVmaW5pdGlvbiA9IHtcbiAgZG9tYWlucz86IHN0cmluZ1tdXG4gIHBhdHRlcm5zPzogc3RyaW5nW11cbiAgaWZyYW1lRG9tYWlucz86IHN0cmluZ1tdXG4gIHF1ZXJ5UGFyYW1zPzogc3RyaW5nW11cbiAgcGF0aFJlZ2V4Pzogc3RyaW5nXG4gIHVybFJlZ2V4Pzogc3RyaW5nXG4gIHBhZ2VTb3VyY2VLZXl3b3JkPzogc3RyaW5nXG4gIHBhZ2VTb3VyY2VEb21haW4/OiBzdHJpbmdcbiAgaWZyYW1lT25seT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFNJVEVfUkVHSVNUUlkgPSBSQVdfUkVHSVNUUlkgYXMgUmVjb3JkPHN0cmluZywgU2l0ZURlZmluaXRpb24+XG5cbmV4cG9ydCBjb25zdCBQSU5QT0lOVEhRX0NBUkVFUlNfQ0ROID0gXCJkMm41aWVkOTRtYXpvcC5jbG91ZGZyb250Lm5ldFwiXG5leHBvcnQgY29uc3QgRUlHSFRGT0xEX0NBUkVFUkhVQl9KT0JfUEFUSF9SRUdFWF9TT1VSQ0UgPVxuICBcIl4vY2FyZWVyaHViL2V4cGxvcmUvam9icy8oPyFhcHBseS8/JClbXi8/I10rLz8kXCJcblxuY29uc3QgZWlnaHRmb2xkQ2FyZWVySHViSm9iUGF0aFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgRUlHSFRGT0xEX0NBUkVFUkhVQl9KT0JfUEFUSF9SRUdFWF9TT1VSQ0VcbilcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWlnaHRmb2xkQ2FyZWVySHViSm9iUGF0aChwYXRobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBlaWdodGZvbGRDYXJlZXJIdWJKb2JQYXRoUmVnZXgudGVzdChwYXRobmFtZSlcbn1cblxuZnVuY3Rpb24gaG9zdG5hbWVGcm9tTWF0Y2hQYXR0ZXJuKHBhdHRlcm46IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBtYXRjaCA9IC9eW146XSs6XFwvXFwvKFteL10rKS8uZXhlYyhwYXR0ZXJuKVxuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbFxuICBjb25zdCBob3N0ID0gbWF0Y2hbMV1cbiAgaWYgKCFob3N0IHx8IGhvc3QgPT09IFwiKlwiKSByZXR1cm4gbnVsbFxuICByZXR1cm4gaG9zdC5zdGFydHNXaXRoKFwiKi5cIikgPyBob3N0LnNsaWNlKDIpIDogaG9zdFxufVxuXG5jb25zdCB1bmNvbnN0cmFpbmVkU2l0ZXMgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZpbHRlcihcbiAgKHNpdGUpID0+ICFzaXRlLnBhdGhSZWdleCAmJiAhc2l0ZS51cmxSZWdleFxuKVxuXG5leHBvcnQgY29uc3QgU1VQUE9SVF9ET01BSU5TID0gdW5jb25zdHJhaW5lZFNpdGVzLmZsYXRNYXAoXG4gIChzaXRlKSA9PiBzaXRlLmRvbWFpbnMgPz8gW11cbilcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRfUEFUVEVSTlMgPSB1bmNvbnN0cmFpbmVkU2l0ZXNcbiAgLmZsYXRNYXAoKHNpdGUpID0+IHNpdGUucGF0dGVybnMgPz8gW10pXG4gIC5tYXAoKHBhdHRlcm4pID0+IG5ldyBNYXRjaFBhdHRlcm4ocGF0dGVybikpXG5cbmV4cG9ydCBjb25zdCBTVVBQT1JUX0hPU1RTID0gQXJyYXkuZnJvbShcbiAgbmV3IFNldChcbiAgICBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZsYXRNYXAoKHNpdGUpID0+IFtcbiAgICAgIC4uLihzaXRlLmRvbWFpbnMgPz8gW10pLFxuICAgICAgLi4uKHNpdGUucGF0dGVybnMgPz8gW10pXG4gICAgICAgIC5tYXAoaG9zdG5hbWVGcm9tTWF0Y2hQYXR0ZXJuKVxuICAgICAgICAuZmlsdGVyKChob3N0KTogaG9zdCBpcyBzdHJpbmcgPT4gaG9zdCAhPT0gbnVsbClcbiAgICBdKVxuICApXG4pXG5cbmV4cG9ydCB0eXBlIENvbnN0cmFpbmVkU2l0ZVJ1bGUgPSB7XG4gIGRvbWFpbnM6IHN0cmluZ1tdXG4gIHBhdHRlcm5zOiBNYXRjaFBhdHRlcm5bXVxuICBwYXRoUmVnZXg/OiBSZWdFeHBcbiAgdXJsUmVnZXg/OiBSZWdFeHBcbn1cblxuZXhwb3J0IGNvbnN0IENPTlNUUkFJTkVEX1NJVEVfUlVMRVM6IENvbnN0cmFpbmVkU2l0ZVJ1bGVbXSA9IE9iamVjdC52YWx1ZXMoXG4gIFNJVEVfUkVHSVNUUllcbilcbiAgLmZpbHRlcihcbiAgICAoc2l0ZSkgPT5cbiAgICAgICh0eXBlb2Ygc2l0ZS5wYXRoUmVnZXggPT09IFwic3RyaW5nXCIgJiYgc2l0ZS5wYXRoUmVnZXgubGVuZ3RoID4gMCkgfHxcbiAgICAgICh0eXBlb2Ygc2l0ZS51cmxSZWdleCA9PT0gXCJzdHJpbmdcIiAmJiBzaXRlLnVybFJlZ2V4Lmxlbmd0aCA+IDApXG4gIClcbiAgLm1hcCgoc2l0ZSkgPT4gKHtcbiAgICBkb21haW5zOiBzaXRlLmRvbWFpbnMgPz8gW10sXG4gICAgcGF0dGVybnM6IChzaXRlLnBhdHRlcm5zID8/IFtdKS5tYXAoKHBhdHRlcm4pID0+IG5ldyBNYXRjaFBhdHRlcm4ocGF0dGVybikpLFxuICAgIHBhdGhSZWdleDogc2l0ZS5wYXRoUmVnZXggPyBuZXcgUmVnRXhwKHNpdGUucGF0aFJlZ2V4KSA6IHVuZGVmaW5lZCxcbiAgICB1cmxSZWdleDogc2l0ZS51cmxSZWdleCA/IG5ldyBSZWdFeHAoc2l0ZS51cmxSZWdleCkgOiB1bmRlZmluZWRcbiAgfSkpXG5cbmV4cG9ydCBjb25zdCBJRlJBTUVfQ0hFQ0tfUEFUVEVSTiA9IE9iamVjdC52YWx1ZXMoU0lURV9SRUdJU1RSWSkuZmxhdE1hcChcbiAgKHNpdGUpID0+IHNpdGUuaWZyYW1lRG9tYWlucyA/PyBbXVxuKVxuXG5leHBvcnQgY29uc3QgUEFHRV9TT1VSQ0VfQVRTX0xJU1QgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpXG4gIC5maWx0ZXIoKHNpdGUpID0+IHNpdGUucGFnZVNvdXJjZUtleXdvcmQgJiYgc2l0ZS5wYWdlU291cmNlRG9tYWluKVxuICAubWFwKFxuICAgIChzaXRlKSA9PlxuICAgICAgW3NpdGUucGFnZVNvdXJjZUtleXdvcmQhLCBzaXRlLnBhZ2VTb3VyY2VEb21haW4hXSBhcyBbc3RyaW5nLCBzdHJpbmddXG4gIClcblxuZXhwb3J0IGNvbnN0IElGUkFNRV9PTkxZX0RPTUFJTlMgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpXG4gIC5maWx0ZXIoKHNpdGUpID0+IHNpdGUuaWZyYW1lT25seSlcbiAgLmZsYXRNYXAoKHNpdGUpID0+IHNpdGUuZG9tYWlucyA/PyBbXSlcblxuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNX0xJU1QgPSBPYmplY3QudmFsdWVzKFNJVEVfUkVHSVNUUlkpLmZsYXRNYXAoXG4gIChzaXRlKSA9PiBzaXRlLnF1ZXJ5UGFyYW1zID8/IFtdXG4pXG4iLCIvKipcbiAqIE1pbmltYWwgQ2hyb21lIG1hdGNoLXBhdHRlcm4gaW1wbGVtZW50YXRpb24gZm9yIHN1cHBvcnRlZC1zaXRlcy5cbiAqIChQb3J0ZWQgc3Vic2V0IG9mIEB3ZWJleHQtY29yZS9tYXRjaC1wYXR0ZXJucy4pXG4gKi9cblxuZXhwb3J0IGNsYXNzIEludmFsaWRNYXRjaFBhdHRlcm4gZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm46IHN0cmluZywgcmVhc29uOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgSW52YWxpZCBtYXRjaCBwYXR0ZXJuIFwiJHtwYXR0ZXJufVwiOiAke3JlYXNvbn1gKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaFBhdHRlcm4ge1xuICBzdGF0aWMgUFJPVE9DT0xTID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiZmlsZVwiLCBcImZ0cFwiLCBcInVyblwiXSBhcyBjb25zdFxuXG4gIGlzQWxsVXJscyA9IGZhbHNlXG4gIHByb3RvY29sTWF0Y2hlczogc3RyaW5nW10gPSBbXVxuICBob3N0bmFtZU1hdGNoID0gXCIqXCJcbiAgcGF0aG5hbWVNYXRjaCA9IFwiKlwiXG5cbiAgY29uc3RydWN0b3IocGF0dGVybjogc3RyaW5nKSB7XG4gICAgaWYgKHBhdHRlcm4gPT09IFwiPGFsbF91cmxzPlwiKSB7XG4gICAgICB0aGlzLmlzQWxsVXJscyA9IHRydWVcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gWy4uLk1hdGNoUGF0dGVybi5QUk9UT0NPTFNdXG4gICAgICB0aGlzLmhvc3RuYW1lTWF0Y2ggPSBcIipcIlxuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gXCIqXCJcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IC8oLiopOlxcL1xcLyguKj8pKFxcLy4qKS8uZXhlYyhwYXR0ZXJuKVxuICAgIGlmIChwYXJzZWQgPT0gbnVsbCkgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4ocGF0dGVybiwgXCJJbmNvcnJlY3QgZm9ybWF0XCIpXG5cbiAgICBjb25zdCBbLCBwcm90b2NvbCwgaG9zdG5hbWUsIHBhdGhuYW1lXSA9IHBhcnNlZFxuXG4gICAgaWYgKFxuICAgICAgIU1hdGNoUGF0dGVybi5QUk9UT0NPTFMuaW5jbHVkZXMocHJvdG9jb2wgYXMgKHR5cGVvZiBNYXRjaFBhdHRlcm4uUFJPVE9DT0xTKVtudW1iZXJdKSAmJlxuICAgICAgcHJvdG9jb2wgIT09IFwiKlwiXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgYCR7cHJvdG9jb2x9IG5vdCBhIHZhbGlkIHByb3RvY29sICgke01hdGNoUGF0dGVybi5QUk9UT0NPTFMuam9pbihcIiwgXCIpfSlgXG4gICAgICApXG4gICAgfVxuICAgIGlmIChob3N0bmFtZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkTWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIFwiSG9zdG5hbWUgY2Fubm90IGluY2x1ZGUgYSBwb3J0XCIpXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGhvc3RuYW1lLmluY2x1ZGVzKFwiKlwiKSAmJlxuICAgICAgaG9zdG5hbWUubGVuZ3RoID4gMSAmJlxuICAgICAgIWhvc3RuYW1lLnN0YXJ0c1dpdGgoXCIqLlwiKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICAgIHBhdHRlcm4sXG4gICAgICAgIFwiSWYgdXNpbmcgYSB3aWxkY2FyZCAoKiksIGl0IG11c3QgZ28gYXQgdGhlIHN0YXJ0IG9mIHRoZSBob3N0bmFtZVwiXG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5wcm90b2NvbE1hdGNoZXMgPSBwcm90b2NvbCA9PT0gXCIqXCIgPyBbXCJodHRwXCIsIFwiaHR0cHNcIl0gOiBbcHJvdG9jb2xdXG4gICAgdGhpcy5ob3N0bmFtZU1hdGNoID0gaG9zdG5hbWVcbiAgICB0aGlzLnBhdGhuYW1lTWF0Y2ggPSBwYXRobmFtZVxuICB9XG5cbiAgaW5jbHVkZXMoaW5wdXQ6IHN0cmluZyB8IFVSTCB8IExvY2F0aW9uKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNBbGxVcmxzKSByZXR1cm4gdHJ1ZVxuICAgIGNvbnN0IHVybCA9XG4gICAgICB0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyBuZXcgVVJMKGlucHV0KVxuICAgICAgICA6IGlucHV0IGluc3RhbmNlb2YgTG9jYXRpb25cbiAgICAgICAgICA/IG5ldyBVUkwoaW5wdXQuaHJlZilcbiAgICAgICAgICA6IGlucHV0XG4gICAgcmV0dXJuIHRoaXMucHJvdG9jb2xNYXRjaGVzLnNvbWUoKHByb3RvY29sKSA9PiB7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cFwiKSByZXR1cm4gdGhpcy5pc0h0dHBNYXRjaCh1cmwpXG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cHNcIikgcmV0dXJuIHRoaXMuaXNIdHRwc01hdGNoKHVybClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGlzSHR0cE1hdGNoKHVybDogVVJMKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybClcbiAgfVxuXG4gIHByaXZhdGUgaXNIdHRwc01hdGNoKHVybDogVVJMKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwczpcIiAmJiB0aGlzLmlzSG9zdFBhdGhNYXRjaCh1cmwpXG4gIH1cblxuICBwcml2YXRlIGlzSG9zdFBhdGhNYXRjaCh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5ob3N0bmFtZU1hdGNoIHx8ICF0aGlzLnBhdGhuYW1lTWF0Y2gpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IGhvc3RSZWdleGVzID0gW1xuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoKSxcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaC5yZXBsYWNlKC9eXFwqXFwuLywgXCJcIikpXG4gICAgXVxuICAgIGNvbnN0IHBhdGhSZWdleCA9IHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMucGF0aG5hbWVNYXRjaClcbiAgICByZXR1cm4gKFxuICAgICAgaG9zdFJlZ2V4ZXMuc29tZSgocmUpID0+IHJlLnRlc3QodXJsLmhvc3RuYW1lKSkgJiYgcGF0aFJlZ2V4LnRlc3QodXJsLnBhdGhuYW1lKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFBhdHRlcm5Ub1JlZ2V4KHBhdHRlcm46IHN0cmluZyk6IFJlZ0V4cCB7XG4gICAgY29uc3QgZXNjYXBlZCA9IHBhdHRlcm4ucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke2VzY2FwZWQucmVwbGFjZSgvXFxcXFxcKi9nLCBcIi4qXCIpfSRgKVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgU0lURV9SRUdJU1RSWSA9IHtcclxuICBncmVlbmhvdXNlOiB7XHJcbiAgICBkb21haW5zOiBbXCJncmVlbmhvdXNlLmlvXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiZ3JlZW5ob3VzZS5pb1wiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJnaF9qaWRcIiwgXCJnaF9zcmNcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzpbXi9dKy9qb2JzL1xcXFxkK3xlbWJlZC9qb2JfYXBwKVwiXHJcbiAgfSxcclxuICB4Y29tcGFueTogeyBwYXR0ZXJuczogW1wiKjovL3guY29tcGFueS8qXCJdLCBwYXRoUmVnZXg6IFwiXi9jYXJlZXJzL1teL10rLz8kXCIgfSxcclxuICB3YWxtYXJ0OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMud2FsbWFydC5jb20vKlwiXSxcclxuICAgIHBhdGhSZWdleDpcclxuICAgICAgXCJeLyh1cy9lbi8oaG9tZXxqb2JzPy9bXi9dK3xhcHBseSg/Oi8uKik/fGFwcGxpY2F0aW9uKD86Ly4qKT8pfGNvbnRlbnQvY2FyZWVycy91cy9lbi8uKikkXCJcclxuICB9LFxyXG4gIHdvcmtkYXk6IHtcclxuICAgIGRvbWFpbnM6IFtcclxuICAgICAgXCJteXdvcmtkYXlqb2JzLmNvbVwiLFxyXG4gICAgICBcIm15d29ya2RheWpvYnMtaW1wbC5jb21cIixcclxuICAgICAgXCJteXdvcmtkYXlzaXRlLmNvbVwiLFxyXG4gICAgICBcIm15d29ya2RheS5jb21cIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAga3VsYTogeyBkb21haW5zOiBbXCJjYXJlZXJzLmt1bGEuYWlcIl0sIHBhdGhSZWdleDogXCJeL1teL10rL1teL10rXCIgfSxcclxuICBpY2ltczoge1xyXG4gICAgZG9tYWluczogW1wiaWNpbXMuY29tXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiaWNpbXMuY29tXCJdLFxyXG4gICAgaWZyYW1lT25seTogITAsXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL1xcXFxkKyg/Oi98JClcIlxyXG4gIH0sXHJcbiAgZG92ZXI6IHsgZG9tYWluczogW1wiZG92ZXIuY29tXCJdIH0sXHJcbiAgYWRvYmU6IHsgZG9tYWluczogW1wiY2FyZWVycy5hZG9iZS5jb21cIl0sIHBhdGhSZWdleDogXCJeL1teL10rL1teL10rL2FwcGx5XCIgfSxcclxuICB6b2hvcmVjcnVpdDoge1xyXG4gICAgZG9tYWluczogW1wiem9ob3JlY3J1aXQuY29tXCIsIFwiem9ob3JlY3J1aXQuY2FcIiwgXCJ6b2hvcmVjcnVpdC5ldVwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcInpvaG9yZWNydWl0LmNvbVwiLCBcInpvaG9yZWNydWl0LmNhXCIsIFwiem9ob3JlY3J1aXQuZXVcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL0NhcmVlcnMvLitcIlxyXG4gIH0sXHJcbiAgZ2VtOiB7IGRvbWFpbnM6IFtcImpvYnMuZ2VtLmNvbVwiXSwgcGF0aFJlZ2V4OiBcIl4vW1xcXFx3LV0rL1tcXFxcdy1dKy8/JFwiIH0sXHJcbiAgZ3VzdG86IHtcclxuICAgIGRvbWFpbnM6IFtcImpvYnMuZ3VzdG8uY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vcG9zdGluZ3MvW14vXSsoPzovYXBwbGljYW50cy9uZXcoPzovLiopPyk/Lz8kXCJcclxuICB9LFxyXG4gIGhpcmluZ3RoaW5nOiB7XHJcbiAgICBkb21haW5zOiBbXHJcbiAgICAgIFwiaGlyaW5ndGhpbmcuY29tXCIsXHJcbiAgICAgIFwib2FzaXNyZWNydWl0LmNvbVwiLFxyXG4gICAgICBcImVsZXZhdGUtYXRzLmNvbVwiLFxyXG4gICAgICBcInByaXNtaHItaGlyZS5jb21cIixcclxuICAgICAgXCJnbmFoaXJpbmcuY29tXCIsXHJcbiAgICAgIFwicmlwcGxpbmctYXRzLmNvbVwiXHJcbiAgICBdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vam9iL1xcXFxkKy9cIlxyXG4gIH0sXHJcbiAgaHVic3BvdDogeyBwYXR0ZXJuczogW1wiKjovL3d3dy5odWJzcG90LmNvbS9jYXJlZXJzL2pvYnMvKlwiXSB9LFxyXG4gIHBheWNvbW9ubGluZToge1xyXG4gICAgZG9tYWluczogW1wicGF5Y29tb25saW5lLmNvbVwiLCBcInBheWNvbW9ubGluZS5uZXRcIl0sXHJcbiAgICB1cmxSZWdleDpcclxuICAgICAgXCJeL3Y0L2F0cy93ZWJcXFxcLnBocC9wb3J0YWwvW14vXSsvKD86YXBwbGljYXRpb25zKD86Wy8/I10uKik/fGpvYnMvW14vPyNdKyg/Ols/I10uKik/KVwiXHJcbiAgfSxcclxuICB0ZWFtdGFpbG9yOiB7XHJcbiAgICBkb21haW5zOiBbXCJ0ZWFtdGFpbG9yLmNvbVwiLCBcImNhcmVlcnMuYmx1ZW9yYW5nZS5kaWdpdGFsXCIsIFwiY2FyZWVycy50b3RhbHBlcmZvcm0uY29tXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwidGVhbXRhaWxvci1jZG4uY29tXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcInRlYW10YWlsb3IuY29tXCIsXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzLy4rXCJcclxuICB9LFxyXG4gIGNhdHNvbmU6IHtcclxuICAgIGRvbWFpbnM6IFtcImNhdHNvbmUuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vY2FyZWVycy9bXi9dKy9qb2JzL1teL10rKD86L2FwcGx5KT8vPyRcIlxyXG4gIH0sXHJcbiAgbWV0YWNhcmVlcnM6IHtcclxuICAgIGRvbWFpbnM6IFtcIm1ldGFjYXJlZXJzLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL3Byb2ZpbGUvKGNyZWF0ZV9hcHBsaWNhdGlvbnxqb2JfZGV0YWlscykvW14vXStcIlxyXG4gIH0sXHJcbiAgeWNvbWJpbmF0b3I6IHsgZG9tYWluczogW1wid3d3Lnljb21iaW5hdG9yLmNvbVwiXSB9LFxyXG4gIHJpcHBsZWhpcmU6IHsgZG9tYWluczogW1wicmlwcGxlaGlyZS5jb21cIl0gfSxcclxuICBwZXJzb25pbzoge1xyXG4gICAgZG9tYWluczogW1wicGVyc29uaW8uZGVcIiwgXCJwZXJzb25pby5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2IvW14vPyNdKyg/Oi9hcHBseSk/Lz8kXCJcclxuICB9LFxyXG4gIGNhcmVlcnNwYWdlOiB7IGRvbWFpbnM6IFtcImNhcmVlcnMtcGFnZS5jb21cIl0gfSxcclxuICBjYXJlZXJwbHVnOiB7XHJcbiAgICBkb21haW5zOiBbXHJcbiAgICAgIFwiY2FyZWVycGx1Zy5jb21cIixcclxuICAgICAgXCJzZmFnZW50am9icy5jb21cIixcclxuICAgICAgXCJzZmFnZW50Y2FyZWVycy5jb21cIixcclxuICAgICAgXCJhcHNjYXJlZXJwb3J0YWwuY29tXCJcclxuICAgIF0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzL1xcXFxkKy9hcHBzL25ld1wiXHJcbiAgfSxcclxuICBjYXJlZXJzd2l0aHdheW1vOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMud2l0aHdheW1vLmNvbS9qb2JzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9qb2JzLyg/IXNlYXJjaCg/Oi98JCkpW14vXStcIlxyXG4gIH0sXHJcbiAgc3VjY2Vzc2ZhY3RvcnM6IHsgZG9tYWluczogW1wic3VjY2Vzc2ZhY3RvcnMuZXVcIiwgXCJzdWNjZXNzZmFjdG9ycy5jb21cIiwgXCJzYXBzZi5jb21cIl0gfSxcclxuICBjbGVhcmNvbXBhbnk6IHtcclxuICAgIGRvbWFpbnM6IFtcImNsZWFyY29tcGFueS5jb21cIl0sXHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouaHJtZGlyZWN0LmNvbS9lbXBsb3ltZW50L2pvYi1vcGVuaW5nLnBocCpcIl1cclxuICB9LFxyXG4gIGFzaGJ5OiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouYXNoYnlocS5jb20vKi8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiam9icy5hc2hieWhxLmNvbVwiLCBcImFzaGJ5X2ppZFwiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJhc2hieV9qaWRcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi9bXi9dKy9bMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXsxMn1cIlxyXG4gIH0sXHJcbiAgaXNvbHZlZDoge1xyXG4gICAgZG9tYWluczogW1wiaXNvbHZlZGhpcmUuY29tXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vKD86YXBwbHkvfGpvYnMvfGlmcmFtZS9tb2JpbGUvfGFjY291bnQvKVwiXHJcbiAgfSxcclxuICBqb2JkaXZhOiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5qb2JkaXZhLmNvbS9wb3J0YWwvKlwiXSB9LFxyXG4gIGludHVpdDoge1xyXG4gICAgZG9tYWluczogW1wiaW50dWl0LXF1aXouYXBwLmludHVpdC5jb21cIl0sXHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly9qb2JzLmludHVpdC5jb20vam9iLypcIixcclxuICAgICAgXCIqOi8vaW50dWl0LmF2YXR1cmUubmV0LyovZXh0ZXJuYWxDYXJlZXJzL0pvYkFwcGxpY2F0aW9uKlwiXHJcbiAgICBdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiaW50dWl0LXF1aXouYXBwLmludHVpdC5jb21cIl1cclxuICB9LFxyXG4gIGphY29iczoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9jYXJlZXJzLmphY29icy5jb20vZW5fVVMvY2FyZWVycy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIl4vZW5fVVMvY2FyZWVycy8oSm9iRGV0YWlsfFJlZ2lzdGVyfEFwcGxpY2F0aW9uRm9ybXxBcHBsaWNhdGlvblJldmlldykoPzovfCQpXCJcclxuICB9LFxyXG4gIHNtYXJ0cmVjcnVpdGVyczoge1xyXG4gICAgZG9tYWluczogW1wic21hcnRyLm1lXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vam9icy5zbWFydHJlY3J1aXRlcnMuY29tL29uZWNsaWNrLXVpL2NvbXBhbnkvKlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLnNtYXJ0cmVjcnVpdGVycy5jb20vKi8qXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHBoZW5vbToge1xyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwiQVBQTFlfZm9ybV9yZW5kZXJlci5qc1wiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJwaGVub21wZW9wbGUuY29tXCIsXHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly9qb2JzLmJzd2hlYWx0aC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy51dmFoZWFsdGgub3JnLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuZHVrZWhlYWx0aC5vcmcvKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vd3d3LmpvYnMuYWJib3R0LyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXNwZW5kZW50YWwuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuZml2ZWJlbG93LmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmZvdXJzZWFzb25zLmNvbS8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmtici5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vam9icy5rdWVobmUtbmFnZWwuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFzdGVyY2FyZC5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tY2FmZWUuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2pvYnMtY2VlLnB3Yy5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5yb2NoZS5jb20vKi9hcHBseSpcIixcclxuICAgICAgXCIqOi8vd3d3LnZjYWNhcmVlcnMuY29tLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMud2FzdGVjb25uZWN0aW9ucy5jb20vKi9hcHBseSpcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgY2lzY286IHsgcGF0dGVybnM6IFtcIio6Ly9jYXJlZXJzLmNpc2NvLmNvbS8qL2FwcGx5KlwiXSB9LFxyXG4gIHRlc2xhOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouam9icy50ZXNsYS5jb20vKlwiLCBcIio6Ly8qLnRlc2xhLmNvbS9jYXJlZXJzLypcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiL2FwcGx5XCJcclxuICB9LFxyXG4gIGFtYXpvbjogeyBwYXR0ZXJuczogW1wiKjovLyouYW1hem9uLmpvYnMvKlwiXSwgcGF0aFJlZ2V4OiBcIi9qb2JzL1tcXFxcdy1dKy9hcHBseVwiIH0sXHJcbiAgYW1hem9udW5pdmVyc2l0eTogeyBwYXR0ZXJuczogW1wiKjovLyouYW1hem9udW5pdmVyc2l0eS5qb2JzL3Byb2ZpbGUqXCJdIH0sXHJcbiAgdWJlcjoge1xyXG4gICAgZG9tYWluczogW1widWJlci5jb21cIl0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiXi8oPzooPzooPzpbXi9dKy8pezEsMn0pP2NhcmVlcnMvKD86YXBwbHkoPzovfCQpfGxpc3QvW14vPyNdKyl8KD86W14vXSsvKT9qb2JzL1teLz8jXSsvPyQpXCJcclxuICB9LFxyXG4gIHRpa3Rvazoge1xyXG4gICAgcGF0dGVybnM6IFtcclxuICAgICAgXCIqOi8vKi5saWZlYXR0aWt0b2suY29tL3Jlc3VtZSpcIixcclxuICAgICAgXCIqOi8vKi50aWt0b2t1c2RzLmNvbS8qL3Jlc3VtZSpcIixcclxuICAgICAgXCIqOi8vKi50aWt0b2t1c2RzLmNvbS8qL3Bvc2l0aW9uLyovZGV0YWlsKlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBieXRlZGFuY2U6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyouam9icy5ieXRlZGFuY2UuY29tL2VuL3Jlc3VtZSpcIixcclxuICAgICAgXCIqOi8vam9icy5ieXRlZGFuY2UuY29tLyovKi8qL2RldGFpbCpcIixcclxuICAgICAgXCIqOi8vam9icy5ieXRlZGFuY2UuY29tLyovKi8qL2FwcGx5KlwiLFxyXG4gICAgICBcIio6Ly9qb2JzLmJ5dGVkYW5jZS5jb20vKi8qL2FwcGxpZWQqXCIsXHJcbiAgICAgIFwiKjovL2pvaW5ieXRlZGFuY2UuY29tL3NlYXJjaC8qXCJcclxuICAgIF1cclxuICB9LFxyXG4gIGdvb2dsZToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9nb29nbGUuY29tL2Fib3V0L2NhcmVlcnMvKlwiLCBcIio6Ly8qLmdvb2dsZS5jb20vYWJvdXQvY2FyZWVycy8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OlxyXG4gICAgICBcIl4vYWJvdXQvY2FyZWVycy9hcHBsaWNhdGlvbnMoPzovKD86dS9cXFxcZCsvKT9hcHBseSg/Oi98JCl8L2pvYnMvcmVzdWx0cy9bXi8/I10rKVwiLFxyXG4gICAgdXJsUmVnZXg6IFwiXi9hYm91dC9jYXJlZXJzL2FwcGxpY2F0aW9ucy9qb2JzL3Jlc3VsdHMoPzpcXFxcP1teI10qKT8jLipbPyYjXWppZD1bXiYjXStcIlxyXG4gIH0sXHJcbiAgbGV2ZXI6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vam9icy5sZXZlci5jby8qLypcIiwgXCIqOi8vam9icy5ldS5sZXZlci5jby8qLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJsZXZlci5jb1wiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJMZXZlckFwcElkXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvW14vXSsoPzovYXBwbHkpPy8/JFwiXHJcbiAgfSxcclxuICBqb2J2aXRlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMuam9idml0ZS5jb20vKi9qb2IvKlwiLCBcIio6Ly9qb2JzLmpvYnZpdGUuY29tLyovYXBwbHkqXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiam9icy5qb2J2aXRlLmNvbVwiXSxcclxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJqb2J2aXRlaWZyYW1lXCJdXHJcbiAgfSxcclxuICBicmVlenk6IHsgcGF0dGVybnM6IFtcIio6Ly8qLmJyZWV6eS5oci9wLypcIiwgXCIqOi8vKi5icmVlenkuaHIvKi9hcHBseSpcIl0gfSxcclxuICB3b3JrYWJsZToge1xyXG4gICAgZG9tYWluczogW1wiY2FyZWVycy5hcmJvci1lZHVjYXRpb24uY29tXCJdLFxyXG4gICAgcGF0dGVybnM6IFtcIio6Ly9hcHBseS53b3JrYWJsZS5jb20vKlwiLCBcIio6Ly9qb2JzLndvcmthYmxlLmNvbS8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wid29ya2FibGUuY29tXCJdLFxyXG4gICAgcXVlcnlQYXJhbXM6IFtcInNlbGVjdGVkSm9iSWRcIl0sXHJcbiAgICBwYXRoUmVnZXg6IFwiXi8oPzpbXi9dKy9qL1teL10rKD86L2FwcGx5KT8vPyR8KD86W2Etel17Mn0vKT8oPzp2aWV3fGNvbXBhbnkpL1tcXFxcdy1dKylcIlxyXG4gIH0sXHJcbiAgZ29oaXJlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMuZ29oaXJlLmlvLyovKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImFwcC5nb2hpcmUuaW8vd2lkZ2V0L1wiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rLy4rLVxcXFxkKy8/JFwiXHJcbiAgfSxcclxuICBiYW1ib29ocjoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmJhbWJvb2hyLmNvbS9qb2JzKlwiLCBcIio6Ly8qLmJhbWJvb2hyLmNvbS9jYXJlZXJzKlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImJhbWJvb2hyLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OmpvYnN8Y2FyZWVycy9bXFxcXHctXSpcXFxcZClcIlxyXG4gIH0sXHJcbiAgYnJhc3NyaW5nOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouYnJhc3NyaW5nLmNvbS9UR25ld1VJLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJicmFzc3JpbmcuY29tXCJdLFxyXG4gICAgdXJsUmVnZXg6IFwiIyg/OkFwcGx5cGFnZXxqb2JEZXRhaWxzPSlcIlxyXG4gIH0sXHJcbiAgYWRwOiB7XHJcbiAgICBkb21haW5zOiBbXCJ3b3JrZm9yY2Vub3cuYWRwLmNvbVwiXSxcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vcmVjcnVpdGluZy5hZHAuY29tL3NyY2Nhci9wdWJsaWMvKlwiLCBcIio6Ly9teWpvYnMuYWRwLmNvbS8qL2N4LypcIl1cclxuICB9LFxyXG4gIG9yYWNsZWNsb3VkOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLm9yYWNsZWNsb3VkLmNvbS8qL0NhbmRpZGF0ZUV4cGVyaWVuY2UvKi9zaXRlcy8qL2pvYi8qXCIsXHJcbiAgICAgIFwiKjovLyoub3JhY2xlY2xvdWQuY29tLyovQ2FuZGlkYXRlRXhwZXJpZW5jZS8qL3NpdGVzLyovKi9wcmV2aWV3LypcIixcclxuICAgICAgXCIqOi8vKi8qL0NhbmRpZGF0ZUV4cGVyaWVuY2UvKi9zaXRlcy8qL2pvYi8qXCIsXHJcbiAgICAgIFwiKjovLyovKi9DYW5kaWRhdGVFeHBlcmllbmNlLyovc2l0ZXMvKi8qL3ByZXZpZXcvKlwiLFxyXG4gICAgICBcIio6Ly8qLyovc2l0ZXMvKi9qb2JzL3ByZXZpZXcvKi9hcHBseS8qXCJcclxuICAgIF0sXHJcbiAgICBwYXRoUmVnZXg6XHJcbiAgICAgIFwiKD86L0NhbmRpZGF0ZUV4cGVyaWVuY2UvLiovc2l0ZXMvW14vXSsvam9iL1teL10rKD86L2FwcGx5KD86Ly4qKT8pPy8/JHwvYXBwbHkpXCJcclxuICB9LFxyXG4gIHVsdGlwcm86IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jb20vKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5RGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY29tLyovSm9iQm9hcmQvKi9PcHBvcnR1bml0eUFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY29tLyovSm9iQm9hcmQvKi9BY2NvdW50L1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY2EvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5RGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLnVsdGlwcm8uY2EvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5QXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoudWx0aXByby5jYS8qL0pvYkJvYXJkLyovQWNjb3VudC9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vKi5yZWMucHJvLnVrZy5uZXQvKi9Kb2JCb2FyZC8qL09wcG9ydHVuaXR5RGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly8qLnJlYy5wcm8udWtnLm5ldC8qL0pvYkJvYXJkLyovT3Bwb3J0dW5pdHlBcHBseSpcIixcclxuICAgICAgXCIqOi8vKi5yZWMucHJvLnVrZy5uZXQvKi9Kb2JCb2FyZC8qL0FjY291bnQvUmVnaXN0ZXIqXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHJpcHBsaW5nOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLnJpcHBsaW5nLWF0cy5jb20vam9iLyovYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyoucmlwcGxpbmctYXRzLmNvbS9qb2JzL2VvcF9zdXJ2ZXkvKlwiXHJcbiAgICBdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiYXRzLnJpcHBsaW5nLmNvbVwiXVxyXG4gIH0sXHJcbiAgcmlwcGxpbmdIb3N0ZWQ6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vYXRzLnJpcHBsaW5nLmNvbS8qL2pvYnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL1teL10rL2pvYnMvW14vXSsoPzovYXBwbHkoPzovLiopPyk/Lz8kXCJcclxuICB9LFxyXG4gIGRheWZvcmNlOiB7XHJcbiAgICBkb21haW5zOiBbXCJqb2JzLmRheWZvcmNlaGNtLmNvbVwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeLyg/OlteL10rLykram9icy9bXi9dKyg/Oi9hcHBseSg/Oi8uKik/KT8vPyRcIlxyXG4gIH0sXHJcbiAgZGF5Zm9yY2VJZGVudGl0eToge1xyXG4gICAgcGF0dGVybnM6IFtcImh0dHBzOi8vZGZpZC5kYXlmb3JjZWhjbS5jb20vZ2xvYmFsaWRlbnRpdHkvYWNjb3VudC8qXCJdLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vZ2xvYmFsaWRlbnRpdHkvYWNjb3VudC8oPzpyZWdpc3Rlcnxsb2dpbikvPyRcIlxyXG4gIH0sXHJcbiAgdGFsZW86IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovYXBwbGljYXRpb24uanNzKlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2Zsb3cuanNmKlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2pvYmFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLnRhbGVvLm5ldC8qL2F0cy9jYXJlZXJzLypcIixcclxuICAgICAgXCIqOi8vKi50YWxlby5uZXQvY2FyZWVyc2VjdGlvbi8qL2pvYmRldGFpbC5mdGwqXCIsXHJcbiAgICAgIFwiKjovLyoudGFsZW8ubmV0LyovaHRtbFJlc291cmNlVmlld2VyLmpzcypcIixcclxuICAgICAgXCIqOi8vKi5idXJuc21jZC5jb20vYXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyouYnVybnNtY2QuY29tL2NhcmVlcnNlY3Rpb24vYXBwbGljYXRpb24uanNzKlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2Zsb3cuanNmKlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2pvYmFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly8qLmJ1cm5zbWNkLmNvbS9jYXJlZXJzZWN0aW9uL2h0bWxSZXNvdXJjZVZpZXdlci5qc3MqXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9hcHBsaWNhdGlvbi5qc3MqXCIsXHJcbiAgICAgIFwiKjovL3RhbGVudGFjcXVpc2l0aW9uLjNkcy5jb20vKi9mbG93LmpzZipcIixcclxuICAgICAgXCIqOi8vdGFsZW50YWNxdWlzaXRpb24uM2RzLmNvbS8qL2pvYmFwcGx5KlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovYXRzL2NhcmVlcnMvKlwiLFxyXG4gICAgICBcIio6Ly90YWxlbnRhY3F1aXNpdGlvbi4zZHMuY29tLyovaHRtbFJlc291cmNlVmlld2VyLmpzcypcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgZWlnaHRmb2xkOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovLyouZWlnaHRmb2xkLmFpL2NhcmVlcnMqXCIsIFwiKjovLyouZWlnaHRmb2xkLmFpL2NhcmVlcmh1Yi8qXCJdLFxyXG4gICAgaWZyYW1lRG9tYWluczogW1wiZWlnaHRmb2xkLmFpXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwiZWlnaHRmb2xkXCIsXHJcbiAgICBwYWdlU291cmNlRG9tYWluOiBcImVpZ2h0Zm9sZC5haVwiLFxyXG4gICAgdXJsUmVnZXg6XHJcbiAgICAgIFwiKD86Xi9jYXJlZXJodWIvZXhwbG9yZS9qb2JzLyg/IWFwcGx5Lz8oPzpbPyNdfCQpKVteLz8jXSsvPyg/Ols/I10uKik/JHxeL2NhcmVlcmh1Yi9leHBsb3JlL2pvYnMvYXBwbHkvP1xcXFw/KD89W14jXSpcXFxcYnBpZD1bXiYjXSspW14jXSooPzojLiopPyR8Xi9jYXJlZXJzKD86Lyg/OmpvYi9bXi8/I10rKD86L2FwcGx5KT8oPzpbLz8jXXwkKXxhcHBseSg/OlsvPyNdfCQpKXxcXFxcPyg/PSg/OnBpZD1bXiYjXSt8W14jXSomcGlkPVteJiNdKykpW14jXSooPzojLiopPyQpKVwiXHJcbiAgfSxcclxuICBqYXp6aHI6IHsgcGF0dGVybnM6IFtcIio6Ly8qLmFwcGx5dG9qb2IuY29tL2FwcGx5LypcIl0gfSxcclxuICB0cmFrc3Rhcjoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmhpcmUudHJha3N0YXIuY29tL2pvYnMvKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2pvYnMvW14vXSsvPyRcIlxyXG4gIH0sXHJcbiAgZnJlc2h0ZWFtOiB7IHBhdHRlcm5zOiBbXCIqOi8vKi5mcmVzaHRlYW0uY29tL2pvYnMvKlwiXSB9LFxyXG4gIHBpbnBvaW50aHE6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5waW5wb2ludGhxLmNvbS8qL3Bvc3RpbmdzLypcIiwgXCIqOi8vKi5waW5wb2ludGhxLmNvbS9wb3N0aW5ncy8qXCJdLFxyXG4gICAgcGFnZVNvdXJjZUtleXdvcmQ6IFwicGlucG9pbnRocVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJwaW5wb2ludGhxLmNvbVwiXHJcbiAgfSxcclxuICByZWNydWl0ZWU6IHtcclxuICAgIHBhdHRlcm5zOiBbXCIqOi8vKi5yZWNydWl0ZWUuY29tLyovKlwiXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcInJlY3J1aXRlZVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJyZWNydWl0ZWUuY29tXCJcclxuICB9LFxyXG4gIHRyaW5ldGhpcmU6IHsgcGF0dGVybnM6IFtcIio6Ly9hcHAudHJpbmV0aGlyZS5jb20vY29tcGFuaWVzLyovam9icy8qXCJdIH0sXHJcbiAgam9ic2NvcmU6IHtcclxuICAgIHBhdHRlcm5zOiBbXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuam9ic2NvcmUuY29tL2FwcGx5X2Zsb3cvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmpvYnNjb3JlLmNvbS9jYXJlZXJzLyovam9icy8qXCJcclxuICAgIF0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJqb2JzY29yZS5jb21cIl1cclxuICB9LFxyXG4gIHBheWxvY2l0eToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLnBheWxvY2l0eS5jb20vcmVjcnVpdGluZy8qXCIsIFwiKjovLyoucGF5bG9jaXR5LmNvbS9SZWNydWl0aW5nLypcIl0sXHJcbiAgICBpZnJhbWVEb21haW5zOiBbXCJwYXlsb2NpdHkuY29tXCJdLFxyXG4gICAgdXJsUmVnZXg6IFwiXi9bUnJdZWNydWl0aW5nL1tKal1vYnMvKD86W0FhXXBwbHkvfFtEZF1ldGFpbHMvW14vPyNdKyg/OlsvPyNdfCQpKVwiXHJcbiAgfSxcclxuICBhdmF0dXJlOiB7XHJcbiAgICBwYXR0ZXJuczogW1xyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC8qL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0L0xpbmtlZEluQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovTGlua2VkSW5BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9Zb3VySW5mb3JtYXRpb24qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvY2FtcHVzQXBwbHkqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9HZW5lcmFsSW5mbypcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vKi5hdmF0dXJlLm5ldC9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvKi9FeHRlcm5hbC9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovLyouYXZhdHVyZS5uZXQvY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly8qLmF2YXR1cmUubmV0LyovY2FyZWVycy9Mb2NhdGlvbkFuZFByb2ZpbGUvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmFyY2IuY29tL2NhcmVlcnNtYXJrZXRwbGFjZS9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuYXJjYi5jb20vY2FyZWVyc21hcmtldHBsYWNlL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5hcmNiLmNvbS9jYXJlZXJzbWFya2V0cGxhY2UvQXBwbGljYXRpb25Eb3RLbm9ja2VkT3V0V2l6YXJkKlwiLFxyXG4gICAgICBcIio6Ly9hcHBseS5kZWxvaXR0ZS5jb20vKi9jYXJlZXJzLypcIixcclxuICAgICAgXCIqOi8vYXBwbHkuZGVsb2l0dGUuY29tLyovRXh0ZXJuYWwvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUmV2aWV3KlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmNicmUuY29tLyovY2FyZWVycy9SZWdpc3RlcipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvSW52aXRlVG9BcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuY2JyZS5jb20vKi9jYXJlZXJzL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL2NhcmVlcnMvTG9jYXRpb25BbmRQcm9maWxlLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5jYnJlLmNvbS8qL0V4dGVybmFsL0pvYkRldGFpbCpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbk1ldGhvZHMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uUXVlc3Rpb25zKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5tYW50ZWNoLmNvbS8qL2NhcmVlcnMvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0ludml0ZVRvQXBwbHkqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLm1hbnRlY2guY29tLyovY2FyZWVycy9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0pvYkRldGFpbC8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9jYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMubWFudGVjaC5jb20vKi9FeHRlcm5hbC9Kb2JEZXRhaWwqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLmlibS5jb20vKi9jYXJlZXJzL0FwcGxpY2F0aW9uTWV0aG9kcypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9Kb2JBcHBsaWNhdGlvbipcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy5pYm0uY29tLyovY2FyZWVycy9BcHBsaWNhdGlvbkZvcm0qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvQXBwbGljYXRpb25SZXZpZXcqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvUmVnaXN0ZXIqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvR2VuZXJhbEluZm8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMuaWJtLmNvbS8qL2NhcmVlcnMvWW91ckluZm9ybWF0aW9uKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25Gb3JtKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25NZXRob2RzKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvQXBwbGljYXRpb25RdWVzdGlvbnMqXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL1RRTGV4dGVybmFsY2FyZWVycy9BcHBsaWNhdGlvblJldmlldypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL1JlZ2lzdGVyKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvSW52aXRlVG9BcHBseSpcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0dlbmVyYWxJbmZvKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvSm9iRGV0YWlsKlwiLFxyXG4gICAgICBcIio6Ly9jYXJlZXJzLnRxbC5jb20vKi9UUUxleHRlcm5hbGNhcmVlcnMvSm9iRGV0YWlsLypcIixcclxuICAgICAgXCIqOi8vY2FyZWVycy50cWwuY29tLyovVFFMZXh0ZXJuYWxjYXJlZXJzL0xvY2F0aW9uQW5kUHJvZmlsZS8qXCIsXHJcbiAgICAgIFwiKjovL2NhcmVlcnMudHFsLmNvbS8qL0V4dGVybmFsL0pvYkRldGFpbCpcIlxyXG4gICAgXSxcclxuICAgIHBhZ2VTb3VyY2VLZXl3b3JkOiBcImF2YXR1cmVcIixcclxuICAgIHBhZ2VTb3VyY2VEb21haW46IFwiYXZhdHVyZS5uZXRcIlxyXG4gIH0sXHJcbiAgb2t0YToge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly93d3cub2t0YS5jb20vY29tcGFueS9jYXJlZXJzLyovKlwiXSxcclxuICAgIHBhdGhSZWdleDogXCJeL2NvbXBhbnkvY2FyZWVycy8oPyFqb2ItbGlzdGluZyg/Oi98JCkpXCJcclxuICB9LFxyXG4gIGNvbWVldDoge1xyXG4gICAgcGF0dGVybnM6IFtcIio6Ly8qLmNvbWVldC5jb20vam9icy8qLyovKi8qXCIsIFwiKjovLyouY29tZWV0LmNvL2pvYnMvKi8qL2FwcGx5KlwiXSxcclxuICAgIGlmcmFtZURvbWFpbnM6IFtcImNvbWVldC5jb1wiLCBcImNvbWVldC5jb21cIl1cclxuICB9LFxyXG4gIGFwcGxlOiB7XHJcbiAgICBwYXR0ZXJuczogW1wiKjovL2pvYnMuYXBwbGUuY29tLyovZGV0YWlscy8qXCIsIFwiKjovL2pvYnMuYXBwbGUuY29tL2FwcC8qL2FwcGx5LypcIl1cclxuICB9LFxyXG4gIHBvbHltZXI6IHsgcGF0dGVybnM6IFtcIio6Ly9qb2JzLnBvbHltZXIuY28vKi8qXCJdIH0sXHJcbiAgcmVjcnVpdGVyZmxvdzoge1xyXG4gICAgZG9tYWluczogW1wicmVjcnVpdGVyZmxvdy5jb21cIl0sXHJcbiAgICBwYWdlU291cmNlS2V5d29yZDogXCJyZWNydWl0ZXJmbG93LmNvbVwiLFxyXG4gICAgcGFnZVNvdXJjZURvbWFpbjogXCJyZWNydWl0ZXJmbG93LmNvbVwiLFxyXG4gICAgcGF0aFJlZ2V4OiBcIl4vW14vXSsvam9icy9bXi8/I10rXCJcclxuICB9LFxyXG4gIGNhcmVlcnN0b2FzdHRhYjogeyBwYXR0ZXJuczogW1wiKjovL2NhcmVlcnMudG9hc3R0YWIuY29tL2pvYnMqXCJdIH1cclxufVxyXG4iLCIvKiogU2hhcmVkIGZpZWxkIHR5cGVzIGZvciB0aGUgY2xlYW4tVFMgY3Jhd2xlciAobWlycm9ycyBlbmdpbmUgRklFTERfVFlQRSBzdWJzZXQpLiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEUgPSB7XHJcbiAgVEVYVDogXCJ0ZXh0XCIsXHJcbiAgVEVYVEFSRUE6IFwidGV4dGFyZWFcIixcclxuICBTRUxFQ1Q6IFwic2VsZWN0XCIsXHJcbiAgQ0hFQ0tCT1g6IFwiY2hlY2tib3hcIixcclxuICBSQURJTzogXCJyYWRpb1wiLFxyXG4gIFJBRElPR1JPVVA6IFwicmFkaW9ncm91cFwiLFxyXG4gIERBVEU6IFwiZGF0ZVwiLFxyXG4gIEZJTEU6IFwiZmlsZVwiXHJcbn0gYXMgY29uc3RcclxuXHJcbmV4cG9ydCB0eXBlIEZpZWxkVHlwZSA9ICh0eXBlb2YgRklFTERfVFlQRSlba2V5b2YgdHlwZW9mIEZJRUxEX1RZUEVdXHJcblxyXG5leHBvcnQgdHlwZSBEaXNjb3ZlcmVkRmllbGQgPSB7XHJcbiAgdHlwZTogRmllbGRUeXBlIHwgXCJ0ZXh0XCIgfCBcInNlbGVjdFwiIHwgXCJ0ZXh0YXJlYVwiIHwgXCJyYWRpb1wiIHwgXCJjaGVja2JveFwiXHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIHJlcXVpcmVkOiBib29sZWFuXHJcbiAgb3B0aW9ucz86IHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEF0c1NpdGVJZCA9XHJcbiAgfCBcInBlcnNvbmlvXCJcclxuICB8IFwiZ3JlZW5ob3VzZVwiXHJcbiAgfCBcImxldmVyXCJcclxuICB8IFwibXl3b3JrZGF5XCJcclxuICB8IFwiYXNoYnlcIlxyXG4gIHwgXCJvcmFjbGVjbG91ZFwiXHJcbiAgfCBcInBheWNvbW9ubGluZS12M1wiXHJcbiAgfCBcImdlbmVyaWNcIlxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY292ZXItZmFjdG9yeS5iZDVjMDU5ZC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);