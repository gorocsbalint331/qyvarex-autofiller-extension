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
})({"fNlwS":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\methods\\answer.js",
    "bundleId": "94f3d5539b915ca0",
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
var j = z(require("436fbc8b7540b191"));
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

},{"436fbc8b7540b191":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"2r5rK":[function(require,module,exports) {
/**
 * Parcel module id: 7T5eW
 * Resolved path: src/contents/methods/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   dataurl-to-blob -> dqjvN  =>  dataurl-to-blob.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~contents -> d4tj7  =>  src/contents.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~contents/sites/falcon-answer-tracking -> 2vI9E  =>  src/contents/sites/falcon-answer-tracking.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 *   ~utils/skill-list -> 74lkH  =>  src/utils/skill-list.js
 *
 * Answer / profile / resume fetch + section fill orchestration.
 * Human-readable recovery from Parcel graph. Parcel `e()` / `r` preserved.
 */ var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r);
helpers.export(r, "removeSpecialCharacters", ()=>removeSpecialCharacters);
helpers.export(r, "isMatched", ()=>isMatched);
helpers.export(r, "NO_RESUME_FOUND_ERROR", ()=>NO_RESUME_FOUND_ERROR);
helpers.export(r, "fetchPdfAsBlob", ()=>fetchPdfAsBlob);
helpers.export(r, "fetchCoverLetterPdfAsBlob", ()=>fetchCoverLetterPdfAsBlob);
helpers.export(r, "getSiteToken", ()=>getSiteToken);
helpers.export(r, "HTTPError", ()=>HTTPError);
helpers.export(r, "ResumeMissingCodeError", ()=>ResumeMissingCodeError);
helpers.export(r, "getElementRules", ()=>getElementRules);
helpers.export(r, "initUserData", ()=>initUserData);
helpers.export(r, "findValueInRecord", ()=>findValueInRecord);
helpers.export(r, "createSectionResultReporter", ()=>createSectionResultReporter);
helpers.export(r, "sectionProgressCallbacks", ()=>sectionProgressCallbacks);
helpers.export(r, "getRegularOperations", ()=>getRegularOperations);
helpers.export(r, "getEducationOperations", ()=>getEducationOperations);
helpers.export(r, "getEmploymentOperations", ()=>getEmploymentOperations);
helpers.export(r, "ensureArray", ()=>ensureArray);
helpers.export(r, "buildAutocompleteAnswerCandidates", ()=>buildAutocompleteAnswerCandidates);
helpers.export(r, "createOperationHandlerFactory", ()=>createOperationHandlerFactory);
helpers.export(r, "parseDateParts", ()=>parseDateParts);
var dataurlToBlobMod = e("dataurl-to-blob");
var dataurlToBlob = helpers.interopDefault(dataurlToBlobMod);
var lodashEs = e("lodash-es");
var messaging = e("@plasmohq/messaging");
var contents = e("~contents");
var cancellation = e("~contents/methods/cancellation");
var filler = e("~contents/shared/filler");
var falconAnswerTracking = e("~contents/sites/falcon-answer-tracking");
var enums = e("~core/enums");
var coreUtils = e("~core/utils");
var http = e("~enums/http");
var fieldLabel = e("~utils/fieldLabel");
var skillList = e("~utils/skill-list");
/** DOM / internal keys stripped before sending field descriptors to GPT. */ var OMIT_FROM_GPT_ELEMENT = [
    "$input",
    "$label",
    "$fieldRow",
    "children",
    "$checkboxs",
    "$radioParent",
    "$radios",
    "__careerHub",
    "__eightfoldConditional",
    "__zohoClusterRoot",
    "__zohoSemanticType",
    "__recruiteePhoneField",
    "__recruiteePhoneCountries",
    "__recruiteePhoneState",
    "__ultiproDialogSection",
    "optionsMode"
];
function prepareElementForGpt(field) {
    var cleaned = lodashEs.omit(field, ...OMIT_FROM_GPT_ELEMENT);
    if (field?.optionsMode === "searchable") delete cleaned.options;
    if (typeof cleaned.label !== "string") return cleaned;
    return {
        ...cleaned,
        type: isNumberInput(field) ? "number" : cleaned.type,
        label: fieldLabel.formatFieldLabelForDisplay(cleaned.label)
    };
}
function isNumberInput(field) {
    var input = field?.$input;
    var typeAttr = typeof input?.getAttribute === "function" ? input.getAttribute("type") : input?.type;
    return typeof typeAttr === "string" && typeAttr.toLowerCase() === "number";
}
var NON_ALNUM_EXCEPT_CJK = /[^a-zA-Z0-9\s\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/g;
function removeSpecialCharacters(text) {
    return text.replace(NON_ALNUM_EXCEPT_CJK, "");
}
/** Label equality after stripping punctuation / asterisks / whitespace. */ function isMatched(a, b) {
    if (!a || !b || typeof a !== "string" || typeof b !== "string") return false;
    var left = removeSpecialCharacters(a)?.replace(/\s*\*\s*/g, "")?.replace(/\s+/g, " ")?.toLowerCase().trim();
    var right = removeSpecialCharacters(b)?.replace(/\s*\*\s*/g, "")?.replace(/\s+/g, " ")?.toLowerCase().trim();
    return !!left && !!right && left === right;
}
function dataUrlToFileList(base64URL, fileName, mimeType) {
    var bytes = dataurlToBlob.default(base64URL);
    var blob = new Blob([
        bytes
    ]);
    var dt = new DataTransfer();
    dt.items.add(new File([
        blob
    ], fileName, {
        type: mimeType,
        lastModified: Date.now()
    }));
    return dt;
}
var NO_RESUME_FOUND_ERROR = "No resume found";
async function fetchPdfAsBlob(resumeRequest) {
    var response;
    var extension = "";
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:start", {
        resumeId: resumeRequest?.id,
        tailorId: resumeRequest?.tailorId,
        hasTailor: !!resumeRequest?.tailor,
        hasTailorResume: !!resumeRequest?.tailorResume,
        diagnoseId: resumeRequest?.diagnoseId,
        template: resumeRequest?.template,
        resumeName: resumeRequest?.resumeName,
        useOriginalResume: resumeRequest?.useOriginalResume,
        agentOriginalResume: contents.agentOriginalResume,
        agentResumeId: contents.agentResumeId,
        agentTailorId: contents.agentTailorId
    });
    if (resumeRequest.useOriginalResume || contents.agentOriginalResume && !contents.agentTailorId) {
        var originalId = resumeRequest.id || contents.agentResumeId;
        console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-original", {
            resumeId: originalId
        });
        response = await messaging.sendToBackground({
            name: "getResumeBlob",
            body: {
                resumeId: originalId
            }
        });
        extension = response?.extension;
    } else if (resumeRequest.tailor) {
        console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-tailor", {
            tailorId: resumeRequest.tailorId,
            hasTailorResume: !!resumeRequest.tailorResume,
            template: resumeRequest.template
        });
        response = await messaging.sendToBackground({
            name: "getTailorResumeBlob",
            body: {
                tailorResume: resumeRequest.tailorResume,
                template: resumeRequest.template
            }
        });
        extension = "pdf";
    } else if (resumeRequest.diagnoseId) {
        console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-base", {
            diagnoseId: resumeRequest.diagnoseId,
            resumeId: resumeRequest.id,
            template: resumeRequest.template
        });
        response = await messaging.sendToBackground({
            name: "getBaseResumeBlob",
            body: {
                diagnoseId: resumeRequest.diagnoseId,
                template: resumeRequest.template
            }
        });
        extension = "pdf";
    } else if (resumeRequest.id) {
        console.log("[ResumeUploadDebug] fetchPdfAsBlob:branch-id-fallback", {
            resumeId: resumeRequest.id
        });
        response = await messaging.sendToBackground({
            name: "getResumeBlob",
            body: {
                resumeId: resumeRequest.id
            }
        });
        extension = response?.extension;
    }
    if (!response) {
        console.error("[ResumeUploadDebug] fetchPdfAsBlob:no-response", {
            resumeId: resumeRequest?.id,
            diagnoseId: resumeRequest?.diagnoseId,
            hasTailor: !!resumeRequest?.tailor,
            useOriginalResume: resumeRequest?.useOriginalResume
        });
        throw Error(NO_RESUME_FOUND_ERROR);
    }
    var base64URL = typeof response.base64URL === "string" ? response.base64URL : "";
    var payload = base64URL.split(",")[1] || "";
    if (!payload) {
        console.error("[ResumeUploadDebug] fetchPdfAsBlob:empty-blob", {
            resumeId: resumeRequest?.id,
            diagnoseId: resumeRequest?.diagnoseId,
            hasTailor: !!resumeRequest?.tailor,
            useOriginalResume: resumeRequest?.useOriginalResume,
            base64URLLength: base64URL.length
        });
        throw Error(NO_RESUME_FOUND_ERROR);
    }
    if (!extension) extension = "pdf";
    var baseName = resumeRequest.resumeName?.replace(/\.[^/.]+$/, "") || "resume";
    console.log("[ResumeUploadDebug] fetchPdfAsBlob:success", {
        extension,
        filename: `${baseName}.${extension}`,
        hasBase64URL: !!response.base64URL,
        base64Length: base64URL.length
    });
    return dataUrlToFileList(base64URL, `${baseName}.${extension}`, enums.MIME_TYPE[extension] || enums.MIME_TYPE.pdf);
}
async function fetchCoverLetterPdfAsBlob(request) {
    var response;
    if (request.coverLetterId) response = await messaging.sendToBackground({
        name: "getCoverLetterBlob",
        body: {
            coverLetterId: request.coverLetterId,
            markdown: request.markdown,
            useLegacyDownload: request.useLegacyDownload
        }
    });
    if (!response) throw Error("No cover letter found");
    return dataUrlToFileList(response.base64URL, `${request.coverLetterName}.pdf`, enums.MIME_TYPE.pdf);
}
async function getSiteToken() {
    return messaging.sendToBackground({
        name: "getSiteToken",
        body: {
            url: coreUtils.removeEndStrings(window.location.href)
        }
    });
}
class HTTPError extends Error {
    constructor(message = ""){
        super(message);
        this.name = "HTTPError";
    }
}
class ResumeMissingCodeError extends Error {
    constructor(message = ""){
        super(message);
        this.name = "ResumeMissingCodeError";
    }
}
async function getElementRules(elements, source, token, fromAgentFlag, resumeId, tailorId, urlOverride) {
    var trackingToken = falconAnswerTracking.beginFalconResponseAnswerRequest();
    var response = await messaging.sendToBackground({
        name: "getGptResults",
        body: {
            params: {
                elements: elements.map(prepareElementForGpt),
                token,
                url: urlOverride ?? coreUtils.removeEndStrings(window.location.href),
                parser: "internal",
                source,
                fromAgent: !!(fromAgentFlag || contents.agentTailorId || contents.agentResumeId),
                ...resumeId && {
                    resumeId
                },
                ...tailorId && {
                    tailorId
                }
            }
        }
    });
    if (response?.data?.data === http.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY) throw new ResumeMissingCodeError(http.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY);
    if (response?.data?.HTTP_STATUS) throw new HTTPError(response?.data?.HTTP_STATUS);
    return initUserData(response, trackingToken);
}
function firstArrayField(obj, keys) {
    for (var key of keys){
        var value = obj?.[key];
        if (Array.isArray(value)) return value;
    }
    return [];
}
function initUserData(gptResponse, trackingToken) {
    var profileA = gptResponse.data?.profile_data;
    var profileB = gptResponse.data?.profileData;
    var isPlainObject = (v)=>v && typeof v === "object" && !Array.isArray(v);
    var profileData = isPlainObject(profileA) || isPlainObject(profileB) ? {
        ...isPlainObject(profileA) ? profileA : {},
        ...isPlainObject(profileB) ? profileB : {}
    } : profileA ?? profileB ?? {};
    var userData = {
        profileData,
        profile_data: profileData,
        skills: skillList.extractSkillList(profileData),
        education: firstArrayField(profileData, [
            "Education",
            "education",
            "EDUCATION"
        ]),
        workExperience: firstArrayField(profileData, [
            "Employment",
            "employment",
            "EMPLOYMENT",
            "workExperience",
            "work_experience",
            "Work Experience",
            "experience",
            "Experience"
        ]),
        state: profileData?.state,
        country: profileData?.country ?? null,
        regular: null
    };
    if (Array.isArray(gptResponse.data?.fill_data_list)) {
        userData.fillDataList = gptResponse.data.fill_data_list;
        gptResponse.data.fill_data_list.forEach((row)=>{
            if (row?.name) userData.regular = {
                ...userData.regular,
                [row.name]: row.value
            };
        });
    }
    return falconAnswerTracking.markFalconResponseAnswer(userData, trackingToken);
}
function findValueInRecord(label, record) {
    var found;
    for(var key in record)if (isMatched(label, key)) {
        found = record[key];
        break;
    }
    if (found == null || found === "") throw new filler.ValueError(`No matching field for label: ${label}`);
    if (Array.isArray(found)) {
        if (found.length === 0) throw new filler.ValueError(`No matching field for label: ${label}`);
        var allEmpty = found.every((v)=>typeof v === "string" && v.trim() === "");
        if (allEmpty) throw new filler.ValueError(`No matching field for label: ${label} (array contains only empty values)`);
        var cleaned = found.map((v)=>String(v).trim()).filter((v)=>v !== "");
        if (cleaned.length === 0) throw new filler.ValueError(`No valid string values found for label: ${label}`);
        return cleaned;
    }
    var asString = String(found).trim();
    if (asString === "") throw new filler.ValueError(`Field for label '${label}' resulted in an empty string`);
    return asString;
}
var EDUCATION_TITLE_KEYS = [
    "School",
    "School Name",
    "School or University",
    "University",
    "Institution",
    "Institution Name",
    "Organization",
    "organization",
    "school",
    "rawSchool"
];
var EDUCATION_SUBTITLE_KEYS = [
    "Degree",
    "Field of Study",
    "Discipline",
    "Major",
    "Study",
    "degree",
    "major"
];
var EMPLOYMENT_TITLE_KEYS = [
    "Company",
    "Company Name",
    "Employer Name",
    "Employer",
    "Organization",
    "organization",
    "company",
    "employerName"
];
var EMPLOYMENT_SUBTITLE_KEYS = [
    "Job Title",
    "Title",
    "Position",
    "Role",
    "jobTitle",
    "title"
];
function stringifyForDisplay(value) {
    if (value == null) return;
    var text;
    if (Array.isArray(value)) text = value.map((v)=>String(v).trim()).filter(Boolean).join(", ");
    else if (typeof value === "object") try {
        text = JSON.stringify(value);
    } catch  {
        return;
    }
    else text = String(value);
    var compact = text.replace(/\s+/g, " ").trim();
    if (!compact) return;
    return compact.length > 80 ? `${compact.slice(0, 77).trimEnd()}...` : compact;
}
function pickFirstMatchedDisplay(record, keys) {
    for (var want of keys){
        for (var key of Object.keys(record))if (isMatched(want, key)) {
            var display = stringifyForDisplay(record[key]);
            if (display) return display;
        }
    }
}
function tryFindDisplayValue(label, record) {
    try {
        return stringifyForDisplay(findValueInRecord(label, record));
    } catch  {
        return;
    }
}
function sectionRowTitle(sectionType, record) {
    return pickFirstMatchedDisplay(record, sectionType === "education" ? EDUCATION_TITLE_KEYS : EMPLOYMENT_TITLE_KEYS);
}
function sectionRowSubtitle(sectionType, record) {
    return pickFirstMatchedDisplay(record, sectionType === "education" ? EDUCATION_SUBTITLE_KEYS : EMPLOYMENT_SUBTITLE_KEYS);
}
function aggregateFieldStatuses(fields) {
    if (fields.some((f)=>f.status === "skipped")) return "skipped";
    if (fields.some((f)=>f.status === "missed")) return "missed";
    if (fields.length > 0 && fields.every((f)=>f.status === "filled")) return "filled";
    return "pending";
}
function createSectionResultReporter(sectionType, callbacks) {
    var rows = new Map();
    var sectionLabel = sectionType === "education" ? "Education" : "Employment";
    var applyTitleSubtitle = (row, record)=>{
        var title = sectionRowTitle(sectionType, record);
        var subtitle = sectionRowSubtitle(sectionType, record);
        if (title) row.title = title;
        if (subtitle) row.subtitle = subtitle;
    };
    var ensureRow = (index, record)=>{
        var existing = rows.get(index);
        if (existing) {
            applyTitleSubtitle(existing, record);
            return existing;
        }
        var row = {
            index,
            ...sectionRowTitle(sectionType, record) ? {
                title: sectionRowTitle(sectionType, record)
            } : {},
            ...sectionRowSubtitle(sectionType, record) ? {
                subtitle: sectionRowSubtitle(sectionType, record)
            } : {},
            status: "pending",
            fields: []
        };
        rows.set(index, row);
        return row;
    };
    return {
        setLabel: (label)=>{
            sectionLabel = label;
        },
        ensureRow,
        updateRow: applyTitleSubtitle,
        updateField: (row, label, value, status)=>{
            var nextField = {
                label: fieldLabel.formatFieldLabelForDisplay(label),
                ...value ? {
                    value
                } : {},
                status
            };
            var idx = row.fields.findIndex((f)=>isMatched(f.label, label));
            row.fields = idx === -1 ? [
                ...row.fields,
                nextField
            ] : row.fields.map((f, i)=>i === idx ? nextField : f);
            row.status = aggregateFieldStatuses(row.fields);
        },
        emit: ()=>{
            callbacks?.onSectionResultChanged?.({
                type: sectionType,
                label: fieldLabel.formatFieldLabelForDisplay(sectionLabel),
                rows: [
                    ...rows.values()
                ].sort((a, b)=>a.index - b.index)
            });
        }
    };
}
function getOperationFieldType(op) {
    var t = op?.field_type;
    return typeof t === "string" ? t.trim().toLowerCase() : "";
}
/** Operations in `next` that differ from `prev` (by field_type or identity). */ function diffOperations(prev, next) {
    if (!Array.isArray(next)) return [];
    var prevList = Array.isArray(prev) ? prev : [];
    return next.filter((item, index)=>{
        var type = getOperationFieldType(item);
        var counterpart = type ? prevList.find((p)=>getOperationFieldType(p) === type) : prevList[index];
        return !lodashEs.isEqual(item, counterpart);
    });
}
function mergeOperations(base, incoming) {
    var result = Array.isArray(base) ? [
        ...base
    ] : [];
    for (var item of incoming){
        var type = getOperationFieldType(item);
        var idx = type ? result.findIndex((r1)=>getOperationFieldType(r1) === type) : -1;
        if (idx >= 0) result.splice(idx, 1, item);
        else if (!result.some((r1)=>lodashEs.isEqual(r1, item))) result.push(item);
    }
    return result;
}
/** Deep-merge transformed record fields onto current, special-casing `operation`. */ function mergeTransformedRecord(baseRecord, currentRecord, transformed) {
    var merged = {
        ...currentRecord
    };
    for (var key of Object.keys(transformed)){
        if (key === "operation") {
            var changed = diffOperations(baseRecord.operation, transformed.operation);
            if (changed.length > 0) merged.operation = mergeOperations(currentRecord.operation, changed);
            continue;
        }
        if (!lodashEs.isEqual(transformed[key], baseRecord[key])) merged[key] = transformed[key];
    }
    return merged;
}
/**
 * Education fill path that transforms child rules first (ready-first), then fills.
 */ async function fillEducationReadyTransformedFirst({ rules, records, operationConfig, transformRecordByRule, sectionReporter }) {
    var pending = [];
    var touchedCurrentField = false;
    for (var [recordIndex, rule] of rules.entries()){
        if (rule.type !== enums.FIELD_TYPE.EDUCATION) continue;
        var record = records[recordIndex];
        if (!record) continue;
        sectionReporter?.setLabel(rule.label);
        sectionReporter?.ensureRow(recordIndex, record);
        if (!touchedCurrentField) {
            cancellation.updateCurrentField(rule.label);
            touchedCurrentField = true;
        }
        var children = rule.children || [];
        for (var childRule of children){
            var baseRecord = records[recordIndex] ?? record;
            pending.push({
                recordIndex,
                baseRecord,
                childRule,
                ready: Promise.resolve().then(()=>transformRecordByRule(childRule, baseRecord, recordIndex)).then((rec)=>({
                        status: "fulfilled",
                        record: rec
                    }), (error)=>({
                        status: "rejected",
                        error
                    }))
            });
        }
        sectionReporter?.emit();
    }
    while(pending.length > 0){
        var raced = await Promise.race(pending.map((item, index)=>item.ready.then((result)=>({
                    pendingIndex: index,
                    result
                }))));
        var finished = pending.splice(raced.pendingIndex, 1)[0];
        if (raced.result.status === "rejected") throw raced.result.error;
        var current = records[finished.recordIndex] ?? finished.baseRecord;
        var merged = mergeTransformedRecord(finished.baseRecord, current, raced.result.record);
        records[finished.recordIndex] = merged;
        var row = sectionReporter?.ensureRow(finished.recordIndex, merged);
        var displayValue = tryFindDisplayValue(finished.childRule.label, merged);
        try {
            var fillOk = await operationConfig[finished.childRule.type]?.(finished.childRule, merged, false);
            if (row) {
                sectionReporter?.updateField(row, finished.childRule.label, displayValue, fillOk !== false && displayValue ? "filled" : "missed");
                sectionReporter?.emit();
            }
        } catch (err) {
            if (row && err instanceof cancellation.SkippedError) {
                sectionReporter?.updateField(row, finished.childRule.label, displayValue, "skipped");
                sectionReporter?.emit();
            }
            throw err;
        }
    }
}
function sectionProgressCallbacks(sectionKey, progressTracker) {
    return {
        onCompleted: ()=>progressTracker.updateFilledProgress(sectionKey),
        onSkipped: ()=>progressTracker.updateMissedProgress(sectionKey),
        onSectionResultChanged: progressTracker.updateSectionResult
    };
}
function getRegularOperations(rules, record, operationConfig, updateField = true) {
    var ops = [];
    for (var rule of rules){
        var run = updateField ? async ()=>{
            await operationConfig[rule.type]?.(rule, record);
        } : async ()=>{
            await operationConfig[rule.type]?.(rule, record, false);
        };
        if (run) ops.push(run);
    }
    return ops;
}
function getEducationOperations(rules, records, operationConfig, transformRecordByRule, progressCallbacks, options) {
    return [
        async ()=>{
            var reporter = createSectionResultReporter("education", progressCallbacks);
            try {
                if (options?.fillReadyTransformedFieldsFirst && options?.wrapTransformedFieldWithSkip) throw Error("Education fill cannot wrap ready-first transforms with Skip");
                if (transformRecordByRule && options?.fillReadyTransformedFieldsFirst) {
                    await fillEducationReadyTransformedFirst({
                        rules,
                        records,
                        operationConfig,
                        transformRecordByRule,
                        sectionReporter: reporter
                    });
                    progressCallbacks?.onCompleted?.();
                    return;
                }
                for (var [recordIndex, rule] of rules.entries()){
                    if (rule.type !== enums.FIELD_TYPE.EDUCATION) continue;
                    var record = records[recordIndex];
                    if (!record) continue;
                    reporter.setLabel(rule.label);
                    var row = reporter.ensureRow(recordIndex, record);
                    cancellation.updateCurrentField(rule.label);
                    reporter.emit();
                    var children = rule.children || [];
                    for (var childRule of children){
                        var runChild = async (withCheckpoints = false)=>{
                            if (withCheckpoints) cancellation.checkpoint();
                            if (transformRecordByRule) {
                                var transformed = await transformRecordByRule(childRule, record, recordIndex);
                                if (withCheckpoints) cancellation.checkpoint();
                                record = transformed;
                                records[recordIndex] = transformed;
                            }
                            return operationConfig[childRule.type]?.(childRule, record, false);
                        };
                        try {
                            var fillOk = transformRecordByRule && options?.wrapTransformedFieldWithSkip ? await cancellation.withSkip(()=>runChild(true)) : await runChild();
                            reporter.updateRow(row, record);
                            var displayValue = tryFindDisplayValue(childRule.label, record);
                            reporter.updateField(row, childRule.label, displayValue, fillOk !== false && displayValue ? "filled" : "missed");
                            reporter.emit();
                        } catch (err) {
                            if (err instanceof cancellation.SkippedError) {
                                reporter.updateRow(row, record);
                                reporter.updateField(row, childRule.label, tryFindDisplayValue(childRule.label, record), "skipped");
                                reporter.emit();
                            }
                            throw err;
                        }
                    }
                }
                progressCallbacks?.onCompleted?.();
            } catch (err) {
                if (err instanceof cancellation.SkippedError) {
                    progressCallbacks?.onSkipped?.();
                    return;
                }
                throw err;
            } finally{
                if (!options?.keepCurrentFieldOnExit) cancellation.updateCurrentField(null);
            }
        }
    ];
}
function getEmploymentOperations(rules, records, operationConfig, transformRecordByRule, progressCallbacks, options) {
    var employmentRules = rules.filter((rule)=>rule.type === enums.FIELD_TYPE.EMPLOYMENT);
    return [
        async ()=>{
            var reporter = createSectionResultReporter("employment", progressCallbacks);
            try {
                for (var [recordIndex, rule] of employmentRules.entries()){
                    var record = records[recordIndex];
                    if (!record) {
                        console.warn(`No record found for employment rule at index ${recordIndex}. Total records: ${records.length}, Total rules: ${employmentRules.length}`);
                        continue;
                    }
                    reporter.setLabel(rule.label);
                    var row = reporter.ensureRow(recordIndex, record);
                    cancellation.updateCurrentField(rule.label);
                    reporter.emit();
                    var children = rule.children || [];
                    for (var childRule of children)try {
                        if (transformRecordByRule) {
                            record = await transformRecordByRule(childRule, record, recordIndex);
                            records[recordIndex] = record;
                        }
                        var fillOk = await operationConfig[childRule.type]?.(childRule, record, false);
                        reporter.updateRow(row, record);
                        var displayValue = tryFindDisplayValue(childRule.label, record);
                        reporter.updateField(row, childRule.label, displayValue, fillOk !== false && displayValue ? "filled" : "missed");
                        reporter.emit();
                    } catch (err) {
                        if (err instanceof cancellation.SkippedError) {
                            reporter.updateRow(row, record);
                            reporter.updateField(row, childRule.label, tryFindDisplayValue(childRule.label, record), "skipped");
                            reporter.emit();
                        }
                        throw err;
                    }
                }
                progressCallbacks?.onCompleted?.();
            } catch (err) {
                if (err instanceof cancellation.SkippedError) {
                    progressCallbacks?.onSkipped?.();
                    return;
                }
                throw err;
            } finally{
                if (!options?.keepCurrentFieldOnExit) cancellation.updateCurrentField(null);
            }
        }
    ];
}
function ensureArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function normalizeCandidateText(text, isLocation) {
    var compact = text.replace(/\s+/g, " ").trim();
    return isLocation ? compact.replace(/\s*,\s*/g, ", ") : compact;
}
function buildAutocompleteAnswerCandidates(fieldLabel, rawAnswers) {
    var lower = fieldLabel.toLowerCase();
    var isLocation = lower.includes("location");
    var strings = ensureArray(rawAnswers).filter((v)=>typeof v === "string");
    var candidates = [];
    var pushUnique = (text)=>{
        var normalized = normalizeCandidateText(text, isLocation);
        if (normalized && !candidates.includes(normalized)) candidates.push(normalized);
    };
    for (var value of strings){
        pushUnique(value);
        if (isLocation) {
            var city = normalizeCandidateText(value, true).split(",")[0]?.trim();
            if (city) pushUnique(city);
        }
    }
    console.debug("[Greenhouse][Autocomplete] candidates prepared", {
        fieldKind: isLocation ? "location" : "generic",
        inputCount: strings.length,
        candidateCount: candidates.length
    });
    return candidates.length > 0 ? candidates : strings;
}
/**
 * Wrap a field fill fn with skip/cancel handling + progress callbacks.
 * fillFn(rule, value, record) \u2014 return false to treat as miss.
 */ function createOperationHandlerFactory(onFilled, onMissed) {
    return function(fillFn, options = {
        expectArray: false
    }) {
        return async (rule, record, updateCurrentField = true)=>{
            var label = rule.label;
            if (updateCurrentField) cancellation.updateCurrentField(label);
            try {
                await cancellation.withSkip(async ()=>{
                    var raw = findValueInRecord(rule.label, record);
                    var value = options.expectArray ? ensureArray(raw) : lodashEs.isArray(raw) ? raw[0] : raw;
                    var ok = await fillFn(rule, value, record);
                    if (ok === false) throw new filler.ValueError(`Failed to fill ${rule.label}`);
                    if (updateCurrentField) onFilled(rule.label);
                });
                return true;
            } catch (err) {
                if (err instanceof cancellation.CancelledError) throw err;
                if (err instanceof cancellation.SkippedError) {
                    if (updateCurrentField) {
                        onMissed(rule.label);
                        return false;
                    }
                    throw err;
                }
                if (err instanceof filler.ValueError) console.warn(`[OperationHandler] "${label}" ValueError:`, err.message);
                else console.error(`[OperationHandler] "${label}" unexpected error:`, err);
                if (updateCurrentField) onMissed(rule.label);
                return false;
            }
        };
    };
}
/** Parse `YYYY-MM-DD` (or / .) into { year, month: "Jan", day }. */ function parseDateParts(raw) {
    try {
        if (!raw || typeof raw !== "string") return {
            year: "",
            month: "",
            day: ""
        };
        var normalized = raw.replace(/[\/.]/g, "-").trim();
        var parts = normalized.split("-");
        if (parts.length < 2) return {
            year: "",
            month: "",
            day: ""
        };
        var year = parts[0];
        var monthNum = parts[1];
        var day = parts[2];
        var MONTHS = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        var monthIndex = Number(monthNum) - 1;
        var month = monthIndex >= 0 && monthIndex < 12 ? MONTHS[monthIndex] : "";
        return {
            year: year || "",
            month,
            day: day ? day.replace(/^0/, "") : ""
        };
    } catch (err) {
        console.error("parseDateParts error:", err, raw);
        return {
            year: "",
            month: "",
            day: ""
        };
    }
}

},{}]},["fNlwS","2r5rK"], "2r5rK", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBd0YsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFBQVcsVUFBUSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxFQUFDLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsT0FBTyxXQUFTLGFBQVcsSUFBSSxVQUFRLE1BQUssSUFBRSxDQUFDO1FBQUUsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFHLEVBQUUsWUFBVSxNQUFLLE9BQU8sRUFBRTtZQUFRLElBQUksSUFBRSxFQUFFLFFBQU87WUFBRSxJQUFHO2dCQUFDLElBQUUsRUFBRTtZQUFnQixFQUFDLE9BQU0sR0FBRTtnQkFBQyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7WUFBQztZQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7Z0JBQUUsSUFBSSxJQUFFLEVBQUUsSUFBSTtnQkFBRyxJQUFHLE1BQUksS0FBSyxHQUFFO29CQUFDLElBQUksSUFBRSxFQUFFO29CQUFHLEVBQUUsY0FBYSxDQUFBLEVBQUUsYUFBVyxDQUFDLENBQUEsR0FBRyxLQUFHLFlBQVU7Z0JBQUM7WUFBQztZQUFDLE9BQU8sRUFBRSxVQUFRLEdBQUU7UUFBQztRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsSUFBSTtZQUFHLE9BQU8sTUFBSSxLQUFLLEtBQUcsTUFBSSxLQUFLLElBQUUsQ0FBQyxJQUFFLENBQUUsQ0FBQSxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssS0FBRyxFQUFFLE9BQUssRUFBRSxNQUFJLEVBQUUsVUFBUztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxPQUFPLEVBQUUsYUFBVyxFQUFFLFVBQVU7UUFBZ0I7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxPQUFPLEVBQUUsTUFBSSxFQUFFLEtBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUU7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUk7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsSUFBSSxJQUFFLElBQUk7WUFBSSxPQUFPLEVBQUUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLEVBQUUsSUFBSSxHQUFFO1lBQUUsSUFBRztRQUFDO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFJLElBQUUsSUFBSTtZQUFJLE9BQU8sRUFBRSxRQUFRLFNBQVMsQ0FBQztnQkFBRSxFQUFFLElBQUk7WUFBRSxJQUFHO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxJQUFHO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFBQSxFQUFDLE9BQU0sR0FBRTtnQkFBQztZQUFNO1FBQUM7UUFBQyxTQUFTO1lBQUksSUFBRyxFQUFFLFdBQVMsS0FBRyxHQUFFLE9BQU87WUFBSyxJQUFFLENBQUM7WUFBRSxJQUFHO2dCQUFDLElBQUksSUFBRSxJQUFJLEtBQUksSUFBRSxJQUFJLEtBQUksSUFBRTtnQkFBRSxJQUFFLEVBQUUsRUFBQyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7b0JBQVEsRUFBRSxJQUFJLEdBQUUsSUFBRyxFQUFFLElBQUksR0FBRSxJQUFHLEVBQUUsVUFBUSxHQUFFLEVBQUUsR0FBRSxLQUFHLEVBQUUsSUFBSSxLQUFHLEVBQUUsSUFBSTtnQkFBRTtnQkFBRyxJQUFJLElBQUU7b0JBQUMsaUJBQWdCO29CQUFFLGVBQWM7Z0JBQUM7Z0JBQUUsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLGtCQUFrQjtnQkFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUU7Z0JBQUcsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsSUFBRyxFQUFFLElBQUksSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLElBQUc7d0JBQUMsSUFBSSxJQUFFLEVBQUUsSUFBSTt3QkFBRyxJQUFHOzRCQUFDLEVBQUUsYUFBYSxHQUFFO3dCQUFFLEVBQUMsT0FBTSxHQUFFOzRCQUFDLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUE7d0JBQUU7b0JBQUM7Z0JBQUMsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsRUFBRSxJQUFJO29CQUFHLElBQUc7d0JBQUMsRUFBRSxnQkFBZ0IsR0FBRTtvQkFBRSxFQUFDLE9BQU0sR0FBRTt3QkFBQyxLQUFJLENBQUEsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFBO29CQUFFO2dCQUFDLElBQUcsR0FBRSxNQUFNO2dCQUFFLE9BQU87WUFBQyxTQUFRO2dCQUFDLElBQUUsQ0FBQztZQUFDO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRyxJQUFHLE1BQUksUUFBTSxPQUFPLEtBQUcsY0FBWSxPQUFPLEtBQUcsWUFBVSxFQUFFLElBQUksSUFBRztZQUFPLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxJQUFHLE1BQUksS0FBSyxJQUFHLENBQUEsSUFBRTtnQkFBQyxTQUFRO1lBQUMsR0FBRSxFQUFFLElBQUksR0FBRSxFQUFDLElBQUcsRUFBRSxLQUFLO2dCQUFDO2dCQUFFO2FBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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O1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDRCxJQUFJLGFBQWEsT0FBTyxZQUFZO1FBQ3BDLElBQUksUUFDRixjQUFjLEtBQUssYUFBYSxLQUFLLE1BQU0sQ0FBQyxXQUFXLEdBQUc7UUFFNUQsT0FBTztZQUNMLE1BQU0sUUFBUTtZQUNkO1lBQ0EsS0FBSyxNQUFNLElBQUksUUFBUSxNQUFNLE1BQU07UUFDckM7SUFDRixFQUFFLE9BQU8sS0FBSztRQUNaLFFBQVEsTUFBTSx5QkFBeUIsS0FBSztRQUM1QyxPQUFPO1lBQUUsTUFBTTtZQUFJLE9BQU87WUFBSSxLQUFLO1FBQUc7SUFDeEM7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtN2ZkOWM3MmQ3ZTE1NTliMS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxtZXRob2RzXFxcXGFuc3dlci5qc1wiLFwiYnVuZGxlSWRcIjpcIjk0ZjNkNTUzOWI5MTVjYTBcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA3VDVlV1xyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgZGF0YXVybC10by1ibG9iIC0+IGRxanZOICA9PiAgZGF0YXVybC10by1ibG9iLmpzXHJcbiAqICAgbG9kYXNoLWVzIC0+IHA0UkJlICA9PiAgbG9kYXNoLWVzLmpzXHJcbiAqICAgfmNvbnRlbnRzIC0+IGQ0dGo3ICA9PiAgc3JjL2NvbnRlbnRzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uIC0+IGx1SmZzICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NoYXJlZC9maWxsZXIgLT4gMmFHc1ggID0+ICBzcmMvY29udGVudHMvc2hhcmVkL2ZpbGxlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9mYWxjb24tYW5zd2VyLXRyYWNraW5nIC0+IDJ2STlFICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2ZhbGNvbi1hbnN3ZXItdHJhY2tpbmcuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUvdXRpbHMgLT4gYVREaDUgID0+ICBzcmMvY29yZS91dGlscy5qc1xyXG4gKiAgIH5lbnVtcy9odHRwIC0+IGVKRnFqICA9PiAgc3JjL2VudW1zL2h0dHAuanNcclxuICogICB+dXRpbHMvZmllbGRMYWJlbCAtPiAxUm1HdyAgPT4gIHNyYy91dGlscy9maWVsZExhYmVsLmpzXHJcbiAqICAgfnV0aWxzL3NraWxsLWxpc3QgLT4gNzRsa0ggID0+ICBzcmMvdXRpbHMvc2tpbGwtbGlzdC5qc1xyXG4gKlxyXG4gKiBBbnN3ZXIgLyBwcm9maWxlIC8gcmVzdW1lIGZldGNoICsgc2VjdGlvbiBmaWxsIG9yY2hlc3RyYXRpb24uXHJcbiAqIEh1bWFuLXJlYWRhYmxlIHJlY292ZXJ5IGZyb20gUGFyY2VsIGdyYXBoLiBQYXJjZWwgYGUoKWAgLyBgcmAgcHJlc2VydmVkLlxyXG4gKi9cclxuXHJcbnZhciBoZWxwZXJzID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIilcclxuaGVscGVycy5kZWZpbmVJbnRlcm9wRmxhZyhyKVxyXG5oZWxwZXJzLmV4cG9ydChyLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsICgpID0+IHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKVxyXG5oZWxwZXJzLmV4cG9ydChyLCBcImlzTWF0Y2hlZFwiLCAoKSA9PiBpc01hdGNoZWQpXHJcbmhlbHBlcnMuZXhwb3J0KHIsIFwiTk9fUkVTVU1FX0ZPVU5EX0VSUk9SXCIsICgpID0+IE5PX1JFU1VNRV9GT1VORF9FUlJPUilcclxuaGVscGVycy5leHBvcnQociwgXCJmZXRjaFBkZkFzQmxvYlwiLCAoKSA9PiBmZXRjaFBkZkFzQmxvYilcclxuaGVscGVycy5leHBvcnQociwgXCJmZXRjaENvdmVyTGV0dGVyUGRmQXNCbG9iXCIsICgpID0+IGZldGNoQ292ZXJMZXR0ZXJQZGZBc0Jsb2IpXHJcbmhlbHBlcnMuZXhwb3J0KHIsIFwiZ2V0U2l0ZVRva2VuXCIsICgpID0+IGdldFNpdGVUb2tlbilcclxuaGVscGVycy5leHBvcnQociwgXCJIVFRQRXJyb3JcIiwgKCkgPT4gSFRUUEVycm9yKVxyXG5oZWxwZXJzLmV4cG9ydChyLCBcIlJlc3VtZU1pc3NpbmdDb2RlRXJyb3JcIiwgKCkgPT4gUmVzdW1lTWlzc2luZ0NvZGVFcnJvcilcclxuaGVscGVycy5leHBvcnQociwgXCJnZXRFbGVtZW50UnVsZXNcIiwgKCkgPT4gZ2V0RWxlbWVudFJ1bGVzKVxyXG5oZWxwZXJzLmV4cG9ydChyLCBcImluaXRVc2VyRGF0YVwiLCAoKSA9PiBpbml0VXNlckRhdGEpXHJcbmhlbHBlcnMuZXhwb3J0KHIsIFwiZmluZFZhbHVlSW5SZWNvcmRcIiwgKCkgPT4gZmluZFZhbHVlSW5SZWNvcmQpXHJcbmhlbHBlcnMuZXhwb3J0KHIsIFwiY3JlYXRlU2VjdGlvblJlc3VsdFJlcG9ydGVyXCIsICgpID0+IGNyZWF0ZVNlY3Rpb25SZXN1bHRSZXBvcnRlcilcclxuaGVscGVycy5leHBvcnQociwgXCJzZWN0aW9uUHJvZ3Jlc3NDYWxsYmFja3NcIiwgKCkgPT4gc2VjdGlvblByb2dyZXNzQ2FsbGJhY2tzKVxyXG5oZWxwZXJzLmV4cG9ydChyLCBcImdldFJlZ3VsYXJPcGVyYXRpb25zXCIsICgpID0+IGdldFJlZ3VsYXJPcGVyYXRpb25zKVxyXG5oZWxwZXJzLmV4cG9ydChyLCBcImdldEVkdWNhdGlvbk9wZXJhdGlvbnNcIiwgKCkgPT4gZ2V0RWR1Y2F0aW9uT3BlcmF0aW9ucylcclxuaGVscGVycy5leHBvcnQociwgXCJnZXRFbXBsb3ltZW50T3BlcmF0aW9uc1wiLCAoKSA9PiBnZXRFbXBsb3ltZW50T3BlcmF0aW9ucylcclxuaGVscGVycy5leHBvcnQociwgXCJlbnN1cmVBcnJheVwiLCAoKSA9PiBlbnN1cmVBcnJheSlcclxuaGVscGVycy5leHBvcnQociwgXCJidWlsZEF1dG9jb21wbGV0ZUFuc3dlckNhbmRpZGF0ZXNcIiwgKCkgPT4gYnVpbGRBdXRvY29tcGxldGVBbnN3ZXJDYW5kaWRhdGVzKVxyXG5oZWxwZXJzLmV4cG9ydChyLCBcImNyZWF0ZU9wZXJhdGlvbkhhbmRsZXJGYWN0b3J5XCIsICgpID0+IGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXJGYWN0b3J5KVxyXG5oZWxwZXJzLmV4cG9ydChyLCBcInBhcnNlRGF0ZVBhcnRzXCIsICgpID0+IHBhcnNlRGF0ZVBhcnRzKVxyXG5cclxudmFyIGRhdGF1cmxUb0Jsb2JNb2QgPSBlKFwiZGF0YXVybC10by1ibG9iXCIpXHJcbnZhciBkYXRhdXJsVG9CbG9iID0gaGVscGVycy5pbnRlcm9wRGVmYXVsdChkYXRhdXJsVG9CbG9iTW9kKVxyXG52YXIgbG9kYXNoRXMgPSBlKFwibG9kYXNoLWVzXCIpXHJcbnZhciBtZXNzYWdpbmcgPSBlKFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiKVxyXG52YXIgY29udGVudHMgPSBlKFwifmNvbnRlbnRzXCIpXHJcbnZhciBjYW5jZWxsYXRpb24gPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uXCIpXHJcbnZhciBmaWxsZXIgPSBlKFwifmNvbnRlbnRzL3NoYXJlZC9maWxsZXJcIilcclxudmFyIGZhbGNvbkFuc3dlclRyYWNraW5nID0gZShcIn5jb250ZW50cy9zaXRlcy9mYWxjb24tYW5zd2VyLXRyYWNraW5nXCIpXHJcbnZhciBlbnVtcyA9IGUoXCJ+Y29yZS9lbnVtc1wiKVxyXG52YXIgY29yZVV0aWxzID0gZShcIn5jb3JlL3V0aWxzXCIpXHJcbnZhciBodHRwID0gZShcIn5lbnVtcy9odHRwXCIpXHJcbnZhciBmaWVsZExhYmVsID0gZShcIn51dGlscy9maWVsZExhYmVsXCIpXHJcbnZhciBza2lsbExpc3QgPSBlKFwifnV0aWxzL3NraWxsLWxpc3RcIilcclxuXHJcbi8qKiBET00gLyBpbnRlcm5hbCBrZXlzIHN0cmlwcGVkIGJlZm9yZSBzZW5kaW5nIGZpZWxkIGRlc2NyaXB0b3JzIHRvIEdQVC4gKi9cclxudmFyIE9NSVRfRlJPTV9HUFRfRUxFTUVOVCA9IFtcclxuICBcIiRpbnB1dFwiLFxyXG4gIFwiJGxhYmVsXCIsXHJcbiAgXCIkZmllbGRSb3dcIixcclxuICBcImNoaWxkcmVuXCIsXHJcbiAgXCIkY2hlY2tib3hzXCIsXHJcbiAgXCIkcmFkaW9QYXJlbnRcIixcclxuICBcIiRyYWRpb3NcIixcclxuICBcIl9fY2FyZWVySHViXCIsXHJcbiAgXCJfX2VpZ2h0Zm9sZENvbmRpdGlvbmFsXCIsXHJcbiAgXCJfX3pvaG9DbHVzdGVyUm9vdFwiLFxyXG4gIFwiX196b2hvU2VtYW50aWNUeXBlXCIsXHJcbiAgXCJfX3JlY3J1aXRlZVBob25lRmllbGRcIixcclxuICBcIl9fcmVjcnVpdGVlUGhvbmVDb3VudHJpZXNcIixcclxuICBcIl9fcmVjcnVpdGVlUGhvbmVTdGF0ZVwiLFxyXG4gIFwiX191bHRpcHJvRGlhbG9nU2VjdGlvblwiLFxyXG4gIFwib3B0aW9uc01vZGVcIlxyXG5dXHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlRWxlbWVudEZvckdwdChmaWVsZCkge1xyXG4gIHZhciBjbGVhbmVkID0gbG9kYXNoRXMub21pdChmaWVsZCwgLi4uT01JVF9GUk9NX0dQVF9FTEVNRU5UKVxyXG4gIGlmIChmaWVsZD8ub3B0aW9uc01vZGUgPT09IFwic2VhcmNoYWJsZVwiKSBkZWxldGUgY2xlYW5lZC5vcHRpb25zXHJcbiAgaWYgKHR5cGVvZiBjbGVhbmVkLmxhYmVsICE9PSBcInN0cmluZ1wiKSByZXR1cm4gY2xlYW5lZFxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5jbGVhbmVkLFxyXG4gICAgdHlwZTogaXNOdW1iZXJJbnB1dChmaWVsZCkgPyBcIm51bWJlclwiIDogY2xlYW5lZC50eXBlLFxyXG4gICAgbGFiZWw6IGZpZWxkTGFiZWwuZm9ybWF0RmllbGRMYWJlbEZvckRpc3BsYXkoY2xlYW5lZC5sYWJlbClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVySW5wdXQoZmllbGQpIHtcclxuICB2YXIgaW5wdXQgPSBmaWVsZD8uJGlucHV0XHJcbiAgdmFyIHR5cGVBdHRyID1cclxuICAgIHR5cGVvZiBpbnB1dD8uZ2V0QXR0cmlidXRlID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgPyBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpXHJcbiAgICAgIDogaW5wdXQ/LnR5cGVcclxuICByZXR1cm4gdHlwZW9mIHR5cGVBdHRyID09PSBcInN0cmluZ1wiICYmIHR5cGVBdHRyLnRvTG93ZXJDYXNlKCkgPT09IFwibnVtYmVyXCJcclxufVxyXG5cclxudmFyIE5PTl9BTE5VTV9FWENFUFRfQ0pLID1cclxuICAvW15hLXpBLVowLTlcXHNcXHUzMDQwLVxcdTMwZmZcXHUzNDAwLVxcdTRkYmZcXHU0ZTAwLVxcdTlmZmZcXHVmOTAwLVxcdWZhZmZcXHVhYzAwLVxcdWQ3YWZdL2dcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKHRleHQpIHtcclxuICByZXR1cm4gdGV4dC5yZXBsYWNlKE5PTl9BTE5VTV9FWENFUFRfQ0pLLCBcIlwiKVxyXG59XHJcblxyXG4vKiogTGFiZWwgZXF1YWxpdHkgYWZ0ZXIgc3RyaXBwaW5nIHB1bmN0dWF0aW9uIC8gYXN0ZXJpc2tzIC8gd2hpdGVzcGFjZS4gKi9cclxuZnVuY3Rpb24gaXNNYXRjaGVkKGEsIGIpIHtcclxuICBpZiAoIWEgfHwgIWIgfHwgdHlwZW9mIGEgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGIgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZVxyXG4gIHZhciBsZWZ0ID0gcmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoYSlcclxuICAgID8ucmVwbGFjZSgvXFxzKlxcKlxccyovZywgXCJcIilcclxuICAgID8ucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcclxuICAgID8udG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gIHZhciByaWdodCA9IHJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKGIpXHJcbiAgICA/LnJlcGxhY2UoL1xccypcXCpcXHMqL2csIFwiXCIpXHJcbiAgICA/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpXHJcbiAgICA/LnRvTG93ZXJDYXNlKClcclxuICAgIC50cmltKClcclxuICByZXR1cm4gISFsZWZ0ICYmICEhcmlnaHQgJiYgbGVmdCA9PT0gcmlnaHRcclxufVxyXG5cclxuZnVuY3Rpb24gZGF0YVVybFRvRmlsZUxpc3QoYmFzZTY0VVJMLCBmaWxlTmFtZSwgbWltZVR5cGUpIHtcclxuICB2YXIgYnl0ZXMgPSBkYXRhdXJsVG9CbG9iLmRlZmF1bHQoYmFzZTY0VVJMKVxyXG4gIHZhciBibG9iID0gbmV3IEJsb2IoW2J5dGVzXSlcclxuICB2YXIgZHQgPSBuZXcgRGF0YVRyYW5zZmVyKClcclxuICBkdC5pdGVtcy5hZGQoXHJcbiAgICBuZXcgRmlsZShbYmxvYl0sIGZpbGVOYW1lLCB7IHR5cGU6IG1pbWVUeXBlLCBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCkgfSlcclxuICApXHJcbiAgcmV0dXJuIGR0XHJcbn1cclxuXHJcbnZhciBOT19SRVNVTUVfRk9VTkRfRVJST1IgPSBcIk5vIHJlc3VtZSBmb3VuZFwiXHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFBkZkFzQmxvYihyZXN1bWVSZXF1ZXN0KSB7XHJcbiAgdmFyIHJlc3BvbnNlXHJcbiAgdmFyIGV4dGVuc2lvbiA9IFwiXCJcclxuXHJcbiAgY29uc29sZS5sb2coXCJbUmVzdW1lVXBsb2FkRGVidWddIGZldGNoUGRmQXNCbG9iOnN0YXJ0XCIsIHtcclxuICAgIHJlc3VtZUlkOiByZXN1bWVSZXF1ZXN0Py5pZCxcclxuICAgIHRhaWxvcklkOiByZXN1bWVSZXF1ZXN0Py50YWlsb3JJZCxcclxuICAgIGhhc1RhaWxvcjogISFyZXN1bWVSZXF1ZXN0Py50YWlsb3IsXHJcbiAgICBoYXNUYWlsb3JSZXN1bWU6ICEhcmVzdW1lUmVxdWVzdD8udGFpbG9yUmVzdW1lLFxyXG4gICAgZGlhZ25vc2VJZDogcmVzdW1lUmVxdWVzdD8uZGlhZ25vc2VJZCxcclxuICAgIHRlbXBsYXRlOiByZXN1bWVSZXF1ZXN0Py50ZW1wbGF0ZSxcclxuICAgIHJlc3VtZU5hbWU6IHJlc3VtZVJlcXVlc3Q/LnJlc3VtZU5hbWUsXHJcbiAgICB1c2VPcmlnaW5hbFJlc3VtZTogcmVzdW1lUmVxdWVzdD8udXNlT3JpZ2luYWxSZXN1bWUsXHJcbiAgICBhZ2VudE9yaWdpbmFsUmVzdW1lOiBjb250ZW50cy5hZ2VudE9yaWdpbmFsUmVzdW1lLFxyXG4gICAgYWdlbnRSZXN1bWVJZDogY29udGVudHMuYWdlbnRSZXN1bWVJZCxcclxuICAgIGFnZW50VGFpbG9ySWQ6IGNvbnRlbnRzLmFnZW50VGFpbG9ySWRcclxuICB9KVxyXG5cclxuICBpZiAoXHJcbiAgICByZXN1bWVSZXF1ZXN0LnVzZU9yaWdpbmFsUmVzdW1lIHx8XHJcbiAgICAoY29udGVudHMuYWdlbnRPcmlnaW5hbFJlc3VtZSAmJiAhY29udGVudHMuYWdlbnRUYWlsb3JJZClcclxuICApIHtcclxuICAgIHZhciBvcmlnaW5hbElkID0gcmVzdW1lUmVxdWVzdC5pZCB8fCBjb250ZW50cy5hZ2VudFJlc3VtZUlkXHJcbiAgICBjb25zb2xlLmxvZyhcIltSZXN1bWVVcGxvYWREZWJ1Z10gZmV0Y2hQZGZBc0Jsb2I6YnJhbmNoLW9yaWdpbmFsXCIsIHtcclxuICAgICAgcmVzdW1lSWQ6IG9yaWdpbmFsSWRcclxuICAgIH0pXHJcbiAgICByZXNwb25zZSA9IGF3YWl0IG1lc3NhZ2luZy5zZW5kVG9CYWNrZ3JvdW5kKHtcclxuICAgICAgbmFtZTogXCJnZXRSZXN1bWVCbG9iXCIsXHJcbiAgICAgIGJvZHk6IHsgcmVzdW1lSWQ6IG9yaWdpbmFsSWQgfVxyXG4gICAgfSlcclxuICAgIGV4dGVuc2lvbiA9IHJlc3BvbnNlPy5leHRlbnNpb25cclxuICB9IGVsc2UgaWYgKHJlc3VtZVJlcXVlc3QudGFpbG9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIltSZXN1bWVVcGxvYWREZWJ1Z10gZmV0Y2hQZGZBc0Jsb2I6YnJhbmNoLXRhaWxvclwiLCB7XHJcbiAgICAgIHRhaWxvcklkOiByZXN1bWVSZXF1ZXN0LnRhaWxvcklkLFxyXG4gICAgICBoYXNUYWlsb3JSZXN1bWU6ICEhcmVzdW1lUmVxdWVzdC50YWlsb3JSZXN1bWUsXHJcbiAgICAgIHRlbXBsYXRlOiByZXN1bWVSZXF1ZXN0LnRlbXBsYXRlXHJcbiAgICB9KVxyXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBtZXNzYWdpbmcuc2VuZFRvQmFja2dyb3VuZCh7XHJcbiAgICAgIG5hbWU6IFwiZ2V0VGFpbG9yUmVzdW1lQmxvYlwiLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgdGFpbG9yUmVzdW1lOiByZXN1bWVSZXF1ZXN0LnRhaWxvclJlc3VtZSxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVzdW1lUmVxdWVzdC50ZW1wbGF0ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgZXh0ZW5zaW9uID0gXCJwZGZcIlxyXG4gIH0gZWxzZSBpZiAocmVzdW1lUmVxdWVzdC5kaWFnbm9zZUlkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIltSZXN1bWVVcGxvYWREZWJ1Z10gZmV0Y2hQZGZBc0Jsb2I6YnJhbmNoLWJhc2VcIiwge1xyXG4gICAgICBkaWFnbm9zZUlkOiByZXN1bWVSZXF1ZXN0LmRpYWdub3NlSWQsXHJcbiAgICAgIHJlc3VtZUlkOiByZXN1bWVSZXF1ZXN0LmlkLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVzdW1lUmVxdWVzdC50ZW1wbGF0ZVxyXG4gICAgfSlcclxuICAgIHJlc3BvbnNlID0gYXdhaXQgbWVzc2FnaW5nLnNlbmRUb0JhY2tncm91bmQoe1xyXG4gICAgICBuYW1lOiBcImdldEJhc2VSZXN1bWVCbG9iXCIsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBkaWFnbm9zZUlkOiByZXN1bWVSZXF1ZXN0LmRpYWdub3NlSWQsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlc3VtZVJlcXVlc3QudGVtcGxhdGVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGV4dGVuc2lvbiA9IFwicGRmXCJcclxuICB9IGVsc2UgaWYgKHJlc3VtZVJlcXVlc3QuaWQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiW1Jlc3VtZVVwbG9hZERlYnVnXSBmZXRjaFBkZkFzQmxvYjpicmFuY2gtaWQtZmFsbGJhY2tcIiwge1xyXG4gICAgICByZXN1bWVJZDogcmVzdW1lUmVxdWVzdC5pZFxyXG4gICAgfSlcclxuICAgIHJlc3BvbnNlID0gYXdhaXQgbWVzc2FnaW5nLnNlbmRUb0JhY2tncm91bmQoe1xyXG4gICAgICBuYW1lOiBcImdldFJlc3VtZUJsb2JcIixcclxuICAgICAgYm9keTogeyByZXN1bWVJZDogcmVzdW1lUmVxdWVzdC5pZCB9XHJcbiAgICB9KVxyXG4gICAgZXh0ZW5zaW9uID0gcmVzcG9uc2U/LmV4dGVuc2lvblxyXG4gIH1cclxuXHJcbiAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIltSZXN1bWVVcGxvYWREZWJ1Z10gZmV0Y2hQZGZBc0Jsb2I6bm8tcmVzcG9uc2VcIiwge1xyXG4gICAgICByZXN1bWVJZDogcmVzdW1lUmVxdWVzdD8uaWQsXHJcbiAgICAgIGRpYWdub3NlSWQ6IHJlc3VtZVJlcXVlc3Q/LmRpYWdub3NlSWQsXHJcbiAgICAgIGhhc1RhaWxvcjogISFyZXN1bWVSZXF1ZXN0Py50YWlsb3IsXHJcbiAgICAgIHVzZU9yaWdpbmFsUmVzdW1lOiByZXN1bWVSZXF1ZXN0Py51c2VPcmlnaW5hbFJlc3VtZVxyXG4gICAgfSlcclxuICAgIHRocm93IEVycm9yKE5PX1JFU1VNRV9GT1VORF9FUlJPUilcclxuICB9XHJcblxyXG4gIHZhciBiYXNlNjRVUkwgPSB0eXBlb2YgcmVzcG9uc2UuYmFzZTY0VVJMID09PSBcInN0cmluZ1wiID8gcmVzcG9uc2UuYmFzZTY0VVJMIDogXCJcIlxyXG4gIHZhciBwYXlsb2FkID0gYmFzZTY0VVJMLnNwbGl0KFwiLFwiKVsxXSB8fCBcIlwiXHJcbiAgaWYgKCFwYXlsb2FkKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiW1Jlc3VtZVVwbG9hZERlYnVnXSBmZXRjaFBkZkFzQmxvYjplbXB0eS1ibG9iXCIsIHtcclxuICAgICAgcmVzdW1lSWQ6IHJlc3VtZVJlcXVlc3Q/LmlkLFxyXG4gICAgICBkaWFnbm9zZUlkOiByZXN1bWVSZXF1ZXN0Py5kaWFnbm9zZUlkLFxyXG4gICAgICBoYXNUYWlsb3I6ICEhcmVzdW1lUmVxdWVzdD8udGFpbG9yLFxyXG4gICAgICB1c2VPcmlnaW5hbFJlc3VtZTogcmVzdW1lUmVxdWVzdD8udXNlT3JpZ2luYWxSZXN1bWUsXHJcbiAgICAgIGJhc2U2NFVSTExlbmd0aDogYmFzZTY0VVJMLmxlbmd0aFxyXG4gICAgfSlcclxuICAgIHRocm93IEVycm9yKE5PX1JFU1VNRV9GT1VORF9FUlJPUilcclxuICB9XHJcblxyXG4gIGlmICghZXh0ZW5zaW9uKSBleHRlbnNpb24gPSBcInBkZlwiXHJcbiAgdmFyIGJhc2VOYW1lID1cclxuICAgIHJlc3VtZVJlcXVlc3QucmVzdW1lTmFtZT8ucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpIHx8IFwicmVzdW1lXCJcclxuXHJcbiAgY29uc29sZS5sb2coXCJbUmVzdW1lVXBsb2FkRGVidWddIGZldGNoUGRmQXNCbG9iOnN1Y2Nlc3NcIiwge1xyXG4gICAgZXh0ZW5zaW9uLFxyXG4gICAgZmlsZW5hbWU6IGAke2Jhc2VOYW1lfS4ke2V4dGVuc2lvbn1gLFxyXG4gICAgaGFzQmFzZTY0VVJMOiAhIXJlc3BvbnNlLmJhc2U2NFVSTCxcclxuICAgIGJhc2U2NExlbmd0aDogYmFzZTY0VVJMLmxlbmd0aFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBkYXRhVXJsVG9GaWxlTGlzdChcclxuICAgIGJhc2U2NFVSTCxcclxuICAgIGAke2Jhc2VOYW1lfS4ke2V4dGVuc2lvbn1gLFxyXG4gICAgZW51bXMuTUlNRV9UWVBFW2V4dGVuc2lvbl0gfHwgZW51bXMuTUlNRV9UWVBFLnBkZlxyXG4gIClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3ZlckxldHRlclBkZkFzQmxvYihyZXF1ZXN0KSB7XHJcbiAgdmFyIHJlc3BvbnNlXHJcbiAgaWYgKHJlcXVlc3QuY292ZXJMZXR0ZXJJZCkge1xyXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBtZXNzYWdpbmcuc2VuZFRvQmFja2dyb3VuZCh7XHJcbiAgICAgIG5hbWU6IFwiZ2V0Q292ZXJMZXR0ZXJCbG9iXCIsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBjb3ZlckxldHRlcklkOiByZXF1ZXN0LmNvdmVyTGV0dGVySWQsXHJcbiAgICAgICAgbWFya2Rvd246IHJlcXVlc3QubWFya2Rvd24sXHJcbiAgICAgICAgdXNlTGVnYWN5RG93bmxvYWQ6IHJlcXVlc3QudXNlTGVnYWN5RG93bmxvYWRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgaWYgKCFyZXNwb25zZSkgdGhyb3cgRXJyb3IoXCJObyBjb3ZlciBsZXR0ZXIgZm91bmRcIilcclxuICByZXR1cm4gZGF0YVVybFRvRmlsZUxpc3QoXHJcbiAgICByZXNwb25zZS5iYXNlNjRVUkwsXHJcbiAgICBgJHtyZXF1ZXN0LmNvdmVyTGV0dGVyTmFtZX0ucGRmYCxcclxuICAgIGVudW1zLk1JTUVfVFlQRS5wZGZcclxuICApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFNpdGVUb2tlbigpIHtcclxuICByZXR1cm4gbWVzc2FnaW5nLnNlbmRUb0JhY2tncm91bmQoe1xyXG4gICAgbmFtZTogXCJnZXRTaXRlVG9rZW5cIixcclxuICAgIGJvZHk6IHsgdXJsOiBjb3JlVXRpbHMucmVtb3ZlRW5kU3RyaW5ncyh3aW5kb3cubG9jYXRpb24uaHJlZikgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNsYXNzIEhUVFBFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlID0gXCJcIikge1xyXG4gICAgc3VwZXIobWVzc2FnZSlcclxuICAgIHRoaXMubmFtZSA9IFwiSFRUUEVycm9yXCJcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3VtZU1pc3NpbmdDb2RlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9IFwiXCIpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpXHJcbiAgICB0aGlzLm5hbWUgPSBcIlJlc3VtZU1pc3NpbmdDb2RlRXJyb3JcIlxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RWxlbWVudFJ1bGVzKFxyXG4gIGVsZW1lbnRzLFxyXG4gIHNvdXJjZSxcclxuICB0b2tlbixcclxuICBmcm9tQWdlbnRGbGFnLFxyXG4gIHJlc3VtZUlkLFxyXG4gIHRhaWxvcklkLFxyXG4gIHVybE92ZXJyaWRlXHJcbikge1xyXG4gIHZhciB0cmFja2luZ1Rva2VuID0gZmFsY29uQW5zd2VyVHJhY2tpbmcuYmVnaW5GYWxjb25SZXNwb25zZUFuc3dlclJlcXVlc3QoKVxyXG4gIHZhciByZXNwb25zZSA9IGF3YWl0IG1lc3NhZ2luZy5zZW5kVG9CYWNrZ3JvdW5kKHtcclxuICAgIG5hbWU6IFwiZ2V0R3B0UmVzdWx0c1wiLFxyXG4gICAgYm9keToge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBlbGVtZW50czogZWxlbWVudHMubWFwKHByZXBhcmVFbGVtZW50Rm9yR3B0KSxcclxuICAgICAgICB0b2tlbixcclxuICAgICAgICB1cmw6IHVybE92ZXJyaWRlID8/IGNvcmVVdGlscy5yZW1vdmVFbmRTdHJpbmdzKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSxcclxuICAgICAgICBwYXJzZXI6IFwiaW50ZXJuYWxcIixcclxuICAgICAgICBzb3VyY2UsXHJcbiAgICAgICAgZnJvbUFnZW50OiAhIShcclxuICAgICAgICAgIGZyb21BZ2VudEZsYWcgfHxcclxuICAgICAgICAgIGNvbnRlbnRzLmFnZW50VGFpbG9ySWQgfHxcclxuICAgICAgICAgIGNvbnRlbnRzLmFnZW50UmVzdW1lSWRcclxuICAgICAgICApLFxyXG4gICAgICAgIC4uLihyZXN1bWVJZCAmJiB7IHJlc3VtZUlkIH0pLFxyXG4gICAgICAgIC4uLih0YWlsb3JJZCAmJiB7IHRhaWxvcklkIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAocmVzcG9uc2U/LmRhdGE/LmRhdGEgPT09IGh0dHAuQ1VTVE9NX0VSUk9SX0NPREVTLlJFU1VNRV9NSVNTSU5HX0tFWSkge1xyXG4gICAgdGhyb3cgbmV3IFJlc3VtZU1pc3NpbmdDb2RlRXJyb3IoaHR0cC5DVVNUT01fRVJST1JfQ09ERVMuUkVTVU1FX01JU1NJTkdfS0VZKVxyXG4gIH1cclxuICBpZiAocmVzcG9uc2U/LmRhdGE/LkhUVFBfU1RBVFVTKSB7XHJcbiAgICB0aHJvdyBuZXcgSFRUUEVycm9yKHJlc3BvbnNlPy5kYXRhPy5IVFRQX1NUQVRVUylcclxuICB9XHJcbiAgcmV0dXJuIGluaXRVc2VyRGF0YShyZXNwb25zZSwgdHJhY2tpbmdUb2tlbilcclxufVxyXG5cclxuZnVuY3Rpb24gZmlyc3RBcnJheUZpZWxkKG9iaiwga2V5cykge1xyXG4gIGZvciAodmFyIGtleSBvZiBrZXlzKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBvYmo/LltrZXldXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZVxyXG4gIH1cclxuICByZXR1cm4gW11cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFVzZXJEYXRhKGdwdFJlc3BvbnNlLCB0cmFja2luZ1Rva2VuKSB7XHJcbiAgdmFyIHByb2ZpbGVBID0gZ3B0UmVzcG9uc2UuZGF0YT8ucHJvZmlsZV9kYXRhXHJcbiAgdmFyIHByb2ZpbGVCID0gZ3B0UmVzcG9uc2UuZGF0YT8ucHJvZmlsZURhdGFcclxuICB2YXIgaXNQbGFpbk9iamVjdCA9ICh2KSA9PiB2ICYmIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHYpXHJcblxyXG4gIHZhciBwcm9maWxlRGF0YSA9XHJcbiAgICBpc1BsYWluT2JqZWN0KHByb2ZpbGVBKSB8fCBpc1BsYWluT2JqZWN0KHByb2ZpbGVCKVxyXG4gICAgICA/IHtcclxuICAgICAgICAgIC4uLihpc1BsYWluT2JqZWN0KHByb2ZpbGVBKSA/IHByb2ZpbGVBIDoge30pLFxyXG4gICAgICAgICAgLi4uKGlzUGxhaW5PYmplY3QocHJvZmlsZUIpID8gcHJvZmlsZUIgOiB7fSlcclxuICAgICAgICB9XHJcbiAgICAgIDogcHJvZmlsZUEgPz8gcHJvZmlsZUIgPz8ge31cclxuXHJcbiAgdmFyIHVzZXJEYXRhID0ge1xyXG4gICAgcHJvZmlsZURhdGEsXHJcbiAgICBwcm9maWxlX2RhdGE6IHByb2ZpbGVEYXRhLFxyXG4gICAgc2tpbGxzOiBza2lsbExpc3QuZXh0cmFjdFNraWxsTGlzdChwcm9maWxlRGF0YSksXHJcbiAgICBlZHVjYXRpb246IGZpcnN0QXJyYXlGaWVsZChwcm9maWxlRGF0YSwgW1xyXG4gICAgICBcIkVkdWNhdGlvblwiLFxyXG4gICAgICBcImVkdWNhdGlvblwiLFxyXG4gICAgICBcIkVEVUNBVElPTlwiXHJcbiAgICBdKSxcclxuICAgIHdvcmtFeHBlcmllbmNlOiBmaXJzdEFycmF5RmllbGQocHJvZmlsZURhdGEsIFtcclxuICAgICAgXCJFbXBsb3ltZW50XCIsXHJcbiAgICAgIFwiZW1wbG95bWVudFwiLFxyXG4gICAgICBcIkVNUExPWU1FTlRcIixcclxuICAgICAgXCJ3b3JrRXhwZXJpZW5jZVwiLFxyXG4gICAgICBcIndvcmtfZXhwZXJpZW5jZVwiLFxyXG4gICAgICBcIldvcmsgRXhwZXJpZW5jZVwiLFxyXG4gICAgICBcImV4cGVyaWVuY2VcIixcclxuICAgICAgXCJFeHBlcmllbmNlXCJcclxuICAgIF0pLFxyXG4gICAgc3RhdGU6IHByb2ZpbGVEYXRhPy5zdGF0ZSxcclxuICAgIGNvdW50cnk6IHByb2ZpbGVEYXRhPy5jb3VudHJ5ID8/IG51bGwsXHJcbiAgICByZWd1bGFyOiBudWxsXHJcbiAgfVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShncHRSZXNwb25zZS5kYXRhPy5maWxsX2RhdGFfbGlzdCkpIHtcclxuICAgIHVzZXJEYXRhLmZpbGxEYXRhTGlzdCA9IGdwdFJlc3BvbnNlLmRhdGEuZmlsbF9kYXRhX2xpc3RcclxuICAgIGdwdFJlc3BvbnNlLmRhdGEuZmlsbF9kYXRhX2xpc3QuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIGlmIChyb3c/Lm5hbWUpIHtcclxuICAgICAgICB1c2VyRGF0YS5yZWd1bGFyID0ge1xyXG4gICAgICAgICAgLi4udXNlckRhdGEucmVndWxhcixcclxuICAgICAgICAgIFtyb3cubmFtZV06IHJvdy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxjb25BbnN3ZXJUcmFja2luZy5tYXJrRmFsY29uUmVzcG9uc2VBbnN3ZXIodXNlckRhdGEsIHRyYWNraW5nVG9rZW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRWYWx1ZUluUmVjb3JkKGxhYmVsLCByZWNvcmQpIHtcclxuICB2YXIgZm91bmRcclxuICBmb3IgKHZhciBrZXkgaW4gcmVjb3JkKSB7XHJcbiAgICBpZiAoaXNNYXRjaGVkKGxhYmVsLCBrZXkpKSB7XHJcbiAgICAgIGZvdW5kID0gcmVjb3JkW2tleV1cclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGZvdW5kID09IG51bGwgfHwgZm91bmQgPT09IFwiXCIpIHtcclxuICAgIHRocm93IG5ldyBmaWxsZXIuVmFsdWVFcnJvcihgTm8gbWF0Y2hpbmcgZmllbGQgZm9yIGxhYmVsOiAke2xhYmVsfWApXHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KGZvdW5kKSkge1xyXG4gICAgaWYgKGZvdW5kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgZmlsbGVyLlZhbHVlRXJyb3IoYE5vIG1hdGNoaW5nIGZpZWxkIGZvciBsYWJlbDogJHtsYWJlbH1gKVxyXG4gICAgfVxyXG4gICAgdmFyIGFsbEVtcHR5ID0gZm91bmQuZXZlcnkoXHJcbiAgICAgICh2KSA9PiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIiAmJiB2LnRyaW0oKSA9PT0gXCJcIlxyXG4gICAgKVxyXG4gICAgaWYgKGFsbEVtcHR5KSB7XHJcbiAgICAgIHRocm93IG5ldyBmaWxsZXIuVmFsdWVFcnJvcihcclxuICAgICAgICBgTm8gbWF0Y2hpbmcgZmllbGQgZm9yIGxhYmVsOiAke2xhYmVsfSAoYXJyYXkgY29udGFpbnMgb25seSBlbXB0eSB2YWx1ZXMpYFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICB2YXIgY2xlYW5lZCA9IGZvdW5kLm1hcCgodikgPT4gU3RyaW5nKHYpLnRyaW0oKSkuZmlsdGVyKCh2KSA9PiB2ICE9PSBcIlwiKVxyXG4gICAgaWYgKGNsZWFuZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBmaWxsZXIuVmFsdWVFcnJvcihcclxuICAgICAgICBgTm8gdmFsaWQgc3RyaW5nIHZhbHVlcyBmb3VuZCBmb3IgbGFiZWw6ICR7bGFiZWx9YFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xlYW5lZFxyXG4gIH1cclxuICB2YXIgYXNTdHJpbmcgPSBTdHJpbmcoZm91bmQpLnRyaW0oKVxyXG4gIGlmIChhc1N0cmluZyA9PT0gXCJcIikge1xyXG4gICAgdGhyb3cgbmV3IGZpbGxlci5WYWx1ZUVycm9yKFxyXG4gICAgICBgRmllbGQgZm9yIGxhYmVsICcke2xhYmVsfScgcmVzdWx0ZWQgaW4gYW4gZW1wdHkgc3RyaW5nYFxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4gYXNTdHJpbmdcclxufVxyXG5cclxudmFyIEVEVUNBVElPTl9USVRMRV9LRVlTID0gW1xyXG4gIFwiU2Nob29sXCIsXHJcbiAgXCJTY2hvb2wgTmFtZVwiLFxyXG4gIFwiU2Nob29sIG9yIFVuaXZlcnNpdHlcIixcclxuICBcIlVuaXZlcnNpdHlcIixcclxuICBcIkluc3RpdHV0aW9uXCIsXHJcbiAgXCJJbnN0aXR1dGlvbiBOYW1lXCIsXHJcbiAgXCJPcmdhbml6YXRpb25cIixcclxuICBcIm9yZ2FuaXphdGlvblwiLFxyXG4gIFwic2Nob29sXCIsXHJcbiAgXCJyYXdTY2hvb2xcIlxyXG5dXHJcbnZhciBFRFVDQVRJT05fU1VCVElUTEVfS0VZUyA9IFtcclxuICBcIkRlZ3JlZVwiLFxyXG4gIFwiRmllbGQgb2YgU3R1ZHlcIixcclxuICBcIkRpc2NpcGxpbmVcIixcclxuICBcIk1ham9yXCIsXHJcbiAgXCJTdHVkeVwiLFxyXG4gIFwiZGVncmVlXCIsXHJcbiAgXCJtYWpvclwiXHJcbl1cclxudmFyIEVNUExPWU1FTlRfVElUTEVfS0VZUyA9IFtcclxuICBcIkNvbXBhbnlcIixcclxuICBcIkNvbXBhbnkgTmFtZVwiLFxyXG4gIFwiRW1wbG95ZXIgTmFtZVwiLFxyXG4gIFwiRW1wbG95ZXJcIixcclxuICBcIk9yZ2FuaXphdGlvblwiLFxyXG4gIFwib3JnYW5pemF0aW9uXCIsXHJcbiAgXCJjb21wYW55XCIsXHJcbiAgXCJlbXBsb3llck5hbWVcIlxyXG5dXHJcbnZhciBFTVBMT1lNRU5UX1NVQlRJVExFX0tFWVMgPSBbXHJcbiAgXCJKb2IgVGl0bGVcIixcclxuICBcIlRpdGxlXCIsXHJcbiAgXCJQb3NpdGlvblwiLFxyXG4gIFwiUm9sZVwiLFxyXG4gIFwiam9iVGl0bGVcIixcclxuICBcInRpdGxlXCJcclxuXVxyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5Rm9yRGlzcGxheSh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm5cclxuICB2YXIgdGV4dFxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgdGV4dCA9IHZhbHVlXHJcbiAgICAgIC5tYXAoKHYpID0+IFN0cmluZyh2KS50cmltKCkpXHJcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgLmpvaW4oXCIsIFwiKVxyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHRleHQgPSBTdHJpbmcodmFsdWUpXHJcbiAgfVxyXG4gIHZhciBjb21wYWN0ID0gdGV4dC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKClcclxuICBpZiAoIWNvbXBhY3QpIHJldHVyblxyXG4gIHJldHVybiBjb21wYWN0Lmxlbmd0aCA+IDgwXHJcbiAgICA/IGAke2NvbXBhY3Quc2xpY2UoMCwgNzcpLnRyaW1FbmQoKX0uLi5gXHJcbiAgICA6IGNvbXBhY3RcclxufVxyXG5cclxuZnVuY3Rpb24gcGlja0ZpcnN0TWF0Y2hlZERpc3BsYXkocmVjb3JkLCBrZXlzKSB7XHJcbiAgZm9yICh2YXIgd2FudCBvZiBrZXlzKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgb2YgT2JqZWN0LmtleXMocmVjb3JkKSkge1xyXG4gICAgICBpZiAoaXNNYXRjaGVkKHdhbnQsIGtleSkpIHtcclxuICAgICAgICB2YXIgZGlzcGxheSA9IHN0cmluZ2lmeUZvckRpc3BsYXkocmVjb3JkW2tleV0pXHJcbiAgICAgICAgaWYgKGRpc3BsYXkpIHJldHVybiBkaXNwbGF5XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyeUZpbmREaXNwbGF5VmFsdWUobGFiZWwsIHJlY29yZCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gc3RyaW5naWZ5Rm9yRGlzcGxheShmaW5kVmFsdWVJblJlY29yZChsYWJlbCwgcmVjb3JkKSlcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VjdGlvblJvd1RpdGxlKHNlY3Rpb25UeXBlLCByZWNvcmQpIHtcclxuICByZXR1cm4gcGlja0ZpcnN0TWF0Y2hlZERpc3BsYXkoXHJcbiAgICByZWNvcmQsXHJcbiAgICBzZWN0aW9uVHlwZSA9PT0gXCJlZHVjYXRpb25cIiA/IEVEVUNBVElPTl9USVRMRV9LRVlTIDogRU1QTE9ZTUVOVF9USVRMRV9LRVlTXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWN0aW9uUm93U3VidGl0bGUoc2VjdGlvblR5cGUsIHJlY29yZCkge1xyXG4gIHJldHVybiBwaWNrRmlyc3RNYXRjaGVkRGlzcGxheShcclxuICAgIHJlY29yZCxcclxuICAgIHNlY3Rpb25UeXBlID09PSBcImVkdWNhdGlvblwiXHJcbiAgICAgID8gRURVQ0FUSU9OX1NVQlRJVExFX0tFWVNcclxuICAgICAgOiBFTVBMT1lNRU5UX1NVQlRJVExFX0tFWVNcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFnZ3JlZ2F0ZUZpZWxkU3RhdHVzZXMoZmllbGRzKSB7XHJcbiAgaWYgKGZpZWxkcy5zb21lKChmKSA9PiBmLnN0YXR1cyA9PT0gXCJza2lwcGVkXCIpKSByZXR1cm4gXCJza2lwcGVkXCJcclxuICBpZiAoZmllbGRzLnNvbWUoKGYpID0+IGYuc3RhdHVzID09PSBcIm1pc3NlZFwiKSkgcmV0dXJuIFwibWlzc2VkXCJcclxuICBpZiAoZmllbGRzLmxlbmd0aCA+IDAgJiYgZmllbGRzLmV2ZXJ5KChmKSA9PiBmLnN0YXR1cyA9PT0gXCJmaWxsZWRcIikpIHtcclxuICAgIHJldHVybiBcImZpbGxlZFwiXHJcbiAgfVxyXG4gIHJldHVybiBcInBlbmRpbmdcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uUmVzdWx0UmVwb3J0ZXIoc2VjdGlvblR5cGUsIGNhbGxiYWNrcykge1xyXG4gIHZhciByb3dzID0gbmV3IE1hcCgpXHJcbiAgdmFyIHNlY3Rpb25MYWJlbCA9XHJcbiAgICBzZWN0aW9uVHlwZSA9PT0gXCJlZHVjYXRpb25cIiA/IFwiRWR1Y2F0aW9uXCIgOiBcIkVtcGxveW1lbnRcIlxyXG5cclxuICB2YXIgYXBwbHlUaXRsZVN1YnRpdGxlID0gKHJvdywgcmVjb3JkKSA9PiB7XHJcbiAgICB2YXIgdGl0bGUgPSBzZWN0aW9uUm93VGl0bGUoc2VjdGlvblR5cGUsIHJlY29yZClcclxuICAgIHZhciBzdWJ0aXRsZSA9IHNlY3Rpb25Sb3dTdWJ0aXRsZShzZWN0aW9uVHlwZSwgcmVjb3JkKVxyXG4gICAgaWYgKHRpdGxlKSByb3cudGl0bGUgPSB0aXRsZVxyXG4gICAgaWYgKHN1YnRpdGxlKSByb3cuc3VidGl0bGUgPSBzdWJ0aXRsZVxyXG4gIH1cclxuXHJcbiAgdmFyIGVuc3VyZVJvdyA9IChpbmRleCwgcmVjb3JkKSA9PiB7XHJcbiAgICB2YXIgZXhpc3RpbmcgPSByb3dzLmdldChpbmRleClcclxuICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICBhcHBseVRpdGxlU3VidGl0bGUoZXhpc3RpbmcsIHJlY29yZClcclxuICAgICAgcmV0dXJuIGV4aXN0aW5nXHJcbiAgICB9XHJcbiAgICB2YXIgcm93ID0ge1xyXG4gICAgICBpbmRleCxcclxuICAgICAgLi4uKHNlY3Rpb25Sb3dUaXRsZShzZWN0aW9uVHlwZSwgcmVjb3JkKVxyXG4gICAgICAgID8geyB0aXRsZTogc2VjdGlvblJvd1RpdGxlKHNlY3Rpb25UeXBlLCByZWNvcmQpIH1cclxuICAgICAgICA6IHt9KSxcclxuICAgICAgLi4uKHNlY3Rpb25Sb3dTdWJ0aXRsZShzZWN0aW9uVHlwZSwgcmVjb3JkKVxyXG4gICAgICAgID8geyBzdWJ0aXRsZTogc2VjdGlvblJvd1N1YnRpdGxlKHNlY3Rpb25UeXBlLCByZWNvcmQpIH1cclxuICAgICAgICA6IHt9KSxcclxuICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcclxuICAgICAgZmllbGRzOiBbXVxyXG4gICAgfVxyXG4gICAgcm93cy5zZXQoaW5kZXgsIHJvdylcclxuICAgIHJldHVybiByb3dcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXRMYWJlbDogKGxhYmVsKSA9PiB7XHJcbiAgICAgIHNlY3Rpb25MYWJlbCA9IGxhYmVsXHJcbiAgICB9LFxyXG4gICAgZW5zdXJlUm93LFxyXG4gICAgdXBkYXRlUm93OiBhcHBseVRpdGxlU3VidGl0bGUsXHJcbiAgICB1cGRhdGVGaWVsZDogKHJvdywgbGFiZWwsIHZhbHVlLCBzdGF0dXMpID0+IHtcclxuICAgICAgdmFyIG5leHRGaWVsZCA9IHtcclxuICAgICAgICBsYWJlbDogZmllbGRMYWJlbC5mb3JtYXRGaWVsZExhYmVsRm9yRGlzcGxheShsYWJlbCksXHJcbiAgICAgICAgLi4uKHZhbHVlID8geyB2YWx1ZSB9IDoge30pLFxyXG4gICAgICAgIHN0YXR1c1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBpZHggPSByb3cuZmllbGRzLmZpbmRJbmRleCgoZikgPT4gaXNNYXRjaGVkKGYubGFiZWwsIGxhYmVsKSlcclxuICAgICAgcm93LmZpZWxkcyA9XHJcbiAgICAgICAgaWR4ID09PSAtMVxyXG4gICAgICAgICAgPyBbLi4ucm93LmZpZWxkcywgbmV4dEZpZWxkXVxyXG4gICAgICAgICAgOiByb3cuZmllbGRzLm1hcCgoZiwgaSkgPT4gKGkgPT09IGlkeCA/IG5leHRGaWVsZCA6IGYpKVxyXG4gICAgICByb3cuc3RhdHVzID0gYWdncmVnYXRlRmllbGRTdGF0dXNlcyhyb3cuZmllbGRzKVxyXG4gICAgfSxcclxuICAgIGVtaXQ6ICgpID0+IHtcclxuICAgICAgY2FsbGJhY2tzPy5vblNlY3Rpb25SZXN1bHRDaGFuZ2VkPy4oe1xyXG4gICAgICAgIHR5cGU6IHNlY3Rpb25UeXBlLFxyXG4gICAgICAgIGxhYmVsOiBmaWVsZExhYmVsLmZvcm1hdEZpZWxkTGFiZWxGb3JEaXNwbGF5KHNlY3Rpb25MYWJlbCksXHJcbiAgICAgICAgcm93czogWy4uLnJvd3MudmFsdWVzKCldLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9uRmllbGRUeXBlKG9wKSB7XHJcbiAgdmFyIHQgPSBvcD8uZmllbGRfdHlwZVxyXG4gIHJldHVybiB0eXBlb2YgdCA9PT0gXCJzdHJpbmdcIiA/IHQudHJpbSgpLnRvTG93ZXJDYXNlKCkgOiBcIlwiXHJcbn1cclxuXHJcbi8qKiBPcGVyYXRpb25zIGluIGBuZXh0YCB0aGF0IGRpZmZlciBmcm9tIGBwcmV2YCAoYnkgZmllbGRfdHlwZSBvciBpZGVudGl0eSkuICovXHJcbmZ1bmN0aW9uIGRpZmZPcGVyYXRpb25zKHByZXYsIG5leHQpIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkobmV4dCkpIHJldHVybiBbXVxyXG4gIHZhciBwcmV2TGlzdCA9IEFycmF5LmlzQXJyYXkocHJldikgPyBwcmV2IDogW11cclxuICByZXR1cm4gbmV4dC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICB2YXIgdHlwZSA9IGdldE9wZXJhdGlvbkZpZWxkVHlwZShpdGVtKVxyXG4gICAgdmFyIGNvdW50ZXJwYXJ0ID0gdHlwZVxyXG4gICAgICA/IHByZXZMaXN0LmZpbmQoKHApID0+IGdldE9wZXJhdGlvbkZpZWxkVHlwZShwKSA9PT0gdHlwZSlcclxuICAgICAgOiBwcmV2TGlzdFtpbmRleF1cclxuICAgIHJldHVybiAhbG9kYXNoRXMuaXNFcXVhbChpdGVtLCBjb3VudGVycGFydClcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZU9wZXJhdGlvbnMoYmFzZSwgaW5jb21pbmcpIHtcclxuICB2YXIgcmVzdWx0ID0gQXJyYXkuaXNBcnJheShiYXNlKSA/IFsuLi5iYXNlXSA6IFtdXHJcbiAgZm9yICh2YXIgaXRlbSBvZiBpbmNvbWluZykge1xyXG4gICAgdmFyIHR5cGUgPSBnZXRPcGVyYXRpb25GaWVsZFR5cGUoaXRlbSlcclxuICAgIHZhciBpZHggPSB0eXBlXHJcbiAgICAgID8gcmVzdWx0LmZpbmRJbmRleCgocikgPT4gZ2V0T3BlcmF0aW9uRmllbGRUeXBlKHIpID09PSB0eXBlKVxyXG4gICAgICA6IC0xXHJcbiAgICBpZiAoaWR4ID49IDApIHJlc3VsdC5zcGxpY2UoaWR4LCAxLCBpdGVtKVxyXG4gICAgZWxzZSBpZiAoIXJlc3VsdC5zb21lKChyKSA9PiBsb2Rhc2hFcy5pc0VxdWFsKHIsIGl0ZW0pKSkgcmVzdWx0LnB1c2goaXRlbSlcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKiogRGVlcC1tZXJnZSB0cmFuc2Zvcm1lZCByZWNvcmQgZmllbGRzIG9udG8gY3VycmVudCwgc3BlY2lhbC1jYXNpbmcgYG9wZXJhdGlvbmAuICovXHJcbmZ1bmN0aW9uIG1lcmdlVHJhbnNmb3JtZWRSZWNvcmQoYmFzZVJlY29yZCwgY3VycmVudFJlY29yZCwgdHJhbnNmb3JtZWQpIHtcclxuICB2YXIgbWVyZ2VkID0geyAuLi5jdXJyZW50UmVjb3JkIH1cclxuICBmb3IgKHZhciBrZXkgb2YgT2JqZWN0LmtleXModHJhbnNmb3JtZWQpKSB7XHJcbiAgICBpZiAoa2V5ID09PSBcIm9wZXJhdGlvblwiKSB7XHJcbiAgICAgIHZhciBjaGFuZ2VkID0gZGlmZk9wZXJhdGlvbnMoYmFzZVJlY29yZC5vcGVyYXRpb24sIHRyYW5zZm9ybWVkLm9wZXJhdGlvbilcclxuICAgICAgaWYgKGNoYW5nZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIG1lcmdlZC5vcGVyYXRpb24gPSBtZXJnZU9wZXJhdGlvbnMoY3VycmVudFJlY29yZC5vcGVyYXRpb24sIGNoYW5nZWQpXHJcbiAgICAgIH1cclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGlmICghbG9kYXNoRXMuaXNFcXVhbCh0cmFuc2Zvcm1lZFtrZXldLCBiYXNlUmVjb3JkW2tleV0pKSB7XHJcbiAgICAgIG1lcmdlZFtrZXldID0gdHJhbnNmb3JtZWRba2V5XVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWVyZ2VkXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFZHVjYXRpb24gZmlsbCBwYXRoIHRoYXQgdHJhbnNmb3JtcyBjaGlsZCBydWxlcyBmaXJzdCAocmVhZHktZmlyc3QpLCB0aGVuIGZpbGxzLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmlsbEVkdWNhdGlvblJlYWR5VHJhbnNmb3JtZWRGaXJzdCh7XHJcbiAgcnVsZXMsXHJcbiAgcmVjb3JkcyxcclxuICBvcGVyYXRpb25Db25maWcsXHJcbiAgdHJhbnNmb3JtUmVjb3JkQnlSdWxlLFxyXG4gIHNlY3Rpb25SZXBvcnRlclxyXG59KSB7XHJcbiAgdmFyIHBlbmRpbmcgPSBbXVxyXG4gIHZhciB0b3VjaGVkQ3VycmVudEZpZWxkID0gZmFsc2VcclxuXHJcbiAgZm9yICh2YXIgW3JlY29yZEluZGV4LCBydWxlXSBvZiBydWxlcy5lbnRyaWVzKCkpIHtcclxuICAgIGlmIChydWxlLnR5cGUgIT09IGVudW1zLkZJRUxEX1RZUEUuRURVQ0FUSU9OKSBjb250aW51ZVxyXG4gICAgdmFyIHJlY29yZCA9IHJlY29yZHNbcmVjb3JkSW5kZXhdXHJcbiAgICBpZiAoIXJlY29yZCkgY29udGludWVcclxuXHJcbiAgICBzZWN0aW9uUmVwb3J0ZXI/LnNldExhYmVsKHJ1bGUubGFiZWwpXHJcbiAgICBzZWN0aW9uUmVwb3J0ZXI/LmVuc3VyZVJvdyhyZWNvcmRJbmRleCwgcmVjb3JkKVxyXG4gICAgaWYgKCF0b3VjaGVkQ3VycmVudEZpZWxkKSB7XHJcbiAgICAgIGNhbmNlbGxhdGlvbi51cGRhdGVDdXJyZW50RmllbGQocnVsZS5sYWJlbClcclxuICAgICAgdG91Y2hlZEN1cnJlbnRGaWVsZCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2hpbGRyZW4gPSBydWxlLmNoaWxkcmVuIHx8IFtdXHJcbiAgICBmb3IgKHZhciBjaGlsZFJ1bGUgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgdmFyIGJhc2VSZWNvcmQgPSByZWNvcmRzW3JlY29yZEluZGV4XSA/PyByZWNvcmRcclxuICAgICAgcGVuZGluZy5wdXNoKHtcclxuICAgICAgICByZWNvcmRJbmRleCxcclxuICAgICAgICBiYXNlUmVjb3JkLFxyXG4gICAgICAgIGNoaWxkUnVsZSxcclxuICAgICAgICByZWFkeTogUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICAgIC50aGVuKCgpID0+XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlY29yZEJ5UnVsZShjaGlsZFJ1bGUsIGJhc2VSZWNvcmQsIHJlY29yZEluZGV4KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIChyZWMpID0+ICh7IHN0YXR1czogXCJmdWxmaWxsZWRcIiwgcmVjb3JkOiByZWMgfSksXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4gKHsgc3RhdHVzOiBcInJlamVjdGVkXCIsIGVycm9yIH0pXHJcbiAgICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZWN0aW9uUmVwb3J0ZXI/LmVtaXQoKVxyXG4gIH1cclxuXHJcbiAgd2hpbGUgKHBlbmRpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgdmFyIHJhY2VkID0gYXdhaXQgUHJvbWlzZS5yYWNlKFxyXG4gICAgICBwZW5kaW5nLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgaXRlbS5yZWFkeS50aGVuKChyZXN1bHQpID0+ICh7IHBlbmRpbmdJbmRleDogaW5kZXgsIHJlc3VsdCB9KSlcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICAgdmFyIGZpbmlzaGVkID0gcGVuZGluZy5zcGxpY2UocmFjZWQucGVuZGluZ0luZGV4LCAxKVswXVxyXG4gICAgaWYgKHJhY2VkLnJlc3VsdC5zdGF0dXMgPT09IFwicmVqZWN0ZWRcIikgdGhyb3cgcmFjZWQucmVzdWx0LmVycm9yXHJcblxyXG4gICAgdmFyIGN1cnJlbnQgPVxyXG4gICAgICByZWNvcmRzW2ZpbmlzaGVkLnJlY29yZEluZGV4XSA/PyBmaW5pc2hlZC5iYXNlUmVjb3JkXHJcbiAgICB2YXIgbWVyZ2VkID0gbWVyZ2VUcmFuc2Zvcm1lZFJlY29yZChcclxuICAgICAgZmluaXNoZWQuYmFzZVJlY29yZCxcclxuICAgICAgY3VycmVudCxcclxuICAgICAgcmFjZWQucmVzdWx0LnJlY29yZFxyXG4gICAgKVxyXG4gICAgcmVjb3Jkc1tmaW5pc2hlZC5yZWNvcmRJbmRleF0gPSBtZXJnZWRcclxuXHJcbiAgICB2YXIgcm93ID0gc2VjdGlvblJlcG9ydGVyPy5lbnN1cmVSb3coZmluaXNoZWQucmVjb3JkSW5kZXgsIG1lcmdlZClcclxuICAgIHZhciBkaXNwbGF5VmFsdWUgPSB0cnlGaW5kRGlzcGxheVZhbHVlKGZpbmlzaGVkLmNoaWxkUnVsZS5sYWJlbCwgbWVyZ2VkKVxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIGZpbGxPayA9IGF3YWl0IG9wZXJhdGlvbkNvbmZpZ1tmaW5pc2hlZC5jaGlsZFJ1bGUudHlwZV0/LihcclxuICAgICAgICBmaW5pc2hlZC5jaGlsZFJ1bGUsXHJcbiAgICAgICAgbWVyZ2VkLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICAgIClcclxuICAgICAgaWYgKHJvdykge1xyXG4gICAgICAgIHNlY3Rpb25SZXBvcnRlcj8udXBkYXRlRmllbGQoXHJcbiAgICAgICAgICByb3csXHJcbiAgICAgICAgICBmaW5pc2hlZC5jaGlsZFJ1bGUubGFiZWwsXHJcbiAgICAgICAgICBkaXNwbGF5VmFsdWUsXHJcbiAgICAgICAgICBmaWxsT2sgIT09IGZhbHNlICYmIGRpc3BsYXlWYWx1ZSA/IFwiZmlsbGVkXCIgOiBcIm1pc3NlZFwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHNlY3Rpb25SZXBvcnRlcj8uZW1pdCgpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAocm93ICYmIGVyciBpbnN0YW5jZW9mIGNhbmNlbGxhdGlvbi5Ta2lwcGVkRXJyb3IpIHtcclxuICAgICAgICBzZWN0aW9uUmVwb3J0ZXI/LnVwZGF0ZUZpZWxkKFxyXG4gICAgICAgICAgcm93LFxyXG4gICAgICAgICAgZmluaXNoZWQuY2hpbGRSdWxlLmxhYmVsLFxyXG4gICAgICAgICAgZGlzcGxheVZhbHVlLFxyXG4gICAgICAgICAgXCJza2lwcGVkXCJcclxuICAgICAgICApXHJcbiAgICAgICAgc2VjdGlvblJlcG9ydGVyPy5lbWl0KClcclxuICAgICAgfVxyXG4gICAgICB0aHJvdyBlcnJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlY3Rpb25Qcm9ncmVzc0NhbGxiYWNrcyhzZWN0aW9uS2V5LCBwcm9ncmVzc1RyYWNrZXIpIHtcclxuICByZXR1cm4ge1xyXG4gICAgb25Db21wbGV0ZWQ6ICgpID0+IHByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhzZWN0aW9uS2V5KSxcclxuICAgIG9uU2tpcHBlZDogKCkgPT4gcHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKHNlY3Rpb25LZXkpLFxyXG4gICAgb25TZWN0aW9uUmVzdWx0Q2hhbmdlZDogcHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHRcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlZ3VsYXJPcGVyYXRpb25zKHJ1bGVzLCByZWNvcmQsIG9wZXJhdGlvbkNvbmZpZywgdXBkYXRlRmllbGQgPSB0cnVlKSB7XHJcbiAgdmFyIG9wcyA9IFtdXHJcbiAgZm9yICh2YXIgcnVsZSBvZiBydWxlcykge1xyXG4gICAgdmFyIHJ1biA9IHVwZGF0ZUZpZWxkXHJcbiAgICAgID8gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgYXdhaXQgb3BlcmF0aW9uQ29uZmlnW3J1bGUudHlwZV0/LihydWxlLCByZWNvcmQpXHJcbiAgICAgICAgfVxyXG4gICAgICA6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGF3YWl0IG9wZXJhdGlvbkNvbmZpZ1tydWxlLnR5cGVdPy4ocnVsZSwgcmVjb3JkLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICBpZiAocnVuKSBvcHMucHVzaChydW4pXHJcbiAgfVxyXG4gIHJldHVybiBvcHNcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWR1Y2F0aW9uT3BlcmF0aW9ucyhcclxuICBydWxlcyxcclxuICByZWNvcmRzLFxyXG4gIG9wZXJhdGlvbkNvbmZpZyxcclxuICB0cmFuc2Zvcm1SZWNvcmRCeVJ1bGUsXHJcbiAgcHJvZ3Jlc3NDYWxsYmFja3MsXHJcbiAgb3B0aW9uc1xyXG4pIHtcclxuICByZXR1cm4gW1xyXG4gICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICB2YXIgcmVwb3J0ZXIgPSBjcmVhdGVTZWN0aW9uUmVzdWx0UmVwb3J0ZXIoXHJcbiAgICAgICAgXCJlZHVjYXRpb25cIixcclxuICAgICAgICBwcm9ncmVzc0NhbGxiYWNrc1xyXG4gICAgICApXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgb3B0aW9ucz8uZmlsbFJlYWR5VHJhbnNmb3JtZWRGaWVsZHNGaXJzdCAmJlxyXG4gICAgICAgICAgb3B0aW9ucz8ud3JhcFRyYW5zZm9ybWVkRmllbGRXaXRoU2tpcFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgIFwiRWR1Y2F0aW9uIGZpbGwgY2Fubm90IHdyYXAgcmVhZHktZmlyc3QgdHJhbnNmb3JtcyB3aXRoIFNraXBcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRyYW5zZm9ybVJlY29yZEJ5UnVsZSAmJiBvcHRpb25zPy5maWxsUmVhZHlUcmFuc2Zvcm1lZEZpZWxkc0ZpcnN0KSB7XHJcbiAgICAgICAgICBhd2FpdCBmaWxsRWR1Y2F0aW9uUmVhZHlUcmFuc2Zvcm1lZEZpcnN0KHtcclxuICAgICAgICAgICAgcnVsZXMsXHJcbiAgICAgICAgICAgIHJlY29yZHMsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkNvbmZpZyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtUmVjb3JkQnlSdWxlLFxyXG4gICAgICAgICAgICBzZWN0aW9uUmVwb3J0ZXI6IHJlcG9ydGVyXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcHJvZ3Jlc3NDYWxsYmFja3M/Lm9uQ29tcGxldGVkPy4oKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBbcmVjb3JkSW5kZXgsIHJ1bGVdIG9mIHJ1bGVzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgaWYgKHJ1bGUudHlwZSAhPT0gZW51bXMuRklFTERfVFlQRS5FRFVDQVRJT04pIGNvbnRpbnVlXHJcbiAgICAgICAgICB2YXIgcmVjb3JkID0gcmVjb3Jkc1tyZWNvcmRJbmRleF1cclxuICAgICAgICAgIGlmICghcmVjb3JkKSBjb250aW51ZVxyXG5cclxuICAgICAgICAgIHJlcG9ydGVyLnNldExhYmVsKHJ1bGUubGFiZWwpXHJcbiAgICAgICAgICB2YXIgcm93ID0gcmVwb3J0ZXIuZW5zdXJlUm93KHJlY29yZEluZGV4LCByZWNvcmQpXHJcbiAgICAgICAgICBjYW5jZWxsYXRpb24udXBkYXRlQ3VycmVudEZpZWxkKHJ1bGUubGFiZWwpXHJcbiAgICAgICAgICByZXBvcnRlci5lbWl0KClcclxuXHJcbiAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBydWxlLmNoaWxkcmVuIHx8IFtdXHJcbiAgICAgICAgICBmb3IgKHZhciBjaGlsZFJ1bGUgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJ1bkNoaWxkID0gYXN5bmMgKHdpdGhDaGVja3BvaW50cyA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHdpdGhDaGVja3BvaW50cykgY2FuY2VsbGF0aW9uLmNoZWNrcG9pbnQoKVxyXG4gICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1SZWNvcmRCeVJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1lZCA9IGF3YWl0IHRyYW5zZm9ybVJlY29yZEJ5UnVsZShcclxuICAgICAgICAgICAgICAgICAgY2hpbGRSdWxlLFxyXG4gICAgICAgICAgICAgICAgICByZWNvcmQsXHJcbiAgICAgICAgICAgICAgICAgIHJlY29yZEluZGV4XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBpZiAod2l0aENoZWNrcG9pbnRzKSBjYW5jZWxsYXRpb24uY2hlY2twb2ludCgpXHJcbiAgICAgICAgICAgICAgICByZWNvcmQgPSB0cmFuc2Zvcm1lZFxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1tyZWNvcmRJbmRleF0gPSB0cmFuc2Zvcm1lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gb3BlcmF0aW9uQ29uZmlnW2NoaWxkUnVsZS50eXBlXT8uKFxyXG4gICAgICAgICAgICAgICAgY2hpbGRSdWxlLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgdmFyIGZpbGxPayA9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1SZWNvcmRCeVJ1bGUgJiYgb3B0aW9ucz8ud3JhcFRyYW5zZm9ybWVkRmllbGRXaXRoU2tpcFxyXG4gICAgICAgICAgICAgICAgICA/IGF3YWl0IGNhbmNlbGxhdGlvbi53aXRoU2tpcCgoKSA9PiBydW5DaGlsZCh0cnVlKSlcclxuICAgICAgICAgICAgICAgICAgOiBhd2FpdCBydW5DaGlsZCgpXHJcbiAgICAgICAgICAgICAgcmVwb3J0ZXIudXBkYXRlUm93KHJvdywgcmVjb3JkKVxyXG4gICAgICAgICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSB0cnlGaW5kRGlzcGxheVZhbHVlKGNoaWxkUnVsZS5sYWJlbCwgcmVjb3JkKVxyXG4gICAgICAgICAgICAgIHJlcG9ydGVyLnVwZGF0ZUZpZWxkKFxyXG4gICAgICAgICAgICAgICAgcm93LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRSdWxlLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZmlsbE9rICE9PSBmYWxzZSAmJiBkaXNwbGF5VmFsdWUgPyBcImZpbGxlZFwiIDogXCJtaXNzZWRcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXBvcnRlci5lbWl0KClcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIGNhbmNlbGxhdGlvbi5Ta2lwcGVkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydGVyLnVwZGF0ZVJvdyhyb3csIHJlY29yZClcclxuICAgICAgICAgICAgICAgIHJlcG9ydGVyLnVwZGF0ZUZpZWxkKFxyXG4gICAgICAgICAgICAgICAgICByb3csXHJcbiAgICAgICAgICAgICAgICAgIGNoaWxkUnVsZS5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgdHJ5RmluZERpc3BsYXlWYWx1ZShjaGlsZFJ1bGUubGFiZWwsIHJlY29yZCksXHJcbiAgICAgICAgICAgICAgICAgIFwic2tpcHBlZFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICByZXBvcnRlci5lbWl0KClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvZ3Jlc3NDYWxsYmFja3M/Lm9uQ29tcGxldGVkPy4oKVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgY2FuY2VsbGF0aW9uLlNraXBwZWRFcnJvcikge1xyXG4gICAgICAgICAgcHJvZ3Jlc3NDYWxsYmFja3M/Lm9uU2tpcHBlZD8uKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlcnJcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIW9wdGlvbnM/LmtlZXBDdXJyZW50RmllbGRPbkV4aXQpIHtcclxuICAgICAgICAgIGNhbmNlbGxhdGlvbi51cGRhdGVDdXJyZW50RmllbGQobnVsbClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVtcGxveW1lbnRPcGVyYXRpb25zKFxyXG4gIHJ1bGVzLFxyXG4gIHJlY29yZHMsXHJcbiAgb3BlcmF0aW9uQ29uZmlnLFxyXG4gIHRyYW5zZm9ybVJlY29yZEJ5UnVsZSxcclxuICBwcm9ncmVzc0NhbGxiYWNrcyxcclxuICBvcHRpb25zXHJcbikge1xyXG4gIHZhciBlbXBsb3ltZW50UnVsZXMgPSBydWxlcy5maWx0ZXIoXHJcbiAgICAocnVsZSkgPT4gcnVsZS50eXBlID09PSBlbnVtcy5GSUVMRF9UWVBFLkVNUExPWU1FTlRcclxuICApXHJcbiAgcmV0dXJuIFtcclxuICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgdmFyIHJlcG9ydGVyID0gY3JlYXRlU2VjdGlvblJlc3VsdFJlcG9ydGVyKFxyXG4gICAgICAgIFwiZW1wbG95bWVudFwiLFxyXG4gICAgICAgIHByb2dyZXNzQ2FsbGJhY2tzXHJcbiAgICAgIClcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBmb3IgKHZhciBbcmVjb3JkSW5kZXgsIHJ1bGVdIG9mIGVtcGxveW1lbnRSdWxlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgIHZhciByZWNvcmQgPSByZWNvcmRzW3JlY29yZEluZGV4XVxyXG4gICAgICAgICAgaWYgKCFyZWNvcmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgIGBObyByZWNvcmQgZm91bmQgZm9yIGVtcGxveW1lbnQgcnVsZSBhdCBpbmRleCAke3JlY29yZEluZGV4fS4gVG90YWwgcmVjb3JkczogJHtyZWNvcmRzLmxlbmd0aH0sIFRvdGFsIHJ1bGVzOiAke2VtcGxveW1lbnRSdWxlcy5sZW5ndGh9YFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVwb3J0ZXIuc2V0TGFiZWwocnVsZS5sYWJlbClcclxuICAgICAgICAgIHZhciByb3cgPSByZXBvcnRlci5lbnN1cmVSb3cocmVjb3JkSW5kZXgsIHJlY29yZClcclxuICAgICAgICAgIGNhbmNlbGxhdGlvbi51cGRhdGVDdXJyZW50RmllbGQocnVsZS5sYWJlbClcclxuICAgICAgICAgIHJlcG9ydGVyLmVtaXQoKVxyXG5cclxuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHJ1bGUuY2hpbGRyZW4gfHwgW11cclxuICAgICAgICAgIGZvciAodmFyIGNoaWxkUnVsZSBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1SZWNvcmRCeVJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIHJlY29yZCA9IGF3YWl0IHRyYW5zZm9ybVJlY29yZEJ5UnVsZShcclxuICAgICAgICAgICAgICAgICAgY2hpbGRSdWxlLFxyXG4gICAgICAgICAgICAgICAgICByZWNvcmQsXHJcbiAgICAgICAgICAgICAgICAgIHJlY29yZEluZGV4XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzW3JlY29yZEluZGV4XSA9IHJlY29yZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB2YXIgZmlsbE9rID0gYXdhaXQgb3BlcmF0aW9uQ29uZmlnW2NoaWxkUnVsZS50eXBlXT8uKFxyXG4gICAgICAgICAgICAgICAgY2hpbGRSdWxlLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgcmVwb3J0ZXIudXBkYXRlUm93KHJvdywgcmVjb3JkKVxyXG4gICAgICAgICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSB0cnlGaW5kRGlzcGxheVZhbHVlKGNoaWxkUnVsZS5sYWJlbCwgcmVjb3JkKVxyXG4gICAgICAgICAgICAgIHJlcG9ydGVyLnVwZGF0ZUZpZWxkKFxyXG4gICAgICAgICAgICAgICAgcm93LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRSdWxlLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZmlsbE9rICE9PSBmYWxzZSAmJiBkaXNwbGF5VmFsdWUgPyBcImZpbGxlZFwiIDogXCJtaXNzZWRcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXBvcnRlci5lbWl0KClcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIGNhbmNlbGxhdGlvbi5Ta2lwcGVkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydGVyLnVwZGF0ZVJvdyhyb3csIHJlY29yZClcclxuICAgICAgICAgICAgICAgIHJlcG9ydGVyLnVwZGF0ZUZpZWxkKFxyXG4gICAgICAgICAgICAgICAgICByb3csXHJcbiAgICAgICAgICAgICAgICAgIGNoaWxkUnVsZS5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgdHJ5RmluZERpc3BsYXlWYWx1ZShjaGlsZFJ1bGUubGFiZWwsIHJlY29yZCksXHJcbiAgICAgICAgICAgICAgICAgIFwic2tpcHBlZFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICByZXBvcnRlci5lbWl0KClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvZ3Jlc3NDYWxsYmFja3M/Lm9uQ29tcGxldGVkPy4oKVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgY2FuY2VsbGF0aW9uLlNraXBwZWRFcnJvcikge1xyXG4gICAgICAgICAgcHJvZ3Jlc3NDYWxsYmFja3M/Lm9uU2tpcHBlZD8uKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlcnJcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIW9wdGlvbnM/LmtlZXBDdXJyZW50RmllbGRPbkV4aXQpIHtcclxuICAgICAgICAgIGNhbmNlbGxhdGlvbi51cGRhdGVDdXJyZW50RmllbGQobnVsbClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuc3VyZUFycmF5KHZhbHVlKSB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUNhbmRpZGF0ZVRleHQodGV4dCwgaXNMb2NhdGlvbikge1xyXG4gIHZhciBjb21wYWN0ID0gdGV4dC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKClcclxuICByZXR1cm4gaXNMb2NhdGlvbiA/IGNvbXBhY3QucmVwbGFjZSgvXFxzKixcXHMqL2csIFwiLCBcIikgOiBjb21wYWN0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkQXV0b2NvbXBsZXRlQW5zd2VyQ2FuZGlkYXRlcyhmaWVsZExhYmVsLCByYXdBbnN3ZXJzKSB7XHJcbiAgdmFyIGxvd2VyID0gZmllbGRMYWJlbC50b0xvd2VyQ2FzZSgpXHJcbiAgdmFyIGlzTG9jYXRpb24gPSBsb3dlci5pbmNsdWRlcyhcImxvY2F0aW9uXCIpXHJcbiAgdmFyIHN0cmluZ3MgPSBlbnN1cmVBcnJheShyYXdBbnN3ZXJzKS5maWx0ZXIoKHYpID0+IHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKVxyXG4gIHZhciBjYW5kaWRhdGVzID0gW11cclxuXHJcbiAgdmFyIHB1c2hVbmlxdWUgPSAodGV4dCkgPT4ge1xyXG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVDYW5kaWRhdGVUZXh0KHRleHQsIGlzTG9jYXRpb24pXHJcbiAgICBpZiAobm9ybWFsaXplZCAmJiAhY2FuZGlkYXRlcy5pbmNsdWRlcyhub3JtYWxpemVkKSkge1xyXG4gICAgICBjYW5kaWRhdGVzLnB1c2gobm9ybWFsaXplZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAodmFyIHZhbHVlIG9mIHN0cmluZ3MpIHtcclxuICAgIHB1c2hVbmlxdWUodmFsdWUpXHJcbiAgICBpZiAoaXNMb2NhdGlvbikge1xyXG4gICAgICB2YXIgY2l0eSA9IG5vcm1hbGl6ZUNhbmRpZGF0ZVRleHQodmFsdWUsIHRydWUpLnNwbGl0KFwiLFwiKVswXT8udHJpbSgpXHJcbiAgICAgIGlmIChjaXR5KSBwdXNoVW5pcXVlKGNpdHkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmRlYnVnKFwiW0dyZWVuaG91c2VdW0F1dG9jb21wbGV0ZV0gY2FuZGlkYXRlcyBwcmVwYXJlZFwiLCB7XHJcbiAgICBmaWVsZEtpbmQ6IGlzTG9jYXRpb24gPyBcImxvY2F0aW9uXCIgOiBcImdlbmVyaWNcIixcclxuICAgIGlucHV0Q291bnQ6IHN0cmluZ3MubGVuZ3RoLFxyXG4gICAgY2FuZGlkYXRlQ291bnQ6IGNhbmRpZGF0ZXMubGVuZ3RoXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGNhbmRpZGF0ZXMubGVuZ3RoID4gMCA/IGNhbmRpZGF0ZXMgOiBzdHJpbmdzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXcmFwIGEgZmllbGQgZmlsbCBmbiB3aXRoIHNraXAvY2FuY2VsIGhhbmRsaW5nICsgcHJvZ3Jlc3MgY2FsbGJhY2tzLlxyXG4gKiBmaWxsRm4ocnVsZSwgdmFsdWUsIHJlY29yZCkg4oCUIHJldHVybiBmYWxzZSB0byB0cmVhdCBhcyBtaXNzLlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlT3BlcmF0aW9uSGFuZGxlckZhY3Rvcnkob25GaWxsZWQsIG9uTWlzc2VkKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxsRm4sIG9wdGlvbnMgPSB7IGV4cGVjdEFycmF5OiBmYWxzZSB9KSB7XHJcbiAgICByZXR1cm4gYXN5bmMgKHJ1bGUsIHJlY29yZCwgdXBkYXRlQ3VycmVudEZpZWxkID0gdHJ1ZSkgPT4ge1xyXG4gICAgICB2YXIgbGFiZWwgPSBydWxlLmxhYmVsXHJcbiAgICAgIGlmICh1cGRhdGVDdXJyZW50RmllbGQpIGNhbmNlbGxhdGlvbi51cGRhdGVDdXJyZW50RmllbGQobGFiZWwpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY2FuY2VsbGF0aW9uLndpdGhTa2lwKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIHZhciByYXcgPSBmaW5kVmFsdWVJblJlY29yZChydWxlLmxhYmVsLCByZWNvcmQpXHJcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb25zLmV4cGVjdEFycmF5XHJcbiAgICAgICAgICAgID8gZW5zdXJlQXJyYXkocmF3KVxyXG4gICAgICAgICAgICA6IGxvZGFzaEVzLmlzQXJyYXkocmF3KVxyXG4gICAgICAgICAgICAgID8gcmF3WzBdXHJcbiAgICAgICAgICAgICAgOiByYXdcclxuICAgICAgICAgIHZhciBvayA9IGF3YWl0IGZpbGxGbihydWxlLCB2YWx1ZSwgcmVjb3JkKVxyXG4gICAgICAgICAgaWYgKG9rID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZmlsbGVyLlZhbHVlRXJyb3IoYEZhaWxlZCB0byBmaWxsICR7cnVsZS5sYWJlbH1gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHVwZGF0ZUN1cnJlbnRGaWVsZCkgb25GaWxsZWQocnVsZS5sYWJlbClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBjYW5jZWxsYXRpb24uQ2FuY2VsbGVkRXJyb3IpIHRocm93IGVyclxyXG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBjYW5jZWxsYXRpb24uU2tpcHBlZEVycm9yKSB7XHJcbiAgICAgICAgICBpZiAodXBkYXRlQ3VycmVudEZpZWxkKSB7XHJcbiAgICAgICAgICAgIG9uTWlzc2VkKHJ1bGUubGFiZWwpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhyb3cgZXJyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBmaWxsZXIuVmFsdWVFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICBgW09wZXJhdGlvbkhhbmRsZXJdIFwiJHtsYWJlbH1cIiBWYWx1ZUVycm9yOmAsXHJcbiAgICAgICAgICAgIGVyci5tZXNzYWdlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgIGBbT3BlcmF0aW9uSGFuZGxlcl0gXCIke2xhYmVsfVwiIHVuZXhwZWN0ZWQgZXJyb3I6YCxcclxuICAgICAgICAgICAgZXJyXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cGRhdGVDdXJyZW50RmllbGQpIG9uTWlzc2VkKHJ1bGUubGFiZWwpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKiBQYXJzZSBgWVlZWS1NTS1ERGAgKG9yIC8gLikgaW50byB7IHllYXIsIG1vbnRoOiBcIkphblwiLCBkYXkgfS4gKi9cclxuZnVuY3Rpb24gcGFyc2VEYXRlUGFydHMocmF3KSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghcmF3IHx8IHR5cGVvZiByYXcgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgcmV0dXJuIHsgeWVhcjogXCJcIiwgbW9udGg6IFwiXCIsIGRheTogXCJcIiB9XHJcbiAgICB9XHJcbiAgICB2YXIgbm9ybWFsaXplZCA9IHJhdy5yZXBsYWNlKC9bXFwvLl0vZywgXCItXCIpLnRyaW0oKVxyXG4gICAgdmFyIHBhcnRzID0gbm9ybWFsaXplZC5zcGxpdChcIi1cIilcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSByZXR1cm4geyB5ZWFyOiBcIlwiLCBtb250aDogXCJcIiwgZGF5OiBcIlwiIH1cclxuXHJcbiAgICB2YXIgeWVhciA9IHBhcnRzWzBdXHJcbiAgICB2YXIgbW9udGhOdW0gPSBwYXJ0c1sxXVxyXG4gICAgdmFyIGRheSA9IHBhcnRzWzJdXHJcbiAgICB2YXIgTU9OVEhTID0gW1xyXG4gICAgICBcIkphblwiLFxyXG4gICAgICBcIkZlYlwiLFxyXG4gICAgICBcIk1hclwiLFxyXG4gICAgICBcIkFwclwiLFxyXG4gICAgICBcIk1heVwiLFxyXG4gICAgICBcIkp1blwiLFxyXG4gICAgICBcIkp1bFwiLFxyXG4gICAgICBcIkF1Z1wiLFxyXG4gICAgICBcIlNlcFwiLFxyXG4gICAgICBcIk9jdFwiLFxyXG4gICAgICBcIk5vdlwiLFxyXG4gICAgICBcIkRlY1wiXHJcbiAgICBdXHJcbiAgICB2YXIgbW9udGhJbmRleCA9IE51bWJlcihtb250aE51bSkgLSAxXHJcbiAgICB2YXIgbW9udGggPVxyXG4gICAgICBtb250aEluZGV4ID49IDAgJiYgbW9udGhJbmRleCA8IDEyID8gTU9OVEhTW21vbnRoSW5kZXhdIDogXCJcIlxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHllYXI6IHllYXIgfHwgXCJcIixcclxuICAgICAgbW9udGgsXHJcbiAgICAgIGRheTogZGF5ID8gZGF5LnJlcGxhY2UoL14wLywgXCJcIikgOiBcIlwiXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwicGFyc2VEYXRlUGFydHMgZXJyb3I6XCIsIGVyciwgcmF3KVxyXG4gICAgcmV0dXJuIHsgeWVhcjogXCJcIiwgbW9udGg6IFwiXCIsIGRheTogXCJcIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJhbnN3ZXIuOWI5MTVjYTAuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);