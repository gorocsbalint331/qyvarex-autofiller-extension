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
})({"h8d15":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\eightfold\\operations.js",
    "bundleId": "1e293aeb1bfe9df8",
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
var j = z(require("e9dcee781ad25a81"));
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

},{"e9dcee781ad25a81":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"2ueg0":[function(require,module,exports) {
/**
 * Parcel module id: 6ct1g
 * Resolved path: src/contents/sites/eightfold/operations.js
 * Dependencies:
 *   ./answer -> 0548q  =>  src/contents/sites/eightfold/answer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "preFillForm", ()=>h), n.export(r, "waitForCountryDependentFieldsToSettle", ()=>y), n.export(r, "normalizeEightfoldFieldLabel", ()=>x), n.export(r, "isEightfoldCountryLabel", ()=>A), n.export(r, "preFillCountry", ()=>W), n.export(r, "uploadResume", ()=>G), n.export(r, "isMicrosoftEightfoldHost", ()=>K), n.export(r, "isUnfillableMicrosoftLabel", ()=>X), n.export(r, "findUploadCompleteIndicator", ()=>er), n.export(r, "waitForUploadComplete", ()=>en), n.export(r, "removeResume", ()=>eo), n.export(r, "fillCountryCodeCombobox", ()=>eu), n.export(r, "fillInputTextField", ()=>ed), n.export(r, "fillSelectField", ()=>ef), n.export(r, "fillCheckboxField", ()=>ep), n.export(r, "fillRadioGroupFiled", ()=>ev), n.export(r, "agreeDataPrivacyAgreement", ()=>ew);
var o = e("~contents/methods/choice-match"), i = e("~contents/crawler/utils/input"), a = e("~contents/methods/answer"), l = e("~contents/methods/dom"), s = e("~contents/shared/filler"), u = e("~core/phone-country-code"), c = e("~core/xpath"), d = e("~utils/delay"), f = e("~utils/getTargetOrTimeout"), p = n.interopDefault(f), m = e("./answer");
async function h() {
    await (0, d.delay)(500);
}
function g() {
    let e1 = new Set([
        "state",
        "state province",
        "province",
        "region"
    ]), t = Array.from(document.querySelectorAll('[class*="field-"], #careers-apply-form .apply-item'));
    for (let r1 of t){
        let t = r1.querySelector('label[id*="_label"], legend[id*="_legend"], .apply-form-item-question-label, label, .question-label, legend');
        if (!e1.has(x(t?.textContent))) continue;
        let n = r1.querySelector('input[role="combobox"], input[role="textbox"], select, input');
        if (n) return n;
    }
    return null;
}
function b(e1) {
    let t = e1.getAttribute("aria-controls") || "", r1 = t ? document.getElementById(t) : null, n = e1 instanceof HTMLSelectElement ? e1.options.length : r1?.querySelectorAll('[role="option"]').length || 0;
    return [
        e1.getAttribute("aria-disabled") || "",
        e1.hasAttribute("disabled") ? "disabled" : "enabled",
        t,
        n
    ].join("|");
}
async function y() {
    let e1 = null, t = "", r1 = 0, n = 0;
    for(let o = 0; o < 10; o++){
        await (0, d.delay)(150);
        let o = g();
        if (!o) {
            if (e1 = null, t = "", r1 = 0, (n += 1) >= 5) return;
            continue;
        }
        n = 0;
        let i = b(o);
        if (o === e1 && i === t) {
            if ((r1 += 1) >= 3) return;
        } else e1 = o, t = i, r1 = 0;
    }
}
function v(e1) {
    let t = e1?.trim();
    if (!t) return [];
    let r1 = w(t);
    return [
        "ca",
        "canada"
    ].includes(r1) ? [
        "Canada"
    ] : [
        "us",
        "u s",
        "usa",
        "u s a",
        "united states",
        "united states of america"
    ].includes(r1) ? [
        "United States",
        "United States of America"
    ] : [
        "gb",
        "uk",
        "u k",
        "great britain",
        "united kingdom"
    ].includes(r1) ? [
        "United Kingdom",
        "Great Britain"
    ] : [
        t
    ];
}
function w(e1) {
    return e1.toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}
function S(e1) {
    let t = (0, c.getFirstOrderedNodeSafe)('.//span[contains(@class, "label")]', e1);
    return t?.textContent?.trim() || e1.getAttribute("title")?.trim() || e1.textContent?.trim() || "";
}
_c = S;
function E(e1) {
    return e1.toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}
_c1 = E;
function x(e1) {
    return E(e1 ?? "");
}
let C = new Set([
    "country",
    "country region of residence"
]);
function A(e1) {
    return C.has(x(e1));
}
_c2 = A;
function k(e1, t) {
    let r1 = E(e1), n = E(t);
    return !!r1 && !!n && (r1 === n || !(n.length < 3) && null !== r1.split(" ").join(" ").match(RegExp(`(^| )${n}( |$)`)));
}
function T(e1, t) {
    let r1 = e1.find((e1)=>E(S(e1)) === E(t));
    return r1 || e1.find((e1)=>k(S(e1), t));
}
_c3 = T;
function F(e1, t) {
    let r1 = E(e1), n = E(t);
    return "" !== r1 && "" !== n && r1 === n;
}
_c4 = F;
function I(e1, t) {
    return t.some((t)=>D(e1, t));
}
_c5 = I;
function j(e1) {
    return w(e1).split(" ").filter((e1)=>!/^\d+$/.test(e1)).join(" ");
}
function D(e1, t) {
    let r1 = w(e1), n = w(t);
    if (!r1 || !n) return !1;
    if (r1 === n) return !0;
    let o = j(e1), i = j(t);
    if (o && i) return o === i;
    let a = ea(e1), l = ea(t);
    return !i && !!a && !!l && a === l;
}
_c6 = D;
function P(e1, t) {
    let r1 = e1.trim(), n = w(e1), o = -1;
    for(let i = 0; i < t.length; i++){
        let a = t[i], l = w(a);
        r1 === a ? o = Math.max(o, 300 - i) : n === l ? o = Math.max(o, 200 - i) : D(e1, a) && (o = Math.max(o, 100 - i));
    }
    return o;
}
_c7 = P;
async function _(e1) {
    e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0
    })), await (0, d.delay)(50), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0
    })), await (0, d.delay)(50), e1.click(), await (0, d.delay)(250);
}
async function L(e1, t) {
    let r1 = z(e1);
    if (!r1) return "no-options";
    let n = (0, c.getOrderedNodesSafe)('.//*[@role="option"]', r1);
    if (0 === n.length) return "no-options";
    let o = null, i = -1;
    for (let e1 of n){
        let r1 = P(S(e1), t);
        r1 > i && (i = r1, o = e1);
    }
    return !o || i < 0 ? "no-match" : (await _(o), "selected");
}
_c8 = L;
async function R(e1, t) {
    for (let r1 of t)for(let n = 0; n < 2; n++){
        e1.value = "", e1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, d.delay)(0 === n ? 400 : 800), e1.value = r1, e1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, d.delay)(0 === n ? 500 : 1e3);
        let o = z(e1);
        for(let t = 0; t < 15 && !o; t++)await (0, d.delay)(200), o = z(e1);
        if (!o) continue;
        let i = await L(e1, t);
        if ("selected" === i) return !0;
    }
    return !1;
}
_c9 = R;
function O(e1, t) {
    e1.value = t, e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    }));
}
_c10 = O;
async function M(e1, t, r1, n, o) {
    let i = S(t);
    t.click(), await (0, d.delay)(200);
    let a = e1.value || "", l = F(a, i) || F(a, r1);
    if (!l) throw console.warn("[Eightfold][Select] option click did not commit", {
        label: n
    }), O(e1, o), e1.blur(), await (0, d.delay)(100), new s.FillError(`(Select) Option did not commit: "${r1}" for label: "${n}"`);
    e1.blur(), await (0, d.delay)(100);
}
_c11 = M;
async function N(e1, t) {
    await U(e1, t, (e1)=>e1 === t, "restore");
}
_c12 = N;
function $(e1) {
    let t = e1.getAttribute("role");
    return "textbox" === t || "combobox" !== t && !e1.getAttribute("aria-controls");
}
function B(e1) {
    return !1 !== e1.isConnected ? e1 : Y();
}
_c13 = B;
function q(e1, t) {
    let r1 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    r1 ? r1.call(e1, t) : e1.value = t;
}
async function U(e1, t, r1, n) {
    let o = B(e1);
    for(let e1 = 1; e1 <= 3 && o; e1++){
        if (r1(o.value || "")) return !0;
        o.focus(), q(o, t), o.dispatchEvent(new Event("input", {
            bubbles: !0,
            composed: !0
        })), await (0, d.delay)(80);
        let i = B(o), a = !!i && i !== o;
        if (!i) {
            console.warn("[Eightfold][Country] text input commit failed", {
                phase: n,
                attempt: e1,
                reason: "control_missing_after_input"
            });
            break;
        }
        if (!r1(i.value || "")) {
            console.warn("[Eightfold][Country] text input readback mismatch", {
                phase: n,
                attempt: e1,
                nodeReplaced: a
            }), o = i;
            continue;
        }
        i.dispatchEvent(new Event("change", {
            bubbles: !0,
            composed: !0
        })), i.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            composed: !0
        })), i.blur(), await (0, d.delay)(100), i = B(i);
        let l = !!i && r1(i.value || "");
        if ((a || !l) && console.info("[Eightfold][Country] text input live readback", {
            phase: n,
            attempt: e1,
            nodeReplaced: a,
            committed: l
        }), l) return !0;
        o = i;
    }
    return !1;
}
_c14 = U;
async function H(e1, t) {
    if (0 === t.length) return !1;
    if ($(e1)) {
        if (I(e1.value || "", t)) return !0;
        let r1 = e1.value || "", n = await U(e1, t[0], (e1)=>I(e1, t), "fill");
        return !!n || (await N(e1, r1), !1);
    }
    if (I(e1.value || "", t)) return !0;
    let r1 = e1.value || "";
    e1.focus(), await (0, d.delay)(150);
    let n = "true" === e1.getAttribute("aria-expanded");
    if (!n) {
        let t = e1.closest('[class*="select-input-wrapper"]') || e1.closest('[class*="select-wrapper"]') || e1.parentElement, r1 = t?.querySelector('button[role="presentation"], button[aria-hidden="true"], button');
        r1 && (r1.click(), await (0, d.delay)(300));
    }
    let o = await L(e1, t);
    if ("no-options" === o) {
        let r1 = await R(e1, t);
        o = r1 ? "selected" : "no-options";
    }
    let i = "selected" === o && I(e1.value || "", t);
    return i ? (e1.blur(), await (0, d.delay)(500), !0) : (O(e1, r1), e1.blur(), await (0, d.delay)(100), !1);
}
_c15 = H;
function Y() {
    let e1 = (0, c.getOrderedNodesSafe)('//div[contains(@class, "field-")]');
    for (let t of e1){
        let e1 = (0, c.getFirstOrderedNodeSafe)('.//label[contains(@id, "_label")]', t);
        if (!A(e1?.textContent)) continue;
        let r1 = t.querySelector('input[role="combobox"], input[role="textbox"], input[data-test-id="Contact_Information_Country"], input[id="Contact_Information_Country"]');
        if (r1) return r1;
    }
    let t = document.getElementById?.("careers-apply-form") || document.querySelector("#careers-apply-form"), r1 = Array.from(t?.querySelectorAll(".apply-item") || []);
    for (let e1 of r1){
        let t = e1.querySelector(".apply-form-item-question-label, label, .question-label, legend");
        if (!A(t?.textContent)) continue;
        let r1 = e1.querySelector('input[role="combobox"], input[role="textbox"]');
        if (r1) return r1;
    }
    return null;
}
_c16 = Y;
function z(e1) {
    let t = e1.getAttribute("aria-controls"), r1 = null;
    if (t && (r1 = document.getElementById(t)), !r1) {
        let t = e1.closest('[class*="select-wrapper"]');
        t && (r1 = t.querySelector('[role="listbox"]'));
    }
    if (!r1) {
        let e1 = document.querySelectorAll('[class*="dropdown-wrapper"][class*="open"], [class*="dropdown-overlay"][class*="open"]');
        for (let n of Array.from(e1)){
            let e1 = n.querySelector('[role="listbox"]');
            if (e1) {
                let n = e1.id;
                if (n && n === t || !t) {
                    r1 = e1;
                    break;
                }
            }
        }
    }
    return r1 || t || (r1 = document.querySelector('[role="listbox"]')), r1;
}
async function V(e1, t = 8, r1 = 120) {
    let n = z(e1);
    for(let o = 0; o < t && !n; o++)await (0, d.delay)(r1), n = z(e1);
    return n;
}
_c17 = V;
async function W(e1) {
    let t = v(e1);
    if (0 === t.length) return console.warn("[Eightfold][Country] skipped: fresh AFI country is empty"), !1;
    let r1 = Y();
    if (!r1) return console.warn("[Eightfold][Country] prefill control was not found"), !1;
    let n = await H(r1, t);
    return console.info("[Eightfold][Country] prefill completed", {
        committed: n,
        controlKind: $(r1) ? "text" : "combobox"
    }), n;
}
_c18 = W;
async function G(e1, t, r1) {
    let n = null;
    if (n = document.querySelector('input[type="file"][accept*=".pdf"]')) {
        await (0, l.uploadFiles)(n, await (0, a.fetchPdfAsBlob)(e1), t, r1, "Resume/CV");
        let o = await (0, p.default)(()=>{
            let e1 = document.querySelector(".upload-resume-dropzone");
            if (e1) {
                let t = Array.from(e1.querySelectorAll("button")).find((e1)=>e1.textContent?.trim().toLowerCase().includes("replace") && !e1.disabled);
                if (t) return t;
            }
            return null;
        }, ()=>!1, 100);
        o && await (0, d.delay)(200);
    }
}
_c19 = G;
function K() {
    return "undefined" != typeof location && location.hostname.endsWith("careers.microsoft.com");
}
_c20 = K;
function X(e1) {
    let t = e1.toLowerCase();
    return t.includes("where would you like to apply") || t.startsWith("upload your resume");
}
_c21 = X;
let J = [
    "replace",
    "remove",
    "delete",
    "re-upload",
    "reupload",
    "change"
], Q = /\.(pdf|docx?|rtf)\b/;
function Z() {
    return "undefined" != typeof location && "ngc.eightfold.ai" === location.hostname;
}
_c22 = Z;
function ee(e1, t) {
    let r1 = t.toLowerCase();
    return Array.from(e1.querySelectorAll("button")).find((e1)=>!e1.disabled && (e1.textContent || "").trim().toLowerCase() === r1);
}
function et(e1) {
    let t = e1.parentElement;
    for(let e1 = 0; t && e1 < 6; e1 += 1){
        if ((t.getAttribute("class") || "").includes("resumeActionGroup")) {
            let e1 = t.parentElement;
            if (!e1) return null;
            let r1 = ee(e1, "Preview"), n = ee(e1, "Upload new");
            return r1 && n ? r1 : null;
        }
        t = t.parentElement;
    }
    return null;
}
function er() {
    let e1 = document.querySelector(".upload-resume-dropzone");
    if (!e1) return null;
    let t = Array.from(e1.querySelectorAll("button"));
    if (!K()) {
        let r1 = t.find((e1)=>!e1.disabled && (e1.textContent || "").trim().toLowerCase().includes("replace")) ?? null;
        return r1 || (Z() ? et(e1) : null);
    }
    let r1 = t.find((e1)=>{
        if (e1.disabled) return !1;
        let t = (e1.textContent || "").trim().toLowerCase(), r1 = (e1.getAttribute("aria-label") || "").toLowerCase();
        return J.some((e1)=>t.includes(e1) || r1.includes(e1));
    });
    return r1 || (Q.test((e1.textContent || "").toLowerCase()) ? e1 : null);
}
async function en() {
    let e1 = K() ? 30 : 100, t = await (0, p.default)(er, ()=>!1, e1);
    return t ? (console.info("[Eightfold][Resume] upload completion confirmed", {
        host: location.hostname,
        completionSignal: Z() && "preview" === (t.textContent || "").trim().toLowerCase() ? "ngc_preview_upload_new" : "standard"
    }), await (0, d.delay)(200), !0) : (console.warn("[Eightfold][Resume] upload completion was not confirmed", {
        host: location.hostname,
        hasUploadDropzone: !!document.querySelector(".upload-resume-dropzone")
    }), !1);
}
async function eo() {
    let e1 = '.upload-resume-dropzone button[aria-label="Delete"], .upload-resume-dropzone button[aria-label^="Delete file "]', t = document.querySelector(e1);
    t && !t.disabled && (t.click(), await (0, p.default)(()=>!document.querySelector(e1), ()=>!1, 30));
}
function ei(e1) {
    let t = e1.getAttribute("data-test-id") || e1.id || "";
    if (t) {
        let e1 = document.querySelector(`[data-test-id="${t}-country-code"] input[role="combobox"], [id="${t}-country-code"] input[role="combobox"]`);
        if (e1) return e1;
    }
    let r1 = e1.parentElement, n = 8, o = 0;
    for(; r1 && o < n;){
        let t = Array.from(r1.querySelectorAll('input[role="combobox"]'));
        for (let r1 of t){
            if (r1 === e1) continue;
            let t = (r1.getAttribute("placeholder") || "").toLowerCase();
            if (t.includes("country code")) return r1;
        }
        if (r1 = r1.parentElement, o++, r1?.tagName === "FORM" || r1?.tagName === "BODY") break;
    }
    return null;
}
function ea(e1) {
    let t = ("string" == typeof e1 ? e1 : "").match(/\+?\s*(\d{1,4})\b/);
    return t?.[1] || "";
}
function el(e1) {
    let t = new Set, r1 = [];
    for (let n of e1){
        let e1 = n.trim(), o = e1.toLowerCase();
        !e1 || t.has(o) || (t.add(o), r1.push(e1));
    }
    return r1;
}
function es(e1, t) {
    let r1 = w(e1 || ""), n = ea(e1);
    if ("canada" === r1 || "ca" === r1) return {
        candidates: t ? [
            "(+1) Canada",
            "Canada"
        ] : [
            "Canada"
        ],
        selectedTokens: [
            "Canada"
        ],
        failureLabel: "canada"
    };
    if ("united states" === r1 || "united states of america" === r1 || "us" === r1 || "usa" === r1) return {
        candidates: t ? [
            "(+1) United States of America",
            "United States of America",
            "United States"
        ] : [
            "United States of America",
            "United States"
        ],
        selectedTokens: [
            "United States of America",
            "United States"
        ],
        failureLabel: "united states"
    };
    let o = !!j(e1 || ""), i = n ? o ? [
        e1
    ] : t ? [
        e1,
        `(+${n})`,
        `+${n}`,
        n
    ] : [
        e1,
        `+${n}`,
        n
    ] : [
        e1
    ];
    return {
        candidates: el(i),
        selectedTokens: el((o ? [
            e1
        ] : [
            n,
            e1
        ]).filter(Boolean)),
        failureLabel: e1
    };
}
async function eu(e1, t) {
    let r1 = "object" == typeof t && null !== t ? t : void 0, n = "string" == typeof t ? t.trim() : void 0, o = r1?.useDialCodeInProbe !== !1;
    if (!n) return;
    let i = e1.value, { candidates: a, selectedTokens: l, failureLabel: u } = es(n, o), f = async (t)=>{
        e1.value = "", e1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, d.delay)(80), e1.value = t, e1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, d.delay)(250);
    }, p = ()=>l.some((t)=>D(e1.value || "", t));
    if (p()) return;
    let m = !1, h = (t, r1)=>{
        if (!p()) return !1;
        let n = r1?.getAttribute("aria-selected") === "true", o = "false" === e1.getAttribute("aria-expanded"), i = w(e1.value || "") !== w(t);
        return n || o || i;
    };
    try {
        for(let t = 0; t < 3; t++){
            e1.focus(), await (0, d.delay)(120);
            let r1 = e1.closest('[class*="select-input-wrapper"]') || e1.closest('[class*="select-wrapper"]') || e1.parentElement, n = r1?.querySelector('button[role="presentation"], button[aria-hidden="true"]');
            "true" !== e1.getAttribute("aria-expanded") && (n ? n.click() : e1.click(), await (0, d.delay)(250));
            let o = a[Math.min(t, a.length - 1)] || a[0];
            await f(o);
            let i = z(e1);
            if (i) {
                let t = (0, c.getOrderedNodesSafe)('.//*[@role="option"]', i);
                if (t.length > 0) {
                    let r1 = null, n = -1;
                    for (let e1 of t){
                        let t = P(S(e1), a);
                        t > n && (n = t, r1 = e1);
                    }
                    if (r1 && n >= 0) {
                        if (await _(r1), e1.dispatchEvent(new Event("change", {
                            bubbles: !0
                        })), await (0, d.delay)(180), h(o, r1)) {
                            m = !0, e1.blur(), await (0, d.delay)(100);
                            return;
                        }
                    } else {
                        e1.blur();
                        break;
                    }
                }
            }
            if (e1.dispatchEvent(new KeyboardEvent("keydown", {
                key: "ArrowDown",
                bubbles: !0
            })), await (0, d.delay)(120), e1.dispatchEvent(new KeyboardEvent("keydown", {
                key: "Enter",
                bubbles: !0
            })), e1.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, d.delay)(220), h(o)) {
                m = !0, e1.blur(), await (0, d.delay)(100);
                return;
            }
        }
        throw new s.FillError(`(PhoneCountryCode) Could not select country code for "${u}"`);
    } finally{
        m || (await f(i), e1.blur());
    }
}
async function ec(e1) {
    e1.focus(), await (0, d.delay)(80);
    let t = {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: !0,
        composed: !0
    };
    e1.dispatchEvent(new KeyboardEvent("keydown", t)), e1.dispatchEvent(new KeyboardEvent("keypress", t)), e1.dispatchEvent(new KeyboardEvent("keyup", t)), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    })), await (0, d.delay)(100), e1.blur(), await (0, d.delay)(50);
}
async function ed(e1, t, r1 = "", n = "", o) {
    let a = e1.id || e1.name || "", l = e1.getAttribute("data-test-id") || "", s = a.toLowerCase().includes("phone") || l.toLowerCase().includes("phone") || r1.toLowerCase().includes("phone");
    if (s && !a.toLowerCase().includes("country-code")) {
        let r1 = ei(e1);
        if (r1) {
            let e1 = (0, u.resolvePhoneCountrySource)(t, n, o);
            if (t = (0, m.resolveEightfoldPhoneValue)(t, n, o), e1) try {
                await eu(r1, e1);
            } catch  {}
        } else {
            let e1 = n.replace(/\D/g, "");
            t = e1 + t.replace(/\D/g, "");
        }
    }
    e1.focus(), e1.dispatchEvent(new FocusEvent("focusin", {
        bubbles: !0
    })), await (0, d.delay)(100);
    let c = Object.getOwnPropertyDescriptor(e1 instanceof HTMLInputElement ? window.HTMLInputElement.prototype : window.HTMLTextAreaElement.prototype, "value")?.set;
    c ? c.call(e1, "") : e1.value = "", e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await (0, d.delay)(50), c ? c.call(e1, t) : e1.value = t, e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: !0
    })), e1.dispatchEvent(new KeyboardEvent("keypress", {
        bubbles: !0
    })), await (0, d.delay)(100), e1.dispatchEvent(new FocusEvent("focusout", {
        bubbles: !0
    })), await (0, d.delay)(100), e1.blur(), await (0, d.delay)(100);
    let f = e1.value;
    f !== t && (c ? c.call(e1, t) : e1.value = t, e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await (0, d.delay)(50), e1.value !== t && (await (0, i.fillDefaultInputField)(e1, t), await (0, d.delay)(50)));
    let p = e1.getAttribute("aria-describedby"), h = p ? (document.getElementById(p)?.textContent || "").trim().toLowerCase() : "", g = "true" === e1.getAttribute("aria-invalid"), b = h.includes("cannot be left blank") || h.includes("cannot be blank") || h.includes("required");
    if ("" !== String(t).trim() && g && b) {
        e1.dispatchEvent(new Event("input", {
            bubbles: !0,
            composed: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0,
            composed: !0
        })), await (0, d.delay)(80), e1.blur(), await (0, d.delay)(80);
        let t = document.body || document.documentElement;
        t && (t.dispatchEvent(new MouseEvent("mousedown", {
            bubbles: !0
        })), t.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: !0
        })), t.dispatchEvent(new MouseEvent("click", {
            bubbles: !0
        })), await (0, d.delay)(100));
    }
}
async function ef(e1, t, r1) {
    let n = e1.label, o = A(n), i = o ? v(r1) : [];
    if (o && 0 === i.length || (o && (t = [
        i[0]
    ]), !o && (!t || 0 === t.length))) return;
    let a = t.find((e1)=>e1?.trim()) || "", l = e1.$input;
    if (!l) throw new s.FillError(`(Select) Could not find field for label: "${n}"`);
    if (o && l instanceof HTMLInputElement) {
        let e1 = await H(l, i);
        if (!e1) throw new s.FillError(`(Select) Option not found: "${a}" for label: "${n}"`);
        return;
    }
    if (o && l instanceof HTMLSelectElement) {
        let e1 = (0, c.getOrderedNodesSafe)(".//option", l).find((e1)=>i.some((t)=>D(e1.textContent || "", t) || D(e1.value || "", t)));
        if (!e1) throw new s.FillError(`(Select) Option not found: "${a}" for label: "${n}"`);
        l.value = e1.value, l.dispatchEvent(new Event("input", {
            bubbles: !0
        })), l.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, d.delay)(100), l.blur(), await (0, d.delay)(100);
        return;
    }
    if (l instanceof HTMLInputElement && "combobox" === l.getAttribute("role")) {
        let e1 = (l.getAttribute("aria-haspopup") || "").toLowerCase(), t = (l.getAttribute("placeholder") || "").toLowerCase(), r1 = "dialog" === e1 || "date" === l.type || t.includes("date");
        if (r1) {
            await ed(l, a, n), await ec(l);
            return;
        }
        let u = l.value || "", f = u, p = o ? I(u, i) : F(u, a);
        if (p) return;
        l.focus(), await (0, d.delay)(100);
        let m = (0, c.getFirstOrderedNodeSafe)('.//button[@role="presentation"]', l.parentElement);
        m && (m.click(), await (0, d.delay)(300));
        let h = z(l);
        if (h) {
            let e1 = (0, c.getOrderedNodesSafe)('.//*[@role="option"]', h), t = T(e1, a);
            if (t) {
                await M(l, t, a, n, f);
                return;
            }
        }
        l.value = "", l.dispatchEvent(new Event("input", {
            bubbles: !0
        })), l.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, d.delay)(400), l.value = a, l.dispatchEvent(new Event("input", {
            bubbles: !0
        })), l.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, d.delay)(600);
        let g = l.getAttribute("aria-controls"), b = null;
        if (g && (b = document.getElementById(g)), b || g || (b = document.querySelector('[role="listbox"]')), b || !m || (m.click(), await (0, d.delay)(300), g && (b = document.getElementById(g)), b || g || (b = document.querySelector('[role="listbox"]'))), !b && o && (b = await V(l, 15, 200)), !b && o) {
            for (let e1 of i.slice(1))if (l.value = "", l.dispatchEvent(new Event("input", {
                bubbles: !0
            })), l.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, d.delay)(400), l.value = e1, l.dispatchEvent(new Event("input", {
                bubbles: !0
            })), l.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, d.delay)(600), b = await V(l, 15, 200)) break;
        }
        if (!b) throw new s.FillError(`(Select) Dropdown menu did not appear for label: "${n}"`);
        await (0, d.delay)(200);
        let y = (0, c.getOrderedNodesSafe)('.//button[@role="option"]', b);
        if (0 === y.length) {
            if (o) {
                await (0, d.delay)(1e3);
                let e1 = (0, c.getOrderedNodesSafe)('.//button[@role="option"]', b);
                if (0 === e1.length) throw new s.FillError(`(Select) No options found in dropdown for label: "${n}"`);
                let t = T(e1, a);
                if (t) t.click(), await (0, d.delay)(200);
                else throw O(l, f), new s.FillError(`(Select) Exact option not found: "${a}" for label: "${n}"`);
                l.blur(), await (0, d.delay)(100);
                return;
            }
            throw new s.FillError(`(Select) No options found in dropdown for label: "${n}"`);
        }
        let v = T(y, a);
        if (!v) throw console.warn("[Eightfold][Select] exact option was not found", {
            label: n,
            optionCount: y.length
        }), O(l, f), l.blur(), await (0, d.delay)(100), new s.FillError(`(Select) Option not found: "${a}" for label: "${n}"`);
        await M(l, v, a, n, f);
        return;
    }
    if (l instanceof HTMLSelectElement) {
        l.focus(), await (0, d.delay)(100);
        let e1 = (0, c.getOrderedNodesSafe)(".//option", l).find((e1)=>e1.textContent.trim().toLowerCase() === a.toLowerCase() || e1.value.toLowerCase() === a.toLowerCase());
        if (e1) l.value = e1.value, l.dispatchEvent(new Event("input", {
            bubbles: !0
        })), l.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, d.delay)(100), l.blur(), await (0, d.delay)(100);
        else throw new s.FillError(`(Select) Option not found: "${a}" for label: "${n}"`);
    }
}
async function ep(e1, t) {
    if (t && 0 !== t.length) for (let r1 of t){
        let t = Array.from(e1.$checkboxs || []), n = t.filter((e1)=>eh(e1, r1)), o = n.length > 0 ? n : 1 === t.length && eg(r1) ? t : [];
        if (o.length > 0) {
            for (let e1 of o)await ey(e1);
            continue;
        }
        let i = null, a = `.//input[@type='checkbox'][
      @value=${(0, c.escapeXPath)(r1)} or
      following-sibling::*[normalize-space()=${(0, c.escapeXPath)(r1)}] or
      parent::label[normalize-space()=${(0, c.escapeXPath)(r1)}]
    ]`;
        (i = (0, c.getFirstOrderedNodeSafe)(a)) && !i.checked && (i.focus(), await (0, d.delay)(50), i.click(), await (0, d.delay)(100), i.blur(), await (0, d.delay)(50));
    }
}
function em(e1) {
    return e1.toLowerCase().replace(/\s+/g, " ").trim();
}
function eh(e1, t) {
    let r1 = em(t);
    if (!r1) return !1;
    let n = e1, i = [
        e1.getAttribute("aria-label") || "",
        e1.getAttribute("value") || "",
        n.value || "",
        e1.textContent || ""
    ];
    return i.some((e1)=>{
        let t = em(e1);
        return t === r1 || !!t && (0, o.isExactChoiceMatch)(t, r1);
    });
}
function eg(e1) {
    return [
        "yes",
        "true",
        "agree",
        "agreed"
    ].includes(em(e1));
}
function eb(e1) {
    let t = e1, r1 = e1.getAttribute("class") || "";
    return t.checked || "true" === e1.getAttribute("aria-checked") || r1.includes("fa-check") || r1.includes("checked");
}
async function ey(e1) {
    eb(e1) || (e1.focus(), await (0, d.delay)(50), e1.click(), await (0, d.delay)(100), e1.blur(), await (0, d.delay)(50));
}
async function ev(e1, t) {
    let r1 = e1.label, n = t?.[0];
    if (!n) return;
    let i = null;
    if (e1.$radioParent) {
        let t = (0, c.getOrderedNodesSafe)('.//input[@type="radio"]', e1.$radioParent);
        i = (0, o.findExactChoice)(t, n, (e1)=>{
            let t = (0, c.getFirstOrderedNodeSafe)(`//label[@for="${e1.id}"]`), r1 = t?.textContent?.trim() || e1.value || "";
            return r1;
        }, (e1)=>e1.value) || null;
    }
    if (!i) {
        let e1 = `.//input[@type='radio'][
      @value=${(0, c.escapeXPath)(n)} or
      following-sibling::*[normalize-space()=${(0, c.escapeXPath)(n)}] or
      parent::label[normalize-space()=${(0, c.escapeXPath)(n)}]
    ]`;
        i = (0, c.getFirstOrderedNodeSafe)(e1);
    }
    if (i && !i.checked) i.focus(), await (0, d.delay)(50), i.click(), await (0, d.delay)(100), i.blur(), await (0, d.delay)(50);
    else if (!i) throw new s.FillError(`(Radio) No option "${n}" found for label: "${r1}"`);
}
async function ew(e1) {
    if (!e1) throw Error("(Data Privacy Agreement) Button not found");
    let t = e1.disabled;
    if (t) throw Error("(Data Privacy Agreement) Button is disabled");
    e1.click();
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "A");
$RefreshReg$(_c3, "T");
$RefreshReg$(_c4, "F");
$RefreshReg$(_c5, "I");
$RefreshReg$(_c6, "D");
$RefreshReg$(_c7, "P");
$RefreshReg$(_c8, "L");
$RefreshReg$(_c9, "R");
$RefreshReg$(_c10, "O");
$RefreshReg$(_c11, "M");
$RefreshReg$(_c12, "N");
$RefreshReg$(_c13, "B");
$RefreshReg$(_c14, "U");
$RefreshReg$(_c15, "H");
$RefreshReg$(_c16, "Y");
$RefreshReg$(_c17, "V");
$RefreshReg$(_c18, "W");
$RefreshReg$(_c19, "G");
$RefreshReg$(_c20, "K");
$RefreshReg$(_c21, "X");
$RefreshReg$(_c22, "Z");

},{}]},["h8d15","2ueg0"], "2ueg0", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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SyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUM7QUFBRTtBQUFDLFNBQVMsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxHQUFFLEtBQUssQ0FBQSxLQUFHLEVBQUUsRUFBRSxTQUFNLEVBQUU7SUFBSSxPQUFPLE1BQUcsR0FBRSxLQUFLLENBQUEsS0FBRyxFQUFFLEVBQUUsS0FBRztBQUFHO01BQXJFO0FBQXNFLFNBQVMsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxFQUFFLEtBQUcsSUFBRSxFQUFFO0lBQUcsT0FBTSxPQUFLLE1BQUcsT0FBSyxLQUFHLE9BQUk7QUFBQztNQUFwRDtBQUFxRCxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxJQUFFO0FBQUc7TUFBL0I7QUFBZ0MsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFPLEVBQUUsSUFBRyxNQUFNLEtBQUssT0FBTyxDQUFBLEtBQUcsQ0FBQyxRQUFRLEtBQUssS0FBSSxLQUFLO0FBQUk7QUFBQyxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsRUFBRSxLQUFHLElBQUUsRUFBRTtJQUFHLElBQUcsQ0FBQyxNQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLE9BQUksR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxLQUFHLElBQUUsRUFBRTtJQUFHLElBQUcsS0FBRyxHQUFFLE9BQU8sTUFBSTtJQUFFLElBQUksSUFBRSxHQUFHLEtBQUcsSUFBRSxHQUFHO0lBQUcsT0FBTSxDQUFDLEtBQUcsQ0FBQyxDQUFDLEtBQUcsQ0FBQyxDQUFDLEtBQUcsTUFBSTtBQUFDO01BQWxKO0FBQW1KLFNBQVMsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxHQUFFLFFBQU8sSUFBRSxFQUFFLEtBQUcsSUFBRTtJQUFHLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSTtRQUFDLElBQUks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Q0FBQztRQUFDLEtBQUksRUFBRSxjQUFjLElBQUksV0FBVyxXQUFVO1lBQUMsU0FBUSxDQUFDO1FBQUMsS0FBSSxFQUFFLGNBQWMsSUFBSSxXQUFXLFNBQVE7WUFBQyxTQUFRLENBQUM7UUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsSUFBRztJQUFFO0FBQUM7QUFBQyxlQUFlLEdBQUcsRUFBQyxFQUFDLENBQUMsRUFBQyxFQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUUsT0FBTSxJQUFFLEVBQUUsSUFBRyxJQUFFLElBQUUsRUFBRSxNQUFHLEVBQUU7SUFBQyxJQUFHLEtBQUcsTUFBSSxFQUFFLFVBQVMsQ0FBQSxLQUFJLENBQUEsSUFBRTtRQUFDLENBQUMsQ0FBQyxFQUFFO0tBQUMsQUFBRCxHQUFHLENBQUMsS0FBSSxDQUFBLENBQUMsS0FBRyxNQUFJLEVBQUUsTUFBSyxDQUFDLEdBQUc7SUFBTyxJQUFJLElBQUUsRUFBRSxLQUFLLENBQUEsS0FBRyxJQUFHLFdBQVMsSUFBRyxJQUFFLEdBQUU7SUFBTyxJQUFHLENBQUMsR0FBRSxNQUFNLElBQUksRUFBRSxVQUFVLENBQUMsMENBQTBDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLEtBQUcsYUFBYSxrQkFBaUI7UUFBQyxJQUFJLEtBQUUsTUFBTSxFQUFFLEdBQUU7UUFBRyxJQUFHLENBQUMsSUFBRSxNQUFNLElBQUksRUFBRSxVQUFVLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFBRTtJQUFNO0lBQUMsSUFBRyxLQUFHLGFBQWEsbUJBQWtCO1FBQUMsSUFBSSxLQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsbUJBQWtCLEVBQUcsYUFBWSxHQUFHLEtBQUssQ0FBQSxLQUFHLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxHQUFFLGVBQWEsSUFBRyxNQUFJLEVBQUUsR0FBRSxTQUFPLElBQUc7UUFBSyxJQUFHLENBQUMsSUFBRSxNQUFNLElBQUksRUFBRSxVQUFVLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFBRSxFQUFFLFFBQU0sR0FBRSxPQUFNLEVBQUUsY0FBYyxJQUFJLE1BQU0sU0FBUTtZQUFDLFNBQVEsQ0FBQztRQUFDLEtBQUksRUFBRSxjQUFjLElBQUksTUFBTSxVQUFTO1lBQUMsU0FBUSxDQUFDO1FBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssRUFBRSxRQUFPLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7UUFBSztJQUFNO0lBQUMsSUFBRyxhQUFhLG9CQUFrQixlQUFhLEVBQUUsYUFBYSxTQUFRO1FBQUMsSUFBSSxLQUFFLEFBQUMsQ0FBQSxFQUFFLGFBQWEsb0JBQWtCLEVBQUMsRUFBRyxlQUFjLElBQUUsQUFBQyxDQUFBLEVBQUUsYUFBYSxrQkFBZ0IsRUFBQyxFQUFHLGVBQWMsS0FBRSxhQUFXLE1BQUcsV0FBUyxFQUFFLFFBQU0sRUFBRSxTQUFTO1FBQVEsSUFBRyxJQUFFO1lBQUMsTUFBTSxHQUFHLEdBQUUsR0FBRSxJQUFHLE1BQU0sR0FBRztZQUFHO1FBQU07UUFBQyxJQUFJLElBQUUsRUFBRSxTQUFPLElBQUcsSUFBRSxHQUFFLElBQUUsSUFBRSxFQUFFLEdBQUUsS0FBRyxFQUFFLEdBQUU7UUFBRyxJQUFHLEdBQUU7UUFBTyxFQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztRQUFLLElBQUksSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLHVCQUFzQixFQUFHLG1DQUFrQyxFQUFFO1FBQWUsS0FBSSxDQUFBLEVBQUUsU0FBUSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLElBQUc7UUFBRyxJQUFJLElBQUUsRUFBRTtRQUFHLElBQUcsR0FBRTtZQUFDLElBQUksS0FBRSxBQUFDLENBQUEsR0FBRSxFQUFFLG1CQUFrQixFQUFHLHdCQUF1QixJQUFHLElBQUUsRUFBRSxJQUFFO1lBQUcsSUFBRyxHQUFFO2dCQUFDLE1BQU0sRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO2dCQUFHO1lBQU07UUFBQztRQUFDLEVBQUUsUUFBTSxJQUFHLEVBQUUsY0FBYyxJQUFJLE1BQU0sU0FBUTtZQUFDLFNBQVEsQ0FBQztRQUFDLEtBQUksRUFBRSxjQUFjLElBQUksTUFBTSxVQUFTO1lBQUMsU0FBUSxDQUFDO1FBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssRUFBRSxRQUFNLEdBQUUsRUFBRSxjQUFjLElBQUksTUFBTSxTQUFRO1lBQUMsU0FBUSxDQUFDO1FBQUMsS0FBSSxFQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVM7WUFBQyxTQUFRLENBQUM7UUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7UUFBSyxJQUFJLElBQUUsRUFBRSxhQUFhLGtCQUFpQixJQUFFO1FBQUssSUFBRyxLQUFJLENBQUEsSUFBRSxTQUFTLGVBQWUsRUFBQyxHQUFHLEtBQUcsS0FBSSxDQUFBLElBQUUsU0FBUyxjQUFjLG1CQUFrQixHQUFHLEtBQUcsQ0FBQyxLQUFJLENBQUEsRUFBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsTUFBSyxLQUFJLENBQUEsSUFBRSxTQUFTLGVBQWUsRUFBQyxHQUFHLEtBQUcsS0FBSSxDQUFBLElBQUUsU0FBUyxjQUFjLG1CQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLE1BQU0sRUFBRSxHQUFFLElBQUcsSUFBRyxHQUFHLENBQUMsS0FBRyxHQUFFO1lBQUMsS0FBSSxJQUFJLE1BQUssRUFBRSxNQUFNLEdBQUcsSUFBRyxFQUFFLFFBQU0sSUFBRyxFQUFFLGNBQWMsSUFBSSxNQUFNLFNBQVE7Z0JBQUMsU0FBUSxDQUFDO1lBQUMsS0FBSSxFQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVM7Z0JBQUMsU0FBUSxDQUFDO1lBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFH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QUFBLEdBQUUsRUFBRSxXQUFVLEVBQUcsR0FBRzs2Q0FDUyxFQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsV0FBVSxFQUFHLEdBQUc7c0NBQzlCLEVBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxXQUFVLEVBQUcsR0FBRztLQUN4RCxDQUFDO1FBQUMsSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLHVCQUFzQixFQUFHO0lBQUU7SUFBQyxJQUFHLEtBQUcsQ0FBQyxFQUFFLFNBQVEsRUFBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxFQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxNQUFLLEVBQUUsUUFBTyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO1NBQVMsSUFBRyxDQUFDLEdBQUUsTUFBTSxJQUFJLEVBQUUsVUFBVSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsb0JBQW9CLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFBQztBQUFDLGVBQWUsR0FBRyxFQUFDO0lBQUUsSUFBRyxDQUFDLElBQUUsTUFBTSxNQUFNO0lBQTZDLElBQUksSUFBRSxHQUFFO0lBQVMsSUFBRyxHQUFFLE1BQU0sTUFBTTtJQUErQyxHQUFFO0FBQU8iLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTVhNjNiMDRmNzY1OGNjMTMuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvZWlnaHRmb2xkL29wZXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcZWlnaHRmb2xkXFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCIxZTI5M2FlYjFiZmU5ZGY4XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogNmN0MWdcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2VpZ2h0Zm9sZC9vcGVyYXRpb25zLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuL2Fuc3dlciAtPiAwNTQ4cSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9laWdodGZvbGQvYW5zd2VyLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvY3Jhd2xlci91dGlscy9pbnB1dCAtPiBpUEl2VCAgPT4gIHNyYy9jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0LmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoIC0+IDZta0k0ICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NoYXJlZC9maWxsZXIgLT4gMmFHc1ggID0+ICBzcmMvY29udGVudHMvc2hhcmVkL2ZpbGxlci5qc1xyXG4gKiAgIH5jb3JlL3Bob25lLWNvdW50cnktY29kZSAtPiA4bkVOdyAgPT4gIHNyYy9jb3JlL3Bob25lLWNvdW50cnktY29kZS5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICogICB+dXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0IC0+IDFUQmhGICA9PiAgc3JjL3V0aWxzL2dldFRhcmdldE9yVGltZW91dC5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcInByZUZpbGxGb3JtXCIsKCk9PmgpLG4uZXhwb3J0KHIsXCJ3YWl0Rm9yQ291bnRyeURlcGVuZGVudEZpZWxkc1RvU2V0dGxlXCIsKCk9PnkpLG4uZXhwb3J0KHIsXCJub3JtYWxpemVFaWdodGZvbGRGaWVsZExhYmVsXCIsKCk9PngpLG4uZXhwb3J0KHIsXCJpc0VpZ2h0Zm9sZENvdW50cnlMYWJlbFwiLCgpPT5BKSxuLmV4cG9ydChyLFwicHJlRmlsbENvdW50cnlcIiwoKT0+Vyksbi5leHBvcnQocixcInVwbG9hZFJlc3VtZVwiLCgpPT5HKSxuLmV4cG9ydChyLFwiaXNNaWNyb3NvZnRFaWdodGZvbGRIb3N0XCIsKCk9PkspLG4uZXhwb3J0KHIsXCJpc1VuZmlsbGFibGVNaWNyb3NvZnRMYWJlbFwiLCgpPT5YKSxuLmV4cG9ydChyLFwiZmluZFVwbG9hZENvbXBsZXRlSW5kaWNhdG9yXCIsKCk9PmVyKSxuLmV4cG9ydChyLFwid2FpdEZvclVwbG9hZENvbXBsZXRlXCIsKCk9PmVuKSxuLmV4cG9ydChyLFwicmVtb3ZlUmVzdW1lXCIsKCk9PmVvKSxuLmV4cG9ydChyLFwiZmlsbENvdW50cnlDb2RlQ29tYm9ib3hcIiwoKT0+ZXUpLG4uZXhwb3J0KHIsXCJmaWxsSW5wdXRUZXh0RmllbGRcIiwoKT0+ZWQpLG4uZXhwb3J0KHIsXCJmaWxsU2VsZWN0RmllbGRcIiwoKT0+ZWYpLG4uZXhwb3J0KHIsXCJmaWxsQ2hlY2tib3hGaWVsZFwiLCgpPT5lcCksbi5leHBvcnQocixcImZpbGxSYWRpb0dyb3VwRmlsZWRcIiwoKT0+ZXYpLG4uZXhwb3J0KHIsXCJhZ3JlZURhdGFQcml2YWN5QWdyZWVtZW50XCIsKCk9PmV3KTt2YXIgbz1lKFwifmNvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoXCIpLGk9ZShcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0XCIpLGE9ZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxsPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIikscz1lKFwifmNvbnRlbnRzL3NoYXJlZC9maWxsZXJcIiksdT1lKFwifmNvcmUvcGhvbmUtY291bnRyeS1jb2RlXCIpLGM9ZShcIn5jb3JlL3hwYXRoXCIpLGQ9ZShcIn51dGlscy9kZWxheVwiKSxmPWUoXCJ+dXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0XCIpLHA9bi5pbnRlcm9wRGVmYXVsdChmKSxtPWUoXCIuL2Fuc3dlclwiKTthc3luYyBmdW5jdGlvbiBoKCl7YXdhaXQgKDAsZC5kZWxheSkoNTAwKX1mdW5jdGlvbiBnKCl7bGV0IGU9bmV3IFNldChbXCJzdGF0ZVwiLFwic3RhdGUgcHJvdmluY2VcIixcInByb3ZpbmNlXCIsXCJyZWdpb25cIl0pLHQ9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwiZmllbGQtXCJdLCAjY2FyZWVycy1hcHBseS1mb3JtIC5hcHBseS1pdGVtJykpO2ZvcihsZXQgciBvZiB0KXtsZXQgdD1yLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2lkKj1cIl9sYWJlbFwiXSwgbGVnZW5kW2lkKj1cIl9sZWdlbmRcIl0sIC5hcHBseS1mb3JtLWl0ZW0tcXVlc3Rpb24tbGFiZWwsIGxhYmVsLCAucXVlc3Rpb24tbGFiZWwsIGxlZ2VuZCcpO2lmKCFlLmhhcyh4KHQ/LnRleHRDb250ZW50KSkpY29udGludWU7bGV0IG49ci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0sIGlucHV0W3JvbGU9XCJ0ZXh0Ym94XCJdLCBzZWxlY3QsIGlucHV0Jyk7aWYobilyZXR1cm4gbn1yZXR1cm4gbnVsbH1mdW5jdGlvbiBiKGUpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKXx8XCJcIixyPXQ/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk6bnVsbCxuPWUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudD9lLm9wdGlvbnMubGVuZ3RoOnI/LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwib3B0aW9uXCJdJykubGVuZ3RofHwwO3JldHVybltlLmdldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIil8fFwiXCIsZS5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKT9cImRpc2FibGVkXCI6XCJlbmFibGVkXCIsdCxuXS5qb2luKFwifFwiKX1hc3luYyBmdW5jdGlvbiB5KCl7bGV0IGU9bnVsbCx0PVwiXCIscj0wLG49MDtmb3IobGV0IG89MDtvPDEwO28rKyl7YXdhaXQgKDAsZC5kZWxheSkoMTUwKTtsZXQgbz1nKCk7aWYoIW8pe2lmKGU9bnVsbCx0PVwiXCIscj0wLChuKz0xKT49NSlyZXR1cm47Y29udGludWV9bj0wO2xldCBpPWIobyk7aWYobz09PWUmJmk9PT10KXtpZigocis9MSk+PTMpcmV0dXJufWVsc2UgZT1vLHQ9aSxyPTB9fWZ1bmN0aW9uIHYoZSl7bGV0IHQ9ZT8udHJpbSgpO2lmKCF0KXJldHVybltdO2xldCByPXcodCk7cmV0dXJuW1wiY2FcIixcImNhbmFkYVwiXS5pbmNsdWRlcyhyKT9bXCJDYW5hZGFcIl06W1widXNcIixcInUgc1wiLFwidXNhXCIsXCJ1IHMgYVwiLFwidW5pdGVkIHN0YXRlc1wiLFwidW5pdGVkIHN0YXRlcyBvZiBhbWVyaWNhXCJdLmluY2x1ZGVzKHIpP1tcIlVuaXRlZCBTdGF0ZXNcIixcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiXTpbXCJnYlwiLFwidWtcIixcInUga1wiLFwiZ3JlYXQgYnJpdGFpblwiLFwidW5pdGVkIGtpbmdkb21cIl0uaW5jbHVkZXMocik/W1wiVW5pdGVkIEtpbmdkb21cIixcIkdyZWF0IEJyaXRhaW5cIl06W3RdfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0rL2csXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfWZ1bmN0aW9uIFMoZSl7bGV0IHQ9KDAsYy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL3NwYW5bY29udGFpbnMoQGNsYXNzLCBcImxhYmVsXCIpXScsZSk7cmV0dXJuIHQ/LnRleHRDb250ZW50Py50cmltKCl8fGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik/LnRyaW0oKXx8ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifWZ1bmN0aW9uIEUoZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0rL2csXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfWZ1bmN0aW9uIHgoZSl7cmV0dXJuIEUoZT8/XCJcIil9bGV0IEM9bmV3IFNldChbXCJjb3VudHJ5XCIsXCJjb3VudHJ5IHJlZ2lvbiBvZiByZXNpZGVuY2VcIl0pO2Z1bmN0aW9uIEEoZSl7cmV0dXJuIEMuaGFzKHgoZSkpfWZ1bmN0aW9uIGsoZSx0KXtsZXQgcj1FKGUpLG49RSh0KTtyZXR1cm4hIXImJiEhbiYmKHI9PT1ufHwhKG4ubGVuZ3RoPDMpJiZudWxsIT09ci5zcGxpdChcIiBcIikuam9pbihcIiBcIikubWF0Y2goUmVnRXhwKGAoXnwgKSR7bn0oIHwkKWApKSl9ZnVuY3Rpb24gVChlLHQpe2xldCByPWUuZmluZChlPT5FKFMoZSkpPT09RSh0KSk7cmV0dXJuIHJ8fGUuZmluZChlPT5rKFMoZSksdCkpfWZ1bmN0aW9uIEYoZSx0KXtsZXQgcj1FKGUpLG49RSh0KTtyZXR1cm5cIlwiIT09ciYmXCJcIiE9PW4mJnI9PT1ufWZ1bmN0aW9uIEkoZSx0KXtyZXR1cm4gdC5zb21lKHQ9PkQoZSx0KSl9ZnVuY3Rpb24gaihlKXtyZXR1cm4gdyhlKS5zcGxpdChcIiBcIikuZmlsdGVyKGU9PiEvXlxcZCskLy50ZXN0KGUpKS5qb2luKFwiIFwiKX1mdW5jdGlvbiBEKGUsdCl7bGV0IHI9dyhlKSxuPXcodCk7aWYoIXJ8fCFuKXJldHVybiExO2lmKHI9PT1uKXJldHVybiEwO2xldCBvPWooZSksaT1qKHQpO2lmKG8mJmkpcmV0dXJuIG89PT1pO2xldCBhPWVhKGUpLGw9ZWEodCk7cmV0dXJuIWkmJiEhYSYmISFsJiZhPT09bH1mdW5jdGlvbiBQKGUsdCl7bGV0IHI9ZS50cmltKCksbj13KGUpLG89LTE7Zm9yKGxldCBpPTA7aTx0Lmxlbmd0aDtpKyspe2xldCBhPXRbaV0sbD13KGEpO3I9PT1hP289TWF0aC5tYXgobywzMDAtaSk6bj09PWw/bz1NYXRoLm1heChvLDIwMC1pKTpEKGUsYSkmJihvPU1hdGgubWF4KG8sMTAwLWkpKX1yZXR1cm4gb31hc3luYyBmdW5jdGlvbiBfKGUpe2UuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDUwKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsZC5kZWxheSkoNTApLGUuY2xpY2soKSxhd2FpdCAoMCxkLmRlbGF5KSgyNTApfWFzeW5jIGZ1bmN0aW9uIEwoZSx0KXtsZXQgcj16KGUpO2lmKCFyKXJldHVyblwibm8tb3B0aW9uc1wiO2xldCBuPSgwLGMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vLypbQHJvbGU9XCJvcHRpb25cIl0nLHIpO2lmKDA9PT1uLmxlbmd0aClyZXR1cm5cIm5vLW9wdGlvbnNcIjtsZXQgbz1udWxsLGk9LTE7Zm9yKGxldCBlIG9mIG4pe2xldCByPVAoUyhlKSx0KTtyPmkmJihpPXIsbz1lKX1yZXR1cm4hb3x8aTwwP1wibm8tbWF0Y2hcIjooYXdhaXQgXyhvKSxcInNlbGVjdGVkXCIpfWFzeW5jIGZ1bmN0aW9uIFIoZSx0KXtmb3IobGV0IHIgb2YgdClmb3IobGV0IG49MDtuPDI7bisrKXtlLnZhbHVlPVwiXCIsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDA9PT1uPzQwMDo4MDApLGUudmFsdWU9cixlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsZC5kZWxheSkoMD09PW4/NTAwOjFlMyk7bGV0IG89eihlKTtmb3IobGV0IHQ9MDt0PDE1JiYhbzt0KyspYXdhaXQgKDAsZC5kZWxheSkoMjAwKSxvPXooZSk7aWYoIW8pY29udGludWU7bGV0IGk9YXdhaXQgTChlLHQpO2lmKFwic2VsZWN0ZWRcIj09PWkpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gTyhlLHQpe2UudmFsdWU9dCxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSl9YXN5bmMgZnVuY3Rpb24gTShlLHQscixuLG8pe2xldCBpPVModCk7dC5jbGljaygpLGF3YWl0ICgwLGQuZGVsYXkpKDIwMCk7bGV0IGE9ZS52YWx1ZXx8XCJcIixsPUYoYSxpKXx8RihhLHIpO2lmKCFsKXRocm93IGNvbnNvbGUud2FybihcIltFaWdodGZvbGRdW1NlbGVjdF0gb3B0aW9uIGNsaWNrIGRpZCBub3QgY29tbWl0XCIse2xhYmVsOm59KSxPKGUsbyksZS5ibHVyKCksYXdhaXQgKDAsZC5kZWxheSkoMTAwKSxuZXcgcy5GaWxsRXJyb3IoYChTZWxlY3QpIE9wdGlvbiBkaWQgbm90IGNvbW1pdDogXCIke3J9XCIgZm9yIGxhYmVsOiBcIiR7bn1cImApO2UuYmx1cigpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCl9YXN5bmMgZnVuY3Rpb24gTihlLHQpe2F3YWl0IFUoZSx0LGU9PmU9PT10LFwicmVzdG9yZVwiKX1mdW5jdGlvbiAkKGUpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKTtyZXR1cm5cInRleHRib3hcIj09PXR8fFwiY29tYm9ib3hcIiE9PXQmJiFlLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9ZnVuY3Rpb24gQihlKXtyZXR1cm4hMSE9PWUuaXNDb25uZWN0ZWQ/ZTpZKCl9ZnVuY3Rpb24gcShlLHQpe2xldCByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLFwidmFsdWVcIik/LnNldDtyP3IuY2FsbChlLHQpOmUudmFsdWU9dH1hc3luYyBmdW5jdGlvbiBVKGUsdCxyLG4pe2xldCBvPUIoZSk7Zm9yKGxldCBlPTE7ZTw9MyYmbztlKyspe2lmKHIoby52YWx1ZXx8XCJcIikpcmV0dXJuITA7by5mb2N1cygpLHEobyx0KSxvLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSxhd2FpdCAoMCxkLmRlbGF5KSg4MCk7bGV0IGk9QihvKSxhPSEhaSYmaSE9PW87aWYoIWkpe2NvbnNvbGUud2FybihcIltFaWdodGZvbGRdW0NvdW50cnldIHRleHQgaW5wdXQgY29tbWl0IGZhaWxlZFwiLHtwaGFzZTpuLGF0dGVtcHQ6ZSxyZWFzb246XCJjb250cm9sX21pc3NpbmdfYWZ0ZXJfaW5wdXRcIn0pO2JyZWFrfWlmKCFyKGkudmFsdWV8fFwiXCIpKXtjb25zb2xlLndhcm4oXCJbRWlnaHRmb2xkXVtDb3VudHJ5XSB0ZXh0IGlucHV0IHJlYWRiYWNrIG1pc21hdGNoXCIse3BoYXNlOm4sYXR0ZW1wdDplLG5vZGVSZXBsYWNlZDphfSksbz1pO2NvbnRpbnVlfWkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSxpLmRpc3BhdGNoRXZlbnQobmV3IEZvY3VzRXZlbnQoXCJmb2N1c291dFwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGkuYmx1cigpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCksaT1CKGkpO2xldCBsPSEhaSYmcihpLnZhbHVlfHxcIlwiKTtpZigoYXx8IWwpJiZjb25zb2xlLmluZm8oXCJbRWlnaHRmb2xkXVtDb3VudHJ5XSB0ZXh0IGlucHV0IGxpdmUgcmVhZGJhY2tcIix7cGhhc2U6bixhdHRlbXB0OmUsbm9kZVJlcGxhY2VkOmEsY29tbWl0dGVkOmx9KSxsKXJldHVybiEwO289aX1yZXR1cm4hMX1hc3luYyBmdW5jdGlvbiBIKGUsdCl7aWYoMD09PXQubGVuZ3RoKXJldHVybiExO2lmKCQoZSkpe2lmKEkoZS52YWx1ZXx8XCJcIix0KSlyZXR1cm4hMDtsZXQgcj1lLnZhbHVlfHxcIlwiLG49YXdhaXQgVShlLHRbMF0sZT0+SShlLHQpLFwiZmlsbFwiKTtyZXR1cm4hIW58fChhd2FpdCBOKGUsciksITEpfWlmKEkoZS52YWx1ZXx8XCJcIix0KSlyZXR1cm4hMDtsZXQgcj1lLnZhbHVlfHxcIlwiO2UuZm9jdXMoKSxhd2FpdCAoMCxkLmRlbGF5KSgxNTApO2xldCBuPVwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpO2lmKCFuKXtsZXQgdD1lLmNsb3Nlc3QoJ1tjbGFzcyo9XCJzZWxlY3QtaW5wdXQtd3JhcHBlclwiXScpfHxlLmNsb3Nlc3QoJ1tjbGFzcyo9XCJzZWxlY3Qtd3JhcHBlclwiXScpfHxlLnBhcmVudEVsZW1lbnQscj10Py5xdWVyeVNlbGVjdG9yKCdidXR0b25bcm9sZT1cInByZXNlbnRhdGlvblwiXSwgYnV0dG9uW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSwgYnV0dG9uJyk7ciYmKHIuY2xpY2soKSxhd2FpdCAoMCxkLmRlbGF5KSgzMDApKX1sZXQgbz1hd2FpdCBMKGUsdCk7aWYoXCJuby1vcHRpb25zXCI9PT1vKXtsZXQgcj1hd2FpdCBSKGUsdCk7bz1yP1wic2VsZWN0ZWRcIjpcIm5vLW9wdGlvbnNcIn1sZXQgaT1cInNlbGVjdGVkXCI9PT1vJiZJKGUudmFsdWV8fFwiXCIsdCk7cmV0dXJuIGk/KGUuYmx1cigpLGF3YWl0ICgwLGQuZGVsYXkpKDUwMCksITApOihPKGUsciksZS5ibHVyKCksYXdhaXQgKDAsZC5kZWxheSkoMTAwKSwhMSl9ZnVuY3Rpb24gWSgpe2xldCBlPSgwLGMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy8vZGl2W2NvbnRhaW5zKEBjbGFzcywgXCJmaWVsZC1cIildJyk7Zm9yKGxldCB0IG9mIGUpe2xldCBlPSgwLGMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9sYWJlbFtjb250YWlucyhAaWQsIFwiX2xhYmVsXCIpXScsdCk7aWYoIUEoZT8udGV4dENvbnRlbnQpKWNvbnRpbnVlO2xldCByPXQucXVlcnlTZWxlY3RvcignaW5wdXRbcm9sZT1cImNvbWJvYm94XCJdLCBpbnB1dFtyb2xlPVwidGV4dGJveFwiXSwgaW5wdXRbZGF0YS10ZXN0LWlkPVwiQ29udGFjdF9JbmZvcm1hdGlvbl9Db3VudHJ5XCJdLCBpbnB1dFtpZD1cIkNvbnRhY3RfSW5mb3JtYXRpb25fQ291bnRyeVwiXScpO2lmKHIpcmV0dXJuIHJ9bGV0IHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQ/LihcImNhcmVlcnMtYXBwbHktZm9ybVwiKXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJlZXJzLWFwcGx5LWZvcm1cIikscj1BcnJheS5mcm9tKHQ/LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwbHktaXRlbVwiKXx8W10pO2ZvcihsZXQgZSBvZiByKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuYXBwbHktZm9ybS1pdGVtLXF1ZXN0aW9uLWxhYmVsLCBsYWJlbCwgLnF1ZXN0aW9uLWxhYmVsLCBsZWdlbmRcIik7aWYoIUEodD8udGV4dENvbnRlbnQpKWNvbnRpbnVlO2xldCByPWUucXVlcnlTZWxlY3RvcignaW5wdXRbcm9sZT1cImNvbWJvYm94XCJdLCBpbnB1dFtyb2xlPVwidGV4dGJveFwiXScpO2lmKHIpcmV0dXJuIHJ9cmV0dXJuIG51bGx9ZnVuY3Rpb24geihlKXtsZXQgdD1lLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIikscj1udWxsO2lmKHQmJihyPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpKSwhcil7bGV0IHQ9ZS5jbG9zZXN0KCdbY2xhc3MqPVwic2VsZWN0LXdyYXBwZXJcIl0nKTt0JiYocj10LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwibGlzdGJveFwiXScpKX1pZighcil7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImRyb3Bkb3duLXdyYXBwZXJcIl1bY2xhc3MqPVwib3BlblwiXSwgW2NsYXNzKj1cImRyb3Bkb3duLW92ZXJsYXlcIl1bY2xhc3MqPVwib3BlblwiXScpO2ZvcihsZXQgbiBvZiBBcnJheS5mcm9tKGUpKXtsZXQgZT1uLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwibGlzdGJveFwiXScpO2lmKGUpe2xldCBuPWUuaWQ7aWYobiYmbj09PXR8fCF0KXtyPWU7YnJlYWt9fX19cmV0dXJuIHJ8fHR8fChyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwibGlzdGJveFwiXScpKSxyfWFzeW5jIGZ1bmN0aW9uIFYoZSx0PTgscj0xMjApe2xldCBuPXooZSk7Zm9yKGxldCBvPTA7bzx0JiYhbjtvKyspYXdhaXQgKDAsZC5kZWxheSkociksbj16KGUpO3JldHVybiBufWFzeW5jIGZ1bmN0aW9uIFcoZSl7bGV0IHQ9dihlKTtpZigwPT09dC5sZW5ndGgpcmV0dXJuIGNvbnNvbGUud2FybihcIltFaWdodGZvbGRdW0NvdW50cnldIHNraXBwZWQ6IGZyZXNoIEFGSSBjb3VudHJ5IGlzIGVtcHR5XCIpLCExO2xldCByPVkoKTtpZighcilyZXR1cm4gY29uc29sZS53YXJuKFwiW0VpZ2h0Zm9sZF1bQ291bnRyeV0gcHJlZmlsbCBjb250cm9sIHdhcyBub3QgZm91bmRcIiksITE7bGV0IG49YXdhaXQgSChyLHQpO3JldHVybiBjb25zb2xlLmluZm8oXCJbRWlnaHRmb2xkXVtDb3VudHJ5XSBwcmVmaWxsIGNvbXBsZXRlZFwiLHtjb21taXR0ZWQ6bixjb250cm9sS2luZDokKHIpP1widGV4dFwiOlwiY29tYm9ib3hcIn0pLG59YXN5bmMgZnVuY3Rpb24gRyhlLHQscil7bGV0IG49bnVsbDtpZihuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdW2FjY2VwdCo9XCIucGRmXCJdJykpe2F3YWl0ICgwLGwudXBsb2FkRmlsZXMpKG4sYXdhaXQgKDAsYS5mZXRjaFBkZkFzQmxvYikoZSksdCxyLFwiUmVzdW1lL0NWXCIpO2xldCBvPWF3YWl0ICgwLHAuZGVmYXVsdCkoKCk9PntsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwbG9hZC1yZXN1bWUtZHJvcHpvbmVcIik7aWYoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJyZXBsYWNlXCIpJiYhZS5kaXNhYmxlZCk7aWYodClyZXR1cm4gdH1yZXR1cm4gbnVsbH0sKCk9PiExLDEwMCk7byYmYXdhaXQgKDAsZC5kZWxheSkoMjAwKX19ZnVuY3Rpb24gSygpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBsb2NhdGlvbiYmbG9jYXRpb24uaG9zdG5hbWUuZW5kc1dpdGgoXCJjYXJlZXJzLm1pY3Jvc29mdC5jb21cIil9ZnVuY3Rpb24gWChlKXtsZXQgdD1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHQuaW5jbHVkZXMoXCJ3aGVyZSB3b3VsZCB5b3UgbGlrZSB0byBhcHBseVwiKXx8dC5zdGFydHNXaXRoKFwidXBsb2FkIHlvdXIgcmVzdW1lXCIpfWxldCBKPVtcInJlcGxhY2VcIixcInJlbW92ZVwiLFwiZGVsZXRlXCIsXCJyZS11cGxvYWRcIixcInJldXBsb2FkXCIsXCJjaGFuZ2VcIl0sUT0vXFwuKHBkZnxkb2N4P3xydGYpXFxiLztmdW5jdGlvbiBaKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGxvY2F0aW9uJiZcIm5nYy5laWdodGZvbGQuYWlcIj09PWxvY2F0aW9uLmhvc3RuYW1lfWZ1bmN0aW9uIGVlKGUsdCl7bGV0IHI9dC50b0xvd2VyQ2FzZSgpO3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSkuZmluZChlPT4hZS5kaXNhYmxlZCYmKGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpPT09cil9ZnVuY3Rpb24gZXQoZSl7bGV0IHQ9ZS5wYXJlbnRFbGVtZW50O2ZvcihsZXQgZT0wO3QmJmU8NjtlKz0xKXtpZigodC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikuaW5jbHVkZXMoXCJyZXN1bWVBY3Rpb25Hcm91cFwiKSl7bGV0IGU9dC5wYXJlbnRFbGVtZW50O2lmKCFlKXJldHVybiBudWxsO2xldCByPWVlKGUsXCJQcmV2aWV3XCIpLG49ZWUoZSxcIlVwbG9hZCBuZXdcIik7cmV0dXJuIHImJm4/cjpudWxsfXQ9dC5wYXJlbnRFbGVtZW50fXJldHVybiBudWxsfWZ1bmN0aW9uIGVyKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGxvYWQtcmVzdW1lLWRyb3B6b25lXCIpO2lmKCFlKXJldHVybiBudWxsO2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKTtpZighSygpKXtsZXQgcj10LmZpbmQoZT0+IWUuZGlzYWJsZWQmJihlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInJlcGxhY2VcIikpPz9udWxsO3JldHVybiByfHwoWigpP2V0KGUpOm51bGwpfWxldCByPXQuZmluZChlPT57aWYoZS5kaXNhYmxlZClyZXR1cm4hMTtsZXQgdD0oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkscj0oZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKS50b0xvd2VyQ2FzZSgpO3JldHVybiBKLnNvbWUoZT0+dC5pbmNsdWRlcyhlKXx8ci5pbmNsdWRlcyhlKSl9KTtyZXR1cm4gcnx8KFEudGVzdCgoZS50ZXh0Q29udGVudHx8XCJcIikudG9Mb3dlckNhc2UoKSk/ZTpudWxsKX1hc3luYyBmdW5jdGlvbiBlbigpe2xldCBlPUsoKT8zMDoxMDAsdD1hd2FpdCAoMCxwLmRlZmF1bHQpKGVyLCgpPT4hMSxlKTtyZXR1cm4gdD8oY29uc29sZS5pbmZvKFwiW0VpZ2h0Zm9sZF1bUmVzdW1lXSB1cGxvYWQgY29tcGxldGlvbiBjb25maXJtZWRcIix7aG9zdDpsb2NhdGlvbi5ob3N0bmFtZSxjb21wbGV0aW9uU2lnbmFsOlooKSYmXCJwcmV2aWV3XCI9PT0odC50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk/XCJuZ2NfcHJldmlld191cGxvYWRfbmV3XCI6XCJzdGFuZGFyZFwifSksYXdhaXQgKDAsZC5kZWxheSkoMjAwKSwhMCk6KGNvbnNvbGUud2FybihcIltFaWdodGZvbGRdW1Jlc3VtZV0gdXBsb2FkIGNvbXBsZXRpb24gd2FzIG5vdCBjb25maXJtZWRcIix7aG9zdDpsb2NhdGlvbi5ob3N0bmFtZSxoYXNVcGxvYWREcm9wem9uZTohIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBsb2FkLXJlc3VtZS1kcm9wem9uZVwiKX0pLCExKX1hc3luYyBmdW5jdGlvbiBlbygpe2xldCBlPScudXBsb2FkLXJlc3VtZS1kcm9wem9uZSBidXR0b25bYXJpYS1sYWJlbD1cIkRlbGV0ZVwiXSwgLnVwbG9hZC1yZXN1bWUtZHJvcHpvbmUgYnV0dG9uW2FyaWEtbGFiZWxePVwiRGVsZXRlIGZpbGUgXCJdJyx0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7dCYmIXQuZGlzYWJsZWQmJih0LmNsaWNrKCksYXdhaXQgKDAscC5kZWZhdWx0KSgoKT0+IWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSksKCk9PiExLDMwKSl9ZnVuY3Rpb24gZWkoZSl7bGV0IHQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlc3QtaWRcIil8fGUuaWR8fFwiXCI7aWYodCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGVzdC1pZD1cIiR7dH0tY291bnRyeS1jb2RlXCJdIGlucHV0W3JvbGU9XCJjb21ib2JveFwiXSwgW2lkPVwiJHt0fS1jb3VudHJ5LWNvZGVcIl0gaW5wdXRbcm9sZT1cImNvbWJvYm94XCJdYCk7aWYoZSlyZXR1cm4gZX1sZXQgcj1lLnBhcmVudEVsZW1lbnQsbj04LG89MDtmb3IoO3ImJm88bjspe2xldCB0PUFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0nKSk7Zm9yKGxldCByIG9mIHQpe2lmKHI9PT1lKWNvbnRpbnVlO2xldCB0PShyLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpfHxcIlwiKS50b0xvd2VyQ2FzZSgpO2lmKHQuaW5jbHVkZXMoXCJjb3VudHJ5IGNvZGVcIikpcmV0dXJuIHJ9aWYocj1yLnBhcmVudEVsZW1lbnQsbysrLHI/LnRhZ05hbWU9PT1cIkZPUk1cInx8cj8udGFnTmFtZT09PVwiQk9EWVwiKWJyZWFrfXJldHVybiBudWxsfWZ1bmN0aW9uIGVhKGUpe2xldCB0PShcInN0cmluZ1wiPT10eXBlb2YgZT9lOlwiXCIpLm1hdGNoKC9cXCs/XFxzKihcXGR7MSw0fSlcXGIvKTtyZXR1cm4gdD8uWzFdfHxcIlwifWZ1bmN0aW9uIGVsKGUpe2xldCB0PW5ldyBTZXQscj1bXTtmb3IobGV0IG4gb2YgZSl7bGV0IGU9bi50cmltKCksbz1lLnRvTG93ZXJDYXNlKCk7IWV8fHQuaGFzKG8pfHwodC5hZGQobyksci5wdXNoKGUpKX1yZXR1cm4gcn1mdW5jdGlvbiBlcyhlLHQpe2xldCByPXcoZXx8XCJcIiksbj1lYShlKTtpZihcImNhbmFkYVwiPT09cnx8XCJjYVwiPT09cilyZXR1cm57Y2FuZGlkYXRlczp0P1tcIigrMSkgQ2FuYWRhXCIsXCJDYW5hZGFcIl06W1wiQ2FuYWRhXCJdLHNlbGVjdGVkVG9rZW5zOltcIkNhbmFkYVwiXSxmYWlsdXJlTGFiZWw6XCJjYW5hZGFcIn07aWYoXCJ1bml0ZWQgc3RhdGVzXCI9PT1yfHxcInVuaXRlZCBzdGF0ZXMgb2YgYW1lcmljYVwiPT09cnx8XCJ1c1wiPT09cnx8XCJ1c2FcIj09PXIpcmV0dXJue2NhbmRpZGF0ZXM6dD9bXCIoKzEpIFVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsXCJVbml0ZWQgU3RhdGVzXCJdOltcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLFwiVW5pdGVkIFN0YXRlc1wiXSxzZWxlY3RlZFRva2VuczpbXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIixcIlVuaXRlZCBTdGF0ZXNcIl0sZmFpbHVyZUxhYmVsOlwidW5pdGVkIHN0YXRlc1wifTtsZXQgbz0hIWooZXx8XCJcIiksaT1uP28/W2VdOnQ/W2UsYCgrJHtufSlgLGArJHtufWAsbl06W2UsYCske259YCxuXTpbZV07cmV0dXJue2NhbmRpZGF0ZXM6ZWwoaSksc2VsZWN0ZWRUb2tlbnM6ZWwoKG8/W2VdOltuLGVdKS5maWx0ZXIoQm9vbGVhbikpLGZhaWx1cmVMYWJlbDplfX1hc3luYyBmdW5jdGlvbiBldShlLHQpe2xldCByPVwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT09dD90OnZvaWQgMCxuPVwic3RyaW5nXCI9PXR5cGVvZiB0P3QudHJpbSgpOnZvaWQgMCxvPXI/LnVzZURpYWxDb2RlSW5Qcm9iZSE9PSExO2lmKCFuKXJldHVybjtsZXQgaT1lLnZhbHVlLHtjYW5kaWRhdGVzOmEsc2VsZWN0ZWRUb2tlbnM6bCxmYWlsdXJlTGFiZWw6dX09ZXMobixvKSxmPWFzeW5jIHQ9PntlLnZhbHVlPVwiXCIsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDgwKSxlLnZhbHVlPXQsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDI1MCl9LHA9KCk9Pmwuc29tZSh0PT5EKGUudmFsdWV8fFwiXCIsdCkpO2lmKHAoKSlyZXR1cm47bGV0IG09ITEsaD0odCxyKT0+e2lmKCFwKCkpcmV0dXJuITE7bGV0IG49cj8uZ2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiKT09PVwidHJ1ZVwiLG89XCJmYWxzZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpLGk9dyhlLnZhbHVlfHxcIlwiKSE9PXcodCk7cmV0dXJuIG58fG98fGl9O3RyeXtmb3IobGV0IHQ9MDt0PDM7dCsrKXtlLmZvY3VzKCksYXdhaXQgKDAsZC5kZWxheSkoMTIwKTtsZXQgcj1lLmNsb3Nlc3QoJ1tjbGFzcyo9XCJzZWxlY3QtaW5wdXQtd3JhcHBlclwiXScpfHxlLmNsb3Nlc3QoJ1tjbGFzcyo9XCJzZWxlY3Qtd3JhcHBlclwiXScpfHxlLnBhcmVudEVsZW1lbnQsbj1yPy5xdWVyeVNlbGVjdG9yKCdidXR0b25bcm9sZT1cInByZXNlbnRhdGlvblwiXSwgYnV0dG9uW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXScpO1widHJ1ZVwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpJiYobj9uLmNsaWNrKCk6ZS5jbGljaygpLGF3YWl0ICgwLGQuZGVsYXkpKDI1MCkpO2xldCBvPWFbTWF0aC5taW4odCxhLmxlbmd0aC0xKV18fGFbMF07YXdhaXQgZihvKTtsZXQgaT16KGUpO2lmKGkpe2xldCB0PSgwLGMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vLypbQHJvbGU9XCJvcHRpb25cIl0nLGkpO2lmKHQubGVuZ3RoPjApe2xldCByPW51bGwsbj0tMTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9UChTKGUpLGEpO3Q+biYmKG49dCxyPWUpfWlmKHImJm4+PTApe2lmKGF3YWl0IF8ociksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDE4MCksaChvLHIpKXttPSEwLGUuYmx1cigpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCk7cmV0dXJufX1lbHNle2UuYmx1cigpO2JyZWFrfX19aWYoZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJBcnJvd0Rvd25cIixidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDEyMCksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFbnRlclwiLGJ1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDIyMCksaChvKSl7bT0hMCxlLmJsdXIoKSxhd2FpdCAoMCxkLmRlbGF5KSgxMDApO3JldHVybn19dGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoUGhvbmVDb3VudHJ5Q29kZSkgQ291bGQgbm90IHNlbGVjdCBjb3VudHJ5IGNvZGUgZm9yIFwiJHt1fVwiYCl9ZmluYWxseXttfHwoYXdhaXQgZihpKSxlLmJsdXIoKSl9fWFzeW5jIGZ1bmN0aW9uIGVjKGUpe2UuZm9jdXMoKSxhd2FpdCAoMCxkLmRlbGF5KSg4MCk7bGV0IHQ9e2tleTpcIkVudGVyXCIsY29kZTpcIkVudGVyXCIsa2V5Q29kZToxMyx3aGljaDoxMyxidWJibGVzOiEwLGNvbXBvc2VkOiEwfTtlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIsdCkpLGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleXByZXNzXCIsdCkpLGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleXVwXCIsdCkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSxhd2FpdCAoMCxkLmRlbGF5KSgxMDApLGUuYmx1cigpLGF3YWl0ICgwLGQuZGVsYXkpKDUwKX1hc3luYyBmdW5jdGlvbiBlZChlLHQscj1cIlwiLG49XCJcIixvKXtsZXQgYT1lLmlkfHxlLm5hbWV8fFwiXCIsbD1lLmdldEF0dHJpYnV0ZShcImRhdGEtdGVzdC1pZFwiKXx8XCJcIixzPWEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInBob25lXCIpfHxsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJwaG9uZVwiKXx8ci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwicGhvbmVcIik7aWYocyYmIWEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImNvdW50cnktY29kZVwiKSl7bGV0IHI9ZWkoZSk7aWYocil7bGV0IGU9KDAsdS5yZXNvbHZlUGhvbmVDb3VudHJ5U291cmNlKSh0LG4sbyk7aWYodD0oMCxtLnJlc29sdmVFaWdodGZvbGRQaG9uZVZhbHVlKSh0LG4sbyksZSl0cnl7YXdhaXQgZXUocixlKX1jYXRjaHt9fWVsc2V7bGV0IGU9bi5yZXBsYWNlKC9cXEQvZyxcIlwiKTt0PWUrdC5yZXBsYWNlKC9cXEQvZyxcIlwiKX19ZS5mb2N1cygpLGUuZGlzcGF0Y2hFdmVudChuZXcgRm9jdXNFdmVudChcImZvY3VzaW5cIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxkLmRlbGF5KSgxMDApO2xldCBjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ/d2luZG93LkhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlOndpbmRvdy5IVE1MVGV4dEFyZWFFbGVtZW50LnByb3RvdHlwZSxcInZhbHVlXCIpPy5zZXQ7Yz9jLmNhbGwoZSxcIlwiKTplLnZhbHVlPVwiXCIsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDUwKSxjP2MuY2FsbChlLHQpOmUudmFsdWU9dCxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY29tcG9zZWQ6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleXVwXCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5cHJlc3NcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxkLmRlbGF5KSgxMDApLGUuZGlzcGF0Y2hFdmVudChuZXcgRm9jdXNFdmVudChcImZvY3Vzb3V0XCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsZC5kZWxheSkoMTAwKSxlLmJsdXIoKSxhd2FpdCAoMCxkLmRlbGF5KSgxMDApO2xldCBmPWUudmFsdWU7ZiE9PXQmJihjP2MuY2FsbChlLHQpOmUudmFsdWU9dCxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsZC5kZWxheSkoNTApLGUudmFsdWUhPT10JiYoYXdhaXQgKDAsaS5maWxsRGVmYXVsdElucHV0RmllbGQpKGUsdCksYXdhaXQgKDAsZC5kZWxheSkoNTApKSk7bGV0IHA9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpLGg9cD8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocCk/LnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTpcIlwiLGc9XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiKSxiPWguaW5jbHVkZXMoXCJjYW5ub3QgYmUgbGVmdCBibGFua1wiKXx8aC5pbmNsdWRlcyhcImNhbm5vdCBiZSBibGFua1wiKXx8aC5pbmNsdWRlcyhcInJlcXVpcmVkXCIpO2lmKFwiXCIhPT1TdHJpbmcodCkudHJpbSgpJiZnJiZiKXtlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY29tcG9zZWQ6ITB9KSksYXdhaXQgKDAsZC5kZWxheSkoODApLGUuYmx1cigpLGF3YWl0ICgwLGQuZGVsYXkpKDgwKTtsZXQgdD1kb2N1bWVudC5ib2R5fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dCYmKHQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwfSkpLHQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIix7YnViYmxlczohMH0pKSx0LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCkpfX1hc3luYyBmdW5jdGlvbiBlZihlLHQscil7bGV0IG49ZS5sYWJlbCxvPUEobiksaT1vP3Yocik6W107aWYobyYmMD09PWkubGVuZ3RofHwobyYmKHQ9W2lbMF1dKSwhbyYmKCF0fHwwPT09dC5sZW5ndGgpKSlyZXR1cm47bGV0IGE9dC5maW5kKGU9PmU/LnRyaW0oKSl8fFwiXCIsbD1lLiRpbnB1dDtpZighbCl0aHJvdyBuZXcgcy5GaWxsRXJyb3IoYChTZWxlY3QpIENvdWxkIG5vdCBmaW5kIGZpZWxkIGZvciBsYWJlbDogXCIke259XCJgKTtpZihvJiZsIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCl7bGV0IGU9YXdhaXQgSChsLGkpO2lmKCFlKXRocm93IG5ldyBzLkZpbGxFcnJvcihgKFNlbGVjdCkgT3B0aW9uIG5vdCBmb3VuZDogXCIke2F9XCIgZm9yIGxhYmVsOiBcIiR7bn1cImApO3JldHVybn1pZihvJiZsIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpe2xldCBlPSgwLGMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9vcHRpb25cIixsKS5maW5kKGU9Pmkuc29tZSh0PT5EKGUudGV4dENvbnRlbnR8fFwiXCIsdCl8fEQoZS52YWx1ZXx8XCJcIix0KSkpO2lmKCFlKXRocm93IG5ldyBzLkZpbGxFcnJvcihgKFNlbGVjdCkgT3B0aW9uIG5vdCBmb3VuZDogXCIke2F9XCIgZm9yIGxhYmVsOiBcIiR7bn1cImApO2wudmFsdWU9ZS52YWx1ZSxsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsZC5kZWxheSkoMTAwKSxsLmJsdXIoKSxhd2FpdCAoMCxkLmRlbGF5KSgxMDApO3JldHVybn1pZihsIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmXCJjb21ib2JveFwiPT09bC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpKXtsZXQgZT0obC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhhc3BvcHVwXCIpfHxcIlwiKS50b0xvd2VyQ2FzZSgpLHQ9KGwuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIil8fFwiXCIpLnRvTG93ZXJDYXNlKCkscj1cImRpYWxvZ1wiPT09ZXx8XCJkYXRlXCI9PT1sLnR5cGV8fHQuaW5jbHVkZXMoXCJkYXRlXCIpO2lmKHIpe2F3YWl0IGVkKGwsYSxuKSxhd2FpdCBlYyhsKTtyZXR1cm59bGV0IHU9bC52YWx1ZXx8XCJcIixmPXUscD1vP0kodSxpKTpGKHUsYSk7aWYocClyZXR1cm47bC5mb2N1cygpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCk7bGV0IG09KDAsYy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2J1dHRvbltAcm9sZT1cInByZXNlbnRhdGlvblwiXScsbC5wYXJlbnRFbGVtZW50KTttJiYobS5jbGljaygpLGF3YWl0ICgwLGQuZGVsYXkpKDMwMCkpO2xldCBoPXoobCk7aWYoaCl7bGV0IGU9KDAsYy5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vKltAcm9sZT1cIm9wdGlvblwiXScsaCksdD1UKGUsYSk7aWYodCl7YXdhaXQgTShsLHQsYSxuLGYpO3JldHVybn19bC52YWx1ZT1cIlwiLGwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxkLmRlbGF5KSg0MDApLGwudmFsdWU9YSxsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsZC5kZWxheSkoNjAwKTtsZXQgZz1sLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiksYj1udWxsO2lmKGcmJihiPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGcpKSxifHxnfHwoYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImxpc3Rib3hcIl0nKSksYnx8IW18fChtLmNsaWNrKCksYXdhaXQgKDAsZC5kZWxheSkoMzAwKSxnJiYoYj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChnKSksYnx8Z3x8KGI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJsaXN0Ym94XCJdJykpKSwhYiYmbyYmKGI9YXdhaXQgVihsLDE1LDIwMCkpLCFiJiZvKXtmb3IobGV0IGUgb2YgaS5zbGljZSgxKSlpZihsLnZhbHVlPVwiXCIsbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDQwMCksbC52YWx1ZT1lLGwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxkLmRlbGF5KSg2MDApLGI9YXdhaXQgVihsLDE1LDIwMCkpYnJlYWt9aWYoIWIpdGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoU2VsZWN0KSBEcm9wZG93biBtZW51IGRpZCBub3QgYXBwZWFyIGZvciBsYWJlbDogXCIke259XCJgKTthd2FpdCAoMCxkLmRlbGF5KSgyMDApO2xldCB5PSgwLGMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vL2J1dHRvbltAcm9sZT1cIm9wdGlvblwiXScsYik7aWYoMD09PXkubGVuZ3RoKXtpZihvKXthd2FpdCAoMCxkLmRlbGF5KSgxZTMpO2xldCBlPSgwLGMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vL2J1dHRvbltAcm9sZT1cIm9wdGlvblwiXScsYik7aWYoMD09PWUubGVuZ3RoKXRocm93IG5ldyBzLkZpbGxFcnJvcihgKFNlbGVjdCkgTm8gb3B0aW9ucyBmb3VuZCBpbiBkcm9wZG93biBmb3IgbGFiZWw6IFwiJHtufVwiYCk7bGV0IHQ9VChlLGEpO2lmKHQpdC5jbGljaygpLGF3YWl0ICgwLGQuZGVsYXkpKDIwMCk7ZWxzZSB0aHJvdyBPKGwsZiksbmV3IHMuRmlsbEVycm9yKGAoU2VsZWN0KSBFeGFjdCBvcHRpb24gbm90IGZvdW5kOiBcIiR7YX1cIiBmb3IgbGFiZWw6IFwiJHtufVwiYCk7bC5ibHVyKCksYXdhaXQgKDAsZC5kZWxheSkoMTAwKTtyZXR1cm59dGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoU2VsZWN0KSBObyBvcHRpb25zIGZvdW5kIGluIGRyb3Bkb3duIGZvciBsYWJlbDogXCIke259XCJgKX1sZXQgdj1UKHksYSk7aWYoIXYpdGhyb3cgY29uc29sZS53YXJuKFwiW0VpZ2h0Zm9sZF1bU2VsZWN0XSBleGFjdCBvcHRpb24gd2FzIG5vdCBmb3VuZFwiLHtsYWJlbDpuLG9wdGlvbkNvdW50OnkubGVuZ3RofSksTyhsLGYpLGwuYmx1cigpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCksbmV3IHMuRmlsbEVycm9yKGAoU2VsZWN0KSBPcHRpb24gbm90IGZvdW5kOiBcIiR7YX1cIiBmb3IgbGFiZWw6IFwiJHtufVwiYCk7YXdhaXQgTShsLHYsYSxuLGYpO3JldHVybn1pZihsIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpe2wuZm9jdXMoKSxhd2FpdCAoMCxkLmRlbGF5KSgxMDApO2xldCBlPSgwLGMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9vcHRpb25cIixsKS5maW5kKGU9PmUudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk9PT1hLnRvTG93ZXJDYXNlKCl8fGUudmFsdWUudG9Mb3dlckNhc2UoKT09PWEudG9Mb3dlckNhc2UoKSk7aWYoZSlsLnZhbHVlPWUudmFsdWUsbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCksbC5ibHVyKCksYXdhaXQgKDAsZC5kZWxheSkoMTAwKTtlbHNlIHRocm93IG5ldyBzLkZpbGxFcnJvcihgKFNlbGVjdCkgT3B0aW9uIG5vdCBmb3VuZDogXCIke2F9XCIgZm9yIGxhYmVsOiBcIiR7bn1cImApfX1hc3luYyBmdW5jdGlvbiBlcChlLHQpe2lmKHQmJjAhPT10Lmxlbmd0aClmb3IobGV0IHIgb2YgdCl7bGV0IHQ9QXJyYXkuZnJvbShlLiRjaGVja2JveHN8fFtdKSxuPXQuZmlsdGVyKGU9PmVoKGUscikpLG89bi5sZW5ndGg+MD9uOjE9PT10Lmxlbmd0aCYmZWcocik/dDpbXTtpZihvLmxlbmd0aD4wKXtmb3IobGV0IGUgb2Ygbylhd2FpdCBleShlKTtjb250aW51ZX1sZXQgaT1udWxsLGE9YC4vL2lucHV0W0B0eXBlPSdjaGVja2JveCddW1xyXG4gICAgICBAdmFsdWU9JHsoMCxjLmVzY2FwZVhQYXRoKShyKX0gb3JcclxuICAgICAgZm9sbG93aW5nLXNpYmxpbmc6Oipbbm9ybWFsaXplLXNwYWNlKCk9JHsoMCxjLmVzY2FwZVhQYXRoKShyKX1dIG9yXHJcbiAgICAgIHBhcmVudDo6bGFiZWxbbm9ybWFsaXplLXNwYWNlKCk9JHsoMCxjLmVzY2FwZVhQYXRoKShyKX1dXHJcbiAgICBdYDsoaT0oMCxjLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShhKSkmJiFpLmNoZWNrZWQmJihpLmZvY3VzKCksYXdhaXQgKDAsZC5kZWxheSkoNTApLGkuY2xpY2soKSxhd2FpdCAoMCxkLmRlbGF5KSgxMDApLGkuYmx1cigpLGF3YWl0ICgwLGQuZGVsYXkpKDUwKSl9fWZ1bmN0aW9uIGVtKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gZWgoZSx0KXtsZXQgcj1lbSh0KTtpZighcilyZXR1cm4hMTtsZXQgbj1lLGk9W2UuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIixlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfHxcIlwiLG4udmFsdWV8fFwiXCIsZS50ZXh0Q29udGVudHx8XCJcIl07cmV0dXJuIGkuc29tZShlPT57bGV0IHQ9ZW0oZSk7cmV0dXJuIHQ9PT1yfHwhIXQmJigwLG8uaXNFeGFjdENob2ljZU1hdGNoKSh0LHIpfSl9ZnVuY3Rpb24gZWcoZSl7cmV0dXJuW1wieWVzXCIsXCJ0cnVlXCIsXCJhZ3JlZVwiLFwiYWdyZWVkXCJdLmluY2x1ZGVzKGVtKGUpKX1mdW5jdGlvbiBlYihlKXtsZXQgdD1lLHI9ZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIjtyZXR1cm4gdC5jaGVja2VkfHxcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIpfHxyLmluY2x1ZGVzKFwiZmEtY2hlY2tcIil8fHIuaW5jbHVkZXMoXCJjaGVja2VkXCIpfWFzeW5jIGZ1bmN0aW9uIGV5KGUpe2ViKGUpfHwoZS5mb2N1cygpLGF3YWl0ICgwLGQuZGVsYXkpKDUwKSxlLmNsaWNrKCksYXdhaXQgKDAsZC5kZWxheSkoMTAwKSxlLmJsdXIoKSxhd2FpdCAoMCxkLmRlbGF5KSg1MCkpfWFzeW5jIGZ1bmN0aW9uIGV2KGUsdCl7bGV0IHI9ZS5sYWJlbCxuPXQ/LlswXTtpZighbilyZXR1cm47bGV0IGk9bnVsbDtpZihlLiRyYWRpb1BhcmVudCl7bGV0IHQ9KDAsYy5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJyYWRpb1wiXScsZS4kcmFkaW9QYXJlbnQpO2k9KDAsby5maW5kRXhhY3RDaG9pY2UpKHQsbixlPT57bGV0IHQ9KDAsYy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoYC8vbGFiZWxbQGZvcj1cIiR7ZS5pZH1cIl1gKSxyPXQ/LnRleHRDb250ZW50Py50cmltKCl8fGUudmFsdWV8fFwiXCI7cmV0dXJuIHJ9LGU9PmUudmFsdWUpfHxudWxsfWlmKCFpKXtsZXQgZT1gLi8vaW5wdXRbQHR5cGU9J3JhZGlvJ11bXHJcbiAgICAgIEB2YWx1ZT0keygwLGMuZXNjYXBlWFBhdGgpKG4pfSBvclxyXG4gICAgICBmb2xsb3dpbmctc2libGluZzo6Kltub3JtYWxpemUtc3BhY2UoKT0keygwLGMuZXNjYXBlWFBhdGgpKG4pfV0gb3JcclxuICAgICAgcGFyZW50OjpsYWJlbFtub3JtYWxpemUtc3BhY2UoKT0keygwLGMuZXNjYXBlWFBhdGgpKG4pfV1cclxuICAgIF1gO2k9KDAsYy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoZSl9aWYoaSYmIWkuY2hlY2tlZClpLmZvY3VzKCksYXdhaXQgKDAsZC5kZWxheSkoNTApLGkuY2xpY2soKSxhd2FpdCAoMCxkLmRlbGF5KSgxMDApLGkuYmx1cigpLGF3YWl0ICgwLGQuZGVsYXkpKDUwKTtlbHNlIGlmKCFpKXRocm93IG5ldyBzLkZpbGxFcnJvcihgKFJhZGlvKSBObyBvcHRpb24gXCIke259XCIgZm91bmQgZm9yIGxhYmVsOiBcIiR7cn1cImApfWFzeW5jIGZ1bmN0aW9uIGV3KGUpe2lmKCFlKXRocm93IEVycm9yKFwiKERhdGEgUHJpdmFjeSBBZ3JlZW1lbnQpIEJ1dHRvbiBub3QgZm91bmRcIik7bGV0IHQ9ZS5kaXNhYmxlZDtpZih0KXRocm93IEVycm9yKFwiKERhdGEgUHJpdmFjeSBBZ3JlZW1lbnQpIEJ1dHRvbiBpcyBkaXNhYmxlZFwiKTtlLmNsaWNrKCl9XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJvcGVyYXRpb25zLjFiZmU5ZGY4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);