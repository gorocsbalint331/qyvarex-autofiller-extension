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
})({"4zF6J":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\hrmdirect\\operations.js",
    "bundleId": "be7158f6c20e90fc",
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
var j = z(require("dc9b304031d4f1ab"));
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

},{"dc9b304031d4f1ab":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"5jDmX":[function(require,module,exports) {
/**
 * Parcel module id: 9yJqz
 * Resolved path: src/contents/sites/hrmdirect/operations.js
 * Dependencies:
 *   ./answer -> 3fn7Y  =>  src/contents/sites/hrmdirect/answer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getHrmdirectResumeUploadDom", ()=>w), n.export(r, "hasHrmdirectUploadedResume", ()=>S), n.export(r, "getHrmdirectCoverLetterUploadDom", ()=>E), n.export(r, "getHrmdirectCoverLetterStatus", ()=>x), n.export(r, "fillInputTextField", ()=>I), n.export(r, "fillDateField", ()=>j), n.export(r, "fillSelectField", ()=>P), n.export(r, "fillRadioGroupFiled", ()=>_), n.export(r, "fillCheckboxField", ()=>L), n.export(r, "uploadResume", ()=>R), n.export(r, "uploadCoverLetter", ()=>O), n.export(r, "removeResume", ()=>M), n.export(r, "reinitializeEducationAndEmployment", ()=>N), n.export(r, "countEduOrExpSections", ()=>$), n.export(r, "deleteEduOrExpSections", ()=>B), n.export(r, "addEduOrExpSection", ()=>q), n.export(r, "preFillForm", ()=>U);
var o = e("~contents/methods/choice-match"), i = e("~contents/methods/answer"), a = e("~core/xpath"), l = e("~contents/methods/observer"), s = e("~utils/delay"), u = e("./answer");
function c(e1) {
    return (e1 || "").trim().replace(/\s+/g, " ").toLowerCase();
}
function d(e1) {
    if (!e1) return {
        field: null,
        labelText: "",
        input: null,
        uploadedList: null,
        uploadedRow: null,
        uploadedFileName: null,
        deleteButton: null
    };
    let t = e1.querySelector("tbody.file-list.single-file-list"), r1 = t?.querySelector("tr.file-row"), n = r1?.querySelector(".file-name"), o = r1?.querySelector(".remove-button");
    return {
        field: e1,
        labelText: c(e1.querySelector(".control-label.field-title")?.textContent),
        input: e1.querySelector('input[type="file"].file-upload'),
        uploadedList: t,
        uploadedRow: r1,
        uploadedFileName: n,
        deleteButton: o
    };
}
function f(e1) {
    if (e1.closest(".hidden, [hidden], [aria-hidden='true'], .tab-pane:not(.active), .collapse:not(.in), .panel-collapse:not(.in)")) return !1;
    let t = window.getComputedStyle(e1);
    return "none" !== t.display && "hidden" !== t.visibility && 0 !== Number(t.opacity || "1") && ("function" == typeof e1.checkVisibility ? e1.checkVisibility() : !!e1.offsetParent || "fixed" === t.position);
}
function p() {
    return Array.from(document.querySelectorAll("div.form-field.qa-resume-upload")).filter((e1)=>f(e1));
}
function m(e1) {
    for (let t of p()){
        let r1 = d(t);
        if (e1(r1)) return r1;
    }
    return d(null);
}
function h(e1) {
    return !e1.field?.classList.contains("coverletter") && (e1.labelText.includes("resume") || e1.labelText.includes("cv"));
}
function g(e1) {
    return !!e1.field?.classList.contains("coverletter") || e1.labelText.includes("cover letter");
}
function b(e1) {
    return !!e1.field && !!e1.input && "file" === e1.input.type && !!e1.uploadedList;
}
function y(e1, t) {
    let r1 = e1.uploadedFileName?.textContent?.trim() || "";
    return !!e1.uploadedRow && !!r1 && (!t || c(r1) === c(t));
}
function v(e1, t) {
    if (!b(e1) || !b(t)) return !1;
    let r1 = (e1)=>[
            e1.input?.className || "",
            e1.uploadedList?.className || "",
            !!e1.field?.querySelector("table.table.table-condensed.table-hover"),
            !!e1.field?.querySelector(".fileupload-buttonbar"),
            !!e1.field?.querySelector(".fileinput-button")
        ].join("|");
    return r1(e1) === r1(t);
}
function w() {
    return m(h);
}
function S() {
    return y(w());
}
_c = S;
function E() {
    return m(g);
}
_c1 = E;
function x() {
    let e1 = w(), t = E();
    return b(e1) && b(t) && v(e1, t) ? "required" : "";
}
async function C(e1, t) {
    e1.files = t.files, e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !1
    }));
}
_c2 = C;
async function A(e1) {
    y(e1) && e1.deleteButton && (e1.deleteButton.click(), await (0, l.waitForCondition)(()=>{
        let t = g(e1) ? E() : w();
        return !t.uploadedRow;
    }, {
        timeout: 5e3,
        interval: 100,
        observeTarget: e1.field || document.body
    }));
}
_c3 = A;
function k(e1) {
    return String(e1 ?? "").replace(/\s*\*\s*$/, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function T(e1) {
    return k(e1.querySelector(".control-label.field-title, label.control-label, label")?.textContent);
}
_c4 = T;
function F(e1) {
    let t = e1?.$input;
    if (t?.isConnected) return t;
    let r1 = document.querySelector("form.section-form");
    if (!r1) return null;
    let n = k(e1.label), o = Array.from(r1.querySelectorAll(".form-field")).filter((e1)=>T(e1) === n).map((e1)=>e1.querySelector("input[type='text'], input[type='email'], input[type='tel'], input[type='number'], input:not([type]), textarea")).filter((e1)=>!!e1?.isConnected);
    return 1 === o.length ? o[0] : null;
}
_c5 = F;
async function I(e1, t) {
    if (e1.label.toLowerCase().includes("position applying for")) {
        let e1 = (0, a.getFirstOrderedNodeSafe)('//*[@id="main-app-row"]/div/div[1]/div[2]/p');
        t = e1.textContent?.trim() || t;
    }
    for(let r1 = 0; r1 < 2; r1++){
        let r1 = F(e1);
        if (!r1) return console.warn("[HRMDirect Text] current input not found", {
            label: e1?.label
        }), !1;
        if (r1.focus(), await (0, s.delay)(100), r1.value = "", r1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), await (0, s.delay)(100), !(r1 = F(e1))) continue;
        r1.value = t, r1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), r1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), r1.blur(), await (0, s.delay)(100);
        let n = F(e1);
        if (n?.value === t) return !0;
    }
    return console.warn("[HRMDirect Text] commit readback failed", {
        label: e1.label
    }), !1;
}
_c6 = I;
async function j(e1, t) {
    if (!e1 || !(e1 instanceof HTMLInputElement) || !t) return;
    if ("current" === t[0]) {
        try {
            let t = e1.parentElement;
            if (!t) {
                console.warn("[fillDateField] Parent element not found");
                return;
            }
            let r1 = t.nextElementSibling;
            if (!r1) {
                console.warn("[fillDateField] Next sibling element not found");
                return;
            }
            let n = r1.querySelector("input");
            if (!n) {
                console.warn("[fillDateField] Checkbox input not found in next sibling");
                return;
            }
            if ("checkbox" !== n.type) {
                console.warn(`[fillDateField] Found input is not a checkbox, type: ${n.type}`);
                return;
            }
            n.focus(), await (0, s.delay)(100), n.checked || (n.click(), await (0, s.delay)(150), n.dispatchEvent(new Event("change", {
                bubbles: !0
            })), n.dispatchEvent(new Event("input", {
                bubbles: !0
            })), await (0, s.delay)(100)), n.blur();
        } catch (e1) {
            console.error("[fillDateField] Error handling 'current' checkbox:", e1);
        }
        return;
    }
    e1.focus(), await (0, s.delay)(100);
    let r1 = (0, u.formatDate)(t);
    e1.value = r1, e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.blur(), await (0, s.delay)(100);
}
function D(e1) {
    return e1 ? e1.toString().toLowerCase().replace(/[^a-z0-9]/g, "") : "";
}
_c7 = D;
async function P(e1, t) {
    let r1 = e1.$input;
    if (!r1 || "SELECT" !== r1.tagName) return console.warn("[HRMDirect Select] live control is not a select", {
        label: e1.label,
        tagName: r1?.tagName,
        connected: r1?.isConnected
    }), !1;
    let n = Array.isArray(t) ? t[0] : t;
    D(n);
    let i = [
        (e1, t)=>(0, o.isExactChoiceMatch)(e1, "boolean" == typeof n ? String(n) : n),
        (e1, t)=>(0, o.isExactChoiceMatch)(t, "boolean" == typeof n ? String(n) : n)
    ];
    for (let e1 of i)for(let t = 0; t < r1.options.length; t++){
        let n = r1.options[t], o = n.textContent?.trim() || "", i = n.value || "";
        if ((o || i) && e1(o, i)) return r1.selectedIndex = t, r1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, s.delay)(100), !0;
    }
    return console.warn(`fillSelectField: No matching option found for "${n}".`, `Available: ${Array.from(r1.options).map((e1)=>e1.textContent?.trim() || e1.value).join(" | ")}`), !1;
}
_c8 = P;
async function _(e1, t) {
    let r1 = Array.isArray(t) ? t[0] : t, n = e1.$input;
    if (!n) {
        console.warn("fillRadioGroupFiled: Radio group input element missing");
        return;
    }
    let i = n.closest(".form-group.radio-group, .form-field") || n.closest("form") || document.body, a = n.name, l = Array.from(i.querySelectorAll('input[type="radio"]')), u = a ? l.filter((e1)=>e1.name === a) : l;
    if (0 === u.length) {
        console.warn("fillRadioGroupFiled: No radios found for group:", a);
        return;
    }
    let c = (e1)=>{
        let t = "", r1 = e1.closest("label");
        if (r1 && (t = r1.textContent?.trim() || ""), !t && e1.id) {
            let r1 = i.querySelector(`label[for="${e1.id}"]`);
            r1 && (t = r1.textContent?.trim() || "");
        }
        return t || e1.parentElement?.tagName !== "LABEL" || (t = e1.parentElement.textContent?.trim() || ""), t || (t = e1.nextElementSibling?.textContent?.trim() || ""), t || (t = e1.parentElement?.nextElementSibling?.textContent?.trim() || ""), t || "";
    };
    D(r1);
    let d = [
        (e1, t)=>(0, o.isExactChoiceMatch)(e1, "boolean" == typeof r1 ? String(r1) : r1),
        (e1, t)=>(0, o.isExactChoiceMatch)(t, "boolean" == typeof r1 ? String(r1) : r1)
    ];
    for (let e1 of d)for (let t of u){
        let r1 = c(t), n = t.value;
        if (e1(r1, n)) {
            t.checked || (t.click(), await (0, s.delay)(100), t.checked || (t.checked = !0, t.dispatchEvent(new Event("input", {
                bubbles: !0
            })), t.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, s.delay)(100)));
            return;
        }
    }
    let f = u.map((e1)=>{
        let t = c(e1);
        return `"${t || e1.value}"`;
    }).join(", ");
    console.warn(`fillRadioGroupFiled: No matching radio option found for value "${r1}". Total radios in group: ${u.length}. Available options: ${f}`);
}
async function L(e1, t) {
    let r1 = e1, n = r1.$checkboxs;
    if (!n || 0 === n.length) {
        let e1 = r1.$input;
        n = e1 && e1.name ? Array.from(document.querySelectorAll(`input[type="checkbox"][name="${e1.name}"]`)) : e1 ? [
            e1
        ] : [];
    }
    if (0 === n.length) {
        console.warn("fillCheckboxField: No checkboxes found");
        return;
    }
    let o = async (e1, t)=>{
        if (e1.checked === t) return;
        e1.click(), await (0, s.delay)(150);
        let r1 = 0;
        for(; e1.checked !== t && r1 < 3;)e1.checked = t, e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), await (0, s.delay)(100), r1++;
        e1.checked !== t && console.warn(`fillCheckboxField: Failed to set checkbox state to ${t}`);
    }, i = (e1)=>{
        if (e1.id) {
            let t = document.querySelector(`label[for="${e1.id}"]`);
            if (t) return t.textContent?.trim() || "";
        }
        if (e1.parentElement?.tagName === "LABEL") return e1.parentElement.textContent?.trim() || "";
        let t = e1.closest("label");
        return t ? t.textContent?.trim() || "" : e1.value || "";
    };
    if (Array.isArray(t)) {
        let e1 = t.map((e1)=>String(e1).trim());
        for (let t of n){
            let r1 = t, n = i(r1);
            if (!n) {
                console.warn("fillCheckboxField: Cannot determine label text for", r1);
                continue;
            }
            let a = e1.includes(n);
            await o(r1, a);
        }
        return;
    }
    let a = !0 === t || "Yes" === t || "true" === t || "yes" === String(t).toLowerCase();
    for (let e1 of n){
        let t = e1;
        await o(t, a);
    }
}
_c9 = L;
async function R(e1, t, r1) {
    let n = w();
    if (!b(n) || !n.input) {
        console.warn("No resume field found");
        return;
    }
    await A(n), t({
        label: "Resume/CV",
        required: !0
    });
    let o = await (0, i.fetchPdfAsBlob)(e1), a = o.files?.[0]?.name || "";
    await C(n.input, o);
    let s = await (0, l.waitForCondition)(()=>{
        let e1 = w();
        return y(e1, a);
    }, {
        timeout: 1e4,
        interval: 100,
        observeTarget: n.field || document.body
    });
    s && r1("Resume/CV");
}
_c10 = R;
async function O(e1, t, r1) {
    let n = E();
    if ("required" !== x() || !b(n) || !n.input) return !1;
    await A(n), t({
        label: "Cover Letter",
        required: !0
    });
    let o = `${e1.coverLetterName}.pdf`;
    return await C(n.input, await (0, i.fetchCoverLetterPdfAsBlob)(e1)), await (0, l.waitForCondition)(()=>{
        let e1 = E();
        return y(e1, o);
    }, {
        timeout: 1e4,
        interval: 100,
        observeTarget: n.field || document.body
    }).then((e1)=>(e1 && r1("Cover Letter"), e1));
}
_c11 = O;
async function M() {
    let e1 = document.querySelector('a[data-localized-key="forms.application.file-remove"]');
    e1 && (e1.click(), await (0, s.delay)(500));
}
_c12 = M;
async function N() {
    let e1 = (0, a.getOrderedNodesSafe)('.//a[@class="btn btn-block-xs btn-default add-row-button" and ancestor::div[@class="section-container"]]/ancestor::div[@class="section-container"]');
    if (0 !== e1.length) for (let t of e1)await B(t);
}
_c13 = N;
function $(e1) {
    return (0, a.getOrderedNodesSafe)('.//div[@class="section-repeatable"]', e1).length;
}
async function B(e1) {
    let t = (0, a.getOrderedNodesSafe)('.//a[@class="btn btn-xs btn-default hidden-print remove-row-button"]', e1);
    if (1 !== t.length) for (let e1 of t){
        e1.click(), await (0, s.delay)(500);
        let t = (0, a.getFirstOrderedNodeSafe)("//button[@data-bb-handler='confirm' and text()='Remove']");
        if (!t) return;
        t.click(), await (0, s.delay)(200);
    }
}
_c14 = B;
async function q(e1) {
    let t = (0, a.getFirstOrderedNodeSafe)('.//a[@class="btn btn-block-xs btn-default add-row-button"]', e1);
    if (!t) {
        console.warn("[addEduOrExpSection] Add button not found");
        return;
    }
    let r1 = $(e1);
    t.click(), await (0, s.delay)(200);
    let n = $(e1), o = 0, i = 30;
    for(; n === r1 && o < i;)await (0, s.delay)(100), n = $(e1), o++;
    n <= r1 && console.warn(`[addEduOrExpSection] \u2717 Failed to add section. Count remained: ${n}`), await (0, s.delay)(300);
}
async function U() {
    await (0, s.delay)(500);
}
_c15 = U;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
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

},{}]},["4zF6J","5jDmX"], "5jDmX", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LEVBQUUsS0FBRztJQUFJLEtBQUcsTUFBRyxRQUFRLEtBQUssQ0FBQyxtRUFBbUUsRUFBRSxFQUFFLENBQUMsR0FBRSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO0FBQUk7QUFBQyxlQUFlO0lBQUksTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztBQUFJO09BQTFCIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS05ODZhNzBmOGNiYmVhZmNiLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2hybWRpcmVjdC9vcGVyYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGhybWRpcmVjdFxcXFxvcGVyYXRpb25zLmpzXCIsXCJidW5kbGVJZFwiOlwiYmU3MTU4ZjZjMjBlOTBmY1wiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDl5SnF6XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9ocm1kaXJlY3Qvb3BlcmF0aW9ucy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXIgLT4gM2ZuN1kgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvaHJtZGlyZWN0L2Fuc3dlci5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoIC0+IDZta0k0ICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXIgLT4gZVR6VXggID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9vYnNlcnZlci5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJnZXRIcm1kaXJlY3RSZXN1bWVVcGxvYWREb21cIiwoKT0+dyksbi5leHBvcnQocixcImhhc0hybWRpcmVjdFVwbG9hZGVkUmVzdW1lXCIsKCk9PlMpLG4uZXhwb3J0KHIsXCJnZXRIcm1kaXJlY3RDb3ZlckxldHRlclVwbG9hZERvbVwiLCgpPT5FKSxuLmV4cG9ydChyLFwiZ2V0SHJtZGlyZWN0Q292ZXJMZXR0ZXJTdGF0dXNcIiwoKT0+eCksbi5leHBvcnQocixcImZpbGxJbnB1dFRleHRGaWVsZFwiLCgpPT5JKSxuLmV4cG9ydChyLFwiZmlsbERhdGVGaWVsZFwiLCgpPT5qKSxuLmV4cG9ydChyLFwiZmlsbFNlbGVjdEZpZWxkXCIsKCk9PlApLG4uZXhwb3J0KHIsXCJmaWxsUmFkaW9Hcm91cEZpbGVkXCIsKCk9Pl8pLG4uZXhwb3J0KHIsXCJmaWxsQ2hlY2tib3hGaWVsZFwiLCgpPT5MKSxuLmV4cG9ydChyLFwidXBsb2FkUmVzdW1lXCIsKCk9PlIpLG4uZXhwb3J0KHIsXCJ1cGxvYWRDb3ZlckxldHRlclwiLCgpPT5PKSxuLmV4cG9ydChyLFwicmVtb3ZlUmVzdW1lXCIsKCk9Pk0pLG4uZXhwb3J0KHIsXCJyZWluaXRpYWxpemVFZHVjYXRpb25BbmRFbXBsb3ltZW50XCIsKCk9Pk4pLG4uZXhwb3J0KHIsXCJjb3VudEVkdU9yRXhwU2VjdGlvbnNcIiwoKT0+JCksbi5leHBvcnQocixcImRlbGV0ZUVkdU9yRXhwU2VjdGlvbnNcIiwoKT0+Qiksbi5leHBvcnQocixcImFkZEVkdU9yRXhwU2VjdGlvblwiLCgpPT5xKSxuLmV4cG9ydChyLFwicHJlRmlsbEZvcm1cIiwoKT0+VSk7dmFyIG89ZShcIn5jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaFwiKSxpPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksYT1lKFwifmNvcmUveHBhdGhcIiksbD1lKFwifmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXJcIikscz1lKFwifnV0aWxzL2RlbGF5XCIpLHU9ZShcIi4vYW5zd2VyXCIpO2Z1bmN0aW9uIGMoZSl7cmV0dXJuKGV8fFwiXCIpLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gZChlKXtpZighZSlyZXR1cm57ZmllbGQ6bnVsbCxsYWJlbFRleHQ6XCJcIixpbnB1dDpudWxsLHVwbG9hZGVkTGlzdDpudWxsLHVwbG9hZGVkUm93Om51bGwsdXBsb2FkZWRGaWxlTmFtZTpudWxsLGRlbGV0ZUJ1dHRvbjpudWxsfTtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keS5maWxlLWxpc3Quc2luZ2xlLWZpbGUtbGlzdFwiKSxyPXQ/LnF1ZXJ5U2VsZWN0b3IoXCJ0ci5maWxlLXJvd1wiKSxuPXI/LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsZS1uYW1lXCIpLG89cj8ucXVlcnlTZWxlY3RvcihcIi5yZW1vdmUtYnV0dG9uXCIpO3JldHVybntmaWVsZDplLGxhYmVsVGV4dDpjKGUucXVlcnlTZWxlY3RvcihcIi5jb250cm9sLWxhYmVsLmZpZWxkLXRpdGxlXCIpPy50ZXh0Q29udGVudCksaW5wdXQ6ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXS5maWxlLXVwbG9hZCcpLHVwbG9hZGVkTGlzdDp0LHVwbG9hZGVkUm93OnIsdXBsb2FkZWRGaWxlTmFtZTpuLGRlbGV0ZUJ1dHRvbjpvfX1mdW5jdGlvbiBmKGUpe2lmKGUuY2xvc2VzdChcIi5oaWRkZW4sIFtoaWRkZW5dLCBbYXJpYS1oaWRkZW49J3RydWUnXSwgLnRhYi1wYW5lOm5vdCguYWN0aXZlKSwgLmNvbGxhcHNlOm5vdCguaW4pLCAucGFuZWwtY29sbGFwc2U6bm90KC5pbilcIikpcmV0dXJuITE7bGV0IHQ9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7cmV0dXJuXCJub25lXCIhPT10LmRpc3BsYXkmJlwiaGlkZGVuXCIhPT10LnZpc2liaWxpdHkmJjAhPT1OdW1iZXIodC5vcGFjaXR5fHxcIjFcIikmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNoZWNrVmlzaWJpbGl0eT9lLmNoZWNrVmlzaWJpbGl0eSgpOiEhZS5vZmZzZXRQYXJlbnR8fFwiZml4ZWRcIj09PXQucG9zaXRpb24pfWZ1bmN0aW9uIHAoKXtyZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmZvcm0tZmllbGQucWEtcmVzdW1lLXVwbG9hZFwiKSkuZmlsdGVyKGU9PmYoZSkpfWZ1bmN0aW9uIG0oZSl7Zm9yKGxldCB0IG9mIHAoKSl7bGV0IHI9ZCh0KTtpZihlKHIpKXJldHVybiByfXJldHVybiBkKG51bGwpfWZ1bmN0aW9uIGgoZSl7cmV0dXJuIWUuZmllbGQ/LmNsYXNzTGlzdC5jb250YWlucyhcImNvdmVybGV0dGVyXCIpJiYoZS5sYWJlbFRleHQuaW5jbHVkZXMoXCJyZXN1bWVcIil8fGUubGFiZWxUZXh0LmluY2x1ZGVzKFwiY3ZcIikpfWZ1bmN0aW9uIGcoZSl7cmV0dXJuISFlLmZpZWxkPy5jbGFzc0xpc3QuY29udGFpbnMoXCJjb3ZlcmxldHRlclwiKXx8ZS5sYWJlbFRleHQuaW5jbHVkZXMoXCJjb3ZlciBsZXR0ZXJcIil9ZnVuY3Rpb24gYihlKXtyZXR1cm4hIWUuZmllbGQmJiEhZS5pbnB1dCYmXCJmaWxlXCI9PT1lLmlucHV0LnR5cGUmJiEhZS51cGxvYWRlZExpc3R9ZnVuY3Rpb24geShlLHQpe2xldCByPWUudXBsb2FkZWRGaWxlTmFtZT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtyZXR1cm4hIWUudXBsb2FkZWRSb3cmJiEhciYmKCF0fHxjKHIpPT09Yyh0KSl9ZnVuY3Rpb24gdihlLHQpe2lmKCFiKGUpfHwhYih0KSlyZXR1cm4hMTtsZXQgcj1lPT5bZS5pbnB1dD8uY2xhc3NOYW1lfHxcIlwiLGUudXBsb2FkZWRMaXN0Py5jbGFzc05hbWV8fFwiXCIsISFlLmZpZWxkPy5xdWVyeVNlbGVjdG9yKFwidGFibGUudGFibGUudGFibGUtY29uZGVuc2VkLnRhYmxlLWhvdmVyXCIpLCEhZS5maWVsZD8ucXVlcnlTZWxlY3RvcihcIi5maWxldXBsb2FkLWJ1dHRvbmJhclwiKSwhIWUuZmllbGQ/LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsZWlucHV0LWJ1dHRvblwiKV0uam9pbihcInxcIik7cmV0dXJuIHIoZSk9PT1yKHQpfWZ1bmN0aW9uIHcoKXtyZXR1cm4gbShoKX1mdW5jdGlvbiBTKCl7cmV0dXJuIHkodygpKX1mdW5jdGlvbiBFKCl7cmV0dXJuIG0oZyl9ZnVuY3Rpb24geCgpe2xldCBlPXcoKSx0PUUoKTtyZXR1cm4gYihlKSYmYih0KSYmdihlLHQpP1wicmVxdWlyZWRcIjpcIlwifWFzeW5jIGZ1bmN0aW9uIEMoZSx0KXtlLmZpbGVzPXQuZmlsZXMsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITF9KSl9YXN5bmMgZnVuY3Rpb24gQShlKXt5KGUpJiZlLmRlbGV0ZUJ1dHRvbiYmKGUuZGVsZXRlQnV0dG9uLmNsaWNrKCksYXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCB0PWcoZSk/RSgpOncoKTtyZXR1cm4hdC51cGxvYWRlZFJvd30se3RpbWVvdXQ6NWUzLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmUuZmllbGR8fGRvY3VtZW50LmJvZHl9KSl9ZnVuY3Rpb24gayhlKXtyZXR1cm4gU3RyaW5nKGU/P1wiXCIpLnJlcGxhY2UoL1xccypcXCpcXHMqJC8sXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBUKGUpe3JldHVybiBrKGUucXVlcnlTZWxlY3RvcihcIi5jb250cm9sLWxhYmVsLmZpZWxkLXRpdGxlLCBsYWJlbC5jb250cm9sLWxhYmVsLCBsYWJlbFwiKT8udGV4dENvbnRlbnQpfWZ1bmN0aW9uIEYoZSl7bGV0IHQ9ZT8uJGlucHV0O2lmKHQ/LmlzQ29ubmVjdGVkKXJldHVybiB0O2xldCByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLnNlY3Rpb24tZm9ybVwiKTtpZighcilyZXR1cm4gbnVsbDtsZXQgbj1rKGUubGFiZWwpLG89QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1maWVsZFwiKSkuZmlsdGVyKGU9PlQoZSk9PT1uKS5tYXAoZT0+ZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddLCBpbnB1dFt0eXBlPSdlbWFpbCddLCBpbnB1dFt0eXBlPSd0ZWwnXSwgaW5wdXRbdHlwZT0nbnVtYmVyJ10sIGlucHV0Om5vdChbdHlwZV0pLCB0ZXh0YXJlYVwiKSkuZmlsdGVyKGU9PiEhZT8uaXNDb25uZWN0ZWQpO3JldHVybiAxPT09by5sZW5ndGg/b1swXTpudWxsfWFzeW5jIGZ1bmN0aW9uIEkoZSx0KXtpZihlLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJwb3NpdGlvbiBhcHBseWluZyBmb3JcIikpe2xldCBlPSgwLGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcvLypbQGlkPVwibWFpbi1hcHAtcm93XCJdL2Rpdi9kaXZbMV0vZGl2WzJdL3AnKTt0PWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8dH1mb3IobGV0IHI9MDtyPDI7cisrKXtsZXQgcj1GKGUpO2lmKCFyKXJldHVybiBjb25zb2xlLndhcm4oXCJbSFJNRGlyZWN0IFRleHRdIGN1cnJlbnQgaW5wdXQgbm90IGZvdW5kXCIse2xhYmVsOmU/LmxhYmVsfSksITE7aWYoci5mb2N1cygpLGF3YWl0ICgwLHMuZGVsYXkpKDEwMCksci52YWx1ZT1cIlwiLHIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLHMuZGVsYXkpKDEwMCksIShyPUYoZSkpKWNvbnRpbnVlO3IudmFsdWU9dCxyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksci5ibHVyKCksYXdhaXQgKDAscy5kZWxheSkoMTAwKTtsZXQgbj1GKGUpO2lmKG4/LnZhbHVlPT09dClyZXR1cm4hMH1yZXR1cm4gY29uc29sZS53YXJuKFwiW0hSTURpcmVjdCBUZXh0XSBjb21taXQgcmVhZGJhY2sgZmFpbGVkXCIse2xhYmVsOmUubGFiZWx9KSwhMX1hc3luYyBmdW5jdGlvbiBqKGUsdCl7aWYoIWV8fCEoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpfHwhdClyZXR1cm47aWYoXCJjdXJyZW50XCI9PT10WzBdKXt0cnl7bGV0IHQ9ZS5wYXJlbnRFbGVtZW50O2lmKCF0KXtjb25zb2xlLndhcm4oXCJbZmlsbERhdGVGaWVsZF0gUGFyZW50IGVsZW1lbnQgbm90IGZvdW5kXCIpO3JldHVybn1sZXQgcj10Lm5leHRFbGVtZW50U2libGluZztpZighcil7Y29uc29sZS53YXJuKFwiW2ZpbGxEYXRlRmllbGRdIE5leHQgc2libGluZyBlbGVtZW50IG5vdCBmb3VuZFwiKTtyZXR1cm59bGV0IG49ci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7aWYoIW4pe2NvbnNvbGUud2FybihcIltmaWxsRGF0ZUZpZWxkXSBDaGVja2JveCBpbnB1dCBub3QgZm91bmQgaW4gbmV4dCBzaWJsaW5nXCIpO3JldHVybn1pZihcImNoZWNrYm94XCIhPT1uLnR5cGUpe2NvbnNvbGUud2FybihgW2ZpbGxEYXRlRmllbGRdIEZvdW5kIGlucHV0IGlzIG5vdCBhIGNoZWNrYm94LCB0eXBlOiAke24udHlwZX1gKTtyZXR1cm59bi5mb2N1cygpLGF3YWl0ICgwLHMuZGVsYXkpKDEwMCksbi5jaGVja2VkfHwobi5jbGljaygpLGF3YWl0ICgwLHMuZGVsYXkpKDE1MCksbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLG4uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLHMuZGVsYXkpKDEwMCkpLG4uYmx1cigpfWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoXCJbZmlsbERhdGVGaWVsZF0gRXJyb3IgaGFuZGxpbmcgJ2N1cnJlbnQnIGNoZWNrYm94OlwiLGUpfXJldHVybn1lLmZvY3VzKCksYXdhaXQgKDAscy5kZWxheSkoMTAwKTtsZXQgcj0oMCx1LmZvcm1hdERhdGUpKHQpO2UudmFsdWU9cixlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksZS5ibHVyKCksYXdhaXQgKDAscy5kZWxheSkoMTAwKX1mdW5jdGlvbiBEKGUpe3JldHVybiBlP2UudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05XS9nLFwiXCIpOlwiXCJ9YXN5bmMgZnVuY3Rpb24gUChlLHQpe2xldCByPWUuJGlucHV0O2lmKCFyfHxcIlNFTEVDVFwiIT09ci50YWdOYW1lKXJldHVybiBjb25zb2xlLndhcm4oXCJbSFJNRGlyZWN0IFNlbGVjdF0gbGl2ZSBjb250cm9sIGlzIG5vdCBhIHNlbGVjdFwiLHtsYWJlbDplLmxhYmVsLHRhZ05hbWU6cj8udGFnTmFtZSxjb25uZWN0ZWQ6cj8uaXNDb25uZWN0ZWR9KSwhMTtsZXQgbj1BcnJheS5pc0FycmF5KHQpP3RbMF06dDtEKG4pO2xldCBpPVsoZSx0KT0+KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKGUsXCJib29sZWFuXCI9PXR5cGVvZiBuP1N0cmluZyhuKTpuKSwoZSx0KT0+KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKHQsXCJib29sZWFuXCI9PXR5cGVvZiBuP1N0cmluZyhuKTpuKV07Zm9yKGxldCBlIG9mIGkpZm9yKGxldCB0PTA7dDxyLm9wdGlvbnMubGVuZ3RoO3QrKyl7bGV0IG49ci5vcHRpb25zW3RdLG89bi50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiLGk9bi52YWx1ZXx8XCJcIjtpZigob3x8aSkmJmUobyxpKSlyZXR1cm4gci5zZWxlY3RlZEluZGV4PXQsci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLHMuZGVsYXkpKDEwMCksITB9cmV0dXJuIGNvbnNvbGUud2FybihgZmlsbFNlbGVjdEZpZWxkOiBObyBtYXRjaGluZyBvcHRpb24gZm91bmQgZm9yIFwiJHtufVwiLmAsYEF2YWlsYWJsZTogJHtBcnJheS5mcm9tKHIub3B0aW9ucykubWFwKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKXx8ZS52YWx1ZSkuam9pbihcIiB8IFwiKX1gKSwhMX1hc3luYyBmdW5jdGlvbiBfKGUsdCl7bGV0IHI9QXJyYXkuaXNBcnJheSh0KT90WzBdOnQsbj1lLiRpbnB1dDtpZighbil7Y29uc29sZS53YXJuKFwiZmlsbFJhZGlvR3JvdXBGaWxlZDogUmFkaW8gZ3JvdXAgaW5wdXQgZWxlbWVudCBtaXNzaW5nXCIpO3JldHVybn1sZXQgaT1uLmNsb3Nlc3QoXCIuZm9ybS1ncm91cC5yYWRpby1ncm91cCwgLmZvcm0tZmllbGRcIil8fG4uY2xvc2VzdChcImZvcm1cIil8fGRvY3VtZW50LmJvZHksYT1uLm5hbWUsbD1BcnJheS5mcm9tKGkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykpLHU9YT9sLmZpbHRlcihlPT5lLm5hbWU9PT1hKTpsO2lmKDA9PT11Lmxlbmd0aCl7Y29uc29sZS53YXJuKFwiZmlsbFJhZGlvR3JvdXBGaWxlZDogTm8gcmFkaW9zIGZvdW5kIGZvciBncm91cDpcIixhKTtyZXR1cm59bGV0IGM9ZT0+e2xldCB0PVwiXCIscj1lLmNsb3Nlc3QoXCJsYWJlbFwiKTtpZihyJiYodD1yLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIpLCF0JiZlLmlkKXtsZXQgcj1pLnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZS5pZH1cIl1gKTtyJiYodD1yLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIpfXJldHVybiB0fHxlLnBhcmVudEVsZW1lbnQ/LnRhZ05hbWUhPT1cIkxBQkVMXCJ8fCh0PWUucGFyZW50RWxlbWVudC50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiKSx0fHwodD1lLm5leHRFbGVtZW50U2libGluZz8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIiksdHx8KHQ9ZS5wYXJlbnRFbGVtZW50Py5uZXh0RWxlbWVudFNpYmxpbmc/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCIpLHR8fFwiXCJ9O0Qocik7bGV0IGQ9WyhlLHQpPT4oMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkoZSxcImJvb2xlYW5cIj09dHlwZW9mIHI/U3RyaW5nKHIpOnIpLChlLHQpPT4oMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkodCxcImJvb2xlYW5cIj09dHlwZW9mIHI/U3RyaW5nKHIpOnIpXTtmb3IobGV0IGUgb2YgZClmb3IobGV0IHQgb2YgdSl7bGV0IHI9Yyh0KSxuPXQudmFsdWU7aWYoZShyLG4pKXt0LmNoZWNrZWR8fCh0LmNsaWNrKCksYXdhaXQgKDAscy5kZWxheSkoMTAwKSx0LmNoZWNrZWR8fCh0LmNoZWNrZWQ9ITAsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLHMuZGVsYXkpKDEwMCkpKTtyZXR1cm59fWxldCBmPXUubWFwKGU9PntsZXQgdD1jKGUpO3JldHVybmBcIiR7dHx8ZS52YWx1ZX1cImB9KS5qb2luKFwiLCBcIik7Y29uc29sZS53YXJuKGBmaWxsUmFkaW9Hcm91cEZpbGVkOiBObyBtYXRjaGluZyByYWRpbyBvcHRpb24gZm91bmQgZm9yIHZhbHVlIFwiJHtyfVwiLiBUb3RhbCByYWRpb3MgaW4gZ3JvdXA6ICR7dS5sZW5ndGh9LiBBdmFpbGFibGUgb3B0aW9uczogJHtmfWApfWFzeW5jIGZ1bmN0aW9uIEwoZSx0KXtsZXQgcj1lLG49ci4kY2hlY2tib3hzO2lmKCFufHwwPT09bi5sZW5ndGgpe2xldCBlPXIuJGlucHV0O249ZSYmZS5uYW1lP0FycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW25hbWU9XCIke2UubmFtZX1cIl1gKSk6ZT9bZV06W119aWYoMD09PW4ubGVuZ3RoKXtjb25zb2xlLndhcm4oXCJmaWxsQ2hlY2tib3hGaWVsZDogTm8gY2hlY2tib3hlcyBmb3VuZFwiKTtyZXR1cm59bGV0IG89YXN5bmMoZSx0KT0+e2lmKGUuY2hlY2tlZD09PXQpcmV0dXJuO2UuY2xpY2soKSxhd2FpdCAoMCxzLmRlbGF5KSgxNTApO2xldCByPTA7Zm9yKDtlLmNoZWNrZWQhPT10JiZyPDM7KWUuY2hlY2tlZD10LGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxzLmRlbGF5KSgxMDApLHIrKztlLmNoZWNrZWQhPT10JiZjb25zb2xlLndhcm4oYGZpbGxDaGVja2JveEZpZWxkOiBGYWlsZWQgdG8gc2V0IGNoZWNrYm94IHN0YXRlIHRvICR7dH1gKX0saT1lPT57aWYoZS5pZCl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApO2lmKHQpcmV0dXJuIHQudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIn1pZihlLnBhcmVudEVsZW1lbnQ/LnRhZ05hbWU9PT1cIkxBQkVMXCIpcmV0dXJuIGUucGFyZW50RWxlbWVudC50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO2xldCB0PWUuY2xvc2VzdChcImxhYmVsXCIpO3JldHVybiB0P3QudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjplLnZhbHVlfHxcIlwifTtpZihBcnJheS5pc0FycmF5KHQpKXtsZXQgZT10Lm1hcChlPT5TdHJpbmcoZSkudHJpbSgpKTtmb3IobGV0IHQgb2Ygbil7bGV0IHI9dCxuPWkocik7aWYoIW4pe2NvbnNvbGUud2FybihcImZpbGxDaGVja2JveEZpZWxkOiBDYW5ub3QgZGV0ZXJtaW5lIGxhYmVsIHRleHQgZm9yXCIscik7Y29udGludWV9bGV0IGE9ZS5pbmNsdWRlcyhuKTthd2FpdCBvKHIsYSl9cmV0dXJufWxldCBhPSEwPT09dHx8XCJZZXNcIj09PXR8fFwidHJ1ZVwiPT09dHx8XCJ5ZXNcIj09PVN0cmluZyh0KS50b0xvd2VyQ2FzZSgpO2ZvcihsZXQgZSBvZiBuKXtsZXQgdD1lO2F3YWl0IG8odCxhKX19YXN5bmMgZnVuY3Rpb24gUihlLHQscil7bGV0IG49dygpO2lmKCFiKG4pfHwhbi5pbnB1dCl7Y29uc29sZS53YXJuKFwiTm8gcmVzdW1lIGZpZWxkIGZvdW5kXCIpO3JldHVybn1hd2FpdCBBKG4pLHQoe2xhYmVsOlwiUmVzdW1lL0NWXCIscmVxdWlyZWQ6ITB9KTtsZXQgbz1hd2FpdCAoMCxpLmZldGNoUGRmQXNCbG9iKShlKSxhPW8uZmlsZXM/LlswXT8ubmFtZXx8XCJcIjthd2FpdCBDKG4uaW5wdXQsbyk7bGV0IHM9YXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCBlPXcoKTtyZXR1cm4geShlLGEpfSx7dGltZW91dDoxZTQsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6bi5maWVsZHx8ZG9jdW1lbnQuYm9keX0pO3MmJnIoXCJSZXN1bWUvQ1ZcIil9YXN5bmMgZnVuY3Rpb24gTyhlLHQscil7bGV0IG49RSgpO2lmKFwicmVxdWlyZWRcIiE9PXgoKXx8IWIobil8fCFuLmlucHV0KXJldHVybiExO2F3YWl0IEEobiksdCh7bGFiZWw6XCJDb3ZlciBMZXR0ZXJcIixyZXF1aXJlZDohMH0pO2xldCBvPWAke2UuY292ZXJMZXR0ZXJOYW1lfS5wZGZgO3JldHVybiBhd2FpdCBDKG4uaW5wdXQsYXdhaXQgKDAsaS5mZXRjaENvdmVyTGV0dGVyUGRmQXNCbG9iKShlKSksYXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCBlPUUoKTtyZXR1cm4geShlLG8pfSx7dGltZW91dDoxZTQsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6bi5maWVsZHx8ZG9jdW1lbnQuYm9keX0pLnRoZW4oZT0+KGUmJnIoXCJDb3ZlciBMZXR0ZXJcIiksZSkpfWFzeW5jIGZ1bmN0aW9uIE0oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2RhdGEtbG9jYWxpemVkLWtleT1cImZvcm1zLmFwcGxpY2F0aW9uLmZpbGUtcmVtb3ZlXCJdJyk7ZSYmKGUuY2xpY2soKSxhd2FpdCAoMCxzLmRlbGF5KSg1MDApKX1hc3luYyBmdW5jdGlvbiBOKCl7bGV0IGU9KDAsYS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vYVtAY2xhc3M9XCJidG4gYnRuLWJsb2NrLXhzIGJ0bi1kZWZhdWx0IGFkZC1yb3ctYnV0dG9uXCIgYW5kIGFuY2VzdG9yOjpkaXZbQGNsYXNzPVwic2VjdGlvbi1jb250YWluZXJcIl1dL2FuY2VzdG9yOjpkaXZbQGNsYXNzPVwic2VjdGlvbi1jb250YWluZXJcIl0nKTtpZigwIT09ZS5sZW5ndGgpZm9yKGxldCB0IG9mIGUpYXdhaXQgQih0KX1mdW5jdGlvbiAkKGUpe3JldHVybigwLGEuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vL2RpdltAY2xhc3M9XCJzZWN0aW9uLXJlcGVhdGFibGVcIl0nLGUpLmxlbmd0aH1hc3luYyBmdW5jdGlvbiBCKGUpe2xldCB0PSgwLGEuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vL2FbQGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGVmYXVsdCBoaWRkZW4tcHJpbnQgcmVtb3ZlLXJvdy1idXR0b25cIl0nLGUpO2lmKDEhPT10Lmxlbmd0aClmb3IobGV0IGUgb2YgdCl7ZS5jbGljaygpLGF3YWl0ICgwLHMuZGVsYXkpKDUwMCk7bGV0IHQ9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIvL2J1dHRvbltAZGF0YS1iYi1oYW5kbGVyPSdjb25maXJtJyBhbmQgdGV4dCgpPSdSZW1vdmUnXVwiKTtpZighdClyZXR1cm47dC5jbGljaygpLGF3YWl0ICgwLHMuZGVsYXkpKDIwMCl9fWFzeW5jIGZ1bmN0aW9uIHEoZSl7bGV0IHQ9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2FbQGNsYXNzPVwiYnRuIGJ0bi1ibG9jay14cyBidG4tZGVmYXVsdCBhZGQtcm93LWJ1dHRvblwiXScsZSk7aWYoIXQpe2NvbnNvbGUud2FybihcIlthZGRFZHVPckV4cFNlY3Rpb25dIEFkZCBidXR0b24gbm90IGZvdW5kXCIpO3JldHVybn1sZXQgcj0kKGUpO3QuY2xpY2soKSxhd2FpdCAoMCxzLmRlbGF5KSgyMDApO2xldCBuPSQoZSksbz0wLGk9MzA7Zm9yKDtuPT09ciYmbzxpOylhd2FpdCAoMCxzLmRlbGF5KSgxMDApLG49JChlKSxvKys7bjw9ciYmY29uc29sZS53YXJuKGBbYWRkRWR1T3JFeHBTZWN0aW9uXSBcXHUyNzE3IEZhaWxlZCB0byBhZGQgc2VjdGlvbi4gQ291bnQgcmVtYWluZWQ6ICR7bn1gKSxhd2FpdCAoMCxzLmRlbGF5KSgzMDApfWFzeW5jIGZ1bmN0aW9uIFUoKXthd2FpdCAoMCxzLmRlbGF5KSg1MDApfVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5jMjBlOTBmYy5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);