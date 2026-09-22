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
})({"a6f7O":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\greenhouse.js",
    "bundleId": "042c649c03e31114",
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
var j = z(require("7f49a9fa030bdbde"));
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

},{"7f49a9fa030bdbde":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"chOL5":[function(require,module,exports) {
/**
 * Parcel module id: jlOd6
 * Resolved path: src/contents/sites/greenhouse.js
 * Dependencies:
 *   ../base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ./country -> 8dguL  =>  src/contents/sites/greenhouse/country.js
 *   ./operations -> 1DkIp  =>  src/contents/sites/greenhouse/operations.js
 *   ./race -> cQ4Jg  =>  src/contents/sites/greenhouse/race.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ~contents/sites/greenhouse/answer -> 3lHOC  =>  src/contents/sites/greenhouse/answer.js
 *   ~contents/sites/greenhouse/education-operation -> 1wqHT  =>  src/contents/sites/greenhouse/education-operation.js
 *   ~contents/sites/greenhouse/location-operation -> 3FZ4r  =>  src/contents/sites/greenhouse/location-operation.js
 *   ~contents/sites/greenhouse/resolve-tracking -> 6Nc4c  =>  src/contents/sites/greenhouse/resolve-tracking.js
 *   ~contents/sites/greenhouse/rules -> jly3y  =>  src/contents/sites/greenhouse/rules.js
 *   ~contents/sites/greenhouse/snapshot-alignment -> ewjev  =>  src/contents/sites/greenhouse/snapshot-alignment.js
 *   ~contents/sites/greenhouse/validation-tracking -> aVQsr  =>  src/contents/sites/greenhouse/validation-tracking.js
 *   ~contents/sites/profile-location-original-answer -> 8kwJN  =>  src/contents/sites/profile-location-original-answer.js
 *   ~contents/sites/runtime-validation-tracking -> 8W2JT  =>  src/contents/sites/runtime-validation-tracking.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Greenhouse", ()=>O);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/answer"), a = e("~contents/methods/dom"), l = e("~contents/sites/education-item-trace"), s = e("~contents/sites/greenhouse/answer"), u = e("~contents/sites/greenhouse/education-operation"), c = e("~contents/sites/greenhouse/location-operation"), d = e("~contents/sites/greenhouse/resolve-tracking"), f = e("~contents/sites/greenhouse/rules"), p = e("~contents/sites/greenhouse/snapshot-alignment"), m = e("~contents/sites/greenhouse/validation-tracking"), h = e("~contents/sites/profile-location-original-answer"), g = e("~contents/sites/runtime-validation-tracking"), b = e("~core/dom"), y = e("~core/enums"), v = e("~core/xpath"), w = e("~store/autofillInfo"), S = e("../base-filler"), E = e("./country"), x = e("./operations"), C = e("./race");
function A(e1) {
    return "string" == typeof e1 ? e1.trim() : "";
}
_c = A;
function k(e1) {
    return String(e1 ?? "").trim().replace(/\*+$/, "").trim().toLowerCase().replace(/\s+/g, " ");
}
function T(e1) {
    return A(e1?.profileData?.greenhouseLocation ?? e1?.profile_data?.greenhouseLocation);
}
_c1 = T;
function F(e1) {
    if (Array.isArray(e1)) {
        for (let t of e1){
            let e1 = A(t);
            if (e1) return e1;
        }
        return "";
    }
    return A(e1);
}
_c2 = F;
function I(e1, t) {
    let r1 = (0, h.getProfileLocationOriginalAnswer)(e1);
    if (r1.value) return r1;
    let n = [
        t.label,
        "Location (City)",
        "Location / City",
        "Location",
        "City",
        "city"
    ], o = new Set(n.map((e1)=>k(e1)).filter(Boolean)), i = e1?.regular ?? {};
    for (let e1 of n){
        if (!Object.prototype.hasOwnProperty.call(i, e1)) continue;
        let t = F(i[e1]);
        if (t) return {
            value: t,
            source: `regular.${e1}`
        };
    }
    for (let [e1, t] of Object.entries(i)){
        if (!o.has(k(e1))) continue;
        let r1 = F(t);
        if (r1) return {
            value: r1,
            source: `regular.${e1}`
        };
    }
    for (let t of e1?.fillDataList ?? []){
        let e1 = t?.name;
        if (!o.has(k(e1))) continue;
        let r1 = F(t?.value);
        if (r1) return {
            value: r1,
            source: `fillDataList.${e1}`
        };
    }
    return {
        value: "",
        source: ""
    };
}
_c3 = I;
function j(e1) {
    let t = new Set([
        "Phone Country Code",
        "Country Phone Code",
        "Country Code",
        "phoneCountryCode",
        "phone_country_code"
    ].map((e1)=>k(e1))), r1 = e1?.regular ?? {};
    for (let [e1, n] of Object.entries(r1)){
        if (!t.has(k(e1))) continue;
        let r1 = F(n);
        if (r1) return r1;
    }
    for (let r1 of e1?.fillDataList ?? []){
        if (!t.has(k(r1?.name))) continue;
        let e1 = F(r1?.value);
        if (e1) return e1;
    }
    return "";
}
function D(e1, t) {
    console.info(`[Greenhouse][Location] ${e1}`, t);
}
_c4 = D;
function P(e1) {
    let t = e1?.search_request_schema?.params?.find?.((e1)=>e1?.name === "api_key");
    return !!A(t?.default_value);
}
_c5 = P;
function _(e1) {
    return e1 ? e1.matches?.("#candidate-location, input#candidate-location") ? e1 : e1.querySelector?.("#candidate-location, input#candidate-location") : null;
}
function L(e1) {
    let t = e1.$input, r1 = _(t);
    return r1 ? r1.closest(".select__container, .select") ?? t : t?.querySelector?.(".select__control") ? t : null;
}
_c6 = L;
function R(e1) {
    if (e1.type !== y.FIELD_TYPE.SEARCH) return !1;
    let t = k(e1.label);
    return "location" === t || "location (city)" === t || "location / city" === t || !!_(e1.$input);
}
_c7 = R;
class O extends S.BaseFiller {
    constructor(){
        super(), this.cachedRules = [], this.educationResolvePrefetchTaskMapPromise = null, this.educationResolveTrackingRecords = [], this.runtimeValidationTrackingData = {}, this.lastAutofillSnapshot = {}, this.lastAdditionalAutofillData = {}, this.lastEducationRules = [], this.runtimeValidationRetryResults = [], this.educationTraceRunId = null, this.locationRuntimeValidationContext = null, this.initialCoverLetterObserver = null, this.currentRunCountryCommitted = !1, this.formatAnswer = s.formatAnswer, this.scheduleInitialIframeCoverLetterCheck();
    }
    scheduleInitialIframeCoverLetterCheck() {
        if ("undefined" == typeof window || window.top === window.self) return;
        let e1 = ()=>{
            this.checkCoverLetter();
        }, t = [
            500,
            1500,
            3e3,
            6e3,
            1e4
        ];
        t.forEach((t)=>{
            window.setTimeout(e1, t);
        }), "undefined" != typeof MutationObserver && (this.initialCoverLetterObserver = new MutationObserver(e1), document.documentElement && this.initialCoverLetterObserver.observe(document.documentElement, {
            childList: !0,
            subtree: !0
        }), window.setTimeout(()=>{
            this.initialCoverLetterObserver?.disconnect(), this.initialCoverLetterObserver = null;
        }, 1e4));
    }
    getFieldHandlers() {
        return {
            [y.FIELD_TYPE.TEXT]: {
                handler: (e1, t)=>{
                    let r1 = e1.$input;
                    if (r1?.classList.contains("iti__search-input")) {
                        let e1 = r1.closest(".iti");
                        if (e1) {
                            let t = e1.querySelector("input[type='tel'], input:not(.iti__search-input)");
                            t && (r1 = t);
                        }
                    }
                    let n = e1.label.toLowerCase().replace(/\s+/g, " ").trim(), o = /\bdate\b/.test(n);
                    return o ? (0, x.fillTextField)(e1, t, r1) : (0, a.fillInputTextField)(r1, t);
                },
                options: {
                    expectArray: !0
                }
            },
            [y.FIELD_TYPE.SELECT]: {
                handler: (e1, t)=>(0, x.fillSelectField)(e1, Array.isArray(t) ? t[0] : t),
                options: {
                    expectArray: !1
                }
            },
            [y.FIELD_TYPE.SEARCH]: {
                handler: (e1, t)=>(0, x.fillAutocompleteField)(e1, (0, i.buildAutocompleteAnswerCandidates)(e1.label, t)),
                options: {
                    expectArray: !0
                }
            },
            [y.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, a.fillCheckBoxesField)(e1, t),
                options: {
                    expectArray: !0
                }
            }
        };
    }
    async checkCoverLetter() {
        let e1 = (0, x.getGreenhouseCoverLetterInput)(), t = "";
        e1 && (t = (0, x.isGreenhouseCoverLetterRequired)(e1) ? "required" : "optional"), (0, a.postCoverLetterStatus)(t);
    }
    getSiteName() {
        return "greenhouse";
    }
    async extractFormRules() {
        return await (0, f.getRules)();
    }
    async runPreFillForm() {
        this.currentRunCountryCommitted = !1;
        let e1 = await (0, E.runGreenhouseCountryPrefill)({
            preFillForm: async ()=>{
                this.taskQueue.add(x.reinitializeEducationAndEmployment), await this.taskQueue.run();
            },
            fetchAutofillInfo: ()=>(0, w.useAutofillInfoStore).getState().fetchAutofillInfo(),
            fillCountry: (e1)=>(0, E.fillGreenhouseGeographicCountry)(e1)
        });
        this.currentRunCountryCommitted = e1.committed;
    }
    async fillRegularFields(e1) {
        this.taskQueue.add(async ()=>{
            await (0, x.fillConsentCheckbox)();
        }), await this.taskQueue.run();
        let t = (e1)=>Array.isArray(e1) ? e1[0] : e1, r1 = (e1)=>String(t(e1) ?? "").trim().toLowerCase(), n = this.answer.fillDataList ?? [], o = T(this.answer), a = (0, c.extractGreenhouseLocationControlConfig)(), l = new Map, s = new Set;
        for (let t of e1)l.set(t.label, (l.get(t.label) || 0) + 1), (t.type === y.FIELD_TYPE.SELECT || t.type === y.FIELD_TYPE.SEARCH) && s.add(t.label);
        let u = new Set;
        for (let [e1, t] of l)t > 1 && s.has(e1) && u.add(e1);
        let d = new Map;
        for (let e1 of n)if (e1?.name && u.has(e1.name)) {
            let t = d.get(e1.name) ?? [];
            t.push(e1.value), d.set(e1.name, t);
        }
        let f = [];
        for (let n of e1){
            let e1 = this.operationConfig[n.type];
            if (e1) {
                if ((0, C.isGreenhouseConditionalRaceRule)(n)) {
                    f.push(async ()=>{
                        (0, C.findGreenhouseRaceContainer)() && (this.progressTracker.updateFieldRequiredStatus(n), await e1(n, this.answer.regular));
                    });
                    continue;
                }
                if (R(n)) {
                    f.push(async ()=>{
                        let e1 = L(n);
                        if (o) {
                            D("direct fill start", {
                                label: n.label,
                                source: "profileData.greenhouseLocation",
                                location: o
                            });
                            let t = !!e1 && await (0, x.fillAutocompleteField)({
                                ...n,
                                $input: e1
                            }, o, {
                                allowPartialMatch: !1
                            });
                            D("fill result", {
                                label: n.label,
                                source: "profileData.greenhouseLocation",
                                resolvedLocation: o,
                                filled: t
                            }), this.captureLocationRuntimeValidation({
                                label: n.label,
                                sourceValue: o,
                                attemptedCandidates: [
                                    o
                                ]
                            }), t ? this.progressTracker.updateFilledProgress(n.label) : this.progressTracker.updateMissedProgress(n.label);
                            return;
                        }
                        let t = I(this.answer, n);
                        if (!t.value) {
                            D("skip", {
                                label: n.label,
                                reason: "empty profileData.greenhouseLocation and city"
                            }), this.progressTracker.updateMissedProgress(n.label);
                            return;
                        }
                        let r1 = (0, c.buildGreenhouseLocationOperation)({
                            currentUrl: this.getCurrentPageUrl(),
                            originalAnswer: t.value,
                            locationControlConfig: a
                        });
                        D("resolve start", {
                            label: n.label,
                            source: t.source,
                            originalAnswer: t.value,
                            searchUrl: r1.search_request_schema.url,
                            hasApiKey: P(r1)
                        });
                        let i = await this.resolveEducationOperation(r1), l = (0, c.getGreenhouseResolvedLocationValue)(i), s = l ? [
                            l
                        ] : [];
                        if (D("resolve result", {
                            label: n.label,
                            source: t.source,
                            action: i?.result?.action,
                            selectedValues: i?.result?.selected_values ?? [],
                            resolvedLocation: l
                        }), !l) {
                            D("fill result", {
                                label: n.label,
                                source: t.source,
                                resolvedLocation: l,
                                filled: !1,
                                reason: "empty resolved location"
                            }), this.captureLocationRuntimeValidation({
                                label: n.label,
                                sourceValue: t.value,
                                resolveValue: l,
                                attemptedCandidates: s
                            }), this.progressTracker.updateMissedProgress(n.label);
                            return;
                        }
                        let u = !!e1 && await (0, x.fillAutocompleteField)({
                            ...n,
                            $input: e1
                        }, l, {
                            allowPartialMatch: !1
                        });
                        D("fill result", {
                            label: n.label,
                            source: t.source,
                            resolvedLocation: l,
                            filled: u
                        }), this.captureLocationRuntimeValidation({
                            label: n.label,
                            sourceValue: t.value,
                            resolveValue: l,
                            attemptedCandidates: s
                        }), u ? this.progressTracker.updateFilledProgress(n.label) : this.progressTracker.updateMissedProgress(n.label);
                    });
                    continue;
                }
                u.has(n.label) && (n.type === y.FIELD_TYPE.SELECT || n.type === y.FIELD_TYPE.SEARCH) ? f.push(async ()=>{
                    let o = d.get(n.label) ?? [], a = o.findIndex((e1)=>(n.options ?? []).some((t)=>r1(t) === r1(e1)));
                    if (a >= 0) {
                        let e1 = t(o.splice(a, 1)[0]), r1 = !1;
                        (r1 = n.type === y.FIELD_TYPE.SELECT ? await (0, x.fillSelectField)(n, e1) : await (0, x.fillAutocompleteField)(n, (0, i.buildAutocompleteAnswerCandidates)(n.label, e1))) ? this.progressTracker.updateFilledProgress(n.label) : this.progressTracker.updateMissedProgress(n.label);
                    } else await e1(n, this.answer.regular);
                }) : f.push(async ()=>{
                    await e1(n, this.answer.regular);
                });
            }
        }
        for (let e1 of f)this.taskQueue.add(e1);
        await this.taskQueue.run();
    }
    async fillEducationAndEmployment(e1) {
        let t = "undefined" != typeof window && window.location?.hostname?.startsWith("job-boards.");
        await (0, x.addEducationSection)(this.answer.education.length);
        let r1 = t ? await (0, f.getEduRule)(!1, !1) : (0, f.getEducationRules)();
        this.lastEducationRules = r1, (0, b.setSectionResultFocusRules)("education", r1);
        let n = (0, i.getEducationOperations)(r1, this.answer.education, this.operationConfig, (e1, t, r1)=>this.applyEducationResolvePrefetchForRule(e1.label, t, r1), {
            onCompleted: ()=>{
                this.answer.education.length > 0 && this.progressTracker.updateFilledProgress("Education");
            },
            onSkipped: ()=>{
                this.progressTracker.updateMissedProgress("Education");
            },
            onSectionResultChanged: this.progressTracker.updateSectionResult
        }, {
            fillReadyTransformedFieldsFirst: !0
        });
        for (let e1 of n)this.taskQueue.add(e1);
        await this.taskQueue.run(), await (0, x.addEmploymentSection)(this.answer.workExperience.length);
        let o = t ? await (0, f.getEmploymentRule)(!1, !1) : (0, f.getExperienceRules)();
        (0, b.setSectionResultFocusRules)("employment", o);
        let a = (0, i.getEmploymentOperations)(o, this.answer.workExperience, this.operationConfig, void 0, {
            onCompleted: ()=>{
                this.answer.workExperience.length > 0 && this.progressTracker.updateFilledProgress("Employment");
            },
            onSkipped: ()=>{
                this.progressTracker.updateMissedProgress("Employment");
            },
            onSectionResultChanged: this.progressTracker.updateSectionResult
        });
        for (let e1 of a)this.taskQueue.add(e1);
        await this.taskQueue.run(), await (0, x.fillCurrentEmploymentCheckboxes)(this.answer.workExperience), this.taskQueue.add(async ()=>{
            await (0, x.fillCountryFieldFirstOption)(this.answer.country, j(this.answer));
        }), await this.taskQueue.run();
    }
    async executeSiteSpecificSteps(e1) {
        await this.bindSubmitButtonTracking(e1), this.taskQueue.add(async ()=>{
            await (0, x.fillAcknowledgeCheckbox)(), await (0, x.fillNestedAcknowledgeCheckbox)();
        }), await this.handleResumeUpload(), this.coverLetter?.coverLetterId && this.taskQueue.add(async ()=>{
            await (0, x.uploadCoverLetter)(this.coverLetter, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), await this.taskQueue.run();
    }
    getSubmitButtonSelector() {
        return './/*[@id="submit_app" or text()="Submit application"]';
    }
    getSubmitSuccessSelectors() {
        return [
            './/div[@class="confirmation"]/div[@class="confirmation__content"]',
            './/h2[contains(@class, "rich-text__title") and contains(text(), "We got your application")]'
        ];
    }
    async getAutofillSnapshot(e1) {
        let t = "undefined" != typeof window && window.location?.hostname?.startsWith("job-boards."), r1 = await (0, f.getFormSnapshot)(e1, t);
        return this.lastAutofillSnapshot = r1, r1;
    }
    async getSubmitSnapshot() {
        let e1 = "undefined" != typeof window && window.location?.hostname?.startsWith("job-boards.");
        return (0, f.getFormSnapshot)(this.cachedRules, e1);
    }
    getAdditionalAutofillSnapshotData(e1) {
        let t = this.ensureEducationTraceRunId(), r1 = (0, f.getEduAndEmploymentSnapshot)({
            markEducationRows: !0,
            includeEducationSnapshotIndex: !0,
            includeEducationTrace: !0,
            educationTraceRunId: t
        }) || {};
        return this.lastAdditionalAutofillData = r1, this.refreshRuntimeValidationTrackingData(), r1;
    }
    getAdditionalSubmitSnapshotData() {
        return (0, f.getEduAndEmploymentSnapshot)({
            includeEducationSnapshotIndex: !0,
            includeEducationTrace: !0,
            educationTraceRunId: this.educationTraceRunId ?? void 0
        }) || {};
    }
    getAutofillAnswerPairExtraTrackingData() {
        return {
            ...(0, d.buildGreenhouseResolveTrackingData)(this.educationResolveTrackingRecords),
            ...this.runtimeValidationTrackingData
        };
    }
    normalizeAutofillAnswerPairTrackingData(e1) {
        return (0, p.alignGreenhouseEducationAnswerPairTrackingData)(e1);
    }
    async handleResumeUpload() {
        let e1 = (0, x.isResumeRequired)();
        this.progressTracker.updateFieldRequiredStatus({
            label: "Resume/CV",
            required: e1
        }), this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async ()=>{
            await (0, x.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        });
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = await this.extractFormRules(), { regularRules: r1 } = (0, E.partitionGreenhouseCountryRules)(t);
        this.cachedRules = t, this.progressTracker.setFieldsRequiredStatus((0, C.excludeGreenhouseConditionalRaceRules)(t)), (0, E.reconcileGreenhouseCountryProgress)(t, this.currentRunCountryCommitted, {
            updateFilledProgress: this.progressTracker.updateFilledProgress,
            updateMissedProgress: this.progressTracker.updateMissedProgress
        });
        let n = await this.fetchFormAnswers(r1, e1);
        return "string" == typeof n ? n : ((0, x.dismissAllReactSelectMenus)(), this.educationResolvePrefetchTaskMapPromise = null, this.educationResolveTrackingRecords = [], this.runtimeValidationTrackingData = {}, this.runtimeValidationRetryResults = [], this.lastAutofillSnapshot = {}, this.lastAdditionalAutofillData = {}, this.lastEducationRules = [], this.educationTraceRunId = null, this.locationRuntimeValidationContext = null, this.startEducationResolvePrefetch(), await this.fillRegularFields(r1), await this.fillEducationAndEmployment(t), await this.retryRuntimeValidationFailures(t), await this.executeSiteSpecificSteps(t), await this.finalizeFillForm());
    }
    submitApplication() {
        let e1 = (0, v.getFirstOrderedNodeSafe)('.//*[@id="submit_app" or text()="Submit application"]');
        e1?.click();
    }
    getCurrentPageUrl() {
        return window.location.href;
    }
    async resolveEducationOperation(e1) {
        return await (0, o.sendToBackground)({
            name: "resolveAutofillOperation",
            body: {
                operation: e1,
                source: "greenhouse"
            }
        });
    }
    async getEducationResolvePrefetchRules() {
        let e1 = "undefined" != typeof window && window.location?.hostname?.startsWith("job-boards."), t = e1 ? (await f.getEduRule(!1, !0))?.[0] : f.getEducationRules()?.[0];
        return (t?.children ?? []).map((e1)=>({
                label: e1.label
            })).filter((e1)=>(0, u.shouldResolveEducationLabel)(e1.label));
    }
    startEducationResolvePrefetch() {
        !this.educationResolvePrefetchTaskMapPromise && Array.isArray(this.answer?.education) && 0 !== this.answer.education.length && (this.educationResolvePrefetchTaskMapPromise = (async ()=>{
            try {
                let e1 = await this.getEducationResolvePrefetchRules();
                if (0 === e1.length) return [];
                return (0, u.createEducationRecordResolutionTaskMap)({
                    currentUrl: this.getCurrentPageUrl(),
                    records: this.answer.education,
                    rules: e1,
                    resolveOperation: (e1)=>this.resolveEducationOperation(e1)
                });
            } catch (e1) {
                return console.warn("[Greenhouse] Failed to prefetch education operations:", e1), [];
            }
        })());
    }
    async getEducationResolvePrefetchTaskMap() {
        return this.educationResolvePrefetchTaskMapPromise || this.startEducationResolvePrefetch(), await this.educationResolvePrefetchTaskMapPromise ?? [];
    }
    async applyEducationResolvePrefetchForRule(e1, t, r1) {
        if (!(0, u.shouldResolveEducationLabel)(e1)) return t;
        let n = await this.getEducationResolvePrefetchTaskMap(), o = n[r1]?.[e1], i = o ? await o : null;
        return this.captureEducationResolveTracking(e1, r1, i), (0, u.applyPrefetchedEducationResolutionForLabel)({
            record: t,
            label: e1,
            prefetchedResolution: Promise.resolve(i)
        });
    }
    captureEducationResolveTracking(e1, t, r1) {
        let n = String(e1 ?? "").trim().toLowerCase();
        if ("school" !== n && "discipline" !== n) return;
        let o = {
            ...this.educationResolveTrackingRecords[t] ?? {}
        };
        "school" === n ? (o.school = (0, d.getGreenhouseResolvedEducationValue)(r1), o.schoolPayload = (0, d.getGreenhouseResolveOperationPayload)(r1)) : (o.discipline = (0, d.getGreenhouseResolvedEducationValue)(r1), o.disciplinePayload = (0, d.getGreenhouseResolveOperationPayload)(r1)), this.educationResolveTrackingRecords[t] = o;
    }
    captureLocationRuntimeValidation(e1) {
        this.locationRuntimeValidationContext = e1;
    }
    async captureRuntimeValidationSnapshots(e1) {
        await this.getAutofillSnapshot(e1), this.getAdditionalAutofillSnapshotData(e1);
    }
    isRuntimeValidationRetryCandidate(e1) {
        return ("mismatched" === e1.status || "empty" === e1.status) && e1.attemptedCandidates.length > 0;
    }
    findEducationValidationRule(e1) {
        if ("number" != typeof e1.index) return null;
        let t = this.lastEducationRules[e1.index], r1 = Array.isArray(t?.children) ? t.children : [];
        return r1.find((t)=>{
            let r1 = String(t.label ?? "").trim().toLowerCase();
            return r1 === e1.fieldLabel.toLowerCase();
        }) ?? null;
    }
    findLocationValidationRule() {
        return this.cachedRules.find((e1)=>R(e1)) ?? null;
    }
    async clearRuntimeValidationField(e1) {
        if ("location" === e1.fieldType) {
            let e1 = this.findLocationValidationRule();
            return (0, x.clearGreenhouseAutocompleteField)(e1 ? L(e1) : null);
        }
        let t = this.findEducationValidationRule(e1);
        return (0, x.clearGreenhouseAutocompleteField)(t?.$input ?? null);
    }
    async refillRuntimeValidationField(e1) {
        if ("location" === e1.fieldType) {
            let t = this.findLocationValidationRule(), r1 = t ? L(t) : null;
            return !!t && !!r1 && (0, x.fillAutocompleteField)({
                ...t,
                $input: r1
            }, e1.attemptedCandidates, {
                allowPartialMatch: !1
            });
        }
        let t = this.findEducationValidationRule(e1);
        return !!t && t.type === y.FIELD_TYPE.SEARCH && (0, x.fillAutocompleteField)(t, e1.attemptedCandidates, {
            allowPartialMatch: !1
        });
    }
    getValidationStatusForRetryResult(e1) {
        let t = this.runtimeValidationTrackingData?.validation;
        return "location" === e1.fieldType ? t?.location?.status ?? "" : "number" != typeof e1.index ? "" : t?.education?.[e1.index]?.[e1.fieldType]?.status ?? "";
    }
    async retryRuntimeValidationFailures(e1) {
        await this.captureRuntimeValidationSnapshots(e1);
        let t = (0, m.getGreenhouseRuntimeValidationLogEntries)(this.runtimeValidationTrackingData).filter((e1)=>this.isRuntimeValidationRetryCandidate(e1));
        if (0 !== t.length) {
            for (let e1 of (this.runtimeValidationRetryResults = [], t))await this.clearRuntimeValidationField(e1), await this.refillRuntimeValidationField(e1), this.runtimeValidationRetryResults.push({
                ..."number" == typeof e1.index ? {
                    index: e1.index
                } : {},
                fieldType: e1.fieldType,
                initialStatus: e1.status,
                initialCommittedValue: e1.committedValue,
                retryCount: 1,
                resetApplied: !1
            });
            for (let t of (await this.captureRuntimeValidationSnapshots(e1), this.runtimeValidationRetryResults)){
                let e1 = this.getValidationStatusForRetryResult(t);
                if ("retry_matched" === e1) continue;
                let r1 = await this.clearRuntimeValidationField({
                    ..."number" == typeof t.index ? {
                        index: t.index
                    } : {},
                    fieldType: t.fieldType,
                    fieldLabel: "location" === t.fieldType ? this.locationRuntimeValidationContext?.label ?? "Location" : "school" === t.fieldType ? "School" : "Discipline",
                    level: "warn",
                    status: t.initialStatus,
                    committedValue: t.initialCommittedValue,
                    attemptedCandidates: []
                });
                t.resetApplied = r1;
            }
            await this.captureRuntimeValidationSnapshots(e1), (0, g.sendRuntimeValidationDeviationEvent)({
                formUrl: this.getCurrentPageUrl(),
                source: this.getSiteName(),
                trackingData: this.runtimeValidationTrackingData
            });
        }
    }
    refreshRuntimeValidationTrackingData() {
        this.runtimeValidationTrackingData = (0, m.buildGreenhouseRuntimeValidationTrackingData)({
            educationRecords: this.answer.education ?? [],
            educationSnapshotRecords: Array.isArray(this.lastAdditionalAutofillData.education) ? this.lastAdditionalAutofillData.education : [],
            educationResolveRecords: this.educationResolveTrackingRecords,
            autofillSnapshot: this.lastAutofillSnapshot,
            location: this.locationRuntimeValidationContext,
            retryResults: this.runtimeValidationRetryResults
        }), (0, m.getGreenhouseRuntimeValidationLogEntries)(this.runtimeValidationTrackingData).forEach((e1)=>{
            let t = `[Greenhouse] ${e1.fieldLabel} validation ${e1.status}`, r1 = {
                ..."number" == typeof e1.index ? {
                    index: e1.index
                } : {},
                fieldType: e1.fieldType,
                committedValue: e1.committedValue,
                attemptedCandidates: e1.attemptedCandidates
            };
            "info" === e1.level ? console.info(t, r1) : console.warn(t, r1);
        });
    }
    ensureEducationTraceRunId() {
        return this.educationTraceRunId || (this.educationTraceRunId = (0, l.createEducationTraceRunId)()), this.educationTraceRunId;
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
$RefreshReg$(_c, "A");
$RefreshReg$(_c1, "T");
$RefreshReg$(_c2, "F");
$RefreshReg$(_c3, "I");
$RefreshReg$(_c4, "D");
$RefreshReg$(_c5, "P");
$RefreshReg$(_c6, "L");
$RefreshReg$(_c7, "R");

},{}]},["a6f7O","chOL5"], "chOL5", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QywyQkFBMkIsWUFBWSxFQUFFO1lBQ2hELHlCQUF5QixJQUFJLENBQUM7WUFDOUIsa0JBQWtCLElBQUksQ0FBQztZQUN2QixVQUFVLElBQUksQ0FBQztZQUNmLGNBQWMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSx3Q0FBdUMsRUFBRyxJQUFJLENBQUMsK0JBQ3hELFFBQVEsQ0FBQTtZQUNQLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFFLFdBQVcsWUFBWSxFQUFFLEdBQUUsT0FBTyxDQUFDLEVBQzNELEtBQUk7Z0JBQ0YsR0FBRyxZQUFZLE9BQU8sR0FBRSxRQUFRO29CQUM5QixPQUFPLEdBQUU7Z0JBQ1gsSUFBSSxDQUFDLENBQUM7Z0JBQ04sV0FBVyxHQUFFO2dCQUNiLGdCQUFnQixHQUFFO2dCQUNsQixxQkFBcUIsR0FBRTtZQUN6QjtZQUNGLFdBQVcsR0FBRSxRQUFRLFFBQVEsS0FBSyxHQUFHLE1BQUssUUFBUSxLQUFLLEdBQUc7UUFDNUQ7SUFDSjtJQUNBLDRCQUE0QjtRQUMxQixPQUFPLElBQUksQ0FBQyx1QkFBd0IsQ0FBQSxJQUFJLENBQUMsc0JBQXNCLEFBQUMsQ0FBQSxHQUFHLEVBQ2hFLHlCQUF3QixHQUFHLEdBQUksSUFBSSxDQUFDO0lBQ3pDO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTJkZTU3NTRiYmNhZGRiYWQuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxncmVlbmhvdXNlLmpzXCIsXCJidW5kbGVJZFwiOlwiMDQyYzY0OWMwM2UzMTExNFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGpsT2Q2XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi4vYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICAuL2NvdW50cnkgLT4gOGRndUwgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9jb3VudHJ5LmpzXHJcbiAqICAgLi9vcGVyYXRpb25zIC0+IDFEa0lwICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2dyZWVuaG91c2Uvb3BlcmF0aW9ucy5qc1xyXG4gKiAgIC4vcmFjZSAtPiBjUTRKZyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL3JhY2UuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2VkdWNhdGlvbi1pdGVtLXRyYWNlIC0+IGo3VUdJICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2VkdWNhdGlvbi1pdGVtLXRyYWNlLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2dyZWVuaG91c2UvYW5zd2VyIC0+IDNsSE9DICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2dyZWVuaG91c2UvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2dyZWVuaG91c2UvZWR1Y2F0aW9uLW9wZXJhdGlvbiAtPiAxd3FIVCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL2VkdWNhdGlvbi1vcGVyYXRpb24uanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9sb2NhdGlvbi1vcGVyYXRpb24gLT4gM0ZaNHIgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9sb2NhdGlvbi1vcGVyYXRpb24uanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9yZXNvbHZlLXRyYWNraW5nIC0+IDZOYzRjICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2dyZWVuaG91c2UvcmVzb2x2ZS10cmFja2luZy5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL3J1bGVzIC0+IGpseTN5ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2dyZWVuaG91c2UvcnVsZXMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9zbmFwc2hvdC1hbGlnbm1lbnQgLT4gZXdqZXYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9zbmFwc2hvdC1hbGlnbm1lbnQuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS92YWxpZGF0aW9uLXRyYWNraW5nIC0+IGFWUXNyICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2dyZWVuaG91c2UvdmFsaWRhdGlvbi10cmFja2luZy5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9wcm9maWxlLWxvY2F0aW9uLW9yaWdpbmFsLWFuc3dlciAtPiA4a3dKTiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9wcm9maWxlLWxvY2F0aW9uLW9yaWdpbmFsLWFuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9ydW50aW1lLXZhbGlkYXRpb24tdHJhY2tpbmcgLT4gOFcySlQgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcnVudGltZS12YWxpZGF0aW9uLXRyYWNraW5nLmpzXHJcbiAqICAgfmNvcmUvZG9tIC0+IGhMTUpYICA9PiAgc3JjL2NvcmUvZG9tLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxJbmZvIC0+IDc5Vk5QICA9PiAgc3JjL3N0b3JlL2F1dG9maWxsSW5mby5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiR3JlZW5ob3VzZVwiLCAoKSA9PiBPKTtcclxudmFyIG8gPSBlKFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxcclxuICBsID0gZShcIn5jb250ZW50cy9zaXRlcy9lZHVjYXRpb24taXRlbS10cmFjZVwiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL2Fuc3dlclwiKSxcclxuICB1ID0gZShcIn5jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL2VkdWNhdGlvbi1vcGVyYXRpb25cIiksXHJcbiAgYyA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9sb2NhdGlvbi1vcGVyYXRpb25cIiksXHJcbiAgZCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9yZXNvbHZlLXRyYWNraW5nXCIpLFxyXG4gIGYgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2dyZWVuaG91c2UvcnVsZXNcIiksXHJcbiAgcCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9zbmFwc2hvdC1hbGlnbm1lbnRcIiksXHJcbiAgbSA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS92YWxpZGF0aW9uLXRyYWNraW5nXCIpLFxyXG4gIGggPSBlKFwifmNvbnRlbnRzL3NpdGVzL3Byb2ZpbGUtbG9jYXRpb24tb3JpZ2luYWwtYW5zd2VyXCIpLFxyXG4gIGcgPSBlKFwifmNvbnRlbnRzL3NpdGVzL3J1bnRpbWUtdmFsaWRhdGlvbi10cmFja2luZ1wiKSxcclxuICBiID0gZShcIn5jb3JlL2RvbVwiKSxcclxuICB5ID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIHYgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgdyA9IGUoXCJ+c3RvcmUvYXV0b2ZpbGxJbmZvXCIpLFxyXG4gIFMgPSBlKFwiLi4vYmFzZS1maWxsZXJcIiksXHJcbiAgRSA9IGUoXCIuL2NvdW50cnlcIiksXHJcbiAgeCA9IGUoXCIuL29wZXJhdGlvbnNcIiksXHJcbiAgQyA9IGUoXCIuL3JhY2VcIik7XHJcblxyXG5mdW5jdGlvbiBBKGUpIHtcclxuICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IGUudHJpbSgpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBrKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikudHJpbSgpLnJlcGxhY2UoL1xcKiskLywgXCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcclxufVxyXG5cclxuZnVuY3Rpb24gVChlKSB7XHJcbiAgcmV0dXJuIEEoZT8ucHJvZmlsZURhdGE/LmdyZWVuaG91c2VMb2NhdGlvbiA/PyBlPy5wcm9maWxlX2RhdGE/LmdyZWVuaG91c2VMb2NhdGlvbilcclxufVxyXG5cclxuZnVuY3Rpb24gRihlKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcclxuICAgIGZvciAobGV0IHQgb2YgZSkge1xyXG4gICAgICBsZXQgZSA9IEEodCk7XHJcbiAgICAgIGlmIChlKSByZXR1cm4gZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCJcclxuICB9XHJcbiAgcmV0dXJuIEEoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gSShlLCB0KSB7XHJcbiAgbGV0IHIgPSAoMCwgaC5nZXRQcm9maWxlTG9jYXRpb25PcmlnaW5hbEFuc3dlcikoZSk7XHJcbiAgaWYgKHIudmFsdWUpIHJldHVybiByO1xyXG4gIGxldCBuID0gW3QubGFiZWwsIFwiTG9jYXRpb24gKENpdHkpXCIsIFwiTG9jYXRpb24gLyBDaXR5XCIsIFwiTG9jYXRpb25cIiwgXCJDaXR5XCIsIFwiY2l0eVwiXSxcclxuICAgIG8gPSBuZXcgU2V0KG4ubWFwKGUgPT4gayhlKSkuZmlsdGVyKEJvb2xlYW4pKSxcclxuICAgIGkgPSBlPy5yZWd1bGFyID8/IHt9O1xyXG4gIGZvciAobGV0IGUgb2Ygbikge1xyXG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSwgZSkpIGNvbnRpbnVlO1xyXG4gICAgbGV0IHQgPSBGKGlbZV0pO1xyXG4gICAgaWYgKHQpIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiB0LFxyXG4gICAgICBzb3VyY2U6IGByZWd1bGFyLiR7ZX1gXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IFtlLCB0XSBvZiBPYmplY3QuZW50cmllcyhpKSkge1xyXG4gICAgaWYgKCFvLmhhcyhrKGUpKSkgY29udGludWU7XHJcbiAgICBsZXQgciA9IEYodCk7XHJcbiAgICBpZiAocikgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHIsXHJcbiAgICAgIHNvdXJjZTogYHJlZ3VsYXIuJHtlfWBcclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChsZXQgdCBvZiBlPy5maWxsRGF0YUxpc3QgPz8gW10pIHtcclxuICAgIGxldCBlID0gdD8ubmFtZTtcclxuICAgIGlmICghby5oYXMoayhlKSkpIGNvbnRpbnVlO1xyXG4gICAgbGV0IHIgPSBGKHQ/LnZhbHVlKTtcclxuICAgIGlmIChyKSByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogcixcclxuICAgICAgc291cmNlOiBgZmlsbERhdGFMaXN0LiR7ZX1gXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHNvdXJjZTogXCJcIlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaihlKSB7XHJcbiAgbGV0IHQgPSBuZXcgU2V0KFtcIlBob25lIENvdW50cnkgQ29kZVwiLCBcIkNvdW50cnkgUGhvbmUgQ29kZVwiLCBcIkNvdW50cnkgQ29kZVwiLCBcInBob25lQ291bnRyeUNvZGVcIixcclxuICAgICAgXCJwaG9uZV9jb3VudHJ5X2NvZGVcIlxyXG4gICAgXS5tYXAoZSA9PiBrKGUpKSksXHJcbiAgICByID0gZT8ucmVndWxhciA/PyB7fTtcclxuICBmb3IgKGxldCBbZSwgbl0gb2YgT2JqZWN0LmVudHJpZXMocikpIHtcclxuICAgIGlmICghdC5oYXMoayhlKSkpIGNvbnRpbnVlO1xyXG4gICAgbGV0IHIgPSBGKG4pO1xyXG4gICAgaWYgKHIpIHJldHVybiByXHJcbiAgfVxyXG4gIGZvciAobGV0IHIgb2YgZT8uZmlsbERhdGFMaXN0ID8/IFtdKSB7XHJcbiAgICBpZiAoIXQuaGFzKGsocj8ubmFtZSkpKSBjb250aW51ZTtcclxuICAgIGxldCBlID0gRihyPy52YWx1ZSk7XHJcbiAgICBpZiAoZSkgcmV0dXJuIGVcclxuICB9XHJcbiAgcmV0dXJuIFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gRChlLCB0KSB7XHJcbiAgY29uc29sZS5pbmZvKGBbR3JlZW5ob3VzZV1bTG9jYXRpb25dICR7ZX1gLCB0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBQKGUpIHtcclxuICBsZXQgdCA9IGU/LnNlYXJjaF9yZXF1ZXN0X3NjaGVtYT8ucGFyYW1zPy5maW5kPy4oZSA9PiBlPy5uYW1lID09PSBcImFwaV9rZXlcIik7XHJcbiAgcmV0dXJuICEhQSh0Py5kZWZhdWx0X3ZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBfKGUpIHtcclxuICByZXR1cm4gZSA/IGUubWF0Y2hlcz8uKFwiI2NhbmRpZGF0ZS1sb2NhdGlvbiwgaW5wdXQjY2FuZGlkYXRlLWxvY2F0aW9uXCIpID8gZSA6IGUucXVlcnlTZWxlY3Rvcj8uKFxyXG4gICAgXCIjY2FuZGlkYXRlLWxvY2F0aW9uLCBpbnB1dCNjYW5kaWRhdGUtbG9jYXRpb25cIikgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEwoZSkge1xyXG4gIGxldCB0ID0gZS4kaW5wdXQsXHJcbiAgICByID0gXyh0KTtcclxuICByZXR1cm4gciA/IHIuY2xvc2VzdChcIi5zZWxlY3RfX2NvbnRhaW5lciwgLnNlbGVjdFwiKSA/PyB0IDogdD8ucXVlcnlTZWxlY3Rvcj8uKFxyXG4gICAgXCIuc2VsZWN0X19jb250cm9sXCIpID8gdCA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gUihlKSB7XHJcbiAgaWYgKGUudHlwZSAhPT0geS5GSUVMRF9UWVBFLlNFQVJDSCkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gayhlLmxhYmVsKTtcclxuICByZXR1cm4gXCJsb2NhdGlvblwiID09PSB0IHx8IFwibG9jYXRpb24gKGNpdHkpXCIgPT09IHQgfHwgXCJsb2NhdGlvbiAvIGNpdHlcIiA9PT0gdCB8fCAhIV8oZS4kaW5wdXQpXHJcbn1cclxuY2xhc3MgTyBleHRlbmRzIFMuQmFzZUZpbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpLCB0aGlzLmNhY2hlZFJ1bGVzID0gW10sIHRoaXMuZWR1Y2F0aW9uUmVzb2x2ZVByZWZldGNoVGFza01hcFByb21pc2UgPSBudWxsLCB0aGlzXHJcbiAgICAgIC5lZHVjYXRpb25SZXNvbHZlVHJhY2tpbmdSZWNvcmRzID0gW10sIHRoaXMucnVudGltZVZhbGlkYXRpb25UcmFja2luZ0RhdGEgPSB7fSwgdGhpc1xyXG4gICAgICAubGFzdEF1dG9maWxsU25hcHNob3QgPSB7fSwgdGhpcy5sYXN0QWRkaXRpb25hbEF1dG9maWxsRGF0YSA9IHt9LCB0aGlzXHJcbiAgICAgIC5sYXN0RWR1Y2F0aW9uUnVsZXMgPSBbXSwgdGhpcy5ydW50aW1lVmFsaWRhdGlvblJldHJ5UmVzdWx0cyA9IFtdLCB0aGlzXHJcbiAgICAgIC5lZHVjYXRpb25UcmFjZVJ1bklkID0gbnVsbCwgdGhpcy5sb2NhdGlvblJ1bnRpbWVWYWxpZGF0aW9uQ29udGV4dCA9IG51bGwsIHRoaXNcclxuICAgICAgLmluaXRpYWxDb3ZlckxldHRlck9ic2VydmVyID0gbnVsbCwgdGhpcy5jdXJyZW50UnVuQ291bnRyeUNvbW1pdHRlZCA9ICExLCB0aGlzXHJcbiAgICAgIC5mb3JtYXRBbnN3ZXIgPSBzLmZvcm1hdEFuc3dlciwgdGhpcy5zY2hlZHVsZUluaXRpYWxJZnJhbWVDb3ZlckxldHRlckNoZWNrKClcclxuICB9XHJcbiAgc2NoZWR1bGVJbml0aWFsSWZyYW1lQ292ZXJMZXR0ZXJDaGVjaygpIHtcclxuICAgIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiB3aW5kb3cgfHwgd2luZG93LnRvcCA9PT0gd2luZG93LnNlbGYpIHJldHVybjtcclxuICAgIGxldCBlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb3ZlckxldHRlcigpXHJcbiAgICAgIH0sXHJcbiAgICAgIHQgPSBbNTAwLCAxNTAwLCAzZTMsIDZlMywgMWU0XTtcclxuICAgIHQuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZSwgdClcclxuICAgIH0pLCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICYmICh0aGlzLmluaXRpYWxDb3ZlckxldHRlck9ic2VydmVyID1cclxuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZSksIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiB0aGlzLmluaXRpYWxDb3ZlckxldHRlck9ic2VydmVyXHJcbiAgICAgIC5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICAgIGNoaWxkTGlzdDogITAsXHJcbiAgICAgICAgc3VidHJlZTogITBcclxuICAgICAgfSksIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxDb3ZlckxldHRlck9ic2VydmVyPy5kaXNjb25uZWN0KCksIHRoaXMuaW5pdGlhbENvdmVyTGV0dGVyT2JzZXJ2ZXIgPVxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICB9LCAxZTQpKVxyXG4gIH1cclxuICBnZXRGaWVsZEhhbmRsZXJzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3kuRklFTERfVFlQRS5URVhUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiB7XHJcbiAgICAgICAgICBsZXQgciA9IGUuJGlucHV0O1xyXG4gICAgICAgICAgaWYgKHI/LmNsYXNzTGlzdC5jb250YWlucyhcIml0aV9fc2VhcmNoLWlucHV0XCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBlID0gci5jbG9zZXN0KFwiLml0aVwiKTtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RlbCddLCBpbnB1dDpub3QoLml0aV9fc2VhcmNoLWlucHV0KVwiKTtcclxuICAgICAgICAgICAgICB0ICYmIChyID0gdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IG4gPSBlLmxhYmVsLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLFxyXG4gICAgICAgICAgICBvID0gL1xcYmRhdGVcXGIvLnRlc3Qobik7XHJcbiAgICAgICAgICByZXR1cm4gbyA/ICgwLCB4LmZpbGxUZXh0RmllbGQpKGUsIHQsIHIpIDogKDAsIGEuZmlsbElucHV0VGV4dEZpZWxkKShyLCB0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbeS5GSUVMRF9UWVBFLlNFTEVDVF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIHguZmlsbFNlbGVjdEZpZWxkKShlLCBBcnJheS5pc0FycmF5KHQpID8gdFswXSA6IHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW3kuRklFTERfVFlQRS5TRUFSQ0hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCB4LmZpbGxBdXRvY29tcGxldGVGaWVsZCkoZSwgKDAsIGlcclxuICAgICAgICAgIC5idWlsZEF1dG9jb21wbGV0ZUFuc3dlckNhbmRpZGF0ZXMpKGUubGFiZWwsIHQpKSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt5LkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBhLmZpbGxDaGVja0JveGVzRmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBjaGVja0NvdmVyTGV0dGVyKCkge1xyXG4gICAgbGV0IGUgPSAoMCwgeC5nZXRHcmVlbmhvdXNlQ292ZXJMZXR0ZXJJbnB1dCkoKSxcclxuICAgICAgdCA9IFwiXCI7XHJcbiAgICBlICYmICh0ID0gKDAsIHguaXNHcmVlbmhvdXNlQ292ZXJMZXR0ZXJSZXF1aXJlZCkoZSkgPyBcInJlcXVpcmVkXCIgOiBcIm9wdGlvbmFsXCIpLCAoMCwgYVxyXG4gICAgICAucG9zdENvdmVyTGV0dGVyU3RhdHVzKSh0KVxyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiBcImdyZWVuaG91c2VcIlxyXG4gIH1cclxuICBhc3luYyBleHRyYWN0Rm9ybVJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBmLmdldFJ1bGVzKSgpXHJcbiAgfVxyXG4gIGFzeW5jIHJ1blByZUZpbGxGb3JtKCkge1xyXG4gICAgdGhpcy5jdXJyZW50UnVuQ291bnRyeUNvbW1pdHRlZCA9ICExO1xyXG4gICAgbGV0IGUgPSBhd2FpdCAoMCwgRS5ydW5HcmVlbmhvdXNlQ291bnRyeVByZWZpbGwpKHtcclxuICAgICAgcHJlRmlsbEZvcm06IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZS5hZGQoeC5yZWluaXRpYWxpemVFZHVjYXRpb25BbmRFbXBsb3ltZW50KSwgYXdhaXQgdGhpcy50YXNrUXVldWVcclxuICAgICAgICAgIC5ydW4oKVxyXG4gICAgICB9LFxyXG4gICAgICBmZXRjaEF1dG9maWxsSW5mbzogKCkgPT4gKDAsIHcudXNlQXV0b2ZpbGxJbmZvU3RvcmUpLmdldFN0YXRlKCkuZmV0Y2hBdXRvZmlsbEluZm8oKSxcclxuICAgICAgZmlsbENvdW50cnk6IGUgPT4gKDAsIEUuZmlsbEdyZWVuaG91c2VHZW9ncmFwaGljQ291bnRyeSkoZSlcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jdXJyZW50UnVuQ291bnRyeUNvbW1pdHRlZCA9IGUuY29tbWl0dGVkXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxSZWd1bGFyRmllbGRzKGUpIHtcclxuICAgIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0ICgwLCB4LmZpbGxDb25zZW50Q2hlY2tib3gpKClcclxuICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKTtcclxuICAgIGxldCB0ID0gZSA9PiBBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGUsXHJcbiAgICAgIHIgPSBlID0+IFN0cmluZyh0KGUpID8/IFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICBuID0gdGhpcy5hbnN3ZXIuZmlsbERhdGFMaXN0ID8/IFtdLFxyXG4gICAgICBvID0gVCh0aGlzLmFuc3dlciksXHJcbiAgICAgIGEgPSAoMCwgYy5leHRyYWN0R3JlZW5ob3VzZUxvY2F0aW9uQ29udHJvbENvbmZpZykoKSxcclxuICAgICAgbCA9IG5ldyBNYXAsXHJcbiAgICAgIHMgPSBuZXcgU2V0O1xyXG4gICAgZm9yIChsZXQgdCBvZiBlKSBsLnNldCh0LmxhYmVsLCAobC5nZXQodC5sYWJlbCkgfHwgMCkgKyAxKSwgKHQudHlwZSA9PT0geS5GSUVMRF9UWVBFXHJcbiAgICAgIC5TRUxFQ1QgfHwgdC50eXBlID09PSB5LkZJRUxEX1RZUEUuU0VBUkNIKSAmJiBzLmFkZCh0LmxhYmVsKTtcclxuICAgIGxldCB1ID0gbmV3IFNldDtcclxuICAgIGZvciAobGV0IFtlLCB0XSBvZiBsKSB0ID4gMSAmJiBzLmhhcyhlKSAmJiB1LmFkZChlKTtcclxuICAgIGxldCBkID0gbmV3IE1hcDtcclxuICAgIGZvciAobGV0IGUgb2YgbilcclxuICAgICAgaWYgKGU/Lm5hbWUgJiYgdS5oYXMoZS5uYW1lKSkge1xyXG4gICAgICAgIGxldCB0ID0gZC5nZXQoZS5uYW1lKSA/PyBbXTtcclxuICAgICAgICB0LnB1c2goZS52YWx1ZSksIGQuc2V0KGUubmFtZSwgdClcclxuICAgICAgfSBsZXQgZiA9IFtdO1xyXG4gICAgZm9yIChsZXQgbiBvZiBlKSB7XHJcbiAgICAgIGxldCBlID0gdGhpcy5vcGVyYXRpb25Db25maWdbbi50eXBlXTtcclxuICAgICAgaWYgKGUpIHtcclxuICAgICAgICBpZiAoKDAsIEMuaXNHcmVlbmhvdXNlQ29uZGl0aW9uYWxSYWNlUnVsZSkobikpIHtcclxuICAgICAgICAgIGYucHVzaChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICgwLCBDLmZpbmRHcmVlbmhvdXNlUmFjZUNvbnRhaW5lcikoKSAmJiAodGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyhuKSwgYXdhaXQgZShuLCB0aGlzLmFuc3dlci5yZWd1bGFyKSlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFIobikpIHtcclxuICAgICAgICAgIGYucHVzaChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlID0gTChuKTtcclxuICAgICAgICAgICAgaWYgKG8pIHtcclxuICAgICAgICAgICAgICBEKFwiZGlyZWN0IGZpbGwgc3RhcnRcIiwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IG4ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IFwicHJvZmlsZURhdGEuZ3JlZW5ob3VzZUxvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogb1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGxldCB0ID0gISFlICYmIGF3YWl0ICgwLCB4LmZpbGxBdXRvY29tcGxldGVGaWVsZCkoe1xyXG4gICAgICAgICAgICAgICAgLi4ubixcclxuICAgICAgICAgICAgICAgICRpbnB1dDogZVxyXG4gICAgICAgICAgICAgIH0sIG8sIHtcclxuICAgICAgICAgICAgICAgIGFsbG93UGFydGlhbE1hdGNoOiAhMVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIEQoXCJmaWxsIHJlc3VsdFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBuLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBzb3VyY2U6IFwicHJvZmlsZURhdGEuZ3JlZW5ob3VzZUxvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkTG9jYXRpb246IG8sXHJcbiAgICAgICAgICAgICAgICAgIGZpbGxlZDogdFxyXG4gICAgICAgICAgICAgICAgfSksIHRoaXMuY2FwdHVyZUxvY2F0aW9uUnVudGltZVZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogbi5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IG8sXHJcbiAgICAgICAgICAgICAgICAgIGF0dGVtcHRlZENhbmRpZGF0ZXM6IFtvXVxyXG4gICAgICAgICAgICAgICAgfSksIHQgPyB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhuLmxhYmVsKSA6IHRoaXNcclxuICAgICAgICAgICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3Mobi5sYWJlbCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHQgPSBJKHRoaXMuYW5zd2VyLCBuKTtcclxuICAgICAgICAgICAgaWYgKCF0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgRChcInNraXBcIiwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IG4ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IFwiZW1wdHkgcHJvZmlsZURhdGEuZ3JlZW5ob3VzZUxvY2F0aW9uIGFuZCBjaXR5XCJcclxuICAgICAgICAgICAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3Mobi5sYWJlbCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHIgPSAoMCwgYy5idWlsZEdyZWVuaG91c2VMb2NhdGlvbk9wZXJhdGlvbikoe1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRVcmw6IHRoaXMuZ2V0Q3VycmVudFBhZ2VVcmwoKSxcclxuICAgICAgICAgICAgICBvcmlnaW5hbEFuc3dlcjogdC52YWx1ZSxcclxuICAgICAgICAgICAgICBsb2NhdGlvbkNvbnRyb2xDb25maWc6IGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEQoXCJyZXNvbHZlIHN0YXJ0XCIsIHtcclxuICAgICAgICAgICAgICBsYWJlbDogbi5sYWJlbCxcclxuICAgICAgICAgICAgICBzb3VyY2U6IHQuc291cmNlLFxyXG4gICAgICAgICAgICAgIG9yaWdpbmFsQW5zd2VyOiB0LnZhbHVlLFxyXG4gICAgICAgICAgICAgIHNlYXJjaFVybDogci5zZWFyY2hfcmVxdWVzdF9zY2hlbWEudXJsLFxyXG4gICAgICAgICAgICAgIGhhc0FwaUtleTogUChyKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGkgPSBhd2FpdCB0aGlzLnJlc29sdmVFZHVjYXRpb25PcGVyYXRpb24ociksXHJcbiAgICAgICAgICAgICAgbCA9ICgwLCBjLmdldEdyZWVuaG91c2VSZXNvbHZlZExvY2F0aW9uVmFsdWUpKGkpLFxyXG4gICAgICAgICAgICAgIHMgPSBsID8gW2xdIDogW107XHJcbiAgICAgICAgICAgIGlmIChEKFwicmVzb2x2ZSByZXN1bHRcIiwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IG4ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHQuc291cmNlLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBpPy5yZXN1bHQ/LmFjdGlvbixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzOiBpPy5yZXN1bHQ/LnNlbGVjdGVkX3ZhbHVlcyA/PyBbXSxcclxuICAgICAgICAgICAgICAgIHJlc29sdmVkTG9jYXRpb246IGxcclxuICAgICAgICAgICAgICB9KSwgIWwpIHtcclxuICAgICAgICAgICAgICBEKFwiZmlsbCByZXN1bHRcIiwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IG4ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHQuc291cmNlLFxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRMb2NhdGlvbjogbCxcclxuICAgICAgICAgICAgICAgIGZpbGxlZDogITEsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IFwiZW1wdHkgcmVzb2x2ZWQgbG9jYXRpb25cIlxyXG4gICAgICAgICAgICAgIH0pLCB0aGlzLmNhcHR1cmVMb2NhdGlvblJ1bnRpbWVWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBuLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgc291cmNlVmFsdWU6IHQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlVmFsdWU6IGwsXHJcbiAgICAgICAgICAgICAgICBhdHRlbXB0ZWRDYW5kaWRhdGVzOiBzXHJcbiAgICAgICAgICAgICAgfSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKG4ubGFiZWwpO1xyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB1ID0gISFlICYmIGF3YWl0ICgwLCB4LmZpbGxBdXRvY29tcGxldGVGaWVsZCkoe1xyXG4gICAgICAgICAgICAgIC4uLm4sXHJcbiAgICAgICAgICAgICAgJGlucHV0OiBlXHJcbiAgICAgICAgICAgIH0sIGwsIHtcclxuICAgICAgICAgICAgICBhbGxvd1BhcnRpYWxNYXRjaDogITFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEQoXCJmaWxsIHJlc3VsdFwiLCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogbi5sYWJlbCxcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogdC5zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlZExvY2F0aW9uOiBsLFxyXG4gICAgICAgICAgICAgICAgZmlsbGVkOiB1XHJcbiAgICAgICAgICAgICAgfSksIHRoaXMuY2FwdHVyZUxvY2F0aW9uUnVudGltZVZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IG4ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTogdC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJlc29sdmVWYWx1ZTogbCxcclxuICAgICAgICAgICAgICAgIGF0dGVtcHRlZENhbmRpZGF0ZXM6IHNcclxuICAgICAgICAgICAgICB9KSwgdSA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKG4ubGFiZWwpIDogdGhpc1xyXG4gICAgICAgICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3Mobi5sYWJlbClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdS5oYXMobi5sYWJlbCkgJiYgKG4udHlwZSA9PT0geS5GSUVMRF9UWVBFLlNFTEVDVCB8fCBuLnR5cGUgPT09IHkuRklFTERfVFlQRS5TRUFSQ0gpID8gZlxyXG4gICAgICAgICAgLnB1c2goYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbyA9IGQuZ2V0KG4ubGFiZWwpID8/IFtdLFxyXG4gICAgICAgICAgICAgIGEgPSBvLmZpbmRJbmRleChlID0+IChuLm9wdGlvbnMgPz8gW10pLnNvbWUodCA9PiByKHQpID09PSByKGUpKSk7XHJcbiAgICAgICAgICAgIGlmIChhID49IDApIHtcclxuICAgICAgICAgICAgICBsZXQgZSA9IHQoby5zcGxpY2UoYSwgMSlbMF0pLFxyXG4gICAgICAgICAgICAgICAgciA9ICExO1xyXG4gICAgICAgICAgICAgIChyID0gbi50eXBlID09PSB5LkZJRUxEX1RZUEUuU0VMRUNUID8gYXdhaXQgKDAsIHguZmlsbFNlbGVjdEZpZWxkKShuLCBlKSA6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCAoMCwgeC5maWxsQXV0b2NvbXBsZXRlRmllbGQpKG4sICgwLCBpXHJcbiAgICAgICAgICAgICAgICAgIC5idWlsZEF1dG9jb21wbGV0ZUFuc3dlckNhbmRpZGF0ZXMpKG4ubGFiZWwsIGUpKSkgPyB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKG4ubGFiZWwpOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhuXHJcbiAgICAgICAgICAgICAgICAgIC5sYWJlbClcclxuICAgICAgICAgICAgfSBlbHNlIGF3YWl0IGUobiwgdGhpcy5hbnN3ZXIucmVndWxhcilcclxuICAgICAgICAgIH0pIDogZi5wdXNoKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgZShuLCB0aGlzLmFuc3dlci5yZWd1bGFyKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgZSBvZiBmKSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBhc3luYyBmaWxsRWR1Y2F0aW9uQW5kRW1wbG95bWVudChlKSB7XHJcbiAgICBsZXQgdCA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24/Lmhvc3RuYW1lPy5zdGFydHNXaXRoKFxyXG4gICAgXCJqb2ItYm9hcmRzLlwiKTtcclxuICAgIGF3YWl0ICgwLCB4LmFkZEVkdWNhdGlvblNlY3Rpb24pKHRoaXMuYW5zd2VyLmVkdWNhdGlvbi5sZW5ndGgpO1xyXG4gICAgbGV0IHIgPSB0ID8gYXdhaXQgKDAsIGYuZ2V0RWR1UnVsZSkoITEsICExKSA6ICgwLCBmLmdldEVkdWNhdGlvblJ1bGVzKSgpO1xyXG4gICAgdGhpcy5sYXN0RWR1Y2F0aW9uUnVsZXMgPSByLCAoMCwgYi5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykoXCJlZHVjYXRpb25cIiwgcik7XHJcbiAgICBsZXQgbiA9ICgwLCBpLmdldEVkdWNhdGlvbk9wZXJhdGlvbnMpKHIsIHRoaXMuYW5zd2VyLmVkdWNhdGlvbiwgdGhpcy5vcGVyYXRpb25Db25maWcsIChlLCB0LFxyXG4gICAgICByKSA9PiB0aGlzLmFwcGx5RWR1Y2F0aW9uUmVzb2x2ZVByZWZldGNoRm9yUnVsZShlLmxhYmVsLCB0LCByKSwge1xyXG4gICAgICBvbkNvbXBsZXRlZDogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYW5zd2VyLmVkdWNhdGlvbi5sZW5ndGggPiAwICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFxyXG4gICAgICAgICAgXCJFZHVjYXRpb25cIilcclxuICAgICAgfSxcclxuICAgICAgb25Ta2lwcGVkOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIilcclxuICAgICAgfSxcclxuICAgICAgb25TZWN0aW9uUmVzdWx0Q2hhbmdlZDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlU2VjdGlvblJlc3VsdFxyXG4gICAgfSwge1xyXG4gICAgICBmaWxsUmVhZHlUcmFuc2Zvcm1lZEZpZWxkc0ZpcnN0OiAhMFxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBlIG9mIG4pIHRoaXMudGFza1F1ZXVlLmFkZChlKTtcclxuICAgIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCBhd2FpdCAoMCwgeC5hZGRFbXBsb3ltZW50U2VjdGlvbikodGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2VcclxuICAgICAgLmxlbmd0aCk7XHJcbiAgICBsZXQgbyA9IHQgPyBhd2FpdCAoMCwgZi5nZXRFbXBsb3ltZW50UnVsZSkoITEsICExKSA6ICgwLCBmLmdldEV4cGVyaWVuY2VSdWxlcykoKTtcclxuICAgICgwLCBiLnNldFNlY3Rpb25SZXN1bHRGb2N1c1J1bGVzKShcImVtcGxveW1lbnRcIiwgbyk7XHJcbiAgICBsZXQgYSA9ICgwLCBpLmdldEVtcGxveW1lbnRPcGVyYXRpb25zKShvLCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSwgdGhpcy5vcGVyYXRpb25Db25maWcsXHJcbiAgICAgIHZvaWQgMCwge1xyXG4gICAgICAgIG9uQ29tcGxldGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZS5sZW5ndGggPiAwICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAgIC51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIilcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2tpcHBlZDogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNlY3Rpb25SZXN1bHRDaGFuZ2VkOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0XHJcbiAgICAgIH0pO1xyXG4gICAgZm9yIChsZXQgZSBvZiBhKSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgYXdhaXQgKDAsIHguZmlsbEN1cnJlbnRFbXBsb3ltZW50Q2hlY2tib3hlcykodGhpcy5hbnN3ZXJcclxuICAgICAgLndvcmtFeHBlcmllbmNlKSwgdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgKDAsIHguZmlsbENvdW50cnlGaWVsZEZpcnN0T3B0aW9uKSh0aGlzLmFuc3dlci5jb3VudHJ5LCBqKHRoaXMuYW5zd2VyKSlcclxuICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBhc3luYyBleGVjdXRlU2l0ZVNwZWNpZmljU3RlcHMoZSkge1xyXG4gICAgYXdhaXQgdGhpcy5iaW5kU3VibWl0QnV0dG9uVHJhY2tpbmcoZSksIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIHguZmlsbEFja25vd2xlZGdlQ2hlY2tib3gpKCksIGF3YWl0ICgwLCB4LmZpbGxOZXN0ZWRBY2tub3dsZWRnZUNoZWNrYm94KSgpXHJcbiAgICAgIH0pLCBhd2FpdCB0aGlzLmhhbmRsZVJlc3VtZVVwbG9hZCgpLCB0aGlzLmNvdmVyTGV0dGVyPy5jb3ZlckxldHRlcklkICYmIHRoaXMudGFza1F1ZXVlXHJcbiAgICAgIC5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0ICgwLCB4LnVwbG9hZENvdmVyTGV0dGVyKSh0aGlzLmNvdmVyTGV0dGVyLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKVxyXG4gICAgICB9KSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gJy4vLypbQGlkPVwic3VibWl0X2FwcFwiIG9yIHRleHQoKT1cIlN1Ym1pdCBhcHBsaWNhdGlvblwiXSdcclxuICB9XHJcbiAgZ2V0U3VibWl0U3VjY2Vzc1NlbGVjdG9ycygpIHtcclxuICAgIHJldHVybiBbJy4vL2RpdltAY2xhc3M9XCJjb25maXJtYXRpb25cIl0vZGl2W0BjbGFzcz1cImNvbmZpcm1hdGlvbl9fY29udGVudFwiXScsXHJcbiAgICAgICcuLy9oMltjb250YWlucyhAY2xhc3MsIFwicmljaC10ZXh0X190aXRsZVwiKSBhbmQgY29udGFpbnModGV4dCgpLCBcIldlIGdvdCB5b3VyIGFwcGxpY2F0aW9uXCIpXSdcclxuICAgIF1cclxuICB9XHJcbiAgYXN5bmMgZ2V0QXV0b2ZpbGxTbmFwc2hvdChlKSB7XHJcbiAgICBsZXQgdCA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24/Lmhvc3RuYW1lPy5zdGFydHNXaXRoKFxyXG4gICAgICBcImpvYi1ib2FyZHMuXCIpLFxyXG4gICAgICByID0gYXdhaXQgKDAsIGYuZ2V0Rm9ybVNuYXBzaG90KShlLCB0KTtcclxuICAgIHJldHVybiB0aGlzLmxhc3RBdXRvZmlsbFNuYXBzaG90ID0gciwgclxyXG4gIH1cclxuICBhc3luYyBnZXRTdWJtaXRTbmFwc2hvdCgpIHtcclxuICAgIGxldCBlID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbj8uaG9zdG5hbWU/LnN0YXJ0c1dpdGgoXHJcbiAgICBcImpvYi1ib2FyZHMuXCIpO1xyXG4gICAgcmV0dXJuICgwLCBmLmdldEZvcm1TbmFwc2hvdCkodGhpcy5jYWNoZWRSdWxlcywgZSlcclxuICB9XHJcbiAgZ2V0QWRkaXRpb25hbEF1dG9maWxsU25hcHNob3REYXRhKGUpIHtcclxuICAgIGxldCB0ID0gdGhpcy5lbnN1cmVFZHVjYXRpb25UcmFjZVJ1bklkKCksXHJcbiAgICAgIHIgPSAoMCwgZi5nZXRFZHVBbmRFbXBsb3ltZW50U25hcHNob3QpKHtcclxuICAgICAgICBtYXJrRWR1Y2F0aW9uUm93czogITAsXHJcbiAgICAgICAgaW5jbHVkZUVkdWNhdGlvblNuYXBzaG90SW5kZXg6ICEwLFxyXG4gICAgICAgIGluY2x1ZGVFZHVjYXRpb25UcmFjZTogITAsXHJcbiAgICAgICAgZWR1Y2F0aW9uVHJhY2VSdW5JZDogdFxyXG4gICAgICB9KSB8fCB7fTtcclxuICAgIHJldHVybiB0aGlzLmxhc3RBZGRpdGlvbmFsQXV0b2ZpbGxEYXRhID0gciwgdGhpcy5yZWZyZXNoUnVudGltZVZhbGlkYXRpb25UcmFja2luZ0RhdGEoKSwgclxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsU3VibWl0U25hcHNob3REYXRhKCkge1xyXG4gICAgcmV0dXJuICgwLCBmLmdldEVkdUFuZEVtcGxveW1lbnRTbmFwc2hvdCkoe1xyXG4gICAgICBpbmNsdWRlRWR1Y2F0aW9uU25hcHNob3RJbmRleDogITAsXHJcbiAgICAgIGluY2x1ZGVFZHVjYXRpb25UcmFjZTogITAsXHJcbiAgICAgIGVkdWNhdGlvblRyYWNlUnVuSWQ6IHRoaXMuZWR1Y2F0aW9uVHJhY2VSdW5JZCA/PyB2b2lkIDBcclxuICAgIH0pIHx8IHt9XHJcbiAgfVxyXG4gIGdldEF1dG9maWxsQW5zd2VyUGFpckV4dHJhVHJhY2tpbmdEYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uKDAsIGQuYnVpbGRHcmVlbmhvdXNlUmVzb2x2ZVRyYWNraW5nRGF0YSkodGhpcy5lZHVjYXRpb25SZXNvbHZlVHJhY2tpbmdSZWNvcmRzKSxcclxuICAgICAgLi4udGhpcy5ydW50aW1lVmFsaWRhdGlvblRyYWNraW5nRGF0YVxyXG4gICAgfVxyXG4gIH1cclxuICBub3JtYWxpemVBdXRvZmlsbEFuc3dlclBhaXJUcmFja2luZ0RhdGEoZSkge1xyXG4gICAgcmV0dXJuICgwLCBwLmFsaWduR3JlZW5ob3VzZUVkdWNhdGlvbkFuc3dlclBhaXJUcmFja2luZ0RhdGEpKGUpXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlc3VtZVVwbG9hZCgpIHtcclxuICAgIGxldCBlID0gKDAsIHguaXNSZXN1bWVSZXF1aXJlZCkoKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMoe1xyXG4gICAgICAgIGxhYmVsOiBcIlJlc3VtZS9DVlwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiBlXHJcbiAgICAgIH0pLCB0aGlzLmRpc2FibGVVcGxvYWRSZXN1bWUgPyB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKSA6XHJcbiAgICAgIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIHgudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVGaWxsRm9ybSgpO1xyXG4gICAgbGV0IHQgPSBhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZ3VsYXJSdWxlczogclxyXG4gICAgICB9ID0gKDAsIEUucGFydGl0aW9uR3JlZW5ob3VzZUNvdW50cnlSdWxlcykodCk7XHJcbiAgICB0aGlzLmNhY2hlZFJ1bGVzID0gdCwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMoKDAsIENcclxuICAgICAgLmV4Y2x1ZGVHcmVlbmhvdXNlQ29uZGl0aW9uYWxSYWNlUnVsZXMpKHQpKSwgKDAsIEUucmVjb25jaWxlR3JlZW5ob3VzZUNvdW50cnlQcm9ncmVzcykoXHJcbiAgICAgIHQsIHRoaXMuY3VycmVudFJ1bkNvdW50cnlDb21taXR0ZWQsIHtcclxuICAgICAgICB1cGRhdGVGaWxsZWRQcm9ncmVzczogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MsXHJcbiAgICAgICAgdXBkYXRlTWlzc2VkUHJvZ3Jlc3M6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzXHJcbiAgICAgIH0pO1xyXG4gICAgbGV0IG4gPSBhd2FpdCB0aGlzLmZldGNoRm9ybUFuc3dlcnMociwgZSk7XHJcbiAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgbiA/IG4gOiAoKDAsIHguZGlzbWlzc0FsbFJlYWN0U2VsZWN0TWVudXMpKCksIHRoaXNcclxuICAgICAgLmVkdWNhdGlvblJlc29sdmVQcmVmZXRjaFRhc2tNYXBQcm9taXNlID0gbnVsbCwgdGhpc1xyXG4gICAgICAuZWR1Y2F0aW9uUmVzb2x2ZVRyYWNraW5nUmVjb3JkcyA9IFtdLCB0aGlzLnJ1bnRpbWVWYWxpZGF0aW9uVHJhY2tpbmdEYXRhID0ge30sIHRoaXNcclxuICAgICAgLnJ1bnRpbWVWYWxpZGF0aW9uUmV0cnlSZXN1bHRzID0gW10sIHRoaXMubGFzdEF1dG9maWxsU25hcHNob3QgPSB7fSwgdGhpc1xyXG4gICAgICAubGFzdEFkZGl0aW9uYWxBdXRvZmlsbERhdGEgPSB7fSwgdGhpcy5sYXN0RWR1Y2F0aW9uUnVsZXMgPSBbXSwgdGhpc1xyXG4gICAgICAuZWR1Y2F0aW9uVHJhY2VSdW5JZCA9IG51bGwsIHRoaXMubG9jYXRpb25SdW50aW1lVmFsaWRhdGlvbkNvbnRleHQgPSBudWxsLCB0aGlzXHJcbiAgICAgIC5zdGFydEVkdWNhdGlvblJlc29sdmVQcmVmZXRjaCgpLCBhd2FpdCB0aGlzLmZpbGxSZWd1bGFyRmllbGRzKHIpLCBhd2FpdCB0aGlzXHJcbiAgICAgIC5maWxsRWR1Y2F0aW9uQW5kRW1wbG95bWVudCh0KSwgYXdhaXQgdGhpcy5yZXRyeVJ1bnRpbWVWYWxpZGF0aW9uRmFpbHVyZXModCksIGF3YWl0IHRoaXNcclxuICAgICAgLmV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyh0KSwgYXdhaXQgdGhpcy5maW5hbGl6ZUZpbGxGb3JtKCkpXHJcbiAgfVxyXG4gIHN1Ym1pdEFwcGxpY2F0aW9uKCkge1xyXG4gICAgbGV0IGUgPSAoMCwgdi5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgICcuLy8qW0BpZD1cInN1Ym1pdF9hcHBcIiBvciB0ZXh0KCk9XCJTdWJtaXQgYXBwbGljYXRpb25cIl0nKTtcclxuICAgIGU/LmNsaWNrKClcclxuICB9XHJcbiAgZ2V0Q3VycmVudFBhZ2VVcmwoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuICB9XHJcbiAgYXN5bmMgcmVzb2x2ZUVkdWNhdGlvbk9wZXJhdGlvbihlKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgKDAsIG8uc2VuZFRvQmFja2dyb3VuZCkoe1xyXG4gICAgICBuYW1lOiBcInJlc29sdmVBdXRvZmlsbE9wZXJhdGlvblwiLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgb3BlcmF0aW9uOiBlLFxyXG4gICAgICAgIHNvdXJjZTogXCJncmVlbmhvdXNlXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgZ2V0RWR1Y2F0aW9uUmVzb2x2ZVByZWZldGNoUnVsZXMoKSB7XHJcbiAgICBsZXQgZSA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24/Lmhvc3RuYW1lPy5zdGFydHNXaXRoKFxyXG4gICAgICBcImpvYi1ib2FyZHMuXCIpLFxyXG4gICAgICB0ID0gZSA/IChhd2FpdCBmLmdldEVkdVJ1bGUoITEsICEwKSk/LlswXSA6IGYuZ2V0RWR1Y2F0aW9uUnVsZXMoKT8uWzBdO1xyXG4gICAgcmV0dXJuICh0Py5jaGlsZHJlbiA/PyBbXSkubWFwKGUgPT4gKHtcclxuICAgICAgbGFiZWw6IGUubGFiZWxcclxuICAgIH0pKS5maWx0ZXIoZSA9PiAoMCwgdS5zaG91bGRSZXNvbHZlRWR1Y2F0aW9uTGFiZWwpKGUubGFiZWwpKVxyXG4gIH1cclxuICBzdGFydEVkdWNhdGlvblJlc29sdmVQcmVmZXRjaCgpIHtcclxuICAgICF0aGlzLmVkdWNhdGlvblJlc29sdmVQcmVmZXRjaFRhc2tNYXBQcm9taXNlICYmIEFycmF5LmlzQXJyYXkodGhpcy5hbnN3ZXI/LmVkdWNhdGlvbikgJiZcclxuICAgICAgMCAhPT0gdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uLmxlbmd0aCAmJiAodGhpcy5lZHVjYXRpb25SZXNvbHZlUHJlZmV0Y2hUYXNrTWFwUHJvbWlzZSA9IChcclxuICAgICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZSA9IGF3YWl0IHRoaXMuZ2V0RWR1Y2F0aW9uUmVzb2x2ZVByZWZldGNoUnVsZXMoKTtcclxuICAgICAgICAgICAgaWYgKDAgPT09IGUubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgIHJldHVybiAoMCwgdS5jcmVhdGVFZHVjYXRpb25SZWNvcmRSZXNvbHV0aW9uVGFza01hcCkoe1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRVcmw6IHRoaXMuZ2V0Q3VycmVudFBhZ2VVcmwoKSxcclxuICAgICAgICAgICAgICByZWNvcmRzOiB0aGlzLmFuc3dlci5lZHVjYXRpb24sXHJcbiAgICAgICAgICAgICAgcnVsZXM6IGUsXHJcbiAgICAgICAgICAgICAgcmVzb2x2ZU9wZXJhdGlvbjogZSA9PiB0aGlzLnJlc29sdmVFZHVjYXRpb25PcGVyYXRpb24oZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcIltHcmVlbmhvdXNlXSBGYWlsZWQgdG8gcHJlZmV0Y2ggZWR1Y2F0aW9uIG9wZXJhdGlvbnM6XCIsIGUpLFxyXG4gICAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKSlcclxuICB9XHJcbiAgYXN5bmMgZ2V0RWR1Y2F0aW9uUmVzb2x2ZVByZWZldGNoVGFza01hcCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVkdWNhdGlvblJlc29sdmVQcmVmZXRjaFRhc2tNYXBQcm9taXNlIHx8IHRoaXMuc3RhcnRFZHVjYXRpb25SZXNvbHZlUHJlZmV0Y2goKSxcclxuICAgICAgYXdhaXQgdGhpcy5lZHVjYXRpb25SZXNvbHZlUHJlZmV0Y2hUYXNrTWFwUHJvbWlzZSA/PyBbXVxyXG4gIH1cclxuICBhc3luYyBhcHBseUVkdWNhdGlvblJlc29sdmVQcmVmZXRjaEZvclJ1bGUoZSwgdCwgcikge1xyXG4gICAgaWYgKCEoMCwgdS5zaG91bGRSZXNvbHZlRWR1Y2F0aW9uTGFiZWwpKGUpKSByZXR1cm4gdDtcclxuICAgIGxldCBuID0gYXdhaXQgdGhpcy5nZXRFZHVjYXRpb25SZXNvbHZlUHJlZmV0Y2hUYXNrTWFwKCksXHJcbiAgICAgIG8gPSBuW3JdPy5bZV0sXHJcbiAgICAgIGkgPSBvID8gYXdhaXQgbyA6IG51bGw7XHJcbiAgICByZXR1cm4gdGhpcy5jYXB0dXJlRWR1Y2F0aW9uUmVzb2x2ZVRyYWNraW5nKGUsIHIsIGkpLCAoMCwgdVxyXG4gICAgICAuYXBwbHlQcmVmZXRjaGVkRWR1Y2F0aW9uUmVzb2x1dGlvbkZvckxhYmVsKSh7XHJcbiAgICAgIHJlY29yZDogdCxcclxuICAgICAgbGFiZWw6IGUsXHJcbiAgICAgIHByZWZldGNoZWRSZXNvbHV0aW9uOiBQcm9taXNlLnJlc29sdmUoaSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNhcHR1cmVFZHVjYXRpb25SZXNvbHZlVHJhY2tpbmcoZSwgdCwgcikge1xyXG4gICAgbGV0IG4gPSBTdHJpbmcoZSA/PyBcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmIChcInNjaG9vbFwiICE9PSBuICYmIFwiZGlzY2lwbGluZVwiICE9PSBuKSByZXR1cm47XHJcbiAgICBsZXQgbyA9IHtcclxuICAgICAgLi4udGhpcy5lZHVjYXRpb25SZXNvbHZlVHJhY2tpbmdSZWNvcmRzW3RdID8/IHt9XHJcbiAgICB9O1xyXG4gICAgXCJzY2hvb2xcIiA9PT0gbiA/IChvLnNjaG9vbCA9ICgwLCBkLmdldEdyZWVuaG91c2VSZXNvbHZlZEVkdWNhdGlvblZhbHVlKShyKSwgb1xyXG4gICAgICAuc2Nob29sUGF5bG9hZCA9ICgwLCBkLmdldEdyZWVuaG91c2VSZXNvbHZlT3BlcmF0aW9uUGF5bG9hZCkocikpIDogKG8uZGlzY2lwbGluZSA9ICgwLCBkXHJcbiAgICAgIC5nZXRHcmVlbmhvdXNlUmVzb2x2ZWRFZHVjYXRpb25WYWx1ZSkociksIG8uZGlzY2lwbGluZVBheWxvYWQgPSAoMCwgZFxyXG4gICAgICAuZ2V0R3JlZW5ob3VzZVJlc29sdmVPcGVyYXRpb25QYXlsb2FkKShyKSksIHRoaXMuZWR1Y2F0aW9uUmVzb2x2ZVRyYWNraW5nUmVjb3Jkc1t0XSA9IG9cclxuICB9XHJcbiAgY2FwdHVyZUxvY2F0aW9uUnVudGltZVZhbGlkYXRpb24oZSkge1xyXG4gICAgdGhpcy5sb2NhdGlvblJ1bnRpbWVWYWxpZGF0aW9uQ29udGV4dCA9IGVcclxuICB9XHJcbiAgYXN5bmMgY2FwdHVyZVJ1bnRpbWVWYWxpZGF0aW9uU25hcHNob3RzKGUpIHtcclxuICAgIGF3YWl0IHRoaXMuZ2V0QXV0b2ZpbGxTbmFwc2hvdChlKSwgdGhpcy5nZXRBZGRpdGlvbmFsQXV0b2ZpbGxTbmFwc2hvdERhdGEoZSlcclxuICB9XHJcbiAgaXNSdW50aW1lVmFsaWRhdGlvblJldHJ5Q2FuZGlkYXRlKGUpIHtcclxuICAgIHJldHVybiAoXCJtaXNtYXRjaGVkXCIgPT09IGUuc3RhdHVzIHx8IFwiZW1wdHlcIiA9PT0gZS5zdGF0dXMpICYmIGUuYXR0ZW1wdGVkQ2FuZGlkYXRlcy5sZW5ndGggPlxyXG4gICAgICAwXHJcbiAgfVxyXG4gIGZpbmRFZHVjYXRpb25WYWxpZGF0aW9uUnVsZShlKSB7XHJcbiAgICBpZiAoXCJudW1iZXJcIiAhPSB0eXBlb2YgZS5pbmRleCkgcmV0dXJuIG51bGw7XHJcbiAgICBsZXQgdCA9IHRoaXMubGFzdEVkdWNhdGlvblJ1bGVzW2UuaW5kZXhdLFxyXG4gICAgICByID0gQXJyYXkuaXNBcnJheSh0Py5jaGlsZHJlbikgPyB0LmNoaWxkcmVuIDogW107XHJcbiAgICByZXR1cm4gci5maW5kKHQgPT4ge1xyXG4gICAgICBsZXQgciA9IFN0cmluZyh0LmxhYmVsID8/IFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gciA9PT0gZS5maWVsZExhYmVsLnRvTG93ZXJDYXNlKClcclxuICAgIH0pID8/IG51bGxcclxuICB9XHJcbiAgZmluZExvY2F0aW9uVmFsaWRhdGlvblJ1bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZWRSdWxlcy5maW5kKGUgPT4gUihlKSkgPz8gbnVsbFxyXG4gIH1cclxuICBhc3luYyBjbGVhclJ1bnRpbWVWYWxpZGF0aW9uRmllbGQoZSkge1xyXG4gICAgaWYgKFwibG9jYXRpb25cIiA9PT0gZS5maWVsZFR5cGUpIHtcclxuICAgICAgbGV0IGUgPSB0aGlzLmZpbmRMb2NhdGlvblZhbGlkYXRpb25SdWxlKCk7XHJcbiAgICAgIHJldHVybiAoMCwgeC5jbGVhckdyZWVuaG91c2VBdXRvY29tcGxldGVGaWVsZCkoZSA/IEwoZSkgOiBudWxsKVxyXG4gICAgfVxyXG4gICAgbGV0IHQgPSB0aGlzLmZpbmRFZHVjYXRpb25WYWxpZGF0aW9uUnVsZShlKTtcclxuICAgIHJldHVybiAoMCwgeC5jbGVhckdyZWVuaG91c2VBdXRvY29tcGxldGVGaWVsZCkodD8uJGlucHV0ID8/IG51bGwpXHJcbiAgfVxyXG4gIGFzeW5jIHJlZmlsbFJ1bnRpbWVWYWxpZGF0aW9uRmllbGQoZSkge1xyXG4gICAgaWYgKFwibG9jYXRpb25cIiA9PT0gZS5maWVsZFR5cGUpIHtcclxuICAgICAgbGV0IHQgPSB0aGlzLmZpbmRMb2NhdGlvblZhbGlkYXRpb25SdWxlKCksXHJcbiAgICAgICAgciA9IHQgPyBMKHQpIDogbnVsbDtcclxuICAgICAgcmV0dXJuICEhdCAmJiAhIXIgJiYgKDAsIHguZmlsbEF1dG9jb21wbGV0ZUZpZWxkKSh7XHJcbiAgICAgICAgLi4udCxcclxuICAgICAgICAkaW5wdXQ6IHJcclxuICAgICAgfSwgZS5hdHRlbXB0ZWRDYW5kaWRhdGVzLCB7XHJcbiAgICAgICAgYWxsb3dQYXJ0aWFsTWF0Y2g6ICExXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsZXQgdCA9IHRoaXMuZmluZEVkdWNhdGlvblZhbGlkYXRpb25SdWxlKGUpO1xyXG4gICAgcmV0dXJuICEhdCAmJiB0LnR5cGUgPT09IHkuRklFTERfVFlQRS5TRUFSQ0ggJiYgKDAsIHguZmlsbEF1dG9jb21wbGV0ZUZpZWxkKSh0LCBlXHJcbiAgICAgIC5hdHRlbXB0ZWRDYW5kaWRhdGVzLCB7XHJcbiAgICAgICAgYWxsb3dQYXJ0aWFsTWF0Y2g6ICExXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGdldFZhbGlkYXRpb25TdGF0dXNGb3JSZXRyeVJlc3VsdChlKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMucnVudGltZVZhbGlkYXRpb25UcmFja2luZ0RhdGE/LnZhbGlkYXRpb247XHJcbiAgICByZXR1cm4gXCJsb2NhdGlvblwiID09PSBlLmZpZWxkVHlwZSA/IHQ/LmxvY2F0aW9uPy5zdGF0dXMgPz8gXCJcIiA6IFwibnVtYmVyXCIgIT0gdHlwZW9mIGUuaW5kZXggP1xyXG4gICAgICBcIlwiIDogdD8uZWR1Y2F0aW9uPy5bZS5pbmRleF0/LltlLmZpZWxkVHlwZV0/LnN0YXR1cyA/PyBcIlwiXHJcbiAgfVxyXG4gIGFzeW5jIHJldHJ5UnVudGltZVZhbGlkYXRpb25GYWlsdXJlcyhlKSB7XHJcbiAgICBhd2FpdCB0aGlzLmNhcHR1cmVSdW50aW1lVmFsaWRhdGlvblNuYXBzaG90cyhlKTtcclxuICAgIGxldCB0ID0gKDAsIG0uZ2V0R3JlZW5ob3VzZVJ1bnRpbWVWYWxpZGF0aW9uTG9nRW50cmllcykodGhpcy5ydW50aW1lVmFsaWRhdGlvblRyYWNraW5nRGF0YSlcclxuICAgICAgLmZpbHRlcihlID0+IHRoaXMuaXNSdW50aW1lVmFsaWRhdGlvblJldHJ5Q2FuZGlkYXRlKGUpKTtcclxuICAgIGlmICgwICE9PSB0Lmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBlIG9mICh0aGlzLnJ1bnRpbWVWYWxpZGF0aW9uUmV0cnlSZXN1bHRzID0gW10sIHQpKSBhd2FpdCB0aGlzXHJcbiAgICAgICAgLmNsZWFyUnVudGltZVZhbGlkYXRpb25GaWVsZChlKSwgYXdhaXQgdGhpcy5yZWZpbGxSdW50aW1lVmFsaWRhdGlvbkZpZWxkKGUpLCB0aGlzXHJcbiAgICAgICAgLnJ1bnRpbWVWYWxpZGF0aW9uUmV0cnlSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgLi4uXCJudW1iZXJcIiA9PSB0eXBlb2YgZS5pbmRleCA/IHtcclxuICAgICAgICAgICAgaW5kZXg6IGUuaW5kZXhcclxuICAgICAgICAgIH0gOiB7fSxcclxuICAgICAgICAgIGZpZWxkVHlwZTogZS5maWVsZFR5cGUsXHJcbiAgICAgICAgICBpbml0aWFsU3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgICAgIGluaXRpYWxDb21taXR0ZWRWYWx1ZTogZS5jb21taXR0ZWRWYWx1ZSxcclxuICAgICAgICAgIHJldHJ5Q291bnQ6IDEsXHJcbiAgICAgICAgICByZXNldEFwcGxpZWQ6ICExXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IHQgb2YgKGF3YWl0IHRoaXMuY2FwdHVyZVJ1bnRpbWVWYWxpZGF0aW9uU25hcHNob3RzKGUpLCB0aGlzXHJcbiAgICAgICAgICAucnVudGltZVZhbGlkYXRpb25SZXRyeVJlc3VsdHMpKSB7XHJcbiAgICAgICAgbGV0IGUgPSB0aGlzLmdldFZhbGlkYXRpb25TdGF0dXNGb3JSZXRyeVJlc3VsdCh0KTtcclxuICAgICAgICBpZiAoXCJyZXRyeV9tYXRjaGVkXCIgPT09IGUpIGNvbnRpbnVlO1xyXG4gICAgICAgIGxldCByID0gYXdhaXQgdGhpcy5jbGVhclJ1bnRpbWVWYWxpZGF0aW9uRmllbGQoe1xyXG4gICAgICAgICAgLi4uXCJudW1iZXJcIiA9PSB0eXBlb2YgdC5pbmRleCA/IHtcclxuICAgICAgICAgICAgaW5kZXg6IHQuaW5kZXhcclxuICAgICAgICAgIH0gOiB7fSxcclxuICAgICAgICAgIGZpZWxkVHlwZTogdC5maWVsZFR5cGUsXHJcbiAgICAgICAgICBmaWVsZExhYmVsOiBcImxvY2F0aW9uXCIgPT09IHQuZmllbGRUeXBlID8gdGhpcy5sb2NhdGlvblJ1bnRpbWVWYWxpZGF0aW9uQ29udGV4dFxyXG4gICAgICAgICAgICA/LmxhYmVsID8/IFwiTG9jYXRpb25cIiA6IFwic2Nob29sXCIgPT09IHQuZmllbGRUeXBlID8gXCJTY2hvb2xcIiA6IFwiRGlzY2lwbGluZVwiLFxyXG4gICAgICAgICAgbGV2ZWw6IFwid2FyblwiLFxyXG4gICAgICAgICAgc3RhdHVzOiB0LmluaXRpYWxTdGF0dXMsXHJcbiAgICAgICAgICBjb21taXR0ZWRWYWx1ZTogdC5pbml0aWFsQ29tbWl0dGVkVmFsdWUsXHJcbiAgICAgICAgICBhdHRlbXB0ZWRDYW5kaWRhdGVzOiBbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHQucmVzZXRBcHBsaWVkID0gclxyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHRoaXMuY2FwdHVyZVJ1bnRpbWVWYWxpZGF0aW9uU25hcHNob3RzKGUpLCAoMCwgZ1xyXG4gICAgICAgIC5zZW5kUnVudGltZVZhbGlkYXRpb25EZXZpYXRpb25FdmVudCkoe1xyXG4gICAgICAgIGZvcm1Vcmw6IHRoaXMuZ2V0Q3VycmVudFBhZ2VVcmwoKSxcclxuICAgICAgICBzb3VyY2U6IHRoaXMuZ2V0U2l0ZU5hbWUoKSxcclxuICAgICAgICB0cmFja2luZ0RhdGE6IHRoaXMucnVudGltZVZhbGlkYXRpb25UcmFja2luZ0RhdGFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVmcmVzaFJ1bnRpbWVWYWxpZGF0aW9uVHJhY2tpbmdEYXRhKCkge1xyXG4gICAgdGhpcy5ydW50aW1lVmFsaWRhdGlvblRyYWNraW5nRGF0YSA9ICgwLCBtLmJ1aWxkR3JlZW5ob3VzZVJ1bnRpbWVWYWxpZGF0aW9uVHJhY2tpbmdEYXRhKSh7XHJcbiAgICAgICAgZWR1Y2F0aW9uUmVjb3JkczogdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uID8/IFtdLFxyXG4gICAgICAgIGVkdWNhdGlvblNuYXBzaG90UmVjb3JkczogQXJyYXkuaXNBcnJheSh0aGlzLmxhc3RBZGRpdGlvbmFsQXV0b2ZpbGxEYXRhLmVkdWNhdGlvbikgP1xyXG4gICAgICAgICAgdGhpcy5sYXN0QWRkaXRpb25hbEF1dG9maWxsRGF0YS5lZHVjYXRpb24gOiBbXSxcclxuICAgICAgICBlZHVjYXRpb25SZXNvbHZlUmVjb3JkczogdGhpcy5lZHVjYXRpb25SZXNvbHZlVHJhY2tpbmdSZWNvcmRzLFxyXG4gICAgICAgIGF1dG9maWxsU25hcHNob3Q6IHRoaXMubGFzdEF1dG9maWxsU25hcHNob3QsXHJcbiAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb25SdW50aW1lVmFsaWRhdGlvbkNvbnRleHQsXHJcbiAgICAgICAgcmV0cnlSZXN1bHRzOiB0aGlzLnJ1bnRpbWVWYWxpZGF0aW9uUmV0cnlSZXN1bHRzXHJcbiAgICAgIH0pLCAoMCwgbS5nZXRHcmVlbmhvdXNlUnVudGltZVZhbGlkYXRpb25Mb2dFbnRyaWVzKSh0aGlzLnJ1bnRpbWVWYWxpZGF0aW9uVHJhY2tpbmdEYXRhKVxyXG4gICAgICAuZm9yRWFjaChlID0+IHtcclxuICAgICAgICBsZXQgdCA9IGBbR3JlZW5ob3VzZV0gJHtlLmZpZWxkTGFiZWx9IHZhbGlkYXRpb24gJHtlLnN0YXR1c31gLFxyXG4gICAgICAgICAgciA9IHtcclxuICAgICAgICAgICAgLi4uXCJudW1iZXJcIiA9PSB0eXBlb2YgZS5pbmRleCA/IHtcclxuICAgICAgICAgICAgICBpbmRleDogZS5pbmRleFxyXG4gICAgICAgICAgICB9IDoge30sXHJcbiAgICAgICAgICAgIGZpZWxkVHlwZTogZS5maWVsZFR5cGUsXHJcbiAgICAgICAgICAgIGNvbW1pdHRlZFZhbHVlOiBlLmNvbW1pdHRlZFZhbHVlLFxyXG4gICAgICAgICAgICBhdHRlbXB0ZWRDYW5kaWRhdGVzOiBlLmF0dGVtcHRlZENhbmRpZGF0ZXNcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgXCJpbmZvXCIgPT09IGUubGV2ZWwgPyBjb25zb2xlLmluZm8odCwgcikgOiBjb25zb2xlLndhcm4odCwgcilcclxuICAgICAgfSlcclxuICB9XHJcbiAgZW5zdXJlRWR1Y2F0aW9uVHJhY2VSdW5JZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVkdWNhdGlvblRyYWNlUnVuSWQgfHwgKHRoaXMuZWR1Y2F0aW9uVHJhY2VSdW5JZCA9ICgwLCBsXHJcbiAgICAgIC5jcmVhdGVFZHVjYXRpb25UcmFjZVJ1bklkKSgpKSwgdGhpcy5lZHVjYXRpb25UcmFjZVJ1bklkXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZW5ob3VzZS4wM2UzMTExNC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);