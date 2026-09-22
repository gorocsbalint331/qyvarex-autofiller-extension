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
})({"3RSrl":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\hrmdirect\\country.js",
    "bundleId": "10e47b5c51a45065",
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
var j = z(require("985dc9912945d64a"));
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

},{"985dc9912945d64a":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"2HTUv":[function(require,module,exports) {
/**
 * Parcel module id: gqN7c
 * Resolved path: src/contents/sites/hrmdirect/country.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants/country -> 7z2Rw  =>  src/constants/country.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "normalizeHrmdirectCountry", ()=>g), n.export(r, "resolveHrmdirectCountryOption", ()=>v), n.export(r, "isHrmdirectMainCountrySelect", ()=>A), n.export(r, "findHrmdirectMainCountrySelect", ()=>k), n.export(r, "fillHrmdirectCountry", ()=>P), n.export(r, "waitForHrmdirectStateProvince", ()=>N), n.export(r, "getHrmdirectStateProvinceControl", ()=>$), n.export(r, "prefillHrmdirectCountry", ()=>B), n.export(r, "runHrmdirectCountryPrefill", ()=>q), n.export(r, "partitionHrmdirectCountryRules", ()=>U), n.export(r, "reconcileHrmdirectCountryProgress", ()=>H);
var o = e("~constants/country");
let i = 200, a = 6, l = 50, s = 20, u = 50, c = 2, d = {
    US: new Set([
        "us",
        "usa",
        "united states",
        "united states of america"
    ]),
    CA: new Set([
        "ca",
        "canada"
    ]),
    GB: new Set([
        "uk",
        "gb",
        "great britain",
        "united kingdom"
    ])
}, f = [
    {
        iso2: "BL",
        names: [
            "Saint Barthelemy"
        ]
    },
    {
        iso2: "BQ",
        names: [
            "Bonaire",
            "Saba",
            "Sint Eustatius",
            "Bonaire Sint Eustatius and Saba",
            "Caribbean Netherlands"
        ]
    },
    {
        iso2: "EH",
        names: [
            "Western Sahara"
        ]
    },
    {
        iso2: "GG",
        names: [
            "Guernsey"
        ]
    },
    {
        iso2: "IM",
        names: [
            "Isle of Man"
        ]
    },
    {
        iso2: "JE",
        names: [
            "Jersey"
        ]
    },
    {
        iso2: "ME",
        names: [
            "Montenegro"
        ]
    },
    {
        iso2: "MF",
        names: [
            "Saint Martin French part"
        ]
    },
    {
        iso2: "RS",
        names: [
            "Serbia",
            "CS"
        ]
    },
    {
        iso2: "SS",
        names: [
            "South Sudan"
        ]
    },
    {
        iso2: "UM",
        names: [
            "United States Minor Outlying Islands"
        ]
    }
], p = {
    CS: "RS",
    FX: "FR"
}, m = new Set("AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ")), h = new Set("AB BC MB NB NL NS NT NU ON PE QC SK YT".split(" "));
function g(e1) {
    return String(e1 ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\p{P}\p{S}]+/gu, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function b(e1) {
    let t = String(e1 ?? "").trim().toUpperCase();
    return /^[A-Z]{2}$/.test(t) ? t : null;
}
function y(e1) {
    let t = g(e1);
    if (!t) return null;
    for (let [e1, r1] of Object.entries(d))if (r1.has(t)) return e1;
    let r1 = new Set;
    for (let e1 of f)(t === e1.iso2.toLowerCase() || e1.names.some((e1)=>g(e1) === t)) && r1.add(e1.iso2);
    for (let e1 of o.COUNTRY_OPTIONS){
        let n = b(e1.code);
        n && (t === n.toLowerCase() || g(e1.label) === t || g(e1.value) === t) && r1.add(p[n] ?? n);
    }
    return 1 === r1.size ? Array.from(r1)[0] : null;
}
function v(e1, t) {
    try {
        let r1 = y(t);
        if (!r1) return null;
        let n = Array.from(e1).filter((e1)=>b(e1.value) === r1);
        return 1 === n.length ? n[0] : null;
    } catch  {
        return null;
    }
}
function w(e1) {
    let t = e1.querySelector(".control-label.field-title, [class='control-label field-title'], label");
    return String(t?.textContent ?? "").replace(/\s*\*\s*$/, "").trim();
}
function S(e1, t) {
    let r1 = Array.from(e1.querySelectorAll(".form-field"));
    return r1.find((e1)=>g(w(e1)) === g(t)) ?? null;
}
_c = S;
function E(e1) {
    try {
        let t = new Set(Array.from(e1.options).map((e1)=>b(e1.value)).filter((e1)=>!!e1));
        return t.size >= i;
    } catch  {
        return !1;
    }
}
_c1 = E;
function x(e1) {
    let t = e1.closest(".form-field"), r1 = t?.closest(".section-container");
    return !!t && !!r1 && Array.from(r1.querySelectorAll(".form-field")).some((e1)=>"state or province" === g(w(e1)));
}
function C(e1) {
    return e1?.closest?.(".section-container") ?? null;
}
_c2 = C;
function A(e1) {
    if (!e1 || "SELECT" !== e1.tagName) return !1;
    let t = e1;
    if ("function" != typeof t.closest || "function" != typeof t.getAttribute) return !1;
    let r1 = t.closest(".form-field"), n = t.closest("form.section-form");
    return !!(r1 && n && "country" === g(w(r1)) && t.classList?.contains("field-dropdown") && "true" === t.getAttribute("data-dynamic") && x(t) && E(t));
}
_c3 = A;
function k(e1 = document) {
    let t = e1.querySelector("form.section-form");
    if (!t) return null;
    let r1 = Array.from(t.querySelectorAll('select.field-dropdown[data-dynamic="true"]')).filter(A);
    return 1 === r1.length ? r1[0] : null;
}
function T(e1, t) {
    e1.selectedIndex = t, Array.from(e1.options).forEach((e1, r1)=>{
        e1.selected = r1 === t;
    });
}
_c4 = T;
function F(e1) {
    e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    }));
}
_c5 = F;
function I(e1, t) {
    if (!e1) return !1;
    try {
        let r1 = Array.from(e1.options), n = r1.reduce((e1, r1, n)=>(r1.value === t.value && e1.push(n), e1), []);
        if (1 !== n.length) return !1;
        let o = n[0];
        return T(e1, o), F(e1), D(e1) === b(t.value);
    } catch  {
        return !1;
    }
}
_c6 = I;
function j(e1, t) {
    let r1 = I(e1, t);
    return r1 || console.warn("[HRMDirect Country] unable to restore original semantic selection"), r1;
}
function D(e1) {
    try {
        let t = Array.from(e1.options)[e1.selectedIndex];
        if (!t || !t.selected || t.value !== e1.value) return null;
        return b(t.value);
    } catch  {
        return null;
    }
}
_c7 = D;
async function P(e1, t, r1 = ()=>e1, n = {}) {
    let o;
    try {
        o = Array.from(e1.options);
    } catch  {
        return {
            committed: !1,
            countryIso2: null
        };
    }
    let i = v(o, t), s = i ? b(i.value) : null;
    if (!i || !s) return {
        committed: !1,
        countryIso2: null
    };
    let u = o.indexOf(i);
    if (u < 0) return {
        committed: !1,
        countryIso2: s
    };
    let c = o[e1.selectedIndex], d = {
        value: c?.value ?? e1.value
    }, f = b(d.value);
    try {
        if (D(e1) === s) {
            let e1 = r1();
            return {
                committed: !!(e1 && D(e1) === s),
                countryIso2: s,
                dependentCountryIso2: s
            };
        }
        T(e1, u), F(e1);
        let t = n.pollCount ?? a, o = n.pollMs ?? l, i = Math.min(2, Math.max(1, t)), c = 0, p = null;
        for(let e1 = 0; e1 < t; e1++)if (o > 0 && await new Promise((e1)=>setTimeout(e1, o)), (p = r1()) && D(p) === s) {
            if (++c >= i) return {
                committed: !0,
                countryIso2: s,
                dependentCountryIso2: s
            };
        } else c = 0;
        let m = j(p, d);
        return {
            committed: !1,
            countryIso2: s,
            dependentCountryIso2: m ? f : null,
            failureReason: m ? "commit-rejected" : "rollback-failed"
        };
    } catch  {
        let e1 = null;
        try {
            e1 = r1();
        } catch  {}
        let t = j(e1, d);
        return {
            committed: !1,
            countryIso2: s,
            dependentCountryIso2: t ? f : null,
            failureReason: t ? "commit-rejected" : "rollback-failed"
        };
    }
}
_c8 = P;
function _(e1) {
    let t = k(e1), r1 = C(t);
    if (!r1) return null;
    let n = S(r1, "State or Province");
    return n?.querySelector("select.field-dropdown, select, input[type='text'], input:not([type])") ?? null;
}
function L(e1) {
    let t = e1.getAttribute?.("data-country") ?? e1.getAttribute?.("data-country-code") ?? e1.getAttribute?.("data-group");
    return b(t);
}
_c9 = L;
function R(e1) {
    let t = L(e1);
    if ("US" === t || "CA" === t) return t;
    let r1 = String(e1.value ?? "").trim().toUpperCase(), n = /^(US|CA)[-_]/.exec(r1)?.[1];
    return "US" === n || "CA" === n ? n : m.has(r1) ? "US" : h.has(r1) ? "CA" : null;
}
_c10 = R;
function O(e1, t) {
    if (!e1.isConnected) return !1;
    let r1 = Array.from(e1.options).filter((e1)=>"" !== String(e1.value ?? "").trim());
    return 0 !== r1.length && r1.every((e1)=>R(e1) === t);
}
_c11 = O;
function M(e1) {
    if ("SELECT" === e1.tagName) try {
        return `select:${Array.from(e1.options).map((e1)=>`${e1.value}:${e1.textContent ?? ""}`).join("|")}`;
    } catch  {
        return "select:unreadable";
    }
    return `${e1.tagName}:${e1.type ?? ""}`;
}
_c12 = M;
async function N(e1, t = null, r1 = document, n = {}) {
    let o = b(e1);
    if (!o) return !1;
    let i = n.maxAttempts ?? s, a = n.pollMs ?? u, l = Math.max(1, n.stablePolls ?? c), d = "", f = 0;
    for(let e1 = 0; e1 < i; e1++){
        let n = _(r1), s = t?.tagName === "SELECT", u = "US" === o || "CA" === o ? n?.tagName === "SELECT" && O(n, o) : !!(n && (!s || n !== t) && n.isConnected && "INPUT" === n.tagName && [
            "",
            "text"
        ].includes(String(n.type ?? "").toLowerCase()));
        if (u && n) {
            let e1 = M(n);
            if (f = e1 === d ? f + 1 : 1, d = e1, f >= l) return !0;
        } else f = 0, d = "";
        e1 + 1 < i && a > 0 && await new Promise((e1)=>setTimeout(e1, a));
    }
    return !1;
}
_c13 = N;
function $(e1 = document) {
    return _(e1);
}
async function B(e1, t = document) {
    let r1 = k(t);
    return r1 ? P(r1, e1, ()=>k(t)) : {
        committed: !1,
        countryIso2: null
    };
}
_c14 = B;
async function q(e1) {
    await e1.reinitialize();
    try {
        let t = await e1.fetchAutofillInfo(), r1 = t?.location?.country;
        if ("string" != typeof r1 || !r1.trim()) return {
            country: null,
            countryIso2: null,
            committed: !1,
            dependentsSettled: !1
        };
        let n = r1.trim(), o = e1.getStateProvinceControl?.() ?? null, i = await e1.prefillCountry(n), a = i.dependentCountryIso2 ?? (i.committed ? i.countryIso2 : null), l = !!a && (await e1.waitForStateProvince?.(a, o) ?? !0);
        return {
            country: n,
            countryIso2: i.countryIso2,
            committed: i.committed,
            dependentsSettled: l,
            dependentCountryIso2: a,
            failureReason: i.failureReason
        };
    } catch  {
        return {
            country: null,
            countryIso2: null,
            committed: !1,
            dependentsSettled: !1
        };
    }
}
function U(e1, t) {
    let r1 = e1.filter((e1)=>A(e1.$input));
    if (0 === r1.length) return {
        discovery: "none",
        mainCountryRules: [],
        deferredDependentRules: [],
        regularRules: e1
    };
    if (r1.length > 1) return {
        discovery: "ambiguous",
        mainCountryRules: r1,
        deferredDependentRules: [],
        regularRules: e1.filter((e1)=>!r1.includes(e1))
    };
    let n = r1[0], o = C(n.$input), i = t.dependentsSettled ? [] : e1.filter((e1)=>e1 !== n && "state or province" === g(e1.label) && C(e1.$input) === o);
    return {
        discovery: "stable",
        mainCountryRules: [
            n
        ],
        deferredDependentRules: i,
        regularRules: e1.filter((e1)=>e1 !== n && !i.includes(e1))
    };
}
_c15 = U;
function H(e1, t, r1) {
    for (let n of e1)t ? r1.updateFilledProgress(n.label) : r1.updateMissedProgress(n.label);
}
_c16 = H;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
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
$RefreshReg$(_c11, "O");
$RefreshReg$(_c12, "M");
$RefreshReg$(_c13, "N");
$RefreshReg$(_c14, "B");
$RefreshReg$(_c15, "U");
$RefreshReg$(_c16, "H");

},{}]},["3RSrl","2HTUv"], "2HTUv", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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RUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsQ0FBQyxJQUFFLE9BQU0sQ0FBQztJQUFFLElBQUc7UUFBQyxJQUFJLEtBQUUsTUFBTSxLQUFLLEdBQUUsVUFBUyxJQUFFLEdBQUUsT0FBTyxDQUFDLElBQUUsSUFBRSxJQUFLLENBQUEsR0FBRSxVQUFRLEVBQUUsU0FBTyxHQUFFLEtBQUssSUFBRyxFQUFBLEdBQUcsRUFBRTtRQUFFLElBQUcsTUFBSSxFQUFFLFFBQU8sT0FBTSxDQUFDO1FBQUUsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFO1FBQUMsT0FBTyxFQUFFLElBQUUsSUFBRyxFQUFFLEtBQUcsRUFBRSxRQUFLLEVBQUUsRUFBRTtJQUFNLEVBQUMsT0FBSztRQUFDLE9BQU0sQ0FBQztJQUFDO0FBQUM7TUFBdk07QUFBd00sU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxLQUFFLEVBQUUsSUFBRTtJQUFHLE9BQU8sTUFBRyxRQUFRLEtBQUssc0VBQXFFO0FBQUM7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUc7UUFBQyxJQUFJLElBQUUsTUFBTSxLQUFLLEdBQUUsUUFBUSxDQUFDLEdBQUUsY0FBYztRQUFDLElBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxZQUFVLEVBQUUsVUFBUSxHQUFFLE9BQU0sT0FBTztRQUFLLE9BQU8sRUFBRSxFQUFFO0lBQU0sRUFBQyxPQUFLO1FBQUMsT0FBTztJQUFJO0FBQUM7TUFBNUk7QUFBNkksZUFBZSxFQUFFLEVBQUMsRUFBQyxDQUFDLEVBQUMsS0FBRSxJQUFJLEVBQUMsRUFBQyxJQUFFLENBQUMsQ0FBQztJQUFFLElBQUk7SUFBRSxJQUFHO1FBQUMsSUFBRSxNQUFNLEtBQUssR0FBRTtJQUFRLEVBQUMsT0FBSztRQUFDLE9BQU07WUFBQyxXQUFVLENBQUM7WUFBRSxhQUFZO1FBQUk7SUFBQztJQUFDLElBQUksSUFBRSxFQUFFLEdBQUUsSUFBRyxJQUFFLElBQUUsRUFBRSxFQUFFLFNBQU87SUFBSyxJQUFHLENBQUMsS0FBRyxDQUFD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QVMsSUFBSSxDQUFBLEtBQUcsQ0FBQyxFQUFFLEdBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRSxlQUFhLEdBQUcsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDO0lBQUEsRUFBQyxPQUFLO1FBQUMsT0FBTTtJQUFtQjtJQUFDLE9BQU0sQ0FBQyxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRSxRQUFNLEdBQUcsQ0FBQztBQUFBO09BQS9MO0FBQWdNLGVBQWUsRUFBRSxFQUFDLEVBQUMsSUFBRSxJQUFJLEVBQUMsS0FBRSxRQUFRLEVBQUMsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRTtJQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU0sQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLGVBQWEsR0FBRSxJQUFFLEVBQUUsVUFBUSxHQUFFLElBQUUsS0FBSyxJQUFJLEdBQUUsRUFBRSxlQUFhLElBQUcsSUFBRSxJQUFHLElBQUU7SUFBRSxJQUFJLElBQUksS0FBRSxHQUFFLEtBQUUsR0FBRSxLQUFJO1FBQUMsSUFBSSxJQUFFLEVBQUUsS0FBRyxJQUFFLEdBQUcsWUFBVSxVQUFTLElBQUUsU0FBTyxLQUFHLFNBQU8sSUFBRSxHQUFHLFlBQVUsWUFBVSxFQUFFLEdBQUUsS0FBRyxDQUFDLENBQUUsQ0FBQSxLQUFJLENBQUEsQ0FBQyxLQUFHLE1BQUksQ0FBQSxLQUFJLEVBQUUsZUFBYSxZQUFVLEVBQUUsV0FBUztZQUFDO1lBQUc7U0FBTyxDQUFDLFNBQVMsT0FBTyxFQUFFLFFBQU0sSUFBSSxjQUFhO1FBQUcsSUFBRyxLQUFHLEdBQUU7WUFBQyxJQUFJLEtBQUUsRUFBRTtZQUFHLElBQUcsSUFBRSxPQUFJLElBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLEtBQUcsR0FBRSxPQUFNLENBQUM7UUFBQyxPQUFNLElBQUUsR0FBRSxJQUFFO1FBQUcsS0FBRSxJQUFFLEtBQUcsSUFBRSxLQUFHLE1BQU0sSUFBSSxRQUFRLENBQUEsS0FBRyxXQUFXLElBQUU7SUFBRztJQUFDLE9BQU0sQ0FBQztBQUFDO09BQTVkO0FBQTZkLFNBQVMsRUFBRSxLQUFFLFFBQVE7SUFBRSxPQUFPLEVBQUU7QUFBRTtBQUFDLGVBQWUsRUFBRSxFQUFDLEVBQUMsSUFBRSxRQUFRO0lBQUUsSUFBSSxLQUFFLEVBQUU7SUFBRyxPQUFPLEtBQUUsRUFBRSxJQUFFLElBQUUsSUFBSSxFQUFFLE1BQUk7UUFBQyxXQUFVLENBQUM7UUFBRSxhQUFZO0lBQUk7QUFBQztPQUFuRjtBQUFvRixlQUFlLEVBQUUsRUFBQztJQUFFLE1BQU0sR0FBRTtJQUFlLElBQUc7UUFBQyxJQUFJLElBQUUsTUFBTSxHQUFFLHFCQUFvQixLQUFFLEdBQUcsVUFBVTtRQUFRLElBQUcsWUFBVSxPQUFPLE1BQUcsQ0FBQyxHQUFFLFFBQU8sT0FBTTtZQUFDLFNBQVE7WUFBSyxhQUFZO1lBQUssV0FBVSxDQUFDO1lBQUUsbUJBQWtCLENBQUM7UUFBQztRQUFFLElBQUksSUFBRSxHQUFFLFFBQU8sSUFBRSxHQUFFLCtCQUE2QixNQUFLLElBQUUsTUFBTSxHQUFFLGVBQWUsSUFBRyxJQUFFLEVBQUUsd0JBQXVCLENBQUEsRUFBRSxZQUFVLEVBQUUsY0FBWSxJQUFHLEdBQUcsSUFBRSxDQUFDLENBQUMsS0FBSSxDQUFBLE1BQU0sR0FBRSx1QkFBdUIsR0FBRSxNQUFJLENBQUMsQ0FBQTtRQUFHLE9BQU07WUFBQyxTQUFRO1lBQUUsYUFBWSxFQUFFO1lBQVksV0FBVSxFQUFFO1lBQVUsbUJBQWtCO1lBQUUsc0JBQXFCO1lBQUUsZUFBYyxFQUFFO1FBQWE7SUFBQyxFQUFDLE9BQUs7UUFBQyxPQUFNO1lBQUMsU0FBUTtZQUFLLGFBQVk7WUFBSyxXQUFVLENBQUM7WUFBRSxtQkFBa0IsQ0FBQztRQUFDO0lBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxHQUFFLE9BQU8sQ0FBQSxLQUFHLEVBQUUsR0FBRTtJQUFTLElBQUcsTUFBSSxHQUFFLFFBQU8sT0FBTTtRQUFDLFdBQVU7UUFBTyxrQkFBaUIsRUFBRTtRQUFDLHdCQUF1QixFQUFFO1FBQUMsY0FBYTtJQUFDO0lBQUUsSUFBRyxHQUFFLFNBQU8sR0FBRSxPQUFNO1FBQUMsV0FBVTtRQUFZLGtCQUFpQjtRQUFFLHdCQUF1QixFQUFFO1FBQUMsY0FBYSxHQUFFLE9BQU8sQ0FBQSxLQUFHLENBQUMsR0FBRSxTQUFTO0lBQUc7SUFBRSxJQUFJLElBQUUsRUFBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUUsRUFBRSxTQUFRLElBQUUsRUFBRSxvQkFBa0IsRUFBRSxHQUFDLEdBQUUsT0FBTyxDQUFBLEtBQUcsT0FBSSxLQUFHLHdCQUFzQixFQUFFLEdBQUUsVUFBUSxFQUFFLEdBQUUsWUFBVTtJQUFHLE9BQU07UUFBQyxXQUFVO1FBQVMsa0JBQWlCO1lBQUM7U0FBRTtRQUFDLHdCQUF1QjtRQUFFLGNBQWEsR0FBRSxPQUFPLENBQUEsS0FBRyxPQUFJLEtBQUcsQ0FBQyxFQUFFLFNBQVM7SUFBRztBQUFDO09BQTlmO0FBQStmLFNBQVMsRUFBRSxFQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUM7SUFBRSxLQUFJLElBQUksS0FBSyxHQUFFLElBQUUsR0FBRSxxQkFBcUIsRUFBRSxTQUFPLEdBQUUscUJBQXFCLEVBQUU7QUFBTTtPQUF6RiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYjA1MDhkZDg1YTkyZGY2ZS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9ocm1kaXJlY3QvY291bnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxocm1kaXJlY3RcXFxcY291bnRyeS5qc1wiLFwiYnVuZGxlSWRcIjpcIjEwZTQ3YjVjNTFhNDUwNjVcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBncU43Y1xyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvaHJtZGlyZWN0L2NvdW50cnkuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnN0YW50cy9jb3VudHJ5IC0+IDd6MlJ3ICA9PiAgc3JjL2NvbnN0YW50cy9jb3VudHJ5LmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwibm9ybWFsaXplSHJtZGlyZWN0Q291bnRyeVwiLCgpPT5nKSxuLmV4cG9ydChyLFwicmVzb2x2ZUhybWRpcmVjdENvdW50cnlPcHRpb25cIiwoKT0+diksbi5leHBvcnQocixcImlzSHJtZGlyZWN0TWFpbkNvdW50cnlTZWxlY3RcIiwoKT0+QSksbi5leHBvcnQocixcImZpbmRIcm1kaXJlY3RNYWluQ291bnRyeVNlbGVjdFwiLCgpPT5rKSxuLmV4cG9ydChyLFwiZmlsbEhybWRpcmVjdENvdW50cnlcIiwoKT0+UCksbi5leHBvcnQocixcIndhaXRGb3JIcm1kaXJlY3RTdGF0ZVByb3ZpbmNlXCIsKCk9Pk4pLG4uZXhwb3J0KHIsXCJnZXRIcm1kaXJlY3RTdGF0ZVByb3ZpbmNlQ29udHJvbFwiLCgpPT4kKSxuLmV4cG9ydChyLFwicHJlZmlsbEhybWRpcmVjdENvdW50cnlcIiwoKT0+Qiksbi5leHBvcnQocixcInJ1bkhybWRpcmVjdENvdW50cnlQcmVmaWxsXCIsKCk9PnEpLG4uZXhwb3J0KHIsXCJwYXJ0aXRpb25Icm1kaXJlY3RDb3VudHJ5UnVsZXNcIiwoKT0+VSksbi5leHBvcnQocixcInJlY29uY2lsZUhybWRpcmVjdENvdW50cnlQcm9ncmVzc1wiLCgpPT5IKTt2YXIgbz1lKFwifmNvbnN0YW50cy9jb3VudHJ5XCIpO2xldCBpPTIwMCxhPTYsbD01MCxzPTIwLHU9NTAsYz0yLGQ9e1VTOm5ldyBTZXQoW1widXNcIixcInVzYVwiLFwidW5pdGVkIHN0YXRlc1wiLFwidW5pdGVkIHN0YXRlcyBvZiBhbWVyaWNhXCJdKSxDQTpuZXcgU2V0KFtcImNhXCIsXCJjYW5hZGFcIl0pLEdCOm5ldyBTZXQoW1widWtcIixcImdiXCIsXCJncmVhdCBicml0YWluXCIsXCJ1bml0ZWQga2luZ2RvbVwiXSl9LGY9W3tpc28yOlwiQkxcIixuYW1lczpbXCJTYWludCBCYXJ0aGVsZW15XCJdfSx7aXNvMjpcIkJRXCIsbmFtZXM6W1wiQm9uYWlyZVwiLFwiU2FiYVwiLFwiU2ludCBFdXN0YXRpdXNcIixcIkJvbmFpcmUgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIixcIkNhcmliYmVhbiBOZXRoZXJsYW5kc1wiXX0se2lzbzI6XCJFSFwiLG5hbWVzOltcIldlc3Rlcm4gU2FoYXJhXCJdfSx7aXNvMjpcIkdHXCIsbmFtZXM6W1wiR3Vlcm5zZXlcIl19LHtpc28yOlwiSU1cIixuYW1lczpbXCJJc2xlIG9mIE1hblwiXX0se2lzbzI6XCJKRVwiLG5hbWVzOltcIkplcnNleVwiXX0se2lzbzI6XCJNRVwiLG5hbWVzOltcIk1vbnRlbmVncm9cIl19LHtpc28yOlwiTUZcIixuYW1lczpbXCJTYWludCBNYXJ0aW4gRnJlbmNoIHBhcnRcIl19LHtpc28yOlwiUlNcIixuYW1lczpbXCJTZXJiaWFcIixcIkNTXCJdfSx7aXNvMjpcIlNTXCIsbmFtZXM6W1wiU291dGggU3VkYW5cIl19LHtpc28yOlwiVU1cIixuYW1lczpbXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIl19XSxwPXtDUzpcIlJTXCIsRlg6XCJGUlwifSxtPW5ldyBTZXQoXCJBTCBBSyBBWiBBUiBDQSBDTyBDVCBERSBEQyBGTCBHQSBISSBJRCBJTCBJTiBJQSBLUyBLWSBMQSBNRSBNRCBNQSBNSSBNTiBNUyBNTyBNVCBORSBOViBOSCBOSiBOTSBOWSBOQyBORCBPSCBPSyBPUiBQQSBSSSBTQyBTRCBUTiBUWCBVVCBWVCBWQSBXQSBXViBXSSBXWVwiLnNwbGl0KFwiIFwiKSksaD1uZXcgU2V0KFwiQUIgQkMgTUIgTkIgTkwgTlMgTlQgTlUgT04gUEUgUUMgU0sgWVRcIi5zcGxpdChcIiBcIikpO2Z1bmN0aW9uIGcoZSl7cmV0dXJuIFN0cmluZyhlPz9cIlwiKS5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZyxcIlwiKS5yZXBsYWNlKC9bXFxwe1B9XFxwe1N9XSsvZ3UsXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gYihlKXtsZXQgdD1TdHJpbmcoZT8/XCJcIikudHJpbSgpLnRvVXBwZXJDYXNlKCk7cmV0dXJuL15bQS1aXXsyfSQvLnRlc3QodCk/dDpudWxsfWZ1bmN0aW9uIHkoZSl7bGV0IHQ9ZyhlKTtpZighdClyZXR1cm4gbnVsbDtmb3IobGV0W2Uscl1vZiBPYmplY3QuZW50cmllcyhkKSlpZihyLmhhcyh0KSlyZXR1cm4gZTtsZXQgcj1uZXcgU2V0O2ZvcihsZXQgZSBvZiBmKSh0PT09ZS5pc28yLnRvTG93ZXJDYXNlKCl8fGUubmFtZXMuc29tZShlPT5nKGUpPT09dCkpJiZyLmFkZChlLmlzbzIpO2ZvcihsZXQgZSBvZiBvLkNPVU5UUllfT1BUSU9OUyl7bGV0IG49YihlLmNvZGUpO24mJih0PT09bi50b0xvd2VyQ2FzZSgpfHxnKGUubGFiZWwpPT09dHx8ZyhlLnZhbHVlKT09PXQpJiZyLmFkZChwW25dPz9uKX1yZXR1cm4gMT09PXIuc2l6ZT9BcnJheS5mcm9tKHIpWzBdOm51bGx9ZnVuY3Rpb24gdihlLHQpe3RyeXtsZXQgcj15KHQpO2lmKCFyKXJldHVybiBudWxsO2xldCBuPUFycmF5LmZyb20oZSkuZmlsdGVyKGU9PmIoZS52YWx1ZSk9PT1yKTtyZXR1cm4gMT09PW4ubGVuZ3RoP25bMF06bnVsbH1jYXRjaHtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gdyhlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbC1sYWJlbC5maWVsZC10aXRsZSwgW2NsYXNzPSdjb250cm9sLWxhYmVsIGZpZWxkLXRpdGxlJ10sIGxhYmVsXCIpO3JldHVybiBTdHJpbmcodD8udGV4dENvbnRlbnQ/P1wiXCIpLnJlcGxhY2UoL1xccypcXCpcXHMqJC8sXCJcIikudHJpbSgpfWZ1bmN0aW9uIFMoZSx0KXtsZXQgcj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLWZpZWxkXCIpKTtyZXR1cm4gci5maW5kKGU9PmcodyhlKSk9PT1nKHQpKT8/bnVsbH1mdW5jdGlvbiBFKGUpe3RyeXtsZXQgdD1uZXcgU2V0KEFycmF5LmZyb20oZS5vcHRpb25zKS5tYXAoZT0+YihlLnZhbHVlKSkuZmlsdGVyKGU9PiEhZSkpO3JldHVybiB0LnNpemU+PWl9Y2F0Y2h7cmV0dXJuITF9fWZ1bmN0aW9uIHgoZSl7bGV0IHQ9ZS5jbG9zZXN0KFwiLmZvcm0tZmllbGRcIikscj10Py5jbG9zZXN0KFwiLnNlY3Rpb24tY29udGFpbmVyXCIpO3JldHVybiEhdCYmISFyJiZBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLWZpZWxkXCIpKS5zb21lKGU9Plwic3RhdGUgb3IgcHJvdmluY2VcIj09PWcodyhlKSkpfWZ1bmN0aW9uIEMoZSl7cmV0dXJuIGU/LmNsb3Nlc3Q/LihcIi5zZWN0aW9uLWNvbnRhaW5lclwiKT8/bnVsbH1mdW5jdGlvbiBBKGUpe2lmKCFlfHxcIlNFTEVDVFwiIT09ZS50YWdOYW1lKXJldHVybiExO2xldCB0PWU7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdC5jbG9zZXN0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LmdldEF0dHJpYnV0ZSlyZXR1cm4hMTtsZXQgcj10LmNsb3Nlc3QoXCIuZm9ybS1maWVsZFwiKSxuPXQuY2xvc2VzdChcImZvcm0uc2VjdGlvbi1mb3JtXCIpO3JldHVybiEhKHImJm4mJlwiY291bnRyeVwiPT09Zyh3KHIpKSYmdC5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwiZmllbGQtZHJvcGRvd25cIikmJlwidHJ1ZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWR5bmFtaWNcIikmJngodCkmJkUodCkpfWZ1bmN0aW9uIGsoZT1kb2N1bWVudCl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiZm9ybS5zZWN0aW9uLWZvcm1cIik7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdC5maWVsZC1kcm9wZG93bltkYXRhLWR5bmFtaWM9XCJ0cnVlXCJdJykpLmZpbHRlcihBKTtyZXR1cm4gMT09PXIubGVuZ3RoP3JbMF06bnVsbH1mdW5jdGlvbiBUKGUsdCl7ZS5zZWxlY3RlZEluZGV4PXQsQXJyYXkuZnJvbShlLm9wdGlvbnMpLmZvckVhY2goKGUscik9PntlLnNlbGVjdGVkPXI9PT10fSl9ZnVuY3Rpb24gRihlKXtlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSl9ZnVuY3Rpb24gSShlLHQpe2lmKCFlKXJldHVybiExO3RyeXtsZXQgcj1BcnJheS5mcm9tKGUub3B0aW9ucyksbj1yLnJlZHVjZSgoZSxyLG4pPT4oci52YWx1ZT09PXQudmFsdWUmJmUucHVzaChuKSxlKSxbXSk7aWYoMSE9PW4ubGVuZ3RoKXJldHVybiExO2xldCBvPW5bMF07cmV0dXJuIFQoZSxvKSxGKGUpLEQoZSk9PT1iKHQudmFsdWUpfWNhdGNoe3JldHVybiExfX1mdW5jdGlvbiBqKGUsdCl7bGV0IHI9SShlLHQpO3JldHVybiByfHxjb25zb2xlLndhcm4oXCJbSFJNRGlyZWN0IENvdW50cnldIHVuYWJsZSB0byByZXN0b3JlIG9yaWdpbmFsIHNlbWFudGljIHNlbGVjdGlvblwiKSxyfWZ1bmN0aW9uIEQoZSl7dHJ5e2xldCB0PUFycmF5LmZyb20oZS5vcHRpb25zKVtlLnNlbGVjdGVkSW5kZXhdO2lmKCF0fHwhdC5zZWxlY3RlZHx8dC52YWx1ZSE9PWUudmFsdWUpcmV0dXJuIG51bGw7cmV0dXJuIGIodC52YWx1ZSl9Y2F0Y2h7cmV0dXJuIG51bGx9fWFzeW5jIGZ1bmN0aW9uIFAoZSx0LHI9KCk9PmUsbj17fSl7bGV0IG87dHJ5e289QXJyYXkuZnJvbShlLm9wdGlvbnMpfWNhdGNoe3JldHVybntjb21taXR0ZWQ6ITEsY291bnRyeUlzbzI6bnVsbH19bGV0IGk9dihvLHQpLHM9aT9iKGkudmFsdWUpOm51bGw7aWYoIWl8fCFzKXJldHVybntjb21taXR0ZWQ6ITEsY291bnRyeUlzbzI6bnVsbH07bGV0IHU9by5pbmRleE9mKGkpO2lmKHU8MClyZXR1cm57Y29tbWl0dGVkOiExLGNvdW50cnlJc28yOnN9O2xldCBjPW9bZS5zZWxlY3RlZEluZGV4XSxkPXt2YWx1ZTpjPy52YWx1ZT8/ZS52YWx1ZX0sZj1iKGQudmFsdWUpO3RyeXtpZihEKGUpPT09cyl7bGV0IGU9cigpO3JldHVybntjb21taXR0ZWQ6ISEoZSYmRChlKT09PXMpLGNvdW50cnlJc28yOnMsZGVwZW5kZW50Q291bnRyeUlzbzI6c319VChlLHUpLEYoZSk7bGV0IHQ9bi5wb2xsQ291bnQ/P2Esbz1uLnBvbGxNcz8/bCxpPU1hdGgubWluKDIsTWF0aC5tYXgoMSx0KSksYz0wLHA9bnVsbDtmb3IobGV0IGU9MDtlPHQ7ZSsrKWlmKG8+MCYmYXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLG8pKSwocD1yKCkpJiZEKHApPT09cyl7aWYoKytjPj1pKXJldHVybntjb21taXR0ZWQ6ITAsY291bnRyeUlzbzI6cyxkZXBlbmRlbnRDb3VudHJ5SXNvMjpzfX1lbHNlIGM9MDtsZXQgbT1qKHAsZCk7cmV0dXJue2NvbW1pdHRlZDohMSxjb3VudHJ5SXNvMjpzLGRlcGVuZGVudENvdW50cnlJc28yOm0/ZjpudWxsLGZhaWx1cmVSZWFzb246bT9cImNvbW1pdC1yZWplY3RlZFwiOlwicm9sbGJhY2stZmFpbGVkXCJ9fWNhdGNoe2xldCBlPW51bGw7dHJ5e2U9cigpfWNhdGNoe31sZXQgdD1qKGUsZCk7cmV0dXJue2NvbW1pdHRlZDohMSxjb3VudHJ5SXNvMjpzLGRlcGVuZGVudENvdW50cnlJc28yOnQ/ZjpudWxsLGZhaWx1cmVSZWFzb246dD9cImNvbW1pdC1yZWplY3RlZFwiOlwicm9sbGJhY2stZmFpbGVkXCJ9fX1mdW5jdGlvbiBfKGUpe2xldCB0PWsoZSkscj1DKHQpO2lmKCFyKXJldHVybiBudWxsO2xldCBuPVMocixcIlN0YXRlIG9yIFByb3ZpbmNlXCIpO3JldHVybiBuPy5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LmZpZWxkLWRyb3Bkb3duLCBzZWxlY3QsIGlucHV0W3R5cGU9J3RleHQnXSwgaW5wdXQ6bm90KFt0eXBlXSlcIik/P251bGx9ZnVuY3Rpb24gTChlKXtsZXQgdD1lLmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1jb3VudHJ5XCIpPz9lLmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1jb3VudHJ5LWNvZGVcIik/P2UuZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWdyb3VwXCIpO3JldHVybiBiKHQpfWZ1bmN0aW9uIFIoZSl7bGV0IHQ9TChlKTtpZihcIlVTXCI9PT10fHxcIkNBXCI9PT10KXJldHVybiB0O2xldCByPVN0cmluZyhlLnZhbHVlPz9cIlwiKS50cmltKCkudG9VcHBlckNhc2UoKSxuPS9eKFVTfENBKVstX10vLmV4ZWMocik/LlsxXTtyZXR1cm5cIlVTXCI9PT1ufHxcIkNBXCI9PT1uP246bS5oYXMocik/XCJVU1wiOmguaGFzKHIpP1wiQ0FcIjpudWxsfWZ1bmN0aW9uIE8oZSx0KXtpZighZS5pc0Nvbm5lY3RlZClyZXR1cm4hMTtsZXQgcj1BcnJheS5mcm9tKGUub3B0aW9ucykuZmlsdGVyKGU9PlwiXCIhPT1TdHJpbmcoZS52YWx1ZT8/XCJcIikudHJpbSgpKTtyZXR1cm4gMCE9PXIubGVuZ3RoJiZyLmV2ZXJ5KGU9PlIoZSk9PT10KX1mdW5jdGlvbiBNKGUpe2lmKFwiU0VMRUNUXCI9PT1lLnRhZ05hbWUpdHJ5e3JldHVybmBzZWxlY3Q6JHtBcnJheS5mcm9tKGUub3B0aW9ucykubWFwKGU9PmAke2UudmFsdWV9OiR7ZS50ZXh0Q29udGVudD8/XCJcIn1gKS5qb2luKFwifFwiKX1gfWNhdGNoe3JldHVyblwic2VsZWN0OnVucmVhZGFibGVcIn1yZXR1cm5gJHtlLnRhZ05hbWV9OiR7ZS50eXBlPz9cIlwifWB9YXN5bmMgZnVuY3Rpb24gTihlLHQ9bnVsbCxyPWRvY3VtZW50LG49e30pe2xldCBvPWIoZSk7aWYoIW8pcmV0dXJuITE7bGV0IGk9bi5tYXhBdHRlbXB0cz8/cyxhPW4ucG9sbE1zPz91LGw9TWF0aC5tYXgoMSxuLnN0YWJsZVBvbGxzPz9jKSxkPVwiXCIsZj0wO2ZvcihsZXQgZT0wO2U8aTtlKyspe2xldCBuPV8ocikscz10Py50YWdOYW1lPT09XCJTRUxFQ1RcIix1PVwiVVNcIj09PW98fFwiQ0FcIj09PW8/bj8udGFnTmFtZT09PVwiU0VMRUNUXCImJk8obixvKTohIShuJiYoIXN8fG4hPT10KSYmbi5pc0Nvbm5lY3RlZCYmXCJJTlBVVFwiPT09bi50YWdOYW1lJiZbXCJcIixcInRleHRcIl0uaW5jbHVkZXMoU3RyaW5nKG4udHlwZT8/XCJcIikudG9Mb3dlckNhc2UoKSkpO2lmKHUmJm4pe2xldCBlPU0obik7aWYoZj1lPT09ZD9mKzE6MSxkPWUsZj49bClyZXR1cm4hMH1lbHNlIGY9MCxkPVwiXCI7ZSsxPGkmJmE+MCYmYXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLGEpKX1yZXR1cm4hMX1mdW5jdGlvbiAkKGU9ZG9jdW1lbnQpe3JldHVybiBfKGUpfWFzeW5jIGZ1bmN0aW9uIEIoZSx0PWRvY3VtZW50KXtsZXQgcj1rKHQpO3JldHVybiByP1AocixlLCgpPT5rKHQpKTp7Y29tbWl0dGVkOiExLGNvdW50cnlJc28yOm51bGx9fWFzeW5jIGZ1bmN0aW9uIHEoZSl7YXdhaXQgZS5yZWluaXRpYWxpemUoKTt0cnl7bGV0IHQ9YXdhaXQgZS5mZXRjaEF1dG9maWxsSW5mbygpLHI9dD8ubG9jYXRpb24/LmNvdW50cnk7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHJ8fCFyLnRyaW0oKSlyZXR1cm57Y291bnRyeTpudWxsLGNvdW50cnlJc28yOm51bGwsY29tbWl0dGVkOiExLGRlcGVuZGVudHNTZXR0bGVkOiExfTtsZXQgbj1yLnRyaW0oKSxvPWUuZ2V0U3RhdGVQcm92aW5jZUNvbnRyb2w/LigpPz9udWxsLGk9YXdhaXQgZS5wcmVmaWxsQ291bnRyeShuKSxhPWkuZGVwZW5kZW50Q291bnRyeUlzbzI/PyhpLmNvbW1pdHRlZD9pLmNvdW50cnlJc28yOm51bGwpLGw9ISFhJiYoYXdhaXQgZS53YWl0Rm9yU3RhdGVQcm92aW5jZT8uKGEsbyk/PyEwKTtyZXR1cm57Y291bnRyeTpuLGNvdW50cnlJc28yOmkuY291bnRyeUlzbzIsY29tbWl0dGVkOmkuY29tbWl0dGVkLGRlcGVuZGVudHNTZXR0bGVkOmwsZGVwZW5kZW50Q291bnRyeUlzbzI6YSxmYWlsdXJlUmVhc29uOmkuZmFpbHVyZVJlYXNvbn19Y2F0Y2h7cmV0dXJue2NvdW50cnk6bnVsbCxjb3VudHJ5SXNvMjpudWxsLGNvbW1pdHRlZDohMSxkZXBlbmRlbnRzU2V0dGxlZDohMX19fWZ1bmN0aW9uIFUoZSx0KXtsZXQgcj1lLmZpbHRlcihlPT5BKGUuJGlucHV0KSk7aWYoMD09PXIubGVuZ3RoKXJldHVybntkaXNjb3Zlcnk6XCJub25lXCIsbWFpbkNvdW50cnlSdWxlczpbXSxkZWZlcnJlZERlcGVuZGVudFJ1bGVzOltdLHJlZ3VsYXJSdWxlczplfTtpZihyLmxlbmd0aD4xKXJldHVybntkaXNjb3Zlcnk6XCJhbWJpZ3VvdXNcIixtYWluQ291bnRyeVJ1bGVzOnIsZGVmZXJyZWREZXBlbmRlbnRSdWxlczpbXSxyZWd1bGFyUnVsZXM6ZS5maWx0ZXIoZT0+IXIuaW5jbHVkZXMoZSkpfTtsZXQgbj1yWzBdLG89QyhuLiRpbnB1dCksaT10LmRlcGVuZGVudHNTZXR0bGVkP1tdOmUuZmlsdGVyKGU9PmUhPT1uJiZcInN0YXRlIG9yIHByb3ZpbmNlXCI9PT1nKGUubGFiZWwpJiZDKGUuJGlucHV0KT09PW8pO3JldHVybntkaXNjb3Zlcnk6XCJzdGFibGVcIixtYWluQ291bnRyeVJ1bGVzOltuXSxkZWZlcnJlZERlcGVuZGVudFJ1bGVzOmkscmVndWxhclJ1bGVzOmUuZmlsdGVyKGU9PmUhPT1uJiYhaS5pbmNsdWRlcyhlKSl9fWZ1bmN0aW9uIEgoZSx0LHIpe2ZvcihsZXQgbiBvZiBlKXQ/ci51cGRhdGVGaWxsZWRQcm9ncmVzcyhuLmxhYmVsKTpyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKG4ubGFiZWwpfVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS41MWE0NTA2NS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);