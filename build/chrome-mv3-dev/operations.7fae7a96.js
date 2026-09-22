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
})({"gWg2d":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ultipro\\operations.js",
    "bundleId": "6366a13e7fae7a96",
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
var j = z(require("1f48cdca0a37cc52"));
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

},{"1f48cdca0a37cc52":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"lkBqJ":[function(require,module,exports) {
/**
 * Parcel module id: k21zl
 * Resolved path: src/contents/sites/ultipro/operations.js
 * Dependencies:
 *   ../../methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ./rules -> e0jMO  =>  src/contents/sites/ultipro/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillUltiproTypeaheadField", ()=>j), n.export(r, "fillInputTextField", ()=>D), n.export(r, "fillDateField", ()=>P), n.export(r, "fillSelectField", ()=>O), n.export(r, "fillUltiproStateProvinceField", ()=>N), n.export(r, "openUltiproContactInformationEditor", ()=>Y), n.export(r, "cancelUltiproContactInformationEditor", ()=>z), n.export(r, "prefillUltiproCountry", ()=>V), n.export(r, "fillVisibleContactFieldsFromHiddenPrefill", ()=>X), n.export(r, "hasMeaningfulControlValue", ()=>Q), n.export(r, "getUltiproSavedExperienceRowsSignature", ()=>en), n.export(r, "getUltiproResumeParserStateSignature", ()=>ei), n.export(r, "isUltiproResumeParsing", ()=>el), n.export(r, "waitForUltiproResumeParsingToFinish", ()=>es), n.export(r, "waitForUltiproResumeParserFieldsToSettle", ()=>eu), n.export(r, "fillCheckboxField", ()=>ec), n.export(r, "fillCheckbox", ()=>ed), n.export(r, "fillMultiSelectField", ()=>ef), n.export(r, "getResumeUploadInput", ()=>em), n.export(r, "hasResumeUploadInput", ()=>eh), n.export(r, "hasSelectedUltiproResumeFile", ()=>eg), n.export(r, "uploadResume", ()=>eb), n.export(r, "fillSkills", ()=>ey), n.export(r, "fillBehaviorsAndMotivations", ()=>ev), n.export(r, "fillCertifications", ()=>ek), n.export(r, "fillLicenses", ()=>eT), n.export(r, "fillRace", ()=>eF), n.export(r, "addEducationSection", ()=>eI), n.export(r, "addEmploymentSection", ()=>ej);
var o = e("../../methods/choice-match"), i = e("~contents/methods/answer"), a = e("~contents/methods/dom"), l = e("~contents/methods/observer"), s = e("~core/enums"), u = e("~core/xpath"), c = e("~utils/delay"), d = e("./rules"), f = e("~utils/getTargetOrTimeout"), p = n.interopDefault(f);
let m = [
    {
        id: "Country",
        label: "Country"
    },
    {
        id: "AddressLine1",
        label: "Address 1"
    },
    {
        id: "AddressLine2",
        label: "Address 2"
    },
    {
        id: "City",
        label: "City"
    },
    {
        id: "State",
        label: "State / Province"
    },
    {
        id: "PostalCode",
        label: "Zip / Postal Code"
    }
], h = 6e4, g = 12e3, b = 5e3, y = 800, v = 100, w = 5e3, S = 5e3, E = 3e3, x = 500, C = 100, A = 5e3, k = 1e3;
function T(e1) {
    return e1.trim().replace(/\s+/g, " ").toLocaleLowerCase();
}
_c = T;
function F(e1) {
    let t = e1.trim();
    return t.length > 1 ? t.slice(0, -1) : t;
}
_c1 = F;
function I(e1) {
    let t = e1.closest(".twitter-typeahead")?.querySelector("[role='listbox']");
    return t ? Array.from(t.querySelectorAll(".tt-suggestion, [role='option']")).filter((e1)=>{
        let t = e1.getBoundingClientRect?.();
        return !t || t.width > 0 && t.height > 0;
    }) : [];
}
_c2 = I;
async function j(e1, t) {
    if (!e1 || !t.trim()) return !1;
    e1.focus(), e1.click();
    let r1 = F(t), n = Object.getPrototypeOf(e1), o = Object.getOwnPropertyDescriptor(n, "value")?.set;
    o?.call(e1, r1), e1.value = r1;
    let i = {
        bubbles: !0,
        cancelable: !0
    };
    e1.dispatchEvent(new KeyboardEvent("keydown", i)), e1.dispatchEvent(new KeyboardEvent("keyup", i)), e1.dispatchEvent(new Event("input", i));
    let a = await (0, l.waitForCondition)(()=>I(e1).length > 0, {
        timeout: k,
        observeTarget: e1.closest(".twitter-typeahead") ?? void 0
    });
    if (!a) return console.warn("[Ultipro][DegreeTypeahead] no visible candidates after input"), !1;
    let s = T(t), u = I(e1).filter((e1)=>T(e1.textContent || "") === s);
    if (1 !== u.length) return console.warn("[Ultipro][DegreeTypeahead] exact candidate was not unique", {
        matchCount: u.length
    }), !1;
    u[0].click(), await (0, c.delay)(50);
    let d = T(e1.value) === s;
    return console.info("[Ultipro][DegreeTypeahead] selection result", {
        committed: d
    }), d;
}
async function D(e1, t) {
    if (!e1 || !t) return !1;
    if ("UKG-DATE-INPUT-TEXT" === e1.tagName) return await _(e1, t);
    let r1 = e1;
    r1.focus(), r1.click(), await (0, c.delay)(50);
    let n = Object.getPrototypeOf(r1), o = Object.getOwnPropertyDescriptor(n, "value")?.set;
    o?.call(r1, t), r1.value = t;
    let i = {
        bubbles: !0,
        cancelable: !0
    };
    return r1.dispatchEvent(new KeyboardEvent("keydown", i)), r1.dispatchEvent(new KeyboardEvent("keyup", i)), r1.dispatchEvent(new Event("input", i)), r1.dispatchEvent(new Event("change", i)), r1.dispatchEvent(new Event("blur", i)), await (0, c.delay)(50), r1.value.trim() === t.trim();
}
_c3 = D;
async function P(e1, t) {
    return !!e1 && !!t && await _(e1, t);
}
_c4 = P;
async function _(e1, t) {
    let r1 = R(t);
    if (!r1) return console.warn("Invalid date format:", t), !1;
    let [n, o, i] = r1.split("/"), a = `${i}-${n}-${o}`, l = e1.closest('[data-automation="ukg-datepicker-input"]') || e1.closest("ukg-input");
    l && (l.value = a, l.setAttribute("value", a)), e1.value = a, e1.setAttribute("value", a), await (0, c.delay)(100);
    let s = (t)=>e1.querySelector(`input[aria-label="${t}"]`) || e1.shadowRoot?.querySelector(`input[aria-label="${t}"]`), u = s("Month"), d = s("Day"), f = s("Year");
    return u && d && f ? (await L(u, n), await (0, c.delay)(100), await L(d, o), await (0, c.delay)(100), await L(f, i), await (0, c.delay)(100), u.value === n && d.value === o && f.value === i) : (console.warn("ukg-date-input-text: sub-inputs not found, value set via component property only"), !0);
}
async function L(e1, t) {
    e1.focus(), e1.click(), await (0, c.delay)(50);
    let r1 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    r1 ? r1.call(e1, "") : e1.value = "", e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), await (0, c.delay)(30), r1 ? r1.call(e1, t) : e1.value = t, e1.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new FocusEvent("blur", {
        bubbles: !0,
        composed: !0
    })), await (0, c.delay)(80);
}
_c5 = L;
function R(e1) {
    if (!e1) return null;
    let t = e1.trim(), r1 = {
        jan: "01",
        january: "01",
        feb: "02",
        february: "02",
        mar: "03",
        march: "03",
        apr: "04",
        april: "04",
        may: "05",
        jun: "06",
        june: "06",
        jul: "07",
        july: "07",
        aug: "08",
        august: "08",
        sep: "09",
        sept: "09",
        september: "09",
        oct: "10",
        october: "10",
        nov: "11",
        november: "11",
        dec: "12",
        december: "12"
    }, n = t.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (n) {
        let [, e1, t, r1] = n;
        return `${t}/${r1}/${e1}`;
    }
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t)) return t;
    let o = t.match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (o) {
        let [, e1, t] = o, n = r1[e1.toLowerCase()];
        if (n) return `${n}/01/${t}`;
    }
    return null;
}
_c6 = R;
async function O(e1, t) {
    return !!e1 && !!t && (!!await M(e1, t) || (await (0, c.delay)(600), !!await M(e1, t) || (await (0, c.delay)(600), await M(e1, t))));
}
_c7 = O;
async function M(e1, t) {
    if (!e1 || !t) return !1;
    let r1 = async (t)=>{
        let r1 = Array.from(e1.options).indexOf(t);
        e1.selectedIndex = r1;
        let n = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "selectedIndex")?.set;
        n?.call(e1, r1), e1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, c.delay)(100);
    }, n = async ()=>{
        let n = t.trim().toLowerCase(), o = Array.from(e1.options), i = o.filter((e1)=>!e1.disabled && "" !== e1.text.trim() && !/^choose|please select/i.test(e1.text.trim()));
        for (let e1 of i){
            let t = e1.text?.trim().toLowerCase(), o = e1.title?.trim().toLowerCase(), i = e1.value?.trim().toLowerCase();
            if (t === n || o === n || i === n) return await r1(e1), !0;
        }
        return !1;
    };
    return await n();
}
_c8 = M;
async function N(e1, t, { timeoutMs: r1 = A, intervalMs: n = C, settleMs: o = x } = {}) {
    if (!e1 || !t) return !1;
    let i = $().find((e1)=>B(e1, t));
    if (!i) {
        console.info("[Ultipro][State / Province] waiting for Country-dependent live options", {
            initialOptionCount: e1.options.length
        });
        let o = document.querySelector("#OpportunityApply") ?? document.documentElement, a = await (0, l.waitForCondition)(()=>!!(i = $().find((e1)=>B(e1, t))), {
            timeout: r1,
            interval: n,
            observeTarget: o
        });
        if (!a || !i) return console.warn("[Ultipro][State / Province] fill skipped; reason=dependent-options-not-ready", {
            timeoutMs: r1
        }), !1;
    }
    if (!await M(i, t)) return !1;
    o > 0 && await (0, c.delay)(o);
    let a = $().find((e1)=>B(e1, t));
    if (!a) return console.warn("[Ultipro][State / Province] fill skipped; reason=settled-control-not-ready"), !1;
    let s = !q(a, t), u = !s || await M(a, t), d = u && q(a, t);
    return console.info("[Ultipro][State / Province] live fill result", {
        replacedControl: a !== e1,
        reattempted: s,
        committed: d
    }), d;
}
_c9 = N;
function $() {
    return Array.from(document.querySelectorAll("select#State")).filter(J);
}
function B(e1, t) {
    return Array.from(e1.options).some((e1)=>U(e1, t));
}
_c10 = B;
function q(e1, t) {
    return U(e1.options[e1.selectedIndex], t);
}
function U(e1, t) {
    let r1 = t.trim().toLowerCase();
    if (!e1 || !r1 || e1.disabled || !e1.text.trim() || /^choose|please select/i.test(e1.text.trim())) return !1;
    let n = e1.text.trim().toLowerCase(), i = e1.title.trim().toLowerCase(), a = e1.value.trim().toLowerCase();
    return (0, o.isExactChoiceMatch)(n, r1) || (0, o.isExactChoiceMatch)(i, r1) || (0, o.isExactChoiceMatch)(a, r1);
}
_c11 = U;
function H() {
    let e1 = Array.from(document.querySelectorAll('[data-automation="panel-title"]')).find((e1)=>e1.textContent?.trim() === "Contact Information");
    return e1?.closest("single-edit-panel") ?? null;
}
_c12 = H;
async function Y() {
    let e1 = H();
    if (!e1) return console.warn("[Ultipro][Contact Information] open failed; reason=panel-not-found"), !1;
    if (1 === W().length) return !0;
    let t = e1.querySelector('button[data-automation="primary-action-button"][aria-label="Edit Contact Information"]');
    if (!t || !J(t) || t.disabled) return console.warn("[Ultipro][Contact Information] open failed; reason=edit-button-not-ready"), !1;
    t.click();
    let r1 = await (0, l.waitForCondition)(()=>1 === W().length, {
        timeout: w,
        interval: C,
        observeTarget: e1
    });
    return console.info(`[Ultipro][Contact Information] open result; opened=${r1}`), r1;
}
_c13 = Y;
async function z() {
    let e1 = H();
    if (!e1) return !1;
    if (0 === W().length) return !0;
    let t = e1.querySelector('button[data-automation="cancel-button"]');
    if (!t || !J(t)) return console.warn("[Ultipro][Contact Information] cancel failed; reason=cancel-button-not-ready"), !1;
    t.click();
    let r1 = await (0, l.waitForCondition)(()=>0 === W().length, {
        timeout: w,
        interval: C,
        observeTarget: e1
    });
    return console.info(`[Ultipro][Contact Information] cancel result; cancelled=${r1}`), r1;
}
async function V(e1) {
    if (!e1?.trim()) return !1;
    let t = W();
    if (1 !== t.length && (console.info(`[Ultipro][Country] waiting for visible control; candidateCount=${t.length}`), await (0, l.waitForCondition)(()=>1 === W().length, {
        timeout: S,
        interval: C,
        observeTarget: document.documentElement
    }), t = W()), 1 !== t.length) return console.warn(`[Ultipro][Country] prefill skipped; reason=visible-country-control-count; candidateCount=${t.length}`), !1;
    let r1 = t[0], n = e1.trim(), o = Z(r1), i = o.toLowerCase() === n.toLowerCase(), a = G(), s = i || await O(r1, n), u = Z(r1), c = s && u.toLowerCase() === n.toLowerCase();
    if (!c) return console.warn("[Ultipro][Country] prefill failed", {
        requestedCountry: n,
        previousCountry: o,
        committedCountry: u
    }), !1;
    let d = await K(a, !i);
    return console.info("[Ultipro][Country] prefill committed", {
        requestedCountry: n,
        previousCountry: o,
        dependentFieldsChanged: d
    }), !0;
}
_c14 = V;
function W() {
    return Array.from(document.querySelectorAll("select#Country")).filter(J);
}
_c15 = W;
function G() {
    let e1 = Array.from(document.querySelectorAll("#CountryQuestions input,#CountryQuestions select,#CountryQuestions textarea,#ApplicationQuestions input,#ApplicationQuestions select,#ApplicationQuestions textarea,#Questions input,#Questions select,#Questions textarea,select#State option"));
    return e1.map((e1)=>e1 instanceof HTMLOptionElement ? `option:${e1.value}:${e1.textContent?.trim() ?? ""}` : [
            e1.tagName,
            e1.id,
            e1.getAttribute("name") ?? "",
            e1.getAttribute("type") ?? "",
            e1.getAttribute("data-automation") ?? ""
        ].join(":")).join("|");
}
_c16 = G;
async function K(e1, t) {
    let r1 = document.querySelector("#OpportunityApply") ?? document.documentElement, n = G() !== e1;
    t && !n && (n = await (0, l.waitForCondition)(()=>G() !== e1, {
        timeout: E,
        interval: C,
        observeTarget: r1
    }));
    let o = G(), i = Date.now();
    return await (0, l.waitForCondition)(()=>{
        let e1 = G();
        return e1 !== o ? (n = !0, o = e1, i = Date.now(), !1) : Date.now() - i >= x;
    }, {
        timeout: E + x,
        interval: C,
        observeTarget: r1
    }), n;
}
_c17 = K;
async function X() {
    let e1 = [];
    for (let t of m){
        let r1 = Array.from(document.querySelectorAll(`#${CSS.escape(t.id)}`)), n = r1.find(J);
        if (!n || Q(n)) continue;
        let o = r1.filter((e1)=>e1 !== n && !J(e1)).map(Z).find((e1)=>ee(e1));
        if (!o) continue;
        let i = n instanceof HTMLSelectElement ? await O(n, o) : await D(n, o);
        i && e1.push(t.label);
    }
    return e1;
}
_c18 = X;
function J(e1) {
    let t = window.getComputedStyle(e1), r1 = e1.getBoundingClientRect();
    return "none" !== t.display && "hidden" !== t.visibility && r1.width > 0 && r1.height > 0;
}
_c19 = J;
function Q(e1) {
    return ee(Z(e1));
}
_c20 = Q;
function Z(e1) {
    if (e1 instanceof HTMLSelectElement) {
        let t = e1;
        return t.options[t.selectedIndex]?.textContent?.trim() || "";
    }
    return (e1.value || "").trim();
}
_c21 = Z;
function ee(e1) {
    return !!e1 && !/^choose|please select/i.test(e1.trim());
}
function et(e1) {
    if (!(e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement || e1 instanceof HTMLSelectElement) || e1.disabled) return !1;
    if (e1 instanceof HTMLInputElement) {
        let t = (e1.type || "text").toLowerCase();
        return [
            "text",
            "email",
            "tel",
            "search",
            "url",
            "number",
            "date"
        ].includes(t);
    }
    return !0;
}
let er = "#WorkExperienceSection ul.listtype > li.row, #WorkExperienceSection ul.listtype > li[data-automation='panel-list-item'], #EducationSection ul.listtype > li.row, #EducationSection ul.listtype > li[data-automation='panel-list-item'], #ResumeParsingUploader [data-automation='work-experience-item'], #ResumeParsingUploader [data-automation='education-panel']";
function en() {
    return Array.from(document.querySelectorAll(er)).map((e1, t)=>[
            "row",
            t,
            e1.querySelector("strong")?.textContent?.trim() || Array.from(e1.querySelectorAll("input, textarea, select")).map((e1)=>e1.value?.trim() || "").filter(Boolean).join("|") || e1.textContent?.trim() || ""
        ].join(":")).join("\n");
}
function eo() {
    return Array.from(document.querySelectorAll("#ResumeParsingUploader [data-automation='work-experience-item'], #ResumeParsingUploader [data-automation='education-panel']")).some((e1)=>!(0, d.isElementHidden)(e1));
}
function ei() {
    let e1 = Array.from(document.querySelectorAll("input, textarea, select")).filter(et).map((e1)=>[
            "field",
            e1.tagName,
            e1.id,
            e1.getAttribute("name") || "",
            e1.value || ""
        ].join(":")), t = en();
    return [
        ...e1,
        t
    ].filter(Boolean).join("\n");
}
function ea() {
    let e1 = Array.from(document.querySelectorAll("[data-bind]")).filter((e1)=>{
        let t = e1.getAttribute("data-bind") || "";
        return t.includes("isParsingResume") && t.includes("visible");
    });
    return e1.find((e1)=>!!e1.querySelector("#EducationSection") || !!e1.querySelector("#WorkExperienceSection")) ?? null;
}
function el() {
    let e1 = ea();
    return !(!e1 || eo()) && (0, d.isElementHidden)(e1);
}
async function es(e1 = {}) {
    let t;
    let r1 = e1.timeoutMs ?? h, n = ea(), o = document.documentElement ?? n ?? void 0, i = e1.intervalMs ?? v, a = void 0 !== e1.initialSignature;
    if (!a && !n) return !0;
    if (a) {
        let r1 = await (0, l.waitForCondition)(()=>{
            let r1 = ea();
            return r1 && (0, d.isElementHidden)(r1) ? (t = "parsing-state", !0) : void 0 !== e1.initialSavedRowsSignature && en() !== e1.initialSavedRowsSignature && (t = "saved-rows", !0);
        }, {
            timeout: e1.startTimeoutMs ?? g,
            interval: i,
            observeTarget: o
        });
        if (!r1) return console.warn("[Ultipro] resume parser did not start before timeout; structured experience fill will be skipped", {
            hasParsingBinding: !!n
        }), !1;
        console.log("[Ultipro] resume parser cycle started", {
            reason: t,
            hasParsingBinding: !!n
        });
    }
    let s = ()=>{
        if (eo()) return !0;
        let e1 = ea();
        return !n || !!e1 && !(0, d.isElementHidden)(e1);
    }, u = !!s() || await (0, l.waitForCondition)(s, {
        timeout: r1,
        interval: i,
        observeTarget: o
    });
    if (!u) return console.warn("[uploadResume] Timed out waiting for UKG isParsingResume() to clear"), !1;
    if (a) {
        let r1 = await eu(e1.initialSignature, {
            stableMs: e1.stableMs,
            intervalMs: i
        });
        if (!r1) return !1;
        console.log("[Ultipro] resume parser cycle completed", {
            reason: t,
            hasParsingBinding: !!n
        });
    }
    return !0;
}
async function eu(e1, t = {}) {
    let r1 = t.changeTimeoutMs ?? g, n = t.stableMs ?? y, o = t.intervalMs ?? v, i = t.noChangeTimeoutMs ?? b, a = Date.now(), l = e1, s = Date.now(), u = !1;
    for(; Date.now() - a < r1;){
        let e1 = ei(), t = el();
        if (e1 !== l) l = e1, s = Date.now(), u = !0;
        else if (u && !t && Date.now() - s >= n) return !0;
        else if (!u && !t && Date.now() - a >= i) return !0;
        await (0, c.delay)(o);
    }
    return console.warn("[uploadResume] Timed out waiting for Ultipro parser field rewrite"), !1;
}
async function ec(e1, t) {
    let r1 = Array.isArray(t) ? t[0] : t, n = String(r1).trim().toLowerCase(), o = e1.$checkboxs || [];
    if (0 === o.length) {
        let t = e1.$input;
        if (t && "checkbox" === t.type) {
            let e1 = [
                "true",
                "yes",
                "1"
            ].includes(n);
            await ed(t, e1);
        }
        return;
    }
    for (let e1 of o){
        let t = e1.value?.toLowerCase() || "", r1 = e1.nextElementSibling?.textContent?.trim().toLowerCase() || "";
        if (t === n || r1 === n) {
            e1.click(), await (0, c.delay)(100);
            return;
        }
    }
    console.warn("No matching radio found for value:", r1);
}
async function ed(e1, t) {
    e1.checked !== t && (e1.click(), await (0, c.delay)(100));
}
async function ef(e1, t) {
    let r1 = e1.$input;
    if (!r1) return;
    let n = Array.isArray(t) ? t[0] : t;
    await O(r1, n), await (0, c.delay)(200);
    let o = r1.parentElement?.querySelector("div.checkbox label"), i = o?.querySelector("span:not(.sr-only)"), a = i?.textContent?.trim() || "";
    if (!a) return;
    let l = r1.parentElement?.querySelector("div.checkbox input[type='checkbox']");
    if (!l) return;
    let s = r1.options[r1.selectedIndex]?.text?.trim().toLowerCase() || "", u = Array.isArray(t) ? t : [
        t
    ], d = u.some((e1)=>s === String(e1).trim().toLowerCase());
    d || (await ed(l, !0), await (0, c.delay)(200));
}
let ep = "#ResumeParsingUploader input[type='file'], #section-header-resumeParsingUploader input[type='file'], [data-automation='resumeparsinguploader-container'] input[type='file']";
function em() {
    return document.querySelector(ep) || (0, u.getFirstOrderedNode)("//*[@id='ResumeParsingUploader' or @data-automation='resumeparsinguploader-container' or @id='section-header-resumeParsingUploader']//input[@type='file']");
}
function eh() {
    return !!em();
}
function eg() {
    let e1 = em();
    return !!(e1?.files?.length || e1?.value);
}
async function eb(e1, t, r1) {
    let n = em();
    if (!n) return console.warn("Resume input not found"), !1;
    let o = ei(), l = en(), s = await (0, i.fetchPdfAsBlob)(e1);
    return await (0, a.uploadFiles)(n, s, t, r1, "Resume/CV"), await (0, p.default)(()=>document.querySelector(".upload-complete"), ()=>!1, 5), await es({
        initialSignature: o,
        initialSavedRowsSignature: l
    });
}
async function ey(e1, t) {
    let r1 = e1.map((e1)=>String(e1 ?? "").trim()).filter((e1)=>e1.length > 0);
    if (!r1.length) return !1;
    let n = document.querySelector("#CandidateSkills");
    if (!n) return !1;
    let o = n.querySelector('button[data-automation="primary-action-button"]');
    if (!o) return !1;
    o.click(), await (0, c.delay)(300);
    let i = ()=>new Set(Array.from(n.querySelectorAll('div[data-automation="selected-item"] strong[data-automation="skill-label"]')).map((e1)=>e1.textContent?.trim().toLowerCase() || "").filter(Boolean)), a = i(), l = n.querySelector("input[type='text'][aria-label='Skills']");
    if (!l) return console.warn("[Ultipro][Skills] scoped input unavailable", {
        requestedCount: r1.length
    }), !1;
    for (let e1 of (console.info("[Ultipro][Skills] fill started", {
        requestedCount: r1.length,
        existingCount: a.size,
        scopedInput: !0
    }), r1)){
        let t = e1.toLowerCase();
        if (a.has(t)) continue;
        await D(l, e1), await (0, c.delay)(100);
        let r1 = l.closest("div.form-inline")?.querySelector("button");
        r1?.click(), await (0, c.delay)(100), a = i();
    }
    let s = r1.filter((e1)=>!a.has(e1.toLowerCase())).length;
    if (s > 0) return console.warn("[Ultipro][Skills] tag commit incomplete", {
        requestedCount: r1.length,
        committedCount: r1.length - s,
        missingCount: s
    }), !1;
    await (0, c.delay)(200);
    let u = n.querySelector('button[data-automation="save-button"]');
    return u ? (u.click(), t("Skills"), console.info("[Ultipro][Skills] fill completed", {
        requestedCount: r1.length,
        committedCount: r1.length
    }), await (0, c.delay)(600), !0) : (console.warn("[Ultipro][Skills] save button unavailable", {
        requestedCount: r1.length
    }), !1);
}
async function ev(e1, t) {
    let r1 = ew(t);
    if (!r1 || 0 === r1.length) return;
    let n = e1.$input;
    if (!n) return;
    let i = ()=>{
        let e1 = n.querySelectorAll('ul.listtype > li[data-automation="selected-item"]');
        return Array.from(e1).map((e1)=>(e1.querySelector("strong")?.textContent || e1.textContent || "").trim().toLowerCase()).filter(Boolean);
    }, a = i(), l = r1.map((e1)=>e1.trim().toLowerCase()), s = a.length === l.length && l.every((e1)=>a.includes(e1));
    if (s) return;
    let u = n.querySelector('button[data-automation="primary-action-button"]');
    if (!u) {
        console.warn(`Edit button not found for ${e1.label}`);
        return;
    }
    u.click(), await (0, c.delay)(300);
    let d = Array.from(n.querySelectorAll('ul.listtype > li[data-automation="selected-item"]'));
    for (let e1 of d){
        let t = e1.querySelector('button[data-automation="item-remove-button"], button[aria-label*="emove" i], button.close, button[type="button"].btn-link');
        t && (t.click(), await (0, c.delay)(200));
    }
    let f = n.querySelector("select");
    if (!f) {
        console.warn(`Select element not found for ${e1.label}`);
        return;
    }
    for (let t of r1){
        await O(f, t), await (0, c.delay)(200);
        let r1 = f.options[f.selectedIndex]?.text?.trim() || "", i = (0, o.isExactChoiceMatch)(r1, t);
        if (!i) {
            console.warn(`[${e1.label}] \u5339\u914d\u5931\u8d25\uff0c\u8df3\u8fc7 "${t}"\uff08\u5f53\u524d\u9009\u4e2d "${r1}"\uff09`);
            continue;
        }
        let a = n.querySelector('button[data-automation="item-add-button"]');
        a ? (a.click(), await (0, c.delay)(400)) : console.warn(`Add button not found for ${e1.label}`);
    }
    let p = n.querySelector('button[data-automation="save-button"]');
    p ? p.click() : console.warn(`Save button not found for ${e1.label}`), await (0, c.delay)(300);
}
function ew(e1) {
    if (!e1?.length) return [];
    let t = [];
    return (t = "object" == typeof e1[0] && null !== e1[0] && "label" in e1[0] ? e1.map((e1)=>e1.label) : e1).filter((e1)=>e1 && "" !== e1.trim());
}
function eS(e1, t) {
    let r1 = 'ul.listtype > li[data-automation="selected-item"], ul.listtype > li[data-automation="panel-list-item"], ul.listtype > li.row', n = e1.querySelectorAll(r1);
    return (n?.length ?? 0) === 0;
}
function eE(e1, t) {
    if (null == t || "string" != typeof t) return "";
    let r1 = t.replace(/^license/i, ""), n = t.replace(/^link/i, "");
    return e1[t] ?? e1[r1] ?? e1[n] ?? ("Link Title" === n ? e1.LinkTitle : void 0) ?? "";
}
function ex(e1, t, r1) {
    let n = e1.filter((e1)=>e1.type === s.FIELD_TYPE.TEXT && e1.required);
    if (0 === n.length) return !0;
    for (let e1 of n){
        let n = e1.label, o = eE(t, n), i = null != o ? String(o).trim() : "";
        if (!i) return console.warn(`${r1}: \u7f3a\u5c11\u5fc5\u586b\u6570\u636e "${n}"\uff0c\u4e0d\u6253\u5f00\u5f39\u6846\uff08\u5fc5\u586b\u9879\u5168\u90e8\u90fd\u6709\u624d\u6253\u5f00\uff09`), !1;
    }
    return !0;
}
function eC(e1) {
    let t = e1.querySelector("div.form-group") ?? e1, r1 = t.querySelector("label"), n = r1?.textContent?.trim() ?? "";
    if (!n) {
        let e1 = t.querySelector("input, select, textarea, ukg-date-input-text"), r1 = e1?.getAttribute("aria-label")?.trim();
        r1 && (n = r1);
    }
    if (!n) return null;
    let o = r1?.getAttribute("for") ?? "", i = null;
    return (o && (i = t.querySelector(`input#${CSS.escape(o)}, textarea#${CSS.escape(o)}`)), i || (i = t.querySelector("ukg-date-input-text")), i || (i = t.querySelector("input[type='text'], textarea")), i) ? {
        labelText: n,
        input: i
    } : null;
}
function eA(e1, t) {
    for (let r1 of e1)r1.type === s.FIELD_TYPE.TEXT && r1.label && t(r1.label);
}
async function ek(e1, t, r1, n) {
    let o = "#LicensesAndCertificationsSection", i = "Certifications";
    if (!e1 || 0 === e1.length) return;
    if (!t) {
        eA(e1, n);
        return;
    }
    let a = document.querySelector(o);
    if (!a) {
        console.warn(`${i} section not found: ${o}`), eA(e1, n);
        return;
    }
    let l = eS(a, o);
    if (!l) {
        eA(e1, r1);
        return;
    }
    let d = ex(e1, t, i);
    if (!d) {
        eA(e1, n);
        return;
    }
    let f = a.querySelector('button[data-automation="primary-action-button"]');
    if (!f) {
        let e1 = o.replace("#", "");
        f = (0, u.getFirstOrderedNode)(`//*[@id='${e1}']//button[@data-automation='primary-action-button']`);
    }
    if (!f) {
        console.warn(`Add button not found for ${i}\uff0csectionId=${o}`), eA(e1, n);
        return;
    }
    f.click(), await (0, c.delay)(300);
    let p = new Map, m = o.replace("#", ""), h = "//*[@id='LicensesAndCertificationsSection']//div[contains(@class, 'col-md-16') or contains(@class, 'col-md-8')]", g = (0, u.getOrderedNodes)(h);
    for (let e1 of g){
        let t = e1.closest("div.collapse");
        if (t && !t.classList.contains("in")) continue;
        let r1 = eC(e1);
        if (!r1) continue;
        let { labelText: n, input: o } = r1;
        p.set(n, o), n.toLowerCase().includes("license") || p.set("license" + n, o);
    }
    let b = new Set;
    for (let r1 of e1){
        if (r1.type !== s.FIELD_TYPE.TEXT) continue;
        let e1 = r1.label, n = eE(t, e1), o = null != n ? String(n).trim() : "";
        if (!o) continue;
        let i = p.get(e1);
        if (i) {
            let t = await D(i, o);
            t && b.add(e1), await (0, c.delay)(100);
        }
    }
    let y = a.querySelector('button[data-automation="save-button"]');
    y || (y = (0, u.getFirstOrderedNode)(`//*[@id='${m}']//button[@data-automation='save-button']`)), y ? (y.click(), await (0, c.delay)(300), eA(e1, (e1)=>b.has(e1) ? r1(e1) : n(e1))) : (console.warn(`${i}: \u672a\u627e\u5230\u4fdd\u5b58\u6309\u94ae\uff0cdata-automation='save-button'`), eA(e1, n));
}
async function eT(e1, t, r1, n) {
    let o = "#CandidateLinkEdit", i = "Links";
    if (!e1 || 0 === e1.length) return;
    if (!t) {
        eA(e1, n);
        return;
    }
    let a = document.querySelector(o);
    if (!a) {
        console.warn(`${i} section not found: ${o}`), eA(e1, n);
        return;
    }
    let l = eS(a, o);
    if (!l) {
        eA(e1, r1);
        return;
    }
    let d = ex(e1, t, i);
    if (!d) {
        eA(e1, n);
        return;
    }
    let f = (0, u.getFirstOrderedNode)("//*[@id='CandidateLinkEdit']//button[@data-automation='primary-action-button' and not(contains(@style, 'display: none'))]");
    if (!f) {
        console.warn(`Add button not found for ${i}`), eA(e1, n);
        return;
    }
    f.click(), await (0, c.delay)(300);
    let p = new Map, m = o.replace("#", ""), h = "//*[@id='CandidateLinkEdit']//div[contains(@class, 'col-sm-14') or contains(@class, 'col-sm-10')]", g = (0, u.getOrderedNodes)(h);
    for (let e1 of g){
        let t = eC(e1);
        if (!t) continue;
        let { labelText: r1, input: n } = t;
        p.set(r1, n), r1.toLowerCase().includes("link") || p.set("link" + r1, n);
    }
    let b = new Set;
    for (let r1 of e1){
        if (r1.type !== s.FIELD_TYPE.TEXT) continue;
        let e1 = r1.label, n = eE(t, e1), o = null != n ? String(n).trim() : "";
        if (!o) continue;
        let i = p.get(e1);
        if (i) {
            let t = await D(i, o);
            t && b.add(e1), await (0, c.delay)(100);
        }
    }
    let y = a.querySelector('button[data-automation="save-button"]');
    y || (y = (0, u.getFirstOrderedNode)(`//*[@id='${m}']//button[@data-automation='save-button']`)), y ? (y.click(), await (0, c.delay)(300), eA(e1, (e1)=>b.has(e1) ? r1(e1) : n(e1))) : (console.warn(`${i}: \u672a\u627e\u5230\u4fdd\u5b58\u6309\u94ae\uff0cdata-automation='save-button'`), eA(e1, n));
}
async function eF(e1) {
    let t = document.querySelector('select#Race[name="Race"]');
    t && e1 && (await O(t, e1), await (0, c.delay)(200));
}
async function eI(e1) {
    let t = document.querySelector("#EducationSection");
    if (!t) return;
    let r1 = t.querySelector('collapsible-panel-button > button[data-automation="primary-action-button"]');
    if (r1) for(let n = 0; n < e1; n++){
        r1.click(), await (0, c.delay)(300);
        let e1 = t.querySelector('button[data-automation="cancel-button"]');
        e1?.click(), await (0, c.delay)(200);
    }
}
async function ej(e1) {
    let t = document.querySelector("#WorkExperienceSection");
    if (!t) return;
    let r1 = t.querySelector('collapsible-panel-button > button[data-automation="primary-action-button"]');
    if (r1) for(let n = 0; n < e1; n++){
        r1.click(), await (0, c.delay)(300);
        let e1 = t.querySelector('button[data-automation="cancel-button"]');
        e1?.click(), await (0, c.delay)(200);
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21;
$RefreshReg$(_c, "T");
$RefreshReg$(_c1, "F");
$RefreshReg$(_c2, "I");
$RefreshReg$(_c3, "D");
$RefreshReg$(_c4, "P");
$RefreshReg$(_c5, "L");
$RefreshReg$(_c6, "R");
$RefreshReg$(_c7, "O");
$RefreshReg$(_c8, "M");
$RefreshReg$(_c9, "N");
$RefreshReg$(_c10, "B");
$RefreshReg$(_c11, "U");
$RefreshReg$(_c12, "H");
$RefreshReg$(_c13, "Y");
$RefreshReg$(_c14, "V");
$RefreshReg$(_c15, "W");
$RefreshReg$(_c16, "G");
$RefreshReg$(_c17, "K");
$RefreshReg$(_c18, "X");
$RefreshReg$(_c19, "J");
$RefreshReg$(_c20, "Q");
$RefreshReg$(_c21, "Z");

},{}]},["gWg2d","lkBqJ"], "lkBqJ", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFnQixLQUFLO1FBQUM7UUFBRTtLQUFFLEdBQUUsQ0FBQyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFNBQVEsQ0FBQSxFQUFFLGVBQWUsS0FBSztRQUFDO1FBQUU7S0FBRSxHQUFFLENBQUMsQ0FBQSxJQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBQyxTQUFRLENBQUMsRUFBQyxHQUFDO0lBQUUsT0FBTyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQU8sUUFBTSxPQUFPLFdBQVMsS0FBSSxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUU7UUFBSyxJQUFJLElBQUUsU0FBUyxjQUFjO1FBQVUsRUFBRSxNQUFJLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUMsRUFBRSxpQkFBZSxjQUFhLENBQUEsRUFBRSxPQUFLLFFBQU8sR0FBRyxFQUFFLGlCQUFpQixRQUFPLElBQUksRUFBRSxLQUFJLEVBQUUsaUJBQWlCLFNBQVEsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUksU0FBUyxNQUFNLFlBQVk7SUFBRTtBQUFFO0FBQUMsZUFBZSxFQUFFLENBQUM7SUFBRSxPQUFPLGtCQUFnQixPQUFPLE9BQU8sT0FBTSxFQUFFLFFBQVEsQ0FBQTtRQUFJLEVBQUUsTUFBSSxFQUFFLFFBQVEsT0FBTywrQkFBNkIsbUJBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDO0lBQUU7SUFBRyxJQUFJLElBQUUsTUFBTSxRQUFRLElBQUksRUFBRSxJQUFJO0lBQUssSUFBRztRQUFDLEVBQUUsUUFBUSxTQUFTLENBQUM7WUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1FBQUU7SUFBRSxTQUFRO1FBQUMsT0FBTyxPQUFPLGlCQUFnQixLQUFHLEVBQUUsUUFBUSxDQUFBO1lBQUksS0FBRyxTQUFTLE1BQU0sWUFBWTtRQUFFO0lBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUU7SUFBWSxFQUFFLFNBQU87UUFBVyxFQUFFLGVBQWEsUUFBTSxFQUFFLFdBQVcsWUFBWTtJQUFFLEdBQUUsRUFBRSxhQUFhLFFBQU8sRUFBRSxhQUFhLFFBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxHQUFDLE1BQUksS0FBSyxRQUFPLEVBQUUsV0FBVyxhQUFhLEdBQUUsRUFBRTtBQUFZO0FBQUMsSUFBSSxJQUFFO0FBQUssU0FBUztJQUFLLEtBQUksQ0FBQSxJQUFFLFdBQVc7UUFBVyxJQUFJLElBQUUsU0FBUyxpQkFBaUI7UUFBMEIsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxTQUFRLElBQUUsS0FBSSxJQUFFLE1BQUksY0FBWSxJQUFJLE9BQU8sbURBQWlELEtBQUssS0FBSyxLQUFHLEVBQUUsUUFBUSxJQUFFLE1BQUk7WUFBSyxnQkFBZ0IsS0FBSyxNQUFJLEVBQUUsUUFBUSxTQUFTLFlBQVUsS0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUFDO1FBQUMsSUFBRTtJQUFJLEdBQUUsR0FBRTtBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLEdBQUU7UUFBQyxJQUFHLEVBQUUsU0FBTyxPQUFNO2FBQVUsSUFBRyxFQUFFLFNBQU8sTUFBSztZQUFDLElBQUksSUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLGNBQWM7WUFBQyxJQUFHLEdBQUU7Z0JBQUMsSUFBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUM7b0JBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDO3dCQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTt3QkFBQyxFQUFFLE9BQU8sT0FBTyxNQUFLLEdBQUcsV0FBUyxLQUFHLEVBQUUsT0FBTyxPQUFPLE1BQUs7b0JBQUU7Z0JBQUM7Z0JBQUMsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsR0FBRztnQkFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUM7b0JBQUM7b0JBQUU7aUJBQUU7WUFBQSxPQUFNLEVBQUUsVUFBUSxFQUFFLEVBQUUsUUFBTztRQUFFO0lBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQVEsSUFBRztRQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQztZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7WUFBQyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxPQUFPLE1BQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFTLEtBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsUUFBUSxDQUFBO2dCQUFJLEVBQUUsT0FBTyxPQUFPLE1BQUs7WUFBRTtRQUFFLE9BQU0sRUFBRSxVQUFRLEVBQUUsRUFBRSxRQUFPOztBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFFLEtBQUcsRUFBRSxPQUFNLENBQUEsRUFBRSxJQUFJLE9BQUssRUFBRSxPQUFPLENBQUMsRUFBRSxBQUFELEdBQUcsS0FBRyxFQUFFLE9BQUssRUFBRSxJQUFJLGtCQUFrQixVQUFRLEVBQUUsSUFBSSxrQkFBa0IsUUFBUSxTQUFTLENBQUM7UUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFBQyxJQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsRUFBRTtJQUFHLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsSUFBRyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFFBQU87UUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSztRQUFHLEVBQUUsSUFBSSxpQkFBaUIsUUFBUSxTQUFTLENBQUM7WUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO1lBQUcsS0FBRyxFQUFFLFVBQVMsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUUsRUFBRTtnQkFBSSxFQUFFLEdBQUU7WUFBRSxJQUFHLEVBQUUsZUFBZSxLQUFLLE1BQU0sRUFBRSxnQkFBZSxFQUFDO1FBQUU7SUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLElBQUUsR0FBRztJQUFFLElBQUksSUFBRTtJQUFJLE9BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBUSxTQUFTLGFBQVcsWUFBVSxDQUFDLDhCQUE4QixLQUFLLEtBQUcsUUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxHQUFHLENBQUM7SUFBRSxPQUFPLEVBQUUsV0FBUyxZQUFVLEVBQUUsOEJBQTRCLEVBQUU7QUFBUTtBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsSUFBRyxPQUFPLFdBQVcsWUFBVSxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVTtJQUFNLE9BQU8sRUFBRSxpQkFBaUIsV0FBVSxlQUFlLENBQUM7UUFBRSxJQUFJLElBQUUsS0FBSyxNQUFNLEVBQUU7UUFBTSxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sRUFBRSxFQUFFLFNBQVEsRUFBRSxTQUFPLFNBQVEsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEtBQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxhQUFXLEVBQUU7WUFBTSxFQUFFLDhCQUE0QixFQUFFLFVBQVEsQ0FBQztBQUN4M0wsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNoQixDQUFDO1FBQUU7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVEsS0FBSSxFQUFFLGlCQUFpQixRQUFPO1FBQUssRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRO1FBQUssRUFBRSxDQUFDLG9FQUFvRSxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRztBQUFDO0FBQUMsSUFBSSxJQUFFLEVBQUUsUUFBUTtBQUEwQixlQUFlO0lBQUksRUFBRSxRQUFRLHFCQUFxQixTQUFRLE9BQU8sZUFBYSxZQUFXLEdBQUUsT0FBTyxlQUFhO1FBQVcsT0FBTyxTQUFTLENBQUM7WUFBRSxPQUFPO1FBQUM7SUFBQztBQUFDO0FBQUMsSUFBSSxLQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUUsSUFBRSxPQUFPLE9BQU87QUFBTyxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsaUJBQWdCO0lBQUMsSUFBRztRQUFDLElBQUUsR0FBRyxRQUFRLFFBQVE7WUFBQyxNQUFLO1FBQUUsSUFBRyxFQUFFLGFBQWEsWUFBWTtZQUFLO1FBQUcsSUFBRyxFQUFFLFdBQVMsRUFBRSxVQUFVLFlBQVk7WUFBSztRQUFHO0lBQUUsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFO0lBQUU7SUFBQyxFQUFFLE9BQU07UUFBSSxJQUFHLEVBQUUsaUNBQWdDLEVBQUUsU0FBUTtZQUFDO1lBQUksSUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFBLElBQUcsRUFBRSxZQUFVLEVBQUU7WUFBUyxJQUFHLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxTQUFPLFNBQU8sRUFBRSxTQUFPLFFBQU0sRUFBRSxPQUFPLE9BQU8sTUFBSyxFQUFFLElBQUcsRUFBRSxnQkFBZSxJQUFHO2dCQUFDLE1BQU0sRUFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQztnQkFBRSxLQUFJLElBQUcsQ0FBQyxHQUFFLEVBQUUsSUFBRyxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFHLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUE7Z0JBQUcsSUFBSSxJQUFFLENBQUM7Z0JBQUUsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsZUFBZSxRQUFPLElBQUk7b0JBQUMsSUFBRyxDQUFDLEdBQUUsRUFBRSxHQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxDQUFBLEVBQUUsR0FBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFBO2dCQUFFO1lBQUMsRUFBQyxPQUFNLEdBQUU7Z0JBQUMsRUFBRSxZQUFVLFVBQVMsQ0FBQSxRQUFRLE1BQU0sSUFBRyxNQUFNLEtBQUssVUFBVSxHQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFBRTtRQUFDLE9BQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUU7WUFBSyxFQUFFLGtCQUFpQjtnQkFBQyxlQUFjO1lBQUMsSUFBRyxLQUFHLEVBQUUsWUFBWTtnQkFBQyx5QkFBd0IsQ0FBQztZQUFDO1FBQUU7SUFBQztBQUFFO0FBQUMsRUFBRSxXQUFVLENBQUEsRUFBRSw0QkFBMkIsR0FBRTs7O0FDSjMwQyxJQUFJLEtBQUcsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxLQUFHLE9BQU87QUFBeUIsSUFBSSxLQUFHLE9BQU87QUFBb0IsSUFBSSxLQUFHLE9BQU8sZ0JBQWUsS0FBRyxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LElBQUUsU0FBUyxjQUFjO0lBQXFCLElBQUcsQ0FBQyxHQUFFO0lBQU8sSUFBSSxLQUFFLEVBQUUsY0FBYztJQUE4RSxJQUFHLElBQUUsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLElBQUUsSUFBSTtRQUFDLEdBQUUsU0FBUSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO1FBQUssSUFBSSxLQUFFLEVBQUUsY0FBYztRQUEyQyxJQUFHLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztJQUFJO0FBQUM7QUFBQyxlQUFlLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxTQUFTLGNBQWM7SUFBMEIsSUFBRyxDQUFDLEdBQUU7SUFBTyxJQUFJLEtBQUUsRUFBRSxjQUFjO0lBQThFLElBQUcsSUFBRSxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsSUFBRSxJQUFJO1FBQUMsR0FBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7UUFBSyxJQUFJLEtBQUUsRUFBRSxjQUFjO1FBQTJDLElBQUcsU0FBUSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO0lBQUk7QUFBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMTUxZGRmYjk3NzBlODhiOC5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy91bHRpcHJvL29wZXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcdWx0aXByb1xcXFxvcGVyYXRpb25zLmpzXCIsXCJidW5kbGVJZFwiOlwiNjM2NmExM2U3ZmFlN2E5NlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGsyMXpsXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy91bHRpcHJvL29wZXJhdGlvbnMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4uLy4uL21ldGhvZHMvY2hvaWNlLW1hdGNoIC0+IDZta0k0ICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoLmpzXHJcbiAqICAgLi9ydWxlcyAtPiBlMGpNTyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy91bHRpcHJvL3J1bGVzLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICogICB+dXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0IC0+IDFUQmhGICA9PiAgc3JjL3V0aWxzL2dldFRhcmdldE9yVGltZW91dC5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcImZpbGxVbHRpcHJvVHlwZWFoZWFkRmllbGRcIiwoKT0+aiksbi5leHBvcnQocixcImZpbGxJbnB1dFRleHRGaWVsZFwiLCgpPT5EKSxuLmV4cG9ydChyLFwiZmlsbERhdGVGaWVsZFwiLCgpPT5QKSxuLmV4cG9ydChyLFwiZmlsbFNlbGVjdEZpZWxkXCIsKCk9Pk8pLG4uZXhwb3J0KHIsXCJmaWxsVWx0aXByb1N0YXRlUHJvdmluY2VGaWVsZFwiLCgpPT5OKSxuLmV4cG9ydChyLFwib3BlblVsdGlwcm9Db250YWN0SW5mb3JtYXRpb25FZGl0b3JcIiwoKT0+WSksbi5leHBvcnQocixcImNhbmNlbFVsdGlwcm9Db250YWN0SW5mb3JtYXRpb25FZGl0b3JcIiwoKT0+eiksbi5leHBvcnQocixcInByZWZpbGxVbHRpcHJvQ291bnRyeVwiLCgpPT5WKSxuLmV4cG9ydChyLFwiZmlsbFZpc2libGVDb250YWN0RmllbGRzRnJvbUhpZGRlblByZWZpbGxcIiwoKT0+WCksbi5leHBvcnQocixcImhhc01lYW5pbmdmdWxDb250cm9sVmFsdWVcIiwoKT0+USksbi5leHBvcnQocixcImdldFVsdGlwcm9TYXZlZEV4cGVyaWVuY2VSb3dzU2lnbmF0dXJlXCIsKCk9PmVuKSxuLmV4cG9ydChyLFwiZ2V0VWx0aXByb1Jlc3VtZVBhcnNlclN0YXRlU2lnbmF0dXJlXCIsKCk9PmVpKSxuLmV4cG9ydChyLFwiaXNVbHRpcHJvUmVzdW1lUGFyc2luZ1wiLCgpPT5lbCksbi5leHBvcnQocixcIndhaXRGb3JVbHRpcHJvUmVzdW1lUGFyc2luZ1RvRmluaXNoXCIsKCk9PmVzKSxuLmV4cG9ydChyLFwid2FpdEZvclVsdGlwcm9SZXN1bWVQYXJzZXJGaWVsZHNUb1NldHRsZVwiLCgpPT5ldSksbi5leHBvcnQocixcImZpbGxDaGVja2JveEZpZWxkXCIsKCk9PmVjKSxuLmV4cG9ydChyLFwiZmlsbENoZWNrYm94XCIsKCk9PmVkKSxuLmV4cG9ydChyLFwiZmlsbE11bHRpU2VsZWN0RmllbGRcIiwoKT0+ZWYpLG4uZXhwb3J0KHIsXCJnZXRSZXN1bWVVcGxvYWRJbnB1dFwiLCgpPT5lbSksbi5leHBvcnQocixcImhhc1Jlc3VtZVVwbG9hZElucHV0XCIsKCk9PmVoKSxuLmV4cG9ydChyLFwiaGFzU2VsZWN0ZWRVbHRpcHJvUmVzdW1lRmlsZVwiLCgpPT5lZyksbi5leHBvcnQocixcInVwbG9hZFJlc3VtZVwiLCgpPT5lYiksbi5leHBvcnQocixcImZpbGxTa2lsbHNcIiwoKT0+ZXkpLG4uZXhwb3J0KHIsXCJmaWxsQmVoYXZpb3JzQW5kTW90aXZhdGlvbnNcIiwoKT0+ZXYpLG4uZXhwb3J0KHIsXCJmaWxsQ2VydGlmaWNhdGlvbnNcIiwoKT0+ZWspLG4uZXhwb3J0KHIsXCJmaWxsTGljZW5zZXNcIiwoKT0+ZVQpLG4uZXhwb3J0KHIsXCJmaWxsUmFjZVwiLCgpPT5lRiksbi5leHBvcnQocixcImFkZEVkdWNhdGlvblNlY3Rpb25cIiwoKT0+ZUkpLG4uZXhwb3J0KHIsXCJhZGRFbXBsb3ltZW50U2VjdGlvblwiLCgpPT5laik7dmFyIG89ZShcIi4uLy4uL21ldGhvZHMvY2hvaWNlLW1hdGNoXCIpLGk9ZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxhPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksbD1lKFwifmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXJcIikscz1lKFwifmNvcmUvZW51bXNcIiksdT1lKFwifmNvcmUveHBhdGhcIiksYz1lKFwifnV0aWxzL2RlbGF5XCIpLGQ9ZShcIi4vcnVsZXNcIiksZj1lKFwifnV0aWxzL2dldFRhcmdldE9yVGltZW91dFwiKSxwPW4uaW50ZXJvcERlZmF1bHQoZik7bGV0IG09W3tpZDpcIkNvdW50cnlcIixsYWJlbDpcIkNvdW50cnlcIn0se2lkOlwiQWRkcmVzc0xpbmUxXCIsbGFiZWw6XCJBZGRyZXNzIDFcIn0se2lkOlwiQWRkcmVzc0xpbmUyXCIsbGFiZWw6XCJBZGRyZXNzIDJcIn0se2lkOlwiQ2l0eVwiLGxhYmVsOlwiQ2l0eVwifSx7aWQ6XCJTdGF0ZVwiLGxhYmVsOlwiU3RhdGUgLyBQcm92aW5jZVwifSx7aWQ6XCJQb3N0YWxDb2RlXCIsbGFiZWw6XCJaaXAgLyBQb3N0YWwgQ29kZVwifV0saD02ZTQsZz0xMmUzLGI9NWUzLHk9ODAwLHY9MTAwLHc9NWUzLFM9NWUzLEU9M2UzLHg9NTAwLEM9MTAwLEE9NWUzLGs9MWUzO2Z1bmN0aW9uIFQoZSl7cmV0dXJuIGUudHJpbSgpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudG9Mb2NhbGVMb3dlckNhc2UoKX1mdW5jdGlvbiBGKGUpe2xldCB0PWUudHJpbSgpO3JldHVybiB0Lmxlbmd0aD4xP3Quc2xpY2UoMCwtMSk6dH1mdW5jdGlvbiBJKGUpe2xldCB0PWUuY2xvc2VzdChcIi50d2l0dGVyLXR5cGVhaGVhZFwiKT8ucXVlcnlTZWxlY3RvcihcIltyb2xlPSdsaXN0Ym94J11cIik7cmV0dXJuIHQ/QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHQtc3VnZ2VzdGlvbiwgW3JvbGU9J29wdGlvbiddXCIpKS5maWx0ZXIoZT0+e2xldCB0PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKTtyZXR1cm4hdHx8dC53aWR0aD4wJiZ0LmhlaWdodD4wfSk6W119YXN5bmMgZnVuY3Rpb24gaihlLHQpe2lmKCFlfHwhdC50cmltKCkpcmV0dXJuITE7ZS5mb2N1cygpLGUuY2xpY2soKTtsZXQgcj1GKHQpLG49T2JqZWN0LmdldFByb3RvdHlwZU9mKGUpLG89T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLFwidmFsdWVcIik/LnNldDtvPy5jYWxsKGUsciksZS52YWx1ZT1yO2xldCBpPXtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9O2UuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIixpKSksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIixpKSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsaSkpO2xldCBhPWF3YWl0ICgwLGwud2FpdEZvckNvbmRpdGlvbikoKCk9PkkoZSkubGVuZ3RoPjAse3RpbWVvdXQ6ayxvYnNlcnZlVGFyZ2V0OmUuY2xvc2VzdChcIi50d2l0dGVyLXR5cGVhaGVhZFwiKT8/dm9pZCAwfSk7aWYoIWEpcmV0dXJuIGNvbnNvbGUud2FybihcIltVbHRpcHJvXVtEZWdyZWVUeXBlYWhlYWRdIG5vIHZpc2libGUgY2FuZGlkYXRlcyBhZnRlciBpbnB1dFwiKSwhMTtsZXQgcz1UKHQpLHU9SShlKS5maWx0ZXIoZT0+VChlLnRleHRDb250ZW50fHxcIlwiKT09PXMpO2lmKDEhPT11Lmxlbmd0aClyZXR1cm4gY29uc29sZS53YXJuKFwiW1VsdGlwcm9dW0RlZ3JlZVR5cGVhaGVhZF0gZXhhY3QgY2FuZGlkYXRlIHdhcyBub3QgdW5pcXVlXCIse21hdGNoQ291bnQ6dS5sZW5ndGh9KSwhMTt1WzBdLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoNTApO2xldCBkPVQoZS52YWx1ZSk9PT1zO3JldHVybiBjb25zb2xlLmluZm8oXCJbVWx0aXByb11bRGVncmVlVHlwZWFoZWFkXSBzZWxlY3Rpb24gcmVzdWx0XCIse2NvbW1pdHRlZDpkfSksZH1hc3luYyBmdW5jdGlvbiBEKGUsdCl7aWYoIWV8fCF0KXJldHVybiExO2lmKFwiVUtHLURBVEUtSU5QVVQtVEVYVFwiPT09ZS50YWdOYW1lKXJldHVybiBhd2FpdCBfKGUsdCk7bGV0IHI9ZTtyLmZvY3VzKCksci5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKTtsZXQgbj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yociksbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sXCJ2YWx1ZVwiKT8uc2V0O28/LmNhbGwocix0KSxyLnZhbHVlPXQ7bGV0IGk9e2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH07cmV0dXJuIHIuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIixpKSksci5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIixpKSksci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsaSkpLHIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIixpKSksci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJsdXJcIixpKSksYXdhaXQgKDAsYy5kZWxheSkoNTApLHIudmFsdWUudHJpbSgpPT09dC50cmltKCl9YXN5bmMgZnVuY3Rpb24gUChlLHQpe3JldHVybiEhZSYmISF0JiZhd2FpdCBfKGUsdCl9YXN5bmMgZnVuY3Rpb24gXyhlLHQpe2xldCByPVIodCk7aWYoIXIpcmV0dXJuIGNvbnNvbGUud2FybihcIkludmFsaWQgZGF0ZSBmb3JtYXQ6XCIsdCksITE7bGV0W24sbyxpXT1yLnNwbGl0KFwiL1wiKSxhPWAke2l9LSR7bn0tJHtvfWAsbD1lLmNsb3Nlc3QoJ1tkYXRhLWF1dG9tYXRpb249XCJ1a2ctZGF0ZXBpY2tlci1pbnB1dFwiXScpfHxlLmNsb3Nlc3QoXCJ1a2ctaW5wdXRcIik7bCYmKGwudmFsdWU9YSxsLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsYSkpLGUudmFsdWU9YSxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsYSksYXdhaXQgKDAsYy5kZWxheSkoMTAwKTtsZXQgcz10PT5lLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W2FyaWEtbGFiZWw9XCIke3R9XCJdYCl8fGUuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcihgaW5wdXRbYXJpYS1sYWJlbD1cIiR7dH1cIl1gKSx1PXMoXCJNb250aFwiKSxkPXMoXCJEYXlcIiksZj1zKFwiWWVhclwiKTtyZXR1cm4gdSYmZCYmZj8oYXdhaXQgTCh1LG4pLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksYXdhaXQgTChkLG8pLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksYXdhaXQgTChmLGkpLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksdS52YWx1ZT09PW4mJmQudmFsdWU9PT1vJiZmLnZhbHVlPT09aSk6KGNvbnNvbGUud2FybihcInVrZy1kYXRlLWlucHV0LXRleHQ6IHN1Yi1pbnB1dHMgbm90IGZvdW5kLCB2YWx1ZSBzZXQgdmlhIGNvbXBvbmVudCBwcm9wZXJ0eSBvbmx5XCIpLCEwKX1hc3luYyBmdW5jdGlvbiBMKGUsdCl7ZS5mb2N1cygpLGUuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSg1MCk7bGV0IHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsXCJ2YWx1ZVwiKT8uc2V0O3I/ci5jYWxsKGUsXCJcIik6ZS52YWx1ZT1cIlwiLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDMwKSxyP3IuY2FsbChlLHQpOmUudmFsdWU9dCxlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2J1YmJsZXM6ITAsY29tcG9zZWQ6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY29tcG9zZWQ6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY29tcG9zZWQ6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBGb2N1c0V2ZW50KFwiYmx1clwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDgwKX1mdW5jdGlvbiBSKGUpe2lmKCFlKXJldHVybiBudWxsO2xldCB0PWUudHJpbSgpLHI9e2phbjpcIjAxXCIsamFudWFyeTpcIjAxXCIsZmViOlwiMDJcIixmZWJydWFyeTpcIjAyXCIsbWFyOlwiMDNcIixtYXJjaDpcIjAzXCIsYXByOlwiMDRcIixhcHJpbDpcIjA0XCIsbWF5OlwiMDVcIixqdW46XCIwNlwiLGp1bmU6XCIwNlwiLGp1bDpcIjA3XCIsanVseTpcIjA3XCIsYXVnOlwiMDhcIixhdWd1c3Q6XCIwOFwiLHNlcDpcIjA5XCIsc2VwdDpcIjA5XCIsc2VwdGVtYmVyOlwiMDlcIixvY3Q6XCIxMFwiLG9jdG9iZXI6XCIxMFwiLG5vdjpcIjExXCIsbm92ZW1iZXI6XCIxMVwiLGRlYzpcIjEyXCIsZGVjZW1iZXI6XCIxMlwifSxuPXQubWF0Y2goL14oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KSQvKTtpZihuKXtsZXRbLGUsdCxyXT1uO3JldHVybmAke3R9LyR7cn0vJHtlfWB9aWYoL15cXGR7MSwyfVxcL1xcZHsxLDJ9XFwvXFxkezR9JC8udGVzdCh0KSlyZXR1cm4gdDtsZXQgbz10Lm1hdGNoKC9eKFtBLVphLXpdKylcXHMrKFxcZHs0fSkkLyk7aWYobyl7bGV0WyxlLHRdPW8sbj1yW2UudG9Mb3dlckNhc2UoKV07aWYobilyZXR1cm5gJHtufS8wMS8ke3R9YH1yZXR1cm4gbnVsbH1hc3luYyBmdW5jdGlvbiBPKGUsdCl7cmV0dXJuISFlJiYhIXQmJighIWF3YWl0IE0oZSx0KXx8KGF3YWl0ICgwLGMuZGVsYXkpKDYwMCksISFhd2FpdCBNKGUsdCl8fChhd2FpdCAoMCxjLmRlbGF5KSg2MDApLGF3YWl0IE0oZSx0KSkpKX1hc3luYyBmdW5jdGlvbiBNKGUsdCl7aWYoIWV8fCF0KXJldHVybiExO2xldCByPWFzeW5jIHQ9PntsZXQgcj1BcnJheS5mcm9tKGUub3B0aW9ucykuaW5kZXhPZih0KTtlLnNlbGVjdGVkSW5kZXg9cjtsZXQgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MU2VsZWN0RWxlbWVudC5wcm90b3R5cGUsXCJzZWxlY3RlZEluZGV4XCIpPy5zZXQ7bj8uY2FsbChlLHIpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApfSxuPWFzeW5jKCk9PntsZXQgbj10LnRyaW0oKS50b0xvd2VyQ2FzZSgpLG89QXJyYXkuZnJvbShlLm9wdGlvbnMpLGk9by5maWx0ZXIoZT0+IWUuZGlzYWJsZWQmJlwiXCIhPT1lLnRleHQudHJpbSgpJiYhL15jaG9vc2V8cGxlYXNlIHNlbGVjdC9pLnRlc3QoZS50ZXh0LnRyaW0oKSkpO2ZvcihsZXQgZSBvZiBpKXtsZXQgdD1lLnRleHQ/LnRyaW0oKS50b0xvd2VyQ2FzZSgpLG89ZS50aXRsZT8udHJpbSgpLnRvTG93ZXJDYXNlKCksaT1lLnZhbHVlPy50cmltKCkudG9Mb3dlckNhc2UoKTtpZih0PT09bnx8bz09PW58fGk9PT1uKXJldHVybiBhd2FpdCByKGUpLCEwfXJldHVybiExfTtyZXR1cm4gYXdhaXQgbigpfWFzeW5jIGZ1bmN0aW9uIE4oZSx0LHt0aW1lb3V0TXM6cj1BLGludGVydmFsTXM6bj1DLHNldHRsZU1zOm89eH09e30pe2lmKCFlfHwhdClyZXR1cm4hMTtsZXQgaT0kKCkuZmluZChlPT5CKGUsdCkpO2lmKCFpKXtjb25zb2xlLmluZm8oXCJbVWx0aXByb11bU3RhdGUgLyBQcm92aW5jZV0gd2FpdGluZyBmb3IgQ291bnRyeS1kZXBlbmRlbnQgbGl2ZSBvcHRpb25zXCIse2luaXRpYWxPcHRpb25Db3VudDplLm9wdGlvbnMubGVuZ3RofSk7bGV0IG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNPcHBvcnR1bml0eUFwcGx5XCIpPz9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsYT1hd2FpdCAoMCxsLndhaXRGb3JDb25kaXRpb24pKCgpPT4hIShpPSQoKS5maW5kKGU9PkIoZSx0KSkpLHt0aW1lb3V0OnIsaW50ZXJ2YWw6bixvYnNlcnZlVGFyZ2V0Om99KTtpZighYXx8IWkpcmV0dXJuIGNvbnNvbGUud2FybihcIltVbHRpcHJvXVtTdGF0ZSAvIFByb3ZpbmNlXSBmaWxsIHNraXBwZWQ7IHJlYXNvbj1kZXBlbmRlbnQtb3B0aW9ucy1ub3QtcmVhZHlcIix7dGltZW91dE1zOnJ9KSwhMX1pZighYXdhaXQgTShpLHQpKXJldHVybiExO28+MCYmYXdhaXQgKDAsYy5kZWxheSkobyk7bGV0IGE9JCgpLmZpbmQoZT0+QihlLHQpKTtpZighYSlyZXR1cm4gY29uc29sZS53YXJuKFwiW1VsdGlwcm9dW1N0YXRlIC8gUHJvdmluY2VdIGZpbGwgc2tpcHBlZDsgcmVhc29uPXNldHRsZWQtY29udHJvbC1ub3QtcmVhZHlcIiksITE7bGV0IHM9IXEoYSx0KSx1PSFzfHxhd2FpdCBNKGEsdCksZD11JiZxKGEsdCk7cmV0dXJuIGNvbnNvbGUuaW5mbyhcIltVbHRpcHJvXVtTdGF0ZSAvIFByb3ZpbmNlXSBsaXZlIGZpbGwgcmVzdWx0XCIse3JlcGxhY2VkQ29udHJvbDphIT09ZSxyZWF0dGVtcHRlZDpzLGNvbW1pdHRlZDpkfSksZH1mdW5jdGlvbiAkKCl7cmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdCNTdGF0ZVwiKSkuZmlsdGVyKEopfWZ1bmN0aW9uIEIoZSx0KXtyZXR1cm4gQXJyYXkuZnJvbShlLm9wdGlvbnMpLnNvbWUoZT0+VShlLHQpKX1mdW5jdGlvbiBxKGUsdCl7cmV0dXJuIFUoZS5vcHRpb25zW2Uuc2VsZWN0ZWRJbmRleF0sdCl9ZnVuY3Rpb24gVShlLHQpe2xldCByPXQudHJpbSgpLnRvTG93ZXJDYXNlKCk7aWYoIWV8fCFyfHxlLmRpc2FibGVkfHwhZS50ZXh0LnRyaW0oKXx8L15jaG9vc2V8cGxlYXNlIHNlbGVjdC9pLnRlc3QoZS50ZXh0LnRyaW0oKSkpcmV0dXJuITE7bGV0IG49ZS50ZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpLGk9ZS50aXRsZS50cmltKCkudG9Mb3dlckNhc2UoKSxhPWUudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7cmV0dXJuKDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKG4scil8fCgwLG8uaXNFeGFjdENob2ljZU1hdGNoKShpLHIpfHwoMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkoYSxyKX1mdW5jdGlvbiBIKCl7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdXRvbWF0aW9uPVwicGFuZWwtdGl0bGVcIl0nKSkuZmluZChlPT5lLnRleHRDb250ZW50Py50cmltKCk9PT1cIkNvbnRhY3QgSW5mb3JtYXRpb25cIik7cmV0dXJuIGU/LmNsb3Nlc3QoXCJzaW5nbGUtZWRpdC1wYW5lbFwiKT8/bnVsbH1hc3luYyBmdW5jdGlvbiBZKCl7bGV0IGU9SCgpO2lmKCFlKXJldHVybiBjb25zb2xlLndhcm4oXCJbVWx0aXByb11bQ29udGFjdCBJbmZvcm1hdGlvbl0gb3BlbiBmYWlsZWQ7IHJlYXNvbj1wYW5lbC1ub3QtZm91bmRcIiksITE7aWYoMT09PVcoKS5sZW5ndGgpcmV0dXJuITA7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1hdXRvbWF0aW9uPVwicHJpbWFyeS1hY3Rpb24tYnV0dG9uXCJdW2FyaWEtbGFiZWw9XCJFZGl0IENvbnRhY3QgSW5mb3JtYXRpb25cIl0nKTtpZighdHx8IUoodCl8fHQuZGlzYWJsZWQpcmV0dXJuIGNvbnNvbGUud2FybihcIltVbHRpcHJvXVtDb250YWN0IEluZm9ybWF0aW9uXSBvcGVuIGZhaWxlZDsgcmVhc29uPWVkaXQtYnV0dG9uLW5vdC1yZWFkeVwiKSwhMTt0LmNsaWNrKCk7bGV0IHI9YXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+MT09PVcoKS5sZW5ndGgse3RpbWVvdXQ6dyxpbnRlcnZhbDpDLG9ic2VydmVUYXJnZXQ6ZX0pO3JldHVybiBjb25zb2xlLmluZm8oYFtVbHRpcHJvXVtDb250YWN0IEluZm9ybWF0aW9uXSBvcGVuIHJlc3VsdDsgb3BlbmVkPSR7cn1gKSxyfWFzeW5jIGZ1bmN0aW9uIHooKXtsZXQgZT1IKCk7aWYoIWUpcmV0dXJuITE7aWYoMD09PVcoKS5sZW5ndGgpcmV0dXJuITA7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1hdXRvbWF0aW9uPVwiY2FuY2VsLWJ1dHRvblwiXScpO2lmKCF0fHwhSih0KSlyZXR1cm4gY29uc29sZS53YXJuKFwiW1VsdGlwcm9dW0NvbnRhY3QgSW5mb3JtYXRpb25dIGNhbmNlbCBmYWlsZWQ7IHJlYXNvbj1jYW5jZWwtYnV0dG9uLW5vdC1yZWFkeVwiKSwhMTt0LmNsaWNrKCk7bGV0IHI9YXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+MD09PVcoKS5sZW5ndGgse3RpbWVvdXQ6dyxpbnRlcnZhbDpDLG9ic2VydmVUYXJnZXQ6ZX0pO3JldHVybiBjb25zb2xlLmluZm8oYFtVbHRpcHJvXVtDb250YWN0IEluZm9ybWF0aW9uXSBjYW5jZWwgcmVzdWx0OyBjYW5jZWxsZWQ9JHtyfWApLHJ9YXN5bmMgZnVuY3Rpb24gVihlKXtpZighZT8udHJpbSgpKXJldHVybiExO2xldCB0PVcoKTtpZigxIT09dC5sZW5ndGgmJihjb25zb2xlLmluZm8oYFtVbHRpcHJvXVtDb3VudHJ5XSB3YWl0aW5nIGZvciB2aXNpYmxlIGNvbnRyb2w7IGNhbmRpZGF0ZUNvdW50PSR7dC5sZW5ndGh9YCksYXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+MT09PVcoKS5sZW5ndGgse3RpbWVvdXQ6UyxpbnRlcnZhbDpDLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fSksdD1XKCkpLDEhPT10Lmxlbmd0aClyZXR1cm4gY29uc29sZS53YXJuKGBbVWx0aXByb11bQ291bnRyeV0gcHJlZmlsbCBza2lwcGVkOyByZWFzb249dmlzaWJsZS1jb3VudHJ5LWNvbnRyb2wtY291bnQ7IGNhbmRpZGF0ZUNvdW50PSR7dC5sZW5ndGh9YCksITE7bGV0IHI9dFswXSxuPWUudHJpbSgpLG89WihyKSxpPW8udG9Mb3dlckNhc2UoKT09PW4udG9Mb3dlckNhc2UoKSxhPUcoKSxzPWl8fGF3YWl0IE8ocixuKSx1PVoociksYz1zJiZ1LnRvTG93ZXJDYXNlKCk9PT1uLnRvTG93ZXJDYXNlKCk7aWYoIWMpcmV0dXJuIGNvbnNvbGUud2FybihcIltVbHRpcHJvXVtDb3VudHJ5XSBwcmVmaWxsIGZhaWxlZFwiLHtyZXF1ZXN0ZWRDb3VudHJ5Om4scHJldmlvdXNDb3VudHJ5Om8sY29tbWl0dGVkQ291bnRyeTp1fSksITE7bGV0IGQ9YXdhaXQgSyhhLCFpKTtyZXR1cm4gY29uc29sZS5pbmZvKFwiW1VsdGlwcm9dW0NvdW50cnldIHByZWZpbGwgY29tbWl0dGVkXCIse3JlcXVlc3RlZENvdW50cnk6bixwcmV2aW91c0NvdW50cnk6byxkZXBlbmRlbnRGaWVsZHNDaGFuZ2VkOmR9KSwhMH1mdW5jdGlvbiBXKCl7cmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdCNDb3VudHJ5XCIpKS5maWx0ZXIoSil9ZnVuY3Rpb24gRygpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNDb3VudHJ5UXVlc3Rpb25zIGlucHV0LCNDb3VudHJ5UXVlc3Rpb25zIHNlbGVjdCwjQ291bnRyeVF1ZXN0aW9ucyB0ZXh0YXJlYSwjQXBwbGljYXRpb25RdWVzdGlvbnMgaW5wdXQsI0FwcGxpY2F0aW9uUXVlc3Rpb25zIHNlbGVjdCwjQXBwbGljYXRpb25RdWVzdGlvbnMgdGV4dGFyZWEsI1F1ZXN0aW9ucyBpbnB1dCwjUXVlc3Rpb25zIHNlbGVjdCwjUXVlc3Rpb25zIHRleHRhcmVhLHNlbGVjdCNTdGF0ZSBvcHRpb25cIikpO3JldHVybiBlLm1hcChlPT5lIGluc3RhbmNlb2YgSFRNTE9wdGlvbkVsZW1lbnQ/YG9wdGlvbjoke2UudmFsdWV9OiR7ZS50ZXh0Q29udGVudD8udHJpbSgpPz9cIlwifWA6W2UudGFnTmFtZSxlLmlkLGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKT8/XCJcIixlLmdldEF0dHJpYnV0ZShcInR5cGVcIik/P1wiXCIsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF1dG9tYXRpb25cIik/P1wiXCJdLmpvaW4oXCI6XCIpKS5qb2luKFwifFwiKX1hc3luYyBmdW5jdGlvbiBLKGUsdCl7bGV0IHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNPcHBvcnR1bml0eUFwcGx5XCIpPz9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsbj1HKCkhPT1lO3QmJiFuJiYobj1hd2FpdCAoMCxsLndhaXRGb3JDb25kaXRpb24pKCgpPT5HKCkhPT1lLHt0aW1lb3V0OkUsaW50ZXJ2YWw6QyxvYnNlcnZlVGFyZ2V0OnJ9KSk7bGV0IG89RygpLGk9RGF0ZS5ub3coKTtyZXR1cm4gYXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCBlPUcoKTtyZXR1cm4gZSE9PW8/KG49ITAsbz1lLGk9RGF0ZS5ub3coKSwhMSk6RGF0ZS5ub3coKS1pPj14fSx7dGltZW91dDpFK3gsaW50ZXJ2YWw6QyxvYnNlcnZlVGFyZ2V0OnJ9KSxufWFzeW5jIGZ1bmN0aW9uIFgoKXtsZXQgZT1bXTtmb3IobGV0IHQgb2YgbSl7bGV0IHI9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtDU1MuZXNjYXBlKHQuaWQpfWApKSxuPXIuZmluZChKKTtpZighbnx8UShuKSljb250aW51ZTtsZXQgbz1yLmZpbHRlcihlPT5lIT09biYmIUooZSkpLm1hcChaKS5maW5kKGU9PmVlKGUpKTtpZighbyljb250aW51ZTtsZXQgaT1uIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQ/YXdhaXQgTyhuLG8pOmF3YWl0IEQobixvKTtpJiZlLnB1c2godC5sYWJlbCl9cmV0dXJuIGV9ZnVuY3Rpb24gSihlKXtsZXQgdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKSxyPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuXCJub25lXCIhPT10LmRpc3BsYXkmJlwiaGlkZGVuXCIhPT10LnZpc2liaWxpdHkmJnIud2lkdGg+MCYmci5oZWlnaHQ+MH1mdW5jdGlvbiBRKGUpe3JldHVybiBlZShaKGUpKX1mdW5jdGlvbiBaKGUpe2lmKGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCl7bGV0IHQ9ZTtyZXR1cm4gdC5vcHRpb25zW3Quc2VsZWN0ZWRJbmRleF0/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9cmV0dXJuKGUudmFsdWV8fFwiXCIpLnRyaW0oKX1mdW5jdGlvbiBlZShlKXtyZXR1cm4hIWUmJiEvXmNob29zZXxwbGVhc2Ugc2VsZWN0L2kudGVzdChlLnRyaW0oKSl9ZnVuY3Rpb24gZXQoZSl7aWYoIShlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudHx8ZSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnR8fGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCl8fGUuZGlzYWJsZWQpcmV0dXJuITE7aWYoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpe2xldCB0PShlLnR5cGV8fFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO3JldHVybltcInRleHRcIixcImVtYWlsXCIsXCJ0ZWxcIixcInNlYXJjaFwiLFwidXJsXCIsXCJudW1iZXJcIixcImRhdGVcIl0uaW5jbHVkZXModCl9cmV0dXJuITB9bGV0IGVyPVwiI1dvcmtFeHBlcmllbmNlU2VjdGlvbiB1bC5saXN0dHlwZSA+IGxpLnJvdywgI1dvcmtFeHBlcmllbmNlU2VjdGlvbiB1bC5saXN0dHlwZSA+IGxpW2RhdGEtYXV0b21hdGlvbj0ncGFuZWwtbGlzdC1pdGVtJ10sICNFZHVjYXRpb25TZWN0aW9uIHVsLmxpc3R0eXBlID4gbGkucm93LCAjRWR1Y2F0aW9uU2VjdGlvbiB1bC5saXN0dHlwZSA+IGxpW2RhdGEtYXV0b21hdGlvbj0ncGFuZWwtbGlzdC1pdGVtJ10sICNSZXN1bWVQYXJzaW5nVXBsb2FkZXIgW2RhdGEtYXV0b21hdGlvbj0nd29yay1leHBlcmllbmNlLWl0ZW0nXSwgI1Jlc3VtZVBhcnNpbmdVcGxvYWRlciBbZGF0YS1hdXRvbWF0aW9uPSdlZHVjYXRpb24tcGFuZWwnXVwiO2Z1bmN0aW9uIGVuKCl7cmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlcikpLm1hcCgoZSx0KT0+W1wicm93XCIsdCxlLnF1ZXJ5U2VsZWN0b3IoXCJzdHJvbmdcIik/LnRleHRDb250ZW50Py50cmltKCl8fEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpLm1hcChlPT5lLnZhbHVlPy50cmltKCl8fFwiXCIpLmZpbHRlcihCb29sZWFuKS5qb2luKFwifFwiKXx8ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiXS5qb2luKFwiOlwiKSkuam9pbihcIlxcblwiKX1mdW5jdGlvbiBlbygpe3JldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjUmVzdW1lUGFyc2luZ1VwbG9hZGVyIFtkYXRhLWF1dG9tYXRpb249J3dvcmstZXhwZXJpZW5jZS1pdGVtJ10sICNSZXN1bWVQYXJzaW5nVXBsb2FkZXIgW2RhdGEtYXV0b21hdGlvbj0nZWR1Y2F0aW9uLXBhbmVsJ11cIikpLnNvbWUoZT0+ISgwLGQuaXNFbGVtZW50SGlkZGVuKShlKSl9ZnVuY3Rpb24gZWkoKXtsZXQgZT1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkuZmlsdGVyKGV0KS5tYXAoZT0+W1wiZmllbGRcIixlLnRhZ05hbWUsZS5pZCxlLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiXCIsZS52YWx1ZXx8XCJcIl0uam9pbihcIjpcIikpLHQ9ZW4oKTtyZXR1cm5bLi4uZSx0XS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX1mdW5jdGlvbiBlYSgpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWJpbmRdXCIpKS5maWx0ZXIoZT0+e2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpfHxcIlwiO3JldHVybiB0LmluY2x1ZGVzKFwiaXNQYXJzaW5nUmVzdW1lXCIpJiZ0LmluY2x1ZGVzKFwidmlzaWJsZVwiKX0pO3JldHVybiBlLmZpbmQoZT0+ISFlLnF1ZXJ5U2VsZWN0b3IoXCIjRWR1Y2F0aW9uU2VjdGlvblwiKXx8ISFlLnF1ZXJ5U2VsZWN0b3IoXCIjV29ya0V4cGVyaWVuY2VTZWN0aW9uXCIpKT8/bnVsbH1mdW5jdGlvbiBlbCgpe2xldCBlPWVhKCk7cmV0dXJuISghZXx8ZW8oKSkmJigwLGQuaXNFbGVtZW50SGlkZGVuKShlKX1hc3luYyBmdW5jdGlvbiBlcyhlPXt9KXtsZXQgdDtsZXQgcj1lLnRpbWVvdXRNcz8/aCxuPWVhKCksbz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/P24/P3ZvaWQgMCxpPWUuaW50ZXJ2YWxNcz8/dixhPXZvaWQgMCE9PWUuaW5pdGlhbFNpZ25hdHVyZTtpZighYSYmIW4pcmV0dXJuITA7aWYoYSl7bGV0IHI9YXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCByPWVhKCk7cmV0dXJuIHImJigwLGQuaXNFbGVtZW50SGlkZGVuKShyKT8odD1cInBhcnNpbmctc3RhdGVcIiwhMCk6dm9pZCAwIT09ZS5pbml0aWFsU2F2ZWRSb3dzU2lnbmF0dXJlJiZlbigpIT09ZS5pbml0aWFsU2F2ZWRSb3dzU2lnbmF0dXJlJiYodD1cInNhdmVkLXJvd3NcIiwhMCl9LHt0aW1lb3V0OmUuc3RhcnRUaW1lb3V0TXM/P2csaW50ZXJ2YWw6aSxvYnNlcnZlVGFyZ2V0Om99KTtpZighcilyZXR1cm4gY29uc29sZS53YXJuKFwiW1VsdGlwcm9dIHJlc3VtZSBwYXJzZXIgZGlkIG5vdCBzdGFydCBiZWZvcmUgdGltZW91dDsgc3RydWN0dXJlZCBleHBlcmllbmNlIGZpbGwgd2lsbCBiZSBza2lwcGVkXCIse2hhc1BhcnNpbmdCaW5kaW5nOiEhbn0pLCExO2NvbnNvbGUubG9nKFwiW1VsdGlwcm9dIHJlc3VtZSBwYXJzZXIgY3ljbGUgc3RhcnRlZFwiLHtyZWFzb246dCxoYXNQYXJzaW5nQmluZGluZzohIW59KX1sZXQgcz0oKT0+e2lmKGVvKCkpcmV0dXJuITA7bGV0IGU9ZWEoKTtyZXR1cm4hbnx8ISFlJiYhKDAsZC5pc0VsZW1lbnRIaWRkZW4pKGUpfSx1PSEhcygpfHxhd2FpdCAoMCxsLndhaXRGb3JDb25kaXRpb24pKHMse3RpbWVvdXQ6cixpbnRlcnZhbDppLG9ic2VydmVUYXJnZXQ6b30pO2lmKCF1KXJldHVybiBjb25zb2xlLndhcm4oXCJbdXBsb2FkUmVzdW1lXSBUaW1lZCBvdXQgd2FpdGluZyBmb3IgVUtHIGlzUGFyc2luZ1Jlc3VtZSgpIHRvIGNsZWFyXCIpLCExO2lmKGEpe2xldCByPWF3YWl0IGV1KGUuaW5pdGlhbFNpZ25hdHVyZSx7c3RhYmxlTXM6ZS5zdGFibGVNcyxpbnRlcnZhbE1zOml9KTtpZighcilyZXR1cm4hMTtjb25zb2xlLmxvZyhcIltVbHRpcHJvXSByZXN1bWUgcGFyc2VyIGN5Y2xlIGNvbXBsZXRlZFwiLHtyZWFzb246dCxoYXNQYXJzaW5nQmluZGluZzohIW59KX1yZXR1cm4hMH1hc3luYyBmdW5jdGlvbiBldShlLHQ9e30pe2xldCByPXQuY2hhbmdlVGltZW91dE1zPz9nLG49dC5zdGFibGVNcz8/eSxvPXQuaW50ZXJ2YWxNcz8/dixpPXQubm9DaGFuZ2VUaW1lb3V0TXM/P2IsYT1EYXRlLm5vdygpLGw9ZSxzPURhdGUubm93KCksdT0hMTtmb3IoO0RhdGUubm93KCktYTxyOyl7bGV0IGU9ZWkoKSx0PWVsKCk7aWYoZSE9PWwpbD1lLHM9RGF0ZS5ub3coKSx1PSEwO2Vsc2UgaWYodSYmIXQmJkRhdGUubm93KCktcz49bilyZXR1cm4hMDtlbHNlIGlmKCF1JiYhdCYmRGF0ZS5ub3coKS1hPj1pKXJldHVybiEwO2F3YWl0ICgwLGMuZGVsYXkpKG8pfXJldHVybiBjb25zb2xlLndhcm4oXCJbdXBsb2FkUmVzdW1lXSBUaW1lZCBvdXQgd2FpdGluZyBmb3IgVWx0aXBybyBwYXJzZXIgZmllbGQgcmV3cml0ZVwiKSwhMX1hc3luYyBmdW5jdGlvbiBlYyhlLHQpe2xldCByPUFycmF5LmlzQXJyYXkodCk/dFswXTp0LG49U3RyaW5nKHIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLG89ZS4kY2hlY2tib3hzfHxbXTtpZigwPT09by5sZW5ndGgpe2xldCB0PWUuJGlucHV0O2lmKHQmJlwiY2hlY2tib3hcIj09PXQudHlwZSl7bGV0IGU9W1widHJ1ZVwiLFwieWVzXCIsXCIxXCJdLmluY2x1ZGVzKG4pO2F3YWl0IGVkKHQsZSl9cmV0dXJufWZvcihsZXQgZSBvZiBvKXtsZXQgdD1lLnZhbHVlPy50b0xvd2VyQ2FzZSgpfHxcIlwiLHI9ZS5uZXh0RWxlbWVudFNpYmxpbmc/LnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKXx8XCJcIjtpZih0PT09bnx8cj09PW4pe2UuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApO3JldHVybn19Y29uc29sZS53YXJuKFwiTm8gbWF0Y2hpbmcgcmFkaW8gZm91bmQgZm9yIHZhbHVlOlwiLHIpfWFzeW5jIGZ1bmN0aW9uIGVkKGUsdCl7ZS5jaGVja2VkIT09dCYmKGUuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApKX1hc3luYyBmdW5jdGlvbiBlZihlLHQpe2xldCByPWUuJGlucHV0O2lmKCFyKXJldHVybjtsZXQgbj1BcnJheS5pc0FycmF5KHQpP3RbMF06dDthd2FpdCBPKHIsbiksYXdhaXQgKDAsYy5kZWxheSkoMjAwKTtsZXQgbz1yLnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2hlY2tib3ggbGFiZWxcIiksaT1vPy5xdWVyeVNlbGVjdG9yKFwic3Bhbjpub3QoLnNyLW9ubHkpXCIpLGE9aT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtpZighYSlyZXR1cm47bGV0IGw9ci5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFwiZGl2LmNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7aWYoIWwpcmV0dXJuO2xldCBzPXIub3B0aW9uc1tyLnNlbGVjdGVkSW5kZXhdPy50ZXh0Py50cmltKCkudG9Mb3dlckNhc2UoKXx8XCJcIix1PUFycmF5LmlzQXJyYXkodCk/dDpbdF0sZD11LnNvbWUoZT0+cz09PVN0cmluZyhlKS50cmltKCkudG9Mb3dlckNhc2UoKSk7ZHx8KGF3YWl0IGVkKGwsITApLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCkpfWxldCBlcD1cIiNSZXN1bWVQYXJzaW5nVXBsb2FkZXIgaW5wdXRbdHlwZT0nZmlsZSddLCAjc2VjdGlvbi1oZWFkZXItcmVzdW1lUGFyc2luZ1VwbG9hZGVyIGlucHV0W3R5cGU9J2ZpbGUnXSwgW2RhdGEtYXV0b21hdGlvbj0ncmVzdW1lcGFyc2luZ3VwbG9hZGVyLWNvbnRhaW5lciddIGlucHV0W3R5cGU9J2ZpbGUnXVwiO2Z1bmN0aW9uIGVtKCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXApfHwoMCx1LmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLy8qW0BpZD0nUmVzdW1lUGFyc2luZ1VwbG9hZGVyJyBvciBAZGF0YS1hdXRvbWF0aW9uPSdyZXN1bWVwYXJzaW5ndXBsb2FkZXItY29udGFpbmVyJyBvciBAaWQ9J3NlY3Rpb24taGVhZGVyLXJlc3VtZVBhcnNpbmdVcGxvYWRlciddLy9pbnB1dFtAdHlwZT0nZmlsZSddXCIpfWZ1bmN0aW9uIGVoKCl7cmV0dXJuISFlbSgpfWZ1bmN0aW9uIGVnKCl7bGV0IGU9ZW0oKTtyZXR1cm4hIShlPy5maWxlcz8ubGVuZ3RofHxlPy52YWx1ZSl9YXN5bmMgZnVuY3Rpb24gZWIoZSx0LHIpe2xldCBuPWVtKCk7aWYoIW4pcmV0dXJuIGNvbnNvbGUud2FybihcIlJlc3VtZSBpbnB1dCBub3QgZm91bmRcIiksITE7bGV0IG89ZWkoKSxsPWVuKCkscz1hd2FpdCAoMCxpLmZldGNoUGRmQXNCbG9iKShlKTtyZXR1cm4gYXdhaXQgKDAsYS51cGxvYWRGaWxlcykobixzLHQscixcIlJlc3VtZS9DVlwiKSxhd2FpdCAoMCxwLmRlZmF1bHQpKCgpPT5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwbG9hZC1jb21wbGV0ZVwiKSwoKT0+ITEsNSksYXdhaXQgZXMoe2luaXRpYWxTaWduYXR1cmU6byxpbml0aWFsU2F2ZWRSb3dzU2lnbmF0dXJlOmx9KX1hc3luYyBmdW5jdGlvbiBleShlLHQpe2xldCByPWUubWFwKGU9PlN0cmluZyhlPz9cIlwiKS50cmltKCkpLmZpbHRlcihlPT5lLmxlbmd0aD4wKTtpZighci5sZW5ndGgpcmV0dXJuITE7bGV0IG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNDYW5kaWRhdGVTa2lsbHNcIik7aWYoIW4pcmV0dXJuITE7bGV0IG89bi5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1hdXRvbWF0aW9uPVwicHJpbWFyeS1hY3Rpb24tYnV0dG9uXCJdJyk7aWYoIW8pcmV0dXJuITE7by5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDMwMCk7bGV0IGk9KCk9Pm5ldyBTZXQoQXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWF1dG9tYXRpb249XCJzZWxlY3RlZC1pdGVtXCJdIHN0cm9uZ1tkYXRhLWF1dG9tYXRpb249XCJza2lsbC1sYWJlbFwiXScpKS5tYXAoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpLnRvTG93ZXJDYXNlKCl8fFwiXCIpLmZpbHRlcihCb29sZWFuKSksYT1pKCksbD1uLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11bYXJpYS1sYWJlbD0nU2tpbGxzJ11cIik7aWYoIWwpcmV0dXJuIGNvbnNvbGUud2FybihcIltVbHRpcHJvXVtTa2lsbHNdIHNjb3BlZCBpbnB1dCB1bmF2YWlsYWJsZVwiLHtyZXF1ZXN0ZWRDb3VudDpyLmxlbmd0aH0pLCExO2ZvcihsZXQgZSBvZihjb25zb2xlLmluZm8oXCJbVWx0aXByb11bU2tpbGxzXSBmaWxsIHN0YXJ0ZWRcIix7cmVxdWVzdGVkQ291bnQ6ci5sZW5ndGgsZXhpc3RpbmdDb3VudDphLnNpemUsc2NvcGVkSW5wdXQ6ITB9KSxyKSl7bGV0IHQ9ZS50b0xvd2VyQ2FzZSgpO2lmKGEuaGFzKHQpKWNvbnRpbnVlO2F3YWl0IEQobCxlKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApO2xldCByPWwuY2xvc2VzdChcImRpdi5mb3JtLWlubGluZVwiKT8ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtyPy5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDEwMCksYT1pKCl9bGV0IHM9ci5maWx0ZXIoZT0+IWEuaGFzKGUudG9Mb3dlckNhc2UoKSkpLmxlbmd0aDtpZihzPjApcmV0dXJuIGNvbnNvbGUud2FybihcIltVbHRpcHJvXVtTa2lsbHNdIHRhZyBjb21taXQgaW5jb21wbGV0ZVwiLHtyZXF1ZXN0ZWRDb3VudDpyLmxlbmd0aCxjb21taXR0ZWRDb3VudDpyLmxlbmd0aC1zLG1pc3NpbmdDb3VudDpzfSksITE7YXdhaXQgKDAsYy5kZWxheSkoMjAwKTtsZXQgdT1uLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWF1dG9tYXRpb249XCJzYXZlLWJ1dHRvblwiXScpO3JldHVybiB1Pyh1LmNsaWNrKCksdChcIlNraWxsc1wiKSxjb25zb2xlLmluZm8oXCJbVWx0aXByb11bU2tpbGxzXSBmaWxsIGNvbXBsZXRlZFwiLHtyZXF1ZXN0ZWRDb3VudDpyLmxlbmd0aCxjb21taXR0ZWRDb3VudDpyLmxlbmd0aH0pLGF3YWl0ICgwLGMuZGVsYXkpKDYwMCksITApOihjb25zb2xlLndhcm4oXCJbVWx0aXByb11bU2tpbGxzXSBzYXZlIGJ1dHRvbiB1bmF2YWlsYWJsZVwiLHtyZXF1ZXN0ZWRDb3VudDpyLmxlbmd0aH0pLCExKX1hc3luYyBmdW5jdGlvbiBldihlLHQpe2xldCByPWV3KHQpO2lmKCFyfHwwPT09ci5sZW5ndGgpcmV0dXJuO2xldCBuPWUuJGlucHV0O2lmKCFuKXJldHVybjtsZXQgaT0oKT0+e2xldCBlPW4ucXVlcnlTZWxlY3RvckFsbCgndWwubGlzdHR5cGUgPiBsaVtkYXRhLWF1dG9tYXRpb249XCJzZWxlY3RlZC1pdGVtXCJdJyk7cmV0dXJuIEFycmF5LmZyb20oZSkubWFwKGU9PihlLnF1ZXJ5U2VsZWN0b3IoXCJzdHJvbmdcIik/LnRleHRDb250ZW50fHxlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKSkuZmlsdGVyKEJvb2xlYW4pfSxhPWkoKSxsPXIubWFwKGU9PmUudHJpbSgpLnRvTG93ZXJDYXNlKCkpLHM9YS5sZW5ndGg9PT1sLmxlbmd0aCYmbC5ldmVyeShlPT5hLmluY2x1ZGVzKGUpKTtpZihzKXJldHVybjtsZXQgdT1uLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWF1dG9tYXRpb249XCJwcmltYXJ5LWFjdGlvbi1idXR0b25cIl0nKTtpZighdSl7Y29uc29sZS53YXJuKGBFZGl0IGJ1dHRvbiBub3QgZm91bmQgZm9yICR7ZS5sYWJlbH1gKTtyZXR1cm59dS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDMwMCk7bGV0IGQ9QXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmxpc3R0eXBlID4gbGlbZGF0YS1hdXRvbWF0aW9uPVwic2VsZWN0ZWQtaXRlbVwiXScpKTtmb3IobGV0IGUgb2YgZCl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1hdXRvbWF0aW9uPVwiaXRlbS1yZW1vdmUtYnV0dG9uXCJdLCBidXR0b25bYXJpYS1sYWJlbCo9XCJlbW92ZVwiIGldLCBidXR0b24uY2xvc2UsIGJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdLmJ0bi1saW5rJyk7dCYmKHQuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApKX1sZXQgZj1uLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7aWYoIWYpe2NvbnNvbGUud2FybihgU2VsZWN0IGVsZW1lbnQgbm90IGZvdW5kIGZvciAke2UubGFiZWx9YCk7cmV0dXJufWZvcihsZXQgdCBvZiByKXthd2FpdCBPKGYsdCksYXdhaXQgKDAsYy5kZWxheSkoMjAwKTtsZXQgcj1mLm9wdGlvbnNbZi5zZWxlY3RlZEluZGV4XT8udGV4dD8udHJpbSgpfHxcIlwiLGk9KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKHIsdCk7aWYoIWkpe2NvbnNvbGUud2FybihgWyR7ZS5sYWJlbH1dIFxcdTUzMzlcXHU5MTRkXFx1NTkzMVxcdThkMjVcXHVmZjBjXFx1OGRmM1xcdThmYzcgXCIke3R9XCJcXHVmZjA4XFx1NWY1M1xcdTUyNGRcXHU5MDA5XFx1NGUyZCBcIiR7cn1cIlxcdWZmMDlgKTtjb250aW51ZX1sZXQgYT1uLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWF1dG9tYXRpb249XCJpdGVtLWFkZC1idXR0b25cIl0nKTthPyhhLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoNDAwKSk6Y29uc29sZS53YXJuKGBBZGQgYnV0dG9uIG5vdCBmb3VuZCBmb3IgJHtlLmxhYmVsfWApfWxldCBwPW4ucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtYXV0b21hdGlvbj1cInNhdmUtYnV0dG9uXCJdJyk7cD9wLmNsaWNrKCk6Y29uc29sZS53YXJuKGBTYXZlIGJ1dHRvbiBub3QgZm91bmQgZm9yICR7ZS5sYWJlbH1gKSxhd2FpdCAoMCxjLmRlbGF5KSgzMDApfWZ1bmN0aW9uIGV3KGUpe2lmKCFlPy5sZW5ndGgpcmV0dXJuW107bGV0IHQ9W107cmV0dXJuKHQ9XCJvYmplY3RcIj09dHlwZW9mIGVbMF0mJm51bGwhPT1lWzBdJiZcImxhYmVsXCJpbiBlWzBdP2UubWFwKGU9PmUubGFiZWwpOmUpLmZpbHRlcihlPT5lJiZcIlwiIT09ZS50cmltKCkpfWZ1bmN0aW9uIGVTKGUsdCl7bGV0IHI9J3VsLmxpc3R0eXBlID4gbGlbZGF0YS1hdXRvbWF0aW9uPVwic2VsZWN0ZWQtaXRlbVwiXSwgdWwubGlzdHR5cGUgPiBsaVtkYXRhLWF1dG9tYXRpb249XCJwYW5lbC1saXN0LWl0ZW1cIl0sIHVsLmxpc3R0eXBlID4gbGkucm93JyxuPWUucXVlcnlTZWxlY3RvckFsbChyKTtyZXR1cm4obj8ubGVuZ3RoPz8wKT09PTB9ZnVuY3Rpb24gZUUoZSx0KXtpZihudWxsPT10fHxcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm5cIlwiO2xldCByPXQucmVwbGFjZSgvXmxpY2Vuc2UvaSxcIlwiKSxuPXQucmVwbGFjZSgvXmxpbmsvaSxcIlwiKTtyZXR1cm4gZVt0XT8/ZVtyXT8/ZVtuXT8/KFwiTGluayBUaXRsZVwiPT09bj9lLkxpbmtUaXRsZTp2b2lkIDApPz9cIlwifWZ1bmN0aW9uIGV4KGUsdCxyKXtsZXQgbj1lLmZpbHRlcihlPT5lLnR5cGU9PT1zLkZJRUxEX1RZUEUuVEVYVCYmZS5yZXF1aXJlZCk7aWYoMD09PW4ubGVuZ3RoKXJldHVybiEwO2ZvcihsZXQgZSBvZiBuKXtsZXQgbj1lLmxhYmVsLG89ZUUodCxuKSxpPW51bGwhPW8/U3RyaW5nKG8pLnRyaW0oKTpcIlwiO2lmKCFpKXJldHVybiBjb25zb2xlLndhcm4oYCR7cn06IFxcdTdmM2FcXHU1YzExXFx1NWZjNVxcdTU4NmJcXHU2NTcwXFx1NjM2ZSBcIiR7bn1cIlxcdWZmMGNcXHU0ZTBkXFx1NjI1M1xcdTVmMDBcXHU1ZjM5XFx1Njg0NlxcdWZmMDhcXHU1ZmM1XFx1NTg2YlxcdTk4NzlcXHU1MTY4XFx1OTBlOFxcdTkwZmRcXHU2NzA5XFx1NjI0ZFxcdTYyNTNcXHU1ZjAwXFx1ZmYwOWApLCExfXJldHVybiEwfWZ1bmN0aW9uIGVDKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtLWdyb3VwXCIpPz9lLHI9dC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIiksbj1yPy50ZXh0Q29udGVudD8udHJpbSgpPz9cIlwiO2lmKCFuKXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgdWtnLWRhdGUtaW5wdXQtdGV4dFwiKSxyPWU/LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik/LnRyaW0oKTtyJiYobj1yKX1pZighbilyZXR1cm4gbnVsbDtsZXQgbz1yPy5nZXRBdHRyaWJ1dGUoXCJmb3JcIik/P1wiXCIsaT1udWxsO3JldHVybihvJiYoaT10LnF1ZXJ5U2VsZWN0b3IoYGlucHV0IyR7Q1NTLmVzY2FwZShvKX0sIHRleHRhcmVhIyR7Q1NTLmVzY2FwZShvKX1gKSksaXx8KGk9dC5xdWVyeVNlbGVjdG9yKFwidWtnLWRhdGUtaW5wdXQtdGV4dFwiKSksaXx8KGk9dC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddLCB0ZXh0YXJlYVwiKSksaSk/e2xhYmVsVGV4dDpuLGlucHV0Oml9Om51bGx9ZnVuY3Rpb24gZUEoZSx0KXtmb3IobGV0IHIgb2YgZSlyLnR5cGU9PT1zLkZJRUxEX1RZUEUuVEVYVCYmci5sYWJlbCYmdChyLmxhYmVsKX1hc3luYyBmdW5jdGlvbiBlayhlLHQscixuKXtsZXQgbz1cIiNMaWNlbnNlc0FuZENlcnRpZmljYXRpb25zU2VjdGlvblwiLGk9XCJDZXJ0aWZpY2F0aW9uc1wiO2lmKCFlfHwwPT09ZS5sZW5ndGgpcmV0dXJuO2lmKCF0KXtlQShlLG4pO3JldHVybn1sZXQgYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8pO2lmKCFhKXtjb25zb2xlLndhcm4oYCR7aX0gc2VjdGlvbiBub3QgZm91bmQ6ICR7b31gKSxlQShlLG4pO3JldHVybn1sZXQgbD1lUyhhLG8pO2lmKCFsKXtlQShlLHIpO3JldHVybn1sZXQgZD1leChlLHQsaSk7aWYoIWQpe2VBKGUsbik7cmV0dXJufWxldCBmPWEucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtYXV0b21hdGlvbj1cInByaW1hcnktYWN0aW9uLWJ1dHRvblwiXScpO2lmKCFmKXtsZXQgZT1vLnJlcGxhY2UoXCIjXCIsXCJcIik7Zj0oMCx1LmdldEZpcnN0T3JkZXJlZE5vZGUpKGAvLypbQGlkPScke2V9J10vL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uPSdwcmltYXJ5LWFjdGlvbi1idXR0b24nXWApfWlmKCFmKXtjb25zb2xlLndhcm4oYEFkZCBidXR0b24gbm90IGZvdW5kIGZvciAke2l9XFx1ZmYwY3NlY3Rpb25JZD0ke299YCksZUEoZSxuKTtyZXR1cm59Zi5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDMwMCk7bGV0IHA9bmV3IE1hcCxtPW8ucmVwbGFjZShcIiNcIixcIlwiKSxoPVwiLy8qW0BpZD0nTGljZW5zZXNBbmRDZXJ0aWZpY2F0aW9uc1NlY3Rpb24nXS8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2NvbC1tZC0xNicpIG9yIGNvbnRhaW5zKEBjbGFzcywgJ2NvbC1tZC04JyldXCIsZz0oMCx1LmdldE9yZGVyZWROb2RlcykoaCk7Zm9yKGxldCBlIG9mIGcpe2xldCB0PWUuY2xvc2VzdChcImRpdi5jb2xsYXBzZVwiKTtpZih0JiYhdC5jbGFzc0xpc3QuY29udGFpbnMoXCJpblwiKSljb250aW51ZTtsZXQgcj1lQyhlKTtpZighciljb250aW51ZTtsZXR7bGFiZWxUZXh0Om4saW5wdXQ6b309cjtwLnNldChuLG8pLG4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImxpY2Vuc2VcIil8fHAuc2V0KFwibGljZW5zZVwiK24sbyl9bGV0IGI9bmV3IFNldDtmb3IobGV0IHIgb2YgZSl7aWYoci50eXBlIT09cy5GSUVMRF9UWVBFLlRFWFQpY29udGludWU7bGV0IGU9ci5sYWJlbCxuPWVFKHQsZSksbz1udWxsIT1uP1N0cmluZyhuKS50cmltKCk6XCJcIjtpZighbyljb250aW51ZTtsZXQgaT1wLmdldChlKTtpZihpKXtsZXQgdD1hd2FpdCBEKGksbyk7dCYmYi5hZGQoZSksYXdhaXQgKDAsYy5kZWxheSkoMTAwKX19bGV0IHk9YS5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1hdXRvbWF0aW9uPVwic2F2ZS1idXR0b25cIl0nKTt5fHwoeT0oMCx1LmdldEZpcnN0T3JkZXJlZE5vZGUpKGAvLypbQGlkPScke219J10vL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uPSdzYXZlLWJ1dHRvbiddYCkpLHk/KHkuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgzMDApLGVBKGUsZT0+Yi5oYXMoZSk/cihlKTpuKGUpKSk6KGNvbnNvbGUud2FybihgJHtpfTogXFx1NjcyYVxcdTYyN2VcXHU1MjMwXFx1NGZkZFxcdTViNThcXHU2MzA5XFx1OTRhZVxcdWZmMGNkYXRhLWF1dG9tYXRpb249J3NhdmUtYnV0dG9uJ2ApLGVBKGUsbikpfWFzeW5jIGZ1bmN0aW9uIGVUKGUsdCxyLG4pe2xldCBvPVwiI0NhbmRpZGF0ZUxpbmtFZGl0XCIsaT1cIkxpbmtzXCI7aWYoIWV8fDA9PT1lLmxlbmd0aClyZXR1cm47aWYoIXQpe2VBKGUsbik7cmV0dXJufWxldCBhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobyk7aWYoIWEpe2NvbnNvbGUud2FybihgJHtpfSBzZWN0aW9uIG5vdCBmb3VuZDogJHtvfWApLGVBKGUsbik7cmV0dXJufWxldCBsPWVTKGEsbyk7aWYoIWwpe2VBKGUscik7cmV0dXJufWxldCBkPWV4KGUsdCxpKTtpZighZCl7ZUEoZSxuKTtyZXR1cm59bGV0IGY9KDAsdS5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi8vKltAaWQ9J0NhbmRpZGF0ZUxpbmtFZGl0J10vL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uPSdwcmltYXJ5LWFjdGlvbi1idXR0b24nIGFuZCBub3QoY29udGFpbnMoQHN0eWxlLCAnZGlzcGxheTogbm9uZScpKV1cIik7aWYoIWYpe2NvbnNvbGUud2FybihgQWRkIGJ1dHRvbiBub3QgZm91bmQgZm9yICR7aX1gKSxlQShlLG4pO3JldHVybn1mLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMzAwKTtsZXQgcD1uZXcgTWFwLG09by5yZXBsYWNlKFwiI1wiLFwiXCIpLGg9XCIvLypbQGlkPSdDYW5kaWRhdGVMaW5rRWRpdCddLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnY29sLXNtLTE0Jykgb3IgY29udGFpbnMoQGNsYXNzLCAnY29sLXNtLTEwJyldXCIsZz0oMCx1LmdldE9yZGVyZWROb2RlcykoaCk7Zm9yKGxldCBlIG9mIGcpe2xldCB0PWVDKGUpO2lmKCF0KWNvbnRpbnVlO2xldHtsYWJlbFRleHQ6cixpbnB1dDpufT10O3Auc2V0KHIsbiksci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibGlua1wiKXx8cC5zZXQoXCJsaW5rXCIrcixuKX1sZXQgYj1uZXcgU2V0O2ZvcihsZXQgciBvZiBlKXtpZihyLnR5cGUhPT1zLkZJRUxEX1RZUEUuVEVYVCljb250aW51ZTtsZXQgZT1yLmxhYmVsLG49ZUUodCxlKSxvPW51bGwhPW4/U3RyaW5nKG4pLnRyaW0oKTpcIlwiO2lmKCFvKWNvbnRpbnVlO2xldCBpPXAuZ2V0KGUpO2lmKGkpe2xldCB0PWF3YWl0IEQoaSxvKTt0JiZiLmFkZChlKSxhd2FpdCAoMCxjLmRlbGF5KSgxMDApfX1sZXQgeT1hLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWF1dG9tYXRpb249XCJzYXZlLWJ1dHRvblwiXScpO3l8fCh5PSgwLHUuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoYC8vKltAaWQ9JyR7bX0nXS8vYnV0dG9uW0BkYXRhLWF1dG9tYXRpb249J3NhdmUtYnV0dG9uJ11gKSkseT8oeS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDMwMCksZUEoZSxlPT5iLmhhcyhlKT9yKGUpOm4oZSkpKTooY29uc29sZS53YXJuKGAke2l9OiBcXHU2NzJhXFx1NjI3ZVxcdTUyMzBcXHU0ZmRkXFx1NWI1OFxcdTYzMDlcXHU5NGFlXFx1ZmYwY2RhdGEtYXV0b21hdGlvbj0nc2F2ZS1idXR0b24nYCksZUEoZSxuKSl9YXN5bmMgZnVuY3Rpb24gZUYoZSl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0I1JhY2VbbmFtZT1cIlJhY2VcIl0nKTt0JiZlJiYoYXdhaXQgTyh0LGUpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCkpfWFzeW5jIGZ1bmN0aW9uIGVJKGUpe2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjRWR1Y2F0aW9uU2VjdGlvblwiKTtpZighdClyZXR1cm47bGV0IHI9dC5xdWVyeVNlbGVjdG9yKCdjb2xsYXBzaWJsZS1wYW5lbC1idXR0b24gPiBidXR0b25bZGF0YS1hdXRvbWF0aW9uPVwicHJpbWFyeS1hY3Rpb24tYnV0dG9uXCJdJyk7aWYocilmb3IobGV0IG49MDtuPGU7bisrKXtyLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMzAwKTtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWF1dG9tYXRpb249XCJjYW5jZWwtYnV0dG9uXCJdJyk7ZT8uY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApfX1hc3luYyBmdW5jdGlvbiBlaihlKXtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1dvcmtFeHBlcmllbmNlU2VjdGlvblwiKTtpZighdClyZXR1cm47bGV0IHI9dC5xdWVyeVNlbGVjdG9yKCdjb2xsYXBzaWJsZS1wYW5lbC1idXR0b24gPiBidXR0b25bZGF0YS1hdXRvbWF0aW9uPVwicHJpbWFyeS1hY3Rpb24tYnV0dG9uXCJdJyk7aWYocilmb3IobGV0IG49MDtuPGU7bisrKXtyLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMzAwKTtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWF1dG9tYXRpb249XCJjYW5jZWwtYnV0dG9uXCJdJyk7ZT8uY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApfX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wZXJhdGlvbnMuN2ZhZTdhOTYuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);