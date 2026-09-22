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
})({"ctuRT":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ashby\\operations.js",
    "bundleId": "ce4826d2e6905b2a",
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
var j = z(require("9c235125f7f9cfdb"));
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

},{"9c235125f7f9cfdb":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"l8xeM":[function(require,module,exports) {
/**
 * Parcel module id: 3giV6
 * Resolved path: src/contents/sites/ashby/operations.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   dayjs/plugin/customParseFormat -> g94SE  =>  dayjs/plugin/customParseFormat.js
 *   fuse.js -> auUGt  =>  fuse.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~contents/sites/ashby/answer -> Cpwm9  =>  src/contents/sites/ashby/answer.js
 *   ~contents/sites/ashby/canonical-search -> 99dYo  =>  src/contents/sites/ashby/canonical-search.js
 *   ~contents/sites/ashby/country -> bdkMH  =>  src/contents/sites/ashby/country.js
 *   ~contents/sites/ashby/native-select -> lLsBv  =>  src/contents/sites/ashby/native-select.js
 *   ~contents/sites/ashby/phone-value -> 8jmJu  =>  src/contents/sites/ashby/phone-value.js
 *   ~contents/sites/ashby/rules -> 5iMv1  =>  src/contents/sites/ashby/rules.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillAshbyCountryCombobox", ()=>w.fillAshbyCountryCombobox), n.export(r, "resolveAshbyCountryOption", ()=>w.resolveAshbyCountryOption), n.export(r, "preFillForm", ()=>A), n.export(r, "syncEducationHistorySections", ()=>k), n.export(r, "getAshbyResumeInput", ()=>L), n.export(r, "uploadResume", ()=>R), n.export(r, "getAshbyCoverLetterStatus", ()=>M), n.export(r, "getAshbyCoverLetterFieldType", ()=>N), n.export(r, "getAshbyCoverLetterInput", ()=>$), n.export(r, "uploadCoverLetter", ()=>z), n.export(r, "fillCheckboxField", ()=>V), n.export(r, "fillInputTextField", ()=>W), n.export(r, "fillSelectField", ()=>X), n.export(r, "fillComboboxField", ()=>eh), n.export(r, "findExactAshbyComboboxOption", ()=>eg), n.export(r, "fillResolvedLocationCombobox", ()=>ey), n.export(r, "clearExistingResume", ()=>eO);
var o = e("dayjs"), i = n.interopDefault(o), a = e("dayjs/plugin/customParseFormat"), l = n.interopDefault(a), s = e("fuse.js"), u = n.interopDefault(s), c = e("~contents/shared/filler"), d = e("~contents/methods/answer"), f = e("~contents/methods/dom"), p = e("~contents/sites/ashby/answer"), m = e("~contents/sites/ashby/phone-value"), h = e("~contents/sites/ashby/canonical-search"), g = e("~contents/sites/ashby/native-select"), b = e("~contents/sites/ashby/rules"), y = e("~core/xpath"), v = e("~utils/delay"), w = e("~contents/sites/ashby/country");
(0, i.default).extend(l.default);
let S = /\bresume\b/i, E = /\bcover\s+letter\b/i, x = /\bcover[\s_-]*letter\b|coverletter/i, C = 'textarea,input:not([type]),input[type="text"]';
async function A() {
    let e1 = document.getElementById("job-application-form");
    e1 && (e1.click(), await (0, v.delay)(500));
}
_c = A;
async function k(e1) {
    let t = Math.max(e1, 1), r1 = 0;
    for(; T() < t;){
        if (r1++ > t + 5) {
            console.warn("[Ashby][Education] safety break", {
                rows: T(),
                desiredCount: t
            });
            break;
        }
        let e1 = T(), n = await j({
            maxWaitMs: 1500
        });
        if (!n) {
            console.warn("[Ashby][Education] Add education button not found", {
                rows: e1,
                desiredCount: t
            });
            break;
        }
        n.click();
        let o = await D(e1, {
            maxWaitMs: 2e3,
            intervalMs: 100
        });
        if (o <= e1) {
            console.warn("[Ashby][Education] click had no effect after 2s", {
                rowsBefore: e1,
                rowsAfter: o
            });
            break;
        }
    }
    for(r1 = 0; !(r1++ > 20);){
        let e1 = (0, b.getAshbyEducationHistoryContainer)();
        if (!e1) break;
        let r1 = (0, b.getAshbyEducationRows)(e1);
        if (r1.length <= t || r1.length <= 1) break;
        let n = P(r1[r1.length - 1], "delete");
        if (!n) {
            console.warn("[Ashby][Education] Delete education button not found");
            break;
        }
        n.click(), await (0, v.delay)(300);
    }
}
function T() {
    let e1 = (0, b.getAshbyEducationHistoryContainer)();
    return e1 ? (0, b.getAshbyEducationRows)(e1).length : 0;
}
_c1 = T;
let F = [
    ()=>Array.from(document.querySelectorAll('button[class*="_repeatableEducationButton_"]')).find((e1)=>!e1.disabled && /add/i.test(e1.textContent ?? "")) ?? null,
    ()=>Array.from(document.querySelectorAll("button")).find((e1)=>{
            if (e1.disabled) return !1;
            let t = [
                e1.textContent,
                e1.getAttribute("aria-label")
            ].filter(Boolean).join(" ").toLowerCase();
            return t.includes("add") && t.includes("education");
        }) ?? null,
    ()=>{
        let e1 = (0, b.getAshbyEducationHistoryContainer)();
        return e1 ? P(e1, "add") : null;
    }
];
function I() {
    for (let e1 of F){
        let t = e1();
        if (t) return t;
    }
    return null;
}
_c2 = I;
async function j(e1) {
    let t = Date.now(), r1 = I();
    for(; !r1 && Date.now() - t < e1.maxWaitMs;)await (0, v.delay)(100), r1 = I();
    return r1;
}
async function D(e1, t) {
    let r1 = Date.now(), n = T();
    for(; n <= e1 && Date.now() - r1 < t.maxWaitMs;)await (0, v.delay)(t.intervalMs), n = T();
    return n;
}
_c3 = D;
function P(e1, t) {
    let r1 = Array.from(e1.querySelectorAll("button"));
    return r1.find((e1)=>{
        if (e1.disabled) return !1;
        let r1 = _(e1);
        return "add" === t ? r1.includes("add") : r1.includes("delete") || r1.includes("remove");
    }) ?? null;
}
_c4 = P;
function _(e1) {
    return [
        e1.textContent,
        e1.getAttribute("aria-label"),
        e1.getAttribute("title")
    ].filter(Boolean).join(" ").replace(/\s+/g, " ").trim().toLowerCase();
}
function L(e1 = document) {
    let t = e1.querySelector('input[type="file"][id="_systemfield_resume"]');
    if (t) return t;
    let r1 = Array.from(e1.querySelectorAll('.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"]'));
    for (let e1 of r1){
        let t = e1.querySelector("label"), r1 = t ? Y(t) : "";
        if (S.test(r1) && !E.test(r1)) {
            let t = e1.querySelector('input[type="file"]');
            if (t) return t;
        }
    }
    return null;
}
_c5 = L;
async function R(e1, t, r1) {
    let n = L();
    if (n) {
        let o = O(n);
        console.info("[Ashby][Resume] upload status", {
            required: o.required,
            requirementSource: o.source,
            inputKind: "_systemfield_resume" === n.id ? "system" : "custom"
        }), await (0, f.uploadFiles)(n, await (0, d.fetchPdfAsBlob)(e1), t, r1, "Resume/CV", o.required);
    }
}
_c6 = R;
function O(e1) {
    if (e1.required) return {
        required: !0,
        source: "native-required"
    };
    if ("true" === e1.getAttribute("aria-required")) return {
        required: !0,
        source: "aria-required"
    };
    let t = e1.closest?.('.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"]'), r1 = t?.querySelector("label"), n = !!r1?.className.includes("required") || Y(r1 ?? e1).includes("\u2731");
    return n ? {
        required: !0,
        source: "label-required"
    } : {
        required: !1,
        source: "none"
    };
}
_c7 = O;
function M(e1 = document) {
    let t = N(e1);
    return "file" === t ? "required" : "text" === t ? "optional" : "";
}
_c8 = M;
function N(e1 = document) {
    let t = q(e1), r1 = t ? H(t) : null;
    return r1?.querySelector('input[type="file"]') ? "file" : r1 && B(r1) ? "text" : U(e1) ? "file" : "";
}
_c9 = N;
function $(e1 = document) {
    let t = q(e1), r1 = t ? H(t) : null, n = r1?.querySelector('input[type="file"]');
    return n || U(e1);
}
function B(e1) {
    return e1.querySelector(C);
}
_c10 = B;
function q(e1 = document) {
    let t = Array.from(e1.querySelectorAll("label"));
    return t.find((e1)=>E.test(Y(e1))) ?? null;
}
function U(e1) {
    let t = Array.from(e1.querySelectorAll('input[type="file"]'));
    return t.find((e1)=>{
        let t = [
            e1.id,
            e1.name,
            e1.getAttribute("aria-label"),
            e1.getAttribute("data-testid"),
            e1.getAttribute("data-qa")
        ].filter(Boolean).join(" ");
        return x.test(t);
    }) ?? null;
}
_c11 = U;
function H(e1) {
    let t = e1.closest?.('.ashby-application-form-field-entry, [class*="ashby-application-form-field-entry"]');
    if (t) return t;
    let r1 = e1.parentElement;
    for(; r1;){
        if (r1.querySelector('input[type="file"], input, textarea, select')) return r1;
        if (r1 === document.body) break;
        r1 = r1.parentElement;
    }
    return e1.parentElement;
}
_c12 = H;
function Y(e1) {
    return String(e1.textContent ?? "").replace(/\s+/g, " ").trim();
}
_c13 = Y;
async function z(e1, t, r1) {
    let n = $();
    n && await (0, f.uploadFiles)(n, await (0, d.fetchCoverLetterPdfAsBlob)(e1), t, r1, "Cover Letter");
}
async function V(e1, t) {
    for (let r1 of t){
        let t = (0, y.getFirstOrderedNodeSafe)('./button[text()="' + r1 + '"]', e1.$input);
        if (t) {
            let e1 = t;
            e1.className.includes("active") || (e1.click(), await (0, v.delay)(500));
        } else throw new c.FillError(`No matching checkbox option for label: ${e1.label} with value: ${r1}`);
    }
}
_c14 = V;
async function W(e1, t, r1 = "", n) {
    let o = "string" == typeof t ? t : String(t ?? ""), i = G(e1, o, r1, n);
    await ei(e1, i);
    let a = document.querySelector(".react-datepicker-popper");
    a ? (document.body.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), document.body.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), document.body.click(), document.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: !0,
        cancelable: !0
    })), e1.blur(), await (0, v.delay)(300)) : (ea(e1), await (0, v.delay)(300), e1.blur());
    let l = await el(e1, i);
    if (!l) throw new c.FillError(`Text input value was not applied: ${i}`);
}
_c15 = W;
function G(e1, t, r1 = "", n) {
    if (e1 instanceof HTMLInputElement && "tel" === e1.type) return (0, m.resolveAshbyPhoneValue)(t, n);
    let o = ec(e1), i = K(r1);
    return o || i ? (0, p.normalizeAshbyDateInputValue)(t) : t;
}
_c16 = G;
function K(e1) {
    let t = String(e1 ?? "").replace(/\s+/g, " ").trim().toLowerCase();
    return /\b(start|end|graduation)\s+date\b/.test(t) || t.includes("available start date");
}
_c17 = K;
async function X(e1, t) {
    let r1 = Array.isArray(t) ? t : [
        t
    ];
    if (J(e1)) {
        await Q(e1, r1);
        return;
    }
    for (let t of r1){
        if (en(e1.$input)) {
            await Z(e1.$input, t, e1.label);
            continue;
        }
        let r1 = String(t ?? "").replace(/\s+/g, " ").trim(), n = (0, y.getFirstOrderedNodeSafe)(`following-sibling::div[contains(@class, "_option_")]//label[normalize-space()=${(0, y.escapeXPath)(r1)}]`, e1.$label);
        if (n) {
            let r1 = (0, y.getFirstOrderedNodeSafe)("preceding-sibling::span//input", n);
            if (r1?.checked) continue;
            if (r1) r1.click();
            else throw new c.FillError(`No clickable select input for label: ${e1.label} with value: ${t}`);
            if (await (0, v.delay)(200), !r1.checked && n instanceof HTMLElement && (n.click(), await (0, v.delay)(200)), !r1.checked) throw new c.FillError(`Select option click was not applied for label: ${e1.label} with value: ${t}`);
        } else throw new c.FillError(`No matching select option for label: ${e1.label} with value: ${t}`);
    }
}
_c18 = X;
function J(e1) {
    let t = e1.$input, r1 = e1.$radioParent;
    return t?.tagName === "INPUT" && "radio" === t.type && "communicationConsent" === t.name && !!r1;
}
_c19 = J;
async function Q(e1, t) {
    let r1 = eo(t[0] ?? ""), n = Array.from(e1.$radioParent.querySelectorAll('input[type="radio"][name="communicationConsent"]')), o = n.filter((e1)=>!e1.disabled && eo(e1.closest("label")?.textContent ?? "") === r1);
    if (console.info("[Ashby][CommunicationConsent] fill-start", {
        optionCount: n.length,
        matchCount: o.length,
        hasAnswer: !!r1
    }), !r1 || 1 !== o.length) throw new c.FillError(`No unique communication consent option for label: ${e1.label}`);
    let i = o[0];
    if (i.checked || (i.click(), await (0, v.delay)(200)), !i.checked) {
        let e1 = i.closest("label");
        e1?.click(), await (0, v.delay)(200);
    }
    if (!i.checked) throw console.warn("[Ashby][CommunicationConsent] fill-failed", {
        reason: "checked-readback-failed"
    }), new c.FillError(`Communication consent option click was not applied for label: ${e1.label}`);
    console.info("[Ashby][CommunicationConsent] fill-committed", {
        checked: !0
    });
}
_c20 = Q;
async function Z(e1, t, r1) {
    let n = Array.from(e1.options).map((e1)=>({
            value: e1.value,
            text: e1.textContent?.trim() || "",
            disabled: e1.disabled,
            hidden: e1.hidden
        })), o = (0, g.resolveAshbyNativeSelectOptionValue)(t, n);
    if (null === o) throw new c.FillError(`No matching native select option for label: ${r1} with value: ${t}`);
    let i = await ee(e1, o);
    if (!i) throw new c.FillError(`Native select value was not applied for label: ${r1} with value: ${t}`);
}
_c21 = Z;
async function ee(e1, t) {
    let r1 = Array.from(e1.options).findIndex((e1)=>e1.value === t);
    if (r1 < 0) return !1;
    for(let n = 0; n < 3; n++)if (et(e1, r1, t), er(e1), await (0, v.delay)(0 === n ? 150 : 250), e1.value === t) return !0;
    return e1.value === t;
}
function et(e1, t, r1) {
    let n = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value")?.set, o = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "selectedIndex")?.set, i = e1.value;
    o ? o.call(e1, t) : e1.selectedIndex = t, n ? n.call(e1, r1) : e1.value = r1, Array.from(e1.options).forEach((e1, r1)=>{
        e1.selected = r1 === t;
    });
    try {
        e1._valueTracker?.setValue?.(i);
    } catch (e1) {
        console.warn("Ashby native select tracker update failed", e1);
    }
}
function er(e1) {
    e1.focus(), e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0
    })), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0
    })), e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    })), e1.blur();
}
function en(e1) {
    return "undefined" != typeof HTMLSelectElement && e1 instanceof HTMLSelectElement || e1?.tagName === "SELECT";
}
function eo(e1) {
    return e1.normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/\s+/g, " ").trim();
}
async function ei(e1, t) {
    if (!e1) throw new c.FillError("Text input element is null");
    e1.focus(), e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0
    })), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0
    })), e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0
    })), eE(e1, t), ea(e1);
}
function ea(e1) {
    e1.dispatchEvent(new InputEvent("input", {
        bubbles: !0,
        cancelable: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: !0,
        cancelable: !0
    }));
}
async function el(e1, t) {
    let r1 = 5;
    for(let n = 0; n < r1; n++){
        if (eu(e1, t)) return !0;
        await (0, v.delay)(100);
    }
    return eu(e1, t);
}
function es(e1) {
    return String(e1 ?? "").replace(/\r\n/g, "\n").trim();
}
function eu(e1, t) {
    let r1 = es(e1.value), n = es(t);
    return r1 === n || (ec(e1) ? ep(r1, n) : !!ed(e1) && ef(r1) === ef(n));
}
function ec(e1) {
    return e1 instanceof HTMLInputElement && ("Pick date..." === e1.placeholder || !!e1.closest(".react-datepicker-wrapper"));
}
function ed(e1) {
    return e1 instanceof HTMLInputElement && "tel" === e1.type;
}
function ef(e1) {
    return String(e1 ?? "").replace(/\D/g, "");
}
function ep(e1, t) {
    let r1 = em(e1), n = em(t);
    return !!r1 && !!n && ("month" === n.precision ? r1.date.isSame(n.date, "month") : r1.date.isSame(n.date, "day"));
}
function em(e1) {
    let t = String(e1 ?? "").trim();
    if (!t) return null;
    let r1 = [
        "YYYY-MM",
        "YYYY/MM",
        "MM/YYYY",
        "MM-YYYY",
        "MMM YYYY",
        "MMMM YYYY",
        "MMM, YYYY",
        "MMMM, YYYY"
    ];
    for (let e1 of r1){
        let r1 = (0, i.default)(t, e1, !0);
        if (r1.isValid()) return {
            date: r1,
            precision: "month"
        };
    }
    let n = [
        "YYYY-MM-DD",
        "YYYY/MM/DD",
        "MM/DD/YYYY",
        "MM-DD-YYYY",
        "M/D/YYYY",
        "M-D-YYYY"
    ];
    for (let e1 of n){
        let r1 = (0, i.default)(t, e1, !0);
        if (r1.isValid()) return {
            date: r1,
            precision: "day"
        };
    }
    return null;
}
async function eh(e1, t) {
    let r1 = "string" == typeof t ? t : String(t ?? "");
    if (eP(e1.label)) {
        let t = await (0, h.resolveAshbyCanonicalSchool)(r1).catch(()=>null);
        if (t) {
            let r1 = await ev(e1, t);
            if (r1) return;
        }
    }
    let n = ex(e1, r1);
    for (let t of n){
        await eR(e1.$input, t);
        let n = await eT(r1, e1.options);
        if (n) {
            n.click(), await (0, v.delay)(200);
            return;
        }
    }
    throw eS(e1.$input), new c.FillError(`No matching combobox option for label: ${e1.label} with value: ${r1}`);
}
function eg(e1, t) {
    let r1 = ej(e1);
    return r1 ? t.find((e1)=>ej(e1.textContent ?? "") === r1) ?? null : null;
}
async function eb(e1, t) {
    let r1 = 12;
    for(let n = 0; n < r1; n++){
        let r1 = "true" === t.getAttribute("aria-expanded") ? t.getAttribute("aria-controls") : null, n = r1 ? document.getElementById(r1) : null, o = n ? Array.from(n.querySelectorAll('[role="option"]')) : [], i = eg(e1, o);
        if (i) return i;
        await (0, v.delay)(100);
    }
    return null;
}
async function ey(e1, t) {
    let r1 = String(t ?? "").trim();
    if (!r1) throw new c.FillError("Resolved Ashby location value is empty");
    console.info("[Ashby][GeoLocation] exact-fill-start", {
        label: e1.label,
        targetLength: r1.length
    }), e1.$input.setAttribute?.("data-jr-ashby-resolve-stage", "exact-fill"), await eR(e1.$input, r1);
    let n = await eb(r1, e1.$input);
    if (n) {
        n.click(), await (0, v.delay)(200), console.info("[Ashby][GeoLocation] exact-fill-committed", {
            label: e1.label,
            committedLength: String(e1.$input.value ?? "").length
        }), e1.$input.setAttribute?.("data-jr-ashby-resolve-stage", "committed");
        return;
    }
    throw console.warn("[Ashby][GeoLocation] exact-fill-failed", {
        label: e1.label,
        reason: "no-exact-option",
        targetLength: r1.length,
        expanded: e1.$input.getAttribute("aria-expanded")
    }), e1.$input.setAttribute?.("data-jr-ashby-resolve-stage", "no-exact-option"), eS(e1.$input), new c.FillError(`No exact combobox option for label: ${e1.label} with resolved value: ${r1}`);
}
async function ev(e1, t) {
    await eR(e1.$input, t);
    let r1 = await ew(t);
    return !!r1 && (r1.click(), await (0, v.delay)(200), !0);
}
async function ew(e1) {
    let t = 12, r1 = ej(e1);
    if (!r1) return null;
    for(let e1 = 0; e1 < t; e1++){
        let e1 = document.querySelectorAll('div[role="listbox"] div[role="option"]'), t = null, n = null;
        for (let o of e1){
            let e1 = ej(o.textContent ?? "");
            if (e1 === r1) return o;
            !t && e1.startsWith(r1) ? t = o : !n && e1.includes(r1) && (n = o);
        }
        if (t ?? n) return t ?? n;
        await (0, v.delay)(100);
    }
    return null;
}
function eS(e1) {
    e1 && (eE(e1, ""), e1.dispatchEvent(new InputEvent("input", {
        bubbles: !0,
        cancelable: !0,
        composed: !0
    })), e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: !0,
        cancelable: !0
    })), e1.blur());
}
function eE(e1, t) {
    let r1 = e1 instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(r1, "value")?.set, o = e1.value;
    n ? n.call(e1, t) : e1.value = t;
    try {
        let t = e1?._valueTracker;
        t?.setValue && t.setValue(o);
    } catch (e1) {
        console.warn("Ashby react input tracker update failed", e1);
    }
}
function ex(e1, t) {
    let r1 = [], n = (e1)=>{
        let t = e1.trim();
        t && (r1.some((e1)=>ej(e1) === ej(t)) || r1.push(t));
    };
    for (let r1 of (n(t), eC(t, e1.label, e1.options)))n(r1);
    for (let r1 of eA(t, e1.label, e1.options))n(r1);
    return r1;
}
function eC(e1, t, r1 = []) {
    let n = ej(e1);
    if (!n) return [];
    let o = [], i = eI(e1, r1), a = n.split(" ").filter(Boolean), l = e_(e1, ","), s = eL(e1);
    if (eP(t)) {
        if (i) {
            let e1 = ej(i).split(" ").filter(Boolean);
            e1.length >= 2 && o.push(e1.slice(0, Math.min(e1.length, 4)).join(" "));
        }
        a.length >= 4 ? o.push(a.slice(0, 4).join(" ")) : a.length >= 2 && o.push(a.join(" "));
    } else i && o.push(i), l[0] && o.push(l[0]), s[0] && o.push(s[0]);
    return 0 === o.length && a.length >= 2 && o.push(a.slice(0, Math.min(a.length, 3)).join(" ")), o;
}
function eA(e1, t, r1 = []) {
    let n = ej(e1), o = [], i = eI(e1, r1);
    for (let r1 of (i && o.push(i), ek(e1, t)))o.push(r1);
    if (n.includes(" ")) {
        let e1 = n.split(" ").filter(Boolean);
        for(let t = e1.length - 1; t >= 2; t--)o.push(e1.slice(0, t).join(" "));
    }
    return o;
}
function ek(e1, t) {
    let r1 = ej(e1), n = [], o = r1.split(",").map((e1)=>e1.trim()).filter(Boolean);
    n.push(...o);
    let i = r1.split(/\s+-\s+|-/).map((e1)=>e1.trim()).filter(Boolean);
    n.push(...i);
    let a = r1.split(" ").filter(Boolean);
    return eP(t) && a.length >= 2 && n.push(a.slice(0, Math.min(a.length, 4)).join(" ")), Array.from(new Set(n.map((e1)=>e1.trim()).filter(Boolean)));
}
async function eT(e1, t = []) {
    let r1 = 12;
    for(let n = 0; n < r1; n++){
        let r1 = Array.from(document.querySelectorAll('div[role="listbox"] div[role="option"]')), n = eF(e1, r1, t);
        if (n) return n;
        await (0, v.delay)(100);
    }
    return null;
}
function eF(e1, t, r1 = []) {
    if (0 === t.length) return null;
    let n = ej(e1), o = eI(e1, r1), i = ej(o), a = t.find((e1)=>{
        let t = ej(e1.textContent ?? "");
        return t === n || i && t === i;
    }) || t.find((e1)=>{
        let t = ej(e1.textContent ?? "");
        return t.includes(n) || n.includes(t);
    });
    if (a) return a;
    let l = t.map((e1)=>({
            element: e1,
            text: e1.textContent ?? "",
            normalized: ej(e1.textContent ?? "")
        })), s = eD(e1, l);
    return s?.element || null;
}
function eI(e1, t = []) {
    if (!t.length) return "";
    let r1 = eD(e1, t.map((e1)=>({
            text: e1,
            normalized: ej(e1)
        })));
    return r1?.text || "";
}
function ej(e1) {
    return String(e1 ?? "").normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[(),]/g, " ").replace(/\s*-\s*/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function eD(e1, t) {
    if (!t.length) return null;
    let r1 = new u.default(t, {
        keys: [
            "normalized",
            "text"
        ],
        includeScore: !0,
        ignoreLocation: !0,
        threshold: .35,
        minMatchCharLength: 2
    }), n = ej(e1), [o] = r1.search(n);
    return o?.item || null;
}
function eP(e1) {
    let t = e1.toLowerCase();
    return t.includes("school") || t.includes("university");
}
function e_(e1, t) {
    return e1.split(t).map((e1)=>e1.trim()).filter(Boolean);
}
function eL(e1) {
    return e1.split(/\s+-\s+|-/).map((e1)=>e1.trim()).filter(Boolean);
}
async function eR(e1, t) {
    if (!e1) return;
    e1.focus(), e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
    })), await (0, v.delay)(50);
    let r1 = Object.getPrototypeOf(e1), n = Object.getOwnPropertyDescriptor(r1, "value")?.set;
    n ? n.call(e1, t) : e1.value = t, e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: !0
    })), await (0, v.delay)(300);
}
async function eO(e1 = document) {
    let t = './/button[@title="Delete file"]', r1 = (0, y.getFirstOrderedNodeSafe)(t, e1);
    return !!r1 && (r1.click(), await (0, v.delay)(200), !0);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21;
$RefreshReg$(_c, "A");
$RefreshReg$(_c1, "T");
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

},{}]},["ctuRT","l8xeM"], "l8xeM", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFFLFFBQVEsT0FBTztBQUM5QztBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsT0FBTyxHQUFFLE1BQU0sYUFBYSxJQUFJLENBQUEsS0FBSyxHQUFFLFFBQVEsT0FBTztBQUN4RDtBQUNBLGVBQWUsR0FBRyxFQUFDLEVBQUUsQ0FBQztJQUNwQixJQUFJLENBQUMsSUFBRztJQUNSLEdBQUUsU0FBUyxHQUFFLGNBQWMsSUFBSSxXQUFXLFNBQVM7UUFDakQsU0FBUyxDQUFDO1FBQ1YsWUFBWSxDQUFDO0lBQ2YsS0FBSyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO0lBQ3hCLElBQUksS0FBSSxPQUFPLGVBQWUsS0FDNUIsSUFBSSxPQUFPLHlCQUF5QixJQUFHLFVBQVU7SUFDbkQsSUFBSSxFQUFFLEtBQUssSUFBRyxLQUFLLEdBQUUsUUFBUSxHQUFHLEdBQUUsY0FBYyxJQUFJLE1BQU0sU0FBUztRQUNqRSxTQUFTLENBQUM7SUFDWixLQUFLLEdBQUUsY0FBYyxJQUFJLGNBQWMsV0FBVztRQUNoRCxTQUFTLENBQUM7SUFDWixLQUFLLEdBQUUsY0FBYyxJQUFJLGNBQWMsU0FBUztRQUM5QyxTQUFTLENBQUM7SUFDWixLQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUc7QUFDMUI7QUFDQSxlQUFlLEdBQUcsS0FBSSxRQUFRO0lBQzVCLElBQUksSUFBSSxtQ0FDTixLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsdUJBQXNCLEVBQUcsR0FBRztJQUN4QyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUEsR0FBRSxTQUFTLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsTUFBTSxDQUFDLENBQUE7QUFDdEQiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWI3NGIxYmY4MDMzMDI0MTYuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvYXNoYnkvb3BlcmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxhc2hieVxcXFxvcGVyYXRpb25zLmpzXCIsXCJidW5kbGVJZFwiOlwiY2U0ODI2ZDJlNjkwNWIyYVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDNnaVY2XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9hc2hieS9vcGVyYXRpb25zLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICBkYXlqcyAtPiBmbmhYcCAgPT4gIF90aWxkZV9ub2RlX21vZHVsZXMvZGF5anMuanNcclxuICogICBkYXlqcy9wbHVnaW4vY3VzdG9tUGFyc2VGb3JtYXQgLT4gZzk0U0UgID0+ICBkYXlqcy9wbHVnaW4vY3VzdG9tUGFyc2VGb3JtYXQuanNcclxuICogICBmdXNlLmpzIC0+IGF1VUd0ICA9PiAgZnVzZS5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2RvbSAtPiBoQTVRYSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2RvbS5qc1xyXG4gKiAgIH5jb250ZW50cy9zaGFyZWQvZmlsbGVyIC0+IDJhR3NYICA9PiAgc3JjL2NvbnRlbnRzL3NoYXJlZC9maWxsZXIuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYXNoYnkvYW5zd2VyIC0+IENwd205ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2FzaGJ5L2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9hc2hieS9jYW5vbmljYWwtc2VhcmNoIC0+IDk5ZFlvICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2FzaGJ5L2Nhbm9uaWNhbC1zZWFyY2guanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYXNoYnkvY291bnRyeSAtPiBiZGtNSCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hc2hieS9jb3VudHJ5LmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2FzaGJ5L25hdGl2ZS1zZWxlY3QgLT4gbExzQnYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYXNoYnkvbmF0aXZlLXNlbGVjdC5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9hc2hieS9waG9uZS12YWx1ZSAtPiA4am1KdSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hc2hieS9waG9uZS12YWx1ZS5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9hc2hieS9ydWxlcyAtPiA1aU12MSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hc2hieS9ydWxlcy5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcImZpbGxBc2hieUNvdW50cnlDb21ib2JveFwiLCAoKSA9PiB3LmZpbGxBc2hieUNvdW50cnlDb21ib2JveCksIG5cclxuICAuZXhwb3J0KHIsIFwicmVzb2x2ZUFzaGJ5Q291bnRyeU9wdGlvblwiLCAoKSA9PiB3LnJlc29sdmVBc2hieUNvdW50cnlPcHRpb24pLCBuLmV4cG9ydChyLFxyXG4gICAgXCJwcmVGaWxsRm9ybVwiLCAoKSA9PiBBKSwgbi5leHBvcnQociwgXCJzeW5jRWR1Y2F0aW9uSGlzdG9yeVNlY3Rpb25zXCIsICgpID0+IGspLCBuLmV4cG9ydChyLFxyXG4gICAgXCJnZXRBc2hieVJlc3VtZUlucHV0XCIsICgpID0+IEwpLCBuLmV4cG9ydChyLCBcInVwbG9hZFJlc3VtZVwiLCAoKSA9PiBSKSwgbi5leHBvcnQocixcclxuICAgIFwiZ2V0QXNoYnlDb3ZlckxldHRlclN0YXR1c1wiLCAoKSA9PiBNKSwgbi5leHBvcnQociwgXCJnZXRBc2hieUNvdmVyTGV0dGVyRmllbGRUeXBlXCIsICgpID0+IE4pLCBuXHJcbiAgLmV4cG9ydChyLCBcImdldEFzaGJ5Q292ZXJMZXR0ZXJJbnB1dFwiLCAoKSA9PiAkKSwgbi5leHBvcnQociwgXCJ1cGxvYWRDb3ZlckxldHRlclwiLCAoKSA9PiB6KSwgblxyXG4gIC5leHBvcnQociwgXCJmaWxsQ2hlY2tib3hGaWVsZFwiLCAoKSA9PiBWKSwgbi5leHBvcnQociwgXCJmaWxsSW5wdXRUZXh0RmllbGRcIiwgKCkgPT4gVyksIG4uZXhwb3J0KHIsXHJcbiAgICBcImZpbGxTZWxlY3RGaWVsZFwiLCAoKSA9PiBYKSwgbi5leHBvcnQociwgXCJmaWxsQ29tYm9ib3hGaWVsZFwiLCAoKSA9PiBlaCksIG4uZXhwb3J0KHIsXHJcbiAgICBcImZpbmRFeGFjdEFzaGJ5Q29tYm9ib3hPcHRpb25cIiwgKCkgPT4gZWcpLCBuLmV4cG9ydChyLCBcImZpbGxSZXNvbHZlZExvY2F0aW9uQ29tYm9ib3hcIiwgKCkgPT5cclxuICBleSksIG4uZXhwb3J0KHIsIFwiY2xlYXJFeGlzdGluZ1Jlc3VtZVwiLCAoKSA9PiBlTyk7XHJcbnZhciBvID0gZShcImRheWpzXCIpLFxyXG4gIGkgPSBuLmludGVyb3BEZWZhdWx0KG8pLFxyXG4gIGEgPSBlKFwiZGF5anMvcGx1Z2luL2N1c3RvbVBhcnNlRm9ybWF0XCIpLFxyXG4gIGwgPSBuLmludGVyb3BEZWZhdWx0KGEpLFxyXG4gIHMgPSBlKFwiZnVzZS5qc1wiKSxcclxuICB1ID0gbi5pbnRlcm9wRGVmYXVsdChzKSxcclxuICBjID0gZShcIn5jb250ZW50cy9zaGFyZWQvZmlsbGVyXCIpLFxyXG4gIGQgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLFxyXG4gIGYgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLFxyXG4gIHAgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2FzaGJ5L2Fuc3dlclwiKSxcclxuICBtID0gZShcIn5jb250ZW50cy9zaXRlcy9hc2hieS9waG9uZS12YWx1ZVwiKSxcclxuICBoID0gZShcIn5jb250ZW50cy9zaXRlcy9hc2hieS9jYW5vbmljYWwtc2VhcmNoXCIpLFxyXG4gIGcgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2FzaGJ5L25hdGl2ZS1zZWxlY3RcIiksXHJcbiAgYiA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYXNoYnkvcnVsZXNcIiksXHJcbiAgeSA9IGUoXCJ+Y29yZS94cGF0aFwiKSxcclxuICB2ID0gZShcIn51dGlscy9kZWxheVwiKSxcclxuICB3ID0gZShcIn5jb250ZW50cy9zaXRlcy9hc2hieS9jb3VudHJ5XCIpO1xyXG4oMCwgaS5kZWZhdWx0KS5leHRlbmQobC5kZWZhdWx0KTtcclxubGV0IFMgPSAvXFxicmVzdW1lXFxiL2ksXHJcbiAgRSA9IC9cXGJjb3ZlclxccytsZXR0ZXJcXGIvaSxcclxuICB4ID0gL1xcYmNvdmVyW1xcc18tXSpsZXR0ZXJcXGJ8Y292ZXJsZXR0ZXIvaSxcclxuICBDID0gJ3RleHRhcmVhLGlucHV0Om5vdChbdHlwZV0pLGlucHV0W3R5cGU9XCJ0ZXh0XCJdJztcclxuYXN5bmMgZnVuY3Rpb24gQSgpIHtcclxuICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiam9iLWFwcGxpY2F0aW9uLWZvcm1cIik7XHJcbiAgZSAmJiAoZS5jbGljaygpLCBhd2FpdCAoMCwgdi5kZWxheSkoNTAwKSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBrKGUpIHtcclxuICBsZXQgdCA9IE1hdGgubWF4KGUsIDEpLFxyXG4gICAgciA9IDA7XHJcbiAgZm9yICg7IFQoKSA8IHQ7KSB7XHJcbiAgICBpZiAocisrID4gdCArIDUpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiW0FzaGJ5XVtFZHVjYXRpb25dIHNhZmV0eSBicmVha1wiLCB7XHJcbiAgICAgICAgcm93czogVCgpLFxyXG4gICAgICAgIGRlc2lyZWRDb3VudDogdFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIGxldCBlID0gVCgpLFxyXG4gICAgICBuID0gYXdhaXQgaih7XHJcbiAgICAgICAgbWF4V2FpdE1zOiAxNTAwXHJcbiAgICAgIH0pO1xyXG4gICAgaWYgKCFuKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIltBc2hieV1bRWR1Y2F0aW9uXSBBZGQgZWR1Y2F0aW9uIGJ1dHRvbiBub3QgZm91bmRcIiwge1xyXG4gICAgICAgIHJvd3M6IGUsXHJcbiAgICAgICAgZGVzaXJlZENvdW50OiB0XHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgbi5jbGljaygpO1xyXG4gICAgbGV0IG8gPSBhd2FpdCBEKGUsIHtcclxuICAgICAgbWF4V2FpdE1zOiAyZTMsXHJcbiAgICAgIGludGVydmFsTXM6IDEwMFxyXG4gICAgfSk7XHJcbiAgICBpZiAobyA8PSBlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIltBc2hieV1bRWR1Y2F0aW9uXSBjbGljayBoYWQgbm8gZWZmZWN0IGFmdGVyIDJzXCIsIHtcclxuICAgICAgICByb3dzQmVmb3JlOiBlLFxyXG4gICAgICAgIHJvd3NBZnRlcjogb1xyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChyID0gMDsgIShyKysgPiAyMCk7KSB7XHJcbiAgICBsZXQgZSA9ICgwLCBiLmdldEFzaGJ5RWR1Y2F0aW9uSGlzdG9yeUNvbnRhaW5lcikoKTtcclxuICAgIGlmICghZSkgYnJlYWs7XHJcbiAgICBsZXQgciA9ICgwLCBiLmdldEFzaGJ5RWR1Y2F0aW9uUm93cykoZSk7XHJcbiAgICBpZiAoci5sZW5ndGggPD0gdCB8fCByLmxlbmd0aCA8PSAxKSBicmVhaztcclxuICAgIGxldCBuID0gUChyW3IubGVuZ3RoIC0gMV0sIFwiZGVsZXRlXCIpO1xyXG4gICAgaWYgKCFuKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIltBc2hieV1bRWR1Y2F0aW9uXSBEZWxldGUgZWR1Y2F0aW9uIGJ1dHRvbiBub3QgZm91bmRcIik7XHJcbiAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICBuLmNsaWNrKCksIGF3YWl0ICgwLCB2LmRlbGF5KSgzMDApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBUKCkge1xyXG4gIGxldCBlID0gKDAsIGIuZ2V0QXNoYnlFZHVjYXRpb25IaXN0b3J5Q29udGFpbmVyKSgpO1xyXG4gIHJldHVybiBlID8gKDAsIGIuZ2V0QXNoYnlFZHVjYXRpb25Sb3dzKShlKS5sZW5ndGggOiAwXHJcbn1cclxubGV0IEYgPSBbKCkgPT4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bY2xhc3MqPVwiX3JlcGVhdGFibGVFZHVjYXRpb25CdXR0b25fXCJdJykpXHJcbiAgLmZpbmQoZSA9PiAhZS5kaXNhYmxlZCAmJiAvYWRkL2kudGVzdChlLnRleHRDb250ZW50ID8/IFwiXCIpKSA/PyBudWxsLCAoKSA9PiBBcnJheS5mcm9tKGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSkuZmluZChlID0+IHtcclxuICAgIGlmIChlLmRpc2FibGVkKSByZXR1cm4gITE7XHJcbiAgICBsZXQgdCA9IFtlLnRleHRDb250ZW50LCBlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIildLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKVxyXG4gICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gdC5pbmNsdWRlcyhcImFkZFwiKSAmJiB0LmluY2x1ZGVzKFwiZWR1Y2F0aW9uXCIpXHJcbiAgfSkgPz8gbnVsbCwgKCkgPT4ge1xyXG4gICAgbGV0IGUgPSAoMCwgYi5nZXRBc2hieUVkdWNhdGlvbkhpc3RvcnlDb250YWluZXIpKCk7XHJcbiAgICByZXR1cm4gZSA/IFAoZSwgXCJhZGRcIikgOiBudWxsXHJcbiAgfVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSSgpIHtcclxuICBmb3IgKGxldCBlIG9mIEYpIHtcclxuICAgIGxldCB0ID0gZSgpO1xyXG4gICAgaWYgKHQpIHJldHVybiB0XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gaihlKSB7XHJcbiAgbGV0IHQgPSBEYXRlLm5vdygpLFxyXG4gICAgciA9IEkoKTtcclxuICBmb3IgKDsgIXIgJiYgRGF0ZS5ub3coKSAtIHQgPCBlLm1heFdhaXRNczspIGF3YWl0ICgwLCB2LmRlbGF5KSgxMDApLCByID0gSSgpO1xyXG4gIHJldHVybiByXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gRChlLCB0KSB7XHJcbiAgbGV0IHIgPSBEYXRlLm5vdygpLFxyXG4gICAgbiA9IFQoKTtcclxuICBmb3IgKDsgbiA8PSBlICYmIERhdGUubm93KCkgLSByIDwgdC5tYXhXYWl0TXM7KSBhd2FpdCAoMCwgdi5kZWxheSkodC5pbnRlcnZhbE1zKSwgbiA9IFQoKTtcclxuICByZXR1cm4gblxyXG59XHJcblxyXG5mdW5jdGlvbiBQKGUsIHQpIHtcclxuICBsZXQgciA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKTtcclxuICByZXR1cm4gci5maW5kKGUgPT4ge1xyXG4gICAgaWYgKGUuZGlzYWJsZWQpIHJldHVybiAhMTtcclxuICAgIGxldCByID0gXyhlKTtcclxuICAgIHJldHVybiBcImFkZFwiID09PSB0ID8gci5pbmNsdWRlcyhcImFkZFwiKSA6IHIuaW5jbHVkZXMoXCJkZWxldGVcIikgfHwgci5pbmNsdWRlcyhcInJlbW92ZVwiKVxyXG4gIH0pID8/IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gXyhlKSB7XHJcbiAgcmV0dXJuIFtlLnRleHRDb250ZW50LCBlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiksIGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIildLmZpbHRlcihCb29sZWFuKVxyXG4gICAgLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEwoZSA9IGRvY3VtZW50KSB7XHJcbiAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdW2lkPVwiX3N5c3RlbWZpZWxkX3Jlc3VtZVwiXScpO1xyXG4gIGlmICh0KSByZXR1cm4gdDtcclxuICBsZXQgciA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5hc2hieS1hcHBsaWNhdGlvbi1mb3JtLWZpZWxkLWVudHJ5LCBbY2xhc3MqPVwiYXNoYnktYXBwbGljYXRpb24tZm9ybS1maWVsZC1lbnRyeVwiXScpKTtcclxuICBmb3IgKGxldCBlIG9mIHIpIHtcclxuICAgIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIiksXHJcbiAgICAgIHIgPSB0ID8gWSh0KSA6IFwiXCI7XHJcbiAgICBpZiAoUy50ZXN0KHIpICYmICFFLnRlc3QocikpIHtcclxuICAgICAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyk7XHJcbiAgICAgIGlmICh0KSByZXR1cm4gdFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIFIoZSwgdCwgcikge1xyXG4gIGxldCBuID0gTCgpO1xyXG4gIGlmIChuKSB7XHJcbiAgICBsZXQgbyA9IE8obik7XHJcbiAgICBjb25zb2xlLmluZm8oXCJbQXNoYnldW1Jlc3VtZV0gdXBsb2FkIHN0YXR1c1wiLCB7XHJcbiAgICAgIHJlcXVpcmVkOiBvLnJlcXVpcmVkLFxyXG4gICAgICByZXF1aXJlbWVudFNvdXJjZTogby5zb3VyY2UsXHJcbiAgICAgIGlucHV0S2luZDogXCJfc3lzdGVtZmllbGRfcmVzdW1lXCIgPT09IG4uaWQgPyBcInN5c3RlbVwiIDogXCJjdXN0b21cIlxyXG4gICAgfSksIGF3YWl0ICgwLCBmLnVwbG9hZEZpbGVzKShuLCBhd2FpdCAoMCwgZC5mZXRjaFBkZkFzQmxvYikoZSksIHQsIHIsIFwiUmVzdW1lL0NWXCIsIG9cclxuICAgICAgLnJlcXVpcmVkKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gTyhlKSB7XHJcbiAgaWYgKGUucmVxdWlyZWQpIHJldHVybiB7XHJcbiAgICByZXF1aXJlZDogITAsXHJcbiAgICBzb3VyY2U6IFwibmF0aXZlLXJlcXVpcmVkXCJcclxuICB9O1xyXG4gIGlmIChcInRydWVcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpKSByZXR1cm4ge1xyXG4gICAgcmVxdWlyZWQ6ICEwLFxyXG4gICAgc291cmNlOiBcImFyaWEtcmVxdWlyZWRcIlxyXG4gIH07XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3Q/LihcclxuICAgICAgJy5hc2hieS1hcHBsaWNhdGlvbi1mb3JtLWZpZWxkLWVudHJ5LCBbY2xhc3MqPVwiYXNoYnktYXBwbGljYXRpb24tZm9ybS1maWVsZC1lbnRyeVwiXScpLFxyXG4gICAgciA9IHQ/LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKSxcclxuICAgIG4gPSAhIXI/LmNsYXNzTmFtZS5pbmNsdWRlcyhcInJlcXVpcmVkXCIpIHx8IFkociA/PyBlKS5pbmNsdWRlcyhcIlxcdTI3MzFcIik7XHJcbiAgcmV0dXJuIG4gPyB7XHJcbiAgICByZXF1aXJlZDogITAsXHJcbiAgICBzb3VyY2U6IFwibGFiZWwtcmVxdWlyZWRcIlxyXG4gIH0gOiB7XHJcbiAgICByZXF1aXJlZDogITEsXHJcbiAgICBzb3VyY2U6IFwibm9uZVwiXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBNKGUgPSBkb2N1bWVudCkge1xyXG4gIGxldCB0ID0gTihlKTtcclxuICByZXR1cm4gXCJmaWxlXCIgPT09IHQgPyBcInJlcXVpcmVkXCIgOiBcInRleHRcIiA9PT0gdCA/IFwib3B0aW9uYWxcIiA6IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gTihlID0gZG9jdW1lbnQpIHtcclxuICBsZXQgdCA9IHEoZSksXHJcbiAgICByID0gdCA/IEgodCkgOiBudWxsO1xyXG4gIHJldHVybiByPy5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpID8gXCJmaWxlXCIgOiByICYmIEIocikgPyBcInRleHRcIiA6IFUoZSkgPyBcImZpbGVcIiA6IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gJChlID0gZG9jdW1lbnQpIHtcclxuICBsZXQgdCA9IHEoZSksXHJcbiAgICByID0gdCA/IEgodCkgOiBudWxsLFxyXG4gICAgbiA9IHI/LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyk7XHJcbiAgcmV0dXJuIG4gfHwgVShlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCKGUpIHtcclxuICByZXR1cm4gZS5xdWVyeVNlbGVjdG9yKEMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHEoZSA9IGRvY3VtZW50KSB7XHJcbiAgbGV0IHQgPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImxhYmVsXCIpKTtcclxuICByZXR1cm4gdC5maW5kKGUgPT4gRS50ZXN0KFkoZSkpKSA/PyBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFUoZSkge1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykpO1xyXG4gIHJldHVybiB0LmZpbmQoZSA9PiB7XHJcbiAgICBsZXQgdCA9IFtlLmlkLCBlLm5hbWUsIGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSwgZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlc3RpZFwiKSwgZVxyXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1xYVwiKVxyXG4gICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XHJcbiAgICByZXR1cm4geC50ZXN0KHQpXHJcbiAgfSkgPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBIKGUpIHtcclxuICBsZXQgdCA9IGUuY2xvc2VzdD8uKFxyXG4gICAgJy5hc2hieS1hcHBsaWNhdGlvbi1mb3JtLWZpZWxkLWVudHJ5LCBbY2xhc3MqPVwiYXNoYnktYXBwbGljYXRpb24tZm9ybS1maWVsZC1lbnRyeVwiXScpO1xyXG4gIGlmICh0KSByZXR1cm4gdDtcclxuICBsZXQgciA9IGUucGFyZW50RWxlbWVudDtcclxuICBmb3IgKDsgcjspIHtcclxuICAgIGlmIChyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpKSByZXR1cm4gcjtcclxuICAgIGlmIChyID09PSBkb2N1bWVudC5ib2R5KSBicmVhaztcclxuICAgIHIgPSByLnBhcmVudEVsZW1lbnRcclxuICB9XHJcbiAgcmV0dXJuIGUucGFyZW50RWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBZKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUudGV4dENvbnRlbnQgPz8gXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24geihlLCB0LCByKSB7XHJcbiAgbGV0IG4gPSAkKCk7XHJcbiAgbiAmJiBhd2FpdCAoMCwgZi51cGxvYWRGaWxlcykobiwgYXdhaXQgKDAsIGQuZmV0Y2hDb3ZlckxldHRlclBkZkFzQmxvYikoZSksIHQsIHIsXHJcbiAgICBcIkNvdmVyIExldHRlclwiKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIFYoZSwgdCkge1xyXG4gIGZvciAobGV0IHIgb2YgdCkge1xyXG4gICAgbGV0IHQgPSAoMCwgeS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vYnV0dG9uW3RleHQoKT1cIicgKyByICsgJ1wiXScsIGUuJGlucHV0KTtcclxuICAgIGlmICh0KSB7XHJcbiAgICAgIGxldCBlID0gdDtcclxuICAgICAgZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJhY3RpdmVcIikgfHwgKGUuY2xpY2soKSwgYXdhaXQgKDAsIHYuZGVsYXkpKDUwMCkpXHJcbiAgICB9IGVsc2UgdGhyb3cgbmV3IGMuRmlsbEVycm9yKFxyXG4gICAgICBgTm8gbWF0Y2hpbmcgY2hlY2tib3ggb3B0aW9uIGZvciBsYWJlbDogJHtlLmxhYmVsfSB3aXRoIHZhbHVlOiAke3J9YClcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gVyhlLCB0LCByID0gXCJcIiwgbikge1xyXG4gIGxldCBvID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCA/IHQgOiBTdHJpbmcodCA/PyBcIlwiKSxcclxuICAgIGkgPSBHKGUsIG8sIHIsIG4pO1xyXG4gIGF3YWl0IGVpKGUsIGkpO1xyXG4gIGxldCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiKTtcclxuICBhID8gKGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSkpLCBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSksIGRvY3VtZW50LmJvZHkuY2xpY2soKSwgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwge1xyXG4gICAga2V5OiBcIkVzY2FwZVwiLFxyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMFxyXG4gIH0pKSwgZS5ibHVyKCksIGF3YWl0ICgwLCB2LmRlbGF5KSgzMDApKSA6IChlYShlKSwgYXdhaXQgKDAsIHYuZGVsYXkpKDMwMCksIGUuYmx1cigpKTtcclxuICBsZXQgbCA9IGF3YWl0IGVsKGUsIGkpO1xyXG4gIGlmICghbCkgdGhyb3cgbmV3IGMuRmlsbEVycm9yKGBUZXh0IGlucHV0IHZhbHVlIHdhcyBub3QgYXBwbGllZDogJHtpfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEcoZSwgdCwgciA9IFwiXCIsIG4pIHtcclxuICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgXCJ0ZWxcIiA9PT0gZS50eXBlKSByZXR1cm4gKDAsIG0ucmVzb2x2ZUFzaGJ5UGhvbmVWYWx1ZSkodCwgbik7XHJcbiAgbGV0IG8gPSBlYyhlKSxcclxuICAgIGkgPSBLKHIpO1xyXG4gIHJldHVybiBvIHx8IGkgPyAoMCwgcC5ub3JtYWxpemVBc2hieURhdGVJbnB1dFZhbHVlKSh0KSA6IHRcclxufVxyXG5cclxuZnVuY3Rpb24gSyhlKSB7XHJcbiAgbGV0IHQgPSBTdHJpbmcoZSA/PyBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gL1xcYihzdGFydHxlbmR8Z3JhZHVhdGlvbilcXHMrZGF0ZVxcYi8udGVzdCh0KSB8fCB0LmluY2x1ZGVzKFwiYXZhaWxhYmxlIHN0YXJ0IGRhdGVcIilcclxufVxyXG5hc3luYyBmdW5jdGlvbiBYKGUsIHQpIHtcclxuICBsZXQgciA9IEFycmF5LmlzQXJyYXkodCkgPyB0IDogW3RdO1xyXG4gIGlmIChKKGUpKSB7XHJcbiAgICBhd2FpdCBRKGUsIHIpO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGZvciAobGV0IHQgb2Ygcikge1xyXG4gICAgaWYgKGVuKGUuJGlucHV0KSkge1xyXG4gICAgICBhd2FpdCBaKGUuJGlucHV0LCB0LCBlLmxhYmVsKTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGxldCByID0gU3RyaW5nKHQgPz8gXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLFxyXG4gICAgICBuID0gKDAsIHkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICAgIGBmb2xsb3dpbmctc2libGluZzo6ZGl2W2NvbnRhaW5zKEBjbGFzcywgXCJfb3B0aW9uX1wiKV0vL2xhYmVsW25vcm1hbGl6ZS1zcGFjZSgpPSR7KDAseS5lc2NhcGVYUGF0aCkocil9XWAsXHJcbiAgICAgICAgZS4kbGFiZWwpO1xyXG4gICAgaWYgKG4pIHtcclxuICAgICAgbGV0IHIgPSAoMCwgeS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCJwcmVjZWRpbmctc2libGluZzo6c3Bhbi8vaW5wdXRcIiwgbik7XHJcbiAgICAgIGlmIChyPy5jaGVja2VkKSBjb250aW51ZTtcclxuICAgICAgaWYgKHIpIHIuY2xpY2soKTtcclxuICAgICAgZWxzZSB0aHJvdyBuZXcgYy5GaWxsRXJyb3IoXHJcbiAgICAgICAgYE5vIGNsaWNrYWJsZSBzZWxlY3QgaW5wdXQgZm9yIGxhYmVsOiAke2UubGFiZWx9IHdpdGggdmFsdWU6ICR7dH1gKTtcclxuICAgICAgaWYgKGF3YWl0ICgwLCB2LmRlbGF5KSgyMDApLCAhci5jaGVja2VkICYmIG4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAobi5jbGljaygpLCBhd2FpdCAoMCxcclxuICAgICAgICAgIHYuZGVsYXkpKDIwMCkpLCAhci5jaGVja2VkKSB0aHJvdyBuZXcgYy5GaWxsRXJyb3IoXHJcbiAgICAgICAgYFNlbGVjdCBvcHRpb24gY2xpY2sgd2FzIG5vdCBhcHBsaWVkIGZvciBsYWJlbDogJHtlLmxhYmVsfSB3aXRoIHZhbHVlOiAke3R9YClcclxuICAgIH0gZWxzZSB0aHJvdyBuZXcgYy5GaWxsRXJyb3IoXHJcbiAgICAgIGBObyBtYXRjaGluZyBzZWxlY3Qgb3B0aW9uIGZvciBsYWJlbDogJHtlLmxhYmVsfSB3aXRoIHZhbHVlOiAke3R9YClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEooZSkge1xyXG4gIGxldCB0ID0gZS4kaW5wdXQsXHJcbiAgICByID0gZS4kcmFkaW9QYXJlbnQ7XHJcbiAgcmV0dXJuIHQ/LnRhZ05hbWUgPT09IFwiSU5QVVRcIiAmJiBcInJhZGlvXCIgPT09IHQudHlwZSAmJiBcImNvbW11bmljYXRpb25Db25zZW50XCIgPT09IHQubmFtZSAmJiAhIXJcclxufVxyXG5hc3luYyBmdW5jdGlvbiBRKGUsIHQpIHtcclxuICBsZXQgciA9IGVvKHRbMF0gPz8gXCJcIiksXHJcbiAgICBuID0gQXJyYXkuZnJvbShlLiRyYWRpb1BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJjb21tdW5pY2F0aW9uQ29uc2VudFwiXScpKSxcclxuICAgIG8gPSBuLmZpbHRlcihlID0+ICFlLmRpc2FibGVkICYmIGVvKGUuY2xvc2VzdChcImxhYmVsXCIpPy50ZXh0Q29udGVudCA/PyBcIlwiKSA9PT0gcik7XHJcbiAgaWYgKGNvbnNvbGUuaW5mbyhcIltBc2hieV1bQ29tbXVuaWNhdGlvbkNvbnNlbnRdIGZpbGwtc3RhcnRcIiwge1xyXG4gICAgICBvcHRpb25Db3VudDogbi5sZW5ndGgsXHJcbiAgICAgIG1hdGNoQ291bnQ6IG8ubGVuZ3RoLFxyXG4gICAgICBoYXNBbnN3ZXI6ICEhclxyXG4gICAgfSksICFyIHx8IDEgIT09IG8ubGVuZ3RoKSB0aHJvdyBuZXcgYy5GaWxsRXJyb3IoXHJcbiAgICBgTm8gdW5pcXVlIGNvbW11bmljYXRpb24gY29uc2VudCBvcHRpb24gZm9yIGxhYmVsOiAke2UubGFiZWx9YCk7XHJcbiAgbGV0IGkgPSBvWzBdO1xyXG4gIGlmIChpLmNoZWNrZWQgfHwgKGkuY2xpY2soKSwgYXdhaXQgKDAsIHYuZGVsYXkpKDIwMCkpLCAhaS5jaGVja2VkKSB7XHJcbiAgICBsZXQgZSA9IGkuY2xvc2VzdChcImxhYmVsXCIpO1xyXG4gICAgZT8uY2xpY2soKSwgYXdhaXQgKDAsIHYuZGVsYXkpKDIwMClcclxuICB9XHJcbiAgaWYgKCFpLmNoZWNrZWQpIHRocm93IGNvbnNvbGUud2FybihcIltBc2hieV1bQ29tbXVuaWNhdGlvbkNvbnNlbnRdIGZpbGwtZmFpbGVkXCIsIHtcclxuICAgIHJlYXNvbjogXCJjaGVja2VkLXJlYWRiYWNrLWZhaWxlZFwiXHJcbiAgfSksIG5ldyBjLkZpbGxFcnJvcihcclxuICAgIGBDb21tdW5pY2F0aW9uIGNvbnNlbnQgb3B0aW9uIGNsaWNrIHdhcyBub3QgYXBwbGllZCBmb3IgbGFiZWw6ICR7ZS5sYWJlbH1gKTtcclxuICBjb25zb2xlLmluZm8oXCJbQXNoYnldW0NvbW11bmljYXRpb25Db25zZW50XSBmaWxsLWNvbW1pdHRlZFwiLCB7XHJcbiAgICBjaGVja2VkOiAhMFxyXG4gIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gWihlLCB0LCByKSB7XHJcbiAgbGV0IG4gPSBBcnJheS5mcm9tKGUub3B0aW9ucykubWFwKGUgPT4gKHtcclxuICAgICAgdmFsdWU6IGUudmFsdWUsXHJcbiAgICAgIHRleHQ6IGUudGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiLFxyXG4gICAgICBkaXNhYmxlZDogZS5kaXNhYmxlZCxcclxuICAgICAgaGlkZGVuOiBlLmhpZGRlblxyXG4gICAgfSkpLFxyXG4gICAgbyA9ICgwLCBnLnJlc29sdmVBc2hieU5hdGl2ZVNlbGVjdE9wdGlvblZhbHVlKSh0LCBuKTtcclxuICBpZiAobnVsbCA9PT0gbykgdGhyb3cgbmV3IGMuRmlsbEVycm9yKFxyXG4gICAgYE5vIG1hdGNoaW5nIG5hdGl2ZSBzZWxlY3Qgb3B0aW9uIGZvciBsYWJlbDogJHtyfSB3aXRoIHZhbHVlOiAke3R9YCk7XHJcbiAgbGV0IGkgPSBhd2FpdCBlZShlLCBvKTtcclxuICBpZiAoIWkpIHRocm93IG5ldyBjLkZpbGxFcnJvcihcclxuICAgIGBOYXRpdmUgc2VsZWN0IHZhbHVlIHdhcyBub3QgYXBwbGllZCBmb3IgbGFiZWw6ICR7cn0gd2l0aCB2YWx1ZTogJHt0fWApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZWUoZSwgdCkge1xyXG4gIGxldCByID0gQXJyYXkuZnJvbShlLm9wdGlvbnMpLmZpbmRJbmRleChlID0+IGUudmFsdWUgPT09IHQpO1xyXG4gIGlmIChyIDwgMCkgcmV0dXJuICExO1xyXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgMzsgbisrKVxyXG4gICAgaWYgKGV0KGUsIHIsIHQpLCBlcihlKSwgYXdhaXQgKDAsIHYuZGVsYXkpKDAgPT09IG4gPyAxNTAgOiAyNTApLCBlLnZhbHVlID09PSB0KSByZXR1cm4gITA7XHJcbiAgcmV0dXJuIGUudmFsdWUgPT09IHRcclxufVxyXG5cclxuZnVuY3Rpb24gZXQoZSwgdCwgcikge1xyXG4gIGxldCBuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTFNlbGVjdEVsZW1lbnQucHJvdG90eXBlLCBcInZhbHVlXCIpPy5zZXQsXHJcbiAgICBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTFNlbGVjdEVsZW1lbnQucHJvdG90eXBlLCBcInNlbGVjdGVkSW5kZXhcIik/LnNldCxcclxuICAgIGkgPSBlLnZhbHVlO1xyXG4gIG8gPyBvLmNhbGwoZSwgdCkgOiBlLnNlbGVjdGVkSW5kZXggPSB0LCBuID8gbi5jYWxsKGUsIHIpIDogZS52YWx1ZSA9IHIsIEFycmF5LmZyb20oZS5vcHRpb25zKVxyXG4gICAgLmZvckVhY2goKGUsIHIpID0+IHtcclxuICAgICAgZS5zZWxlY3RlZCA9IHIgPT09IHRcclxuICAgIH0pO1xyXG4gIHRyeSB7XHJcbiAgICBlLl92YWx1ZVRyYWNrZXI/LnNldFZhbHVlPy4oaSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJBc2hieSBuYXRpdmUgc2VsZWN0IHRyYWNrZXIgdXBkYXRlIGZhaWxlZFwiLCBlKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXIoZSkge1xyXG4gIGUuZm9jdXMoKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7XHJcbiAgICBidWJibGVzOiAhMFxyXG4gIH0pKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSksIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMFxyXG4gIH0pKSwgZS5ibHVyKClcclxufVxyXG5cclxuZnVuY3Rpb24gZW4oZSkge1xyXG4gIHJldHVybiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiBlIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgfHwgZT8udGFnTmFtZSA9PT1cclxuICAgIFwiU0VMRUNUXCJcclxufVxyXG5cclxuZnVuY3Rpb24gZW8oZSkge1xyXG4gIHJldHVybiBlLm5vcm1hbGl6ZShcIk5GS0NcIikucmVwbGFjZSgvW1xcdTIwMThcXHUyMDE5XS9nLCBcIidcIikucmVwbGFjZSgvW1xcdTIwMUNcXHUyMDFEXS9nLCAnXCInKVxyXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVpKGUsIHQpIHtcclxuICBpZiAoIWUpIHRocm93IG5ldyBjLkZpbGxFcnJvcihcIlRleHQgaW5wdXQgZWxlbWVudCBpcyBudWxsXCIpO1xyXG4gIGUuZm9jdXMoKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7XHJcbiAgICBidWJibGVzOiAhMFxyXG4gIH0pKSwgZUUoZSwgdCksIGVhKGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhKGUpIHtcclxuICBlLmRpc3BhdGNoRXZlbnQobmV3IElucHV0RXZlbnQoXCJpbnB1dFwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwLFxyXG4gICAgY29tcG9zZWQ6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSksIGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMFxyXG4gIH0pKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMFxyXG4gIH0pKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVsKGUsIHQpIHtcclxuICBsZXQgciA9IDU7XHJcbiAgZm9yIChsZXQgbiA9IDA7IG4gPCByOyBuKyspIHtcclxuICAgIGlmIChldShlLCB0KSkgcmV0dXJuICEwO1xyXG4gICAgYXdhaXQgKDAsIHYuZGVsYXkpKDEwMClcclxuICB9XHJcbiAgcmV0dXJuIGV1KGUsIHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVzKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBldShlLCB0KSB7XHJcbiAgbGV0IHIgPSBlcyhlLnZhbHVlKSxcclxuICAgIG4gPSBlcyh0KTtcclxuICByZXR1cm4gciA9PT0gbiB8fCAoZWMoZSkgPyBlcChyLCBuKSA6ICEhZWQoZSkgJiYgZWYocikgPT09IGVmKG4pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlYyhlKSB7XHJcbiAgcmV0dXJuIGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIChcIlBpY2sgZGF0ZS4uLlwiID09PSBlLnBsYWNlaG9sZGVyIHx8ICEhZS5jbG9zZXN0KFxyXG4gICAgXCIucmVhY3QtZGF0ZXBpY2tlci13cmFwcGVyXCIpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZChlKSB7XHJcbiAgcmV0dXJuIGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIFwidGVsXCIgPT09IGUudHlwZVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZihlKSB7XHJcbiAgcmV0dXJuIFN0cmluZyhlID8/IFwiXCIpLnJlcGxhY2UoL1xcRC9nLCBcIlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcChlLCB0KSB7XHJcbiAgbGV0IHIgPSBlbShlKSxcclxuICAgIG4gPSBlbSh0KTtcclxuICByZXR1cm4gISFyICYmICEhbiAmJiAoXCJtb250aFwiID09PSBuLnByZWNpc2lvbiA/IHIuZGF0ZS5pc1NhbWUobi5kYXRlLCBcIm1vbnRoXCIpIDogci5kYXRlLmlzU2FtZShuXHJcbiAgICAuZGF0ZSwgXCJkYXlcIikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtKGUpIHtcclxuICBsZXQgdCA9IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKTtcclxuICBpZiAoIXQpIHJldHVybiBudWxsO1xyXG4gIGxldCByID0gW1wiWVlZWS1NTVwiLCBcIllZWVkvTU1cIiwgXCJNTS9ZWVlZXCIsIFwiTU0tWVlZWVwiLCBcIk1NTSBZWVlZXCIsIFwiTU1NTSBZWVlZXCIsIFwiTU1NLCBZWVlZXCIsXHJcbiAgICBcIk1NTU0sIFlZWVlcIlxyXG4gIF07XHJcbiAgZm9yIChsZXQgZSBvZiByKSB7XHJcbiAgICBsZXQgciA9ICgwLCBpLmRlZmF1bHQpKHQsIGUsICEwKTtcclxuICAgIGlmIChyLmlzVmFsaWQoKSkgcmV0dXJuIHtcclxuICAgICAgZGF0ZTogcixcclxuICAgICAgcHJlY2lzaW9uOiBcIm1vbnRoXCJcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IG4gPSBbXCJZWVlZLU1NLUREXCIsIFwiWVlZWS9NTS9ERFwiLCBcIk1NL0REL1lZWVlcIiwgXCJNTS1ERC1ZWVlZXCIsIFwiTS9EL1lZWVlcIiwgXCJNLUQtWVlZWVwiXTtcclxuICBmb3IgKGxldCBlIG9mIG4pIHtcclxuICAgIGxldCByID0gKDAsIGkuZGVmYXVsdCkodCwgZSwgITApO1xyXG4gICAgaWYgKHIuaXNWYWxpZCgpKSByZXR1cm4ge1xyXG4gICAgICBkYXRlOiByLFxyXG4gICAgICBwcmVjaXNpb246IFwiZGF5XCJcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlaChlLCB0KSB7XHJcbiAgbGV0IHIgPSBcInN0cmluZ1wiID09IHR5cGVvZiB0ID8gdCA6IFN0cmluZyh0ID8/IFwiXCIpO1xyXG4gIGlmIChlUChlLmxhYmVsKSkge1xyXG4gICAgbGV0IHQgPSBhd2FpdCAoMCwgaC5yZXNvbHZlQXNoYnlDYW5vbmljYWxTY2hvb2wpKHIpLmNhdGNoKCgpID0+IG51bGwpO1xyXG4gICAgaWYgKHQpIHtcclxuICAgICAgbGV0IHIgPSBhd2FpdCBldihlLCB0KTtcclxuICAgICAgaWYgKHIpIHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgbiA9IGV4KGUsIHIpO1xyXG4gIGZvciAobGV0IHQgb2Ygbikge1xyXG4gICAgYXdhaXQgZVIoZS4kaW5wdXQsIHQpO1xyXG4gICAgbGV0IG4gPSBhd2FpdCBlVChyLCBlLm9wdGlvbnMpO1xyXG4gICAgaWYgKG4pIHtcclxuICAgICAgbi5jbGljaygpLCBhd2FpdCAoMCwgdi5kZWxheSkoMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHRocm93IGVTKGUuJGlucHV0KSwgbmV3IGMuRmlsbEVycm9yKFxyXG4gICAgYE5vIG1hdGNoaW5nIGNvbWJvYm94IG9wdGlvbiBmb3IgbGFiZWw6ICR7ZS5sYWJlbH0gd2l0aCB2YWx1ZTogJHtyfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVnKGUsIHQpIHtcclxuICBsZXQgciA9IGVqKGUpO1xyXG4gIHJldHVybiByID8gdC5maW5kKGUgPT4gZWooZS50ZXh0Q29udGVudCA/PyBcIlwiKSA9PT0gcikgPz8gbnVsbCA6IG51bGxcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlYihlLCB0KSB7XHJcbiAgbGV0IHIgPSAxMjtcclxuICBmb3IgKGxldCBuID0gMDsgbiA8IHI7IG4rKykge1xyXG4gICAgbGV0IHIgPSBcInRydWVcIiA9PT0gdC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpID8gdC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpIDogbnVsbCxcclxuICAgICAgbiA9IHIgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKSA6IG51bGwsXHJcbiAgICAgIG8gPSBuID8gQXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwib3B0aW9uXCJdJykpIDogW10sXHJcbiAgICAgIGkgPSBlZyhlLCBvKTtcclxuICAgIGlmIChpKSByZXR1cm4gaTtcclxuICAgIGF3YWl0ICgwLCB2LmRlbGF5KSgxMDApXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZXkoZSwgdCkge1xyXG4gIGxldCByID0gU3RyaW5nKHQgPz8gXCJcIikudHJpbSgpO1xyXG4gIGlmICghcikgdGhyb3cgbmV3IGMuRmlsbEVycm9yKFwiUmVzb2x2ZWQgQXNoYnkgbG9jYXRpb24gdmFsdWUgaXMgZW1wdHlcIik7XHJcbiAgY29uc29sZS5pbmZvKFwiW0FzaGJ5XVtHZW9Mb2NhdGlvbl0gZXhhY3QtZmlsbC1zdGFydFwiLCB7XHJcbiAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgIHRhcmdldExlbmd0aDogci5sZW5ndGhcclxuICB9KSwgZS4kaW5wdXQuc2V0QXR0cmlidXRlPy4oXCJkYXRhLWpyLWFzaGJ5LXJlc29sdmUtc3RhZ2VcIiwgXCJleGFjdC1maWxsXCIpLCBhd2FpdCBlUihlLiRpbnB1dCxcclxuICAgIHIpO1xyXG4gIGxldCBuID0gYXdhaXQgZWIociwgZS4kaW5wdXQpO1xyXG4gIGlmIChuKSB7XHJcbiAgICBuLmNsaWNrKCksIGF3YWl0ICgwLCB2LmRlbGF5KSgyMDApLCBjb25zb2xlLmluZm8oXHJcbiAgICBcIltBc2hieV1bR2VvTG9jYXRpb25dIGV4YWN0LWZpbGwtY29tbWl0dGVkXCIsIHtcclxuICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgIGNvbW1pdHRlZExlbmd0aDogU3RyaW5nKGUuJGlucHV0LnZhbHVlID8/IFwiXCIpLmxlbmd0aFxyXG4gICAgfSksIGUuJGlucHV0LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1qci1hc2hieS1yZXNvbHZlLXN0YWdlXCIsIFwiY29tbWl0dGVkXCIpO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIHRocm93IGNvbnNvbGUud2FybihcIltBc2hieV1bR2VvTG9jYXRpb25dIGV4YWN0LWZpbGwtZmFpbGVkXCIsIHtcclxuICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgIHJlYXNvbjogXCJuby1leGFjdC1vcHRpb25cIixcclxuICAgICAgdGFyZ2V0TGVuZ3RoOiByLmxlbmd0aCxcclxuICAgICAgZXhwYW5kZWQ6IGUuJGlucHV0LmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIilcclxuICAgIH0pLCBlLiRpbnB1dC5zZXRBdHRyaWJ1dGU/LihcImRhdGEtanItYXNoYnktcmVzb2x2ZS1zdGFnZVwiLCBcIm5vLWV4YWN0LW9wdGlvblwiKSwgZVMoZS4kaW5wdXQpLFxyXG4gICAgbmV3IGMuRmlsbEVycm9yKGBObyBleGFjdCBjb21ib2JveCBvcHRpb24gZm9yIGxhYmVsOiAke2UubGFiZWx9IHdpdGggcmVzb2x2ZWQgdmFsdWU6ICR7cn1gKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGV2KGUsIHQpIHtcclxuICBhd2FpdCBlUihlLiRpbnB1dCwgdCk7XHJcbiAgbGV0IHIgPSBhd2FpdCBldyh0KTtcclxuICByZXR1cm4gISFyICYmIChyLmNsaWNrKCksIGF3YWl0ICgwLCB2LmRlbGF5KSgyMDApLCAhMClcclxufVxyXG5hc3luYyBmdW5jdGlvbiBldyhlKSB7XHJcbiAgbGV0IHQgPSAxMixcclxuICAgIHIgPSBlaihlKTtcclxuICBpZiAoIXIpIHJldHVybiBudWxsO1xyXG4gIGZvciAobGV0IGUgPSAwOyBlIDwgdDsgZSsrKSB7XHJcbiAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdltyb2xlPVwibGlzdGJveFwiXSBkaXZbcm9sZT1cIm9wdGlvblwiXScpLFxyXG4gICAgICB0ID0gbnVsbCxcclxuICAgICAgbiA9IG51bGw7XHJcbiAgICBmb3IgKGxldCBvIG9mIGUpIHtcclxuICAgICAgbGV0IGUgPSBlaihvLnRleHRDb250ZW50ID8/IFwiXCIpO1xyXG4gICAgICBpZiAoZSA9PT0gcikgcmV0dXJuIG87XHJcbiAgICAgICF0ICYmIGUuc3RhcnRzV2l0aChyKSA/IHQgPSBvIDogIW4gJiYgZS5pbmNsdWRlcyhyKSAmJiAobiA9IG8pXHJcbiAgICB9XHJcbiAgICBpZiAodCA/PyBuKSByZXR1cm4gdCA/PyBuO1xyXG4gICAgYXdhaXQgKDAsIHYuZGVsYXkpKDEwMClcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gZVMoZSkge1xyXG4gIGUgJiYgKGVFKGUsIFwiXCIpLCBlLmRpc3BhdGNoRXZlbnQobmV3IElucHV0RXZlbnQoXCJpbnB1dFwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwLFxyXG4gICAgY29tcG9zZWQ6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIsIHtcclxuICAgIGtleTogXCJFc2NhcGVcIixcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSksIGUuYmx1cigpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlRShlLCB0KSB7XHJcbiAgbGV0IHIgPSBlIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCA/IHdpbmRvdy5IVE1MVGV4dEFyZWFFbGVtZW50LnByb3RvdHlwZSA6IHdpbmRvd1xyXG4gICAgLkhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLFxyXG4gICAgbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IociwgXCJ2YWx1ZVwiKT8uc2V0LFxyXG4gICAgbyA9IGUudmFsdWU7XHJcbiAgbiA/IG4uY2FsbChlLCB0KSA6IGUudmFsdWUgPSB0O1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgdCA9IGU/Ll92YWx1ZVRyYWNrZXI7XHJcbiAgICB0Py5zZXRWYWx1ZSAmJiB0LnNldFZhbHVlKG8pXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS53YXJuKFwiQXNoYnkgcmVhY3QgaW5wdXQgdHJhY2tlciB1cGRhdGUgZmFpbGVkXCIsIGUpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBleChlLCB0KSB7XHJcbiAgbGV0IHIgPSBbXSxcclxuICAgIG4gPSBlID0+IHtcclxuICAgICAgbGV0IHQgPSBlLnRyaW0oKTtcclxuICAgICAgdCAmJiAoci5zb21lKGUgPT4gZWooZSkgPT09IGVqKHQpKSB8fCByLnB1c2godCkpXHJcbiAgICB9O1xyXG4gIGZvciAobGV0IHIgb2YgKG4odCksIGVDKHQsIGUubGFiZWwsIGUub3B0aW9ucykpKSBuKHIpO1xyXG4gIGZvciAobGV0IHIgb2YgZUEodCwgZS5sYWJlbCwgZS5vcHRpb25zKSkgbihyKTtcclxuICByZXR1cm4gclxyXG59XHJcblxyXG5mdW5jdGlvbiBlQyhlLCB0LCByID0gW10pIHtcclxuICBsZXQgbiA9IGVqKGUpO1xyXG4gIGlmICghbikgcmV0dXJuIFtdO1xyXG4gIGxldCBvID0gW10sXHJcbiAgICBpID0gZUkoZSwgciksXHJcbiAgICBhID0gbi5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgbCA9IGVfKGUsIFwiLFwiKSxcclxuICAgIHMgPSBlTChlKTtcclxuICBpZiAoZVAodCkpIHtcclxuICAgIGlmIChpKSB7XHJcbiAgICAgIGxldCBlID0gZWooaSkuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKTtcclxuICAgICAgZS5sZW5ndGggPj0gMiAmJiBvLnB1c2goZS5zbGljZSgwLCBNYXRoLm1pbihlLmxlbmd0aCwgNCkpLmpvaW4oXCIgXCIpKVxyXG4gICAgfVxyXG4gICAgYS5sZW5ndGggPj0gNCA/IG8ucHVzaChhLnNsaWNlKDAsIDQpLmpvaW4oXCIgXCIpKSA6IGEubGVuZ3RoID49IDIgJiYgby5wdXNoKGEuam9pbihcIiBcIikpXHJcbiAgfSBlbHNlIGkgJiYgby5wdXNoKGkpLCBsWzBdICYmIG8ucHVzaChsWzBdKSwgc1swXSAmJiBvLnB1c2goc1swXSk7XHJcbiAgcmV0dXJuIDAgPT09IG8ubGVuZ3RoICYmIGEubGVuZ3RoID49IDIgJiYgby5wdXNoKGEuc2xpY2UoMCwgTWF0aC5taW4oYS5sZW5ndGgsIDMpKS5qb2luKFwiIFwiKSksIG9cclxufVxyXG5cclxuZnVuY3Rpb24gZUEoZSwgdCwgciA9IFtdKSB7XHJcbiAgbGV0IG4gPSBlaihlKSxcclxuICAgIG8gPSBbXSxcclxuICAgIGkgPSBlSShlLCByKTtcclxuICBmb3IgKGxldCByIG9mIChpICYmIG8ucHVzaChpKSwgZWsoZSwgdCkpKSBvLnB1c2gocik7XHJcbiAgaWYgKG4uaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICBsZXQgZSA9IG4uc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKTtcclxuICAgIGZvciAobGV0IHQgPSBlLmxlbmd0aCAtIDE7IHQgPj0gMjsgdC0tKSBvLnB1c2goZS5zbGljZSgwLCB0KS5qb2luKFwiIFwiKSlcclxuICB9XHJcbiAgcmV0dXJuIG9cclxufVxyXG5cclxuZnVuY3Rpb24gZWsoZSwgdCkge1xyXG4gIGxldCByID0gZWooZSksXHJcbiAgICBuID0gW10sXHJcbiAgICBvID0gci5zcGxpdChcIixcIikubWFwKGUgPT4gZS50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcclxuICBuLnB1c2goLi4ubyk7XHJcbiAgbGV0IGkgPSByLnNwbGl0KC9cXHMrLVxccyt8LS8pLm1hcChlID0+IGUudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgbi5wdXNoKC4uLmkpO1xyXG4gIGxldCBhID0gci5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pO1xyXG4gIHJldHVybiBlUCh0KSAmJiBhLmxlbmd0aCA+PSAyICYmIG4ucHVzaChhLnNsaWNlKDAsIE1hdGgubWluKGEubGVuZ3RoLCA0KSkuam9pbihcIiBcIikpLCBBcnJheS5mcm9tKFxyXG4gICAgbmV3IFNldChuLm1hcChlID0+IGUudHJpbSgpKS5maWx0ZXIoQm9vbGVhbikpKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVUKGUsIHQgPSBbXSkge1xyXG4gIGxldCByID0gMTI7XHJcbiAgZm9yIChsZXQgbiA9IDA7IG4gPCByOyBuKyspIHtcclxuICAgIGxldCByID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbcm9sZT1cImxpc3Rib3hcIl0gZGl2W3JvbGU9XCJvcHRpb25cIl0nKSksXHJcbiAgICAgIG4gPSBlRihlLCByLCB0KTtcclxuICAgIGlmIChuKSByZXR1cm4gbjtcclxuICAgIGF3YWl0ICgwLCB2LmRlbGF5KSgxMDApXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVGKGUsIHQsIHIgPSBbXSkge1xyXG4gIGlmICgwID09PSB0Lmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IG4gPSBlaihlKSxcclxuICAgIG8gPSBlSShlLCByKSxcclxuICAgIGkgPSBlaihvKSxcclxuICAgIGEgPSB0LmZpbmQoZSA9PiB7XHJcbiAgICAgIGxldCB0ID0gZWooZS50ZXh0Q29udGVudCA/PyBcIlwiKTtcclxuICAgICAgcmV0dXJuIHQgPT09IG4gfHwgaSAmJiB0ID09PSBpXHJcbiAgICB9KSB8fCB0LmZpbmQoZSA9PiB7XHJcbiAgICAgIGxldCB0ID0gZWooZS50ZXh0Q29udGVudCA/PyBcIlwiKTtcclxuICAgICAgcmV0dXJuIHQuaW5jbHVkZXMobikgfHwgbi5pbmNsdWRlcyh0KVxyXG4gICAgfSk7XHJcbiAgaWYgKGEpIHJldHVybiBhO1xyXG4gIGxldCBsID0gdC5tYXAoZSA9PiAoe1xyXG4gICAgICBlbGVtZW50OiBlLFxyXG4gICAgICB0ZXh0OiBlLnRleHRDb250ZW50ID8/IFwiXCIsXHJcbiAgICAgIG5vcm1hbGl6ZWQ6IGVqKGUudGV4dENvbnRlbnQgPz8gXCJcIilcclxuICAgIH0pKSxcclxuICAgIHMgPSBlRChlLCBsKTtcclxuICByZXR1cm4gcz8uZWxlbWVudCB8fCBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVJKGUsIHQgPSBbXSkge1xyXG4gIGlmICghdC5sZW5ndGgpIHJldHVybiBcIlwiO1xyXG4gIGxldCByID0gZUQoZSwgdC5tYXAoZSA9PiAoe1xyXG4gICAgdGV4dDogZSxcclxuICAgIG5vcm1hbGl6ZWQ6IGVqKGUpXHJcbiAgfSkpKTtcclxuICByZXR1cm4gcj8udGV4dCB8fCBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVqKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikubm9ybWFsaXplKFwiTkZLQ1wiKS5yZXBsYWNlKC9bXFx1MjAxOFxcdTIwMTldL2csIFwiJ1wiKS5yZXBsYWNlKFxyXG4gICAgICAvW1xcdTIwMUNcXHUyMDFEXS9nLCAnXCInKS5yZXBsYWNlKC9bKCksXS9nLCBcIiBcIikucmVwbGFjZSgvXFxzKi1cXHMqL2csIFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gICAgLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVEKGUsIHQpIHtcclxuICBpZiAoIXQubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9IG5ldyB1LmRlZmF1bHQodCwge1xyXG4gICAgICBrZXlzOiBbXCJub3JtYWxpemVkXCIsIFwidGV4dFwiXSxcclxuICAgICAgaW5jbHVkZVNjb3JlOiAhMCxcclxuICAgICAgaWdub3JlTG9jYXRpb246ICEwLFxyXG4gICAgICB0aHJlc2hvbGQ6IC4zNSxcclxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAyXHJcbiAgICB9KSxcclxuICAgIG4gPSBlaihlKSxcclxuICAgIFtvXSA9IHIuc2VhcmNoKG4pO1xyXG4gIHJldHVybiBvPy5pdGVtIHx8IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gZVAoZSkge1xyXG4gIGxldCB0ID0gZS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiB0LmluY2x1ZGVzKFwic2Nob29sXCIpIHx8IHQuaW5jbHVkZXMoXCJ1bml2ZXJzaXR5XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVfKGUsIHQpIHtcclxuICByZXR1cm4gZS5zcGxpdCh0KS5tYXAoZSA9PiBlLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVMKGUpIHtcclxuICByZXR1cm4gZS5zcGxpdCgvXFxzKy1cXHMrfC0vKS5tYXAoZSA9PiBlLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZVIoZSwgdCkge1xyXG4gIGlmICghZSkgcmV0dXJuO1xyXG4gIGUuZm9jdXMoKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMFxyXG4gIH0pKSwgYXdhaXQgKDAsIHYuZGVsYXkpKDUwKTtcclxuICBsZXQgciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSxcclxuICAgIG4gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsIFwidmFsdWVcIik/LnNldDtcclxuICBuID8gbi5jYWxsKGUsIHQpIDogZS52YWx1ZSA9IHQsIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLCB7XHJcbiAgICBidWJibGVzOiAhMFxyXG4gIH0pKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLCB7XHJcbiAgICBidWJibGVzOiAhMFxyXG4gIH0pKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIiwge1xyXG4gICAgYnViYmxlczogITBcclxuICB9KSksIGF3YWl0ICgwLCB2LmRlbGF5KSgzMDApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZU8oZSA9IGRvY3VtZW50KSB7XHJcbiAgbGV0IHQgPSAnLi8vYnV0dG9uW0B0aXRsZT1cIkRlbGV0ZSBmaWxlXCJdJyxcclxuICAgIHIgPSAoMCwgeS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkodCwgZSk7XHJcbiAgcmV0dXJuICEhciAmJiAoci5jbGljaygpLCBhd2FpdCAoMCwgdi5kZWxheSkoMjAwKSwgITApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJvcGVyYXRpb25zLmU2OTA1YjJhLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);